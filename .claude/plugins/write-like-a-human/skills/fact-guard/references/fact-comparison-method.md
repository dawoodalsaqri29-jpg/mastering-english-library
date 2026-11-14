# Fact Comparison Method

The systematic method for extracting factual claims from an original text, locating them in a rewrite, and classifying what happened to each one. Follow this in order. Do not skip to eyeballing the two texts side by side; that is how small drifts slip through.

## Step 1: Extract the claim inventory from the original

Read the original once, fully, before touching the rewrite. Pull out every item that fits one of these seven claim types. Number them as you go; the numbered list is the claim inventory.

| Claim type | What to pull | Example |
|---|---|---|
| Number or statistic | Any figure: counts, percentages, prices, durations, measurements | "we grew revenue 34% in six months" |
| Date or timeframe | Specific or relative dates, deadlines, durations | "launched in March," "within two weeks" |
| Proper name | People, companies, products, places, named tools or programs | "our client, Meridian Logistics" |
| Quoted figure | Anything in quotation marks attributed to a person or source | "she told us, 'this saved us a full day a week'" |
| Causal or comparative claim | X caused Y, X is more/less/first/only/best | "the redesign is the reason signups doubled" |
| Hedge or caveat attached to a claim | Qualifiers that narrow or soften a claim | "roughly," "in most cases," "excluding returns," "based on a small sample" |
| Specific detail offered as evidence | Concrete supporting detail, not the headline claim itself | "one customer, a bakery in Ohio, saw this in eleven days" |

Every item gets its own line in the inventory, even if two claims sit in the same sentence. A sentence with a number and a date is two inventory items, not one.

## Step 2: Locate each claim in the rewrite

Search the rewrite for the substance of each inventory item, not the exact wording. A claim can move to a different paragraph, merge with another sentence, or get restated in different words during a humanization pass. Location drift alone is not a problem. Substance drift is.

If a claim cannot be found anywhere in the rewrite after a full read, mark it as a candidate for Dropped and move to Step 3 to confirm.

## Step 3: Classify

Use these four categories. Classify strictly; do not round a borderline case up to Preserved because the rewrite reads well.

### Preserved
The fact, number, name, date, or claim carries the same substance. Wording changed only in ways that do not shift meaning or truth value.

Example: "The report took us 34% longer than expected" becoming "We ran about a third over on time for the report." The number moved from a precise percentage to an approximation, which is a judgment call: under loose strictness this is Preserved (the substance survives); under strict strictness, flag it as a cosmetic note since "34%" and "about a third" are not identical values.

### Altered
The number, name, date, or claim changed in a way that shifts its truth value, even slightly. This includes:
- A number that got rounded, inflated, or reduced beyond a reasonable paraphrase.
- A qualifier that got dropped or added, changing the strength of the claim ("can help" rewritten as "will," or "most clients" rewritten as "all clients").
- A comparative or superlative that shifted ("one of the fastest" becoming "the fastest").
- A name that changed, even a small variant (a misspelling that resolves to a different real entity, a title change that implies a different role).
- A date or timeframe that shifted outside a reasonable rounding window.

### Dropped
The claim from the original is simply missing from the rewrite. This includes a caveat that vanished while the claim it qualified survived, since removing the caveat changes what the remaining claim means even though no new words were added.

Example: original says "this works well for most B2B clients, though results vary by industry." Rewrite says "this works well for clients." The headline claim survived; the caveat that scoped it did not. Classify this as Dropped, specifically a dropped caveat, even though technically some words carried over.

### Invented
A fact-shaped detail exists in the rewrite that has no source anywhere in the original. This is the highest-severity classification. It typically shows up when a rewrite was asked to "add specificity" or "make this feel more real" and the model filled the gap with a plausible-sounding but fabricated number, name, date, or anecdote detail.

Example: original says "a client saw strong results within a few weeks." Rewrite says "a client in Ohio saw a 40% lift within seventeen days." The location, the percentage, and the exact day count are all Invented; none of them exist in the original. Even if only one of the three details is fabricated, the whole added detail set is flagged, since a reader cannot tell which parts are real and which are not.

## Step 4: Write the entry

For every claim that is not cleanly Preserved, write an entry with four parts: original wording (quoted), rewritten wording (quoted), classification, and a one-line reason. Keep the reason concrete: name exactly what changed (the number, the qualifier, the name) rather than a vague "this feels different."

## Worked example: full comparison

**Original:**

"Our onboarding redesign cut new-customer setup time from about 40 minutes to under 15, based on data from our first 90 days live. One customer, a mid-sized accounting firm, told our support lead it was 'the first software rollout that didn't need a follow-up call.' We rolled this out to roughly 60% of the customer base by the end of Q1, with full rollout expected by June."

**Rewrite (after a moderate-intensity humanizing pass):**

"We redesigned onboarding and it made a real difference. Setup time dropped from 40 minutes to under 10, and one customer, an accounting firm in Denver, said it was the smoothest rollout they'd ever done. By the end of Q1 we'd rolled it out to most of the customer base, and we're on track to finish by June."

**Claim inventory and classification:**

| # | Original claim | Rewritten claim | Classification | Reason |
|---|---|---|---|---|
| 1 | Setup time cut from about 40 minutes to under 15 | Setup time dropped from 40 minutes to under 10 | Altered | "Under 15" became "under 10." This is not a rounding difference, it is a stronger claim than the source supports. |
| 2 | Based on data from our first 90 days live | (missing entirely) | Dropped | The evidentiary basis for the timing claim disappeared. The rewrite now states the improvement as a flat fact with no timeframe or data basis, which is a stronger and less accountable claim than the original made. |
| 3 | A mid-sized accounting firm | An accounting firm in Denver | Invented | "Denver" has no source in the original. This is a classic invented specific: a plausible-sounding location added to make the anecdote feel more real. |
| 4 | Told our support lead it was "the first software rollout that didn't need a follow-up call" | Said it was the smoothest rollout they'd ever done | Altered | The direct quote was replaced with a paraphrase that changes the claim. "Didn't need a follow-up call" is a specific, checkable claim; "smoothest rollout they'd ever done" is a vaguer superlative that also implies the customer has done many rollouts, which the original never claimed. |
| 5 | Rolled out to roughly 60% of the customer base by end of Q1 | Rolled out to most of the customer base by end of Q1 | Altered | "Roughly 60%" is a specific figure. "Most" is vaguer and, depending on the base, could overstate or understate 60%. Under strict strictness this is always flagged; under loose strictness this borderline case is still flagged because it changes a checkable number into an unverifiable word. |
| 6 | Full rollout expected by June | On track to finish by June | Preserved | Same substance, same timeframe, cosmetic rewording only. |

**Verdict: HOLD.** One Invented detail (the Denver location) and three Altered claims (the 10-minute figure, the paraphrased quote, and the vague "most" replacing "roughly 60%") need correction before this can publish, plus one Dropped item (the 90-day data basis) that should be restored or the timing claim softened back to match what the original actually supports.

**Fix recommendations:**
1. Restore "under 15" or confirm with the buyer whether "under 10" is a real, verified figure before allowing it.
2. Restore the 90-day data basis, or make clear the claim is anecdotal if the buyer confirms that is acceptable.
3. Delete "in Denver" entirely, or ask the buyer for the real location if they want the detail.
4. Restore the direct quote exactly, or clearly mark any paraphrase as a paraphrase rather than presenting it as a quote.
5. Restore "roughly 60%" or confirm the buyer is comfortable generalizing it to "most."
