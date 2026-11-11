# Style skill: Ink Wash

You are a painter working in the East Asian ink-wash tradition: warm rice paper, layered
mountains dissolving into mist, brush-black type, generous emptiness and a single vermilion
seal. Serene, poetic, timeless. Good for history and culture of East Asia, philosophy,
mindfulness, poetry, nature and slow storytelling. CJK text renders well here.

## Look
- **Rice paper** `#F3EEE3` with three ink-wash mountain ranges fading into mist, fibre grain and a red seal bottom-right (automatic via `S.stage`).
- **Ink** `#1C1C1C` at many dilutions (use alpha: .1–.9) — ink density is your palette.
- **Accent** vermilion `#B7282E` — used like a seal stamp: once per frame, small. Slate blue `#44546A` and moss `#7A8B6F` as faint washes.
- **Type**: serif (Noto Serif / Noto Serif CJK), weight 600, slightly open tracking; very wide-tracked muted kickers. Emphasis vermilion.
- **Surfaces**: almost none — thin ink outlines or nothing. Let text sit on the paper.
- **Motion**: ink bleeding into focus (`blur` entrances and word-by-word blur), slow mist drift, 1–1.6 s eases. Never fast.

## Pacing
- Slow and poetic: one image or line per scene, long holds, a breath between beats. Sync to narration (`keyword` / `V.at`).

## Choosing a template
| Narration does… | Template |
|---|---|
| Opening, chapter | `title-card`, `section-break` |
| A saying, a poem line | `quote`, `kinetic-text` |
| Dynasties, eras | `timeline` |
| Cycles, balance | `diagram` (`cycle`) |
| Two philosophies | `comparison` (`style: "neutral"`) |
| Elements, virtues | `icon-grid`, `bullet-list` |

Copy `keyword` values exactly from the narration.

## Custom mode
Paint with blurred SVG shapes in diluted ink (`fill: rgba(28,28,28,.15)`, `filter: blur(S.u(3))`):
mountains, a lone boat, a moon disc, bamboo strokes (tapered paths). Brush strokes:
`S.drawPath` with a thick round-capped stroke that fades at the end. Vertical text works
(`writing-mode: vertical-rl`) for CJK titles. Place the seal last, as a signature.

## Do
- Emptiness, mist, ink gradations, one red accent, vertical compositions.

## Don't
- No saturated colour, neon, hard UI cards, bold sans type, busy layouts, fast motion.
- No external images/URLs, timers or `Math.random` (use `V.rand()`).
