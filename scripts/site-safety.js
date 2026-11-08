// scripts/site-safety.js: site-safety rules, used by check-site.js and, on every PR, run once more in the version from main.
// Static rules read the files the way a browser does (entities, JS escapes, quotes inside tags). check-site.js adds a
// second reading in Chromium itself (checkDomLinks). Usage: node site-safety.js <repo root>
const fs = require("fs"), path = require("path"), zlib = require("zlib");
const CSP = "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' https://static.wixstatic.com; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests";
// PR-B (CSP on every page) sets this to true.
const REQUIRE_CSP = true;
// Every script file the pages may load, and every outside host. A new one fails until it is added here on purpose,
// in its own PR that says why; /cso reviews it.
const ALLOWED_SCRIPTS = ["assets/app.js", "assets/catalog.js", "assets/free.js", "assets/listen.js", "assets/placement.js", "assets/store.js", "assets/teachers.js"];
const ALLOWED_HOSTS = ["dawoodalsaqri29-jpg.github.io", "www.masteringenglishlibrary.com", "static.wixstatic.com", "schema.org", "wa.me"];
const SITE_HOST = "dawoodalsaqri29-jpg.github.io";
// Named HTML entities that can spell a URL. Any other named entity inside a URL attribute fails (fail closed).
const NAMED = { amp: "&", sol: "/", bsol: "\\", colon: ":", period: ".", commat: "@", tab: "", newline: "", lpar: "(", rpar: ")",
  quest: "?", num: "#", percnt: "%", equals: "=", lowbar: "_", hyphen: "-", dash: "-", plus: "+", excl: "!", semi: ";", comma: ",",
  quot: '"', apos: "'", lt: "<", gt: ">", nbsp: " " };
const BAD = "\u0001";
// One pass, like the browser: "&amp;sol;" is "&sol;" (text), not "/".
const unentity = (v) => v.replace(/&(#x[0-9a-f]+|#\d+|[a-z][a-z0-9]*);?/gi, (all, e) => {
  if (e[0] === "#") { const n = e[1] === "x" || e[1] === "X" ? parseInt(e.slice(2), 16) : +e.slice(1); return n > 0 && n < 0x110000 ? String.fromCodePoint(n) : BAD; }
  const k = e.toLowerCase(); return k in NAMED ? NAMED[k] : BAD; });
// One pass of JS/JSON escapes: \u002f \u{2f} \x2f are "/", "\/" is "/", "\\" (a real backslash) counts as "/" like in a browser URL.
const unescapeJs = (t) => t.replace(/\\(u\{[0-9a-f]+\}|u[0-9a-f]{4}|x[0-9a-f]{2}|[\s\S])/gi, (all, e) => {
  if (/^[ux]/i.test(e) && e.length > 1) { const c = String.fromCodePoint(parseInt(e.replace(/^u\{|^[ux]|\}$/gi, ""), 16)); return c === "\\" ? "/" : c; }
  return e === "\\" ? "/" : e === "/" ? "/" : /[nrtbfv0]/.test(e) ? " " : e; });
