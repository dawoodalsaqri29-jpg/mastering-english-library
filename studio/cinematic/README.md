# Cinematic scenes for the video studio

Stock-footage-style scenes drawn by code: rain on a window, fog, a typewriter, a globe, a glowing map,
word cards and quiz cards. They are made from scratch, so the channel owns every frame and there is
no stock-footage licence to check. They plug into the `mastering-video-studio` plugin's **film-studio**
pipeline as narrated clip scenes, next to the plugin's 19 animated styles.

## Scene types

| `type` | Looks like | Use it for | Main parameters |
|---|---|---|---|
| `rain` | rain drops on a window at night, warm street-lamp bokeh | horror and mystery stories, calm outros | `title`, `subtitle`, `caption`, `textAt`, `colors`, `drops`, `lamp` |
| `fog` | drifting fog, bare trees, a flickering lamp | horror, ghost stories, chapter cards | `title`, `subtitle`, `lightX`, `lightY`, `lightColor`, `tint`, `accent`, `silhouette` |
| `typewriter` | a line typing onto paper, carriage moving | stories, writers, dates, quotes, word origins | `text`, `typeAt`, `cps` (characters a second) |
| `globe` | rotating dotted globe with real continents, light trails | history of English, where English is spoken | `lon0`, `speed`, `tilt`, `markers` `[{lat, lon, label, at}]`, `title` |
| `map` | glowing world map, light streaks, slow camera, routes | empires, wars, trade, words travelling | `from`/`to` `{lon, lat, zoom}`, `routes` `[{from:[lon,lat], to, at, dur, label}]`, `labels`, `color` |
| `word` | a word appearing in bokeh with a light sweep | vocabulary, nature words, topic words | `word`, `kind`, `ipa`, `meaning`, `mood` (`night`, `nature`, `gold`, `fog`) |
| `quiz` | question, four options, countdown, answer lights up | games, level tests, exam practice | `question`, `options`, `answer` (index), `countFrom`, `revealAt`, `kicker`, `explain` |

Every scene also takes `duration`, `seed`, `fadeIn` and `fadeOut`. `prep.py` sets `duration` for you.

## Use in a film

1. Write `films/<film>/p1.cine.json`. Cinematic scenes look like this; any other film-studio scene
   (a style template or a `clip`) can sit between them unchanged:

   ```json
   {"cine": {"type": "fog", "title": "Never follow the bell."}, "say": "Never follow the bell.", "ar": "لا تتبع الجرس أبدًا.", "lead": 0.8, "tail": 1.6}
   ```

   `lead` is the silence before the voice, `tail` the time after it (default 0.8 s; give a quiz about 3 s
   so the answer shows after the question is read).

2. Render the clips, then build the part with the plugin as usual:

   ```bash
   export FILMS_DIR=$PWD/films KOKORO_DIR=~/tts
   python3 studio/cinematic/prep.py <film> p1     # writes p1.json with one clip per cinematic scene
   python3 <plugin>/skills/film-studio/scripts/build.py <film> p1
   ```

   Each clip is exactly as long as its narration, so nothing plays in silence. Clips are cached by
   content in `films/<film>/cine/`: change one scene and only that one renders again.

3. Check a frame before a full render:

   ```bash
   node studio/cinematic/render.mjs --scene scene.json --preview 3.5 --png still.png
   ```

## Setup in a cloud session

- Voice: `pip install kokoro-onnx soundfile numpy`, model files in `~/tts` (see the plugin's video-studio skill).
- Playwright for the plugin's style scenes: `ln -s /opt/node-tools/node_modules /root/node_modules`.
- Rendering speed: about 4 to 6 seconds of work per second of clip at 1920x1080. `build.py` makes the 4K file.

## Rules

- The channel rules still apply: hook first, no spoilers, Isabella voice, English and Arabic subtitles,
  no music, facts checked.
- Keep on-screen text short; the voice carries the detail.
- Land shapes: Natural Earth (public domain) via the `world-atlas` package (ISC), in `land.json`.
