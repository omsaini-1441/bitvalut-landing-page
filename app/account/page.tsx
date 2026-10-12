import { SiteFooter } from "@/components/site-footer";
import RecoveryManager from "@/app/account/recovery/recovery-manager";
import { getServerConfig } from "@/lib/env.server";
import { createClient } from "@/lib/supabase/server";
import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Your account",
  robots: { index: false, follow: false },
};

export default async function AccountPage() {
  const supabase = await createClient();
  const userResult = supabase ? await supabase.auth.getUser() : null;
  const user = userResult?.data.user ?? null;

  if (supabase && !user) redirect("/login?next=/account");

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
    <div className="document-shell">
      <main className="account-page">
        <header className="account-nav">
          <Link href="/" className="auth-wordmark">
            BitVault
          </Link>
          <span>Your account</span>
          {user ? <a href="/auth/signout">Sign out</a> : null}
        </header>

        <section className="download-pass">
          <div className="download-copy">
            <span className="document-serial">Account · Android</span>
            <h1>Download, then save the key.</h1>
            <p>
              This website account is only for downloading BitVault and holding
              a copy of the recovery key. The app creates that key during
              setup. The vault itself stays on the phone and is not synced
              here.
            </p>
            {configured ? (
              <a className="button button-primary download-button" href="/api/download">
                Download BitVault APK
              </a>
            ) : (
              <div className="auth-message auth-message-error">
                Download delivery is waiting for server configuration.
              </div>
            )}
          </div>
          <aside className="release-stub">
            <span>Signed in as</span>
            <strong>{user?.email ?? "Setup mode"}</strong>
            <span>Platform</span>
            <strong>Android</strong>
            <span>Vault</span>
            <strong>On the phone only</strong>
            <i />
          </aside>
        </section>

        <section className="recovery-console account-recovery">
          <div className="recovery-console-copy">
            <span className="document-serial">Recovery key · This account only</span>
            <h2>After you install, save the key here.</h2>
            <p>
              BitVault shows the recovery key once on the phone. We do not
              create it. Paste the key, or choose the text file you saved from
              the app. Only this signed-in account can open the stored copy.
            </p>
            <div className="trust-note">
              <strong>What is stored</strong>
              <p>
                The key is encrypted before it is saved. This is not
                zero-knowledge storage: after you sign in, the server can
                decrypt it to show it to you. Your logins never come to this
                website. Details are in the <Link href="/privacy">privacy policy</Link>.
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
      <SiteFooter />
    </div>
  );
}
