#!/usr/bin/env python3
"""Open Generative AI engine (MuAPI) from the command line.

  muapi.py models [--kind t2v] [--search kling]   list models (id, endpoint, kind)
  muapi.py show MODEL_ID                           inputs of one model
  muapi.py upload FILE                             upload an image/video/audio -> hosted URL
  muapi.py run MODEL_ID --json '{"prompt": "..."}' [--out DIR] [--timeout 900]
                                                   submit, poll until done, download outputs

Auth: header x-api-key. In this cloud session the proxy injects the saved key for
api.muapi.ai, so MUAPI_KEY may be any placeholder. Elsewhere set MUAPI_KEY.
Same flow as the app (src/lib/muapi.js): POST /api/v1/{endpoint} -> request_id ->
GET /api/v1/predictions/{id}/result until status is completed/succeeded.
"""
import argparse, json, os, sys, time, urllib.request, urllib.error, mimetypes, uuid

BASE = os.environ.get("MUAPI_BASE", "https://api.muapi.ai")
KEY = os.environ.get("MUAPI_KEY", "proxy-injected")
HERE = os.path.dirname(os.path.abspath(__file__))
CAT = json.load(open(os.path.join(HERE, "..", "references", "models.json")))
OK = {"completed", "succeeded", "success", "done"}
BAD = {"failed", "error", "cancelled", "canceled"}

def find(mid):
    for kind, ms in CAT.items():
        for m in ms:
            if m["id"] == mid:
                return kind, m
    sys.exit(f"unknown model id: {mid} (try: muapi.py models --search ...)")

def req(method, path, body=None, headers=None):
    h = {"x-api-key": KEY, **(headers or {})}
    data = body
    if isinstance(body, (dict, list)):
        data = json.dumps(body).encode(); h["Content-Type"] = "application/json"
    r = urllib.request.Request(BASE + path, data=data, method=method, headers=h)
    try:
        with urllib.request.urlopen(r, timeout=120) as resp:
            return json.loads(resp.read() or b"{}")
    except urllib.error.HTTPError as e:
        sys.exit(f"HTTP {e.code} on {path}: {e.read()[:400].decode(errors='replace')}")

def cmd_models(a):
    for kind, ms in CAT.items():
        if a.kind and kind != a.kind and not kind.startswith(a.kind):
            continue
        for m in ms:
            if a.search and a.search.lower() not in (m["id"] + m["name"]).lower():
                continue
            print(f"{kind:20} {m['id']:45} {m['name']}")

def cmd_show(a):
    kind, m = find(a.model)
    print(json.dumps({"kind": kind, **m}, indent=1, ensure_ascii=False))

def cmd_upload(a):
    b = "----" + uuid.uuid4().hex
    fn = os.path.basename(a.file); ct = mimetypes.guess_type(fn)[0] or "application/octet-stream"
    body = (f"--{b}\r\nContent-Disposition: form-data; name=\"file\"; filename=\"{fn}\"\r\nContent-Type: {ct}\r\n\r\n").encode() \
        + open(a.file, "rb").read() + f"\r\n--{b}--\r\n".encode()
    d = req("POST", "/api/v1/upload_file", body, {"Content-Type": f"multipart/form-data; boundary={b}"})
    print(d.get("url") or d.get("file_url") or (d.get("data") or {}).get("url") or json.dumps(d))

def cmd_run(a):
    kind, m = find(a.model)
    payload = json.loads(a.json)
    d = req("POST", f"/api/v1/{m['endpoint']}", payload)
    rid = d.get("request_id") or d.get("id")
    print("submitted", m["id"], "request_id:", rid, file=sys.stderr)
    t0 = time.time(); res = d
    while rid:
        res = req("GET", f"/api/v1/predictions/{rid}/result")
        st = str(res.get("status", "")).lower()
        if st in OK: break
        if st in BAD: sys.exit(f"generation failed: {json.dumps(res)[:500]}")
        if time.time() - t0 > a.timeout: sys.exit(f"timed out after {a.timeout}s; request_id {rid} (poll again later)")
        time.sleep(3)
    outs = res.get("outputs") or ([res.get("url")] if res.get("url") else [])
    os.makedirs(a.out, exist_ok=True)
    for i, u in enumerate(outs):
        ext = os.path.splitext(u.split("?")[0])[1] or ".bin"
        p = os.path.join(a.out, f"{m['id']}-{rid or 'x'}-{i}{ext}")
        urllib.request.urlretrieve(u, p); print(p)
    print(json.dumps({"request_id": rid, "outputs": outs}), file=sys.stderr)

ap = argparse.ArgumentParser(); sp = ap.add_subparsers(dest="cmd", required=True)
p = sp.add_parser("models"); p.add_argument("--kind"); p.add_argument("--search"); p.set_defaults(f=cmd_models)
p = sp.add_parser("show"); p.add_argument("model"); p.set_defaults(f=cmd_show)
p = sp.add_parser("upload"); p.add_argument("file"); p.set_defaults(f=cmd_upload)
p = sp.add_parser("run"); p.add_argument("model"); p.add_argument("--json", required=True)
p.add_argument("--out", default="out"); p.add_argument("--timeout", type=int, default=900); p.set_defaults(f=cmd_run)
a = ap.parse_args(); a.f(a)
