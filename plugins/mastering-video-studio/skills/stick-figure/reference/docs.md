# Stick Figure Doodle engine — custom-mode API (`S`)

Everything is SVG drawn with a wobbly pen: each stroke **draws on** over its time window, then holds
with a subtle line boil. You never fade or slide things in — you call drawing functions with an `at`
time and the engine animates them. All coordinates are **world pixels**; with the default camera
the world rect `(0, 0) – (V.width, V.height)` is the frame. Size from `V.width`, `V.height` and
`S.u(px)` (1080-based unit). Everything is a pure function of time.

Every drawing call takes `at` (seconds). Omit `at` and it starts right after the previous drawing
(auto-cursor). Most calls return an **item** `{ x, y, w, h, cx, cy, t0, t1, piece }` — its world
bounding box and draw interval — which you can pass to `S.arrow`, `S.label`, `S.circle`,
`S.underline`, `S.cross`, `S.box` or use for timing (`at: item.t1 + 0.1`). `item.piece.to({ x, y,
s, rot }, at, dur, ease)` moves a drawn thing (x/y = its centre for doodles), `item.piece.fade(0,
at, dur)` removes it.

```js
// Body of scene(V, S, root)
const W = V.width, H = V.height;
S.paper(root);
const pip = S.figure("pip", { x: W * 0.22, y: H * 0.9, h: H * 0.48, facing: "right", at: 0.1 });
pip.talk(0.2, V.duration).pose("point", V.at("idea") - 0.3);
const bulb = S.doodle("lightbulb", { x: W * 0.62, y: H * 0.45, size: H * 0.4, at: V.at("idea") - 0.5, accent: true });
S.label("still unpaid", bulb, { x: W * 0.86, y: H * 0.2, size: S.u(36), maxWidth: W * 0.2 });
```

## Paper & camera

- `S.paper(root, opts?) → scene` — call first. `opts.paper`: `"plain"` (default) | `"grid"` | `"lined"`;
  `opts.drift`: slow zoom-in over the scene (default 0.02, use 0 with a moving camera).
- `S.cameraTo({ cx, cy, z }, at, dur, ease?)` — move the camera to look at world point (cx, cy)
  with zoom z (1 = whole frame, 0.1 = ten times further out). Keyframes chain.
- `S.frameRect({ x, y, w, h }, at, dur, ease?, margin?)` — frame a world rect.
- Zooming out a lot? Draw the big things with `ws` (line weight) proportional to their size, e.g.
  `ws: size / V.height` for something that will fill the frame, so their lines stay visible.

## Figures

### `S.figure(name, opts) → figure`
`name` is a cast id: `pip` (hair tuft), `ada` (glasses + bun), `hank` (bowler hat), `juno`
(ponytail), `remy` (beret), `anon` (no features). `opts`: `x` (feet centre), `y` (ground line),
`h` (height, default 40 % of frame), `facing` (`"right" | "left" | "front"`), `pose`, `expr`, `at`
(draw-in start), `drawDur`, `layer`, `ws` (line weight). The figure draws itself on (head, body,
legs, arms, face) and then lives: breathing, blinking, idle sway.

Chainable methods (times in seconds):
- `.talk(t0, t1)` — mouth and head bob on every narration word inside the window.
- `.pose(name, at, dur?)` — `stand talk explain point point-up point-down shrug wave think panic
  celebrate sad facepalm hold crossed smug mind-blown sit crouch jump fallen listen present run`
  (`S.poses`). Poses snap in with a little overshoot; `panic` shakes, `wave` waves.
- `.expr(name, at)` — `neutral smile grin frown flat o surprised scream smirk worried angry dizzy sleepy`.
- `.face("left" | "right" | "front", at)`.
- `.walkTo(x, at, dur?)`, `.runTo(x, at, dur?)` — walk cycle; faces the direction of travel.
- `.jump(at, height?, dur?)` — crouch, leap, land. `.fall(at, dur?)` — falls over backwards and lies
  there; `.getUp(at)`.
- `.mark(kind, at, dur?)` — pops a mark by the head: `sweat exclaim question idea heart sparkle anger
  dizzy zzz motion` (`S.marks`).
- `.say(text, opts) → item` — floating speech text with a tail line to the head (webcomic style);
  `opts`: `x, y` (text centre), `maxWidth, size, maxLines, at, until` (fade out), `style: "bubble"`.
- `.think(rect, opts) → inner rect` — a thought cloud grows out of the head to fill `rect`
  `{x,y,w,h}`; returns the usable inner box (`x, y, w, h, cx, cy, t1`) for text and doodles.
- `.hold(item, "a" | "b")` — the item follows that hand from now on.
- `.out(at, dur?)` — fade the figure away.
- Geometry at time t: `.head(t) → {x, y, r, top}`, `.hand(t, "a"|"b") → {x, y}`, `.box(t)`.

