---
name: anime-shot-director
description: Turn a story scene into an anime-style sequence of shots (establishing, wide walk, stop, cut-in close-up talking, reaction, insert, impact), decide which tool renders each shot, then cut them together with sound (footsteps, ambience, voice J-cuts) and an anime finishing pass, exported 4K. Use when Dawood wants a story "مثل الأنمي", a whole story animated scene by scene, or a scene where a character walks, stops and talks.
---

# Anime shot director v1

One story = scenes; one scene = 3 to 8 shots of 2 to 8 s. Anime reads as anime because of **shot grammar and timing**, not just drawing style:
- wide shot to set the place;
- character moving across it;
- cut in close for the feeling;
- a beat of silence;
- a reaction;
- an insert of the important object.

This skill plans those shots and assembles them. The motion itself comes from the other skills.

## 1. Shot types and which tool makes each
| Shot | Use for | Tool (skill) | Time to render |
|---|---|---|---|
| Establishing (2 to 4 s) | new place, time of day | animate-story-picture `magic_motion.py` (slow push or pan, light, particles) | 1 min |
| Wide walk / run (5 to 9 s) | travel, arriving, leaving | **anime-character-motion** `sprite_walk.py` (side view, legs pass, stop) | 2 min |
| Walk-in and stop (6 to 8 s) | arriving before a line | same, with `walk.stop` | 2 min |
| Talking close-up (3 to 6 s) | every important line, feelings | **talking-face** SadTalker + `pasteback_talk.py` into the same painting | 20 to 25 min per line |
| Two-shot (6 to 10 s) | Mia with Whiskers or Nell | puppet-animation (front) or two rigs side by side | 2 to 6 min |
| Reaction (1.5 to 3 s) | listener's face, cat's ears | talking-face with a silent or breath track (expression 1.2), or puppet blink + head tilt | 10 min / 1 min |
| Insert (1.5 to 3 s) | the sun she points at, the map glowing, a letter | `insert_shot.py img cx cy width secs out.mp4 --rays --chime` (FSRCNN crop, slow push-in, god rays, chime) or magic_motion + `anime_fx.py` | 1 min |
| Teaching layer | every key English word as it's spoken | `word_cards.py clip.mp4 cards.json out.mp4` (word + IPA + Arabic, pop-in, ting); run LAST, after anime_fx, so the cards stay crisp | 1 min |
| Impact beat (0.5 to 1 s) | surprise, discovery | close-up freeze + `anime_fx.py --speed-lines` + white flash + hit SFX | 1 min |

## 2. Write the shot list first (before rendering anything)
For each scene of story.json, write a table:
```
SCENE 3: "The map begins to glow" (hills at sunset, happy, curious)
# | shot          | dur | camera              | action                                 | audio                    | tool
1 | establishing  | 3.0 | slow pan right      | hills, sheep, sun                      | ambience, birds          | magic_motion
2 | wide walk     | 6.6 | follow, then hold   | Mia walks in from left, stops          | footsteps; LINE 1 at 1.6 | sprite_walk (stop 5.6)
3 | close-up      | 4.2 | static, slow push   | Mia smiles, says LINE 2                | LINE 2                   | talking-face
4 | insert        | 2.0 | push in             | the map in her hands glows             | shimmer SFX              | magic_motion + fx
```
**Rules**
- Each line of dialogue gets one shot. Wide shots for movement, close-ups for words that matter.
- Keep the 180° rule: if Mia walks left to right in shot 2, she keeps facing right in her close-up and in the next walk.
- Cut on action (when she stops) or on a breath, never mid-word. A J-cut (the next line starts 0.2 s before the picture changes) feels natural.
- Shot lengths: let the last word land plus 0.5 s, then cut.
- Hold one quiet beat (1 to 1.5 s, no voice) before a reveal.
- Same painting for the wide shot and its close-up, so the place doesn't jump.
- **Character consistency:** the side-view drawing and the front portrait must have the same hair, clothes and colours. Check side by side before rendering. If they differ, fix the drawing first; don't ship the mismatch.

