# Preserve vs. Change Checklist

Humanizing a draft is not a license to rewrite the truth out of it. This file draws the line: what must survive every rewrite untouched (or nearly untouched), and what should change on every single pass, no exceptions. Run every rewrite past this list before showing it to the buyer.

## Always preserve

| Category | What this covers | How to handle it in a rewrite |
|---|---|---|
| Numbers and statistics | Prices, percentages, dates, quantities, timeframes, scores | Copy exactly. If the sentence around a number gets rebuilt, the number itself does not move, round, or shift. "37% of users" stays "37% of users," never becomes "over a third" unless the buyer explicitly wants approximation. |
| Names | People, companies, products, places, titles | Copy exactly, including capitalization and spelling. Never substitute a generic term for a proper name, and never invent a name that was not in the source. |
| Direct quotes | Anything in quotation marks, attributed speech | Word-for-word, unchanged. You may adjust the sentence that introduces or follows the quote, never the quote itself. |
| Specific claims | "Reduces load time by half," "the only tool that does X," "backed by Y studies" | The claim must mean exactly what it meant before. You can change how it is phrased, never what it asserts. If a claim seems too strong or unverifiable, flag it rather than softening or dropping it silently. |
| Legal, compliance, or approved language | Disclaimers, terms, anything marked as reviewed or sign-off language | Do not touch this at all unless the buyer explicitly says to. Leave it exactly as given, even if it does not match the surrounding voice. |
| Calls to action with a specific destination | A link, a button label, an offer with defined terms | The destination and terms stay identical. The surrounding sentence can be rewritten freely. |
| Structure that already works | A sequence that has to stay in order for logical or legal reasons (steps in a process, a numbered list that maps to a form) | Do not reorder these even at full intensity. Rhythm and wording inside each step can still change. |

## Always change

| Category | What this covers | Why it always changes |
|---|---|---|
| Sentence rhythm | Uniform sentence length, no variation between sentences | This is the single biggest perplexity and burstiness tell. Every intensity level, including light touch, must show measurable variation. |
| Stock transitions | "Furthermore," "moreover," "in conclusion," "it's worth noting," "additionally" | These are some of the most reliable AI tells there are. Replace with a real connective, a shorter transition, or no transition at all if the sentences already flow. |
| Abstract noun phrases | "The implementation of," "the utilization of," "the optimization of," "the facilitation of" | These are a perplexity tell because they are the statistically safe, vague way to describe an action. Replace with a concrete verb or a specific noun: "the implementation of the new system" becomes "rolling out the new system" or, better, naming what actually happened. |
| Hedge words with no content | "It is important to note," "it is worth mentioning," "one could argue," "arguably" | These add length without adding meaning. Cut them or replace with the actual point they were hedging toward. |
| Hype and cliche vocabulary | Delve, leverage, robust, seamless, unlock, transformative, comprehensive, and the rest of the standard AI word list | Full swipe table lives in the `cliche-and-jargon-scrubber` skill. At minimum, this pass should not leave any of the worst offenders standing. |
| Paragraph shape uniformity | Every paragraph is the same three sentences at the same length | Vary paragraph length along with sentence length. A one-line paragraph next to a longer one reads more human than a wall of matched blocks. |
| Generic transitions between paragraphs | Each new paragraph restating the previous point before adding to it | Cut the restatement. Trust the reader to have read the previous sentence. |
| Passive constructions with no reason to be passive | "Mistakes were made," "the report was reviewed by the team" when the actor is known and relevant | Make it active where the actor matters. Keep passive only when the actor genuinely is not the point. |

## The gray zone: judgment calls

Some things are not a clean preserve or change. Use this guidance:

- **Softened claims that were probably too strong to begin with.** Do not quietly soften them. Flag it to the buyer as a question ("this reads like an absolute claim, is that accurate or should it be qualified?") rather than deciding for them.
- **Examples and illustrations that are generic filler** (a made-up hypothetical the model invented to pad a point). These can be replaced with something more specific if the buyer has real detail to offer, or cut if they add nothing. This is not a "preserve the facts" issue since the filler example was never a fact, it was a placeholder for one.
- **Statistics with no source.** If a number in the draft has no attribution and looks like it might be an AI hallucination, do not delete it silently and do not treat it as sacred either. Flag it: "this stat has no source in the draft. Confirm it is accurate or tell me to cut it."
- **Tone-carrying asides that also happen to state a fact.** ("Which, frankly, cost us three good clients.") Preserve the fact (three clients, the cost) but the tone and phrasing around it is fair game to rewrite.

## The handoff rule

Any time a rewrite at moderate or full intensity restructures a sentence that contained a number, name, date, or claim, note it in the changelog and recommend the buyer run `fact-guard` before publishing. This is not optional caution. Restructuring is exactly the kind of change most likely to accidentally shift a fact, since the number or name may end up attached to a different clause than it started in. `fact-guard` is the dedicated check; this skill's job is to flag when it is needed, not to skip the flag because the rewrite felt safe.
