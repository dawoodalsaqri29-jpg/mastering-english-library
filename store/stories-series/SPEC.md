# Story Series SPEC — "English Stories with Pictures" (free illustrated graded readers)

Audience: Arabic-speaking learners of English (mostly Omani / Gulf, teens and adults). Each book tells ONE story at TWO levels:
- **Part 1 — A1 (beginner):** 10 picture pages, 2–3 very short sentences each, Arabic translation under each page.
- **Part 2 — B1 (intermediate):** the same story in 5 chapters with more detail, Arabic translation, 5 key words per chapter.

The model book already published is `/home/claude/book/content.py` ("Mia and the Glowing Map"). Read it first: match its tone, sentence length and Arabic style.

Pictures are drawn automatically by a **silhouette scene engine** (shadow-puppet style: dark figures against glowing, coloured skies). You do not draw anything: for each A1 page you describe the scene with the fixed vocabulary below. Faces are never visible, so scenes must read from **shapes, poses, places and light** (a figure holding a lantern at a cave mouth, a dragon in the sky over a castle, two figures facing each other in a library…).

## What makes a story good here (most important)

The owner wants readers to feel the pull of The Hobbit, The Lord of the Rings, Game of Thrones, Sherlock Holmes, Alice in Wonderland, Percy Jackson. So every story needs:
- a **hook** in the first page (a mystery, a danger, a strange discovery),
- a hero who **wants** something and has a **reason**,
- **rising stakes** and at least one **setback**,
- a **twist or clever reveal** (a clue, a secret identity, a trick),
- a **climax** where the hero's own choice or cleverness wins,
- a **satisfying ending** with a small emotional note.
Keep everything family-friendly (no gore, no romance beyond a kind word, villains defeated or tricked rather than killed graphically).

## Copyright rules (strict)

- **Public-domain retellings** (Sherlock Holmes stories, Alice, Treasure Island, Arabian Nights, Greek myths, Wizard of Oz, Robin Hood, King Arthur): retell the plot **in your own words**. Do not copy sentences from the original books. Characters and names from these works are fine.
- **Original stories** "in the spirit of" The Hobbit / LOTR / Game of Thrones / Percy Jackson: invent everything. Do NOT use any of their names, places, races, objects or plot specifics (no hobbits, no rings of power, no Gandalf/Frodo/Westeros/Stark/Lannister/Camp Half-Blood/Olympians-as-camp etc.). Use the genre feeling only: a small unlikely hero on a quest, a dragon's hoard, a band of companions, rival royal houses, a teen discovering a hidden heritage.

## Language rules

- **A1 English:** present simple mostly (present continuous / "can" fine), max ~12 words per sentence, max ~32 words per page, common words. New hard words only if the picture explains them.
- **B1 English:** past simple + past continuous + some past perfect, linking words, some phrasal verbs, dialogue. Each chapter = 2 paragraphs of 90–130 words each.
- **Arabic:** clear Modern Standard Arabic (فصحى سهلة), natural, not word-for-word. Use «» for dialogue. Keep names transliterated (شيرلوك هولمز، أليس…). Do NOT mix English words into Arabic lines.
- Use curly quotes “ ” and ’ in English.

## Output

Write ONE JSON file per story: `/home/claude/book/series/stories/NN-slug.json` (NN = the number you were given). Validate each with `python3 -c "import json;json.load(open('FILE'))"` before finishing. Schema:

```json
{
  "n": 9,
  "slug": "speckled-band",
  "title": "The Speckled Band",
  "series_tag": "Sherlock Holmes",            // or "" for originals; shown above title
  "subtitle_ar": "شيرلوك هولمز: الشريط المرقّط",
  "genre": "Mystery",                         // Mystery | Fantasy | Adventure | Myth | Classic
  "based_on": "Arthur Conan Doyle (public domain)",   // or "Original story"
  "blurb_en": "One or two sentences that sell the story (store page).",
  "blurb_ar": "جملة أو جملتان تشدّ القارئ.",
  "palette": "indigo",                        // see palettes
  "cast": [
    {"id": "holmes", "name": "Sherlock Holmes", "body": "man", "outfit": "coat", "head": "deerstalker", "item": "magnifier", "height": 1.08},
    {"id": "watson", "name": "Dr Watson", "body": "stout_man", "outfit": "coat", "head": "top_hat", "item": "cane"}
  ],
  "cover_scene": { ...scene... },
  "a1": [
    {"en": "Two sentences.\nThird sentence on a new line.", "ar": "الترجمة.\nسطر ثانٍ.", "scene": { ...scene... }}
    // exactly 10 pages
  ],
  "a1_words": [["clue", "دليل"], ...],          // exactly 12, words that appear in the A1 text
  "a1_quiz": [["Holmes lives in London.", true], ...],   // exactly 5 true/false about the A1 text
  "b1": [
    {"title": "Chapter 1: A Visitor at Dawn", "title_ar": "الفصل الأول: زائرة عند الفجر",
     "en": ["paragraph 1", "paragraph 2"], "ar": ["الفقرة ١", "الفقرة ٢"],
     "pics": [0, 1],                          // indexes of A1 pages whose pictures illustrate this chapter (2 per chapter, in story order)
     "words": [["dawn", "الفجر"], ... 5 items — B1-level words that appear in this chapter's English]}
    // exactly 5 chapters
  ],
  "b1_quiz": [["Question?", ["option a", "option b", "option c"], 1], ...],   // exactly 5, answer = index
  "talk_en": "A discussion / writing task (1–2 sentences).",
  "talk_ar": "نفس المهمة بالعربي (بلهجة عُمانية/خليجية هادئة مسموح هنا فقط)."
}
```

