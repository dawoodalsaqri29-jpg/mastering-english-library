# Team suggestions

The specialist patrol adds its top suggestions here, newest first. Each one: date, agent, suggestion, why, effort (S/M/L).
When the owner approves one, it moves to the work queue; when it is done, mark it ✅ with the PR link.

- **2026-11-07 · ecc-security-reviewer** · Add a Content-Security-Policy `<meta>` on every page allowing only `self`, `fonts.googleapis.com`, `fonts.gstatic.com` and `static.wixstatic.com`. Why: a second wall behind the HTML escaping if a bad value ever reaches the data files; nothing exploitable today. Effort: M (test every page, the JSON-LD blocks and the store covers before merging).
- **2026-11-07 · ecc-performance-optimizer (from the security review)** · Self-host the two web fonts (Fraunces, Inter) instead of loading them from Google. Why: removes the only third-party stylesheet and a privacy dependency; about 110 KB either way. Effort: S.

