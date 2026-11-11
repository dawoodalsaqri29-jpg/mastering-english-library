# Storybook Watercolor — art direction

This style is a **painted children's picture-book**. Every scene is a page of a storybook:
cream deckled paper, soft watercolor washes that bloom in and bleed at the edges, pen-and-wash
characters with wobbly pencil outlines, and text set like a book page in a warm serif. It must
feel gentle, handmade and read-aloud — never like a slide deck. Motion is slow and soft: washes
bloom, things paint themselves on (pencil first, then colour soaks in), characters fade in,
breathe, blink and talk, the camera drifts in slow parallax, and pages turn between scenes.
Fireflies, leaves, petals and stars drift in the background.

## Choosing a template

| Narration beat | Template |
|---|---|
| Storytelling, explaining, a character's moment (default) | `story-page` |
| Opening of the video or of a chapter | `title-page` |
| Two characters talk / question and answer | `character-dialogue` |
| A journey, route, quest, places, a process as a trip | `map-of-the-land` |
| Naming 1–6 things (ingredients, reasons, tips, a collection) | `list-of-things` |
| Comparison: before/after, then/now, myth/truth, two choices | `two-pages` |
| One striking number or fact | `number-painting` |
| History, sequence, steps, stages over time | `winding-path` |
| A quotation, proverb or line from a letter | `quote-page` |
| Wishes, imagination, bedtime, "what if", goals | `dream-sequence` |
| The ending, the moral, the takeaway | `the-end` |

Vary templates between consecutive scenes; `story-page` can recur (change the location, the
companion and the gesture). Avoid more than two text-heavy templates in a row (`quote-page`,
`number-painting`, `two-pages`) — bring a character back on a `story-page` or `character-dialogue`.

## Recurring cast & locations (continuity!)

The cast is fixed — never invent new characters, and the same name always looks identical:

| id | who | good for |
|---|---|---|
| `wren` | curious girl, mustard raincoat, red scarf | the default hero / viewer stand-in, asks questions |
| `oli` | cheerful boy, blue striped jumper | the friend, counts and discovers things |
| `nana` | grandmother, silver bun, spectacles, sage shawl | the wise narrator who explains |
| `rusty` | clever fox, moss waistcoat | the guide, tricks and shortcuts |
| `bramble` | big gentle bear, red scarf | kindness, comfort, food, sleep |
| `pippin` | shy little rabbit, rose dungarees | small and brave, journeys |
| `sage` | wise old owl | facts, science, night-time knowledge |

- Pick a **hero** (usually `wren`) and a **narrator/mentor** (usually `nana` or `sage`) in the
  first scene and keep them for the whole video. Animals are companions; keep each one's role.
- Locations: `forest`, `village`, `meadow`, `seaside`, `night-sky`, `cottage` (interior),
  `mountains`. A chapter lives in one or two places — reuse the same location for consecutive
  scenes in the same place and change it only when the story moves. `time` (`day`, `dusk`,
  `night`) should progress naturally (don't flip day/night between neighbouring scenes).
- The hero faces right on the left; a listener stands on the right facing left.

## Writing props

- `text` on a story page is the narration of that scene (or its key sentences), max ~45 words —
  it is read along as it is spoken, so keep the narration's wording. Mark one key word `*word*`.
- Dialogue `lines` must be the narration's own words, in order.
- Labels 1–4 words, notes ≤ 8 words, titles ≤ 7 words. Give `keyword`s that really occur in the
  narration so things paint on as they are said.
- Objects: use the painted object names (`apple acorn mushroom leaf flower tree pine forest house
  castle tower lighthouse windmill bridge well mountain boat star moon sun cloud rainbow heart book
  key lantern candle teacup cake bread honey basket umbrella feather shell fish bird butterfly crown
  gift clock letter map compass egg carrot berries seed snowflake tent cave lake village`).
- Tone of the words: warm, simple, storybook ("Once, in a little village…"), not corporate.

## Custom mode rules

- Start with `const b = S.book(root)` (page turn + paper), then `S.painting({...})` for the
  scene, `S.character(name, {...})` for the cast, `S.pageText(...)` / `S.bubble(...)` for words.
- Animate gently: blooms, paint-ons (`.paintOn(at)`), fades and slow drifts. No fast pops, no
  bounces, no glows/neon, no flat UI cards, no hard drop shadows. Colours come from `S.colors`
  (warm, muted, watercolor) — no saturated pure hues.
- Keep something softly alive at every moment of speech: a talking character, ambient life in
  the painting (it has its own), or objects painting on at their key words (`V.at(w) - 0.2`).
- Text is book type (`S.pageText`, `S.label`, `S.bubble`) inside 6–8 % safe margins. In 9:16
  put the painting on top and the text below; in 16:9 put the text beside the painting.
