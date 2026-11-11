# Anime engine — custom-mode API

Everything below lives on `S`. A scene is a **film**: a list of **shots** (cuts) on a time line.
Each shot has its own painted location, characters and camera; only the active shot is drawn.
World coordinates per shot: the frame is **1000 units tall** and `shot.Ww = 1000 × width / height`
units wide (1778 landscape, 1000 square, 562 portrait); x right, y **down**. Character positions are
the **centre of the head**; busts continue below the frame. Use `shot.frame(kind, side)` for good
placements. Times are seconds — get them from `V.at("word")`.

```js
const tHit = V.at("answer");
const s1 = S.shot("classroom", 0, tHit);              // cut 1 (0 → tHit)
const f1 = s1.frame("medium", "left");               // { x, y, scale }
const yuki = s1.character("yuki", { ...f1, facing: "right", expression: "thinking" });
S.narrate(yuki, 0, tHit);                            // lip-sync to the narration
s1.cam.push(1.12, 0, tHit);
S.cutIn("ren", tHit - 0.5, tHit - 0.02, { expression: "serious" });   // eyes-only strip
const s2 = S.shot("classroom", tHit, 1e9, { enter: "zoom" });
const f2 = s2.frame("close", "right");
const ren = s2.character("ren", { ...f2, facing: "left", expression: "smug", gesture: "glasses" });
ren.glint(tHit + 0.1);
S.narrate(ren, tHit, V.duration);
s2.focusLines(tHit, tHit + 1.2, { layer: "under", bg: "#FFFFFF" });
S.impact(tHit);
S.bigWord("Gravity!", tHit + 0.05, { x: 0.3, y: 0.4, width: 0.5 });
S.subtitles({});
```

## Film & shots
- `S.film()` → the scene's Film (created on first use). `S.shot(location, from, to, opts?)` → Shot
  visible during `[from, to)` (use `0` / `1e9` for the whole scene). `S.scene(location, opts?)` = one
  shot for the whole scene. `S.currentShot()` = the last shot made.
- Locations: `rooftop, sunset-city, classroom, train, night-city, shrine, space, sky, meadow, plain`
  (`plain` = pastel polka-dot studio; `opts.color` sets its colour).
- Shot `opts.enter`: `"cut"` (default) | `"whip-left"` | `"whip-right"` (whip pan + streaks) |
  `"zoom"` (crash zoom) | `"drop"` | `"rise"`.
- Shot fields: `Ww`, `portrait`, `square`, `landscape`, `board` (classroom chalkboard rect),
  `cam`, `html` (world-space HTML layer), `onFrame(t => …)`.
- `shot.frame(kind, side)` → `{ x, y, scale }`. kind: `wide | medium | close | extreme | low | chibi`;
  side: `"left" | "center" | "right"` or a 0–1 fraction of the width.

## Characters
`shot.character(name, opts)` → Actor. Names: `hikari, ren, kaito, yuki, mochi` (`S.castInfo()`).
`opts`: `{ x, y, scale, facing: "left"|"right"|"front"|-1…1, expression, gesture, chibi: true, wind: 0–1 }`.
`chibi: true` draws the super-deformed full-body version (mochi is always a mascot blob).

All methods are chainable; `at` = start time (s).
- `.expression(name, at)` — instant anime switch with a tiny pop: `neutral, smile, happy, excited,
  sparkle, shocked, surprised, determined, serious, sweat-drop, panic, flustered, sad, angry, smug,
  calm, thinking, embarrassed, sleepy`. Expressions bring their own eyes (^ ^, stars, spirals, > <,
  tiny pupils), brows, mouth and marks (sweat drop, vein, gloom lines, tears, blush hatching, sparkles).
- `.gesture(name, at, dur = 0.18)` — arm pose with overshoot: `rest, fist, fist-up, point,
  point-left, point-up, think, wave, peace, thumbs, cheer, panic, glasses, explain, present, cross,
  clasp, ready, punch, punch-left`.
