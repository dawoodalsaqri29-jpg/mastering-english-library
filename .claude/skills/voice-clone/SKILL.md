---
name: voice-clone
description: Dawood's voice studio. Clone a voice and make speech in it, ElevenLabs-style, with three engines (free local Pocket TTS, MuAPI Minimax clone for Arabic, ElevenLabs when credits allow) plus the free Lily voice. Use when he says "انسخ صوتي", "استنسخ الصوت", "سو صوت", "خلها بصوتي", "voice clone", "voice over", "تعليق صوتي", or asks for narration for a reel, story, course or ad.
---

# Voice studio (voice cloning)

Pick the engine by language and budget. Always tell Dawood which engine and voice you used.

| Need | Engine | Cost |
|---|---|---|
| Reel/story narration (default) | Kokoro `bf_lily` (see the week-46 `voice.py` pattern), speed 0.9 | free |
| English in a cloned voice (from an English reference) | **local**: `scripts/clone_voice.py` (Pocket TTS) | free |
| Dawood's own voice, Arabic or English | **MuAPI Minimax**: `open-generative-ai/scripts/muapi.py clone-voice` then `speak` | MuAPI credits |
| Dawood's existing ElevenLabs clones | ElevenLabs voices `ULSCzsOiaLFGTpLPVsiT` ("Dawood - My Voice (Clear)"), `RSyk3sMbEZQTvyOpzGb0` | ElevenLabs quota (resets monthly) |

## 1. Local, free (English text)

```bash
C=.claude/skills/voice-clone/scripts/clone_voice.py
python3 $C setup                                   # once per machine: ~/stt (Pocket TTS, ~200 MB)
python3 $C enroll lily path/to/clean-english.wav --start 0 --dur 12
python3 $C say lily "Stop saying very happy!" out.wav --speed 0.9 --final   # --final = brand polish, -16 LUFS
python3 $C say lily --file script.txt out.wav --final
python3 $C list
```
- The reference must be 8-15 s of clean speech **in English**. Tested: a Lily reference clones well;
  Dawood's Arabic recordings do NOT carry over to English (speaker similarity ~0.2), so use MuAPI for his voice.
- Check the result: transcribe it with `openwhispr-local` and listen before using it.
- Model licence: the Pocket TTS ONNX bundle ships a CC BY 4.0 licence file but its README says
  non-commercial; keep local clones for drafts until that is confirmed.

## 2. Dawood's voice with MuAPI (Arabic + English)

```bash
M=.claude/skills/open-generative-ai/scripts/muapi.py
python3 $M clone-voice path/to/dawood-60s.mp3 --id dawoodVoice01 --out content/generated
python3 $M speak "مرحبا! اليوم بنتعلم خمس كلمات أقوى من very happy" --voice dawoodVoice01 --lang Arabic --out content/generated
python3 $M voices
```
- Reference: 10 s to 5 min, one speaker, no music. His training clips are in ElevenLabs
  (GET /v1/voices/{id}/samples/{sample_id}/audio downloads them without using quota).
- The id must start with a letter, include digits, 8+ characters, and is unique on MuAPI.
- Needs the MuAPI key saved for api.muapi.ai (header x-api-key).

## 3. ElevenLabs

Use the ElevenLabs connector (`creative_generate_speech` with his voice id) or `https://api.elevenlabs.io/v1/text-to-speech/{voice_id}`
(key injected by the proxy). Check `/v1/user/subscription` first: if `character_count` is near `character_limit`, switch to engine 2.

## Rules
- Only clone voices Dawood owns or has written permission for. Never imitate public figures.
- No music under reels unless he asks. Voice only, -16 LUFS.
- Put finished audio in `content/<campaign>/voice/`, never commit `~/stt` models.
