# Worked Example: Humanizer Setup Run

Sample brand (for illustration only): Priya Nandan, solo founder of a small project-management SaaS tool called [PRODUCT NAME], writes her own marketing: LinkedIn posts, the product blog, and release-note emails. She uses AI constantly to draft, and is tired of teammates telling her posts "read like ChatGPT."

## Inputs given

Priya pasted 4 samples and answered the interview questions.

**Sample 1 (LinkedIn post):**
"We lost our biggest customer last month. Not because of a bug. Because we shipped a feature nobody asked for instead of fixing the one thing they'd been begging for since March. I built the wrong roadmap and I own that. Here's what we're doing differently now."

**Sample 2 (release note email):**
"New this week: recurring tasks finally work the way you'd expect. You can set an end date now too, which, yes, should have been there from day one. Sorry that took so long. Full changelog below if you want the boring details."

**Sample 3 (blog post excerpt):**
"Most project tools try to do everything. Calendars, chat, docs, time tracking, the works. We don't. We do one thing: help a small team see what's actually late before it's actually late. That's it. If you need the rest, you probably need three other tools anyway."

**Sample 4 (client-facing email, slightly heated):**
"I hear you, and I'm not going to pretend the outage wasn't bad. Four hours is four hours. What I can tell you is exactly what broke, exactly what we changed, and exactly how we're testing for it now so it doesn't happen again."

**Interview answers:**
- Name: Priya Nandan
- Role: solo SaaS founder, writes her own marketing and product comms
- Primary use case: LinkedIn posts and release-note emails, usually starting as an AI-assisted first draft she then has to fix
- Audience: small-team leads and ops managers, busy, skeptical of another tool pitch
- Primary platform: LinkedIn; secondary: email, blog
- Detector sensitivity: low, "I don't care about detectors, I just don't want to sound like a press release"
- Reading level: simple, short sentences
- Emoji usage: none
- Profanity: no, but blunt language is fine
- Default rewrite intensity: moderate
- Fact-guard strictness: strict, "I mention real numbers and dates constantly, don't let a rewrite quietly change one"
- Planner: none

## Analysis (shown to Priya before saving)

"Here's what I'm seeing across your writing. Tell me if any of this is off.

**Tone:** blunt, self-critical when something goes wrong, allergic to corporate softening. You say 'we lost a customer' and 'I built the wrong roadmap' instead of hedging around it.

**Rhythm:** heavy contrast. You open almost every sample with a short, flat statement (4 to 8 words), then follow with a longer explanatory sentence, then snap back short again. Example: 'We lost our biggest customer last month.' (7 words) then 'Not because of a bug.' (5 words) then the long one about the roadmap. That short-short-long-short pattern shows up in three of your four samples.

**Vocabulary:** you say 'here's what' constantly, you use 'honestly' as a soft admission marker, and you never once use a word like 'leverage,' 'solution,' or 'seamless.' You'd never say 'we're excited to announce.'

**Quirks:** you open with a blunt, sometimes uncomfortable admission before pivoting to what you're doing about it. You close with a short forward-looking line, not a summary. You use sentence fragments for emphasis ('That's it.' 'Four hours is four hours.'). You almost never use bullet points even in a changelog email, you'd rather write it as a sentence.

**Dos:** own mistakes directly and early, keep sentences short by default, use concrete numbers (four hours, since March) instead of vague ones, end with a forward action not a recap.

**Don'ts:** never say 'we're excited,' never soften a mistake with passive voice ('mistakes were made'), never end with 'in conclusion' or a bulleted recap, don't pad with adjectives.

Does that match how you'd describe your own writing?"

Priya confirmed, with one correction: "I do use bullets sometimes in the blog, just never in emails or LinkedIn." That correction was folded into the signature quirks note.

## Output: config.json written to the pack root

```json
{
  "writer": {
    "name": "Priya Nandan",
    "role": "solo SaaS founder, writes her own marketing and product comms for a small project-management tool",
    "primary_use_case": "LinkedIn posts and release-note emails, usually starting as an AI-assisted first draft that needs fixing",
    "audience": "small-team leads and ops managers, busy, skeptical of another tool pitch"
  },
  "voice_profile": {
    "tone_words": ["blunt", "self-critical when something breaks", "allergic to corporate softening", "dry"],
    "sentence_rhythm": "heavy contrast: short flat statements (4 to 8 words) followed by one longer explanatory sentence, then a snap back to short. Shows up as short-short-long-short across most samples. Rarely settles into a mid-length rhythm for more than two sentences in a row.",
    "vocabulary_notes": "Leans on: 'here's what,' 'honestly,' concrete specific numbers (four hours, since March) instead of vague ones. Would never say: 'leverage,' 'solution,' 'seamless,' 'we're excited to announce,' anything that sounds like a press release.",
    "signature_quirks": "Opens with a blunt, sometimes uncomfortable admission before pivoting to what she's doing about it. Closes with a short forward-looking line, never a summary. Uses sentence fragments for emphasis ('That's it.'). Avoids bullet points in LinkedIn posts and emails but will use them in longer blog posts.",
    "dos": "Own mistakes directly and early. Keep most sentences short. Use concrete, specific numbers over vague ones. End with a forward action, not a recap.",
    "donts": "Never say 'we're excited' or similar launch-speak. Never soften a mistake with passive voice. Never end with 'in conclusion' or a bulleted recap in a LinkedIn post or email. Don't pad sentences with extra adjectives.",
    "reading_level": "simple",
    "emoji_usage": "none",
    "profanity_ok": false
  },
  "samples": {
    "sample_count": 4,
    "sample_source_note": "3 LinkedIn posts and email excerpts, 1 blog excerpt, all written by Priya before any AI involvement"
  },
  "platforms": {
    "primary": "LinkedIn",
    "secondary": ["Email", "Blog"],
    "detector_sensitivity": "low, does not track detector scores, just wants to stop sounding like a press release"
  },
  "fact_guard": {
    "strictness": "strict: flag anything reworded that could shift a number, name, date, or claim, since real dates and outage lengths appear constantly"
  },
  "tools": {
    "planner": ""
  },
  "preferences": {
    "default_rewrite_intensity": "moderate",
    "save_outputs_to": "your working folder, unless told otherwise"
  }
}
```

## Closing message to Priya

"Saved. Your voice profile is set: blunt, short-short-long-short rhythm, no launch-speak, own the mistake before the fix. Every skill in this pack will pull from this automatically from now on. Want to test it? Paste in a rough AI draft of your next release note and run it through `ai-tell-detector` first, or straight into a humanizing skill if you already know it needs a full rewrite."
