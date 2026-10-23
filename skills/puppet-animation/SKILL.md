---
name: puppet-animation
description: Make Dawood's story characters move, walk, lean, blink and TALK from a single still picture — a free cut-out (Live2D-style) animation rendered here with scripts/puppet_animate.py, no video model or credits. Use when he sends character pictures and says "خلّها تتحرك / تمشي / تتكلم", wants an anime-style clip of a character, a scene of two characters together (Mia stroking Whiskers), or when vidIQ/ElevenLabs video credits are not available. For true AI video (real walking legs, head turns) hand over to animate-story-picture Level 2/3.
---

# Puppet animation (cut-out characters that walk and talk)

What it does, honestly: a character cutout is split into head / upper body / skirt-hips / LEFT LEG /
RIGHT LEG (+ a free arm; cat: body + tail + left/right leg groups). While walking the two legs
alternate like a real front-view walk cycle (each leg shortens about its hip so the foot lifts, swings
a little outward, the skirt sways, the arm swings opposite to the legs, one small body bob per step),
the figure breathes, blinks, and opens its mouth to the loudness of a voice file. Actors are placed on one of the story's
painted backgrounds with a slow camera move, a contact shadow and floating particles. It looks like
a hand-made paper-cut / Live2D cartoon: lively, consistent with the reference art, free. It does NOT
redraw the picture — heads don't turn in 3D and hands don't reach. For that, use a video
model (animate-story-picture Level 2/3: ElevenLabs Video, or vidIQ `vidiq_generate_video` after his
credits renew; 8-second Veo clip ≈ his whole monthly allowance).

Tool: `scripts/puppet_animate.py` (PIL + numpy + ffmpeg; Kokoro for voice lines; rembg for cutouts).
Tested assets: `yt/stories/2026-10-the-map-that-glowed/puppet/` (mia_cut.png, cat_cut.png,
nell_cut.png, scene1.json, scene2.json).

## Step 1 — cutouts (once per character)
```bash
pip install --break-system-packages "rembg[cpu]"   # model downloads from GitHub releases (allowed)
python3 - <<'EOF'
from rembg import remove, new_session; from PIL import Image
s = new_session("isnet-general-use")
out = remove(Image.open("mia_ref.png").convert("RGB"), session=s); out.crop(out.getbbox()).save("mia_cut.png")
EOF
```
Full-body, front-facing reference pictures on a plain background cut cleanly. For a turnaround sheet
(3 views) crop the front view first. Look at the cutout on a green canvas before using it.

## Step 2 — rig points (once per character)
Face points are FRACTIONS of the cutout (x/w, y/h), so they survive resizing. Find them by rendering
the head alone and looking (never from a frame with sway/lean — those move the head):
```python
import sys, json; sys.path.insert(0, "skills/puppet-animation/scripts"); import puppet_animate as pa
spec = {"id": "mia", "image": "mia_cut.png", "kind": "human", "height": 0.8, "_fps": 30, "_seconds": 1, "path": []}
ac = pa.Actor(spec, ".", 1080); ac.talk_env = [0.9] * 10; ac.talk_at = 0; ac.blinks = [0.0]
ac.render(0.05, 1).save("head_test.png")      # mouth open + eyes closed → check they sit on the face
```
Then set `"face": {"eyes": [[x,y],[x,y]], "mouth": [x,y], "neck": [x,y], "waist": [x,y]}` in the scene.
Known rigs — Mia: `{"eyes": [[0.447,0.130],[0.585,0.125]], "mouth": [0.523,0.165], "neck": [0.52,0.215], "waist": [0.52,0.45]}`.
Cat: auto (tail found as the separate column group in the top half; mouth optional).

