#!/usr/bin/env python3
"""fetch.py: get timestamped words from videos and podcasts.

    python fetch.py <link-or-file> [more...] --out learned [--latest N] [--model base]

Order for each source: captions through yt-dlp, then local transcription. An RSS feed
expands to its newest episodes and a playlist to its videos. Nothing is uploaded. The tools
live in a private environment under ~/.cache/learn-skill, so nothing else on the machine
changes.
"""
from __future__ import annotations

import argparse
import html
import ipaddress
import json
import os
import re
import socket
import subprocess
import sys
import tempfile
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

CACHE = Path.home() / ".cache" / "learn-skill"
VENV = CACHE / "venv"
AUDIO_EXT = {".mp3", ".m4a", ".wav", ".ogg", ".oga", ".flac", ".aac", ".opus", ".webm", ".mp4", ".mkv", ".mov"}
UA = "Mozilla/5.0 (learn-skill)"
MAX_DOWNLOAD = 3 * 1024 ** 3


def log(msg: str) -> None:
    print(msg, flush=True)


def venv_python() -> Path:
    return VENV / ("Scripts/python.exe" if os.name == "nt" else "bin/python")


def run(cmd, **kw):
    return subprocess.run([str(c) for c in cmd], capture_output=True, text=True,
                          encoding="utf-8", errors="replace", **kw)


def base_pythons():
    """Interpreters to try for the private environment, newest with wheels first."""
    if os.name == "nt":
        yield from (["py", "-3.12"], ["py", "-3.13"], ["py", "-3.11"], ["py", "-3.10"], ["py", "-3"], ["python"])
    else:
        yield from (["python3.12"], ["python3.13"], ["python3.11"], ["python3.10"], ["python3"])
    yield [sys.executable]


def pip_install(*pkgs) -> None:
    r = run([venv_python(), "-m", "pip", "install", "--quiet", "--disable-pip-version-check", *pkgs])
    if r.returncode:
        raise RuntimeError(f"could not install {' '.join(pkgs)}: {r.stderr.strip()[-400:]}")


def ensure_venv() -> None:
    if venv_python().exists():
        return
    log("First run: setting up a private environment (about 30 seconds).")
    CACHE.mkdir(parents=True, exist_ok=True)
    for cand in base_pythons():
        try:
            r = run([*cand, "-m", "venv", VENV])
        except OSError:
            continue
        if r.returncode == 0 and venv_python().exists():
            pip_install("yt-dlp")
            return
    raise RuntimeError("could not create a Python environment. Install Python 3.12 and try again.")


def ytdlp(*args):
    return run([venv_python(), "-m", "yt_dlp", "--no-warnings", *args])


def is_local(url: str) -> bool:
    """True when a link points at this computer or a private network."""
    host = urllib.parse.urlsplit(url).hostname or ""
    try:
        infos = socket.getaddrinfo(host, None)
    except OSError:
        return False
    return any(not ipaddress.ip_address(i[4][0].split("%")[0]).is_global for i in infos)


def check_url(url: str, trusted_local: bool = False) -> None:
    """Links can come from a stranger's feed, so only plain web links on the public internet pass.
    A local address passes only when the person typed a local address themselves."""
    if urllib.parse.urlsplit(url).scheme not in ("http", "https"):
        raise RuntimeError(f"not a web link, so I did not open it: {url[:80]}")
    if not trusted_local and is_local(url):
        raise RuntimeError(f"that link points at a private address, so I did not open it: {url[:80]}")


class CheckRedirects(urllib.request.HTTPRedirectHandler):
    def __init__(self, trusted_local):
        self.trusted_local = trusted_local

    def redirect_request(self, req, fp, code, msg, headers, newurl):
        check_url(newurl, self.trusted_local)
        return super().redirect_request(req, fp, code, msg, headers, newurl)


def fetch_url(url: str, trusted_local: bool = False) -> bytes:
    check_url(url, trusted_local)
    opener = urllib.request.build_opener(CheckRedirects(trusted_local))
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with opener.open(req, timeout=60) as r:
        data = r.read(MAX_DOWNLOAD + 1)
    if len(data) > MAX_DOWNLOAD:
        raise RuntimeError("that file is over 3 GB, so I stopped")
    return data


