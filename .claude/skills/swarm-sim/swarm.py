#!/usr/bin/env python3
"""Swarm simulation for the library site, after the MiroFish idea, with no outside service or key.

Personas read the real site text (the seed), say what they think, post in their WhatsApp group,
read what the others in their group posted, and decide again. Every count in the report comes
from the answer files the sub-agents wrote, and likes and dislikes are tags picked from a fixed
list, so the numbers are exact counts, not guesses from free text.

    python3 swarm.py init --customer swarm/customer.json --pages index.html levels.html ... [--n 30] [--seed 7]
    python3 swarm.py prompts 1|2          # briefs for round 1 (visit) or round 2 (group chat)
    python3 swarm.py check 1|2
    python3 swarm.py report               # writes swarm/report.md and report.json
    python3 swarm.py status

State lives in swarm/ (--dir to change it). Standard library only, no network.
Simulated people find objections and wording; they do not predict real sales.
"""

import argparse, collections, html, json, os, random, re, sys

NAMES = {
    "m": ["Ahmed", "Mohammed", "Khalid", "Salim", "Saif", "Hamad", "Faisal", "Yousef", "Abdullah", "Sultan", "Nasser",
          "Majid", "Hamdan", "Rashid", "Omar", "Ali", "Hassan", "Talal", "Fahad", "Badr", "Saud", "Mansour", "Ibrahim", "Zayed"],
    "f": ["Fatma", "Maryam", "Aisha", "Noora", "Shamsa", "Hessa", "Reem", "Latifa", "Amal", "Muna", "Sara", "Huda",
          "Asma", "Shaikha", "Laila", "Ghada", "Rawan", "Bushra", "Khadija", "Wafa", "Dana", "Hind", "Nouf", "Mariam"],
}
COUNTRIES = [("Oman", 0.30), ("Saudi Arabia", 0.25), ("UAE", 0.15), ("Kuwait", 0.12), ("Qatar", 0.09), ("Bahrain", 0.09)]

LIKES = ["free_lessons", "free_pdfs_with_answers", "level_check", "arabic_support", "arabic_speaker_mistakes",
         "teachers_page", "cheap_entry_pack", "exam_pack", "clear_levels_b1_c2", "printable_for_class",
         "clean_design", "speaking_writing_packs", "other"]
DISLIKES = ["no_free_sample_of_paid", "free_is_enough", "no_ielts_promise", "unknown_owner_no_reviews",
            "usd_price_foreign_payment", "no_apple_pay_or_local_pay", "pdf_not_phone_friendly", "prefer_tutor_or_app",
            "no_class_licence_or_invoice", "site_mostly_english", "prices_too_high", "hard_to_navigate",
            "no_speaking_practice", "other"]


class SwarmError(Exception):
    pass


def P(d, *p):
    return os.path.join(d, *p)


def rj(p):
    with open(p, encoding="utf-8") as f:
        return json.load(f)


def wj(p, o):
    os.makedirs(os.path.dirname(p) or ".", exist_ok=True)
    with open(p, "w", encoding="utf-8") as f:
        json.dump(o, f, indent=1, ensure_ascii=False)
        f.write("\n")


def page_text(path):
    s = open(path, encoding="utf-8").read()
    s = re.sub(r"(?is)<(script|style|head|svg)[^>]*>.*?</\1>", " ", s)
    s = re.sub(r"(?i)<(br|/p|/li|/h[1-6]|/tr|/div)[^>]*>", "\n", s)
    s = html.unescape(re.sub(r"(?s)<[^>]+>", " ", s))
    return "\n".join(l.strip() for l in re.sub(r"[ \t]+", " ", s).splitlines() if l.strip())


def quota(items, n):
    tot = sum(float(i.get("share", 1)) for i in items) or 1.0
    raw = [n * float(i.get("share", 1)) / tot for i in items]
    c = [int(r) for r in raw]
    for i in sorted(range(len(items)), key=lambda i: raw[i] - c[i], reverse=True)[: n - sum(c)]:
        c[i] += 1
    return c


