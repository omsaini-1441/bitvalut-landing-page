import { SiteFooter } from "@/components/site-footer";
import LoginForm from "./login-form";
import { getPublicSupabaseConfig } from "@/lib/env";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign in",
  description:
    "Sign in to download BitVault for Android. The website account does not sync the vault.",
  alternates: { canonical: "/login" },
  robots: { index: false, follow: false },
};

function safeNext(value: string | undefined) {
  return value?.startsWith("/") && !value.startsWith("//")
    ? value
    : "/account";
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; error?: string; detail?: string }>;
}) {
  const params = await searchParams;
  const nextPath = safeNext(params.next);

  return (
    <div className="document-shell">
    <main className="auth-page">
      <Link className="auth-wordmark" href="/">
        BitVault
      </Link>
      <section className="auth-certificate">
        <div className="auth-copy">
          <span className="document-serial">Access document · BV-FREE</span>
          <h1>Claim your free copy.</h1>
          <p>
            Sign in with a password before downloading BitVault. No inbox
            check is required. Your account records the download and gives you
            an optional place to protect your recovery key. It does not sync
            or contain your Android vault.
          </p>
          <ul>
            <li>Free APK access</li>
            <li>Download history</li>
            <li>Encrypted recovery-key storage</li>
          </ul>
        </div>
        <div className="auth-stub">
          <p className="claim-label">Verify access</p>
          {params.error ? (
            <p className="auth-message auth-message-error">
              {params.detail ||
                "Sign-in could not be completed. Please try again."}
            </p>
          ) : null}
          <LoginForm
            nextPath={nextPath}
            configured={Boolean(getPublicSupabaseConfig())}
          />
          <p className="auth-footnote">
            By continuing, you agree to the <Link href="/terms">Terms</Link>{" "}
            and acknowledge the <Link href="/privacy">Privacy policy</Link>.
            This creates a website account only. The Android app stays offline
            and does not sign in here.
          </p>
        </div>
      </section>
    </main>
    <SiteFooter />
    </div>
  );
}
