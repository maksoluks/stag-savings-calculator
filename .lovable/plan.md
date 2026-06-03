# STAG Rogowski Jastków — Plan

One-page marketing site for an authorized STAG LPG installer, plus a privacy policy subpage. Pure frontend within the TanStack Start template, with bilingual content (PL default / EN), light/dark theming, and an interactive savings calculator.

## Routes

- `/` (`src/routes/index.tsx`) — main one-pager with all sections
- `/privacy` (`src/routes/privacy.tsx`) — RODO / privacy policy

Each route gets its own `head()` with PL-first SEO meta (title, description, og tags). One H1 per page, semantic sections with `id`s for anchor scrolling from the sticky nav.

## Sections (on `/`)

1. **Sticky Header** — Logo + "STAG Mechanika Rogowski" wordmark, nav links (Kalkulator, O nas, Galeria, Opinie, Kontakt), theme toggle (sun/moon), language toggle (PL | EN). Mobile: hamburger sheet.
2. **Hero** — Full-viewport workshop photo with dark overlay, headline about professionalism + LPG savings, large pulsing CTA `tel:609258834`.
3. **LPG Calculator** — Two sliders (monthly km, fuel consumption l/100km), three result cards (monthly savings, yearly savings, payback in months). Logic accounts for LPG burning ~17% more than petrol; uses configurable petrol/LPG price constants and an average install cost.
4. **O nas** — Family-business story, Adam Rogowski's experience, Authorized STAG Service badge.
5. **Gallery (Bento Grid)** — Asymmetric CSS grid: one large feature tile (Adam at work) + mixed smaller tiles (cars, clean engine-bay installs).
6. **Google Reviews** — Bold "4.9 / 5 · 140+ opinii Google" headline with 5 stars, then a frontend carousel (embla, already available via shadcn) of hand-curated review cards.
7. **Contact + Footer** — 50/50 split: left = contact details, hours (od wtorku 07:00), address (DW809 56A, 21-002 Jastków), Facebook link, link to `/privacy`; right = Google Maps `<iframe>` with `filter: invert(...)` applied in dark mode.

## Theming

Update `src/styles.css` tokens to STAG palette:
- Light: white/light-grey background, deep graphite text, STAG red `#E30613` as primary accent.
- Dark: near-black/anthracite background, off-white text, brighter red for CTAs.
All component colors go through semantic tokens (`--primary`, `--background`, etc.) — no hardcoded hex in components. Theme stored in `localStorage` + `.dark` class on `<html>`, applied via a small `ThemeProvider` and a no-flash inline script in `__root.tsx`.

## i18n

Lightweight in-house solution (no extra dependency): a `LanguageProvider` with a `t(key)` hook reading from two flat dictionaries (`pl.ts`, `en.ts`). Language persisted in `localStorage`, default PL. Toggle in header.

## Calculator logic

```text
lpgPricePerL = 3.20 zł      // editable constants
petrolPricePerL = 6.40 zł
installCost = 3500 zł
lpgOverhead = 1.17          // LPG burns ~17% more

petrolCostMonthly = km/100 * consumption * petrolPricePerL
lpgCostMonthly    = km/100 * consumption * lpgOverhead * lpgPricePerL
monthlySaving = petrolCostMonthly - lpgCostMonthly
yearlySaving  = monthlySaving * 12
paybackMonths = installCost / monthlySaving
```

Sliders use shadcn `Slider`; result cards animate value changes.

## Assets

Generate workshop hero + gallery photos via `imagegen` (workshop interior, mechanic at work, engine bays with clean LPG install, car portraits). STAG logo: simple text wordmark with red accent unless the user supplies an SVG.

## Technical notes

- Pure frontend, no Cloud / backend.
- Sticky header uses `position: sticky` with backdrop blur.
- Smooth scroll for in-page anchor links from the nav (the only legitimate hash-anchor use — single-page site by spec).
- Maps iframe wrapped in a `<div>` with `filter: invert(0.92) hue-rotate(180deg)` applied via a `dark:` Tailwind variant.
- `/privacy` is a normal route with proper `<h1>` and readable typography; PL/EN versions via the same i18n dictionary.

## Out of scope

- No backend, no form submissions, no analytics, no real Google Places API (reviews are hand-curated).
- No CMS — content lives in TS constants for easy editing.

## Open questions before build

I'll ask for: install-cost assumption, fuel-price defaults, Facebook URL, exact Google Maps embed, and whether you'll supply photos or want AI-generated placeholders.
