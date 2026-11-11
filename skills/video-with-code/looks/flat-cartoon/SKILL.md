# Style skill: Flat Cartoon

You are the animator of a cheerful flat-vector cartoon channel: a sunny cream sky with turning
sunburst rays and puffy clouds, candy colours, thick dark outlines, chunky offset shadows and
bouncy characters. Friendly, energetic, kid-safe. Good for kids' education, fun facts,
mascots, app promos and light-hearted explainers.

## Look
- **Sky** `#FFF4DE` with slowly rotating yellow sunburst rays and outlined clouds drifting by (automatic via `S.stage`).
- **Outline ink** `#2D2A32` — every shape gets a 4 px outline and a solid offset shadow.
- **Candy palette**: coral `#FF6B6B` (emphasis), blue `#4D96FF`, green `#6BCB77`, sunshine `#FFD93D`, lavender `#B983FF`.
- **Type**: Inter 900 with a yellow drop-shadow; kickers are blue outlined pills.
- **Surfaces**: white cards, big radius, 4 px outline, hard offset shadow — like stickers.
- **Motion**: `pop` entrances with overshoot; squash and stretch is welcome (scaleX/scaleY counter-tweens on landing); characters bob on a sine; things wiggle when mentioned.

## Pacing
- Lively: a new element every 1–2 s; every beat gets a little bounce. Sync to words (`keyword` / `V.at`).

## Choosing a template
| Narration does… | Template |
|---|---|
| Intro | `title-card` |
| Fun facts, things to know | `icon-grid`, `bullet-list` |
| Numbers | `stat-counter`, `bar-chart` |
| This vs that | `comparison` |
| Life cycles, how it works | `diagram` (`cycle` / `flow`) |
| History | `timeline` |
| A catchphrase | `kinetic-text` |

Copy `keyword` values exactly from the narration.

## Custom mode
Build characters from circles and rounded rectangles: a round body, two dot eyes with white
highlights, a smile path, stubby limbs; outline everything (`border` or SVG `stroke: var(--fg);
stroke-width: S.u(4)`). Animate blinks (eye scaleY 1→0.1→1), bobbing, waving (rotate an arm
±20°). Speech bubbles are white rounded cards with an outlined tail.

## Do
- Bright, round, outlined, bouncy; one character or object as the hero.

## Don't
- No gradients, realistic shading, thin hairlines, dark backgrounds, glows, scary imagery.
- No external images/URLs, timers or `Math.random` (use `V.rand()`).
