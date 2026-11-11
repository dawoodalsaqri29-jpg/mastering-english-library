# Cartoon Characters engine — custom-mode API

Everything below lives on `S`. World coordinates: the frame is **1000 units tall** and
`sc.Ww = 1000 × width / height` units wide (1778 landscape, 1000 square, 562 portrait). x grows
right, y grows **down**; characters stand with their feet on `sc.G` (ground line, ≈ 880–905).
Use `sc.slots(n)` for good character positions. Times are seconds — get them from `V.at("word")`.

```js
const sc = S.scene("office");                       // location; also S.scene({ location, span, color })
const [x1, x2] = sc.slots(2);
const leo = S.character("leo", { x: x1, facing: "right", expression: "worried" });
const priya = S.character("priya", { x: x2, facing: "left" });
const t = V.at("cache");
S.bubble(leo, "Why is my code so slow?", 0.3, t - 0.4);   // speaker lip-syncs automatically
S.bubble(priya, "Add a *cache*!", t - 0.1, t + 1.6);
priya.pose("point-up", t).expression("excited", t).emote("idea", t + 0.1);
leo.pose("facepalm", t + 0.4).emote("sweat", t + 0.5);
S.camera().focus(priya, t - 0.3, 0.6, 1.35).shake(t, 10, 0.4);
```

## Scene
`S.scene(location, opts?)` → Scene (becomes the current scene; build it first).
- `location`: `living-room | office | classroom | city-street | park | lab | space | market | stage`.
- `opts`: `{ span: 1 }` world width in screens (use 3–8 for long walks), `color` (stage only, hex),
  `charScale` (default 1 landscape / 0.9 square / 0.86 portrait), `ground` (y).
- Scene fields: `sc.Ww`, `sc.G`, `sc.portrait`, `sc.square`, `sc.slots(n, spread?)`, `sc.cam`,
  `sc.toScreen(x, y)` (world → px), `sc.onFrame(t => …)`, `sc.html` (world-space HTML layer),
  `sc.overlay` (screen-space HTML layer).
- `S.currentScene()` returns it later.

## Characters
`S.character(name, opts?)` → Actor. Names: `maya, leo, priya, sam, bolt` (robot), `kai` (kid).
`opts`: `{ x, y, scale, facing: "right"|"left"|"front", pose, expression, gestures: true }`.

All actor methods return the actor (chainable). `at` = start time (s).
- `.pose(name, at, dur = 0.45, ease = "pose")` — smooth eased transition with anticipation/overshoot.
  Poses: `idle, talk, explain, wave, point, point-up, point-down, point-viewer, think, shrug,
  celebrate, jump, facepalm, present, open-arms, arms-crossed, hands-hips, hold, hold-up, phone,
  type, sad, scared, surprised, fist-pump, sit (adds a stool), nod, headshake, bow, lean-in, dance,
  walk, run`. `point` points the way the character faces.
- `.expression(name, at, dur = 0.25)` — `neutral, happy, excited, sad, surprised, angry, worried,
  skeptical, thinking, smug, laughing, determined, love, sleepy, disgusted`.
- `.say(from, to, text?)` — lip-sync window. Mouth shapes come from `V.words` inside the window
  (vowel-based visemes per syllable, closed between words); without timings a natural rhythm is
  synthesised. Talking also adds head bobs and beat gestures. `S.narrate(actor, from?, to?)` makes
  the actor speak every narration phrase in a range (mouth rests in pauses).
- `.moveTo(x, at, dur = 1.2, { gait: "walk"|"run"|"hop", ease })` — walk cycle, auto-turns toward
  the destination. Also `.walkTo/.runTo/.hopTo(x, at, dur)`.
- `.enter("left"|"right", at, dur = 1.4, x?)`, `.exit("left"|"right", at, dur = 1.3)` — walk in/out of frame.
- `.face("left"|"right"|"front", at)` — turn (3/4 view ↔ front).
- `.lookAt(target, at)` — target: another actor, `{x, y}`, a world x, or `"camera"|"up"|"down"|"left"|"right"|"auto"`.
- `.hold(prop, at, until?, { hand: "R"|"L", size: 0.78 })` — prop attached to the hand.
- `.emote(mark, at, dur = 1.6)` — emotion mark over the head: `sweat, sparkle, question, exclaim,
  anger, heart, idea, dizzy, music, tears, zzz, shock`.
