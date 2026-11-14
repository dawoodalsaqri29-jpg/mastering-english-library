# Working state (read first, update after every step)

Claude keeps this file current so a new session, or a session after its context was compacted,
knows exactly where work stands. One line per item. No secrets, no private contact details:
the repo is public. Update it in the same commit as the work it describes.

Last updated: 2026-11-13

## In progress
- Handoff from the Claude chat (2026-11-13, zip uploaded by the owner; files not in this repo):
  1. Free gift "Stop Saying Beautiful" (6-page PDF, 68 words) is a $0 Wix product, for comment-to-DM.
  2. SuperProfile auto-DM (free, replaces ChatPlace): owner was connecting Instagram. Next: AutoDM on all posts,
     keywords `كتاب` and `BOOK`, DM links the $0 product. Only after it works, add "علّق: كتاب" to captions.
  3. Three funnel reels (9:16, 4K, EN+AR subtitles), not yet published: stop-saying-beautiful (CTA comment كتاب),
     whats-your-level (level test), one-word-a-day (daily word game). Before posting, check those pages are live:
     this repo has levels.html and level-ar.html, but no daily-word page (may live on Wix; to confirm).
  4. Content mix agreed: 70% educational, 20% site-tool promos, 10% direct offers; each video points to one freebie;
     collect emails through $0 store products.
  5. Long YouTube films scheduled through Zernio, 18:00 Muscat, 15–21 Nov: dictionary, describe, ukus, bell,
     alphabet, jar, mistakes. Shorts through Zernio and Buffer.
  Checked 2026-11-13: Zernio has all 7 films at 18:00 Muscat, 15–21 Nov (plus the war film on 14 Nov) and no failed
  posts; Buffer has 15 scheduled, no errors. The three funnel reels are 2160x3840 with EN+AR subtitles. The Wix
  store cannot be reached from cloud sessions (DNS blocked), so the gift product page was not checked.
- mastering-video-studio plugin in cloud sessions: `pip install kokoro-onnx soundfile numpy`, model files in `~/tts`
  (see the video-studio skill), and `ln -s /opt/node-tools/node_modules /root/node_modules` so the styles' .mjs
  scripts find Playwright. Then film-studio `build.py` renders style scenes and `{"clip": ...}` footage scenes.
- Owner's 4 stock clips (globe, glowing map, typewriter, rain at night; 1080p) work as film-studio clip scenes:
  test film rendered 2026-11-13. Cut each clip to its line, or the clip's full length plays in silence.
  Waiting on the owner: the clips' source and licence, and where to keep them (not in the site repo).
- Cinematic scene kit `studio/cinematic/` (2026-11-13, owner asked for videos like his stock clips, made by Claude):
  rain, fog, typewriter, globe, map, word card, quiz, drawn by code (no licence issue). `prep.py` sizes each clip
  to its narration and feeds film-studio `build.py`. Showreel of all genres rendered and sent; example in
  `studio/cinematic/examples/`. Next: use it in the next film or Short when the owner names a topic.
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
- swarm-sim skill (MiroFish-style, 2026-11-12): first run with 30 people, 2 rounds, on 5 real pages. Result: 0 buy, 30 free only.
  Top blockers: unknown owner and no reviews (17), no IELTS promise (11), USD and foreign payment (11), no free sample of a paid
  pack (10, plus 14 more after the group chat), unclear class-set price and invoice (8). Shipped: rial and riyal prices on the store cards; Exam Quick-Packs now names its task types (graph description,
  True/False/Not Given, matching headings; "such as IELTS Academic"); a "Try one PDF first" box with four $5 singles and the $1.99
  Giant Book (from the Wix catalogue); "How it works" now states PayPal or mobile transfer within Oman.
- (none waiting on CI)

