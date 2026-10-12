import { getSiteUrl } from "@/lib/env";
import { site } from "@/lib/site";

export function GET() {
  const body = [
    `Contact: ${site.contactUrl}`,
    "Expires: 2027-10-12T00:00:00.000Z",
    "Preferred-Languages: en",
    `Canonical: ${getSiteUrl()}/.well-known/security.txt`,
    "",
    "# Do not include recovery keys, master passwords, or vault files.",
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
