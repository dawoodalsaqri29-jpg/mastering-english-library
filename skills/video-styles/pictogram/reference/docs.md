# Pictogram Protocol engine — custom-mode API (`S`)

Everything is a pure function of time. The room is SVG (silhouette pictograms filled with CSS
variables, so light/dark mode and light flicker are one class flip); the headline stamps, clock,
rule cards, phone and checklist are HTML overlays. Coordinates are **world pixels**: with the
default camera the world rect `(0, 0) – (V.width, V.height)` is the frame; `sc.floor` is the
ground line. Every call takes an `at` time in seconds (omit it on stamps/arrows to use the
auto-cursor). Size from `V.width`, `V.height` and `S.u(px)` (1080-based unit).

```js
// Body of scene(V, S, root)
const W = V.width, H = V.height, P = V.isPortrait;
const sc = S.pictogram(root, { mode: "light" });          // "dark" = white on black
const room = S.setting("bedroom");                         // { objs: {bed, window, door, clock…}, slots: [x…] }
const you = S.figure("you", { x: W * room.slots[0], y: sc.floor, h: H * 0.42, pose: "stand", at: 0.2 });
const dog = S.figure("dog", { x: W * room.slots[1], y: sc.floor, h: H * 0.2, at: 0.3 });
S.clockStamp("2:00 AM", 0.4, { pos: "top-left" });
dog.runTo(room.objs.bed.x, V.at("hides") - 0.5).pose("hide", V.at("hides"));
you.pose("look", V.at("hides"));
S.stamp("GET UNDER THERE *WITH* IT", V.at("with") - 0.1, { pos: "upper", size: "xl" });
S.arrowTo(room.objs.bed, V.at("with") + 0.3);
```

## Scene, modes, lights, camera

- `S.pictogram(root, opts?) → sc` — call first. `opts.mode`: `"light"` (black on white, default) |
  `"dark"` (white on black, heavy vignette); `opts.push`: slow push-in zoom over the scene
  (default 0.06); `opts.vignette: false` to disable.
- `S.setMode("dark", at)` — hard flip of the whole scene's art.
- `S.flicker(at, dur?, density?)` — lights flicker (deterministic on/off frames).
  `S.lightsOut(at, until?)` — lights go out. `S.blackout(at, dur, until?)` — fade to black.
  `S.flashFrame(at, dur?, "red"|"white")` — a hard flash frame.
- `S.cameraTo({ cx, cy, z }, at, dur, ease?)` / `S.cameraCut({…}, at)` (hard cut) /
  `S.frameRect({x,y,w,h}, at, dur)` — camera keyframes chain. `S.shake(at, dur, amp)`.
- `sc.floor`, `sc.mx`, `sc.my` (ground line, safe margins), `sc.portrait / square / landscape`.

## Rooms and pictograms

- `S.setting(name) → { objs, slots }` — builds a room from pictograms with a floor line and
  returns its objects by name (`objs.door`, `objs.window`, `objs.bed`, `objs.clock`, `objs.lamp`,
  `objs.tv`, `objs.car`…) and 3 standing spots (`slots`, fractions of `V.width`). Settings:
  `bedroom hallway front-door living-room kitchen street car bathroom basement forest bus-stop
  outside-window plain none`.
- `S.object(name, { x, y, size, at, layer, accent, flip, rot }) → obj` — one pictogram, centre `x`,
  bottom `y`, box height `size`. `at` = pop-in. 73 objects (`S.objects`): bed, door, window,
  phone, clock, clock-digital, house, car, poster, lamp, table-lamp, nightstand, tv, couch,
  chair, table, fridge, laptop, stairs, tree, pine, moon, key, bag, cup, bath, mirror, sink,
  wardrobe, mailbox, bus, lamppost, sign, stop-sign, eye, hand, footprints, pill, flashlight,
  candle, radio, camera, envelope, box, bench, plant, frame, teddy, fence, stone, ladder, bowl,
  bone, shelf, bulb, doormat, keyhole, umbrella, monitor, crib, sun, mask, skull, cross, check,
  triangle, road, bus-stop, bush, cloud, grave, cradle, cake (synonyms work: `S.objectKey`,
  `S.pickObject(text)`).
- Object methods: `.to({x, y, s, rot}, at, dur, ease)`, `.fade(to, at, dur)`, `.show(at)`,
  `.hide(at)`, `.pop(at)`, `.box(t)`; `.open(at, deg?, dur?)` / `.close(at)` (door, wardrobe),
  `.curtains(1|0, at, dur)` (window), `.setTime("2:00", at, dur?)` (clock), `.light(on, at)`
  (lamp, lamppost, bulb, flashlight, candle), `.roll(at, dur, turns)` (car, bus wheels),
  `.staticOn(at, until?)` (tv), `.part(name, { rot, dx, dy, op }, at, dur)` for any named part.
- `S.action(name, at)` — one of the room actions (`S.actions`: door-opens, door-slams, knock,
  lights-flicker, lights-out, phone-rings, curtains-close, curtains-open, visitor-at-door,
  visitor-at-window, eyes-in-the-dark, dog-hides, dog-stares, dog-growls, tv-static, car-arrives,
  bus-arrives, clock-strikes, footsteps, run, hide, lamp-on, lamp-off, owl-watches, poster) on the
  current setting and figures; returns the focus object.

