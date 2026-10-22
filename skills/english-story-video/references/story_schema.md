# story.json format

```json
{
  "slug": "the-glowing-map",
  "title": "The Map That Glowed",
  "level": "B1–C1",
  "voice": {"name": "Lily", "id": "3XD5qTvPWht0mpTnYXY0", "speed": 0.85},
  "style": "A storybook illustration in a rich, impasto painterly style, reminiscent of classic fairy tale art, vibrant colors and a soft, diffused atmosphere",
  "negative": "no text, no letters, no subtitles, no watermark, consistent character design",
  "characters": [
    {"id": "mia", "name": "Mia", "bible": "Mia, a 9-year-old girl with shoulder-length curly chestnut-brown hair, ..."},
    {"id": "whiskers", "name": "Whiskers", "bible": "Whiskers, a sleek, slender jet-black cat with piercing emerald-green eyes, ..."}
  ],
  "locations": [
    {"id": "village", "bible": "a tranquil English-style village of thatched cottages on rolling green hills"}
  ],
  "references": [
    {"id": "R1", "kind": "character", "of": "mia", "prompt": "<style>, full-body character reference of <bible>, standing, plain warm painted background, front view"}
  ],
  "chapters": [{"n": 1, "title": "The Brittle Map", "ar": "الخريطة الهشّة"}],
  "thumb_shot": "S07", "thumb_text": "THE MAP THAT GLOWED",
  "shots": [
    {"id": "S01", "type": "video", "duration": 5, "camera": "wide establishing shot, slow push-in",
     "who": ["mia", "whiskers"], "where": "village", "light": "golden hour",
     "action": "Mia walks along a dirt path at the edge of the village while Whiskers trots beside her"}
  ],
  "lines": [
    {"id": 1, "chunk": "A", "section": "chapter", "text": "Chapter one. The Brittle Map.", "slide": "chapter-1"},
    {"id": 2, "chunk": "A", "section": "story", "text": "In a quiet village at the edge of the hills, there lived a girl called Mia.", "ar": "في قرية هادئة على طرف التلال، عاشت فتاة اسمها ميا.", "shots": ["S01"]},
    {"id": 30, "chunk": "C", "section": "words", "text": "Brittle. Something brittle breaks very easily.", "slide": "word-brittle"}
  ],
  "vocab": [
    {"word": "brittle", "ipa": "/ˈbrɪt.əl/", "pos": "adjective", "ar": "هشّ، سريع الكسر",
     "meaning": "hard but easily broken", "example": "Mia found a brittle old map."}
  ],
  "quiz": [
    {"id": "q1", "q": "Why did Mia hold the map so carefully?", "options": ["It was brittle", "It was wet", "It was new"], "answer": 0}
  ],
  "outro": {"text": "Which word will you use today? Tell me in the comments."}
}
```

## Field notes

- **shots[].prompt** is optional: if absent, `make_packs.py` builds it as
  `style + camera + bibles(who) + action + location bible + light + negative`. Write `prompt`
  yourself only when a shot needs something special.
- **lines[].shots**: one or more shot ids. Several lines may share a shot (it then spans them);
  a line with two shots splits its time between them evenly.
- **lines[].slide**: id of a slide for the non-story parts. Ids the assembler understands:
  `title`, `chapter-<n>`, `words-intro`, `word-<word>`, `quiz-<id>`, `quiz-<id>-answer`, `outro`.
- **lines[].ar**: Arabic translation, shown under the English subtitle (story lines only).
- **shots[].type**: `video` (Seedance clip, `duration` 5 or 10) or `image` (still picture, animated
  with Ken Burns by the assembler; leave out the camera move in its prompt).
- **lines[].pause**: optional seconds of silence to add after the line (e.g. quiz thinking time).
- **chunk** letters must match the voice files Dawood sends (`voice-A.mp3`, `voice-B.mp3`, …),
  in order. Keep each chunk under 2,000 characters.
