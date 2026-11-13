# Voice Studio voices for Mastering English Library

The owner makes the voices in Voice Studio. Claude writes the lines, the owner records them there, and
`film.py` puts each recording into its scene by file name. This file holds the voice descriptions to paste
into Voice Studio, the emotion directions, and the file-naming rule.

## The cast

Paste the **Description** into Voice Studio's voice design box. Save the voice under the **Name**.

### 1. Isabella (main narrator)
- **Name:** `Isabella`
- **Description:** A warm young British woman in her late twenties with a clear, gentle London accent. Friendly
  English teacher and storyteller. Smooth, soft and kind, easy for learners to follow, with natural pauses.
- **Use:** lessons, word videos, Shorts, most stories.

### 2. The Legend (epic narrator)
- **Name:** `Legend`
- **Description:** A deep, rich, powerful British male voice in his fifties, slightly gravelly, like the narrator of
  an ancient legend or a great war film. Slow and grand, every word weighted, a sense of history and destiny,
  quiet intensity that rises in big moments.
- **Use:** epic quests (The Map of Seven Words), history films, battles, chapter openings, trailers.

### 3. Gulf storyteller (Arabic, colloquial)
- **Name:** `Rawi Khaleeji`
- **Description:** A warm Gulf Arab man in his thirties speaking natural Gulf Arabic (Omani and Emirati style), like
  a friend telling a story in the majlis. Relaxed, confident, a little playful, clear pronunciation, not formal
  classical Arabic.
- **Use:** Arabic hooks at the start of a video, short Arabic explanations, Instagram and TikTok voice-overs.

### 4. The Elder (Arabic, epic)
- **Name:** `Rawi Al-Asateer`
- **Description:** A deep, wise, older Arab man with a strong, resonant voice, telling legends and history in
  simple Gulf Arabic with the weight of an old storyteller. Slow, dramatic, respectful.
- **Use:** Arabic narration for history and legend videos.

### 5. Boy
- **Name:** `Boy`
- **Description:** A nine-year-old boy, curious, energetic and playful, with a clear young child's voice and an
  American accent. Excited about adventures, asks lots of questions.
- **Use:** children's videos, the curious kid in stories and dialogues.

### 6. Girl
- **Name:** `Girl` (or the owner's existing child voice)
- **Description:** An eight-year-old girl, bright, sweet and confident, with a clear young child's voice and an
  American accent. Loves stories and animals.
- **Use:** children's videos, girl characters, reading-together videos.

### 7. British man
- **Name:** `Tom` (the owner's existing British male voice)
- **Use:** fathers, teachers, old men in stories, a second narrator in dialogues.

### 8. American young man
- **Name:** `Jake` (the owner's existing American male voice)
- **Use:** friends, travellers, conversation videos.

## Emotions

Each line in a script sheet has one emotion. If Voice Studio takes a style or emotion note, paste the
**Direction**; if it takes tags, use the tag.

| Emotion | Tag | Direction |
|---|---|---|
| neutral | — | Clear and natural, like a friendly teacher. |
| calm | [calm] | Calm, warm and unhurried. |
| joy | [happy] | Happy and warm, smiling while speaking. |
| excited | [excited] | Bursting with excitement, energetic, a little faster. |
| sad | [sad] | Quiet and heartbroken, slow, a soft breaking voice. |
| fear | [scared] | Terrified and breathless, almost whispering. |
| whisper | [whispers] | A soft, close whisper, slow and secretive. |
| suspense | [suspenseful] | Low, slow and tense, with dramatic pauses. |
| anger | [angry] | Angry and sharp, controlled fury. |
| surprise | [surprised] | Shocked and amazed, a gasp at the start. |
| tender | [gently] | Gentle and loving, like a bedtime story. |
| epic | [dramatic] | Grand, slow, deep and powerful, like a legend. |

## File names

For a film part, `python3 studio/cinematic/script_sheet.py <film> <part>` writes
`films/<film>/voice-studio/<part>-script.md`: one row per line with its number, voice, emotion and text.
Save each recording as **`<part>-s<number>.wav`** (for example `p1-s003.wav`) in
`films/<film>/voice-studio/`. `film.py` uses that file for the scene and only falls back to a voice role when
the file is missing, so a part can be recorded a little at a time.
