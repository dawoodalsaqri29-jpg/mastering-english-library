#!/usr/bin/env python3
"""Build the dictionary files the site loads.

Inputs
  data/dictionary.json         hand-written entries (full format; these win over generated ones)
  --generated DIR              JSON arrays of generated entries in the short format:
                               {"w", "p":[{"pos","g","s":[{"gd","l","d","ar","ex"}]}], "syn", "ant", "m":{"w","r","n"}}
  --ipa-uk FILE, --ipa-us FILE ipa-dict word lists (https://github.com/open-dict-data/ipa-dict, MIT)

Outputs
  data/dict/index.json         {"words": [[word, pos, level, arabic], ...]}
  data/dict/<letter>.json      {"entries": [full entries]} for each first letter

Run from the repository root:
  python3 tools/build_dictionary.py --generated path/to/out --ipa-uk en_UK.txt --ipa-us en_US.txt
"""
import argparse
import glob
import json
import os
import re
from collections import defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def load_ipa(path, us=False):
    out = {}
    if not path:
        return out
    with open(path, encoding="utf-8") as f:
        for line in f:
            if "\t" not in line:
                continue
            word, prons = line.rstrip("\n").split("\t", 1)
            p = prons.split(",")[0].strip().strip("/")
            if us:
                p = p.replace("ɹ", "r")
            out.setdefault(word.lower(), p)
    return out


def ipa_for(word, table):
    w = word.lower()
    if w in table:
        return table[w]
    parts = re.findall(r"[a-z']+", w)
    if parts and all(p in table for p in parts):
        return " ".join(table[p] for p in parts)
    return ""


def from_curated(e):
    first = {"pos": e["pos"], "senses": e["senses"]}
    if e.get("gram"):
        first["gram"] = e["gram"]
    blocks = [first]
    if e.get("also"):
        a = e["also"]
        blocks.append({"pos": a["pos"], "uk": a.get("uk"), "us": a.get("us") or a.get("uk"),
                       "senses": [{"level": a.get("level"), "def": a["def"], "ar": a["ar"], "ex": a.get("ex", [])}]})
    out = {"word": e["word"], "uk": e.get("uk", ""), "us": e.get("us", ""), "blocks": blocks}
    for k in ("syn", "ant", "family", "coll", "mistake", "lesson"):
        if e.get(k):
            out[k] = e[k]
    return out


def from_generated(g, uk, us):
    blocks = []
    for p in g["p"]:
        b = {"pos": p["pos"], "senses": [
            {"guide": s["gd"], "level": s["l"], "def": s["d"], "ar": s["ar"], "ex": s.get("ex", [])} for s in p["s"]]}
        if p.get("g"):
            b["gram"] = p["g"]
        blocks.append(b)
    out = {"word": g["w"], "uk": ipa_for(g["w"], uk), "us": ipa_for(g["w"], us), "blocks": blocks}
    if g.get("syn"):
        out["syn"] = g["syn"]
    if g.get("ant"):
        out["ant"] = g["ant"]
    if g.get("m"):
        out["mistake"] = {"wrong": g["m"]["w"], "right": g["m"]["r"], "note": g["m"]["n"]}
    return out


def letter(word):
    c = word.lower()[0]
    return c if "a" <= c <= "z" else "other"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--generated", required=True)
    ap.add_argument("--ipa-uk")
    ap.add_argument("--ipa-us")
    args = ap.parse_args()

    uk = load_ipa(args.ipa_uk)
    us = load_ipa(args.ipa_us, us=True)

    entries = {}
    for f in sorted(glob.glob(os.path.join(args.generated, "*.json"))):
        with open(f, encoding="utf-8") as fh:
            for g in json.load(fh):
                entries[g["w"].lower()] = from_generated(g, uk, us)
    with open(os.path.join(ROOT, "data", "dictionary.json"), encoding="utf-8") as fh:
        for e in json.load(fh)["entries"]:
            entries[e["word"].lower()] = from_curated(e)

    shards = defaultdict(list)
    index = []
    for key in sorted(entries):
        e = entries[key]
        shards[letter(e["word"])].append(e)
        s = e["blocks"][0]["senses"][0]
        index.append([e["word"], e["blocks"][0]["pos"], s.get("level", ""), s.get("ar", "")])

    outdir = os.path.join(ROOT, "data", "dict")
    os.makedirs(outdir, exist_ok=True)
    for old in glob.glob(os.path.join(outdir, "*.json")):
        os.remove(old)
    note = ("Mastering English Library dictionary. Definitions, examples and Arabic by Mastering English Library. "
            "Levels: CEFR-J Wordlist (Tono Lab, TUFS) and Octanove Vocabulary Profile (CC BY-SA 4.0). "
            "IPA: ipa-dict (MIT).")
    for l, items in shards.items():
        with open(os.path.join(outdir, l + ".json"), "w", encoding="utf-8") as fh:
            json.dump({"note": note, "entries": items}, fh, ensure_ascii=False, separators=(",", ":"))
    with open(os.path.join(outdir, "index.json"), "w", encoding="utf-8") as fh:
        json.dump({"note": note, "words": index}, fh, ensure_ascii=False, separators=(",", ":"))
    no_ipa = sum(1 for e in entries.values() if not e["uk"] or not e["us"])
    print(f"{len(entries)} entries, {len(shards)} shards, {no_ipa} missing some IPA")


if __name__ == "__main__":
    main()
