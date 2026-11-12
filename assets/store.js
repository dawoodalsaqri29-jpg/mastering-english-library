(function () {
  const books = window.BOOKS || [];
  const site = window.SITE || {};
  const LEVELS = ["B1", "B2", "C1", "C2"];
  const ORDER = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const PALETTES = 6; // cover gradients .cover.pal-0 … .pal-5 live in store.css

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

  // Buy and store buttons may only go to the owner's Wix store over https: no user@host, no other site.
  // A product that moves to another host is added here and to ALLOWED_HOSTS in scripts/site-safety.js together.
  const STORE_HOSTS = ["www.masteringenglishlibrary.com"];
  const safeUrl = (u) => {
    try {
      const x = new URL(String(u || ""));
      return x.protocol === "https:" && !x.username && !x.password && STORE_HOSTS.includes(x.host) ? x.href : "";
    } catch (e) { return ""; }
  };
  // Every store link carries UTM tags so the Wix store's analytics shows which sales came from this site.
  // A link that already has utm_source keeps its own tags.
  const withUtm = (u) => {
    if (!u) return "";
    const x = new URL(u);
    if (!x.searchParams.has("utm_source")) {
      x.searchParams.set("utm_source", "library-site");
      x.searchParams.set("utm_medium", "referral");
      x.searchParams.set("utm_campaign", "shop");
    }
    return x.href;
  };
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function cover(b, i) {
    const pal = i % PALETTES;
    const img = b.cover ? `<img src="${esc(b.cover)}" alt="" loading="lazy">` : "";
    return `<div class="cover pal-${pal}">${img}
      ${b.cover ? "" : `<div class="c-top">Mastering English</div>
      <div><div class="c-bar"></div><div class="c-title">${esc(b.title)}</div><div class="c-sub">${esc(b.subtitle)}</div></div>`}
    </div>`;
  }

  function card(b, i) {
    // Titles without a real link show a disabled "Coming soon" label instead of a button that jumps to the top.
    const link = withUtm(safeUrl(b.link));
    const action = link
      ? `<a class="btn btn-small" href="${esc(link)}" target="_blank" rel="noopener">Get PDF</a>`
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
    const empty = document.getElementById("empty");
    // If catalog.js did not load, say so instead of "No titles match".
    if (!books.length) empty.textContent = "The PDF catalogue could not load. Please reload the page in a moment.";
    empty.hidden = list.length > 0;
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
  const store = withUtm(safeUrl(site.storeUrl));
  if (store) {
    const s = document.getElementById("storeBtn");
    s.href = store; s.target = "_blank"; s.rel = "noopener"; s.textContent = "Visit store";
  }
  // Contact in the footer: only a real email address and a WhatsApp number in international digits are shown.
  const contact = [];
  if (/^[^@\s"<>]+@[^@\s"<>]+\.[a-z]{2,}$/i.test(site.contactEmail || "") && !/^your@/i.test(site.contactEmail)) {
    contact.push(`<a href="mailto:${esc(site.contactEmail)}">${esc(site.contactEmail)}</a>`);
  }
  if (/^[1-9][0-9]{7,14}$/.test(String(site.whatsapp || ""))) {
    const text = encodeURIComponent("Hello, I am a teacher / institute and I have a question about Mastering English Library.");
    contact.push(`<a href="https://wa.me/${site.whatsapp}?text=${text}" target="_blank" rel="noopener">Teachers and institutes: WhatsApp +${esc(site.whatsapp)}</a>`);
  }
  if (contact.length) document.getElementById("contact").innerHTML = contact.join(" · ");
  render();
})();
