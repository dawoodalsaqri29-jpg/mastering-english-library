# Worked Example: Humanizer Engine Run

Sample brand (for illustration only): Priya Nakamura, an independent B2B operations consultant who helps mid-size logistics companies fix broken internal processes. She writes a weekly LinkedIn post and a monthly client-facing email update. Her config.json (built by `humanizer-setup`) shows: tone words "blunt, dry, impatient with fluff", sentence rhythm "short sentences dominate, one longer sentence every 3 to 4 to land a point", vocabulary notes "says 'fix' not 'optimize,' says 'the actual problem' a lot, never says 'synergy' or 'streamline'", signature quirks "opens posts with a flat statement of fact, closes with a one-line challenge to the reader", reading level "simple", emoji usage "none", profanity_ok "false". Platform: LinkedIn primary. Fact-guard strictness: "strict, flag anything reworded that could shift a number, name, date, or claim." Default rewrite intensity: "moderate".

## Exact input given

Priya pasted this AI-generated first draft and said: "This is what the AI gave me for my LinkedIn post this week. It's fine but it doesn't sound like me at all. Moderate rewrite, please."

**Draft as pasted:**

> In today's fast-paced business environment, operational efficiency has become more crucial than ever for logistics companies looking to remain competitive. Many organizations struggle with implementing streamlined processes that can adapt to changing market demands. Furthermore, the utilization of outdated systems often leads to significant inefficiencies that can impact the bottom line. It's important to note that companies who invest in comprehensive process audits typically see a 23% improvement in operational efficiency within the first six months. Ultimately, businesses that fail to prioritize process optimization risk falling behind their more agile competitors in an increasingly demanding marketplace.

## Full output produced

### Rewritten draft

> Most logistics companies aren't losing money because of the market. They're losing it because nobody's looked at their actual process in three years.
>
> I see the same pattern constantly: a system built for a company half this size, patched together with workarounds nobody documented. It works, technically. It just costs more than it should, every single day.
>
> Here's the number that gets people's attention: companies that run a real process audit see a 23% efficiency improvement within six months. Not from new software. From fixing what's already broken.
>
> If you haven't looked hard at your process in the last year, you already know the answer before you check.

### Changelog

- **Cut the opener entirely.** "In today's fast-paced business environment" is one of the most common AI throat-clearing openers there is, and it violates your `donts` on generic openers. Replaced it with a flat statement of fact, which matches your signature quirk of opening posts that way.
- **Rebuilt the structure, not just the words.** The original was four same-shaped sentences (hedge, claim, transition, claim). The rewrite is four paragraphs of very different shapes: a two-sentence punch, a longer explanatory beat, a number landing on its own short sentence, then a closing challenge. That matches your rhythm profile (short sentences dominate, one longer sentence lands a point).
- **Removed every flagged word.** "Crucial," "streamlined," "furthermore," "the utilization of," "it's important to note," "comprehensive," "optimization," "ultimately," and "agile" are all gone, not softened. None of these appear in your vocabulary notes, and several are exactly what you said you never say.
- **Replaced "streamlined processes" and "operational efficiency" (abstract noun phrases) with a concrete image**, a system "patched together with workarounds nobody documented." This is the specific kind of detail your voice profile flags as a strength: concrete over abstract.
- **Closed with a one-line challenge to the reader**, per your signature quirk, instead of the original's vague "risk falling behind" warning, which described every competitor equally and said nothing about the reader specifically.
- **Preserved the one fact in the draft exactly**: "23% improvement in operational efficiency within the first six months" carries forward as "23% efficiency improvement within six months." The number, the metric, and the timeframe are unchanged. No source was given for this stat in the original draft. Flagging that now: confirm this number is real before publishing, since it has no attribution in either version.

Given `fact_guard.strictness` is set to strict and this was a moderate-intensity rewrite that restructured the sentence containing your only statistic, run `fact-guard` on this draft before you post it. It should be a quick pass since only one number is in play, but strict means it gets checked regardless.
