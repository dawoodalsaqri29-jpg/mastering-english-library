# Style skill: Pixel Quest

The whole video is an **original 16-bit video game**. Every scene is a moment of play: a
title screen, a side-scrolling level, an RPG cutscene, a boss fight, a menu. Nothing looks
like a slide — facts are *power-ups the hero grabs*, problems are *bosses and enemies*,
lists are *inventories and quest logs*, chapters are *stages on a world map*, takeaways are
*LEVEL UP!* screens. Narration is the game's story text.

## The look (automatic — don't fight it)
- One low-res canvas (≈320×180 logical pixels at 16:9, 180×320 at 9:16, 180×180 at 1:1),
  integer-scaled with hard pixel edges, faint scanlines. Limited palette, dithered skies,
  parallax layers, hand-made bitmap font, RPG windows with bevelled borders.
- Motion is game feel: walk cycles, jumps, coin pops, "+100", screen shake, white hit
  flashes, pixel explosions, blinking cursors, typewriter text. Characters' mouths move
  while their line is spoken.
- Text lives in game UI: HUD, ITEM GET! toasts, dialogue boxes, menus. Keep labels SHORT
  (1–5 words); long sentences belong in `dialogue` lines or item descriptions.

## Recurring cast (keep them consistent for the whole video)
| id | who | use as |
|---|---|---|
| `kit` | the hero — orange hair, yellow bandana, red scarf, blue tunic | the viewer's avatar; default player in every template |
| `orla` | Sage Orla, wizard mentor with star hat and staff | explains, asks questions, narrates (fallback narrator) |
| `bolt` | Bolt, small hovering robot companion | tech facts, sidekick, comic relief |
| `vex` | Vex, rival with red cape | the opposing view, competition, "what not to do" |
| `mo` | Mo, merchant with green cap and mustache | money, trading, shopping, everyday folks |

Pick one hero for the video (normally `kit`) and keep it. Orla stays the mentor, Vex stays
the rival. Never invent new named characters in custom code — use the cast, enemies
(`slime`, `bat`, `spike`, `ghost`, `bugbot`) and bosses (`blob`, `golem`, `eye`).

## Worlds (named locations)
`grassland` (Green Hills), `cave` (Crystal Cave), `city` (Neon City), `castle` (Moon
Castle), `space` (Orbit Station), `underwater` (Coral Deep). Give each chapter a world
that fits its topic and **stay in that world for the chapter's scenes** (progression:
grassland → cave → city → castle → space, like real game worlds). Use the HUD level name
as a running chapter label, e.g. `WORLD 2-3 ENZYMES`.

## Choosing a template
| Narration does… | Template |
|---|---|
| Opens the video / a big part | `title-screen` |
| Explains 2–6 facts, steps, ingredients, causes | `level-walk` (one item per fact, grabbed on its keyword) — the workhorse |
| A conversation, a question + answer, a quote, a definition | `dialogue` |
| Problem vs. solution(s), overcoming an obstacle | `boss-battle` (boss = the problem, moves = solutions) |
| A list of tools / features / resources | `inventory` |
| Chapters, a timeline, a journey, a roadmap | `world-map` |
| Key takeaways, results, before → after numbers | `level-up` |
| Comparing options, pros/cons, a decision | `choice-menu` |
| A checklist / plan / to-do / routine | `quest-log` |
| Mistakes, pitfalls, myths, warnings + the right way | `game-over` |
| Comparing quantities | `pixel-chart` |
| Rankings, records, top-N | `high-scores` |

Vary templates: never use the same one more than twice in a row; alternate "play"
scenes (`level-walk`, `boss-battle`, `game-over`) with "menu" scenes (`inventory`,
`quest-log`, `level-up`, `choice-menu`) and cutscenes (`dialogue`).

## Sync rules
- Every list entry has an optional `keyword` — a distinctive word that is actually spoken
  in the narration. The item is grabbed / the stat rises / the cursor moves exactly then.
  Always set it when the label's words are not in the narration verbatim.
- `dialogue` lines should repeat the narration sentence they accompany so the typewriter
  locks onto the voice word by word.
- Keep counts small: 3–4 items per scene is ideal; split long lists across scenes.

## Custom mode
Use custom code (see docs) only for moments no template covers — e.g. Bolt hacking a
console in the space station, the hero swimming past a labelled reef. Always build with
`S.game(...)`, the cast, worlds and items; keep the HUD or a dialog box on screen; sync
beats with `V.at()`. Never draw HTML/DOM text or smooth vector shapes — everything is
pixel art on the game canvas.
