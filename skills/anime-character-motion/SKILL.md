---
name: anime-character-motion
description: Make a story character WALK like a real person in side view (anime / studio cut-out rig) and talk while walking, from one side-view drawing: legs with hip-knee-ankle, heel strike, toe-off, legs passing, arm swing, body bob, blinks, profile mouth flaps, natural stop, walk left or right, camera follow, footsteps. Use for "خلها تمشي زي الناس / مثل الأنمي", walk across a scene, walk-in-and-stop-then-talk shots.
---

# Anime character motion (side-view skeletal walk) v1.4

Built and proven 23 Oct 2026 on Mia ("The Map That Glowed"). This replaced the front-view puppet walk that Dawood called "bad": a front view can't show legs passing each other, and the 12 AI walk frames he generated were all "legs apart" poses, so playing them in order only jitters. A real walk needs a skeleton.

## What it does (honest)
From ONE side-view drawing, the character is split into body (head, torso, skirt and near arm), far arm, thigh, shin with sock, and boot. A real walk cycle drives the legs:
- **Leg cycle:** heel strike, foot flattens, heel rises about the ball, toe-off, swing with knee bend, next heel strike.
- **Leg solving:** 2-bone IK finds the knee each frame.
- **Feet are fixed in the world while planted**, so the feet never slide.
- **Body:** the hip dips at contact and rises when the legs pass (two bobs per cycle). Slight forward lean and sway. The far arm swings opposite to the near leg.
- **Face:** blinks with a skin lid and lash line. A profile mouth opens on twos (anime timing) to the voice loudness.
- **Footsteps:** synthesized on every heel strike, plus a soft ambience bed.
- **Moves:** walk right or left (`facing`), stop with a closing step and a small settle (`stop`), camera follows the walker.

**Limits to say:** it's 2D cut-out (Moho / Toon Boom style), not a redraw:
- No 3D turn toward the camera. The near hand stays on the bag.
- Hair and cloth have no physics.
- Profile mouth flaps aren't phoneme-accurate. For real lip-sync, cut to a front close-up (talking-face).

**Speed:** about 100 s for 7.5 s at 1080p.

## Files
Repo `dawoodalsaqri29-jpg/mastering-english-library`, branch `instagram-assets`, `skills/anime-character-motion/scripts/`:
- `slice_sheet.py`: sprite sheet to clean RGBA frames. Auto-detects the grid on a flat background, FSRCNN x4, rembg isnet. Adds a darker-than-background key for hair locks, chokes 2 px (removes the white halo), decontaminates and recolours the edge.
- `sprite_walk.py`: rig, walk cycle, scene renderer.
  - `--poses strip.png`: 8 phases of one cycle.
  - `--legs strip.png`: leg close-ups.
  - `rig.json scene.json out.mp4`: full scene.
- `anime_fx.py`: finishing pass. Light motes, highlight bloom, warm light leak, grain, optional radial speed lines for an impact beat.
- `rigs/mia_side.json` + `rigs/mia_side_f00.png`: Mia's tested rig.
- Example scene: `yt/stories/2026-10-the-map-that-glowed/anime/`.

FSRCNN model: `/root/srmodels/FSRCNN_x4.pb`. If it's missing, download it from GitHub (Saafke/FSRCNN_Tensorflow, models/FSRCNN_x4.pb).

## Step 1: get the side-view drawing (one per character)
Ask Dawood for, or generate (Figma `generate_image` / ElevenLabs Image), a sheet in the story's locked style:
> "<locked character block>, full body, strict side view facing right, walking, mid-stride: one leg forward on the heel, one leg back on the toe, arms relaxed, plain light grey background, same outfit and hair as the reference, storybook illustration"

- **Hair and face must match the front reference** (the 23 Oct sheet gave Mia a shorter bob than her reference curls). Generate image-to-image with the front reference attached, and check the hair length before rigging.
- **Downloading:** figma.com asset downloads are blocked by the proxy, so Dawood saves the image and attaches it.
- **Picking the base frame:** best is legs apart with the front leg straight (heel strike), the far arm hanging free, and the near hand on the bag/strap.

## Step 1b: make the side drawing match the front reference (when the hair differs)
`scripts/hair_match.py` (run in the walk folder) did this for Mia on 24 Oct, when the side sheet had a smooth cool bob and the reference had warm, voluminous curls:
1. A hair mask on the side frame (hue < 35°, sat > 0.35, val < 0.75, above the collar, largest component).
2. A Lab colour transfer of the side hair to the reference hair's mean and std (80 %).
3. Real curl patches cut from the reference hair edge (cut-out bust from talking-face §A), stamped along the side hair's silhouette behind the original hair (rotated to the outline normal, scale ~0.74, luminance matched a little darker), plus a front layer of curly ends along the bottom of the bob.
4. The frame is padded 44 px at the top so the curls aren't clipped; all rig y-coordinates are shifted by +44 (`rig_mia_curly.json`).
5. `hair_added_mask.png` is set as `"hair_extra"` in the rig, so added curls below the head cut ride on the head piece and are cut out of the torso.

