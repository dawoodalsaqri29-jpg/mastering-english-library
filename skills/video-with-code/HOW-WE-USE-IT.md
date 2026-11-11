# How Mastering English Library uses the Video with Code course

- Shorts: words only (vocabulary, phrases). New Shorts format: Sketch to Motion, "Name it before I do!"
  (yt/shorts/sketch-to-motion/name-it-before-i-do). Change the WORDS list and the drawings for a new topic.
- Long videos: any topic around English: history, wars, word origins, stories. Mix styles inside one video
  (painted-history for battles, map-reveal for movement, archival-doc for words and documents).
  Pipeline: yt/long/how-war-made-english/doc_build.py <chapter.json>.
- styles/ holds the specs of all 19 course styles. Seven already have engines (skills/video-styles).
  The other twelve need an engine built from styles/<id>/SKILL.md, docs.md and templates.json before use.
  Recommended next for teaching: whiteboard-hand, then flat-vector.
- looks/ holds the 42 extra CSS looks; prompts/ holds the course's outline, script, scene and moderation prompts.
- Voice: Kokoro bf_isabella (free). Export: 4K.
