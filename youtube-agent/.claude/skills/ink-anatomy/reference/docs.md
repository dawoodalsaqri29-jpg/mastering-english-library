# Ink Anatomy engine — custom-mode API

Everything lives on `S`. A scene is one **stage**: an SVG world **1000 units tall** and
`stage.Ww = 1000 × width / height` units wide (1778 landscape, 1000 square, 562 portrait), x right,
y **down**, plus an HTML UI layer for lettering. Figures are placed by their **ground point**
(feet); a standing figure is ≈ 640 × scale units tall. Times are seconds — get them from `V.at("word")`.

```js
const tKey = V.at("tendons");
const st = S.scene({ bg: "white" });                       // the stage (once per scene)
const f = st.frame("center", "hero");                      // { x, y, scale }
const rook = S.figure("rook", { x: f.x, y: f.y, scale: f.scale, facing: "right" });
rook.exercise("pullup", 0);                                // loop from t = 0
S.prop("bar", { x: f.x, y: rook.world("handN", 0).y, w: 400 * f.scale });
S.floor(f.x, f.y, 600 * f.scale);
rook.highlight("forearms", tKey).sweat(tKey + 1);         // red striations + pulse on the word
const mp = S.musclePoint(rook, "forearms", tKey);
st.annotate("Not muscle. *Tendon*.", { x: mp.x, y: mp.y, lx: mp.x + 300, ly: mp.y - 200, at: tKey, align: "start" });
st.cam.punch(tKey, 1.3, mp.x, mp.y);                       // manga punch-in
S.thumbText("Train your *tendons*", 0.2, { pos: "top" });
S.repCounter(0, { period: 2 });
```

## Stage
- `S.scene({ bg: "white"|"black" })` → Stage (created once; `S.currentStage()` returns it).
- Fields: `Ww`, `portrait`, `square`, `landscape`, `ink`, `paper`, `cam`, `ui` (HTML layer),
  `wfx` (world SVG group), `topSvg` (screen SVG).
- `stage.frame(side, kind)` → `{ x, y, scale }`; side `"left"|"center"|"right"` or 0–1;
  kind `hero | default | pair | small | low`.
- `stage.floor(x, y, w, { shadow, thin })` hatched ground line + shadow.
- `stage.prop(kind, opts)` / `S.prop`: `"bar" {x,y,w}`, `"dipbars" {x,y,ground,w}`,
  `"rope" {a, b|x2, length}`, `"boulder" {fig, r}`, `"dumbbell" {fig}`, `"kettlebell" {fig}`.
- `stage.onFrame(fn)` — per-frame hook (pure function of `t`).

## Figures (`S.figure(name, opts)` → Figure)
Names: `rook`, `brick` (`S.castInfo()`). `opts: { x, y, scale, facing: "left"|"right", pose,
exercise, expression, highlight, build: "lean"|"big"|"soft", shorts: "orange"|"dark"|"white" }`.
Chainable; `at` = seconds.
- `.pose(name, at, dur = 0.35)` — `stand, flex, point, cheer, slouch, crossed, hips, pushup-up,
  pushup-down, plank, planche, hang, pullup-up, squat-up, squat-down, lift-a, lift-b, curl-a, curl-b,
  dip-up, dip-down, handstand, run-a, run-b, lunge-a, lunge-b, tug-a, tug-b, fall, kneel, strain`.
- `.exercise(name, at, { period, until, endPose })` — loops `pushup, pullup, squat, plank, planche,
  sprint, tug, lift, curl, dip, hang, handstand, flex, lunge, idle` (`name + "-bad"` = wrong form).
- `.highlight(part, at, { pulse })` — red striations: `biceps, triceps, forearms, grip, shoulders,
  chest, abs, lats, back, glutes, quads, hamstrings, calves, achilles, patellar, elbow-tendon,
  tendons, bones, arms, legs, core, full, none`. `.pulse(at, strength)` re-pulses it.
- `.expression(name, at)` — `neutral, focus, strain, shout, smirk, proud, shock, scowl, tired, calm`.
- `.say(from, to)` / `.narrate(from, to)` — mouth flaps on `V.words`; `.sweat(from, to)`,
  `.shake(at, dur, amp)`, `.moveTo(x, y, at, dur)`, `.face(dir, at)`, `.show(at)`, `.hide(at)`.
- `.beats([{ word, expression, pose, exercise, highlight, pulse, shake }])` — acting on words.
- `.world(joint, t)` → `{x, y}` world point of `hip, chest, neck, head, shN, elbowN, wristN, handN,
  kneeN, ankleN, toeN` (+ `F` variants). `S.musclePoint(fig, part, t)` → where a part is.

## Camera (`stage.cam`, chainable)
`set({ x, y, zoom })`, `to({ x, y, zoom }, at, dur, ease)`, `push(zoom, at, dur)`,
`punch(at, zoom, x, y, dur = 0.14)` (snap zoom), `shake(at, amp, dur)`, `rumble(from, to, amp)`.

## Manga grammar
- `stage.focusLines(from, to, { x, y, inner, bg, layer: "over"|"under", opacity })` — concentration lines.
- `stage.speedLines(from, to, { dir: "h"|"v"|"diag"|"left"|"right", bg, layer })`.
- `stage.impact(at, { x, y, shake, invert, flash })` — inverted frame + burst + star + shake.
- `stage.splash(at, { x, y, color, dur })` — ink-splash transition. `stage.shake`, `stage.flash`.
- `stage.splatter(parent, x, y, r, seed, color)` — static ink splatter.

## Lettering & annotations
- `stage.annotate(text, { x, y, lx, ly, at, until, color, size, align, bend, width, arrow })` —
  handwritten label (world space) with a curved red arrow to `(x, y)`; `stage.handText(text, x, y, opts)`.
- `stage.forceArrow(x1, y1, x2, y2, { at, until, label, color })` — thick red force arrow.
- `S.thumbText(text, at, { pos: "top"|"bottom"|"center"|"left"|"right"|"top-left"|"top-right",
  size: "xl"|"lg"|"md"|"sm", kicker, sub, until, maxWidth })` — thumbnail lettering (`*word*` = red).
- `S.handNote(text, at, { x, y, width, size, color, until })`, `S.tag(text, at, { x, y, color })`.
- `S.repCounter(at, { period, x, y, label, max, until })`, `S.setsBadge("3 × 12", at, { x, y })`,
  `S.progressBar(from, to, { x, y, width, label, value })`, `S.bigStat(value, at, { prefix, suffix,
  decimals, label, x, y })`, `S.weekCounter(from, to, { start, end, label, x, y })`,
  `S.mark("check"|"cross", at, { x, y, size })`, `S.caption({ from, to })`.

## Anatomy & charts
- `stage.anatomyLimb({ limb: "arm"|"leg"|"forearm", x, y, scale, focus })` → `{ anchor(layer),
  focus(layer, at), reveal(layer, at) }` — x-ray cut-away with skin / muscle / tendon / bone layers.
- `stage.inkChart({ x, y, w, h, type: "line"|"bars", series, xLabels, yLabel, max }, times)` →
  `{ point(seriesIdx, i), times }` — hand-drawn chart revealed point by point.

Templates can be rendered from custom code: `S.render("exercise-demo", root, props)`.
`S.stage` and the shared slide helpers still exist but look off-style here — prefer the ink stage.

## Rules
- Build everything synchronously and schedule with times — never timers. Clamp times inside `V.duration`.
- Keep the page black & white; red only for anatomy, arrows, ticks and one word per title.
- Keep text short; let the body, the hatching and the red pulse carry the scene.
