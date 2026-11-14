# AI Tell Catalog

The 8 named categories to scan for, each with 5 or more concrete flagged examples and a fix. Work through every category on every scan; a report that only catches stock phrases and misses structural tells (rhythm, listicle-itis) has done half the job, since detectors weight structure as heavily as vocabulary.

## 1. Stock AI phrases and cliches

The most overused words and phrases in AI-generated text as of 2026. If a piece contains 3 or more of these, that alone is a strong signal.

**Overused words:** delve, tapestry, landscape, leverage, multifaceted, comprehensive, furthermore, moreover, crucial, utilize, robust, unlock, unleash, empower, bespoke, journey, navigate, seamless, revolutionize, transformative, groundbreaking, embark, beacon, synergy, paradigm, holistic, innovative.

**Overused phrases:** "in today's digital age," "in the fast-paced world of," "it's worth noting," "it's important to note," "in conclusion," "designed to enhance," "navigate the landscape," "game changer," "embark on a journey," "delve into," "let's dive in," "a tapestry of," "it's not just X, it's Y."

| Flagged example | Fix |
|---|---|
| "In today's fast-paced digital landscape, businesses must leverage every advantage." | "Most businesses are too busy to notice the advantage sitting in front of them." (cut the throat-clearing, state the actual point) |
| "Let's delve into the key strategies that will unlock your potential." | "Here are the strategies that actually move the needle." (name it plainly, drop the metaphor stack) |
| "This comprehensive guide will navigate you through the process." | "This guide walks you through it, step by step." (concrete verb, no "comprehensive" padding) |
| "It's important to note that results may vary." | "Results vary. Here's what changed them for our last three clients." (state it flat, then back it with specifics) |
| "Our platform is designed to empower teams and drive seamless collaboration." | "Our platform gets three people looking at the same file without emailing it back and forth." (concrete mechanism, not abstract benefit words) |
| "This represents a paradigm shift in how we approach the problem." | "This changes the actual first step people take." (say what specifically changed) |

## 2. Uniform sentence rhythm (low burstiness)

AI text tends toward sentences clustered in a narrow length band, usually 12 to 20 words, with few real outliers. Humans naturally mix short punchy sentences with long, complex ones. This is measured numerically, not by feel; see `scoring-rubric.md` and `voice-profile-builder`'s `sentence-rhythm-analysis.md` for the counting method.

**Flagged pattern example:** "Our new dashboard update improves visibility into project timelines. It provides teams with real-time status updates across all active workstreams. Users can now track dependencies more efficiently than before. The interface has also been streamlined for better usability." (Word counts: 9, 12, 9, 9. Range of 3. Flat.)

**Fix:** Break the uniformity deliberately. "The dashboard's faster now. It shows real-time status across every workstream your team is running, dependencies included, without you having to click into five different views to piece it together. Cleaner too." (Word counts: 5, 27, 3. Range of 24.)

## 3. Hedging language

Reflexive qualifiers that soften every claim, a habit AI models pick up from training on cautious, liability-averse writing.

| Flagged example | Fix |
|---|---|
| "This might potentially help improve your results somewhat." | "This helped. Our results went up." (state it, then prove it with a number if you have one) |
| "It could be argued that this approach may be more effective." | "This approach works better." (own the claim) |
| "Some may find this useful in certain situations." | "Use this when you're stuck on the second draft, not the first." (name the actual situation instead of hedging around it) |
| "This is generally considered to be a good practice, in most cases." | "Do this." (cut the qualifier stack entirely) |
| "There is a possibility that this strategy could potentially yield results." | "This strategy worked for us. Here's what happened." (replace speculation with a claim you can back up or a clearly labeled guess) |

**Note:** genuine uncertainty is fine and human; the tell is reflexive, stacked hedging ("might," "could," "potentially," "somewhat" all in one sentence) on claims the writer actually believes.

## 4. Listicle-itis

Reducing everything, even flowing prose, into a tidy numbered or bulleted list. AI defaults to lists because they are statistically safe structure; humans mix list logic into sentences far more often than genre truly requires.

| Flagged example | Fix |
|---|---|
| A three-paragraph blog intro that opens with "Here are 3 reasons this matters:" followed by a bulleted list, when the reasons could be one flowing paragraph | Fold it into prose: "This matters for three reasons, really. Cost, obviously. But also the two weeks of back-and-forth you skip, and the fact that nobody has to re-explain the brief on day four." |
| A LinkedIn post structured as a 5-bullet "framework" for something that was one continuous thought | Rewrite as connected sentences with natural transitions, saving the bullet format for content that's genuinely a checklist or steps to follow in order |
| An email that turns a simple update into "Key Updates: • Fixed the bug • Improved speed • Added a feature" | "Fixed the bug you flagged, sped things up while we were in there, and snuck in one new feature you didn't ask for but will probably like." |
| A "conclusion" section that recaps the whole piece as a numbered list of takeaways | Cut the list; end on the single strongest point, stated once |
| Bullet-heavy explanation of something inherently sequential and connected (a story, a causal chain) | Sequential, causal content almost always reads better as prose with transitions ("so," "which meant," "and that's when") than as bullets, which strip out the causality |

