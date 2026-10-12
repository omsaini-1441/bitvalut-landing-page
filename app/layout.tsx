import { getSiteUrl } from "@/lib/env";
import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const body = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const label = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-label",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const description =
  "An Android password manager with no internet permission. Keep logins local, move them in one encrypted vault file, and protect your recovery key.";

export const viewport: Viewport = {
  themeColor: "#F7F7F4",
};

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "BitVault — passwords with nowhere to leak",
    template: "%s — BitVault",
  },
  description,
  applicationName: "BitVault",
  verification: {
    google: "qlbvpUGbSsnmwoitNM22KxBLPogR6aJL4oWn3DXVyL4",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "BitVault — passwords with nowhere to leak",
    description,
    siteName: "BitVault",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Passwords with nowhere to leak.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BitVault — passwords with nowhere to leak",
    description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${body.variable} ${label.variable} ${mono.variable} ${body.className}`}>{children}</body>
    </html>
  );
}
