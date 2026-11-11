# Whiteboard Animation engine — custom-mode API (`S`)

A realistic hand holding a marker draws **everything** on a whiteboard in real time. You never
animate opacity or slide things in: you call drawing functions, and the engine schedules the
strokes, moves the hand along the exact pen path, lifts it between strokes, scribbles colour in
after outlines, and walks the hand off-frame when it has nothing to draw.

All coordinates are **board pixels**. At the start the camera shows the board rect
`(0, 0) – (V.width, V.height)`; pan elsewhere with `S.panTo` / `S.view`. Size everything from
`V.width`, `V.height` and `V.s(px)` / `S.u(px)` (1080-based unit).

Every drawing call takes `at` (seconds). Omit `at` and it starts right after the previous drawing
(`+gap`, default 0.15 s) — like a VideoScribe timeline. **There is only one hand**: if two drawings
overlap in time, the later one waits until the hand is free. Every call returns an **item**:
`{ x, y, w, h, cx, cy, t0, t1, end, g }` — its board bounding box and its draw interval, which you
can pass to `S.arrow`, `S.circle`, `S.underline`, `S.box`, `S.view` and use for timing (`at: item.t1 + 0.1`).

```js
// Body of scene(V, S, root)
const W = V.width, H = V.height;
S.board(root, { hand: "medium" });
const bulb = S.doodle("lightbulb", { x: W * 0.3, y: H * 0.45, size: H * 0.5, at: V.at("idea") - 0.4 });
const txt = S.write("Ideas need *action*", { x: W * 0.68, y: H * 0.42, size: S.u(80), maxWidth: W * 0.5, at: V.at("action") - 0.6 });
S.arrow(bulb, txt, { bend: -0.3 });
S.underline(txt, { double: true });
```

## Board

### `S.board(root, opts?) → board`
Creates the whiteboard and the hand. Call it first (template-less scenes auto-create one on the
first drawing call). `opts`:
- `hand`: `"light" | "medium" | "tan" | "brown" | "dark"` — skin tone of the hand (default light). Keep it the same across a video.
- `sleeve`: CSS colour of the shirt sleeve (default navy `#34405A`).
- `paper`: `"white"` (default) | `"cream"` | `"grid"` (faint blue squares).
- `handScale`: hand size multiplier (default 1).
- `drift`: slow camera zoom-in over the scene, e.g. `0.03` (default 0).

## Drawing

### `S.doodle(name, opts) → item`
Draws a library doodle centred at `(x, y)`: outline strokes first, then colour scribbled in.
`opts`: `x, y` (centre, default frame centre) · `size` (box width in px, default `S.u(260)`) · `at` ·
`dur` (outline + colour time; default from stroke length, 0.6–4 s) · `speed` (multiplier) ·
`color` (replaces the main fill colour: `red blue green orange yellow purple pink teal brown grey sky` or hex) ·
`ink` (outline colour, default black) · `fill: false` (outline only) · `fillDur` · `rot` (degrees) · `flip` (mirror) · `weight` (line weight ×).
Doodles are drawn in a 100×100 box, so the bounding box is ≈ `size` × `size`.

**Library (97):** lightbulb, brain, coins, money, money-bag, piggybank, house, globe, clock, rocket,
heart, gears, chart-up, chart-down, chart-pie, magnifier, phone, laptop, book, trophy, target, mountain,
tree, sun, cloud, cloud-rain, car, factory, thought-bubble, speech-bubble, star, check, cross, warning,
question-mark, exclamation, battery, shield, key, lock, gift, calendar, map-pin, handshake, plant,
hourglass, flag, megaphone, envelope, atom, document, puzzle, scale, pencil, coffee, airplane, team,
cart, eye, water-drop, fire, lightning, graduation-cap, dna, thumbs-up, robot, crown, city, truck,
umbrella, wifi, arrow-right, arrow-up, arrow-down, light-switch, seedling,
stick figures `stick-stand, stick-wave, stick-walk, stick-run, stick-cheer, stick-think, stick-point,
stick-sit, stick-sad, stick-shrug, stick-jump, stick-worried`, sketch portraits `face-happy, face-sad,
face-surprised, face-worried, face-angry, face-woman, face-woman-bun, face-man, face-professor`.
Common synonyms work (`idea`, `money`, `growth`, `home`, `goal`, `ai`, `person`…). `S.doodles` lists
every name; `S.hasDoodle(name)`; `S.pickDoodle(text)` returns the best doodle for a phrase.

