# Pictogram Protocol — art direction

This style is the **"survival rules" / creepy-protocol** look: stark safety-sign pictograms. Solid
black silhouette figures with round heads and **no face** stand in flat white rooms built from
pictogram objects (bed, door, window, phone, clock, poster…), or white silhouettes in pure black
rooms at night. Heavy, simple shapes; **one alarm colour** (signal red) plus the occasional warning
yellow; bold condensed uppercase headline stamps that SLAM onto the key spoken word; numbered
RULE cards; red arrows and rings; warning triangles; "2:00 AM" clock stamps. The dread is quiet:
lights flicker, a slow push-in, a vignette, hard cuts, and an uncanny **visitor** (too tall,
too-long arms, white eyes and a too-wide smile) whose eyes are all you see in the dark. Creepy,
never gory. It must never look like a slide deck: there is always a room, a figure or an object.

## The golden rules

1. **One rule or beat per scene, stamped on its word.** Write the stamp in the narrator's own words
   and star the key word: `"DON'T *OPEN* IT"`, `"CHECK THE *DATE*"`. Templates land the stamp on
   that spoken word automatically (or set `keyword`). Actions (`door-opens`, `knock`, `dog-hides`…)
   get their own `actionKeyword`.
2. **Short, hard text.** Stamps 1–6 words, callouts ≤ 5, captions ≤ 10, rules ≤ 12. Always
   imperative or flat: "DON'T MOVE", "DO NOT ANSWER", "IT IS NOT YOUR DOG". Never paragraphs.
3. **Red is the alarm, used once per scene** (the key word, the ✗, the arrow, the visitor's flash).
   Everything else is black on white or white on black. Yellow only for warning triangles / signs.
4. **Keep it moving.** Something happens every few seconds: a door swings, lights flicker, the dog
   hides, a time stamp ticks, a stamp slams, an arrow lands. Use the `action` / `event` /
   `buildup` props; never leave a scene static.
5. **Vary the template**; never the same one twice in a row. A good rhythm for one rule:
   `title-card` → `rule-scene` → `rule-scene` (different setting / action) → `rule-card` →
   `do-dont` or `outcome-split` → `room-at-night` or `countdown-clock` → `stinger-reveal` (rarely)
   → `checklist-protocol` for the recap. `rule-scene` carries most of a 10–30 minute video.
6. **Dread escalates.** Start light-mode scenes; move to `mode: "dark"` scenes, `room-at-night`,
   and finally a `stinger-reveal` on the scariest line. Use the stinger at most twice per video.

## The cast (always use these ids; never invent new characters)

| id | look | use for |
|---|---|---|
| `you` | plain figure | the viewer, the protagonist of every rule |
| `mom`, `dad`, `kid`, `grandma`, `friend` | dress + bun / cap / small / cane / backwards cap | family members and friends in the house |
| `stranger` | brimmed hat, long coat | the courier, the neighbour, whoever knocks |
| `visitor` | too tall, long arms, white eyes, wide smile | the thing — only in actions, stingers and bad outcomes |
| `dog`, `cat`, `owl`, `crow` | pictogram animals | pets that hide / stare / growl; the owl that watches |

**Continuity:** `you` is the hero of the whole video. The threat is always `visitor` (never give it a
name). Keep the family consistent (if mom is asleep upstairs in scene 3, it is still mom in scene
9). Keep the house consistent: pick 2–4 settings (`bedroom`, `hallway`, `front-door`,
`living-room`, `kitchen`, `bathroom`, `basement`, `street`, `car`, `forest`, `bus-stop`,
`outside-window`) and reuse them. Keep clock times consistent and advancing ("1:58 AM" → "2:00 AM"
→ "2:04 AM").

## Templates — when to use which

| moment in the script | template |
|---|---|
| a rule in a situation, a story beat, "if X happens…" (the workhorse) | `rule-scene` |
| stating / recapping rule N with an icon | `rule-card` |
| do this, never that | `do-dont` |
| searching a dark room, "what is in your room at 3 AM" | `room-at-night` |
| "at exactly 2:00 AM…" | `countdown-clock` |
| one object to inspect (the poster, the phone, the mirror) | `object-warning` |
| calls, texts, DO NOT ANSWER | `phone-screen` |
| the full protocol / step list / recap | `checklist-protocol` |
| the hard cut to the visitor (max twice per video) | `stinger-reveal` |
| intro and chapter openers | `title-card` |
| consequences: if you do / if you don't | `outcome-split` |

## Acting

- Figures are silhouettes: they act with **pose and motion**, not faces. `look` / `listen` for
  noticing, `scared` / `hands-up` / `cover-ears` / `cover-eyes` for fear (they tremble), `hush` and
  `stop` for the rule, `hide` / `crouch` to hide, `sit-bed` / `sleep` for night scenes, `phone`,
  `knock`, `reach`, `flashlight`, `pray`. Pets: `hide`, `stare`, `growl`, `alert`, `sleep`.
- The visitor never runs or attacks on screen: it stands at a door or window, it reaches, it
  smiles. The fear is that it is *there*.

## Custom code (when no template fits)

Use the pictogram API (`S.pictogram`, `S.setting`, `S.figure`, `S.object`, `S.stamp`, `S.caption`,
`S.clockStamp`, `S.countdown`, `S.ruleCard`, `S.arrowTo`, `S.ring`, `S.triangle`, `S.mark`,
`S.cone`, `S.stinger`, `S.phoneUI`, `S.checklist`, `S.label`, `S.flicker`, `S.lightsOut`,
`S.action`, `S.cameraTo`, `S.shake` — see the component docs). Start with `S.pictogram(root, {
mode })`, build a room with `S.setting("bedroom")`, time everything from `V.at("word")`. Do **not**
use the shared slide components (`S.stage`, `S.title`, `S.card`, `S.kinetic`, HTML paragraphs,
soft fades): they break the sign look. Keep 7 % margins; stamps auto-shrink to `maxWidth` ×
`lines`, pictograms do not — size them from `V.width` / `V.height` and check portrait.
