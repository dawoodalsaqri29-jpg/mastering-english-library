# Interview Script

The exact flow for onboarding a new buyer. Run it conversationally, in small batches, not as one long form. This file covers what to ask, in what order, and how to judge whether a writing sample is actually usable.

## Step 1: The pitch (one breath, before asking for anything)

Say something close to this, adapted to tone:

"I'll build your voice profile so every skill in this pack sounds like you instead of sounding like AI trying to be you. I need 3 to 5 pieces of writing that are genuinely yours, plus a few quick questions. About 5 minutes."

Do not skip this. Buyers who understand why they're pasting in old emails cooperate faster and give better samples than buyers who are just following a prompt.

## Step 2: Collect the samples

Ask for the samples directly:

"Paste in 3 to 5 examples of your writing. LinkedIn posts, emails, blog posts, captions, whatever you've got, as long as it's really yours: written by you, or an AI draft you personally rewrote so much it's basically a new draft. Mix it up if you can: something short and something longer."

### What makes a sample usable

| Good sample | Why |
|---|---|
| A LinkedIn post the buyer wrote themselves, typos and all | Real rhythm, real vocabulary, no filter |
| An email to a client or team, especially a slightly heated or urgent one | People drop the performance under pressure; this is often the truest voice |
| A blog post or newsletter the buyer drafted and then edited hard | Edited-by-hand still carries the writer's ear |
| A caption, text message thread export, or forum comment | Short samples still carry vocabulary and rhythm signal |
| An AI first draft the buyer rewrote line by line until it felt like them | Counts, because the final text is theirs even if the seed wasn't |

### What disqualifies a sample

| Bad sample | Why it pollutes the profile |
|---|---|
| An AI draft posted with light or no edits | The profile will fingerprint the AI, not the buyer, defeating the entire purpose |
| Legal, template, or heavily brand-guideline-constrained copy | Reflects a style guide, not a person |
| Anything under about 60 words | Too little signal for rhythm or vocabulary analysis |
| Writing by someone else the buyer is submitting on their behalf without saying so | Builds the wrong profile entirely; always ask whose voice this is for |
| A sample the buyer says they "cleaned up with ChatGPT afterward, didn't really change much" | Same problem as an unedited AI draft, just one layer removed |

If a sample looks AI-generated (suspiciously even sentence lengths, hedging language, a "moreover" or "it's important to note" sitting in there), say so plainly: "This one reads like it might be mostly AI, still. Want to swap it for something rawer, or is this genuinely how you write?" Some people really do write in a smooth, formal register, so take their word for it if they confirm, but always ask rather than assume.

### Handling thin sample sets

If the buyer only has 1 or 2 samples:
- Accept them. A thin profile beats no profile.
- Tell them directly: "This will give us a rough starting point. I'd rebuild it with `voice-profile-builder` once you've got 3 or 4 more samples, the fingerprint gets a lot sharper."
- Set `samples.sample_count` to the real number, not a rounded-up guess.

If the buyer wants to build a profile for someone else (a client, a ghostwriting subject), note that this is a job for `voice-profile-builder` run standalone, since `humanizer-setup` builds the buyer's own default profile. Still complete this setup for the buyer's own writing first if they haven't done it yet, since the pack needs a default profile to function at all.

## Step 3: The writer questions (batch 1, 2 to 3 questions)

Ask together, conversationally:

1. "What should I call you? Name or pen name is fine."
2. "What do you do, and who are you usually writing for?" (This fills `writer.role`.)
3. "What's the main thing you'll use this pack for: your own posts, client work, both?" (This fills `writer.primary_use_case`.)

Follow with: "And who actually reads this writing? Busy executives skimming on a phone, technical peers, a general consumer audience, something else?" (This fills `writer.audience`.)

## Step 4: The platform and detector questions (batch 2, 2 questions)

1. "Where do you publish most? LinkedIn, email, a blog, somewhere else? Any secondary channels worth knowing about?" (This fills `platforms.primary` and `platforms.secondary`.)
2. "How worried are you about AI detectors specifically, like Originality.ai or GPTZero flagging your work, versus just wanting it to sound like you? Some buyers have clients or platforms that actually scan for this; others just want to stop sounding like a robot." (This fills `platforms.detector_sensitivity`.)

## Step 5: The preference questions (batch 3, 3 to 4 quick ones)

1. "Reading level: do you write simple and punchy, or do you go more technical and dense?"
2. "How do you feel about emoji? None, minimal, or you use them freely?"
3. "Is profanity ever on the table in your writing, or never?"
4. "When I rewrite something for you, do you usually want a light touch, a moderate rewrite, or a full teardown and rebuild? You can always say 'more' or 'less' on any given piece, this just sets the default."

## Step 6: Fact-guard and tools (batch 4, optional, keep brief)

1. "When I'm rewriting your drafts, how careful should I be about names, numbers, dates, and specific claims? Strict means I flag anything that could shift a fact, even a small rewording. Loose means don't slow me down over it."
2. "Do you track content anywhere I should know about, like Notion? Fine to skip this."

## Step 7: Analysis (no more questions, this is on you)

Once samples and answers are in hand, move to analysis. Do not ask the buyer to self-describe their tone, rhythm, or quirks. Most writers cannot accurately narrate their own habits; that is what the samples are for. Use `config-field-guide.md` for the exact translation process.

## Step 8: Confirm, then save

Show the filled-in profile in plain language before writing the file. A buyer who sees "You tend to open with a short, blunt sentence, then explain" will correct it fast if it's wrong ("actually I usually open with a question"). A buyer who sees raw JSON will not.
