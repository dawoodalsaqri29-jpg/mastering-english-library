# Founder Story engine — custom-mode API

Everything lives on `S`. World coordinates: the frame is **1000 units tall**, `sc.Ww = 1000 × width / height`
units wide (1778 landscape, 1000 square, 562 portrait); x grows right, y grows **down**; the horizon is at
`sc.horizon` (≈ 300) and figures stand with their feet on `sc.G` (≈ 1040, just below the frame edge).
HUD components (plate, headline, stat, cards) use **screen fractions** `{ x, y }` (0–1) or names
(`"right"`, `"left"`, `"top"`, `"bottom"`, `"centre"`). Times are seconds from `V.at("word")`.

```js
const sc = S.scene({ empire: "auto", sky: "day", growth: 0.4 });     // aerial empire + sky + camera
const boss = S.figure("founder", { x: sc.heroX("left"), facing: "right", expression: "confident" });
S.narrate(boss);                                                     // lip-sync the whole narration
S.plate("Northwind Motors", "1937 – 2026", { kicker: "THE ENTIRE HISTORY OF" });
const t = V.at("forty");
S.headline("From one garage to *forty* factories", t, { pos: "right", size: "lg" });
boss.pose("point", t - 0.15).pose("arms-crossed", t + 2);
S.stat("$48B", "annual revenue", V.at("billion"), { pos: { x: 0.67, y: 0.8 } });
S.grow(t, V.duration - 1);                                           // pop the missing buildings
S.camera().rise(0, V.duration * 0.85);
```

## Scene
`S.scene(opts)` → Scene (becomes the current scene; build it first).
- `opts`: `empire` (`tech | factory | auto | retail | shipping | finance | energy | food | garage | city`, or
  `"none"`), `sky` (`day | dawn | sunset | storm | night`), `growth` (0–1 fraction of buildings present at
  the start), `ground`, `horizon`, `charScale`.
- Fields: `sc.Ww`, `sc.G`, `sc.horizon`, `sc.portrait`, `sc.square`, `sc.cam`, `sc.hud` (screen-space
  HTML layer), `sc.html` (world-space HTML), `sc.propLayer` / `sc.actorLayer` (world SVG groups),
  `sc.empire` (`.hero`, `.list`, `.grow(from, to)`), `sc.slots(n)`, `sc.heroX("left"|"right")`,
  `sc.toScreen(x, y)`, `sc.onFrame(t => …)`, `sc.pop(svgGroup, x, y, scale, at)`.
- `S.currentScene()` returns it later. `S.grow(from, to)` pops the hidden buildings in rank order.
- `S.stage(root, { empire, sky })` — shared-helper compatibility: a scene plus a padded flex column
  (`v-stage`) in the HUD for `S.title` / `S.text`. Prefer the components below.

## Figures (caricatures)
`S.figure(archetype, opts)` → Figure. Archetypes: `founder, engineer, inventor, retailer, techie, investor,
executive` (`S.archetypes`). `opts`: `{ x, y, scale, facing: "right"|"left", pose, expression, gestures }`.
All methods chain; `at` = start time.
- `.pose(name, at, dur = 0.5)` — `idle, talk, explain, arms-crossed, point, point-up, point-viewer,
  point-down, blueprint, tablet, contract, phone, thumbs-up, hands-hips, worried, handshake, present,
  open-arms, wave, facepalm, shrug, fist-pump, think, celebrate, sad, briefcase, coffee, wrench, money,
  megaphone, nod, headshake, bow` (`S.poses`). `blueprint/tablet/contract` draw a two-hand prop; `phone,
  briefcase, coffee, wrench, money, megaphone` put a prop in the hand.
- `.expression(name, at, dur = 0.3)` — `neutral, confident, happy, excited, worried, shocked, angry,
  determined, smug, sad, thinking, laughing, skeptical, tired`.
- `.say(from, to)` — lip-sync window (visemes from `V.words`). `S.narrate(fig, from?, to?)` speaks every
  narration phrase in a range.
- `.lookAt(target, at)` — `"camera" | "up" | "down" | "left" | "right"`, another figure, or a world x.
- `.hold(prop, at, until)` — `phone, briefcase, coffee, wrench, money, megaphone, pen, mic` (hand) or
  `blueprint, tablet, contract` (two hands).
