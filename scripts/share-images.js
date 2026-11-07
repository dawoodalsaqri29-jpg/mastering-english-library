// Renders the 1200x630 social share cards in assets/share/ (site.png, b1.png ... c2.png).
// Run from the repo root when the brand or the lesson counts change: node scripts/share-images.js
// Needs Playwright (preinstalled in the cloud sessions this repo is worked on).
const { chromium } = require("playwright");
const fs = require("fs");
const lib = JSON.parse(fs.readFileSync("data/library.json", "utf8"));
const lessons = lib.resources.filter((r) => r.type === "lesson");
const count = (lv) => lessons.filter((r) => r.level === lv).length;
const LEVELS = {
  b1: ["B1", "Intermediate", "#0b6e70"], b2: ["B2", "Upper intermediate", "#3b3b98"],
  c1: ["C1", "Advanced", "#6a4cc0"], c2: ["C2", "Proficiency", "#a0522d"],
};
const page = (badge, colour, title, sub, foot) => `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&family=Inter:wght@500;600&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0}
body{width:1200px;height:630px;background:#f7f6f2;font-family:Inter,system-ui,sans-serif;color:#16163a;position:relative;overflow:hidden}
.bar{position:absolute;inset:0 auto 0 0;width:22px;background:${colour}}
.wrap{position:absolute;left:96px;right:96px;top:84px;bottom:72px;display:flex;flex-direction:column}
.brand{display:flex;align-items:center;gap:16px;font-weight:600;font-size:30px}
.mark{width:58px;height:58px;border-radius:14px;background:#3b3b98;color:#f7f6f2;display:grid;place-items:center;font-size:22px;letter-spacing:.04em}
.badge{align-self:flex-start;margin-top:60px;background:${colour};color:#fff;font-weight:600;font-size:30px;padding:8px 22px;border-radius:999px}
h1{font-family:Fraunces,Georgia,serif;font-size:76px;line-height:1.05;margin-top:22px;letter-spacing:-.01em}
p{font-size:32px;color:#4a4a6a;margin-top:18px}
.foot{margin-top:auto;font-size:26px;color:#4a4a6a;display:flex;gap:28px}
.foot b{color:${colour}}
.dots{position:absolute;right:96px;top:84px;display:flex;gap:12px}
.dots i{width:22px;height:22px;border-radius:50%}
</style></head><body><div class="bar"></div>
<div class="dots"><i style="background:#0b6e70"></i><i style="background:#3b3b98"></i><i style="background:#6a4cc0"></i><i style="background:#a0522d"></i></div>
<div class="wrap"><div class="brand"><span class="mark">ME</span>Mastering English Library</div>
${badge ? `<span class="badge">${badge}</span>` : ""}<h1>${title}</h1><p>${sub}</p><div class="foot">${foot}</div></div></body></html>`;

(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  const shot = async (html, out) => {
    await p.setContent(html, { waitUntil: "networkidle" });
    await p.evaluate(() => document.fonts.ready);
    await p.screenshot({ path: out, type: "png" });
    console.log(out, fs.statSync(out).size, "bytes");
  };
  await shot(page("", "#3b3b98", "Free English lessons,<br>B1 to C2",
    "Grammar, vocabulary, reading, writing, listening and speaking.",
    `<span><b>${lessons.length}</b> free lessons</span><span>Printable PDFs</span><span>2-minute level check</span>`), "assets/share/site.png");
  for (const [k, [lv, name, colour]] of Object.entries(LEVELS)) {
    await shot(page(lv + " · " + name, colour, `Free ${lv} English lessons`,
      "Clear explanations, practice questions and answers.",
      `<span><b>${count(lv)}</b> lessons</span><span>6 skills</span><span>Free PDF with every lesson</span>`), `assets/share/${k}.png`);
  }
  await b.close();
})();
