#!/usr/bin/env python3
"""Package this repo's skills as installable Claude plugins (marketplace at the repo root).

  python3 tools/build_plugins.py
Then on any computer:  /plugin marketplace add dawoodalsaqri29-jpg/mastering-english-library
                        /plugin install media-studio@mastering-english-library   (or seo-studio, workspace)
"""
import json, os, shutil, glob

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SK = os.path.join(ROOT, ".claude", "skills")
PLUGINS = {
    "media-studio": {
        "description": "Images, video, talking photos (Open Generative AI / MuAPI, 638 models), voice cloning "
                       "(local Pocket TTS, MuAPI Minimax, ElevenLabs), and OpenWhispr speech-to-text, subtitles and meeting notes.",
        "skills": ["open-generative-ai", "voice-clone", "openwhispr-local"] +
                  sorted(os.path.basename(p) for p in glob.glob(os.path.join(SK, "openwhispr-*")) if not p.endswith("-local")),
    },
    "seo-studio": {
        "description": "OpenSEO (open-source Semrush/Ahrefs): local site audit + 12 SEO workflows and the OpenSEO MCP.",
        "skills": ["openseo"] + sorted(os.path.basename(p) for p in glob.glob(os.path.join(SK, "openseo-*"))),
        "mcp": {"mcpServers": {"openseo": {"type": "http", "url": "https://app.openseo.so/mcp"}}},
    },
    "workspace": {
        "description": "AppFlowy (open-source Notion) workspace pack: content calendar, courses and dictionary databases, brand and SOP pages.",
        "skills": ["appflowy"],
    },
}


def main():
    market = {"name": "mastering-english-library", "description": "Dawood's AI studio: media + voice, SEO, workspace.", "owner": {"name": "Dawood Al Saqri"}, "plugins": []}
    for name, p in PLUGINS.items():
        d = os.path.join(ROOT, "plugins", name)
        if os.path.isdir(os.path.join(d, "skills")):
            shutil.rmtree(os.path.join(d, "skills"))
        os.makedirs(os.path.join(d, ".claude-plugin"), exist_ok=True)
        for s in p["skills"]:
            shutil.copytree(os.path.join(SK, s), os.path.join(d, "skills", s),
                            ignore=shutil.ignore_patterns("__pycache__", "*.pyc"))
        json.dump({"name": name, "version": "1.0.0", "description": p["description"],
                   "author": {"name": "Dawood Al Saqri"}}, open(os.path.join(d, ".claude-plugin", "plugin.json"), "w"), indent=2)
        if p.get("mcp"):
            json.dump(p["mcp"], open(os.path.join(d, ".mcp.json"), "w"), indent=2)
        market["plugins"].append({"name": name, "source": f"./plugins/{name}", "description": p["description"]})
        print(name, len(p["skills"]), "skills")
    os.makedirs(os.path.join(ROOT, ".claude-plugin"), exist_ok=True)
    json.dump(market, open(os.path.join(ROOT, ".claude-plugin", "marketplace.json"), "w"), indent=2)


if __name__ == "__main__":
    main()
