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
  } catch (e) {
    record("Browser checks", false, "stopped early: " + e.message.split("\n")[0]);
  } finally {
    await browser.close();
    server.close();
  }
}

(async () => {
  const pages = checkFiles();
  checkSyntax();
  await checkBrowser(pages);
  for (const r of results) console.log((r.ok ? "PASS " : "FAIL ") + r.name + (r.detail ? " — " + r.detail : ""));
  const failed = results.filter((r) => !r.ok).length;
  console.log(failed ? `\n${failed} check(s) failed.` : "\nAll checks passed.");
  process.exit(failed ? 1 : 0);
})();
