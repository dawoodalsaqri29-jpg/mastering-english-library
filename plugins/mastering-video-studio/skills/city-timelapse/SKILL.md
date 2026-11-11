---
name: city-timelapse
description: Make YouTube video scenes in the "City Timelapse" style. A cinematic 3D aerial timelapse of a city growing over centuries — wild coast, fort, village, stone town, grid, factories and rail, early skyscrapers, modern glass skyline at golden hour — with a huge ticking year counter, era lower-thirds, district labels and population. For history-of-a-city, urba Use when the user asks for a video, scene or channel in the City Timelapse style.
---

> **Mastering English Library channel rules** (apply on top of this style):
> - Read the `video-studio` skill first. It holds the voice, hook, 4K and fact-check rules, plus `make_video.py`, which renders any scene list in this style.
> - Narration: Kokoro `bf_isabella`, speed 0.92. Open with a strong hook and never spoil the ending. Export in 4K.
> - Shorts are about words. Long videos can cover any topic around English: history, wars, word origins, stories.

# City Timelapse: a video style for Claude

A cinematic 3D aerial timelapse of a city growing over centuries — wild coast, fort, village, stone town, grid, factories and rail, early skyscrapers, modern glass skyline at golden hour — with a huge ticking year counter, era lower-thirds, district labels and population. For history-of-a-city, urban growth, infrastructure and 'then vs now' explainers.

**Best for:** How places grew, urban history, "the evolution of" videos

## What is in this folder

| Folder | What it is |
|---|---|
| `engine/` | The style itself: `engine.js` and `engine.css`. Every template and drawing function lives here. |
| `core/` | The render core. `build-scene.mjs` turns one scene into a web page, `render-scene.mjs` films it frame by frame to MP4, `assemble.sh` joins scenes. |
| `reference/` | `templates.json` (all 11 templates with their schemas and example props), `docs.md` (the drawing kit), `meta.json` (palette and fonts). |
| `examples/` | Example props for every template, and finished custom scenes. |

## First run (check the setup works)

You need Node.js 22 or newer, FFmpeg, and Playwright's Chromium (`npm i playwright && npx playwright install chromium`). From this folder:

```bash
node core/build-scene.mjs --style engine --template timelapse --props examples/template-timelapse.props.json --duration 5 --narration "It began as a fort at the tip of an island. Two centuries later the city drew a grid of straight streets across the land. Then came steam, factories and the first great bridge, and by the nineteen-thirties the race to the sky had begun." --out test.html
node core/render-scene.mjs --html test.html --duration 5 --out test.mp4
```

`test.mp4` should look like `preview.jpg`.

## How to make a scene

1. Read the scene's narration and pick a template from `reference/templates.json` using the rules below. Use a custom scene only when no template fits.
2. Template scene: write the props as JSON that matches that template's schema, then build with `--template <id> --props <file>`.
3. Custom scene: write the body of `function scene(V, S, root)` using the drawing kit in `reference/docs.md` and the runtime API (window.V), then build with `--code <file>`.
4. Pass the voice-over's word timings with `--words words.json` (`[{"word","start","end"}]` in seconds) so visuals land on the spoken word, and the voice file to `render-scene.mjs --audio`.
5. Render every scene with the same settings, then join them with `core/assemble.sh`.

Rules for every scene: everything must be a pure function of time (no timers, no real clock, no unseeded randomness), no network and no external files, layout from `V.width` and `V.height` so 16:9, 9:16 and 1:1 all work, and text inside the frame.

## A scene order that works in this style

`title-card` > `timelapse` > `era-snapshot` > `landmark-rise` > `population-chart` > `disaster-rebuild` > `before-after` > `skyline-compare`

**The mistake to avoid:** Label a city as fictional if you use the generic 3D model. Do not imply it is an accurate model of a real one.

---

# Art direction

Every scene is a **cinematic 3D aerial view of one city growing on its terrain**: wild coast and
hills → a fort and huts → timber village → stone town with a spire → the grid of row houses →
factories, smokestacks, rail and bridges → early skyscrapers → a glass skyline at golden hour.
Buildings extrude out of the ground, roads draw along the grid, trees vanish as blocks fill, water
shimmers, the sky and light change with the era, the camera slowly orbits. Signature overlays: the
**huge ticking year counter**, the **era lower-third**, district labels and a small population counter.
Think "evolution of a city 1609 → NOW" — *never* a slide with bullets, never a static frame.

## One city, every scene (continuity — hard rule)
- Decide the city ONCE: `city` (display name), `preset`, `style`, `seed`, `keyDates`, `districts`,
  `population`. Repeat **exactly the same values in every scene** — same seed + preset + style =
  identical streets, landmarks and district names across a 30-minute video. Changing any of them
  silently produces a different city.
