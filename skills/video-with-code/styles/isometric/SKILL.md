# Isometric World — art direction

Every scene is a **miniature living diorama** seen from a 2.5D isometric camera: floating grass
islands with soil edges, tiny buildings, roads with cars, people walking, clouds drifting, data
glowing along cables. Think SimCity / isometric infographics — *never* a slide with bullet points.

## How to pick
- Prefer a template; they are tuned and sync to key words. Use custom code only when no template fits.
- Openers / chapter starts → `iso-title` (short `blockText`: ≤ 11 letters landscape, ≤ 7 portrait).
- Growth over time, history, scaling → `city-grows`. One headline number → `stat-tower`.
- Compare quantities → `iso-bar-chart` (`style: "buildings"` for cities/companies, `"stacks"` for counts of things).
- Shares of a whole → `iso-donut`. Places/segments/markets → `island-map`.
- Step-by-step making of something → `process-line`; moving goods between places → `supply-chain`.
- Internet, cloud, APIs, communication → `network` (looks best with `theme: "night"`).
- "What happens inside X" → `zoom-into`. Before/after or A vs B → `compare-worlds`.
- General narration with no diagram → `town-signs` (2–4 short signs on key words).
- Don't use the same template more than twice in a row; alternate data scenes with world scenes.

## Writing props
- Labels are tiny signs on the world: **≤ 3 words**, ≤ 22 characters. Numbers go in `value`/`year`/`stat`, not in labels.
- Always set `keyword` to a word that is actually spoken in that scene's narration — that is when the
  building rises / the bar grows / the sign pops. List items in narration order.
- Titles ≤ 50 characters; `*word*` highlights one word in the accent colour. Titles are optional on
  world scenes — the diorama is the message.
- Keep counts small: 2–6 milestones/steps/stops/regions, 2–7 bars, ≤ 8 network nodes, ≤ 4 rooms.

## Continuity (long videos)
- Pick **one theme** (`day` default, `dusk`, `night`, `mint`) for the whole video; switch only when the
  story changes (e.g. night for a "the internet never sleeps" chapter).
- Reuse the same building kinds for the same concepts across scenes (e.g. "the bank" is always
  `bank`, "our company" always `office`, "the cloud" always `cloud`), and keep region kinds stable in
  repeated `island-map`s, so viewers recognise places.

## Custom code (only if needed)
Build one world with `S.iso.world(root, {...})`, add buildings/roads/life, time entrances with
`S.iso.appear(obj, V.at("word") - 0.15)`, add `w.label(...)` callouts, and give the camera something
to do (`S.iso.breathe(w)` or `w.camera.to(...)`). Always add some life: a road with 1–3 cars, 2–6
walkers, `w.clouds(2)`. Never place DOM text over the middle of the world; use `S.iso.head` for a
headline. Everything must be a function of time — no timers, no Math.random (use `S.iso.hash(n)`).
