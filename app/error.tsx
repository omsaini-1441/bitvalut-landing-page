"use client";

import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="document-shell">
      <main className="status-page">
        <Link className="auth-wordmark" href="/">
          BitVault
        </Link>
        <p className="document-serial">Interrupted document</p>
        <h1>This page did not finish loading.</h1>
        <p>
          Something on our side failed before the page could be shown. Your
          vault is still only on your phone. Try again, or return home.
        </p>
        <div className="status-actions">
          <button className="button button-primary" type="button" onClick={() => reset()}>
            Try again
          </button>
          <Link className="text-link" href="/">
            Back to BitVault
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
