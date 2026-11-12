# Working state (read first, update after every step)

Claude keeps this file current so a new session, or a session after its context was compacted,
knows exactly where work stands. One line per item. No secrets, no private contact details:
the repo is public. Update it in the same commit as the work it describes.

Last updated: 2026-11-12

## In progress
- Schools plan step 4, teachers page (PR #73, merged): owner approved the defaults on 2026-11-08 (library name only, no bio
  line, "store price" only, class sets asked on WhatsApp; no licence terms written).
- Security and SEO plan (arena winner a007, 2026-11-08): Claude's part fully done (PR-A1 to E, A1b, A4; SEO S1, S3, S6 part). Claude's part is PR-A to PR-E
  (safety rules, CSP, daily live check, SECURITY.md and Dependabot, seo-content-brief). Done: safety rules,
  SEO check, SECURITY.md, Dependabot, CSP. Done: safe links (PR #60). Done: daily live check (PR #61, first manual run green, no API errors). Next:
  PDF byte check (PR #62). seo-content-brief + roster (PR #63). The plan's Claude part is done. Owner part P0
  (2FA everywhere, Wix roles, payments and custom code, remove ChatPlace access) waits on the owner.
- Site CSP tightened (2026-11-12): no style-src 'unsafe-inline' on any page; the safety check accepts only the strict policy (PRs #81, #82, #83, merged).
- Ruflo reviewed 2026-11-12: runtime not installed (unpinned hooks on every command). Its "pods" idea is in ROSTER.md
  "Pods by channel": site, YouTube, Instagram and TikTok, store and sales, each with a lead, members, rhythm and measure.
- (none waiting on CI)

## Waiting on the owner
- Check the published Wix post «اعرف مستواك…» on a phone (does the embedded check show and fit?).
- Outreach to IFI, BIA, Mind Base: drafts given to the owner 2026-11-08 (teachers.html?ref=ifi|bia|mindbase); he sends them.
- 3D business dashboard (private artifact https://claude.ai/artifact/4otQxnhTmweEhsZjYaXcbo, version 2): real numbers
  from the Wix store at masteringenglishlibrary.com (orders + Wix Analytics). Refresh by hand when asked; numbers stay out of this repo.
- OWASP arena result (plan a004): owner steps C1 (stock task connectors), C2-b (send/post/pay tools need approval),
  C5 (Gemini budget); Claude part PR-F and C3/C4 after the owner approves.
- Schools plan questions 2 to 12 (name on the page, class-set price, licence terms, invoice): see the
  plan's section 5; ask them step by step.
- Lantern story video: pictures B1 and C1 to C7 (must be sent in a new message on their own),
  then D to H from the prompt files on the `instagram-assets` branch.
- Optional: make "site check" a required check on `main` (GitHub settings, owner clicks).
- Optional: delete the stray branch `instagram-assets-lantern` (same commit as `instagram-assets`).

## Done recently (newest first)
- 2026-11-12: Floorplan (haydenschmitty/floorplan @5e3eaac, MIT, run from scratchpad, not installed) mapped the site: 97 files, 0 unassigned, Health 0 issues; check-site all green. Map given to the owner as a file; floorplan/ stays out of git.
- 2026-11-09: Owner connected Manual Payments (mobile transfer, Oman). Payment line (PayPal or mobile transfer, link within 12 h) added to the descriptions of the 61 paid products; 3 free products left as they are.
- 2026-11-09: Published the Wix blog post «الاستعداد لاختبار الآيلتس: الدرجات والمستويات وخطة التحضير» (IELTS queries). Band-to-CEFR table marked approximate, as IELTS itself says. Three Arabic posts now live: level, vocabulary, IELTS. Next: check Wix search queries for clicks in 2–3 weeks.
- 2026-11-09: Published the Wix blog post «كيف تحفظ كلمات الإنجليزي بدون نسيان: 6 خطوات بسيطة».
- 2026-11-09: Published the Wix blog post «اعرف مستواك في الإنجليزي خلال دقيقتين» at the owner's request.
- 2026-11-08: Arabic level check page level-ar.html (#77; safety rule first in #76), embedded in an unpublished Wix blog draft (owner chose option B). Teacher sample pack PDF (cover, course map, 6 lessons) delivered as a file, not in the repo.
- 2026-11-08: Owner reversed the earlier "not used" for Reverse API Engineer: on-demand skill, pinned 0.14.0, own/permitted sites only, no stealth extra.
- 2026-11-08: Owner approved the PDF line "Free to copy for your own classes": in every PDF footer (72 rebuilt) and on teachers.html.
- 2026-11-08: Schools plan step 6: "Teaching a class? Ask for a class set →" (link to teachers.html#class-sets) appended to all 61 paid Wix products, at the owner's request; free products untouched.
- 2026-11-08: Owner's three prompts as project skills: /handoff (summary for a new chat), /clarify (up to 3 questions first), /short (under 120 words).
- 2026-11-08: Schools plan step 1: owner's tested WhatsApp number in catalog.js and the home footer (wa.me allowed in #69).
- 2026-11-08: Lesson search descriptions lengthened to 117-155 characters with level, skill and free PDF (SEO S4, PR #68).
- 2026-11-08: Home page Organization JSON-LD with the store (PR #66); links checked again as Chromium reads them (PR #67). Live-site check run by hand: 183 files match, no API errors.
- 2026-11-08: library.html carries all 72 lessons as plain HTML for search engines (PR #65); main's safety rules run on every PR (PR #64).
- 2026-11-08: seo-content-brief skill, Loop 1 data source (Wix search data + monthly CSV), roster security section (PR #63).
- 2026-11-08: PDF byte fingerprints and the PDF-with-its-lesson rule (PR #62).
- 2026-11-08: Daily live-site check (PR #61); first run green. Main's protection rules show as warnings until the owner turns them on.
- 2026-11-08: Buy, store and library links can only go to the Wix store or inside the site, with two new browser checks (PR #60).
- 2026-11-08: Dashboard v2 reads the real Wix store (owner named masteringenglishlibrary.com); finding sent to the owner, not stored here.
- 2026-11-08: Dependabot #57 (checkout 7.0.1) and #58 (setup-node 7.1.0) reviewed: SHAs match the official tags, CI green, merged.
- 2026-11-08: Content-Security-Policy on all 76 pages, enforced by the site check (PR #59).
- 2026-11-08: Site safety rules and SEO checks in the site check (PR #56); C4 workflow rules, SECURITY.md, Dependabot (PR #55).
- 2026-11-08: 3D business dashboard v1 (three.js, golden library, 7 objects, data.json + saved copy, 2D cards on phones).
- 2026-11-08: OWASP arena done (8 agents): do not install owasp-security; 4 gaps found (C1 to C5).
- 2026-11-08: Installed Anthropic's claude-automation-recommender skill (claude-code-setup plugin, Apache-2.0); Friday, suggestions only.
- 2026-11-08: Installed the 11 founder-* skills (MIT, pinned fd9385b); four have their own job in the roster.
- 2026-11-08: PDFs never link to the local build server (PR #53); found by the security arena.
- 2026-11-08: Security hardening of the PDF build server and CI checkout, plus this STATE file (PR #52).
- 2026-11-08: Lantern prompts for sections F, G, H (12 pictures each); section I is slides only.
- 2026-11-08: Classroom PDFs, worksheet first and teacher answer page last, plus the PDF guard (PR #51).
- 2026-11-08: Site check runs on every PR through GitHub Actions (PR #50).
- 2026-11-08: Schools arena finished; winner plan a012 (7 steps). Steps 2 and 3 done.
- 2026-11-07: free.js shows a message when lessons fail to load (PR #49); roster updates (PR #48).

## Decisions that stand (do not reopen without the owner)
- 2026-11-09: mobile-transfer orders. A scheduled task (every 3 h, this session) lists unpaid offline orders and asks the owner per order. Claude marks an order paid (Add Payments, offline) only after the owner says yes for that order number. Buyer details stay out of chat and repo.
- 2026-11-09: the owner said Claude publishes Wix blog posts itself ("كله سوي انت"). Posts stay factual, link to the free lessons, and add no prices or claims the site cannot back.
- The Arabic level page lives on the Wix site (blog post) and embeds level-ar.html from this repo.
- Narration voice: Kokoro `bf_isabella`, speed 0.92, on every platform. No OmniVoice (non-commercial licence).
- Subtitles: English and Arabic in separate boxes, never mixed.
- Not used: FounderOS, the nine self-hosted apps, FreeLLMAPI, caveman-setup,
  ChatPlace, the Humanizer for school or university work (academic dishonesty), the Context Engineering
  Kit as a whole (overlaps gstack and ECC, and its hooks are not allowed), Scientific Agent Skills
  (177 lab-science skills: biology, chemistry, medical databases; nothing for an English-learning business),
  claude-mem (hooks on every message and tool call, a background worker, an extra paid API key or the
  cmem.ai cloud; its local database would be lost when the cloud container is reclaimed; STATE.md does the job),
  the "Claude Video Editing Toolkit" guide: Ghost Editor (macOS-only, talking-head reels), FFmpeg Skill (our
  build scripts already use ffmpeg directly), Claude Shorts and OpenMontage (install scripts; we have no long
  footage). HyperFrames, from the same guide, is already installed: use it for the Lantern section I slides.
- Arenas: 8 agents by default (about 43 calls); 16 only for big decisions.