- `.beats([{ word, at?, pose?, expression?, mark?, look?, face? }], { after })` — acting beats synced to words.
- `.show(at)`, `.hide(at)`; fields: `.x0` (start x), `.scale`, `.anchor` (per-frame world anchors:
  `head, top, mouth, handL, handR, feet`).

## Comic elements
- `S.bubble(actor, text, from, to, { kind: "speech"|"thought"|"shout", side, maxWidth, maxLines, icon, hold })`
  — pops above the speaker with a tail to the mouth, avoids other heads, words light up as spoken
  (karaoke). Speech/shout bubbles make the actor talk. `S.thought(actor, text, from, to)` and
  `S.shout(...)` are shortcuts.
- `S.dialogue([actorA, actorB], [{ speaker: 0|1|name, text, expression?, pose?, mark?, kind? }])`
  → timing windows. Finds each line in `V.words`, adds bubbles, lip-sync, listener nods and looks.
- `S.lines(["line 1", …])` → `[{ start, end, found }]` windows for lines in the narration.
- `S.mark(actor, kind, at, dur)` — same as `actor.emote`.
- `S.burst(x, y, at, { r, count, color, width })` — radiating comic impact lines (world coords).
- `S.motionLines(actor, from, to)` — speed lines trailing a moving actor.
- `S.sticker(text, at, { x: 0.5, y: 0.2, size: "sm"|"md"|"lg"|"xl", kicker, icon, color, rot, until, maxWidth })`
  — chunky tilted key-text card in screen space (x/y are 0–1 fractions of the frame). `*word*` highlights.
- `S.captions({ text?, top?, chunk? })` — lower-third kinetic captions from `V.words`.

## Props & boards
- `S.prop(name, { x, y, size = 1.2, at, until, float, spin, front })` — world prop that pops in.
  Props (`S.propNames`): `laptop, phone, coffee, book, money, coin, lightbulb, globe, rocket, clock,
  trophy, magnifier, briefcase, megaphone, gift, heart, star, pizza, plant, calendar, piggy-bank, key,
  chart, target, warning, house, car, brain, flag, battery, water, fire, question, check, cross, lock,
  robot, map, shield`. `S.propIcon(name, px)` returns an inline `<svg>` string for HTML.
- `S.board({ x, y, w, h, kind: "whiteboard"|"screen"|"chalk", title, at })` → Board (world space,
  defaults suit the location). Fill it with one of:
  `B.list(items, times?)`, `B.bars([{ label, value, display?, color? }], times?)`,
  `B.line(points, at, caption?)`, `B.big(text, at, sub?)`, `B.icon(prop, caption, at)`.
  `B.target(i)` → world point of item i (for `lookAt`), `B.el` is the DOM node.

## Camera
`const cam = S.camera();` (all chainable)
- `cam.set({ x, y, zoom })` — starting framing (default centre, zoom 1).
- `cam.to({ x, y, zoom } | { actor, zoom, dx, dy, focusY }, at, dur = 1, ease = "inOutCubic")` — eased move.
- `cam.cut(target, at)` — instant cut. `cam.push(zoom, at, dur = 1.6)` — slow push-in.
- `cam.focus(actor, at, dur = 0.9, zoom = 1.35, { dx, dy, focusY })` — frame a character
  (`dx` shifts the frame in world units, e.g. to leave room for a sticker).
- `cam.follow(actor, from, to, { zoom, lead })` — track a walking character (smoothed).
- `cam.shake(at, amp = 14, dur = 0.45)` — impact shake.
- Parallax is automatic: backgrounds move slower than the characters; a subtle handheld drift is always on.

## Easing extras
`S.cartoonEase.pose` (anticipation + overshoot), `.snap` (strong overshoot pop), `.soft`.
Any `V.ease` name also works.

## Rules
- Build everything synchronously, schedule with times — never timers.
- Keep text short; let the characters carry the scene. Clamp times inside `V.duration`.
