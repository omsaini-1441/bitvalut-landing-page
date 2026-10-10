import LoginForm from "./login-form";
import { getPublicSupabaseConfig } from "@/lib/env";
import Link from "next/link";

function safeNext(value: string | undefined) {
  return value?.startsWith("/") && !value.startsWith("//")
    ? value
    : "/download";
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; error?: string }>;
}) {
  const params = await searchParams;
  const nextPath = safeNext(params.next);

  return (
    <main className="auth-page">
      <Link className="auth-wordmark" href="/">
        BitVault
      </Link>
      <section className="auth-certificate">
        <div className="auth-copy">
          <span className="document-serial">Access document · BV-FREE</span>
          <h1>Claim your free copy.</h1>
          <p>
            Sign in before downloading BitVault. Your account records the
            download and gives you an optional place to protect your recovery
            key. It does not sync or contain your Android vault.
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
              Sign-in could not be completed. Please try again.
            </p>
          ) : null}
          <LoginForm
            nextPath={nextPath}
            configured={Boolean(getPublicSupabaseConfig())}
          />
          <p className="auth-footnote">
            By continuing, you create a website account. The BitVault Android
            app remains offline and does not sign in to this account.
          </p>
        </div>
      </section>
    </main>
  );
}
