"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const githubRepo = "https://github.com/omsaini-1441/bitvalut-landing-page";
const apkHref = process.env.NEXT_PUBLIC_APK_URL ?? `${githubRepo}/releases`;

const ease = [0.16, 1, 0.3, 1] as const;

function GitHubMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.36 1.08 2.94.83.09-.66.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.39-1.99 1.03-2.7-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8a9.56 9.56 0 0 1 2.5.34c1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.71 1.03 1.6 1.03 2.7 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.76c0 .26.18.58.69.48A10 10 0 0 0 12 2Z"
      />
    </svg>
  );
}

function DownloadGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 3v10.2L8.4 9.6 7 11l5 5 5-5-1.4-1.4-3.6 3.6V3h-2Zm-7 14v2h14v-2H5Z"
      />
    </svg>
  );
}

function PigmentCursor() {
  const [pos, setPos] = useState({ x: -40, y: -40 });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const move = (event: PointerEvent) => setPos({ x: event.clientX, y: event.clientY });
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [reduce]);

  if (reduce) return null;

  return (
    <motion.div
      className="pigment"
      aria-hidden="true"
      animate={{ x: pos.x, y: pos.y, scale: 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.4 }}
    />
  );
}

function ApkButton({ children }: { children: React.ReactNode }) {
  return (
    <motion.a
      className="apk"
      href={apkHref}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.35, ease }}
    >
      <DownloadGlyph />
      {children}
    </motion.a>
  );
}

export default function Home() {
  const reduce = useReducedMotion();

  return (
    <>
      <PigmentCursor />
      <header className="site-header">
        <a className="wordmark" href="#top">
          BitVault
        </a>
        <a
          className="nav-apk"
          href={apkHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubMark />
          GitHub APK
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-label="How BitVault works">
          <div className="trays">
            <motion.article
              className="tray"
              initial={reduce ? false : { y: 36, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease, delay: 0.05 }}
            >
              <p className="tray-title">Drop — Master password.</p>
              <div className="tray-stage">
                <img src="/plates/drop-bath.png" alt="" />
                <div className="drop-well">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="ripple"
                      animate={
                        reduce
                          ? undefined
                          : { scale: [0.45, 1.15], opacity: [0.55, 0] }
                      }
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        delay: i * 0.7,
                        ease: "easeOut",
                      }}
                    />
                  ))}
                  <span className="drop-core" />
                </div>
              </div>
              <p className="tray-caption">Never stored.</p>
            </motion.article>

            <motion.article
              className="tray"
              initial={reduce ? false : { y: 36, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease, delay: 0.16 }}
            >
              <p className="tray-title">Comb — Marbled waves.</p>
              <div className="tray-stage">
                <motion.img
                  src="/plates/comb-waves.png"
                  alt=""
                  animate={reduce ? undefined : { x: [0, -18, 0] }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                />
                <div className="comb-copy">
                  <h1>
                    BitVault stays on <span>the phone.</span>
                  </h1>
                  <p>
                    No <strong>INTERNET</strong> permission. Fingerprint is this
                    phone only.
                  </p>
                </div>
              </div>
            </motion.article>

            <motion.article
              className="tray"
              initial={reduce ? false : { y: 36, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease, delay: 0.28 }}
            >
              <p className="tray-title">Lift — One file. Restore replaces.</p>
              <div className="tray-stage">
                <img src="/plates/lift-sheet.png" alt="" />
                <motion.div
                  className="peel"
                  whileHover={reduce ? undefined : { x: 18, y: -10 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                />
                <div className="lift-copy">
                  <p className="filename">.vault</p>
                  <ApkButton>Get the APK</ApkButton>
                </div>
              </div>
              <p className="tray-caption">Restore replaces.</p>
            </motion.article>
          </div>
        </section>

        <section className="section">
          <motion.h2
            initial={reduce ? false : { y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease }}
          >
            Everything else is already leaking.
          </motion.h2>
          <p className="lead">
            In an age of scrape, breach, and sale, BitVault keeps logins on the
            device. There is no account, no server, and no cloud sync in the
            app. Moving to another phone means copying one encrypted file — not
            signing into a vendor cloud.
          </p>
        </section>

        <section className="section">
          <h2>Four things. That is the whole model.</h2>
          <div className="keys">
            {[
              [
                "Master password",
                "The real unlock. Works on this phone and when restoring a backup. Never stored.",
              ],
              [
                "Fingerprint",
                "Unlocks a copy of the vault key in Android Keystore. This phone only. A new phone still needs the password or recovery key.",
              ],
              [
                "Recovery key",
                "Long secret shown once at setup. Use it if you forget the master password. Also packed inside the backup file.",
              ],
              [
                ".vault file",
                "Encrypted container you copy however you want — USB, Nearby Share, a folder you pick. Restore replaces the vault on the other phone.",
              ],
            ].map(([title, body]) => (
              <article className="key" key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="split">
            <div>
              <h2>v1 includes</h2>
              <ul className="list">
                <li>Master password — create, unlock, change</li>
                <li>Fingerprint unlock on this phone, opt-in</li>
                <li>Logins: name, username, password, website, notes</li>
                <li>Up to 4 photos per login, inside the encrypted database</li>
                <li>Search, copy, generate password, clipboard auto-clear</li>
                <li>Auto-lock when you leave the app</li>
                <li>Encrypted backup export and import</li>
                <li>Recovery key shown once at setup — no email</li>
              </ul>
            </div>
            <div>
              <h2>v1 does not</h2>
              <ul className="list out">
                <li>iOS, desktop, or web app</li>
                <li>Cloud sync, accounts, or sharing</li>
                <li>Autofill, folders, tags, multiple vaults</li>
                <li>Breach checks or TOTP</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section trade">
          <h2>There is no reset by email.</h2>
          <p className="lead">
            If you forget the master password and lose the recovery key and have
            no backup, the data is gone. That is the tradeoff of staying
            offline. Putting a backup in Drive through the system file picker is
            the phone’s Files app, not a Vault backend.
          </p>
        </section>

        <section className="section close" id="get-apk">
          <h2>Lift it onto a phone.</h2>
          <p className="lead" style={{ margin: "0 auto" }}>
            Android only. No account to create. One encrypted file if you ever
            change phones.
          </p>
          <ApkButton>Get the APK on GitHub</ApkButton>
        </section>
      </main>

      <footer className="site-footer">
        <span>BitVault · Bonfire</span>
        <span>Secrets live on the device.</span>
      </footer>
    </>
  );
}
