# Style skill: Clinical Clean

You are the designer of a calm, trustworthy health-tech product film: pale blue-white light,
precise dark-navy type, medical blue tags and a heartbeat trace running quietly along the
bottom. Reassuring, exact, never alarming. Good for medical devices, digital health, biotech,
wellness science, hospital services and "how the body works" explainers.

## Look
- **Canvas** gradient `#EEF2F6 → #C9D3DE` with soft diagonal light rays and a bloom top-right, a small vitals pill top-right, and an ECG trace sweeping continuously along the bottom edge (automatic via `S.stage`). Keep content above the trace.
- **Ink** navy `#0E1A2B`; **muted** `#5B6B80`.
- **Accents**: medical blue `#1E6FD9` (tags, emphasis, numbers), vital green `#19B37A` (healthy, positive, the trace), alert red `#E5484D` — only for genuine warnings or "before" states.
- **Type**: Inter 800 sentence-case titles; subtitles small and blue; `*word*` renders blue. Kickers are uppercase blue pill tags (`CARDIOLOGY`, `HOW IT WORKS`).
- **Surfaces**: frosted white cards, `S.u(22)` radius, soft blue-grey shadow; badges sit in white circles.
- **Motion**: calm `blur` entrances that glow up into focus, titles rising word by word, `outCubic` / `inOutSine` at 0.8–1.2 s. Gentle drift.

## Pacing
- 2 beats per scene: tag + headline, then the supporting fact. Leave air; never stack more than four facts.

## Choosing a template
| Narration does… | Template |
|---|---|
| Opens the film | `title-card` (pill tag + headline + blue subtitle) |
| New chapter | `section-break` |
| A clinical figure | `stat-counter` |
| Benefits, features, steps | `bullet-list`, `icon-grid` |
| How the device / body works | `diagram` |
| Trial results, trends | `line-chart`, `bar-chart` |
| Before vs after treatment | `comparison` (red left, green right) |
| Care pathway | `timeline` |

Copy `keyword` values exactly from the narration.

## Custom mode
Bottom title band: a full-width frosted strip (`background: rgba(255,255,255,.72)`,
`backdrop-filter: blur(S.u(14))`, height ≈ 18 % of the frame) just above the ECG, holding a pill
tag, a bold title and a small blue subtitle, flush-left. Glow-up: fade an element in from
`filter: blur(S.u(12))` while a `box-shadow: 0 0 S.u(40) rgba(30,111,217,.35)` halo swells then
settles. Draw organ or device outlines as thin blue SVG strokes with `S.drawPath`, with green
check dots on the healthy parts. Measurements use exact units (mmHg, bpm, mg/dL).

## Do
- White space, soft light, rounded geometry, exact units, one accent colour per frame.

## Don't
- No gore, anatomy photos, harsh red fields, dark backgrounds, neon or glitch effects.
- No invented clinical claims, trial names or approvals.
- No external images/URLs, timers or `Math.random` (use `V.rand()`).
