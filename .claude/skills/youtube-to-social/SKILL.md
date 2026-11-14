---
name: youtube-to-social
description: Turn any YouTube video into ready-to-post social content built on proven viral formats. Two output modes — (1) original 30-60 second talking-head scripts for Reels/TikTok/Shorts and (2) Instagram/LinkedIn carousels with optional AI-generated illustrations. Drop in a YouTube URL — the skill fetches the transcript and produces content in your brand voice, presented as your own original work (never as a video recap). Use whenever a YouTube URL appears in chat, or the user says "make a Reel from this video", "turn this into a script", "make a carousel from this video", "Instagram post from this YouTube video", "repurpose this video", "TikTok script from this", "LinkedIn carousel from a video", or any phrase combining a YouTube URL with social content. Even a bare YouTube URL with no other text should trigger this skill.
---

# YouTube to Social

Drop in a YouTube URL. The skill pulls the transcript, identifies the strongest substance, and produces social content in your brand voice — either as a 30-60 second video script or as a multi-slide Instagram/LinkedIn carousel.

The output is **original content** — written and designed as if you'd come up with these ideas yourself. The skill never references the source video. Facts, frameworks, and specific examples transfer (because facts aren't anyone's IP); voice, framing, and visual identity are yours.

---

## First-run check (basic onboarding)

Before doing any work, check whether the buyer has completed basic setup.

1. Look for `config.json` next to this `SKILL.md` file.
2. If it doesn't exist, OR is invalid JSON, OR is missing any required field listed in `config.example.json`, run the basic onboarding flow below.
3. Otherwise, read `config.json` and use its values throughout.

> **Note:** Carousel-specific onboarding (font, aspect ratio, visual style, etc.) is run *progressively* — only when the buyer first uses carousel mode. See "Carousel-specific onboarding" later in this file. Don't ask carousel questions during basic onboarding.

### Basic onboarding flow

Tell the buyer:

> "Welcome — first time using this skill, so I'll ask a few quick questions to set it up. Takes about 60 seconds. Your answers stay on your machine and you'll only be asked once."

Ask these required questions (use AskUserQuestion if available; otherwise conversational, one at a time):

1. **Brand name** → `config.brand.name`
2. **Audience** → "In one sentence, who do you make content for?" → `config.audience`
3. **Voice** → Pick one: Punchy & casual / Polished & professional / Warm & conversational / Technical & precise / Custom (describe in your own words) → `config.voice.preset` (and `config.voice.custom_description` if Custom)

