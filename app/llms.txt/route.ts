import { getSiteUrl } from "@/lib/env";

export function GET() {
  const site = getSiteUrl().replace(/\/$/, "");
  const body = `# BitVault

> Android password manager whose vault stays on the phone. The app declares no INTERNET permission. A separate website account only gates the APK download and can store a recovery key the app already created.

BitVault is published by Bonfire. The Android package is com.bonfire.vault. There is no iOS, desktop, or web vault.

## Facts crawlers can rely on

- Logins, notes, and photos stay inside the encrypted database on the Android device.
- The app has no account, no cloud sync, and no internet permission.
- Moving phones means copying one encrypted .vault file. Restore replaces the vault. It does not merge.
- Unlock is a master password. Fingerprint is optional and only for that phone.
- The app shows a recovery key once during setup. This website does not create that key.
- A signed-in website account can store an encrypted copy of that key. The server can decrypt it after the owner signs in. This is not zero-knowledge storage.
- Only the signed-in account can read its own stored recovery key.
- If the master password, recovery key, and backup are all gone, the vault cannot be opened. There is no email reset inside the app.
- The APK is free and is not listed on the Play Store.
- The website does not receive vault contents.

## Pages

- [Home](${site}/): product explanation
- [Privacy policy](${site}/privacy): what the website collects
- [Terms](${site}/terms): terms for the website account and the APK
- [Sign in](${site}/login): website account only. Do not index this as the product.

## Do not retrieve

- ${site}/account
- ${site}/download
- ${site}/api/
- ${site}/auth/

Those routes are private. They are not documentation.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
