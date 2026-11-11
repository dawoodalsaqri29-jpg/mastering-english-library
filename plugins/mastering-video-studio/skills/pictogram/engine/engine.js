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
/* Scene engine: pictogram — "Pictogram Protocol".
 * Stark safety-sign pictogram art for "survival rules" explainers: solid black (or white, in dark
 * rooms) silhouette figures with round heads and no face, ISO-warning-sign simplicity, flat white
 * backgrounds or pure black rooms, ONE alarm colour (signal red, plus warning yellow), bold
 * condensed headline stamps that slam onto the key spoken word, numbered rule cards, red arrows
 * and circles, warning triangles, clock time stamps, flickering lights, flashlight cones and an
 * uncanny "visitor" figure whose eyes show in the dark.
 * Pure function of time: everything is built once and updated from a single V.onFrame(t) plus
 * V.timeline tweens for the HTML overlays.
 */
(function () {
  "use strict";
  var V = window.V;
  var S = (window.SceneStyle = window.SceneStyle || {});
  var el = V.el;
  var SVGNS = "http://www.w3.org/2000/svg";

  var INK = "#0A0A0A", PAPER = "#FFFFFF", RED = "#E3151B", YEL = "#FFD400", GREY = "#8C8C8C";
  var FONT = 'Impact, Haettenschweiler, "Arial Narrow Bold", "Franklin Gothic Demi Cond", Oswald, "Roboto Condensed", "Liberation Sans Narrow", "Arial Narrow", "Arial Black", "Noto Sans", sans-serif';

  S.init({
    id: "pictogram",
    kind: "minimal",
    enter: "pop",
    titleReveal: "mask",
    drift: 0,
    series: [RED, INK, YEL, GREY, "#444444", "#B00F14"],
  });

  // ───────────────────────── utils ─────────────────────────
  var PI = Math.PI, D2R = PI / 180;
  function str(v) { return v == null ? "" : String(v); }
  function arr(v) { return Array.isArray(v) ? v : v == null ? [] : [v]; }
  function num(v, d) { v = Number(v); return isFinite(v) ? v : d; }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function lerp(a, b, p) { return a + (b - a) * p; }
  function sm(p) { p = clamp(p, 0, 1); return p * p * (3 - 2 * p); }
  function fx(n) { return Math.round(n * 100) / 100; }
  function hash01(n) { var x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); }
  function hashStr(s) {
    s = str(s);
    var h = 2166136261;
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function noise(x, seed) {
    var i = Math.floor(x), f = x - i;
    var a = hash01(i * 1.7 + (seed || 0) * 13.13), b = hash01((i + 1) * 1.7 + (seed || 0) * 13.13);
    return (lerp(a, b, f * f * (3 - 2 * f)) - 0.5) * 2;
  }
  function plain(t) { return str(t).replace(/\*([^*]+)\*/g, "$1"); }
  function u(n) { return n * V.unit; }
  function D() { return V.duration; }
  function lastT() { return Math.max(0.05, V.duration - 0.05); }
  function clampT(t) { return clamp(num(t, 0), 0, lastT()); }
  var EASE = {
    slam: function (p) { p = clamp(p, 0, 1); var q = p - 1, s = 1.9; return q * q * ((s + 1) * q + s) + 1; },
    snap: function (p) { p = clamp(p, 0, 1); return 1 - Math.pow(1 - p, 5); },
    hard: function (p) { return p >= 1 ? 1 : 0; },
    tick: function (p) { p = clamp(p, 0, 1); return Math.floor(p * 4) / 4; },
  };
  S.pictoEase = EASE;
  function easeFn(e) {
    if (typeof e === "function") return e;
    if (e && EASE[e]) return EASE[e];
    if (e && V.ease[e]) return V.ease[e];
    return V.ease.inOutCubic;
  }
  function svgEl(tag, attrs, parent) {
    var n = document.createElementNS(SVGNS, tag);
    if (attrs) for (var k in attrs) if (attrs[k] != null) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }
  function g(parent, attrs) { return svgEl("g", attrs, parent); }
  function setA(n, k, v) { if (n.__a == null) n.__a = {}; if (n.__a[k] !== v) { n.setAttribute(k, v); n.__a[k] = v; } }
  function setVar(n, k, v) { if (n.__v == null) n.__v = {}; if (n.__v[k] !== v) { n.style.setProperty(k, v); n.__v[k] = v; } }
  function setS(n, k, v) { if (n.__s == null) n.__s = {}; if (n.__s[k] !== v) { n.style[k] = v; n.__s[k] = v; } }
  /** Colour tokens → CSS. ink/bg/red/yellow are CSS variables so light/dark flips are one class change. */
  function colorOf(c, dflt) {
    if (!c) return dflt || "var(--pg-ink)";
    var k = str(c).toLowerCase();
    if (k === "ink" || k === "black" || k === "fg") return "var(--pg-ink)";
    if (k === "bg" || k === "paper" || k === "white" || k === "inv") return "var(--pg-bg)";
    if (k === "red" || k === "accent" || k === "alarm" || k === "hi") return "var(--pg-red)";
    if (k === "yellow" || k === "warn" || k === "warning") return "var(--pg-yel)";
    if (k === "grey" || k === "gray" || k === "muted") return "var(--pg-grey)";
    if (k === "visitor") return "var(--pg-vis)";
    if (k === "transparent" || k === "none") return "transparent";
    if (/^#[0-9a-f]{3,8}$/i.test(k) || /^rgba?\(/.test(k) || /^var\(/.test(k)) return c;
    return dflt || "var(--pg-ink)";
  }
  S.colorOf = colorOf;
  S.ink = { ink: INK, paper: PAPER, red: RED, yellow: YEL, grey: GREY };

  // ───────────────────────── word timing ─────────────────────────
  function words() { return V.words || []; }
  function normW(w) { return str(w).toLowerCase().replace(/[^\p{L}\p{N}']+/gu, ""); }
  /** Time (minus lead) of `word` after `after`, else the clamped fallback. */
  function syncAt(word, after, fallback, lead) {
    if (word) {
      var t = V.find(str(word), after || 0);
      if (t != null) return clampT(t - (lead == null ? 0.12 : lead));
    }
    return clampT(fallback);
  }
  function findLine(text, after) {
    var ws = plain(text).split(/\s+/).map(normW).filter(Boolean);
    var W = words();
    if (!ws.length || !W.length) return null;
    var s = V.find(ws.slice(0, Math.min(3, ws.length)).join(" "), after);
    if (s == null && ws.length > 1) s = V.find(ws[0] + " " + ws[1], after);
    if (s == null) s = V.find(ws[0], after);
    if (s == null) return null;
    var idx = -1;
    for (var i = 0; i < W.length; i++) if (W[i].start >= s - 1e-3) { idx = i; break; }
    if (idx < 0) return null;
    var endIdx = Math.min(W.length - 1, idx + ws.length - 1);
    var last = ws[ws.length - 1];
    for (var j = idx + ws.length - 1; j >= idx && j < Math.min(W.length, idx + ws.length + 3); j++) {
      if (normW(W[j].word) === last) { endIdx = j; break; }
    }
    return { start: W[idx].start, end: W[endIdx].end, found: true };
  }
  /** Timing windows [{start,end,found}] for an ordered list of lines (spoken or not). */
  function lineWindows(lines, opts) {
    opts = opts || {};
    var Dd = D();
    var t0 = opts.start != null ? opts.start : Math.min(0.4, Dd * 0.08);
    var t1 = opts.end != null ? opts.end : Math.max(t0 + 0.5, Dd - Math.min(0.6, Dd * 0.08));
    var n = lines.length, out = new Array(n), after = 0;
    for (var i = 0; i < n; i++) {
      var w = findLine(lines[i], after);
      if (w && w.end > w.start) { out[i] = w; after = w.end - 0.01; }
    }
    var lens = lines.map(function (l) { return Math.max(1, plain(l).split(/\s+/).filter(Boolean).length); });
    var i0 = 0;
    while (i0 < n) {
      if (out[i0]) { i0++; continue; }
      var j = i0;
      while (j < n && !out[j]) j++;
      var a = i0 > 0 ? out[i0 - 1].end + 0.2 : t0;
      var b = j < n ? out[j].start - 0.2 : t1;
      if (b - a < 0.5 * (j - i0)) b = a + 0.8 * (j - i0);
      var tot = 0, k;
      for (k = i0; k < j; k++) tot += lens[k] + 1.5;
      var cur = a;
      for (k = i0; k < j; k++) {
        var len = ((b - a) * (lens[k] + 1.5)) / tot;
        out[k] = { start: cur, end: cur + len * 0.85, found: false };
        cur += len;
      }
      i0 = j;
    }
    for (i = 0; i < n; i++) {
      out[i].start = clamp(out[i].start, 0, Math.max(0, Dd - 0.4));
      out[i].end = clamp(Math.max(out[i].end, out[i].start + 0.4), 0, Dd);
    }
    return out;
  }
  /** Index of the word being spoken at t, or -1. */
  function wordAt(t) {
    var W = words(), lo = 0, hi = W.length - 1;
    while (lo <= hi) {
      var m = (lo + hi) >> 1;
      if (W[m].end < t) lo = m + 1;
      else if (W[m].start > t) hi = m - 1;
      else return m;
    }
    return -1;
  }
  function keyOf(text, kw) { return kw ? str(kw) : S.autoKey(plain(text)); }
  /** Key word of a stamp: explicit `key`, else the *emphasised* word, else the longest word. */
  function stampKey(text, key) {
    if (key) return str(key);
    var m = /\*([^*]+)\*/.exec(str(text));
    if (m) return S.autoKey(m[1]) || m[1];
    return S.autoKey(plain(text));
  }
  S.syncAt = syncAt;
  S.lineWindows = lineWindows;
  S.lines = lineWindows;
  S.wordAt = wordAt;

  // ───────────────────────── keyed tracks ─────────────────────────
  /** A list of keyframes {at, dur, v, ease}; value at t interpolates from the base. */
  function Track(base) { this.base = base; this.keys = []; }
  Track.prototype.add = function (v, at, dur, ease) {
    this.keys.push({ at: clampT(at), dur: Math.max(0.0001, num(dur, 0)), v: v, ease: ease || "inOutCubic" });
    this.keys.sort(function (a, b) { return a.at - b.at; });
    return this;
  };
  Track.prototype.at = function (t) {
    var v = this.base;
    for (var i = 0; i < this.keys.length; i++) {
      var k = this.keys[i];
      if (t < k.at) break;
      var p = easeFn(k.ease)(clamp((t - k.at) / k.dur, 0, 1));
      v = lerp(v, k.v, p);
    }
    return v;
  };
  /** Discrete track: the last value whose key time ≤ t. */
  function Switch(base) { this.base = base; this.keys = []; }
  Switch.prototype.add = function (v, at) {
    this.keys.push({ at: clampT(at), v: v });
    this.keys.sort(function (a, b) { return a.at - b.at; });
    return this;
  };
  Switch.prototype.at = function (t) {
    var v = this.base;
    for (var i = 0; i < this.keys.length; i++) { if (t < this.keys[i].at) break; v = this.keys[i].v; }
    return v;
  };
  /** Latest key ≤ t (for blends: returns {v, prev, at}). */
  Switch.prototype.key = function (t) {
    var cur = { v: this.base, at: -1, prev: this.base };
    for (var i = 0; i < this.keys.length; i++) { if (t < this.keys[i].at) break; cur = { v: this.keys[i].v, at: this.keys[i].at, prev: cur.v }; }
    return cur;
  };
  S.Track = Track;
  S.Switch = Switch;

  // ───────────────────────── scene ─────────────────────────
  var current = null;
  /**
   * The frame. opts: mode ("light" | "dark"), vignette (bool), push (slow push-in zoom amount,
   * default 0.06), grain (bool).
   */
  function Scene(root, opts) {
    opts = opts || {};
    current = this;
    root = root || V.root();
    root.innerHTML = "";
    root.className = "pg";
    root.removeAttribute("style");
    this.root = root;
    this.mode = opts.mode === "dark" ? "dark" : "light";
    this.modeSw = new Switch(this.mode);
    if (this.mode === "dark") root.classList.add("pg-dark");
    var W = (this.W = V.width), H = (this.H = V.height);
    this.portrait = V.isPortrait;
    this.square = V.isSquare;
    this.landscape = V.isLandscape;
    this.mx = W * (this.portrait ? 0.08 : 0.07);
    this.my = H * (this.portrait ? 0.07 : 0.08);
    this.floor = H * (this.portrait ? 0.78 : this.square ? 0.8 : 0.82);
    el("div.pg-bg", { parent: root });
    var svg = (this.svg = svgEl("svg", { class: "pg-svg", viewBox: "0 0 " + W + " " + H, width: W, height: H }, root));
    this.defs = svgEl("defs", null, svg);
    this.cam = g(svg, { class: "pg-cam" });
    this.layers = { back: g(this.cam), mid: g(this.cam), figs: g(this.cam), front: g(this.cam), glow: g(this.cam) };
    this.lit = null; // flashlight mask holder (room-at-night)
    this.hud = this.layers.hud = g(svg, { class: "pg-hud" });
    this.ui = el("div.pg-ui", { parent: root });
    this.fx = el("div.pg-fx", { parent: root });
    this.vig = el("div.pg-vignette", { parent: this.fx });
    if (opts.vignette === false) this.vig.style.display = "none";
    this.black = el("div.pg-black", { parent: this.fx });
    this.flash = el("div.pg-flash", { parent: this.fx });
    this.nodes = [];
    this.extras = [];
    this.figs = [];
    this.camKeys = [];
    this.camBase = { cx: W / 2, cy: H / 2, z: 1 };
    this.push = num(opts.push, 0.06);
    this.shakes = [];
    this.flickers = [];
    this.blackouts = [];
    this.flashes = [];
    this.cursor = 0.3;
    this.seedN = (num(V.seed, 1) % 997) + 3;
    this.uidN = 0;
    this.lastCam = "";
    this.lastMode = "";
    this.lastOff = -1;
    this.lastBlack = -1;
    this.lastFlash = -1;
    this.tl = V.timeline();
    var self = this;
    V.onFrame(function (t) { self.frame(t); });
  }
  Scene.prototype.uid = function (p) { this.uidN += 1; return "pg-" + (p || "x") + this.uidN; };
  Scene.prototype.nextSeed = function () { this.seedN += 1; return this.seedN * 1.618 + 0.5; };
  Scene.prototype.take = function (at, dur) {
    var t = at == null ? this.cursor : clampT(at);
    this.cursor = Math.max(this.cursor, t + (dur || 0) + 0.1);
    return t;
  };
  Scene.prototype.frame = function (t) {
    var i;
    this.t = t;
    // light / dark mode and flicker (one class toggle: every fill uses CSS variables)
    var mode = this.modeSw.at(t);
    var off = this.lightsOff(t);
    var m = off ? (mode === "dark" ? "light" : "dark") : mode;
    if (m !== this.lastMode) { this.root.classList.toggle("pg-dark", m === "dark"); this.lastMode = m; }
    for (i = 0; i < this.nodes.length; i++) this.nodes[i].update(t);
    for (i = 0; i < this.extras.length; i++) this.extras[i](t);
    var c = this.camState(t);
    var tf = "translate(" + fx(this.W / 2) + " " + fx(this.H / 2) + ") scale(" + c.z.toFixed(5) + ") translate(" + (-c.cx).toFixed(2) + " " + (-c.cy).toFixed(2) + ")";
    if (tf !== this.lastCam) { this.cam.setAttribute("transform", tf); this.lastCam = tf; }
    // blackout + flash overlays
    var b = this.blackAt(t);
    if (b !== this.lastBlack) { setS(this.black, "opacity", b); setS(this.black, "visibility", b > 0 ? "visible" : "hidden"); this.lastBlack = b; }
    var f = this.flashAt(t);
    if (f !== this.lastFlash) { setS(this.flash, "opacity", f); setS(this.flash, "visibility", f > 0 ? "visible" : "hidden"); this.lastFlash = f; }
  };
  // lights ------------------------------------------------------------------
  /** Lights flicker for `dur` seconds from `at` (random-looking but deterministic on/off frames). */
  Scene.prototype.flicker = function (at, dur, density) {
    this.flickers.push({ at: clampT(at), dur: Math.max(0.05, num(dur, 0.8)), d: num(density, 0.45), seed: this.nextSeed() });
    return this;
  };
  /** Lights go out at `at` (until `until`, if given). */
  Scene.prototype.lightsOut = function (at, until) {
    this.flickers.push({ at: clampT(at), dur: until != null ? Math.max(0.05, until - at) : 1e9, d: 2, seed: 0 });
    return this;
  };
  Scene.prototype.lightsOff = function (t) {
    for (var i = 0; i < this.flickers.length; i++) {
      var f = this.flickers[i];
      if (t < f.at || t >= f.at + f.dur) continue;
      if (f.d >= 2) return true;
      var fr = Math.floor((t - f.at) * 24);
      if (hash01(fr * 7.3 + f.seed) < f.d) return true;
    }
    return false;
  };
  /** Switch the whole scene to light/dark art at `at` (hard cut). */
  Scene.prototype.setMode = function (mode, at) { this.modeSw.add(mode === "dark" ? "dark" : "light", at == null ? 0 : at); return this; };
  /** Fade to black over [at, at+dur] and hold until `until` (then fade back over 0.2 s). */
  Scene.prototype.blackout = function (at, dur, until) {
    this.blackouts.push({ at: clampT(at), dur: Math.max(0.01, num(dur, 0.01)), until: until == null ? 1e9 : until });
    return this;
  };
  Scene.prototype.blackAt = function (t) {
    var o = 0;
    for (var i = 0; i < this.blackouts.length; i++) {
      var b = this.blackouts[i];
      var v = clamp((t - b.at) / b.dur, 0, 1);
      if (t > b.until) v *= 1 - clamp((t - b.until) / 0.2, 0, 1);
      o = Math.max(o, v);
    }
    return Math.round(o * 100) / 100;
  };
  /** A hard red (or white) flash frame at `at` lasting `dur` (default 2 frames). */
  Scene.prototype.flashFrame = function (at, dur, color) {
    this.flashes.push({ at: clampT(at), dur: Math.max(0.03, num(dur, 0.09)), color: colorOf(color || "red") });
    return this;
  };
  Scene.prototype.flashAt = function (t) {
    for (var i = 0; i < this.flashes.length; i++) {
      var f = this.flashes[i];
      if (t >= f.at && t < f.at + f.dur) { setS(this.flash, "background", f.color); return Math.round((1 - (t - f.at) / f.dur) * 100) / 100 * 0.9 + 0.1; }
    }
    return 0;
  };
  // camera ------------------------------------------------------------------
  Scene.prototype.camState = function (t) {
    var st = { cx: this.camBase.cx, cy: this.camBase.cy, z: this.camBase.z };
    for (var i = 0; i < this.camKeys.length; i++) {
      var k = this.camKeys[i];
      if (t < k.at) break;
      var p = easeFn(k.ease)(clamp((t - k.at) / k.dur, 0, 1));
      st = { cx: lerp(st.cx, k.cx, p), cy: lerp(st.cy, k.cy, p), z: Math.exp(lerp(Math.log(st.z), Math.log(k.z), p)) };
    }
    // slow dread push-in over the whole scene
    st.z *= 1 + this.push * clamp(t / Math.max(1, D()), 0, 1);
    // shakes
    var sx = 0, sy = 0;
    for (i = 0; i < this.shakes.length; i++) {
      var s = this.shakes[i];
      if (t < s.at || t > s.at + s.dur) continue;
      var p2 = 1 - (t - s.at) / s.dur, fr = Math.floor(t * 30);
      sx += (hash01(fr * 3.7 + s.seed) - 0.5) * 2 * s.amp * p2;
      sy += (hash01(fr * 5.1 + s.seed + 9) - 0.5) * 2 * s.amp * p2;
    }
    st.cx += sx / st.z;
    st.cy += sy / st.z;
    return st;
  };
  /** Move the camera to (cx, cy) with zoom z (1 = whole frame). dur 0 = hard cut. */
  Scene.prototype.camTo = function (o, at, dur, ease) {
    var prev = this.camKeys.length ? this.camKeys[this.camKeys.length - 1] : this.camBase;
    this.camKeys.push({ at: clampT(at), dur: Math.max(0.0001, num(dur, 1)), cx: num(o.cx != null ? o.cx : o.x, prev.cx), cy: num(o.cy != null ? o.cy : o.y, prev.cy), z: Math.max(0.05, num(o.z != null ? o.z : o.zoom, prev.z)), ease: dur === 0 ? "hard" : ease || "inOutCubic" });
    this.camKeys.sort(function (a, b) { return a.at - b.at; });
    return this;
  };
  Scene.prototype.camCut = function (o, at) { return this.camTo(o, at, 0); };
  Scene.prototype.camFrame = function (r, at, dur, ease, margin) {
    var m = margin == null ? 0.15 : margin;
    var z = Math.min(this.W / (r.w * (1 + m * 2)), this.H / (r.h * (1 + m * 2)));
    return this.camTo({ cx: r.x + r.w / 2, cy: r.y + r.h / 2, z: z }, at, dur, ease);
  };
  Scene.prototype.camSet = function (o) { this.camBase = { cx: num(o.cx, this.W / 2), cy: num(o.cy, this.H / 2), z: num(o.z, 1) }; return this; };
  Scene.prototype.shake = function (at, dur, amp) {
    this.shakes.push({ at: clampT(at), dur: Math.max(0.05, num(dur, 0.4)), amp: num(amp, u(14)), seed: this.nextSeed() });
    return this;
  };
  S.Scene = Scene;

  // ───────────────────────── Node: a movable SVG group ─────────────────────────
  function Node(sc, o) {
    o = o || {};
    this.sc = sc;
    this.x = num(o.x, 0);
    this.y = num(o.y, 0);
    this.s = num(o.s, 1) || 1;
    this.rot = num(o.rot, 0);
    this.flip = !!o.flip;
    this.tx = new Track(this.x);
    this.ty = new Track(this.y);
    this.ts = new Track(this.s);
    this.tr = new Track(this.rot);
    this.top = new Track(1);
    this.vis = new Switch(o.from == null ? true : false);
    if (o.from != null) this.vis.add(true, o.from);
    this.g = g(o.parent || sc.layers[o.layer || "mid"], o.cls ? { class: o.cls } : null);
    this.follow = null;
    this.seed = sc.nextSeed();
    this.lt = null;
    this.lo = null;
    this.ld = null;
    this.bb = [0, 0, 0, 0];
    sc.nodes.push(this);
  }
  Node.prototype.state = function (t) {
    var st = { x: this.tx.at(t), y: this.ty.at(t), s: this.ts.at(t), rot: this.tr.at(t) };
    if (this.follow) { var f = this.follow(t); if (f) { st.x = f.x; st.y = f.y; if (f.rot != null) st.rot = f.rot; } }
    return st;
  };
  Node.prototype.to = function (props, at, dur, ease) {
    at = at == null ? 0 : at;
    if (props.x != null) this.tx.add(num(props.x, this.x), at, dur, ease);
    if (props.y != null) this.ty.add(num(props.y, this.y), at, dur, ease);
    if (props.s != null) this.ts.add(num(props.s, this.s), at, dur, ease);
    if (props.rot != null) this.tr.add(num(props.rot, this.rot), at, dur, ease);
    return this;
  };
  Node.prototype.fade = function (to, at, dur) { this.top.add(clamp(num(to, 0), 0, 1), at == null ? 0 : at, num(dur, 0.25), "linear"); return this; };
  Node.prototype.show = function (at) { this.vis.add(true, at == null ? 0 : at); return this; };
  Node.prototype.hide = function (at) { this.vis.add(false, at == null ? 0 : at); return this; };
  /** Pop in: scale 1.5 → 1 hard-snap (the pictogram "stamp"). */
  Node.prototype.pop = function (at, dur) {
    at = at == null ? 0 : at;
    this.show(at);
    this.ts.add(this.s * 1.45, Math.max(0, at - 0.001), 0.0001, "hard").add(this.s, at, num(dur, 0.16), "snap");
    return this;
  };
  Node.prototype.update = function (t) {
    if (this.facingSw) this.flip = this.facingSw.at(t) === "left";
    var st = this.state(t);
    var jx = 0, jy = 0;
    if (this.shiver) { var sh = this.shiver(t); if (sh) { var fr = Math.floor(t * 30); jx = (hash01(fr * 3.1 + this.seed) - 0.5) * sh; jy = (hash01(fr * 5.7 + this.seed) - 0.5) * sh * 0.5; } }
    var tf = "translate(" + fx(st.x + jx) + " " + fx(st.y + jy) + ")" + (st.rot ? " rotate(" + fx(st.rot) + ")" : "") + (st.s !== 1 || this.flip ? " scale(" + (this.flip ? -st.s : st.s).toFixed(4) + " " + st.s.toFixed(4) + ")" : "");
    if (tf !== this.lt) { this.g.setAttribute("transform", tf); this.lt = tf; }
    var o = Math.round(this.top.at(t) * 100) / 100;
    var hide = !this.vis.at(t) || o <= 0.001;
    if (hide !== this.ld) { this.g.style.display = hide ? "none" : ""; this.ld = hide; }
    if (o !== this.lo) { this.g.setAttribute("opacity", o); this.lo = o; }
    if (this.onUpdate) this.onUpdate(t, st);
  };
  /** World bbox {x,y,w,h,cx,cy} from the local bb (ignores rotation). */
  Node.prototype.box = function (t) {
    var st = this.state(t == null ? this.sc.t || 0 : t), b = this.bb, s = st.s;
    var x0 = this.flip ? st.x - b[2] * s : st.x + b[0] * s, x1 = this.flip ? st.x - b[0] * s : st.x + b[2] * s;
    var r = { x: x0, y: st.y + b[1] * s, w: x1 - x0, h: (b[3] - b[1]) * s };
    r.cx = r.x + r.w / 2;
    r.cy = r.y + r.h / 2;
    return r;
  };
  S.Node = Node;

  // ───────────────────────── text measuring ─────────────────────────
  var mctx = null;
  function measure(s, size, weight) {
    if (!mctx) { try { mctx = document.createElement("canvas").getContext("2d"); } catch (e) { mctx = null; } }
    if (!mctx) return str(s).length * size * 0.5;
    mctx.font = (weight || 700) + " " + size.toFixed(2) + "px " + FONT;
    return mctx.measureText(str(s)).width;
  }
  S.measureText = measure;
  function fitText(node, opts) { try { V.fit(node, opts || {}); } catch (e) {} }
  function pct(v) { return fx(v * 100) + "%"; }
  /** Show an HTML node only inside [from, to). */
  function windowed(sc, node, from, to) {
    var lv = -1;
    node.style.visibility = "visible";
    sc.extras.push(function (t) {
      var v = t >= from - 0.001 && t < to ? 1 : 0;
      if (v !== lv) { node.style.display = v ? "" : "none"; lv = v; }
    });
  }
  /** Nudge an absolutely positioned overlay back inside the safe frame (after fitting). */
  function keepInside(sc, box) {
    try {
      var r = box.getBoundingClientRect();
      if (!r.width) return;
      var mx = sc.mx * 0.6, my = sc.my * 0.5;
      var dx = 0, dy = 0;
      if (r.left < mx) dx = mx - r.left; else if (r.right > sc.W - mx) dx = sc.W - mx - r.right;
      if (r.top < my) dy = my - r.top; else if (r.bottom > sc.H - my) dy = sc.H - my - r.bottom;
      if (!dx && !dy) return;
      var cs = getComputedStyle(box);
      box.style.left = (parseFloat(cs.left) + dx) + "px";
      box.style.top = (parseFloat(cs.top) + dy) + "px";
    } catch (e) {}
  }

  // ───────────────────────── pictogram library (100 × 100 box, ground at y = 100, centre x = 50) ─────────────────────────
  // Shape specs: ["r", x, y, w, h, rx, color]  ["c", cx, cy, r, color]  ["e", cx, cy, rx, ry, color]
  // ["p", d, color]  ["l", x1, y1, x2, y2, width, color]  ["t", text, x, y, size, color]
  // ["g", partName, [shapes], pivotX, pivotY]  — a named part that templates can rotate / move.
  // Colours: undefined = ink, "inv" = background cut-out, "red", "yel", "grey".
  function rr(x, y, w, h, r, c) { return ["r", x, y, w, h, r || 0, c]; }
  function cc(x, y, r, c) { return ["c", x, y, r, c]; }
  function ee(x, y, rx, ry, c) { return ["e", x, y, rx, ry, c]; }
  function pp(d, c) { return ["p", d, c]; }
  function ll(x1, y1, x2, y2, w, c) { return ["l", x1, y1, x2, y2, w, c]; }
  function tt(text, x, y, size, c) { return ["t", text, x, y, size, c]; }
  function part(name, shapes, px, py) { return ["g", name, shapes, px || 0, py || 0]; }
  function tri(cx, top, w, h, c) { return pp("M" + cx + " " + top + " L" + (cx + w / 2) + " " + (top + h) + " L" + (cx - w / 2) + " " + (top + h) + "Z", c); }

  var OBJECTS = {
    bed: function () {
      return [rr(4, 36, 10, 64, 3), rr(86, 56, 10, 44, 3), rr(8, 62, 86, 18, 4), rr(8, 80, 84, 8, 0), ee(28, 60, 15, 7, "inv"), pp("M46 62 Q70 50 92 62 L92 70 L46 70Z", "inv"), rr(8, 70, 86, 2, 0, "inv")];
    },
    door: function (o) {
      var leaf = [rr(22, 8, 56, 92, 1), cc(66, 54, 4, "inv"), rr(30, 16, 40, 28, 1, "inv"), rr(30, 50, 40, 28, 1, "inv"), rr(34, 20, 32, 20, 0), rr(34, 54, 32, 20, 0)];
      if (o && o.peephole) leaf.push(cc(50, 26, 3, "inv"));
      return [rr(14, 0, 72, 8, 0), rr(14, 0, 8, 100, 0), rr(78, 0, 8, 100, 0), part("leaf", leaf, 22, 54), rr(10, 96, 80, 4, 0)];
    },
    window: function (o) {
      var sky = o && o.night ? [] : [];
      return [rr(8, 6, 84, 88, 2), rr(14, 12, 72, 76, 0, "inv"), rr(48, 12, 4, 76, 0), rr(14, 48, 72, 4, 0)].concat(sky, [
        part("curtainL", [rr(8, 2, 14, 92, 0)], 8, 0), part("curtainR", [rr(78, 2, 14, 92, 0)], 92, 0), rr(4, 0, 92, 6, 0),
      ]);
    },
    phone: function () {
      return [rr(26, 2, 48, 96, 8), rr(30, 12, 40, 72, 2, "inv"), rr(42, 6, 16, 3, 1.5, "inv"), rr(40, 89, 20, 3, 1.5, "inv")];
    },
    clock: function () {
      return [cc(50, 50, 48), cc(50, 50, 42, "inv"), cc(50, 50, 4), rr(49, 11, 2, 7, 0), rr(49, 82, 2, 7, 0), rr(11, 49, 7, 2, 0), rr(82, 49, 7, 2, 0),
        part("hour", [rr(47.5, 24, 5, 29, 2.5)], 50, 50), part("minute", [rr(48.5, 14, 3, 39, 1.5)], 50, 50)];
    },
    "clock-digital": function () { return [rr(4, 28, 92, 44, 6), rr(10, 34, 80, 32, 3, "inv")]; },
    house: function () {
      return [rr(16, 46, 68, 54, 0), tri(50, 10, 90, 40), rr(66, 16, 10, 20, 0), rr(42, 66, 16, 34, 2, "inv"), rr(24, 56, 12, 12, 1, "inv"), rr(64, 56, 12, 12, 1, "inv")];
    },
    car: function () {
      return [rr(4, 58, 92, 24, 8), pp("M22 60 L34 40 L68 40 L80 60Z"), pp("M36 44 L48 44 L48 58 L28 58Z", "inv"), pp("M52 44 L65 44 L74 58 L52 58Z", "inv"),
        part("wheelA", [cc(26, 82, 12), cc(26, 82, 5, "inv")], 26, 82), part("wheelB", [cc(74, 82, 12), cc(74, 82, 5, "inv")], 74, 82)];
    },
    poster: function () {
      return [rr(12, 4, 76, 92, 1), rr(16, 8, 68, 84, 0, "inv"), cc(50, 8, 4, "red"), tt("LOST", 50, 30, 17), cc(50, 54, 14), ee(41, 52, 5, 9), ee(59, 52, 5, 9), pp("M44 60 L56 60 L50 66Z", "inv"),
        rr(24, 74, 52, 4, 0), rr(30, 82, 40, 4, 0)];
    },
    lamp: function () {
      return [rr(34, 94, 32, 6, 2), rr(48, 30, 4, 66, 0), pp("M30 10 L70 10 L80 40 L20 40Z"), part("light", [pp("M20 40 L80 40 L96 100 L4 100Z", "yel")], 50, 40)];
    },
    "table-lamp": function () {
      return [rr(28, 60, 44, 40, 2), rr(24, 56, 52, 6, 1), rr(47, 32, 6, 26, 0), pp("M30 12 L70 12 L78 36 L22 36Z"), part("light", [pp("M22 36 L78 36 L90 58 L10 58Z", "yel")], 50, 36)];
    },
    nightstand: function () { return [rr(14, 50, 72, 50, 2), rr(22, 60, 56, 14, 1, "inv"), cc(50, 67, 3), rr(14, 46, 72, 6, 1)]; },
    tv: function () {
      return [rr(4, 8, 92, 60, 3), part("screen", [rr(10, 14, 80, 48, 1, "inv")], 50, 38), rr(46, 68, 8, 20, 0), rr(26, 88, 48, 6, 2)];
    },
    couch: function () {
      return [rr(4, 40, 92, 48, 6), rr(10, 28, 80, 20, 6), rr(4, 60, 18, 28, 4), rr(78, 60, 18, 28, 4), rr(20, 48, 60, 4, 0, "inv"), rr(50, 52, 2, 12, 0, "inv"), rr(10, 88, 8, 12, 0), rr(82, 88, 8, 12, 0)];
    },
    chair: function () { return [rr(26, 10, 8, 56, 2), rr(26, 56, 48, 10, 2), rr(28, 66, 7, 34, 1), rr(66, 66, 7, 34, 1), rr(30, 14, 44, 6, 1)]; },
    table: function () { return [rr(4, 40, 92, 8, 2), rr(12, 48, 8, 52, 1), rr(80, 48, 8, 52, 1)]; },
    fridge: function () { return [rr(18, 2, 64, 98, 4), rr(24, 8, 52, 30, 2, "inv"), rr(24, 44, 52, 50, 2, "inv"), rr(70, 16, 3, 14, 1.5), rr(70, 52, 3, 20, 1.5)]; },
    laptop: function () { return [rr(18, 24, 64, 46, 3), rr(23, 29, 54, 36, 1, "inv"), pp("M6 74 L94 74 L96 82 L4 82Z"), rr(40, 74, 20, 3, 0, "inv")]; },
    stairs: function () { return [pp("M4 100 L4 86 L20 86 L20 70 L36 70 L36 54 L52 54 L52 38 L68 38 L68 22 L84 22 L84 6 L96 6 L96 100Z")]; },
    tree: function () { return [rr(45, 60, 10, 40, 0), cc(50, 36, 30), cc(32, 50, 18), cc(68, 50, 18)]; },
    pine: function () { return [rr(46, 80, 8, 20, 0), tri(50, 2, 50, 40), tri(50, 26, 66, 36), tri(50, 50, 84, 36)]; },
    moon: function () { return [cc(50, 50, 40), cc(66, 40, 34, "inv")]; },
    key: function () { return [cc(30, 40, 22), cc(30, 40, 10, "inv"), rr(48, 36, 46, 9, 2), rr(80, 44, 7, 14, 1), rr(66, 44, 7, 10, 1)]; },
    bag: function () { return [rr(14, 26, 72, 74, 10), rr(30, 6, 40, 30, 14), rr(36, 12, 28, 24, 8, "inv"), rr(24, 50, 52, 30, 4, "inv"), rr(30, 56, 40, 18, 2)]; },
    cup: function () { return [rr(20, 30, 50, 60, 6), rr(66, 44, 24, 30, 10), rr(72, 50, 12, 18, 5, "inv"), rr(26, 36, 38, 10, 0, "inv")]; },
    bath: function () { return [pp("M4 44 L96 44 L90 92 L10 92Z"), rr(12, 50, 76, 32, 2, "inv"), rr(10, 92, 10, 8, 1), rr(80, 92, 10, 8, 1), rr(78, 14, 5, 30, 2), rr(70, 10, 20, 8, 3)]; },
    mirror: function () { return [ee(50, 40, 34, 40), ee(50, 40, 28, 34, "inv"), rr(47, 78, 6, 16, 0), rr(30, 94, 40, 6, 3)]; },
    sink: function () { return [rr(8, 50, 84, 20, 6), rr(14, 54, 72, 10, 3, "inv"), rr(36, 70, 28, 30, 2), rr(46, 30, 8, 22, 3), rr(46, 26, 20, 7, 3)]; },
    wardrobe: function () {
      return [rr(10, 2, 80, 98, 3), rr(16, 8, 32, 86, 1, "inv"), part("leafR", [rr(52, 8, 32, 86, 1, "inv"), cc(56, 50, 3)], 84, 50), cc(44, 50, 3)];
    },
    mailbox: function () { return [rr(46, 50, 8, 50, 0), rr(14, 22, 72, 32, 10), rr(14, 22, 20, 32, 0, "inv"), rr(14, 22, 10, 32, 0), rr(66, 10, 4, 18, 2, "red"), rr(66, 10, 14, 8, 1, "red")]; },
    bus: function () {
      return [rr(4, 20, 92, 60, 8), rr(12, 28, 20, 22, 2, "inv"), rr(36, 28, 20, 22, 2, "inv"), rr(60, 28, 20, 22, 2, "inv"), rr(66, 54, 16, 26, 2, "inv"),
        part("wheelA", [cc(24, 82, 11), cc(24, 82, 4, "inv")], 24, 82), part("wheelB", [cc(76, 82, 11), cc(76, 82, 4, "inv")], 76, 82), rr(8, 60, 50, 6, 0, "inv")];
    },
    lamppost: function () { return [rr(46, 14, 8, 86, 0), rr(34, 94, 32, 6, 2), rr(30, 2, 40, 16, 4), part("light", [pp("M34 18 L66 18 L92 100 L8 100Z", "yel")], 50, 18)]; },
    sign: function () { return [rr(47, 50, 6, 50, 0), tri(50, 2, 70, 56, "yel"), tri(50, 8, 58, 46), tri(50, 13, 48, 38, "yel"), rr(47.5, 24, 5, 16, 2), cc(50, 45, 3)]; },
    "stop-sign": function () { return [rr(47, 56, 6, 44, 0), pp("M35 4 L65 4 L86 25 L86 55 L65 76 L35 76 L14 55 L14 25Z", "red"), tt("STOP", 50, 47, 18, "inv")]; },
    eye: function () { return [pp("M4 50 Q50 2 96 50 Q50 98 4 50Z"), pp("M12 50 Q50 14 88 50 Q50 86 12 50Z", "inv"), cc(50, 50, 18), cc(50, 50, 8, "inv")]; },
    hand: function () { return [rr(28, 48, 44, 44, 10), rr(28, 20, 9, 40, 4.5), rr(40, 10, 9, 44, 4.5), rr(52, 8, 9, 46, 4.5), rr(64, 18, 9, 40, 4.5), pp("M28 60 L14 44 Q10 38 16 34 L30 48Z"), rr(36, 92, 28, 8, 3)]; },
    footprints: function () { return [ee(30, 72, 12, 20), cc(30, 44, 9), cc(18, 50, 4), cc(42, 50, 4), ee(70, 48, 12, 20), cc(70, 20, 9), cc(58, 26, 4), cc(82, 26, 4)]; },
    pill: function () { return [rr(24, 24, 52, 76, 6), rr(30, 10, 40, 18, 3), rr(30, 44, 40, 24, 2, "inv"), rr(44, 50, 12, 4, 0), rr(48, 46, 4, 12, 0)]; },
    flashlight: function () { return [rr(8, 36, 50, 28, 4), rr(56, 28, 32, 44, 4), rr(80, 32, 6, 36, 0, "inv"), rr(16, 40, 34, 6, 2, "inv"), part("beam", [pp("M88 28 L100 20 L100 80 L88 72Z", "yel")], 88, 50)]; },
    candle: function () { return [rr(36, 40, 28, 60, 2), rr(48, 30, 4, 12, 0), part("flame", [ee(50, 22, 7, 12, "yel"), ee(50, 26, 3, 5)], 50, 32)]; },
    radio: function () { return [rr(8, 36, 84, 56, 6), cc(32, 64, 18, "inv"), cc(32, 64, 12), rr(58, 48, 26, 10, 2, "inv"), rr(60, 66, 22, 16, 2, "inv"), rr(70, 10, 3, 28, 1.5)]; },
    camera: function () { return [rr(10, 20, 54, 40, 6), pp("M64 28 L90 16 L90 64 L64 52Z"), cc(26, 40, 10, "inv"), cc(26, 40, 4, "red"), rr(30, 60, 8, 20, 0), rr(20, 78, 28, 6, 2)]; },
    envelope: function () { return [rr(6, 24, 88, 60, 4), pp("M12 30 L50 60 L88 30 L88 36 L50 66 L12 36Z", "inv")]; },
    box: function () { return [rr(10, 36, 80, 64, 2), rr(4, 24, 92, 16, 2), rr(42, 52, 16, 20, 1, "inv"), rr(45, 55, 10, 14, 0)]; },
    bench: function () { return [rr(4, 50, 92, 12, 3), rr(10, 62, 8, 38, 1), rr(82, 62, 8, 38, 1), rr(8, 30, 84, 10, 3), rr(10, 40, 8, 12, 0), rr(82, 40, 8, 12, 0)]; },
    plant: function () { return [pp("M30 100 L70 100 L66 70 L34 70Z"), rr(30, 64, 40, 8, 2), rr(48, 30, 4, 36, 0), ee(36, 40, 12, 20), ee(64, 40, 12, 20), ee(50, 22, 10, 18)]; },
    frame: function () { return [rr(8, 10, 84, 80, 2), rr(16, 18, 68, 64, 0, "inv"), cc(50, 42, 12), pp("M28 82 L72 82 L72 70 Q50 48 28 70Z")]; },
    teddy: function () { return [cc(50, 34, 20), cc(32, 20, 8), cc(68, 20, 8), rr(32, 50, 36, 44, 14), cc(24, 62, 9), cc(76, 62, 9), cc(36, 96, 9), cc(64, 96, 9), cc(43, 32, 3, "inv"), cc(57, 32, 3, "inv"), ee(50, 42, 6, 4, "inv")]; },
    fence: function () { return [rr(6, 30, 10, 70, 0), rr(30, 24, 10, 76, 0), rr(54, 30, 10, 70, 0), rr(78, 24, 10, 76, 0), tri(11, 20, 12, 12), tri(35, 14, 12, 12), tri(59, 20, 12, 12), tri(83, 14, 12, 12), rr(2, 44, 96, 8, 0), rr(2, 78, 96, 8, 0)]; },
    stone: function () { return [pp("M20 100 L20 30 Q20 6 50 6 Q80 6 80 30 L80 100Z"), rr(8, 94, 84, 6, 2), rr(40, 36, 20, 6, 1, "inv"), rr(47, 30, 6, 24, 1, "inv")]; },
    ladder: function () { return [rr(22, 0, 8, 100, 0), rr(70, 0, 8, 100, 0), rr(22, 14, 56, 6, 0), rr(22, 34, 56, 6, 0), rr(22, 54, 56, 6, 0), rr(22, 74, 56, 6, 0)]; },
    bowl: function () { return [pp("M8 70 L92 70 L82 100 L18 100Z"), rr(20, 76, 60, 6, 0, "inv"), rr(44, 70, 12, 0, 0)]; },
    bone: function () { return [rr(22, 44, 56, 12, 6), cc(20, 42, 9), cc(20, 58, 9), cc(80, 42, 9), cc(80, 58, 9)]; },
    shelf: function () { return [rr(4, 30, 92, 8, 1), rr(4, 70, 92, 8, 1), rr(14, 8, 10, 22, 1), rr(28, 14, 8, 16, 1), rr(40, 4, 12, 26, 1), rr(60, 52, 24, 18, 2), rr(16, 58, 14, 12, 1)]; },
    bulb: function () { return [rr(48, 0, 4, 30, 0), cc(50, 52, 22), rr(42, 70, 16, 10, 2), rr(44, 80, 12, 6, 2), part("light", [pp("M28 52 L72 52 L96 100 L4 100Z", "yel")], 50, 52)]; },
    doormat: function () { return [rr(4, 84, 92, 16, 3), rr(10, 89, 80, 6, 1, "inv")]; },
    keyhole: function () { return [cc(50, 36, 24), pp("M40 50 L60 50 L70 92 L30 92Z")]; },
    umbrella: function () { return [pp("M4 50 Q50 0 96 50Z"), rr(48, 50, 4, 40, 0), pp("M52 90 Q52 100 42 100 Q34 100 34 92", "ink")]; },
    monitor: function () { return [rr(6, 10, 88, 58, 4), rr(12, 16, 76, 46, 1, "inv"), rr(44, 68, 12, 14, 0), rr(26, 82, 48, 6, 2)]; },
    crib: function () { return [rr(8, 20, 8, 80, 2), rr(84, 20, 8, 80, 2), rr(8, 70, 84, 10, 0), rr(16, 30, 68, 6, 0), rr(28, 36, 5, 34, 0), rr(44, 36, 5, 34, 0), rr(60, 36, 5, 34, 0), rr(76, 36, 5, 34, 0)]; },
    sun: function () { return [cc(50, 50, 26), rr(47, 4, 6, 14, 3), rr(47, 82, 6, 14, 3), rr(4, 47, 14, 6, 3), rr(82, 47, 14, 6, 3), ll(18, 18, 28, 28, 6), ll(82, 18, 72, 28, 6), ll(18, 82, 28, 72, 6), ll(82, 82, 72, 72, 6)]; },
    mask: function () { return [rr(12, 30, 76, 44, 8), rr(4, 44, 12, 8, 4), rr(84, 44, 12, 8, 4), rr(20, 50, 60, 4, 0, "inv"), rr(20, 60, 60, 4, 0, "inv")]; },
    skull: function () { return [cc(50, 42, 34), rr(32, 66, 36, 26, 6), cc(36, 42, 10, "inv"), cc(64, 42, 10, "inv"), tri(50, 50, 10, 10, "inv"), rr(40, 78, 4, 10, 1, "inv"), rr(48, 78, 4, 10, 1, "inv"), rr(56, 78, 4, 10, 1, "inv")]; },
    cross: function () { return [pp("M16 28 L28 16 L50 38 L72 16 L84 28 L62 50 L84 72 L72 84 L50 62 L28 84 L16 72 L38 50Z", "red")]; },
    check: function () { return [pp("M10 54 L24 40 L42 58 L78 18 L92 32 L42 86Z")]; },
    triangle: function () { return [pp("M50 4 L98 92 L2 92Z"), pp("M50 22 L84 84 L16 84Z", "inv"), rr(45, 40, 10, 24, 3), cc(50, 74, 6)]; },
    "road": function () { return [rr(0, 90, 100, 10, 0), rr(6, 94, 18, 2, 0, "inv"), rr(41, 94, 18, 2, 0, "inv"), rr(76, 94, 18, 2, 0, "inv")]; },
    "bus-stop": function () { return [rr(46, 24, 8, 76, 0), rr(20, 4, 60, 26, 4), rr(26, 10, 48, 14, 2, "inv"), rr(30, 14, 40, 6, 0)]; },
    bush: function () { return [cc(30, 76, 22), cc(56, 66, 28), cc(78, 80, 18), rr(10, 84, 84, 16, 6)]; },
    cloud: function () { return [cc(30, 62, 20), cc(52, 48, 28), cc(76, 62, 20), rr(14, 62, 74, 22, 10)]; },
    grave: function () { return [pp("M24 100 L24 34 Q24 10 50 10 Q76 10 76 34 L76 100Z"), rr(12, 94, 76, 6, 2), rr(42, 36, 16, 5, 1, "inv"), rr(47.5, 30, 5, 20, 1, "inv")]; },
    cradle: function () { return [rr(14, 40, 72, 40, 6), pp("M8 86 Q50 104 92 86 L92 92 Q50 110 8 92Z"), rr(22, 48, 56, 16, 3, "inv")]; },
    cake: function () { return [rr(10, 60, 80, 40, 4), rr(20, 40, 60, 22, 4), rr(46, 18, 8, 24, 2), ee(50, 12, 4, 7, "yel"), rr(10, 66, 80, 4, 0, "inv"), rr(20, 46, 60, 3, 0, "inv")]; },
  };
  var SYN = { dog: "dog", puppy: "dog", cat: "cat", kitten: "cat", owl: "owl", bird: "crow", crow: "crow", raven: "crow", smartphone: "phone", cellphone: "phone", mobile: "phone", call: "phone", message: "phone", text: "phone", "front-door": "door", doorway: "door", "closet": "wardrobe", cupboard: "wardrobe", television: "tv", sofa: "couch", desk: "table", computer: "laptop", pc: "monitor", screen: "monitor", stairway: "stairs", staircase: "stairs", basement: "stairs", woods: "pine", forest: "pine", light: "bulb", bulb: "bulb", lightbulb: "bulb", torch: "flashlight", letter: "envelope", mail: "envelope", package: "box", parcel: "box", medicine: "pill", pills: "pill", bottle: "pill", mug: "cup", coffee: "cup", tea: "cup", bathtub: "bath", tub: "bath", picture: "frame", photo: "frame", photograph: "frame", bear: "teddy", toy: "teddy", gravestone: "grave", tombstone: "grave", "warning": "triangle", warn: "triangle", danger: "triangle", "x": "cross", tick: "check", street: "lamppost", streetlight: "lamppost", garden: "fence", backpack: "bag", keys: "key", watch: "clock", time: "clock", alarm: "clock-digital", "alarm-clock": "clock-digital", "digital-clock": "clock-digital", baby: "crib", nursery: "crib", stop: "stop-sign", night: "moon", sky: "cloud", stone: "stone", rock: "stone", mirror: "mirror", vehicle: "car", taxi: "car", hands: "hand", palm: "hand", footprint: "footprints", prints: "footprints", steps: "footprints", tracks: "footprints", trail: "footprints", eyes: "eye", "cctv": "camera", security: "camera", radio: "radio", music: "radio", dinner: "table", kitchen: "fridge", food: "bowl", bowl: "bowl", treat: "bone", books: "shelf", bookshelf: "shelf", bench: "bench", seat: "bench", plant: "plant", pot: "plant", flowers: "plant", home: "house", building: "house", cabin: "house", lamp: "lamp", "night-light": "table-lamp", nightlight: "table-lamp", "bedside": "nightstand", "drawer": "nightstand", umbrella: "umbrella", rain: "umbrella", bus: "bus", mailbox: "mailbox", postbox: "mailbox", "skull": "skull", mask: "mask", "birthday": "cake", cake: "cake", candle: "candle", candles: "candle" };
  var OBJECT_NAMES = Object.keys(OBJECTS);
  function objectKey(n) {
    var k = str(n).toLowerCase().trim().replace(/\s+/g, "-");
    if (OBJECTS[k]) return k;
    if (SYN[k] && OBJECTS[SYN[k]]) return SYN[k];
    var s = k.replace(/s$/, "");
    if (OBJECTS[s]) return s;
    if (SYN[s] && OBJECTS[SYN[s]]) return SYN[s];
    return null;
  }
  function pickObject(text) {
    var ws = plain(text).toLowerCase().split(/[^a-z-]+/).filter(Boolean);
    for (var i = 0; i < ws.length; i++) { var k = objectKey(ws[i]); if (k) return k; }
    return null;
  }
  S.objects = OBJECT_NAMES.slice();
  S.hasObject = function (n) { return !!objectKey(n); };
  S.pickObject = pickObject;
  S.objectKey = objectKey;

  /** Build shape specs into an SVG group. Returns { parts: {name: g} }. */
  function buildShapes(parent, shapes, parts, accent) {
    for (var i = 0; i < shapes.length; i++) {
      var s = shapes[i], c;
      if (s[0] === "g") {
        var pg = g(parent, { class: "pg-part" });
        pg.__pivot = [s[3], s[4]];
        buildShapes(pg, s[2], parts, accent);
        parts[s[1]] = pg;
        continue;
      }
      var col = s[s.length - 1];
      if (s[0] === "t") col = s[5];
      c = col === "inv" ? "var(--pg-bg)" : col === "red" ? "var(--pg-red)" : col === "yel" ? "var(--pg-yel)" : col === "grey" ? "var(--pg-grey)" : accent ? "var(--pg-red)" : "var(--pg-ink)";
      if (s[0] === "r") svgEl("rect", { x: s[1], y: s[2], width: s[3], height: s[4], rx: s[5] || 0, fill: c }, parent);
      else if (s[0] === "c") svgEl("circle", { cx: s[1], cy: s[2], r: s[3], fill: c }, parent);
      else if (s[0] === "e") svgEl("ellipse", { cx: s[1], cy: s[2], rx: s[3], ry: s[4], fill: c }, parent);
      else if (s[0] === "p") svgEl("path", { d: s[1], fill: c }, parent);
      else if (s[0] === "l") svgEl("line", { x1: s[1], y1: s[2], x2: s[3], y2: s[4], stroke: c, "stroke-width": s[5], "stroke-linecap": "round" }, parent);
      else if (s[0] === "t") { var tx = svgEl("text", { x: s[2], y: s[3], "font-size": s[4], "text-anchor": "middle", fill: c, class: "pg-svgtext" }, parent); tx.textContent = s[1]; }
    }
  }

  // ───────────────────────── Obj: a placed pictogram ─────────────────────────
  /**
   * o: x (centre), y (ground / bottom), size (box height), at (pop-in; omit = visible from 0),
   * layer, accent (red), flip, rot, color override, opts for the object builder (night, peephole).
   */
  function Obj(sc, name, o) {
    o = o || {};
    var key = objectKey(name) || "box";
    var size = num(o.size, u(240));
    Node.call(this, sc, { x: num(o.x, sc.W / 2), y: num(o.y, sc.floor), s: size / 100, rot: o.rot, flip: o.flip, layer: o.layer, parent: o.parent, cls: "pg-obj pg-obj-" + key, from: o.at != null ? clampT(o.at) : null });
    this.name = key;
    this.size = size;
    this.parts = {};
    this.inner = g(this.g, { transform: "translate(-50 -100)" });
    if (o.color) this.inner.style.color = colorOf(o.color);
    buildShapes(this.inner, OBJECTS[key](o), this.parts, !!o.accent);
    this.bb = [-50, -100, 50, 0];
    this.partKeys = {};
    if (o.at != null) this.pop(clampT(o.at));
    var self = this;
    this.onUpdate = function (t) { self.updateParts(t); };
  }
  Obj.prototype = Object.create(Node.prototype);
  Obj.prototype.constructor = Obj;
  /** Animate a named part: rotate (deg) and/or dx, dy (box units) at `at` over `dur`. */
  Obj.prototype.part = function (name, props, at, dur, ease) {
    var pg = this.parts[name];
    if (!pg) return this;
    var k = this.partKeys[name] || (this.partKeys[name] = { g: pg, rot: new Track(0), dx: new Track(0), dy: new Track(0), op: new Track(1), sx: new Track(1), ky: new Track(0), last: "" });
    if (props.sx != null) k.sx.add(num(props.sx, 1), at, dur, ease);
    if (props.ky != null) k.ky.add(num(props.ky, 0), at, dur, ease);
    if (props.rot != null) k.rot.add(num(props.rot, 0), at, dur, ease);
    if (props.dx != null) k.dx.add(num(props.dx, 0), at, dur, ease);
    if (props.dy != null) k.dy.add(num(props.dy, 0), at, dur, ease);
    if (props.op != null) k.op.add(num(props.op, 1), at, dur, ease);
    return this;
  };
  Obj.prototype.updateParts = function (t) {
    for (var n in this.partKeys) {
      var k = this.partKeys[n], pv = k.g.__pivot;
      var r = k.rot.at(t), dx = k.dx.at(t), dy = k.dy.at(t), op = Math.round(k.op.at(t) * 100) / 100, sx = k.sx.at(t), ky = k.ky.at(t);
      var tf = "translate(" + fx(dx) + " " + fx(dy) + ") translate(" + pv[0] + " " + pv[1] + ") skewY(" + fx(ky) + ") scale(" + fx(sx) + " 1) rotate(" + fx(r) + ") translate(" + -pv[0] + " " + -pv[1] + ")";
      if (tf !== k.last) { k.g.setAttribute("transform", tf); k.last = tf; }
      setA(k.g, "opacity", op);
      setS(k.g, "visibility", op > 0 ? "visible" : "hidden");
    }
  };
  /** Door: swing open (deg, default 70) over dur; `creak` = slow. Closes with open(0). */
  Obj.prototype.open = function (at, deg, dur) {
    var d = clamp(num(deg, 70), 0, 90);
    if (this.parts.leaf) return this.part("leaf", { sx: 1 - 0.8 * (d / 90), ky: -d * 0.18 }, at, num(dur, 1.4), "inOutCubic");
    if (this.parts.leafR) return this.part("leafR", { sx: 1 - 0.8 * (d / 90), ky: d * 0.18 }, at, num(dur, 1.2));
    return this;
  };
  Obj.prototype.close = function (at, dur) { return this.part(this.parts.leaf ? "leaf" : "leafR", { sx: 1, ky: 0 }, at, num(dur, 0.25), "snap"); };
  /** Window curtains slide shut (p = 1) or open (p = 0). */
  Obj.prototype.curtains = function (p, at, dur) {
    p = clamp(num(p, 1), 0, 1);
    this.part("curtainL", { dx: 30 * p }, at, num(dur, 0.6));
    this.part("curtainR", { dx: -30 * p }, at, num(dur, 0.6));
    return this;
  };
  /** Clock hands show "H:MM" (string) — sets both hands at `at`, sweeping over dur. */
  Obj.prototype.setTime = function (time, at, dur) {
    var m = /(\d{1,2})\D+(\d{2})/.exec(str(time));
    if (!m || !this.parts.hour) return this;
    var h = Number(m[1]) % 12, mi = Number(m[2]);
    this.part("hour", { rot: h * 30 + mi * 0.5 }, at == null ? 0 : at, num(dur, 0.0001), "inOutCubic");
    this.part("minute", { rot: mi * 6 }, at == null ? 0 : at, num(dur, 0.0001), "inOutCubic");
    return this;
  };
  /** Light cone on/off (lamp, lamppost, bulb, flashlight, candle). */
  Obj.prototype.light = function (on, at) {
    var k = this.parts.light ? "light" : this.parts.beam ? "beam" : this.parts.flame ? "flame" : null;
    if (!k) return this;
    if (!this.partKeys[k]) { this.part(k, { op: on ? 1 : 0 }, 0, 0.0001); }
    return this.part(k, { op: on ? 1 : 0 }, at == null ? 0 : at, 0.0001, "hard");
  };
  /** Wheels turn while the object moves. */
  Obj.prototype.roll = function (at, dur, turns) {
    this.part("wheelA", { rot: num(turns, 3) * 360 }, at, dur, "linear");
    this.part("wheelB", { rot: num(turns, 3) * 360 }, at, dur, "linear");
    return this;
  };
  /** TV static: the screen flickers between ink and bg frames. */
  Obj.prototype.staticOn = function (at, until) {
    var sc = this.sc, scr = this.parts.screen, self = this;
    if (!scr) return this;
    var seed = this.seed;
    sc.extras.push(function (t) {
      var on = t >= at && t < (until == null ? 1e9 : until);
      var fr = Math.floor(t * 24);
      setS(scr, "opacity", on ? (hash01(fr * 3.3 + seed) < 0.5 ? 0.15 : 1) : 1);
    });
    return this;
  };
  S.Obj = Obj;

  // ───────────────────────── settings (rooms built from pictograms) ─────────────────────────
  /**
   * Each setting returns { objs: {name: Obj}, slots: [x…] (figure spots), focus: {name: Obj} } and
   * draws a floor line. Layout is a function of aspect: landscape rooms are wide, portrait rooms
   * stack things vertically.
   */
  var SETTINGS = {};
  function floorLine(sc, x0, x1, y, at) {
    var n = new Node(sc, { layer: "back" });
    svgEl("rect", { x: x0, y: y - u(3), width: x1 - x0, height: u(6), fill: "var(--pg-ink)" }, n.g);
    n.bb = [x0, y - u(3), x1, y + u(3)];
    return n;
  }
  function place(sc, name, nx, ny, nsize, o) {
    var W = sc.W, H = sc.H, m = Math.min(W, H);
    o = o || {};
    o.x = W * nx;
    o.y = H * ny;
    o.size = m * nsize;
    return new Obj(sc, name, o);
  }
  SETTINGS.bedroom = function (sc, o) {
    var P = sc.portrait, Q = sc.square, F = sc.floor / sc.H, objs = {};
    floorLine(sc, sc.mx * 0.5, sc.W - sc.mx * 0.5, sc.floor);
    if (P) {
      objs.window = place(sc, "window", 0.3, 0.42, 0.34, { opts: o });
      objs.clock = place(sc, "clock", 0.74, 0.36, 0.16);
      objs.bed = place(sc, "bed", 0.36, F, 0.46);
      objs.nightstand = place(sc, "nightstand", 0.7, F, 0.17);
      objs["table-lamp"] = place(sc, "table-lamp", 0.7, F - 0.085, 0.13);
      objs.door = place(sc, "door", 0.88, F, 0.5);
      return { objs: objs, slots: [0.58, 0.8, 0.2], bedSlot: 0.38 };
    }
    objs.window = place(sc, "window", Q ? 0.26 : 0.22, Q ? 0.56 : 0.56, Q ? 0.3 : 0.34);
    objs.clock = place(sc, "clock", Q ? 0.55 : 0.5, Q ? 0.4 : 0.4, 0.14);
    objs.bed = place(sc, "bed", Q ? 0.28 : 0.25, F, Q ? 0.42 : 0.42);
    objs.nightstand = place(sc, "nightstand", Q ? 0.55 : 0.5, F, 0.16);
    objs["table-lamp"] = place(sc, "table-lamp", Q ? 0.55 : 0.5, F - 0.08, 0.12);
    objs.door = place(sc, "door", Q ? 0.84 : 0.86, F, Q ? 0.5 : 0.56);
    return { objs: objs, slots: [Q ? 0.7 : 0.68, 0.84, 0.4], bedSlot: 0.27 };
  };
  SETTINGS.hallway = function (sc) {
    var P = sc.portrait, Q = sc.square, F = sc.floor / sc.H, objs = {};
    floorLine(sc, sc.mx * 0.5, sc.W - sc.mx * 0.5, sc.floor);
    if (P) {
      objs.door = place(sc, "door", 0.5, F, 0.5);
      objs.frame = place(sc, "frame", 0.18, 0.42, 0.14);
      objs.bulb = place(sc, "bulb", 0.5, 0.3, 0.16);
      objs.frame2 = place(sc, "frame", 0.82, 0.42, 0.14);
      return { objs: objs, slots: [0.5, 0.2, 0.8] };
    }
    objs.door = place(sc, "door", Q ? 0.5 : 0.5, F, Q ? 0.5 : 0.56);
    objs.door2 = place(sc, "door", Q ? 0.14 : 0.16, F, Q ? 0.44 : 0.5);
    objs.frame = place(sc, "frame", Q ? 0.8 : 0.78, 0.46, 0.14);
    objs.bulb = place(sc, "bulb", 0.32, 0.32, 0.15);
    objs.plant = place(sc, "plant", Q ? 0.9 : 0.9, F, 0.22);
    return { objs: objs, slots: [0.33, 0.68, 0.14] };
  };
  SETTINGS["front-door"] = function (sc) {
    var P = sc.portrait, Q = sc.square, F = sc.floor / sc.H, objs = {};
    floorLine(sc, sc.mx * 0.5, sc.W - sc.mx * 0.5, sc.floor);
    objs.door = place(sc, "door", P ? 0.5 : Q ? 0.6 : 0.62, F, P ? 0.52 : Q ? 0.52 : 0.6, { peephole: true });
    objs.doormat = place(sc, "doormat", P ? 0.5 : Q ? 0.6 : 0.62, F + 0.02, P ? 0.28 : 0.3);
    objs.window = place(sc, "window", P ? 0.2 : Q ? 0.2 : 0.22, P ? 0.44 : 0.55, P ? 0.24 : 0.28);
    objs.lamp = place(sc, "lamp", P ? 0.85 : Q ? 0.9 : 0.9, F, P ? 0.3 : 0.4);
    return { objs: objs, slots: [P ? 0.3 : Q ? 0.32 : 0.36, P ? 0.72 : 0.78, 0.5] };
  };
  SETTINGS["living-room"] = function (sc) {
    var P = sc.portrait, Q = sc.square, F = sc.floor / sc.H, objs = {};
    floorLine(sc, sc.mx * 0.5, sc.W - sc.mx * 0.5, sc.floor);
    if (P) {
      objs.window = place(sc, "window", 0.3, 0.4, 0.3);
      objs.frame = place(sc, "frame", 0.76, 0.36, 0.13);
      objs.couch = place(sc, "couch", 0.34, F, 0.36);
      objs.tv = place(sc, "tv", 0.78, F, 0.24);
      objs.lamp = place(sc, "lamp", 0.1, F, 0.28);
      return { objs: objs, slots: [0.58, 0.86, 0.14], sitSlot: 0.34 };
    }
    objs.window = place(sc, "window", Q ? 0.26 : 0.24, 0.55, Q ? 0.3 : 0.34);
    objs.couch = place(sc, "couch", Q ? 0.26 : 0.26, F, Q ? 0.4 : 0.42);
    objs.tv = place(sc, "tv", Q ? 0.78 : 0.78, F, Q ? 0.3 : 0.34);
    objs.lamp = place(sc, "lamp", Q ? 0.52 : 0.52, F, Q ? 0.34 : 0.4);
    objs.frame = place(sc, "frame", Q ? 0.78 : 0.78, 0.4, 0.14);
    return { objs: objs, slots: [Q ? 0.62 : 0.62, 0.92, 0.1], sitSlot: 0.26 };
  };
  SETTINGS.kitchen = function (sc) {
    var P = sc.portrait, Q = sc.square, F = sc.floor / sc.H, objs = {};
    floorLine(sc, sc.mx * 0.5, sc.W - sc.mx * 0.5, sc.floor);
    objs.fridge = place(sc, "fridge", P ? 0.16 : Q ? 0.14 : 0.12, F, P ? 0.46 : Q ? 0.52 : 0.58);
    objs.table = place(sc, "table", P ? 0.62 : Q ? 0.62 : 0.6, F, P ? 0.36 : 0.36);
    objs.chair = place(sc, "chair", P ? 0.84 : Q ? 0.84 : 0.8, F, P ? 0.28 : 0.3);
    objs.clock = place(sc, "clock", P ? 0.78 : Q ? 0.8 : 0.8, P ? 0.36 : 0.38, 0.14);
    objs.window = place(sc, "window", P ? 0.44 : Q ? 0.42 : 0.4, P ? 0.42 : 0.52, P ? 0.26 : 0.3);
    objs.cup = place(sc, "cup", P ? 0.6 : Q ? 0.58 : 0.56, F - (P ? 0.21 : 0.22), 0.07);
    return { objs: objs, slots: [P ? 0.42 : Q ? 0.4 : 0.38, 0.9, 0.3], sitSlot: P ? 0.84 : 0.8 };
  };
  SETTINGS.street = function (sc) {
    var P = sc.portrait, Q = sc.square, F = sc.floor / sc.H, objs = {};
    floorLine(sc, 0, sc.W, sc.floor);
    objs.moon = place(sc, "moon", P ? 0.8 : 0.86, P ? 0.24 : 0.3, P ? 0.14 : 0.14);
    objs.house = place(sc, "house", P ? 0.22 : Q ? 0.18 : 0.14, F, P ? 0.36 : Q ? 0.42 : 0.5);
    objs.house2 = place(sc, "house", P ? 0.78 : Q ? 0.84 : 0.88, F, P ? 0.3 : Q ? 0.34 : 0.4);
    objs.lamppost = place(sc, "lamppost", P ? 0.5 : Q ? 0.5 : 0.5, F, P ? 0.5 : Q ? 0.56 : 0.64);
    objs.car = place(sc, "car", P ? 0.3 : Q ? 0.36 : 0.36, F + 0.01, P ? 0.22 : Q ? 0.24 : 0.26);
    objs.tree = place(sc, "tree", P ? 0.9 : Q ? 0.66 : 0.66, F, P ? 0.26 : Q ? 0.3 : 0.36);
    return { objs: objs, slots: [P ? 0.64 : Q ? 0.66 : 0.6, 0.2, 0.84] };
  };
  SETTINGS.car = function (sc) {
    var P = sc.portrait, Q = sc.square, F = sc.floor / sc.H, objs = {};
    floorLine(sc, 0, sc.W, sc.floor);
    objs.moon = place(sc, "moon", P ? 0.22 : 0.16, P ? 0.22 : 0.28, 0.14);
    objs.pine = place(sc, "pine", P ? 0.12 : Q ? 0.1 : 0.08, F, P ? 0.34 : 0.44);
    objs.pine2 = place(sc, "pine", P ? 0.9 : Q ? 0.92 : 0.94, F, P ? 0.3 : 0.36);
    objs.car = place(sc, "car", P ? 0.5 : Q ? 0.48 : 0.5, F + 0.01, P ? 0.5 : Q ? 0.54 : 0.6);
    objs.sign = place(sc, "sign", P ? 0.82 : Q ? 0.84 : 0.84, F, P ? 0.22 : 0.28);
    return { objs: objs, slots: [P ? 0.28 : 0.26, 0.74, 0.5], carSlot: P ? 0.5 : 0.5 };
  };
  SETTINGS.bathroom = function (sc) {
    var P = sc.portrait, Q = sc.square, F = sc.floor / sc.H, objs = {};
    floorLine(sc, sc.mx * 0.5, sc.W - sc.mx * 0.5, sc.floor);
    objs.mirror = place(sc, "mirror", P ? 0.3 : Q ? 0.28 : 0.26, P ? 0.46 : 0.48, P ? 0.26 : 0.3);
    objs.sink = place(sc, "sink", P ? 0.3 : Q ? 0.28 : 0.26, F, P ? 0.26 : 0.3);
    objs.bath = place(sc, "bath", P ? 0.72 : Q ? 0.72 : 0.72, F, P ? 0.36 : Q ? 0.42 : 0.46);
    objs.bulb = place(sc, "bulb", 0.5, 0.3, 0.14);
    objs.door = place(sc, "door", P ? 0.9 : 0.94, F, P ? 0.36 : 0.4);
    return { objs: objs, slots: [P ? 0.52 : 0.5, 0.12, 0.9] };
  };
  SETTINGS.basement = function (sc) {
    var P = sc.portrait, Q = sc.square, F = sc.floor / sc.H, objs = {};
    floorLine(sc, sc.mx * 0.5, sc.W - sc.mx * 0.5, sc.floor);
    objs.stairs = place(sc, "stairs", P ? 0.78 : Q ? 0.8 : 0.82, F, P ? 0.4 : Q ? 0.5 : 0.6, { flip: true });
    objs.bulb = place(sc, "bulb", P ? 0.4 : 0.42, 0.28, 0.15);
    objs.shelf = place(sc, "shelf", P ? 0.2 : Q ? 0.16 : 0.14, 0.52, P ? 0.24 : 0.3);
    objs.box = place(sc, "box", P ? 0.18 : Q ? 0.14 : 0.12, F, P ? 0.16 : 0.2);
    objs.box2 = place(sc, "box", P ? 0.32 : Q ? 0.28 : 0.26, F, P ? 0.12 : 0.15);
    return { objs: objs, slots: [P ? 0.52 : 0.5, 0.3, 0.7] };
  };
  SETTINGS.forest = function (sc) {
    var P = sc.portrait, Q = sc.square, F = sc.floor / sc.H, objs = {};
    floorLine(sc, 0, sc.W, sc.floor);
    objs.moon = place(sc, "moon", P ? 0.76 : 0.8, P ? 0.2 : 0.26, 0.14);
    objs.pine = place(sc, "pine", P ? 0.12 : Q ? 0.1 : 0.08, F, P ? 0.44 : Q ? 0.54 : 0.64);
    objs.pine2 = place(sc, "pine", P ? 0.86 : Q ? 0.88 : 0.9, F, P ? 0.4 : Q ? 0.5 : 0.6);
    objs.pine3 = place(sc, "pine", P ? 0.34 : Q ? 0.3 : 0.28, F, P ? 0.3 : 0.36);
    objs.bush = place(sc, "bush", P ? 0.62 : Q ? 0.62 : 0.6, F, 0.16);
    return { objs: objs, slots: [P ? 0.5 : Q ? 0.5 : 0.48, 0.72, 0.2] };
  };
  SETTINGS["bus-stop"] = function (sc) {
    var P = sc.portrait, Q = sc.square, F = sc.floor / sc.H, objs = {};
    floorLine(sc, 0, sc.W, sc.floor);
    objs.moon = place(sc, "moon", P ? 0.2 : 0.14, P ? 0.22 : 0.26, 0.13);
    objs["bus-stop"] = place(sc, "bus-stop", P ? 0.24 : Q ? 0.22 : 0.24, F, P ? 0.4 : 0.5);
    objs.bench = place(sc, "bench", P ? 0.56 : Q ? 0.52 : 0.5, F, P ? 0.3 : 0.34);
    objs.lamppost = place(sc, "lamppost", P ? 0.86 : Q ? 0.84 : 0.8, F, P ? 0.46 : 0.6);
    objs.bus = place(sc, "bus", 1.3, F + 0.01, P ? 0.36 : 0.44);
    return { objs: objs, slots: [P ? 0.4 : Q ? 0.38 : 0.38, 0.68, 0.14], sitSlot: P ? 0.56 : 0.5 };
  };
  SETTINGS["outside-window"] = function (sc) {
    var P = sc.portrait, Q = sc.square, F = sc.floor / sc.H, objs = {};
    floorLine(sc, 0, sc.W, sc.floor);
    objs.moon = place(sc, "moon", P ? 0.18 : 0.12, P ? 0.2 : 0.24, 0.13);
    objs.house = place(sc, "house", P ? 0.5 : Q ? 0.46 : 0.42, F, P ? 0.6 : Q ? 0.66 : 0.72);
    objs.tree = place(sc, "tree", P ? 0.88 : Q ? 0.86 : 0.84, F, P ? 0.36 : 0.44);
    objs.fence = place(sc, "fence", P ? 0.14 : Q ? 0.1 : 0.1, F, P ? 0.2 : 0.22);
    return { objs: objs, slots: [P ? 0.8 : Q ? 0.76 : 0.72, 0.2, 0.9] };
  };
  SETTINGS.plain = function (sc) {
    floorLine(sc, sc.mx * 0.5, sc.W - sc.mx * 0.5, sc.floor);
    return { objs: {}, slots: [0.5, 0.25, 0.75] };
  };
  SETTINGS.none = function () { return { objs: {}, slots: [0.5, 0.25, 0.75] }; };
  var SETTING_NAMES = Object.keys(SETTINGS);
  S.settings = SETTING_NAMES.slice();
  function settingKey(n) {
    var k = str(n).toLowerCase().trim().replace(/\s+/g, "-");
    if (SETTINGS[k]) return k;
    var alias = { bed: "bedroom", room: "bedroom", hall: "hallway", corridor: "hallway", door: "front-door", entrance: "front-door", porch: "front-door", lounge: "living-room", "living": "living-room", "tv-room": "living-room", road: "street", outside: "street", driveway: "street", drive: "car", highway: "car", bath: "bathroom", toilet: "bathroom", cellar: "basement", attic: "basement", garage: "basement", woods: "forest", trees: "forest", park: "forest", bus: "bus-stop", stop: "bus-stop", window: "outside-window", house: "outside-window", yard: "outside-window", garden: "outside-window", empty: "plain", blank: "plain" };
    return alias[k] || "bedroom";
  }
  S.settingKey = settingKey;

  // ───────────────────────── cast ─────────────────────────
  var CAST = {
    you: { name: "You", kind: "person", about: "the generic viewer stand-in: plain pictogram figure" },
    mom: { name: "Mom", kind: "person", dress: true, bun: true, about: "A-line dress silhouette with a hair bun" },
    dad: { name: "Dad", kind: "person", wide: 1.15, cap: true, about: "broader shoulders and a flat cap" },
    kid: { name: "Kid", kind: "person", scale: 0.62, head: 1.2, about: "small child: big head, short limbs" },
    grandma: { name: "Grandma", kind: "person", dress: true, bun: true, cane: true, lean: 8, about: "dress, bun, a cane and a slight stoop" },
    friend: { name: "Friend", kind: "person", capBack: true, about: "backwards cap" },
    stranger: { name: "Stranger", kind: "person", hat: true, coat: true, wide: 1.1, about: "brimmed hat and long coat, face hidden" },
    visitor: { name: "The Visitor", kind: "person", visitor: true, scale: 1.32, armLen: 1.45, head: 1.08, about: "too tall, too-long arms, white eyes and a too-wide smile; only its eyes show in the dark" },
    dog: { name: "Dog", kind: "dog", about: "pictogram dog: floppy ear, wagging tail" },
    cat: { name: "Cat", kind: "cat", about: "pictogram cat: pointed ears, long tail" },
    owl: { name: "Owl", kind: "owl", about: "round owl with huge white eyes, blinks and turns its head" },
    crow: { name: "Crow", kind: "crow", about: "perched black bird" },
  };
  var CAST_IDS = Object.keys(CAST);
  function castId(n) {
    var k = str(n).toLowerCase().trim();
    if (CAST[k]) return k;
    var alias = { me: "you", viewer: "you", person: "you", man: "dad", father: "dad", woman: "mom", mother: "mom", mum: "mom", child: "kid", boy: "kid", girl: "kid", son: "kid", daughter: "kid", baby: "kid", grandmother: "grandma", granny: "grandma", nan: "grandma", grandpa: "grandma", neighbour: "friend", neighbor: "friend", brother: "friend", sister: "friend", sibling: "friend", roommate: "friend", mailman: "stranger", courier: "stranger", driver: "stranger", "delivery": "stranger", "the-visitor": "visitor", it: "visitor", thing: "visitor", entity: "visitor", ghost: "visitor", intruder: "visitor", "them": "visitor", puppy: "dog", kitten: "cat", bird: "crow", raven: "crow" };
    return alias[k] || "you";
  }
  S.CAST = CAST;

  // ───────────────────────── poses (angles from straight down, + = towards facing) ─────────────────────────
  var POSES = {
    stand: { a: [8, 4], b: [-8, -4], la: [4, 2], lb: [-4, -2], lean: 0, tilt: 0, drop: 0 },
    walk: { a: [8, 4], b: [-8, -4], la: [4, 2], lb: [-4, -2], lean: 3, tilt: 0, drop: 0, gait: 1 },
    run: { a: [40, 110], b: [-40, 30], la: [4, 2], lb: [-4, -2], lean: 16, tilt: 0, drop: 0, gait: 2 },
    point: { a: [88, 92], b: [-8, -4], la: [6, 2], lb: [-6, -2], lean: 3, tilt: 0, drop: 0 },
    "point-up": { a: [150, 172], b: [-8, -4], la: [4, 2], lb: [-4, -2], lean: -2, tilt: -6, drop: 0 },
    "point-down": { a: [48, 30], b: [-8, -4], la: [4, 2], lb: [-4, -2], lean: 6, tilt: 10, drop: 0 },
    "hands-up": { a: [150, 118], b: [-150, -118], la: [10, 4], lb: [-10, -4], lean: -5, tilt: -4, drop: 0, shiver: 1 },
    scared: { a: [60, 150], b: [-60, -150], la: [12, 4], lb: [-12, -4], lean: -8, tilt: -6, drop: 0, shiver: 1 },
    hide: { a: [50, -30], b: [-30, -60], la: [78, -62], lb: [70, -66], lean: 22, tilt: 14, drop: 0.3, shiver: 0.5 },
    crouch: { a: [40, 10], b: [-30, -20], la: [78, -62], lb: [70, -66], lean: 14, tilt: 4, drop: 0.3 },
    sit: { a: [30, 70], b: [-10, -5], la: [90, 0], lb: [86, 2], lean: -4, tilt: 0, drop: 0.2 },
    "sit-floor": { a: [40, 60], b: [20, 40], la: [90, 90], lb: [88, 88], lean: -6, tilt: 2, drop: 0.42 },
    "sit-bed": { a: [34, 60], b: [20, 40], la: [90, 90], lb: [88, 88], lean: -10, tilt: 0, drop: 0.42 },
    lie: { a: [10, 6], b: [-6, -4], la: [2, 0], lb: [-2, 0], lean: 0, tilt: 0, drop: 0, lie: 1 },
    sleep: { a: [10, 6], b: [-6, -4], la: [2, 0], lb: [-2, 0], lean: 0, tilt: 0, drop: 0, lie: 1, breathe: 1 },
    phone: { a: [120, 230], b: [-8, -4], la: [4, 2], lb: [-4, -2], lean: 0, tilt: 6, drop: 0 },
    hush: { a: [100, 262], b: [-8, -4], la: [4, 2], lb: [-4, -2], lean: 0, tilt: 0, drop: 0 },
    "cover-ears": { a: [120, 230], b: [-120, -230], la: [6, 2], lb: [-6, -2], lean: 2, tilt: 8, drop: 0, shiver: 0.6 },
    "cover-eyes": { a: [128, 238], b: [-128, -238], la: [6, 2], lb: [-6, -2], lean: 0, tilt: 2, drop: 0 },
    knock: { a: [70, 150], b: [-8, -4], la: [4, 2], lb: [-4, -2], lean: 4, tilt: 0, drop: 0, knock: 1 },
    flashlight: { a: [82, 86], b: [-8, -4], la: [6, 2], lb: [-6, -2], lean: 4, tilt: 2, drop: 0 },
    stop: { a: [84, 92], b: [-8, -4], la: [8, 2], lb: [-8, -2], lean: -3, tilt: 0, drop: 0, palm: 1 },
    wave: { a: [150, 176], b: [-8, -4], la: [4, 2], lb: [-4, -2], lean: 0, tilt: -3, drop: 0, wave: 1 },
    shrug: { a: [30, 112], b: [-30, -112], la: [4, 2], lb: [-4, -2], lean: 0, tilt: 8, drop: 0 },
    reach: { a: [64, 72], b: [52, 60], la: [8, 2], lb: [-8, -2], lean: 10, tilt: 6, drop: 0 },
    look: { a: [128, 250], b: [-8, -4], la: [4, 2], lb: [-4, -2], lean: 4, tilt: -4, drop: 0 },
    listen: { a: [120, 232], b: [-8, -4], la: [4, 2], lb: [-4, -2], lean: 6, tilt: 12, drop: 0 },
    peek: { a: [30, 60], b: [-10, -6], la: [8, 2], lb: [-8, -2], lean: 18, tilt: 10, drop: 0.08 },
    open: { a: [70, 80], b: [-8, -4], la: [6, 2], lb: [-6, -2], lean: 6, tilt: 0, drop: 0 },
    hold: { a: [50, 110], b: [44, 104], la: [4, 2], lb: [-4, -2], lean: 0, tilt: 4, drop: 0 },
    pray: { a: [40, 130], b: [36, 126], la: [4, 2], lb: [-4, -2], lean: 0, tilt: 10, drop: 0 },
    fall: { a: [100, 140], b: [-70, -110], la: [30, 10], lb: [-20, -30], lean: -60, tilt: -10, drop: 0 },
  };
  var POSE_NAMES = Object.keys(POSES);
  S.POSES = POSES;
  function poseOf(n) { return POSES[str(n).toLowerCase()] || POSES.stand; }
  function blendPose(A, B, p) {
    if (p <= 0) return A;
    if (p >= 1) return B;
    function mix(a, b) { return [lerp(a[0], b[0], p), lerp(a[1], b[1], p)]; }
    return { a: mix(A.a, B.a), b: mix(A.b, B.b), la: mix(A.la, B.la), lb: mix(A.lb, B.lb), lean: lerp(A.lean, B.lean, p), tilt: lerp(A.tilt, B.tilt, p), drop: lerp(A.drop, B.drop, p),
      gait: p < 0.5 ? A.gait : B.gait, lie: lerp(A.lie || 0, B.lie || 0, p), shiver: lerp(A.shiver || 0, B.shiver || 0, p), knock: B.knock, wave: B.wave, palm: p < 0.5 ? A.palm : B.palm, breathe: B.breathe };
  }

  // ───────────────────────── Fig: a rigged pictogram person ─────────────────────────
  /**
   * o: x (feet centre), y (ground), h (height px), facing ("right" | "left" | "front"), pose,
   * at (pop-in), eyes (white eye dots), layer, color.
   */
  function Fig(sc, name, o) {
    o = o || {};
    this.id = castId(name);
    this.cast = CAST[this.id];
    var hh = num(o.h, sc.H * 0.42) * num(this.cast.scale, 1);
    Node.call(this, sc, { x: num(o.x, sc.W / 2), y: num(o.y, sc.floor), s: hh / 100, layer: o.layer || "figs", parent: o.parent, cls: "pg-fig pg-fig-" + this.id, from: o.at != null ? clampT(o.at) : null });
    this.h = hh;
    this.facingSw = new Switch(o.facing === "left" ? "left" : o.facing === "front" ? "front" : "right");
    this.flip = this.facingSw.base === "left";
    this.poseSw = new Switch({ name: str(o.pose || "stand"), dur: 0 });
    this.gaitKeys = [];
    this.shiverKeys = [];
    this.eyeSw = new Switch(!!o.eyes || !!this.cast.visitor);
    this.talkWin = [];
    this.held = null;
    this.color = o.color ? colorOf(o.color) : this.cast.visitor ? "var(--pg-vis)" : "var(--pg-ink)";
    this.build();
    if (o.at != null) this.pop(clampT(o.at));
    sc.figs.push(this);
    var self = this;
    this.onUpdate = function (t, st) { self.rig(t, st); };
  }
  Fig.prototype = Object.create(Node.prototype);
  Fig.prototype.constructor = Fig;
  Fig.prototype.build = function () {
    var c = this.cast, col = this.color;
    var r = this.g;
    this.lieG = g(r); // rotates for lying down
    var body = (this.bodyG = g(this.lieG));
    var st = { fill: "none", stroke: col, "stroke-linecap": "round", "stroke-linejoin": "round" };
    this.armB = svgEl("path", { "stroke-width": 9, fill: "none", stroke: col, "stroke-linecap": "round", "stroke-linejoin": "round" }, body);
    this.legB = svgEl("path", { "stroke-width": 11, fill: "none", stroke: col, "stroke-linecap": "round", "stroke-linejoin": "round" }, body);
    this.torsoG = g(body);
    var wide = num(c.wide, 1);
    var d;
    if (c.dress) d = "M" + -15 * wide + " -74 L" + 15 * wide + " -74 Q" + 17 * wide + " -62 " + 24 * wide + " -30 L" + -24 * wide + " -30 Q" + -17 * wide + " -62 " + -15 * wide + " -74Z";
    else if (c.coat) d = "M" + -16 * wide + " -76 L" + 16 * wide + " -76 Q" + 20 * wide + " -60 " + 19 * wide + " -22 L" + -19 * wide + " -22 Q" + -20 * wide + " -60 " + -16 * wide + " -76Z";
    else if (c.visitor) d = "M-11 -74 L11 -74 Q13 -60 10 -40 L-10 -40 Q-13 -60 -11 -74Z";
    else d = "M" + -15 * wide + " -74 L" + 15 * wide + " -74 Q" + 17 * wide + " -56 " + 13 * wide + " -40 L" + -13 * wide + " -40 Q" + -17 * wide + " -56 " + -15 * wide + " -74Z";
    this.torso = svgEl("path", { d: d, fill: col }, this.torsoG);
    this.legF = svgEl("path", { "stroke-width": 11, fill: "none", stroke: col, "stroke-linecap": "round", "stroke-linejoin": "round" }, body);
    this.armF = svgEl("path", { "stroke-width": 9, fill: "none", stroke: col, "stroke-linecap": "round", "stroke-linejoin": "round" }, body);
    this.palm = svgEl("circle", { r: 7, fill: col, visibility: "hidden" }, body);
    this.headG = g(body);
    var hr = (this.headR = 12 * num(c.head, 1));
    svgEl("circle", { cx: 0, cy: -88, r: hr, fill: col }, this.headG);
    if (c.bun) svgEl("circle", { cx: -hr * 0.85, cy: -88 - hr * 0.55, r: hr * 0.45, fill: col }, this.headG);
    if (c.cap) { svgEl("rect", { x: -hr, y: -88 - hr - 2, width: hr * 2 + 4, height: 6, rx: 2, fill: col }, this.headG); svgEl("rect", { x: hr * 0.4, y: -88 - hr + 1, width: hr * 1.3, height: 5, rx: 2, fill: col }, this.headG); }
    if (c.capBack) { svgEl("rect", { x: -hr, y: -88 - hr - 1, width: hr * 2, height: 6, rx: 2, fill: col }, this.headG); svgEl("rect", { x: -hr * 1.7, y: -88 - hr + 1, width: hr * 1.3, height: 5, rx: 2, fill: col }, this.headG); }
    if (c.hat) { svgEl("rect", { x: -hr * 1.6, y: -88 - hr * 0.5, width: hr * 3.2, height: 5, rx: 2, fill: col }, this.headG); svgEl("rect", { x: -hr * 0.9, y: -88 - hr - 8, width: hr * 1.8, height: hr + 4, rx: 2, fill: col }, this.headG); }
    if (c.cane) this.cane = svgEl("path", { d: "M14 -52 L14 0", "stroke-width": 5, stroke: col, fill: "none", "stroke-linecap": "round" }, body);
    // face: eyes (cut-outs) and the visitor's smile
    this.faceG = g(this.headG, { class: "pg-face" });
    var ec = c.visitor ? "#FFFFFF" : "var(--pg-bg)";
    this.eyeA = svgEl("ellipse", { cx: hr * 0.42, cy: -90, rx: c.visitor ? 2.2 : 2.4, ry: c.visitor ? 3.6 : 3, fill: ec }, this.faceG);
    this.eyeB = svgEl("ellipse", { cx: hr * 0.42 - 7, cy: -90, rx: c.visitor ? 2.2 : 2.4, ry: c.visitor ? 3.6 : 3, fill: ec }, this.faceG);
    if (c.visitor) {
      this.smile = svgEl("path", { d: "M-9 -82 Q" + hr * 0.3 + " -70 " + (hr + 1) + " -84 Q" + hr * 0.4 + " -76 -9 -82Z", fill: "#FFFFFF" }, this.faceG);
      this.eyeA.setAttribute("cx", hr * 0.45);
      this.eyeB.setAttribute("cx", -hr * 0.1);
    }
    this.lastD = {};
    this.lastE = null;
  };
  // schedule ----------------------------------------------------------------
  Fig.prototype.pose = function (name, at, dur) {
    this.poseSw.add({ name: POSES[str(name).toLowerCase()] ? str(name).toLowerCase() : "stand", dur: num(dur, 0.28) }, at == null ? 0 : at);
    return this;
  };
  Fig.prototype.face = function (dir, at) { this.facingSw.add(dir === "left" ? "left" : dir === "front" ? "front" : "right", at == null ? 0 : at); return this; };
  Fig.prototype.eyes = function (on, at) { this.eyeSw.add(!!on, at == null ? 0 : at); return this; };
  /** Walk (or run) to world x over dur; faces the direction of travel. */
  Fig.prototype.walkTo = function (x, at, dur, gait) {
    at = clampT(at == null ? 0 : at);
    var x0 = this.tx.at(at - 0.0001);
    var dist = Math.abs(x - x0);
    var speed = gait === "run" ? this.h * 2.4 : this.h * 1.1;
    dur = num(dur, clamp(dist / speed, 0.5, 4));
    this.face(x < x0 ? "left" : "right", at);
    this.pose(gait === "run" ? "run" : "walk", at, 0.15);
    this.tx.add(x, at, dur, "inOutSine");
    this.gaitKeys.push({ at: at, end: at + dur });
    this.pose("stand", at + dur, 0.2);
    return this;
  };
  Fig.prototype.runTo = function (x, at, dur) { return this.walkTo(x, at, dur, "run"); };
  /** Tremble between [at, at+dur] (amount 0–1). */
  Fig.prototype.tremble = function (at, dur, amt) { this.shiverKeys.push({ at: clampT(at), end: clampT(at) + num(dur, 1.5), amt: num(amt, 1) }); return this; };
  /** Head nods while narration words are spoken inside [t0, t1]. */
  Fig.prototype.talk = function (t0, t1) { this.talkWin.push([num(t0, 0), num(t1, D())]); return this; };
  /** Lie down (in a bed / on the floor): rotate the rig; headDir "left" | "right" = where the head goes. */
  Fig.prototype.lieDown = function (at, headDir) {
    this.pose("lie", at, 0.3);
    this.lieDir = headDir === "right" ? 1 : -1;
    return this;
  };
  Fig.prototype.sleep = function (at, headDir) { this.lieDown(at, headDir); this.pose("sleep", at, 0.3); return this; };
  /** Attach a pictogram to the front hand (flashlight, phone, cup…). Returns the Obj. */
  Fig.prototype.hold = function (name, opts) {
    opts = opts || {};
    var self = this, sc = this.sc;
    var ob = new Obj(sc, name, { x: 0, y: 0, size: num(opts.size, this.h * 0.22), layer: "front", at: opts.at, rot: num(opts.rot, 0), accent: opts.accent });
    ob.follow = function (t) {
      var hnd = self.hand(t);
      var r = num(opts.rot, 0);
      ob.flip = self.facing(t) === "left";
      return { x: hnd.x, y: hnd.y + ob.size * 0.5, rot: r };
    };
    this.held = ob;
    return ob;
  };
  // geometry ------------------------------------------------------------------
  Fig.prototype.facing = function (t) { return this.facingSw.at(t); };
  Fig.prototype.curPose = function (t) {
    var k = this.poseSw.key(t);
    var A = poseOf(k.prev && k.prev.name), B = poseOf(k.v.name);
    var p = k.at < 0 ? 1 : sm((t - k.at) / Math.max(0.0001, k.v.dur));
    return blendPose(A, B, p);
  };
  Fig.prototype.gaitAt = function (t) {
    for (var i = 0; i < this.gaitKeys.length; i++) if (t >= this.gaitKeys[i].at && t <= this.gaitKeys[i].end) return 1;
    return 0;
  };
  Fig.prototype.shiverAt = function (t) {
    var a = 0;
    for (var i = 0; i < this.shiverKeys.length; i++) if (t >= this.shiverKeys[i].at && t <= this.shiverKeys[i].end) a = Math.max(a, this.shiverKeys[i].amt);
    return a;
  };
  Fig.prototype.talking = function (t) {
    for (var i = 0; i < this.talkWin.length; i++) if (t >= this.talkWin[i][0] && t <= this.talkWin[i][1]) return wordAt(t) >= 0;
    return false;
  };
  /** Limb points (rig units, facing right) for a pose at t. */
  Fig.prototype.limbs = function (t, P) {
    var c = this.cast, AL = num(c.armLen, 1);
    var U = 20 * AL, F = 18 * AL, TH = 22, SH = 22;
    var ph = t * 2 * PI * (P.gait === 2 ? 3.2 : 2.1);
    var gait = P.gait ? this.gaitAt(t) || (P.gait === 2 ? 1 : 0) : 0;
    var a = P.a.slice(), b = P.b.slice(), la = P.la.slice(), lb = P.lb.slice(), bob = 0;
    if (gait) {
      var amp = P.gait === 2 ? 46 : 30, s1 = Math.sin(ph), s2 = Math.sin(ph + PI);
      la = [amp * s1, amp * s1 - (P.gait === 2 ? 50 : 24) * Math.max(0, -s1)];
      lb = [amp * s2, amp * s2 - (P.gait === 2 ? 50 : 24) * Math.max(0, -s2)];
      var aa = P.gait === 2 ? 34 : 22;
      a = [-aa * s1 * 0.8 + (P.gait === 2 ? 30 : 6), -aa * s1 * 0.8 + (P.gait === 2 ? 110 : 30)];
      b = [-aa * s2 * 0.8 + (P.gait === 2 ? 30 : 6) - 12, -aa * s2 * 0.8 + (P.gait === 2 ? 110 : 30) - 12];
      bob = -2.2 * Math.abs(Math.sin(ph));
    }
    if (P.knock) { var kn = Math.max(0, Math.sin(t * 2 * PI * 2.6)) * 22; a = [a[0] - kn * 0.4, a[1] + kn]; }
    if (P.wave) { var wv = Math.sin(t * 2 * PI * 2.2) * 18; a = [a[0], a[1] + wv]; }
    var sh = this.shiverAt(t) + (P.shiver || 0);
    var jit = sh ? (hash01(Math.floor(t * 30) * 2.1 + this.seed) - 0.5) * 10 * sh : 0;
    var breathe = P.breathe ? Math.sin(t * 2 * PI * 0.35) * 1.2 : 0;
    var drop = P.drop * 100;
    var hipY = -42 + drop, shY = -70 + drop;
    function arm(ang, sx) {
      var ex = sx + Math.sin(ang[0] * D2R) * U, ey = shY + Math.cos(ang[0] * D2R) * U;
      var hx = ex + Math.sin(ang[1] * D2R) * F, hy = ey + Math.cos(ang[1] * D2R) * F;
      return { s: [sx, shY], e: [ex, ey], h: [hx, hy] };
    }
    function leg(ang, hx) {
      var kx = hx + Math.sin(ang[0] * D2R) * TH, ky = hipY + Math.cos(ang[0] * D2R) * TH;
      var fxx = kx + Math.sin(ang[1] * D2R) * SH, fy = ky + Math.cos(ang[1] * D2R) * SH;
      return { h: [hx, hipY], k: [kx, ky], f: [fxx, Math.min(fy, 0.5)] };
    }
    var wide = num(c.wide, 1);
    return { armF: arm([a[0] + jit, a[1] + jit * 0.6], 11 * wide), armB: arm([b[0] - jit, b[1] - jit * 0.6], -11 * wide), legF: leg(la, 6), legB: leg(lb, -6), bob: bob + breathe, drop: drop, lean: P.lean + jit * 0.3, tilt: P.tilt + jit * 0.5, lie: P.lie || 0, palm: P.palm };
  };
  function pathOf(p) { return "M" + fx(p[0][0]) + " " + fx(p[0][1]) + " L" + fx(p[1][0]) + " " + fx(p[1][1]) + " L" + fx(p[2][0]) + " " + fx(p[2][1]); }
  Fig.prototype.rig = function (t, st) {
    var P = this.curPose(t);
    var L = this.limbs(t, P);
    var dA = pathOf([L.armF.s, L.armF.e, L.armF.h]), dB = pathOf([L.armB.s, L.armB.e, L.armB.h]);
    var dLF = pathOf([L.legF.h, L.legF.k, L.legF.f]), dLB = pathOf([L.legB.h, L.legB.k, L.legB.f]);
    var ld = this.lastD;
    if (ld.a !== dA) { this.armF.setAttribute("d", dA); ld.a = dA; }
    if (ld.b !== dB) { this.armB.setAttribute("d", dB); ld.b = dB; }
    if (ld.lf !== dLF) { this.legF.setAttribute("d", dLF); ld.lf = dLF; }
    if (ld.lb !== dLB) { this.legB.setAttribute("d", dLB); ld.lb = dLB; }
    var nod = this.talking(t) ? Math.sin(t * 2 * PI * 4) * 2 : 0;
    var idle = Math.sin(t * 2 * PI * 0.3 + this.seed) * 0.8;
    var tT = "translate(0 " + fx(L.drop + L.bob) + ") rotate(" + fx(L.lean + idle * 0.5) + " 0 -42)";
    if (ld.t !== tT) { this.torsoG.setAttribute("transform", tT); ld.t = tT; }
    var hT = "translate(0 " + fx(L.drop + L.bob + nod * 0.5) + ") rotate(" + fx(L.tilt + nod + idle) + " 0 -76)";
    if (ld.h !== hT) { this.headG.setAttribute("transform", hT); ld.h = hT; }
    var bT = "translate(0 " + fx(L.bob) + ")";
    if (ld.bb !== bT) { this.bodyG.setAttribute("transform", bT); ld.bb = bT; }
    // lying down: rotate the whole rig around the feet and raise it so the body rests on the ground line
    var lie = L.lie, lT = lie > 0.001 ? "translate(" + fx(-lie * 50 * (this.lieDir || -1)) + " 0) rotate(" + fx(lie * 90 * (this.lieDir || -1)) + " 0 0) translate(0 " + fx(lie * 12) + ")" : "";
    if (ld.l !== lT) { this.lieG.setAttribute("transform", lT); ld.l = lT; }
    if (this.cane) { var cd = "M" + fx(L.armF.h[0]) + " " + fx(L.armF.h[1]) + " L" + fx(L.armF.h[0] + 4) + " 0"; if (ld.c !== cd) { this.cane.setAttribute("d", cd); ld.c = cd; } }
    var palm = L.palm ? "visible" : "hidden";
    if (ld.p !== palm) { this.palm.setAttribute("visibility", palm); ld.p = palm; }
    if (L.palm) { var pT = "translate(" + fx(L.armF.h[0]) + " " + fx(L.armF.h[1]) + ")"; if (ld.pt !== pT) { this.palm.setAttribute("transform", pT); ld.pt = pT; } }
    var eyes = this.eyeSw.at(t);
    var blink = this.cast.visitor ? false : hash01(Math.floor(t * 3) * 1.3 + this.seed) < 0.08;
    var ev = eyes && !blink ? "visible" : "hidden";
    if (ev !== this.lastE) { this.faceG.setAttribute("visibility", ev); this.lastE = ev; }
    if (this.cast.visitor && this.smile) {
      // slow, wrong head tilt and a smile that widens
      var wmul = 1 + 0.18 * (0.5 + 0.5 * Math.sin(t * 2 * PI * 0.17 + this.seed));
      var sT = "translate(0 -80) scale(" + fx(wmul) + " 1) translate(0 80)";
      if (ld.s !== sT) { this.smile.setAttribute("transform", sT); ld.s = sT; }
    }
    this.L = L;
    this.bb = [-30, -100 - (this.cast.hat ? 12 : 4), 30, 0];
  };
  /** World position of the head at t → {x, y, r, top}. */
  Fig.prototype.head = function (t) {
    var st = this.state(t == null ? this.sc.t || 0 : t), s = st.s;
    var P = this.curPose(t == null ? this.sc.t || 0 : t);
    var dy = -88 + P.drop * 100;
    return { x: st.x, y: st.y + dy * s, r: this.headR * s, top: st.y + (dy - this.headR) * s };
  };
  /** World position of the front hand at t. */
  Fig.prototype.hand = function (t) {
    t = t == null ? this.sc.t || 0 : t;
    var st = this.state(t);
    var L = this.limbs(t, this.curPose(t));
    var dir = this.facing(t) === "left" ? -1 : 1;
    return { x: st.x + L.armF.h[0] * st.s * dir, y: st.y + (L.armF.h[1] + L.bob) * st.s };
  };
  Fig.prototype.box = function (t) {
    var st = this.state(t == null ? this.sc.t || 0 : t);
    var P = this.curPose(t == null ? this.sc.t || 0 : t);
    if ((P.lie || 0) > 0.5) return { x: st.x - 100 * st.s * (this.lieDir === 1 ? 0 : 1), y: st.y - 34 * st.s, w: 100 * st.s, h: 34 * st.s, cx: st.x - 50 * st.s * (this.lieDir === 1 ? -1 : 1), cy: st.y - 17 * st.s };
    var top = st.y - (100 - P.drop * 100 + (this.cast.hat ? 12 : 4)) * st.s;
    return { x: st.x - 30 * st.s, y: top, w: 60 * st.s, h: st.y - top, cx: st.x, cy: (st.y + top) / 2 };
  };
  S.Fig = Fig;

  // ───────────────────────── Pet: dog / cat / owl / crow ─────────────────────────
  var PET_POSES = {
    stand: { body: 0, legs: 0, ears: 0, tail: 0, head: 0 },
    walk: { body: 0, legs: 1, ears: 0, tail: 0.3, head: 0, gait: 1 },
    run: { body: -8, legs: 2, ears: 0.6, tail: 0.5, head: 0, gait: 2 },
    sit: { body: -22, legs: 0, ears: 0, tail: -0.3, head: 0, sit: 1 },
    lie: { body: 0, legs: 0, ears: 0.2, tail: -0.5, head: 0, lie: 1 },
    hide: { body: 0, legs: 0, ears: 1, tail: -1, head: 0.5, lie: 1, shiver: 1 },
    alert: { body: -4, legs: 0, ears: -1, tail: 1, head: -0.4, stiff: 1 },
    stare: { body: 0, legs: 0, ears: -0.6, tail: 0, head: -0.2, stiff: 1 },
    sleep: { body: 0, legs: 0, ears: 0.4, tail: -0.5, head: 0.6, lie: 1, sleep: 1 },
    growl: { body: -2, legs: 0, ears: -1, tail: 1, head: 0.5, stiff: 1, growl: 1 },
  };
  function Pet(sc, name, o) {
    o = o || {};
    this.id = castId(name);
    this.cast = CAST[this.id];
    this.kind = this.cast.kind;
    var hh = num(o.h, sc.H * 0.2);
    Node.call(this, sc, { x: num(o.x, sc.W / 2), y: num(o.y, sc.floor), s: hh / 100, layer: o.layer || "figs", parent: o.parent, cls: "pg-fig pg-pet pg-pet-" + this.id, from: o.at != null ? clampT(o.at) : null });
    this.h = hh;
    this.facingSw = new Switch(o.facing === "left" ? "left" : "right");
    this.flip = this.facingSw.base === "left";
    this.poseSw = new Switch({ name: PET_POSES[str(o.pose)] ? str(o.pose) : "stand", dur: 0 });
    this.gaitKeys = [];
    this.eyeSw = new Switch(o.eyes != null ? !!o.eyes : this.kind === "owl");
    this.shiverKeys = [];
    this.color = o.color ? colorOf(o.color) : "var(--pg-ink)";
    this.build();
    if (o.at != null) this.pop(clampT(o.at));
    sc.figs.push(this);
    var self = this;
    this.onUpdate = function (t, st) { self.rig(t, st); };
    this.bb = [-50, -100, 50, 0];
  }
  Pet.prototype = Object.create(Node.prototype);
  Pet.prototype.constructor = Pet;
  Pet.prototype.build = function () {
    var col = this.color, k = this.kind, r = this.g;
    this.lieG = g(r);
    var b = (this.bodyG = g(this.lieG));
    this.parts = {};
    var self = this;
    function legs(xs, w, h, yTop) {
      self.legs = xs.map(function (x) { var lg = g(b); svgEl("rect", { x: x - w / 2, y: yTop, width: w, height: h, rx: w / 2, fill: col }, lg); lg.__x = x; lg.__y = yTop; return lg; });
    }
    if (k === "dog") {
      this.tailG = g(b); svgEl("path", { d: "M-30 -50 Q-44 -60 -42 -74", "stroke-width": 7, stroke: col, fill: "none", "stroke-linecap": "round" }, this.tailG); this.tailG.__p = [-30, -50];
      legs([-24, -12, 8, 20], 9, 34, -34);
      svgEl("rect", { x: -32, y: -60, width: 58, height: 32, rx: 14, fill: col }, b);
      this.headG = g(b);
      svgEl("circle", { cx: 36, cy: -64, r: 16, fill: col }, this.headG);
      svgEl("rect", { x: 42, y: -60, width: 20, height: 11, rx: 5, fill: col }, this.headG);
      svgEl("circle", { cx: 61, cy: -57, r: 3.5, fill: "var(--pg-bg)" }, this.headG);
      this.earG = g(this.headG); svgEl("ellipse", { cx: 28, cy: -64, rx: 6, ry: 13, fill: col }, this.earG); this.earG.__p = [28, -76];
      this.eyeA = svgEl("circle", { cx: 40, cy: -68, r: 3, fill: "var(--pg-bg)" }, this.headG);
      this.headG.__p = [26, -56];
    } else if (k === "cat") {
      this.tailG = g(b); svgEl("path", { d: "M-30 -40 Q-50 -42 -48 -70 Q-47 -80 -40 -80", "stroke-width": 6, stroke: col, fill: "none", "stroke-linecap": "round" }, this.tailG); this.tailG.__p = [-30, -40];
      legs([-22, -12, 10, 20], 7, 28, -28);
      svgEl("rect", { x: -32, y: -50, width: 58, height: 26, rx: 13, fill: col }, b);
      this.headG = g(b);
      svgEl("circle", { cx: 34, cy: -54, r: 14, fill: col }, this.headG);
      this.earG = g(this.headG);
      svgEl("path", { d: "M22 -62 L24 -78 L34 -66Z", fill: col }, this.earG);
      svgEl("path", { d: "M46 -62 L44 -78 L34 -66Z", fill: col }, this.earG);
      this.earG.__p = [34, -64];
      this.eyeA = svgEl("ellipse", { cx: 38, cy: -57, rx: 2.4, ry: 3.4, fill: "var(--pg-bg)" }, this.headG);
      this.eyeB = svgEl("ellipse", { cx: 30, cy: -57, rx: 2.4, ry: 3.4, fill: "var(--pg-bg)" }, this.headG);
      this.headG.__p = [24, -46];
    } else if (k === "owl") {
      svgEl("rect", { x: -34, y: -8, width: 68, height: 8, rx: 4, fill: col }, b); // branch
      this.headG = g(b);
      svgEl("ellipse", { cx: 0, cy: -46, rx: 26, ry: 40, fill: col }, this.headG);
      svgEl("path", { d: "M-24 -74 L-20 -96 L-6 -82Z", fill: col }, this.headG);
      svgEl("path", { d: "M24 -74 L20 -96 L6 -82Z", fill: col }, this.headG);
      svgEl("rect", { x: -14, y: -8, width: 6, height: 8, fill: col }, b);
      svgEl("rect", { x: 8, y: -8, width: 6, height: 8, fill: col }, b);
      this.eyeG = g(this.headG);
      this.eyeA = svgEl("circle", { cx: -10, cy: -66, r: 9, fill: "var(--pg-bg)" }, this.eyeG);
      this.eyeB = svgEl("circle", { cx: 10, cy: -66, r: 9, fill: "var(--pg-bg)" }, this.eyeG);
      this.pupA = svgEl("circle", { cx: -10, cy: -66, r: 4, fill: col }, this.eyeG);
      this.pupB = svgEl("circle", { cx: 10, cy: -66, r: 4, fill: col }, this.eyeG);
      svgEl("path", { d: "M-4 -58 L4 -58 L0 -50Z", fill: "var(--pg-bg)" }, this.headG);
      this.headG.__p = [0, -40];
      this.legs = [];
    } else { // crow
      svgEl("rect", { x: -34, y: -6, width: 68, height: 6, rx: 3, fill: col }, b);
      this.headG = g(b);
      svgEl("ellipse", { cx: -4, cy: -30, rx: 26, ry: 16, fill: col }, b);
      svgEl("path", { d: "M-22 -30 L-48 -22 L-46 -34 L-26 -38Z", fill: col }, b);
      svgEl("circle", { cx: 20, cy: -46, r: 11, fill: col }, this.headG);
      svgEl("path", { d: "M28 -48 L46 -44 L28 -40Z", fill: col }, this.headG);
      this.eyeA = svgEl("circle", { cx: 22, cy: -48, r: 2.4, fill: "var(--pg-bg)" }, this.headG);
      svgEl("rect", { x: -10, y: -16, width: 4, height: 12, fill: col }, b);
      svgEl("rect", { x: 4, y: -16, width: 4, height: 12, fill: col }, b);
      this.headG.__p = [12, -36];
      this.legs = [];
    }
    this.lastD = {};
  };
  Pet.prototype.pose = function (name, at, dur) { this.poseSw.add({ name: PET_POSES[str(name)] ? str(name) : "stand", dur: num(dur, 0.3) }, at == null ? 0 : at); return this; };
  Pet.prototype.face = function (dir, at) { this.facingSw.add(dir === "left" ? "left" : "right", at == null ? 0 : at); return this; };
  Pet.prototype.eyes = function (on, at) { this.eyeSw.add(!!on, at == null ? 0 : at); return this; };
  Pet.prototype.tremble = Fig.prototype.tremble;
  Pet.prototype.shiverAt = Fig.prototype.shiverAt;
  Pet.prototype.facing = function (t) { return this.facingSw.at(t); };
  Pet.prototype.walkTo = function (x, at, dur, gait) {
    at = clampT(at == null ? 0 : at);
    var x0 = this.tx.at(at - 0.0001), dist = Math.abs(x - x0);
    dur = num(dur, clamp(dist / (this.h * (gait === "run" ? 3.5 : 1.6)), 0.4, 4));
    this.face(x < x0 ? "left" : "right", at);
    this.pose(gait === "run" ? "run" : "walk", at, 0.15);
    this.tx.add(x, at, dur, "inOutSine");
    this.gaitKeys.push({ at: at, end: at + dur });
    this.pose("stand", at + dur, 0.2);
    return this;
  };
  Pet.prototype.runTo = function (x, at, dur) { return this.walkTo(x, at, dur, "run"); };
  Pet.prototype.talk = function () { return this; };
  Pet.prototype.curPose = function (t) {
    var k = this.poseSw.key(t);
    var A = PET_POSES[k.prev && k.prev.name] || PET_POSES.stand, B = PET_POSES[k.v.name] || PET_POSES.stand;
    var p = k.at < 0 ? 1 : sm((t - k.at) / Math.max(0.0001, k.v.dur));
    if (p >= 1) return B;
    var o = {};
    for (var key in B) o[key] = typeof B[key] === "number" ? lerp(A[key] || 0, B[key], p) : B[key];
    return o;
  };
  Pet.prototype.rig = function (t) {
    var P = this.curPose(t), ld = this.lastD, k = this.kind;
    var sh = this.shiverAt(t) + (P.shiver || 0);
    var jit = sh ? (hash01(Math.floor(t * 30) * 2.1 + this.seed) - 0.5) * 6 * sh : 0;
    var gaitOn = 0;
    for (var i = 0; i < this.gaitKeys.length; i++) if (t >= this.gaitKeys[i].at && t <= this.gaitKeys[i].end) gaitOn = 1;
    var ph = t * 2 * PI * (P.gait === 2 ? 4 : 2.6), lie = P.lie || 0;
    if (this.legs && this.legs.length) {
      for (i = 0; i < this.legs.length; i++) {
        var lg = this.legs[i], ang = 0;
        if (gaitOn && P.legs) ang = Math.sin(ph + (i % 2 ? PI : 0) + (i < 2 ? 0 : 0.6)) * (P.gait === 2 ? 34 : 22);
        if (P.sit && i < 2) ang = -70 * (P.sit || 0);
        if (lie) ang = (i < 2 ? -80 : 80) * lie;
        var tf = "rotate(" + fx(ang) + " " + lg.__x + " " + lg.__y + ")";
        if (ld["l" + i] !== tf) { lg.setAttribute("transform", tf); ld["l" + i] = tf; }
      }
    }
    var bob = gaitOn ? -2 * Math.abs(Math.sin(ph)) : 0;
    var breathe = P.sleep ? Math.sin(t * 2 * PI * 0.4) * 1.5 : 0;
    var bT = "translate(0 " + fx(bob + lie * 30 + breathe) + ") rotate(" + fx((P.body || 0) * (1 - lie) + jit * 0.3) + " -20 -30)";
    if (ld.b !== bT) { this.bodyG.setAttribute("transform", bT); ld.b = bT; }
    if (this.tailG) {
      var wag = P.stiff ? 0 : Math.sin(t * 2 * PI * (gaitOn ? 3 : 1.4)) * (P.tail > 0 ? 18 : 8);
      var tT = "rotate(" + fx(-P.tail * 40 + wag + jit) + " " + this.tailG.__p[0] + " " + this.tailG.__p[1] + ")";
      if (ld.t !== tT) { this.tailG.setAttribute("transform", tT); ld.t = tT; }
    }
    if (this.earG) {
      var eT = "rotate(" + fx(P.ears * 30 + jit) + " " + this.earG.__p[0] + " " + this.earG.__p[1] + ")";
      if (ld.e !== eT) { this.earG.setAttribute("transform", eT); ld.e = eT; }
    }
    var hp = this.headG.__p;
    var look = k === "owl" ? Math.sin(t * 2 * PI * 0.12 + this.seed) * 10 : 0;
    var growl = P.growl ? (hash01(Math.floor(t * 20) + this.seed) - 0.5) * 4 : 0;
    var hT = "rotate(" + fx(P.head * 30 + jit * 0.6 + growl + look * 0.6) + " " + hp[0] + " " + hp[1] + ")";
    if (ld.h !== hT) { this.headG.setAttribute("transform", hT); ld.h = hT; }
    if (k === "owl") {
      var px = Math.sin(t * 2 * PI * 0.12 + this.seed) * 3;
      setA(this.pupA, "cx", fx(-10 + px)); setA(this.pupB, "cx", fx(10 + px));
      var blink = hash01(Math.floor(t * 2.5) * 1.3 + this.seed) < 0.1;
      setA(this.eyeA, "ry", blink ? 1 : 9); setA(this.eyeB, "ry", blink ? 1 : 9);
      setA(this.eyeA, "r", blink ? 0 : 9); setA(this.eyeB, "r", blink ? 0 : 9);
      setS(this.pupA, "visibility", blink ? "hidden" : "visible"); setS(this.pupB, "visibility", blink ? "hidden" : "visible");
    } else {
      var eyes = this.eyeSw.at(t) && !P.sleep && !(hash01(Math.floor(t * 3) * 1.3 + this.seed) < 0.08);
      setS(this.eyeA, "visibility", eyes ? "visible" : "hidden");
      if (this.eyeB) setS(this.eyeB, "visibility", eyes ? "visible" : "hidden");
    }
    var lT = lie > 0.001 ? "translate(0 " + fx(lie * 0) + ")" : "";
    if (ld.lie !== lT) { this.lieG.setAttribute("transform", lT); ld.lie = lT; }
  };
  Pet.prototype.head = function (t) {
    var st = this.state(t == null ? this.sc.t || 0 : t), hp = this.headG.__p, dir = this.facing(t == null ? this.sc.t || 0 : t) === "left" ? -1 : 1;
    var k = this.kind, hy = k === "dog" ? -64 : k === "cat" ? -54 : k === "owl" ? -66 : -46, hx = k === "dog" ? 36 : k === "cat" ? 34 : k === "owl" ? 0 : 20;
    return { x: st.x + hx * st.s * dir, y: st.y + hy * st.s, r: 14 * st.s, top: st.y + (hy - 16) * st.s };
  };
  Pet.prototype.hand = Pet.prototype.head;
  Pet.prototype.box = function (t) {
    var st = this.state(t == null ? this.sc.t || 0 : t);
    var hgt = this.kind === "owl" ? 96 : this.kind === "crow" ? 58 : 80;
    return { x: st.x - 40 * st.s, y: st.y - hgt * st.s, w: 100 * st.s, h: hgt * st.s, cx: st.x + 10 * st.s, cy: st.y - hgt * st.s / 2 };
  };
  S.Pet = Pet;
  function makeFigure(sc, name, o) { return CAST[castId(name)].kind === "person" ? new Fig(sc, name, o) : new Pet(sc, name, o); }

  // ───────────────────────── screen space helpers ─────────────────────────
  /** World point → screen point at t (through the camera). */
  Scene.prototype.toScreen = function (x, y, t) {
    var c = this.camState(t == null ? this.t || 0 : t);
    return { x: this.W / 2 + (x - c.cx) * c.z, y: this.H / 2 + (y - c.cy) * c.z, z: c.z };
  };
  /** Resolve a target (Node, {x,y,w,h}, {x,y}) to a screen rect at t. */
  Scene.prototype.rectOf = function (target, t) {
    var r;
    if (!target) return null;
    if (target.box && typeof target.box === "function") r = target.box(t);
    else if (target.w != null) r = { x: target.x, y: target.y, w: target.w, h: target.h };
    else r = { x: num(target.x, 0) - u(4), y: num(target.y, 0) - u(4), w: u(8), h: u(8) };
    if (target.screen) return { x: r.x, y: r.y, w: r.w, h: r.h, cx: r.x + r.w / 2, cy: r.y + r.h / 2 };
    var a = this.toScreen(r.x, r.y, t), b = this.toScreen(r.x + r.w, r.y + r.h, t);
    return { x: a.x, y: a.y, w: b.x - a.x, h: b.y - a.y, cx: (a.x + b.x) / 2, cy: (a.y + b.y) / 2 };
  };
  var SIZES = { xl: 150, lg: 112, md: 84, sm: 62, xs: 46 };
  function sizePx(sc, s) {
    var base = SIZES[s] || (typeof s === "number" ? s : SIZES.lg);
    return u(base) * (sc.portrait ? 0.86 : sc.square ? 0.74 : 1);
  }

  // ───────────────────────── stamps (bold condensed headline blocks) ─────────────────────────
  /**
   * sc.stamp(text, at, opts): a headline stamp that slams in at `at`. `*word*` in the text (or
   * opts.key) is the key word: it gets the red block. opts: pos ("top" | "center" | "bottom" |
   * "upper" | "lower"), x, y (0–1 overrides), size ("xl" | "lg" | "md" | "sm" | number), color
   * ("red" | "ink" | "yellow": colour of the whole block; default: ink blocks + red key word),
   * maxWidth (0–1), until, shake (camera shake on landing, default true for lg/xl), rot (deg),
   * kicker (small line above: "RULE 3", "2:00 AM"), align, lines (max, default 3).
   * Returns { el, at, until, box() } — box() is a screen-space rect for arrows.
   */
  Scene.prototype.stamp = function (text, at, opts) {
    opts = opts || {};
    var sc = this, tl = this.tl;
    at = clampT(at == null ? this.take() : at);
    var size = opts.size || "lg";
    var fs = sizePx(sc, size);
    var box = el("div.pg-stamp.pg-stamp-" + (opts.color || "mixed"), { parent: this.ui });
    var mw = num(opts.maxWidth, sc.portrait ? 0.88 : opts.pos === "left" || opts.pos === "right" ? 0.44 : 0.84);
    box.style.width = pct(mw);
    var pos = opts.pos || "center";
    var x = opts.x != null ? num(opts.x, 0.5) : pos === "left" ? 0.27 : pos === "right" ? 0.73 : 0.5;
    var y = opts.y != null ? num(opts.y, 0.5) : pos === "top" ? (sc.portrait ? 0.14 : 0.16) : pos === "upper" ? 0.3 : pos === "bottom" ? (sc.portrait ? 0.86 : 0.84) : pos === "lower" ? 0.7 : 0.5;
    box.style.left = pct(x);
    box.style.top = pct(y);
    box.style.textAlign = opts.align || "center";
    if (opts.kicker) {
      var kick = el("div.pg-kicker", { parent: box });
      kick.appendChild(el("span", { text: plain(opts.kicker) }));
      kick.style.fontSize = fx(fs * 0.36) + "px";
    }
    var main = el("div.pg-stamp-main", { parent: box });
    main.style.fontSize = fs + "px";
    var raw = str(text);
    var key = stampKey(raw, opts.key);
    var keyN = normW(key);
    var toks = raw.replace(/\*/g, "").split(/\s+/).filter(Boolean);
    var hl = null, hit = false;
    toks.forEach(function (w) {
      var sp = el("span.pg-w", { parent: main, text: w.toUpperCase() });
      if (!hit && keyN && normW(w) === keyN) { sp.classList.add("pg-hl"); hl = sp; hit = true; }
      main.appendChild(document.createTextNode(" "));
    });
    fitText(main, { maxLines: num(opts.lines, 3), min: num(opts.min, u(24)) });
    keepInside(sc, box);
    if (opts.rot) box.style.transform = "translate(-50%,-50%) rotate(" + fx(opts.rot) + "deg)";
    var until = opts.until != null ? clampT(opts.until) + 0.2 : 1e9;
    windowed(sc, box, at, until);
    tl.fromTo(box, { opacity: 0 }, { opacity: 1 }, { at: at, dur: 0.03 });
    tl.fromTo(main, { scale: 1.65, rotate: num(opts.tilt, -3) }, { scale: 1, rotate: 0 }, { at: at, dur: 0.17, ease: EASE.slam });
    if (hl) {
      tl.fromTo(hl, { scale: 1.25 }, { scale: 1 }, { at: at + 0.06, dur: 0.16, ease: EASE.slam });
    }
    if (opts.until != null) tl.to(box, { opacity: 0 }, { at: clampT(opts.until), dur: 0.15 });
    if (opts.shake !== false && (size === "xl" || size === "lg")) sc.shake(at, 0.22, u(size === "xl" ? 12 : 8));
    var it = { el: box, at: at, until: until, screen: true, box: function () { var r = box.getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height, cx: r.left + r.width / 2, cy: r.top + r.height / 2 }; } };
    this.cursor = Math.max(this.cursor, at + 0.6);
    return it;
  };
  /** Small plain text (caption / note), no slam: wipes in. opts: pos, x, y, size, color, until, maxWidth, align. */
  Scene.prototype.caption = function (text, at, opts) {
    opts = opts || {};
    var sc = this, tl = this.tl;
    at = clampT(at == null ? this.take() : at);
    var box = el("div.pg-cap" + (opts.color === "red" ? ".pg-cap-red" : opts.color === "yellow" ? ".pg-cap-yel" : ""), { parent: this.ui });
    box.style.width = pct(num(opts.maxWidth, sc.portrait ? 0.86 : 0.7));
    box.style.left = pct(num(opts.x, 0.5));
    box.style.top = pct(opts.y != null ? num(opts.y, 0.9) : opts.pos === "top" ? 0.1 : sc.portrait ? 0.91 : 0.91);
    box.style.textAlign = opts.align || "center";
    var inner = el("div.pg-cap-in", { parent: box });
    inner.style.fontSize = fx(sizePx(sc, opts.size || "sm")) + "px";
    inner.appendChild(S.rich(opts.caps === false ? str(text) : str(text).toUpperCase()));
    fitText(inner, { maxLines: num(opts.lines, 2), min: u(20) });
    keepInside(sc, box);
    windowed(sc, box, at, opts.until != null ? clampT(opts.until) + 0.2 : 1e9);
    tl.fromTo(inner, { clipPath: "inset(0% 100% 0% 0%)", opacity: 1 }, { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }, { at: at, dur: 0.28, ease: "outCubic" });
    if (opts.until != null) tl.to(box, { opacity: 0 }, { at: clampT(opts.until), dur: 0.15 });
    return { el: box, at: at, screen: true, box: function () { var r = box.getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height, cx: r.left + r.width / 2, cy: r.top + r.height / 2 }; } };
  };
  /** Clock time stamp "2:00 AM" in a black box with red digits. opts: pos ("top-left" default, "top-right", "center", x, y), size, until, tick (dur: the colon blinks). */
  Scene.prototype.clockStamp = function (text, at, opts) {
    opts = opts || {};
    var sc = this, tl = this.tl;
    at = clampT(at == null ? 0.2 : at);
    var box = el("div.pg-clock", { parent: this.ui });
    var pos = opts.pos || "top-left";
    var x = opts.x != null ? num(opts.x, 0.5) : /right/.test(pos) ? 1 - (sc.portrait ? 0.08 : 0.07) : /left/.test(pos) ? (sc.portrait ? 0.08 : 0.07) : 0.5;
    var y = opts.y != null ? num(opts.y, 0.5) : /top/.test(pos) ? (sc.portrait ? 0.06 : 0.08) : /bottom/.test(pos) ? 0.9 : 0.5;
    box.style.left = pct(x);
    box.style.top = pct(y);
    box.style.transform = "translate(" + (/right/.test(pos) ? "-100%" : /left/.test(pos) ? "0" : "-50%") + ", -50%)";
    var span = el("span.pg-clock-t", { parent: box });
    span.style.fontSize = fx(sizePx(sc, opts.size || "md")) + "px";
    var colon = null, curText = null;
    function render(s) {
      if (s === curText) return;
      curText = s;
      span.innerHTML = "";
      var parts = str(s).toUpperCase().split(":");
      parts.forEach(function (p, i) { if (i) { colon = el("span.pg-colon", { parent: span, text: ":" }); } span.appendChild(document.createTextNode(p)); });
    }
    render(str(text));
    keepInside(sc, box);
    windowed(sc, box, at, opts.until != null ? clampT(opts.until) + 0.2 : 1e9);
    tl.fromTo(box, { scale: 1.3, opacity: 0 }, { scale: 1, opacity: 1 }, { at: at, dur: 0.14, ease: EASE.slam });
    var self = { el: box, span: span, at: at, screen: true, set: render, box: function () { var r = box.getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height, cx: r.left + r.width / 2, cy: r.top + r.height / 2 }; } };
    if (opts.blink !== false) sc.extras.push(function (t) { if (colon) setS(colon, "opacity", t >= at && Math.floor(t * 2) % 2 ? "0.25" : "1"); });
    return self;
  };
  /** A ticking digital clock from `from` ("1:58 AM") to `to` ("2:00 AM") over [at, at+dur]. */
  Scene.prototype.countdown = function (from, to, at, dur, opts) {
    var c = this.clockStamp(from, at, opts);
    var a = parseTime(from), b = parseTime(to);
    if (a == null || b == null) return c;
    var span = b - a;
    if (span < 0) span += 24 * 60;
    this.extras.push(function (t) {
      var p = clamp((t - at) / Math.max(0.01, dur), 0, 1);
      var mins = a + Math.floor(span * p);
      c.set(formatTime(mins, /am|pm/i.test(from)));
    });
    return c;
  };
  function parseTime(s) {
    var m = /(\d{1,2})\D+(\d{2})\s*(am|pm)?/i.exec(str(s));
    if (!m) return null;
    var h = Number(m[1]) % 12, mi = Number(m[2]);
    if (m[3] && m[3].toLowerCase() === "pm") h += 12;
    return h * 60 + mi;
  }
  function formatTime(mins, ampm) {
    mins = ((mins % 1440) + 1440) % 1440;
    var h = Math.floor(mins / 60), mi = mins % 60;
    if (ampm) { var suf = h >= 12 ? " PM" : " AM"; h = h % 12; if (h === 0) h = 12; return h + ":" + (mi < 10 ? "0" : "") + mi + suf; }
    return (h < 10 ? "0" : "") + h + ":" + (mi < 10 ? "0" : "") + mi;
  }
  S.parseTime = parseTime;
  S.formatTime = formatTime;

  // ───────────────────────── rule cards / badges ─────────────────────────
  /** Inline SVG pictogram inside HTML (rule cards, lists). */
  function iconSvg(parent, name, size, opts) {
    var key = objectKey(name);
    var svg = svgEl("svg", { viewBox: "0 0 100 100", width: size, height: size, class: "pg-icon" }, parent);
    var parts = {};
    if (key) buildShapes(svg, OBJECTS[key](opts || {}), parts, false);
    else if (CAST[castId(name)] && castId(name) !== "you" || /^(you|person|figure)$/.test(str(name))) {
      // a small standing figure pictogram
      var gg = g(svg, { transform: "translate(50 100) scale(0.96)" });
      svgEl("circle", { cx: 0, cy: -88, r: 12, fill: "var(--pg-ink)" }, gg);
      svgEl("path", { d: "M-15 -74 L15 -74 Q17 -56 13 -40 L-13 -40 Q-17 -56 -15 -74Z", fill: "var(--pg-ink)" }, gg);
      svgEl("path", { d: "M-11 -70 L-14 -50 L-12 -32 M11 -70 L14 -50 L12 -32 M-6 -42 L-8 -22 L-9 0 M6 -42 L8 -22 L9 0", "stroke-width": 9, stroke: "var(--pg-ink)", fill: "none", "stroke-linecap": "round", "stroke-linejoin": "round" }, gg);
    }
    return svg;
  }
  S.iconSvg = iconSvg;
  /**
   * Numbered rule card: red "RULE n" tab, the rule text, an optional pictogram icon (object or
   * cast id) with a red circle-slash when `forbidden`. opts: x, y (0–1), size, width (0–1), until,
   * icon, forbidden, label (tab text, default "RULE"), key.
   */
  Scene.prototype.ruleCard = function (n, text, at, opts) {
    opts = opts || {};
    var sc = this, tl = this.tl;
    at = clampT(at == null ? this.take() : at);
    var card = el("div.pg-rule", { parent: this.ui });
    var wf = num(opts.width, sc.portrait ? 0.86 : 0.64);
    card.style.width = pct(wf);
    card.style.left = pct(num(opts.x, 0.5));
    card.style.top = pct(num(opts.y, 0.5));
    var tab = el("div.pg-rule-tab", { parent: card });
    tab.textContent = (opts.label != null ? str(opts.label) : "RULE").toUpperCase() + (n != null && n !== "" ? " " + n : "");
    tab.style.fontSize = fx(sizePx(sc, "sm")) + "px";
    var row = el("div.pg-rule-row", { parent: card });
    var iconBox = null;
    if (opts.icon) {
      iconBox = el("div.pg-rule-icon" + (opts.forbidden ? ".pg-forbidden" : ""), { parent: row });
      var isz = sc.W * wf * (sc.portrait ? 0.3 : 0.24);
      iconBox.style.width = iconBox.style.height = fx(isz) + "px";
      iconSvg(iconBox, opts.icon, isz, { peephole: true });
      if (opts.forbidden) {
        var sl = svgEl("svg", { viewBox: "0 0 100 100", class: "pg-slash", width: isz, height: isz }, iconBox);
        svgEl("circle", { cx: 50, cy: 50, r: 44, fill: "none", stroke: "var(--pg-red)", "stroke-width": 9 }, sl);
        svgEl("line", { x1: 20, y1: 20, x2: 80, y2: 80, stroke: "var(--pg-red)", "stroke-width": 9, "stroke-linecap": "round" }, sl);
      }
    }
    var body = el("div.pg-rule-text", { parent: row });
    body.style.fontSize = fx(sizePx(sc, opts.size || "md")) + "px";
    var key = stampKey(text, opts.key), keyN = normW(key), hit = false, hl = null;
    str(text).replace(/\*/g, "").split(/\s+/).filter(Boolean).forEach(function (w) {
      var sp = el("span.pg-w", { parent: body, text: w.toUpperCase() });
      if (!hit && keyN && normW(w) === keyN) { sp.classList.add("pg-hl"); hl = sp; hit = true; }
      body.appendChild(document.createTextNode(" "));
    });
    fitText(body, { maxLines: num(opts.lines, 4), min: u(22) });
    keepInside(sc, card);
    windowed(sc, card, at, opts.until != null ? clampT(opts.until) + 0.2 : 1e9);
    tl.fromTo(card, { opacity: 0 }, { opacity: 1 }, { at: at, dur: 0.03 });
    tl.fromTo(card, { scale: 1.35, rotate: -2 }, { scale: 1, rotate: 0 }, { at: at, dur: 0.18, ease: EASE.slam });
    tl.fromTo(tab, { x: -u(40), opacity: 0 }, { x: 0, opacity: 1 }, { at: at + 0.1, dur: 0.2, ease: "outCubic" });
    if (hl) { tl.fromTo(hl, { scale: 1.2 }, { scale: 1 }, { at: at + 0.14, dur: 0.16, ease: EASE.slam }); }
    if (iconBox) tl.fromTo(iconBox, { scale: 0.6, opacity: 0 }, { scale: 1, opacity: 1 }, { at: at + 0.12, dur: 0.22, ease: "outBack" });
    if (iconBox && opts.forbidden) { var sls = iconBox.querySelector(".pg-slash"); tl.fromTo(sls, { scale: 1.8, opacity: 0 }, { scale: 1, opacity: 1 }, { at: num(opts.slashAt, at + 0.5), dur: 0.14, ease: EASE.slam }); sc.shake(num(opts.slashAt, at + 0.5), 0.2, u(8)); }
    if (opts.until != null) tl.to(card, { opacity: 0 }, { at: clampT(opts.until), dur: 0.15 });
    sc.shake(at, 0.2, u(8));
    this.cursor = Math.max(this.cursor, at + 0.6);
    return { el: card, at: at, screen: true, box: function () { var r = card.getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height, cx: r.left + r.width / 2, cy: r.top + r.height / 2 }; } };
  };
  /** Number badge (circle) at screen fraction x, y. */
  Scene.prototype.badge = function (n, at, opts) {
    opts = opts || {};
    var sc = this, tl = this.tl;
    at = clampT(at == null ? 0 : at);
    var b = el("div.pg-badge" + (opts.color === "red" ? ".pg-badge-red" : ""), { parent: this.ui, text: str(n) });
    var sz = num(opts.size, u(96));
    b.style.width = b.style.height = sz + "px";
    b.style.fontSize = fx(sz * 0.58) + "px";
    b.style.lineHeight = sz + "px";
    b.style.left = pct(num(opts.x, 0.1));
    b.style.top = pct(num(opts.y, 0.1));
    windowed(sc, b, at, opts.until != null ? clampT(opts.until) + 0.2 : 1e9);
    tl.fromTo(b, { scale: 1.6, opacity: 0 }, { scale: 1, opacity: 1 }, { at: at, dur: 0.16, ease: EASE.slam });
    return { el: b, at: at, screen: true, box: function () { var r = b.getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height, cx: r.left + r.width / 2, cy: r.top + r.height / 2 }; } };
  };

  // ───────────────────────── HUD marks: arrows, rings, triangles, ✓ ✗ ─────────────────────────
  /**
   * Red arrow pointing at a target (Node / world rect / screen item) from a direction. opts: from
   * ("top" | "bottom" | "left" | "right" | "top-left" | …; default: away from the centre), len
   * (px), at, dur, until, color, w (stroke), label (small text at the tail).
   */
  Scene.prototype.arrowTo = function (target, at, opts) {
    opts = opts || {};
    var sc = this;
    at = clampT(at == null ? this.take() : at);
    var until = opts.until != null ? clampT(opts.until) + 0.2 : 1e9;
    var col = colorOf(opts.color || "red");
    var w = num(opts.w, u(16));
    var grp = g(this.hud, { class: "pg-arrow" });
    var line = svgEl("path", { fill: "none", stroke: col, "stroke-width": w, "stroke-linecap": "round", "stroke-linejoin": "round", pathLength: 1 }, grp);
    var head = svgEl("path", { fill: col }, grp);
    var len = num(opts.len, u(170)), dur = num(opts.dur, 0.22);
    var last = {};
    var self = this;
    this.extras.push(function (t) {
      var on = t >= at && t < until;
      setS(grp, "display", on ? "" : "none");
      if (!on) return;
      var r = self.rectOf(target, t);
      if (!r) return;
      var from = opts.from;
      if (!from) { var dx = r.cx - self.W / 2, dy = r.cy - self.H / 2; from = Math.abs(dx) > Math.abs(dy) * (self.portrait ? 0.4 : 1.4) ? (dx > 0 ? "left" : "right") : dy > 0 ? "top" : "bottom"; }
      var ux = /left/.test(from) ? -1 : /right/.test(from) ? 1 : 0, uy = /top/.test(from) ? -1 : /bottom/.test(from) ? 1 : 0;
      var L = Math.sqrt(ux * ux + uy * uy) || 1; ux /= L; uy /= L;
      var pad = num(opts.pad, u(18));
      var tipX = r.cx + ux * (Math.abs(ux) * r.w / 2 + Math.abs(uy) * r.h / 2 + pad), tipY = r.cy + uy * (Math.abs(ux) * r.w / 2 + Math.abs(uy) * r.h / 2 + pad);
      var tailX = tipX + ux * len, tailY = tipY + uy * len;
      var p = clamp((t - at) / dur, 0, 1);
      var hs = w * 2.6;
      var bx = tipX + ux * hs, by = tipY + uy * hs;
      var d = "M" + fx(tailX) + " " + fx(tailY) + " L" + fx(bx) + " " + fx(by);
      if (d !== last.d) { line.setAttribute("d", d); last.d = d; }
      var pq = Math.round(p * 100) / 100;
      if (pq !== last.p) { line.setAttribute("stroke-dasharray", pq >= 1 ? "none" : pq + " 2"); last.p = pq; }
      var hp = clamp((t - at - dur * 0.7) / 0.1, 0, 1);
      var px = -uy, py = ux;
      var hd = hp > 0 ? "M" + fx(tipX) + " " + fx(tipY) + " L" + fx(bx + px * hs * 0.75 * hp) + " " + fx(by + py * hs * 0.75 * hp) + " L" + fx(bx - px * hs * 0.75 * hp) + " " + fx(by - py * hs * 0.75 * hp) + "Z" : "M0 0";
      if (hd !== last.h) { head.setAttribute("d", hd); last.h = hd; }
      if (opts.pulse !== false) { var pu = 1 + 0.06 * Math.sin((t - at) * 2 * PI * 1.5); var tf = "translate(" + fx(tipX) + " " + fx(tipY) + ") scale(" + fx(pu) + ") translate(" + fx(-tipX) + " " + fx(-tipY) + ")"; if (tf !== last.t) { grp.setAttribute("transform", tf); last.t = tf; } }
    });
    if (opts.shake) this.shake(at, 0.15, u(6));
    return { el: grp, at: at };
  };
  /** Red ring around a target (drawn on). opts: at, dur, until, color, w, pad, pulse. */
  Scene.prototype.ring = function (target, at, opts) {
    opts = opts || {};
    var sc = this;
    at = clampT(at == null ? this.take() : at);
    var until = opts.until != null ? clampT(opts.until) + 0.2 : 1e9;
    var grp = g(this.hud, { class: "pg-ring" });
    var e = svgEl("ellipse", { fill: "none", stroke: colorOf(opts.color || "red"), "stroke-width": num(opts.w, u(14)), pathLength: 1, "stroke-linecap": "round" }, grp);
    var dur = num(opts.dur, 0.3), last = {};
    this.extras.push(function (t) {
      var on = t >= at && t < until;
      setS(grp, "display", on ? "" : "none");
      if (!on) return;
      var r = sc.rectOf(target, t);
      if (!r) return;
      var pad = num(opts.pad, u(22));
      var pu = opts.pulse === false ? 1 : 1 + 0.04 * Math.sin((t - at) * 2 * PI * 1.6);
      setA(e, "cx", fx(r.cx)); setA(e, "cy", fx(r.cy));
      setA(e, "rx", fx((r.w / 2 + pad) * 1.1 * pu)); setA(e, "ry", fx((r.h / 2 + pad) * 1.05 * pu));
      var p = Math.round(clamp((t - at) / dur, 0, 1) * 100) / 100;
      if (p !== last.p) { e.setAttribute("stroke-dasharray", p >= 1 ? "none" : p + " 2"); last.p = p; }
      var tf = "rotate(" + fx(-20 * clamp(1 - (Math.abs(r.w - r.h) / Math.max(1, r.w, r.h)) * 2, 0, 1)) + " " + fx(r.cx) + " " + fx(r.cy) + ")";
      if (tf !== last.t) { grp.setAttribute("transform", tf); last.t = tf; }
    });
    return { el: grp, at: at };
  };
  /** Warning triangle (yellow, black border, "!") at screen fraction x, y. opts: size (px), until, color. */
  Scene.prototype.triangle = function (at, opts) {
    opts = opts || {};
    var sc = this, tl = this.tl;
    at = clampT(at == null ? 0.2 : at);
    var size = num(opts.size, u(150));
    var box = el("div.pg-tri", { parent: this.ui });
    box.style.left = pct(num(opts.x, 0.5));
    box.style.top = pct(num(opts.y, 0.5));
    box.style.width = box.style.height = size + "px";
    var svg = svgEl("svg", { viewBox: "0 0 100 100", width: size, height: size }, box);
    var cl = opts.color === "red" ? "var(--pg-red)" : "var(--pg-yel)";
    svgEl("path", { d: "M50 4 L98 92 L2 92Z", fill: "var(--pg-ink)" }, svg);
    svgEl("path", { d: "M50 20 L86 84 L14 84Z", fill: cl }, svg);
    svgEl("rect", { x: 45, y: 40, width: 10, height: 24, rx: 3, fill: "var(--pg-ink)" }, svg);
    svgEl("circle", { cx: 50, cy: 74, r: 6, fill: "var(--pg-ink)" }, svg);
    windowed(sc, box, at, opts.until != null ? clampT(opts.until) + 0.2 : 1e9);
    tl.fromTo(box, { scale: 1.8, opacity: 0, rotate: 8 }, { scale: 1, opacity: 1, rotate: 0 }, { at: at, dur: 0.18, ease: EASE.slam });
    if (opts.blink !== false) sc.extras.push(function (t) { setS(svg, "opacity", t > at + 0.3 && Math.floor((t - at) * 2.5) % 2 ? 0.55 : 1); });
    return { el: box, at: at, screen: true, box: function () { var r = box.getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height, cx: r.left + r.width / 2, cy: r.top + r.height / 2 }; } };
  };
  /** ✓ (ink) or ✗ (red) stamped over a target or at screen fraction x, y. */
  Scene.prototype.mark = function (kind, target, at, opts) {
    opts = opts || {};
    var sc = this;
    at = clampT(at == null ? this.take() : at);
    var until = opts.until != null ? clampT(opts.until) + 0.2 : 1e9;
    var size = num(opts.size, u(190));
    var grp = g(this.hud, { class: "pg-mark" });
    var isX = kind === "x" || kind === "cross" || kind === "no" || kind === "dont";
    var col = colorOf(opts.color || (isX ? "red" : "ink"));
    var sw = size * 0.16;
    var pth = svgEl("path", { d: isX ? "M-1 -1 L1 1 M1 -1 L-1 1" : "M-1 0.05 L-0.35 0.72 L1 -0.72", fill: "none", stroke: col, "stroke-width": sw / size, "stroke-linecap": "round", "stroke-linejoin": "round" }, grp);
    var last = {};
    this.extras.push(function (t) {
      var on = t >= at && t < until;
      setS(grp, "display", on ? "" : "none");
      if (!on) return;
      var cx, cy;
      if (target && (target.box || target.w != null)) { var r = sc.rectOf(target, t); cx = r.cx + num(opts.dx, 0); cy = r.cy + num(opts.dy, 0); }
      else { cx = sc.W * num(opts.x, 0.5); cy = sc.H * num(opts.y, 0.5); }
      var p = EASE.slam(clamp((t - at) / 0.16, 0, 1));
      var s = size * 0.5 * (1.9 - 0.9 * p);
      var tf = "translate(" + fx(cx) + " " + fx(cy) + ") scale(" + fx(s) + ") rotate(" + fx(isX ? -6 : 0) + ")";
      if (tf !== last.t) { grp.setAttribute("transform", tf); last.t = tf; }
      setA(grp, "opacity", p > 0 ? 1 : 0);
    });
    this.shake(at, 0.2, u(isX ? 10 : 5));
    if (isX) this.flashFrame(at, 0.06, "red");
    return { el: grp, at: at };
  };
  /** Vertical (or horizontal in portrait) divider line for split layouts. */
  Scene.prototype.divider = function (at, opts) {
    opts = opts || {};
    var sc = this;
    at = clampT(at == null ? 0 : at);
    var horiz = opts.horizontal != null ? !!opts.horizontal : sc.portrait;
    var pos = num(opts.pos, 0.5);
    var r = svgEl("rect", horiz ? { x: sc.mx, y: sc.H * pos - u(4), width: sc.W - sc.mx * 2, height: u(8), fill: colorOf(opts.color || "ink") } : { x: sc.W * pos - u(4), y: sc.my, width: u(8), height: sc.H - sc.my * 2, fill: colorOf(opts.color || "ink") }, this.hud);
    this.extras.push(function (t) {
      var p = clamp((t - at) / 0.3, 0, 1);
      setS(r, "display", p > 0 ? "" : "none");
      setA(r, horiz ? "width" : "height", fx((horiz ? sc.W - sc.mx * 2 : sc.H - sc.my * 2) * p));
    });
    return r;
  };

  // ───────────────────────── flashlight cone (dark rooms) ─────────────────────────
  /**
   * Everything in the back/mid/figs layers is hidden except inside a cone from `fig`'s hand (or
   * from {x, y}); `ambient` (0–1) leaks a little of the room. The cone's direction is a track:
   * cone.aim(angleDeg, at, dur) (0 = right, -90 = up, +90 = down; mirrored when the figure faces left).
   * Put things that must stay visible in the dark (eyes) in the "glow" or "front" layer.
   */
  Scene.prototype.cone = function (fig, opts) {
    opts = opts || {};
    var sc = this;
    var id = this.uid("cone");
    var mask = svgEl("mask", { id: id, maskUnits: "userSpaceOnUse", x: -sc.W * 4, y: -sc.H * 4, width: sc.W * 9, height: sc.H * 9 }, this.defs);
    var amb = clamp(num(opts.ambient, 0.1), 0, 1);
    var ag = Math.round(amb * 255);
    svgEl("rect", { x: -sc.W * 4, y: -sc.H * 4, width: sc.W * 9, height: sc.H * 9, fill: "rgb(" + ag + "," + ag + "," + ag + ")" }, mask);
    var poly = svgEl("path", { fill: "#fff" }, mask);
    var soft = svgEl("path", { fill: "#fff", opacity: 0.45 }, mask);
    ["back", "mid", "figs"].forEach(function (k) { sc.layers[k].setAttribute("mask", "url(#" + id + ")"); });
    var from = opts.at != null ? clampT(opts.at) : 0, until = opts.until != null ? clampT(opts.until) : 1e9;
    var angle = new Track(num(opts.angle, -8)), spread = num(opts.spread, 24), reach = num(opts.reach, Math.max(sc.W, sc.H) * 1.6);
    var last = {};
    var beam = svgEl("path", { fill: "var(--pg-yel)", opacity: 0.1, class: "pg-beam" }, this.layers.front);
    this.extras.push(function (t) {
      var on = t >= from && t < until;
      if (!on) {
        var d0 = "M-99999 -99999 L-99998 -99999 L-99998 -99998Z";
        // full room visible when the cone is off: mask all-white
        if (last.off !== true) { poly.setAttribute("d", "M" + -sc.W * 4 + " " + -sc.H * 4 + " h" + sc.W * 9 + " v" + sc.H * 9 + " h" + -sc.W * 9 + "Z"); soft.setAttribute("d", d0); beam.setAttribute("d", d0); last.off = true; last.d = null; }
        return;
      }
      last.off = false;
      var o = fig && fig.hand ? fig.hand(t) : { x: num(fig && fig.x, sc.W / 2), y: num(fig && fig.y, sc.H / 2) };
      var dir = fig && fig.facing && fig.facing(t) === "left" ? -1 : 1;
      var a = angle.at(t) * D2R, flick = opts.flicker ? (hash01(Math.floor(t * 24) + 3) < 0.08 ? 0.2 : 1) : 1;
      var a0 = a - spread * D2R / 2, a1 = a + spread * D2R / 2;
      var ox = o.x + Math.cos(a) * dir * u(10), oy = o.y + Math.sin(a) * u(10);
      var R = reach * flick;
      var d = "M" + fx(ox) + " " + fx(oy) + " L" + fx(ox + Math.cos(a0) * dir * R) + " " + fx(oy + Math.sin(a0) * R) + " L" + fx(ox + Math.cos(a1) * dir * R) + " " + fx(oy + Math.sin(a1) * R) + "Z";
      var s0 = a - spread * D2R * 0.75, s1 = a + spread * D2R * 0.75;
      var ds = "M" + fx(ox) + " " + fx(oy) + " L" + fx(ox + Math.cos(s0) * dir * R) + " " + fx(oy + Math.sin(s0) * R) + " L" + fx(ox + Math.cos(s1) * dir * R) + " " + fx(oy + Math.sin(s1) * R) + "Z";
      if (d !== last.d) { poly.setAttribute("d", d); soft.setAttribute("d", ds); beam.setAttribute("d", d); last.d = d; }
    });
    return { mask: mask, aim: function (deg, at, dur, ease) { angle.add(num(deg, 0), at, num(dur, 0.8), ease || "inOutSine"); return this; }, sweep: function (a0, a1, at, dur) { angle.add(a0, Math.max(0, at - 0.001), 0.0001, "hard"); angle.add(a1, at, dur, "inOutSine"); return this; } };
  };

  // ───────────────────────── stinger (hard cut to the visitor) ─────────────────────────
  /**
   * Hard cut to black with the visitor's face filling the frame, a red flash frame, camera shake
   * and an optional stamp. opts: until (default: end), stamp, key, pos ("face" | "full" | "door"),
   * flash (bool), hold (sec; then cuts back), size.
   */
  Scene.prototype.stinger = function (at, opts) {
    opts = opts || {};
    var sc = this;
    at = clampT(at == null ? this.take() : at);
    var until = opts.hold != null ? clampT(at + opts.hold) : opts.until != null ? clampT(opts.until) : 1e9;
    var grp = g(this.hud, { class: "pg-stinger" });
    svgEl("rect", { x: -sc.W, y: -sc.H, width: sc.W * 3, height: sc.H * 3, fill: "#000" }, grp);
    var pos = opts.pos || "face";
    var hh = pos === "full" ? sc.H * (sc.portrait ? 0.7 : 0.9) : sc.H * (sc.portrait ? 2.2 : 2.6);
    grp.style.setProperty("--pg-vis", "#1c1c1c");
    var fig = new Fig(sc, "visitor", { x: sc.W / 2, y: pos === "full" ? sc.H * 0.92 : sc.H * 0.42 + hh * 0.88, h: hh / 1.32, facing: "front", pose: pos === "full" ? "reach" : "stand", parent: grp, layer: "hud" });
    fig.g.classList.add("pg-visitor-dark");
    var seed = this.nextSeed();
    var last = {};
    this.extras.push(function (t) {
      var on = t >= at && t < until;
      setS(grp, "display", on ? "" : "none");
      if (!on) return;
      var fr = Math.floor(t * 30), p = clamp((t - at) / 0.5, 0, 1);
      var amp = u(16) * (1 - p) + u(2);
      var sx = (hash01(fr * 3.7 + seed) - 0.5) * 2 * amp, sy = (hash01(fr * 5.1 + seed + 9) - 0.5) * 2 * amp;
      var z = 1 + 0.08 * (1 - EASE.snap(p)) + 0.03 * clamp((t - at) / 3, 0, 1);
      var tf = "translate(" + fx(sc.W / 2 + sx) + " " + fx(sc.H / 2 + sy) + ") scale(" + fx(z) + ") translate(" + fx(-sc.W / 2) + " " + fx(-sc.H / 2) + ")";
      if (tf !== last.t) { grp.setAttribute("transform", tf); last.t = tf; }
    });
    if (opts.flash !== false) this.flashFrame(at, 0.08, "red");
    this.flicker(at + 0.1, 0.5, 0.3);
    if (opts.stamp) this.stamp(opts.stamp, at + num(opts.stampDelay, 0.5), { pos: opts.stampPos || (sc.portrait ? "bottom" : "bottom"), size: opts.size || "xl", color: "red", key: opts.key, until: until < 1e8 ? until : null });
    return { el: grp, fig: fig, at: at, until: until };
  };

  // ───────────────────────── phone UI ─────────────────────────
  /**
   * A big pictogram phone with a fake screen. opts: x, y (0–1 of frame: centre), h (px height),
   * kind ("call" | "message"), from ("UNKNOWN"), at, ring (bool: vibrate), messages
   * [{text, at, me}] shown one by one, label (small text on the screen: "INCOMING CALL").
   */
  Scene.prototype.phoneUI = function (opts) {
    opts = opts || {};
    var sc = this, tl = this.tl;
    var at = clampT(num(opts.at, 0.2));
    var h = num(opts.h, sc.portrait ? sc.H * 0.5 : sc.H * 0.76), w = h * 0.5;
    var box = el("div.pg-phone", { parent: this.ui });
    box.style.width = w + "px";
    box.style.height = h + "px";
    box.style.left = pct(num(opts.x, 0.5));
    box.style.top = pct(num(opts.y, 0.5));
    var scr = el("div.pg-phone-screen", { parent: box });
    var kind = opts.kind === "message" ? "message" : "call";
    var fsz = h * 0.055;
    var top = el("div.pg-phone-top", { parent: scr, text: str(opts.time || "2:00 AM") });
    top.style.fontSize = fx(fsz * 0.9) + "px";
    var out = { el: box, at: at, screen: true, box: function () { var r = box.getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height, cx: r.left + r.width / 2, cy: r.top + r.height / 2 }; } };
    if (kind === "call") {
      var lab = el("div.pg-phone-label", { parent: scr, text: str(opts.label || "INCOMING CALL") });
      lab.style.fontSize = fx(fsz * 0.95) + "px";
      var who = el("div.pg-phone-who", { parent: scr, text: str(opts.from || "UNKNOWN").toUpperCase() });
      who.style.fontSize = fx(fsz * 2.1) + "px";
      fitText(who, { maxLines: 2, min: fsz });
      var av = el("div.pg-phone-avatar", { parent: scr });
      av.style.width = av.style.height = fx(h * 0.2) + "px";
      iconSvg(av, opts.avatar || "you", h * 0.2);
      var btns = el("div.pg-phone-btns", { parent: scr });
      var dec = el("div.pg-phone-btn.pg-phone-decline", { parent: btns }); dec.style.width = dec.style.height = fx(h * 0.11) + "px";
      var acc = el("div.pg-phone-btn.pg-phone-accept", { parent: btns }); acc.style.width = acc.style.height = fx(h * 0.11) + "px";
      var dsvg = svgEl("svg", { viewBox: "0 0 100 100" }, dec);
      svgEl("path", { d: "M14 60 Q50 90 86 60 L78 44 Q50 60 22 44Z", fill: "#fff" }, dsvg);
      var asvg = svgEl("svg", { viewBox: "0 0 100 100" }, acc);
      svgEl("path", { d: "M14 60 Q50 90 86 60 L78 44 Q50 60 22 44Z", fill: "#fff", transform: "rotate(-135 50 50)" }, asvg);
      out.who = who;
      var ringAt = opts.ringAt != null ? clampT(opts.ringAt) : at;
      if (opts.ring !== false) sc.extras.push(function (t) {
        var on = t >= ringAt && t < (opts.ringUntil != null ? opts.ringUntil : 1e9);
        var fr = Math.floor(t * 30);
        var v = on && Math.floor((t - ringAt) * 1.6) % 2 === 0 ? (hash01(fr * 1.7) - 0.5) * u(8) : 0;
        setS(scr, "transform", v ? "translate(" + fx(v) + "px, 0)" : "");
      });
      windowed(sc, lab, ringAt, 1e9);
      windowed(sc, who, ringAt, 1e9);
      windowed(sc, btns, ringAt, 1e9);
      windowed(sc, av, ringAt, 1e9);
      tl.fromTo(who, { scale: 1.3 }, { scale: 1 }, { at: ringAt, dur: 0.2, ease: EASE.slam });
    } else {
      var list = el("div.pg-phone-msgs", { parent: scr });
      var hdr = el("div.pg-phone-label", { parent: scr, text: str(opts.from || "UNKNOWN").toUpperCase() });
      hdr.style.fontSize = fx(fsz * 1.1) + "px";
      scr.insertBefore(hdr, list);
      out.msgs = [];
      arr(opts.messages).slice(0, 6).forEach(function (m, i) {
        var mt = m.at != null ? clampT(m.at) : at + 0.6 + i * 0.9;
        var b = el("div.pg-msg" + (m.me ? ".pg-msg-me" : ""), { parent: list, text: str(m.text) });
        b.style.fontSize = fx(fsz * 1.05) + "px";
        windowed(sc, b, mt, 1e9);
        tl.fromTo(b, { scale: 0.6, opacity: 0, y: u(20) }, { scale: 1, opacity: 1, y: 0 }, { at: mt, dur: 0.22, ease: "outBack" });
        sc.shake(mt, 0.12, u(4));
        out.msgs.push({ el: b, at: mt });
      });
    }
    windowed(sc, box, at, opts.until != null ? clampT(opts.until) + 0.2 : 1e9);
    tl.fromTo(box, { scale: 1.2, opacity: 0 }, { scale: 1, opacity: 1 }, { at: at, dur: 0.2, ease: EASE.slam });
    return out;
  };

  // ───────────────────────── checklist ─────────────────────────
  /**
   * Numbered protocol list. items: [{text, icon, at, key, done}] — each line slams in at its time,
   * and the box gets a check (or a red ✗ when done === false) `checkDelay` later. opts: x, y, width
   * (0–1), title, size, checkDelay.
   */
  Scene.prototype.checklist = function (items, opts) {
    opts = opts || {};
    var sc = this, tl = this.tl;
    var box = el("div.pg-list", { parent: this.ui });
    box.style.width = pct(num(opts.width, sc.portrait ? 0.86 : 0.6));
    box.style.left = pct(num(opts.x, 0.5));
    box.style.top = pct(num(opts.y, 0.5));
    var fs = sizePx(sc, opts.size || (items.length > 4 ? "sm" : "md"));
    if (opts.title) { var ttl = el("div.pg-list-title", { parent: box, text: str(opts.title).toUpperCase() }); ttl.style.fontSize = fx(fs * 0.8) + "px"; fitText(ttl, { maxLines: 1, min: u(20) }); windowed(sc, ttl, num(opts.at, 0.2), 1e9); tl.fromTo(ttl, { x: -u(30), opacity: 0 }, { x: 0, opacity: 1 }, { at: num(opts.at, 0.2), dur: 0.2 }); }
    var rows = [];
    items.forEach(function (it, i) {
      var row = el("div.pg-list-row", { parent: box });
      var n = el("div.pg-list-n", { parent: row, text: String(i + 1) });
      n.style.fontSize = fx(fs * 0.9) + "px";
      n.style.width = n.style.height = fx(fs * 1.35) + "px";
      n.style.lineHeight = fx(fs * 1.35) + "px";
      if (it.icon) { var ic = el("div.pg-list-icon", { parent: row }); ic.style.width = ic.style.height = fx(fs * 1.5) + "px"; iconSvg(ic, it.icon, fs * 1.5); }
      var tx = el("div.pg-list-text", { parent: row });
      tx.style.fontSize = fs + "px";
      var key = stampKey(it.text, it.key), keyN = normW(key), hit = false;
      str(it.text).replace(/\*/g, "").split(/\s+/).filter(Boolean).forEach(function (w) {
        var sp = el("span.pg-w", { parent: tx, text: w.toUpperCase() });
        if (!hit && keyN && normW(w) === keyN) { sp.classList.add("pg-hl"); hit = true; }
        tx.appendChild(document.createTextNode(" "));
      });
      fitText(tx, { maxLines: 2, min: u(20) });
      var chk = el("div.pg-list-chk" + (it.done === false ? ".pg-list-x" : ""), { parent: row });
      chk.style.width = chk.style.height = fx(fs * 1.35) + "px";
      var csvg = svgEl("svg", { viewBox: "0 0 100 100" }, chk);
      if (it.done === false) svgEl("path", { d: "M22 22 L78 78 M78 22 L22 78", stroke: "var(--pg-red)", "stroke-width": 16, "stroke-linecap": "round", fill: "none" }, csvg);
      else svgEl("path", { d: "M16 54 L40 76 L86 24", stroke: "var(--pg-ink)", "stroke-width": 16, "stroke-linecap": "round", "stroke-linejoin": "round", fill: "none" }, csvg);
      var at = clampT(num(it.at, 0.4 + i * 0.8));
      var cAt = clampT(num(it.checkAt, at + num(opts.checkDelay, 0.9)));
      windowed(sc, row, at, 1e9);
      windowed(sc, csvg, cAt, 1e9);
      tl.fromTo(row, { x: -u(40), opacity: 0 }, { x: 0, opacity: 1 }, { at: at, dur: 0.16, ease: "outCubic" });
      tl.fromTo(csvg, { scale: 1.8, opacity: 0 }, { scale: 1, opacity: 1 }, { at: cAt, dur: 0.14, ease: EASE.slam });
      sc.shake(cAt, 0.12, u(4));
      rows.push({ el: row, at: at, checkAt: cAt, screen: true, box: function () { var r = row.getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height, cx: r.left + r.width / 2, cy: r.top + r.height / 2 }; } });
    });
    keepInside(sc, box);
    return { el: box, rows: rows };
  };

  // ───────────────────────── labels (callouts) ─────────────────────────
  /** Small stamp text + red arrow to a target. opts: x, y (0–1), size, from, until, color. */
  Scene.prototype.label = function (text, target, at, opts) {
    opts = opts || {};
    at = clampT(at == null ? this.take() : at);
    var st = this.stamp(text, at, { x: num(opts.x, 0.5), y: num(opts.y, 0.2), size: opts.size || "sm", maxWidth: num(opts.maxWidth, this.portrait ? 0.4 : this.square ? 0.34 : 0.26), lines: 2, min: u(16), shake: false, until: opts.until, color: opts.color, key: opts.key, tilt: 0 });
    this.arrowTo(target, at + 0.08, { from: opts.from, len: num(opts.len, u(120)), until: opts.until, w: num(opts.w, u(12)), pad: u(12) });
    return st;
  };

  // ───────────────────────── template helpers ─────────────────────────
  var T = {};
  function ensureScene(root, opts) { return current || new Scene(root || V.root(), opts); }
  function sceneFor() { return current || new Scene(V.root()); }
  function figH(sc) { return sc.portrait ? Math.min(sc.W, sc.H) * 0.4 : sc.square ? sc.H * 0.38 : sc.H * 0.44; }
  function petH(sc) { return figH(sc) * 0.5; }
  /** Place the listed characters on the setting's slots. chars: [{id, pose, facing, slot, x}] */
  function placeCast(sc, set, chars, at) {
    var out = [], used = 0;
    arr(chars).slice(0, 3).forEach(function (c, i) {
      if (!c) return;
      if (typeof c === "string") c = { id: c };
      var id = castId(c.id || c.character || "you");
      var kind = CAST[id].kind;
      var slot = c.slot != null ? num(c.slot, 0) : used;
      used = slot + 1;
      var nx = c.x != null ? num(c.x, 0.5) : set.slots[slot % set.slots.length];
      var hh = kind === "person" ? figH(sc) : petH(sc);
      if (id === "visitor") hh = figH(sc);
      var f = makeFigure(sc, id, { x: sc.W * nx, y: sc.floor, h: hh, facing: c.facing || (nx > 0.5 ? "left" : "right"), pose: c.pose || "stand", at: at == null ? 0.2 + i * 0.12 : at, eyes: c.eyes });
      if (c.pose === "lie" || c.pose === "sleep") f.lieDown && f.lieDown(0, nx > 0.5 ? "right" : "left");
      f.talk && f.talk(0, D());
      out.push(f);
    });
    return out;
  }
  /** Something happens in the room at time t. Returns the focus Obj/Fig (for arrows) or null. */
  function doAction(sc, set, figs, action, t, extra) {
    var o = set.objs, you = figs[0], a = str(action || "none").toLowerCase();
    var P = sc.portrait, W = sc.W;
    function reactAll(pose, dir) { figs.forEach(function (f) { if (f instanceof Fig) { f.pose(pose, t + 0.1); if (dir) f.face(dir, t + 0.05); } else { f.pose("alert", t + 0.05); } }); }
    function towards(ob) { return ob && you ? (ob.x > you.tx.at(t) ? "right" : "left") : null; }
    if (a === "door-opens" && o.door) { o.door.open(t, extra && extra.deg != null ? extra.deg : 55, 1.6); reactAll("look", towards(o.door)); sc.flicker(t + 0.9, 0.3, 0.3); return o.door; }
    if (a === "door-slams" && o.door) { o.door.open(t - 1.2, 60, 1.1); o.door.close(t, 0.08); sc.shake(t, 0.3, u(14)); reactAll("scared", towards(o.door)); return o.door; }
    if (a === "knock" && o.door) { sc.shake(t, 0.12, u(6)); sc.shake(t + 0.28, 0.12, u(6)); sc.shake(t + 0.56, 0.12, u(6)); reactAll("look", towards(o.door)); var kn = new Node(sc, { layer: "front" }); var b = o.door.box(0); var tx = svgEl("text", { x: b.cx, y: b.y + b.h * 0.42, "text-anchor": "middle", "font-size": u(64), fill: "var(--pg-red)", class: "pg-svgtext" }, kn.g); tx.textContent = "KNOCK KNOCK"; kn.hide(0).show(t); kn.shiver = function (tt) { return tt < t + 1.2 ? u(6) : 0; }; kn.fade(1, t, 0.0001).fade(0, t + 1.6, 0.2); kn.bb = [b.x, b.y, b.x + b.w, b.y + b.h]; return o.door; }
    if (a === "lights-flicker") { sc.flicker(t, 1.1, 0.45); reactAll("look"); return null; }
    if (a === "lights-out") { sc.flicker(t, 0.4, 0.5); sc.lightsOut(t + 0.4); reactAll("scared"); return null; }
    if (a === "phone-rings") { var ph = you && you.hold ? you.hold("phone", { at: t, size: figH(sc) * 0.2 }) : null; if (you && you.pose) you.pose("hold", t); if (ph) { ph.shiver = function (tt) { return tt > t && tt < t + 2.4 && Math.floor((tt - t) * 1.6) % 2 === 0 ? u(6) : 0; }; } return ph; }
    if (a === "curtains-close" && o.window) { o.window.curtains(1, t, 0.5); reactAll("reach", towards(o.window)); return o.window; }
    if (a === "curtains-open" && o.window) { o.window.curtains(1, 0, 0.0001); o.window.curtains(0, t, 0.5); reactAll("look", towards(o.window)); return o.window; }
    if (a === "visitor-appears" || a === "visitor-at-door" || a === "visitor-at-window" || a === "eyes-in-the-dark") {
      var at = a === "visitor-at-window" && o.window ? o.window : o.door || o.window || null;
      var hx = at ? at.x : W * (P ? 0.84 : 0.9), hy = sc.floor;
      var vis = new Fig(sc, "visitor", { x: hx + (at && at.name === "window" ? 0 : (hx > W / 2 ? 1 : -1) * u(-20)), y: at && at.name === "window" ? at.y + at.size * 0.1 : hy, h: figH(sc) * (at && at.name === "window" ? 0.7 : 1), facing: hx > W / 2 ? "left" : "right", pose: "stand", layer: a === "eyes-in-the-dark" ? "glow" : at && at.name === "door" ? "mid" : "back", color: a === "eyes-in-the-dark" ? "transparent" : null });
      vis.hide(0).show(t);
      if (a === "eyes-in-the-dark") vis.g.classList.add("pg-eyes-only");
      if (at && at.name === "door") { at.open(t - 0.9, 70, 1.4); at.g.parentNode.appendChild(at.g); }
      sc.flashFrame(t, 0.06, "red");
      sc.shake(t, 0.25, u(10));
      reactAll("scared", hx > W / 2 ? "right" : "left");
      figs.forEach(function (f) { if (f.tremble) f.tremble(t, 3, 0.8); });
      return vis;
    }
    if (a === "dog-hides" || a === "pet-hides") { var pet = null; figs.forEach(function (f) { if (f instanceof Pet) pet = f; }); if (!pet) pet = new Pet(sc, "dog", { x: W * set.slots[1 % set.slots.length], y: sc.floor, h: petH(sc), at: Math.max(0, t - 1.5), facing: "left" }); if (o.bed) { pet.walkTo(o.bed.x + o.bed.size * 0.05, t - 0.6, 0.6, "run"); pet.pose("hide", t + 0.1); pet.ts.add(Math.min(pet.s, (o.bed.size * 0.12) / 30), t, 0.3); sc.layers.back.appendChild(pet.g); } else pet.pose("hide", t); pet.tremble(t, 4, 1); if (you && you.pose) you.pose("look", t + 0.2); return pet; }
    if (a === "dog-stares" || a === "pet-stares" || a === "dog-growls") { var p2 = null; figs.forEach(function (f) { if (f instanceof Pet) p2 = f; }); if (!p2) p2 = new Pet(sc, "dog", { x: W * set.slots[1 % set.slots.length], y: sc.floor, h: petH(sc), at: Math.max(0, t - 1) }); p2.pose(a === "dog-growls" ? "growl" : "stare", t); p2.face(o.door ? (o.door.x > p2.x ? "right" : "left") : "right", t); p2.eyes(true, t); if (you && you.pose) you.pose("look", t + 0.3); return p2; }
    if (a === "tv-static" && o.tv) { o.tv.staticOn(t); sc.flicker(t, 0.3, 0.3); reactAll("look", towards(o.tv)); return o.tv; }
    if (a === "car-arrives" && o.car) { o.car.to({ x: o.car.x }, t, 2.2, "outCubic"); o.car.tx.add(W * 1.3, Math.max(0, t - 2.21), 0.0001, "hard"); o.car.tx.add(o.car.x, t - 2.2, 2.2, "outCubic"); o.car.roll(t - 2.2, 2.2, 4); o.car.flip = true; reactAll("look", "right"); return o.car; }
    if (a === "bus-arrives" && o.bus) { o.bus.tx.add(W * (P ? 0.5 : 0.56), t - 2, 2, "outCubic"); o.bus.roll(t - 2, 2, 3); o.bus.flip = true; reactAll("look", "right"); return o.bus; }
    if (a === "clock-strikes" && o.clock) { o.clock.setTime(extra && extra.time || "2:00", 0); o.clock.pop(t); sc.shake(t, 0.2, u(6)); reactAll("look", towards(o.clock)); return o.clock; }
    if (a === "footsteps") { var fs = []; for (var i = 0; i < 4; i++) { var fp = new Obj(sc, "footprints", { x: W * (P ? 0.8 : 0.9) - i * u(110) * (P ? 0.8 : 1), y: sc.floor + u(6), size: u(80), layer: "back", at: t + i * 0.35 }); fs.push(fp); } reactAll("look", "right"); return fs[0]; }
    if (a === "run" && you && you.runTo) { you.runTo(W * (you.tx.at(t) > W / 2 ? -0.2 : 1.2), t, 1.1); return null; }
    if (a === "hide" && you) { if (o.bed) { you.pose("hide", t); you.to({ x: o.bed.x }, t, 0.5); sc.layers.back.appendChild(you.g); } else you.pose("hide", t); you.tremble(t, 3, 0.7); return you; }
    if (a === "lamp-on" && (o.lamp || o["table-lamp"] || o.bulb)) { var lp = o.lamp || o["table-lamp"] || o.bulb; lp.light(false, 0); lp.light(true, t); return lp; }
    if (a === "lamp-off" && (o.lamp || o["table-lamp"] || o.bulb)) { var lp2 = o.lamp || o["table-lamp"] || o.bulb; lp2.light(true, 0); lp2.light(false, t); sc.flicker(t, 0.3, 0.6); return lp2; }
    if (a === "owl-watches") { var owl = new Pet(sc, "owl", { x: W * (P ? 0.84 : 0.9), y: sc.H * (P ? 0.36 : 0.34), h: petH(sc) * 0.8, at: t }); return owl; }
    if (a === "poster") { var po = new Obj(sc, "poster", { x: W * (P ? 0.24 : 0.14), y: sc.H * (P ? 0.5 : 0.56), size: Math.min(W, sc.H) * 0.3, at: t }); reactAll("look", towards(po)); return po; }
    return null;
  }
  var ACTIONS = ["none", "door-opens", "door-slams", "knock", "lights-flicker", "lights-out", "phone-rings", "curtains-close", "curtains-open", "visitor-at-door", "visitor-at-window", "eyes-in-the-dark", "dog-hides", "dog-stares", "dog-growls", "tv-static", "car-arrives", "bus-arrives", "clock-strikes", "footsteps", "run", "hide", "lamp-on", "lamp-off", "owl-watches", "poster"];
  S.actions = ACTIONS.slice();
  function focusOf(sc, set, figs, name, fallback) {
    var k = str(name || "").toLowerCase();
    if (!k || k === "none") return null;
    if (k === "action" || k === "event") return fallback || null;
    if (k === "character" || k === "you" || k === "figure") return figs[0] || null;
    if (k === "pet" || k === "dog" || k === "cat") { for (var i = 0; i < figs.length; i++) if (figs[i] instanceof Pet) return figs[i]; }
    var ok = objectKey(k);
    if (ok && set.objs[ok]) return set.objs[ok];
    if (set.objs[k]) return set.objs[k];
    return fallback || null;
  }
  function stampTime(sc, text, keyword, frac) {
    var tk = syncAt(stampKey(text, keyword), 0.2, D() * frac, 0.1);
    return clamp(tk, 0.3, Math.max(0.3, D() - 0.8));
  }
  function stampPos(sc) { return sc.portrait ? "top" : "upper"; }

  // ── rule-scene ── the workhorse
  T["rule-scene"] = function (root, p) {
    var sc = new Scene(root, { mode: p.mode === "dark" ? "dark" : "light" });
    var set = SETTINGS[settingKey(p.setting)](sc, {});
    var chars = arr(p.characters).length ? p.characters : [{ id: "you", pose: "stand" }];
    var figs = placeCast(sc, set, chars);
    var you = figs[0];
    if (p.time) sc.clockStamp(p.time, 0.3, { pos: sc.portrait ? "top-right" : p.stamp ? "bottom-left" : "top-left", y: sc.portrait ? (p.stamp ? 0.22 : 0.06) : p.stamp ? 0.93 : 0.08, size: "sm" });
    var tS = p.stamp ? stampTime(sc, p.stamp, p.keyword, 0.5) : D() * 0.5;
    var tA = p.action && p.action !== "none" ? syncAt(p.actionKeyword, 0.2, Math.max(0.8, Math.min(tS - 0.9, D() * 0.3)), 0.15) : null;
    var focus = tA != null ? doAction(sc, set, figs, p.action, tA, { time: p.time }) : null;
    var tgt = focusOf(sc, set, figs, p.arrowTo, focus);
    var st = null;
    if (p.stamp) st = sc.stamp(p.stamp, tS, { pos: p.stampPos || "top", y: p.stampPos ? null : (sc.portrait ? 0.13 : 0.12), size: sc.portrait ? "lg" : "xl", maxWidth: sc.portrait ? 0.9 : 0.92, lines: sc.portrait ? 2 : 1, min: u(30), color: p.stampColor, key: p.keyword });
    if (tgt) {
      var tArrow = tS + (p.stamp ? 0.3 : 0);
      if (p.ring !== false && (p.ring || !p.arrowTo)) sc.ring(tgt, tArrow, { pad: u(18) });
      else sc.arrowTo(tgt, tArrow, { len: u(150) });
    }
    if (p.triangle) sc.triangle(tS - 0.1, { x: sc.portrait ? 0.14 : 0.1, y: sc.portrait ? 0.3 : 0.16, size: u(sc.portrait ? 120 : 140) });
    if (p.caption) sc.caption(p.caption, syncAt(keyOf(p.caption, p.captionKeyword), tS + 0.2, Math.max(tS + 1, D() * 0.8), 0.15), { maxWidth: sc.portrait ? 0.86 : 0.56, x: sc.portrait ? 0.5 : 0.56 });
    // camera: push in, punch on the stamp, lean towards the focus
    if (tgt && tgt.box) { var b = tgt.box(tS); if (b.w > 0 && b.w < sc.W * 0.6) sc.camTo({ cx: sc.W / 2 + (b.cx - sc.W / 2) * 0.18, cy: sc.H / 2 + (b.cy - sc.H / 2) * 0.1, z: 1.07 }, tS, 0.25, "outCubic"); }
    else sc.camTo({ z: 1.05 }, tS, 0.2, "outCubic");
    if (you && you.pose && !tA && p.stamp) you.pose(p.pose || "point-up", tS - 0.05);
    if (p.endAction && p.endAction !== "none") doAction(sc, set, figs, p.endAction, Math.max(tS + 1.2, D() - 1.8));
  };

  // ── rule-card ──
  T["rule-card"] = function (root, p) {
    var sc = new Scene(root, { mode: p.mode === "dark" ? "dark" : "light", push: 0.03 });
    var P = sc.portrait, Q = sc.square;
    var hasFig = !!p.character;
    var tR = stampTime(sc, p.rule, p.keyword, 0.4);
    var card = sc.ruleCard(p.number != null ? p.number : 1, p.rule, Math.min(tR, 0.6), { icon: p.icon, forbidden: !!p.forbidden, x: P ? 0.5 : hasFig ? 0.4 : 0.5, y: P ? (hasFig ? 0.32 : 0.45) : 0.47, width: P ? 0.86 : hasFig ? 0.6 : 0.7, key: p.keyword, label: p.label, slashAt: p.forbidden ? Math.max(tR, 0.9) : null, size: P ? "md" : "lg" });
    if (hasFig) {
      SETTINGS.plain(sc);
      var fx0 = P ? sc.W * 0.5 : Q ? sc.W * 0.8 : sc.W * 0.82;
      var f = makeFigure(sc, p.character, { x: fx0, y: sc.floor, h: CAST[castId(p.character)].kind === "person" ? figH(sc) * (P ? 0.8 : 0.9) : petH(sc), facing: P ? "front" : "left", pose: "stand", at: 0.15 });
      if (f.pose) f.pose(p.pose || "point", tR);
      if (p.pose === "scared" || p.pose === "hands-up") f.tremble && f.tremble(tR, 3, 0.7);
    }
    if (p.subtext) sc.caption(p.subtext, syncAt(keyOf(p.subtext, p.subtextKeyword), tR + 0.3, Math.max(tR + 1, D() * 0.75), 0.15), { y: P ? 0.9 : 0.9 });
    if (p.forbidden) sc.triangle(Math.max(tR, 0.9) + 0.2, { x: P ? 0.86 : 0.12, y: P ? 0.1 : 0.14, size: u(P ? 110 : 130) });
    sc.camTo({ z: 1.04 }, tR, 0.2, "outCubic");
  };

  // ── do-dont ──
  T["do-dont"] = function (root, p) {
    var sc = new Scene(root, { mode: p.mode === "dark" ? "dark" : "light", push: 0.03 });
    var P = sc.portrait, Q = sc.square, W = sc.W, H = sc.H;
    var sides = [{ k: "do", d: p["do"] || {}, ok: true }, { k: "dont", d: p.dont || {}, ok: false }];
    var tTitle = 0.25;
    var top = P ? 0.1 : 0.14;
    if (p.title) { sc.stamp(p.title, tTitle, { pos: "top", size: P ? "md" : "lg", shake: false, y: P ? 0.07 : 0.1 }); top = P ? 0.14 : 0.2; }
    sc.divider(0.3);
    var tDo = syncAt(keyOf(sides[0].d.text, sides[0].d.keyword || p.doKeyword), 0.3, D() * 0.3, 0.1);
    var tDont = syncAt(keyOf(sides[1].d.text, sides[1].d.keyword || p.dontKeyword), tDo + 0.3, Math.max(tDo + 1.2, D() * 0.62), 0.1);
    sides.forEach(function (s, i) {
      var d = s.d, cx, cy, floorY, fh;
      if (P) { cx = W * 0.5; floorY = H * (i === 0 ? 0.46 : 0.84); fh = H * 0.2; }
      else { cx = W * (i === 0 ? 0.26 : 0.74); floorY = H * (Q ? 0.8 : 0.78); fh = Q ? H * 0.34 : H * 0.38; }
      var tt = i === 0 ? tDo : tDont;
      var lab = sc.stamp(s.d.text || (s.ok ? "DO THIS" : "NOT THIS"), tt, { x: P ? (s.ok ? 0.5 : 0.5) : cx / W, y: P ? (i === 0 ? top + 0.02 : 0.52) : top + 0.03, size: P ? "sm" : Q ? "sm" : "md", maxWidth: P ? 0.86 : 0.42, shake: false, color: s.ok ? "ink" : "red", key: d.keyword });
      var objName = d.object || null, charId = d.character || "you";
      var ob = null;
      if (objName && objectKey(objName)) ob = new Obj(sc, objName, { x: P ? cx + W * 0.18 : cx + fh * 0.55, y: floorY, size: fh * 0.9, at: 0.1 + i * 0.1, accent: !s.ok && d.accent });
      var f = makeFigure(sc, charId, { x: P ? cx - W * 0.16 : cx - fh * 0.38, y: floorY, h: CAST[castId(charId)].kind === "person" ? fh : fh * 0.5, facing: "right", pose: d.pose || (s.ok ? "stand" : "reach"), at: 0.2 + i * 0.1 });
      floorLine(sc, P ? W * 0.1 : cx - W * 0.2, P ? W * 0.9 : cx + W * 0.2, floorY + u(2));
      if (f.pose) f.pose(d.pose || (s.ok ? "stand" : "reach"), tt);
      if (d.action && ob) { if (d.action === "open" && ob.parts.leaf) ob.open(tt, 60, 1); if (d.action === "answer" && ob.name === "phone") f.pose && f.pose("phone", tt + 0.3); if (d.action === "close" && ob.parts.curtainL) ob.curtains(1, tt, 0.5); if (d.action === "light" ) ob.light(true, tt); }
      var target = { x: Math.min(f.box(0).x, ob ? ob.box(0).x : 1e9) , y: Math.min(f.box(0).y, ob ? ob.box(0).y : 1e9), w: 0, h: 0 };
      var right = Math.max(f.box(0).x + f.box(0).w, ob ? ob.box(0).x + ob.box(0).w : -1e9);
      target.w = right - target.x; target.h = floorY - target.y;
      if (s.ok) sc.mark("check", target, tt + 0.5, { size: fh * 0.9, dx: 0, dy: 0 });
      else { sc.mark("x", target, tt + 0.5, { size: fh * 1.1 }); if (f.tremble) f.tremble(tt + 0.5, 2, 0.6); }
    });
    if (p.verdict) sc.stamp(p.verdict, Math.max(tDont + 1.1, syncAt(keyOf(p.verdict, p.verdictKeyword), tDont + 0.6, D() * 0.85, 0.1)), { pos: "bottom", size: P ? "md" : "lg", color: "red", y: P ? 0.95 : 0.93, key: p.verdictKeyword });
  };

  // ── room-at-night ──
  T["room-at-night"] = function (root, p) {
    var sc = new Scene(root, { mode: "dark", push: 0.05 });
    var P = sc.portrait, W = sc.W, H = sc.H;
    var set = SETTINGS[settingKey(p.setting)](sc, { night: true });
    var you = new Fig(sc, p.character || "you", { x: W * set.slots[0], y: sc.floor, h: figH(sc), facing: set.slots[0] > 0.5 ? "left" : "right", pose: "flashlight", at: 0.1, layer: "front" });
    you.hold("flashlight", { size: figH(sc) * 0.2 });
    var cone = sc.cone(you, { angle: -10, spread: P ? 26 : 22, ambient: num(p.ambient, 0.08), flicker: true });
    if (p.time) sc.clockStamp(p.time, 0.3, { pos: "top-right", size: P ? "sm" : "md" });
    var reveals = arr(p.reveals).slice(0, 4);
    var times = S.syncTimes(reveals.map(function (r) { return keyOf(r.text, r.keyword || r.object); }), { start: 0.9, end: D() * 0.7, lead: 0.5 });
    var lastT = 0.6, lastObj = null;
    reveals.forEach(function (r, i) {
      var ob = focusOf(sc, set, [you], r.object) || (r.object && objectKey(r.object) ? new Obj(sc, r.object, { x: W * (P ? 0.5 + (i % 2 ? 0.25 : -0.25) : 0.3 + i * 0.18), y: sc.floor, size: Math.min(W, H) * 0.22, layer: "mid" }) : null);
      var t = Math.max(times[i], lastT + 0.6);
      if (ob) {
        var b = ob.box(0), hx = you.hand(0).x, hy = you.hand(0).y;
        var dir = you.facing(0) === "left" ? -1 : 1;
        var ang = Math.atan2(b.cy - hy, (b.cx - hx) * dir) / D2R;
        cone.aim(clamp(ang, -75, 60), t - 0.5, 0.55);
        if (r.text) sc.label(r.text, ob, t + 0.1, { x: clamp(b.cx / W + (P ? 0 : (b.cx > W / 2 ? -0.16 : 0.16)), 0.16, 0.84), y: clamp(b.y / H - (P ? 0.1 : 0.14), 0.12 + (P ? 0 : i * 0.08), 0.85), size: "sm", from: b.cx > W * 0.5 && !P ? "left" : P ? "top" : "right", key: r.keyword });
        if (r.action) doAction(sc, set, [you], r.action, t + 0.25);
        lastObj = ob;
      } else if (r.text) sc.stamp(r.text, t, { size: "sm", pos: "top", shake: false });
      lastT = t;
    });
    var tV = p.visitor && p.visitor !== "none" ? syncAt(p.visitorKeyword, lastT, Math.max(lastT + 1.2, D() * 0.78), 0.2) : null;
    if (tV != null) {
      var spot = p.visitor === "window" && set.objs.window ? set.objs.window : p.visitor === "corner" ? null : set.objs.door || null;
      var vx = spot ? spot.x : W * (set.slots[0] > 0.5 ? 0.1 : 0.9), vy = spot && spot.name === "window" ? spot.y + spot.size * 0.12 : sc.floor;
      var vis = new Fig(sc, "visitor", { x: vx, y: vy, h: figH(sc) * (spot && spot.name === "window" ? 0.7 : 1), facing: vx > W / 2 ? "left" : "right", layer: "glow", color: "transparent" });
      vis.g.classList.add("pg-eyes-only");
      vis.hide(0).show(tV);
      var b2 = vis.box(0);
      var ang2 = Math.atan2(vis.head(0).y - you.hand(0).y, (vis.head(0).x - you.hand(0).x) * (you.facing(0) === "left" ? -1 : 1)) / D2R;
      you.face(vx > you.tx.at(0) ? "right" : "left", tV + 0.6);
      cone.aim(clamp(ang2, -70, 40), tV + 0.6, 0.4);
      cone.sweep(clamp(ang2, -70, 40), clamp(ang2, -70, 40) + 18, tV + 1.0, 0.3);
      you.pose("scared", tV + 1.05);
      you.tremble(tV + 1, 3, 0.8);
      sc.flashFrame(tV + 1.0, 0.06, "red");
      sc.shake(tV + 1.0, 0.3, u(12));
      if (p.stamp) sc.stamp(p.stamp, Math.max(tV + 1.1, stampTime(sc, p.stamp, p.keyword, 0.86)), { pos: P ? "bottom" : "bottom", size: P ? "lg" : "xl", color: "red", key: p.keyword });
    } else if (p.stamp) sc.stamp(p.stamp, Math.max(lastT + 0.8, stampTime(sc, p.stamp, p.keyword, 0.8)), { pos: "bottom", size: P ? "lg" : "xl", color: "red", key: p.keyword });
  };

  // ── countdown-clock ──
  T["countdown-clock"] = function (root, p) {
    var sc = new Scene(root, { mode: p.mode === "light" ? "light" : "dark", push: 0.06 });
    var P = sc.portrait, Q = sc.square, W = sc.W, H = sc.H;
    var set = SETTINGS[settingKey(p.setting || "bedroom")](sc, {});
    var you = makeFigure(sc, p.character || "you", { x: set.bedSlot != null && p.pose !== "stand" ? W * set.bedSlot : W * set.slots[0], y: sc.floor, h: figH(sc), facing: "right", pose: p.pose || (set.bedSlot != null ? "sit-bed" : "sit"), at: 0.1 });
    if (set.bedSlot != null && (p.pose || "sit-bed") === "sit-bed") { you.to({ y: sc.floor - set.objs.bed.size * 0.26 }, 0, 0.0001); you.face("left", 0); }
    var tEvent = syncAt(p.eventKeyword || (p.stamp ? stampKey(p.stamp, p.keyword) : null), 0.5, D() * 0.6, 0.25);
    tEvent = clamp(tEvent, 1.5, Math.max(1.5, D() - 1.2));
    var from = p.from || "1:58 AM", to = p.to || "2:00 AM";
    var clk = sc.countdown(from, to, 0.3, tEvent - 0.35, { pos: "center", x: 0.5, y: P ? 0.1 : 0.14, size: P ? "lg" : "xl" });
    if (set.objs.clock) { set.objs.clock.setTime(from, 0); set.objs.clock.setTime(to, 0.3, tEvent - 0.35); }
    sc.extras.push(function (t) { clk.el.classList.toggle("pg-clock-alarm", t >= tEvent - 0.3); });
    if (you.talk) you.talk(0, tEvent);
    var ev = p.event && p.event !== "none" ? p.event : "lights-flicker";
    var focus = doAction(sc, set, [you], ev, tEvent, { time: to });
    sc.shake(tEvent - 0.35, 0.3, u(8));
    sc.flashFrame(tEvent - 0.35, 0.05, "red");
    if (p.stamp) {
      var st = sc.stamp(p.stamp, Math.max(tEvent + 0.5, stampTime(sc, p.stamp, p.keyword, 0.75)), { pos: P ? "bottom" : "lower", y: P ? 0.9 : 0.78, size: P ? "lg" : "xl", color: "red", key: p.keyword });
      if (focus && focus.box) sc.arrowTo(focus, st.at + 0.25, { len: u(140) });
    }
    if (p.caption) sc.caption(p.caption, Math.min(tEvent - 0.6, syncAt(keyOf(p.caption, p.captionKeyword), 0.4, tEvent * 0.4, 0.15)), { y: P ? 0.24 : 0.3, until: tEvent + 0.2 });
    sc.camTo({ z: 1.06, cx: W / 2, cy: H * 0.5 }, tEvent - 0.35, 0.2, "outCubic");
  };

  // ── object-warning ──
  T["object-warning"] = function (root, p) {
    var sc = new Scene(root, { mode: p.mode === "dark" ? "dark" : "light", push: 0.05 });
    var P = sc.portrait, Q = sc.square, W = sc.W, H = sc.H;
    var name = objectKey(p.object) || pickObject(p.title) || "phone";
    var size = P ? Math.min(W, H) * 0.56 : Q ? H * 0.5 : H * 0.62;
    var ox = P ? W * 0.5 : Q ? W * 0.42 : W * 0.36, oy = P ? H * 0.68 : H * 0.84;
    var tObj = syncAt(p.objectKeyword || name, 0.1, 0.5, 0.3);
    var ob = new Obj(sc, name, { x: ox, y: oy, size: size, at: Math.min(tObj, 0.8), accent: !!p.accent, peephole: true });
    sc.shake(Math.min(tObj, 0.8), 0.2, u(8));
    floorLine(sc, ox - size * 0.6, ox + size * 0.6, oy + u(2));
    if (p.title) sc.stamp(p.title, Math.min(0.35, D() * 0.1), { pos: "top", size: P ? "md" : "lg", y: P ? 0.08 : 0.1, shake: false, key: p.titleKeyword });
    if (p.warning !== false) sc.triangle(Math.min(tObj, 0.8) + 0.15, { x: P ? 0.84 : Q ? 0.12 : 0.1, y: P ? 0.2 : Q ? 0.26 : 0.26, size: u(P ? 120 : 150) });
    var calls = arr(p.callouts).slice(0, 4);
    var times = S.syncTimes(calls.map(function (c) { return keyOf(c.text, c.keyword); }), { start: Math.min(tObj, 0.8) + 0.6, end: D() * 0.72, lead: 0.2 });
    var spots = P ? [[0.22, 0.3], [0.78, 0.3], [0.22, 0.56], [0.78, 0.56]] : Q ? [[0.78, 0.26], [0.78, 0.46], [0.78, 0.66], [0.78, 0.86]] : [[0.74, 0.26], [0.74, 0.44], [0.74, 0.62], [0.74, 0.8]];
    var froms = P ? ["bottom", "bottom", "right", "left"] : ["left", "left", "left", "left"];
    calls.forEach(function (c, i) {
      var pt = spots[i % spots.length];
      var tgt = { x: ob.x + (num(c.dx, (i % 2 ? 0.2 : -0.2)) * size), y: oy - size * clamp(num(c.dy, 0.72 - i * 0.18), 0.1, 0.95), w: u(10), h: u(10) };
      sc.label(c.text, tgt, Math.max(times[i], (i ? times[i - 1] + 0.5 : 0)), { x: pt[0], y: pt[1], size: P ? "xs" : "sm", from: froms[i % froms.length], maxWidth: P ? 0.4 : Q ? 0.36 : 0.42, len: u(P ? 90 : 120), key: c.keyword });
    });
    if (p.stamp) {
      var tS = Math.max((times.length ? times[times.length - 1] + 0.8 : 1.2), stampTime(sc, p.stamp, p.keyword, 0.82));
      sc.stamp(p.stamp, tS, { pos: "bottom", y: P ? 0.92 : 0.9, size: P ? "lg" : "xl", color: "red", key: p.keyword });
      sc.ring(ob, tS + 0.2, { pad: u(10) });
      sc.camTo({ cx: ox, cy: oy - size * 0.5, z: 1.08 }, tS, 0.3, "outCubic");
    }
    // slow dread: a subtle wobble on the object
    ob.tr.add(1.2, 0.5, D(), "linear");
  };

  // ── phone-screen ──
  T["phone-screen"] = function (root, p) {
    var sc = new Scene(root, { mode: p.mode === "light" ? "light" : "dark", push: 0.05 });
    var P = sc.portrait, Q = sc.square, W = sc.W, H = sc.H;
    var kind = p.kind === "message" ? "message" : "call";
    var hasFig = p.character !== "none";
    var tRing = syncAt(p.ringKeyword || (kind === "call" ? "call" : "message"), 0.2, D() * 0.25, 0.2);
    var msgs = arr(p.messages).slice(0, 6);
    var mt = S.syncTimes(msgs.map(function (m) { return keyOf(m.text, m.keyword); }), { start: tRing + 0.4, end: D() * 0.7, lead: 0.15 });
    var ph = sc.phoneUI({ kind: kind, from: p.from, time: p.time, at: 0.25, x: P ? 0.5 : hasFig ? (Q ? 0.36 : 0.36) : 0.5, y: P ? (hasFig ? 0.4 : 0.5) : 0.5, h: P ? H * 0.48 : Q ? H * 0.72 : H * 0.78, ringAt: tRing, avatar: p.avatar, label: p.label, messages: msgs.map(function (m, i) { return { text: m.text, me: !!m.me, at: mt[i] }; }) });
    if (hasFig) {
      SETTINGS.plain(sc);
      var f = makeFigure(sc, p.character || "you", { x: P ? W * 0.5 : Q ? W * 0.78 : W * 0.76, y: sc.floor, h: CAST[castId(p.character || "you")].kind === "person" ? figH(sc) * (P ? 0.6 : 0.95) : petH(sc), facing: P ? "front" : "left", pose: "stand", at: 0.15 });
      if (f.pose) { f.pose("look", tRing); f.pose(p.pose || "cover-ears", Math.min(D() - 1, tRing + 1.6)); if (p.pose === "scared" || !p.pose) f.tremble && f.tremble(tRing + 1.6, 3, 0.6); }
      if (f.talk) f.talk(0, D());
    }
    if (p.stamp) {
      var tS = Math.max(tRing + 0.9, (mt.length ? mt[mt.length - 1] + 0.7 : 0), stampTime(sc, p.stamp, p.keyword, 0.8));
      sc.stamp(p.stamp, tS, { pos: P ? "bottom" : hasFig ? "lower" : "bottom", x: P ? 0.5 : hasFig ? 0.5 : 0.5, y: P ? 0.9 : 0.86, size: P ? "lg" : "xl", color: "red", key: p.keyword });
      sc.ring(ph, tS + 0.2, { pad: u(6) });
    }
    if (p.caption) sc.caption(p.caption, syncAt(keyOf(p.caption, p.captionKeyword), 0.3, tRing - 0.2, 0.15), { y: P ? 0.08 : 0.08, pos: "top" });
    sc.camTo({ z: 1.04 }, tRing, 0.2, "outCubic");
  };

  // ── checklist-protocol ──
  T["checklist-protocol"] = function (root, p) {
    var sc = new Scene(root, { mode: p.mode === "dark" ? "dark" : "light", push: 0.03 });
    var P = sc.portrait, Q = sc.square, W = sc.W, H = sc.H;
    var steps = arr(p.steps).filter(function (s) { return s && s.text; }).slice(0, 6);
    if (!steps.length) steps = [{ text: "Lock the door" }, { text: "Close the curtains" }, { text: "Do not answer" }];
    var hasFig = !!p.character && !P;
    var times = S.syncTimes(steps.map(function (s) { return keyOf(s.text, s.keyword); }), { start: 0.5, end: D() * 0.72, lead: 0.25 });
    for (var i = 1; i < times.length; i++) if (times[i] < times[i - 1] + 0.5) times[i] = times[i - 1] + 0.5;
    var list = sc.checklist(steps.map(function (s, i) { return { text: s.text, icon: s.icon, at: times[i], key: s.keyword, done: s.done, checkAt: Math.min(times[i] + 0.9, i + 1 < times.length ? times[i + 1] - 0.05 : D() - 0.6) }; }), { title: p.title, x: P ? 0.5 : hasFig ? (Q ? 0.42 : 0.4) : 0.5, y: P ? 0.44 : 0.46, width: P ? 0.86 : hasFig ? (Q ? 0.66 : 0.62) : 0.74, size: steps.length > 4 || Q ? "xs" : P ? "sm" : "md", at: 0.2 });
    if (hasFig) {
      SETTINGS.plain(sc);
      var f = makeFigure(sc, p.character, { x: Q ? W * 0.84 : W * 0.84, y: sc.floor, h: CAST[castId(p.character)].kind === "person" ? figH(sc) * 0.9 : petH(sc), facing: "left", pose: "stand", at: 0.15 });
      var poses = ["point", "hush", "cover-ears", "stop", "look", "pray"];
      steps.forEach(function (s, i) { if (f.pose) f.pose(s.pose || poses[i % poses.length], times[i]); });
      if (f.talk) f.talk(0, D());
    }
    if (p.stamp) sc.stamp(p.stamp, Math.max(times[times.length - 1] + 1.0, stampTime(sc, p.stamp, p.keyword, 0.85)), { pos: "bottom", y: P ? 0.93 : 0.95, size: Q ? "sm" : "md", color: "red", key: p.keyword });
  };

  // ── stinger-reveal ──
  T["stinger-reveal"] = function (root, p) {
    var sc = new Scene(root, { mode: p.mode === "dark" ? "dark" : "light", push: 0.1 });
    var P = sc.portrait, W = sc.W;
    var set = SETTINGS[settingKey(p.setting)](sc, {});
    var figs = placeCast(sc, set, [{ id: p.character || "you", pose: p.pose || "stand" }].concat(p.pet ? [{ id: p.pet, pose: "stand", slot: 1 }] : []));
    var you = figs[0];
    if (p.time) sc.clockStamp(p.time, 0.3, { pos: "top-right", size: P ? "sm" : "md" });
    var tCut = syncAt(p.keyword, 0.5, D() * 0.55, 0.05);
    tCut = clamp(tCut, 1.2, Math.max(1.2, D() - 1.0));
    if (p.before) sc.stamp(p.before, Math.min(0.6, tCut - 0.8), { pos: stampPos(sc), size: P ? "md" : "lg", shake: false, until: tCut - 0.02 });
    var bu = p.buildup && p.buildup !== "none" ? p.buildup : "knock";
    doAction(sc, set, figs, bu, Math.max(0.6, tCut - 1.4));
    if (you.pose) you.pose("look", tCut - 1.2);
    // silence before the cut: lights dip
    sc.flicker(tCut - 0.5, 0.3, 0.3);
    var hold = p.hold != null ? num(p.hold, 0) : 0;
    var stg = sc.stinger(tCut, { pos: p.visitorPos === "full" ? "full" : "face", stamp: p.stamp, key: p.stampKeyword, hold: hold > 0 ? hold : null, stampDelay: 0.45 });
    if (hold > 0) {
      // cut back: everyone scared, the thing is gone
      var tb = tCut + hold;
      figs.forEach(function (f) { if (f.pose) f.pose(f instanceof Pet ? "hide" : "scared", tb); if (f.tremble) f.tremble(tb, D() - tb, 0.8); });
      if (p.after) sc.stamp(p.after, tb + 0.3, { pos: "bottom", size: P ? "lg" : "xl", color: "red", key: p.afterKeyword });
    }
  };

  // ── title-card ──
  T["title-card"] = function (root, p) {
    var sc = new Scene(root, { mode: p.mode === "light" ? "light" : "dark", push: 0.04 });
    var P = sc.portrait, Q = sc.square, W = sc.W, H = sc.H;
    sc.flicker(0.05, 0.6, 0.5);
    var tT = stampTime(sc, p.title, p.keyword, 0.3);
    tT = Math.min(tT, Math.max(0.6, D() * 0.45));
    var hasIcon = !!p.icon;
    var icon = null;
    if (hasIcon) {
      var isCast = !objectKey(p.icon) && CAST[castId(p.icon)] && castId(p.icon) !== "you" || /^(you|visitor|dog|cat|owl|crow|mom|dad|kid|grandma|stranger|friend)$/.test(str(p.icon).toLowerCase());
      var isz = P ? Math.min(W, H) * 0.34 : Q ? H * 0.3 : H * 0.36;
      var ix = P ? W * 0.5 : Q ? W * 0.5 : W * 0.5, iy = P ? H * 0.5 : Q ? H * 0.52 : H * 0.56;
      if (isCast) { icon = makeFigure(sc, p.icon, { x: ix, y: iy + isz * 0.5, h: CAST[castId(p.icon)].kind === "person" ? isz : isz * 0.6, facing: "front", pose: p.pose || "stand", at: 0.4 }); if (icon.talk) icon.talk(tT, D()); }
      else icon = new Obj(sc, p.icon, { x: ix, y: iy + isz * 0.5, size: isz, at: 0.4, peephole: true });
      floorLine(sc, ix - isz * 0.7, ix + isz * 0.7, iy + isz * 0.5 + u(2));
    }
    if (p.kicker) sc.stamp(p.kicker, 0.35, { pos: "top", y: P ? 0.1 : 0.09, size: P ? "sm" : "sm", color: "red", shake: false });
    var st = sc.stamp(p.title, tT, { x: 0.5, y: hasIcon ? (P ? 0.27 : Q ? 0.28 : 0.3) : 0.44, size: P ? "lg" : "xl", maxWidth: P ? 0.9 : 0.86, key: p.keyword, lines: 3 });
    if (p.subtitle) sc.caption(p.subtitle, Math.max(tT + 0.6, syncAt(keyOf(p.subtitle, p.subtitleKeyword), tT + 0.3, D() * 0.7, 0.15)), { y: hasIcon ? (P ? 0.86 : 0.9) : 0.62, size: P ? "sm" : "md", color: p.subtitleColor });
    if (p.triangle !== false) sc.triangle(tT + 0.25, { x: P ? 0.14 : 0.1, y: P ? 0.1 : 0.14, size: u(P ? 110 : 140) });
    if (p.number != null) sc.badge(p.number, 0.4, { x: P ? 0.86 : 0.9, y: P ? 0.1 : 0.14, size: u(P ? 100 : 120), color: "red" });
    sc.flashFrame(tT, 0.05, "red");
    sc.camTo({ z: 1.05 }, tT, 0.25, "outCubic");
  };

  // ── outcome-split ──
  T["outcome-split"] = function (root, p) {
    var sc = new Scene(root, { mode: p.mode === "dark" ? "dark" : "light", push: 0.03 });
    var P = sc.portrait, Q = sc.square, W = sc.W, H = sc.H;
    var tC = Math.min(0.45, D() * 0.1);
    var cond = sc.stamp(p.condition || "IF YOU DO IT", tC, { pos: "top", y: P ? 0.07 : 0.1, size: P ? "md" : "lg", shake: false, key: p.conditionKeyword });
    sc.divider(tC + 0.2);
    var sides = [p["do"] || {}, p.dont || {}];
    var tA = syncAt(keyOf(sides[0].text, sides[0].keyword || p.doKeyword), tC + 0.2, D() * 0.3, 0.15);
    var tB = syncAt(keyOf(sides[1].text, sides[1].keyword || p.dontKeyword), tA + 0.4, Math.max(tA + 1.3, D() * 0.62), 0.15);
    var tV = p.verdict ? Math.max(tB + 1.2, stampTime(sc, p.verdict, p.verdictKeyword, 0.88)) : null;
    [tA, tB].forEach(function (tt, i) {
      var s = sides[i], good = i === 0 ? s.good !== false : !!s.good;
      var cx = P ? W * 0.5 : W * (i === 0 ? 0.26 : 0.74);
      var floorY = P ? H * (i === 0 ? 0.47 : 0.86) : H * (Q ? 0.76 : 0.74);
      var fh = P ? H * 0.17 : Q ? H * 0.3 : H * 0.34;
      sc.stamp(s.label || (i === 0 ? "IF YOU DO" : "IF YOU DON'T"), tt - 0.1, { x: cx / W, y: P ? (i === 0 ? 0.16 : 0.55) : 0.24, size: "sm", maxWidth: P ? 0.86 : 0.42, shake: false, color: good ? "ink" : "red" });
      var fid = s.character || (good ? "you" : "visitor");
      var f = makeFigure(sc, fid, { x: cx - (s.icon ? fh * 0.4 : 0), y: floorY, h: CAST[castId(fid)].kind === "person" ? fh : fh * 0.5, facing: s.icon ? "right" : "front", pose: s.pose || (good ? "wave" : castId(fid) === "visitor" ? "reach" : "scared"), at: tt });
      if (s.icon && objectKey(s.icon)) new Obj(sc, s.icon, { x: cx + fh * 0.5, y: floorY, size: fh * 0.9, at: tt + 0.1 });
      if (castId(fid) === "visitor") { sc.flashFrame(tt, 0.06, "red"); sc.shake(tt, 0.25, u(10)); }
      if (!good && f.tremble && castId(fid) !== "visitor") f.tremble(tt, 3, 0.7);
      floorLine(sc, P ? W * 0.1 : cx - W * 0.2, P ? W * 0.9 : cx + W * 0.2, floorY + u(2));
      if (s.text) sc.stamp(s.text, tt + 0.35, { x: cx / W, y: P ? (i === 0 ? 0.5 : 0.93) : 0.9, size: P ? "xs" : Q ? "xs" : "sm", maxWidth: P ? 0.86 : 0.44, shake: false, color: good ? "mixed" : "red", key: s.keyword, until: tV != null && !(P && i === 0) ? tV - 0.05 : null });
    });
    if (tV != null) sc.stamp(p.verdict, tV, { pos: "bottom", y: P ? 0.93 : 0.9, size: P ? "md" : "lg", maxWidth: P ? 0.9 : 0.9, lines: 1, min: u(30), color: "red", key: p.verdictKeyword, rot: -2 });
  };

  // ───────────────────────── public API ─────────────────────────
  S.pictogram = function (root, opts) { return new Scene(root || V.root(), opts); };
  S.scene = S.pictogram;
  S.currentScene = function () { return current; };
  S.figure = function (name, o) { return makeFigure(sceneFor(), name, o || {}); };
  S.object = function (name, o) { return new Obj(sceneFor(), name, o || {}); };
  S.setting = function (name, o) { return SETTINGS[settingKey(name)](sceneFor(), o || {}); };
  S.stamp = function (text, at, o) { return sceneFor().stamp(text, at, o); };
  S.caption = function (text, at, o) { return sceneFor().caption(text, at, o); };
  S.clockStamp = function (text, at, o) { return sceneFor().clockStamp(text, at, o); };
  S.countdown = function (from, to, at, dur, o) { return sceneFor().countdown(from, to, at, dur, o); };
  S.ruleCard = function (n, text, at, o) { return sceneFor().ruleCard(n, text, at, o); };
  S.badge = function (n, at, o) { return sceneFor().badge(n, at, o); };
  S.arrowTo = function (target, at, o) { return sceneFor().arrowTo(target, at, o); };
  S.ring = function (target, at, o) { return sceneFor().ring(target, at, o); };
  S.triangle = function (at, o) { return sceneFor().triangle(at, o); };
  S.mark = function (kind, target, at, o) { return sceneFor().mark(kind, target, at, o); };
  S.divider = function (at, o) { return sceneFor().divider(at, o); };
  S.cone = function (fig, o) { return sceneFor().cone(fig, o); };
  S.stinger = function (at, o) { return sceneFor().stinger(at, o); };
  S.phoneUI = function (o) { return sceneFor().phoneUI(o); };
  S.checklist = function (items, o) { return sceneFor().checklist(items, o); };
  S.label = function (text, target, at, o) { return sceneFor().label(text, target, at, o); };
  S.flicker = function (at, dur, d) { return sceneFor().flicker(at, dur, d); };
  S.lightsOut = function (at, until) { return sceneFor().lightsOut(at, until); };
  S.blackout = function (at, dur, until) { return sceneFor().blackout(at, dur, until); };
  S.flashFrame = function (at, dur, c) { return sceneFor().flashFrame(at, dur, c); };
  S.setMode = function (m, at) { return sceneFor().setMode(m, at); };
  S.cameraTo = function (o, at, dur, ease) { return sceneFor().camTo(o || {}, at == null ? 0 : at, dur, ease); };
  S.cameraCut = function (o, at) { return sceneFor().camCut(o || {}, at == null ? 0 : at); };
  S.frameRect = function (r, at, dur, ease, m) { return sceneFor().camFrame(r, at == null ? 0 : at, dur, ease, m); };
  S.shake = function (at, dur, amp) { return sceneFor().shake(at, dur, amp); };
  S.action = function (action, at, extra) { var sc = sceneFor(); return doAction(sc, sc.lastSet || { objs: {}, slots: [0.5] }, sc.figs, action, at == null ? 0 : at, extra); };
  S.cursor = function () { return sceneFor().cursor; };
  S.wait = function (s) { var sc = sceneFor(); sc.cursor += num(s, 0.5); return sc.cursor; };
  S.cast = CAST_IDS.slice();
  S.poses = POSE_NAMES.slice();
  S.petPoses = Object.keys(PET_POSES);
  S.pictoTemplates = T;
  S.templateIds = Object.keys(T);
  // remember the last setting built so S.action can find its objects
  var origSetting = S.setting;
  S.setting = function (name, o) { var sc = sceneFor(); var set = origSetting(name, o); sc.lastSet = set; return set; };

  // ───────────────────────── render / fallback ─────────────────────────
  S.render = function (id, root, props) {
    var fn = T[id];
    if (!fn) throw new Error("Unknown template: " + id);
    root = root || V.root();
    try {
      fn(root, props || {});
    } catch (e) {
      V.error("pictogram template " + id + ": " + (e && e.message));
      try { V.reset(); } catch (e2) {}
      current = null;
      S.fallback(root, V.narration);
    }
    return root;
  };

  function chunkNarration(text) {
    var ws = str(text).replace(/\s+/g, " ").trim().split(" ").filter(Boolean);
    if (!ws.length) return [];
    var maxChunks = Math.max(1, Math.floor(D() / 1.6));
    var per = Math.max(5, Math.ceil(ws.length / maxChunks));
    var out = [], cur = [];
    for (var i = 0; i < ws.length && out.length < maxChunks; i++) {
      cur.push(ws[i]);
      var end = /[.!?;:]$/.test(ws[i]) && cur.length >= 3;
      if (cur.length >= per || end) { out.push({ text: cur.join(" "), i0: i - cur.length + 1, n: cur.length }); cur = []; }
    }
    if (cur.length && out.length < maxChunks) {
      var lastC = out[out.length - 1];
      if (lastC && cur.length < 3) { lastC.text += " " + cur.join(" "); lastC.n += cur.length; }
      else out.push({ text: cur.join(" "), i0: ws.length - cur.length, n: cur.length });
    }
    return out;
  }
  /** Fallback: a figure walks in and stands under the narration, stamped chunk by chunk. Never throws. */
  S.fallback = function (root, narration) {
    try {
      root = root || V.root();
      try { V.reset(); } catch (e0) {}
      current = null;
      var sc = new Scene(root, { mode: "light", push: 0.04 });
      var W = sc.W, H = sc.H, P = sc.portrait;
      SETTINGS.plain(sc);
      var fh = figH(sc) * (P ? 0.8 : 0.9);
      var fxp = P ? W * 0.5 : W * 0.2;
      var fig = new Fig(sc, "you", { x: P ? W * -0.2 : W * -0.15, y: sc.floor, h: fh, facing: "right", at: 0 });
      fig.walkTo(fxp, 0.05, 1.1);
      fig.talk(0.2, D());
      if (P) fig.face("front", 1.2);
      var chunks = chunkNarration(narration != null ? narration : V.narration);
      var Wd = words(), n = chunks.length;
      var prev = null;
      chunks.forEach(function (c, i) {
        var t0 = Wd.length > c.i0 ? Wd[c.i0].start - 0.1 : 0.4 + ((D() - 1) * i) / n;
        t0 = Math.max(0.3, Math.min(t0, D() - 0.6));
        var t1 = i + 1 < n ? (Wd.length > chunks[i + 1].i0 ? Wd[chunks[i + 1].i0].start - 0.1 : 0.4 + ((D() - 1) * (i + 1)) / n) : null;
        sc.stamp(c.text, t0, { x: P ? 0.5 : sc.square ? 0.6 : 0.62, y: P ? 0.3 : 0.42, size: c.text.length > 60 ? "sm" : "md", maxWidth: P ? 0.88 : sc.square ? 0.56 : 0.62, lines: 4, shake: false, until: t1 != null ? Math.max(t0 + 0.4, t1 - 0.05) : null });
        if (i % 2 === 1) fig.pose(i % 4 === 1 ? "point" : "shrug", t0);
        else if (i) fig.pose("stand", t0);
        prev = c;
      });
      if (!n) { fig.pose("shrug", 1.3); sc.triangle(1.4, { x: P ? 0.5 : 0.62, y: P ? 0.3 : 0.42, size: u(P ? 160 : 200) }); }
      return root;
    } catch (e) {
      try { V.error("pictogram fallback: " + (e && e.message)); } catch (e1) {}
      try {
        try { V.reset(); } catch (e3) {}
        root.innerHTML = "";
        var t = el("div", { parent: root, style: { position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center", padding: "8%", fontSize: u(64) + "px", fontWeight: "900", textTransform: "uppercase", textAlign: "center", color: INK, background: PAPER, fontFamily: FONT } });
        t.textContent = str(narration || V.narration).split(/\s+/).slice(0, 12).join(" ");
      } catch (e2) {}
    }
    return root;
  };
})();
