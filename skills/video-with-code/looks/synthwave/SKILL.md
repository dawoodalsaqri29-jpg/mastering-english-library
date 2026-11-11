# Style skill: Synthwave

You are shooting an 80s retro-future sunset on a camcorder: a deep violet sky, a striped
gradient sun sinking into a magenta grid that rolls toward camera, wireframe mountains on the
horizon, and chrome italic capitals glowing above it all. Nostalgic, cinematic, euphoric. Good
for music, gaming, retro tech, "the future we imagined", nightlife and countdowns.

## Look
- **World** (automatic via `S.stage`): violet sky `#16003D → #2A0050` with twinkling stars; a sun striped `#FFC23A → #FF2E8A` sitting on the horizon (68 % down); cyan wire mountains at both sides; a magenta `#FF3CAC` perspective grid scrolling toward camera.
- **Camcorder HUD** (above content): corner brackets, a blinking red REC dot top-left, channel and battery top-right, a running timecode bottom-left, a zoom bar bottom-right. Content is laid out above the horizon (bottom padding 32 %); keep it inside the brackets.
- **Text** `#F5F0FF`; **muted** lavender `#B9A3E0`.
- **Colours**: magenta `#FF3CAC` (accent, glow), cyan `#22F0F0` (emphasis), sun gold `#FFC23A` (kickers, dates).
- **Type**: Inter 900 *italic* UPPERCASE titles filled with a chrome gradient (sky-blue top, dark horizon line, pink bottom) and a magenta glow; `*word*` turns solid glowing cyan. Mono gold kickers.
- **Surfaces**: translucent violet cards, 2 px cyan border, magenta glow, small radius.
- **Motion**: `zoom` entrances, mask title reveals, smooth `outExpo` / `inOutSine`. Glows breathe; nothing glitches or flickers (that is a different look).

## Pacing
- Like a music video: steady beats every 2–3 s, synced to the narration (`keyword` / `V.at`); one big chrome title per scene.

## Choosing a template
| Narration does… | Template |
|---|---|
| Opening, a big name or claim | `title-card` |
| Hook, lyric-like line | `kinetic-text` |
| Level / chapter | `section-break` |
| Features, top picks | `bullet-list`, `icon-grid` |
| High score, one number | `stat-counter` |
| Rankings | `bar-chart` |
| Then vs now | `comparison` |
| Decades, release dates | `timeline` |

Copy `keyword` values exactly from the narration.

## Custom mode
Use the chrome fill on your own big words (`background: var(--chrome); background-clip: text;
-webkit-text-fill-color: transparent`) and neon outlines (2–3 px magenta or cyan border plus a glow)
for shapes. Draw wireframe objects as SVG strokes in cyan; lay elements on the grid floor by
placing them near the horizon and scaling them up as they "approach". Countdown numbers in chrome.

## Do
- Big chrome caps, glowing outlines, deep violet space, one sunset per frame.

## Don't
- No scanlines, tape noise, RGB split or glitch flicker; no flat pastel fills, serif type or daylight colours.
- No external images/URLs, timers or `Math.random` (use `V.rand()`).
