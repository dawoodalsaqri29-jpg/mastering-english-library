---
name: openwhispr-local
description: OpenWhispr's speech engine running locally and free (Whisper + Silero VAD + speaker diarization via sherpa-onnx). Transcribe any audio/video (Arabic or English), make SRT/VTT subtitles, burn brand captions into reels, turn a recording or meeting into a who-said-what transcript, then summarise, extract action items, write captions, blog posts or lesson notes from it. Use for "فرّغ", "حول الصوت لنص", "ترجمة/سب تايتل", "captions", "subtitles", "transcribe", "meeting notes", "ملخص الاجتماع".
---

# OpenWhispr local (speech to text, no credits)

The desktop app (github.com/OpenWhispr/openwhispr, MIT) runs on Dawood's computer. This skill runs the same
open models headless so Claude can use them in any session. The cloud API/CLI skills
(`openwhispr-api`, `openwhispr-cli`) need his OpenWhispr account and only work where api.openwhispr.com is reachable.

```bash
W=.claude/skills/openwhispr-local/scripts/whisper_local.py
python3 $W setup                                        # once: models into ~/stt (~400 MB, GitHub releases)
python3 $W transcribe FILE --lang ar|en|auto --out DIR   # .txt .srt .vtt .json
python3 $W captions REEL.mp4 --lang en --burn --out DIR  # SRT + REEL.captioned.mp4 (navy box, white bold, lower third)
python3 $W diarize MEETING.m4a --speakers 2 --out DIR    # .meeting.md / .meeting.json with Speaker 1/2 and timestamps
```

Speed: about 3x faster than real time on CPU (a 40 s reel takes ~13 s).

## Every OpenWhispr function, and what to use here

| OpenWhispr feature | Here |
|---|---|
| Dictation / transcription | `transcribe` |
| Audio import (files, batch) | loop `transcribe` over files |
| Meeting transcription + speaker diarization | `diarize`, then write the summary yourself |
| Notes + AI actions (summary, action items, decisions) | read the transcript, then follow `openwhispr-meeting-decisions`, `openwhispr-one-on-one-prep` prompts |
| Dictation translation | transcribe, then translate in Claude (Gulf Arabic <-> English) |
| Voice Assistant / agent | Claude itself |
| Send to Slack / Linear | `openwhispr-meeting-summary-to-slack`, `openwhispr-action-items-to-linear` (need those connectors) |

## Uses for Mastering English Library
- Subtitles for every reel and YouTube video (accessibility + retention): `captions --burn` for TikTok/IG, upload the `.srt` to YouTube.
- Check TTS output: transcribe the voice-over and compare it to the script before publishing.
- Turn Dawood's voice notes (Arabic) into captions, scripts, PDF lesson text or a content plan.
- Student voice messages: transcribe pronunciation attempts and give feedback.

## Rules
- Whisper small is good for English; Arabic is rougher, so read Arabic output before using it.
- Diarization can split one speaker in two: pass `--speakers N` when known.
- Audio stays on the machine. Do not commit `~/stt`.
