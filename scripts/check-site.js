// Site health check used by the hourly guard (and by hand): node scripts/check-site.js
// Exit code 0 = every check passed; 1 = at least one check failed or could not run.
// Needs Playwright (preinstalled in the cloud sessions this repo is worked on).
const fs = require("fs");
const path = require("path");
const http = require("http");
const { execFileSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const results = [];
const record = (name, ok, detail) => results.push({ name, ok, detail: detail || "" });

// 1. Local links and catalogue paths exist.
function checkFiles() {
  const pages = ["index.html", "library.html", "levels.html", "404.html",
    ...fs.readdirSync(path.join(ROOT, "lessons")).filter((f) => f.endsWith(".html")).map((f) => "lessons/" + f)];
  const missing = [];
  for (const page of pages) {
    const html = fs.readFileSync(path.join(ROOT, page), "utf8");
    for (const m of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      let u = m[1];
      if (/^(https?:|mailto:|#|data:)/.test(u)) continue;
      u = u.split("#")[0].split("?")[0];
      if (!u) continue;
      // 404.html uses site-absolute paths (/mastering-english-library/...).
      const target = u.startsWith("/mastering-english-library/")
        ? path.join(ROOT, u.replace("/mastering-english-library/", ""))
        : path.join(ROOT, path.dirname(page), u);
      const file = fs.existsSync(target) && fs.statSync(target).isDirectory() ? path.join(target, "index.html") : target;
      if (!fs.existsSync(file)) missing.push(page + " -> " + m[1]);
    }
  }
  const lib = JSON.parse(fs.readFileSync(path.join(ROOT, "data/library.json"), "utf8"));
  for (const r of lib.resources) if (!fs.existsSync(path.join(ROOT, r.path))) missing.push("library.json -> " + r.path);
  record("Local links and catalogue paths", !missing.length, missing.length ? missing.slice(0, 10).join("; ") : pages.length + " pages, " + lib.resources.length + " catalogue entries");
  return pages.filter((p) => p !== "404.html");
}

// 2. JavaScript syntax.
function checkSyntax() {
  const files = [...fs.readdirSync(path.join(ROOT, "assets")).filter((f) => f.endsWith(".js")).map((f) => "assets/" + f),
    ...fs.readdirSync(path.join(ROOT, "scripts")).filter((f) => f.endsWith(".js")).map((f) => "scripts/" + f)];
  const bad = [];
  for (const f of files) {
    try { execFileSync(process.execPath, ["--check", path.join(ROOT, f)], { stdio: "pipe" }); }
    catch (e) { bad.push(f + ": " + String(e.stderr).split("\n").find((l) => /Error/.test(l))); }
  }
  record("JavaScript syntax", !bad.length, bad.length ? bad.join("; ") : files.length + " files");
}

// A tiny static server so the check needs nothing else running.
function serve() {
  const types = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json",
    ".svg": "image/svg+xml", ".png": "image/png", ".woff2": "font/woff2", ".pdf": "application/pdf", ".xml": "application/xml", ".txt": "text/plain" };
  const server = http.createServer((req, res) => {
    const p = decodeURIComponent(new URL(req.url, "http://x").pathname);
    let file = path.join(ROOT, p);
    if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end(); }
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, "index.html");
    if (!fs.existsSync(file)) { res.writeHead(404); return res.end("not found"); }
    res.writeHead(200, { "Content-Type": types[path.extname(file)] || "application/octet-stream" });
    fs.createReadStream(file).pipe(res);
  });
  return new Promise((resolve) => server.listen(0, "127.0.0.1", () => resolve(server)));
}

