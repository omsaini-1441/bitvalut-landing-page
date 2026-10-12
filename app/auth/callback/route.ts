import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

function safeNext(value: string | null) {
  return value?.startsWith("/") && !value.startsWith("//")
    ? value
    : "/account";
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const jar = await cookies();
  const remembered = jar.get("bv-next")?.value ?? null;
  const nextPath = safeNext(
    url.searchParams.get("next") ??
      (remembered ? decodeURIComponent(remembered) : null),
  );
  const supabase = await createClient();

  const redirect = (path: string) => {
    const response = NextResponse.redirect(new URL(path, url.origin));
    response.cookies.set("bv-next", "", { path: "/", maxAge: 0 });
    return response;
  };

  if (code && supabase) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) return redirect(nextPath);
    const failed = new URL("/login", url.origin);
    failed.searchParams.set("error", "callback");
    failed.searchParams.set("detail", error.message.slice(0, 180));
    failed.searchParams.set("next", nextPath);
    const response = NextResponse.redirect(failed);
    response.cookies.set("bv-next", "", { path: "/", maxAge: 0 });
    return response;
  }

  const loginUrl = new URL("/login", url.origin);
  loginUrl.searchParams.set("error", "callback");
  const detail = url.searchParams.get("error_description");
  if (detail) loginUrl.searchParams.set("detail", detail.slice(0, 180));
  loginUrl.searchParams.set("next", nextPath);
  const response = NextResponse.redirect(loginUrl);
  response.cookies.set("bv-next", "", { path: "/", maxAge: 0 });
  return response;
}
