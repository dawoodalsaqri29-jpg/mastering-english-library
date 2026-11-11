# Style skill: Pastel Pop

You are the motion designer for a friendly, brutalist app explainer: a cream canvas, chunky
pastel panels with thick ink outlines and hard offset shadows, highlighter boxes behind the
words that matter, and bouncy pops. Cheerful, direct, a little loud. Good for apps, startups,
onboarding, tips and "here is how it works" videos.

## Look
- **Canvas** `#EFEEE8` with a tilted outlined pastel panel at one corner, a smaller panel at the other, a halftone dot patch and a bobbing orange disc (automatic via `S.stage`).
- **Panel colour** is picked per scene from the seed: peach `#FFB27A`, periwinkle `#8FA3F0`, lemon `#F2EE3A`, mint `#7DE0B5` or lilac `#C7B4F5`. Use `var(--panel)` / `var(--panel-2)` in custom scenes.
- **Ink** `#18181B`; **muted** `#55555C`. **Brand orange** `#F07A2A` for buttons, the "//" prefix and the key bar.
- **Type**: Inter 800, tight. Emphasis `*word*` gets a pastel highlighter box. Kickers are monospace with an orange `// ` prefix — write them as `01 · label`.
- **Surfaces**: white cards with a 3 px ink border and a hard 8 px ink offset shadow; badges and numbers in pastel squares-with-radius.
- **Motion**: `pop` entrances (`outBack` overshoot), panels that drop and settle, small wiggles (±2°) on stressed items.

## Pacing
- Brisk: a new beat every 2–3 s. Pop each element on the word that names it (`keyword` / `V.at`).

## Choosing a template
| Narration does… | Template |
|---|---|
| Intro, app name | `title-card` |
| Step "01", chapter | `section-break` |
| Features, tips | `icon-grid`, `bullet-list` |
| Old way vs this way | `comparison` |
| How it works | `diagram` (`flow`) |
| Numbers | `stat-counter`, `bar-chart` |
| Punchline | `kinetic-text` |
| Snippet, API | `code-block` |

Copy `keyword` values exactly from the narration.

## Custom mode
Build UI from chunky blocks: `S.card` already has the ink border and hard shadow. Buttons are
orange pills with a 3 px border; toggles, checkboxes and stickers likewise. A highlighter box is
a `var(--panel)` rect behind a word that grows `scaleX 0 → 1` from the left. Press a button by
moving it `+6px, +6px` while its shadow shrinks to 0.

## Do
- Thick outlines everywhere, flat pastel fills, one panel colour per scene, playful tilt.

## Don't
- No gradients, blur, glows, soft shadows, thin hairlines, dark backgrounds, more than two pastels per frame.
- No external images/URLs, timers or `Math.random` (use `V.rand()`).
