---
name: talking-face
description: Make a story character's face really TALK from one picture — audio-driven lip-sync with natural mouth, teeth, head motion, blinks and expressions, generated here on CPU with SadTalker (free, no video credits), kept inside the story scene with clean hair edges. Use when Dawood wants a character to speak a line "زي الناس", a talking close-up for a story video or Reel, or a narrated portrait. Humans / human-like characters only (not the cat).
---

# Talking face (SadTalker on CPU) — v4

Proven 23 Oct 2026 on Mia: real lip-sync with teeth, smile, head motion, blinks, child voice, inside the
village scene with the painting's own hair edges. ~20 min per 4–5 s line at 256 px on this 2-CPU
workspace; 512 px ≈ 4×. Plan the lines, render in the background one at a time, say the wait.

What it can and cannot do (say this in one line when delivering): it animates the head region (mouth,
jaw, cheeks, brows, eyes, head pose; hair and upper shoulders follow the head). The body below the
crop is still; hands, cloth and walking need an AI video model (ElevenLabs Video / ManyMotions /
vidIQ Veo). It keeps the drawn style; it does not make a photo.

## 0. Setup (once per session, ~10 min, ~6 GB)
`bash skills/talking-face/scripts/setup_sadtalker.sh /home/claude/sadtalker` — Python 3.11 venv,
torch 2.1.2 / torchvision 0.16.2, numpy 1.23.4 stack, basicsr/gfpgan/facexlib, SadTalker clone and
weights from GitHub releases (resumed + size-checked). No repo code is modified. If the permission
classifier blocks running the cloned program, stop, tell Dawood, retry once after he says to continue.

## 1. Pre-generation checks (do these before spending 20 minutes)
**Picture**
- One face, front or ≤ 3/4 view, mouth visible, eyes open. Face ≥ 35 % of the crop width.
- Build the **scene first**: composite the hi-res character cutout (puppet-animation Step 1) on the
  story background at 1920×1080 (`scene.png`), then cut a square **bust** (head + shoulders, hair not
  touching the edge) → 768×768 (`bust.png`) and note its box in the scene (`x0,y0,side`).
  Never animate a cutout and matte it afterwards: that is what produced the beige halo and chopped
  curls. Animating the scene crop keeps the painting's own hair edge.
- Check the bust on screen before rendering (Read it): hair complete, no second face, no text.

