# Isometric World — custom API (`S.iso`)

Each world is one `<canvas>` redrawn every frame from scratch (pure function of `t`), with depth
sorting, three-tone face shading, ground shadows and a camera that can pan, zoom and rotate.
World units are grid tiles: `x` → east, `y` → south, `z` → up. A 2×2 building fills 2×2 tiles.

```js
// Body of scene(V, S, root)
const w = S.iso.world(root, { cols: 12, rows: 10, theme: "day", viewport: S.iso.layout(true) });
S.iso.head(root, { title: "How a *city* breathes", kicker: "Chapter 3" });
const road = w.road([[0, 5], [11, 5]]);              // returns centre-line points for vehicles
w.car(road); w.car(road, { kind: "bus", phase: 0.5 });
w.walker([[0.5, 5.45], [11.5, 5.45]]);               // sidewalk
const plant = w.building("factory", 1, 1, { w: 3, d: 2, at: V.at("factories") - 0.15 });
const homes = w.building("house", 6, 1, { at: V.at("homes") - 0.15, anim: "drop" });
w.label(plant, "Power plant", { at: V.at("factories") + 0.3 });
w.flow([[2.5, 3, 0.05], [2.5, 4.5, 0.05], [7, 4.5, 0.05], [7, 3, 0.05]], { at: V.at("electricity"), color: "#FFB020" });
w.tree(10, 8, { kind: "pine" });
w.clouds(2);
S.iso.breathe(w);                                     // slow orbit + push-in
w.camera.rotate(1, V.at("meanwhile"), 1.6);           // turn 90° to the next iso angle
```

## World
`S.iso.world(root, opts)` → `w`. opts: `cols, rows` (island size, default 12×10), `theme`
(`day|dusk|night|mint`), `viewport` ({x,y,w,h} fractions of the frame, see `S.iso.layout`),
`island` (false = no ground slab, use `w.slabAdd`), `thickness`, `headroom`, `fill`, `maxFitH`,
`crop` (portrait horizontal overscan, default 1.16), `yaw`, `zoom`, `fitPoints` ([[x,y]…] to frame).
The camera auto-fits the island. Several worlds can share a root (each gets its own canvas).

- `S.iso.layout(hasHeadline, pos?)` → viewport that leaves room for `S.iso.head` (`pos: "bottom"` for a bottom title).
- `S.iso.head(root, {kicker, title, sub, at, pos})` — DOM headline (top-left in landscape, centred otherwise).
- `S.iso.caption(root, text, at, tl?, {until})` — bottom caption chip.

## Camera
`w.camera.set({yaw, zoom, x, y, z})` base values · `w.camera.to({yaw, zoom, x, y, z}, at, dur, ease)` ·
`w.camera.rotate(q, at, dur)` → yaw `45 + 90q` (the 4 iso angles; any yaw in between works) ·
`w.camera.focus(objOr[x,y,z], zoom, at, dur)` · `S.iso.breathe(w, {sway: 6, zoom: 0.05})`.
`zoom` is a multiplier of the fitted zoom. Keyframes for the same property chain smoothly.

## Ground
`w.road(points, {at, dur})` auto-joined road tiles (axis-aligned legs; dashes, curbs, crossings) →
centre-line points · `w.river(points)` water with banks + shimmer · `w.tile(x, y, type, at)` /
`w.area(x0, y0, x1, y1, type, at)` with type `road|water|field|crop|plaza|park|sand|dirt|rail` ·
`w.slabAdd({x, y, w, d, at, thick, top})` or `w.slabAdd({shape: [[x,y]…], at})` extra floating island (rises in at `at`),
`S.iso.blob(cx, cy, r, n, seed)` makes a rounded island shape · `w.groundText(x, y, text, {size, at, color})`
text painted on the ground · `w.ping(x, y, {at, color, radius, loop})` expanding highlight rings.

