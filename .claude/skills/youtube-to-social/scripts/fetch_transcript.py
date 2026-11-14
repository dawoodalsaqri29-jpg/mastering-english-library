#!/usr/bin/env python3
"""
Fetch the transcript of a YouTube video.

Usage:
    python3 fetch_transcript.py <youtube-url-or-id> [--lang LANG]

Outputs to stdout:
    A header with metadata, then the full transcript text.

Tries `youtube-transcript-api` first (lighter, faster). Falls back to `yt-dlp`
if the first fetcher fails for reasons other than "captions don't exist."
Reports which fetcher succeeded in the output header.

Exits non-zero with a helpful stderr message if both fetchers fail.

Install at least one (yt-dlp is more robust to YouTube frontend changes;
both installed is most reliable):
    pip install youtube-transcript-api --break-system-packages
    pip install yt-dlp --break-system-packages

No API key is required by either library.
"""

import argparse
import os
import re
import sys
import tempfile
from urllib.parse import parse_qs, urlparse


# ---------- Sentinel exceptions ----------

class FetchError(Exception):
    """Base class for fetch errors."""


class FetcherUnavailable(FetchError):
    """The fetcher library is not installed."""


class FatalForBoth(FetchError):
    """The video genuinely has no transcript available (captions disabled, video private/deleted).
    No point trying the fallback fetcher."""


class NonFatal(FetchError):
    """This fetcher failed, but the other one might succeed (network error, block, version skew)."""


# ---------- URL → ID ----------

def extract_video_id(url_or_id: str) -> str:
    """Extract a YouTube video ID from a URL, or return the input unchanged if it's already an ID."""
    if re.fullmatch(r"[A-Za-z0-9_-]{11}", url_or_id):
        return url_or_id

    if not url_or_id.startswith(("http://", "https://")):
        url_or_id = "https://" + url_or_id

    parsed = urlparse(url_or_id)
    host = parsed.hostname or ""

    if host.endswith("youtu.be"):
        video_id = parsed.path.lstrip("/")
        if video_id:
            return video_id.split("/")[0]

    if host.endswith("youtube.com") or host.endswith("youtube-nocookie.com"):
        qs = parse_qs(parsed.query)
        if "v" in qs and qs["v"]:
            return qs["v"][0]
        path_parts = [p for p in parsed.path.split("/") if p]
        if path_parts and path_parts[0] in ("shorts", "embed", "live", "v") and len(path_parts) >= 2:
            return path_parts[1]

    raise ValueError(
        f"Could not extract a YouTube video ID from: {url_or_id!r}. "
        f"Expected a URL like https://www.youtube.com/watch?v=... or https://youtu.be/..."
    )


# ---------- Fetcher 1: youtube-transcript-api ----------

