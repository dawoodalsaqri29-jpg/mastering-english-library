---
name: talking-face
description: Make a story character's face really TALK from one picture — audio-driven lip-sync with natural mouth, teeth, head motion and blinking, generated here on CPU with SadTalker (free, no video credits). Use when Dawood wants a character to speak a line "زي الناس", a talking close-up for a story video or Reel, or a narrated portrait. Humans / human-like characters only (not the cat).
---

# Talking face (SadTalker on CPU)

Proven 23 Oct 2026 on Mia's painted portrait + a Kokoro `bf_lily` line: real lip-sync with teeth,
smile, head motion and blinks, art style preserved. One 5-second line takes ~22 minutes at 256 px on
this 2-CPU workspace (face renderer ≈ 12 s/frame at 25 fps); size 512 is ~4x slower. Plan the lines,
start the render in the background, and tell Dawood the wait.

## 0. Setup (once per session, ~10 min, ~6 GB)
```bash
bash skills/talking-face/scripts/setup_sadtalker.sh /home/claude/sadtalker
```
It makes a **Python 3.11** venv (3.13 breaks basicsr's setup.py), installs torch 2.1.2 / torchvision
0.16.2 (keeps `functional_tensor` that basicsr imports), **numpy 1.23.4** (SadTalker uses `np.float`),
scipy 1.10.1, numba 0.57.1, librosa 0.9.2, basicsr 1.4.2, gfpgan 1.3.8, facexlib 0.3.0, opencv 4.10,
clones OpenTalker/SadTalker and downloads the weights from GitHub releases (allowed by the proxy; the
script resumes and size-checks them because long downloads get reset). No code in the repo is modified.

If the sandbox's permission classifier blocks running the cloned program, stop and tell Dawood
exactly that; he approves and you retry once. Never bypass it.

## 1. Inputs
- **Portrait**: a square crop of head + shoulders, face roughly centred and ≥ 40 % of the width,
  512x512 is enough (SadTalker renders the face at 256/512 anyway). From a full-body reference:
  `Image.crop((cx-210, top-120, cx+210, top+300)).resize((512,512))`. Front or 3/4 view; mouth
  visible; one face only (two faces confuse the detector).
- **Voice line**: WAV from Kokoro (`bf_lily`, speed 0.9) or Dawood's ElevenLabs Lily MP3. 3–8 s.
  One sentence or two; a long monologue = several renders.
- Cats / animals: the face detector finds no face → not supported. Use puppet-animation for Whiskers.

## 2. Render
```bash
bash skills/talking-face/scripts/talk.sh portrait.png line.wav out_dir 256 crop   # face crop only (fastest)
bash skills/talking-face/scripts/talk.sh portrait.png line.wav out_dir 256 full   # whole portrait, face pasted back
```
`--still` keeps the head calm (story narration); drop it in talk.sh for livelier head motion.
`--expression_scale 1.1–1.3` = stronger mouth/eyebrows. Run in the background with a long timeout and
poll the log (`Face Renderer:: n/N`). Output: `out_dir/<timestamp>.mp4` with the audio muxed in.

## 3. Upscale + compose (so it fits a 1080p/4K video)
```bash
python3 skills/talking-face/scripts/compose_talk.py out_dir/<ts>.mp4 portrait.png mia_talk_1080p.mp4
```
FSRCNN x4 + light sharpen, centred on a blurred/darkened copy of the portrait → 1920x1080 with the
voice. For the story assembler put the clip in `clips/<shot-id>.mp4`; it mutes clip audio, so keep the
same sentence in Lily's narration (subtitles stay right) or mix the clip audio back at that shot's
start time. For 4K export see video-4k-export.

## 4. Check before sending
Contact sheet at 2 fps (`ffmpeg -vf "fps=2,scale=256:-2,tile=5x2"`): mouth opens on the words, eyes
blink once or twice, no melted hair/teeth artefacts. If the mouth barely moves, raise
`--expression_scale`; if the face warps, use a tighter/cleaner portrait crop.

## Use in the story videos
- Close-up dialogue shots: "Whiskers… the map is alive!", "You clever, clever cat!", Grandma Nell's
  letter lines. Keep each ≤ 8 s.
- Reels: a talking Mia saying the day's powerful sentence, English caption + Arabic line.
- Combine: puppet-animation for walking/body scenes, talking-face for the speaking close-ups, AI video
  (ElevenLabs / ManyMotions / vidIQ) when credits allow for everything else.
