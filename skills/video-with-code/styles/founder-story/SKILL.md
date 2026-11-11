# Founder Story — art direction

This style is the **hand-inked business-history illustration**: a big-headed editorial caricature of a
generic business archetype stands in the foreground, a sweeping aerial empire (factories, campus, ports,
stores, test tracks, cities) spreads out behind them, and a paper **headline plate** top-right carries the
company name in bold caps with a "1937 – 2026" year band. Muted watercolour fills, crisp ink outlines,
cross-hatched shading, paper grain. Think "the ENTIRE history of a company in 20 minutes".

**Originality rules (hard).** Archetypes are generic (`founder`, `engineer`, `inventor`, `retailer`,
`techie`, `investor`, `executive`) — never describe or request a real person's likeness. Company names are
plain typed text from your props — never logos, slogans or trademarks drawn as graphics. You may use
real company names and real numbers from the script; the pictures stay generic.

## Cast & continuity

| archetype | look | use for |
|---|---|---|
| `founder` | navy suit, glasses, red tie, side-parted hair | the main company's boss (default narrator) |
| `engineer` | blue overalls, yellow hard hat, moustache | factories, products, manufacturing scenes |
| `inventor` | white lab coat, wild white hair, round glasses | origins, patents, R&D |
| `retailer` | red cap, plaid shirt, store apron | retail, food, consumer brands |
| `techie` | grey zip hoodie, messy hair, sneakers | software, internet, startups |
| `investor` | charcoal pinstripe, silver slicked hair, bushy brows | banks, rivals, acquirers, Wall Street |
| `executive` | teal blazer, bob haircut, gold earrings | later-era leadership, managers, partners |

- Pick **one archetype per company** for the whole video and keep it (e.g. the company = `founder`,
  its rival = `investor`). Change archetype only when the script changes era/leader.
- Pick **one `empire` per company** (`tech`, `factory`, `auto`, `retail`, `shipping`, `finance`, `energy`,
  `food`, `city`) and keep it; use `garage` only for the early-days scenes, then `growth: "small"` →
  `"growing"` → `"full"` as the company grows through the video.
- The `company` + `years` plate is the signature of the genre: put it on almost every scene.

## Template choice (vary the shots — never the same template 3× in a row)

| moment in the script | template |
|---|---|
| hook, intro, key statement, most talking scenes | `founder-intro` (workhorse; add `stat` when a number is said) |
| founding, garage days, first invention | `origin-workshop` |
| any product / model / patent reveal | `product-launch` |
| opening in new cities / countries, store counts | `expansion-map` |
| revenue, sales, users, share price going up | `revenue-chart` |
| competitors, lawsuits, price wars | `rivals` |
| recall, crash, bankruptcy, scandal, layoffs | `crisis-moment` |
| scale, mass production, automation | `factory-floor` |
| new era / decade / chapter opener | `era-chapter` |
| merger, acquisition, funding, partnership | `deal-handshake` |
| ending, wrap-up with final numbers | `legacy-skyline` |

A good 20-minute rhythm: `era-chapter` → `founder-intro` → `origin-workshop` → `product-launch` →
`founder-intro` → `revenue-chart` → `expansion-map` → `rivals` → `crisis-moment` → `deal-handshake` →
`factory-floor` → … → `legacy-skyline`.

## Landing visuals on words

- Every `keyword` / `word` must literally appear in the narration. The headline pops on `keyword`; stats,
  pins, chart points and spec callouts land on their `word`. Spell numbers the way the voice says them
  ("forty", "billion") and use those as sync words.
- Headlines are **thumbnail text**: 2–7 words, caps, one `*word*` highlighted. Stats are `"$48B"`,
  `"210000"`, `"47%"` — they count up.
- 1–3 `beats` per scene is plenty (`{ word, pose, expression, mark }`); the figure already lip-syncs, blinks
  and gestures on its own.
- Emotion matches the news: good → `thumbs-up` / `fist-pump` / `celebrate` + `happy`/`excited` + `dollar`
  or `sparkle`; bad → `worried` / `facepalm` + `worried`/`shocked` + `sweat`; doubt → `shrug` + `skeptical`
  + `question`; insight → `point-up` + `idea`.

## Custom mode

Templates cover ~90 % of scenes. Write custom code for special staging (three figures, a figure walking
in, a chart and a map in one scene, a workbench in a later era). Build in this order: `S.scene({ empire,
sky, growth })` → `S.figure(...)` + `S.narrate(fig)` → `S.plate(...)` → cards/headlines/stats with times
from `V.at("word")` → `S.camera()` moves. Keep text in HUD components (plate, headline, stat, cards),
never loose text in the world. See the component docs for the full API.

## Camera grammar

The default is a slow **rise** over the empire (start low and tight on the figure, climb and widen).
Add one accent: a `focus` on a face for a line, a `shake` on a crash or a seal stamp, a `cut` back wide
on a reveal. One or two moves per scene.