Optional (offer but don't block on):

- "Default closing CTA? (e.g., 'Save this', 'Follow for more', 'Comment your take')" → `config.cta.text`
- "Default CTA link? (only used if you want it mentioned in scripts)" → `config.cta.url`

After collecting answers, write `config.json` matching `config.example.json`. Use the Write tool. Validate that the JSON parses.

Confirm:
> "Saved. You won't see these questions again. To change anything later, just say 'redo setup' or 'change my voice'. Now — paste a YouTube URL."

### Updating config

If the buyer wants to redo setup, change a specific field, or "update my brand" / "change my voice" / "redo carousel settings", re-run the relevant questions and update `config.json`.

If `config.json` is malformed, tell the buyer in plain language what's missing, then offer to re-run onboarding for those fields.

---

## Workflow

Once basic onboarding is done, the workflow is:

### Non-negotiables (single-video mode)

These rules apply whenever there is exactly ONE URL in scope. They DO NOT apply in bulk mode (2+ URLs) — bulk mode auto-picks by design (see "Bulk mode" section below).

1. **Never silently pick a script format.** Always surface 2-3 fitting formats to the buyer per Step 5a. The only exceptions are: (a) the buyer named a specific format in their message ("make a Speedrun script from this"), or (b) the buyer explicitly says "you pick" / "your call" / "surprise me." Do not interpret a brief setup answer or a generic brand name as license to auto-pick.

2. **Never skip carousel onboarding on first carousel use.** If `config.carousel` is missing or incomplete, you MUST run the mini-onboarding in Step 5b before generating any carousel. Sensible-default substitutions are not allowed here — the buyer's visual identity is the whole point of the onboarding.

3. **Efficiency is not a license to skip.** If you find yourself reasoning "the buyer seems like they want it fast, so I'll pick for them" — stop. The skill's value is producing content the buyer would have produced themselves; that requires their decisions, not yours.

The bulk-mode contract is the opposite: NO per-video questions, batch-wide decisions only. See "Bulk mode" for that flow.

### Step 1: Get the YouTube URL(s) — and detect bulk mode

Look for YouTube URLs in the buyer's message (`youtube.com/watch?v=...`, `youtu.be/...`, `youtube.com/shorts/...`, or bare).

- If **zero URLs**, ask: "What's the YouTube URL you want to repurpose?"
- If **one URL**, proceed with the single-video workflow below.
- If **two or more URLs**, enter bulk mode (see "Bulk mode" section near the end of this file). The single-video workflow below does NOT apply per-URL in bulk mode — bulk mode has its own batched flow that auto-picks formats and processes all videos with one set of decisions.

If the buyer pastes a transcript directly instead of a URL, skip to Step 3.

### Step 2: Fetch the transcript

Run the bundled fetcher script:

```bash
python3 "${SKILL_PATH}/scripts/fetch_transcript.py" "<YOUTUBE_URL>"
```

The script tries `youtube-transcript-api` first (faster), falls back to `yt-dlp` if needed (more robust). Neither requires an API key. The output header includes a `fetcher:` line showing which one succeeded.

**If the script reports both libraries are missing**, install at least one (both recommended for reliability):

```bash
pip install youtube-transcript-api yt-dlp --break-system-packages
```

(or `pip install --user ...` if `--break-system-packages` is unavailable), then retry.

**If the script reports captions are disabled or video is unavailable**, neither library can help. Tell the buyer plainly and ask them to paste the transcript directly into chat.

### Step 3: Mine the transcript for substance

Read the transcript and pull out:

- **Strong claims** ("X never works", "Y always does")
- **Frameworks** (numbered steps, named methods, mental models)
- **Specific examples** (real cases, names, dollar amounts, dates)
- **Anti-patterns** (specific mistakes the speaker calls out)
- **Surprising numbers or stats**
- **Mini-stories** (a moment, a client interaction, a turning point)
- **Contrarian takes** (lines that go against conventional wisdom)
- **Concrete artifacts** mentioned (a specific email, design, sales page)

Pick the single strongest unit and build the output around it.

### Step 4: Decide output mode

Ask the buyer what they want produced. If they already specified in their message ("make a Reel from this", "carousel from this video"), skip the question. Otherwise:

> "Want a video script (30-60 second Reel/TikTok/Short) or a carousel (Instagram/LinkedIn)?"

The buyer can pick one or both.

If **script** → go to "Script workflow" below.
If **carousel** → go to "Carousel workflow" below.

---

## Script workflow

(Same as the previous version of this skill.)

### Step 5a: Pick a viral format

Read `assets/viral-formats.md` (the format library for short-form video). Match the substance to a format using the "How to pick a format" guide at the top of that file.

You MUST surface 2-3 fitting formats to the buyer. Do not pick silently. The only exceptions are: (a) the buyer named a specific format in their message, or (b) the buyer explicitly says "you pick" / "your call" / "surprise me." A short or test-feeling onboarding answer is NOT an exception — proceed with the format menu anyway.

**Critical UX rule: write the format definitions in the chat message itself, BEFORE calling AskUserQuestion.** AskUserQuestion shows only the option labels in its UI — the description field is hidden or invisible to buyers in most clients. If you put the format definition in the description field only, the buyer is staring at a list of unfamiliar names with no context. Put the explanations in the chat text where they're guaranteed to be readable.

The shape to use:

> Three formats fit this video well. Pick whichever angle feels right.
>
> **Plot Twist Story** — a story that seems to mean one thing, then a single fact at the end flips the entire interpretation. *For this video:* set up the spooky "they vanished" reading, then drop the DNA evidence at the end to reveal they did the opposite of vanishing.
>
> **Payoff Promise Up Front** — open with a specific tangible promise of a payoff at the end ("stay until the end and I'll show you..."), then deliver. *For this video:* "Stay until the end and I'll tell you who the Lost Colony actually became."
>
> **In-Media-Res Drop** — open mid-action, mid-sentence, then pull back and explain how we got here. *For this video:* "...and that's when she held the 400-year-old map up to the light."
>
> [Then call AskUserQuestion with options Plot Twist Story / Payoff Promise Up Front / In-Media-Res Drop]

For each format you surface in the chat: a one-sentence definition of what the format IS, then a one-sentence description of how it would apply to this specific video. Definitions come from `assets/viral-formats.md`. Once the buyer picks (via AskUserQuestion), they've already read what they're picking.

If the buyer EXPLICITLY says "you pick" / "your call" / "surprise me" / "whichever", pick the format with the sharpest hook and tell the buyer which one you picked and why in one sentence. If they request a format by name, use that. In every other case — surface the menu.

### Step 6a: Write the script

Build a 30-60 second script (75-150 words) on the chosen format's structural skeleton. Apply:

- **Format structure rules** are non-negotiable. Use the skeleton from `assets/viral-formats.md`. Match the format's hook pattern in the first 3 seconds.
- **Voice and audience** from `config.json`. The script should land for the buyer's audience, not the video's audience.
- **CTA** from `config.cta.text` if set; omit otherwise.
- **No reference to the source video.** Don't say "I watched this video", "in this video", "the speaker said", or anything similar. Don't credit the original creator. Treat the transcript like raw material for an essay, not the subject of one.
- **Specific data points** (numbers, examples, frameworks) can transfer over because facts aren't IP — but the voice and framing must be the buyer's.

Output structure: HOOK / setup beat / payload beats / CLOSE — plus on-screen text and b-roll cues. Format-specific signature elements (timer for Speedrun, side-by-side for Then vs. Now, etc.) must appear as production cues.

End with: "Want me to redo this in a different format, or repurpose another video?"

---

## Carousel workflow

### Step 5b: Carousel-specific onboarding (first carousel use only)

If `config.carousel` is missing or incomplete, you MUST run the carousel mini-onboarding now before producing any carousel content. This is asked once per buyer, not every time. **Do not substitute defaults to save time** — the buyer's aspect ratio, font, and visual mode shape every future carousel they make with this skill, so getting them right on the first run matters more than shaving 30 seconds.

If you catch yourself thinking "the buyer is just testing, I'll pick defaults" — stop. The buyer can always say "skip, just use defaults" themselves. They cannot un-default a choice you made for them silently.

Tell the buyer:

> "First time making a carousel — let me ask a few quick visual questions so I can make this match your brand. ~30 seconds, asked once."

Ask these required questions:

1. **Aspect ratio** → `config.carousel.aspect_ratio`
   - 1:1 (square — universal IG/X/Facebook)
   - 4:5 (portrait — IG/LinkedIn, default recommended)
   - 9:16 (story/Reel cover — taller still)

2. **Font** → `config.carousel.font.name` and resolved paths
   Pick one of the bundled fonts:
   - Inter (clean modern sans — default for tech/SaaS/general business)
   - Playfair Display (editorial serif — prestige, classic)
   - Bebas Neue (condensed display — news, sports, impact)
   - Space Grotesk (geometric sans — startup, technical)
   - Lora (warm humanist serif — literary, friendly)
   - Anton (heavy display — magazine, posters)
   - Custom — point at a TTF/OTF file path

   When the buyer picks a bundled font, write the resolved paths into config:
   ```json
   "font": {
     "name": "Inter",
     "path": "${SKILL_PATH}/assets/fonts/Inter/Inter-Variable.ttf",
     "italic_path": "${SKILL_PATH}/assets/fonts/Inter/Inter-Italic-Variable.ttf",
     "bold_weight": 700
   }
   ```
   For static fonts (Bebas Neue, Anton), set `bold_weight` to `null` and `italic_path` to the same as `path`.
   For Custom, use the buyer's path; ask if they have a separate italic file (optional).

3. **Default visual mode** → `config.carousel.visual_mode`
   - `text_only` — pure designed slides on a colored gradient. Always works regardless of what image-gen tools the buyer has. Premium typographic look.
   - `image_overlay` — an AI-generated image per slide (photographic or illustrative — depends on the chosen aesthetic), with text overlaid in post. Higher visual ceiling but requires an image-gen MCP.

   **UI label note:** when surfacing this question to the buyer, label the second option as "AI image + text overlay" (not "AI illustration") — the mode is style-agnostic. The aesthetic question (#5 below) determines whether the output is illustrative or photographic.

4. **If `image_overlay` was chosen, ask about the image generator:** → `config.carousel.image_gen`
   - Higgsfield (recommended — `marketing_studio_image` for marketing, `nano_banana_2` for general)
   - Replicate
   - OpenAI Image
   - Imagen / Vertex
   - Other (the buyer specifies which MCP they have)
   - I'll output prompts for you to run manually elsewhere

   Save the buyer's choice. The skill will look for the corresponding MCP at runtime.

5. **Default visual aesthetic** (only relevant if `image_overlay`) — how should we establish the visual style for your carousels? Offer four ways:

   - **Reference images** (Recommended for buyers with an existing brand look) — "Drop in 1-4 example images of the visual style you want, and I'll match it." See "Style from reference images" below for the flow.
   - **Preset** — pick one of: Painterly cinematic / Minimal flat / Photorealistic / Vibrant pop / Retro / Editorial / 3D render / Hand-drawn. Each preset maps to a tested style prefix.
   - **Describe in your own words** — buyer types a 1-2 sentence description.
   - **Skip** — use a sensible default for now (painterly cinematic), they can change it later.

   Save to `config.carousel.aesthetic` (text — the actual prompt prefix used by every image), `config.carousel.aesthetic_source` (one of `references` / `preset` / `description` / `default`), and `config.carousel.aesthetic_references` (list of file paths if buyer used the references option).

Optional (offer but don't block on):

- **Brand colors** — text color, accent color, image gradient color, text-only background gradient. Defaults are tasteful (white text, warm accent, black image gradient, dark blue gradient bg). Most buyers can leave defaults.

- **Page indicator** — show "1/6" pill in the corner? Default on. Set `config.carousel.page_indicator`.

After answers, update `config.json` and tell the buyer: "Saved. Carousel defaults set."

### Style from reference images

When the buyer picks the **reference images** path (in onboarding OR per-run override), follow this flow:

1. Tell the buyer: "Drop in 1-4 images that capture the visual style you want. They can be from your past posts, brand mood boards, or anywhere — I just need to see the aesthetic. When you've added them, let me know."

2. Wait for the buyer to upload. They'll appear as attached images in the conversation. Read them via vision (you're multimodal — you can see them directly without any external API).

3. Examine the images for visual common ground. Look at:
   - **Palette** — dominant colors, color temperature, saturation
   - **Lighting** — direction, hardness, time-of-day feel
   - **Composition** — wide vs. tight framing, rule of thirds, negative space
   - **Technique** — photographic, illustrated, painterly, 3D, mixed media
   - **Mood** — somber, energetic, warm, clinical, etc.
   - **Era / cultural reference** — period-authentic, modern, retro, futuristic
   - **Texture** — clean digital vs. visible brush strokes vs. grain vs. polished render
   - **Subject treatment** — abstract, figurative, environmental

4. Write a 2-4 sentence style description that captures the common ground concretely. Use specific terms (a working image-gen prompt, not poetry). Example shape: *"Atmospheric painterly cinematic illustration. Muted palette of slate blue, deep ochre, and bone white. Dramatic low-key lighting from a single off-screen source. Textured visible brush strokes, slightly desaturated, period-authentic feel."*

5. Show the description to the buyer for confirmation:
   > "Looking at your references, here's the style I'd carry through your carousels:
   >
   > *[description]*
   >
   > Use this for all future carousels? (Or refine with notes — e.g., 'also make it more high-contrast' — or restart with different references.)"

6. Iterate based on feedback until the buyer confirms. Then save:
   - `config.carousel.aesthetic` = the confirmed description
   - `config.carousel.aesthetic_source` = `"references"`
   - `config.carousel.aesthetic_references` = list of the upload paths (so you can revisit later)

7. If the buyer drops in images that don't share a clear style, say so honestly: "These references don't share an obvious style — they're [vary in this way]. Want to pick the one that feels most 'you' and try again with similar examples, or describe what you want in words?"

This whole flow can also run **per-run as an override** (Step 8b below) if the buyer wants a different style for a specific carousel without touching the saved default.

### Step 6b: Derive the carousel structure from the substance

Carousels don't use a format menu — the substance dictates the structure organically. Read `assets/carousel-writing-guide.md` for the writing principles (length, slide-count conventions, what makes a cover earn the swipe, etc.) and apply them to whatever shape the substance suggests.

In practice, look at what you mined in Step 3 and ask: "What's the cleanest way to walk a reader through this material across 5-7 slides?" Common shapes that emerge naturally — pick whichever fits, or combine — without surfacing them as a menu to the buyer:

- **Tier walk**: source has clear escalating tiers or levels (price tiers, skill levels, sophistication tiers) → one tier per slide.
- **List**: source has a small number of distinct parallel items (5 things, 7 mistakes, 4 reasons) → one item per slide.
- **Story arc**: source has a setup → conflict → reveal shape → 3-act split across slides with the reveal at the end.
- **Claim + receipts**: source makes a strong claim and has supporting evidence → cover states the claim, content slides walk the evidence, close ties it together.
- **Then vs. Now**: source has a clear before-after transformation → cover shows the contrast, content slides show what bridged it.
- **Question + answer**: source poses an interesting yes/no question → cover asks it, content slides build evidence, last slide answers.

If multiple shapes work for the substance, pick the one that produces the sharpest cover slide. Tell the buyer briefly what shape you're using and why ("Going with a tier-walk — the substance has clear price tiers from $52 to $500"). No menu, no questions to pick from.

### Step 7b: Write the slide copy

Write the slide copy. Apply:

- **Default to 5-7 slides.** Cover (slide 1) + 4-6 content slides (one idea each) + close (last slide). The substance's density determines the count.
- **Voice and audience** from `config.json`. The slide copy should land for the buyer's audience.
- **Per-slide text length:** ≤35 words for portrait slides, ≤25 words for square. Whitespace is what makes carousels feel premium.
- **One idea per slide.** If a slide has two ideas, split it.
- **Cover earns the swipe.** No setup, no preamble, no "in this carousel I'll cover...". The cover is a hook — a question, a claim, a contrast, a number, a curiosity gap.
- **Each slide should stand alone.** Someone screenshotting any single slide should still get something from it. This is what drives saves.
- **Last slide earns the action.** Append `config.cta.text` if set. Otherwise close on a one-line takeaway that ties the substance together.
- **No reference to the source video.** Same rule as scripts.

Read `assets/carousel-writing-guide.md` for the cross-cutting principles (specificity, hook discipline, save-worthy lines).

### Step 8b: Generate images (only for `image_overlay` mode)

If `config.carousel.visual_mode` is `text_only`, skip this step.

**Before generating, offer a per-run style override.** Ask the buyer:

> "Style for this carousel: stick with your default ([summary of `config.carousel.aesthetic` in 8-12 words]) or change it for this one?"

If they say "same" / "default" / "as usual", proceed with the saved style.
If they say "different" or "change", offer the four paths from carousel onboarding (preset / reference images / describe / skip), and run the same flow as during onboarding — but **only update `config.carousel.aesthetic` for this run**, don't overwrite the saved default unless they explicitly say "and save this as my new default."

Once the style is decided, write image prompts for each slide using `config.carousel.aesthetic` as the style prefix. Each prompt must:

- Establish a clear visual subject tied to the slide's content (the substance, not the text itself).
- Include the style prefix (e.g., for "painterly cinematic": "Atmospheric painterly cinematic illustration, muted color palette, dramatic light, textured visible brush strokes").
- Specify the aspect ratio matching `config.carousel.aspect_ratio`.
- Include "Composition leaves the bottom 30% of the frame quieter and darker for text overlay."
- Explicitly say "no text in the image" (text gets overlaid in post — leave it to us).
- For cohesion across slides: describe the same lighting, palette, and rendering style every time.

Then generate the images via the buyer's chosen image-gen MCP. Generic call shape:

- **Higgsfield**: `mcp__<higgsfield>__generate_image` with `model: "marketing_studio_image"` (commercial/marketing), `aspect_ratio` matching config.
- **OpenAI Image**: the OpenAI MCP's image-generation tool, with the prompt and matching size.
- **Replicate**: a Replicate MCP, model varies.
- **Other**: any MCP whose tool list includes an image-generation tool that takes a prompt and returns a URL or file.

Generate them in parallel where possible (one tool call per slide in a single message).

If the call fails or no MCP is available, fall back to either:
1. Telling the buyer the failure plainly and suggesting `text_only` mode for this run.
2. Or outputting the image prompts as text so the buyer can run them manually in their own tool.

If the buyer earlier said "I'll output prompts for you to run manually elsewhere", just print the prompts cleanly — one per slide — and tell the buyer to generate them however they like, then point you at the resulting files.

### Step 9b: Compose the carousel

Build a JSON spec and run the compose script:

```bash
python3 "${SKILL_PATH}/scripts/compose_carousel.py" /tmp/carousel-spec.json
```

The spec format is documented at the top of `compose_carousel.py`. Key fields:

```json
{
  "output_dir": "<buyer's outputs folder>/<carousel-name>",
  "name": "<kebab-case-name-for-this-carousel>",
  "size": [<width>, <height>],
  "mode": "image_overlay" | "text_only",
  "page_indicator": <bool>,
  "font": { "path": "...", "italic_path": "...", "bold_weight": <int|null> },
  "colors": { "text": "#FFFFFF", "accent": "#EBD7AF", "image_gradient": "#000000" },
  "background_gradient": ["#1a1a2e", "#16213e"],
  "slides": [
    {"kind": "cover", "image": "<path>", "title": "...", "subtitle": "..."},
    {"kind": "content", "image": "<path>", "lines": ["..."], "footer": "..."}
  ]
}
```

For `text_only` mode, omit `image` from each slide; the script will use a gradient backdrop.

### Step 10b: Output to buyer

The compose script produces:
- Individual `slide_NN.png` files (these are what you upload to Instagram as a multi-image carousel)
- A multi-page `<name>.pdf` (this is what you upload to LinkedIn as a document carousel)
- A single contact-sheet `<name>-grid.png` for preview/sharing

Present these to the buyer with computer:// links. Briefly describe what each file is for. End with: "Want me to redo any slide, try a different format, or repurpose another video?"

---

## Bulk mode

When the buyer drops 2+ YouTube URLs in a single message, enter bulk mode. The goal: produce a batch of finished outputs with one set of decisions, not run the full per-video flow N times.

### Bulk workflow

**Step B1 — Greet the bulk and ask the batch-wide questions.**

Tell the buyer: "Got [N] videos. Let me batch-process these. Two quick questions before I start:"

Use AskUserQuestion. Two questions:

1. **Output mode for the batch** — Scripts for all / Carousels for all / Both for every video.
2. **Image generation** (only ask if `carousel` or `both` was picked AND `config.carousel.visual_mode` is `image_overlay`) — "These [N] carousels would use ~[N×6] AI image generations across the batch. Use AI images, or render text-only for this batch?" Options: "AI images for all — proceed" / "Text-only for this batch (faster, no credit cost)".

   If the buyer chooses text-only for the batch, that override applies to THIS BATCH ONLY — don't update `config.carousel.visual_mode` for future single-video runs.

**Step B2 — Fetch all transcripts in parallel.**

Run a single bash command that backgrounds one fetch per URL and waits for all:

```bash
TS=$(date +%s)
WORK="/tmp/bulk-$TS"
mkdir -p "$WORK"
URLS=("<url1>" "<url2>" ...)
for i in "${!URLS[@]}"; do
  python3 "${SKILL_PATH}/scripts/fetch_transcript.py" "${URLS[$i]}" \
    > "$WORK/transcript-$i.txt" 2> "$WORK/error-$i.txt" &
done
wait
```

Read each transcript and its error file. Note which fetches succeeded and which failed.

**Step B3 — For each successful fetch: mine, auto-pick, generate.**

For each video that fetched successfully:

1. Mine the transcript silently (Step 3 of the single-video flow — claims, frameworks, examples, etc.).
2. **Auto-pick the format with no buyer involvement.** For scripts, use the "How to pick a format" guide at the top of `assets/viral-formats.md` and pick the top match. For carousels, derive the shape organically from the substance per `assets/carousel-writing-guide.md`. Don't surface format options — bulk mode runs without per-video questions.
3. Generate the output using the chosen format and the buyer's voice/audience/CTA from `config.json`.
4. For carousels in `image_overlay` mode (if approved in B1): write image prompts and generate via the buyer's image-gen MCP. Generate all images for one video before moving to the next, or batch across the whole batch — whichever is faster given the MCP's behavior.

**Step B4 — Organize outputs and handle failures.**

Create a single timestamped batch folder for the run:

```
<buyer's outputs folder>/youtube-bulk-YYYYMMDD-HHMMSS/
├── batch-summary.md              # the summary table
├── 01-<short-video-slug>/        # one folder per video
│   └── (script files OR carousel slides)
├── 02-<short-video-slug>/
│   └── ...
└── 03-FAILED-<short-video-slug>/ # failed fetches still get a folder with the error logged
    └── error.txt
```

Slug each video from a short version of its first-line transcript content (3-5 words, kebab-case). If you can't slug cleanly, use the video ID.

For failures, don't stop the batch — log the error in that video's folder and keep going.

**Step B5 — Present the batch summary.**

Write `batch-summary.md` and present it inline. Shape:

```markdown
# Batch run — [N] videos, [TIMESTAMP]

| # | Video | Status | Format | Output |
|---|-------|--------|--------|--------|
| 1 | [slug] | ✅ done | Three-Part Setup | [folder] |
| 2 | [slug] | ✅ done | Plot Twist Story | [folder] |
| 3 | [slug] | ❌ no captions | — | [folder] |
| 4 | [slug] | ✅ done | Five Levels (carousel) | [folder] |
...
```

End with: "Want me to redo any of these in a different format, or repurpose another batch?"

### Bulk-mode rules of thumb

- **No per-video format questions.** Bulk's value is removing friction; menu-driven flow defeats the purpose.
- **Continue on failure.** If a fetch fails, log it and keep going. Don't ask the buyer to handle each failure mid-batch.
- **One image-gen confirmation, applied to the whole batch.** Don't ask per video — that's worse than ten single-video runs.
- **Don't write per-video config changes.** Bulk overrides (like text-only for this batch) apply to the batch only, never to saved defaults.
- **Token economy matters.** A 10-video bulk run is hefty. Mine each transcript efficiently — don't quote large passages back to the buyer; just produce outputs.

---

## Edge cases

**No URL given.** Ask for one. If the buyer pastes a transcript, skip the fetch step.

**Captions disabled / video unavailable.** Hard fail. Ask the buyer to paste the transcript manually.

**Long video (1+ hour).** Tell the buyer you'll focus on the strongest single point rather than uniformly summarizing.

**Non-English video.** Ask the buyer what language they want the output in. Translate substance, don't transliterate.

**Image-gen MCP fails or unavailable.** Offer text-only fallback for this run, OR output prompts as text for manual generation.

**Multiple URLs in one message.** Bulk mode (see "Bulk mode" section above).

**Buyer wants different format/angle on same video.** No need to refetch — transcript is in context. Pick a different format and rewrite.

**Buyer wants to update visual settings (font, colors, etc.).** Re-run the relevant carousel-onboarding question(s) and update `config.json`.

**Bulk run partially fails.** Don't stop. Log per-video failures, continue the rest, surface the failures in the summary table at the end.

---

## Reference files

- `assets/viral-formats.md` — 27 short-form video script formats. **Read every script run.**
- `assets/carousel-writing-guide.md` — carousel writing principles, length conventions, and common shape patterns the skill applies organically based on the substance (no format menu). **Read every carousel run.**
- `assets/fonts/` — six bundled SIL OFL fonts (Inter, Playfair Display, Bebas Neue, Space Grotesk, Lora, Anton) plus license files.
- `scripts/fetch_transcript.py` — pulls transcripts via youtube-transcript-api or yt-dlp.
- `scripts/compose_carousel.py` — composes carousel slides + stitches PDF + grid preview.
- `config.example.json` — config schema buyers populate during onboarding.

---

## When something's missing

For anything not specified here, default to: pick the format that best matches the substance, follow its skeleton from the format library, write in the buyer's voice for the buyer's audience, never reference the source video, and prefer a working `text_only` carousel over a failed AI-image carousel. The buyer can iterate — they'll tell you when something's off.
