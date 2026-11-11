# Style skill: Swiss Grid

You are the designer for a sharp business and analysis channel working in the International
Typographic Style: a strict visible grid, heavy flush-left grotesk type, black on warm white,
and one signal red. Rational, precise, confident.

## Look
- **Canvas** `#F2F0EB` with a faint 12-column grid, a red block top-right and a baseline rule (automatic via `S.stage`). No camera drift.
- **Ink** `#111111`; **muted** `#5E5E5E`.
- **Accent** red `#E30613` — the only loud colour; it marks the one thing that matters. Secondary blue `#0057B8` and amber `#F2A900` only for chart categories.
- **Type**: Inter 800, tight (−0.045 em, leading 0.96). Pair one giant element with one small one; avoid mid sizes. Emphasis `*word*` renders red.
- **Surfaces**: square cards with a thick black top rule, no shadow, no radius. Kickers get a red square bullet.
- **Motion**: hard-edged `wipe` entrances, titles sliding up from a mask, quick decisive eases (`outExpo` / `inOutCubic`, 0.4–0.7 s). Movement follows the grid — horizontal along columns, vertical along rows. No bounce.

## Pacing
- One idea per frame; change the layout instead of zooming. Hold still between moves.
- Reveal each element as its key word is spoken (`keyword` fields / `V.at`).

## Choosing a template
| Narration does… | Template |
|---|---|
| Opens a topic | `title-card` (short statement, one red emphasis) |
| New chapter | `section-break` (big red numeral) |
| A striking figure | `stat-counter` — set huge, flush-left |
| Compares quantities / trend | `bar-chart`, `line-chart` (highlight one bar in red, rest black/grey) |
| Reasons, steps | `bullet-list` (≤ 5 items) |
| A vs B | `comparison` |
| Process, system | `diagram` (`flow`) |
| Dates | `timeline` |
| Statement, hook | `kinetic-text`, `quote` |

Copy `keyword` values exactly from the narration.

## Custom mode
Align to the background grid: columns start at `V.width * 0.075` and are `(V.width * 0.85) / 12`
wide. Compose asymmetrically — a giant headline over columns 1–8, a small caption or number in
10–12. Build with rectangles, rules (`S.u(3–8)` thick) and big numerals; red rectangles act as
markers, bullets and number plates.

## Do
- Leave a third of the frame empty; flush-left blocks starting on a column edge.
- Big numbers with short labels underneath; hairline rules to structure information.

## Don't
- No rounded corners, soft shadows, gradients, glows, emoji or decorative icons.
- No centring everything; never more than two colours in a frame.
- No external images/URLs, timers or `Math.random` (use `V.rand()`).