def deal(cust, n, seed):
    rng = random.Random(seed)
    segs, behs = [], []
    for s, k in zip(cust["segments"], quota(cust["segments"], n)):
        segs += [s] * k
    for b, k in zip(cust["behaviours"], quota(cust["behaviours"], n)):
        behs += [b] * k
    rng.shuffle(behs)
    ctry = []
    for (c, _), k in zip(COUNTRIES, quota([{"share": s} for _, s in COUNTRIES], n)):
        ctry += [c] * k
    rng.shuffle(ctry)
    used, cards = set(), []
    for i in range(n):
        s, b = segs[i], behs[i]
        sex = rng.choice("mf")
        name = rng.choice([x for x in NAMES[sex] if x not in used] or NAMES[sex])
        used.add(name)
        lo, hi = s.get("age", cust.get("age", [18, 50]))
        cards.append({
            "id": "S%03d" % (i + 1), "name": name, "sex": "man" if sex == "m" else "woman",
            "age": rng.randint(lo, hi), "country": ctry[i], "segment": s["name"], "group": s.get("group", s["name"]),
            "english": s.get("english", "B1-B2"), "budget_usd_month": rng.randint(*s.get("budget", [0, 30])),
            "behaviour": b["name"], "behaviour_how": b.get("how", ""),
            "objection": rng.choice(cust["objections"]), "habit": rng.choice(cust.get("habits") or [""]),
        })
    return cards


def init(d, customer, pages, n, seed):
    cust = rj(customer)
    for k in ("business", "segments", "behaviours", "objections", "question"):
        if not cust.get(k):
            raise SwarmError("customer.json needs '%s'" % k)
    seed = seed or random.SystemRandom().randrange(1, 10 ** 6)
    parts = []
    for p in pages:
        if not os.path.exists(p):
            raise SwarmError("no such page: %s" % p)
        parts.append("----- PAGE: %s -----\n%s" % (os.path.basename(p), page_text(p)))
    if cust.get("extra_seed"):
        parts.append("----- ALSO TRUE -----\n" + cust["extra_seed"])
    os.makedirs(d, exist_ok=True)
    with open(P(d, "seed.md"), "w", encoding="utf-8") as f:
        f.write("\n\n".join(parts) + "\n")
    cards = deal(cust, n, seed)
    wj(P(d, "swarm.json"), {"n": n, "seed": seed, "customer": cust, "pages": pages})
    wj(P(d, "personas.json"), cards)
    return cards


def state(d):
    try:
        return rj(P(d, "swarm.json")), rj(P(d, "personas.json"))
    except FileNotFoundError:
        raise SwarmError("no swarm in %s: run init first" % d)


WHO = """=== WHO YOU ARE ===
{name}, a {age}-year-old {sex} from {country}. {segment}. English level about {english}.
You could spend about ${budget_usd_month} a month on learning, at most.
How you decide: {behaviour}. {behaviour_how}
Your day: {habit}
A doubt you often have about offers like this: "{objection}"
=== END ==="""

R1 = """You are one person in a simulation of how real people in the Gulf react to an English-learning website.
The owner will fix what you dislike and grow what you like, so a polite answer is useless: most people do not pay
for most things. Stay in character. Think and write the way this person would (Gulf Arabic or simple English).

""" + WHO + """

Read the website text in {seed} (the real pages, as a visitor sees them). Then answer the question below as {name},
in a normal week, with your own money and habits. Use only what the pages say; do not invent facts about the site.

Question from the owner: {question}

Create the file {out} with your file-writing tool containing ONLY this JSON (no markdown fence):
{{
  "id": "{id}",
  "first_impression": "one or two sentences, in your own voice",
  "likes": [up to 3 tags from {likes}],
  "like_quote": "the thing you liked most, in your words",
  "dislikes": [up to 3 tags from {dislikes}],
  "dislike_quote": "the thing that bothers you most, in your words",
  "would_use_free": true or false,
  "buy_intent": 0 to 10 (how likely you are to pay for any pack in the next month),
  "would_buy": "the exact pack name you would buy, or empty",
  "fix_that_wins_me": "the one change that would make you pay",
  "group_post": "what you would write about this site in your WhatsApp group ({group}), one to three lines, or empty if you would not mention it"
}}
"""

R2 = """You are {name} again, in the same simulation. Yesterday you visited the website (text in {seed}) and wrote this:

{mine}

""" + WHO + """

Today your WhatsApp group ({group}) talked about it. These are the messages, as written:

{feed}

React the way {name} really would: people change their mind when a friend they trust tried something, and not
otherwise. You may reply in the group, or stay quiet.

Create the file {out} with your file-writing tool containing ONLY this JSON (no markdown fence):
{{
  "id": "{id}",
  "reply": "your message in the group, or empty",
  "influenced_by": "the id of the message that moved you most (for example S004), or empty",
  "buy_intent_now": 0 to 10,
  "changed_because": "what changed your mind, or why it did not change",
  "final_decision": one of "buy", "use_free_only", "ignore",
  "pack": "the pack you would buy, or empty",
  "new_dislikes": [tags from {dislikes} that the chat made you notice, or empty]
}}
"""


