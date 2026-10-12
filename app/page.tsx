import Home from "./home";
import { getSiteUrl } from "@/lib/env";
import type { Metadata } from "next";

const description =
  "An Android password manager with no internet permission. Keep logins local, move them in one encrypted vault file, and protect your recovery key.";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    types: {
      "text/plain": "/llms.txt",
    },
  },
  description,
};

export default function Page() {
  const site = getSiteUrl().replace(/\/$/, "");
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "BitVault",
        url: site,
        description,
        publisher: { "@type": "Organization", name: "Bonfire" },
      },
      {
        "@type": "SoftwareApplication",
        name: "BitVault",
        applicationCategory: "SecurityApplication",
        operatingSystem: "Android",
        url: site,
        description,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        featureList: [
          "No Android INTERNET permission",
          "Vault stored only on the phone",
          "Encrypted .vault file for moving phones",
          "Recovery key created by the app, with an optional encrypted copy on the website account",
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Home />
    </>
  );
}