async function checkBrowser(pages) {
  let chromium;
  try { ({ chromium } = require("playwright")); }
  catch (e) { record("Browser checks", false, "Playwright is not available, so the browser checks could not run"); return; }
  const server = await serve();
  const base = "http://127.0.0.1:" + server.address().port + "/";
  const browser = await chromium.launch();
  try {
    // 3. Every page loads with no script errors and no failed local requests.
    const problems = [];
    const page = await browser.newPage();
    let current = "";
    page.on("pageerror", (e) => problems.push(current + ": " + e.message));
    page.on("console", (m) => { if (m.type() === "error" && !/net::ERR|Failed to load resource/.test(m.text())) problems.push(current + ": " + m.text()); });
    page.on("requestfailed", (r) => { if (r.url().startsWith(base)) problems.push(current + ": failed " + r.url().replace(base, "")); });
    page.on("response", (r) => { if (r.url().startsWith(base) && r.status() >= 400) problems.push(current + ": " + r.status() + " " + r.url().replace(base, "")); });
    for (const p of pages) { current = p; await page.goto(base + p, { waitUntil: "networkidle" }); }
    record("Pages load without errors", !problems.length, problems.length ? problems.slice(0, 10).join("; ") : pages.length + " pages");

    // 4. Library filters.
    await page.goto(base + "library.html?level=C1&skill=Speaking");
    await page.waitForSelector("#f-count:not(:empty)", { timeout: 10000 });
    const filtered = await page.$eval("#f-count", (e) => e.textContent);
    const cards = await page.$$eval("[data-catalog] li", (l) => l.length);
    record("Library ?level=C1&skill=Speaking", cards > 0 && /^\d+ of \d+/.test(filtered), filtered + ", " + cards + " cards");
    await page.goto(base + "index.html");
    await page.goto(base + "library.html#B2");
    await page.waitForSelector("#f-count:not(:empty)", { timeout: 10000 });
    const lv = await page.$eval("#f-level", (e) => e.value);
    record("Library #B2 preselects B2", lv === "B2", "level = " + (lv || "(none)"));

    // 5. Level check scores a full set of answers.
    await page.goto(base + "levels.html#check");
    const groups = await page.$$eval("#placement fieldset", (f) => f.length);
    for (let i = 0; i < groups; i++) await page.check(`#placement input[name="q${i}"][value="0"]`);
    await page.click('#placement button[type="submit"]');
    const result = await page.$eval("#placement .result", (e) => e.textContent.trim());
    record("Level check scores answers", groups === 12 && /You scored \d+ out of 12/.test(result), groups + " questions; " + result.slice(0, 60));

    // 6. Every lesson PDF prints the words its lesson prints today (see scripts/build-pdfs.js).
    await checkPdfs(browser, base);
  } catch (e) {
    record("Browser checks", false, "stopped early: " + e.message.split("\n")[0]);
  } finally {
    await browser.close();
    server.close();
  }
}

// The words each PDF would print now, against data/pdf-manifest.json written when the PDFs were built.
// A changed word blocks (red); a changed colour, spacing or font only reminds (stays green).
async function checkPdfs(browser, base) {
  const { printed, entry, LOOK, lessonOf, MANIFEST } = require("./build-pdfs.js");
  const manifest = fs.existsSync(MANIFEST) ? JSON.parse(fs.readFileSync(MANIFEST, "utf8")) : {};
  const lib = JSON.parse(fs.readFileSync(path.join(ROOT, "data/library.json"), "utf8"));
  const all = lib.resources.filter((r) => r.type === "pdf");
  const page = await browser.newPage();
  const stale = [];
  for (const r of all) {
    const html = lessonOf(r.path);
    const { text } = await printed(page, base + html);
    if (!manifest[html] || manifest[html].pdf !== entry(text, r.level).pdf) stale.push(html);
  }
  await page.close();
  const cmd = stale.length === all.length ? "node scripts/build-pdfs.js" : "node scripts/build-pdfs.js " + stale.slice(0, 5).join(" ") + (stale.length > 5 ? " …" : "");
  const look = manifest._look === LOOK() ? "" : "; reminder: CSS or fonts changed since the last full build, so run node scripts/build-pdfs.js when convenient";
  record("Lesson PDFs match their lessons", !stale.length, stale.length
    ? stale.length + " PDF(s) out of date, run: " + cmd
    : all.length + " PDFs up to date" + look);
}

