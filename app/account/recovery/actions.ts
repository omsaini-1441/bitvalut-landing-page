"use server";

import {
  decryptRecoveryKey,
  encryptRecoveryKey,
  type RecoveryKeyEnvelope,
} from "@/lib/crypto/recovery-key";
import { getServerConfig } from "@/lib/env.server";
import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export type RecoveryActionState = {
  status: "idle" | "success" | "error";
  message?: string;
  recoveryKey?: string;
};

async function authenticatedContext() {
  const supabase = await createClient();
  const serverConfig = getServerConfig();
  if (!supabase || !serverConfig) return null;
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user ? { supabase, serverConfig, user } : null;
}

export async function saveRecoveryKey(
  _previous: RecoveryActionState,
  formData: FormData,
): Promise<RecoveryActionState> {
  const context = await authenticatedContext();
  if (!context) {
    return { status: "error", message: "Sign in again before saving your key." };
  }

  const recoveryKey = String(formData.get("recoveryKey") ?? "").trim();
  const confirmation = String(formData.get("confirmation") ?? "");
  if (recoveryKey.length < 16 || recoveryKey.length > 512) {
    return {
      status: "error",
      message: "Enter the complete recovery key shown by BitVault.",
    };
  }
  if (confirmation !== "SAVE") {
    return {
      status: "error",
      message: 'Type “SAVE” to confirm that this is your recovery key.',
    };
  }

  const envelope = encryptRecoveryKey(
    recoveryKey,
    context.serverConfig.recoveryKeyKek,
  );
  const { error } = await context.supabase.from("recovery_keys").upsert(
    {
      user_id: context.user.id,
      ciphertext: envelope.ciphertext,
      data_iv: envelope.dataIv,
      data_tag: envelope.dataTag,
      wrapped_key: envelope.wrappedKey,
      key_iv: envelope.keyIv,
      key_tag: envelope.keyTag,
      key_version: envelope.keyVersion,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id" },
  );

  if (error) {
    return {
      status: "error",
      message: "The encrypted key could not be saved. Please try again.",
    };
  }

  revalidatePath("/account");
  return {
    status: "success",
    message: "Saved. Only this signed-in account can open it.",
  };
}

export async function revealRecoveryKey(
  _previous: RecoveryActionState,
  _formData: FormData,
): Promise<RecoveryActionState> {
  const context = await authenticatedContext();
  if (!context) {
    return { status: "error", message: "Sign in again to reveal your key." };
  }
  const signedInAt = context.user.last_sign_in_at
    ? new Date(context.user.last_sign_in_at).getTime()
    : 0;
  if (Date.now() - signedInAt > 10 * 60 * 1000) {
    return {
      status: "error",
      message: "For safety, sign out and sign in again before revealing the key.",
    };
  }

  const { data, error } = await context.supabase
    .from("recovery_keys")
    .select(
      "ciphertext,data_iv,data_tag,wrapped_key,key_iv,key_tag,key_version",
    )
    .eq("user_id", context.user.id)
    .single();

  if (error || !data) {
    return { status: "error", message: "No saved recovery key was found." };
  }

  try {
    const envelope: RecoveryKeyEnvelope = {
      ciphertext: data.ciphertext,
      dataIv: data.data_iv,
      dataTag: data.data_tag,
      wrappedKey: data.wrapped_key,
      keyIv: data.key_iv,
      keyTag: data.key_tag,
      keyVersion: data.key_version,
    };
    return {
      status: "success",
      message: "Recovery key decrypted for this session.",
      recoveryKey: decryptRecoveryKey(
        envelope,
        context.serverConfig.recoveryKeyKek,
      ),
    };
  } catch {
    return {
      status: "error",
      message: "The saved key failed its integrity check.",
    };
  }
}

export async function deleteRecoveryKey(
  _previous: RecoveryActionState,
  formData: FormData,
): Promise<RecoveryActionState> {
  const context = await authenticatedContext();
  if (!context) {
    return { status: "error", message: "Sign in again before deleting." };
  }
  if (String(formData.get("confirmation") ?? "") !== "DELETE") {
    return {
      status: "error",
      message: 'Type “DELETE” to remove the saved recovery key.',
    };
  }

  const { error } = await context.supabase
    .from("recovery_keys")
    .delete()
    .eq("user_id", context.user.id);

  if (error) {
    return { status: "error", message: "The key could not be deleted." };
  }
  revalidatePath("/account");
  return { status: "success", message: "Saved recovery key deleted." };
}