## Scene vocabulary (use ONLY these values)

```json
{
  "sky": "dawn | day | sunset | dusk | night | storm | mist | desert_day | desert_night | underwater | cave | indoor_warm | indoor_night | magic | snow",
  "land": "hills | mountains | forest | sea | shore | desert | village | arabian_city | london_street | castle_hall | cave | room | library | garden | maze | ship_deck | island | snow | swamp | cliff | market | palace_hall | ruins | field | road | tunnel",
  "landmark": {"type": "castle | dark_tower | tower | galleon | lighthouse | big_tree | stone_arch | greek_temple | pyramid | omani_fort | cottage | cave_mouth | bridge | ruins | volcano | palace_dome | clock_tower | round_door | well | palm_oasis | windmill | standing_stones | mansion | rabbit_hole | emerald_city | sword_in_stone | labyrinth_wall | throne | window | fireplace | bookshelves | street_lamps | market_stalls | mosque_dome | mountain_peak | waterfall | gallows_tree | iron_gate",
               "side": "left | center | right"},
  "sky_items": ["moon", "crescent", "sun", "stars", "birds", "clouds", "comet", "bats", "lightning", "aurora"],
  "chars": [
    {"id": "<cast id>", "pose": "stand | walk | run | point | raise | kneel | sit | fight | look_up | fall | wave | think | read | hold_out",
     "face": "left | right", "pos": "left | center | right", "scale": 1.0, "far": false}
  ],
  "creatures": [
    {"type": "dragon | wolf | raven | owl | cat | dog | hound | horse | camel | rabbit | snake | bat | deer | fox | lion | griffin | minotaur | djinn | giant | troll | goblin | mermaid | sea_serpent | spider | eagle | roc | ghost | parrot | monkey | flamingo | caterpillar | unicorn | whale | crocodile | bear | boar | sheep | goat",
     "pos": "sky | left | right | center | far", "size": "s | m | l | xl", "face": "left | right"}
  ],
  "props": ["campfire", "chest", "rocks", "grass", "flowers", "lamp_post", "table", "chair", "candle", "barrel", "signpost", "fence", "gravestone", "mushrooms", "teacups", "cards", "coins", "bones", "rope", "small_boat", "anchor", "flag", "tent", "cart", "crates", "statue", "fountain", "cauldron", "door", "bed", "bell_rope", "safe", "jar", "scroll", "crown_on_cushion", "shield_on_wall", "torch_on_wall", "spider_web", "hedge", "roses", "boulder"],
  "light": "none | lantern | fire | magic | moonbeam | sunrise | candle | lightning",
  "mood": "calm | tense | scary | happy | magical | sad"
}
```

Notes:
- `chars` refers to cast ids; the engine draws each cast member the same way on every page (body/outfit/head/item from the cast). Per scene you can override the held item with `"item": "..."`.
- Cast fields: `body`: boy | girl | man | woman | old_man | old_woman | stout_man | child. `outfit`: tunic | cloak | robe | dress | coat | armour | dishdasha | abaya | pirate_coat | rags | gown. `head`: none | short_hair | long_hair | curly_hair | ponytail | braid | bun | hood | top_hat | deerstalker | crown | tiara | wizard_hat | tricorn | turban | kumma | ghutra | helmet | cap | bonnet | feather_cap | bald | beard (beard = short hair + beard). `item`: none | lantern | sword | staff | bow | book | map | magnifier | torch | key | shield | spear | pipe | cane | umbrella | basket | letter | bag | magic_lamp | trident | mirror_shield | sack | telescope | crutch | watch.
- Max 3 chars + 2 creatures + 4 props per scene. Prefer 1–2 chars: simple, readable silhouettes.
- Vary sky/land across the 10 pages so the book feels like a journey; keep the light/mood true to the moment (tense pages = storm/night/scary).
- `cover_scene` = the most iconic image of the story (hero + the big danger or landmark).
- `palettes`: amber | crimson | indigo | teal | emerald | violet | rose | gold | ice | jade | copper | midnight — pick one that fits; it tints the whole book.

## Example scene

```json
{"sky": "night", "land": "london_street", "landmark": {"type": "street_lamps", "side": "right"},
 "sky_items": ["moon", "clouds"],
 "chars": [{"id": "holmes", "pose": "point", "face": "right", "pos": "left"}, {"id": "watson", "pose": "stand", "face": "left", "pos": "center"}],
 "creatures": [], "props": ["lamp_post", "fence"], "light": "lantern", "mood": "tense"}
```
