---
name: map-reveal-video-style
description: Make YouTube video scenes in the "Map Reveal" style. The geography-discovery look: a hyper-saturated satellite-style relief map of a country or continent seen from above at a slight tilt (ochre deserts, green coasts, hillshaded ridges, glowing rivers, deep-blue ocean) with bold red curved arrows sweeping in, pulsing target rings, glowing highlight zon Use when the user asks for a video, scene or channel in the Map Reveal style.
---

# Map Reveal: a video style for Claude

The geography-discovery look: a hyper-saturated satellite-style relief map of a country or continent seen from above at a slight tilt (ochre deserts, green coasts, hillshaded ridges, glowing rivers, deep-blue ocean) with bold red curved arrows sweeping in, pulsing target rings, glowing highlight zones, pins, dotted routes, numbered markers, stat badges and huge thumbnail-style headlines with heavy black outlines. Slow push-ins and fly-tos between regions, clouds drifting over, a globe spin to the country. For geography, discovery, megaproject and 'insane facts' storytelling.

**Best for:** Geography, hidden discoveries, borders, megaprojects

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
node core/build-scene.mjs --style engine --template map-focus --props examples/template-map-focus.props.json --duration 5 --narration "In the far north-west of Australia lies a region called the Pilbara, where some of the most ancient rocks on the planet have been hiding for over three billion years." --out test.html
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

`headline-title` > `globe-spin` > `map-focus` > `hidden-discovery` > `stat-on-map` > `compare-size` > `route-journey` > `fact-countdown`

**The mistake to avoid:** Check every border and place name. Map errors are the first thing viewers correct in the comments.

---

# Art direction

