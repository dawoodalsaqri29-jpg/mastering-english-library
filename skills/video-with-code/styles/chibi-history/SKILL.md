# Chibi History — art direction

This style is an **original soft 2D cartoon history channel**: 20th-century history (WW1, WW2, the
decades around them) told *from both sides* by cute round-headed chibis. Every archetype is defined
only by its **uniform, hat and colours** — never by a face. There are no likenesses of real people,
no moustache caricatures, and nothing graphic: fear is a sweat drop, rage is an anger mark, a bombing
is a red target circle on a map and a cartoon "BOOM" star. Real **flags** are the key visual (on
poles, as backdrops, planted on the map). The look is polished and bouncy: squash-and-stretch hops,
head tilts, lip-sync, chunky thumbnail lettering and date tags.

## The cast — archetypes, not people

A character is a **role** (uniform/hat) plus a **nation** (flag + uniform colours).

| role | look | use for |
|---|---|---|
| `officer` | peaked cap, belted tunic, shoulder boards | the default "staff" voice of a country, planners, questions |
| `general` | gold-braid cap, red band, medals | commanders, big decisions, `war-map` narrator |
| `soldier` | steel helmet (shape follows the nation), pack straps | the front, crowds, timelines, the aftermath |
| `sailor` | white cap with ribbon, blue collar flap | navy, blockades, `sea` scenes |
| `pilot` | leather cap, goggles, fur-collar jacket | air raids, "the wrong target", `airfield` |
| `diplomat` | dark suit, tie, round spectacles | letters, telegrams, treaties, `diplomacy-desk` |
| `civilian` | flat cap, brown jacket | the home front, crowds, refugees |
| `nurse` | white cap with red cross, apron | care, the human side, crowds |
| `historian` | tweed, bow tie, glasses, no nation | the host / narrator between chapters (fallback) |

Nations: `germany, britain, usa, ussr, france, italy, japan, switzerland, sweden, poland, austria,
finland, netherlands, belgium, spain, norway, neutral`.

**Continuity rules**
- Pick a **host** for the video (usually `historian` + `neutral`, or one `officer`) and keep them as
  the narrator of most `character-talks` scenes. Each *side* of the story gets **one** fixed
  role+nation pair (e.g. the German side is always `officer`/`germany`, the British side always
  `general`/`britain`). The same pair renders identically in every scene — never swap roles for the
  same side mid-video.
- Personalities stay put: the planner is always `thinking`/`confused`, the commander `proud`/`angry`,
  the diplomat `smug`/`calm`, the soldier `worried`/`determined`.
- Keep **locations** consistent within a chapter: `war-room` (map table, lamp), `office` (diplomatic
  desk, letters), `trench`, `airfield`, `city` (skyline under bombers, searchlights), `alps` (snowy
  border post), `sea` (ships, waves), `parade` (street with bunting), `field` (poppies at dusk),
  `map` (parchment Europe), `plain` (flag-striped paper).

## Choosing templates (vary the shots!)

Never use the same template more than twice in a row. A good chapter rhythm: **open** (`date-card`)
→ **talk** (`character-talks`) → **show** (`war-map`, `versus-forces`, `timeline-war`) → **gag**
(`diplomacy-desk`, `neutral-question`, `two-sides`) → **people** (`crowd-scene`) → **close**
(`aftermath-reflection`, once).

| moment in the script | template |
|---|---|
| hook, key statement, takeaway (text ≤ 5 words) | `character-talks` |
| chapter opener, jump in time | `date-card` |
| "both sides saw it differently", back-and-forth | `two-sides` (line text = exact narration wording) |
| fronts, arrows, targets, who-held-what | `war-map` |
| letters / telegrams ignored, "no reply" | `diplomacy-desk` |
| thumbnail-style hook, shocking twist | `headline-thumb` |
| numbers, equipment, "on paper" | `versus-forces` (1–4 rows) |
| "why didn't they invade…", a neutral country | `neutral-question` |
| sequence of dates | `timeline-war` (2–6 events) |
| celebrations, marching columns, anxious crowds | `crowd-scene` |
| quiet ending, cost, reflection (non-graphic) | `aftermath-reflection` |

## Acting & expressions

- Expressions switch instantly with a tiny pop. Put them on the word that carries the emotion
  (`beats: [{ word, expression, gesture, hop }]`); 1–3 beats per scene.
- Vocabulary: `neutral, smile, happy, excited (sparkles), proud, smug, worried (sweat drop), nervous
  (two drops), angry (anger mark), furious (steam), shocked (bang + big eyes), surprised, sad (tears),
  gloomy (gloom lines), confused (question marks), thinking, determined, serious, scared, dizzy
  (stars), tired, sleepy (zzz), calm, embarrassed`.
- Gestures: `rest, point, point-up, point-left, point-down, salute, shrug, arms-up, cheer, fist,
  fist-up, facepalm, think, hold, hold-up, hold-both, wave, present, cross, hips, stop, hands-head,
  binoculars, march`. Props for the right hand: `letter, telegram, map, binoculars, phone, flag,
  pointer, mug, sign`.
- Match the beat: a bad plan → `confused` + `shrug`; an order → `determined` + `point`; victory →
  `excited` + `cheer`; waiting → `tired` / `sleepy`; the twist → `shocked` + `hands-head`.

## Text

- Chunky thumbnail text is **short and loud**: 1–5 words, uppercase feel ("WHY NOT THEM?",
  "THE WRONG TARGET", "8 LETTERS, NO REPLY"). Wrap one word in `*asterisks*` to colour it gold.
- Date tags are 1–3 words: "OCT 1945", "SPRING 1917", "1939". Use them on most scenes.
- Captions ≤ 10 words; versus row labels 1–3 words; timeline labels 2–6 words. The voice carries
  the details.
- Every sync `word` / `keyword` must literally appear in the narration. Map names must be from the
  named map points (britain, france, germany, switzerland, italy, poland, ussr, sweden, norway,
  denmark, balkans, austria, netherlands, belgium, finland, spain, london, paris, berlin, moscow,
  rome, bern, vienna, warsaw, channel, north-sea, baltic, mediterranean, atlantic, north-africa…).

## Custom mode

Use templates for ~90 % of scenes. Write custom code for special staging (three sides, a running
gag, a map that turns into a close-up). Build a **film** of shots: `S.shot(location, from, to)` per
cut, `shot.character({ role, nation }, { x, y, scale })`, act with
`.expression/.gesture/.say/.prop/.hop/.walkTo/.hatInHand`, direct `shot.cam`, then add the history
grammar (`shot.flag`, `shot.map()` with `.region/.arrow/.target/.front/.qmarks`, `shot.letter`,
`shot.planes`, `shot.crowd`, `S.thumb`, `S.dateTag`, `S.stamp`, `S.boom`, `S.half`). Sync everything
with `V.at("word")`.
