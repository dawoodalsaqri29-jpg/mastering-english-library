# Worked examples

Read these when unsure which rung applies, or what a level changes. Each example shows the verdict, then the change.

## One example per rung

### Rung 1: No code

> "Write a script that strips trailing whitespace from every file."

The repo already has an editor config file and a formatter step. The verdict is **No code**. Add one setting, not a script:

```ini
# .editorconfig
[*]
trim_trailing_whitespace = true
```

Reply: "No script needed: one setting in `.editorconfig` does it, and the formatter you already run respects it."

### Rung 2: Reuse

> "Show the order total as money on the summary page."

`src/lib/money.ts` already exports `formatMoney(cents, currency)`, and the cart page uses it. The verdict is **Reuse**:

```tsx
<p>Total: {formatMoney(order.totalCents, order.currency)}</p>
```

Not `(total / 100).toFixed(2)` with a hard-coded symbol. That would be a second, slightly different money rule.

### Rung 3: Platform

> "Add a date picker to the booking form."

Every current browser has one. The verdict is **Platform**. If the project has its own `Input` component, use it with the native type:

```tsx
<Input type="date" name="checkIn" min={today} required />
```

Ten lines instead of a calendar library or a hand-built calendar.

> "Read the page number from the URL."

The platform parses it, and the value crosses a trust boundary, so it is still validated:

```js
const page = Math.max(1, Number.parseInt(new URLSearchParams(location.search).get('page'), 10) || 1);
```

> "Count how often each word appears." (Python)

```python
from collections import Counter
counts = Counter(text.lower().split())
```

### Rung 4: Installed library

> "Group the orders by customer."

The project already depends on a utility library that has `groupBy`. Use it. If it doesn't, current JavaScript runtimes have `Object.groupBy(orders, (o) => o.customerId)`. Either way, adding a new library for this is never right.

### Rung 5: Small new code

> "The search box fires a request on every keystroke. Add a debounce."

There's no helper in the repo and nothing in the platform, so the verdict is **Small new code**:

```js
let timer;
searchInput.addEventListener('input', (e) => {
  clearTimeout(timer);
  timer = setTimeout(() => runSearch(e.target.value), 300);
});
```

It has no debounce utility module, no options object, and no loading-state system nobody asked for. If the repo already has a debounce helper, the verdict was Reuse.

### Push back (ultra)

> "Build a plugin system so customers can add their own export formats."

Only one format exists and only one more has been requested.

Reply: "Push back: a plugin system means a loader, a registry and docs (roughly 200 lines) for a need nobody has yet. I'd add `export_csv()` next to the existing report code, marked `# shortcut: one extra format; upgrade to a registry when a third format is requested`. Build the plugin system anyway?"

If the user says yes, build it properly and don't raise it again.

## One request at three levels

> "`get_user` is slow. Add caching."

**lite:** Build the cache a careful engineer would normally build (a small cache with an expiry, cleared when a user changes). Then add one line: "Smaller option: the standard library's `lru_cache`, cleared on create and update. That's fine if a single process serves requests."

**full:** Take the smallest version that is still correct, and finish the change everywhere it must reach:

```python
from functools import lru_cache

@lru_cache(maxsize=4096)  # shortcut: per-process cache; upgrade when we run more than one worker
def get_user(user_id: int) -> User | None:
    ...

def create_user(**fields):
    ...
    get_user.cache_clear()  # a cached "not found" must not outlive the new user

def update_user(user_id: int, **fields):
    ...
    get_user.cache_clear()  # never serve a changed user stale
```

Plus one test: update a user, call `get_user`, and assert the new value comes back. That is the edge most likely to break.

**ultra:** Question the cause before building. "Push back: is `get_user` slow, or is it called 200 times by one page? If one page calls it in a loop, a single batched query fixes the cause, with no cache and no stale data. Shall I check the callers first?"

## The wrong kinds of lazy

These look lazy but are bugs. The right column is the lazy version that is also correct.

| Looks lazy | Why it's wrong | Lazy and right |
|---|---|---|
| Dropping form validation "to keep it short" | Input crosses a trust boundary | Keep the validation. Cut the wrapper class instead. |
| Fixing the bug in the one caller you saw | Every other caller is still broken | Grep the callers, then fix the shared function once |
| `except Exception: pass` to make an error go away | Hides failures and data loss | Handle the one error you expect, and let the rest surface |
| A one-liner chaining three conditionals | Short to type, slow to read | Three plain lines |
| No test on date maths "because it's small" | Date maths is exactly where code breaks | One test on the month or year boundary |
| One email with every recipient in To | Leaks everyone's address | BCC, or one send per recipient |
| A new library for a five-line helper | A new dependency to update, audit and trust | Write the five lines |
| Leaving a broken second caller "because it wasn't in the request" | The change broke it, so it's in scope | Finish the change |

## A good closing footer

```
Done: Added a date input to the booking form (src/components/BookingForm.tsx) and one test for rejecting past dates (BookingForm.test.tsx).
Skipped: Custom calendar styling. The browser's own picker is used as is.
Risk: Tests not run (no terminal in this session). Very old browsers show a plain text box instead of a picker.
```

A bad footer says "Everything works!" without having run anything, or lists ten minor things so the one real risk gets lost.