## Drawing

- `S.doodle(name, opts) → item` — library doodle centred at `(x, y)`, `size` = box width/height.
  `opts`: `x, y, size, at, dur, speed, accent` (highlight strokes/fills in the accent colour),
  `color, rot, flip, layer, ws`. **Library (73):** lightbulb, question, exclamation, coin, money,
  clock, globe, sun, moon, star, cloud, rain, house, building, tree, mountain, rocket, phone, laptop,
  book, heart, atom, gear, chart, chart-down, chart-pie, arrow, flag, coffee, box, ball, car, ant,
  cat, fish, whale, cell, virus, galaxy, planet, bomb, cake, chair, door, ladder, key, magnifier,
  rock, trophy, brain, dna, apple, fire, lightning, eye, person, crowd, warning, calendar, battery,
  robot, pizza, dinosaur, plane, pencil, hourglass, money-bag, target, ufo, document, scale, dog,
  tooth. Synonyms work (`idea`, `earth`, `universe`, `ai`…); `S.doodles`, `S.hasDoodle(n)`,
  `S.pickDoodle(text)`.
- `S.write(text, opts) → item` — hand-lettered text written left to right. `opts`: `x, y`,
  `anchor` (`center` default, `left`, `right`, `top`, `top-left`, `bottom`…), `align`, `size`
  (default `S.u(54)`), `maxWidth`, `maxLines` (default 3 — text shrinks to fit), `color`
  (`ink | accent | muted` or hex), `em` (colour of `*emphasis*`, default accent), `at, dur, speed`,
  `rot` (degrees), `caps`, `until`, `layer` (`"hud"` = fixed to the screen, ignores the camera).
- `S.scribble(points, opts) → item` — any hand-drawn polyline/curve through `[[x,y],…]`. `opts`:
  `at, dur, color, width, closed, sharp, fill, hatch` (zig-zag hatching colour), `wobble`.
- `S.line(x1, y1, x2, y2, opts)`, `S.ground(x0, x1, y, opts)` (scribbled floor line).
- `S.panel(x, y, w, h, opts)` — a comic panel border.

## Annotations

- `S.arrow(from, to, opts) → item` — curved hand-drawn arrow between items or `{x, y}` points (stops
  at the items' edges). `opts`: `at, dur, color, w, bend` (−1…1), `head`, `pad`.
- `S.label(text, target, opts)` — text at `opts.x, opts.y` plus an arrow to `target`.
- `S.youAreHere(x, y, opts)` — accent dot + "YOU ARE HERE" (or `opts.text`) + arrow. `dx`, `dy`
  (−1…1) choose where the text sits.
- `S.circle(target, opts)` (accent scribbled ellipse), `S.underline(target, { double })`,
  `S.cross(target, { strike })` (X or strike-through in accent), `S.box(target)`.

## Graphs

`S.graph(opts) → { pts:[{x,y,v}], ox, oy, pw, ph, t1 }` — hand-drawn axes with arrowheads, rotated
axis titles, a wobbly line or hatched bars, category labels and annotations. `opts`: `x, y, w, h`
(whole box incl. labels), `type` (`line | bar`), `values`, `labels`, `xLabel`, `yLabel`, `caps`,
`highlight` (index, accent), `annotations` `[{index, text, at}]`, `at` (axes), `dataAt`, `dataDur`,
`accent` (draw the line in accent). Use `pts[i]` to point arrows or figures at data.

## Timing helpers

- Land drawings on their word: `at: V.at("rocket") - 0.5` (doodles need ~0.5 s), text ~0.2 s early.
- `S.syncAt(word, after, fallback, lead)`, `S.lineWindows(lines)` → `[{start, end}]` speech windows
  for lines that appear in the narration, `S.syncTimes(keys, opts)` (shared).
- `S.cursor()` / `S.wait(sec)` — the auto-cursor used when `at` is omitted.

## Templates from code

`S.render(id, root, props)` renders a whole template scene: `S.render("figure-explains", root,
{...})`, `S.render("conversation", root, {...})`, `S.render("hand-drawn-graph", root, {...})`,
`S.render("scale-comparison", root, {...})` — or `labelled-diagram`, `what-if`,
`list-with-doodles`, `thought-experiment`, `title-card`, `timeline-squiggle`, `versus`.

## Rules

- Draw everything with these functions; do not use `S.stage`, `S.title`, `S.card`, `S.kinetic` or
  other shared slide components listed below — they look like slides, not a hand-drawn comic.
- Black ink plus **one** accent; use `*emphasis*` or `accent: true` for the single key thing.
- Keep 7 % margins. Text shrinks to fit `maxWidth` × `maxLines`; doodles and figures do not —
  size them from `V.width` / `V.height` and check portrait (`V.isPortrait`) layouts.
