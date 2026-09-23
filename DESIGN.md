# Design

## Theme

Dark tech / cybersecurity. Color strategy: **Committed** — one saturated brand blue carries the interactive/brand weight, on a near-black navy surface. Identity-preservation: the palette below is sampled directly from the client's real logo (`logo.png`), not invented — swapping to OKLCH-composed-from-scratch would break brand match, so hex is used for exact reproduction.

## Color

```css
--bg:            #080b13;   /* near-black, faint navy tilt — matches the logo's dark field */
--surface:       #101623;   /* cards/panels */
--surface-2:     #161e30;   /* raised/hover surface */
--border:        #23304a;   /* hairline borders on dark surfaces */
--border-strong: #34456b;

--ink:           #f5f8ff;   /* headings/primary text — ~18:1 on --bg */
--body:          #c7d0e0;   /* body copy — ~11:1 on --bg */
--muted:         #8a95ac;   /* secondary text/meta — ~5.7:1 on --bg, passes AA */

--primary:        #0b74f5;  /* sampled from the logo's shield gradient (mid stop) */
--primary-strong: #0456c9;  /* logo's darker gradient stop — hover/pressed */
--primary-ink:    #ffffff;  /* primary is mid-luminance saturated → white text (Helmholtz-Kohlrausch) */

--accent:         #3aa0ff;  /* logo's lighter gradient stop — stat highlights only, same hue as primary */
--accent-ink:     #071022;  /* accent is closer to the pale band → dark text reads cleaner */
```

Single-hue brand (no invented second color/green): primary and accent are the two ends of the logo's own blue gradient, kept close in hue so the page reads as one brand color at two intensities rather than two competing colors.

## Typography

- Display/headings: **Space Grotesk** (geometric, technical) — clamp(2rem, 5vw, 3.5rem) for H1, max letter-spacing -0.04em, `text-wrap: balance`.
- Body/UI: **Inter** (humanist, highly legible at small sizes) — contrast pairing against the geometric display face.
- Body max-width: 65-75ch. Long-form sections (`About`, `Challenges`) use `text-wrap: pretty`.
- Numbers/metrics (case study stats): Space Grotesk bold, large size, `--accent` color, never gradient text.

## Layout & Spacing

- Spacing scale (rem): 0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 6, 8, 12 — applied via CSS custom properties, not ad hoc values.
- Section vertical rhythm varies (not uniform py-20 everywhere): hero and CTA sections get more breathing room than dense list sections (Methodology, Pricing).
- Card/service grids: `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` — no manual breakpoints needed.
- z-index scale: `--z-sticky-nav: 10; --z-modal: 50;` (only sticky nav needed for v1; scale left open for growth).

## Components

- **Cards**: 1px `--border`, `--surface` bg, subtle cyan glow (`box-shadow`) on hover — not nested, not identical grids everywhere (Services uses cards; Methodology uses a numbered timeline since it's a genuine ordered sequence — the one deliberate numbered pattern on the page).
- **Buttons**: primary = filled `--primary` + `--primary-ink` text; secondary = outline `--primary` on transparent.
- **Hero background**: a low-opacity SVG node/grid pattern (`--border` tone), decorative only, `aria-hidden`.
- **Stat tiles** (case study): large Space Grotesk numbers in `--accent`, small `--muted` label underneath.

## Motion

- Reveal-on-scroll via `IntersectionObserver`: content is visible by default in markup; the class only adds a translate+fade-in transition, so it never gates visibility (safe for slow JS / no-JS / headless renders).
- Timing: `transition: opacity 480ms cubic-bezier(0.16, 1, 0.3, 1), transform 480ms cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo family, no bounce).
- Stagger list items within one reveal (service cards, methodology steps) — same easing, ~60ms delay increments.
- `@media (prefers-reduced-motion: reduce)`: disable transform, keep an instant/near-instant opacity crossfade.

## Anti-patterns avoided

No side-stripe borders, no gradient text, no glassmorphism-by-default, no uppercase tracked eyebrows above every section, no numbered 01/02/03 scaffolding except Methodology's genuine 5-step sequence, no identical card grids reused for every section type.
