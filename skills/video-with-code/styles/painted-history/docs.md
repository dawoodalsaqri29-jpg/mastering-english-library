# Painted History engine — custom-mode API (`S`)

The scene is a painting made of parallax SVG layers (`sky`, `far`, `mid`, `ground`, `near`) seen by a
slow camera. Coordinates are **world px** (by default the world is `V.width × V.height`; `ground` moves
1:1 with the camera, far layers less, `near` more). The ground line for figures is around
`world.horizon + V.height * 0.22`. All `at` values are seconds (use `V.at("word")`).

## Skeleton

```js
const w = S.scene(root, { sky: "golden", terrain: "fields" });   // paints sky, hills, forest, field, foreground
S.haze({ n: 5, opacity: 0.25 });
const W = V.width, H = V.height, gy = w.horizon + H * 0.23, size = Math.min(W, H) * 0.08;
const brit = S.army({ faction: "redcoat", x: W * 0.27, y: gy, count: 60, ranks: 3, size, facing: 1 });
const fr = S.army({ faction: "bluecoat", x: W * 0.73, y: gy, count: 60, ranks: 3, size, facing: -1 });
const gun = S.cannon({ x: W * 0.08, y: gy - size * 0.9, size: size * 0.8, facing: 1, faction: "redcoat" });
const t = V.at("fire");
fr.march(0.3, t - 1, -size, 0);
brit.volley(t); gun.fire(t + 0.4);
S.camera.kenBurns(0, t, { from: { fx: 0.5, fy: 0.5, zoom: 1.02 }, to: { fx: 0.45, fy: 0.56, zoom: 1.2 } });
S.camera.to(brit.x + brit.w * 0.3, gy - size * 0.6, 1.5, t - 0.3, 0.8);
S.banner("Hold the line", { at: t + 0.3, end: t + 4 });
S.lowerThird("Waterloo", { sub: "18 June 1815", at: 0.6 });
```

## World & camera

| Call | Does |
|---|---|
| `S.scene(root, { sky, terrain, width, height, bleed, horizon, camera:{x,y,zoom}, drift, bare, road, water, fort, town, camp, mill, treeline, frameTree, letterbox })` | Creates the painting and paints a landscape (unless `bare`). Skies: `golden dawn dusk storm noon night winter`. Terrains: `fields hills forest river coast mountains desert snow plain`. Returns the world `{ layers, horizon, ww, wh, pal, sky }`. Call first. |
| `S.layer("ground")` | `{ g, svg, defs, k }` of a layer — draw your own SVG into `.g` with `S.draw` / `S.svg`. |
| `S.landscape(opts)` | Repaint the default landscape (same opts as above). `S.interior({ kind: "tent" \| "hall" })` replaces it with a war-room. |
| `S.camera.kenBurns(at, dur, { from:{fx,fy,zoom}, to:{fx,fy,zoom}, cut })` | Drift across the painting (fractions of the world; zoom 1 = fit). |
| `S.camera.to(x, y, zoom, at, dur, { ease })` / `.focus(rectOrItem, at, dur, { fill, zoom, anchor })` / `.wide(at, dur)` / `.track(t => ({x,y,zoom}), at, blend)` / `.shake(at, amp, dur)` / `.drift(0..2)` | Camera moves in world px. Everything with a `.rect` (armies, cannons, maps, portraits) can be focused. |
| `S.onFrame(fn)` | Per-frame hook `fn(t)` inside the painting (pure function of t). |
| `S.fadeIn(at, dur, { paper })`, `S.fadeOut(at, dur)` | From/to black (or parchment). |

## Painting primitives (world px, into a layer group)

`S.draw = { path, rect, circle, ellipse, line, group }` (e.g. `S.draw.rect(g, x, y, w, h, fill)`),
`S.gradients.linear(defs, stops)`, `S.dabs(g, x, y, w, h, colours, n, size, rand)` brush dabs,
`S.ridge(g, x0, x1, y, amp, bottom, fill, rand)`, `S.tree(g, x, y, h, colour, rand, kind)`,
`S.forest(g, x0, x1, y, h, colour, rand, n)`, `S.fortress(g, x, y, w, h, { towers, roofs, gate, stone }, rand)`,
`S.town(g, x, y, w, h, opts, rand)`, `S.camp(g, x, y, w, rows, size, colour, rand)`, `S.windmill(g, x, y, h, rand)`.
Get a seeded generator with `V.makeRand(seed)`. Colour helpers: `S.mix(a, b, p)`, `S.shade(hex, -0.3..0.3)`, `S.rgba`.

