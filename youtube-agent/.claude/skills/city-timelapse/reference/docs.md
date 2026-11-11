# City Timelapse — custom API (`S.city`)

A world is one `<canvas>` redrawn every frame from scratch (pure function of `t`): a real
perspective camera (oblique bird's-eye) over a procedural terrain + city model, depth-sorted
terrain, extruded buildings, sun shadows, depth fog, shimmering water and era-driven light.
World units are grid cells: `x` → east, `y` → south, `z` → up; a city is ~38 × 27 cells.
The base `S.stage` / `S.title` helpers still exist but the engine's own overlays below match the look.

```js
// Body of scene(V, S, root)
const W = S.city.world(root, { city: "New Harbor", preset: "island", style: "american", seed: 7, yearFrom: 1609, yearTo: 2024, viewport: S.city.layout() });
W.yearSchedule([[0.3, 1609], [V.at("grid") - 0.2, 1811], [V.at("towers"), 1931], [V.duration - 0.8, 2024]]);
W.camera.orbit(14, 0.88);                                  // slow 14° turn + push-in over the scene
S.city.vignette(root);
S.city.tag(root, "New Harbor", "island between two rivers");
S.city.yearCounter(root, W, { population: true, now: 2024 });
S.city.lowerThird(root, [{ at: V.at("grid") - 0.2, title: "The grid", sub: "Straight avenues across the island" }]);
W.label(W.M.origin[0], W.M.origin[1], 0.3, "The old fort", { at: 1.0, until: V.at("grid"), color: "#F2A33A" });
```

## Model
`S.city.model({ preset, style, seed, cityName, districts, popNow })` → cached city model `M`
(same options → same object). `preset`: `island | bay | desert | delta | lake | peninsula | river`;
`style`: `european | american | desert | asian`. `S.city.guess("Chicago")` → `{preset, style}`.
`M.lots` (each `{x, y, fp, z0, born, stages:[{p, kind, h}], district}`), `M.districts`
(`{name, cx, cy, z, born, key}`), `M.landmarks` (`{kind, name, x, y, z0, h, p}`), `M.bridges`,
`M.rail`, `M.origin`, `M.pop(p)` population at progress p, `M.bbox`.
Growth is driven by a progress clock `p ∈ [0,1]` with eras at `S.city.eras` (wild, settlement,
village, town, grid, industry, skyscraper, modern); `S.city.makeClock(yearFrom, yearTo, keyDates)`
maps years ↔ p (`clock.p(year)`, `clock.year(p)`, `clock.eraYear(i)`).

## World
`S.city.world(root, opts)` → `W`. opts: the model options above (or `model`), `yearFrom`, `yearTo`,
`keyDates`, `year` (fixed), `viewport` `{x,y,w,h}` fractions (`S.city.layout()` leaves room for the
overlays, `S.city.layout("full")`), `light` (`auto | dawn | day | haze | golden | night`), `pitch`
(deg, default 33), `yaw` (added to the preset's best angle), `fov`, `plan` (top-down ink plan mode),
`districtLabels` (default true), `life` (boats/cars/trains, default true), `fill`, `crop`, `fitTop`.
- `W.setYear(yearOrFn)` · `W.yearSchedule([[t, year], …])` piecewise-linear year over time.
- `W.state` = `{t, year, p}` for the current frame; `W.clock`; `W.M` the model.
- `W.label(x, y, z, text, {at, until, color, size, lift, big, sub, dot, pFrom})` floating callout with
  leader line (canvas, auto-avoids overlaps).
- `W.labelAlpha = t => 0..1` dims the automatic district labels; `W.showDistricts = false` hides them.
- `W.focus = { key: district.key, kFn: t => 0..1, glowFn, color }` highlights one district and dims the rest.
- `W.disaster = { kind: "fire|flood|quake|storm", cx, cy, r, kFn, rebFn, glowFn, look(lot) }` (see the
  `disaster-rebuild` template for the shape).
- `W.extras.push({ depth: (W, t) => d, draw: (W, ctx, t, state) => … })` custom drawables in the
  depth-sorted pass; inside use `S.city.proj(W.P, x, y, z)` → `[sx, sy, depth]`, `W.box(fp, z0, h,
  [r,g,b], [r,g,b], {cx, cy, windows, kind})`, `W.face(pts3, rgb)`, `W.pyramid(fp, z0, h, rgb)`,
  `W.ball(x, y, z, r, rgb)`, `W.line3(a, b, css, width)`, `S.city.square(cx, cy, w, d)` footprint.

## Camera
`W.camera.set({yaw, pitch, dist, fov, tx, ty, tz})` base values (`dist` multiplies the auto-fitted
distance, `tx/ty/tz` the look-at point; the city is framed automatically) ·
`W.camera.to({...}, at, dur, ease)` keyframes (same property chains smoothly) ·
`W.camera.orbit(deg, dolly, at, dur)` slow turn + dolly · `W.camera.focus(x, y, z, dist, at, dur)`.
`S.city.applyCamera(W, "orbit|dolly|flyover|reverse|static")`.

## Landmarks & districts
`S.city.addLandmark(W.M, kind, name, {x, y, minD, maxD, wall})` places one on a free lot
(kinds: `tower supertall earlytower spire tvtower dome arch obelisk stadium ferris pagoda cathedral church
temple cityhall townhall station depot watertower fort citadel mission cranes`); set
`L.qFn = (t, p) => 0..1` to drive its build-up by time. `S.city.district(W.M, "Harbor")`,
`S.city.landmark(W.M, "fort")` look things up by (fuzzy) name.

## DOM overlays
- `S.city.yearCounter(root, W, {now, population, small, pos: "left", label, at})` — big ticking year
  (shows `NOW` once the year reaches `now`), optional population line.
- `S.city.lowerThird(root, [{at, title, sub, until}], {right})` — era lower-third; the latest started
  item is shown and slides in.
- `S.city.head(root, {kicker, title, sub, at, until, pos: "top|bottom|center"})` headline.
- `S.city.caption(root, text, at, tl, {until})` bottom caption · `S.city.tag(root, name, sub, at)`
  corner city chip · `S.city.vignette(root)` · `S.city.fmtPop(n)` → `8.8M` · `S.city.fmtYear(y, {now})`.
- `S.city.autoEraItems(W)` → lower-third items for every era the schedule passes.
- `S.city.keywords(n, narration)` → `[{text, at}]` distinctive spoken words (used by the fallback).

## Light
`S.city.lightAt(p, mode)` → `{top, hor, sun, sunCol, amb, dif, fog, fogK, water, lit, stars, haze}`;
`auto` sweeps dawn mist → clear day → industrial haze → golden hour as `p` grows.

## Templates
`S.render("timelapse", root, props)` · `S.render("era-snapshot", …)` · `S.render("landmark-rise", …)` ·
`S.render("before-after", …)` · `S.render("district-growth", …)` · `S.render("population-chart", …)` ·
`S.render("disaster-rebuild", …)` · `S.render("map-overlay", …)` · `S.render("title-card", …)` ·
`S.render("timeline-strip", …)` · `S.render("skyline-compare", …)` — see templates.json for props.

## Rules
Pure function of time: no timers, no `Math.random` (use `S.city.hash(n)` / `V.makeRand`). Keep
DOM text within 5 % margins; a seek redraws the whole world (~1000 cells + ~700 buildings) so
avoid adding thousands of extra drawables.
