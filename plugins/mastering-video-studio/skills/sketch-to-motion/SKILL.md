---
name: sketch-to-motion
description: Makes 9:16 "Sketch to Motion" Shorts in code, with a hand drawing that sketches itself on the left and the matching 3D object coming alive on the right. Includes the Mastering English "Name it before I do!" vocabulary format (word in English and Arabic, Isabella voice). Use when the user asks for a Sketch to Motion video, a drawing-to-3D Short, or a "name it before I do" vocabulary Short.
---

# Sketch to Motion

Two ready projects, each self-contained (HTML, three.js, Playwright and ffmpeg):

- `name-it-before-i-do/`: the channel's vocabulary Short, 17.6 s. It has a hook card with a "?", then six words. For each word the drawing sketches itself, the 3D object pops in, and the word appears in English with its Arabic gloss while Isabella says it. It ends on "How many did you get? Comment your score".
- `watch-example/`: the course's original 10-second watch build, for reference on camera paths, slams and audio timing.

## Make a new vocabulary Short

1. Copy `name-it-before-i-do/` to a new folder and run `npm install`.
2. In `scene.js`, edit `WORDS` (English and a short Arabic gloss of 1 to 3 words), and add or replace one `make<Thing>()` builder per word, using three.js primitives (boxes, cylinders, lathe profiles, tori). Keep 6 words; `STEP` is 2.2 s per word.
3. In `sketch.js`, write one drawing function per word with the `Pen` helpers (`line`, `ell`, `stroke`, `hatch`, `arcArrow`, `note`). End each drawing with a `?` note, never the word itself, because the viewer guesses first.
4. Update `timing.json` with the words, then run `python3 make_audio.py bed.wav` (Kokoro `bf_isabella`).
5. Check stills first: `CHROME_PATH=$(which google-chrome || echo /path/to/chromium) node render.mjs x --frames 0.6,2.4,4.6,6.8,9,11.2,13.4,15.8 --dir .`
6. Render: `DUR=17.6 node render.mjs video.mp4`, then `ffmpeg -i video.mp4 -i bed.wav -map 0:v -map 1:a -c:v copy -c:a aac -shortest final.mp4`, then upscale to 2160x3840 for the 4K export.

Arabic text renders with the DejaVu Sans font; keep each gloss short so it fits on one or two lines. `IMAGE_PROMPTS.md` has 93 drawing prompts for the course's 10 other concepts, if hand drawings are wanted instead of coded ones.