### `S.figure(pose, opts) → item`
Stick figure: `pose` is one of `S.poses` (`stand wave walk run cheer think point sit sad shrug jump worried`).
Same opts as `S.doodle` (`size` = figure height). `flip: true` makes it face left.

### `S.write(text, opts) → item`
Hand-letters text glyph by glyph with a single-stroke handwriting font (A–Z, a–z, 0–9, punctuation,
accents; other scripts fall back to a marker-style system font revealed under the hand).
`opts`: `x, y` · `anchor`: `"center"` (default: x,y is the block centre) | `"left"` (x = left edge,
y = vertical centre) | `"top-left"` · `align`: `"center" | "left" | "right"` · `size` (cap height px,
default `S.u(64)`) · `maxWidth` (default 80 % of width) · `maxLines` (default 3; text shrinks to fit) ·
`color` (default black) · `em` (colour for `*emphasis*` words, default red) · `at` · `dur` · `speed` ·
`weight` (stroke width as a fraction of size, default 0.085) · `lineHeight` (default 1.6).
Wrap words in `*asterisks*` to write them in the emphasis colour. `\n` forces a line break.
`S.measureText(text, size)` → width in px of a single line.

### `S.path(d, opts) → item` · `S.line(x1, y1, x2, y2, opts) → item`
Draw any SVG path (board coordinates; every subpath is one pen stroke) by hand.
`opts`: `at, dur, speed, color, width` (default `S.u(5)`), `wobble` (hand jitter in px, `0` = exact).

### `S.fill(d, color, opts) → item`
Scribble marker colour into any closed path (clipped to it), e.g. after drawing a shape with `S.path`.
`opts`: `at, dur, spacing, opacity, behind` (default true: placed under earlier lines).

## Emphasis & connections

- `S.arrow(from, to, opts)` — curved hand-drawn arrow between two items (or `{x, y}` points). Starts/ends at the items' edges. `opts`: `at, dur, color, width, bend` (−1…1, default 0.2; 0 = straight), `head` (default true), `pad`.
- `S.circle(target, opts)` — scribbled red ellipse around an item/rect. `opts`: `at, dur, color, pad, width`.
- `S.underline(target, opts)` — red marker underline; `double: true` for two strokes.
- `S.box(target, opts)` — sketchy blue rectangle around an item.

## Camera & board behaviours

- `S.panTo(x, y, { zoom = 1, at, dur = 1.1 })` — glide the camera so board point `(x, y)` is centred. The hand keeps drawing during pans, so draw the connecting arrow while panning.
- `S.view(rectOrItem, { at, dur, pad = 0.12 })` — fit a board rect (e.g. everything drawn so far) into the frame: the classic "pull back to reveal the whole board".
- `S.camera(t)` → `{ x, y, z }` camera state at time t.
- `S.erase({ at, dur = 1.3, area })` — the hand picks up an eraser and wipes the visible board clean (a faint ghost stays, like a real whiteboard). Drawings made after the erase land on a fresh layer.
- `S.dragIn(name, { x, y, size, at, dur = 0.9, from: "right" | "left" | "bottom", color })` — the hand slides a finished, coloured doodle in from off-board and lets go.

## Timing helpers

- `S.wait(sec)` — push the auto-cursor (the next drawing without `at` starts later).
- `S.cursor()` / `S.setCursor(t)` — read / set the auto-cursor.
- Land drawings on their word: `at: V.at("rocket") - 0.4` (doodles need ~0.4 s to become recognisable; text ~0.2 s).
- `S.syncTimes(keys, opts)` (shared helper) resolves a list of words to ordered start times.

## Colours

`S.ink` = `{ black, blue, red, green, orange, yellow, purple, brown, grey, pink, teal, sky }` marker
colours; any of those names (or a hex) is accepted wherever a colour is asked for.
`S.colorOf(name)` resolves a name. `S.color(i)` cycles blue, red, green, orange, purple, teal.

## Rules

- Draw everything with these functions — never fade, slide or scale elements in; never use HTML text.
- Do not use `S.stage`, `S.title`, `S.card` and the other shared slide components below in this
  style: they look like slides, not a whiteboard.
- Keep 7 % margins; text auto-shrinks to `maxWidth` × `maxLines`, doodles do not — size them from `V.width/V.height`.
- Keep the total amount of drawing realistic for the scene length: roughly one doodle (≈1–2 s) or one short line of text (≈1 s) per spoken phrase.