def fetch_with_yta(video_id: str, preferred_lang: str | None = None) -> tuple[str, str]:
    """Returns (language_code, transcript_text). Raises FetchError subclasses on failure."""
    try:
        from youtube_transcript_api import (  # type: ignore
            YouTubeTranscriptApi,
            TranscriptsDisabled,
            NoTranscriptFound,
            VideoUnavailable,
        )
    except ImportError:
        raise FetcherUnavailable("youtube-transcript-api is not installed")

    api = YouTubeTranscriptApi()

    try:
        transcript_list = api.list(video_id)
    except TranscriptsDisabled:
        raise FatalForBoth("captions are disabled for this video")
    except VideoUnavailable:
        raise FatalForBoth("video is unavailable (private, deleted, region-locked, or wrong ID)")
    except AttributeError as exc:
        # Old v0.x of the library is installed; fall back to v1 method name if possible
        try:
            transcript_list = YouTubeTranscriptApi.list_transcripts(video_id)  # type: ignore[attr-defined]
        except Exception as inner:
            raise NonFatal(f"youtube-transcript-api API mismatch: {exc} / {inner}")
    except Exception as exc:
        raise NonFatal(f"youtube-transcript-api list failed: {exc}")

    chosen = None
    chosen_lang = None
    if preferred_lang:
        try:
            chosen = transcript_list.find_manually_created_transcript([preferred_lang])
            chosen_lang = preferred_lang
        except NoTranscriptFound:
            pass
    if chosen is None:
        for t in transcript_list:
            if not t.is_generated:
                chosen = t
                chosen_lang = t.language_code
                break
    if chosen is None and preferred_lang:
        try:
            chosen = transcript_list.find_generated_transcript([preferred_lang])
            chosen_lang = preferred_lang
        except NoTranscriptFound:
            pass
    if chosen is None:
        for t in transcript_list:
            if t.is_generated:
                chosen = t
                chosen_lang = t.language_code
                break
    if chosen is None:
        raise NonFatal("youtube-transcript-api: no transcripts available in any language")

    try:
        fetched = chosen.fetch()
    except Exception as exc:
        raise NonFatal(f"youtube-transcript-api fetch failed: {exc}")

    text_parts = []
    # FetchedTranscript (v1) iterates FetchedTranscriptSnippet objects with .text/.start/.duration
    # Older v0.x returned a list of dicts with "text" key — handle both.
    for snippet in fetched:
        if isinstance(snippet, dict):
            snippet_text = snippet.get("text", "") or ""
        else:
            snippet_text = getattr(snippet, "text", "") or ""
        text_parts.append(snippet_text.replace("\n", " ").strip())
    text = " ".join(p for p in text_parts if p)
    text = re.sub(r"\s+", " ", text).strip()

    if not text:
        raise NonFatal("youtube-transcript-api returned empty text")

    return chosen_lang or "unknown", text


# ---------- Fetcher 2: yt-dlp ----------

def _parse_vtt_or_srt(raw: str) -> str:
    """Parse a VTT or SRT subtitle file into plain text.

    Important: YouTube's auto-generated VTT files use a rolling-caption format where
    each text line appears in 2-3 overlapping cues (so words appear progressively as
    they're spoken). After stripping word-level timing tags, the duplicates are exact —
    so we dedupe consecutive identical lines to recover the actual transcript.
    """
    out = []
    last = None
    for line in raw.splitlines():
        line = line.strip()
        if not line:
            continue
        if line.startswith(("WEBVTT", "Kind:", "Language:", "NOTE", "STYLE", "X-TIMESTAMP-MAP")):
            continue
        if "-->" in line:
            continue
        # SRT counter line (just digits)
        if re.fullmatch(r"\d+", line):
            continue
        # Strip inline tags: HTML, VTT timestamp/cue tags like <00:00:00.080><c>word</c>
        line = re.sub(r"<[^>]+>", "", line)
        line = re.sub(r"&[a-zA-Z]+;", " ", line)
        # YouTube positioning tags
        line = re.sub(r"\{\\[^}]*\}", "", line)
        # Collapse internal whitespace
        line = re.sub(r"\s+", " ", line).strip()
        if not line:
            continue
        # Dedupe rolling-caption duplicates
        if line == last:
            continue
        out.append(line)
        last = line
    text = " ".join(out)
    return re.sub(r"\s+", " ", text).strip()


def _parse_srv3(raw: str) -> str:
    """Parse YouTube's srv3 XML subtitle format into plain text."""
    matches = re.findall(r"<p\b[^>]*>(.*?)</p>", raw, flags=re.DOTALL)
    parts = []
    for m in matches:
        clean = re.sub(r"<[^>]+>", "", m)
        clean = re.sub(r"&[a-zA-Z]+;", " ", clean)
        parts.append(clean.replace("\n", " ").strip())
    text = " ".join(p for p in parts if p)
    return re.sub(r"\s+", " ", text).strip()


