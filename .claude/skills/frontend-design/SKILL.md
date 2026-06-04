---
name: frontend-design
description: >-
  Front-end design system for the Joan AI proposal site. Use whenever building
  or editing UI in this repo. Encodes the "luxury real estate" visual language —
  champagne-on-black palette, Fraunces + Inter type scale, 8px spacing grid,
  component patterns and the Framer Motion animation vocabulary. Goal: output
  that looks like a $10k agency build, never generic AI / default Tailwind.
---

# Frontend Design Skill — Joan AI

You are designing a **luxury real-estate** landing page. Every decision should
feel intentional, restrained and expensive. When in doubt: more whitespace,
fewer colors, slower motion.

## Hard rules (avoid the "generic AI" look)

- **No random hex codes.** Only use the tokens below (exposed as Tailwind
  classes). If a value isn't a token, it doesn't ship.
- **No default Tailwind blue/indigo/violet, no `shadow-md`, no emoji as icons
  in body copy.** Accent is always champagne gold.
- **No font-size soup.** Use the type scale only.
- **Dark by default.** Background is near-black; champagne is the single accent.
- **Generous, consistent spacing.** Everything on the 8px grid.
- **Motion is subtle and slow.** Easing `cubic-bezier(0.16, 1, 0.3, 1)`,
  durations 0.6–1s for reveals. Never bouncy, never fast.

## Color tokens

| Token            | Hex        | Use                                  |
| ---------------- | ---------- | ------------------------------------ |
| `black`          | `#0a0a0a`  | Page background                      |
| `jet`            | `#121212`  | Alternating section background       |
| `carbon`         | `#1a1a1a`  | Cards / raised surfaces              |
| `bone`           | `#f5f1ea`  | Primary text                         |
| `ivory`          | `#fdfaf5`  | Brightest text / gradient stop       |
| `champagne`      | `#c9a96a`  | Accent (the only accent)             |
| `champagne-light`| `#e3c894`  | Accent highlight / gradient stop     |
| `champagne-dim`  | `#8a7a52`  | Muted accent / gradient stop         |

Derived: `--line` = `bone @ 8%`, `--line-strong` = `bone @ 15%`,
`--muted` = `bone @ 55%`. Champagne accents on Instagram surfaces may use the
IG gradient `#f9ce34 → #ee2a7b → #6228d7` (the ONLY exception to the gold rule,
and only inside Instagram mockups).

## Typography

- **Display / headings:** `Fraunces` (serif), weight 300–500. Italic for the
  champagne-gradient emphasis word.
- **Body / UI:** `Inter`, weight 200–400.
- **Scale (clamp, fluid):**
  - h1: `clamp(48px, 8vw, 112px)`, line-height 0.98, tracking -0.04em
  - h2: `clamp(40px, 5.5vw, 76px)`, line-height 1.02, tracking -0.03em
  - section sub: 19px, muted, max-width ~660px
  - eyebrow: 12px, uppercase, tracking 0.14em, champagne, with a 32px rule
  - body: 15px, line-height 1.6, muted
- **Gradient text** for emphasis: `linear-gradient(135deg, champagne-light,
  champagne)` clipped to text.

## Spacing & layout

- **8px base grid.** Allowed steps: 4, 8, 12, 16, 20, 24, 28, 36, 48, 60, 80,
  100, 140, 160px.
- **Section vertical padding:** 160px desktop, 100px tablet, 100px/24px mobile.
- **Container:** `max-width: 1200px`, centered, 48px side padding (24px mobile).
- **Radii:** cards 20–24px, pills 100px, small chips 8–16px.
- **Borders:** 1px `--line`; hover lifts to champagne @ 25–30%.

## Component patterns

- **Buttons:** pill (`rounded-full`), 18×32px padding. Primary = bone fill /
  black text → champagne on hover with a soft champagne glow + `translateY(-2px)`.
  Ghost = transparent, `line-strong` border → border brightens on hover. Arrow
  glyph nudges +5px right on hover.
- **Cards:** `carbon`/2% bone surface, 1px line, 20px radius. Hover: raise 3–4px,
  border → champagne @ 25–30%, surface +2% lightness. 0.4–0.6s ease.
- **Eyebrow:** uppercase label preceded by a 32px champagne rule.
- **KPI / stat:** Fraunces number with bone→champagne gradient, champagne suffix,
  muted two-line label.
- **Chat mockups:** WhatsApp greens (`#005c4b` out / `#1f2c34` in); Instagram
  gradient bubbles. Keep them small and credible, never cartoonish.

## Motion vocabulary (Framer Motion)

- **Scroll reveal:** fade + 40px rise, `whileInView`, `once: true`, viewport
  margin `-60px`, duration 0.9–1s, ease `[0.16, 1, 0.3, 1]`.
- **Stagger:** parent `staggerChildren: 0.12`, children use the reveal variant.
- **Hover:** cards/buttons lift via `whileHover={{ y: -3 }}` + token color shift.
- **Counters:** animate from 0 to target on first in-view, ~1.8s, ease-out cubic,
  honor `data-decimals`.
- **Scroll progress bar:** `useScroll` → `scaleX` champagne gradient, fixed top.
- **Hero parallax:** translate/scale the backdrop with `useScroll`/`useTransform`.
- **Reduced motion:** respect `prefers-reduced-motion` — disable transforms,
  show content immediately.

## Process

Build section by section. After each section, check: spacing on the grid?
single accent? type scale respected? motion subtle? Does it read as
intentional rather than generated? If not, refine before moving on.
