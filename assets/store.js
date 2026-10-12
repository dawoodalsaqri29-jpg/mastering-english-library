(function () {
  const books = window.BOOKS || [];
  const site = window.SITE || {};
  const LEVELS = ["B1", "B2", "C1", "C2"];
  const ORDER = ["B1", "B2", "C1", "C2"];
  const palettes = [
    ["#1f1f5c", "#3b3b98"], ["#0b5d5f", "#0f8b8d"], ["#3a2a6e", "#6a4cc0"],
    ["#5a2a1f", "#a0522d"], ["#1d3b5c", "#2f6fa3"], ["#2b4a2b", "#4c8c4a"],
  ];

  const state = { level: "All", cat: "All", q: "" };

  // Expand "B1–C1" into ["B1","B2","C1"] so range titles match each level
  function levelsOf(str) {
    const found = (str.match(/[ABC][12]/g) || []);
    if (found.length === 2) {
      const a = ORDER.indexOf(found[0]), b = ORDER.indexOf(found[1]);
      if (a > -1 && b > -1) return ORDER.slice(Math.min(a, b), Math.max(a, b) + 1);
    }
    return found;
  }

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function cover(b, i) {
    const [c1, c2] = palettes[i % palettes.length];
    const img = b.cover ? `<img src="${esc(b.cover)}" alt="" loading="lazy">` : "";
    return `<div class="cover" style="background:linear-gradient(155deg,${c1},${c2})">${img}
      ${b.cover ? "" : `<div class="c-top">Mastering English</div>
      <div><div class="c-bar"></div><div class="c-title">${esc(b.title)}</div><div class="c-sub">${esc(b.subtitle)}</div></div>`}
    </div>`;
  }

  function card(b, i) {
    // Titles without a real link show a disabled "Coming soon" label instead of a button that jumps to the top.
    const hasLink = b.link && b.link !== "#";
    const action = hasLink
      ? `<a class="btn btn-small" href="${esc(b.link)}" target="_blank" rel="noopener">Get PDF</a>`
      : `<span class="btn btn-small btn-soon" aria-disabled="true">Coming soon</span>`;
    return `<article class="book">
      ${cover(b, i)}
      <div class="book-body">
        <div class="meta"><span class="tag">${esc(b.level)}</span><span class="tag cat">${esc(b.category)}</span></div>
        <h3>${esc(b.title)}</h3>
        <p>${esc(b.description)}</p>
        <div class="buy"><span class="price">${esc(b.price)}</span>${action}</div>
      </div>
    </article>`;
  }

  function chips(el, values, key) {
    el.innerHTML = ["All", ...values].map((v) =>
      `<button class="chip${state[key] === v ? " on" : ""}" data-v="${esc(v)}">${esc(v)}</button>`).join("");
    el.onclick = (e) => {
      const v = e.target.closest(".chip")?.dataset.v;
      if (!v) return;
      state[key] = v; render();
    };
  }

  function render() {
    const cats = [...new Set(books.map((b) => b.category))];
    chips(document.getElementById("levelFilters"), LEVELS, "level");
    chips(document.getElementById("catFilters"), cats, "cat");
    const q = state.q.toLowerCase();
    const list = books
      .map((b, i) => ({ b, i }))
      .filter(({ b }) => state.level === "All" || levelsOf(b.level).includes(state.level))
      .filter(({ b }) => state.cat === "All" || b.category === state.cat)
      .filter(({ b }) => !q || `${b.title} ${b.subtitle} ${b.description}`.toLowerCase().includes(q));
    document.getElementById("grid").innerHTML = list.map(({ b, i }) => card(b, i)).join("");
    document.getElementById("empty").hidden = list.length > 0;
  }

  document.getElementById("search").addEventListener("input", (e) => { state.q = e.target.value; render(); });
  document.querySelectorAll(".level-card").forEach((btn) =>
    btn.addEventListener("click", () => {
      state.level = btn.dataset.level; render();
      document.getElementById("library").scrollIntoView({ behavior: "smooth" });
    }));

  document.getElementById("statCount").textContent = books.length;
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("author").textContent = site.author || site.name || "";
  if (site.storeUrl && site.storeUrl !== "#") {
    const s = document.getElementById("storeBtn");
    s.href = site.storeUrl; s.target = "_blank"; s.rel = "noopener"; s.textContent = "Visit store";
  }
  if (site.contactEmail) {
    document.getElementById("contact").innerHTML = `<a href="mailto:${esc(site.contactEmail)}">${esc(site.contactEmail)}</a>`;
  }
  render();
})();
