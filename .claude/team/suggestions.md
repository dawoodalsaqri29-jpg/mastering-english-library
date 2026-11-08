# Team suggestions

The specialist patrol adds its top suggestions here, newest first. Each one: date, agent, suggestion, why, effort (S/M/L).
When the owner approves one, it moves to the work queue; when it is done, mark it ✅ with the PR link.

- **2026-11-08 · Loop 1 (first look at Wix search data)** · The store site shows in Google mostly for Arabic searches about levels ("مستوى", "مستويات اللغة الانجليزية") and remembering vocabulary ("كيفية حفظ كلمات الانجليزي بدون نسيان"), with no clicks yet. Suggest an Arabic landing page "اعرف مستواك في الإنجليزي" that leads to the level check, briefed first with `seo-content-brief`. Why: the searches already reach the site; the page they need does not exist. Effort: M (new page: /office-hours, /autoplan, then build).
- **Reminder (owner, 1st of each month)** · Upload the Search Console export (Queries.csv and Pages.csv for the github.io site) to `.claude/team/gsc/`. The store site's search data comes from Wix and needs nothing from you.
- ✅ **2026-11-07 · ecc-security-reviewer** · Add a Content-Security-Policy `<meta>` on every page allowing only `self`, `fonts.googleapis.com`, `fonts.gstatic.com` and `static.wixstatic.com`. Why: a second wall behind the HTML escaping if a bad value ever reaches the data files; nothing exploitable today. Effort: M (test every page, the JSON-LD blocks and the store covers before merging). Done in PR #59.
- ✅ **2026-11-07 · ecc-performance-optimizer (from the security review)** · Self-host the two web fonts (Fraunces, Inter) instead of loading them from Google. Why: removes the only third-party stylesheet and a privacy dependency; about 110 KB either way. Effort: S. Done in the self-hosted fonts PR.

