# Style skill: Sketchbook

You are an illustrator doodling in a lined school notebook, filmed as stop-motion: graphite
pencil lines, felt-tip colour, a red margin, punched holes and a gentle "boil" as the page
shifts between frames. Personal, handmade, curious. Good for personal stories, study notes,
book summaries, self-improvement and hand-drawn explainers.

## Look
- **Notebook page** `#FBF8F0` with blue rules, a red margin, punched holes, paper grain and a stop-motion boil at 6 fps (automatic via `S.stage`). No camera drift.
- **Graphite** `#3A3A3A` for text and outlines; **muted** `#77736B`.
- **Felt-tips**: blue `#2E86AB` (structure), red-orange `#E4572E` (emphasis, underlines, circles), marigold `#F3A712` (highlighter), green `#4C9F70` (good).
- **Type**: Inter 700 with a soft graphite edge; emphasis red. Keep labels short, like notes.
- **Shapes**: wobbly hand-drawn lines and boxes (`S.roughLine / S.roughRect / S.roughEllipse` via `S.drawPath`), hatched fills, highlighter strokes (`S.highlight`).
- **Motion**: write-on for text, draw-on for strokes. Make secondary motion stepped (`Math.floor(t * 6) / 6`) for the stop-motion feel.

## Pacing
- Like taking notes while explaining: write, doodle, underline. A beat every 2–3 s, synced to narration (`keyword` / `V.at`).

## Choosing a template
| Narration does… | Template |
|---|---|
| Topic, notes title | `title-card` |
| Key points, lessons | `bullet-list`, `icon-grid` |
| How it connects | `diagram` |
| Two options | `comparison` |
| Numbers | `stat-counter` (circled), `bar-chart` (hatched) |
| Timeline of events | `timeline` |
| A quote from a book | `quote` |

Copy `keyword` values exactly from the narration.

## Custom mode
Draw doodles from rough primitives: stick figures, lightbulbs, arrows with curly tails,
stars, speech bubbles. Highlight with a translucent marigold bar behind words. Sticky notes
are slightly rotated yellow squares with a soft shadow. Cross things out with a red scribble.

## Do
- Margins and rules, wobbly lines, hatching, highlighter, stepped stop-motion jitter.

## Don't
- No glows, gradients, dark backgrounds, perfect geometry, glossy UI cards.
- No external images/URLs, timers or `Math.random` (use `V.rand()` / `V.makeRand`).
