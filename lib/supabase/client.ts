"use client";

import { getPublicSupabaseConfig } from "@/lib/env";
import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  const config = getPublicSupabaseConfig();
  return config
    ? createBrowserClient(config.url, config.anonKey)
    : null;
}
