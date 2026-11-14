# Review checklist

Work through the categories in order. A category with nothing real in it stays empty. Never fill it to look thorough.

## 1. Bug

- **Edge inputs:** empty, zero, one item, the last item, null or missing, negative, very large, duplicates, non-ASCII text.
- **Time:** time zones, daylight-saving changes, month and year boundaries, "today" taken from a server clock in the wrong zone.
- **Numbers:** rounding, floating point used for money, integer division, off-by-one in ranges and pagination.
- **Contracts:** a caller expects something different from what the function returns (null vs an error, cents vs whole units, milliseconds vs seconds, a list vs a single item).
- **The same rule twice:** two places implement one business rule slightly differently.
- **Half a fix:** the bug is patched in one caller while the shared function stays broken.
- **Async:** a missing `await`, a promise whose failure nobody handles, two tasks writing the same state.
- **Resources:** files, connections or locks that aren't released on the error path.

## 2. Risk

- **Injection:** SQL built by string formatting, shell commands containing user input, HTML output without escaping, user-supplied file names joined to a folder path (path traversal), deserializing untrusted data.
- **Access:** an endpoint with no auth check, a permission checked only in the browser, an ID taken from the request without checking it belongs to the caller.
- **Secrets:** keys or tokens in code, logs, error messages or URLs.
- **Randomness:** tokens, codes or passwords made with a non-cryptographic random function.
- **Privacy:** one user's data visible to another, everyone's address in the To line, personal data in logs or analytics, API responses that return more fields than the screen needs.
- **Data loss:** errors swallowed, writes in the wrong order, multi-step writes without a transaction, deletes without a way back, migrations that drop data.

## 3. Scale (only against the load you assumed)

- **Check, then write:** read a value, decide, then write it, with no lock or atomic update. Two requests at once both pass the check.
- **A query per item:** a database or network call inside a loop over results.
- **Quadratic work** on input that can grow (a nested loop over the same list, repeated searches in a list instead of a set).
- **Only grows:** lists, caches or maps with no limit or expiry.
- **State that must be shared:** sessions, rate limits or caches held in one process's memory while several processes serve traffic.
- **Every instance does it:** a scheduled job that runs once per server instead of once in total.
- **Everything in memory:** a whole table or file loaded to use a few rows.
- **No timeout** on a network call, or retries with no backoff.

## 4. Missing test

Logic that can break (a branch, a loop, a parser, date or money maths, auth, a data write, or a bug fix) with **no test that would fail if it broke**. Ask for one good test aimed at the edge most likely to break, not coverage.

Also flag a **weak test**: one that only checks the happy path when the risk is an edge case. Name the case it should check.

## 5. Speed

- **Problem:** repeated work per request that could happen once, slow I/O in a hot path, a filter on a large and growing table with no index.
- **Suggestion (Nice to have):** small repeated work inside a loop.
- **Not a finding:** making rare code faster. Some software counts every millisecond and most doesn't, so judge by how often it runs.

## 6. Lean

| Kind | What it looks like |
|---|---|
| **Delete** | Dead code, unused exports, parameters, flags and config, commented-out blocks, features built "for later" |
| **Reuse** | The repo already has a helper for this. Name its path. |
| **Platform** | The language or framework already does it, or a dependency was added for a few lines |
| **Unneeded layer** | An interface with one implementation, a factory with one product, a wrapper that only passes calls through, a lookup table that maps every key to itself |
| **Merge** | Near-copies that must change together. Not two things that merely look alike but change for different reasons. |
| **Split** | One function doing unrelated jobs, so it's hard to read or test. Split by job, never by line count. |

For every Lean finding, **count** the lines that would go. The report's `Lean:` total is the sum of those counts, never a guess.
