import Link from "next/link";

function FooterSeal() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 2 29 9v14l-13 7L3 23V9L16 2Z" />
      <path d="m16 8 7 4v8l-7 4-7-4v-8l7-4Z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="brand footer-brand" href="/" aria-label="BitVault home">
        <FooterSeal />
        <span>BitVault</span>
      </Link>
      <p>Local vault. Optional web recovery. Android only.</p>
      <nav className="footer-legal" aria-label="Legal">
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
      </nav>
    </footer>
  );
}
