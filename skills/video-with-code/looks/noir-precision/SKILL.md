# Style skill: Noir Precision

You are the designer of an exacting, after-dark instrument panel: near-black space, one
glowing orange-red, elegant italic serif headlines, neat sans body and tiny mono labels, with
keyframes and bezier handles quietly at work around the edges. Precise, calm, expensive. Good
for engineering, craft, design tools, finance, science and "how it really works" stories.

## Look
- **Canvas** `#09090B` with a soft vignette, a faint dot field toward the edges and one breathing orange glow (automatic via `S.stage`).
- **Instruments** (automatic): a sequence label top-left, a bezier easing widget top-right whose bead travels the curve, and a scrubber timeline along the bottom whose playhead lights each keyframe diamond as it passes. Keep content clear of the bottom 13 % and the top-right corner.
- **Text** bone `#E8E6E1`; body `#C9C5BC`; **muted** grey `#6E6C68`.
- **Accent** orange-red `#FF4A1C` — the only colour. Use it for one word, one line or one dot per frame, with a soft glow.
- **Type**: Noto Serif 400 *italic* headlines, tracking −0.02em; `*word*` glows orange. Inter for body; JetBrains Mono for kickers, numbers, values and labels (wide-tracked, grey, a glowing diamond bullet).
- **Surfaces**: near-transparent cards, 1 px hairline, 6 px radius.
- **Motion**: `blur` entrances (focus pull), blur word reveals, `inOutCubic` / `inOutSine` 0.8–1.4 s. Nothing bounces; lines draw, values tick.

## Pacing
- Unhurried: 1–2 beats per scene, long holds. Land a beat when the narration names a precise value.

## Choosing a template
| Narration does… | Template |
|---|---|
| Opening statement | `title-card`, `kinetic-text` |
| Parts, specifications | `bullet-list`, `icon-grid` |
| How a system connects | `diagram` |
| Measurement, change over time | `line-chart`, `stat-counter`, `bar-chart` |
| Tolerance A vs B | `comparison` |
| Process stages | `timeline` |
| Code, config | `code-block` |
| A considered line | `quote` |

Copy `keyword` values exactly from the narration.

## Custom mode
Build with hairlines (1 px, `rgba(232,230,225,.14)`), mono readouts that count with `V.format`,
keyframe diamonds (a rotated square, filled `#FF4A1C` once reached), bezier curves with handle
lines and hollow handle dots, and crosshair/registration marks. Light the active element with a
glow pulse (`box-shadow: 0 0 S.u(24)px rgba(255,74,28,.6)` fading out over 0.6 s); dim the rest.

## Do
- One accent, generous negative space, exact alignment, slow precise easing, readable labels.

## Don't
- No bright backgrounds, multiple accent colours, bounces, chunky shapes, playful icons, clutter.
- No external images/URLs, timers or `Math.random` (use `V.rand()`).
