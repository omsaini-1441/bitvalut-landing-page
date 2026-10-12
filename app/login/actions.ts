"use server";

import { createAdminClient } from "@/lib/supabase/admin";

export async function createConfirmedAccount(email: string, password: string) {
  const admin = createAdminClient();
  if (!admin) {
    return { ok: false as const, message: "Account setup is not configured." };
  }

  const normalized = email.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized) || password.length < 8) {
    return {
      ok: false as const,
      message: "Use a real email and a password of at least 8 characters.",
    };
  }
  if (password.length > 72) {
    return { ok: false as const, message: "Use a password of 72 characters or fewer." };
  }

  const { error } = await admin.auth.admin.createUser({
    email: normalized,
    password,
    email_confirm: true,
  });

  if (error) {
    const already = /already|registered|exists/i.test(error.message);
    return {
      ok: false as const,
      message: already
        ? "That email already has an account. Sign in with its password."
        : "The account could not be created. Try again.",
    };
  }

  return { ok: true as const };
}
