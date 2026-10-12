---
name: BitVault
description: Security-document landing system for an offline Android vault
colors:
  ivory: "#F7F7F4"
  navy: "#0B1B42"
  navyDeep: "#07142F"
  cobalt: "#315DA8"
  steel: "#7894BE"
  silver: "#C4C8CC"
  graphite: "#303744"
  inkMuted: "#5D6573"
  alarm: "#8E2F24"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(3.4rem, 7vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.86
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Barlow, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  none: "0px"
spacing:
  page: "4vw"
  section: "clamp(5rem, 9vw, 9rem)"
components:
  button-primary:
    backgroundColor: "{colors.cobalt}"
    textColor: "#ffffff"
    rounded: "{rounded.none}"
    padding: "0 1.25rem"
    height: "3.35rem"
  button-stamp:
    backgroundColor: "{colors.cobalt}"
    textColor: "#ffffff"
    rounded: "{rounded.none}"
    padding: "0 1.25rem"
    height: "3.35rem"
  button-alarm:
    backgroundColor: "{colors.alarm}"
    textColor: "#ffffff"
    rounded: "{rounded.none}"
    padding: "0 1.25rem"
    height: "3.35rem"
---

# Design System: BitVault

## Overview

**Creative North Star: "The Security Document Atelier"**

BitVault’s public surfaces read like an engraved security document: warm ivory stock, midnight navy fields, cobalt linework, and machined silver. The mark is a geometric BV monogram in an octagonal vault plate. Headlines carry the offer; serial marks and perforated stubs carry the proof.

**Key Characteristics:**
- Square-cornered documents, not rounded product cards
- Cobalt for access. Alarm red only for destructive confirmation
- Engineered condensed labels for navigation, mono for serial numbers
- Guilloché as atmosphere, never as the message

## Colors

Ivory and navy carry the page. Cobalt is the only brand accent. Silver is for metal and rules. Full usage, contrast, and file paths are in `BRAND.md`.

### Primary
- **Vault cobalt** (`#315DA8`): actions, links, and the emblem ring.

### Neutrals
- **Paper ivory** (`#F7F7F4`): page ground.
- **Midnight navy** (`#0B1B42`): proof bands, footer, and body ink.
- **Deep navy** (`#07142F`): the darkest field.
- **Machined silver** (`#C4C8CC`): rules and metallic emblem detail.
- **Steel** (`#7894BE`): fine linework only, not body text.
- **Graphite** (`#303744`) and **muted ink** (`#5D6573`): secondary text.

### Functional
- **Alarm** (`#8E2F24`): delete and error states only. Not a marketing color.

## Typography

**Headline and wordmark:** Barlow and Barlow Condensed
**Body:** Barlow
**Serials:** IBM Plex Mono

Condensed grotesk display does the selling. Regular Barlow explains. Labels stay uppercase and tracked.

### Hierarchy
- **Display** (700, clamp 3.4–6rem, 0.86): hero and section titles.
- **Body** (400–500, 1.05–1.3rem, 1.55): proof and product copy.
- **Label** (700, 0.72–0.9rem, 0.08em, uppercase): serials, stamps, nav.

## Layout

Public pages keep a thin top rule, a left-copy / right-document hero, then full-width proof bands. Account pages reuse the same document-plus-stub split. Break to one column below 900px.

## Elevation & Depth

Depth comes from one document shadow and hairline rules, not glass.

### Shadow Vocabulary
- **Document lift** (`0 15px 34px rgba(8, 24, 61, 0.16)`): access pass and auth certificate.
- **Action lift** (`0 13px 28px rgba(8, 71, 200, 0.22)`): primary buttons.

## Shapes

Corners stay square. Circles are reserved for seals and verification stamps. Perforations are dotted rules, not decorative dashes.

## Components

### Buttons
- **Shape:** square, 3.35rem tall
- **Primary:** cobalt fill, white label
- **Stamp:** cobalt fill for claim actions. Alarm fill for delete only.

### Cards / Containers
- Access passes and login certificates are white documents with a dotted stub.

### Inputs / Fields
- Hairline navy/silver stroke, square corners, white fill.

### Navigation
- Wordmark left, two proof links center, Sign in right. Mobile drops the center links.

## Do's and Don'ts

### Do:
- **Do** keep the Android vault and the website account visually and verbally separate.
- **Do** treat the access pass as the conversion object.

### Don't:
- **Don't** ship rounded SaaS cards, neon cybersecurity, or lock-icon heroes.
- **Don't** expose the APK URL on public pages.
- **Don't** call recovery storage zero-knowledge.