**Audio**
- 3–8 s, one or two sentences, a real pause inside (", " or "…") so the rest mouth can be checked.
- Child (Mia): Kokoro `bf_lily` → `ffmpeg -af "rubberband=pitch=1.26:formant=shifted:pitchq=quality,highpass=f=90,loudnorm=I=-16:TP=-1.5"`
  (formants shifted = a child's timbre, not a sped-up adult). Sad lines: speed 0.82, pitch 1.20.
  Grandma Nell: `bf_emma` speed 0.82 → `pitch=0.90`. Grown woman: `bf_lily` as is.
- Listen-check is not possible here; check the envelope instead (`qa_talk.py` plots it): voiced
  bursts should be separated by clear dips, otherwise the mouth never rests.

## 2. The scene template (fill it, then render)
```
IDENTITY  : <locked character block from story.json>, same hair/clothes/colours as scene.png
MOTION    : mood <happy|sad|neutral>; head: small, slow, one or two turns max; shoulders follow gently
BACKGROUND: <scene.png>, camera static (+ slow push-in in paste-back only)
SPEECH    : "<line>", voice <child-mia|nell|lily>, <speed>; pause at "<word>"
RENDER    : extcrop, size 256 (512 for hero shots), expression E, pose P, still? (see table)
```
| Mood | expression_scale | pose_style | still | notes |
|---|---|---|---|---|
| happy / excited | 1.5 | 12 | no | big smile and brows; pose 12 = lively but not jittery |
| neutral narration | 1.3 | 5 | no | |
| sad / afraid | 1.25 | 3 | no | slower voice does most of the work |
| calm, controlled turn | 1.3 | — | yes + `--input_yaw -6 0 5 0 --input_pitch 0 -3 0` | audio-driven pose off; a deliberate smooth turn with start and stop |

## 3. Render
```bash
EXPR=1.5 POSE=12 bash skills/talking-face/scripts/talk.sh bust.png line.wav out_dir 256 extcrop
```
Background job, poll `Face Renderer:: n/N`. Output `out_dir/<timestamp>.mp4` (256×256, audio muxed).
One render at a time (two in parallel were OOM-killed on 7 GB).

## 4. Paste back into the scene (no matting)
```bash
python3 skills/talking-face/scripts/pasteback_talk.py out_dir/<ts>.mp4 bust.png scene.png x0,y0,side out_1080p.mp4 --mood happy
```
Finds the crop inside the bust by multi-scale template match, maps it to the scene, FSRCNN ×4, pastes
with a 70 px feather, slow eased push-in, mood grade, audio kept. Then `video-4k-export` if needed.
(`scene_talk.py` = the old matte-after approach; keep only for a plain-background portrait.)

## 5. QA with numbers (always, before sending)
```bash
/home/claude/sadtalker/venv311/bin/python skills/talking-face/scripts/qa_talk.py clip.mp4 --audio line.wav --out qa_name
```
| Metric | Good | Fix when bad |
|---|---|---|
| lipsync_corr / lipsync_lag_ms | > 0.5 / within ±80 ms | constant lag → shift audio at mux (`-itsoffset`); low corr → louder consonants in the line, expression 1.3+ |
| mouth_rest_in_pause vs mouth_min | rest ≈ min | mouth stays open in silence → add a real pause in the line, lower expression |
| head_jitter | < 0.6 (ok ≤ 1.2) | shaky → pose 3/5 or `--still` + input_yaw path |
| head_range_pct_face | 3–10 % | > 15 % floats/slides → `--still` + small input_yaw; < 2 % = dead → pose 12 |
| blinks_per_s | 0.1–0.8 | 0 → longer clip or `--ref_eyeblink` video; fluttering → lower expression |
| identity_drift | < 0.012 | face proportions wander → tighter bust, face ≥ 40 % of crop, size 512 |
| bg_motion (corners) | < 0.15 px/frame | background swims → paste-back (static scene) instead of raw crop |
Also look: contact sheet at 2–3 fps, and a 6-frame strip around the biggest head turn for the seam
and the hair line (forehead, ears, shoulders). Stills prove edges and identity, not smoothness: watch
the strip for jumps between neighbouring frames. QA on CPU takes ~1 min per 10 frames; run it in the
background and never alongside a render.

## 6. Diagnose by cause, change one thing
| Symptom | Cause | Fix |
|---|---|---|
| Only the lips move | `--still` + low expression | drop `--still`, expression 1.4–1.5 |
| Beige/white fringe on hair, curls chopped | matting after animation | composite scene first, paste-back |
| Head floats over the body | `full` mode with head motion, or paste-back feather too small | `extcrop` + paste-back feather ≥ 70 px, or `--still` for full |
| Background wobbles near the head | extcrop warps the crop | paste-back (only the head square moves, feathered) |
| Teeth/mouth smeared | 256 px source | size 512 or GFPGAN `--enhancer gfpgan` (test on one line; may "photo-ify" painted faces) |
| Chipmunk voice | pitch without formant shift | `rubberband=…:formant=shifted` |
| Same gesture repeating | pose_style loop on long audio | split into ≤ 6 s lines, vary pose_style per line |

## 7. Capability map
| Need | Tool | Status |
|---|---|---|
| Lip-sync + head + expressions, one portrait | SadTalker here | works, CPU-slow |
| Child / old voice | Kokoro + rubberband | works |
| Clean hair in the scene | scene-first composite + paste-back | works |
| Sharper face | size 512 (~80 min) / GFPGAN | available, untested on painted faces |
| Hands, body, walking, cloth, hugging the cat | AI video model (ElevenLabs Video, ManyMotions `/mcp`, vidIQ Veo) | not available locally |
| Animal faces | — | SadTalker finds no face; use puppet-animation |

Example assets: `yt/stories/2026-10-the-map-that-glowed/talk/` (mia_bust.png, mia_village_bust.png,
scene_village_mia.png, happy_child.wav, sad_child.wav, mia_hv_256.mp4, Mia_happy_village_v3.mp4).