## Figures

| Call | Returns / notes |
|---|---|
| `S.army({ faction, x, y, count, ranks, size, facing, pose, cavalry, flags, officer, drummer, spacing, layer, seed })` | Formation of `<use>` soldiers (≤ 220). `x` centre, `y` front-rank ground line, `size` soldier height. Poses: `stand march aim charge`. Methods: `.march(at, dur, dx, dy)`, `.charge(at, dur, dist)`, `.volley(at)`, `.setPose(pose, from, to)`, `.at(t)` → current offset. Fields: `x y w h rect facing size flags`. |
| `S.cannon({ x, y, size, facing, faction, crew })` | Field gun; `.fire(at)` recoil + flash + smoke + thump. |
| `S.flag({ x, y, h, w, faction \| flag:{field,pattern,c1,c2}, facing, speed, amp, parent })` | Waving colour on a pole. |
| `S.general({ x, y, size, faction, facing, seed, hat })` | Half-length commander; `.speak(from, to)` (head and hand move on spoken words), `.point(from, to)`, `.nod(at)`. |
| `S.table({ x, y, w, candles, faction })` | Candle-lit map table (`.top`, `.rect`, flickering candles). |
| `S.portrait({ cx, cy, w, faction, seed, hat })` | Oval gold-framed painted bust (`.rect`, `.cx`, `.cy`, `.h`). |
| `S.factions`, `S.factionInfo[id]`, `S.faction(id)`, `S.guessFaction(text)`, `S.enemyOf(id)` | Preset lookups. |
| `S.soldierMarkup(F, pose, phase)`, `S.horseMarkup(F, colour, phase, rider, pose)`, `S.hatMarkup`, `S.faceMarkup` | Raw markup for your own figures. |

## Atmosphere

`S.smoke({ layer, x, y, n, size, life, at, burst, dir:[dx,dy], wind, color, opacity })` (continuous or one-shot),
`S.haze({ n, opacity, y, spread })` drifting bands, `S.fire({ x, y, size, at, glow })`,
`S.weather("snow" | "rain" | "ash")`.

## Battle map

```js
const map = S.battleMap({ x, y, w, h, title, terrain: { river, forest, hills, coast, towns:[{name,fx,fy}] } });
const u = map.unit({ faction: "roman", fx: 0.5, fy: 0.75, kind: "infantry", label: "Legions", at: 0.3 });
map.arrow({ faction: "roman", from: [0.5, 0.72], via: [0.2, 0.5], to: [0.45, 0.25], at: V.at("flank"), dur: 1.4, unit: u, dashed: false });
map.clash(0.45, 0.25, V.at("flank") + 1.6, "roman");
S.manoeuvre(map, "pincer", { attacker: "roman", defender: "hoplite", at: V.at("closed") });  // frontal flank-left flank-right pincer feigned-retreat envelopment breakthrough defend
```

## Screen overlays (not affected by the camera)

| Call | Does |
|---|---|
| `S.banner(text, { at, end, pos: top\|bottom\|center, sub, color: dark\|red\|blue, slam })` | Cream parchment banner, big dark serif caps. |
| `S.versus({ count, label, faction }, { count, label, faction }, { at, end, pos, countDur })` | "50,000 VS 250,000" counting banners. |
| `S.lowerThird(place, { sub, at, end, align })` | Parchment place/date strip with a gold rule. |
| `S.quote(text, { author, at, end, authorAt })` | Italic quotation; words light up as spoken. |
| `S.caption(text, { at, end, size })` | Italic caption at the bottom. |
| `S.titleCard(title, { kicker, sub, date, at, titleAt })` | Chapter title with ornaments. |

`S.stage(root)` also works (painting + a padded flex column on top for the shared helpers), but prefer
figures in the painting. Templates from code: `S.render("battle-scene", root, { left: { faction: "redcoat" }, right: { faction: "bluecoat" }, action: "volley", keyword: "fire" })`.
