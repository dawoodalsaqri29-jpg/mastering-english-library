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
/* Scene engine: anime — "Anime".
 * Original 2D cel-shaded anime: a recurring cast of procedurally drawn SVG characters with big
 * expressive eyes, hard two-tone shading and lip-sync, cut together like an anime episode —
 * shots and reverse shots, focus lines, speed lines, eye cut-ins, impact frames, sakura,
 * painted skies, power-up auras, slanted title cards and eyecatch wipes.
 * Pure function of time: all DOM/SVG is built once; V.onFrame(t) updates transforms/attributes.
 */
(function () {
  "use strict";
  var V = window.V;
  var S = (window.SceneStyle = window.SceneStyle || {});
  var el = V.el;
  var SVGNS = "http://www.w3.org/2000/svg";

  S.init({
    id: "anime",
    kind: "minimal",
    enter: "pop",
    titleReveal: "mask",
    drift: 0,
    series: ["#FF4F8B", "#4F8BFF", "#FFC23F", "#2EC4A6", "#9B6CF2", "#FF8A3D"],
  });

  // ───────────────────────── utils ─────────────────────────
  var INK = "#1F1A3A", PAPER = "#FDF6FF", ACC = "#FF4F8B", MUTED = "#6C6A9C", GOLD = "#FFD23F", CYAN = "#4FD8FF", VIOLET = "#9B6CF2";
  var LW = 3.4; // character line weight (character units)
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
  function hex2rgb(hex) {
    var h = str(hex).replace("#", "");
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    var n = parseInt(h, 16);
    if (isNaN(n)) return [128, 128, 128];
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  function rgb2hex(r, gg, b) { return "#" + ((1 << 24) | (Math.round(r) << 16) | (Math.round(gg) << 8) | Math.round(b)).toString(16).slice(1); }
  function mix(a, b, p) { var x = hex2rgb(a), y = hex2rgb(b); return rgb2hex(lerp(x[0], y[0], p), lerp(x[1], y[1], p), lerp(x[2], y[2], p)); }
  function shade(hex, amt) { return amt < 0 ? mix(hex, "#000000", -amt) : mix(hex, "#FFFFFF", amt); }
  function rgba(hex, a) { var c = hex2rgb(hex); return "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + a + ")"; }
  /** set attribute only when it changed (keeps seeks cheap) */
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
  function nid(p) { uid++; return "an" + (p || "") + uid + "_" + (V.seed || 0); }

  // anime easings: hard holds, fast smears, overshoot pops
  var EASE = {
    snap: function (p) { p = clamp(p, 0, 1); var q = p - 1, s = 2.2; return q * q * ((s + 1) * q + s) + 1; },
    smear: function (p) { p = clamp(p, 0, 1); return p < 0.5 ? 16 * p * p * p * p * p : 1 - Math.pow(-2 * p + 2, 5) / 2; },
    whip: function (p) { p = clamp(p, 0, 1); return 1 - Math.pow(1 - p, 4); },
    pop: function (p) { p = clamp(p, 0, 1); var q = p - 1, s = 1.6; return q * q * ((s + 1) * q + s) + 1; },
  };
  function easeFn(e) {
    if (typeof e === "function") return e;
    if (EASE[e]) return EASE[e];
    if (e && V.ease[e]) return V.ease[e];
    return V.ease.inOutCubic;
  }
  S.animeEase = EASE;

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
    for (var j = idx + ws.length - 1; j >= idx && j < Math.min(W.length, idx + ws.length + 3); j++) if (normW(W[j].word) === last) { endIdx = j; break; }
    return { start: W[idx].start, end: W[endIdx].end, found: true };
  }
  /** timing windows [{start,end,found}] for ordered lines of narration text */
  function lineWindows(lines, opts) {
    opts = opts || {};
    var Dd = D();
    var t0 = opts.start != null ? opts.start : Math.min(0.4, Dd * 0.08);
    var t1 = opts.end != null ? opts.end : Math.max(t0 + 0.5, Dd - Math.min(0.5, Dd * 0.08));
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
      if (b - a < 0.5 * (j - i0)) b = a + 0.9 * (j - i0);
      var tot = 0, k;
      for (k = i0; k < j; k++) tot += lens[k] + 1.2;
      var cur = a;
      for (k = i0; k < j; k++) {
        var len = ((b - a) * (lens[k] + 1.2)) / tot;
        out[k] = { start: cur, end: cur + len * 0.85, found: false };
        cur += len;
      }
      i0 = j;
    }
    for (i = 0; i < n; i++) {
      out[i].start = clamp(out[i].start, 0, Math.max(0, Dd - 0.3));
      out[i].end = clamp(Math.max(out[i].end, out[i].start + 0.3), 0, Dd);
    }
    return out;
  }
  /** narration phrases in [from,to]: [{s,e,text}] (pauses > 0.35 s or punctuation split) */
  function phrases(from, to, maxWords) {
    var W = words(), out = [], cur = null;
    from = from == null ? 0 : from; to = to == null ? D() : to;
    maxWords = maxWords || 7;
    for (var i = 0; i < W.length; i++) {
      var w = W[i];
      if (w.start < from - 0.01 || w.start > to) continue;
      if (cur && (w.start - cur.e > 0.35 || cur.n >= maxWords)) { out.push(cur); cur = null; }
      if (!cur) cur = { s: w.start, e: w.end, text: "", n: 0, words: [] };
      cur.text += (cur.n ? " " : "") + w.word;
      cur.words.push(w);
      cur.e = w.end; cur.n++;
      if (/[.!?;:]$/.test(w.word)) { out.push(cur); cur = null; }
    }
    if (cur) out.push(cur);
    return out;
  }
  function syllables(word) {
    var w = str(word).toLowerCase().replace(/[^a-zà-ɏ]/g, "");
    var m = w.match(/[aeiouyàáâäãåèéêëìíîïòóôöõùúûü]+/g);
    return Math.max(1, Math.min(5, m ? m.length : 1));
  }
  S.lines = lineWindows;
  S.syncAt = syncAt;
  S.phrases = phrases;

  // ───────────────────────── cast ─────────────────────────
  // Character-local units: origin = centre of the head, y down. Face spans x ±88, skull top y -126,
  // chin y 107, eyes at (±38, 14). Busts continue below the frame; chibi bodies end at y ≈ 280.
  var CAST = {
    hikari: {
      name: "Hikari", role: "determined student hero — pink spiky bob, star hair clip, amber eyes, sailor uniform with red ribbon",
      skin: "#FFE3D4", skinSh: "#F3B3A4", hair: "#FF6FA5", hairSh: "#D63E7A", hairHi: "#FFC9DE",
      eye: "#F59A2E", eyeDark: "#A9480F", eyeLight: "#FFE08A", outfit: "sailor", top: "#FAFAFF", topSh: "#D5D8F0", collar: "#2B3A78", tie: "#FF4F8B",
      style: "hikari", expr: "smile", accent: "#FF4F8B",
    },
    ren: {
      name: "Ren", role: "calm genius mentor — long silver-lavender hair, rectangular glasses, violet eyes, white lab coat over a dark turtleneck",
      skin: "#F8DFD0", skinSh: "#E2B3A2", hair: "#D3CEEE", hairSh: "#9C94CC", hairHi: "#FFFFFF",
      eye: "#7A5CD6", eyeDark: "#3B2B78", eyeLight: "#C9B8FF", outfit: "labcoat", top: "#FBFBFF", topSh: "#D3D5EA", inner: "#2C2A4A",
      style: "ren", glasses: true, expr: "calm", accent: "#9B6CF2",
    },
    kaito: {
      name: "Kaito", role: "energetic rival and best friend — spiky navy hair, red headband, teal eyes, cheek plaster, black school jacket with gold buttons",
      skin: "#F4C9A6", skinSh: "#D99B78", hair: "#2F3B8F", hairSh: "#19205C", hairHi: "#6F88EA",
      eye: "#1FB5A8", eyeDark: "#0C6660", eyeLight: "#93F2E4", outfit: "gakuran", top: "#24284C", topSh: "#161935", button: "#FFD23F",
      style: "kaito", band: "#E8344E", expr: "smile", accent: "#4F8BFF",
    },
    yuki: {
      name: "Yuki", role: "kind, clever classmate — long dark hime-cut hair, blue eyes, cream cardigan with a blue ribbon",
      skin: "#FFEADF", skinSh: "#F1BFAD", hair: "#2B2648", hairSh: "#151229", hairHi: "#7774AE",
      eye: "#4F8BFF", eyeDark: "#1C47A8", eyeLight: "#AED3FF", outfit: "cardigan", top: "#F4DFB4", topSh: "#D9BC86", tie: "#4F8BFF",
      style: "yuki", expr: "smile", accent: "#2EC4A6",
    },
    mochi: {
      name: "Mochi", role: "magical mascot — round white bunny-cat with long ears, pink cheeks, gold forehead star, sparkly purple eyes",
      skin: "#FFFFFF", skinSh: "#E4DAF6", hair: "#FFFFFF", hairSh: "#E4DAF6", hairHi: "#FFFFFF", ear: "#FFB3CF",
      eye: "#B04FD8", eyeDark: "#3A2466", eyeLight: "#E9A9FF", mascot: true, expr: "happy", accent: "#FFD23F",
    },
  };
  S.CAST = CAST;
  var CAST_IDS = Object.keys(CAST);
  var CAST_ALIASES = { hero: "hikari", student: "hikari", mentor: "ren", sensei: "ren", teacher: "ren", genius: "ren", rival: "kaito", friend: "kaito", classmate: "yuki", mascot: "mochi", pet: "mochi", creature: "mochi" };
  function castId(name, i) {
    var k = str(name).toLowerCase().trim();
    if (CAST[k]) return k;
    if (CAST_ALIASES[k]) return CAST_ALIASES[k];
    return CAST_IDS[(((i || 0) % 4) + 4) % 4];
  }

  // ───────────────────────── expressions ─────────────────────────
  // eyes: normal | happy | closed | shock | sparkle | spiral | cross ; lid 0..1 (upper lid drop),
  // lidA (+ = inner end down: fierce, − = inner end up: sad); by/ba brow offset/angle (+ = worried);
  // bs brow asymmetry; mouth type + mo (base openness); marks drawn around the head.
  var EBASE = { eyes: "normal", lid: 0, lidA: 0, by: 0, ba: 0, bs: 0, mouth: "line", mo: 0, mw: 1, blush: 0.25, marks: [], tilt: 0, look: null, iris: 1, eyeS: 1 };
  var EXPR = {
    neutral: {},
    smile: { lid: 0.06, by: -2, ba: 0.15, mouth: "smile", blush: 0.35 },
    happy: { eyes: "happy", by: -6, ba: 0.25, mouth: "open", mo: 0.55, blush: 0.6, tilt: 3 },
    excited: { eyes: "sparkle", by: -9, ba: 0.25, mouth: "open", mo: 0.75, blush: 0.6, marks: ["sparkles"], eyeS: 1.06 },
    sparkle: { eyes: "sparkle", by: -6, ba: 0.3, mouth: "open", mo: 0.45, blush: 0.8, marks: ["sparkles"], eyeS: 1.08, tilt: 4 },
    shocked: { eyes: "shock", by: -15, ba: 0.45, mouth: "o", mo: 1, blush: 0.05, marks: ["gloom", "shock"], tilt: -2, eyeS: 1.1 },
    surprised: { by: -13, ba: 0.3, mouth: "o", mo: 0.6, iris: 0.82, eyeS: 1.08, marks: ["shock"] },
    determined: { lid: 0.2, lidA: 0.75, by: 6, ba: -0.85, mouth: "grit", blush: 0.15 },
    serious: { lid: 0.16, lidA: 0.35, by: 3, ba: -0.45, mouth: "line", blush: 0.1 },
    "sweat-drop": { lid: 0.08, by: -5, ba: 0.65, mouth: "wobbly", blush: 0.3, marks: ["sweat"], look: [0.45, 0] },
    panic: { eyes: "spiral", by: -10, ba: 0.85, mouth: "wail", mo: 0.8, blush: 0.2, marks: ["sweat", "gloom"] },
    flustered: { eyes: "cross", by: -6, ba: 0.6, mouth: "wail", mo: 0.45, blush: 0.9, marks: ["sweat", "hatch"] },
    sad: { lid: 0.16, lidA: -0.7, by: -4, ba: 0.9, mouth: "frown", blush: 0.15, marks: ["tears"], look: [0, 0.4] },
    angry: { lid: 0.24, lidA: 1, by: 8, ba: -1, mouth: "shout", mo: 0.55, blush: 0.2, marks: ["vein"] },
    smug: { lid: 0.42, lidA: 0.1, by: 0, ba: 0, bs: 1, mouth: "cat", blush: 0.35 },
    calm: { lid: 0.3, by: 0, ba: 0.05, mouth: "smile", blush: 0.2 },
    thinking: { lid: 0.12, by: -3, ba: 0.1, bs: 1, mouth: "hmm", look: [0.6, -0.65], blush: 0.15 },
    embarrassed: { lid: 0.1, by: -4, ba: 0.5, mouth: "wobbly", blush: 1, marks: ["hatch", "sweat"], look: [-0.6, 0.35] },
    sleepy: { eyes: "closed", by: 2, mouth: "o", mo: 0.2, blush: 0.25 },
  };
  var EXPR_ALIASES = { joy: "happy", glad: "happy", laugh: "happy", laughing: "happy", grin: "happy", shock: "shocked", amazed: "surprised", wow: "surprised", focused: "determined", fierce: "determined", resolve: "determined", sweat: "sweat-drop", nervous: "sweat-drop", awkward: "sweat-drop", worried: "sweat-drop", "chibi-panic": "panic", scared: "panic", dizzy: "panic", frustrated: "flustered", cry: "sad", crying: "sad", upset: "sad", mad: "angry", confident: "smug", proud: "smug", cool: "calm", curious: "thinking", think: "thinking", blush: "embarrassed", shy: "embarrassed", love: "sparkle", starry: "sparkle", "sparkle-eyes": "sparkle" };
  function exprName(n) { n = str(n).toLowerCase().trim(); if (EXPR[n]) return n; return EXPR_ALIASES[n] || "neutral"; }
  function E(name) { var e = {}, src = EXPR[exprName(name)] || {}; for (var k in EBASE) e[k] = src[k] != null ? src[k] : EBASE[k]; return e; }
  S.EXPRESSIONS = EXPR;

  // ───────────────────────── gestures (hand targets, character units) ─────────────────────────
  var SH = { x: 140, y: 214 }, L1 = 150, L2 = 142, ARMW = 44;
  var REST = { L: [-152, 540, "open"], R: [152, 540, "open"] };
  var GEST = {
    rest: {},
    fist: { R: [62, 196, "fist"] },
    "fist-up": { R: [150, -34, "fist"] },
    point: { R: [322, 150, "point"] },
    "point-left": { L: [-322, 150, "point"] },
    "point-up": { R: [196, -150, "point"] },
    think: { R: [30, 116, "fist"] },
    wave: { R: [214, -40, "open"] },
    peace: { R: [132, 18, "peace"] },
    thumbs: { R: [92, 200, "thumb"] },
    cheer: { L: [-180, -104, "fist"], R: [180, -104, "fist"] },
    panic: { L: [-108, -40, "open"], R: [108, -40, "open"] },
    glasses: { R: [44, 46, "point"] },
    explain: { R: [218, 236, "open"] },
    present: { L: [-252, 250, "open"], R: [252, 250, "open"] },
    cross: { L: [98, 300, "fist"], R: [-98, 286, "fist"] },
    clasp: { L: [-14, 262, "fist"], R: [14, 262, "fist"] },
    ready: { L: [-56, 196, "fist"], R: [112, 150, "fist"] },
    punch: { R: [336, 116, "fist"] },
    "punch-left": { L: [-336, 116, "fist"] },
  };
  var GEST_ALIASES = { idle: "rest", none: "rest", "pump": "fist", determined: "fist", raise: "fist-up", "point-right": "point", pointing: "point", up: "point-up", chin: "think", thinking: "think", hello: "wave", hi: "wave", "v-sign": "peace", victory: "peace", "thumbs-up": "thumbs", yay: "cheer", celebrate: "cheer", "arms-up": "cheer", "hands-on-head": "panic", "push-glasses": "glasses", open: "explain", "open-palm": "explain", welcome: "present", "arms-crossed": "cross", crossed: "cross", pray: "clasp", fight: "ready", stance: "ready", attack: "punch", strike: "punch" };
  function gestName(n) { n = str(n).toLowerCase().trim(); if (GEST[n]) return n; return GEST_ALIASES[n] || "rest"; }
  function gestTargets(name) {
    var gd = GEST[gestName(name)] || {};
    return { L: gd.L || REST.L, R: gd.R || REST.R };
  }
  S.GESTURES = GEST;
  // chibi arms: [left angle, right angle] in degrees from straight down (+ = outward/up)
  var CHIBI_ARMS = { rest: [14, 14], fist: [14, 128], "fist-up": [14, 160], point: [14, 92], "point-left": [92, 14], "point-up": [14, 150], think: [14, 140], wave: [14, 150], peace: [14, 140], thumbs: [14, 110], cheer: [158, 158], panic: [140, 140], glasses: [14, 150], explain: [14, 70], present: [70, 70], cross: [40, 40], clasp: [30, 30], ready: [60, 100], punch: [20, 94], "punch-left": [94, 20] };

  // ───────────────────────── art helpers ─────────────────────────
  function P2(x, y) { return fx(x) + "," + fx(y); }
  function faceD(tr) {
    var c = tr * 9;
    return "M-86,-34 C-88,-98 -48,-126 0,-126 C48,-126 88,-98 86,-34 C86,4 80,36 " + P2(60 + c * 0.4, 62) + " C" + P2(42 + c, 86) + " " + P2(18 + c, 104) + " " + P2(c, 107) + " C" + P2(-18 + c, 104) + " " + P2(-42 + c, 86) + " " + P2(-60 + c * 0.4, 62) + " C-80,36 -86,4 -86,-34Z";
  }
  /** front hair: cap over the skull from capL to capR, then locks along pts (right → left) */
  function bangsD(capL, capR, pts, top) {
    top = top || -156;
    var d = "M" + P2(capL[0], capL[1]) + " C" + P2(capL[0] - 8, -98) + " " + P2(-64, top) + " 0," + top + " C" + P2(64, top) + " " + P2(capR[0] + 8, -98) + " " + P2(capR[0], capR[1]);
    var prev = capR, all = pts.concat([capL]);
    for (var i = 0; i < all.length; i++) {
      var p = all[i];
      var c = p[1] > prev[1] ? [p[0], prev[1]] : [prev[0], p[1]];
      d += " Q" + P2(c[0], c[1]) + " " + P2(p[0], p[1]);
      prev = p;
    }
    return d + "Z";
  }
  /** jagged "angel ring" highlight band across the hair */
  function ringD(cy, hw) {
    var d = "M" + P2(-hw, cy + 16) + " Q0," + fx(cy - 22) + " " + P2(hw, cy + 16), n = 10;
    for (var k = n; k >= 0; k--) {
      var x = -hw + (2 * hw * k) / n, q = x / hw;
      var y = cy + 16 - 19 * (1 - q * q) + 9 + (k % 2 ? 9 : 0);
      d += " L" + P2(x, y);
    }
    return d + "Z";
  }
  var HAIR = {
    hikari: {
      back: "M-102,-10 C-118,-110 -64,-162 0,-162 C64,-162 118,-110 102,-10 L120,70 L96,58 L106,120 L78,94 L68,130 L44,102 L-44,102 L-68,130 L-78,94 L-106,120 L-96,58 L-120,70 Z",
      front: bangsD([-100, 40], [100, 40], [[86, 106], [64, -28], [52, 4], [34, -52], [20, 2], [2, -58], [-16, 4], [-32, -50], [-50, -2], [-64, -28], [-86, 106]]),
      extra: "M-4,-150 C-12,-198 42,-214 54,-182 C38,-198 14,-188 10,-150 Z",
      ring: [-106, 74],
    },
    ren: {
      back: "M-104,-20 C-116,-116 -64,-164 0,-164 C64,-164 116,-116 104,-20 L114,176 C92,206 -92,206 -114,176 Z",
      front: bangsD([-100, 40], [100, 40], [[92, 150], [70, -36], [58, -2], [40, -64], [22, -6], [0, -70], [-30, -8], [-46, -56], [-70, 14], [-78, -20], [-94, 150]]),
      ring: [-110, 72],
    },
    kaito: {
      back: "M-100,30 L-152,-28 L-108,-52 L-160,-112 L-92,-122 L-114,-196 L-36,-160 L-6,-224 L34,-162 L100,-202 L86,-126 L158,-120 L108,-60 L150,-20 L100,30 Z",
      front: bangsD([-98, 26], [98, 26], [[88, 74], [72, -40], [62, -12], [44, -62], [30, -22], [10, -66], [-8, -20], [-28, -64], [-44, -16], [-62, -50], [-86, 74]], -150),
      ring: [-118, 62],
    },
    yuki: {
      back: "M-106,-20 C-118,-118 -64,-166 0,-166 C64,-166 118,-118 106,-20 L152,330 L-152,330 Z",
      front: bangsD([-100, 40], [100, 40], [[100, 196], [68, 196], [68, -4], [54, 4], [42, -6], [28, 4], [14, -6], [0, 4], [-14, -6], [-28, 4], [-42, -6], [-54, 4], [-68, -4], [-68, 196], [-100, 196]]),
      ring: [-108, 76],
    },
  };
  var TORSO = "M-38,150 C-86,156 -142,166 -162,202 C-176,228 -182,320 -188,1100 L188,1100 C182,320 176,228 162,202 C142,166 86,156 38,150 Z";
  var NECK = "M-25,60 L-25,164 C-10,176 10,176 25,164 L25,60 Z";
  function inked(parent, d, fill, w, extra) {
    // outline pass under fill pass: clean silhouette lines
    var o = svgEl("path", { d: d, fill: INK, stroke: INK, "stroke-width": fx((w || LW) * 2), "stroke-linejoin": "round" }, parent);
    var f = svgEl("path", { d: d, fill: fill }, parent);
    if (extra) for (var k in extra) f.setAttribute(k, extra[k]);
    return { o: o, f: f };
  }
  function star4(cx, cy, r, thin) {
    var t = r * (thin || 0.22);
    return "M" + P2(cx, cy - r) + " Q" + P2(cx + t, cy - t) + " " + P2(cx + r, cy) + " Q" + P2(cx + t, cy + t) + " " + P2(cx, cy + r) + " Q" + P2(cx - t, cy + t) + " " + P2(cx - r, cy) + " Q" + P2(cx - t, cy - t) + " " + P2(cx, cy - r) + "Z";
  }
  S.star4 = star4;
  function spiralD(cx, cy, r, turns) {
    var d = "", n = 40;
    for (var i = 0; i <= n; i++) {
      var p = i / n, a = p * turns * 2 * PI, rr = r * p;
      d += (i ? " L" : "M") + P2(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr);
    }
    return d;
  }
  // hand art: wrist at origin, fingers toward +y
  function handArt(kind, skin) {
    var st = ' fill="' + skin + '" stroke="' + INK + '" stroke-width="' + LW + '" stroke-linejoin="round"';
    var fist = '<path d="M-19,6 C-22,22 -14,36 0,37 C15,37 22,24 19,7 C16,-3 -15,-3 -19,6Z"' + st + '/><path d="M-10,28 L10,28" stroke="' + INK + '" stroke-width="2.4" stroke-linecap="round" opacity=".5"/>';
    switch (kind) {
      case "fist": return fist;
      case "point": return '<rect x="-6.5" y="22" width="13" height="38" rx="6.5"' + st + "/>" + fist;
      case "peace": return '<rect x="-14" y="20" width="12" height="40" rx="6" transform="rotate(14 -8 22)"' + st + '/><rect x="2" y="20" width="12" height="40" rx="6" transform="rotate(-14 8 22)"' + st + "/>" + fist;
      case "thumb": return fist + '<rect x="-34" y="4" width="30" height="12" rx="6"' + st + "/>";
      default:
        return '<path d="M-18,-1 C-24,14 -22,36 -9,44 C4,50 19,42 20,25 C21,10 15,-2 0,-3 Z"' + st + '/><path d="M-16,8 C-30,10 -32,26 -21,28"' + st + "/>";
    }
  }
  function mouthShape(type, o, w) {
    w = w || 1;
    var r = { fill: null, line: null, teeth: null, tongue: null };
    var hw, h;
    switch (type) {
      case "smile": r.line = "M" + P2(-15 * w, -3) + " Q0,9 " + P2(15 * w, -3); break;
      case "hmm": r.line = "M-9,3 Q0,-2 10,0"; break;
      case "frown": r.line = "M-12,6 Q0,-4 12,6"; break;
      case "cat": r.line = "M-15,-3 Q-8,7 0,0 Q8,7 15,-3"; break;
      case "wobbly": r.line = "M-17,1 Q-13,-5 -9,0 Q-5,5 -1,0 Q3,-5 7,0 Q11,5 16,0"; break;
      case "open":
        hw = 13 * w; h = 6 + o * 17;
        r.fill = "M" + P2(-hw, 0) + " Q0,3 " + P2(hw, 0) + " Q0," + fx(h * 1.6) + " " + P2(-hw, 0) + "Z";
        r.tongue = [0, h * 0.55, hw * 0.5, h * 0.2];
        break;
      case "o":
        hw = 6 + o * 4; h = 7 + o * 8;
        r.fill = "M0," + fx(-h * 0.5) + " C" + P2(hw * 1.3, -h * 0.5) + " " + P2(hw * 1.3, h * 1.1) + " 0," + fx(h * 1.1) + " C" + P2(-hw * 1.3, h * 1.1) + " " + P2(-hw * 1.3, -h * 0.5) + " 0," + fx(-h * 0.5) + "Z";
        break;
      case "grit":
        if (o > 0.08) { hw = 16; h = 4 + o * 12; r.fill = "M" + P2(-hw, -3) + " L" + P2(hw, -3) + " L" + P2(hw - 3, h) + " L" + P2(-hw + 3, h) + "Z"; r.teeth = "M" + P2(-hw + 1, -2) + " L" + P2(hw - 1, -2) + " L" + P2(hw - 2, 3) + " L" + P2(-hw + 2, 3) + "Z"; }
        else { r.teeth = "M-16,-4 L16,-4 Q18,4 14,7 L-14,7 Q-18,4 -16,-4Z"; r.line = "M-14,1.5 L14,1.5"; }
        break;
      case "shout":
        hw = 16; h = 8 + o * 18;
        r.fill = "M" + P2(-hw * 1.15, -4) + " L" + P2(hw * 1.15, -6) + " L" + P2(hw * 0.75, h) + " L" + P2(-hw * 0.75, h) + "Z";
        r.teeth = "M" + P2(-hw * 1.05, -3.5) + " L" + P2(hw * 1.05, -5.5) + " L" + P2(hw, 1) + " L" + P2(-hw, 2) + "Z";
        r.tongue = [0, h * 0.8, hw * 0.45, h * 0.18];
        break;
      case "wail":
        h = 10 + o * 20;
        r.fill = "M-19,0 Q-10,-7 0,-1 Q10,-7 19,0 Q15," + fx(h * 1.3) + " 0," + fx(h * 1.35) + " Q-15," + fx(h * 1.3) + " -19,0Z";
        r.tongue = [0, h * 0.95, 9, h * 0.2];
        break;
      default: r.line = "M-10,0 Q0,3.5 10,0";
    }
    return r;
  }

  // ───────────────────────── Actor ─────────────────────────
  function luma(hex) { var c = hex2rgb(hex); return (0.299 * c[0] + 0.587 * c[1] + 0.114 * c[2]) / 255; }
  function facingVal(f, d) {
    if (f == null || f === "") return d;
    if (typeof f === "number") return clamp(f, -1, 1);
    var s = str(f).toLowerCase();
    return s === "left" ? -0.55 : s === "right" ? 0.55 : s === "front" || s === "camera" ? 0 : clamp(num(f, d), -1, 1);
  }
  var actorN = 0;
  function Actor(shot, name, opts) {
    opts = opts || {};
    this.shot = shot;
    this.id = castId(name, opts.index);
    this.c = CAST[this.id];
    this.n = actorN++;
    this.mascot = !!this.c.mascot;
    this.chibi = !!opts.chibi && !this.mascot;
    this.x0 = num(opts.x, shot.Ww / 2);
    this.y0 = num(opts.y, 420);
    this.s = num(opts.scale, 1.25);
    this.seed = (S.hash(this.id) % 997) + this.n * 13;
    this.exprs = [{ t: -1, name: exprName(opts.expression || this.c.expr) }];
    this.gests = [{ t: -1, name: gestName(opts.gesture || "rest"), dur: 0.01 }];
    this.turns = [{ t: -1, v: facingVal(opts.facing, 0), dur: 0.01 }];
    this.looks = [];
    this.talks = [];
    this.moves = [];
    this.hops = [];
    this.shakes = [];
    this.vis = [];
    this.glints = [];
    this.windAmt = num(opts.wind, 0);
    this.dirty = true;
    this.parent = opts.parent || shot.chars;
    this.build();
    shot.actors.push(this);
  }
  S.Actor = Actor;
  var AP = Actor.prototype;

  function makeEye(parent, side, c, mascot) {
    var E = { side: side, mascot: mascot, ex: side * (mascot ? 44 : 38), ey: mascot ? 2 : 14 };
    E.g = g(parent, { transform: "translate(" + E.ex + "," + E.ey + ")" });
    function Q(x, y) { return P2(x * side, y); }
    var N = (E.n = g(E.g));
    var lashD = "M" + Q(-24, -9) + " C" + Q(-14, -28) + " " + Q(14, -31) + " " + Q(27, -18) + " L" + Q(33, -23) + " L" + Q(28, -11) + " L" + Q(25, -6) + " C" + Q(13, -20) + " " + Q(-11, -20) + " " + Q(-21, -4) + "Z";
    if (!mascot) {
      var scl = "M" + Q(-20, -12) + " C" + Q(-10, -24) + " " + Q(12, -26) + " " + Q(22, -15) + " L" + Q(23, 17) + " C" + Q(15, 27) + " " + Q(-12, 27) + " " + Q(-20, 17) + "Z";
      svgEl("path", { d: scl, fill: "#FFFFFF" }, N);
      var cid = nid("e");
      var cp = svgEl("clipPath", { id: cid }, N);
      svgEl("path", { d: scl }, cp);
      var ic = g(N, { "clip-path": "url(#" + cid + ")" });
      E.iris = g(ic);
      svgEl("ellipse", { cx: 0, cy: 5, rx: 15.5, ry: 21, fill: c.eyeDark }, E.iris);
      svgEl("ellipse", { cx: 0, cy: 10, rx: 12.5, ry: 15, fill: c.eye }, E.iris);
      svgEl("ellipse", { cx: 0, cy: 16.5, rx: 9, ry: 7, fill: c.eyeLight }, E.iris);
      svgEl("ellipse", { cx: 0, cy: 5, rx: 6, ry: 9, fill: INK }, E.iris);
      svgEl("path", { d: "M-16,-9 Q0,-18 16,-9 L16,-4 Q0,-12 -16,-4Z", fill: INK, opacity: 0.35 }, E.iris);
      E.lash = svgEl("path", { d: lashD, fill: INK }, N);
      svgEl("path", { d: "M" + Q(-12, 25) + " Q" + Q(2, 30) + " " + Q(16, 22), fill: "none", stroke: c.eyeDark, "stroke-width": 2.6, "stroke-linecap": "round" }, N);
    } else {
      E.iris = g(N);
      svgEl("ellipse", { cx: 0, cy: 4, rx: 18, ry: 24, fill: c.eyeDark }, E.iris);
      svgEl("ellipse", { cx: 0, cy: 13, rx: 12, ry: 12, fill: c.eye }, E.iris);
      svgEl("ellipse", { cx: 0, cy: 19, rx: 7, ry: 5, fill: c.eyeLight }, E.iris);
    }
    E.hi = g(E.iris);
    svgEl("circle", { cx: -6, cy: -5, r: mascot ? 7.5 : 6.4, fill: "#FFFFFF" }, E.hi);
    svgEl("circle", { cx: 6, cy: 14, r: mascot ? 3.4 : 2.7, fill: "#FFFFFF" }, E.hi);
    E.spark = g(E.iris, { display: "none" });
    svgEl("path", { d: star4(-5, -3, mascot ? 13 : 11.5, 0.2), fill: "#FFFFFF" }, E.spark);
    svgEl("path", { d: star4(7, 13, mascot ? 6.5 : 5.5, 0.22), fill: "#FFFFFF" }, E.spark);
    svgEl("circle", { cx: -8, cy: 14, r: 2, fill: "#FFFFFF" }, E.spark);
    if (!mascot) {
      E.lid = svgEl("path", { fill: c.skin, display: "none" }, E.g);
      E.lidLine = svgEl("path", { fill: "none", stroke: INK, "stroke-width": 5.2, "stroke-linecap": "round", display: "none" }, E.g);
    }
    var lineA = { fill: "none", stroke: INK, "stroke-linecap": "round", "stroke-linejoin": "round", display: "none" };
    E.closed = svgEl("path", Object.assign({ d: "M" + Q(-22, 10) + " Q" + Q(0, 21) + " " + Q(24, 8) + " L" + Q(31, 3), "stroke-width": 4.6 }, lineA), E.g);
    E.happy = svgEl("path", Object.assign({ d: "M" + Q(-20, 16) + " Q" + Q(0, -9) + " " + Q(21, 16), "stroke-width": 5.6 }, lineA), E.g);
    E.shock = g(E.g, { display: "none" });
    svgEl("ellipse", { cx: 0, cy: 6, rx: 21, ry: 25, fill: "#FFFFFF", stroke: INK, "stroke-width": 2.6 }, E.shock);
    svgEl("circle", { cx: 0, cy: 8, r: 4.6, fill: INK }, E.shock);
    if (!mascot) svgEl("path", { d: lashD, fill: INK, transform: "translate(0,-4)" }, E.shock);
    E.spiral = svgEl("path", Object.assign({ d: spiralD(0, 6, 18, 2.6), "stroke-width": 3.2 }, lineA), E.g);
    E.cross = svgEl("path", Object.assign({ d: "M" + Q(15, -8) + " L" + Q(-12, 6) + " L" + Q(15, 20), "stroke-width": 5.6 }, lineA), E.g);
    return E;
  }
  function updateEye(E, v, open, look, iris, scaleX, scaleY, lid, lidA, t) {
    var normal = v === "normal" || v === "sparkle";
    var showN = normal && open > 0.16;
    setD(E.n, showN);
    setD(E.closed, v === "closed" || (normal && !showN));
    setD(E.happy, v === "happy");
    setD(E.shock, v === "shock");
    setD(E.spiral, v === "spiral");
    setD(E.cross, v === "cross");
    setA(E.g, "transform", "translate(" + E.ex + "," + E.ey + ") scale(" + fx(scaleX * 100) / 100 + "," + fx(scaleY * 100) / 100 + ")");
    if (v === "spiral") setA(E.spiral, "transform", "rotate(" + fx((t * 420 * E.side) % 360) + " 0 6)");
    if (v === "shock") setA(E.shock, "transform", "translate(" + fx(Math.sin(t * 60) * 0.8) + ",0)");
    if (showN) {
      setA(E.n, "transform", open > 0.98 ? "" : "translate(0,22) scale(1," + fx(open * 100) / 100 + ") translate(0,-22)");
      var lx = look ? look[0] : 0, ly = look ? look[1] : 0;
      setA(E.iris, "transform", "translate(" + fx(lx * 6) + "," + fx(ly * 5) + ")" + (iris !== 1 ? " scale(" + iris + ")" : ""));
      setD(E.spark, v === "sparkle");
      setD(E.hi, v !== "sparkle");
      if (v === "sparkle") setA(E.spark, "transform", "translate(-1,4) scale(" + fx((1 + 0.12 * Math.sin(t * 9)) * 100) / 100 + ") translate(1,-4)");
    }
    if (E.lid) {
      var on = showN && (lid > 0.02 || Math.abs(lidA) > 0.05);
      setD(E.lid, on); setD(E.lidLine, on);
      if (on) {
        var s = E.side, yi = -26 + lid * 40 + lidA * 11, yo = -26 + lid * 40 - lidA * 5, ym = (yi + yo) / 2 - 5;
        setA(E.lid, "d", "M" + P2(-32 * s, -50) + " L" + P2(34 * s, -50) + " L" + P2(34 * s, yo) + " Q" + P2(4 * s, ym) + " " + P2(-32 * s, yi) + "Z");
        setA(E.lidLine, "d", "M" + P2(-23 * s, yi + 1.5) + " Q" + P2(4 * s, ym + 1) + " " + P2(29 * s, yo + 1));
      }
    }
  }

  AP.build = function () {
    var c = this.c, H = HAIR[c.style];
    var root = (this.root = g(this.parent, { class: "an-actor an-" + this.id }));
    this.auraBack = g(root);
    var inner = (this.inner = g(root));
    var skinLine = { fill: "none", stroke: c.skinSh, "stroke-width": 3, "stroke-linecap": "round", "stroke-linejoin": "round" };
    if (this.mascot) {
      // ── Mochi ──
      this.ears = g(inner);
      this.earL = g(this.ears);
      inked(this.earL, "M-44,-92 C-76,-170 -98,-250 -70,-262 C-42,-272 -22,-190 -10,-104 Z", c.skin);
      svgEl("path", { d: "M-46,-118 C-66,-176 -80,-232 -68,-240 C-54,-246 -40,-186 -30,-122 Z", fill: c.ear }, this.earL);
      this.earR = g(this.ears);
      inked(this.earR, "M40,-96 C80,-156 140,-196 158,-174 C174,-152 110,-110 14,-100 Z", c.skin);
      svgEl("path", { d: "M50,-108 C86,-150 126,-176 140,-166 C150,-156 104,-124 46,-112 Z", fill: c.ear }, this.earR);
      this.head = g(inner);
      var blob = "M-112,36 C-122,-62 -62,-122 0,-122 C62,-122 122,-62 112,36 C106,106 62,130 0,130 C-62,130 -106,106 -112,36Z";
      inked(this.head, blob, c.skin);
      var mid = nid("m");
      var mcp = svgEl("clipPath", { id: mid }, this.head);
      svgEl("path", { d: blob }, mcp);
      svgEl("path", { d: "M130,-40 C120,60 70,118 -10,124 L-10,160 L160,160 L160,-40Z", fill: c.skinSh, "clip-path": "url(#" + mid + ")" }, this.head);
      inked(this.head, star4(0, -74, 17, 0.42), GOLD, 2);
      this.feat = g(this.head);
      this.feat2 = g(this.head);
      this.paws = g(inner);
      inked(this.paws, "M-62,108 C-62,92 -26,92 -26,110 C-26,126 -62,126 -62,108Z", c.skin, 2.6);
      inked(this.paws, "M62,108 C62,92 26,92 26,110 C26,126 62,126 62,108Z", c.skin, 2.6);
    } else {
      // ── back hair ──
      this.hairBack = g(inner);
      inked(this.hairBack, H.back, mix(c.hair, c.hairSh, 0.5));
      // ── body ──
      this.body = g(inner);
      if (this.chibi) this.buildChibiBody(); else this.buildBust();
      // ── head ──
      this.head = g(inner);
      var ears = g(this.head);
      [-1, 1].forEach(function (s) {
        svgEl("ellipse", { cx: s * 84, cy: 18, rx: 13, ry: 20, fill: c.skin, stroke: INK, "stroke-width": LW }, ears);
        svgEl("path", Object.assign({ d: "M" + P2(s * 86, 8) + " Q" + P2(s * 92, 20) + " " + P2(s * 84, 30) }, skinLine), ears);
      });
      this.faceO = svgEl("path", { d: faceD(0), fill: INK, stroke: INK, "stroke-width": LW * 2, "stroke-linejoin": "round" }, this.head);
      this.faceF = svgEl("path", { d: faceD(0), fill: c.skin }, this.head);
      var fid = nid("f");
      var fcp = svgEl("clipPath", { id: fid }, this.head);
      this.faceClip = svgEl("path", { d: faceD(0) }, fcp);
      var shadeG = g(this.head, { "clip-path": "url(#" + fid + ")" });
      svgEl("path", { d: "M66,-50 C84,-4 80,40 56,72 L110,72 L110,-50Z", fill: c.skinSh, opacity: 0.7 }, shadeG);
      this.bangShadow = g(shadeG);
      svgEl("path", { d: H.front, fill: c.skinSh, transform: "translate(4,14)" }, this.bangShadow);
      this.feat = g(this.head);
    }
    var feat = this.feat;
    // blush + hatch
    this.blush = g(feat);
    var by = this.mascot ? 40 : 48, bx = this.mascot ? 64 : 54;
    svgEl("ellipse", { cx: -bx, cy: by, rx: 19, ry: 9, fill: "#FF8FB0" }, this.blush);
    svgEl("ellipse", { cx: bx, cy: by, rx: 19, ry: 9, fill: "#FF8FB0" }, this.blush);
    this.hatch = g(feat, { display: "none" });
    [-1, 1].forEach(function (s) {
      for (var k = 0; k < 3; k++) svgEl("path", { d: "M" + P2(s * (bx - 14 + k * 10), by - 6) + " L" + P2(s * (bx - 14 + k * 10) - 6, by + 7), stroke: "#E8507A", "stroke-width": 2.8, "stroke-linecap": "round" }, this.hatch);
    }, this);
    // eyes
    this.eyes = [makeEye(feat, -1, c, this.mascot), makeEye(feat, 1, c, this.mascot)];
    // tears
    this.tears = g(feat, { display: "none" });
    [-1, 1].forEach(function (s) {
      svgEl("path", { d: "M" + P2(s * 40, 36) + " C" + P2(s * 36, 66) + " " + P2(s * 44, 96) + " " + P2(s * 40, 128) + " L" + P2(s * 54, 128) + " C" + P2(s * 58, 96) + " " + P2(s * 50, 66) + " " + P2(s * 54, 36) + "Z", fill: "#9FD8FF", opacity: 0.85 }, this.tears);
    }, this);
    if (!this.mascot) svgEl("path", Object.assign({ d: "M3,40 L-3,51 L4,52" }, skinLine), feat);
    // mouth
    this.mouthG = g(feat, { transform: "translate(0," + (this.mascot ? 50 : 76) + ")" });
    this.mFill = svgEl("path", { fill: "#9E2B4E", stroke: INK, "stroke-width": 2.8, "stroke-linejoin": "round" }, this.mouthG);
    this.mTongue = svgEl("ellipse", { fill: "#FF7FA0" }, this.mouthG);
    this.mTeeth = svgEl("path", { fill: "#FFFFFF", stroke: INK, "stroke-width": 2.2, "stroke-linejoin": "round" }, this.mouthG);
    this.mLine = svgEl("path", { fill: "none", stroke: INK, "stroke-width": 3.2, "stroke-linecap": "round", "stroke-linejoin": "round" }, this.mouthG);
    if (!this.mascot) this.buildFrontHair(H);
    // brows (see-through over the bangs)
    if (!this.mascot) {
      this.feat2 = g(this.head);
      var dark = luma(c.hair) < 0.35;
      this.brows = [-1, 1].map(function (s) {
        var under = dark ? svgEl("path", { fill: "none", stroke: c.hairHi, "stroke-width": 9, "stroke-linecap": "round", opacity: 0.85 }, this.feat2) : null;
        var b = svgEl("path", { fill: "none", stroke: dark ? INK : mix(c.hairSh, INK, 0.35), "stroke-width": 5.2, "stroke-linecap": "round" }, this.feat2);
        return { s: s, b: b, under: under };
      }, this);
      if (c.glasses) {
        var gl = (this.glasses = g(this.feat2));
        var lens = "M-68,-10 L-12,-10 L-12,34 L-62,34 Q-68,34 -68,28Z M68,-10 L12,-10 L12,34 L62,34 Q68,34 68,28Z";
        svgEl("path", { d: lens, fill: "rgba(220,230,255,0.22)", stroke: INK, "stroke-width": 3.4, "stroke-linejoin": "round" }, gl);
        svgEl("path", { d: "M-12,0 Q0,-6 12,0 M-68,-4 L-86,-8 M68,-4 L86,-8", fill: "none", stroke: INK, "stroke-width": 3.4, "stroke-linecap": "round" }, gl);
        var gid = nid("g");
        var gcp = svgEl("clipPath", { id: gid }, gl);
        svgEl("path", { d: lens }, gcp);
        var gg = g(gl, { "clip-path": "url(#" + gid + ")" });
        this.glintEl = svgEl("path", { d: "M-20,-30 L0,-30 L-40,50 L-60,50Z M8,-30 L16,-30 L-24,50 L-32,50Z", fill: "#FFFFFF", opacity: 0 }, gg);
        svgEl("path", { d: "M-60,-4 L-48,-4 M20,-4 L30,-4", stroke: "#FFFFFF", "stroke-width": 3, "stroke-linecap": "round", opacity: 0.8 }, gl);
      }
    }
    this.buildMarks();
    if (!this.mascot) {
      this.armsG = g(inner);
      if (this.chibi) this.buildChibiArms(); else this.buildArms();
    }
    // per-actor blink schedule (continuity: deterministic per character)
    var rnd = V.makeRand(this.seed * 31 + 7);
    var blinks = [], t = 0.5 + rnd() * 1.2;
    while (t < V.duration + 1) { blinks.push(t); if (rnd() < 0.2) blinks.push(t + 0.22); t += 1.9 + rnd() * 2.6; }
    this.blinks = blinks;
  };

  AP.buildFrontHair = function (H) {
    var c = this.c;
    var hf = (this.hairFront = g(this.head));
    if (H.extra) inked(hf, H.extra, c.hair);
    var bid = nid("h");
    inked(hf, H.front, c.hairSh);
    var bcp = svgEl("clipPath", { id: bid }, hf);
    svgEl("path", { d: H.front }, bcp);
    var inside = g(hf, { "clip-path": "url(#" + bid + ")" });
    svgEl("path", { d: H.front, fill: c.hair, transform: "translate(-3,-12)" }, inside);
    svgEl("path", { d: ringD(H.ring[0], H.ring[1]), fill: c.hairHi, opacity: 0.85 }, inside);
    // strand lines
    svgEl("path", { d: "M-40,-120 Q-46,-80 -40,-40 M20,-128 Q16,-90 24,-44 M58,-112 Q66,-80 62,-36 M-74,-90 Q-84,-40 -76,10", fill: "none", stroke: c.hairSh, "stroke-width": 3, "stroke-linecap": "round", opacity: 0.6 }, inside);
    if (c.style === "hikari") {
      inked(hf, star4(74, -64, 19, 0.42), GOLD, 2.4);
      svgEl("circle", { cx: 74, cy: -64, r: 4, fill: "#FFFFFF" }, hf);
    } else if (c.style === "kaito") {
      this.bandTails = g(hf);
      inked(this.bandTails, "M94,-58 Q132,-74 168,-58 L162,-40 Q130,-56 98,-42 Z M96,-52 Q126,-42 150,-14 L136,-4 Q118,-30 94,-40 Z", c.band, 2.6);
      inked(hf, "M-100,-70 Q0,-104 100,-70 L102,-46 Q0,-80 -102,-46 Z", c.band, 2.8);
      svgEl("path", { d: "M-60,-80 Q0,-96 60,-80", fill: "none", stroke: shade(c.band, 0.35), "stroke-width": 3.5, "stroke-linecap": "round" }, hf);
      svgEl("rect", { x: 40, y: 50, width: 34, height: 15, rx: 5, fill: "#FFE1C2", stroke: INK, "stroke-width": 2.4, transform: "rotate(-18 57 57)" }, this.feat);
    } else if (c.style === "yuki") {
      svgEl("rect", { x: -88, y: -78, width: 30, height: 8, rx: 4, fill: "#4FD8FF", stroke: INK, "stroke-width": 2.4, transform: "rotate(-24 -73 -74)" }, hf);
      svgEl("rect", { x: -86, y: -64, width: 30, height: 8, rx: 4, fill: "#FF8FB0", stroke: INK, "stroke-width": 2.4, transform: "rotate(-24 -71 -60)" }, hf);
    }
  };

  AP.buildBust = function () {
    var c = this.c, b = this.body;
    inked(b, NECK, c.skin);
    svgEl("path", { d: "M-25,80 C-10,104 10,104 25,80 L25,116 C10,128 -10,128 -25,116Z", fill: c.skinSh }, b);
    inked(b, TORSO, c.top);
    svgEl("path", { d: "M118,186 C150,198 164,240 170,306 L182,1100 L134,1100 C128,500 126,300 118,186Z", fill: c.topSh }, b);
    var o = c.outfit;
    if (o === "sailor") {
      svgEl("path", { d: "M-30,150 L0,236 L30,150Z", fill: c.skin }, b);
      inked(b, "M-38,150 C-74,156 -122,168 -146,192 C-134,230 -104,256 -62,266 L0,340 L62,266 C104,256 134,230 146,192 C122,168 74,156 38,150 L0,240 Z", c.collar, 3);
      svgEl("path", { d: "M-34,162 C-70,168 -110,180 -130,196 C-118,226 -94,246 -58,254 L0,322 L58,254 C94,246 118,226 130,196 C110,180 70,168 34,162", fill: "none", stroke: "#FFFFFF", "stroke-width": 4.5 }, b);
      var bow = g(b);
      inked(bow, "M-4,262 C-34,236 -76,240 -68,266 C-62,290 -26,282 -4,268 Z M4,262 C34,236 76,240 68,266 C62,290 26,282 4,268 Z", c.tie, 3);
      inked(bow, "M-8,268 L-34,350 L-16,346 L-2,276 Z M8,268 L34,350 L16,346 L2,276 Z", shade(c.tie, -0.12), 3);
      inked(bow, "M-12,256 L12,256 L10,280 L-10,280 Z", shade(c.tie, -0.2), 3);
    } else if (o === "labcoat") {
      inked(b, "M-42,148 L42,148 L36,360 L0,430 L-36,360 Z", c.inner, 3);
      inked(b, "M-34,124 C-20,134 20,134 34,124 L40,170 C20,182 -20,182 -40,170 Z", shade(c.inner, 0.18), 3);
      inked(b, "M-44,152 L-38,362 L-80,296 L-64,226 L-104,204 Z", c.top, 3);
      inked(b, "M44,152 L38,362 L80,296 L64,226 L104,204 Z", c.topSh, 3);
      svgEl("path", { d: "M74,340 L132,340", stroke: INK, "stroke-width": 3, "stroke-linecap": "round" }, b);
      svgEl("rect", { x: 92, y: 318, width: 7, height: 26, rx: 2, fill: ACC, stroke: INK, "stroke-width": 2 }, b);
      svgEl("rect", { x: 104, y: 322, width: 7, height: 22, rx: 2, fill: CYAN, stroke: INK, "stroke-width": 2 }, b);
    } else if (o === "gakuran") {
      inked(b, "M-36,118 L36,118 L42,172 C20,184 -20,184 -42,172 Z", c.topSh, 3);
      svgEl("path", { d: "M0,184 L0,1100", stroke: shade(c.top, 0.18), "stroke-width": 3 }, b);
      [226, 296, 366].forEach(function (y) {
        svgEl("circle", { cx: 0, cy: y, r: 10, fill: c.button, stroke: INK, "stroke-width": 2.6 }, b);
        svgEl("circle", { cx: -3, cy: y - 3, r: 3, fill: "#FFFFFF" }, b);
      });
      svgEl("path", { d: "M-150,206 C-162,250 -168,310 -172,420", fill: "none", stroke: shade(c.top, 0.3), "stroke-width": 6, "stroke-linecap": "round" }, b);
      svgEl("path", { d: "M-40,130 L-32,166", stroke: shade(c.top, 0.35), "stroke-width": 3, "stroke-linecap": "round" }, b);
    } else {
      inked(b, "M-42,150 L42,150 L20,336 L0,356 L-20,336 Z", "#FFFFFF", 3);
      inked(b, "M-40,150 L-6,192 L-30,212 L-54,164 Z M40,150 L6,192 L30,212 L54,164 Z", "#FFFFFF", 2.6);
      var rb = g(b);
      inked(rb, "M-2,196 C-26,176 -56,184 -50,202 C-44,218 -18,212 -2,202 Z M2,196 C26,176 56,184 50,202 C44,218 18,212 2,202 Z", c.tie, 2.6);
      inked(rb, "M-8,192 L8,192 L7,208 L-7,208 Z", shade(c.tie, -0.2), 2.4);
      svgEl("path", { d: "M-42,150 L-20,336 M42,150 L20,336", stroke: c.topSh, "stroke-width": 6 }, b);
      [270, 320].forEach(function (y) { svgEl("circle", { cx: 34, cy: y, r: 6, fill: "#FFFFFF", stroke: INK, "stroke-width": 2 }, b); });
    }
  };

  AP.buildChibiBody = function () {
    var c = this.c, b = this.body;
    var cuff = c.outfit === "sailor" ? c.collar : c.outfit === "gakuran" ? c.topSh : c.outfit === "labcoat" ? c.inner : c.topSh;
    this.legs = g(b);
    [-1, 1].forEach(function (s) {
      inked(this.legs, "M" + P2(s * 30 - 13, 200) + " L" + P2(s * 30 + 13, 200) + " L" + P2(s * 30 + 12, 262) + " L" + P2(s * 30 - 12, 262) + "Z", c.outfit === "gakuran" ? c.top : c.skin, 3);
      inked(this.legs, "M" + P2(s * 30 - 18, 256) + " C" + P2(s * 30 - 20, 276) + " " + P2(s * 30 + s * 30, 282) + " " + P2(s * 30 + s * 26, 262) + " C" + P2(s * 30 + s * 20, 250) + " " + P2(s * 30 - 12, 248) + " " + P2(s * 30 - 18, 256) + "Z", c.outfit === "sailor" ? "#5A3A2E" : INK, 2.6);
    }, this);
    if (c.outfit === "sailor") inked(b, "M-70,196 L70,196 L84,236 L-84,236 Z", c.collar, 3);
    inked(b, "M-50,98 C-68,104 -78,124 -78,152 L-80,214 C-56,224 56,224 80,214 L78,152 C78,124 68,104 50,98 Z", c.top, 3);
    svgEl("path", { d: "M44,108 C62,118 68,140 68,160 L70,212 L52,216 Z", fill: c.topSh }, b);
    if (c.outfit === "sailor") {
      inked(b, "M-50,98 L-74,124 C-60,140 -30,146 0,170 C30,146 60,140 74,124 L50,98 L0,140 Z", c.collar, 2.6);
      inked(b, "M-4,150 C-24,132 -46,138 -40,154 C-34,168 -16,162 -4,156 Z M4,150 C24,132 46,138 40,154 C34,168 16,162 4,156 Z", c.tie, 2.4);
    } else if (c.outfit === "labcoat") {
      inked(b, "M-26,100 L26,100 L16,190 L0,206 L-16,190 Z", c.inner, 2.6);
    } else if (c.outfit === "gakuran") {
      [136, 170, 204].forEach(function (y) { svgEl("circle", { cx: 0, cy: y, r: 6.5, fill: c.button, stroke: INK, "stroke-width": 2 }, b); });
    } else {
      inked(b, "M-26,100 L26,100 L12,180 L0,190 L-12,180 Z", "#FFFFFF", 2.6);
      inked(b, "M-2,116 C-18,104 -36,110 -32,122 C-28,134 -12,128 -2,122 Z M2,116 C18,104 36,110 32,122 C28,134 12,128 2,122 Z", c.tie, 2.2);
    }
    this.cuffCol = cuff;
  };

  AP.buildArms = function () {
    var c = this.c;
    var sleeve = c.top, cuff = c.outfit === "sailor" ? c.collar : c.outfit === "gakuran" ? c.button : c.outfit === "labcoat" ? c.topSh : c.topSh;
    this.arms = {};
    ["L", "R"].forEach(function (k) {
      var o = svgEl("path", { fill: "none", stroke: INK, "stroke-width": ARMW + LW * 2, "stroke-linecap": "round", "stroke-linejoin": "round" }, this.armsG);
      var f = svgEl("path", { fill: "none", stroke: sleeve, "stroke-width": ARMW, "stroke-linecap": "round", "stroke-linejoin": "round" }, this.armsG);
      var cf = svgEl("path", { fill: "none", stroke: cuff, "stroke-width": ARMW - 4, "stroke-linecap": "butt" }, this.armsG);
      var hand = g(this.armsG);
      this.arms[k] = { o: o, f: f, cf: cf, hand: hand, kind: "" };
    }, this);
  };
  AP.buildChibiArms = function () {
    var c = this.c;
    this.arms = {};
    ["L", "R"].forEach(function (k) {
      var o = svgEl("path", { fill: "none", stroke: INK, "stroke-width": 30 + LW * 2, "stroke-linecap": "round" }, this.armsG);
      var f = svgEl("path", { fill: "none", stroke: c.top, "stroke-width": 30, "stroke-linecap": "round" }, this.armsG);
      var hand = svgEl("circle", { r: 15, fill: c.skin, stroke: INK, "stroke-width": LW }, this.armsG);
      this.arms[k] = { o: o, f: f, hand: hand };
    }, this);
  };

  AP.buildMarks = function () {
    var M = (this.marks = {});
    var top = this.mascot ? -110 : -96;
    M.sweat = g(this.head, { display: "none" });
    svgEl("path", { d: "M0,-30 C12,-9 19,2 19,12 C19,24 10,31 0,31 C-10,31 -19,24 -19,12 C-19,2 -12,-9 0,-30Z", fill: "#BFE7FF", stroke: INK, "stroke-width": 2.8 }, M.sweat);
    svgEl("ellipse", { cx: -6, cy: 12, rx: 4, ry: 7, fill: "#FFFFFF" }, M.sweat);
    M.vein = g(this.head, { display: "none" });
    svgEl("path", { d: "M-16,-4 Q-6,-6 -4,-16 M4,-16 Q6,-6 16,-4 M16,4 Q6,6 4,16 M-4,16 Q-6,6 -16,4", fill: "none", stroke: "#E8344E", "stroke-width": 5.5, "stroke-linecap": "round" }, M.vein);
    M.gloom = g(this.head, { display: "none", opacity: 0.55 });
    for (var i = 0; i < 7; i++) svgEl("path", { d: "M" + P2(-54 + i * 18, top - 8) + " L" + P2(-54 + i * 18, top + 44 + (i % 2) * 14), stroke: "#6C6A9C", "stroke-width": 3.4, "stroke-linecap": "round" }, M.gloom);
    M.shock = g(this.head, { display: "none" });
    [-150, -120, -90, -60, -30].forEach(function (a) {
      var ca = Math.cos(a * D2R), sa = Math.sin(a * D2R);
      svgEl("path", { d: "M" + P2(ca * 168, sa * 168 - 10) + " L" + P2(ca * 204, sa * 204 - 10), stroke: INK, "stroke-width": 5, "stroke-linecap": "round" }, M.shock);
    });
    M.sparkles = g(this.head, { display: "none" });
    this.sparkList = [[-132, -96, 20], [126, -40, 15], [100, -156, 12], [-112, 30, 10]].map(function (p) {
      var s = g(M.sparkles);
      svgEl("path", { d: star4(0, 0, p[2], 0.25), fill: "#FFFFFF", stroke: ACC, "stroke-width": 2.2, "stroke-linejoin": "round" }, s);
      return { g: s, x: p[0], y: p[1] };
    });
  };

  // ── channels (public API, chainable; `at` in seconds) ──
  function ord(list) { list.sort(function (a, b) { return a.t - b.t; }); }
  AP.expression = function (name, at) { this.exprs.push({ t: clampT(at == null ? 0 : at), name: exprName(name) }); this.dirty = true; return this; };
  AP.expr = AP.expression;
  AP.gesture = function (name, at, dur) { this.gests.push({ t: clampT(at == null ? 0 : at), name: gestName(name), dur: num(dur, 0.18) }); this.dirty = true; return this; };
  AP.pose = AP.gesture;
  AP.face = function (dir, at, dur) { this.turns.push({ t: clampT(at == null ? 0 : at), v: facingVal(dir, 0), dur: num(dur, 0.2) }); this.dirty = true; return this; };
  AP.look = function (x, y, at) { this.looks.push({ t: clampT(at == null ? 0 : at), x: clamp(num(x, 0), -1, 1), y: clamp(num(y, 0), -1, 1) }); this.dirty = true; return this; };
  AP.lookAt = function (target, at) {
    var x = 0, y = 0;
    if (target === "left") x = -1; else if (target === "right") x = 1; else if (target === "up") y = -1; else if (target === "down") y = 1;
    else if (target && target.x0 != null) x = target.x0 < this.x0 ? -1 : 1;
    else if (target && target.x != null) { x = clamp((target.x - this.x0) / 300, -1, 1); y = clamp(((target.y || this.y0) - this.y0) / 300, -1, 1); }
    return this.look(x, y, at);
  };
  AP.say = function (from, to) { from = clampT(from); to = Math.max(from + 0.1, num(to, from + 1)); this.talks.push({ s: from, e: to }); this.dirty = true; return this; };
  AP.talk = AP.say;
  AP.moveTo = function (x, y, at, dur, ease) {
    this.moves.push({ t: clampT(at == null ? 0 : at), x: x == null ? null : num(x, 0), y: y == null ? null : num(y, 0), dur: Math.max(0.01, num(dur, 0.35)), ease: ease || "smear" });
    this.dirty = true; return this;
  };
  AP.slideIn = function (side, at, dur) {
    var sw = this.shot.Ww, tx = this.x0;
    this.x0 = side === "right" ? sw + 420 * (this.s / 1.25) : side === "bottom" ? tx : -420 * (this.s / 1.25);
    var ty = this.y0;
    if (side === "bottom") this.y0 = ty + 900;
    return this.moveTo(tx, ty, at, dur == null ? 0.3 : dur, "whip");
  };
  AP.hop = function (at, h, dur) { this.hops.push({ t: clampT(at), h: num(h, 40), d: num(dur, 0.32) }); return this; };
  AP.shake = function (at, dur, amp) { this.shakes.push({ t: clampT(at), d: num(dur, 0.5), a: num(amp, 8) }); return this; };
  AP.show = function (at) { this.vis.push({ t: clampT(at), on: true }); this.dirty = true; return this; };
  AP.hide = function (at) { this.vis.push({ t: clampT(at), on: false }); this.dirty = true; return this; };
  AP.glint = function (at) { this.glints.push(clampT(at)); return this; };
  AP.wind = function (amt) { this.windAmt = num(amt, 1); return this; };
  /** acting beats synced to words: [{ word?, at?, expression?, gesture?, look?, face?, hop? }] */
  AP.beats = function (list, opts) {
    opts = opts || {};
    var after = opts.after || 0, last = opts.start || 0.3, step = opts.step || 1.4, self = this;
    arr(list).forEach(function (b, i) {
      if (!b) return;
      var t = b.at != null ? clampT(b.at) : syncAt(b.word, after, last + (i ? step : 0), 0.15);
      if (b.word && V.find(b.word, after) != null) after = t + 0.05;
      last = t;
      if (b.expression) self.expression(b.expression, t);
      if (b.gesture) self.gesture(b.gesture, t);
      if (b.look) self.lookAt(b.look, t);
      if (b.face) self.face(b.face, t);
      if (b.hop) self.hop(t, 36);
    });
    return this;
  };

  AP.compile = function () {
    ord(this.exprs); ord(this.gests); ord(this.turns); ord(this.looks); ord(this.moves); ord(this.vis);
    this.talks.sort(function (a, b) { return a.s - b.s; });
    // gesture snapshots
    this.gSnap = [];
    for (var i = 0; i < this.gests.length; i++) this.gSnap[i] = i === 0 ? this.gTarget(0, 0) : this.gEval(this.gests[i].t, i - 1);
    this.tSnap = [];
    for (i = 0; i < this.turns.length; i++) this.tSnap[i] = i === 0 ? this.turns[0].v : this.turnEval(this.turns[i].t, i - 1);
    var x = this.x0, y = this.y0;
    for (i = 0; i < this.moves.length; i++) {
      var m = this.moves[i], p = this.posEval(m.t, i - 1);
      m.fx = p.x; m.fy = p.y;
    }
    // talk words
    var W = words(), tw = [];
    this.talks.forEach(function (tk, ti) {
      var any = false;
      for (var j = 0; j < W.length; j++) {
        var w = W[j];
        if (w.start >= tk.s - 0.05 && w.start < tk.e) { tw.push({ s: w.start, e: Math.min(w.end, tk.e + 0.1), n: syllables(w.word), k: 0.6 + 0.4 * hash01(j + 3) }); any = true; }
      }
      if (!any) {
        var t = tk.s, k = 0;
        while (t < tk.e - 0.1) { var d = 0.2 + hash01(ti * 31 + k) * 0.22; tw.push({ s: t, e: Math.min(tk.e, t + d), n: 1 + (k % 3 === 0 ? 1 : 0), k: 0.7 + 0.3 * hash01(k + 9) }); t += d + 0.06 + (k % 6 === 5 ? 0.2 : 0); k++; }
      }
    });
    tw.sort(function (a, b) { return a.s - b.s; });
    this.tw = tw;
    this.dirty = false;
  };
  AP.gTarget = function (i, lt) {
    var gd = this.gests[i], tg = gestTargets(gd.name);
    var L = tg.L.slice(), R = tg.R.slice();
    if (gd.name === "wave") { R[0] += Math.sin(lt * 13) * 34; R[1] += Math.cos(lt * 13) * 8; }
    else if (gd.name === "cheer") { var b = Math.abs(Math.sin(lt * 8)) * 26; L[1] -= b; R[1] -= b; }
    else if (gd.name === "panic") { L[0] += Math.sin(lt * 30) * 6; R[0] -= Math.sin(lt * 30) * 6; }
    else if (gd.name === "point" || gd.name === "point-left") { var k = lt < 0.25 ? Math.sin((lt / 0.25) * PI) * 14 : 0; R[0] += k; L[0] -= k; }
    return { L: L, R: R, name: gd.name };
  };
  AP.gEval = function (t, lim) {
    var n = lim == null ? this.gests.length - 1 : lim, idx = 0;
    for (var i = 0; i <= n; i++) if (this.gests[i].t <= t) idx = i;
    var gd = this.gests[idx], tgt = this.gTarget(idx, Math.max(0, t - gd.t));
    if (idx === 0) return tgt;
    var from = this.gSnap[idx], p = clamp((t - gd.t) / gd.dur, 0, 1), e = EASE.pop(p);
    return {
      L: [lerp(from.L[0], tgt.L[0], e), lerp(from.L[1], tgt.L[1], e), p < 0.4 ? from.L[2] : tgt.L[2]],
      R: [lerp(from.R[0], tgt.R[0], e), lerp(from.R[1], tgt.R[1], e), p < 0.4 ? from.R[2] : tgt.R[2]],
      name: p < 0.5 ? from.name : tgt.name,
    };
  };
  AP.turnEval = function (t, lim) {
    var n = lim == null ? this.turns.length - 1 : lim, idx = 0;
    for (var i = 0; i <= n; i++) if (this.turns[i].t <= t) idx = i;
    if (idx === 0) return this.turns[0].v;
    var k = this.turns[idx];
    return lerp(this.tSnap[idx], k.v, sm((t - k.t) / k.dur));
  };
  AP.posEval = function (t, lim) {
    var x = this.x0, y = this.y0, n = lim == null ? this.moves.length - 1 : lim;
    for (var i = 0; i <= n; i++) {
      var m = this.moves[i];
      if (m.t > t) break;
      var p = easeFn(m.ease)(clamp((t - m.t) / m.dur, 0, 1));
      var fx0 = m.fx != null ? m.fx : x, fy0 = m.fy != null ? m.fy : y;
      x = m.x == null ? fx0 : lerp(fx0, m.x, p);
      y = m.y == null ? fy0 : lerp(fy0, m.y, p);
    }
    return { x: x, y: y };
  };
  AP.exprAt = function (t) {
    var idx = 0;
    for (var i = 0; i < this.exprs.length; i++) if (this.exprs[i].t <= t) idx = i;
    return { e: E(this.exprs[idx].name), t0: this.exprs[idx].t, name: this.exprs[idx].name };
  };
  AP.mouthOpen = function (t) {
    var W = this.tw;
    if (!W || !W.length) return 0;
    var lo = 0, hi = W.length - 1, idx = -1;
    while (lo <= hi) { var mid = (lo + hi) >> 1; if (W[mid].s <= t) { idx = mid; lo = mid + 1; } else hi = mid - 1; }
    if (idx < 0) return 0;
    var w = W[idx];
    if (t > w.e + 0.07) return 0;
    var len = Math.max(0.06, w.e - w.s), p = clamp((t - w.s) / len, 0, 1);
    var a = Math.pow(Math.abs(Math.sin(p * w.n * PI)), 0.7) * w.k;
    if (t > w.e) a *= 1 - (t - w.e) / 0.07;
    return a;
  };
  AP.isTalking = function (t) { for (var i = 0; i < this.talks.length; i++) if (t >= this.talks[i].s && t <= this.talks[i].e + 0.1) return true; return false; };
  AP.visibleAt = function (t) {
    var on = true;
    for (var i = 0; i < this.vis.length; i++) { if (this.vis[i].t > t) break; on = this.vis[i].on; }
    if (this.vis.length && this.vis[0].on && t < this.vis[0].t) on = false;
    return on;
  };
  /** world position of the head centre at time t */
  AP.headAt = function (t) { if (this.dirty) this.compile(); return this.posEval(t); };

  function ik(sx, sy, tx, ty) {
    var dx = tx - sx, dy = ty - sy, d = Math.sqrt(dx * dx + dy * dy) || 1;
    var dd = clamp(d, Math.abs(L1 - L2) + 2, L1 + L2 - 0.5);
    tx = sx + (dx / d) * dd; ty = sy + (dy / d) * dd;
    var base = Math.atan2(ty - sy, tx - sx), a = Math.acos(clamp((L1 * L1 + dd * dd - L2 * L2) / (2 * L1 * dd), -1, 1));
    var e1 = [sx + Math.cos(base + a) * L1, sy + Math.sin(base + a) * L1], e2 = [sx + Math.cos(base - a) * L1, sy + Math.sin(base - a) * L1];
    var e = e1[1] > e2[1] ? e1 : e2;
    return { ex: e[0], ey: e[1], tx: tx, ty: ty };
  }

  AP.update = function (t) {
    if (this.dirty) this.compile();
    var vis = this.visibleAt(t);
    setD(this.root, vis);
    if (!vis) return;
    var c = this.c;
    var ex = this.exprAt(t), e = ex.e, since = t - ex.t0;
    var pos = this.posEval(t);
    var x = pos.x, y = pos.y, k;
    for (k = 0; k < this.hops.length; k++) { var h = this.hops[k], lp = (t - h.t) / h.d; if (lp >= 0 && lp <= 1) y -= Math.sin(lp * PI) * h.h; }
    for (k = 0; k < this.shakes.length; k++) { var sh = this.shakes[k], ls = t - sh.t; if (ls >= 0 && ls <= sh.d) x += noise(ls * 40, 3 + k) * sh.a * (1 - ls / sh.d); }
    if (e.eyes === "spiral" || ex.name === "panic") x += Math.sin(t * 46) * 2.5;
    var talking = this.isTalking(t);
    var open = this.mouthOpen(t);
    var bob = talking ? noise(t * 3.2, this.seed) * 2.2 : 0;
    var breath = Math.sin(t * 2.1 + this.seed) * (this.mascot ? 6 : 1.6);
    var pop = since >= 0 && since < 0.14 ? 1 + 0.035 * Math.sin((since / 0.14) * PI) : 1;
    var sc = this.s;
    setA(this.root, "transform", "translate(" + fx(x) + "," + fx(y + breath) + ") scale(" + fx(sc * 1000) / 1000 + ")");
    var tilt = e.tilt + bob + (this.mascot ? Math.sin(t * 1.7) * 3 : 0);
    var turn = this.turnEval(t);
    setA(this.head, "transform", "rotate(" + fx(tilt) + " 0 90)" + (pop !== 1 ? " translate(0,90) scale(" + fx(pop * 1000) / 1000 + ") translate(0,-90)" : ""));
    // face turn
    var fo = fx(turn * 12);
    setA(this.feat, "transform", "translate(" + fo + ",0)");
    if (this.feat2) setA(this.feat2, "transform", "translate(" + fo + ",0)");
    if (!this.mascot) {
      var fd = faceD(Math.round(turn * 20) / 20);
      setA(this.faceO, "d", fd); setA(this.faceF, "d", fd); setA(this.faceClip, "d", fd);
      var wind = this.windAmt;
      var hs = Math.sin(t * 1.4 + this.seed) * 0.7 + (wind ? Math.sin(t * 9 + this.seed) * 2.2 * wind : 0);
      setA(this.hairFront, "transform", "translate(" + fx(turn * 5) + ",0) rotate(" + fx(hs * 0.4) + " 0 -120)");
      setA(this.bangShadow, "transform", "translate(" + fx(turn * 5) + ",0)");
      setA(this.hairBack, "transform", "translate(" + fx(-turn * 6) + ",0) rotate(" + fx(hs) + " 0 -100)");
      if (this.bandTails) setA(this.bandTails, "transform", "rotate(" + fx(Math.sin(t * (wind ? 14 : 4)) * (wind ? 9 : 4)) + " 96 -52)");
    } else {
      setA(this.earL, "transform", "rotate(" + fx(Math.sin(t * 2.2) * 4) + " -26 -100)");
      setA(this.earR, "transform", "rotate(" + fx(Math.sin(t * 2.2 + 1) * 5) + " 26 -100)");
      setA(this.feat, "transform", "translate(" + fo + ",0)");
    }
    // eyes
    var bl = 1;
    for (k = 0; k < this.blinks.length; k++) { var bt = t - this.blinks[k]; if (bt >= 0 && bt < 0.13) { bl = Math.abs(bt - 0.065) / 0.065; break; } if (this.blinks[k] > t) break; }
    if (since >= 0 && since < 0.08 && (e.eyes === "normal" || e.eyes === "sparkle")) bl = Math.min(bl, 0.6 + since * 5);
    var look = e.look;
    if (!look) {
      var lk = null;
      for (k = 0; k < this.looks.length; k++) if (this.looks[k].t <= t) lk = this.looks[k];
      look = lk ? [lk.x, lk.y] : [turn * 0.5, 0];
    }
    var es = e.eyeS;
    for (k = 0; k < 2; k++) {
      var E2 = this.eyes[k], far = E2.side * turn > 0;
      var sx = es * (far ? 1 - 0.2 * Math.abs(turn) : 1 + 0.04 * Math.abs(turn));
      updateEye(E2, e.eyes, bl, look, e.iris, sx, es, e.lid, e.lidA, t);
    }
    // brows
    if (this.brows) {
      for (k = 0; k < 2; k++) {
        var B = this.brows[k], s = B.s;
        var asym = e.bs ? (s > 0 ? -8 : 2) : 0;
        var yi = -26 + e.by - e.ba * 9 + asym, yo = -30 + e.by + e.ba * 3 + asym;
        if (e.eyes === "shock") { yi -= 4; yo -= 4; }
        var d = "M" + P2(s * 16, yi) + " Q" + P2(s * 40, Math.min(yi, yo) - 7) + " " + P2(s * 66, yo);
        setA(B.b, "d", d);
        if (B.under) setA(B.under, "d", d);
      }
    }
    // mouth
    var mt = e.mouth, mo = e.mo;
    if (talking && open > 0.06) {
      if (mt === "line" || mt === "smile" || mt === "hmm" || mt === "frown" || mt === "cat" || mt === "wobbly") { mt = "open"; mo = open * 0.85; }
      else if (mt === "grit") mo = open;
      else mo = Math.max(mo * 0.6, open) * (mt === "open" ? 1 : 0.9);
    } else if (mt === "open" || mt === "o" || mt === "wail" || mt === "shout") {
      mo = mo * (talking ? 0.45 : 1);
    }
    if (mt === "wail") mo += Math.sin(t * 20) * 0.08;
    var key = mt + ":" + Math.round(mo * 40);
    if (this._mk !== key) {
      this._mk = key;
      var ms = mouthShape(mt, clamp(mo, 0, 1.1), this.mascot ? 0.8 : e.mw);
      setD(this.mFill, !!ms.fill); if (ms.fill) setA(this.mFill, "d", ms.fill);
      setD(this.mLine, !!ms.line); if (ms.line) setA(this.mLine, "d", ms.line);
      setD(this.mTeeth, !!ms.teeth); if (ms.teeth) setA(this.mTeeth, "d", ms.teeth);
      setD(this.mTongue, !!ms.tongue);
      if (ms.tongue) { setA(this.mTongue, "cx", fx(ms.tongue[0])); setA(this.mTongue, "cy", fx(ms.tongue[1])); setA(this.mTongue, "rx", fx(ms.tongue[2])); setA(this.mTongue, "ry", fx(ms.tongue[3])); }
    }
    setA(this.blush, "opacity", fx(clamp(e.blush, 0, 1) * 0.75 * 100) / 100);
    var mk = {};
    e.marks.forEach(function (m) { mk[m] = true; });
    setD(this.hatch, !!mk.hatch);
    setD(this.tears, !!mk.tears);
    if (mk.tears) setA(this.tears, "opacity", fx((0.7 + 0.3 * Math.sin(t * 8)) * 100) / 100);
    var M = this.marks;
    setD(M.sweat, !!mk.sweat);
    if (mk.sweat) setA(M.sweat, "transform", "translate(" + (this.mascot ? 104 : 96) + "," + fx(-96 + Math.min(1, since * 1.5) * 16) + ") scale(" + fx((1 + 0.06 * Math.sin(t * 6)) * 100) / 100 + ")");
    setD(M.vein, !!mk.vein);
    if (mk.vein) setA(M.vein, "transform", "translate(-76,-98) scale(" + fx((1 + 0.18 * Math.abs(Math.sin(t * 7))) * 100) / 100 + ")");
    setD(M.gloom, !!mk.gloom);
    setD(M.shock, !!mk.shock && since < 1.4);
    if (mk.shock) setA(M.shock, "transform", "translate(0,-20) scale(" + fx((0.85 + 0.15 * EASE.pop(clamp(since / 0.2, 0, 1))) * 100) / 100 + ") translate(0,20)");
    setD(M.sparkles, !!mk.sparkles);
    if (mk.sparkles) this.sparkList.forEach(function (sp, i) {
      var tw = 0.55 + 0.45 * Math.sin(t * 7 + i * 1.9);
      setA(sp.g, "transform", "translate(" + sp.x + "," + sp.y + ") scale(" + fx(tw * 100) / 100 + ") rotate(" + fx(t * 40 + i * 20) + ")");
    });
    // glasses glint
    if (this.glintEl) {
      var go = 0, gx = 0;
      for (k = 0; k < this.glints.length; k++) { var gt = t - this.glints[k]; if (gt >= 0 && gt < 0.45) { go = Math.sin((gt / 0.45) * PI); gx = lerp(-40, 120, gt / 0.45); } }
      setA(this.glintEl, "opacity", fx(go * 100) / 100);
      setA(this.glintEl, "transform", "translate(" + fx(gx) + ",0)");
    }
    // arms
    if (this.arms) {
      var gs = this.gEval(t);
      if (this.chibi) this.updateChibiArms(gs, t);
      else this.updateArms(gs);
    }
  };
  AP.updateArms = function (gs) {
    var self = this;
    ["L", "R"].forEach(function (k) {
      var A = self.arms[k], tg = gs[k], s = k === "L" ? -1 : 1;
      var sx = s * SH.x, sy = SH.y;
      var r = ik(sx, sy, tg[0], tg[1]);
      var d = "M" + P2(sx, sy) + " L" + P2(r.ex, r.ey) + " L" + P2(r.tx, r.ty);
      setA(A.o, "d", d); setA(A.f, "d", d);
      var dx = r.tx - r.ex, dy = r.ty - r.ey, len = Math.sqrt(dx * dx + dy * dy) || 1;
      setA(A.cf, "d", "M" + P2(r.tx - (dx / len) * 22, r.ty - (dy / len) * 22) + " L" + P2(r.tx - (dx / len) * 10, r.ty - (dy / len) * 10));
      var ang = (Math.atan2(dy, dx) * 180) / PI - 90;
      setA(A.hand, "transform", "translate(" + P2(r.tx, r.ty) + ") rotate(" + fx(ang) + ")" + (s < 0 ? " scale(-1,1)" : ""));
      if (A.kind !== tg[2]) { A.kind = tg[2]; A.hand.innerHTML = handArt(tg[2], self.c.skin); }
    });
  };
  AP.updateChibiArms = function (gs, t) {
    var a = CHIBI_ARMS[gs.name] || CHIBI_ARMS.rest, self = this;
    if (!this._ca) this._ca = { L: a[0], R: a[1] };
    ["L", "R"].forEach(function (k, i) {
      var A = self.arms[k], s = k === "L" ? -1 : 1, ang = a[i];
      if (gs.name === "wave" && k === "R") ang += Math.sin(t * 13) * 20;
      if (gs.name === "cheer" || gs.name === "panic") ang += Math.sin(t * 16 + i) * 10;
      var r = ang * D2R, sx = s * 60, sy = 122;
      var ex2 = sx + s * Math.sin(r) * 62, ey2 = sy + Math.cos(r) * 62;
      var d = "M" + P2(sx, sy) + " L" + P2(ex2, ey2);
      setA(A.o, "d", d); setA(A.f, "d", d);
      setA(A.hand, "cx", fx(ex2)); setA(A.hand, "cy", fx(ey2));
    });
  };

  // ───────────────────────── film (cut list) ─────────────────────────
  var film = null;
  function Film(root) {
    root = root || V.root();
    root.classList.add("an-root");
    this.root = root;
    var W = V.width, H = V.height;
    this.W = W; this.H = H; this.k = H / 1000; this.Ww = (1000 * W) / H;
    this.portrait = V.isPortrait; this.square = V.isSquare; this.landscape = !V.isPortrait && !V.isSquare;
    this.view = el("div.an-view", { parent: root });
    this.svg = svgEl("svg", { class: "an-svg", viewBox: "0 0 " + fx(this.Ww) + " 1000", width: W, height: H, preserveAspectRatio: "none" });
    this.view.appendChild(this.svg);
    this.defs = svgEl("defs", null, this.svg);
    this.shotsG = g(this.svg);
    this.htmlLayer = el("div.an-hl", { parent: this.view });
    this.cutSvg = svgEl("svg", { class: "an-svg an-cutsvg", viewBox: "0 0 " + fx(this.Ww) + " 1000", width: W, height: H, preserveAspectRatio: "none" });
    this.view.appendChild(this.cutSvg);
    this.ui = el("div.an-ui", { parent: root });
    this.top = el("div.an-top", { parent: root });
    this.topSvg = svgEl("svg", { class: "an-svg", viewBox: "0 0 " + fx(this.Ww) + " 1000", width: W, height: H, preserveAspectRatio: "none" });
    this.top.appendChild(this.topSvg);
    this.flashEl = el("div.an-flash", { parent: this.top });
    this.shots = []; this.cuts = []; this.impacts = []; this.flashes = []; this.shakes = []; this.filters = []; this.fns = []; this.streaks = [];
    film = this;
    var self = this;
    V.onFrame(function (t) { self.update(t); });
  }
  S.Film = Film;
  var FP = Film.prototype;
  FP.shot = function (loc, from, to, opts) { return new Shot(this, loc, from, to, opts); };
  FP.onFrame = function (f) { this.fns.push(f); };
  FP.activeShot = function (t) {
    var act = null, first = null, i, s;
    for (i = 0; i < this.shots.length; i++) {
      s = this.shots[i];
      if (!first || s.from < first.from) first = s;
      if (t >= s.from && t < s.to) act = s;
    }
    if (!act) {
      var best = null;
      for (i = 0; i < this.shots.length; i++) { s = this.shots[i]; if (s.from <= t && (!best || s.to >= best.to)) best = s; }
      act = best || first;
    }
    return act;
  };
  FP.update = function (t) {
    var act = this.activeShot(t), i;
    for (i = 0; i < this.shots.length; i++) this.shots[i].setVisible(this.shots[i] === act);
    if (act) act.update(t);
    for (i = 0; i < this.cuts.length; i++) this.cuts[i](t);
    // film shake
    var ox = 0, oy = 0;
    for (i = 0; i < this.shakes.length; i++) {
      var s = this.shakes[i], ls = t - s.t;
      if (ls < 0 || ls > s.d) continue;
      var amp = s.a * Math.pow(1 - ls / s.d, 1.5);
      ox += noise(ls * 34, 3 + i) * amp; oy += noise(ls * 37, 9 + i) * amp;
    }
    setS(this.view, "transform", ox || oy ? "translate(" + fx(ox * this.k) + "px," + fx(oy * this.k) + "px)" : "");
    // impact frames, flashes, colour filters
    var filt = "", flash = 0, fcol = "#FFFFFF";
    for (i = 0; i < this.filters.length; i++) { var f = this.filters[i]; if (t >= f.from && t < f.to) filt = f.filter; }
    for (i = 0; i < this.impacts.length; i++) {
      var im = this.impacts[i], li = t - im.t;
      if (li >= 0 && li < im.inv) filt = (li < im.inv * 0.5 ? "invert(1) grayscale(1) contrast(2.4)" : "grayscale(1) contrast(2.6)");
    }
    for (i = 0; i < this.flashes.length; i++) {
      var fl = this.flashes[i], lf = t - fl.t;
      if (lf >= 0 && lf < fl.d) { var a = 1 - lf / fl.d; if (a * fl.a > flash) { flash = a * fl.a; fcol = fl.c; } }
    }
    setS(this.view, "filter", filt);
    setS(this.flashEl, "opacity", flash > 0.001 ? String(fx(flash * 100) / 100) : "0");
    setS(this.flashEl, "background", fcol);
    for (i = 0; i < this.streaks.length; i++) this.streaks[i](t);
    for (i = 0; i < this.fns.length; i++) this.fns[i](t);
  };
  FP.shake = function (at, amp, dur) { this.shakes.push({ t: clampT(at), a: num(amp, 14), d: num(dur, 0.4) }); return this; };
  FP.flash = function (at, color, dur, alpha) { this.flashes.push({ t: clampT(at), c: color || "#FFFFFF", d: num(dur, 0.3), a: num(alpha, 1) }); return this; };
  FP.filter = function (from, to, css) { this.filters.push({ from: from, to: to, filter: css }); return this; };
  /** impact frame: 2–4 frames of inverted B/W negative + burst lines + white flash + shake */
  FP.impact = function (at, opts) {
    opts = opts || {};
    at = clampT(at);
    this.impacts.push({ t: at, inv: opts.invert === false ? 0 : num(opts.dur, 0.12) });
    this.flash(at + (opts.invert === false ? 0 : 0.1), opts.flash || "#FFFFFF", 0.32, 0.85);
    this.shake(at, num(opts.shake, 18), 0.45);
    var cx = num(opts.x, this.Ww / 2), cy = num(opts.y, 500);
    var gB = g(this.topSvg, { display: "none" }), rnd = V.makeRand(Math.round(at * 1000) + 77), d = "", R = Math.max(this.Ww, 1000) * 1.3;
    for (var i = 0; i < 34; i++) {
      var a = (i / 34) * 2 * PI + rnd() * 0.12, w = 0.025 + rnd() * 0.035, r0 = 120 + rnd() * 160;
      d += "M" + P2(cx + Math.cos(a) * r0, cy + Math.sin(a) * r0) + " L" + P2(cx + Math.cos(a - w) * R, cy + Math.sin(a - w) * R) + " L" + P2(cx + Math.cos(a + w) * R, cy + Math.sin(a + w) * R) + "Z";
    }
    svgEl("path", { d: d, fill: INK, opacity: 0.9 }, gB);
    var self = this;
    this.streaks.push(function (t) { setD(gB, t >= at && t < at + 0.16); });
    return this;
  };
  /** whip-pan streak overlay around a cut */
  FP.streak = function (at, dir, color) {
    at = clampT(at);
    var gS = g(this.topSvg, { display: "none" }), rnd = V.makeRand(Math.round(at * 997) + 5), d = "", Ww = this.Ww;
    for (var i = 0; i < 40; i++) {
      var y = rnd() * 1000, h = 2 + rnd() * 9, x = rnd() * Ww * 1.4 - Ww * 0.2, w = Ww * (0.3 + rnd() * 0.6);
      d += "M" + P2(x, y) + " L" + P2(x + w, y - h / 2) + " L" + P2(x + w, y + h / 2) + "Z";
    }
    var p = svgEl("path", { d: d, fill: color || "#FFFFFF", opacity: 0.85 }, gS);
    var bgR = svgEl("rect", { x: -10, y: -10, width: Ww + 20, height: 1020, fill: color === INK ? "#FFFFFF" : MUTED, opacity: 0.25 }, gS);
    gS.insertBefore(bgR, p);
    var sgn = dir === "right" ? 1 : -1;
    this.streaks.push(function (t) {
      var lt = t - at + 0.06, on = lt >= 0 && lt < 0.24;
      setD(gS, on);
      if (on) setA(gS, "transform", "translate(" + fx(sgn * (lt / 0.24 - 0.5) * Ww * 0.6) + ",0)");
    });
    return this;
  };

  // ───────────────────────── shot ─────────────────────────
  function Shot(film, loc, from, to, opts) {
    opts = opts || {};
    this.film = film; this.opts = opts;
    this.Ww = film.Ww; this.k = film.k; this.portrait = film.portrait; this.square = film.square; this.landscape = film.landscape;
    this.from = from == null || from <= 0 ? -1 : from;
    this.to = to == null ? 1e9 : to;
    this.g = g(film.shotsG, { display: "none", class: "an-shot" });
    this.far = g(this.g);
    this.under = g(this.g);
    this.world = g(this.g);
    this.near = g(this.world);
    this.chars = g(this.world);
    this.wfx = g(this.world);
    this.over = g(this.g);
    this.html = el("div.an-shtml", { parent: film.htmlLayer });
    this.html.style.display = "none";
    this.actors = []; this.fns = [];
    this.cam = new Cam(this);
    this.enter = opts.enter || "cut";
    this.location = locName(loc);
    this.vis = null;
    drawLocation(this, this.location, opts);
    film.shots.push(this);
    if (opts.enter && opts.enter.indexOf("whip") === 0 && this.from > 0) film.streak(this.from, opts.enter === "whip-right" ? "right" : "left");
  }
  S.Shot = Shot;
  var SP = Shot.prototype;
  SP.character = function (name, opts) { return new Actor(this, name, opts); };
  SP.onFrame = function (f) { this.fns.push(f); return this; };
  SP.setVisible = function (v) {
    if (this.vis === v) return;
    this.vis = v;
    this.g.setAttribute("display", v ? "inline" : "none");
    this.html.style.display = v ? "block" : "none";
  };
  /** standard framings → { x, y, scale } for a character (world units). side: "left" | "center" | "right" */
  SP.frame = function (kind, side) {
    var Ww = this.Ww, P = this.portrait, Q = this.square;
    var sx = side === "left" ? (P ? 0.5 : Q ? 0.3 : 0.28) : side === "right" ? (P ? 0.5 : Q ? 0.7 : 0.72) : 0.5;
    if (typeof side === "number") sx = side;
    var f;
    switch (kind) {
      case "wide": f = { y: P ? 640 : 560, scale: P ? 0.82 : 0.86 }; break;
      case "close": f = { y: P ? 600 : 470, scale: P ? 1.75 : Q ? 1.85 : 2.0 }; break;
      case "extreme": f = { y: 470, scale: P ? 2.6 : 3.1 }; break;
      case "low": f = { y: P ? 560 : 470, scale: P ? 1.35 : 1.45 }; break;
      case "chibi": f = { y: P ? 560 : 420, scale: P ? 1.0 : 1.05 }; break;
      default: f = { y: P ? 560 : 430, scale: P ? 1.12 : Q ? 1.22 : 1.3 };
    }
    f.x = Ww * sx;
    return f;
  };
  SP.update = function (t) {
    var c = this.cam.eval(t), Ww = this.Ww, i;
    var tr = "translate(" + fx(Ww / 2 + c.ox) + "," + fx(500 + c.oy) + ") scale(" + fx(c.z * 1000) / 1000 + ") translate(" + fx(-c.x) + "," + fx(-c.y) + ")";
    setA(this.world, "transform", tr);
    var p = 0.3, zf = 1 + (c.z - 1) * p, xf = Ww / 2 + (c.x - Ww / 2) * p, yf = 500 + (c.y - 500) * p;
    setA(this.far, "transform", "translate(" + fx(Ww / 2 + c.ox) + "," + fx(500 + c.oy) + ") scale(" + fx(zf * 1000) / 1000 + ") translate(" + fx(-xf) + "," + fx(-yf) + ")");
    setA(this.over, "transform", c.ox || c.oy ? "translate(" + fx(c.ox * 0.5) + "," + fx(c.oy * 0.5) + ")" : "");
    var k = this.k;
    setS(this.html, "transform", "translate(" + fx((Ww / 2 + c.ox) * k) + "px," + fx((500 + c.oy) * k) + "px) scale(" + fx(c.z * 1000) / 1000 + ") translate(" + fx(-c.x * k) + "px," + fx(-c.y * k) + "px)");
    for (i = 0; i < this.actors.length; i++) this.actors[i].update(t);
    for (i = 0; i < this.fns.length; i++) this.fns[i](t);
  };

  // ───────────────────────── camera ─────────────────────────
  function Cam(shot) { this.sh = shot; this.base = { x: shot.Ww / 2, y: 500, z: 1 }; this.kf = []; this.shakes = []; this.drift = 1; this.dirty = true; }
  S.Cam = Cam;
  var CP = Cam.prototype;
  CP.set = function (o) { o = o || {}; if (o.x != null) this.base.x = num(o.x, this.base.x); if (o.y != null) this.base.y = num(o.y, this.base.y); if (o.zoom != null) this.base.z = num(o.zoom, 1); this.dirty = true; return this; };
  CP.to = function (o, at, dur, ease) { o = o || {}; this.kf.push({ t: clampT(at == null ? 0 : at), d: Math.max(0, num(dur, 0.8)), e: ease || "inOutCubic", x: o.x, y: o.y, z: o.zoom != null ? o.zoom : o.z }); this.dirty = true; return this; };
  CP.cut = function (o, at) { return this.to(o, at, 0); };
  CP.push = function (zoom, at, dur, o) { o = o || {}; o.zoom = zoom; return this.to(o, at, dur == null ? 2 : dur, "inOutSine"); };
  CP.focus = function (actor, at, dur, zoom, dy) { return this.to({ x: actor.x0, y: actor.y0 + num(dy, 60), zoom: zoom == null ? 1.4 : zoom }, at, dur == null ? 0.25 : dur, "smear"); };
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
    c.x += noise(t * 0.35, 11) * 3 * this.drift; c.y += noise(t * 0.3, 23) * 2 * this.drift;
    for (i = 0; i < this.shakes.length; i++) {
      var s = this.shakes[i], ls = t - s.t;
      if (ls < 0 || ls > s.d) continue;
      var amp = s.rumble ? s.a * Math.min(1, ls / 0.3, (s.d - ls) / 0.3) : s.a * Math.pow(1 - ls / s.d, 1.4);
      ox += noise(ls * (s.rumble ? 22 : 30), 3 + i) * amp; oy += noise(ls * (s.rumble ? 25 : 33), 7 + i) * amp;
    }
    // shot entrance transitions
    var sh = this.sh, le = t - sh.from;
    if (sh.from > 0 && le >= 0 && le < 0.3) {
      var en = sh.enter;
      if (en === "whip-left" || en === "whip-right") { var pw = EASE.whip(clamp(le / 0.22, 0, 1)); ox += (en === "whip-left" ? 1 : -1) * (1 - pw) * sh.Ww * 0.55; }
      else if (en === "zoom") c.z *= 1 + 0.35 * (1 - EASE.whip(clamp(le / 0.25, 0, 1)));
      else if (en === "drop") oy -= (1 - EASE.snap(clamp(le / 0.28, 0, 1))) * 260;
      else if (en === "rise") oy += (1 - EASE.whip(clamp(le / 0.25, 0, 1))) * 300;
    }
    c.ox = ox; c.oy = oy;
    return c;
  };

  // ───────────────────────── effects ─────────────────────────
  function rectFull(Ww, fill, extra) { return '<rect x="-60" y="-60" width="' + fx(Ww + 120) + '" height="1120" fill="' + fill + '"' + (extra || "") + "/>"; }
  function gradDef(shot, id, stops, x2, y2) {
    var defs = shot.film.defs;
    var lg = svgEl("linearGradient", { id: id, x1: 0, y1: 0, x2: x2 == null ? 0 : x2, y2: y2 == null ? 1 : y2 }, defs);
    stops.forEach(function (s) { svgEl("stop", { offset: s[0], "stop-color": s[1], "stop-opacity": s[2] == null ? 1 : s[2] }, lg); });
    return "url(#" + id + ")";
  }
  function radDef(shot, id, stops) {
    var rg = svgEl("radialGradient", { id: id, cx: 0.5, cy: 0.5, r: 0.5 }, shot.film.defs);
    stops.forEach(function (s) { svgEl("stop", { offset: s[0], "stop-color": s[1], "stop-opacity": s[2] == null ? 1 : s[2] }, rg); });
    return "url(#" + id + ")";
  }
  function fadeWin(t, from, to, fin, fout) {
    if (t < from || t > to) return 0;
    return Math.min(1, fin ? (t - from) / fin : 1, fout ? (to - t) / fout : 1);
  }
  /** radial focus lines (anime concentration lines). layer "over" (default) or "under" (+ bg fill) */
  SP.focusLines = function (from, to, opts) {
    opts = opts || {};
    var Ww = this.Ww, cx = num(opts.x, Ww / 2), cy = num(opts.y, 470), lay = opts.layer === "under" ? this.under : this.over;
    var G = g(lay, { display: "none" });
    if (opts.bg) G.innerHTML = rectFull(Ww, opts.bg);
    var R = Math.max(Ww, 1000) * 1.2, ri = num(opts.inner, Math.min(Ww, 1000) * (this.portrait ? 0.42 : 0.36)), n = opts.count || 110;
    var vars = [];
    for (var v = 0; v < 3; v++) {
      var rnd = V.makeRand(Math.round(from * 100) + v * 31 + 3), d = "";
      for (var i = 0; i < n; i++) {
        var a = (i / n) * 2 * PI + rnd() * 0.05, w = 0.004 + rnd() * 0.014, r0 = ri * (0.8 + rnd() * 0.55);
        var ry = this.portrait ? 1.35 : 0.8;
        d += "M" + P2(cx + Math.cos(a) * r0, cy + Math.sin(a) * r0 * ry) + " L" + P2(cx + Math.cos(a - w) * R, cy + Math.sin(a - w) * R) + " L" + P2(cx + Math.cos(a + w) * R, cy + Math.sin(a + w) * R) + "Z";
      }
      vars.push(svgEl("path", { d: d, fill: opts.color || INK, display: "none" }, G));
    }
    this.onFrame(function (t) {
      var a = fadeWin(t, from, to, 0.06, 0.15);
      setD(G, a > 0);
      if (a <= 0) return;
      setA(G, "opacity", fx(a * num(opts.opacity, 0.9) * 100) / 100);
      var k = Math.floor(t * 14) % 3;
      for (var j = 0; j < 3; j++) setD(vars[j], j === k);
    });
    return G;
  };
  /** speed lines. dir "h" (default) | "v" | "up" | "diag"; bg = backdrop colour (replaces the location) */
  SP.speedLines = function (from, to, opts) {
    opts = opts || {};
    var Ww = this.Ww, lay = opts.layer === "over" ? this.over : this.under;
    var G = g(lay, { display: "none" });
    if (opts.bg) G.innerHTML = rectFull(Ww, opts.bg) + (opts.bg2 ? '<rect x="-60" y="-60" width="' + fx(Ww + 120) + '" height="1120" fill="' + opts.bg2 + '"/>' : "");
    var dir = opts.dir || "h", vert = dir === "v" || dir === "up", n = opts.count || 54, vars = [];
    var span = vert ? Ww : 1000, len = vert ? 1000 : Ww;
    for (var v = 0; v < 3; v++) {
      var rnd = V.makeRand(Math.round(from * 100) + v * 17 + 11), d = "";
      for (var i = 0; i < n; i++) {
        var p = rnd() * span, w = 1.5 + rnd() * 7, L = len * (0.25 + rnd() * 0.7), s0 = rnd() * len * 1.2 - len * 0.2;
        if (vert) d += "M" + P2(p - w / 2, s0) + " L" + P2(p + w / 2, s0) + " L" + P2(p, s0 + L) + "Z";
        else d += "M" + P2(s0, p - w / 2) + " L" + P2(s0 + L, p) + " L" + P2(s0, p + w / 2) + "Z";
      }
      vars.push(svgEl("path", { d: d, fill: opts.color || "#FFFFFF", opacity: opts.lineOpacity || 0.9, display: "none" }, G));
    }
    var rot = dir === "diag" ? -24 : 0;
    this.onFrame(function (t) {
      var a = fadeWin(t, from, to, 0.05, 0.12);
      setD(G, a > 0);
      if (a <= 0) return;
      setA(G, "opacity", fx(a * 100) / 100);
      var k = Math.floor(t * 15) % 3, off = ((t * 2600) % 400) - 200;
      for (var j = 0; j < 3; j++) setD(vars[j], j === k);
      var tr = vert ? "translate(0," + fx(dir === "up" ? -off : off) + ")" : "translate(" + fx(-off) + ",0)";
      if (rot) tr = "rotate(" + rot + " " + fx(Ww / 2) + " 500) " + tr + " scale(1.3)";
      setA(G, "transform", tr);
    });
    return G;
  };
  /** twinkling four-point sparkles (screen space) */
  SP.sparkles = function (from, to, opts) {
    opts = opts || {};
    var Ww = this.Ww, G = g(opts.layer === "under" ? this.under : this.over, { display: "none" });
    var area = opts.area || { x: 0, y: 0, w: Ww, h: 1000 }, n = opts.count || 14, rnd = V.makeRand(Math.round(from * 50) + 101), list = [];
    for (var i = 0; i < n; i++) {
      var s = g(G), r = (opts.size || 22) * (0.5 + rnd());
      svgEl("path", { d: star4(0, 0, r, 0.2), fill: i % 3 === 0 ? (opts.color2 || GOLD) : (opts.color || "#FFFFFF"), stroke: opts.stroke || "none", "stroke-width": 2 }, s);
      list.push({ g: s, x: area.x + rnd() * area.w, y: area.y + rnd() * area.h, ph: rnd() * 6, sp: 4 + rnd() * 5 });
    }
    this.onFrame(function (t) {
      var a = fadeWin(t, from, to, 0.2, 0.3);
      setD(G, a > 0);
      if (a <= 0) return;
      for (var j = 0; j < list.length; j++) {
        var L = list[j], tw = Math.max(0, Math.sin(t * L.sp + L.ph));
        setA(L.g, "transform", "translate(" + fx(L.x) + "," + fx(L.y - (t - from) * 12) + ") scale(" + fx(tw * a * 100) / 100 + ")");
      }
    });
    return G;
  };
  /** falling sakura petals (screen space) */
  SP.petals = function (from, to, opts) {
    opts = opts || {};
    var Ww = this.Ww, G = g(opts.layer === "under" ? this.under : this.over, { display: "none" });
    var n = opts.count || (this.portrait ? 16 : 24), rnd = V.makeRand(Math.round(from * 10) + 404), list = [], col = opts.color || "#FFC1D9";
    for (var i = 0; i < n; i++) {
      var pg = g(G), s = 0.7 + rnd() * 0.9;
      svgEl("path", { d: "M0,-11 C9,-8 11,6 2,12 L0,9 L-2,12 C-11,6 -9,-8 0,-11Z", fill: i % 4 === 0 ? "#FF9FC4" : col, stroke: "#E46A9C", "stroke-width": 1.2 }, pg);
      list.push({ g: pg, x: rnd() * (Ww + 200) - 100, y: rnd() * 1100, vx: -(20 + rnd() * 50), vy: 50 + rnd() * 60, s: s * (opts.size || 1.6), ph: rnd() * 6, f: 1 + rnd() * 1.5 });
    }
    this.onFrame(function (t) {
      var a = fadeWin(t, from, to, 0.3, 0.3);
      setD(G, a > 0);
      if (a <= 0) return;
      for (var j = 0; j < list.length; j++) {
        var L = list[j];
        var x = ((L.x + t * L.vx + Math.sin(t * L.f + L.ph) * 30) % (Ww + 200) + (Ww + 200)) % (Ww + 200) - 100;
        var y = ((L.y + t * L.vy) % 1100) - 50;
        setA(L.g, "transform", "translate(" + fx(x) + "," + fx(y) + ") rotate(" + fx(t * 90 * L.f + L.ph * 50) + ") scale(" + fx(L.s * (0.6 + 0.4 * Math.abs(Math.cos(t * L.f * 1.7 + L.ph)))) + "," + fx(L.s) + ")");
      }
    });
    return G;
  };
  /** power-up aura (flames) behind an actor, with rising sparks and a shockwave ring on ignition */
  SP.aura = function (actor, from, to, opts) {
    opts = opts || {};
    var col = opts.color || ACC, col2 = opts.color2 || shade(col, 0.55);
    var G = g(actor.auraBack, { display: "none" }), vars = [];
    var chibi = actor.chibi || actor.mascot;
    var cx = 0, cy = chibi ? 60 : 160, rx = chibi ? 190 : 250, ry = chibi ? 260 : 360;
    for (var v = 0; v < 3; v++) {
      var rnd = V.makeRand(v * 29 + 7 + actor.n), n = 13;
      for (var layer = 0; layer < 2; layer++) {
        var s = layer ? 0.8 : 1, pts = [], i;
        for (i = 0; i <= n; i++) { var a = PI + (i / n) * PI; pts.push([cx + Math.cos(a) * rx * s, cy + Math.sin(a) * ry * s]); }
        var dd = "M" + P2(cx - rx * s, 1200) + " L" + P2(pts[0][0], pts[0][1]);
        for (i = 0; i < n; i++) {
          var A0 = pts[i], B0 = pts[i + 1], am = PI + ((i + 0.5) / n) * PI, Ln = (70 + rnd() * 120) * s;
          var tx = (A0[0] + B0[0]) / 2 + Math.cos(am) * Ln * 0.5 + (rnd() - 0.5) * 30, ty = (A0[1] + B0[1]) / 2 + Math.sin(am) * Ln * 0.4 - Ln * 0.7;
          dd += " Q" + P2(lerp(A0[0], tx, 0.6) - 8, lerp(A0[1], ty, 0.3)) + " " + P2(tx, ty) + " Q" + P2(lerp(B0[0], tx, 0.4) + 8, lerp(B0[1], ty, 0.6)) + " " + P2(B0[0], B0[1]);
        }
        dd += " L" + P2(cx + rx * s, 1200) + "Z";
        vars.push(svgEl("path", { d: dd, fill: layer ? col2 : col, opacity: layer ? 0.85 : 0.78, display: "none", stroke: layer ? "none" : INK, "stroke-width": layer ? 0 : 4, "stroke-linejoin": "round" }, G));
      }
    }
    var parts = [], rnd2 = V.makeRand(actor.n * 7 + 3);
    for (var p = 0; p < 18; p++) parts.push({ e: svgEl("rect", { width: 6, height: 26 + rnd2() * 30, rx: 3, fill: p % 2 ? "#FFFFFF" : col2 }, G), x: (rnd2() - 0.5) * rx * 2.2, ph: rnd2(), sp: 0.8 + rnd2() * 0.9 });
    var ring = svgEl("ellipse", { cx: cx, cy: cy, rx: rx, ry: ry * 0.6, fill: "none", stroke: "#FFFFFF", "stroke-width": 10, display: "none" }, actor.auraBack);
    var grow = num(opts.grow, 0.6);
    this.onFrame(function (t) {
      var a = fadeWin(t, from, to, 0.12, 0.25);
      setD(G, a > 0);
      var lr = t - from;
      setD(ring, lr >= 0 && lr < 0.45);
      if (lr >= 0 && lr < 0.45) { var pr = lr / 0.45; setA(ring, "transform", "translate(0," + cy + ") scale(" + fx((0.4 + pr * 1.3) * 100) / 100 + ") translate(0," + -cy + ")"); setA(ring, "opacity", fx((1 - pr) * 100) / 100); }
      if (a <= 0) return;
      var k = Math.floor(t * 12) % 3;
      for (var j = 0; j < vars.length; j++) setD(vars[j], Math.floor(j / 2) === k);
      var sc = (1 - grow) + grow * sm(lr / 0.8);
      setA(G, "transform", "translate(0," + fx(cy) + ") scale(" + fx(sc * (1 + 0.03 * Math.sin(t * 20)) * 1000) / 1000 + "," + fx(sc * (1 + 0.05 * Math.sin(t * 16)) * 1000) / 1000 + ") translate(0," + fx(-cy) + ")");
      setA(G, "opacity", fx(a * 100) / 100);
      for (j = 0; j < parts.length; j++) {
        var P = parts[j], ph = ((t * P.sp + P.ph) % 1);
        setA(P.e, "transform", "translate(" + fx(P.x) + "," + fx(cy + ry * 0.6 - ph * ry * 1.6) + ")");
        setA(P.e, "opacity", fx(Math.sin(ph * PI) * 100) / 100);
      }
    });
    actor.wind(Math.max(actor.windAmt, 1));
    return G;
  };
  /** spiky impact star in screen space */
  SP.burst = function (at, opts) {
    opts = opts || {};
    at = clampT(at);
    var G = g(this.over, { display: "none" }), cx = num(opts.x, this.Ww / 2), cy = num(opts.y, 500), r = num(opts.r, 160), n = opts.points || 14, rnd = V.makeRand(Math.round(at * 100) + 9), d = "";
    for (var i = 0; i < n * 2; i++) {
      var a = (i / (n * 2)) * 2 * PI, rr = i % 2 ? r * (0.45 + rnd() * 0.15) : r * (0.85 + rnd() * 0.35);
      d += (i ? " L" : "M") + P2(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr);
    }
    svgEl("path", { d: d + "Z", fill: opts.color || "#FFFFFF", stroke: INK, "stroke-width": 7, "stroke-linejoin": "round" }, G);
    svgEl("path", { d: d + "Z", fill: opts.color2 || GOLD, transform: "translate(" + P2(cx, cy) + ") scale(0.55) translate(" + P2(-cx, -cy) + ")" }, G);
    var dur = num(opts.dur, 0.7);
    this.onFrame(function (t) {
      var lt = t - at, on = lt >= 0 && lt < dur;
      setD(G, on);
      if (!on) return;
      var s = EASE.snap(clamp(lt / 0.16, 0, 1)) * (1 + lt * 0.3);
      setA(G, "transform", "translate(" + P2(cx, cy) + ") scale(" + fx(s * 100) / 100 + ") rotate(" + fx(lt * 40) + ") translate(" + P2(-cx, -cy) + ")");
      setA(G, "opacity", fx(clamp((dur - lt) / 0.2, 0, 1) * 100) / 100);
    });
    return G;
  };
  /** expanding shockwave rings (screen space) */
  SP.rings = function (at, opts) {
    opts = opts || {};
    at = clampT(at);
    var cx = num(opts.x, this.Ww / 2), cy = num(opts.y, 500), G = g(this.over, { display: "none" }), list = [];
    for (var i = 0; i < 3; i++) list.push(svgEl("ellipse", { cx: cx, cy: cy, rx: 100, ry: 100 * num(opts.squash, 0.45), fill: "none", stroke: opts.color || "#FFFFFF", "stroke-width": 12 - i * 3 }, G));
    this.onFrame(function (t) {
      var lt = t - at, on = lt >= 0 && lt < 0.8;
      setD(G, on);
      if (!on) return;
      list.forEach(function (e, i) {
        var p = clamp((lt - i * 0.08) / 0.6, 0, 1);
        setA(e, "transform", "translate(" + P2(cx, cy) + ") scale(" + fx((0.3 + p * 4) * 100) / 100 + ") translate(" + P2(-cx, -cy) + ")");
        setA(e, "opacity", fx((1 - p) * 100) / 100);
      });
    });
    return G;
  };

  // ───────────────────────── locations (painted cel backgrounds) ─────────────────────────
  function R(x, y, w, h, fill, extra) { return '<rect x="' + fx(x) + '" y="' + fx(y) + '" width="' + fx(Math.max(0, w)) + '" height="' + fx(Math.max(0, h)) + '" fill="' + fill + '"' + (extra || "") + "/>"; }
  function C(cx, cy, r, fill, extra) { return '<circle cx="' + fx(cx) + '" cy="' + fx(cy) + '" r="' + fx(r) + '" fill="' + fill + '"' + (extra || "") + "/>"; }
  function El(cx, cy, rx, ry, fill, extra) { return '<ellipse cx="' + fx(cx) + '" cy="' + fx(cy) + '" rx="' + fx(rx) + '" ry="' + fx(ry) + '" fill="' + fill + '"' + (extra || "") + "/>"; }
  function Pa(d, fill, extra) { return '<path d="' + d + '" fill="' + fill + '"' + (extra || "") + "/>"; }
  var CLOUD = [[-1.0, 0.12, 0.52], [-0.5, -0.22, 0.68], [0.1, -0.46, 0.86], [0.7, -0.2, 0.66], [1.15, 0.1, 0.46], [0.35, 0.05, 0.6], [-0.3, 0.08, 0.55]];
  /** big two-tone cumulus with a flat base */
  function cloud(x, y, s, lit, sh) {
    var k = s * 100, out = "";
    out += El(x + 0.08 * k, y + 0.26 * k, 1.55 * k, 0.24 * k, sh);
    CLOUD.forEach(function (c) { out += C(x + c[0] * k, y + c[1] * k, c[2] * k, sh); });
    CLOUD.forEach(function (c) { out += C(x + c[0] * k - 0.07 * k, y + c[1] * k - 0.1 * k, c[2] * k * 0.86, lit); });
    return out;
  }
  function streakCloud(x, y, w, h, fill) { return El(x, y, w, h, fill) + El(x + w * 0.4, y - h * 0.5, w * 0.5, h * 0.8, fill); }
  function skyline(x0, x1, base, col, seed, hMin, hMax, win) {
    var rnd = V.makeRand(seed), x = x0, out = "";
    while (x < x1) {
      var w = 50 + rnd() * 110, h = hMin + rnd() * (hMax - hMin);
      out += R(x, base - h, w + 1, h + 400, col);
      if (rnd() < 0.3) out += R(x + w * 0.3, base - h - 26, w * 0.12, 26, col);
      if (win) {
        for (var wy = base - h + 16; wy < base - 10; wy += 24) for (var wx = x + 10; wx < x + w - 14; wx += 20) if (rnd() < win.p) out += R(wx, wy, 9, 12, rnd() < 0.5 ? win.c : win.c2 || win.c);
      }
      x += w + rnd() * 8;
    }
    return out;
  }
  function birds(x, y, n, col, seed) {
    var rnd = V.makeRand(seed), out = "";
    for (var i = 0; i < n; i++) { var bx = x + rnd() * 220, by = y + rnd() * 80, s = 8 + rnd() * 8; out += '<path d="M' + P2(bx - s, by) + " Q" + P2(bx - s / 2, by - s * 0.6) + " " + P2(bx, by) + " Q" + P2(bx + s / 2, by - s * 0.6) + " " + P2(bx + s, by) + '" fill="none" stroke="' + col + '" stroke-width="3" stroke-linecap="round"/>'; }
    return out;
  }
  function sakuraTree(x, y, s, seed) {
    var rnd = V.makeRand(seed), out = "";
    out += Pa("M" + P2(x - 14 * s, y) + " C" + P2(x - 10 * s, y - 120 * s) + " " + P2(x - 30 * s, y - 180 * s) + " " + P2(x - 60 * s, y - 230 * s) + " L" + P2(x - 44 * s, y - 236 * s) + " C" + P2(x - 10 * s, y - 190 * s) + " " + P2(x + 8 * s, y - 150 * s) + " " + P2(x + 16 * s, y) + "Z", "#5B3A4E");
    for (var i = 0; i < 14; i++) { var cx = x + (rnd() - 0.5) * 300 * s, cy = y - 230 * s + (rnd() - 0.5) * 140 * s, r = (50 + rnd() * 40) * s; out += C(cx, cy, r, "#F29BC1"); }
    for (i = 0; i < 12; i++) { var cx2 = x + (rnd() - 0.55) * 260 * s, cy2 = y - 250 * s + (rnd() - 0.6) * 120 * s, r2 = (40 + rnd() * 34) * s; out += C(cx2, cy2, r2, "#FFC6DD"); }
    return out;
  }
  function pole(x, y0, y1, col) {
    return R(x - 9, y0, 18, y1 - y0, col) + R(x - 70, y0 + 30, 140, 10, col) + R(x - 54, y0 + 70, 108, 8, col) + C(x - 56, y0 + 26, 6, col) + C(x + 56, y0 + 26, 6, col);
  }
  function wires(x0, x1, y, sag, col, n) {
    var out = "";
    for (var i = 0; i < n; i++) { var yy = y + i * 22; out += '<path d="M' + P2(x0, yy) + " Q" + P2((x0 + x1) / 2, yy + sag) + " " + P2(x1, yy - 10) + '" fill="none" stroke="' + col + '" stroke-width="2.6"/>'; }
    return out;
  }
  var LOCATIONS = {};
  function L(name, fn) { LOCATIONS[name] = fn; }
  // each painter: (shot, Ww, x0, x1) → { far: svg, near: svg } in world units (frame = Ww × 1000)
  L("rooftop", function (sh, Ww, x0, x1) {
    var sky = gradDef(sh, nid("g"), [[0, "#3C86FF"], [0.55, "#8EC8FF"], [1, "#E4F3FF"]]);
    var f = R(x0, -400, x1 - x0, 1200, sky);
    f += C(Ww * 0.12, 60, 140, "#FFFFFF", ' opacity=".35"') + C(Ww * 0.12, 60, 70, "#FFFFFF", ' opacity=".6"');
    f += cloud(Ww * 0.18, 330, 2.1, "#FFFFFF", "#C9D8F6") + cloud(Ww * 0.8, 230, 1.6, "#FFFFFF", "#CAD6F4") + cloud(Ww * 1.25, 380, 1.3, "#FFFFFF", "#C9D8F6") + cloud(-Ww * 0.3, 260, 1.2, "#FFFFFF", "#CAD6F4");
    f += skyline(x0, x1, 700, "#B5CBEB", 11, 40, 160) + skyline(x0, x1, 724, "#93ADD8", 12, 20, 110);
    f += R(x0, 724, x1 - x0, 700, "#D6D2E2");
    var n = "";
    for (var y = 770; y < 1300; y += 60) n += R(x0, y, x1 - x0, 3, "#BDB7CE");
    for (var x = Math.floor(x0 / 140) * 140; x < x1; x += 140) n += '<path d="M' + P2(x, 724) + " L" + P2(x + (x - Ww / 2) * 0.9, 1300) + '" stroke="#BDB7CE" stroke-width="3"/>';
    var pid = nid("p");
    var pat = svgEl("pattern", { id: pid, width: 34, height: 34, patternUnits: "userSpaceOnUse", patternTransform: "rotate(45)" }, sh.film.defs);
    svgEl("rect", { x: 0, y: 0, width: 3, height: 34, fill: "#69708F" }, pat);
    svgEl("rect", { x: 0, y: 0, width: 34, height: 3, fill: "#69708F" }, pat);
    n += R(x0, 452, x1 - x0, 300, "url(#" + pid + ")", ' opacity=".5"');
    n += R(x0, 440, x1 - x0, 14, "#5C6384") + R(x0, 742, x1 - x0, 10, "#5C6384");
    for (x = Math.floor(x0 / 200) * 200; x < x1; x += 200) n += R(x - 7, 430, 14, 330, "#4E5576");
    n += R(x0, 752, x1 - x0, 26, "#B9B3CB");
    return { far: f, near: n };
  });
  L("sunset-city", function (sh, Ww, x0, x1) {
    var sky = gradDef(sh, nid("g"), [[0, "#2A1B5E"], [0.32, "#7A2E8C"], [0.58, "#FF4F8B"], [0.8, "#FFB36B"], [1, "#FFE3A3"]]);
    var f = R(x0, -400, x1 - x0, 1180, sky);
    var sx = Ww * 0.62;
    f += C(sx, 650, 230, "#FFD9A0", ' opacity=".25"') + C(sx, 650, 150, "#FFE9B8", ' opacity=".45"') + C(sx, 650, 105, "#FFF3CF");
    for (var i = 0; i < 4; i++) f += R(sx - 130, 640 + i * 22, 260, 5 + i * 2, "#FF9A7A", ' opacity=".8"');
    f += streakCloud(Ww * 0.2, 250, 260, 22, "#B8478E") + streakCloud(Ww * 0.7, 180, 320, 18, "#9C3A86") + streakCloud(Ww * 1.1, 330, 240, 20, "#E0608E") + streakCloud(-Ww * 0.1, 400, 220, 16, "#E0608E");
    f += birds(Ww * 0.25, 360, 5, "#3A1F4F", 4);
    f += skyline(x0, x1, 790, "#8E3B7C", 21, 60, 220) + skyline(x0, x1, 830, "#3A1F4F", 22, 30, 170, { p: 0.22, c: "#FFD27A", c2: "#FF9F6B" });
    f += R(x0, 828, x1 - x0, 600, "#2A1838");
    var n = pole(Ww * 0.88, 150, 1300, "#22142E") + wires(x0, Ww * 0.88 - 60, 190, 90, "#22142E", 3) + wires(Ww * 0.88 + 60, x1, 186, 70, "#22142E", 3);
    return { far: f, near: n };
  });
  L("classroom", function (sh, Ww, x0, x1) {
    var P = sh.portrait, Q = sh.square;
    var b = P ? { x: Ww * 0.06, y: 110, w: Ww * 0.88, h: 360 } : Q ? { x: Ww * 0.05, y: 150, w: Ww * 0.6, h: 400 } : { x: Ww * 0.06, y: 150, w: Ww * 0.56, h: 420 };
    sh.board = b;
    var f = R(x0, -400, x1 - x0, 1130, "#F6EADB") + R(x0, 640, x1 - x0, 90, "#EADBC6");
    f += R(x0, 728, x1 - x0, 700, "#D7B086");
    for (var y = 760; y < 1300; y += 44) f += R(x0, y, x1 - x0, 3, "#C29A6E");
    // windows on the right
    var wx = P ? Ww * 1.05 : b.x + b.w + Ww * 0.06, wsky = gradDef(sh, nid("g"), [[0, "#5FA5FF"], [1, "#DDF0FF"]]);
    for (var k = 0; k < 4; k++) {
      var X = wx + k * 250;
      f += R(X, 110, 220, 500, wsky) + '<g clip-path="none">' + C(X + 60, 300, 50, "#FFFFFF") + C(X + 120, 280, 64, "#FFFFFF") + C(X + 180, 310, 46, "#FFFFFF") + R(X + 20, 300, 190, 40, "#FFFFFF") + "</g>";
      f += R(X - 10, 100, 240, 14, "#E9E2D6") + R(X - 10, 600, 240, 18, "#E9E2D6") + R(X - 10, 100, 14, 516, "#E9E2D6") + R(X + 216, 100, 14, 516, "#E9E2D6") + R(X + 103, 100, 12, 516, "#E9E2D6") + R(X - 10, 350, 240, 10, "#E9E2D6");
      f += Pa("M" + P2(X, 110) + " L" + P2(X + 220, 110) + " L" + P2(X - 140, 1100) + " L" + P2(X - 420, 1100) + "Z", "#FFFFFF", ' opacity=".14"');
    }
    // chalkboard
    f += R(b.x - 16, b.y - 16, b.w + 32, b.h + 32, "#8C5A3A", ' rx="6"') + R(b.x, b.y, b.w, b.h, "#2F5D4E") + R(b.x, b.y, b.w, b.h * 0.12, "#3A6B5B", ' opacity=".6"');
    f += R(b.x - 6, b.y + b.h + 12, b.w + 12, 14, "#A9714A") + R(b.x + b.w * 0.7, b.y + b.h + 2, 40, 12, "#FFFFFF") + R(b.x + b.w * 0.78, b.y + b.h + 4, 26, 9, "#FFC1D9");
    f += '<path d="M' + P2(b.x + b.w * 0.1, b.y + b.h * 0.86) + " Q" + P2(b.x + b.w * 0.3, b.y + b.h * 0.8) + " " + P2(b.x + b.w * 0.5, b.y + b.h * 0.9) + '" stroke="#FFFFFF" stroke-width="10" opacity=".08" fill="none"/>';
    var cxk = P ? Ww * 0.5 : b.x + b.w * 0.5;
    f += C(cxk, P ? 60 : 80, 30, "#FFFFFF", ' stroke="' + INK + '" stroke-width="5"') + '<path d="M' + P2(cxk, (P ? 60 : 80) - 18) + " L" + P2(cxk, P ? 60 : 80) + " L" + P2(cxk + 14, (P ? 60 : 80) + 6) + '" stroke="' + INK + '" stroke-width="4" fill="none"/>';
    var n = "";
    for (var dx = Math.floor(x0 / 300) * 300; dx < x1; dx += 300) n += R(dx + 20, 840, 230, 26, "#C98F5E", ' rx="4"') + R(dx + 40, 866, 12, 200, "#8C8FA8") + R(dx + 218, 866, 12, 200, "#8C8FA8") + R(dx + 30, 866, 210, 50, "#B07B4E");
    return { far: f, near: n };
  });
  L("train", function (sh, Ww, x0, x1) {
    var f = R(x0, -400, x1 - x0, 1800, "#F2E2D4");
    var wsky = gradDef(sh, nid("g"), [[0, "#FF9F7A"], [0.6, "#FFD3A0"], [1, "#FFF0CF"]]);
    f += R(x0, 230, x1 - x0, 330, wsky);
    sh.trainScroll = g(sh.far);
    var scen = "", rnd = V.makeRand(77);
    for (var x = 0; x < 2400; x += 60 + rnd() * 80) scen += R(x, 430 - rnd() * 120, 40 + rnd() * 60, 300, "#C97A86", ' opacity=".7"');
    for (x = 0; x < 2400; x += 400) scen += R(x, 250, 14, 320, "#7A4A5E") + R(x - 40, 280, 94, 8, "#7A4A5E");
    sh.trainScroll.innerHTML = scen;
    sh.onFrame(function (t) { setA(sh.trainScroll, "transform", "translate(" + fx(x0 - ((t * 900) % 1200)) + ",0)"); });
    var top = R(x0, -400, x1 - x0, 630, "#F2E2D4") + R(x0, 560, x1 - x0, 900, "#F2E2D4");
    for (var wx = Math.floor(x0 / 420) * 420; wx < x1; wx += 420) top += R(wx - 30, 220, 60, 350, "#F2E2D4");
    top += R(x0, 214, x1 - x0, 18, "#CDB9A8") + R(x0, 560, x1 - x0, 20, "#CDB9A8") + R(x0, 70, x1 - x0, 12, "#A9A3B8");
    top += R(x0, 640, x1 - x0, 260, "#5677D2", ' rx="30"') + R(x0, 640, x1 - x0, 40, "#6C8BE0") + R(x0, 900, x1 - x0, 500, "#8D86A0");
    var n = "";
    sh.straps = [];
    var straps = g(sh.far);
    sh.far.appendChild(straps);
    for (var sx = Math.floor(x0 / 220) * 220 + 110; sx < x1; sx += 220) {
      var st = g(straps, { "data-x": sx });
      st.innerHTML = R(sx - 4, 76, 8, 90, "#E6E1EE") + El(sx, 186, 24, 24, "none", ' stroke="#E6E1EE" stroke-width="8"');
      sh.straps.push({ g: st, x: sx });
    }
    sh.onFrame(function (t) { sh.straps.forEach(function (s, i) { setA(s.g, "transform", "rotate(" + fx(Math.sin(t * 1.8 + i * 0.4) * 6) + " " + s.x + " 76)"); }); });
    return { far: f, far2: top, near: n };
  });
  L("night-city", function (sh, Ww, x0, x1) {
    var sky = gradDef(sh, nid("g"), [[0, "#0D0A26"], [0.55, "#261C5C"], [1, "#56347F"]]);
    var f = R(x0, -400, x1 - x0, 1200, sky), rnd = V.makeRand(91);
    for (var i = 0; i < 90; i++) f += C(x0 + rnd() * (x1 - x0), -300 + rnd() * 820, rnd() * 2.4 + 0.6, "#FFFFFF", ' opacity="' + fx(0.3 + rnd() * 0.7) + '"');
    f += C(Ww * 0.78, 150, 60, "#FFF4D6") + C(Ww * 0.78 + 26, 134, 54, "#261C5C");
    f += skyline(x0, x1, 760, "#3A2E78", 31, 120, 360, { p: 0.28, c: "#FFE38A", c2: "#8FE8FF" });
    f += skyline(x0, x1, 800, "#1B1444", 32, 60, 240, { p: 0.18, c: "#FF8FB0", c2: "#FFE38A" });
    var signs = "";
    for (var s = 0; s < 9; s++) {
      var sx = x0 + rnd() * (x1 - x0), sy = 520 + rnd() * 200, w = 40 + rnd() * 50, h = 90 + rnd() * 70, col = [ACC, CYAN, GOLD, VIOLET][s % 4];
      signs += R(sx - 6, sy - 6, w + 12, h + 12, col, ' rx="12" opacity=".25"') + R(sx, sy, w, h, "#1B1444", ' rx="8" stroke="' + col + '" stroke-width="5"');
      for (var k = 0; k < 3; k++) signs += R(sx + w * 0.25, sy + 14 + k * (h / 3.4), w * 0.5, 8, col, ' rx="4"');
    }
    f += signs + R(x0, 798, x1 - x0, 600, "#120E2A");
    for (i = 0; i < 26; i++) { var rx = x0 + rnd() * (x1 - x0); f += R(rx, 806, 6 + rnd() * 10, 60 + rnd() * 120, [ACC, CYAN, GOLD][i % 3], ' opacity=".22"'); }
    var n = "";
    for (i = 0; i < 12; i++) n += C(x0 + rnd() * (x1 - x0), 200 + rnd() * 700, 20 + rnd() * 40, [ACC, CYAN, GOLD, VIOLET][i % 4], ' opacity=".14"');
    return { far: f, near: n };
  });
  L("shrine", function (sh, Ww, x0, x1) {
    var sky = gradDef(sh, nid("g"), [[0, "#86C2FF"], [0.7, "#E9EEFF"], [1, "#FFE6F2"]]);
    var f = R(x0, -400, x1 - x0, 1200, sky);
    f += cloud(Ww * 0.2, 200, 1.2, "#FFFFFF", "#D8DDF7") + cloud(Ww * 0.9, 150, 1.0, "#FFFFFF", "#D8DDF7");
    f += Pa("M" + P2(x0, 700) + " Q" + P2(Ww * 0.3, 560) + " " + P2(Ww * 0.7, 640) + " T" + P2(x1, 620) + " L" + P2(x1, 1300) + " L" + P2(x0, 1300) + "Z", "#9CC7A4");
    f += sakuraTree(Ww * 0.1, 760, 1.2, 3) + sakuraTree(Ww * 0.93, 740, 1.35, 5) + sakuraTree(-Ww * 0.25, 780, 1.1, 8) + sakuraTree(Ww * 1.3, 770, 1.1, 9);
    f += R(x0, 760, x1 - x0, 700, "#D9CFC2");
    var cx = Ww * 0.5, hw = Math.min(Ww * 0.36, 420);
    var n = "";
    n += Pa("M" + P2(cx - hw * 0.62, 820) + " L" + P2(cx + hw * 0.62, 820) + " L" + P2(cx + hw * 1.6, 1300) + " L" + P2(cx - hw * 1.6, 1300) + "Z", "#C9BEB0");
    for (var k = 0; k < 6; k++) n += R(cx - hw * (0.62 + k * 0.18), 840 + k * 70, hw * 2 * (0.62 + k * 0.18), 8, "#B5A99A");
    // torii
    var red = "#E8344E", dk = "#2B1E3A";
    n += R(cx - hw * 0.78, 250, 46, 600, red) + R(cx + hw * 0.78 - 46, 250, 46, 600, red);
    n += R(cx - hw * 0.78 - 8, 820, 62, 40, dk) + R(cx + hw * 0.78 - 54, 820, 62, 40, dk);
    n += R(cx - hw * 0.95, 330, hw * 1.9, 34, red) + R(cx - 22, 250, 44, 84, red);
    n += Pa("M" + P2(cx - hw * 1.18, 236) + " Q" + P2(cx, 262) + " " + P2(cx + hw * 1.18, 236) + " L" + P2(cx + hw * 1.12, 214) + " Q" + P2(cx, 236) + " " + P2(cx - hw * 1.12, 214) + "Z", dk);
    n += Pa("M" + P2(cx - hw * 1.08, 254) + " Q" + P2(cx, 276) + " " + P2(cx + hw * 1.08, 254) + " L" + P2(cx + hw * 1.06, 236) + " Q" + P2(cx, 258) + " " + P2(cx - hw * 1.06, 236) + "Z", red);
    // lanterns
    [cx - hw * 1.35, cx + hw * 1.35].forEach(function (lx) {
      n += R(lx - 40, 780, 80, 20, "#9A948C") + R(lx - 16, 690, 32, 90, "#A8A29A") + R(lx - 36, 640, 72, 54, "#B3ADA5") + R(lx - 18, 652, 36, 30, "#FFE8A3") + Pa("M" + P2(lx - 52, 644) + " L" + P2(lx, 600) + " L" + P2(lx + 52, 644) + "Z", "#8F8981");
    });
    sh.petals(-1, 1e9, { count: sh.portrait ? 12 : 18 });
    return { far: f, near: n };
  });
  L("space", function (sh, Ww, x0, x1) {
    var sky = gradDef(sh, nid("g"), [[0, "#05041A"], [0.6, "#1B1450"], [1, "#3A1E6E"]]);
    var f = R(x0, -400, x1 - x0, 1800, sky), rnd = V.makeRand(55);
    var neb = radDef(sh, nid("r"), [[0, "#FF4F8B", 0.5], [0.6, "#9B6CF2", 0.18], [1, "#9B6CF2", 0]]);
    var neb2 = radDef(sh, nid("r"), [[0, "#4FD8FF", 0.4], [1, "#4FD8FF", 0]]);
    f += El(Ww * 0.3, 380, 600, 300, neb) + El(Ww * 0.85, 700, 500, 260, neb2);
    for (var i = 0; i < 150; i++) f += C(x0 + rnd() * (x1 - x0), -300 + rnd() * 1600, rnd() * 2.6 + 0.5, "#FFFFFF", ' opacity="' + fx(0.3 + rnd() * 0.7) + '"');
    for (i = 0; i < 6; i++) f += '<path d="' + star4(x0 + rnd() * (x1 - x0), rnd() * 1000, 12 + rnd() * 10, 0.15) + '" fill="#FFFFFF"/>';
    var px = Ww * (sh.portrait ? 0.72 : 0.8), py = 230;
    f += El(px, py, 230, 50, "none", ' stroke="#FFC1D9" stroke-width="14" opacity=".7" transform="rotate(-16 ' + fx(px) + " " + py + ')"');
    f += C(px, py, 120, "#FF8FB0") + Pa("M" + P2(px + 20, py - 118) + " A120,120 0 0,1 " + P2(px + 20, py + 118) + " A150,150 0 0,0 " + P2(px + 20, py - 118) + "Z", "#D8578E");
    f += R(px - 120, py - 30, 240, 14, "#FFB3CF", ' opacity=".6"') + R(px - 110, py + 30, 220, 10, "#E46A9C", ' opacity=".6"');
    f += Pa("M" + P2(px - 230, py + 64) + " A230,50 0 0,0 " + P2(px + 230, py - 64), "none", ' stroke="#FFC1D9" stroke-width="14" opacity=".9" transform="rotate(-16 ' + fx(px) + " " + py + ')"');
    f += C(Ww * 0.12, 820, 60, "#B9B3D9") + C(Ww * 0.12 - 18, 806, 14, "#9C95C4") + C(Ww * 0.12 + 20, 838, 10, "#9C95C4");
    return { far: f, near: "" };
  });
  L("sky", function (sh, Ww, x0, x1) {
    var sky = gradDef(sh, nid("g"), [[0, "#2B74FF"], [0.5, "#79B8FF"], [0.85, "#CDE8FF"], [1, "#F3FAFF"]]);
    var f = R(x0, -700, x1 - x0, 2100, sky);
    f += C(Ww * 0.82, 40, 260, "#FFFFFF", ' opacity=".18"') + C(Ww * 0.82, 40, 130, "#FFFFFF", ' opacity=".4"') + C(Ww * 0.82, 40, 60, "#FFFFFF", ' opacity=".9"');
    for (var r = 0; r < 6; r++) f += Pa("M" + P2(Ww * 0.82, 40) + " L" + P2(Ww * 0.82 - 900 + r * 120, 1300) + " L" + P2(Ww * 0.82 - 860 + r * 120, 1300) + "Z", "#FFFFFF", ' opacity=".07"');
    f += cloud(Ww * 0.2, 760, 3.2, "#FFFFFF", "#BFD2F4") + cloud(Ww * 0.78, 860, 3.6, "#FFFFFF", "#C2D3F2") + cloud(Ww * 1.25, 700, 2.4, "#FFFFFF", "#BFD2F4") + cloud(-Ww * 0.3, 820, 2.6, "#FFFFFF", "#BFD2F4");
    f += cloud(Ww * 0.5, 320, 1.1, "#FFFFFF", "#D3E0F8") + cloud(Ww * 0.05, 140, 0.8, "#FFFFFF", "#D3E0F8") + cloud(Ww * 1.0, 250, 0.9, "#FFFFFF", "#D3E0F8");
    f += R(x0, 1040, x1 - x0, 400, "#BFD2F4");
    f += birds(Ww * 0.35, 420, 6, "#3B4A7A", 8);
    return { far: f, near: "" };
  });
  L("meadow", function (sh, Ww, x0, x1) {
    var sky = gradDef(sh, nid("g"), [[0, "#3C86FF"], [0.65, "#9ED0FF"], [1, "#E8F6FF"]]);
    var f = R(x0, -400, x1 - x0, 1200, sky);
    f += cloud(Ww * 0.25, 360, 2.4, "#FFFFFF", "#C6D7F6") + cloud(Ww * 0.85, 300, 1.8, "#FFFFFF", "#C6D7F6") + cloud(-Ww * 0.2, 330, 1.4, "#FFFFFF", "#C6D7F6");
    f += Pa("M" + P2(x0, 690) + " Q" + P2(Ww * 0.25, 600) + " " + P2(Ww * 0.6, 660) + " T" + P2(x1, 640) + " L" + P2(x1, 1300) + " L" + P2(x0, 1300) + "Z", "#8FD67A");
    f += Pa("M" + P2(x0, 800) + " Q" + P2(Ww * 0.4, 690) + " " + P2(Ww * 0.9, 760) + " T" + P2(x1, 780) + " L" + P2(x1, 1300) + " L" + P2(x0, 1300) + "Z", "#5DBB63");
    f += Pa("M" + P2(Ww * 0.6, 742) + " Q" + P2(Ww * 0.9, 760) + " " + P2(x1, 790) + " L" + P2(x1, 1300) + " L" + P2(Ww * 0.7, 1300) + "Z", "#4AA455", ' opacity=".6"');
    var tx = Ww * 0.72;
    f += R(tx - 10, 600, 20, 120, "#6B4A3A") + C(tx, 570, 70, "#3F9A4E") + C(tx - 50, 600, 50, "#3F9A4E") + C(tx + 46, 596, 52, "#3F9A4E") + C(tx - 14, 548, 46, "#58B862") + C(tx + 26, 566, 36, "#58B862");
    f += pole(Ww * 0.2, 380, 760, "#5A5470") + pole(Ww * 0.2 + 700, 430, 720, "#5A5470") + wires(Ww * 0.2 + 60, Ww * 0.2 + 640, 410, 40, "#5A5470", 2) + wires(x0, Ww * 0.2 - 60, 400, 50, "#5A5470", 2);
    var rnd = V.makeRand(17);
    for (var i = 0; i < 60; i++) f += C(x0 + rnd() * (x1 - x0), 800 + rnd() * 400, 4 + rnd() * 4, ["#FFFFFF", "#FFE36E", "#FFB3CF"][i % 3]);
    return { far: f, near: "" };
  });
  L("plain", function (sh, Ww, x0, x1, opts) {
    var base = (opts && opts.color) || PAPER;
    var f = R(x0, -600, x1 - x0, 2200, base);
    var pid = nid("p");
    var pat = svgEl("pattern", { id: pid, width: 36, height: 36, patternUnits: "userSpaceOnUse" }, sh.film.defs);
    svgEl("circle", { cx: 9, cy: 9, r: 5, fill: shade(base, -0.06) }, pat);
    svgEl("circle", { cx: 27, cy: 27, r: 5, fill: shade(base, -0.06) }, pat);
    f += R(x0, -600, x1 - x0, 2200, "url(#" + pid + ")");
    for (var k = -10; k < 20; k++) f += Pa("M" + P2(k * 260, -600) + " L" + P2(k * 260 + 110, -600) + " L" + P2(k * 260 + 110 - 900, 1600) + " L" + P2(k * 260 - 900, 1600) + "Z", "#FFFFFF", ' opacity=".35"');
    return { far: f, near: "" };
  });
  var LOC_ALIASES = { roof: "rooftop", school: "rooftop", "school-rooftop": "rooftop", sunset: "sunset-city", city: "sunset-city", dusk: "sunset-city", class: "classroom", school_room: "classroom", subway: "train", "train-car": "train", night: "night-city", neon: "night-city", temple: "shrine", torii: "shrine", stars: "space", galaxy: "space", cosmos: "space", clouds: "sky", heaven: "sky", field: "meadow", hill: "meadow", countryside: "meadow", studio: "plain", blank: "plain", white: "plain" };
  function locName(n) { n = str(n).toLowerCase().trim(); if (LOCATIONS[n]) return n; return LOC_ALIASES[n] || "plain"; }
  S.LOCATIONS = LOCATIONS;
  function drawLocation(sh, name, opts) {
    var Ww = sh.Ww, x0 = -Ww * 0.9, x1 = Ww * 1.9;
    try {
      var r = LOCATIONS[name](sh, Ww, x0, x1, opts) || {};
      var gf = g(sh.far);
      gf.innerHTML = r.far || "";
      sh.far.insertBefore(gf, sh.far.firstChild);
      if (r.far2) { var g2 = g(sh.far); g2.innerHTML = r.far2; if (sh.straps && sh.straps.length) sh.far.appendChild(sh.straps[0].g.parentNode); }
      if (r.near) { var gn = g(sh.near); gn.innerHTML = r.near; }
    } catch (e) {
      V.error("anime location " + name + ": " + (e && e.message));
      sh.far.innerHTML = rectFull(Ww, PAPER);
    }
  }

  // ───────────────────────── screen-space UI (HTML overlays) ─────────────────────────
  function F0() { return film || new Film(V.root()); }
  function pct(v) { return fx(v * 100) + "%"; }
  /** show a node only inside [from, to) */
  function windowed(node, from, to) {
    var f = F0();
    f.onFrame(function (t) { setS(node, "visibility", t >= from - 0.001 && t < to ? "visible" : "hidden"); });
  }
  function fitText(node, opts) { try { V.fit(node, opts || {}); } catch (e) {} }
  /**
   * Slanted anime title card. opts: { kicker, sub, until, pos: "center"|"top"|"bottom"|"left"|"right",
   * size: "xl"|"lg"|"md", style: "slam"|"slide", color, maxWidth (0–1) }
   */
  S.titleCard = function (text, at, opts) {
    opts = opts || {};
    var f = F0(), tl = V.timeline();
    at = clampT(at == null ? 0.3 : at);
    var pos = opts.pos || "center";
    var box = el("div.an-tc.an-tc-" + pos + ".an-size-" + (opts.size || "xl"), { parent: f.ui });
    box.style.maxWidth = pct(num(opts.maxWidth, f.portrait ? 0.88 : 0.8));
    if (opts.y != null) { box.style.top = pct(opts.y); box.style.bottom = "auto"; }
    var kick = null;
    if (opts.kicker) kick = el("div.an-tc-kick", { parent: box, text: plain(opts.kicker) });
    var main = el("div.an-tc-main", { parent: box });
    main.appendChild(S.rich(text || ""));
    if (opts.color) main.style.color = opts.color;
    var sub = null;
    if (opts.sub) sub = el("div.an-tc-sub", { parent: box, text: plain(opts.sub) });
    fitText(main, { maxLines: 2, min: 18 });
    windowed(box, Math.max(0, at - 0.13), opts.until != null ? clampT(opts.until) + 0.25 : 1e9);
    if (opts.style === "slide") tl.fromTo(main, { opacity: 0, x: -u(260), skewX: -30 }, { opacity: 1, x: 0, skewX: 0 }, { at: at, dur: 0.32, ease: EASE.whip });
    else {
      tl.fromTo(main, { opacity: 0 }, { opacity: 1 }, { at: at, dur: 0.06 });
      tl.fromTo(main, { scale: 2.1, rotate: -6 }, { scale: 1, rotate: 0 }, { at: at, dur: 0.24, ease: EASE.snap });
    }
    if (kick) tl.fromTo(kick, { opacity: 0, clipPath: "inset(0% 100% 0% 0%)" }, { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }, { at: Math.max(0, at - 0.12), dur: 0.26, ease: EASE.whip });
    if (sub) tl.fromTo(sub, { opacity: 0, y: u(24) }, { opacity: 1, y: 0 }, { at: at + 0.32, dur: 0.4, ease: "outCubic" });
    if (opts.until != null) tl.to(box, { opacity: 0, x: u(80) }, { at: clampT(opts.until), dur: 0.2, ease: "inCubic" });
    return box;
  };
  /** Giant impact lettering for the key word (zoom-slam + shake). opts: { until, x, y (0–1), color, size } */
  S.bigWord = function (text, at, opts) {
    opts = opts || {};
    var f = F0(), tl = V.timeline();
    at = clampT(at);
    var wrap = el("div.an-big", { parent: f.ui });
    wrap.style.left = pct(num(opts.x, 0.5)); wrap.style.top = pct(num(opts.y, 0.5));
    wrap.style.width = pct(num(opts.width, f.portrait ? 0.9 : 0.7));
    var w = el("div.an-big-in", { parent: wrap });
    w.appendChild(S.rich(text || "!"));
    if (opts.color) w.style.color = opts.color;
    if (opts.size) w.style.fontSize = u(opts.size) + "px";
    fitText(w, { maxLines: 2, min: 24 });
    windowed(wrap, at, opts.until != null ? clampT(opts.until) + 0.25 : 1e9);
    tl.fromTo(w, { opacity: 0 }, { opacity: 1 }, { at: at, dur: 0.04 });
    tl.fromTo(w, { scale: 3.2, rotate: -14 }, { scale: 1, rotate: -6 }, { at: at, dur: 0.2, ease: EASE.smear });
    tl.to(w, { scale: 1.03 }, { at: at + 0.25, dur: Math.max(0.5, D() - at - 0.3), ease: "outSine" });
    if (opts.until != null) tl.to(w, { opacity: 0, scale: 1.4 }, { at: clampT(opts.until), dur: 0.2, ease: "inCubic" });
    return wrap;
  };
  /** Info box / key-text callout. opts: { x, y (0–1, box centre), width (0–1), kicker, icon, until, align } */
  S.callout = function (text, at, opts) {
    opts = opts || {};
    var f = F0(), tl = V.timeline();
    at = clampT(at);
    var box = el("div.an-call", { parent: f.ui });
    box.style.left = pct(num(opts.x, 0.68)); box.style.top = pct(num(opts.y, 0.4));
    box.style.width = pct(num(opts.width, f.portrait ? 0.84 : 0.4));
    if (opts.kicker) el("div.an-call-kick", { parent: box, text: plain(opts.kicker) });
    var row = el("div.an-call-row", { parent: box });
    if (opts.icon) { var ic = el("div.an-call-ico", { parent: row }); S.icon(opts.icon, { parent: ic, size: u(f.portrait ? 64 : 58), color: "#FFFFFF", stroke: 2.4 }); }
    var tx = el("div.an-call-text", { parent: row });
    tx.appendChild(S.rich(text || ""));
    fitText(tx, { maxLines: 3, min: 16 });
    tl.fromTo(box, { clipPath: "inset(0% 100% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)" }, { at: at, dur: 0.22, ease: EASE.whip });
    tl.fromTo(box, { x: -u(60), skewX: -18 }, { x: 0, skewX: -6 }, { at: at, dur: 0.3, ease: EASE.snap });
    tl.set(box, { clipPath: "none" }, { at: at + 0.24 });
    if (opts.until != null) tl.to(box, { opacity: 0, x: u(60) }, { at: clampT(opts.until), dur: 0.2, ease: "inCubic" });
    return box;
  };
  /** Name plate for a speaker. side: "left" | "right" */
  S.nameTag = function (name, from, to, opts) {
    opts = opts || {};
    var f = F0(), id = castId(name), c = CAST[id];
    var tag = el("div.an-name.an-name-" + (opts.side || "left"), { parent: f.ui, text: (c ? c.name : plain(name)).toUpperCase() });
    tag.style.background = opts.color || (c ? c.accent : ACC);
    if (opts.y != null) tag.style.top = pct(opts.y);
    var tl = V.timeline();
    tl.fromTo(tag, { x: (opts.side === "right" ? 1 : -1) * u(200), opacity: 0 }, { x: 0, opacity: 1 }, { at: clampT(from), dur: 0.22, ease: EASE.whip });
    windowed(tag, from, to == null ? 1e9 : to);
    return tag;
  };
  /**
   * Anime subtitles (bottom). opts: { lines: [{ text, start, end, speaker? }] } or built from V.words
   * (falls back to the narration text spread over the scene). Spoken words brighten as they are said.
   */
  S.subtitles = function (opts) {
    opts = opts || {};
    var f = F0();
    var list = opts.lines;
    if (!list) {
      var ph = phrases(opts.from, opts.to, opts.maxWords || (f.portrait ? 5 : 8));
      if (ph.length) list = ph.map(function (p) { return { text: p.text, start: p.s, end: p.e, words: p.words }; });
      else {
        var txt = plain(opts.text != null ? opts.text : V.narration || "").split(/\s+/).filter(Boolean);
        var chunks = [];
        for (var i = 0; i < txt.length && chunks.length < 40; i += 7) chunks.push(txt.slice(i, i + 7).join(" "));
        var a = 0.3, b = Math.max(a + 0.5, D() - 0.3), step = (b - a) / Math.max(1, chunks.length);
        list = chunks.map(function (c, k) { return { text: c, start: a + k * step, end: a + (k + 1) * step - 0.1 }; });
      }
    }
    var wrap = el("div.an-subs" + (opts.top ? ".an-subs-top" : ""), { parent: f.ui });
    if (opts.y != null) { wrap.style.bottom = "auto"; wrap.style.top = pct(opts.y); }
    var tl = V.timeline();
    list.forEach(function (L, k) {
      var line = el("div.an-sub", { parent: wrap });
      if (L.speaker) {
        var c = CAST[castId(L.speaker)];
        var nm = el("span.an-sub-name", { parent: line, text: (c ? c.name : plain(L.speaker)) + ": " });
        nm.style.color = c ? c.accent : GOLD;
      }
      var body = el("span.an-sub-body", { parent: line });
      body.appendChild(S.rich(L.text));
      var spans = S.splitWords(body);
      var next = list[k + 1] ? list[k + 1].start : 1e9;
      var to = Math.min(next - 0.02, L.end + 0.9);
      windowed(line, L.start - 0.08, Math.max(L.start + 0.3, to));
      if (L.words && L.words.length === spans.length) spans.forEach(function (s, j) { tl.fromTo(s, { opacity: 0.55 }, { opacity: 1 }, { at: Math.max(0, L.words[j].start - 0.05), dur: 0.1 }); });
      else spans.forEach(function (s, j) { tl.fromTo(s, { opacity: 0.55 }, { opacity: 1 }, { at: L.start + ((L.end - L.start) * j) / Math.max(1, spans.length), dur: 0.1 }); });
      fitText(line, { maxLines: 2, min: 14 });
    });
    return wrap;
  };
  /** Counting stat with a glowing aura. opts: { prefix, suffix, decimals, label, x, y, dur, color } */
  S.stat = function (value, at, opts) {
    opts = opts || {};
    var f = F0(), tl = V.timeline();
    at = clampT(at);
    var box = el("div.an-stat", { parent: f.ui });
    box.style.left = pct(num(opts.x, 0.68)); box.style.top = pct(num(opts.y, 0.42));
    box.style.width = pct(num(opts.width, f.portrait ? 0.86 : 0.44));
    if (opts.color) box.style.setProperty("--an-glow", opts.color);
    var n = el("div.an-stat-num", { parent: box, text: "0" });
    var lab = opts.label ? el("div.an-stat-label", { parent: box, text: plain(opts.label) }) : null;
    var v = num(value, 0), dec = num(opts.decimals, Math.abs(v) < 10 && v % 1 ? 1 : 0);
    var fmt = function (x) { return str(opts.prefix || "") + V.format(x, dec) + str(opts.suffix || ""); };
    n.textContent = fmt(v);
    fitText(n, { maxLines: 1, min: 24 });
    tl.fromTo(n, { text: 0 }, { text: v, format: fmt }, { at: at, dur: num(opts.dur, 1.2), ease: "outExpo" });
    tl.fromTo(n, { scale: 0.3, opacity: 0 }, { scale: 1, opacity: 1 }, { at: at, dur: 0.25, ease: EASE.snap });
    tl.fromTo(n, { scale: 1.25 }, { scale: 1 }, { at: at + num(opts.dur, 1.2), dur: 0.3, ease: EASE.snap });
    if (lab) { tl.fromTo(lab, { opacity: 0, x: -u(80) }, { opacity: 1, x: 0 }, { at: at + 0.3, dur: 0.3, ease: EASE.whip }); fitText(lab, { maxLines: 2, min: 14 }); }
    return box;
  };
  /** Numbered step card for montages. */
  S.stepCard = function (n, label, from, to, opts) {
    opts = opts || {};
    var f = F0(), tl = V.timeline();
    var box = el("div.an-step", { parent: f.ui });
    box.style.left = pct(num(opts.x, 0.68)); box.style.top = pct(num(opts.y, 0.5));
    box.style.width = pct(num(opts.width, f.portrait ? 0.86 : 0.42));
    var num0 = el("div.an-step-n", { parent: box, text: (n < 10 ? "0" : "") + n });
    var lab = el("div.an-step-l", { parent: box });
    if (opts.icon) { var ic = el("span.an-step-ico", { parent: lab }); S.icon(opts.icon, { parent: ic, size: u(f.portrait ? 52 : 50), color: INK, stroke: 2.4 }); }
    var tx = el("span", { parent: lab });
    tx.appendChild(S.rich(label));
    fitText(lab, { maxLines: 2, min: 14 });
    tl.fromTo(num0, { scale: 2.6, opacity: 0, rotate: -20 }, { scale: 1, opacity: 1, rotate: -8 }, { at: clampT(from + 0.05), dur: 0.22, ease: EASE.snap });
    tl.fromTo(lab, { clipPath: "inset(0% 100% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)" }, { at: clampT(from + 0.15), dur: 0.25, ease: EASE.whip });
    windowed(box, from, to);
    return box;
  };
  /** Rounded speech bubble (screen space). opts: { x, y, width (0–1), tail: "left"|"down"|"right" } — words light up as spoken */
  S.bubble = function (text, from, to, opts) {
    opts = opts || {};
    var f = F0(), tl = V.timeline();
    var b = el("div.an-bub.an-tail-" + (opts.tail || "left"), { parent: f.ui });
    b.style.left = pct(num(opts.x, 0.5)); b.style.top = pct(num(opts.y, 0.3));
    b.style.width = pct(num(opts.width, f.portrait ? 0.84 : 0.46));
    var tx = el("div.an-bub-text", { parent: b });
    tx.appendChild(S.rich(text || ""));
    fitText(tx, { maxLines: 4, min: 14 });
    var spans = S.splitWords(tx);
    S.speakWords(tl, spans, { start: from + 0.1, end: Math.min(D() * 0.9, Math.max(from + 0.6, (to < 1e8 ? to : D()) - 0.2)), dim: 0.3 });
    tl.fromTo(b, { scale: 0.2, opacity: 0 }, { scale: 1, opacity: 1 }, { at: clampT(from), dur: 0.26, ease: EASE.snap });
    if (to < 1e8) tl.to(b, { scale: 0.6, opacity: 0 }, { at: clampT(to), dur: 0.15, ease: "inCubic" });
    return b;
  };
  /** Popping icon chip with a label */
  S.iconPop = function (icon, label, at, opts) {
    opts = opts || {};
    var f = F0(), tl = V.timeline();
    var b = el("div.an-ipop", { parent: f.ui });
    b.style.left = pct(num(opts.x, 0.5)); b.style.top = pct(num(opts.y, 0.5));
    if (opts.color) b.style.setProperty("--an-chip", opts.color);
    var ic = el("div.an-ipop-ico", { parent: b });
    S.icon(icon || "sparkles", { parent: ic, size: u(f.portrait ? 78 : 74), color: "#FFFFFF", stroke: 2.3 });
    if (label) el("div.an-ipop-l", { parent: b, text: plain(label) });
    at = clampT(at);
    tl.fromTo(b, { scale: 0, rotate: -30, opacity: 0 }, { scale: 1, rotate: 0, opacity: 1 }, { at: at, dur: 0.3, ease: EASE.snap });
    var ph = num(opts.phase, 0);
    f.onFrame(function (t) { if (t > at + 0.3) setS(ic, "transform", "translateY(" + fx(Math.sin(t * 3 + ph) * u(6)) + "px)"); else setS(ic, "transform", ""); });
    return b;
  };
  /** Chalk points on a classroom board (world space, follows the camera). */
  S.boardText = function (shot, title, items, times, opts) {
    opts = opts || {};
    var b = shot.board || { x: shot.Ww * 0.08, y: 160, w: shot.Ww * 0.55, h: 400 }, k = shot.k, tl = V.timeline();
    var box = el("div.an-board", { parent: shot.html });
    box.style.left = fx(b.x * k) + "px"; box.style.top = fx(b.y * k) + "px"; box.style.width = fx(b.w * k) + "px"; box.style.height = fx(b.h * k) + "px";
    box.style.fontSize = fx(k * (shot.portrait ? 38 : 40)) + "px";
    var rows = [];
    if (title) {
      var tt = el("div.an-board-t", { parent: box });
      tt.appendChild(S.rich(title));
      tl.fromTo(tt, { clipPath: "inset(0% 100% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)" }, { at: clampT(opts.titleAt != null ? opts.titleAt : 0.2), dur: 0.5, ease: "inOutSine" });
    }
    var list = el("div.an-board-l", { parent: box });
    items.forEach(function (it, i) {
      var r = el("div.an-board-i", { parent: list });
      el("span.an-board-n", { parent: r, text: String(i + 1) });
      var tx = el("span.an-board-x", { parent: r });
      tx.appendChild(S.rich(it));
      rows.push(r);
      var t = clampT(times[i]);
      tl.fromTo(r, { clipPath: "inset(-10% 100% -10% 0%)", opacity: 1 }, { clipPath: "inset(-10% 0% -10% 0%)", opacity: 1 }, { at: t, dur: Math.min(0.9, 0.3 + plain(it).length * 0.02), ease: "inOutSine" });
    });
    S.flush && S.flush();
    try {
      var avail = b.h * k * 0.94, guard = 0;
      while (box.scrollHeight > avail && guard < 14) { box.style.fontSize = parseFloat(box.style.fontSize) * 0.9 + "px"; guard++; }
    } catch (e) {}
    return { el: box, rows: rows };
  };

  // ───────────────────────── eye cut-in, stripe wipe, vignette ─────────────────────────
  /** Letterboxed eyes-only close-up strip across the frame. opts: { expression, y (0–1), h (0–1), bg } */
  FP.cutIn = function (name, from, to, opts) {
    opts = opts || {};
    var self = this, Ww = this.Ww;
    from = clampT(from); to = Math.max(from + 0.15, num(to, from + 0.6));
    var hh = num(opts.h, this.portrait ? 0.22 : 0.34) * 1000, cy = num(opts.y, this.portrait ? 0.42 : 0.47) * 1000;
    var G = g(this.cutSvg, { display: "none" });
    svgEl("rect", { x: -20, y: -20, width: Ww + 40, height: 1040, fill: INK, opacity: 0.55 }, G);
    var cid = nid("c");
    var cp = svgEl("clipPath", { id: cid }, G);
    var cr = svgEl("rect", { x: -20, y: cy - hh / 2, width: Ww + 40, height: hh }, cp);
    var inner = g(G, { "clip-path": "url(#" + cid + ")" });
    var c = CAST[castId(name)];
    svgEl("rect", { x: -20, y: cy - hh / 2 - 10, width: Ww + 40, height: hh + 20, fill: opts.bg || c.skin }, inner);
    var fake = { Ww: Ww, chars: g(inner), actors: [], portrait: this.portrait };
    var sc = Math.min((Ww * 0.72) / 150, (hh * 1.6) / 76);
    var a = new Actor(fake, name, { x: Ww / 2, y: cy - 10 * sc, scale: sc, expression: opts.expression || "determined", parent: fake.chars });
    a.blinks = [];
    var edge = g(G);
    var eT = svgEl("rect", { x: -20, width: Ww + 40, height: 12, fill: INK }, edge), eB = svgEl("rect", { x: -20, width: Ww + 40, height: 12, fill: INK }, edge);
    var lT = svgEl("rect", { x: -20, width: Ww + 40, height: 5, fill: "#FFFFFF" }, edge), lB = svgEl("rect", { x: -20, width: Ww + 40, height: 5, fill: "#FFFFFF" }, edge);
    this.cuts.push(function (t) {
      var on = t >= from && t < to;
      setD(G, on);
      if (!on) return;
      var p = Math.min(EASE.whip(clamp((t - from) / 0.12, 0, 1)), clamp((to - t) / 0.08, 0, 1));
      var h = hh * p, y0 = cy - h / 2;
      setA(cr, "y", fx(y0)); setA(cr, "height", fx(h));
      setA(eT, "y", fx(y0 - 12)); setA(eB, "y", fx(y0 + h)); setA(lT, "y", fx(y0)); setA(lB, "y", fx(y0 + h - 5));
      var push = 1 + 0.06 * clamp((t - from) / (to - from), 0, 1);
      a.s = sc * push;
      a.x0 = Ww / 2 + (1 - p) * 60 * (opts.dir === "right" ? -1 : 1);
      a.y0 = cy - 10 * sc * push;
      a.dirty = true;
      a.update(t);
    });
    return a;
  };
  /** Diagonal colour-stripe wipe covering the frame around `at` (episode-style transition) */
  FP.stripes = function (at, dur, opts) {
    opts = opts || {};
    at = clampT(at); dur = num(dur, 0.5);
    var Ww = this.Ww, G = g(this.topSvg, { display: "none" }), cols = opts.colors || [ACC, PAPER, INK, GOLD, ACC], bands = [];
    var bw = (Ww + 1000) / cols.length + 40;
    cols.forEach(function (c, i) {
      var x = -1000 + i * (bw - 40);
      bands.push(svgEl("path", { d: "M" + P2(x, -40) + " L" + P2(x + bw + 500, -40) + " L" + P2(x + bw, 1040) + " L" + P2(x - 500, 1040) + "Z", fill: c }, G));
    });
    var span = Ww + 2400;
    this.streaks.push(function (t) {
      var lt = (t - at) / dur, on = lt >= 0 && lt <= 1;
      setD(G, on);
      if (!on) return;
      bands.forEach(function (b, i) {
        var p = clamp(lt * 1.35 - i * 0.07, 0, 1);
        setA(b, "transform", "translate(" + fx(-span * 0.55 + span * EASE.smear(p)) + ",0)");
      });
    });
    return this;
  };
  /** Soft memory vignette + film flicker */
  FP.memory = function (from, to) {
    var v = el("div.an-mem", { parent: this.ui });
    var gr = el("div.an-grain", { parent: this.ui });
    this.filter(from, to, "sepia(0.6) saturate(0.55) contrast(0.92) brightness(1.06)");
    this.onFrame(function (t) {
      var on = t >= from && t < to;
      setS(v, "visibility", on ? "visible" : "hidden");
      setS(gr, "visibility", on ? "visible" : "hidden");
      if (on) { var f = Math.floor(t * 12); setS(gr, "backgroundPosition", fx(hash01(f) * 300) + "px " + fx(hash01(f + 7) * 300) + "px"); setS(v, "opacity", String(0.85 + 0.15 * hash01(f + 3))); }
    });
    return v;
  };

  // ───────────────────────── acting helpers ─────────────────────────
  /** Lip-sync an actor to every narration phrase in [from, to] (mouth rests in pauses). */
  function narrate(actor, from, to) {
    var W = words();
    from = from == null ? 0 : from; to = to == null ? D() : to;
    if (to - from < 0.15) return actor;
    if (W.length) {
      var s = null, e = null;
      for (var i = 0; i < W.length; i++) {
        var w = W[i];
        if (w.start < from - 0.01 || w.start > to) continue;
        if (s == null) { s = w.start; e = w.end; continue; }
        if (w.start - e > 0.35) { actor.say(s, Math.min(e, to)); s = w.start; }
        e = w.end;
      }
      if (s != null) actor.say(s, Math.min(e, to + 0.05));
    } else {
      var a = Math.max(from, 0.25), b = Math.min(to, D() - 0.3), k = 0, t = a;
      while (t < b - 0.2) { var e2 = Math.min(b, t + 1.5 + ((k * 7) % 5) * 0.2); actor.say(t, e2); t = e2 + 0.3; k++; }
    }
    return actor;
  }
  S.narrate = narrate;
  var AURA = { pink: [ACC, "#FFC1D9"], gold: ["#FFB52E", "#FFF1B0"], cyan: ["#2FC1FF", "#CBF5FF"], violet: [VIOLET, "#E3D6FF"], green: ["#2EC4A6", "#C8FFF0"] };
  function auraCols(name, who) {
    var k = str(name).toLowerCase();
    if (AURA[k]) return AURA[k];
    var c = CAST[who];
    var dflt = { hikari: "pink", ren: "violet", kaito: "cyan", yuki: "green", mochi: "gold" }[who] || "pink";
    return AURA[dflt];
  }
  function sideX(f, side) { return f.portrait ? 0.5 : side === "right" ? 0.72 : 0.28; }
  function oppX(f, side) { return f.portrait ? 0.5 : side === "right" ? 0.3 : 0.7; }
  function T0() { return Math.min(0.3, D() * 0.08); }

  // ───────────────────────── templates ─────────────────────────
  var T = {};

  T["character-speaks"] = function (root, p) {
    var f = new Film(root), Dd = D();
    var who = castId(p.character || "hikari"), loc = p.location || "rooftop";
    var hasText = !!p.text;
    var side = p.side === "right" ? "right" : "left";
    var stack = f.portrait || f.square;
    var tKey = syncAt(p.keyword || S.autoKey(p.text), 0, Dd * 0.4);
    var close = p.closeUp !== false && Dd > 4.2;
    var tCut = close ? clamp(Math.max(tKey + 1.1, Dd * 0.55), 1.2, Dd - 1.1) : 1e9;
    var face = stack || !hasText ? 0 : side === "left" ? 0.35 : -0.35;
    var keyG = p.gesture || (who === "ren" ? "glasses" : who === "kaito" ? "fist-up" : who === "yuki" ? "peace" : "fist");
    function act(a, from) {
      narrate(a, from, Dd);
      a.beats(p.beats || [], { start: Dd * 0.3, step: Dd * 0.2 });
      a.gesture(keyG, tKey - 0.05).gesture("rest", Math.min(Dd - 0.1, tKey + 1.6));
      if (p.keyExpression) a.expression(p.keyExpression, tKey);
      if (who === "ren") a.glint(tKey + 0.05);
      return a;
    }
    var s1 = f.shot(loc, 0, tCut);
    var fr = s1.frame("medium", stack ? "center" : hasText ? side : "center");
    if (f.square && hasText) fr.y += 60;
    var a = act(s1.character(who, { x: fr.x, y: fr.y, scale: fr.scale, facing: face, expression: p.expression || CAST[who].expr }), 0);
    s1.cam.set({ zoom: 1 }).push(1.08, 0.1, Math.max(1, Math.min(tCut, Dd) - 0.2));
    s1.sparkles(tKey, Math.min(tKey + 1.6, tCut), { count: 8, area: { x: fr.x - 260, y: fr.y - 300, w: 520, h: 360 } });
    if (close) {
      var s2 = f.shot(loc, tCut, 1e9, { enter: "zoom" });
      var fr2 = s2.frame("close", stack ? "center" : hasText ? side : "center");
      if (stack && hasText) fr2.y += f.portrait ? 90 : 120;
      if (f.square) fr2.scale *= 0.88;
      var b = act(s2.character(who, { x: fr2.x, y: fr2.y, scale: fr2.scale, facing: face, expression: p.expression || CAST[who].expr }), tCut);
      if (p.closeExpression) b.expression(p.closeExpression, tCut);
      s2.cam.set({ zoom: 1 }).push(1.05, tCut, Dd - tCut);
      s2.focusLines(tCut, tCut + 0.7, { opacity: 0.45, inner: Math.min(f.Ww, 1000) * 0.46 });
    }
    if (hasText) {
      if (stack) S.callout(p.text, tKey, { x: 0.5, y: f.portrait ? 0.15 : 0.13, width: f.portrait ? 0.86 : 0.8, kicker: p.kicker, icon: p.icon });
      else S.callout(p.text, tKey, { x: oppX(f, side), y: 0.38, width: 0.4, kicker: p.kicker, icon: p.icon });
    }
    if (p.subtitles !== false) S.subtitles({});
  };

  T.dialogue = function (root, p) {
    var f = new Film(root), Dd = D(), Ww = f.Ww;
    var names = arr(p.characters).slice(0, 2).map(function (n, i) { return castId(n, i); });
    if (names.length < 2) names = [names[0] || "hikari", (names[0] || "hikari") === "kaito" ? "hikari" : "kaito"];
    if (names[0] === names[1]) names[1] = names[0] === "kaito" ? "hikari" : "kaito";
    var loc = p.location || "classroom";
    var lines = arr(p.lines).filter(function (l) { return l && l.text; }).slice(0, 8);
    if (!lines.length) lines = [{ speaker: 0, text: "Ready?" }, { speaker: 1, text: "Always!" }];
    var spk = lines.map(function (l, i) { var s = l.speaker; if (typeof s === "string") s = castId(s) === names[1] ? 1 : 0; return s === 1 ? 1 : s === 0 ? 0 : i % 2; });
    var win = lineWindows(lines.map(function (l) { return str(l.text); }));
    function act(a, k) {
      lines.forEach(function (l, i) {
        var w = win[i];
        if (spk[i] === k) {
          a.say(w.start, w.end);
          a.expression(l.expression || (i ? CAST[names[k]].expr : "smile"), w.start - 0.1);
          if (l.gesture) a.gesture(l.gesture, w.start).gesture("rest", w.end + 0.2);
          a.look(0, 0, w.start);
        } else {
          a.expression(l.reaction || CAST[names[k]].expr, w.start + 0.25);
          a.lookAt(k === 0 ? "right" : "left", w.start);
        }
      });
      return a;
    }
    // cut list: two-shot for line 0, singles for later lines (every 3rd back to the two-shot), final two-shot if time remains
    var cuts = [{ t: 0, kind: "two" }];
    for (var i = 1; i < lines.length; i++) cuts.push({ t: Math.max(cuts[cuts.length - 1].t + 0.6, win[i].start - 0.18), kind: i % 3 === 0 ? "two" : "single", who: spk[i] });
    if (lines.length === 1 && Dd > 3) cuts.push({ t: Math.max(1, win[0].start + 0.3), kind: "single", who: spk[0] });
    var lastEnd = win[win.length - 1].end;
    if (Dd - lastEnd > 1.4) cuts.push({ t: lastEnd + 0.3, kind: "two" });
    cuts.forEach(function (c, ci) {
      var to = cuts[ci + 1] ? cuts[ci + 1].t : 1e9;
      var sh = f.shot(loc, c.t, to, { enter: ci === 0 ? "cut" : ci % 2 ? "whip-left" : "cut" });
      if (c.kind === "two") {
        var sc2 = f.portrait ? 0.64 : f.square ? 0.84 : 1.0, y2 = f.portrait ? 690 : f.square ? 540 : 480;
        var xa = Ww * (f.portrait ? 0.27 : 0.29), xb = Ww * (f.portrait ? 0.73 : 0.71);
        act(sh.character(names[0], { x: xa, y: y2, scale: sc2, facing: 0.45, expression: CAST[names[0]].expr }), 0);
        act(sh.character(names[1], { x: xb, y: y2, scale: sc2, facing: -0.45, expression: CAST[names[1]].expr, index: 1 }), 1);
        sh.cam.set({ zoom: 1 }).push(1.05, c.t, Math.max(0.5, Math.min(to, Dd) - c.t));
      } else {
        var right = c.who === 1;
        var camX = Ww / 2 + (right ? 1 : -1) * Ww * 0.16;
        var fr = sh.frame("medium", f.portrait ? 0.5 : right ? 0.62 : 0.38);
        if (f.square) fr.y += 50;
        act(sh.character(names[c.who], { x: fr.x + (camX - Ww / 2), y: fr.y, scale: fr.scale * (ci % 2 ? 1.12 : 1), facing: right ? -0.4 : 0.4, expression: CAST[names[c.who]].expr, index: c.who }), c.who);
        sh.cam.set({ x: camX, zoom: 1.02 }).push(1.08, c.t, Math.max(0.5, Math.min(to, Dd) - c.t), { x: camX });
      }
    });
    lines.forEach(function (l, i) {
      var w = win[i];
      var nx = win[i + 1] ? win[i + 1].start - 0.02 : 1e9;
      S.nameTag(names[spk[i]], w.start - 0.1, Math.min(nx, w.end + 0.9), { side: f.portrait ? "left" : spk[i] === 1 ? "right" : "left" });
    });
    S.subtitles({ lines: lines.map(function (l, i) { return { text: l.text, start: win[i].start, end: win[i].end }; }) });
  };

  T["dramatic-reveal"] = function (root, p) {
    var f = new Film(root), Dd = D(), Ww = f.Ww;
    var who = castId(p.character || "hikari"), loc = p.location || "night-city";
    var reveal = p.reveal || "!";
    var tR = syncAt(p.word || S.autoKey(reveal), 0, Dd * 0.5, 0.05);
    tR = clamp(tR, Math.min(1.1, Dd * 0.3), Dd - 0.8);
    var eyes = p.eyes !== false && tR > 1.2;
    var tC = eyes ? tR - 0.6 : tR - 0.02;
    var side = p.side === "right" ? "right" : "left";
    var s1 = f.shot(loc, 0, tC);
    var fr = s1.frame("medium", f.portrait || f.square ? "center" : side);
    if (f.square) fr.y += 40;
    var a = s1.character(who, { x: fr.x, y: fr.y, scale: fr.scale, facing: f.portrait ? 0 : side === "left" ? 0.3 : -0.3, expression: p.setupExpression || "serious" });
    narrate(a, 0, tC);
    s1.cam.set({ zoom: 1 }).push(1.16, 0, Math.max(0.6, tC));
    s1.cam.rumble(Math.max(0, tC - 1.2), tC, 3);
    if (eyes) f.cutIn(who, tC, tR - 0.02, { expression: p.eyesExpression || "determined" });
    var s2 = f.shot(loc, tR - 0.02, 1e9, { enter: "zoom" });
    var fr2 = s2.frame(f.portrait ? "close" : "close", f.portrait || f.square ? "center" : side);
    if (f.portrait) fr2.y += 160;
    if (f.square) { fr2.y += 140; fr2.scale *= 0.85; }
    var b = s2.character(who, { x: fr2.x, y: fr2.y, scale: fr2.scale, facing: f.portrait ? 0 : side === "left" ? 0.2 : -0.2, expression: p.reaction || "shocked" });
    b.shake(tR, 0.6, 10);
    if (p.afterExpression) b.expression(p.afterExpression, tR + 1.6);
    narrate(b, tR + 0.5, Dd);
    var cyL = f.portrait ? fr2.y - 40 : 470;
    s2.focusLines(tR, 1e9, { layer: "under", bg: "#FFFFFF", color: INK, x: f.portrait || f.square ? Ww / 2 : fr2.x, y: cyL, inner: f.portrait ? 300 : 330 });
    s2.speedLines(tR, tR + 0.35, { layer: "over", dir: "h", color: "#FFFFFF" });
    s2.cam.set({ zoom: 1.1 }).to({ zoom: 1 }, tR, 0.3, EASE.snap).push(1.06, tR + 0.4, Math.max(0.5, Dd - tR - 0.4));
    f.impact(tR, { shake: 22 });
    var bwX = f.portrait || f.square ? 0.5 : side === "left" ? 0.68 : 0.32;
    S.bigWord(reveal, tR + 0.06, { x: bwX, y: f.portrait ? 0.2 : f.square ? 0.2 : 0.42, width: f.portrait ? 0.9 : f.square ? 0.86 : 0.44, color: p.color });
    if (p.subtitles !== false) S.subtitles({ to: tC });
  };

  T["eyecatch-title"] = function (root, p) {
    var f = new Film(root), Dd = D(), Ww = f.Ww;
    var who = castId(p.character || "mochi");
    var s = f.shot("plain", 0, 1e9, { color: "#FFE6F2" });
    // rotating sunburst + slanted band
    var rays = g(s.under), d = "", cx = f.portrait ? Ww / 2 : Ww * 0.72, cy = f.portrait ? 640 : 520;
    for (var i = 0; i < 18; i++) { var a0 = (i / 18) * 2 * PI, a1 = a0 + PI / 18; d += "M" + P2(cx, cy) + " L" + P2(cx + Math.cos(a0) * 2200, cy + Math.sin(a0) * 2200) + " L" + P2(cx + Math.cos(a1) * 2200, cy + Math.sin(a1) * 2200) + "Z"; }
    svgEl("path", { d: d, fill: "#FFFFFF", opacity: 0.6 }, rays);
    var band = svgEl("path", { d: f.portrait ? "M-40,180 L" + fx(Ww + 40) + ",80 L" + fx(Ww + 40) + ",440 L-40,540Z" : "M-40,260 L" + fx(Ww + 40) + ",120 L" + fx(Ww + 40) + ",520 L-40,660Z", fill: ACC }, s.under);
    svgEl("path", { d: f.portrait ? "M-40,560 L" + fx(Ww + 40) + ",460 L" + fx(Ww + 40) + ",476 L-40,576Z" : "M-40,680 L" + fx(Ww + 40) + ",540 L" + fx(Ww + 40) + ",556 L-40,696Z", fill: INK }, s.under);
    s.onFrame(function (t) { setA(rays, "transform", "rotate(" + fx(t * 12) + " " + fx(cx) + " " + cy + ")"); });
    var a = s.character(who, { chibi: true, x: f.square ? Ww * 0.76 : cx, y: f.portrait ? 640 : f.square ? 700 : 470, scale: (f.portrait ? 0.95 : f.square ? 0.72 : 1.1) * (who === "mochi" ? 1.3 : 1), expression: "happy" });
    a.hop(0.35, 70, 0.4).hop(0.8, 40, 0.3).gesture("peace", 0.5).gesture("cheer", Math.min(Dd - 0.4, 2.2)).expression("sparkle", Math.min(Dd - 0.4, 2.2));
    narrate(a, 0.6, Dd);
    s.sparkles(0.3, 1e9, { count: 16, color: "#FFFFFF", color2: GOLD, size: 26 });
    s.rings(0.36, { x: cx, y: cy + 100, color: "#FFFFFF" });
    f.stripes(-0.02, 0.5);
    var pos = f.portrait ? "top" : "left";
    S.titleCard(p.title || "Episode", 0.42, { kicker: p.episode, sub: p.subtitle, pos: pos, size: "xl", maxWidth: f.portrait ? 0.9 : f.square ? 0.62 : 0.56, y: f.portrait ? 0.08 : null });
  };

  T["power-up-stat"] = function (root, p) {
    var f = new Film(root), Dd = D(), Ww = f.Ww;
    var who = castId(p.character || "kaito"), loc = p.location || "rooftop";
    var cols = auraCols(p.aura, who);
    var tS = syncAt(p.word || String(p.value), 0, Dd * 0.45);
    tS = clamp(tS, Math.min(1.2, Dd * 0.3), Dd - 1);
    var side = f.portrait ? "center" : p.side === "right" ? "right" : "left";
    var s1 = f.shot(loc, 0, tS - 0.08);
    var fr = s1.frame("medium", side);
    if (f.square) { fr.x = Ww * 0.3; fr.y += 70; fr.scale *= 0.9; }
    var a = s1.character(who, { x: fr.x, y: fr.y, scale: fr.scale, facing: f.portrait ? 0 : 0.25, expression: "determined", gesture: "ready" });
    narrate(a, 0, tS);
    s1.speedLines(0.2, 1e9, { dir: "up", bg: shade(cols[0], -0.55), color: cols[1], lineOpacity: 0.55 });
    s1.aura(a, 0.25, 1e9, { color: cols[0], color2: cols[1] });
    s1.cam.set({ zoom: 1 }).push(1.12, 0.2, Math.max(0.6, tS - 0.3)).rumble(0.25, tS, 5);
    f.flash(0.2, cols[1], 0.25, 0.7);
    var s2 = f.shot(loc, tS - 0.08, 1e9, { enter: "zoom" });
    var fr2 = s2.frame("low", side);
    if (f.square) { fr2.x = Ww * 0.3; fr2.y += 110; fr2.scale *= 0.85; }
    if (f.portrait) fr2.y += 120;
    var b = s2.character(who, { x: fr2.x, y: fr2.y, scale: fr2.scale, facing: f.portrait ? 0 : 0.2, expression: "determined", gesture: "fist-up" });
    b.expression(p.expression || "excited", tS + 0.9);
    narrate(b, tS + 0.3, Dd);
    s2.focusLines(tS, 1e9, { layer: "under", bg: shade(cols[0], -0.45), color: cols[1], x: fr2.x, y: fr2.y, opacity: 0.8 });
    s2.aura(b, tS - 0.08, 1e9, { color: cols[0], color2: cols[1], grow: 0.1 });
    s2.sparkles(tS + 0.2, 1e9, { count: 14, color: "#FFFFFF", color2: cols[1] });
    s2.rings(tS, { x: fr2.x, y: fr2.y + 150, color: cols[1] });
    s2.cam.set({ zoom: 1.15 }).to({ zoom: 1 }, tS, 0.35, EASE.snap).shake(tS, 16, 0.6);
    f.impact(tS, { shake: 20, flash: cols[1] });
    var sx = f.portrait ? 0.5 : f.square ? 0.72 : side === "right" ? 0.3 : 0.7;
    S.stat(num(p.value, 9000), tS + 0.05, { prefix: p.prefix, suffix: p.suffix, decimals: p.decimals, label: p.label, x: sx, y: f.portrait ? 0.17 : f.square ? 0.3 : 0.42, width: f.portrait ? 0.9 : f.square ? 0.5 : 0.46, color: cols[0] });
    if (p.title) S.titleCard(p.title, 0.35, { pos: "top", size: "md", until: tS - 0.1, maxWidth: f.portrait ? 0.9 : 0.6, y: f.portrait ? 0.06 : 0.08 });
  };

  T["training-montage-list"] = function (root, p) {
    var f = new Film(root), Dd = D(), Ww = f.Ww;
    var who = castId(p.character || "hikari");
    var steps = arr(p.steps).filter(function (s) { return s && s.label; }).slice(0, 5);
    if (!steps.length) steps = [{ label: "Start" }, { label: "Keep going" }];
    var times = S.syncTimes(steps.map(function (s) { return s.word || S.autoKey(s.label); }), { start: Math.min(1.2, Dd * 0.2), end: Dd * 0.82, lead: 0.15, minGap: 0.8 });
    var LOCS = [p.location || "rooftop", null, p.location2 || "meadow", null, p.location || "rooftop"];
    var BGS = [null, [ACC, "#FFFFFF"], null, ["#FFB52E", "#FFFFFF"], null];
    var GS = ["fist", "think", "punch", "cheer", "peace"], ES = ["determined", "sweat-drop", "angry", "excited", "sparkle"];
    var tStart = times[0];
    if (tStart > 0.7) {
      var s0 = f.shot(p.location || "rooftop", 0, tStart);
      var fr0 = s0.frame("medium", "center");
      var a0 = s0.character(who, { x: fr0.x, y: fr0.y + (f.portrait ? 60 : 40), scale: fr0.scale, expression: "determined", gesture: "fist" });
      narrate(a0, 0, tStart);
      s0.cam.set({ zoom: 1 }).push(1.1, 0, tStart);
      if (p.title) S.titleCard(p.title, 0.2, { pos: "top", size: "lg", until: tStart - 0.05, maxWidth: 0.9, y: 0.07 });
    }
    var n = steps.length;
    steps.forEach(function (st, i) {
      var from = i === 0 && tStart <= 0.7 ? 0 : times[i], to = i < n - 1 ? times[i + 1] : 1e9;
      var v = i === n - 1 && n > 2 ? 4 : i % 4;
      var loc = LOCS[v] || p.location || "rooftop";
      var sh = f.shot(loc, from, to, { enter: i % 2 ? "whip-right" : "whip-left" });
      if (BGS[v]) sh.speedLines(from, 1e9, { dir: v === 3 ? "diag" : "h", bg: BGS[v][0], color: BGS[v][1], lineOpacity: 0.7 });
      var charSide = f.portrait ? "center" : i % 2 ? "right" : "left";
      var kind = v === 1 ? "close" : v === 2 ? "medium" : "medium";
      var fr = sh.frame(kind, charSide);
      if (f.portrait) fr.y += kind === "close" ? 120 : 60;
      if (f.square) { fr.x = Ww * (i % 2 ? 0.7 : 0.3); fr.y += kind === "close" ? 200 : 80; fr.scale *= kind === "close" ? 0.8 : 0.92; }
      var a = sh.character(who, { x: fr.x, y: fr.y, scale: fr.scale, facing: f.portrait ? 0 : i % 2 ? -0.3 : 0.3, expression: ES[v], gesture: GS[v], wind: v === 1 || v === 3 ? 1 : 0 });
      a.hop(from + 0.05, 30, 0.25);
      if (v === 2) a.gesture("ready", from).gesture("punch", from + 0.35).gesture("ready", from + 0.7).gesture("punch", from + 1.0);
      narrate(a, from, Math.min(to, Dd));
      sh.cam.set({ zoom: 1.08 }).push(1.0, from, Math.max(0.4, Math.min(to, Dd) - from));
      if (v === 4) sh.sparkles(from + 0.2, 1e9, { count: 12 });
      if (v === 0 || v === 2) sh.speedLines(from, from + 0.4, { dir: "h", layer: "over", color: "#FFFFFF" });
      var cx = f.portrait ? 0.5 : i % 2 ? 0.3 : 0.7;
      S.stepCard(i + 1, st.label, from, to, { x: cx, y: f.portrait ? 0.16 : f.square ? 0.18 : 0.42, icon: st.icon, width: f.portrait ? 0.88 : f.square ? 0.48 : 0.42 });
    });
    // progress pips
    var pips = el("div.an-pips", { parent: f.ui });
    var tl = V.timeline();
    steps.forEach(function (s, i) {
      var dot = el("span.an-pip", { parent: pips });
      tl.fromTo(dot, { backgroundColor: "rgba(255,255,255,0.55)", scale: 1 }, { backgroundColor: ACC, scale: 1.25 }, { at: clampT(times[i]), dur: 0.2, ease: EASE.snap });
    });
  };

  T.flashback = function (root, p) {
    var f = new Film(root), Dd = D();
    var who = castId(p.character || "yuki"), loc = p.location || "shrine";
    var tRet = null;
    if (p.returnWord && V.find(p.returnWord) != null) tRet = clamp(syncAt(p.returnWord, 0, Dd * 0.75), 1.5, Dd - 0.9);
    var end = tRet || 1e9;
    var s1 = f.shot(loc, 0, end);
    var fr = s1.frame("medium", f.portrait ? "center" : "right");
    if (f.square) { fr.x = f.Ww * 0.68; fr.y += 60; fr.scale *= 0.92; }
    var a = s1.character(who, { x: fr.x, y: fr.y, scale: fr.scale, facing: f.portrait ? 0 : -0.3, expression: p.memoryExpression || "happy", gesture: "rest" });
    a.gesture("wave", 0.6).gesture("rest", Math.min(end - 0.2, 2.2)).expression("smile", Math.min(end - 0.2, 2.4));
    if (loc !== "shrine") s1.petals(0, end, { count: f.portrait ? 10 : 14 });
    s1.cam.set({ zoom: 1.12, x: f.Ww * 0.46 }).to({ zoom: 1.02, x: f.Ww * 0.54 }, 0, Math.min(end, Dd), "linear");
    f.memory(0, end);
    if (p.caption) S.titleCard(p.caption, 0.25, { until: tRet ? tRet - 0.1 : null, kicker: p.kicker || "Memory", pos: "top", size: "md", style: "slide", maxWidth: f.portrait ? 0.86 : 0.5, y: 0.07 });
    var lines = arr(p.lines).filter(Boolean).slice(0, 3).map(str);
    if (lines.length) {
      var win = lineWindows(lines, { end: Math.min(end, Dd) - 0.3 });
      var box = el("div.an-poem.an-poem-mem", { parent: f.ui });
      if (!f.portrait) { box.style.left = f.square ? "6%" : "7%"; box.style.width = f.square ? "52%" : "48%"; box.style.textAlign = "left"; }
      var tl = V.timeline();
      lines.forEach(function (l, i) {
        var row = el("div.an-poem-l", { parent: box });
        row.appendChild(S.rich(l));
        tl.fromTo(row, { opacity: 0, y: u(18), filter: "blur(6px)" }, { opacity: 1, y: 0, filter: "blur(0px)" }, { at: clampT(win[i].start - 0.1), dur: 0.7, ease: "outCubic" });
        tl.set(row, { filter: "none" }, { at: clampT(win[i].start + 0.65) });
        if (tRet) tl.to(row, { opacity: 0 }, { at: tRet - 0.2, dur: 0.2 });
      });
      fitText(box, { maxLines: 8, min: 14 });
    }
    if (tRet) {
      f.flash(tRet, "#FFFFFF", 0.6, 1);
      var s2 = f.shot(p.presentLocation || "rooftop", tRet, 1e9);
      var fr2 = s2.frame("close", f.portrait ? "center" : "left");
      if (f.portrait) fr2.y += 120;
      if (f.square) { fr2.y += 100; fr2.scale *= 0.85; fr2.x = f.Ww * 0.5; }
      var b = s2.character(who, { x: fr2.x, y: fr2.y, scale: fr2.scale, facing: f.portrait ? 0 : 0.3, expression: p.presentExpression || "determined" });
      narrate(b, tRet + 0.3, Dd);
      s2.cam.set({ zoom: 1 }).push(1.06, tRet, Dd - tRet);
      s2.sparkles(tRet + 0.3, 1e9, { count: 8 });
    }
  };

  T["versus-battle"] = function (root, p) {
    var f = new Film(root), Dd = D(), Ww = f.Ww, P = f.portrait;
    var Lp = p.left || {}, Rp = p.right || {};
    var A = castId(Lp.character || "hikari", 0), B = castId(Rp.character || "kaito", 1);
    if (A === B) B = A === "kaito" ? "hikari" : "kaito";
    var tA = syncAt(Lp.word || S.autoKey(Lp.label), 0, Dd * 0.1);
    var tB = syncAt(Rp.word || S.autoKey(Rp.label), tA + 0.3, Dd * 0.33);
    tB = Math.max(tB, tA + 0.6);
    var tC = syncAt(p.word, tB + 0.4, Dd * 0.6);
    tC = clamp(Math.max(tC, tB + 0.8), 1.4, Dd - 1.0);
    var s = f.shot("plain", 0, 1e9, { color: "#1F1A3A" });
    var ca = auraCols(Lp.aura, A), cb = auraCols(Rp.aura, B);
    var polyA = P ? "M-60,-60 L" + fx(Ww + 60) + ",-60 L" + fx(Ww + 60) + ",440 L-60,560Z" : "M-60,-60 L" + fx(Ww * 0.56) + ",-60 L" + fx(Ww * 0.44) + ",1060 L-60,1060Z";
    var polyB = P ? "M-60,560 L" + fx(Ww + 60) + ",440 L" + fx(Ww + 60) + ",1060 L-60,1060Z" : "M" + fx(Ww * 0.56) + ",-60 L" + fx(Ww + 60) + ",-60 L" + fx(Ww + 60) + ",1060 L" + fx(Ww * 0.44) + ",1060Z";
    var halves = [[polyA, ca, A, 0], [polyB, cb, B, 1]].map(function (h) {
      var id = nid("v");
      var cp = svgEl("clipPath", { id: id }, f.defs);
      svgEl("path", { d: h[0] }, cp);
      var G = g(s.chars, { "clip-path": "url(#" + id + ")" });
      var bg = g(G);
      svgEl("path", { d: h[0], fill: shade(h[1][0], -0.35) }, bg);
      var lines = g(G);
      var rnd = V.makeRand(h[3] * 13 + 5), d = "";
      for (var i = 0; i < 40; i++) { var y = rnd() * 1000, w = 2 + rnd() * 8, x = rnd() * Ww, L = 200 + rnd() * 500; d += P ? "M" + P2(rnd() * Ww - w / 2, y) + " L" + P2(rnd() * Ww, y + L) + " L" + P2(rnd() * Ww + w / 2, y) + "Z" : "M" + P2(x, y - w / 2) + " L" + P2(x + L, y) + " L" + P2(x, y + w / 2) + "Z"; }
      var lp = svgEl("path", { d: d, fill: h[1][1], opacity: 0.45 }, lines);
      var chars = g(G);
      return { G: G, lines: lines, chars: chars };
    });
    s.onFrame(function (t) {
      var off = (t * 1400) % 600;
      setA(halves[0].lines, "transform", P ? "translate(0," + fx(-off) + ")" : "translate(" + fx(off - 300) + ",0)");
      setA(halves[1].lines, "transform", P ? "translate(0," + fx(off - 300) + ")" : "translate(" + fx(-off) + ",0)");
    });
    // divider
    svgEl("path", { d: P ? "M-60,560 L" + fx(Ww + 60) + ",440" : "M" + fx(Ww * 0.56) + ",-60 L" + fx(Ww * 0.44) + ",1060", stroke: INK, "stroke-width": 26 }, s.chars);
    svgEl("path", { d: P ? "M-60,560 L" + fx(Ww + 60) + ",440" : "M" + fx(Ww * 0.56) + ",-60 L" + fx(Ww * 0.44) + ",1060", stroke: "#FFFFFF", "stroke-width": 9 }, s.chars);
    var sq = f.square;
    var posA = P ? { x: Ww * 0.5, y: 300, s: 0.78 } : { x: Ww * (sq ? 0.26 : 0.25), y: sq ? 540 : 470, s: sq ? 0.95 : 1.15 };
    var posB = P ? { x: Ww * 0.5, y: 780, s: 0.78 } : { x: Ww * (sq ? 0.74 : 0.75), y: sq ? 540 : 470, s: sq ? 0.95 : 1.15 };
    var ra = new Actor(s, A, { x: posA.x, y: posA.y, scale: posA.s, facing: P ? 0.3 : 0.45, expression: "determined", gesture: "ready", parent: halves[0].chars });
    var rb = new Actor(s, B, { x: posB.x, y: posB.y, scale: posB.s, facing: P ? -0.3 : -0.45, expression: "smug", gesture: "cross", parent: halves[1].chars, index: 1 });
    ra.slideIn(P ? "left" : "left", Math.max(0, tA - 0.3), 0.28);
    rb.slideIn(P ? "right" : "right", Math.max(0, tB - 0.3), 0.28);
    narrate(ra, tA - 0.1, tB - 0.2);
    narrate(rb, tB - 0.1, tC - 0.2);
    s.aura(ra, tA, 1e9, { color: ca[0], color2: ca[1] });
    s.aura(rb, tB, 1e9, { color: cb[0], color2: cb[1] });
    // clash
    var dx = P ? 0 : Ww * 0.1;
    ra.moveTo(posA.x + dx, P ? posA.y + 90 : null, tC - 0.12, 0.12, "smear").moveTo(posA.x, P ? posA.y : null, tC + 0.25, 0.35, "outCubic");
    rb.moveTo(posB.x - dx, P ? posB.y - 90 : null, tC - 0.12, 0.12, "smear").moveTo(posB.x, P ? posB.y : null, tC + 0.25, 0.35, "outCubic");
    ra.gesture("punch", tC - 0.12, 0.1).expression("angry", tC - 0.15);
    rb.gesture("punch-left", tC - 0.12, 0.1).expression("angry", tC - 0.15);
    var cxp = Ww / 2, cyp = 500;
    s.burst(tC, { x: cxp, y: cyp, r: P ? 150 : 200 });
    s.rings(tC, { x: cxp, y: cyp, squash: 0.8 });
    s.sparkles(tC, tC + 1.2, { count: 18, area: { x: cxp - 300, y: cyp - 250, w: 600, h: 500 }, size: 26 });
    f.impact(tC, { shake: 26, x: cxp, y: cyp });
    var v = str(p.verdict || "tie").toLowerCase(), tV = Math.min(Dd - 0.4, tC + 0.9);
    if (v === "left" || v === "right") {
      var W1 = v === "left" ? ra : rb, L1 = v === "left" ? rb : ra;
      W1.expression("sparkle", tV).gesture("peace", tV).hop(tV, 30, 0.3);
      L1.expression("panic", tV).gesture("panic", tV).shake(tV, 0.8, 6);
      narrate(W1, tC + 0.3, Dd);
    } else {
      ra.expression("smug", tV).gesture("thumbs", tV); rb.expression("smile", tV).gesture("rest", tV);
      narrate(ra, tC + 0.3, Dd);
    }
    // VS + labels
    var tl = V.timeline();
    var vs = el("div.an-vs", { parent: f.ui, text: "VS" });
    tl.fromTo(vs, { scale: 3, opacity: 0, rotate: -30 }, { scale: 1, opacity: 1, rotate: -8 }, { at: clampT(tB + 0.15), dur: 0.22, ease: EASE.smear });
    [[Lp, A, 0, tA], [Rp, B, 1, tB]].forEach(function (q) {
      var c = CAST[q[1]];
      var lab = el("div.an-vlab.an-vlab-" + q[2], { parent: f.ui });
      el("div.an-vlab-n", { parent: lab, text: c.name.toUpperCase() });
      var t2 = el("div.an-vlab-t", { parent: lab });
      t2.appendChild(S.rich(q[0].label || c.name));
      if (q[0].stat) el("div.an-vlab-s", { parent: lab, text: plain(q[0].stat) });
      lab.style.setProperty("--an-chip", (q[2] ? cb : ca)[0]);
      fitText(t2, { maxLines: 2, min: 14 });
      tl.fromTo(lab, { opacity: 0, x: (q[2] ? 1 : -1) * u(240) }, { opacity: 1, x: 0 }, { at: clampT(q[3] + 0.05), dur: 0.26, ease: EASE.whip });
    });
  };

  T["lesson-board"] = function (root, p) {
    var f = new Film(root), Dd = D(), Ww = f.Ww;
    var who = castId(p.character || "ren");
    var s = f.shot("classroom", 0, 1e9);
    var pts = arr(p.points).filter(function (x) { return x && (x.text || typeof x === "string"); }).slice(0, 4).map(function (x) { return typeof x === "string" ? { text: x } : x; });
    if (!pts.length) pts = [{ text: "Key idea" }];
    var times = S.syncTimes(pts.map(function (x) { return x.word || S.autoKey(x.text); }), { start: 0.9, end: Dd * 0.8, lead: 0.2, minGap: 0.6 });
    var pos = f.portrait ? { x: Ww * 0.5, y: 770, s: 0.92, f: 0 } : f.square ? { x: Ww * 0.83, y: 560, s: 0.86, f: -0.45 } : { x: Ww * 0.81, y: 480, s: 1.05, f: -0.45 };
    var a = s.character(who, { x: pos.x, y: pos.y, scale: pos.s, facing: pos.f, expression: CAST[who].expr });
    narrate(a);
    if (who === "ren") a.glint(0.35).gesture("glasses", 0.2).gesture("rest", 0.8);
    var exprs = ["calm", "smile", "serious", "smile"];
    times.forEach(function (t, i) {
      a.gesture(f.portrait ? "point-up" : "point-left", t - 0.15).gesture("rest", Math.min(Dd - 0.1, t + 0.9));
      a.expression(pts[i].expression || exprs[i % 4], t - 0.1);
    });
    a.expression(p.endExpression || "smile", Math.min(Dd - 0.3, times[times.length - 1] + 1.2)).gesture("explain", Math.min(Dd - 0.3, times[times.length - 1] + 1.2));
    var bt = S.boardText(s, p.title, pts.map(function (x) { return x.text; }), times, { titleAt: 0.3 });
    var b = s.board;
    s.cam.set({ zoom: 1.0 }).push(1.06, 0.2, Dd * 0.8, { x: Ww / 2 + (b.x + b.w / 2 - Ww / 2) * 0.25 });
    times.forEach(function (t) { s.sparkles(t, t + 0.8, { count: 5, area: { x: b.x, y: b.y, w: b.w, h: b.h }, size: 12, color: "#FFFFFF" }); });
  };

  T["sky-montage"] = function (root, p) {
    var f = new Film(root), Dd = D(), Ww = f.Ww;
    var loc = p.location || "sky";
    var two = Dd > 7.5 && p.cuts !== false;
    var tCut = two ? Dd * 0.55 : 1e9;
    var s1 = f.shot(loc, 0, tCut);
    s1.cam.set({ zoom: 1.18, y: 380, x: Ww * 0.44 }).to({ zoom: 1.02, y: 520, x: Ww * 0.56 }, 0, Math.min(tCut, Dd), "inOutSine");
    if (two) {
      var s2 = f.shot(loc, tCut, 1e9, { enter: "cut" });
      s2.cam.set({ zoom: 1.3, x: Ww * 0.62, y: 450 }).to({ zoom: 1.2, x: Ww * 0.4 }, tCut, Dd - tCut, "inOutSine");
      f.flash(tCut, "#FFFFFF", 0.35, 0.6);
    }
    [s1, s2].forEach(function (sh) {
      if (!sh) return;
      if (loc === "night-city" || loc === "space") sh.sparkles(0, 1e9, { count: 18, size: 14, color: "#FFFFFF", color2: "#FFE38A", layer: "under" });
      else if (loc === "shrine") sh.sparkles(0, 1e9, { count: 6, size: 16 });
      else if (loc !== "train" && loc !== "classroom") sh.petals(0, 1e9, { count: f.portrait ? 6 : 9, color: "#FFFFFF", size: 1.1 });
    });
    if (loc === "sky" || loc === "meadow" || loc === "rooftop") {
      var fl = el("div.an-flare", { parent: f.ui });
      f.onFrame(function (t) { setS(fl, "transform", "translate(" + fx(Math.sin(t * 0.3) * u(40)) + "px," + fx(Math.cos(t * 0.25) * u(20)) + "px)"); });
    }
    var lines = arr(p.lines).filter(Boolean).slice(0, 3).map(str);
    if (lines.length) {
      var win = lineWindows(lines);
      var box = el("div.an-poem", { parent: f.ui });
      var tl = V.timeline();
      lines.forEach(function (l, i) {
        var row = el("div.an-poem-l", { parent: box });
        row.appendChild(S.rich(l));
        tl.fromTo(row, { opacity: 0, y: u(20), letterSpacing: "0.3em" }, { opacity: 1, y: 0, letterSpacing: "0.04em" }, { at: clampT(win[i].start - 0.15), dur: 1.0, ease: "outCubic" });
      });
      fitText(box, { maxLines: 7, min: 14 });
    }
    if (p.caption) {
      var cap = el("div.an-place", { parent: f.ui });
      el("div.an-place-t", { parent: cap, text: plain(p.caption) });
      if (p.subcaption) el("div.an-place-s", { parent: cap, text: plain(p.subcaption) });
      var tl2 = V.timeline();
      tl2.fromTo(cap, { clipPath: "inset(0% 100% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)" }, { at: 0.4, dur: 0.5, ease: EASE.whip });
    }
  };

  T["chibi-explainer"] = function (root, p) {
    var f = new Film(root), Dd = D(), Ww = f.Ww;
    var who = castId(p.character || "mochi");
    var s = f.shot("plain", 0, 1e9, { color: p.color || "#FFF0F7" });
    var pos = f.portrait ? { x: Ww * 0.5, y: 830, s: 0.92 } : f.square ? { x: Ww * 0.25, y: 600, s: 0.86 } : { x: Ww * 0.22, y: 500, s: 1.1 };
    var a = s.character(who, { chibi: true, x: pos.x, y: pos.y, scale: pos.s * (who === "mochi" ? 1.4 : 1), facing: f.portrait ? 0 : 0.3, expression: "happy", gesture: "explain" });
    narrate(a);
    var ph = phrases(0, Dd);
    ph.forEach(function (q, i) { if (i < 8) a.hop(q.s, 22, 0.24); });
    if (!ph.length) for (var h = 0.4; h < Dd - 0.5; h += 1.4) a.hop(h, 22, 0.24);
    var tW = syncAt(p.word || S.autoKey(p.fact), 0, Dd * 0.55);
    var r = str(p.reaction || "sparkle").toLowerCase();
    var RX = { sparkle: ["sparkle", "cheer"], panic: ["panic", "panic"], happy: ["happy", "cheer"], shocked: ["shocked", "panic"], smug: ["smug", "thumbs"], flustered: ["flustered", "panic"] }[r] || ["sparkle", "cheer"];
    a.expression(RX[0], tW).gesture(RX[1], tW).hop(tW, 60, 0.36);
    a.expression("happy", Math.min(Dd - 0.2, tW + 1.8)).gesture("peace", Math.min(Dd - 0.2, tW + 1.8));
    if (r === "panic" || r === "shocked" || r === "flustered") { a.shake(tW, 0.9, 8); s.focusLines(tW, tW + 1.2, { layer: "under", color: "#FFC1D9", opacity: 0.8 }); s.cam.shake(tW, 10, 0.4); }
    else { s.sparkles(tW, 1e9, { count: 14, color: GOLD, color2: "#FFFFFF", stroke: INK }); s.rings(tW, { x: pos.x, y: pos.y, color: ACC }); }
    var bub = f.portrait ? { x: 0.5, y: 0.2, w: 0.86, tail: "down" } : f.square ? { x: 0.68, y: 0.24, w: 0.56, tail: "left" } : { x: 0.64, y: 0.28, w: 0.54, tail: "left" };
    S.bubble(p.fact || "Did you know?", 0.25, 1e9, { x: bub.x, y: bub.y, width: bub.w, tail: bub.tail });
    var icons = arr(p.icons).filter(Boolean).slice(0, 4);
    var it = S.syncTimes(icons.map(function (q) { return q.word || S.autoKey(q.label); }), { start: 0.9, end: Dd * 0.8, minGap: 0.4 });
    icons.forEach(function (q, i) {
      var n = icons.length, x, y;
      if (f.portrait) { x = 0.5 + (i - (n - 1) / 2) * (n > 3 ? 0.22 : 0.26); y = 0.43; }
      else { x = bub.x + (i - (n - 1) / 2) * Math.min(0.2, (bub.w * 1.05) / n); y = f.square ? 0.64 : 0.66; }
      S.iconPop(q.icon, q.label, it[i], { x: x, y: y, phase: i, color: S.color(i) });
    });
    s.cam.set({ zoom: 1.04 }).push(1.0, 0, Dd);
  };

  // ───────────────────────── public API ─────────────────────────
  /** Start (or get) the film for this scene. */
  S.film = function (root) { return film || new Film(root || V.root()); };
  /** One shot spanning the whole scene (custom mode convenience). Returns the Shot. */
  S.scene = function (location, opts) {
    opts = opts || {};
    if (location && typeof location === "object") { opts = location; location = opts.location; }
    return S.film(opts.root).shot(location || "rooftop", 0, 1e9, opts);
  };
  S.shot = function (location, from, to, opts) { return S.film().shot(location, from, to, opts); };
  S.currentShot = function () { var f = S.film(); return f.shots[f.shots.length - 1] || f.shot("plain", 0, 1e9); };
  S.character = function (name, opts) { return S.currentShot().character(name, opts); };
  S.impact = function (at, opts) { return S.film().impact(at, opts); };
  S.flash = function (at, color, dur) { return S.film().flash(at, color, dur); };
  S.shakeFrame = function (at, amp, dur) { return S.film().shake(at, amp, dur); };
  S.cutIn = function (name, from, to, opts) { return S.film().cutIn(name, from, to, opts); };
  S.stripes = function (at, dur) { return S.film().stripes(at, dur); };
  S.memory = function (from, to) { return S.film().memory(from, to == null ? 1e9 : to); };
  S.cast = CAST_IDS.slice();
  S.castInfo = function () { var o = {}; CAST_IDS.forEach(function (k) { o[k] = CAST[k].name + " — " + CAST[k].role; }); return o; };
  S.locations = Object.keys(LOCATIONS);
  S.expressions = Object.keys(EXPR);
  S.gestures = Object.keys(GEST);
  S.animeTemplates = T;
  S.templateIds = Object.keys(T);

  S.render = function (id, root, props) {
    var fn = T[id];
    if (!fn) throw new Error("Unknown template: " + id);
    root = root || V.root();
    try {
      film = null;
      fn(root, props || {});
    } catch (e) {
      V.error("anime template " + id + ": " + (e && e.message));
      try { V.reset(); } catch (e2) {}
      film = null;
      S.fallback(root, V.narration);
    }
    return root;
  };

  /** Fallback: Hikari on the school rooftop talking the narration with anime subtitles. Never throws. */
  S.fallback = function (root, narration) {
    try {
      root = root || V.root();
      root.innerHTML = "";
      root.className = "";
      root.removeAttribute("style");
      film = null;
      var f = new Film(root), Dd = D();
      var s = f.shot("rooftop", 0, 1e9);
      var fr = s.frame("medium", "center");
      var a = s.character("hikari", { x: fr.x, y: fr.y + (f.portrait ? 40 : 30), scale: fr.scale, expression: "smile" });
      narrate(a, 0, Dd);
      a.gesture("wave", 0.15).gesture("rest", Math.min(Dd - 0.1, 1.3));
      s.cam.set({ zoom: 1 }).push(1.08, 0, Dd);
      S.subtitles({ text: narration != null ? narration : V.narration });
      return root;
    } catch (e) {
      V.error("anime fallback: " + (e && e.message));
      try {
        V.reset();
        root.innerHTML = "";
        var t = el("div", { parent: root, style: { position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center", padding: "8%", fontSize: u(64) + "px", fontWeight: "900", fontStyle: "italic", textAlign: "center", color: INK, background: PAPER, fontFamily: "system-ui, sans-serif" } });
        t.textContent = str(narration || V.narration).split(/\s+/).slice(0, 12).join(" ");
      } catch (e2) {}
    }
  };
})();
