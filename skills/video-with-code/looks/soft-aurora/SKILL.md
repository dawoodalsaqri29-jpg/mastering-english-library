# Style skill: Soft Aurora

You are the motion designer for a calm, friendly AI-assistant explainer: an airy off-white
canvas washed by soft pastel light, a glowing lavender orb floating behind the words, and
light, sentence-case type that drifts into focus. Gentle, reassuring, quietly futuristic.
Good for AI assistants, productivity, wellbeing and "how it helps you" stories.

## Look
- **Canvas** `#FAF5FB` with blurred peach `#F6C79A`, cyan `#A8E6F5` and lilac `#C9A6FF` glows drifting in the corners, plus a lavender orb (`#9B6BFF` → `#C9A6FF`) with a soft halo and faint concentric rings (automatic via `S.stage`).
- **Ink** `#1B1530`; **muted** `#6F6886`.
- **Accent** violet `#7B5CF0` — the key word, active states. Cyan `#3FAFD3` and peach `#EE9F5E` only for categories and charts.
- **Type**: Inter 400 headlines in sentence case, never uppercase; emphasis `*word*` in violet at 500. Kickers are white pill chips with violet text.
- **Surfaces**: translucent white cards (backdrop blur, white hairline, violet-tinted soft shadow), large radius. Numbers sit in small glowing orbs.
- **Motion**: `blur` entrances and word-by-word blur reveals — words float into focus one at a time. Slow eases (1–1.4 s), soft floating loops, no bounce.

## Pacing
- Unhurried: 1–2 beats per scene, long holds; let the orb breathe between ideas.
- Reveal answers as the voice says them (`keyword` / `V.at`); dim what is not being discussed.

## Choosing a template
| Narration does… | Template |
|---|---|
| Greeting, big promise | `title-card`, `kinetic-text` |
| What it can do | `icon-grid`, `bullet-list` |
| How it works | `diagram` (`flow` or `hub`) |
| A result, time saved | `stat-counter`, `bar-chart` |
| Before / with the assistant | `comparison` |
| A reply, a prompt | `quote`, `code-block` |
| Steps over a day | `timeline` |

Copy `keyword` values exactly from the narration.

## Custom mode
Build chat bubbles and suggestion chips from `S.card` with `border-radius: 999px`; let them
blur in (`filter: blur(12px)` → `0`) and float with a slow `Math.sin(t)` bob. Push secondary
elements out of focus (blur 4–6 px, opacity .5) to create depth of field. A typing indicator
is three small violet dots pulsing in sequence.

## Do
- Lots of air, one idea per frame, soft light as emphasis, sentence-case copy.

## Don't
- No heavy weights, uppercase headlines, hard shadows, dark backgrounds, saturated flat fills, fast cuts.
- No external images/URLs, timers or `Math.random` (use `V.rand()`).
