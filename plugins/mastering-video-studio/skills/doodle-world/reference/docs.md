# Doodle World engine — custom-mode API

Everything below lives on `S`. (The shared `S.stage` / `S.title` helpers from the base components
still exist but are not on-style here — build with `S.scene`.) World coordinates: the frame is
**1000 units tall**, `sc.Ww = 1000 × width / height` units wide (1778 landscape, 1000 square, 562
portrait). x grows right, y grows **down**; people and animals stand with their feet on `sc.G`
(≈ 900–910). Characters are ≈ 330 units tall. Use `sc.slots(n)` for good positions. Times are seconds —
get them from `V.at("word")`.

```js
const sc = S.scene("cave");                                   // painted world (cave has its own fire)
const og = S.character("og", { x: sc.Ww * 0.36, facing: "right", pose: "stir", expression: "deadpan" });
const ug = S.character("ug", { x: sc.Ww * 0.64, facing: "left", pose: "sit", expression: "hungry" });
const wolf = S.animal("wolf", { x: sc.Ww * 0.9, facing: "left" });
S.narrate(og);                                                 // mouth flaps on every narration phrase
const t = V.at("nothing");
S.headline("NO *JOBS*", V.at("jobs"), { pos: "top", color: "yellow", kicker: "stone age" });
og.expression("deadpan", t).mark("...", t + 0.1, 1.8);
ug.mark("drool", V.at("ate"), 1.5);
S.callout("mystery stew", { get anchor() { return og.anchor; } }, V.at("cooked"), { anchor: "handR" });
S.camera().set({ zoom: 1.04 }).to({ zoom: 1.12, x: og.x0 + 100 }, 0.2, V.duration - 0.4, "inOutSine");
```

## Scene
`S.scene(location, opts?)` → Scene (becomes the current scene; build it first).
- `location`: `cave | savanna | tundra | forest | desert | nile | roman-forum | greek-agora |
  medieval-village | modern-city | future-city | dying-sun | cosmos | stage`.
- `opts`: `{ era }` outfit era for everyone (default from the location), `span` world width in
  screens (3–8 for walks), `color` (stage only), `charScale`, `ground`, `noFire` (cave).
- Fields: `sc.Ww`, `sc.G`, `sc.portrait`, `sc.square`, `sc.slots(n, spread?)`, `sc.cam`,
  `sc.toScreen(x, y)` (world → px), `sc.onFrame(t => …)`, `sc.overlay` (screen-space HTML layer),
  `sc.osvg` (screen-space SVG), `sc.layers.{sky,far,mid,near,ground,action,front}.g` (world SVG groups
  with parallax depth), `sc.isDark / isHot / isCold` (set by the location).

## Characters
`S.character(name, opts?)` → Actor. Names: `og, ug, nia, pip, elder, zed`.
`opts`: `{ x, y, scale, facing: "right"|"left", outfit, pose, expression, gestures: true }`.
Outfits: `caveman, egyptian, roman, greek, medieval, viking, modern, future`.

All methods chain. `at` = start time (s).
- `.pose(name, at, dur = 0.4)` — poses: `idle, talk, explain, wave, point, point-up, point-down,
  point-viewer, arms-up, cheer, shrug, think, facepalm, cross-arms, hands-hips, sit, sleep, hold,
  hold-up, carry, eat, work, dig, fan, shiver, panic, cower, run, walk, nod, headshake, bow, lean-in,
  dance, present, fist-pump, jump, kneel, sad, look-around, stir`. Looping poses (work, dig, fan,
  shiver, eat, stir, dance…) keep moving until the next pose.
- `.expression(name, at, dur = 0.2)` — `neutral, deadpan, happy, excited, sad, shocked, scared,
  confused, angry, tired, hot, cold, smug, thinking, hungry, sleepy, proud`.
- `.say(from, to, text?)` — lip-sync window (visemes from `V.words`; synthesised rhythm without
  timings). `S.narrate(actor, from?, to?)` speaks every narration phrase in a range.
- `.moveTo(x, at, dur = 1.2, { gait: "walk"|"run", ease })`, `.walkTo/.runTo(x, at, dur)`,
  `.enter("left"|"right", at, dur, x?)`, `.exit(side, at, dur)` — walk cycles, auto-turn.
- `.face("left"|"right", at)`, `.lookAt(target, at)` — target: actor/animal, `{x, y}` world, a
  world x, or `"camera"|"up"|"down"|"left"|"right"`.
- `.hold(prop, at, until?, { size: 1, rot })` — prop in the front hand. Props (`S.propNames`):
  `spear, torch, basket, pot, fan, bread, scroll, phone, tablet, sword, shield, hammer, bone, fish,
  bowl, jug, umbrella, book, coins, map, stick, rock, meat, cup, lantern, laptop, flag, axe, seed`.
- `.mark(kind, at, dur = 1.6)` — reaction mark over the head: `sweat, ?!, !, !!, ?, ..., zzz, heart,
  anger, music, idea, shock, drool`. `.sweatOn(at, until)` adds a dripping sweat drop.
- `.beats([{ word, at?, pose?, expression?, mark?, look?, face? }])` — acting beats synced to words.
- `.show(at)`, `.hide(at)`; fields `.x0`, `.scale`, `.anchor` (per-frame world points: `head, top,
  mouth, handR, feet, side`).

