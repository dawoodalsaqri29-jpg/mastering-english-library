# Chibi History engine — custom-mode API

Everything below lives on `S`. A scene is a **film**: a list of **shots** (cuts) on a time line.
Each shot has its own painted location, characters and camera; only the active shot is drawn.
World coordinates per shot: the frame is **1000 units tall** and `shot.Ww = 1000 × width / height`
units wide (1778 landscape, 1000 square, 562 portrait); x right, y **down**. A character position is
the **centre of its head**; the feet are 278 × scale below it (`shot.groundY` is the floor line of
the location, so `y = shot.groundY - 278 * scale` stands a character on it). Times are seconds —
get them from `V.at("word")`.

```js
const tWhy = V.at("why");
const s1 = S.shot("war-room", 0, tWhy, { nation: "germany" });
const f1 = s1.frame("medium", V.isPortrait ? "center" : "left");
const officer = s1.character({ role: "officer", nation: "germany" }, { x: f1.x, y: s1.groundY - 278 * f1.scale, scale: f1.scale, facing: "right", expression: "thinking", prop: "map" });
S.narrate(officer, 0, tWhy);                        // lip-sync to the narration
officer.gesture("hold", 0).hop(V.at("plan"), 30);
s1.cam.push(1.08, 0, tWhy);
S.dateTag("JUN 1940", 0.2, { x: 0.12, y: 0.09 });

const s2 = S.shot("map", tWhy, 1e9, { enter: "zoom" });
const M = s2.map0;                                  // the parchment Europe map
M.region("germany", "germany", tWhy).region("switzerland", "switzerland", tWhy + 0.3);
M.arrow("germany", "switzerland", tWhy + 0.5, { color: "#444A44" });
M.qmarks("switzerland", tWhy + 1.0, 1e9);
S.thumb("Why *not*?", tWhy + 1.0, { x: 0.5, y: 0.12, size: "lg" });
```

## Film & shots
- `S.film()` → the scene's Film (created on first use). `S.shot(location, from, to, opts?)` → Shot
  visible during `[from, to)` (use `0` / `1e9` for the whole scene). `S.scene(location, opts?)` = one
  shot for the whole scene. `S.currentShot()` = the last shot made.
- Locations: `war-room, trench, airfield, city, office, alps, sea, map, plain, parade, field`.
  Location opts: `{ nation, nation2 }` (flags in war-room/office), `{ night }` (trench/city),
  `{ color, nation }` (plain: flat paper or diagonal flag stripes), `{ sign }` (alps border sign),
  `{ planes }` (airfield/city plane count), `{ mapShift }` (map).
- Shot `opts.enter`: `"cut"` (default) | `"slide-left"` | `"slide-right"` | `"zoom"` | `"drop"` | `"rise"`.
- Shot fields: `Ww`, `portrait`, `square`, `landscape`, `groundY`, `cam`, `map0` (for `map`),
  `wallMap` (for `war-room`), `html` (world-space HTML layer), `onFrame(t => …)`.
- `shot.frame(kind, side)` → `{ x, y, scale }`. kind: `wide | medium | close | small`;
  side: `"left" | "center" | "right"` or a 0–1 fraction of the width.

## Characters
`shot.character(spec, opts)` → Actor. `spec` = `{ role, nation }` or a string like `"german officer"`.
Roles: `officer, general, soldier, sailor, pilot, diplomat, civilian, nurse, historian` (`S.castInfo()`).
Nations: `S.NATIONS` keys (germany, britain, usa, ussr, france, italy, japan, switzerland, sweden, poland,
austria, finland, netherlands, belgium, spain, norway, neutral).
`opts`: `{ x, y, scale, facing: "left"|"right"|"front"|-1…1, mirror, expression, gesture, prop, parent }`.

All methods are chainable; `at` = start time (s).
- `.expression(name, at)` — `neutral, smile, happy, excited, proud, smug, worried, nervous, angry,
  furious, shocked, surprised, sad, gloomy, confused, thinking, determined, serious, scared, dizzy,
  tired, sleepy, calm, embarrassed`. Expressions bring their own eyes, brows, mouth and marks
  (sweat drop, anger mark, bang, question marks, sparkles, stars, zzz, steam, tears, gloom lines).
- `.gesture(name, at, dur = 0.22)` — stubby-arm pose with overshoot: `rest, point, point-up,
  point-left, point-down, salute, shrug, arms-up, cheer, fist, fist-up, facepalm, think, hold, hold-up,
  hold-both, wave, present, cross, hips, stop, hands-head, binoculars, march`.
