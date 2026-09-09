# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js

## Users

Primary visitors are Android users who want passwords off the cloud — no account, no sync — and are deciding whether BitVault is that tool.

They arrive while evaluating trust: where secrets live, what happens if they lose a phone or a password, and whether “offline” is real or marketing.

## Product Purpose

This site is the public face of BitVault, a phone-local password manager for Android. Secrets live on the device. There is no account, no server, and no cloud sync in the app.

Success: the offline model is unmistakable, then a clear path to install. The visitor should leave knowing what BitVault does, what it refuses to do, and how to get it onto a phone.

## Positioning

BitVault is local-only. The app declares no `INTERNET` permission. Unlock is a master password (or fingerprint on this phone). Moving to another phone means copying one encrypted `.vault` backup — not signing into a vendor cloud.

A neighboring password manager that ships accounts, sync, or a backend cannot truthfully copy that claim.

## Operating Context

Using or evaluating BitVault means these facts:

- First launch: create a master password, save a recovery key shown once, then land on Home.
- Later launches: Lock screen; password and/or fingerprint; forgot-password uses the recovery key, then a new master password.
- Home is the hub: search, add/edit logins, Settings for dangerous actions (keys, backup, lock).
- Migrate: export a `.vault` on phone A, copy it however the user wants (USB, Nearby Share, a folder they pick), restore on phone B. Restore **replaces** the vault; it does not merge. Fingerprint is this-phone-only and is turned off after restore.
- Putting a backup in Drive through the system file picker is the phone’s Files app, not a Vault backend.
- There is no reset-by-email. If the master password, recovery key, and backup are all gone, the data is gone.

## Capabilities and Constraints

**v1 app includes:** master password (create, unlock, change); opt-in fingerprint on this phone; logins (name, username, password, website, notes); optional photos on a login (up to 4, inside the encrypted database); last-updated dates; search; copy; generate password; clipboard auto-clear (~20 seconds); system back that does not leave login or Settings; auto-lock when leaving the app (timeout in Settings); encrypted backup export/import; recovery key shown once at setup.

**v1 app does not include:** iOS, desktop, or web app; cloud sync, accounts, or sharing; autofill, folders, tags, multiple vaults; breach checks; TOTP.

**This site:** web landing page only. It does not implement vault features.

**Primary action:** GitHub release / APK download at https://github.com/omsaini-1441/bitvalut-landing-page/releases (repo `omsaini-1441/bitvalut-landing-page`). No Play Store listing.

**Proof the page must earn:** mix of real v1 features and the no-internet fact. Offline plus easy-to-move (one encrypted file) is the point — especially in an age of scrape, breach, and sale.

## Brand Commitments

- Name: **BitVault**. Organization in the Android package: `com.bonfire.vault` (Bonfire).
- Voice in product docs the owner supplied: plain, precise, explicit about tradeoffs — including irreversible loss if password, recovery key, and backup are all gone. Do not soften that into a reversible “reset.”
- Do not imply cloud, accounts, sync, email recovery, or an internet-connected backend.
- Motion craft is binding: Framer Motion (and kin) at Awwwards-level ambition — orchestrated, not scattered hover. Motion serves the offline/portable-file story; it does not become crypto-hype or cloud-SaaS spectacle.

## Evidence on Hand

- Product truth for v1: sibling app `../BitVault`, especially `docs/overview.md`, `docs/flow.md`, and `docs/tech-stack.md`.
- Android launcher assets exist in that app (`ic_launcher` / foreground drawables). This landing-page repo has none yet.
- No testimonials, press, benchmarks, pricing, or public store ranking are on hand. Do not fabricate them.
- GitHub repo for this site and the APK CTA: https://github.com/omsaini-1441/bitvalut-landing-page (releases for the download). No Play Store listing.

## Product Principles

1. **Offline is a fact, not a mood.** No internet permission, no account, no Vault server — say it so a skeptic can verify the claim.
2. **Name the lock and the escape hatch.** Master password is the real unlock; fingerprint is this phone only; recovery key is shown once; `.vault` is how you migrate.
3. **Tradeoffs stay visible.** Irreversible loss without password, recovery key, or backup is part of the product, not a footnote to hide.
4. **Explain first, then install.** The site earns the download by making the model clear, not by burying it under feature lists.
5. **Do not sell the missing roadmap.** v1 exclusions stay exclusions until the product changes.