def fetch_with_ytdlp(video_id: str, preferred_lang: str | None = None) -> tuple[str, str]:
    """Returns (language_code, transcript_text). Raises FetchError subclasses on failure."""
    try:
        import yt_dlp  # type: ignore
    except ImportError:
        raise FetcherUnavailable("yt-dlp is not installed")

    url = f"https://www.youtube.com/watch?v={video_id}"

    # Step 1: list available subtitles (no download).
    list_opts = {"quiet": True, "no_warnings": True, "skip_download": True}
    try:
        with yt_dlp.YoutubeDL(list_opts) as ydl:
            info = ydl.extract_info(url, download=False)
    except yt_dlp.utils.DownloadError as exc:
        msg = str(exc).lower()
        if any(s in msg for s in (
            "private video",
            "video unavailable",
            "video is unavailable",
            "removed by the uploader",
            "this video is no longer available",
        )):
            raise FatalForBoth(f"yt-dlp: {exc}")
        raise NonFatal(f"yt-dlp metadata extract failed: {exc}")
    except Exception as exc:
        raise NonFatal(f"yt-dlp extract_info raised: {exc}")

    manual = {k: v for k, v in (info.get("subtitles") or {}).items() if k != "live_chat"}
    auto = {k: v for k, v in (info.get("automatic_captions") or {}).items() if k != "live_chat"}

    # Step 2: pick the best language.
    # IMPORTANT: yt-dlp returns automatic_captions for EVERY language YouTube can auto-translate
    # into (often 100+ languages). The keys come back roughly alphabetical, so a naive "first key
    # wins" picker grabs Abkhazian ('ab') instead of the source language. Build an explicit
    # preference chain instead, and fail clearly if nothing in the chain matches.
    def _match_in(d, lang):
        if not d or not lang:
            return None
        if lang in d:
            return lang
        for k in d:
            if k.lower().startswith(lang.lower()):
                return k
        return None

    preference_chain: list[str] = []
    if preferred_lang:
        preference_chain.append(preferred_lang)
    video_lang = info.get("language")
    if video_lang and video_lang not in preference_chain:
        preference_chain.append(video_lang)
    for fallback in ("en", "en-US", "en-GB"):
        if fallback not in preference_chain:
            preference_chain.append(fallback)

    chosen_lang = None
    is_generated = False

    # Try manual subs in preference order
    for pref in preference_chain:
        matched = _match_in(manual, pref)
        if matched:
            chosen_lang = matched
            break
    # If no preferred manual match, accept any manual sub (manually-uploaded subs are always real)
    if chosen_lang is None and manual:
        chosen_lang = next(iter(manual))

    # Try auto subs in preference order
    if chosen_lang is None:
        for pref in preference_chain:
            matched = _match_in(auto, pref)
            if matched:
                chosen_lang = matched
                is_generated = True
                break

    # Don't fall back to "any auto-caption" — picking a random auto-translated language
    # triggers YouTube rate limits and produces poor transcripts. Fail clearly instead.
    if chosen_lang is None:
        all_langs = sorted(set(list(manual.keys()) + list(auto.keys())))
        sample = all_langs[:15]
        raise NonFatal(
            f"yt-dlp: no transcript available in preferred languages {preference_chain}. "
            f"{len(all_langs)} languages available, including: {sample}"
        )

    # Step 3: download just the chosen subtitle
    with tempfile.TemporaryDirectory() as tmpdir:
        dl_opts = {
            "quiet": True,
            "no_warnings": True,
            "skip_download": True,
            "writeautomaticsub": is_generated,
            "writesubtitles": not is_generated,
            "subtitleslangs": [chosen_lang],
            "subtitlesformat": "vtt/srv3/best",
            "outtmpl": os.path.join(tmpdir, "%(id)s.%(ext)s"),
        }
        try:
            with yt_dlp.YoutubeDL(dl_opts) as ydl:
                ydl.download([url])
        except Exception as exc:
            raise NonFatal(f"yt-dlp subtitle download failed: {exc}")

        downloaded = [
            f for f in os.listdir(tmpdir)
            if f.endswith((".vtt", ".srv3", ".srt", ".ttml"))
        ]
        if not downloaded:
            raise NonFatal(
                f"yt-dlp: no subtitle file written (dir contents: {os.listdir(tmpdir)})"
            )

        # Prefer vtt > srv3 > srt > ttml
        order = {".vtt": 0, ".srv3": 1, ".srt": 2, ".ttml": 3}
        downloaded.sort(key=lambda f: order.get(os.path.splitext(f)[1], 99))
        chosen_file = downloaded[0]
        path = os.path.join(tmpdir, chosen_file)

        with open(path, "r", encoding="utf-8", errors="replace") as f:
            raw = f.read()

    if chosen_file.endswith(".srv3"):
        text = _parse_srv3(raw)
    else:
        text = _parse_vtt_or_srt(raw)

    if not text:
        raise NonFatal("yt-dlp: parsed subtitle was empty")

    return chosen_lang, text


