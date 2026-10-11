"use client";

import sealPlate from "@/assets/plates/seal-plate.png";
import proofGuilloche from "@/assets/plates/proof-guilloche.png";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const scrapeLine =
  "AI agents scrape · crawl · index · train · resell · scrape · crawl · index · train · resell · ";

function SealMark() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 2 29 9v14l-13 7L3 23V9L16 2Z" />
      <path d="m16 8 7 4v8l-7 4-7-4v-8l7-4Z" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M3 10h13M11 5l5 5-5 5" />
    </svg>
  );
}

function ScrapeAgents() {
  const reduce = useReducedMotion();

  return (
    <div className="scrape-field" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((lane) => (
        <motion.i
          key={lane}
          className="scrape-agent"
          style={{ top: `${18 + lane * 16}%` }}
          animate={
            reduce
              ? undefined
              : { left: ["-12%", "108%"], opacity: [0, 1, 1, 0] }
          }
          transition={{
            duration: 9 + lane * 1.6,
            repeat: Infinity,
            ease: "linear",
            delay: lane * 1.1,
          }}
        />
      ))}
    </div>
  );
}

function ScrapeTicker() {
  const reduce = useReducedMotion();

  return (
    <div className="scrape-ticker" aria-hidden="true">
      <motion.p
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        {scrapeLine}
        {scrapeLine}
      </motion.p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="landing">
      <header className="site-nav r-nav-rule">
        <Link className="brand r-wordmark" href="/" aria-label="BitVault home">
          <SealMark />
          <span>BitVault</span>
        </Link>
        <nav className="nav-links r-nav-links" aria-label="Primary navigation">
          <a href="#protection">How it protects</a>
          <a href="#recovery">Recovery</a>
        </nav>
        <Link className="sign-in r-sign-in" href="/login">
          Sign in
          <SealMark />
        </Link>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <ScrapeAgents />
        <motion.div className="hero-copy">
          <h1 id="hero-title" className="r-headline">
            Passwords with
            <br />
            nowhere to leak.
          </h1>
          <p className="hero-deck r-hero-deck">
            In the AI era, agents roam and scrape the internet like nothing
            before it. Keep your logins off the grid — on your Android phone,
            with no internet permission.
          </p>
          <ScrapeTicker />
        </motion.div>

        <motion.div className="access-pass r-certificate-shell">
          <div className="pass-art">
            <Image
              className="seal-plate r-seal-plate"
              src={sealPlate}
              alt="Engraved BitVault seal surrounded by security linework"
              priority
            />
          </div>
          <div className="claim-stub">
            <p className="claim-label r-claim-label">Claim free access</p>
            <div className="auth-preview r-auth-options" aria-hidden="true">
              <span>
                <b className="google-g">G</b> Continue with Google
              </span>
              <span>
                <b className="mail-glyph" />
                or with email
              </span>
            </div>
            <Link className="button button-stamp r-stub-cta" href="/login">
              Get BitVault free
              <Arrow />
            </Link>
            <div className="serial r-serial-block" aria-hidden="true">
              <span>Serial: BV-000001</span>
              <i />
            </div>
          </div>
        </motion.div>
      </section>

      <section className="proof-intro r-proof-band" id="protection">
        <Image
          className="proof-guilloche r-proof-guilloche"
          src={proofGuilloche}
          alt=""
        />
        <div className="proof-intro-copy">
          <h2 className="r-proof-title">Your vault is not an account.</h2>
          <p className="r-proof-copy">
            Your Android vault stays completely local on your device. An
            optional web account gates downloads and can hold an encrypted
            recovery key.
          </p>
        </div>
      </section>

      <section className="utility-section">
        <div className="utility-heading">
          <h2>Useful every day. Quiet by design.</h2>
          <p>
            BitVault handles the small work a password manager should, without
            turning your vault into somebody else&apos;s dataset.
          </p>
        </div>
        <div className="utility-ledger">
          {[
            ["Find", "Search every login instantly, including notes and websites."],
            ["Make", "Generate a strong password when a new account asks for one."],
            ["Use", "Copy what you need; the clipboard clears itself in about 20 seconds."],
            ["Lock", "Leave the app and your vault locks on the timeout you choose."],
          ].map(([verb, detail], index) => (
            <motion.article
              className="ledger-row"
              key={verb}
              whileHover={{ x: 8 }}
              transition={{ duration: 0.25 }}
            >
              <span className="ledger-serial">BV-{String(index + 1).padStart(3, "0")}</span>
              <h3>{verb}</h3>
              <p>{detail}</p>
              <span className="ledger-status">Local</span>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="manifest-section">
        <div className="manifest-copy">
          <h2>No permission. No path out.</h2>
          <p>
            Android apps must declare internet access. BitVault does not. Your
            logins, notes, and attached photos stay inside the encrypted
            database on your phone.
          </p>
          <div className="manifest-proof" aria-label="Android manifest proof">
            <span>AndroidManifest.xml</span>
            <code>INTERNET permission</code>
            <strong>Not declared</strong>
          </div>
        </div>
        <div className="transfer-story">
          <span className="transfer-file">bitvault.vault</span>
          <div className="transfer-line" aria-hidden="true">
            <i />
          </div>
          <h3>Move one encrypted file. Not an account.</h3>
          <p>
            Export a <code>.vault</code> backup, move it with USB, Nearby Share,
            or the folder you choose, then restore it on the next phone.
          </p>
        </div>
      </section>

      <section className="recovery-section" id="recovery">
        <div className="recovery-seal" aria-hidden="true">
          <SealMark />
          <span>Optional web recovery</span>
        </div>
        <div>
          <h2>Keep the key that gets you back in.</h2>
          <p>
            BitVault shows a recovery key once during setup. After signing in
            here, you can save an encrypted copy to your account. The Android
            vault remains offline; recovery storage is a separate, optional web
            service.
          </p>
        </div>
        <Link className="button recovery-action" href="/login?next=/account/recovery">
          Protect my recovery key
          <Arrow />
        </Link>
      </section>

      <section className="closing-section">
        <div className="closing-lines" aria-hidden="true" />
        <p className="closing-mark">BitVault / Android / Free access</p>
        <h2>Put your passwords somewhere the internet cannot reach.</h2>
        <Link className="button button-primary" href="/login">
          Get BitVault free
          <Arrow />
        </Link>
      </section>

      <footer className="site-footer">
        <Link className="brand footer-brand" href="/">
          <SealMark />
          <span>BitVault</span>
        </Link>
        <p>Local vault. Optional web recovery. No cloud sync.</p>
        <span>Android only</span>
      </footer>
    </main>
  );
}
