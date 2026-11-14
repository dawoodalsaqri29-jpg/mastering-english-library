# YouTube to Social

A Claude workflow that turns any YouTube video into ready-to-post social content built on proven viral formats — in your brand voice, ready to film or upload.

> **What is this exactly?** It's a Claude plugin (`.plugin` install file) that orchestrates a multi-step pipeline: fetches the video transcript, mines it for substance, picks a viral format that matches, generates copy in your voice, and (for carousels) composes branded image slides ready for Instagram or LinkedIn. Technically a Skill packaged as a Plugin; functionally an agentic workflow.

**Two output modes:**

1. **Short-form video script** (30-60 second talking-head for Reels, TikTok, YouTube Shorts) — built on one of 27 viral video formats.
2. **Multi-slide carousel** (Instagram or LinkedIn) — designed slides with optional AI-generated images and your brand font.

**Plus bulk mode:** drop in 2+ YouTube URLs at once and get a batch of finished outputs in one go — auto-picked formats, organized into per-video folders, with a single confirmation if you want AI imagery across the batch.

Unlike most "repurpose" tools, this skill never writes summaries of someone else's video. The output is **original content**, presented as your own thinking. The transcript is just source material.

## What you get

**Script mode:**
- A 30-60 second script (75-150 words spoken)
- Built on a viral video format (Speedrun, Constraint, Five Levels, Plot Twist, Show Your Receipts, Don't Do This, and 21 others)
- Hook (0-3s), middle beats matching the chosen format, and a close
- On-screen text and b-roll cues to make filming easier
- One-line rationale for why that format was picked

**Carousel mode:**
- 5-7 slides — cover, content slides (one idea each), close. The substance dictates the structure (tier walk, list, story arc, claim+receipts, etc.) without making you pick from a menu
- Two visual modes: **text-only** (premium typographic slides on a colored gradient — works for any buyer, no image generation needed) or **image overlay** (one AI-generated image per slide — photographic or illustrative depending on the aesthetic you pick — with text overlaid, requires an image-gen MCP)
- Six bundled fonts to pick from (Inter, Playfair Display, Bebas Neue, Space Grotesk, Lora, Anton — all SIL OFL licensed)
- **Reference-image style matching** — drop in 1-4 example images of the visual style you want and the skill matches it across all your carousels
- Three deliverables per carousel: individual `slide_NN.png` files (Instagram), a multi-page PDF (LinkedIn document carousel), and a contact-sheet preview

## Why the format library matters (for scripts)

Generic AI content reads flat because it defaults to the same rhythm: hook, three points, CTA. Real viral content uses *structures* — a Speedrun lives or dies on the visible timer, a Plot Twist Story compounds in the rewatch, a Listicle promises a specific count. Each format has a different scaffold. For scripts, the skill picks the format that fits the substance and builds the output on that scaffold.

For carousels, the format library doesn't apply — carousels are visually-driven, the substance dictates the slide structure organically (a list reads as a list, a story reads as a story). No format menu, just clean slides.

## Installing

### Option A — Drop into your skills folder

1. Unzip `youtube-to-social.zip`.
2. Move the `youtube-to-social/` folder into your skills directory:
   - **Claude Code:** `~/.claude/skills/`
   - **Claude Desktop / Cowork:** the skills folder shown in your settings
3. Restart Claude or start a new conversation.

### Option B — Install as a plugin

If you use the plugin system, install the included `.plugin` file:

```
claude plugin install youtube-to-social.plugin
```

Or in Cowork, drag the `.plugin` file into chat and click Accept.

## Requirements

The skill uses small Python helpers for transcript fetching and carousel composition. It needs:

- **Python 3** (already on macOS, Linux, and most dev setups)
- **Pillow** (PIL) — for carousel composition. Install with:
  ```
  pip install Pillow --break-system-packages
  ```
- **At least one of two free Python libraries** for transcript fetching. Both recommended for max reliability:
  ```
  pip install youtube-transcript-api yt-dlp --break-system-packages
  ```

The skill will offer to install whatever is missing on first use.

**No API keys, no Google account, no subscriptions** for transcript fetching or carousel composition. Both transcript libraries pull captions from YouTube's public frontend (the same data behind YouTube's "Show transcript" button).

### For carousel mode in `image_overlay` style

If you want AI images on your carousel slides (photographic, illustrative, or any aesthetic in between), you'll need an image-generation MCP connected. Recommended: **[Higgsfield](https://higgsfield.ai)** — their `marketing_studio_image` model is purpose-built for commercial use and produces consistent style across slides. You can also use OpenAI's image MCP, Replicate, or any other image-gen MCP that takes a prompt and returns an image. The skill will use whatever you have connected.

If you don't have any image-gen MCP, the skill works in **text-only carousel mode** — premium typographic slides on a colored gradient. No installation needed, always works, looks great.

## First run

The first time you trigger the skill, it'll ask three quick questions:

- Your brand name
- Your audience (one sentence)
- Your voice (punchy, polished, warm, technical, or custom)

Plus two optional ones (default closing CTA + link).

The first time you ask for a **carousel specifically**, it'll run a quick mini-onboarding for the carousel-specific fields — aspect ratio, font, default visual mode, image-gen tool. Also asked once. Saves to the same `config.json`.

## Using it

Paste a YouTube URL into Claude. Examples that trigger the skill:

> "Repurpose this video: https://youtu.be/..."

> "Make a Reel script from this: https://www.youtube.com/watch?v=..."

