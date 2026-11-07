// Lists the free web lessons from data/library.json on the home page.
// It follows the level chosen in the store filters, so picking "C1" shows C1 lessons too.
(function () {
  const grid = document.getElementById("freeGrid");
  if (!grid) return;
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  let lessons = [];
  // Lessons this learner marked as done (set by app.js on lesson pages; this browser only).
  function doneSlugs() {
    try { const v = JSON.parse(localStorage.getItem("mel-done-lessons") || "[]"); return Array.isArray(v) ? v : []; }
    catch (e) { return []; }
  }
  const slugOf = (p) => (/([a-z0-9-]+)\.html$/.exec(p) || [])[1];

  function currentLevel() {
    const on = document.querySelector("#levelFilters .chip.on");
    return on ? on.dataset.v : "All";
  }

  // Round-robin over a key (level or skill) so a short list still shows variety.
  function sample(all, max, key) {
    const groups = {};
    all.forEach((l) => (groups[l[key]] = groups[l[key]] || []).push(l));
    const queues = Object.keys(groups).sort().map((k) => groups[k].slice());
    const out = [];
    while (out.length < max && queues.some((q) => q.length)) {
      queues.forEach((q) => { if (q.length && out.length < max) out.push(q.shift()); });
    }
    return out;
  }

  // Two lessons per level, rotating the skills so the eight cards cover all six skills.
  function mixed(lessons) {
    const skills = [...new Set(lessons.map((l) => l.skill))].sort();
    const levels = [...new Set(lessons.map((l) => l.level))].sort();
    const out = [];
    levels.forEach((lv, i) => {
      [0, 1].forEach((k) => {
        const want = skills[(2 * i + k) % skills.length];
        const hit = lessons.find((l) => l.level === lv && l.skill === want) || lessons.find((l) => l.level === lv && !out.includes(l));
        if (hit && !out.includes(hit)) out.push(hit);
      });
    });
    return out;
  }

  // Unfinished lessons of one level, or all of them if fewer than three are left.
  function levelPool(lv, fresh) {
    const left = fresh.filter((l) => l.level === lv);
    return left.length >= 3 ? left : lessons.filter((l) => l.level === lv);
  }

  function render() {
    const lv = currentLevel();
    const done = doneSlugs();
    // Show unfinished lessons first; fall back to all if the learner has finished most of them.
    const fresh = lessons.filter((l) => !done.includes(slugOf(l.path)));
    const pool = fresh.length >= 8 ? fresh : lessons;
    const progress = document.getElementById("freeProgress");
    if (progress) {
      const n = lessons.filter((l) => done.includes(slugOf(l.path))).length;
      progress.hidden = !n;
      if (n) progress.innerHTML = `You have finished <strong>${n}</strong> of ${lessons.length} free lessons. <a href="library.html?done=hide">Continue with the rest &rarr;</a>`;
    }
    // Keep the home page short: 8 lessons across levels, or 6 across skills for one level.
    // The full, filtered list lives on library.html.
    const list = lv === "All" ? mixed(pool) : sample(levelPool(lv, fresh), 6, "skill");
    grid.innerHTML = list.map((l) => `<a class="free-card" href="${esc(l.path)}">
      <div class="meta"><span class="tag">${esc(l.level)}</span><span class="tag cat">${esc(l.skill)}</span></div>
      <h3>${esc(l.title)}</h3>
      <p>${esc(l.description)}</p>
    </a>`).join("");
    const all = document.querySelector("#free .see-all");
    if (all) {
      const n = lv === "All" ? lessons.length : lessons.filter((l) => l.level === lv).length;
      all.href = lv === "All" ? "library.html" : "library.html?level=" + encodeURIComponent(lv);
      all.textContent = "See all " + n + (lv === "All" ? "" : " " + lv) + " free lessons \u2192";
    }
  }

  fetch("data/library.json")
    .then((r) => {
      if (!r.ok) throw new Error("library.json: HTTP " + r.status);
      return r.json();
    })
    .then((data) => {
      lessons = (data.resources || []).filter((r) => r.type === "lesson");
      if (!lessons.length) throw new Error("library.json: no lessons");
      render();
      // Re-render whenever the store's level filters or level cards change the level.
      const filters = document.getElementById("levelFilters");
      if (filters) new MutationObserver(render).observe(filters, { childList: true });
    })
    .catch((err) => {
      // Never leave a blank area: say what happened and point to the full library, and log why.
      console.error("Free lessons section failed to load:", err);
      grid.innerHTML = `<p class="free-error" role="status">The free lessons could not load just now. <a href="library.html">Open the full library &rarr;</a> or refresh the page.</p>`;
    });
})();
