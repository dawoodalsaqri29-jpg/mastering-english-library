---
name: story-studio
description: The map of Dawood's story-video toolkit — which skill does what, in what order, with the current best settings and honest limits. Read FIRST for any story video, animation, talking character, hook, 4K export or Reel request, then open the one skill the job needs.
---

# Story Studio — the map

One story video = script → pictures → motion → voice → assembly → hook → 4K → Reels. Each step has
one skill. Open only the skill for the step you are on; this file is the index and the standing rules.

## The pipeline (in order)
| Step | Skill | What it makes | Who does what |
|---|---|---|---|
| 1 | **english-story-video** (or **motivational-story-video** for B1→C1 motivational stories with 8 Powerful Sentences; **novel-to-animated-series** for a multi-episode series) | story.json: story, Arabic, character bible, shots, voice chunks, words, quiz | Claude writes everything |
| 2 | **animation-story-prompts** | per-shot image + video prompts with the locked character blocks | Claude writes, Dawood generates pictures in ElevenLabs |
| 3a | **puppet-animation** | free cut-out motion from a still: two-leg walk, lean, blink, mouth flap, two characters in a scene | Claude, here, ~1 min / 10 s |
| 3b | **talking-face** | free real lip-sync + head motion + expressions from a portrait (SadTalker on CPU) | Claude, here, ~20 min / 5 s |
| 3c | **animate-story-picture** / **talking-photo** / **lip-sync-voice** | true AI video (walking like a human, cloth, hair physics): ElevenLabs Video, ManyMotions (`/mcp` → ai-video-editor), vidIQ Veo when credits allow | Claude writes prompts or runs the model when credits exist |
| 4 | **story-voice-cast** | narrator + character voices, delivery tags, Kokoro/ElevenLabs settings | Claude |
| 5 | **english-story-video** §6 / **story-video-assembly** | assemble clips + Lily + EN/AR subtitles + word & quiz slides | Claude |
| 6 | **story-hook** | 25–35 s cold open (flash-forward, cut before the reveal), SFX bed, vertical version | Claude; default on every story |
| 7 | **video-4k-export** | 3840×2160 YouTube and 2160×3840 Reel under the 500 MB send limit | Claude |
| 8 | **story-to-shorts**, **story-companion-worksheet** | Shorts/Reels from the long video; PDF worksheet for the store | Claude |

## Standing rules (what Dawood has asked for, every time)
- Open with a strong hook; never spoil the ending. Export 4K for YouTube and Reels.
- Narrator Lily (Kokoro `bf_lily` here; his ElevenLabs Lily when he sends MP3s), speed 0.85–0.9.
- **Child voice for Mia**: `bf_lily` → `rubberband=pitch=1.26:formant=shifted`. Grandma: `bf_emma` 0.82 → pitch 0.90.
- Same locked character blocks and style line in every prompt; reference pictures reused as start images.
- Check every output visually (contact sheet) before sending; say in one line what the method can't do.
- Save every project step to the repo (`yt/stories/<slug>/`), because a story spans days.

## Motion: pick the right tool, say its limit
| Need | Use | Limit to state |
|---|---|---|
| Living still under narration (camera move, sparkle, light) | animate-story-picture Level 1 (`magic_motion.py`) | nothing moves in the picture itself |
| Character walks across / toward camera, two characters together | puppet-animation | cut-out motion; no 3D turn, hands don't reach |
| Character speaks a line with real mouth, teeth, smile, head motion, blinks | talking-face (SadTalker, `extcrop`, expr 1.4–1.5, pose 12; sad: 1.25, pose 3) | head/face region only; body static; 20 min per line |
| Character WALKS and TALKS at once in a scene | puppet-animation `head_video` (green-screen SadTalker head on the walking puppet body) | cut-out walk + real talking head; ~30 min total per 10 s |
| Hair edge vs background | put the character INTO the scene before SadTalker (clean hi-res cutout composite → bust crop → extcrop) instead of matting after | background near the head warps slightly with motion |
| Human-like full-body walking, cloth and hair physics, hugging the cat | AI video model only: ElevenLabs Video (his account), ManyMotions (`/mcp` sign-in), vidIQ Veo (150 credits/month ≈ one 8 s clip) | no GPU here; cannot be done locally |

## What went wrong before (don't repeat)
- v1 cut-out "walk" was a hop: use the two-leg cycle, bob ≤ 0.006.
- v1 talking face with `--still` + 1.1 = only lips move. Use no `--still`, expression 1.4+.
- Per-frame matting of SadTalker output = beige halo / chopped curls. Composite BEFORE animating.
- Two SadTalker renders in parallel = OOM kill. Run sequentially.
- 4K YouTube file > 500 MB can't be sent: `-b:v 4000k -maxrate 6000k` keeps 13 min under 400 MB.
- download.pytorch.org and Hugging Face are blocked; PyPI + GitHub releases work.

## Repo layout (branch `instagram-assets`)
`skills/<skill>/` scripts and SKILL.md · `yt/stories/<YYYY-MM>-<slug>/` story.json, packs, refs,
storyboard, puppet/, talk/, outputs · `yt/series/<slug>/` series bible and episode map.