## Step 3 — scene JSON
```json
{"size": [1920,1080], "fps": 30, "seconds": 10, "background": "village.png",
 "camera": {"move": "in", "amount": 0.06}, "fx": "dust", "ground": 0.96,
 "actors": [
  {"id": "mia", "image": "mia_cut.png", "kind": "human", "height": 0.78, "face": {...},
   "path": [{"t": 0, "x": 0.63, "scale": 0.70}, {"t": 6, "x": 0.56, "scale": 1.0}],
   "walk": {"until": 6, "bob": 0.005, "sway": 1.2, "steps": 1.9},
   "arm": {"box": [0.68,0.29,0.98,0.60], "pivot": [0.80,0.31], "amp": 9},
   "lean": [{"t": 6.3, "a": 0}, {"t": 7.3, "a": 7}], "head": [{"t": 6.3, "a": 0}, {"t": 7.3, "a": 9}],
   "talk": {"audio": "line1.wav", "at": 7.0}, "blink": true},
  {"id": "whiskers", "image": "cat_cut.png", "kind": "cat", "height": 0.33,
   "path": [{"t": 0, "x": 0.46, "scale": 0.70}, {"t": 6, "x": 0.41, "scale": 1.0}],
   "walk": {"until": 6, "bob": 0.004, "sway": 1.0, "steps": 2.6},
   "wiggle": {"from": 6.5, "to": 9, "amp": 6, "hz": 0.7}, "tail": {"amp": 12, "hz": 0.8}}]}
```
- `path`: keyed x (fraction of width, feet centre) and `scale` (1.0 = `height`×H). Walking **towards
  the camera** = scale growing (front-view cutouts read best this way); walking across = x changing.
- `walk` runs the two-leg cycle until `until`: `steps` = steps per second (1.7-2.0 child, 2.4-2.8
  cat), `bob` 0.004-0.006 (one small bob per step; bigger looks like hopping), `sway` 1-1.5.
  Legs are found automatically (hem = where the silhouette narrows below the widest skirt row, split =
  the gap between the legs); override with `"legs": {"hem": 0.71, "split": 0.52}` (fractions).
- `arm`: `{"box": [x0,y0,x1,y1], "pivot": [x,y], "amp": 9}` (fractions) cuts the free arm out of the
  torso and swings it about the shoulder. Mia: `{"box": [0.68,0.29,0.98,0.60], "pivot": [0.80,0.31]}`.
  Keep the box on the arm that hangs free, not the one holding a strap.
- `lean` rotates upper body + head about the waist; `head` adds a tilt about the neck. **Positive angle = leans to the LEFT of the frame** (PIL rotates
  counter-clockwise), so lean towards a partner on the left with +, on the right with −.
- `wiggle`/`tilt`: whole-body rotation about the feet (a cat rubbing against legs, a sway of joy).
- `talk`: a voice file + start time; the mouth opens with its loudness. Make lines with Kokoro
  `bf_lily` (speed 0.9) for Mia; one short line per clip (≤ 10 words).
- `fx`: dust (golden hour) / sparkles (magic) / fireflies (night). `ground`: feet line.

Render: `python3 skills/puppet-animation/scripts/puppet_animate.py scene.json out.mp4`
(~1 min per 10 s at 1080p). Check: `--debug-frame 7.6 → png` draws rig markers (they do NOT follow
sway/lean — judge the drawn mouth, not the marker). Always look at a contact sheet
(`ffmpeg -vf "fps=1,scale=480:-2,tile=5x2"`) before sending.

## Scenes that work well
- Approach + line: both walk towards camera, stop, she leans to the cat and says one line.
- Nuzzle: cat walks in from the side, wiggles against her legs; she leans and smiles a line.
- Idle narration shot: no walk, tiny nod + breathing + blink while Lily narrates (a living still).
- Grandma at the cottage door: idle + one line.
Keep clips 6–12 s; use them in `clips/<shot-id>.mp4` for the story assembler (it mutes clip audio —
mix the spoken line back in after assembly, see animate-story-picture Level 3), or as Reels.

## Export
4K for YouTube/Reels: `scale=3840:2160:flags=lanczos,unsharp=5:5:0.4`, `-crf 19`, `+faststart`.
Vertical: blurred-cover background + centred crop (see story-hook skill).

## Limits to say out loud
Cut-out motion only: legs lift and alternate, but a front-view figure can't turn, and the hand
doesn't reach, so "stroking the cat" is shown as the cat rubbing against her while she leans down.
Next level without a video model: ask Dawood for a SIDE-VIEW reference of the character in a
walking pose, then rig legs that rotate about the hip (a true profile walk cycle). Painted eyes blink
with a drawn lid (3 frames) — if it looks wrong on a character, set `"blink": false`.
