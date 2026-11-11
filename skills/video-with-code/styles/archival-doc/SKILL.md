# Style skill: Archival Documentary

You are the editor of a prestige history documentary. Every scene is filmed on **a dark archive desk
under a single lamp**: real-looking archival materials (photographs with white borders and corner
mounts, typewritten memos, newspaper front pages, parchment maps, index cards on a cork board, letters,
ledgers, film strips) lie on the table and a **slow, weighty camera** drifts across them (Ken Burns).
Text on screen is restrained: an elegant serif lower-third, a typed date stamp, an italic subtitle. The
film itself breathes: lamp flicker, dust motes in the light, grain, gate weave, vignette.
Never make it look like a slide deck: no bullet lists, no icons, no charts, no bright colours.

## Look
- Palette: near-black desk `#15110D`, cream paper `#EDE3D0`, brass/gold accent `#C8963E`, muted `#8C7F6A`;
  ink red only for stamps, string and circled numbers.
- Type: Georgia / Times for titles and handwriting, Courier for typewriters and date stamps.
- Photographs are procedural period illustrations. Subjects: `portrait`, `portrait-woman`, `group`,
  `crowd`, `city`, `street`, `building`, `ship`, `train`, `factory`, `landscape`, `aircraft`, `bridge`.
- Tones: `sepia` (pre-1920s), `silver` (1920s–60s), `cyanotype`, `faded`, `modern` (only for "today").

## Choosing a template
| Narration does… | Template |
|---|---|
| Opens the film or a new chapter | `chapter-title` |
| Talks about a person, place, event (default, most scenes) | `photo-pan` |
| Big news, a turning point, "the world learned…" | `newspaper-headline` |
| A journey, voyage, campaign, migration, trade route | `map-route` |
| An order, report, secret, official decision | `document-reveal` |
| A sequence of years / eras | `timeline-ribbon` |
| Clues, suspects, who-knew-whom, causes linking together | `evidence-board` |
| Reads a quote, a letter, a diary entry | `letter-excerpt` |
| One big figure (plus up to three supporting ones) | `stat-ledger` |
| Change over time, before/after | `then-vs-now` |
| A montage of moments or faces | `film-reel` |

Rhythm: alternate close, intimate scenes (`photo-pan`, `letter-excerpt`) with "document" scenes
(`newspaper-headline`, `document-reveal`, `stat-ledger`, `map-route`). `photo-pan` may repeat, but vary
`subject`, `move` and `focus`. Use `chapter-title` only at chapter starts.

## Writing props
- `keyword` must be one word copied exactly from that scene's narration; the key visual lands on it.
- Place names, dates, clue labels, frame captions and letter text should be words that are actually
  spoken, so each element appears as it is heard. List items in narration order.
- Keep text short: lower-third titles ≤ 6 words, subtitles ≤ 10, headlines ≤ 8, stamps 1–2 words,
  document bodies 20–70 words, letter quotes 12–60 words.
- Dates read like archives: "April 10, 1912", "1914 – 1918". Invent period-sounding newspaper names;
  never use real brands.

## Continuity (long films)
- Pick one tone per era and keep it: e.g. everything before 1920 `sepia`, 1920–1960 `silver`,
  present day `modern`. Don't switch tones randomly between scenes.
- A recurring person is always the same subject (e.g. the protagonist is always `portrait`, his wife
  `portrait-woman`) with the same caption/lower-third name each time they appear.
- Reuse the same map `title` and `terrain` when a journey continues across scenes.

## Custom mode
Build a desk with `S.desk(root)`, lay materials with `S.photo`, `S.document`, `S.newspaper`, `S.map`,
`S.indexCard`, `S.letter`, `S.ledger`, `S.filmstrip`, bring them in with `S.place(item, at, "slide")`,
and move the camera with `S.camera.focus / kenBurns / to / track / wide`. Add `S.lowerThird` and
`S.dateStamp` on key words. Keep moves slow (1.2–3 s, `inOutSine`), never bouncy.

## Don't
- No bullet lists, icons, emoji, gradients in bright colours, cartoon pops or fast zooms.
- No real logos, no real photographs, no external images or fonts, no timers or `Math.random`.
