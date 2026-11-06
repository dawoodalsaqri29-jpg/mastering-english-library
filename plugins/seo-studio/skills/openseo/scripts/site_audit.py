#!/usr/bin/env python3
"""Local SEO audit of a static site folder (the OpenSEO site-audit checks that need no paid data).

  site_audit.py [ROOT] [--base https://example.com] [--fix-sitemap]

Checks every .html page: <title> (30-60 chars), meta description (70-160), one <h1>, lang attribute,
canonical, Open Graph/Twitter tags, viewport, images without alt, internal links that 404, page weight,
JSON-LD schema, duplicate titles/descriptions, plus robots.txt and sitemap.xml.
--fix-sitemap writes sitemap.xml and robots.txt for the pages that should be indexed.
"""
import argparse, os, re, sys, json, html
from collections import defaultdict
from html.parser import HTMLParser

SKIP = re.compile(r"^google[0-9a-f]+\.html$|^404\.html$")


class P(HTMLParser):
    def __init__(self):
        super().__init__(); self.d = defaultdict(list); self._t = None; self.text = {"title": "", "h1": []}
    def handle_starttag(self, tag, a):
        a = dict(a)
        if tag == "html": self.d["lang"].append(a.get("lang"))
        if tag == "title": self._t = "title"
        if tag == "h1": self._t = "h1"; self.text["h1"].append("")
        if tag == "meta":
            k = (a.get("name") or a.get("property") or "").lower()
            if k: self.d["meta:" + k].append(a.get("content") or "")
        if tag == "link" and (a.get("rel") or "").lower() == "canonical": self.d["canonical"].append(a.get("href"))
        if tag == "img": self.d["img"].append(a)
        if tag == "a" and a.get("href"): self.d["a"].append(a["href"])
        if tag == "script" and (a.get("type") or "") == "application/ld+json": self.d["jsonld"].append(1)
    def handle_endtag(self, tag):
        if tag in ("title", "h1"): self._t = None
    def handle_data(self, data):
        if self._t == "title": self.text["title"] += data
        elif self._t == "h1": self.text["h1"][-1] += data


def audit(root, base):
    pages = sorted(f for f in os.listdir(root) if f.endswith(".html") and not SKIP.match(f))
    issues, titles, descs, rows = [], defaultdict(list), defaultdict(list), []
    for f in pages:
        raw = open(os.path.join(root, f), encoding="utf-8", errors="replace").read()
        p = P(); p.feed(raw)
        t = " ".join(p.text["title"].split()); desc = (p.d.get("meta:description") or [""])[0]
        titles[t].append(f); descs[desc].append(f)
        def bad(sev, msg): issues.append((sev, f, msg))
        if not t: bad("high", "missing <title>")
        elif not 30 <= len(t) <= 60: bad("low", f"title is {len(t)} chars (aim 30-60): {t!r}")
        if not desc: bad("high", "missing meta description")
        elif not 70 <= len(desc) <= 160: bad("low", f"description is {len(desc)} chars (aim 70-160)")
        h1 = [h for h in p.text["h1"] if h.strip()]
        if len(h1) != 1: bad("medium", f"{len(h1)} <h1> tags (want exactly 1)")
        if not any(p.d.get("lang", [])): bad("medium", "no lang on <html>")
        if not p.d.get("meta:viewport"): bad("high", "no viewport meta (mobile)")
        if not p.d.get("canonical"): bad("medium", "no canonical link")
        for k in ("og:title", "og:description", "og:image"):
            if not p.d.get("meta:" + k): bad("low", f"no {k} (link previews on WhatsApp/IG/X)")
        if not p.d.get("jsonld"): bad("low", "no JSON-LD schema")
        noalt = [i.get("src") for i in p.d.get("img", []) if not (i.get("alt") or "").strip()]
        if noalt: bad("medium", f"{len(noalt)} images without alt: {noalt[:3]}")
        for h in p.d.get("a", []):
            if re.match(r"^(https?:|mailto:|tel:|#|javascript:)", h): continue
            path = h.split("#")[0].split("?")[0]
            if path and not os.path.exists(os.path.join(root, path)): bad("high", f"broken internal link: {h}")
        kb = len(raw.encode()) // 1024
        if kb > 150: bad("low", f"HTML is {kb} KB")
        rows.append({"page": f, "title": t, "description": desc, "h1": h1[:1]})
    for t, fs in titles.items():
        if t and len(fs) > 1: issues.append(("medium", ", ".join(fs), f"duplicate title {t!r}"))
    for d, fs in descs.items():
        if d and len(fs) > 1: issues.append(("medium", ", ".join(fs), "duplicate meta description"))
    for f in ("robots.txt", "sitemap.xml"):
        if not os.path.exists(os.path.join(root, f)): issues.append(("high", f, "missing"))
    return pages, issues, rows


def write_sitemap(root, base, pages):
    base = base.rstrip("/")
    urls = "".join(f"  <url><loc>{html.escape(base + '/' + ('' if p == 'index.html' else p))}</loc></url>\n" for p in pages)
    open(os.path.join(root, "sitemap.xml"), "w").write(
        f'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n{urls}</urlset>\n')
    open(os.path.join(root, "robots.txt"), "w").write(f"User-agent: *\nAllow: /\n\nSitemap: {base}/sitemap.xml\n")
    print("wrote sitemap.xml and robots.txt")


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("root", nargs="?", default="."); ap.add_argument("--base", default="")
    ap.add_argument("--fix-sitemap", action="store_true"); ap.add_argument("--json", action="store_true")
    a = ap.parse_args()
    pages, issues, rows = audit(a.root, a.base)
    if a.fix_sitemap:
        if not a.base: sys.exit("--fix-sitemap needs --base https://your-domain")
        write_sitemap(a.root, a.base, pages)
        pages, issues, rows = audit(a.root, a.base)
    if a.json:
        return print(json.dumps({"pages": rows, "issues": issues}, ensure_ascii=False, indent=1))
    order = {"high": 0, "medium": 1, "low": 2}
    print(f"{len(pages)} pages, {len(issues)} issues "
          f"({sum(1 for i in issues if i[0]=='high')} high, {sum(1 for i in issues if i[0]=='medium')} medium)")
    for sev, f, msg in sorted(issues, key=lambda i: (order[i[0]], i[1])):
        print(f"[{sev:6}] {f}: {msg}")


if __name__ == "__main__":
    main()