**When a list is genuinely correct:** a real checklist, an actual step-by-step process the reader will follow in order, or structured data (specs, pricing tiers). The tell is using list structure as a crutch for ideas that are naturally connected prose.

## 5. Em-dash abuse

AI models over-index on em dashes because they're common in the edited, professional prose (books, essays) the models trained on, and the pattern gets reinforced during generation. Em-dash density alone is not a reliable standalone signal since real human writers use them too, but heavy, repetitive use across short pieces is a contributing tell, especially stacked with other categories on this list.

| Flagged example | Fix |
|---|---|
| "The results were clear, we needed to change course, and fast, no matter the cost." (using em dashes as a catch-all for commas, colons, and periods in one sentence) | Split by function: "The results were clear. We needed to change course, fast, no matter the cost." (period for the full stop, comma for the aside) |
| "Our approach is different, we build with you, not for you." | "Our approach is different: we build with you, not for you." (colon, since it's a definition/explanation relationship) |
| Three or more em dashes in a single short paragraph, each doing a different grammatical job (aside, list separator, dramatic pause) | Assign each job its correct punctuation: commas for asides, a colon for a setup, a period for a full stop |
| "It's not about speed, it's about trust, and trust takes time." | "It's not about speed. It's about trust, and trust takes time." (break into two sentences) |
| A pattern where every single paragraph in a piece contains at least one em dash | Vary punctuation deliberately across the piece so no single mark carries the whole rhythmic weight |

This pack's own materials never use em dashes, on principle: it is the cleanest way to prove the technique works rather than just describe it.

## 6. "Not X but Y" / "it's not just X, it's Y" constructions

A rhetorical template AI text reaches for constantly because it reads as insightful with very little actual content. Occurs in human writing too, but rarely more than once per piece; repeated use is the tell.

| Flagged example | Fix |
|---|---|
| "This isn't just a tool, it's a partner in your workflow." | "This tool remembers what you did yesterday and picks up where you left off." (replace the abstraction with the concrete mechanism) |
| "It's not about working harder, it's about working smarter." | Cut the frame entirely; state the actual specific insight: "Block your first two hours before anyone else is online. That's the whole trick." |
| "We're not just building software, we're building a movement." | "We're building software three thousand people use every day to close their books faster." (specific, verifiable claim beats the abstraction) |
| Two or more "not X but Y" constructions in the same piece | Keep at most one, and only if it's earning its place with a genuinely surprising Y, not a vague upgrade word |
| "This isn't a limitation, it's an opportunity." | Say what the opportunity specifically is, and drop the reframe device: "This means you get to redesign the flow instead of patching the old one." |

## 7. Summary endings

Closing a piece by restating what it already said, usually flagged by "In conclusion," "Overall," "To summarize," or "In short." AI text defaults to this because it mirrors academic essay structure from training data; most real, punchy human writing ends on a point, not a recap.

| Flagged example | Fix |
|---|---|
| "In conclusion, these strategies can help you improve your results over time." | Cut the sentence entirely; end on the strongest specific point already made, or a direct call to action |
| "Overall, this approach offers significant benefits for teams looking to improve efficiency." | Delete; if a close is needed, make it concrete: "Try it on your next sprint and see what breaks." |
| "To summarize, we've covered the key aspects of building a strong content strategy." | Cut; a reader who made it to the end does not need the piece re-explained to them |
| "All in all, it's clear that this method works well in most cases." | Replace with a specific proof point or a forward-looking line, not a hedge-laden restatement |
| Ending a piece with a bulleted "key takeaways" recap | Cut the recap; trust the piece to have made its point once |

## 8. Generic transition words

Formal connective tissue words that AI text leans on because they are statistically safe, low-personality bridges between ideas. Human writing more often uses conversational pivots or no explicit transition at all.

**Overused transitions:** moreover, furthermore, additionally, in addition, consequently, thus, hence, subsequently, notwithstanding.

| Flagged example | Fix |
|---|---|
| "Furthermore, the data supports this conclusion." | "And the data backs it up." or just start the next sentence with the data itself, no bridge needed |
| "Additionally, customers reported higher satisfaction." | "Customers noticed too. Satisfaction scores went up." |
| "Moreover, this approach reduces costs significantly." | "It's also cheaper. A lot cheaper." |
| "Consequently, the team decided to change direction." | "So the team changed direction." (plain causal word, not a formal one) |
| Three or more formal transitions in one piece under 500 words | Cut at least two entirely; let sentences sit next to each other without a bridge, or use a conversational pivot ("but," "and," "here's the thing") instead |

## Scanning discipline

For every category, quote the exact offending text and cite where it appears. "There's some hedging" is not a finding; "paragraph 3, 'this might potentially help,' stacks three qualifiers on one claim" is a finding. A category with zero hits should be reported as "none found," not skipped silently, so the buyer can see the scan was thorough.
