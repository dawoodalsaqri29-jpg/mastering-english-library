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
/* Scene engine: ink-anatomy — "Ink Anatomy".
 * Black-and-white manga ink illustration for science-of-strength explainers: a lean white-spiky-haired
 * protagonist and a hulking rival drawn procedurally in SVG with brush-weight contours, hatching and
 * cross-hatching, exercise loops (pose interpolation), one red accent for the muscle / tendon / bone
 * under discussion (red striations that pulse on the key word), orange shorts, handwritten annotations
 * with curved red arrows, rep counters, speed lines, impact panels and ink-splash transitions.
 * Pure function of time: all DOM/SVG is built once; V.onFrame(t) only updates transforms/attributes.
 */
(function () {
  "use strict";
  var V = window.V;
  var S = (window.SceneStyle = window.SceneStyle || {});
  var el = V.el;
  var SVGNS = "http://www.w3.org/2000/svg";

  S.init({
    id: "ink-anatomy",
    kind: "minimal",
    enter: "pop",
    titleReveal: "mask",
    drift: 0,
    series: ["#E8232A", "#F28A1E", "#111111", "#8A8A8A", "#B8151B", "#F2C94C"],
  });

  // ───────────────────────── utils ─────────────────────────
  var RED = "#E8232A", RED2 = "#9E0F15", ORANGE = "#F28A1E", GREY = "#8A8A8A";
  var INK = "#0B0B0B", PAPER = "#FFFFFF"; // flipped by the stage when bg = "black"
  var LW = 5; // brush contour weight (figure units)
  var PI = Math.PI, D2R = PI / 180;
  function str(v) { return v == null ? "" : String(v); }
  function arr(v) { return Array.isArray(v) ? v : v == null ? [] : [v]; }
  function num(v, d) { v = Number(v); return isFinite(v) ? v : d; }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function lerp(a, b, p) { return a + (b - a) * p; }
  function sm(p) { p = clamp(p, 0, 1); return p * p * (3 - 2 * p); }
  function fx(n) { return Math.round(n * 10) / 10; }
  function hash01(n) { var x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); }
  function noise(x, seed) {
    var i = Math.floor(x), f = x - i;
    var a = hash01(i * 1.7 + (seed || 0) * 13.13), b = hash01((i + 1) * 1.7 + (seed || 0) * 13.13);
    return (lerp(a, b, f * f * (3 - 2 * f)) - 0.5) * 2;
  }
  function svgEl(tag, attrs, parent) {
    var n = document.createElementNS(SVGNS, tag);
    if (attrs) for (var k in attrs) if (attrs[k] != null) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }
  function g(parent, attrs) { return svgEl("g", attrs, parent); }
  function plain(t) { return str(t).replace(/\*([^*]+)\*/g, "$1"); }
  function u(n) { return n * V.unit; }
  function D() { return V.duration; }
  function lastT() { return Math.max(0.05, V.duration - 0.05); }
  function clampT(t) { return clamp(num(t, 0), 0, lastT()); }
  function setA(n, k, v) {
    var c = n._c || (n._c = {});
    if (c[k] === v) return;
    c[k] = v;
    n.setAttribute(k, v);
  }
  function setD(n, v) { setA(n, "display", v ? "inline" : "none"); }
  function setS(n, k, v) {
    var c = n._s || (n._s = {});
    if (c[k] === v) return;
    c[k] = v;
    n.style[k] = v;
  }
  var uid = 0;
  function nid(p) { uid++; return "ia" + (p || "") + uid + "_" + (V.seed || 0); }
  function P2(x, y) { return fx(x) + "," + fx(y); }
  function pct(v) { return fx(v * 100) + "%"; }
  function fitText(node, opts) { try { V.fit(node, opts || {}); } catch (e) {} }
  var EASE = {
    snap: function (p) { p = clamp(p, 0, 1); var q = p - 1, s = 2.0; return q * q * ((s + 1) * q + s) + 1; },
    whip: function (p) { p = clamp(p, 0, 1); return 1 - Math.pow(1 - p, 4); },
    pop: function (p) { p = clamp(p, 0, 1); var q = p - 1, s = 1.5; return q * q * ((s + 1) * q + s) + 1; },
    hold: function (p) { p = clamp(p, 0, 1); return p < 0.5 ? 8 * p * p * p * p : 1 - Math.pow(-2 * p + 2, 4) / 2; },
  };
  function easeFn(e) {
    if (typeof e === "function") return e;
    if (EASE[e]) return EASE[e];
    if (e && V.ease[e]) return V.ease[e];
    return V.ease.inOutCubic;
  }
  S.inkEase = EASE;

  // ───────────────────────── word timing ─────────────────────────
  function words() { return V.words || []; }
  function normW(w) { return str(w).toLowerCase().replace(/[^\p{L}\p{N}']+/gu, ""); }
  /** time of a sync word (minus lead) or the fallback, clamped into the scene */
  function syncAt(word, after, fallback, lead) {
    if (word) {
      var t = V.find(str(word), after || 0);
      if (t != null) return clampT(t - (lead == null ? 0.12 : lead));
    }
    return clampT(fallback);
  }
  function wordEnd(word, after, fallback) {
    if (word) { var t = V.findEnd(str(word), after || 0); if (t != null) return clampT(t); }
    return clampT(fallback);
  }
  /** evenly spread times for n items inside [a,b], each snapped to its sync word when given */
  function spread(n, a, b, keys) {
    var out = [], after = 0;
    for (var i = 0; i < n; i++) {
      var est = a + ((b - a) * (i + 0.5)) / Math.max(1, n) - 0.3;
      var t = keys && keys[i] ? syncAt(keys[i], after, est) : clampT(est);
      if (i && t < out[i - 1] + 0.35) t = out[i - 1] + 0.35;
      out.push(clampT(t));
      after = t;
    }
    return out;
  }
  function syllables(word) {
    var w = str(word).toLowerCase().replace(/[^a-zà-ɏ]/g, "");
    var m = w.match(/[aeiouyàáâäãåèéêëìíîïòóôöõùúûü]+/g);
    return Math.max(1, Math.min(5, m ? m.length : 1));
  }
  /** mouth openness 0..1 at time t from the narration words (or a synthetic chatter when no timings) */
  var talkCache = null;
  function talkCurve() {
    if (talkCache) return talkCache;
    var W = words(), out = [];
    if (W.length) {
      for (var i = 0; i < W.length; i++) {
        var w = W[i], n = syllables(w.word), len = Math.max(0.08, w.end - w.start);
        out.push({ s: w.start, e: w.end, n: n, k: 0.55 + 0.45 * hash01(i * 3.1), len: len });
      }
    } else {
      var txt = str(V.narration || "").split(/\s+/).filter(Boolean);
      if (txt.length) {
        var a = 0.25, b = Math.max(a + 1, D() - 0.4), step = (b - a) / txt.length;
        for (var j = 0; j < txt.length; j++) out.push({ s: a + j * step, e: a + (j + 0.85) * step, n: syllables(txt[j]), k: 0.6 + 0.4 * hash01(j * 7.7), len: step * 0.85 });
      }
    }
    talkCache = out;
    return out;
  }
  function mouthAt(t) {
    var tc = talkCurve(), o = 0;
    for (var i = 0; i < tc.length; i++) {
      var w = tc[i];
      if (t < w.s - 0.04) break;
      if (t <= w.e + 0.04) {
        var p = clamp((t - w.s) / w.len, 0, 1);
        var v = Math.abs(Math.sin(p * PI * w.n)) * w.k;
        if (v > o) o = v;
      }
    }
    return o;
  }
  S.syncAt = syncAt;
  S.spread = spread;
  S.mouthAt = mouthAt;

  // ───────────────────────── geometry helpers ─────────────────────────
  function vec(a) { return [Math.sin(a * D2R), Math.cos(a * D2R)]; }
  /** capsule-ish limb outline in segment-local coords: bone along +y from 0 to L; widths w0 (proximal), wm (belly), w1 (distal); bulge side +x */
  function limbD(L, w0, wm, w1, bulge) {
    bulge = bulge == null ? 0.7 : bulge;
    var cfx = 2 * wm - (w0 + w1) / 2, cbx = (2 * wm - (w0 + w1) / 2) * bulge;
    return "M" + P2(w0, 0) +
      " Q" + P2(cfx, L * 0.42) + " " + P2(w1, L) +
      " Q" + P2(0, L + w1 * 1.1) + " " + P2(-w1, L) +
      " Q" + P2(-cbx, L * 0.5) + " " + P2(-w0, 0) +
      " Q" + P2(0, -w0 * 0.9) + " " + P2(w0, 0) + "Z";
  }
  function ellD(cx, cy, rx, ry) {
    return "M" + P2(cx - rx, cy) + " A" + P2(rx, ry) + " 0 1 0 " + P2(cx + rx, cy) + " A" + P2(rx, ry) + " 0 1 0 " + P2(cx - rx, cy) + "Z";
  }
  /** hand-drawn wobble polyline through points */
  function roughD(pts, rnd, wob, close) {
    var d = "";
    for (var i = 0; i < pts.length; i++) {
      var p = pts[i];
      var x = p[0] + (rnd() - 0.5) * wob, y = p[1] + (rnd() - 0.5) * wob;
      if (!i) d += "M" + P2(x, y);
      else {
        var q = pts[i - 1], mx = (q[0] + p[0]) / 2 + (rnd() - 0.5) * wob * 1.6, my = (q[1] + p[1]) / 2 + (rnd() - 0.5) * wob * 1.6;
        d += " Q" + P2(mx, my) + " " + P2(x, y);
      }
    }
    return d + (close ? "Z" : "");
  }
  function curveArrowD(x1, y1, x2, y2, bend) {
    var mx = (x1 + x2) / 2, my = (y1 + y2) / 2, dx = x2 - x1, dy = y2 - y1, L = Math.sqrt(dx * dx + dy * dy) || 1;
    var nx = -dy / L, ny = dx / L, b = (bend == null ? 0.25 : bend) * L;
    return "M" + P2(x1, y1) + " Q" + P2(mx + nx * b, my + ny * b) + " " + P2(x2, y2);
  }
  function arrowHeadD(x1, y1, x2, y2, bend, size) {
    // tangent at the end of the quadratic = control → end
    var mx = (x1 + x2) / 2, my = (y1 + y2) / 2, dx = x2 - x1, dy = y2 - y1, L = Math.sqrt(dx * dx + dy * dy) || 1;
    var nx = -dy / L, ny = dx / L, b = (bend == null ? 0.25 : bend) * L;
    var cx = mx + nx * b, cy = my + ny * b;
    var tx = x2 - cx, ty = y2 - cy, tl = Math.sqrt(tx * tx + ty * ty) || 1;
    tx /= tl; ty /= tl;
    var s = size || 22, px = -ty, py = tx;
    return "M" + P2(x2 - tx * s + px * s * 0.55, y2 - ty * s + py * s * 0.55) + " L" + P2(x2, y2) + " L" + P2(x2 - tx * s - px * s * 0.55, y2 - ty * s - py * s * 0.55);
  }
  S.curveArrowD = curveArrowD;

  // ───────────────────────── stage ─────────────────────────
  var stage = null;
  /** The ink stage: one SVG world (1000 units tall, Ww wide) + HTML UI layer. opts: { bg: "white"|"black" } */
  function Stage(root, opts) {
    opts = opts || {};
    root = root || V.root();
    this.root = root;
    this.bg = opts.bg === "black" ? "black" : "white";
    this.ink = this.bg === "black" ? "#FFFFFF" : "#0B0B0B";
    this.paper = this.bg === "black" ? "#070707" : "#FFFFFF";
    INK = this.ink; PAPER = this.paper;
    root.classList.add("ia-root", "ia-bg-" + this.bg);
    root.style.setProperty("--ia-ink", this.ink);
    root.style.setProperty("--ia-paper", this.paper);
    var W = V.width, H = V.height;
    this.W = W; this.H = H; this.k = H / 1000; this.Ww = (1000 * W) / H;
    this.portrait = V.isPortrait; this.square = V.isSquare; this.landscape = !V.isPortrait && !V.isSquare;
    this.view = el("div.ia-view", { parent: root });
    this.svg = svgEl("svg", { class: "ia-svg", viewBox: "0 0 " + fx(this.Ww) + " 1000", width: W, height: H, preserveAspectRatio: "none" }, this.view);
    this.defs = svgEl("defs", null, this.svg);
    this.makeDefs();
    this.back = g(this.svg);      // paper, tone, vignette (static)
    this.under = g(this.svg);     // speed-line backdrops (screen space)
    this.world = g(this.svg);     // camera-transformed
    this.ground = g(this.world);
    this.props = g(this.world);
    this.figs = g(this.world);
    this.wfx = g(this.world);     // world effects (annotations, arrows)
    this.over = g(this.svg);      // screen-space effects (focus lines, splashes)
    this.ui = el("div.ia-ui", { parent: root });
    this.top = el("div.ia-top", { parent: root });
    this.topSvg = svgEl("svg", { class: "ia-svg", viewBox: "0 0 " + fx(this.Ww) + " 1000", width: W, height: H, preserveAspectRatio: "none" }, this.top);
    this.flashEl = el("div.ia-flash", { parent: this.top });
    this.figures = []; this.fns = []; this.shakes = []; this.flashes = []; this.filters = []; this.impacts = [];
    this.cam = new Cam(this);
    this.drawPaper(opts);
    stage = this;
    var self = this;
    V.onFrame(function (t) { self.update(t); });
  }
  S.Stage = Stage;
  var STP = Stage.prototype;
  STP.makeDefs = function () {
    var d = this.defs, ink = this.ink, id = (this.pid = nid("p"));
    function pat(name, w, h, body, extra) {
      var p = svgEl("pattern", Object.assign({ id: id + name, width: w, height: h, patternUnits: "userSpaceOnUse" }, extra || {}), d);
      p.innerHTML = body;
      return "url(#" + id + name + ")";
    }
    this.pHatch = pat("h", 11, 11, '<path d="M-2,13 L13,-2 M-2,2 L2,-2 M9,13 L13,9" stroke="' + ink + '" stroke-width="1.7" fill="none"/>');
    this.pHatch2 = pat("h2", 8, 8, '<path d="M-2,10 L10,-2 M-2,2 L2,-2 M6,10 L10,6" stroke="' + ink + '" stroke-width="1.5" fill="none"/>');
    this.pCross = pat("x", 10, 10, '<path d="M-2,12 L12,-2 M-2,-2 L12,12 M-2,2 L2,-2 M8,12 L12,8 M8,-2 L12,2 M-2,8 L2,12" stroke="' + ink + '" stroke-width="1.4" fill="none"/>');
    this.pTone = pat("t", 9, 9, '<circle cx="4.5" cy="4.5" r="1.5" fill="' + ink + '"/>');
    this.pToneFine = pat("tf", 6, 6, '<circle cx="3" cy="3" r="0.9" fill="' + ink + '"/>');
    this.pStria = pat("s", 7, 7, '<rect width="7" height="7" fill="' + RED + '"/><path d="M0,3.5 L7,3.5" stroke="' + RED2 + '" stroke-width="1.6"/>');
    this.pStriaT = pat("st", 5, 9, '<rect width="5" height="9" fill="#F7B3B5"/><path d="M2.5,0 L2.5,9" stroke="' + RED + '" stroke-width="1.3"/>');
    this.pRedHatch = pat("rh", 9, 9, '<path d="M-2,11 L11,-2 M-2,2 L2,-2 M7,11 L11,7" stroke="' + RED + '" stroke-width="1.8" fill="none"/>');
    this.pOrange = pat("o", 9, 9, '<rect width="9" height="9" fill="' + ORANGE + '"/><path d="M-2,11 L11,-2" stroke="#C25F0C" stroke-width="1.2" fill="none"/>');
    // shade mask: hatch only on the lower-right of each shape
    var gr = svgEl("linearGradient", { id: id + "sg", x1: 0, y1: 0, x2: 1, y2: 1 }, d);
    svgEl("stop", { offset: 0.34, "stop-color": "#000" }, gr);
    svgEl("stop", { offset: 0.72, "stop-color": "#fff" }, gr);
    var mk = svgEl("mask", { id: id + "sm", maskContentUnits: "objectBoundingBox" }, d);
    svgEl("rect", { x: 0, y: 0, width: 1, height: 1, fill: "url(#" + id + "sg)" }, mk);
    this.shadeMask = "url(#" + id + "sm)";
    var gr2 = svgEl("linearGradient", { id: id + "sg2", x1: 1, y1: 0, x2: 0, y2: 1 }, d);
    svgEl("stop", { offset: 0.3, "stop-color": "#000" }, gr2);
    svgEl("stop", { offset: 0.8, "stop-color": "#fff" }, gr2);
    var mk2 = svgEl("mask", { id: id + "sm2", maskContentUnits: "objectBoundingBox" }, d);
    svgEl("rect", { x: 0, y: 0, width: 1, height: 1, fill: "url(#" + id + "sg2)" }, mk2);
    this.shadeMaskL = "url(#" + id + "sm2)";
    function edgeMask(name, x1, y1, x2, y2) {
      var gr3 = svgEl("linearGradient", { id: id + name + "g", x1: x1, y1: y1, x2: x2, y2: y2 }, d);
      svgEl("stop", { offset: 0.58, "stop-color": "#000" }, gr3);
      svgEl("stop", { offset: 0.96, "stop-color": "#fff" }, gr3);
      var mk3 = svgEl("mask", { id: id + name, maskContentUnits: "objectBoundingBox" }, d);
      svgEl("rect", { x: -0.2, y: -0.2, width: 1.4, height: 1.4, fill: "url(#" + id + name + "g)" }, mk3);
      return "url(#" + id + name + ")";
    }
    this.shadeMask2 = edgeMask("sm3", 0, 0, 1, 1);
    this.shadeMaskL2 = edgeMask("sm4", 1, 0, 0, 1);
  };
  STP.drawPaper = function (opts) {
    var Ww = this.Ww, b = this.back;
    svgEl("rect", { x: -20, y: -20, width: Ww + 40, height: 1040, fill: this.paper }, b);
    if (opts.plain) return;
    // corner cross-hatch vignette (manga page feel)
    var rnd = V.makeRand(17 + (V.seed || 0));
    var vg = g(b, { opacity: this.bg === "black" ? 0.3 : 0.3 });
    var corners = [[0, 0, 1, 1], [Ww, 0, -1, 1], [0, 1000, 1, -1], [Ww, 1000, -1, -1]];
    for (var c = 0; c < corners.length; c++) {
      var cx = corners[c][0], cy = corners[c][1], sx = corners[c][2], sy = corners[c][3], d = "";
      var n = 14;
      for (var i = 0; i < n; i++) {
        var off = 30 + i * 22 + rnd() * 8, len = 220 - i * 11 + rnd() * 40;
        d += "M" + P2(cx + sx * (off + len * 0.2), cy) + " L" + P2(cx, cy + sy * (off + len * 0.2));
        if (i % 2 === 0) d += " M" + P2(cx + sx * off, cy + sy * (off * 0.1)) + " L" + P2(cx + sx * off * 0.1, cy + sy * off);
      }
      svgEl("path", { d: d, stroke: this.ink, "stroke-width": 1.6, fill: "none", "stroke-linecap": "round" }, vg);
    }
    // screentone that fades in toward the edges + brush streaks (inked page, not flat white)
    var mid = nid("vm"), rg = svgEl("radialGradient", { id: mid + "g", cx: Ww / 2, cy: 500, r: Math.max(Ww, 1000) * 0.66, gradientUnits: "userSpaceOnUse" }, this.defs);
    svgEl("stop", { offset: 0.42, "stop-color": "#000" }, rg);
    svgEl("stop", { offset: 1, "stop-color": "#fff" }, rg);
    var mk = svgEl("mask", { id: mid }, this.defs);
    svgEl("rect", { x: -20, y: -20, width: Ww + 40, height: 1040, fill: "url(#" + mid + "g)" }, mk);
    svgEl("rect", { x: -20, y: -20, width: Ww + 40, height: 1040, fill: this.pTone, mask: "url(#" + mid + ")", opacity: this.bg === "black" ? 0.3 : 0.5 }, b);
    var sg = g(b, { opacity: this.bg === "black" ? 0.22 : 0.16 }), sd = "";
    for (var k = 0; k < 16; k++) {
      var y = (k < 8 ? 40 : 700) + (k % 8) * 34 + rnd() * 18, x0 = k < 8 ? -20 : Ww * 0.45 + rnd() * Ww * 0.2, len = Ww * (0.25 + rnd() * 0.3), h = 2 + rnd() * 5;
      sd += "M" + P2(x0, y) + " L" + P2(x0 + len, y - h / 2) + " L" + P2(x0 + len, y + h / 2) + "Z ";
    }
    svgEl("path", { d: sd, fill: this.ink }, sg);
    if (opts.tone !== false) svgEl("rect", { x: -20, y: -20, width: Ww + 40, height: 1040, fill: this.pToneFine, opacity: this.bg === "black" ? 0.12 : 0.07 }, b);
  };
  STP.onFrame = function (f) { this.fns.push(f); return this; };
  STP.update = function (t) {
    var c = this.cam.eval(t), Ww = this.Ww, i;
    var tr = "translate(" + fx(Ww / 2 + c.ox) + "," + fx(500 + c.oy) + ") scale(" + fx(c.z * 1000) / 1000 + ") translate(" + fx(-c.x) + "," + fx(-c.y) + ")";
    setA(this.world, "transform", tr);
    for (i = 0; i < this.figures.length; i++) this.figures[i].update(t);
    // stage shake
    var ox = 0, oy = 0;
    for (i = 0; i < this.shakes.length; i++) {
      var s = this.shakes[i], ls = t - s.t;
      if (ls < 0 || ls > s.d) continue;
      var amp = s.a * Math.pow(1 - ls / s.d, 1.5);
      ox += noise(ls * 34, 3 + i) * amp; oy += noise(ls * 37, 9 + i) * amp;
    }
    setS(this.view, "transform", ox || oy ? "translate(" + fx(ox * this.k) + "px," + fx(oy * this.k) + "px)" : "");
    var filt = "", flash = 0, fcol = "#FFFFFF";
    for (i = 0; i < this.filters.length; i++) { var f = this.filters[i]; if (t >= f.from && t < f.to) filt = f.filter; }
    for (i = 0; i < this.impacts.length; i++) {
      var im = this.impacts[i], li = t - im.t;
      if (li >= 0 && li < im.inv) filt = "invert(1)";
    }
    for (i = 0; i < this.flashes.length; i++) {
      var fl = this.flashes[i], lf = t - fl.t;
      if (lf >= 0 && lf < fl.d) { var a = 1 - lf / fl.d; if (a * fl.a > flash) { flash = a * fl.a; fcol = fl.c; } }
    }
    setS(this.view, "filter", filt);
    setS(this.flashEl, "opacity", flash > 0.001 ? String(fx(flash * 100) / 100) : "0");
    setS(this.flashEl, "background", fcol);
    for (i = 0; i < this.fns.length; i++) this.fns[i](t);
  };
  STP.shake = function (at, amp, dur) { this.shakes.push({ t: clampT(at), a: num(amp, 14), d: num(dur, 0.4) }); return this; };
  STP.flash = function (at, color, dur, alpha) { this.flashes.push({ t: clampT(at), c: color || "#FFFFFF", d: num(dur, 0.25), a: num(alpha, 1) }); return this; };
  STP.filter = function (from, to, css) { this.filters.push({ from: from, to: to, filter: css }); return this; };
  /** world → screen fraction (camera at rest) */
  STP.toScreen = function (x, y) { return { x: x / this.Ww, y: y / 1000 }; };
  /** standard figure placement: { x, y (ground), scale } for a role in the frame. side: "left"|"center"|"right" or 0–1 */
  STP.frame = function (side, kind) {
    var Ww = this.Ww, P = this.portrait, Q = this.square;
    var sx = side === "left" ? (P ? 0.5 : Q ? 0.3 : 0.3) : side === "right" ? (P ? 0.5 : Q ? 0.7 : 0.7) : 0.5;
    if (typeof side === "number") sx = side;
    var f;
    switch (kind) {
      case "hero": f = { y: P ? 940 : 935, scale: P ? 0.86 : Q ? 1.02 : 1.18 }; break;
      case "small": f = { y: P ? 780 : 760, scale: P ? 0.5 : 0.55 }; break;
      case "low": f = { y: P ? 930 : 955, scale: P ? 0.9 : Q ? 1.08 : 1.32 }; break;
      case "pair": f = { y: P ? 760 : 910, scale: P ? 0.62 : Q ? 0.84 : 1.0 }; break;
      default: f = { y: P ? 870 : 905, scale: P ? 0.75 : Q ? 0.9 : 1.02 };
    }
    f.x = Ww * sx;
    return f;
  };

  // ───────────────────────── camera ─────────────────────────
  function Cam(st) { this.st = st; this.base = { x: st.Ww / 2, y: 500, z: 1 }; this.kf = []; this.shakes = []; this.dirty = true; }
  S.Cam = Cam;
  var CP = Cam.prototype;
  CP.set = function (o) { o = o || {}; if (o.x != null) this.base.x = num(o.x, this.base.x); if (o.y != null) this.base.y = num(o.y, this.base.y); if (o.zoom != null) this.base.z = num(o.zoom, 1); this.dirty = true; return this; };
  CP.to = function (o, at, dur, ease) { o = o || {}; this.kf.push({ t: clampT(at == null ? 0 : at), d: Math.max(0, num(dur, 0.8)), e: ease || "inOutCubic", x: o.x, y: o.y, z: o.zoom != null ? o.zoom : o.z }); this.dirty = true; return this; };
  CP.cut = function (o, at) { return this.to(o, at, 0); };
  /** slow push-in */
  CP.push = function (zoom, at, dur, o) { o = o || {}; o.zoom = zoom; return this.to(o, at, dur == null ? 2 : dur, "inOutSine"); };
  /** manga punch-in: snap zoom onto a point */
  CP.punch = function (at, zoom, x, y, dur, pan) { pan = pan == null ? 0.45 : pan; return this.to({ x: x == null ? null : this.base.x + (num(x, this.base.x) - this.base.x) * pan, y: y == null ? null : this.base.y + (num(y, this.base.y) - this.base.y) * pan, zoom: zoom == null ? 1.3 : zoom }, at, dur == null ? 0.14 : dur, "whip"); };
  CP.shake = function (at, amp, dur) { this.shakes.push({ t: clampT(at), a: num(amp, 12), d: num(dur, 0.4) }); return this; };
  CP.rumble = function (from, to, amp) { this.shakes.push({ t: clampT(from), a: num(amp, 4), d: Math.max(0.1, num(to, from + 1) - from), rumble: true }); return this; };
  CP.compile = function () {
    this.kf.sort(function (a, b) { return a.t - b.t; });
    this.from = [];
    var c = { x: this.base.x, y: this.base.y, z: this.base.z };
    for (var i = 0; i < this.kf.length; i++) { this.from[i] = c; c = this.target(i, c); }
    this.dirty = false;
  };
  CP.target = function (i, c) { var k = this.kf[i]; return { x: k.x != null ? num(k.x, c.x) : c.x, y: k.y != null ? num(k.y, c.y) : c.y, z: k.z != null ? num(k.z, c.z) : c.z }; };
  CP.eval = function (t) {
    if (this.dirty) this.compile();
    var c = { x: this.base.x, y: this.base.y, z: this.base.z };
    for (var i = 0; i < this.kf.length; i++) {
      var k = this.kf[i];
      if (k.t > t) break;
      var f = this.from[i], tg = this.target(i, f), p = k.d <= 0 ? 1 : easeFn(k.e)(clamp((t - k.t) / k.d, 0, 1));
      c = { x: lerp(f.x, tg.x, p), y: lerp(f.y, tg.y, p), z: lerp(f.z, tg.z, p) };
    }
    var ox = 0, oy = 0;
    for (i = 0; i < this.shakes.length; i++) {
      var s = this.shakes[i], ls = t - s.t;
      if (ls < 0 || ls > s.d) continue;
      var amp = s.rumble ? s.a * Math.min(1, ls / 0.3, (s.d - ls) / 0.3) : s.a * Math.pow(1 - ls / s.d, 1.4);
      ox += noise(ls * (s.rumble ? 22 : 30), 3 + i) * amp; oy += noise(ls * (s.rumble ? 25 : 33), 7 + i) * amp;
    }
    c.ox = ox; c.oy = oy;
    return c;
  };

  // ───────────────────────── screen effects ─────────────────────────
  function fadeWin(t, from, to, fin, fout) {
    if (t < from || t >= to) return 0;
    var a = 1;
    if (fin) a = Math.min(a, (t - from) / fin);
    if (fout) a = Math.min(a, (to - t) / fout);
    return clamp(a, 0, 1);
  }
  /** radial manga concentration lines. opts: { x, y (units), inner, color, opacity, count, bg, layer: "over"|"under" } */
  STP.focusLines = function (from, to, opts) {
    opts = opts || {};
    var st = this, Ww = this.Ww, parent = opts.layer === "under" ? this.under : this.over;
    var cx = num(opts.x, Ww / 2), cy = num(opts.y, 500), inner = num(opts.inner, Math.min(Ww, 1000) * 0.3), R = Math.max(Ww, 1000) * 1.2;
    var color = opts.color || this.ink, n = num(opts.count, 70);
    var grp = g(parent, { display: "none", opacity: num(opts.opacity, 0.9) });
    if (opts.bg) svgEl("rect", { x: -20, y: -20, width: Ww + 40, height: 1040, fill: opts.bg }, grp);
    var vars = [];
    for (var v = 0; v < 2; v++) {
      var rnd = V.makeRand(101 + v * 7 + Math.round(from * 10)), d = "";
      for (var i = 0; i < n; i++) {
        var a = (i / n) * 2 * PI + rnd() * 0.08, w = 0.004 + rnd() * 0.014, r0 = inner * (0.75 + rnd() * 0.5);
        d += "M" + P2(cx + Math.cos(a) * r0, cy + Math.sin(a) * r0) + " L" + P2(cx + Math.cos(a - w) * R, cy + Math.sin(a - w) * R) + " L" + P2(cx + Math.cos(a + w) * R, cy + Math.sin(a + w) * R) + "Z";
      }
      vars.push(svgEl("path", { d: d, fill: color, display: "none" }, grp));
    }
    from = clampT(from); to = to == null ? 1e9 : to;
    this.onFrame(function (t) {
      var on = t >= from && t < to;
      setD(grp, on);
      if (!on) return;
      var k = Math.floor(t * 12) % 2;
      setD(vars[0], k === 0); setD(vars[1], k === 1);
    });
    return grp;
  };
  /** straight speed lines. opts: { dir: "h"|"v"|"diag"|"left"|"right", color, count, layer, opacity, bg } */
  STP.speedLines = function (from, to, opts) {
    opts = opts || {};
    var Ww = this.Ww, parent = opts.layer === "under" ? this.under : this.over, color = opts.color || this.ink;
    var grp = g(parent, { display: "none", opacity: num(opts.opacity, 0.8) });
    if (opts.bg) svgEl("rect", { x: -20, y: -20, width: Ww + 40, height: 1040, fill: opts.bg }, grp);
    var dir = opts.dir || "h", n = num(opts.count, 46), vars = [];
    for (var v = 0; v < 2; v++) {
      var rnd = V.makeRand(211 + v * 13 + Math.round(from * 10)), d = "";
      for (var i = 0; i < n; i++) {
        var y = rnd() * 1000, h = 1.5 + rnd() * 6, x = rnd() * Ww * 1.3 - Ww * 0.15, w = Ww * (0.2 + rnd() * 0.6);
        if (dir === "v") d += "M" + P2(y * (Ww / 1000), x * (1000 / Ww)) + " L" + P2(y * (Ww / 1000) - h / 2, x * (1000 / Ww) + w) + " L" + P2(y * (Ww / 1000) + h / 2, x * (1000 / Ww) + w) + "Z";
        else if (dir === "diag") d += "M" + P2(x, y) + " L" + P2(x + w * 0.8, y - w * 0.5 - h / 2) + " L" + P2(x + w * 0.8, y - w * 0.5 + h / 2) + "Z";
        else d += "M" + P2(x, y) + " L" + P2(x + w, y - h / 2) + " L" + P2(x + w, y + h / 2) + "Z";
      }
      vars.push(svgEl("path", { d: d, fill: color, display: "none" }, grp));
    }
    from = clampT(from); to = to == null ? 1e9 : to;
    this.onFrame(function (t) {
      var on = t >= from && t < to;
      setD(grp, on);
      if (!on) return;
      var k = Math.floor(t * 14) % 2;
      setD(vars[0], k === 0); setD(vars[1], k === 1);
      setA(grp, "transform", dir === "v" ? "translate(0," + fx(-((t * 900) % 60)) + ")" : "translate(" + fx(((t * 1400) % 80) * (dir === "left" ? 1 : -1)) + ",0)");
    });
    return grp;
  };
  /** manga impact: inverted frame, burst polygon, flash, shake. opts: { x, y, shake, flash, invert, dur } */
  STP.impact = function (at, opts) {
    opts = opts || {};
    at = clampT(at);
    this.impacts.push({ t: at, inv: opts.invert === false ? 0 : num(opts.dur, 0.1) });
    this.flash(at + 0.08, opts.flash || this.paper, 0.28, 0.8);
    this.shake(at, num(opts.shake, 20), 0.45);
    var Ww = this.Ww, cx = num(opts.x, Ww / 2), cy = num(opts.y, 500);
    var gB = g(this.topSvg, { display: "none" }), rnd = V.makeRand(Math.round(at * 1000) + 77), d = "", R = Math.max(Ww, 1000) * 1.3;
    for (var i = 0; i < 30; i++) {
      var a = (i / 30) * 2 * PI + rnd() * 0.14, w = 0.02 + rnd() * 0.04, r0 = 90 + rnd() * 140;
      d += "M" + P2(cx + Math.cos(a) * r0, cy + Math.sin(a) * r0) + " L" + P2(cx + Math.cos(a - w) * R, cy + Math.sin(a - w) * R) + " L" + P2(cx + Math.cos(a + w) * R, cy + Math.sin(a + w) * R) + "Z";
    }
    svgEl("path", { d: d, fill: this.ink, opacity: 0.92 }, gB);
    // jagged impact star
    var sd = "", pts = 14;
    for (var j = 0; j < pts * 2; j++) {
      var ang = (j / (pts * 2)) * 2 * PI, rr = j % 2 ? 60 + rnd() * 30 : 150 + rnd() * 80;
      sd += (j ? " L" : "M") + P2(cx + Math.cos(ang) * rr, cy + Math.sin(ang) * rr);
    }
    svgEl("path", { d: sd + "Z", fill: this.paper, stroke: this.ink, "stroke-width": 8 }, gB);
    svgEl("path", { d: sd + "Z", fill: "none", stroke: RED, "stroke-width": 4, transform: "translate(" + P2(cx, cy) + ") scale(0.8) translate(" + P2(-cx, -cy) + ")" }, gB);
    this.onFrame(function (t) { setD(gB, t >= at && t < at + 0.14); });
    return this;
  };
  /** ink splash transition: blobs grow from a point to cover the frame, then fall away. opts: { x, y, color, dur } */
  STP.splash = function (at, opts) {
    opts = opts || {};
    at = clampT(at);
    var Ww = this.Ww, cx = num(opts.x, Ww / 2), cy = num(opts.y, 500), color = opts.color || this.ink, dur = num(opts.dur, 0.55);
    var grp = g(this.topSvg, { display: "none" });
    var rnd = V.makeRand(Math.round(at * 777) + 31), d = "";
    var R = Math.max(Ww, 1000);
    d += ellD(0, 0, R * 0.62, R * 0.55);
    for (var i = 0; i < 26; i++) {
      var a = rnd() * 2 * PI, dist = R * (0.45 + rnd() * 0.45), r = R * (0.05 + rnd() * 0.14);
      d += " " + ellD(Math.cos(a) * dist, Math.sin(a) * dist, r, r * (0.7 + rnd() * 0.5));
    }
    for (var j = 0; j < 40; j++) {
      var a2 = rnd() * 2 * PI, d2 = R * (0.7 + rnd() * 0.6), r2 = R * (0.006 + rnd() * 0.02);
      d += " " + ellD(Math.cos(a2) * d2, Math.sin(a2) * d2, r2, r2);
    }
    var p = svgEl("path", { d: d, fill: color }, grp);
    var self = this;
    this.onFrame(function (t) {
      var lt = t - at, on = lt >= -0.001 && lt < dur;
      setD(grp, on);
      if (!on) return;
      var p1 = clamp(lt / (dur * 0.42), 0, 1), s = EASE.whip(p1) * 1.15;
      var out = clamp((lt - dur * 0.55) / (dur * 0.45), 0, 1);
      setA(p, "transform", "translate(" + P2(cx, cy + out * out * 1400) + ") scale(" + fx(Math.max(0.001, s) * 100) / 100 + ")");
      setA(p, "opacity", String(1 - out * 0.3));
    });
    return this;
  };
  /** ink drips / splatter dots around a point (static decoration) */
  STP.splatter = function (parent, x, y, r, seed, color) {
    var rnd = V.makeRand(seed || 9), d = "";
    for (var i = 0; i < 18; i++) {
      var a = rnd() * 2 * PI, dist = r * (0.3 + rnd() * 0.9), rr = r * (0.02 + rnd() * 0.06);
      d += ellD(x + Math.cos(a) * dist, y + Math.sin(a) * dist, rr, rr * (0.6 + rnd() * 0.6)) + " ";
    }
    return svgEl("path", { d: d, fill: color || this.ink }, parent);
  };
  /** hatched ground line + shadow under a figure */
  STP.floor = function (x, y, w, opts) {
    opts = opts || {};
    var grp = g(this.ground), rnd = V.makeRand(5 + Math.round(x));
    var x0 = x - w / 2, x1 = x + w / 2;
    svgEl("path", { d: roughD([[x0, y], [x0 + w * 0.3, y + 1], [x0 + w * 0.6, y - 1], [x1, y]], rnd, 4), stroke: this.ink, "stroke-width": opts.thin ? 3 : 6, fill: "none", "stroke-linecap": "round" }, grp);
    var d = "";
    for (var i = 0; i < w / 26; i++) { var hx = x0 + 10 + i * 26 + rnd() * 8; d += "M" + P2(hx, y + 6) + " L" + P2(hx - 22, y + 30 + rnd() * 10) + " "; }
    svgEl("path", { d: d, stroke: this.ink, "stroke-width": 2.2, fill: "none", "stroke-linecap": "round", opacity: 0.8 }, grp);
    if (opts.shadow !== false) svgEl("path", { d: ellD(x, y + 4, w * 0.3, 10), fill: this.pHatch2, opacity: 0.9 }, grp);
    return grp;
  };

  // ───────────────────────── cast & builds ─────────────────────────
  // Figure-local units: origin = the ground point under the figure, y down, facing +x. Standing height ≈ 640.
  var SEG = { torso: 170, neck: 36, ua: 120, fa: 112, hand: 34, th: 160, sh: 150, ft: 52 };
  // limb spec: w0 proximal / w1 distal half-widths; F/B = front/back bulge { w: half-width at the belly, pos: 0–1 along the bone }
  var BUILDS = {
    lean: { shw: 82, wa: 44, hp: 50, neck: 17, head: 1, belly: 0, trap: 18, lines: true,
      ua: [26, 34, 19], fa: [22, 27, 11], th: [36, 44, 23], sh: [24, 34, 12],
      uaS: { w0: 26, w1: 19, F: { w: 35, pos: 0.44 }, B: { w: 29, pos: 0.5 } }, faS: { w0: 23, w1: 11, F: { w: 28, pos: 0.26 }, B: { w: 22, pos: 0.3 } },
      thS: { w0: 36, w1: 23, F: { w: 45, pos: 0.4 }, B: { w: 40, pos: 0.45 } }, shS: { w0: 24, w1: 12, F: { w: 24, pos: 0.3 }, B: { w: 35, pos: 0.27 } } },
    big: { shw: 136, wa: 104, hp: 94, neck: 42, head: 1.1, belly: 30, trap: 46, lines: true,
      ua: [44, 60, 32], fa: [38, 46, 20], th: [58, 70, 38], sh: [38, 52, 20],
      uaS: { w0: 44, w1: 32, F: { w: 60, pos: 0.44 }, B: { w: 50, pos: 0.5 } }, faS: { w0: 38, w1: 20, F: { w: 46, pos: 0.28 }, B: { w: 38, pos: 0.3 } },
      thS: { w0: 58, w1: 38, F: { w: 70, pos: 0.4 }, B: { w: 64, pos: 0.45 } }, shS: { w0: 38, w1: 20, F: { w: 38, pos: 0.3 }, B: { w: 52, pos: 0.27 } } },
    soft: { shw: 64, wa: 64, hp: 62, neck: 18, head: 1, belly: 28, trap: 6, lines: false, soft: true,
      ua: [22, 23, 17], fa: [18, 19, 11], th: [32, 33, 22], sh: [21, 24, 12],
      uaS: { w0: 22, w1: 17, F: { w: 23, pos: 0.45 }, B: { w: 23, pos: 0.5 } }, faS: { w0: 18, w1: 11, F: { w: 19, pos: 0.3 }, B: { w: 18, pos: 0.3 } },
      thS: { w0: 32, w1: 22, F: { w: 33, pos: 0.45 }, B: { w: 33, pos: 0.45 } }, shS: { w0: 21, w1: 12, F: { w: 21, pos: 0.3 }, B: { w: 24, pos: 0.3 } } },
  };
  var CAST = {
    rook: { name: "Rook", role: "lean calisthenics protagonist — white spiky hair, sharp jaw, orange shorts, wiry tendon-strong build", build: "lean", hair: "spiky", shorts: "orange", expr: "focus" },
    brick: { name: "Brick", role: "hulking heavy rival — buzz cut, heavy brow, stubble, thick neck, dark hatched shorts, all mass", build: "big", hair: "buzz", shorts: "dark", expr: "scowl" },
  };
  S.CAST = CAST;
  var CAST_ALIASES = { hero: "rook", lean: "rook", protagonist: "rook", athlete: "rook", skinny: "rook", big: "brick", rival: "brick", heavy: "brick", bodybuilder: "brick", giant: "brick", bulk: "brick" };
  function castId(name) { var k = str(name).toLowerCase().trim(); if (CAST[k]) return k; return CAST_ALIASES[k] || "rook"; }

  // ───────────────────────── poses (facing +x) ─────────────────────────
  // limb angles: 0 = straight down, 90 = forward, 180 = up, -90 = back. tor: 0 = upright, + = lean forward.
  // head: tilt relative to torso (+ = nod forward). hx/hy: hip position relative to the ground point.
  var STAND = { hx: 0, hy: -326, tor: 0, head: 0, uaN: 10, faN: 14, uaF: -8, faF: -2, thN: 5, shN: -3, thF: -5, shF: 3, ftN: 90, ftF: 90, hdN: 14, hdF: -2 };
  function pose(o) { var p = {}; for (var k in STAND) p[k] = o[k] != null ? o[k] : STAND[k]; if (o.hdN == null) p.hdN = p.faN; if (o.hdF == null) p.hdF = p.faF; return p; }
  var POSES = {
    stand: pose({}),
    "stand-b": pose({ hy: -323, tor: 1.5, head: 1 }),
    flex: pose({ tor: -5, head: -5, uaN: 100, faN: 192, uaF: 96, faF: 188, hdN: 200, hdF: 196 }),
    point: pose({ uaN: 92, faN: 94, uaF: -6, faF: -2, head: -2, hdN: 94 }),
    cheer: pose({ uaN: 165, faN: 178, uaF: 160, faF: 176, tor: -3, head: -6, hy: -332, ftN: 110, ftF: 110, hdN: 182, hdF: 180 }),
    slouch: pose({ tor: 10, head: 18, hy: -316, uaN: 14, faN: 8, uaF: 2, faF: 0, thN: 8, thF: -2, shN: -6 }),
    crossed: pose({ uaN: 40, faN: -95, uaF: 30, faF: -90, hdN: -95, hdF: -90, head: -2 }),
    hips: pose({ uaN: -30, faN: 42, uaF: -32, faF: 40, hdN: 42, hdF: 40 }),
    "pushup-up": pose({ hy: -150, tor: 61, head: -58, uaN: 0, faN: 0, uaF: 2, faF: 0, thN: -112, shN: -113, thF: -114, shF: -112, ftN: -35, ftF: -35, hdN: 90, hdF: 90 }),
    "pushup-down": pose({ hy: -50, tor: 81, head: -72, uaN: -80, faN: 60, uaF: -78, faF: 58, thN: -88, shN: -88, thF: -90, shF: -88, ftN: -35, ftF: -35, hdN: 90, hdF: 90 }),
    plank: pose({ hy: -80, tor: 74, head: -62, uaN: 12, faN: 90, uaF: 10, faF: 88, thN: -80, shN: -80, thF: -82, shF: -80, ftN: -35, ftF: -35, hdN: 90, hdF: 90 }),
    "plank-b": pose({ hy: -86, tor: 75, head: -63, uaN: 12, faN: 90, uaF: 10, faF: 88, thN: -81, shN: -81, thF: -83, shF: -81, ftN: -35, ftF: -35, hdN: 90, hdF: 90 }),
    planche: pose({ hy: -236, tor: 90, head: -72, uaN: 8, faN: 2, uaF: 10, faF: 4, thN: -92, shN: -92, thF: -94, shF: -92, ftN: -135, ftF: -135, hdN: 90, hdF: 90 }),
    "planche-b": pose({ hy: -231, tor: 91, head: -73, uaN: 6, faN: 2, uaF: 8, faF: 4, thN: -93, shN: -93, thF: -95, shF: -93, ftN: -135, ftF: -135, hdN: 90, hdF: 90 }),
    hang: pose({ hy: -300, tor: 4, head: -6, uaN: 178, faN: 180, uaF: 176, faF: 182, thN: 2, shN: -4, thF: -2, shF: 2, ftN: 40, ftF: 40, hdN: 180, hdF: 182 }),
    "hang-b": pose({ hy: -296, tor: 5, head: -5, uaN: 178, faN: 180, uaF: 176, faF: 182, thN: 3, shN: -5, thF: -3, shF: 3, ftN: 40, ftF: 40, hdN: 180, hdF: 182 }),
    "pullup-up": pose({ hx: 30, hy: -520, tor: 8, head: -10, uaN: -30, faN: 172, uaF: -34, faF: 174, thN: 20, shN: -60, thF: 16, shF: -56, ftN: 40, ftF: 40, hdN: 176, hdF: 178 }),
    "squat-up": pose({ uaN: 88, faN: 90, uaF: 84, faF: 88, hdN: 90, hdF: 88 }),
    "squat-down": pose({ hx: -30, hy: -172, tor: 32, head: -20, uaN: 60, faN: 95, uaF: 56, faF: 92, thN: 60, shN: -53, thF: 58, shF: -51, hdN: 95, hdF: 92 }),
    "lift-a": pose({ hx: -10, hy: -250, tor: 60, head: -45, uaN: 30, faN: 20, uaF: 26, faF: 16, thN: 45, shN: -42, thF: 43, shF: -40, hdN: 20, hdF: 16 }),
    "lift-b": pose({ hy: -322, tor: -8, head: 6, uaN: 30, faN: 100, uaF: 26, faF: 96, hdN: 100, hdF: 96 }),
    "curl-a": pose({ uaN: 6, faN: 10, uaF: -8, faF: -2, hdN: 10 }),
    "curl-b": pose({ uaN: 2, faN: 160, uaF: -8, faF: -2, hdN: 170, head: -3 }),
    "dip-up": pose({ hy: -430, tor: 6, head: -4, uaN: 4, faN: 0, uaF: 2, faF: -2, thN: -30, shN: -110, thF: -32, shF: -108, ftN: 20, ftF: 20, hdN: 0, hdF: -2 }),
    "dip-down": pose({ hy: -340, tor: 14, head: -8, uaN: -50, faN: 48, uaF: -52, faF: 46, thN: -30, shN: -110, thF: -32, shF: -108, ftN: 20, ftF: 20, hdN: 48, hdF: 46 }),
    handstand: pose({ hy: -405, tor: 180, head: -34, uaN: 0, faN: 0, uaF: 2, faF: 0, thN: 180, shN: 182, thF: 178, shF: 180, ftN: 180, ftF: 180, hdN: 90, hdF: 90 }),
    "handstand-b": pose({ hy: -403, tor: 182, head: -35, uaN: 0, faN: 0, uaF: 2, faF: 0, thN: 178, shN: 180, thF: 176, shF: 178, ftN: 180, ftF: 180, hdN: 90, hdF: 90 }),
    "run-a": pose({ hy: -330, tor: 14, head: -10, uaN: -55, faN: 40, uaF: 75, faF: 150, thN: 70, shN: 20, thF: -60, shF: -120, ftN: 100, ftF: 10, hdN: 40, hdF: 150 }),
    "run-b": pose({ hy: -345, tor: 14, head: -10, uaN: 75, faN: 150, uaF: -55, faF: 40, thN: -60, shN: -120, thF: 70, shF: 20, ftN: 10, ftF: 100, hdN: 150, hdF: 40 }),
    "lunge-a": pose({ uaN: -20, faN: 40, uaF: -22, faF: 38, hdN: 40, hdF: 38 }),
    "lunge-b": pose({ hx: 50, hy: -270, tor: 5, head: 0, uaN: -22, faN: 42, uaF: -24, faF: 40, thN: 45, shN: 22, thF: -40, shF: -20, ftN: 90, ftF: 20, hdN: 42, hdF: 40 }),
    "tug-a": pose({ hy: -290, tor: -28, head: 20, uaN: 70, faN: 92, uaF: 66, faF: 90, thN: 50, shN: 8, thF: 10, shF: -40, ftN: 90, ftF: 40, hdN: 92, hdF: 90 }),
    "tug-b": pose({ hx: -25, hy: -270, tor: -38, head: 24, uaN: 55, faN: 115, uaF: 52, faF: 112, thN: 55, shN: 15, thF: 8, shF: -45, ftN: 90, ftF: 40, hdN: 115, hdF: 112 }),
    fall: pose({ hx: 30, hy: -300, tor: 40, head: 10, uaN: 100, faN: 120, uaF: 90, faF: 110, thN: 30, shN: -30, thF: -20, shF: -10, hdN: 120, hdF: 110 }),
    kneel: pose({ hy: -175, tor: 12, head: 10, uaN: 20, faN: 60, uaF: 16, faF: 56, thN: 85, shN: -92, thF: -10, shF: -96, ftN: 90, ftF: -60, hdN: 60, hdF: 56 }),
    strain: pose({ tor: 6, head: 8, uaN: 60, faN: 150, uaF: 56, faF: 146, hdN: 160, hdF: 156 }),
  };
  var POSE_ALIASES = { idle: "stand", rest: "stand", standing: "stand", "double-biceps": "flex", flexing: "flex", pointing: "point", present: "point", victory: "cheer", "arms-up": "cheer", celebrate: "cheer", before: "slouch", weak: "slouch", "arms-crossed": "crossed", "hands-on-hips": "hips", confident: "hips", pushup: "pushup-up", "push-up": "pushup-up", pullup: "pullup-up", "pull-up": "pullup-up", squat: "squat-down", deadlift: "lift-a", lift: "lift-b", curl: "curl-b", dip: "dip-down", sprint: "run-a", run: "run-a", running: "run-a", lunge: "lunge-b", tug: "tug-b", pull: "tug-b", heave: "tug-b", lose: "fall", stumble: "fall", defeated: "fall", "dead-hang": "hang", effort: "strain" };
  function poseName(n) { n = str(n).toLowerCase().trim(); if (POSES[n]) return n; return POSE_ALIASES[n] || "stand"; }
  S.POSES = POSES;

  var EXERCISES = {
    pushup: { poses: ["pushup-up", "pushup-down"], period: 1.7, shake: 1.6, muscle: "chest", label: "Push-ups", floor: true },
    pullup: { poses: ["hang", "pullup-up"], period: 2.0, shake: 1.6, muscle: "lats", label: "Pull-ups", prop: "bar" },
    squat: { poses: ["squat-up", "squat-down"], period: 1.9, shake: 1.0, muscle: "quads", label: "Squats", floor: true },
    plank: { poses: ["plank", "plank-b"], period: 1.3, shake: 2.6, muscle: "abs", label: "Plank", floor: true, tremble: true },
    planche: { poses: ["planche", "planche-b"], period: 1.2, shake: 3.0, muscle: "shoulders", label: "Planche", floor: true, tremble: true },
    sprint: { poses: ["run-a", "run-b"], period: 0.42, shake: 0, muscle: "calves", label: "Sprint", floor: true, speed: true },
    tug: { poses: ["tug-a", "tug-b"], period: 1.1, shake: 1.8, muscle: "forearms", label: "Tug-of-war", floor: true, prop: "rope" },
    lift: { poses: ["lift-a", "lift-b"], period: 2.3, shake: 1.6, muscle: "back", label: "Boulder lift", floor: true, prop: "boulder" },
    curl: { poses: ["curl-a", "curl-b"], period: 1.5, shake: 0.8, muscle: "biceps", label: "Curls", floor: true, prop: "dumbbell" },
    dip: { poses: ["dip-up", "dip-down"], period: 1.7, shake: 1.2, muscle: "triceps", label: "Dips", prop: "dipbars" },
    hang: { poses: ["hang", "hang-b"], period: 1.6, shake: 1.4, muscle: "grip", label: "Dead hang", prop: "bar", tremble: true },
    handstand: { poses: ["handstand", "handstand-b"], period: 1.5, shake: 2.2, muscle: "shoulders", label: "Handstand", floor: true, tremble: true },
    flex: { poses: ["stand", "flex"], period: 2.6, shake: 0.6, muscle: "biceps", label: "Flex", floor: true, hold: true },
    lunge: { poses: ["lunge-a", "lunge-b"], period: 1.9, shake: 0.8, muscle: "glutes", label: "Lunges", floor: true },
    idle: { poses: ["stand", "stand-b"], period: 2.8, shake: 0, muscle: "none", label: "", floor: true },
  };
  var EX_ALIASES = { "push-up": "pushup", pushups: "pushup", "push-ups": "pushup", "pull-up": "pullup", pullups: "pullup", "pull-ups": "pullup", chinup: "pullup", "chin-up": "pullup", squats: "squat", run: "sprint", running: "sprint", "tug-of-war": "tug", "tug of war": "tug", rope: "tug", boulder: "lift", deadlift: "lift", curls: "curl", "bicep-curl": "curl", dips: "dip", "dead-hang": "hang", "deadhang": "hang", "hanging": "hang", lunges: "lunge", stand: "idle", rest: "idle", none: "idle", flexing: "flex", "double-biceps": "flex" };
  function exName(n) { n = str(n).toLowerCase().trim(); if (EXERCISES[n]) return n; return EX_ALIASES[n] || "pushup"; }
  S.EXERCISES = EXERCISES;

  // ───────────────────────── expressions ─────────────────────────
  // brow: + = angry (inner end down), lid 0..1, mouth: line|open|grit|smile|o|frown, eyes: open|closed|wide
  var EXPR = {
    neutral: { brow: 0, lid: 0.1, mouth: "line", eyes: "open" },
    focus: { brow: 4, lid: 0.3, mouth: "line", eyes: "open" },
    strain: { brow: 9, lid: 0, mouth: "grit", eyes: "closed", sweat: true },
    shout: { brow: 8, lid: 0, mouth: "open", eyes: "open", wide: true },
    smirk: { brow: -1, lid: 0.35, mouth: "smile", eyes: "open" },
    proud: { brow: -3, lid: 0.2, mouth: "smile", eyes: "open" },
    shock: { brow: -8, lid: 0, mouth: "o", eyes: "wide" },
    scowl: { brow: 7, lid: 0.4, mouth: "frown", eyes: "open" },
    tired: { brow: -5, lid: 0.55, mouth: "frown", eyes: "open", sweat: true },
    calm: { brow: 0, lid: 0.3, mouth: "smile", eyes: "open" },
  };
  var EXPR_ALIASES = { determined: "focus", serious: "focus", effort: "strain", grit: "strain", pain: "strain", yell: "shout", roar: "shout", angry: "scowl", mad: "scowl", smug: "smirk", happy: "proud", smile: "proud", confident: "proud", surprised: "shock", wow: "shock", scared: "shock", exhausted: "tired", weak: "tired", sad: "tired", relaxed: "calm" };
  function exprName(n) { n = str(n).toLowerCase().trim(); if (EXPR[n]) return n; return EXPR_ALIASES[n] || "neutral"; }
  S.EXPRESSIONS = EXPR;

  // ───────────────────────── muscle highlight map ─────────────────────────
  // entries: [segment, kind, params]. x = sideways offset (fraction of belly width; + = front side), pos = along the bone (0..1)
  var HL = {
    biceps: [["uaN", "muscle", { x: 0.55, pos: 0.46, ry: 0.3 }], ["uaF", "muscle", { x: 0.55, pos: 0.46, ry: 0.3 }]],
    triceps: [["uaN", "muscle", { x: -0.55, pos: 0.5, ry: 0.32 }], ["uaF", "muscle", { x: -0.55, pos: 0.5, ry: 0.32 }]],
    forearms: [["faN", "muscle", { x: 0.2, pos: 0.36, ry: 0.3 }], ["faF", "muscle", { x: 0.2, pos: 0.36, ry: 0.3 }]],
    grip: [["faN", "tendon", { x: 0.1, pos: 0.86, ry: 0.13 }], ["faF", "tendon", { x: 0.1, pos: 0.86, ry: 0.13 }], ["hdN", "muscle", { x: 0, pos: 0.5, ry: 0.4, rx: 0.9 }], ["hdF", "muscle", { x: 0, pos: 0.5, ry: 0.4, rx: 0.9 }]],
    shoulders: [["uaN", "muscle", { x: 0, pos: 0.1, ry: 0.2, rx: 1.0 }], ["uaF", "muscle", { x: 0, pos: 0.1, ry: 0.2, rx: 1.0 }]],
    chest: [["tor", "pec", {}]],
    abs: [["tor", "abs", {}]],
    lats: [["tor", "back", {}]],
    back: [["tor", "back", {}], ["tor", "lowback", {}]],
    glutes: [["thN", "muscle", { x: -0.55, pos: 0.08, ry: 0.16, rx: 0.9 }], ["thF", "muscle", { x: -0.55, pos: 0.08, ry: 0.16, rx: 0.9 }]],
    quads: [["thN", "muscle", { x: 0.45, pos: 0.45, ry: 0.33 }], ["thF", "muscle", { x: 0.45, pos: 0.45, ry: 0.33 }]],
    hamstrings: [["thN", "muscle", { x: -0.5, pos: 0.5, ry: 0.33 }], ["thF", "muscle", { x: -0.5, pos: 0.5, ry: 0.33 }]],
    calves: [["shN", "muscle", { x: -0.5, pos: 0.3, ry: 0.28 }], ["shF", "muscle", { x: -0.5, pos: 0.3, ry: 0.28 }]],
    achilles: [["shN", "tendon", { x: -0.35, pos: 0.84, ry: 0.15 }], ["shF", "tendon", { x: -0.35, pos: 0.84, ry: 0.15 }]],
    patellar: [["shN", "tendon", { x: 0.5, pos: 0.07, ry: 0.1 }], ["shF", "tendon", { x: 0.5, pos: 0.07, ry: 0.1 }]],
    "elbow-tendon": [["faN", "tendon", { x: -0.3, pos: 0.06, ry: 0.11 }], ["faF", "tendon", { x: -0.3, pos: 0.06, ry: 0.11 }], ["uaN", "tendon", { x: 0.3, pos: 0.93, ry: 0.1 }], ["uaF", "tendon", { x: 0.3, pos: 0.93, ry: 0.1 }]],
    tendons: [],
    bones: [],
    arms: [], legs: [], core: [], full: [], none: [],
  };
  HL.tendons = HL.achilles.concat(HL.patellar, HL["elbow-tendon"], HL.grip.slice(0, 2));
  HL.arms = HL.biceps.concat(HL.forearms, HL.shoulders);
  HL.legs = HL.quads.concat(HL.calves, HL.glutes);
  HL.core = HL.abs.concat(HL.lats);
  HL.full = HL.arms.concat(HL.legs, HL.chest, HL.abs, HL.lats);
  ["tor", "uaN", "uaF", "faN", "faF", "thN", "thF", "shN", "shF"].forEach(function (s) { HL.bones.push([s, "bone", {}]); });
  var HL_ALIASES = { bicep: "biceps", tricep: "triceps", forearm: "forearms", wrist: "grip", hands: "grip", hand: "grip", delts: "shoulders", deltoids: "shoulders", shoulder: "shoulders", pecs: "chest", pectorals: "chest", core: "abs", stomach: "abs", lat: "lats", "upper-back": "lats", "lower-back": "back", spine: "back", glute: "glutes", butt: "glutes", quad: "quads", quadriceps: "quads", thighs: "quads", hamstring: "hamstrings", calf: "calves", "achilles-tendon": "achilles", heel: "achilles", "knee-tendon": "patellar", knee: "patellar", elbow: "elbow-tendon", tendon: "tendons", bone: "bones", skeleton: "bones", muscles: "full", everything: "full", all: "full", "whole-body": "full", nothing: "none" };
  function hlName(n) { n = str(n).toLowerCase().trim(); if (HL[n]) return n; return HL_ALIASES[n] || "none"; }
  S.MUSCLES = Object.keys(HL);

  // ───────────────────────── figure art ─────────────────────────
  function inkPath(parent, d, fill, w, extra) {
    var a = { d: d, fill: fill, stroke: INK, "stroke-width": fx(w || LW), "stroke-linejoin": "round", "stroke-linecap": "round" };
    if (extra) for (var k in extra) a[k] = extra[k];
    return svgEl("path", a, parent);
  }
  function thinLine(parent, d, w, extra) {
    var a = { d: d, fill: "none", stroke: INK, "stroke-width": fx(w || 2.4), "stroke-linecap": "round", "stroke-linejoin": "round" };
    if (extra) for (var k in extra) a[k] = extra[k];
    return svgEl("path", a, parent);
  }
  /** muscular limb outline: bone along +y; separate front (+x) and back bulges */
  function limbD2(L, w0, w1, F, B, open) {
    var fp = L * F.pos, bp = L * B.pos;
    if (open) return "M" + P2(w0, -w0 * 0.25) + " L" + P2(w0, 0) +
      " Q" + P2(F.w * 1.14, fp * 0.5) + " " + P2(F.w, fp) +
      " Q" + P2(F.w * 0.9, fp + (L - fp) * 0.6) + " " + P2(w1, L) +
      " Q" + P2(0, L + w1 * 1.05) + " " + P2(-w1, L) +
      " Q" + P2(-B.w * 0.9, bp + (L - bp) * 0.6) + " " + P2(-B.w, bp) +
      " Q" + P2(-B.w * 1.14, bp * 0.5) + " " + P2(-w0, 0) + " L" + P2(-w0, -w0 * 0.25);
    return "M" + P2(w0, 0) +
      " Q" + P2(F.w * 1.14, fp * 0.5) + " " + P2(F.w, fp) +
      " Q" + P2(F.w * 0.9, fp + (L - fp) * 0.6) + " " + P2(w1, L) +
      " Q" + P2(0, L + w1 * 1.05) + " " + P2(-w1, L) +
      " Q" + P2(-B.w * 0.9, bp + (L - bp) * 0.6) + " " + P2(-B.w, bp) +
      " Q" + P2(-B.w * 1.14, bp * 0.5) + " " + P2(-w0, 0) +
      " Q" + P2(0, -w0 * 0.9) + " " + P2(w0, 0) + "Z";
  }
  function Segment(fig, parent, key, L, W, opts) {
    opts = opts || {};
    this.key = key; this.L = L; this.W = W; this.fig = fig;
    this.g = g(parent, { class: "ia-seg ia-" + key });
    var st = fig.st, kind = opts.kind || key.slice(0, 2), spec = opts.spec, lw = opts.lw || LW;
    var d = opts.d || (spec ? limbD2(L, spec.w0, spec.w1, spec.F, spec.B) : limbD(L, W[0], W[1], W[2], opts.bulge));
    var dOpen = opts.d || !spec ? d : limbD2(L, spec.w0, spec.w1, spec.F, spec.B, true);
    this.d = d;
    if (kind === "ua") {
      // deltoid cap: blends the shoulder into the torso
      var cw = spec ? spec.w0 : W[0], cap = g(this.g), cd = ellD(3, 12, cw * 1.55, cw * 1.3);
      svgEl("path", { d: cd, fill: PAPER }, cap);
      svgEl("path", { d: cd, fill: st.pHatch, mask: st.shadeMask, opacity: 0.95 }, cap);
      svgEl("path", { d: cd, fill: "none", stroke: INK, "stroke-width": fx(lw), "stroke-linejoin": "round" }, cap);
      thinLine(cap, "M" + P2(-cw * 1.1, 26) + " Q" + P2(0, 44) + " " + P2(cw * 1.1, 24), 2.4, { opacity: 0.8 });
    }
    this.fill = svgEl("path", { d: d, fill: PAPER }, this.g);
    this.hatch = svgEl("path", { d: d, fill: st.pHatch, mask: st.shadeMask }, this.g);
    this.hatch2 = svgEl("path", { d: d, fill: st.pCross, mask: st.shadeMask2, opacity: 0.9 }, this.g);
    this.hl = g(this.g);
    this.det = g(this.g);
    this.shadow = svgEl("path", { d: dOpen, fill: "none", stroke: INK, "stroke-width": fx(lw * 2.3), mask: st.shadeMask2, "stroke-linejoin": "round", "stroke-linecap": "round" }, this.g);
    this.outline = svgEl("path", { d: dOpen, fill: "none", stroke: INK, "stroke-width": fx(lw), "stroke-linejoin": "round", "stroke-linecap": "round" }, this.g);
    if (opts.lines && fig.build.lines && spec) {
      var F = spec.F, Bk = spec.B, w1 = spec.w1, fp = L * F.pos, bp = L * Bk.pos, det = this.det;
      if (kind === "ua") {
        thinLine(det, "M" + P2(F.w * 0.15, L * 0.2) + " Q" + P2(F.w * 0.72, fp) + " " + P2(F.w * 0.25, L * 0.8), 2.6, { opacity: 0.9 });
        thinLine(det, "M" + P2(-Bk.w * 0.2, L * 0.28) + " Q" + P2(-Bk.w * 0.6, bp) + " " + P2(-Bk.w * 0.2, L * 0.78), 2.2, { opacity: 0.6 });
      } else if (kind === "fa") {
        thinLine(det, "M" + P2(F.w * 0.35, L * 0.1) + " Q" + P2(F.w * 0.6, L * 0.4) + " " + P2(w1 * 0.55, L * 0.86), 2.4, { opacity: 0.85 });
        thinLine(det, "M" + P2(-Bk.w * 0.45, L * 0.14) + " Q" + P2(-Bk.w * 0.5, L * 0.5) + " " + P2(-w1 * 0.5, L * 0.84), 2.2, { opacity: 0.6 });
      } else if (kind === "th") {
        thinLine(det, "M" + P2(F.w * 0.05, L * 0.12) + " Q" + P2(F.w * 0.6, L * 0.48) + " " + P2(w1 * 0.4, L * 0.86), 2.6, { opacity: 0.9 });
        thinLine(det, "M" + P2(-Bk.w * 0.35, L * 0.2) + " Q" + P2(-Bk.w * 0.62, bp) + " " + P2(-w1 * 0.55, L * 0.8), 2.2, { opacity: 0.6 });
        thinLine(det, "M" + P2(-w1 * 0.5, L * 0.93) + " Q" + P2(0, L * 0.98) + " " + P2(w1 * 0.55, L * 0.92), 2.2, { opacity: 0.7 });
      } else if (kind === "sh") {
        thinLine(det, "M" + P2(-Bk.w * 0.2, L * 0.1) + " Q" + P2(-Bk.w * 0.9, bp) + " " + P2(-Bk.w * 0.3, L * 0.58), 2.6, { opacity: 0.9 });
        thinLine(det, "M" + P2(F.w * 0.35, L * 0.14) + " L" + P2(w1 * 0.45, L * 0.9), 2.2, { opacity: 0.6 });
      }
    }
    this.shown = [];
  }
  var SGP = Segment.prototype;
  /** create (once) a highlight node of a kind; returns the node group */
  SGP.hlNode = function (kind, p) {
    var k = kind + ":" + JSON.stringify(p);
    this.hlNodes = this.hlNodes || {};
    if (this.hlNodes[k]) return this.hlNodes[k];
    var L = this.L, W = this.W, w = W[1], grp = g(this.hl, { display: "none" }), st = this.fig.st, inner, node;
    var cx = 0, cy = 0, rx = w, ry = L * 0.25;
    if (kind === "muscle") {
      rx = w * num(p.rx, 0.74); ry = L * num(p.ry, 0.3); cx = w * num(p.x, 0) * 0.55; cy = L * num(p.pos, 0.5);
      inner = g(grp, { transform: "translate(" + P2(cx, cy) + ")" });
      svgEl("ellipse", { cx: 0, cy: 0, rx: fx(rx), ry: fx(ry), fill: st.pStria, stroke: RED2, "stroke-width": 2.6 }, inner);
      thinLine(inner, "M" + P2(-rx * 0.5, -ry * 0.55) + " Q" + P2(-rx * 0.1, 0) + " " + P2(-rx * 0.45, ry * 0.6) + " M" + P2(rx * 0.05, -ry * 0.75) + " Q" + P2(rx * 0.4, 0) + " " + P2(rx * 0.1, ry * 0.75) + " M" + P2(rx * 0.55, -ry * 0.4) + " Q" + P2(rx * 0.75, 0.1 * ry) + " " + P2(rx * 0.5, ry * 0.5), 2.2, { stroke: RED2, opacity: 0.9 });
      node = { g: grp, inner: inner, cx: cx, cy: cy, rx: rx, ry: ry };
    } else if (kind === "tendon") {
      rx = w * num(p.rx, 0.42); ry = L * num(p.ry, 0.12); cx = w * num(p.x, 0) * 0.55; cy = L * num(p.pos, 0.9);
      inner = g(grp, { transform: "translate(" + P2(cx, cy) + ")" });
      svgEl("rect", { x: fx(-rx), y: fx(-ry), width: fx(rx * 2), height: fx(ry * 2), rx: fx(rx * 0.6), fill: st.pStriaT, stroke: RED, "stroke-width": 2.6 }, inner);
      thinLine(inner, "M" + P2(-rx * 0.9, -ry) + " L" + P2(-rx * 0.9, ry) + " M" + P2(rx * 0.9, -ry) + " L" + P2(rx * 0.9, ry), 2.2, { stroke: RED2 });
      node = { g: grp, inner: inner, cx: cx, cy: cy, rx: rx, ry: ry };
    } else if (kind === "bone") {
      rx = Math.max(6, w * 0.22); cx = 0; cy = L / 2; ry = L / 2;
      inner = g(grp);
      svgEl("rect", { x: fx(-rx), y: 10, width: fx(rx * 2), height: fx(L - 20), rx: fx(rx), fill: "#FBE9E9", stroke: RED, "stroke-width": 3 }, inner);
      svgEl("circle", { cx: 0, cy: 6, r: fx(rx * 1.7), fill: "#FBE9E9", stroke: RED, "stroke-width": 3 }, inner);
      svgEl("circle", { cx: 0, cy: fx(L - 6), r: fx(rx * 1.7), fill: "#FBE9E9", stroke: RED, "stroke-width": 3 }, inner);
      node = { g: grp, inner: inner, cx: cx, cy: cy, rx: rx * 2, ry: ry };
    } else if (kind === "pec") {
      inner = g(grp);
      svgEl("path", { d: "M-2,-152 Q44,-150 62,-116 Q54,-92 28,-96 Q4,-102 -2,-152Z", fill: st.pStria, stroke: RED2, "stroke-width": 2.6, "stroke-linejoin": "round" }, inner);
      thinLine(inner, "M8,-140 Q30,-128 46,-112 M4,-124 Q26,-116 38,-104", 2.2, { stroke: RED2 });
      node = { g: grp, inner: inner, cx: 26, cy: -122, rx: 36, ry: 30 };
    } else if (kind === "abs") {
      inner = g(grp);
      for (var r = 0; r < 3; r++) svgEl("rect", { x: 2, y: fx(-104 + r * 28), width: 34, height: 22, rx: 7, fill: st.pStria, stroke: RED2, "stroke-width": 2.4 }, inner);
      node = { g: grp, inner: inner, cx: 19, cy: -60, rx: 22, ry: 44 };
    } else if (kind === "back") {
      inner = g(grp);
      svgEl("path", { d: "M-18,-150 Q-70,-120 -64,-56 Q-44,-66 -30,-96 Q-24,-124 -18,-150Z", fill: st.pStria, stroke: RED2, "stroke-width": 2.6, "stroke-linejoin": "round" }, inner);
      thinLine(inner, "M-30,-132 Q-52,-110 -52,-76 M-24,-120 Q-42,-100 -40,-70", 2.2, { stroke: RED2 });
      node = { g: grp, inner: inner, cx: -44, cy: -104, rx: 26, ry: 44 };
    } else if (kind === "lowback") {
      inner = g(grp);
      svgEl("path", { d: "M-26,-60 Q-46,-40 -44,-4 L-20,2 Q-14,-30 -26,-60Z", fill: st.pStria, stroke: RED2, "stroke-width": 2.6, "stroke-linejoin": "round" }, inner);
      node = { g: grp, inner: inner, cx: -32, cy: -28, rx: 14, ry: 30 };
    } else { node = { g: grp, inner: g(grp), cx: 0, cy: L / 2, rx: w, ry: L / 2 }; }
    node.ring = svgEl("ellipse", { cx: fx(node.cx), cy: fx(node.cy), rx: fx(node.rx * 1.1), ry: fx(node.ry * 1.1), fill: "none", stroke: RED, "stroke-width": 3, display: "none" }, grp);
    node.kind = kind;
    this.hlNodes[k] = node;
    return node;
  };

  // head art (head-local: origin = neck top, +y down, face toward +x)
  var HEADS = {
    lean: {
      skull: "M18,4 C40,-2 48,-20 50,-40 C53,-54 55,-68 46,-82 C34,-106 -4,-116 -32,-104 C-56,-92 -60,-56 -52,-34 C-46,-14 -24,0 -2,2 Z",
      hair: "M44,-86 L64,-124 L38,-108 L44,-154 L16,-114 L8,-162 L-14,-118 L-36,-158 L-40,-114 L-72,-138 L-58,-100 L-86,-98 L-60,-80 L-56,-62 C-40,-88 0,-104 44,-86 Z",
      hairFill: "paper", eye: [34, -62], eyeW: 13, browW: 4.2, noseD: "M48,-56 L56,-44 L46,-40", jaw: "M-8,-8 Q10,-12 22,-28", stubble: null,
    },
    big: {
      skull: "M20,4 C48,-2 58,-22 60,-46 C62,-62 60,-78 50,-92 C36,-110 -12,-116 -42,-102 C-62,-90 -64,-54 -56,-30 C-48,-10 -22,4 -2,4 Z",
      hair: "M48,-88 C36,-114 -4,-124 -36,-110 C-52,-102 -58,-88 -56,-72 L-52,-64 C-32,-92 10,-100 48,-80 Z",
      hairFill: "hatch", eye: [36, -64], eyeW: 11, browW: 6, noseD: "M52,-58 L60,-44 L50,-40", jaw: "M-10,-6 Q14,-12 30,-30", stubble: "M-26,-10 Q8,-6 40,-30 L50,-10 Q24,10 -12,6 Z",
    },
  };

  // ───────────────────────── Figure ─────────────────────────
  var figN = 0;
  function Figure(st, name, opts) {
    opts = opts || {};
    this.st = st;
    this.id = castId(name);
    this.c = CAST[this.id];
    this.build = BUILDS[opts.build && BUILDS[opts.build] ? opts.build : this.c.build];
    this.headStyle = this.build === BUILDS.big ? "big" : "lean";
    this.n = figN++;
    this.x0 = num(opts.x, st.Ww / 2);
    this.y0 = num(opts.y, 820);
    this.s = num(opts.scale, 0.9);
    this.facing = opts.facing === "left" || opts.facing === -1 ? -1 : 1;
    this.seed = (S.hash(this.id) % 991) + this.n * 17;
    this.kf = [{ t: -1, kind: "pose", name: poseName(opts.pose || "stand"), d: 0.01 }];
    if (opts.exercise) this.kf.push({ t: -1, kind: "ex", name: exName(opts.exercise), d: 0.01, period: num(opts.period, EXERCISES[exName(opts.exercise)].period), t0: 0 });
    this.exprs = [{ t: -1, name: exprName(opts.expression || this.c.expr) }];
    this.hls = [{ t: -1, name: "none", nodes: [] }];
    this.pulses = []; this.talks = []; this.shakes = []; this.sweats = []; this.moves = []; this.vis = []; this.faces = [];
    this.shortsStyle = opts.shorts || this.c.shorts;
    this.parent = opts.parent || st.figs;
    this.buildArt();
    st.figures.push(this);
    if (opts.highlight) this.highlight(opts.highlight, 0);
  }
  S.Figure = Figure;
  var FP = Figure.prototype;

  FP.buildArt = function () {
    var B = this.build, st = this.st, self = this;
    var root = (this.root = g(this.parent, { class: "ia-fig ia-" + this.id }));
    var body = (this.body = g(root));
    this.seg = {};
    function limb(key, L, W, opts) { return (self.seg[key] = new Segment(self, body, key, L, W, opts)); }
    // far arm, far leg, torso, near leg, head, near arm (draw order)
    this.seg.uaF = limb("uaF", SEG.ua, B.ua, { lines: true, spec: B.uaS });
    this.seg.faF = limb("faF", SEG.fa, B.fa, { lines: true, spec: B.faS });
    this.seg.hdF = this.hand("hdF");
    this.seg.thF = limb("thF", SEG.th, B.th, { lines: true, spec: B.thS });
    this.shortsF = this.shorts(this.seg.thF);
    this.seg.shF = limb("shF", SEG.sh, B.sh, { lines: true, spec: B.shS });
    this.seg.ftF = this.foot("ftF");
    this.torso();
    this.seg.thN = limb("thN", SEG.th, B.th, { lines: true, spec: B.thS });
    this.shortsN = this.shorts(this.seg.thN);
    this.seg.shN = limb("shN", SEG.sh, B.sh, { lines: true, spec: B.shS });
    this.seg.ftN = this.foot("ftN");
    this.head();
    this.seg.uaN = limb("uaN", SEG.ua, B.ua, { lines: true, spec: B.uaS });
    this.seg.faN = limb("faN", SEG.fa, B.fa, { lines: true, spec: B.faS });
    this.seg.hdN = this.hand("hdN");
    // far limbs slightly toned down (depth)
    [this.seg.uaF, this.seg.faF, this.seg.thF, this.seg.shF].forEach(function (sg) { sg.hatch.setAttribute("fill", st.pCross); sg.hatch.setAttribute("opacity", "0.8"); sg.hatch2.setAttribute("opacity", "0.5"); });
    [this.seg.hdF.g, this.seg.ftF.g].forEach(function (gg) { gg.setAttribute("opacity", "0.92"); });
    // sweat drops
    this.sweatG = g(root, { display: "none" });
    this.drops = [];
    for (var i = 0; i < 5; i++) {
      var dg = g(this.sweatG);
      inkPath(dg, "M0,-14 C6,-4 9,2 9,7 A9,9 0 1 1 -9,7 C-9,2 -6,-4 0,-14Z", PAPER, 3);
      this.drops.push(dg);
    }
    // effort marks (manga strain lines around the head)
    this.strainG = g(root, { display: "none" });
    thinLine(this.strainG, "M-30,-20 L-46,-34 M-36,0 L-56,0 M-30,20 L-46,34 M30,-20 L46,-34 M36,0 L56,0 M30,20 L46,34", 4);
  };
  FP.hand = function (key) {
    var W = this.build.fa, w = W[0] * 0.62, L = SEG.hand;
    var sg = { key: key, g: g(this.body, { class: "ia-seg ia-" + key }), L: L, W: [w, w * 1.15, w * 0.8], fig: this };
    var d = "M" + P2(-w, 0) + " Q" + P2(-w * 1.25, L * 0.55) + " " + P2(-w * 0.6, L) + " Q" + P2(0, L * 1.15) + " " + P2(w * 0.7, L) + " Q" + P2(w * 1.3, L * 0.5) + " " + P2(w, 0) + "Z";
    sg.d = d;
    sg.fill = svgEl("path", { d: d, fill: PAPER }, sg.g);
    sg.hatch = svgEl("path", { d: d, fill: this.st.pHatch2, mask: this.st.shadeMask, opacity: 0.9 }, sg.g);
    sg.hl = g(sg.g);
    sg.det = g(sg.g);
    thinLine(sg.det, "M" + P2(-w * 0.55, L * 0.5) + " L" + P2(w * 0.65, L * 0.45) + " M" + P2(-w * 0.35, L * 0.78) + " L" + P2(w * 0.5, L * 0.74), 2.2, { opacity: 0.8 });
    sg.outline = svgEl("path", { d: d, fill: "none", stroke: INK, "stroke-width": fx(LW * 0.9), "stroke-linejoin": "round" }, sg.g);
    sg.hlNode = SGP.hlNode;
    return sg;
  };
  FP.foot = function (key) {
    var w = this.build.sh[0] * 0.6, L = SEG.ft * (this.build === BUILDS.big ? 1.15 : 1);
    var sg = { key: key, g: g(this.body, { class: "ia-seg ia-" + key }), L: L, W: [w, w, w], fig: this };
    var d = "M" + P2(w * 0.8, -12) + " L" + P2(w * 0.9, 8) + " Q" + P2(w * 0.7, L * 0.8) + " " + P2(w * 0.2, L) + " L" + P2(-w * 1.05, L * 0.98) + " L" + P2(-w * 1.1, 6) + " Q" + P2(-w * 1.0, -12) + " " + P2(-w * 0.6, -14) + "Z";
    sg.d = d;
    sg.fill = svgEl("path", { d: d, fill: PAPER }, sg.g);
    sg.hatch = svgEl("path", { d: d, fill: this.st.pHatch2, mask: this.st.shadeMask, opacity: 0.9 }, sg.g);
    sg.hl = g(sg.g);
    sg.det = g(sg.g);
    thinLine(sg.det, "M" + P2(-w * 0.9, L * 0.55) + " L" + P2(w * 0.5, L * 0.6), 2.2, { opacity: 0.7 });
    sg.outline = svgEl("path", { d: d, fill: "none", stroke: INK, "stroke-width": fx(LW * 0.9), "stroke-linejoin": "round" }, sg.g);
    sg.hlNode = SGP.hlNode;
    return sg;
  };
  FP.shorts = function (th) {
    var hp = this.build.hp, w0 = th.W[0] * 1.12, L = SEG.th * 0.46, st = this.st, top = -hp * 0.55;
    var d = "M" + P2(-hp * 0.95, top) + " L" + P2(hp * 0.98, top) + " Q" + P2(hp * 1.0, L * 0.3) + " " + P2(w0 * 0.98, L) + " L" + P2(-w0 * 0.92, L) + " Q" + P2(-hp * 0.98, L * 0.3) + " " + P2(-hp * 0.95, top) + "Z";
    var grp = g(th.g);
    svgEl("path", { d: d, fill: this.shortsStyle === "dark" ? st.pCross : this.shortsStyle === "orange" ? st.pOrange : PAPER }, grp);
    if (this.shortsStyle === "dark") svgEl("path", { d: d, fill: INK, opacity: 0.35 }, grp);
    svgEl("path", { d: d, fill: "none", stroke: INK, "stroke-width": fx(LW * 0.9), "stroke-linejoin": "round" }, grp);
    thinLine(grp, "M" + P2(-w0 * 0.85, L) + " L" + P2(w0 * 0.9, L), 2.4);
    thinLine(grp, "M" + P2(w0 * 0.2, top + 10) + " Q" + P2(w0 * 0.45, L * 0.5) + " " + P2(w0 * 0.3, L - 8), 2.2, { opacity: 0.6 });
    return grp;
  };
  FP.torso = function () {
    var B = this.build, st = this.st, sh = B.shw, wa = B.wa, hp = B.hp, tr = B.trap, nk = B.neck, belly = B.belly;
    var d = "M" + P2(nk, -178) +
      " Q" + P2(sh * 0.55, -172 + tr * 0.1) + " " + P2(sh, -158) +
      " Q" + P2(sh * 1.05, -128) + " " + P2(sh * 0.96, -102) +
      " Q" + P2(sh * 0.78, -72) + " " + P2(wa + belly * 0.55, -40) +
      " Q" + P2(hp * 1.03, -12) + " " + P2(hp * 0.86, 22) +
      " Q" + P2(0, 34) + " " + P2(-hp * 0.86, 22) +
      " Q" + P2(-hp * 1.03, -12) + " " + P2(-wa * 0.98, -44) +
      " Q" + P2(-sh * 0.86, -82) + " " + P2(-sh * 1.0, -122) +
      " Q" + P2(-sh * 1.04, -148) + " " + P2(-sh, -158) +
      " Q" + P2(-sh * 0.55, -172 + tr * 0.1) + " " + P2(-nk, -178) + "Z";
    if (belly > 20) d = d.replace(P2(sh * 0.78, -72) + " " + P2(wa + belly * 0.55, -40), P2(sh * 0.95, -60) + " " + P2(wa + belly * 0.6, -30));
    var sg = (this.seg.tor = new Segment(this, this.body, "tor", SEG.torso, [sh, sh, hp], { d: d, lw: LW * 1.05, kind: "tor" }));
    sg.hatch.setAttribute("mask", st.shadeMaskL);
    sg.hatch2.setAttribute("mask", st.shadeMaskL2);
    sg.shadow.setAttribute("mask", st.shadeMaskL2);
    var det = sg.det;
    if (B.lines) {
      // pecs (upper + lower contour, sternum)
      thinLine(det, "M" + P2(4, -152) + " Q" + P2(sh * 0.5, -156) + " " + P2(sh * 0.84, -122), 2.8);
      thinLine(det, "M" + P2(6, -110) + " Q" + P2(sh * 0.5, -102) + " " + P2(sh * 0.84, -122), 2.6, { opacity: 0.9 });
      thinLine(det, "M" + P2(4, -152) + " L" + P2(6, -108), 2.2, { opacity: 0.7 });
      thinLine(det, "M" + P2(-sh * 0.12, -150) + " Q" + P2(-sh * 0.5, -150) + " " + P2(-sh * 0.78, -126), 2.2, { opacity: 0.6 });
      // abs: centre line + 3 rows of 2 blocks + side lines
      var rows = belly > 20 ? 2 : 3;
      thinLine(det, "M" + P2(6, -104) + " Q" + P2(10, -60) + " " + P2(8, -20), 2.4, { opacity: 0.9 });
      for (var r = 0; r < rows; r++) {
        var y = -98 + r * 26;
        thinLine(det, "M" + P2(-24, y) + " Q" + P2(-10, y - 5) + " " + P2(4, y) + " M" + P2(9, y) + " Q" + P2(24, y - 5) + " " + P2(38, y), 2.3, { opacity: 0.85 });
      }
      thinLine(det, "M" + P2(-27, -103) + " Q" + P2(-32, -60) + " " + P2(-24, -24) + " M" + P2(40, -103) + " Q" + P2(46, -60) + " " + P2(38, -26), 2.2, { opacity: 0.7 });
      // obliques (front side) + serratus (back side) + lat line
      thinLine(det, "M" + P2(wa * 0.92, -74) + " L" + P2(wa * 0.7, -60) + " M" + P2(wa * 0.98, -56) + " L" + P2(wa * 0.76, -42) + " M" + P2(hp * 0.98, -34) + " L" + P2(hp * 0.8, -22), 2.2, { opacity: 0.75 });
      thinLine(det, "M" + P2(-sh * 0.5, -118) + " L" + P2(-sh * 0.66, -104) + " M" + P2(-sh * 0.46, -100) + " L" + P2(-sh * 0.62, -86) + " M" + P2(-sh * 0.42, -82) + " L" + P2(-sh * 0.56, -70), 2.2, { opacity: 0.7 });
      thinLine(det, "M" + P2(-sh * 0.96, -126) + " Q" + P2(-sh * 0.62, -92) + " " + P2(-wa * 0.9, -48), 2.4, { opacity: 0.8 });
      if (belly > 20) thinLine(det, "M" + P2(wa * 0.3, -66) + " Q" + P2(wa + belly * 0.8, -52) + " " + P2(wa + belly * 0.3, -22), 2.8, { opacity: 0.9 });
    } else {
      thinLine(det, "M" + P2(wa * 0.2, -70) + " Q" + P2(wa + belly * 0.8, -50) + " " + P2(wa * 0.6, -14), 2.4, { opacity: 0.85 });
      thinLine(det, "M" + P2(2, -150) + " Q" + P2(sh * 0.5, -148) + " " + P2(sh * 0.8, -124), 2.2, { opacity: 0.6 });
    }
    // pelvis band of the shorts (torso-local)
    var sd = "M" + P2(-hp * 1.0, -22) + " L" + P2(hp * 1.03, -22) + " Q" + P2(hp * 1.06, 4) + " " + P2(hp * 0.84, 22) + " Q" + P2(0, 36) + " " + P2(-hp * 0.84, 22) + " Q" + P2(-hp * 1.06, 4) + " " + P2(-hp * 1.0, -22) + "Z";
    var shG = g(sg.g);
    svgEl("path", { d: sd, fill: this.shortsStyle === "dark" ? st.pCross : this.shortsStyle === "orange" ? st.pOrange : PAPER }, shG);
    if (this.shortsStyle === "dark") svgEl("path", { d: sd, fill: INK, opacity: 0.35 }, shG);
    // waistband only (sides are drawn by the thigh panels so the shorts follow the hips)
    thinLine(shG, "M" + P2(-hp * 1.0, -22) + " L" + P2(hp * 1.03, -22), LW);
    thinLine(shG, "M" + P2(-hp * 0.95, -12) + " L" + P2(hp * 0.98, -12), 2.6);
    return sg;
  };
  FP.head = function () {
    var H = HEADS[this.headStyle], st = this.st, B = this.build, hs = B.head;
    var hg = (this.headG = g(this.body, { class: "ia-seg ia-head" }));
    var inner = g(hg, { transform: "scale(" + hs + ")" });
    // neck (behind the skull)
    var nk = B.neck;
    var trp = B.trap;
    inkPath(inner, "M" + P2(-nk * 1.15, -6) + " L" + P2(nk * 1.05, -8) + " Q" + P2(nk * 1.1, 26) + " " + P2(nk + trp * 0.7, 44) + " L" + P2(-(nk * 1.2 + trp * 0.9), 46) + " Q" + P2(-nk * 1.3, 24) + " " + P2(-nk * 1.15, -6) + "Z", PAPER, LW);
    thinLine(inner, "M" + P2(nk * 0.4, 2) + " L" + P2(nk * 0.55, 34) + " M" + P2(-nk * 0.9, 8) + " Q" + P2(-nk * 1.1, 30) + " " + P2(-nk - trp * 0.6, 44), 2.2, { opacity: 0.8 });
    this.skull = inkPath(inner, H.skull, PAPER, LW);
    svgEl("path", { d: H.skull, fill: st.pHatch2, mask: st.shadeMaskL, opacity: 0.85 }, inner);
    if (H.stubble) svgEl("path", { d: H.stubble, fill: st.pToneFine, opacity: 0.9 }, inner);
    thinLine(inner, H.jaw, 2.2, { opacity: 0.6 });
    // ear
    inkPath(inner, "M-46,-62 Q-62,-60 -54,-40 Q-48,-34 -44,-42", PAPER, 2.8);
    // nose
    thinLine(inner, H.noseD, 2.8);
    // eye
    var ex = H.eye[0], ey = H.eye[1], ew = H.eyeW;
    this.eyeG = g(inner);
    var eyeD = "M" + P2(ex - ew, ey) + " Q" + P2(ex, ey - 7) + " " + P2(ex + ew, ey + 1) + " Q" + P2(ex, ey + 6) + " " + P2(ex - ew, ey) + "Z";
    this.eyeOpen = g(this.eyeG);
    inkPath(this.eyeOpen, eyeD, PAPER, 2.6);
    this.pupil = svgEl("circle", { cx: fx(ex + 3), cy: fx(ey), r: fx(ew * 0.34), fill: INK }, this.eyeOpen);
    svgEl("circle", { cx: fx(ex + 1.5), cy: fx(ey - 1.5), r: fx(ew * 0.1), fill: PAPER }, this.eyeOpen);
    this.lid = svgEl("path", { fill: PAPER, stroke: INK, "stroke-width": 2.6, "stroke-linejoin": "round", display: "none" }, this.eyeOpen);
    this.eyeClosed = thinLine(this.eyeG, "M" + P2(ex - ew, ey + 1) + " Q" + P2(ex, ey + 7) + " " + P2(ex + ew, ey), 3.2, { display: "none" });
    this.eyeWide = g(this.eyeG, { display: "none" });
    inkPath(this.eyeWide, ellD(ex, ey, ew * 1.1, ew * 0.85), PAPER, 2.6);
    svgEl("circle", { cx: fx(ex + 2), cy: fx(ey), r: fx(ew * 0.3), fill: INK }, this.eyeWide);
    this.ex = ex; this.ey = ey; this.ew = ew;
    // brow
    this.brow = thinLine(inner, "M" + P2(ex - ew - 2, ey - 12) + " L" + P2(ex + ew + 3, ey - 9), H.browW);
    // mouth
    this.mouthG = g(inner, { transform: "translate(" + P2(ex + 6, ey + 36) + ")" });
    this.mLine = thinLine(this.mouthG, "M-10,0 L10,-2", 3);
    this.mOpen = svgEl("path", { fill: INK, stroke: INK, "stroke-width": 2.4, "stroke-linejoin": "round", display: "none" }, this.mouthG);
    this.mTeeth = svgEl("path", { d: "M-11,-3 L11,-5 L10,8 L-9,9Z M-5,-4 L-5,9 M1,-4.5 L1,8.5 M6,-5 L6,8", fill: PAPER, stroke: INK, "stroke-width": 2.2, "stroke-linejoin": "round", display: "none" }, this.mouthG);
    this.mSmile = thinLine(this.mouthG, "M-11,-1 Q2,8 12,-5", 3, { display: "none" });
    this.mFrown = thinLine(this.mouthG, "M-11,2 Q2,-6 12,0", 3, { display: "none" });
    // hair (over everything)
    this.hairG = g(inner);
    var hf = H.hairFill === "paper" ? PAPER : st.pHatch2;
    if (H.hairFill === "hatch") svgEl("path", { d: H.hair, fill: INK, opacity: 0.55, stroke: "none" }, this.hairG);
    inkPath(this.hairG, H.hair, hf, LW);
    if (H.hairFill === "paper") thinLine(this.hairG, "M30,-100 L50,-118 M8,-116 L20,-140 M-18,-120 L-30,-146 M-44,-110 L-62,-126 M-54,-84 L-74,-94", 2.2, { opacity: 0.75 });
    this.headInner = inner;
  };

  // ───────────────────────── Figure: acting API ─────────────────────────
  function ord(list) { list.sort(function (a, b) { return a.t - b.t; }); }
  FP.pose = function (name, at, dur) { this.kf.push({ t: clampT(at == null ? 0 : at), kind: "pose", name: poseName(name), d: num(dur, 0.35) }); ord(this.kf); return this; };
  /** loop an exercise from `at`: opts { period, until } */
  FP.exercise = function (name, at, opts) {
    opts = opts || {};
    var n = exName(name), ex = EXERCISES[n];
    at = clampT(at == null ? 0 : at);
    this.kf.push({ t: at, kind: "ex", name: n, d: num(opts.blend, 0.3), period: num(opts.period, ex.period), t0: at, tremble: ex.tremble });
    if (opts.until != null) this.kf.push({ t: clampT(opts.until), kind: "pose", name: opts.endPose || ex.poses[0], d: 0.35 });
    ord(this.kf);
    return this;
  };
  FP.expression = function (name, at) { this.exprs.push({ t: clampT(at == null ? 0 : at), name: exprName(name) }); ord(this.exprs); return this; };
  /** highlight a muscle/tendon/bone group from `at` (red striations). opts { pulse: true → pulse on entry } */
  FP.highlight = function (name, at, opts) {
    opts = opts || {};
    var n = hlName(name), nodes = [], list = HL[n] || [];
    for (var i = 0; i < list.length; i++) {
      var sg = this.seg[list[i][0]];
      if (!sg || !sg.hlNode) continue;
      nodes.push(sg.hlNode(list[i][1], list[i][2]));
    }
    at = clampT(at == null ? 0 : at);
    this.hls.push({ t: at, name: n, nodes: nodes });
    ord(this.hls);
    if (opts.pulse !== false && at > 0.02) this.pulse(at);
    return this;
  };
  /** red pulse of the current highlight (sync to the key word) */
  FP.pulse = function (at, strength) { this.pulses.push({ t: clampT(at), s: num(strength, 1) }); return this; };
  FP.say = function (from, to) { from = clampT(from); to = Math.max(from + 0.1, num(to, from + 1)); this.talks.push({ s: from, e: to }); return this; };
  FP.narrate = function (from, to) { return this.say(from == null ? 0 : from, to == null ? D() : to); };
  FP.shake = function (at, dur, amp) { this.shakes.push({ t: clampT(at), d: num(dur, 0.5), a: num(amp, 10) }); return this; };
  FP.sweat = function (from, to) { this.sweats.push({ s: clampT(from == null ? 0 : from), e: to == null ? 1e9 : to }); return this; };
  FP.moveTo = function (x, y, at, dur, ease) { this.moves.push({ t: clampT(at == null ? 0 : at), d: num(dur, 0.4), x: x, y: y, e: ease || "inOutCubic" }); ord(this.moves); return this; };
  FP.show = function (at) { this.vis.push({ t: clampT(at), v: true }); ord(this.vis); return this; };
  FP.hide = function (at) { this.vis.push({ t: clampT(at), v: false }); ord(this.vis); return this; };
  FP.face = function (dir, at) { this.faces.push({ t: clampT(at == null ? 0 : at), f: dir === "left" || dir === -1 ? -1 : 1 }); ord(this.faces); return this; };
  /** acting beats on narration words: [{ word, at?, expression?, pose?, exercise?, highlight?, pulse?, shake? }] */
  FP.beats = function (list, opts) {
    opts = opts || {};
    var after = 0, self = this;
    arr(list).forEach(function (b, i) {
      if (!b) return;
      var t = b.at != null ? clampT(b.at) : syncAt(b.word, after, num(opts.start, D() * 0.3) + i * num(opts.step, 1.2));
      after = t;
      if (b.expression) self.expression(b.expression, t);
      if (b.pose) self.pose(b.pose, t);
      if (b.exercise) self.exercise(b.exercise, t);
      if (b.highlight) self.highlight(b.highlight, t);
      if (b.pulse) self.pulse(t);
      if (b.shake) self.shake(t, 0.5, 10);
    });
    return this;
  };

  // ───────────────────────── Figure: evaluation ─────────────────────────
  function lerpPose(a, b, p) { var o = {}; for (var k in a) o[k] = lerp(a[k], b[k], p); return o; }
  function cyclePhase(x, ex) {
    // 0 → 1 → 0 over one period; effort on the way back up (pose B → A)
    var p = 0.5 - 0.5 * Math.cos(x * 2 * PI);
    if (ex.hold) p = sm(sm(p));
    return p;
  }
  FP.kfPose = function (k, t) {
    if (k.kind === "pose") return { P: POSES[k.name] || STAND, effort: 0 };
    var ex = EXERCISES[k.name], x = ((t - k.t0) / k.period) % 1;
    if (x < 0) x += 1;
    var p = cyclePhase(x, ex);
    var A = POSES[ex.poses[0]], B = POSES[ex.poses[1]];
    var effort = ex.tremble ? 0.8 : Math.max(0, Math.sin(x * 2 * PI)) * (1 - Math.abs(2 * p - 1)) * 1.2 + 0.1;
    return { P: lerpPose(A, B, p), effort: effort, ex: ex, x: x, p: p };
  };
  FP.poseAt = function (t) {
    var kf = this.kf, cur = this.kfPose(kf[0], t);
    for (var i = 1; i < kf.length; i++) {
      var k = kf[i];
      if (k.t > t) break;
      var nx = this.kfPose(k, t), q = k.d <= 0 ? 1 : sm((t - k.t) / k.d);
      cur = q >= 1 ? nx : { P: lerpPose(cur.P, nx.P, q), effort: lerp(cur.effort, nx.effort, q), ex: nx.ex, x: nx.x, p: nx.p };
    }
    return cur;
  };
  FP.exprAt = function (t) { var e = this.exprs[0]; for (var i = 1; i < this.exprs.length; i++) { if (this.exprs[i].t > t) break; e = this.exprs[i]; } return EXPR[e.name]; };
  FP.hlAt = function (t) { var h = this.hls[0]; for (var i = 1; i < this.hls.length; i++) { if (this.hls[i].t > t) break; h = this.hls[i]; } return h; };
  FP.talking = function (t) { for (var i = 0; i < this.talks.length; i++) if (t >= this.talks[i].s && t < this.talks[i].e) return true; return false; };
  FP.sweating = function (t) { for (var i = 0; i < this.sweats.length; i++) if (t >= this.sweats[i].s && t < this.sweats[i].e) return true; return false; };
  FP.posAt = function (t) {
    var x = this.x0, y = this.y0;
    for (var i = 0; i < this.moves.length; i++) {
      var m = this.moves[i];
      if (m.t > t) break;
      var p = m.d <= 0 ? 1 : easeFn(m.e)(clamp((t - m.t) / m.d, 0, 1));
      if (m.x != null) x = lerp(x, m.x, p);
      if (m.y != null) y = lerp(y, m.y, p);
    }
    return { x: x, y: y };
  };
  /** joints (figure-local units) for a numeric pose */
  FP.joints = function (P) {
    var B = this.build, J = {};
    var H = [P.hx, P.hy];
    var tv = vec(180 - P.tor); // torso up-vector
    var C = [H[0] + SEG.torso * tv[0], H[1] + SEG.torso * tv[1]];
    var fwd = [Math.cos(P.tor * D2R), Math.sin(P.tor * D2R)]; // torso "front" direction
    var hv = vec(180 - P.tor - P.head);
    var N = [C[0] + SEG.neck * hv[0], C[1] + SEG.neck * hv[1]];
    J.hip = H; J.chest = C; J.neck = N;
    J.head = [N[0] + 60 * hv[0], N[1] + 60 * hv[1]];
    J.shN = [C[0] + fwd[0] * 10 + tv[0] * -6, C[1] + fwd[1] * 10 + tv[1] * -6];
    J.shF = [C[0] - fwd[0] * 10 + tv[0] * -4, C[1] - fwd[1] * 10 + tv[1] * -4];
    J.hipN = [H[0] + fwd[0] * 8, H[1] + fwd[1] * 8];
    J.hipF = [H[0] - fwd[0] * 8, H[1] - fwd[1] * 8];
    function chain(s, a1, L1, a2, L2, a3, L3) {
      var v1 = vec(a1), e = [s[0] + L1 * v1[0], s[1] + L1 * v1[1]];
      var v2 = vec(a2), w = [e[0] + L2 * v2[0], e[1] + L2 * v2[1]];
      var v3 = vec(a3), q = [w[0] + L3 * v3[0], w[1] + L3 * v3[1]];
      return [e, w, q];
    }
    var a = chain(J.shN, P.uaN, SEG.ua, P.faN, SEG.fa, P.hdN, SEG.hand);
    J.elbowN = a[0]; J.wristN = a[1]; J.handN = a[2];
    a = chain(J.shF, P.uaF, SEG.ua, P.faF, SEG.fa, P.hdF, SEG.hand);
    J.elbowF = a[0]; J.wristF = a[1]; J.handF = a[2];
    a = chain(J.hipN, P.thN, SEG.th, P.shN, SEG.sh, P.ftN, SEG.ft);
    J.kneeN = a[0]; J.ankleN = a[1]; J.toeN = a[2];
    a = chain(J.hipF, P.thF, SEG.th, P.shF, SEG.sh, P.ftF, SEG.ft);
    J.kneeF = a[0]; J.ankleF = a[1]; J.toeF = a[2];
    return J;
  };
  /** world position of a joint at time t */
  FP.world = function (name, t) {
    var P = this.poseAt(t == null ? 0 : t).P, J = this.joints(P), j = J[name] || J.chest, pos = this.posAt(t == null ? 0 : t);
    var f = this.facingAt(t == null ? 0 : t);
    return { x: pos.x + j[0] * this.s * f, y: pos.y + j[1] * this.s };
  };
  FP.facingAt = function (t) { var f = this.facing; for (var i = 0; i < this.faces.length; i++) { if (this.faces[i].t > t) break; f = this.faces[i].f; } return f; };
  function tr(x, y, a) { return "translate(" + P2(x, y) + ") rotate(" + fx(a) + ")"; }
  FP.update = function (t) {
    var vis = true;
    for (var v = 0; v < this.vis.length; v++) { if (this.vis[v].t > t) break; vis = this.vis[v].v; }
    setD(this.root, vis);
    if (!vis) return;
    var st = this.poseAt(t), P = st.P, ex = st.ex, effort = st.effort, B = this.build;
    // effort tremble (seeded noise, scaled by the exercise)
    var jit = ex ? ex.shake * effort : 0, sd = this.seed;
    if (jit > 0.01) {
      P = lerpPose(P, P, 0);
      P.tor += noise(t * 26, sd) * jit; P.uaN += noise(t * 31, sd + 1) * jit * 1.4; P.faN += noise(t * 29, sd + 2) * jit * 1.4;
      P.uaF += noise(t * 30, sd + 3) * jit * 1.4; P.faF += noise(t * 28, sd + 4) * jit * 1.4; P.head += noise(t * 24, sd + 5) * jit;
      P.thN += noise(t * 27, sd + 6) * jit * 0.8; P.thF += noise(t * 25, sd + 7) * jit * 0.8; P.hy += noise(t * 33, sd + 8) * jit * 1.5;
    }
    // idle breathing
    if (!ex) { P = lerpPose(P, P, 0); P.hy += Math.sin(t * 1.9 + sd) * 2; P.tor += Math.sin(t * 1.9 + sd) * 0.6; }
    var J = this.joints(P);
    // root placement (+ shakes)
    var pos = this.posAt(t), ox = 0, oy = 0;
    for (var i = 0; i < this.shakes.length; i++) {
      var s = this.shakes[i], ls = t - s.t;
      if (ls < 0 || ls > s.d) continue;
      var amp = s.a * Math.pow(1 - ls / s.d, 1.4);
      ox += noise(ls * 40, sd + 9 + i) * amp; oy += noise(ls * 43, sd + 19 + i) * amp;
    }
    var f = this.facingAt(t);
    setA(this.root, "transform", "translate(" + P2(pos.x + ox, pos.y + oy) + ") scale(" + fx(this.s * f * 1000) / 1000 + "," + fx(this.s * 1000) / 1000 + ")");
    // segment transforms
    var sg = this.seg;
    setA(sg.tor.g, "transform", tr(J.hip[0], J.hip[1], P.tor));
    setA(this.headG, "transform", tr(J.neck[0], J.neck[1], P.tor + P.head));
    setA(sg.uaN.g, "transform", tr(J.shN[0], J.shN[1], -P.uaN));
    setA(sg.faN.g, "transform", tr(J.elbowN[0], J.elbowN[1], -P.faN));
    setA(sg.hdN.g, "transform", tr(J.wristN[0], J.wristN[1], -P.hdN));
    setA(sg.uaF.g, "transform", tr(J.shF[0], J.shF[1], -P.uaF));
    setA(sg.faF.g, "transform", tr(J.elbowF[0], J.elbowF[1], -P.faF));
    setA(sg.hdF.g, "transform", tr(J.wristF[0], J.wristF[1], -P.hdF));
    setA(sg.thN.g, "transform", tr(J.hipN[0], J.hipN[1], -P.thN));
    setA(sg.shN.g, "transform", tr(J.kneeN[0], J.kneeN[1], -P.shN));
    setA(sg.ftN.g, "transform", tr(J.ankleN[0], J.ankleN[1], -P.ftN));
    setA(sg.thF.g, "transform", tr(J.hipF[0], J.hipF[1], -P.thF));
    setA(sg.shF.g, "transform", tr(J.kneeF[0], J.kneeF[1], -P.shF));
    setA(sg.ftF.g, "transform", tr(J.ankleF[0], J.ankleF[1], -P.ftF));
    this.J = J; this.P = P;
    // face
    var E = this.exprAt(t), strain = effort > 0.6 && ex && ex.shake > 1.2;
    var eyes = E.eyes, mouth = E.mouth, brow = E.brow, lid = E.lid;
    if (strain) { eyes = "closed"; mouth = "grit"; brow = 9; }
    var blinkT = (t + hash01(sd) * 3) % 3.4;
    if (eyes === "open" && blinkT < 0.13) eyes = "closed";
    var talk = this.talking(t), mo = talk ? mouthAt(t) : 0;
    if (talk && mo > 0.12) mouth = "open";
    setD(this.eyeOpen, eyes === "open"); setD(this.eyeClosed, eyes === "closed"); setD(this.eyeWide, eyes === "wide");
    if (eyes === "open") {
      var on = lid > 0.08;
      setD(this.lid, on);
      if (on) { var ex0 = this.ex, ey0 = this.ey, ew = this.ew, yl = ey0 - 7 + lid * 10; setA(this.lid, "d", "M" + P2(ex0 - ew - 1, ey0 - 1) + " Q" + P2(ex0, ey0 - 12) + " " + P2(ex0 + ew + 1, ey0) + " Q" + P2(ex0, yl) + " " + P2(ex0 - ew - 1, ey0 - 1) + "Z"); }
    }
    setA(this.brow, "transform", "rotate(" + fx(brow) + " " + P2(this.ex + this.ew, this.ey - 10) + ") translate(0," + fx(brow > 0 ? brow * 0.4 : brow * 0.6) + ")");
    setD(this.mLine, mouth === "line"); setD(this.mTeeth, mouth === "grit"); setD(this.mSmile, mouth === "smile"); setD(this.mFrown, mouth === "frown");
    var open = mouth === "open" || mouth === "o";
    setD(this.mOpen, open);
    if (open) {
      var h = mouth === "o" ? 9 : 4 + mo * 14, w = mouth === "o" ? 6 : 10;
      setA(this.mOpen, "d", "M" + P2(-w, -2) + " Q0,-6 " + P2(w, -3) + " Q" + P2(w * 0.6, h) + " 0," + fx(h + 2) + " Q" + P2(-w * 0.6, h) + " " + P2(-w, -2) + "Z");
    }
    // sweat + strain marks
    var sw = this.sweating(t) || (E.sweat && t > 0.4) || (strain && effort > 0.9);
    setD(this.sweatG, sw);
    if (sw) {
      var hx = J.head[0], hy = J.head[1];
      for (var k = 0; k < this.drops.length; k++) {
        var cyc = (t * 0.9 + k * 0.23 + hash01(sd + k)) % 1, side = k % 2 ? 1 : -1, dx = side * (46 + k * 9), dy = -40 + k * 12 + cyc * 120;
        setA(this.drops[k], "transform", "translate(" + P2(hx + dx + side * cyc * 20, hy + dy) + ") scale(" + fx((0.55 + 0.4 * (1 - cyc)) * 100) / 100 + ")");
        setA(this.drops[k], "opacity", String(fx(Math.min(1, (1 - cyc) * 2.2) * 100) / 100));
      }
    }
    setD(this.strainG, strain && effort > 0.75);
    if (strain) setA(this.strainG, "transform", "translate(" + P2(J.head[0], J.head[1]) + ") scale(" + fx(1 + Math.sin(t * 40) * 0.08) + ")");
    // highlights
    var hl = this.hlAt(t);
    if (hl !== this.lastHl) {
      if (this.lastHl) for (i = 0; i < this.lastHl.nodes.length; i++) setD(this.lastHl.nodes[i].g, false);
      for (i = 0; i < hl.nodes.length; i++) setD(hl.nodes[i].g, true);
      this.lastHl = hl;
    }
    if (hl.nodes.length) {
      var pulse = 0, ring = -1;
      for (i = 0; i < this.pulses.length; i++) {
        var lp = t - this.pulses[i].t;
        if (lp < 0 || lp > 0.9) continue;
        pulse = Math.max(pulse, Math.exp(-lp * 5) * Math.abs(Math.sin(lp * 16)) * this.pulses[i].s);
        if (lp < 0.6) ring = Math.max(ring, lp / 0.6);
      }
      var breathe = 1 + 0.03 * Math.sin(t * 4.2) + pulse * 0.22;
      var sc = fx(breathe * 1000) / 1000;
      for (i = 0; i < hl.nodes.length; i++) {
        var nd = hl.nodes[i];
        if (nd.kind === "muscle" || nd.kind === "tendon") setA(nd.inner, "transform", "translate(" + P2(nd.cx, nd.cy) + ") scale(" + sc + ")");
        else setA(nd.inner, "transform", "translate(" + P2(nd.cx, nd.cy) + ") scale(" + sc + ") translate(" + P2(-nd.cx, -nd.cy) + ")");
        setD(nd.ring, ring >= 0);
        if (ring >= 0) {
          setA(nd.ring, "transform", "translate(" + P2(nd.cx, nd.cy) + ") scale(" + fx((1 + ring * 0.9) * 100) / 100 + ") translate(" + P2(-nd.cx, -nd.cy) + ")");
          setA(nd.ring, "opacity", String(fx((1 - ring) * 100) / 100));
        }
      }
    }
  };

  // ───────────────────────── props (world space) ─────────────────────────
  FP.jointNow = function (name) {
    var J = this.J || this.joints(this.poseAt(0).P), j = J[name] || J.chest, pos = this.lastPos || this.posAt(0), f = this.lastF || this.facing;
    return { x: pos.x + j[0] * this.s * f, y: pos.y + j[1] * this.s };
  };
  var _upd = FP.update;
  FP.update = function (t) { this.lastPos = this.posAt(t); this.lastF = this.facingAt(t); _upd.call(this, t); };
  /** static or figure-attached props: bar | dipbars | rope | boulder | dumbbell | kettlebell | floor */
  STP.prop = function (kind, o) {
    o = o || {};
    var st = this, grp = g(this.props), rnd = V.makeRand(41 + Math.round(num(o.x, 0)));
    if (kind === "bar") {
      var x = num(o.x, this.Ww / 2), y = num(o.y, 300), w = num(o.w, 420), bh = num(o.h, 700);
      inkPath(grp, "M" + P2(x - w / 2, y) + " L" + P2(x - w / 2, y - bh) + " M" + P2(x + w / 2, y) + " L" + P2(x + w / 2, y - bh), "none", 16);
      inkPath(grp, "M" + P2(x - w / 2 - 20, y) + " L" + P2(x + w / 2 + 20, y), "none", 18);
      thinLine(grp, "M" + P2(x - w / 2 + 10, y - 4) + " L" + P2(x + w / 2 - 10, y - 4), 3, { stroke: PAPER, opacity: 0.7 });
      return grp;
    }
    if (kind === "dipbars") {
      var bx = num(o.x, this.Ww / 2), by = num(o.y, 500), gy = num(o.ground, 820), bw = num(o.w, 360);
      inkPath(grp, "M" + P2(bx - bw / 2, by) + " L" + P2(bx + bw / 2, by), "none", 18);
      inkPath(grp, "M" + P2(bx - bw / 2 + 30, by) + " L" + P2(bx - bw / 2 + 30, gy) + " M" + P2(bx + bw / 2 - 30, by) + " L" + P2(bx + bw / 2 - 30, gy), "none", 14);
      thinLine(grp, "M" + P2(bx - bw / 2 + 10, by - 4) + " L" + P2(bx + bw / 2 - 10, by - 4), 3, { stroke: PAPER, opacity: 0.7 });
      return grp;
    }
    if (kind === "rope") {
      var A = o.a, Bf = o.b, ja = o.jointA || "handN", jb = o.jointB || "handN";
      var rope = svgEl("path", { fill: "none", stroke: INK, "stroke-width": 11, "stroke-linecap": "round" }, grp);
      var twist = svgEl("path", { fill: "none", stroke: PAPER, "stroke-width": 3, "stroke-dasharray": "6 9", opacity: 0.8 }, grp);
      var knot = g(grp);
      inkPath(knot, "M-18,-30 L18,-30 L22,30 L-22,30Z", RED, 4);
      this.onFrame(function (t) {
        var pa = A.jointNow(ja), pb = Bf ? Bf.jointNow(jb) : { x: num(o.x2, st.Ww), y: pa.y };
        var tension = 1 - Math.min(1, Math.abs(pb.x - pa.x) / num(o.length, 1200));
        var mx = (pa.x + pb.x) / 2, my = (pa.y + pb.y) / 2 + 30 + tension * 120 + noise(t * 14, 3) * 6;
        var d = "M" + P2(pa.x, pa.y) + " Q" + P2(mx, my) + " " + P2(pb.x, pb.y);
        setA(rope, "d", d); setA(twist, "d", d);
        setA(knot, "transform", "translate(" + P2(mx + noise(t * 9, 7) * 4, (pa.y + pb.y) / 2 + (my - (pa.y + pb.y) / 2) * 0.5) + ") rotate(" + fx(noise(t * 6, 11) * 10) + ")");
      });
      return grp;
    }
    if (kind === "boulder" || kind === "dumbbell" || kind === "kettlebell") {
      var fg = o.fig, joint = o.joint || "wristN", sc = num(o.scale, 1) * fg.s, body = g(grp);
      if (kind === "boulder") {
        var pts = [], n = 11, R = num(o.r, 95);
        for (var i = 0; i < n; i++) { var a = (i / n) * 2 * PI, rr = R * (0.8 + rnd() * 0.35); pts.push([Math.cos(a) * rr, Math.sin(a) * rr]); }
        var bd = roughD(pts, rnd, 6, true);
        inkPath(body, bd, PAPER, LW * 1.1);
        svgEl("path", { d: bd, fill: st.pCross, mask: st.shadeMask, opacity: 0.95 }, body);
        thinLine(body, "M" + P2(-R * 0.5, -R * 0.2) + " Q" + P2(-R * 0.1, -R * 0.35) + " " + P2(R * 0.3, -R * 0.5) + " M" + P2(-R * 0.3, R * 0.3) + " L" + P2(R * 0.15, R * 0.1), 2.6, { opacity: 0.8 });
      } else if (kind === "dumbbell") {
        inkPath(body, "M-70,-30 L-40,-30 L-40,30 L-70,30Z M40,-30 L70,-30 L70,30 L40,30Z", st.pHatch, LW);
        inkPath(body, "M-40,-9 L40,-9 L40,9 L-40,9Z", PAPER, LW);
      } else {
        inkPath(body, "M-40,10 A42,42 0 1 0 40,10 Z", st.pHatch, LW);
        inkPath(body, "M-30,-6 Q-30,-56 0,-56 Q30,-56 30,-6", "none", LW * 1.6);
      }
      this.onFrame(function (t) {
        var p = fg.jointNow(joint), q = fg.jointNow(kind === "boulder" ? "wristF" : joint);
        var cx = kind === "boulder" ? (p.x + q.x) / 2 + num(o.dx, 40) * fg.lastF * fg.s : p.x, cy = kind === "boulder" ? (p.y + q.y) / 2 + num(o.dy, 10) * fg.s : p.y + (kind === "kettlebell" ? 40 * sc : 0);
        var ang = kind === "dumbbell" ? 90 - (fg.P ? fg.P.hdN : 0) : 0;
        setA(body, "transform", "translate(" + P2(cx, cy) + ") rotate(" + fx(ang * fg.lastF) + ") scale(" + fx(sc * 100) / 100 + ")");
      });
      return grp;
    }
    return grp;
  };

  // ───────────────────────── world annotations (SVG, follow the camera) ─────────────────────────
  function wrapLines(text, maxChars) {
    var out = [], lines = str(text).split(/\n/);
    lines.forEach(function (ln) {
      var ws = ln.split(/\s+/).filter(Boolean), cur = "";
      ws.forEach(function (w) {
        if ((cur + " " + w).trim().length > maxChars && cur) { out.push(cur); cur = w; }
        else cur = (cur + " " + w).trim();
      });
      if (cur) out.push(cur);
    });
    return out.length ? out : [""];
  }
  /**
   * Handwritten label + curved red arrow to a world point. opts: { x, y (target), lx, ly (label anchor), at, until,
   * color, size, bend, align: "start"|"middle"|"end", arrow: false, width (max chars/line) }
   */
  STP.annotate = function (text, opts) {
    opts = opts || {};
    var st = this, grp = g(this.wfx, { display: "none" }), color = opts.color || RED;
    var at = clampT(num(opts.at, 0.3)), until = opts.until != null ? clampT(opts.until) + 0.2 : 1e9;
    var size = num(opts.size, 40), lines = wrapLines(plain(text), num(opts.width, 16));
    var tx = num(opts.lx, this.Ww * 0.7), ty = num(opts.ly, 300);
    var align = opts.align || "middle";
    var maxLen = 0;
    lines.forEach(function (l) { maxLen = Math.max(maxLen, l.length); });
    // keep the label inside the frame (estimated text box)
    var estW = maxLen * size * 0.64, estH = lines.length * size * 1.08, Wm = this.Ww;
    var left = align === "start" ? tx : align === "end" ? tx - estW : tx - estW / 2;
    var mx = Wm * 0.1, self = this, laid = false;
    function layout() {
      laid = true;
      var topSafe = Math.max(150, num(opts.minY, 0), self.topSafe || 0);
      left = align === "start" ? tx : align === "end" ? tx - estW : tx - estW / 2;
      if (left < mx) tx += mx - left;
      if (left + estW > Wm - mx) tx -= left + estW - (Wm - mx);
      if (ty - size < topSafe) ty = topSafe + size;
      if (ty + estH > 930) ty = 930 - estH;
      if (arrow) {
        var ax = tx + (align === "start" ? wEst * 0.5 : align === "end" ? -wEst * 0.5 : 0), ay = ty + (opts.y > ty ? size * 0.6 + (lines.length - 1) * size * 1.08 : -size * 0.9);
        var bend = num(opts.bend, (opts.x > ax ? 1 : -1) * 0.3);
        arrow.setAttribute("d", curveArrowD(ax, ay, opts.x, opts.y, bend));
        head.setAttribute("d", arrowHeadD(ax, ay, opts.x, opts.y, bend, 26));
        try { len = arrow.getTotalLength() || 300; } catch (e) { len = 300; }
        arrow.setAttribute("stroke-dasharray", fx(len) + " " + fx(len));
      }
    }
    var tg = g(grp, { transform: "translate(" + P2(tx, ty) + ") rotate(" + fx(num(opts.rotate, -4)) + ")" });
    var txt = svgEl("text", { "text-anchor": align, "font-size": fx(size), "font-family": "var(--ia-hand)", "font-weight": "700", fill: color, "paint-order": "stroke", stroke: this.paper, "stroke-width": fx(size * 0.18), "stroke-linejoin": "round", y: 0 }, tg);
    lines.forEach(function (l, i) {
      var ts = svgEl("tspan", { x: 0, dy: i ? fx(size * 1.08) : 0 }, txt);
      ts.textContent = l;
    });
    // hand-drawn underline
    var rnd = V.makeRand(Math.round(tx + ty));
    var wEst = maxLen * size * 0.5, x0 = align === "start" ? 0 : align === "end" ? -wEst : -wEst / 2;
    var ul = svgEl("path", { d: roughD([[x0, size * 0.32 + (lines.length - 1) * size * 1.08], [x0 + wEst, size * 0.3 + (lines.length - 1) * size * 1.08]], rnd, 6), fill: "none", stroke: color, "stroke-width": 3, "stroke-linecap": "round", opacity: 0.85 }, tg);
    var arrow = null, head = null, len = 1;
    if (opts.arrow !== false && opts.x != null) {
      arrow = svgEl("path", { fill: "none", stroke: color, "stroke-width": 5, "stroke-linecap": "round" }, grp);
      head = svgEl("path", { fill: "none", stroke: color, "stroke-width": 5, "stroke-linecap": "round", "stroke-linejoin": "round" }, grp);
    }
    this.onFrame(function (t) {
      if (!laid) layout();
      var on = t >= at && t < until;
      setD(grp, on);
      if (!on) return;
      var p = clamp((t - at) / 0.26, 0, 1), s = EASE.snap(p);
      setA(tg, "transform", "translate(" + P2(tx, ty) + ") rotate(" + fx(num(opts.rotate, -4) + noise(t * 2, 5) * 0.8) + ") scale(" + fx(Math.max(0.01, s) * 100) / 100 + ")");
      setA(ul, "stroke-dashoffset", "0");
      if (arrow) {
        var pa = clamp((t - at - 0.1) / 0.35, 0, 1);
        setA(arrow, "stroke-dashoffset", fx(len * (1 - EASE.whip(pa))));
        setD(head, pa > 0.92);
      }
      if (until < 1e8 && t > until - 0.2) setA(grp, "opacity", String(fx(((until - t) / 0.2) * 100) / 100)); else setA(grp, "opacity", "1");
    });
    return grp;
  };
  /** plain world-space handwritten text (no arrow) */
  STP.handText = function (text, x, y, opts) { opts = opts || {}; opts.lx = x; opts.ly = y; opts.arrow = false; return this.annotate(text, opts); };
  /** force arrow between two world points (thick, with a label). opts: { at, until, color, label, width } */
  STP.forceArrow = function (x1, y1, x2, y2, opts) {
    opts = opts || {};
    var grp = g(this.wfx, { display: "none" }), color = opts.color || RED, w = num(opts.width, 26);
    var dx = x2 - x1, dy = y2 - y1, L = Math.sqrt(dx * dx + dy * dy) || 1, ux = dx / L, uy = dy / L, nx = -uy, ny = ux;
    var hw = w * 1.9, hl = Math.min(L * 0.45, w * 2.2), bx = x2 - ux * hl, by = y2 - uy * hl;
    var d = "M" + P2(x1 + nx * w / 2, y1 + ny * w / 2) + " L" + P2(bx + nx * w / 2, by + ny * w / 2) + " L" + P2(bx + nx * hw / 2, by + ny * hw / 2) + " L" + P2(x2, y2) + " L" + P2(bx - nx * hw / 2, by - ny * hw / 2) + " L" + P2(bx - nx * w / 2, by - ny * w / 2) + " L" + P2(x1 - nx * w / 2, y1 - ny * w / 2) + "Z";
    var p = svgEl("path", { d: d, fill: color, stroke: INK, "stroke-width": 4, "stroke-linejoin": "round" }, grp);
    svgEl("path", { d: d, fill: this.pHatch2, opacity: 0.35 }, grp);
    if (opts.label) {
      var lt = svgEl("text", { x: fx((x1 + x2) / 2 + nx * (w + 26)), y: fx((y1 + y2) / 2 + ny * (w + 26)), "text-anchor": "middle", "font-size": 34, "font-family": "var(--ia-hand)", "font-weight": 700, fill: color, "paint-order": "stroke", stroke: this.paper, "stroke-width": 6 }, grp);
      lt.textContent = plain(opts.label);
    }
    var at = clampT(num(opts.at, 0.3)), until = opts.until != null ? clampT(opts.until) : 1e9;
    this.onFrame(function (t) {
      var on = t >= at && t < until;
      setD(grp, on);
      if (!on) return;
      var s = EASE.snap(clamp((t - at) / 0.22, 0, 1)), th = 1 + 0.05 * Math.sin(t * 9);
      setA(grp, "transform", "translate(" + P2(x1, y1) + ") scale(" + fx(s * th * 100) / 100 + ") translate(" + P2(-x1, -y1) + ")");
    });
    return grp;
  };

  // ───────────────────────── screen-space UI (HTML) ─────────────────────────
  function ST() { return stage || new Stage(V.root()); }
  function windowed(node, from, to) {
    var st = ST();
    st.onFrame(function (t) { setS(node, "visibility", t >= from - 0.001 && t < to ? "visible" : "hidden"); });
  }
  /**
   * Thumbnail-style bold lettering. opts: { pos: "top"|"bottom"|"center"|"left"|"right"|"top-left"|"top-right",
   * size: "xl"|"lg"|"md"|"sm", until, color, maxWidth (0–1), y, rotate, kicker, sub }
   */
  S.thumbText = function (text, at, opts) {
    opts = opts || {};
    var st = ST(), tl = V.timeline();
    at = clampT(at == null ? 0.2 : at);
    var pos = opts.pos || "top";
    var box = el("div.ia-thumb.ia-thumb-" + pos + ".ia-size-" + (opts.size || "lg"), { parent: st.ui });
    if (pos === "top" || ((pos === "top-left" || pos === "top-right") && (st.portrait || st.square))) st.topSafe = Math.max(st.topSafe || 0, { xl: 440, lg: 360, md: 300, sm: 240 }[opts.size || "lg"] + (opts.kicker ? 50 : 0) + (opts.sub ? 60 : 0));
    box.style.maxWidth = pct(num(opts.maxWidth, st.portrait ? 0.9 : pos === "left" || pos === "right" ? 0.46 : 0.86));
    if (opts.y != null) { box.style.top = pct(opts.y); box.style.bottom = "auto"; box.style.transform = "translate(-50%, 0) rotate(" + num(opts.rotate, -2) + "deg)"; }
    var kick = opts.kicker ? el("div.ia-thumb-kick", { parent: box, text: plain(opts.kicker) }) : null;
    var main = el("div.ia-thumb-main", { parent: box });
    main.appendChild(S.rich(text || ""));
    if (opts.color) main.style.color = opts.color;
    var sub = opts.sub ? el("div.ia-thumb-sub", { parent: box, text: plain(opts.sub) }) : null;
    fitText(main, { maxLines: num(opts.maxLines, 3), min: 16 });
    windowed(box, Math.max(0, at - 0.02), opts.until != null ? clampT(opts.until) + 0.2 : 1e9);
    tl.fromTo(main, { opacity: 0 }, { opacity: 1 }, { at: at, dur: 0.05 });
    tl.fromTo(main, { scale: 1.9, rotate: 4 }, { scale: 1, rotate: 0 }, { at: at, dur: 0.22, ease: EASE.snap });
    if (kick) tl.fromTo(kick, { opacity: 0, x: -u(60) }, { opacity: 1, x: 0 }, { at: Math.max(0, at - 0.1), dur: 0.25, ease: EASE.whip });
    if (sub) tl.fromTo(sub, { opacity: 0, y: u(20) }, { opacity: 1, y: 0 }, { at: at + 0.25, dur: 0.3, ease: "outCubic" });
    if (opts.until != null) tl.to(box, { opacity: 0, scale: 1.15 }, { at: clampT(opts.until), dur: 0.2, ease: "inCubic" });
    return box;
  };
  /** handwritten note (screen space). opts: { x, y (0–1 centre), width, size, color, until, rotate, align } */
  S.handNote = function (text, at, opts) {
    opts = opts || {};
    var st = ST(), tl = V.timeline();
    at = clampT(at == null ? 0.3 : at);
    var box = el("div.ia-note", { parent: st.ui });
    box.style.left = pct(num(opts.x, 0.5)); box.style.top = pct(num(opts.y, 0.5));
    box.style.width = pct(num(opts.width, st.portrait ? 0.8 : 0.36));
    box.style.transform = "translate(-50%,-50%) rotate(" + num(opts.rotate, -3) + "deg)";
    if (opts.size) box.style.fontSize = u(opts.size) + "px";
    if (opts.color) box.style.color = opts.color;
    if (opts.align) box.style.textAlign = opts.align;
    box.appendChild(S.rich(text || ""));
    fitText(box, { maxLines: num(opts.maxLines, 3), min: 14 });
    windowed(box, at, opts.until != null ? clampT(opts.until) + 0.2 : 1e9);
    tl.fromTo(box, { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1 }, { at: at, dur: 0.24, ease: EASE.snap });
    if (opts.until != null) tl.to(box, { opacity: 0 }, { at: clampT(opts.until), dur: 0.2 });
    return box;
  };
  /** rep counter driven by an exercise period. opts: { x, y, period, start, max, label, until, sets } */
  S.repCounter = function (at, opts) {
    opts = opts || {};
    var st = ST();
    at = clampT(at == null ? 0 : at);
    var box = el("div.ia-reps", { parent: st.ui });
    box.style.left = pct(num(opts.x, st.portrait ? 0.5 : 0.84)); box.style.top = pct(num(opts.y, st.portrait ? 0.86 : 0.16));
    var n = el("div.ia-reps-n", { parent: box, text: "0" });
    var l = el("div.ia-reps-l", { parent: box, text: plain(opts.label || "REPS") });
    var sets = opts.sets ? el("div.ia-reps-s", { parent: box, text: plain(opts.sets) }) : null;
    var period = Math.max(0.2, num(opts.period, 1.6)), start = num(opts.start, 0), max = num(opts.max, 999), until = opts.until != null ? clampT(opts.until) : 1e9;
    st.onFrame(function (t) {
      var on = t >= at && t < until;
      setS(box, "visibility", on ? "visible" : "hidden");
      if (!on) return;
      var k = Math.min(max, start + Math.floor((t - at) / period + 0.55)), ph = ((t - at) / period + 0.55) % 1;
      setS(n, "transform", "scale(" + fx((1 + 0.25 * Math.max(0, 1 - ph * 5)) * 100) / 100 + ")");
      if (n.textContent !== String(k)) n.textContent = String(k);
    });
    return box;
  };
  /** "3 × 12" ink box. opts: { x, y, until, color } */
  S.setsBadge = function (text, at, opts) {
    opts = opts || {};
    var st = ST(), tl = V.timeline();
    at = clampT(at == null ? 0.3 : at);
    var b = el("div.ia-sets", { parent: st.ui, text: plain(text) });
    b.style.left = pct(num(opts.x, 0.5)); b.style.top = pct(num(opts.y, 0.5));
    if (opts.color) b.style.background = opts.color;
    windowed(b, at, opts.until != null ? clampT(opts.until) + 0.2 : 1e9);
    tl.fromTo(b, { opacity: 0, scale: 2, rotate: -14 }, { opacity: 1, scale: 1, rotate: -5 }, { at: at, dur: 0.22, ease: EASE.snap });
    if (opts.until != null) tl.to(b, { opacity: 0 }, { at: clampT(opts.until), dur: 0.2 });
    return b;
  };
  /** hatched progress bar growing from `from` to `to`. opts: { x, y, width, label, color, value (0–1), until } */
  S.progressBar = function (from, to, opts) {
    opts = opts || {};
    var st = ST();
    from = clampT(from == null ? 0.3 : from); to = clampT(to == null ? D() - 0.3 : to);
    var box = el("div.ia-bar", { parent: st.ui });
    box.style.left = pct(num(opts.x, 0.5)); box.style.top = pct(num(opts.y, 0.9));
    box.style.width = pct(num(opts.width, st.portrait ? 0.8 : 0.42));
    if (opts.label) el("div.ia-bar-l", { parent: box, text: plain(opts.label) });
    var track = el("div.ia-bar-t", { parent: box });
    var fill = el("div.ia-bar-f", { parent: track });
    if (opts.color) fill.style.background = opts.color;
    var pctEl = el("div.ia-bar-p", { parent: box, text: "0%" });
    var target = clamp(num(opts.value, 1), 0, 1), until = opts.until != null ? clampT(opts.until) : 1e9;
    st.onFrame(function (t) {
      var on = t >= from - 0.3 && t < until;
      setS(box, "visibility", on ? "visible" : "hidden");
      if (!on) return;
      var p = target * V.ease.outCubic(clamp((t - from) / Math.max(0.2, to - from), 0, 1));
      setS(fill, "width", pct(p));
      var s = Math.round(p * 100) + "%";
      if (pctEl.textContent !== s) pctEl.textContent = s;
    });
    return box;
  };
  /** counting stat. opts: { x, y, width, prefix, suffix, decimals, label, color, dur, until } */
  S.bigStat = function (value, at, opts) {
    opts = opts || {};
    var st = ST(), tl = V.timeline();
    at = clampT(at == null ? 0.3 : at);
    var box = el("div.ia-stat", { parent: st.ui });
    box.style.left = pct(num(opts.x, 0.5)); box.style.top = pct(num(opts.y, 0.42));
    box.style.width = pct(num(opts.width, st.portrait ? 0.9 : 0.5));
    var n = el("div.ia-stat-n", { parent: box, text: "0" });
    if (opts.color) n.style.color = opts.color;
    var lab = opts.label ? el("div.ia-stat-l", { parent: box }) : null;
    if (lab) lab.appendChild(S.rich(opts.label));
    var v = num(value, 0), dec = num(opts.decimals, Math.abs(v) < 10 && v % 1 ? 1 : 0);
    var fmt = function (x) { return str(opts.prefix || "") + V.format(x, dec) + str(opts.suffix || ""); };
    n.textContent = fmt(v);
    fitText(n, { maxLines: 1, min: 24 });
    tl.fromTo(n, { text: 0 }, { text: v, format: fmt }, { at: at, dur: num(opts.dur, 1.1), ease: "outExpo" });
    tl.fromTo(n, { scale: 0.4, opacity: 0, rotate: -8 }, { scale: 1, opacity: 1, rotate: -3 }, { at: at, dur: 0.24, ease: EASE.snap });
    tl.fromTo(n, { scale: 1.18 }, { scale: 1 }, { at: at + num(opts.dur, 1.1), dur: 0.3, ease: EASE.snap });
    if (lab) { tl.fromTo(lab, { opacity: 0, x: -u(60) }, { opacity: 1, x: 0 }, { at: at + 0.3, dur: 0.3, ease: EASE.whip }); fitText(lab, { maxLines: 2, min: 14 }); }
    windowed(box, at, opts.until != null ? clampT(opts.until) + 0.2 : 1e9);
    if (opts.until != null) tl.to(box, { opacity: 0 }, { at: clampT(opts.until), dur: 0.2 });
    return box;
  };
  /** hand-drawn ✓ (red) / ✗ (ink) mark in screen units (0–1). opts: { x, y, size (units), color } */
  S.mark = function (kind, at, opts) {
    opts = opts || {};
    var st = ST(), Ww = st.Ww, cx = num(opts.x, 0.5) * Ww, cy = num(opts.y, 0.5) * 1000, s = num(opts.size, 90);
    var color = opts.color || (kind === "cross" ? INK : RED);
    var grp = g(st.topSvg, { display: "none" }), rnd = V.makeRand(Math.round(cx + cy));
    var d = kind === "strike" ? roughD([[cx - s / 2, cy + 4], [cx - s / 6, cy - 2], [cx + s / 2, cy - 6]], rnd, 7) : kind === "cross"
      ? roughD([[cx - s / 2, cy - s / 2], [cx + s / 2, cy + s / 2]], rnd, 5) + " " + roughD([[cx + s / 2, cy - s / 2], [cx - s / 2, cy + s / 2]], rnd, 5)
      : roughD([[cx - s / 2, cy], [cx - s / 8, cy + s / 2.3], [cx + s / 1.8, cy - s / 2]], rnd, 5);
    var p = svgEl("path", { d: d, fill: "none", stroke: color, "stroke-width": fx(kind === "strike" ? Math.max(6, s * 0.018) : s * 0.14), "stroke-linecap": "round", "stroke-linejoin": "round", opacity: kind === "strike" ? 0.6 : 1 }, grp);
    var len = 400;
    try { len = p.getTotalLength() || 400; } catch (e) {}
    p.setAttribute("stroke-dasharray", fx(len) + " " + fx(len));
    at = clampT(at == null ? 0.3 : at);
    var until = opts.until != null ? clampT(opts.until) : 1e9;
    st.onFrame(function (t) {
      var on = t >= at && t < until;
      setD(grp, on);
      if (!on) return;
      var q = EASE.whip(clamp((t - at) / 0.32, 0, 1));
      setA(p, "stroke-dashoffset", fx(len * (1 - q)));
      var pop = 1 + 0.2 * Math.max(0, 1 - (t - at) * 4);
      setA(grp, "transform", "translate(" + P2(cx, cy) + ") scale(" + fx(pop * 100) / 100 + ") translate(" + P2(-cx, -cy) + ")");
    });
    return grp;
  };
  /** week / day counter ticking between two values. opts: { x, y, start, end, label, from, to, until, prefix } */
  S.weekCounter = function (from, to, opts) {
    opts = opts || {};
    var st = ST();
    from = clampT(from == null ? 0.3 : from); to = clampT(to == null ? D() - 0.5 : to);
    var box = el("div.ia-week", { parent: st.ui });
    box.style.left = pct(num(opts.x, 0.5)); box.style.top = pct(num(opts.y, 0.1));
    var l = el("div.ia-week-l", { parent: box, text: plain(opts.label || "WEEK") });
    var n = el("div.ia-week-n", { parent: box, text: String(num(opts.start, 0)) });
    var a = num(opts.start, 0), b = num(opts.end, 12), until = opts.until != null ? clampT(opts.until) : 1e9;
    st.onFrame(function (t) {
      var on = t >= from - 0.2 && t < until;
      setS(box, "visibility", on ? "visible" : "hidden");
      if (!on) return;
      var p = clamp((t - from) / Math.max(0.2, to - from), 0, 1), k = Math.round(lerp(a, b, p));
      var s = String(k);
      if (n.textContent !== s) n.textContent = s;
      var frac = (lerp(a, b, p) % 1);
      setS(n, "transform", "scale(" + fx((1 + 0.18 * Math.max(0, 1 - frac * 3)) * 100) / 100 + ")");
    });
    return box;
  };
  /** small ink kicker tag. opts: { x, y, until, color } */
  S.tag = function (text, at, opts) {
    opts = opts || {};
    var st = ST(), tl = V.timeline();
    at = clampT(at == null ? 0.2 : at);
    var b = el("div.ia-tag", { parent: st.ui, text: plain(text) });
    b.style.left = pct(num(opts.x, 0.5)); b.style.top = pct(num(opts.y, 0.08));
    if (opts.color) b.style.background = opts.color;
    windowed(b, at, opts.until != null ? clampT(opts.until) + 0.2 : 1e9);
    tl.fromTo(b, { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" }, { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }, { at: at, dur: 0.25, ease: EASE.whip });
    return b;
  };
  /** narration captions at the bottom (phrases from V.words). opts: { from, to, maxWords } */
  S.caption = function (opts) {
    opts = opts || {};
    var st = ST(), W = words(), list = [];
    var maxWords = opts.maxWords || (st.portrait ? 5 : 8), cur = null;
    for (var i = 0; i < W.length; i++) {
      var w = W[i];
      if (opts.from != null && w.start < opts.from) continue;
      if (opts.to != null && w.start > opts.to) continue;
      if (cur && (w.start - cur.e > 0.35 || cur.n >= maxWords)) { list.push(cur); cur = null; }
      if (!cur) cur = { s: w.start, e: w.end, text: "", n: 0 };
      cur.text += (cur.n ? " " : "") + w.word; cur.e = w.end; cur.n++;
      if (/[.!?;:]$/.test(w.word)) { list.push(cur); cur = null; }
    }
    if (cur) list.push(cur);
    if (!list.length) {
      var txt = plain(V.narration || "").split(/\s+/).filter(Boolean), chunks = [];
      for (var j = 0; j < txt.length && chunks.length < 40; j += 7) chunks.push(txt.slice(j, j + 7).join(" "));
      var a = 0.3, b = Math.max(a + 0.5, D() - 0.3), step = (b - a) / Math.max(1, chunks.length);
      list = chunks.map(function (c, k) { return { text: c, s: a + k * step, e: a + (k + 1) * step - 0.1 }; });
    }
    var wrap = el("div.ia-cap", { parent: st.ui });
    list.forEach(function (L, k) {
      var line = el("div.ia-cap-l", { parent: wrap, text: L.text });
      var next = list[k + 1] ? list[k + 1].s : 1e9;
      windowed(line, L.s - 0.08, Math.max(L.s + 0.3, Math.min(next - 0.02, L.e + 0.9)));
      fitText(line, { maxLines: 2, min: 14 });
    });
    return wrap;
  };

  // ───────────────────────── anatomy cut-away limb (world space) ─────────────────────────
  /**
   * Big side-view limb with muscle / tendon / bone layers. opts: { limb: "arm"|"leg"|"forearm", x, y, scale, focus }
   * Returns { g, layers: {skin,muscle,tendon,bone}, anchor(layer) → {x,y}, focus(layer, at), reveal(layer, at) }.
   */
  STP.anatomyLimb = function (opts) {
    opts = opts || {};
    var st = this, limb = opts.limb === "leg" ? "leg" : opts.limb === "forearm" ? "forearm" : "arm";
    var sc = num(opts.scale, 1), x = num(opts.x, this.Ww / 2), y = num(opts.y, 500);
    var root = g(this.wfx, { transform: "translate(" + P2(x, y) + ") scale(" + fx(sc * 100) / 100 + ")" });
    var L = { skin: g(root), bone: g(root), tendon: g(root), muscle: g(root), cut: g(root) };
    var anchors = {}, rnd = V.makeRand(77);
    function belly(parent, cx, cy, rx, ry, rot, kind) {
      var gg = g(parent, { transform: "translate(" + P2(cx, cy) + ") rotate(" + fx(rot || 0) + ")" });
      var e = svgEl("ellipse", { cx: 0, cy: 0, rx: fx(rx), ry: fx(ry), fill: st.pHatch, stroke: INK, "stroke-width": 4 }, gg);
      var lines = thinLine(gg, "M" + P2(-rx * 0.55, -ry * 0.5) + " Q" + P2(-rx * 0.15, 0) + " " + P2(-rx * 0.5, ry * 0.55) + " M" + P2(0, -ry * 0.8) + " Q" + P2(rx * 0.35, 0) + " " + P2(0.05 * rx, ry * 0.8) + " M" + P2(rx * 0.55, -ry * 0.45) + " Q" + P2(rx * 0.78, 0) + " " + P2(rx * 0.5, ry * 0.5), 2.6);
      return { g: gg, e: e, lines: lines, kind: kind };
    }
    function band(parent, x1, y1, x2, y2, w) {
      var dx = x2 - x1, dy = y2 - y1, Ln = Math.sqrt(dx * dx + dy * dy) || 1, nx = -dy / Ln * w / 2, ny = dx / Ln * w / 2;
      var gg = g(parent);
      var p = svgEl("path", { d: "M" + P2(x1 + nx, y1 + ny) + " L" + P2(x2 + nx, y2 + ny) + " L" + P2(x2 - nx, y2 - ny) + " L" + P2(x1 - nx, y1 - ny) + "Z", fill: PAPER, stroke: INK, "stroke-width": 3.5, "stroke-linejoin": "round" }, gg);
      var lines = thinLine(gg, "M" + P2(x1 + nx * 0.5, y1 + ny * 0.5) + " L" + P2(x2 + nx * 0.5, y2 + ny * 0.5) + " M" + P2(x1 - nx * 0.5, y1 - ny * 0.5) + " L" + P2(x2 - nx * 0.5, y2 - ny * 0.5), 2, { opacity: 0.8 });
      return { g: gg, e: p, lines: lines };
    }
    function bone(parent, x1, y1, x2, y2, w) {
      var dx = x2 - x1, dy = y2 - y1, Ln = Math.sqrt(dx * dx + dy * dy) || 1, ang = Math.atan2(dy, dx) * 180 / PI;
      var gg = g(parent, { transform: "translate(" + P2(x1, y1) + ") rotate(" + fx(ang) + ")" });
      var p = svgEl("path", { d: "M" + P2(w * 0.9, -w * 0.5) + " Q" + P2(Ln * 0.5, -w * 0.3) + " " + P2(Ln - w * 0.9, -w * 0.5) + " Q" + P2(Ln - w * 0.3, -w * 1.4) + " " + P2(Ln + w * 0.3, -w * 0.9) + " Q" + P2(Ln + w * 0.9, 0) + " " + P2(Ln + w * 0.3, w * 0.9) + " Q" + P2(Ln - w * 0.3, w * 1.4) + " " + P2(Ln - w * 0.9, w * 0.5) + " Q" + P2(Ln * 0.5, w * 0.3) + " " + P2(w * 0.9, w * 0.5) + " Q" + P2(w * 0.3, w * 1.4) + " " + P2(-w * 0.3, w * 0.9) + " Q" + P2(-w * 0.9, 0) + " " + P2(-w * 0.3, -w * 0.9) + " Q" + P2(w * 0.3, -w * 1.4) + " " + P2(w * 0.9, -w * 0.5) + "Z", fill: PAPER, stroke: INK, "stroke-width": 4, "stroke-linejoin": "round" }, gg);
      var lines = thinLine(gg, "M" + P2(w * 1.4, -w * 0.15) + " L" + P2(Ln - w * 1.4, -w * 0.15), 2.4, { opacity: 0.7 });
      return { g: gg, e: p, lines: lines };
    }
    var parts = { muscle: [], tendon: [], bone: [] };
    // geometry helpers: segment A→B, d = unit direction, n = unit normal (upper side)
    function seg2(A, B) { var dx = B[0] - A[0], dy = B[1] - A[1], Ln = Math.sqrt(dx * dx + dy * dy) || 1; return { A: A, B: B, d: [dx / Ln, dy / Ln], n: [dy / Ln, -dx / Ln], L: Ln, ang: Math.atan2(dy, dx) * 180 / PI }; }
    function at(S, along, side) { return [S.A[0] + S.d[0] * along + S.n[0] * side, S.A[1] + S.d[1] * along + S.n[1] * side]; }
    function capsule(S, w0, w1) {
      var p0 = at(S, 0, w0), p1 = at(S, S.L, w1), p2 = at(S, S.L, -w1), p3 = at(S, 0, -w0);
      return "M" + P2(p0[0], p0[1]) + " Q" + P2((p0[0] + p1[0]) / 2 + S.n[0] * (w0 + w1) * 0.25, (p0[1] + p1[1]) / 2 + S.n[1] * (w0 + w1) * 0.25) + " " + P2(p1[0], p1[1]) +
        " A" + P2(w1, w1) + " 0 0 1 " + P2(p2[0], p2[1]) +
        " Q" + P2((p2[0] + p3[0]) / 2 - S.n[0] * (w0 + w1) * 0.2, (p2[1] + p3[1]) / 2 - S.n[1] * (w0 + w1) * 0.2) + " " + P2(p3[0], p3[1]) +
        " A" + P2(w0, w0) + " 0 0 1 " + P2(p0[0], p0[1]) + "Z";
    }
    function skinOf(segs, widths, joints) {
      var i;
      for (i = 0; i < segs.length; i++) { var dd = capsule(segs[i], widths[i][0], widths[i][1]); svgEl("path", { d: dd, fill: PAPER, stroke: INK, "stroke-width": 7, "stroke-linejoin": "round" }, L.skin); }
      for (i = 0; i < joints.length; i++) svgEl("circle", { cx: fx(joints[i][0][0]), cy: fx(joints[i][0][1]), r: fx(joints[i][1]), fill: PAPER }, L.skin);
      for (i = 0; i < segs.length; i++) { var dd2 = capsule(segs[i], widths[i][0], widths[i][1]); svgEl("path", { d: dd2, fill: st.pHatch2, mask: st.shadeMask, opacity: 0.45 }, L.skin); thinLine(L.skin, capsule(segs[i], widths[i][0] - 16, widths[i][1] - 14), 2.2, { opacity: 0.6 }); }
    }
    function bellyOn(S, along, side, rx, ry, kind) { var c = at(S, along, side); return belly(L.muscle, c[0], c[1], rx, ry, S.ang, kind); }
    function bandOn(S, a0, s0, a1, s1, w) { var p0 = at(S, a0, s0), p1 = at(S, a1, s1); return band(L.tendon, p0[0], p0[1], p1[0], p1[1], w); }
    function boneOn(S, a0, a1, side, w) { var p0 = at(S, a0, side), p1 = at(S, a1, side); return bone(L.bone, p0[0], p0[1], p1[0], p1[1], w); }
    var S1, S2, m1, m2;
    if (limb === "arm") {
      S1 = seg2([-420, -40], [40, 40]); S2 = seg2([40, 40], [440, -120]);
      skinOf([S1, S2], [[150, 128], [118, 72]], [[[40, 40], 100]]);
      parts.bone.push(boneOn(S1, 30, S1.L - 20, 0, 24));
      parts.bone.push(boneOn(S2, 30, S2.L - 10, 16, 15));
      parts.bone.push(boneOn(S2, 36, S2.L - 10, -18, 12));
      parts.muscle.push(bellyOn(S1, S1.L * 0.46, 62, S1.L * 0.36, 44, "biceps"));
      parts.muscle.push(bellyOn(S1, S1.L * 0.5, -66, S1.L * 0.34, 34, "triceps"));
      parts.muscle.push(bellyOn(S2, S2.L * 0.36, 44, S2.L * 0.3, 30, "forearm"));
      parts.tendon.push(bandOn(S1, S1.L * 0.82, 52, S1.L + 50, 24, 22));
      parts.tendon.push(bandOn(S2, S2.L * 0.66, 46, S2.L - 20, 30, 16));
      parts.tendon.push(bandOn(S1, S1.L * 0.84, -58, S1.L + 30, -46, 18));
      m1 = at(S1, S1.L * 0.46, 62); m2 = at(S1, S1.L * 0.9, 44);
      anchors = { muscle: m1, tendon: m2, bone: at(S2, S2.L * 0.6, -6), skin: at(S1, 0, 150) };
    } else if (limb === "leg") {
      S1 = seg2([-440, -130], [60, -10]); S2 = seg2([60, -10], [410, 150]);
      skinOf([S1, S2], [[170, 140], [124, 78]], [[[60, -10], 110]]);
      parts.bone.push(boneOn(S1, 30, S1.L - 24, 0, 28));
      parts.bone.push(boneOn(S2, 40, S2.L - 10, 6, 20));
      parts.muscle.push(bellyOn(S1, S1.L * 0.46, 70, S1.L * 0.38, 50, "quads"));
      parts.muscle.push(bellyOn(S1, S1.L * 0.5, -72, S1.L * 0.34, 38, "hamstrings"));
      parts.muscle.push(bellyOn(S2, S2.L * 0.38, -52, S2.L * 0.32, 40, "calf"));
      parts.tendon.push(bandOn(S1, S1.L * 0.84, 62, S1.L + 70, 50, 26));
      parts.tendon.push(bandOn(S2, S2.L * 0.7, -50, S2.L - 10, -36, 20));
      anchors = { muscle: at(S1, S1.L * 0.46, 70), tendon: at(S2, S2.L * 0.85, -44), bone: at(S1, S1.L * 0.5, 0), skin: at(S1, 0, 170) };
    } else {
      S1 = seg2([-440, 0], [240, -40]); S2 = seg2([240, -40], [470, -60]);
      skinOf([S1, S2], [[124, 86], [84, 60]], [[[240, -40], 70]]);
      parts.bone.push(boneOn(S1, 30, S1.L - 10, 20, 18));
      parts.bone.push(boneOn(S1, 36, S1.L - 10, -24, 14));
      parts.muscle.push(bellyOn(S1, S1.L * 0.36, 44, S1.L * 0.3, 40, "flexors"));
      parts.muscle.push(bellyOn(S1, S1.L * 0.4, -50, S1.L * 0.26, 30, "extensors"));
      parts.tendon.push(bandOn(S1, S1.L * 0.6, 48, S1.L + 170, 26, 14));
      parts.tendon.push(bandOn(S1, S1.L * 0.6, 2, S1.L + 170, 0, 12));
      parts.tendon.push(bandOn(S1, S1.L * 0.64, -46, S1.L + 170, -24, 12));
      anchors = { muscle: at(S1, S1.L * 0.36, 44), tendon: at(S1, S1.L * 0.9, 34), bone: at(S1, S1.L * 0.5, 0), skin: at(S1, 0, 124) };
    }
    // dashed cut line across the skin (manga cut-away)
    svgEl("path", { d: "M-470,-240 L480,-240", stroke: "none" }, L.cut);
    var api = { g: root, layers: L, parts: parts, focusList: [], revealList: [] };
    api.anchor = function (layer) { var a = anchors[layer] || [0, 0]; return { x: x + a[0] * sc, y: y + a[1] * sc }; };
    api.focus = function (layer, at) { api.focusList.push({ t: clampT(at == null ? 0 : at), layer: layer }); api.focusList.sort(function (a, b) { return a.t - b.t; }); return api; };
    api.reveal = function (layer, at) { api.revealList.push({ t: clampT(at), layer: layer }); return api; };
    if (opts.focus) api.focus(opts.focus, 0);
    var lastFocus = null;
    this.onFrame(function (t) {
      var f = null, i;
      for (i = 0; i < api.focusList.length; i++) { if (api.focusList[i].t > t) break; f = api.focusList[i].layer; }
      var pulse = 0;
      for (i = 0; i < api.focusList.length; i++) { var lp = t - api.focusList[i].t; if (lp >= 0 && lp < 0.8) pulse = Math.max(pulse, Math.exp(-lp * 5) * Math.abs(Math.sin(lp * 16))); }
      if (f !== lastFocus) {
        ["muscle", "tendon", "bone"].forEach(function (k) {
          parts[k].forEach(function (p) {
            var on = f === k || f === "all";
            p.e.setAttribute("fill", on ? (k === "muscle" ? st.pStria : k === "tendon" ? st.pStriaT : "#FBE9E9") : (k === "muscle" ? st.pHatch : PAPER));
            p.e.setAttribute("stroke", on ? (k === "muscle" ? RED2 : RED) : INK);
            p.lines.setAttribute("stroke", on ? RED2 : INK);
          });
        });
        lastFocus = f;
      }
      var sc2 = fx((1 + pulse * 0.08) * 1000) / 1000;
      ["muscle", "tendon", "bone"].forEach(function (k) { setA(L[k], "transform", f === k && pulse > 0.01 ? "scale(" + sc2 + ")" : ""); });
      // layer reveals
      ["skin", "muscle", "tendon", "bone"].forEach(function (k) {
        var r = null;
        for (var j = 0; j < api.revealList.length; j++) if (api.revealList[j].layer === k) r = api.revealList[j];
        if (!r) return;
        var p = clamp((t - r.t) / 0.3, 0, 1);
        setA(L[k], "opacity", String(fx(p * 100) / 100));
        setD(L[k], p > 0);
      });
    });
    return api;
  };

  // ───────────────────────── ink chart (world space) ─────────────────────────
  /**
   * Hand-drawn chart. opts: { x, y, w, h, type: "line"|"bars", series: [{ label, values, color }], xLabels, yLabel, max }
   * times: reveal times per x index (line: draw-on; bars: grow). Returns { g, point(si, i) → {x,y} }.
   */
  STP.inkChart = function (opts, times) {
    opts = opts || {};
    var st = this, Ww = this.Ww;
    var x0 = num(opts.x, Ww * 0.12), y0 = num(opts.y, 160), w = num(opts.w, Ww * 0.76), h = num(opts.h, 560);
    var series = arr(opts.series).filter(function (s) { return s && arr(s.values).length; }).slice(0, 3);
    if (!series.length) series = [{ label: "", values: [1, 2, 3] }];
    var n = 0, max = num(opts.max, 0), i, j;
    series.forEach(function (s) { s.values = arr(s.values).slice(0, 12).map(function (v) { return num(v, 0); }); n = Math.max(n, s.values.length); s.values.forEach(function (v) { max = Math.max(max, v); }); });
    if (max <= 0) max = 1;
    max *= 1.12;
    var grp = g(this.wfx), rnd = V.makeRand(23);
    var type = opts.type === "bars" ? "bars" : "line";
    // axes
    thinLine(grp, roughD([[x0, y0], [x0, y0 + h]], rnd, 5) + " " + roughD([[x0, y0 + h], [x0 + w, y0 + h]], rnd, 5), 6);
    thinLine(grp, "M" + P2(x0 - 12, y0 + 16) + " L" + P2(x0, y0 - 4) + " L" + P2(x0 + 12, y0 + 16) + " M" + P2(x0 + w - 16, y0 + h - 12) + " L" + P2(x0 + w + 4, y0 + h) + " L" + P2(x0 + w - 16, y0 + h + 12), 5);
    if (opts.yLabel) { var yl = svgEl("text", { x: fx(x0 + 16), y: fx(y0 + 2), "font-size": 32, "font-family": "var(--ia-hand)", "font-weight": 700, fill: INK }, grp); yl.textContent = plain(opts.yLabel); }
    var xs = [], gapL = type === "bars" ? w / n : w / Math.max(1, n - 1);
    for (i = 0; i < n; i++) xs.push(type === "bars" ? x0 + gapL * (i + 0.5) : x0 + 40 + ((w - 80) * i) / Math.max(1, n - 1));
    var xl = arr(opts.xLabels);
    for (i = 0; i < n; i++) {
      if (!xl[i] || (st.portrait && n > 4 && i % 2)) continue;
      var tx = svgEl("text", { x: fx(xs[i]), y: fx(y0 + h + 42), "text-anchor": "middle", "font-size": st.portrait ? 24 : 28, "font-family": "var(--ia-hand)", "font-weight": 700, fill: INK }, grp);
      tx.textContent = plain(str(xl[i])).slice(0, 10);
    }
    function py(v) { return y0 + h - (v / max) * (h - 30); }
    var pts = [], nodes = [];
    series.forEach(function (s, si) {
      var color = s.color || (si === 0 ? RED : si === 1 ? INK : ORANGE);
      pts[si] = s.values.map(function (v, k) { return [xs[k], py(v)]; });
      if (type === "bars") {
        s.values.forEach(function (v, k) {
          var bw = (gapL * 0.6) / series.length, bx = xs[k] - (gapL * 0.6) / 2 + si * bw, by = py(v), bh = y0 + h - by;
          var bg = g(grp);
          var r1 = svgEl("rect", { x: fx(bx), y: fx(by), width: fx(bw), height: fx(bh), fill: si === 0 ? st.pRedHatch : st.pHatch }, bg);
          var r2 = svgEl("path", { d: roughD([[bx, y0 + h], [bx, by], [bx + bw, by], [bx + bw, y0 + h]], rnd, 4), fill: "none", stroke: color, "stroke-width": 5, "stroke-linejoin": "round" }, bg);
          nodes.push({ g: bg, k: k, si: si, by: by, bh: bh, r1: r1 });
        });
      } else {
        var d = roughD(pts[si], rnd, 3);
        var line = svgEl("path", { d: d, fill: "none", stroke: color, "stroke-width": si === 0 ? 8 : 6, "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-dasharray": si ? "14 10" : null }, grp);
        var len = 1000;
        try { len = line.getTotalLength() || 1000; } catch (e) {}
        line.setAttribute("stroke-dasharray", fx(len) + " " + fx(len));
        var dots = pts[si].map(function (p) { return svgEl("circle", { cx: fx(p[0]), cy: fx(p[1]), r: 9, fill: PAPER, stroke: color, "stroke-width": 4, display: "none" }, grp); });
        nodes.push({ line: line, len: len, dots: dots, si: si });
      }
      if (s.label) {
        var last = pts[si][pts[si].length - 1];
        var lt = svgEl("text", { x: fx(last[0] + 18), y: fx(last[1] - 14), "font-size": 30, "font-family": "var(--ia-hand)", "font-weight": 700, fill: color, "paint-order": "stroke", stroke: PAPER, "stroke-width": 6 }, grp);
        lt.textContent = plain(s.label);
        nodes.push({ label: lt, si: si, k: n - 1 });
      }
    });
    times = times || spread(n, 0.4, D() - 0.8);
    this.onFrame(function (t) {
      nodes.forEach(function (nd) {
        if (nd.line) {
          var k = 0;
          for (var q = 0; q < n; q++) { if (t >= times[q]) k = q; }
          var p = k >= n - 1 ? 1 : (k + clamp((t - times[k]) / Math.max(0.2, times[k + 1] - times[k]), 0, 1)) / (n - 1);
          if (t < times[0]) p = 0;
          setA(nd.line, "stroke-dashoffset", fx(nd.len * (1 - p)));
          nd.dots.forEach(function (dt, q2) { setD(dt, t >= times[q2]); });
        } else if (nd.r1) {
          var pb = EASE.pop(clamp((t - times[nd.k]) / 0.4, 0, 1));
          setA(nd.g, "transform", "translate(0," + fx(nd.by + nd.bh) + ") scale(1," + fx(Math.max(0.001, pb) * 1000) / 1000 + ") translate(0," + fx(-(nd.by + nd.bh)) + ")");
          setD(nd.g, t >= times[nd.k]);
        } else if (nd.label) setD(nd.label, t >= times[nd.k] + 0.2);
      });
    });
    return { g: grp, point: function (si, i) { var p = (pts[si] || pts[0])[clamp(i, 0, n - 1)]; return { x: p[0], y: p[1] }; }, times: times, xs: xs, py: py };
  };

  // ───────────────────────── bad-form variants (form-check) ─────────────────────────
  function variant(base, o) { var p = {}; for (var k in POSES[base]) p[k] = POSES[base][k]; for (var j in o) p[j] = o[j]; return p; }
  POSES["pushup-up-bad"] = variant("pushup-up", { hy: -112, tor: 70, head: -30, thN: -104, shN: -108, thF: -106, shF: -107 });
  POSES["pushup-down-bad"] = variant("pushup-down", { hy: -34, tor: 86, head: -40 });
  POSES["squat-up-bad"] = variant("squat-up", { tor: 12 });
  POSES["squat-down-bad"] = variant("squat-down", { tor: 62, head: -30, hy: -200, hx: -60, thN: 50, shN: -40, thF: 48, shF: -38, ftN: 70, ftF: 70 });
  POSES["plank-bad"] = variant("plank", { hy: -170, tor: 50, head: -30, thN: -100, shN: -102, thF: -102, shF: -100 });
  POSES["plank-b-bad"] = variant("plank-b", { hy: -176, tor: 51, head: -31, thN: -101, shN: -103, thF: -103, shF: -101 });
  POSES["hang-bad"] = variant("hang", { tor: 16, head: 10 });
  POSES["pullup-up-bad"] = variant("pullup-up", { hy: -420, tor: 26, head: 6, thN: 60, shN: -20, thF: 56, shF: -16, uaN: 10, faN: 176, uaF: 6, faF: 178 });
  POSES["lunge-a-bad"] = variant("lunge-a", { tor: 14 });
  POSES["lunge-b-bad"] = variant("lunge-b", { hx: 95, tor: 28, head: 6, thN: 78, shN: 32, thF: -36, shF: -14 });
  POSES["dip-up-bad"] = variant("dip-up", { tor: 26, head: 14 });
  POSES["dip-down-bad"] = variant("dip-down", { tor: 40, head: 18, uaN: -70, faN: 70, uaF: -72, faF: 68 });
  POSES["curl-a-bad"] = variant("curl-a", { tor: -10 });
  POSES["curl-b-bad"] = variant("curl-b", { tor: -28, head: 8, uaN: 42, faN: 150 });
  POSES["lift-a-bad"] = variant("lift-a", { tor: 88, head: -20, hy: -300, thN: 18, shN: -14, thF: 16, shF: -12 });
  POSES["lift-b-bad"] = variant("lift-b", { tor: -24, head: 12 });
  POSES["handstand-bad"] = variant("handstand", { tor: 200, head: -50, thN: 150, shN: 160, thF: 148, shF: 158, hx: 40 });
  POSES["handstand-b-bad"] = variant("handstand-b", { tor: 202, head: -51, thN: 148, shN: 158, thF: 146, shF: 156, hx: 42 });
  POSES["planche-bad"] = variant("planche", { hy: -180, tor: 72, thN: -70, shN: -70, thF: -72, shF: -70, head: -50 });
  POSES["planche-b-bad"] = variant("planche-b", { hy: -176, tor: 73, thN: -71, shN: -71, thF: -73, shF: -71, head: -51 });
  POSES["run-a-bad"] = variant("run-a", { tor: 34, head: 4, hy: -316 });
  POSES["run-b-bad"] = variant("run-b", { tor: 34, head: 4, hy: -326 });
  POSES["stand-bad"] = variant("slouch", {});
  POSES["stand-b-bad"] = variant("slouch", { hy: -314 });
  Object.keys(EXERCISES).forEach(function (k) {
    var ex = EXERCISES[k], bad = { };
    for (var q in ex) bad[q] = ex[q];
    bad.poses = ex.poses.map(function (pn) { return POSES[pn + "-bad"] ? pn + "-bad" : pn; });
    bad.shake = ex.shake * 1.3;
    EXERCISES[k + "-bad"] = bad;
  });
  var BAD_POINT = { pushup: "hip", squat: "chest", plank: "hip", pullup: "chest", lunge: "kneeN", dip: "neck", curl: "chest", lift: "chest", handstand: "hip", planche: "hip", sprint: "head", hang: "neck", flex: "chest", idle: "chest" };
  var BAD_TIP = { pushup: "hips sagging", squat: "back rounded, heels up", plank: "hips piked", pullup: "swinging, half rep", lunge: "knee past the toes", dip: "shoulders shrugged", curl: "swinging the back", lift: "rounded spine", handstand: "banana back", planche: "hips dropped", sprint: "leaning too far", hang: "shrugged shoulders", flex: "", idle: "" };

  // ───────────────────────── template helpers ─────────────────────────
  function begin(root, p) { return new Stage(root, { bg: p.bg === "black" ? "black" : "white" }); }
  function T0() { return Math.min(0.3, D() * 0.08); }
  function mid(a, b) { return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }; }
  /** world point of a muscle group on a figure at time t */
  function musclePoint(fig, name, t) {
    var n = hlName(name), f = fig.facingAt(t), s = fig.s, w = function (j) { return fig.world(j, t); };
    switch (n) {
      case "biceps": { var m = mid(w("shN"), w("elbowN")); m.x += f * 18 * s; return m; }
      case "triceps": { var m2 = mid(w("shN"), w("elbowN")); m2.x -= f * 18 * s; return m2; }
      case "forearms": case "elbow-tendon": return n === "forearms" ? mid(w("elbowN"), w("wristN")) : w("elbowN");
      case "grip": return w("wristN");
      case "shoulders": return w("shN");
      case "chest": { var c = w("chest"); c.x += f * 36 * s; c.y += 40 * s; return c; }
      case "abs": case "core": { var ab = mid(w("chest"), w("hip")); ab.x += f * 20 * s; return ab; }
      case "lats": case "back": { var bk = mid(w("chest"), w("hip")); bk.x -= f * 44 * s; bk.y -= 20 * s; return bk; }
      case "glutes": { var gl = w("hip"); gl.x -= f * 30 * s; gl.y += 10 * s; return gl; }
      case "quads": case "legs": { var q = mid(w("hipN"), w("kneeN")); q.x += f * 14 * s; return q; }
      case "hamstrings": { var hm = mid(w("hipN"), w("kneeN")); hm.x -= f * 18 * s; return hm; }
      case "calves": { var cv = mid(w("kneeN"), w("ankleN")); cv.x -= f * 16 * s; return cv; }
      case "achilles": { var ac = w("ankleN"); ac.x -= f * 12 * s; ac.y -= 20 * s; return ac; }
      case "patellar": case "bones": return w("kneeN");
      case "tendons": return w("elbowN");
      case "arms": return mid(w("shN"), w("elbowN"));
      default: return w("chest");
    }
  }
  function labelSpot(st, pt, prefer) {
    // place a label away from the point, inside the frame
    var Ww = st.Ww, right = prefer === "right" || (prefer == null && pt.x < Ww * 0.5);
    var lx = right ? Math.min(Ww * 0.92, pt.x + Ww * (st.portrait ? 0.26 : 0.2)) : Math.max(Ww * 0.08, pt.x - Ww * (st.portrait ? 0.26 : 0.2));
    var ly = clamp(pt.y - (st.portrait ? 190 : 150), 120, 900);
    return { lx: lx, ly: ly, align: right ? "start" : "end" };
  }
  function autoKeyword(p, fields) { for (var i = 0; i < fields.length; i++) if (p[fields[i]]) return S.autoKey(p[fields[i]]); return null; }
  var WIDE = { pushup: 1, plank: 1, planche: 1, sprint: 1, lift: 1, lunge: 1, tug: 1 };
  function wideFix(st, fr, exn) { if (st.portrait && WIDE[exn]) fr.scale *= 0.74; else if (st.square && WIDE[exn]) fr.scale *= 0.9; return fr; }
  function groundProps(st, fig, exn, gx, gy, opts) {
    opts = opts || {};
    var ex = EXERCISES[exn];
    if (ex.floor !== false || ex.floor) st.floor(gx, gy, num(opts.floorW, 620 * fig.s), { shadow: true });
    if (ex.prop === "bar") { var h = fig.world("handN", 0); st.prop("bar", { x: gx, y: h.y, w: 400 * fig.s, h: opts.barH }); }
    else if (ex.prop === "dipbars") { var hd = fig.world("wristN", 0); st.prop("dipbars", { x: gx, y: hd.y, ground: gy, w: 380 * fig.s }); st.floor(gx, gy, 520 * fig.s, { shadow: false, thin: true }); }
    else if (ex.prop === "boulder") st.prop("boulder", { fig: fig, r: 90 });
    else if (ex.prop === "dumbbell") st.prop("dumbbell", { fig: fig });
    else if (ex.prop === "rope" && opts.rope !== false) st.prop("rope", { a: fig, x2: fig.facing > 0 ? st.Ww + 200 : -200, length: 1400 });
  }

  // ───────────────────────── templates ─────────────────────────
  var T = {};

  T["exercise-demo"] = function (root, p) {
    var st = begin(root, p), Dd = D(), Ww = st.Ww, P = st.portrait;
    var who = castId(p.character || "rook"), exn = exName(p.exercise || "pushup"), ex = EXERCISES[exn];
    var muscle = hlName(p.muscle || ex.muscle);
    var hasTitle = !!p.title, hasLabel = !!p.label;
    var tKey = syncAt(p.keyword || autoKeyword(p, ["label", "title"]), 0, Dd * 0.35);
    var fr = st.frame(P ? "center" : hasTitle || hasLabel ? 0.3 : "center", hasTitle && !P ? "default" : "hero");
    if (P && hasTitle) { fr.y = 900; fr.scale *= 0.92; }
    if (st.square) fr.scale *= 0.92;
    wideFix(st, fr, exn);
    if (hasTitle) S.thumbText(p.title, T0(), { pos: P ? "top" : "top-right", size: "md", kicker: p.kicker, maxWidth: P ? 0.9 : 0.5 });
    var fig = new Figure(st, who, { x: fr.x, y: fr.y, scale: fr.scale, facing: p.facing || "right", expression: p.expression || "focus" });
    fig.exercise(exn, 0, { period: num(p.period, ex.period) });
    groundProps(st, fig, exn, fr.x, fr.y, {});
    if (muscle !== "none") {
      var tM = Math.min(tKey, Math.max(0.3, Dd * 0.12));
      if (p.highlightEarly !== false && tM < tKey - 0.4) fig.highlight(muscle, tM, { pulse: false });
      fig.highlight(muscle, tKey, { pulse: true });
      fig.pulse(Math.min(Dd - 0.3, tKey + 1.4), 0.6);
    }
    if (ex.speed) st.speedLines(0, 1e9, { dir: fig.facing > 0 ? "right" : "left", layer: "under", opacity: 0.5, count: 30 });
    fig.sweat(Math.min(Dd - 0.5, tKey + 1.0), 1e9);
    // camera: slow push, punch-in on the key word, settle back
    var mp = musclePoint(fig, muscle === "none" ? "chest" : muscle, tKey);
    st.cam.set({ zoom: 1 }).push(1.06, 0, Math.max(0.8, tKey));
    if (p.punch !== false) {
      st.cam.punch(tKey, P ? 1.18 : 1.22, mp.x, mp.y, 0.14, 0.3);
      st.cam.to({ x: Ww / 2, y: 500, zoom: 1.04 }, Math.min(Dd - 0.4, tKey + 1.9), 0.7, "inOutCubic");
      st.cam.shake(tKey, 10, 0.35);
    }
    if (hasLabel) {
      var spot = labelSpot(st, mp, P ? null : "right");
      st.annotate(p.label, { x: mp.x, y: mp.y, lx: spot.lx, ly: spot.ly, align: spot.align, at: tKey + 0.05, size: P ? 40 : 42, width: P ? 12 : 16, minY: hasTitle && !P ? (st.square ? 420 : 340) : 0 });
    }
    if (p.note) st.handText(p.note, P ? Ww * 0.8 : Ww * 0.6, P ? 600 : 800, { at: Math.min(Dd - 0.6, tKey + 1.2), size: 36, color: INK, rotate: 3 });
    if (p.reps !== false && exn !== "idle" && !ex.tremble) S.repCounter(0.2, { period: num(p.period, ex.period), x: P ? 0.2 : 0.86, y: P ? 0.9 : hasTitle ? 0.6 : 0.16, label: p.repsLabel || "REPS", max: num(p.maxReps, 999) });
    if (p.sets) S.setsBadge(p.sets, Math.min(Dd - 0.5, tKey + 0.6), { x: P ? 0.78 : 0.86, y: P ? 0.9 : 0.84 });
    if (p.caption) S.caption({});
  };

  T["anatomy-zoom"] = function (root, p) {
    var st = begin(root, p), Dd = D(), Ww = st.Ww, P = st.portrait;
    var limb = p.limb || "arm", labels = arr(p.labels).filter(function (l) { return l && l.text; }).slice(0, 4);
    var hasTitle = !!p.title;
    var sc = P ? 0.52 : st.square ? 0.72 : 0.84;
    var cy = P ? (hasTitle ? 560 : 500) : hasTitle ? 560 : 500;
    if (hasTitle) S.thumbText(p.title, T0(), { pos: "top", size: "md", kicker: p.kicker });
    var limbArt = st.anatomyLimb({ limb: limb, x: Ww / 2, y: cy, scale: sc });
    // layers pop in: skin → muscle → tendon → bone
    var t0 = T0();
    limbArt.reveal("skin", t0).reveal("muscle", t0 + 0.25).reveal("tendon", t0 + 0.5).reveal("bone", t0 + 0.75);
    var keys = labels.map(function (l) { return l.word || S.autoKey(l.text); });
    var times = spread(labels.length, Math.max(1.0, t0 + 1.0), Dd - 1.0, keys);
    var order = ["muscle", "tendon", "bone"];
    labels.forEach(function (l, i) {
      var layer = l.layer && ["muscle", "tendon", "bone", "skin"].indexOf(l.layer) >= 0 ? l.layer : order[i % 3];
      var a = limbArt.anchor(layer), at = times[i];
      limbArt.focus(layer, at);
      var Q = P ? [[0.27, cy - 340], [0.73, cy + 300], [0.73, cy - 340], [0.27, cy + 300]] : [[0.2, cy - 300], [0.8, cy - 300], [0.8, cy + 310], [0.2, cy + 310]];
      var q = Q[i % 4], lx = Ww * q[0], ly = q[1], align = "middle";
      st.annotate(l.text, { x: a.x, y: a.y, lx: lx, ly: ly, align: align, at: at, color: layer === "skin" ? INK : RED, size: P ? 34 : 40, width: P ? 12 : 14 });
      st.cam.punch(at, 1.06, Ww / 2 + (a.x - Ww / 2) * 0.25, 500 + (a.y - 500) * 0.25, 0.3);
    });
    var tFocus = p.focus ? syncAt(p.keyword, times.length ? times[times.length - 1] : 0, Dd * 0.8) : null;
    if (p.focus && (!labels.length || tFocus > times[times.length - 1] + 0.5)) {
      limbArt.focus(p.focus === "all" ? "all" : p.focus, tFocus);
      var fa = limbArt.anchor(p.focus === "all" ? "muscle" : p.focus);
      st.cam.punch(tFocus, 1.1, Ww / 2 + (fa.x - Ww / 2) * 0.25, 500 + (fa.y - 500) * 0.25, 0.3);
      st.shake(tFocus, 8, 0.3);
    }
    st.cam.set({ zoom: 1.02 }).push(1.0, 0, Dd);
    st.cam.to({ x: Ww / 2, y: 500, zoom: 1.0 }, Dd - 0.9, 0.6);
    if (p.note) S.handNote(p.note, Math.max(0.5, Dd * 0.75), { x: 0.5, y: P ? 0.95 : 0.92, width: P ? 0.84 : 0.5, size: 34, color: INK });
  };

  T["lean-vs-big"] = function (root, p) {
    var st = begin(root, p), Dd = D(), Ww = st.Ww, P = st.portrait;
    var pairY = P ? 760 : 880;
    var test = str(p.test || "tug").toLowerCase();
    var tKey = syncAt(p.keyword || autoKeyword(p, ["leanLabel", "title"]), 0, Dd * 0.5);
    tKey = clamp(tKey, Math.min(1.0, Dd * 0.3), Dd - 0.9);
    var winner = p.winner === "big" ? "big" : p.winner === "none" ? "none" : "lean";
    var fl = st.frame(P ? 0.26 : 0.27, "pair"), fb = st.frame(P ? 0.74 : 0.73, "pair");
    fl.y = pairY; fb.y = pairY;
    if (p.title) { fl.y += P ? 40 : 20; fb.y += P ? 40 : 20; S.thumbText(p.title, T0(), { pos: "top", size: "md" }); }
    var lean = new Figure(st, "rook", { x: fl.x, y: fl.y, scale: fl.scale, facing: "right", expression: "focus" });
    var big = new Figure(st, "brick", { x: fb.x, y: fb.y, scale: fb.scale * 1.06, facing: "left", expression: "scowl" });
    st.floor(Ww / 2, fl.y, Ww * 0.9, { shadow: false });
    var mL = hlName(p.leanMuscle || "tendons");
    function outcome(loserFig, loserPose, winFig) {
      if (winner === "none") return;
      var loser = winner === "lean" ? big : lean, win = winner === "lean" ? lean : big;
      loser.pose(loserPose, tKey, 0.3).expression("shock", tKey).shake(tKey, 0.5, 14);
      win.expression("smirk", tKey + 0.4);
      st.impact(tKey, { x: loser.x0, y: loser.y0 - 300 * loser.s, shake: 16 });
    }
    switch (test) {
      case "stare": case "compare":
        lean.pose("hips", 0); big.pose("flex", 0);
        lean.pose("flex", tKey, 0.3);
        break;
      case "lift": case "boulder":
        lean.exercise("lift", 0, { period: 2.4 }); big.exercise("lift", 0.3, { period: 3.0 });
        st.prop("boulder", { fig: lean, r: 85 }); st.prop("boulder", { fig: big, r: 110 });
        outcome(null, "kneel");
        if (winner === "lean") { big.pose("kneel", tKey, 0.3); lean.exercise("lift", tKey, { period: 2.0 }); }
        break;
      case "hang":
        lean.exercise("hang", 0); big.exercise("hang", 0.2);
        st.prop("bar", { x: fl.x, y: lean.world("handN", 0).y, w: 360 * fl.scale }); st.prop("bar", { x: fb.x, y: big.world("handN", 0).y, w: 360 * fb.scale });
        if (winner !== "none") { var lo = winner === "lean" ? big : lean; lo.pose("kneel", tKey, 0.3).expression("shock", tKey).shake(tKey + 0.1, 0.4, 12); st.impact(tKey, { x: lo.x0, y: lo.y0 - 200, shake: 14 }); (winner === "lean" ? lean : big).expression("smirk", tKey + 0.4); }
        break;
      case "pushup":
        lean.exercise("pushup", 0, { period: 1.3 }); big.exercise("pushup", 0, { period: 2.4 });
        if (winner !== "none") { var lp = winner === "lean" ? big : lean; lp.pose("pushup-down", tKey, 0.3).expression("strain", tKey); lp.sweat(tKey, 1e9); }
        break;
      case "sprint": case "race":
        lean.exercise("sprint", 0, { period: 0.4 }); big.exercise("sprint", 0, { period: 0.7 });
        st.speedLines(0, 1e9, { dir: "right", layer: "under", opacity: 0.45, count: 28 });
        if (winner === "lean") { big.pose("fall", tKey, 0.4).expression("tired", tKey); big.sweat(tKey, 1e9); }
        break;
      case "planche":
        lean.exercise("planche", 0); big.pose("pushup-up", 0); big.expression("strain", 0.2); big.sweat(0.5, 1e9);
        if (winner === "lean") { big.pose("pushup-down", tKey, 0.4).expression("shock", tKey).shake(tKey, 0.5, 12); st.impact(tKey, { x: big.x0, y: big.y0 - 160, shake: 14 }); }
        break;
      default: // tug-of-war
        lean.exercise("tug", 0, { period: 1.1 }); big.exercise("tug", 0.15, { period: 1.3 });
        st.prop("rope", { a: lean, b: big, length: 1500 });
        lean.sweat(Math.max(0.3, tKey - 1.5), 1e9); big.sweat(0.5, 1e9);
        st.cam.rumble(Math.max(0, tKey - 1.6), tKey, 4);
        if (winner !== "none") {
          var loser = winner === "lean" ? big : lean, win = winner === "lean" ? lean : big;
          loser.pose("fall", tKey, 0.35).expression("shock", tKey).shake(tKey, 0.5, 14);
          win.pose("tug-b", tKey, 0.2).pose("flex", Math.min(Dd - 0.3, tKey + 0.9), 0.4).expression("proud", tKey + 0.5);
          st.impact(tKey, { x: loser.x0, y: loser.y0 - 300 * loser.s, shake: 18 });
          st.forceArrow(win.x0 + (win === lean ? 1 : -1) * 150 * win.s, win.y0 - 330 * win.s, win.x0 + (win === lean ? -1 : 1) * 260 * win.s, win.y0 - 330 * win.s, { at: tKey - 0.05, until: tKey + 1.2, label: p.forceLabel || "" });
        }
    }
    if (mL !== "none") { lean.highlight(mL, Math.max(0.2, tKey - 0.6), { pulse: false }); lean.pulse(tKey); }
    var ly = P ? fl.y - 560 * fl.scale - 40 : fl.y - 560 * fl.scale - 60;
    if (p.leanLabel) st.annotate(p.leanLabel, { x: lean.world("head", 0.1).x + 10, y: lean.world("head", 0.1).y - 70 * fl.scale, lx: fl.x - (P ? 10 : 20), ly: clamp(ly - 90, 110, 400), align: "middle", at: Math.max(0.3, tKey - 1.2), size: P ? 38 : 40, width: 14 });
    if (p.bigLabel) st.annotate(p.bigLabel, { x: big.world("head", 0.1).x - 10, y: big.world("head", 0.1).y - 70 * fb.scale, lx: fb.x - (P ? 40 : 0), ly: clamp(ly - 90, 110, 400) + (P ? 80 : 0), align: "middle", at: Math.max(0.6, tKey - 0.6), size: P ? 38 : 40, width: 14, color: INK });
    S.tag("LEAN", 0.2, { x: P ? 0.26 : 0.27, y: (fl.y + (P ? 60 : 52)) / 1000, color: RED });
    S.tag("BIG", 0.35, { x: P ? 0.74 : 0.73, y: (fb.y + (P ? 60 : 52)) / 1000, color: INK });
    st.cam.set({ zoom: 1 }).push(1.05, 0, Math.max(0.6, tKey));
    if (winner !== "none") { var wf = winner === "lean" ? lean : big; st.cam.punch(tKey + 0.6, 1.08, wf.x0, wf.y0 - 300 * wf.s, 0.4, 0.25); }
  };

  T.transformation = function (root, p) {
    var st = begin(root, p), Dd = D(), Ww = st.Ww, P = st.portrait;
    var who = castId(p.character || "rook"), weeks = Math.max(1, Math.round(num(p.weeks, 12)));
    var tKey = syncAt(p.keyword || autoKeyword(p, ["afterLabel", "title"]), 0, Dd * 0.55);
    tKey = clamp(tKey, Math.min(1.2, Dd * 0.35), Dd - 0.9);
    var fa = st.frame(P ? 0.27 : 0.29, "pair"), fb = st.frame(P ? 0.73 : 0.71, "pair");
    if (!P) { fa.y = 880; fb.y = 880; }
    if (p.title) { fa.y += P ? 30 : 20; fb.y += P ? 30 : 20; S.thumbText(p.title, T0(), { pos: "top", size: "md" }); }
    var before = new Figure(st, who, { x: fa.x, y: fa.y, scale: fa.scale, build: "soft", pose: "slouch", expression: "tired", facing: "right" });
    var after = new Figure(st, who, { x: fb.x, y: fb.y, scale: fb.scale, pose: poseName(p.afterPose || "flex"), expression: "proud", facing: P ? "left" : "left" });
    after.hide(0).show(tKey);
    st.floor(fa.x, fa.y, 420 * fa.scale); st.floor(fb.x, fb.y, 420 * fb.scale);
    before.narrate(0, tKey);
    after.narrate(tKey + 0.3, Dd);
    var mA = hlName(p.afterMuscle || "full");
    if (mA !== "none") { after.highlight(mA, tKey, { pulse: false }); after.pulse(tKey + 0.25); }
    st.splash(tKey - 0.1, { x: fb.x, y: fb.y - 300 * fb.scale, color: RED });
    st.impact(tKey + 0.1, { x: fb.x, y: fb.y - 300 * fb.scale, invert: false, shake: 14 });
    after.shake(tKey + 0.1, 0.4, 8);
    // arrow between
    st.forceArrow(Ww * 0.42, fa.y - 300 * fa.scale, Ww * 0.58, fa.y - 300 * fa.scale, { at: tKey - 0.3, color: RED });
    S.weekCounter(0.4, tKey, { x: 0.5, y: P ? 0.3 : p.title ? 0.3 : 0.14, start: 0, end: weeks, label: p.weeksLabel || "WEEK" });
    S.tag(p.beforeLabel || "BEFORE", 0.3, { x: P ? 0.27 : 0.29, y: (fa.y + (P ? 60 : 52)) / 1000, color: INK });
    S.tag(p.afterLabel || "AFTER", tKey + 0.2, { x: P ? 0.73 : 0.71, y: (fb.y + (P ? 60 : 52)) / 1000, color: RED });
    if (p.note) S.handNote(p.note, 0.8, { x: 0.5, y: P ? 0.9 : 0.86, width: P ? 0.7 : 0.3, size: 34, color: INK });
    st.cam.set({ zoom: 1 }).push(1.05, 0, tKey);
    st.cam.punch(tKey + 0.15, 1.16, fb.x, fb.y - 280 * fb.scale, 0.35);
    st.cam.to({ x: Ww / 2, y: 500, zoom: 1.02 }, Math.min(Dd - 0.4, tKey + 1.8), 0.7);
  };

  T["science-stat"] = function (root, p) {
    var st = begin(root, p), Dd = D(), Ww = st.Ww, P = st.portrait;
    var tKey = syncAt(p.keyword || autoKeyword(p, ["label"]), 0, Dd * 0.3);
    var diagram = str(p.diagram || "tendon").toLowerCase();
    var numX = P ? 0.5 : 0.3, numY = P ? 0.26 : 0.42;
    var hasDiagram = diagram !== "none";
    if (!hasDiagram) { numX = 0.5; }
    if (p.title) S.thumbText(p.title, T0(), { pos: "top", size: "md" });
    S.bigStat(p.value, tKey, { x: numX, y: numY, width: P ? 0.9 : hasDiagram ? 0.5 : 0.8, prefix: p.prefix, suffix: p.suffix, decimals: p.decimals, label: p.label, color: RED });
    if (hasDiagram) {
      var dx = P ? Ww / 2 : Ww * 0.72, dy = P ? 660 : 500;
      if (diagram === "figure" || EXERCISES[exName(diagram)] && EX_ALIASES[diagram] || EXERCISES[diagram]) {
        var exn = exName(p.exercise || (diagram === "figure" ? "pushup" : diagram));
        var fr = wideFix(st, { x: dx, y: P ? 920 : 840, scale: P ? 0.62 : st.square ? 0.72 : 0.84 }, exn);
        var fig = new Figure(st, p.character || "rook", { x: fr.x, y: fr.y, scale: fr.scale, facing: P ? "right" : "left" });
        fig.exercise(exn, 0);
        groundProps(st, fig, exn, fr.x, fr.y, {});
        var m = hlName(p.muscle || EXERCISES[exn].muscle);
        if (m !== "none") { fig.highlight(m, Math.max(0.2, tKey - 0.4), { pulse: false }); fig.pulse(tKey); }
        st.cam.punch(tKey, 1.1, musclePoint(fig, m, tKey).x, musclePoint(fig, m, tKey).y, 0.3);
        st.cam.to({ x: Ww / 2, y: 500, zoom: 1.02 }, Math.min(Dd - 0.4, tKey + 1.6), 0.6);
      } else {
        var limb = diagram === "bone" ? "arm" : diagram === "muscle" ? "arm" : diagram === "tendon" ? "forearm" : "arm";
        if (p.limb) limb = p.limb;
        var art = st.anatomyLimb({ limb: limb, x: dx, y: dy, scale: P ? 0.5 : st.square ? 0.42 : 0.5 });
        var focus = diagram === "bone" || diagram === "muscle" || diagram === "tendon" ? diagram : "tendon";
        art.focus(focus, tKey);
        var an = art.anchor(focus);
        st.cam.punch(tKey, 1.05, an.x, an.y, 0.3);
        st.cam.to({ x: Ww / 2, y: 500, zoom: 1.02 }, Math.min(Dd - 0.4, tKey + 1.6), 0.6);
        if (p.diagramLabel) st.annotate(p.diagramLabel, { x: an.x, y: an.y, lx: P ? Ww * 0.5 : dx, ly: P ? dy + 300 : dy - 300, align: "middle", at: tKey + 0.3, size: 38, width: 14 });
      }
    }
    st.shake(tKey, 10, 0.3);
    if (p.sub) S.handNote(p.sub, Math.min(Dd - 0.5, tKey + 1.0), { x: numX, y: P ? 0.46 : numY + 0.26, width: P ? 0.84 : hasDiagram ? 0.42 : 0.6, size: 36, color: INK });
    st.cam.set({ zoom: 1 }).push(1.04, 0, Dd);
  };

  T["routine-list"] = function (root, p) {
    var st = begin(root, p), Dd = D(), Ww = st.Ww, P = st.portrait;
    var items = arr(p.items).filter(function (it) { return it && (it.exercise || it.name); }).slice(0, 5);
    if (!items.length) items = [{ exercise: "pushup", name: "Push-ups", sets: 3, reps: 12 }, { exercise: "pullup", name: "Pull-ups", sets: 3, reps: 8 }, { exercise: "squat", name: "Squats", sets: 3, reps: 15 }];
    var n = items.length, keys = items.map(function (it) { return it.word || S.autoKey(it.name || it.exercise); });
    var times = spread(n, Math.max(0.6, Dd * 0.12), Dd - 0.8, keys);
    var hasTitle = !!p.title;
    var listX0 = P ? Ww * 0.08 : Ww * 0.46, listW = P ? Ww * 0.84 : Ww * 0.48;
    var top = hasTitle ? (P ? 300 : 230) : (P ? 180 : 140), bottom = P ? 940 : 920;
    var rowH = Math.min(P ? 150 : 150, (bottom - top) / n);
    var hero = null;
    if (!P) {
      var fr = { x: Ww * 0.22, y: 935, scale: st.square ? 0.66 : hasTitle ? 0.8 : 0.95 };
      hero = new Figure(st, p.character || "rook", { x: fr.x, y: fr.y, scale: fr.scale, facing: "right" });
      st.floor(fr.x, fr.y, 500 * fr.scale);
      hero.exercise(exName(items[0].exercise || "pushup"), 0);
    }
    items.forEach(function (it, i) {
      var exn = exName(it.exercise || "pushup"), ex = EXERCISES[exn], y = top + rowH * i + rowH * 0.5, at = times[i];
      var row = g(st.wfx, { display: "none" });
      // mini figure
      var ms = rowH / 820 * (ex.prop === "bar" ? 0.85 : 1.0);
      var mini = new Figure(st, p.character || "rook", { x: listX0 + rowH * 0.42, y: y + rowH * 0.42, scale: ms, facing: "right", parent: row });
      mini.exercise(exn, 0, { period: ex.period });
      mini.highlight(ex.muscle, 0, { pulse: false });
      var nm = svgEl("text", { x: fx(listX0 + rowH * 0.95), y: fx(y + 12), "font-size": fx(P || st.square ? 34 : 46), "font-family": "var(--ia-hand)", "font-weight": 700, fill: INK }, row);
      nm.textContent = plain(it.name || ex.label).slice(0, P || st.square ? 11 : 26);
      var sr = (it.sets != null ? it.sets + " × " : "") + (it.reps != null ? it.reps : "") + (it.unit ? " " + it.unit : "");
      if (sr.trim()) {
        var bx = listX0 + listW - 10, bt = svgEl("text", { x: fx(bx), y: fx(y + 14), "text-anchor": "end", "font-size": P || st.square ? 32 : 44, "font-family": "var(--ia-display)", "font-weight": 900, fill: RED }, row);
        bt.textContent = sr.trim();
      }
      var rnd = V.makeRand(31 + i);
      svgEl("path", { d: roughD([[listX0, y + rowH * 0.46], [listX0 + listW, y + rowH * 0.46]], rnd, 5), fill: "none", stroke: INK, "stroke-width": 3, opacity: 0.5 }, row);
      st.onFrame(function (t) {
        var on = t >= at;
        setD(row, on);
        if (!on) return;
        var s = EASE.snap(clamp((t - at) / 0.25, 0, 1));
        setA(row, "transform", "translate(" + fx((1 - s) * -60) + ",0)");
        setA(row, "opacity", String(fx(Math.min(1, s * 1.5) * 100) / 100));
      });
      if (hero && i > 0) hero.exercise(exn, at, { period: ex.period });
      if (hero) hero.highlight(ex.muscle, at, { pulse: true });
      S.mark("check", at + 0.1, { x: (listX0 + listW + 50) / Ww, y: (y) / 1000, size: 44, until: 1e9 });
    });
    if (hasTitle) S.thumbText(p.title, T0(), { pos: P ? "top" : "top-left", size: st.square ? "sm" : "md", kicker: p.kicker, maxWidth: P ? 0.9 : 0.4 });
    if (p.note) S.handNote(p.note, Math.min(Dd - 0.5, times[n - 1] + 0.6), { x: P ? 0.5 : 0.22, y: P ? 0.96 : 0.96, width: P ? 0.8 : 0.36, size: 32, color: INK });
    st.cam.set({ zoom: 1 }).push(1.03, 0, Dd);
  };

  T["myth-vs-fact"] = function (root, p) {
    var st = begin(root, p), Dd = D(), Ww = st.Ww, P = st.portrait;
    var tMyth = syncAt(p.mythWord || S.autoKey(p.myth), 0, Dd * 0.25), tFact = syncAt(p.factWord || S.autoKey(p.fact), tMyth + 0.3, Dd * 0.6);
    tFact = clamp(tFact, tMyth + 0.8, Dd - 0.8);
    var exn = exName(p.exercise || "pullup"), ex = EXERCISES[exn], m = hlName(p.muscle || ex.muscle);
    // divider
    var rnd = V.makeRand(3);
    var div = svgEl("path", { d: P ? roughD([[Ww * 0.08, 500], [Ww * 0.92, 500]], rnd, 6) : roughD([[Ww / 2, 80], [Ww / 2, 920]], rnd, 6), fill: "none", stroke: INK, "stroke-width": 5, "stroke-dasharray": "18 14" }, st.wfx);
    // text band on top, figures below it
    var Q = st.square;
    var fm = P ? { x: Ww * 0.5, y: 480, scale: 0.42 } : { x: Ww * 0.25, y: 935, scale: Q ? 0.68 : 0.84 };
    var ff = P ? { x: Ww * 0.5, y: 965, scale: 0.42 } : { x: Ww * 0.75, y: 935, scale: Q ? 0.68 : 0.84 };
    var bigF = new Figure(st, "brick", { x: fm.x, y: fm.y, scale: fm.scale, pose: "flex", expression: "smirk", facing: "right" });
    bigF.expression("shock", tFact).pose("slouch", tFact, 0.3);
    st.floor(fm.x, fm.y, 420 * fm.scale);
    var fig = new Figure(st, p.character || "rook", { x: ff.x, y: ff.y, scale: ff.scale, facing: "left" });
    fig.hide(0).show(tFact);
    fig.exercise(exn, tFact, { period: ex.period });
    groundProps(st, fig, exn, ff.x, ff.y, { barH: P ? 240 : 560 });
    if (m !== "none") fig.highlight(m, tFact + 0.3, { pulse: true });
    var tsz = P ? 34 : Q ? 36 : 44, tw = P ? 0.84 : 0.4;
    S.tag("MYTH", tMyth - 0.2, { x: P ? 0.5 : 0.25, y: P ? 0.04 : 0.07, color: INK });
    S.tag("FACT", tFact, { x: P ? 0.5 : 0.75, y: P ? 0.52 : 0.07, color: RED });
    S.handNote(p.myth || "", tMyth, { x: P ? 0.5 : 0.25, y: P ? 0.12 : 0.22, width: tw, size: tsz, color: INK, rotate: -1, maxLines: 2 });
    S.mark("strike", tMyth + 0.35, { x: P ? 0.5 : 0.25, y: P ? 0.12 : 0.22, size: P ? Ww * 0.8 : Ww * 0.36, color: RED });
    S.mark("cross", tMyth + 0.5, { x: P ? 0.86 : 0.42, y: P ? 0.04 : 0.07, size: 64, color: RED });
    S.handNote(p.fact || "", tFact + 0.1, { x: P ? 0.5 : 0.75, y: P ? 0.6 : 0.22, width: tw, size: tsz, color: RED, rotate: 1, maxLines: 2 });
    S.mark("check", tFact + 0.4, { x: P ? 0.86 : 0.92, y: P ? 0.52 : 0.07, size: 64 });
    st.splash(tFact - 0.12, { x: P ? Ww / 2 : Ww * 0.75, y: P ? 750 : 500, color: RED });
    st.impact(tFact + 0.05, { x: P ? Ww / 2 : Ww * 0.75, y: P ? 750 : 400, invert: false, shake: 12 });
    bigF.narrate(0, tFact);
    st.cam.set({ zoom: 1 }).push(1.04, 0, Dd);
    if (p.title) S.thumbText(p.title, T0(), { pos: "bottom", size: "sm", maxWidth: 0.9 });
  };

  T["form-check"] = function (root, p) {
    var st = begin(root, p), Dd = D(), Ww = st.Ww, P = st.portrait;
    var exn = exName(p.exercise || "pushup"), ex = EXERCISES[exn], who = castId(p.character || "rook");
    var tKey = syncAt(p.keyword || autoKeyword(p, ["badLabel", "goodLabel"]), 0, Dd * 0.4);
    tKey = clamp(tKey, Math.min(0.9, Dd * 0.3), Dd - 1.0);
    var tGood = Math.min(Dd - 0.5, tKey + 1.5);
    var fg = st.frame(P ? "center" : 0.27, "pair"), fb = st.frame(P ? "center" : 0.73, "pair");
    if (P) { fg.y = 470; fb.y = 940; fg.scale = fb.scale = 0.5; }
    if (p.title) { fg.y += P ? 20 : 30; fb.y += P ? 0 : 30; }
    if (p.title) S.thumbText(p.title, T0(), { pos: "top", size: "sm", maxWidth: 0.9 });
    wideFix(st, fg, exn); wideFix(st, fb, exn);
    var good = new Figure(st, who, { x: fg.x, y: fg.y, scale: fg.scale, facing: "right", expression: "focus" });
    var bad = new Figure(st, who, { x: fb.x, y: fb.y, scale: fb.scale, facing: "right", expression: "strain" });
    good.exercise(exn, 0); bad.exercise(exn + "-bad", 0.1);
    groundProps(st, good, exn, fg.x, fg.y, { floorW: 520 * fg.scale, rope: false }); groundProps(st, bad, exn, fb.x, fb.y, { floorW: 520 * fb.scale, rope: false });
    bad.sweat(0.3, 1e9);
    good.highlight(ex.muscle, tGood, { pulse: true });
    var bp = bad.world(BAD_POINT[exn] || "hip", tKey);
    var tip = p.errorNote != null ? p.errorNote : BAD_TIP[exn];
    var lx = P ? Ww * 0.88 : fb.x + Ww * 0.12, ly = P ? bp.y - 250 : clamp(bp.y - 220, 120, 400);
    if (tip) st.annotate(tip, { x: bp.x, y: bp.y, lx: lx, ly: ly, align: P ? "end" : "middle", at: tKey, size: 38, width: 14 });
    S.mark("cross", tKey + 0.05, { x: P ? 0.14 : 0.73 - 0.2, y: P ? 0.56 : 0.2, size: 110, color: RED });
    S.mark("check", tGood, { x: P ? 0.14 : 0.27 - 0.2, y: P ? 0.08 : 0.2, size: 110 });
    S.tag(p.goodLabel || "CORRECT", tGood - 0.1, { x: P ? 0.5 : 0.27, y: P ? 0.46 : 0.8, color: RED });
    S.tag(p.badLabel || "WRONG", tKey - 0.1, { x: P ? 0.5 : 0.73, y: P ? 0.95 : 0.8, color: INK });
    st.impact(tKey, { x: bp.x, y: bp.y, invert: false, shake: 10 });
    st.cam.set({ zoom: 1 }).punch(tKey, 1.14, bp.x, bp.y - 40, 0.3);
    st.cam.to({ x: Ww / 2, y: 500, zoom: 1.02 }, tGood - 0.2, 0.5);
    var gp = musclePoint(good, ex.muscle, tGood);
    st.cam.punch(tGood, 1.1, gp.x, gp.y, 0.3);
    st.cam.to({ x: Ww / 2, y: 500, zoom: 1.0 }, Math.min(Dd - 0.3, tGood + 1.4), 0.6);
  };

  T["effort-moment"] = function (root, p) {
    var st = begin(root, p), Dd = D(), Ww = st.Ww, P = st.portrait;
    var who = castId(p.character || "rook");
    var tW = syncAt(p.word || S.autoKey(p.text), 0, Dd * 0.5, 0.06);
    tW = clamp(tW, Math.min(1.0, Dd * 0.3), Dd - 0.7);
    var exn = p.exercise ? exName(p.exercise) : null, ex = exn ? EXERCISES[exn] : null;
    var fr = st.frame("center", "low");
    if (P) { fr.y = 960; fr.scale = 0.8; }
    if (!P && p.text) fr.x = Ww * 0.36;
    if (exn) wideFix(st, fr, exn); else if (P) fr.scale = 0.7;
    var fig = new Figure(st, who, { x: fr.x, y: fr.y, scale: fr.scale, facing: "right", expression: "strain", pose: p.pose || "strain" });
    if (exn) { fig.exercise(exn, 0, { period: ex.period * 1.4 }); groundProps(st, fig, exn, fr.x, fr.y, {}); }
    else st.floor(fr.x, fr.y, 600 * fr.scale);
    var m = hlName(p.muscle || (ex ? ex.muscle : "full"));
    if (m !== "none") { fig.highlight(m, Math.max(0.2, tW - 1.0), { pulse: false }); fig.pulse(tW, 1.4); fig.pulse(Math.min(Dd - 0.3, tW + 0.8), 0.7); }
    fig.sweat(0.3, 1e9);
    fig.expression("shout", tW).expression("strain", Math.min(Dd - 0.2, tW + 1.2));
    fig.shake(tW, 0.6, 16);
    var hp = fig.world("head", tW);
    st.cam.set({ zoom: 1.05 }).rumble(Math.max(0, tW - 1.8), tW, 5);
    st.cam.push(1.12, 0, Math.max(0.5, tW));
    st.focusLines(Math.max(0, tW - 1.2), tW, { x: hp.x, y: hp.y, opacity: 0.35, inner: 260, layer: "under" });
    st.focusLines(tW, 1e9, { x: hp.x, y: hp.y, opacity: 0.9, inner: P ? 300 : 360, layer: "under", bg: st.bg === "black" ? RED2 : PAPER, color: st.ink });
    st.impact(tW, { x: hp.x, y: hp.y, shake: 26 });
    st.splash(tW + 0.02, { x: hp.x, y: hp.y, color: RED, dur: 0.5 });
    st.cam.punch(tW, P ? 1.2 : 1.28, hp.x, hp.y + 100, 0.12);
    st.cam.to({ x: Ww / 2, y: 500, zoom: 1.08 }, Math.min(Dd - 0.4, tW + 1.6), 0.8);
    if (p.text) S.thumbText(p.text, tW + 0.06, { pos: P ? "top" : "right", size: P ? "lg" : "xl", maxWidth: P ? 0.9 : 0.5, sub: p.sub });
    if (p.annotation) st.annotate(p.annotation, { x: musclePoint(fig, m, tW).x, y: musclePoint(fig, m, tW).y, lx: P ? Ww * 0.5 : Ww * 0.72, ly: P ? 480 : 760, align: "middle", at: Math.min(Dd - 0.4, tW + 0.9), size: 40, width: 14, color: st.bg === "black" ? "#FFFFFF" : RED });
  };

  T["title-card"] = function (root, p) {
    var st = begin(root, p), Dd = D(), Ww = st.Ww, P = st.portrait;
    var who = castId(p.character || "rook");
    var fr = P ? { x: Ww / 2, y: 980, scale: 0.78 } : { x: Ww * 0.8, y: 965, scale: st.square ? 0.86 : 1.1 };
    var fig = new Figure(st, who, { x: fr.x, y: fr.y, scale: fr.scale, facing: "left", pose: poseName(p.pose || "hips"), expression: p.expression || "proud" });
    fig.narrate(0.2, Dd);
    var m = hlName(p.muscle || "none");
    if (m !== "none") fig.highlight(m, 0.5, { pulse: true });
    st.splatter(st.wfx, fr.x - 100 * fr.scale, fr.y - 420 * fr.scale, 420 * fr.scale, 12, RED);
    st.floor(fr.x, fr.y, 500 * fr.scale);
    st.splash(0.02, { x: Ww / 2, y: 500, color: st.ink, dur: 0.55 });
    var tT = Math.max(0.3, T0() + 0.2);
    S.thumbText(p.title || "", tT, { pos: P ? "top" : "left", size: P ? "lg" : st.square ? "md" : "xl", kicker: p.kicker, sub: p.sub, maxWidth: P ? 0.92 : st.square ? 0.5 : 0.46, y: P ? 0.07 : null });
    st.impact(tT + 0.02, { x: P ? Ww / 2 : Ww * 0.3, y: P ? 260 : 500, invert: false, shake: 12 });
    if (p.pulseWord) { var tp = syncAt(p.pulseWord, tT, Dd * 0.6); fig.pulse(tp); st.shake(tp, 8, 0.3); }
    st.cam.set({ zoom: 1.02 }).push(1.08, 0, Dd);
  };

  T["progress-graph"] = function (root, p) {
    var st = begin(root, p), Dd = D(), Ww = st.Ww, P = st.portrait;
    var series = arr(p.series).filter(function (s) { return s && arr(s.values).length; }).slice(0, 3);
    if (!series.length) series = [{ label: "strength", values: [1, 2, 3, 5, 8] }];
    var n = 0; series.forEach(function (s) { n = Math.max(n, arr(s.values).length); });
    var hasTitle = !!p.title;
    var cx0 = P ? Ww * 0.14 : Ww * 0.1, cw = P ? Ww * 0.74 : Ww * 0.56, cy0 = hasTitle ? (P ? 340 : 240) : (P ? 220 : 150), ch = P ? 360 : 560;
    if (hasTitle) S.thumbText(p.title, T0(), { pos: "top", size: "md", kicker: p.kicker });
    var keys = []; for (var i = 0; i < n; i++) keys.push(null);
    var times = spread(n, Math.max(0.6, Dd * 0.1), Dd - 1.2, keys);
    var chart = st.inkChart({ x: cx0, y: cy0, w: cw, h: ch, type: p.type, series: series, xLabels: p.xLabels, yLabel: p.yLabel, max: p.max }, times);
    var ann = p.annotation;
    if (ann && ann.text) {
      var idx = clamp(Math.round(num(ann.index, n - 1)), 0, n - 1), pt = chart.point(0, idx);
      var ta = ann.word ? syncAt(ann.word, 0, times[idx] + 0.3) : times[idx] + 0.3;
      st.annotate(ann.text, { x: pt.x, y: pt.y, lx: clamp(pt.x - cw * 0.25, Ww * 0.16, Ww * 0.84), ly: clamp(pt.y - 200, cy0 + 40, cy0 + ch - 40), align: "middle", at: ta, size: 38, width: 14 });
      st.cam.punch(ta, 1.1, pt.x, pt.y, 0.3);
      st.cam.to({ x: Ww / 2, y: 500, zoom: 1.0 }, Math.min(Dd - 0.4, ta + 1.6), 0.6);
    }
    if (!P) {
      var fr = { x: Ww * 0.84, y: 900, scale: st.square ? 0.62 : 0.78 };
      var fig = new Figure(st, p.character || "rook", { x: fr.x, y: fr.y, scale: fr.scale, facing: "left", pose: "hips", expression: "proud" });
      fig.narrate(0.2, Dd);
      st.floor(fr.x, fr.y, 360 * fr.scale);
      fig.pose("cheer", times[n - 1] + 0.1, 0.3).expression("proud", times[n - 1] + 0.1);
      if (p.muscle) fig.highlight(p.muscle, times[n - 1], { pulse: true });
    } else {
      var frp = { x: Ww * 0.8, y: 990, scale: 0.36 };
      var figp = new Figure(st, p.character || "rook", { x: frp.x, y: frp.y, scale: frp.scale, facing: "left", pose: "hips", expression: "proud" });
      figp.pose("cheer", times[n - 1] + 0.1, 0.3);
      figp.narrate(0.2, Dd);
    }
    if (p.note) S.handNote(p.note, Math.min(Dd - 0.5, times[n - 1] + 0.8), { x: P ? 0.36 : 0.36, y: P ? 0.9 : 0.93, width: P ? 0.6 : 0.5, size: 32, color: INK });
    st.cam.set({ zoom: 1 }).push(1.03, 0, Dd);
  };

  // ───────────────────────── public API ─────────────────────────
  /** Start (or get) the stage for a custom scene. opts: { bg: "white"|"black" } */
  S.scene = function (opts) { opts = opts || {}; return stage || new Stage(opts.root || V.root(), opts); };
  S.inkStage = S.scene;
  S.currentStage = function () { return ST(); };
  S.figure = function (name, opts) { return new Figure(ST(), name, opts); };
  S.annotate = function (text, opts) { return ST().annotate(text, opts); };
  S.forceArrow = function (x1, y1, x2, y2, opts) { return ST().forceArrow(x1, y1, x2, y2, opts); };
  S.impact = function (at, opts) { return ST().impact(at, opts); };
  S.splash = function (at, opts) { return ST().splash(at, opts); };
  S.focusLines = function (from, to, opts) { return ST().focusLines(from, to, opts); };
  S.speedLines = function (from, to, opts) { return ST().speedLines(from, to, opts); };
  S.anatomyLimb = function (opts) { return ST().anatomyLimb(opts); };
  S.inkChart = function (opts, times) { return ST().inkChart(opts, times); };
  S.prop = function (kind, opts) { return ST().prop(kind, opts); };
  S.floor = function (x, y, w, opts) { return ST().floor(x, y, w, opts); };
  S.musclePoint = musclePoint;
  S.cast = Object.keys(CAST);
  S.castInfo = function () { var o = {}; S.cast.forEach(function (k) { o[k] = CAST[k].name + " — " + CAST[k].role; }); return o; };
  S.poses = Object.keys(POSES);
  S.exercises = Object.keys(EXERCISES).filter(function (k) { return k.indexOf("-bad") < 0; });
  S.expressions = Object.keys(EXPR);
  S.muscles = Object.keys(HL);
  S.inkTemplates = T;
  S.templateIds = Object.keys(T);

  S.render = function (id, root, props) {
    var fn = T[id];
    if (!fn) throw new Error("Unknown template: " + id);
    root = root || V.root();
    try {
      stage = null; talkCache = null;
      fn(root, props || {});
    } catch (e) {
      V.error("ink-anatomy template " + id + ": " + (e && e.message));
      try { V.reset(); } catch (e2) {}
      stage = null;
      S.fallback(root, V.narration);
    }
    return root;
  };

  /** Fallback: Rook on a hatched floor talking the narration with a pulsing full-body highlight and captions. Never throws. */
  S.fallback = function (root, narration) {
    try {
      root = root || V.root();
      root.innerHTML = "";
      root.className = "";
      root.removeAttribute("style");
      stage = null; talkCache = null;
      var st = new Stage(root, { bg: "white" }), Dd = D();
      var fr = st.frame("center", "default");
      if (!st.portrait) { fr.x = st.Ww * 0.3; }
      var fig = new Figure(st, "rook", { x: fr.x, y: fr.y, scale: fr.scale, facing: "right", pose: "point", expression: "proud" });
      st.floor(fr.x, fr.y, 500 * fr.scale);
      fig.narrate(0.1, Dd);
      fig.pose("hips", Math.min(Dd - 0.2, 1.6), 0.4);
      if (Dd > 4) fig.pose("flex", Math.min(Dd - 0.3, Dd * 0.6), 0.4).highlight("arms", Math.min(Dd - 0.3, Dd * 0.6), { pulse: true });
      var txt = plain(narration != null ? narration : V.narration || "");
      var first = txt.split(/[.!?]/)[0] || "";
      var wordsN = first.split(/\s+/).filter(Boolean);
      if (wordsN.length) S.thumbText(wordsN.slice(0, 7).join(" "), 0.25, { pos: st.portrait ? "top" : "right", size: st.portrait ? "md" : "md", maxWidth: st.portrait ? 0.9 : 0.5 });
      S.caption({});
      st.cam.set({ zoom: 1 }).push(1.06, 0, Dd);
      return root;
    } catch (e) {
      V.error("ink-anatomy fallback: " + (e && e.message));
      try {
        V.reset();
        root.innerHTML = "";
        var t = el("div", { parent: root, style: { position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center", padding: "8%", fontSize: u(64) + "px", fontWeight: "900", textAlign: "center", color: "#0B0B0B", background: "#FFFFFF", fontFamily: "Impact, 'Arial Black', sans-serif", textTransform: "uppercase" } });
        t.textContent = str(narration || V.narration).split(/\s+/).slice(0, 12).join(" ");
      } catch (e2) {}
    }
  };
})();
