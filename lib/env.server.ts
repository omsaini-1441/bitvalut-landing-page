import "server-only";

export type ServerConfig = {
  apkDownloadUrl: string;
  supabaseServiceRoleKey: string;
  recoveryKeyKek: string;
};

export function getServerConfig(): ServerConfig | null {
  const apkDownloadUrl = process.env.APK_DOWNLOAD_URL?.trim();
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
  const recoveryKeyKek = process.env.RECOVERY_KEY_KEK?.trim();

  return apkDownloadUrl && supabaseServiceRoleKey && recoveryKeyKek
    ? { apkDownloadUrl, supabaseServiceRoleKey, recoveryKeyKek }
    : null;
}
import "server-only";

/**
 * Server-only config. Never import this from Client Components.
 * Dashboard / API secrets land here later.
 */
function optional(value: string | undefined): string | undefined {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
}

export const serverEnv = {
  port: Number(process.env.PORT ?? "3000"),
  nodeEnv: process.env.NODE_ENV ?? "development",
  dashboardApiUrl: optional(process.env.DASHBOARD_API_URL),
  databaseUrl: optional(process.env.DATABASE_URL),
  authSecret: optional(process.env.AUTH_SECRET),
  authUrl: optional(process.env.AUTH_URL),
} as const;
