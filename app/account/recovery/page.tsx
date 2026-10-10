import { getServerConfig } from "@/lib/env.server";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import RecoveryManager from "./recovery-manager";

export default async function RecoveryPage() {
  const supabase = await createClient();
  const userResult = supabase ? await supabase.auth.getUser() : null;
  const user = userResult?.data.user ?? null;
  if (supabase && !user) redirect("/login?next=/account/recovery");

  const { data: storedKey } =
    supabase && user
      ? await supabase
          .from("recovery_keys")
          .select("updated_at")
          .eq("user_id", user.id)
          .maybeSingle()
      : { data: null };

  const configured = Boolean(supabase && getServerConfig() && user);

  return (
    <main className="account-page recovery-account-page">
      <header className="account-nav">
        <Link href="/" className="auth-wordmark">
          BitVault
        </Link>
        <Link href="/download">Download</Link>
        {user ? <a href="/auth/signout">Sign out</a> : null}
      </header>
      <section className="recovery-console">
        <div className="recovery-console-copy">
          <span className="document-serial">Recovery document · Private</span>
          <h1>Your second way back in.</h1>
          <p>
            Your recovery key can unlock the Android vault if you forget the
            master password. This website stores only an envelope-encrypted
            copy; the database never receives plaintext.
          </p>
          <div className="trust-note">
            <strong>Important trust detail</strong>
            <p>
              This is server-managed encryption, not zero-knowledge storage.
              BitVault&apos;s server can decrypt the key after you authenticate.
              Keep an offline copy too.
            </p>
          </div>
        </div>
        <div className="recovery-console-panel">
          <p className="claim-label">
            {storedKey ? "Recovery key on file" : "No recovery key saved"}
          </p>
          <RecoveryManager
            hasKey={Boolean(storedKey)}
            updatedAt={storedKey?.updated_at ?? null}
            configured={configured}
          />
        </div>
      </section>
    </main>
  );
}