**Make the character DO things in every shot** (Dawood's standard, 23 Oct): walking through grass that reacts, going to the animals, pointing, counting with nods, looking up at the sun, and saying simple English words that pop up with their Arabic meaning. A shot where she only walks and talks reads as "empty".

Reference scene ("The Map That Glowed", hills at sunset, 30 s; `yt/stories/2026-10-the-map-that-glowed/anime/`):
1. Wide (15.4 s): Mia walks in through the grass ("What a lovely evening! The grass is so soft."), stops near the grazing sheep, points and counts with a nod on each number ("Look! Sheep! One, two, three sheep!"). A sheep lifts its head and bleats. She looks up and points at the sun ("Look at the sun! It's so beautiful!") and the camera tilts up.
2. Insert (2.4 s): the sun, with rays and a chime.
3. Close-up (5.6 s): real lip-sync, "It's going down... It's a sunset! So beautiful."
4. Wide (7 s): she walks away through the grass ("Come on, let's go home before dark!").

Word cards: grass, sheep, sun, sunset, beautiful.

Order that worked: render shots, `anime_fx.py` per shot, `edit_shots.py`, `word_cards.py` (last, so cards stay crisp), then 4K and Reel.

## 3. Render (one at a time, long ones in the background)
1. Start the SadTalker close-ups first (slowest; one at a time, they OOM in parallel).
2. While they render, make the wide walks, establishing shots and inserts.
3. Voices: Kokoro (story-voice-cast). Mia: `bf_lily` with `rubberband=pitch=1.26:formant=shifted`. Lines of 3 to 6 s with a pause inside.

## 4. Cut the scene
`python3 edit_shots.py edit.json scene.mp4`:
```json
{"size":[1920,1080], "fps":30, "ambience":0.035,
 "shots":[{"file":"walk_fx.mp4","in":0,"out":6.8},
          {"file":"close_fx.mp4","in":0,"out":4.2,"trans":"cut"}]}
```
- `trans`: `cut` (default, the anime norm) or `dissolve` with `dur` (time passing, scene change).
- The pink-noise ambience bed runs under all shots, so cuts don't drop to silence.

Then run the finishing pass, if it wasn't already done per shot: `anime_fx.py scene.mp4 scene_fx.mp4 --motes 40 --bloom 0.35 --leak tr --grain 3`. Use `--speed-lines 4.0-4.6` on an impact beat. Match `--leak` to the painting's sun side.

## 4b. Sound design (Dawood: "make every sound clear, like real life")
Don't ship the per-shot audio. Rebuild the whole scene's soundtrack on the edit timeline with `sound_design.py sound.json scene_mix.wav`, then mux it over the edited video (`-map 0:v -map 1:a -c:v copy`), including the 4K and Reel files.
- **Voices:** EQ (high-pass 90 Hz, −2.5 dB at 260 Hz, +3 dB at 3.4 kHz), compressor, −16 LUFS. Always on top.
- **Ambience:** ducks 55 % under the voice.
- **Grass footsteps:** heel crunch, toe roll, rustle and a soft thump at every heel strike, panned with the character; light brushes on the swing; `step_gain` 0.85. Get the step times from `sprite_walk.Walker` with the same scene JSON, offset by the shot's start in the edit.
- **Animals:** sheep bleats are voice-based. Kokoro "Baaaaa." (`bf_emma` / `am_michael`) → rubberband to ~300 Hz with shifted formants → vibrato + tremolo at 16 Hz → nasal EQ → outdoor echo. Keep them at the voice's RMS or below (gain 0.12–0.28); a 0.8 gain was 7 dB louder than Mia.
- **Bed:** breeze plus leaves; evening bird chirps every 2–4.5 s (birds ≤ 0.05, or they get shrill).
- **Accents:** chimes on inserts; a ting on each word card.
- **Master:** −14 LUFS, TP −1.
- **Check by numbers:** RMS and peak of windows (ambience only, steps only, voice, bleat). Target: voice peaks about 8 dB above step peaks, bleat RMS ≤ voice RMS, ambience about 13 dB under the voice.
- **Real recordings beat synthesis:** this workspace can't download sound libraries (only PyPI is reachable; the GitHub sound repos and freesound are blocked). When Dawood sends real recordings (for example ElevenLabs Sound Effects: "sheep bleating in a meadow", "child footsteps on grass"), put them in `sfx` with `"file"`.

## 5. Export and check
- 4K: `ffmpeg -i scene_fx.mp4 -vf "scale=3840:2160:flags=lanczos,unsharp=5:5:0.4" -c:v libx264 -crf 19 -preset slow -c:a copy -movflags +faststart out_4K.mp4` (video-4k-export).
- Reel: vertical with a blurred-cover background (story-hook).
- Check before sending:
  - a contact sheet of the whole scene at 2 fps;
  - a following-strip of each walk;
  - the cut points (one frame before and one after each cut);
  - the levels: voice about -16 LUFS, footsteps well under the voice.

## 6. Whole story workflow
1. story.json gives scenes (english-story-video / novel-to-animated-series).
2. A shot list per scene (section 2), saved as `yt/stories/<slug>/anime/shotlist.md`.
3. Asset list: which side-view drawings, front portraits (one per mood), backgrounds and object inserts are missing. Ask Dawood for them in one message, with prompts (animation-story-prompts + anime-character-motion Step 1).
4. Rigs once per character (anime-character-motion Step 3). They're reused in every scene.
5. Render scene by scene, cut, then join the scenes with story-video-assembly (narration, subtitles, word slides) and story-hook for the cold open.
6. Save shot lists, rigs, scene JSONs and finished scenes to the repo after each scene, because a story takes days.

## What it can't do yet (say it)
- Characters can't turn around on screen (cut instead) or touch or hug (hands are cut-out).
- Close-up lip-sync is about 20 min per line on this CPU.
- Hair and cloth physics, and true hand-drawn in-betweens, need an AI video model (ElevenLabs Video, ManyMotions, vidIQ Veo).
