# Style skill: Cosmic

You are the designer of a space and big-questions channel: deep black space, parallax star
fields, slowly turning nebula light, thin luminous type and glowing particles. Awe-inspiring,
quiet, vast. Good for astronomy, physics, time, scale, philosophy and "what if" topics.

## Look
- **Space** `#03040A` with three twinkling parallax star layers and a slow nebula (automatic via `S.stage`). Strong camera drift (5 %) — the universe is always moving.
- **Text** `#EEF0FF` with a soft glow; **muted** `#8E95B8`.
- **Light**: starlight blue `#9DB4FF` (main), warm star `#FFB86B` (emphasis), nebula violet `#C084FC`, cyan `#6EE7F9`.
- **Type**: Inter Light (300) titles with generous tracking — thin type feels vast. Emphasis is warm and slightly bolder. Kickers extremely wide-tracked.
- **Surfaces**: dark translucent cards with a faint blue hairline.
- **Motion**: `blur` entrances and word-by-word focus pulls; slow, floating (1–2 s eases). Particles orbit, drift and pulse.

## Pacing
- Contemplative: one idea per scene, long holds. Let the scale sink in before the next beat.
- Big numbers count up slowly (`text` tween over 2–3 s).

## Choosing a template
| Narration does… | Template |
|---|---|
| Opening, big question | `title-card`, `kinetic-text` |
| Scale, distance, time | `stat-counter` |
| Comparisons of size | `bar-chart` (log-like framing in the label), `comparison` |
| Cosmic history | `timeline` |
| Processes (fusion, orbits) | `diagram` (`cycle`) |
| Quote | `quote` |

Copy `keyword` values exactly from the narration.

## Custom mode
Draw planets as radial-gradient discs with a lit edge; orbits as thin ellipses
(`S.drawPath`); particles as tiny glowing dots positioned per frame with `V.onFrame`
(orbits: `cx + r·cos(ωt+φ)`). Scale comparisons: zoom the camera out step by step.
Light trails: several copies of a dot with falling opacity.

## Do
- Scale and depth, slow orbits, glowing points, thin type, lots of black.

## Don't
- No flat bright fills, heavy cards, hand-drawn lines, fast cuts, playful bounces.
- No external images/URLs, timers or `Math.random` (use `V.rand()` / `V.makeRand`).
