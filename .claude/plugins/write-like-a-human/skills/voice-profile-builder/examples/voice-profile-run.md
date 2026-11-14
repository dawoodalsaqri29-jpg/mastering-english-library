# Worked Example: Voice Profile Builder Run

Sample brand (for illustration only): Marcus Webb runs a small copywriting shop and just landed a retainer client, [CLIENT NAME], a real estate agent who blogs and posts on social media herself. Marcus needs to ghostwrite for her, so this run builds a second, separate profile for her voice, not his own. His own `config.json` already exists from an earlier `humanizer-setup` run and is left untouched.

## Inputs given

Marcus said: "New client, real estate agent, I need to write like her, not like me. Here are 5 things she sent me: 3 Instagram captions, 1 email to a past client, 1 short blog intro."

**Sample 1 (Instagram caption):**
"Just closed on this one and I'm still smiling. Sellers had two other offers on the table, higher ones, and picked mine because we told the truth about the timeline from day one. That's the whole trick, honestly. Tell the truth, hit your dates, repeat."

**Sample 2 (Instagram caption):**
"Open house today got rained out. Six people still showed up with umbrellas. If that's not a sign this house sells itself, I don't know what is."

**Sample 3 (Instagram caption):**
"Buyers ask me all the time what they should fix before selling. Nine times out of ten? Nothing. Paint the front door. Mow the lawn. Save your money for the move."

**Sample 4 (email to a past client):**
"Hi Denise! I saw your house pop up on Zillow and had to reach out. Whoever's living there now painted the kitchen, it looks great honestly, made me a little nostalgic for our closing day. Hope you're loving the new place. Let me know if you ever want to grab coffee, no agenda, I just genuinely miss our Tuesday calls."

**Sample 5 (blog intro):**
"People think staging a house means spending thousands of dollars on furniture rental. It doesn't. I've sold homes staged with nothing but a good clean and better lighting. Let me show you what actually moves buyers."

## Analysis

**Sample audit:** All 5 usable. All clearly her own voice (casual, specific, no AI markers), well over the 60-word disqualifier individually or in aggregate, and none reads like a template.

**Sentence rhythm (counted):**
- Sample 1: 13, 17, 4, 5, 3 words.
- Sample 2: 6, 6, 16 words.
- Sample 3: 12, 5, 3, 3, 6 words.
- Sample 4: 8, 20, 9, 9 words.
- Sample 5: 15, 3, 17, 6 words.

Shortest: 3. Longest: 20. Median: roughly 8. Range: 17. Clear pattern: opens most pieces with one longer sentence (13 to 20 words) that sets the scene, then breaks into a run of very short sentences (3 to 6 words), several in a row, almost like a list read aloud rather than bulleted. This is a distinct "long setup, then short staccato run" pattern, different from a simple short-long-short alternation.

**Vocabulary:** Leans on "honestly" as a punctuation word. Uses direct reader address constantly ("Let me show you," "I don't know what is"). Says "the whole trick" and "the thing is" as pivot phrases. Never says "dream home," "charming," "cozy," or other real-estate cliches; strikingly avoids the genre's own stock vocabulary. Prefers concrete specifics (paint the front door, mow the lawn) over vague advice (declutter, stage well).

**Signature quirks:**
- Opener: consistently opens with a specific recent moment (just closed, open house today, buyers ask me) rather than a general statement.
- Closer: closes with either a short absolute line ("Repeat.") or a direct invitation to the reader ("Let me show you what actually moves buyers").
- Transition: uses rhetorical questions to herself, then answers them in the same breath ("Nine times out of ten? Nothing.").
- Punctuation: heavy use of short, standalone sentences as a rhythm device, almost never uses semicolons or formal connectors, no em dashes anywhere in the 5 samples.
- Paragraph shape: never uses bullet points even for a "what to fix" list, always folds the list into short consecutive sentences instead.

**Tone words:** warm but no-nonsense, specific over sentimental, quietly proud of results without bragging, talks to the reader like a neighbor, not a client.

**Dos:** Open with a specific recent moment or event. Answer your own rhetorical question in the same breath. Use short, standalone sentences to deliver a list instead of bullets. Keep advice concrete (name the actual task) instead of vague ("declutter" becomes "clear the counters and pack the extra chairs").

**Don'ts:** Never use "dream home," "charming," "cozy," or other real-estate stock phrases. Never use bullet points in captions or blog intros. Don't pad with sentimentality; let the specific detail carry the emotion instead. Don't use formal transition words like "furthermore" or "in addition."

## Marcus confirmed the fingerprint in chat, then it was saved as a document

Since this is a second profile, not Marcus's own, `config.json` was not touched. The deliverable was built as a Word document: `denise-webb-realtor-voice-profile.docx` (name illustrative), containing the five sections above formatted with headers, saved to Marcus's working folder. Marcus was told: "This is separate from your own profile, use it specifically when you're writing for her. Your own `config.json` is untouched."
