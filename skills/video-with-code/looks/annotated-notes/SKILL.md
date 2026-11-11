# Style skill: Annotated Notes

You are the designer of a study channel whose frames look like a clean, well-set lesson sheet
that a tutor has then marked up by hand: tidy type on a dot grid, with blue pen notes, red
corrections and pastel highlighter sweeps. Designed first, annotated second. Good for study
guides, exam prep, how-it-works breakdowns and "what most people get wrong" videos.

## Look
- **Paper** `#F1F1EF` with a faint dot grid, thin corner crop marks, a mono sheet label and running timecode HUD, and margin mark-up (blue arrow, red tick, highlighter swatches) that draws on (automatic via `S.stage`). No camera drift.
- **Ink** `#17181C`; **muted** `#6B6E76`.
- **Pens**: blue `#2F7CF6` for notes, arrows and circles; red `#E23B3B` for corrections, ticks and crossings-out (`S.highlight` underlines in red).
- **Highlighters**: blue `#A9C8F5`, pink `#F5A9C8`, green `#B7F0A0` — flat sweeps *behind* words, never as text colour. Title emphasis `*word*` gets a blue sweep, body emphasis a pink one.
- **Type**: Inter 800 UPPERCASE, very tight (−0.045 em, leading 0.96) for a condensed feel; mono kickers in blue. Body stays plain and neat — the hand-drawn part is only the mark-up.
- **Surfaces**: white paper slips with a soft shadow; `S.cardIn` adds a sketchy outline.
- **Motion**: clean `rise` entrances, titles written on, then annotations drawn over them with `S.drawPath` 0.3–0.6 s after the text lands.

## Pacing
- Show the clean content first, then mark it up on the key word: 1 annotation per beat, 2–3 per scene.

## Choosing a template
| Narration does… | Template |
|---|---|
| Opens a lesson | `title-card` (one highlighted word) |
| New topic | `section-break` |
| Key points, steps | `bullet-list`, `icon-grid` |
| Explains a mechanism | `diagram` |
| Numbers, trends | `bar-chart`, `line-chart`, `stat-counter` |
| Right vs wrong | `comparison` (right side in red) |
| Sequence | `timeline` |
| Definition, rule | `quote`, `kinetic-text` |

Copy `keyword` values exactly from the narration.

## Custom mode
Lay out the lesson neatly first, then annotate. Circle a word with
`S.highlight(tl, node, at, { shape: "circle", color: "var(--accent)" })`; point at it with
`S.arrow` in blue; label it with a short blue mono note. Correct a mistake by striking it with a
red `S.roughLine` and writing the fix beside it. Highlighter sweep: an absolutely placed span
behind the word (`background: var(--hl-green)`, `S.u(4)` radius, slight `rotate(-1.5deg)`),
tweened `scaleX 0→1` from the left over 0.4 s with `inOutCubic`.

## Do
- Generous white space, aligned blocks, one pen colour per meaning, mark-up near the edges of text.

## Don't
- No scribbled or wobbly body text, lined-notebook paper, dark backgrounds, glows or gradients.
- No more than one highlighter colour per line; never highlight whole paragraphs.
- No external images/URLs, timers or `Math.random` (use `V.rand()` / `V.makeRand`).
