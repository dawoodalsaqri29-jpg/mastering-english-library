# Report format

Follow this layout exactly. People skim reviews, and a fixed shape lets them find the verdict and the numbers fast.

## Full report

```markdown
What this change does: <two or three plain sentences>
Load assumed: <for example, "one shop, a few hundred orders a day, two web workers (from the deploy config)">

**Must fix**

1. **Refunds can be paid out twice** (`payments/refund.py:L22-35`)
   - **What this is:** When a customer asks for a refund, this checks the order isn't refunded yet, then sends the money back.
   - **Problem:** Two clicks a second apart both pass the check before either one saves "refunded", so the customer is paid twice.
   - **Fix:** Make the check and the status change one step: update the order to "refunded" only where its status is still "paid", and send the refund only if that update changed a row.
   - **If we skip it:** Double refunds that nobody notices until the accounts don't match.

**Should fix**

2. **<title>** (`<file>:L<start>-<end>`)
   - **What this is:** ...
   - **Problem:** ...
   - **Fix:** ...
   - **If we skip it:** ...

**Nice to have**

3. ...

Verdict: Fix first: 1.
Lean: -34 lines possible (findings 3 and 4).
Not checked: the payment provider's webhook settings (not in this repo).
```

## Rules for each part

- **Title:** the consequence in plain words, not the technique. Write "Refunds can be paid out twice", not "TOCTOU race in refund handler".
- **Location:** always `file:lines`, so the reader can jump straight there.
- **What this is:** what the code is for, in one sentence, for someone who has never seen it.
- **Problem:** the concrete case. Name the input or situation and the wrong result.
- **Fix:** the smallest fix, specific enough to apply. Include one line of code only when it makes the fix clearer.
- **If we skip it:** the real-world cost, said honestly. If the cost is small, say so.
- One or two short sentences per part. Explain a technical term the first time it appears.

## Closing lines

| Line | Rule |
|---|---|
| `Verdict:` | `Ship.` / `Fix first: 1 and 3.` / `Rethink.` plus two or three sentences on what to do instead. In audit mode, `Healthy.` replaces `Ship.` |
| `Lean:` | Only when Lean findings exist. The counted total, and which findings it comes from. |
| `Not checked:` | Only when something that matters couldn't be read or run. One line. |

## A clean result

```markdown
What this change does: Adds a "duplicate order" button that copies an order's items into a new draft.
Looks good. Ship.
Checked: both callers of `copy_items`, the empty-order case, and that the copy gets a new ID and the current customer.
```

A clean result is a real result. Don't add Nice-to-have items to fill space.

## A Rethink verdict

```markdown
Verdict: Rethink. This adds a 380-line calendar component. The browser's own date input, wrapped in the project's
existing Input component, does the same job in about ten lines and is accessible by default. Replace it rather
than fixing the five findings above.
```

## Audit mode

- Open with `What this repo does:` and the load assumed.
- List at most 20 findings, most important first. If more were left out, end the list with `(+<N> smaller findings not listed)`.
- Add `Not read:` for the parts of the repo you skimmed or skipped.
- Nothing found: `What this repo does:`, then `Healthy. Nothing to fix.` and one line on what you checked.
