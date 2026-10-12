# BitVault brand

The mark is a geometric **BV** monogram cut into an octagonal vault plate. It stands for a sealed, local chamber: passwords that do not join the network. It is not a padlock, a shield, or a keyhole.

The wordmark is **BITVAULT**, set in Barlow Condensed Bold with open tracking. The emblem and the wordmark work apart or together.

## Promise

Your passwords stay yours. The Android vault is not an account. Do not draw or write the product as cloud-synced, remotely readable, or automatically backed up.

## Color

| Token | Hex | Use | Do not use for |
| --- | --- | --- | --- |
| Paper ivory | `#F7F7F4` | Page ground, light emblem metal, icon background | Body text |
| Pure white | `#FFFFFF` | Type on navy, clean panels | Large empty fields that should feel like paper |
| Midnight navy | `#0B1B42` | Text, footer, trust bands, emblem plate | — |
| Deep navy | `#07142F` | Darkest fields | Body text on ivory |
| Vault cobalt | `#315DA8` | Links, buttons, emblem ring | Long paragraphs |
| Cobalt deep | `#274C88` | Button hover | — |
| Steel | `#7894BE` | Guilloché, hairline rings | Body text. It fails contrast on ivory |
| Machined silver | `#C4C8CC` | Rules, metallic highlights | Text |
| Graphite | `#303744` | Secondary text on ivory | — |
| Muted ink | `#5D6573` | Captions on ivory | Text smaller than 14px if contrast is tight |
| Alarm | `#8E2F24` | Delete and form errors only | Marketing, logos, focus rings |

Ivory on navy, navy on ivory, and white on cobalt all clear body-text contrast. Steel is linework only.

There is no dark-mode theme. Navy sections are the dark variant of the same tokens: ivory type, steel linework, cobalt actions.

## Type

- Headlines: Barlow, 700, tight leading.
- Wordmark and navigation labels: Barlow Condensed, 700, uppercase, tracked.
- Body: Barlow, 400–500.
- Serial numbers only: IBM Plex Mono. Do not set the interface in mono.

## Logo files

All vectors live in `public/brand/`.

| File | Variant |
| --- | --- |
| `emblem.svg` | Primary emblem, navy plate, for ivory |
| `emblem-light.svg` | Ivory plate, for navy |
| `emblem-compact.svg` | Heavier drawing for small sizes |
| `emblem-mono-black.svg` | Black on white |
| `emblem-mono-white.svg` | White plate, black monogram, for dark grounds |
| `emblem-metallic.svg` | Silver presentation plate |
| `logo-lockup.svg` | Emblem plus BITVAULT |
| `logo-lockup-light.svg` | Same lockup for navy |
| `seal.svg` | Engraved seal. Not the logo |
| `og.svg` | Source for the social image |

Use `components/brand-mark.tsx` in the interface. Do not paste a second copy of the paths.

The engraved seal may carry rings, waves, and the words BITVAULT, OFFLINE VAULT, and NO INTERNET. Do not put that seal in a favicon or a 16px icon.

## Icons

`public/favicon.svg`, `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `favicon-48x48.png`, `apple-touch-icon.png`, `android-chrome-192x192.png`, `android-chrome-512x512.png`, and `site.webmanifest`.

The browser icon is the compact emblem on ivory. It does not include the wordmark.

This repository does not contain the Android app, so launcher XML is not generated here. The 192 and 512 images are the web icon family.

## Social

`public/og.png` is 1200×630. Headline: “Passwords with nowhere to leak.”

## Voice next to the mark

Say that the vault stays on the phone. Say that a website account, when it exists, only gates the download and can hold an encrypted recovery key. Do not call that storage zero-knowledge.
