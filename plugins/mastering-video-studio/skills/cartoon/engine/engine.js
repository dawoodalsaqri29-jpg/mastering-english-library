/* Scene built-in icon set — 24×24 stroke icons (stroke = currentColor). */
(function () {
  window.SceneIcons = {
    check: '<path d="M4.5 12.5l5 5L19.5 7"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    "arrow-right": '<path d="M4 12h15M13 6l6 6-6 6"/>',
    "arrow-up": '<path d="M12 20V5M6 11l6-6 6 6"/>',
    "arrow-down": '<path d="M12 4v15M6 13l6 6 6-6"/>',
    "trending-up": '<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
    "trending-down": '<path d="M3 7l6 6 4-4 8 8"/><path d="M15 17h6v-6"/>',
    star: '<path d="M12 3.2l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17.2l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
    heart: '<path d="M12 20s-7.5-4.6-9-9.4C1.9 7 4.2 4 7.4 4c2 0 3.6 1.1 4.6 2.7C13 5.1 14.6 4 16.6 4c3.2 0 5.5 3 4.4 6.6C19.5 15.4 12 20 12 20z"/>',
    bolt: '<path d="M13 2.5L4.5 13.5H11l-1 8 8.5-11H12z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
    calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.6 3.9 5.6 3.9 9s-1.3 6.4-3.9 9c-2.6-2.6-3.9-5.6-3.9-9S9.4 5.6 12 3z"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c.8-4.2 4-6.5 8-6.5s7.2 2.3 8 6.5"/>',
    users: '<circle cx="9" cy="8.5" r="3.5"/><path d="M2.5 20c.6-3.6 3.2-5.6 6.5-5.6s5.9 2 6.5 5.6"/><path d="M15.5 5.2a3.4 3.4 0 010 6.6M18 14.6c2 .7 3.2 2.6 3.5 5.4"/>',
    chart: '<path d="M4 20V4"/><path d="M4 20h16"/><rect x="7" y="11" width="3" height="6" rx=".6"/><rect x="12" y="7" width="3" height="10" rx=".6"/><rect x="17" y="13" width="3" height="4" rx=".6"/>',
    pie: '<path d="M12 3a9 9 0 109 9h-9z"/><path d="M15 3.5A9 9 0 0120.5 9H15z"/>',
    dollar: '<path d="M12 2.5v19"/><path d="M17 6.5c-1-1.3-2.8-2-5-2-2.9 0-4.8 1.4-4.8 3.6 0 5 10 2.6 10 7.8 0 2.3-2.1 3.6-5.2 3.6-2.4 0-4.3-.8-5.4-2.3"/>',
    lightbulb: '<path d="M9 18h6M10 21.5h4"/><path d="M12 2.5a6.5 6.5 0 00-3.8 11.8c.6.5.8 1.1.8 1.8V16h6v-.1c0-.7.3-1.3.8-1.8A6.5 6.5 0 0012 2.5z"/>',
    rocket: '<path d="M14.5 4.5c2.5-1.5 5-1.8 6.5-1.5.3 1.5 0 4-1.5 6.5L13 16l-5-5z"/><path d="M8 11l-4.5.5L6 8.5h4M13 16l-.5 4.5 3-2.5v-4"/><circle cx="16" cy="8" r="1.5"/><path d="M6.5 15.5c-2 .5-3 2.5-3 5 2.5 0 4.5-1 5-3"/>',
    shield: '<path d="M12 2.8l8 3v6.1c0 4.8-3.3 8.3-8 9.6-4.7-1.3-8-4.8-8-9.6V5.8z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
    lock: '<rect x="4.5" y="10.5" width="15" height="10.5" rx="2.5"/><path d="M8 10.5V7.5a4 4 0 018 0v3"/><path d="M12 15v2"/>',
    cpu: '<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9.5" y="9.5" width="5" height="5" rx=".8"/><path d="M9 2.5V6M15 2.5V6M9 18v3.5M15 18v3.5M2.5 9H6M2.5 15H6M18 9h3.5M18 15h3.5"/>',
    code: '<path d="M8.5 7L3.5 12l5 5M15.5 7l5 5-5 5M13.5 4.5l-3 15"/>',
    database: '<ellipse cx="12" cy="5.5" rx="8" ry="3"/><path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
    cloud: '<path d="M7 19a4.5 4.5 0 01-.6-9A6 6 0 0118 8.5a5.3 5.3 0 01-.5 10.5z"/>',
    leaf: '<path d="M5 19C4 11 9 4.5 20 4c.5 10.5-5.5 16-13 15.5z"/><path d="M5 19c2.5-4.5 6-7.5 10-9.5"/>',
    flame: '<path d="M12 21.5c-4 0-7-2.8-7-6.6 0-3.4 2.4-5.4 3.7-8 .6 1.6 1.4 2.6 2.6 3.1C11.6 6.6 13 4 15.5 2.5c-.4 3.4 3.5 6 3.5 11.4 0 4.3-3 7.6-7 7.6z"/><path d="M12 21.5c-1.7 0-3-1.2-3-3 0-2 1.6-3 3-5 1.4 2 3 3 3 5 0 1.8-1.3 3-3 3z"/>',
    droplet: '<path d="M12 2.8s-6.5 7.1-6.5 11.7a6.5 6.5 0 0013 0C18.5 9.9 12 2.8 12 2.8z"/>',
    sun: '<circle cx="12" cy="12" r="4.2"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/>',
    moon: '<path d="M20 14.5A8.5 8.5 0 019.5 4 8.5 8.5 0 1020 14.5z"/>',
    book: '<path d="M4 4.5A1.5 1.5 0 015.5 3H20v15.5H5.5A1.5 1.5 0 004 20z"/><path d="M4 20a1.5 1.5 0 001.5 1.5H20v-3"/><path d="M8.5 7.5h7"/>',
    brain: '<path d="M9.5 3.5A3 3 0 006.6 6 3 3 0 004 9.5a3 3 0 00.6 4.8A3.3 3.3 0 007.5 19a2.6 2.6 0 004.5 1.2V5.3A2.7 2.7 0 009.5 3.5z"/><path d="M14.5 3.5A3 3 0 0117.4 6 3 3 0 0120 9.5a3 3 0 01-.6 4.8 3.3 3.3 0 01-2.9 4.7 2.6 2.6 0 01-4.5 1.2"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>',
    flag: '<path d="M5 21.5V3.5"/><path d="M5 4h12.5l-2.5 4.5 2.5 4.5H5"/>',
    "map-pin": '<path d="M12 21.5s-7-6.2-7-12a7 7 0 0114 0c0 5.8-7 12-7 12z"/><circle cx="12" cy="9.5" r="2.6"/>',
    search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5l5 5"/>',
    settings: '<circle cx="12" cy="12" r="3.2"/><path d="M12 2.5l1.6 2.6 3-.6.6 3 2.6 1.6-1.3 2.9 1.3 2.9-2.6 1.6-.6 3-3-.6L12 21.5l-1.6-2.6-3 .6-.6-3-2.6-1.6 1.3-2.9-1.3-2.9 2.6-1.6.6-3 3 .6z"/>',
    message: '<path d="M4 5.5A2.5 2.5 0 016.5 3h11A2.5 2.5 0 0120 5.5v8a2.5 2.5 0 01-2.5 2.5H10l-5 4.5V16A2.5 2.5 0 014 13.5z"/>',
    camera: '<path d="M3.5 8.5A2 2 0 015.5 6.5h2l1.5-2.5h6l1.5 2.5h2a2 2 0 012 2V18a2 2 0 01-2 2h-13a2 2 0 01-2-2z"/><circle cx="12" cy="13" r="3.8"/>',
    music: '<path d="M9 18V5.5l11-2.5v12.5"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="15.5" r="2.5"/>',
    home: '<path d="M3.5 11L12 3.5l8.5 7.5"/><path d="M5.5 9.5V20.5h13V9.5"/><path d="M10 20.5v-6h4v6"/>',
    building: '<rect x="5" y="2.5" width="14" height="19" rx="1.5"/><path d="M9 6.5h2M13 6.5h2M9 10.5h2M13 10.5h2M9 14.5h2M13 14.5h2M10.5 21.5v-3h3v3"/>',
    car: '<path d="M4 16.5v-4l2-5.2A2 2 0 017.9 6h8.2a2 2 0 011.9 1.3l2 5.2v4"/><path d="M2.5 12.5h19v4.5h-19z"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
    plane: '<path d="M21 15.5l-8-4.5V5a1.5 1.5 0 00-3 0v6l-8 4.5V17l8-2.2v4l-2.5 1.7V22l4-1 4 1v-1.5L13 18.8v-4l8 2.2z"/>',
    atom: '<circle cx="12" cy="12" r="1.6"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>',
    dna: '<path d="M7 2.5c0 6.3 10 6.7 10 13s-10 2.7-10 6"/><path d="M17 2.5c0 6.3-10 6.7-10 13s10 2.7 10 6"/><path d="M8.5 6h7M8.5 18h7M10 12h4"/>',
    warning: '<path d="M12 3.5L2.5 20h19z"/><path d="M12 10v4.5M12 17.2v.3"/>',
    question: '<circle cx="12" cy="12" r="9"/><path d="M9.3 9.2a2.8 2.8 0 015.4 1c0 1.9-2.7 2.4-2.7 4.2M12 17.3v.2"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.3v.2"/>',
    play: '<path d="M7 4.5v15l12.5-7.5z"/>',
    "thumbs-up": '<path d="M7.5 10.5v10h-4v-10z"/><path d="M7.5 10.5l4-7.5c1.6 0 2.7 1.2 2.4 2.8l-.7 3.7h5.6a2 2 0 012 2.4l-1.5 7a2 2 0 01-2 1.6H7.5"/>',
    gift: '<rect x="3.5" y="8" width="17" height="4.5" rx="1"/><path d="M5 12.5v8.5h14v-8.5M12 8v13"/><path d="M12 8C10.5 4 6.5 4 6.5 6.3 6.5 8 9.5 8 12 8zM12 8c1.5-4 5.5-4 5.5-1.7C17.5 8 14.5 8 12 8z"/>',
    layers: '<path d="M12 3l9 4.8-9 4.8-9-4.8z"/><path d="M3 12l9 4.8 9-4.8M3 16.2L12 21l9-4.8"/>',
    link: '<path d="M10 14a4.5 4.5 0 006.4 0l3-3a4.5 4.5 0 00-6.4-6.4l-1.3 1.3"/><path d="M14 10a4.5 4.5 0 00-6.4 0l-3 3a4.5 4.5 0 006.4 6.4l1.3-1.3"/>',
    eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    wifi: '<path d="M2.5 9a14 14 0 0119 0M5.5 12.5a9.5 9.5 0 0113 0M8.8 16a4.8 4.8 0 016.4 0"/><circle cx="12" cy="19.3" r=".9"/>',
    battery: '<rect x="2.5" y="7" width="17" height="10" rx="2"/><path d="M22 10.5v3"/><path d="M5.5 10v4M8.5 10v4M11.5 10v4"/>',
    mountain: '<path d="M2.5 20.5l7-12 4.5 7.5 2.5-3.5 5 8z"/><path d="M7.3 12.3l2.2 1.7 2-1.6"/>',
    tree: '<path d="M12 2.5l-6 8h3.5L5 16.5h14L14.5 10.5H18z"/><path d="M12 16.5v5"/>',
    factory: '<path d="M2.5 21V11l6 3.5V11l6 3.5V7l3-2v16z"/><path d="M2.5 21h19M18 5h3.5v16"/>',
    scale: '<path d="M12 3v18M6 21h12M4 7h16"/><path d="M4 7l-2.5 6a3 3 0 005 0zM20 7l-2.5 6a3 3 0 005 0z"/>',
    trophy: '<path d="M7 3.5h10v5a5 5 0 01-10 0z"/><path d="M7 5.5H3.5c0 3 1.5 4.5 3.8 4.8M17 5.5h3.5c0 3-1.5 4.5-3.8 4.8M12 13.5v4M8 21h8M9.5 17.5h5V21h-5z"/>',
    sparkles: '<path d="M10 3l1.8 5.2L17 10l-5.2 1.8L10 17l-1.8-5.2L3 10l5.2-1.8z"/><path d="M18 14l.9 2.1 2.1.9-2.1.9L18 20l-.9-2.1L15 17l2.1-.9z"/>',
  };
})();

;
/* Scene style components — window.SceneStyle (the `S` argument in custom scenes).
 * Shared by every style pack; a pack calls SceneStyle.init({...}) to set its look.
 * Requires the scene runtime (window.V) and window.SceneIcons.
 */
(function () {
  "use strict";
  var V = window.V;
  var S = (window.SceneStyle = window.SceneStyle || {});
  var el = V.el;

  var cfg = {
    id: "base",
    kind: "minimal", // minimal | documentary | neon | whiteboard
    enter: "rise",
    titleReveal: "mask",
    drift: 0.025,
    series: ["#2F6BFF", "#FF6B4A", "#16B88A", "#9B5CFF", "#F5B700", "#00A6C8"],
  };
  S.theme = cfg;
  S.init = function (c) {
    for (var k in c) if (Object.prototype.hasOwnProperty.call(c, k)) cfg[k] = c[k];
    return S;
  };

  // ───────────────────────── basics ─────────────────────────
  function u(n) { return n * V.unit; }
  S.u = u;
  function lastT() { return Math.max(0.05, V.duration - 0.05); }
  function clampT(t) { return Math.max(0, Math.min(lastT(), t)); }
  S.clampT = clampT;
  function str(v) { return v == null ? "" : String(v); }
  function arr(v) { return Array.isArray(v) ? v : v == null ? [] : [v]; }
  function hashStr(s) {
    s = str(s);
    var h = 2166136261;
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function hash01(n) {
    var x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
    return x - Math.floor(x);
  }
  S.hash = hashStr;
  S.color = function (i) { return cfg.series[((i % cfg.series.length) + cfg.series.length) % cfg.series.length]; };
  S.css = function (name) {
    try { return getComputedStyle(document.documentElement).getPropertyValue(name).trim(); } catch (e) { return ""; }
  };

  var STOP = { the: 1, a: 1, an: 1, and: 1, or: 1, of: 1, to: 1, in: 1, on: 1, for: 1, with: 1, is: 1, are: 1, was: 1, it: 1, its: 1, that: 1, this: 1, by: 1, as: 1, at: 1, be: 1, from: 1, your: 1, you: 1, we: 1, our: 1, their: 1, they: 1 };
  /** Pick the most distinctive word of a label to sync on (longest non-stopword). */
  function autoKey(text) {
    var best = "";
    str(text).replace(/[*_]/g, "").split(/\s+/).forEach(function (w) {
      var c = w.replace(/[^\p{L}\p{N}]+/gu, "");
      if (!c || STOP[c.toLowerCase()]) return;
      if (c.length > best.length) best = c;
    });
    return best || null;
  }
  S.autoKey = autoKey;

  /**
   * Resolve times for an ordered list of sync keys (word/phrase or null).
   * Found keys keep narration order; missing ones are spread evenly between neighbours.
   * opts: { start=0.35, end, lead=0.15, minGap=0.2 }
   */
  S.syncTimes = function (keys, opts) {
    opts = opts || {};
    var n = keys.length;
    var D = V.duration;
    var start = opts.start != null ? opts.start : Math.min(0.35, D * 0.1);
    var end = opts.end != null ? opts.end : Math.max(start, Math.min(D * 0.72, D - 1.2));
    var lead = opts.lead != null ? opts.lead : 0.15;
    var times = new Array(n);
    var after = Math.max(0, start - 0.5);
    for (var i = 0; i < n; i++) {
      var k = keys[i];
      var t = null;
      if (k) {
        t = V.find(k, after);
        if (t != null) after = t + 0.01;
      }
      times[i] = t != null ? Math.max(0, t - lead) : null;
    }
    // fill gaps
    var i0 = 0;
    while (i0 < n) {
      if (times[i0] != null) { i0++; continue; }
      var j = i0;
      while (j < n && times[j] == null) j++;
      var a = i0 > 0 ? times[i0 - 1] : null;
      var b = j < n ? times[j] : null;
      var count = j - i0;
      var lo, hi, k2;
      if (a == null && b == null) {
        for (k2 = 0; k2 < count; k2++) times[i0 + k2] = count === 1 ? start : start + ((end - start) * k2) / (count - 1);
      } else if (a == null) {
        lo = Math.min(start, b); hi = b;
        for (k2 = 0; k2 < count; k2++) times[i0 + k2] = lo + ((hi - lo) * k2) / count;
      } else if (b == null) {
        var step = Math.max(0.35, Math.min(1.2, (Math.max(end, a + 0.4 * count) - a) / count));
        for (k2 = 0; k2 < count; k2++) times[i0 + k2] = a + step * (k2 + 1);
      } else {
        for (k2 = 0; k2 < count; k2++) times[i0 + k2] = a + ((b - a) * (k2 + 1)) / (count + 1);
      }
      i0 = j;
    }
    var minGap = opts.minGap != null ? opts.minGap : 0.12;
    for (i = 0; i < n; i++) {
      if (i > 0 && times[i] < times[i - 1] + minGap) times[i] = times[i - 1] + minGap;
      times[i] = Math.max(0, Math.min(times[i], Math.max(0.05, D - 0.6)));
    }
    return times;
  };

  /** Rich text: "*word*" → accent emphasis span. Returns a DocumentFragment (text nodes only, no HTML). */
  S.rich = function (text) {
    var frag = document.createDocumentFragment();
    var parts = str(text).split(/(\*[^*]+\*)/g);
    parts.forEach(function (p) {
      if (!p) return;
      if (p.length > 2 && p[0] === "*" && p[p.length - 1] === "*") frag.appendChild(el("span.v-em", { text: p.slice(1, -1) }));
      else frag.appendChild(document.createTextNode(p));
    });
    return frag;
  };
  function plain(text) { return str(text).replace(/\*([^*]+)\*/g, "$1"); }
  S.plain = plain;

  /** Split an element's text nodes into word spans (keeps nested emphasis spans). Returns spans. */
  S.splitWords = function (node, opts) {
    opts = opts || {};
    var spans = [];
    function walk(n) {
      var kids = [].slice.call(n.childNodes);
      kids.forEach(function (c) {
        if (c.nodeType === 3) {
          var frag = document.createDocumentFragment();
          c.textContent.split(/(\s+)/).forEach(function (piece) {
            if (!piece) return;
            if (/^\s+$/.test(piece)) { frag.appendChild(document.createTextNode(" ")); return; }
            var w = el("span.v-word", { text: piece });
            if (opts.mask) {
              var m = el("span.v-mask", null, w);
              frag.appendChild(m);
            } else frag.appendChild(w);
            spans.push(w);
          });
          n.replaceChild(frag, c);
        } else if (c.nodeType === 1 && !c.classList.contains("v-word")) walk(c);
      });
    }
    walk(node);
    return spans;
  };

  S.fit = function (node, opts) { V.fit(node, opts); return node; };

  // ───────────────────────── icons ─────────────────────────
  S.iconNames = Object.keys(window.SceneIcons || {});
  S.icon = function (name, opts) {
    opts = opts || {};
    var icons = window.SceneIcons || {};
    var key = str(name).toLowerCase().trim();
    var body = icons[key] || icons[ICON_ALIASES[key]] || icons.sparkles;
    var size = opts.size != null ? opts.size : u(56);
    var svg = el("svg.v-icon", { viewBox: "0 0 24 24", width: size, height: size, fill: "none", stroke: opts.color || "currentColor", "stroke-width": opts.stroke || (cfg.kind === "whiteboard" ? 2.2 : 2), "stroke-linecap": "round", "stroke-linejoin": "round" });
    svg.innerHTML = body;
    if (opts.parent) opts.parent.appendChild(svg);
    return svg;
  };
  var ICON_ALIASES = { money: "dollar", cash: "dollar", price: "dollar", time: "clock", idea: "lightbulb", growth: "trending-up", up: "trending-up", down: "trending-down", decline: "trending-down", world: "globe", earth: "globe", person: "user", people: "users", team: "users", security: "shield", secure: "shield", ai: "cpu", chip: "cpu", computer: "cpu", data: "database", fire: "flame", water: "droplet", energy: "bolt", power: "bolt", lightning: "bolt", science: "atom", health: "heart", love: "heart", goal: "target", location: "map-pin", pin: "map-pin", place: "map-pin", gear: "settings", chat: "message", city: "building", company: "building", warning: "warning", alert: "warning", nature: "leaf", plant: "leaf", award: "trophy", win: "trophy", magic: "sparkles", new: "sparkles", speed: "rocket", launch: "rocket", stack: "layers", balance: "scale", law: "scale", industry: "factory", learn: "book", education: "book", mind: "brain", think: "brain", yes: "check", no: "x", travel: "plane", transport: "car" };
  S.badge = function (name, parent, opts) {
    var b = el("div.v-icon-badge", { parent: parent });
    S.icon(name, { parent: b, size: (opts && opts.size) || u(48) });
    return b;
  };

  // ───────────────────────── entrances ─────────────────────────
  function flicker(p) {
    if (p >= 1) return 1;
    var on = hash01(Math.floor(p * 16) + 3) > 0.42 || p > 0.75;
    return (on ? 1 : 0.12) * Math.min(1, p * 1.8);
  }
  S.ease = { flicker: flicker };

  /**
   * Animate an element in. style: rise | fade | pop | slide-left | slide-right | blur | zoom | wipe | write | glitch | drop
   */
  S.enter = function (tl, target, at, opts) {
    opts = opts || {};
    var style = opts.style || cfg.enter;
    var d = opts.dur;
    var dist = opts.distance != null ? opts.distance : u(46);
    var o = { at: clampT(at), stagger: opts.stagger || 0 };
    function O(dur, ease) { return { at: o.at, dur: d != null ? d : dur, ease: opts.ease || ease, stagger: o.stagger }; }
    switch (style) {
      case "fade":
        tl.fromTo(target, { opacity: 0 }, { opacity: 1 }, O(0.7, "outCubic"));
        break;
      case "pop":
        tl.fromTo(target, { opacity: 0 }, { opacity: 1 }, { at: o.at, dur: 0.25, ease: "outQuad", stagger: o.stagger });
        tl.fromTo(target, { scale: 0.55 }, { scale: 1 }, O(0.65, "outBack"));
        break;
      case "slide-left":
        tl.fromTo(target, { opacity: 0, x: -dist * 1.6 }, { opacity: 1, x: 0 }, O(0.75, "outCubic"));
        break;
      case "slide-right":
        tl.fromTo(target, { opacity: 0, x: dist * 1.6 }, { opacity: 1, x: 0 }, O(0.75, "outCubic"));
        break;
      case "drop":
        tl.fromTo(target, { opacity: 0, y: -dist }, { opacity: 1, y: 0 }, O(0.75, "outBack"));
        break;
      case "blur":
        tl.fromTo(target, { opacity: 0, filter: "blur(18px)", scale: 1.06 }, { opacity: 1, filter: "blur(0px)", scale: 1 }, O(1.1, "outCubic"));
        tl.set(target, { filter: "none" }, { at: o.at + (d != null ? d : 1.1) + 0.01 + o.stagger * 20 });
        break;
      case "zoom":
        tl.fromTo(target, { opacity: 0, scale: 1.3 }, { opacity: 1, scale: 1 }, O(0.9, "outExpo"));
        break;
      case "wipe":
      case "write": {
        var len = typeof target === "object" && target && target.textContent ? target.textContent.length : 20;
        var wd = d != null ? d : style === "write" ? Math.min(1.8, 0.35 + len * 0.028) : 0.8;
        tl.fromTo(target, { opacity: 1, clipPath: "inset(0% 100% 0% 0%)" }, { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }, { at: o.at, dur: wd, ease: style === "write" ? "inOutSine" : "inOutCubic", stagger: o.stagger });
        tl.set(target, { clipPath: "none" }, { at: o.at + wd + 0.01 });
        break;
      }
      case "glitch":
        tl.fromTo(target, { opacity: 0 }, { opacity: 1 }, { at: o.at, dur: d != null ? d : 0.5, ease: flicker, stagger: o.stagger });
        tl.fromTo(target, { x: -u(28), skewX: -14 }, { x: 0, skewX: 0 }, O(0.5, "outExpo"));
        break;
      case "rise":
      default:
        tl.fromTo(target, { opacity: 0, y: dist }, { opacity: 1, y: 0 }, O(0.8, "outCubic"));
    }
    return tl;
  };

  S.exit = function (tl, target, at, opts) {
    opts = opts || {};
    tl.to(target, { opacity: 0, y: opts.y != null ? opts.y : -u(24) }, { at: clampT(at), dur: opts.dur || 0.45, ease: "inCubic" });
    return tl;
  };

  /** Reveal a title/heading word by word in the pack's signature way. */
  S.reveal = function (tl, node, at, opts) {
    opts = opts || {};
    var mode = opts.mode || cfg.titleReveal;
    at = clampT(at);
    if (mode === "write") { S.enter(tl, node, at, { style: "write", dur: opts.dur }); return tl; }
    if (mode === "fade") { S.enter(tl, node, at, { style: "fade" }); return tl; }
    var spans = S.splitWords(node, { mask: mode === "mask" });
    var n = spans.length || 1;
    var stagger = opts.stagger != null ? opts.stagger : Math.max(0.025, Math.min(0.09, 0.9 / n));
    if (mode === "mask") tl.fromTo(spans, { yPercent: 115, rotate: 4 }, { yPercent: 0, rotate: 0 }, { at: at, dur: 0.85, ease: "outExpo", stagger: stagger });
    else if (mode === "blur") {
      tl.fromTo(spans, { opacity: 0, filter: "blur(14px)", y: u(10) }, { opacity: 1, filter: "blur(0px)", y: 0 }, { at: at, dur: 1.0, ease: "outCubic", stagger: stagger * 1.3 });
      tl.set(spans, { filter: "none" }, { at: at + 1.05 + stagger * 1.3 * n });
    } else if (mode === "glitch") {
      tl.fromTo(spans, { opacity: 0 }, { opacity: 1 }, { at: at, dur: 0.45, ease: flicker, stagger: stagger });
      tl.fromTo(spans, { y: u(24), skewX: -10 }, { y: 0, skewX: 0 }, { at: at, dur: 0.55, ease: "outExpo", stagger: stagger });
    } else tl.fromTo(spans, { opacity: 0, y: u(30) }, { opacity: 1, y: 0 }, { at: at, dur: 0.7, ease: "outCubic", stagger: stagger });
    return tl;
  };

  /** Fade words in exactly as they are spoken (karaoke). words: span list; text tokens aligned to V.words. */
  S.speakWords = function (tl, spans, opts) {
    opts = opts || {};
    var keys = spans.map(function (s) { return s.textContent; });
    var start = opts.start != null ? opts.start : 0.3;
    var times = S.syncTimes(keys, { start: start, end: opts.end != null ? opts.end : Math.min(V.duration * 0.85, start + spans.length * 0.32), lead: 0.08, minGap: 0.03 });
    spans.forEach(function (s, i) {
      tl.fromTo(s, { opacity: opts.dim != null ? opts.dim : 0.18 }, { opacity: 1 }, { at: times[i], dur: 0.25, ease: "outQuad" });
    });
    return times;
  };

  // ───────────────────────── emphasis / sketches ─────────────────────────
  function relRect(node, ref) {
    var a = node.getBoundingClientRect(), b = ref.getBoundingClientRect();
    return { x: a.left - b.left, y: a.top - b.top, w: a.width, h: a.height };
  }
  S.rect = relRect;
  function rr(rnd, amt) { return (rnd() - 0.5) * 2 * amt; }
  /** Hand-drawn style line path (two slightly offset strokes for a marker feel). */
  function roughLine(x1, y1, x2, y2, rnd, wob) {
    wob = wob == null ? u(3) : wob;
    var mx = (x1 + x2) / 2 + rr(rnd, wob * 2), my = (y1 + y2) / 2 + rr(rnd, wob * 2);
    return "M" + (x1 + rr(rnd, wob)).toFixed(1) + " " + (y1 + rr(rnd, wob)).toFixed(1) + " Q" + mx.toFixed(1) + " " + my.toFixed(1) + " " + (x2 + rr(rnd, wob)).toFixed(1) + " " + (y2 + rr(rnd, wob)).toFixed(1);
  }
  function roughRectPath(x, y, w, h, rnd) {
    var o = u(6);
    var p = [];
    p.push(roughLine(x - o, y, x + w + o, y + rr(rnd, u(2)), rnd));
    p.push(roughLine(x + w, y - o, x + w + rr(rnd, u(2)), y + h + o, rnd));
    p.push(roughLine(x + w + o, y + h, x - o, y + h + rr(rnd, u(2)), rnd));
    p.push(roughLine(x, y + h + o, x + rr(rnd, u(2)), y - o, rnd));
    return p.join(" ");
  }
  function roughEllipsePath(cx, cy, rx, ry, rnd) {
    var pts = [];
    var a0 = -Math.PI * 0.6 + rr(rnd, 0.2);
    var steps = 26;
    for (var i = 0; i <= steps + 3; i++) {
      var a = a0 + (i / steps) * Math.PI * 2;
      var k = 1 + rr(rnd, 0.035) + (i / steps) * 0.06;
      pts.push([cx + Math.cos(a) * rx * k, cy + Math.sin(a) * ry * k]);
    }
    var d = "M" + pts[0][0].toFixed(1) + " " + pts[0][1].toFixed(1);
    for (i = 1; i < pts.length - 1; i++) {
      var xc = (pts[i][0] + pts[i + 1][0]) / 2, yc = (pts[i][1] + pts[i + 1][1]) / 2;
      d += " Q" + pts[i][0].toFixed(1) + " " + pts[i][1].toFixed(1) + " " + xc.toFixed(1) + " " + yc.toFixed(1);
    }
    return d;
  }
  S.roughLine = roughLine;
  S.roughRect = roughRectPath;
  S.roughEllipse = roughEllipsePath;

  function overlaySvg(container) {
    var svg = el("svg.v-sketch", { parent: container });
    var w = container.clientWidth || V.width, h = container.clientHeight || V.height;
    svg.setAttribute("viewBox", "0 0 " + w + " " + h);
    svg.setAttribute("width", w);
    svg.setAttribute("height", h);
    svg.style.zIndex = 5;
    return svg;
  }
  /** Draw an SVG path (stroke) inside `container` over time. Returns the path. */
  S.drawPath = function (tl, container, d, at, opts) {
    opts = opts || {};
    var svg = opts.svg || overlaySvg(container);
    var path = el("path", { parent: svg, d: d, fill: "none", stroke: opts.color || "var(--accent)", "stroke-width": opts.width || u(cfg.kind === "whiteboard" ? 5 : 4), "stroke-linecap": "round", "stroke-linejoin": "round" });
    if (opts.opacity != null) path.setAttribute("opacity", opts.opacity);
    tl.fromTo(path, { draw: 0 }, { draw: 1 }, { at: clampT(at), dur: opts.dur || 0.6, ease: opts.ease || "inOutCubic" });
    return path;
  };

  /**
   * Emphasise a word/element at time `at`: underline (minimal/documentary), glow (neon),
   * hand-drawn underline (whiteboard), or circle (opts.shape = "circle").
   * `container` must be a positioned ancestor (e.g. the stage).
   */
  S.highlight = function (tl, target, at, opts) {
    opts = opts || {};
    var container = opts.container || target.closest(".v-stage") || target.parentNode;
    at = clampT(at);
    var r = relRect(target, container);
    var rnd = V.makeRand(hashStr(target.textContent) + 7);
    if (opts.shape === "circle") {
      S.drawPath(tl, container, roughEllipsePath(r.x + r.w / 2, r.y + r.h / 2, r.w / 2 + u(28), r.h / 2 + u(18), rnd), at, { color: opts.color || "var(--accent-2, var(--accent))", dur: 0.7 });
      return tl;
    }
    if (cfg.kind === "neon") {
      var glow = S.css("--glow-rgb") || "34,211,238";
      tl.fromTo(target, { textShadow: "0 0 0px rgba(" + glow + ",0)" }, { textShadow: "0 0 " + u(28).toFixed(1) + "px rgba(" + glow + ",0.95)" }, { at: at, dur: 0.4, ease: "outQuad" });
      tl.to(target, { color: opts.color || "#ffffff" }, { at: at, dur: 0.3 });
      return tl;
    }
    if (cfg.kind === "whiteboard") {
      var y = r.y + r.h * 0.96;
      S.drawPath(tl, container, roughLine(r.x - u(6), y, r.x + r.w + u(6), y + rr(rnd, u(4)), rnd, u(2.5)) + " " + roughLine(r.x + u(10), y + u(9), r.x + r.w - u(4), y + u(7), rnd, u(2)), at, { color: opts.color || "var(--accent-2, var(--accent))", dur: 0.55, width: u(6) });
      return tl;
    }
    // minimal / documentary: marker bar behind each line box of the text
    var cr = container.getBoundingClientRect();
    var rects = [].slice.call(target.getClientRects()).filter(function (q) { return q.width > 2; });
    if (!rects.length) rects = [target.getBoundingClientRect()];
    // merge rects on the same line (word spans)
    var lines = [];
    rects.forEach(function (q) {
      var L = lines.length ? lines[lines.length - 1] : null;
      if (L && Math.abs(L.top - q.top) < q.height * 0.5) { L.left = Math.min(L.left, q.left); L.right = Math.max(L.right, q.right); L.bottom = Math.max(L.bottom, q.bottom); }
      else lines.push({ left: q.left, right: q.right, top: q.top, bottom: q.bottom, height: q.height });
    });
    lines.forEach(function (q, i) {
      var h = q.bottom - q.top;
      var bar = el("span", { parent: container, style: { position: "absolute", left: q.left - cr.left - u(6) + "px", top: q.top - cr.top + h * (cfg.kind === "documentary" ? 0.96 : 0.6) + "px", width: q.right - q.left + u(12) + "px", height: (cfg.kind === "documentary" ? u(4) : h * 0.32) + "px", background: opts.color || (cfg.kind === "documentary" ? "var(--accent)" : "var(--hl, rgba(47,107,255,0.22))"), transformOrigin: "0 50%", zIndex: -1, borderRadius: u(4) + "px" } });
      tl.fromTo(bar, { scaleX: 0 }, { scaleX: 1 }, { at: at + i * 0.25, dur: 0.45, ease: "inOutCubic" });
    });
    return tl;
  };

  // ───────────────────────── backgrounds ─────────────────────────
  function grainDataUrl(size, seed, alpha) {
    try {
      var c = document.createElement("canvas");
      c.width = c.height = size;
      var ctx = c.getContext("2d");
      var img = ctx.createImageData(size, size);
      var rnd = V.makeRand(seed);
      for (var i = 0; i < img.data.length; i += 4) {
        var v = Math.floor(rnd() * 255);
        img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
        img.data[i + 3] = alpha;
      }
      ctx.putImageData(img, 0, 0);
      return c.toDataURL("image/png");
    } catch (e) { return ""; }
  }

  S.background = function (root, opts) {
    opts = opts || {};
    var bg = el("div.v-bg", { parent: root });
    var kind = opts.kind || cfg.kind;
    var W = V.width, H = V.height, M = Math.max(W, H);
    // A pack may paint its own backdrop: SceneStyle.init({ background: function (bg, root, kit) {...} }).
    if (typeof cfg.background === "function" && !opts.kind) {
      cfg.background(bg, root, { el: el, u: u, W: W, H: H, M: M, hash01: hash01, grain: grainDataUrl });
      return bg;
    }
    if (kind === "minimal") {
      var dots = el("div", { parent: bg, style: { inset: "0", backgroundImage: "radial-gradient(var(--dot, rgba(17,17,17,0.10)) " + u(1.6) + "px, transparent " + u(2) + "px)", backgroundSize: u(38) + "px " + u(38) + "px", opacity: 0.55 } });
      var b1 = el("div", { parent: bg, style: { width: M * 0.75 + "px", height: M * 0.75 + "px", borderRadius: "50%", background: "radial-gradient(circle, var(--blob-1, rgba(47,107,255,0.16)) 0%, transparent 65%)", left: W * 0.62 + "px", top: -M * 0.25 + "px" } });
      var b2 = el("div", { parent: bg, style: { width: M * 0.6 + "px", height: M * 0.6 + "px", borderRadius: "50%", background: "radial-gradient(circle, var(--blob-2, rgba(255,107,74,0.12)) 0%, transparent 65%)", left: -M * 0.22 + "px", top: H * 0.55 + "px" } });
      V.onFrame(function (t) {
        b1.style.transform = "translate(" + (Math.sin(t * 0.25) * u(60)).toFixed(1) + "px," + (Math.cos(t * 0.2) * u(40)).toFixed(1) + "px)";
        b2.style.transform = "translate(" + (Math.cos(t * 0.22) * u(50)).toFixed(1) + "px," + (Math.sin(t * 0.18) * u(50)).toFixed(1) + "px)";
        dots.style.backgroundPosition = "0px " + (-(t * u(6)) % u(38)).toFixed(2) + "px";
      });
    } else if (kind === "documentary") {
      el("div", { parent: bg, style: { inset: "0", background: "radial-gradient(ellipse at 50% 45%, var(--bg-center, #1d1915) 0%, var(--bg) 70%)" } });
      var leak = el("div", { parent: bg, style: { width: M * 0.9 + "px", height: M * 0.9 + "px", borderRadius: "50%", background: "radial-gradient(circle, rgba(232,176,75,0.13) 0%, transparent 60%)", left: W * 0.45 + "px", top: -M * 0.4 + "px" } });
      el("div.v-overlay", { parent: root, style: { background: "radial-gradient(ellipse at 50% 50%, transparent 55%, rgba(0,0,0,0.55) 100%)" } });
      var url = grainDataUrl(160, V.seed + 11, 34);
      var grain = el("div.v-overlay", { parent: root, style: { inset: -u(160) + "px", backgroundImage: url ? "url(" + url + ")" : "none", backgroundSize: u(160) * 1.4 + "px", opacity: 0.55, mixBlendMode: "overlay", zIndex: 51 } });
      V.onFrame(function (t) {
        leak.style.transform = "translate(" + (Math.sin(t * 0.15) * u(120)).toFixed(1) + "px," + (Math.cos(t * 0.12) * u(60)).toFixed(1) + "px)";
        var f = Math.floor(t * 12);
        grain.style.transform = "translate(" + Math.round(hash01(f) * u(150)) + "px," + Math.round(hash01(f + 99) * u(150)) + "px)";
      });
    } else if (kind === "neon") {
      el("div", { parent: bg, style: { inset: "0", background: "radial-gradient(ellipse at 50% 120%, rgba(232,121,249,0.22) 0%, transparent 55%), radial-gradient(ellipse at 50% -20%, rgba(34,211,238,0.16) 0%, transparent 55%), var(--bg)" } });
      var floorWrap = el("div", { parent: bg, style: { left: "-50%", right: "-50%", bottom: "0", height: "48%", perspective: u(500) + "px", perspectiveOrigin: "50% 0%", overflow: "hidden", maskImage: "linear-gradient(to top, black 10%, transparent 95%)", webkitMaskImage: "linear-gradient(to top, black 10%, transparent 95%)" } });
      var cell = u(90);
      var floor = el("div", { parent: floorWrap, style: { position: "absolute", left: "0", right: "0", top: "0", height: "300%", transformOrigin: "50% 0%", transform: "rotateX(72deg)", backgroundImage: "linear-gradient(rgba(34,211,238,0.35) " + u(2) + "px, transparent " + u(2) + "px), linear-gradient(90deg, rgba(34,211,238,0.35) " + u(2) + "px, transparent " + u(2) + "px)", backgroundSize: cell + "px " + cell + "px" } });
      el("div", { parent: bg, style: { left: "0", right: "0", top: "52%", height: u(2) + "px", background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.7), transparent)", boxShadow: "0 0 " + u(30) + "px rgba(34,211,238,0.6)" } });
      var parts = [];
      var rnd = V.makeRand(V.seed + 5);
      for (var i = 0; i < 26; i++) {
        var sz = u(2 + rnd() * 4);
        parts.push({ e: el("div", { parent: bg, style: { width: sz + "px", height: sz + "px", borderRadius: "50%", background: rnd() > 0.5 ? "#22D3EE" : "#E879F9", boxShadow: "0 0 " + sz * 3 + "px currentColor", opacity: 0.25 + rnd() * 0.5, left: "0", top: "0" } }), x: rnd() * W, y: rnd() * H, s: 10 + rnd() * 30, ph: rnd() * 6 });
      }
      el("div.v-overlay", { parent: root, style: { backgroundImage: "repeating-linear-gradient(0deg, rgba(0,0,0,0.16) 0px, rgba(0,0,0,0.16) " + Math.max(1, u(2)) + "px, transparent " + Math.max(1, u(2)) + "px, transparent " + Math.max(2, u(5)) + "px)", opacity: 0.6 } });
      el("div.v-overlay", { parent: root, style: { background: "radial-gradient(ellipse at 50% 50%, transparent 60%, rgba(0,0,0,0.5) 100%)" } });
      V.onFrame(function (t) {
        floor.style.backgroundPosition = "0px " + ((t * u(60)) % cell).toFixed(2) + "px";
        for (var k = 0; k < parts.length; k++) {
          var p = parts[k];
          var y = (((p.y - t * u(p.s)) % H) + H) % H;
          p.e.style.transform = "translate(" + (p.x + Math.sin(t * 0.6 + p.ph) * u(20)).toFixed(1) + "px," + y.toFixed(1) + "px)";
        }
      });
    } else if (kind === "whiteboard") {
      el("div", { parent: bg, style: { inset: "0", backgroundImage: "linear-gradient(var(--grid, rgba(59,130,246,0.07)) " + Math.max(1, u(1.5)) + "px, transparent " + Math.max(1, u(1.5)) + "px), linear-gradient(90deg, var(--grid, rgba(59,130,246,0.07)) " + Math.max(1, u(1.5)) + "px, transparent " + Math.max(1, u(1.5)) + "px)", backgroundSize: u(54) + "px " + u(54) + "px", backgroundPosition: "center center" } });
      el("div.v-overlay", { parent: root, style: { background: "radial-gradient(ellipse at 50% 45%, transparent 60%, rgba(120,100,60,0.10) 100%)" } });
    }
    return bg;
  };

  /** Slow "camera" drift on an element (Ken Burns). amount = scale increase over the scene. */
  S.camera = function (node, amount) {
    var a = amount != null ? amount : cfg.drift;
    if (!a) return;
    V.onFrame(function (t) {
      var p = V.progress(t, 0, V.duration, "inOutSine");
      node.style.transform = "scale(" + (1 + a * p).toFixed(5) + ") translate(" + (-a * 300 * p * V.unit * 0.3).toFixed(2) + "px, 0px)";
    });
  };

  /** Create background + drifting camera + padded flex stage. Returns the stage element. */
  S.stage = function (root, opts) {
    opts = opts || {};
    root = root || V.root();
    root.classList.add("pack-" + cfg.id, "kind-" + cfg.kind);
    if (opts.cls) root.classList.add(opts.cls);
    if (opts.background !== false) S.background(root);
    var cam = el("div.v-camera", { parent: root });
    var stage = el("div.v-stage", { parent: cam });
    if (opts.align === "top") stage.classList.add("v-top");
    S.camera(cam, opts.drift);
    return stage;
  };

  /** If stage content overflows, scale it down to fit (call after building). */
  S.guard = function (stage) {
    S.flush();
    try {
      var sr = stage.getBoundingClientRect();
      var cs = getComputedStyle(stage);
      var top = sr.top + parseFloat(cs.paddingTop), bottom = sr.bottom - parseFloat(cs.paddingBottom);
      var left = sr.left + parseFloat(cs.paddingLeft), right = sr.right - parseFloat(cs.paddingRight);
      var minT = Infinity, maxB = -Infinity, minL = Infinity, maxR = -Infinity;
      [].forEach.call(stage.children, function (c) {
        if (c.classList.contains("v-sketch") || c.classList.contains("v-wipe")) return;
        var r = c.getBoundingClientRect();
        if (!r.width && !r.height) return;
        minT = Math.min(minT, r.top); maxB = Math.max(maxB, r.bottom); minL = Math.min(minL, r.left); maxR = Math.max(maxR, r.right);
      });
      if (!isFinite(minT)) return;
      var needH = maxB - minT, availH = bottom - top, needW = maxR - minL, availW = right - left;
      var s = Math.min(1, availH / Math.max(1, needH), availW / Math.max(1, needW));
      if (s < 0.995) {
        stage.style.transform = "scale(" + Math.max(0.4, s * 0.98).toFixed(4) + ")";
        stage.style.transformOrigin = "50% " + (((top + bottom) / 2 - sr.top) / sr.height * 100).toFixed(2) + "%";
      }
    } catch (e) { V.error("guard: " + e.message); }
  };

  // ───────────────────────── building blocks ─────────────────────────
  S.title = function (parent, text, opts) {
    opts = opts || {};
    var h = el("h1.v-title", { parent: parent });
    if (opts.size) h.classList.add("v-" + opts.size);
    if (opts.center) h.classList.add("v-center");
    h.appendChild(S.rich(text));
    if (opts.fit !== false) V.fit(h, { maxLines: opts.maxLines || 3, min: u(28) });
    return h;
  };
  S.text = function (parent, text, opts) {
    opts = opts || {};
    var p = el((opts.tag || "p") + ".v-text", { parent: parent });
    if (opts.muted) p.classList.add("v-muted");
    if (opts.cls) p.className += " " + opts.cls;
    if (opts.center) p.style.textAlign = "center";
    p.appendChild(S.rich(text));
    if (opts.maxLines) V.fit(p, { maxLines: opts.maxLines, min: u(18) });
    return p;
  };
  S.kicker = function (parent, text) { return el("div.v-kicker", { parent: parent, text: plain(text) }); };
  S.card = function (parent, opts) {
    opts = opts || {};
    var c = el("div.v-card", { parent: parent });
    if (opts.cls) c.className += " " + opts.cls;
    return c;
  };
  /** Pack-specific card entrance: whiteboard draws a sketchy border; others rise/pop. */
  S.cardIn = function (tl, card, at, opts) {
    opts = opts || {};
    at = clampT(at);
    if (cfg.kind === "whiteboard") {
      // drawn after layout is final (S.flush, called by S.guard)
      pending.push(function () { sketchCard(tl, card, at, opts); });
      return tl;
    }
    S.enter(tl, card, at, { style: opts.style || (cfg.kind === "neon" ? "glitch" : cfg.kind === "documentary" ? "fade" : "rise") });
    return tl;
  };
  var pending = [];
  /** Run deferred layout-dependent drawing (whiteboard sketches). Called automatically by S.guard. */
  S.flush = function () {
    var q = pending;
    pending = [];
    q.forEach(function (f) { try { f(); } catch (e) { V.error("flush: " + e.message); } });
  };
  function sketchCard(tl, card, at, opts) {
    {
      var r = { x: 0, y: 0, w: card.offsetWidth, h: card.offsetHeight };
      var svg = el("svg.v-sketch", { parent: card, viewBox: "0 0 " + r.w + " " + r.h, width: r.w, height: r.h });
      var rnd = V.makeRand(hashStr(card.textContent) + 3);
      S.drawPath(tl, card, roughRectPath(u(4), u(4), r.w - u(8), r.h - u(8), rnd), at, { svg: svg, color: opts.color || "var(--ink)", dur: 0.7, width: u(4) });
      var kids = [].filter.call(card.children, function (c) { return c !== svg; });
      tl.fromTo(kids, { opacity: 0 }, { opacity: 1 }, { at: at + 0.25, dur: 0.5, ease: "outQuad" });
    }
  }
  S.counter = function (tl, node, opts) {
    var to = Number(opts.to) || 0;
    var from = Number(opts.from) || 0;
    tl.fromTo(node, { text: from }, { text: to, decimals: opts.decimals || 0, prefix: opts.prefix || "", suffix: opts.suffix || "", separator: opts.separator !== false }, { at: clampT(opts.at || 0), dur: opts.dur || 1.6, ease: opts.ease || "outExpo" });
    return tl;
  };
  S.formatValue = function (v, f) {
    f = f || {};
    var n = Number(v);
    if (!isFinite(n)) return str(v);
    return (f.prefix || "") + V.format(n, f.decimals != null ? f.decimals : n % 1 ? 1 : 0, true) + (f.suffix || "");
  };
  /** Straight arrow (SVG) from (x1,y1) to (x2,y2) inside svg; drawn at `at`. Returns {line, head}. */
  S.arrow = function (tl, svg, x1, y1, x2, y2, at, opts) {
    opts = opts || {};
    var ang = Math.atan2(y2 - y1, x2 - x1);
    var d = opts.curve
      ? "M" + x1 + " " + y1 + " Q" + ((x1 + x2) / 2 - Math.sin(ang) * opts.curve) + " " + ((y1 + y2) / 2 + Math.cos(ang) * opts.curve) + " " + x2 + " " + y2
      : cfg.kind === "whiteboard" ? roughLine(x1, y1, x2, y2, V.makeRand(Math.round(x1 + y2)), u(2)) : "M" + x1 + " " + y1 + " L" + x2 + " " + y2;
    var line = el("path.v-edge", { parent: svg, d: d });
    var hs = opts.head || u(18);
    if (opts.curve) ang = Math.atan2(y2 - ((y1 + y2) / 2 + Math.cos(ang) * opts.curve), x2 - ((x1 + x2) / 2 - Math.sin(ang) * opts.curve));
    var hx1 = x2 - Math.cos(ang - 0.45) * hs, hy1 = y2 - Math.sin(ang - 0.45) * hs;
    var hx2 = x2 - Math.cos(ang + 0.45) * hs, hy2 = y2 - Math.sin(ang + 0.45) * hs;
    var head = el("path.v-head", { parent: svg, d: "M" + x2 + " " + y2 + " L" + hx1 + " " + hy1 + " L" + hx2 + " " + hy2 + " Z" });
    at = clampT(at);
    var dur = opts.dur || 0.55;
    tl.fromTo(line, { draw: 0 }, { draw: 1 }, { at: at, dur: dur, ease: "inOutCubic" });
    tl.fromTo(head, { opacity: 0, scale: 0.4 }, { opacity: 1, scale: 1 }, { at: at + dur * 0.8, dur: 0.25, ease: "outBack" });
    head.style.transformOrigin = x2 + "px " + y2 + "px";
    head.style.transformBox = "view-box";
    return { line: line, head: head };
  };

  // ───────────────────────── kinetic typography engine ─────────────────────────
  var NUMLIKE = /\d/;
  /**
   * Kinetic captions: phrases appear one at a time, words pop in exactly when spoken.
   * opts: { tokens?: [{word,start,end}], text?, emphasis?: string[], progress?: bool, maxChars?, maxWords? }
   */
  S.kinetic = function (stage, opts) {
    opts = opts || {};
    var D = V.duration;
    var toks = [];
    if (opts.tokens && opts.tokens.length) {
      toks = opts.tokens.map(function (w) { return { word: str(w.word), start: +w.start || 0, end: +w.end || (+w.start || 0) + 0.3 }; });
    } else if (opts.text) {
      var raw = str(opts.text).split(/\s+/).filter(Boolean).slice(0, 4000);
      var times = S.syncTimes(raw.map(function (w) { return w.replace(/[*_]/g, ""); }), { start: 0.25, end: Math.max(0.3, Math.min(D - 0.6, 0.25 + raw.length * 0.38)), lead: 0, minGap: 0.02 });
      toks = raw.map(function (w, i) { return { word: w, start: times[i], end: i + 1 < raw.length ? times[i + 1] : times[i] + 0.4 }; });
    }
    var root = el("div.v-kin", { parent: stage });
    if (!toks.length) return root;
    var emph = {};
    arr(opts.emphasis).forEach(function (w) { str(w).toLowerCase().split(/\s+/).forEach(function (x) { var c = x.replace(/[^\p{L}\p{N}]+/gu, ""); if (c) emph[c] = 1; }); });
    var maxChars = opts.maxChars || (V.isPortrait ? 24 : V.isSquare ? 30 : 40);
    var maxWords = opts.maxWords || (V.isPortrait ? 5 : 7);
    var phrases = [];
    var cur = null;
    toks.forEach(function (tk, i) {
      var w = tk.word;
      var starred = /^\*.*\*[^\p{L}\p{N}]*$/u.test(w) || /^\*/.test(w);
      w = w.replace(/\*/g, "");
      if (!w) return;
      var prev = i > 0 ? toks[i - 1] : null;
      var gap = prev ? tk.start - prev.end : 0;
      var brk = !cur || cur.chars + w.length + 1 > maxChars || cur.words.length >= maxWords || (prev && /[.!?;:]["')\]]*$/.test(prev.word)) || (prev && /,$/.test(prev.word) && cur.words.length >= 3) || gap > 0.65;
      if (brk) { cur = { words: [], chars: 0 }; phrases.push(cur); }
      var clean = w.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, "");
      cur.words.push({ word: w, start: tk.start, end: tk.end, em: starred || !!emph[clean] || NUMLIKE.test(w) });
      cur.chars += w.length + 1;
    });
    // merge orphan phrases (1 short word) into the previous phrase of the same sentence
    for (var pi0 = phrases.length - 1; pi0 > 0; pi0--) {
      var a = phrases[pi0 - 1], b = phrases[pi0];
      var lastW = a.words[a.words.length - 1].word;
      if (b.words.length <= 1 && !/[.!?;:]["')\]]*$/.test(lastW) && a.chars + b.chars <= maxChars * 1.45 && b.words[0].start - a.words[a.words.length - 1].end < 0.65) {
        a.words = a.words.concat(b.words);
        a.chars += b.chars;
        phrases.splice(pi0, 1);
      }
    }
    phrases.forEach(function (ph, pi) {
      ph.start =Math.max(0, ph.words[0].start - 0.18);
      ph.node = el("div.v-phrase", { parent: root });
      ph.words.forEach(function (wd, wi) {
        wd.node = el("span.v-kw", { parent: ph.node, text: wd.word });
        if (wd.em) wd.node.classList.add("is-em");
        if (wi < ph.words.length - 1) ph.node.appendChild(document.createTextNode(" "));
      });
      if (pi > 0) phrases[pi - 1].end = ph.start;
    });
    phrases[phrases.length - 1].end = Infinity;
    // fit each phrase (only those that overflow)
    var maxH = Math.max(u(100), stage.clientHeight - parseFloat(getComputedStyle(stage).paddingTop) - parseFloat(getComputedStyle(stage).paddingBottom));
    phrases.forEach(function (ph) {
      ph.node.classList.add("is-on");
      if (ph.node.scrollHeight > maxH * 0.9 || ph.node.scrollWidth > ph.node.clientWidth + 1) V.fit(ph.node, { maxHeight: maxH * 0.9, min: u(30) });
      ph.node.classList.remove("is-on");
    });
    var starts = phrases.map(function (p) { return p.start; });
    var on = -1;
    var prog = null;
    if (opts.progress) { prog = el("div.v-kprog", { parent: stage }); prog = el("i", { parent: prog }); }
    var style = opts.style || cfg.kind;
    V.onFrame(function (t) {
      // binary search active phrase
      var lo = 0, hi = starts.length - 1, idx = 0;
      if (t < starts[0]) idx = 0;
      else {
        while (lo <= hi) { var mid = (lo + hi) >> 1; if (starts[mid] <= t) { idx = mid; lo = mid + 1; } else hi = mid - 1; }
      }
      if (on !== idx) {
        if (on >= 0 && phrases[on]) phrases[on].node.classList.remove("is-on");
        phrases[idx].node.classList.add("is-on");
        on = idx;
      }
      var ph = phrases[idx];
      var pin = V.progress(t, ph.start, ph.start + 0.35, "outCubic");
      ph.node.style.opacity = String(Math.max(0, Math.min(1, pin * 1.2)));
      var pout = isFinite(ph.end) ? V.progress(t, ph.end - 0.12, ph.end, "inQuad") : 0;
      ph.node.style.transform = "translateY(calc(-50% + " + ((1 - pin) * u(26) - pout * u(18)).toFixed(2) + "px))";
      for (var i = 0; i < ph.words.length; i++) {
        var wd = ph.words[i];
        var p = V.progress(t, wd.start - 0.1, wd.start + 0.22);
        var e = V.ease.outBack(p);
        var n = wd.node;
        if (style === "whiteboard") {
          n.style.opacity = p > 0 ? "1" : "0";
          n.style.clipPath = p >= 1 ? "none" : "inset(0% " + ((1 - V.ease.inOutSine(p)) * 100).toFixed(1) + "% 0% 0%)";
        } else if (style === "documentary") {
          n.style.opacity = (V.ease.outCubic(p) * 1).toFixed(3);
          n.style.filter = p >= 1 ? "none" : "blur(" + ((1 - p) * u(10)).toFixed(2) + "px)";
        } else if (style === "neon") {
          n.style.opacity = flicker(p).toFixed(3);
          n.style.transform = "translateX(" + ((1 - V.ease.outExpo(p)) * -u(14)).toFixed(2) + "px)";
        } else {
          n.style.opacity = Math.min(1, p * 2).toFixed(3);
          n.style.transform = "translateY(" + ((1 - e) * 0.42).toFixed(3) + "em) scale(" + (0.9 + 0.1 * e).toFixed(4) + ")";
        }
      }
      if (prog) prog.style.transform = "scaleX(" + V.progress(t, 0, D).toFixed(4) + ")";
      ph.node.style.setProperty("--p", pin.toFixed(3));
    });
    return root;
  };

  // ───────────────────────── templates ─────────────────────────
  var T = (S.templates = {});

  function header(stage, tl, p, opts) {
    opts = opts || {};
    if (!p.title && !p.kicker) return null;
    var h = el("div.v-header", { parent: stage });
    if (opts.center) h.classList.add("v-center");
    var k = p.kicker ? S.kicker(h, p.kicker) : null;
    var title = p.title ? S.title(h, p.title, { size: opts.size || "lg", maxLines: opts.maxLines || 2, center: opts.center }) : null;
    var t0 = opts.at != null ? opts.at : 0.15;
    if (k) S.enter(tl, k, t0, { style: cfg.kind === "whiteboard" ? "write" : "fade" });
    if (title) S.reveal(tl, title, t0 + 0.1);
    return { el: h, title: title, kicker: k };
  }

  T["title-card"] = function (stage, p, tl) {
    var wrap = el("div.v-header.v-center", { parent: stage, style: { maxWidth: V.isLandscape ? "88%" : "100%" } });
    var k = p.kicker ? S.kicker(wrap, p.kicker) : null;
    var title = S.title(wrap, p.title || "", { size: "hero", center: true, maxLines: V.isPortrait ? 5 : 3 });
    var line = cfg.kind === "whiteboard" ? null : el("i.v-line.v-center", { parent: wrap, style: { marginTop: u(18) + "px" } });
    var sub = p.subtitle ? S.text(wrap, p.subtitle, { muted: true, center: true, maxLines: 3 }) : null;
    if (sub) { sub.style.maxWidth = V.isLandscape ? "75%" : "100%"; sub.style.margin = "0 auto"; sub.style.fontSize = "var(--fs-md)"; sub.style.fontWeight = "500"; V.fit(sub, { maxLines: 3 }); }
    var t0 = 0.2;
    if (k) S.enter(tl, k, t0, { style: cfg.kind === "neon" ? "glitch" : cfg.kind === "whiteboard" ? "write" : "fade" });
    var em = title.querySelector(".v-em");
    S.reveal(tl, title, t0 + 0.12);
    if (line) tl.fromTo(line, { scaleX: 0 }, { scaleX: 1 }, { at: t0 + 0.65, dur: 0.8, ease: "inOutCubic" });
    var tSub = sub ? Math.max(t0 + 0.8, (V.find(autoKey(p.subtitle) || "", 0.5) || 0) - 0.2) : 0;
    if (sub) S.enter(tl, sub, Math.min(tSub, t0 + 2.2), { style: cfg.kind === "whiteboard" ? "write" : cfg.kind === "documentary" ? "blur" : "rise" });
    var kw = p.keyword || (em ? em.textContent : null);
    if (kw && em) S.highlight(tl, em, Math.max(t0 + 1, V.at(kw, 0.3) - 0.1), { container: stage });
    if (cfg.kind === "whiteboard") {
      var r = relRect(title, stage);
      var rnd = V.makeRand(hashStr(p.title));
      var y = r.y + r.h + u(14);
      S.drawPath(tl, stage, roughLine(r.x + r.w * 0.2, y, r.x + r.w * 0.8, y + u(6), rnd, u(3)), t0 + 0.9, { color: "var(--accent)", width: u(7), dur: 0.6 });
    }
    if (cfg.kind === "neon" || cfg.kind === "minimal") {
      // corner brackets / accent dots
      var c = el("div", { parent: stage, style: { position: "absolute", left: "var(--pad-x)", top: "var(--pad-y)", width: u(70) + "px", height: u(70) + "px", borderLeft: u(5) + "px solid var(--accent)", borderTop: u(5) + "px solid var(--accent)", opacity: 0.9 } });
      var c2 = el("div", { parent: stage, style: { position: "absolute", right: "var(--pad-x)", bottom: "var(--pad-bottom)", width: u(70) + "px", height: u(70) + "px", borderRight: u(5) + "px solid var(--accent-2, var(--accent))", borderBottom: u(5) + "px solid var(--accent-2, var(--accent))", opacity: 0.9 } });
      tl.fromTo([c, c2], { opacity: 0, scale: 0.5 }, { opacity: 0.9, scale: 1 }, { at: t0 + 0.4, dur: 0.7, ease: "outBack" });
    }
  };

  T["kinetic-text"] = function (stage, p, tl) {
    stage.parentNode.parentNode.classList.add("t-kinetic");
    var text = str(p.text);
    // If the template text matches the narration, use real timings directly.
    S.kinetic(stage, { text: text, emphasis: p.emphasis });
  };

  T["bullet-list"] = function (stage, p, tl) {
    stage.classList.add("v-top");
    var h = header(stage, tl, p, { size: "lg" });
    var items = arr(p.items).slice(0, 7).map(function (it) { return typeof it === "string" ? { text: it } : it || {}; });
    var list = el("div.v-list", { parent: stage });
    if (items.length >= 5) list.style.setProperty("--item-fs", "calc(var(--u) * " + (items.length >= 6 ? 50 : 56) + ")");
    var nodes = items.map(function (it, i) {
      var row = el("div.v-item", { parent: list });
      var mark;
      if (it.icon) mark = S.badge(it.icon, row);
      else if (p.numbered === false) mark = S.badge("check", row);
      else mark = el("div.v-num", { parent: row, text: String(i + 1) });
      var tx = S.text(row, it.text || "", {});
      return { row: row, mark: mark, text: tx };
    });
    var avail = list.clientHeight;
    if (list.scrollHeight > avail + 1) nodes.forEach(function (n) { V.fit(n.text, { maxLines: 2, min: u(24) }); });
    nodes.forEach(function (n) { V.fit(n.text, { maxLines: 3, min: u(24) }); });
    var times = S.syncTimes(items.map(function (it) { return it.keyword || autoKey(it.text); }), { start: h ? 0.9 : 0.3 });
    nodes.forEach(function (n, i) {
      var at = times[i];
      if (cfg.kind === "whiteboard") {
        S.enter(tl, n.mark, at, { style: "pop" });
        S.enter(tl, n.text, at + 0.1, { style: "write" });
      } else {
        S.enter(tl, n.mark, at, { style: "pop" });
        S.enter(tl, n.text, at + 0.06, { style: cfg.kind === "neon" ? "glitch" : cfg.kind === "documentary" ? "blur" : "slide-left", distance: u(30) });
      }
      // dim previous item slightly when the next appears
      if (i > 0 && p.focus !== false) {
        tl.to(nodes[i - 1].row, { opacity: 0.55 }, { at: at, dur: 0.4, ease: "outQuad" });
      }
    });
    if (nodes.length > 1 && p.focus !== false) {
      // restore all at the end for a final overview
      var tEnd = Math.max(times[times.length - 1] + 1.4, V.duration - 1.2);
      if (tEnd < V.duration - 0.3) tl.to(nodes.slice(0, -1).map(function (n) { return n.row; }), { opacity: 1 }, { at: tEnd, dur: 0.5 });
    }
  };

  T["bar-chart"] = function (stage, p, tl) {
    stage.classList.add("v-top");
    var root = stage.parentNode.parentNode;
    var horizontal = p.orientation === "horizontal" || (p.orientation !== "vertical" && V.isPortrait);
    root.classList.add("t-bars");
    if (horizontal) root.classList.add("is-h");
    var h = header(stage, tl, p, { size: "lg" });
    var bars = arr(p.bars).slice(0, horizontal ? 8 : 10).map(function (b) { return b || {}; });
    var max = 0;
    bars.forEach(function (b) { max = Math.max(max, Math.abs(Number(b.value) || 0)); });
    max = max || 1;
    var hasHi = bars.some(function (b) { return b.highlight; });
    var fmt = p.valueFormat || {};
    var decimals = fmt.decimals != null ? fmt.decimals : bars.some(function (b) { return Number(b.value) % 1; }) ? 1 : 0;
    var chart = el("div.v-chart", { parent: stage });
    var times = S.syncTimes(bars.map(function (b) { return b.keyword || autoKey(b.label); }), { start: h ? 0.9 : 0.4, minGap: 0.15 });
    if (!horizontal) {
      chart.style.flexDirection = "column";
      chart.style.alignItems = "stretch";
      var row = el("div", { parent: chart, style: { flex: "1 1 auto", display: "flex", alignItems: "stretch", justifyContent: "center", gap: u(36) + "px", minHeight: "0" } });
      var axis = el("div", { parent: chart, style: { height: u(3) + "px", background: "var(--line)", flex: "none", transformOrigin: "0 50%" } });
      var labels = el("div", { parent: chart, style: { display: "flex", justifyContent: "center", gap: u(36) + "px", flex: "none", paddingTop: u(16) + "px" } });
      tl.fromTo(axis, { scaleX: 0 }, { scaleX: 1 }, { at: Math.max(0.1, times[0] - 0.5), dur: 0.7, ease: "inOutCubic" });
      bars.forEach(function (b, i) {
        var v = Number(b.value) || 0;
        var col = el("div.v-barcol", { parent: row });
        var area = el("div.v-bararea", { parent: col });
        var hi = hasHi ? !!b.highlight : v === max;
        var bar = el("div.v-bar", { parent: area, style: { height: (Math.abs(v) / max) * 100 + "%" } });
        if (hi) bar.classList.add("is-hi");
        else bar.style.setProperty("--bar", b.color || "var(--bar-muted, var(--muted))");
        var val = el("div.v-val", { parent: bar, text: S.formatValue(v, { prefix: fmt.prefix, suffix: fmt.suffix, decimals: decimals }) });
        if (hi) val.style.color = "var(--accent)";
        var lab = el("div.v-label", { parent: labels, text: plain(b.label), style: { flex: "1 1 0", maxWidth: u(220) + "px" } });
        if (cfg.kind === "whiteboard") { bar.style.border = u(4) + "px solid var(--ink)"; }
        var at = times[i];
        tl.fromTo(bar, { height: "0%" }, { height: (Math.abs(v) / max) * 100 + "%" }, { at: at, dur: 0.9, ease: "outCubic" });
        tl.fromTo(val, { text: 0, opacity: 0 }, { text: v, opacity: 1, decimals: decimals, prefix: fmt.prefix || "", suffix: fmt.suffix || "" }, { at: at, dur: 0.9, ease: "outCubic" });
        S.enter(tl, lab, at, { style: "fade" });
      });
      // fit labels
      V.fit(V.$$(".v-label", labels), { min: u(16) });
    } else {
      bars.forEach(function (b, i) {
        var v = Number(b.value) || 0;
        var hi = hasHi ? !!b.highlight : v === max;
        var r = el("div.v-hrow", { parent: chart });
        var head = el("div.v-hhead", { parent: r });
        var lab = el("div.v-label", { parent: head, text: plain(b.label) });
        var val = el("div.v-hval", { parent: head, text: S.formatValue(v, { prefix: fmt.prefix, suffix: fmt.suffix, decimals: decimals }) });
        if (hi) val.style.color = "var(--accent)";
        var track = el("div.v-track", { parent: r });
        var w = (Math.abs(v) / max) * 100;
        var bar = el("div.v-bar", { parent: track, style: { width: w + "%" } });
        if (hi) bar.classList.add("is-hi");
        else bar.style.setProperty("--bar", b.color || "var(--bar-muted, var(--muted))");
        var at = times[i];
        S.enter(tl, r, at - 0.1, { style: "fade", dur: 0.4 });
        tl.fromTo(bar, { width: "0%" }, { width: w + "%" }, { at: at, dur: 0.9, ease: "outCubic" });
        tl.fromTo(val, { text: 0 }, { text: v, decimals: decimals, prefix: fmt.prefix || "", suffix: fmt.suffix || "" }, { at: at, dur: 0.9, ease: "outCubic" });
      });
    }
    if (p.source) {
      var src = el("div.v-text.v-muted", { parent: stage, text: plain(p.source), style: { fontSize: "var(--fs-label)", alignSelf: "flex-start", flex: "none" } });
      S.enter(tl, src, times[times.length - 1] + 0.6 || 1.5, { style: "fade" });
    }
  };

  T["stat-counter"] = function (stage, p, tl) {
    stage.parentNode.parentNode.classList.add("t-stat");
    stage.style.gap = u(24) + "px";
    var halo = el("div", { parent: stage, style: { position: "absolute", left: "50%", top: "46%", width: Math.min(V.width, V.height) * 0.75 + "px", height: Math.min(V.width, V.height) * 0.75 + "px", marginLeft: -Math.min(V.width, V.height) * 0.375 + "px", marginTop: -Math.min(V.width, V.height) * 0.375 + "px", borderRadius: "50%", background: "radial-gradient(circle, var(--halo, rgba(47,107,255,0.14)) 0%, transparent 62%)", zIndex: 0 } });
    var k = p.kicker ? S.kicker(stage, p.kicker) : null;
    var value = Number(p.value) || 0;
    var decimals = p.decimals != null ? p.decimals : value % 1 ? 1 : 0;
    var num = el("div.v-statnum", { parent: stage, text: (p.prefix || "") + V.format(value, decimals, true) + (p.suffix || "") });
    num.style.width = "100%";
    num.style.position = "relative";
    V.fit(num, { min: u(60) });
    var label = el("div.v-statlabel", { parent: stage });
    label.appendChild(S.rich(p.label || ""));
    V.fit(label, { maxLines: 2, min: u(28) });
    var sub = p.sublabel ? S.text(stage, p.sublabel, { muted: true, center: true, cls: "v-statsub", maxLines: 2 }) : null;
    // The number is on screen almost immediately and lands (finishes counting) on its spoken keyword.
    var kwT = p.keyword ? V.find(p.keyword, 0) : null;
    var tNum = Math.min(0.35, V.duration * 0.1);
    var countDur = Math.max(1.2, Math.min(kwT != null ? kwT - tNum + 0.3 : 1.8, 3.2, V.duration * 0.6));
    if (k) S.enter(tl, k, Math.max(0.1, tNum - 0.3), { style: "fade" });
    tl.fromTo(halo, { scale: 0.3, opacity: 0 }, { scale: 1, opacity: 1 }, { at: tNum, dur: 1.4, ease: "outCubic" });
    S.enter(tl, num, tNum, { style: cfg.kind === "neon" ? "glitch" : cfg.kind === "documentary" ? "blur" : cfg.kind === "whiteboard" ? "fade" : "zoom" });
    S.counter(tl, num, { from: p.from || 0, to: value, decimals: decimals, prefix: p.prefix, suffix: p.suffix, at: tNum, dur: countDur });
    var tLab = Math.max(tNum + 0.5, Math.min(tNum + countDur - 0.2, (V.find(autoKey(p.label) || "", 0) || 0) - 0.15));
    S.enter(tl, label, tLab, { style: cfg.kind === "whiteboard" ? "write" : "rise" });
    var tSub = sub ? Math.max(tLab + 0.5, (V.find(autoKey(p.sublabel) || "", tLab) || 0) - 0.15) : 0;
    if (sub) S.enter(tl, sub, tSub, { style: "fade" });
    if (cfg.kind === "whiteboard") {
      var rg = document.createRange();
      rg.selectNodeContents(num);
      var tr = rg.getBoundingClientRect(), sr = stage.getBoundingClientRect();
      var rnd = V.makeRand(7);
      S.drawPath(tl, stage, roughEllipsePath(tr.left - sr.left + tr.width / 2, tr.top - sr.top + tr.height / 2, tr.width / 2 + u(46), tr.height * 0.42, rnd), tNum + countDur, { color: "var(--accent-2)", width: u(6), dur: 0.8 });
    }
  };

  T.quote = function (stage, p, tl) {
    stage.parentNode.parentNode.classList.add("t-quote");
    var wrap = el("div.v-col", { parent: stage, style: { alignItems: V.isPortrait ? "flex-start" : "center", gap: u(36) + "px", width: "100%" } });
    var qm = el("svg.v-qmark", { parent: wrap, viewBox: "0 0 48 48", fill: "currentColor" });
    qm.innerHTML = '<path d="M20 10C11.7 12.3 6 18.8 6 27.5V38h14V24h-7c.4-4.9 3.4-8.4 8.3-9.8zM42 10c-8.3 2.3-14 8.8-14 17.5V38h14V24h-7c.4-4.9 3.4-8.4 8.3-9.8z"/>';
    var q = el("blockquote.v-quote", { parent: wrap, style: { textAlign: V.isPortrait ? "left" : "center" } });
    q.appendChild(S.rich(p.quote || ""));
    V.fit(q, { maxLines: V.isPortrait ? 8 : 5, min: u(30) });
    var by = null;
    if (p.author) {
      by = el("div.v-col", { parent: wrap, style: { gap: u(6) + "px", alignItems: V.isPortrait ? "flex-start" : "center" } });
      el("div.v-author", { parent: by, text: "— " + plain(p.author) });
      if (p.role) el("div.v-role", { parent: by, text: plain(p.role) });
    }
    S.enter(tl, qm, 0.15, { style: cfg.kind === "whiteboard" ? "pop" : "drop" });
    var spans = S.splitWords(q);
    var times = S.speakWords(tl, spans, { start: 0.45 });
    if (by) S.enter(tl, by, Math.min(V.duration - 0.8, times[times.length - 1] + 0.35), { style: "fade" });
    var em = q.querySelector(".v-em");
    if (em) S.highlight(tl, em, (times[spans.indexOf(em.querySelector(".v-word"))] || 1) + 0.25, { container: stage });
  };

  T.timeline = function (stage, p, tl) {
    stage.classList.add("v-top");
    stage.parentNode.parentNode.classList.add("t-timeline");
    var h = header(stage, tl, p, { size: "lg" });
    var evs = arr(p.events).slice(0, 7).map(function (e) { return e || {}; });
    var n = Math.max(1, evs.length);
    var box = el("div.v-tl", { parent: stage });
    var times = S.syncTimes(evs.map(function (e) { return e.keyword || autoKey(e.date) || autoKey(e.label); }), { start: h ? 0.9 : 0.4, minGap: 0.3 });
    var vertical = !V.isLandscape;
    var line, prog, pos = [];
    if (!vertical) {
      var pad = 100 / n / 2;
      line = el("div.v-tl-line", { parent: box, style: { left: pad + "%", right: pad + "%", top: "50%", height: u(6) + "px", marginTop: -u(3) + "px" } });
      prog = el("div.v-tl-prog", { parent: box, style: { left: pad + "%", width: "0%", top: "50%", height: u(6) + "px", marginTop: -u(3) + "px" } });
      evs.forEach(function (e, i) {
        var x = pad + (i * (100 - 2 * pad)) / Math.max(1, n - 1);
        if (n === 1) x = 50;
        pos.push(x);
        var ev = el("div.v-ev", { parent: box, style: { left: x + "%", top: "0", bottom: "0", width: 100 / n - 1.5 + "%", transform: "translateX(-50%)", display: "grid", gridTemplateRows: "1fr auto 1fr", gap: u(22) + "px", justifyItems: "center" } });
        var date = el("div.v-date", { parent: ev, text: plain(e.date), style: { alignSelf: "end" } });
        var dot = el("div.v-dot", { parent: ev });
        var lab = el("div.v-evlabel", { parent: ev, text: plain(e.label), style: { alignSelf: "start" } });
        V.fit(date, { min: u(22) });
        V.fit(lab, { maxLines: 3, min: u(18) });
        e._n = { ev: ev, date: date, dot: dot, lab: lab };
      });
      tl.fromTo(line, { scaleX: 0 }, { scaleX: 1 }, { at: Math.max(0.1, times[0] - 0.6), dur: 0.8, ease: "inOutCubic" });
      line.style.transformOrigin = "0 50%";
    } else {
      var lx = u(22);
      line = el("div.v-tl-line", { parent: box, style: { left: lx - u(3) + "px", width: u(6) + "px", top: "4%", bottom: "4%" } });
      prog = el("div.v-tl-prog", { parent: box, style: { left: lx - u(3) + "px", width: u(6) + "px", top: "4%", height: "0%" } });
      evs.forEach(function (e, i) {
        var y = 4 + ((i + 0.5) * 92) / n;
        pos.push(y);
        var ev = el("div.v-ev", { parent: box, style: { left: "0", right: "0", top: y + "%", transform: "translateY(-50%)", flexDirection: "row", alignItems: "center", textAlign: "left", gap: u(34) + "px" } });
        var dot = el("div.v-dot", { parent: ev, style: { marginLeft: lx - u(17) + "px" } });
        var col = el("div", { parent: ev, style: { display: "flex", flexDirection: "column", gap: u(4) + "px", minWidth: "0", flex: "1 1 auto" } });
        var date = el("div.v-date", { parent: col, text: plain(e.date) });
        var lab = el("div.v-evlabel", { parent: col, text: plain(e.label) });
        V.fit(lab, { maxLines: 2, min: u(18) });
        e._n = { ev: ev, date: date, dot: dot, lab: lab };
      });
      line.style.transformOrigin = "50% 0";
      tl.fromTo(line, { scaleY: 0 }, { scaleY: 1 }, { at: Math.max(0.1, times[0] - 0.6), dur: 0.8, ease: "inOutCubic" });
    }
    evs.forEach(function (e, i) {
      var at = times[i];
      var nn = e._n;
      tl.fromTo(nn.dot, { scale: 0 }, { scale: 1 }, { at: at, dur: 0.5, ease: "outBack" });
      S.enter(tl, nn.date, at + 0.05, { style: cfg.kind === "whiteboard" ? "write" : cfg.kind === "neon" ? "glitch" : "rise", distance: u(24) });
      S.enter(tl, nn.lab, at + 0.15, { style: "fade" });
      if (i > 0) {
        if (!vertical) tl.to(prog, { width: pos[i] - pos[0] + "%" }, { at: at - 0.45, dur: 0.5, ease: "inOutCubic" });
        else tl.to(prog, { height: pos[i] - 4 + "%" }, { at: at - 0.45, dur: 0.5, ease: "inOutCubic" });
      } else if (vertical) tl.to(prog, { height: pos[0] - 4 + "%" }, { at: at - 0.3, dur: 0.3 });
      tl.to(nn.dot, { backgroundColor: S.css("--accent") || "#2F6BFF" }, { at: at + 0.3, dur: 0.3 });
    });
  };

  T.comparison = function (stage, p, tl) {
    stage.parentNode.parentNode.classList.add("t-compare");
    var h = header(stage, tl, p, { size: "lg", center: !V.isPortrait });
    var cmp = el("div.v-cmp", { parent: stage });
    var sides = [p.left || {}, p.right || {}];
    var keys = [];
    sides.forEach(function (s) {
      keys.push(s.keyword || autoKey(s.title));
      arr(s.points).slice(0, 5).forEach(function (pt) { keys.push((pt && pt.keyword) || autoKey(typeof pt === "string" ? pt : pt && pt.text)); });
    });
    var times = S.syncTimes(keys, { start: h ? 0.8 : 0.3, minGap: 0.2 });
    var ti = 0;
    sides.forEach(function (s, si) {
      var card = S.card(cmp, { cls: "v-side" + (si ? " is-right" : " is-left") });
      var head = el("div.v-side-head", { parent: card });
      if (s.icon) S.badge(s.icon, head);
      var st = el("div.v-side-title", { parent: head });
      st.appendChild(S.rich(s.title || (si ? "After" : "Before")));
      V.fit(st, { maxLines: 2, min: u(24) });
      var pts = arr(s.points).slice(0, 5).map(function (pt) {
        var txt = typeof pt === "string" ? pt : (pt && pt.text) || "";
        var row = el("div.v-pt", { parent: card });
        S.icon(si === 0 && p.leftNegative !== false && p.style !== "neutral" ? "x" : "check", { parent: row, size: u(40), color: si === 0 && p.leftNegative !== false && p.style !== "neutral" ? "var(--neg, #E5484D)" : "var(--pos, #16B88A)" });
        var tx = el("span", { parent: row });
        tx.appendChild(S.rich(txt));
        return row;
      });
      var tCard = times[ti++];
      S.cardIn(tl, card, tCard, { style: cfg.kind === "neon" ? "glitch" : si ? "slide-right" : "slide-left" });
      pts.forEach(function (row) { S.enter(tl, row, Math.max(tCard + 0.3, times[ti++]), { style: "rise", distance: u(20) }); });
      if (si === 1 && p.vs !== false && p.vs !== "") {
        var vs = el("div.v-vs", { parent: cmp, text: p.vs || "VS" });
        tl.fromTo(vs, { scale: 0, rotate: -40 }, { scale: 1, rotate: 0 }, { at: Math.max(0.2, tCard - 0.25), dur: 0.6, ease: "outBack" });
      }
    });
    // shrink texts if overflowing
    V.$$(".v-side", cmp).forEach(function (c) {
      if (c.scrollHeight > c.clientHeight + 1) V.$$(".v-pt", c).forEach(function (r) { r.style.fontSize = "calc(var(--fs-body) * " + Math.max(0.6, c.clientHeight / c.scrollHeight).toFixed(3) + ")"; });
    });
  };

  T["icon-grid"] = function (stage, p, tl) {
    stage.parentNode.parentNode.classList.add("t-grid");
    var h = header(stage, tl, p, { size: "lg", center: true });
    var items = arr(p.items).slice(0, 9).map(function (it) { return it || {}; });
    var n = items.length || 1;
    var cols = V.isLandscape ? (n <= 4 ? n : n <= 6 ? 3 : 4) : V.isSquare ? (n <= 3 ? n : n === 4 ? 2 : 3) : n <= 3 ? 1 : 2;
    if (!V.isLandscape && n <= 3) cols = V.isSquare ? n : 1;
    var grid = el("div.v-grid", { parent: stage, style: { gridTemplateColumns: "repeat(" + cols + ", minmax(0, 1fr))" } });
    var times = S.syncTimes(items.map(function (it) { return it.keyword || autoKey(it.label); }), { start: h ? 0.8 : 0.3, minGap: 0.12 });
    items.forEach(function (it, i) {
      var cell = S.card(grid, { cls: "v-cell" });
      if (cols === 1) { cell.style.flexDirection = "row"; cell.style.justifyContent = "flex-start"; cell.style.textAlign = "left"; }
      var b = S.badge(it.icon || "sparkles", cell, { size: u(72) });
      b.style.color = cfg.kind === "minimal" || cfg.kind === "whiteboard" ? S.color(i) : "";
      if (cfg.kind === "minimal") b.style.background = "color-mix(in srgb, " + S.color(i) + " 13%, transparent)";
      var tx = S.text(cell, it.label || "", { maxLines: 2 });
      if (it.sublabel) { var s2 = S.text(cell, it.sublabel, { muted: true, maxLines: 2 }); s2.style.fontSize = "var(--fs-label)"; s2.style.fontWeight = "500"; }
      S.cardIn(tl, cell, times[i], { style: "pop" });
    });
  };

  var KW = /\b(const|let|var|function|return|if|else|for|while|do|switch|case|break|continue|class|extends|new|this|import|from|export|default|async|await|try|catch|finally|throw|typeof|instanceof|in|of|def|lambda|elif|pass|yield|with|as|and|or|not|is|None|True|False|true|false|null|undefined|print|fn|pub|struct|impl|use|mut|match|SELECT|FROM|WHERE|INSERT|UPDATE|JOIN|GROUP|BY|ORDER|interface|type|enum|public|private|static|void|int|string|bool)\b/;
  function highlightCode(line) {
    var frag = document.createDocumentFragment();
    var re = /(\/\/.*$|#.*$|--.*$)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)|(\b\d+(?:\.\d+)?\b)|([A-Za-z_$][\w$]*)(?=\s*\()|([A-Za-z_$][\w$]*)/g;
    var last = 0, m;
    while ((m = re.exec(line))) {
      if (m.index > last) frag.appendChild(document.createTextNode(line.slice(last, m.index)));
      var cls = m[1] ? "tk-c" : m[2] ? "tk-s" : m[3] ? "tk-n" : m[4] ? (KW.test(m[4]) ? "tk-k" : "tk-f") : KW.test(m[5]) && m[5].match(KW)[0] === m[5] ? "tk-k" : null;
      if (cls) frag.appendChild(el("span." + cls, { text: m[0] }));
      else frag.appendChild(document.createTextNode(m[0]));
      last = m.index + m[0].length;
      if (m[1]) break;
    }
    if (last < line.length) frag.appendChild(document.createTextNode(line.slice(last)));
    return frag;
  }
  S.highlightCode = highlightCode;

  T["code-block"] = function (stage, p, tl) {
    stage.parentNode.parentNode.classList.add("t-code");
    var h = header(stage, tl, p, { size: "md", center: true });
    var lines = str(p.code).replace(/\t/g, "  ").replace(/\s+$/, "").split("\n").slice(0, 24);
    var ed = el("div.v-editor", { parent: stage });
    var chrome = el("div.v-chrome", { parent: ed });
    ["#FF5F57", "#FEBC2E", "#28C840"].forEach(function (c) { el("i", { parent: chrome, style: { background: c } }); });
    el("span", { parent: chrome, text: p.filename || (p.language ? "main." + ({ javascript: "js", typescript: "ts", python: "py", rust: "rs", go: "go", sql: "sql", bash: "sh", html: "html", css: "css", java: "java" }[str(p.language).toLowerCase()] || str(p.language).toLowerCase()) : "code") });
    var pre = el("pre", { parent: ed, style: { flex: "1 1 auto", minHeight: "0" } });
    var hi = {};
    arr(p.highlightLines).forEach(function (n) { hi[n] = 1; });
    var rows = lines.map(function (ln, i) {
      var row = el("span.v-cl", { parent: pre });
      if (hi[i + 1]) row.classList.add("is-hi");
      el("span.v-ln", { parent: row, text: String(i + 1) });
      var typed = el("span", { parent: row, style: { display: "inline-block", overflow: "hidden", verticalAlign: "top", whiteSpace: "pre" } });
      typed.appendChild(highlightCode(ln));
      var cur = el("span.v-cursor", { parent: row });
      cur.style.display = "none";
      return { row: row, typed: typed, cur: cur, len: ln.length };
    });
    V.fit(pre, { min: u(14) });
    var t0 = h ? 0.9 : 0.4;
    S.enter(tl, ed, t0 - 0.3, { style: cfg.kind === "neon" ? "glitch" : "rise" });
    var total = 0;
    rows.forEach(function (r) { total += Math.max(4, r.len); });
    var span = Math.max(0.6, Math.min(V.duration * 0.72 - t0, total * 0.035));
    var t = t0;
    var marks = [];
    rows.forEach(function (r) {
      var d = (Math.max(4, r.len) / total) * span;
      var n = Math.max(1, r.len);
      tl.fromTo(r.typed, { width: "0ch" }, { width: r.len + "ch" }, { at: t, dur: Math.max(0.01, d * 0.9), ease: function (x) { return Math.floor(x * n) / n; } });
      marks.push({ a: t, b: t + d });
      t += d;
    });
    var tDone = t;
    rows.forEach(function (r, i) {
      if (r.row.classList.contains("is-hi")) {
        var kwT = p.highlightKeyword ? V.find(p.highlightKeyword, 0) : null;
        tl.fromTo(r.row, { "--hi": 0 }, { "--hi": 1 }, { at: Math.max(tDone + 0.2, kwT != null ? kwT - 0.1 : tDone + 0.4), dur: 0.4 });
      }
    });
    V.onFrame(function (tt) {
      var active = rows.length - 1;
      for (var i = 0; i < marks.length; i++) if (tt < marks[i].b) { active = i; break; }
      for (var j = 0; j < rows.length; j++) {
        var show = j === active && tt >= t0 - 0.3;
        var blinkOn = tt < tDone ? true : Math.floor(tt * 2.2) % 2 === 0;
        rows[j].cur.style.display = show && blinkOn ? "inline-block" : "none";
      }
    });
  };

  T["section-break"] = function (stage, p, tl) {
    var root = stage.parentNode.parentNode;
    root.classList.add("t-section");
    var wrap = el("div.v-header.v-center", { parent: stage, style: { gap: u(20) + "px" } });
    var num = p.number != null && p.number !== "" ? el("div.v-secnum", { parent: wrap, text: typeof p.number === "number" ? (p.number < 10 ? "0" : "") + p.number : plain(p.number) }) : null;
    var k = p.kicker ? S.kicker(wrap, p.kicker) : null;
    var title = S.title(wrap, p.title || "", { size: "xl", center: true, maxLines: 3 });
    var sub = p.subtitle ? S.text(wrap, p.subtitle, { muted: true, center: true, maxLines: 2 }) : null;
    var wipe = el("div.v-wipe", { parent: root });
    tl.fromTo(wipe, { xPercent: -101 }, { xPercent: 0 }, { at: 0, dur: 0.45, ease: "inOutCubic" });
    tl.to(wipe, { xPercent: 101 }, { at: 0.5, dur: 0.55, ease: "inOutCubic" });
    var t0 = 0.6;
    if (num) S.enter(tl, num, t0, { style: cfg.kind === "neon" ? "glitch" : cfg.kind === "whiteboard" ? "write" : "zoom" });
    if (k) S.enter(tl, k, t0 + 0.2, { style: "fade" });
    S.reveal(tl, title, t0 + 0.3);
    if (sub) S.enter(tl, sub, t0 + 0.9, { style: "fade" });
  };

  T.diagram = function (stage, p, tl) {
    stage.classList.add("v-top");
    stage.parentNode.parentNode.classList.add("t-diagram");
    var h = header(stage, tl, p, { size: "lg", center: true });
    var nodes = arr(p.nodes).slice(0, 8).map(function (n, i) { n = n || {}; return { id: str(n.id || "n" + i), label: n.label || n.id || "", icon: n.icon, keyword: n.keyword }; });
    var n = nodes.length;
    var layout = p.layout || "flow";
    var box = el("div.v-dg", { parent: stage });
    var W = box.clientWidth || V.width * 0.8, H = box.clientHeight || V.height * 0.6;
    var pos = [];
    if (layout === "cycle" || layout === "hub") {
      var ring = layout === "hub" ? nodes.slice(1) : nodes;
      var r = Math.min(W, H) * 0.36;
      var rx = Math.min(W * 0.4, r * (V.isLandscape ? 1.5 : 1)), ry = V.isPortrait ? Math.min(H * 0.36, W * 0.62) : r;
      if (layout === "hub") pos[0] = { x: W / 2, y: H / 2 };
      ring.forEach(function (nd, i) {
        var a = -Math.PI / 2 + (i / ring.length) * Math.PI * 2;
        pos[layout === "hub" ? i + 1 : i] = { x: W / 2 + Math.cos(a) * rx, y: H / 2 + Math.sin(a) * ry };
      });
    } else {
      var horiz = V.isLandscape || (V.isSquare && n <= 3);
      nodes.forEach(function (nd, i) {
        pos[i] = horiz ? { x: (W * (i + 0.5)) / n, y: H / 2 } : { x: W / 2, y: (H * (i + 0.5)) / n };
      });
    }
    var maxW = layout === "flow" && V.isLandscape ? W / n - u(70) : Math.min(u(340), W * 0.42);
    var els = nodes.map(function (nd, i) {
      var c = S.card(box, { cls: "v-node" });
      c.style.left = pos[i].x + "px";
      c.style.top = pos[i].y + "px";
      c.style.maxWidth = maxW + "px";
      if (nd.icon) S.badge(nd.icon, c, { size: u(54) });
      var tx = S.text(c, nd.label, { maxLines: 2 });
      tx.style.maxWidth = maxW - u(60) + "px";
      V.fit(tx, { maxLines: 2, min: u(18) });
      if (layout === "hub" && i === 0) { c.classList.add("is-hub"); c.style.background = "var(--accent)"; c.style.color = "var(--on-accent, #fff)"; tx.style.color = "inherit"; }
      return c;
    });
    var times = S.syncTimes(nodes.map(function (nd) { return nd.keyword || autoKey(nd.label); }), { start: h ? 0.8 : 0.3, minGap: 0.35 });
    var edges = arr(p.edges);
    var idIdx = {};
    nodes.forEach(function (nd, i) { idIdx[nd.id] = i; });
    if (!edges.length) {
      if (layout === "hub") for (var e = 1; e < n; e++) edges.push({ from: nodes[0].id, to: nodes[e].id });
      else for (e = 0; e < n - 1; e++) edges.push({ from: nodes[e].id, to: nodes[e + 1].id });
      if (layout === "cycle" && n > 2) edges.push({ from: nodes[n - 1].id, to: nodes[0].id });
    }
    var svg = el("svg.v-edges", { parent: box, viewBox: "0 0 " + W + " " + H });
    els.forEach(function (c, i) { S.cardIn(tl, c, times[i], { style: "pop" }); });
    edges.forEach(function (ed) {
      var a = idIdx[str(ed.from)], b = idIdx[str(ed.to)];
      if (a == null || b == null || a === b) return;
      var ra = { w: els[a].offsetWidth, h: els[a].offsetHeight }, rb = { w: els[b].offsetWidth, h: els[b].offsetHeight };
      var A = pos[a], B = pos[b];
      var dx = B.x - A.x, dy = B.y - A.y;
      var len = Math.sqrt(dx * dx + dy * dy) || 1;
      function trim(r) {
        var tx = Math.abs(dx) > 0.01 ? r.w / 2 / Math.abs(dx) : Infinity;
        var ty = Math.abs(dy) > 0.01 ? r.h / 2 / Math.abs(dy) : Infinity;
        return Math.min(tx, ty) * len + u(16);
      }
      var sa = trim(ra), sb = trim(rb);
      if (sa + sb >= len - u(10)) return;
      var x1 = A.x + (dx / len) * sa, y1 = A.y + (dy / len) * sa, x2 = B.x - (dx / len) * sb, y2 = B.y - (dy / len) * sb;
      var tA = times[a], tB = times[b];
      var at = tB > tA ? Math.max(tA + 0.3, tB - 0.5) : Math.max(tA, tB) + 0.4;
      S.arrow(tl, svg, x1, y1, x2, y2, at, { dur: 0.5, curve: layout === "cycle" ? len * 0.12 : 0 });
      if (ed.label) {
        var lab = el("div.v-elabel", { parent: box, text: plain(ed.label), style: { left: (x1 + x2) / 2 + "px", top: (y1 + y2) / 2 + "px" } });
        S.enter(tl, lab, at + 0.3, { style: "fade" });
      }
    });
  };

  T["line-chart"] = function (stage, p, tl) {
    stage.classList.add("v-top");
    stage.parentNode.parentNode.classList.add("t-line");
    var h = header(stage, tl, p, { size: "lg" });
    var pts = arr(p.points).slice(0, 40).map(function (q) { return { x: str(q && q.x), y: Number(q && q.y) || 0 }; });
    if (pts.length < 2) pts = [{ x: "", y: 0 }, { x: "", y: 1 }];
    var fmt = p.valueFormat || {};
    var box = el("div.v-lc", { parent: stage, style: { marginLeft: u(130) + "px", width: "calc(100% - " + u(130) + "px)", marginBottom: u(60) + "px" } });
    var W = box.clientWidth || 800, H = box.clientHeight || 400;
    var minY = Math.min.apply(null, pts.map(function (q) { return q.y; })), maxY = Math.max.apply(null, pts.map(function (q) { return q.y; }));
    if (p.zeroBased !== false && minY > 0) minY = 0;
    if (maxY === minY) maxY = minY + 1;
    var padTop = (maxY - minY) * 0.12;
    maxY += padTop;
    function X(i) { return (i / (pts.length - 1)) * W; }
    function Y(v) { return H - ((v - minY) / (maxY - minY)) * H; }
    var svg = el("svg", { parent: box, viewBox: "0 0 " + W + " " + H, preserveAspectRatio: "none" });
    var defs = el("defs", { parent: svg });
    var gid = "lg" + V.seed;
    var grad = el("linearGradient", { parent: defs, id: gid, x1: "0", y1: "0", x2: "0", y2: "1" });
    el("stop", { parent: grad, offset: "0%", "stop-color": "var(--accent)", "stop-opacity": "0.32" });
    el("stop", { parent: grad, offset: "100%", "stop-color": "var(--accent)", "stop-opacity": "0" });
    for (var g = 0; g <= 4; g++) {
      var gy = (g / 4) * H;
      el("line.v-lc-grid", { parent: svg, x1: 0, x2: W, y1: gy, y2: gy });
      var val = maxY - (g / 4) * (maxY - minY);
      el("div.v-lc-y", { parent: box, text: S.formatValue(val, { prefix: fmt.prefix, suffix: fmt.suffix, decimals: fmt.decimals != null ? fmt.decimals : Math.abs(maxY - minY) < 10 ? 1 : 0 }), style: { top: gy + "px" } });
    }
    var d = "";
    pts.forEach(function (q, i) { d += (i ? " L" : "M") + X(i).toFixed(1) + " " + Y(q.y).toFixed(1); });
    var area = el("path.v-lc-area", { parent: svg, d: d + " L" + W + " " + H + " L0 " + H + " Z", fill: "url(#" + gid + ")" });
    var line = el("path.v-lc-line", { parent: svg, d: d });
    var every = Math.ceil(pts.length / (V.isLandscape ? 10 : 5));
    pts.forEach(function (q, i) {
      if (q.x && (i % every === 0 || i === pts.length - 1)) el("div.v-lc-x", { parent: box, text: q.x, style: { left: X(i) + "px", top: H + u(14) + "px" } });
    });
    var hiIdx = p.highlight && p.highlight.index != null ? Math.max(0, Math.min(pts.length - 1, p.highlight.index)) : pts.length - 1;
    var t0 = h ? 0.9 : 0.4;
    var kwT = p.highlight && p.highlight.keyword ? V.find(p.highlight.keyword, t0) : null;
    var t1 = Math.min(V.duration * 0.8, Math.max(t0 + 1.2, kwT != null ? kwT : t0 + Math.min(3, V.duration * 0.45)));
    tl.fromTo(line, { draw: 0 }, { draw: 1 }, { at: t0, dur: t1 - t0, ease: "inOutSine" });
    tl.fromTo(area, { clipPath: "inset(0% 100% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)" }, { at: t0, dur: t1 - t0, ease: "inOutSine" });
    var dot = el("div.v-lc-dot", { parent: box, style: { left: X(hiIdx) + "px", top: Y(pts[hiIdx].y) + "px" } });
    var tHi = t0 + (t1 - t0) * (hiIdx / (pts.length - 1));
    tl.fromTo(dot, { scale: 0 }, { scale: 1 }, { at: tHi, dur: 0.45, ease: "outBack" });
    var call = el("div.v-lc-call", { parent: box, text: (p.highlight && p.highlight.label) || S.formatValue(pts[hiIdx].y, fmt), style: { left: Math.max(u(80), Math.min(W - u(80), X(hiIdx))) + "px", top: Y(pts[hiIdx].y) + "px" } });
    S.enter(tl, call, tHi + 0.15, { style: "pop" });
  };

  // ───────────────────────── render entry points ─────────────────────────
  var TPL_CLASS = { "title-card": "t-title", "kinetic-text": "t-kinetic", "bullet-list": "t-bullets", "bar-chart": "t-bars", "stat-counter": "t-stat", quote: "t-quote", timeline: "t-timeline", comparison: "t-compare", "icon-grid": "t-grid", "code-block": "t-code", "section-break": "t-section", diagram: "t-diagram", "line-chart": "t-line" };
  S.templateIds = Object.keys(T);

  /** Render a template into root. Throws on unknown id (caller falls back). */
  S.render = function (id, root, props) {
    var fn = T[id];
    if (!fn) throw new Error("Unknown template: " + id);
    root = root || V.root();
    var stage = S.stage(root, { cls: TPL_CLASS[id] });
    var tl = V.timeline();
    fn(stage, props || {}, tl, root);
    S.guard(stage);
    return stage;
  };

  /** Fallback: kinetic captions of the narration. Never throws. */
  S.fallback = function (root, narration) {
    try {
      root = root || V.root();
      root.innerHTML = "";
      root.className = "";
      root.removeAttribute("style");
      var stage = S.stage(root, { cls: "t-kinetic" });
      var toks = V.words && V.words.length ? V.words : null;
      S.kinetic(stage, { tokens: toks, text: toks ? null : narration || V.narration || "", progress: true });
      return stage;
    } catch (e) {
      V.error("fallback: " + (e && e.message));
      try {
        root.innerHTML = "";
        var t = el("div", { parent: root, style: { position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center", padding: "8%", fontSize: u(64) + "px", fontWeight: "800", textAlign: "center", color: "var(--fg, #111)", background: "var(--bg, #fff)", fontFamily: "Inter, system-ui, sans-serif" } });
        t.textContent = str(narration || V.narration).split(/\s+/).slice(0, 12).join(" ");
      } catch (e2) {}
    }
  };
})();

;
/* Scene engine: cartoon — "Cartoon Characters".
 * A recurring cast of rigged SVG characters who act out the narration in illustrated,
 * parallax worlds: poses, expressions, blinking, lip-sync from V.words, speech/thought
 * bubbles, emotion marks, props, boards and a moving camera.
 * Pure function of time: everything is built once and updated from V.onFrame(t).
 */
(function () {
  "use strict";
  var V = window.V;
  var S = (window.SceneStyle = window.SceneStyle || {});
  var el = V.el;
  var SVGNS = "http://www.w3.org/2000/svg";

  S.init({
    id: "cartoon",
    kind: "minimal",
    enter: "pop",
    titleReveal: "mask",
    drift: 0,
    series: ["#FF7A59", "#3D7BF2", "#2DBE7E", "#F5B731", "#9B6CF2", "#1FB5C9"],
  });

  // ───────────────────────── utils ─────────────────────────
  var INK = "#2A2140";
  var OUT = 4.5; // outline width (world units) shared by cast + props
  var PI = Math.PI, D2R = PI / 180;
  function str(v) { return v == null ? "" : String(v); }
  function arr(v) { return Array.isArray(v) ? v : v == null ? [] : [v]; }
  function num(v, d) { v = Number(v); return isFinite(v) ? v : d; }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function lerp(a, b, p) { return a + (b - a) * p; }
  function sm(p) { p = clamp(p, 0, 1); return p * p * (3 - 2 * p); }
  function fx(n) { return Math.round(n * 100) / 100; }
  function hash01(n) { var x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); }
  // smooth 1D value noise in [-1,1]
  function noise(x, seed) {
    var i = Math.floor(x), f = x - i;
    var a = hash01(i * 1.7 + (seed || 0) * 13.13), b = hash01((i + 1) * 1.7 + (seed || 0) * 13.13);
    return (lerp(a, b, f * f * (3 - 2 * f)) - 0.5) * 2;
  }
  function esc(s) { return str(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function svgEl(tag, attrs, parent) {
    var n = document.createElementNS(SVGNS, tag);
    if (attrs) for (var k in attrs) if (attrs[k] != null) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }
  function g(parent, attrs) { return svgEl("g", attrs, parent); }
  function plain(t) { return str(t).replace(/\*([^*]+)\*/g, "$1"); }
  function u(n) { return n * V.unit; }
  var lastT = function () { return Math.max(0.05, V.duration - 0.05); };
  function clampT(t) { return clamp(num(t, 0), 0, lastT()); }
  function shade(hex, amt) {
    // amt -1..1 → darker / lighter
    var h = str(hex).replace("#", "");
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    var n = parseInt(h, 16);
    if (isNaN(n)) return hex;
    var r = (n >> 16) & 255, gg = (n >> 8) & 255, b = n & 255;
    var tgt = amt < 0 ? 0 : 255, p = Math.abs(amt);
    r = Math.round(lerp(r, tgt, p)); gg = Math.round(lerp(gg, tgt, p)); b = Math.round(lerp(b, tgt, p));
    return "#" + ((1 << 24) | (r << 16) | (gg << 8) | b).toString(16).slice(1);
  }
  function easeFn(e) {
    if (typeof e === "function") return e;
    if (e && V.ease[e]) return V.ease[e];
    return EASE[e] || V.ease.inOutCubic;
  }
  // cartoon easings: anticipation + overshoot
  var EASE = {
    pose: function (p) { // tiny anticipation, fast middle, soft overshoot
      p = clamp(p, 0, 1);
      var s = 1.25;
      var q = p - 1;
      var over = q * q * ((s + 1) * q + s) + 1; // outBack
      var a = p < 0.18 ? -0.05 * Math.sin((p / 0.18) * PI) : 0;
      return lerp(a, over, sm(p * 1.6));
    },
    snap: function (p) { p = clamp(p, 0, 1); var q = p - 1, s = 1.9; return q * q * ((s + 1) * q + s) + 1; },
    soft: function (p) { p = clamp(p, 0, 1); return p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2; },
  };
  S.cartoonEase = EASE;

  // Word timing helpers -------------------------------------------------------
  function words() { return V.words || []; }
  function normW(w) { return str(w).toLowerCase().replace(/[^\p{L}\p{N}']+/gu, ""); }
  /** Find narration window for a text line: {start,end,found}. after = search start. */
  function findLine(text, after) {
    var ws = plain(text).split(/\s+/).map(normW).filter(Boolean);
    var W = words();
    if (!ws.length || !W.length) return null;
    var key = ws.slice(0, Math.min(3, ws.length)).join(" ");
    var s = V.find(key, after);
    if (s == null && ws.length > 1) s = V.find(ws[0] + " " + ws[1], after);
    if (s == null) s = V.find(ws[0], after);
    if (s == null) return null;
    var idx = -1;
    for (var i = 0; i < W.length; i++) if (W[i].start >= s - 1e-3) { idx = i; break; }
    if (idx < 0) return null;
    var endIdx = Math.min(W.length - 1, idx + ws.length - 1);
    // try to land exactly on the last word
    var last = ws[ws.length - 1];
    for (var j = idx + ws.length - 1; j >= idx && j < Math.min(W.length, idx + ws.length + 3); j++) {
      if (normW(W[j].word) === last) { endIdx = j; break; }
    }
    return { start: W[idx].start, end: W[endIdx].end, found: true };
  }
  /**
   * Timing windows for an ordered list of lines (strings). Uses V.words when the lines are in the
   * narration; otherwise distributes them over [start,end] proportionally to their length.
   */
  function lineWindows(lines, opts) {
    opts = opts || {};
    var D = V.duration;
    var t0 = opts.start != null ? opts.start : Math.min(0.5, D * 0.08);
    var t1 = opts.end != null ? opts.end : Math.max(t0 + 0.5, D - Math.min(0.6, D * 0.08));
    var n = lines.length, out = new Array(n), after = 0, foundAny = false;
    for (var i = 0; i < n; i++) {
      var w = findLine(lines[i], after);
      if (w && w.end > w.start) { out[i] = w; after = w.end - 0.01; foundAny = true; }
    }
    // fill missing proportionally inside gaps
    var lens = lines.map(function (l) { return Math.max(1, plain(l).split(/\s+/).filter(Boolean).length); });
    var i0 = 0;
    while (i0 < n) {
      if (out[i0]) { i0++; continue; }
      var j = i0;
      while (j < n && !out[j]) j++;
      var a = i0 > 0 ? out[i0 - 1].end + 0.25 : t0;
      var b = j < n ? out[j].start - 0.25 : t1;
      if (b - a < 0.4 * (j - i0)) b = a + 0.9 * (j - i0);
      var tot = 0; for (var k = i0; k < j; k++) tot += lens[k] + 1.2;
      var cur = a;
      for (k = i0; k < j; k++) {
        var len = ((b - a) * (lens[k] + 1.2)) / tot;
        out[k] = { start: cur, end: cur + len * 0.8, found: false };
        cur += len;
      }
      i0 = j;
    }
    for (i = 0; i < n; i++) {
      out[i].start = clamp(out[i].start, 0, Math.max(0, D - 0.3));
      out[i].end = clamp(Math.max(out[i].end, out[i].start + 0.3), 0, D);
    }
    out.foundAny = foundAny;
    return out;
  }
  /** Time of a sync word (or null) after `after`, with lead. */
  function syncAt(word, after, fallback, lead) {
    if (word) {
      var t = V.find(str(word), after || 0);
      if (t != null) return clampT(t - (lead == null ? 0.12 : lead));
    }
    return clampT(fallback);
  }
  S.lineWindows = lineWindows;
  S.syncAt = syncAt;

  // syllables / visemes for lip-sync
  function wordVisemes(word) {
    var w = str(word).toLowerCase().replace(/[^a-zÀ-ɏ]/g, "");
    if (!w) return [{ open: 0.7, round: 0.2, wide: 0.2 }];
    var groups = w.match(/[aeiouyàáâäãåèéêëìíîïòóôöõùúûü]+/g) || ["a"];
    var out = [];
    for (var i = 0; i < Math.min(groups.length, 6); i++) {
      var v = groups[i][0];
      if (/[oòóôöõ]/.test(v)) out.push({ open: 0.75, round: 0.95, wide: 0 });
      else if (/[uùúûü]/.test(v)) out.push({ open: 0.5, round: 1, wide: 0 });
      else if (/[aàáâäãå]/.test(v)) out.push({ open: 1, round: 0.1, wide: 0.25 });
      else if (/[eèéêë]/.test(v)) out.push({ open: 0.62, round: 0, wide: 0.8 });
      else out.push({ open: 0.48, round: 0, wide: 0.95 });
    }
    // lip consonants close the mouth sharply at word start
    out.lip = /^[mbpfv]/.test(w);
    return out;
  }

  // ───────────────────────── cast ─────────────────────────
  // Skeleton (character-local units, origin = between the feet on the ground, y down).
  var RIG = {
    hipY: -186, // hip centre above ground
    shoulderX: 50, shoulderY: -112, // relative to hip centre
    neckY: -128, headY: -92, // neck rel hip centre, head centre rel neck
    upper: 76, lower: 70, // arm bones
    hipX: 26, thigh: 90, shin: 84, // legs
    ankleY: -15,
    armW: 25, legW: 34,
  };
  S.RIG = RIG;

  var CAST = {
    maya: {
      name: "Maya", desc: "curious, upbeat host; warm brown skin, curly dark hair in a top bun, mustard tee, teal trousers, red sneakers",
      skin: "#C98A5E", hair: "#2B1B19", top: "#F4B63F", sleeve: "short", bottom: "#1E8C8C", shoes: "#E8574A", sole: "#FFF4E8",
      hairStyle: "bun", acc: { earrings: "#F7D154" }, blush: "#E0705A", scale: 1, build: 0.96,
    },
    leo: {
      name: "Leo", desc: "nerdy, enthusiastic; fair skin, ginger quiff, round glasses, blue hoodie, navy jeans, white sneakers",
      skin: "#F2C7A5", hair: "#D3652A", top: "#3E7BF0", sleeve: "long", bottom: "#2E3D66", shoes: "#F4F1EA", sole: "#C9C2B6",
      hairStyle: "quiff", acc: { glasses: true, hood: true }, blush: "#F08C7A", scale: 1.04, build: 1,
    },
    priya: {
      name: "Priya", desc: "sharp, confident expert; brown skin, long black hair with side part, coral blouse, purple trousers",
      skin: "#A8694A", hair: "#19121A", top: "#F26A5A", sleeve: "long", bottom: "#5A3F8E", shoes: "#2A2140", sole: "#7A6E8E",
      hairStyle: "long", acc: { earrings: "#F7D154" }, blush: "#D9604E", scale: 0.98, build: 0.94,
    },
    sam: {
      name: "Sam", desc: "laid-back, practical; dark skin, short flat-top, trimmed beard, green polo, khaki chinos",
      skin: "#6B4130", hair: "#17100F", top: "#2FBF7B", sleeve: "short", bottom: "#C9A46A", shoes: "#5A3A28", sole: "#E9DCC6",
      hairStyle: "flat", acc: { beard: true, collar: true }, blush: "#8E4A3A", scale: 1.06, build: 1.08,
    },
    bolt: {
      name: "Bolt", desc: "friendly robot mascot; rounded silver body, dark visor face with glowing cyan eyes, antenna",
      skin: "#9AA9B8", hair: "#E5484D", top: "#D9E2EA", sleeve: "long", bottom: "#B4C1CD", shoes: "#3A4660", sole: "#26304A",
      hairStyle: "robot", robot: true, acc: {}, blush: "#4FE3FF", scale: 0.94, build: 1.02,
    },
    kai: {
      name: "Kai", desc: "energetic kid; light-brown skin, spiky black hair, orange striped tee, denim shorts",
      skin: "#E0A87E", hair: "#22191A", top: "#FF8A3D", sleeve: "short", bottom: "#4A7BC8", shoes: "#2FBF7B", sole: "#FFFFFF",
      hairStyle: "spiky", acc: { stripes: "#FFD3A8", shorts: true }, blush: "#F07A62", scale: 0.8, build: 0.92, kid: true,
    },
  };
  S.CAST = CAST;
  var CAST_IDS = Object.keys(CAST);
  function castId(name, i) {
    var k = str(name).toLowerCase().trim();
    if (CAST[k]) return k;
    return CAST_IDS[((i || 0) % CAST_IDS.length + CAST_IDS.length) % CAST_IDS.length];
  }

  // ───────────────────────── poses ─────────────────────────
  // Pose params (authored for a character facing screen-right; R = screen-right arm).
  // Arm angles: a = upper arm angle from straight down, + = outward; e = elbow bend (forearm angle = a+e).
  // h = hand: 0 mitten, 1 fist, 2 point, 3 open/spread.
  // fLx/fRx: foot x offsets (from rest stance), fLy/fRy: foot lift. kL/kR: knee bend direction (+1 = outward).
  var BASE = { by: 0, bx: 0, lean: 0, sq: 1, tilt: 0, hx: 0, hy: 0, shrug: 0,
    aLa: 9, aLe: -6, aRa: 9, aRe: -6, hL: 0, hR: 0,
    fLx: 0, fLy: 0, fRx: 0, fRy: 0, kL: 1, kR: 1, lookX: 0, lookY: 0 };
  var PKEYS = Object.keys(BASE);
  function P(o) { var p = {}; for (var k in BASE) p[k] = BASE[k]; for (k in o) p[k] = o[k]; return p; }
  // Arm IK → {a,e}. side: "L"|"R"; target relative to hip centre (facing right coords).
  function ikArm(side, tx, ty, flip) {
    var sx = side === "R" ? RIG.shoulderX : -RIG.shoulderX, sy = RIG.shoulderY;
    var dx = tx - sx, dy = ty - sy;
    var l1 = RIG.upper, l2 = RIG.lower;
    var d = clamp(Math.sqrt(dx * dx + dy * dy), Math.abs(l1 - l2) + 2, l1 + l2 - 0.5);
    var base = Math.atan2(dx, dy); // angle from down, + toward +x
    var c = clamp((l1 * l1 + d * d - l2 * l2) / (2 * l1 * d), -1, 1);
    var off = Math.acos(c) * (flip ? -1 : 1);
    var sign = side === "R" ? 1 : -1;
    var upper = base + off * sign; // elbow outward
    var ex = sx + Math.sin(upper) * l1, ey = sy + Math.cos(upper) * l1;
    var fore = Math.atan2(tx - ex, ty - ey);
    var a = (upper / D2R) * sign, f = (fore / D2R) * sign;
    var e = f - a;
    while (e > 180) e -= 360;
    while (e < -180) e += 360;
    return { a: a, e: e };
  }
  function withArm(p, side, ik, hand) { p["a" + side + "a"] = ik.a; p["a" + side + "e"] = ik.e; if (hand != null) p["h" + side] = hand; return p; }

  var POSES = {};
  function defPose(name, params, anim, extra) { POSES[name] = { p: P(params), anim: anim || null, x: extra || {} }; }
  defPose("idle", {});
  defPose("stand", {});
  defPose("talk", { aRa: 22, aRe: 52, hR: 3, tilt: 2 });
  defPose("explain", { aRa: 30, aRe: 78, hR: 3, aLa: 14, aLe: 8, tilt: 3 });
  defPose("wave", { aRa: 118, aRe: 42, hR: 3, tilt: 5, lean: -2 }, function (lt, p) { p.aRe += Math.sin(lt * 10) * 20; p.tilt += Math.sin(lt * 5) * 2; });
  defPose("point", { aRa: 92, aRe: 2, hR: 2, lean: 3, tilt: -3, aLa: 6, aLe: -4, fRx: 8, lookX: 1 });
  defPose("point-up", { aRa: 152, aRe: 8, hR: 2, tilt: -6, lean: -2, lookY: -1, lookX: 0.4 });
  defPose("point-down", { aRa: 48, aRe: -6, hR: 2, tilt: 8, lean: 4, lookY: 0.8, lookX: 0.6 });
  defPose("point-viewer", { aRa: 42, aRe: 62, hR: 2, tilt: -2, lean: 2 });
  defPose("think", withArm({ tilt: -9, lookX: 0.5, lookY: -0.9, aLa: -28, aLe: -70, hL: 1 }, "R", ikArm("R", 24, -150, false), 1),
    function (lt, p) { p.tilt += Math.sin(lt * 1.6) * 1.5; p.aRe += Math.max(0, Math.sin(lt * 7)) * 5; });
  defPose("shrug", { aLa: 52, aLe: 78, aRa: 52, aRe: 78, hL: 3, hR: 3, shrug: 14, tilt: 9, by: 3 },
    function (lt, p) { var k = Math.max(0, Math.sin(Math.min(lt, 0.6) * PI / 0.6)) * 0; p.shrug += k; });
  defPose("celebrate", { aLa: 158, aLe: 12, aRa: 158, aRe: 12, hL: 1, hR: 1, tilt: 0 }, function (lt, p) {
    var per = 0.62, ph = (lt % per) / per, hop = Math.sin(ph * PI);
    p.by += -Math.max(0, hop) * 62; p.sq = 1 + 0.06 * hop - (ph < 0.08 || ph > 0.92 ? 0.06 : 0);
    p.fLy = p.fRy = Math.max(0, hop) * 18; p.aLa += Math.sin(ph * 2 * PI) * 10; p.aRa += Math.sin(ph * 2 * PI) * 10;
  }, { happy: true });
  defPose("jump", { aLa: 140, aLe: 20, aRa: 140, aRe: 20, hL: 3, hR: 3 }, function (lt, p) {
    // one big hop, then land
    var a = 0.16, air = 0.5, ph;
    if (lt < a) { ph = lt / a; p.by += Math.sin(ph * PI * 0.5) * 22; p.sq = 1 - 0.07 * ph; p.aLa -= 90 * (1 - ph); p.aRa -= 90 * (1 - ph); }
    else if (lt < a + air) { ph = (lt - a) / air; p.by += -Math.sin(ph * PI) * 120; p.sq = 1 + 0.08 * Math.sin((1 - ph) * PI * 0.5); p.fLy = p.fRy = Math.sin(ph * PI) * 30; }
    else if (lt < a + air + 0.2) { ph = (lt - a - air) / 0.2; p.by += Math.sin(ph * PI) * 18; p.sq = 1 - 0.06 * Math.sin(ph * PI); }
  });
  defPose("facepalm", withArm({ tilt: -10, hy: 7, lean: 3, aLa: 10, aLe: -4 }, "R", ikArm("R", 16, -236, false), 3),
    function (lt, p) { p.tilt += Math.sin(lt * 7) * 2.5 * Math.min(1, lt); });
  defPose("present", { aLa: 58, aLe: 28, aRa: 58, aRe: 28, hL: 3, hR: 3, by: -2, tilt: 0, lean: -1 });
  defPose("open-arms", { aLa: 70, aLe: 22, aRa: 70, aRe: 22, hL: 3, hR: 3, by: -3, lean: -3 });
  defPose("arms-crossed", withArm(withArm({ tilt: -3, lean: -2 }, "L", ikArm("L", 40, -70, false), 1), "R", ikArm("R", -36, -64, false), 1));
  defPose("hands-hips", { aLa: 42, aLe: -92, aRa: 42, aRe: -92, hL: 1, hR: 1, lean: -2, fLx: -10, fRx: 10 });
  defPose("hold", { aRa: 18, aRe: 76, hR: 1, aLa: 10, aLe: -4 });
  defPose("hold-up", { aRa: 120, aRe: 30, hR: 1, lookX: 0.6, lookY: -0.8, tilt: -4 });
  defPose("phone", withArm({ tilt: 8, lookX: -0.3 }, "R", ikArm("R", 66, -200, false), 0));
  defPose("type", { aLa: 26, aLe: 72, aRa: 26, aRe: 72, hL: 0, hR: 0, tilt: 6, lookY: 0.6, lean: 3 }, function (lt, p) {
    p.aLe += Math.sin(lt * 21) * 4; p.aRe += Math.sin(lt * 23 + 1) * 4;
  });
  defPose("sad", { by: 6, shrug: -6, aLa: 3, aLe: 0, aRa: 3, aRe: 0, tilt: -6, hy: 9, lookY: 0.7 });
  defPose("scared", { by: 16, lean: -7, aLa: 34, aLe: 112, aRa: 34, aRe: 112, hL: 3, hR: 3, tilt: -6, shrug: 8, fLx: -8, fRx: 8 }, function (lt, p) {
    p.bx += Math.sin(lt * 38) * 1.6;
  });
  defPose("surprised", { by: -4, lean: -5, aLa: 38, aLe: 96, aRa: 38, aRe: 96, hL: 3, hR: 3, shrug: 6, tilt: -3 }, function (lt, p) {
    if (lt < 0.45) { var h = Math.sin((lt / 0.45) * PI); p.by -= h * 40; p.fLy = p.fRy = h * 14; }
  });
  defPose("fist-pump", { aRa: 128, aRe: 38, hR: 1, aLa: 12, aLe: -10, tilt: 4 }, function (lt, p) {
    var k = Math.max(0, Math.sin(lt * 9)); p.aRe += k * 20; p.by -= k * 5;
  });
  defPose("sit", { by: 64, aLa: 22, aLe: 40, aRa: 22, aRe: 40, fLx: -12, fRx: 12, kL: 1, kR: 1 });
  defPose("walk", {}, null, { gait: "walk" });
  defPose("run", { lean: 10, aLe: 80, aRe: 80, hL: 1, hR: 1 }, null, { gait: "run" });
  defPose("nod", {}, function (lt, p) { p.hy += Math.max(0, Math.sin(lt * 9)) * 7 * Math.max(0, 1 - lt / 1.4); p.tilt += 2; });
  defPose("headshake", { tilt: 0 }, function (lt, p) { p.lookX = Math.sin(lt * 11) * 0.9 * Math.max(0, 1 - lt / 1.5); p.tilt += Math.sin(lt * 11) * 3; });
  defPose("bow", { lean: 22, hy: 10, aLa: 4, aLe: 0, aRa: 4, aRe: 0, lookY: 1 });
  defPose("lean-in", { lean: 9, tilt: 6, aRa: 26, aRe: 50, hR: 3, lookY: 0.2 });
  defPose("dance", { aLa: 120, aLe: 40, aRa: 60, aRe: 70, hL: 1, hR: 1 }, function (lt, p) {
    var s = Math.sin(lt * 7.5); p.lean = s * 8; p.bx = s * 10; p.aLa = 90 + s * 50; p.aRa = 90 - s * 50; p.by = -Math.abs(Math.cos(lt * 7.5)) * 16; p.tilt = -s * 6;
  });
  S.POSES = POSES;
  var POSE_ALIASES = { "point-right": "point", "point-left": "point", pointing: "point", thinking: "think", "chin-scratch": "think", cheer: "celebrate", happy: "celebrate", "open": "open-arms", welcome: "open-arms", idle2: "idle", "hands-on-hips": "hands-hips", crossed: "arms-crossed", holding: "hold", running: "run", walking: "walk", sitting: "sit", "present-left": "present", "jumping": "jump" };
  function poseName(n) { n = str(n).toLowerCase().trim(); if (POSES[n]) return n; return POSE_ALIASES[n] || "idle"; }

  // ───────────────────────── expressions ─────────────────────────
  // brow y (+ down), brow angle (+ = inner end raised: worried), eye open, eye happy (crescent),
  // mouth: w (half width), smile (-1..1), open (0..1), round, skew (smirk), teeth; blush 0..1
  var EBASE = { bLy: 0, bRy: 0, bLa: 0, bRa: 0, eo: 1, eh: 0, mw: 13, ms: 0.35, mo: 0, mr: 0, mk: 0, blush: 0.25 };
  var EXPR = {
    neutral: {},
    happy: { bLy: -4, bRy: -4, bLa: -3, bRa: -3, eh: 0.55, mw: 19, ms: 1, mo: 0.42, blush: 0.6 },
    excited: { bLy: -11, bRy: -11, eo: 1.12, eh: 0.15, mw: 21, ms: 1, mo: 0.8, blush: 0.7 },
    sad: { bLy: -2, bRy: -2, bLa: 20, bRa: 20, eo: 0.82, mw: 12, ms: -0.85, mo: 0, blush: 0.1 },
    surprised: { bLy: -14, bRy: -14, bLa: 4, bRa: 4, eo: 1.25, mw: 10, ms: 0, mo: 0.75, mr: 1, blush: 0.2 },
    angry: { bLy: 5, bRy: 5, bLa: -24, bRa: -24, eo: 0.82, mw: 15, ms: -0.7, mo: 0.32, blush: 0.45 },
    worried: { bLy: -6, bRy: -6, bLa: 16, bRa: 16, eo: 1.02, mw: 12, ms: -0.45, mo: 0.12, blush: 0.15 },
    skeptical: { bLy: -12, bRy: 4, bLa: -4, bRa: -12, eo: 0.78, mw: 12, ms: -0.15, mk: 0.7, blush: 0.15 },
    thinking: { bLy: -9, bRy: 1, bLa: 6, bRa: -6, eo: 0.92, mw: 8, ms: -0.1, mk: 0.5, blush: 0.15 },
    smug: { bLy: -3, bRy: -7, bLa: -6, bRa: -2, eo: 0.72, eh: 0.25, mw: 15, ms: 0.85, mk: 0.6, blush: 0.4 },
    laughing: { bLy: -8, bRy: -8, bLa: 6, bRa: 6, eh: 1, mw: 21, ms: 1, mo: 0.95, blush: 0.8 },
    determined: { bLy: 3, bRy: 3, bLa: -14, bRa: -14, eo: 0.9, mw: 14, ms: 0.25, mo: 0.08, blush: 0.3 },
    love: { bLy: -6, bRy: -6, bLa: 8, bRa: 8, eh: 0.85, mw: 15, ms: 1, mo: 0.2, blush: 1 },
    sleepy: { bLy: 4, bRy: 4, eo: 0.35, mw: 9, ms: 0, mo: 0.05, blush: 0.2 },
    disgusted: { bLy: 4, bRy: -4, bLa: -16, bRa: 8, eo: 0.7, mw: 14, ms: -0.9, mo: 0.2, mk: -0.5, blush: 0.1 },
  };
  var EXPR_ALIASES = { joy: "happy", smile: "happy", glad: "happy", shocked: "surprised", shock: "surprised", amazed: "surprised", mad: "angry", furious: "angry", anxious: "worried", nervous: "worried", confused: "skeptical", doubtful: "skeptical", curious: "thinking", proud: "smug", confident: "smug", calm: "neutral", serious: "determined", focused: "determined", tired: "sleepy", upset: "sad", laugh: "laughing" };
  function exprName(n) { n = str(n).toLowerCase().trim(); if (EXPR[n]) return n; return EXPR_ALIASES[n] || "neutral"; }
  function E(name) { var e = {}, src = EXPR[exprName(name)] || {}; for (var k in EBASE) e[k] = src[k] != null ? src[k] : EBASE[k]; return e; }
  var EKEYS = Object.keys(EBASE);
  S.EXPRESSIONS = EXPR;

  // ───────────────────────── character art ─────────────────────────
  var HEAD = "M0,-86 C50,-86 82,-54 82,-8 C82,46 46,80 0,80 C-46,80 -82,46 -82,-8 C-82,-54 -50,-86 0,-86Z";
  function hairArt(c) {
    var H = c.hair, Hs = shade(c.hair, 0.18), st = ' stroke="' + INK + '" stroke-width="' + OUT + '" stroke-linejoin="round"';
    var back = "", front = "";
    switch (c.hairStyle) {
      case "bun":
        back = '<path d="M-90,6 C-104,-40 -92,-92 -50,-104 C-20,-122 30,-122 58,-102 C98,-86 104,-36 90,8 C84,26 72,30 66,18 L-66,18 C-74,30 -86,26 -90,6Z" fill="' + H + '"' + st + "/>" +
          '<circle cx="6" cy="-118" r="40" fill="' + H + '"' + st + "/>" +
          '<path d="M-14,-140 C-2,-150 18,-150 28,-136" fill="none" stroke="' + Hs + '" stroke-width="5" stroke-linecap="round"/>';
        front = '<path d="M-84,-2 C-90,-58 -54,-92 -2,-92 C52,-94 90,-60 84,-4 C76,-30 58,-46 32,-50 C18,-34 -6,-30 -24,-40 C-46,-44 -68,-30 -84,-2Z" fill="' + H + '"' + st + "/>" +
          '<path d="M10,-80 C26,-74 40,-66 48,-56" fill="none" stroke="' + Hs + '" stroke-width="5" stroke-linecap="round"/>';
        break;
      case "quiff":
        back = '<path d="M-82,-10 C-88,-60 -60,-92 -10,-96 C40,-100 86,-74 86,-14 L-82,-10Z" fill="' + H + '"' + st + "/>";
        front = '<path d="M-82,-6 C-90,-52 -70,-84 -36,-96 C-28,-122 4,-136 38,-128 C72,-122 96,-96 84,-58 C88,-36 86,-18 82,-8 C76,-34 64,-48 46,-54 C24,-48 -4,-56 -20,-66 C-34,-46 -58,-36 -82,-6Z" fill="' + H + '"' + st + "/>" +
          '<path d="M-6,-112 C14,-122 44,-118 62,-100" fill="none" stroke="' + Hs + '" stroke-width="5" stroke-linecap="round"/>';
        break;
      case "long":
        back = '<path d="M-88,-20 C-96,-80 -50,-104 2,-104 C56,-104 98,-78 90,-20 L96,120 C98,150 78,164 52,158 L-52,158 C-80,164 -98,150 -96,120Z" fill="' + H + '"' + st + "/>";
        front = '<path d="M-86,30 C-98,-46 -62,-96 -4,-96 C52,-98 92,-60 86,30 C80,0 74,-28 60,-46 C30,-60 6,-56 -12,-70 C-24,-50 -52,-36 -66,-16 C-76,0 -80,14 -86,30Z" fill="' + H + '"' + st + "/>" +
          '<path d="M-10,-84 C-30,-74 -46,-60 -56,-42" fill="none" stroke="' + Hs + '" stroke-width="5" stroke-linecap="round"/>';
        break;
      case "flat":
        front = '<path d="M-82,-14 C-86,-46 -76,-92 -40,-100 L40,-100 C76,-92 86,-46 82,-14 C78,-34 74,-52 62,-58 L-62,-58 C-74,-52 -78,-34 -82,-14Z" fill="' + H + '"' + st + "/>" +
          '<path d="M-46,-80 L46,-80" stroke="' + Hs + '" stroke-width="4" stroke-linecap="round" opacity=".6"/>';
        break;
      case "spiky":
        front = '<path d="M-84,-6 C-92,-40 -84,-66 -70,-80 L-86,-96 L-52,-96 L-48,-122 L-18,-104 L4,-130 L22,-102 L52,-120 L54,-90 L88,-90 L78,-62 C88,-44 88,-22 84,-6 C76,-30 60,-48 36,-52 C14,-40 -10,-44 -26,-56 C-48,-44 -70,-30 -84,-6Z" fill="' + H + '"' + st + "/>";
        break;
      case "robot":
        break;
    }
    return { back: back, front: front };
  }
  // hands: authored pointing down (+y) from the wrist, thumb toward -x
  function handArt(fill) {
    var st = ' fill="' + fill + '" stroke="' + INK + '" stroke-width="' + OUT + '" stroke-linejoin="round"';
    return [
      '<path d="M-13,2 C-15,14 -14,28 -4,32 C6,35 15,28 15,14 C15,4 10,-2 0,-2 C-6,-2 -11,-1 -13,2Z"' + st + '/><path d="M-12,8 C-22,10 -24,20 -16,22 C-12,23 -10,20 -9,17"' + st + "/>",
      '<circle cx="0" cy="14" r="15.5"' + st + '/><path d="M-6,8 L8,8" stroke="' + INK + '" stroke-width="3" stroke-linecap="round" opacity=".35"/>',
      '<rect x="-5.5" y="12" width="11" height="34" rx="5.5"' + st + '/><circle cx="0" cy="12" r="15"' + st + '/><rect x="-5.5" y="14" width="11" height="10" fill="' + fill + '"/>',
      '<path d="M-14,4 C-18,16 -18,30 -10,38 L-8,48 C-7,53 -1,53 -1,47 L0,38 L3,50 C4,55 10,55 10,49 L9,36 L14,44 C17,48 22,45 20,40 L16,26 C18,14 14,0 0,-2 C-7,-2 -12,0 -14,4Z"' + st + "/>",
    ];
  }
  function shoeArt(c) {
    var st = ' stroke="' + INK + '" stroke-width="' + OUT + '" stroke-linejoin="round"';
    return '<path d="M-17,-6 C-19,-22 -6,-26 6,-20 C18,-16 34,-12 38,0 C40,8 36,10 30,10 L-14,10 C-20,10 -21,4 -17,-6Z" fill="' + c.shoes + '"' + st + "/>" +
      '<path d="M-16,4 L34,4" stroke="' + c.sole + '" stroke-width="6" stroke-linecap="round"/>';
  }

  // ───────────────────────── Actor ─────────────────────────
  var actorCount = 0;
  function Actor(scene, name, opts) {
    opts = opts || {};
    var id = castId(name, opts.index);
    var c = CAST[id];
    this.scene = scene;
    this.id = id;
    this.c = c;
    this.n = actorCount++;
    this.seed = S.hash(id) % 1000 + this.n * 7;
    this.x0 = num(opts.x, scene.Ww / 2);
    this.y0 = opts.y != null ? num(opts.y, scene.G) : scene.G;
    this.scale = num(opts.scale, 1) * c.scale * scene.charScale;
    var f = str(opts.facing || "right").toLowerCase();
    this.dir0 = f === "left" ? -1 : 1;
    this.turn0 = f === "front" || f === "camera" ? 0 : this.dir0;
    this.poses = [{ t: -1, name: poseName(opts.pose || "idle"), dur: 0.01, ease: "pose" }];
    this.exprs = [{ t: -1, name: exprName(opts.expression || "neutral"), dur: 0.01 }];
    this.moves = [];
    this.faces = [];
    this.looks = [];
    this.talks = [];
    this.holds = [];
    this.vis = [];
    this.gestures = opts.gestures !== false;
    this.dirty = true;
    this.build(opts);
    scene.actors.push(this);
  }
  S.Actor = Actor;
  var AP = Actor.prototype;

  AP.build = function (opts) {
    var c = this.c, self = this;
    var root = (this.root = g(this.scene.actorLayer, { class: "cz-actor cz-" + this.id }));
    this.shadow = svgEl("ellipse", { cx: 0, cy: 0, rx: 74, ry: 13, fill: "rgba(40,24,60,0.22)" }, root);
    this.body = g(root);
    var b = this.body;
    var st = { stroke: INK, "stroke-width": OUT, "stroke-linejoin": "round" };
    this.stool = g(b);
    this.stool.innerHTML = '<path d="M-54,-104 L-66,0 M54,-104 L66,0 M-58,-50 L58,-50" stroke="' + INK + '" stroke-width="14" stroke-linecap="round"/><path d="M-54,-104 L-66,0 M54,-104 L66,0 M-58,-50 L58,-50" stroke="#B5793F" stroke-width="6" stroke-linecap="round"/><rect x="-80" y="-126" width="160" height="26" rx="13" fill="#D9934E" stroke="' + INK + '" stroke-width="' + OUT + '"/>';
    this.headBack = g(b);
    // legs
    this.legs = {};
    ["L", "R"].forEach(function (s) {
      var o = svgEl("path", { fill: "none", stroke: INK, "stroke-width": RIG.legW + OUT * 2, "stroke-linecap": "round", "stroke-linejoin": "round" }, b);
      var f = svgEl("path", { fill: "none", stroke: c.acc.shorts ? c.skin : c.bottom, "stroke-width": RIG.legW, "stroke-linecap": "round", "stroke-linejoin": "round" }, b);
      var so = null, sf = null;
      if (c.acc.shorts) {
        so = svgEl("path", { fill: "none", stroke: INK, "stroke-width": RIG.legW + 6 + OUT * 2, "stroke-linecap": "round" }, b);
        sf = svgEl("path", { fill: "none", stroke: c.bottom, "stroke-width": RIG.legW + 6, "stroke-linecap": "round" }, b);
      }
      var shoe = g(b);
      shoe.innerHTML = shoeArt(c);
      self.legs[s] = { o: o, f: f, so: so, sf: sf, shoe: shoe };
    });
    // torso
    var bw = c.build;
    this.torso = g(b);
    var T = this.torso;
    if (!c.robot) svgEl("path", { d: "M-15,-150 L-15,-112 L15,-112 L15,-150Z", fill: c.skin }, T).setAttribute("stroke", INK);
    T.lastChild && T.lastChild.setAttribute("stroke-width", OUT);
    var w1 = 58 * bw, w0 = 50 * bw;
    var shirtD = c.robot
      ? "M-" + (w1 + 2) + ",-96 C-" + (w1 + 2) + ",-126 -" + (w1 - 12) + ",-134 -30,-134 L30,-134 C" + (w1 - 12) + ",-134 " + (w1 + 2) + ",-126 " + (w1 + 2) + ",-96 L" + (w0 + 4) + ",-6 C" + (w0 + 4) + ",10 " + (w0 - 8) + ",16 30,16 L-30,16 C-" + (w0 - 8) + ",16 -" + (w0 + 4) + ",10 -" + (w0 + 4) + ",-6Z"
      : "M-24,-132 C-" + (w1 - 4) + ",-132 -" + w1 + ",-120 -" + w1 + ",-98 L-" + w0 + ",2 C-" + w0 + ",12 -" + (w0 - 8) + ",16 -" + (w0 - 18) + ",16 L" + (w0 - 18) + ",16 C" + (w0 - 8) + ",16 " + w0 + ",12 " + w0 + ",2 L" + w1 + ",-98 C" + w1 + ",-120 " + (w1 - 4) + ",-132 24,-132Z";
    if (c.acc.stripes) {
      var cid = "czc" + this.n + "_" + V.seed;
      var cp = svgEl("clipPath", { id: cid }, T);
      svgEl("path", { d: shirtD }, cp);
      svgEl("path", { d: shirtD, fill: c.top }, T);
      var sg = g(T, { "clip-path": "url(#" + cid + ")" });
      for (var yy = -112; yy < 20; yy += 26) svgEl("rect", { x: -80, y: yy, width: 160, height: 11, fill: c.acc.stripes }, sg);
      svgEl("path", { d: shirtD, fill: "none", stroke: INK, "stroke-width": OUT, "stroke-linejoin": "round" }, T);
    } else {
      svgEl("path", { d: shirtD, fill: c.top, stroke: INK, "stroke-width": OUT, "stroke-linejoin": "round" }, T);
    }
    // shirt shading + details
    svgEl("path", { d: "M" + (w0 - 16) + ",-110 L" + (w0 - 8) + ",8", stroke: shade(c.top, -0.12), "stroke-width": 10, "stroke-linecap": "round", opacity: 0.5 }, T);
    if (c.robot) {
      svgEl("rect", { x: -26, y: -100, width: 52, height: 40, rx: 12, fill: "#2B3650", stroke: INK, "stroke-width": OUT }, T);
      this.chest = svgEl("circle", { cx: 0, cy: -80, r: 10, fill: "#4FE3FF" }, T);
      svgEl("path", { d: "M-34,-30 L34,-30", stroke: shade(c.top, -0.2), "stroke-width": 5, "stroke-linecap": "round" }, T);
    } else if (c.acc.hood) {
      svgEl("path", { d: "M-40,-134 C-44,-112 -20,-104 0,-104 C20,-104 44,-112 40,-134 C30,-124 -30,-124 -40,-134Z", fill: shade(c.top, -0.15), stroke: INK, "stroke-width": OUT, "stroke-linejoin": "round" }, T);
      svgEl("path", { d: "M-10,-106 L-14,-70 M10,-106 L14,-70", stroke: "#F4F1EA", "stroke-width": 4, "stroke-linecap": "round" }, T);
      svgEl("path", { d: "M-28,-28 C-10,-22 10,-22 28,-28", fill: "none", stroke: shade(c.top, -0.2), "stroke-width": 4, "stroke-linecap": "round" }, T);
    } else if (c.acc.collar) {
      svgEl("path", { d: "M-24,-132 L0,-110 L-6,-100 L-30,-122Z M24,-132 L0,-110 L6,-100 L30,-122Z", fill: shade(c.top, 0.25), stroke: INK, "stroke-width": 3.5, "stroke-linejoin": "round" }, T);
      svgEl("path", { d: "M0,-110 L0,-84", stroke: INK, "stroke-width": 3, "stroke-linecap": "round" }, T);
    } else {
      svgEl("path", { d: "M-22,-131 C-14,-116 14,-116 22,-131", fill: "none", stroke: INK, "stroke-width": 3.5, "stroke-linecap": "round" }, T);
    }
    if (!c.robot && !c.acc.shorts) svgEl("path", { d: "M-" + (w0 - 2) + ",-2 L" + (w0 - 2) + ",-2", stroke: shade(c.top, -0.18), "stroke-width": 4, "stroke-linecap": "round", opacity: 0.6 }, T);
    // head
    this.head = g(b);
    var Hd = this.head;
    var hair = hairArt(c);
    this.hairBack = g(this.headBack);
    this.hairBack.innerHTML = hair.back;
    if (c.robot) {
      g(Hd).innerHTML =
        '<path d="M0,-118 L0,-92" stroke="' + INK + '" stroke-width="5"/><circle cx="0" cy="-124" r="11" fill="' + c.hair + '" stroke="' + INK + '" stroke-width="' + OUT + '"/>' +
        '<rect x="-96" y="-30" width="20" height="44" rx="9" fill="' + shade(c.top, -0.15) + '" stroke="' + INK + '" stroke-width="' + OUT + '"/>' +
        '<rect x="76" y="-30" width="20" height="44" rx="9" fill="' + shade(c.top, -0.15) + '" stroke="' + INK + '" stroke-width="' + OUT + '"/>' +
        '<rect x="-84" y="-92" width="168" height="160" rx="54" fill="' + c.top + '" stroke="' + INK + '" stroke-width="' + OUT + '"/>' +
        '<rect x="-64" y="-62" width="128" height="104" rx="38" fill="#1E2840" stroke="' + INK + '" stroke-width="' + OUT + '"/>' +
        '<path d="M-50,-50 C-30,-58 0,-58 14,-56" fill="none" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" opacity=".18"/>';
    } else {
      this.ears = g(Hd);
      this.ears.innerHTML = '<g class="ear"><ellipse cx="-80" cy="2" rx="15" ry="19" fill="' + c.skin + '" stroke="' + INK + '" stroke-width="' + OUT + '"/><path d="M-82,-4 C-88,0 -86,8 -80,10" fill="none" stroke="' + shade(c.skin, -0.25) + '" stroke-width="3.5" stroke-linecap="round"/></g>' +
        '<g class="ear"><ellipse cx="80" cy="2" rx="15" ry="19" fill="' + c.skin + '" stroke="' + INK + '" stroke-width="' + OUT + '"/><path d="M82,-4 C88,0 86,8 80,10" fill="none" stroke="' + shade(c.skin, -0.25) + '" stroke-width="3.5" stroke-linecap="round"/></g>';
      if (c.acc.earrings) this.ears.innerHTML += '<circle cx="-80" cy="26" r="6" fill="none" stroke="' + c.acc.earrings + '" stroke-width="3.5"/><circle cx="80" cy="26" r="6" fill="none" stroke="' + c.acc.earrings + '" stroke-width="3.5"/>';
      svgEl("path", { d: HEAD, fill: c.skin, stroke: INK, "stroke-width": OUT }, Hd);
      svgEl("path", { d: "M-60,46 C-36,74 36,74 60,46 C44,70 20,78 0,78 C-20,78 -44,70 -60,46Z", fill: shade(c.skin, -0.08), opacity: 0.6 }, Hd);
    }
    var face = (this.faceG = g(Hd));
    var eyeFill = c.robot ? "#4FE3FF" : INK;
    this.blushL = svgEl("ellipse", { cx: -46, cy: 22, rx: 14, ry: 8, fill: c.blush, opacity: 0.3 }, face);
    this.blushR = svgEl("ellipse", { cx: 46, cy: 22, rx: 14, ry: 8, fill: c.blush, opacity: 0.3 }, face);
    if (c.acc.beard) {
      svgEl("path", { d: "M-80,4 C-78,56 -40,82 0,82 C40,82 78,56 80,4 C70,30 56,40 38,38 C26,52 -26,52 -38,38 C-56,40 -70,30 -80,4Z", fill: c.hair, stroke: INK, "stroke-width": OUT, "stroke-linejoin": "round" }, face);
    }
    this.eyeL = svgEl("path", { fill: eyeFill }, face);
    this.eyeR = svgEl("path", { fill: eyeFill }, face);
    this.hiL = svgEl("circle", { r: 3.6, fill: "#fff" }, face);
    this.hiR = svgEl("circle", { r: 3.6, fill: "#fff" }, face);
    var browCol = c.robot ? "#4FE3FF" : shade(c.hair, -0.1);
    this.browL = svgEl("path", { fill: "none", stroke: browCol, "stroke-width": c.robot ? 5 : 7, "stroke-linecap": "round" }, face);
    this.browR = svgEl("path", { fill: "none", stroke: browCol, "stroke-width": c.robot ? 5 : 7, "stroke-linecap": "round" }, face);
    if (!c.robot) svgEl("path", { d: "M-3,6 C-8,16 -2,20 5,18", fill: "none", stroke: shade(c.skin, -0.3), "stroke-width": 4, "stroke-linecap": "round" }, face);
    // mouth (interior clipped)
    var mid = "czm" + this.n + "_" + V.seed;
    var clip = svgEl("clipPath", { id: mid }, face);
    this.mClip = svgEl("path", {}, clip);
    this.mouthG = g(face, { transform: "translate(0,40)" });
    this.mFill = svgEl("path", { fill: c.robot ? "#0F3346" : "#5A1A2C" }, this.mouthG);
    var mi = g(this.mouthG, { "clip-path": "url(#" + mid + ")" });
    this.teeth = svgEl("rect", { x: -40, width: 80, height: 10, fill: "#FFFFFF" }, mi);
    this.tongue = svgEl("ellipse", { fill: c.robot ? "#4FE3FF" : "#F06C78", opacity: c.robot ? 0.5 : 1 }, mi);
    this.mLine = svgEl("path", { fill: "none", stroke: c.robot ? "#4FE3FF" : INK, "stroke-width": c.robot ? 5 : OUT, "stroke-linecap": "round", "stroke-linejoin": "round" }, this.mouthG);
    this.hairFront = g(Hd);
    this.hairFront.innerHTML = hair.front;
    if (c.acc.glasses) {
      this.glasses = g(face);
      this.glasses.innerHTML = '<circle cx="-29" cy="-4" r="21" fill="rgba(255,255,255,.18)" stroke="' + INK + '" stroke-width="' + OUT + '"/><circle cx="29" cy="-4" r="21" fill="rgba(255,255,255,.18)" stroke="' + INK + '" stroke-width="' + OUT + '"/><path d="M-8,-6 C-4,-10 4,-10 8,-6" fill="none" stroke="' + INK + '" stroke-width="' + OUT + '"/>';
    }
    // arms
    this.arms = {};
    var hands = handArt(c.robot ? "#C9D3DC" : c.skin);
    ["L", "R"].forEach(function (s) {
      var armCol = c.sleeve === "long" ? shade(c.top, -0.04) : c.skin;
      var o = svgEl("path", { fill: "none", stroke: INK, "stroke-width": RIG.armW + OUT * 2, "stroke-linecap": "round", "stroke-linejoin": "round" }, b);
      var f = svgEl("path", { fill: "none", stroke: armCol, "stroke-width": RIG.armW, "stroke-linecap": "round", "stroke-linejoin": "round" }, b);
      var so = null, sf = null;
      if (c.sleeve === "short") {
        so = svgEl("path", { fill: "none", stroke: INK, "stroke-width": RIG.armW + 5 + OUT * 2, "stroke-linecap": "round" }, b);
        sf = svgEl("path", { fill: "none", stroke: c.top, "stroke-width": RIG.armW + 5, "stroke-linecap": "round" }, b);
      }
      var hand = g(b);
      var shapes = hands.map(function (h) { var gg = g(hand); gg.innerHTML = h; gg.style.display = "none"; return gg; });
      self.arms[s] = { o: o, f: f, so: so, sf: sf, hand: hand, shapes: shapes, cur: -1 };
    });
    this.held = g(b, { class: "cz-held" });
    // continuity: per-actor blink schedule
    var rnd = V.makeRand(this.seed * 31 + 7);
    var blinks = [], t = 0.6 + rnd() * 1.4;
    while (t < V.duration + 1) { blinks.push(t); if (rnd() < 0.18) blinks.push(t + 0.24); t += 2.1 + rnd() * 2.8; }
    this.blinks = blinks;
    this.phase = rnd() * 10;
  };

  // ── channels (public API) ──
  function ord(list) { list.sort(function (a, b) { return a.t - b.t; }); }
  AP.pose = function (name, at, dur, ease) {
    this.poses.push({ t: clampT(at == null ? 0 : at), name: poseName(name), dur: num(dur, 0.45), ease: ease || "pose" });
    this.dirty = true; return this;
  };
  AP.expression = function (name, at, dur) {
    this.exprs.push({ t: clampT(at == null ? 0 : at), name: exprName(name), dur: num(dur, 0.25) });
    this.dirty = true; return this;
  };
  AP.expr = AP.expression;
  AP.say = function (from, to, text) {
    from = clampT(from); to = Math.max(from + 0.1, num(to, from + 1));
    this.talks.push({ s: from, e: to, text: text || null }); this.dirty = true; return this;
  };
  AP.talk = AP.say;
  AP.moveTo = function (x, at, dur, opts) {
    opts = typeof opts === "string" ? { gait: opts } : opts || {};
    this.moves.push({ t: clampT(at == null ? 0 : at), x: num(x, this.x0), dur: Math.max(0.05, num(dur, 1.2)), gait: opts.gait || "walk", ease: opts.ease || null, turn: opts.turn !== false });
    this.dirty = true; return this;
  };
  AP.walkTo = function (x, at, dur) { return this.moveTo(x, at, dur, { gait: "walk" }); };
  AP.runTo = function (x, at, dur) { return this.moveTo(x, at, dur, { gait: "run" }); };
  AP.hopTo = function (x, at, dur) { return this.moveTo(x, at, dur, { gait: "hop" }); };
  AP.face = function (dir, at) {
    var d = str(dir).toLowerCase(), v = d === "left" ? -1 : d === "right" ? 1 : d === "front" || d === "camera" ? 0 : num(dir, 1);
    this.faces.push({ t: clampT(at == null ? 0 : at), v: clamp(v, -1, 1) }); this.dirty = true; return this;
  };
  AP.lookAt = function (target, at, dur) {
    var tx = target && target.root ? target : target;
    this.looks.push({ t: clampT(at == null ? 0 : at), target: tx, dur: num(dur, 0) }); this.dirty = true; return this;
  };
  AP.hold = function (prop, at, until, opts) {
    opts = opts || {};
    var gEl = g(this.held, { class: "cz-hold" });
    gEl.innerHTML = propSvg(prop);
    this.holds.push({ t: clampT(at == null ? 0 : at), t2: until == null ? 1e9 : num(until, 1e9), el: gEl, hand: opts.hand === "L" ? "L" : "R", size: num(opts.size, 0.78) });
    return this;
  };
  AP.show = function (at) { this.vis.push({ t: clampT(at), on: true }); this.dirty = true; return this; };
  AP.hide = function (at) { this.vis.push({ t: clampT(at), on: false }); this.dirty = true; return this; };
  /** Walk in from off-screen side ("left"|"right") to x. */
  AP.enter = function (side, at, dur, x) {
    var sc = this.scene, s = str(side || "left").toLowerCase();
    var tx = x != null ? x : this.x0;
    var view = sc.viewSpan();
    this.x0 = s === "right" ? view.x1 + 160 : view.x0 - 160;
    this.dir0 = s === "right" ? -1 : 1; this.turn0 = this.dir0;
    this.moveTo(tx, at, dur == null ? 1.4 : dur, { gait: "walk" });
    return this;
  };
  AP.exit = function (side, at, dur) {
    var sc = this.scene, s = str(side || "right").toLowerCase(), view = sc.viewSpan();
    this.moveTo(s === "left" ? view.x0 - 200 : view.x1 + 200, at, dur == null ? 1.3 : dur, { gait: "walk" });
    return this;
  };
  AP.emote = function (kind, at, dur) { this.scene.mark(this, kind, at, dur); return this; };
  /** Acting beats: [{ word?, at?, pose?, expression?, mark?, look? }] */
  AP.beats = function (list, opts) {
    opts = opts || {};
    var after = opts.after || 0, self = this, fallbackStep = opts.step || 1.2, last = opts.start || 0.2;
    arr(list).forEach(function (b, i) {
      if (!b) return;
      var t = b.at != null ? clampT(b.at) : syncAt(b.word, after, last + (i ? fallbackStep : 0), 0.2);
      if (b.word && V.find(b.word, after) != null) after = t + 0.05;
      last = t;
      if (b.pose) self.pose(b.pose, t, b.dur);
      if (b.expression) self.expression(b.expression, t);
      if (b.mark) self.emote(b.mark, t + 0.05, b.markDur);
      if (b.look != null) self.lookAt(b.look, t);
      if (b.face) self.face(b.face, t);
    });
    return this;
  };
  AP.at = function (x) { this.x0 = x; this.dirty = true; return this; };

  // ── evaluation ──
  AP.compile = function () {
    ord(this.poses); ord(this.exprs); ord(this.moves); ord(this.faces); ord(this.looks); ord(this.talks); ord(this.vis);
    // pose snapshots at each keyframe start
    this.poseSnap = [];
    for (var i = 0; i < this.poses.length; i++) this.poseSnap[i] = i === 0 ? clone(POSES[this.poses[0].name].p) : this.poseEval(this.poses[i].t, i - 1);
    this.exprSnap = [];
    for (i = 0; i < this.exprs.length; i++) this.exprSnap[i] = i === 0 ? E(this.exprs[0].name) : this.exprEval(this.exprs[i].t, i - 1);
    // move starts
    var x = this.x0, dist = 0;
    for (i = 0; i < this.moves.length; i++) {
      var m = this.moves[i];
      m.from = this.moveX(m.t, i - 1, x);
      m.dist0 = dist;
      dist += Math.abs(m.x - m.from);
    }
    // facing events: explicit faces + move directions
    var ev = this.faces.map(function (f) { return { t: f.t, v: f.v }; });
    this.moves.forEach(function (m) { if (m.turn && Math.abs(m.x - m.from) > 2) ev.push({ t: m.t - 0.12, v: m.x > m.from ? 1 : -1 }); });
    ord(ev);
    this.faceEv = ev;
    // talk words
    this.talkWords = buildTalkWords(this.talks);
    this.dirty = false;
  };
  function clone(o) { var r = {}; for (var k in o) r[k] = o[k]; return r; }
  AP.poseTarget = function (i, t) {
    var kf = this.poses[i], def = POSES[kf.name];
    var p = clone(def.p);
    if (def.anim) def.anim(Math.max(0, t - kf.t), p);
    return p;
  };
  AP.poseEval = function (t, lim) {
    var idx = -1, n = lim == null ? this.poses.length - 1 : lim;
    for (var i = 0; i <= n; i++) if (this.poses[i].t <= t) idx = i;
    if (idx < 0) idx = 0;
    var kf = this.poses[idx];
    var tgt = this.poseTarget(idx, t);
    if (idx === 0) return tgt;
    var from = this.poseSnap[idx];
    var pr = clamp((t - kf.t) / kf.dur, 0, 1);
    var e = easeFn(kf.ease)(pr), es = sm(pr);
    var out = {};
    for (var k = 0; k < PKEYS.length; k++) {
      var key = PKEYS[k];
      if (key === "hL" || key === "hR" || key === "kL" || key === "kR") out[key] = pr < 0.4 ? from[key] : tgt[key];
      else if (key === "by" || key === "bx" || key === "sq") out[key] = lerp(from[key], tgt[key], es);
      else out[key] = lerp(from[key], tgt[key], e);
    }
    return out;
  };
  AP.exprEval = function (t, lim) {
    var idx = 0, n = lim == null ? this.exprs.length - 1 : lim;
    for (var i = 0; i <= n; i++) if (this.exprs[i].t <= t) idx = i;
    var kf = this.exprs[idx], tgt = E(kf.name);
    if (idx === 0) return tgt;
    var from = this.exprSnap[idx], pr = sm((t - kf.t) / kf.dur), out = {};
    for (var k = 0; k < EKEYS.length; k++) out[EKEYS[k]] = lerp(from[EKEYS[k]], tgt[EKEYS[k]], pr);
    return out;
  };
  AP.moveX = function (t, lim, x0) {
    var x = x0 != null ? x0 : this.x0, n = lim == null ? this.moves.length - 1 : lim;
    for (var i = 0; i <= n; i++) {
      var m = this.moves[i];
      if (m.t > t) break;
      var from = m.from != null ? m.from : x;
      var pr = clamp((t - m.t) / m.dur, 0, 1);
      var e = m.ease ? easeFn(m.ease)(pr) : m.gait === "hop" ? pr : (pr < 0.15 ? 0.5 * Math.pow(pr / 0.15, 2) * 0.15 : pr > 0.85 ? 1 - 0.5 * Math.pow((1 - pr) / 0.15, 2) * 0.15 : pr) ;
      x = lerp(from, m.x, e);
    }
    return x;
  };
  function buildTalkWords(talks) {
    var out = [];
    var W = words();
    talks.forEach(function (tk, ti) {
      var inWin = W.filter(function (w) { return w.start >= tk.s - 0.05 && w.start < tk.e; });
      if (inWin.length) {
        inWin.forEach(function (w) { out.push({ s: w.start, e: Math.min(w.end, tk.e + 0.1), v: wordVisemes(w.word), stress: w.word.length > 6 || /[!?]$/.test(w.word) }); });
      } else {
        // synthetic speech rhythm (no word timings available)
        var toks = tk.text ? plain(tk.text).split(/\s+/).filter(Boolean) : null;
        var rnd = V.makeRand(1000 + ti * 17 + Math.round(tk.s * 10));
        var t = tk.s, k = 0;
        var total = toks ? toks.length : Math.max(1, Math.round((tk.e - tk.s) / 0.34));
        var per = (tk.e - tk.s) / Math.max(1, total);
        while (t < tk.e - 0.08) {
          var wd = toks ? toks[k % toks.length] : "ba";
          var dur = toks ? clamp(per * (0.55 + Math.min(1.6, wd.length / 6)), 0.12, 0.7) : 0.16 + rnd() * 0.3;
          var e = Math.min(tk.e, t + dur);
          out.push({ s: t, e: e, v: wordVisemes(toks ? wd : V.pick ? ["ma", "to", "hi", "lo", "ka", "eu"][Math.floor(rnd() * 6)] : "ba"), stress: rnd() < 0.2 });
          t = e + (toks ? per * 0.18 : 0.05 + rnd() * 0.08) + (k % 7 === 6 ? 0.22 : 0);
          k++;
        }
      }
    });
    out.sort(function (a, b) { return a.s - b.s; });
    return out;
  }
  // mouth shape from speech at time t → {open, round, wide} or null
  AP.speech = function (t) {
    var W = this.talkWords;
    if (!W.length) return null;
    var lo = 0, hi = W.length - 1, idx = -1;
    while (lo <= hi) { var mid = (lo + hi) >> 1; if (W[mid].s <= t) { idx = mid; lo = mid + 1; } else hi = mid - 1; }
    if (idx < 0) return null;
    var w = W[idx];
    if (t > w.e + 0.06) return null;
    var len = Math.max(0.05, w.e - w.s), n = w.v.length;
    var lp = clamp((t - w.s) / len, 0, 1);
    var si = Math.min(n - 1, Math.floor(lp * n)), sp = lp * n - si;
    var vis = w.v[si];
    var amp = Math.pow(Math.sin(clamp(sp, 0, 1) * PI), 0.6);
    if (si === 0 && w.v.lip && sp < 0.25) amp *= sp / 0.25;
    if (t > w.e) amp *= 1 - (t - w.e) / 0.06;
    return { open: vis.open * amp, round: vis.round, wide: vis.wide, stress: w.stress, ws: w.s };
  };
  AP.isTalking = function (t) {
    for (var i = 0; i < this.talks.length; i++) if (t >= this.talks[i].s && t <= this.talks[i].e + 0.1) return true;
    return false;
  };
  AP.turnAt = function (t) {
    var v = this.turn0, ev = this.faceEv;
    for (var i = 0; i < ev.length; i++) {
      if (ev[i].t > t) break;
      var p = EASE.soft(clamp((t - ev[i].t) / 0.24, 0, 1));
      v = lerp(v, ev[i].v, p);
    }
    return v;
  };
  AP.dirAt = function (t) {
    var d = this.dir0, ev = this.faceEv;
    for (var i = 0; i < ev.length; i++) { if (ev[i].t + 0.12 > t) break; if (ev[i].v !== 0) d = ev[i].v > 0 ? 1 : -1; }
    return d;
  };
  AP.visibleAt = function (t) {
    var on = true;
    for (var i = 0; i < this.vis.length; i++) { if (this.vis[i].t > t) break; on = this.vis[i].on; }
    if (this.vis.length && this.vis[0].on && t < this.vis[0].t) on = false;
    return on;
  };
  function mirrorPose(p) {
    var m = clone(p);
    m.aLa = p.aRa; m.aLe = p.aRe; m.aRa = p.aLa; m.aRe = p.aLe; m.hL = p.hR; m.hR = p.hL;
    m.fLx = -p.fRx; m.fRx = -p.fLx; m.fLy = p.fRy; m.fRy = p.fLy; m.kL = p.kR; m.kR = p.kL;
    m.lean = -p.lean; m.bx = -p.bx; m.tilt = -p.tilt; m.lookX = -p.lookX;
    return m;
  }
  function rot(x, y, deg) { var a = deg * D2R, c = Math.cos(a), s = Math.sin(a); return [x * c - y * s, x * s + y * c]; }

  /** Compute & write the actor at time t. Stores world-space anchors for bubbles/marks. */
  AP.update = function (t) {
    if (this.dirty) this.compile();
    var c = this.c;
    var vis = this.visibleAt(t);
    this.root.style.display = vis ? "" : "none";
    this.visible = vis;
    if (!vis) return;
    // position + gait
    var x = this.moveX(t), gait = null, gw = 0, dist = 0, mv = null;
    for (var i = 0; i < this.moves.length; i++) {
      var m = this.moves[i];
      if (t >= m.t && t <= m.t + m.dur + 0.18) { mv = m; }
      if (t >= m.t) dist = m.dist0 + Math.abs(this.moveX(Math.min(t, m.t + m.dur)) - m.from);
    }
    if (mv) {
      gait = mv.gait;
      var lt = t - mv.t;
      gw = Math.min(sm(lt / 0.14), sm((mv.t + mv.dur + 0.18 - t) / 0.2));
      if (Math.abs(mv.x - mv.from) < 2) gw = 0;
    }
    // pose
    var kfIdx = 0;
    for (i = 0; i < this.poses.length; i++) if (this.poses[i].t <= t) kfIdx = i;
    var curPose = POSES[this.poses[kfIdx].name];
    var sitK = this.poses[kfIdx].name === "sit" ? sm((t - this.poses[kfIdx].t) / 0.25) : 0;
    this.stool.style.display = sitK > 0.02 ? "" : "none";
    if (sitK > 0.02) this.stool.setAttribute("transform", "scale(" + fx(sitK) + ")");
    var p = this.poseEval(t);
    var turn = this.turnAt(t), dir = this.dirAt(t);
    var ex = this.exprEval(t);
    var talking = this.isTalking(t);
    var sp = talking ? this.speech(t) : null;
    var ph = this.phase;
    // idle life: breathing + sway
    var br = Math.sin(t * 2.3 + ph);
    p.sq *= 1 + br * 0.011;
    p.shrug += br * 1.4;
    p.aLa += Math.sin(t * 1.4 + ph) * 1.6; p.aRa += Math.sin(t * 1.3 + ph + 1) * 1.6;
    p.tilt += noise(t * 0.45, this.seed) * 2.2;
    // talking: head bob + beat gestures on stressed words
    if (talking) {
      p.tilt += noise(t * 2.2, this.seed + 3) * 3.2;
      p.hy += sp ? -sp.open * 2.2 : 0;
      var calm = curPose === POSES.idle || curPose === POSES.stand || curPose === POSES.talk || curPose === POSES.explain || curPose === POSES.present;
      if (this.gestures && calm && !gait) {
        var gest = this.gestureAt(t);
        p.aRa += gest.r * 26; p.aRe += gest.r * 58; if (gest.r > 0.35) p.hR = 3;
        p.aLa += gest.l * 22; p.aLe += gest.l * 50; if (gest.l > 0.35) p.hL = 3;
        p.tilt += (gest.r - gest.l) * 3; p.by -= (gest.r + gest.l) * 2;
      }
    }
    // gait cycles (authored facing right; mirrored below)
    var bob = 0;
    if (gait && gw > 0) {
      var stride = gait === "run" ? 150 : gait === "hop" ? 160 : 92;
      var cyc = (dist / (stride * this.scale)) * PI;
      var s1 = Math.sin(cyc), c1 = Math.cos(cyc);
      if (gait === "hop") {
        var hp = Math.abs(Math.sin(cyc * 0.5));
        p.by = lerp(p.by, -hp * 70, gw); p.fLy = p.fRy = hp * 22 * gw; p.aLa = lerp(p.aLa, 60 + hp * 60, gw); p.aRa = lerp(p.aRa, 60 + hp * 60, gw);
      } else {
        var amp = gait === "run" ? 46 : 30;
        p.fLx = lerp(p.fLx, s1 * amp, gw); p.fRx = lerp(p.fRx, -s1 * amp, gw);
        p.fLy = lerp(p.fLy, Math.max(0, c1) * (gait === "run" ? 34 : 18), gw);
        p.fRy = lerp(p.fRy, Math.max(0, -c1) * (gait === "run" ? 34 : 18), gw);
        bob = -Math.abs(c1) * (gait === "run" ? 16 : 7) * gw;
        var swing = gait === "run" ? 40 : 20;
        if (curPose === POSES.idle || curPose === POSES.walk || curPose === POSES.run || curPose === POSES.stand || curPose === POSES.talk) {
          p.aLa = lerp(p.aLa, 10 + s1 * swing, gw); p.aRa = lerp(p.aRa, 10 - s1 * swing, gw);
          p.aLe = lerp(p.aLe, gait === "run" ? 80 : 12 + Math.max(0, s1) * 20, gw); p.aRe = lerp(p.aRe, gait === "run" ? 80 : 12 + Math.max(0, -s1) * 20, gw);
          if (gait === "run") { p.hL = p.hR = 1; }
        }
        p.lean = lerp(p.lean, gait === "run" ? 11 : 3, gw);
        p.tilt += s1 * 2 * gw;
      }
    }
    if (dir < 0) p = mirrorPose(p);
    var lookX = p.lookX, lookY = p.lookY;
    var lk = this.lookTarget(t, x);
    if (lk) { lookX = lk.x; lookY = lk.y; }
    // ── skeleton ──
    var s = this.scale;
    var hipX = p.bx, hipY = RIG.hipY + p.by + bob;
    var L = p.lean, sq = p.sq;
    function tp(px, py) { var r = rot(px, py * sq, L); return [hipX + r[0], hipY + r[1]]; }
    // torso
    this.torso.setAttribute("transform", "translate(" + fx(hipX) + "," + fx(hipY) + ") rotate(" + fx(L) + ") scale(1," + fx(sq) + ")");
    // head
    var neck = tp(0, RIG.neckY);
    var tilt = p.tilt + L * 0.4;
    var hc = rot(0, RIG.headY + p.hy, tilt);
    var hx = neck[0] + hc[0] + p.hx, hy = neck[1] + hc[1];
    var headTr = "translate(" + fx(hx) + "," + fx(hy) + ") rotate(" + fx(tilt) + ")";
    this.head.setAttribute("transform", headTr);
    this.headBack.setAttribute("transform", headTr);
    // face turn: features slide toward facing direction
    var fs = turn * 13 + lookX * 4;
    this.faceG.setAttribute("transform", "translate(" + fx(fs) + "," + fx(lookY * 3) + ")");
    if (this.ears) {
      var ears = this.ears.children;
      if (ears[0]) ears[0].setAttribute("transform", "translate(" + fx(Math.max(0, turn) * 10) + ",0)");
      if (ears[1]) ears[1].setAttribute("transform", "translate(" + fx(Math.min(0, turn) * 10) + ",0)");
    }
    this.hairFront.setAttribute("transform", "translate(" + fx(-turn * 3) + ",0)");
    this.hairBack.setAttribute("transform", "translate(" + fx(-turn * 5) + ",0)");
    // arms
    var self = this;
    var ar = {};
    ["L", "R"].forEach(function (sd) {
      var sgn = sd === "R" ? 1 : -1;
      var sh = tp(sgn * RIG.shoulderX * c.build, RIG.shoulderY - p.shrug);
      var a = p["a" + sd + "a"], e = p["a" + sd + "e"];
      var aw = a - sgn * L * 0.6 * sgn * sgn;
      aw = sd === "R" ? a - L * 0.6 : a + L * 0.6;
      var ua = aw * D2R, fa = (aw + e) * D2R;
      var ex1 = sh[0] + sgn * Math.sin(ua) * RIG.upper, ey1 = sh[1] + Math.cos(ua) * RIG.upper;
      var wx = ex1 + sgn * Math.sin(fa) * RIG.lower, wy = ey1 + Math.cos(fa) * RIG.lower;
      var d = "M" + fx(sh[0]) + "," + fx(sh[1]) + " L" + fx(ex1) + "," + fx(ey1) + " L" + fx(wx) + "," + fx(wy);
      var A = self.arms[sd];
      A.o.setAttribute("d", d); A.f.setAttribute("d", d);
      if (A.so) {
        var sl = "M" + fx(sh[0]) + "," + fx(sh[1]) + " L" + fx(lerp(sh[0], ex1, 0.4)) + "," + fx(lerp(sh[1], ey1, 0.4));
        A.so.setAttribute("d", sl); A.sf.setAttribute("d", sl);
      }
      var hdx = sgn * Math.sin(fa), hdy = Math.cos(fa);
      var hrot = Math.atan2(-hdx, hdy) / D2R;
      var hs = Math.round(p["h" + sd]);
      if (hs !== A.cur) { A.shapes.forEach(function (n, k) { n.style.display = k === hs ? "" : "none"; }); A.cur = hs; }
      A.hand.setAttribute("transform", "translate(" + fx(wx) + "," + fx(wy) + ") rotate(" + fx(hrot) + ") scale(" + (sd === "L" ? -1 : 1) + ",1)");
      ar[sd] = { x: wx + hdx * 16, y: wy + hdy * 16, rot: hrot };
    });
    // legs (IK)
    ["L", "R"].forEach(function (sd) {
      var sgn = sd === "R" ? 1 : -1;
      var hj = tp(sgn * RIG.hipX, 4);
      var ax = sgn * (RIG.hipX + 4) + p["f" + sd + "x"], ay = RIG.ankleY - p["f" + sd + "y"];
      var dx = ax - hj[0], dy = ay - hj[1], dd = Math.sqrt(dx * dx + dy * dy), l1 = RIG.thigh, l2 = RIG.shin;
      if (dd > l1 + l2 - 1) { var k = (l1 + l2 - 1) / dd; ax = hj[0] + dx * k; ay = hj[1] + dy * k; dx = ax - hj[0]; dy = ay - hj[1]; dd = l1 + l2 - 1; }
      dd = Math.max(dd, 20);
      var aa = (l1 * l1 - l2 * l2 + dd * dd) / (2 * dd), hh = Math.sqrt(Math.max(0, l1 * l1 - aa * aa));
      var bend = Math.abs(turn) > 0.35 ? (turn > 0 ? 1 : -1) : sgn * p["k" + sd];
      var ux = dx / dd, uy = dy / dd;
      var px = bend > 0 ? uy : -uy, py = bend > 0 ? -ux : ux;
      var kx = hj[0] + ux * aa + px * hh, ky = hj[1] + uy * aa + py * hh;
      var d = "M" + fx(hj[0]) + "," + fx(hj[1] - 6) + " L" + fx(kx) + "," + fx(ky) + " L" + fx(ax) + "," + fx(ay);
      var Lg = self.legs[sd];
      Lg.o.setAttribute("d", d); Lg.f.setAttribute("d", d);
      if (Lg.so) { var sd2 = "M" + fx(hj[0]) + "," + fx(hj[1] - 6) + " L" + fx(lerp(hj[0], kx, 0.62)) + "," + fx(lerp(hj[1], ky, 0.62)); Lg.so.setAttribute("d", sd2); Lg.sf.setAttribute("d", sd2); }
      var fdir = Math.abs(turn) > 0.35 ? (turn > 0 ? 1 : -1) : sgn;
      var tiltF = p["f" + sd + "y"] > 4 ? -fdir * Math.min(25, p["f" + sd + "y"]) : 0;
      Lg.shoe.setAttribute("transform", "translate(" + fx(ax) + "," + fx(ay + 6) + ") rotate(" + fx(tiltF) + ") scale(" + fdir * 0.92 + ",1)");
    });
    // face
    var blink = 0;
    for (i = 0; i < this.blinks.length; i++) {
      var bt = t - this.blinks[i];
      if (bt >= 0 && bt < 0.2) blink = Math.max(blink, bt < 0.07 ? bt / 0.07 : bt < 0.11 ? 1 : 1 - (bt - 0.11) / 0.09);
    }
    var eo = ex.eo * (1 - blink * 0.92);
    var eh = ex.eh;
    if (sp && sp.stress) { ex.bLy -= 3; ex.bRy -= 3; }
    var lx = lookX * 5, ly = lookY * 4;
    this.eyeL.setAttribute("d", eyePath(-28 + lx, -4 + ly, 9.5, 13 * eo, 13 * eo * (1 - 1.55 * eh)));
    this.eyeR.setAttribute("d", eyePath(28 + lx, -4 + ly, 9.5, 13 * eo, 13 * eo * (1 - 1.55 * eh)));
    var hiOp = eh > 0.45 || eo < 0.45 ? 0 : 1;
    this.hiL.setAttribute("cx", fx(-25 + lx)); this.hiL.setAttribute("cy", fx(-9 + ly)); this.hiL.setAttribute("opacity", hiOp);
    this.hiR.setAttribute("cx", fx(31 + lx)); this.hiR.setAttribute("cy", fx(-9 + ly)); this.hiR.setAttribute("opacity", hiOp);
    this.browL.setAttribute("d", browPath(-28, -34 + ex.bLy - (ex.eo - 1) * 10, ex.bLa, -1));
    this.browR.setAttribute("d", browPath(28, -34 + ex.bRy - (ex.eo - 1) * 10, ex.bRa, 1));
    this.blushL.setAttribute("opacity", fx(ex.blush * 0.55)); this.blushR.setAttribute("opacity", fx(ex.blush * 0.55));
    // mouth
    var mo = ex.mo, mw = ex.mw, mr = ex.mr, ms = ex.ms, wide = 0;
    if (sp) {
      mo = Math.max(mo * 0.5, 0.08 + sp.open * 0.62);
      mr = lerp(mr, sp.round, 0.8); wide = sp.wide;
      mw = Math.max(11, mw * 0.85) * (1 + 0.18 * wide - 0.3 * sp.round);
      ms = ms * 0.7;
    } else if (talking) { mo = mo * 0.6; }
    this.setMouth(mw, mo, ms, mr, ex.mk);
    if (this.chest) this.chest.setAttribute("opacity", fx(0.65 + 0.35 * Math.sin(t * 4 + ph)));
    // held props
    for (i = 0; i < this.holds.length; i++) {
      var h = this.holds[i], on = t >= h.t && t < h.t2;
      h.el.style.display = on ? "" : "none";
      if (!on) continue;
      var hp2 = ar[h.hand], pop = EASE.snap(clamp((t - h.t) / 0.35, 0, 1)) * h.size;
      h.el.setAttribute("transform", "translate(" + fx(hp2.x) + "," + fx(hp2.y - 10) + ") scale(" + fx(pop) + ")");
    }
    // root transform
    var jumpY = Math.min(0, p.by);
    this.x = x;
    var yy = this.y0;
    this.root.setAttribute("transform", "translate(" + fx(x) + "," + fx(yy) + ") scale(" + fx(s) + ")");
    this.shadow.setAttribute("rx", fx(74 * (1 + jumpY / 400)));
    this.shadow.setAttribute("opacity", fx(1 + jumpY / 300));
    // anchors (world)
    this.anchor = {
      head: { x: x + hx * s, y: yy + hy * s },
      top: { x: x + hx * s, y: yy + (hy - 100) * s },
      mouth: { x: x + (hx + fs) * s, y: yy + (hy + 40) * s },
      handL: { x: x + ar.L.x * s, y: yy + ar.L.y * s },
      handR: { x: x + ar.R.x * s, y: yy + ar.R.y * s },
      feet: { x: x, y: yy },
      s: s, dir: dir, talking: talking,
    };
  };
  AP.gestureAt = function (t) {
    // smooth bumps on stressed words: alternate right / both / left
    var W = this.talkWords, r = 0, l = 0, n = 0;
    for (var i = 0; i < W.length; i++) {
      var w = W[i];
      if (w.s > t) break;
      if (!w.stress && i % 5 !== 2) continue;
      n++;
      var dt = t - w.s;
      if (dt > 1.3) continue;
      var k = dt < 0.25 ? EASE.soft(dt / 0.25) : 1 - sm((dt - 0.25) / 1.05);
      var which = (i * 7 + this.seed) % 3;
      if (which === 0) r = Math.max(r, k);
      else if (which === 1) { r = Math.max(r, k * 0.8); l = Math.max(l, k * 0.8); }
      else l = Math.max(l, k);
    }
    return { r: r, l: l };
  };
  AP.lookTarget = function (t, x) {
    var cur = null;
    for (var i = 0; i < this.looks.length; i++) { if (this.looks[i].t > t) break; cur = this.looks[i]; }
    if (!cur || cur.target == null || cur.target === "auto") return null;
    var tg = cur.target;
    if (tg === "camera" || tg === "front") return { x: 0, y: 0 };
    if (tg === "up") return { x: 0.2, y: -1 };
    if (tg === "down") return { x: 0, y: 1 };
    if (tg === "left") return { x: -1, y: 0 };
    if (tg === "right") return { x: 1, y: 0 };
    var tx = tg.anchor ? tg.anchor.head.x : num(tg.x != null ? tg.x : tg, x);
    var ty = tg.anchor ? tg.anchor.head.y : tg.y != null ? num(tg.y, 0) : null;
    var dx = clamp((tx - x) / 300, -1, 1);
    var dy = ty == null || !this.anchor ? 0 : clamp((ty - this.anchor.head.y) / 300, -1, 1);
    return { x: dx, y: dy };
  };
  function eyePath(cx, cy, rx, top, bot) {
    top = Math.max(1.6, top); if (bot >= 0) bot = Math.max(1.6, bot); else bot = Math.min(bot, top - 4);
    var k = 1.33;
    return "M" + fx(cx - rx) + "," + fx(cy) + " C" + fx(cx - rx) + "," + fx(cy - top * k) + " " + fx(cx + rx) + "," + fx(cy - top * k) + " " + fx(cx + rx) + "," + fx(cy) +
      " C" + fx(cx + rx) + "," + fx(cy + bot * k) + " " + fx(cx - rx) + "," + fx(cy + bot * k) + " " + fx(cx - rx) + "," + fx(cy) + "Z";
  }
  function browPath(cx, cy, ang, side) {
    // side -1 = screen-left brow (inner end at +x)
    var inX = cx - side * 12, outX = cx + side * 13;
    var inY = cy - ang * 0.32, outY = cy + ang * 0.22;
    return "M" + fx(outX) + "," + fx(outY) + " Q" + fx(cx) + "," + fx(cy - 6 - Math.abs(ang) * 0.05) + " " + fx(inX) + "," + fx(inY);
  }
  AP.setMouth = function (w, o, s, r, k) {
    var hw = w * (1 - 0.38 * r);
    var cl = -s * 5 - k * 5, cr = -s * 5 + k * 5;
    if (o < 0.07) {
      var mid = s * 7 + (cl + cr) / 2;
      var d = "M" + fx(-hw) + "," + fx(cl) + " Q" + fx(k * 5) + "," + fx(mid + s * 3) + " " + fx(hw) + "," + fx(cr);
      this.mLine.setAttribute("d", d);
      this.mLine.style.display = "";
      this.mFill.style.display = "none"; this.mClip.setAttribute("d", "M0,0Z");
      this.teeth.style.display = "none"; this.tongue.style.display = "none";
      return;
    }
    var oh = o * 30 * (1 + 0.2 * r);
    var top = s * 3 - oh * (0.18 + r * 0.3);
    var bot = oh * (0.9 + 0.1 * r) + s * oh * 0.15;
    var bw = 0.55 + 0.35 * r;
    var dd = "M" + fx(-hw) + "," + fx(cl) + " C" + fx(-hw * 0.55) + "," + fx(top) + " " + fx(hw * 0.55) + "," + fx(top) + " " + fx(hw) + "," + fx(cr) +
      " C" + fx(hw * bw) + "," + fx(bot * 1.3) + " " + fx(-hw * bw) + "," + fx(bot * 1.3) + " " + fx(-hw) + "," + fx(cl) + "Z";
    this.mFill.setAttribute("d", dd);
    this.mFill.style.display = "";
    this.mFill.setAttribute("stroke", this.c.robot ? "#4FE3FF" : INK);
    this.mFill.setAttribute("stroke-width", this.c.robot ? 4 : OUT);
    this.mFill.setAttribute("stroke-linejoin", "round");
    this.mClip.setAttribute("d", dd);
    this.mLine.style.display = "none";
    var showTeeth = s > 0.3 && o > 0.18 && r < 0.5;
    this.teeth.style.display = showTeeth ? "" : "none";
    if (showTeeth) { this.teeth.setAttribute("y", fx(top - 8)); this.teeth.setAttribute("height", fx(Math.min(11, oh * 0.32) + 8)); }
    this.tongue.style.display = o > 0.22 ? "" : "none";
    this.tongue.setAttribute("cx", fx(k * 3)); this.tongue.setAttribute("cy", fx(bot * 1.05));
    this.tongue.setAttribute("rx", fx(hw * 0.62)); this.tongue.setAttribute("ry", fx(Math.max(3, oh * 0.38)));
  };

  // ───────────────────────── props library ─────────────────────────
  // Each prop is drawn in a ~100×100 box centred on (0,0), ink-outlined like the cast.
  var PS = ' stroke="' + INK + '" stroke-width="' + OUT + '" stroke-linejoin="round" stroke-linecap="round"';
  var PROPS = {
    laptop: '<path d="M-38,-34 L38,-34 C42,-34 44,-32 44,-28 L44,14 L-44,14 L-44,-28 C-44,-32 -42,-34 -38,-34Z" fill="#3A4660"' + PS + '/><rect x="-36" y="-26" width="72" height="34" rx="3" fill="#7FD3F7"/><path d="M-30,-14 L-6,-14 M-30,-4 L10,-4" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity=".8"/><path d="M-56,14 L56,14 L50,26 L-50,26Z" fill="#C9D3DC"' + PS + "/>",
    phone: '<rect x="-22" y="-44" width="44" height="88" rx="10" fill="#2A2140"' + PS + '/><rect x="-16" y="-34" width="32" height="62" rx="4" fill="#6FD0FF"/><circle cx="0" cy="36" r="3.5" fill="#FFFFFF"/><path d="M-10,-20 L10,-20 M-10,-10 L4,-10" stroke="#fff" stroke-width="4" stroke-linecap="round"/>',
    coffee: '<path d="M-28,-26 L28,-26 L22,36 C21,42 17,44 12,44 L-12,44 C-17,44 -21,42 -22,36Z" fill="#FFFFFF"' + PS + '/><path d="M28,-12 C46,-12 46,18 24,18" fill="none"' + PS + '/><path d="M-26,-6 L26,-6 L24,10 L-24,10Z" fill="#E8584A"/><path d="M-8,-36 C-14,-46 -2,-50 -8,-60 M8,-36 C2,-46 14,-50 8,-60" fill="none" stroke="#B8B0C8" stroke-width="4" stroke-linecap="round" class="cz-steam"/>',
    book: '<path d="M-46,-30 C-30,-38 -12,-38 0,-28 C12,-38 30,-38 46,-30 L46,34 C30,26 12,26 0,36 C-12,26 -30,26 -46,34Z" fill="#FFFFFF"' + PS + '/><path d="M-50,-26 L-50,40 C-30,32 -12,32 0,42 C12,32 30,32 50,40 L50,-26" fill="none"' + PS + '/><path d="M0,-28 L0,36" stroke="' + INK + '" stroke-width="3"/><path d="M-36,-16 L-12,-12 M-36,-4 L-12,0 M12,-12 L36,-16 M12,0 L36,-4" stroke="#9AA3B5" stroke-width="3.5" stroke-linecap="round"/><path d="M-50,40 L-50,46 C-30,38 -12,38 0,48 C12,38 30,38 50,46 L50,40" fill="#3E7BF0"' + PS + "/>",
    money: '<rect x="-46" y="-26" width="92" height="52" rx="6" fill="#7BD389"' + PS + '/><circle cx="0" cy="0" r="15" fill="#5BBF6C" stroke="' + INK + '" stroke-width="3.5"/><path d="M6,-8 C3,-11 -7,-11 -7,-5 C-7,1 7,0 7,6 C7,12 -4,12 -7,9 M0,-14 L0,14" fill="none" stroke="' + INK + '" stroke-width="3.5" stroke-linecap="round"/><circle cx="-32" cy="-12" r="4" fill="#5BBF6C"/><circle cx="32" cy="12" r="4" fill="#5BBF6C"/>',
    coin: '<circle cx="0" cy="0" r="40" fill="#F5C23B"' + PS + '/><circle cx="0" cy="0" r="29" fill="none" stroke="#D99A1E" stroke-width="5"/><path d="M10,-12 C5,-17 -11,-17 -11,-7 C-11,2 11,0 11,9 C11,19 -6,19 -11,13 M0,-21 L0,21" fill="none" stroke="#B8781A" stroke-width="6" stroke-linecap="round"/><path d="M-22,-26 C-14,-32 -6,-34 2,-34" stroke="#FFF2B8" stroke-width="5" stroke-linecap="round" fill="none"/>',
    lightbulb: '<path d="M0,-50 C-28,-50 -40,-30 -40,-12 C-40,6 -26,16 -20,28 L20,28 C26,16 40,6 40,-12 C40,-30 28,-50 0,-50Z" fill="#FFD84A"' + PS + '/><rect x="-18" y="28" width="36" height="20" rx="4" fill="#B4C1CD"' + PS + '/><path d="M-18,38 L18,38" stroke="' + INK + '" stroke-width="3"/><path d="M-8,10 L-8,-6 L0,4 L8,-6 L8,10" fill="none" stroke="#E79A1E" stroke-width="4" stroke-linejoin="round"/><path d="M-22,-24 C-18,-34 -10,-38 -4,-38" fill="none" stroke="#FFF6C8" stroke-width="5" stroke-linecap="round"/>',
    globe: '<circle cx="0" cy="0" r="42" fill="#5CB8F2"' + PS + '/><path d="M-30,-22 C-18,-30 -8,-18 -16,-8 C-24,2 -10,10 -4,4 C4,-4 16,6 10,16 C4,26 -12,22 -22,28 C-34,14 -38,-6 -30,-22Z M14,-36 C24,-30 34,-20 36,-8 C28,-8 20,-16 22,-24 C16,-26 12,-32 14,-36Z" fill="#6BCB77"/><circle cx="0" cy="0" r="42" fill="none"' + PS + '/><path d="M-26,-30 C-20,-36 -10,-40 0,-40" fill="none" stroke="#C7EBFF" stroke-width="5" stroke-linecap="round"/>',
    rocket: '<path d="M0,-54 C22,-34 26,-6 20,22 L-20,22 C-26,-6 -22,-34 0,-54Z" fill="#F2F2F7"' + PS + '/><circle cx="0" cy="-14" r="10" fill="#5CB8F2" stroke="' + INK + '" stroke-width="4"/><path d="M-20,4 L-36,28 L-18,26Z M20,4 L36,28 L18,26Z" fill="#E8584A"' + PS + '/><path d="M-12,24 L12,24 L6,40 L0,52 L-6,40Z" fill="#FFB43A"' + PS + '/><path d="M0,-54 C10,-46 16,-38 18,-30 L-18,-30 C-16,-38 -10,-46 0,-54Z" fill="#E8584A"' + PS + "/>",
    clock: '<circle cx="0" cy="0" r="42" fill="#FFFFFF"' + PS + '/><circle cx="0" cy="0" r="42" fill="none" stroke="#E8584A" stroke-width="7"/><circle cx="0" cy="0" r="46" fill="none" stroke="' + INK + '" stroke-width="' + OUT + '"/><path d="M0,0 L0,-26 M0,0 L18,8" stroke="' + INK + '" stroke-width="5" stroke-linecap="round" class="cz-hands"/><circle cx="0" cy="0" r="4" fill="' + INK + '"/><path d="M0,-36 L0,-31 M36,0 L31,0 M0,36 L0,31 M-36,0 L-31,0" stroke="' + INK + '" stroke-width="4" stroke-linecap="round"/>',
    trophy: '<path d="M-28,-40 L28,-40 L26,-6 C24,10 12,18 0,18 C-12,18 -24,10 -26,-6Z" fill="#F5C23B"' + PS + '/><path d="M-28,-30 C-48,-30 -48,0 -24,2 M28,-30 C48,-30 48,0 24,2" fill="none"' + PS + '/><rect x="-6" y="18" width="12" height="14" fill="#E0A325"' + PS + '/><rect x="-24" y="32" width="48" height="14" rx="3" fill="#8A5A3B"' + PS + '/><path d="M-12,-30 C-12,-16 -8,-6 -2,0" fill="none" stroke="#FFF2B8" stroke-width="5" stroke-linecap="round"/>',
    magnifier: '<path d="M20,20 L44,44" stroke="' + INK + '" stroke-width="18" stroke-linecap="round"/><path d="M20,20 L44,44" stroke="#8A5A3B" stroke-width="9" stroke-linecap="round"/><circle cx="-6" cy="-6" r="34" fill="#C7EBFF" fill-opacity=".7"' + PS + '/><circle cx="-6" cy="-6" r="34" fill="none" stroke="#B4C1CD" stroke-width="4"/><path d="M-26,-14 C-24,-24 -16,-30 -8,-30" fill="none" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>',
    briefcase: '<rect x="-46" y="-24" width="92" height="62" rx="8" fill="#8A5A3B"' + PS + '/><path d="M-16,-24 L-16,-36 C-16,-40 -14,-42 -10,-42 L10,-42 C14,-42 16,-40 16,-36 L16,-24" fill="none"' + PS + '/><path d="M-46,0 L46,0" stroke="' + INK + '" stroke-width="3.5"/><rect x="-8" y="-6" width="16" height="12" rx="2" fill="#F5C23B" stroke="' + INK + '" stroke-width="3"/>',
    megaphone: '<path d="M-30,-12 L22,-38 L22,38 L-30,12Z" fill="#E8584A"' + PS + '/><rect x="-44" y="-14" width="16" height="28" rx="4" fill="#F2F2F7"' + PS + '/><ellipse cx="22" cy="0" rx="8" ry="38" fill="#F2F2F7"' + PS + '/><path d="M-30,12 L-22,34 L-10,30 L-14,8" fill="#3A4660"' + PS + "/>",
    gift: '<rect x="-40" y="-14" width="80" height="56" rx="4" fill="#9B6CF2"' + PS + '/><rect x="-46" y="-30" width="92" height="20" rx="4" fill="#B48CF7"' + PS + '/><rect x="-8" y="-30" width="16" height="72" fill="#F5C23B"' + PS + '/><path d="M0,-30 C-20,-56 -38,-36 -16,-30 M0,-30 C20,-56 38,-36 16,-30" fill="#F5C23B"' + PS + "/>",
    heart: '<path d="M0,40 C-48,6 -50,-34 -24,-40 C-12,-43 -4,-36 0,-26 C4,-36 12,-43 24,-40 C50,-34 48,6 0,40Z" fill="#F2556E"' + PS + '/><path d="M-30,-22 C-28,-30 -22,-32 -16,-32" fill="none" stroke="#FFC2CC" stroke-width="5" stroke-linecap="round"/>',
    star: '<path d="M0,-46 L13,-15 L46,-13 L20,8 L29,42 L0,23 L-29,42 L-20,8 L-46,-13 L-13,-15Z" fill="#F5C23B"' + PS + '/><path d="M-6,-24 L-2,-32" stroke="#FFF2B8" stroke-width="5" stroke-linecap="round"/>',
    pizza: '<path d="M-40,-30 C-14,-44 14,-44 40,-30 L0,46Z" fill="#F7C65C"' + PS + '/><path d="M-40,-30 C-14,-44 14,-44 40,-30 L36,-22 C12,-34 -12,-34 -36,-22Z" fill="#D9893B"' + PS + '/><circle cx="-12" cy="-12" r="7" fill="#E8584A"/><circle cx="10" cy="-6" r="7" fill="#E8584A"/><circle cx="0" cy="14" r="6" fill="#E8584A"/>',
    plant: '<path d="M-24,10 L24,10 L18,46 L-18,46Z" fill="#D9734A"' + PS + '/><path d="M0,10 C-2,-10 -24,-20 -36,-40 C-14,-38 -2,-24 0,-6 C2,-30 10,-46 30,-52 C26,-30 12,-16 2,4 C10,-8 26,-12 40,-8 C30,4 14,8 2,10" fill="#4DBA6E"' + PS + "/>",
    calendar: '<rect x="-40" y="-36" width="80" height="80" rx="8" fill="#FFFFFF"' + PS + '/><path d="M-40,-14 L40,-14 L40,-28 C40,-32 38,-36 32,-36 L-32,-36 C-38,-36 -40,-32 -40,-28Z" fill="#E8584A"' + PS + '/><path d="M-22,-44 L-22,-28 M22,-44 L22,-28" stroke="' + INK + '" stroke-width="5" stroke-linecap="round"/><path d="M-26,0 L-14,0 M-6,0 L6,0 M14,0 L26,0 M-26,16 L-14,16 M-6,16 L6,16 M14,16 L26,16 M-26,30 L-14,30" stroke="#9AA3B5" stroke-width="5" stroke-linecap="round"/>',
    "piggy-bank": '<path d="M-40,4 C-40,-26 -14,-38 10,-36 C34,-34 48,-18 46,4 C46,22 34,34 20,36 L20,46 L8,46 L6,38 L-14,38 L-16,46 L-28,46 L-28,32 C-36,26 -40,16 -40,4Z" fill="#F7A1B6"' + PS + '/><ellipse cx="46" cy="0" rx="9" ry="11" fill="#F58AA4"' + PS + '/><circle cx="26" cy="-12" r="4" fill="' + INK + '"/><path d="M-6,-36 L-4,-48 L8,-38" fill="#F58AA4"' + PS + '/><rect x="-12" y="-42" width="20" height="5" rx="2" fill="' + INK + '"/>',
    key: '<circle cx="-22" cy="0" r="20" fill="#F5C23B"' + PS + '/><circle cx="-22" cy="0" r="7" fill="#FFFFFF" stroke="' + INK + '" stroke-width="3.5"/><path d="M-2,-6 L44,-6 L44,6 L36,6 L36,16 L26,16 L26,6 L-2,6Z" fill="#F5C23B"' + PS + "/>",
    chart: '<rect x="-46" y="-40" width="92" height="80" rx="6" fill="#FFFFFF"' + PS + '/><rect x="-32" y="4" width="14" height="24" fill="#3E7BF0"/><rect x="-8" y="-10" width="14" height="38" fill="#2FBF7B"/><rect x="16" y="-26" width="14" height="54" fill="#FF7A59"/><path d="M-36,-6 L-14,-18 L6,-14 L34,-34" fill="none" stroke="' + INK + '" stroke-width="4"/>',
    target: '<circle r="44" fill="#FFFFFF"' + PS + '/><circle r="32" fill="#E8584A"/><circle r="21" fill="#FFFFFF"/><circle r="10" fill="#E8584A"/><path d="M0,0 L36,-36" stroke="' + INK + '" stroke-width="5" stroke-linecap="round"/><path d="M36,-36 L28,-44 M36,-36 L44,-28" stroke="' + INK + '" stroke-width="4" stroke-linecap="round"/>',
    warning: '<path d="M0,-44 L46,38 L-46,38Z" fill="#F5C23B"' + PS + '/><path d="M0,-12 L0,12" stroke="' + INK + '" stroke-width="8" stroke-linecap="round"/><circle cx="0" cy="26" r="5" fill="' + INK + '"/>',
    house: '<path d="M-40,-4 L0,-40 L40,-4 L40,40 L-40,40Z" fill="#FFE2B8"' + PS + '/><path d="M-50,0 L0,-46 L50,0" fill="none" stroke="#E8584A" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/><path d="M-50,0 L0,-46 L50,0" fill="none" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round" stroke-linecap="round" opacity=".5"/><rect x="-10" y="14" width="20" height="26" fill="#8A5A3B"' + PS + '/><rect x="16" y="2" width="14" height="14" fill="#7FD3F7" stroke="' + INK + '" stroke-width="3"/>',
    car: '<path d="M-48,10 L-44,-6 C-42,-12 -36,-14 -30,-14 L-20,-30 C-16,-34 -12,-36 -6,-36 L18,-36 C24,-36 28,-34 32,-28 L40,-14 C46,-14 50,-8 50,0 L50,10 C50,16 46,20 40,20 L-42,20 C-46,20 -48,16 -48,10Z" fill="#3E7BF0"' + PS + '/><path d="M-16,-14 L-8,-28 L4,-28 L4,-14Z M10,-14 L10,-28 L22,-28 L30,-14Z" fill="#C7EBFF" stroke="' + INK + '" stroke-width="3"/><circle cx="-26" cy="20" r="12" fill="#3A4660"' + PS + '/><circle cx="28" cy="20" r="12" fill="#3A4660"' + PS + '/><circle cx="-26" cy="20" r="4" fill="#C9D3DC"/><circle cx="28" cy="20" r="4" fill="#C9D3DC"/>',
    brain: '<path d="M-6,-40 C-20,-48 -36,-40 -38,-26 C-50,-22 -52,-4 -44,4 C-50,16 -40,32 -26,30 C-22,42 -6,44 -2,34 L-2,-36Z M2,-36 C8,-48 30,-46 34,-30 C48,-26 50,-6 42,2 C50,16 40,32 26,30 C22,42 6,44 2,34Z" fill="#F7A1B6"' + PS + '/><path d="M-30,-14 C-22,-10 -18,-18 -12,-14 M-34,10 C-26,4 -18,14 -10,8 M30,-14 C22,-10 18,-18 12,-14 M34,10 C26,4 18,14 10,8" fill="none" stroke="#D9607E" stroke-width="3.5" stroke-linecap="round"/>',
    flag: '<path d="M-30,48 L-30,-46" stroke="' + INK + '" stroke-width="7" stroke-linecap="round"/><path d="M-28,-44 C-8,-52 8,-34 34,-42 L34,-6 C8,2 -8,-16 -28,-8Z" fill="#E8584A"' + PS + "/>",
    battery: '<rect x="-24" y="-40" width="48" height="84" rx="8" fill="#FFFFFF"' + PS + '/><rect x="-10" y="-50" width="20" height="10" rx="2" fill="' + INK + '"/><rect x="-14" y="0" width="28" height="34" rx="3" fill="#2FBF7B"/><path d="M4,-30 L-6,-12 L4,-12 L-4,4" fill="none" stroke="#F5C23B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>',
    water: '<path d="M0,-48 C18,-22 34,-2 34,16 C34,36 18,46 0,46 C-18,46 -34,36 -34,16 C-34,-2 -18,-22 0,-48Z" fill="#5CB8F2"' + PS + '/><path d="M-18,14 C-18,24 -12,30 -4,32" fill="none" stroke="#DDF3FF" stroke-width="5" stroke-linecap="round"/>',
    fire: '<path d="M0,-50 C10,-30 36,-18 34,10 C32,34 16,46 0,46 C-16,46 -34,34 -34,10 C-34,-8 -22,-18 -16,-30 C-12,-18 -6,-14 -2,-12 C-6,-28 -4,-40 0,-50Z" fill="#FF7A3D"' + PS + '/><path d="M0,0 C8,10 16,16 14,28 C12,38 6,42 0,42 C-6,42 -14,36 -14,28 C-14,16 -6,12 0,0Z" fill="#FFD84A"/>',
    question: '<circle r="44" fill="#9B6CF2"' + PS + '/><path d="M-13,-12 C-13,-30 15,-30 15,-12 C15,0 1,0 1,12" fill="none" stroke="#FFFFFF" stroke-width="10" stroke-linecap="round"/><circle cx="1" cy="28" r="6" fill="#FFFFFF"/>',
    check: '<circle r="44" fill="#2FBF7B"' + PS + '/><path d="M-20,2 L-6,16 L22,-14" fill="none" stroke="#FFFFFF" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>',
    cross: '<circle r="44" fill="#E8584A"' + PS + '/><path d="M-16,-16 L16,16 M16,-16 L-16,16" fill="none" stroke="#FFFFFF" stroke-width="10" stroke-linecap="round"/>',
    lock: '<path d="M-20,-10 L-20,-24 C-20,-38 -10,-46 0,-46 C10,-46 20,-38 20,-24 L20,-10" fill="none" stroke="' + INK + '" stroke-width="14"/><path d="M-20,-10 L-20,-24 C-20,-38 -10,-46 0,-46 C10,-46 20,-38 20,-24 L20,-10" fill="none" stroke="#B4C1CD" stroke-width="6"/><rect x="-34" y="-12" width="68" height="56" rx="8" fill="#F5C23B"' + PS + '/><circle cx="0" cy="12" r="7" fill="' + INK + '"/><path d="M0,14 L0,28" stroke="' + INK + '" stroke-width="6" stroke-linecap="round"/>',
    robot: '<rect x="-34" y="-30" width="68" height="56" rx="18" fill="#D9E2EA"' + PS + '/><rect x="-24" y="-20" width="48" height="34" rx="12" fill="#1E2840"/><circle cx="-10" cy="-4" r="5" fill="#4FE3FF"/><circle cx="10" cy="-4" r="5" fill="#4FE3FF"/><path d="M0,-30 L0,-44" stroke="' + INK + '" stroke-width="4"/><circle cx="0" cy="-46" r="6" fill="#E5484D" stroke="' + INK + '" stroke-width="3.5"/>',
    map: '<path d="M-46,-30 L-16,-40 L16,-30 L46,-40 L46,34 L16,44 L-16,34 L-46,44Z" fill="#FFF2D6"' + PS + '/><path d="M-16,-40 L-16,34 M16,-30 L16,44" stroke="' + INK + '" stroke-width="3"/><path d="M-34,20 C-20,0 0,16 10,-6 C16,-18 28,-10 34,-22" fill="none" stroke="#E8584A" stroke-width="4" stroke-dasharray="6 6" stroke-linecap="round"/>',
    shield: '<path d="M0,-46 L38,-32 L38,0 C38,24 20,40 0,48 C-20,40 -38,24 -38,0 L-38,-32Z" fill="#3E7BF0"' + PS + '/><path d="M-14,0 L-4,10 L16,-12" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>',
  };
  var PROP_ALIASES = { computer: "laptop", mobile: "phone", cup: "coffee", mug: "coffee", tea: "coffee", cash: "money", dollar: "money", bill: "money", idea: "lightbulb", bulb: "lightbulb", light: "lightbulb", earth: "globe", world: "globe", planet: "globe", launch: "rocket", time: "clock", watch: "clock", award: "trophy", prize: "trophy", win: "trophy", search: "magnifier", magnifying: "magnifier", "magnifying-glass": "magnifier", work: "briefcase", job: "briefcase", bag: "briefcase", announce: "megaphone", present: "gift", love: "heart", favorite: "heart", food: "pizza", nature: "plant", tree: "plant", date: "calendar", schedule: "calendar", savings: "piggy-bank", piggy: "piggy-bank", save: "piggy-bank", security: "lock", secure: "lock", "chart-board": "chart", graph: "chart", stats: "chart", goal: "target", danger: "warning", alert: "warning", home: "house", transport: "car", mind: "brain", think: "brain", energy: "battery", power: "battery", drop: "water", hot: "fire", flame: "fire", yes: "check", no: "cross", ai: "robot", bot: "robot", travel: "map", protect: "shield", safety: "shield", coins: "coin", gold: "coin" };
  function propName(n) { n = str(n).toLowerCase().trim(); if (PROPS[n]) return n; if (PROP_ALIASES[n]) return PROP_ALIASES[n]; return "star"; }
  function propSvg(n) { return PROPS[propName(n)]; }
  S.PROPS = PROPS;
  S.propNames = Object.keys(PROPS);
  /** Standalone <svg> for a prop (HTML contexts: boards, stickers). */
  function propIcon(n, size) {
    return '<svg viewBox="-60 -60 120 120" width="' + size + '" height="' + size + '" style="overflow:visible">' + propSvg(n) + "</svg>";
  }
  S.propIcon = propIcon;

  // ───────────────────────── scene / layers / camera ─────────────────────────
  var LAYERS = [["sky", 0.08], ["far", 0.3], ["mid", 0.55], ["near", 0.8], ["back", 0.93], ["floor", 1], ["action", 1], ["front", 1.28]];
  var current = null;

  function Scene(root, opts) {
    opts = opts || {};
    root = root || V.root();
    root.classList.add("cz-root");
    this.root = root;
    var W = V.width, H = V.height;
    this.W = W; this.H = H; this.k = H / 1000; this.Ww = (1000 * W) / H;
    this.portrait = V.isPortrait; this.square = V.isSquare;
    this.G = num(opts.ground, this.portrait ? 880 : this.square ? 895 : 905);
    this.charScale = num(opts.charScale, this.portrait ? 0.86 : this.square ? 0.9 : 1);
    var span = num(opts.span, 1);
    this.x0 = num(opts.x0, -this.Ww * 0.75);
    this.x1 = num(opts.x1, this.Ww * (0.75 + span));
    this.top = -380; this.bot = 1180;
    this.actors = []; this.markList = []; this.bubbles = []; this.frameFns = []; this.anims = [];
    this.world = el("div.cz-world", { parent: root });
    this.layers = {};
    var self = this;
    LAYERS.forEach(function (L) {
      var div = el("div.cz-layer", { parent: self.world });
      var svg = svgEl("svg", { class: "cz-lsvg", viewBox: [self.x0, self.top, self.x1 - self.x0, self.bot - self.top].map(fx).join(" "), preserveAspectRatio: "none" });
      svg.style.left = self.x0 * self.k + "px";
      svg.style.top = self.top * self.k + "px";
      svg.style.width = (self.x1 - self.x0) * self.k + "px";
      svg.style.height = (self.bot - self.top) * self.k + "px";
      div.appendChild(svg);
      self.layers[L[0]] = { div: div, svg: svg, d: L[1], g: g(svg) };
    });
    var act = this.layers.action;
    this.html = el("div.cz-html", { parent: act.div });
    act.div.appendChild(act.svg); // svg above html boards
    this.defs = svgEl("defs", null, act.svg);
    this.propLayer = g(act.svg, { class: "cz-props" });
    this.actorLayer = g(act.svg, { class: "cz-actors" });
    this.fx = g(act.svg, { class: "cz-fx" });
    this.overlay = el("div.cz-overlay", { parent: root });
    this.osvg = svgEl("svg", { class: "cz-osvg", width: W, height: H, viewBox: "0 0 " + W + " " + H });
    this.overlay.appendChild(this.osvg);
    this.cam = new Camera(this);
    this.location = locName(opts.location || "stage");
    this.loc = drawLocation(this, this.location, opts);
    current = this;
    V.onFrame(function (t) { self.update(t); });
  }
  S.Scene = Scene;
  var SP = Scene.prototype;
  SP.viewSpan = function () { return { x0: this.Ww / 2 - this.Ww / 2, x1: this.Ww }; };
  /** Evenly spaced stage positions for n characters (world x). */
  SP.slots = function (n, spread) {
    var span = (spread || (this.portrait ? 0.56 : this.square ? 0.58 : 0.44)) * this.Ww, out = [];
    for (var i = 0; i < n; i++) out.push(this.Ww / 2 + (n === 1 ? 0 : (i / (n - 1) - 0.5) * span));
    return out;
  };
  SP.character = function (name, opts) { return new Actor(this, name, opts); };
  SP.onFrame = function (f) { this.frameFns.push(f); };
  SP.toScreen = function (wx, wy) {
    var c = this.camNow || { x: this.Ww / 2, y: 500, z: 1 };
    return { x: (wx - c.x) * c.z * this.k + this.W / 2, y: (wy - c.y) * c.z * this.k + this.H / 2 };
  };
  SP.update = function (t) {
    var i;
    for (i = 0; i < this.actors.length; i++) this.actors[i].update(t);
    var c = this.cam.eval(t);
    this.camNow = c;
    for (var name in this.layers) {
      var L = this.layers[name], d = L.d;
      var cx = this.Ww / 2 + (c.x - this.Ww / 2) * d, cy = 500 + (c.y - 500) * d, z = 1 + (c.z - 1) * d;
      L.div.style.transform = "translate(" + fx(this.W / 2) + "px," + fx(this.H / 2) + "px) scale(" + z.toFixed(5) + ") translate(" + fx(-cx * this.k) + "px," + fx(-cy * this.k) + "px)";
    }
    for (i = 0; i < this.anims.length; i++) this.anims[i](t);
    for (i = 0; i < this.markList.length; i++) this.markList[i](t);
    for (i = 0; i < this.bubbles.length; i++) this.bubbles[i].update(t);
    for (i = 0; i < this.frameFns.length; i++) this.frameFns[i](t);
  };

  function Camera(sc) { this.sc = sc; this.kf = []; this.shakes = []; this.follows = []; this.base = { x: sc.Ww / 2, y: 500, z: 1 }; this.drift = 1; }
  S.Camera = Camera;
  var CP = Camera.prototype;
  function camTarget(sc, tg) {
    tg = tg || {};
    if (typeof tg === "function") return tg;
    return function (from) {
      var o = { x: from.x, y: from.y, z: from.z };
      if (tg.actor) {
        var a = tg.actor, tt = tg._t != null ? tg._t : 0;
        if (a.dirty) a.compile();
        o.x = a.moveX(tt) + num(tg.dx, 0);
        o.y = a.y0 - (num(tg.focusY, 330)) * a.scale + num(tg.dy, 0);
      }
      if (tg.x != null) o.x = num(tg.x, o.x);
      if (tg.y != null) o.y = num(tg.y, o.y);
      if (tg.zoom != null) o.z = num(tg.zoom, o.z);
      if (tg.z != null) o.z = num(tg.z, o.z);
      return o;
    };
  }
  CP.set = function (tg) { var f = camTarget(this.sc, tg)(this.base); this.base = f; return this; };
  CP.to = function (tg, at, dur, ease) {
    at = clampT(at == null ? 0 : at); dur = Math.max(0, num(dur, 1));
    if (tg && tg.actor) tg._t = at + dur;
    this.kf.push({ t: at, dur: dur, ease: ease || "inOutCubic", fn: camTarget(this.sc, tg) });
    this.dirty = true; return this;
  };
  CP.cut = function (tg, at) { return this.to(tg, at, 0); };
  CP.push = function (zoom, at, dur, tg) { var o = tg || {}; o.zoom = zoom; return this.to(o, at, dur == null ? 1.6 : dur, "inOutSine"); };
  CP.focus = function (actor, at, dur, zoom, opts) {
    opts = opts || {};
    return this.to({ actor: actor, zoom: zoom == null ? 1.35 : zoom, dx: opts.dx, dy: opts.dy, focusY: opts.focusY }, at, dur == null ? 0.9 : dur, opts.ease || "inOutCubic");
  };
  CP.follow = function (actor, from, to, opts) { this.follows.push({ a: actor, s: clampT(from), e: num(to, V.duration), o: opts || {} }); return this; };
  CP.shake = function (at, amp, dur) { this.shakes.push({ t: clampT(at), a: num(amp, 14), d: num(dur, 0.45) }); return this; };
  CP.compile = function () {
    ord(this.kf);
    this.from = [];
    for (var i = 0; i < this.kf.length; i++) this.from[i] = this.evalKf(this.kf[i].t, i - 1);
    this.dirty = false;
  };
  CP.evalKf = function (t, lim) {
    var c = { x: this.base.x, y: this.base.y, z: this.base.z };
    var n = lim == null ? this.kf.length - 1 : lim;
    for (var i = 0; i <= n; i++) {
      var k = this.kf[i];
      if (k.t > t) break;
      var from = this.from[i] || c;
      var tgt = k.fn(from);
      var p = k.dur <= 0 ? 1 : easeFn(k.ease)(clamp((t - k.t) / k.dur, 0, 1));
      c = { x: lerp(from.x, tgt.x, p), y: lerp(from.y, tgt.y, p), z: lerp(from.z, tgt.z, p) };
    }
    return c;
  };
  CP.eval = function (t) {
    if (this.dirty !== false) this.compile();
    var c = this.evalKf(t);
    for (var i = 0; i < this.follows.length; i++) {
      var f = this.follows[i];
      var w = Math.min(sm((t - f.s) / 0.7), sm((f.e - t) / 0.7));
      if (w <= 0) continue;
      var a = f.a; if (a.dirty) a.compile();
      var ax = (a.moveX(t) + a.moveX(t - 0.15) + a.moveX(t - 0.3) + a.moveX(t - 0.45)) / 4;
      var lead = num(f.o.lead, 120) * a.dirAt(t);
      c.x = lerp(c.x, ax + lead, w);
      if (f.o.zoom != null) c.z = lerp(c.z, num(f.o.zoom, 1), w);
    }
    // subtle handheld drift
    c.x += noise(t * 0.3, 11) * 4 * this.drift; c.y += noise(t * 0.27, 23) * 3 * this.drift;
    c.z *= 1 + noise(t * 0.2, 5) * 0.004 * this.drift;
    for (i = 0; i < this.shakes.length; i++) {
      var s = this.shakes[i], lt = t - s.t;
      if (lt < 0 || lt > s.d) continue;
      var amp = s.a * (1 - lt / s.d);
      c.x += noise(lt * 28, 3 + i) * amp; c.y += noise(lt * 31, 7 + i) * amp;
    }
    // keep inside the painted world
    var sc = this.sc, hw = sc.Ww / (2 * c.z), hh = 500 / c.z;
    c.x = clamp(c.x, sc.x0 + hw + 2, sc.x1 - hw - 2);
    c.y = clamp(c.y, sc.top + hh + 2, sc.bot - hh - 2);
    return c;
  };

  // ───────────────────────── locations ─────────────────────────
  var LN = ' stroke="rgba(42,33,64,.22)" stroke-width="3"';
  function R(x, y, w, h, fill, rx, extra) { return '<rect x="' + fx(x) + '" y="' + fx(y) + '" width="' + fx(w) + '" height="' + fx(h) + '"' + (rx ? ' rx="' + rx + '"' : "") + ' fill="' + fill + '"' + (extra || "") + "/>"; }
  function C(cx, cy, r, fill, extra) { return '<circle cx="' + fx(cx) + '" cy="' + fx(cy) + '" r="' + fx(r) + '" fill="' + fill + '"' + (extra || "") + "/>"; }
  function Pa(d, fill, extra) { return '<path d="' + d + '" fill="' + fill + '"' + (extra || "") + "/>"; }
  function El(cx, cy, rx, ry, fill, extra) { return '<ellipse cx="' + fx(cx) + '" cy="' + fx(cy) + '" rx="' + fx(rx) + '" ry="' + fx(ry) + '" fill="' + fill + '"' + (extra || "") + "/>"; }
  function cloud(x, y, s, fill) {
    return '<g transform="translate(' + fx(x) + "," + fx(y) + ") scale(" + fx(s) + ')">' + Pa("M-60,20 C-80,20 -84,-6 -62,-10 C-62,-34 -30,-40 -18,-24 C-10,-48 30,-48 36,-20 C56,-30 80,-14 70,6 C86,10 82,20 66,20Z", fill || "#FFFFFF") + "</g>";
  }
  function tree(x, y, s, c1, c2) {
    return '<g transform="translate(' + fx(x) + "," + fx(y) + ") scale(" + fx(s) + ')">' + R(-9, -90, 18, 92, "#8A5A3B", 6) + C(0, -130, 62, c1) + C(-40, -100, 40, c1) + C(42, -102, 42, c1) + C(-14, -150, 36, c2 || shade(c1, 0.15), ' opacity=".9"') + "</g>";
  }
  function modules(sc, M, fn) {
    var start = sc.Ww / 2 - M / 2;
    var i0 = Math.floor((sc.x0 - start) / M) - 1, i1 = Math.ceil((sc.x1 - start) / M) + 1;
    var out = {};
    for (var i = i0; i <= i1; i++) {
      var r = fn(start + i * M, i, V.makeRand(1000 + i * 97));
      for (var k in r) out[k] = (out[k] || "") + r[k];
    }
    return out;
  }
  var LOCATIONS = {};
  function interiorBase(sc, wall, wall2, floor, floor2, opt) {
    var ft = sc.G - 95, x0 = sc.x0 - 50, w = sc.x1 - sc.x0 + 100;
    opt = opt || {};
    var back = R(x0, sc.top, w, ft - sc.top + 40, wall);
    if (opt.wainscot) back += R(x0, ft - 175, w, 175 + 40, wall2) + R(x0, ft - 182, w, 12, shade(wall2, 0.35));
    var fl = R(x0, ft, w, sc.bot - ft, floor) + R(x0, ft, w, 16, shade(floor, -0.18)) + R(x0, ft - 8, w, 14, opt.base || shade(wall, -0.25));
    if (opt.planks) for (var y = ft + 40, j = 0; y < sc.bot; y += 46 + j * 6, j++) fl += R(x0, y, w, 3, floor2);
    if (opt.tiles) {
      for (var yy = ft + 30, jj = 0; yy < sc.bot; yy += 60 + jj * 12, jj++) fl += R(x0, yy, w, 3, floor2);
      for (var xx = Math.floor(sc.x0 / 140) * 140; xx < sc.x1; xx += 140) fl += Pa("M" + xx + "," + ft + " L" + fx(sc.Ww / 2 + (xx - sc.Ww / 2) * 1.9) + "," + sc.bot, "none", ' stroke="' + floor2 + '" stroke-width="3"');
    }
    return { back: back, floor: fl, ft: ft };
  }
  LOCATIONS["living-room"] = function (sc) {
    var base = interiorBase(sc, "#F7DCC6", "#EDBF9E", "#C98F5F", "#B57C4F", { wainscot: true, planks: true });
    var ft = base.ft;
    var m = modules(sc, 1100, function (X, i, rnd) {
      var b = "", f = "", fr = "";
      // window with curtains
      var wx = X + 60, wy = 170;
      b += R(wx - 14, wy - 14, 298, 348, "#FFF6EC", 10, LN) + R(wx, wy, 270, 320, "#9ED8F2") + cloud(wx + 90, wy + 90, 0.9) + cloud(wx + 200, wy + 170, 0.6, "#E6F6FF") +
        Pa("M" + (wx + 135) + "," + wy + " L" + (wx + 135) + "," + (wy + 320) + " M" + wx + "," + (wy + 160) + " L" + (wx + 270) + "," + (wy + 160), "none", ' stroke="#FFF6EC" stroke-width="12"') +
        R(wx - 30, wy + 330, 330, 20, "#FFF6EC", 6, LN);
      b += Pa("M" + (wx - 50) + "," + (wy - 40) + " C" + (wx - 20) + "," + (wy + 120) + " " + (wx - 40) + "," + (wy + 260) + " " + (wx - 10) + "," + (wy + 380) + " L" + (wx + 40) + "," + (wy + 380) + " C" + (wx + 20) + "," + (wy + 200) + " " + (wx + 40) + "," + (wy + 60) + " " + (wx + 30) + "," + (wy - 40) + "Z", "#4E8DC9", LN);
      b += Pa("M" + (wx + 320) + "," + (wy - 40) + " C" + (wx + 290) + "," + (wy + 120) + " " + (wx + 310) + "," + (wy + 260) + " " + (wx + 280) + "," + (wy + 380) + " L" + (wx + 230) + "," + (wy + 380) + " C" + (wx + 250) + "," + (wy + 200) + " " + (wx + 230) + "," + (wy + 60) + " " + (wx + 240) + "," + (wy - 40) + "Z", "#4E8DC9", LN);
      b += R(wx - 70, wy - 52, 410, 14, "#8A5A3B", 7);
      // frames
      b += R(X + 470, 150, 150, 120, "#8A5A3B", 6, LN) + R(X + 482, 162, 126, 96, "#FFEFD9") + Pa("M" + (X + 482) + ",258 L" + (X + 530) + ",200 L" + (X + 560) + ",232 L" + (X + 580) + ",214 L" + (X + 608) + ",258Z", "#6BBF8E") + C(X + 585, 190, 12, "#F5B731");
      b += R(X + 650, 190, 90, 90, "#E86D5A", 6, LN) + C(X + 695, 235, 26, "#FFE3B0");
      // sofa
      var sx = X + 740, sy = ft - 175;
      b += R(sx, sy, 330, 120, "#3FA39A", 34, LN) + R(sx - 24, sy + 60, 70, 125, "#358F87", 26, LN) + R(sx + 284, sy + 60, 70, 125, "#358F87", 26, LN) + R(sx + 20, sy + 85, 290, 80, "#47B3A9", 18, LN) +
        R(sx + 40, sy + 30, 80, 66, "#F4B63F", 18, LN) + R(sx + 210, sy + 34, 76, 62, "#F26A5A", 18, LN) + R(sx + 10, sy + 165, 14, 30, "#5A3B2A") + R(sx + 306, sy + 165, 14, 30, "#5A3B2A");
      // lamp
      var lx = X + 420;
      b += R(lx - 4, ft - 330, 8, 330, "#5A3B2A") + Pa("M" + (lx - 48) + "," + (ft - 330) + " L" + (lx - 30) + "," + (ft - 410) + " L" + (lx + 30) + "," + (ft - 410) + " L" + (lx + 48) + "," + (ft - 330) + "Z", "#FFD27A", LN) + El(lx, ft - 4, 40, 9, "#5A3B2A");
      // rug + plant
      f += El(X + 550, sc.G + 30, 380, 52, "#E86D5A") + El(X + 550, sc.G + 30, 330, 38, "none", ' stroke="#FFD3A8" stroke-width="6" stroke-dasharray="18 12"');
      fr += '<g transform="translate(' + (X + 1060) + "," + (sc.G + 40) + ') scale(2.1)">' + PROPS.plant + "</g>";
      return { back: b, floor: f, front: rnd() < 0.5 ? fr : "" };
    });
    return { back: base.back + m.back, floor: base.floor + m.floor, front: m.front, board: "whiteboard", sky: "#F7DCC6" };
  };
  LOCATIONS.office = function (sc) {
    var base = interiorBase(sc, "#E4ECF3", "#D4E0EA", "#9AA7B8", "#8C99AA", { tiles: true });
    var ft = base.ft;
    var m = modules(sc, 1200, function (X, i, rnd) {
      var b = "", fr = "";
      // big window band with skyline
      var wy = 120, wh = 380;
      b += R(X + 20, wy, 560, wh, "#BFE6F7") + R(X + 20, wy + wh - 120, 560, 120, "#A6D3EA");
      for (var k = 0; k < 7; k++) { var bh = 90 + rnd() * 180; b += R(X + 30 + k * 80, wy + wh - bh, 64, bh, k % 2 ? "#8FB8D6" : "#9CC4DF"); for (var r2 = 0; r2 < bh / 30 - 1; r2++) b += R(X + 40 + k * 80, wy + wh - bh + 12 + r2 * 30, 44, 8, "#C9E6F5", 0, ' opacity=".7"'); }
      b += cloud(X + 160, wy + 70, 0.7) + R(X + 14, wy - 10, 572, wh + 20, "none", 4, ' stroke="#FFFFFF" stroke-width="20"') + R(X + 296, wy, 10, wh, "#FFFFFF");
      // desk + monitor
      var dx = X + 690, dy = ft - 160;
      b += R(dx + 70, dy - 170, 230, 150, "#2E3A52", 12, LN) + R(dx + 84, dy - 156, 202, 118, "#5FC8F0", 4) + Pa("M" + (dx + 100) + "," + (dy - 60) + " L" + (dx + 150) + "," + (dy - 90) + " L" + (dx + 200) + "," + (dy - 76) + " L" + (dx + 268) + "," + (dy - 130), "none", ' stroke="#FFFFFF" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"') +
        R(dx + 170, dy - 22, 30, 24, "#2E3A52") + R(dx, dy, 400, 24, "#F2F2F7", 6, LN) + R(dx + 20, dy + 24, 20, 136, "#B4C1CD") + R(dx + 360, dy + 24, 20, 136, "#B4C1CD") + R(dx + 230, dy + 24, 140, 90, "#D4DDE6", 6, LN);
      b += '<g transform="translate(' + (dx + 40) + "," + (dy - 34) + ') scale(.7)">' + PROPS.coffee + "</g>";
      // clock + plant
      b += '<g transform="translate(' + (X + 640) + ',200) scale(.9)" class="cz-clock">' + PROPS.clock + "</g>";
      b += '<g transform="translate(' + (X + 1150) + "," + (ft - 70) + ') scale(1.9)">' + PROPS.plant + "</g>";
      // sticky notes board
      b += R(X + 1000, 170, 150, 170, "#D9A86C", 8, LN) + R(X + 1016, 186, 50, 50, "#FFE36E") + R(X + 1078, 196, 50, 50, "#7FE0B0") + R(X + 1030, 256, 50, 50, "#FF9FB2");
      // ceiling lamps
      b += R(X + 298, -400, 4, 470, "#5A6478") + Pa("M" + (X + 250) + ",100 C" + (X + 250) + ",50 " + (X + 350) + ",50 " + (X + 350) + ",100Z", "#3A4660");
      if (rnd() < 0.6) fr += '<g transform="translate(' + (X + 40) + "," + (sc.G + 60) + ') scale(2.4)">' + PROPS.plant + "</g>";
      return { back: b, front: fr };
    });
    return { back: base.back + m.back, floor: base.floor, front: m.front, board: "screen", sky: "#E4ECF3" };
  };
  LOCATIONS.classroom = function (sc) {
    var base = interiorBase(sc, "#DCEBD5", "#C9DDBF", "#D6A86F", "#C2945C", { wainscot: true, planks: true });
    var ft = base.ft;
    var m = modules(sc, 1300, function (X, i, rnd) {
      var b = "", fr = "";
      var bx = X + 250, by = 170;
      b += R(bx - 20, by - 20, 840, 420, "#9A6B43", 14, LN) + R(bx, by, 800, 380, "#2F5D4E", 6) +
        Pa("M" + (bx + 60) + "," + (by + 90) + " C" + (bx + 120) + "," + (by + 40) + " " + (bx + 160) + "," + (by + 140) + " " + (bx + 220) + "," + (by + 80), "none", ' stroke="#F2F2E9" stroke-width="5" stroke-linecap="round" opacity=".55"') +
        Pa("M" + (bx + 600) + "," + (by + 60) + " L" + (bx + 600) + "," + (by + 140) + " L" + (bx + 720) + "," + (by + 140) + " M" + (bx + 610) + "," + (by + 130) + " L" + (bx + 650) + "," + (by + 100) + " L" + (bx + 680) + "," + (by + 115) + " L" + (bx + 712) + "," + (by + 70), "none", ' stroke="#F2F2E9" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" opacity=".5"') +
        Pa("M" + (bx + 70) + "," + (by + 300) + " L" + (bx + 250) + "," + (by + 230) + " L" + (bx + 250) + "," + (by + 300) + "Z", "none", ' stroke="#F2F2E9" stroke-width="5" stroke-linejoin="round" opacity=".45"') + C(bx + 400, by + 250, 50, "none", ' stroke="#F2F2E9" stroke-width="5" opacity=".4"') +
        R(bx, by + 380, 800, 18, "#B98A5E", 4) + R(bx + 600, by + 368, 60, 12, "#FFFFFF", 4);
      b += '<g transform="translate(' + (X + 140) + ',190) scale(.9)">' + PROPS.clock + "</g>";
      b += R(X + 1110, 180, 130, 170, "#F5B731", 6, LN) + C(X + 1175, 240, 34, "#FFFFFF") + R(X + 1130, 300, 90, 10, "#FFFFFF", 4) + R(X + 1130, 320, 60, 10, "#FFFFFF", 4);
      b += R(X + 60, 280, 120, 160, "#7FB7E8", 6, LN) + '<g transform="translate(' + (X + 120) + ',360) scale(.9)">' + PROPS.globe + "</g>";
      // shelf of books
      var sx = X + 1080, sy = ft - 200;
      b += R(sx, sy, 200, 200, "#B98A5E", 6, LN) + R(sx + 10, sy + 96, 180, 8, "#9A6B43");
      for (var k = 0; k < 7; k++) { var c1 = ["#E86D5A", "#3E7BF0", "#F5B731", "#2FBF7B", "#9B6CF2"][k % 5]; b += R(sx + 16 + k * 25, sy + 26 + (k % 3) * 6, 20, 70 - (k % 3) * 6, c1, 3); b += R(sx + 16 + k * 25, sy + 120 + (k % 2) * 8, 20, 72 - (k % 2) * 8, shade(c1, -0.15), 3); }
      // student desk in foreground
      if (rnd() < 0.7) fr += R(X + 120, sc.G - 10, 280, 26, "#D6A86F", 6, LN) + R(X + 140, sc.G + 16, 18, 200, "#8C99AA") + R(X + 362, sc.G + 16, 18, 200, "#8C99AA");
      return { back: b, front: fr };
    });
    return { back: base.back + m.back, floor: base.floor, front: m.front, board: "chalk", sky: "#DCEBD5" };
  };
  LOCATIONS.lab = function (sc) {
    var base = interiorBase(sc, "#E6F1F5", "#D2E4EA", "#B9C6CF", "#A7B5BF", { tiles: true });
    var ft = base.ft;
    var tiles = "";
    for (var y = 0; y < ft; y += 60) tiles += R(sc.x0 - 50, y, sc.x1 - sc.x0 + 100, 2.5, "#CFE0E7");
    var m = modules(sc, 1100, function (X, i, rnd) {
      var b = "";
      for (var xx = X; xx < X + 1100; xx += 60) b += R(xx, 0, 2.5, ft, "#CFE0E7");
      // shelf with flasks
      var sy = 230;
      b += R(X + 80, sy, 420, 14, "#9AA9B8", 4, LN) + R(X + 80, sy + 150, 420, 14, "#9AA9B8", 4, LN);
      var cols = ["#FF7A59", "#4FE3A0", "#5CB8F2", "#F5B731", "#9B6CF2"];
      for (var k = 0; k < 5; k++) {
        var fxp = X + 120 + k * 80, col = cols[(k + i) % 5];
        b += Pa("M" + (fxp - 10) + "," + (sy - 60) + " L" + (fxp - 10) + "," + (sy - 34) + " L" + (fxp - 30) + "," + sy + " L" + (fxp + 30) + "," + sy + " L" + (fxp + 10) + "," + (sy - 34) + " L" + (fxp + 10) + "," + (sy - 60) + "Z", "#FFFFFF", LN) +
          Pa("M" + (fxp - 22) + "," + (sy - 14) + " L" + (fxp + 22) + "," + (sy - 14) + " L" + (fxp + 28) + "," + (sy - 2) + " L" + (fxp - 28) + "," + (sy - 2) + "Z", col);
        b += R(fxp - 18, sy + 150 - 70, 36, 70, "#FFFFFF", 6, LN) + R(fxp - 18, sy + 150 - 40, 36, 40, cols[(k + 2) % 5], 4);
      }
      // bench with bubbling flask + microscope
      var by = ft - 150;
      b += R(X + 600, by, 460, 30, "#3A4660", 6) + R(X + 620, by + 30, 420, 120, "#D2E4EA", 6, LN) + R(X + 660, by + 50, 150, 80, "#E6F1F5", 6, LN) + R(X + 850, by + 50, 150, 80, "#E6F1F5", 6, LN);
      b += '<g class="cz-flask" transform="translate(' + (X + 700) + "," + (by - 60) + ')">' + Pa("M-14,-60 L-14,-26 L-46,50 C-48,58 -44,62 -36,62 L36,62 C44,62 48,58 46,50 L14,-26 L14,-60Z", "#FFFFFF", LN) + Pa("M-32,20 L32,20 L44,52 C44,58 40,60 36,60 L-36,60 C-40,60 -44,58 -44,52Z", "#4FE3A0") +
        C(-10, 0, 7, "#4FE3A0", ' class="cz-bub"') + C(6, -20, 5, "#4FE3A0", ' class="cz-bub"') + C(-2, -40, 4, "#4FE3A0", ' class="cz-bub"') + "</g>";
      b += '<g transform="translate(' + (X + 940) + "," + (by - 6) + ')">' + R(-40, -12, 80, 14, "#3A4660", 4) + Pa("M-6,-12 L-6,-60 C-6,-90 20,-110 40,-100 L50,-80 L20,-66 L20,-12Z", "#E6EDF2", LN) + R(28, -130, 26, 56, "#3A4660", 8, ' transform="rotate(-25 40 -100)"') + "</g>";
      // warning sign
      b += '<g transform="translate(' + (X + 600) + ',180) scale(.75)">' + PROPS.warning + "</g>";
      return { back: b };
    });
    var anim = function (t) {
      var bubs = sc.world.querySelectorAll(".cz-bub");
      for (var q = 0; q < bubs.length; q++) {
        var ph = (t * 0.9 + q * 0.33) % 1;
        bubs[q].setAttribute("transform", "translate(" + fx(Math.sin(ph * 9 + q) * 3) + "," + fx(-ph * 50) + ")");
        bubs[q].setAttribute("opacity", fx(1 - ph));
      }
    };
    return { back: base.back + tiles + m.back, floor: base.floor, board: "screen", anim: anim, sky: "#E6F1F5" };
  };
  function skyGrad(sc, id, c1, c2) {
    return '<defs><linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + c1 + '"/><stop offset="1" stop-color="' + c2 + '"/></linearGradient></defs>' +
      R(sc.x0 - 100, sc.top - 100, sc.x1 - sc.x0 + 200, sc.bot - sc.top + 200, "url(#" + id + ")");
  }
  LOCATIONS["city-street"] = function (sc) {
    var gid = "czsky" + V.seed;
    var sky = skyGrad(sc, gid, "#7CC4F0", "#D8F0FA");
    var ft = sc.G - 70;
    var cl = "";
    var far = "", mid = "", near = "", floor = "", front = "";
    var rnd = V.makeRand(77);
    for (var x = sc.x0 - 200; x < sc.x1 + 200; x += 70 + rnd() * 60) { var h = 220 + rnd() * 260; far += R(x, ft - 120 - h, 80 + rnd() * 50, h + 200, "#A9CBE0"); }
    for (x = sc.x0; x < sc.x1 + 300; x += 300) cl += cloud(x + rnd() * 200, 60 + rnd() * 140, 0.8 + rnd() * 0.6);
    var cols = ["#F2A65A", "#E86D5A", "#F7D08A", "#7FB7E8", "#B48CF7", "#6BBF8E"];
    for (x = sc.x0 - 100, i = 0; x < sc.x1 + 200; i++) {
      var w = 220 + rnd() * 140, hh = 340 + rnd() * 260, c = cols[i % cols.length];
      mid += R(x, ft - hh, w, hh + 60, c, 6) + R(x - 8, ft - hh - 14, w + 16, 22, shade(c, -0.15), 4);
      for (var yy = ft - hh + 40; yy < ft - 140; yy += 78) for (var xx = x + 26; xx < x + w - 50; xx += 64) mid += R(xx, yy, 38, 50, "#FFF6D8", 4, ' opacity=".9"') + R(xx, yy + 26, 38, 3, shade(c, -0.25));
      // shop front at street level
      mid += R(x + 20, ft - 130, w - 40, 130, shade(c, -0.08), 4) + R(x + 34, ft - 112, w - 110, 96, "#BFE6F7", 4) + R(x + w - 66, ft - 112, 36, 112, "#5A3B2A", 3);
      var aw = "";
      for (var s = 0; s < (w - 20) / 30; s++) aw += R(x + 10 + s * 30, ft - 160, 30, 34, s % 2 ? "#FFFFFF" : shade(c, -0.25));
      mid += aw + Pa("M" + (x + 10) + "," + (ft - 126) + " L" + (x + w - 10) + "," + (ft - 126), "none", ' stroke="' + shade(c, -0.35) + '" stroke-width="5"');
      x += w + 20 + rnd() * 30;
    }
    var i;
    for (x = sc.x0 + 100; x < sc.x1; x += 520) {
      near += R(x - 5, ft - 330, 10, 330, "#3A4660") + Pa("M" + (x - 5) + "," + (ft - 330) + " C" + (x - 5) + "," + (ft - 370) + " " + (x + 50) + "," + (ft - 370) + " " + (x + 50) + "," + (ft - 340), "none", ' stroke="#3A4660" stroke-width="10"') + El(x + 50, ft - 334, 22, 12, "#FFE9A6", ' stroke="#3A4660" stroke-width="5"');
      near += tree(x + 260, ft + 10, 1.05, "#5DBB63", "#7ACF6F");
    }
    floor += R(sc.x0 - 50, ft, sc.x1 - sc.x0 + 100, 140, "#D9D2C9") + R(sc.x0 - 50, ft, sc.x1 - sc.x0 + 100, 10, "#C4BCB1");
    for (x = Math.floor(sc.x0 / 120) * 120; x < sc.x1; x += 120) floor += R(x, ft + 10, 3, 130, "#C4BCB1");
    floor += R(sc.x0 - 50, ft + 140, sc.x1 - sc.x0 + 100, 22, "#A8A096") + R(sc.x0 - 50, ft + 162, sc.x1 - sc.x0 + 100, sc.bot - ft, "#56596A");
    for (x = Math.floor(sc.x0 / 200) * 200; x < sc.x1; x += 200) floor += R(x, ft + 230, 100, 12, "#F2F2E9", 4);
    var car = '<g class="cz-car">' + '<g transform="scale(2.4)">' + PROPS.car + "</g></g>";
    floor += car;
    var anim = function (t) {
      var c1 = sc.world.querySelector(".cz-car");
      if (c1) { var span = sc.x1 - sc.x0 + 600; var cx = sc.x0 - 300 + ((t * 420 + 300) % span); c1.setAttribute("transform", "translate(" + fx(cx) + "," + fx(ft + 205) + ")"); }
      var cg = sc.world.querySelector(".cz-clouds");
      if (cg) cg.setAttribute("transform", "translate(" + fx(t * 8) + ",0)");
    };
    return { sky: sky + '<g class="cz-clouds">' + cl + "</g>", far: far, mid: mid, near: near, floor: floor, front: front, anim: anim, board: "whiteboard", skyColor: "#7CC4F0" };
  };
  LOCATIONS.park = function (sc) {
    var gid = "czsky" + V.seed;
    var sky = skyGrad(sc, gid, "#86CFF5", "#E3F6FC");
    var ft = sc.G - 70, rnd = V.makeRand(91);
    var cl = "", far = "", mid = "", near = "", floor = "", front = "";
    for (var x = sc.x0; x < sc.x1 + 300; x += 360) cl += cloud(x + rnd() * 200, 70 + rnd() * 160, 0.9 + rnd() * 0.7);
    sky += C(sc.Ww * 0.82, 150, 70, "#FFE58A") + C(sc.Ww * 0.82, 150, 100, "#FFE58A", ' opacity=".25"');
    var hill = "M" + (sc.x0 - 200) + "," + (ft + 50);
    for (x = sc.x0 - 200; x < sc.x1 + 400; x += 400) hill += " Q" + (x + 200) + "," + (ft - 280 - rnd() * 120) + " " + (x + 400) + "," + (ft - 90);
    far += Pa(hill + " L" + (sc.x1 + 400) + "," + sc.bot + " L" + (sc.x0 - 200) + "," + sc.bot + "Z", "#A7DBA0");
    var hill2 = "M" + (sc.x0 - 200) + "," + (ft);
    for (x = sc.x0 - 200; x < sc.x1 + 400; x += 300) hill2 += " Q" + (x + 150) + "," + (ft - 160 - rnd() * 80) + " " + (x + 300) + "," + (ft - 40);
    mid += Pa(hill2 + " L" + (sc.x1 + 400) + "," + sc.bot + " L" + (sc.x0 - 200) + "," + sc.bot + "Z", "#8BCB84");
    for (x = sc.x0; x < sc.x1; x += 180 + rnd() * 160) mid += tree(x, ft - 40 - rnd() * 40, 0.6 + rnd() * 0.25, "#5DBB63", "#76C96E");
    for (x = sc.x0 + 200; x < sc.x1; x += 640) {
      near += tree(x, ft + 6, 1.25, "#4FAE5A", "#6BC266");
      near += '<g transform="translate(' + (x + 300) + "," + (ft + 4) + ')">' + R(-110, -70, 220, 16, "#B5793F", 6) + R(-110, -40, 220, 16, "#B5793F", 6) + R(-96, -34, 12, 38, "#5A3B2A") + R(84, -34, 12, 38, "#5A3B2A") + "</g>";
      near += El(x + 470, ft + 4, 70, 40, "#4FAE5A") + El(x + 520, ft, 50, 34, "#62BC5F");
    }
    floor += R(sc.x0 - 50, ft, sc.x1 - sc.x0 + 100, sc.bot - ft, "#7CC56F") + R(sc.x0 - 50, ft + 40, sc.x1 - sc.x0 + 100, 90, "#E9D3A8") + R(sc.x0 - 50, ft + 40, sc.x1 - sc.x0 + 100, 6, "#D6BC8C") + R(sc.x0 - 50, ft + 126, sc.x1 - sc.x0 + 100, 6, "#D6BC8C");
    for (x = sc.x0; x < sc.x1; x += 60 + rnd() * 60) { var fy = ft + 160 + rnd() * 120; floor += C(x, fy, 7, ["#FF8FA3", "#FFD84A", "#FFFFFF"][Math.floor(rnd() * 3)]) + C(x, fy, 3, "#F5B731"); }
    for (x = sc.x0; x < sc.x1; x += 900) front += El(x + 100, sc.G + 150, 160, 90, "#4FAE5A") + El(x + 220, sc.G + 160, 120, 80, "#62BC5F");
    var anim = function (t) {
      var cg = sc.world.querySelector(".cz-clouds");
      if (cg) cg.setAttribute("transform", "translate(" + fx(t * 9) + ",0)");
      var bd = sc.world.querySelector(".cz-birds");
      if (bd) { var bx = sc.x0 + ((t * 90) % (sc.x1 - sc.x0)); bd.setAttribute("transform", "translate(" + fx(bx) + "," + fx(140 + Math.sin(t) * 20) + ")"); var w = Math.sin(t * 12) * 8; bd.firstChild && bd.firstChild.setAttribute("d", "M-20,0 Q-10," + fx(-8 - w) + " 0,0 Q10," + fx(-8 - w) + " 20,0 M30,20 Q40," + fx(12 - w) + " 50,20 Q60," + fx(12 - w) + " 70,20"); }
    };
    sky += '<g class="cz-birds"><path d="" fill="none" stroke="#3A4660" stroke-width="4" stroke-linecap="round"/></g>';
    return { sky: sky + '<g class="cz-clouds">' + cl + "</g>", far: far, mid: mid, near: near, floor: floor, front: front, anim: anim, board: "whiteboard", skyColor: "#86CFF5" };
  };
  LOCATIONS.space = function (sc) {
    var gid = "czsky" + V.seed;
    var sky = skyGrad(sc, gid, "#151033", "#3B2A6E");
    var rnd = V.makeRand(51), stars = "";
    for (var i = 0; i < 160; i++) stars += C(sc.x0 + rnd() * (sc.x1 - sc.x0), sc.top + rnd() * (sc.G - sc.top), 1.5 + rnd() * 3, "#FFFFFF", ' class="cz-star" opacity="' + fx(0.4 + rnd() * 0.6) + '"');
    sky += C(sc.Ww * 0.2, 240, 220, "#7A4FD0", ' opacity=".18"') + C(sc.Ww * 0.75, 360, 260, "#E0609A", ' opacity=".12"') + stars;
    var far = '<g transform="translate(' + fx(sc.Ww * 0.78) + ',230)">' + C(0, 0, 120, "#F59E5A") + Pa("M-120,-10 C-90,-30 -40,-20 0,-34 C40,-46 90,-30 120,-14 L120,10 C80,-6 40,-14 0,-4 C-40,6 -90,-2 -120,16Z", "#E2814A") +
      El(0, 0, 210, 40, "none", ' stroke="#FFD9A8" stroke-width="14" transform="rotate(-16)"') + "</g>" +
      '<g transform="translate(' + fx(sc.Ww * 0.16) + ',170)">' + C(0, 0, 60, "#4FA3E8") + Pa("M-40,-30 C-20,-40 0,-20 -10,0 C-20,20 0,30 10,40 C-20,50 -50,30 -56,0 C-58,-12 -50,-24 -40,-30Z M20,-50 C40,-40 56,-20 54,0 C40,-6 30,-20 20,-50Z", "#6BCB77") + "</g>";
    var ft = sc.G - 70;
    var ground = "M" + (sc.x0 - 100) + "," + (ft + 20);
    for (var x = sc.x0 - 100; x < sc.x1 + 200; x += 260) ground += " Q" + (x + 130) + "," + (ft - 40 - rnd() * 40) + " " + (x + 260) + "," + (ft + 10);
    var floor = Pa(ground + " L" + (sc.x1 + 200) + "," + sc.bot + " L" + (sc.x0 - 100) + "," + sc.bot + "Z", "#B9B4CC");
    for (x = sc.x0; x < sc.x1; x += 150 + rnd() * 200) { var cy = ft + 60 + rnd() * 200, r = 24 + rnd() * 40; floor += El(x, cy, r, r * 0.35, "#9A94B2") + El(x, cy - r * 0.08, r * 0.8, r * 0.25, "#8A84A4"); }
    var mid = "";
    var ground2 = "M" + (sc.x0 - 100) + "," + (ft - 30);
    for (x = sc.x0 - 100; x < sc.x1 + 200; x += 400) ground2 += " Q" + (x + 200) + "," + (ft - 150 - rnd() * 60) + " " + (x + 400) + "," + (ft - 30);
    mid += Pa(ground2 + " L" + (sc.x1 + 200) + "," + sc.bot + " L" + (sc.x0 - 100) + "," + sc.bot + "Z", "#8B84A8");
    var near = '<g transform="translate(' + fx(sc.Ww * 0.08) + "," + (ft + 6) + ') scale(1.6)">' + PROPS.flag + "</g>";
    var anim = function (t) {
      var st = sc.world.querySelectorAll(".cz-star");
      for (var q = 0; q < st.length; q += 3) st[q].setAttribute("opacity", fx(0.35 + 0.65 * Math.abs(Math.sin(t * 1.7 + q))));
    };
    return { sky: sky, far: far, mid: mid, near: near, floor: floor, anim: anim, board: "screen", skyColor: "#151033", dark: true };
  };
  LOCATIONS.market = function (sc) {
    var gid = "czsky" + V.seed;
    var sky = skyGrad(sc, gid, "#FFC98A", "#FFE9C7");
    var ft = sc.G - 70, rnd = V.makeRand(63);
    var far = "", mid = "", back = "", floor = "", front = "";
    for (var x = sc.x0 - 100; x < sc.x1 + 200; x += 150 + rnd() * 80) { var h = 200 + rnd() * 200; far += R(x, ft - 60 - h, 130, h + 100, "#F2B788") + Pa("M" + (x - 10) + "," + (ft - 60 - h) + " L" + (x + 65) + "," + (ft - 120 - h) + " L" + (x + 140) + "," + (ft - 60 - h) + "Z", "#E59A6A"); }
    var awn = [["#E8584A", "#FFFFFF"], ["#3E7BF0", "#FFFFFF"], ["#2FBF7B", "#FFF6D8"], ["#F5B731", "#FFFFFF"]];
    var fruit = ["#E8584A", "#F5B731", "#7BD389", "#FF8A3D", "#9B6CF2"];
    for (x = sc.x0, i = 0; x < sc.x1 + 200; x += 420, i++) {
      var a = awn[i % 4];
      back += R(x + 20, ft - 330, 12, 330, "#8A5A3B") + R(x + 368, ft - 330, 12, 330, "#8A5A3B");
      for (var s = 0; s < 8; s++) back += Pa("M" + (x + s * 50) + "," + (ft - 360) + " L" + (x + s * 50 + 50) + "," + (ft - 360) + " L" + (x + s * 50 + 50) + "," + (ft - 290) + " Q" + (x + s * 50 + 25) + "," + (ft - 266) + " " + (x + s * 50) + "," + (ft - 290) + "Z", s % 2 ? a[1] : a[0]);
      back += R(x - 6, ft - 372, 412, 18, shade(a[0], -0.2), 6);
      back += R(x + 30, ft - 150, 340, 150, "#C98F5F", 6) + R(x + 30, ft - 150, 340, 16, "#B07A4C", 4);
      for (var k = 0; k < 4; k++) {
        back += R(x + 44 + k * 82, ft - 214, 70, 64, "#D9A86C", 4, LN);
        for (var q = 0; q < 5; q++) back += C(x + 56 + k * 82 + (q % 3) * 22, ft - 200 + Math.floor(q / 3) * 18, 11, fruit[(k + i) % 5]);
      }
      // string lights
      back += Pa("M" + x + "," + (ft - 420) + " Q" + (x + 210) + "," + (ft - 360) + " " + (x + 420) + "," + (ft - 420), "none", ' stroke="#5A3B2A" stroke-width="3"');
      for (q = 1; q < 8; q++) { var tq = q / 8, lx = x + 420 * tq, ly = ft - 420 + 4 * 60 * tq * (1 - tq) * 1; back += C(lx, ly + 8, 7, ["#FFE58A", "#FF9FB2", "#9ED8F2"][q % 3], ' class="cz-bulb"'); }
    }
    var i;
    floor += R(sc.x0 - 50, ft, sc.x1 - sc.x0 + 100, sc.bot - ft, "#D8C3A5");
    for (var yy = ft + 30, j = 0; yy < sc.bot; yy += 40 + j * 8, j++) for (x = Math.floor(sc.x0 / 80) * 80 + (j % 2) * 40; x < sc.x1; x += 80) floor += R(x + 2, yy, 74, 34 + j * 6, "#CDB696", 10);
    for (x = sc.x0 + 300; x < sc.x1; x += 1100) front += R(x, sc.G - 10, 160, 120, "#B07A4C", 6, LN) + C(x + 40, sc.G - 14, 24, "#E8584A") + C(x + 90, sc.G - 18, 26, "#F5B731") + C(x + 130, sc.G - 10, 22, "#7BD389");
    var anim = function (t) {
      var b = sc.world.querySelectorAll(".cz-bulb");
      for (var q2 = 0; q2 < b.length; q2++) b[q2].setAttribute("opacity", fx(0.65 + 0.35 * Math.sin(t * 3 + q2 * 1.7)));
    };
    return { sky: sky, far: far, back: back, floor: floor, front: front, anim: anim, board: "whiteboard", skyColor: "#FFC98A" };
  };
  LOCATIONS.stage = function (sc, opts) {
    var col = opts.color || "#FFE3C2";
    var c2 = shade(col, -0.08);
    var gid = "czst" + V.seed;
    var back = '<defs><radialGradient id="' + gid + '" cx="50%" cy="42%" r="60%"><stop offset="0" stop-color="' + shade(col, 0.35) + '"/><stop offset="1" stop-color="' + col + '"/></radialGradient></defs>' +
      R(sc.x0 - 100, sc.top - 100, sc.x1 - sc.x0 + 200, sc.bot - sc.top + 200, col) + '<rect x="' + fx(sc.Ww / 2 - 1200) + '" y="' + sc.top + '" width="2400" height="' + (sc.G - sc.top) + '" fill="url(#' + gid + ')"/>';
    var rnd = V.makeRand(33), dots = "";
    for (var i = 0; i < 26; i++) {
      var x = sc.x0 + rnd() * (sc.x1 - sc.x0), y = 60 + rnd() * (sc.G - 300), r = 6 + rnd() * 16;
      dots += rnd() < 0.5 ? C(x, y, r, c2, ' class="cz-confetti"') : R(x, y, r * 1.6, r * 0.7, c2, 3, ' class="cz-confetti"');
    }
    var floor = El(sc.Ww / 2, sc.G + 10, sc.Ww * 0.6, 60, c2) + R(sc.x0 - 50, sc.G + 10, sc.x1 - sc.x0 + 100, sc.bot - sc.G, c2);
    var anim = function (t) {
      var cs = sc.world.querySelectorAll(".cz-confetti");
      for (var q = 0; q < cs.length; q++) cs[q].setAttribute("transform", "translate(0," + fx(Math.sin(t * 0.8 + q) * 10) + ")");
    };
    return { back: dots ? back + dots : back, floor: floor, anim: anim, board: "whiteboard", skyColor: col };
  };
  var LOC_ALIASES = { home: "living-room", living: "living-room", livingroom: "living-room", house: "living-room", work: "office", workplace: "office", school: "classroom", class: "classroom", street: "city-street", city: "city-street", downtown: "city-street", outdoors: "park", outside: "park", nature: "park", garden: "park", laboratory: "lab", science: "lab", "science-lab": "lab", planet: "space", moon: "space", shop: "market", store: "market", "shop-market": "market", plain: "stage", studio: "stage", none: "stage" };
  function locName(n) { n = str(n).toLowerCase().trim(); if (LOCATIONS[n]) return n; return LOC_ALIASES[n] || "stage"; }
  S.LOCATIONS = LOCATIONS;
  S.locationNames = Object.keys(LOCATIONS);
  function drawLocation(sc, name, opts) {
    var r;
    try { r = LOCATIONS[name](sc, opts || {}); } catch (e) { V.error("cartoon location " + name + ": " + e.message); r = LOCATIONS.stage(sc, {}); }
    sc.world.style.background = r.skyColor || r.sky && r.sky[0] === "#" ? r.skyColor || r.sky : "#FFE3C2";
    ["sky", "far", "mid", "near", "back", "floor", "front"].forEach(function (k) { if (r[k] && r[k][0] !== "#") sc.layers[k].g.innerHTML = r[k]; });
    if (r.anim) sc.anims.push(r.anim);
    var clk = sc.world.querySelectorAll(".cz-clock .cz-hands, g .cz-hands");
    if (clk.length) sc.anims.push(function (t) { for (var q = 0; q < clk.length; q++) clk[q].setAttribute("transform", "rotate(" + fx(t * 30) + ")"); });
    var steam = sc.world.querySelectorAll(".cz-steam");
    if (steam.length) sc.anims.push(function (t) { for (var q = 0; q < steam.length; q++) steam[q].setAttribute("transform", "translate(0," + fx(-((t * 12) % 10)) + ")"); });
    return r;
  }

  // ───────────────────────── speech / thought bubbles ─────────────────────────
  function Bubble(sc, actor, text, from, to, opts) {
    opts = opts || {};
    this.sc = sc; this.a = actor; this.from = clampT(from); this.to = Math.max(this.from + 0.4, num(to, this.from + 2));
    this.kind = opts.kind || "speech"; // speech | thought | shout | whisper
    this.side = opts.side || null;
    this.hold = num(opts.hold, 0.25);
    var W = sc.W, H = sc.H;
    var maxW = num(opts.maxWidth, sc.portrait ? W * 0.8 : sc.square ? W * 0.62 : W * 0.38);
    var box = (this.box = el("div.cz-bubble" + (this.kind === "shout" ? ".cz-shout" : this.kind === "thought" ? ".cz-thought" : ""), { parent: sc.overlay }));
    box.style.maxWidth = maxW + "px";
    var inner = el("div.cz-btext", { parent: box });
    if (opts.icon) { var ic = el("span.cz-bicon", { parent: inner }); ic.innerHTML = propIcon(opts.icon, u(64)); }
    var spans = [];
    var t0 = plain(text);
    if (t0) {
      var parts = str(text).split(/(\*[^*]+\*)/g);
      parts.forEach(function (p) {
        if (!p) return;
        var em = p.length > 2 && p[0] === "*" && p[p.length - 1] === "*";
        (em ? p.slice(1, -1) : p).split(/(\s+)/).forEach(function (w) {
          if (!w) return;
          if (/^\s+$/.test(w)) { inner.appendChild(document.createTextNode(" ")); return; }
          var sp = el("span.cz-w" + (em ? ".cz-em" : ""), { parent: inner, text: w });
          spans.push(sp);
        });
      });
    }
    this.spans = spans;
    V.fit(inner, { maxLines: num(opts.maxLines, 4), min: u(22) });
    this.bw = box.offsetWidth; this.bh = box.offsetHeight;
    // word timings: real words inside the window, else spread evenly
    var Wd = words().filter(function (w) { return w.start >= this.from - 0.05 && w.start < this.to; }, this);
    var n = spans.length, times = [];
    if (Wd.length && Math.abs(Wd.length - n) <= Math.max(2, n * 0.25)) for (var i = 0; i < n; i++) times.push(Wd[Math.min(Wd.length - 1, Math.round((i * (Wd.length - 1)) / Math.max(1, n - 1)))].start);
    else for (i = 0; i < n; i++) times.push(this.from + ((this.to - this.from) * i) / Math.max(1, n));
    this.times = times;
    this.karaoke = opts.karaoke !== false && this.kind !== "thought";
    var gS = (this.g = g(sc.osvg, { class: "cz-bshape" }));
    var sw = u(5);
    var fill = this.kind === "shout" ? "#FFE36E" : "#FFFFFF";
    this.tailO = svgEl("path", { fill: fill, stroke: INK, "stroke-width": sw, "stroke-linejoin": "round" }, gS);
    this.body = svgEl("path", { fill: fill, stroke: INK, "stroke-width": sw, "stroke-linejoin": "round" }, gS);
    this.tailF = svgEl("path", { fill: fill }, gS);
    this.shadow = null;
    this.bodyD = this.kind === "thought" ? cloudBox(this.bw, this.bh) : this.kind === "shout" ? spikyBox(this.bw, this.bh) : roundBox(this.bw, this.bh, Math.min(this.bh / 2, u(46)));
    this.body.setAttribute("d", this.bodyD);
    sc.bubbles.push(this);
  }
  function roundBox(w, h, r) {
    var x = -w / 2, y = -h / 2;
    return "M" + fx(x + r) + "," + fx(y) + " L" + fx(x + w - r) + "," + fx(y) + " Q" + fx(x + w) + "," + fx(y) + " " + fx(x + w) + "," + fx(y + r) + " L" + fx(x + w) + "," + fx(y + h - r) + " Q" + fx(x + w) + "," + fx(y + h) + " " + fx(x + w - r) + "," + fx(y + h) +
      " L" + fx(x + r) + "," + fx(y + h) + " Q" + fx(x) + "," + fx(y + h) + " " + fx(x) + "," + fx(y + h - r) + " L" + fx(x) + "," + fx(y + r) + " Q" + fx(x) + "," + fx(y) + " " + fx(x + r) + "," + fx(y) + "Z";
  }
  function cloudBox(w, h) {
    var n = Math.max(8, Math.round((w + h) / u(55))), d = "";
    for (var i = 0; i <= n; i++) {
      var a = (i / n) * 2 * PI, x = Math.cos(a) * (w / 2 + u(10)), y = Math.sin(a) * (h / 2 + u(12));
      if (i === 0) { d = "M" + fx(x) + "," + fx(y); continue; }
      var am = ((i - 0.5) / n) * 2 * PI, bx = Math.cos(am) * (w / 2 + u(38)), by = Math.sin(am) * (h / 2 + u(36));
      d += " Q" + fx(bx) + "," + fx(by) + " " + fx(x) + "," + fx(y);
    }
    return d + "Z";
  }
  function spikyBox(w, h) {
    var n = 18, d = "";
    for (var i = 0; i < n * 2; i++) {
      var a = (i / (n * 2)) * 2 * PI, k = i % 2 ? 1.0 : 1.22 + 0.1 * Math.sin(i * 2.7);
      var x = Math.cos(a) * (w / 2 + u(18)) * k, y = Math.sin(a) * (h / 2 + u(18)) * k;
      d += (i ? " L" : "M") + fx(x) + "," + fx(y);
    }
    return d + "Z";
  }
  Bubble.prototype.update = function (t) {
    var a = this.a, sc = this.sc;
    var tin = this.from - 0.18, tout = this.to + this.hold;
    var vis = t >= tin && t <= tout + (this.hold < 0.1 ? 0.12 : 0.22) && a.visible !== false && a.anchor;
    this.box.style.display = vis ? "" : "none";
    this.g.style.display = vis ? "" : "none";
    if (!vis) return;
    var od = this.hold < 0.1 ? 0.12 : 0.22;
    var pin = EASE.snap(clamp((t - tin) / 0.32, 0, 1)), pout = 1 - EASE.soft(clamp((t - tout) / od, 0, 1));
    var sP = pin * pout;
    var head = sc.toScreen(a.anchor.top.x, a.anchor.top.y), mouth = sc.toScreen(a.anchor.mouth.x, a.anchor.mouth.y);
    var W = sc.W, H = sc.H, mx = W * 0.05, my = H * 0.05;
    var side = this.side === "left" ? -1 : this.side === "right" ? 1 : head.x > W / 2 ? -1 : 1;
    if (sc.portrait) side *= 0.3;
    var cx = head.x + side * (this.bw * 0.42 + u(20));
    var cy = head.y - this.bh / 2 - u(26);
    cx = clamp(cx, mx + this.bw / 2, W - mx - this.bw / 2);
    // stay above other characters' heads that sit under the bubble
    for (var oi = 0; oi < sc.actors.length; oi++) {
      var o = sc.actors[oi];
      if (o === a || !o.anchor || o.visible === false) continue;
      var ot = sc.toScreen(o.anchor.top.x, o.anchor.top.y);
      if (Math.abs(ot.x - cx) < this.bw / 2 + u(40) && ot.y < head.y + u(200)) cy = Math.min(cy, ot.y - this.bh / 2 - u(10));
    }
    cy = clamp(cy, my + this.bh / 2, H - my - this.bh / 2);
    // gentle float
    cy += Math.sin(t * 2.2 + a.n) * u(3);
    var tilt = (1 - pin) * -8 * side;
    var tx = mouth.x - cx, ty = mouth.y - cy;
    var tr = "translate(" + fx(cx) + "px," + fx(cy) + "px) rotate(" + fx(tilt) + "deg) scale(" + fx(sP) + ")";
    this.box.style.transform = "translate(-50%,-50%) " + tr;
    this.box.style.left = "0px"; this.box.style.top = "0px";
    this.g.setAttribute("transform", "translate(" + fx(cx) + "," + fx(cy) + ") rotate(" + fx(tilt) + ") scale(" + fx(sP) + ")");
    // tail: from bubble edge toward mouth (stop short of it)
    var len = Math.sqrt(tx * tx + ty * ty) || 1;
    var stop = Math.max(0, len - u(60) * a.anchor.s * (sc.camNow ? sc.camNow.z : 1));
    var ex = (tx / len) * stop, ey = (ty / len) * stop;
    var bx = clamp(tx * 0.25, -this.bw / 2 + u(50), this.bw / 2 - u(50)), by = ty > 0 ? this.bh / 2 - u(6) : -this.bh / 2 + u(6);
    var wdt = u(24);
    if (this.kind === "thought") {
      var dd = "";
      for (var i = 0; i < 3; i++) { var p = 0.45 + i * 0.25, r = u(13 - i * 3.5); dd += circleD(lerp(bx, ex, p), lerp(by + u(16), ey, p), r); }
      this.tailO.setAttribute("d", dd); this.tailF.setAttribute("d", "M0,0");
    } else {
      var d = "M" + fx(bx - wdt) + "," + fx(by) + " Q" + fx(lerp(bx, ex, 0.5) - wdt * 0.2) + "," + fx(lerp(by, ey, 0.6)) + " " + fx(ex) + "," + fx(ey) + " Q" + fx(lerp(bx, ex, 0.4) + wdt * 0.6) + "," + fx(lerp(by, ey, 0.4)) + " " + fx(bx + wdt) + "," + fx(by) + "Z";
      this.tailO.setAttribute("d", d);
      var d2 = "M" + fx(bx - wdt + u(5)) + "," + fx(by - u(8)) + " Q" + fx(lerp(bx, ex, 0.5) - wdt * 0.2) + "," + fx(lerp(by, ey, 0.6) - u(4)) + " " + fx(lerp(bx, ex, 0.9)) + "," + fx(lerp(by, ey, 0.9)) + " Q" + fx(lerp(bx, ex, 0.4) + wdt * 0.6 - u(4)) + "," + fx(lerp(by, ey, 0.4)) + " " + fx(bx + wdt - u(5)) + "," + fx(by - u(8)) + "Z";
      this.tailF.setAttribute("d", d2);
    }
    // karaoke: spoken words full ink, upcoming words lighter
    if (this.karaoke) {
      for (var k = 0; k < this.spans.length; k++) {
        var on = t >= this.times[k] - 0.05;
        var sp = this.spans[k];
        var op = on ? "1" : "0.3";
        if (sp._op !== op) { sp.style.opacity = op; sp._op = op; }
      }
    }
  };
  function circleD(cx, cy, r) { return "M" + fx(cx - r) + "," + fx(cy) + " a" + fx(r) + "," + fx(r) + " 0 1,0 " + fx(2 * r) + ",0 a" + fx(r) + "," + fx(r) + " 0 1,0 " + fx(-2 * r) + ",0Z"; }
  SP.bubble = function (actor, text, from, to, opts) {
    var b = new Bubble(this, actor, text, from, to, opts);
    if (!opts || opts.talk !== false) if ((opts && opts.kind) !== "thought") actor.say(from, to, text);
    return b;
  };

  // ───────────────────────── stickers (key text cards) ─────────────────────────
  /** Chunky tilted text card that pops in. opts: { x, y (0..1 of frame), rot, color, kicker, until, size, icon, maxWidth, align } */
  SP.sticker = function (text, at, opts) {
    opts = opts || {};
    var sc = this;
    var tl = V.timeline();
    at = clampT(at);
    var card = el("div.cz-sticker", { parent: sc.overlay });
    if (opts.color) card.style.setProperty("--sk", opts.color);
    var size = opts.size || "md";
    card.classList.add("cz-sk-" + size);
    card.style.left = num(opts.x, 0.5) * 100 + "%";
    card.style.top = num(opts.y, 0.2) * 100 + "%";
    card.style.maxWidth = num(opts.maxWidth, sc.portrait ? 0.84 : sc.square ? 0.7 : 0.42) * sc.W + "px";
    if (opts.kicker) el("div.cz-kicker", { parent: card, text: plain(opts.kicker) });
    var row = el("div.cz-skrow", { parent: card });
    if (opts.icon) { var ic = el("div.cz-skicon", { parent: row }); ic.innerHTML = propIcon(opts.icon, u(size === "lg" ? 110 : 84)); }
    var tx = el("div.cz-sktext", { parent: row });
    tx.appendChild(S.rich(text));
    V.fit(tx, { maxLines: num(opts.maxLines, 3), min: u(24) });
    // keep the whole card inside safe margins
    try {
      var cw = card.offsetWidth, ch = card.offsetHeight, W = sc.W, H = sc.H;
      var px = clamp(num(opts.x, 0.5) * W, cw / 2 + W * 0.045, Math.max(cw / 2 + W * 0.045, W - cw / 2 - W * 0.045));
      var py = clamp(num(opts.y, 0.2) * H, ch / 2 + H * 0.045, Math.max(ch / 2 + H * 0.045, H - ch / 2 - H * 0.045));
      card.style.left = px + "px"; card.style.top = py + "px";
    } catch (e) {}
    var rot = num(opts.rot, (S.hash(text) % 2 ? -1 : 1) * (2 + (S.hash(text) % 3)));
    tl.fromTo(card, { scale: 0, rotate: rot - 14, opacity: 0 }, { scale: 1, rotate: rot, opacity: 1 }, { at: at, dur: 0.5, ease: EASE.snap });
    if (opts.until != null && opts.until < V.duration - 0.2) tl.to(card, { scale: 0, rotate: rot + 10, opacity: 0 }, { at: clampT(opts.until), dur: 0.3, ease: "inBack" });
    card._tl = tl;
    return card;
  };
  /** Lower-third kinetic captions of V.words (or text), chunked. */
  SP.captions = function (opts) {
    opts = opts || {};
    var sc = this;
    var toks = words().length ? words().map(function (w) { return { w: w.word, s: w.start, e: w.end }; }) : null;
    if (!toks) {
      var txt = plain(opts.text || V.narration || "").split(/\s+/).filter(Boolean).slice(0, 400);
      var D = V.duration, n = Math.max(1, txt.length);
      toks = txt.map(function (w, i) { return { w: w, s: 0.3 + ((D - 0.6) * i) / n, e: 0.3 + ((D - 0.6) * (i + 0.9)) / n }; });
    }
    if (!toks.length) return null;
    var per = opts.chunk || (sc.portrait ? 4 : 6);
    var chunks = [];
    for (var i = 0; i < toks.length; i += per) {
      // break at punctuation if it comes earlier
      var j = i, end = Math.min(toks.length, i + per);
      for (var q = i; q < end; q++) if (/[.!?,;:]$/.test(toks[q].w) && q > i) { end = q + 1; break; }
      chunks.push(toks.slice(i, end));
      i = end - per;
    }
    var bar = el("div.cz-caps", { parent: sc.overlay });
    if (opts.top) bar.classList.add("cz-caps-top");
    var line = el("div.cz-capline", { parent: bar });
    var built = chunks.map(function (ch) {
      var d = el("div.cz-capchunk", { parent: line });
      var spans = ch.map(function (tk) { var s = el("span", { parent: d, text: tk.w + " " }); return { el: s, s: tk.s }; });
      V.fit(d, { maxLines: 2, min: u(26) });
      d.style.display = "none";
      return { el: d, s: ch[0].s, e: ch[ch.length - 1].e, spans: spans };
    });
    var cur = -1;
    sc.onFrame(function (t) {
      var idx = -1;
      for (var k = 0; k < built.length; k++) if (t >= built[k].s - 0.1) idx = k;
      if (idx >= 0 && t > built[idx].e + 1.2 && (idx === built.length - 1)) idx = -1;
      if (idx !== cur) { built.forEach(function (b, k) { b.el.style.display = k === idx ? "" : "none"; }); cur = idx; }
      if (idx >= 0) {
        var b = built[idx], p = EASE.snap(clamp((t - b.s + 0.1) / 0.3, 0, 1));
        b.el.style.transform = "translateY(" + fx((1 - p) * u(30)) + "px) scale(" + fx(0.9 + 0.1 * p) + ")";
        b.el.style.opacity = fx(clamp(p * 2, 0, 1));
        for (var q = 0; q < b.spans.length; q++) {
          var on = t >= b.spans[q].s - 0.04, nx = q + 1 < b.spans.length ? b.spans[q + 1].s : b.e;
          b.spans[q].el.className = on ? (t < nx ? "cz-now" : "cz-said") : "";
        }
      }
    });
    return bar;
  };

  // ───────────────────────── emotion marks ─────────────────────────
  var MARKS = {
    sweat: function (gm) { gm.innerHTML = '<path d="M0,-22 C8,-8 14,0 14,8 C14,17 7,22 0,22 C-7,22 -14,17 -14,8 C-14,0 -8,-8 0,-22Z" fill="#7FD3F7" stroke="' + INK + '" stroke-width="4"/><path d="M-6,8 C-6,12 -4,15 0,16" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/>'; return { dx: 78, dy: -40, anim: function (lt, n) { return { y: Math.min(lt, 1) * 26, r: 0, s: 1, o: 1 }; } }; },
    sparkle: function (gm) { var st = "M0,-20 C2,-4 4,-2 20,0 C4,2 2,4 0,20 C-2,4 -4,2 -20,0 C-4,-2 -2,-4 0,-20Z"; gm.innerHTML = '<path d="' + st + '" fill="#FFD84A" stroke="' + INK + '" stroke-width="3.5" stroke-linejoin="round"/><path d="' + st + '" transform="translate(-118,-30) scale(.7)" fill="#FFD84A" stroke="' + INK + '" stroke-width="4"/><path d="' + st + '" transform="translate(-60,-78) scale(.55)" fill="#FFFFFF" stroke="' + INK + '" stroke-width="5"/>'; return { dx: 60, dy: -60, anim: function (lt) { return { y: 0, r: lt * 40, s: 0.85 + 0.25 * Math.abs(Math.sin(lt * 6)), o: 1 }; } }; },
    question: function (gm) { gm.innerHTML = qText("?", "#9B6CF2", 0, 0, 1) + qText("?", "#9B6CF2", -54, 22, 0.65); return { dx: 40, dy: -80, anim: function (lt) { return { y: Math.sin(lt * 4) * 5, r: Math.sin(lt * 3) * 8, s: 1, o: 1 }; } }; },
    exclaim: function (gm) { gm.innerHTML = qText("!", "#E8584A", 0, 0, 1.15) + '<path d="M-40,-30 L-58,-44 M40,-30 L58,-44 M-46,6 L-66,8 M46,6 L66,8" stroke="' + INK + '" stroke-width="5" stroke-linecap="round"/>'; return { dx: 0, dy: -86, anim: function (lt) { return { y: 0, r: 0, s: 1 + 0.08 * Math.max(0, Math.sin(lt * 10)) * Math.max(0, 1 - lt), o: 1 }; } }; },
    anger: function (gm) { gm.innerHTML = '<path d="M-6,-20 C-6,-8 -8,-6 -20,-6 M6,-20 C6,-8 8,-6 20,-6 M-6,20 C-6,8 -8,6 -20,6 M6,20 C6,8 8,6 20,6" fill="none" stroke="#E5484D" stroke-width="8" stroke-linecap="round"/>'; return { dx: 62, dy: -62, anim: function (lt) { return { y: 0, r: 0, s: 1 + 0.18 * Math.abs(Math.sin(lt * 9)), o: 1 }; } }; },
    heart: function (gm) { gm.innerHTML = '<g transform="scale(.5)">' + PROPS.heart + '</g><g transform="translate(-60,30) scale(.32)">' + PROPS.heart + "</g>"; return { dx: 50, dy: -70, anim: function (lt) { return { y: -((lt * 30) % 40), r: Math.sin(lt * 4) * 10, s: 1, o: 1 }; } }; },
    idea: function (gm) { gm.innerHTML = '<g class="cz-rays">' + [0, 1, 2, 3, 4, 5, 6, 7].map(function (i) { return '<path d="M0,-58 L0,-78" transform="rotate(' + i * 45 + ')" stroke="#FFD84A" stroke-width="7" stroke-linecap="round"/>'; }).join("") + '</g><g transform="scale(.82)">' + PROPS.lightbulb + "</g>"; return { dx: 0, dy: -110, anim: function (lt) { return { y: Math.sin(lt * 3) * 4, r: 0, s: 1, o: 1, rays: 1 + 0.15 * Math.sin(lt * 8) }; } }; },
    dizzy: function (gm) { var st = '<path d="M0,-14 L4,-4 L14,-4 L6,3 L9,13 L0,7 L-9,13 L-6,3 L-14,-4 L-4,-4Z" fill="#FFD84A" stroke="' + INK + '" stroke-width="3"/>'; gm.innerHTML = '<g class="cz-orb">' + [0, 1, 2].map(function (i) { return '<g transform="rotate(' + i * 120 + ') translate(80,0) scale(1,1)">' + st + "</g>"; }).join("") + "</g>"; return { dx: 0, dy: -10, anim: function (lt) { return { y: 0, r: lt * 220, s: 1, o: 1, flat: true }; } }; },
    music: function (gm) { gm.innerHTML = '<path d="M0,10 L0,-30 L20,-36 L20,4" fill="none" stroke="' + INK + '" stroke-width="5"/><ellipse cx="-6" cy="12" rx="9" ry="7" fill="' + INK + '"/><ellipse cx="14" cy="6" rx="9" ry="7" fill="' + INK + '"/>'; return { dx: 70, dy: -50, anim: function (lt) { return { y: -((lt * 40) % 50), r: Math.sin(lt * 5) * 14, s: 1, o: 1 }; } }; },
    tears: function (gm) { gm.innerHTML = '<path d="M-28,0 C-30,14 -34,24 -28,30 C-22,24 -26,14 -28,0Z M28,0 C26,14 22,24 28,30 C34,24 30,14 28,0Z" fill="#7FD3F7" stroke="' + INK + '" stroke-width="3"/>'; return { dx: 0, dy: 100, face: true, anim: function (lt) { return { y: (lt * 30) % 18, r: 0, s: 1, o: 1 }; } }; },
    zzz: function (gm) { gm.innerHTML = qText("z", "#5CB8F2", 0, 0, 0.7) + qText("z", "#5CB8F2", 30, -36, 0.9) + qText("Z", "#5CB8F2", 66, -80, 1.1); return { dx: 60, dy: -60, anim: function (lt) { return { y: Math.sin(lt * 2) * 6, r: 0, s: 1, o: 1 }; } }; },
    shock: function (gm) { gm.innerHTML = [0, 1, 2, 3, 4, 5, 6].map(function (i) { return '<path d="M0,-96 L0,-128" transform="rotate(' + (-90 + i * 30) + ')" stroke="' + INK + '" stroke-width="6" stroke-linecap="round"/>'; }).join(""); return { dx: 0, dy: 10, anim: function (lt) { return { y: 0, r: 0, s: 1 + Math.min(lt, 0.3) * 0.5, o: 1 }; } }; },
  };
  var MARK_ALIASES = { sweatdrop: "sweat", "sweat-drop": "sweat", sparkles: "sparkle", stars: "sparkle", "?": "question", questions: "question", confused: "question", "!": "exclaim", exclamation: "exclaim", alert: "exclaim", vein: "anger", angry: "anger", hearts: "heart", love: "heart", lightbulb: "idea", bulb: "idea", dizzy: "dizzy", notes: "music", cry: "tears", crying: "tears", sleep: "zzz", sleepy: "zzz", surprise: "shock", lines: "shock" };
  function markName(n) { n = str(n).toLowerCase().trim(); if (MARKS[n]) return n; return MARK_ALIASES[n] || "sparkle"; }
  S.markNames = Object.keys(MARKS);
  var GLYPH = { "?": "M-14,-22 C-14,-42 16,-42 16,-22 C16,-8 1,-8 1,6", "!": "M0,-36 L0,2", z: "M-13,-14 L13,-14 L-13,14 L13,14", Z: "M-13,-14 L13,-14 L-13,14 L13,14" };
  function qText(ch, col, x, y, s) {
    var d = GLYPH[ch] || GLYPH["?"], dot = ch === "?" || ch === "!";
    return '<g transform="scale(' + s + ') translate(' + x + ',' + y + ')"><path d="' + d + '" fill="none" stroke="' + INK + '" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/><path d="' + d + '" fill="none" stroke="' + col + '" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>' + (dot ? '<circle cx="1" cy="24" r="9" fill="' + col + '" stroke="' + INK + '" stroke-width="5"/>' : "") + "</g>";
  }
  function qTextOld(ch, col, x, y, s) {
    return '<text x="' + x + '" y="' + y + '" transform="scale(' + s + ')" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="64" fill="' + col + '" stroke="' + INK + '" stroke-width="5" paint-order="stroke" dy="22">' + esc(ch) + "</text>";
  }
  SP.mark = function (actor, kind, at, dur) {
    var name = markName(kind);
    at = clampT(at); dur = num(dur, 1.6);
    var root = g(this.fx), inner = g(root);
    var spec = MARKS[name](inner);
    var rays = inner.querySelector(".cz-rays");
    this.markList.push(function (t) {
      var lt = t - at;
      var on = lt >= 0 && lt <= dur + 0.25 && actor.anchor && actor.visible !== false;
      root.style.display = on ? "" : "none";
      if (!on) return;
      var pin = EASE.snap(clamp(lt / 0.3, 0, 1)), pout = 1 - clamp((lt - dur) / 0.25, 0, 1);
      var A = actor.anchor, s = A.s, an = spec.anim(lt);
      var dx = spec.dx * (A.dir || 1);
      var x = A.head.x + dx * s, y = A.head.y + (spec.dy + an.y) * s;
      root.setAttribute("transform", "translate(" + fx(x) + "," + fx(y) + ") scale(" + fx(s * pin * pout * an.s) + ")");
      inner.setAttribute("transform", "rotate(" + fx(an.r) + ")" + (an.flat ? " scale(1,.35)" : ""));
      if (rays) rays.setAttribute("transform", "scale(" + fx(an.rays || 1) + ")");
    });
    return root;
  };
  /** Comic burst lines radiating from a world point. */
  SP.burst = function (x, y, at, opts) {
    opts = opts || {};
    at = clampT(at);
    var n = opts.count || 12, r0 = num(opts.r, 90), col = opts.color || INK;
    var root = g(this.fx), lines = [];
    for (var i = 0; i < n; i++) lines.push(svgEl("path", { stroke: col, "stroke-width": num(opts.width, 7), "stroke-linecap": "round", fill: "none" }, root));
    this.markList.push(function (t) {
      var lt = t - at, on = lt >= 0 && lt < 0.6;
      root.style.display = on ? "" : "none";
      if (!on) return;
      var p = EASE.soft(lt / 0.6);
      for (var k = 0; k < n; k++) {
        var a = (k / n) * 2 * PI + 0.3, a0 = r0 * (0.6 + p * 0.9), a1 = r0 * (0.95 + p * 0.9 - p * p * 0.7 + (k % 2) * 0.25);
        lines[k].setAttribute("d", "M" + fx(x + Math.cos(a) * a0) + "," + fx(y + Math.sin(a) * a0) + " L" + fx(x + Math.cos(a) * Math.max(a0, a1)) + "," + fx(y + Math.sin(a) * Math.max(a0, a1)));
      }
      root.setAttribute("opacity", fx(1 - p * p));
    });
    return root;
  };
  /** Motion (speed) lines trailing an actor while it moves. */
  SP.motionLines = function (actor, from, to) {
    var root = g(this.fx), ls = [0, 1, 2].map(function () { return svgEl("path", { stroke: "rgba(42,33,64,.45)", "stroke-width": 6, "stroke-linecap": "round", fill: "none" }, root); });
    from = clampT(from); to = num(to, V.duration);
    this.markList.push(function (t) {
      var on = t >= from && t <= to && actor.anchor;
      root.style.display = on ? "" : "none";
      if (!on) return;
      var A = actor.anchor, d = A.dir || 1, s = A.s;
      for (var k = 0; k < 3; k++) {
        var y = A.feet.y - (140 + k * 90) * s, x = A.feet.x - d * (90 + (k % 2) * 30) * s, len = (60 + 40 * Math.abs(Math.sin(t * 9 + k))) * s;
        ls[k].setAttribute("d", "M" + fx(x) + "," + fx(y) + " L" + fx(x - d * len) + "," + fx(y));
      }
    });
    return root;
  };
  /** A prop placed in the world (pops in at `at`, optional bob). opts: { x, y, size, at, until, float, layer:"back"|"front" } */
  SP.prop = function (name, opts) {
    opts = opts || {};
    var at = clampT(opts.at == null ? 0 : opts.at), until = opts.until;
    var root = g(opts.front ? this.fx : this.propLayer), inner = g(root);
    inner.innerHTML = propSvg(name);
    var x = num(opts.x, this.Ww / 2), y = num(opts.y, this.G - 60), s = num(opts.size, 1.2), fl = opts.float !== false && opts.float != null ? 1 : opts.float === false ? 0 : 0;
    var spin = !!opts.spin;
    if (opts.float) fl = 1;
    this.markList.push(function (t) {
      var lt = t - at, on = lt >= 0 && (until == null || t < until + 0.3);
      root.style.display = on ? "" : "none";
      if (!on) return;
      var pin = EASE.snap(clamp(lt / 0.45, 0, 1)), pout = until == null ? 1 : 1 - clamp((t - until) / 0.3, 0, 1);
      var by = fl ? Math.sin(t * 2.4 + x) * 8 : 0;
      root.setAttribute("transform", "translate(" + fx(x) + "," + fx(y + by - (1 - pin) * 40) + ") scale(" + fx(s * pin * pout) + ")");
      inner.setAttribute("transform", spin ? "rotate(" + fx(Math.sin(t * 2) * 8) + ")" : "rotate(" + fx((1 - pin) * -20) + ")");
    });
    root._move = function () {};
    return root;
  };

  // ───────────────────────── boards (whiteboard / screen / chalkboard) ─────────────────────────
  /** opts: { x (centre), y (bottom), w, h, kind: "whiteboard"|"screen"|"chalk", title, at } */
  SP.board = function (opts) {
    opts = opts || {};
    var sc = this, k = this.k;
    var kind = opts.kind || (this.loc && this.loc.board) || "whiteboard";
    var w = num(opts.w, this.portrait ? 480 : 560), h = num(opts.h, this.portrait ? 360 : 400);
    var x = num(opts.x, this.Ww * 0.68), yb = num(opts.y, kind === "whiteboard" ? this.G - 150 : this.G - 230);
    var div = el("div.cz-board.cz-board-" + kind, { parent: this.html });
    div.style.left = (x - w / 2) * k + "px"; div.style.top = (yb - h) * k + "px";
    div.style.width = w * k + "px"; div.style.height = h * k + "px";
    div.style.setProperty("--k", k + "px");
    if (kind === "whiteboard") {
      var legs = el("div.cz-easel", { parent: div });
      legs.innerHTML = '<svg viewBox="0 0 100 100" preserveAspectRatio="none" width="100%" height="100%"><path d="M22,0 L10,100 M78,0 L90,100" stroke="#8A5A3B" stroke-width="5" vector-effect="non-scaling-stroke"/></svg>';
    }
    if (kind === "screen") el("div.cz-stand", { parent: div });
    var inner = el("div.cz-binner", { parent: div });
    if (opts.title) el("div.cz-btitle", { parent: inner, text: plain(opts.title) });
    var body = el("div.cz-bbody", { parent: inner });
    var tl = V.timeline();
    var at = clampT(opts.at == null ? 0.1 : opts.at);
    tl.fromTo(div, { scale: 0.3, opacity: 0, y: 40 * k }, { scale: 1, opacity: 1, y: 0 }, { at: at, dur: 0.55, ease: EASE.snap });
    var B = { el: div, body: body, inner: inner, x: x, y: yb, w: w, h: h, kind: kind, tl: tl, items: [],
      /** world point to point at for item i (or centre) */
      target: function (i) {
        var it = B.items[i];
        if (it) { var r = it.offsetTop + it.offsetHeight / 2; var l = it.offsetLeft; return { x: x - w / 2 + (l + body.offsetLeft) / k + 10, y: yb - h + (r + body.offsetTop + inner.offsetTop) / k }; }
        return { x: x - w / 2 + 40, y: yb - h / 2 };
      },
    };
    B.list = function (items, times) {
      body.classList.add("cz-blist");
      items.forEach(function (txt, i) {
        var row = el("div.cz-bitem", { parent: body });
        var dot = el("span.cz-bdot", { parent: row, text: String(i + 1) });
        dot.style.background = S.color(i);
        var tx = el("span.cz-bitext", { parent: row }); tx.appendChild(S.rich(txt));
        B.items.push(row);
        var t = times && times[i] != null ? times[i] : at + 0.6 + i * 0.8;
        tl.fromTo(row, { opacity: 0, x: -30 * k, scale: 0.9 }, { opacity: 1, x: 0, scale: 1 }, { at: t, dur: 0.45, ease: EASE.snap });
      });
      V.fit(body, { min: u(16) });
      fitRows(body, items.length);
      return B;
    };
    B.bars = function (data, times) {
      body.classList.add("cz-bbars");
      var max = 0; data.forEach(function (d) { max = Math.max(max, num(d.value, 0)); });
      data.forEach(function (d, i) {
        var col = el("div.cz-bcol", { parent: body });
        var val = el("div.cz-bval", { parent: col, text: d.display || S.formatValue(num(d.value, 0)) });
        var bar = el("div.cz-bbar", { parent: col });
        bar.style.height = Math.max(4, (num(d.value, 0) / (max || 1)) * 100) + "%";
        bar.style.background = d.color || S.color(i);
        el("div.cz-blabel", { parent: col, text: plain(d.label) });
        B.items.push(col);
        var t = times && times[i] != null ? times[i] : at + 0.6 + i * 0.5;
        tl.fromTo(bar, { scaleY: 0 }, { scaleY: 1 }, { at: t, dur: 0.7, ease: EASE.snap });
        tl.fromTo(val, { opacity: 0, y: 20 * k }, { opacity: 1, y: 0 }, { at: t + 0.35, dur: 0.35, ease: "outBack" });
      });
      return B;
    };
    B.big = function (text, t, sub) {
      body.classList.add("cz-bbig");
      var n = el("div.cz-bnum", { parent: body }); n.appendChild(S.rich(text));
      V.fit(n, { maxLines: 2, min: u(30) });
      if (sub) el("div.cz-bsub", { parent: body, text: plain(sub) });
      B.items.push(n);
      tl.fromTo(n, { scale: 0, rotate: -8 }, { scale: 1, rotate: 0 }, { at: clampT(t), dur: 0.55, ease: EASE.snap });
      return B;
    };
    B.icon = function (name, caption, t) {
      body.classList.add("cz-bicon");
      var ic = el("div.cz-bico", { parent: body }); ic.innerHTML = propIcon(name, Math.min(w, h) * 0.5 * k);
      if (caption) { var cp = el("div.cz-bsub", { parent: body }); cp.appendChild(S.rich(caption)); }
      B.items.push(ic);
      tl.fromTo(ic, { scale: 0, rotate: -20 }, { scale: 1, rotate: 0 }, { at: clampT(t), dur: 0.6, ease: EASE.snap });
      return B;
    };
    B.line = function (points, t, label) {
      body.classList.add("cz-bline");
      var pts = arr(points).map(function (p) { return num(p, 0); });
      if (pts.length < 2) pts = [1, 2, 3];
      var mn = Math.min.apply(null, pts), mx = Math.max.apply(null, pts);
      var d = pts.map(function (p, i) { return (i ? "L" : "M") + fx((i / (pts.length - 1)) * 100) + "," + fx(90 - ((p - mn) / (mx - mn || 1)) * 80); }).join(" ");
      var up = pts[pts.length - 1] >= pts[0];
      var hold = el("div.cz-blinebox", { parent: body });
      hold.innerHTML = '<svg viewBox="-4 -4 108 108" preserveAspectRatio="none" width="100%" height="100%"><path d="' + d + '" fill="none" stroke="' + (up ? "#2FBF7B" : "#E8584A") + '" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" class="cz-lp"/></svg>';
      if (label) { var lb = el("div.cz-bsub", { parent: body }); lb.appendChild(S.rich(label)); }
      var path = hold.querySelector(".cz-lp");
      path.style.strokeWidth = u(9) + "px";
      tl.fromTo(path, { draw: 0 }, { draw: 1 }, { at: clampT(t), dur: 1.2, ease: "inOutCubic" });
      B.items.push(hold);
      return B;
    };
    return B;
  };
  function fitRows(body, n) {
    // make sure list rows fit the board body (shrink font if needed)
    try {
      var fs = parseFloat(getComputedStyle(body).fontSize) || 20, guard = 0;
      while (body.scrollHeight > body.clientHeight + 2 && guard++ < 20) { fs *= 0.92; body.style.fontSize = fs + "px"; }
    } catch (e) {}
  }

  // ───────────────────────── high-level helpers ─────────────────────────
  function D() { return V.duration; }
  function tAt(word, frac, after, lead) { return syncAt(word, after || 0, D() * frac, lead); }
  /** Talk during the narration between from/to (uses real word timings when present). */
  function narrate(actor, from, to) {
    var W = words();
    from = from == null ? 0 : from; to = to == null ? D() : to;
    if (W.length) {
      // group words into phrases so the mouth rests in pauses
      var s = null, e = null;
      for (var i = 0; i < W.length; i++) {
        var w = W[i];
        if (w.start < from - 0.01 || w.start > to) continue;
        if (s == null) { s = w.start; e = w.end; continue; }
        if (w.start - e > 0.35) { actor.say(s, e); s = w.start; }
        e = w.end;
      }
      if (s != null) actor.say(s, e);
    } else {
      var a = Math.max(from, 0.25), b = Math.min(to, D() - 0.35);
      if (b - a > 0.3) {
        // phrases of ~2.2 s with short breaths
        var t = a, k = 0;
        while (t < b - 0.2) { var e2 = Math.min(b, t + 1.6 + ((k * 7) % 5) * 0.25); actor.say(t, e2); t = e2 + 0.28; k++; }
      }
    }
    return actor;
  }
  S.narrate = narrate;
  function ensureScene(loc, opts) { if (!current) new Scene(V.root(), Object.assign({ location: loc || "stage" }, opts || {})); return current; }
  /** Two-or-more actor dialogue with bubbles. lines: [{speaker (index|name|actor), text, expression?, pose?, mark?, kind?}] */
  function dialogue(sc, actors, lines, opts) {
    opts = opts || {};
    var texts = lines.map(function (l) { return str(l.text); });
    var win = lineWindows(texts, opts);
    lines.forEach(function (l, i) {
      var who = l.speaker;
      var a = typeof who === "number" ? actors[clamp(who, 0, actors.length - 1)] : who && who.say ? who : null;
      if (!a) { var nm = castId(who, 0); for (var q = 0; q < actors.length; q++) if (actors[q].id === nm) a = actors[q]; }
      if (!a) a = actors[i % actors.length];
      var w = win[i];
      var nx = win[i + 1] ? win[i + 1].start : 1e9;
      sc.bubble(a, l.text, w.start, w.end, { kind: l.kind, icon: l.icon, hold: clamp(nx - w.end - 0.45, 0, 0.3) });
      if (l.expression) a.expression(l.expression, w.start - 0.1);
      a.pose(l.pose || (i % 2 ? "explain" : "talk"), w.start - 0.15, 0.4);
      a.pose("idle", w.end + 0.1, 0.6);
      if (l.mark) a.emote(l.mark, w.start + 0.1, Math.min(2, w.end - w.start + 0.4));
      actors.forEach(function (o) {
        if (o === a) return;
        o.lookAt(a, w.start - 0.2);
        if (i % 2 === 0 && w.end - w.start > 1.2) o.pose("nod", w.start + 0.4, 0.3).pose("idle", w.start + 1.6, 0.4);
        if (l.reaction) o.expression(l.reaction, w.start + 0.3);
      });
      a.lookAt(actors.length > 1 ? actors[(actors.indexOf(a) + 1) % actors.length] : "camera", w.start - 0.2);
    });
    return win;
  }
  S.dialogue = function (actors, lines, opts) { return dialogue(ensureScene(), actors, lines, opts); };

  // ───────────────────────── templates ─────────────────────────
  var T = {};
  function sidePos(sc, side) { // world x for "left"/"right" hero placement
    if (sc.portrait) return sc.Ww / 2;
    return side === "right" ? sc.Ww * (sc.square ? 0.7 : 0.73) : sc.Ww * (sc.square ? 0.3 : 0.27);
  }
  function stickerPos(sc, heroSide) {
    if (sc.portrait) return { x: 0.5, y: 0.16 };
    if (sc.square) return { x: heroSide === "right" ? 0.4 : 0.6, y: 0.17 };
    return { x: heroSide === "right" ? 0.33 : 0.66, y: 0.36 };
  }

  T["narrator-talks"] = function (root, p) {
    var sc = new Scene(root, { location: p.location || "living-room" });
    var side = p.side === "right" ? "right" : "left";
    var a = sc.character(p.character || "maya", { x: sidePos(sc, side), facing: "front", pose: "idle", expression: p.expression || "happy" });
    narrate(a);
    var tKey = tAt(p.keyword || S.autoKey(p.title), 0.35);
    a.pose("wave", 0.05, 0.35).pose("idle", Math.min(1.1, D() * 0.25), 0.5);
    if (p.title) {
      var sp = stickerPos(sc, side);
      sc.sticker(p.title, tKey, { x: sp.x, y: sp.y, kicker: p.kicker, icon: p.prop, size: "lg" });
      if (!sc.portrait) a.face(side === "left" ? "right" : "left", tKey - 0.2);
      a.pose(sc.portrait ? "point-up" : "point", tKey - 0.1, 0.4).pose("idle", tKey + 1.4, 0.6);
      a.lookAt(side === "left" ? "right" : "left", tKey - 0.1).lookAt("camera", tKey + 1.4);
      a.face("front", tKey + 1.5);
    }
    a.beats(p.beats || [], { start: D() * 0.5, step: D() * 0.15 });
    var cam = sc.cam;
    cam.set({ zoom: 1.04 });
    cam.push(sc.portrait ? 1.12 : 1.16, 0.2, Math.max(1, tKey - 0.2), { x: sc.Ww / 2 + (a.x0 - sc.Ww / 2) * 0.35 });
    cam.to({ zoom: 1.05, x: sc.Ww / 2 }, tKey - 0.15, 0.6, "inOutCubic");
    if (D() > 5) { var cz = sc.portrait ? 1.3 : 1.5; cam.cut({ actor: a, zoom: cz, focusY: sc.portrait ? 430 : 400, dx: sc.portrait ? 0 : (side === "left" ? 1 : -1) * sc.Ww * 0.2 / cz }, Math.max(tKey + 2, D() * 0.62)); }
  };

  T.dialogue = function (root, p) {
    var sc = new Scene(root, { location: p.location || "office" });
    var names = arr(p.characters).slice(0, 2);
    if (names.length < 2) names = [names[0] || "maya", names[0] === "leo" ? "priya" : "leo"];
    var xs = sc.slots(2, sc.portrait ? 0.56 : undefined);
    var A = sc.character(names[0], { x: xs[0], facing: "right", expression: "neutral" });
    var B = sc.character(names[1], { x: xs[1], facing: "left", expression: "neutral", index: 1 });
    var lines = arr(p.lines).slice(0, 8).filter(function (l) { return l && l.text; });
    if (!lines.length) lines = [{ speaker: 0, text: "Hi!" }, { speaker: 1, text: "Hello!" }];
    var win = dialogue(sc, [A, B], lines.map(function (l, i) { return { speaker: l.speaker != null ? l.speaker : i % 2, text: l.text, expression: l.expression, pose: l.pose, mark: l.mark, kind: l.kind }; }));
    // shot / reverse-shot camera
    var cam = sc.cam;
    cam.set({ zoom: 1 });
    win.forEach(function (w, i) {
      var who = lines[i].speaker;
      var right = typeof who === "number" ? who === 1 : castId(who) === B.id;
      if (i === 0) return cam.to({ zoom: 1.06 }, 0.2, 1.2, "inOutSine");
      cam.to({ x: sc.Ww / 2 + (right ? 1 : -1) * sc.Ww * (sc.portrait ? 0.03 : 0.06), zoom: (sc.portrait ? 1.02 : 1.12) + (i % 3) * 0.04 }, w.start - 0.3, 0.7, "inOutCubic");
    });
    if (p.endPose) { var last = win[win.length - 1]; A.pose(p.endPose, last.end + 0.2); B.pose(p.endPose, last.end + 0.3); }
  };

  T["walk-and-talk"] = function (root, p) {
    var segs = Math.max(2, Math.ceil(D() / 3));
    var sc = new Scene(root, { location: p.location || "city-street", span: Math.min(8, segs) });
    var startX = sc.Ww * 0.3, dist = Math.min(sc.x1 - sc.Ww - 200, Math.max(500, D() * 170));
    var a = sc.character(p.character || "sam", { x: startX, facing: "right", expression: p.expression || "happy" });
    a.moveTo(startX + dist, 0.15, D() - 0.5, { gait: "walk", ease: "linear" });
    var b = null;
    if (p.companion) {
      b = sc.character(p.companion, { x: startX - 270, facing: "right", expression: "happy", index: 1 });
      b.moveTo(startX - 270 + dist, 0.2, D() - 0.5, { gait: "walk", ease: "linear" });
    }
    var lines = arr(p.lines).filter(Boolean).slice(0, 6);
    if (lines.length) {
      var win = lineWindows(lines.map(str));
      lines.forEach(function (l, i) {
        var who = b && i % 2 === 1 ? b : a;
        sc.bubble(who, l, win[i].start, win[i].end, { hold: clamp((win[i + 1] ? win[i + 1].start : 1e9) - win[i].end - 0.4, 0, 0.3) });
        (who === a ? b : a) && (who === a ? b : a).lookAt(who, win[i].start);
        who.lookAt("camera", win[i].start);
      });
    } else narrate(a);
    sc.cam.follow(a, 0, D() + 1, { zoom: sc.portrait ? 1.08 : 1.12, lead: b ? -60 : 90 });
    if (p.caption) sc.sticker(p.caption, 0.3, { x: sc.portrait ? 0.5 : 0.24, y: sc.portrait ? 0.12 : 0.14, size: "sm", icon: "map" });
  };

  T.reaction = function (root, p) {
    var sc = new Scene(root, { location: p.location || "living-room" });
    var side = sc.portrait ? "left" : "left";
    var a = sc.character(p.character || "leo", { x: sidePos(sc, side), facing: "right", pose: p.setupPose || "idle", expression: "neutral" });
    var rv = p.reveal || {};
    var tR = tAt(p.word || S.autoKey(rv.text), 0.45);
    narrate(a, 0, tR - 0.3);
    narrate(a, tR + 1.3, D());
    a.pose(p.setupPose || "talk", 0.2, 0.4);
    var react = str(p.reaction || "surprised").toLowerCase();
    var map = {
      surprised: { pose: "surprised", expr: "surprised", mark: "exclaim" },
      excited: { pose: "celebrate", expr: "excited", mark: "sparkle" },
      happy: { pose: "fist-pump", expr: "happy", mark: "sparkle" },
      worried: { pose: "scared", expr: "worried", mark: "sweat" },
      angry: { pose: "hands-hips", expr: "angry", mark: "anger" },
      sad: { pose: "sad", expr: "sad", mark: "tears" },
      confused: { pose: "shrug", expr: "skeptical", mark: "question" },
      facepalm: { pose: "facepalm", expr: "sad", mark: "sweat" },
    }[react] || { pose: "surprised", expr: "surprised", mark: "exclaim" };
    a.expression(map.expr, tR + 0.05, 0.12).pose(map.pose, tR + 0.02, 0.22, "snap").emote(map.mark, tR + 0.15, 1.8);
    a.pose("idle", Math.min(D() - 0.2, tR + 2.4), 0.6);
    var sp = stickerPos(sc, side);
    var card = sc.sticker(rv.text || "!", tR - 0.05, { x: sp.x, y: sc.portrait ? 0.2 : sc.square ? 0.2 : 0.42, size: sc.square ? "lg" : "xl", icon: rv.prop, kicker: rv.kicker, color: rv.color });
    var sx = sc.portrait ? sc.Ww / 2 : sc.Ww * sp.x, sy = sc.portrait || sc.square ? 200 : 420;
    sc.burst(sx, sy, tR, { r: sc.portrait ? 160 : 200, count: 16, width: 8 });
    a.lookAt({ x: sx, y: sy }, tR - 0.3).lookAt("camera", tR + 1.6);
    var cam = sc.cam;
    cam.set({ zoom: 1.02 });
    cam.to({ actor: a, zoom: 1.25, focusY: 300 }, 0.3, Math.max(0.5, tR - 0.6), "inOutSine");
    cam.to({ zoom: 1, x: sc.Ww / 2, y: 500 }, tR - 0.05, 0.25, EASE.snap);
    cam.shake(tR + 0.05, 16, 0.5);
    cam.to({ actor: a, zoom: sc.portrait ? 1.4 : 1.55, focusY: sc.portrait ? 520 : 420, dx: sc.portrait ? 0 : sc.Ww * 0.21 / 1.55 }, tR + 0.6, 0.18, "outCubic");
    cam.to({ zoom: 1.05, x: sc.Ww / 2, y: 500 }, Math.min(D() - 0.8, tR + 1.9), 0.8, "inOutCubic");
  };

  T["explain-with-board"] = function (root, p) {
    var sc = new Scene(root, { location: p.location || "classroom" });
    var hx = sc.portrait ? sc.Ww * 0.3 : sc.Ww * (sc.square ? 0.22 : 0.24);
    var a = sc.character(p.character || "priya", { x: hx, facing: "right", expression: p.expression || "happy" });
    narrate(a);
    var bw = sc.portrait ? 500 : sc.square ? 560 : 820, bh = sc.portrait ? 380 : sc.square ? 420 : 470;
    var bx = sc.portrait ? sc.Ww / 2 : sc.square ? sc.Ww * 0.64 : sc.Ww * 0.62;
    var kind = p.board || undefined;
    var byB = sc.portrait ? 470 : undefined;
    var B = sc.board({ x: bx, w: bw, h: bh, y: byB, kind: kind, title: p.title, at: 0.15 });
    var mode = p.mode || (p.bars && p.bars.length ? "bars" : p.items && p.items.length ? "list" : p.big ? "big" : p.icon ? "icon" : "list");
    var times = [];
    if (mode === "list") {
      var items = arr(p.items).slice(0, 5).map(str);
      if (!items.length) items = ["Idea"];
      times = S.syncTimes(items.map(function (it) { return S.autoKey(it); }), { start: 0.7, end: D() * 0.78 });
      B.list(items, times);
    } else if (mode === "bars") {
      var bars = arr(p.bars).slice(0, 6);
      times = S.syncTimes(bars.map(function (b2) { return S.autoKey(b2.label); }), { start: 0.7, end: D() * 0.7 });
      B.bars(bars, times);
    } else if (mode === "line") {
      var tl0 = tAt(p.keyword, 0.3);
      B.line(p.points || [2, 3, 2.6, 4, 5.2, 7], tl0, p.caption);
      times = [tl0, tl0 + 0.8];
    } else if (mode === "big") {
      var tb = tAt(p.keyword || S.autoKey(p.big), 0.3);
      B.big(p.big || "?", tb, p.caption);
      times = [tb];
    } else {
      var ti = tAt(p.keyword || p.icon, 0.3);
      B.icon(p.icon || "lightbulb", p.caption, ti);
      times = [ti];
    }
    // point at each item as it appears
    a.lookAt({ x: bx, y: 400 }, 0.4);
    times.forEach(function (t, i) {
      if (i > 5) return;
      a.pose(i % 2 ? "explain" : "point", t - 0.15, 0.35);
    });
    var lastT = times.length ? times[times.length - 1] : 1;
    a.pose("present", Math.min(D() - 0.6, lastT + 1.2), 0.5).lookAt("camera", Math.min(D() - 0.6, lastT + 1.2));
    a.beats(p.beats || []);
    var cam = sc.cam;
    cam.set({ zoom: 1.03 });
    cam.to({ zoom: 1.1, x: sc.Ww / 2 + (bx - sc.Ww / 2) * 0.3 }, 0.4, Math.max(1.5, D() * 0.6), "inOutSine");
    cam.to({ zoom: 1.0, x: sc.Ww / 2 }, Math.min(D() - 0.8, lastT + 1.2), 0.8, "inOutCubic");
  };

  T["idea-moment"] = function (root, p) {
    var sc = new Scene(root, { location: p.location || "office" });
    var a = sc.character(p.character || "maya", { x: sidePos(sc, "left"), facing: "right", pose: "think", expression: "thinking" });
    var tI = tAt(p.word || S.autoKey(p.idea), 0.5);
    a.pose("think", 0, 0.01);
    if (p.problem) sc.bubble(a, p.problem, 0.25, Math.max(0.8, tI - 0.35), { kind: "thought", talk: false });
    else a.emote("question", 0.3, Math.max(0.6, tI - 0.5));
    narrate(a, tI + 0.6, D());
    a.expression("excited", tI, 0.12).pose("point-up", tI, 0.25, "snap").emote("idea", tI, Math.max(1.5, D() - tI - 0.3));
    a.pose("fist-pump", tI + 1.2, 0.35).pose("present", Math.min(D() - 0.3, tI + 2.6), 0.5).expression("happy", tI + 2.4);
    var sp = stickerPos(sc, "left");
    if (p.idea) sc.sticker(p.idea, tI + 0.3, { x: sp.x, y: sc.portrait ? 0.15 : sp.y, size: "lg", icon: p.prop || "lightbulb", kicker: p.kicker, color: "#FFE36E" });
    var cam = sc.cam;
    cam.set({ zoom: 1.02 });
    cam.to({ actor: a, zoom: 1.4, focusY: 330 }, 0.2, Math.max(0.6, tI - 0.3), "inOutSine");
    cam.to({ zoom: 1.0, x: sc.Ww / 2, y: 500 }, tI + 0.2, 0.35, EASE.snap);
    cam.shake(tI + 0.1, 8, 0.35);
    sc.burst(a.x0 * 1, sc.G - 640 * a.scale, tI + 0.05, { r: 110, color: "#F5B731", count: 12 });
  };

  T["compare-two"] = function (root, p) {
    var sc = new Scene(root, { location: p.location || "stage", color: p.color });
    var L = p.left || {}, Rr = p.right || {};
    var xs = sc.slots(2, sc.portrait ? 0.6 : 0.5);
    var A = sc.character(L.character || "leo", { x: xs[0], facing: "right", expression: L.expression || "neutral" });
    var B = sc.character(Rr.character || "priya", { x: xs[1], facing: "left", expression: Rr.expression || "neutral", index: 1 });
    var tA = tAt(L.word || S.autoKey(L.label), 0.12), tB = tAt(Rr.word || S.autoKey(Rr.label), 0.42, tA + 0.3);
    var tV = tAt(p.word, 0.75, tB + 0.5);
    var y = sc.portrait ? 0.14 : 0.16;
    var xl = sc.portrait ? 0.27 : 0.5 + (xs[0] - sc.Ww / 2) / sc.Ww, xr = sc.portrait ? 0.73 : 0.5 + (xs[1] - sc.Ww / 2) / sc.Ww;
    var mw = sc.portrait ? 0.44 : 0.36;
    sc.sticker(L.label || "Option A", tA, { x: xl, y: y, size: "md", icon: L.prop, color: L.color || "#BFE3FF", maxWidth: mw, rot: -3 });
    sc.sticker(Rr.label || "Option B", tB, { x: xr, y: y + 0.02, size: "md", icon: Rr.prop, color: Rr.color || "#FFD3C9", maxWidth: mw, rot: 3 });
    if (L.points) sc.sticker(arr(L.points).slice(0, 3).join(" · "), tA + 0.6, { x: xl, y: y + (sc.portrait ? 0.11 : 0.15), size: "sm", maxWidth: mw, rot: -1, color: "#FFFFFF" });
    if (Rr.points) sc.sticker(arr(Rr.points).slice(0, 3).join(" · "), tB + 0.6, { x: xr, y: y + (sc.portrait ? 0.13 : 0.17), size: "sm", maxWidth: mw, rot: 2, color: "#FFFFFF" });
    var vs = el("div.cz-vs", { parent: sc.overlay, text: "VS" });
    vs.style.top = (sc.portrait ? 0.36 : 0.42) * 100 + "%";
    var tl = V.timeline();
    tl.fromTo(vs, { scale: 0, rotate: -30 }, { scale: 1, rotate: -8 }, { at: Math.max(0.1, (tA + tB) / 2), dur: 0.5, ease: EASE.snap });
    A.pose("present", tA - 0.1, 0.4).pose("idle", tB - 0.2, 0.5);
    B.pose("present", tB - 0.1, 0.4).pose("idle", tV - 0.3, 0.5);
    narrate(A, tA - 0.1, tB - 0.3);
    narrate(B, tB - 0.1, tV - 0.2);
    A.lookAt(B, tB - 0.1); B.lookAt(A, tA);
    var v = str(p.verdict || "tie").toLowerCase();
    var cam = sc.cam;
    cam.set({ zoom: 1 });
    var cz2 = sc.portrait ? 1 : 1.08, cx2 = sc.portrait ? 0 : sc.Ww * 0.05;
    cam.to({ x: sc.Ww / 2 - cx2, zoom: cz2 }, tA - 0.3, 0.8);
    cam.to({ x: sc.Ww / 2 + cx2, zoom: cz2 }, tB - 0.3, 0.8);
    cam.to({ x: sc.Ww / 2, zoom: 1 }, tV - 0.3, 0.6);
    if (v === "left" || v === "right") {
      var W1 = v === "left" ? A : B, L1 = v === "left" ? B : A;
      W1.pose("celebrate", tV, 0.3).expression("excited", tV).emote("sparkle", tV + 0.1, 2);
      L1.pose("shrug", tV + 0.15, 0.4).expression("sad", tV + 0.1).emote("sweat", tV + 0.3, 1.6);
      narrate(W1, tV, D());
      cam.shake(tV + 0.05, 8, 0.4);
    } else {
      A.pose("fist-pump", tV, 0.4).expression("happy", tV); B.pose("fist-pump", tV + 0.1, 0.4).expression("happy", tV);
      narrate(A, tV, D());
    }
  };

  T["establishing-shot"] = function (root, p) {
    var sc = new Scene(root, { location: p.location || "city-street", span: 1.4 });
    var cast = arr(p.characters).slice(0, 3);
    var xs = sc.slots(Math.max(1, cast.length), 0.36);
    cast.forEach(function (n, i) {
      var a = sc.character(n, { x: xs[i], facing: i % 2 ? "left" : "right", expression: "happy", index: i });
      a.enter(i % 2 ? "right" : "left", 0.4 + i * 0.35, Math.min(2.2, D() * 0.35), xs[i]);
      var tw = Math.min(D() - 0.8, 0.6 + i * 0.35 + Math.min(2.2, D() * 0.35));
      a.face("front", tw).pose("wave", tw + 0.05, 0.35).pose("idle", tw + 1.3, 0.5);
      if (i === 0) narrate(a, tw + 0.2, D());
    });
    var cam = sc.cam;
    cam.set({ zoom: 1.18, x: sc.Ww * 0.25, y: 470 });
    cam.to({ zoom: 1.0, x: sc.Ww / 2, y: 500 }, 0, Math.max(1.5, D() * 0.7), "inOutSine");
    var tag = sc.sticker(p.caption || "Somewhere", 0.35, { x: sc.portrait ? 0.5 : 0.3, y: sc.portrait ? 0.14 : 0.18, size: "lg", icon: p.prop || "map", kicker: p.subcaption, color: "#FFFFFF" });
    tag.classList.add("cz-tag");
  };

  T["crowd-stat"] = function (root, p) {
    var sc = new Scene(root, { location: p.location || "stage", color: p.color || "#DCEBFF", charScale: 1 });
    var total = clamp(Math.round(num(p.total, 10)), 2, sc.portrait ? 12 : 16);
    var hi = clamp(Math.round(num(p.highlight, 1)), 0, total);
    var rows = sc.portrait && total > 6 ? 2 : total > 10 && !sc.portrait && !sc.square ? 1 : sc.square && total > 8 ? 2 : 1;
    var perRow = Math.ceil(total / rows);
    var spanW = sc.Ww * (sc.portrait ? 0.86 : 0.84);
    var scale = clamp(Math.min((spanW / perRow) / 230, (sc.G - 330) / (540 * (1 + (rows - 1) * 0.93))), 0.26, 0.7);
    var cast = arr(p.cast).length ? arr(p.cast) : CAST_IDS;
    var tS = tAt(p.word || S.autoKey(p.stat), 0.35);
    var actors = [];
    // spread highlighted figures out evenly
    var hiSet = {};
    for (var h = 0; h < hi; h++) hiSet[Math.floor(((h + 0.5) * total) / hi)] = true;
    for (var i = 0; i < total; i++) {
      var r = Math.floor(i / perRow), cI = i % perRow, nInRow = Math.min(perRow, total - r * perRow);
      var x = sc.Ww / 2 + (nInRow === 1 ? 0 : (cI / (nInRow - 1) - 0.5) * spanW * (nInRow / perRow));
      var y = sc.G - (rows - 1 - r) * 500 * scale;
      if (rows > 1 && r === 0) x += (spanW / perRow) * 0.5 * (cI === nInRow - 1 ? -1 : 1) * 0;
      var a = sc.character(cast[i % cast.length], { x: x, y: y, scale: scale / sc.charScale, facing: "front", expression: "neutral", index: i, gestures: false });
      a.pose("idle", 0);
      a.root.setAttribute("data-i", i);
      a.hide(0).show(0.15 + i * 0.06);
      a.pose("jump", 0.15 + i * 0.06, 0.01).pose("idle", 0.15 + i * 0.06 + 0.7, 0.3);
      if (hiSet[i]) {
        a.pose("celebrate", tS + 0.1 + (i % 3) * 0.05, 0.3).expression("excited", tS + 0.1);
        a.pose("idle", Math.min(D() - 0.3, tS + 2.2), 0.5).expression("happy", tS + 2.2);
        (function (A2) {
          var spot = svgEl("ellipse", { cx: 0, cy: 0, rx: 120, ry: 26, fill: p.highlightColor || "#FFB23E", opacity: 0 }, A2.root);
          A2.root.insertBefore(spot, A2.root.firstChild);
          var tl = V.timeline();
          tl.fromTo(spot, { opacity: 0, scale: 0.2 }, { opacity: 0.9, scale: 1 }, { at: tS, dur: 0.4, ease: EASE.snap });
        })(a);
      } else {
        (function (A2) { var tl = V.timeline(); tl.fromTo(A2.root, { opacity: 1 }, { opacity: 0.38 }, { at: tS, dur: 0.4 }); })(a);
        a.expression(i % 2 ? "neutral" : "thinking", tS);
      }
      actors.push(a);
    }
    sc.sticker(p.stat || hi + " in " + total, tS - 0.05, { x: 0.5, y: sc.portrait ? 0.18 : 0.2, size: "xl", kicker: p.kicker, color: p.highlightColor || "#FFE36E" });
    if (p.label) sc.sticker(p.label, tS + 0.35, { x: 0.5, y: sc.portrait ? 0.32 : 0.4, size: "sm", color: "#FFFFFF", rot: -1 });
    sc.cam.set({ zoom: 1.08 });
    sc.cam.to({ zoom: 1.0 }, 0.1, Math.max(1, tS), "inOutSine");
    sc.cam.shake(tS + 0.05, 6, 0.3);
  };

  T.journey = function (root, p) {
    var ms = arr(p.milestones).slice(0, 5).filter(Boolean);
    if (!ms.length) ms = [{ label: "Start" }, { label: "Goal" }];
    var gap = 640;
    var sc = new Scene(root, { location: p.location || "park", span: (ms.length * gap) / 1000 * 1.8 + 1.2 });
    var x0 = sc.portrait ? sc.Ww * 0.55 : sc.Ww * 0.36;
    var a = sc.character(p.character || "kai", { x: x0 - 260, facing: "right", expression: "happy" });
    var times = S.syncTimes(ms.map(function (m) { return m.word || S.autoKey(m.label); }), { start: 0.6, end: D() * 0.8, lead: 0.1 });
    var prevX = x0 - 260, prevT = 0.1;
    ms.forEach(function (m, i) {
      var sx = x0 + i * gap;
      // signpost in the world
      var sign = el("div.cz-sign", { parent: sc.html });
      sign.style.left = (sx - 10) * sc.k + "px"; sign.style.top = (sc.G - 470) * sc.k + "px";
      sign.style.setProperty("--k", sc.k + "px");
      var plate = el("div.cz-plate", { parent: sign });
      if (m.prop) { var ic = el("span.cz-pico", { parent: plate }); ic.innerHTML = propIcon(m.prop, 46 * sc.k); }
      var lbl = el("span", { parent: plate }); lbl.appendChild(S.rich(m.label));
      el("div.cz-post", { parent: sign });
      var tl = V.timeline();
      var t = times[i];
      tl.fromTo(sign, { scaleY: 0, opacity: 0 }, { scaleY: 1, opacity: 1 }, { at: Math.max(0, t - 0.55), dur: 0.5, ease: EASE.snap });
      var tOff = i < ms.length - 1 ? Math.min(D() - 0.3, times[i + 1] - 0.35) : 1e9, tOn = Math.max(0, t - 0.55);
      if (i < ms.length - 1) tl.to(sign, { opacity: 0, scaleY: 0.2 }, { at: tOff, dur: 0.3, ease: "inCubic" });
      (function (sg, a0, a1) { sc.onFrame(function (tt) { var v = tt >= a0 && tt < a1 + 0.3 ? "visible" : "hidden"; if (sg._v !== v) { sg.style.visibility = v; sg._v = v; } }); })(sign, tOn, tOff);
      tl.fromTo(plate, { rotate: -14 }, { rotate: i % 2 ? 3 : -3 }, { at: Math.max(0, t - 0.6), dur: 0.8, ease: "outElastic" });
      var arrive = Math.max(prevT + 0.4, t - 0.05), walkStart = Math.max(prevT + 0.05, arrive - Math.max(0.6, Math.abs(sx - 120 - prevX) / 260));
      a.moveTo(sx - 120, walkStart, arrive - walkStart, { gait: arrive - walkStart < 1 ? "run" : "walk" });
      a.pose(i === ms.length - 1 ? "celebrate" : "point-up", arrive, 0.3).pose("idle", arrive + 0.9, 0.4);
      if (i === ms.length - 1) a.expression("excited", arrive).emote("sparkle", arrive + 0.1, 1.5);
      prevX = sx - 120; prevT = arrive + 0.6;
    });
    narrate(a);
    sc.cam.follow(a, 0, D() + 1, { zoom: sc.portrait ? 1.0 : 1.08, lead: sc.Ww * (sc.portrait ? 0.12 : 0.16) });
    if (p.title) sc.sticker(p.title, 0.2, { x: 0.5, y: sc.portrait ? 0.1 : 0.12, size: "sm", color: "#FFFFFF", until: Math.max(1.5, D() * 0.35) });
  };

  T["title-card"] = function (root, p) {
    var sc = new Scene(root, { location: p.location || "stage", color: p.color || "#FFD9A8" });
    var cast = arr(p.characters).slice(0, 3);
    if (!cast.length) cast = ["maya", "leo", "bolt"];
    var xs = sc.slots(cast.length, cast.length === 1 ? 0 : sc.portrait ? 0.6 : 0.4);
    var tl = V.timeline();
    var tT = 0.35;
    cast.forEach(function (n, i) {
      var a = sc.character(n, { x: xs[i], facing: "front", expression: "excited", index: i });
      var ti = 0.15 + i * 0.12;
      a.hide(0).show(ti).pose("jump", ti, 0.01).pose(i === 1 ? "celebrate" : "wave", ti + 0.7, 0.3).pose("idle", Math.min(D() - 0.3, ti + 2.2), 0.5);
      if (i === 0) narrate(a, 0.9, D());
    });
    sc.sticker(p.title || "Chapter", tT, { x: 0.5, y: sc.portrait ? 0.2 : 0.24, size: "xl", kicker: p.kicker, icon: p.prop, color: "#FFFFFF" });
    if (p.subtitle) sc.sticker(p.subtitle, tT + 0.45, { x: 0.5, y: sc.portrait ? 0.34 : 0.43, size: "sm", color: p.accent || "#FFE36E", rot: 2 });
    sc.cam.set({ zoom: 1.12 });
    sc.cam.to({ zoom: 1.0 }, 0, 1.2, "outCubic");
    sc.cam.shake(0.3, 6, 0.3);
  };

  // ───────────────────────── public API ─────────────────────────
  /** Start a scene in a location. Returns the Scene (also stored as the current scene). */
  S.scene = function (location, opts) {
    opts = opts || {};
    if (typeof location === "object" && location) { opts = location; location = opts.location; }
    opts.location = location || opts.location || "stage";
    return new Scene(opts.root || V.root(), opts);
  };
  S.character = function (name, opts) { return ensureScene().character(name, opts); };
  S.bubble = function (actor, text, from, to, opts) { return ensureScene().bubble(actor, text, from, to, opts); };
  S.thought = function (actor, text, from, to, opts) { opts = opts || {}; opts.kind = "thought"; opts.talk = false; return ensureScene().bubble(actor, text, from, to, opts); };
  S.shout = function (actor, text, from, to, opts) { opts = opts || {}; opts.kind = "shout"; return ensureScene().bubble(actor, text, from, to, opts); };
  S.prop = function (name, opts) { return ensureScene().prop(name, opts); };
  S.camera = function () { return ensureScene().cam; };
  S.board = function (opts) { return ensureScene().board(opts); };
  S.sticker = function (text, at, opts) { return ensureScene().sticker(text, at, opts); };
  S.captions = function (opts) { return ensureScene().captions(opts); };
  S.mark = function (actor, kind, at, dur) { return ensureScene().mark(actor, kind, at, dur); };
  S.burst = function (x, y, at, opts) { return ensureScene().burst(x, y, at, opts); };
  S.motionLines = function (actor, from, to) { return ensureScene().motionLines(actor, from, to); };
  S.lines = lineWindows;
  S.cast = CAST_IDS.slice();
  S.locations = Object.keys(LOCATIONS);
  S.poses = Object.keys(POSES);
  S.expressions = Object.keys(EXPR);
  S.cartoonTemplates = T;
  S.templateIds = Object.keys(T);
  S.currentScene = function () { return current; };

  S.render = function (id, root, props) {
    var fn = T[id];
    if (!fn) throw new Error("Unknown template: " + id);
    root = root || V.root();
    try {
      fn(root, props || {});
    } catch (e) {
      V.error("cartoon template " + id + ": " + (e && e.message));
      try { V.reset(); } catch (e2) {}
      current = null;
      S.fallback(root, V.narration);
    }
    return root;
  };

  /** Fallback: narrator character talking beside kinetic captions. Never throws. */
  S.fallback = function (root, narration) {
    try {
      root = root || V.root();
      root.innerHTML = "";
      root.className = "";
      root.removeAttribute("style");
      current = null;
      var sc = new Scene(root, { location: "stage", color: "#FFE3C2" });
      var x = sc.portrait ? sc.Ww / 2 : sc.Ww * 0.24;
      var a = sc.character("maya", { x: x, facing: sc.portrait ? "front" : "right", expression: "happy" });
      narrate(a);
      a.pose("wave", 0.1, 0.3).pose("idle", 1.1, 0.5);
      var bar = sc.captions({ text: narration, top: sc.portrait });
      if (bar) bar.classList.add(sc.portrait ? "cz-caps-portrait" : "cz-caps-side");
      sc.cam.set({ zoom: 1.04 });
      sc.cam.to({ zoom: 1.1 }, 0, D(), "inOutSine");
      return root;
    } catch (e) {
      V.error("cartoon fallback: " + (e && e.message));
      try {
        V.reset();
        root.innerHTML = "";
        var t = el("div", { parent: root, style: { position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center", padding: "8%", fontSize: u(64) + "px", fontWeight: "800", textAlign: "center", color: INK, background: "#FFE3C2", fontFamily: "system-ui, sans-serif" } });
        t.textContent = str(narration || V.narration).split(/\s+/).slice(0, 12).join(" ");
      } catch (e2) {}
    }
  };
})();
