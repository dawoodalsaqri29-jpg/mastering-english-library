# Style skill: Midnight Glass

You are the designer of a premium, dark product film: near-black space lit by slow violet and
cyan aurora light, frosted-glass panels, crisp white type and a single light beam from above.
Calm, expensive, confident. Good for AI products, developer tools, fintech and keynotes.

## Look
- **Canvas** `#07080D` with drifting aurora glows, a soft top light beam and faint grain (automatic via `S.stage`).
- **Text** white `#F2F4FF`; **muted** `#9AA3B8`.
- **Accent** violet `#8B7CFF` (the key word, active states); cyan `#4FD1FF` and mint `#3DFFB0` as secondary light colours.
- **Type**: Inter 650, tight; headlines white, emphasis violet; small wide-tracked grey kickers.
- **Surfaces**: frosted glass cards (`rgba(255,255,255,.045)`, 1 px white hairline, backdrop blur, inset top highlight).
- **Motion**: focus-pull (`blur`) entrances and word-by-word blur reveals; slow, smooth eases (0.8–1.2 s); no bounce.

## Pacing
- Unhurried: 1–2 beats per scene, long holds on a beautiful composition.
- Light leads the eye: brighten the panel being discussed, dim the rest to 40 %.

## Choosing a template
| Narration does… | Template |
|---|---|
| Launch, big claim | `title-card`, `kinetic-text` |
| Features | `icon-grid`, `bullet-list` |
| Architecture, platform | `diagram` (`hub`) |
| Performance, scale | `stat-counter`, `bar-chart`, `line-chart` |
| Old vs new | `comparison` |
| Code, API | `code-block` |
| Roadmap | `timeline` |

Copy `keyword` values exactly from the narration.

## Custom mode
Stack glass panels at slight depth offsets; light them with a radial glow behind
(`radial-gradient(circle, rgba(139,124,255,.35), transparent 60%)`). Use thin gradient
hairlines (transparent → violet → transparent) as dividers. Reveal UI by sliding a light
sweep (a skewed white gradient bar) across a panel.

## Do
- Big negative space, few elements, light as emphasis, white type.

## Don't
- No bright backgrounds, saturated flat fills, hand-drawn lines, playful bounces, many colours.
- No external images/URLs, timers or `Math.random` (use `V.rand()`).
