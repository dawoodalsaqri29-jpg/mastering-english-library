// Lists the free web lessons from data/library.json on the home page.
// It follows the level chosen in the store filters, so picking "C1" shows C1 lessons too.
(function () {
  const grid = document.getElementById("freeGrid");
  if (!grid) return;
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  let lessons = [];

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
  function mixed() {
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

  function render() {
    const lv = currentLevel();
    // Keep the home page short: 8 lessons across levels, or 6 across skills for one level.
    // The full, filtered list lives on library.html.
    const list = lv === "All" ? mixed() : sample(lessons.filter((l) => l.level === lv), 6, "skill");
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
    .then((r) => r.json())
    .then((data) => {
      lessons = (data.resources || []).filter((r) => r.type === "lesson");
      render();
      // Re-render whenever the store's level filters or level cards change the level.
      new MutationObserver(render).observe(document.getElementById("levelFilters"), { childList: true });
    })
    .catch(() => { document.getElementById("free").hidden = true; });
})();
