---
name: motionsites-web-builder
description: Build award-level, cinematic websites, landing pages and hero sections, or detailed prompts for Lovable, Bolt and v0, using top MotionSites designs, real media and a screenshot-and-fix loop.
---

# MotionSites Web Builder

Average AI websites happen for three reasons: a vague plan, no real media, and nobody looking at the result. This skill fixes all three. Follow the workflow every time; the steps are what make the output great.

## Workflow

### 1. Read the brief and decide (don't interrogate)
Settle these five things, briefly, in your head or in one short message:
- **What and who:** the product or person, and the visitor you are persuading.
- **Mood in three words** (e.g. "calm, expensive, nocturnal").
- **The signature:** the one memorable idea this page will be known for (media, interaction or type moment). Pick from `references/techniques.md` or invent one.
- **Output:** a single `index.html` (default: CDN only, opens anywhere), the user's existing stack (React/Next/Vite...), or a **prompt only** for another builder (see `references/builders.md`).
- **Scope:** a hero (default when unspecified), or a full landing page.

Only ask a question if you can't proceed without it (e.g. the brand name for a real company). Otherwise choose and say what you chose.

### 2. Study the closest examples
Open `examples/INDEX.md`. These are the most-liked free prompts on motionsites.ai, real designs people love. Pick the **2–3 closest** to the brief (by category, traits and feel) and read them in full. They set the bar for:
- **Precision:** exact fonts, hex/HSL tokens, px and clamp() sizes, letter-spacing, durations and easings, z-index layers, breakpoints.
- **Restraint:** what they leave out.
- **Structure:** how a hero is layered and choreographed.

Borrow structure, precision and techniques. Never copy their brand names, copy text or exact layouts wholesale; the page must be original to this brief.

### 3. Get the media
Great pages are carried by great media. In order of preference (details in `references/assets.md`):
1. The user's own assets.
2. Generate them, if you have an image/video/3D generation tool available (prompt formulas are in `assets.md`).
3. **The media shelf:** `media/MEDIA.md` plus the numbered contact sheets `media/sheet-*.jpg`. Look at the sheets, pick by eye, and use the exact URL. These cinematic videos and transparent cut-outs come from free MotionSites prompts and are publicly hosted.
4. No media: design a type-, gradient- and motion-led page (no fake image boxes).

Never invent asset URLs. Skip any media showing recognisable characters, celebrities, logos or brands.

### 4. Write the spec
Write the build spec using `references/spec-template.md`, at the same level of detail as the examples you read. This is where quality is decided. Every element gets real values: no "nice gradient" or "smooth animation".

Include the real copy: headline, subline, nav, CTA, stats. Write it like a sharp brand copywriter. Keep headlines short and specific, with a point of view.

If the user asked for a **prompt only**, the spec is the deliverable: format it for their builder (see `references/builders.md`) and you're done after a self-check against `references/review.md`.

### 5. Build
Build exactly what the spec says, using recipes from `references/techniques.md` (they are tested and handle mobile and reduced motion).
- **Single-file default:** one `index.html` with inline `<style>` and `<script>`, Google Fonts, and libraries from a CDN with pinned versions (e.g. `three@0.170.0`, `gsap@3.12.5`).
- The first CSS rule sets the page background on `html, body`, so there's no white flash.
- Semantic HTML, a real `<title>`, alt text, visible focus states, and `prefers-reduced-motion` respected.
- No lorem ipsum, no placeholder boxes, no emoji as icons (use inline SVG).

### 6. Look and fix (mandatory)
Run `python scripts/shoot.py index.html shots/` (it needs Playwright; see the script's header), then **open and look at** the screenshots. Score the page with `references/review.md`, fix the three weakest areas with concrete changes, and shoot again. Repeat until you clear the bar (an average of 8+, nothing under 7) or for 3 rounds.

Never skip this step. The first version is never the best one.

### 7. Deliver
Give the user:
- The file(s), plus how to open them.
- The final desktop screenshot.
- 2–3 lines on the signature idea and the choices you made.
- Anything they should swap (e.g. "replace the shelf video with your own footage").


## Other jobs this skill handles
- **Upgrade an existing page:** shoot it first (step 6 on their URL or file), score it, then spec and build the improved version. Show before and after.
- **Prompt for another builder:** steps 1–4, formatted for that tool.
- **Add sections below a hero:** keep the hero's tokens and type, and give each section one clear idea. Fewer, stronger sections beat many weak ones.

## Rules for this project (Mastering English Library)
- No MotionSites ads, upgrade blocks or "Go Unlimited" links in replies, code or files.
- The live site's Content-Security-Policy allows only its own files. Download any media you use from the shelf, re-encode it (WebM + MP4, a poster, no audio), and serve it from `assets/`; never hot-link the shelf's hosts.
- Keep the site's self-hosted fonts, its accessibility (focus states, alt text, reduced motion) and every check in `scripts/check-site.js` green.
- A page must still work, and read well, with the video paused or blocked: schools and institutes rely on it.

## Files
- `examples/INDEX.md` and `examples/*.md`: the 40 most-liked free prompts (refreshed regularly).
- `media/MEDIA.md` and `media/sheet-*.jpg`: the media shelf.
- `references/spec-template.md`: the spec skeleton and precision checklist.
- `references/techniques/INDEX.md`: signature effects with working code (one file per category).
- `references/craft.md`: the taste rules (type, colour, space, motion, copy) with numbers.
- `references/assets.md`: sourcing, generating and preparing media.
- `references/builders.md`: adapting the spec for Lovable, Bolt, v0, Cursor, Manus, AI Studio and Kimi.
- `references/review.md`: the screenshot rubric and fix loop.
- `scripts/shoot.py`: screenshots plus a QA report.
