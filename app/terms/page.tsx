import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

const description =
  "Terms for the BitVault website account, the Android APK, and optional recovery-key storage.";

export const metadata: Metadata = {
  title: "Terms and conditions",
  description,
  alternates: { canonical: "/terms" },
  openGraph: { title: "Terms and conditions — BitVault", description },
};

export default function TermsPage() {
  return (
    <LegalPage serial="Public notice · Terms" title="Terms and conditions">
      <p>
        These terms are between you and {site.operator} for the {site.product}{" "}
        website and the Android app we distribute from it. By creating an
        account, downloading the app, or saving a recovery key, you agree to
        them. If you do not agree, do not create an account and do not
        download the app.
      </p>

      <h2>What you are getting</h2>
      <p>
        {site.product} is a password manager for Android. The app stores the
        vault on the phone. It does not include a cloud account, sync, or an
        internet connection. This website is separate: it gates the APK,
        records the download, and can hold an optional recovery key. It does
        not sync or contain the vault.
      </p>
      <p>
        The current app is Android only. It is not on the Play Store. Access
        to the download is free at the time of these terms. We do not collect
        payment details. If a price is introduced later, it will be shown on
        this website before you are asked to pay.
      </p>

      <h2>The website account</h2>
      <p>
        You need an account on this website to download the APK. You can sign
        in with Google or with an email link. You must use an email address
        you control. You are responsible for keeping access to that inbox or
        Google account. We may close an account that is used to attack the
        site, scrape it, or interfere with other people.
      </p>
      <p>
        The account is only for this website. The Android app does not sign
        in to it.
      </p>

      <h2>Installing the app</h2>
      <p>
        After you sign in, we redirect your browser to the APK. Android may
        warn you because the file does not come from the Play Store. Install
        it only from the download this site starts. You are responsible for
        the phone settings that allow that install, and for checking that you
        are installing the file you requested.
      </p>
      <p>
        On first launch the app asks you to create a master password and shows
        a recovery key once. That master password is not sent to this website.
        If the master password, the recovery key, and every backup are all
        gone, the vault cannot be opened. There is no email reset inside the
        app. We cannot reconstruct a vault we never received.
      </p>

      <h2>Recovery key storage</h2>
      <p>
        Saving a recovery key here is optional. If you save one, we store an
        envelope-encrypted copy. Our server holds the key that can unwrap it,
        and can decrypt the recovery key after you sign in. That storage is
        not zero-knowledge. Read the{" "}
        <Link href="/privacy">privacy policy</Link> before you paste a key.
      </p>
      <p>
        A saved recovery key is not a backup of the vault. It does not move
        your logins to another phone. Moving phones still means copying the
        encrypted vault file yourself. Restoring a vault replaces the vault on
        that phone. Keep an offline copy of the recovery key as well. Deleting
        the website copy does not delete the vault, and deleting the app does
        not delete a key you saved here.
      </p>

      <h2>Your responsibilities</h2>
      <ul>
        <li>Choose a master password you can remember or store safely offline.</li>
        <li>Keep the recovery key somewhere other than only inside the phone.</li>
        <li>Do not send us the master password, the recovery key, or a vault file unless you are using the recovery page for the purpose it states.</li>
        <li>Do not rely on this website as the only copy of anything you cannot afford to lose.</li>
      </ul>

      <h2>Acceptable use</h2>
      <p>You may not:</p>
      <ul>
        <li>probe, disrupt, or overload the site or its authentication;</li>
        <li>attempt to access another person’s account or recovery key;</li>
        <li>redistribute the APK as your own product or misstate what the app does;</li>
        <li>use the site to store anything other than your own BitVault recovery key.</li>
      </ul>

      <h2>Availability</h2>
      <p>
        We may change, pause, or remove the website, the download, or
        recovery-key storage. If we shut down recovery-key storage, we will
        post that on this website in advance when we can, so you can reveal
        and copy a saved key first. An outage, a failed host, or a lost server
        key can make a stored recovery key unavailable. That is one reason the
        offline copy matters.
      </p>

      <h2>Intellectual property</h2>
      <p>
        {site.operator} retains the rights in the {site.product} name, the
        app, and this website. These terms give you a personal, non-exclusive
        right to install and use the app. They do not transfer ownership of
        the software. Your logins and your vault remain yours. We never
        receive the vault.
      </p>

      <h2>No warranty</h2>
      <p>
        The app and this website are provided as available and as they are. We
        do not warrant that the app will be error-free, that a phone, a
        backup, or a saved recovery key will always be recoverable, or that
        the download host will always be reachable. Security guidance on the
        site describes how the product works. It is not a promise that loss is
        impossible.
      </p>

      <h2>Liability</h2>
      <p>
        Nothing in these terms limits liability that the law does not allow us
        to limit, including liability for fraud or for death or personal
        injury caused by negligence, and it does not remove mandatory consumer
        rights where you live.
      </p>
      <p>
        Otherwise, {site.operator} is not liable for lost logins, an
        unrecoverable vault, a lost recovery key, lost profits, or other loss
        arising from use of the app, a backup, the website, or recovery-key
        storage. You use a local vault so that a vendor cannot read it. The
        cost of that choice is that we also cannot restore what we do not
        have.
      </p>

      <h2>Ending access</h2>
      <p>
        You may stop using the site and ask us to delete the website account,
        as described in the privacy policy. We may suspend download access if
        these terms are broken. Suspending the website account does not delete
        the vault on your phone.
      </p>

      <h2>Changes and disputes</h2>
      <p>
        We may update these terms by posting a new version on this page with a
        new date. Continuing to use the website after that date means you
        accept the update. The Android app already on your phone keeps working
        offline either way.
      </p>
      <p>
        This site does not publish a registered office or name a court. If you
        have a dispute, contact us first and describe the problem without
        sending secrets. Mandatory rights and courts where you live still
        apply. These terms are not an invitation to send a demand to the
        GitHub account of a contributor who is not {site.operator}.
      </p>

      <h2>Contact</h2>
      <p>
        Write to us at{" "}
        <a href={site.contactUrl} rel="noreferrer">{site.contactLabel}</a>.
        How we handle account data is in the{" "}
        <Link href="/privacy">privacy policy</Link>.
      </p>
    </LegalPage>
  );
}
