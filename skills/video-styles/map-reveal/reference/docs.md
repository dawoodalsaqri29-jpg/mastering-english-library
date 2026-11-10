# Map Reveal engine — custom-mode API (`S`)

The scene is a satellite relief map in a tilted "world" that a camera pans and zooms. **World px = screen px
at zoom 1** (the region is laid out to fit the frame). Places are given as an anchor name of the region
(`"sydney"`), `[lon, lat]`, `"lon,lat"`, normalised `[x, y]` (0..1 of the region box) or `{ x, y }`.
All `at` values are seconds (use `V.at("word")`). Overlay items return `{ g, x, y, at, p, rect, ... }`;
sizes `r` are a fraction (≤ 1.5) of the region's smaller side, or px when larger.

## Skeleton

```js
const m = S.map(root, { region: "australia" });              // terrain, clouds, tilt, camera
const t1 = V.at("Pilbara"), t2 = V.at("billion", t1);
S.kicker("FACT #1", { at: 0.2 });
S.zone("pilbara", { at: t1 - 0.6, r: 0.1, color: "red" });
S.ring("pilbara", { at: t1 - 0.3, r: 0.06 });
S.arrow("auto", "pilbara", { at: t1 - 0.5 });
S.label("pilbara", "The Pilbara", { at: t1, box: true, sub: "WESTERN AUSTRALIA" });
S.headline("HIDDEN FOR *3 BILLION* YEARS", { at: t2 - 0.1, pos: V.isPortrait ? "bottom" : "top" });
S.camera.push(1.06, 0, t1);
S.camera.fly("pilbara", 1.8, t1 - 0.6, 1.8);
```

## World & camera

| Call | Does |
|---|---|
| `S.map(root, { region, fit, tilt, biome, features, clouds, vignette, drift, anchorY, resolution, camera })` | Builds the world. `region`: see `S.regionIds` (`world, australia, usa, europe, africa, south-america, india, china, japan, uk, egypt-nile, middle-east, antarctica, mediterranean, island, archipelago, continent, peninsula`). `biome`: `arid | temperate | tropical | desert | mixed | polar` override. `features`: extra terrain hints `[{ t: "mtn", pts:[[lon,lat]…], r, h }, { t: "desert"|"forest"|"ice"|"plateau"|"lake", c:[lon,lat], r:[rx,ry] }, { t: "river"|"valley", pts }]`. Returns `m` with `m.R` (region data), `m.box` (region box px), `m.land` (land rect), `m.T.elev(x,y)`, `m.T.land(x,y)`. Call first. |
| `S.pt(place)` | → `{ x, y, nx, ny }` world px of a place. `S.rad(r)` → px. `S.region(id)` → region data (`anchors`, `kmW`, `name`). |
| `S.camera.fly(place, zoom, at, dur, { ease })` | Glide to a place; `zoom` multiplies the whole-map zoom (1 = whole region, 2–4 = close). |
| `S.camera.push(mul, at, dur)` | Slow push-in from the camera's state at `at` (keeps the centre). Use on every scene. |
| `S.camera.focus(rectOrItem, at, dur, { fill, zoom })` | Frame a rect / item (`item.rect`). |
| `S.camera.wide(at, dur, { fill })` | Back to the whole region. `S.camera.to(x, y, zoom, at, dur)` free move. |
| `S.camera.track(t => ({ x, y, zoom }), at, blend)` | Follow something moving (e.g. `route.head(t)`). |
| `S.camera.shake(at, amp, dur)`, `S.camera.drift(0..2)`, `S.camera.state(t)` | Impact shake; idle drift amount; camera state at t. |

## Overlays on the map (world coordinates, counter-scaled so they stay readable when zoomed)

| Call | Does |
|---|---|
| `S.arrow(from, to, { at, dur, color, width, bend, end })` | Bold curved red arrow drawing itself from `from` (a place, or `"auto" \| "left" \| "right" \| "top" \| "bottom"`) to `to`. `.end_` = time it lands. |
| `S.ring(place, { at, r, color, rings, end })` | Pulsing target rings with ripples and a rotating crosshair. |
| `S.zone(place, { at, r, rx, ry, color, lava, pulse, end })` / `S.zone(null, { pts: [places…], … })` | Glowing highlight ellipse or polygon; `lava: true` for a hot orange-yellow core. `.rect` for the camera. |
| `S.pin(place, { at, color, size, label, labelPos, end })` | Map pin dropping in (bounce). |
| `S.label(place, text, { at, size, color, pos: above\|below\|left\|right\|center, dx, dy, box, bar, sub, maxWidth, end })` | Thick outlined caps label; `box: true` puts it on a dark card with a coloured bar. |
| `S.marker(place, n, { at, color, label, sub, pos, end })` | Numbered disc (countdowns) with pulsing halo + boxed label. |
| `S.route(places, { at, dur, style: dotted\|dashed\|solid, head: dot\|plane\|ship\|car\|none, color, width, stops, hideHead, end })` | Route drawing itself through places. Returns `.head(t)` → `{x,y,ang}`, `.times[i]` (arrival at each stop), `.end_`. |
| `S.badge(place, { at, value, prefix, suffix, decimals, caption, color, pos, countDur, end })` | Stat badge pinned to a place with a dashed stem; numbers count up. |
| `S.silhouette(regionId, place, { at, color, label, rot, scale, enter, end })` | Another region's outline at true relative size (uses `kmW`). `.w .h .rect`. |
| `S.grid({ step })` | Faint blueprint grid under the overlays. |

Colours: `red | yellow | cyan | green | orange | white | blue | purple | pink` or any hex.

## HUD (screen space, not affected by the camera)

| Call | Does |
|---|---|
| `S.headline(text, { at, pos: top\|bottom\|center, color: white\|yellow, em, size, maxLines, sync, stagger, end })` | Giant outlined headline; words pop in one by one (`sync: true` lands each word on its narration time). `*stars*` colour words yellow. Returns `.land` (time the last word lands). |
| `S.kicker(text, { at, pos: tl\|tr, color, end })` | Small skewed red tag. |
| `S.banner(text, { at, color, sub, end })` | Bottom red strip, white caps. |
| `S.stat({ at, value, prefix, suffix, decimals, caption, color, pos: tl\|tr\|bl\|br\|center, countDur, end })` | Big corner stat card that counts up. |
| `S.legend(items, { at, title, pos, end })` | Legend `[{ label, color }]`. `S.versus({ at, text })` big VS. |
| `S.caption(text, { at, end })` | Outlined caption at the bottom (subtitles). |
| `S.crossSection({ at, kind, label, depth, title, pos: right\|bottom, depthFrac, end })` | Underground panel: strata, scan line, drill, glowing deposit (`gold, oil, water, lava, crystal, gas, diamond, fossil, cave, ore, iron, lithium, copper, uranium, coal, salt, aquifer, magma`). Returns `.reveal` (time the deposit lights up). |
| `S.globe(root, { target, at, spinDur, holdDur, zoomDur, color })` | Spinning globe layer on top that dives into `target` (world anchor or `[lon,lat]`) and dissolves. Build the map first. Returns `.arrive .zoom .done`. |
| `S.fadeIn(at, dur)`, `S.fadeOut(at, dur)`, `S.flash(at, dur)` | Black fades, white impact flash. |

`S.stage(root)` (shared helpers) also works — it paints a dim world map background — but prefer `S.map`.
Templates from code: e.g. `S.render("map-focus", root, { region: "usa", place: "texas", headline: "BIGGER THAN *FRANCE*", keyword: "Texas" })`.
`S.guessGeo(text)` → `{ region, place }` guessed from narration (what the fallback uses).
