import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Gurajada } from "next/font/google";
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

const display = Gurajada({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BitVault — passwords with nowhere to leak",
  description:
    "An Android password manager with no internet permission. Keep logins local, move them in one encrypted vault file, and protect your recovery key.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${body.variable} ${label.variable} ${display.variable} ${body.className}`}>{children}</body>
    </html>
  );
}
