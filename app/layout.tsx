import type { Metadata } from "next";
import { Titillium_Web, Sunflower, Smooch_Sans } from "next/font/google";
import "./globals.css";

const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const sunflower = Sunflower({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-mark",
  display: "swap",
});

const smooch = Smooch_Sans({
  subsets: ["latin"],
  weight: ["300", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BitVault — passwords that never leave the phone",
  description:
    "Phone-local Android password manager. No account, no server, no INTERNET permission. You copy one encrypted .vault file to move.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${titillium.variable} ${sunflower.variable} ${smooch.variable} ${titillium.className}`}>
        {children}
      </body>
    </html>
  );
}