- `.prop(name, at, arg?)` — hold `letter, telegram, map, binoculars, phone, flag (arg = nation),
  pointer, mug, sign (arg = text)` in the right hand; `null` drops it. `.hatInHand(at, on = true)`.
- `.say(from, to)` — lip-sync window; `S.narrate(actor, from?, to?)` speaks every narration phrase in
  the range; `S.liven(actor, from, to, gestures?)` adds idle hops and gesture swaps.
- `.face(dir, at)`, `.look(x, y, at)`, `.lookAt(target|"left"|"right"|"up"|"down", at)`.
- `.moveTo(x, y, at, dur = 0.5, ease)`, `.walkTo(x, y, at, dur)` (legs swing), `.slideIn(side, at, dur)`,
  `.hop(at, height = 40, dur)`, `.shake(at, dur, amp)`, `.show(at)`, `.hide(at)`.
- `.beats([{ word, at?, expression?, gesture?, look?, face?, hop?, prop? }])` — acting beats on words.

## Camera (`shot.cam`, chainable)
`set({ x, y, zoom })`, `to({ x, y, zoom }, at, dur = 0.8, ease)`, `cut(target, at)`,
`push(zoom, at, dur = 2)`, `focus(actor, at, dur, zoom = 1.4)`, `shake(at, amp, dur)`; `cam.drift = 0` stops the idle sway.

## History grammar
Shot-level (world space):
- `shot.flag(nation, { x, y, w, h, pole, layer, wave })` — waving flag, optional pole.
- `shot.map({ x, y, w, h, muted, grid })` → MapView (the `map` location makes one as `shot.map0`):
  `.pt(name|{x,y})`, `.world(name)` (world coords), `.region(name, nation|"#hex", at)`,
  `.label(text, at, { at, size, dy })`, `.arrow(from, to, at, { color, curve })`, `.target(name, at, { color })`,
  `.front([pts], at, { color })`, `.qmarks(name, from, to)`, `.flag(name, nation)`, `.burst(name, at)`.
  Named points: `S.mapPoints`.
- `shot.letter(from{x,y}, to{x,y}, at, { kind, dur, until, arc })` — flying envelope / telegram.
- `shot.arrow(a, b, at, { color, width, curve })`, `shot.target(x, y, at, { r })`, `shot.qmarks(x, y, from, to)`.
- `shot.planes(from, to, { count, y, kind: "fighter"|"bomber", speed, dir, layer, color })`,
  `shot.smoke`, `shot.snow`, `shot.birds`, `shot.sparkles(from, to, { count, area })`,
  `shot.focusLines(from, to, { layer, bg, x, y })`.
- `shot.crowd(n, { x, w, y, rows, roles, nation, scale, march: "left"|"right", cheer })` → actors.
- `S.half(shot, "left"|"right")` — clipped half-screen sub-shot for split framing (`S.jaggedD` gives
  the divider path); draw a location into it with `S.LOCATIONS[name](half, opts)`.

Film-level (whole frame, across cuts): `S.flash(at, color, dur)`, `S.shakeFrame(at, amp, dur)`,
`S.boom(at, { x, y, r, text })` (cartoon burst, non-graphic), `S.stamp(text, at, { x, y, color, rotate, until })`
(rubber stamp), `S.vignette(from, to, amount)`, `S.film().filter(from, to, css)`.

Lettering (HTML overlays, auto-fitted; `*word*` highlights gold):
- `S.thumb(text, at, { x, y, width, size: "xl"|"lg"|"md"|"sm", color, rotate, until, kicker, maxLines })`.
- `S.dateTag(text, at, { x, y, size: "lg"|"md"|"sm", color, rotate, until })`.
- `S.tag(text, at, { x, y, color, dark, until })`, `S.nameplate(actor, text, at, { color, until })`.
- `S.caption(text, at, { until, color })`, `S.captions({ from, to, top })` (word-synced captions).
- `S.stat(value, at, { prefix, suffix, decimals, label, x, y, color })`, `S.bubble(text, from, to, { x, y, width, tail })`,
  `S.banner(text, at, { y, color, until })`, `S.vsBadge(at, { x, y })`.

Templates can also be rendered from custom code: `S.render("character-talks", root, props)`.
`S.stage` and the shared slide helpers still exist but look off-style here — prefer shots.

## Rules
- Build everything synchronously and schedule with times — never timers. Clamp times inside `V.duration`.
- Cut every 2–5 s but keep the same cast and location inside a scene.
- No likenesses of real people; archetypes only. Flags and uniform colours carry identity.
- Keep text short; let faces, flags, maps and hops carry the scene.
