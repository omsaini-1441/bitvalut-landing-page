import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="document-shell">
      <main className="status-page">
        <Link className="auth-wordmark" href="/">
          BitVault
        </Link>
        <p className="document-serial">Missing document · 404</p>
        <h1>This page is not on file.</h1>
        <p>
          That address does not match a page on this site. The Android vault
          is not stored here either.
        </p>
        <div className="status-actions">
          <Link className="button button-primary" href="/">
            Back to BitVault
          </Link>
          <Link className="text-link" href="/login">
            Sign in
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
