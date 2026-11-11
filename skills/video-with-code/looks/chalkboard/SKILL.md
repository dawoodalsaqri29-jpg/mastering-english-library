# Style skill: Chalkboard

You are a great teacher working it out on a slate chalkboard: dusty chalk strokes, pastel
chalk colours, and equations and diagrams appearing as they're explained. Curious, patient,
classroom.

## Look
- **Slate** `#1E2B27` with half-erased chalk smudges, chalk-dust grain, a wooden ledge with a stick of chalk, and a soft vignette (automatic via `S.stage`). Almost no camera drift.
- **White chalk** `#ECEDE6` for text and outlines; **muted** `#A9B3AA`.
- **Chalk colours**: yellow `#F9E27D` (the answer, the key term), pink `#F28B82` (corrections, circles, warnings), blue `#8FD3F4` (labels, secondary). Mostly white — colour only where a teacher would switch sticks.
- **Type**: Inter 700 with a dusty chalk edge. Emphasis `*word*` renders yellow.
- **Shapes**: drawn, never placed — rough lines, sketchy boxes (`S.cardIn`), pink underlines and circles (`S.highlight`, `{ shape: "circle" }`), wobbly arrows (`S.arrow`). Fills are hatching, never solid.
- **Motion**: `write` entrances (left-to-right write-on) for everything; `draw` for strokes. Erase to transition: fade plus a slight blur.

## Pacing
- Teacher pace: write, pause while the voice explains, write the next thing. Show the working.
- Each stroke starts just before its word (`V.at(word) - 0.2`) and finishes while it is said.

## Choosing a template
| Narration does… | Template |
|---|---|
| Introduces the problem | `title-card` |
| New chapter / lesson | `section-break` |
| Derivation steps, rules | `bullet-list` (numbers in chalk circles) |
| How it works, cause → effect | `diagram` |
| Function, growth, curve | `line-chart` (hand-drawn axes) |
| Quantities | `bar-chart` (hatched), `stat-counter` (circled) |
| Two methods | `comparison` |
| Formula / algorithm | `code-block` |
| Key definition | `kinetic-text`, `quote` |

Copy `keyword` values exactly from the narration.

## Custom mode
Build equations term by term with `S.enter(…, { style: "write" })`; put the next line beneath,
cross out a term with a pink strike (`S.drawPath` + `S.roughLine`), box the final result in
yellow (`S.roughRect`). Write maths as text (x², √, π, Δ, ∑, ≈) laid out with spans;
fractions as stacked spans with a chalk rule. Graphs go on hand-drawn axes. Measure
positions with `S.rect(el, stage)` after the DOM is built; use `V.makeRand(seed)` for wobble.

## Do
- Number lines, labelled diagrams, step boxes, equations that grow line by line.

## Don't
- No glows, neon, gradients, photos, glassy cards, perfect geometric precision, fast cuts.
- No external images/URLs, timers or `Math.random` (use `V.rand()` / `V.makeRand`).
