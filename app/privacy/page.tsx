import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

const description =
  "What the BitVault website collects, what the Android app does not send, and how optional recovery-key storage works.";

export const metadata: Metadata = {
  title: "Privacy policy",
  description,
  alternates: { canonical: "/privacy" },
  openGraph: { title: "Privacy policy — BitVault", description },
};

export default function PrivacyPage() {
  return (
    <LegalPage serial="Public notice · Privacy" title="Privacy policy">
      <p>
        {`${site.operator} publishes ${site.product} (${site.packageId}) and this website. This policy explains what the website handles. It also states what the Android app does not send us.`}
      </p>

      <h2>The app and the website are separate</h2>
      <p>
        The Android app keeps your vault on the phone. It has no account, no
        cloud sync, and no internet permission. Logins, notes, photos, the
        master password, and the vault file stay on the device unless you copy
        a backup yourself.
      </p>
      <p>
        This website is a different service. It is used to sign in, record a
        download, and optionally store a recovery key. Signing in here does not
        sign the Android app in, and the website never receives the contents of
        the vault.
      </p>

      <h2>What the website collects</h2>
      <ul>
        <li>
          <strong>Account.</strong> If you continue with Google, we receive the
          identifiers Supabase returns for that sign-in, including your email
          address. If you use an email link, we store that email address and
          send the link through Supabase. We do not ask for a password on this
          website.
        </li>
        <li>
          <strong>Session.</strong> A signed-in visit uses cookies that keep
          the session. They are required to know who is downloading and who may
          open a saved recovery key. We do not use advertising or analytics
          cookies.
        </li>
        <li>
          <strong>Download record.</strong> When you download the APK we store
          your account id, the release address, up to 500 characters of the
          browser user agent, up to 500 characters of the referring page, and
          the time of the download. We do not receive the vault.
        </li>
        <li>
          <strong>Recovery key, only if you paste one.</strong> You can save
          the recovery key the Android app showed you. We store it
          envelope-encrypted. The database does not store the plaintext key.
          The key that can unwrap that encryption is held on our server, so
          after you sign in the server can decrypt the recovery key and show it
          to you. This is not zero-knowledge storage.
        </li>
      </ul>
      <p>
        We do not collect payment details. Access is free. We do not sell
        personal information, and we do not use it for advertising.
      </p>

      <h2>Why we use it</h2>
      <ul>
        <li>To create and keep your website account.</li>
        <li>To confirm you are signed in before the APK is delivered.</li>
        <li>To keep a record of downloads.</li>
        <li>
          To store, show, and delete a recovery key when you ask us to.
        </li>
        <li>To protect the site against abuse and to fix broken delivery.</li>
      </ul>

      <h2>Who else processes it</h2>
      <ul>
        <li>
          <strong>Supabase</strong> provides authentication and the database
          for accounts, download records, and encrypted recovery keys.
        </li>
        <li>
          <strong>Google</strong> handles the sign-in only if you choose
          Google. Google’s own terms apply to that step.
        </li>
        <li>
          <strong>The file host</strong> receives your browser’s request when
          we redirect you to the APK. That host is currently GitHub. It can see
          the usual download request details, such as IP address. It does not
          receive your vault or recovery key from us.
        </li>
      </ul>
      <p>
        The host that serves this website may keep ordinary server logs, such
        as IP address and requested path, for security and operations. We do
        not run a separate analytics product.
      </p>

      <h2>How long we keep it</h2>
      <p>
        Account details and download records stay while the account exists. A
        saved recovery key stays until you delete it on the recovery page, or
        until the account is deleted. Sign-in cookies last for the session
        Supabase sets. We do not keep a separate marketing list.
      </p>

      <h2>Your choices</h2>
      <ul>
        <li>You can use the Android app without ever creating a website account. The download on this site requires an account.</li>
        <li>Saving a recovery key is optional. Deleting it on the recovery page removes that stored copy. It does not change the key already shown in the app, and it does not delete the vault.</li>
        <li>You can sign out at any time.</li>
        <li>
          There is no self-serve button yet to delete the whole website
          account. To ask for that, open a request on{" "}
          <a href={site.contactUrl} rel="noreferrer">{site.contactLabel}</a>{" "}
          from the email on the account and ask us to delete it. We will
          remove the account, its download records, and any saved recovery
          key. Do not paste a recovery key, master password, or vault file
          into that request.
        </li>
      </ul>
      <p>
        You can also ask what account data we hold, or ask us to correct the
        email on the account if it is wrong. Mandatory privacy rights where
        you live still apply.
      </p>

      <h2>Children</h2>
      <p>
        This site is not for anyone under 16. Do not create an account if you
        are under 16.
      </p>

      <h2>Changes</h2>
      <p>
        If this policy changes, the new version will be posted on this page
        with a new date. If a change affects a recovery key we already store,
        we will say so on this page before it takes effect.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy go to{" "}
        <a href={site.contactUrl} rel="noreferrer">{site.contactLabel}</a>.
        Do not include secrets. The terms for using the site and the app are
        on the <Link href="/terms">terms and conditions</Link> page.
      </p>
    </LegalPage>
  );
}
