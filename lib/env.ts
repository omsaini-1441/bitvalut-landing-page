/**
 * Client-safe public config. Only NEXT_PUBLIC_* values live here.
 * Source of truth: `.env` / `.env.local` (see `.env.example`).
 */
function required(name: string, value: string | undefined): string {
  if (!value?.trim()) {
    throw new Error(
      `Missing ${name}. Copy .env.example to .env (and .env.local) then restart the server.`,
    );
  }
  return value.trim();
}

export const publicEnv = {
  siteUrl: required("NEXT_PUBLIC_SITE_URL", process.env.NEXT_PUBLIC_SITE_URL),
  apkUrl: required("NEXT_PUBLIC_APK_URL", process.env.NEXT_PUBLIC_APK_URL),
} as const;