def slugify(text: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")[:60] or "source"


def stamp(seconds: float) -> str:
    s = int(seconds)
    return f"{s // 3600:d}:{s % 3600 // 60:02d}:{s % 60:02d}"


# ---------------------------------------------------------------- sources

def looks_like_feed(data: bytes) -> bool:
    head = data[:2000].lower()
    return b"<rss" in head or b"<feed" in head


def expand_feed(url: str, data: bytes, latest: int):
    root = ET.fromstring(data)
    show = root.findtext("channel/title") or "podcast"
    out = []
    for item in root.iterfind("channel/item"):
        enc = item.find("enclosure")
        if enc is None or not enc.get("url"):
            continue
        out.append({"kind": "audio", "url": enc.get("url"), "show": show,
                    "title": (item.findtext("title") or "episode").strip(),
                    "date": (item.findtext("pubDate") or "").strip()})
        if len(out) >= latest:
            break
    return out


def expand(source: str, latest):
    """One input becomes a list of concrete sources."""
    p = Path(source).expanduser()
    if p.exists():
        return [{"kind": "file", "path": str(p), "title": p.stem}]
    if not re.match(r"https?://", source):
        raise ValueError(f"not a link and not a file I can find: {source}")
    path = source.split("?")[0].lower()
    if Path(path).suffix in AUDIO_EXT:
        return [{"kind": "audio", "url": source, "title": Path(path).stem, "typed_local": is_local(source)}]
    if re.search(r"(feed|rss|\.xml)", path) or "feeds." in path:
        typed_local = is_local(source)
        data = fetch_url(source, typed_local)
        if looks_like_feed(data):
            return [dict(item, typed_local=typed_local) for item in expand_feed(source, data, latest or 1)]
    if "list=" in source or "/playlist" in path or "/@" in path or "/channel/" in path:
        args = ["--flat-playlist", "--dump-single-json"]
        if latest:
            args += ["--playlist-end", str(latest)]
        r = ytdlp(*args, "--", source)
        if r.returncode == 0:
            info = json.loads(r.stdout)
            entries = info.get("entries") or []
            if entries:
                return [{"kind": "video", "url": e.get("url") or e.get("webpage_url"),
                         "title": e.get("title") or e.get("id")} for e in entries]
    return [{"kind": "video", "url": source, "title": None}]


# ---------------------------------------------------------------- captions

def parse_vtt(text: str):
    """Clean WebVTT into (start_seconds, line) with rolling-caption repeats removed."""
    out, seen = [], []
    start = None
    for raw in text.splitlines():
        m = re.match(r"(\d+):(\d+):(\d+)[.,]\d+\s*-->", raw) or re.match(r"()(\d+):(\d+)[.,]\d+\s*-->", raw)
        if m:
            h = int(m.group(1) or 0)
            start = h * 3600 + int(m.group(2)) * 60 + int(m.group(3))
            continue
        if start is None or not raw.strip() or raw.startswith(("WEBVTT", "Kind:", "Language:", "NOTE")):
            continue
        line = html.unescape(re.sub(r"<[^>]+>", "", raw)).strip()
        if line and line not in seen[-3:]:
            seen.append(line)
            out.append((start, line))
    return out


def captions(url: str, work: Path):
    """Return (rows, info) or (None, info). Prefers captions in the video's own language."""
    r = ytdlp("--dump-single-json", "--skip-download", "--", url)
    if r.returncode:
        reason = (r.stderr.strip().splitlines() or ["unknown error"])[-1]
        raise RuntimeError(reason)
    info = json.loads(r.stdout)
    lang = info.get("language") or "en"
    manual = info.get("subtitles") or {}
    auto = info.get("automatic_captions") or {}
    picks = [(manual, lang), (manual, "en"), (auto, f"{lang}-orig"), (auto, lang), (auto, "en-orig"), (auto, "en")]
    for table, code in picks:
        if code not in table:
            continue
        flag = "--write-subs" if table is manual else "--write-auto-subs"
        r = ytdlp("--skip-download", flag, "--sub-langs", code, "--sub-format", "vtt",
                  "-o", str(work / "cap.%(ext)s"), "--", url)
        files = list(work.glob("cap*.vtt"))
        if r.returncode == 0 and files:
            return parse_vtt(files[0].read_text(encoding="utf-8", errors="replace")), info
    return None, info


# ---------------------------------------------------------------- transcription

def transcribe(path: Path, model: str):
    if run([venv_python(), "-c", "import faster_whisper"]).returncode:
        log("No captions here, so I am transcribing on this computer. Installing the speech tool once (about a minute).")
        # Newer PyAV removed an option faster-whisper still passes, so hold it back.
        pip_install("faster-whisper==1.2.1", "av<16")
    code = (
        "import json,os,sys\n"
        "from faster_whisper import WhisperModel\n"
        "threads=max(1,(os.cpu_count() or 2)//2)\n"
        "m=WhisperModel(sys.argv[2],device='cpu',compute_type='int8',cpu_threads=threads)\n"
        "segs,info=m.transcribe(sys.argv[1],vad_filter=True)\n"
        "for s in segs:\n"
        "    print(json.dumps([s.start,s.text.strip()]),flush=True)\n"
    )
    log(f"Transcribing with the {model} model. The first time this downloads about 150 MB. Roughly a tenth to a third of the audio's length on a normal laptop.")
    r = run([venv_python(), "-c", code, path, model])
    if r.returncode:
        raise RuntimeError("transcription failed: " + r.stderr.strip()[-400:])
    rows = []
    for line in r.stdout.splitlines():
        try:
            start, text = json.loads(line)
        except ValueError:
            continue
        if text:
            rows.append((start, text))
    return rows


# ---------------------------------------------------------------- one source

def process(src: dict, out: Path, model: str) -> dict:
    with tempfile.TemporaryDirectory() as td:
        work = Path(td)
        meta = {"title": src.get("title"), "source": src.get("url") or src.get("path")}
        if src.get("show"):
            meta["show"] = src["show"]
        if src.get("date"):
            meta["date"] = src["date"]
        rows, how = None, None
        if src["kind"] == "video":
            rows, info = captions(src["url"], work)
            meta.update(title=info.get("title") or meta["title"], channel=info.get("uploader"),
                        date=info.get("upload_date"), seconds=info.get("duration"))
            if rows:
                how = "captions"
            else:
                r = ytdlp("-f", "bestaudio/best", "-o", str(work / "audio.%(ext)s"), "--", src["url"])
                files = [f for f in work.glob("audio.*")]
                if r.returncode or not files:
                    raise RuntimeError("no captions and the audio would not download: " + r.stderr.strip()[-300:])
                rows, how = transcribe(files[0], model), "local transcription"
        elif src["kind"] == "audio":
            suffix = Path(src["url"].split("?")[0]).suffix or ".mp3"
            f = work / f"audio{suffix}"
            log(f"Downloading audio: {meta['title']}")
            f.write_bytes(fetch_url(src["url"], src.get("typed_local", False)))
            rows, how = transcribe(f, model), "local transcription"
        else:
            rows, how = transcribe(Path(src["path"]), model), "local transcription"

    if not rows:
        raise RuntimeError("found no spoken words in this one")
    folder = out / slugify(meta["title"] or "source")
    folder.mkdir(parents=True, exist_ok=True)
    lines = [f"# {meta['title']}", "", f"Source: {meta['source']}", f"Words from: {how}"]
    for key in ("channel", "show", "date"):
        if meta.get(key):
            lines.append(f"{key.title()}: {meta[key]}")
    lines += ["", "## Transcript", ""]
    bucket, last = [], None
    for start, text in rows:
        if last is None or start - last >= 30:
            if bucket:
                lines.append(" ".join(bucket))
                lines.append("")
            bucket, last = [f"[{stamp(start)}]"], start
        bucket.append(text)
    if bucket:
        lines.append(" ".join(bucket))
    (folder / "transcript.md").write_text("\n".join(lines) + "\n", encoding="utf-8")
    words = sum(len(t.split()) for _, t in rows)
    return {"title": meta["title"], "source": meta["source"], "how": how, "words": words,
            "transcript": str(folder / "transcript.md")}


def main() -> int:
    ap = argparse.ArgumentParser(description="Get timestamped words from videos and podcasts.")
    ap.add_argument("sources", nargs="+")
    ap.add_argument("--out", default="learned")
    ap.add_argument("--latest", type=int, help="newest N from a feed, playlist or channel")
    ap.add_argument("--model", default="base", help="speech model: tiny, base, small, medium")
    a = ap.parse_args()

    try:
        ensure_venv()
    except RuntimeError as exc:
        log(f"FAILED setup: {exc}")
        return 2

    out = Path(a.out).expanduser()
    out.mkdir(parents=True, exist_ok=True)
    done, failed = [], []
    for raw in a.sources:
        try:
            items = expand(raw, a.latest)
        except Exception as exc:
            failed.append({"source": raw, "why": str(exc)})
            log(f"FAILED {raw}: {exc}")
            continue
        for src in items:
            label = src.get("title") or src.get("url")
            try:
                res = process(src, out, a.model)
                done.append(res)
                log(f"OK {res['title']} ({res['how']}, {res['words']} words)")
            except Exception as exc:
                failed.append({"source": src.get("url") or src.get("path"), "why": str(exc)})
                log(f"FAILED {label}: {exc}")
    print(json.dumps({"done": done, "failed": failed}, indent=1, ensure_ascii=False))
    return 0 if done else 1


if __name__ == "__main__":
    sys.exit(main())
