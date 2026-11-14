Sample brand (for illustration only): Priya Nathan, an independent financial advisor who writes a monthly client email recapping portfolio performance and market conditions. Her config has `fact_guard.strictness` set to "strict, flag anything reworded that could shift a number, name, date, or claim," since she operates in a regulated field where a misstated figure is a real compliance problem, not just a style issue.

## Exact inputs given

**Original (Priya's draft, before humanizing):**

"In Q2, the balanced portfolio returned 4.2%, slightly below our 5% target for the period, largely due to weakness in the bond allocation during April. The growth portfolio outperformed, returning 7.8%, driven mainly by strong performance in our technology holdings. We rebalanced 12 client accounts in June to bring equity exposure back in line with target allocations. As always, past performance does not guarantee future results."

**Rewrite (output of `humanizer-engine` at moderate intensity):**

"Q2 was a mixed quarter. The balanced portfolio came in at 4.2%, a bit under target, mostly because bonds had a rough April. Growth investors had a better run: that portfolio returned 8.1%, thanks largely to tech. We also rebalanced client accounts in June to keep everyone's equity exposure on track. Past performance doesn't guarantee future results, but it's still useful context."

The buyer pasted both texts and said: "Can you check this against my original before I send it out? This goes to about 40 clients and I can't afford a wrong number."

## Fact Guard output

### Claim inventory (from the original)

1. Balanced portfolio returned 4.2% in Q2.
2. Target for the balanced portfolio was 5% for the period.
3. Balanced portfolio underperformed target, largely due to weakness in bond allocation during April.
4. Growth portfolio returned 7.8%.
5. Growth outperformance driven mainly by technology holdings.
6. 12 client accounts were rebalanced in June.
7. Rebalancing purpose: bring equity exposure back in line with target allocations.
8. Standard disclosure: past performance does not guarantee future results.

### Invented

None found. No fact-shaped detail in the rewrite lacks a source in the original.

### Altered

| # | Original | Rewritten | Reason |
|---|---|---|---|
| 4 | "Growth portfolio outperformed, returning 7.8%" | "That portfolio returned 8.1%" | The return figure changed from 7.8% to 8.1%. This is not a rounding difference, it is a different number. In a client-facing performance email this is a material, potentially compliance-relevant error and must be corrected before sending. |
| 6 | "We rebalanced 12 client accounts in June" | "We also rebalanced client accounts in June" | The specific count (12) was dropped and replaced with an unquantified "client accounts." Under strict strictness this is flagged: it changes a checkable, specific claim into a vague one, and a client receiving this email may reasonably wonder if their own account was among the 12. |

### Dropped

None beyond the count noted above. The bond-weakness explanation (item 3) and the equity-rebalancing rationale (item 7) both survived in substance, just in looser wording, which is addressed below as cosmetic.

### Preserved (summary)

Items 1, 2, 3, 5, 7, and 8 all carry the same substance as the original. Note for strict strictness: item 8's disclosure line was extended with "but it's still useful context," which does not change the disclosure itself but softens its force. Flagging this as a borderline cosmetic note rather than an Alteration, since the original disclosure sentence is still present verbatim; the addition is new commentary layered after it, not a change to the claim.

### Verdict: HOLD

Two items need correction before this email goes to 40 clients: the growth portfolio return figure (7.8% versus 8.1%) and the dropped account count (12 versus unspecified). Both are the kind of drift that matters more, not less, in a regulated, client-facing context.

### Fix recommendations

1. Correct "8.1%" back to "7.8%" or confirm with Priya whether 8.1% is actually the correct figure and the original draft had the typo. Either way, the two versions cannot both be right, and this must be resolved before sending, not smoothed over.
2. Restore the specific count: "we rebalanced 12 client accounts in June." If the vaguer phrasing was intentional to protect client privacy in a mass email, that is a reasonable call, but it should be a deliberate choice, not a side effect of a rhythm pass.
3. Optional, low priority: consider whether "but it's still useful context" belongs after the standard disclosure line, since it slightly undercuts the purpose of the disclosure. Not a factual error, just worth a second look given the strict setting on this account.

Once the growth return figure and the account count are corrected, this rewrite is clean to send.
