---
name: talking-face
description: Make a story character's face really TALK in a close-up: phoneme-synced mouth that opens the painted lips, blinks that close the painted lids, deliberate head/neck/shoulder performance, stable hair edges and identity. Default engine = face rig (Live2D-style, sharp, no distortion) for drawn/anime characters; SadTalker for photo-like portraits. Use for talking close-ups, "تتكلم زي الناس", anime dialogue shots, narrated portraits.
---

# Talking face v5: face rig first, SadTalker second

Built and tested 23 Oct 2026 on Mia (sunset line). Default for illustrated or anime characters is the **face rig** (`scripts/face_rig.py`). It moves the original painting and never re-draws it, so identity, nose, eyes, line work and hair stay exactly as drawn. SadTalker (section 9) is the fallback for photo-real portraits; it is also the only way here to get a 3/4 head turn.

What I saw in the SadTalker close-up before this change (seen directly at 1:1):
- a hazy, smeared halo of sky around the curls on the sun side (the crop's background is warped with the head);
- a face softer than the scene (256 px crop upscaled about 4×);
- teeth as a smeared white blob.

The face rig removes all three by construction. See the before/after in `yt/stories/2026-10-the-map-that-glowed/talk_rig/`.

Limits to say out loud:
- 2D only: head tilt and nod plus a small parallax, no turning toward or away from the camera.
- Mouth shapes are visemes (13 shapes), not a full 3D mouth.
- Expression range is limited to the drawn base (a big painted smile can't become sad); keep one portrait per mood.

## Workflow (stages)
**1. Inputs.** Gather:
- a front or ≤3/4 portrait, as large as possible;
- the background painting;
- the final voice (TTS file before pitch-shift + the pitched file);
- the exact text.

**2. Check them.**
- Face ≥ 300 px wide after a ×4 FSRCNN upscale.
- Mouth closed or neutral; eyes open; hair not cropped.
- Line ≤ 8 s with real pauses.
- Expression matches the mood.

**3. Choose the tool.**
- Drawn or anime character → face rig.
- Photo-like portrait, or the shot needs a 3/4 head turn → SadTalker (§9) or an AI video engine (`references/engine-prompt.md`).

**4. Scene and audio.**
- Cut-out once: `prepare` step (§A).
- Phonemes: `scripts/align_phonemes.py base.wav "text" phones.json` (PocketSphinx 5 from pip, model inside the wheel; use the un-pitched TTS — rubberband keeps the timing).

**5. Performance plan.** `scripts/plan_performance.py phones.json "text" voice.wav perf.json --mood happy --look-x 4 --look-y -3`, then add the scene keys (§C).

**6. Generate.** `python3 scripts/face_rig.py rig.json perf.json close.mp4` (about 3 min for 6 s at 1080p). Check single frames first with `--debug-frame T`.

**7. Review.** Run the checks in §D before sending.

**8. Fix.** Use the defect table (`references/anime-defects.md`): change the one parameter closest to the cause, re-render, compare against the same reference and voice.

**9. Deliver.** `anime_fx.py`, word cards, 4K (anime-shot-director).

## A. Prepare the portrait (once per character and mood)
Crop head to chest from the reference, upscale with FSRCNN ×4 (+ light bilateral), then rembg `isnet-general-use` on a half-size copy, resized back.
- Add a darker-than-background key near the matte for curls.
- Choke 2 px.
- Decontaminate against the reference's background colour (`bgc`).
- Recolour the edge band from inner pixels.

Check on a blue plate at 2×: curls complete, no fringe. Save as `bust_cut.png`.

## B. Rig points (`rig.json`, pixels of bust_cut)
Find them with a 25/50 px grid on a 2× crop of the face. Mia example:
```json
{"image":"bust_cut.png","pivot":[888,600],"chin_y":560,"neck_x":890,"neck_half":100,"neck_fade":[578,655],
 "hair_until":770,"head_center":[888,420],"tip_r0":230,
 "eyes":[{"c":[776,383],"rx":42,"ry":22,"tilt":-10},{"c":[958,349],"rx":42,"ry":24,"tilt":-10}],
 "brows":[[760,312],[952,276]],
 "mouth":{"c":[886,488],"w":150,"angle":-9.6},
 "jaw":{"c":[880,565],"rx":125,"ry":75},"cheeks":[[765,445],[1000,420]]}
```
- `mouth.c` is the centre of the line between the lips, `w` corner to corner, `angle` the lip-line tilt.
- `eyes.tilt` is the head tilt seen in the drawing.
- Optional per eye: `lash_h` (height of the drawn lash cluster, 20) and `skin_band` (clean skin above it, 18).

## C. How the rig moves (what makes it read as human)
- **Skinning, not cut-outs.** Head weight is 1 above the chin and on the hair. The neck column blends from head to body between `neck_fade`, so there is no seam at the collar and the neck keeps its length. Body: breathing (0.25 % scale) and an inhale before each phrase. Shoulders answer the head 0.22 s later at 22 % of its tilt, never with the mouth.
- **Hair.** Roots move with the head; tips (hair beyond `tip_r0` from the head centre) follow the head pose from `hair_lag` (0.14 s) earlier, plus a ≤ 2 px breeze. The matte is computed once, so the edge can't flicker.
- **Mouth.** It opens the PAINTED lips. Everything under the lip line (lower lip, chin) is displaced along the mouth axis by the viseme's opening profile; round shapes pucker the corners; the upper lip lifts for teeth. Only the revealed gap is painted: dark interior, one soft upper-teeth band, tongue. Supersampled ×3. Visemes come from phonemes, with a 35 ms lead and a 45 ms coarticulation spring; silence returns to the drawn rest mouth.
- **Blink.** It closes the PAINTED lid. The clean skin band above the lash cluster stretches over the eye while the drawn lashes slide down intact to the lid edge. 4-frame blink (½, closed, closed, ½), placed in pauses, never periodic.
- **Gaze.** The eye content shifts ≤ 4 px inside an eroded eye mask (for example, toward the sun at the start).
- **Brows and cheeks.** Brows lift (local lift weight) on "!" stresses; cheeks rise ≤ 3 px on smiling vowels.
- **Head.** One gesture per phrase on its stressed syllable (nod for statements, brow lift for "!", tilt for "?"), a slow tilt change between phrases, then stillness at the end.
- **Scene.** Clean background plate (FSRCNN, defocus σ 2.5), one push-in for both layers, warm rim light from the sun side, slight grade.

Perf keys: `roll`, `nod`, `head_dx`, `gestures` [{t, d, nod, roll, brow}], `gaze_x/y`, `brow`, `cheek`, `blinks`, `inhales`, `hair_lag`, `breath_period`, `push`, `rim`, `bg_crop`, `bg_blur`, `char_scale`, `char_pos`, `voice_at`.

## D. Review (before sending)
- **Normal speed with sound:** overall feel.
- **Consecutive-frame strips** (every 2nd frame) at 1:1:
  - mouth through one phrase (open vowels open, M/B/P closed, rest in pauses, no doubled lips);
  - a blink (no patch or streaks; lashes on the lid edge);
  - the biggest tilt (neck continuous, collar still, tips trailing then settling);
  - hair edge on the bright side (identical edge across frames).
- **Numbers:** `qa_talk.py` (§9 table) on the final clip. Note: with the rig, `identity_drift` and `bg_motion` should be near zero by construction; the lip-sync correlation against loudness is only a coarse check (phoneme sync is checked against `phones.json`).

Rate each criterion as passed / needs fixing / not verified. No made-up scores. Listening is not possible here, so say so.

## E. Test results, 23 Oct 2026 (same voice line "It's going down... It's a sunset! So beautiful.", same scene)
Measured with `qa_talk.py` (landmarks):

| Metric | SadTalker | Face rig v3 | Reading |
|---|---|---|---|
| head_jitter (% face) | 1.31 (shaky) | 0.94 (ok) | rig motion is smooth by construction; part of the 0.94 is landmark noise |
| lipsync corr vs loudness | 0.66, lag −40 ms | 0.67, lag +167 ms | the landmark lag on the thin painted mouth is unreliable: the rig's own mouth track vs the audio envelope = 0 ms lag (corr 0.70), and frame-by-frame the round mouth appears on "go-" at 0.72 s exactly. Phoneme sync is checked against phones.json; listening wasn't possible |
| mouth_rest_in_pause | 0.015 | 0.006 | rig returns to the drawn rest mouth in pauses |
| mouth_max | 0.17 | 0.08 | rig opens less (calm child); raise the viseme `open` values if a bigger mouth is wanted |
| blinks | 3 (0.53/s) | 3 (0.5/s), in pauses | |
| identity_drift | 0.006 | 0.011 | both under 0.012; the rig never changes features: its drift is landmark noise from jaw and blinks |
| bg_motion (corners) | 0.46 px/f | 0.22 px/f | rig: only the deliberate push-in |
| face width on screen | 260 px (from a 256 crop) | 357 px (×4 portrait) | sharpness |

Visual checks recorded:

| Criterion | SadTalker (before) | Face rig (after) |
|---|---|---|
| Identity / features | soft, nose and cheeks rubbery when talking | exact painting, nose fixed |
| Hair edge vs background | hazy halo on the sun side | clean, stable |
| Mouth / teeth | white smear | painted lips open; teeth one soft band |
| Sync method | loudness-driven | phoneme-driven |
| Head / neck / shoulders | jitter from audio pose | planned gestures, blended neck, delayed shoulders |
| Blink | generator blink | painted lid closes, irregular |
| Background | breathes near the head | static plate + push-in |
| Sharpness | 256 px upscaled | portrait ×4, face ~380 px on a 1080p screen |

## 9. SadTalker path (photo-like portraits, or when a 3/4 turn is needed)
Setup: `bash scripts/setup_sadtalker.sh /home/claude/sadtalker` (Python 3.11 venv, torch 2.1.2 from PyPI, weights from GitHub releases). Render: `EXPR=1.5 POSE=12 bash scripts/talk.sh bust.png line.wav out 256 extcrop`. One render at a time. Then `pasteback_talk.py` into the scene. About 20–35 min per 5 s line.

Never `pkill -f inference.py` from a shell whose command line contains that text (it kills the shell); use `kill $(pgrep -f "^python inference")`.

QA: `/home/claude/sadtalker/venv311/bin/python scripts/qa_talk.py clip.mp4 --audio clip.wav --out qa_name`. This takes about 1 min per 10 frames, and longer at 1080p; run it alone. Good values:
- lipsync_corr > 0.3 with aligned peaks
- head_jitter < 0.6
- identity_drift < 0.012
- bg_motion < 0.15 px/frame
- blinks 0.1–0.8 per second

## Voices
Child (Mia): Kokoro `bf_lily` → `rubberband=pitch=1.26:formant=shifted:pitchq=quality`. Grandma Nell: `bf_emma` 0.82 → pitch 0.90. Build lines phrase by phrase with real pauses (Kokoro per phrase + silences) and keep the un-pitched file for alignment.

## Engine prompt (when an AI video model is used)
Keep the workflow out of the engine. Use the short template in `references/engine-prompt.md`; the dialogue goes in the engine's own audio or lip-sync field.
