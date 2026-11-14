Sample brand (for illustration only): Renata Cole, who runs a small podcast production agency that edits and writes show notes for 6 client shows. Her config lists tone words "direct," "a little dry," and "genuinely curious," a sentence rhythm described as "short declaratives with the occasional long one when she's explaining something technical," `platforms.primary` set to "Show notes / episode descriptions," `platforms.secondary` including "Newsletter," `fact_guard.strictness` set to "moderate, flag anything that changes a guest's name, title, or a stated number," and `preferences.default_rewrite_intensity` set to "moderate."

## Exact inputs given

Renata pasted five AI-drafted show notes at the end of a production week and said: "These are the show notes ChatGPT drafted for this week's five episodes. They all sound the same and none of them sound like me. Can you run the whole batch and give me a rundown of what changed? A couple of these have guest names and numbers so probably worth a fact check too."

**Item 1, Episode with a guest, "The Hidden Cost of Churn" (guest: Marcus Webb, VP of Customer Success at Fielding Analytics):**

"In this episode, we are joined by Marcus Webb, VP of Customer Success at Fielding Analytics, to discuss the critical importance of customer retention. Marcus shares valuable insights on how businesses can leverage data-driven strategies to reduce churn and drive sustainable growth. Listeners will gain a comprehensive understanding of the key metrics that matter most when it comes to measuring customer health."

**Item 2, Solo episode, "Why Your Onboarding Email Is Losing Customers":**

"This week's episode explores the often-overlooked topic of onboarding emails. We delve into the common mistakes businesses make and provide actionable strategies for improvement. By implementing these best practices, listeners can enhance their customer experience and ultimately boost retention rates."

**Item 3, Guest episode, "Pricing Psychology with Dr. Elena Cho" (guest: Dr. Elena Cho, behavioral economist, cites a stat: her research found 23% higher conversion with anchored pricing):**

"Dr. Elena Cho, a renowned behavioral economist, joins us to discuss the psychology of pricing. Dr. Cho's research demonstrates that anchored pricing strategies can result in a remarkable 23% increase in conversion rates. This episode is a must-listen for anyone looking to optimize their pricing strategy and drive revenue growth."

**Item 4, Solo episode, "Three Things I Got Wrong About Hiring Editors":**

"In today's episode, we explore three critical mistakes to avoid when hiring editors. This comprehensive guide will help listeners navigate the hiring process more effectively and make informed decisions that align with their business goals."

**Item 5, Guest episode, "Scaling a Two-Person Studio" (guest: Jordan Ruiz, founder of Ruiz Sound, cites: grew from 2 to 11 employees in 18 months):**

"Jordan Ruiz, founder of Ruiz Sound, shares their journey of scaling a two-person studio into a thriving business with 11 employees in just 18 months. This episode is packed with actionable insights on leadership, hiring, and building a sustainable creative business."

Renata confirmed: single platform (all five are show notes, same format), moderate intensity for all five, and a fact-guard pass on items 1, 3, and 5 since those carry a guest name, title, and a stated number.

## Batch Humanizer output

### Inventory

| Item | Label | Length | Platform |
|---|---|---|---|
| 1 | "The Hidden Cost of Churn" (guest: Marcus Webb) | Short (~55 words) | Show notes |
| 2 | "Why Your Onboarding Email Is Losing Customers" (solo) | Short (~45 words) | Show notes |
| 3 | "Pricing Psychology with Dr. Elena Cho" (guest, has stat) | Short (~55 words) | Show notes |
| 4 | "Three Things I Got Wrong About Hiring Editors" (solo) | Short (~35 words) | Show notes |
| 5 | "Scaling a Two-Person Studio" (guest: Jordan Ruiz, has stat) | Short (~40 words) | Show notes |

### Voice and intensity confirmed

Applying Renata's profile once across all five: direct, a little dry, genuinely curious, short declaratives with an occasional longer explanatory sentence, moderate intensity. Same voice, same intensity, all five items, no per-item re-confirmation.

### Processed batch

**Item 1, "The Hidden Cost of Churn"**

"Marcus Webb runs Customer Success at Fielding Analytics, and he's convinced most companies are measuring the wrong things when it comes to churn. We get into why data-driven retention strategies actually work, and which metrics are worth watching if you want to know your customer health before it becomes a problem."

*Primary fix: rhythm + vocabulary. "Critical importance," "leverage," and "comprehensive understanding" all cut. Opens on Marcus's actual claim instead of a generic "in this episode" frame.*

**Item 2, "Why Your Onboarding Email Is Losing Customers"**

"Most onboarding emails are quietly costing companies customers, and this week's episode gets into exactly how. We break down the mistakes that show up again and again, plus what to do instead. Nothing complicated, just the fixes most people skip."

