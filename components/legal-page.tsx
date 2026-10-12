import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";
import Link from "next/link";
import type { ReactNode } from "react";

export function LegalPage({
  serial,
  title,
  children,
}: {
  serial: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="document-shell">
      <main className="legal-page">
        <Link className="auth-wordmark" href="/">
          BitVault
        </Link>
        <article className="legal-document">
          <p className="document-serial">{serial}</p>
          <h1>{title}</h1>
          <p className="legal-updated">Last updated {site.policiesUpdated}</p>
          {children}
          <p className="legal-related">
            <Link href="/privacy">Privacy policy</Link>
            <Link href="/terms">Terms and conditions</Link>
          </p>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