- `.say(from, to)` — lip-sync window (mouth flaps follow the syllables of `V.words`).
  `S.narrate(actor, from?, to?)` makes the actor speak every narration phrase in the range.
- `.face(dir, at)` — turn the head (3/4 view). `.look(x, y, at)` (−1…1) / `.lookAt(target|"left"|"right"|"up"|"down", at)`.
- `.moveTo(x, y, at, dur = 0.35, ease = "smear")` (null keeps an axis), `.slideIn("left"|"right"|"bottom", at, dur)`,
  `.hop(at, height = 40, dur)`, `.shake(at, dur, amp)`, `.show(at)`, `.hide(at)`.
- `.glint(at)` — glasses flash (ren). `.wind(amount)` — hair/headband flutter.
- `.beats([{ word, at?, expression?, gesture?, look?, face?, hop? }])` — acting beats on words.

## Camera (`shot.cam`, chainable)
`set({ x, y, zoom })`, `to({ x, y, zoom }, at, dur = 0.8, ease)`, `cut(target, at)`,
`push(zoom, at, dur = 2)`, `focus(actor, at, dur = 0.25, zoom = 1.4)`, `shake(at, amp = 12, dur = 0.4)`,
`rumble(from, to, amp = 4)`. Backgrounds parallax automatically.

## Anime grammar
Shot effects (screen space unless noted):
- `shot.focusLines(from, to, { layer: "over"|"under", bg, color, x, y, inner, opacity })` — flickering
  concentration lines; `layer: "under", bg: "#FFFFFF"` replaces the background (reaction shots).
- `shot.speedLines(from, to, { dir: "h"|"v"|"up"|"diag", bg, color, layer, lineOpacity })` — with `bg`
  it becomes a speed-line backdrop.
- `shot.aura(actor, from, to, { color, color2, grow })` — flaming power-up aura + rising sparks + ring.
- `shot.sparkles(from, to, { count, area, size, color })`, `shot.petals(from, to, { count, color })`,
  `shot.burst(at, { x, y, r })` (impact star), `shot.rings(at, { x, y })` (shockwaves).

Film-level (whole frame, across cuts):
- `S.impact(at, { shake, x, y, flash, invert })` — impact frame: inverted B/W negative, burst lines, flash, shake.
- `S.flash(at, color, dur)`, `S.shakeFrame(at, amp, dur)`, `S.stripes(at, dur)` (diagonal stripe wipe),
  `S.memory(from, to)` (sepia memory filter + vignette + flicker).
- `S.cutIn(name, from, to, { expression, y, h, bg })` — letterboxed eyes-only close-up strip.

Lettering (HTML overlays, auto-fitted; `*word*` highlights):
- `S.titleCard(text, at, { kicker, sub, pos: "center"|"top"|"bottom"|"left"|"right", size: "xl"|"lg"|"md", style: "slam"|"slide", until, y, maxWidth })`.
- `S.bigWord(text, at, { x, y, width, color, until })` — giant zoom-slam reveal word.
- `S.callout(text, at, { x, y, width, kicker, icon, until })` — slanted key-text box (x/y = box centre, 0–1).
- `S.subtitles({ lines?: [{ text, start, end }], from, to, top })` — anime subtitles synced to `V.words`.
- `S.nameTag(name, from, to, { side })`, `S.stat(value, at, { prefix, suffix, decimals, label, x, y, color })`,
  `S.stepCard(n, label, from, to, { x, y, icon })`, `S.bubble(text, from, to, { x, y, width, tail })`,
  `S.iconPop(icon, label, at, { x, y })`, `S.boardText(shot, title, items, times)` (chalk on the classroom board).

Templates can also be rendered from custom code: `S.render("character-speaks", root, props)`.
`S.stage` and the shared slide helpers below still exist but look off-style here — prefer shots.

## Rules
- Build everything synchronously and schedule with times — never timers. Clamp times inside `V.duration`.
- Cut often (every 1.5–4 s) but keep the same cast and location inside a scene.
- Keep text short; let faces, cuts and effects carry the scene.
