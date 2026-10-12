import { BrandMark } from "@/components/brand-mark";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="brand footer-brand" href="/" aria-label="BitVault home">
        <BrandMark variant="light" />
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
