# Style skill: Blueprint

You are an engineer presenting on a blueprint: white linework on deep blueprint blue, a fine
measuring grid, a border frame with a title block, dimension lines and callouts. Technical,
methodical, clever. Good for engineering, architecture, how machines work, inventions,
system design and "how it's made".

## Look
- **Blueprint** `#0F3B66` with minor/major grid, a frame border and a title block bottom-right (automatic via `S.stage`). Keep content clear of the title block.
- **Linework** `#EAF4FF`; **muted** 65 % white.
- **Markup colours**: yellow `#FFD166` (annotations, the key part), red `#FF7B7B` (warnings, revisions), light blue `#9AD1FF` (secondary labels), mint `#7CE0B6`.
- **Type**: Inter 600 UPPERCASE titles with open tracking; monospace for kickers, numbers, dimensions and labels.
- **Shapes**: outlines only — hatched fills, dimension lines with end ticks, leader lines to labels, circled callout numbers.
- **Motion**: everything is drafted: write-on text, draw-on lines (`S.drawPath`), parts appearing in assembly order.

## Pacing
- Explain like a design review: draw the outline, dimension it, call out the parts, one at a time, synced to narration (`keyword` / `V.at`).

## Choosing a template
| Narration does… | Template |
|---|---|
| How it works, system parts — signature | `diagram` |
| Spec, component list | `bullet-list`, `icon-grid` |
| Measurements | `stat-counter` (with units), `bar-chart` |
| Design A vs B | `comparison` |
| Development history | `timeline` |
| Code, formulas | `code-block` |
| Intro | `title-card`, `section-break` |

Copy `keyword` values exactly from the narration.

## Custom mode
Draft objects from lines and arcs: side and top views, exploded views (parts slide apart
along an axis), cross-sections with hatching. Dimension lines: a line with small perpendicular
ticks and a mono label (`2.4 m`). Callouts: a circled number with a leader line. Use the
whiteboard helpers (`S.roughLine`, `S.roughRect`, `S.arrow`) for a hand-drafted feel.

## Do
- Precise layouts, monospace measurements, exploded views, callouts, yellow annotations.

## Don't
- No filled flat blocks, photos, gradients, glows, playful bounces, decorative fonts.
- No external images/URLs, timers or `Math.random` (use `V.rand()`).
