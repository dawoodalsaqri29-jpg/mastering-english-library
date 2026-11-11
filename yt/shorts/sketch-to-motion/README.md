# Sketch to Motion style

A 9:16 reel made entirely from code: a rough hand drawing sits in a small panel on the left, and the finished 3D animation plays in a bigger panel on the right. A new drawing appears about every 1.4 seconds.

This pack contains the full code of the 10-second watch example shown on the course page, plus 93 drawing prompts for 10 more videos.

## What is here

- `engine/index.html`: the layout, panels and on-screen text
- `engine/scene.js`: the 3D watch and the timeline of every shot
- `engine/sketch.js`: the drawings in the left panel
- `engine/render.mjs`: renders frames in Chrome and encodes them
- `engine/make_audio.py`: the sound effects and music bed, timed to the shots
- `IMAGE_PROMPTS.md`: 10 video concepts with 93 drawing prompts

## Render the example

You need Node 20 or newer, Google Chrome, ffmpeg, and Python with numpy.

```bash
cd engine
npm install
npm run stills
npm run render
python3 make_audio.py bed.wav
ffmpeg -i video.mp4 -i bed.wav -map 0:v -map 1:a -c:v copy -c:a aac -shortest final.mp4
```

`npm run stills` writes three test frames so you can check the look first. If Chrome is somewhere unusual, set `CHROME_PATH` to its full path. The fonts are named for a Mac; on other systems the browser picks a similar font, so change them in `index.html` if you want an exact match.

## Make your own video

Generate your drawings from `IMAGE_PROMPTS.md`, or draw them by hand. Then paste this into your coding agent from inside this folder:

```text
Read engine/index.html, engine/scene.js and engine/sketch.js. They make a 9:16 "Sketch to Motion" reel: a drawing in a small left panel and a matching 3D animation in a bigger right panel.

Make a new video in exactly this layout from the drawings in the drawings/ folder, shown in filename order. Show my image files in the left panel in place of the coded drawings. Give each drawing an equal share of the running time.

Build one three.js shot per drawing. Copy the composition of each drawing: same subject, same position in the frame, same camera angle. Keep something moving at all times, and make each shot flow quickly into the next.

Concept: [describe your video]
Length: [seconds]
Bottom line of text: [your call to action]

Render three test frames first and check them against the drawings. Then render the full video and update make_audio.py so every sound lands on its shot.
```
