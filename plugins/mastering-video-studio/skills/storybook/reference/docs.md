# Storybook Watercolor engine — custom-mode API (`S`)

Everything is a painted picture-book page. Locations are painted procedurally in watercolor
(layered translucent washes with soft bleeding edges and paper grain) into canvases at build
time; characters and objects are pen-and-wash SVG. All sizes/positions are **px** in the frame
(`V.width × V.height`); use `V.s(n)` for sizes. Animation is gentle: use `.paintOn()`, `.bloom()`,
`.enter()`, `b.tl` (a `V.timeline()`) fades, and `S.onFrame` — all pure functions of time.

## Skeleton

```js
const b = S.book(root);                                   // paper page + page turn at t=0
const pt = S.painting({ location: "meadow", time: "day", x: 0, y: 0, w: V.width * 0.62, h: V.height });
const wren = S.character("wren", { x: pt.x + pt.w * 0.4, y: pt.ground(0.4), height: pt.h * 0.6 });
wren.enter(0.5).talk();                                   // fades in, lip-syncs to V.words
wren.gesture(V.at("look") - 0.2, "point");
const txt = S.pageText("Look, said *Wren*, the first flowers of spring!", { x: V.width * 0.66, y: V.height * 0.2, w: V.width * 0.3, h: V.height * 0.6, dropCap: true });
txt.show(0.4).speak(0.3);                                 // words ink in as they are spoken
S.object("flower", { x: V.width * 0.5, y: V.height * 0.7, size: V.s(140) }).paintOn(V.at("flowers") - 0.2);
```

## Page & painting

| Call | Does |
|---|---|
| `S.book(root, { turn = true })` | Creates the book page (paper texture, aged deckled edges, grain over the paint) and, unless `turn: false`, a page turn at t=0. Returns `b` with layers `back, mid, cast, front, text, fx, top` and `b.tl` (a timeline). Call once, first. |
| `S.stage(root)` | Compatibility: the book page + a padded flex column (`.v-stage`) in the text layer, so shared helpers (`S.title`, `S.text`, …) work in book serif. Prefer the storybook calls. |
| `S.painting({ location, time?, x, y, w, h, edge?, bloom?, bloomDur?, pan?, ambient?, seed? })` | Paints a location into the region. `location`: `forest village meadow seaside night-sky cottage mountains`. `time`: `day dusk night`. `edge`: `"soft"` (vignetted watercolor edges, default), `"none"`, or the soft sides e.g. `"b"`, `"tb"`. Blooms in at `bloom` (s). Slow parallax pan; built-in ambient life (clouds, birds, smoke, leaves, butterflies, fireflies, twinkling stars, fire flicker, boats…). Returns `{ el, x, y, w, h, groundY, ground(fx), bloom(at, dur) }` — `ground(fx)` is the floor line (px) at horizontal fraction `fx` of the painting: stand characters on it. |
| `S.pageTurn(at = 0, dur)` | A page lifts from the right and turns over to the left. |
| `S.wash({ x, y, w, h, color, shape: "blob"|"oval"|"rect"|"cloud", alpha?, solid?, pencil?, parent? })` | A loose watercolor wash (canvas). `.bloom(at, dur)`. Great behind objects/numbers. |
| `S.colors` | Palette: `paper cream ink terracotta rust rose blush ochre honey butter gold sage moss leaf spring forest pine sky skyLt blue sea teal navy night indigo plum lilac violet brown bark wood sand stone slate snow`. |
| `S.locationNames`, `S.cast`, `S.gestures`, `S.objectNames` | Valid names. |

Layers (bottom→top): `back` (paintings), `mid`, `cast` (characters), `front`, `text`, `fx`
(particles), paper grain, `top` (bubbles, page turn).

## Characters (recurring cast)

`S.character(name, { x, y (feet px), height (px of a 300-unit adult — children/animals are smaller), face: 1 | -1, parent? })`.
Cast: `wren` (girl, mustard raincoat), `oli` (boy, striped jumper), `nana` (grandmother), `rusty` (fox),
`bramble` (bear), `pippin` (rabbit), `sage` (owl). Same `height` for everyone keeps true relative sizes.

