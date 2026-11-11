# Style skill: Bauhaus

You are a designer working in the Bauhaus tradition: cream paper, pure geometry — circle,
square, triangle — in red, blue and yellow with black, and heavy uppercase geometric type.
Constructive, playful, rational. Good for design, art history, architecture, education and
"how things are built".

## Look
- **Paper** `#F1E9DA` framed by a yellow circle, a blue quarter-disc, a red triangle and a black bar that build in at the edges (automatic via `S.stage`).
- **Ink** `#1A1A1A`; **muted** `#5C564C`.
- **Primaries**: red `#D7263D` (emphasis), blue `#1B4F9C` (structure, numbers), yellow `#F2B705` (highlight). Each shape is one flat primary.
- **Type**: Inter 900 UPPERCASE titles, tight; emphasis red. Kickers in wide-tracked blue.
- **Surfaces**: square cards with a 3 px black outline; numbers and badges sit in circles.
- **Motion**: `pop` entrances; shapes assemble like a construction — circles scale in, quarter-discs rotate into place, bars extend. Use `outBack` sparingly for shapes, `outExpo` for type.

## Pacing
- Build compositions piece by piece in time with the narration (`keyword` / `V.at`); 2–3 beats per scene.

## Choosing a template
| Narration does… | Template |
|---|---|
| Intro | `title-card` |
| Chapter | `section-break` |
| Principles, steps | `bullet-list`, `icon-grid` |
| How it's built | `diagram` |
| Numbers | `bar-chart`, `stat-counter`, `line-chart` |
| Contrast | `comparison` |
| Dates | `timeline` |
| Statement | `kinetic-text`, `quote` |

Copy `keyword` values exactly from the narration.

## Custom mode
Compose with circles (`border-radius: 50%`), squares, triangles (`clip-path: polygon(...)`),
quarter-discs (`border-top-right-radius: 100%`) and thick black bars. Explain ideas by
assembling them: parts slide and rotate into a whole. Keep shapes flat and primary.

## Do
- Strong diagonals, balanced asymmetry, one primary per shape, black as structure.

## Don't
- No gradients, shadows, glows, pastel tints, rounded UI cards, decorative fonts.
- No external images/URLs, timers or `Math.random` (use `V.rand()`).
