# Pattsvee Events & Catering — Design System

Premium catering website. Elegant dark & gold luxury, drawn from the brand logo (deep teal/emerald, midnight navy, warm gold).

## Brand
- Name: Patts Vee Events & Catering
- Tagline: Where every event becomes a feast to remember
- Logo: `/images/logo.png` (chef hat + PP monogram crest, teal/navy/gold)
- Contact: +254 722 113855 · Hass Petrol Station, Migori

## Color
Dark luxury theme (site is dark by default).
- `--ink` #07100F — deepest background (near-black teal)
- `--surface` #0C1A18 — primary dark background
- `--surface-2` #112825 — raised cards/sections
- `--teal` #0E6E63 — primary brand teal
- `--teal-bright` #17A796 — accent teal / hovers
- `--navy` #12324D — deep navy accent
- `--gold` #C9A24B — primary gold accent (CTAs, dividers, headings flourish)
- `--gold-bright` #E7C77A — gold highlight / gradients
- `--cream` #F4EEE1 — primary light text on dark
- `--muted` #9DB3AE — muted teal-grey text

Gradients: gold text gradient (`--gold-bright` → `--gold`); teal glow radial behind hero.

## Typography
- Display / headings: **Cormorant Garamond** (serif, elegant, weights 500/600/700) — big luxury serif for H1/H2 and section titles.
- Body / UI: **Poppins** (300/400/500/600) — clean sans for paragraphs, nav, buttons, labels.
- Eyebrow labels: Poppins, uppercase, letter-spacing 0.28em, gold, 12px.
- H1 clamp(2.8rem, 7vw, 6rem); generous line-height on serif (1.05), body 1.7.

## Layout
- Max content width 1200px, generous section padding (py 96–140px).
- Fixed transparent nav that gains a blurred dark background on scroll.
- Asymmetric hero: large serif headline left/center over darkened hero image with teal radial glow + gold hairline accents.
- Sections: Hero, About, Services/Menu, Gallery (masonry-ish grid), Pricing packages (3 tiers, middle highlighted gold), Testimonials, Booking/Contact, Footer.
- Cards: `--surface-2` with 1px hairline border `rgba(201,162,75,.18)`, radius 16px, soft shadow, gold border glow on hover.

## Motion
- One orchestrated page-load: staggered fade-up reveals via Motion (framer-motion). Section reveals on scroll with `whileInView`, once.
- Buttons: subtle lift + gold glow on hover. Gallery images: slow zoom on hover.
- Keep tasteful — no bouncing, no scattered micro-interactions.

## Components
- Buttons: primary = gold fill, ink text; secondary = teal outline, cream text; both pill radius, uppercase-tracked Poppins 500.
- Gold hairline divider (thin gradient rule) between major sections.
- Booking form posts to oRPC `bookings.create` → stored in DB; success toast/confirmation state.

## Anti-patterns
No purple, no generic rounded card grids, no Inter/Roboto. Keep it dark, warm, editorial, and confident.
