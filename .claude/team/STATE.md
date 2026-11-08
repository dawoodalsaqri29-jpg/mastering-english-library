# Working state (read first, update after every step)

Claude keeps this file current so a new session, or a session after its context was compacted,
knows exactly where work stands. One line per item. No secrets, no private contact details:
the repo is public. Update it in the same commit as the work it describes.

Last updated: 2026-11-08

## In progress
- Arena on `claude-code-owasp` (8 agents), given the security plan winner, run folder `arena-owasp`.
- Security and SEO plan (arena winner a007, 2026-11-08): sent to the owner. Claude's part is PR-A to PR-E
  (safety rules, CSP, daily live check, SECURITY.md and Dependabot, seo-content-brief). Owner part P0
  (2FA everywhere, Wix roles, payments and custom code, remove ChatPlace access) waits on the owner.
- (none waiting on CI)

## Waiting on the owner
- Schools plan step 1 and step 4: the email and/or business WhatsApp number institutes should use.
- Schools plan, PDF footer: approval of the usage line "Free to copy for your own classes".
- Schools plan questions 2 to 12 (name on the page, class-set price, licence terms, invoice): see the
  plan's section 5; ask them step by step.
- Lantern story video: pictures B1 and C1 to C7 (must be sent in a new message on their own),
  then D to H from the prompt files on the `instagram-assets` branch.
- Optional: make "site check" a required check on `main` (GitHub settings, owner clicks).
- Optional: delete the stray branch `instagram-assets-lantern` (same commit as `instagram-assets`).

## Done recently (newest first)
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
- Narration voice: Kokoro `bf_isabella`, speed 0.92, on every platform. No OmniVoice (non-commercial licence).
- Subtitles: English and Arabic in separate boxes, never mixed.
- Not used: FounderOS, the nine self-hosted apps, Reverse API Engineer, FreeLLMAPI, caveman-setup,
  ChatPlace, the Humanizer for school or university work (academic dishonesty), the Context Engineering
  Kit as a whole (overlaps gstack and ECC, and its hooks are not allowed), Scientific Agent Skills
  (177 lab-science skills: biology, chemistry, medical databases; nothing for an English-learning business),
  claude-mem (hooks on every message and tool call, a background worker, an extra paid API key or the
  cmem.ai cloud; its local database would be lost when the cloud container is reclaimed; STATE.md does the job),
  the "Claude Video Editing Toolkit" guide: Ghost Editor (macOS-only, talking-head reels), FFmpeg Skill (our
  build scripts already use ffmpeg directly), Claude Shorts and OpenMontage (install scripts; we have no long
  footage). HyperFrames, from the same guide, is already installed: use it for the Lantern section I slides.
- Arenas: 8 agents by default (about 43 calls); 16 only for big decisions.