This is a patch, not a redraw: the curls are a little softer than the sprite's strokes. Best fix: generate the side sheet image-to-image from the front reference.

## Step 2: slice and clean
`python3 slice_sheet.py sheet.png frames/`, then resize the chosen frame to 1300 px tall (`f00_1300.png`).

Check it on green at 2x around the hair and boots. Look for: no halo, no holes in the hair. Thin lace loops may drop out; that's acceptable.

## Step 3: rig points (about 15 min, look, don't guess)
Draw a 50 px grid on crops: legs (2x zoom), torso and arm, face (2x). Fill `rig.json` with coordinates in the 1300 px frame:

| key | what |
|---|---|
| `hip` | hip joint under the skirt, at the torso centre (about 58 % of height) |
| `hem` | skirt bottom polyline across the whole width (legs below it are removed from the body) |
| `leg_axis` | [top centre of the straight front leg just under the hem, ankle centre] |
| `leg_poly` | loose polygon around that leg (hem to ankle) |
| `boot_poly` | polygon around its boot following the boot collar |
| `ankle`, `heel`, `toe` | ankle pivot; heel bottom and toe tip on the sole |
| `arm_cut` | polyline separating the far arm from the torso front edge; `arm_y` its y-range; `shoulder` its pivot |
| `eye` | [cx, cy, rx, ry] of the eye white |
| `mouth` | [back corner, front corner] of the drawn mouth line |
| `L1`, `L2` | thigh and shin length (Mia 205 / 225 for 1300 px; hip to ankle about 0.95 x (L1 + L2)) |

Overlay the points on the frame and look (`rig_dbg.png`). Then `--poses` and `--legs`. Check:
- Boots touch the ground line.
- The knee bends forward.
- The legs pass each other.
- The toe doesn't sink at toe-off (keep `to` at 22° or less, ball at 0.80).

## Step 4: scene JSON
```json
{"size":[1920,1080], "fps":30, "seconds":8, "background":"hills.png", "bg_zoom":1.35, "bg_y":0.75,
 "char_height":0.58, "ground_y":0.95, "start_x":-0.12, "facing":1, "follow":0.55, "frame_x":0.42,
 "walk":{"stride":600, "period":1.0, "bob":16, "lift":70, "lean":2.5, "arm":20, "stop":5.6, "close":0.55},
 "talk":{"audio":"walk_line.wav", "at":1.6},
 "rim":{"dx":5, "dy":-2, "strength":0.5}}
```

**Walk settings**
- `period` is the time for 2 steps. Child: 0.9 to 1.0 s. Adult: 1.05 to 1.15 s. Running: use 0.6, stride 1.6x, bob 1.5x, lift 2x and lean 8.
- `stride` is in rig pixels per cycle. Mia: 600 for a 1300 px figure.
- `bob` 12 to 18. Higher looks bouncy.

**Stop and facing**
- `stop`: she stops at the first near-leg heel strike after this time, closes the back foot beside the front, and settles.
- `facing: -1` walks left: use `start_x` > 1 and the camera starts at the right of the painting.

