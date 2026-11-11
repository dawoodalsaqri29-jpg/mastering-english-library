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
/* Scene animation engine: FOUNDER STORY — hand-inked editorial business-history illustration.
 * A big-headed caricature of a generic business archetype (suited founder, engineer, inventor, retailer,
 * hoodie techie, investor) stands in the foreground over a sweeping aerial empire — factories, campus,
 * ports, stores, warehouses, test tracks, cities — drawn as muted watercolour shapes with crisp ink outlines
 * and cross-hatched shading. A headline plate (company name + year band) sits top-right; product sketches,
 * charts, maps, documents and era cards carry the numbers. Everything is procedural SVG/HTML/canvas and a
 * pure function of time (V.timeline / V.onFrame only).
 */
(function () {
  "use strict";
  var V = window.V;
  var S = (window.SceneStyle = window.SceneStyle || {});
  if (!V || !S) return;
  var el = V.el;
  var NS = "http://www.w3.org/2000/svg";

  S.init({
    id: "founder-story",
    kind: "minimal",
    enter: "rise",
    titleReveal: "mask",
    drift: 0,
    series: ["#C8503C", "#2F5D8A", "#D9A441", "#4E8A5C", "#7A4E8A", "#3A3A3A"],
  });

  // ───────────────────────── utils ─────────────────────────
  var INK = "#2B2420";
  var PI = Math.PI;
  var C = {
    ink: INK, paper: "#F3EBDC", paper2: "#E8DDC8", cream: "#FBF6EA", red: "#C8503C", blue: "#2F5D8A", gold: "#D9A441", green: "#4E8A5C",
    sky1: "#6FA9D6", sky2: "#D6E9F3", skyDusk1: "#E9A86B", skyDusk2: "#F7E2C3", skyStorm1: "#5C6572", skyStorm2: "#9CA5AD", skyNight1: "#1E2A44", skyNight2: "#3E4E73",
    hillFar: "#9DBE8E", hill: "#A2C46B", hill2: "#7FA85A", grass: "#B2CF72", field: "#D9C45E", water: "#5FA3C6", water2: "#8FC4DC", road: "#D8D0BE", roadDark: "#8F887A",
    wall: "#D9D2C5", wall2: "#C9C1B2", wallSide: "#B7AE9E", brick: "#C47A5A", brickSide: "#A6624A", roof: "#8E9BA6", roofRed: "#C8655A", glass: "#9FC2D6", glassSide: "#7FA6BD",
    smoke: "#E6E2D8", metal: "#AEB4B8", metalDark: "#7E858A", wood: "#B48A5A", mountain: "#8FA9C4", mountain2: "#6E8EAE", snow: "#EEF2F3",
  };
  S.colors = C;
  var FONT_HEAD = '"Inter", "Noto Sans", "Arial Narrow", "Segoe UI", Arial, sans-serif';
  var FONT_SERIF = 'Georgia, "Noto Serif", "Times New Roman", serif';
  S.fonts = { head: FONT_HEAD, serif: FONT_SERIF };
  function str(v) { return v == null ? "" : String(v); }
  function arr(v) { return Array.isArray(v) ? v : v == null ? [] : [v]; }
  function num(v, d) { v = Number(v); return isFinite(v) ? v : d; }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function lerp(a, b, p) { return a + (b - a) * p; }
  function sm(p) { p = clamp(p, 0, 1); return p * p * (3 - 2 * p); }
  function fx(n) { return Math.round(n * 100) / 100; }
  function f1(n) { return Math.round(n * 10) / 10; }
  function hash01(n) { var x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); }
  function noise(x, seed) {
    var i = Math.floor(x), f = x - i;
    var a = hash01(i * 1.7 + (seed || 0) * 13.13), b = hash01((i + 1) * 1.7 + (seed || 0) * 13.13);
    return (lerp(a, b, f * f * (3 - 2 * f)) - 0.5) * 2;
  }
  function plain(t) { return str(t).replace(/\*([^*]+)\*/g, "$1"); }
  function u(n) { return n * V.unit; }
  function px(n) { return fx(n) + "px"; }
  function D() { return V.duration; }
  function lastT() { return Math.max(0.05, V.duration - 0.05); }
  function clampT(t) { return clamp(num(t, 0), 0, lastT()); }
  function rng(key) { return V.makeRand(((S.hash(str(key)) ^ Math.imul(V.seed | 0, 2654435761)) >>> 0) || 1); }
  function easeFn(e) { if (typeof e === "function") return e; return (e && V.ease[e]) || V.ease.inOutCubic; }
  function outBack(p) { p = clamp(p, 0, 1); var q = p - 1, s = 1.6; return q * q * ((s + 1) * q + s) + 1; }
  var uid = 0;
  function nid(p) { uid++; return "fs" + (p || "") + uid + "_" + (V.seed | 0); }
  function sv(tag, attrs, parent) {
    var n = document.createElementNS(NS, tag);
    if (attrs) for (var k in attrs) {
      if (!Object.prototype.hasOwnProperty.call(attrs, k)) continue;
      var v = attrs[k];
      if (v == null) continue;
      if (k === "text") n.textContent = v;
      else if (k === "style" && typeof v === "object") { for (var s in v) n.style[s] = v[s]; }
      else n.setAttribute(k, String(v));
    }
    if (parent) parent.appendChild(n);
    return n;
  }
  S.svg = sv;
  function G(parent, attrs) { return sv("g", attrs, parent); }
  function Pth(parent, d, fill, extra) { var a = { d: d, fill: fill || "none" }; if (extra) for (var k in extra) a[k] = extra[k]; return sv("path", a, parent); }
  function Rc(parent, x, y, w, h, fill, extra) { var a = { x: f1(x), y: f1(y), width: f1(Math.max(0, w)), height: f1(Math.max(0, h)), fill: fill }; if (extra) for (var k in extra) a[k] = extra[k]; return sv("rect", a, parent); }
  function Ci(parent, cx, cy, r, fill, extra) { var a = { cx: f1(cx), cy: f1(cy), r: f1(Math.max(0, r)), fill: fill }; if (extra) for (var k in extra) a[k] = extra[k]; return sv("circle", a, parent); }
  function El(parent, cx, cy, rx, ry, fill, extra) { var a = { cx: f1(cx), cy: f1(cy), rx: f1(Math.max(0, rx)), ry: f1(Math.max(0, ry)), fill: fill }; if (extra) for (var k in extra) a[k] = extra[k]; return sv("ellipse", a, parent); }
  function Ln(parent, x1, y1, x2, y2, stroke, w, extra) { var a = { x1: f1(x1), y1: f1(y1), x2: f1(x2), y2: f1(y2), stroke: stroke || INK, "stroke-width": w || 2, "stroke-linecap": "round" }; if (extra) for (var k in extra) a[k] = extra[k]; return sv("line", a, parent); }
  function ink(w) { return { stroke: INK, "stroke-width": w || 3, "stroke-linejoin": "round", "stroke-linecap": "round" }; }
  function merge(a, b) { var o = {}; for (var k in a) o[k] = a[k]; if (b) for (k in b) o[k] = b[k]; return o; }
  function hexRgb(h) {
    h = str(h).replace("#", "");
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    var n = parseInt(h, 16) || 0;
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  function shade(hex, amt) {
    var c = hexRgb(hex), tgt = amt < 0 ? 0 : 255, p = Math.abs(amt);
    var r = Math.round(lerp(c[0], tgt, p)), g = Math.round(lerp(c[1], tgt, p)), b = Math.round(lerp(c[2], tgt, p));
    return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
  }
  function mix(a, b, p) { var A = hexRgb(a), B = hexRgb(b); return "rgb(" + Math.round(lerp(A[0], B[0], p)) + "," + Math.round(lerp(A[1], B[1], p)) + "," + Math.round(lerp(A[2], B[2], p)) + ")"; }
  function rgba(h, a) { var c = hexRgb(h); return "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + a + ")"; }
  function pts(p) { return p.map(function (q) { return f1(q[0]) + "," + f1(q[1]); }).join(" "); }
  function pathOf(p, closed) { var d = ""; for (var i = 0; i < p.length; i++) d += (i ? " L" : "M") + f1(p[i][0]) + " " + f1(p[i][1]); return d + (closed ? " Z" : ""); }
  /** Catmull-Rom → cubic Bézier smooth path. */
  function smoothPath(p, closed) {
    if (!p.length) return "";
    if (p.length < 3 && !closed) return pathOf(p);
    var n = p.length, d = "M" + f1(p[0][0]) + " " + f1(p[0][1]);
    var last = closed ? n : n - 1;
    for (var i = 0; i < last; i++) {
      var p0 = p[closed ? (i - 1 + n) % n : Math.max(0, i - 1)], p1 = p[i], p2 = p[(i + 1) % n], p3 = p[closed ? (i + 2) % n : Math.min(n - 1, i + 2)];
      d += " C" + f1(p1[0] + (p2[0] - p0[0]) / 6) + " " + f1(p1[1] + (p2[1] - p0[1]) / 6) + " " + f1(p2[0] - (p3[0] - p1[0]) / 6) + " " + f1(p2[1] - (p3[1] - p1[1]) / 6) + " " + f1(p2[0]) + " " + f1(p2[1]);
    }
    return d + (closed ? " Z" : "");
  }
  S.smoothPath = smoothPath;
  /** Slightly wobbly hand-inked version of a polygon (points → path). */
  function roughPoly(p, r, amt, closed) {
    var out = [];
    for (var i = 0; i < p.length; i++) out.push([p[i][0] + (r() - 0.5) * amt, p[i][1] + (r() - 0.5) * amt]);
    return pathOf(out, closed !== false);
  }
  function fmtMoney(v, cur, dec) {
    var a = Math.abs(v), s;
    if (a >= 1e12) s = (v / 1e12).toFixed(dec != null ? dec : 1).replace(/\.0$/, "") + "T";
    else if (a >= 1e9) s = (v / 1e9).toFixed(dec != null ? dec : 1).replace(/\.0$/, "") + "B";
    else if (a >= 1e6) s = (v / 1e6).toFixed(dec != null ? dec : 1).replace(/\.0$/, "") + "M";
    else if (a >= 1e4) s = Math.round(v / 1000) + "K";
    else s = V.format(v, dec || 0);
    return (cur || "") + s;
  }
  S.fmtMoney = fmtMoney;

  // Word-timing helpers --------------------------------------------------------
  function words() { return V.words || []; }
  function syncAt(word, after, fallback, lead) {
    if (word) {
      var t = V.find(str(word), after || 0);
      if (t != null) return clampT(t - (lead == null ? 0.12 : lead));
    }
    return clampT(fallback);
  }
  S.syncAt = syncAt;
  function tAt(word, frac, after, lead) { return syncAt(word, after || 0, D() * frac, lead); }
  /** Lip-sync an actor over the narration between from/to, resting the mouth in pauses. */
  function narrate(actor, from, to) {
    var W = words();
    from = from == null ? 0 : from; to = to == null ? D() : to;
    if (W.length) {
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
        var t = a, k = 0;
        while (t < b - 0.2) { var e2 = Math.min(b, t + 1.6 + ((k * 7) % 5) * 0.25); actor.say(t, e2); t = e2 + 0.28; k++; }
      }
    }
    return actor;
  }
  S.narrate = narrate;
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
    out.lip = /^[mbpfv]/.test(w);
    return out;
  }
  /** Mouth state at t inside a talk window: {open, round, wide}. */
  function mouthAt(t, win) {
    var W = words(), i;
    var lt = t - win.s;
    if (W.length) {
      for (i = 0; i < W.length; i++) {
        var w = W[i];
        if (t < w.start - 0.03 || t > w.end + 0.03) continue;
        var vis = w._vis || (w._vis = wordVisemes(w.word));
        var dur = Math.max(0.08, w.end - w.start), p = clamp((t - w.start) / dur, 0, 1);
        var k = Math.min(vis.length - 1, Math.floor(p * vis.length)), q = (p * vis.length) % 1;
        var v = vis[k], env = Math.sin(q * PI) * 0.75 + 0.25;
        if (vis.lip && p < 0.12) env *= p / 0.12;
        return { open: v.open * env, round: v.round, wide: v.wide };
      }
      return { open: 0, round: 0, wide: 0 };
    }
    var o = Math.max(0, Math.sin(lt * 15.5) * 0.6 + Math.sin(lt * 9.1 + 1) * 0.4);
    return { open: o * 0.9, round: Math.max(0, Math.sin(lt * 3.3)) * 0.6, wide: Math.max(0, Math.cos(lt * 2.1)) * 0.6 };
  }
  /** Timing windows for an ordered list of text lines inside the narration (or spread evenly). */
  function lineWindows(lines, opts) {
    opts = opts || {};
    var Dd = D(), n = lines.length, out = new Array(n), after = 0;
    var t0 = opts.start != null ? opts.start : Math.min(0.5, Dd * 0.08);
    var t1 = opts.end != null ? opts.end : Math.max(t0 + 0.5, Dd - Math.min(0.6, Dd * 0.08));
    for (var i = 0; i < n; i++) {
      var ws = plain(lines[i]).split(/\s+/).filter(Boolean);
      if (!ws.length) continue;
      var key = ws.slice(0, Math.min(3, ws.length)).join(" ");
      var s = V.find(key, after);
      if (s == null && ws.length > 1) s = V.find(ws[0], after);
      if (s == null) continue;
      var e = V.findEnd(ws[ws.length - 1], s) || s + ws.length * 0.32;
      if (e - s > ws.length * 0.9 + 1.5) e = s + ws.length * 0.32;
      out[i] = { start: s, end: Math.max(e, s + 0.3), found: true };
      after = out[i].end - 0.01;
    }
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
      for (k = i0; k < j; k++) { var len = ((b - a) * (lens[k] + 1.2)) / tot; out[k] = { start: cur, end: cur + len * 0.8, found: false }; cur += len; }
      i0 = j;
    }
    for (i = 0; i < n; i++) { out[i].start = clamp(out[i].start, 0, Math.max(0, Dd - 0.3)); out[i].end = clamp(Math.max(out[i].end, out[i].start + 0.3), 0, Dd); }
    return out;
  }
  S.lines = lineWindows;

  // ───────────────────────── textures (canvas → data URL, cached) ─────────────────────────
  var texCache = {};
  function canvasUrl(key, w, h, draw) {
    if (texCache[key] != null) return texCache[key];
    var url = "";
    try {
      var c = document.createElement("canvas");
      c.width = w; c.height = h;
      var g = c.getContext("2d");
      draw(g, w, h, V.makeRand(S.hash(key) || 7));
      url = c.toDataURL("image/png");
    } catch (e) { url = ""; }
    texCache[key] = url;
    return url;
  }
  /** Paper grain: fibres and specks, transparent. */
  function paperTex() {
    return canvasUrl("fs-paper", 256, 256, function (g, w, h, r) {
      var i;
      for (i = 0; i < 3200; i++) { g.fillStyle = "rgba(80,60,30," + (0.02 + r() * 0.06).toFixed(3) + ")"; g.fillRect(r() * w, r() * h, 1 + r() * 1.6, 1 + r() * 1.6); }
      for (i = 0; i < 900; i++) { g.fillStyle = "rgba(255,255,255," + (0.04 + r() * 0.1).toFixed(3) + ")"; g.fillRect(r() * w, r() * h, 1 + r() * 2, 1); }
      g.lineWidth = 0.6;
      for (i = 0; i < 60; i++) {
        var x = r() * w, y = r() * h, a = r() * PI;
        g.strokeStyle = "rgba(90,64,30," + (0.04 + r() * 0.07).toFixed(3) + ")";
        g.beginPath(); g.moveTo(x, y); g.quadraticCurveTo(x + Math.cos(a) * 6 + r() * 4, y + Math.sin(a) * 6, x + Math.cos(a) * 12, y + Math.sin(a) * 12); g.stroke();
      }
    });
  }
  /** Watercolour wash: soft darker/lighter blotches, transparent (tiles). */
  function washTex() {
    return canvasUrl("fs-wash", 320, 320, function (g, w, h, r) {
      for (var i = 0; i < 46; i++) {
        var x = r() * w, y = r() * h, rad = 20 + r() * 70, dark = r() > 0.45;
        var gr = g.createRadialGradient(x, y, 0, x, y, rad);
        gr.addColorStop(0, dark ? "rgba(40,30,20,0.10)" : "rgba(255,255,255,0.13)");
        gr.addColorStop(1, dark ? "rgba(40,30,20,0)" : "rgba(255,255,255,0)");
        g.fillStyle = gr; g.beginPath(); g.arc(x, y, rad, 0, 7); g.fill();
      }
      // tile seams: draw again offset so the texture tiles softly
      for (i = 0; i < 12; i++) {
        var x2 = r() * w, y2 = r() * h, rad2 = 30 + r() * 60;
        [[0, 0], [w, 0], [0, h], [w, h], [-w, 0], [0, -h]].forEach(function (o) {
          var gr2 = g.createRadialGradient(x2 + o[0], y2 + o[1], 0, x2 + o[0], y2 + o[1], rad2);
          gr2.addColorStop(0, "rgba(30,24,16,0.05)"); gr2.addColorStop(1, "rgba(30,24,16,0)");
          g.fillStyle = gr2; g.beginPath(); g.arc(x2 + o[0], y2 + o[1], rad2, 0, 7); g.fill();
        });
      }
    });
  }
  S.textures = { paper: paperTex, wash: washTex };

  /** Shared SVG defs for hatch patterns (one per page). */
  var defsRoot = null;
  var PAT = {};
  function patterns(root) {
    if (defsRoot) return PAT;
    var svg = sv("svg", { class: "fs-defs", width: 0, height: 0, style: { position: "absolute", width: 0, height: 0 } }, root);
    defsRoot = sv("defs", null, svg);
    function pat(key, size, draw) {
      var id = nid("p");
      var p = sv("pattern", { id: id, patternUnits: "userSpaceOnUse", width: size, height: size }, defsRoot);
      draw(p);
      PAT[key] = "url(#" + id + ")";
    }
    pat("hatch", 9, function (p) { Ln(p, -2, 11, 11, -2, INK, 1.7, { opacity: 0.6 }); Ln(p, -2, 2, 2, -2, INK, 1.7, { opacity: 0.6 }); Ln(p, 7, 11, 11, 7, INK, 1.7, { opacity: 0.6 }); });
    pat("cross", 10, function (p) { Ln(p, -2, 12, 12, -2, INK, 1.2, { opacity: 0.5 }); Ln(p, -2, -2, 12, 12, INK, 1.2, { opacity: 0.5 }); });
    pat("hatchLight", 12, function (p) { Ln(p, -2, 14, 14, -2, INK, 1, { opacity: 0.3 }); });
    pat("dots", 10, function (p) { Ci(p, 3, 3, 1.3, INK, { opacity: 0.4 }); Ci(p, 8, 8, 1.3, INK, { opacity: 0.4 }); });
    pat("blue", 24, function (p) { Ln(p, 0, 0, 24, 0, "#DCE8F2", 1, { opacity: 0.5 }); Ln(p, 0, 0, 0, 24, "#DCE8F2", 1, { opacity: 0.5 }); });
    pat("water", 28, function (p) { Pth(p, "M0 10 Q7 4 14 10 T28 10", "none", { stroke: "#FFFFFF", "stroke-width": 1.4, opacity: 0.35 }); Pth(p, "M-6 22 Q1 16 8 22 T22 22", "none", { stroke: INK, "stroke-width": 1, opacity: 0.18 }); });
    return PAT;
  }
  S.patterns = function () { return patterns(V.root()); };
  function gradient(stops, vertical) {
    var id = nid("g");
    var gr = sv("linearGradient", { id: id, x1: 0, y1: 0, x2: vertical === false ? 1 : 0, y2: vertical === false ? 0 : 1 }, defsRoot);
    stops.forEach(function (s) { sv("stop", { offset: s[0], "stop-color": s[1], "stop-opacity": s[2] != null ? s[2] : 1 }, gr); });
    return "url(#" + id + ")";
  }

  // ───────────────────────── scene: parallax world + hud + camera ─────────────────────────
  var LAYERS = [["sky", 0.06], ["far", 0.28], ["mid", 0.55], ["near", 0.82], ["ground", 1], ["action", 1], ["front", 1.18]];
  var current = null;
  var SKIES = {
    day: { top: C.sky1, bot: C.sky2, sun: "#FFF3C4", haze: 0.12 },
    dawn: { top: "#B89BC4", bot: "#F7D5A6", sun: "#FFD79A", haze: 0.18 },
    sunset: { top: "#CF6A48", bot: "#F7CF92", sun: "#FFE09A", haze: 0.2, warm: true },
    storm: { top: "#4E5864", bot: "#9AA3AA", sun: null, haze: 0.2, storm: true },
    night: { top: "#1C2740", bot: "#43527A", sun: "#F4F0DF", haze: 0.15, night: true },
  };
  S.skies = Object.keys(SKIES);

  function Scene(root, opts) {
    opts = opts || {};
    root = root || V.root();
    root.classList.add("fs-root");
    this.root = root;
    var W = V.width, H = V.height;
    this.W = W; this.H = H; this.k = H / 1000; this.Ww = (1000 * W) / H;
    this.portrait = V.isPortrait; this.square = V.isSquare;
    this.G = num(opts.ground, this.portrait ? 1010 : this.square ? 1030 : 1040);
    this.horizon = num(opts.horizon, this.portrait ? 380 : this.square ? 340 : 300);
    this.charScale = num(opts.charScale, this.portrait ? 0.78 : this.square ? 1.02 : 1.22);
    this.x0 = -this.Ww * 0.6; this.x1 = this.Ww * 1.6; this.top = -520; this.bot = 1320;
    this.actors = []; this.frameFns = []; this.anims = []; this.labels = []; this.pops = [];
    this.tl = V.timeline();
    patterns(root);
    this.world = el("div.fs-world", { parent: root });
    this.layers = {};
    var self = this;
    LAYERS.forEach(function (L) {
      var div = el("div.fs-layer", { parent: self.world });
      var svg = sv("svg", { class: "fs-lsvg", viewBox: [self.x0, self.top, self.x1 - self.x0, self.bot - self.top].map(fx).join(" "), preserveAspectRatio: "none" });
      svg.style.left = px(self.x0 * self.k); svg.style.top = px(self.top * self.k);
      svg.style.width = px((self.x1 - self.x0) * self.k); svg.style.height = px((self.bot - self.top) * self.k);
      div.appendChild(svg);
      self.layers[L[0]] = { div: div, svg: svg, d: L[1], g: G(svg) };
    });
    var act = this.layers.action;
    this.html = el("div.fs-html", { parent: act.div });
    act.div.appendChild(act.svg);
    this.propLayer = G(act.svg, { class: "fs-props" });
    this.actorLayer = G(act.svg, { class: "fs-actors" });
    this.fxLayer = G(act.svg, { class: "fs-fx" });
    this.hud = el("div.fs-hud", { parent: root });
    this.osvg = sv("svg", { class: "fs-osvg", width: W, height: H, viewBox: "0 0 " + W + " " + H }, this.hud);
    this.cam = new Camera(this);
    this.sky = SKIES[opts.sky] ? opts.sky : "day";
    this.skyDef = SKIES[this.sky];
    this.empireName = str(opts.empire || "tech");
    drawSky(this, opts);
    if (opts.empire !== false && opts.empire !== "none") this.empire = buildEmpire(this, this.empireName, opts);
    buildFx(this, opts);
    current = this;
    V.onFrame(function (t) { self.update(t); });
  }
  S.Scene = Scene;
  var SP = Scene.prototype;
  /** Evenly spaced stage x positions for n figures. */
  SP.slots = function (n, spread) {
    var span = (spread || (this.portrait ? 0.62 : this.square ? 0.6 : 0.5)) * this.Ww, out = [];
    for (var i = 0; i < n; i++) out.push(this.Ww / 2 + (n === 1 ? 0 : (i / (n - 1) - 0.5) * span));
    return out;
  };
  /** World x for a hero figure on the left/right (landscape); centred in portrait. */
  SP.heroX = function (side) {
    if (this.portrait) return this.Ww / 2;
    return side === "right" ? this.Ww * (this.square ? 0.68 : 0.74) : this.Ww * (this.square ? 0.32 : 0.26);
  };
  SP.figure = function (kind, opts) { return new Figure(this, kind, opts); };
  SP.onFrame = function (f) { this.frameFns.push(f); };
  SP.toScreen = function (wx, wy, d) {
    var c = this.camNow || { x: this.Ww / 2, y: 500, z: 1 };
    d = d == null ? 1 : d;
    var cx = this.Ww / 2 + (c.x - this.Ww / 2) * d, cy = 500 + (c.y - 500) * d, z = 1 + (c.z - 1) * d;
    return { x: (wx - cx) * z * this.k + this.W / 2, y: (wy - cy) * z * this.k + this.H / 2, z: z };
  };
  SP.update = function (t) {
    var i;
    var c = this.cam.eval(t);
    this.camNow = c;
    for (var name in this.layers) {
      var L = this.layers[name], d = L.d;
      var cx = this.Ww / 2 + (c.x - this.Ww / 2) * d, cy = 500 + (c.y - 500) * d, z = 1 + (c.z - 1) * d;
      L.div.style.transform = "translate(" + fx(this.W / 2) + "px," + fx(this.H / 2) + "px) scale(" + z.toFixed(5) + ") translate(" + fx(-cx * this.k) + "px," + fx(-cy * this.k) + "px)";
    }
    for (i = 0; i < this.actors.length; i++) this.actors[i].update(t);
    for (i = 0; i < this.anims.length; i++) this.anims[i](t);
    for (i = 0; i < this.pops.length; i++) {
      var p = this.pops[i], k = p.at == null ? 1 : clamp((t - p.at) / p.dur, 0, 1);
      var s = p.at == null || t >= p.at + p.dur ? 1 : outBack(k);
      if (s !== p._s) { p._s = s; p.el.setAttribute("transform", "translate(" + f1(p.x) + " " + f1(p.y) + ") scale(" + f1(p.sc * s) + " " + f1(p.sc * Math.max(0.001, s)) + ")"); p.el.style.opacity = s <= 0.001 ? 0 : 1; }
    }
    for (i = 0; i < this.labels.length; i++) this.labels[i](t);
    for (i = 0; i < this.frameFns.length; i++) this.frameFns[i](t);
  };
  /** Register an SVG group that pops in at `at` (scale from its base point). */
  SP.pop = function (node, x, y, sc, at, dur) {
    var p = { el: node, x: x, y: y, sc: sc || 1, at: at == null ? null : clampT(at), dur: dur || 0.55, _s: -1 };
    this.pops.push(p);
    return p;
  };

  function Camera(sc) { this.sc = sc; this.kf = []; this.shakes = []; this.base = { x: sc.Ww / 2, y: 500, z: 1 }; this.drift = 1; this.dirty = true; }
  S.Camera = Camera;
  var CP = Camera.prototype;
  function camTarget(tg) {
    tg = tg || {};
    if (typeof tg === "function") return tg;
    return function (from) {
      var o = { x: from.x, y: from.y, z: from.z };
      if (tg.actor) { var a = tg.actor; o.x = a.x0 + num(tg.dx, 0); o.y = a.y0 - num(tg.focusY, 380) * a.scale + num(tg.dy, 0); }
      if (tg.x != null) o.x = num(tg.x, o.x);
      if (tg.y != null) o.y = num(tg.y, o.y);
      if (tg.zoom != null) o.z = num(tg.zoom, o.z);
      return o;
    };
  }
  CP.set = function (tg) { this.base = camTarget(tg)(this.base); return this; };
  CP.to = function (tg, at, dur, ease) {
    at = clampT(at == null ? 0 : at); dur = Math.max(0, num(dur, 1));
    this.kf.push({ t: at, dur: dur, ease: ease || "inOutCubic", fn: camTarget(tg) });
    this.dirty = true; return this;
  };
  CP.cut = function (tg, at) { return this.to(tg, at, 0); };
  CP.push = function (zoom, at, dur, tg) { var o = tg || {}; o.zoom = zoom; return this.to(o, at, dur == null ? 1.8 : dur, "inOutSine"); };
  /** Rise over the empire: start low and tight on the figure, climb and widen. */
  CP.rise = function (at, dur, opts) {
    opts = opts || {};
    var sc = this.sc;
    this.set({ x: opts.x != null ? opts.x : sc.Ww / 2, y: num(opts.fromY, 560), zoom: num(opts.fromZoom, 1.12) });
    return this.to({ x: opts.toX != null ? opts.toX : opts.x != null ? opts.x : sc.Ww / 2, y: num(opts.toY, 470), zoom: num(opts.toZoom, 1.0) }, at || 0, dur == null ? Math.max(2, D() * 0.8) : dur, opts.ease || "inOutSine");
  };
  CP.focus = function (actor, at, dur, zoom, opts) {
    opts = opts || {};
    return this.to({ actor: actor, zoom: zoom == null ? 1.3 : zoom, dx: opts.dx, dy: opts.dy, focusY: opts.focusY }, at, dur == null ? 0.9 : dur, opts.ease || "inOutCubic");
  };
  CP.shake = function (at, amp, dur) { this.shakes.push({ t: clampT(at), a: num(amp, 12), d: num(dur, 0.45) }); return this; };
  CP.compile = function () {
    this.kf.sort(function (a, b) { return a.t - b.t; });
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
      c = { x: lerp(from.x, tgt.x, p), y: lerp(from.y, tgt.y, p), z: Math.exp(lerp(Math.log(from.z), Math.log(tgt.z), p)) };
    }
    return c;
  };
  CP.eval = function (t) {
    if (this.dirty) this.compile();
    var c = this.evalKf(t);
    c.x += noise(t * 0.25, 11) * 3 * this.drift; c.y += noise(t * 0.22, 23) * 2.5 * this.drift;
    c.z *= 1 + noise(t * 0.18, 5) * 0.003 * this.drift;
    for (var i = 0; i < this.shakes.length; i++) {
      var s = this.shakes[i], lt = t - s.t;
      if (lt < 0 || lt > s.d) continue;
      var amp = s.a * (1 - lt / s.d);
      c.x += noise(lt * 28, 3 + i) * amp; c.y += noise(lt * 31, 7 + i) * amp;
    }
    var sc = this.sc, hw = sc.Ww / (2 * c.z), hh = 500 / c.z;
    c.z = Math.max(c.z, Math.max(sc.Ww / (sc.x1 - sc.x0), 1000 / (sc.bot - sc.top)) + 0.001);
    c.x = clamp(c.x, sc.x0 + hw + 1, sc.x1 - hw - 1);
    c.y = clamp(c.y, sc.top + hh + 1, sc.bot - hh - 1);
    return c;
  };

  // ───────────────────────── sky / weather / frame fx ─────────────────────────
  function drawSky(sc, opts) {
    var L = sc.layers.sky, g = L.g, sk = sc.skyDef, r = rng("sky" + sc.sky);
    var x0 = sc.x0, x1 = sc.x1, hz = sc.horizon;
    Rc(g, x0, sc.top, x1 - x0, sc.bot - sc.top, gradient([[0, sk.top], [0.75, sk.bot], [1, sk.bot]]));
    // haze band at the horizon
    Rc(g, x0, hz - 160, x1 - x0, 260, gradient([[0, sk.bot, 0], [0.6, "#FFFFFF", sk.haze], [1, "#FFFFFF", 0]]));
    if (sk.sun) {
      var sx = sc.Ww * (sk.night ? 0.72 : 0.78), sy = sk.warm ? hz - 60 : hz - 300, sr = sk.warm ? 92 : sk.night ? 48 : 70;
      var sun = G(g, { opacity: sk.night ? 0.95 : 0.9 });
      Ci(sun, sx, sy, sr * 2.6, gradient([[0, sk.sun, sk.night ? 0.25 : 0.45], [1, sk.sun, 0]]));
      Ci(sun, sx, sy, sr, sk.sun, merge(ink(2.4), { "stroke-opacity": 0.45 }));
      if (sk.night) { Ci(sun, sx + sr * 0.3, sy - sr * 0.2, sr * 0.18, INK, { opacity: 0.12 }); Ci(sun, sx - sr * 0.25, sy + sr * 0.3, sr * 0.12, INK, { opacity: 0.1 }); }
      if (sk.night) for (var s = 0; s < 70; s++) { var stx = x0 + r() * (x1 - x0), sty = sc.top + r() * (hz - 200 - sc.top); Ci(g, stx, sty, 1.4 + r() * 1.8, "#FFFFFF", { opacity: 0.4 + r() * 0.5 }); }
    }
    // clouds (drifting)
    var clouds = G(g);
    var cl = [], n = sk.storm ? 9 : 7;
    for (var i = 0; i < n; i++) {
      var cx = x0 + r() * (x1 - x0), cy = sc.top + 160 + r() * (hz - 260 - sc.top), s2 = 60 + r() * 120;
      var cg = G(clouds, { opacity: sk.storm ? 0.9 : 0.75 + r() * 0.2 });
      var fill = sk.storm ? mix("#6B7580", "#9AA3AA", r()) : sk.night ? "#5B6A8E" : sk.warm ? "#FBE6CC" : "#FFFFFF";
      var d = "";
      var np = 6, ptsC = [];
      for (var k = 0; k < np; k++) ptsC.push([cx + (k / (np - 1) - 0.5) * s2 * 2.2, cy - Math.sin((k / (np - 1)) * PI) * s2 * (0.55 + r() * 0.3) + (r() - 0.5) * s2 * 0.2]);
      ptsC.push([cx + s2 * 1.1, cy + s2 * 0.18]); ptsC.push([cx - s2 * 1.1, cy + s2 * 0.18]);
      d = smoothPath(ptsC, true);
      Pth(cg, d, fill, merge(ink(2.2), { "stroke-opacity": 0.5 }));
      Pth(cg, "M" + f1(cx - s2 * 0.9) + " " + f1(cy + s2 * 0.1) + " Q" + f1(cx) + " " + f1(cy + s2 * 0.3) + " " + f1(cx + s2 * 0.9) + " " + f1(cy + s2 * 0.1), "none", { stroke: INK, "stroke-width": 1.6, opacity: 0.18 });
      if (sk.storm) Pth(cg, "M" + f1(cx - s2 * 0.8) + " " + f1(cy - s2 * 0.1) + " L" + f1(cx + s2 * 0.9) + " " + f1(cy + s2 * 0.05), PAT.hatchLight, {});
      cl.push({ g: cg, x: cx, y: cy, v: 6 + r() * 10, ph: r() * 6 });
    }
    sc.anims.push(function (t) {
      for (var i = 0; i < cl.length; i++) cl[i].g.setAttribute("transform", "translate(" + f1(((t * cl[i].v + cl[i].ph * 40) % 600) - 300) + " " + f1(Math.sin(t * 0.3 + cl[i].ph) * 4) + ")");
    });
    if (sk.storm) {
      // rain streaks + lightning flashes
      var rain = G(sc.layers.front.g, { opacity: 0.35 });
      var rr = rng("rain");
      var drops = [];
      for (var q = 0; q < 70; q++) { var dx = sc.x0 + rr() * (sc.x1 - sc.x0), dy = sc.top + rr() * (sc.bot - sc.top); drops.push({ e: Ln(rain, dx, dy, dx - 14, dy + 60, "#F2F5F7", 2.2, { opacity: 0.6 + rr() * 0.4 }), x: dx, y: dy, v: 900 + rr() * 500 }); }
      var flash = Rc(sc.layers.front.g, sc.x0, sc.top, sc.x1 - sc.x0, sc.bot - sc.top, "#FFFFFF", { opacity: 0 });
      sc.anims.push(function (t) {
        for (var i = 0; i < drops.length; i++) { var dd = drops[i]; var yy = ((dd.y + t * dd.v - sc.top) % (sc.bot - sc.top)) + sc.top - dd.y; dd.e.setAttribute("transform", "translate(" + f1(-t * dd.v * 0.22 % 300) + " " + f1(yy) + ")"); }
        var fl = hash01(Math.floor(t * 6) + 31) > 0.955 ? 0.35 * hash01(Math.floor(t * 30)) : 0;
        flash.setAttribute("opacity", fl.toFixed(3));
      });
    }
  }
  function buildFx(sc, opts) {
    var fxd = el("div.fs-fx", { parent: sc.root });
    var pt = paperTex();
    if (pt) el("div.fs-grain", { parent: fxd, style: { backgroundImage: "url(" + pt + ")", backgroundSize: px(u(256)) + " " + px(u(256)) } });
    var wt = washTex();
    if (wt) el("div.fs-wash", { parent: fxd, style: { backgroundImage: "url(" + wt + ")", backgroundSize: px(u(420)) + " " + px(u(420)) } });
    el("div.fs-vignette", { parent: fxd });
    if (sc.skyDef.warm) el("div.fs-warm", { parent: fxd });
    if (sc.skyDef.storm) el("div.fs-cold", { parent: fxd });
    if (sc.skyDef.night) el("div.fs-night", { parent: fxd });
  }

  // ───────────────────────── the empire: aerial illustrated landscape ─────────────────────────
  // Buildings are drawn in local units (origin = bottom centre of the front face, y up negative) as oblique
  // boxes: front face, lighter top, darker hatched side. Depth scale comes from world y (further = smaller).
  var OB = { dx: 0.55, dy: -0.42 };
  function box(g, w, h, d, front, opts) {
    opts = opts || {};
    var dx = d * OB.dx, dy = d * OB.dy, hw = w / 2;
    var side = opts.side || shade(front, -0.22), top = opts.top || shade(front, 0.28);
    var st = ink(opts.sw || 3);
    Pth(g, "M" + f1(hw) + " 0 L" + f1(hw + dx) + " " + f1(dy) + " L" + f1(hw + dx) + " " + f1(dy - h) + " L" + f1(hw) + " " + f1(-h) + " Z", side, st);
    Pth(g, "M" + f1(hw) + " 0 L" + f1(hw + dx) + " " + f1(dy) + " L" + f1(hw + dx) + " " + f1(dy - h) + " L" + f1(hw) + " " + f1(-h) + " Z", PAT.hatchLight, {});
    Pth(g, "M" + f1(-hw) + " " + f1(-h) + " L" + f1(hw) + " " + f1(-h) + " L" + f1(hw + dx) + " " + f1(dy - h) + " L" + f1(-hw + dx) + " " + f1(dy - h) + " Z", top, st);
    Rc(g, -hw, -h, w, h, front, st);
    return { dx: dx, dy: dy, hw: hw };
  }
  function windows(g, x0, y0, w, h, cols, rows, fill, opts) {
    opts = opts || {};
    var cw = w / cols, rh = h / rows, ww = cw * 0.5, wh = rh * 0.55;
    for (var r = 0; r < rows; r++) for (var c = 0; c < cols; c++) {
      if (opts.rand && opts.rand() < 0.22) continue;
      Rc(g, x0 + c * cw + (cw - ww) / 2, y0 + r * rh + (rh - wh) / 2, ww, wh, fill, { stroke: INK, "stroke-width": 1.2, "stroke-opacity": 0.7 });
    }
  }
  function cylinder(g, cx, base, r, h, fill, opts) {
    opts = opts || {};
    var st = ink(opts.sw || 2.6), ry = r * 0.42;
    Pth(g, "M" + f1(cx - r) + " " + f1(base) + " A" + f1(r) + " " + f1(ry) + " 0 0 0 " + f1(cx + r) + " " + f1(base) + " L" + f1(cx + r) + " " + f1(base - h) + " L" + f1(cx - r) + " " + f1(base - h) + " Z", fill, st);
    Rc(g, cx + r * 0.3, base - h, r * 0.7, h, PAT.hatchLight, {});
    El(g, cx, base - h, r, ry, shade(fill, 0.3), st);
  }
  function tree(g, x, y, s, r, dark) {
    var col = dark ? C.hill2 : mix(C.hill2, C.green, r());
    Ln(g, x, y, x, y - 14 * s, INK, 3 * s);
    El(g, x, y - 26 * s, 15 * s, 18 * s, col, ink(2.4));
    El(g, x - 7 * s, y - 18 * s, 10 * s, 12 * s, shade(col, 0.15), ink(2));
    El(g, x + 8 * s, y - 20 * s, 9 * s, 11 * s, shade(col, -0.12), ink(2));
  }
  function treeRow(g, x0, x1, y, n, s, r) { for (var i = 0; i < n; i++) tree(g, lerp(x0, x1, (i + r() * 0.5) / n), y + (r() - 0.5) * 8, s * (0.8 + r() * 0.4), r); }

  // Building catalogue -------------------------------------------------------------------------
  var B = {};
  B.factory = function (g, o, r) {
    var w = o.w || 300, h = 110, d = 130;
    var b = box(g, w, h, d, C.brick, { side: C.brickSide, top: shade(C.brick, 0.35) });
    var n = Math.max(2, Math.round(w / 70)), tw = w / n;
    for (var i = 0; i < n; i++) {
      var x = -w / 2 + i * tw;
      Pth(g, "M" + f1(x) + " " + f1(-h) + " L" + f1(x) + " " + f1(-h - 40) + " L" + f1(x + tw) + " " + f1(-h) + " Z", C.glass, ink(2.4));
      Pth(g, "M" + f1(x + b.dx) + " " + f1(-h + b.dy) + " L" + f1(x) + " " + f1(-h) + " L" + f1(x) + " " + f1(-h - 40) + " L" + f1(x + b.dx) + " " + f1(-h - 40 + b.dy) + " Z", shade(C.brick, 0.1), ink(2.4));
    }
    windows(g, -w / 2 + 10, -h + 14, w - 20, h * 0.55, Math.max(3, Math.round(w / 48)), 2, "#7B8E9C", { rand: r });
    Rc(g, -24, -44, 48, 44, "#5C4A3C", ink(2.4));
    var stacks = [];
    var ns = o.stacks != null ? o.stacks : 2;
    for (var s = 0; s < ns; s++) {
      var sx = -w / 2 + 40 + s * 70 + b.dx * 0.5, sy = -h + b.dy * 0.5;
      cylinder(g, sx, sy, 12, 120 + s * 20, C.brickSide, { sw: 2.4 });
      Rc(g, sx - 14, sy - 120 - s * 20 - 4, 28, 10, INK, {});
      stacks.push({ x: sx, y: sy - 120 - s * 20 - 4 });
    }
    return { stacks: stacks, w: w };
  };
  B.warehouse = function (g, o, r) {
    var w = o.w || 260, h = 70, d = 120;
    var b = box(g, w, h, d, C.wall, { side: C.wallSide, top: C.roof });
    for (var i = 1; i < 5; i++) Ln(g, -w / 2 + (i * w) / 5, -h, -w / 2 + (i * w) / 5 + b.dx, -h + b.dy, INK, 1.2, { opacity: 0.35 });
    for (var k = 0; k < 3; k++) Rc(g, -w / 2 + 20 + k * (w - 40) / 3, -h + 22, (w - 40) / 3 - 16, h - 22, "#8A8F94", ink(2));
    Rc(g, -w / 2 + 6, -h - 10, w - 12, 10, C.red, ink(2.2));
    return {};
  };
  B.hq = function (g, o, r) {
    var w = o.w || 220, h = o.h || 240, d = 120;
    var b = box(g, w, h, d, C.glass, { side: C.glassSide, top: "#DCE7EC" });
    for (var i = 1; i < 8; i++) Ln(g, -w / 2, -h + (i * h) / 8, w / 2, -h + (i * h) / 8, INK, 1.1, { opacity: 0.35 });
    for (var j = 1; j < 5; j++) Ln(g, -w / 2 + (j * w) / 5, -h, -w / 2 + (j * w) / 5, 0, INK, 1.1, { opacity: 0.35 });
    Rc(g, -w / 2 + 4, -h + 4, w * 0.3, h - 8, "#FFFFFF", { opacity: 0.25 });
    Rc(g, -w / 2 - 30, -34, w + 60, 34, C.wall, ink(2.6));
    Rc(g, -40, -34, 80, 34, "#5C7B8E", ink(2.2));
    Rc(g, -w / 2 - 36, -40, w + 72, 8, C.wallSide, ink(2));
    Ln(g, w / 2 + b.dx - 12, -h + b.dy, w / 2 + b.dx - 12, -h + b.dy - 70, INK, 3);
    var flag = Pth(g, "M" + f1(w / 2 + b.dx - 12) + " " + f1(-h + b.dy - 70) + " L" + f1(w / 2 + b.dx + 30) + " " + f1(-h + b.dy - 62) + " L" + f1(w / 2 + b.dx - 12) + " " + f1(-h + b.dy - 52) + " Z", C.red, ink(2));
    return { flag: flag };
  };
  B.office = function (g, o, r) {
    var w = o.w || 150, h = o.h || 130, d = 90;
    box(g, w, h, d, C.wall2, { side: C.wallSide });
    windows(g, -w / 2 + 8, -h + 10, w - 16, h - 20, 4, Math.max(2, Math.round(h / 40)), "#7B8E9C", { rand: r });
    Rc(g, -w / 2, -h - 8, w, 8, shade(C.wall2, -0.3), ink(2));
    return {};
  };
  B.tower = function (g, o, r) {
    var w = o.w || 90, h = o.h || 320, d = 60;
    var col = o.glass ? C.glass : mix(C.wall2, "#B7C0CB", r());
    box(g, w, h, d, col, { side: shade(col, -0.25) });
    windows(g, -w / 2 + 6, -h + 10, w - 12, h - 24, 3, Math.max(4, Math.round(h / 32)), o.glass ? "#DDE9EF" : "#6F8290", { rand: r });
    Rc(g, -w / 2, -h - 6, w, 6, INK, {});
    if (o.spire) Ln(g, 0, -h - 6, 0, -h - 70, INK, 4);
    return {};
  };
  B.store = function (g, o, r) {
    var w = o.w || 200, h = 80, d = 110;
    box(g, w, h, d, C.cream, { side: C.wall2, top: C.wall });
    var n = Math.round(w / 22);
    for (var i = 0; i < n; i++) Rc(g, -w / 2 + (i * w) / n, -h + 28, w / n + 0.5, 16, i % 2 ? C.red : "#F6EFE1", { stroke: "none" });
    Rc(g, -w / 2, -h + 28, w, 16, "none", ink(2.4));
    Rc(g, -w / 2 + 10, -h + 46, w - 20, h - 50, "#7FA6BD", ink(2.2));
    Ln(g, -w / 2 + 10, -h + 46, w / 2 - 10, -h + 46, "#FFFFFF", 3, { opacity: 0.5 });
    Rc(g, -w / 2 + 16, -h - 30, w - 32, 26, o.signColor || C.blue, ink(2.6));
    Rc(g, -w / 2 + 30, -h - 24, (w - 60) * 0.55, 12, "#FFFFFF", { opacity: 0.75 });
    return {};
  };
  B.bigbox = function (g, o, r) {
    var w = o.w || 340, h = 90, d = 180;
    box(g, w, h, d, "#D8CBB4", { side: "#B9AC95", top: "#E6DCC7" });
    Rc(g, -w / 2 + 20, -h - 38, 150, 34, C.red, ink(2.8));
    Rc(g, -w / 2 + 34, -h - 30, 110, 16, "#FFFFFF", { opacity: 0.8 });
    Rc(g, -30, -50, 60, 50, "#6F8A99", ink(2.2));
    Ln(g, -w / 2, -h + 30, w / 2, -h + 30, INK, 1.6, { opacity: 0.4 });
    return {};
  };
  B.house = function (g, o, r) {
    var w = o.w || 70, h = 44, d = 60;
    var col = mix("#E8D9BE", "#D9C4A6", r());
    var b = box(g, w, h, d, col, { side: shade(col, -0.22) });
    Pth(g, "M" + f1(-w / 2) + " " + f1(-h) + " L0 " + f1(-h - 36) + " L" + f1(w / 2) + " " + f1(-h) + " Z", C.roofRed, ink(2.4));
    Pth(g, "M0 " + f1(-h - 36) + " L" + f1(b.dx) + " " + f1(-h - 36 + b.dy) + " L" + f1(w / 2 + b.dx) + " " + f1(-h + b.dy) + " L" + f1(w / 2) + " " + f1(-h) + " Z", shade(C.roofRed, -0.25), ink(2.4));
    Rc(g, -10, -26, 20, 26, "#5C4A3C", ink(2));
    Rc(g, 16, -32, 14, 12, "#7B8E9C", ink(1.6));
    Rc(g, -30, -32, 14, 12, "#7B8E9C", ink(1.6));
    return {};
  };
  B.silo = function (g, o, r) {
    cylinder(g, 0, 0, 26, 130, C.metal, { sw: 2.6 });
    Pth(g, "M-26 -130 Q0 -160 26 -130", shade(C.metal, 0.2), ink(2.4));
    for (var i = 1; i < 5; i++) Ln(g, -26, -i * 26, 26, -i * 26, INK, 1.2, { opacity: 0.35 });
    return {};
  };
  B.tank = function (g, o, r) {
    var rr = o.r || 70, hh = o.h || 60;
    cylinder(g, 0, 0, rr, hh, "#C9CDCF", { sw: 2.8 });
    Pth(g, "M" + f1(-rr) + " " + f1(-hh) + " Q0 " + f1(-hh - 22) + " " + f1(rr) + " " + f1(-hh), "#D9DDDF", ink(2.4));
    Pth(g, "M" + f1(-rr + 8) + " " + f1(-hh + 6) + " q10 -40 40 -46", "none", { stroke: INK, "stroke-width": 2, opacity: 0.5 });
    return {};
  };
  B.watertower = function (g, o, r) {
    Ln(g, -24, 0, -14, -110, INK, 4); Ln(g, 24, 0, 14, -110, INK, 4); Ln(g, 0, 0, 0, -110, INK, 3);
    Ln(g, -18, -60, 18, -60, INK, 2.2); Ln(g, -22, -30, 22, -30, INK, 2.2);
    cylinder(g, 0, -108, 34, 48, C.wood, { sw: 2.6 });
    Pth(g, "M-36 -156 L0 -182 L36 -156 Z", C.roofRed, ink(2.4));
    return {};
  };
  B.turbine = function (g, o, r) {
    Pth(g, "M-7 0 L-3 -150 L3 -150 L7 0 Z", "#EEF0F0", ink(2.4));
    Ci(g, 0, -150, 8, "#EEF0F0", ink(2.4));
    var rot = G(g, { class: "fs-rotor" });
    for (var i = 0; i < 3; i++) Pth(rot, "M0 0 L-5 -14 L-2 -72 L2 -72 L5 -14 Z", "#F6F7F7", merge(ink(2.2), { transform: "rotate(" + i * 120 + ")" }));
    Ci(rot, 0, 0, 4, INK, {});
    return { rotor: rot, rx: 0, ry: -150, ph: r() * 360, speed: 60 + r() * 40 };
  };
  B.solar = function (g, o, r) {
    var w = o.w || 160;
    for (var i = 0; i < 3; i++) {
      var y = -i * 22;
      Pth(g, "M" + f1(-w / 2) + " " + f1(y) + " L" + f1(w / 2) + " " + f1(y) + " L" + f1(w / 2 + 28) + " " + f1(y - 16) + " L" + f1(-w / 2 + 28) + " " + f1(y - 16) + " Z", "#3F5E7A", ink(2));
      for (var k = 1; k < 6; k++) Ln(g, -w / 2 + (k * w) / 6, y, -w / 2 + (k * w) / 6 + 28, y - 16, "#9FC2D6", 1.2, { opacity: 0.8 });
    }
    return {};
  };
  B.datacentre = function (g, o, r) {
    var w = o.w || 240, h = 60, d = 140;
    box(g, w, h, d, "#C8CFD4", { side: "#9EA7AD", top: "#DDE2E5" });
    for (var i = 0; i < 6; i++) Rc(g, -w / 2 + 16 + i * (w - 32) / 6, -h + 14, 10, h - 28, "#6F8290", ink(1.6));
    for (var k = 0; k < 4; k++) Ci(g, -w / 2 + 90 + k * 50, -h - 10, 10, "#AEB4B8", ink(2));
    return {};
  };
  B.parking = function (g, o, r) {
    var w = o.w || 220, d = o.d || 110, dx = d * OB.dx, dy = d * OB.dy;
    Pth(g, "M" + f1(-w / 2) + " 0 L" + f1(w / 2) + " 0 L" + f1(w / 2 + dx) + " " + f1(dy) + " L" + f1(-w / 2 + dx) + " " + f1(dy) + " Z", C.road, ink(2.4));
    var rows = 2, cols = Math.max(4, Math.round(w / 26));
    for (var rr = 0; rr < rows; rr++) for (var c = 0; c < cols; c++) {
      if (r() < 0.3) continue;
      var px0 = -w / 2 + 12 + c * (w - 24) / cols + ((rr + 0.5) / rows) * dx * 0.9, py0 = ((rr + 0.5) / rows) * dy;
      Rc(g, px0, py0 - 10, 14, 8, mix(C.red, C.blue, r()), ink(1.4));
    }
    return {};
  };
  B.carlot = function (g, o, r) { return B.parking(g, merge(o, { w: o.w || 300, d: 160 }), r); };
  B.track = function (g, o, r) {
    var rx = o.rx || 260, ry = rx * 0.4;
    El(g, 0, 0, rx + 26, ry + 26, C.grass, { stroke: "none" });
    El(g, 0, 0, rx, ry, "none", { stroke: C.roadDark, "stroke-width": 26 });
    El(g, 0, 0, rx + 13, ry + 13, "none", ink(2.2));
    El(g, 0, 0, rx - 13, ry - 13, "none", ink(2.2));
    El(g, 0, 0, rx, ry, "none", { stroke: "#FFFFFF", "stroke-width": 1.6, "stroke-dasharray": "14 12", opacity: 0.7 });
    var car = G(g);
    Rc(car, -12, -9, 24, 10, C.red, ink(2));
    Rc(car, -6, -14, 12, 6, "#DDE9EF", ink(1.6));
    return { car: car, rx: rx, ry: ry, speed: 1.2 + r() * 0.4 };
  };
  B.port = function (g, o, r) {
    var w = o.w || 420, d = 120, dx = d * OB.dx, dy = d * OB.dy;
    Pth(g, "M" + f1(-w / 2) + " 0 L" + f1(w / 2) + " 0 L" + f1(w / 2 + dx) + " " + f1(dy) + " L" + f1(-w / 2 + dx) + " " + f1(dy) + " Z", "#C7C0B0", ink(2.6));
    var cols = [C.red, C.blue, C.gold, C.green, "#8A8F94"];
    for (var i = 0; i < 7; i++) {
      var cx = -w / 2 + 30 + i * 46, lv = 1 + Math.floor(r() * 3);
      for (var l = 0; l < lv; l++) { var cc = cols[Math.floor(r() * cols.length)]; box(G(g, { transform: "translate(" + f1(cx) + " " + f1(-l * 16 - 6) + ")" }), 34, 16, 22, cc, { sw: 1.8 }); }
    }
    var cranes = [];
    for (var c = 0; c < 2; c++) {
      var kx = -w / 2 + 120 + c * 190 + dx * 0.6, ky = dy * 0.6;
      var cg = G(g, { transform: "translate(" + f1(kx) + " " + f1(ky) + ")" });
      Pth(cg, "M-30 0 L-18 -160 L18 -160 L30 0", "none", ink(4));
      Ln(cg, -24, -60, 24, -60, INK, 3); Ln(cg, -20, -110, 20, -110, INK, 3);
      Ln(cg, -120, -170, 70, -170, INK, 6);
      Pth(cg, "M-30 -160 L-120 -170 L-110 -165 Z", C.red, ink(2));
      Pth(cg, "M-110 -172 L-120 -172 L-130 -230 L-126 -230 Z", C.red, ink(2));
      var trolley = G(cg);
      Rc(trolley, -10, -176, 20, 12, C.gold, ink(2));
      var hook = Ln(trolley, 0, -164, 0, -100, INK, 2);
      cranes.push({ trolley: trolley, hook: hook, ph: r() * 6 });
    }
    return { cranes: cranes };
  };
  B.bank = function (g, o, r) {
    var w = o.w || 260, h = 120, d = 110;
    box(g, w, h, d, "#E2D9C6", { side: "#C4B9A3", top: "#EDE6D6" });
    Pth(g, "M" + f1(-w / 2 - 12) + " " + f1(-h) + " L0 " + f1(-h - 56) + " L" + f1(w / 2 + 12) + " " + f1(-h) + " Z", "#D5CBB6", ink(2.8));
    for (var i = 0; i < 7; i++) { var cx = -w / 2 + 26 + i * (w - 52) / 6; Rc(g, cx - 8, -h + 12, 16, h - 24, "#F2EBDC", ink(2.2)); Rc(g, cx - 11, -h + 8, 22, 6, "#E2D9C6", ink(1.8)); }
    Rc(g, -w / 2 - 20, -12, w + 40, 12, "#C4B9A3", ink(2.4));
    return {};
  };
  B.refinery = function (g, o, r) {
    B.tank(G(g, { transform: "translate(-120 0)" }), { r: 60, h: 50 }, r);
    B.tank(G(g, { transform: "translate(20 10)" }), { r: 70, h: 60 }, r);
    var stacks = [];
    for (var i = 0; i < 3; i++) { var sx = 130 + i * 34; cylinder(g, sx, 0, 8, 150 + i * 25, C.metalDark, { sw: 2 }); for (var k = 1; k < 5; k++) Ln(g, sx - 8, -k * 30, sx + 8, -k * 30, INK, 1, { opacity: 0.4 }); stacks.push({ x: sx, y: -150 - i * 25 }); }
    for (var p = 0; p < 3; p++) Pth(g, "M" + f1(-180 + p * 40) + " -8 Q" + f1(-160 + p * 40) + " -60 " + f1(-120 + p * 40) + " -30", "none", { stroke: C.metalDark, "stroke-width": 5 });
    return { stacks: stacks };
  };
  B.derrick = function (g, o, r) {
    Pth(g, "M-26 0 L-8 -140 L8 -140 L26 0 Z", "none", ink(3));
    for (var i = 1; i < 5; i++) { var y = -i * 28, w = 26 - i * 4.4; Ln(g, -w, y, w, y, INK, 2); Ln(g, -w, y, w - 4, y - 28, INK, 1.4, { opacity: 0.6 }); }
    var beam = G(g, { transform: "translate(0 -120)" });
    Pth(beam, "M-60 0 L60 -8 L60 2 L-60 10 Z", INK, {});
    return { beam: beam, ph: r() * 6 };
  };
  B.pylon = function (g, o, r) {
    Pth(g, "M-24 0 L-8 -150 L8 -150 L24 0", "none", ink(2.6));
    Ln(g, -40, -120, 40, -120, INK, 2.6); Ln(g, -30, -90, 30, -90, INK, 2.6);
    for (var i = 1; i < 6; i++) Ln(g, -22 + i * 2.6, -i * 25, 22 - i * 2.6, -i * 25, INK, 1.2, { opacity: 0.6 });
    return {};
  };
  B.field = function (g, o, r) {
    var w = o.w || 260, d = o.d || 140, dx = d * OB.dx, dy = d * OB.dy;
    var col = mix(C.field, C.grass, r());
    Pth(g, "M" + f1(-w / 2) + " 0 L" + f1(w / 2) + " 0 L" + f1(w / 2 + dx) + " " + f1(dy) + " L" + f1(-w / 2 + dx) + " " + f1(dy) + " Z", col, ink(2));
    var n = Math.round(w / 18);
    for (var i = 1; i < n; i++) Ln(g, -w / 2 + (i * w) / n, 0, -w / 2 + (i * w) / n + dx, dy, INK, 1.1, { opacity: 0.25 });
    return {};
  };
  B.barn = function (g, o, r) {
    var w = 90, h = 50, d = 80;
    var b = box(g, w, h, d, C.roofRed, { side: shade(C.roofRed, -0.25) });
    Pth(g, "M" + f1(-w / 2) + " " + f1(-h) + " L" + f1(-w / 2 + 10) + " " + f1(-h - 24) + " L0 " + f1(-h - 36) + " L" + f1(w / 2 - 10) + " " + f1(-h - 24) + " L" + f1(w / 2) + " " + f1(-h) + " Z", "#8E8A82", ink(2.4));
    Pth(g, "M0 " + f1(-h - 36) + " L" + f1(b.dx) + " " + f1(-h - 36 + b.dy) + " L" + f1(w / 2 + b.dx) + " " + f1(-h + b.dy) + " L" + f1(w / 2) + " " + f1(-h) + " Z", "#75716A", ink(2.4));
    Rc(g, -16, -34, 32, 34, "#5C3A2E", ink(2));
    Ln(g, -16, -34, 16, 0, "#E8D9BE", 2); Ln(g, 16, -34, -16, 0, "#E8D9BE", 2);
    return {};
  };
  B.garage = function (g, o, r) {
    var w = 150, h = 70, d = 100;
    var b = box(g, w, h, d, "#E1D7C2", { side: "#C2B59C" });
    Pth(g, "M" + f1(-w / 2 - 8) + " " + f1(-h) + " L0 " + f1(-h - 34) + " L" + f1(w / 2 + 8) + " " + f1(-h) + " Z", "#8E9BA6", ink(2.6));
    Pth(g, "M0 " + f1(-h - 34) + " L" + f1(b.dx) + " " + f1(-h - 34 + b.dy) + " L" + f1(w / 2 + b.dx) + " " + f1(-h + b.dy) + " L" + f1(w / 2 + 8) + " " + f1(-h) + " Z", "#75818B", ink(2.4));
    Rc(g, -44, -54, 88, 54, "#9AA2A8", ink(2.4));
    for (var i = 1; i < 4; i++) Ln(g, -44, -54 + i * 13, 44, -54 + i * 13, INK, 1.4, { opacity: 0.5 });
    Rc(g, -40, -46, 80, 20, "#F7E6B0", { opacity: 0.55 });
    return {};
  };
  B.skyline = function (g, o, r) {
    var w = o.w || 1400, n = Math.round(w / 34), x = -w / 2;
    for (var i = 0; i < n; i++) {
      var bw = 22 + r() * 26, bh = 30 + r() * 110 * (0.5 + Math.sin((i / n) * PI));
      Rc(g, x, -bh, bw, bh, mix("#AEBAC4", "#C9D2D8", r()), ink(1.6));
      if (r() > 0.6) Ln(g, x + bw / 2, -bh, x + bw / 2, -bh - 20 - r() * 20, INK, 1.6);
      x += bw + 4 + r() * 10;
    }
    return {};
  };
  B.ship = function (g, o, r) {
    var w = o.w || 200;
    Pth(g, "M" + f1(-w / 2) + " -20 L" + f1(w / 2) + " -20 L" + f1(w / 2 - 20) + " 10 L" + f1(-w / 2 + 14) + " 10 Z", o.color || "#3F4F5E", ink(2.6));
    Ln(g, -w / 2 + 6, -12, w / 2 - 8, -12, "#FFFFFF", 2, { opacity: 0.5 });
    var cols = [C.red, C.blue, C.gold, C.green];
    for (var i = 0; i < Math.round(w / 30) - 2; i++) for (var l = 0; l < 1 + Math.floor(r() * 3); l++) Rc(g, -w / 2 + 30 + i * 28, -32 - l * 12, 24, 12, cols[Math.floor(r() * 4)], ink(1.6));
    Rc(g, w / 2 - 60, -62, 36, 42, "#F3EFE4", ink(2.2));
    Rc(g, w / 2 - 54, -56, 24, 8, "#7B8E9C", ink(1.4));
    Ln(g, w / 2 - 42, -62, w / 2 - 42, -84, INK, 2.4);
    return {};
  };
  S.buildings = B;

  // Empire presets: hero building + a weighted catalogue; placed on a depth grid.
  var PRESETS = {
    tech: { hero: "hq", items: ["office", "office", "datacentre", "parking", "turbine", "turbine", "solar", "office", "datacentre", "parking", "turbine"], far: "hills", trees: 1.2 },
    factory: { hero: "factory", items: ["warehouse", "factory", "silo", "warehouse", "watertower", "silo", "warehouse", "office", "parking", "factory"], far: "hills", trees: 0.6, rail: true },
    auto: { hero: "factory", items: ["track", "carlot", "warehouse", "carlot", "store", "office", "warehouse", "parking", "silo"], far: "hills", trees: 0.5, heroOpts: { stacks: 3, w: 360 } },
    retail: { hero: "bigbox", items: ["store", "store", "parking", "warehouse", "house", "house", "store", "parking", "house", "house", "store"], far: "skyline", trees: 0.9 },
    shipping: { hero: "port", items: ["warehouse", "warehouse", "office", "parking", "warehouse", "silo", "tank", "warehouse"], far: "sea", trees: 0.4 },
    finance: { hero: "bank", items: ["tower", "tower", "tower", "office", "tower", "tower", "office", "tower", "tower"], far: "skyline", trees: 0.5 },
    energy: { hero: "refinery", items: ["tank", "derrick", "turbine", "pylon", "tank", "turbine", "derrick", "pylon", "turbine"], far: "hills", trees: 0.3 },
    food: { hero: "factory", items: ["field", "silo", "barn", "field", "field", "silo", "barn", "warehouse", "field"], far: "hills", trees: 0.8, heroOpts: { stacks: 1, w: 240 } },
    garage: { hero: "garage", items: ["house", "house", "house", "house", "house", "house"], far: "hills", trees: 1.5 },
    city: { hero: "tower", items: ["tower", "tower", "office", "tower", "tower", "office", "tower", "office", "tower"], far: "skyline", trees: 0.3, heroOpts: { h: 400, w: 120, glass: true, spire: true } },
  };
  S.empires = Object.keys(PRESETS);
  var PRESET_ALIASES = { software: "tech", internet: "tech", computers: "tech", industrial: "factory", manufacturing: "factory", cars: "auto", automotive: "auto", shops: "retail", stores: "retail", logistics: "shipping", port: "shipping", bank: "finance", banking: "finance", oil: "energy", power: "energy", farm: "food", agriculture: "food", workshop: "garage", startup: "garage", skyline: "city", urban: "city" };
  function presetName(n) { n = str(n).toLowerCase().trim(); if (PRESETS[n]) return n; return PRESET_ALIASES[n] || "tech"; }
  function perspAt(sc, y) { return lerp(0.55, 1.45, clamp((y - sc.horizon) / (sc.G - 90 - sc.horizon), 0, 1)); }

  /** Build the landscape: ground, far band, hero + buildings, roads, trees, animated bits. */
  function buildEmpire(sc, name, opts) {
    opts = opts || {};
    name = presetName(name);
    var P = PRESETS[name], r = rng("empire" + name + "|" + Math.round(sc.Ww)), hz = sc.horizon;
    var far = sc.layers.far.g, mid = sc.layers.mid.g, near = sc.layers.near.g;
    var x0 = sc.x0, x1 = sc.x1, Ww = sc.Ww;
    var emp = { name: name, list: [], anims: [], stacks: [], hero: null };
    var sizeK = sc.portrait ? 0.8 : sc.square ? 0.9 : 1;

    if (P.far === "sea") {
      Rc(far, x0, hz - 20, x1 - x0, 260, C.water, {});
      Rc(far, x0, hz - 20, x1 - x0, 260, PAT.water, {});
      Pth(far, "M" + f1(x0) + " " + f1(hz - 20) + " L" + f1(x1) + " " + f1(hz - 20), "none", { stroke: INK, "stroke-width": 2, opacity: 0.5 });
      var ships = [];
      for (var sh = 0; sh < 3; sh++) { var sg = G(far); B.ship(sg, { w: 180 + r() * 120, color: sh ? "#3F4F5E" : "#7A3B33" }, r); ships.push({ g: sg, y: hz + 30 + sh * 55, x: x0 + r() * (x1 - x0), v: (sh % 2 ? -1 : 1) * (10 + r() * 8), s: 0.45 + sh * 0.12 }); }
      emp.anims.push(function (t) { for (var i = 0; i < ships.length; i++) { var s = ships[i]; var xx = ((s.x + t * s.v - x0) % (x1 - x0) + (x1 - x0)) % (x1 - x0) + x0; s.g.setAttribute("transform", "translate(" + f1(xx) + " " + f1(s.y + Math.sin(t * 1.1 + i) * 2) + ") scale(" + f1(s.s) + ")"); } });
    } else {
      var mp = [], n = 14;
      for (var i = 0; i <= n; i++) mp.push([lerp(x0, x1, i / n), hz - 40 - Math.abs(Math.sin(i * 1.3 + 0.4)) * 170 - r() * 50]);
      mp.push([x1, hz + 40]); mp.push([x0, hz + 40]);
      Pth(far, smoothPath(mp, true), C.mountain, ink(2.6));
      for (var sn = 1; sn < mp.length - 3; sn += 2) if (mp[sn][1] < hz - 150) Pth(far, "M" + f1(mp[sn][0] - 40) + " " + f1(mp[sn][1] + 40) + " L" + f1(mp[sn][0]) + " " + f1(mp[sn][1] + 2) + " L" + f1(mp[sn][0] + 40) + " " + f1(mp[sn][1] + 40) + " Q" + f1(mp[sn][0]) + " " + f1(mp[sn][1] + 24) + " " + f1(mp[sn][0] - 40) + " " + f1(mp[sn][1] + 40) + " Z", C.snow, ink(1.8));
      var mp2 = [];
      for (i = 0; i <= n; i++) mp2.push([lerp(x0, x1, i / n), hz - 10 - Math.abs(Math.sin(i * 0.9 + 2.1)) * 110 - r() * 30]);
      mp2.push([x1, hz + 60]); mp2.push([x0, hz + 60]);
      Pth(far, smoothPath(mp2, true), C.mountain2, ink(2.6));
      Pth(far, smoothPath(mp2, true), PAT.hatchLight, {});
      if (P.far === "skyline") { var skg = G(far, { transform: "translate(" + f1(Ww / 2) + " " + f1(hz + 24) + ") scale(1.1)" }); B.skyline(skg, { w: (x1 - x0) * 0.9 }, r); }
    }
    Rc(mid, x0, hz, x1 - x0, sc.bot - hz, gradient([[0, C.hillFar], [0.22, C.hill], [1, C.grass]]));
    Pth(mid, "M" + f1(x0) + " " + f1(hz) + " L" + f1(x1) + " " + f1(hz), "none", { stroke: INK, "stroke-width": 2.2, opacity: 0.55 });
    for (var f = 0; f < 10; f++) {
      var fy = hz + 40 + r() * 600, fw = 200 + r() * 500, fxp = x0 + r() * (x1 - x0), fd = (80 + r() * 100) * perspAt(sc, fy);
      Pth(mid, "M" + f1(fxp) + " " + f1(fy) + " L" + f1(fxp + fw) + " " + f1(fy) + " L" + f1(fxp + fw + fd * 0.5) + " " + f1(fy - fd * 0.4) + " L" + f1(fxp + fd * 0.5) + " " + f1(fy - fd * 0.4) + " Z", mix(C.field, C.hill2, r()), { opacity: 0.55 });
    }
    if (P.far !== "sea" && r() > 0.2) {
      var rp = [], ry = hz + 10, rx = Ww * (0.1 + r() * 0.8);
      while (ry < sc.bot) { rp.push([rx, ry]); rx += (r() - 0.5) * 320; ry += 140; }
      var rd = smoothPath(rp);
      Pth(mid, rd, "none", { stroke: C.water, "stroke-width": 60, "stroke-linecap": "round" });
      Pth(mid, rd, "none", { stroke: INK, "stroke-width": 2, "stroke-opacity": 0.5 });
      Pth(mid, rd, "none", { stroke: "#FFFFFF", "stroke-width": 20, "stroke-opacity": 0.25, "stroke-dasharray": "40 70" });
      var boats = [], rseg = [], rL = 0;
      for (var bi = 1; bi < rp.length; bi++) { var bdx = rp[bi][0] - rp[bi - 1][0], bdy = rp[bi][1] - rp[bi - 1][1], bl = Math.sqrt(bdx * bdx + bdy * bdy); rseg.push({ a: rp[bi - 1], b: rp[bi], l: bl, s: rL }); rL += bl; }
      for (var bk = 0; bk < 3; bk++) { var bg2 = G(mid); Pth(bg2, "M-22 0 L22 0 L16 8 L-16 8 Z", bk ? "#F2EFE6" : C.red, ink(1.8)); Rc(bg2, -6, -10, 12, 10, "#F2EFE6", ink(1.6)); boats.push({ g: bg2, off: r() * rL, v: 18 + r() * 14, dir: bk % 2 ? -1 : 1 }); }
      emp.anims.push(function (t) { for (var i = 0; i < boats.length; i++) { var bo = boats[i], s2 = ((bo.off + t * bo.v * bo.dir) % rL + rL) % rL; for (var k = 0; k < rseg.length; k++) { var sg4 = rseg[k]; if (s2 <= sg4.s + sg4.l || k === rseg.length - 1) { var p2 = clamp((s2 - sg4.s) / sg4.l, 0, 1); var bx = lerp(sg4.a[0], sg4.b[0], p2), by = lerp(sg4.a[1], sg4.b[1], p2); bo.g.setAttribute("transform", "translate(" + f1(bx) + " " + f1(by) + ") scale(" + f1(perspAt(sc, by) * 1.1) + ")"); break; } } } });
    }
    var roads = [];
    function road(ptsR, layer) {
      var d = smoothPath(ptsR);
      Pth(layer, d, "none", { stroke: C.road, "stroke-width": 34, "stroke-linecap": "round" });
      Pth(layer, d, "none", { stroke: INK, "stroke-width": 1.6, "stroke-opacity": 0.45 });
      Pth(layer, d, "none", { stroke: "#FFFFFF", "stroke-width": 2, "stroke-dasharray": "22 26", opacity: 0.8 });
      var seg = [], L = 0;
      for (var i = 1; i < ptsR.length; i++) { var dxs = ptsR[i][0] - ptsR[i - 1][0], dys = ptsR[i][1] - ptsR[i - 1][1]; var len = Math.sqrt(dxs * dxs + dys * dys); seg.push({ a: ptsR[i - 1], b: ptsR[i], l: len, s: L }); L += len; }
      var cars = [];
      for (var c = 0; c < 7; c++) { var cg = G(layer); Rc(cg, -11, -9, 22, 9, [C.red, C.blue, "#F2EFE6", C.gold][c % 4], ink(1.6)); Rc(cg, -5, -14, 11, 6, "#DDE9EF", ink(1.4)); cars.push({ g: cg, off: r() * L, v: 60 + r() * 50, dir: c % 2 ? -1 : 1 }); }
      roads.push({ seg: seg, L: L, cars: cars });
    }
    road([[x0, hz + 120 + r() * 60], [Ww * 0.2, hz + 200 + r() * 80], [Ww * 0.55, hz + 150 + r() * 80], [Ww * 0.85, hz + 260 + r() * 60], [x1, hz + 220]], mid);
    road([[Ww * (0.15 + r() * 0.3), hz + 30], [Ww * (0.35 + r() * 0.2), hz + 320], [Ww * (0.2 + r() * 0.6), hz + 620], [Ww * (0.1 + r() * 0.8), sc.bot]], mid);
    emp.anims.push(function (t) {
      for (var i = 0; i < roads.length; i++) {
        var R = roads[i];
        for (var c = 0; c < R.cars.length; c++) {
          var car = R.cars[c], s = ((car.off + t * car.v * car.dir) % R.L + R.L) % R.L;
          for (var k = 0; k < R.seg.length; k++) { var sg2 = R.seg[k]; if (s <= sg2.s + sg2.l || k === R.seg.length - 1) { var p = clamp((s - sg2.s) / sg2.l, 0, 1); var cx = lerp(sg2.a[0], sg2.b[0], p), cy = lerp(sg2.a[1], sg2.b[1], p); var ps = perspAt(sc, cy); car.g.setAttribute("transform", "translate(" + f1(cx) + " " + f1(cy) + ") scale(" + f1(ps * (car.dir < 0 ? -1 : 1)) + " " + f1(ps) + ")"); break; } }
        }
      }
    });

    var rows = sc.portrait ? 5 : 6, cols = sc.portrait ? 4 : sc.square ? 6 : 8;
    var cells = [];
    for (var rr = 0; rr < rows; rr++) for (var cc = 0; cc < cols; cc++) {
      var cy2 = hz + 70 + ((rr + 0.5) / rows) * (sc.G - 180 - hz) + (r() - 0.5) * 40;
      var cx2 = -Ww * 0.2 + ((cc + 0.5) / cols) * (Ww * 1.4) + (r() - 0.5) * 120;
      cells.push({ x: cx2, y: cy2, r: rr, c: cc, used: false });
    }
    var heroCell = null, bestD = 1e9;
    cells.forEach(function (c) { var dd = Math.abs(c.x - Ww * (sc.portrait ? 0.5 : 0.56)) + Math.abs(c.y - (hz + (sc.G - hz) * 0.42)) * 1.2; if (dd < bestD) { bestD = dd; heroCell = c; } });
    heroCell.used = true;
    function place(type, cell, o, rank, layer) {
      var s = perspAt(sc, cell.y) * sizeK * ((o && o.s) || 1);
      var lay = layer || (cell.y > hz + (sc.G - hz) * 0.72 ? near : mid);
      var g = G(lay, { class: "fs-b fs-b-" + type });
      var info = B[type] ? B[type](g, o || {}, r) : {};
      var it = { type: type, x: cell.x, y: cell.y, s: s, g: g, rank: rank, info: info, pop: sc.pop(g, cell.x, cell.y, s, null, 0.6) };
      emp.list.push(it);
      if (info.stacks) info.stacks.forEach(function (st) { emp.stacks.push({ it: it, x: st.x, y: st.y }); });
      if (info.rotor) emp.anims.push((function (inf) { return function (t) { inf.rotor.setAttribute("transform", "translate(" + f1(inf.rx) + " " + f1(inf.ry) + ") rotate(" + f1((t * inf.speed + inf.ph) % 360) + ")"); }; })(info));
      if (info.car) emp.anims.push((function (inf) { return function (t) { var a = t * inf.speed; inf.car.setAttribute("transform", "translate(" + f1(Math.cos(a) * inf.rx) + " " + f1(Math.sin(a) * inf.ry) + ")"); }; })(info));
      if (info.cranes) emp.anims.push((function (inf) { return function (t) { for (var i = 0; i < inf.cranes.length; i++) { var c = inf.cranes[i], p = (Math.sin(t * 0.5 + c.ph) + 1) / 2; c.trolley.setAttribute("transform", "translate(" + f1(-100 * p) + " 0)"); c.hook.setAttribute("y2", f1(-150 + 60 * Math.sin(t * 0.9 + c.ph))); } }; })(info));
      if (info.beam) emp.anims.push((function (inf) { return function (t) { inf.beam.setAttribute("transform", "translate(0 -120) rotate(" + f1(Math.sin(t * 1.6 + inf.ph) * 7) + ")"); }; })(info));
      if (info.flag) emp.anims.push((function (inf) { return function (t) { inf.flag.setAttribute("transform", "skewY(" + f1(Math.sin(t * 5) * 4) + ")"); }; })(info));
      return it;
    }
    emp.hero = place(P.hero, heroCell, merge({}, P.heroOpts || {}), 0);
    var free = cells.filter(function (c) { return !c.used; });
    free.sort(function (a, b) { return (Math.abs(a.x - heroCell.x) * 0.6 + Math.abs(a.y - heroCell.y) + hash01(a.x) * 160) - (Math.abs(b.x - heroCell.x) * 0.6 + Math.abs(b.y - heroCell.y) + hash01(b.x) * 160); });
    var items = P.items.concat(P.items.slice().reverse(), ["house", "house", "office", "warehouse", "house", "parking", "office", "house"]);
    var count = Math.min(items.length, free.length);
    for (var i2 = 0; i2 < count; i2++) {
      var cell = free[i2];
      var ty = items[i2];
      if (ty === "track" && cell.y < hz + 120) ty = "carlot";
      place(ty, cell, ty === "tower" ? { h: 200 + r() * 200 } : {}, (i2 + 1) / (count + 1));
      cell.used = true;
    }
    var tg = G(mid), tn = G(near);
    var treeN = Math.round(34 * (P.trees || 1));
    for (var tI = 0; tI < treeN; tI++) { var tx = x0 + r() * (x1 - x0), ty2 = hz + 60 + r() * (sc.G - 160 - hz); tree(ty2 > hz + (sc.G - hz) * 0.72 ? tn : tg, tx, ty2, perspAt(sc, ty2) * 1.1, r); }
    treeRow(sc.layers.far.g, x0, x1, hz + 18, 40, 0.42, r);
    if (P.rail) {
      var ry0 = hz + 90, rl = G(mid);
      Pth(rl, "M" + f1(x0) + " " + f1(ry0) + " L" + f1(x1) + " " + f1(ry0 + 60), "none", { stroke: "#8B8378", "stroke-width": 10 });
      Pth(rl, "M" + f1(x0) + " " + f1(ry0 - 4) + " L" + f1(x1) + " " + f1(ry0 + 56), "none", { stroke: INK, "stroke-width": 1.4, "stroke-dasharray": "3 9" });
      var train = G(mid);
      for (var w2 = 0; w2 < 5; w2++) Rc(train, w2 * 44, -14, 40, 14, w2 ? ["#6C5B4C", "#4E6B7A", "#7A3B33"][w2 % 3] : "#2F3A44", ink(1.8));
      emp.anims.push(function (t) { var p = ((t * 0.04) % 1 + 1) % 1; var xx = lerp(x0 - 220, x1, p); train.setAttribute("transform", "translate(" + f1(xx) + " " + f1(ry0 + ((xx - x0) / (x1 - x0)) * 60) + ") scale(" + f1(perspAt(sc, ry0 + 30)) + ")"); });
    }
    var puffs = [];
    emp.stacks.slice(0, 6).forEach(function (st) {
      var sg3 = G(st.it.g);
      var pe = [];
      for (var q = 0; q < 6; q++) pe.push(El(sg3, 0, 0, 10, 8, C.smoke, merge(ink(1.6), { "stroke-opacity": 0.4 })));
      puffs.push({ els: pe, x: st.x, y: st.y, ph: hash01(st.x) * 5 });
    });
    emp.anims.push(function (t) {
      for (var i = 0; i < puffs.length; i++) {
        var P2 = puffs[i];
        for (var q = 0; q < P2.els.length; q++) {
          var p = ((t * 0.32 + q / 6 + P2.ph) % 1 + 1) % 1;
          var e = P2.els[q];
          e.setAttribute("cx", f1(P2.x + Math.sin(p * 7 + q) * 10 + p * 55));
          e.setAttribute("cy", f1(P2.y - p * 150));
          e.setAttribute("rx", f1(9 + p * 26)); e.setAttribute("ry", f1(7 + p * 20));
          e.setAttribute("opacity", (Math.min(1, p * 4) * (1 - p) * 0.9).toFixed(2));
        }
      }
    });
    emp.growth = opts.growth != null ? clamp(num(opts.growth, 1), 0, 1) : 1;
    emp.list.forEach(function (it) { if (it.rank > emp.growth) it.pop.at = 1e9; });
    /** Pop the still-hidden buildings in between from..to (rank order). */
    emp.grow = function (from, to, upTo) {
      var hidden = emp.list.filter(function (it) { return it.pop.at === 1e9 && it.rank <= (upTo == null ? 1 : upTo); }).sort(function (a, b) { return a.rank - b.rank; });
      from = clampT(from == null ? 0.5 : from); to = clampT(to == null ? D() - 0.8 : to);
      hidden.forEach(function (it, i) { it.pop.at = clampT(hidden.length === 1 ? from : lerp(from, to, i / (hidden.length - 1))); });
      return emp;
    };
    sc.anims.push(function (t) { for (var i = 0; i < emp.anims.length; i++) emp.anims[i](t); });
    return emp;
  }
  S.buildEmpire = buildEmpire;

  // ───────────────────────── caricature figures ─────────────────────────
  // Big-headed editorial caricatures of GENERIC business archetypes. Local units: feet at (0,0), y up negative,
  // authored facing screen-right (dir = -1 flips). Everything is posed per frame from keyframe lists.
  var RIG = { hipY: -168, shoulderY: -330, shoulderX: 66, neckY: -352, headY: -500, headRx: 150, headRy: 162, upper: 100, lower: 92, armW: 36, hand: 23, legW: 46, legX: 32 };
  S.RIG = RIG;
  var ARCH = {
    founder: { name: "Founder", desc: "suited founder with glasses: navy jacket, white shirt, red tie, side-parted hair, strong chin", skin: "#E9C2A0", hair: "#5A4636", top: "#2E3B55", top2: "#F6F2EA", accent: "#C8503C", bottom: "#2A3346", shoes: "#2B2420", hairStyle: "side", glasses: "square", tie: true, brows: 1.1, nose: 1.1, chin: 1.15 },
    engineer: { name: "Engineer", desc: "engineer in blue overalls over a checked shirt, yellow hard hat, moustache, wrench in pocket", skin: "#D9A57E", hair: "#3A2A22", top: "#3F6A9A", top2: "#C8503C", accent: "#F2C14E", bottom: "#3F6A9A", shoes: "#5A3A28", hairStyle: "cap", hat: "hard", moustache: true, overalls: true, brows: 1.0, nose: 1.25, chin: 1.0 },
    inventor: { name: "Inventor", desc: "inventor in a white lab coat with a bow tie, wild white hair, round glasses, pencil behind the ear", skin: "#F0D2B6", hair: "#E8E4DA", top: "#F4F1EA", top2: "#7A4E8A", accent: "#7A4E8A", bottom: "#4A4A4A", shoes: "#2B2420", hairStyle: "wild", glasses: "round", bowtie: true, brows: 1.3, nose: 1.3, chin: 0.95 },
    retailer: { name: "Retailer", desc: "retail founder in a red cap, rolled-sleeve plaid shirt and a store apron, big friendly grin", skin: "#C98A5E", hair: "#2B1B19", top: "#C8503C", top2: "#F2E6C9", accent: "#2F5D8A", bottom: "#5A4636", shoes: "#8A5A3A", hairStyle: "cap", hat: "cap", apron: true, plaid: true, brows: 0.9, nose: 1.1, chin: 1.1 },
    techie: { name: "Techie", desc: "young tech founder in a grey zip hoodie over a dark tee, messy dark hair, jeans, sneakers", skin: "#F2C7A5", hair: "#2A2220", top: "#8A8F94", top2: "#2B2F36", accent: "#4E8A5C", bottom: "#34435C", shoes: "#F4F1EA", hairStyle: "messy", hoodie: true, brows: 0.9, nose: 0.95, chin: 0.9, young: true },
    investor: { name: "Investor", desc: "investor in a charcoal pinstripe suit with a gold pocket square, slicked-back silver hair, bushy brows", skin: "#E5B99B", hair: "#9E9A95", top: "#3B3B3F", top2: "#F6F2EA", accent: "#D9A441", bottom: "#33333A", shoes: "#2B2420", hairStyle: "slick", pinstripe: true, tie: true, brows: 1.5, nose: 1.2, chin: 1.3 },
    executive: { name: "Executive", desc: "executive in a teal blazer with a sharp bob haircut, gold earrings, white blouse", skin: "#B8785A", hair: "#1E1614", top: "#2E7B86", top2: "#F6F2EA", accent: "#D9A441", bottom: "#2B2F36", shoes: "#2B2420", hairStyle: "bob", earrings: true, brows: 0.9, nose: 0.9, chin: 0.9 },
  };
  S.ARCHETYPES = ARCH;
  var ARCH_IDS = Object.keys(ARCH);
  var ARCH_ALIASES = { ceo: "founder", boss: "founder", suit: "founder", owner: "founder", mechanic: "engineer", worker: "engineer", builder: "engineer", scientist: "inventor", professor: "inventor", tinkerer: "inventor", shopkeeper: "retailer", grocer: "retailer", merchant: "retailer", programmer: "techie", coder: "techie", hacker: "techie", developer: "techie", banker: "investor", financier: "investor", vc: "investor", tycoon: "investor", manager: "executive", director: "executive", chairwoman: "executive" };
  function archId(name, i) {
    var k = str(name).toLowerCase().trim();
    if (ARCH[k]) return k;
    if (ARCH_ALIASES[k]) return ARCH_ALIASES[k];
    return ARCH_IDS[((i || 0) % ARCH_IDS.length + ARCH_IDS.length) % ARCH_IDS.length];
  }

  // poses (authored facing right; R = screen-right/front arm). a: upper-arm angle from hanging (positive = forward/up),
  // e: elbow bend (positive = forearm swings forward/up), h: hand shape 0 relaxed 1 fist 2 point 3 open 4 thumb.
  var PBASE = { by: 0, lean: 0, tilt: 0, hy: 0, shrug: 0, aLa: 6, aLe: -6, hL: 0, aRa: 6, aRe: -6, hR: 0, lookX: 0, lookY: 0, sq: 1 };
  var PKEYS = Object.keys(PBASE);
  function P(o) { var p = {}; for (var k in PBASE) p[k] = PBASE[k]; for (k in o) p[k] = o[k]; return p; }
  var POSES = {};
  function defPose(name, params, anim, extra) { POSES[name] = { p: P(params), anim: anim || null, x: extra || {} }; }
  defPose("idle", {}, function (lt, p) { p.aRe += Math.sin(lt * 1.3) * 2; });
  defPose("talk", { aRa: 34, aRe: 82, hR: 3, tilt: 2 }, function (lt, p) { p.aRe += Math.sin(lt * 6) * 8; p.aRa += Math.sin(lt * 3.1) * 4; });
  defPose("explain", { aRa: 42, aRe: 96, hR: 3, aLa: 22, aLe: 36, hL: 3, tilt: 3 }, function (lt, p) { p.aRe += Math.sin(lt * 5) * 7; p.aLe += Math.cos(lt * 4) * 5; });
  defPose("arms-crossed", { aLa: 44, aLe: 118, hL: 1, aRa: 50, aRe: 124, hR: 1, tilt: -3, lean: -2 });
  defPose("point", { aRa: 96, aRe: 2, hR: 2, lean: 3, tilt: -3, lookX: 1 });
  defPose("point-up", { aRa: 152, aRe: 10, hR: 2, tilt: -6, lookY: -1, lookX: 0.4 });
  defPose("point-viewer", { aRa: 48, aRe: 66, hR: 2, tilt: -2, lean: 2 });
  defPose("point-down", { aRa: 50, aRe: -8, hR: 2, tilt: 8, lean: 4, lookY: 0.8, lookX: 0.6 });
  defPose("blueprint", { aLa: 34, aLe: 92, hL: 1, aRa: 30, aRe: 94, hR: 1, tilt: 6, lookY: 0.7, lookX: 0.2 }, null, { twoHand: "blueprint" });
  defPose("tablet", { aLa: 30, aLe: 96, hL: 1, aRa: 28, aRe: 98, hR: 1, tilt: 8, lookY: 0.8 }, null, { twoHand: "tablet" });
  defPose("contract", { aLa: 30, aLe: 96, hL: 1, aRa: 28, aRe: 98, hR: 1, tilt: 6, lookY: 0.8 }, null, { twoHand: "contract" });
  defPose("phone", { aRa: 22, aRe: 148, hR: 1, tilt: 7, lookX: -0.3 }, function (lt, p) { p.tilt += Math.sin(lt * 1.2) * 1.5; }, { handProp: "phone" });
  defPose("thumbs-up", { aRa: 62, aRe: 92, hR: 4, tilt: -3 }, function (lt, p) { p.aRe += Math.max(0, Math.sin(lt * 7)) * 6 * Math.max(0, 1 - lt); });
  defPose("hands-hips", { aLa: 34, aLe: -104, hL: 1, aRa: 34, aRe: -104, hR: 1, lean: -2 });
  defPose("worried", { aLa: 150, aLe: 104, hL: 3, aRa: 150, aRe: 104, hR: 3, by: 4, tilt: 0, lookY: -0.3 }, function (lt, p) { p.tilt += Math.sin(lt * 9) * 2.5; });
  defPose("handshake", { aRa: 86, aRe: -8, hR: 1, lean: 7, tilt: -2 }, function (lt, p) { p.aRa += Math.sin(lt * 10) * 4 * Math.max(0, 1 - lt / 2); });
  defPose("present", { aRa: 64, aRe: 18, hR: 3, tilt: -2, lean: -2 });
  defPose("open-arms", { aLa: 70, aLe: 24, hL: 3, aRa: 70, aRe: 24, hR: 3, lean: -3 });
  defPose("wave", { aRa: 142, aRe: 42, hR: 3, tilt: 5, lean: -2 }, function (lt, p) { p.aRe += Math.sin(lt * 10) * 22; });
  defPose("facepalm", { aRa: 118, aRe: 128, hR: 3, tilt: 11, hy: 8, lean: 3 }, function (lt, p) { p.tilt += Math.sin(lt * 7) * 2 * Math.min(1, lt); });
  defPose("shrug", { aLa: 56, aLe: 86, hL: 3, aRa: 56, aRe: 86, hR: 3, shrug: 14, tilt: 9, by: 3 });
  defPose("fist-pump", { aRa: 132, aRe: 52, hR: 1, tilt: 4 }, function (lt, p) { var k = Math.max(0, Math.sin(lt * 9)); p.aRe += k * 20; p.by -= k * 5; });
  defPose("think", { aRa: 32, aRe: 136, hR: 1, tilt: -8, lookX: 0.5, lookY: -0.9 }, function (lt, p) { p.tilt += Math.sin(lt * 1.6) * 1.5; });
  defPose("celebrate", { aLa: 160, aLe: 16, hL: 1, aRa: 160, aRe: 16, hR: 1 }, function (lt, p) { var ph = (lt % 0.62) / 0.62, hop = Math.sin(ph * PI); p.by -= hop * 40; p.sq = 1 + 0.04 * hop; p.aLa += Math.sin(ph * 2 * PI) * 10; p.aRa -= Math.sin(ph * 2 * PI) * 10; });
  defPose("sad", { by: 6, shrug: -6, aLa: 3, aLe: 0, aRa: 3, aRe: 0, tilt: -6, hy: 9, lookY: 0.7 });
  defPose("briefcase", { aRa: 12, aRe: 2, hR: 1, aLa: 8, aLe: -4 }, null, { handProp: "briefcase" });
  defPose("coffee", { aRa: 30, aRe: 100, hR: 1 }, null, { handProp: "coffee" });
  defPose("wrench", { aRa: 70, aRe: 60, hR: 1, tilt: 3 }, function (lt, p) { p.aRe += Math.sin(lt * 4) * 10; }, { handProp: "wrench" });
  defPose("money", { aRa: 60, aRe: 90, hR: 1, tilt: -4, lookX: 0.4, lookY: -0.5 }, null, { handProp: "money" });
  defPose("megaphone", { aRa: 60, aRe: 100, hR: 1, lean: 4 }, null, { handProp: "megaphone" });
  defPose("nod", {}, function (lt, p) { p.hy += Math.max(0, Math.sin(lt * 9)) * 7 * Math.max(0, 1 - lt / 1.4); });
  defPose("headshake", {}, function (lt, p) { p.lookX = Math.sin(lt * 11) * 0.9 * Math.max(0, 1 - lt / 1.5); p.tilt += Math.sin(lt * 11) * 3; });
  defPose("bow", { lean: 20, hy: 10, aLa: 4, aLe: 0, aRa: 4, aRe: 0, lookY: 1 });
  S.POSES = POSES;
  var POSE_ALIASES = { stand: "idle", crossed: "arms-crossed", "arms-folded": "arms-crossed", pointing: "point", "point-right": "point", "point-left": "point", plan: "blueprint", blueprints: "blueprint", plans: "blueprint", call: "phone", "phone-call": "phone", thumbsup: "thumbs-up", "thumbs": "thumbs-up", hips: "hands-hips", "hands-on-hips": "hands-hips", "head-in-hands": "worried", panic: "worried", shake: "handshake", deal: "handshake", cheer: "celebrate", win: "celebrate", thinking: "think", "chin": "think", sign: "contract", document: "contract", paper: "contract", cash: "money", dollars: "money" };
  function poseName(n) { n = str(n).toLowerCase().trim(); if (POSES[n]) return n; return POSE_ALIASES[n] || "idle"; }

  // expressions: brow y / angle (+ inner end up = worried), eye open, eye happy crescent, mouth width/smile/open/round/skew
  var EBASE = { bLy: 0, bRy: 0, bLa: 0, bRa: 0, eo: 1, eh: 0, mw: 26, ms: 0.3, mo: 0, mr: 0, mk: 0, lid: 0 };
  var EXPR = {
    neutral: {},
    confident: { bLy: -3, bRy: -3, bLa: -6, bRa: -6, eo: 0.9, mw: 30, ms: 0.75, mk: 0.4 },
    happy: { bLy: -5, bRy: -5, bLa: -3, bRa: -3, eh: 0.5, mw: 34, ms: 1, mo: 0.35 },
    excited: { bLy: -12, bRy: -12, eo: 1.15, mw: 36, ms: 1, mo: 0.8 },
    worried: { bLy: -6, bRy: -6, bLa: 18, bRa: 18, eo: 1.05, mw: 22, ms: -0.5, mo: 0.12 },
    shocked: { bLy: -16, bRy: -16, bLa: 4, bRa: 4, eo: 1.3, mw: 18, ms: 0, mo: 0.8, mr: 1 },
    angry: { bLy: 6, bRy: 6, bLa: -26, bRa: -26, eo: 0.8, mw: 28, ms: -0.7, mo: 0.3 },
    determined: { bLy: 3, bRy: 3, bLa: -16, bRa: -16, eo: 0.88, mw: 26, ms: 0.2, mo: 0.05 },
    smug: { bLy: -3, bRy: -8, bLa: -6, bRa: -2, eo: 0.7, eh: 0.2, mw: 28, ms: 0.85, mk: 0.7 },
    sad: { bLy: -2, bRy: -2, bLa: 20, bRa: 20, eo: 0.8, mw: 22, ms: -0.85, lid: 0.3 },
    thinking: { bLy: -9, bRy: 1, bLa: 6, bRa: -6, eo: 0.92, mw: 16, ms: -0.1, mk: 0.5 },
    laughing: { bLy: -8, bRy: -8, eh: 1, mw: 38, ms: 1, mo: 0.95 },
    skeptical: { bLy: -12, bRy: 4, bLa: -4, bRa: -12, eo: 0.78, mw: 22, ms: -0.15, mk: 0.7 },
    tired: { bLy: 4, bRy: 4, eo: 0.45, mw: 20, ms: -0.1, lid: 0.5 },
  };
  S.EXPRESSIONS = EXPR;
  var EXPR_ALIASES = { proud: "confident", smile: "confident", calm: "neutral", joy: "happy", glad: "happy", surprised: "shocked", amazed: "shocked", shock: "shocked", mad: "angry", furious: "angry", serious: "determined", focused: "determined", anxious: "worried", nervous: "worried", scared: "worried", upset: "sad", grief: "sad", curious: "thinking", doubtful: "skeptical", confused: "skeptical", laugh: "laughing", exhausted: "tired", sleepy: "tired" };
  function exprName(n) { n = str(n).toLowerCase().trim(); if (EXPR[n]) return n; return EXPR_ALIASES[n] || "neutral"; }
  function E(name) { var e = {}, src = EXPR[exprName(name)] || {}; for (var k in EBASE) e[k] = src[k] != null ? src[k] : EBASE[k]; return e; }
  var EKEYS = Object.keys(EBASE);

  // hand art: wrist at origin, fingers toward +y
  function handArt(g, fill) {
    var st = merge(ink(4), { fill: fill });
    var hands = [];
    var h0 = G(g); Pth(h0, "M-19 0 C-22 16 -20 34 -6 40 C8 44 20 36 20 18 C20 6 14 -2 0 -2 C-8 -2 -16 -2 -19 0Z", fill, st); Pth(h0, "M-18 10 C-30 12 -32 24 -22 27 C-17 28 -14 24 -13 20", fill, st); hands.push(h0);
    var h1 = G(g); Ci(h1, 0, 18, 22, fill, st); Pth(h1, "M-10 10 L12 10 M-12 20 L12 20", "none", { stroke: INK, "stroke-width": 2.6, opacity: 0.45 }); hands.push(h1);
    var h2 = G(g); Ci(h2, 0, 14, 20, fill, st); sv("rect", merge({ x: -7, y: 14, width: 14, height: 46, rx: 7 }, st), h2); Rc(h2, -7, 16, 14, 14, fill, {}); hands.push(h2);
    var h3 = G(g); Pth(h3, "M-18 4 C-24 18 -24 34 -14 44 L-12 58 C-11 64 -4 64 -4 57 L-2 44 L2 60 C3 66 10 66 10 59 L9 42 L15 52 C18 57 24 53 22 47 L18 30 C22 16 18 0 2 -2 C-8 -2 -14 0 -18 4Z", fill, st); hands.push(h3);
    var h4 = G(g); Ci(h4, 0, 18, 22, fill, st); sv("rect", merge({ x: -34, y: 2, width: 14, height: 30, rx: 7, transform: "rotate(-22 -27 17)" }, st), h4); hands.push(h4);
    return hands;
  }
  // hand props: in hand coords (wrist origin, +y = fingers)
  function handProp(g, name, c) {
    var st = ink(3.6);
    switch (name) {
      case "phone": sv("rect", merge({ x: -14, y: -10, width: 28, height: 56, rx: 6, fill: "#2B2F36" }, st), g); Rc(g, -10, -4, 20, 42, "#9FC2D6", {}); break;
      case "briefcase": sv("rect", merge({ x: -46, y: 30, width: 92, height: 66, rx: 6, fill: "#6B4A33" }, st), g); Pth(g, "M-16 30 L-16 18 L16 18 L16 30", "none", st); Rc(g, -8, 56, 16, 10, C.gold, ink(2)); break;
      case "coffee": sv("rect", merge({ x: -16, y: 0, width: 32, height: 44, rx: 4, fill: "#F6F2EA" }, st), g); Pth(g, "M16 10 Q34 14 16 32", "none", st); Rc(g, -16, 0, 32, 10, C.red, {}); break;
      case "wrench": sv("rect", merge({ x: -7, y: -70, width: 14, height: 110, rx: 5, fill: C.metal }, st), g); Pth(g, "M-20 -70 L20 -70 L20 -90 L8 -84 L-8 -84 L-20 -90 Z", C.metal, st); break;
      case "money": for (var i = 0; i < 3; i++) sv("rect", merge({ x: -34, y: 8 + i * 6, width: 68, height: 30, rx: 3, fill: "#9FC79A", transform: "rotate(" + (-10 + i * 8) + " 0 20)" }, st), g); Ci(g, 0, 26, 8, "none", ink(2)); break;
      case "megaphone": Pth(g, "M-10 -40 L10 -40 L34 -92 L-34 -92 Z", C.red, st); sv("rect", merge({ x: -8, y: -40, width: 16, height: 40, rx: 4, fill: "#5C5C60" }, st), g); break;
      case "pen": sv("rect", merge({ x: -4, y: -50, width: 8, height: 90, rx: 3, fill: C.blue }, st), g); Pth(g, "M-4 40 L0 52 L4 40 Z", INK, {}); break;
      case "mic": Ci(g, 0, -50, 16, "#5C5C60", st); sv("rect", merge({ x: -6, y: -40, width: 12, height: 60, rx: 4, fill: "#2B2F36" }, st), g); break;
    }
  }
  // two-hand props: in body coords, centred in front of the chest
  function twoHandProp(g, name) {
    var st = ink(3.6);
    var yc = RIG.shoulderY + 118;
    var sheet = G(g);
    if (name === "blueprint") {
      sv("rect", merge({ x: -108, y: yc - 72, width: 216, height: 144, rx: 3, fill: "#2F5D8A", transform: "rotate(-4 0 " + yc + ")" }, st), sheet);
      Rc(sheet, -108, yc - 72, 216, 144, PAT.blue, { transform: "rotate(-4 0 " + yc + ")" });
      var bp = G(sheet, { transform: "rotate(-4 0 " + yc + ")", stroke: "#FFFFFF", "stroke-width": 2.4, fill: "none", opacity: 0.9 });
      Pth(bp, "M-80 " + f1(yc + 40) + " L-80 " + f1(yc - 20) + " L-30 " + f1(yc - 46) + " L20 " + f1(yc - 20) + " L20 " + f1(yc + 40) + " Z", "none");
      Pth(bp, "M-60 " + f1(yc + 40) + " L-60 " + f1(yc + 4) + " L-40 " + f1(yc + 4) + " L-40 " + f1(yc + 40), "none");
      Pth(bp, "M40 " + f1(yc - 40) + " L90 " + f1(yc - 40) + " M40 " + f1(yc - 24) + " L84 " + f1(yc - 24) + " M40 " + f1(yc - 8) + " L92 " + f1(yc - 8) + " M40 " + f1(yc + 8) + " L70 " + f1(yc + 8), "none");
      Ci(bp, 62, yc + 34, 14, "none");
    } else if (name === "tablet") {
      sv("rect", merge({ x: -96, y: yc - 64, width: 192, height: 128, rx: 10, fill: "#2B2F36", transform: "rotate(-5 0 " + yc + ")" }, st), sheet);
      Rc(sheet, -84, yc - 54, 168, 108, "#DDE9EF", { transform: "rotate(-5 0 " + yc + ")" });
      Pth(sheet, "M-70 " + f1(yc + 30) + " L-40 " + f1(yc) + " L-12 " + f1(yc + 14) + " L24 " + f1(yc - 30) + " L60 " + f1(yc - 10), "none", { stroke: C.green, "stroke-width": 5, "stroke-linecap": "round", transform: "rotate(-5 0 " + yc + ")" });
    } else {
      sv("rect", merge({ x: -90, y: yc - 76, width: 180, height: 152, rx: 2, fill: "#F6F2EA", transform: "rotate(-3 0 " + yc + ")" }, st), sheet);
      var cg = G(sheet, { transform: "rotate(-3 0 " + yc + ")", stroke: INK, "stroke-width": 2.2, opacity: 0.6, fill: "none" });
      for (var i = 0; i < 6; i++) Pth(cg, "M-70 " + f1(yc - 50 + i * 16) + " L" + f1(30 + (i % 3) * 14) + " " + f1(yc - 50 + i * 16), "none");
      Pth(cg, "M-70 " + f1(yc + 54) + " L10 " + f1(yc + 54), "none");
      Pth(sheet, "M-66 " + f1(yc + 50) + " c 10 -18 18 -4 26 -12 c 8 -8 12 12 24 2", "none", { stroke: C.blue, "stroke-width": 3, "stroke-linecap": "round", transform: "rotate(-3 0 " + yc + ")" });
      Ci(sheet, 50, yc + 46, 16, C.red, { opacity: 0.85, transform: "rotate(-3 0 " + yc + ")" });
    }
    return sheet;
  }

  var figCount = 0;
  function Figure(scene, kind, opts) {
    opts = opts || {};
    var id = archId(kind, opts.index);
    var c = ARCH[id];
    this.scene = scene; this.id = id; this.c = c;
    this.n = figCount++;
    this.seed = S.hash(id) % 1000 + this.n * 7;
    this.x0 = num(opts.x, scene.Ww / 2);
    this.y0 = opts.y != null ? num(opts.y, scene.G) : scene.G;
    this.scale = num(opts.scale, 1) * scene.charScale;
    var f = str(opts.facing || "right").toLowerCase();
    this.dir0 = f === "left" ? -1 : 1;
    this.poses = [{ t: -1, name: poseName(opts.pose || "idle"), dur: 0.01 }];
    this.exprs = [{ t: -1, name: exprName(opts.expression || "confident"), dur: 0.01 }];
    this.talks = []; this.looks = []; this.moves = []; this.faces = []; this.vis = []; this.holds = [];
    this.gestures = opts.gestures !== false;
    this.build();
    scene.actors.push(this);
  }
  S.Figure = Figure;
  var FP = Figure.prototype;

  FP.build = function () {
    var c = this.c, self = this;
    var root = (this.root = G(this.scene.actorLayer, { class: "fs-fig fs-" + this.id }));
    this.shadow = El(root, 0, 0, 150, 20, "rgba(40,30,20,0.25)", {});
    var b = (this.body = G(root));
    var st = ink(4.2);
    // legs
    var legCol = c.overalls ? c.bottom : c.bottom;
    this.legs = G(b);
    [-1, 1].forEach(function (s) {
      sv("rect", merge({ x: s * RIG.legX - RIG.legW / 2, y: RIG.hipY, width: RIG.legW, height: -RIG.hipY + 6, rx: 10, fill: legCol }, st), self.legs);
      if (c.pinstripe) for (var i = 0; i < 3; i++) Ln(self.legs, s * RIG.legX - 12 + i * 12, RIG.hipY + 10, s * RIG.legX - 12 + i * 12, -4, "#8A8A90", 1.4, { opacity: 0.5 });
      // shoe
      Pth(self.legs, "M" + f1(s * RIG.legX - 26) + " -2 C" + f1(s * RIG.legX - 28) + " -18 " + f1(s * RIG.legX - 10) + " -22 " + f1(s * RIG.legX + 6) + " -18 C" + f1(s * RIG.legX + 20) + " -14 " + f1(s * RIG.legX + 44) + " -10 " + f1(s * RIG.legX + 46) + " 2 C" + f1(s * RIG.legX + 46) + " 8 " + f1(s * RIG.legX + 40) + " 10 " + f1(s * RIG.legX + 34) + " 10 L" + f1(s * RIG.legX - 22) + " 10 C" + f1(s * RIG.legX - 28) + " 10 " + f1(s * RIG.legX - 30) + " 4 " + f1(s * RIG.legX - 26) + " -2Z", c.shoes, st);
      if (c.young) Ln(self.legs, s * RIG.legX - 22, 4, s * RIG.legX + 40, 4, "#D9D2C5", 5);
    });
    Rc(this.legs, -RIG.legX - 4, RIG.hipY - 8, RIG.legX * 2 + 8, 40, legCol, st);
    // torso
    var T = (this.torso = G(b));
    this.torsoRot = T;
    var shirt = c.top2;
    // neck
    sv("rect", merge({ x: -26, y: RIG.neckY - 10, width: 52, height: 40, fill: c.skin }, st), T);
    Rc(T, -26, RIG.neckY - 10, 52, 40, PAT.hatch, { opacity: 0.7 });
    var w1 = 96, w0 = 82, hip = RIG.hipY + 8, sh = RIG.shoulderY;
    var torsoD = "M-" + w1 + " " + f1(sh + 10) + " C-" + w1 + " " + f1(sh - 14) + " -" + (w1 - 30) + " " + f1(sh - 24) + " -30 " + f1(sh - 24) + " L30 " + f1(sh - 24) + " C" + (w1 - 30) + " " + f1(sh - 24) + " " + w1 + " " + f1(sh - 14) + " " + w1 + " " + f1(sh + 10) + " L" + w0 + " " + f1(hip) + " L-" + w0 + " " + f1(hip) + " Z";
    Pth(T, torsoD, shirt, st);
    var clipId = nid("c");
    var cp = sv("clipPath", { id: clipId }, defsRoot);
    Pth(cp, torsoD, INK);
    var jacket = G(T, { "clip-path": "url(#" + clipId + ")" });
    if (c.overalls) {
      Pth(jacket, "M-60 " + f1(hip) + " L-60 " + f1(sh + 30) + " L60 " + f1(sh + 30) + " L60 " + f1(hip) + " Z", c.top, st);
      Pth(jacket, "M-48 " + f1(sh + 30) + " L-56 " + f1(sh - 24) + " M48 " + f1(sh + 30) + " L56 " + f1(sh - 24), "none", merge(st, { "stroke-width": 14, stroke: c.top }));
      Pth(jacket, "M-48 " + f1(sh + 30) + " L-56 " + f1(sh - 24) + " M48 " + f1(sh + 30) + " L56 " + f1(sh - 24), "none", st);
      Rc(jacket, -30, sh + 52, 60, 36, shade(c.top, -0.2), ink(3));
      // plaid shirt sleeves/collar hints
      for (var pl = 0; pl < 4; pl++) Ln(jacket, -w1, sh - 10 + pl * 18, -60, sh - 10 + pl * 18, INK, 1.4, { opacity: 0.25 });
    } else if (c.apron) {
      Pth(jacket, "M-70 " + f1(hip) + " L-62 " + f1(sh + 40) + " L62 " + f1(sh + 40) + " L70 " + f1(hip) + " Z", c.top2, st);
      Pth(jacket, "M-40 " + f1(sh + 40) + " L-26 " + f1(sh - 10) + " L26 " + f1(sh - 10) + " L40 " + f1(sh + 40)+ " Z", c.top2, st);
      for (var ap = 0; ap < 5; ap++) { Ln(jacket, -w1, sh - 20 + ap * 22, w1, sh - 20 + ap * 22, c.top, 5, { opacity: 0.55 }); }
      for (var aq = 0; aq < 7; aq++) { Ln(jacket, -w1 + aq * 32, sh - 30, -w1 + aq * 32, hip, c.top, 5, { opacity: 0.4 }); }
      Pth(jacket, "M-70 " + f1(hip) + " L-62 " + f1(sh + 40) + " L62 " + f1(sh + 40) + " L70 " + f1(hip) + " Z", "#E8DDC8", st);
      Rc(jacket, -34, sh + 70, 68, 44, "#D9CFB8", ink(2.6));
    } else if (c.hoodie) {
      Pth(jacket, "M-" + w1 + " " + f1(sh + 10) + " C-" + w1 + " " + f1(sh - 14) + " -66 " + f1(sh - 24) + " -30 " + f1(sh - 24) + " L-22 " + f1(hip) + " L-" + w0 + " " + f1(hip) + " Z", c.top, st);
      Pth(jacket, "M" + w1 + " " + f1(sh + 10) + " C" + w1 + " " + f1(sh - 14) + " 66 " + f1(sh - 24) + " 30 " + f1(sh - 24) + " L22 " + f1(hip) + " L" + w0 + " " + f1(hip) + " Z", c.top, st);
      Ln(jacket, 0, sh - 10, 0, hip, "#D9D2C5", 4, { opacity: 0.8 });
      Pth(jacket, "M-44 " + f1(sh - 20) + " C-30 " + f1(sh - 44) + " 30 " + f1(sh - 44) + " 44 " + f1(sh - 20) + " L30 " + f1(sh - 6) + " C20 " + f1(sh - 20) + " -20 " + f1(sh - 20) + " -30 " + f1(sh - 6) + " Z", shade(c.top, -0.12), st);
      Ln(jacket, -14, sh + 2, -16, sh + 60, INK, 3); Ln(jacket, 14, sh + 2, 16, sh + 60, INK, 3);
    } else {
      // suit / blazer / lab coat with lapels
      Pth(jacket, "M-" + w1 + " " + f1(sh + 10) + " C-" + w1 + " " + f1(sh - 14) + " -66 " + f1(sh - 24) + " -30 " + f1(sh - 24) + " L-6 " + f1(hip - 10) + " L-" + w0 + " " + f1(hip) + " Z", c.top, st);
      Pth(jacket, "M" + w1 + " " + f1(sh + 10) + " C" + w1 + " " + f1(sh - 14) + " 66 " + f1(sh - 24) + " 30 " + f1(sh - 24) + " L6 " + f1(hip - 10) + " L" + w0 + " " + f1(hip) + " Z", c.top, st);
      Pth(jacket, "M-30 " + f1(sh - 24) + " L-6 " + f1(sh + 50) + " L-44 " + f1(sh + 22) + " Z", shade(c.top, -0.18), st);
      Pth(jacket, "M30 " + f1(sh - 24) + " L6 " + f1(sh + 50) + " L44 " + f1(sh + 22) + " Z", shade(c.top, -0.18), st);
      if (c.pinstripe) for (var ps = 0; ps < 8; ps++) { var sx0 = -w1 + 12 + ps * 24; if (Math.abs(sx0) < 34) continue; Ln(jacket, sx0, sh - 20, sx0 + (sx0 < 0 ? 4 : -4), hip, "#8A8A90", 1.4, { opacity: 0.55 }); }
      if (c.accent && !c.bowtie) Pth(jacket, "M" + (w1 - 44) + " " + f1(sh + 36) + " L" + (w1 - 18) + " " + f1(sh + 30) + " L" + (w1 - 20) + " " + f1(sh + 44) + " Z", c.accent, ink(2));
      if (c.tie) { Pth(T, "M-9 " + f1(sh - 8) + " L9 " + f1(sh - 8) + " L12 " + f1(sh + 60) + " L0 " + f1(sh + 80) + " L-12 " + f1(sh + 60) + " Z", c.accent, ink(3)); Pth(T, "M-9 " + f1(sh - 8) + " L9 " + f1(sh - 8) + " L6 " + f1(sh + 4) + " L-6 " + f1(sh + 4) + " Z", shade(c.accent, -0.2), ink(2.4)); }
      if (c.bowtie) { Pth(T, "M0 " + f1(sh - 4) + " L-30 " + f1(sh - 20) + " L-30 " + f1(sh + 12) + " Z M0 " + f1(sh - 4) + " L30 " + f1(sh - 20) + " L30 " + f1(sh + 12) + " Z", c.accent, ink(3)); Ci(T, 0, sh - 4, 7, c.accent, ink(2.4)); }
    }
    // hatch shadow on the far side of the torso
    Pth(T, "M-" + w1 + " " + f1(sh + 10) + " C-" + w1 + " " + f1(sh - 14) + " -66 " + f1(sh - 24) + " -46 " + f1(sh - 24) + " C-62 " + f1(hip - 60) + " -70 " + f1(hip - 30) + " -" + w0 + " " + f1(hip) + " Z", PAT.hatch, { opacity: 0.7 });
    this.twoHand = {};
    // two-hand props (hidden until used)
    ["blueprint", "tablet", "contract"].forEach(function (nm) { var gg = twoHandProp(b, nm); gg.style.display = "none"; self.twoHand[nm] = gg; });
    // arms (L behind, R in front of the head)
    this.arms = {};
    function mkArm(side, parent) {
      var sx = side === "R" ? RIG.shoulderX : -RIG.shoulderX;
      var up = G(parent, { transform: "translate(" + sx + " " + RIG.shoulderY + ")" });
      var sleeve = c.overalls ? c.top2 : c.top;
      if (c.apron) sleeve = c.top;
      sv("path", merge({ d: "M0 0 L0 " + RIG.upper, fill: "none", "stroke-width": RIG.armW + 8, stroke: INK, "stroke-linecap": "round" }), up);
      sv("path", merge({ d: "M0 0 L0 " + RIG.upper, fill: "none", "stroke-width": RIG.armW, stroke: sleeve, "stroke-linecap": "round" }), up);
      var lo = G(up, { transform: "translate(0 " + RIG.upper + ")" });
      var cuffCol = c.apron || c.overalls ? c.skin : sleeve;
      sv("path", { d: "M0 0 L0 " + RIG.lower, fill: "none", "stroke-width": RIG.armW + 8, stroke: INK, "stroke-linecap": "round" }, lo);
      sv("path", { d: "M0 0 L0 " + RIG.lower, fill: "none", "stroke-width": RIG.armW, stroke: cuffCol, "stroke-linecap": "round" }, lo);
      if (!c.apron && !c.overalls) sv("path", { d: "M0 " + (RIG.lower - 16) + " L0 " + RIG.lower, fill: "none", "stroke-width": RIG.armW - 2, stroke: shirt, "stroke-linecap": "butt" }, lo);
      var hand = G(lo, { transform: "translate(0 " + (RIG.lower + 6) + ")" });
      var shapes = handArt(hand, c.skin);
      var prop = G(hand);
      return { up: up, lo: lo, hand: hand, shapes: shapes, prop: prop, propName: null, sx: sx };
    }
    this.arms.L = mkArm("L", b);
    // head
    var H = (this.head = G(b, { transform: "translate(0 " + RIG.headY + ")" }));
    this.buildHead(H);
    this.arms.R = mkArm("R", b);
    // emotion marks layer
    this.markLayer = G(root);
    this.marks = [];
  };

  FP.buildHead = function (H) {
    var c = this.c, st = ink(4.2), rx = RIG.headRx, ry = RIG.headRy;
    // hair back (behind head)
    var hb = G(H);
    if (c.hairStyle === "bob") Pth(hb, "M-" + (rx + 14) + " -40 C-" + (rx + 20) + " -110 -70 -" + (ry + 26) + " 0 -" + (ry + 26) + " C70 -" + (ry + 26) + " " + (rx + 20) + " -110 " + (rx + 14) + " -40 L" + (rx + 10) + " 70 L-" + (rx + 10) + " 70 Z", c.hair, st);
    if (c.hairStyle === "wild") for (var w = 0; w < 9; w++) { var a = -PI * 0.95 + (w / 8) * PI * 0.9; var hx = Math.cos(a) * (rx + 12), hy = Math.sin(a) * (ry + 2) - 20; Pth(hb, "M" + f1(hx * 0.6) + " " + f1(hy * 0.6) + " L" + f1(hx * 1.35 + (w % 2 ? 12 : -8)) + " " + f1(hy * 1.4 - 10) + " L" + f1(hx * 0.95 + 14) + " " + f1(hy * 0.95 + 8) + " Z", c.hair, st); }
    // ears
    El(H, -rx + 6, 14, 30, 40, c.skin, st); El(H, rx - 6, 14, 30, 40, c.skin, st); Pth(H, "M" + f1(rx + 4) + " 0 q10 14 -2 30", "none", ink(3)); Pth(H, "M" + f1(-rx - 4) + " 0 q-10 14 2 30", "none", ink(3));
    if (c.earrings) { Ci(H, rx - 6, 58, 9, C.gold, ink(2.4)); Ci(H, -rx + 6, 58, 9, C.gold, ink(2.4)); }
    // face: big ellipse + caricature jaw/chin
    var chin = 44 * c.chin;
    var faceD = "M-" + rx + " -20 C-" + rx + " -100 -70 -" + ry + " 0 -" + ry + " C70 -" + ry + " " + rx + " -100 " + rx + " -20 C" + rx + " 60 " + f1(60 * c.chin) + " " + f1(ry - 10 + chin * 0.4) + " 8 " + f1(ry + chin * 0.6) + " C-" + f1(50 * c.chin) + " " + f1(ry - 2 + chin * 0.4) + " -" + rx + " 60 -" + rx + " -20Z";
    Pth(H, faceD, c.skin, st);
    var clipId = nid("h");
    var cp = sv("clipPath", { id: clipId }, defsRoot);
    Pth(cp, faceD, INK);
    var fc = G(H, { "clip-path": "url(#" + clipId + ")" });
    // cross-hatch shading on the far side of the face and under the chin
    Pth(fc, "M-" + rx + " -60 C-" + (rx - 8) + " 20 -" + (rx - 34) + " 70 -24 " + f1(ry + 40) + " L-" + (rx + 10) + " " + f1(ry + 50) + " Z", PAT.hatch, { opacity: 0.75 });
    Pth(fc, "M-" + rx + " -20 C-" + (rx - 4) + " 30 -" + (rx - 20) + " 70 -50 " + f1(ry + 40) + " L-" + (rx + 10) + " " + f1(ry + 50) + " Z", PAT.cross, { opacity: 0.45 });
    Pth(fc, "M-" + (rx - 10) + " -120 C-" + (rx - 40) + " -150 -20 -160 20 -150 L-" + (rx + 10) + " -170 Z", PAT.hatchLight, { opacity: 0.6 });
    Pth(fc, "M-70 " + f1(ry - 20) + " C-20 " + f1(ry + 24) + " 40 " + f1(ry + 24) + " 90 " + f1(ry - 40) + " L90 " + f1(ry + 70) + " L-70 " + f1(ry + 70) + " Z", PAT.hatch, { opacity: 0.7 });
    Pth(H, "M26 50 C52 60 60 90 44 118", "none", merge(ink(3.4), { opacity: 0.7 }));
    Pth(H, "M-18 54 C-44 62 -50 92 -34 118", "none", merge(ink(3.4), { opacity: 0.55 }));
    Pth(H, "M-70 -74 C-40 -92 -10 -92 10 -84", "none", merge(ink(2.6), { opacity: 0.35 }));
    Pth(H, "M-" + (rx - 30) + " 30 C-" + (rx - 24) + " 60 -" + (rx - 36) + " 90 -" + (rx - 50) + " 110", "none", merge(ink(2.6), { opacity: 0.4 }));
    // cheeks blush
    El(fc, -60, 26, 22, 12, C.red, { opacity: 0.14 }); El(fc, 66, 26, 22, 12, C.red, { opacity: 0.14 });
    // stubble / beard / moustache
    if (c.moustache) Pth(H, "M-34 46 C-24 30 -8 34 0 44 C8 34 24 30 34 46 C24 54 8 52 0 48 C-8 52 -24 54 -34 46Z", c.hair, ink(3));
    // eyes
    var ey = -16, ex = 56, er = 23 * (c.young ? 1.1 : 1);
    this.eyes = { L: G(H), R: G(H) };
    var self = this;
    [["L", -ex], ["R", ex]].forEach(function (p) {
      var g = self.eyes[p[0]];
      var white = El(g, p[1], ey, er * 1.15, er, "#FFFFFF", ink(3.2));
      var pupil = Ci(g, p[1] + 4, ey + 2, er * 0.46, INK, {});
      var glint = Ci(g, p[1] + 9, ey - 5, er * 0.16, "#FFFFFF", {});
      var lid = Pth(g, "", c.skin, { stroke: INK, "stroke-width": 3.2 });
      var happy = Pth(g, "M" + f1(p[1] - er * 1.15) + " " + f1(ey + 4) + " Q" + f1(p[1]) + " " + f1(ey - er * 1.1) + " " + f1(p[1] + er * 1.15) + " " + f1(ey + 4), "none", merge(ink(4.6), { display: "none" }));
      g._ = { white: white, pupil: pupil, glint: glint, lid: lid, happy: happy, x: p[1] };
    });
    // brows: thick ink
    this.brows = { L: Pth(H, "", c.hair === "#E8E4DA" ? "#B9B4A8" : c.hair, ink(3.4)), R: Pth(H, "", c.hair === "#E8E4DA" ? "#B9B4A8" : c.hair, ink(3.4)) };
    // glasses
    if (c.glasses) {
      var gl = G(H, { fill: "none", stroke: INK, "stroke-width": 4.2 });
      if (c.glasses === "round") { Ci(gl, -ex, ey, er * 1.5, "none"); Ci(gl, ex, ey, er * 1.5, "none"); }
      else { sv("rect", { x: -ex - er * 1.5, y: ey - er * 1.25, width: er * 3, height: er * 2.5, rx: 8 }, gl); sv("rect", { x: ex - er * 1.5, y: ey - er * 1.25, width: er * 3, height: er * 2.5, rx: 8 }, gl); }
      Ln(gl, -ex + er * 1.5, ey, ex - er * 1.5, ey, INK, 4); Ln(gl, ex + er * 1.5, ey - 2, rx + 2, ey - 8, INK, 4); Ln(gl, -ex - er * 1.5, ey - 2, -rx - 2, ey - 8, INK, 4);
      Pth(gl, "M" + f1(ex - er * 1.1) + " " + f1(ey - er * 0.6) + " L" + f1(ex - er * 0.6) + " " + f1(ey - er * 1.0), "none", { stroke: "#FFFFFF", "stroke-width": 3, opacity: 0.7 });
    }
    // nose: big caricature hook
    var nz = 1.35 * c.nose;
    Pth(H, "M8 -6 C" + f1(30 * nz) + " " + f1(6 * nz) + " " + f1(44 * nz) + " " + f1(26 * nz) + " " + f1(34 * nz) + " " + f1(46 * nz) + " C" + f1(26 * nz) + " " + f1(56 * nz) + " 10 " + f1(54 * nz) + " 2 " + f1(44 * nz), "none", ink(4.6));
    Pth(H, "M10 -6 C" + f1(30 * nz) + " " + f1(6 * nz) + " " + f1(44 * nz) + " " + f1(26 * nz) + " " + f1(34 * nz) + " " + f1(46 * nz) + " C" + f1(26 * nz) + " " + f1(56 * nz) + " 10 " + f1(54 * nz) + " 2 " + f1(44 * nz) + " Z", shade(c.skin, -0.08), { opacity: 0.8 });
    // mouth group
    this.mouth = { g: G(H) };
    this.mouth.inner = Pth(this.mouth.g, "", "#5A2A2A", ink(3.6));
    this.mouth.teeth = Pth(this.mouth.g, "", "#FFFFFF", {});
    this.mouth.tongue = Pth(this.mouth.g, "", "#C8655A", {});
    this.mouth.line = Pth(this.mouth.g, "", "none", ink(4.2));
    this.mouth.corner = Pth(this.mouth.g, "", "none", ink(2.6));
    // hair front / hats
    var hf = G(H);
    switch (c.hairStyle) {
      case "side":
        Pth(hf, "M-" + (rx + 4) + " -30 C-" + (rx + 10) + " -100 -80 -" + (ry + 14) + " -10 -" + (ry + 16) + " C60 -" + (ry + 18) + " " + (rx + 10) + " -110 " + (rx + 4) + " -40 C" + (rx - 10) + " -70 " + (rx - 40) + " -84 " + (rx - 70) + " -90 C20 -84 -30 -70 -60 -96 C-80 -84 -" + (rx - 8) + " -60 -" + (rx + 4) + " -30Z", c.hair, st);
        Pth(hf, "M-50 -100 C-20 -112 20 -110 50 -100", "none", { stroke: shade(c.hair, 0.3), "stroke-width": 4, "stroke-linecap": "round" });
        break;
      case "slick":
        Pth(hf, "M-" + (rx + 4) + " -36 C-" + (rx + 12) + " -104 -70 -" + (ry + 12) + " 0 -" + (ry + 14) + " C70 -" + (ry + 12) + " " + (rx + 12) + " -104 " + (rx + 4) + " -36 C" + (rx - 8) + " -74 " + (rx - 30) + " -92 0 -96 C-30 -92 -" + (rx - 8) + " -74 -" + (rx + 4) + " -36Z", c.hair, st);
        for (var sl = 0; sl < 4; sl++) Pth(hf, "M" + f1(-60 + sl * 36) + " -110 C" + f1(-50 + sl * 36) + " -124 " + f1(-40 + sl * 36) + " -124 " + f1(-30 + sl * 36) + " -112", "none", { stroke: shade(c.hair, -0.35), "stroke-width": 2.6, "stroke-linecap": "round" });
        break;
      case "messy":
        Pth(hf, "M-" + (rx + 6) + " -30 C-" + (rx + 10) + " -90 -96 -" + (ry + 10) + " -60 -" + (ry + 20) + " L-40 -" + (ry + 2) + " L-16 -" + (ry + 30) + " L4 -" + (ry + 6) + " L30 -" + (ry + 34) + " L44 -" + (ry + 4) + " L76 -" + (ry + 22) + " C" + (rx + 6) + " -100 " + (rx + 8) + " -70 " + (rx + 2) + " -40 C" + (rx - 10) + " -76 " + (rx - 44) + " -86 20 -90 C-30 -90 -" + (rx - 10) + " -72 -" + (rx + 6) + " -30Z", c.hair, st);
        break;
      case "bob":
        Pth(hf, "M-" + (rx + 12) + " -30 C-" + (rx + 16) + " -104 -70 -" + (ry + 22) + " 0 -" + (ry + 22) + " C70 -" + (ry + 22) + " " + (rx + 16) + " -104 " + (rx + 12) + " -30 C" + (rx + 4) + " -80 " + (rx - 40) + " -92 10 -98 C-40 -92 -" + (rx - 10) + " -70 -" + (rx + 12) + " -30Z", c.hair, st);
        Pth(hf, "M-" + (rx + 12) + " -30 L-" + (rx + 12) + " 60 C-" + (rx + 6) + " 70 -" + (rx - 10) + " 70 -" + (rx - 14) + " 56 L-" + (rx - 2) + " -20Z", c.hair, st);
        break;
      case "wild":
        Pth(hf, "M-" + (rx + 2) + " -40 C-" + (rx + 8) + " -96 -80 -" + (ry + 10) + " -20 -" + (ry + 14) + " C40 -" + (ry + 16) + " " + (rx + 8) + " -100 " + (rx + 2) + " -44 C" + (rx - 14) + " -76 " + (rx - 50) + " -86 0 -88 C-40 -88 -" + (rx - 14) + " -76 -" + (rx + 2) + " -40Z", c.hair, st);
        Ln(hf, rx - 6, -40, rx + 36, -70, "#E5B21A", 6);
        break;
      case "cap":
        Pth(hf, "M-" + (rx + 2) + " -40 C-" + (rx + 8) + " -92 -80 -" + (ry + 6) + " 0 -" + (ry + 8) + " C80 -" + (ry + 6) + " " + (rx + 8) + " -92 " + (rx + 2) + " -40 C" + (rx - 14) + " -76 " + (rx - 50) + " -86 0 -88 C-40 -88 -" + (rx - 14) + " -76 -" + (rx + 2) + " -40Z", c.hair, st);
        break;
    }
    if (c.hat === "cap") {
      Pth(hf, "M-" + (rx + 8) + " -56 C-" + (rx + 12) + " -120 -70 -" + (ry + 40) + " 0 -" + (ry + 40) + " C70 -" + (ry + 40) + " " + (rx + 12) + " -120 " + (rx + 8) + " -56 Z", c.top, st);
      Pth(hf, "M" + (rx - 30) + " -60 C" + (rx + 20) + " -70 " + (rx + 70) + " -60 " + (rx + 78) + " -40 C" + (rx + 60) + " -32 " + (rx + 10) + " -36 " + (rx - 20) + " -46 Z", shade(c.top, -0.15), st);
      Ln(hf, -(rx - 10), -62, rx - 10, -62, INK, 4);
      Ci(hf, 0, -ry - 40, 8, c.top, ink(3));
    } else if (c.hat === "hard") {
      Pth(hf, "M-" + (rx + 14) + " -52 C-" + (rx + 18) + " -126 -70 -" + (ry + 46) + " 0 -" + (ry + 46) + " C70 -" + (ry + 46) + " " + (rx + 18) + " -126 " + (rx + 14) + " -52 Z", c.accent, st);
      Pth(hf, "M-" + (rx + 30) + " -50 C-" + (rx + 10) + " -70 " + (rx + 10) + " -70 " + (rx + 30) + " -50 C" + (rx + 10) + " -40 -" + (rx + 10) + " -40 -" + (rx + 30) + " -50Z", shade(c.accent, -0.12), st);
      Pth(hf, "M-30 -" + (ry + 20) + " L30 -" + (ry + 20) + " L26 -" + (ry + 40) + " L-26 -" + (ry + 40) + " Z", shade(c.accent, 0.3), ink(2.4));
    }
    if (c.hairStyle === "wild" || c.inventor) {}
  };

  // keyframe helpers ---------------------------------------------------------
  function sortK(list) { list.sort(function (a, b) { return a.t - b.t; }); }
  function lastAt(list, t) { var cur = list[0]; for (var i = 1; i < list.length; i++) { if (list[i].t <= t) cur = list[i]; else break; } return cur; }
  FP.pose = function (name, at, dur, ease) { this.poses.push({ t: clampT(num(at, 0)), name: poseName(name), dur: num(dur, 0.5), ease: ease }); this.dirty = true; return this; };
  FP.expression = function (name, at, dur) { this.exprs.push({ t: clampT(num(at, 0)), name: exprName(name), dur: num(dur, 0.3) }); this.dirty = true; return this; };
  FP.say = function (from, to) { this.talks.push({ s: clampT(from), e: clamp(num(to, from + 1), 0, D()) }); return this; };
  FP.lookAt = function (target, at) { this.looks.push({ t: clampT(num(at, 0)), tg: target }); this.dirty = true; return this; };
  FP.face = function (dir, at) { this.faces.push({ t: clampT(num(at, 0)), d: str(dir).toLowerCase() === "left" ? -1 : 1 }); this.dirty = true; return this; };
  FP.moveTo = function (x, at, dur, ease) { this.moves.push({ t: clampT(num(at, 0)), x: num(x, this.x0), dur: Math.max(0.01, num(dur, 1)), ease: ease || "inOutCubic" }); this.dirty = true; return this; };
  FP.enter = function (side, at, dur, x) { var sc = this.scene, off = side === "right" ? sc.Ww + 300 : -300; var tx = x != null ? num(x, this.x0) : this.x0; this.moves.push({ t: -2, x: off, dur: 0.01 }); this.moves.push({ t: clampT(num(at, 0)), x: tx, dur: num(dur, 1.2), ease: "outCubic", walk: true }); this.dirty = true; return this; };
  FP.exit = function (side, at, dur) { var sc = this.scene, off = side === "left" ? -300 : sc.Ww + 300; this.moves.push({ t: clampT(num(at, 0)), x: off, dur: num(dur, 1.1), ease: "inCubic", walk: true }); this.dirty = true; return this; };
  FP.show = function (at) { this.vis.push({ t: clampT(num(at, 0)), v: 1 }); this.dirty = true; return this; };
  FP.hide = function (at) { this.vis.push({ t: clampT(num(at, 0)), v: 0 }); this.dirty = true; return this; };
  FP.hold = function (prop, at, until, opts) { this.holds.push({ t: clampT(num(at, 0)), e: until == null ? D() + 1 : clampT(until), p: str(prop), o: opts || {} }); this.dirty = true; return this; };
  FP.emote = function (kind, at, dur) { addMark(this, kind, clampT(num(at, 0)), num(dur, 1.6)); return this; };
  /** Acting beats synced to narration words: [{ word, pose, expression, mark, look, at }]. */
  FP.beats = function (list, opts) {
    opts = opts || {};
    var after = 0, self = this;
    arr(list).forEach(function (b, i) {
      if (!b) return;
      var t = b.at != null ? clampT(num(b.at, 0)) : syncAt(b.word, after, (opts.start != null ? opts.start : D() * 0.3) + i * (opts.step != null ? opts.step : D() * 0.12));
      after = t + 0.05;
      if (b.pose) { self.pose(b.pose, t, 0.45); if (opts.after !== false && POSES[poseName(b.pose)] && !POSES[poseName(b.pose)].x.twoHand) self.pose(opts.after || "idle", t + num(b.hold, 2.2), 0.6); }
      if (b.expression) self.expression(b.expression, t);
      if (b.mark) self.emote(b.mark, t + 0.1);
      if (b.look) self.lookAt(b.look, t);
    });
    return this;
  };
  FP.compile = function () { sortK(this.poses); sortK(this.exprs); sortK(this.looks); sortK(this.moves); sortK(this.faces); sortK(this.vis); sortK(this.holds); this.dirty = false; };
  FP.moveX = function (t) {
    var x = this.x0, M = this.moves;
    for (var i = 0; i < M.length; i++) { var m = M[i]; if (m.t > t) break; var p = m.dur <= 0.011 ? 1 : easeFn(m.ease)(clamp((t - m.t) / m.dur, 0, 1)); x = lerp(i ? x : (M[0].t <= t ? x : this.x0), m.x, p); }
    return x;
  };
  FP.poseAt = function (t) {
    var L = this.poses, cur = L[0], prev = null;
    for (var i = 1; i < L.length; i++) { if (L[i].t <= t) { prev = cur; cur = L[i]; } else break; }
    var out = {}, pc = POSES[cur.name], p1 = {};
    for (var k in PBASE) p1[k] = pc.p[k];
    if (pc.anim) pc.anim(Math.max(0, t - cur.t), p1);
    if (prev && cur.dur > 0.011) {
      var q = clamp((t - cur.t) / cur.dur, 0, 1);
      if (q < 1) {
        var pp = POSES[prev.name], p0 = {};
        for (k in PBASE) p0[k] = pp.p[k];
        if (pp.anim) pp.anim(Math.max(0, t - prev.t), p0);
        var e = cur.ease ? easeFn(cur.ease)(q) : outBack(sm(q)) * 0.6 + sm(q) * 0.4;
        for (k in PBASE) out[k] = lerp(p0[k], p1[k], e);
        out._name = cur.name; out._x = pc.x; out._blend = q;
        return out;
      }
    }
    for (k in PBASE) out[k] = p1[k];
    out._name = cur.name; out._x = pc.x; out._blend = 1;
    return out;
  };
  FP.exprAt = function (t) {
    var L = this.exprs, cur = L[0], prev = null;
    for (var i = 1; i < L.length; i++) { if (L[i].t <= t) { prev = cur; cur = L[i]; } else break; }
    var e1 = E(cur.name);
    if (prev && cur.dur > 0.011) {
      var q = sm(clamp((t - cur.t) / cur.dur, 0, 1));
      if (q < 1) { var e0 = E(prev.name), o = {}; for (var k in EBASE) o[k] = lerp(e0[k], e1[k], q); return o; }
    }
    return e1;
  };
  FP.talkAt = function (t) { for (var i = 0; i < this.talks.length; i++) { var w = this.talks[i]; if (t >= w.s && t <= w.e) return w; } return null; };
  FP.dirAt = function (t) { var d = this.dir0; for (var i = 0; i < this.faces.length; i++) { if (this.faces[i].t <= t) d = this.faces[i].d; else break; } return d; };

  function setHand(arm, idx) { if (arm._h === idx) return; arm._h = idx; for (var i = 0; i < arm.shapes.length; i++) arm.shapes[i].style.display = i === idx ? "" : "none"; }
  function setProp(self, arm, name) {
    if (arm.propName === name) return;
    arm.propName = name;
    while (arm.prop.firstChild) arm.prop.removeChild(arm.prop.firstChild);
    if (name) handProp(arm.prop, name, self.c);
  }
  function mouthPath(m, mw, ms, mo, mr, mk) {
    // mouth centred at (6, 78) in head space; ms smile (-1..1), mo open (0..1), mr round, mk skew (smirk)
    var cx = 6, cy = 96, w = mw * 1.2 * (1 - mr * 0.45) * (1 - mo * 0.15), h = mo * 40 + 2, curve = ms * 16;
    var lx = cx - w, rx = cx + w, ly = cy - curve + mk * 6, ry2 = cy - curve - mk * 6;
    var top = "M" + f1(lx) + " " + f1(ly) + " Q" + f1(cx) + " " + f1(cy + curve - h * 0.5 - (ms > 0 ? 0 : 0)) + " " + f1(rx) + " " + f1(ry2);
    var bot = " Q" + f1(cx) + " " + f1(cy + curve + h * (mr ? 1.2 : 1)) + " " + f1(lx) + " " + f1(ly) + " Z";
    var inner = top + bot;
    var teeth = mo > 0.1 ? "M" + f1(lx + 4) + " " + f1(ly + 1) + " Q" + f1(cx) + " " + f1(cy + curve - h * 0.5 + 1) + " " + f1(rx - 4) + " " + f1(ry2 + 1) + " L" + f1(rx - 4) + " " + f1(ry2 + 6 + h * 0.25) + " Q" + f1(cx) + " " + f1(cy + curve + h * 0.1) + " " + f1(lx + 4) + " " + f1(ly + 6 + h * 0.25) + " Z" : "";
    var tongue = mo > 0.35 ? "M" + f1(cx - w * 0.5) + " " + f1(cy + curve + h * 0.55) + " Q" + f1(cx) + " " + f1(cy + curve + h * 0.3) + " " + f1(cx + w * 0.5) + " " + f1(cy + curve + h * 0.55) + " Q" + f1(cx) + " " + f1(cy + curve + h) + " " + f1(cx - w * 0.5) + " " + f1(cy + curve + h * 0.55) + " Z" : "";
    var line = top;
    var corner = ms > 0.4 ? "M" + f1(rx + 2) + " " + f1(ry2 - 10) + " Q" + f1(rx + 10) + " " + f1(ry2 - 2) + " " + f1(rx + 2) + " " + f1(ry2 + 8) : ms < -0.4 ? "M" + f1(rx + 2) + " " + f1(ry2 + 10) + " Q" + f1(rx + 10) + " " + f1(ry2) + " " + f1(rx + 4) + " " + f1(ry2 - 6) : "";
    if (m._k !== inner + teeth + tongue + corner) {
      m._k = inner + teeth + tongue + corner;
      m.inner.setAttribute("d", inner); m.teeth.setAttribute("d", teeth); m.tongue.setAttribute("d", tongue); m.line.setAttribute("d", mo > 0.1 ? "" : line); m.corner.setAttribute("d", corner);
      m.inner.style.display = mo > 0.1 ? "" : "none";
    }
  }
  FP.update = function (t) {
    if (this.dirty) this.compile();
    var c = this.c;
    // visibility
    var vis = 1;
    for (var i = 0; i < this.vis.length; i++) { if (this.vis[i].t <= t) vis = this.vis[i].v; else break; }
    if (vis !== this._vis) { this._vis = vis; this.root.style.display = vis ? "" : "none"; }
    if (!vis) return;
    var x = this.moveX(t), dir = this.dirAt(t);
    var p = this.poseAt(t), ex = this.exprAt(t);
    var talk = this.talkAt(t), lt = talk ? t - talk.s : 0;
    var bob = 0;
    if (talk) { bob = Math.sin(lt * 7.3) * 2.2 + Math.sin(lt * 3.7) * 1.6; p.tilt += Math.sin(lt * 2.9) * 1.6; if (this.gestures && p._name === "idle") { p.aRa += Math.max(0, Math.sin(lt * 2.1)) * 18; p.aRe += Math.max(0, Math.sin(lt * 2.1)) * 50 + Math.sin(lt * 6.4) * 8; p.hR = Math.sin(lt * 2.1) > 0.3 ? 3 : 0; } }
    // walking bob
    var walking = false;
    for (i = 0; i < this.moves.length; i++) { var m = this.moves[i]; if (m.walk && t >= m.t && t <= m.t + m.dur) { walking = true; break; } }
    if (walking) { bob += Math.abs(Math.sin(t * 11)) * 10; p.lean += 4; p.aLa += Math.sin(t * 11) * 22; p.aRa -= Math.sin(t * 11) * 22; }
    var breathe = Math.sin(t * 1.4 + this.seed) * 1.6;
    var s = this.scale;
    this.root.setAttribute("transform", "translate(" + f1(x) + " " + f1(this.y0) + ") scale(" + f1(s * dir) + " " + f1(s) + ")");
    this.body.setAttribute("transform", "translate(0 " + f1(p.by + breathe * 0.4) + ") scale(1 " + f1(p.sq) + ") rotate(" + f1(p.lean) + " 0 " + f1(RIG.hipY) + ")");
    this.head.setAttribute("transform", "translate(0 " + f1(RIG.headY - p.hy - p.shrug - bob - breathe) + ") rotate(" + f1(p.tilt) + ")");
    // arms
    var aL = this.arms.L, aR = this.arms.R;
    aL.up.setAttribute("transform", "translate(" + aL.sx + " " + f1(RIG.shoulderY - p.shrug) + ") rotate(" + f1(-p.aLa) + ")");
    aL.lo.setAttribute("transform", "translate(0 " + RIG.upper + ") rotate(" + f1(-p.aLe) + ")");
    aR.up.setAttribute("transform", "translate(" + aR.sx + " " + f1(RIG.shoulderY - p.shrug) + ") rotate(" + f1(-p.aRa) + ")");
    aR.lo.setAttribute("transform", "translate(0 " + RIG.upper + ") rotate(" + f1(-p.aRe) + ")");
    setHand(aL, Math.round(p.hL)); setHand(aR, Math.round(p.hR));
    // hand rotation so props/pointing read well: hand follows forearm
    // props
    var hp = null;
    for (i = 0; i < this.holds.length; i++) { var h = this.holds[i]; if (t >= h.t && t <= h.e) hp = h.p; }
    var two = p._x.twoHand || null;
    if (hp && this.twoHand[hp]) { two = hp; hp = null; }
    for (var nm in this.twoHand) { var want = two === nm && p._blend > 0.5; var disp = want ? "" : "none"; if (this.twoHand[nm].style.display !== disp) this.twoHand[nm].style.display = disp; }
    setProp(this, aR, hp || (p._blend > 0.4 ? p._x.handProp || null : null));
    // eyes: blink + look
    var blinkP = ((t * 1000 + this.seed * 37) % 3400) / 1000;
    var blink = blinkP < 0.13 ? Math.sin((blinkP / 0.13) * PI) : 0;
    var look = { x: p.lookX, y: p.lookY };
    var lk = null;
    for (i = 0; i < this.looks.length; i++) { if (this.looks[i].t <= t) lk = this.looks[i].tg; else break; }
    if (lk != null) {
      if (lk === "camera") { look = { x: 0, y: 0.1 }; }
      else if (lk === "up") look = { x: 0.2, y: -1 };
      else if (lk === "down") look = { x: 0.3, y: 0.9 };
      else if (lk === "left") look = { x: -dir, y: 0 };
      else if (lk === "right") look = { x: dir, y: 0 };
      else { var tx = typeof lk === "number" ? lk : lk.x0 != null ? lk.moveX(t) : num(lk.x, x); var ddx = (tx - x) * dir; look = { x: clamp(ddx / 400, -1, 1), y: lk.y != null ? clamp((lk.y - (this.y0 + RIG.headY * s)) / 600, -1, 1) : 0 }; }
    }
    var open = ex.eo * (1 - blink) * (1 - ex.lid * 0.5), er = 23 * (c.young ? 1.1 : 1);
    for (var side in this.eyes) {
      var e = this.eyes[side]._, ey = -14;
      var happy = ex.eh > 0.55;
      e.happy.style.display = happy ? "" : "none";
      e.white.style.display = happy ? "none" : ""; e.pupil.style.display = happy ? "none" : ""; e.glint.style.display = happy ? "none" : "";
      if (!happy) {
        e.white.setAttribute("ry", f1(Math.max(1.5, er * open)));
        var py = ey + 2 + look.y * er * 0.45, pxx = e.x + 4 + look.x * er * 0.5;
        e.pupil.setAttribute("cx", f1(pxx)); e.pupil.setAttribute("cy", f1(py));
        e.pupil.setAttribute("r", f1(er * 0.46 * clamp(open * 1.6, 0.3, 1)));
        e.glint.setAttribute("cx", f1(pxx + 5)); e.glint.setAttribute("cy", f1(py - 7));
        e.glint.style.display = open < 0.3 ? "none" : "";
        // upper lid (expression-driven droop)
        var lidH = (1 - ex.eo) * er + ex.lid * er * 0.8;
        e.lid.setAttribute("d", lidH > 1.5 ? "M" + f1(e.x - er * 1.3) + " " + f1(ey - er - 3) + " L" + f1(e.x + er * 1.3) + " " + f1(ey - er - 3) + " L" + f1(e.x + er * 1.3) + " " + f1(ey - er + lidH) + " Q" + f1(e.x) + " " + f1(ey - er + lidH + 6) + " " + f1(e.x - er * 1.3) + " " + f1(ey - er + lidH) + " Z" : "");
      }
    }
    // brows
    var bw = 38 * c.brows, bt = 9 + c.brows * 4;
    function browD(cx, by, ang, s2) {
      var a = (ang * PI) / 180, dx = Math.cos(a) * bw, dy = Math.sin(a) * bw * s2;
      return "M" + f1(cx - dx) + " " + f1(by - dy) + " Q" + f1(cx) + " " + f1(by - bt) + " " + f1(cx + dx) + " " + f1(by + dy) + " L" + f1(cx + dx) + " " + f1(by + dy + bt * 0.8) + " Q" + f1(cx) + " " + f1(by + bt * 0.2) + " " + f1(cx - dx) + " " + f1(by - dy + bt * 0.8) + " Z";
    }
    var byL = -50 + ex.bLy, byR = -50 + ex.bRy;
    var bkey = f1(byL) + "|" + f1(byR) + "|" + f1(ex.bLa) + "|" + f1(ex.bRa);
    if (this._bk !== bkey) { this._bk = bkey; this.brows.L.setAttribute("d", browD(-56, byL - 6, -ex.bLa, 1)); this.brows.R.setAttribute("d", browD(56, byR - 6, ex.bRa, 1)); }
    // mouth: expression + visemes
    var mo = ex.mo, mr = ex.mr, mw = ex.mw, ms = ex.ms;
    if (talk) { var vm = mouthAt(t, talk); mo = Math.max(mo * 0.3, vm.open * 0.85); mr = Math.max(mr * 0.4, vm.round); mw = mw * (1 + vm.wide * 0.2); }
    mouthPath(this.mouth, mw, ms, mo, mr, ex.mk);
    // shadow follows hop
    this.shadow.setAttribute("transform", "scale(" + f1(1 - p.by * -0.002) + " 1)");
    // marks
    for (i = 0; i < this.marks.length; i++) this.marks[i](t);
  };

  // emotion marks above the head ---------------------------------------------------
  function addMark(fig, kind, at, dur) {
    kind = str(kind).toLowerCase();
    var g = G(fig.markLayer, { class: "fs-mark" });
    var st = ink(3.4);
    var hx = 70, hy = RIG.headY - RIG.headRy - 60;
    var parts = [];
    switch (kind) {
      case "sweat": parts.push(Pth(g, "M0 -34 C-14 -10 -16 6 0 12 C16 6 14 -10 0 -34Z", "#9FC2D6", st)); break;
      case "exclaim": case "!": parts.push(Pth(g, "M-9 -60 L9 -60 L5 -4 L-5 -4 Z", C.red, st)); parts.push(Ci(g, 0, 14, 9, C.red, st)); break;
      case "question": case "?": parts.push(Pth(g, "M-22 -40 C-22 -70 24 -70 24 -42 C24 -22 2 -22 2 -4", "none", merge(ink(9), {}))); parts.push(Ci(g, 2, 16, 9, INK, {})); break;
      case "idea": parts.push(Pth(g, "M0 -58 C-30 -58 -40 -30 -26 -12 C-20 -4 -16 0 -16 6 L16 6 C16 0 20 -4 26 -12 C40 -30 30 -58 0 -58Z", C.gold, st)); parts.push(Rc(g, -14, 8, 28, 10, "#B7B7B7", ink(2.6))); for (var r = 0; r < 5; r++) parts.push(Ln(g, Math.cos(r * 1.1 - 2.6) * 52, -34 + Math.sin(r * 1.1 - 2.6) * 52, Math.cos(r * 1.1 - 2.6) * 68, -34 + Math.sin(r * 1.1 - 2.6) * 68, C.gold, 5)); break;
      case "dollar": case "money": parts.push(Ci(g, 0, -20, 30, C.gold, st)); parts.push(Pth(g, "M8 -36 C-2 -40 -14 -34 -12 -26 C-10 -16 10 -18 12 -8 C14 0 0 2 -10 -2 M0 -42 L0 2", "none", merge(ink(4), {}))); break;
      case "anger": for (var a = 0; a < 4; a++) parts.push(Pth(g, "M" + f1(Math.cos(a * PI / 2 + 0.78) * 10) + " " + f1(-20 + Math.sin(a * PI / 2 + 0.78) * 10) + " Q" + f1(Math.cos(a * PI / 2 + 0.78) * 30) + " " + f1(-20 + Math.sin(a * PI / 2 + 0.78) * 30) + " " + f1(Math.cos(a * PI / 2 + 0.4) * 34) + " " + f1(-20 + Math.sin(a * PI / 2 + 0.4) * 34), "none", merge(ink(6), { stroke: C.red }))); break;
      case "sparkle": for (var k = 0; k < 3; k++) parts.push(Pth(g, "M0 -20 L6 -6 L20 0 L6 6 L0 20 L-6 6 L-20 0 L-6 -6 Z", C.gold, merge(ink(2.4), { transform: "translate(" + (k * 34 - 34) + " " + (k % 2 ? -40 : -10) + ") scale(" + (0.6 + k * 0.25) + ")" }))); break;
      case "zzz": for (var z = 0; z < 3; z++) parts.push(Pth(g, "M-10 -10 L10 -10 L-10 10 L10 10", "none", merge(ink(4), { transform: "translate(" + (z * 24) + " " + (-z * 26) + ") scale(" + (0.7 + z * 0.3) + ")" }))); break;
      case "check": parts.push(Pth(g, "M-26 -8 L-6 12 L30 -30", "none", merge(ink(10), { stroke: C.green }))); break;
      case "cross": parts.push(Pth(g, "M-24 -24 L24 24 M24 -24 L-24 24", "none", merge(ink(10), { stroke: C.red }))); break;
      default: parts.push(Ci(g, 0, -20, 20, C.gold, st));
    }
    fig.marks.push(function (t) {
      var lt = t - at;
      if (lt < 0 || lt > dur) { if (g.style.display !== "none") g.style.display = "none"; return; }
      g.style.display = "";
      var inP = clamp(lt / 0.25, 0, 1), outP = clamp((dur - lt) / 0.3, 0, 1);
      var sc = outBack(inP) * sm(outP), fl = Math.sin(lt * 4) * 5, bobM = kind === "sweat" ? lt * 30 : -lt * 8;
      g.setAttribute("transform", "translate(" + f1(hx + (kind === "sweat" ? 40 : 0)) + " " + f1(hy + fl + bobM) + ") scale(" + f1(sc) + ") rotate(" + f1(Math.sin(lt * 3) * 6) + ")");
    });
  }

  // ───────────────────────── HUD: plate, headlines, stats, captions, chapter cards ─────────────────────────
  function hudPos(sc, node, pos, opts) {
    // pos: {x, y} fractions of the frame (centre of the element) or named
    opts = opts || {};
    var W = sc.W, H = sc.H, p = pos || {};
    if (typeof pos === "string") {
      var named = {
        "top-right": { x: 0.8, y: 0.17 }, "top-left": { x: 0.2, y: 0.17 }, "top": { x: 0.5, y: 0.15 },
        "right": { x: sc.portrait ? 0.5 : 0.7, y: sc.portrait ? 0.62 : 0.52 }, "left": { x: sc.portrait ? 0.5 : 0.3, y: sc.portrait ? 0.62 : 0.52 }, "centre": { x: 0.5, y: 0.5 }, "center": { x: 0.5, y: 0.5 },
        "bottom": { x: 0.5, y: 0.85 }, "bottom-right": { x: 0.72, y: 0.82 }, "bottom-left": { x: 0.28, y: 0.82 },
      };
      p = named[pos] || named.right;
    }
    var x = num(p.x, 0.5) * W, y = num(p.y, 0.5) * H;
    node.style.left = px(x); node.style.top = px(y);
    node.style.transform = "translate(-50%,-50%)";
    if (opts.maxWidth) node.style.maxWidth = px(Math.min(opts.maxWidth, W * 0.92));
    return { x: x, y: y };
  }
  function keepInside(sc, node, pad) {
    // nudge a HUD element back into the safe frame after layout
    try {
      S.flush && S.flush();
      var r = node.getBoundingClientRect(), W = sc.W, H = sc.H, m = pad != null ? pad : u(28);
      var dx = 0, dy = 0;
      if (r.left < m) dx = m - r.left; else if (r.right > W - m) dx = W - m - r.right;
      if (r.top < m) dy = m - r.top; else if (r.bottom > H - m) dy = H - m - r.bottom;
      if (dx || dy) { node.style.left = px(parseFloat(node.style.left) + dx); node.style.top = px(parseFloat(node.style.top) + dy); }
    } catch (e) {}
  }

  function rectsIntersect(a, b, m) { m = m || 0; return !(a.right + m < b.left || a.left - m > b.right || a.bottom + m < b.top || a.top - m > b.bottom); }
  /** Rects (screen px) that HUD elements must not cover: the plate and every figure's face. */
  function protectedRects(sc, skipPlate) {
    var out = [];
    try {
      if (!skipPlate && sc.plateEl) { var pr = sc.plateEl.getBoundingClientRect(); if (pr.width) out.push(pr); }
      var c = sc.cam.base;
      for (var i = 0; i < sc.actors.length; i++) {
        var f = sc.actors[i], s = f.scale * c.z * sc.k;
        var cx = (f.x0 - c.x) * c.z * sc.k + sc.W / 2, cy = (f.y0 + RIG.headY * f.scale - c.y) * c.z * sc.k + sc.H / 2;
        out.push({ left: cx - RIG.headRx * s, right: cx + RIG.headRx * s, top: cy - RIG.headRy * s, bottom: cy + RIG.headRy * s * 0.9 });
      }
    } catch (e) {}
    return out;
  }
  /** Move (and if needed shrink) a centred HUD box so it covers neither the plate nor a face. */
  function settle(sc, box, opts) {
    opts = opts || {};
    try {
      S.flush && S.flush();
      var t0 = opts.from != null ? opts.from : 0, t1 = opts.until != null ? opts.until : 1e9;
      var av = protectedRects(sc, opts.skipPlate).concat((sc.hudRects || []).filter(function (h) { return h.t0 < t1 - 0.05 && h.t1 > t0 + 0.05; }));
      var rec = function () { try { var rr = box.getBoundingClientRect(); if (rr.width) (sc.hudRects = sc.hudRects || []).push({ left: rr.left, right: rr.right, top: rr.top, bottom: rr.bottom, t0: t0, t1: t1 }); } catch (e) {} };
      if (!av.length) { rec(); return; }
      var m = u(14), M = u(24), W = sc.W, H = sc.H;
      var r0 = box.getBoundingClientRect();
      if (!r0.width) return;
      var cx0 = parseFloat(box.style.left), cy0 = parseFloat(box.style.top);
      function bad(r) { for (var i = 0; i < av.length; i++) if (rectsIntersect(r, av[i], m)) return true; return r.left < M || r.right > W - M || r.top < M || r.bottom > H - M; }
      if (!bad(r0)) { rec(); return; }
      var hw = r0.width / 2, hh = r0.height / 2;
      var cands = [];
      var steps = [0.04, 0.08, 0.12, 0.16, 0.2, 0.26, 0.32, 0.4];
      steps.forEach(function (d) { cands.push([0, d]); cands.push([0, -d]); cands.push([d, 0]); cands.push([-d, 0]); cands.push([d * 0.7, d * 0.7]); cands.push([-d * 0.7, d * 0.7]); cands.push([d * 0.7, -d * 0.7]); cands.push([-d * 0.7, -d * 0.7]); });
      for (var k = 0; k < cands.length; k++) {
        var cx = cx0 + cands[k][0] * W, cy = cy0 + cands[k][1] * H;
        var r = { left: cx - hw, right: cx + hw, top: cy - hh, bottom: cy + hh };
        if (!bad(r)) { box.style.left = px(cx); box.style.top = px(cy); rec(); return; }
      }
      // nothing fits: shrink the box (paper cards) and try again once
      if (opts.resize) {
        if (r0.width < sc.W * 0.3) { rec(); return; }
        var sc2 = 0.8;
        box.style.width = px(r0.width * sc2); box.style.height = px(r0.height * sc2);
        settle(sc, box, { skipPlate: opts.skipPlate, resize: true, from: opts.from, until: opts.until });
      } else {
        if (opts.shrunk) { rec(); return; }
        box.style.transform = (box.style.transform || "") + " scale(0.82)";
        settle(sc, box, { skipPlate: opts.skipPlate, resize: false, shrunk: true, from: opts.from, until: opts.until });
      }
    } catch (e) {}
  }
  S.settle = settle;

  /** Headline plate: company name in bold caps + "1937 – 2026" year band with a coloured square. */
  SP.plate = function (company, years, opts) {
    opts = opts || {};
    var sc = this, tl = sc.tl, at = clampT(opts.at != null ? opts.at : 0.25);
    var box = el("div.fs-plate", { parent: sc.hud });
    if (opts.kicker) el("div.fs-plate-kick", { parent: box, text: plain(opts.kicker).toUpperCase() });
    var name = el("div.fs-plate-name", { parent: box });
    name.appendChild(S.rich(str(company || "THE COMPANY").toUpperCase()));
    var band = el("div.fs-plate-band", { parent: box });
    el("i.fs-plate-sq", { parent: band, style: { background: opts.color || C.red } });
    var yrs = el("span.fs-plate-years", { parent: band, text: plain(years || "") });
    if (!years) band.style.display = "none";
    var maxW = sc.portrait ? sc.W * 0.86 : sc.square ? sc.W * 0.42 : sc.W * 0.36;
    box.style.maxWidth = px(maxW);
    box.style.width = opts.wide ? px(maxW) : "";
    if (sc.portrait) { box.style.left = "50%"; box.style.top = px(sc.H * 0.05); box.style.transform = "translate(-50%,0) rotate(-1.2deg)"; box.classList.add("fs-plate-c"); }
    else { box.style.right = px(sc.W * 0.04); box.style.top = px(sc.H * 0.06); box.style.transform = "rotate(-1.6deg)"; }
    if (opts.pos === "left") { box.style.right = ""; box.style.left = px(sc.W * 0.04); }
    V.fit(name, { maxLines: 2, min: u(30) });
    V.fit(yrs, { maxLines: 1, min: u(16) });
    tl.fromTo(box, { opacity: 0, x: u(sc.portrait ? 0 : 160), y: u(sc.portrait ? -60 : 0), rotate: 5 }, { opacity: 1, x: 0, y: 0, rotate: sc.portrait ? -1.2 : -1.6 }, { at: at, dur: 0.7, ease: "outBack" });
    tl.fromTo(band, { opacity: 0, x: u(-30) }, { opacity: 1, x: 0 }, { at: at + 0.35, dur: 0.5, ease: "outCubic" });
    if (opts.until != null && opts.until < D() - 0.3) tl.to(box, { opacity: 0, y: u(-30) }, { at: clampT(opts.until), dur: 0.4, ease: "inCubic" });
    sc.plateEl = box;
    return { el: box, name: name, band: band, at: at };
  };

  /** Big bold caps headline (thumbnail style) that pops on its key word. opts: pos, size, kicker, until, color, rot. */
  SP.headline = function (text, at, opts) {
    opts = opts || {};
    var sc = this, tl = sc.tl;
    at = clampT(at == null ? 0.5 : at);
    var box = el("div.fs-head.fs-" + (opts.size || "lg"), { parent: sc.hud });
    if (opts.kicker) el("div.fs-head-kick", { parent: box, text: plain(opts.kicker).toUpperCase() });
    var tx = el("div.fs-head-text", { parent: box });
    tx.appendChild(S.rich(str(text).toUpperCase()));
    if (opts.color) box.style.setProperty("--fs-em", opts.color);
    var maxW = opts.maxWidth || (sc.portrait ? sc.W * 0.88 : sc.square ? sc.W * 0.62 : sc.W * 0.46);
    var pos = hudPos(sc, box, opts.pos || "right", { maxWidth: maxW });
    var rot = opts.rot != null ? opts.rot : -2;
    box.style.transform = "translate(-50%,-50%) rotate(" + rot + "deg)";
    V.fit(tx, { maxLines: opts.maxLines || 3, min: u(26) });
    keepInside(sc, box);
    if (opts.settle !== false) settle(sc, box, { from: at, until: opts.until });
    tl.fromTo(box, { opacity: 0, scale: 0.55, rotate: rot - 8 }, { opacity: 1, scale: 1, rotate: rot }, { at: at, dur: 0.5, ease: "outBack" });
    if (opts.until != null && opts.until < D() - 0.3) tl.to(box, { opacity: 0, scale: 0.8 }, { at: clampT(opts.until), dur: 0.35, ease: "inCubic" });
    return { el: box, at: at, pos: pos };
  };

  /** Stat callout: a card with a big counting number + label. opts: prefix, suffix, decimals, pos, until, color, arrowTo (world point / figure), sub. */
  SP.stat = function (value, label, at, opts) {
    opts = opts || {};
    var sc = this, tl = sc.tl;
    at = clampT(at == null ? 0.5 : at);
    var box = el("div.fs-stat", { parent: sc.hud });
    if (opts.kicker) el("div.fs-stat-kick", { parent: box, text: plain(opts.kicker).toUpperCase() });
    var numEl = el("div.fs-stat-num", { parent: box });
    var lab = el("div.fs-stat-label", { parent: box, text: plain(label || "") });
    if (!label) lab.style.display = "none";
    if (opts.color) numEl.style.color = opts.color;
    var v = num(value, NaN), txt = str(value);
    var money = /^[$€£¥]/.test(txt.trim());
    if (isNaN(v)) {
      // "$3.2B", "47%" etc: parse number + keep the rest as prefix/suffix
      var m = /^([^0-9\-]*)(-?[0-9][0-9,]*\.?[0-9]*)(.*)$/.exec(txt.trim());
      if (m) { v = parseFloat(m[2].replace(/,/g, "")); opts.prefix = opts.prefix != null ? opts.prefix : m[1]; opts.suffix = opts.suffix != null ? opts.suffix : m[3]; opts.decimals = opts.decimals != null ? opts.decimals : (m[2].split(".")[1] || "").length; }
    }
    var maxW = sc.portrait ? sc.W * 0.8 : sc.square ? sc.W * 0.5 : sc.W * 0.36;
    hudPos(sc, box, opts.pos || "right", { maxWidth: maxW });
    var rot = opts.rot != null ? opts.rot : 1.5;
    box.style.transform = "translate(-50%,-50%) rotate(" + rot + "deg)";
    if (!isNaN(v)) {
      numEl.textContent = (opts.prefix || "") + V.format(v, opts.decimals || 0) + (opts.suffix || "");
      V.fit(numEl, { maxLines: 1, min: u(30) });
      tl.fromTo(numEl, { text: 0 }, { text: v, prefix: opts.prefix || "", suffix: opts.suffix || "", decimals: opts.decimals || 0 }, { at: at + 0.1, dur: opts.countDur != null ? opts.countDur : 1.4, ease: "outExpo" });
    } else { numEl.textContent = txt; V.fit(numEl, { maxLines: 1, min: u(30) }); }
    V.fit(lab, { maxLines: 2, min: u(18) });
    keepInside(sc, box);
    if (opts.settle !== false) settle(sc, box, { from: at, until: opts.until });
    tl.fromTo(box, { opacity: 0, y: u(40), rotate: rot + 6 }, { opacity: 1, y: 0, rotate: rot }, { at: at, dur: 0.55, ease: "outBack" });
    if (opts.until != null && opts.until < D() - 0.3) tl.to(box, { opacity: 0, y: u(-20) }, { at: clampT(opts.until), dur: 0.35, ease: "inCubic" });
    if (opts.arrowTo) {
      var line = Pth(sc.osvg, "", "none", { stroke: INK, "stroke-width": Math.max(2, u(4)), "stroke-dasharray": u(10) + " " + u(8), opacity: 0 });
      var tgt = opts.arrowTo;
      sc.labels.push(function (t) {
        if (t < at + 0.3) { line.setAttribute("opacity", "0"); return; }
        var r = box.getBoundingClientRect();
        var wp = tgt.x0 != null ? { x: tgt.moveX(t), y: tgt.y0 - 520 * tgt.scale } : tgt;
        var s = sc.toScreen(wp.x, wp.y, tgt.d != null ? tgt.d : 1);
        var fromX = s.x < r.left ? r.left : s.x > r.right ? r.right : s.x, fromY = s.y < r.top ? r.top : r.bottom;
        line.setAttribute("d", "M" + f1(fromX) + " " + f1(fromY) + " Q" + f1((fromX + s.x) / 2) + " " + f1(fromY) + " " + f1(s.x) + " " + f1(s.y));
        line.setAttribute("opacity", (0.6 * sm((t - at - 0.3) / 0.4)).toFixed(2));
      });
    }
    return { el: box, at: at, num: numEl };
  };

  /** Lower-third paper caption strip with the narration words lighting up as spoken. */
  SP.captions = function (opts) {
    opts = opts || {};
    var sc = this, tl = sc.tl;
    var W = words();
    var toks = W.length ? W : null;
    var text = opts.text || V.narration || "";
    var bar = el("div.fs-caps" + (opts.top ? ".fs-caps-top" : ""), { parent: sc.hud });
    var maxW = opts.maxWidth || (sc.portrait ? sc.W * 0.9 : sc.W * 0.62);
    bar.style.maxWidth = px(maxW);
    bar.style.left = opts.x != null ? px(opts.x * sc.W) : "50%";
    bar.style.transform = "translateX(-50%)";
    if (opts.top) bar.style.top = px(sc.H * (sc.portrait ? 0.14 : 0.08)); else bar.style.bottom = px(sc.H * (sc.portrait ? 0.07 : 0.07));
    var chunks = [];
    if (toks) {
      var cur = [];
      toks.forEach(function (w, i) {
        cur.push(w);
        var endsSentence = /[.!?]$/.test(w.word);
        var nextGap = toks[i + 1] ? toks[i + 1].start - w.end : 1;
        if (cur.length >= (opts.chunk || 6) || endsSentence || nextGap > 0.6 || i === toks.length - 1) { chunks.push(cur); cur = []; }
      });
    } else {
      var ws = str(text).split(/\s+/).filter(Boolean), n = Math.max(1, ws.length), per = Math.max(0.2, (D() - 0.6) / n), k = 0;
      var c2 = [];
      ws.forEach(function (w, i) { c2.push({ word: w, start: 0.3 + i * per, end: 0.3 + (i + 1) * per }); if (c2.length >= (opts.chunk || 6) || /[.!?]$/.test(w) || i === ws.length - 1) { chunks.push(c2); c2 = []; } k++; });
    }
    if (!chunks.length) { bar.style.display = "none"; return bar; }
    chunks.forEach(function (ch, ci) {
      var line = el("div.fs-caps-line", { parent: bar });
      var spans = ch.map(function (w) { return el("span.fs-caps-w", { parent: line, text: w.word + " " }); });
      V.fit(line, { maxLines: 2, min: u(20) });
      var s = ch[0].start - 0.1, e = ci < chunks.length - 1 ? chunks[ci + 1][0].start - 0.1 : D();
      tl.fromTo(line, { opacity: 0, y: u(14) }, { opacity: 1, y: 0 }, { at: clampT(s), dur: 0.25, ease: "outCubic" });
      if (e < D() - 0.1) tl.set(line, { opacity: 0 }, { at: clampT(e) });
      spans.forEach(function (sp, i) { tl.fromTo(sp, { color: rgba(INK, 0.45) }, { color: INK }, { at: clampT(ch[i].start), dur: 0.12, ease: "outQuad" }); });
    });
    tl.fromTo(bar, { opacity: 0 }, { opacity: 1 }, { at: 0.05, dur: 0.3 });
    return bar;
  };

  /** Era chapter card: huge year + title + subtitle in an ink frame. opts: at, until, sub, kicker, pos. */
  SP.chapter = function (year, title, opts) {
    opts = opts || {};
    var sc = this, tl = sc.tl, at = clampT(opts.at != null ? opts.at : 0.3);
    var box = el("div.fs-chapter", { parent: sc.hud });
    var kick = el("div.fs-ch-kick", { parent: box, text: plain(opts.kicker || "CHAPTER").toUpperCase() });
    var yr = el("div.fs-ch-year", { parent: box, text: plain(year || "") });
    if (!year) yr.style.display = "none";
    var rule = el("i.fs-ch-rule", { parent: box });
    var ti = el("div.fs-ch-title", { parent: box });
    ti.appendChild(S.rich(str(title || "").toUpperCase()));
    var sub = opts.sub ? el("div.fs-ch-sub", { parent: box, text: plain(opts.sub) }) : null;
    var maxW = sc.portrait ? sc.W * 0.86 : sc.square ? sc.W * 0.7 : sc.W * 0.5;
    hudPos(sc, box, opts.pos || { x: 0.5, y: sc.portrait ? 0.4 : 0.46 }, { maxWidth: maxW });
    box.style.width = px(maxW);
    V.fit(yr, { maxLines: 1, min: u(60) });
    V.fit(ti, { maxLines: 3, min: u(28) });
    if (sub) V.fit(sub, { maxLines: 2, min: u(18) });
    tl.fromTo(box, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1 }, { at: at, dur: 0.6, ease: "outCubic" });
    tl.fromTo(kick, { opacity: 0, letterSpacing: "0.6em" }, { opacity: 1, letterSpacing: "0.32em" }, { at: at + 0.1, dur: 0.9, ease: "outCubic" });
    tl.fromTo(yr, { opacity: 0, y: u(30), scale: 1.3 }, { opacity: 1, y: 0, scale: 1 }, { at: at + 0.25, dur: 0.7, ease: "outBack" });
    tl.fromTo(rule, { scaleX: 0 }, { scaleX: 1 }, { at: at + 0.6, dur: 0.6, ease: "inOutCubic" });
    tl.fromTo(ti, { opacity: 0, y: u(20) }, { opacity: 1, y: 0 }, { at: opts.titleAt != null ? clampT(opts.titleAt) : at + 0.8, dur: 0.6, ease: "outCubic" });
    if (sub) tl.fromTo(sub, { opacity: 0 }, { opacity: 1 }, { at: at + 1.3, dur: 0.6 });
    if (opts.until != null && opts.until < D() - 0.3) tl.to(box, { opacity: 0, y: u(-30) }, { at: clampT(opts.until), dur: 0.45, ease: "inCubic" });
    return { el: box, at: at };
  };

  /** Small ink-framed label pinned at a screen position (for callouts). */
  SP.label = function (text, at, opts) {
    opts = opts || {};
    var sc = this, tl = sc.tl;
    var box = el("div.fs-label" + (opts.accent ? ".fs-label-acc" : ""), { parent: sc.hud });
    box.appendChild(S.rich(text));
    hudPos(sc, box, opts.pos || "centre", { maxWidth: opts.maxWidth || sc.W * 0.4 });
    V.fit(box, { maxLines: 2, min: u(16) });
    keepInside(sc, box);
    tl.fromTo(box, { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1 }, { at: clampT(at == null ? 0.5 : at), dur: 0.4, ease: "outBack" });
    if (opts.until != null && opts.until < D() - 0.3) tl.to(box, { opacity: 0 }, { at: clampT(opts.until), dur: 0.3 });
    return box;
  };

  // ───────────────────────── paper cards (documents on screen) ─────────────────────────
  /** A paper sheet in the HUD with an SVG drawing area. Returns { el, svg, w, h, inner }. */
  function paperCard(sc, opts) {
    opts = opts || {};
    var W = sc.W, H = sc.H;
    var w = opts.w || (sc.portrait ? W * 0.86 : sc.square ? W * 0.6 : W * 0.44), h = opts.h || w * (opts.ratio || 0.68);
    if (h > H * 0.72) { h = H * 0.72; w = h / (opts.ratio || 0.68); }
    var box = el("div.fs-paper" + (opts.cls ? "." + opts.cls : ""), { parent: sc.hud, style: { width: px(w), height: px(h) } });
    if (opts.blue) box.classList.add("fs-paper-blue");
    hudPos(sc, box, opts.pos || "right");
    var rot = opts.rot != null ? opts.rot : -1.2;
    box.style.transform = "translate(-50%,-50%) rotate(" + rot + "deg)";
    var head = opts.title ? el("div.fs-paper-title", { parent: box, text: plain(opts.title).toUpperCase() }) : null;
    if (head) V.fit(head, { maxLines: 1, min: u(16) });
    var inner = el("div.fs-paper-inner", { parent: box });
    var svg = sv("svg", { class: "fs-paper-svg", viewBox: "0 0 1000 " + f1(1000 * (h / w)), preserveAspectRatio: "xMidYMid meet" }, inner);
    var at = clampT(opts.at != null ? opts.at : 0.4);
    keepInside(sc, box);
    if (opts.settle !== false) settle(sc, box, { resize: true, from: at, until: opts.until });
    sc.tl.fromTo(box, { opacity: 0, y: u(60), rotate: rot + 4 }, { opacity: 1, y: 0, rotate: rot }, { at: at, dur: 0.6, ease: "outCubic" });
    if (opts.until != null && opts.until < D() - 0.3) sc.tl.to(box, { opacity: 0, y: u(-30) }, { at: clampT(opts.until), dur: 0.4, ease: "inCubic" });
    return { el: box, svg: svg, w: w, h: h, inner: inner, at: at, vw: 1000, vh: 1000 * (h / w), rot: rot };
  }
  SP.paper = function (opts) { return paperCard(this, opts); };

  // product sketches (blueprint line art, 0..1000 wide local units, centred at 500,300) -----------------
  var SKETCH = {};
  function SK(g, d, extra) { return Pth(g, d, "none", merge({ stroke: "currentColor", "stroke-width": 7, "stroke-linecap": "round", "stroke-linejoin": "round" }, extra || {})); }
  SKETCH.car = function (g) { SK(g, "M120 380 L160 300 L300 260 L420 200 L640 200 L760 280 L880 300 L900 380 Z"); SK(g, "M120 380 L900 380"); SK(g, "M300 260 L420 200 M470 205 L470 262 L300 262 M500 205 L500 262 L740 262"); Ci(g, 270, 390, 60, "none", { stroke: "currentColor", "stroke-width": 7 }); Ci(g, 740, 390, 60, "none", { stroke: "currentColor", "stroke-width": 7 }); Ci(g, 270, 390, 24, "none", { stroke: "currentColor", "stroke-width": 5 }); Ci(g, 740, 390, 24, "none", { stroke: "currentColor", "stroke-width": 5 }); SK(g, "M880 300 L900 330 M140 330 L170 330"); };
  SKETCH.truck = function (g) { SK(g, "M120 380 L120 180 L560 180 L560 380 Z"); SK(g, "M560 260 L700 260 L800 330 L880 340 L880 380 L560 380"); SK(g, "M620 270 L690 270 L740 330 L620 330 Z"); Ci(g, 230, 390, 56, "none", { stroke: "currentColor", "stroke-width": 7 }); Ci(g, 780, 390, 56, "none", { stroke: "currentColor", "stroke-width": 7 }); SK(g, "M160 220 L520 220 M160 340 L520 340"); };
  SKETCH.phone = function (g) { sv("rect", { x: 380, y: 60, width: 240, height: 480, rx: 36, fill: "none", stroke: "currentColor", "stroke-width": 7 }, g); sv("rect", { x: 400, y: 110, width: 200, height: 380, rx: 8, fill: "none", stroke: "currentColor", "stroke-width": 5 }, g); Ci(g, 500, 515, 12, "none", { stroke: "currentColor", "stroke-width": 5 }); SK(g, "M470 85 L530 85"); SK(g, "M430 160 L570 160 M430 200 L540 200 M430 240 L560 240"); };
  SKETCH.computer = function (g) { sv("rect", { x: 220, y: 90, width: 560, height: 340, rx: 16, fill: "none", stroke: "currentColor", "stroke-width": 7 }, g); sv("rect", { x: 250, y: 120, width: 500, height: 270, rx: 6, fill: "none", stroke: "currentColor", "stroke-width": 5 }, g); SK(g, "M440 430 L420 500 L580 500 L560 430 M340 500 L660 500"); SK(g, "M290 170 L450 170 M290 210 L520 210 M290 250 L410 250 M290 290 L480 290"); SK(g, "M300 560 L700 560 L720 600 L280 600 Z"); for (var i = 0; i < 6; i++) SK(g, "M" + (330 + i * 60) + " 572 L" + (360 + i * 60) + " 572", { "stroke-width": 4 }); };
  SKETCH.software = function (g) { sv("rect", { x: 160, y: 80, width: 680, height: 460, rx: 14, fill: "none", stroke: "currentColor", "stroke-width": 7 }, g); SK(g, "M160 150 L840 150"); Ci(g, 200, 115, 10, "currentColor", {}); Ci(g, 236, 115, 10, "currentColor", {}); Ci(g, 272, 115, 10, "currentColor", {}); SK(g, "M210 210 L400 210 M210 260 L470 260 M210 310 L350 310 M210 360 L440 360 M210 410 L300 410", { "stroke-width": 9 }); SK(g, "M520 200 L800 200 L800 470 L520 470 Z"); SK(g, "M550 440 L600 360 L650 400 L720 280 L770 320"); };
  SKETCH.rocket = function (g) { SK(g, "M500 40 C620 160 620 400 580 500 L420 500 C380 400 380 160 500 40 Z"); SK(g, "M420 400 L330 480 L360 520 L430 500 M580 400 L670 480 L640 520 L570 500"); Ci(g, 500, 240, 50, "none", { stroke: "currentColor", "stroke-width": 7 }); SK(g, "M450 500 L470 560 L530 560 L550 500 M470 560 C480 600 520 600 530 560"); SK(g, "M500 100 L500 160", { "stroke-width": 5 }); };
  SKETCH.plane = function (g) { SK(g, "M120 320 L700 290 C800 285 860 300 880 320 C860 340 800 352 700 348 L120 330 Z"); SK(g, "M400 300 L300 150 L360 150 L520 295 M400 340 L300 480 L360 480 L520 345"); SK(g, "M700 292 L760 200 L800 200 L760 295"); Ci(g, 820, 318, 10, "none", { stroke: "currentColor", "stroke-width": 5 }); for (var i = 0; i < 6; i++) Ci(g, 560 + i * 36, 318, 8, "none", { stroke: "currentColor", "stroke-width": 4 }); };
  SKETCH.shoe = function (g) { SK(g, "M120 420 C120 360 200 330 260 300 C340 260 380 180 440 160 C520 150 540 240 640 280 C760 320 880 330 900 400 L900 440 L120 440 Z"); SK(g, "M120 440 L900 440 L900 480 C700 500 300 500 120 480 Z"); SK(g, "M330 290 L470 350 M380 240 L520 300 M430 200 L560 260", { "stroke-width": 5 }); SK(g, "M540 300 C640 360 760 380 880 400", { "stroke-width": 5 }); };
  SKETCH.bottle = function (g) { SK(g, "M440 60 L560 60 L560 140 C560 180 620 200 620 260 L620 540 C620 560 600 570 580 570 L420 570 C400 570 380 560 380 540 L380 260 C380 200 440 180 440 140 Z"); sv("rect", { x: 400, y: 300, width: 200, height: 170, rx: 8, fill: "none", stroke: "currentColor", "stroke-width": 5 }, g); SK(g, "M440 40 L560 40 L560 60 L440 60 Z"); SK(g, "M430 350 L570 350 M430 400 L540 400", { "stroke-width": 5 }); };
  SKETCH.chip = function (g) { sv("rect", { x: 300, y: 180, width: 400, height: 320, rx: 10, fill: "none", stroke: "currentColor", "stroke-width": 7 }, g); sv("rect", { x: 400, y: 260, width: 200, height: 160, rx: 4, fill: "none", stroke: "currentColor", "stroke-width": 5 }, g); for (var i = 0; i < 8; i++) { SK(g, "M" + (330 + i * 48) + " 180 L" + (330 + i * 48) + " 130", { "stroke-width": 5 }); SK(g, "M" + (330 + i * 48) + " 500 L" + (330 + i * 48) + " 550", { "stroke-width": 5 }); } for (var k = 0; k < 6; k++) { SK(g, "M300 " + (210 + k * 48) + " L250 " + (210 + k * 48), { "stroke-width": 5 }); SK(g, "M700 " + (210 + k * 48) + " L750 " + (210 + k * 48), { "stroke-width": 5 }); } SK(g, "M420 300 L480 300 L480 360 L560 360", { "stroke-width": 4 }); };
  SKETCH.box = function (g) { SK(g, "M240 240 L560 240 L560 540 L240 540 Z"); SK(g, "M560 240 L700 150 L700 450 L560 540 M240 240 L380 150 L700 150"); SK(g, "M400 240 L400 540 M240 390 L560 390", { "stroke-width": 4 }); SK(g, "M300 290 L360 290 M300 320 L350 320", { "stroke-width": 5 }); };
  SKETCH.lightbulb = function (g) { SK(g, "M500 70 C360 70 300 180 340 280 C360 330 400 360 410 410 L590 410 C600 360 640 330 660 280 C700 180 640 70 500 70 Z"); sv("rect", { x: 420, y: 410, width: 160, height: 90, rx: 10, fill: "none", stroke: "currentColor", "stroke-width": 7 }, g); SK(g, "M420 440 L580 440 M420 470 L580 470", { "stroke-width": 5 }); SK(g, "M460 410 L470 330 L500 350 L530 330 L540 410", { "stroke-width": 5 }); SK(g, "M460 500 L540 500 L520 530 L480 530 Z"); };
  SKETCH.engine = function (g) { sv("rect", { x: 260, y: 220, width: 480, height: 260, rx: 12, fill: "none", stroke: "currentColor", "stroke-width": 7 }, g); for (var i = 0; i < 4; i++) { sv("rect", { x: 300 + i * 110, y: 120, width: 70, height: 100, rx: 6, fill: "none", stroke: "currentColor", "stroke-width": 6 }, g); SK(g, "M" + (335 + i * 110) + " 120 L" + (335 + i * 110) + " 80", { "stroke-width": 5 }); } Ci(g, 500, 350, 70, "none", { stroke: "currentColor", "stroke-width": 7 }); Ci(g, 500, 350, 30, "none", { stroke: "currentColor", "stroke-width": 5 }); SK(g, "M740 300 L840 300 L840 420 L740 420 M260 300 L180 300 L180 400 L260 400", { "stroke-width": 5 }); };
  SKETCH.burger = function (g) { SK(g, "M200 260 C200 140 800 140 800 260 Z"); SK(g, "M180 300 L820 300 L800 340 L200 340 Z"); SK(g, "M220 350 L780 350 L780 400 L220 400 Z"); SK(g, "M200 420 C200 520 800 520 800 420 Z"); SK(g, "M300 200 L310 215 M450 180 L460 195 M600 190 L610 205", { "stroke-width": 5 }); };
  SKETCH.bike = function (g) { Ci(g, 260, 400, 120, "none", { stroke: "currentColor", "stroke-width": 7 }); Ci(g, 740, 400, 120, "none", { stroke: "currentColor", "stroke-width": 7 }); SK(g, "M260 400 L420 200 L660 200 L740 400 M420 200 L500 400 L260 400 M500 400 L660 200 M400 160 L460 160 L420 200 M640 150 L700 190"); Ci(g, 500, 400, 30, "none", { stroke: "currentColor", "stroke-width": 6 }); };
  SKETCH.watch = function (g) { Ci(g, 500, 300, 190, "none", { stroke: "currentColor", "stroke-width": 7 }); Ci(g, 500, 300, 150, "none", { stroke: "currentColor", "stroke-width": 5 }); SK(g, "M500 300 L500 190 M500 300 L580 340", { "stroke-width": 8 }); SK(g, "M430 110 L570 110 L560 40 L440 40 Z M430 490 L570 490 L560 560 L440 560 Z"); for (var i = 0; i < 12; i++) { var a = (i / 12) * PI * 2; SK(g, "M" + f1(500 + Math.cos(a) * 130) + " " + f1(300 + Math.sin(a) * 130) + " L" + f1(500 + Math.cos(a) * 145) + " " + f1(300 + Math.sin(a) * 145), { "stroke-width": 4 }); } };
  SKETCH.ship = function (g) { SK(g, "M120 360 L880 360 L820 480 L200 480 Z"); SK(g, "M300 360 L300 260 L700 260 L700 360 M560 260 L560 180 L660 180 L660 260"); for (var i = 0; i < 6; i++) sv("rect", { x: 320 + i * 60, y: 290, width: 50, height: 40, fill: "none", stroke: "currentColor", "stroke-width": 4 }, g); SK(g, "M600 180 L600 120", { "stroke-width": 5 }); SK(g, "M120 520 C200 500 260 540 340 520 C420 500 480 540 560 520 C640 500 700 540 780 520 C840 505 860 520 880 520", { "stroke-width": 5 }); };
  SKETCH.tv = function (g) { sv("rect", { x: 200, y: 110, width: 600, height: 380, rx: 14, fill: "none", stroke: "currentColor", "stroke-width": 7 }, g); sv("rect", { x: 230, y: 140, width: 540, height: 320, rx: 6, fill: "none", stroke: "currentColor", "stroke-width": 5 }, g); SK(g, "M400 490 L380 560 L620 560 L600 490 M320 560 L680 560"); SK(g, "M450 80 L500 110 L550 80", { "stroke-width": 5 }); SK(g, "M330 300 C400 240 500 360 560 300 C620 240 680 330 700 300", { "stroke-width": 5 }); };
  SKETCH.camera = function (g) { sv("rect", { x: 220, y: 180, width: 560, height: 340, rx: 20, fill: "none", stroke: "currentColor", "stroke-width": 7 }, g); Ci(g, 500, 350, 110, "none", { stroke: "currentColor", "stroke-width": 7 }); Ci(g, 500, 350, 70, "none", { stroke: "currentColor", "stroke-width": 5 }); SK(g, "M330 180 L360 120 L470 120 L490 180"); sv("rect", { x: 640, y: 220, width: 80, height: 40, rx: 6, fill: "none", stroke: "currentColor", "stroke-width": 5 }, g); Ci(g, 280, 240, 16, "none", { stroke: "currentColor", "stroke-width": 5 }); };
  SKETCH.battery = function (g) { sv("rect", { x: 200, y: 200, width: 560, height: 220, rx: 24, fill: "none", stroke: "currentColor", "stroke-width": 7 }, g); sv("rect", { x: 760, y: 260, width: 50, height: 100, rx: 8, fill: "none", stroke: "currentColor", "stroke-width": 6 }, g); for (var i = 0; i < 4; i++) sv("rect", { x: 240 + i * 125, y: 240, width: 100, height: 140, rx: 8, fill: "none", stroke: "currentColor", "stroke-width": 5 }, g); SK(g, "M520 250 L480 320 L520 320 L480 390", { "stroke-width": 7 }); };
  SKETCH.robot = function (g) { sv("rect", { x: 360, y: 120, width: 280, height: 200, rx: 30, fill: "none", stroke: "currentColor", "stroke-width": 7 }, g); Ci(g, 440, 210, 28, "none", { stroke: "currentColor", "stroke-width": 6 }); Ci(g, 560, 210, 28, "none", { stroke: "currentColor", "stroke-width": 6 }); SK(g, "M460 270 L540 270 M500 120 L500 70 M480 70 L520 70"); sv("rect", { x: 320, y: 340, width: 360, height: 220, rx: 16, fill: "none", stroke: "currentColor", "stroke-width": 7 }, g); SK(g, "M320 380 L220 420 L220 520 M680 380 L780 420 L780 520 M400 560 L400 620 M600 560 L600 620"); };
  SKETCH.drink = SKETCH.bottle; SKETCH.laptop = SKETCH.computer; SKETCH.app = SKETCH.software; SKETCH.website = SKETCH.software; SKETCH.sneaker = SKETCH.shoe; SKETCH.package = SKETCH.box; SKETCH.parcel = SKETCH.box; SKETCH.vehicle = SKETCH.car; SKETCH.aircraft = SKETCH.plane; SKETCH.motor = SKETCH.engine; SKETCH.food = SKETCH.burger; SKETCH.bicycle = SKETCH.bike; SKETCH.boat = SKETCH.ship; SKETCH.television = SKETCH.tv; SKETCH.bulb = SKETCH.lightbulb; SKETCH.processor = SKETCH.chip; SKETCH.smartphone = SKETCH.phone;
  S.sketches = Object.keys(SKETCH);
  function sketchName(n) { n = str(n).toLowerCase().trim(); return SKETCH[n] ? n : "box"; }
  /** Draw a product sketch into an SVG group; returns the group (paths use currentColor). */
  function drawSketch(parent, kind, opts) {
    opts = opts || {};
    var g = G(parent, { class: "fs-sketch", style: { color: opts.color || C.blue } });
    if (opts.transform) g.setAttribute("transform", opts.transform);
    SKETCH[sketchName(kind)](g);
    return g;
  }
  S.drawSketch = drawSketch;
  /** Animate the strokes of a sketch group drawing on from `at`. Returns end time. */
  function drawOn(tl, g, at, dur) {
    var paths = [].slice.call(g.querySelectorAll("path, circle, rect, line"));
    dur = dur || 1.6;
    var n = Math.max(1, paths.length), each = Math.min(0.5, dur / n * 1.8), step = (dur - each) / Math.max(1, n - 1);
    paths.forEach(function (p, i) {
      if (p.getAttribute("fill") && p.getAttribute("fill") !== "none") { tl.fromTo(p, { opacity: 0 }, { opacity: 1 }, { at: at + i * step, dur: 0.2 }); return; }
      tl.fromTo(p, { draw: 0 }, { draw: 1 }, { at: at + i * step, dur: each, ease: "inOutSine" });
    });
    return at + dur;
  }
  S.drawOn = drawOn;

  /** Product card on a blueprint/drafting sheet with spec callouts drawn in. opts: name, kind, specs[], at, pos, color, until, year. */
  SP.productCard = function (opts) {
    opts = opts || {};
    var sc = this, tl = sc.tl;
    var pc = paperCard(sc, { pos: opts.pos || "right", at: opts.at, until: opts.until, blue: opts.blue !== false, ratio: 0.72, title: opts.title || (opts.year ? "PATENT SKETCH · " + opts.year : "PRODUCT SKETCH"), w: opts.w, rot: opts.rot });
    var at = pc.at;
    var vh = pc.vh;
    var g = drawSketch(pc.svg, opts.kind, { color: opts.blue === false ? C.blue : "#F6F2EA", transform: "translate(120 " + f1(vh * 0.12) + ") scale(0.62)" });
    var end = drawOn(tl, g, at + 0.3, 1.5);
    var name = el("div.fs-prod-name", { parent: pc.inner });
    name.appendChild(S.rich(str(opts.name || "")));
    V.fit(name, { maxLines: 2, min: u(18) });
    tl.fromTo(name, { opacity: 0, x: u(-20) }, { opacity: 1, x: 0 }, { at: at + 0.5, dur: 0.5, ease: "outCubic" });
    var specs = arr(opts.specs).slice(0, 4), list = el("div.fs-prod-specs", { parent: pc.inner });
    var keys = specs.map(function (s) { return typeof s === "object" ? s.word || S.autoKey(s.text) : S.autoKey(s); });
    var times = S.syncTimes(keys, { start: end - 0.2, end: Math.max(end + 0.2, D() - 1) });
    specs.forEach(function (s, i) {
      var txt = typeof s === "object" ? s.text : s;
      var row = el("div.fs-prod-spec", { parent: list });
      el("i.fs-prod-dot", { parent: row });
      var tx = el("span", { parent: row }); tx.appendChild(S.rich(txt));
      V.fit(row, { maxLines: 2, min: u(14) });
      var t = Math.max(at + 0.6, times[i]);
      tl.fromTo(row, { opacity: 0, x: u(16) }, { opacity: 1, x: 0 }, { at: t, dur: 0.4, ease: "outCubic" });
      // callout line from the spec row to the sketch (in the paper svg coordinates)
      var ly = vh * 0.25 + i * vh * 0.16;
      var ln = Pth(pc.svg, "M" + f1(640) + " " + f1(ly) + " L" + f1(430 + i * 40) + " " + f1(vh * 0.3 + (i % 2) * 120), "none", { stroke: opts.blue === false ? C.red : "#F6F2EA", "stroke-width": 3, "stroke-dasharray": "10 8", opacity: 0.8 });
      tl.fromTo(ln, { draw: 0 }, { draw: 1 }, { at: t, dur: 0.4, ease: "outCubic" });
      Ci(pc.svg, 430 + i * 40, vh * 0.3 + (i % 2) * 120, 8, opts.blue === false ? C.red : "#F6F2EA", {});
    });
    return pc;
  };

  // ───────────────────────── charts ─────────────────────────
  /** Growth line chart on a paper card. opts: points [{ label|year, value, note?, word? }], title, prefix, suffix, pos, at, color, falling, until, milestones:true. */
  SP.chart = function (opts) {
    opts = opts || {};
    var sc = this, tl = sc.tl;
    var pts = arr(opts.points).map(function (p) { return { label: str(p.label != null ? p.label : p.year != null ? p.year : p.x), value: num(p.value, 0), note: p.note, word: p.word }; }).slice(0, 10);
    if (pts.length < 2) pts = [{ label: "then", value: 0 }, { label: "now", value: 1 }];
    var pc = paperCard(sc, { pos: opts.pos || "right", at: opts.at, until: opts.until, ratio: 0.66, title: opts.title || "REVENUE", w: opts.w, rot: opts.rot != null ? opts.rot : 1 });
    var at = pc.at, vw = pc.vw, vh = pc.vh;
    var col = opts.color || (opts.falling ? C.red : C.green);
    var x0 = 110, x1 = vw - 70, y0 = vh - 110, y1 = 70;
    var vmax = -Infinity, vmin = Infinity;
    pts.forEach(function (p) { vmax = Math.max(vmax, p.value); vmin = Math.min(vmin, p.value); });
    if (vmax === vmin) vmax = vmin + 1;
    var lo = Math.min(0, vmin), hi = vmax * 1.08;
    function X(i) { return lerp(x0, x1, pts.length === 1 ? 0 : i / (pts.length - 1)); }
    function Y(v) { return lerp(y0, y1, (v - lo) / (hi - lo)); }
    var g = G(pc.svg);
    // grid
    for (var k = 0; k <= 4; k++) Ln(g, x0, lerp(y0, y1, k / 4), x1, lerp(y0, y1, k / 4), INK, 1.4, { opacity: 0.18 });
    Ln(g, x0, y0, x1, y0, INK, 3); Ln(g, x0, y0, x0, y1 - 20, INK, 3);
    var P = pts.map(function (p, i) { return [X(i), Y(p.value)]; });
    var d = smoothPath(P);
    var area = Pth(g, d + " L" + f1(P[P.length - 1][0]) + " " + f1(y0) + " L" + f1(P[0][0]) + " " + f1(y0) + " Z", col, { opacity: 0.16 });
    Pth(g, d + " L" + f1(P[P.length - 1][0]) + " " + f1(y0) + " L" + f1(P[0][0]) + " " + f1(y0) + " Z", PAT.hatchLight, { opacity: 0.6, class: "fs-area-h" });
    var line = Pth(g, d, "none", { stroke: col, "stroke-width": 9, "stroke-linecap": "round", "stroke-linejoin": "round" });
    var lineInk = Pth(g, d, "none", { stroke: INK, "stroke-width": 2.4, "stroke-dasharray": "0", opacity: 0.35 });
    var keys = pts.map(function (p) { return p.word || (p.note ? S.autoKey(p.note) : null); });
    var times = S.syncTimes(keys, { start: at + 0.6, end: Math.max(at + 1.6, D() - 1.2) });
    var t0 = at + 0.5, t1 = Math.max(t0 + 1.2, times[pts.length - 1]);
    tl.fromTo(line, { draw: 0 }, { draw: 1 }, { at: t0, dur: t1 - t0, ease: "inOutSine" });
    tl.fromTo(lineInk, { draw: 0 }, { draw: 1 }, { at: t0, dur: t1 - t0, ease: "inOutSine" });
    tl.fromTo(area, { opacity: 0 }, { opacity: 0.16 }, { at: t0 + 0.2, dur: t1 - t0 });
    tl.fromTo(g.querySelector(".fs-area-h"), { opacity: 0 }, { opacity: 0.5 }, { at: t0 + 0.2, dur: t1 - t0 });
    // milestones: dot + label (HTML inside the card so text stays in-frame)
    var fmt = function (v) { return (opts.prefix || "") + (opts.compact !== false && Math.abs(v) >= 1e4 ? fmtMoney(v, "", 1) : V.format(v, opts.decimals || 0)) + (opts.suffix || ""); };
    pts.forEach(function (p, i) {
      var tp = lerp(t0, t1, pts.length === 1 ? 1 : i / (pts.length - 1));
      var dot = Ci(g, P[i][0], P[i][1], 12, "#F6F2EA", merge(ink(4), { stroke: col }));
      tl.fromTo(dot, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1 }, { at: tp - 0.05, dur: 0.35, ease: "outBack" });
      dot.style.transformOrigin = f1(P[i][0]) + "px " + f1(P[i][1]) + "px";
      dot.style.transformBox = "view-box";
      var lx = (P[i][0] / vw) * 100, ly = (P[i][1] / vh) * 100;
      var lab = el("div.fs-ch-x", { parent: pc.inner, text: p.label, style: { left: lx + "%", top: ((y0 + 24) / vh) * 100 + "%" } });
      V.fit(lab, { maxLines: 1, min: u(10) });
      tl.fromTo(lab, { opacity: 0 }, { opacity: 1 }, { at: tp - 0.1, dur: 0.3 });
      if (i === pts.length - 1 || p.note || opts.milestones) {
        var ms = el("div.fs-ch-ms" + (i === pts.length - 1 ? ".fs-ch-last" : ""), { parent: pc.inner, style: { left: Math.min(84, lx) + "%", top: Math.max(6, ly - 6) + "%" } });
        el("b", { parent: ms, text: fmt(p.value) });
        if (p.note) el("span", { parent: ms, text: plain(p.note) });
        if (lx > 60) ms.classList.add("fs-ch-ms-l");
        V.fit(ms, { maxLines: 2, min: u(10) });
        tl.fromTo(ms, { opacity: 0, y: u(10) }, { opacity: 1, y: 0 }, { at: tp, dur: 0.35, ease: "outCubic" });
      }
    });
    return pc;
  };

  // ───────────────────────── maps ─────────────────────────
  var CONT = {
    na: [[-168, 66], [-150, 71], [-120, 72], [-95, 74], [-80, 70], [-62, 60], [-56, 48], [-66, 44], [-75, 36], [-81, 30], [-80, 25], [-90, 29], [-97, 26], [-106, 22], [-96, 15], [-85, 10], [-78, 8], [-92, 16], [-110, 24], [-118, 32], [-125, 42], [-128, 50], [-140, 58], [-155, 58], [-166, 60]],
    sa: [[-80, 9], [-62, 10], [-52, 4], [-35, -6], [-39, -14], [-48, -26], [-54, -34], [-68, -52], [-72, -50], [-76, -30], [-81, -5], [-78, 2]],
    eu: [[-10, 36], [-9, 43], [-2, 48], [2, 51], [8, 54], [18, 56], [28, 60], [30, 70], [42, 68], [45, 60], [40, 52], [38, 46], [28, 41], [22, 37], [12, 38], [5, 43], [-6, 36]],
    af: [[-17, 15], [-10, 31], [10, 37], [32, 31], [43, 12], [51, 11], [40, -4], [35, -22], [30, -34], [18, -34], [12, -18], [9, -2], [0, 5], [-8, 5], [-17, 10]],
    as: [[30, 70], [60, 72], [100, 78], [140, 72], [180, 68], [170, 60], [140, 52], [130, 36], [118, 24], [108, 10], [104, 2], [98, 8], [90, 22], [80, 8], [72, 20], [60, 25], [50, 28], [44, 38], [36, 36], [28, 41], [40, 50], [50, 56], [44, 66]],
    au: [[114, -22], [122, -14], [136, -12], [146, -16], [153, -26], [150, -38], [138, -36], [130, -32], [116, -34]],
    gl: [[-55, 60], [-45, 60], [-20, 70], [-20, 80], [-60, 82], [-70, 76]],
    id: [[96, 4], [106, -6], [120, -9], [135, -4], [132, 0], [110, 2]],
    uk: [[-5, 50], [1, 52], [-2, 58], [-6, 56]],
    jp: [[130, 31], [141, 36], [142, 43], [139, 42], [131, 34]],
  };
  var CITIES = { "new york": [-74, 40.7], london: [-0.1, 51.5], tokyo: [139.7, 35.7], paris: [2.3, 48.9], berlin: [13.4, 52.5], beijing: [116.4, 39.9], shanghai: [121.5, 31.2], mumbai: [72.9, 19.1], delhi: [77.2, 28.6], sydney: [151.2, -33.9], "san francisco": [-122.4, 37.8], "silicon valley": [-122, 37.4], "los angeles": [-118.2, 34], chicago: [-87.6, 41.9], seattle: [-122.3, 47.6], detroit: [-83, 42.3], texas: [-99, 31], austin: [-97.7, 30.3], toronto: [-79.4, 43.7], "mexico city": [-99.1, 19.4], "sao paulo": [-46.6, -23.5], "buenos aires": [-58.4, -34.6], johannesburg: [28, -26.2], lagos: [3.4, 6.5], cairo: [31.2, 30], dubai: [55.3, 25.2], moscow: [37.6, 55.8], singapore: [103.8, 1.4], "hong kong": [114.2, 22.3], seoul: [127, 37.6], bangalore: [77.6, 13], jakarta: [106.8, -6.2], amsterdam: [4.9, 52.4], madrid: [-3.7, 40.4], rome: [12.5, 41.9], stockholm: [18, 59.3], dublin: [-6.3, 53.3], zurich: [8.5, 47.4], vancouver: [-123.1, 49.3], miami: [-80.2, 25.8], nairobi: [36.8, -1.3], istanbul: [29, 41], taiwan: [121, 23.7], shenzhen: [114.1, 22.5], bangkok: [100.5, 13.8], melbourne: [145, -37.8], germany: [10.4, 51.1], france: [2.2, 46.2], usa: [-98, 39], america: [-98, 39], "united states": [-98, 39], china: [104, 35], india: [78.9, 20.6], japan: [138, 36], brazil: [-51.9, -14.2], uk: [-3.4, 55.4], britain: [-3.4, 55.4], england: [-1.5, 52.5], canada: [-106, 56], australia: [133, -27], europe: [10, 50], africa: [20, 5], asia: [90, 35], korea: [127.8, 36], italy: [12.6, 42], spain: [-3.7, 40.5], russia: [90, 60], mexico: [-102, 23], indonesia: [113, -1], vietnam: [108, 14], nigeria: [8, 9], egypt: [30, 26], "south africa": [25, -29], argentina: [-64, -34], chile: [-71, -35], "middle east": [45, 28], scandinavia: [15, 62], netherlands: [5.3, 52.1], sweden: [16, 62], poland: [19, 52], turkey: [35, 39], "saudi arabia": [45, 24], thailand: [101, 15], philippines: [122, 12], pakistan: [69, 30], boston: [-71, 42.4], houston: [-95.4, 29.8], atlanta: [-84.4, 33.7], denver: [-105, 39.7], "las vegas": [-115.1, 36.2], phoenix: [-112, 33.4], "washington": [-77, 38.9], ohio: [-82.9, 40.4], california: [-119.4, 36.8], florida: [-81.5, 27.7], michigan: [-85, 44.3], munich: [11.6, 48.1], milan: [9.2, 45.5], barcelona: [2.2, 41.4], lisbon: [-9.1, 38.7], vienna: [16.4, 48.2], prague: [14.4, 50.1], warsaw: [21, 52.2], copenhagen: [12.6, 55.7], oslo: [10.7, 59.9], helsinki: [24.9, 60.2], "tel aviv": [34.8, 32.1], riyadh: [46.7, 24.7], karachi: [67, 24.9], manila: [121, 14.6], "kuala lumpur": [101.7, 3.1], "ho chi minh": [106.7, 10.8], taipei: [121.5, 25], osaka: [135.5, 34.7], perth: [115.9, -32], auckland: [174.8, -36.9], lima: [-77, -12], bogota: [-74.1, 4.7], santiago: [-70.6, -33.4], "rio": [-43.2, -22.9], casablanca: [-7.6, 33.6], accra: [-0.2, 5.6], addis: [38.7, 9], "cape town": [18.4, -33.9] };
  var REGIONS = { world: [0, 60, 1000, 400], americas: [0, 60, 440, 400], "north america": [40, 60, 420, 220], usa: [120, 100, 280, 150], europe: [430, 50, 260, 160], asia: [540, 40, 460, 300], africa: [420, 150, 260, 260], "south america": [200, 220, 240, 240], australia: [740, 290, 220, 160], "east asia": [740, 90, 220, 180], "middle east": [520, 140, 200, 140] };
  function lonlat(lon, lat) { return [((lon + 180) / 360) * 1000, ((90 - lat) / 180) * 500]; }
  /** Expansion map on a paper card. opts: region, pins [{ place, word?, lat?, lon?, label? }], at, pos, until, title, lines:true */
  SP.map = function (opts) {
    opts = opts || {};
    var sc = this, tl = sc.tl;
    var region = str(opts.region || "world").toLowerCase();
    var vb = REGIONS[region] || REGIONS.world;
    var pc = paperCard(sc, { pos: opts.pos || "right", at: opts.at, until: opts.until, ratio: vb[3] / vb[2] * 1.0, title: opts.title || "EXPANSION", w: opts.w, rot: opts.rot != null ? opts.rot : -1 });
    var at = pc.at;
    // map sits in a nested svg with the region viewBox, fitted to the paper
    var inner = sv("svg", { viewBox: vb.join(" "), preserveAspectRatio: "xMidYMid meet", x: 0, y: 0, width: pc.vw, height: pc.vh }, pc.svg);
    Rc(inner, -100, -100, 1300, 800, "#DCE8EE", {});
    Rc(inner, -100, -100, 1300, 800, PAT.water, { opacity: 0.8 });
    var r = rng("map");
    var land = G(inner);
    for (var k in CONT) { var poly = CONT[k].map(function (p) { return lonlat(p[0], p[1]); }); Pth(land, smoothPath(poly, true), "#E7DEC4", merge(ink(2), { "stroke-width": 1.8 })); Pth(land, smoothPath(poly, true), PAT.hatchLight, { opacity: 0.35 }); }
    // graticule
    for (var gx = 0; gx <= 1000; gx += 125) Ln(inner, gx, 0, gx, 500, INK, 0.8, { opacity: 0.15 });
    for (var gy = 0; gy <= 500; gy += 125) Ln(inner, 0, gy, 1000, gy, INK, 0.8, { opacity: 0.15 });
    var scaleK = vb[2] / 1000; // relative zoom of the region (pins scale with it)
    var pins = arr(opts.pins).slice(0, 12).map(function (p, i) {
      if (typeof p === "string") p = { place: p };
      var pos = null;
      if (p.lat != null && p.lon != null) pos = lonlat(num(p.lon, 0), num(p.lat, 0));
      else { var key = str(p.place).toLowerCase().trim(); if (CITIES[key]) pos = lonlat(CITIES[key][0], CITIES[key][1]); else { for (var ck in CITIES) if (key.indexOf(ck) >= 0 || ck.indexOf(key) >= 0 && key.length > 3) { pos = lonlat(CITIES[ck][0], CITIES[ck][1]); break; } } }
      if (!pos) pos = [vb[0] + vb[2] * (0.2 + r() * 0.6), vb[1] + vb[3] * (0.25 + r() * 0.5)];
      return { place: p.place, label: p.label, word: p.word, x: pos[0], y: pos[1], i: i };
    });
    var keys = pins.map(function (p) { return p.word || S.autoKey(p.place); });
    var times = S.syncTimes(keys, { start: at + 0.5, end: Math.max(at + 1, D() - 1) });
    var ps = 14 * scaleK;
    var prev = null;
    pins.forEach(function (p, i) {
      var t = Math.max(at + 0.4, times[i]);
      if (prev && opts.lines !== false) {
        var ln = Pth(inner, "M" + f1(prev.x) + " " + f1(prev.y) + " Q" + f1((prev.x + p.x) / 2) + " " + f1(Math.min(prev.y, p.y) - Math.abs(p.x - prev.x) * 0.25) + " " + f1(p.x) + " " + f1(p.y), "none", { stroke: C.red, "stroke-width": 2.2 * scaleK + 1, "stroke-dasharray": (6 * scaleK + 3) + " " + (5 * scaleK + 2), opacity: 0.8 });
        tl.fromTo(ln, { draw: 0 }, { draw: 1 }, { at: t - 0.4, dur: 0.45, ease: "inOutSine" });
      }
      var pg = G(inner);
      Ci(pg, p.x, p.y, ps * 2.2, C.red, { opacity: 0.18 });
      Pth(pg, "M" + f1(p.x) + " " + f1(p.y) + " c" + f1(-ps * 1.6) + " " + f1(-ps * 1.4) + " " + f1(-ps * 1.6) + " " + f1(-ps * 3.4) + " 0 " + f1(-ps * 3.4) + " c" + f1(ps * 1.6) + " 0 " + f1(ps * 1.6) + " " + f1(ps * 2) + " 0 " + f1(ps * 3.4) + " Z", C.red, merge(ink(1.4 * scaleK + 1), {}));
      Ci(pg, p.x, p.y - ps * 2.1, ps * 0.55, "#F6F2EA", {});
      pg.style.transformOrigin = f1(p.x) + "px " + f1(p.y) + "px"; pg.style.transformBox = "view-box";
      tl.fromTo(pg, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1 }, { at: t, dur: 0.45, ease: "outBack" });
      var ring = Ci(inner, p.x, p.y, ps, "none", { stroke: C.red, "stroke-width": 2 });
      ring.style.transformOrigin = f1(p.x) + "px " + f1(p.y) + "px"; ring.style.transformBox = "view-box";
      tl.fromTo(ring, { scale: 0.4, opacity: 0.9 }, { scale: 3.2, opacity: 0 }, { at: t, dur: 1.1, ease: "outCubic" });
      // label (HTML inside the card)
      var lx = ((p.x - vb[0]) / vb[2]) * 100, ly = ((p.y - vb[1]) / vb[3]) * 100;
      var lab = el("div.fs-map-label" + (lx > 65 ? ".fs-map-l" : ""), { parent: pc.inner, text: plain(p.label || p.place), style: { left: clamp(lx, 4, 96) + "%", top: clamp(ly - 9, 3, 92) + "%" } });
      V.fit(lab, { maxLines: 1, min: u(10) });
      tl.fromTo(lab, { opacity: 0, y: u(6) }, { opacity: 1, y: 0 }, { at: t + 0.1, dur: 0.3, ease: "outCubic" });
      prev = p;
    });
    var cnt = el("div.fs-map-count", { parent: pc.inner });
    if (opts.counter !== false && pins.length > 1) {
      el("b", { parent: cnt, text: "0" });
      el("span", { parent: cnt, text: " " + plain(opts.counterLabel || "locations") });
      var bEl = cnt.firstChild;
      sc.labels.push(function (t) { var n = 0; for (var i = 0; i < pins.length; i++) if (t >= Math.max(at + 0.4, times[i])) n++; var s2 = String(n); if (bEl.textContent !== s2) bEl.textContent = s2; });
      tl.fromTo(cnt, { opacity: 0 }, { opacity: 1 }, { at: at + 0.4, dur: 0.3 });
    } else cnt.style.display = "none";
    return pc;
  };

  // ───────────────────────── documents (contract with a signature) ─────────────────────────
  /** Contract sheet: lines of text, a seal and an animated signature. opts: title, at, pos, amount, signAt, parties. */
  SP.contract = function (opts) {
    opts = opts || {};
    var sc = this, tl = sc.tl;
    var pc = paperCard(sc, { pos: opts.pos || "right", at: opts.at, until: opts.until, ratio: 1.15, title: opts.title || "AGREEMENT", w: opts.w || (sc.portrait ? sc.W * 0.6 : sc.square ? sc.W * 0.38 : sc.W * 0.26), rot: opts.rot != null ? opts.rot : 2 });
    var at = pc.at, vw = pc.vw, vh = pc.vh, r = rng("contract");
    var g = G(pc.svg);
    // body text lines
    for (var i = 0; i < 12; i++) { var y = 120 + i * 52, w = 540 + r() * 300; if (i % 5 === 4) w *= 0.5; Ln(g, 90, y, 90 + w, y, INK, 9, { opacity: 0.35, "stroke-linecap": "round" }); }
    Ln(g, 90, 820, 480, 820, INK, 3);
    Ln(g, 540, 820, 910, 820, INK, 3);
    // signature paths (drawn)
    var sig = Pth(g, "M110 800 c20 -60 50 -70 60 -20 c6 30 -10 50 20 10 c20 -30 40 -40 50 0 c8 30 30 10 60 -20 c30 -30 40 0 70 -10", "none", { stroke: C.blue, "stroke-width": 6, "stroke-linecap": "round" });
    var sig2 = Pth(g, "M560 805 c30 -70 70 -60 60 -10 c-5 25 20 20 40 -20 c20 -40 50 -30 60 0 c8 28 40 5 70 -24", "none", { stroke: C.blue, "stroke-width": 6, "stroke-linecap": "round" });
    var signAt = clampT(opts.signAt != null ? opts.signAt : at + 1.2);
    tl.fromTo(sig, { draw: 0 }, { draw: 1 }, { at: signAt, dur: 0.9, ease: "inOutSine" });
    tl.fromTo(sig2, { draw: 0 }, { draw: 1 }, { at: signAt + 0.9, dur: 0.9, ease: "inOutSine" });
    // seal
    var seal = G(g);
    Ci(seal, 800, 980, 70, C.red, { opacity: 0.85 });
    Ci(seal, 800, 980, 54, "none", { stroke: "#F6F2EA", "stroke-width": 4, opacity: 0.8 });
    Pth(seal, "M770 980 L792 1002 L834 958", "none", { stroke: "#F6F2EA", "stroke-width": 9, "stroke-linecap": "round", "stroke-linejoin": "round" });
    seal.style.transformOrigin = "800px 980px"; seal.style.transformBox = "view-box";
    var sealAt = clampT(opts.sealAt != null ? opts.sealAt : signAt + 1.9);
    tl.fromTo(seal, { scale: 3, opacity: 0 }, { scale: 1, opacity: 1 }, { at: sealAt, dur: 0.35, ease: "inCubic" });
    sc.cam.shake(sealAt + 0.3, 8, 0.35);
    if (opts.amount) {
      var am = el("div.fs-contract-amount", { parent: pc.inner, text: plain(opts.amount) });
      V.fit(am, { maxLines: 1, min: u(16) });
      tl.fromTo(am, { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1 }, { at: clampT(opts.amountAt != null ? opts.amountAt : at + 0.6), dur: 0.45, ease: "outBack" });
    }
    if (opts.parties) { var pr = el("div.fs-contract-parties", { parent: pc.inner, text: plain(opts.parties).toUpperCase() }); V.fit(pr, { maxLines: 2, min: u(10) }); }
    pc.signAt = signAt; pc.sealAt = sealAt;
    return pc;
  };

  // ───────────────────────── VS plate, divider, assembly line, workshop props ─────────────────────────
  SP.versus = function (at, opts) {
    opts = opts || {};
    var sc = this, tl = sc.tl;
    var box = el("div.fs-vs", { parent: sc.hud, text: "VS" });
    hudPos(sc, box, opts.pos || { x: 0.5, y: sc.portrait ? 0.5 : 0.42 });
    tl.fromTo(box, { opacity: 0, scale: 0.2, rotate: -40 }, { opacity: 1, scale: 1, rotate: -8 }, { at: clampT(at), dur: 0.5, ease: "outBack" });
    sc.cam.shake(clampT(at) + 0.1, 10, 0.4);
    return box;
  };
  /** Name tag under a figure (screen-space, follows the figure). */
  SP.nameTag = function (fig, text, at, opts) {
    opts = opts || {};
    var sc = this, tl = sc.tl;
    var box = el("div.fs-tag" + (opts.accent ? ".fs-tag-acc" : ""), { parent: sc.hud });
    box.appendChild(S.rich(str(text).toUpperCase()));
    box.style.maxWidth = px(sc.W * (sc.portrait ? 0.44 : 0.3));
    V.fit(box, { maxLines: 2, min: u(14) });
    var yOff = num(opts.y, 500);
    sc.labels.push(function (t) {
      var s = sc.toScreen(fig.moveX(t), fig.y0 - yOff * fig.scale);
      var r = box.getBoundingClientRect(), hw = r.width / 2 + u(20);
      var hh = r.height / 2 + u(20); box.style.left = px(clamp(s.x, hw, sc.W - hw)); box.style.top = px(clamp(s.y, hh, sc.H - hh));
    });
    box.style.transform = "translate(-50%,-50%) rotate(" + (opts.rot != null ? opts.rot : -2) + "deg)";
    tl.fromTo(box, { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1 }, { at: clampT(at == null ? 0.5 : at), dur: 0.45, ease: "outBack" });
    if (opts.until != null && opts.until < D() - 0.3) tl.to(box, { opacity: 0 }, { at: clampT(opts.until), dur: 0.3 });
    return box;
  };

  /** Foreground assembly line in the action layer: a conveyor with product units moving, robot arms and a counter. */
  SP.assemblyLine = function (opts) {
    opts = opts || {};
    var sc = this, g = G(sc.propLayer, { class: "fs-line" });
    var y = num(opts.y, sc.G - 110), x0 = sc.x0, x1 = sc.x1, kind = sketchName(opts.product || "box");
    var belt = G(g);
    Pth(belt, "M" + f1(x0) + " " + f1(y) + " L" + f1(x1) + " " + f1(y) + " L" + f1(x1 + 60) + " " + f1(y - 40) + " L" + f1(x0 + 60) + " " + f1(y - 40) + " Z", "#8A8F94", ink(3));
    Rc(belt, x0, y, x1 - x0, 46, "#5C6166", ink(3));
    for (var l = x0; l < x1; l += 120) Rc(belt, l, y + 8, 50, 30, "#8A8F94", ink(2)); // legs
    var stripes = G(belt);
    for (var s = x0; s < x1 + 200; s += 70) Ln(stripes, s, y - 36, s + 34, y - 4, INK, 2.4, { opacity: 0.35 });
    // units on the belt
    var units = [], n = 7, gap = (x1 - x0 + 200) / n;
    for (var i = 0; i < n; i++) { var ug = G(g); var skg = drawSketch(ug, kind, { color: INK, transform: "translate(-54 -70) scale(0.108)" }); Pth(ug, "M-50 -62 L50 -62 L50 -6 L-50 -6 Z", opts.color || "#F3EBDC", { opacity: 0.0 }); units.push({ g: ug, off: i * gap, sk: skg }); }
    // robot arms (two) swinging
    var arms = [];
    [0.3, 0.68].forEach(function (f, i) {
      var ax = lerp(sc.Ww * 0.05, sc.Ww * 0.95, f), ag = G(g, { transform: "translate(" + f1(ax) + " " + f1(y - 40) + ")" });
      Rc(ag, -30, -14, 60, 14, C.metalDark, ink(3));
      var a1 = G(ag, { transform: "translate(0 -14)" });
      sv("path", merge({ d: "M0 0 L0 -120", fill: "none", "stroke-width": 26, stroke: C.gold, "stroke-linecap": "round" }), a1);
      Pth(a1, "M0 0 L0 -120", "none", ink(3));
      var a2 = G(a1, { transform: "translate(0 -120)" });
      sv("path", merge({ d: "M0 0 L90 0", fill: "none", "stroke-width": 20, stroke: C.gold, "stroke-linecap": "round" }), a2);
      Pth(a2, "M0 0 L90 0", "none", ink(3));
      Pth(a2, "M90 0 L100 20 L120 26 M90 0 L104 -16 L124 -14", "none", ink(5));
      Ci(a1, 0, 0, 14, C.metal, ink(3)); Ci(a2, 0, 0, 12, C.metal, ink(3));
      arms.push({ a1: a1, a2: a2, ph: i * 1.7 });
    });
    var speed = num(opts.speed, 110);
    sc.anims.push(function (t) {
      stripes.setAttribute("transform", "translate(" + f1(-((t * speed) % 70)) + " 0)");
      for (var i = 0; i < units.length; i++) { var un = units[i], xx = ((un.off + t * speed) % (x1 - x0 + 200)) + x0 - 100; un.g.setAttribute("transform", "translate(" + f1(xx) + " " + f1(y - 40) + ")"); }
      for (var k = 0; k < arms.length; k++) { var A = arms[k], ph = t * 2.6 + A.ph; A.a1.setAttribute("transform", "translate(0 -14) rotate(" + f1(Math.sin(ph) * 22) + ")"); A.a2.setAttribute("transform", "translate(0 -120) rotate(" + f1(60 + Math.sin(ph * 1.3 + 1) * 40) + ")"); }
    });
    return { el: g, y: y };
  };

  /** Workshop interior props on the action layer: a workbench with tools and a hanging lamp. */
  SP.workbench = function (opts) {
    opts = opts || {};
    var sc = this, g = G(sc.propLayer, { class: "fs-bench" });
    var x = num(opts.x, sc.Ww * (sc.portrait ? 0.5 : 0.7)), y = num(opts.y, sc.G - 20), s = num(opts.scale, 1) * sc.charScale;
    g.setAttribute("transform", "translate(" + f1(x) + " " + f1(y) + ") scale(" + f1(s) + ")");
    Rc(g, -170, -150, 340, 26, C.wood, ink(4));
    Rc(g, -160, -124, 24, 124, shade(C.wood, -0.2), ink(3.4)); Rc(g, 136, -124, 24, 124, shade(C.wood, -0.2), ink(3.4));
    Rc(g, -150, -60, 300, 10, shade(C.wood, -0.2), ink(2.6));
    // tools: hammer, wrench, jar, gear
    Pth(g, "M-120 -150 L-100 -214 M-116 -214 L-84 -214 L-84 -200 L-116 -200 Z", "none", ink(4));
    Rc(g, -117, -216, 34, 16, C.metalDark, ink(3));
    Rc(g, -40, -200, 36, 50, "#9FC2D6", ink(3)); Rc(g, -44, -206, 44, 10, C.metalDark, ink(2.6));
    var gear = G(g, { transform: "translate(70 -190)" });
    for (var i = 0; i < 8; i++) Rc(gear, -6, -40, 12, 16, C.metal, merge(ink(2.6), { transform: "rotate(" + i * 45 + ")" }));
    Ci(gear, 0, 0, 28, C.metal, ink(3)); Ci(gear, 0, 0, 10, "#F3EBDC", ink(2.6));
    var gear2 = G(g, { transform: "translate(118 -170)" });
    for (var k = 0; k < 6; k++) Rc(gear2, -5, -24, 10, 12, C.metal, merge(ink(2.2), { transform: "rotate(" + k * 60 + ")" }));
    Ci(gear2, 0, 0, 16, C.metal, ink(2.6));
    // lamp
    var lamp = G(g, { transform: "translate(0 -600)" });
    Ln(lamp, 0, -200, 0, 0, INK, 4);
    Pth(lamp, "M-70 40 L70 40 L40 0 L-40 0 Z", C.gold, ink(3.4));
    Ci(lamp, 0, 44, 18, "#FFF4C8", ink(2.4));
    var cone = Pth(sc.propLayer, "", "#FFF2C0", { opacity: 0.22 });
    sc.anims.push(function (t) {
      gear.setAttribute("transform", "translate(70 -190) rotate(" + f1(t * 40) + ")");
      gear2.setAttribute("transform", "translate(118 -170) rotate(" + f1(-t * 53 + 15) + ")");
      var sw = Math.sin(t * 1.1) * 3;
      lamp.setAttribute("transform", "translate(0 -600) rotate(" + f1(sw) + " 0 -200)");
      var lx = x + Math.sin((sw * PI) / 180) * 200 * s * -1;
      cone.setAttribute("d", "M" + f1(lx - 60 * s) + " " + f1(y - 556 * s) + " L" + f1(lx + 60 * s) + " " + f1(y - 556 * s) + " L" + f1(lx + 330 * s) + " " + f1(y + 10) + " L" + f1(lx - 330 * s) + " " + f1(y + 10) + " Z");
      cone.setAttribute("opacity", (0.2 + Math.max(0, noise(t * 6, 4)) * 0.06).toFixed(3));
    });
    return { el: g, x: x, y: y };
  };

  // ───────────────────────── templates ─────────────────────────
  var T = {};
  function ensureScene(opts) { if (!current) new Scene(V.root(), opts || {}); return current; }
  function growthOf(p) { var g = str(p.growth || "full").toLowerCase(); return g === "small" ? 0.18 : g === "growing" ? 0.45 : g === "none" ? 0 : 1; }
  function heroSetup(sc, p, defaults) {
    defaults = defaults || {};
    var side = p.side === "right" ? "right" : "left";
    var fig = sc.figure(p.archetype || defaults.archetype || "founder", { x: sc.heroX(side), facing: side === "left" ? "right" : "left", expression: p.expression || defaults.expression || "confident", pose: defaults.pose || "idle" });
    if (defaults.narrate !== false) narrate(fig);
    return { fig: fig, side: side };
  }
  function headPos(sc, side, withCard) {
    if (sc.portrait) return { x: 0.5, y: withCard ? 0.9 : 0.33 };
    if (sc.square) return withCard ? { x: 0.5, y: 0.9 } : { x: side === "left" ? 0.68 : 0.32, y: 0.52 };
    return withCard ? { x: side === "left" ? 0.25 : 0.75, y: 0.12 } : { x: side === "left" ? 0.67 : 0.33, y: 0.56 };
  }
  function cardPos(sc, side) {
    if (sc.portrait) return { x: 0.5, y: 0.37 };
    if (sc.square) return { x: side === "left" ? 0.72 : 0.28, y: 0.52 };
    return { x: side === "left" ? 0.68 : 0.32, y: 0.54 };
  }
  function statPos(sc, side, withCard) {
    if (sc.portrait) return { x: 0.5, y: withCard ? 0.62 : 0.46 };
    if (sc.square) return withCard ? { x: side === "left" ? 0.72 : 0.28, y: 0.86 } : { x: side === "left" ? 0.68 : 0.32, y: 0.74 };
    return withCard ? { x: side === "left" ? 0.3 : 0.7, y: 0.86 } : { x: side === "left" ? 0.67 : 0.33, y: 0.8 };
  }
  function cardW(sc) { return sc.portrait ? sc.W * 0.86 : sc.square ? sc.W * 0.5 : sc.W * 0.44; }
  function defaultCam(sc, fig, side, opts) {
    opts = opts || {};
    var cam = sc.cam;
    cam.rise(0, Math.max(2, D() * (opts.riseFrac || 0.85)), { fromY: num(opts.fromY, 545), toY: num(opts.toY, 485), fromZoom: num(opts.fromZoom, 1.08), toZoom: num(opts.toZoom, 1.0), x: sc.Ww / 2 });
    return cam;
  }

  T["founder-intro"] = function (root, p) {
    var sc = new Scene(root, { empire: p.empire || "tech", sky: p.sky || "day", growth: growthOf(p) });
    var h = heroSetup(sc, p), fig = h.fig, side = h.side;
    var tKey = tAt(p.keyword || S.autoKey(p.headline), 0.38);
    sc.plate(p.company, p.years, { kicker: p.kicker, at: 0.25 });
    if (p.headline) sc.headline(p.headline, tKey, { pos: headPos(sc, side, false), size: "lg" });
    if (p.pose) fig.pose(p.pose, 0.4, 0.6); else fig.pose("arms-crossed", 0.3, 0.6);
    if (p.headline) { fig.pose(sc.portrait ? "point-up" : "point", tKey - 0.15, 0.45).pose(p.pose || "arms-crossed", tKey + 2.2, 0.6); fig.lookAt(sc.portrait ? "up" : side === "left" ? "right" : "left", tKey - 0.1).lookAt("camera", tKey + 2.2); }
    if (p.stat && (p.stat.value != null)) {
      var tS = tAt(p.stat.word || S.autoKey(p.stat.label), 0.68, tKey + 0.5);
      sc.stat(p.stat.value, p.stat.label, tS, { pos: statPos(sc, side, false), arrowTo: null });
      fig.expression("happy", tS).pose("thumbs-up", tS, 0.4).pose("arms-crossed", tS + 2, 0.6);
    }
    fig.beats(p.beats, { start: D() * 0.5, step: D() * 0.15, after: "arms-crossed" });
    if (sc.empire && sc.empire.growth < 1) sc.empire.grow(Math.min(1.2, D() * 0.2), Math.max(1.5, D() * 0.82));
    defaultCam(sc, fig, side);
  };

  T["origin-workshop"] = function (root, p) {
    var sc = new Scene(root, { empire: "garage", sky: p.sky || "dawn", growth: 1 });
    var h = heroSetup(sc, p, { archetype: "inventor", expression: "determined" }), fig = h.fig, side = h.side;
    sc.workbench({ x: sc.portrait ? sc.Ww * 0.5 : side === "left" ? sc.Ww * 0.62 : sc.Ww * 0.38, scale: sc.portrait ? 0.8 : 1 });
    if (sc.portrait) fig.x0 = sc.Ww * 0.32;
    var tKey = tAt(p.keyword || S.autoKey(p.headline), 0.4);
    sc.plate(p.company, p.year ? "FOUNDED " + plain(p.year) : "", { kicker: p.kicker || "HUMBLE BEGINNINGS", at: 0.25 });
    fig.pose("wrench", 0.2, 0.5);
    var tProd = tAt(p.productWord || S.autoKey(p.productName), 0.6, tKey + 0.3);
    if (p.headline) sc.headline(p.headline, tKey, { pos: sc.portrait || sc.square ? { x: 0.5, y: 0.9 } : { x: side === "left" ? 0.3 : 0.7, y: 0.22 }, size: "md" });
    if (p.product) {
      sc.productCard({ kind: p.product, name: p.productName || "", year: p.year, specs: p.specs || [], at: tProd - 0.2, pos: sc.portrait ? { x: 0.5, y: 0.42 } : { x: side === "left" ? 0.76 : 0.24, y: sc.square ? 0.62 : 0.6 }, w: sc.portrait ? sc.W * 0.56 : sc.square ? sc.W * 0.4 : sc.W * 0.3, blue: true });
      fig.pose("blueprint", tProd - 0.3, 0.5).expression("excited", tProd + 0.3).emote("idea", tProd + 0.4, 2);
      fig.pose("wrench", Math.min(D() - 0.5, tProd + 3), 0.6);
    }
    fig.beats(p.beats, { after: "wrench" });
    var cam = sc.cam;
    cam.set({ x: sc.Ww / 2, y: 560, zoom: 1.15 });
    cam.to({ x: sc.Ww / 2, y: 520, zoom: 1.02 }, 0.1, Math.max(2, D() * 0.7), "inOutSine");
  };

  T["product-launch"] = function (root, p) {
    var sc = new Scene(root, { empire: p.empire || "factory", sky: p.sky || "day", growth: 1 });
    var h = heroSetup(sc, p, { expression: "confident" }), fig = h.fig, side = h.side;
    var prod = p.product || {};
    var tKey = tAt(p.keyword || S.autoKey(prod.name), 0.3);
    sc.plate(p.company, prod.year ? plain(prod.year) : p.years, { at: 0.2, kicker: p.kicker || "NEW PRODUCT" });
    var pc = sc.productCard({ kind: prod.kind, name: prod.name, year: prod.year, specs: p.specs || [], at: tKey - 0.2, pos: cardPos(sc, side), w: cardW(sc) });
    fig.pose("present", tKey - 0.3, 0.5).lookAt(sc.portrait ? "up" : side === "left" ? "right" : "left", tKey - 0.3).expression("happy", tKey + 0.2);
    fig.pose("point", tKey + 2.2, 0.5).pose("thumbs-up", Math.min(D() - 0.6, tKey + 4.2), 0.5);
    if (p.headline) sc.headline(p.headline, tAt(p.headlineWord || S.autoKey(p.headline), 0.7, tKey + 0.4), { pos: headPos(sc, side, true), size: "md" });
    fig.beats(p.beats, { after: "present" });
    sc.cam.set({ x: sc.Ww / 2, y: 520, zoom: 1.06 });
    sc.cam.to({ y: 500, zoom: 1.0 }, 0.1, Math.max(2, D() * 0.8), "inOutSine");
  };

  T["expansion-map"] = function (root, p) {
    var sc = new Scene(root, { empire: p.empire || "retail", sky: p.sky || "day", growth: 0.5 });
    var h = heroSetup(sc, p, { expression: "confident" }), fig = h.fig, side = h.side;
    var pins = arr(p.pins).map(function (x) { return typeof x === "string" ? { place: x } : x; });
    var tFirst = tAt(pins[0] && (pins[0].word || S.autoKey(pins[0].place)), 0.3);
    sc.plate(p.company, p.years, { at: 0.2, kicker: p.kicker || "EXPANSION" });
    var pc = sc.map({ region: p.region, pins: pins, at: Math.max(0.3, tFirst - 0.6), pos: cardPos(sc, side), w: cardW(sc), title: p.title, counterLabel: p.counterLabel });
    fig.pose("point", tFirst - 0.4, 0.5).lookAt(sc.portrait ? "up" : side === "left" ? "right" : "left", tFirst - 0.4);
    fig.pose("open-arms", Math.min(D() - 0.8, tFirst + 2.5), 0.5).expression("excited", Math.min(D() - 0.8, tFirst + 2.5));
    fig.pose("arms-crossed", Math.min(D() - 0.4, tFirst + 4.5), 0.6);
    if (p.headline) sc.headline(p.headline, tAt(p.keyword || S.autoKey(p.headline), 0.75, tFirst), { pos: headPos(sc, side, true), size: "md" });
    if (sc.empire) sc.empire.grow(Math.max(0.5, tFirst), Math.max(1.5, D() - 0.8));
    fig.beats(p.beats, { after: "arms-crossed" });
    defaultCam(sc, fig, side, { fromY: 530, toY: 490, fromZoom: 1.05 });
  };

  T["revenue-chart"] = function (root, p) {
    var sc = new Scene(root, { empire: p.empire || "finance", sky: p.sky || "day", growth: 0.6 });
    var h = heroSetup(sc, p, { expression: "confident" }), fig = h.fig, side = h.side;
    var pts = arr(p.points);
    var tFirst = tAt(p.keyword || (pts[0] && (pts[0].word || pts[0].label)), 0.3);
    sc.plate(p.company, p.years, { at: 0.2, kicker: p.kicker || (p.title || "REVENUE") });
    var falling = pts.length > 1 && num(pts[pts.length - 1].value, 0) < num(pts[0].value, 0);
    var pc = sc.chart({ points: pts, title: p.title, prefix: p.prefix, suffix: p.suffix, at: Math.max(0.3, tFirst - 0.5), pos: cardPos(sc, side), w: cardW(sc), falling: falling, milestones: p.milestones });
    fig.pose("tablet", 0.3, 0.6).lookAt("down", 0.3);
    fig.pose("point", tFirst + 0.6, 0.5).lookAt(sc.portrait ? "up" : side === "left" ? "right" : "left", tFirst + 0.6);
    var tEnd = Math.min(D() - 0.8, tFirst + 3.6);
    fig.pose(falling ? "worried" : "fist-pump", tEnd, 0.45).expression(falling ? "worried" : "excited", tEnd).emote(falling ? "sweat" : "dollar", tEnd + 0.2, 1.8);
    fig.pose("arms-crossed", Math.min(D() - 0.4, tEnd + 2.4), 0.6);
    if (p.headline) sc.headline(p.headline, tAt(p.headlineWord || S.autoKey(p.headline), 0.78, tFirst), { pos: headPos(sc, side, true), size: "md", color: falling ? C.red : null });
    if (sc.empire && !falling) sc.empire.grow(Math.max(0.6, tFirst), Math.max(1.5, D() - 1));
    fig.beats(p.beats, { after: "arms-crossed" });
    defaultCam(sc, fig, side, { fromY: 530, toY: 492, fromZoom: 1.05 });
  };

  T.rivals = function (root, p) {
    var sc = new Scene(root, { empire: p.empire || "city", sky: p.sky || "day", growth: 1 });
    var L = p.left || {}, R = p.right || {};
    var xs = sc.slots(2, sc.portrait ? 0.7 : sc.square ? 0.62 : 0.5);
    var a = sc.figure(L.archetype || "founder", { x: xs[0], facing: "right", expression: L.expression || "determined", pose: "arms-crossed", index: 0 });
    var b = sc.figure(R.archetype || "investor", { x: xs[1], facing: "left", expression: R.expression || "smug", pose: "hands-hips", index: 1 });
    var tVs = tAt(p.keyword || "versus", 0.3);
    var tA = tAt(L.word || S.autoKey(L.company), 0.15), tB = tAt(R.word || S.autoKey(R.company), 0.45, tA + 0.2);
    sc.nameTag(a, L.company || "THE CHALLENGER", tA, { y: 250, rot: -3 });
    sc.nameTag(b, R.company || "THE INCUMBENT", tB, { y: 250, rot: 3, accent: true });
    sc.versus(Math.max(tA, tB, tVs) + 0.1);
    // who talks: alternate in two halves unless lines are given
    var half = D() / 2;
    narrate(a, 0, half); narrate(b, half, D());
    a.lookAt(b, 0); b.lookAt(a, 0);
    a.pose("point", tA + 0.2, 0.4).pose("arms-crossed", tA + 2, 0.5);
    b.pose("point", tB + 0.2, 0.4).pose("hands-hips", tB + 2, 0.5);
    a.emote("anger", Math.max(tA, tB, tVs) + 0.3, 1.4); b.emote("anger", Math.max(tA, tB, tVs) + 0.4, 1.4);
    if (p.headline) sc.headline(p.headline, tAt(p.headlineWord || S.autoKey(p.headline), 0.72, tVs), { pos: sc.portrait ? { x: 0.5, y: 0.26 } : { x: 0.5, y: 0.18 }, size: "md" });
    a.beats(L.beats, { after: "arms-crossed" }); b.beats(R.beats, { after: "hands-hips" });
    var cam = sc.cam;
    cam.set({ x: sc.Ww / 2, y: 540, zoom: 1.1 });
    cam.to({ y: 500, zoom: 1.0 }, 0.1, 1.6, "outCubic");
    cam.focus(a, tA - 0.2, 0.5, 1.22, { focusY: 400 }).focus(b, tB - 0.2, 0.5, 1.22, { focusY: 400 });
    cam.to({ x: sc.Ww / 2, y: 500, zoom: 1.0 }, Math.max(tA, tB, tVs) - 0.1, 0.4, "outCubic");
  };

  T["crisis-moment"] = function (root, p) {
    var sc = new Scene(root, { empire: p.empire || "factory", sky: "storm", growth: 1 });
    var h = heroSetup(sc, p, { expression: "worried", pose: "idle" }), fig = h.fig, side = h.side;
    var tKey = tAt(p.keyword || S.autoKey(p.headline), 0.35);
    sc.plate(p.company, p.years, { at: 0.2, kicker: p.kicker || "CRISIS", color: C.red });
    fig.pose("worried", 0.3, 0.6).emote("sweat", 0.8, 2);
    var pts = arr(p.points);
    if (pts.length >= 2) {
      sc.chart({ points: pts, title: p.title || "SHARE PRICE", prefix: p.prefix, suffix: p.suffix, at: Math.max(0.4, tKey - 0.6), pos: cardPos(sc, side), w: cardW(sc), falling: true, color: C.red });
    } else if (p.stat && p.stat.value != null) {
      sc.stat(p.stat.value, p.stat.label, tAt(p.stat.word || S.autoKey(p.stat.label), 0.6, tKey), { pos: statPos(sc, side, false), color: C.red });
    }
    if (p.headline) sc.headline(p.headline, tKey, { pos: headPos(sc, side, pts.length >= 2), size: pts.length >= 2 ? "md" : "lg", color: C.red });
    sc.cam.shake(tKey, 16, 0.6);
    fig.expression("shocked", tKey).pose("facepalm", tKey + 1.2, 0.5).pose("worried", Math.min(D() - 0.5, tKey + 3.4), 0.6);
    fig.beats(p.beats, { after: "worried" });
    var cam = sc.cam;
    cam.set({ x: sc.Ww / 2, y: 520, zoom: 1.02 });
    cam.to({ y: 500, zoom: 1.08 }, 0.1, Math.max(2, D() * 0.8), "inOutSine");
  };

  T["factory-floor"] = function (root, p) {
    var sc = new Scene(root, { empire: p.empire || "factory", sky: p.sky || "day", growth: 1 });
    var h = heroSetup(sc, p, { archetype: "engineer", expression: "happy" }), fig = h.fig, side = h.side;
    sc.assemblyLine({ product: p.product, speed: num(p.speed, 110) });
    var tKey = tAt(p.keyword || S.autoKey(p.headline), 0.35);
    sc.plate(p.company, p.years, { at: 0.2, kicker: p.kicker || "PRODUCTION" });
    fig.pose("point-down", 0.4, 0.5).lookAt("down", 0.4);
    if (p.headline) sc.headline(p.headline, tKey, { pos: sc.portrait ? { x: 0.5, y: 0.3 } : { x: side === "left" ? 0.68 : 0.32, y: 0.42 }, size: "md" });
    fig.pose("thumbs-up", tKey, 0.45).expression("excited", tKey).pose("explain", tKey + 2, 0.5);
    if (p.rate && p.rate.value != null) {
      var tR = tAt(p.rate.word || S.autoKey(p.rate.label), 0.66, tKey + 0.4);
      sc.stat(p.rate.value, p.rate.label, tR, { pos: sc.portrait ? { x: 0.5, y: 0.47 } : { x: side === "left" ? 0.7 : 0.3, y: 0.7 }, kicker: p.rate.kicker });
      fig.pose("fist-pump", tR, 0.4).pose("point-down", Math.min(D() - 0.5, tR + 2.2), 0.5);
    }
    fig.beats(p.beats, { after: "point-down" });
    var cam = sc.cam;
    cam.set({ x: sc.Ww / 2, y: 560, zoom: 1.12 });
    cam.to({ y: 520, zoom: 1.02 }, 0.1, Math.max(2, D() * 0.75), "inOutSine");
  };

  T["era-chapter"] = function (root, p) {
    var sc = new Scene(root, { empire: p.empire || "city", sky: p.sky || "dawn", growth: num(p.growthAmount, 0.7) });
    el("div.fs-dim", { parent: sc.hud, style: { opacity: 0.38 } });
    var tTitle = tAt(p.keyword || S.autoKey(p.title), 0.45);
    sc.chapter(p.year, p.title, { sub: p.sub, kicker: p.kicker || (p.company ? plain(p.company).toUpperCase() : "CHAPTER"), at: 0.25, titleAt: Math.max(1.0, tTitle - 0.1) });
    if (sc.empire && sc.empire.growth < 1) sc.empire.grow(0.6, Math.max(1.5, D() - 0.6));
    var cam = sc.cam;
    cam.set({ x: sc.Ww / 2, y: 600, zoom: 1.2 });
    cam.to({ y: 470, zoom: 0.98 }, 0.05, Math.max(2.5, D() * 0.95), "inOutSine");
  };

  T["deal-handshake"] = function (root, p) {
    var sc = new Scene(root, { empire: p.empire || "finance", sky: p.sky || "day", growth: 1 });
    var xs = sc.slots(2, sc.portrait ? 0.62 : sc.square ? 0.5 : 0.36);
    var kinds = arr(p.archetypes);
    var a = sc.figure(kinds[0] || "founder", { x: xs[0], facing: "right", expression: "confident", index: 0 });
    var b = sc.figure(kinds[1] || "investor", { x: xs[1], facing: "left", expression: "smug", index: 1 });
    var tShake = tAt(p.keyword || "deal", 0.4);
    var tSign = tAt(p.signWord || "signed", 0.62, tShake);
    sc.plate(p.company, p.years, { at: 0.2, kicker: p.kicker || "THE DEAL", until: tSign - 0.7 });
    narrate(a, 0, tShake); narrate(b, tShake, D());
    a.lookAt(b, 0); b.lookAt(a, 0);
    a.pose("talk", 0.3, 0.5); b.pose("arms-crossed", 0.3, 0.5);
    a.pose("handshake", tShake - 0.3, 0.45); b.pose("handshake", tShake - 0.3, 0.45);
    a.expression("happy", tShake); b.expression("happy", tShake);
    sc.cam.shake(tShake + 0.05, 8, 0.35);
    var nameA = p.partyA || p.company, nameB = p.partyB || p.partner;
    if (nameA) sc.nameTag(a, nameA, 0.5, { y: 250, rot: -3, until: tSign - 0.7 });
    if (nameB) sc.nameTag(b, nameB, 0.8, { y: 250, rot: 3, accent: true, until: tSign - 0.7 });
    sc.contract({ at: tSign - 0.6, signAt: tSign, amount: p.amount, parties: nameA && nameB ? nameA + " × " + nameB : "", pos: sc.portrait ? { x: 0.5, y: 0.42 } : sc.square ? { x: 0.5, y: 0.46 } : { x: 0.5, y: 0.4 }, w: sc.portrait ? sc.W * 0.54 : sc.square ? sc.W * 0.3 : sc.W * 0.22, title: p.title || "AGREEMENT" });
    a.pose("thumbs-up", tSign + 2, 0.5); b.pose("thumbs-up", tSign + 2.2, 0.5);
    a.emote("dollar", tSign + 2.1, 1.6); b.emote("sparkle", tSign + 2.3, 1.6);
    if (p.headline) sc.headline(p.headline, tAt(p.headlineWord || S.autoKey(p.headline), 0.8, tSign), { pos: sc.portrait || sc.square ? { x: 0.5, y: 0.9 } : { x: 0.5, y: 0.86 }, size: "md" });
    var cam = sc.cam;
    cam.set({ x: sc.Ww / 2, y: 540, zoom: 1.06 });
    cam.to({ y: 520, zoom: 1.0 }, 0.1, Math.max(1.5, tShake), "inOutSine");
    cam.to({ y: 480, zoom: 1.12 }, tShake - 0.2, 0.5, "outCubic");
    cam.to({ y: 500, zoom: 1.0 }, tSign - 0.7, 0.6, "inOutCubic");
  };

  T["legacy-skyline"] = function (root, p) {
    var sc = new Scene(root, { empire: p.empire || "city", sky: p.sky || "sunset", growth: 1 });
    var h = heroSetup(sc, p, { expression: "confident", pose: "arms-crossed" }), fig = h.fig, side = h.side;
    var tKey = tAt(p.keyword || S.autoKey(p.headline), 0.4);
    sc.plate(p.company, p.years, { at: 0.25, kicker: p.kicker || "THE LEGACY" });
    fig.pose("arms-crossed", 0.2, 0.6).lookAt("camera", 0);
    var stats = arr(p.stats).slice(0, 3);
    var keys = stats.map(function (s) { return s.word || S.autoKey(s.label); });
    var times = S.syncTimes(keys, { start: Math.min(0.8, D() * 0.15), end: Math.max(1, D() * 0.7) });
    var positions = sc.portrait ? [{ x: 0.5, y: 0.3 }, { x: 0.5, y: 0.42 }, { x: 0.5, y: 0.54 }] : sc.square ? [{ x: 0.7, y: 0.4 }, { x: 0.7, y: 0.56 }, { x: 0.7, y: 0.72 }] : [{ x: side === "left" ? 0.52 : 0.48, y: 0.46 }, { x: side === "left" ? 0.8 : 0.2, y: 0.46 }, { x: side === "left" ? 0.66 : 0.34, y: 0.68 }];
    if (stats.length === 1) positions = [sc.portrait ? { x: 0.5, y: 0.4 } : sc.square ? { x: 0.7, y: 0.5 } : { x: side === "left" ? 0.67 : 0.33, y: 0.5 }];
    if (stats.length === 2) positions = sc.portrait ? [{ x: 0.5, y: 0.32 }, { x: 0.5, y: 0.5 }] : sc.square ? [{ x: 0.7, y: 0.45 }, { x: 0.7, y: 0.66 }] : [{ x: side === "left" ? 0.56 : 0.44, y: 0.42 }, { x: side === "left" ? 0.8 : 0.2, y: 0.42 }];
    stats.forEach(function (s, i) { sc.stat(s.value, s.label, times[i], { pos: positions[i], rot: i % 2 ? 1.5 : -1.5 }); fig.pose(i % 2 ? "present" : "point-up", times[i], 0.45).pose("arms-crossed", times[i] + 1.8, 0.6); });
    if (p.headline) sc.headline(p.headline, tKey, { pos: sc.portrait || sc.square ? { x: 0.5, y: 0.9 } : { x: 0.5, y: 0.88 }, size: "md", maxWidth: sc.W * 0.8 });
    fig.expression("happy", tKey).pose("thumbs-up", tKey, 0.45).pose("arms-crossed", Math.min(D() - 0.4, tKey + 2), 0.6);
    fig.beats(p.beats, { after: "arms-crossed" });
    var cam = sc.cam;
    cam.set({ x: sc.Ww / 2, y: 540, zoom: 1.1 });
    cam.to({ y: 450, zoom: 0.96 }, 0.1, Math.max(3, D() * 0.9), "inOutSine");
  };

  // ───────────────────────── public API ─────────────────────────
  /** Start a scene: S.scene({ empire, sky, growth, root }). Returns the Scene (also the current scene). */
  S.scene = function (opts) {
    opts = opts || {};
    if (typeof opts === "string") opts = { empire: opts };
    return new Scene(opts.root || V.root(), opts);
  };
  S.currentScene = function () { return current; };
  S.figure = function (kind, opts) { return ensureScene().figure(kind, opts); };
  S.plate = function (company, years, opts) { return ensureScene().plate(company, years, opts); };
  S.headline = function (text, at, opts) { return ensureScene().headline(text, at, opts); };
  S.stat = function (value, label, at, opts) { return ensureScene().stat(value, label, at, opts); };
  S.captions = function (opts) { return ensureScene().captions(opts); };
  S.chapter = function (year, title, opts) { return ensureScene().chapter(year, title, opts); };
  S.label = function (text, at, opts) { return ensureScene().label(text, at, opts); };
  S.paper = function (opts) { return ensureScene().paper(opts); };
  S.productCard = function (opts) { return ensureScene().productCard(opts); };
  S.chart = function (opts) { return ensureScene().chart(opts); };
  S.map = function (opts) { return ensureScene().map(opts); };
  S.contract = function (opts) { return ensureScene().contract(opts); };
  S.versus = function (at, opts) { return ensureScene().versus(at, opts); };
  S.nameTag = function (fig, text, at, opts) { return ensureScene().nameTag(fig, text, at, opts); };
  S.assemblyLine = function (opts) { return ensureScene().assemblyLine(opts); };
  S.workbench = function (opts) { return ensureScene().workbench(opts); };
  S.camera = function () { return ensureScene().cam; };
  S.grow = function (from, to) { var sc = ensureScene(); if (sc.empire) sc.empire.grow(from, to); return sc; };
  S.archetypes = ARCH_IDS.slice();
  S.poses = Object.keys(POSES);
  S.expressions = Object.keys(EXPR);
  S.regions = Object.keys(REGIONS);
  S.founderTemplates = T;
  S.templateIds = Object.keys(T);

  /** Compatibility with the shared helpers: a scene (empire backdrop) + a padded flex column on top of it. */
  S.stage = function (root, opts) {
    opts = opts || {};
    var sc = current && (!root || current.root === root) ? current : new Scene(root || V.root(), { empire: opts.empire || "tech", sky: opts.sky || "day" });
    var st = el("div.v-stage.fs-stage", { parent: sc.hud });
    if (opts.align === "top") st.classList.add("v-top");
    return st;
  };

  S.render = function (id, root, props) {
    var fn = T[id];
    if (!fn) throw new Error("Unknown template: " + id);
    root = root || V.root();
    try {
      fn(root, props || {});
    } catch (e) {
      V.error("founder-story template " + id + ": " + (e && e.message));
      try { V.reset(); } catch (e2) {}
      current = null;
      S.fallback(root, V.narration);
    }
    return root;
  };

  /** Fallback: founder caricature over the empire with paper captions of the narration. Never throws. */
  S.fallback = function (root, narration) {
    try {
      root = root || V.root();
      root.innerHTML = "";
      root.className = "";
      root.removeAttribute("style");
      current = null;
      var sc = new Scene(root, { empire: "tech", sky: "day", growth: 0.5 });
      var fig = sc.figure("founder", { x: sc.heroX("left"), facing: sc.portrait ? "right" : "right", expression: "confident" });
      narrate(fig);
      fig.pose("arms-crossed", 0.2, 0.6).pose("explain", Math.min(1.5, D() * 0.3), 0.5).pose("arms-crossed", Math.min(D() - 0.5, D() * 0.7), 0.6);
      sc.captions({ text: narration, top: sc.portrait, x: sc.portrait ? 0.5 : 0.66, maxWidth: sc.portrait ? sc.W * 0.9 : sc.W * 0.56 });
      if (sc.empire) sc.empire.grow(0.8, Math.max(1.5, D() - 1));
      defaultCam(sc, fig, "left");
      return root;
    } catch (e) {
      V.error("founder-story fallback: " + (e && e.message));
      try {
        V.reset();
        root.innerHTML = "";
        var t = el("div", { parent: root, style: { position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center", padding: "8%", fontSize: u(64) + "px", fontWeight: "900", textAlign: "center", color: INK, background: C.paper, fontFamily: FONT_HEAD, textTransform: "uppercase" } });
        t.textContent = str(narration || V.narration).split(/\s+/).slice(0, 12).join(" ");
      } catch (e2) {}
    }
  };
})();