## Animals
`S.animal(kind, { x, y, scale, facing })` → Critter: `mammoth, sabretooth, camel, cat, dog, wolf,
sheep`. Methods: `.moveTo/.walkTo/.runTo/.enter/.exit/.face/.show/.hide/.mark`; has `.anchor` like
actors (idle bob, blinking look, legs swing while walking, tails wag).

## World objects, fire, weather
- `S.setpiece(name, { x, y, scale, layer: "action"|"near"|"mid"|"front", at, until, flip, text })` —
  `fire` (animated), `rock, boulder, log, tent, hut, palm, tree, acacia, pine, cactus, column, well,
  barrel, bench, table, crate, signpost (text), pyramid, cart, tower, stall, bush, snowman, igloo, bed,
  firepit, stones, drum, hay, pot, grave, mushroom`. Returns `{ g, x, y, scale }`.
- `S.fire(x, y, scale)` — flickering campfire with glow + embers. `sc.lightWash(x, y, r, color,
  strength)` — flickering warm light on the foreground.
- `S.prop(name, { x, y, size, at, until, float, spin, rot, front })` — a free prop in the world.
- `S.weather(kind, { count, at, until, speed, color })` — `snow, rain, embers, dust, ash, leaves, stars`.
- `S.tint(color, opacity, at, dur)` / `sc.tintTo(opacity, at, dur)` — colour wash (night `#1A2A5A`,
  heat `#FF5A1A`, cold `#9FB6D0`).
- `S.burst(x, y, at, { r, count, color })` world impact lines; `S.sburst(sx, sy, at)` screen-space
  (fractions of the frame).

## Text & overlays (screen space; x/y are 0–1 fractions)
- `S.headline(text, at, { pos: "top"|"center"|"bottom", x, y, color: "yellow"|"white"|"red"|hex,
  size: "sm"|"md"|"lg"|"xl", kicker, until, rot, maxWidth, maxLines })` — chunky caps thumbnail text
  with black outline; `*word*` turns red.
- `S.callout(text, target, at, { side, until, color, anchor, x, y })` — hand-drawn arrow + label.
  Target: an actor/animal (uses `anchor`: `head|handR|feet|top|side`), `{x, y}` world, or
  `{sx, sy}` screen fractions. Pass `{ get anchor() { return a.anchor; } }` to point at a live anchor.
- `S.indicator(kind, at, { x, y, label, level, until, size, speed })` — `hot`/`cold` thermometer
  (label e.g. "50 C"), `sun` (rotating rays + heat waves), `snowflake`, `steam`, `clock`.
- `S.yearCounter({ from, to, at, dur, stops: [{ at, value }], format: "plain"|"bc"|"ago", label, x, y,
  until })` — big YEAR counter; huge jumps count logarithmically; `stops` snaps at milestones.
- `S.bubble(actor, text, from, to, { kind: "speech"|"thought"|"shout", side, hold, maxWidth })` —
  doodle speech bubble following the head; speech makes the actor talk. `S.thought(...)` shortcut.
- `S.dialogue([actors], [{ speaker, text, expression?, pose?, mark?, reaction? }])` → windows
  (finds lines in `V.words`, adds bubbles, lip-sync, listener nods).
- `S.diagram(kind, { title, labels: [{ text, x, y, word }], arrows: [{ from: [x,y], to: [x,y], label,
  color, word, curve }], at, x, y, w, h, flow })` — paper card with a self-drawing doodle cross-section:
  `house-cooling, pyramid, hut, well, boat, firepit, body, tree, generic`.
- `S.captions({ text?, top?, chunk? })` — lower-third kinetic captions.
- `S.eraIcon(name, px)` / `S.propIcon(name, px)` — inline `<svg>` strings for HTML.

## Camera
`const cam = S.camera();` (chainable)
- `cam.set({ x, y, zoom } | { actor, zoom, dx, dy, focusY })` — starting framing.
- `cam.to(target, at, dur = 1, ease)`, `cam.cut(target, at)`, `cam.push(zoom, at, dur = 1.6)`,
  `cam.pan(dx, at, dur = 3)` — eased moves. `cam.focus(actor, at, dur = 0.9, zoom = 1.4, { dx, dy,
  focusY })`. `cam.follow(actor, from, to, { zoom, lead })`. `cam.shake(at, amp = 14, dur = 0.45)`.
- Parallax is automatic: sky barely moves, the foreground overshoots; a subtle handheld drift is on.

## Timing helpers
`S.lines(["line 1", …])` → `[{ start, end, found }]`; `S.syncAt(word, after, fallback, lead)`;
`S.syncTimes(keys, { start, end, lead })`; `S.autoKey(text)`.

## Rules
- Build everything synchronously, schedule with times — never timers.
- Keep screen text short and clamp every time inside `V.duration`.
- Templates: `S.render("daily-life" | "what-if-time" | "survival-hack" | "versus-then-now" |
  "group-gathering" | "journey-trek" | "headline-thumb" | "mini-diagram" | "list-of-ways" |
  "reaction-close-up" | "timeline-eras", root, props)`.
