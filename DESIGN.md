---
name: BitVault
description: Security-document landing system for an offline Android vault
colors:
  stock: "#f7f7f7"
  navy: "#08183d"
  cobalt: "#0847c8"
  vermilion: "#ba2818"
  silver: "#c7c8ce"
  ink: "#0f131c"
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
    backgroundColor: "{colors.vermilion}"
    textColor: "#ffffff"
    rounded: "{rounded.none}"
    padding: "0 1.25rem"
    height: "3.35rem"
---

# Design System: BitVault

## Overview

**Creative North Star: "The Security Document Atelier"**

BitVault’s public surfaces read like anti-counterfeit paper: cotton-white stock, midnight navy fields, cobalt guilloché, and one vermilion stamp. The system sells verification, not SaaS polish. Headlines carry the offer; serial marks and perforated stubs carry the proof.

**Key Characteristics:**
- Square-cornered documents, not rounded product cards
- One cobalt action and one vermilion claim stamp
- Engineered condensed labels for serials and navigation
- Guilloché as atmosphere, never as the message

## Colors

The palette is paper, ink, and two security inks.

### Primary
- **Cobalt** (`#0847c8`): the free-access action and verification field.

### Secondary
- **Vermilion** (`#ba2818`): the claim stub and recovery danger actions.

### Neutral
- **Stock** (`#f7f7f7`): page ground.
- **Navy** (`#08183d`): proof bands, closing fields, and body ink.
- **Silver** (`#c7c8ce`): rules, perforations, and quiet borders.

**The Two-Ink Rule.** Cobalt grants access. Vermilion claims or warns. No third accent.

## Typography

**Display Font:** Barlow Condensed
**Body Font:** Barlow
**Label Font:** Barlow Condensed

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
- **Stamp:** vermilion fill for claim and delete actions

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
