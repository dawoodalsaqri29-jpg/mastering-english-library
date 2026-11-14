Sample brand (for illustration only): Miriam Okonjo-Blake, an independent journalist who covers local housing policy for a small subscriber-funded newsletter and occasionally freelances longer features for regional outlets. She has been using Write Like a Human for four months and wants a portable style guide to hand to a part-time research assistant who will draft first passes of routine city-council recap posts, plus a version she can paste into her own AI research tool for early drafts.

## Exact inputs given

Miriam's saved `config.json`:

```
writer.name: "Miriam Okonjo-Blake"
writer.role: "independent journalist covering local housing policy for a subscriber newsletter, occasional regional feature freelancer"
writer.primary_use_case: "weekly council-recap newsletter posts and longer freelance features, both usually AI-assisted first drafts"
writer.audience: "local residents who care about housing policy but do not have time to read full council minutes"

voice_profile.tone_words: ["skeptical of official language", "plainspoken", "quietly angry when it's warranted"]
voice_profile.sentence_rhythm: "Short, flat declaratives for facts. Sentences get longer only when explaining a process or a bureaucratic maneuver, almost as if the sentence itself is dragging the reader through the same runaround the writer had to sit through."
voice_profile.vocabulary_notes: "Uses 'residents' rather than 'stakeholders' or 'constituents.' Uses 'the city' as a compact stand-in for the council/staff/process bureaucracy. Never says 'affordable housing' without a number attached. Avoids 'transparency,' 'engagement,' and 'community input' entirely, treats them as words the city uses to avoid saying anything."
voice_profile.signature_quirks: "Opens most pieces with what actually happened, not the meeting's stated agenda item. Frequently uses a short one-line paragraph to land a fact that contradicts an official statement, right after quoting that statement. Closes many pieces with a direct, unhedged prediction of what happens next."
voice_profile.dos: "Name specific numbers, dates, and vote counts every time they are available. Quote officials directly, then let the quote sit without editorializing for at least one sentence before responding to it. Say 'this is the fourth delay' type of pattern-tracking whenever a pattern exists."
voice_profile.donts: "Never call anything a 'game-changer' or a 'win' before it is implemented. Never use 'stakeholders,' 'transparency,' 'community engagement,' or 'robust.' Never soften a contradiction with 'it's worth noting that.'"
voice_profile.reading_level: "simple"
voice_profile.emoji_usage: "none"
voice_profile.profanity_ok: false

samples.sample_count: 6
samples.sample_source_note: "5 newsletter recap posts and 1 regional feature, all written by Miriam before any AI assistance"

platforms.primary: "Newsletter"
platforms.secondary: ["Regional feature articles"]

tools.planner: "Notion"
```

Miriam said: "I want the full style guide so I can hand it to my new research assistant, and I also want the short paste-able version for the AI research tool I use to pull first drafts of the boring recap posts. I've got a Notion workspace where I keep a couple of client-adjacent style notes too, might as well file this there if that's easy."

## Style Guide Generator output

### Profile completeness check

All six `voice_profile.*` fields are filled in with specific, example-backed content (not placeholder text), and `samples.sample_count` is 6, above the 3 to 5 minimum. This profile is solid enough to export as a full brief. No thin-profile warning needed.

### Full style guide (chat preview)

Section headers, with excerpts from three sections shown below. Full document goes to file.

**1. Title and identity**
"Miriam Okonjo-Blake's Writing Style Guide: independent journalist covering local housing policy for a subscriber newsletter. Last updated: July 2026."

**2. Voice overview** (excerpt)
"Miriam is skeptical of official language, plainspoken, and quietly angry when the facts warrant it, though the anger shows up as precision, not volume: she gets angrier by adding a specific number than by raising her tone. She writes for residents who care about housing policy but do not have time to sit through a two-hour council meeting themselves. Her default platform is a weekly subscriber newsletter, with occasional longer features for regional outlets."

**4. Sentence rhythm and structure** (excerpt)
"Facts get short, flat declaratives: 'The vote was 4 to 3. The rezoning passed.' Sentences get longer only when Miriam is walking the reader through a bureaucratic process, almost as if the sentence's own length mirrors the runaround she had to sit through to get the information. Example pattern: 'The vote passed.' (short) followed by 'It took four separate hearings, two postponed votes, and one meeting where the item was pulled from the agenda without explanation to get there.' (long, deliberately dragging)."

**6. Signature quirks and habits** (excerpt)
"Opens most pieces with what actually happened, not the meeting's stated agenda item: never 'the council discussed X,' always 'the council voted to X' or the concrete outcome. Frequently drops a short, one-line paragraph immediately after an official quote, landing a fact that contradicts it, with no editorializing language around the contradiction, just the fact sitting there. Example: quote from a council spokesperson, then a lone line: 'This is the fourth time this project has been delayed since March.'"

The full document also includes: Section 3 (tone in practice, all three tone words broken down individually), Section 5 (vocabulary use/avoid lists in full), Section 7 (platform notes for newsletter versus regional features), Section 8 (the quick-reference checklist), and no Section 9 limitations note, since the profile is built from 6 samples and every field is specific.

### Condensed portable prompt version (shown in full)

```
VOICE PROFILE: Miriam Okonjo-Blake

Write as Miriam Okonjo-Blake, an independent journalist covering local housing policy for residents who do not have time to read full council minutes. Tone: skeptical of official language, plainspoken, quietly angry when warranted. Anger shows up as added precision and specific numbers, never as raised tone or exclamation.

SENTENCE RHYTHM: Facts get short, flat declaratives. Sentences get longer only when explaining a bureaucratic process or maneuver, deliberately mirroring the runaround the process itself involved. Never pad a factual sentence; never rush an explanatory one.

VOCABULARY:
Use words like: residents, the city, votes, delays, hearings, specific dollar figures and unit counts
Never use: stakeholders, transparency, community engagement, community input, robust, game-changer, win (before something is implemented)
Reading level: simple, plain language, no jargon without a one-line definition. Emoji: none. Profanity: not allowed.

SIGNATURE HABITS: Open with what actually happened (the outcome), never the meeting's stated agenda item. After quoting an official directly, let the quote sit for at least one sentence before responding. When a quote is contradicted by a fact, land that fact in its own short, one-line paragraph, no editorializing language around it. Close many pieces with a direct, unhedged prediction of what happens next. Use commas, periods, or colons only; never use em dashes.

PLATFORM: Default to newsletter conventions unless told otherwise: shorter pieces, direct and scannable, one clear "what happens next" close. For regional features, allow more room for process explanation and quoted material, same vocabulary and tone rules apply.

Never sound like generic AI output. No stock phrases like "in today's fast-paced world," "it's worth noting that," "community engagement," or "transparency."
```

### Notion filing offer

Since `tools.planner` is Notion and a connector is available: "You mentioned a Notion workspace with some client-adjacent style notes already. Want me to file this style guide as a page there too, alongside those? I'd create a page titled 'Miriam Okonjo-Blake, Style Guide' with the full document content, separate from the two files below. Just confirm and I'll set it up; either way, the documents are ready regardless."

Miriam confirmed, so the page was filed under her existing style-notes area in Notion, in addition to the two documents below, not instead of them.

### Files delivered

- `miriam-okonjo-blake-style-guide.docx`: the full nine-section style guide, ready to hand to the research assistant.
- `miriam-okonjo-blake-style-guide-prompt.docx`: the condensed portable prompt block above, formatted for a clean copy-paste into her AI research tool's custom instructions.