// A JS regex literal: a "/" where an expression starts (after ( , = : [ ! & | ? { } ; or "return"), up to the closing "/".
const REGEX_LITERAL = /(^|[=(,:\[!&|?{};]|\breturn)(\s*)\/(?![*\/])(?:\\.|\[(?:\\.|[^\]\\\n])*\]|[^\/\\\n\[])+\/[dgimsuyv]*/gm;
// Active content in a PDF: scripts, auto-run actions, launch, embedded files, forms. Checked in raw and inflated streams,
// with PDF name escapes (#4A) decoded.
const PDF_BAD = /\/(JavaScript|JS|Launch|OpenAction|AA|EmbeddedFiles?|SubmitForm|ImportData|RichMedia|XFA|GoToR|GoToE)(?![A-Za-z0-9+#._-])/g;
// Returns the text to scan, or null if a stream cannot be read (fail closed: an unreadable stream could hide anything).
function pdfText(buf) {
  const raw = buf.toString("latin1"); let out = raw; const re = /stream\r?\n/g; let m;
  while ((m = re.exec(raw))) {
    const s = m.index + m[0].length, e = raw.indexOf("endstream", s); if (e < 0) return null;
    const dict = raw.slice(Math.max(0, raw.lastIndexOf(" obj", m.index)), m.index);
    const filters = (dict.match(/\/Filter\s*(\[[^\]]*\]|\/[A-Za-z0-9]+)/) || ["", ""])[1].match(/[A-Za-z0-9]+/g) || [];
    if (filters.some((x) => !["FlateDecode", "DCTDecode", "JPXDecode", "CCITTFaxDecode"].includes(x))) return null;
    if (filters[0] === "FlateDecode") {
      let ok = false;
      for (const f of [zlib.inflateSync, zlib.inflateRawSync]) { try { out += "\n" + f(buf.subarray(s, e)).toString("latin1"); ok = true; break; } catch (x) {} }
      if (!ok) return null;
    }
    re.lastIndex = e + 9;
  }
  return out.replace(/#([0-9a-f]{2})/gi, (_, h) => String.fromCharCode(parseInt(h, 16)));
}
function checkSafety(ROOT) {
  const safety = [];
  const ls = (d, ext) => fs.readdirSync(path.join(ROOT, d)).filter((f) => f.endsWith(ext)).map((f) => d + "/" + f);
  const files = ["index.html", "library.html", "levels.html", "404.html", ...["teachers.html", "level-ar.html"].filter((f) => fs.existsSync(path.join(ROOT, f))), ...ls("lessons", ".html"), ...ls("assets", ".js"), "data/library.json"];
  const clean = (v) => unentity(v).replace(/[\u0000-\u0020\u007f-\u00a0]+/g, (s) => (s.includes(BAD) ? BAD : "")).toLowerCase();
  const attr = (tag, name) => { const m = tag.match(new RegExp("[\\s\"'/]" + name + "\\s*=\\s*(\"[^\"]*\"|'[^']*'|[^\\s>]+)", "i")); return m ? m[1].replace(/^["']|["']$/g, "") : null; };
  // Attribute names outside quoted values only, so title=">" or title="onclick=" cannot hide or fake one.
  const names = (tag) => tag.replace(/"[^"]*"|'[^']*'/g, " ").match(/[\s"'/][^\s"'>\/=]+(?=\s*=|\s|\/?>)/g) || [];
  const BASE = "https://" + SITE_HOST + "/mastering-english-library/lessons/x.html";
  const resolve = (u) => { try { return new URL(u.replace(/\\/g, "/"), BASE); } catch (e) { return null; } };
  const outside = (u) => { const r = resolve(u); return !r || r.host !== SITE_HOST || /^[a-z][a-z0-9+.-]*:/.test(u) && !/^https?:/.test(u); };
  for (const f of files) {
    const text = fs.readFileSync(path.join(ROOT, f), "utf8");
    const html = f.endsWith(".html");
    // Every URL-ish host anywhere in the file, with or without a scheme. HTML: entities decoded, every backslash is "/".
    // JS and JSON: escapes decoded ("\/" "\u002f" "\x2f" are "/"). Regex literals like /\/\// then read "////" and
    // have no host, so they do not fail. The whole authority is captured, so "allowed.host@evil.example" is seen in full.
    // In JS, regex literals (/\/index\.html$/) are not strings and are dropped first, so they cannot read as "//host".
    const code = f.endsWith(".js") ? text.replace(REGEX_LITERAL, "$1 0") : text;
    const flat = html ? unentity(text).replace(/\\/g, "/") : unescapeJs(code);
    for (const m of flat.matchAll(/(?:[a-z][a-z0-9+.-]*:)?\/\/+([^\s"'`<>/?#()\\]+)/gi)) {
      const auth = m[1].toLowerCase();
      if (!/[a-z0-9-]\.[a-z]/.test(auth)) continue; // not a host (e.g. "//" in a comment or regex)
      if (auth.includes("@")) { safety.push(f + ": user@host in a URL (sends the visitor to the part after @): " + auth); continue; }
      const host = auth.replace(/:\d*$/, "").replace(/[.,;]+$/, "");
      if (!ALLOWED_HOSTS.includes(host)) safety.push(f + ": unknown host " + host);
    }
    // "http:evil.example" (scheme, no slashes) also leaves the site when the page is on https.
    for (const m of flat.matchAll(/\b(https?|ftp|wss?):(?!\/\/)(?=[a-z0-9])/gi)) safety.push(f + ": " + m[1] + ": URL without // (may leave the site)");
    if (f === "data/library.json") {
      // Library entries are data, so they may only name a lesson or PDF inside the site (app.js link() enforces the same at runtime).
      for (const r of JSON.parse(text).resources || []) for (const k of ["path", "pdf"]) if (k in r && !/^(lessons|pdfs\/(b1|b2|c1|c2))\/[a-z0-9-]+\.(html|pdf)$/.test(r[k])) safety.push(f + ": " + k + " is not a site-relative lesson or PDF: " + String(r[k]).slice(0, 60));
    }
    // Every tag (also tags written inside JS strings). Quoted values may contain ">", so they are skipped as a whole.
    // In HTML a quoted value may contain ">", so quoted values are skipped as a whole. Inside JS the quotes are the
    // script's own, so the simple form is used there, plus a whole-file rule for on...= written into a JS string.
    if (!html) for (const m of text.matchAll(/[\s"'/]on[a-z]+\s*=\s*\\?["']/gi)) safety.push(f + ": inline event handler written in a string: " + m[0].trim());
    for (const m of text.matchAll(html ? /<\/?([a-z][a-z0-9-]*)\b((?:"[^"]*"|'[^']*'|[^'">])*)>/gi : /<\/?([a-z][a-z0-9-]*)\b[^>]*>/gi)) {
      const tag = m[0], name = m[1].toLowerCase();
      if (html ? names(tag).some((n) => /^[\s"'/]on[a-z]/i.test(n)) : /[\s"'/]on[a-z]+\s*=/i.test(tag)) safety.push(f + ": inline event handler in <" + name + ">");
      if (["iframe", "frame", "object", "embed", "base", "form", "applet", "portal"].includes(name)) safety.push(f + ": <" + name + "> is not allowed");
      if (name === "meta" && /http-equiv\s*=\s*["']?refresh/i.test(tag)) safety.push(f + ": meta refresh redirect");
      for (const a of ["href", "src", "action", "formaction", "xlink:href", "data", "poster", "background", "srcset", "ping"]) {
        const v = attr(tag, a.replace(":", "\\:")); if (v === null) continue;
        const u = clean(v);
        if (u.includes(BAD)) { safety.push(f + ": <" + name + " " + a + "> uses an HTML entity that is not allowed in a URL: " + v.slice(0, 60)); continue; }
        if (/^(javascript|vbscript|data|file|blob):/.test(u) && !(name === "img" && /^data:image\/(png|gif|webp|jpeg);/.test(u))) safety.push(f + ": " + u.split(":")[0] + ": URL in <" + name + ">");
        if (name === "script" && a === "src" && outside(u)) safety.push(f + ": script loaded from another site: " + v);
        if (name === "script" && a === "src" && !outside(u) && !ALLOWED_SCRIPTS.includes(u.split(/[?#]/)[0].replace(/^(\.\.\/|\.\/|\/mastering-english-library\/)+/, "")))
          safety.push(f + ": script file not on the reviewed list: " + v);
        if (/^(mailto|tel):/.test(u)) continue;
        for (const one of a === "srcset" ? u.split(",").map((s) => s.trim().split(/\s+/)[0]) : [u]) {
          const r = resolve(one);
          if (!r) safety.push(f + ": <" + name + " " + a + "> is not a valid URL: " + v);
          else if (r.username || r.password) safety.push(f + ": <" + name + " " + a + "> has user@host (goes to " + r.host + "): " + v);
          else if (!ALLOWED_HOSTS.includes(r.hostname)) safety.push(f + ": <" + name + " " + a + "> points to unknown host " + r.hostname);
        }
      }
      if (name === "a" && /target\s*=\s*["']?_blank/i.test(tag) && !/noopener/i.test(attr(tag, "rel") || "")) safety.push(f + ": target=_blank without rel=noopener");
    }
    if (!html) continue;
    // Inline scripts: only <script type="application/ld+json"> (exact type) whose body is valid JSON.
    for (const m of text.matchAll(/<script\b((?:"[^"]*"|'[^']*'|[^'">])*)>([\s\S]*?)<\/script\s*>/gi)) {
      const type = (attr("<x " + m[1], "type") || "").trim().toLowerCase();
      if (attr("<x " + m[1], "src") !== null) { if (m[2].trim()) safety.push(f + ": script with src and a body"); continue; }
      if (type !== "application/ld+json") { safety.push(f + ": inline script (type " + (type || "none") + ")"); continue; }
      try { JSON.parse(m[2]); } catch (e) { safety.push(f + ": ld+json block is not valid JSON"); }
    }
    if ((text.match(/<script\b/gi) || []).length !== (text.match(/<\/script\s*>/gi) || []).length) safety.push(f + ": unbalanced <script> tags");
    if (REQUIRE_CSP) {
      const csps = [...text.matchAll(/<meta\b[^>]*http-equiv\s*=\s*["']?content-security-policy[^>]*>/gi)];
      const head = text.split(/<\/head\s*>/i)[0];
      if (csps.length !== 1) safety.push(f + ": needs exactly one CSP meta, found " + csps.length);
      else if (attr(csps[0][0], "content") !== CSP) safety.push(f + ": CSP differs from the approved policy");
      else if (!head.includes(csps[0][0]) || head.indexOf(csps[0][0]) > head.search(/<script\b|<link\b/i) && head.search(/<script\b|<link\b/i) >= 0) safety.push(f + ": CSP meta must be in <head> before any <script> or <link>");
    }
  }
  // PDFs: no active content, and every link inside goes to an allowed host over https.
  for (const lv of fs.readdirSync(path.join(ROOT, "pdfs"))) for (const p of fs.readdirSync(path.join(ROOT, "pdfs", lv)).filter((x) => x.endsWith(".pdf"))) {
    const f = "pdfs/" + lv + "/" + p, t = pdfText(fs.readFileSync(path.join(ROOT, f)));
    if (t === null) { safety.push(f + ": PDF has a stream the check cannot read (rebuild it with scripts/build-pdfs.js)"); continue; }
    for (const m of t.matchAll(PDF_BAD)) safety.push(f + ": PDF has active content /" + m[1]);
    for (const m of t.matchAll(/\/URI\s*\(((?:\\.|[^\\)])*)\)/g)) {
      let r = null; try { r = new URL(m[1].replace(/\\(.)/g, "$1")); } catch (e) {}
      if (!r || r.protocol !== "https:" || r.username || r.password || !ALLOWED_HOSTS.includes(r.hostname)) safety.push(f + ": PDF link to " + m[1].slice(0, 60));
    }
    // Every link action (/S /URI) must carry a plain-string /URI (...) that was checked above; hex or indirect ones fail.
    if ((t.match(/\/S\s*\/URI\b/g) || []).length > (t.match(/\/URI\s*\(/g) || []).length || /\/URI\s*<(?!<)|\/URI\s+\d+\s+\d+\s+R/.test(t)) safety.push(f + ": PDF link written in a form the check cannot read");
  }
  return [...new Set(safety)];
}
module.exports = { checkSafety, CSP, ALLOWED_HOSTS };
if (require.main === module) {
  const r = checkSafety(path.resolve(process.argv[2] || path.join(__dirname, "..")));
  console.log(r.length ? "FAIL Site safety rules — " + r.slice(0, 20).join("; ") : "PASS Site safety rules");
  process.exit(r.length ? 1 : 0);
}
