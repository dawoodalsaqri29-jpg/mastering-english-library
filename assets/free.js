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

  function sample(all, max) {
    const byLevel = {};
    all.forEach((l) => (byLevel[l.level] = byLevel[l.level] || []).push(l));
    const queues = Object.keys(byLevel).sort().map((k) => byLevel[k].slice());
    const out = [];
    while (out.length < max && queues.some((q) => q.length)) {
      queues.forEach((q) => { if (q.length && out.length < max) out.push(q.shift()); });
    }
    return out;
  }

  function render() {
    const lv = currentLevel();
    // "All" shows a short sample (two per level, round-robin) so the home page stays short;
    // the full list lives on library.html. A chosen level shows all of its lessons.
    const list = lv === "All" ? sample(lessons, 8) : lessons.filter((l) => l.level === lv);
    grid.innerHTML = list.map((l) => `<a class="free-card" href="${esc(l.path)}">
      <div class="meta"><span class="tag">${esc(l.level)}</span><span class="tag cat">${esc(l.skill)}</span></div>
      <h3>${esc(l.title)}</h3>
      <p>${esc(l.description)}</p>
    </a>`).join("");
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