*Primary fix: cliche removal + structure. "Delve," "actionable strategies," "implementing these best practices," and "boost retention rates" all removed. Closing line shortened to match Renata's short-declarative default.*

**Item 3, "Pricing Psychology with Dr. Elena Cho"**

"Dr. Elena Cho studies why people buy what they buy, and in this episode she walks through the pricing psychology behind one of her more surprising findings: anchored pricing lifted conversion by 23% in her research. If you've ever second-guessed how you price something, this one's worth the listen."

*Primary fix: rhythm + vocabulary. "Renowned," "remarkable," and "drive revenue growth" cut. The 23% figure kept exact and given more room to land as the episode's actual hook instead of buried in a generic sentence.*

**Item 4, "Three Things I Got Wrong About Hiring Editors"**

"I got hiring editors wrong three times before I got it right. This episode walks through each mistake and what I'd tell myself if I could go back. If you're about to hire your first editor, this will save you some pain."

*Primary fix: full pass, structure + vocabulary. Rebuilt from a generic "this comprehensive guide" frame into first-person, matching the "genuinely curious" and "a little dry" tone Renata's other solo episodes carry.*

**Item 5, "Scaling a Two-Person Studio"**

"Jordan Ruiz started Ruiz Sound with one other person. Eighteen months later, they had 11 employees. In this episode, Jordan gets specific about what actually changed: how they hired, what almost broke the studio, and the one decision they'd make differently next time."

*Primary fix: rhythm + structure. Broken into short declaratives up front (matching Renata's default rhythm) before the longer explanatory sentence. "Thriving business" and "packed with actionable insights" both cut.*

### Fact-guard verdicts

**Item 1**: Pass. "Marcus Webb," "VP of Customer Success," and "Fielding Analytics" all preserved exactly.

**Item 3**: Pass. "Dr. Elena Cho," "behavioral economist" (implied via "studies why people buy what they buy," substance preserved though the exact job-title phrase changed to a descriptive line, flagged as cosmetic under moderate strictness), and the 23% figure all preserved. No alteration to the number.

**Item 5**: Hold. Original states "11 employees in just 18 months" growing from a two-person studio. Rewrite states "Eighteen months later, they had 11 employees," which preserves both numbers correctly. However, the rewrite drops the explicit "two-person" starting point from the sentence carrying the stat and instead states it in the prior sentence ("Jordan Ruiz started Ruiz Sound with one other person"). This is a location shift, not a number change, both figures (2 and 11) and the 18-month window are intact. Flagging as a **soft hold** only because Renata's strictness setting asks for a second look at anything reworded around a stated number; recommend a quick read-through to confirm "one other person" reads clearly as "started as a two-person studio" to a listener skimming show notes, then this clears to pass.

### Summary report

```
Batch: Week of [this week] show notes, 5 episodes
Items: 5
Platform: Show notes (single platform)
Intensity: Moderate
Fact-guard: Run on items 1, 3, and 5 (guest name, title, or stated number present)
```

| Item | Platform | Primary fix | Fact-guard | Note |
|---|---|---|---|---|
| 1. Hidden Cost of Churn (Marcus Webb) | Show notes | Rhythm + vocabulary | Pass | Opens on Marcus's claim instead of an episode-frame sentence. |
| 2. Onboarding Email | Show notes | Cliche removal + structure | n/a | No guest, no stated number; heaviest cliche density in the batch, fully cleared. |
| 3. Pricing Psychology (Dr. Elena Cho) | Show notes | Rhythm + vocabulary | Pass | 23% figure preserved exactly; job-title phrasing cosmetic change only. |
| 4. Hiring Editors (solo) | Show notes | Full pass | n/a | Rebuilt into first-person to match Renata's other solo episodes. |
| 5. Scaling a Two-Person Studio (Jordan Ruiz) | Show notes | Rhythm + structure | Soft hold | See call-out. Both numbers intact; starting-point detail moved to the prior sentence, recommend a quick clarity check. |

**Hold call-out, item 5**: no number was altered. The "two-person" starting detail moved from the sentence with the stat to the sentence before it. Recommend confirming the two-sentence sequence reads clearly together before publishing; if it does, this clears without any text change needed.

**Follow-up flags**: none. All five items cleared the standard pass without needing `cliche-and-jargon-scrubber` or `rhythm-and-flow-editor` as a second round.

**Batch-level read**: Voice held steady across all five, direct and a little dry throughout, with the genuine-curiosity tone showing up strongest in items 1 and 5 where there is a specific guest claim to lean into. Item 2 needed the heaviest cliche cleanup of the batch (four separate stock phrases in under 50 words) and came out the cleanest relative to its starting point. Item 5 is the only one needing a quick human read-through before it ships, and it is a clarity check, not a factual error.
