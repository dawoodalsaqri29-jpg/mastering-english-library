// Builds the classroom PDFs: node scripts/build-pdfs.js                 (all 72; rewrites pdfs/ and data/pdf-manifest.json)
//                         node scripts/build-pdfs.js lessons/b2-x.html   (only the lessons named)
// Each lesson PDF = worksheet pages with no answers, then one "Teacher page" with the answers
// (and the transcript, for Listening). Same file names as before, so no link changes.
// The site checker compares the WORDS each PDF would print with data/pdf-manifest.json and fails
// until you rebuild, so run this in the same pull request as any change to a lesson.
const fs = require("fs");
const path = require("path");
const http = require("http");
const crypto = require("crypto");

const ROOT = path.resolve(__dirname, "..");
const SITE = "dawoodalsaqri29-jpg.github.io/mastering-english-library/";
const MANIFEST = path.join(ROOT, "data/pdf-manifest.json");
const sha = (...parts) => { const h = crypto.createHash("sha256"); for (const p of parts) h.update(String(p) + "\0"); return h.digest("hex").slice(0, 16); };

// The words printed on every page. Change them and all 72 PDFs must be rebuilt (the checker says so).
// The usage line ("Free to copy for your own classes") is added once the owner approves the wording.
const FOOTER = (level) => `Mastering English Library · ${level} · ${SITE}`;

// Runs inside the lesson page: moves every answer (and the Listening transcript) to a final teacher page.
// Returns true if something is wrong (an answer label left, or no answers found).
function TRANSFORM() {
  const article = document.querySelector("main article");
  const key = document.createElement("section");
  key.className = "teacher-key";
  key.innerHTML = "<h2>Teacher page: answers</h2><p>Print the pages before this one for students.</p>";
  document.querySelectorAll("main article details").forEach((d) => {
    const label = d.querySelector("summary").textContent.replace(/^Show /, "");
    const box = document.createElement("div");
    box.innerHTML = "<h3>" + label.charAt(0).toUpperCase() + label.slice(1) + "</h3>";
    [...d.childNodes].filter((c) => c.nodeName !== "SUMMARY").forEach((c) => box.appendChild(c));
    key.appendChild(box);
    d.remove();
  });
  article.appendChild(key);
  const s = document.createElement("style");
  s.textContent = ".teacher-key{break-before:page}.teacher-key>p{color:#444;font-size:10pt}";
  document.head.appendChild(s);
  return /Show answers/i.test(document.body.innerText) || !key.querySelector("div");
}

// Loads a lesson as it prints, applies TRANSFORM, and returns what goes on paper.
// main.innerText leaves out everything the print CSS hides (nav, footer, pager, crumbs, buttons).
async function printed(page, url) {
  await page.emulateMedia({ media: "print" });
  await page.goto(url, { waitUntil: "networkidle" });
  const problem = await page.evaluate(TRANSFORM);
  const text = await page.evaluate(() => document.querySelector("main").innerText.replace(/\s+/g, " ").trim());
  return { problem, text };
}

// What the PDFs say: the printed words of the lesson, its level, the footer and the transform.
// A change to any of these blocks the merge. Colours, spacing and fonts are only "look" (see LOOK).
const WORDS = sha(FOOTER("{level}"), TRANSFORM.toString());
const entry = (text, level) => ({ pdf: sha(WORDS, level, text), text: sha(text) });
// The look of the PDFs: CSS and fonts. A change here gives a reminder, not a red check,
// because it moves spacing and colour but cannot change a word (a hidden word changes the text above).
const LOOK = () => { const fdir = path.join(ROOT, "assets/fonts");
  return sha(...["assets/style.css", "assets/fonts/fonts.css", ...fs.readdirSync(fdir).filter((f) => f.endsWith(".woff2")).sort().map((f) => "assets/fonts/" + f)]
    .map((f) => fs.readFileSync(path.join(ROOT, f)).toString("base64"))); };
const lessonOf = (pdfPath) => pdfPath.replace(/^pdfs\/[a-z0-9]+\//, "lessons/").replace(/\.pdf$/, ".html");
module.exports = { printed, entry, LOOK, lessonOf, MANIFEST };

function serve() {
  const types = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json",
    ".svg": "image/svg+xml", ".png": "image/png", ".woff2": "font/woff2" };
  const server = http.createServer((req, res) => {
    const file = path.join(ROOT, decodeURIComponent(new URL(req.url, "http://x").pathname));
    if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); return res.end(); }
    res.writeHead(200, { "Content-Type": types[path.extname(file)] || "application/octet-stream" });
    fs.createReadStream(file).pipe(res);
  });
  return new Promise((r) => server.listen(0, "127.0.0.1", () => r(server)));
}

if (require.main === module) (async () => {
  const { chromium } = require("playwright"); // loaded here so the site checker can require this file
  const only = process.argv.slice(2).map((p) => p.replace(/^\.\//, ""));
  const lib = JSON.parse(fs.readFileSync(path.join(ROOT, "data/library.json"), "utf8"));
  const manifest = fs.existsSync(MANIFEST) ? JSON.parse(fs.readFileSync(MANIFEST, "utf8")) : {};
  const jobs = lib.resources.filter((r) => r.type === "pdf").map((r) => ({ r, html: lessonOf(r.path) }))
    .filter((j) => !only.length || only.includes(j.html));
  const server = await serve();
  const base = "http://127.0.0.1:" + server.address().port + "/";
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const bad = [];
  for (const { r, html } of jobs) {
    const { problem, text } = await printed(page, base + html);
    if (problem) bad.push(html);
    await page.pdf({
      path: path.join(ROOT, r.path), format: "A4",
      margin: { top: "16mm", bottom: "18mm", left: "16mm", right: "16mm" },
      displayHeaderFooter: true, headerTemplate: "<span></span>",
      footerTemplate: `<div style="font-size:7.5pt;color:#555;width:100%;text-align:center;font-family:sans-serif">
        ${FOOTER(r.level)} · page <span class="pageNumber"></span> of <span class="totalPages"></span></div>`,
    });
    manifest[html] = entry(text, r.level);
  }
  if (!only.length) manifest._look = LOOK(); // the look is only "up to date" when every PDF was rebuilt
  await browser.close();
  server.close();
  const sorted = Object.fromEntries(Object.keys(manifest).sort().map((k) => [k, manifest[k]]));
  fs.writeFileSync(MANIFEST, JSON.stringify(sorted, null, 1) + "\n");
  console.log(jobs.length + " PDFs built; manifest updated" + (bad.length ? ". PROBLEM, no answer page or 'Show answers' left: " + bad.join(", ") : ""));
  process.exit(bad.length ? 1 : 0);
})();