- learn-video skill (2026-11-13, owner's "Learn Skill" pack v1.0.0, renamed because gstack owns /learn) in
  `.claude/skills/learn-video/`; `learned/` is git-ignored. Cloud sessions: www.youtube.com is now allowed in the
  "openmontage" environment, but YouTube asks data-center servers to sign in, so here paste a transcript; on the
  owner's own computer (desktop app, Code tab) links work directly. The optional Watch plugin was not installed.
- Voices (2026-11-13): owner found Kokoro flat and Gemini voices "not nice"; decision: the voices come from his
  Voice Studio app. Claude writes the lines; `studio/cinematic/script_sheet.py` makes the recording sheet; he saves
  `films/<film>/voice-studio/p1-s001.wav`...; `film.py` puts each recording in its scene (tested with his 4 samples).
  Voice descriptions for Voice Studio (Legend, Gulf storytellers, Boy, Girl) are in `studio/cinematic/VOICE-STUDIO.md`.
  Waiting on him to record: `studio/cinematic/scripts-to-record/` (Map of Seven Words ep. 1, The Last Train).
  Declined: removing AI-voice watermarks or provenance (asked 2026-11-13).

- 2026-11-13 evening: previews sent with temporary voices by age: Map of Seven Words ep. 1 and ep. 2, The Last Train.
  Build any of them again with `VOICE_PREVIEW=1 python3 studio/cinematic/film.py <film> p1` from the scripts in
  `studio/cinematic/examples/` (copy to films/<film>/p1.cine.json). Owner's first 5 Voice Studio files all read
  Isabella's description, not the lines; he was shown the two-box fix. Remote Control: computer DESKTOP-T9E24GM lists
  Downloads and free-work but does not serve them to cloud sessions (not_available, also after updating the app);
  owner may have linked them in another session. Next: his Voice Studio recordings and new videos (uploaded in chat).

- 2026-11-13 night (owner asleep, asked Claude to keep working): Map of Seven Words episodes 3–7 written
  (ancient, perilous, loyal, wisdom, hope), recording sheets in `studio/cinematic/scripts-to-record/`, YouTube titles
  and descriptions in `map-of-seven-words-youtube.md`; previews of all 7 episodes sent with temporary voices.
  Next: owner records the lines in Voice Studio (two-box way), reviews the episodes, then final cuts.

- 2026-11-14: VoiceStudio.sh (owner's local app, API on localhost:3900) made 51 of 63 lines through
  `studio/cinematic/voicestudio/make-voices.ps1` (one PowerShell line, script pinned on GitHub). All 51 checked by
  transcription; built at 85% pace. Seven episodes and The Last Train sent with his voices. Open: Boy, Grandpa and
  Grandma designs sound like adults (shaping did not fix it); asked him to pick child/elderly voices from VoiceStudio's
  Gallery under those names and rerun the line. His local Claude session found new videos: to be zipped and uploaded.

## Waiting on the owner
- From the swarm run (2026-11-12): (1) one or two free sample pages from each paid pack, above all Exam Quick-Packs;
  (3) an "about" line with the owner's name and a first real review;
  (4) a written class-set price and "invoice on request"; (5) Apple Pay / local payment in Wix.
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

## 2026-11-14 · Plugin scenes for teaching, stock clips for story (owner rule)
- Standing rule: explanation/word-meaning scenes use the video-studio plugin styles (cartoon, comic-book, whiteboard-hand, ...); story scenes use the owner's stock clips (cine scenes as fallback).
- Done: word scene in all 7 episodes of The Map of Seven Words is now a plugin scene (ep1 cartoon board, ep2/ep4 comic big-reveal on "brave"/"dangerous", ep3/ep6 whiteboard, ep5 cartoon idea, ep7 cartoon narrator). Ep3 opens with the owner's snowy-forest clips. All 7 sent.
- Voice cut: owner reported the last sounds of lines are cut. Cause: the VoiceStudio files themselves stop mid-sound (e.g. ep3 s002 "moving", s008 "four"). Fix: lines.json v2 adds " ..." and a direction to finish every word; script writes to "voicestudio-recordings-2". Waiting on the owner to run it again and send the folder. film.py now keeps 0.25 s after the last loud sample and fades 30 ms.
- Drive: still only the same 12 files (owner sorted 370 clips locally; upload not done yet).
- 2026-11-14 evening: owner gave a new shared Drive folder for all clips: id 1Nxl3fZSh9D3dDbKEdlJ5rXg166_sSP7Q (subfolders 01-Water-Rivers, 02-Sea-Coast-Ships so far; uploading the rest). stock/list.py now lists it recursively. New clips placed: ep1 candles/books/tea (s4, s5), ep4 waterfall + stormy sea (s1, s7), ep5 misty moon sea (s1), ep6 mountain lake + cliff waterfalls (s1, s6), ep7 mountain waterfall + sunset sea (s1, s7). Vertical clips (16523552, 199347, 326081) kept for Shorts.