## Figures

`S.figure(id, { x, y, h, facing, pose, at, eyes, layer }) → fig`. Cast ids (`S.cast`): `you mom
dad kid grandma friend stranger visitor dog cat owl crow` (`CAST` has the looks). People:
- `.pose(name, at, dur?)` — `S.poses`: stand walk run point point-up point-down hands-up scared
  hide crouch sit sit-floor sit-bed lie sleep phone hush cover-ears cover-eyes knock flashlight
  stop wave shrug reach look listen peek open hold pray fall. Poses blend; `knock`, `wave`,
  `run` and the scared poses animate on their own.
- `.walkTo(x, at, dur?)`, `.runTo(x, at, dur?)` — walk cycle, faces the way it goes.
- `.face("left"|"right"|"front", at)`, `.tremble(at, dur, amt)`, `.eyes(on, at)` (white eye dots),
  `.lieDown(at, "left"|"right")`, `.sleep(at)`, `.talk(t0, t1)` (head nods on words),
  `.hold("flashlight"|"phone"|…, { size }) → obj` attached to the hand, `.to({x, y}, at, dur)`,
  `.show/hide(at)`, `.head(t) → {x, y, r, top}`, `.hand(t)`, `.box(t)`.
- Pets (`dog cat owl crow`): `.pose()` with `S.petPoses` (stand walk run sit lie hide alert stare
  sleep growl), `.walkTo`, `.runTo`, `.face`, `.tremble`, `.eyes`. The owl blinks and looks around.
- The `visitor` has white eyes and a smile that slowly widens; give it `color: "transparent"` to
  show only the eyes in the dark (put it in `layer: "glow"` so a flashlight cone does not hide it).

## Stamps and overlays (screen space)

- `S.stamp(text, at, opts) → item` — the headline stamp. `*word*` (or `opts.key`) is the key word
  (red block). `opts`: `pos` (`top upper center lower bottom left right`), `x, y` (0–1), `size`
  (`xl lg md sm xs`), `color` (`mixed` default, `red`, `ink`, `yellow`), `maxWidth` (0–1), `lines`,
  `until`, `kicker`, `rot`, `shake` (camera shake on landing, default for lg/xl).
- `S.caption(text, at, { pos, x, y, size, color, until })` — small boxed caption, wipes in.
- `S.clockStamp("2:00 AM", at, { pos: "top-left"|"top-right"|"center", size, until })`;
  `S.countdown("1:58 AM", "2:00 AM", at, dur, opts)` — ticks between the two times.
- `S.ruleCard(n, text, at, { icon, forbidden, label, x, y, width, until })` — RULE n card.
- `S.badge(n, at, { x, y, size, color })`, `S.triangle(at, { x, y, size, until })` (warning
  triangle), `S.divider(at, { pos, horizontal })`.
- `S.arrowTo(target, at, { from, len, until, color, w })`, `S.ring(target, at, { pad, until })`,
  `S.mark("check"|"x", target, at, { size, x, y })`, `S.label(text, target, at, { x, y, from,
  size })` — `target` is a figure, an object, a world rect `{x,y,w,h}` or a stamp/clock item
  (screen space). Arrows and rings follow the camera.
- `S.cone(fig, { angle, spread, ambient, flicker, at, until }) → cone` — flashlight cone from the
  figure's hand in a dark room; `cone.aim(deg, at, dur)`, `cone.sweep(a0, a1, at, dur)`. Keep the
  holder in `layer: "front"` so it stays visible.
- `S.stinger(at, { pos: "face"|"full", stamp, key, hold, until })` — hard cut to black and the
  visitor's eyes, red flash, shake.
- `S.phoneUI({ kind: "call"|"message", from, time, at, ringAt, messages: [{text, me, at}], x, y,
  h })`, `S.checklist([{text, icon, at, checkAt, done}], { title, x, y, width })`.

## Timing helpers

- Land things on their word: stamps `V.at("word") - 0.1`, actions ~0.2 s early, pictogram pops
  ~0.3 s early. `S.syncAt(word, after, fallback, lead)`, `S.lineWindows(lines)`,
  `S.syncTimes(keys, opts)` (shared), `S.cursor()` / `S.wait(sec)`.

## Templates from code

`S.render(id, root, props)` renders a whole template scene: `S.render("rule-scene", root, {...})`,
`S.render("rule-card", root, {...})`, `S.render("do-dont", root, {...})`,
`S.render("room-at-night", root, {...})`, `S.render("countdown-clock", root, {...})`,
`S.render("object-warning", root, {...})`, `S.render("phone-screen", root, {...})`,
`S.render("checklist-protocol", root, {...})`, `S.render("stinger-reveal", root, {...})`,
`S.render("title-card", root, {...})`, `S.render("outcome-split", root, {...})`.

## Rules

- Draw everything with these functions; do not use `S.stage`, `S.title`, `S.card`, `S.kinetic` or
  the other shared slide components below — they look like slides, not safety signs.
- Black (or white) plus **one** red per scene; yellow only for warnings.
- Keep 7 % margins. Stamps shrink to fit `maxWidth` × `lines`; pictograms and figures do not — size
  them from `V.width` / `V.height` and check portrait (`V.isPortrait`) layouts.
