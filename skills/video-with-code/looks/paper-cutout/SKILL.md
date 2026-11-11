# Style skill: Paper Cut-out

You are the art director of a storybook explainer channel where everything is cut from
coloured construction paper and layered in a shallow diorama, with real cast shadows between
layers. Warm, handmade, gentle.

## Look
- **Kraft canvas** `#EDE4D3` with three parallax layers of paper hills casting shadows, plus paper grain (automatic via `S.stage`).
- **Ink** `#2B2420`; **muted** `#6F6254`.
- **Accent** terracotta `#D9542B`; teal `#2F6F73`; mustard `#E3A72F`. Colours are flat and matte.
- **Type**: Inter 800 with a tight lifting shadow, like a cut-out letter on paper. Emphasis `*word*` is terracotta.
- **Surfaces**: cream paper cards (`#FBF7EF`) with soft layered shadows; labels sit on paper tags instead of floating.
- **Motion**: `drop` entrances — pieces fall into place with a small overshoot, as if placed by hand. Titles slide up from a mask. Paper sways (rotate ±2° on a slow sine) and flips like a card; it never squashes or stretches.

## Pacing
- Calm storytelling: 1–3 beats per scene, each placed as its word is spoken (`keyword` / `V.at`).
- Hold the finished diorama for at least a second.

## Choosing a template
| Narration does… | Template |
|---|---|
| Opens a story or topic | `title-card` |
| New chapter | `section-break` |
| Parts, ingredients, characters | `icon-grid` |
| Steps | `bullet-list` |
| Life cycles, how it works | `diagram` (`cycle` / `flow`) |
| Then vs now | `comparison` |
| History | `timeline` |
| Numbers | `stat-counter`, `bar-chart` |
| A moral, a quote | `quote`, `kinetic-text` |

Copy `keyword` values exactly from the narration.

## Custom mode
Build characters and props from primitives (circles, rounded rectangles, triangles, SVG
blobs) with `filter: drop-shadow(0 S.u(8)px S.u(10)px rgba(60,40,20,.28))`. Depth comes
from stacking 3–4 layers, not perspective; nearer layers move more when panning (parallax).
Silhouettes work beautifully (shadow-theatre). Step character poses with
`Math.floor(t * 6) / 6` for a stop-motion feel.

## Do
- Layered landscapes, sun/moon discs, paper tags and arrows, cut-out icons.

## Don't
- No glows, neon, thin hairlines, hard black outlines, glassy surfaces or photoreal textures.
- No external images/URLs, timers or `Math.random` (use `V.rand()`).