> "Carousel from this video: https://youtu.be/..."

> Just paste a YouTube URL with no other text.

The skill will:
1. Fetch the transcript
2. Mine for substance — claims, frameworks, anti-patterns, surprising numbers, specific examples
3. Ask: script or carousel?
4. Pick a format that matches the substance (or surface a few options)
5. Generate the output in your voice

## Using bulk mode

Drop 2+ YouTube URLs into a single message and the skill switches to bulk:

> "Repurpose all of these:
> https://youtube.com/watch?v=...
> https://youtube.com/watch?v=...
> https://youtube.com/watch?v=...
> ..."

You'll get two batch-wide questions:

1. **Output mode for the batch** — scripts for all, carousels for all, or both for every video.
2. **Image generation** — only asked if you picked carousels in image-overlay mode. The skill confirms how many image generations the batch will use, and you choose AI images for the batch or text-only for this batch (your saved default doesn't change).

Then the skill fetches all transcripts in parallel, auto-picks the strongest format per video, generates everything, and organizes the output into per-video subfolders inside one timestamped batch folder. You'll get a summary table at the end showing what was produced and any failures (videos with disabled captions, etc.).

Bulk mode is best for content batching — review a week's worth of source videos at once, get a week's worth of social content out the other side. If you want to redo a specific video in a different format afterwards, just say so — the transcript is still in context.

## Updating your setup later

Just say:
- "Redo setup" — full re-onboarding
- "Change my voice to punchy"
- "Update my CTA"
- "Redo carousel settings" — re-runs the carousel mini-onboarding
- "Change my carousel font to Lora"

The skill walks you through the changed fields.

## The "original content" promise

The output never references the source video. No "I watched this video," no "according to the speaker," no credit to the channel. Substance — facts, frameworks, specific examples — transfers, because facts are facts. Voice and framing are yours. You're the one delivering the content. That's how repurposing should work.

## Bundled fonts

This skill ships with six fonts under SIL OFL 1.1 — all free for commercial use and redistribution:

- **Inter** — clean modern sans (default)
- **Playfair Display** — editorial serif
- **Bebas Neue** — condensed display
- **Space Grotesk** — geometric sans
- **Lora** — humanist serif
- **Anton** — heavy display

Plus a "Custom" option — point at any TTF/OTF file path on your machine.

Full font attribution is in `assets/fonts/README.md`. Each font's `OFL.txt` license is included.

## Troubleshooting

**"Both transcript fetchers failed."**
Install one or both: `pip install youtube-transcript-api yt-dlp --break-system-packages`. Both are free, no API keys required.

**"This video has captions disabled."**
Some uploaders disable captions. Paste the transcript directly into chat — the skill skips the fetch step and works from raw text.

**The voice doesn't feel right.**
Say "redo my voice" and either pick a different preset or use Custom to describe your voice in your own words.

**The carousel font doesn't match my brand.**
Say "change my carousel font" — the skill will offer the bundled options or let you point at a custom font file.

**Image generation failed for my carousel.**
The skill will offer to fall back to text-only mode for that run, or output the prompts so you can run them in your image tool of choice. You can also switch your default to text-only via "change my carousel visual mode".

**The skill picked a format I don't want.**
Just ask for a different one: "Redo it as a Don't Do This format" or "Try the Plot Twist angle." The transcript is still in context — no need to refetch.

**Reset to factory defaults.**
Delete `config.json` from the skill folder. Next run will re-onboard from scratch.

## Tips for best results

- **Pick videos with substance.** A 30-second viral clip won't have enough material. Aim for at least 3-5 minutes of substantive talk.
- **Try multiple formats on the same video.** The skill can re-run on the same transcript with a different format. Same source, wildly different outputs.
- **Use Custom voice if presets miss.** Describe your voice in 1-2 sentences and the skill will follow it.
- **Specifics are the multiplier.** Pull dollar amounts, names, numbers, and concrete examples from the transcript into your output. Vague substance produces vague content.
- **Carousel slide count matters.** 5-7 slides is the sweet spot for engagement. The skill picks based on substance density, but you can request more or fewer.

## Script format catalog

The skill picks from these 27 viral video formats based on the substance of the video, then writes the script on that format's structural skeleton. Full definitions are in `assets/viral-formats.md`.

- **Challenges:** Speedrun, Constraint, Streak, Random Selection, Underdog Setup, Public Verdict
- **Education:** Walk-Through Annotation, Before & After Decode, Show Your Receipts, Reverse Tutorial, Five Levels, 30-Second Audit, What I Charge For This, Don't Do This
- **Storytelling:** In-Media-Res Drop, Stranger of the Day, Artifact Open, Then vs. Now, Plot Twist Story, Documentary Mini-Episode, Recurring Character
- **Delayed Payoff:** Slow Build, Three-Part Setup, Fake Fail, Slow Reveal, Payoff Promise Up Front, Loop, Countdown, Question Held Open

**Carousels don't use a format menu.** The substance dictates the slide structure organically — a tiered topic gets a tier walk, a list gets a list, a story gets a story arc, etc. No menu to pick from. Writing principles and shape patterns the skill draws from are in `assets/carousel-writing-guide.md`.

## Support

REPLACE — add your support contact, refund policy, and any other buyer-facing info here before listing.

## License

REPLACE — add your license terms here.

The bundled fonts in `assets/fonts/` are licensed separately under SIL OFL 1.1; see each font's `OFL.txt` for details. You can redistribute them freely as part of this skill.
