import { getServerConfig } from "@/lib/env.server";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const supabase = await createClient();
  const serverConfig = getServerConfig();
  const admin = createAdminClient();

  if (!supabase || !serverConfig || !admin) {
    return NextResponse.json(
      { error: "Download delivery is not configured." },
      { status: 503 },
    );
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("next", "/account");
    return NextResponse.redirect(loginUrl);
  }

  const { error } = await admin.from("download_events").insert({
    user_id: user.id,
    release_url: serverConfig.apkDownloadUrl,
    user_agent: request.headers.get("user-agent")?.slice(0, 500) ?? null,
    referrer: request.headers.get("referer")?.slice(0, 500) ?? null,
  });

  if (error) {
    return NextResponse.json(
      { error: "The download could not be recorded. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.redirect(serverConfig.apkDownloadUrl, 302);
}
