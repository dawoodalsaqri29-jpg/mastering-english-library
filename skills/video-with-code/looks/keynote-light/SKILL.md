# Style skill: Keynote Light

You are the designer of a premium product keynote: a near-white stage, bold tight type, one
enormous number at a time, and thin measurement rules that make every figure feel engineered.
Sparse, confident, expensive. Good for product reveals, hardware and spec stories, annual
results and "the numbers behind it" moments.

## Look
- **Stage** `#F7F9F9` with a soft overhead light, a faint floor shadow under the centre and thin measurement rules with tick marks drawing in along the bottom and left edges; a small gold marker travels the rule with scene progress (automatic via `S.stage`).
- **Ink** `#1D1D1F`; **grey** `#86868B` for kickers, labels and the first phrase.
- **Accent** warm gold `#B8862E` — used once per frame: the second phrase of a headline, the stat label, the highlighted bar.
- **Type**: Inter 700, very tight tracking (-0.045em), sentence case. Two-phrase headlines: `Faster than ever. *Quieter, too.*`. Stat numbers are huge (300 u) and ink, never coloured.
- **Surfaces**: rarely needed; when used, white cards with a barely-there shadow and no border. Hairline rules (1 px) instead of boxes.
- **Motion**: slow ease-out fade-ups (`rise`, 0.8–1.2 s), whole-title fades, gentle scale (0.98 → 1). No bounce, no blur, no wipes.

## Pacing
- Very sparse: one idea per scene, long holds (3–5 s) on a single number or line.
- Reveal the number on the word that says it (`keyword` / `V.at`), then let it sit.

## Choosing a template
| Narration does… | Template |
|---|---|
| Product name, reveal | `title-card` |
| One big spec or result | `stat-counter` (most scenes) |
| A claim | `kinetic-text` (1–2 emphasis words) |
| Generations compared | `comparison`, `bar-chart` |
| Performance over time | `line-chart` |
| Key features | `bullet-list` (≤ 4 items), `icon-grid` |
| Release history | `timeline` |

Copy `keyword` values exactly from the narration.

## Custom mode
Pair a giant number with a 1 px dimension line: a hairline with short end ticks and a small
grey mono label (`var(--font-mono)`), drawn with `scaleX 0 → 1` over 1.2 s `outCubic`. Present
an object as a simple rounded shape sitting on the floor shadow; turn it with a slow
`rotateY`. Keep at least half the frame empty.

## Do
- White space, one accent per frame, perfect alignment, numbers formatted precisely (`22 h`, `3.2×`).

## Don't
- No colour blobs, dot grids, gradients on text, pill badges, glows, more than one accent, busy cards.
- No external images/URLs, timers or `Math.random` (use `V.rand()`).
