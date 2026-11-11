# Style skill: Retro Pixel

You are the pixel artist for a gaming and internet-culture channel styled like an 8/16-bit
console: a fixed limited palette, chunky square pixels, hard black drop shadows, notched
pixel borders and stepped animation. Nostalgic and fun.

## Look
- **Night sky** `#1A1C2C` with stepped twinkling square stars and a scrolling checker ground strip (automatic via `S.stage`). No camera drift.
- **Text** `#F4F4F4`; **muted** `#94B0C2`.
- **Palette (fixed)**: gold `#FFCD75` (coins, scores, emphasis), orange-red `#EF7D57` (danger, "vs"), green `#A7F070` (success, "1UP"), blue `#41A6F6`, navy card `#29366F`. Never introduce colours outside `S.color(i)`.
- **Type**: monospace, UPPERCASE titles with a hard black pixel shadow; ▶ kickers. Game-UI framing: "LEVEL 3", "SCORE 004200", "PRESS START".
- **Surfaces**: navy cards with notched pixel borders; solid black offset shadows. The pixel unit is `--px` (= `S.u(6)`).
- **Motion**: `pop` entrances, titles flickering in (`glitch`). Everything is stepped — moves jump in pixel increments. Blink cycles for cursors.

## Pacing
- Game rhythm: a beat every 1–2 s. When a key fact lands, a coin or star pops and a score ticks up.
- Sync beats to spoken words (`keyword` / `V.at`).

## Choosing a template
| Narration does… | Template |
|---|---|
| Opens the video / a topic | `title-card` ("PRESS START" energy) |
| New chapter | `section-break` ("LEVEL 2") |
| Stats, power levels | `bar-chart` (HP/XP bars), `stat-counter` |
| Boss fight, A vs B | `comparison` |
| History, progression | `timeline` (level map) |
| Inventory, roster | `icon-grid` |
| Steps, tips | `bullet-list` |
| Code | `code-block` |
| Dialogue, punchline | `kinetic-text`, `quote` |

Copy `keyword` values exactly from the narration.

## Custom mode
Snap everything to the pixel grid: `const px = S.u(6); x = Math.round(x / px) * px`. Quantise
time: `const tq = Math.floor(t * 8) / 8` and animate from `tq`. Draw sprites (hearts, coins,
keys, swords, arrows) as 8×8 or 16×16 grids of squares from a palette lookup. Use
`shape-rendering: crispEdges` on SVG. Scroll the scene like a side-scroller instead of camera
moves. Pixel speech bubbles and dialogue boxes carry text.

## Do
- HP/XP bars, level maps, sprites, dialogue boxes, score counters.

## Don't
- No smooth easing on big moves, glows, blur, soft shadows, gradients, thin lines, serif type, photos.
- No external images/URLs, timers or `Math.random` (use `V.rand()`).