**Framing and light**
- `char_height` 0.5 to 0.62 for a wide walking shot; `ground_y` is the feet line.
- `rim` adds warm back-light on the edge facing the sun (match the painting's light direction: dx > 0 means light from the right).

**Background**
- The camera pans the painting at 1.0x, so the planted feet stay locked to the painted ground.
- No parallax with a single painting. For depth, ask for separate foreground and background layers.

Render: `python3 sprite_walk.py rig.json scene.json walk.mp4`, then `anime_fx.py walk.mp4 walk_fx.mp4`.

## Step 5: check before sending
1. A contact sheet at 3 fps.
2. A strip following the character (`crop` around her x, every 3rd frame), checking:
   - legs pass each other;
   - no foot slide against the flowers or ground;
   - blink frames look like a closed eye, not a patch;
   - mouth shapes are small and inside the face.
3. A strip around the stop.

Then say the limits in one line.

## Acting: head, pointing, nods, camera tilt (v1.1)
Add to the scene JSON (all keyed, eased; times in s):
- `"head": [[t, deg], ...]`: + = look up (sun, sky), − = look down (sheep, grass). The head is its own piece. Rig needs:
  - `head_cut`: polyline along the collar top / under the hair;
  - `neck`: pivot.
  The head rotates about the neck and tucks 30 px behind the torso. Keep it within ±18°.
- `"nods": [t, ...]`: a 4° dip each (counting "one, two, three", agreeing). Speech adds tiny head accents automatically.
- `"arm": [[t, deg, weight], ...]`: far arm override. Use 50° to point ahead or at animals, 95–100° to point up at the sun or sky. Weight 0 = walking swing.
- `"cam_tilt": [[t, px], ...]`: the camera tilts up to show the sky or sun (the character and grass move down with the painting).
- `"lines": [{"audio", "at"}, ...]`: several voice lines in one shot; the mouth follows all of them. Build counted lines from parts with real pauses (`mk_lines2.py` pattern) and keep the word timings for nods and word cards.
- `"blinks": [t, ...]`: optional fixed blinks (otherwise random every 2.2–4 s).

## Follow-through: dress and hair (v1.2)
Rig keys:
- `"skirt": {"top": 640, "amp": 7, "drag": 4, "lag": 0.08}`: the dress below the waist (y = top) warps progressively to the hem. It trails backwards with walking speed and swings twice per cycle, a little behind the legs.
- `"hair": {"box": [40, 40, 300, 350], "face_x": 255, "amp": 0.035, "drag": 3}`: the back curls lag the body's up-and-down bob (follow the hip velocity from 0.08–0.16 s earlier) and trail with speed. Keep `face_x` behind the ear so the ear and face never wobble.

- `"bag": {"box": [70, 670, 300, 880], "strap_y": 680, "amp": 0.045}`: the shoulder bag bounces against the hip, lagging the bob. The strap end stays fixed.
- Every step is slightly different: lift ±14 %, arm swing ±15 % and bob vary per cycle (deterministic noise), so the walk never looks like a loop.
- The head dips about 1.4° at each heel strike and recovers.

After a stop, all of them settle with a small damped bounce. The values are computed in `secondary()`; the arrays are remapped per frame (cheap).

## Walking IN the grass (v1.1)
`"grass": {"spacing": 5, "rows": 3, "height": [34, 78], "flowers": 0.04, "window": 330, "kick": 7}`. Effects:
- Blades are fixed in the painting and drawn in front of the boots. They take the painting's own grass greens (sampled from its bottom third, never a fixed bright green, which looked like a fake strip), cover the lower part of the boots, sway with the wind, and bend away and flatten under each foot. They are drawn only near the walker, fading out at the edges, so they blend into the painted meadow.
- At every toe-off, bits of grass and petals are kicked up and fall.

Sound:
- every heel strike: a grass footstep (crunchy swish + soft thump);
- every swing: a light brush;
- underneath: a wind bed.

## Living background (v1.1)
`"bg_anim": [{"pivot": [x, y], "box": [x0, y0, x1, y1], "amp": 4, "period": 3.4, "phase": 0, "lift": [[t, deg], ...]}]`. Coordinates are in the ORIGINAL painting's pixels.
- A feathered patch (e.g. a grazing sheep's head) rocks about its pivot with a chewing jitter.
- `lift` raises the head at a moment, e.g. when the character says "sheep".
- `"sfx": [{"t": 10.85, "synth": "bleat", "f0": 390}]` adds a synthesized sheep "baa" (a buzzy source, a 21 Hz tremolo and vowel formants). It's an approximation: keep the gain at 0.8 or below, or pass a real recording with `"file"`.

## Teaching layer: word cards
`scripts/word_cards.py in.mp4 cards.json out.mp4` pops up the English word, IPA and Arabic meaning at the moment the word is spoken. It springs in with a sparkle burst and a soft "ting", then fades.
- Use 1 card per key word, about 2.4 s, positioned near the thing (sheep card over the sheep, sunset card in the sky).
- Fonts: Playfair Display (English), DejaVu Sans (IPA), Cairo 800 (Arabic, via raqm).

## Talking while walking vs close-up
- **Wide shot, side view:** walking line with profile mouth flaps (this skill).
- **Emotional or important lines:** cut to a front close-up with real lip-sync (talking-face skill, `pasteback_talk.py` into the same background). That's anime grammar: wide walk, stop, cut in, line.

## Next upgrades (not built yet)
- Head turn toward the camera (needs a 3/4 head drawing as a swap).
- Skirt hem follow-through (mesh warp).
- Run cycle preset.
- Two characters walking together (second rig + cat quadruped rig).
- Parallax background layers.
