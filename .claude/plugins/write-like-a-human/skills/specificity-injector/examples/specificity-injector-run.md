# Specificity Injector: Worked Example

Sample brand (for illustration only): Priya Nandakumar, a career coach who works with mid-career professionals making a switch into product management. She writes a weekly LinkedIn post and used an AI tool to draft this week's, but it reads like it could belong to any coach on the platform.

## Input draft (pasted by the buyer)

"Many professionals struggle when trying to transition into a new career field. This is a common challenge that affects people across various industries. Through the utilization of strategic planning and the right guidance, individuals can successfully navigate this process. I've helped a lot of clients achieve their career goals over the years, and the results speak for themselves. If you're considering a career change, it's important to note that having a clear plan can make a significant difference in your outcomes."

## Step 1: Scan for vague claims

Flagged five claims:
1. "Many professionals struggle" (Type 1, unquantified)
2. "a common challenge that affects people across various industries" (generic, no specific)
3. "the utilization of strategic planning" (abstract noun phrase, wording-only fix)
4. "I've helped a lot of clients... over the years" (Type 1 and Type 3, unquantified plus vague timeframe)
5. "the results speak for themselves" (Type 1, vague outcome) and "a significant difference" (Type 1, unquantified)

## Step 2: Sort into bins

- Wording-only: claim 3 ("utilization of strategic planning" becomes "planning" or a stronger verb).
- Needs buyer input: claims 1, 2, 4, 5.

## Step 3: Interview (batched)

Sent to Priya:
> "Quick round on this post, answer what you've got, skip what you don't:
> 1. You wrote 'many professionals struggle.' Rough sense of how many, or a pattern you see in your coaching?
> 2. 'A common challenge across various industries,' is there one industry or role you see this from most often?
> 3. 'I've helped a lot of clients over the years,' got a real number of clients or years, even approximate?
> 4. 'The results speak for themselves,' what's a real before/after you can point to, even one client?"

Priya's answers: "Honestly it's like 8 out of 10 people I talk to in tech-adjacent roles, engineers and analysts mostly, who want out but freeze up. I've been coaching for 4 years now, worked with around 60 people total. One client, an accountant, landed her first PM role in 11 weeks after two years of just thinking about it."

## Step 4 to 6: Rewrite, handle gaps, flag changes

Claim 2 had a partial answer (industry pattern given, but no single named example beyond the accountant, which covers claim 5 too). No fabricated details were added. `fact_guard.strictness` in Priya's config is "strict," so every changed number and name gets flagged.

## Output delivered to Priya

**Rewritten draft:**

"About 8 out of 10 people I coach are stuck in the same spot: engineers and analysts who know they want out of their current lane and freeze the second they try to plan the jump. I've been doing this for 4 years now, about 60 people total. One client, an accountant with zero product experience, spent two years just thinking about switching. Once she had an actual plan instead of a vague someday, she landed her first PM role in 11 weeks. If you're stuck in the thinking-about-it phase, the plan is the part that's missing, not the qualifications."

**Change log:**
- "Many professionals struggle" to "About 8 out of 10 people I coach": buyer-supplied number. Flagged for review (strict mode).
- "across various industries" to "engineers and analysts": buyer-supplied specific. Flagged for review.
- "the utilization of strategic planning" to "an actual plan instead of a vague someday": wording-only fix, no fact changed, not flagged.
- "I've helped a lot of clients... over the years" to "4 years now, about 60 people total": buyer-supplied numbers. Flagged for review.
- "the results speak for themselves" to the accountant example (11 weeks, 2 years prior hesitation): buyer-supplied story. Flagged for review.
- "a significant difference" to the specific 11-week outcome: resolved by the same buyer answer, not flagged separately.

**Summary shown to Priya:** 5 claims flagged, 4 fixed with real specifics she supplied, 1 fixed with wording alone, 0 softened or cut. All buyer-supplied numbers and the client story are flagged above for her to confirm before this goes out, per her strict fact-guard setting.
