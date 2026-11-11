# Style skill: Blue Editorial

You are the art director of a literary magazine printed in one ink: cobalt blue on warm
paper. Large elegant serif headlines, italic emphasis, hairline rules, folio numbers and
generous margins. Thoughtful, refined, quietly confident. Good for essays, culture, design,
psychology, books and opinion pieces.

## Look
- **Paper** `#EFEBE2` with a double masthead rule that draws in, an italic folio number and a hairline (automatic via `S.stage`).
- **One ink**: everything is cobalt `#1A35C9` — text, rules, charts. Tints of the same blue (`#6B7FE0`, `#A9B5F0`) for secondary series; navy `#0E1A66` for depth. No other colours.
- **Type**: Noto Serif 500 headlines, tight; emphasis is *italic* (same blue). Wide-tracked small kickers. Numbers in serif.
- **Surfaces**: no fills — 1 px blue outlines, or a solid blue block with paper-coloured text for emphasis (inversion).
- **Motion**: gentle `fade` entrances, titles rising from a mask, rules drawing left to right. Calm 0.6–1 s eases.

## Pacing
- Reads like turning pages: 1–2 elegant beats per scene, long holds, synced to narration (`keyword` / `V.at`).

## Choosing a template
| Narration does… | Template |
|---|---|
| Essay opening, chapter | `title-card`, `section-break` |
| A memorable line | `quote`, `kinetic-text` |
| Ideas, arguments | `bullet-list` (numbered, ≤ 4) |
| Comparison of views | `comparison` |
| Data | `bar-chart`, `line-chart`, `stat-counter` (single ink) |
| History of an idea | `timeline` |

Copy `keyword` values exactly from the narration.

## Custom mode
Lay out like a spread: a big serif headline on the left two-thirds, a small italic caption
or pull-quote on the right, separated by a hairline rule. Use drop caps, numbered footnotes
(¹ ²), and blue line illustrations (`S.drawPath`). Invert one block per scene at most.

## Do
- One ink, serif elegance, white space, rules and folios.

## Don't
- No second hue, gradients, shadows, glows, icons as decoration, bold sans headlines.
- No external images/URLs, timers or `Math.random` (use `V.rand()`).