## Buildings (procedural kit)
`w.building(type, x, y, {w, d, floors, color, roof, accent, style, at, anim, label, smoke})` → object.
Types: `house cottage tower(skyscraper) office shop factory hospital school bank datacenter server(rack)
warehouse turbine solar tree barn silo tank crane containers dockcrane rocket cloud phone laptop
fountain lamp bench block` (`S.iso.buildingTypes()`). Notes: `tower` `{floors, style:"glass"}`,
`factory` has a smoking chimney, `rocket` `{launch: t}` lifts off, `cloud` floats (`z`, `glyph`),
`crane` swings its jib, `turbine` spins, `phone`/`laptop` are giant props with live screens.
`w.tree(x, y, {kind: round|pine|bush})` · `w.block(x, y, {w, d, h, z, color, at, anim})` plain extruded block ·
`w.blockText(text, x, y, {at, stagger, colors, depth})` standing 3D block letters (A–Z 0–9 !?.%$&+-) —
`S.iso.blockTextWidth(text)` gives its length in tiles.
`S.iso.fillLot(w, {x,y,w:2,d:2}, kind, {at})` fills a 2×2 lot with a building or a group
(`trees park cottages turbines farm barnyard tanks servers containers portyard`);
`S.iso.townLayout(cols, rows)` → `{roads, lots, strips}` and `S.iso.townLife(w, layout, {cars, walkers})`
build a whole town quickly.

## Entrances & exits
`S.iso.appear(obj, at, style, dur)` style `rise` (grows from the ground with overshoot), `drop`
(falls with a bounce + dust), `pop`, `fade`, `grow` · `S.iso.leave(obj, at, dur)` ·
`w.cutaway(obj, at, dur)` sinks everything standing in front of `obj` (for dives/interiors).

## Life
`w.walker(points, {speed, phase, mode: loop|pingpong|once, closed, color, at, wave})` tiny person ·
`w.crowd(x, y, n, {at, wave})` · `w.car(points, {kind: car|van|truck|bus, speed, phase, color, lane, at, cargo})` ·
`w.truck(points, …)` · `w.boat(points, {kind: boat|ship})` · `w.plane(points3, {speed})` with ground shadow ·
`w.clouds(n, {z})` drifting clouds with shadows · `w.flow(points3, {color, speed, count, at, width, pipe, goods, size})`
glowing data packets on a cable (`goods: true|"#hex"` → little crates instead) · `w.arc(a, b, {height, …})`
elevated data arc between two points · `S.iso.smoke(w, x, y, z, t, opts)` inside custom draws.

## Labels
`w.label(anchor, text, {at, until, color, value: {from, to, prefix, suffix, decimals, dur}, big, lift, side, size, plain})`
— floating callout card with a leader line; `anchor` is an object, `[x, y, z]` or `t => [x, y, z]`.
`value` counts up; `big` shows a fixed big figure; `plain: true` = halo text only. Overlapping cards
push apart automatically and stay inside the frame.

## Custom drawing
`w.add({x, y, w, d, h, draw(w, ctx, t, o), update(t, w, o)})` adds a depth-sorted object. Inside
`draw` use world-space primitives: `w.box(x,y,z,w,d,h,color,{top, win:{rows,cols,ribbon,lit}, stripes})`,
`w.gable(…, axis)`, `w.pyramid`, `w.prism(points, z0, z1, color)`, `w.cyl(cx,cy,z0,z1,r,color,{bands})`,
`w.ball`, `w.dome`, `w.cone`, `w.line3(points3, color, width)`, `w.flat(points, z, fill)`, `w.disc`,
`w.glow(x,y,z,r,color)`, `w.face(points3, normal, color)`, `w.P(x,y,z)` → screen `[x,y]`, `w.K(units)` → px.
`w.ground.push(fn)` / `w.over.push(fn)` add per-frame drawing under / over all objects.
Colours: `w.pal` (theme palette: `accents[]`, `walls[]`, `roofs[]`, `ink`, …), `S.iso.shade(hex, f)`, `S.iso.mix(a, b, p)`.

## Templates
`S.iso.templates[id](root, props, tl)` — same as `S.render(id, root, props)`; ids in templates list.
