import { SiteFooter } from "@/components/site-footer";
import { getServerConfig } from "@/lib/env.server";
import { createClient } from "@/lib/supabase/server";
import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Download",
  robots: { index: false, follow: false },
};

export default async function DownloadPage() {
  const supabase = await createClient();
  const userResult = supabase ? await supabase.auth.getUser() : null;
  const user = userResult?.data.user ?? null;

  if (supabase && !user) redirect("/login?next=/download");

  return (
    <div className="document-shell">
    <main className="account-page">
      <header className="account-nav">
        <Link href="/" className="auth-wordmark">
          BitVault
        </Link>
        <span>Access granted</span>
        {user ? <a href="/auth/signout">Sign out</a> : null}
      </header>
      <section className="download-pass">
        <div className="download-copy">
          <span className="document-serial">Authenticated release · Android</span>
          <h1>Your copy is ready.</h1>
          <p>
            Install the APK on your Android phone. The download is recorded to
            your account; your vault contents never pass through this website.
          </p>
          {getServerConfig() && user ? (
            <a className="button button-primary download-button" href="/api/download">
              Download BitVault APK
            </a>
          ) : (
            <div className="auth-message auth-message-error">
              Download delivery is waiting for server configuration. Add the
              required private values from <code>.env.example</code>.
            </div>
          )}
        </div>
        <aside className="release-stub">
          <span>Account</span>
          <strong>{user?.email ?? "Setup mode"}</strong>
          <span>Platform</span>
          <strong>Android</strong>
          <span>Price</span>
          <strong>Free for now</strong>
          <i />
        </aside>
      </section>
      <section className="download-next">
        <div>
          <h2>One more thing before you go.</h2>
          <p>
            When BitVault shows your recovery key during setup, save it
            somewhere separate from the phone. Your account can hold an
            encrypted copy.
          </p>
        </div>
        <Link className="button recovery-action" href="/account/recovery">
          Open recovery safe
        </Link>
      </section>
    </main>
    <SiteFooter />
    </div>
  );
}