// OWASP A03 (CI/CD). Every workflow declares permissions (top level, or on every job); no ${{ }} inside run: or
// script: (it is pasted into the shell or the JS before they run; pass values through env: instead); package
// installs skip lifecycle scripts; npx runs only packages already installed (--no), never a fresh download.
function workflowHygiene(f, text) {
  const bad = [];
  const lines = text.split("\n");
  const indent = (l) => l.match(/^ */)[0].length;
  if (!/^permissions:/m.test(text)) {
    const j = lines.findIndex((l) => /^jobs:\s*$/.test(l));
    const jobs = [];
    let ind = -1;
    for (let i = j + 1; j >= 0 && i < lines.length; i++) {
      const l = lines[i];
      if (l.trim() === "" || /^\s*#/.test(l)) continue;
      if (indent(l) === 0) break;
      if (ind < 0) ind = indent(l);
      if (indent(l) === ind && /^\s*[\w-]+:\s*$/.test(l)) jobs.push({ name: l.trim().slice(0, -1), perms: false, child: -1 });
      else if (jobs.length && indent(l) > ind) {
        const job = jobs[jobs.length - 1];
        if (job.child < 0) job.child = indent(l);
        if (indent(l) === job.child && /^\s*permissions:/.test(l)) job.perms = true;
      }
    }
    const missing = jobs.filter((x) => !x.perms).map((x) => x.name);
    if (!jobs.length || missing.length)
      bad.push(f + ": no permissions: at the top or on job(s) " + (missing.join(", ") || "(no jobs found)"));
  }
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^(\s*(?:-\s+)?)(run|script):\s*(.*)$/);
    if (!m) continue;
    const keyCol = m[1].length;
    const body = [m[3]];
    const isBlock = /^[|>][-+]?\s*(#.*)?$/.test(m[3]);
    for (let j = i + 1; isBlock && j < lines.length; j++) {
      const l = lines[j];
      if (l.trim() === "") { body.push(""); continue; }
      if (indent(l) <= keyCol) break;
      body.push(l);
    }
    const script = body.join("\n");
    const at = f + ":" + (i + 1) + ": ";
    if (/\$\{\{/.test(script)) bad.push(at + "${{ }} inside " + m[2] + ": (pass it through env: instead)");
    if (m[2] !== "run") continue;
    const installs = script.match(/\b(?:npm|pnpm|yarn)\s+(?:install|i|ci|add)\b[^\n;&|]*|\byarn(?=\s*(?:$|[;&|\n]))/g) || [];
    for (const cmd of installs)
      if (!/--ignore-scripts(?:=true)?(?![=\w-])/.test(cmd)) bad.push(at + "install without --ignore-scripts: " + cmd.trim());
    for (const cmd of script.match(/\bnpx\s+[^\n;&|]*/g) || [])
      if (!/^npx\s+(?:--no|--no-install)(?![=\w-])/.test(cmd)) bad.push(at + "npx without --no (may download and run a package): " + cmd.trim());
  }
  return bad;
}

// Every workflow passes the hygiene rules above, and pins each action to a full commit SHA.
function checkWorkflows() {
  const dir = path.join(ROOT, ".github/workflows");
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => /\.ya?ml$/.test(f)) : [];
  const bad = [];
  for (const f of files) {
    const text = fs.readFileSync(path.join(dir, f), "utf8");
    if (/pull_request_target/.test(text)) bad.push(f + ": uses pull_request_target");
    for (const m of text.matchAll(/uses:\s*([^\s#]+)/g)) if (!/@[0-9a-f]{40}$/.test(m[1]) && !m[1].startsWith("./")) bad.push(f + ": action not pinned to a commit SHA: " + m[1]);
    bad.push(...workflowHygiene(f, text));
  }
  record("GitHub workflows are safe", !bad.length && files.length > 0, bad.length ? bad.slice(0, 6).join("; ") : files.length + " workflow(s) checked");
}

// 7. SEO tags, sitemap and robots (static, no browser needed).
const SITE = "https://dawoodalsaqri29-jpg.github.io/mastering-english-library/";
function checkSeo() {
  const pages = ["index.html", "library.html", "levels.html",
    ...fs.readdirSync(path.join(ROOT, "lessons")).filter((f) => f.endsWith(".html")).map((f) => "lessons/" + f)];
  const seo = [], titles = new Map(), descs = new Map();
  const one = (html, re) => { const m = html.match(re); return m ? m[1] : null; };
  for (const p of pages) {
    const html = fs.readFileSync(path.join(ROOT, p), "utf8");
    const url = p === "index.html" ? SITE : SITE + p;
    const title = one(html, /<title>([^<]+)<\/title>/i);
    const desc = one(html, /<meta name="description" content="([^"]+)"/i);
    const canon = one(html, /<link rel="canonical" href="([^"]+)"/i);
    const ogUrl = one(html, /<meta property="og:url" content="([^"]+)"/i);
    if (!title) seo.push(p + ": no <title>"); else titles.set(title, [...(titles.get(title) || []), p]);
    if (!desc) seo.push(p + ": no meta description"); else descs.set(desc, [...(descs.get(desc) || []), p]);
    if (canon !== url) seo.push(p + ": canonical is " + canon + ", expected " + url);
    if (ogUrl !== canon) seo.push(p + ": og:url differs from canonical");
    if (!/<meta property="og:image" content="https:/i.test(html)) seo.push(p + ": no og:image");
    if ((html.match(/<h1[\s>]/gi) || []).length !== 1) seo.push(p + ": not exactly one <h1>");
    if (/<meta name="robots" content="[^"]*noindex/i.test(html)) seo.push(p + ": noindex on a page that should be found");
    for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)) {
      try { JSON.parse(m[1]); } catch (e) { seo.push(p + ": JSON-LD does not parse (" + e.message.slice(0, 40) + ")"); }
    }
  }
  for (const [t, ps] of titles) if (ps.length > 1) seo.push("same title on " + ps.join(", "));
  for (const [d, ps] of descs) if (ps.length > 1) seo.push("same description on " + ps.join(", "));
  const sitemap = fs.readFileSync(path.join(ROOT, "sitemap.xml"), "utf8");
  const inMap = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
  const want = new Set(pages.map((p) => (p === "index.html" ? SITE : SITE + p)));
  for (const u of want) if (!inMap.has(u)) seo.push("sitemap.xml is missing " + u.replace(SITE, ""));
  for (const u of inMap) if (!want.has(u)) seo.push("sitemap.xml lists a page that does not exist: " + u.replace(SITE, ""));
  const robots = fs.existsSync(path.join(ROOT, "robots.txt")) ? fs.readFileSync(path.join(ROOT, "robots.txt"), "utf8") : "";
  if (!robots.includes("Sitemap: " + SITE + "sitemap.xml")) seo.push("robots.txt has no Sitemap line");
  if (/^Disallow:\s*\/\s*$/m.test(robots)) seo.push("robots.txt blocks the whole site");
  record("SEO tags, sitemap and robots", !seo.length, seo.length ? seo.slice(0, 10).join("; ") : pages.length + " pages, " + inMap.size + " sitemap URLs");
}

// 8. Site safety: every link, script, host and PDF action is one we expect (scripts/site-safety.js).
function checkSafetyRules() {
  let r;
  try { r = require("./site-safety.js").checkSafety(ROOT); }
  catch (e) { record("Site safety rules", false, "could not run: " + e.message.split("\n")[0]); return; }
  record("Site safety rules", !r.length, r.length ? r.slice(0, 8).join("; ") : "links, scripts, hosts and PDF actions all expected");
}

(async () => {
  const pages = checkFiles();
  checkSyntax();
  checkWorkflows();
  checkSeo();
  checkSafetyRules();
  await checkBrowser(pages);
  for (const r of results) console.log((r.ok ? "PASS " : "FAIL ") + r.name + (r.detail ? " — " + r.detail : ""));
  const failed = results.filter((r) => !r.ok).length;
  console.log(failed ? `\n${failed} check(s) failed.` : "\nAll checks passed.");
  process.exit(failed ? 1 : 0);
})();
