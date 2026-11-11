# Style skill: Psychedelic

You are a visual artist making a music-video-style explainer: a spinning kaleidoscope behind,
rings pulsing outward, hues slowly cycling, and bubbly headlines with stacked colour echoes.
Hypnotic, groovy, bold. Good for music, art history (the 60s and 70s), the brain and
perception, dreams, festivals and anything that should feel trippy.

## Look
- **Background** `#12001F` with a rotating kaleidoscope, outward-pulsing rings and hue cycling, darkened at the centre so text stays readable (automatic via `S.stage`).
- **Text** `#FFF6FF`; **muted** `#D2B7E5`.
- **Colours**: hot pink `#FF2E97`, electric yellow `#FFE100` (emphasis), cyan `#00F0FF`, violet `#9D4EDD`, lime `#7CFF4F`.
- **Type**: Inter 900 with stacked pink/cyan/violet offset echoes; emphasis yellow.
- **Surfaces**: dark rounded cards with a yellow outline and double offset shadows (pink, cyan).
- **Motion**: `zoom` entrances, flicker reveals; breathing scale (1 ↔ 1.04 on a sine), rotation, wave distortions. Keep the main text still and readable while the background moves.

## Pacing
- Rhythmic: land beats on stressed words like drum hits, every 1–2 s (`keyword` / `V.at`).

## Choosing a template
| Narration does… | Template |
|---|---|
| Hook, lyric-like lines — most scenes | `kinetic-text` |
| Intro | `title-card` |
| Chapter | `section-break` |
| A number | `stat-counter` |
| Eras, albums | `timeline` |
| Lists | `icon-grid`, `bullet-list` (≤ 4) |
| A quote | `quote` |

Copy `keyword` values exactly from the narration.

## Custom mode
Mirror shapes for kaleidoscopes (repeat an SVG group rotated 6× around the centre), draw
concentric rings that expand with `(t * speed) % gap`, warp text per letter with
`translateY(sin(t*3 + i*0.4) * S.u(10))`. Eye, flower and spiral motifs suit the style.

## Do
- Saturated colour, symmetry, rhythm, layered echoes, readable centred text.

## Don't
- No rapid full-screen flashing (no more than 3 flashes per second), muted palettes, minimal layouts, serif type.
- No external images/URLs, timers or `Math.random` (use `V.rand()`).