| Method | Does |
|---|---|
| `.enter(at, how?, dur?)` | `"fade"` (default, soft rise), `"paint"` (pencil draws, washes soak in), `"walk-left"` / `"walk-right"` (walks in from that side). |
| `.exit(at, how?)` | `"fade"`, `"walk-left"`, `"walk-right"`. |
| `.talk(from?, to?)` | Lip-sync (5 mouth shapes / beak) on spoken words in the window + head bob. Call once per speaking window. |
| `.gesture(at, kind, dur?)` | `wave point present open cheer think shrug hold heart nod wonder` — eases in and back out. |
| `.pose(at, kind)` | Hold a pose from `at` on (e.g. `"wonder"` looking up at the stars). |
| `.look(at, dx, dy?)` | Eyes: −1…1 left/right, −1 up … 1 down. Blinks automatically. |
| `.walkTo(at, x, dur?)` | Gentle walk (leg swing + bob) to absolute x. `.turn(at, dir)` flips facing. |
| `.headTop()`, `.headCenter()` | Frame px of the head (for bubble tails). `.el` the element. |

## Words on the page

| Call | Does |
|---|---|
| `S.pageText(text, { x, y, w, h, size?, align?, italic?, dropCap?: true \| "illuminated", color?, valign?: "top"\|"center"\|"bottom" })` | Book-set serif text that auto-fits its box. `*word*` = rust italic with a painted wash swiped under it when spoken. Returns `{ el, words, show(at, dur), speak(from, to, { dim }) }` — `speak` inks each word in as it is spoken. |
| `S.bubble(text, { cx, bottom, maxW, tail: { x, y }, kind: "speech"\|"thought", from, to, size? })` | Painted speech/thought cloud (centred on `cx`, its bottom at `bottom`), tail pointing at `tail`; appears at `from`, words ink in, fades at `to`. |
| `S.label(text, { x, y, w, size, align })` | Small-caps line (chapter titles, captions). |
| `S.ornament("fleuron" \| "corner", { x, y, w, flip?, parent? })` | Pencil-and-wash fleuron divider or corner vine flourish; `.paintOn(at)`. |
| `S.lineWindows(lines)` | `[{start, end}]` timing windows for narration lines (for dialogue). |

## Painted objects & ambient life

| Call | Does |
|---|---|
| `S.object(name, { x, y, size, rotate?, parent? })` | Pen-and-wash object centred at x, y. Names in `S.objectNames` (apple acorn mushroom leaf flower tulip tree pine forest house castle tower lighthouse windmill bridge well mountain boat star moon sun cloud rainbow heart book key lantern candle teacup cake bread honey basket umbrella feather shell fish bird butterfly crown gift clock letter map compass egg carrot berries seed snowflake tent cave lake village); other words → a pencilled icon on a wash. Methods: `.paintOn(at, dur)`, `.fadeIn(at)`, `.bob(amp, speed)`, `.out(at)`. |
| `S.fireflies({ x, y, w, h, n })`, `S.leaves({ x, y, w, h, n, kind: "leaf"\|"petal"\|"seed"\|"snow" })`, `S.twinkles({ x, y, w, h, n, color })` | Drifting glowing motes, falling leaves/petals, twinkling stars. |
| `S.paintOn(svgOrObject, at, dur)` | Paint-on any SVG built from `S.washMarkup(points, color)` / `S.penMarkup(points)`. |
| `S.onFrame(fn(t))`, `S.tl()` | Per-frame hook / the book's timeline. |

## Templates

`S.render("story-page", root, props)` and the other ids in the catalog (`title-page`,
`character-dialogue`, `map-of-the-land`, `list-of-things`, `two-pages`, `number-painting`,
`winding-path`, `quote-page`, `dream-sequence`, `the-end`) render a whole page.