- `.emote(mark, at, dur = 1.6)` — `sweat, exclaim, question, idea, dollar, anger, sparkle, zzz, check, cross`.
- `.moveTo(x, at, dur)`, `.enter("left"|"right", at, dur, x?)`, `.exit(side, at, dur)`, `.face(dir, at)`,
  `.show(at)`, `.hide(at)`, `.beats([{ word, pose, expression, mark, look }], { after: "arms-crossed" })`.
- Fields: `.x0`, `.y0`, `.scale`, `.moveX(t)`.

## HUD components (screen space)
- `S.plate(company, years, { kicker, color, at, until, pos: "left" })` — the headline plate (top-right;
  top-centre in portrait).
- `S.headline(text, at, { pos, size: "sm"|"md"|"lg"|"xl", kicker, color, rot, until, maxWidth })` — bold caps
  card; `*word*` is coloured.
- `S.stat(value, label, at, { pos, prefix, suffix, decimals, kicker, color, until, arrowTo })` — counting
  number card; `value` may be `"$3.2B"`, `"47%"` or a number. `arrowTo` draws a dashed line to a figure or
  world point.
- `S.chapter(year, title, { sub, kicker, at, titleAt, until, pos })` — era card.
- `S.label(text, at, { pos, accent, until })` — small ink label. `S.nameTag(fig, text, at, { y, rot,
  accent, until })` — tag that follows a figure. `S.versus(at)` — VS badge with a camera thump.
- `S.captions({ text, top, x, maxWidth })` — paper strip with the narration words lighting up.

## Paper cards
- `S.productCard({ kind, name, year, specs: [text | { text, word }], at, pos, w, blue, until })` — blueprint
  sheet, sketch draws on, spec callouts land on their words. Kinds (`S.sketches`): `car, truck, phone,
  computer, software, rocket, plane, shoe, bottle, chip, box, lightbulb, engine, burger, bike, watch, ship,
  tv, camera, battery, robot` (+ aliases like `laptop`, `app`, `sneaker`).
- `S.chart({ points: [{ label, value, note, word }], title, prefix, suffix, falling, color, milestones, at,
  pos, w, until })` — growth line that draws itself.
- `S.map({ region, pins: [{ place, word, lat, lon, label }], title, counterLabel, lines, at, pos, w, until })`
  — regions `S.regions` (`world, americas, north america, usa, south america, europe, asia, east asia,
  africa, australia, middle east`); known cities/countries are placed automatically.
- `S.contract({ title, amount, parties, at, signAt, sealAt, pos, w, until })` — signatures draw, seal stamps.
- `S.paper({ pos, w, ratio, title, blue, at, until })` → `{ el, svg, inner, vw, vh }` for your own drawing;
  `S.drawSketch(svgGroup, kind, { color, transform })` + `S.drawOn(tl, group, at, dur)`.

## World props
- `S.assemblyLine({ product, speed, color, y })` — conveyor with units and robot arms in the foreground.
- `S.workbench({ x, scale })` — garage bench with spinning gears and a swinging lamp.
- `S.buildings[name](svgGroup, opts, rand)` draws one building in local units (then `sc.pop(...)`).
  `S.buildEmpire(sc, preset, { growth })` builds a whole landscape (done by `S.scene`).

## Camera
`const cam = S.camera();` (chainable) — `cam.set({ x, y, zoom })`, `cam.to({ x, y, zoom } | { actor, zoom,
focusY, dx, dy }, at, dur, ease)`, `cam.cut(target, at)`, `cam.push(zoom, at, dur)`, `cam.rise(at, dur, {
fromY, toY, fromZoom, toZoom, x })`, `cam.focus(fig, at, dur, zoom, { focusY, dx })`, `cam.shake(at, amp,
dur)`. Parallax (sky → near) and a subtle handheld drift are automatic.

## Rules
- Build everything synchronously; schedule with times; never timers. Clamp times inside `V.duration`.
- Keep text inside HUD components (they auto-fit and stay in frame); do not add loose world-space text.
- Archetypes are generic; company names are plain type from props, never logos.