def ok(path, pid, keys):
    try:
        a = rj(path)
    except (FileNotFoundError, json.JSONDecodeError, UnicodeDecodeError):
        return None
    if not isinstance(a, dict) or a.get("id") != pid or not keys <= set(a):
        return None
    return a


K1 = {"id", "likes", "dislikes", "buy_intent", "group_post"}
K2 = {"id", "buy_intent_now", "final_decision"}


def feed_for(d, card, cards):
    msgs = []
    for c in cards:
        if c["group"] != card["group"] or c["id"] == card["id"]:
            continue
        a = ok(P(d, "r1", c["id"] + ".json"), c["id"], K1)
        if a and a.get("group_post"):
            msgs.append("[%s] %s (%s, %d): %s" % (c["id"], c["name"], c["segment"], c["age"], a["group_post"].strip()))
    random.Random(card["id"]).shuffle(msgs)
    return "\n".join(msgs[:12]) or "(nobody in the group mentioned it)"


def prompts(d, rnd, wave=10):
    st, cards = state(d)
    seed = os.path.abspath(P(d, "seed.md"))
    todo = []
    for c in cards:
        out = os.path.abspath(P(d, "r%d" % rnd, c["id"] + ".json"))
        if ok(out, c["id"], K1 if rnd == 1 else K2):
            continue
        f = dict(c, seed=seed, out=out, question=st["customer"]["question"], likes=json.dumps(LIKES),
                 dislikes=json.dumps(DISLIKES))
        if rnd == 1:
            text = R1.format(**f)
        else:
            mine = ok(P(d, "r1", c["id"] + ".json"), c["id"], K1)
            if not mine:
                raise SwarmError("%s has no round-1 answer; finish round 1 first" % c["id"])
            text = R2.format(mine=json.dumps(mine, ensure_ascii=False, indent=1), feed=feed_for(d, c, cards), **f)
        bp = os.path.abspath(P(d, "briefs%d" % rnd, c["id"] + ".md"))
        os.makedirs(os.path.dirname(bp), exist_ok=True)
        with open(bp, "w", encoding="utf-8") as fh:
            fh.write(text)
        os.makedirs(os.path.dirname(out), exist_ok=True)
        todo.append((c["id"], bp))
    print("%d briefs for round %d in %d waves of up to %d." % (len(todo), rnd, -(-len(todo) // wave), wave))
    for i in range(0, len(todo), wave):
        print("wave %d: %s" % (i // wave + 1, " ".join("%s=%s" % t for t in todo[i:i + wave])))


def check(d, rnd):
    _, cards = state(d)
    bad = [c["id"] for c in cards if not ok(P(d, "r%d" % rnd, c["id"] + ".json"), c["id"], K1 if rnd == 1 else K2)]
    print("round %d: %d of %d answered%s" % (rnd, len(cards) - len(bad), len(cards), (", missing: " + " ".join(bad)) if bad else ""))
    return bad


def report(d):
    st, cards = state(d)
    by = {c["id"]: c for c in cards}
    r1 = {c["id"]: ok(P(d, "r1", c["id"] + ".json"), c["id"], K1) for c in cards}
    r2 = {c["id"]: ok(P(d, "r2", c["id"] + ".json"), c["id"], K2) for c in cards}
    r1 = {k: v for k, v in r1.items() if v}
    r2 = {k: v for k, v in r2.items() if v}
    n = len(r1)
    likes = collections.Counter(t for a in r1.values() for t in set(a.get("likes") or []) if t in LIKES)
    dis = collections.Counter(t for a in r1.values() for t in set(a.get("dislikes") or []) if t in DISLIKES)
    newdis = collections.Counter(t for a in r2.values() for t in set(a.get("new_dislikes") or []) if t in DISLIKES)
    final = collections.Counter(a.get("final_decision") for a in r2.values())
    infl = collections.Counter(a.get("influenced_by") for a in r2.values() if a.get("influenced_by") in by)

    def mean(xs):
        xs = [float(x) for x in xs if isinstance(x, (int, float))]
        return round(sum(xs) / len(xs), 2) if xs else None

    seg = collections.defaultdict(lambda: [0, 0, [], []])
    for k, a in r2.items():
        s = seg[by[k]["segment"]]
        s[0] += 1
        s[1] += a.get("final_decision") == "buy"
        s[2].append(r1.get(k, {}).get("buy_intent"))
        s[3].append(a.get("buy_intent_now"))
    quotes = lambda tag, field, key: [("%s (%s)" % (r1[k][field], k)) for k in r1 if tag in (r1[k].get(key) or []) and r1[k].get(field)][:2]
    res = {
        "n_round1": n, "n_round2": len(r2), "seed": st["seed"],
        "intent_before": mean([a.get("buy_intent") for a in r1.values()]),
        "intent_after": mean([a.get("buy_intent_now") for a in r2.values()]),
        "final": dict(final), "likes": likes.most_common(), "dislikes": dis.most_common(),
        "new_dislikes_from_chat": newdis.most_common(),
        "influencers": [(k, by[k]["name"], by[k]["segment"], v) for k, v in infl.most_common(5)],
        "segments": {k: {"people": v[0], "buy": v[1], "intent_before": mean(v[2]), "intent_after": mean(v[3])} for k, v in seg.items()},
        "fixes": [a.get("fix_that_wins_me") for a in r1.values() if a.get("fix_that_wins_me")],
        "packs": collections.Counter((a.get("pack") or "").strip() for a in r2.values() if a.get("final_decision") == "buy").most_common(),
    }
    wj(P(d, "report.json"), res)
    L = ["# Swarm simulation report", "",
         "%d people read the real pages (round 1); %d then talked in their WhatsApp groups (round 2). Seed %s." % (n, len(r2), st["seed"]),
         "Simulated people, not customers: use this to find what to fix and what to grow, then check with real buyers.", "",
         "Final: **%d buy · %d use free only · %d ignore**. Average intent to pay: %s → %s out of 10 after the group chat." % (
             final.get("buy", 0), final.get("use_free_only", 0), final.get("ignore", 0), res["intent_before"], res["intent_after"]), "",
         "## What they like (people who picked the tag)", "", "| tag | people | in their words |", "| --- | ---: | --- |"]
    L += ["| %s | %d | %s |" % (t, c, " · ".join(quotes(t, "like_quote", "likes")).replace("|", "/")) for t, c in likes.most_common()]
    L += ["", "## What bothers them", "", "| tag | people | in their words |", "| --- | ---: | --- |"]
    L += ["| %s | %d | %s |" % (t, c, " · ".join(quotes(t, "dislike_quote", "dislikes")).replace("|", "/")) for t, c in dis.most_common()]
    L += ["", "New doubts raised by the group chat: " + (", ".join("%s %d" % x for x in newdis.most_common()) or "none"), "",
          "## By segment", "", "| segment | people | buy | intent before → after |", "| --- | ---: | ---: | --- |"]
    L += ["| %s | %d | %d | %s → %s |" % (k, v["people"], v["buy"], v["intent_before"], v["intent_after"]) for k, v in res["segments"].items()]
    L += ["", "## Who moved the group", ""] + ["- %s %s (%s): moved %d people" % x for x in res["influencers"]]
    L += ["", "## Packs they would buy", ""] + ["- %s: %d" % (p or "(not named)", c) for p, c in res["packs"]]
    L += ["", "## The change that would win them (as written)", ""] + ["- " + f for f in res["fixes"][:25]]
    with open(P(d, "report.md"), "w", encoding="utf-8") as fh:
        fh.write("\n".join(L) + "\n")
    print("wrote %s" % P(d, "report.md"))


def main(argv=None):
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    ap.add_argument("--dir", default="swarm")
    sp = ap.add_subparsers(dest="cmd", required=True)
    i = sp.add_parser("init")
    i.add_argument("--customer", required=True)
    i.add_argument("--pages", nargs="+", required=True)
    i.add_argument("--n", type=int, default=30)
    i.add_argument("--seed", type=int)
    for c in ("prompts", "check"):
        x = sp.add_parser(c)
        x.add_argument("round", type=int, choices=[1, 2])
    sp.add_parser("report")
    sp.add_parser("status")
    a = ap.parse_args(argv)
    try:
        if a.cmd == "init":
            cards = init(a.dir, a.customer, a.pages, a.n, a.seed)
            print("dealt %d people into %s. Next: swarm.py prompts 1" % (len(cards), a.dir))
        elif a.cmd == "prompts":
            prompts(a.dir, a.round)
        elif a.cmd == "check":
            check(a.dir, a.round)
        elif a.cmd == "report":
            report(a.dir)
        else:
            check(a.dir, 1)
            check(a.dir, 2)
    except SwarmError as e:
        print("error: %s" % e, file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