# ---------- Orchestrator ----------

FETCHERS = [
    ("youtube-transcript-api", fetch_with_yta),
    ("yt-dlp", fetch_with_ytdlp),
]


def fetch_transcript(video_id: str, preferred_lang: str | None = None) -> tuple[str, str, str]:
    """Try each fetcher in order. Returns (fetcher_used, language_code, transcript_text).
    Exits the process with a helpful message if all fail."""
    errors = []
    fatal = None

    for name, fn in FETCHERS:
        try:
            lang, text = fn(video_id, preferred_lang)
            return name, lang, text
        except FatalForBoth as exc:
            fatal = (name, exc)
            break
        except (FetcherUnavailable, NonFatal) as exc:
            errors.append((name, exc))
            continue

    if fatal:
        sys.stderr.write(f"{fatal[0]}: {fatal[1]}\n\n")
        sys.stderr.write(
            "This is a hard fail — the video has no transcript available.\n"
            "If the user has the transcript saved somewhere, ask them to paste it directly.\n"
        )
        sys.exit(3)

    sys.stderr.write("Both transcript fetchers failed.\n\n")
    for name, exc in errors:
        sys.stderr.write(f"  {name}: {exc}\n")

    missing = [name for name, exc in errors if isinstance(exc, FetcherUnavailable)]
    if missing:
        sys.stderr.write("\nTo fix, install at least one of these:\n")
        if "yt-dlp" in missing:
            sys.stderr.write("    pip install yt-dlp --break-system-packages\n")
        if "youtube-transcript-api" in missing:
            sys.stderr.write("    pip install youtube-transcript-api --break-system-packages\n")
        sys.stderr.write("\nFor maximum reliability, install both. Neither requires an API key.\n")
    else:
        sys.stderr.write(
            "\nBoth libraries are installed but both failed to fetch. This may be a temporary "
            "YouTube block, a network issue, or unusual restrictions on this video. "
            "Try again in a few minutes, or ask the user to paste the transcript manually.\n"
        )
    sys.exit(5)


def main() -> int:
    parser = argparse.ArgumentParser(description="Fetch a YouTube video transcript.")
    parser.add_argument("url", help="YouTube URL or 11-character video ID")
    parser.add_argument(
        "--lang",
        default=None,
        help="Preferred transcript language code (e.g., 'en', 'es'). Falls back gracefully.",
    )
    args = parser.parse_args()

    try:
        video_id = extract_video_id(args.url)
    except ValueError as exc:
        sys.stderr.write(str(exc) + "\n")
        return 1

    fetcher, lang, transcript_text = fetch_transcript(video_id, preferred_lang=args.lang)

    sys.stdout.write("# YouTube transcript\n")
    sys.stdout.write(f"video_id: {video_id}\n")
    sys.stdout.write(f"fetcher: {fetcher}\n")
    sys.stdout.write(f"language: {lang}\n")
    sys.stdout.write(f"length_chars: {len(transcript_text)}\n")
    sys.stdout.write("---\n")
    sys.stdout.write(transcript_text + "\n")
    return 0


if __name__ == "__main__":
    sys.exit(main())