You are directing a geography-discovery video ("you won't believe what Australia just found", "15 insane
geography facts"). Every scene is **a hyper-saturated satellite-style relief map** of a country or continent
seen from above at a slight tilt: ochre deserts, green coasts, hillshaded ridges, glowing blue rivers, deep
ocean with a depth gradient, a drop shadow lifting the land off the sea, clouds drifting over. On top of it
the signature overlays: **bold red curved arrows** sweeping in, **pulsing red target rings**, **glowing
highlight zones**, pins, numbered markers, dotted routes, stat badges and **huge thumbnail-style headlines**
(white or yellow condensed caps with a heavy black stroke and drop shadow). The camera is always moving:
slow push-ins, fly-tos between places, a globe spin for intros.

## Look
- Palette: ocean `#0A1E3F`, white text, red accent `#FF2A1A`, yellow `#FFE600`, cyan `#2BD4FF` for water /
  cool zones, orange for lava / heat. Never pastel, never flat vector — everything is saturated and glowing.
- Type: condensed black caps (Impact-like) with black stroke for headlines, labels, badges; Inter for captions.
- Regions available: `world, australia, usa, europe, africa, south-america, india, china, japan, uk,
  egypt-nile, middle-east, antarctica, mediterranean` plus generic `island, archipelago, continent, peninsula`
  for places that are not real geography (anchors: center, north, south, east, west, capital, coast, bay,
  peak, harbor, interior…). Pick the smallest region that contains the story: a scene about Sydney uses
  `australia`, not `world`.
- Places are **anchor names** (lower-case, dashes): e.g. australia → sydney, melbourne, perth, darwin, uluru,
  pilbara, outback, kimberley, great-barrier-reef, tasmania, lake-eyre; usa → new-york, los-angeles, texas,
  florida, death-valley, yellowstone, great-lakes, grand-canyon, rockies, mississippi; europe → london, paris,
  berlin, rome, alps, scandinavia, iberia, balkans, black-sea; africa → cairo, sahara, congo, nile, kalahari,
  lake-victoria, kilimanjaro, cape-town, lagos, nairobi; india → delhi, mumbai, himalayas, thar, deccan, kerala,
  ganges; china → beijing, shanghai, tibet, gobi, yangtze, three-gorges, xinjiang, hong-kong; japan → tokyo,
  osaka, mount-fuji, hokkaido, kyushu; uk → london, scotland, wales, highlands, cornwall, dublin; egypt-nile →
  cairo, giza, luxor, aswan, nile-delta, suez, sinai, qattara, red-sea, western-desert; middle-east → dubai,
  riyadh, mecca, tehran, baghdad, neom, persian-gulf, empty-quarter, hormuz, suez; antarctica → south-pole,
  ross-ice-shelf, antarctic-peninsula, vostok, thwaites, mcmurdo; mediterranean → rome, athens, istanbul,
  cairo, sicily, crete, gibraltar, suez. Unknown names fall back to a prefix match, then the map centre, so
  prefer listed anchors; for anything else pass `"lon,lat"` (e.g. `"131,-25"`) or `"x,y"` in 0..1 on generic
  landmasses.

## Choosing a template
| Narration does… | Template |
|---|---|
| Points at a region/place, "right here", "in this corner" (default, most scenes) | `map-focus` |
| Opens the video or a chapter with a big claim | `headline-title` |
| "Somewhere on Earth…", intro that arrives at a country | `globe-spin` |
| Scientists found / buried beneath / deposit / cave / aquifer | `hidden-discovery` |
| A list of facts or places, numbered | `fact-countdown` |
| A journey, river, trade route, migration, pipeline, road trip | `route-journey` |
| "X is bigger than you think", fits N times | `compare-size` |
| One big figure tied to a place (tons, dollars, km, people) | `stat-on-map` |
| Two halves contrasted (coast vs interior, north vs south, wet vs dry) | `region-split` |
| A proposed canal, railway, inland sea, new city, "the plan to…" | `plan-blueprint` |
| Several hot spots / danger zones / where it happens most | `heat-zones` |

Rhythm: `map-focus` carries the video; alternate it with a "device" scene (`stat-on-map`, `compare-size`,
`route-journey`, `hidden-discovery`) every 2–3 scenes. Vary `place`, `color` and `zoom` between consecutive
`map-focus` scenes. Use `headline-title` / `globe-spin` only at openings.

## Writing props
- `keyword` is one word copied exactly from that scene's narration; the headline / badge / zoom lands on it.
  Per-item keywords (`facts[].keyword`, `stops[].keyword`, `zones[].keyword`) should also be spoken words,
  in narration order.
- Headlines: 2–7 words, caps, thumbnail energy ("HIDDEN FOR *3 BILLION* YEARS", "A *NEW SEA* IN THE
  SAHARA"). Wrap the one or two punch words in `*stars*` to turn them yellow. Labels 1–4 words, kickers ≤ 4
  words, stat captions ≤ 4 words, banner subs ≤ 7 words.
- Numbers go in `stat` / `value` as plain numbers with a `suffix` (" BILLION TONS", " KM", "%") and `prefix`
  ("$"); they count up on screen.
- Colours: red for the main point, yellow for the second, cyan for water / cold, orange + `lava` for heat.

## Continuity (long videos)
- Keep the **same region** for a run of scenes about the same place; only change region when the story
  moves. Name places consistently (`pilbara` in every scene, not `pilbara` then "the Pilbara" then "131,-22").
- Keep one accent colour per topic across scenes (e.g. all iron-ore scenes red, all water scenes cyan).
- One kicker series per video ("FACT #1" … "FACT #15" or the chapter name), always top-left.

## Custom mode
`const m = S.map(root, { region: "australia" })`, then `S.zone`, `S.ring`, `S.arrow("auto", place)`,
`S.label`, `S.marker`, `S.pin`, `S.route`, `S.badge`, `S.silhouette`, HUD `S.headline`, `S.kicker`,
`S.banner`, `S.stat`, `S.legend`, `S.crossSection`, and `S.camera.fly / push / focus / wide / track`.
Build the map first, then `S.globe(root, …)` on top for an intro. Keep the camera moving every scene.

## Don't
- No flat political maps, no pastel colours, no real channel names or logos, no photos, no external fonts.
- No timers, `Math.random` or `Date`; place things on narration words.
- Don't stack more than one headline on screen; don't put the headline over the ringed place.

