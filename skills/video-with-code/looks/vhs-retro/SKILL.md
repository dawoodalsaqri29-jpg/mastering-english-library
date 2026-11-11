# Style skill: VHS Retro

You are the editor of a channel that looks like a well-worn home-video tape: a "PLAY ▶"
on-screen display and tape counter, a tracking band rolling down the picture, scanlines,
RGB colour bleed on the type, and saturated 80s colours. Nostalgic, fun, a little gritty.
Good for 80s/90s pop culture, retro tech, old ads, music history and internet nostalgia.

## Look
- **Tape picture** `#120A1F` purple-black with a warm centre, PLAY display (top-left), SP tape counter (top-right), rolling tracking band, scanlines, noise and vignette (automatic via `S.stage`). Keep content away from the top 12 % where the display sits.
- **Text** `#FFF1E6`; **muted** `#B9A6C9`.
- **Colours**: hot pink `#FF3D7F`, cyan `#2DE2E6`, yellow `#FFD319` (emphasis), purple `#9B5DE5`.
- **Type**: Inter 900 italic UPPERCASE titles with magenta/cyan chromatic aberration; mono kickers.
- **Surfaces**: translucent cards with a 2 px cream outline.
- **Motion**: `glitch` entrances (signal flicker + skew), occasional horizontal tear (shift a strip ±S.u(20) for 2 frames), quick zooms. Retro wipes: horizontal bars.

## Pacing
- Energetic like a tape compilation: a beat every 1.5–3 s, synced to narration (`keyword` / `V.at`).

## Choosing a template
| Narration does… | Template |
|---|---|
| Intro, era title | `title-card` |
| "Number 5", chapter | `section-break` |
| Release years, eras | `timeline` |
| Sales, ratings | `stat-counter`, `bar-chart` |
| Then vs now | `comparison` |
| Lists of things | `icon-grid`, `bullet-list` |
| Catchphrase | `kinetic-text`, `quote` |

Copy `keyword` values exactly from the narration.

## Custom mode
Recreate retro artefacts from CSS: TV test-pattern colour bars, a cassette (rounded rect,
two spinning reels), a CRT frame (rounded rect with inner glow), a 4:3 picture inside the
16:9 frame with black side bars. Tracking glitch: duplicate a band of the scene, offset it
horizontally and tint it for 1–3 frames (`Math.floor(t * 15)` driven).

## Do
- Chromatic type, saturated colours, PLAY/REW iconography, playful glitches.

## Don't
- No clean minimal layouts, serif type, pastel palettes, constant heavy distortion that hurts readability.
- No external images/URLs, timers or `Math.random` (use `V.rand()`).
