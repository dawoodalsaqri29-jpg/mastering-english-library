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
/* City Timelapse engine for Scene — a procedural 3D city that grows over centuries.
 * One <canvas> per world, redrawn from scratch on every seek (pure function of t) with a real
 * perspective camera (oblique bird's-eye), depth-sorted terrain + extruded buildings, sun shadows,
 * depth fog, shimmering water, era-driven sky/light, and DOM overlays (year counter, lower-third,
 * population). Exposes S.city (see docs.md) and replaces S.render / S.fallback.
 */
(function () {
  "use strict";
  var V = window.V;
  var S = window.SceneStyle;
  if (!V || !S) return;
  var el = V.el;

  S.init({ id: "city-timelapse", kind: "documentary", enter: "fade", titleReveal: "fade", drift: 0, series: ["#F2A33A", "#4FA3E0", "#E85D4A", "#5BC79A", "#B48CF2", "#F5D56A"] });

  var CT = (S.city = {});
  var FONT = '"Inter","Segoe UI","Helvetica Neue",Arial,"Noto Sans",system-ui,sans-serif';
  CT.font = FONT;

  // ───────────────────────── small utils ─────────────────────────
  function u(n) { return n * V.unit; }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function lerp(a, b, p) { return a + (b - a) * p; }
  function str(v) { return v == null ? "" : String(v); }
  function arr(v) { return Array.isArray(v) ? v : v == null ? [] : [v]; }
  function num(v, d) { var n = typeof v === "number" ? v : parseFloat(v); return isFinite(n) ? n : d; }
  function h01(n) { var x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); }
  function h2(x, y, s) { return h01(x * 157.31 + y * 13.7 + (s || 0) * 0.731); }
  function sm(p) { return p * p * (3 - 2 * p); }
  function ez(e) { return typeof e === "function" ? e : (V.ease[e] || V.ease.outCubic); }
  function prog(t, a, dur, e) {
    if (!(dur > 0)) return t >= a ? 1 : 0;
    var p = clamp((t - a) / dur, 0, 1);
    return e ? ez(e)(p) : p;
  }
  function clampT(t) { return clamp(num(t, 0), 0, Math.max(0.05, V.duration - 0.4)); }
  function plain(s) { return str(s).replace(/\*([^*]+)\*/g, "$1"); }
  function seedOf(v) { var n = num(v, NaN); if (isFinite(n)) return Math.round(n); var s = str(v); if (!s) return (V.seed | 0) || 7; var h = 2166136261; for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return (h >>> 0) % 100000; }
  CT.prog = prog;
  CT.hash = h01;
  CT.clampT = clampT;
  CT.seedOf = seedOf;

  // value noise (deterministic, seeded by number)
  function noise2(x, y, s) {
    var xi = Math.floor(x), yi = Math.floor(y), fx = sm(x - xi), fy = sm(y - yi);
    var a = h2(xi, yi, s), b = h2(xi + 1, yi, s), c = h2(xi, yi + 1, s), d = h2(xi + 1, yi + 1, s);
    return lerp(lerp(a, b, fx), lerp(c, d, fx), fy);
  }
  function fbm(x, y, s, oct) {
    var v = 0, amp = 0.5, f = 1, tot = 0;
    for (var i = 0; i < (oct || 3); i++) { v += noise2(x * f, y * f, s + i * 17) * amp; tot += amp; amp *= 0.5; f *= 2.1; }
    return v / tot;
  }
  CT.noise = noise2;
  CT.fbm = fbm;

  // ───────────────────────── colour ─────────────────────────
  var RGBC = {};
  function rgb(c) {
    var r = RGBC[c];
    if (r) return r;
    var h = str(c).trim(), m;
    if (h[0] === "#") {
      h = h.slice(1);
      if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
      var n = parseInt(h.slice(0, 6), 16);
      r = isNaN(n) ? [140, 140, 150] : [(n >> 16) & 255, (n >> 8) & 255, n & 255];
    } else if ((m = /rgba?\(([^)]+)\)/.exec(h))) {
      var p = m[1].split(",").map(parseFloat);
      r = [p[0] | 0, p[1] | 0, p[2] | 0];
    } else r = [140, 140, 150];
    RGBC[c] = r;
    return r;
  }
  function hex(r) {
    return "#" + ((1 << 24) | (clamp(Math.round(r[0]), 0, 255) << 16) | (clamp(Math.round(r[1]), 0, 255) << 8) | clamp(Math.round(r[2]), 0, 255)).toString(16).slice(1);
  }
  var MIXC = {};
  function mix(a, b, p) {
    var k = a + b + p;
    var s = MIXC[k];
    if (s) return s;
    var A = rgb(a), B = rgb(b);
    s = hex([A[0] + (B[0] - A[0]) * p, A[1] + (B[1] - A[1]) * p, A[2] + (B[2] - A[2]) * p]);
    MIXC[k] = s;
    return s;
  }
  function mixA(A, B, p) { return [A[0] + (B[0] - A[0]) * p, A[1] + (B[1] - A[1]) * p, A[2] + (B[2] - A[2]) * p]; }
  function rgba(c, a) { var r = rgb(c); return "rgba(" + r[0] + "," + r[1] + "," + r[2] + "," + a + ")"; }
  function css(A) { return "rgb(" + (A[0] | 0) + "," + (A[1] | 0) + "," + (A[2] | 0) + ")"; }
  CT.mix = mix;
  CT.rgba = rgba;
  CT.rgb = rgb;

  // ───────────────────────── eras ─────────────────────────
  // p ∈ [0,1] is the normalised growth clock of a city; eras start at these p values.
  var ERAS = [
    { id: "wild", p: 0, name: "Wilderness", sub: "Before the first settlers" },
    { id: "settlement", p: 0.05, name: "First settlement", sub: "A fort and a handful of huts" },
    { id: "village", p: 0.17, name: "Village", sub: "Timber houses along a dirt track" },
    { id: "town", p: 0.3, name: "Market town", sub: "Stone walls, a church spire, a harbour" },
    { id: "grid", p: 0.45, name: "The grid", sub: "Streets laid out, rows of houses" },
    { id: "industry", p: 0.6, name: "Industrial age", sub: "Factories, rail and the first bridges" },
    { id: "skyscraper", p: 0.75, name: "Rise of the skyline", sub: "Steel frames reach for the sky" },
    { id: "modern", p: 0.9, name: "Modern metropolis", sub: "Glass towers at golden hour" },
  ];
  CT.eras = ERAS;
  function eraIndex(p) { var i = 0; for (var k = 1; k < ERAS.length; k++) if (p >= ERAS[k].p) i = k; return i; }
  function eraLen(i) { return (i + 1 < ERAS.length ? ERAS[i + 1].p : 1.001) - ERAS[i].p; }
  CT.eraIndex = eraIndex;
  var ERA_KEYS = { settlement: 1, village: 2, town: 3, grid: 4, industry: 5, skyscraper: 6, modern: 7 };

  /** Build year ↔ p mapping. keyDates: {settlement, village, town, grid, industry, skyscraper, modern} (years). */
  function makeClock(yearFrom, yearTo, keyDates) {
    yearFrom = num(yearFrom, 1600); yearTo = num(yearTo, 2024);
    if (yearTo <= yearFrom) yearTo = yearFrom + 100;
    var span = yearTo - yearFrom;
    var defs = [0, 0.04, 0.12, 0.26, 0.42, 0.58, 0.74, 0.9]; // default era years as fraction of span
    var yrs = [yearFrom];
    for (var i = 1; i < ERAS.length; i++) {
      var k = ERAS[i].id, y = keyDates && isFinite(num(keyDates[k], NaN)) ? num(keyDates[k], 0) : yearFrom + span * defs[i];
      yrs.push(clamp(y, yrs[i - 1] + 1, yearTo));
    }
    yrs.push(yearTo + Math.max(1, span * 0.1));
    var ps = ERAS.map(function (e) { return e.p; }).concat([1]);
    // when yearTo is far beyond the modern key date, p saturates to 1 at yearTo
    var clock = {
      yearFrom: yearFrom, yearTo: yearTo, years: yrs,
      p: function (year) {
        year = num(year, yearFrom);
        if (year <= yrs[0]) return 0;
        for (var i = 0; i + 1 < yrs.length; i++) if (year < yrs[i + 1]) return lerp(ps[i], ps[i + 1], (year - yrs[i]) / Math.max(1, yrs[i + 1] - yrs[i]));
        return 1;
      },
      year: function (p) {
        p = clamp(num(p, 0), 0, 1);
        for (var i = 0; i + 1 < ps.length; i++) if (p < ps[i + 1]) return lerp(yrs[i], yrs[i + 1], (p - ps[i]) / (ps[i + 1] - ps[i]));
        return yrs[yrs.length - 1];
      },
      eraYear: function (i) { return yrs[clamp(i, 0, yrs.length - 1)]; },
    };
    // the final target year should reach at least p=0.97 so the modern skyline is complete
    var pEnd = clock.p(yearTo);
    if (pEnd < 0.97) { var k2 = 0.97 / pEnd; var base = clock.p; clock.p = function (y) { return Math.min(1, base(y) * k2); }; }
    return clock;
  }
  CT.makeClock = makeClock;

  // ───────────────────────── light / sky ─────────────────────────
  // stops: p → look. Each entry: skyTop, skyHor, sun [x,y,z], sunCol, amb, dif, fog, fogK, water, lit, stars, haze
  var LIGHT_AUTO = [
    { p: 0.0, top: "#5E8FC4", hor: "#E9DCCB", sun: [0.5, -0.4, 0.45], sunCol: "#FFE6C4", amb: 0.6, dif: 0.5, fog: "#D6DEE6", fogK: 0.5, water: "#5F9FC8", lit: 0, stars: 0, haze: 0.1 },
    { p: 0.2, top: "#2F7FD8", hor: "#CFE8F8", sun: [0.45, -0.5, 0.7], sunCol: "#FFF8E8", amb: 0.54, dif: 0.6, fog: "#D2E6F4", fogK: 0.3, water: "#3A8ED0", lit: 0, stars: 0, haze: 0.02 },
    { p: 0.45, top: "#2E84E0", hor: "#D6ECF8", sun: [0.4, -0.55, 0.75], sunCol: "#FFFAEE", amb: 0.54, dif: 0.62, fog: "#D4E8F4", fogK: 0.28, water: "#3A8CD0", lit: 0, stars: 0, haze: 0.02 },
    { p: 0.62, top: "#6F9CC2", hor: "#DCDCD0", sun: [0.45, -0.45, 0.6], sunCol: "#FFF0D6", amb: 0.56, dif: 0.52, fog: "#CFD4D4", fogK: 0.42, water: "#4F86B0", lit: 0.08, stars: 0, haze: 0.32 },
    { p: 0.8, top: "#2F82DC", hor: "#D2E8F6", sun: [0.4, -0.5, 0.72], sunCol: "#FFF6E4", amb: 0.54, dif: 0.62, fog: "#D0E4F2", fogK: 0.3, water: "#3A8CCE", lit: 0.05, stars: 0, haze: 0.06 },
    { p: 1.0, top: "#1E3F7A", hor: "#FFB45A", sun: [0.75, -0.3, 0.2], sunCol: "#FFB85E", amb: 0.44, dif: 0.66, fog: "#E0AE86", fogK: 0.34, water: "#3F6AA6", lit: 0.75, stars: 0.08, haze: 0.12 },
  ];
  var LIGHT_FIXED = {
    dawn: LIGHT_AUTO[0],
    day: LIGHT_AUTO[2],
    haze: LIGHT_AUTO[3],
    golden: LIGHT_AUTO[5],
    night: { p: 0, top: "#060B22", hor: "#1F2E5C", sun: [0.3, -0.3, 0.3], sunCol: "#A8BCFF", amb: 0.32, dif: 0.22, fog: "#182444", fogK: 0.45, water: "#1A2C5A", lit: 1, stars: 1, haze: 0 },
  };
  function lightMix(A, B, q) {
    if (q <= 0) return A;
    if (q >= 1) return B;
    return {
      p: lerp(A.p, B.p, q), top: mix(A.top, B.top, q), hor: mix(A.hor, B.hor, q),
      sun: [lerp(A.sun[0], B.sun[0], q), lerp(A.sun[1], B.sun[1], q), lerp(A.sun[2], B.sun[2], q)],
      sunCol: mix(A.sunCol, B.sunCol, q), amb: lerp(A.amb, B.amb, q), dif: lerp(A.dif, B.dif, q), fog: mix(A.fog, B.fog, q),
      fogK: lerp(A.fogK, B.fogK, q), water: mix(A.water, B.water, q), lit: lerp(A.lit, B.lit, q), stars: lerp(A.stars, B.stars, q), haze: lerp(A.haze, B.haze, q),
    };
  }
  var LCACHE = {};
  /** Light state for progress p (quantised) and mode auto|dawn|day|haze|golden|night. */
  function lightAt(p, mode) {
    if (mode && LIGHT_FIXED[mode]) return LIGHT_FIXED[mode];
    var q = Math.round(clamp(p, 0, 1) * 400);
    var k = "a" + q;
    if (LCACHE[k]) return LCACHE[k];
    var pp = q / 400, L = LIGHT_AUTO[LIGHT_AUTO.length - 1];
    for (var i = 0; i + 1 < LIGHT_AUTO.length; i++) {
      if (pp <= LIGHT_AUTO[i + 1].p) { L = lightMix(LIGHT_AUTO[i], LIGHT_AUTO[i + 1], sm((pp - LIGHT_AUTO[i].p) / (LIGHT_AUTO[i + 1].p - LIGHT_AUTO[i].p))); break; }
    }
    LCACHE[k] = L;
    return L;
  }
  CT.lightAt = lightAt;
  CT.lightModes = ["auto", "dawn", "day", "haze", "golden", "night"];

  // ───────────────────────── styles (what buildings look like) ─────────────────────────
  var STYLES = {
    european: {
      name: "European old town",
      districts: ["Old Town", "Harbour", "Cathedral Quarter", "New Town", "Mill District", "Station Quarter", "Westend", "Riverside"],
      core: "Old Town", water: "Harbour", industry: "Mill District",
      hut: { wall: "#B59A72", roof: "#7A5A3C" }, timber: { wall: "#C8AE86", roof: "#8A4E36", roof2: "#A1573D" },
      stone: { wall: ["#E6D8BF", "#D9C7A4", "#E9DCC6", "#CFBFA0", "#E2CFAE"], roof: ["#B5432F", "#C4593B", "#A94A3A", "#8F3F32"] },
      rowhouse: { wall: ["#E7DCC8", "#DCCBAE", "#F0E6D2", "#D4C3A6"], roof: ["#8E4B3A", "#5F6B78", "#7A5A4A"], pitched: true },
      tenement: { wall: ["#C9B392", "#B9A281", "#D1BC9B"], roof: ["#6B5A4D", "#5C6670"], pitched: true },
      factory: { wall: "#9C6B52", roof: "#6B5247", chimney: "#6E4F43" },
      midrise: { wall: ["#D9D4CC", "#C9CBCF", "#E1DACE"], roof: "#8C8B88" },
      early: { wall: ["#D8CFC1", "#CFC4B3"], roof: "#A99F92" },
      glass: { wall: ["#8FC2E6", "#7DB2DB", "#A6CCE8", "#6FA5CE"], roof: "#C9DDE9" },
      tower: { wall: "#9BC7E8" }, oldCoreJitter: 0.22, blockCore: 3, block: 4,
      landmarks: ["fort", "cathedral", "townhall", "station", "earlytower", "tvtower", "supertall"],
    },
    american: {
      name: "American grid",
      districts: ["Downtown", "Harbor", "Lower East", "Midtown", "Factory Row", "Uptown", "West Side", "The Heights"],
      core: "Downtown", water: "Harbor", industry: "Factory Row",
      hut: { wall: "#B59A72", roof: "#7A5A3C" }, timber: { wall: "#D8C7A4", roof: "#6B4A36", roof2: "#7E5A42" },
      stone: { wall: ["#D6C2A2", "#C9B290", "#E1D1B4", "#B99F7E"], roof: ["#6E5A4C", "#5B5751", "#7B4C3E"] },
      rowhouse: { wall: ["#8E5B45", "#9C6650", "#7E5240", "#A8735A", "#B07A60"], roof: ["#4D3C33", "#5B4A40"], pitched: false },
      tenement: { wall: ["#9A6A52", "#A67459", "#8C5F4A"], roof: ["#4E4038", "#5C4D44"], pitched: false },
      factory: { wall: "#8E5A47", roof: "#5B4A41", chimney: "#5A4740" },
      midrise: { wall: ["#C8C2B8", "#B9B3AA", "#D4CEC3"], roof: "#8A857F" },
      early: { wall: ["#D5CBBB", "#C7BDAD", "#E0D6C6"], roof: "#A69C8C" },
      glass: { wall: ["#86B9E0", "#74A9D6", "#9CC6E6", "#5F97C5"], roof: "#C3D8E8" },
      tower: { wall: "#92C1E4" }, oldCoreJitter: 0, blockCore: 3, block: 4,
      landmarks: ["fort", "church", "cityhall", "station", "earlytower", "supertall", "spire"],
    },
    desert: {
      name: "Desert boomtown",
      districts: ["Old Pueblo", "Railtown", "Mission Hill", "The Strip", "Canal Side", "North Mesa", "Sunset Park", "Palm Grove"],
      core: "Old Pueblo", water: "Canal Side", industry: "Railtown",
      hut: { wall: "#C8A478", roof: "#B08A5C" }, timber: { wall: "#D9B88C", roof: "#B8905F", roof2: "#C49A6A" },
      stone: { wall: ["#DDB98C", "#D3AC7E", "#E6C69A", "#CFA978"], roof: ["#C99A6A", "#BE8E5E", "#D3A676"], flat: true },
      rowhouse: { wall: ["#E2C39A", "#D9B98E", "#EBCDA6", "#D0B088"], roof: ["#C9A77C", "#B8966C"], pitched: false },
      tenement: { wall: ["#D7B38A", "#CFAB82"], roof: ["#B89770"], pitched: false },
      factory: { wall: "#A98468", roof: "#7F6552", chimney: "#6E584A" },
      midrise: { wall: ["#E3D4C0", "#D8C8B2", "#ECE0CC"], roof: "#B9AB98" },
      early: { wall: ["#E6D6BE", "#DCCCB4"], roof: "#B8A88E" },
      glass: { wall: ["#9CC9E8", "#86B8DE", "#B0D3EC", "#F2C98A"], roof: "#D4E3EC" },
      tower: { wall: "#A4CBE8" }, oldCoreJitter: 0.1, blockCore: 4, block: 4,
      landmarks: ["mission", "church", "depot", "watertower", "earlytower", "supertall", "spire"],
    },
    asian: {
      name: "Asian mega-city",
      districts: ["Old Harbour", "Temple Ward", "Market Quarter", "Shipyards", "New Centre", "North Gate", "East River", "Bay Towers"],
      core: "Old Harbour", water: "Shipyards", industry: "Shipyards",
      hut: { wall: "#A88B66", roof: "#6E5A48" }, timber: { wall: "#B59C78", roof: "#4F5A66", roof2: "#5B6773" },
      stone: { wall: ["#D9CDB4", "#CFC0A3", "#E2D7C0", "#C4B596"], roof: ["#4E5B6B", "#5A6878", "#44515F", "#6B7A8A"] },
      rowhouse: { wall: ["#D8D0C0", "#CBC3B2", "#E0D8C8", "#C3BAA6"], roof: ["#546171", "#4A5563"], pitched: true },
      tenement: { wall: ["#C7C0B2", "#BDB5A6", "#D1CABB"], roof: ["#5A6470"], pitched: false },
      factory: { wall: "#8E7A6C", roof: "#5E5450", chimney: "#5A4E48" },
      midrise: { wall: ["#D3D3D0", "#C6C8C8", "#DEDCD6", "#B9BEC2"], roof: "#8E9398" },
      early: { wall: ["#D2CFC6", "#C4C1B8"], roof: "#9A978F" },
      glass: { wall: ["#7FB8E2", "#6CA8D8", "#98C8E8", "#5A95C7", "#A9D3EA"], roof: "#C6DAE8" },
      tower: { wall: "#8DC2E6" }, oldCoreJitter: 0.16, blockCore: 3, block: 4,
      landmarks: ["citadel", "pagoda", "temple", "station", "cranes", "tvtower", "supertall"],
    },
  };
  CT.styles = STYLES;
  CT.styleIds = Object.keys(STYLES);
  function styleOf(id) { return STYLES[id] || STYLES.american; }

  // ───────────────────────── terrain presets ─────────────────────────
  // h(u, v, n) → height in world units (negative = water). u → east, v → south, both 0..1.
  function g1(x, w) { var q = x / w; return Math.exp(-q * q); }
  var PRESETS = {
    island: {
      name: "Island between two rivers",
      h: function (u, v, n) {
        var r1 = g1(v - 0.16 - 0.04 * Math.sin(u * 4.2 + 1.3) + 0.02 * n(u * 3, 1), 0.062);
        var r2 = g1(v - 0.84 + 0.05 * Math.sin(u * 3.1) + 0.02 * n(u * 3, 2), 0.075);
        var hills = 1.3 * sm(clamp((0.28 - u) / 0.2, 0, 1)) * (0.6 + 0.6 * n(u * 5, v * 5)) * (1 - r1) * (1 - r2);
        var far = 0.12 * sm(clamp((v - 0.9) / 0.1, 0, 1)) + 0.9 * sm(clamp((0.06 - v) / 0.06, 0, 1)) * n(u * 6, 7);
        var sea = -1.4 * sm(clamp((u - 0.9) / 0.1, 0, 1)) * sm(clamp((v - 0.3) / 0.4, 0, 1));
        return 0.16 + hills + far + sea - 1.3 * r1 - 1.4 * r2 + 0.06 * n(u * 8, v * 8);
      },
      origin: [0.56, 0.68], camYaw: 14, waterPath: [[0.02, 0.86], [0.3, 0.85], [0.6, 0.8], [0.98, 0.84]],
      waterPath2: [[0.02, 0.16], [0.5, 0.18], [0.98, 0.15]],
      bridges: [{ from: [0.42, 0.75], dir: [0, 1], era: 5 }, { from: [0.7, 0.75], dir: [0, 1], era: 6 }, { from: [0.5, 0.25], dir: [0, -1], era: 6 }],
      rail: { from: [0.1, 0.5], to: [0.95, 0.5] },
    },
    bay: {
      name: "Bay with hills",
      h: function (u, v, n) {
        var du = u - 0.12, dv = v - 0.95, d = Math.sqrt(du * du * 1.1 + dv * dv) - (0.5 + 0.05 * n(u * 4, v * 4));
        var bay = clamp(d / 0.07, -1.5, 1);
        var hills = 1.9 * sm(clamp((u + (1 - v) - 1.25) / 0.45, 0, 1)) * (0.6 + 0.6 * n(u * 5, v * 5));
        var ridge = 0.8 * sm(clamp((0.1 - v) / 0.1, 0, 1)) * n(u * 7, 3);
        var inlet = -1.0 * g1(u - 0.55 - 0.1 * (1 - v), 0.03) * sm(clamp((v - 0.72) / 0.12, 0, 1));
        return 0.14 + bay * 0.6 + hills + ridge + inlet + 0.05 * n(u * 9, v * 9);
      },
      origin: [0.42, 0.62], camYaw: 322, waterPath: [[0.04, 0.6], [0.2, 0.75], [0.35, 0.92], [0.6, 0.98]],
      bridges: [{ from: [0.3, 0.52], dir: [-1, 0], era: 6 }, { from: [0.5, 0.8], dir: [1, 0], era: 5 }],
      rail: { from: [0.45, 0.05], to: [0.45, 0.6] },
    },
    desert: {
      name: "Desert grid",
      h: function (u, v, n) {
        var river = g1(v - 0.78 + 0.03 * Math.sin(u * 6) + 0.02 * n(u * 4, 2), 0.045);
        var mesa = 2.1 * sm(clamp((0.16 - v) / 0.14, 0, 1)) * (0.5 + 0.8 * n(u * 6, 11)) + 1.4 * sm(clamp((u - 0.9) / 0.1, 0, 1)) * n(v * 5, 12);
        return 0.12 + mesa - 1.0 * river + 0.04 * n(u * 10, v * 10);
      },
      origin: [0.5, 0.64], camYaw: 8, waterPath: [[0.02, 0.78], [0.5, 0.77], [0.98, 0.79]], sand: true,
      bridges: [{ from: [0.5, 0.7], dir: [0, 1], era: 5 }, { from: [0.3, 0.7], dir: [0, 1], era: 7 }],
      rail: { from: [0.02, 0.4], to: [0.98, 0.4] },
    },
    delta: {
      name: "River delta",
      h: function (u, v, n) {
        var c1 = g1(u - 0.5 - 0.22 * v * v - 0.03 * n(v * 5, 3), 0.035 + 0.05 * v);
        var c2 = g1(u - 0.5 + 0.28 * v * v + 0.02 * n(v * 5, 4), 0.03 + 0.05 * v);
        var c3 = g1(u - 0.5 + 0.03 * Math.sin(v * 9), 0.025) * sm(clamp((v - 0.45) / 0.2, 0, 1));
        var sea = -1.2 * sm(clamp((v - 0.9) / 0.08, 0, 1));
        var far = 0.9 * sm(clamp((0.1 - v) / 0.1, 0, 1)) * n(u * 6, 8);
        return 0.13 + far + sea - 1.1 * Math.max(c1, c2, c3) + 0.04 * n(u * 9, v * 9);
      },
      origin: [0.52, 0.5], camYaw: 12, waterPath: [[0.5, 0.02], [0.56, 0.3], [0.68, 0.6], [0.78, 0.96]],
      bridges: [{ from: [0.6, 0.5], dir: [1, 0], era: 5 }, { from: [0.4, 0.5], dir: [-1, 0], era: 6 }],
      rail: { from: [0.02, 0.35], to: [0.98, 0.35] },
    },
    lake: {
      name: "Lake shore",
      h: function (u, v, n) {
        var shore = 0.36 + 0.08 * n(v * 3, 5) + 0.04 * Math.sin(v * 7);
        var lake = clamp((u - shore) / 0.06, -1.6, 1);
        var hills = 1.5 * sm(clamp((u - 0.82) / 0.18, 0, 1)) * (0.5 + 0.7 * n(u * 5, v * 5));
        var river = g1(v - 0.3 - 0.04 * Math.sin(u * 5), 0.03) * sm(clamp((u - shore) / 0.05, 0, 1));
        return 0.13 + lake * 0.5 + hills - 0.8 * river + 0.04 * n(u * 9, v * 9);
      },
      origin: [0.5, 0.55], camYaw: 326, waterPath: [[0.05, 0.15], [0.12, 0.5], [0.08, 0.9]],
      bridges: [{ from: [0.5, 0.36], dir: [0, -1], era: 5 }, { from: [0.7, 0.36], dir: [0, -1], era: 6 }],
      rail: { from: [0.4, 0.02], to: [0.4, 0.98] },
    },
    peninsula: {
      name: "Hilly peninsula",
      h: function (u, v, n) {
        var w = 0.3 - 0.16 * v + 0.05 * n(v * 4, 6);
        var land = clamp((w - Math.abs(u - 0.5 - 0.06 * Math.sin(v * 3))) / 0.06, -1.6, 1) * sm(clamp((0.88 - v) / 0.06, 0, 1)) * 2 - 1;
        var spine = 1.4 * g1(u - 0.5, 0.1) * (0.4 + 0.8 * n(v * 6, 9)) * sm(clamp((0.55 - v) / 0.3, 0, 1));
        var far = 0.8 * sm(clamp((0.07 - v) / 0.07, 0, 1));
        return 0.12 + land * 0.55 + spine + far + 0.04 * n(u * 9, v * 9);
      },
      origin: [0.5, 0.62], camYaw: 4, waterPath: [[0.1, 0.3], [0.15, 0.7], [0.5, 0.96], [0.85, 0.7], [0.9, 0.3]],
      bridges: [{ from: [0.28, 0.4], dir: [-1, 0], era: 6 }, { from: [0.72, 0.4], dir: [1, 0], era: 6 }],
      rail: { from: [0.5, 0.02], to: [0.5, 0.6] },
    },
    river: {
      name: "Winding river plain",
      h: function (u, v, n) {
        var river = g1(v - 0.56 - 0.1 * Math.sin(u * 5.5 + 0.8) - 0.03 * n(u * 4, 2), 0.05);
        var far = 0.7 * sm(clamp((0.1 - v) / 0.1, 0, 1)) * (0.5 + 0.8 * n(u * 6, 8)) + 0.9 * sm(clamp((u - 0.93) / 0.07, 0, 1)) * n(v * 5, 9);
        return 0.14 + far - 1.1 * river + 0.05 * n(u * 9, v * 9);
      },
      origin: [0.5, 0.68], camYaw: 10, waterPath: [[0.02, 0.5], [0.3, 0.62], [0.55, 0.5], [0.8, 0.6], [0.98, 0.54]],
      bridges: [{ from: [0.5, 0.66], dir: [0, -1], era: 3 }, { from: [0.36, 0.66], dir: [0, -1], era: 5 }, { from: [0.66, 0.66], dir: [0, -1], era: 6 }],
      rail: { from: [0.02, 0.8], to: [0.98, 0.8] },
    },
  };
  CT.presets = PRESETS;
  CT.presetIds = Object.keys(PRESETS);
  function presetOf(id) { return PRESETS[id] || PRESETS.island; }

  /** Map a free-text city/preset/style name to a {preset, style} guess (never claims to be the real map). */
  CT.guess = function (name) {
    var s = str(name).toLowerCase();
    var out = { preset: "island", style: "american" };
    if (PRESETS[s]) { out.preset = s; return out; }
    var table = [
      [/new york|manhattan|nyc/, "island", "american"], [/san francisco|seattle|sydney|rio|hong kong|naples|vancouver/, "bay", /hong kong/.test(s) ? "asian" : "american"],
      [/las vegas|phoenix|dubai|riyadh|cairo|tucson|el paso/, "desert", "desert"], [/new orleans|shanghai|dhaka|cairo delta|rotterdam|amsterdam|venice/, "delta", /shanghai|dhaka/.test(s) ? "asian" : "european"],
      [/chicago|toronto|geneva|zurich|cleveland|milwaukee/, "lake", /chicago|toronto|cleveland|milwaukee/.test(s) ? "american" : "european"],
      [/istanbul|lisbon|boston|mumbai|singapore|cape town|san diego/, "peninsula", /mumbai|singapore/.test(s) ? "asian" : /boston|san diego/.test(s) ? "american" : "european"],
      [/london|paris|berlin|rome|vienna|prague|budapest|dublin|moscow|warsaw|seville|florence|cologne/, "river", "european"],
      [/madrid|barcelona|stockholm|copenhagen|edinburgh|oslo|helsinki|athens/, "peninsula", "european"],
      [/st\.? ?louis|pittsburgh|cincinnati|nashville|kansas city|portland|sacramento|calgary|montreal|minneapolis/, "river", "american"],
      [/tokyo|seoul|beijing|bangkok|jakarta|manila|taipei|osaka|kuala/, "bay", "asian"],
      [/mexico city|denver|atlanta|dallas|houston|austin/, "desert", "american"],
    ];
    for (var i = 0; i < table.length; i++) if (table[i][0].test(s)) { out.preset = table[i][1]; out.style = table[i][2]; return out; }
    if (/^(european|american|desert|asian)$/.test(s)) { out.style = s; if (s === "desert") out.preset = "desert"; }
    return out;
  };

  // ───────────────────────── generator ─────────────────────────
  var KIND_H = {
    hut: [0.09, 0.05], timber: [0.17, 0.07], stone: [0.27, 0.1], rowhouse: [0.36, 0.1], tenement: [0.5, 0.16], factory: [0.34, 0.1],
    warehouse: [0.28, 0.08], midrise: [0.8, 0.7], early: [1.3, 1.2], glass: [1.7, 1.6], fort: [0.2, 0], cathedral: [0.6, 0], church: [0.42, 0],
    townhall: [0.6, 0], cityhall: [0.62, 0], station: [0.42, 0], earlytower: [3.2, 0], tvtower: [4.6, 0], supertall: [6.4, 0], mission: [0.3, 0],
    depot: [0.36, 0], watertower: [0.9, 0], citadel: [0.34, 0], pagoda: [0.9, 0], temple: [0.42, 0], cranes: [0.9, 0], spire: [3.8, 0],
    tower: [4.2, 0], bridge: [0, 0], dome: [1.1, 0], arch: [1.4, 0], obelisk: [2.2, 0], stadium: [0.5, 0], ferris: [1.4, 0],
  };
  CT.kindHeights = KIND_H;
  function pick(rnd, list) { return Array.isArray(list) ? list[Math.floor(rnd() * list.length) % list.length] : list; }

  function eraKind(e, lot, rnd) {
    var core = lot.core, ind = lot.industry;
    switch (e) {
      case 1: return "hut";
      case 2: return "timber";
      case 3: return rnd() < 0.78 ? "stone" : "timber";
      case 4: return rnd() < 0.9 ? "rowhouse" : "stone";
      case 5: return ind ? (rnd() < 0.62 ? "factory" : "warehouse") : rnd() < 0.5 + core * 0.3 ? "tenement" : "rowhouse";
      case 6: return core > 0.4 && rnd() < 0.78 ? "early" : core > 0.1 && rnd() < 0.6 ? "midrise" : ind ? (rnd() < 0.5 ? "factory" : "warehouse") : "tenement";
      case 7: return core > 0.3 && rnd() < 0.92 ? "glass" : core > 0.08 && rnd() < 0.66 ? "glass" : rnd() < 0.6 ? "midrise" : null;
    }
    return null;
  }
  function upgradeChance(e, lot) {
    var core = lot.core;
    if (e <= 3) return 0.72;
    if (e === 4) return 0.55 + 0.4 * core;
    if (e === 5) return lot.industry ? 0.92 : 0.35 + 0.45 * core;
    if (e === 6) return 0.25 + 0.75 * core;
    return 0.25 + 0.75 * core;
  }
  function kindHeight(kind, lot, rnd) {
    var kh = KIND_H[kind] || [0.3, 0.1];
    var core = lot ? lot.core : 0.5;
    var h = kh[0] + rnd() * kh[1];
    if (kind === "midrise") h += core * 0.5;
    if (kind === "early") h += core * 2.6;
    if (kind === "glass") h += core * 4.2 + (rnd() < 0.1 ? 2 : 0);
    return h;
  }
  function stageLook(kind, style, rnd) {
    var st = style[kind] || style.stone || {};
    var wall = pick(rnd, st.wall || "#D0C4B0"), roof = pick(rnd, st.roof || wall);
    var pitched = kind === "hut" || kind === "timber" || (kind === "stone" && !st.flat) || ((kind === "rowhouse" || kind === "tenement") && !!st.pitched);
    var tower = kind === "glass" || kind === "early", pr = rnd();
    var profile = !tower ? 0 : pr < 0.4 ? 0 : pr < 0.65 ? 1 : pr < 0.85 ? 2 : 3; // plain | setback | spire | tapered
    var split = !tower && kind !== "factory" ? (rnd() < 0.85 ? 1 : 0) : 0;
    return { wall: rgb(wall), roof: rgb(roof), pitched: pitched, profile: profile, split: split, h2: 0.78 + rnd() * 0.44 };
  }

  /**
   * Generate a city model. o: {preset, style, seed, cols, rows, districts:[names], popNow}
   * Everything is derived from the seed — same opts → same city in every scene.
   */
  function generate(o) {
    o = o || {};
    var preset = presetOf(o.preset), style = styleOf(o.style);
    var seed = seedOf(o.seed != null ? o.seed : o.cityName || 7);
    var rnd = V.makeRand(seed * 7919 + 13);
    var cols = clamp(Math.round(num(o.cols, 42)), 12, 80), rows = clamp(Math.round(num(o.rows, 30)), 10, 64);
    var N = function (a, b) { return fbm(a + seed * 0.37, b + seed * 0.11, seed, 3); };
    var M = { cols: cols, rows: rows, seed: seed, preset: preset, presetId: PRESETS[o.preset] ? o.preset : "island", style: style, styleId: STYLES[o.style] ? o.style : "american", sand: !!preset.sand };
    // corner heights
    var CW = cols + 1, H = new Float32Array(CW * (rows + 1));
    for (var y = 0; y <= rows; y++) for (var x = 0; x <= cols; x++) H[y * CW + x] = preset.h(x / cols, y / rows, N);
    M.H = H;
    function hAt(x, y) { return H[clamp(y, 0, rows) * CW + clamp(x, 0, cols)]; }
    var cellH = new Float32Array(cols * rows), type = new Uint8Array(cols * rows), slope = new Float32Array(cols * rows);
    for (y = 0; y < rows; y++) for (x = 0; x < cols; x++) {
      var i = y * cols + x, a = hAt(x, y), b = hAt(x + 1, y), c = hAt(x, y + 1), d = hAt(x + 1, y + 1);
      cellH[i] = (a + b + c + d) / 4;
      slope[i] = Math.max(a, b, c, d) - Math.min(a, b, c, d);
      type[i] = cellH[i] < 0 ? 1 : 0;
    }
    M.cellH = cellH; M.type = type; M.slope = slope;
    function isWater(x, y) { return x < 0 || y < 0 || x >= cols || y >= rows ? true : type[y * cols + x] === 1; }
    // distance-to-water (cells) up to 3
    var wd = new Uint8Array(cols * rows);
    for (y = 0; y < rows; y++) for (x = 0; x < cols; x++) {
      var best = 4;
      for (var dy = -3; dy <= 3 && best > 0; dy++) for (var dx = -3; dx <= 3; dx++) {
        var dd = Math.max(Math.abs(dx), Math.abs(dy));
        if (dd < best && isWater(x + dx, y + dy)) best = dd;
      }
      wd[y * cols + x] = best;
    }
    M.waterDist = wd;
    // origin: nearest developable land cell to the preset origin
    var ox = preset.origin[0] * cols, oy = preset.origin[1] * rows, bo = null, bd = 1e9;
    for (y = 1; y < rows - 1; y++) for (x = 1; x < cols - 1; x++) {
      i = y * cols + x;
      if (type[i] !== 0 || cellH[i] > 0.9 || slope[i] > 0.3) continue;
      var ddx = x + 0.5 - ox, ddy = y + 0.5 - oy, dq = ddx * ddx + ddy * ddy + (wd[i] > 2 ? 6 : 0);
      if (dq < bd) { bd = dq; bo = [x + 0.5, y + 0.5]; }
    }
    M.origin = bo || [cols / 2, rows / 2];
    ox = M.origin[0]; oy = M.origin[1];
    // developable + raw distance
    var dev = new Uint8Array(cols * rows), rawD = new Float32Array(cols * rows), maxD = 0;
    var anis = 1 + 0.25 * rnd();
    for (y = 0; y < rows; y++) for (x = 0; x < cols; x++) {
      i = y * cols + x;
      var ok = type[i] === 0 && cellH[i] > 0.02 && cellH[i] < 0.95 && slope[i] < 0.32 && x > 0 && y > 0 && x < cols - 1 && y < rows - 1;
      dev[i] = ok ? 1 : 0;
      var ex = (x + 0.5 - ox) * anis, ey = (y + 0.5 - oy) / anis;
      rawD[i] = Math.sqrt(ex * ex + ey * ey) * (1 + 0.28 * (N(x * 0.35, y * 0.35) - 0.5));
    }
    // normalise so ~86 % of developable cells are inside dist 1
    var ds = [];
    for (i = 0; i < cols * rows; i++) if (dev[i]) ds.push(rawD[i]);
    ds.sort(function (p, q) { return p - q; });
    maxD = ds.length ? Math.max(4, ds[Math.floor(ds.length * 0.86)]) : 10;
    M.reach = maxD;
    // roads
    var bc = style.blockCore, bl = style.block;
    var rxs = {}, rys = {}; // jittered old-core road lines
    var cx0 = Math.round(ox), cy0 = Math.round(oy);
    var jit = style.oldCoreJitter;
    function lineSet(set, c0, limit) {
      set[c0] = 1;
      var k, step;
      for (k = c0; k < limit;) { step = jit > 0 ? (rnd() < 0.5 ? 2 : 3) : bc; k += step; set[k] = 1; }
      for (k = c0; k > 0;) { step = jit > 0 ? (rnd() < 0.5 ? 2 : 3) : bc; k -= step; set[k] = 1; }
    }
    lineSet(rxs, cx0, cols); lineSet(rys, cy0, rows);
    var coreR = maxD * 0.26;
    function isRoadCell(x, y) {
      var i2 = y * cols + x;
      if (rawD[i2] < coreR) return !!(rxs[x] || rys[y]);
      var gx = ((x - cx0) % bl + bl) % bl === 0, gy = ((y - cy0) % bl + bl) % bl === 0;
      return gx || gy;
    }
    // parks
    var parks = [];
    if (style === STYLES.american) parks.push({ x: cx0 + 2, y: cy0 - 9, w: 3, h: 6, p: 0.47 });
    else { parks.push({ x: cx0 - 4, y: cy0 - 1, w: 2, h: 2, p: 0.33 }); parks.push({ x: cx0 + 5, y: cy0 - 5, w: 3, h: 3, p: 0.52 }); }
    if (preset.sand) parks[0].p = 0.6;
    function inPark(x, y) { for (var k = 0; k < parks.length; k++) { var P = parks[k]; if (x >= P.x && x < P.x + P.w && y >= P.y && y < P.y + P.h) return P; } return null; }
    M.parks = parks;
    // rail
    var rail = { cells: [], p: ERAS[5].p + 0.02, axis: 0 };
    (function () {
      var r = preset.rail; if (!r) return;
      var ax = r.from[0] * cols, ay = r.from[1] * rows, bx = r.to[0] * cols, by = r.to[1] * rows;
      var steps = Math.ceil(Math.max(Math.abs(bx - ax), Math.abs(by - ay))), seen = {};
      for (var k = 0; k <= steps; k++) {
        var px = Math.floor(lerp(ax, bx, k / steps)), py = Math.floor(lerp(ay, by, k / steps));
        if (px < 0 || py < 0 || px >= cols || py >= rows) continue;
        var ii = py * cols + px;
        if (type[ii] !== 0 || cellH[ii] > 0.9 || seen[ii]) continue;
        seen[ii] = 1; rail.cells.push([px, py]);
      }
      rail.axis = Math.abs(bx - ax) >= Math.abs(by - ay) ? 0 : 1;
    })();
    var railSet = {};
    rail.cells.forEach(function (c) { railSet[c[1] * cols + c[0]] = 1; });
    M.rail = rail;
    // lots + road cells
    var lots = [], roadCells = [], roadAt = {}, lotAt = new Int32Array(cols * rows);
    for (i = 0; i < cols * rows; i++) lotAt[i] = -1;
    var names = arr(o.districts).map(plain).filter(Boolean);
    var dnames = names.length ? names.concat(style.districts.slice(names.length)) : style.districts.slice();
    var waterIdx = 1, industryIdx = 4;
    for (y = 0; y < rows; y++) for (x = 0; x < cols; x++) {
      i = y * cols + x;
      if (!dev[i]) continue;
      var dn = rawD[i] / maxD;
      if (dn > 1.12) continue;
      var pFirst = clamp(0.05 + 0.8 * Math.pow(dn, 1.05) + (rnd() - 0.5) * 0.05, 0.05, 1.2);
      if (railSet[i]) { type[i] = 3; continue; }
      var park = inPark(x, y);
      if (park) { type[i] = 4; continue; }
      if (isRoadCell(x, y)) {
        type[i] = 2;
        var rc = { x: x, y: y, p: pFirst - 0.012, i: i };
        roadCells.push(rc); roadAt[i] = rc;
        continue;
      }
      var core = clamp(1 - dn / 0.52, 0, 1);
      var ang = Math.atan2(y + 0.5 - oy, x + 0.5 - ox);
      var sector = Math.floor(((ang + Math.PI) / (2 * Math.PI)) * 6) % 6;
      var district = dn < 0.2 ? 0 : wd[i] <= 2 && dn < 0.72 ? waterIdx : 2 + sector;
      var lot = { x: x, y: y, i: i, d: dn, core: core, district: district, industry: false, born: pFirst, stages: [], sector: sector, wd: wd[i] };
      lotAt[i] = lots.length;
      lots.push(lot);
    }
    M.roadAt = roadAt;
    // industry sector: the sector containing most rail cells
    var railSectorCount = [0, 0, 0, 0, 0, 0];
    rail.cells.forEach(function (c) { var a2 = Math.atan2(c[1] + 0.5 - oy, c[0] + 0.5 - ox); railSectorCount[Math.floor(((a2 + Math.PI) / (2 * Math.PI)) * 6) % 6]++; });
    var indSector = 0, bestC = -1;
    for (i = 0; i < 6; i++) if (railSectorCount[i] > bestC) { bestC = railSectorCount[i]; indSector = i; }
    lots.forEach(function (lot) {
      lot.industry = (lot.sector === indSector && lot.d > 0.18 && lot.d < 0.85) || (lot.district === waterIdx && lot.d > 0.3);
      if (lot.sector === indSector && lot.district >= 2) lot.district = industryIdx;
    });
    // district objects: 0 core, 1 waterfront, 4 industry, others = sectors
    var districts = [], dmap = {}, usedNames = {};
    function dname(idx) {
      if (idx === 0) return dnames[0];
      if (idx === waterIdx) return dnames[1];
      if (idx === industryIdx) return dnames[4];
      var pool = [dnames[2], dnames[3], dnames[5], dnames[6], dnames[7]];
      var k = 0, nm;
      do { nm = pool[(idx + k) % pool.length]; k++; } while (usedNames[nm] && k < 8);
      usedNames[nm] = 1;
      return nm;
    }
    lots.forEach(function (lot, li) {
      var key = lot.district;
      if (dmap[key] == null) { dmap[key] = districts.length; districts.push({ key: key, name: "", lots: [], cx: 0, cy: 0, born: 9, industry: key === industryIdx, water: key === waterIdx, core: key === 0 }); }
      var D = districts[dmap[key]];
      D.lots.push(li); D.cx += lot.x + 0.5; D.cy += lot.y + 0.5; D.born = Math.min(D.born, lot.born);
    });
    districts = districts.filter(function (D) { return D.lots.length >= 4; });
    districts.forEach(function (D) { D.cx /= D.lots.length || 1; D.cy /= D.lots.length || 1; D.name = dname(D.key); D.born = Math.max(0.06, D.born + 0.05); D.z = Math.max(0, cellH[Math.floor(D.cy) * cols + Math.floor(D.cx)] || 0); });
    districts.sort(function (a, b) { return a.born - b.born; });
    districts.forEach(function (D, k) { D.index = k; });
    M.districts = districts;
    M.lots = lots; M.roads = roadCells;
    // avenues (long runs of road cells) for cars + lane lines
    var avenues = [], run;
    for (y = 0; y < rows; y++) {
      run = [];
      for (x = 0; x <= cols; x++) {
        var isR = x < cols && type[y * cols + x] === 2;
        if (isR) run.push([x, y]); else { if (run.length >= 6) avenues.push({ cells: run, axis: 0 }); run = []; }
      }
    }
    for (x = 0; x < cols; x++) {
      run = [];
      for (y = 0; y <= rows; y++) {
        isR = y < rows && type[y * cols + x] === 2;
        if (isR) run.push([x, y]); else { if (run.length >= 6) avenues.push({ cells: run, axis: 1 }); run = []; }
      }
    }
    avenues.forEach(function (av) {
      var pm = 2, pmax = 0;
      av.cells.forEach(function (c) { var rc2 = roadAt[c[1] * cols + c[0]]; if (rc2) { pm = Math.min(pm, rc2.p); pmax = Math.max(pmax, rc2.p); } });
      av.p = pm + 0.03; av.pFull = pmax;
      av.a = [av.cells[0][0] + 0.5, av.cells[0][1] + 0.5]; var last = av.cells[av.cells.length - 1]; av.b = [last[0] + 0.5, last[1] + 0.5];
      av.len = av.cells.length;
      av.z = Math.max(0, cellH[av.cells[Math.floor(av.cells.length / 2)][1] * cols + av.cells[Math.floor(av.cells.length / 2)][0]]);
    });
    avenues.sort(function (a, b) { return b.cells.length - a.cells.length; });
    M.avenues = avenues.slice(0, 8);
    // stages
    lots.forEach(function (lot) {
      var e0 = eraIndex(Math.min(lot.born, 0.999)), e = Math.max(1, e0);
      var kind = eraKind(e, lot, rnd) || "rowhouse";
      var look = stageLook(kind, style, rnd);
      lot.stages.push({ p: lot.born, kind: kind, h: kindHeight(kind, lot, rnd), wall: look.wall, roof: look.roof, pitched: look.pitched, profile: look.profile, split: look.split, h2: look.h2 });
      var lastP = lot.born;
      for (var e2 = e + 1; e2 < ERAS.length; e2++) {
        if (rnd() > upgradeChance(e2, lot)) continue;
        var k2 = eraKind(e2, lot, rnd);
        if (!k2) continue;
        var pp = ERAS[e2].p + rnd() * eraLen(e2) * 0.75;
        if (pp < lastP + 0.05) pp = lastP + 0.05;
        if (pp > 0.995) continue;
        var lk = stageLook(k2, style, rnd);
        lot.stages.push({ p: pp, kind: k2, h: kindHeight(k2, lot, rnd), wall: lk.wall, roof: lk.roof, pitched: lk.pitched, profile: lk.profile, split: lk.split, h2: lk.h2 });
        lastP = pp;
      }
      // footprint (world coords), old-core jitter
      var jr = lot.d < 0.22 ? jit : 0;
      var cxl = lot.x + 0.5 + (rnd() - 0.5) * 0.1, cyl = lot.y + 0.5 + (rnd() - 0.5) * 0.1;
      var wx = 0.4 + rnd() * 0.04, wy = 0.4 + rnd() * 0.04, rot = (rnd() - 0.5) * jr;
      var cs = Math.cos(rot), sn = Math.sin(rot);
      lot.fp = [[-wx, -wy], [wx, -wy], [wx, wy], [-wx, wy]].map(function (q) { return [cxl + q[0] * cs - q[1] * sn, cyl + q[0] * sn + q[1] * cs]; });
      lot.cx = cxl; lot.cy = cyl;
      lot.z0 = Math.max(0, hAt(lot.x, lot.y), hAt(lot.x + 1, lot.y), hAt(lot.x, lot.y + 1), hAt(lot.x + 1, lot.y + 1));
      lot.streetTree = rnd() < 0.3 ? { born: Math.max(0.5, lot.born + 0.08), x: lot.x + 0.1 + rnd() * 0.1, y: lot.y + 0.1 + rnd() * 0.1 } : null;
      lot.seed = rnd();
    });
    // landmarks
    var landmarks = [];
    function freeCellNear(cx, cy, minD, maxD2, filter) {
      var bestL = null, bestS = 1e9;
      lots.forEach(function (lot) {
        if (lot.taken) return;
        var ddx = lot.x + 0.5 - cx, ddy = lot.y + 0.5 - cy, dd2 = Math.sqrt(ddx * ddx + ddy * ddy);
        if (dd2 < minD || dd2 > maxD2) return;
        if (filter && !filter(lot)) return;
        var s2 = dd2 + rnd() * 1.5;
        if (s2 < bestS) { bestS = s2; bestL = lot; }
      });
      return bestL;
    }
    function addLandmark(kind, p, name, lot, extra) {
      if (!lot) return null;
      lot.taken = true;
      var L = { kind: kind, x: lot.x + 0.5, y: lot.y + 0.5, z0: lot.z0, p: p, h: KIND_H[kind] ? KIND_H[kind][0] : 1, name: name, lot: lot, until: extra && extra.until != null ? extra.until : 9, seed: rnd() };
      L.fp = [[-0.46, -0.46], [0.46, -0.46], [0.46, 0.46], [-0.46, 0.46]].map(function (q) { return [L.x + q[0], L.y + q[1]]; });
      lot.landmark = L;
      landmarks.push(L);
      return L;
    }
    var coreLot = function (minD, maxD2) { return freeCellNear(ox, oy, minD, maxD2, function (l) { return l.d < 0.3; }); };
    style.landmarks.forEach(function (k) {
      if (k === "fort" || k === "citadel" || k === "mission") addLandmark(k, 0.055, k === "fort" ? "The fort" : k === "citadel" ? "The citadel" : "The mission", freeCellNear(ox, oy, 0, 2.2, function (l) { return l.wd <= 2; }), { until: k === "mission" ? 9 : 0.47 });
      else if (k === "cathedral" || k === "church" || k === "temple" || k === "pagoda") addLandmark(k, k === "pagoda" ? 0.2 : 0.32, k === "cathedral" ? "Cathedral" : k === "church" ? "Old church" : k === "temple" ? "Temple" : "Pagoda", coreLot(1.5, 4.5));
      else if (k === "townhall" || k === "cityhall") addLandmark(k, 0.5, k === "townhall" ? "Town hall" : "City hall", coreLot(2, 6));
      else if (k === "station" || k === "depot") {
        var near = null, nd = 1e9;
        rail.cells.forEach(function (c) { var dd3 = Math.abs(c[0] + 0.5 - ox) + Math.abs(c[1] + 0.5 - oy); if (dd3 < nd) { nd = dd3; near = c; } });
        if (near) addLandmark(k, 0.62, k === "station" ? "Central station" : "Rail depot", freeCellNear(near[0] + 0.5, near[1] + 0.5, 0.9, 2.6));
      }
      else if (k === "watertower") addLandmark(k, 0.6, "Water tower", coreLot(3, 8));
      else if (k === "cranes") { for (var q = 0; q < 3; q++) addLandmark(k, 0.63 + q * 0.03, q === 0 ? "Docks" : "", freeCellNear(ox, oy, 2, 14, function (l) { return l.wd <= 1 && l.industry; })); }
      else if (k === "earlytower" || k === "spire") addLandmark(k, 0.78 + rnd() * 0.04, k === "spire" ? "The spire" : "First skyscraper", coreLot(0.8, 3.5));
      else if (k === "tvtower") addLandmark(k, 0.91, "TV tower", freeCellNear(ox, oy, 5, 12, function (l) { return l.d < 0.6; }));
      else if (k === "supertall") addLandmark(k, 0.95, "The tower", coreLot(0.5, 3));
    });
    M.landmarks = landmarks;
    // bridges
    var bridges = [];
    arr(preset.bridges).forEach(function (B, bi) {
      var px = Math.floor(B.from[0] * cols), py = Math.floor(B.from[1] * rows), dx2 = B.dir[0], dy2 = B.dir[1];
      var k = 0;
      while (k < 8 && !isWater(px, py)) { px += dx2; py += dy2; k++; }
      if (isWater(px, py) && k < 8 && px >= 0 && py >= 0 && px < cols && py < rows) {
        var sx = px - dx2, sy = py - dy2, n2 = 0;
        while (n2 < 22 && px >= 0 && py >= 0 && px < cols && py < rows && isWater(px, py)) { px += dx2; py += dy2; n2++; }
        if (n2 >= 2 && n2 < 22 && px >= 0 && py >= 0 && px < cols && py < rows && !isWater(px, py)) {
          var era = clamp(Math.round(num(B.era, 5)), 3, 7);
          bridges.push({ a: [sx + 0.5, sy + 0.5], b: [px + 0.5, py + 0.5], p: ERAS[era].p + 0.03 + bi * 0.02, kind: era >= 6 ? "suspension" : era === 5 ? "truss" : "arch", len: n2 + 1, axis: dx2 ? 0 : 1, seed: rnd() });
        }
      }
    });
    M.bridges = bridges;
    // boats path (world coords)
    M.waterPath = arr(preset.waterPath).map(function (q) { return [q[0] * cols, q[1] * rows]; });
    M.waterPath2 = preset.waterPath2 ? preset.waterPath2.map(function (q) { return [q[0] * cols, q[1] * rows]; }) : null;
    // trees: per-cell clusters
    var clusters = [];
    for (y = 0; y < rows; y++) for (x = 0; x < cols; x++) {
      i = y * cols + x;
      if (type[i] === 1) continue;
      var hill = cellH[i] > 0.95 || slope[i] > 0.32, li = lotAt[i];
      var n3 = hill ? (cellH[i] > 1.9 ? 1 : 2) : type[i] === 4 ? 3 : (h2(x, y, seed) < 0.72 ? 1 : 0) + (h2(x + 3, y, seed) < 0.3 ? 1 : 0);
      if (preset.sand && !hill && type[i] !== 4) n3 = h2(x, y, seed + 2) < 0.22 ? 1 : 0;
      if (!n3) continue;
      var die = type[i] === 4 ? 9 : li >= 0 ? lots[li].born : type[i] === 2 ? (roadAt[i] ? roadAt[i].p : 9) : type[i] === 3 ? rail.p : 9;
      var bornT = type[i] === 4 ? inPark(x, y).p : 0;
      var trees = [];
      for (var k3 = 0; k3 < n3; k3++) {
        var tx = x + 0.15 + h2(x * 3 + k3, y, seed + 5) * 0.7, ty = y + 0.15 + h2(x, y * 3 + k3, seed + 6) * 0.7;
        trees.push({ x: tx, y: ty, z: Math.max(0, cellH[i]), r: 0.14 + h2(x + k3, y + 7, seed) * 0.12, hgt: 0.1 + h2(x, y + k3, seed + 9) * 0.1, k: h2(x + k3 * 2, y, seed + 3) });
      }
      clusters.push({ x: x + 0.5, y: y + 0.5, z: Math.max(0, cellH[i]), trees: trees, die: die, born: bornT, hill: hill, park: type[i] === 4 });
    }
    M.treeClusters = clusters;
    // population curve (log-linear between eras)
    var popNow = num(o.popNow, 0) > 0 ? num(o.popNow, 0) : 8000000;
    var base = [0, 400, 3000, 25000, 150000, 900000, 3500000, 8000000];
    var k4 = popNow / 8000000;
    var pops = base.map(function (v, idx) { return idx === 0 ? 0 : v * Math.pow(k4, 0.55 + 0.45 * idx / 7); });
    pops[7] = popNow;
    M.pop = function (p) {
      p = clamp(p, 0, 1);
      var e = eraIndex(p), q = (p - ERAS[e].p) / eraLen(e);
      var a = pops[e], b = e + 1 < pops.length ? pops[e + 1] : pops[e] * 1.08;
      if (a <= 0) return Math.round(b * sm(q) * 0.5);
      return Math.round(Math.exp(lerp(Math.log(a), Math.log(b), q)));
    };
    // bounding box of developable land (for camera fit)
    var bx0 = 1e9, by0 = 1e9, bx1 = -1e9, by1 = -1e9;
    lots.forEach(function (lot) { if (lot.d > 1) return; bx0 = Math.min(bx0, lot.x); by0 = Math.min(by0, lot.y); bx1 = Math.max(bx1, lot.x + 1); by1 = Math.max(by1, lot.y + 1); });
    if (bx0 > bx1) { bx0 = 0; by0 = 0; bx1 = cols; by1 = rows; }
    M.bbox = [bx0, by0, bx1, by1];
    M.camYaw = num(preset.camYaw, 180);
    M.hAt = hAt;
    M.isWater = isWater;
    M.lotAt = lotAt;
    return M;
  }
  CT.generate = generate;
  var MODELS = {};
  /** Cached generate (same opts → same model object). */
  CT.model = function (o) {
    o = o || {};
    var key = [o.preset, o.style, o.seed, o.cityName, o.cols, o.rows, arr(o.districts).join("|"), o.popNow].join("/");
    return MODELS[key] || (MODELS[key] = generate(o));
  };

  // ───────────────────────── World (perspective renderer) ─────────────────────────
  var SHADOW_RGB = [20, 26, 48];
  var GREENS = [[86, 160, 62], [74, 146, 56], [102, 172, 70], [62, 134, 52]];
  var DESERT_GREENS = [[128, 142, 84], [112, 132, 80], [140, 150, 92]];
  var PLAN = { land: [233, 224, 200], water: [190, 212, 220], road: [255, 252, 244], built: [196, 180, 150], park: [206, 216, 180], rail: [150, 140, 125], hill: [222, 212, 186], ink: [70, 58, 44] };

  function World(root, o) {
    o = o || {};
    var W = this;
    root = root || V.root();
    W.root = root;
    W.o = o;
    root.classList.add("ct-root");
    var M = (W.M = o.model || CT.model(o));
    var vp = o.viewport || { x: 0, y: 0, w: 1, h: 1 };
    var cw = o.canvas ? Math.round(num(o.canvas.w, V.width)) : Math.round(V.width), chh = o.canvas ? Math.round(num(o.canvas.h, V.height)) : Math.round(V.height);
    W.vp = o.px ? { x: num(o.px.x, 0), y: num(o.px.y, 0), w: num(o.px.w, cw), h: num(o.px.h, chh) } : { x: num(vp.x, 0) * V.width, y: num(vp.y, 0) * V.height, w: num(vp.w, 1) * V.width, h: num(vp.h, 1) * V.height };
    W.clock = o.clock || makeClock(o.yearFrom, o.yearTo, o.keyDates);
    W.riseP = clamp(7 / Math.max(20, W.clock.yearTo - W.clock.yearFrom), 0.004, 0.08);
    W.lightMode = CT.lightModes.indexOf(o.light) > 0 ? o.light : "auto";
    W.plan = !!o.plan;
    W.showDistricts = o.districtLabels !== false;
    W.labelAlpha = null; // optional fn(t) → 0..1 for district labels
    W.labels = []; // custom canvas labels
    W.extras = []; // custom drawables fn(W, ctx, t, st)
    W.focus = null; // {district, amt: fn(t)}
    W.disaster = null;
    W.life = o.life !== false;
    W.cam = { base: { yaw: M.camYaw + num(o.yaw, 0), pitch: num(o.pitch, V.isPortrait ? 40 : 33), dist: num(o.dist, 1), fov: num(o.fov, 38), tx: null, ty: null, tz: null }, keys: [], dirty: true };
    W.fitD = null;
    W.yearFn = null;
    if (o.year != null) W.setYear(o.year);
    var cv = el("canvas.ct-canvas", { parent: root, width: cw, height: chh });
    if (o.clip) cv.style.clipPath = o.clip;
    W.canvas = cv;
    W.ctx = cv.getContext("2d");
    W.state = { t: 0, year: W.clock.yearFrom, p: 0 };
    W.camera = new Camera(W);
    // static per-cell data
    W.cellBase = new Array(M.cols * M.rows);
    W.cellN = new Float32Array(M.cols * M.rows * 3);
    W.buildCellStatics();
    if (!o.isStatic) V.onFrame(function (t) {
      try { W.render(t); } catch (e) { V.error("city render: " + (e && e.message)); }
    });
  }
  CT.World = World;
  CT.world = function (root, o) { return new World(root, o); };

  /** Drive the clock: number (fixed year) or fn(t) → year. */
  World.prototype.setYear = function (y) {
    var W = this;
    W.yearFn = typeof y === "function" ? y : function () { return num(y, W.clock.yearTo); };
    return W;
  };
  /** Year as a piecewise-linear schedule [[t, year], …] (clamped at both ends). */
  World.prototype.yearSchedule = function (pts) {
    pts = pts.slice().sort(function (a, b) { return a[0] - b[0]; });
    return this.setYear(function (t) {
      if (!pts.length) return this.clock.yearTo;
      if (t <= pts[0][0]) return pts[0][1];
      for (var i = 0; i + 1 < pts.length; i++) if (t < pts[i + 1][0]) return lerp(pts[i][1], pts[i + 1][1], (t - pts[i][0]) / Math.max(1e-6, pts[i + 1][0] - pts[i][0]));
      return pts[pts.length - 1][1];
    }.bind(this));
  };
  World.prototype.yearAt = function (t) { return this.yearFn ? this.yearFn(t) : this.clock.yearTo; };

  World.prototype.buildCellStatics = function () {
    var W = this, M = W.M, cols = M.cols, rows = M.rows, seed = M.seed;
    for (var y = 0; y < rows; y++) for (var x = 0; x < cols; x++) {
      var i = y * cols + x, h = M.cellH[i], ty = M.type[i];
      var a = M.hAt(x, y), b = M.hAt(x + 1, y), c = M.hAt(x, y + 1), d = M.hAt(x + 1, y + 1);
      // normal from diagonals
      var nx = -((b - a) + (d - c)) * 0.5, ny = -((c - a) + (d - b)) * 0.5, nz = 1;
      var nl = Math.sqrt(nx * nx + ny * ny + 1);
      W.cellN[i * 3] = nx / nl; W.cellN[i * 3 + 1] = ny / nl; W.cellN[i * 3 + 2] = nz / nl;
      var col;
      var v = h2(x, y, seed + 21);
      if (ty === 1) col = null;
      else if (M.sand) col = h > 1.0 ? mixA([176, 120, 86], [206, 160, 110], v) : M.waterDist[i] <= 1 ? [214, 196, 150] : mixA([222, 190, 136], [206, 176, 124], v);
      else if (h > 1.2) col = mixA([120, 112, 96], [150, 136, 110], v);
      else if (h > 0.85) col = mixA([118, 140, 86], [142, 150, 96], clamp((h - 0.85) / 0.4, 0, 1) * 0.7 + v * 0.3);
      else if (M.waterDist[i] <= 1 && h < 0.16) col = mixA([216, 200, 150], [150, 176, 96], v * 0.6);
      else col = mixA([122, 182, 80], [98, 166, 70], v);
      W.cellBase[i] = col;
    }
  };

  // ─── camera ───
  function Camera(W) { this.W = W; }
  /** Set base camera values {yaw, pitch, dist (× fitted), fov, tx, ty, tz}. */
  Camera.prototype.set = function (p) {
    var b = this.W.cam.base;
    for (var k in p) if (p[k] != null) b[k] = num(p[k], b[k]);
    this.W.cam.dirty = true;
    this.W.fitD = null;
    return this;
  };
  /** Animate to {yaw, pitch, dist, fov, tx, ty, tz} starting at `at` over `dur` seconds. */
  Camera.prototype.to = function (p, at, dur, ease) {
    var to = {};
    for (var k in p) if (p[k] != null && isFinite(num(p[k], NaN))) to[k] = num(p[k], 0);
    this.W.cam.keys.push({ to: to, at: num(at, 0), dur: Math.max(0.01, num(dur, 1.2)), ease: ease || "inOutCubic", i: this.W.cam.keys.length });
    this.W.cam.dirty = true;
    return this;
  };
  /** Slow cinematic orbit over the whole scene: yaw sweeps `deg`, distance multiplies by `dolly`. */
  Camera.prototype.orbit = function (deg, dolly, at, dur) {
    var b = this.W.cam.base;
    deg = num(deg, 16); at = num(at, 0); dur = num(dur, V.duration);
    this.set({ yaw: b.yaw - deg / 2 });
    this.to({ yaw: b.yaw + deg / 2 }, at, dur, "inOutSine");
    if (dolly != null && dolly !== 1) this.to({ dist: b.dist * num(dolly, 0.9) }, at, dur, "inOutSine");
    return this;
  };
  /** Look at a world point (x, y, z) with a distance multiplier. */
  Camera.prototype.focus = function (x, y, z, dist, at, dur, ease) {
    return this.to({ tx: x, ty: y, tz: z, dist: dist }, at, dur, ease);
  };

  World.prototype.camState = function (t) {
    var cam = this.cam;
    if (cam.dirty) {
      cam.keys.sort(function (a, b) { return a.at - b.at || a.i - b.i; });
      for (var i = 0; i < cam.keys.length; i++) cam.keys[i].from = this._evalCam(cam.keys[i].at, i);
      cam.dirty = false;
    }
    return this._evalCam(t, cam.keys.length);
  };
  World.prototype._evalCam = function (t, upto) {
    var b = this.cam.base, st = {};
    for (var k in b) st[k] = b[k];
    for (var i = 0; i < upto; i++) {
      var kf = this.cam.keys[i];
      if (t + 1e-9 < kf.at) break;
      var p = prog(t, kf.at, kf.dur, kf.ease);
      for (var q in kf.to) {
        var from = kf.from && kf.from[q] != null ? kf.from[q] : st[q];
        if (from == null) from = kf.to[q];
        st[q] = lerp(from, kf.to[q], p);
      }
    }
    return st;
  };

  /** Build a projection for camera state st and absolute distance. */
  World.prototype.makeProj = function (st, dist) {
    var yaw = (st.yaw * Math.PI) / 180, pitch = (clamp(st.pitch, 4, 89.6) * Math.PI) / 180;
    var T = [st.tx, st.ty, st.tz];
    var C = [T[0] + dist * Math.sin(yaw) * Math.cos(pitch), T[1] + dist * Math.cos(yaw) * Math.cos(pitch), T[2] + dist * Math.sin(pitch)];
    var F = [T[0] - C[0], T[1] - C[1], T[2] - C[2]], fl = Math.sqrt(F[0] * F[0] + F[1] * F[1] + F[2] * F[2]) || 1;
    F = [F[0] / fl, F[1] / fl, F[2] / fl];
    var R = [F[1], -F[0], 0], rl = Math.sqrt(R[0] * R[0] + R[1] * R[1]) || 1;
    R = [R[0] / rl, R[1] / rl, 0];
    var U = [R[1] * F[2] - R[2] * F[1], R[2] * F[0] - R[0] * F[2], R[0] * F[1] - R[1] * F[0]];
    var f = (this.vp.h / 2) / Math.tan((clamp(st.fov, 15, 90) * Math.PI) / 360);
    return { C: C, F: F, R: R, U: U, f: f, ox: this.vp.x + this.vp.w / 2, oy: this.vp.y + this.vp.h / 2 + num(st.oyShift, 0), dist: dist, near: 0.3 };
  };
  /** Project world (x,y,z) with projection P → [sx, sy, depth] or null when behind the camera. */
  function proj(P, x, y, z) {
    var dx = x - P.C[0], dy = y - P.C[1], dz = z - P.C[2];
    var cz = dx * P.F[0] + dy * P.F[1] + dz * P.F[2];
    if (cz < P.near) return null;
    var cx = dx * P.R[0] + dy * P.R[1], cy = dx * P.U[0] + dy * P.U[1] + dz * P.U[2];
    var k = P.f / cz;
    return [P.ox + cx * k, P.oy - cy * k, cz];
  }
  CT.proj = proj;

  /** Fit: choose camera target + distance so the developed city fills the viewport. */
  World.prototype.fit = function () {
    var W = this, M = W.M, b = W.cam.base, bb = M.bbox;
    var pad = num(W.o.pad, 0.6);
    var pts = W.o.fitPoints || [[bb[0] - pad, bb[1] - pad, 0], [bb[2] + pad, bb[1] - pad, 0], [bb[2] + pad, bb[3] + pad, 0], [bb[0] - pad, bb[3] + pad, 0], [M.origin[0], M.origin[1], num(W.o.fitTop, 2.4)]];
    if (b.tx == null) b.tx = (bb[0] + bb[2]) / 2;
    if (b.ty == null) b.ty = (bb[1] + bb[3]) / 2 + num(W.o.targetShift, 0);
    if (b.tz == null) b.tz = 0.35;
    var fill = num(W.o.fill, 0.94), cropW = W.o.crop != null ? num(W.o.crop, 1) : V.isPortrait ? 1.45 : V.isSquare ? 1.12 : 1;
    var lo = 4, hi = 600, st = {};
    for (var k in b) st[k] = b[k];
    for (var it = 0; it < 22; it++) {
      var mid = (lo + hi) / 2, P = W.makeProj(st, mid), ok = true;
      for (var i = 0; i < pts.length && ok; i++) {
        var s = proj(P, pts[i][0], pts[i][1], pts[i][2]);
        if (!s) { ok = false; break; }
        var hx = (W.vp.w * fill * cropW) / 2, hy = (W.vp.h * fill) / 2;
        if (Math.abs(s[0] - P.ox) > hx || Math.abs(s[1] - P.oy) > hy) ok = false;
      }
      if (ok) hi = mid; else lo = mid;
    }
    W.fitD = hi * num(W.o.distMul, 0.86);
  };

  // ─── per-frame colour helpers ───
  World.prototype.setLight = function (L) {
    var s = L.sun, sl = Math.sqrt(s[0] * s[0] + s[1] * s[1] + s[2] * s[2]) || 1;
    this.L = L;
    this.sun = [s[0] / sl, s[1] / sl, s[2] / sl];
    var sc = rgb(L.sunCol);
    this.tint = [0.55 + (sc[0] / 255) * 0.45, 0.55 + (sc[1] / 255) * 0.45, 0.55 + (sc[2] / 255) * 0.45];
    this.fogRGB = rgb(L.fog);
    this.sunRGB = rgb(L.sunCol);
    var sxy = Math.sqrt(this.sun[0] * this.sun[0] + this.sun[1] * this.sun[1]) || 1;
    this.sunXY = [this.sun[0] / sxy, this.sun[1] / sxy];
    this.fogNear = this.P.dist * 0.55;
    this.fogFar = this.P.dist * 2.1;
    this.haze = L.haze;
  };
  /** Specular/reflection tint for glass: white by day, sun-coloured at golden hour. */
  World.prototype.specCol = function (a) {
    var sc = rgb(this.L.sunCol), k = this.L.lit * 0.8, q = Math.round(a * 20) / 20;
    return "rgba(" + ((255 + (sc[0] - 255) * k) | 0) + "," + ((255 + (sc[1] - 255) * k) | 0) + "," + ((255 + (sc[2] - 255) * k) | 0) + "," + q + ")";
  };
  World.prototype.fogAmt = function (cz) {
    var a = clamp((cz - this.fogNear) / (this.fogFar - this.fogNear), 0, 1);
    a = a * a * this.L.fogK;
    if (this.plan) a *= 0.3;
    return Math.max(a, this.haze * 0.3);
  };
  /** Shade an rgb array by a normal + depth → css colour. */
  World.prototype.shade = function (col, nx, ny, nz, cz, extra) {
    var L = this.L, l;
    if (this.plan) l = 1;
    else {
      var d = nx * this.sun[0] + ny * this.sun[1] + nz * this.sun[2];
      l = L.amb + L.dif * (d > 0 ? d : 0) + (nz > 0.9 ? 0.06 : 0);
    }
    if (extra) l *= extra;
    var fa = this.fogAmt(cz), F = this.fogRGB, T = this.tint;
    var r = col[0] * l * T[0], g = col[1] * l * T[1], b = col[2] * l * T[2];
    if (this.dimK > 0) { var gy = (r + g + b) / 3; r += (gy * 0.9 - r) * this.dimK; g += (gy * 0.9 - g) * this.dimK; b += (gy * 0.9 - b) * this.dimK; }
    r += (F[0] - r) * fa; g += (F[1] - g) * fa; b += (F[2] - b) * fa;
    return "rgb(" + (r > 255 ? 255 : r | 0) + "," + (g > 255 ? 255 : g | 0) + "," + (b > 255 ? 255 : b | 0) + ")";
  };

  function fillPts(ctx, pts, fill) {
    ctx.beginPath();
    ctx.moveTo(pts[0][0], pts[0][1]);
    for (var i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.fill();
  }
  /** Draw one world-space polygon (array of [x,y,z]) with back-face culling + lighting. Returns screen pts or null. */
  World.prototype.face = function (pts, col, force, extra, centre) {
    var P = this.P;
    var a = pts[0], b = pts[1], c = pts[2];
    var ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2], vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
    var nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    var nl = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1;
    nx /= nl; ny /= nl; nz /= nl;
    if (centre) {
      // convex solid: orient outward from its centre, cull when the camera is behind the face
      if ((a[0] - centre[0]) * nx + (a[1] - centre[1]) * ny + (a[2] - centre[2]) * nz < 0) { nx = -nx; ny = -ny; nz = -nz; }
      if ((P.C[0] - a[0]) * nx + (P.C[1] - a[1]) * ny + (P.C[2] - a[2]) * nz <= 0) return null;
    } else {
      // no centre known: light as if facing the camera
      var tc = (P.C[0] - a[0]) * nx + (P.C[1] - a[1]) * ny + (P.C[2] - a[2]) * nz;
      if (tc < 0) { nx = -nx; ny = -ny; nz = -nz; if (!force) return null; }
    }
    var sp = [], cz = 0;
    for (var i = 0; i < pts.length; i++) { var s = proj(P, pts[i][0], pts[i][1], pts[i][2]); if (!s) return null; sp.push(s); cz += s[2]; }
    fillPts(this.ctx, sp, this.shade(col, nx, ny, nz, cz / pts.length, extra));
    return sp;
  };

  /** Extruded box from a 4-point footprint. Returns {sh: screen height px, top: screen pts of top} or null. */
  World.prototype.box = function (fp, z0, h, wall, roof, o) {
    o = o || {};
    if (h <= 0.004) return null;
    var P = this.P, ctx = this.ctx, z1 = z0 + h;
    var top = [[fp[0][0], fp[0][1], z1], [fp[1][0], fp[1][1], z1], [fp[2][0], fp[2][1], z1], [fp[3][0], fp[3][1], z1]];
    var sides = [], faces = 0;
    for (var i = 0; i < 4; i++) {
      var a = fp[i], b = fp[(i + 1) % 4];
      var mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2;
      var nx = b[1] - a[1], ny = -(b[0] - a[0]);
      // outward = away from footprint centre
      if ((mx - o.cx) * nx + (my - o.cy) * ny < 0) { nx = -nx; ny = -ny; }
      if ((P.C[0] - mx) * nx + (P.C[1] - my) * ny <= 0) continue;
      var q = [[a[0], a[1], z0], [b[0], b[1], z0], [b[0], b[1], z1], [a[0], a[1], z1]];
      var sp = this.face(q, o.glass ? wall : wall, true, o.extra);
      if (sp) { var nl2 = Math.hypot(nx, ny) || 1; sides.push({ sp: sp, i: i, w: Math.abs(b[0] - a[0]) + Math.abs(b[1] - a[1]), nx: nx / nl2, ny: ny / nl2 }); faces++; }
    }
    var sh = 0;
    if (sides.length) sh = Math.abs(sides[0].sp[3][1] - sides[0].sp[0][1]);
    // windows / floor lines
    if (!this.plan && o.windows && sh > 14) this.windows(sides, h, o);
    var topSp = null;
    if (o.pitched && !this.plan) this.roofPitched(fp, z1, h, roof, o);
    else topSp = this.face(top, roof, true, o.extra);
    if (this.plan && topSp) { ctx.strokeStyle = "rgba(70,58,44,0.55)"; ctx.lineWidth = Math.max(0.6, u(0.8)); ctx.stroke(); }
    return { sh: sh, top: topSp, sides: sides };
  };

  World.prototype.roofPitched = function (fp, z1, h, roof, o) {
    var rh = Math.max(0.05, Math.min(0.22, h * 0.45));
    // ridge parallel to the longer edge
    var e0 = Math.hypot(fp[1][0] - fp[0][0], fp[1][1] - fp[0][1]), e1 = Math.hypot(fp[2][0] - fp[1][0], fp[2][1] - fp[1][1]);
    var A, B, C2, D; // ordered so that A→B and D→C are the long edges
    if (e0 >= e1) { A = fp[0]; B = fp[1]; C2 = fp[2]; D = fp[3]; } else { A = fp[1]; B = fp[2]; C2 = fp[3]; D = fp[0]; }
    var r1 = [(A[0] + D[0]) / 2, (A[1] + D[1]) / 2, z1 + rh], r2 = [(B[0] + C2[0]) / 2, (B[1] + C2[1]) / 2, z1 + rh];
    var dark = [roof[0] * 0.82, roof[1] * 0.82, roof[2] * 0.82];
    var cen = [(A[0] + C2[0]) / 2, (A[1] + C2[1]) / 2, z1 + rh * 0.3];
    this.face([[A[0], A[1], z1], [B[0], B[1], z1], r2, r1], roof, false, o.extra, cen);
    this.face([[D[0], D[1], z1], [C2[0], C2[1], z1], r2, r1], roof, false, o.extra, cen);
    this.face([[A[0], A[1], z1], [D[0], D[1], z1], r1], dark, false, o.extra, cen);
    this.face([[B[0], B[1], z1], [C2[0], C2[1], z1], r2], dark, false, o.extra, cen);
  };

  World.prototype.windows = function (sides, h, o) {
    var ctx = this.ctx, L = this.L, W = this;
    var nf = clamp(Math.round(h / 0.115), 1, 60);
    var lit = L.lit, budget = this.winBudget;
    for (var s = 0; s < sides.length; s++) {
      var sp = sides[s].sp, b0 = sp[0], b1 = sp[1], t1 = sp[2], t0 = sp[3];
      var sh = Math.abs(t0[1] - b0[1]);
      var step = Math.max(1, Math.ceil(nf / (sh / 4.5)));
      var cols = clamp(Math.round(sides[s].w / 0.18), 1, 5);
      if (o.kind === "glass" || o.kind === "supertall" || o.kind === "tower") {
        // sky reflection band + vertical mullions
        ctx.beginPath();
        var ya = 0.62, yb = 1;
        ctx.moveTo(lerp(b0[0], t0[0], ya), lerp(b0[1], t0[1], ya)); ctx.lineTo(lerp(b1[0], t1[0], ya), lerp(b1[1], t1[1], ya));
        ctx.lineTo(lerp(b1[0], t1[0], yb), lerp(b1[1], t1[1], yb)); ctx.lineTo(lerp(b0[0], t0[0], yb), lerp(b0[1], t0[1], yb));
        var spec = Math.max(0, sides[s].nx * W.sun[0] + sides[s].ny * W.sun[1]);
        ctx.closePath(); ctx.fillStyle = W.specCol(0.14 + 0.34 * spec * spec); ctx.fill();
        if (sh > 30) {
          ctx.beginPath();
          for (var c = 1; c < cols * 2; c++) { var fx = c / (cols * 2); ctx.moveTo(lerp(b0[0], b1[0], fx), lerp(b0[1], b1[1], fx)); ctx.lineTo(lerp(t0[0], t1[0], fx), lerp(t0[1], t1[1], fx)); }
          ctx.strokeStyle = "rgba(20,40,70,0.18)"; ctx.lineWidth = 1; ctx.stroke();
        }
      }
      // floor lines
      ctx.beginPath();
      for (var fl = 1; fl < nf; fl += step) {
        var fy = fl / nf;
        ctx.moveTo(lerp(b0[0], t0[0], fy), lerp(b0[1], t0[1], fy));
        ctx.lineTo(lerp(b1[0], t1[0], fy), lerp(b1[1], t1[1], fy));
      }
      ctx.strokeStyle = "rgba(20,24,40,0.17)"; ctx.lineWidth = 1; ctx.stroke();
      // lit windows
      if (lit > 0.04 && sh > 24 && budget > 0) {
        ctx.beginPath();
        var fw = Math.hypot(b1[0] - b0[0], b1[1] - b0[1]) / cols * 0.42, fh = Math.max(1.2, sh / nf * 0.5);
        var sd = o.seed * 977 + s * 31;
        for (fl = 0; fl < nf && budget > 0; fl += step) {
          for (c = 0; c < cols; c++) {
            if (h01(sd + fl * 7.3 + c * 3.1) > lit * 0.75) continue;
            var fx2 = (c + 0.5) / cols, fy2 = (fl + 0.5) / nf;
            var px = lerp(lerp(b0[0], b1[0], fx2), lerp(t0[0], t1[0], fx2), fy2), py = lerp(lerp(b0[1], b1[1], fx2), lerp(t0[1], t1[1], fx2), fy2);
            ctx.rect(px - fw / 2, py - fh / 2, fw, fh);
            budget--;
          }
        }
        ctx.fillStyle = "rgba(255,206,120," + (0.6 + 0.4 * lit).toFixed(2) + ")";
        ctx.fill();
      }
    }
    this.winBudget = budget;
  };

  /** Pyramid (spire) from a footprint at z0 to apex height z0+h. */
  World.prototype.pyramid = function (fp, z0, h, col, o) {
    var cx = 0, cy = 0;
    for (var i = 0; i < fp.length; i++) { cx += fp[i][0]; cy += fp[i][1]; }
    cx /= fp.length; cy /= fp.length;
    var apex = [cx, cy, z0 + h], cen = [cx, cy, z0 + h * 0.3];
    for (i = 0; i < fp.length; i++) {
      var a = fp[i], b = fp[(i + 1) % fp.length];
      this.face([[a[0], a[1], z0], [b[0], b[1], z0], apex], col, false, o && o.extra, cen);
    }
  };
  /** Frustum: footprint fp at z0 scaled by k at z0+h (tapered tower top). */
  World.prototype.frustum = function (fp, z0, h, k, wall, roof, o) {
    var cx = (fp[0][0] + fp[2][0]) / 2, cy = (fp[0][1] + fp[2][1]) / 2;
    var top = fp.map(function (q) { return [cx + (q[0] - cx) * k, cy + (q[1] - cy) * k, z0 + h]; }), cen = [cx, cy, z0 + h * 0.4];
    for (var i = 0; i < 4; i++) {
      var a = fp[i], b = fp[(i + 1) % 4];
      this.face([[a[0], a[1], z0], [b[0], b[1], z0], top[(i + 1) % 4], top[i]], wall, false, o && o.extra, cen);
    }
    this.face(top, roof, true, o && o.extra);
    return top;
  };
  function sq(cx, cy, w, d) { d = d || w; return [[cx - w / 2, cy - d / 2], [cx + w / 2, cy - d / 2], [cx + w / 2, cy + d / 2], [cx - w / 2, cy + d / 2]]; }
  CT.square = sq;
  /** Sphere-ish blob (dome / tv-tower ball) drawn as a shaded disc at world point. */
  World.prototype.ball = function (x, y, z, r, col, o) {
    var s = proj(this.P, x, y, z);
    if (!s) return;
    var k = this.P.f / s[2], ctx = this.ctx, R = r * k;
    if (R < 0.6) return;
    ctx.beginPath(); ctx.arc(s[0], s[1], R, 0, 6.2832);
    ctx.fillStyle = this.shade(col, 0.3, -0.4, 0.86, s[2], o && o.extra); ctx.fill();
    if (R > 3) { ctx.beginPath(); ctx.arc(s[0] - R * 0.25, s[1] - R * 0.3, R * 0.55, 0, 6.2832); ctx.fillStyle = "rgba(255,255,255,0.22)"; ctx.fill(); }
  };
  World.prototype.line3 = function (a, b, col, w) {
    var p = proj(this.P, a[0], a[1], a[2]), q = proj(this.P, b[0], b[1], b[2]);
    if (!p || !q) return;
    var ctx = this.ctx;
    ctx.beginPath(); ctx.moveTo(p[0], p[1]); ctx.lineTo(q[0], q[1]);
    ctx.strokeStyle = col; ctx.lineWidth = w || 1; ctx.stroke();
  };

  // ─── convex hull (shadows) ───
  function hull(pts) {
    pts = pts.slice().sort(function (a, b) { return a[0] - b[0] || a[1] - b[1]; });
    var n = pts.length;
    if (n < 3) return pts;
    function cross(o, a, b) { return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]); }
    var lower = [], upper = [], i;
    for (i = 0; i < n; i++) { while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], pts[i]) <= 0) lower.pop(); lower.push(pts[i]); }
    for (i = n - 1; i >= 0; i--) { while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], pts[i]) <= 0) upper.pop(); upper.push(pts[i]); }
    upper.pop(); lower.pop();
    return lower.concat(upper);
  }
  World.prototype.shadow = function (fp, z0, h, alpha) {
    if (this.plan || h < 0.05) return;
    var P0 = this.P, dz = (fp[0][0] - P0.C[0]) * P0.F[0] + (fp[0][1] - P0.C[1]) * P0.F[1] + (z0 - P0.C[2]) * P0.F[2];
    if (dz <= P0.near || (h * P0.f) / dz < 5 || dz > this.fogFar * 0.8) return;
    var sun = this.sun, k = clamp(h / Math.max(0.25, sun[2]), 0, h * 2.8);
    var sx = -sun[0] * k, sy = -sun[1] * k, P = this.P, pts = [];
    for (var i = 0; i < 4; i++) {
      var a = proj(P, fp[i][0], fp[i][1], z0), b = proj(P, fp[i][0] + sx, fp[i][1] + sy, z0);
      if (!a || !b) return;
      pts.push(a, b);
    }
    var hp = hull(pts);
    if (hp.length < 3) return;
    fillPts(this.ctx, hp, "rgba(" + SHADOW_RGB[0] + "," + SHADOW_RGB[1] + "," + SHADOW_RGB[2] + "," + (alpha != null ? alpha : this.shadowA).toFixed(2) + ")");
  };

  // ─── growth state of a lot at progress p ───
  /** Returns {stage, h, prev} — the stage drawn now and its current (animated) height. */
  World.prototype.lotState = function (lot, p) {
    var st = lot.stages, idx = -1;
    for (var i = 0; i < st.length; i++) if (st[i].p <= p) idx = i; else break;
    if (idx < 0) return null;
    var cur = st[idx], rise = this.riseP, q = (p - cur.p) / rise;
    if (idx > 0 && q < 0.5) { var pr = st[idx - 1]; return { stage: pr, h: pr.h * (1 - V.ease.inCubic(q * 2)), sinking: true }; }
    var r = idx > 0 ? clamp((q - 0.5) * 2, 0, 1) : clamp(q, 0, 1);
    var e = r >= 1 ? 1 : V.ease.outBack(r) * (r < 1 ? 1 : 1);
    if (e > 1.12) e = 1.12;
    return { stage: cur, h: cur.h * e, rising: r < 1 };
  };

  // ─── main render ───
  World.prototype.render = function (t) {
    var W = this, M = W.M, ctx = W.ctx;
    var year = W.yearAt(t), p = W.clock.p(year);
    W.state.t = t; W.state.year = year; W.state.p = p;
    if (W.fitD == null) W.fit();
    if (W.activeFn && !W.activeFn(t)) { ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, W.canvas.width, W.canvas.height); return; }
    var st = W.camState(t);
    W.P = W.makeProj(st, W.fitD * Math.max(0.05, st.dist));
    W.setLight(lightAt(p, W.lightMode));
    W.dimK = 0;
    W.winBudget = 1700;
    if (W.focus) { if (W.focus.kFn) W.focus.k = W.focus.kFn(t); if (W.focus.glowFn) W.focus.glow = W.focus.glowFn(t); }
    var ds = W.disaster;
    if (ds) {
      ds.reb = ds.rebFn ? ds.rebFn(t) : 0;
      ds.kRaw = ds.kFn ? ds.kFn(t) : num(ds.k, 1);
      ds.k = ds.kRaw * (1 - ds.reb);
      ds.glow = ds.glowFn ? ds.glowFn(t) : 0;
    }
    W.shadowA = 0.22 + 0.1 * (1 - W.sun[2]);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, W.canvas.width, W.canvas.height);
    ctx.save();
    var cr = W.o.clipViewport || W.o.px ? W.vp : { x: 0, y: 0, w: W.canvas.width, h: W.canvas.height };
    W.cr = cr;
    ctx.beginPath(); ctx.rect(cr.x, cr.y, cr.w, cr.h); ctx.clip();
    ctx.lineJoin = "round";
    W.drawSky(t);
    W.projectCorners();
    W.drawTerrain(t, p);
    W.drawWater(t);
    W.drawObjects(t, p);
    W.drawLabels(t, p);
    ctx.restore();
  };

  World.prototype.drawSky = function (t) {
    var W = this, ctx = W.ctx, L = W.L, P = W.P, vp = W.cr || W.vp, M = W.M;
    // horizon = projection of a far point along the view direction at z = 0
    var far = proj(P, P.C[0] + P.F[0] * 4000, P.C[1] + P.F[1] * 4000, 0);
    var hy = far ? clamp(far[1], vp.y - vp.h, vp.y + vp.h * 0.9) : vp.y + vp.h * 0.3;
    if (W.plan) { ctx.fillStyle = W.shade(mixA(PLAN.land, PLAN.water, 0.5), 0, 0, 1, P.dist); ctx.fillRect(vp.x, vp.y, vp.w, vp.h); return; }
    var g = ctx.createLinearGradient(0, vp.y, 0, hy);
    g.addColorStop(0, L.top); g.addColorStop(1, L.hor);
    ctx.fillStyle = g; ctx.fillRect(vp.x, vp.y, vp.w, Math.max(0, hy - vp.y + 1));
    // ground beyond the terrain: fog colour, then a huge fogged plain so the grid never floats
    ctx.fillStyle = L.fog; ctx.fillRect(vp.x, Math.max(vp.y, hy), vp.w, vp.y + vp.h - Math.max(vp.y, hy));
    var gc = M.sand ? [196, 168, 118] : [92, 128, 84], cx0 = M.cols / 2, cy0 = M.rows / 2, R = 260, gp = [];
    [[-R, -R], [R, -R], [R, R], [-R, R]].forEach(function (q) { var s = proj(P, cx0 + q[0], cy0 + q[1], -0.02); if (s) gp.push(s); });
    if (gp.length === 4) fillPts(ctx, gp, W.shade(mixA(gc, W.fogRGB, 0.3), 0, 0, 1, P.dist * 1.6));
    // stars
    if (L.stars > 0.02) {
      var rnd = V.makeRand(1234);
      ctx.fillStyle = "rgba(255,255,255," + (0.8 * L.stars).toFixed(2) + ")";
      for (var i = 0; i < 90; i++) { var sx = vp.x + rnd() * vp.w, sy = vp.y + rnd() * Math.max(10, hy - vp.y) * 0.9, tw = 0.5 + 0.5 * Math.sin(t * 2 + i); ctx.globalAlpha = tw; ctx.fillRect(sx, sy, u(1.5), u(1.5)); }
      ctx.globalAlpha = 1;
    }
    // sun glow
    var s = W.sun, sunP = proj(P, P.C[0] + s[0] * 3000, P.C[1] + s[1] * 3000, P.C[2] + s[2] * 3000);
    if (sunP && sunP[1] < hy + vp.h * 0.1 && L.stars < 0.5) {
      var R = vp.h * (0.12 + 0.25 * (1 - s[2]));
      ctx.drawImage(sunSprite(L.sunCol), sunP[0] - R, sunP[1] - R, R * 2, R * 2);
    }
    // soft clouds
    var cr = V.makeRand(M_SEED(W));
    ctx.fillStyle = "rgba(255,255,255," + (0.12 + 0.18 * (1 - L.haze)).toFixed(2) + ")";
    for (i = 0; i < 4; i++) {
      var cw = vp.w * (0.12 + cr() * 0.16), ch = cw * 0.16, cx = vp.x + ((cr() * 1.4 + t * 0.012 * (0.6 + cr())) % 1.4 - 0.2) * vp.w, cy = vp.y + (0.05 + cr() * 0.6) * Math.max(10, hy - vp.y);
      ctx.beginPath(); ctx.ellipse(cx, cy, cw / 2, ch / 2, 0, 0, 6.2832); ctx.ellipse(cx + cw * 0.2, cy - ch * 0.3, cw / 3.2, ch / 1.7, 0, 0, 6.2832); ctx.fill();
    }
  };
  function M_SEED(W) { return W.M.seed * 3 + 11; }
  var SUNS = {};
  function sunSprite(col) {
    if (SUNS[col]) return SUNS[col];
    var c = document.createElement("canvas"); c.width = c.height = 256;
    var g = c.getContext("2d"), rg = g.createRadialGradient(128, 128, 0, 128, 128, 128);
    rg.addColorStop(0, rgba(col, 0.85)); rg.addColorStop(0.18, rgba(col, 0.45)); rg.addColorStop(1, rgba(col, 0));
    g.fillStyle = rg; g.fillRect(0, 0, 256, 256);
    SUNS[col] = c;
    return c;
  }

  World.prototype.projectCorners = function () {
    var W = this, M = W.M, CW = M.cols + 1, n = CW * (M.rows + 1), P = W.P;
    if (!W.cx || W.cx.length !== n) { W.cx = new Float32Array(n); W.cy = new Float32Array(n); W.cz = new Float32Array(n); }
    var fl = W.floodZ || 0;
    for (var i = 0; i < n; i++) {
      var x = i % CW, y = (i / CW) | 0, h = M.H[i];
      var z = h < 0 ? 0 : h;
      var s = proj(P, x, y, z);
      if (s) { W.cx[i] = s[0]; W.cy[i] = s[1]; W.cz[i] = s[2]; } else W.cz[i] = -1;
    }
    void fl;
  };

  World.prototype.cellColor = function (i, x, y, p, cz) {
    var W = this, M = W.M, ty = M.type[i], col = W.cellBase[i], n = W.cellN, ex = 1;
    var plan = W.plan;
    if (ty === 1) return null;
    var lotI = M.lotAt[i], lot = lotI >= 0 ? M.lots[lotI] : null;
    var built = 0, paved = 0;
    if (lot) { built = clamp((p - lot.born) / W.riseP, 0, 1); paved = sm(clamp((p - Math.max(lot.born, 0.44)) / 0.05, 0, 1)); }
    else if (ty === 2) { var rc = M.roadAt[i]; if (rc) { built = clamp((p - rc.p) / (W.riseP * 0.6), 0, 1); paved = sm(clamp((p - Math.max(rc.p, 0.46)) / 0.05, 0, 1)); } }
    else if (ty === 3) built = clamp((p - M.rail.p) / W.riseP, 0, 1);
    else if (ty === 4) { var pk = null; for (var k = 0; k < M.parks.length; k++) { var PK = M.parks[k]; if (x >= PK.x && x < PK.x + PK.w && y >= PK.y && y < PK.y + PK.h) pk = PK; } built = pk ? clamp((p - pk.p) / W.riseP, 0, 1) : 0; }
    if (plan) {
      col = M.cellH[i] > 0.9 ? PLAN.hill : PLAN.land;
      if (ty === 2) col = mixA(col, PLAN.road, built);
      else if (ty === 3) col = mixA(col, PLAN.rail, built);
      else if (ty === 4) col = mixA(col, PLAN.park, built);
      else if (lot) col = mixA(col, PLAN.built, built * 0.55);
      return W.shade(col, 0, 0, 1, cz);
    }
    if (built > 0) {
      var dirt = M.sand ? [196, 164, 114] : [150, 126, 90];
      if (ty === 2) { col = mixA(col, dirt, built); col = mixA(col, [96, 98, 108], paved); }
      else if (ty === 3) col = mixA(col, [104, 96, 90], built);
      else if (ty === 4) col = mixA(col, [80, 172, 72], built);
      else { col = mixA(col, dirt, built * 0.9); col = mixA(col, M.sand ? [188, 176, 158] : [168, 166, 160], paved); }
    }
    // district focus dimming + disaster tint
    if (W.focus && lot && lot.district !== W.focus.key) W.dimK = W.focus.k; else W.dimK = 0;
    var ds = W.disaster;
    if (ds && ds.k > 0) {
      var ddx = x + 0.5 - ds.cx, ddy = y + 0.5 - ds.cy, dd = Math.sqrt(ddx * ddx + ddy * ddy);
      if (dd < ds.r) {
        var inA = ds.k * clamp((ds.r - dd) / 1.5, 0, 1);
        if (ds.kind === "flood") col = mixA(col, [70, 110, 150], inA * 0.85);
        else if (ds.kind === "fire") col = mixA(col, ds.glow > 0 ? [200, 90, 40] : [54, 44, 40], inA * (0.6 + 0.4 * ds.glow));
        else col = mixA(col, [90, 84, 80], inA * 0.6);
      }
    }
    var c = W.shade(col, n[i * 3], n[i * 3 + 1], n[i * 3 + 2], cz, ex);
    W.dimK = 0;
    return c;
  };

  World.prototype.drawTerrain = function (t, p) {
    var W = this, M = W.M, ctx = W.ctx, cols = M.cols, rows = M.rows, CW = cols + 1;
    var n = cols * rows;
    if (!W.order || W.order.length !== n) { W.order = new Array(n); W.depth = new Float32Array(n); }
    var order = W.order, depth = W.depth, cz = W.cz, cx = W.cx, cy = W.cy;
    for (var i = 0; i < n; i++) {
      var x = i % cols, y = (i / cols) | 0, c0 = y * CW + x;
      var d = cz[c0] > 0 && cz[c0 + 1] > 0 && cz[c0 + CW] > 0 && cz[c0 + CW + 1] > 0 ? (cz[c0] + cz[c0 + 1] + cz[c0 + CW] + cz[c0 + CW + 1]) / 4 : -1;
      depth[i] = d; order[i] = i;
    }
    order.sort(function (a, b) { return depth[b] - depth[a]; });
    var L = W.L, wc = rgb(L.water), shallow = mixA(wc, M.sand ? [214, 196, 150] : [160, 196, 180], 0.35);
    var vx0 = W.vp.x - 4, vx1 = W.vp.x + W.vp.w + 4, vy0 = W.vp.y - 4, vy1 = W.vp.y + W.vp.h + 4;
    W.waterCells = [];
    var curFill = null;
    for (var k = 0; k < n; k++) {
      i = order[k];
      if (depth[i] < 0) continue;
      x = i % cols; y = (i / cols) | 0; c0 = y * CW + x;
      var ax = cx[c0], ay = cy[c0], bx = cx[c0 + 1], by = cy[c0 + 1], dx = cx[c0 + CW + 1], dy = cy[c0 + CW + 1], ex = cx[c0 + CW], ey = cy[c0 + CW];
      var minx = Math.min(ax, bx, dx, ex), maxx = Math.max(ax, bx, dx, ex), miny = Math.min(ay, by, dy, ey), maxy = Math.max(ay, by, dy, ey);
      if (maxx < vx0 || minx > vx1 || maxy < vy0 || miny > vy1) continue;
      var fill;
      if (M.type[i] === 1) {
        var hgt = M.cellH[i];
        var wcol = hgt > -0.25 ? mixA(wc, shallow, clamp((hgt + 0.25) / 0.25, 0, 1)) : wc;
        if (W.plan) wcol = PLAN.water;
        else {
          // sun glitter path: cells whose direction from the camera lines up with the sun
          var vx2 = x + 0.5 - W.P.C[0], vy2 = y + 0.5 - W.P.C[1], vl2 = Math.sqrt(vx2 * vx2 + vy2 * vy2) || 1;
          var dsun = (vx2 * W.sunXY[0] + vy2 * W.sunXY[1]) / vl2;
          if (dsun > 0.6) { var rf = Math.round(Math.pow((dsun - 0.6) / 0.4, 3) * (0.3 + 0.7 * (1 - W.sun[2])) * 6) / 6; if (rf > 0) wcol = mixA(wcol, W.sunRGB, rf * 0.75); }
        }
        var wv = 1 + 0.03 * Math.sin(t * 1.3 + ((x + y) >> 2) * 1.1);
        fill = W.shade(wcol, 0, 0, 1, Math.round(depth[i] / 2.5) * 2.5, wv);
        if (maxx - minx > 5) W.waterCells.push(i);
      } else fill = W.cellColor(i, x, y, p, depth[i]);
      // grow the quad by ~0.6px to hide seams
      var mx = (ax + bx + dx + ex) / 4, my = (ay + by + dy + ey) / 4, g = 0.7;
      // consecutive cells with the same fill share one path (painter order is preserved)
      if (fill !== curFill) { if (curFill) ctx.fill(); ctx.beginPath(); ctx.fillStyle = fill; curFill = fill; }
      ctx.moveTo(ax + (ax > mx ? g : -g), ay + (ay > my ? g : -g));
      ctx.lineTo(bx + (bx > mx ? g : -g), by + (by > my ? g : -g));
      ctx.lineTo(dx + (dx > mx ? g : -g), dy + (dy > my ? g : -g));
      ctx.lineTo(ex + (ex > mx ? g : -g), ey + (ey > my ? g : -g));
      ctx.closePath();
    }
    if (curFill) ctx.fill();
    // avenue lane lines (late eras)
    if (!W.plan && p > 0.5) {
      ctx.beginPath();
      M.avenues.forEach(function (av) {
        if (p < av.pFull + 0.02) return;
        var a = proj(W.P, av.a[0], av.a[1], av.z + 0.01), b = proj(W.P, av.b[0], av.b[1], av.z + 0.01);
        if (!a || !b) return;
        ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]);
      });
      ctx.strokeStyle = "rgba(255,240,200," + (0.25 * clamp((p - 0.5) / 0.1, 0, 1)).toFixed(2) + ")"; ctx.lineWidth = Math.max(0.6, u(1)); ctx.setLineDash([u(4), u(4)]); ctx.stroke(); ctx.setLineDash([]);
    }
  };

  World.prototype.drawWater = function (t) {
    var W = this, M = W.M, ctx = W.ctx, cells = W.waterCells, cols = M.cols, CW = cols + 1;
    if (!cells.length || W.plan) return;
    var L = W.L, a = 0.35 + 0.4 * (1 - L.stars);
    ctx.fillStyle = "rgba(255,255,255," + a.toFixed(2) + ")";
    ctx.beginPath();
    var count = 0, s = M.seed;
    for (var k = 0; k < cells.length && count < 420; k++) {
      var i = cells[k], x = i % cols, y = (i / cols) | 0, c0 = y * CW + x;
      var ax = W.cx[c0], ay = W.cy[c0], bx = W.cx[c0 + 1], by = W.cy[c0 + 1], ex = W.cx[c0 + CW], ey = W.cy[c0 + CW];
      var sz = Math.max(1, (Math.abs(bx - ax) + Math.abs(ey - ay)) * 0.02);
      for (var j = 0; j < 2; j++) {
        var hx = h2(x, y, s + j * 3), hy = h2(x + 5, y, s + j * 5);
        var ph = Math.sin(t * 2.2 + hx * 12.6 + hy * 7.1);
        if (ph < 0.45) continue;
        var fx = (hx + t * 0.03) % 1, fy = hy;
        var px = ax + (bx - ax) * fx + (ex - ax) * fy, py = ay + (by - ay) * fx + (ey - ay) * fy;
        ctx.rect(px, py, sz * (1 + ph), Math.max(0.8, sz * 0.5));
        count++;
      }
    }
    ctx.fill();
  };

  // ─── objects ───
  World.prototype.drawObjects = function (t, p) {
    var W = this, M = W.M, P = W.P, items = W.items || (W.items = []);
    items.length = 0;
    var lots = M.lots, rise = W.riseP, i, lot;
    // shadows pass + collect drawables
    var dsa = W.disaster;
    for (i = 0; i < lots.length; i++) {
      lot = lots[i];
      var ls = lot.landmark ? null : W.lotState(lot, p);
      lot._s = ls;
      if (ls) {
        if (dsa) W.applyDisaster(lot, ls, t);
        if (ls.h > 0.004) {
          var d = (lot.cx - P.C[0]) * P.F[0] + (lot.cy - P.C[1]) * P.F[1] + (lot.z0 - P.C[2]) * P.F[2];
          if (d > P.near) items.push({ d: d, k: 0, o: lot });
        }
      }
      if (lot.streetTree && p > lot.streetTree.born && !W.plan) {
        var sd = (lot.streetTree.x - P.C[0]) * P.F[0] + (lot.streetTree.y - P.C[1]) * P.F[1] + (lot.z0 - P.C[2]) * P.F[2];
        if (sd > P.near) items.push({ d: sd, k: 5, o: lot });
      }
    }
    M.landmarks.forEach(function (L) {
      var q = L.qFn ? L.qFn(t, p) : prog(p, L.p, rise * 1.6, "outCubic");
      if (p > L.until) q *= 1 - prog(p, L.until, rise, "inCubic");
      L._q = q;
      if (q <= 0.001) return;
      var d = (L.x - P.C[0]) * P.F[0] + (L.y - P.C[1]) * P.F[1] + (L.z0 - P.C[2]) * P.F[2];
      if (d > P.near) items.push({ d: d, k: 1, o: L });
    });
    M.bridges.forEach(function (B) {
      var q = B.qFn ? B.qFn(t, p) : prog(p, B.p, rise * 2.2, "inOutCubic");
      B._q = q;
      if (q <= 0.001) return;
      var mx = (B.a[0] + B.b[0]) / 2, my = (B.a[1] + B.b[1]) / 2;
      var d = (mx - P.C[0]) * P.F[0] + (my - P.C[1]) * P.F[1] - P.C[2] * P.F[2];
      if (d > P.near) items.push({ d: d + 0.4, k: 2, o: B });
    });
    if (!W.plan) M.treeClusters.forEach(function (c) {
      var s = c.born > 0 ? prog(p, c.born, rise * 2, "outCubic") : 1;
      if (c.die < 9) s *= 1 - prog(p, c.die, rise * 0.9, "inCubic");
      if (W.disaster && W.disaster.kind === "fire") { var ddx = c.x - W.disaster.cx, ddy = c.y - W.disaster.cy; if (ddx * ddx + ddy * ddy < W.disaster.r * W.disaster.r) s *= 1 - W.disaster.k * 0.9 * (1 - W.disaster.reb); }
      c._s = s;
      if (s <= 0.01) return;
      var d = (c.x - P.C[0]) * P.F[0] + (c.y - P.C[1]) * P.F[1] + (c.z - P.C[2]) * P.F[2];
      if (d > P.near) items.push({ d: d, k: 3, o: c });
    });
    if (W.life && !W.plan) W.collectLife(t, p, items);
    W.extras.forEach(function (ex) { var d = ex.depth ? ex.depth(W, t) : 0; items.push({ d: d, k: 9, o: ex }); });
    // shadows first (on the ground), then everything depth-sorted
    for (i = 0; i < items.length; i++) {
      var it = items[i];
      if (it.k === 0) { var s0 = it.o._s; if (s0.h > 0.06) W.shadow(it.o.fp, it.o.z0, s0.h); }
      else if (it.k === 1 && it.o._q > 0.05 && it.o.h > 0.25) W.shadow(it.o.fp, it.o.z0, it.o.h * it.o._q * 0.8);
    }
    items.sort(function (a, b) { return b.d - a.d; });
    for (i = 0; i < items.length; i++) {
      it = items[i];
      switch (it.k) {
        case 0: W.drawLot(it.o, t, p); break;
        case 1: W.drawLandmark(it.o, t, p); break;
        case 2: W.drawBridge(it.o, t, p); break;
        case 3: W.drawTrees(it.o, t, p); break;
        case 4: it.o.draw(W, t); break;
        case 5: W.drawTree(lot = it.o, lot.streetTree.x, lot.streetTree.y, lot.z0, 0.1, 0.07, 0.3, prog(p, lot.streetTree.born, rise * 3, "outCubic"), false); break;
        case 9: it.o.draw(W, W.ctx, t, W.state); break;
      }
    }
  };

  World.prototype.applyDisaster = function (lot, ls, t) {
    var ds = this.disaster;
    var ddx = lot.cx - ds.cx, ddy = lot.cy - ds.cy, dd = Math.sqrt(ddx * ddx + ddy * ddy);
    if (dd > ds.r) return;
    var inA = clamp((ds.r - dd) / 1.2, 0, 1) * (0.6 + 0.4 * h01(lot.seed * 50));
    var k = ds.k * inA, reb = ds.reb;
    ls.dmg = k;
    if (reb > 0 && ds.kRaw * inA > 0.25) {
      // rebuild: taller, newer look
      var nb = ds.look(lot), rq = V.ease.outCubic(clamp((reb - h01(lot.seed * 31) * 0.5) / 0.5, 0, 1));
      ls.stage = nb; ls.h = nb.h * rq; ls.dmg = k * (1 - rq);
      if (rq <= 0) { ls.h = 0; }
      return;
    }
    if (ds.kind === "fire" || ds.kind === "quake") ls.h *= 1 - 0.9 * k;
    else if (ds.kind === "storm") ls.h *= 1 - 0.45 * k;
  };

  World.prototype.drawLot = function (lot, t, p) {
    var W = this, ls = lot._s, stg = ls.stage, wall = stg.wall, roof = stg.roof;
    if (ls.dmg > 0) {
      var ds = W.disaster, ch = ds.kind === "flood" ? [80, 92, 110] : ds.kind === "fire" ? [52, 42, 40] : [96, 92, 90];
      wall = mixA(wall, ch, ls.dmg); roof = mixA(roof, ch, ls.dmg);
      if (ds.kind === "fire" && ds.glow > 0) { wall = mixA(wall, [240, 120, 50], ls.dmg * ds.glow * 0.8); roof = mixA(roof, [250, 150, 60], ls.dmg * ds.glow * 0.8); }
    }
    W.dimK = W.focus && lot.district !== W.focus.key ? W.focus.k : 0;
    var extra = W.focus && lot.district === W.focus.key && W.focus.glow > 0 ? 1 + 0.18 * W.focus.glow : 1;
    var kind = stg.kind, windows = kind !== "hut" && kind !== "timber" && kind !== "warehouse";
    var r, bo = { cx: lot.cx, cy: lot.cy, pitched: stg.pitched && !ls.sinking, windows: windows, kind: kind, seed: lot.seed, extra: extra };
    if (stg.split && !W.plan && ls.h > 0.01) {
      // two packed buildings per lot (row houses along the street)
      var fp = lot.fp, g = 0.02, m01 = [(fp[0][0] + fp[1][0]) / 2, (fp[0][1] + fp[1][1]) / 2], m32 = [(fp[3][0] + fp[2][0]) / 2, (fp[3][1] + fp[2][1]) / 2];
      var ux = (fp[1][0] - fp[0][0]), uy = (fp[1][1] - fp[0][1]), ul = Math.hypot(ux, uy) || 1; ux = ux / ul * g; uy = uy / ul * g;
      var fa = [fp[0], [m01[0] - ux, m01[1] - uy], [m32[0] - ux, m32[1] - uy], fp[3]], fb = [[m01[0] + ux, m01[1] + uy], fp[1], fp[2], [m32[0] + ux, m32[1] + uy]];
      var ca = [(fa[0][0] + fa[2][0]) / 2, (fa[0][1] + fa[2][1]) / 2], cb = [(fb[0][0] + fb[2][0]) / 2, (fb[0][1] + fb[2][1]) / 2];
      var wall2 = mixA(wall, [255, 250, 240], 0.08), roof2 = mixA(roof, [40, 30, 30], 0.12);
      var d1 = (ca[0] - W.P.C[0]) * W.P.F[0] + (ca[1] - W.P.C[1]) * W.P.F[1], d2 = (cb[0] - W.P.C[0]) * W.P.F[0] + (cb[1] - W.P.C[1]) * W.P.F[1];
      var oa = { cx: ca[0], cy: ca[1], pitched: bo.pitched, windows: windows, kind: kind, seed: lot.seed, extra: extra }, ob = { cx: cb[0], cy: cb[1], pitched: bo.pitched, windows: windows, kind: kind, seed: lot.seed + 0.37, extra: extra };
      if (d1 > d2) { W.box(fa, lot.z0, ls.h, wall, roof, oa); r = W.box(fb, lot.z0, ls.h * stg.h2, wall2, roof2, ob); }
      else { W.box(fb, lot.z0, ls.h * stg.h2, wall2, roof2, ob); r = W.box(fa, lot.z0, ls.h, wall, roof, oa); }
    } else if (stg.profile && !W.plan && ls.h > 0.3) {
      var pf = stg.profile, hh = ls.h, fp0 = lot.fp;
      if (pf === 1) { // setback
        W.box(fp0, lot.z0, hh * 0.42, wall, roof, bo);
        var fs = fp0.map(function (q) { return [lot.cx + (q[0] - lot.cx) * 0.68, lot.cy + (q[1] - lot.cy) * 0.68]; });
        r = W.box(fs, lot.z0 + hh * 0.42, hh * 0.58, wall, roof, { cx: lot.cx, cy: lot.cy, windows: windows, kind: kind, seed: lot.seed + 0.5, extra: extra });
      } else if (pf === 2) { // spire
        r = W.box(fp0, lot.z0, hh * 0.9, wall, roof, bo);
        W.pyramid(fp0.map(function (q) { return [lot.cx + (q[0] - lot.cx) * 0.3, lot.cy + (q[1] - lot.cy) * 0.3]; }), lot.z0 + hh * 0.9, hh * 0.22, mixA(wall, [220, 226, 236], 0.5));
      } else { // tapered crown
        r = W.box(fp0, lot.z0, hh * 0.84, wall, roof, bo);
        W.frustum(fp0, lot.z0 + hh * 0.84, hh * 0.16, 0.5, wall, roof, { extra: extra });
      }
    } else r = W.box(lot.fp, lot.z0, ls.h, wall, roof, bo);
    if (r && kind === "factory" && ls.h > stg.h * 0.6 && !W.plan) {
      // chimney + smoke
      var cf = sq(lot.fp[0][0] + 0.09, lot.fp[0][1] + 0.09, 0.08);
      var chH = ls.h * 1.8;
      W.box(cf, lot.z0, chH, [96, 80, 72], [70, 58, 52], { cx: cf[0][0] + 0.04, cy: cf[0][1] + 0.04 });
      if (p > 0.58 && p < 0.86 && lot.seed < 0.55 && r.sh > 6) W.smoke(cf[0][0] + 0.04, cf[0][1] + 0.04, lot.z0 + chH, t, { seed: lot.seed, alpha: 0.32 * clamp((0.86 - p) / 0.06, 0, 1), rgb: [120, 116, 112] });
    }
    if (r && ls.dmg > 0.2 && W.disaster.kind === "fire" && W.disaster.glow > 0.05 && lot.seed < 0.35) W.smoke(lot.cx, lot.cy, lot.z0 + ls.h, t, { seed: lot.seed, alpha: 0.5 * W.disaster.glow, rgb: [60, 52, 50], size: 0.35 });
    if (W.focus && lot.district === W.focus.key && W.focus.k > 0 && r && r.top && !W.plan) {
      var ctx = W.ctx; ctx.strokeStyle = rgba(W.focus.color, 0.75 * W.focus.k); ctx.lineWidth = Math.max(0.8, u(1.2));
      ctx.beginPath(); ctx.moveTo(r.top[0][0], r.top[0][1]); for (var i = 1; i < 4; i++) ctx.lineTo(r.top[i][0], r.top[i][1]); ctx.closePath(); ctx.stroke();
    }
    W.dimK = 0;
  };

  World.prototype.smoke = function (x, y, z, t, o) {
    var W = this, ctx = W.ctx, P = W.P, n = 5, s = o.seed || 0, size = o.size || 0.16;
    var wind = [0.35, 0.18];
    for (var i = 0; i < n; i++) {
      var age = (t * 0.28 + i / n + s) % 1;
      var px = x + wind[0] * age * 1.6 + 0.08 * Math.sin(age * 9 + s * 7), py = y + wind[1] * age * 1.6, pz = z + age * 0.9;
      var sp = proj(P, px, py, pz);
      if (!sp) continue;
      var R = (size + age * 0.5) * P.f / sp[2];
      if (R < 0.7) continue;
      ctx.beginPath(); ctx.arc(sp[0], sp[1], R, 0, 6.2832);
      var rgbv = o.rgb || [150, 148, 146], fa = W.fogAmt(sp[2]);
      ctx.fillStyle = "rgba(" + ((rgbv[0] + (W.fogRGB[0] - rgbv[0]) * fa) | 0) + "," + ((rgbv[1] + (W.fogRGB[1] - rgbv[1]) * fa) | 0) + "," + ((rgbv[2] + (W.fogRGB[2] - rgbv[2]) * fa) | 0) + "," + (o.alpha * (1 - age) * (0.4 + 0.6 * age)).toFixed(2) + ")";
      ctx.fill();
    }
  };

  World.prototype.drawTree = function (owner, x, y, z, r, hgt, k, s, hill) {
    var W = this, P = W.P, ctx = W.ctx;
    if (s <= 0.01) return;
    var top = proj(P, x, y, z + hgt * s + r * s * 0.6), base = proj(P, x, y, z);
    if (!top || !base) return;
    var K = P.f / top[2], R = r * s * K;
    if (R < 0.5) { if (R > 0.2) { ctx.fillStyle = W.shade(GREENS[0], 0, 0, 1, top[2]); ctx.fillRect(top[0] - 0.5, top[1] - 0.5, 1.2, 1.2); } return; }
    var g = W.M.sand ? DESERT_GREENS[(k * 3) | 0] : GREENS[(k * 4) | 0];
    if (hill) g = [g[0] * 0.8, g[1] * 0.85, g[2] * 0.8];
    if (R > 4) { ctx.strokeStyle = W.shade([96, 70, 48], 0, 0, 1, top[2]); ctx.lineWidth = Math.max(0.8, R * 0.22); ctx.beginPath(); ctx.moveTo(base[0], base[1]); ctx.lineTo(top[0], top[1]); ctx.stroke(); }
    ctx.beginPath(); ctx.arc(top[0], top[1], R, 0, 6.2832);
    ctx.fillStyle = W.shade(g, 0.2, -0.3, 0.93, top[2]); ctx.fill();
    if (R > 5.5) { ctx.beginPath(); ctx.arc(top[0] - R * 0.25, top[1] - R * 0.3, R * 0.5, 0, 6.2832); ctx.fillStyle = "rgba(255,255,230,0.14)"; ctx.fill(); }
  };
  World.prototype.drawTrees = function (c, t, p) {
    var s = c._s, trees = c.trees;
    for (var i = 0; i < trees.length; i++) { var tr = trees[i]; this.drawTree(c, tr.x, tr.y, tr.z, tr.r, tr.hgt, tr.k, s, c.hill); }
  };

  // ─── landmarks ───
  var STONE = [196, 186, 166], STONE_D = [150, 140, 122], GLASS = [128, 186, 226], GLASS_T = [205, 226, 240], STEEL = [150, 156, 168], WOOD = [146, 112, 78];
  World.prototype.drawLandmark = function (L, t, p) {
    var W = this, q = L._q, e = V.ease.outCubic(q), x = L.x, y = L.y, z0 = L.z0, k = L.kind, o = { cx: x, cy: y, windows: true, kind: k, seed: L.seed };
    var st = W.M.style;
    var wallC = L.wall || null;
    if (W.focus) W.dimK = L.lot && L.lot.district !== W.focus.key ? W.focus.k : 0;
    switch (k) {
      case "fort": case "citadel": {
        var wh = (k === "fort" ? 0.16 : 0.3) * e, col = k === "fort" ? WOOD : STONE_D;
        W.box(sq(x, y, 0.92), z0, wh, col, mixA(col, [80, 70, 60], 0.3), o);
        for (var i = 0; i < 4; i++) { var cxx = x + (i % 2 ? 0.4 : -0.4), cyy = y + (i < 2 ? -0.4 : 0.4); W.box(sq(cxx, cyy, 0.18), z0, wh * 1.5, col, mixA(col, [60, 50, 40], 0.3), { cx: cxx, cy: cyy }); }
        if (k === "citadel") W.box(sq(x, y, 0.4), z0 + wh, 0.25 * e, STONE, [120, 70, 60], { cx: x, cy: y, pitched: true });
        break;
      }
      case "mission": {
        W.box(sq(x, y, 0.8, 0.6), z0, 0.26 * e, [222, 196, 150], [184, 120, 86], { cx: x, cy: y, pitched: true });
        W.box(sq(x - 0.28, y - 0.1, 0.2), z0, 0.5 * e, [222, 196, 150], [184, 120, 86], { cx: x - 0.28, cy: y - 0.1 });
        break;
      }
      case "cathedral": case "church": case "temple": {
        var big = k === "cathedral", bh = (big ? 0.5 : 0.32) * e, bw = big ? 0.5 : 0.42, bl = big ? 0.9 : 0.72;
        var cw = wallC || (k === "temple" ? [210, 196, 170] : st.stone ? rgb(pick(V.makeRand(3), st.stone.wall)) : STONE), rc = k === "temple" ? [86, 96, 112] : [120, 80, 70];
        W.box(sq(x + 0.1, y, bl, bw), z0, bh, cw, rc, { cx: x + 0.1, cy: y, pitched: true, windows: true, kind: k, seed: L.seed });
        if (k === "temple") { W.box(sq(x + 0.1, y, bl + 0.2, bw + 0.2), z0 + bh * 0.55, 0.02, rc, rc, { cx: x + 0.1, cy: y }); W.box(sq(x + 0.1, y, 0.3), z0 + bh + 0.1, 0.18 * e, cw, rc, { cx: x + 0.1, cy: y, pitched: true }); }
        else {
          var tw = big ? 0.24 : 0.2, th = (big ? 1.0 : 0.72) * e;
          W.box(sq(x - bl / 2 + tw / 2 + 0.1, y, tw), z0, th, cw, mixA(cw, [60, 50, 40], 0.3), { cx: x - bl / 2 + tw / 2 + 0.1, cy: y, windows: true, kind: k, seed: L.seed });
          W.pyramid(sq(x - bl / 2 + tw / 2 + 0.1, y, tw), z0 + th, (big ? 0.6 : 0.42) * e, mixA(rc, [40, 30, 30], 0.2));
        }
        break;
      }
      case "pagoda": {
        var tiers = 4, zz = z0;
        for (i = 0; i < tiers; i++) {
          var ww = 0.74 - i * 0.14, hh = 0.2 * e;
          W.box(sq(x, y, ww), zz, hh, [172, 92, 70], [172, 92, 70], { cx: x, cy: y });
          W.box(sq(x, y, ww + 0.22), zz + hh, 0.045 * e, [68, 80, 96], [80, 92, 108], { cx: x, cy: y });
          zz += hh + 0.045 * e;
        }
        W.pyramid(sq(x, y, 0.22), zz, 0.2 * e, [80, 92, 108]);
        break;
      }
      case "townhall": case "cityhall": {
        var dh = (k === "cityhall" ? 0.5 : 0.42) * e, dc = wallC || [226, 218, 200];
        W.box(sq(x, y, 0.88, 0.74), z0, dh, dc, [190, 184, 170], { cx: x, cy: y, windows: true, kind: k, seed: L.seed });
        W.box(sq(x, y, 0.42), z0 + dh, 0.12 * e, dc, [200, 194, 182], { cx: x, cy: y });
        W.ball(x, y, z0 + dh + 0.12 * e, 0.22 * e, k === "cityhall" ? [120, 160, 150] : [86, 120, 110]);
        W.line3([x, y, z0 + dh + 0.3 * e], [x, y, z0 + dh + 0.46 * e], "rgba(80,80,80,0.8)", Math.max(1, u(1.2)));
        break;
      }
      case "station": case "depot": {
        var sc = wallC || (k === "station" ? [206, 190, 170] : [150, 110, 84]);
        W.box(sq(x, y, 0.92, 0.6), z0, 0.3 * e, sc, [110, 104, 100], { cx: x, cy: y, pitched: true, windows: true, kind: k, seed: L.seed });
        if (k === "station") { W.box(sq(x + 0.34, y - 0.12, 0.16), z0, 0.62 * e, sc, [90, 84, 82], { cx: x + 0.34, cy: y - 0.12 }); W.pyramid(sq(x + 0.34, y - 0.12, 0.16), z0 + 0.62 * e, 0.16 * e, [70, 64, 62]); }
        else { W.box(sq(x - 0.3, y + 0.25, 0.16), z0, 0.35 * e, [100, 88, 80], [80, 70, 64], { cx: x - 0.3, cy: y + 0.25 }); }
        break;
      }
      case "watertower": {
        var legs = [[x - 0.14, y - 0.14], [x + 0.14, y - 0.14], [x + 0.14, y + 0.14], [x - 0.14, y + 0.14]];
        legs.forEach(function (l) { W.line3([l[0], l[1], z0], [l[0] * 0.3 + x * 0.7, l[1] * 0.3 + y * 0.7, z0 + 0.6 * e], "rgba(80,74,70,0.9)", Math.max(1, u(1.4))); });
        W.box(sq(x, y, 0.3), z0 + 0.6 * e, 0.28 * e, [196, 180, 150], [150, 140, 120], { cx: x, cy: y });
        W.pyramid(sq(x, y, 0.3), z0 + 0.88 * e, 0.1 * e, [120, 110, 96]);
        break;
      }
      case "cranes": {
        var ch = 0.8 * e, ang = t * 0.12 + L.seed * 6;
        W.box(sq(x, y, 0.1), z0, ch, [200, 80, 60], [200, 80, 60], { cx: x, cy: y });
        var jx = Math.cos(ang) * 0.5, jy = Math.sin(ang) * 0.5;
        W.line3([x - jx * 0.4, y - jy * 0.4, z0 + ch], [x + jx, y + jy, z0 + ch], W.shade([200, 80, 60], 0, 0, 1, W.P.dist), Math.max(1.2, u(2)));
        W.line3([x + jx * 0.7, y + jy * 0.7, z0 + ch], [x + jx * 0.7, y + jy * 0.7, z0 + ch * (0.3 + 0.25 * Math.sin(t * 0.7 + L.seed))], "rgba(60,60,60,0.8)", 1);
        break;
      }
      case "earlytower": case "spire": {
        var ec = wallC || [212, 200, 180], er = [168, 158, 140], H = (k === "spire" ? 3.8 : 3.2) * e;
        W.box(sq(x, y, 0.84), z0, H * 0.28, ec, er, { cx: x, cy: y, windows: true, kind: "early", seed: L.seed });
        W.box(sq(x, y, 0.62), z0 + H * 0.28, H * 0.34, ec, er, { cx: x, cy: y, windows: true, kind: "early", seed: L.seed + 0.1 });
        W.box(sq(x, y, 0.42), z0 + H * 0.62, H * 0.3, ec, er, { cx: x, cy: y, windows: true, kind: "early", seed: L.seed + 0.2 });
        W.frustum(sq(x, y, 0.42), z0 + H * 0.92, H * 0.08, 0.4, ec, er);
        W.pyramid(sq(x, y, 0.17), z0 + H, (k === "spire" ? 0.7 : 0.35) * e, STEEL);
        break;
      }
      case "tvtower": {
        var TH = 4.6 * e;
        W.frustum(sq(x, y, 0.26), z0, TH * 0.72, 0.4, [200, 200, 204], [180, 180, 184]);
        W.ball(x, y, z0 + TH * 0.74, 0.3 * e, [206, 214, 224]);
        W.box(sq(x, y, 0.07), z0 + TH * 0.74, TH * 0.26, [190, 190, 194], [170, 170, 174], { cx: x, cy: y });
        break;
      }
      case "supertall": case "tower": {
        var SH = (k === "supertall" ? 6.4 : 4.2) * e, gw = wallC || GLASS;
        W.box(sq(x, y, 0.72), z0, SH * 0.84, gw, GLASS_T, { cx: x, cy: y, windows: true, kind: "supertall", seed: L.seed });
        W.frustum(sq(x, y, 0.72), z0 + SH * 0.84, SH * 0.16, 0.42, gw, GLASS_T);
        W.line3([x, y, z0 + SH], [x, y, z0 + SH * 1.12], "rgba(220,225,235,0.9)", Math.max(1, u(1.5)));
        break;
      }
      case "dome": {
        var dw = wallC || [224, 214, 196];
        W.box(sq(x, y, 0.92, 0.8), z0, 0.42 * e, dw, [196, 190, 176], { cx: x, cy: y, windows: true, kind: k, seed: L.seed });
        W.box(sq(x, y, 0.56), z0 + 0.42 * e, 0.14 * e, dw, [200, 194, 182], { cx: x, cy: y });
        W.ball(x, y, z0 + 0.56 * e, 0.34 * e, [110, 150, 142]);
        break;
      }
      case "arch": {
        var ac = wallC || STONE;
        W.box(sq(x - 0.3, y, 0.22, 0.5), z0, 1.0 * e, ac, ac, { cx: x - 0.3, cy: y });
        W.box(sq(x + 0.3, y, 0.22, 0.5), z0, 1.0 * e, ac, ac, { cx: x + 0.3, cy: y });
        if (e > 0.6) W.box(sq(x, y, 0.82, 0.5), z0 + 1.0 * e, 0.4 * e, ac, mixA(ac, [255, 255, 255], 0.1), { cx: x, cy: y });
        break;
      }
      case "obelisk": {
        W.box(sq(x, y, 0.4), z0, 0.12 * e, STONE, STONE, { cx: x, cy: y });
        var ot = W.frustum(sq(x, y, 0.22), z0 + 0.12 * e, 2.0 * e, 0.55, wallC || [214, 206, 190], [214, 206, 190]);
        if (ot) W.pyramid(ot.map(function (q2) { return [q2[0], q2[1]]; }), z0 + 2.12 * e, 0.16 * e, [230, 222, 200]);
        break;
      }
      case "stadium": {
        var swc = wallC || [214, 214, 210];
        W.box(sq(x, y, 0.96, 0.78), z0, 0.42 * e, swc, [160, 160, 158], { cx: x, cy: y, windows: true, kind: k, seed: L.seed });
        W.face([[x - 0.34, y - 0.22, z0 + 0.42 * e + 0.001], [x + 0.34, y - 0.22, z0 + 0.42 * e + 0.001], [x + 0.34, y + 0.22, z0 + 0.42 * e + 0.001], [x - 0.34, y + 0.22, z0 + 0.42 * e + 0.001]], [92, 170, 86], true);
        break;
      }
      case "ferris": {
        var R = 0.6 * e, cz = z0 + R + 0.12, ctx = W.ctx, pts = [];
        for (i = 0; i < 20; i++) { var a = (i / 20) * 6.2832 + t * 0.25; var pp = proj(W.P, x + Math.cos(a) * R, y, cz + Math.sin(a) * R); if (pp) pts.push(pp); }
        var c0 = proj(W.P, x, y, cz);
        if (pts.length > 10 && c0) {
          W.line3([x - 0.25, y, z0], [x, y, cz], "rgba(90,90,100,0.9)", Math.max(1, u(1.4))); W.line3([x + 0.25, y, z0], [x, y, cz], "rgba(90,90,100,0.9)", Math.max(1, u(1.4)));
          ctx.beginPath(); for (i = 0; i < pts.length; i++) { if (i) ctx.lineTo(pts[i][0], pts[i][1]); else ctx.moveTo(pts[i][0], pts[i][1]); } ctx.closePath();
          ctx.strokeStyle = "rgba(230,80,70,0.95)"; ctx.lineWidth = Math.max(1, u(2)); ctx.stroke();
          ctx.beginPath(); for (i = 0; i < pts.length; i += 2) { ctx.moveTo(c0[0], c0[1]); ctx.lineTo(pts[i][0], pts[i][1]); } ctx.strokeStyle = "rgba(200,200,210,0.7)"; ctx.lineWidth = 1; ctx.stroke();
          ctx.fillStyle = "rgba(255,220,120,0.95)"; for (i = 0; i < pts.length; i += 2) { ctx.beginPath(); ctx.arc(pts[i][0], pts[i][1], Math.max(1, u(2.5)), 0, 6.2832); ctx.fill(); }
        }
        break;
      }
      default: W.box(sq(x, y, 0.8), z0, (L.h || 1) * e, wallC || STONE, STONE_D, o);
    }
    W.dimK = 0;
  };

  // ─── bridges ───
  World.prototype.drawBridge = function (B, t, p) {
    var W = this, q = B._q, a = B.a, b = B.b, dx = b[0] - a[0], dy = b[1] - a[1], len = Math.hypot(dx, dy) || 1;
    var ux = dx / len, uy = dy / len, px = -uy * 0.24, py = ux * 0.24;
    var deckZ = 0.14, e = V.ease.inOutCubic(q), L = len * e, deck = [140, 136, 132], steel = B.kind === "suspension" ? [150, 70, 60] : [98, 104, 112];
    if (B.kind === "truss" || B.kind === "suspension") {
      // towers / piers first
      var tn = B.kind === "suspension" ? 2 : Math.max(2, Math.round(len / 3));
      for (var i = 0; i < tn; i++) {
        var f = B.kind === "suspension" ? 0.25 + 0.5 * i : (i + 0.5) / tn;
        var tx = a[0] + ux * len * f, ty = a[1] + uy * len * f;
        if (len * f > L + 0.5) continue;
        var th = B.kind === "suspension" ? 1.1 * e : deckZ;
        W.box(sq(tx, ty, 0.16, 0.5).map(function (q2) { return [tx + (q2[0] - tx) * ux - (q2[1] - ty) * uy, ty + (q2[0] - tx) * uy + (q2[1] - ty) * ux]; }), 0, th, steel, steel, { cx: tx, cy: ty });
      }
    }
    // deck
    var d0 = [a[0] - px, a[1] - py], d1 = [a[0] + px, a[1] + py], d2 = [a[0] + ux * L + px, a[1] + uy * L + py], d3 = [a[0] + ux * L - px, a[1] + uy * L - py];
    W.box([d0, d1, d2, d3], deckZ - 0.06, 0.06, deck, [112, 110, 108], { cx: a[0] + ux * L / 2, cy: a[1] + uy * L / 2 });
    if (B.kind === "arch") {
      var n = Math.max(2, Math.round(len / 2.2));
      for (i = 0; i < n; i++) {
        var f0 = i / n, f1 = (i + 1) / n;
        if (len * f1 > L + 0.01) break;
        var mx = a[0] + ux * len * (f0 + f1) / 2, my = a[1] + uy * len * (f0 + f1) / 2;
        W.box(sq(mx, my, 0.12, 0.5).map(function (q2) { return [mx + (q2[0] - mx) * ux - (q2[1] - my) * uy, my + (q2[0] - mx) * uy + (q2[1] - my) * ux]; }), 0, deckZ - 0.06, STONE_D, STONE_D, { cx: mx, cy: my });
      }
    }
    if (B.kind === "suspension" && e > 0.3) {
      var ctx = W.ctx, t1 = [a[0] + ux * len * 0.25, a[1] + uy * len * 0.25, 1.1 * e], t2 = [a[0] + ux * len * 0.75, a[1] + uy * len * 0.75, 1.1 * e];
      var col = "rgba(70,60,60,0.85)";
      ctx.lineWidth = Math.max(1, u(1.3));
      [-1, 1].forEach(function (sgn) {
        var ox = px * sgn * 0.8, oy = py * sgn * 0.8;
        var pts = [[a[0] + ox, a[1] + oy, deckZ], [t1[0] + ox, t1[1] + oy, t1[2]], [a[0] + ux * len * 0.5 + ox, a[1] + uy * len * 0.5 + oy, deckZ + 0.1], [t2[0] + ox, t2[1] + oy, t2[2]], [b[0] + ox, b[1] + oy, deckZ]];
        for (var k = 0; k + 1 < pts.length; k++) {
          var pa = pts[k], pb = pts[k + 1];
          if (Math.hypot(pb[0] - a[0], pb[1] - a[1]) > L + 0.3) break;
          // sagging cable approximated by 2 segments
          var mid = [(pa[0] + pb[0]) / 2, (pa[1] + pb[1]) / 2, (pa[2] + pb[2]) / 2 - 0.12];
          W.line3(pa, mid, col, ctx.lineWidth); W.line3(mid, pb, col, ctx.lineWidth);
        }
      });
    }
    // traffic
    if (p > B.p + W.riseP * 3 && e >= 1) {
      for (i = 0; i < 3; i++) {
        var s = ((t * 0.09 * (1 + i * 0.15) + i * 0.33 + B.seed) % 1), side = i % 2 ? 0.1 : -0.1, cpx = a[0] + ux * len * (i % 2 ? s : 1 - s) + px * side * 2, cpy = a[1] + uy * len * (i % 2 ? s : 1 - s) + py * side * 2;
        W.car(cpx, cpy, deckZ + 0.01, ux, uy, i);
      }
    }
  };

  // ─── life: boats, cars, trains ───
  var CAR_COLS = [[230, 70, 60], [240, 240, 240], [60, 100, 200], [240, 200, 60], [40, 40, 48], [90, 180, 140]];
  World.prototype.car = function (x, y, z, ux, uy, i) {
    var W = this, c = CAR_COLS[i % CAR_COLS.length], hx = ux * 0.09, hy = uy * 0.09, wx = -uy * 0.045, wy = ux * 0.045;
    var fp = [[x - hx - wx, y - hy - wy], [x + hx - wx, y + hy - wy], [x + hx + wx, y + hy + wy], [x - hx + wx, y - hy + wy]];
    W.box(fp, z, 0.05, c, mixA(c, [255, 255, 255], 0.3), { cx: x, cy: y });
  };
  function pathAt(pts, s) {
    var tot = 0, segs = [];
    for (var i = 0; i + 1 < pts.length; i++) { var L = Math.hypot(pts[i + 1][0] - pts[i][0], pts[i + 1][1] - pts[i][1]); segs.push(L); tot += L; }
    var d = ((s % 1) + 1) % 1 * tot;
    for (i = 0; i < segs.length; i++) {
      if (d <= segs[i] || i === segs.length - 1) { var f = segs[i] ? d / segs[i] : 0; return { x: lerp(pts[i][0], pts[i + 1][0], f), y: lerp(pts[i][1], pts[i + 1][1], f), ux: (pts[i + 1][0] - pts[i][0]) / (segs[i] || 1), uy: (pts[i + 1][1] - pts[i][1]) / (segs[i] || 1) }; }
      d -= segs[i];
    }
    return { x: pts[0][0], y: pts[0][1], ux: 1, uy: 0 };
  }
  World.prototype.collectLife = function (t, p, items) {
    var W = this, M = W.M, P = W.P;
    function push(x, y, z, draw) { var d = (x - P.C[0]) * P.F[0] + (y - P.C[1]) * P.F[1] + (z - P.C[2]) * P.F[2]; if (d > P.near) items.push({ d: d, k: 4, o: { draw: draw } }); }
    // boats
    if (p > 0.08) {
      var paths = [M.waterPath]; if (M.waterPath2) paths.push(M.waterPath2);
      paths.forEach(function (path, pi) {
        if (!path || path.length < 2) return;
        var nb = p > 0.6 ? 3 : 2;
        for (var i = 0; i < nb; i++) {
          var dir = i % 2 ? -1 : 1, s = (t * 0.012 * (0.8 + i * 0.3) * dir + i * 0.37 + pi * 0.5 + M.seed * 0.01);
          var pos = pathAt(path, s);
          if (M.isWater(Math.floor(pos.x), Math.floor(pos.y)) === false) continue;
          (function (pos, i, dir) { push(pos.x, pos.y, 0, function (W2) { W2.boat(pos.x, pos.y, pos.ux * dir, pos.uy * dir, p, i, t); }); })(pos, i, dir);
        }
      });
    }
    // cars on avenues
    if (p > 0.62) {
      var alpha = clamp((p - 0.62) / 0.06, 0, 1);
      M.avenues.forEach(function (av, ai) {
        if (p < av.pFull + 0.03 || ai > 5) return;
        var nx = av.b[0] - av.a[0], ny = av.b[1] - av.a[1], len = Math.hypot(nx, ny) || 1; nx /= len; ny /= len;
        var n = Math.min(4, Math.round(av.len / 3));
        for (var i = 0; i < n; i++) {
          var dir = i % 2 ? 1 : -1, s = ((t * 0.035 * (1 + i * 0.2) * dir + i / n + av.len * 0.01) % 1 + 1) % 1, side = dir * 0.14;
          var x = av.a[0] + nx * len * s - ny * side, y = av.a[1] + ny * len * s + nx * side;
          (function (x, y, i, dir) { push(x, y, av.z, function (W2) { W2.car(x, y, av.z + 0.01, nx * dir, ny * dir, i + ai); }); })(x, y, i, dir);
        }
      });
      void alpha;
    }
    // train
    if (p > M.rail.p + W.riseP * 2 && M.rail.cells.length > 6) {
      var cells = M.rail.cells, pts = cells.map(function (c) { return [c[0] + 0.5, c[1] + 0.5]; });
      var s0 = (t * 0.028 + M.seed * 0.013) % 1;
      for (var k = 0; k < 4; k++) {
        var pos = pathAt(pts, s0 - k * 0.028);
        var z = Math.max(0, M.cellH[Math.floor(pos.y) * M.cols + Math.floor(pos.x)] || 0);
        (function (pos, k, z) { push(pos.x, pos.y, z, function (W2) {
          var hx = pos.ux * 0.4, hy = pos.uy * 0.4, wx = -pos.uy * 0.1, wy = pos.ux * 0.1, c = k === 0 ? [60, 60, 66] : p > 0.85 ? [200, 206, 214] : [120, 70, 50];
          W2.box([[pos.x - hx - wx, pos.y - hy - wy], [pos.x + hx - wx, pos.y + hy - wy], [pos.x + hx + wx, pos.y + hy + wy], [pos.x - hx + wx, pos.y - hy + wy]], z, 0.14, c, mixA(c, [255, 255, 255], 0.2), { cx: pos.x, cy: pos.y });
          if (k === 0 && p < 0.86) W2.smoke(pos.x - hx * 0.6, pos.y - hy * 0.6, z + 0.2, t, { seed: 0.3, alpha: 0.3, rgb: [130, 126, 124], size: 0.1 });
        }); })(pos, k, z);
      }
    }
  };
  World.prototype.boat = function (x, y, ux, uy, p, i, t) {
    var W = this, kind = p < 0.5 ? "sail" : p < 0.82 ? "steam" : "ship";
    var L = kind === "ship" ? 0.9 : kind === "steam" ? 0.6 : 0.4, Wd = kind === "ship" ? 0.22 : 0.14;
    var hx = ux * L / 2, hy = uy * L / 2, wx = -uy * Wd / 2, wy = ux * Wd / 2, bob = 0.01 * Math.sin(t * 2 + i);
    var hull = kind === "ship" ? [60, 70, 90] : kind === "steam" ? [50, 50, 56] : [120, 90, 60];
    W.box([[x - hx - wx, y - hy - wy], [x + hx - wx, y + hy - wy], [x + hx + wx, y + hy + wy], [x - hx + wx, y - hy + wy]], 0.01 + bob, 0.07, hull, mixA(hull, [255, 255, 255], 0.35), { cx: x, cy: y });
    if (kind === "sail") {
      var mz = 0.08 + bob, top = [x, y, mz + 0.34];
      W.line3([x, y, mz], top, "rgba(70,50,30,0.9)", Math.max(1, u(1.2)));
      W.face([[x, y, mz + 0.06], top, [x - uy * 0.22 + ux * 0.02, y + ux * 0.22 + uy * 0.02, mz + 0.1]], [240, 234, 220], true);
    } else if (kind === "steam") {
      W.box(sq(x, y, 0.08), 0.08 + bob, 0.18, [90, 60, 50], [40, 30, 30], { cx: x, cy: y });
      W.smoke(x, y, 0.28 + bob, t, { seed: i * 0.3, alpha: 0.3, rgb: [110, 108, 106], size: 0.08 });
    } else {
      for (var k = -1; k <= 1; k++) W.box(sq(x + ux * k * 0.22, y + uy * k * 0.22, 0.18, 0.16), 0.08 + bob, 0.1, CAR_COLS[(i + k + 3) % CAR_COLS.length], [220, 220, 220], { cx: x + ux * k * 0.22, cy: y + uy * k * 0.22 });
      W.box(sq(x - ux * 0.38, y - uy * 0.38, 0.12), 0.08 + bob, 0.2, [230, 230, 232], [200, 200, 204], { cx: x - ux * 0.38, cy: y - uy * 0.38 });
    }
  };

  // ─── labels (canvas) ───
  // Text with a dark halo. Rendered once per (text, size, colour) into a sprite and blitted: strokeText is slow.
  var TXT = {}, TXT_N = 0;
  function textSprite(text, size, color, weight) {
    var key = text + "|" + Math.round(size) + "|" + color + "|" + weight;
    var sp = TXT[key];
    if (sp) return sp;
    if (TXT_N > 400) { TXT = {}; TXT_N = 0; }
    var c = document.createElement("canvas"), g = c.getContext("2d"), fs = Math.round(size);
    g.font = (weight || "700") + " " + fs + "px " + FONT;
    var w = Math.ceil(g.measureText(text).width) + fs, h = Math.ceil(fs * 1.5);
    c.width = Math.max(1, w); c.height = Math.max(1, h);
    g.font = (weight || "700") + " " + fs + "px " + FONT;
    g.textAlign = "center"; g.textBaseline = "middle"; g.lineJoin = "round";
    g.strokeStyle = "rgba(10,14,28,0.72)"; g.lineWidth = Math.max(2, fs * 0.18);
    g.strokeText(text, w / 2, h / 2);
    g.fillStyle = color; g.fillText(text, w / 2, h / 2);
    sp = { c: c, w: w, h: h };
    TXT[key] = sp; TXT_N++;
    return sp;
  }
  function haloText(ctx, text, x, y, size, color, align, weight) {
    if (!text) return;
    var sp = textSprite(text, size, color, weight);
    var x0 = align === "left" ? x : align === "right" ? x - sp.w : x - sp.w / 2;
    ctx.drawImage(sp.c, Math.round(x0), Math.round(y - sp.h / 2));
  }
  CT.haloText = haloText;
  /** Add a floating callout anchored to world (x, y, z). o: {at, until, color, size, dur, sub} */
  World.prototype.label = function (x, y, z, text, o) {
    o = o || {};
    var L = { x: x, y: y, z: num(z, 0), text: plain(text), sub: o.sub ? plain(o.sub) : "", at: num(o.at, 0), until: o.until != null ? num(o.until, 9e9) : 9e9, color: o.color || "#FFFFFF", size: num(o.size, 32), lift: num(o.lift, 76), dot: o.dot !== false, big: !!o.big, pFrom: o.pFrom };
    this.labels.push(L);
    return L;
  };
  World.prototype.drawLabels = function (t, p) {
    var W = this, ctx = W.ctx, P = W.P, placed = [];
    function clear(x, y, w, h) { for (var i = 0; i < placed.length; i++) { var q = placed[i]; if (Math.abs(q[0] - x) < (q[2] + w) / 2 + u(40) && Math.abs(q[1] - y) < (q[3] + h) / 2 + u(30)) return false; } placed.push([x, y, w, h]); return true; }
    function draw(sx, sy, lift, text, sub, color, size, alpha, big, dot) {
      if (alpha <= 0.01) return;
      ctx.globalAlpha = alpha;
      var fs = u(size) * (big ? 1.5 : 1), tw = 0;
      ctx.font = "700 " + fs + "px " + FONT;
      tw = ctx.measureText(text).width + u(16);
      var ly = sy - u(lift) * (0.6 + 0.4 * alpha), cr = W.cr || W.vp;
      if (sx - tw / 2 < cr.x + u(12) || sx + tw / 2 > cr.x + cr.w - u(12) || ly - fs < cr.y + u(10)) { ctx.globalAlpha = 1; return; }
      if (!clear(sx, ly, tw, fs * 1.4 + (sub ? fs * 0.9 : 0))) { ctx.globalAlpha = 1; return; }
      if (dot) {
        ctx.strokeStyle = rgba(color, 0.9); ctx.lineWidth = Math.max(1, u(1.5));
        ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(sx, ly + fs * 0.7); ctx.stroke();
        ctx.fillStyle = color; ctx.beginPath(); ctx.arc(sx, sy, Math.max(2, u(4)), 0, 6.2832); ctx.fill();
      }
      haloText(ctx, text, sx, ly, fs, color, "center", "800");
      if (sub) haloText(ctx, sub, sx, ly + fs * 0.95, fs * 0.62, "rgba(255,255,255,0.9)", "center", "600");
      ctx.globalAlpha = 1;
    }
    // custom labels (time based), biggest first
    W.labels.forEach(function (L) {
      var a = prog(t, L.at, 0.5, "outCubic") * (1 - prog(t, L.until, 0.4, "inCubic"));
      if (L.pFrom != null) a *= prog(p, L.pFrom, W.riseP * 2);
      if (a <= 0.01) return;
      var s = proj(P, L.x, L.y, L.z);
      if (!s) return;
      draw(s[0], s[1], L.lift, L.text, L.sub, L.color, L.size, a, L.big, L.dot);
    });
    if (!W.showDistricts) return;
    var ga = W.labelAlpha ? W.labelAlpha(t) : 1;
    if (ga <= 0.01) return;
    var ds = W.M.districts, sizeD = W.plan ? 30 : 32;
    for (var i = 0; i < ds.length && i < 8; i++) {
      var D = ds[i], a2 = prog(p, D.born, W.riseP * 2.5, "outCubic") * ga;
      if (W.focus && D.key !== W.focus.key) a2 *= 1 - W.focus.k * 0.85;
      if (a2 <= 0.01) continue;
      var s2 = proj(P, D.cx, D.cy, D.z + 0.15);
      if (!s2) continue;
      if (s2[0] < W.vp.x + u(40) || s2[0] > W.vp.x + W.vp.w - u(40) || s2[1] < W.vp.y + u(60) || s2[1] > W.vp.y + W.vp.h - u(30)) continue;
      draw(s2[0], s2[1], W.plan ? 10 : 56, D.name.toUpperCase(), "", W.plan ? "#3A2E22" : "rgba(255,255,255,0.96)", sizeD, a2 * 0.92, false, !W.plan);
    }
  };

  // ───────────────────────── DOM overlays ─────────────────────────
  function fmtPop(n) {
    n = Math.max(0, Math.round(n));
    if (n >= 1e6) return (n / 1e6).toFixed(n >= 1e7 ? 1 : 2).replace(/\.?0+$/, "") + "M";
    if (n >= 1e4) return Math.round(n / 1e3) + "k";
    return V.format(n, 0);
  }
  CT.fmtPop = fmtPop;
  function fmtYear(y, o) {
    o = o || {};
    y = Math.round(y);
    if (o.now != null && y >= o.now) return "NOW";
    if (y < 0) return Math.abs(y) + " BC";
    return String(y);
  }
  CT.fmtYear = fmtYear;

  /** Big year counter (top-right in landscape / top-centre otherwise). o: {now, label, pos, small, at} */
  CT.yearCounter = function (root, W, o) {
    o = o || {};
    var box = el("div.ct-year" + (o.pos === "left" ? ".is-left" : "") + (o.small ? ".is-small" : ""), { parent: root });
    var digits = el("div.ct-year-num", { parent: box, text: fmtYear(W.clock.yearFrom, o) });
    var sub = o.label != null ? el("div.ct-year-sub", { parent: box, text: plain(o.label) }) : null;
    var pop = o.population ? el("div.ct-year-pop", { parent: box }) : null;
    if (pop) { el("span.ct-pop-k", { parent: pop, text: "POPULATION" }); el("span.ct-pop-v", { parent: pop, text: "0" }); }
    var tl = V.timeline();
    tl.fromTo(box, { opacity: 0, y: u(-14) }, { opacity: 1, y: 0 }, { at: clampT(num(o.at, 0.2)), dur: 0.6, ease: "outCubic" });
    var last = null;
    V.onFrame(function (t) {
      var y = W.state.year, s = fmtYear(y, o);
      if (s !== last) { digits.textContent = s; last = s; digits.classList.toggle("is-now", s === "NOW"); }
      if (pop) { var pv = fmtPop(W.M.pop(W.state.p)); if (pop.lastChild.textContent !== pv) pop.lastChild.textContent = pv; }
    });
    return box;
  };

  /** Era lower-third. items: [{at, title, sub, until}] — the latest started item is shown. */
  CT.lowerThird = function (root, items, o) {
    o = o || {};
    items = arr(items).filter(function (it) { return it && (it.title || it.sub); }).map(function (it) { return { at: clampT(num(it.at, 0)), title: plain(it.title || ""), sub: plain(it.sub || ""), until: it.until != null ? num(it.until, 9e9) : null }; });
    items.sort(function (a, b) { return a.at - b.at; });
    var box = el("div.ct-lower" + (o.right ? ".is-right" : ""), { parent: root });
    var bar = el("div.ct-lower-bar", { parent: box });
    var tt = el("div.ct-lower-title", { parent: box });
    var ss = el("div.ct-lower-sub", { parent: box });
    void bar;
    var cur = -1;
    V.onFrame(function (t) {
      var idx = -1;
      for (var i = 0; i < items.length; i++) if (t >= items[i].at) idx = i;
      var it = idx >= 0 ? items[idx] : null;
      if (idx !== cur) {
        cur = idx;
        tt.textContent = it ? it.title : "";
        ss.textContent = it ? it.sub : "";
        ss.style.display = it && it.sub ? "" : "none";
        try { V.fit(tt, { maxLines: 1, min: u(18) }); } catch (e) {}
      }
      if (!it) { box.style.opacity = 0; return; }
      var a = prog(t, it.at, 0.45, "outCubic");
      var end = it.until != null ? it.until : idx + 1 < items.length ? items[idx + 1].at : 9e9;
      a *= 1 - prog(t, end - 0.3, 0.3, "inCubic");
      a *= 1 - prog(t, V.duration - 0.5, 0.4, "inCubic");
      box.style.opacity = a.toFixed(3);
      box.style.transform = "translate3d(" + ((1 - a) * u(-30)).toFixed(1) + "px,0,0)";
    });
    return box;
  };

  /** Headline block (top-left). o: {kicker, title, sub, at, pos: top|bottom|center} */
  CT.head = function (root, o, tl) {
    o = o || {};
    if (!o.title && !o.kicker && !o.sub) return null;
    tl = tl || V.timeline();
    var h = el("div.ct-head" + (o.pos === "bottom" ? ".is-bottom" : o.pos === "center" ? ".is-center" : ""), { parent: root });
    if (o.kicker) el("div.ct-kicker", { parent: h, text: plain(o.kicker) });
    var ti = null, sb = null;
    if (o.title) { ti = el("div.ct-title", { parent: h }); ti.appendChild(S.rich(o.title)); }
    if (o.sub) sb = el("div.ct-sub", { parent: h, text: plain(o.sub) });
    try {
      if (ti) V.fit(ti, { maxLines: o.maxLines || 2, min: u(26) });
      if (sb) V.fit(sb, { maxLines: 2, min: u(18) });
    } catch (e) {}
    var kids = [].slice.call(h.children);
    tl.fromTo(kids, { opacity: 0, y: u(22) }, { opacity: 1, y: 0 }, { at: clampT(num(o.at, 0.15)), dur: 0.7, stagger: 0.12, ease: "outCubic" });
    if (o.until != null) tl.to(kids, { opacity: 0 }, { at: clampT(o.until), dur: 0.4 });
    return h;
  };
  /** Bottom caption chip. */
  CT.caption = function (root, text, at, tl, o) {
    o = o || {};
    if (!text) return null;
    tl = tl || V.timeline();
    var c = el("div.ct-caption", { parent: root });
    c.appendChild(S.rich(text));
    try { V.fit(c, { maxLines: 2, min: u(20) }); } catch (e) {}
    tl.fromTo(c, { opacity: 0, y: u(24) }, { opacity: 1, y: 0 }, { at: clampT(at), dur: 0.55, ease: "outCubic" });
    if (o.until != null) tl.to(c, { opacity: 0 }, { at: clampT(o.until), dur: 0.4 });
    return c;
  };
  /** Small city tag chip (top-left): "NEW AMSTERDAM · island city". */
  CT.tag = function (root, text, sub, at) {
    if (!text) return null;
    var c = el("div.ct-tag", { parent: root });
    el("span.ct-tag-dot", { parent: c });
    el("span", { parent: c, text: plain(text).toUpperCase() });
    if (sub) el("span.ct-tag-sub", { parent: c, text: plain(sub) });
    V.timeline().fromTo(c, { opacity: 0, x: u(-16) }, { opacity: 1, x: 0 }, { at: clampT(num(at, 0.25)), dur: 0.5 });
    return c;
  };
  /** Static vignette + letterbox feel. */
  CT.vignette = function (root) { return el("div.ct-vignette", { parent: root }); };
  /** Viewport fractions that leave room for the overlays. */
  CT.layout = function (kind) {
    if (kind === "full") return { x: 0, y: 0, w: 1, h: 1 };
    if (V.isPortrait) return { x: 0, y: 0.16, w: 1, h: 0.66 };
    if (V.isSquare) return { x: 0, y: 0.1, w: 1, h: 0.8 };
    return { x: 0, y: 0, w: 1, h: 1 };
  };

  // ───────────────────────── helpers for templates / custom code ─────────────────────────
  /** Place an extra landmark on a free lot near (x, y) (default: the city core). Returns the landmark. */
  CT.addLandmark = function (M, kind, name, o) {
    o = o || {};
    var x0 = num(o.x, M.origin[0]), y0 = num(o.y, M.origin[1]), rnd = V.makeRand(M.seed + 99), best = null, bs = 1e9;
    M.lots.forEach(function (lot) {
      if (lot.taken) return;
      var dx = lot.x + 0.5 - x0, dy = lot.y + 0.5 - y0, d = Math.sqrt(dx * dx + dy * dy);
      if (d < num(o.minD, 0.5) || d > num(o.maxD, 5)) return;
      var s = d + rnd() * 1.2;
      if (s < bs) { bs = s; best = lot; }
    });
    if (!best) best = M.lots[0];
    if (!best) return null;
    best.taken = true;
    var L = { kind: KIND_H[kind] ? kind : "tower", x: best.x + 0.5, y: best.y + 0.5, z0: best.z0, p: num(o.p, 0), h: KIND_H[kind] ? KIND_H[kind][0] : 1, name: name || "", lot: best, until: 9, seed: rnd(), wall: o.wall ? rgb(o.wall) : null };
    L.fp = [[-0.46, -0.46], [0.46, -0.46], [0.46, 0.46], [-0.46, 0.46]].map(function (q) { return [L.x + q[0], L.y + q[1]]; });
    best.landmark = L;
    M.landmarks.push(L);
    return L;
  };
  /** Find a district by (fuzzy) name; falls back to the n-th district. */
  CT.district = function (M, name, fallbackIndex) {
    var s = str(name).toLowerCase().trim(), ds = M.districts;
    if (s) for (var i = 0; i < ds.length; i++) if (ds[i].name.toLowerCase() === s) return ds[i];
    if (s) for (i = 0; i < ds.length; i++) if (ds[i].name.toLowerCase().indexOf(s) >= 0 || s.indexOf(ds[i].name.toLowerCase()) >= 0) return ds[i];
    return ds[clamp(num(fallbackIndex, 1), 0, ds.length - 1)] || ds[0];
  };
  /** Find a landmark by name/kind. */
  CT.landmark = function (M, name) {
    var s = str(name).toLowerCase().trim();
    for (var i = 0; i < M.landmarks.length; i++) if (M.landmarks[i].name.toLowerCase().indexOf(s) >= 0 || M.landmarks[i].kind === s) return M.landmarks[i];
    return null;
  };
  /** Resolve city options from template props: {city, preset, style, seed, districts, population}. */
  function cityOpts(p) {
    p = p || {};
    var g = CT.guess(p.city || p.cityName || "");
    var preset = PRESETS[p.preset] ? p.preset : g.preset, style = STYLES[p.style] ? p.style : g.style;
    var seed = p.seed != null && p.seed !== "" ? p.seed : (p.city || p.cityName || "city");
    return { preset: preset, style: style, seed: seed, cityName: plain(p.city || p.cityName || ""), districts: arr(p.districts).slice(0, 8), popNow: num(p.population, 0) };
  }
  CT.cityOpts = cityOpts;
  function presetLabel(c) { return (PRESETS[c.preset] || PRESETS.island).name.toLowerCase(); }
  /** Standard scene scaffolding: world + vignette + city tag. */
  function scene(root, p, extra) {
    var c = cityOpts(p), o = { viewport: CT.layout(), light: p.light };
    for (var k in c) o[k] = c[k];
    for (k in extra || {}) o[k] = extra[k];
    var W = new World(root, o);
    CT.vignette(root);
    if (c.cityName && extra && extra.tag !== false) CT.tag(root, c.cityName, presetLabel(c));
    return W;
  }
  /** Piecewise year schedule from beats synced to narration: returns {sched, times}. */
  function beatSchedule(W, beats, yearFrom, yearTo, o) {
    o = o || {};
    var D = V.duration, keys = beats.map(function (b) { return b.keyword || S.autoKey(b.label || "") || null; });
    var times = beats.length ? S.syncTimes(keys, { start: num(o.start, 0.9), end: Math.max(1, D - 1.4), lead: 0.2, minGap: 0.5 }) : [];
    var sched = [[num(o.t0, 0.3), yearFrom]], last = yearFrom;
    beats.forEach(function (b, i) { var y = clamp(num(b.year, last), last, yearTo); sched.push([Math.max(times[i], sched[sched.length - 1][0] + 0.2), y]); last = y; });
    if (last < yearTo) sched.push([Math.max(sched[sched.length - 1][0] + 0.8, D - num(o.tail, 0.8)), yearTo]);
    W.yearSchedule(sched);
    return { sched: sched, times: times };
  }
  /** Time at which the schedule first reaches `year` (null if never). */
  function timeOfYear(W, year) {
    var D = V.duration;
    for (var t = 0; t <= D; t += 0.04) if (W.yearAt(t) >= year) return t;
    return null;
  }
  /** Automatic era lower-thirds for a schedule. */
  function autoEraItems(W) {
    var out = [], yf = W.clock.yearFrom;
    for (var i = 0; i < ERAS.length; i++) {
      var y = i === 0 ? yf : W.clock.eraYear(i);
      if (y > W.clock.yearTo) break;
      var t = timeOfYear(W, y);
      if (t == null) continue;
      out.push({ at: i === 0 ? Math.max(0.5, t) : t, title: ERAS[i].name, sub: ERAS[i].sub });
    }
    return out;
  }
  CT.autoEraItems = autoEraItems;
  function applyCamera(W, mode, o) {
    o = o || {};
    var at = num(o.at, 0), dur = num(o.dur, V.duration);
    switch (mode) {
      case "static": break;
      case "dolly": W.camera.orbit(4, 0.8, at, dur); break;
      case "flyover": W.camera.orbit(24, 0.95, at, dur); W.camera.to({ pitch: W.cam.base.pitch + 9 }, at, dur, "inOutSine"); break;
      case "reverse": W.camera.orbit(-14, 1.12, at, dur); break;
      default: W.camera.orbit(14, 0.88, at, dur);
    }
  }
  CT.applyCamera = applyCamera;

  // ───────────────────────── templates ─────────────────────────
  var T = {};
  T.timelapse = function (root, p, tl) {
    var yf = num(p.yearFrom, 1600), yt = num(p.yearTo, 2024);
    if (yt <= yf) yt = yf + 100;
    var W = scene(root, p, { yearFrom: yf, yearTo: yt, keyDates: p.keyDates });
    var beats = arr(p.beats).slice(0, 10).filter(Boolean);
    var bs = beatSchedule(W, beats, yf, yt);
    applyCamera(W, p.camera || "orbit");
    CT.yearCounter(root, W, { now: p.endsNow ? yt : null, population: p.showPopulation !== false });
    var items = beats.length ? beats.map(function (b, i) { return { at: bs.times[i], title: b.label || String(b.year), sub: b.caption }; }) : autoEraItems(W);
    CT.lowerThird(root, items);
    if (p.title) CT.head(root, { title: p.title, kicker: p.kicker, at: 0.2, until: p.titleUntil != null ? p.titleUntil : Math.min(V.duration - 0.6, 4.5) }, tl);
  };

  T["era-snapshot"] = function (root, p, tl) {
    var year = num(p.year, 1900);
    var W = scene(root, p, { yearFrom: Math.min(year - 300, num(p.yearFrom, year - 300)), yearTo: Math.max(year, num(p.yearTo, year + 120)), keyDates: p.keyDates, year: year });
    applyCamera(W, p.camera || "orbit", { dur: V.duration });
    W.camera.to({ dist: W.cam.base.dist * 0.9 }, 0, V.duration, "inOutSine");
    CT.yearCounter(root, W, { small: true, population: p.showPopulation !== false });
    CT.lowerThird(root, [{ at: 0.5, title: p.label || (ERAS[eraIndex(W.clock.p(year))].name), sub: p.caption }]);
    var calls = arr(p.callouts).slice(0, 5), keys = calls.map(function (c) { return c.keyword || S.autoKey(c.text) || null; });
    var times = S.syncTimes(keys, { start: 1.2 });
    calls.forEach(function (c, i) {
      var D = c.district ? CT.district(W.M, c.district, i + 1) : null, L = c.landmark ? CT.landmark(W.M, c.landmark) : null, pt;
      if (L) pt = [L.x, L.y, L.z0 + L.h * 0.9]; else if (D) pt = [D.cx, D.cy, D.z + 0.2]; else { var Dd = W.M.districts[(i + 1) % W.M.districts.length] || W.M.districts[0]; pt = Dd ? [Dd.cx, Dd.cy, Dd.z + 0.2] : [W.M.origin[0], W.M.origin[1], 0.3]; }
      W.label(pt[0], pt[1], pt[2], c.text, { at: times[i], color: S.color(i), size: 34, lift: 90 + i * 8 });
    });
    if (calls.length) W.labelAlpha = function () { return 0.55; };
    if (p.title) CT.head(root, { title: p.title, kicker: p.kicker, at: 0.2 }, tl);
  };

  T["landmark-rise"] = function (root, p, tl) {
    var year = num(p.year, 1930), lm = p.landmark || {};
    var W = scene(root, p, { yearFrom: num(p.yearFrom, year - 300), yearTo: Math.max(year + 10, num(p.yearTo, year + 100)), keyDates: p.keyDates, year: year });
    var kind = KIND_H[lm.kind] && lm.kind !== "bridge" ? lm.kind : "tower";
    var kw = lm.keyword || S.autoKey(lm.name || "") || "", found = kw ? V.find(kw, 0) : null;
    var tAt = clampT(found != null ? found - 0.2 : Math.min(1.6, V.duration * 0.25));
    var dur = clamp(num(lm.riseSeconds, 2.6), 0.8, 8);
    var L = CT.addLandmark(W.M, kind, lm.name || "Landmark", { minD: 0.5, maxD: 4, wall: lm.color });
    if (!L) return;
    L.qFn = function (t) { return prog(t, tAt, dur, "outCubic"); };
    var hM = num(lm.heightMetres, 0);
    W.label(L.x, L.y, L.z0, lm.name || "", { at: tAt + dur * 0.55, color: "#FFFFFF", size: 34, lift: 80, big: true, sub: p.subtitle ? p.subtitle : "" });
    if (hM > 0) {
      var stat = el("div.ct-stat", { parent: root }), sv = el("div.ct-stat-v", { parent: stat, text: "0 m" }), sl = el("div.ct-stat-l", { parent: stat, text: plain(p.statLabel || "height") });
      void sl;
      tl.fromTo(stat, { opacity: 0, y: u(16) }, { opacity: 1, y: 0 }, { at: tAt + 0.2, dur: 0.5 });
      tl.fromTo(sv, { text: 0 }, { text: hM, suffix: " m", decimals: 0 }, { at: tAt + 0.1, dur: dur, ease: "outCubic" });
    }
    // camera: wide → push toward the landmark as it rises
    W.camera.set({ dist: 1.05 });
    W.camera.to({ tx: L.x, ty: L.y, tz: L.z0 + L.h * 0.35, dist: 0.55, pitch: W.cam.base.pitch - 6 }, Math.max(0, tAt - 0.6), dur + 1.2, "inOutCubic");
    W.camera.to({ yaw: W.cam.base.yaw + 12 }, 0, V.duration, "inOutSine");
    W.labelAlpha = function (t) { return 1 - 0.7 * prog(t, tAt, 1); };
    CT.yearCounter(root, W, { small: true, population: false });
    CT.lowerThird(root, [{ at: tAt + dur * 0.5, title: lm.name || "Landmark", sub: p.caption || (lm.year ? "Completed " + lm.year : "") }]);
    if (p.title) CT.head(root, { title: p.title, kicker: p.kicker, at: 0.2, until: tAt + 0.4 }, tl);
  };

  T["before-after"] = function (root, p, tl) {
    var ya = num(p.yearA, 1850), yb = num(p.yearB, 2024);
    if (yb < ya) { var sw = ya; ya = yb; yb = sw; }
    var c = cityOpts(p), base = { viewport: CT.layout(), light: p.light, yearFrom: num(p.yearFrom, Math.min(ya, 1600)), yearTo: Math.max(yb, num(p.yearTo, yb)), keyDates: p.keyDates, districtLabels: false };
    for (var k in c) base[k] = c[k];
    var M = CT.model(c);
    base.model = M;
    var A = new World(root, S.plainAssign({}, base, { year: ya }));
    var B = new World(root, S.plainAssign({}, base, { year: yb }));
    var tWipe = clampT(p.keyword ? V.at(p.keyword) - 0.1 : Math.min(V.duration * 0.45, 3.5)), wd = clamp(num(p.wipeSeconds, 1.4), 0.4, 5);
    [A, B].forEach(function (W) { W.camera.orbit(10, 0.9, 0, V.duration); });
    A.activeFn = function (t) { return t < tWipe + wd + 0.15; };
    B.activeFn = function (t) { return t >= tWipe - 0.15; };
    B.canvas.style.clipPath = "inset(0 100% 0 0)";
    tl.fromTo(B.canvas, { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)" }, { at: tWipe, dur: wd, ease: "inOutCubic" });
    var line = el("div.ct-wipe", { parent: root });
    tl.fromTo(line, { left: "0%", opacity: 1 }, { left: "100%", opacity: 1 }, { at: tWipe, dur: wd, ease: "inOutCubic" });
    tl.set(line, { opacity: 0 }, tWipe + wd + 0.05);
    tl.set(line, { opacity: 0 }, 0);
    tl.set(line, { opacity: 1 }, tWipe);
    CT.vignette(root);
    if (c.cityName) CT.tag(root, c.cityName, presetLabel(c));
    var ca = el("div.ct-chip.is-left", { parent: root }), cb = el("div.ct-chip.is-right", { parent: root });
    el("div.ct-chip-y", { parent: ca, text: fmtYear(ya) }); if (p.labelA) el("div.ct-chip-l", { parent: ca, text: plain(p.labelA) });
    el("div.ct-chip-y", { parent: cb, text: fmtYear(yb, { now: p.endsNow ? yb : null }) }); if (p.labelB) el("div.ct-chip-l", { parent: cb, text: plain(p.labelB) });
    tl.fromTo(ca, { opacity: 0, y: u(14) }, { opacity: 1, y: 0 }, { at: 0.3, dur: 0.5 });
    tl.fromTo(cb, { opacity: 0, y: u(14) }, { opacity: 1, y: 0 }, { at: tWipe + wd * 0.5, dur: 0.5 });
    tl.to(ca, { opacity: 0.35 }, { at: tWipe + wd, dur: 0.5 });
    if (p.title) CT.head(root, { title: p.title, kicker: p.kicker, at: 0.2 }, tl);
  };
  S.plainAssign = function (t) { for (var i = 1; i < arguments.length; i++) { var s = arguments[i]; for (var k in s) if (Object.prototype.hasOwnProperty.call(s, k)) t[k] = s[k]; } return t; };

  T["district-growth"] = function (root, p, tl) {
    var yf = num(p.yearFrom, 1850), yt = num(p.yearTo, 1950);
    if (yt <= yf) yt = yf + 50;
    var W = scene(root, p, { yearFrom: num(p.cityYearFrom, Math.min(yf, 1600)), yearTo: Math.max(yt, num(p.cityYearTo, 2024)), keyDates: p.keyDates });
    var D = CT.district(W.M, p.district, 1);
    var tKey = clampT(p.keyword ? V.at(p.keyword) - 0.15 : 1.2);
    W.yearSchedule([[Math.max(0.3, tKey - 0.4), yf], [Math.max(tKey + 1.5, V.duration - 0.8), yt]]);
    W.focus = { key: D.key, k: 0, glow: 0, color: p.color || "#F2A33A", kFn: function (t) { return 0.55 * prog(t, tKey, 0.8, "outCubic") * (1 - 0.6 * prog(t, V.duration - 1, 0.6)); }, glowFn: function (t) { return prog(t, tKey, 0.6) * (0.5 + 0.5 * Math.sin(t * 3)); } };
    W.camera.orbit(10, 1, 0, V.duration);
    W.camera.to({ tx: D.cx, ty: D.cy, tz: D.z + 0.2, dist: 0.62 }, Math.max(0, tKey - 0.3), 2.2, "inOutCubic");
    W.label(D.cx, D.cy, D.z + 0.2, D.name.toUpperCase(), { at: tKey + 0.3, color: p.color || "#F2A33A", size: 30, lift: 96, big: true, dot: false });
    W.showDistricts = false;
    CT.yearCounter(root, W, { small: true, population: p.showPopulation === true });
    CT.lowerThird(root, [{ at: tKey + 0.4, title: p.label || D.name, sub: p.caption }]);
    if (p.title) CT.head(root, { title: p.title, kicker: p.kicker, at: 0.2 }, tl);
  };

  T["population-chart"] = function (root, p, tl) {
    var pts = arr(p.points).filter(function (q) { return q && isFinite(num(q.year, NaN)) && isFinite(num(q.value, NaN)); }).map(function (q) { return { year: num(q.year, 0), value: num(q.value, 0) }; }).sort(function (a, b) { return a.year - b.year; }).slice(0, 14);
    if (pts.length < 2) pts = [{ year: 1700, value: 5000 }, { year: 1800, value: 60000 }, { year: 1900, value: 3400000 }, { year: 2020, value: 8800000 }];
    var yf = num(p.yearFrom, pts[0].year), yt = num(p.yearTo, pts[pts.length - 1].year);
    if (yt <= yf) yt = yf + 100;
    var land = V.isLandscape, vp = land ? { x: 0, y: 0, w: 0.64, h: 1 } : V.isSquare ? { x: 0, y: 0.08, w: 1, h: 0.5 } : { x: 0, y: 0.1, w: 1, h: 0.46 };
    var W = scene(root, S.plainAssign({}, p, { population: pts[pts.length - 1].value }), { yearFrom: num(p.cityYearFrom, Math.min(yf, 1600)), yearTo: Math.max(yt, num(p.cityYearTo, yt)), keyDates: p.keyDates, viewport: vp, crop: land ? 1.25 : undefined, fill: 0.97, tag: !land });
    W.yearSchedule([[0.4, yf], [Math.max(1.5, V.duration - 1.0), yt]]);
    W.camera.orbit(10, 0.9, 0, V.duration);
    W.showDistricts = false;
    CT.yearCounter(root, W, { small: true, pos: land ? "left" : undefined, population: false, at: 0.3 });
    // chart panel (SVG)
    var panel = el("div.ct-panel" + (land ? ".is-right" : ".is-bottom"), { parent: root });
    var hd = el("div.ct-panel-title", { parent: panel }); hd.appendChild(S.rich(p.title || "Population"));
    try { V.fit(hd, { maxLines: 2, min: u(20) }); } catch (e) {}
    var read = el("div.ct-panel-read", { parent: panel });
    var rv = el("span.ct-panel-v", { parent: read, text: "0" }), ry = el("span.ct-panel-y", { parent: read, text: String(yf) });
    var CWp = 1000, CHp = land ? 520 : 300;
    var svg = el("svg.ct-chart", { parent: panel, viewBox: "0 0 " + CWp + " " + CHp, preserveAspectRatio: "none" });
    var padL = 24, padR = 24, padT = 24, padB = 50;
    var vmax = Math.max.apply(null, pts.map(function (q) { return q.value; })) || 1, vmin = 0;
    var logScale = p.logScale === true;
    function X(y) { return padL + ((y - yf) / (yt - yf)) * (CWp - padL - padR); }
    function Y(v) { var f = logScale ? Math.log(Math.max(1, v)) / Math.log(Math.max(2, vmax)) : (v - vmin) / (vmax - vmin); return CHp - padB - f * (CHp - padT - padB); }
    for (var g = 0; g <= 4; g++) { var gy = padT + (g / 4) * (CHp - padT - padB); el("line", { parent: svg, x1: padL, x2: CWp - padR, y1: gy, y2: gy, class: "ct-grid" }); }
    var poly = pts.map(function (q, i) { return (i ? "L" : "M") + X(q.year).toFixed(1) + " " + Y(q.value).toFixed(1); }).join(" ");
    var areaD = poly + " L" + X(pts[pts.length - 1].year).toFixed(1) + " " + (CHp - padB) + " L" + X(pts[0].year).toFixed(1) + " " + (CHp - padB) + " Z";
    var area = el("path", { parent: svg, d: areaD, class: "ct-area" });
    var line = el("path", { parent: svg, d: poly, class: "ct-line" });
    var clipId = "ctclip" + Math.round(V.seed * 7 + 1);
    var defs = el("defs", { parent: svg }), cp = el("clipPath", { parent: defs, id: clipId }), cr = el("rect", { parent: cp, x: 0, y: 0, width: 0, height: CHp });
    area.setAttribute("clip-path", "url(#" + clipId + ")"); line.setAttribute("clip-path", "url(#" + clipId + ")");
    var dot = el("circle", { parent: svg, r: 9, class: "ct-dot" });
    // year ticks
    var nT = land ? 5 : 3;
    for (g = 0; g <= nT; g++) { var yy = Math.round(yf + (g / nT) * (yt - yf)); el("text", { parent: svg, x: X(yy), y: CHp - padB + 32, class: "ct-tick", "text-anchor": g === 0 ? "start" : g === nT ? "end" : "middle", text: String(yy) }); }
    function valueAt(year) {
      if (year <= pts[0].year) return pts[0].value;
      for (var i = 0; i + 1 < pts.length; i++) if (year <= pts[i + 1].year) { var f = (year - pts[i].year) / Math.max(1e-6, pts[i + 1].year - pts[i].year); return logScale ? Math.exp(lerp(Math.log(Math.max(1, pts[i].value)), Math.log(Math.max(1, pts[i + 1].value)), f)) : lerp(pts[i].value, pts[i + 1].value, f); }
      return pts[pts.length - 1].value;
    }
    var unit = p.unit || "", fmt = p.format === "raw" ? function (v) { return V.format(v, 0); } : fmtPop;
    V.onFrame(function (t) {
      var year = clamp(W.state.year, yf, yt), v = valueAt(year);
      cr.setAttribute("width", Math.max(0, X(year)).toFixed(1));
      dot.setAttribute("cx", X(year).toFixed(1)); dot.setAttribute("cy", Y(v).toFixed(1));
      var sv = fmt(v) + unit;
      if (rv.textContent !== sv) rv.textContent = sv;
      var sy = String(Math.round(year));
      if (ry.textContent !== sy) ry.textContent = sy;
    });
    tl.fromTo(panel, { opacity: 0, x: land ? u(30) : 0, y: land ? 0 : u(30) }, { opacity: 1, x: 0, y: 0 }, { at: 0.35, dur: 0.6, ease: "outCubic" });
    var marks = arr(p.marks).slice(0, 4);
    marks.forEach(function (m, i) {
      var tMark = clampT(m.keyword ? V.at(m.keyword) - 0.1 : timeOfYear(W, num(m.year, yf)) || 1);
      var mx = X(num(m.year, yf)), my = Y(valueAt(num(m.year, yf)));
      var gEl = el("g", { parent: svg, class: "ct-mark" });
      el("line", { parent: gEl, x1: mx, x2: mx, y1: my - 14, y2: padT + 4, class: "ct-mark-line" });
      el("text", { parent: gEl, x: mx, y: padT - 2, class: "ct-mark-t", "text-anchor": mx > CWp * 0.75 ? "end" : mx < CWp * 0.25 ? "start" : "middle", text: plain(m.label || String(m.year)) });
      tl.fromTo(gEl, { opacity: 0 }, { opacity: 1 }, { at: tMark, dur: 0.4 });
      void i;
    });
  };

  T["disaster-rebuild"] = function (root, p, tl) {
    var year = num(p.year, 1871), ry = Math.max(year + 1, num(p.rebuildYear, year + 20));
    var W = scene(root, p, { yearFrom: num(p.yearFrom, Math.min(year - 250, 1600)), yearTo: Math.max(ry + 40, num(p.yearTo, 2024)), keyDates: p.keyDates, year: year });
    var M = W.M, kind = ["fire", "flood", "quake", "storm"].indexOf(p.event) >= 0 ? p.event : "fire";
    var tHit = clampT(p.keywordHit ? V.at(p.keywordHit) - 0.1 : Math.min(2, V.duration * 0.25));
    var tReb = clampT(p.keywordRebuild ? Math.max(tHit + 1.5, V.at(p.keywordRebuild, tHit) - 0.2) : Math.max(tHit + 2.5, V.duration * 0.6));
    var ctr = [M.origin[0], M.origin[1]], area = p.area || "core";
    if (area === "waterfront") { var Dw = M.districts.filter(function (d) { return d.water; })[0]; if (Dw) ctr = [Dw.cx, Dw.cy]; }
    else if (area !== "core") { var off = { north: [0, -5], south: [0, 5], east: [5, 0], west: [-5, 0] }[area] || [0, 0]; ctr = [M.origin[0] + off[0], M.origin[1] + off[1]]; }
    var r = clamp(num(p.radius, 4.5), 2, 12);
    var style = M.style, rn = V.makeRand(M.seed + 5);
    W.disaster = {
      kind: kind, cx: ctr[0], cy: ctr[1], r: r, k: 0, reb: 0, glow: 0,
      kFn: function (t) { return prog(t, tHit, kind === "quake" ? 0.5 : 1.4, "outCubic"); },
      glowFn: function (t) { return kind === "fire" ? prog(t, tHit, 0.4) * (1 - prog(t, tHit + 1.2, 1.6)) : 0; },
      rebFn: function (t) { return prog(t, tReb, 2.8, "linear"); },
      look: function (lot) {
        if (lot._reb) return lot._reb;
        var e = eraIndex(W.clock.p(ry)), k2 = eraKind(Math.max(3, e), lot, rn) || "rowhouse", lk = stageLook(k2, style, rn);
        lot._reb = { p: 0, kind: k2, h: kindHeight(k2, lot, rn) * 1.15, wall: lk.wall, roof: lk.roof, pitched: lk.pitched };
        return lot._reb;
      },
    };
    W.yearSchedule([[tReb + 0.2, year], [tReb + 2.6, ry]]);
    W.camera.orbit(8, 1, 0, V.duration);
    W.camera.to({ tx: ctr[0], ty: ctr[1], tz: 0.2, dist: 0.6 }, Math.max(0, tHit - 0.8), 2, "inOutCubic");
    W.camera.to({ dist: 0.8 }, tReb, 2.5, "inOutSine");
    W.showDistricts = false;
    CT.yearCounter(root, W, { small: true, population: false });
    var names = { fire: "The great fire", flood: "The flood", quake: "The earthquake", storm: "The storm" };
    CT.lowerThird(root, [{ at: tHit + 0.2, title: p.label || names[kind], sub: p.caption || String(year) }, { at: tReb + 0.3, title: p.rebuildLabel || "Rebuilt", sub: p.rebuildCaption || ("By " + ry + " the district stood again — taller") }]);
    if (p.title) CT.head(root, { title: p.title, kicker: p.kicker, at: 0.2, until: tHit }, tl);
  };

  T["map-overlay"] = function (root, p, tl) {
    var yf = num(p.yearFrom, 1600), yt = num(p.yearTo, 2024);
    if (yt <= yf) yt = yf + 100;
    var W = scene(root, p, { yearFrom: yf, yearTo: yt, keyDates: p.keyDates, plan: true, pitch: 89, fov: 30, viewport: CT.layout(), fill: 0.9, crop: V.isPortrait ? 1.0 : 1, life: false });
    root.classList.add("is-plan");
    var beats = arr(p.beats).slice(0, 8).filter(Boolean);
    var bs = beatSchedule(W, beats, yf, yt);
    W.camera.set({ yaw: W.M.camYaw + 180 });
    W.camera.to({ dist: 0.9 }, 0, V.duration, "inOutSine");
    CT.yearCounter(root, W, { now: p.endsNow ? yt : null, population: p.showPopulation === true });
    var items = beats.length ? beats.map(function (b, i) { return { at: bs.times[i], title: b.label || String(b.year), sub: b.caption }; }) : autoEraItems(W);
    CT.lowerThird(root, items);
    if (p.title) CT.head(root, { title: p.title, kicker: p.kicker || "Street plan", at: 0.2 }, tl);
  };

  T["title-card"] = function (root, p, tl) {
    var yf = num(p.yearFrom, 1600), yt = num(p.yearTo, 2024);
    var W = scene(root, p, { yearFrom: yf, yearTo: yt, keyDates: p.keyDates, year: yt, light: p.light || "golden", viewport: { x: 0, y: 0, w: 1, h: 1 }, fitTop: 5, tag: false });
    root.classList.add("is-title");
    W.camera.set({ pitch: V.isPortrait ? 30 : 22, dist: 1.0 });
    W.camera.orbit(9, 0.86, 0, V.duration);
    W.showDistricts = false;
    var box = el("div.ct-titlecard", { parent: root });
    if (p.kicker) el("div.ct-tc-kicker", { parent: box, text: plain(p.kicker) });
    var name = el("div.ct-tc-name", { parent: box, text: plain(p.city || p.cityName || "The city") });
    var range = el("div.ct-tc-range", { parent: box });
    el("span", { parent: range, text: fmtYear(yf) }); el("span.ct-tc-arrow", { parent: range, text: "→" }); el("span.ct-tc-now", { parent: range, text: p.endsNow === false ? fmtYear(yt) : "NOW" });
    if (p.subtitle) el("div.ct-tc-sub", { parent: box, text: plain(p.subtitle) });
    try { V.fit(name, { maxLines: 2, min: u(44) }); } catch (e) {}
    var kids = [].slice.call(box.children);
    tl.fromTo(kids, { opacity: 0, y: u(30), letterSpacing: "0.3em" }, { opacity: 1, y: 0, letterSpacing: "0.04em" }, { at: 0.4, dur: 1.0, stagger: 0.18, ease: "outCubic" });
    tl.fromTo(range.lastChild, { opacity: 0, scale: 1.3 }, { opacity: 1, scale: 1 }, { at: 1.2, dur: 0.6, ease: "outBack" });
  };

  T["timeline-strip"] = function (root, p, tl) {
    var eras = arr(p.eras).slice(0, 7).filter(function (e) { return e && isFinite(num(e.year, NaN)); }).sort(function (a, b) { return num(a.year, 0) - num(b.year, 0); });
    var yf = num(p.yearFrom, eras.length ? Math.min(eras[0].year, 1600) : 1600), yt = num(p.yearTo, eras.length ? Math.max(eras[eras.length - 1].year, 2024) : 2024);
    if (!eras.length) eras = [1, 3, 5, 7].map(function (i) { return { year: 0, label: ERAS[i].name, era: i }; });
    var land = V.isLandscape;
    var vp = land ? { x: 0, y: 0, w: 1, h: 0.72 } : V.isSquare ? { x: 0, y: 0.06, w: 1, h: 0.56 } : { x: 0, y: 0.1, w: 1, h: 0.5 };
    var W = scene(root, p, { yearFrom: yf, yearTo: yt, keyDates: p.keyDates, viewport: vp, fill: 0.9 });
    eras.forEach(function (e) { if (!e.year && e.era) e.year = W.clock.eraYear(e.era); });
    var keys = eras.map(function (e) { return e.keyword || S.autoKey(e.label || "") || null; });
    var times = S.syncTimes(keys, { start: 0.8, end: Math.max(1, V.duration - 1.5), lead: 0.2, minGap: 0.6 });
    var sched = [[0, num(eras[0].year, yf)]];
    eras.forEach(function (e, i) { if (i) { sched.push([times[i] - 0.5, num(eras[i - 1].year, yf)]); sched.push([times[i] + 0.4, num(e.year, yf)]); } });
    W.yearSchedule(sched);
    W.camera.orbit(12, 0.9, 0, V.duration);
    CT.yearCounter(root, W, { small: true, population: p.showPopulation !== false });
    // strip of thumbnails
    var strip = el("div.ct-strip", { parent: root });
    var n = eras.length, thumbs = [];
    var tw = land ? Math.min(u(300), (V.width * 0.9) / n - u(14)) : Math.min(u(240), (V.width * 0.94) / Math.min(n, 4) - u(10)), th = Math.round(tw * 0.62);
    var model = W.M;
    eras.forEach(function (e, i) {
      var cell = el("div.ct-thumb", { parent: strip, style: { width: tw + "px" } });
      var holder = el("div.ct-thumb-img", { parent: cell, style: { height: th + "px" } });
      var mini = new World(holder, { model: model, clock: W.clock, year: num(e.year, yf), light: p.light, viewport: { x: 0, y: 0, w: 1, h: 1 }, px: { x: 0, y: 0, w: tw, h: th }, canvas: { w: tw, h: th }, districtLabels: false, life: false, isStatic: true, fill: 0.96 });
      mini.camera.set({ pitch: 30 });
      mini.render(0);
      el("div.ct-thumb-y", { parent: cell, text: fmtYear(num(e.year, yf)) });
      var lb = el("div.ct-thumb-l", { parent: cell, text: plain(e.label || ERAS[eraIndex(W.clock.p(num(e.year, yf)))].name) });
      try { V.fit(lb, { maxLines: 1, min: u(12) }); } catch (err) {}
      thumbs.push(cell);
      tl.fromTo(cell, { opacity: 0, y: u(18) }, { opacity: 1, y: 0 }, { at: 0.3 + i * 0.08, dur: 0.5, ease: "outCubic" });
    });
    var cur = -1;
    V.onFrame(function (t) {
      var idx = 0;
      for (var i = 0; i < times.length; i++) if (t >= times[i] - 0.1) idx = i;
      if (idx !== cur) { cur = idx; thumbs.forEach(function (c, i) { c.classList.toggle("is-active", i === idx); }); }
    });
    CT.lowerThird(root, eras.map(function (e, i) { return { at: times[i], title: e.label || fmtYear(e.year), sub: e.caption }; }), { right: false });
    if (p.title) CT.head(root, { title: p.title, kicker: p.kicker, at: 0.2, until: times[0] + 1.5 }, tl);
  };

  T["skyline-compare"] = function (root, p, tl) {
    var land = V.isLandscape;
    var sides = [p.left || {}, p.right || {}];
    var vps = land ? [{ x: 0, y: 0, w: 0.5, h: 1 }, { x: 0.5, y: 0, w: 0.5, h: 1 }] : [{ x: 0, y: 0, w: 1, h: 0.5 }, { x: 0, y: 0.5, w: 1, h: 0.5 }];
    var keys = [p.keywordLeft || S.autoKey(sides[0].city || "") || null, p.keywordRight || S.autoKey(sides[1].city || "") || null];
    var times = S.syncTimes(keys, { start: 0.6, minGap: 0.8 });
    root.classList.add("is-compare");
    sides.forEach(function (sd, i) {
      var c = cityOpts(sd), year = num(sd.year, 2024);
      var o = { viewport: vps[i], clipViewport: true, cols: 28, rows: 20, light: p.light || "golden", yearFrom: num(sd.yearFrom, 1600), yearTo: Math.max(year, num(sd.yearTo, 2024)), keyDates: sd.keyDates, year: year, districtLabels: false, fill: 0.9, crop: land ? 1.1 : 1.3 };
      for (var k in c) o[k] = c[k];
      var W = new World(root, o);
      W.camera.set({ pitch: 24 });
      W.camera.orbit(i ? -8 : 8, 0.88, 0, V.duration);
      var chip = el("div.ct-cmp" + (land ? (i ? ".is-right" : ".is-left") : (i ? ".is-bottom" : ".is-top")), { parent: root });
      el("div.ct-cmp-name", { parent: chip, text: plain(sd.city || ("City " + (i + 1))) });
      if (sd.stat) el("div.ct-cmp-stat", { parent: chip, text: plain(sd.stat) });
      el("div.ct-cmp-y", { parent: chip, text: fmtYear(year) });
      try { V.fit(chip.firstChild, { maxLines: 1, min: u(22) }); } catch (e) {}
      tl.fromTo(chip, { opacity: 0, y: u(18) }, { opacity: 1, y: 0 }, { at: times[i], dur: 0.55, ease: "outCubic" });
      var shade = el("div.ct-cmp-shade" + (land ? (i ? ".is-right" : ".is-left") : (i ? ".is-bottom" : ".is-top")), { parent: root });
      tl.fromTo(shade, { opacity: 0.55 }, { opacity: 0 }, { at: times[i], dur: 0.6 });
    });
    el("div.ct-divider" + (land ? "" : ".is-h"), { parent: root });
    CT.vignette(root);
    if (p.title) CT.head(root, { title: p.title, kicker: p.kicker, at: 0.2, pos: "center" }, tl);
  };

  // ───────────────────────── entry points ─────────────────────────
  var baseFallback = S.fallback;
  S.templateIds = Object.keys(T);
  S.render = function (id, root, props) {
    var fn = T[id];
    if (!fn) throw new Error("Unknown template: " + id);
    root = root || V.root();
    root.classList.add("ct-root", "t-" + id);
    var tl = V.timeline();
    fn(root, props || {}, tl);
    return root;
  };
  var STOP = { the: 1, a: 1, an: 1, and: 1, or: 1, of: 1, to: 1, in: 1, on: 1, for: 1, with: 1, is: 1, are: 1, was: 1, were: 1, it: 1, its: 1, that: 1, this: 1, by: 1, as: 1, at: 1, be: 1, from: 1, your: 1, you: 1, we: 1, our: 1, their: 1, they: 1, there: 1, these: 1, those: 1, which: 1, while: 1, about: 1, every: 1, would: 1, could: 1, should: 1, because: 1, after: 1, before: 1, into: 1, than: 1, then: 1, them: 1, over: 1 };
  /** Pick up to n distinctive spoken keywords spread over the scene: [{text, at}] */
  CT.keywords = function (n, narration) {
    n = n || 4;
    var D = V.duration, words = V.words && V.words.length ? V.words : null, out = [];
    if (!words) {
      var toks = str(narration || V.narration).split(/\s+/).filter(Boolean);
      words = toks.map(function (w, i) { return { word: w, start: (i / Math.max(1, toks.length)) * D * 0.85 + 0.2 }; });
    }
    if (!words.length) return out;
    var slots = Math.max(1, Math.min(n, Math.floor(D / 2.2)));
    for (var sIdx = 0; sIdx < slots; sIdx++) {
      var a = (sIdx / slots) * D, b = ((sIdx + 1) / slots) * D, best = null;
      words.forEach(function (w) {
        if (w.start < a || w.start >= b) return;
        var c = str(w.word).replace(/[^\p{L}\p{N}%$.-]+/gu, "").replace(/^[.-]+|[.-]+$/g, "");
        if (c.length < 4 || STOP[c.toLowerCase()]) return;
        var score = c.length + (/\d/.test(c) ? 4 : 0) + (/^[A-Z]/.test(c) ? 1.5 : 0);
        if (!best || score > best.score) best = { text: c.length > 22 ? c.slice(0, 21) + "…" : c, at: Math.max(0.1, w.start - 0.15), score: score };
      });
      if (best && !out.some(function (o) { return o.text.toLowerCase() === best.text.toLowerCase(); })) out.push(best);
    }
    return out;
  };
  S.fallback = function (root, narration) {
    try {
      root = root || V.root();
      root.innerHTML = "";
      root.className = "ct-root t-fallback";
      root.removeAttribute("style");
      var W = new World(root, { preset: "island", style: "american", seed: 7, viewport: CT.layout(), yearFrom: 1600, yearTo: 2024 });
      W.yearSchedule([[0.3, 1600], [Math.max(1.5, V.duration - 0.8), 2024]]);
      W.camera.orbit(14, 0.88, 0, V.duration);
      CT.vignette(root);
      CT.yearCounter(root, W, { population: true });
      var kws = CT.keywords(4, narration);
      var items = kws.length ? kws.map(function (k) { return { at: k.at, title: k.text, sub: "" }; }) : autoEraItems(W);
      CT.lowerThird(root, items);
      return root;
    } catch (e) {
      V.error("city fallback: " + (e && e.message));
      try { V.reset(); } catch (e2) {}
      return baseFallback(root, narration);
    }
  };
})();
