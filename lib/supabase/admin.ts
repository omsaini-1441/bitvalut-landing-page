import { getPublicSupabaseConfig } from "@/lib/env";
import { getServerConfig } from "@/lib/env.server";
import { createClient } from "@supabase/supabase-js";
import "server-only";

export function createAdminClient() {
  const publicConfig = getPublicSupabaseConfig();
  const serverConfig = getServerConfig();
  if (!publicConfig || !serverConfig) return null;

  return createClient(publicConfig.url, serverConfig.supabaseServiceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}