- The city is procedural. It is *inspired by* a real city's geography, never its real map. Say
  "an island between two rivers", not "this is the exact street of…". Use real history (dates,
  population, events, landmark names are fine) with a generic/fictional landmark *look*.
- Map a real city to the closest preset + style, and give its real era years as `keyDates`:

| Real city | preset | style | keyDates (settlement, village, town, grid, industry, skyscraper, modern) |
|---|---|---|---|
| New York | island | american | 1624, 1660, 1760, 1811, 1850, 1900, 1960 |
| Chicago | lake | american | 1803, 1833, 1850, 1860, 1871, 1885, 1955 |
| San Francisco | bay | american | 1776, 1835, 1849, 1855, 1870, 1900, 1960 |
| Boston | peninsula | american | 1630, 1650, 1700, 1800, 1840, 1915, 1960 |
| London | river | european | 50, 900, 1200, 1660, 1830, 1930, 1980 |
| Paris | river | european | 250, 900, 1200, 1600, 1850, 1900, 1970 |
| Amsterdam / New Orleans | delta | european / american | pick from history |
| Istanbul / Lisbon | peninsula | european | pick from history |
| Tokyo / Hong Kong | bay | asian | 1457, 1600, 1700, 1870, 1900, 1960, 1990 |
| Shanghai | delta | asian | 1000, 1291, 1550, 1843, 1890, 1930, 1992 |
| Dubai / Las Vegas / Phoenix | desert | desert | 1833, 1900, 1930, 1950, 1970, 1990, 2005 |
| Mumbai / Singapore | peninsula | asian | pick from history |

If `preset`/`style` are omitted the engine guesses them from `city`, but set them explicitly.

## Which template
| Need | Template |
|---|---|
| Opener / chapter card | `title-card` (city name + "1609 → NOW" over the golden skyline) |
| **Most scenes**: growth over a span of years | `timelapse` — give 1–5 `beats` with `keyword`s; one scene = one slice of time (e.g. 1811→1860), the next scene continues from where this ended |
| Dwell on one year, point things out | `era-snapshot` with 1–4 `callouts` |
| "And then they built…" | `landmark-rise` (tower, spire, dome, arch, obelisk, stadium, ferris, pagoda, tvtower…) |
| Then vs now | `before-after` (wipe on a keyword) |
| One quarter booms | `district-growth` |
| Numbers over time | `population-chart` (any series: population, GDP, height…) |
| Fire / flood / quake / storm chapter | `disaster-rebuild` (non-graphic: buildings darken and sink, then rise taller) |
| The street plan / grid | `map-overlay` (top-down plan — use once or twice as a change of rhythm) |
| Recap / chapter overview | `timeline-strip` (2–7 eras with thumbnails) |
| Two cities | `skyline-compare` |

Pacing: never more than two `timelapse` scenes in a row with the same camera — alternate `camera`
(`orbit`, `dolly`, `flyover`, `reverse`) and drop in an `era-snapshot`, `landmark-rise` or
`before-after` every 3–4 scenes. Put the big `title-card` first.

## Writing props
- Years: a scene's `yearFrom` should equal the previous scene's `yearTo`. Keep slices short enough
  that something visibly changes (≥ 20 years in early eras, ≥ 10 in modern ones). The counter ticks
  to each beat's year exactly on its `keyword` — always use a word actually spoken in that scene,
  in narration order.
- Beat labels are lower-third titles: ≤ 32 chars, concrete ("The grid is laid out", "Steam and
  steel"), captions ≤ 70 chars. 1–5 beats per scene.
- `light`: leave `auto` (dawn mist → day → industrial haze → golden hour). Use `night` only for a
  "the city never sleeps" moment, `golden` for openers and closers.
- District names: ≤ 18 chars, 2–3 words, in order core, waterfront, then outer quarters (index 4 is
  the industrial quarter). Reuse the same list in every scene.
- Population: give today's real population once; the counter scales the whole curve.
- Titles ≤ 50 chars, `*word*` for the accent colour; most scenes need no title — the year counter
  and lower-third carry the text.

## Custom code (only if no template fits)
```js
const W = S.city.world(root, { city: "New Harbor", preset: "island", style: "american", seed: 7, yearFrom: 1609, yearTo: 2024, viewport: S.city.layout() });
W.yearSchedule([[0.3, 1609], [V.at("grid"), 1811], [V.duration - 0.8, 2024]]);
W.camera.orbit(14, 0.88);
S.city.yearCounter(root, W, { population: true });
S.city.lowerThird(root, [{ at: V.at("grid"), title: "The grid", sub: "Straight streets across the island" }]);
```
Everything must be a function of time: `W.yearSchedule`, `W.camera.to(...)`, `W.label(...)`,
`V.timeline()`. No timers, no Math.random (use `S.city.hash(n)`). Keep DOM text inside the
safe margins; the canvas handles the world.

