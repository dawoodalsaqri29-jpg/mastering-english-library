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
/* Scene engine: doodle-world — "Doodle World".
 * Simple scrappy hand-drawn doodle people (thick uneven outlines, round heads, big round eyes)
 * living inside richly painted parallax worlds across the ages: caves, savanna, tundra, the Nile,
 * Roman forums, medieval villages, modern streets, far-future cities and a dying sun.
 * Era outfits, animals, deadpan reaction marks, chunky thumbnail headlines, labelled arrows,
 * hot/cold indicators, year counters, fire flicker, weather and slow camera pans.
 * Pure function of time: everything is built once and updated from V.onFrame(t).
 */
(function () {
  "use strict";
  var V = window.V;
  var S = (window.SceneStyle = window.SceneStyle || {});
  var el = V.el;
  var SVGNS = "http://www.w3.org/2000/svg";

  S.init({
    id: "doodle-world",
    kind: "minimal",
    enter: "pop",
    titleReveal: "mask",
    drift: 0,
    series: ["#FFD400", "#F26B3A", "#4FB0C6", "#8BC34A", "#E04E6B", "#FFFFFF"],
  });

  // ───────────────────────── utils ─────────────────────────
  var INK = "#2B1A12";
  var OUT = 6; // outline width in world units
  var PI = Math.PI, D2R = PI / 180;
  function str(v) { return v == null ? "" : String(v); }
  function arr(v) { return Array.isArray(v) ? v : v == null ? [] : [v]; }
  function num(v, d) { v = Number(v); return isFinite(v) ? v : d; }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function lerp(a, b, p) { return a + (b - a) * p; }
  function sm(p) { p = clamp(p, 0, 1); return p * p * (3 - 2 * p); }
  function fx(n) { return Math.round(n * 100) / 100; }
  function hash01(n) { var x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); }
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
  function D() { return V.duration; }
  function lastT() { return Math.max(0.05, V.duration - 0.05); }
  function clampT(t) { return clamp(num(t, 0), 0, lastT()); }
  function shade(hex, amt) {
    var h = str(hex).replace("#", "");
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    var n = parseInt(h, 16);
    if (isNaN(n)) return hex;
    var r = (n >> 16) & 255, gg = (n >> 8) & 255, b = n & 255;
    var tgt = amt < 0 ? 0 : 255, p = Math.abs(amt);
    r = Math.round(lerp(r, tgt, p)); gg = Math.round(lerp(gg, tgt, p)); b = Math.round(lerp(b, tgt, p));
    return "#" + ((1 << 24) | (r << 16) | (gg << 8) | b).toString(16).slice(1);
  }
  function rgba(hex, a) {
    var h = str(hex).replace("#", "");
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    var n = parseInt(h, 16);
    if (isNaN(n)) return hex;
    return "rgba(" + ((n >> 16) & 255) + "," + ((n >> 8) & 255) + "," + (n & 255) + "," + fx(a) + ")";
  }
  var EASE = {
    pop: function (p) { p = clamp(p, 0, 1); var q = p - 1, s = 1.9; return q * q * ((s + 1) * q + s) + 1; },
    pose: function (p) { p = clamp(p, 0, 1); var q = p - 1, s = 1.1; return q * q * ((s + 1) * q + s) + 1; },
    soft: function (p) { p = clamp(p, 0, 1); return p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2; },
    stepIn: function (p) { p = clamp(p, 0, 1); return p < 0.001 ? 0 : 1; },
  };
  S.doodleEase = EASE;
  function easeFn(e) {
    if (typeof e === "function") return e;
    if (e && V.ease[e]) return V.ease[e];
    return EASE[e] || V.ease.inOutCubic;
  }

  // ───────────────────────── word timing ─────────────────────────
  function words() { return V.words || []; }
  function normW(w) { return str(w).toLowerCase().replace(/[^\p{L}\p{N}']+/gu, ""); }
  function syncAt(word, after, fallback, lead) {
    if (word) {
      var t = V.find(str(word), after || 0);
      if (t != null) return clampT(t - (lead == null ? 0.12 : lead));
    }
    return clampT(fallback);
  }
  function tAt(word, frac, after, lead) { return syncAt(word, after || 0, D() * frac, lead); }
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
    var last = ws[ws.length - 1];
    for (var j = idx + ws.length - 1; j >= idx && j < Math.min(W.length, idx + ws.length + 3); j++) {
      if (normW(W[j].word) === last) { endIdx = j; break; }
    }
    return { start: W[idx].start, end: W[endIdx].end, found: true };
  }
  function lineWindows(lines, opts) {
    opts = opts || {};
    var Dd = V.duration;
    var t0 = opts.start != null ? opts.start : Math.min(0.5, Dd * 0.08);
    var t1 = opts.end != null ? opts.end : Math.max(t0 + 0.5, Dd - Math.min(0.6, Dd * 0.08));
    var n = lines.length, out = new Array(n), after = 0, foundAny = false;
    for (var i = 0; i < n; i++) {
      var w = findLine(lines[i], after);
      if (w && w.end > w.start) { out[i] = w; after = w.end - 0.01; foundAny = true; }
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
      for (k = i0; k < j; k++) {
        var len = ((b - a) * (lens[k] + 1.2)) / tot;
        out[k] = { start: cur, end: cur + len * 0.8, found: false };
        cur += len;
      }
      i0 = j;
    }
    for (i = 0; i < n; i++) {
      out[i].start = clamp(out[i].start, 0, Math.max(0, Dd - 0.3));
      out[i].end = clamp(Math.max(out[i].end, out[i].start + 0.3), 0, Dd);
    }
    out.foundAny = foundAny;
    return out;
  }
  S.lineWindows = lineWindows;
  S.lines = lineWindows;
  S.syncAt = syncAt;

  function wordVisemes(word) {
    var w = str(word).toLowerCase().replace(/[^a-zÀ-ɏ]/g, "");
    if (!w) return [{ open: 0.7, wide: 0.2 }];
    var groups = w.match(/[aeiouyàáâäãåèéêëìíîïòóôöõùúûü]+/g) || ["a"];
    var out = [];
    for (var i = 0; i < Math.min(groups.length, 5); i++) {
      var v = groups[i][0];
      if (/[oòóôöõuùúûü]/.test(v)) out.push({ open: 0.8, wide: 0 });
      else if (/[aàáâäãå]/.test(v)) out.push({ open: 1, wide: 0.3 });
      else out.push({ open: 0.55, wide: 0.9 });
    }
    out.lip = /^[mbpfv]/.test(w);
    return out;
  }

  // ───────────────────────── hand-drawn geometry ─────────────────────────
  /** Closed wobbly blob through n points around an ellipse (scrappy outline). */
  function roughEllipse(cx, cy, rx, ry, seed, amp, n) {
    n = n || 14; amp = amp == null ? 0.05 : amp;
    var pts = [];
    for (var i = 0; i < n; i++) {
      var a = (i / n) * PI * 2;
      var w = 1 + (hash01(seed * 7.1 + i * 3.3) - 0.5) * 2 * amp;
      pts.push([cx + Math.cos(a) * rx * w, cy + Math.sin(a) * ry * w]);
    }
    return smoothClosed(pts);
  }
  function smoothClosed(pts) {
    var n = pts.length, d = "";
    for (var i = 0; i < n; i++) {
      var p0 = pts[i], p1 = pts[(i + 1) % n];
      var mx = (p0[0] + p1[0]) / 2, my = (p0[1] + p1[1]) / 2;
      if (i === 0) d += "M" + fx(mx) + "," + fx(my);
      var p2 = pts[(i + 2) % n];
      var nx = (p1[0] + p2[0]) / 2, ny = (p1[1] + p2[1]) / 2;
      d += " Q" + fx(p1[0]) + "," + fx(p1[1]) + " " + fx(nx) + "," + fx(ny);
    }
    return d + "Z";
  }
  function smoothOpen(pts) {
    var n = pts.length;
    if (n < 2) return "";
    var d = "M" + fx(pts[0][0]) + "," + fx(pts[0][1]);
    if (n === 2) return d + " L" + fx(pts[1][0]) + "," + fx(pts[1][1]);
    for (var i = 1; i < n - 1; i++) {
      var mx = (pts[i][0] + pts[i + 1][0]) / 2, my = (pts[i][1] + pts[i + 1][1]) / 2;
      d += " Q" + fx(pts[i][0]) + "," + fx(pts[i][1]) + " " + fx(mx) + "," + fx(my);
    }
    d += " T" + fx(pts[n - 1][0]) + "," + fx(pts[n - 1][1]);
    return d;
  }
  /** Jittered polyline path (hand-drawn line). */
  function roughLine(x1, y1, x2, y2, seed, amp) {
    amp = amp == null ? 3 : amp;
    var n = Math.max(2, Math.round(Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)) / 40) + 1);
    var pts = [];
    for (var i = 0; i <= n; i++) {
      var p = i / n, j = i === 0 || i === n ? 0 : 1;
      pts.push([lerp(x1, x2, p) + (hash01(seed * 3.7 + i * 1.9) - 0.5) * 2 * amp * j, lerp(y1, y2, p) + (hash01(seed * 5.3 + i * 2.7) - 0.5) * 2 * amp * j]);
    }
    return smoothOpen(pts);
  }
  function roughRect(x, y, w, h, seed, amp) {
    amp = amp == null ? 3 : amp;
    var c = [[x, y], [x + w, y], [x + w, y + h], [x, y + h]];
    var pts = [];
    for (var i = 0; i < 4; i++) {
      var a = c[i], b = c[(i + 1) % 4];
      for (var k = 0; k < 3; k++) {
        var p = k / 3;
        pts.push([lerp(a[0], b[0], p) + (hash01(seed + i * 9 + k * 2.1) - 0.5) * amp * 2, lerp(a[1], b[1], p) + (hash01(seed + i * 7 + k * 3.3) - 0.5) * amp * 2]);
      }
    }
    var d = "M" + fx(pts[0][0]) + "," + fx(pts[0][1]);
    for (i = 1; i < pts.length; i++) d += " L" + fx(pts[i][0]) + "," + fx(pts[i][1]);
    return d + "Z";
  }
  S.rough = { ellipse: roughEllipse, line: roughLine, rect: roughRect, closed: smoothClosed, open: smoothOpen };

  // ───────────────────────── cast & outfits ─────────────────────────
  // Fixed recurring cast. Outfits are era presets applied per scene (default from the location's era).
  var CAST = {
    og: { name: "Og", desc: "the everyman protagonist; medium-tan skin, three messy brown tufts", skin: "#E8B78C", hair: "#5A3A22", hairStyle: "tufts", scale: 1, wide: 1, blush: "#E89A7A" },
    ug: { name: "Ug", desc: "big burly friend; ruddy skin, bushy black beard and a unibrow", skin: "#D9A070", hair: "#2A1A12", hairStyle: "shag", beard: true, scale: 1.1, wide: 1.25, blush: "#D98A6A" },
    nia: { name: "Nia", desc: "quick, sceptical woman; brown skin, high ponytail tuft", skin: "#A86A48", hair: "#1E1410", hairStyle: "pony", scale: 0.97, wide: 0.92, blush: "#C9705A" },
    pip: { name: "Pip", desc: "small curious kid; light skin, single curl on top", skin: "#F2CBA7", hair: "#C9712B", hairStyle: "curl", scale: 0.72, wide: 0.95, blush: "#F0A08A", kid: true },
    elder: { name: "Elder", desc: "wise old one; pale skin, long white beard, bald with two side wisps", skin: "#E9C4A2", hair: "#EDEDE6", hairStyle: "wisps", beard: true, scale: 0.96, wide: 1.05, blush: "#E0A090" },
    zed: { name: "Zed", desc: "tall skinny nervous one; olive skin, flat spiky hair", skin: "#D5B07E", hair: "#3A2A1C", hairStyle: "spikes", scale: 1.08, wide: 0.82, blush: "#D89A7A" },
  };
  S.CAST = CAST;
  var CAST_IDS = Object.keys(CAST);
  function castId(name, i) {
    var k = str(name).toLowerCase().trim();
    if (CAST[k]) return k;
    return CAST_IDS[(((i || 0) % CAST_IDS.length) + CAST_IDS.length) % CAST_IDS.length];
  }
  // Outfit presets: body fill, hem style, legs colour, accessories
  var OUTFITS = {
    caveman: { body: "#B07040", body2: "#8E5630", hem: "jagged", legs: "skin", strap: true, feet: "bare", head: null },
    egyptian: { body: "#F6F0DC", body2: "#E6DCC0", hem: "straight", legs: "skin", collar: "#E7B64A", head: "nemes", feet: "sandal" },
    roman: { body: "#F1E8D2", body2: "#D9CDB2", hem: "straight", legs: "skin", sash: "#B8312F", head: "laurel", feet: "sandal" },
    medieval: { body: "#7D7A4A", body2: "#5F5C36", hem: "straight", legs: "#5A4634", belt: "#3C2A1C", head: "hood", feet: "boot" },
    modern: { body: "#4F8FD6", body2: "#3A72B3", hem: "straight", legs: "#3E4F78", head: null, feet: "sneaker" },
    future: { body: "#C9D6E2", body2: "#A9B8C8", hem: "straight", legs: "#8D9BB0", glow: "#5BE2FF", head: "visor", feet: "boot" },
    greek: { body: "#F8F4E6", body2: "#E3DCC7", hem: "straight", legs: "skin", sash: "#3B6FB6", head: "laurel", feet: "sandal" },
    viking: { body: "#6B4A33", body2: "#4F3524", hem: "jagged", legs: "#4A3A2E", strap: true, head: "horns", feet: "boot" },
  };
  S.OUTFITS = OUTFITS;
  var OUTFIT_ALIASES = { cave: "caveman", cavewoman: "caveman", stoneage: "caveman", "stone-age": "caveman", fur: "caveman", egypt: "egyptian", pharaoh: "egyptian", rome: "roman", legionary: "roman", peasant: "medieval", knight: "medieval", villager: "medieval", today: "modern", now: "modern", futuristic: "future", scifi: "future", "sci-fi": "future", athens: "greek", norse: "viking" };
  function outfitName(n) { n = str(n).toLowerCase().trim(); if (OUTFITS[n]) return n; return OUTFIT_ALIASES[n] || null; }
  // per-character modern shirt colours so the modern cast stays distinct
  var SHIRTS = { og: "#4F8FD6", ug: "#D9573B", nia: "#E6B23A", pip: "#8BC34A", elder: "#7D6AA6", zed: "#3FB8A6" };

  // ───────────────────────── expressions ─────────────────────────
  // eo: eye open (1 normal, 1.35 wide), ps: pupil size, lid: upper-lid droop (deadpan), bY: brow height (+down), bA: brow angle (+ = inner raised/worried)
  // ms: mouth smile (-1..1), mo: mouth open (0..1), mw: mouth width, wob: mouth wobble (nervous), sweat: 0/1, blush
  var EBASE = { eo: 1, ps: 1, lid: 0, bY: 0, bA: 0, ms: 0.15, mo: 0, mw: 16, wob: 0, blush: 0, pale: 0 };
  var EXPR = {
    neutral: {},
    deadpan: { lid: 0.5, ms: -0.05, mw: 18, bY: 2 },
    happy: { ms: 1, mo: 0.25, mw: 22, blush: 0.5, bY: -3 },
    excited: { eo: 1.25, ms: 1, mo: 0.75, mw: 22, bY: -8, blush: 0.5 },
    sad: { ms: -0.9, mw: 14, bA: 18, bY: -2, lid: 0.15 },
    shocked: { eo: 1.45, ps: 0.55, mo: 0.8, ms: 0, mw: 11, bY: -12 },
    scared: { eo: 1.4, ps: 0.45, mo: 0.5, ms: -0.7, mw: 18, wob: 1, bA: 20, bY: -8, sweat: 1, pale: 0.4 },
    confused: { eo: 1.05, ms: -0.2, mw: 10, bY: -6, bA: -10, lid: 0.1 },
    angry: { eo: 0.85, lid: 0.3, bA: -26, bY: 5, ms: -0.8, mo: 0.3, mw: 18 },
    tired: { lid: 0.65, ms: -0.3, mw: 14, bY: 3 },
    hot: { lid: 0.35, ms: -0.5, mo: 0.45, mw: 16, sweat: 1, blush: 0.9 },
    cold: { eo: 1.1, ms: -0.4, mw: 17, wob: 1, bA: 12, pale: 0.9 },
    smug: { lid: 0.45, ms: 0.8, mw: 18, bY: -2 },
    thinking: { lid: 0.2, ms: -0.1, mw: 9, bY: -5, bA: -6 },
    hungry: { eo: 1.1, mo: 0.6, ms: 0.6, mw: 18, blush: 0.4 },
    sleepy: { lid: 0.9, ms: 0.1, mw: 12, mo: 0.15 },
    proud: { ms: 0.9, mw: 20, bY: -4, lid: 0.2 },
  };
  var EXPR_ALIASES = { calm: "neutral", bored: "deadpan", flat: "deadpan", unimpressed: "deadpan", joy: "happy", smile: "happy", glad: "happy", surprised: "shocked", shock: "shocked", amazed: "shocked", wow: "shocked", terrified: "scared", afraid: "scared", worried: "scared", panic: "scared", nervous: "scared", puzzled: "confused", mad: "angry", furious: "angry", exhausted: "tired", sweating: "hot", freezing: "cold", shivering: "cold", confident: "smug", curious: "thinking", asleep: "sleepy", upset: "sad", crying: "sad" };
  function exprName(n) { n = str(n).toLowerCase().trim(); if (EXPR[n]) return n; return EXPR_ALIASES[n] || "neutral"; }
  function E(name) { var e = {}, src = EXPR[exprName(name)] || {}; for (var k in EBASE) e[k] = src[k] != null ? src[k] : EBASE[k]; e.sweat = src.sweat ? 1 : 0; return e; }
  var EKEYS = Object.keys(EBASE).concat(["sweat"]);
  S.EXPRESSIONS = EXPR;

  // ───────────────────────── poses ─────────────────────────
  // Authored facing screen-right. Arm angles: a = upper arm from straight down (+ = forward/up), e = elbow bend.
  // R = front arm (screen-right side when facing right), L = back arm. Legs: lL/lR thigh angle, kL/kR knee bend.
  var BASE = { by: 0, bx: 0, lean: 0, sq: 1, tilt: 0, hy: 0, aLa: 8, aLe: -4, aRa: 8, aRe: -4, lLa: 0, lLk: 0, lRa: 0, lRk: 0, lookX: 0, lookY: 0, rot: 0, sit: 0 };
  var PKEYS = Object.keys(BASE);
  function P(o) { var p = {}; for (var k in BASE) p[k] = BASE[k]; for (k in o) p[k] = o[k]; return p; }
  var POSES = {};
  function defPose(name, params, anim, extra) { POSES[name] = { p: P(params), anim: anim || null, x: extra || {} }; }
  defPose("idle", {});
  defPose("stand", {});
  defPose("talk", { aRa: 30, aRe: 60, tilt: 2 }, function (lt, p) { p.aRe += Math.sin(lt * 6) * 10; });
  defPose("explain", { aRa: 45, aRe: 75, aLa: 18, aLe: 10, tilt: 3 }, function (lt, p) { p.aRa += Math.sin(lt * 4) * 6; });
  defPose("wave", { aRa: 150, aRe: 30, tilt: 5 }, function (lt, p) { p.aRe += Math.sin(lt * 11) * 22; });
  defPose("point", { aRa: 95, aRe: 0, lean: 4, tilt: -3, lookX: 1 });
  defPose("point-up", { aRa: 160, aRe: 5, tilt: -6, lookY: -1, lookX: 0.4 });
  defPose("point-down", { aRa: 40, aRe: -8, tilt: 8, lean: 5, lookY: 0.9, lookX: 0.5 });
  defPose("point-viewer", { aRa: 55, aRe: 70, tilt: -2, lean: 2 });
  defPose("arms-up", { aLa: 165, aLe: 10, aRa: 165, aRe: 10, by: -3 }, function (lt, p) { p.aLa += Math.sin(lt * 7) * 6; p.aRa -= Math.sin(lt * 7) * 6; });
  defPose("cheer", { aLa: 160, aLe: 15, aRa: 160, aRe: 15 }, function (lt, p) {
    var per = 0.6, ph = (lt % per) / per, hop = Math.sin(ph * PI);
    p.by -= Math.max(0, hop) * 40; p.sq = 1 + 0.05 * hop; p.aLa += Math.sin(ph * 2 * PI) * 12; p.aRa -= Math.sin(ph * 2 * PI) * 12;
  });
  defPose("shrug", { aLa: 60, aLe: 85, aRa: 60, aRe: 85, tilt: 10, by: 3, hy: 4 });
  defPose("think", { aRa: 25, aRe: 125, tilt: -8, lookX: 0.5, lookY: -0.8, aLa: -20, aLe: -40 }, function (lt, p) { p.tilt += Math.sin(lt * 1.6) * 1.5; });
  defPose("facepalm", { aRa: 60, aRe: 120, tilt: -12, hy: 8, lean: 3 });
  defPose("cross-arms", { aLa: 42, aLe: 115, aRa: 42, aRe: 115, tilt: -3, lean: -2 });
  defPose("hands-hips", { aLa: 50, aLe: -95, aRa: 50, aRe: -95, lean: -2 });
  defPose("sit", { sit: 1, by: 70, aLa: 30, aLe: 50, aRa: 30, aRe: 50, lLa: 85, lLk: -90, lRa: 85, lRk: -90 });
  defPose("sleep", { rot: -88, by: 0, aLa: 30, aLe: 60, aRa: 30, aRe: 60, lookY: 0 }, null, { sleep: true });
  defPose("hold", { aRa: 35, aRe: 70 });
  defPose("hold-up", { aRa: 130, aRe: 25, lookX: 0.6, lookY: -0.8, tilt: -4 });
  defPose("carry", { aLa: 60, aLe: 80, aRa: 60, aRe: 80, lean: -4 });
  defPose("eat", { aRa: 25, aRe: 118, tilt: 4 }, function (lt, p) { var k = Math.max(0, Math.sin(lt * 7)); p.aRe += k * 14; p.hy += k * 3; });
  defPose("work", { aRa: 110, aRe: 20, lean: 6 }, function (lt, p) { var k = Math.sin(lt * 5.5); p.aRa = 110 - Math.max(0, k) * 85; p.aRe = 20 + Math.max(0, -k) * 25; p.lean = 6 + Math.max(0, -k) * 8; p.by = Math.max(0, -k) * 6; });
  defPose("dig", { aLa: 50, aLe: 60, aRa: 70, aRe: 40, lean: 12 }, function (lt, p) { var k = Math.sin(lt * 4.5); p.aRa = 70 + k * 30; p.aLa = 50 + k * 30; p.lean = 12 + k * 6; p.by = Math.max(0, k) * 5; });
  defPose("fan", { aRa: 60, aRe: 95, tilt: -4 }, function (lt, p) { p.aRe += Math.sin(lt * 12) * 14; p.aRa += Math.sin(lt * 12) * 4; });
  defPose("shiver", { aLa: 30, aLe: 120, aRa: 30, aRe: 120, hy: 4, tilt: 0 }, function (lt, p) { p.bx += Math.sin(lt * 40) * 2.2; p.tilt += Math.sin(lt * 37) * 2.5; });
  defPose("panic", { aLa: 150, aLe: 30, aRa: 150, aRe: 30, lean: -6, hy: -2 }, function (lt, p) { p.bx += Math.sin(lt * 30) * 3; p.aLa += Math.sin(lt * 14) * 10; p.aRa -= Math.sin(lt * 14) * 10; });
  defPose("cower", { aLa: 40, aLe: 130, aRa: 40, aRe: 130, lean: -10, by: 20, hy: 10, tilt: 8, lookY: -0.6 }, function (lt, p) { p.bx += Math.sin(lt * 26) * 1.5; });
  defPose("run", { lean: 12, aLe: 95, aRe: 95 }, null, { gait: "run" });
  defPose("walk", {}, null, { gait: "walk" });
  defPose("nod", {}, function (lt, p) { p.hy += Math.max(0, Math.sin(lt * 9)) * 6 * Math.max(0, 1 - lt / 1.4); });
  defPose("headshake", {}, function (lt, p) { p.lookX = Math.sin(lt * 11) * 0.9 * Math.max(0, 1 - lt / 1.5); p.tilt += Math.sin(lt * 11) * 3; });
  defPose("bow", { lean: 24, hy: 10, aLa: 4, aRa: 4, lookY: 1 });
  defPose("lean-in", { lean: 10, tilt: 6, aRa: 26, aRe: 50 });
  defPose("dance", { aLa: 120, aLe: 40, aRa: 60, aRe: 70 }, function (lt, p) {
    var s = Math.sin(lt * 7.5); p.lean = s * 8; p.bx = s * 8; p.aLa = 90 + s * 50; p.aRa = 90 - s * 50; p.by = -Math.abs(Math.cos(lt * 7.5)) * 14; p.tilt = -s * 6;
  });
  defPose("present", { aLa: 60, aLe: 25, aRa: 60, aRe: 25, by: -2 });
  defPose("fist-pump", { aRa: 130, aRe: 40, tilt: 4 }, function (lt, p) { var k = Math.max(0, Math.sin(lt * 9)); p.aRe += k * 20; p.by -= k * 5; });
  defPose("jump", { aLa: 150, aLe: 10, aRa: 150, aRe: 10 }, function (lt, p) {
    var a = 0.14, air = 0.46, ph;
    if (lt < a) { ph = lt / a; p.by += ph * 16; p.sq = 1 - 0.08 * ph; p.aLa -= 100 * (1 - ph); p.aRa -= 100 * (1 - ph); }
    else if (lt < a + air) { ph = (lt - a) / air; p.by -= Math.sin(ph * PI) * 110; p.lLk = p.lRk = -Math.sin(ph * PI) * 50; }
    else if (lt < a + air + 0.18) { ph = (lt - a - air) / 0.18; p.by += Math.sin(ph * PI) * 14; p.sq = 1 - 0.06 * Math.sin(ph * PI); }
  });
  defPose("kneel", { by: 40, lLa: -60, lLk: 110, lRa: 50, lRk: -95, aRa: 40, aRe: 60, lean: 6 });
  defPose("sad", { by: 5, aLa: 3, aLe: 0, aRa: 3, aRe: 0, tilt: -5, hy: 9, lookY: 0.7 });
  defPose("look-around", {}, function (lt, p) { p.lookX = Math.sin(lt * 2.2) * 0.9; p.tilt = Math.sin(lt * 2.2) * 5; });
  defPose("stir", { aRa: 45, aRe: 70, lean: 5, lookY: 0.6 }, function (lt, p) { p.aRe += Math.sin(lt * 5) * 10; p.aRa += Math.cos(lt * 5) * 6; });
  S.POSES = POSES;
  var POSE_ALIASES = { "point-right": "point", "point-left": "point", pointing: "point", thinking: "think", celebrate: "cheer", happy: "cheer", "hands-on-hips": "hands-hips", "arms-crossed": "cross-arms", crossed: "cross-arms", holding: "hold", running: "run", walking: "walk", sitting: "sit", sleeping: "sleep", lie: "sleep", "lying": "sleep", working: "work", hammer: "work", chop: "work", digging: "dig", fanning: "fan", shivering: "shiver", scared: "cower", hide: "cower", eating: "eat", cooking: "stir", cook: "stir", jumping: "jump", pray: "kneel", kneeling: "kneel", wonder: "look-around", look: "look-around", scan: "look-around", "open-arms": "present", "hands-up": "arms-up", welcome: "present", carrying: "carry", "fist": "fist-pump" };
  function poseName(n) { n = str(n).toLowerCase().trim(); if (POSES[n]) return n; return POSE_ALIASES[n] || "idle"; }

  // ───────────────────────── character art ─────────────────────────
  // Character-local units: origin between the feet on the ground, y down, authored facing screen-right.
  var RIG = { headY: -258, headR: 62, neckY: -200, torsoTop: -198, torsoBot: -82, torsoW: 46, shX: 38, shY: -178, upper: 64, lower: 58, hipX: 17, hipY: -84, thigh: 46, shin: 40, armW: 14, legW: 17 };
  S.RIG = RIG;
  function stAttr(w) { return ' stroke="' + INK + '" stroke-width="' + (w == null ? OUT : w) + '" stroke-linejoin="round" stroke-linecap="round"'; }
  function hairArt(c, seed) {
    var H = c.hair, st = stAttr(5);
    var r = RIG.headR, out = "";
    switch (c.hairStyle) {
      case "tufts":
        out = '<path d="M-34,-48 C-40,-78 -30,-92 -18,-96 C-14,-80 -10,-72 -8,-60 C-2,-82 10,-100 22,-98 C20,-84 18,-74 18,-62 C30,-76 46,-82 52,-70 C46,-62 42,-54 40,-44Z" fill="' + H + '"' + st + "/>";
        break;
      case "shag":
        out = '<path d="M-60,-30 C-70,-60 -54,-96 -20,-100 C-6,-110 20,-110 34,-100 C62,-96 76,-66 64,-30 C56,-52 42,-62 30,-56 C22,-66 6,-70 -4,-62 C-16,-72 -34,-68 -40,-56 C-50,-54 -56,-42 -60,-30Z" fill="' + H + '"' + st + "/>";
        break;
      case "pony":
        out = '<path d="M-58,-26 C-64,-62 -40,-92 0,-94 C40,-94 64,-66 58,-26 C50,-46 36,-58 18,-56 C6,-66 -12,-66 -22,-56 C-40,-56 -52,-44 -58,-26Z" fill="' + H + '"' + st + "/>" +
          '<path d="M-50,-60 C-80,-66 -96,-40 -90,-6 C-86,10 -74,14 -72,0 C-74,-20 -66,-36 -46,-44Z" fill="' + H + '"' + st + "/>";
        break;
      case "curl":
        out = '<path d="M-4,-60 C-10,-80 2,-96 16,-92 C30,-88 28,-70 14,-70 C8,-70 6,-78 12,-80" fill="none" stroke="' + H + '" stroke-width="8" stroke-linecap="round"/>';
        break;
      case "wisps":
        out = '<path d="M-60,-30 C-74,-40 -78,-20 -68,-8 M62,-30 C76,-40 80,-20 70,-8" fill="none" stroke="' + H + '" stroke-width="9" stroke-linecap="round"/>' +
          '<path d="M-6,-58 C-2,-70 4,-70 6,-58" fill="none" stroke="' + H + '" stroke-width="5" stroke-linecap="round"/>';
        break;
      case "spikes":
        out = '<path d="M-56,-40 L-48,-74 L-36,-50 L-24,-88 L-12,-56 L0,-96 L12,-56 L24,-88 L36,-50 L48,-74 L56,-40Z" fill="' + H + '"' + st + "/>";
        break;
    }
    return out;
  }
  function beardArt(c) {
    var H = c.hair, st = stAttr(5);
    if (c.hairStyle === "wisps") // long white beard
      return '<path d="M-44,14 C-50,50 -40,110 -12,130 C-4,138 4,138 12,130 C40,110 50,50 44,14 C30,30 14,36 0,36 C-14,36 -30,30 -44,14Z" fill="' + H + '"' + st + "/>";
    return '<path d="M-50,6 C-56,40 -36,72 0,74 C36,72 56,40 50,6 C40,26 22,34 0,34 C-22,34 -40,26 -50,6Z" fill="' + H + '"' + st + "/>";
  }
  function headwearArt(kind, c) {
    var st = stAttr(5);
    switch (kind) {
      case "nemes":
        return '<path d="M-66,-20 C-72,-60 -40,-96 0,-96 C40,-96 72,-60 66,-20 L80,70 L54,74 L44,-10 L-44,-10 L-54,74 L-80,70Z" fill="#3B5BB5"' + st + "/>" +
          '<path d="M-60,-34 L-52,70 M-40,-52 L-36,-10 M60,-34 L52,70 M40,-52 L36,-10 M-30,-78 L30,-78" fill="none" stroke="#E7B64A" stroke-width="7" stroke-linecap="round"/>';
      case "laurel":
        return '<path d="M-62,-20 C-60,-50 -40,-72 -10,-80 M62,-20 C60,-50 40,-72 10,-80" fill="none" stroke="#4F8A3D" stroke-width="7" stroke-linecap="round"/>' +
          '<g fill="#6DB24F"' + st.replace('stroke-width="5"', 'stroke-width="3"') + '><ellipse cx="-56" cy="-34" rx="7" ry="12" transform="rotate(30 -56 -34)"/><ellipse cx="-44" cy="-56" rx="7" ry="12" transform="rotate(50 -44 -56)"/><ellipse cx="-24" cy="-72" rx="7" ry="12" transform="rotate(75 -24 -72)"/><ellipse cx="56" cy="-34" rx="7" ry="12" transform="rotate(-30 56 -34)"/><ellipse cx="44" cy="-56" rx="7" ry="12" transform="rotate(-50 44 -56)"/><ellipse cx="24" cy="-72" rx="7" ry="12" transform="rotate(-75 24 -72)"/></g>';
      case "hood":
        return '<path d="M-70,10 C-80,-40 -50,-98 0,-100 C50,-98 80,-40 70,10 C76,40 60,64 40,70 L-40,70 C-60,64 -76,40 -70,10Z M-48,-6 C-48,-46 -26,-64 0,-64 C26,-64 48,-46 48,-6 L40,56 L-40,56Z" fill="#6B5131" fill-rule="evenodd"' + st + "/>";
      case "visor":
        return '<path d="M-64,-30 C-56,-58 -30,-70 0,-70 C30,-70 56,-58 64,-30 L64,-18 L-64,-18Z" fill="#8D9BB0"' + st + "/>" +
          '<path d="M-50,-24 L50,-24" stroke="#5BE2FF" stroke-width="5" stroke-linecap="round"/>';
      case "horns":
        return '<path d="M-64,-26 C-60,-60 -34,-82 0,-82 C34,-82 60,-60 64,-26 Z" fill="#7A7F86"' + st + "/>" +
          '<path d="M-60,-48 C-90,-60 -100,-100 -80,-120 C-76,-96 -66,-78 -52,-70 M60,-48 C90,-60 100,-100 80,-120 C76,-96 66,-78 52,-70" fill="#EDE3C8"' + st + "/>" +
          '<path d="M-64,-30 L64,-30" stroke="' + INK + '" stroke-width="4"/>';
    }
    return "";
  }
  function torsoArt(c, o, seed, shirt) {
    var W = RIG.torsoW * c.wide, top = RIG.torsoTop, bot = RIG.torsoBot;
    var body = o === OUTFITS.modern ? shirt : o.body;
    var d;
    if (o.hem === "jagged") {
      d = "M" + fx(-W * 0.78) + "," + top + " C" + fx(-W) + "," + (top + 10) + " " + fx(-W - 6) + "," + (top + 60) + " " + fx(-W - 2) + "," + (bot - 10);
      var n = 6, x0 = -W - 2, x1 = W + 2;
      for (var i = 0; i <= n; i++) { var x = lerp(x0, x1, i / n), y = bot + (i % 2 ? 14 : -4) + (hash01(seed + i) - 0.5) * 6; d += " L" + fx(x) + "," + fx(y); }
      d += " C" + fx(W + 6) + "," + (top + 60) + " " + fx(W) + "," + (top + 10) + " " + fx(W * 0.78) + "," + top + "Z";
    } else {
      d = "M" + fx(-W * 0.78) + "," + top + " C" + fx(-W) + "," + (top + 10) + " " + fx(-W - 8) + "," + (top + 70) + " " + fx(-W - 4) + "," + bot +
        " L" + fx(W + 4) + "," + bot + " C" + fx(W + 8) + "," + (top + 70) + " " + fx(W) + "," + (top + 10) + " " + fx(W * 0.78) + "," + top + "Z";
    }
    var out = '<path d="' + d + '" fill="' + body + '"' + stAttr() + "/>";
    out += '<path d="M' + fx(W * 0.45) + "," + (top + 20) + " C" + fx(W * 0.6) + "," + (top + 60) + " " + fx(W * 0.6) + "," + (bot - 30) + " " + fx(W * 0.5) + "," + (bot - 8) + '" fill="none" stroke="' + shade(body, -0.18) + '" stroke-width="10" stroke-linecap="round" opacity=".55"/>';
    if (o.strap) out += '<path d="M' + fx(-W * 0.7) + "," + top + " L" + fx(W * 0.5) + "," + (top + 70) + '" fill="none" stroke="' + shade(o.body, -0.35) + '" stroke-width="12" stroke-linecap="round"/>';
    if (o.collar) out += '<path d="M' + fx(-W * 0.9) + "," + (top + 4) + " C" + fx(-W * 0.6) + "," + (top + 34) + " " + fx(W * 0.6) + "," + (top + 34) + " " + fx(W * 0.9) + "," + (top + 4) + '" fill="none" stroke="' + o.collar + '" stroke-width="12" stroke-linecap="round"/>' +
      '<path d="M' + fx(-W * 0.7) + "," + (top + 14) + " C" + fx(-W * 0.4) + "," + (top + 36) + " " + fx(W * 0.4) + "," + (top + 36) + " " + fx(W * 0.7) + "," + (top + 14) + '" fill="none" stroke="#3B5BB5" stroke-width="4" stroke-linecap="round"/>';
    if (o.sash) out += '<path d="M' + fx(-W * 0.8) + "," + (top + 10) + " C" + fx(-W * 0.2) + "," + (top + 50) + " " + fx(W * 0.5) + "," + (bot - 40) + " " + fx(W + 2) + "," + (bot - 2) + '" fill="none" stroke="' + o.sash + '" stroke-width="16" stroke-linecap="round"/>';
    if (o.belt) out += '<path d="M' + fx(-W - 3) + "," + (bot - 26) + " L" + fx(W + 3) + "," + (bot - 26) + '" stroke="' + o.belt + '" stroke-width="12"/><rect x="-9" y="' + (bot - 34) + '" width="18" height="16" rx="3" fill="#C9A24A"' + stAttr(3) + "/>";
    if (o.glow) out += '<circle cx="0" cy="' + (top + 46) + '" r="10" fill="' + o.glow + '"' + stAttr(3) + '/><path d="M' + fx(-W * 0.7) + "," + (top + 84) + " L" + fx(W * 0.7) + "," + (top + 84) + '" stroke="' + o.glow + '" stroke-width="4" opacity=".8"/>';
    return out;
  }
  function footArt(o, c, side) {
    var st = stAttr(5);
    switch (o.feet) {
      case "bare": return '<ellipse cx="6" cy="-6" rx="19" ry="10" fill="' + c.skin + '"' + st + "/>";
      case "sandal": return '<ellipse cx="6" cy="-6" rx="19" ry="10" fill="' + c.skin + '"' + st + '/><path d="M-6,-14 L12,-2" stroke="#7A4B23" stroke-width="4" stroke-linecap="round"/><path d="M-10,-4 L24,-4" stroke="#7A4B23" stroke-width="5"/>';
      case "boot": return '<path d="M-12,-26 L-12,-6 C-12,0 -6,2 2,2 L26,2 C30,2 32,-4 26,-8 L12,-12 L12,-26Z" fill="#4A2E1C"' + st + "/>";
      case "sneaker": return '<path d="M-12,-24 L-12,-6 C-12,0 -6,2 2,2 L26,2 C30,2 32,-4 26,-8 L12,-12 L12,-24Z" fill="#F4F1EA"' + st + '/><path d="M-10,-4 L28,-4" stroke="#D9573B" stroke-width="4"/>';
    }
    return '<ellipse cx="6" cy="-6" rx="19" ry="10" fill="' + c.skin + '"' + st + "/>";
  }

  // ───────────────────────── Actor ─────────────────────────
  var actorCount = 0;
  function Actor(scene, name, opts) {
    opts = opts || {};
    var id = castId(name, opts.index);
    var c = CAST[id];
    this.scene = scene; this.id = id; this.c = c; this.n = actorCount++;
    this.seed = (S.hash(id) % 1000) + this.n * 7;
    this.outfitId = outfitName(opts.outfit) || scene.era || "caveman";
    this.o = OUTFITS[this.outfitId];
    this.x0 = num(opts.x, scene.Ww / 2);
    this.y0 = opts.y != null ? num(opts.y, scene.G) : scene.G;
    this.scale = num(opts.scale, 1) * c.scale * scene.charScale;
    var f = str(opts.facing || "right").toLowerCase();
    this.dir0 = f === "left" ? -1 : 1;
    this.poses = [{ t: -1, name: poseName(opts.pose || "idle"), dur: 0.01, ease: "pose" }];
    this.exprs = [{ t: -1, name: exprName(opts.expression || "neutral"), dur: 0.01 }];
    this.moves = []; this.faces = []; this.looks = []; this.talks = []; this.holds = []; this.vis = []; this.sweats = [];
    this.gestures = opts.gestures !== false;
    this.dirty = true;
    this.build(opts);
    scene.actors.push(this);
  }
  S.Actor = Actor;
  var AP = Actor.prototype;

  AP.build = function () {
    var c = this.c, o = this.o, self = this, seed = this.seed;
    var root = (this.root = g(this.scene.actorLayer, { class: "dw-actor dw-" + this.id }));
    this.shadow = svgEl("ellipse", { cx: 0, cy: 0, rx: 60 * c.wide, ry: 11, fill: "rgba(40,20,10,0.25)" }, root);
    var b = (this.body = g(root));
    // back arm, back leg
    this.arms = {}; this.legs = {};
    var legCol = o.legs === "skin" ? c.skin : o.legs;
    var legW = o.legs === "skin" ? RIG.legW : RIG.legW + 5;
    function mkLeg(side) {
      var o1 = svgEl("path", { fill: "none", stroke: INK, "stroke-width": legW + OUT * 1.6, "stroke-linecap": "round", "stroke-linejoin": "round" }, b);
      var f1 = svgEl("path", { fill: "none", stroke: legCol, "stroke-width": legW, "stroke-linecap": "round", "stroke-linejoin": "round" }, b);
      var foot = g(b); foot.innerHTML = footArt(o, c, side);
      self.legs[side] = { o: o1, f: f1, foot: foot };
    }
    function mkArm(side) {
      var o1 = svgEl("path", { fill: "none", stroke: INK, "stroke-width": RIG.armW + OUT * 1.6, "stroke-linecap": "round", "stroke-linejoin": "round" }, b);
      var f1 = svgEl("path", { fill: "none", stroke: c.skin, "stroke-width": RIG.armW, "stroke-linecap": "round", "stroke-linejoin": "round" }, b);
      var hand = svgEl("circle", { r: 13, fill: c.skin, stroke: INK, "stroke-width": 5 }, b);
      self.arms[side] = { o: o1, f: f1, hand: hand };
    }
    mkArm("L"); mkLeg("L");
    // torso
    this.torso = g(b);
    this.torso.innerHTML = torsoArt(c, o, seed, SHIRTS[this.id] || o.body);
    // neck
    svgEl("path", { d: "M0," + (RIG.neckY - 14) + " L0," + (RIG.neckY + 6), stroke: INK, "stroke-width": 22, "stroke-linecap": "round" }, this.torso);
    svgEl("path", { d: "M0," + (RIG.neckY - 14) + " L0," + (RIG.neckY + 4), stroke: c.skin, "stroke-width": 12, "stroke-linecap": "round" }, this.torso);
    mkLeg("R");
    // head
    var Hd = (this.head = g(b));
    var r = RIG.headR;
    this.hairBack = g(Hd);
    if (c.hairStyle === "pony" && !o.head) this.hairBack.innerHTML = '<path d="M-50,-60 C-80,-66 -96,-40 -90,-6 C-86,10 -74,14 -72,0 C-74,-20 -66,-36 -46,-44Z" fill="' + c.hair + '"' + stAttr(5) + "/>";
    svgEl("path", { d: roughEllipse(0, 0, r, r * 1.02, seed, 0.035, 16), fill: c.skin, stroke: INK, "stroke-width": OUT, "stroke-linejoin": "round" }, Hd);
    this.paleEl = svgEl("path", { d: roughEllipse(0, 0, r, r * 1.02, seed, 0.035, 16), fill: "#BFD8E8", opacity: 0 }, Hd);
    var face = (this.faceG = g(Hd));
    this.blushL = svgEl("ellipse", { cx: -36, cy: 18, rx: 13, ry: 7, fill: c.blush, opacity: 0 }, face);
    this.blushR = svgEl("ellipse", { cx: 36, cy: 18, rx: 13, ry: 7, fill: c.blush, opacity: 0 }, face);
    if (c.beard) { var bd = g(face); bd.innerHTML = beardArt(c); bd.setAttribute("transform", "translate(0,0)"); }
    // eyes: big white circles with dot pupils, lids clipped
    this.eyes = {};
    ["L", "R"].forEach(function (s) {
      var cx = s === "L" ? -25 : 25, cy = -8;
      var cid = "dwe" + self.n + s + "_" + V.seed;
      var cp = svgEl("clipPath", { id: cid }, face);
      var clipE = svgEl("ellipse", { cx: cx, cy: cy, rx: 20, ry: 20 }, cp);
      var white = svgEl("ellipse", { cx: cx, cy: cy, rx: 20, ry: 20, fill: "#FFFFFF", stroke: INK, "stroke-width": 5 }, face);
      var inner = g(face, { "clip-path": "url(#" + cid + ")" });
      var pupil = svgEl("circle", { cx: cx, cy: cy, r: 6, fill: INK }, inner);
      var lid = svgEl("rect", { x: cx - 24, y: cy - 60, width: 48, height: 40, fill: c.skin }, inner);
      var lidLine = svgEl("path", { d: "M" + (cx - 22) + "," + cy + " L" + (cx + 22) + "," + cy, stroke: INK, "stroke-width": 4, "stroke-linecap": "round", opacity: 0 }, inner);
      var brow = svgEl("path", { d: "M-14,0 L14,0", stroke: INK, "stroke-width": 6, "stroke-linecap": "round" }, face);
      self.eyes[s] = { cx: cx, cy: cy, clip: clipE, white: white, pupil: pupil, lid: lid, lidLine: lidLine, brow: brow };
    });
    if (c.hairStyle === "shag") svgEl("path", { d: "M-40,-32 C-20,-40 20,-40 40,-32", fill: "none", stroke: c.hair, "stroke-width": 8, "stroke-linecap": "round" }, face); // unibrow
    // mouth
    this.mouthG = g(face, { transform: "translate(0,30)" });
    this.mFill = svgEl("path", { fill: "#5A1A1A", stroke: INK, "stroke-width": 4, "stroke-linejoin": "round" }, this.mouthG);
    this.tongue = svgEl("ellipse", { fill: "#E86A7A", opacity: 0 }, this.mouthG);
    this.mLine = svgEl("path", { fill: "none", stroke: INK, "stroke-width": 5, "stroke-linecap": "round" }, this.mouthG);
    // hair / headwear
    this.hairFront = g(Hd);
    var hw = o.head;
    if (hw === "nemes" || hw === "hood" || hw === "horns") this.hairFront.innerHTML = headwearArt(hw, c);
    else this.hairFront.innerHTML = hairArt(c, seed) + headwearArt(hw, c);
    // sweat drop
    this.sweat = svgEl("path", { d: "M0,-18 C6,-6 11,0 11,7 C11,14 6,18 0,18 C-6,18 -11,14 -11,7 C-11,0 -6,-6 0,-18Z", fill: "#7FD3F7", stroke: INK, "stroke-width": 3.5, opacity: 0 }, Hd);
    // front arm + held prop
    this.held = g(b, { class: "dw-held" });
    mkArm("R");
    // zzz / chatter decorations are marks (scene.mark)
    var rnd = V.makeRand(this.seed * 31 + 7);
    var blinks = [], t = 0.6 + rnd() * 1.4;
    while (t < V.duration + 1) { blinks.push(t); if (rnd() < 0.18) blinks.push(t + 0.24); t += 2.1 + rnd() * 2.8; }
    this.blinks = blinks;
    this.phase = rnd() * 10;
  };

  function ord(list) { list.sort(function (a, b) { return a.t - b.t; }); }
  AP.pose = function (name, at, dur, ease) { this.poses.push({ t: clampT(at == null ? 0 : at), name: poseName(name), dur: num(dur, 0.4), ease: ease || "pose" }); this.dirty = true; return this; };
  AP.expression = function (name, at, dur) { this.exprs.push({ t: clampT(at == null ? 0 : at), name: exprName(name), dur: num(dur, 0.2) }); this.dirty = true; return this; };
  AP.expr = AP.expression;
  AP.say = function (from, to, text) { from = clampT(from); to = Math.max(from + 0.1, num(to, from + 1)); this.talks.push({ s: from, e: to, text: text || null }); this.dirty = true; return this; };
  AP.talk = AP.say;
  AP.moveTo = function (x, at, dur, opts) {
    opts = typeof opts === "string" ? { gait: opts } : opts || {};
    this.moves.push({ t: clampT(at == null ? 0 : at), x: num(x, this.x0), dur: Math.max(0.05, num(dur, 1.2)), gait: opts.gait || "walk", ease: opts.ease || null, turn: opts.turn !== false });
    this.dirty = true; return this;
  };
  AP.walkTo = function (x, at, dur) { return this.moveTo(x, at, dur, { gait: "walk" }); };
  AP.runTo = function (x, at, dur) { return this.moveTo(x, at, dur, { gait: "run" }); };
  AP.face = function (dir, at) { var d = str(dir).toLowerCase(); this.faces.push({ t: clampT(at == null ? 0 : at), v: d === "left" ? -1 : 1 }); this.dirty = true; return this; };
  AP.lookAt = function (target, at) { this.looks.push({ t: clampT(at == null ? 0 : at), target: target }); this.dirty = true; return this; };
  AP.hold = function (prop, at, until, opts) {
    opts = opts || {};
    var gEl = g(this.held, { class: "dw-hold" });
    gEl.innerHTML = propSvg(prop);
    this.holds.push({ t: clampT(at == null ? 0 : at), t2: until == null ? 1e9 : num(until, 1e9), el: gEl, size: num(opts.size, 1), rot: num(opts.rot, 0) });
    return this;
  };
  AP.show = function (at) { this.vis.push({ t: clampT(at), on: true }); this.dirty = true; return this; };
  AP.hide = function (at) { this.vis.push({ t: clampT(at), on: false }); this.dirty = true; return this; };
  AP.enter = function (side, at, dur, x) {
    var sc = this.scene, s = str(side || "left").toLowerCase();
    var tx = x != null ? x : this.x0;
    this.x0 = s === "right" ? sc.Ww + 140 : -140;
    this.dir0 = s === "right" ? -1 : 1;
    return this.moveTo(tx, at, dur == null ? 1.4 : dur, { gait: "walk" });
  };
  AP.exit = function (side, at, dur) { var s = str(side || "right").toLowerCase(); return this.moveTo(s === "left" ? -200 : this.scene.Ww + 200, at, dur == null ? 1.3 : dur, { gait: "walk" }); };
  AP.mark = function (kind, at, dur) { this.scene.mark(this, kind, at, dur); return this; };
  AP.emote = AP.mark;
  AP.beats = function (list, opts) {
    opts = opts || {};
    var after = opts.after || 0, self = this, step = opts.step || 1.2, last = opts.start || 0.2;
    arr(list).forEach(function (b, i) {
      if (!b) return;
      var t = b.at != null ? clampT(b.at) : syncAt(b.word, after, last + (i ? step : 0), 0.2);
      if (b.word && V.find(b.word, after) != null) after = t + 0.05;
      last = t;
      if (b.pose) self.pose(b.pose, t, b.dur);
      if (b.expression) self.expression(b.expression, t);
      if (b.mark) self.mark(b.mark, t + 0.05, b.markDur);
      if (b.look != null) self.lookAt(b.look, t);
      if (b.face) self.face(b.face, t);
    });
    return this;
  };

  AP.compile = function () {
    ord(this.poses); ord(this.exprs); ord(this.moves); ord(this.faces); ord(this.looks); ord(this.talks); ord(this.vis);
    this.poseSnap = [];
    for (var i = 0; i < this.poses.length; i++) this.poseSnap[i] = i === 0 ? clone(POSES[this.poses[0].name].p) : this.poseEval(this.poses[i].t, i - 1);
    this.exprSnap = [];
    for (i = 0; i < this.exprs.length; i++) this.exprSnap[i] = i === 0 ? E(this.exprs[0].name) : this.exprEval(this.exprs[i].t, i - 1);
    var x = this.x0, dist = 0;
    for (i = 0; i < this.moves.length; i++) { var m = this.moves[i]; m.from = this.moveX(m.t, i - 1, x); m.dist0 = dist; dist += Math.abs(m.x - m.from); }
    var ev = this.faces.map(function (f) { return { t: f.t, v: f.v }; });
    this.moves.forEach(function (m) { if (m.turn && Math.abs(m.x - m.from) > 2) ev.push({ t: m.t - 0.1, v: m.x > m.from ? 1 : -1 }); });
    ord(ev);
    this.faceEv = ev;
    this.talkWords = buildTalkWords(this.talks);
    this.dirty = false;
  };
  function clone(o) { var r = {}; for (var k in o) r[k] = o[k]; return r; }
  AP.poseTarget = function (i, t) { var kf = this.poses[i], def = POSES[kf.name]; var p = clone(def.p); if (def.anim) def.anim(Math.max(0, t - kf.t), p); return p; };
  AP.poseEval = function (t, lim) {
    var idx = -1, n = lim == null ? this.poses.length - 1 : lim;
    for (var i = 0; i <= n; i++) if (this.poses[i].t <= t) idx = i;
    if (idx < 0) idx = 0;
    var kf = this.poses[idx], tgt = this.poseTarget(idx, t);
    if (idx === 0) return tgt;
    var from = this.poseSnap[idx], pr = clamp((t - kf.t) / kf.dur, 0, 1);
    var e = easeFn(kf.ease)(pr), es = sm(pr), out = {};
    for (var k = 0; k < PKEYS.length; k++) {
      var key = PKEYS[k];
      if (key === "by" || key === "bx" || key === "sq" || key === "rot" || key === "sit") out[key] = lerp(from[key], tgt[key], es);
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
      var e = m.ease ? easeFn(m.ease)(pr) : pr < 0.15 ? 0.5 * Math.pow(pr / 0.15, 2) * 0.15 : pr > 0.85 ? 1 - 0.5 * Math.pow((1 - pr) / 0.15, 2) * 0.15 : pr;
      x = lerp(from, m.x, e);
    }
    return x;
  };
  function buildTalkWords(talks) {
    var out = [], W = words();
    talks.forEach(function (tk, ti) {
      var inWin = W.filter(function (w) { return w.start >= tk.s - 0.05 && w.start < tk.e; });
      if (inWin.length) {
        inWin.forEach(function (w) { out.push({ s: w.start, e: Math.min(w.end, tk.e + 0.1), v: wordVisemes(w.word), stress: w.word.length > 6 || /[!?]$/.test(w.word) }); });
      } else {
        var toks = tk.text ? plain(tk.text).split(/\s+/).filter(Boolean) : null;
        var rnd = V.makeRand(1000 + ti * 17 + Math.round(tk.s * 10));
        var t = tk.s, k = 0;
        var total = toks ? toks.length : Math.max(1, Math.round((tk.e - tk.s) / 0.34));
        var per = (tk.e - tk.s) / Math.max(1, total);
        while (t < tk.e - 0.08) {
          var wd = toks ? toks[k % toks.length] : ["ma", "to", "hi", "lo", "ka", "eu"][Math.floor(rnd() * 6)];
          var dur = toks ? clamp(per * (0.55 + Math.min(1.6, wd.length / 6)), 0.12, 0.7) : 0.16 + rnd() * 0.3;
          var e = Math.min(tk.e, t + dur);
          out.push({ s: t, e: e, v: wordVisemes(wd), stress: rnd() < 0.2 });
          t = e + (toks ? per * 0.18 : 0.05 + rnd() * 0.08) + (k % 7 === 6 ? 0.22 : 0);
          k++;
        }
      }
    });
    out.sort(function (a, b) { return a.s - b.s; });
    return out;
  }
  AP.speech = function (t) {
    var W = this.talkWords;
    if (!W || !W.length) return null;
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
    return { open: vis.open * amp, wide: vis.wide, stress: w.stress, ws: w.s };
  };
  AP.isTalking = function (t) { for (var i = 0; i < this.talks.length; i++) if (t >= this.talks[i].s && t <= this.talks[i].e + 0.1) return true; return false; };
  AP.dirAt = function (t) {
    var d = this.dir0, ev = this.faceEv || [];
    for (var i = 0; i < ev.length; i++) { if (ev[i].t > t) break; d = ev[i].v; }
    return d;
  };
  AP.visibleAt = function (t) {
    var on = true;
    for (var i = 0; i < this.vis.length; i++) { if (this.vis[i].t > t) break; on = this.vis[i].on; }
    if (this.vis.length && this.vis[0].on && t < this.vis[0].t) on = false;
    return on;
  };
  AP.lookTarget = function (t) {
    var tg = null;
    for (var i = 0; i < this.looks.length; i++) { if (this.looks[i].t > t) break; tg = this.looks[i].target; }
    return tg;
  };
  function armPts(side, a, e, wide) {
    var sx = (side === "R" ? RIG.shX : -RIG.shX) * wide, sy = RIG.shY;
    var a1 = a * D2R, a2 = (a + e) * D2R;
    var ex = sx + Math.sin(a1) * RIG.upper, ey = sy + Math.cos(a1) * RIG.upper;
    var hx = ex + Math.sin(a2) * RIG.lower, hy = ey + Math.cos(a2) * RIG.lower;
    return { sx: sx, sy: sy, ex: ex, ey: ey, hx: hx, hy: hy, a2: a + e };
  }
  function legPts(side, a, k) {
    var hx = side === "R" ? RIG.hipX : -RIG.hipX, hy = RIG.hipY;
    var a1 = a * D2R, a2 = (a + k) * D2R;
    var kx = hx + Math.sin(a1) * RIG.thigh, ky = hy + Math.cos(a1) * RIG.thigh;
    var fxp = kx + Math.sin(a2) * RIG.shin, fy = ky + Math.cos(a2) * RIG.shin;
    return { hx: hx, hy: hy, kx: kx, ky: ky, fx: fxp, fy: fy };
  }

  /** Compute & write the actor at time t; stores world anchors (head, top, mouth, handR, feet). */
  AP.update = function (t) {
    if (this.dirty) this.compile();
    var c = this.c, vis = this.visibleAt(t);
    this.root.style.display = vis ? "" : "none";
    this.visible = vis;
    if (!vis) return;
    var x = this.moveX(t), mv = null, gw = 0, dist = 0;
    for (var i = 0; i < this.moves.length; i++) {
      var m = this.moves[i];
      if (t >= m.t && t <= m.t + m.dur + 0.15) mv = m;
      if (t >= m.t) dist = m.dist0 + Math.abs(this.moveX(Math.min(t, m.t + m.dur)) - m.from);
    }
    var gait = null;
    if (mv) { gait = mv.gait; gw = Math.min(sm((t - mv.t) / 0.12), sm((mv.t + mv.dur + 0.15 - t) / 0.18)); if (Math.abs(mv.x - mv.from) < 2) gw = 0; }
    var p = this.poseEval(t);
    var kfIdx = 0;
    for (i = 0; i < this.poses.length; i++) if (this.poses[i].t <= t) kfIdx = i;
    var curPose = POSES[this.poses[kfIdx].name];
    if (!gait && curPose.x.gait) { gait = curPose.x.gait; gw = 1; }
    var dir = this.dirAt(t);
    // idle breathing
    var br = Math.sin(t * 2.4 + this.phase);
    p.by += br * 2.2; p.sq *= 1 + br * 0.008; p.aLa += br * 1.5; p.aRa -= br * 1.5;
    // speech
    var sp = this.speech(t), talking = this.isTalking(t);
    if (talking && this.gestures) {
      p.hy += Math.sin(t * 7 + this.phase) * 1.6;
      p.tilt += Math.sin(t * 3.1 + this.phase) * 1.5;
      if (sp && sp.stress) { var k = Math.max(0, Math.sin(clamp((t - sp.ws) / 0.3, 0, 1) * PI)); p.aRa += k * 12; p.by -= k * 3; }
    }
    // gait blend
    if (gait && gw > 0) {
      var run = gait === "run", ph = dist / (run ? 55 : 40) * PI + this.phase;
      var sw = run ? 42 : 28, s1 = Math.sin(ph), s2 = Math.sin(ph + PI);
      var gp = { lLa: s1 * sw, lLk: -Math.max(0, -s1) * (run ? 80 : 50), lRa: s2 * sw, lRk: -Math.max(0, -s2) * (run ? 80 : 50), aLa: -s1 * (run ? 40 : 24), aRa: -s2 * (run ? 40 : 24), aLe: run ? 95 : 10, aRe: run ? 95 : 10, by: -Math.abs(Math.cos(ph)) * (run ? 10 : 5), lean: run ? 12 : 3, tilt: Math.sin(ph * 2) * 2 };
      for (var key in gp) p[key] = lerp(p[key], gp[key], gw);
    }
    // expression
    var ex = this.exprEval(t);
    // blink
    var eo = ex.eo;
    for (i = 0; i < this.blinks.length; i++) { var bt = this.blinks[i]; if (Math.abs(t - bt) < 0.075) { eo *= 0.08 + 0.92 * Math.pow(Math.abs(t - bt) / 0.075, 1.4); break; } if (bt > t + 0.1) break; }
    // look target → pupil offset
    var lx = p.lookX, ly = p.lookY, tg = this.lookTarget(t);
    if (tg != null) {
      var wx = null, wy = null;
      if (typeof tg === "string") { var s = tg.toLowerCase(); if (s === "left") wx = x - 300 * dir; else if (s === "right") wx = x + 300 * dir; else if (s === "up") ly = -1; else if (s === "down") ly = 1; else if (s === "camera") { lx = 0; ly = 0.1; } }
      else if (typeof tg === "number") wx = tg;
      else if (tg.anchor) { wx = tg.anchor.head.x; wy = tg.anchor.head.y; }
      else if (tg.x != null) { wx = tg.x; wy = tg.y; }
      if (wx != null) {
        var dx = (wx - x) * dir, dy = wy != null ? wy - (this.y0 + (RIG.headY + p.hy) * this.scale) : 0;
        var dd = Math.sqrt(dx * dx + dy * dy) || 1;
        lx = clamp(dx / Math.max(dd, 120), -1, 1); ly = clamp(dy / Math.max(dd, 120), -1, 1);
      }
    }
    // write transforms
    var S0 = this.scale;
    this.root.setAttribute("transform", "translate(" + fx(x) + "," + fx(this.y0) + ") scale(" + fx(S0 * dir) + "," + fx(S0) + ")");
    var sit = p.sit;
    this.body.setAttribute("transform", "translate(" + fx(p.bx) + "," + fx(p.by) + ") rotate(" + fx(p.rot) + ") scale(" + fx(1 / Math.sqrt(p.sq)) + "," + fx(p.sq) + ")");
    this.shadow.setAttribute("rx", fx(60 * c.wide * (1 - clamp(-p.by, 0, 120) / 240)));
    this.shadow.setAttribute("opacity", fx(0.25 * (1 - clamp(-p.by, 0, 120) / 160)));
    this.torso.setAttribute("transform", "rotate(" + fx(p.lean) + " 0 " + RIG.hipY + ")");
    // legs
    var self = this;
    ["L", "R"].forEach(function (side) {
      var L = self.legs[side], lp = legPts(side, side === "L" ? p.lLa : p.lRa, side === "L" ? p.lLk : p.lRk);
      var d = "M" + fx(lp.hx) + "," + fx(lp.hy) + " L" + fx(lp.kx) + "," + fx(lp.ky) + " L" + fx(lp.fx) + "," + fx(lp.fy);
      L.o.setAttribute("d", d); L.f.setAttribute("d", d);
      var fr = sit > 0.5 ? 0 : clamp((lp.fy - 0) * -0.4, -30, 0);
      L.foot.setAttribute("transform", "translate(" + fx(lp.fx) + "," + fx(lp.fy) + ") rotate(" + fx(fr) + ")");
    });
    // arms (lean rotates shoulders with torso)
    var leanR = p.lean * D2R, lc = Math.cos(leanR), ls = Math.sin(leanR);
    function rotL(px, py) { var rx = px, ry = py - RIG.hipY; return [rx * lc - ry * ls, rx * ls + ry * lc + RIG.hipY]; }
    ["L", "R"].forEach(function (side) {
      var A = self.arms[side], ap = armPts(side, side === "L" ? p.aLa : p.aRa, side === "L" ? p.aLe : p.aRe, c.wide);
      var s0 = rotL(ap.sx, ap.sy), e0 = rotL(ap.ex, ap.ey), h0 = rotL(ap.hx, ap.hy);
      var d = "M" + fx(s0[0]) + "," + fx(s0[1]) + " L" + fx(e0[0]) + "," + fx(e0[1]) + " L" + fx(h0[0]) + "," + fx(h0[1]);
      A.o.setAttribute("d", d); A.f.setAttribute("d", d);
      A.hand.setAttribute("cx", fx(h0[0])); A.hand.setAttribute("cy", fx(h0[1]));
      if (side === "R") { self.handR = { x: h0[0], y: h0[1], a: ap.a2 + p.lean }; }
    });
    // held props
    for (i = 0; i < this.holds.length; i++) {
      var h = this.holds[i], on = t >= h.t && t < h.t2;
      h.el.style.display = on ? "" : "none";
      if (on) {
        var pop = EASE.pop(clamp((t - h.t) / 0.35, 0, 1));
        h.el.setAttribute("transform", "translate(" + fx(this.handR.x) + "," + fx(this.handR.y) + ") rotate(" + fx(h.rot + (this.handR.a) * 0.3) + ") scale(" + fx(h.size * pop * 1.1) + ") translate(-50,-56)");
      }
    }
    // head
    var hyy = RIG.headY + p.hy;
    var hp = rotL(0, hyy);
    this.head.setAttribute("transform", "translate(" + fx(hp[0]) + "," + fx(hp[1]) + ") rotate(" + fx(p.tilt + p.lean * 0.6) + ")");
    // eyes
    var eyeRy = 20 * clamp(eo, 0.06, 1.5), eyeRx = 20 * (1 + (ex.eo - 1) * 0.5);
    var lidH = clamp(ex.lid, 0, 1) * 2 * eyeRy;
    ["L", "R"].forEach(function (side) {
      var e = self.eyes[side];
      e.white.setAttribute("ry", fx(eyeRy)); e.white.setAttribute("rx", fx(eyeRx));
      e.clip.setAttribute("ry", fx(eyeRy)); e.clip.setAttribute("rx", fx(eyeRx));
      var pr = 6 * ex.ps;
      e.pupil.setAttribute("r", fx(pr));
      e.pupil.setAttribute("cx", fx(e.cx + lx * 9)); e.pupil.setAttribute("cy", fx(e.cy + ly * 7 + 1));
      e.lid.setAttribute("y", fx(e.cy - eyeRy - 40 + lidH)); e.lid.setAttribute("height", 40);
      e.lidLine.setAttribute("opacity", lidH > 2 ? 1 : 0);
      e.lidLine.setAttribute("d", "M" + fx(e.cx - 22) + "," + fx(e.cy - eyeRy + lidH) + " L" + fx(e.cx + 22) + "," + fx(e.cy - eyeRy + lidH));
      var sgn = side === "L" ? 1 : -1; // inner end raised when bA > 0
      e.brow.setAttribute("transform", "translate(" + fx(e.cx) + "," + fx(e.cy - 30 + ex.bY) + ") rotate(" + fx(sgn * -ex.bA) + ")");
    });
    this.blushL.setAttribute("opacity", fx(ex.blush * 0.6)); this.blushR.setAttribute("opacity", fx(ex.blush * 0.6));
    this.paleEl.setAttribute("opacity", fx(ex.pale * 0.5));
    // mouth
    var mw = ex.mw + (sp ? sp.wide * 6 : 0), ms = ex.ms, mo = clamp(ex.mo + (sp ? sp.open * 0.9 : 0), 0, 1);
    var wob = ex.wob > 0.3 ? Math.sin(t * 40) * 2 * ex.wob : 0;
    if (mo > 0.08) {
      var oh = 4 + mo * 24, cy0 = ms * 4;
      var dM = "M" + fx(-mw) + "," + fx(cy0) + " Q0," + fx(cy0 - ms * mw * 0.5 - oh * 0.2) + " " + fx(mw) + "," + fx(cy0) + " Q0," + fx(cy0 + oh + ms * mw * 0.4) + " " + fx(-mw) + "," + fx(cy0) + "Z";
      this.mFill.setAttribute("d", dM); this.mFill.style.display = "";
      this.mLine.style.display = "none";
      this.tongue.setAttribute("opacity", mo > 0.4 ? 1 : 0); this.tongue.setAttribute("cx", 0); this.tongue.setAttribute("cy", fx(cy0 + oh * 0.75)); this.tongue.setAttribute("rx", fx(mw * 0.45)); this.tongue.setAttribute("ry", fx(oh * 0.3));
    } else {
      this.mFill.style.display = "none"; this.tongue.setAttribute("opacity", 0);
      this.mLine.style.display = "";
      var dL;
      if (ex.wob > 0.3) { dL = "M" + fx(-mw) + ",0"; for (var q = 1; q <= 6; q++) dL += " L" + fx(-mw + (2 * mw * q) / 6) + "," + fx((q % 2 ? 3 : -3) + wob); }
      else dL = "M" + fx(-mw) + "," + fx(-ms * 3) + " Q0," + fx(ms * mw * 0.9 - ms * 3) + " " + fx(mw) + "," + fx(-ms * 3);
      this.mLine.setAttribute("d", dL);
    }
    // sweat
    var sw = ex.sweat;
    for (i = 0; i < this.sweats.length; i++) { var ss = this.sweats[i]; if (t >= ss.t && t < ss.t2) sw = 1; }
    if (sw > 0.3) { var sph = (t * 1.1 + this.phase) % 1; this.sweat.setAttribute("opacity", fx(sw * (1 - sph * 0.7))); this.sweat.setAttribute("transform", "translate(" + fx(-56 - sph * 4) + "," + fx(-40 + sph * 34) + ") scale(" + fx(0.8 + sph * 0.3) + ")"); }
    else this.sweat.setAttribute("opacity", 0);
    // anchors (world coords)
    var hs = this.scale, hdx = (hp[0] + p.bx) * hs * dir, hdy = (hp[1] + p.by) * hs;
    this.anchor = {
      head: { x: x + hdx, y: this.y0 + hdy },
      top: { x: x + hdx, y: this.y0 + hdy - RIG.headR * hs * 1.15 },
      mouth: { x: x + hdx, y: this.y0 + hdy + 30 * hs },
      handR: { x: x + (this.handR.x + p.bx) * hs * dir, y: this.y0 + (this.handR.y + p.by) * hs },
      feet: { x: x, y: this.y0 },
      side: { x: x + (RIG.headR + 10) * hs * dir, y: this.y0 + hdy - 20 * hs },
    };
    this.dirNow = dir;
  };
  AP.sweatOn = function (at, until) { this.sweats.push({ t: clampT(at), t2: until == null ? 1e9 : until }); return this; };

  // ───────────────────────── animals (critters) ─────────────────────────
  // Local units: origin between the feet on the ground, y down, authored facing right.
  function eyeSvg(cx, cy, r) { return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="#fff"' + stAttr(4) + '/><circle class="dw-pup" cx="' + (cx + 2) + '" cy="' + cy + '" r="' + Math.max(3, r * 0.32) + '" fill="' + INK + '"/>'; }
  var CRITTERS = {
    mammoth: {
      scale: 1.15, col: "#8A5A33",
      body: function (s) {
        var c = "#8A5A33", c2 = "#6E4525";
        var hem = "M-150,-120";
        for (var i = 0; i <= 10; i++) hem += " L" + fx(-150 + i * 30) + "," + (i % 2 ? -62 : -84);
        return '<path d="M-150,-150 C-160,-240 -80,-290 0,-285 C90,-280 150,-230 150,-150 L150,-100 C150,-70 120,-60 90,-62 L-110,-62 C-140,-62 -155,-80 -150,-110Z" fill="' + c + '"' + stAttr() + "/>" +
          '<path d="' + hem + ' L150,-120 L150,-62 L-150,-62Z" fill="' + c2 + '"' + stAttr(4) + "/>" +
          '<path d="M-60,-250 C-30,-270 20,-272 60,-250" fill="none" stroke="' + shade(c, 0.2) + '" stroke-width="14" stroke-linecap="round" opacity=".7"/>';
      },
      head: { x: 150, y: -215, svg: function () {
        return '<circle cx="0" cy="0" r="72" fill="#8A5A33"' + stAttr() + '/><path d="M-30,-70 C-10,-100 30,-100 44,-70" fill="#8A5A33"' + stAttr(4) + '/>' +
          '<path d="M46,30 C86,40 110,90 90,150 C84,170 68,170 66,150 C70,110 56,80 36,60" fill="#8A5A33"' + stAttr() + "/>" + // trunk
          '<path d="M30,44 C70,30 110,40 118,80 C110,56 76,52 44,62" fill="#F4ECD8"' + stAttr(4) + "/>" + // tusk
          '<path d="M-60,-10 C-90,-24 -96,10 -72,22" fill="#7A4B28"' + stAttr(4) + "/>" + eyeSvg(16, -16, 14);
      } },
      legs: [[-100, -70], [-45, -70], [45, -70], [100, -70]], legLen: 72, legW: 34, legCol: "#7A4B28",
      tail: { x: -150, y: -200, svg: '<path d="M0,0 C-30,20 -34,60 -20,80" fill="none"' + stAttr(8) + '/>' },
    },
    sabretooth: {
      scale: 1, col: "#D9873A",
      body: function () {
        var c = "#D9873A";
        return '<path d="M-110,-70 C-120,-130 -60,-160 0,-156 C60,-152 110,-130 110,-80 L110,-40 L-110,-40Z" fill="' + c + '"' + stAttr() + "/>" +
          '<path d="M-70,-130 L-60,-80 M-30,-140 L-24,-80 M10,-140 L16,-80 M50,-134 L56,-80" stroke="' + shade(c, -0.35) + '" stroke-width="7" stroke-linecap="round"/>' +
          '<path d="M-100,-40 L100,-40" stroke="' + shade(c, 0.35) + '" stroke-width="18" opacity=".5"/>';
      },
      head: { x: 112, y: -130, svg: function () {
        return '<circle cx="0" cy="0" r="50" fill="#D9873A"' + stAttr() + '/><path d="M-40,-36 L-30,-74 L-6,-44Z M18,-44 L34,-78 L44,-36Z" fill="#D9873A"' + stAttr(4) + "/>" +
          '<ellipse cx="22" cy="18" rx="24" ry="16" fill="#F4C690"' + stAttr(4) + '/><path d="M8,34 L14,70 L22,36 M34,34 L40,70 L46,36" fill="#FFFFFF"' + stAttr(3) + "/>" + // fangs
          '<circle cx="36" cy="6" r="6" fill="' + INK + '"/>' + eyeSvg(0, -12, 14);
      } },
      legs: [[-80, -46], [-40, -46], [40, -46], [80, -46]], legLen: 46, legW: 20, legCol: "#D9873A",
      tail: { x: -108, y: -110, svg: '<path d="M0,0 C-40,-10 -70,-40 -60,-80" fill="none"' + stAttr(14) + '/><path d="M0,0 C-40,-10 -70,-40 -60,-80" fill="none" stroke="#D9873A" stroke-width="8" stroke-linecap="round"/>' },
    },
    camel: {
      scale: 1.05, col: "#D3A86A",
      body: function () {
        var c = "#D3A86A";
        return '<path d="M-100,-120 C-110,-170 -70,-200 -30,-200 C-10,-240 30,-240 50,-200 C90,-200 110,-170 100,-120 L100,-70 L-100,-70Z" fill="' + c + '"' + stAttr() + "/>" +
          '<path d="M-90,-70 L90,-70" stroke="' + shade(c, 0.3) + '" stroke-width="16" opacity=".5"/>' +
          '<path d="M80,-150 C110,-200 120,-250 110,-300" fill="none"' + stAttr(34) + '/><path d="M80,-150 C110,-200 120,-250 110,-300" fill="none" stroke="' + c + '" stroke-width="24" stroke-linecap="round"/>';
      },
      head: { x: 112, y: -305, svg: function () {
        return '<path d="M-30,-20 C-40,10 -20,30 20,30 L60,22 C74,18 74,0 60,-6 L20,-10 C10,-30 -10,-30 -30,-20Z" fill="#D3A86A"' + stAttr() + '/><path d="M-20,-28 L-14,-50 L0,-30 M8,-30 L18,-50 L26,-28" fill="#D3A86A"' + stAttr(4) + "/>" + eyeSvg(2, -6, 11);
      } },
      legs: [[-80, -74], [-50, -74], [50, -74], [80, -74]], legLen: 78, legW: 16, legCol: "#C49756",
      tail: { x: -100, y: -120, svg: '<path d="M0,0 C-14,20 -16,50 -10,70" fill="none"' + stAttr(8) + '/>' },
    },
    cat: {
      scale: 0.9, col: "#8F8F8F",
      body: function () { return '<path d="M-50,-30 C-56,-70 -20,-84 0,-82 C30,-82 60,-66 56,-30 L56,-18 L-50,-18Z" fill="#8F8F8F"' + stAttr(5) + '/>'; },
      head: { x: 56, y: -74, svg: function () {
        return '<circle cx="0" cy="0" r="30" fill="#8F8F8F"' + stAttr(5) + '/><path d="M-26,-18 L-24,-46 L-6,-26Z M8,-26 L24,-46 L26,-18Z" fill="#8F8F8F"' + stAttr(4) + '/><path d="M10,8 L16,10 L10,14" fill="none"' + stAttr(3) + '/><path d="M16,6 L40,0 M16,14 L40,18" stroke="' + INK + '" stroke-width="2.5"/>' + eyeSvg(0, -8, 9);
      } },
      legs: [[-36, -22], [-14, -22], [20, -22], [42, -22]], legLen: 22, legW: 11, legCol: "#8F8F8F",
      tail: { x: -50, y: -60, svg: '<path d="M0,0 C-30,-10 -44,-40 -30,-70" fill="none"' + stAttr(12) + '/><path d="M0,0 C-30,-10 -44,-40 -30,-70" fill="none" stroke="#8F8F8F" stroke-width="6" stroke-linecap="round"/>', wag: true },
    },
    dog: {
      scale: 0.95, col: "#C98B4B",
      body: function () { return '<path d="M-62,-40 C-70,-90 -30,-104 0,-102 C40,-100 72,-84 66,-40 L66,-24 L-62,-24Z" fill="#C98B4B"' + stAttr(5) + '/><ellipse cx="10" cy="-30" rx="36" ry="12" fill="' + shade("#C98B4B", 0.4) + '" opacity=".7"/>'; },
      head: { x: 70, y: -98, svg: function () {
        return '<circle cx="0" cy="0" r="36" fill="#C98B4B"' + stAttr(5) + '/><path d="M-34,-20 C-50,-10 -52,30 -36,36 C-26,38 -22,10 -24,-14Z" fill="#8E5E2E"' + stAttr(4) + '/><ellipse cx="22" cy="12" rx="20" ry="13" fill="#E8C495"' + stAttr(4) + '/><circle cx="36" cy="6" r="6" fill="' + INK + '"/><path d="M14,22 C22,32 30,30 34,26" fill="none"' + stAttr(3) + '/>' + eyeSvg(-2, -10, 10);
      } },
      legs: [[-46, -28], [-20, -28], [24, -28], [50, -28]], legLen: 28, legW: 13, legCol: "#C98B4B",
      tail: { x: -62, y: -80, svg: '<path d="M0,0 C-26,-14 -34,-44 -20,-66" fill="none"' + stAttr(14) + '/><path d="M0,0 C-26,-14 -34,-44 -20,-66" fill="none" stroke="#C98B4B" stroke-width="8" stroke-linecap="round"/>', wag: true },
    },
    wolf: {
      scale: 1.05, col: "#7E8794",
      body: function () { return '<path d="M-74,-44 C-82,-100 -34,-118 0,-116 C44,-114 84,-96 76,-44 L76,-26 L-74,-26Z" fill="#7E8794"' + stAttr(5) + '/><path d="M-50,-100 L-44,-70 M-10,-110 L-6,-74 M30,-108 L36,-74" stroke="' + shade("#7E8794", -0.3) + '" stroke-width="6" stroke-linecap="round"/>'; },
      head: { x: 80, y: -108, svg: function () {
        return '<circle cx="0" cy="0" r="38" fill="#7E8794"' + stAttr(5) + '/><path d="M-30,-22 L-28,-58 L-8,-30Z M10,-30 L28,-58 L32,-22Z" fill="#7E8794"' + stAttr(4) + '/><path d="M20,2 C50,2 62,14 60,26 C56,36 30,36 18,24Z" fill="#B8BEC8"' + stAttr(4) + '/><circle cx="56" cy="18" r="6" fill="' + INK + '"/><path d="M30,30 L34,40 L40,30" fill="#fff"' + stAttr(2.5) + '/>' + eyeSvg(0, -12, 10);
      } },
      legs: [[-56, -30], [-24, -30], [28, -30], [58, -30]], legLen: 30, legW: 14, legCol: "#6F7885",
      tail: { x: -74, y: -90, svg: '<path d="M0,0 C-40,0 -60,-20 -70,-50" fill="none"' + stAttr(24) + '/><path d="M0,0 C-40,0 -60,-20 -70,-50" fill="none" stroke="#7E8794" stroke-width="16" stroke-linecap="round"/>' },
    },
    sheep: {
      scale: 0.9, col: "#F2EEE4",
      body: function () { return '<path d="' + roughEllipse(0, -70, 70, 46, 3, 0.12, 14) + '" fill="#F2EEE4"' + stAttr(5) + '/>'; },
      head: { x: 66, y: -84, svg: function () { return '<path d="M-20,-24 C-30,0 -24,26 0,30 C24,26 30,0 20,-24Z" fill="#3A2A22"' + stAttr(5) + '/><path d="' + roughEllipse(0, -24, 24, 14, 5, 0.12, 10) + '" fill="#F2EEE4"' + stAttr(4) + '/>' + eyeSvg(-6, -4, 7) + eyeSvg(8, -4, 7); } },
      legs: [[-40, -34], [-18, -34], [16, -34], [40, -34]], legLen: 34, legW: 9, legCol: "#3A2A22",
    },
  };
  var CRITTER_ALIASES = { elephant: "mammoth", tiger: "sabretooth", "sabre-tooth": "sabretooth", "saber-tooth": "sabretooth", "sabertooth": "sabretooth", lion: "sabretooth", kitten: "cat", puppy: "dog", hound: "dog", lamb: "sheep", goat: "sheep", dromedary: "camel" };
  function critterName(n) { n = str(n).toLowerCase().trim(); if (CRITTERS[n]) return n; return CRITTER_ALIASES[n] || "dog"; }
  S.animals = Object.keys(CRITTERS);

  var critterCount = 0;
  function Critter(scene, kind, opts) {
    opts = opts || {};
    this.kind = critterName(kind);
    this.spec = CRITTERS[this.kind];
    this.scene = scene; this.n = critterCount++;
    this.x0 = num(opts.x, scene.Ww * 0.7);
    this.y0 = opts.y != null ? num(opts.y, scene.G) : scene.G;
    this.scale = num(opts.scale, 1) * this.spec.scale * scene.charScale;
    this.dir0 = str(opts.facing || "left").toLowerCase() === "left" ? -1 : 1;
    this.moves = []; this.vis = []; this.faces = [];
    this.phase = hash01(this.n * 9.1) * 10;
    this.dirty = true;
    this.build();
    scene.actors.push(this);
  }
  S.Critter = Critter;
  var KP = Critter.prototype;
  KP.build = function () {
    var sp = this.spec, self = this;
    var root = (this.root = g(this.scene.actorLayer, { class: "dw-critter dw-" + this.kind }));
    this.shadow = svgEl("ellipse", { cx: 0, cy: 0, rx: Math.abs(sp.legs[0][0]) + 40, ry: 12, fill: "rgba(40,20,10,0.25)" }, root);
    var b = (this.body = g(root));
    if (sp.tail) { this.tail = g(b, { transform: "translate(" + sp.tail.x + "," + sp.tail.y + ")" }); this.tail.innerHTML = sp.tail.svg; }
    this.legEls = [];
    sp.legs.forEach(function (L, i) {
      var o = svgEl("path", { fill: "none", stroke: INK, "stroke-width": sp.legW + 7, "stroke-linecap": "round" }, b);
      var f = svgEl("path", { fill: "none", stroke: sp.legCol, "stroke-width": sp.legW, "stroke-linecap": "round" }, b);
      self.legEls.push({ o: o, f: f, x: L[0], y: L[1], i: i });
    });
    var bodyG = g(b); bodyG.innerHTML = sp.body(self.scale);
    this.headG = g(b, { transform: "translate(" + sp.head.x + "," + sp.head.y + ")" });
    this.headG.innerHTML = sp.head.svg();
    this.pupils = Array.prototype.slice.call(this.headG.querySelectorAll(".dw-pup"));
    this.pupils.forEach(function (pp) { pp._cx = Number(pp.getAttribute("cx")); pp._cy = Number(pp.getAttribute("cy")); });
  };
  KP.moveTo = AP.moveTo; KP.walkTo = AP.walkTo; KP.runTo = AP.runTo; KP.show = AP.show; KP.hide = AP.hide; KP.face = AP.face;
  KP.visibleAt = AP.visibleAt; KP.dirAt = AP.dirAt; KP.moveX = AP.moveX;
  KP.mark = function (kind, at, dur) { this.scene.mark(this, kind, at, dur); return this; };
  KP.emote = KP.mark;
  KP.enter = AP.enter; KP.exit = AP.exit;
  KP.compile = function () {
    ord(this.moves); ord(this.faces); ord(this.vis);
    var x = this.x0, dist = 0;
    for (var i = 0; i < this.moves.length; i++) { var m = this.moves[i]; m.from = this.moveX(m.t, i - 1, x); m.dist0 = dist; dist += Math.abs(m.x - m.from); }
    var ev = this.faces.map(function (f) { return { t: f.t, v: f.v }; });
    this.moves.forEach(function (m) { if (m.turn && Math.abs(m.x - m.from) > 2) ev.push({ t: m.t - 0.1, v: m.x > m.from ? 1 : -1 }); });
    ord(ev); this.faceEv = ev; this.dirty = false;
  };
  KP.update = function (t) {
    if (this.dirty) this.compile();
    var vis = this.visibleAt(t);
    this.root.style.display = vis ? "" : "none";
    this.visible = vis;
    if (!vis) return;
    var x = this.moveX(t), mv = null, gw = 0, dist = 0, sp = this.spec;
    for (var i = 0; i < this.moves.length; i++) {
      var m = this.moves[i];
      if (t >= m.t && t <= m.t + m.dur + 0.15) mv = m;
      if (t >= m.t) dist = m.dist0 + Math.abs(this.moveX(Math.min(t, m.t + m.dur)) - m.from);
    }
    if (mv) { gw = Math.min(sm((t - mv.t) / 0.12), sm((mv.t + mv.dur + 0.15 - t) / 0.18)); if (Math.abs(mv.x - mv.from) < 2) gw = 0; }
    var dir = this.dirAt(t), S0 = this.scale;
    var br = Math.sin(t * 2 + this.phase);
    var ph = (dist / 38) * PI + this.phase;
    var bob = br * 2 - Math.abs(Math.cos(ph)) * 5 * gw;
    this.root.setAttribute("transform", "translate(" + fx(x) + "," + fx(this.y0) + ") scale(" + fx(S0 * dir) + "," + fx(S0) + ")");
    this.body.setAttribute("transform", "translate(0," + fx(bob) + ")");
    var self = this;
    this.legEls.forEach(function (L) {
      var sw = Math.sin(ph + (L.i % 2 ? PI : 0) + (L.i > 1 ? PI * 0.5 : 0)) * 22 * gw;
      var a = sw * D2R, ex = L.x + Math.sin(a) * sp.legLen, ey = L.y + Math.cos(a) * sp.legLen - bob;
      var d = "M" + fx(L.x) + "," + fx(L.y) + " L" + fx(ex) + "," + fx(ey);
      L.o.setAttribute("d", d); L.f.setAttribute("d", d);
    });
    if (this.tail) this.tail.setAttribute("transform", "translate(" + sp.tail.x + "," + sp.tail.y + ") rotate(" + fx(sp.tail.wag ? Math.sin(t * 6 + this.phase) * 14 : Math.sin(t * 1.5 + this.phase) * 5) + ")");
    this.headG.setAttribute("transform", "translate(" + sp.head.x + "," + fx(sp.head.y + Math.sin(t * 2.6 + this.phase) * 3) + ") rotate(" + fx(Math.sin(t * 1.3 + this.phase) * 3) + ")");
    var lx = Math.sin(t * 0.7 + this.phase) * 0.6;
    this.pupils.forEach(function (pp) { pp.setAttribute("cx", fx(pp._cx + lx * 3)); });
    var hx = x + sp.head.x * S0 * dir, hy = this.y0 + (sp.head.y + bob) * S0;
    this.anchor = { head: { x: hx, y: hy }, top: { x: hx, y: hy - 60 * S0 }, mouth: { x: hx, y: hy + 10 * S0 }, feet: { x: x, y: this.y0 }, side: { x: hx + 60 * S0 * dir, y: hy - 20 * S0 } };
    this.dirNow = dir;
  };

  // ───────────────────────── props (100×100 box, handle around 50,56) ─────────────────────────
  var PROPS = {
    spear: '<path d="M14,96 L86,8"' + stAttr(7) + '/><path d="M86,8 L70,14 L80,26Z" fill="#8E8E8E"' + stAttr(4) + '/>',
    torch: '<path d="M44,96 L52,44" stroke="#6B4A2A" stroke-width="12" stroke-linecap="round"/><path d="M44,96 L52,44" fill="none"' + stAttr(4).replace('stroke="' + INK + '"', 'stroke="none"') + '/><path d="M30,44 C22,20 40,4 52,-4 C56,14 68,16 74,10 C84,26 74,52 52,52 C40,52 32,50 30,44Z" fill="#FF9A1F"' + stAttr(4) + '/><path d="M42,40 C40,26 50,18 54,12 C56,24 64,28 62,38 C60,46 46,48 42,40Z" fill="#FFE05A"/>',
    basket: '<path d="M18,40 L26,92 L74,92 L82,40Z" fill="#C9995A"' + stAttr(5) + '/><path d="M22,56 L78,56 M24,72 L76,72 M34,40 L38,92 M62,40 L58,92" stroke="' + shade("#C9995A", -0.4) + '" stroke-width="3"/><path d="M28,40 C30,10 70,10 72,40" fill="none"' + stAttr(5) + '/>',
    pot: '<path d="M30,30 C10,40 10,90 36,96 L64,96 C90,90 90,40 70,30 L72,20 L28,20Z" fill="#B5603A"' + stAttr(5) + '/><path d="M26,20 L74,20" stroke="' + INK + '" stroke-width="5" stroke-linecap="round"/><path d="M30,60 C50,66 60,66 72,58" fill="none" stroke="' + shade("#B5603A", -0.4) + '" stroke-width="4"/>',
    fan: '<path d="M50,96 L50,54"' + stAttr(6) + '/><path d="M50,54 C10,60 0,20 26,8 C40,0 60,0 74,8 C100,20 90,60 50,54Z" fill="#8BC34A"' + stAttr(5) + '/><path d="M50,54 L32,16 M50,54 L50,8 M50,54 L68,16" stroke="' + shade("#8BC34A", -0.4) + '" stroke-width="3"/>',
    bread: '<path d="M14,66 C10,36 40,26 50,30 C60,26 90,36 86,66 C84,80 16,80 14,66Z" fill="#D9A45A"' + stAttr(5) + '/><path d="M30,44 L40,56 M46,38 L56,50 M62,40 L72,52" stroke="' + shade("#D9A45A", -0.4) + '" stroke-width="3" stroke-linecap="round"/>',
    scroll: '<rect x="22" y="18" width="56" height="64" rx="6" fill="#F3E8C8"' + stAttr(5) + '/><rect x="14" y="10" width="72" height="14" rx="7" fill="#C9A86A"' + stAttr(4) + '/><rect x="14" y="78" width="72" height="14" rx="7" fill="#C9A86A"' + stAttr(4) + '/><path d="M32,38 L68,38 M32,50 L62,50 M32,62 L66,62" stroke="' + INK + '" stroke-width="3" opacity=".6"/>',
    phone: '<rect x="30" y="8" width="40" height="84" rx="8" fill="#2A2A32"' + stAttr(5) + '/><rect x="36" y="18" width="28" height="60" rx="3" fill="#5BE2FF"/><circle cx="50" cy="86" r="3" fill="#888"/>',
    tablet: '<rect x="12" y="14" width="76" height="60" rx="6" fill="#B6A58B"' + stAttr(5) + '/><path d="M24,30 L50,30 M24,42 L64,42 M24,54 L44,54" stroke="' + INK + '" stroke-width="4" stroke-linecap="round"/>',
    sword: '<path d="M50,8 L58,70 L42,70Z" fill="#D8DDE4"' + stAttr(4) + '/><path d="M30,72 L70,72" stroke="#C9A24A" stroke-width="8" stroke-linecap="round"/><path d="M50,74 L50,96"' + stAttr(9) + '/>',
    shield: '<path d="M50,6 C70,16 86,14 90,20 C88,66 70,88 50,96 C30,88 12,66 10,20 C14,14 30,16 50,6Z" fill="#B8312F"' + stAttr(5) + '/><path d="M50,22 L50,80 M24,46 L76,46" stroke="#E7B64A" stroke-width="8" stroke-linecap="round"/>',
    hammer: '<path d="M46,96 L54,34"' + stAttr(9) + '/><path d="M46,96 L54,34" stroke="#8E6A3E" stroke-width="5"/><path d="M26,14 L78,14 C86,14 86,40 78,40 L26,40 C18,40 18,14 26,14Z" fill="#7A7F86"' + stAttr(5) + '/>',
    bone: '<path d="M20,70 C8,74 8,56 20,58 C8,54 14,40 24,46 L72,24 C70,12 86,8 88,20 C98,22 94,38 82,34 L34,56 C40,66 30,74 20,70Z" fill="#F4ECD8"' + stAttr(5) + '/>',
    fish: '<path d="M10,50 C30,20 70,20 86,50 C70,80 30,80 10,50Z" fill="#6FA8DC"' + stAttr(5) + '/><path d="M86,50 L98,36 L98,64Z" fill="#6FA8DC"' + stAttr(4) + '/><circle cx="26" cy="46" r="4" fill="' + INK + '"/><path d="M50,32 L50,68" stroke="' + shade("#6FA8DC", -0.4) + '" stroke-width="3"/>',
    bowl: '<path d="M10,46 C14,84 86,84 90,46Z" fill="#B5603A"' + stAttr(5) + '/><ellipse cx="50" cy="46" rx="40" ry="10" fill="#E8D4A4"' + stAttr(4) + '/>',
    jug: '<path d="M38,14 L62,14 L60,28 C84,40 84,96 50,96 C16,96 16,40 40,28Z" fill="#C8784A"' + stAttr(5) + '/><path d="M66,44 C84,46 86,70 66,74" fill="none"' + stAttr(7) + '/><path d="M34,14 L66,14" stroke="' + INK + '" stroke-width="5" stroke-linecap="round"/>',
    umbrella: '<path d="M50,96 L50,46"' + stAttr(6) + '/><path d="M8,48 C14,10 86,10 92,48 C80,40 70,52 62,44 C56,52 44,52 38,44 C30,52 20,40 8,48Z" fill="#E04E6B"' + stAttr(5) + '/>',
    book: '<path d="M14,18 L46,24 L50,88 L14,80Z M86,18 L54,24 L50,88 L86,80Z" fill="#F3E8C8"' + stAttr(5) + '/><path d="M22,36 L40,40 M22,48 L40,52 M60,40 L78,36 M60,52 L78,48" stroke="' + INK + '" stroke-width="3" opacity=".6"/>',
    coins: '<ellipse cx="42" cy="70" rx="30" ry="12" fill="#E7B64A"' + stAttr(5) + '/><ellipse cx="50" cy="56" rx="30" ry="12" fill="#F2CD5B"' + stAttr(5) + '/><ellipse cx="46" cy="42" rx="30" ry="12" fill="#E7B64A"' + stAttr(5) + '/><path d="M44,38 L48,46" stroke="' + INK + '" stroke-width="3"/>',
    map: '<path d="M10,20 L36,10 L64,22 L90,12 L90,80 L64,90 L36,78 L10,88Z" fill="#F3E8C8"' + stAttr(5) + '/><path d="M36,10 L36,78 M64,22 L64,90" stroke="' + INK + '" stroke-width="3" opacity=".5"/><path d="M20,60 C30,40 50,56 60,40 C68,30 78,36 82,30" fill="none" stroke="#E04E6B" stroke-width="4" stroke-dasharray="6 5"/>',
    stick: '<path d="M22,94 C34,70 46,50 80,10"' + stAttr(9) + '/><path d="M22,94 C34,70 46,50 80,10" fill="none" stroke="#8E6A3E" stroke-width="5" stroke-linecap="round"/>',
    rock: '<path d="M14,70 C8,46 28,30 50,30 C76,30 94,46 88,70 C84,86 20,86 14,70Z" fill="#9A9488"' + stAttr(5) + '/><path d="M36,46 L46,62 M60,42 L70,56" stroke="' + shade("#9A9488", -0.4) + '" stroke-width="3"/>',
    meat: '<path d="M20,70 C6,52 24,28 52,26 C78,24 92,44 84,64 C78,82 36,86 20,70Z" fill="#C65A4A"' + stAttr(5) + '/><path d="M80,66 C92,72 100,62 92,54" fill="#F4ECD8"' + stAttr(4) + '/><path d="M34,50 C44,46 54,56 64,52" fill="none" stroke="#F4ECD8" stroke-width="4" opacity=".8"/>',
    cup: '<path d="M30,30 L36,90 L64,90 L70,30Z" fill="#F4F1EA"' + stAttr(5) + '/><path d="M70,40 C84,42 84,66 68,68" fill="none"' + stAttr(6) + '/><path d="M40,16 C42,8 48,10 46,2 M54,16 C56,8 62,10 60,2" fill="none" stroke="#999" stroke-width="3" stroke-linecap="round"/>',
    lantern: '<path d="M50,8 L50,20"' + stAttr(5) + '/><path d="M30,20 L70,20 L76,84 L24,84Z" fill="#F2B544"' + stAttr(5) + '/><path d="M40,34 L46,70 L54,70 L60,34Z" fill="#FFE05A"/><rect x="26" y="82" width="48" height="10" rx="4" fill="#4A2E1C"' + stAttr(4) + '/>',
    laptop: '<path d="M18,20 L82,20 L82,64 L18,64Z" fill="#3A3F4A"' + stAttr(5) + '/><rect x="24" y="26" width="52" height="32" fill="#5BE2FF"/><path d="M8,64 L92,64 L96,80 L4,80Z" fill="#B6BBC6"' + stAttr(5) + '/>',
    flag: '<path d="M26,96 L26,8"' + stAttr(6) + '/><path d="M26,10 L84,24 L26,40Z" fill="#E04E6B"' + stAttr(5) + '/>',
    axe: '<path d="M40,96 L60,22"' + stAttr(9) + '/><path d="M40,96 L60,22" stroke="#8E6A3E" stroke-width="5"/><path d="M56,10 C76,4 90,20 84,42 C74,36 64,38 56,46Z" fill="#8E8E8E"' + stAttr(5) + '/>',
    seed: '<path d="M50,88 C30,88 24,60 36,40 C44,28 56,28 64,40 C76,60 70,88 50,88Z" fill="#B88B4A"' + stAttr(5) + '/><path d="M50,36 C52,20 62,14 70,12" fill="none" stroke="#6DB24F" stroke-width="5" stroke-linecap="round"/>',
  };
  var PROP_ALIASES = { club: "stick", staff: "stick", cane: "stick", stone: "rock", boulder: "rock", papyrus: "scroll", smartphone: "phone", mobile: "phone", cellphone: "phone", "clay-tablet": "tablet", loaf: "bread", food: "bread", water: "jug", vase: "jug", amphora: "jug", "palm-fan": "fan", leaf: "fan", mallet: "hammer", tool: "hammer", money: "coins", gold: "coins", coin: "coins", parasol: "umbrella", drumstick: "meat", steak: "meat", mug: "cup", coffee: "cup", tea: "cup", lamp: "lantern", computer: "laptop", banner: "flag", hatchet: "axe", grain: "seed", wheat: "seed", plant: "seed", knife: "sword", blade: "sword" };
  function propName(n) { n = str(n).toLowerCase().trim(); if (PROPS[n]) return n; if (PROP_ALIASES[n]) return PROP_ALIASES[n]; return "stick"; }
  function propSvg(n) { return PROPS[propName(n)]; }
  S.PROPS = PROPS;
  S.propNames = Object.keys(PROPS);
  S.propIcon = function (n, size) { return '<svg viewBox="0 0 100 100" width="' + fx(size || 48) + '" height="' + fx(size || 48) + '" style="display:block;overflow:visible">' + propSvg(n) + "</svg>"; };

  // ───────────────────────── set pieces (world objects, origin at ground centre) ─────────────────────────
  function roughCircleStr(cx, cy, r, seed, fill, w) { return '<path d="' + roughEllipse(cx, cy, r, r, seed, 0.06, 12) + '" fill="' + fill + '"' + stAttr(w == null ? OUT : w) + "/>"; }
  var SETPIECES = {
    rock: function (s) { return '<path d="M-110,0 C-130,-60 -80,-120 -10,-118 C60,-116 120,-70 110,0Z" fill="#8E867A"' + stAttr() + '/><path d="M-60,-70 L-40,-30 M10,-90 L30,-50" stroke="' + shade("#8E867A", -0.4) + '" stroke-width="5" stroke-linecap="round"/><path d="M-80,-20 C-40,-30 40,-30 90,-14" fill="none" stroke="' + shade("#8E867A", 0.3) + '" stroke-width="8" opacity=".6"/>'; },
    boulder: function () { return '<path d="M-160,0 C-180,-90 -110,-170 -10,-168 C90,-166 180,-100 160,0Z" fill="#7F776C"' + stAttr() + '/><path d="M-90,-110 L-60,-50 M20,-130 L50,-70 M-120,-40 L-100,-16" stroke="' + shade("#7F776C", -0.4) + '" stroke-width="6" stroke-linecap="round"/>'; },
    log: function () { return '<path d="M-130,-40 L120,-40 L120,0 L-130,0Z" fill="#8A5A33"' + stAttr() + '/><ellipse cx="-130" cy="-20" rx="18" ry="22" fill="#D9A45A"' + stAttr(5) + '/><ellipse cx="-130" cy="-20" rx="8" ry="10" fill="none" stroke="' + INK + '" stroke-width="3"/><path d="M-90,-30 L-20,-30 M0,-14 L80,-14" stroke="' + shade("#8A5A33", -0.35) + '" stroke-width="4" stroke-linecap="round"/>'; },
    tent: function () { return '<path d="M-170,0 L0,-230 L170,0Z" fill="#B88B5A"' + stAttr() + '/><path d="M-60,0 L0,-120 L60,0Z" fill="#3A2416"' + stAttr(5) + '/><path d="M-20,-250 L20,-250 M0,-230 L0,-260" stroke="' + INK + '" stroke-width="6" stroke-linecap="round"/><path d="M-100,-80 L100,-80" stroke="' + shade("#B88B5A", -0.35) + '" stroke-width="5" stroke-dasharray="14 10"/>'; },
    hut: function () { return '<path d="M-150,-130 L0,-260 L150,-130Z" fill="#C9A24A"' + stAttr() + '/><path d="M-130,-130 L130,-130 L120,0 L-120,0Z" fill="#B88B5A"' + stAttr() + '/><path d="M-30,0 L-30,-90 C-30,-110 30,-110 30,-90 L30,0Z" fill="#3A2416"' + stAttr(5) + '/><path d="M-120,-180 L-60,-230 M60,-230 L120,-180 M-100,-160 L-40,-215" stroke="' + shade("#C9A24A", -0.35) + '" stroke-width="5" stroke-linecap="round"/>'; },
    palm: function () { return '<path d="M-10,0 C-6,-100 10,-200 30,-300"' + stAttr(22) + '/><path d="M-10,0 C-6,-100 10,-200 30,-300" fill="none" stroke="#8A5A33" stroke-width="14" stroke-linecap="round"/><g fill="#4F9A4A"' + stAttr(5) + '><path d="M30,-300 C-30,-340 -90,-320 -120,-280 C-60,-290 0,-280 30,-300Z"/><path d="M30,-300 C90,-340 150,-320 170,-270 C110,-290 60,-280 30,-300Z"/><path d="M30,-300 C-10,-250 -60,-230 -90,-190 C-40,-220 10,-250 30,-300Z"/><path d="M30,-300 C70,-250 120,-230 150,-190 C100,-220 50,-250 30,-300Z"/><path d="M30,-300 C20,-360 40,-400 60,-420 C50,-380 50,-340 30,-300Z"/></g><circle cx="22" cy="-290" r="10" fill="#8A5A33"' + stAttr(4) + '/><circle cx="42" cy="-288" r="10" fill="#8A5A33"' + stAttr(4) + '/>'; },
    tree: function () { return '<path d="M-14,0 L-10,-140 L10,-140 L14,0Z" fill="#7A4B28"' + stAttr() + '/>' + roughCircleStr(-50, -200, 70, 1, "#5B9A3C") + roughCircleStr(60, -210, 72, 2, "#5B9A3C") + roughCircleStr(0, -270, 80, 3, "#6DB24F") + '<path d="M-30,-250 C-10,-290 30,-290 50,-250" fill="none" stroke="' + shade("#6DB24F", 0.3) + '" stroke-width="10" stroke-linecap="round" opacity=".7"/>'; },
    acacia: function () { return '<path d="M-10,0 C-6,-80 -20,-160 -60,-220 M-10,0 C0,-90 30,-150 80,-210"' + stAttr(16) + '/><path d="M-10,0 C-6,-80 -20,-160 -60,-220 M-10,0 C0,-90 30,-150 80,-210" fill="none" stroke="#6E4525" stroke-width="9" stroke-linecap="round"/><path d="M-200,-220 C-160,-290 160,-300 220,-220 C170,-200 -150,-200 -200,-220Z" fill="#4E8A3A"' + stAttr() + '/><path d="M-160,-240 C-100,-270 120,-275 180,-240" fill="none" stroke="#6DB24F" stroke-width="12" stroke-linecap="round" opacity=".8"/>'; },
    pine: function () { return '<path d="M-10,0 L-8,-90 L8,-90 L10,0Z" fill="#5A3A22"' + stAttr(5) + '/><g fill="#2F6B3A"' + stAttr() + '><path d="M-110,-80 L0,-170 L110,-80Z"/><path d="M-90,-150 L0,-240 L90,-150Z"/><path d="M-64,-220 L0,-300 L64,-220Z"/></g><path d="M-70,-100 L-20,-140 M-50,-170 L-10,-205" stroke="#E9F2F6" stroke-width="8" stroke-linecap="round" opacity=".9"/>'; },
    cactus: function () { return '<path d="M-28,0 L-28,-200 C-28,-240 28,-240 28,-200 L28,0Z" fill="#4E9A5A"' + stAttr() + '/><path d="M-28,-120 L-80,-120 L-80,-190 C-80,-220 -40,-220 -40,-190 L-40,-150 L-28,-150Z" fill="#4E9A5A"' + stAttr() + '/><path d="M28,-90 L80,-90 L80,-160 C80,-190 40,-190 40,-160 L40,-120 L28,-120Z" fill="#4E9A5A"' + stAttr() + '/><path d="M-10,-40 L-10,-180 M10,-60 L10,-200" stroke="' + shade("#4E9A5A", -0.35) + '" stroke-width="4" stroke-dasharray="6 10"/>'; },
    column: function () { return '<path d="M-60,0 L60,0 L50,-24 L-50,-24Z" fill="#E6DCC0"' + stAttr() + '/><path d="M-36,-24 L36,-24 L34,-300 L-34,-300Z" fill="#F1E8D2"' + stAttr() + '/><path d="M-54,-300 L54,-300 L60,-330 L-60,-330Z" fill="#E6DCC0"' + stAttr() + '/><path d="M-18,-40 L-18,-290 M0,-40 L0,-290 M18,-40 L18,-290" stroke="' + shade("#F1E8D2", -0.25) + '" stroke-width="4"/><path d="M-60,-330 C-40,-350 -20,-336 0,-350 C20,-336 40,-350 60,-330" fill="none"' + stAttr(5) + '/>'; },
    well: function () { return '<path d="M-90,0 L90,0 L80,-90 L-80,-90Z" fill="#9A9488"' + stAttr() + '/><path d="M-60,-30 L60,-30 M-70,-60 L70,-60 M-30,-90 L-30,0 M30,-90 L30,0" stroke="' + INK + '" stroke-width="4" opacity=".5"/><path d="M-70,-90 L-70,-200 M70,-90 L70,-200"' + stAttr(10) + '/><path d="M-90,-200 L0,-250 L90,-200Z" fill="#8A5A33"' + stAttr() + '/><path d="M-70,-150 L70,-150"' + stAttr(8) + '/><path d="M0,-150 L0,-110"' + stAttr(4) + '/><path d="M-14,-110 L14,-110 L12,-86 L-12,-86Z" fill="#6B4A2A"' + stAttr(4) + '/>'; },
    barrel: function () { return '<path d="M-56,-10 C-66,-60 -66,-120 -56,-170 L56,-170 C66,-120 66,-60 56,-10Z" fill="#8A5A33"' + stAttr() + '/><path d="M-62,-50 L62,-50 M-64,-130 L64,-130" stroke="#4A2E1C" stroke-width="10"/><path d="M-20,-160 L-24,-20 M20,-160 L24,-20" stroke="' + shade("#8A5A33", -0.35) + '" stroke-width="4"/>'; },
    bench: function () { return '<path d="M-130,-70 L130,-70 L130,-50 L-130,-50Z" fill="#8A5A33"' + stAttr() + '/><path d="M-100,-50 L-100,0 M100,-50 L100,0"' + stAttr(14) + '/>'; },
    table: function () { return '<path d="M-150,-110 L150,-110 L150,-90 L-150,-90Z" fill="#A8743E"' + stAttr() + '/><path d="M-120,-90 L-120,0 M120,-90 L120,0"' + stAttr(16) + '/><path d="M-120,-90 L-120,0 M120,-90 L120,0" stroke="#8A5A33" stroke-width="9"/>'; },
    crate: function () { return '<path d="' + roughRect(-60, -120, 120, 120, 4, 3) + '" fill="#C9995A"' + stAttr() + '/><path d="M-60,-120 L60,0 M60,-120 L-60,0" stroke="' + shade("#C9995A", -0.35) + '" stroke-width="5"/>'; },
    signpost: function (s, o) { return '<path d="M0,0 L0,-220"' + stAttr(12) + '/><path d="M0,0 L0,-220" stroke="#8A5A33" stroke-width="7"/><path d="M-110,-250 L90,-250 L120,-215 L90,-180 L-110,-180Z" fill="#E6D4A4"' + stAttr() + '/><text x="-10" y="-202" text-anchor="middle" font-family="' + FONT_HAND + '" font-weight="700" font-size="40" fill="' + INK + '">' + esc(o && o.text || "→") + "</text>"; },
    pyramid: function () { return '<path d="M-420,0 L0,-360 L420,0Z" fill="#E2B56B"' + stAttr(7) + '/><path d="M0,-360 L120,0 L420,0Z" fill="#C8984E"' + stAttr(7) + '/><path d="M-300,-100 L-20,-100 M-200,-190 L10,-190 M-100,-280 L40,-280" stroke="' + shade("#E2B56B", -0.25) + '" stroke-width="4" opacity=".7"/>'; },
    cart: function () { return '<path d="M-120,-130 L100,-130 L110,-60 L-130,-60Z" fill="#A8743E"' + stAttr() + '/><path d="M100,-100 L220,-110"' + stAttr(10) + '/><circle cx="-70" cy="-40" r="40" fill="#6B4A2A"' + stAttr() + '/><circle cx="60" cy="-40" r="40" fill="#6B4A2A"' + stAttr() + '/><path d="M-70,-80 L-70,0 M-110,-40 L-30,-40 M60,-80 L60,0 M20,-40 L100,-40" stroke="#C9995A" stroke-width="5"/>'; },
    tower: function () { return '<path d="M-60,0 L-40,-420 L40,-420 L60,0Z" fill="#9FB2C8"' + stAttr() + '/><path d="M-40,-420 L0,-520 L40,-420Z" fill="#C9D6E2"' + stAttr() + '/><path d="M-30,-360 L30,-360 M-34,-300 L34,-300 M-38,-240 L38,-240 M-42,-180 L42,-180 M-46,-120 L46,-120" stroke="#5BE2FF" stroke-width="5"/><circle cx="0" cy="-520" r="10" fill="#FF5A8A"' + stAttr(3) + '/>'; },
    stall: function () { return '<path d="M-150,0 L-150,-200 M150,0 L150,-200"' + stAttr(12) + '/><path d="M-180,-200 L180,-200 L160,-250 L-160,-250Z" fill="#E04E6B"' + stAttr() + '/><path d="M-140,-200 L-120,-170 L-100,-200 L-80,-170 L-60,-200 L-40,-170 L-20,-200 L0,-170 L20,-200 L40,-170 L60,-200 L80,-170 L100,-200 L120,-170 L140,-200Z" fill="#F4F1EA"' + stAttr(4) + '/><path d="M-140,-100 L140,-100 L140,-80 L-140,-80Z" fill="#A8743E"' + stAttr() + '/><circle cx="-80" cy="-120" r="16" fill="#E04E6B"' + stAttr(4) + '/><circle cx="-40" cy="-120" r="16" fill="#F2B544"' + stAttr(4) + '/><circle cx="0" cy="-120" r="16" fill="#8BC34A"' + stAttr(4) + '/><circle cx="60" cy="-120" r="16" fill="#E04E6B"' + stAttr(4) + '/>'; },
    bush: function () { return roughCircleStr(-40, -40, 50, 7, "#4E8A3A") + roughCircleStr(40, -44, 54, 8, "#4E8A3A") + roughCircleStr(0, -70, 50, 9, "#5B9A3C"); },
    snowman: function () { return roughCircleStr(0, -70, 70, 11, "#F4F7FA") + roughCircleStr(0, -180, 50, 12, "#F4F7FA") + '<path d="M0,-180 L40,-174 L0,-168Z" fill="#F26B3A"' + stAttr(3) + '/><circle cx="-12" cy="-190" r="5" fill="' + INK + '"/><circle cx="12" cy="-190" r="5" fill="' + INK + '"/><path d="M-60,-120 L-120,-160 M60,-120 L120,-160"' + stAttr(6) + '/>'; },
    igloo: function () { return '<path d="M-200,0 C-200,-200 200,-200 200,0Z" fill="#E9F2F6"' + stAttr() + '/><path d="M-60,0 C-60,-90 60,-90 60,0Z" fill="#2E3E5C"' + stAttr(5) + '/><path d="M-160,-60 L160,-60 M-110,-120 L110,-120 M-60,-160 L60,-160 M-100,-30 L-100,-60 M0,-30 L0,-60 M100,-30 L100,-60 M-40,-120 L-40,-160 M40,-120 L40,-160" stroke="' + INK + '" stroke-width="3" opacity=".35"/>'; },
    bed: function () { return '<path d="M-160,-20 L160,-20 L160,0 L-160,0Z" fill="#8A5A33"' + stAttr(5) + '/><path d="M-170,-60 L170,-60 L170,-20 L-170,-20Z" fill="#E6D4A4"' + stAttr() + '/><ellipse cx="-110" cy="-70" rx="40" ry="16" fill="#F4F1EA"' + stAttr(4) + '/>'; },
    firepit: function () { return '<path d="M-120,0 C-100,-30 100,-30 120,0Z" fill="#6B5A4A"' + stAttr(5) + '/>' + [-100, -60, -20, 20, 60, 100].map(function (x, i) { return roughCircleStr(x, -14, 20, 20 + i, "#8E867A", 4); }).join(""); },
    stones: function () { return roughCircleStr(-80, -16, 22, 31, "#9A9488", 4) + roughCircleStr(-20, -20, 26, 32, "#8E867A", 4) + roughCircleStr(40, -14, 20, 33, "#9A9488", 4) + roughCircleStr(90, -18, 24, 34, "#8E867A", 4); },
    drum: function () { return '<path d="M-50,-120 L50,-120 L60,0 L-60,0Z" fill="#B5603A"' + stAttr() + '/><ellipse cx="0" cy="-120" rx="50" ry="14" fill="#E6D4A4"' + stAttr(5) + '/><path d="M-50,-90 L50,-90 M-55,-50 L55,-50" stroke="' + shade("#B5603A", -0.4) + '" stroke-width="4"/>'; },
    hay: function () { return '<path d="M-90,0 C-100,-90 -40,-130 0,-130 C40,-130 100,-90 90,0Z" fill="#E2B56B"' + stAttr() + '/><path d="M-60,-40 L-20,-90 M-10,-30 L20,-100 M40,-40 L60,-80" stroke="' + shade("#E2B56B", -0.35) + '" stroke-width="4" stroke-linecap="round"/>'; },
    pot: function () { return '<path d="M-40,-150 C-90,-130 -90,-30 -40,0 L40,0 C90,-30 90,-130 40,-150 L44,-170 L-44,-170Z" fill="#B5603A"' + stAttr() + '/><path d="M-44,-170 L44,-170" stroke="' + INK + '" stroke-width="6" stroke-linecap="round"/><path d="M-50,-90 C-20,-80 20,-80 50,-90" fill="none" stroke="' + shade("#B5603A", -0.4) + '" stroke-width="5"/>'; },
    grave: function () { return '<path d="M-50,0 L-50,-120 C-50,-170 50,-170 50,-120 L50,0Z" fill="#9A9488"' + stAttr() + '/><path d="M-24,-100 L24,-100 M0,-130 L0,-60" stroke="' + INK + '" stroke-width="6" stroke-linecap="round"/>'; },
    mushroom: function () { return '<path d="M-20,0 L-16,-60 L16,-60 L20,0Z" fill="#F4ECD8"' + stAttr(5) + '/><path d="M-70,-60 C-70,-130 70,-130 70,-60Z" fill="#E04E6B"' + stAttr(5) + '/><circle cx="-30" cy="-90" r="8" fill="#fff"/><circle cx="20" cy="-100" r="10" fill="#fff"/>'; },
  };
  var SET_ALIASES = { campfire: "fire", bonfire: "fire", fireplace: "fire", stone: "rock", obelisk: "column", pillar: "column", hovel: "hut", house: "hut", cabin: "hut", teepee: "tent", tipi: "tent", stump: "log", bench: "bench", desk: "table", box: "crate", sign: "signpost", wagon: "cart", skyscraper: "tower", spire: "tower", market: "stall", shop: "stall", shrub: "bush", haystack: "hay", cauldron: "pot", tombstone: "grave", headstone: "grave" };
  function setName(n) { n = str(n).toLowerCase().trim(); if (n === "fire") return "fire"; if (SETPIECES[n]) return n; return SET_ALIASES[n] || null; }
  S.setpieceNames = ["fire"].concat(Object.keys(SETPIECES));

  /** Animated campfire (flames flicker, glow pulses, embers rise). Returns {g, x, y}. */
  function buildFire(sc, x, y, scale, opts) {
    opts = opts || {};
    scale = num(scale, 1);
    var root = g(sc.propLayer, { class: "dw-fire", transform: "translate(" + fx(x) + "," + fx(y) + ") scale(" + fx(scale) + ")" });
    var gid = "dwfg" + sc.n + "_" + (sc.fires.length) + "_" + V.seed;
    var grad = svgEl("radialGradient", { id: gid }, sc.defs);
    svgEl("stop", { offset: "0", "stop-color": "#FFB347", "stop-opacity": 0.55 }, grad);
    svgEl("stop", { offset: "0.5", "stop-color": "#FF8A2A", "stop-opacity": 0.18 }, grad);
    svgEl("stop", { offset: "1", "stop-color": "#FF6A00", "stop-opacity": 0 }, grad);
    var glow = svgEl("ellipse", { cx: 0, cy: -70, rx: 420, ry: 300, fill: "url(#" + gid + ")" }, root);
    // logs
    var logs = g(root);
    logs.innerHTML = '<path d="M-90,-10 L70,-50" ' + stAttr(26).slice(1) + '/><path d="M-90,-10 L70,-50" stroke="#6B4A2A" stroke-width="16" stroke-linecap="round"/><path d="M-70,-50 L90,-10" ' + stAttr(26).slice(1) + '/><path d="M-70,-50 L90,-10" stroke="#8A5A33" stroke-width="16" stroke-linecap="round"/>';
    var stones = g(root);
    stones.innerHTML = [-110, -60, 0, 60, 110].map(function (sx, i) { return roughCircleStr(sx, -8 + (i % 2) * 6, 20 + (i % 3) * 4, 40 + i, "#8E867A", 4); }).join("");
    var flames = [svgEl("path", { fill: "#FF6A1A", stroke: INK, "stroke-width": 5, "stroke-linejoin": "round" }, root), svgEl("path", { fill: "#FFB020" }, root), svgEl("path", { fill: "#FFE86A" }, root)];
    var embers = [];
    for (var i = 0; i < 9; i++) embers.push(svgEl("circle", { r: 4 + (i % 3) * 1.5, fill: i % 2 ? "#FFD27A" : "#FF8A3A" }, root));
    var seed = sc.fires.length * 17 + 3;
    function flameD(t, w, h, k) {
      var pts = [[-w, -20]];
      var n = 7;
      for (var j = 0; j <= n; j++) {
        var p = j / n, ang = PI * p;
        var r = h * (0.6 + 0.4 * Math.pow(Math.sin(ang), 0.7)) + noise(t * 9 + j * 1.3, seed + k * 3 + j) * h * 0.25;
        var xx = -w * Math.cos(ang) + noise(t * 7 + j, seed + k) * w * 0.3 * Math.sin(ang);
        var yy = -20 - r * Math.sin(ang) * (1 + 0.1 * noise(t * 5, seed + 7 + k));
        pts.push([xx, yy]);
      }
      pts.push([w, -20]);
      return smoothOpen(pts) + " Z";
    }
    var fire = { g: root, x: x, y: y, scale: scale, light: num(opts.light, 1) };
    sc.fires.push(fire);
    sc.anims.push(function (t) {
      var fl = 1 + noise(t * 11, seed) * 0.12;
      flames[0].setAttribute("d", flameD(t, 70, 150 * fl, 0));
      flames[1].setAttribute("d", flameD(t + 0.3, 48, 104 * fl, 1));
      flames[2].setAttribute("d", flameD(t + 0.7, 26, 60 * fl, 2));
      glow.setAttribute("opacity", fx(0.85 + noise(t * 13, seed + 2) * 0.15));
      glow.setAttribute("rx", fx(420 * fl)); glow.setAttribute("ry", fx(300 * fl));
      for (var j = 0; j < embers.length; j++) {
        var per = 1.6 + (j % 4) * 0.3, ph = ((t * 1 + j * 0.37) % per) / per;
        var ex = noise(t * 2 + j * 3, seed + 20 + j) * 40 + (j - 4) * 10, ey = -100 - ph * 240;
        embers[j].setAttribute("cx", fx(ex)); embers[j].setAttribute("cy", fx(ey));
        embers[j].setAttribute("opacity", fx((1 - ph) * 0.9));
      }
    });
    return fire;
  }

  // ───────────────────────── fonts / textures ─────────────────────────
  var FONT_HEAD = "'Luckiest Guy','Bangers',Impact,'Arial Black','Segoe UI Black','Franklin Gothic Heavy',sans-serif";
  var FONT_HAND = "'Patrick Hand','Segoe Print','Comic Sans MS','Chalkboard SE','Comic Neue','Noto Sans',cursive";
  var texCache = {};
  function canvasUrl(key, w, h, draw) {
    if (texCache[key]) return texCache[key];
    var url = "";
    try {
      var cv = document.createElement("canvas");
      cv.width = w; cv.height = h;
      var ctx = cv.getContext("2d");
      draw(ctx, w, h, V.makeRand(S.hash(key)));
      url = cv.toDataURL("image/png");
    } catch (e) { url = ""; }
    texCache[key] = url;
    return url;
  }
  function grainUrl() {
    return canvasUrl("dw-grain", 180, 180, function (ctx, w, h, r) {
      var img = ctx.createImageData(w, h), d = img.data;
      for (var i = 0; i < d.length; i += 4) {
        var v = 120 + Math.floor(r() * 100), a = r() < 0.55 ? 0 : Math.floor(14 + r() * 26);
        d[i] = v; d[i + 1] = v * 0.92; d[i + 2] = v * 0.8; d[i + 3] = a;
      }
      ctx.putImageData(img, 0, 0);
      // a few soft brush streaks
      ctx.globalAlpha = 0.05;
      for (var k = 0; k < 24; k++) {
        ctx.strokeStyle = r() < 0.5 ? "#000" : "#fff";
        ctx.lineWidth = 1 + r() * 3;
        ctx.beginPath(); var y = r() * h; ctx.moveTo(0, y); ctx.lineTo(w, y + (r() - 0.5) * 12); ctx.stroke();
      }
    });
  }
  function paperUrl() {
    return canvasUrl("dw-paper", 256, 256, function (ctx, w, h, r) {
      ctx.fillStyle = "rgba(0,0,0,0)"; ctx.fillRect(0, 0, w, h);
      for (var i = 0; i < 900; i++) {
        ctx.fillStyle = "rgba(60,30,10," + (0.03 + r() * 0.06).toFixed(3) + ")";
        var x = r() * w, y = r() * h, rr = 2 + r() * 10;
        ctx.beginPath(); ctx.ellipse(x, y, rr, rr * (0.3 + r() * 0.5), r() * PI, 0, PI * 2); ctx.fill();
      }
    });
  }

  // ───────────────────────── scene / layers / camera ─────────────────────────
  var LAYERS = [["sky", 0.05], ["far", 0.22], ["mid", 0.45], ["near", 0.72], ["ground", 1], ["action", 1], ["front", 1.3]];
  var current = null;
  var sceneCount = 0;
  var ERA_OF = { cave: "caveman", savanna: "caveman", tundra: "caveman", forest: "caveman", desert: "egyptian", nile: "egyptian", "roman-forum": "roman", "greek-agora": "greek", "medieval-village": "medieval", "modern-city": "modern", "future-city": "future", "dying-sun": "future", cosmos: "future", "fjord": "viking", stage: "modern" };

  function Scene(root, opts) {
    opts = opts || {};
    root = root || V.root();
    root.classList.add("dw-root");
    this.root = root; this.n = sceneCount++;
    var W = num(opts.W, V.width), H = num(opts.H, V.height);
    this.W = W; this.H = H; this.k = H / 1000; this.Ww = (1000 * W) / H;
    this.portrait = H > W * 1.15; this.square = !this.portrait && Math.abs(W - H) < W * 0.2;
    this.G = num(opts.ground, this.portrait ? 900 : this.square ? 905 : 910);
    this.charScale = num(opts.charScale, this.portrait ? 1.22 : this.square ? 1.32 : 1.48);
    var span = Math.max(1, num(opts.span, 1));
    this.x0 = num(opts.x0, -this.Ww * 0.8);
    this.x1 = num(opts.x1, this.Ww * (0.8 + span));
    this.top = -420; this.bot = 1220;
    this.actors = []; this.markList = []; this.bubbles = []; this.frameFns = []; this.anims = []; this.fires = [];
    this.world = el("div.dw-world", { parent: root });
    this.layers = {};
    var self = this;
    LAYERS.forEach(function (L) {
      var div = el("div.dw-layer", { parent: self.world });
      var svg = svgEl("svg", { class: "dw-lsvg", viewBox: [self.x0, self.top, self.x1 - self.x0, self.bot - self.top].map(fx).join(" "), preserveAspectRatio: "none" });
      svg.style.left = self.x0 * self.k + "px"; svg.style.top = self.top * self.k + "px";
      svg.style.width = (self.x1 - self.x0) * self.k + "px"; svg.style.height = (self.bot - self.top) * self.k + "px";
      div.appendChild(svg);
      self.layers[L[0]] = { div: div, svg: svg, d: L[1], g: g(svg) };
    });
    var act = this.layers.action;
    this.defs = svgEl("defs", null, act.svg);
    act.svg.insertBefore(this.defs, act.g);
    this.propLayer = g(act.svg, { class: "dw-props" });
    this.actorLayer = g(act.svg, { class: "dw-actors" });
    this.fx = g(act.svg, { class: "dw-fx" });
    this.lightLayer = g(this.layers.front.svg, { class: "dw-light" });
    this.particleLayer = g(this.layers.front.svg, { class: "dw-particles" });
    // texture, vignette, tint
    this.tintEl = el("div.dw-tint", { parent: root });
    var gu = grainUrl();
    this.grain = el("div.dw-grain", { parent: root });
    if (gu) this.grain.style.backgroundImage = "url(" + gu + ")";
    this.grain.style.backgroundSize = u(180) + "px " + u(180) + "px";
    el("div.dw-vignette", { parent: root });
    this.overlay = el("div.dw-overlay", { parent: root });
    this.osvg = svgEl("svg", { class: "dw-osvg", width: W, height: H, viewBox: "0 0 " + W + " " + H });
    this.overlay.appendChild(this.osvg);
    this.cam = new Camera(this);
    this.location = locName(opts.location || "savanna");
    this.era = outfitName(opts.era) || ERA_OF[this.location] || "caveman";
    this.loc = drawLocation(this, this.location, opts);
    current = this;
    V.onFrame(function (t) { self.update(t); });
  }
  S.Scene = Scene;
  var SP = Scene.prototype;
  SP.slots = function (n, spread) {
    var span = (spread || (this.portrait ? 0.6 : this.square ? 0.6 : 0.46)) * this.Ww, out = [];
    for (var i = 0; i < n; i++) out.push(this.Ww / 2 + (n === 1 ? 0 : (i / (n - 1) - 0.5) * span));
    return out;
  };
  SP.character = function (name, opts) { return new Actor(this, name, opts); };
  SP.animal = function (kind, opts) { return new Critter(this, kind, opts); };
  SP.onFrame = function (f) { this.frameFns.push(f); };
  SP.toScreen = function (wx, wy) {
    var c = this.camNow || { x: this.Ww / 2, y: 500, z: 1 };
    return { x: (wx - c.x) * c.z * this.k + this.W / 2, y: (wy - c.y) * c.z * this.k + this.H / 2 };
  };
  /** Is a world point within the visible frame (plus margin in world units)? */
  SP.onScreen = function (wx, wy, margin) {
    var c = this.camNow; if (!c) return true;
    margin = margin == null ? 150 : margin;
    var hw = this.Ww / (2 * c.z) + margin, hh = 500 / c.z + margin;
    return wx > c.x - hw && wx < c.x + hw && wy > c.y - hh && wy < c.y + hh;
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
    for (i = 0; i < this.bubbles.length; i++) this.bubbles[i](t);
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
        o.y = a.y0 - num(tg.focusY, 190) * a.scale + num(tg.dy, 0);
      }
      if (tg.x != null) o.x = num(tg.x, o.x);
      if (tg.y != null) o.y = num(tg.y, o.y);
      if (tg.zoom != null) o.z = num(tg.zoom, o.z);
      if (tg.z != null) o.z = num(tg.z, o.z);
      return o;
    };
  }
  CP.set = function (tg) { this.base = camTarget(this.sc, tg)(this.base); return this; };
  CP.to = function (tg, at, dur, ease) {
    at = clampT(at == null ? 0 : at); dur = Math.max(0, num(dur, 1));
    if (tg && tg.actor) tg._t = at + dur;
    this.kf.push({ t: at, dur: dur, ease: ease || "inOutCubic", fn: camTarget(this.sc, tg) });
    this.dirty = true; return this;
  };
  CP.cut = function (tg, at) { return this.to(tg, at, 0); };
  CP.push = function (zoom, at, dur, tg) { var o = tg || {}; o.zoom = zoom; return this.to(o, at, dur == null ? 1.6 : dur, "inOutSine"); };
  CP.pan = function (dx, at, dur, ease) { var self = this; return this.to(function (from) { return { x: from.x + dx, y: from.y, z: from.z }; }, at, dur == null ? 3 : dur, ease || "inOutSine"); };
  CP.focus = function (actor, at, dur, zoom, opts) { opts = opts || {}; return this.to({ actor: actor, zoom: zoom == null ? 1.4 : zoom, dx: opts.dx, dy: opts.dy, focusY: opts.focusY }, at, dur == null ? 0.9 : dur, opts.ease || "inOutCubic"); };
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
      var from = this.from[i] || c, tgt = k.fn(from);
      var p = k.dur <= 0 ? 1 : easeFn(k.ease)(clamp((t - k.t) / k.dur, 0, 1));
      c = { x: lerp(from.x, tgt.x, p), y: lerp(from.y, tgt.y, p), z: lerp(from.z, tgt.z, p) };
    }
    return c;
  };
  CP.eval = function (t) {
    if (this.dirty !== false) this.compile();
    var c = this.evalKf(t);
    for (var i = 0; i < this.follows.length; i++) {
      var f = this.follows[i], w = Math.min(sm((t - f.s) / 0.7), sm((f.e - t) / 0.7));
      if (w <= 0) continue;
      var a = f.a; if (a.dirty) a.compile();
      var ax = (a.moveX(t) + a.moveX(t - 0.15) + a.moveX(t - 0.3) + a.moveX(t - 0.45)) / 4;
      var lead = num(f.o.lead, 120) * a.dirAt(t);
      c.x = lerp(c.x, ax + lead, w);
      if (f.o.zoom != null) c.z = lerp(c.z, num(f.o.zoom, 1), w);
    }
    c.x += noise(t * 0.25, 11) * 3 * this.drift; c.y += noise(t * 0.22, 23) * 2.5 * this.drift;
    c.z *= 1 + noise(t * 0.18, 5) * 0.003 * this.drift;
    for (i = 0; i < this.shakes.length; i++) {
      var s = this.shakes[i], lt = t - s.t;
      if (lt < 0 || lt > s.d) continue;
      var amp = s.a * (1 - lt / s.d);
      c.x += noise(lt * 28, 3 + i) * amp; c.y += noise(lt * 31, 7 + i) * amp;
    }
    var sc = this.sc, hw = sc.Ww / (2 * c.z), hh = 500 / c.z;
    c.x = clamp(c.x, sc.x0 + hw + 2, sc.x1 - hw - 2);
    c.y = clamp(c.y, sc.top + hh + 2, sc.bot - hh - 2);
    return c;
  };

  // ───────────────────────── scene helpers: set pieces, props, fire, tint, weather, marks, bubbles ─────────────────────────
  SP.setpiece = function (name, opts) {
    opts = opts || {};
    var n = setName(name);
    if (!n) return null;
    var x = num(opts.x, this.Ww / 2), y = opts.y != null ? num(opts.y, this.G) : this.G, s = num(opts.scale, 1) * (this.portrait ? 0.85 : 1);
    if (n === "fire") return buildFire(this, x, y, s * 0.9, opts);
    var layerName = opts.layer || "action";
    var parent = layerName === "action" ? this.propLayer : (this.layers[layerName] || this.layers.near).g;
    var gEl = g(parent, { class: "dw-set dw-set-" + n });
    gEl.innerHTML = SETPIECES[n](s, opts);
    var flip = opts.flip ? -1 : 1;
    var base = "translate(" + fx(x) + "," + fx(y) + ") scale(" + fx(s * flip) + "," + fx(s) + ")";
    gEl.setAttribute("transform", base);
    if (opts.at != null || n === "signpost") {
      var at = opts.at != null ? clampT(opts.at) : 0, until = opts.until != null ? num(opts.until, 1e9) : 1e9, sc = this;
      this.anims.push(function (t) {
        var on = t >= at && t < until + 0.3 && sc.onScreen(x, y - 150 * s, 80);
        gEl.style.display = on ? "" : "none";
        if (!on) return;
        var p = EASE.pop(clamp((t - at) / 0.4, 0, 1));
        if (t > until) p = 1 - sm((t - until) / 0.3);
        gEl.setAttribute("transform", base + " scale(" + fx(p) + ")");
      });
    }
    return { g: gEl, x: x, y: y, scale: s, name: n };
  };
  SP.prop = function (name, opts) {
    opts = opts || {};
    var sc = this;
    var x = num(opts.x, this.Ww / 2), y = num(opts.y, this.G - 200), size = num(opts.size, 1.4) * (this.portrait ? 0.85 : 1);
    var gEl = g(opts.front ? this.fx : this.propLayer, { class: "dw-prop" });
    gEl.innerHTML = propSvg(name);
    var at = opts.at != null ? clampT(opts.at) : 0, until = opts.until != null ? num(opts.until, 1e9) : 1e9;
    var rot = num(opts.rot, 0), fl = num(opts.float, 0), spin = num(opts.spin, 0);
    this.anims.push(function (t) {
      var on = t >= at && t < until + 0.3;
      gEl.style.display = on ? "" : "none";
      if (!on) return;
      var p = EASE.pop(clamp((t - at) / 0.45, 0, 1));
      if (t > until) p = 1 - sm((t - until) / 0.3);
      var yy = y + Math.sin(t * 2.2 + x * 0.01) * fl;
      gEl.setAttribute("transform", "translate(" + fx(x) + "," + fx(yy) + ") rotate(" + fx(rot + spin * t * 60) + ") scale(" + fx(size * p) + ") translate(-50,-50)");
    });
    return { g: gEl, x: x, y: y };
  };
  SP.fire = function (x, y, scale, opts) { return buildFire(this, num(x, this.Ww / 2), y != null ? y : this.G, scale, opts); };
  /** Colour wash over the world (night, heat, cold). at/dur animate the opacity in. */
  SP.tint = function (color, opacity, at, dur) {
    var tl = V.timeline();
    this.tintEl.style.background = color || "#1A2A5A";
    tl.fromTo(this.tintEl, { opacity: 0 }, { opacity: num(opacity, 0.5) }, { at: clampT(at == null ? 0 : at), dur: num(dur, 1.2), ease: "inOutSine" });
    return this.tintEl;
  };
  SP.tintTo = function (opacity, at, dur) { var tl = V.timeline(); tl.to(this.tintEl, { opacity: num(opacity, 0) }, { at: clampT(at), dur: num(dur, 1), ease: "inOutSine" }); return this.tintEl; };
  /** Weather particles in the foreground: snow | rain | embers | dust | ash | leaves | stars */
  SP.weather = function (kind, opts) {
    opts = opts || {};
    kind = str(kind || "snow").toLowerCase();
    var sc = this, n = clamp(Math.round(num(opts.count, kind === "rain" ? 70 : 46)), 4, 160);
    var W0 = this.x0, W1 = this.x1, span = W1 - W0, top = this.top, bot = this.bot, hgt = bot - top;
    var parent = kind === "stars" ? this.layers.sky.g : this.particleLayer;
    var els = [], rnd = V.makeRand(77 + S.hash(kind));
    var at = opts.at != null ? clampT(opts.at) : 0, until = opts.until != null ? num(opts.until, 1e9) : 1e9;
    var col = opts.color || { snow: "#FFFFFF", rain: "#9FC9E8", embers: "#FFB347", dust: "#E9D5A6", ash: "#9A9488", leaves: "#C98B4B", stars: "#FFF6D5" }[kind] || "#fff";
    for (var i = 0; i < n; i++) {
      var e2;
      if (kind === "rain") e2 = svgEl("path", { d: "M0,0 L-6,34", stroke: col, "stroke-width": 4, "stroke-linecap": "round", opacity: 0.6 }, parent);
      else if (kind === "leaves") e2 = svgEl("path", { d: "M-10,0 C-6,-12 6,-12 10,0 C6,10 -6,10 -10,0Z", fill: col, stroke: INK, "stroke-width": 2 }, parent);
      else e2 = svgEl("circle", { r: kind === "stars" ? 2 + rnd() * 3 : kind === "snow" ? 5 + rnd() * 6 : 3 + rnd() * 4, fill: col }, parent);
      els.push({ el: e2, x: W0 + rnd() * span, y: top + rnd() * hgt, s: 0.6 + rnd() * 0.8, ph: rnd() * 10 });
    }
    var speed = num(opts.speed, 1);
    this.anims.push(function (t) {
      var on = t >= at && t < until;
      if (!on) { for (var j = 0; j < els.length; j++) els[j].el.setAttribute("opacity", 0); return; }
      var fade = Math.min(sm((t - at) / 0.8), 1);
      for (j = 0; j < els.length; j++) {
        var p = els[j], x, y, op = fade;
        if (kind === "snow") { y = top + ((p.y - top + t * 90 * p.s * speed) % hgt); x = p.x + Math.sin(t * 0.9 + p.ph) * 40; op *= 0.9; }
        else if (kind === "rain") { y = top + ((p.y - top + t * 1500 * p.s * speed) % hgt); x = p.x - (y - top) * 0.18; op *= 0.6; }
        else if (kind === "embers") { y = top + hgt - ((p.y - top + t * 140 * p.s * speed) % hgt); x = p.x + noise(t * 1.5 + p.ph, j) * 60; op *= 0.4 + 0.6 * Math.abs(Math.sin(t * 3 + p.ph)); }
        else if (kind === "dust" || kind === "ash") { x = W0 + ((p.x - W0 + t * 120 * p.s * speed) % span); y = p.y + Math.sin(t * 0.7 + p.ph) * 50; op *= 0.5; }
        else if (kind === "leaves") { y = top + ((p.y - top + t * 110 * p.s * speed) % hgt); x = p.x + Math.sin(t * 1.3 + p.ph) * 90; }
        else { x = p.x; y = p.y; op *= 0.5 + 0.5 * Math.sin(t * 2 * p.s + p.ph); }
        p.el.setAttribute("transform", "translate(" + fx(x) + "," + fx(y) + ")" + (kind === "leaves" ? " rotate(" + fx(t * 120 * p.s) + ")" : ""));
        p.el.setAttribute("opacity", fx(op));
      }
    });
    return els;
  };

  // reaction marks in world space, following the owner's top anchor
  var MARKS = {
    sweat: function (gm) { gm.innerHTML = '<path d="M0,-22 C8,-8 14,0 14,8 C14,17 7,22 0,22 C-7,22 -14,17 -14,8 C-14,0 -8,-8 0,-22Z" fill="#7FD3F7"' + stAttr(4) + '/>'; return { dx: 70, dy: -10, anim: function (lt) { return { y: Math.min(lt, 1) * 26, s: 1, o: 1 }; } }; },
    "?!": function (gm) { gm.innerHTML = markText("?!", "#FFD400", 96); return { dx: 70, dy: -70, anim: function (lt) { return { y: 0, s: 1 + Math.sin(lt * 8) * 0.05, o: 1, r: -8 }; } }; },
    "!": function (gm) { gm.innerHTML = markText("!", "#FFD400", 110); return { dx: 50, dy: -80, anim: function (lt) { return { y: -Math.abs(Math.sin(lt * 7)) * 10, s: 1, o: 1, r: 8 }; } }; },
    "!!": function (gm) { gm.innerHTML = markText("!!", "#F26B3A", 100); return { dx: 60, dy: -80, anim: function (lt) { return { y: -Math.abs(Math.sin(lt * 9)) * 12, s: 1, o: 1, r: 6 }; } }; },
    "?": function (gm) { gm.innerHTML = markText("?", "#FFFFFF", 104); return { dx: 54, dy: -78, anim: function (lt) { return { y: Math.sin(lt * 3) * 6, s: 1, o: 1, r: Math.sin(lt * 3) * 8 }; } }; },
    "...": function (gm) { gm.innerHTML = markText("...", "#FFFFFF", 96); return { dx: 70, dy: -40, anim: function (lt) { return { y: 0, s: 1, o: 1, r: 0 }; } }; },
    zzz: function (gm) { gm.innerHTML = markText("z", "#FFFFFF", 56) + '<g transform="translate(34,-40)">' + markText("z", "#FFFFFF", 44) + '</g><g transform="translate(62,-74)">' + markText("z", "#FFFFFF", 34) + "</g>"; return { dx: 60, dy: -30, anim: function (lt) { return { y: -((lt * 0.5) % 1) * 30, s: 1, o: 1 - ((lt * 0.5) % 1) * 0.6, r: 0 }; } }; },
    heart: function (gm) { gm.innerHTML = '<path d="M0,22 C-30,0 -34,-26 -16,-30 C-6,-32 0,-24 0,-18 C0,-24 6,-32 16,-30 C34,-26 30,0 0,22Z" fill="#E04E6B"' + stAttr(4) + '/>'; return { dx: 60, dy: -50, anim: function (lt) { return { y: -lt * 20, s: 1 + Math.sin(lt * 9) * 0.1, o: 1, r: 10 }; } }; },
    anger: function (gm) { gm.innerHTML = '<path d="M-20,-20 C-10,-10 -10,10 -20,20 M20,-20 C10,-10 10,10 20,20 M-20,-20 C-10,-10 10,-10 20,-20 M-20,20 C-10,10 10,10 20,20" fill="none" stroke="#E04E6B" stroke-width="7" stroke-linecap="round"/>'; return { dx: 60, dy: -60, anim: function (lt) { return { y: 0, s: 1 + Math.abs(Math.sin(lt * 10)) * 0.15, o: 1, r: 0 }; } }; },
    music: function (gm) { gm.innerHTML = markText("♪", "#FFFFFF", 80) + '<g transform="translate(44,-30)">' + markText("♫", "#FFD400", 60) + "</g>"; return { dx: 60, dy: -40, anim: function (lt) { return { y: -((lt * 0.6) % 1) * 24, s: 1, o: 1, r: Math.sin(lt * 4) * 10 }; } }; },
    idea: function (gm) { gm.innerHTML = '<path d="M0,-40 C-26,-40 -38,-20 -34,-2 C-30,12 -18,18 -16,30 L16,30 C18,18 30,12 34,-2 C38,-20 26,-40 0,-40Z" fill="#FFE05A"' + stAttr(4) + '/><rect x="-14" y="32" width="28" height="12" rx="4" fill="#9A9488"' + stAttr(3) + '/><path d="M-48,-30 L-60,-40 M48,-30 L60,-40 M0,-56 L0,-70 M-40,8 L-54,12 M40,8 L54,12" stroke="#FFD400" stroke-width="5" stroke-linecap="round"/>'; return { dx: 50, dy: -80, anim: function (lt) { return { y: -Math.sin(Math.min(lt, 0.5) * PI) * 10, s: 1 + Math.sin(lt * 6) * 0.04, o: 1, r: 0 }; } }; },
    shock: function (gm) { var d = ""; for (var i = 0; i < 10; i++) { var a = (i / 10) * PI * 2; d += "M" + fx(Math.cos(a) * 24) + "," + fx(Math.sin(a) * 24) + " L" + fx(Math.cos(a) * 48) + "," + fx(Math.sin(a) * 48) + " "; } gm.innerHTML = '<path d="' + d + '" stroke="' + INK + '" stroke-width="6" stroke-linecap="round"/>'; return { dx: 0, dy: -70, anim: function (lt) { return { y: 0, s: 1 + lt * 0.3, o: Math.max(0, 1 - lt * 0.7), r: lt * 30 }; } }; },
    drool: function (gm) { gm.innerHTML = '<path d="M0,-10 C6,4 10,14 10,24 C10,32 4,36 0,36 C-4,36 -10,32 -10,24 C-10,14 -6,4 0,-10Z" fill="#9FD8F0"' + stAttr(3) + '/>'; return { dx: 30, dy: 50, anim: function (lt) { return { y: Math.min(lt, 1) * 20, s: 1, o: 1, r: 0 }; } }; },
  };
  function markText(ch, col, size) { return '<text x="0" y="0" text-anchor="middle" font-family="' + FONT_HEAD + '" font-size="' + size + '" font-weight="900" fill="' + col + '" stroke="' + INK + '" stroke-width="7" stroke-linejoin="round" paint-order="stroke fill">' + esc(ch) + "</text>"; }
  var MARK_ALIASES = { question: "?", exclaim: "!", surprise: "!", shocked: "?!", wtf: "?!", confused: "?", dots: "...", silence: "...", sleep: "zzz", sleeping: "zzz", love: "heart", angry: "anger", rage: "anger", note: "music", sing: "music", lightbulb: "idea", eureka: "idea", burst: "shock", hungry: "drool", sweating: "sweat", nervous: "sweat" };
  function markName(n) { n = str(n).toLowerCase().trim(); if (MARKS[n]) return n; return MARK_ALIASES[n] || "!"; }
  S.markNames = Object.keys(MARKS);
  SP.mark = function (owner, kind, at, dur) {
    var sc = this, name = markName(kind);
    at = clampT(at == null ? 0 : at); dur = num(dur, 1.6);
    var gm = g(this.fx, { class: "dw-mark" });
    var inner = g(gm);
    var spec = MARKS[name](inner);
    gm.style.display = "none";
    this.markList.push(function (t) {
      var lt = t - at;
      if (lt < 0 || lt > dur + 0.3 || !owner.anchor || owner.visible === false) { gm.style.display = "none"; return; }
      gm.style.display = "";
      var a = owner.anchor.top, dir = owner.dirNow || 1, s0 = owner.scale || 1;
      var st = spec.anim(lt);
      var pop = EASE.pop(clamp(lt / 0.3, 0, 1)) * (lt > dur ? 1 - sm((lt - dur) / 0.3) : 1);
      var wx = a.x + spec.dx * s0 * dir, wy = a.y + (spec.dy + (st.y || 0)) * s0;
      // keep the mark inside the frame (close-ups push it off the top)
      var c = sc.camNow;
      if (c) {
        var spx = (wx - c.x) * c.z * sc.k + sc.W / 2, spy = (wy - c.y) * c.z * sc.k + sc.H / 2;
        var mx = sc.W * 0.17, my = sc.H * 0.2;
        var cx2 = clamp(spx, mx, sc.W - mx), cy2 = clamp(spy, my, sc.H - my);
        if (cx2 !== spx || cy2 !== spy) { wx = (cx2 - sc.W / 2) / (c.z * sc.k) + c.x; wy = (cy2 - sc.H / 2) / (c.z * sc.k) + c.y; }
      }
      var zs = c ? 1 / Math.max(1, (c.z * s0) / 1.6) : 1;
      gm.setAttribute("transform", "translate(" + fx(wx) + "," + fx(wy) + ") rotate(" + fx(st.r || 0) + ") scale(" + fx(s0 * zs * pop * (st.s || 1)) + ")");
      gm.setAttribute("opacity", fx(clamp(st.o == null ? 1 : st.o, 0, 1)));
    });
    return gm;
  };
  /** Speech bubble (screen space) that follows the speaker's head; makes the speaker talk. */
  SP.bubble = function (actor, text, from, to, opts) {
    opts = opts || {};
    var sc = this;
    from = clampT(from); to = Math.max(from + 0.3, num(to, from + 1.5));
    var kind = opts.kind || "speech";
    var box = el("div.dw-bubble.dw-b-" + kind, { parent: this.overlay });
    var txt = el("div.dw-btext", { parent: box });
    txt.appendChild(S.rich(text));
    box.style.maxWidth = num(opts.maxWidth, this.portrait ? 0.78 : this.square ? 0.6 : 0.4) * this.W + "px";
    V.fit(txt, { maxLines: num(opts.maxLines, 3), min: u(22) });
    var tail = svgEl("svg", { class: "dw-btail", viewBox: "0 0 60 50", width: u(60), height: u(50) });
    tail.innerHTML = kind === "thought" ? '<circle cx="30" cy="12" r="10" fill="#fff" stroke="' + INK + '" stroke-width="5"/><circle cx="22" cy="36" r="6" fill="#fff" stroke="' + INK + '" stroke-width="4"/>' : '<path d="M8,2 L52,2 L22,46Z" fill="#fff" stroke="' + INK + '" stroke-width="5" stroke-linejoin="round"/><path d="M12,0 L48,0" stroke="#fff" stroke-width="8"/>';
    box.appendChild(tail);
    if (kind !== "thought" && opts.talk !== false) actor.say(from, to, text);
    var hold = num(opts.hold, 0.15);
    var W = this.W, H = this.H;
    box.style.display = "none";
    var side = opts.side || null;
    this.bubbles.push(function (t) {
      var lt = t - from, end = to + hold;
      if (lt < -0.001 || t > end + 0.25 || !actor.anchor || actor.visible === false) { box.style.display = "none"; return; }
      box.style.display = "";
      var p = EASE.pop(clamp(lt / 0.3, 0, 1)) * (t > end ? 1 - sm((t - end) / 0.25) : 1);
      var a = actor.anchor.top, sp = sc.toScreen(a.x, a.y);
      var bw = box.offsetWidth, bh = box.offsetHeight;
      var dir = side ? (side === "left" ? -1 : 1) : (sp.x > W * 0.5 ? -1 : 1);
      var bx = clamp(sp.x + dir * bw * 0.42, W * 0.04 + bw / 2, W * 0.96 - bw / 2);
      var by = clamp(sp.y - bh / 2 - u(56), H * 0.05 + bh / 2, H * 0.95 - bh / 2);
      box.style.left = fx(bx - bw / 2) + "px"; box.style.top = fx(by - bh / 2) + "px";
      box.style.transform = "scale(" + fx(p) + ") rotate(" + fx((1 - p) * -8 - dir * 1.5) + "deg)";
      box.style.transformOrigin = (dir > 0 ? "15%" : "85%") + " 100%";
      var tx = clamp(sp.x - (bx - bw / 2) - u(30), u(10), bw - u(70));
      tail.style.left = fx(tx) + "px";
    });
    return box;
  };
  SP.burst = function (x, y, at, opts) {
    opts = opts || {};
    var sc = this, r = num(opts.r, 160), n = clamp(Math.round(num(opts.count, 14)), 4, 40), col = opts.color || INK;
    var gb = g(this.fx, { class: "dw-burst" });
    var lines = [];
    for (var i = 0; i < n; i++) lines.push(svgEl("path", { stroke: col, "stroke-width": num(opts.width, 8), "stroke-linecap": "round", fill: "none" }, gb));
    at = clampT(at);
    var seed = Math.round(x * 0.1 + y * 0.3);
    this.anims.push(function (t) {
      var lt = t - at;
      if (lt < 0 || lt > 0.7) { gb.style.display = "none"; return; }
      gb.style.display = "";
      var p = lt / 0.7, grow = EASE.pop(clamp(p * 2, 0, 1)), fade = 1 - sm((p - 0.5) * 2);
      for (var j = 0; j < n; j++) {
        var a = (j / n) * PI * 2 + hash01(seed + j) * 0.3, r0 = r * (0.45 + hash01(seed + j * 3) * 0.3) * grow, r1 = r * (0.9 + hash01(seed + j * 5) * 0.4) * grow;
        lines[j].setAttribute("d", "M" + fx(x + Math.cos(a) * r0) + "," + fx(y + Math.sin(a) * r0) + " L" + fx(x + Math.cos(a) * r1) + "," + fx(y + Math.sin(a) * r1));
        lines[j].setAttribute("opacity", fx(fade));
      }
    });
    return gb;
  };
  /** Warm pool of light on the floor under a fire (behind the actors). */
  SP.floorPool = function (x, y, r, color, strength) {
    var gid = "dwfp" + this.n + "_" + this.anims.length + "_" + V.seed;
    var grad = svgEl("radialGradient", { id: gid }, this.defs);
    svgEl("stop", { offset: "0", "stop-color": color || "#FFB347", "stop-opacity": num(strength, 0.5) }, grad);
    svgEl("stop", { offset: "0.6", "stop-color": color || "#FFB347", "stop-opacity": num(strength, 0.5) * 0.35 }, grad);
    svgEl("stop", { offset: "1", "stop-color": color || "#FFB347", "stop-opacity": 0 }, grad);
    var e2 = svgEl("ellipse", { cx: x, cy: y + 10, rx: r, ry: r * 0.34, fill: "url(#" + gid + ")" }, this.propLayer);
    this.propLayer.insertBefore(e2, this.propLayer.firstChild);
    var seed = this.anims.length;
    this.anims.push(function (t) { e2.setAttribute("opacity", fx(0.85 + noise(t * 12, seed + 50) * 0.15)); });
    return e2;
  };
  /** Firelight on the action layer: a warm radial wash that flickers. Called automatically by cave/night locations. */
  SP.lightWash = function (x, y, r, color, strength) {
    var gid = "dwlw" + this.n + "_" + this.anims.length + "_" + V.seed;
    var grad = svgEl("radialGradient", { id: gid }, this.defs);
    svgEl("stop", { offset: "0", "stop-color": color || "#FFB347", "stop-opacity": num(strength, 0.35) }, grad);
    svgEl("stop", { offset: "1", "stop-color": color || "#FFB347", "stop-opacity": 0 }, grad);
    var e2 = svgEl("ellipse", { cx: x, cy: y, rx: r, ry: r * 0.7, fill: "url(#" + gid + ")" }, this.lightLayer);
    var seed = this.anims.length;
    this.anims.push(function (t) { e2.setAttribute("opacity", fx(0.8 + noise(t * 12, seed + 40) * 0.2)); });
    return e2;
  };

  // ───────────────────────── painted locations ─────────────────────────
  function R(x, y, w, h, fill, extra) { return '<rect x="' + fx(x) + '" y="' + fx(y) + '" width="' + fx(w) + '" height="' + fx(h) + '" fill="' + fill + '"' + (extra || "") + "/>"; }
  function C(cx, cy, r, fill, extra) { return '<circle cx="' + fx(cx) + '" cy="' + fx(cy) + '" r="' + fx(r) + '" fill="' + fill + '"' + (extra || "") + "/>"; }
  function El(cx, cy, rx, ry, fill, extra) { return '<ellipse cx="' + fx(cx) + '" cy="' + fx(cy) + '" rx="' + fx(rx) + '" ry="' + fx(ry) + '" fill="' + fill + '"' + (extra || "") + "/>"; }
  function Pa(d, fill, extra) { return '<path d="' + d + '" fill="' + fill + '"' + (extra || "") + "/>"; }
  function place(svg, x, y, s, flip) { return '<g transform="translate(' + fx(x) + "," + fx(y) + ") scale(" + fx(s * (flip ? -1 : 1)) + "," + fx(s) + ')">' + svg + "</g>"; }
  function layerDefs(sc, name) { var L = sc.layers[name]; if (!L.defs) { L.defs = svgEl("defs", null, L.svg); L.svg.insertBefore(L.defs, L.g); } return L.defs; }
  function gradient(sc, layer, stops, horizontal, radial) {
    var id = "dwg" + sc.n + "_" + layer + "_" + (sc._gid = (sc._gid || 0) + 1) + "_" + V.seed;
    var defs = layerDefs(sc, layer);
    var gr = radial ? svgEl("radialGradient", { id: id, cx: radial.cx, cy: radial.cy, r: radial.r }, defs) : svgEl("linearGradient", { id: id, x1: 0, y1: 0, x2: horizontal ? 1 : 0, y2: horizontal ? 0 : 1 }, defs);
    stops.forEach(function (s) { svgEl("stop", { offset: s[0], "stop-color": s[1], "stop-opacity": s[2] == null ? 1 : s[2] }, gr); });
    return "url(#" + id + ")";
  }
  /** Wavy horizon band from x0..x1 at yBase, closed down to yBot. */
  function hills(x0, x1, yBase, amp, seed, fill, yBot, wl) {
    wl = wl || 260;
    var n = Math.ceil((x1 - x0) / 60), d = "M" + fx(x0) + "," + fx(yBot);
    for (var i = 0; i <= n; i++) {
      var x = x0 + (i / n) * (x1 - x0);
      var y = yBase + noise(x / wl, seed) * amp + noise(x / (wl * 0.33), seed + 5) * amp * 0.3;
      d += " L" + fx(x) + "," + fx(y);
    }
    d += " L" + fx(x1) + "," + fx(yBot) + "Z";
    return Pa(d, fill);
  }
  /** Painterly dabs: scattered translucent ellipses to break flat fills. */
  function dabs(x0, x1, y0, y1, n, fill, seed, rx, ry, op) {
    var out = "", r = V.makeRand(seed);
    for (var i = 0; i < n; i++) out += El(x0 + r() * (x1 - x0), y0 + r() * (y1 - y0), rx * (0.5 + r()), ry * (0.5 + r()), fill, ' opacity="' + fx((op || 0.18) * (0.5 + r())) + '"');
    return out;
  }
  function tufts(x0, x1, y, n, seed, col, h) {
    var out = "", r = V.makeRand(seed); h = h || 26;
    for (var i = 0; i < n; i++) { var x = x0 + r() * (x1 - x0), hh = h * (0.6 + r() * 0.8), yy = y + (r() - 0.5) * 30; out += Pa("M" + fx(x - 10) + "," + fx(yy) + " L" + fx(x - 4) + "," + fx(yy - hh) + " L" + fx(x) + "," + fx(yy) + " L" + fx(x + 5) + "," + fx(yy - hh * 1.2) + " L" + fx(x + 10) + "," + fx(yy) + "Z", col); }
    return out;
  }
  function cloud(x, y, s, fill, op) { return place(Pa("M-60,20 C-80,20 -84,-6 -62,-10 C-62,-34 -30,-40 -18,-24 C-10,-48 30,-48 36,-20 C56,-30 80,-14 70,6 C86,10 82,20 66,20Z", fill, ' opacity="' + (op == null ? 0.9 : op) + '"'), x, y, s); }
  function sunSvg(cx, cy, r, col, rays) {
    var out = C(cx, cy, r * 1.35, col, ' opacity=".25"') + C(cx, cy, r * 1.15, col, ' opacity=".35"') + C(cx, cy, r, col);
    if (rays) { for (var i = 0; i < 12; i++) { var a = (i / 12) * PI * 2; out += '<path d="M' + fx(cx + Math.cos(a) * r * 1.45) + "," + fx(cy + Math.sin(a) * r * 1.45) + " L" + fx(cx + Math.cos(a) * r * (1.75 + (i % 2) * 0.2)) + "," + fx(cy + Math.sin(a) * r * (1.75 + (i % 2) * 0.2)) + '" stroke="' + col + '" stroke-width="' + fx(r * 0.12) + '" stroke-linecap="round" opacity=".8"/>'; } }
    return out;
  }
  function stars(x0, x1, y0, y1, n, seed) { var out = "", r = V.makeRand(seed); for (var i = 0; i < n; i++) out += C(x0 + r() * (x1 - x0), y0 + r() * (y1 - y0), 1.5 + r() * 3, "#FFF6D5", ' opacity="' + fx(0.4 + r() * 0.6) + '"'); return out; }
  function mountains(x0, x1, yBase, h, seed, fill, snow) {
    var out = "", r = V.makeRand(seed), x = x0 - 200;
    while (x < x1 + 200) { var w = 300 + r() * 400, hh = h * (0.6 + r() * 0.6); out += Pa("M" + fx(x) + "," + fx(yBase) + " L" + fx(x + w * 0.45) + "," + fx(yBase - hh) + " L" + fx(x + w * 0.55) + "," + fx(yBase - hh * 0.92) + " L" + fx(x + w) + "," + fx(yBase) + "Z", fill); if (snow) out += Pa("M" + fx(x + w * 0.35) + "," + fx(yBase - hh * 0.75) + " L" + fx(x + w * 0.45) + "," + fx(yBase - hh) + " L" + fx(x + w * 0.55) + "," + fx(yBase - hh * 0.92) + " L" + fx(x + w * 0.62) + "," + fx(yBase - hh * 0.72) + " L" + fx(x + w * 0.52) + "," + fx(yBase - hh * 0.8) + " L" + fx(x + w * 0.44) + "," + fx(yBase - hh * 0.7) + "Z", snow); x += w * 0.7; }
    return out;
  }
  function building(x, y, w, h, fill, win, seed) {
    var out = R(x, y - h, w, h, fill, stAttr(5)), r = V.makeRand(seed);
    for (var yy = y - h + 30; yy < y - 30; yy += 46) for (var xx = x + 18; xx < x + w - 30; xx += 40) out += R(xx, yy, 22, 28, r() < 0.7 ? win : shade(fill, -0.3));
    return out;
  }
  function timberHouse(x, y, w, h, seed) {
    var wall = "#E8DCC0", beam = "#6B4A2A", roof = "#A8503A";
    var out = R(x, y - h, w, h, wall, stAttr(5));
    out += Pa("M" + fx(x - 20) + "," + fx(y - h) + " L" + fx(x + w / 2) + "," + fx(y - h - w * 0.45) + " L" + fx(x + w + 20) + "," + fx(y - h) + "Z", roof, stAttr(5));
    out += '<path d="M' + fx(x) + "," + fx(y - h * 0.5) + " L" + fx(x + w) + "," + fx(y - h * 0.5) + " M" + fx(x + w * 0.3) + "," + fx(y - h) + " L" + fx(x + w * 0.3) + "," + fx(y) + " M" + fx(x + w * 0.7) + "," + fx(y - h) + " L" + fx(x + w * 0.7) + "," + fx(y) + " M" + fx(x) + "," + fx(y - h) + " L" + fx(x + w * 0.3) + "," + fx(y - h * 0.5) + '" stroke="' + beam + '" stroke-width="8"/>';
    out += R(x + w * 0.4, y - 90, w * 0.2, 90, "#3A2416", stAttr(4)) + R(x + w * 0.08, y - h * 0.86, 40, 40, "#8BB8D9", stAttr(4)) + R(x + w * 0.78, y - h * 0.86, 40, 40, "#8BB8D9", stAttr(4));
    return out;
  }
  /** Pebbles, cracks and tufts on the ground band. */
  function groundDetail(x0, x1, y0, y1, seed, pebble, crack, tuft, n) {
    var out = "", r = V.makeRand(seed); n = n || 50;
    for (var i = 0; i < n; i++) {
      var x = x0 + r() * (x1 - x0), y = y0 + r() * (y1 - y0), k = r();
      if (k < 0.45 && pebble) out += '<path d="' + roughEllipse(x, y, 10 + r() * 18, 6 + r() * 8, Math.round(x), 0.12, 8) + '" fill="' + pebble + '"' + stAttr(3) + ' opacity=".9"/>';
      else if (k < 0.7 && crack) out += '<path d="' + roughLine(x, y, x + (r() - 0.5) * 160, y + (r() - 0.3) * 50, Math.round(x), 6) + '" fill="none" stroke="' + crack + '" stroke-width="3" stroke-linecap="round" opacity=".6"/>';
      else if (tuft) out += tufts(x, x + 1, y, 1, Math.round(x * 3), tuft, 20 + r() * 20);
    }
    return out;
  }
  /** Atmospheric haze band across the horizon. */
  function haze(sc, layer, y, h, color, op) {
    var gr = gradient(sc, layer, [[0, color, 0], [0.5, color, op], [1, color, 0]]);
    return R(sc.x0 - 100, y - h / 2, sc.x1 - sc.x0 + 200, h, gr);
  }
  /** Hill band with a lit top edge and shaded dabs (painterly). */
  function hillsLit(x0, x1, yBase, amp, seed, fill, yBot, wl, lit, shade2) {
    return hills(x0, x1, yBase, amp, seed, fill, yBot, wl) + '<g opacity=".55">' + hills(x0, x1, yBase + 26, amp, seed, lit || shade(fill, 0.25), yBase + 60, wl) + "</g>" + dabs(x0, x1, yBase + 30, yBot - 60, 40, shade2 || shade(fill, -0.3), seed + 100, 120, 16, 0.22);
  }
  /** Big foreground props cropped by the frame edges (front parallax layer). */
  function edgeProps(sc, leftSvg, rightSvg, s) {
    s = s || 1.5;
    var G = sc.G, out = "";
    if (leftSvg) out += place(leftSvg, sc.x0 + sc.Ww * 0.8 - sc.Ww * 0.02, G + 300, s);
    if (rightSvg) out += place(rightSvg, sc.Ww * 1.03, G + 300, s, true);
    return out;
  }
  var LOCATIONS = {};
  function skyRect(sc, layer, fillStr) { return R(sc.x0 - 100, sc.top - 100, sc.x1 - sc.x0 + 200, sc.bot - sc.top + 200, fillStr); }

  LOCATIONS.savanna = function (sc) {
    var X0 = sc.x0, X1 = sc.x1, G = sc.G;
    var sky = gradient(sc, "sky", [[0, "#F9D27A"], [0.45, "#F7A05A"], [0.75, "#E8734A"], [1, "#C9553E"]]);
    sc.layers.sky.g.innerHTML = skyRect(sc, "sky", sky) + sunSvg(sc.Ww * 0.72, 470, 120, "#FFE27A", false) + cloud(sc.Ww * 0.2, 250, 1.3, "#FFD9A8", 0.6) + cloud(sc.Ww * 1.1, 180, 1.0, "#FFD9A8", 0.5) + cloud(sc.Ww * 0.55, 140, 0.8, "#FFD9A8", 0.4);
    sc.layers.far.g.innerHTML = mountains(X0, X1, 640, 180, 3, "#A86A6A") + hillsLit(X0, X1, 660, 40, 4, "#8E5A58", 1300, 400, "#B07878") + haze(sc, "far", 690, 160, "#FFD9A8", 0.5);
    sc.layers.mid.g.innerHTML = hillsLit(X0, X1, 720, 40, 5, "#C98B4B", 1300, 300, "#E2A95C") + place(SETPIECES.acacia(), sc.Ww * 0.15, 760, 0.8) + place(SETPIECES.acacia(), sc.Ww * 1.15, 740, 0.7, true) + place(SETPIECES.acacia(), sc.Ww * 1.9, 760, 0.85) + place(SETPIECES.acacia(), sc.Ww * -0.5, 750, 0.75) + place(SETPIECES.hut(), sc.Ww * 0.55, 790, 0.45) + place(SETPIECES.tent(), sc.Ww * 0.72, 795, 0.4, true) + dabs(X0, X1, 700, 780, 40, "#E2A95C", 21, 60, 14);
    sc.layers.near.g.innerHTML = hillsLit(X0, X1, 820, 24, 6, "#D9A45A", 1300, 220, "#EBC37A") + tufts(X0, X1, 830, 70, 22, "#A8743E", 34) + place(SETPIECES.bush(), sc.Ww * 1.3, 835, 0.6) + place(SETPIECES.rock(), sc.Ww * -0.2, 840, 0.5) + place(SETPIECES.stones(), sc.Ww * 0.9, 845, 0.6);
    sc.layers.ground.g.innerHTML = hills(X0, X1, G - 40, 10, 7, "#E2B56B", 1300, 200) + dabs(X0, X1, G - 20, G + 180, 70, "#C98B4B", 23, 90, 12, 0.25) + groundDetail(X0, X1, G - 20, G + 220, 26, "#B88B4A", "#A8743E", "#B88B4A", 70);
    sc.layers.front.g.innerHTML = tufts(X0, X1, G + 150, 24, 25, "#8A5A33", 60) + edgeProps(sc, SETPIECES.bush(), SETPIECES.rock(), 1.6);
    sc.weather("dust", { count: 18 });
  };
  LOCATIONS.cave = function (sc, o) {
    var X0 = sc.x0, X1 = sc.x1, G = sc.G;
    var wall = gradient(sc, "sky", [[0, "#3A2416"], [0.55, "#5E3B24"], [1, "#7A4E2E"]]);
    sc.layers.sky.g.innerHTML = skyRect(sc, "sky", wall) + dabs(X0, X1, -400, 700, 60, "#8A5A33", 31, 160, 60, 0.3) + dabs(X0, X1, -400, 700, 30, "#3A2416", 32, 120, 40, 0.3);
    // stalactites + cave paintings
    var st = "", r = V.makeRand(33), x = X0;
    while (x < X1) { var w = 60 + r() * 120, h = 80 + r() * 220; st += Pa("M" + fx(x) + "," + fx(-420) + " L" + fx(x + w) + "," + fx(-420) + " L" + fx(x + w * 0.5) + "," + fx(-420 + h) + "Z", "#3A2416"); x += w * 0.8; }
    var paint = '<g opacity=".85">' + place('<path d="M-60,0 C-40,-50 40,-50 60,0 M-40,0 L-40,40 M40,0 L40,40 M-10,0 L-10,36 M20,0 L20,36 M60,-10 C80,-30 90,-20 90,0" fill="none" stroke="#C86A3A" stroke-width="9" stroke-linecap="round"/>', sc.Ww * 0.25, 360, 1.1) +
      place('<path d="M0,40 L0,-20 M-14,-20 C-14,-50 14,-50 14,-20 M-30,-10 L-14,-26 M30,-10 L14,-26 M-14,40 L0,10 L14,40" fill="none" stroke="#D9A45A" stroke-width="8" stroke-linecap="round"/>', sc.Ww * 0.42, 340, 1.1) +
      place('<path d="M0,0 C-20,-24 -30,-4 -10,10 L-4,34 L2,34 L4,10 C24,-4 20,-24 0,0Z M-20,20 C-34,30 -30,50 -20,46 M20,20 C34,30 30,50 20,46" fill="#C86A3A" stroke="#C86A3A" stroke-width="4"/>', sc.Ww * 0.6, 330, 1.2) +
      place('<path d="M-30,30 L30,30 M-20,30 L-20,-10 M20,30 L20,-10 M-30,-10 L30,-10 L10,-40 L-10,-40Z" fill="none" stroke="#D9A45A" stroke-width="8" stroke-linecap="round"/>', sc.Ww * 0.78, 380, 1) + "</g>";
    sc.layers.far.g.innerHTML = st + paint + Pa("M" + fx(X0) + ",700 C" + fx(X0 + 300) + ",600 " + fx(sc.Ww * 0.2) + ",760 " + fx(sc.Ww * 0.5) + ",700 C" + fx(sc.Ww * 0.9) + ",640 " + fx(sc.Ww * 1.4) + ",760 " + fx(X1) + ",680 L" + fx(X1) + ",1300 L" + fx(X0) + ",1300Z", "#4A2E1C");
    // cave mouth with daylight on the far right
    sc.layers.mid.g.innerHTML = place(Pa("M-200,0 C-220,-260 -90,-420 60,-400 C200,-380 240,-200 220,0Z", gradient(sc, "mid", [[0, "#FFF2B8"], [1, "#9FD0E8"]])), sc.Ww * 1.55, G + 30, 1.1) + place(Pa("M-200,0 C-220,-260 -90,-420 60,-400 C200,-380 240,-200 220,0Z", "none", ' stroke="#1F130C" stroke-width="60"'), sc.Ww * 1.55, G + 30, 1.1) +
      hills(X0, X1, 790, 36, 8, "#6B4426", 1300, 300) + dabs(X0, X1, 760, 860, 40, "#8A5A33", 34, 90, 20, 0.4);
    sc.layers.near.g.innerHTML = place(SETPIECES.boulder(), sc.Ww * -0.25, G - 20, 0.8) + place(SETPIECES.rock(), sc.Ww * 1.25, G - 10, 1) + place(SETPIECES.rock(), sc.Ww * 0.1, G - 40, 0.6, true) + place(SETPIECES.pot(), sc.Ww * 0.9, G - 30, 0.5) + place(SETPIECES.hay(), sc.Ww * 0.18, G - 30, 0.5) + place('<path d="M-70,0 C-80,-8 -80,-22 -66,-24 L40,-30 C56,-32 60,-16 48,-10 L-40,-4Z" fill="#F4ECD8"' + stAttr(4) + '/><path d="M-60,-40 L-10,-46 M30,-44 L70,-50" stroke="#F4ECD8" stroke-width="10" stroke-linecap="round"/>', sc.Ww * 1.05, G - 20, 0.9) + dabs(X0, X1, G - 120, G - 20, 30, "#A8743E", 36, 60, 10, 0.25);
    sc.layers.sky.g.innerHTML += dabs(X0, X1, -300, 500, 24, "#C98B4B", 37, 90, 26, 0.18);
    sc.layers.ground.g.innerHTML = hills(X0, X1, G - 30, 12, 9, "#7A4E2E", 1300, 180) + dabs(X0, X1, G - 10, G + 200, 60, "#5A3A22", 35, 110, 14, 0.4) + groundDetail(X0, X1, G - 20, G + 220, 38, "#8E867A", "#3A2416", null, 60);
    sc.layers.front.g.innerHTML = Pa("M" + fx(X0) + "," + fx(G + 200) + " C" + fx(sc.Ww * 0.2) + "," + fx(G + 120) + " " + fx(sc.Ww * 0.8) + "," + fx(G + 240) + " " + fx(X1) + "," + fx(G + 160) + " L" + fx(X1) + ",1300 L" + fx(X0) + ",1300Z", "#2A1A10") + edgeProps(sc, SETPIECES.boulder(), SETPIECES.stones(), 1.4);
    if (!(o && o.noFire)) { var f = sc.fire(sc.Ww * (sc.portrait ? 0.5 : 0.56), G + 6, 1); sc.lightWash(f.x, f.y - 120, 1100, "#FFB347", 0.62); sc.floorPool(f.x, f.y, 760, "#FFB347", 0.5); }
    sc.weather("embers", { count: 14 });
    sc.isDark = true;
  };
  LOCATIONS.tundra = function (sc) {
    var X0 = sc.x0, X1 = sc.x1, G = sc.G;
    var sky = gradient(sc, "sky", [[0, "#6E8FB8"], [0.5, "#B9D1E6"], [1, "#EAF2F7"]]);
    sc.layers.sky.g.innerHTML = skyRect(sc, "sky", sky) + sunSvg(sc.Ww * 0.3, 300, 70, "#FFF4D6", false) + cloud(sc.Ww * 0.75, 220, 1.2, "#F4F8FB", 0.8) + cloud(sc.Ww * 1.5, 300, 0.9, "#F4F8FB", 0.7);
    sc.layers.far.g.innerHTML = mountains(X0, X1, 660, 240, 11, "#8FA4BE", "#F4F8FB") + hillsLit(X0, X1, 680, 30, 12, "#C9D8E6", 1300, 400, "#FFFFFF") + haze(sc, "far", 700, 180, "#FFFFFF", 0.6);
    sc.layers.mid.g.innerHTML = hillsLit(X0, X1, 740, 40, 13, "#E4EEF5", 1300, 300, "#FFFFFF") + place(SETPIECES.igloo(), sc.Ww * 0.6, 790, 0.4) + place(SETPIECES.tent(), sc.Ww * 1.45, 790, 0.4) + place(SETPIECES.pine(), sc.Ww * 0.1, 770, 0.8) + place(SETPIECES.pine(), sc.Ww * 0.22, 760, 0.6) + place(SETPIECES.pine(), sc.Ww * 1.2, 765, 0.75) + place(SETPIECES.pine(), sc.Ww * 1.8, 770, 0.9) + place(SETPIECES.pine(), sc.Ww * -0.4, 770, 0.85) + dabs(X0, X1, 720, 800, 30, "#FFFFFF", 36, 80, 12, 0.4);
    sc.layers.near.g.innerHTML = hillsLit(X0, X1, 830, 24, 14, "#F4F8FB", 1300, 220, "#FFFFFF", "#C9D8E6") + place(SETPIECES.rock(), sc.Ww * 1.35, 850, 0.7) + place(SETPIECES.snowman(), sc.Ww * -0.3, 850, 0.6) + place(SETPIECES.pine(), sc.Ww * 0.95, 860, 0.5) + place(SETPIECES.stones(), sc.Ww * 0.3, 860, 0.5);
    sc.layers.ground.g.innerHTML = hills(X0, X1, G - 40, 10, 15, "#FFFFFF", 1300, 200) + dabs(X0, X1, G - 20, G + 180, 60, "#C9D8E6", 37, 110, 12, 0.35) + groundDetail(X0, X1, G - 20, G + 220, 40, "#B8C8D6", "#B8C8D6", "#9FB0BE", 50);
    sc.layers.front.g.innerHTML = dabs(X0, X1, G + 140, G + 300, 20, "#DCE7F0", 39, 160, 30, 0.6) + edgeProps(sc, SETPIECES.pine(), SETPIECES.rock(), 1.5);
    sc.weather("snow", { count: 50 });
    sc.isCold = true;
  };
  LOCATIONS.desert = function (sc) {
    var X0 = sc.x0, X1 = sc.x1, G = sc.G;
    var sky = gradient(sc, "sky", [[0, "#F2B544"], [0.5, "#F9D77A"], [1, "#FBE9B8"]]);
    sc.layers.sky.g.innerHTML = skyRect(sc, "sky", sky) + sunSvg(sc.Ww * 0.78, 250, 110, "#FFF0A0", true);
    sc.layers.far.g.innerHTML = hillsLit(X0, X1, 660, 60, 41, "#E2B56B", 1300, 700, "#F6DFA0") + haze(sc, "far", 690, 200, "#FFF0C0", 0.55) + place(SETPIECES.pyramid(), sc.Ww * 0.3, 700, 0.75) + place(SETPIECES.pyramid(), sc.Ww * 0.62, 690, 0.95) + place(SETPIECES.pyramid(), sc.Ww * 1.5, 700, 0.6) + place(SETPIECES.pyramid(), sc.Ww * -0.4, 700, 0.7);
    sc.layers.mid.g.innerHTML = hillsLit(X0, X1, 740, 50, 42, "#EBC37A", 1300, 500, "#F6DFA0") + dabs(X0, X1, 720, 800, 30, "#F6DFA0", 43, 120, 12, 0.5) + place(SETPIECES.hut(), sc.Ww * 1.15, 800, 0.4) + place(SETPIECES.column(), sc.Ww * -0.1, 800, 0.35) + place(SETPIECES.column(), sc.Ww * -0.02, 800, 0.35);
    sc.layers.near.g.innerHTML = hillsLit(X0, X1, 830, 30, 44, "#E8B964", 1300, 300, "#F6DFA0") + place(SETPIECES.palm(), sc.Ww * 1.3, 860, 0.8) + place(SETPIECES.cactus(), sc.Ww * -0.3, 860, 0.7) + place(SETPIECES.pot(), sc.Ww * 0.95, 860, 0.45) + place(SETPIECES.crate(), sc.Ww * 0.1, 860, 0.45);
    sc.layers.ground.g.innerHTML = hills(X0, X1, G - 40, 12, 45, "#F0C97A", 1300, 200) + dabs(X0, X1, G - 20, G + 180, 60, "#D9A45A", 46, 120, 10, 0.35) + groundDetail(X0, X1, G - 20, G + 220, 47, "#D9A45A", "#C98B4B", null, 60);
    sc.layers.front.g.innerHTML = place(SETPIECES.rock(), sc.Ww * 0.05, G + 200, 0.9) + edgeProps(sc, SETPIECES.cactus(), SETPIECES.palm(), 1.5);
    sc.weather("dust", { count: 20, color: "#F6DFA0" });
    sc.isHot = true;
  };
  LOCATIONS.nile = function (sc) {
    var X0 = sc.x0, X1 = sc.x1, G = sc.G;
    var sky = gradient(sc, "sky", [[0, "#5FA8D6"], [0.6, "#A9D6EC"], [1, "#F5E6B8"]]);
    sc.layers.sky.g.innerHTML = skyRect(sc, "sky", sky) + sunSvg(sc.Ww * 0.2, 220, 80, "#FFF4C8", false) + cloud(sc.Ww * 0.9, 180, 1.1, "#FFFFFF", 0.8);
    sc.layers.far.g.innerHTML = hills(X0, X1, 620, 40, 51, "#D9A45A", 1300, 600) + place(SETPIECES.pyramid(), sc.Ww * 0.72, 650, 0.55) + place(SETPIECES.pyramid(), sc.Ww * 1.7, 650, 0.5) + hills(X0, X1, 660, 20, 52, "#C9B36A", 1300, 400);
    // river
    var water = gradient(sc, "mid", [[0, "#3C8CC9"], [1, "#2C6FA8"]]);
    var ripples = "", rr = V.makeRand(53);
    for (var i = 0; i < 40; i++) { var rx = X0 + rr() * (X1 - X0), ry = 700 + rr() * 90; ripples += '<path d="M' + fx(rx) + "," + fx(ry) + " q20,-6 40,0 q20,6 40,0" + '" fill="none" stroke="#9FD0F0" stroke-width="4" stroke-linecap="round" opacity=".7"/>'; }
    sc.layers.mid.g.innerHTML = R(X0, 690, X1 - X0, 120, water) + ripples +
      place('<path d="M-120,0 C-100,30 100,30 120,0 L140,-30 L-140,-30Z" fill="#B88B5A"' + stAttr() + '/><path d="M0,-30 L0,-170"' + stAttr(8) + '/><path d="M0,-170 L90,-60 L0,-60Z" fill="#F6F0DC"' + stAttr(5) + "/>", sc.Ww * 0.85, 760, 0.8) +
      place('<path d="M-120,0 C-100,30 100,30 120,0 L140,-30 L-140,-30Z" fill="#B88B5A"' + stAttr() + '/><path d="M0,-30 L0,-170"' + stAttr(8) + '/><path d="M0,-170 L90,-60 L0,-60Z" fill="#F6F0DC"' + stAttr(5) + "/>", sc.Ww * 1.6, 740, 0.6, true);
    var reeds = "", r2 = V.makeRand(54);
    for (i = 0; i < 60; i++) { var x = X0 + r2() * (X1 - X0), h = 60 + r2() * 120; reeds += '<path d="M' + fx(x) + ",830 C" + fx(x + 6) + "," + fx(830 - h * 0.5) + " " + fx(x - 6) + "," + fx(830 - h * 0.8) + " " + fx(x + 4) + "," + fx(830 - h) + '" fill="none" stroke="#5B9A3C" stroke-width="5" stroke-linecap="round"/>' + El(x + 4, 830 - h, 6, 18, "#8A5A33"); }
    sc.layers.near.g.innerHTML = hills(X0, X1, 822, 16, 55, "#7DB85A", 1300, 300) + reeds + place(SETPIECES.palm(), sc.Ww * 0.08, 840, 0.9) + place(SETPIECES.palm(), sc.Ww * 1.35, 850, 0.8, true);
    sc.layers.ground.g.innerHTML = hills(X0, X1, G - 40, 12, 56, "#C9B36A", 1300, 200) + dabs(X0, X1, G - 20, G + 180, 50, "#8BB84A", 57, 100, 10, 0.3) + groundDetail(X0, X1, G - 20, G + 220, 58, "#B8A060", null, "#6DB24F", 60);
    sc.layers.near.g.innerHTML += place(SETPIECES.pot(), sc.Ww * 0.9, 870, 0.45) + place(SETPIECES.hut(), sc.Ww * 1.1, 850, 0.35);
    sc.layers.far.g.innerHTML += haze(sc, "far", 690, 160, "#FFF4D0", 0.5);
    sc.layers.front.g.innerHTML = tufts(X0, X1, G + 160, 20, 59, "#4E8A3A", 70) + edgeProps(sc, SETPIECES.palm(), SETPIECES.bush(), 1.5);
    sc.isHot = true;
  };
  LOCATIONS["roman-forum"] = function (sc) {
    var X0 = sc.x0, X1 = sc.x1, G = sc.G;
    var sky = gradient(sc, "sky", [[0, "#7FB2E0"], [0.7, "#CDE3F2"], [1, "#F3E7C9"]]);
    sc.layers.sky.g.innerHTML = skyRect(sc, "sky", sky) + cloud(sc.Ww * 0.3, 200, 1.3, "#FFFFFF", 0.9) + cloud(sc.Ww * 1.2, 150, 1.0, "#FFFFFF", 0.8);
    sc.layers.far.g.innerHTML = hills(X0, X1, 640, 60, 61, "#9FB08A", 1300, 500) + place(Pa("M-240,0 L-240,-140 L-200,-180 L200,-180 L240,-140 L240,0Z", "#E6DCC0", stAttr(5)) + '<path d="M-180,-180 L-180,0 M-110,-180 L-110,0 M-40,-180 L-40,0 M40,-180 L40,0 M110,-180 L110,0 M180,-180 L180,0" stroke="#CFC3A6" stroke-width="18"/>', sc.Ww * 0.45, 690, 0.9) +
      place('<path d="M-20,0 C-60,-100 -60,-300 0,-420 C60,-300 60,-100 20,0Z" fill="#2F6B3A"' + stAttr(4) + "/>", sc.Ww * 0.05, 700, 0.6) + place('<path d="M-20,0 C-60,-100 -60,-300 0,-420 C60,-300 60,-100 20,0Z" fill="#2F6B3A"' + stAttr(4) + "/>", sc.Ww * 1.05, 700, 0.55);
    var cols = "";
    for (var i = -2; i < 8; i++) cols += place(SETPIECES.column(), sc.Ww * 0.2 + i * 300, 800, 0.95);
    sc.layers.mid.g.innerHTML = R(X0, 800, X1 - X0, 60, "#D9CDB2", stAttr(5)) + cols + place('<path d="M-200,0 L-200,-260 C-200,-380 200,-380 200,-260 L200,0 L120,0 L120,-240 C120,-320 -120,-320 -120,-240 L-120,0Z" fill="#E6DCC0"' + stAttr() + "/>", sc.Ww * 1.55, 800, 0.9);
    sc.layers.near.g.innerHTML = R(X0, 850, X1 - X0, 30, "#CFC3A6", stAttr(4)) + R(X0, 878, X1 - X0, 30, "#E6DCC0", stAttr(4)) + place(SETPIECES.barrel(), sc.Ww * 1.3, 905, 0.7) + place(SETPIECES.bush(), sc.Ww * -0.25, 900, 0.5);
    var tiles = "";
    for (i = 0; i < 30; i++) tiles += '<path d="M' + fx(X0 + i * 140) + "," + fx(G - 30) + " L" + fx(X0 + i * 140 + 90) + "," + fx(G + 300) + '" stroke="#C9B894" stroke-width="3" opacity=".6"/>';
    sc.layers.ground.g.innerHTML = R(X0, G - 40, X1 - X0, 500, "#E2D5B4") + tiles + dabs(X0, X1, G - 20, G + 200, 40, "#C9B894", 62, 110, 10, 0.3) + groundDetail(X0, X1, G - 10, G + 220, 63, null, "#B8A888", null, 30);
    sc.layers.near.g.innerHTML += place(SETPIECES.pot(), sc.Ww * 0.08, 905, 0.5) + place(SETPIECES.crate(), sc.Ww * 0.95, 905, 0.45);
    sc.layers.far.g.innerHTML += haze(sc, "far", 700, 160, "#FFFFFF", 0.45);
    sc.layers.front.g.innerHTML = edgeProps(sc, SETPIECES.column(), SETPIECES.barrel(), 1.4);
  };
  LOCATIONS["greek-agora"] = function (sc) { LOCATIONS["roman-forum"](sc); sc.layers.sky.g.innerHTML = skyRect(sc, "sky", gradient(sc, "sky", [[0, "#3C7FC9"], [0.7, "#A9D0EE"], [1, "#F3E7C9"]])) + cloud(sc.Ww * 0.6, 180, 1.2, "#FFFFFF", 0.9); };
  LOCATIONS["medieval-village"] = function (sc) {
    var X0 = sc.x0, X1 = sc.x1, G = sc.G;
    var sky = gradient(sc, "sky", [[0, "#6FA3D6"], [0.6, "#BFDCEE"], [1, "#EFE4C6"]]);
    sc.layers.sky.g.innerHTML = skyRect(sc, "sky", sky) + cloud(sc.Ww * 0.2, 180, 1.2, "#FFFFFF", 0.9) + cloud(sc.Ww * 0.8, 260, 0.9, "#FFFFFF", 0.8) + cloud(sc.Ww * 1.5, 150, 1.1, "#FFFFFF", 0.8);
    sc.layers.far.g.innerHTML = hills(X0, X1, 620, 70, 71, "#7FA86A", 1300, 500) + place('<path d="M-60,0 L-60,-220 L0,-420 L60,-220 L60,0Z M-120,0 L-120,-160 L120,-160 L120,0Z" fill="#C9BFA6"' + stAttr(5) + '/><path d="M0,-420 L0,-470 M-16,-450 L16,-450"' + stAttr(5) + "/>", sc.Ww * 0.72, 690, 0.8) + hills(X0, X1, 680, 30, 72, "#9BBF6A", 1300, 350);
    var houses = "", r = V.makeRand(73), x = X0;
    while (x < X1) { var w = 220 + r() * 160, h = 180 + r() * 100; houses += timberHouse(x, 820, w, h, Math.round(x)); x += w + 90 + r() * 220; }
    sc.layers.mid.g.innerHTML = hills(X0, X1, 760, 30, 74, "#A9C96A", 1300, 300) + houses + place(SETPIECES.tree(), sc.Ww * 1.05, 830, 0.8);
    var fence = "";
    for (var i = 0; i < 60; i++) fence += '<path d="M' + fx(X0 + i * 90) + ",860 L" + fx(X0 + i * 90) + ',800" stroke="#8A5A33" stroke-width="8" stroke-linecap="round"/>';
    fence += '<path d="M' + fx(X0) + ",815 L" + fx(X1) + ",815 M" + fx(X0) + ",840 L" + fx(X1) + ',840" stroke="#8A5A33" stroke-width="6"/>';
    sc.layers.near.g.innerHTML = hills(X0, X1, 850, 20, 75, "#7FB04A", 1300, 220) + fence + place(SETPIECES.hay(), sc.Ww * 1.3, 880, 0.8) + place(SETPIECES.cart(), sc.Ww * -0.3, 880, 0.7);
    sc.layers.ground.g.innerHTML = hills(X0, X1, G - 40, 10, 76, "#B88B4A", 1300, 200) + dabs(X0, X1, G - 20, G + 180, 60, "#8A5A33", 77, 110, 10, 0.3) + groundDetail(X0, X1, G - 20, G + 220, 78, "#9A8A6A", "#8A5A33", "#6DB24F", 60);
    sc.layers.near.g.innerHTML += place(SETPIECES.barrel(), sc.Ww * 0.08, 885, 0.5) + place(SETPIECES.well(), sc.Ww * 0.92, 885, 0.5);
    sc.layers.far.g.innerHTML += haze(sc, "far", 690, 160, "#FFFFFF", 0.45);
    sc.layers.front.g.innerHTML = tufts(X0, X1, G + 160, 20, 79, "#4E8A3A", 60) + edgeProps(sc, SETPIECES.hay(), SETPIECES.cart(), 1.4);
  };
  LOCATIONS["modern-city"] = function (sc) {
    var X0 = sc.x0, X1 = sc.x1, G = sc.G;
    var sky = gradient(sc, "sky", [[0, "#4F97DB"], [0.7, "#B8DBF2"], [1, "#E8EEF2"]]);
    sc.layers.sky.g.innerHTML = skyRect(sc, "sky", sky) + cloud(sc.Ww * 0.35, 160, 1.1, "#FFFFFF", 0.9) + cloud(sc.Ww * 1.3, 220, 0.9, "#FFFFFF", 0.8);
    var far = "", r = V.makeRand(81), x = X0;
    while (x < X1) { var w = 120 + r() * 160, h = 200 + r() * 320; far += R(x, 700 - h, w, h, "#9FB0C4"); x += w + 10; }
    sc.layers.far.g.innerHTML = far + R(X0, 690, X1 - X0, 200, "#8899AE");
    var mid = "", r2 = V.makeRand(82); x = X0;
    var cols = ["#E8A47A", "#D6C8A8", "#8FB9D6", "#C9D1D8", "#E6C98A"];
    while (x < X1) { var w2 = 180 + r2() * 220, h2 = 240 + r2() * 300; mid += building(x, 830, w2, h2, cols[Math.floor(r2() * cols.length)], "#FFF2B0", Math.round(x)); x += w2 + 30 + r2() * 80; }
    sc.layers.mid.g.innerHTML = mid + R(X0, 826, X1 - X0, 40, "#B9B5AE", stAttr(4));
    var lamps = "";
    for (var i = 0; i < 20; i++) lamps += place('<path d="M0,0 L0,-260"' + stAttr(10) + '/><path d="M0,-260 L40,-260"' + stAttr(8) + '/><ellipse cx="46" cy="-258" rx="16" ry="10" fill="#FFF2B0"' + stAttr(4) + "/>", X0 + i * 520 + 200, 880, 0.8);
    sc.layers.near.g.innerHTML = R(X0, 862, X1 - X0, 30, "#CFCCC4", stAttr(4)) + lamps + place('<rect x="-60" y="-70" width="120" height="70" rx="10" fill="#4FB0C6"' + stAttr(5) + '/><path d="M-60,-40 L60,-40" stroke="' + INK + '" stroke-width="4"/>', sc.Ww * 1.25, 892, 0.8);
    var stripes = "";
    for (i = 0; i < 80; i++) stripes += R(X0 + i * 130, G + 60, 70, 24, "#F4F1EA", ' opacity=".85"');
    sc.layers.ground.g.innerHTML = R(X0, G - 40, X1 - X0, 500, "#4C4F58") + stripes + R(X0, G - 40, X1 - X0, 14, "#9A9488") + groundDetail(X0, X1, G, G + 220, 83, null, "#3A3D45", null, 30);
    sc.layers.far.g.innerHTML += haze(sc, "far", 700, 200, "#E8EEF2", 0.6);
    sc.layers.front.g.innerHTML = edgeProps(sc, SETPIECES.crate(), SETPIECES.bench(), 1.3);
  };
  LOCATIONS["future-city"] = function (sc) {
    var X0 = sc.x0, X1 = sc.x1, G = sc.G;
    var sky = gradient(sc, "sky", [[0, "#140B2E"], [0.5, "#3A1F6E"], [1, "#A24A8C"]]);
    sc.layers.sky.g.innerHTML = skyRect(sc, "sky", sky) + stars(X0, X1, -400, 500, 90, 91) + C(sc.Ww * 0.75, 260, 120, "#F7C9E0", ' opacity=".9"') + C(sc.Ww * 0.75, 260, 150, "#F7C9E0", ' opacity=".2"');
    var far = "", r = V.makeRand(92), x = X0;
    while (x < X1) { var w = 60 + r() * 120, h = 300 + r() * 500; far += R(x, 720 - h, w, h, "#2A1A4E"); far += '<path d="M' + fx(x + 10) + "," + fx(720 - h + 20) + " L" + fx(x + 10) + ',700" stroke="#7A4AC8" stroke-width="3" opacity=".6"/>'; x += w + 14; }
    sc.layers.far.g.innerHTML = far + R(X0, 710, X1 - X0, 300, "#1E1240");
    var towers = "";
    for (var i = -2; i < 9; i++) towers += place(SETPIECES.tower(), sc.Ww * 0.1 + i * 360 + (i % 2) * 90, 840, 0.7 + (i % 3) * 0.15);
    sc.layers.mid.g.innerHTML = towers + R(X0, 830, X1 - X0, 40, "#3C2A6E", stAttr(4));
    sc.layers.near.g.innerHTML = R(X0, 868, X1 - X0, 24, "#5BE2FF", ' opacity=".5"') + place('<path d="M-70,0 L-50,-200 L50,-200 L70,0Z" fill="#8D9BB0"' + stAttr() + '/><rect x="-40" y="-170" width="80" height="60" rx="8" fill="#5BE2FF"/>', sc.Ww * 1.3, 892, 0.8);
    var pods = g(sc.layers.near.g);
    var podEls = [];
    for (i = 0; i < 6; i++) { var pe = g(pods); pe.innerHTML = '<ellipse cx="0" cy="0" rx="46" ry="18" fill="#C9D6E2"' + stAttr(4) + '/><ellipse cx="-4" cy="-6" rx="22" ry="12" fill="#5BE2FF"/><circle cx="46" cy="0" r="6" fill="#FF5A8A"/>'; podEls.push(pe); }
    sc.anims.push(function (t) { for (var j = 0; j < podEls.length; j++) { var sp = 160 + j * 40, dir = j % 2 ? -1 : 1, px = X0 + ((t * sp * dir + j * 700 + 100000) % (X1 - X0)), py = 380 + j * 60 + Math.sin(t * 1.5 + j) * 14; podEls[j].setAttribute("transform", "translate(" + fx(px) + "," + fx(py) + ") scale(" + fx(dir) + ",1)"); } });
    var lines = "";
    for (i = 0; i < 30; i++) lines += '<path d="M' + fx(X0 + i * 200) + "," + fx(G - 30) + " L" + fx(X0 + i * 200 - 80) + "," + fx(G + 320) + '" stroke="#5BE2FF" stroke-width="3" opacity=".35"/>';
    sc.layers.ground.g.innerHTML = R(X0, G - 40, X1 - X0, 500, "#2A2250") + lines + R(X0, G - 40, X1 - X0, 8, "#5BE2FF", ' opacity=".8"');
    sc.layers.far.g.innerHTML += haze(sc, "far", 700, 220, "#A24A8C", 0.5);
    sc.layers.front.g.innerHTML = edgeProps(sc, SETPIECES.tower(), SETPIECES.crate(), 1.1);
    sc.isDark = true;
  };
  LOCATIONS["dying-sun"] = function (sc) {
    var X0 = sc.x0, X1 = sc.x1, G = sc.G;
    var sky = gradient(sc, "sky", [[0, "#2A0A0A"], [0.5, "#7A1E12"], [1, "#C9452A"]]);
    var sunG = gradient(sc, "sky", [[0, "#FFF0B0"], [0.3, "#FF9A3A"], [0.75, "#E0401A"], [1, "#A02A14"]], false, { cx: 0.5, cy: 0.5, r: 0.5 });
    sc.layers.sky.g.innerHTML = skyRect(sc, "sky", sky) + C(sc.Ww * 0.5, 520, 620, "#FF6A2A", ' opacity=".25"') + C(sc.Ww * 0.5, 520, 480, sunG);
    var flares = g(sc.layers.sky.g), flEls = [];
    for (var i = 0; i < 7; i++) flEls.push(svgEl("path", { fill: "none", stroke: "#FFB347", "stroke-width": 10, "stroke-linecap": "round", opacity: 0.7 }, flares));
    sc.anims.push(function (t) { for (var j = 0; j < flEls.length; j++) { var a = (j / 7) * PI * 2 + t * 0.15, r0 = 470, r1 = 520 + Math.abs(noise(t * 1.5 + j, 97 + j)) * 160; var cx = sc.Ww * 0.5, cy = 520; flEls[j].setAttribute("d", "M" + fx(cx + Math.cos(a) * r0) + "," + fx(cy + Math.sin(a) * r0) + " Q" + fx(cx + Math.cos(a + 0.2) * (r0 + r1) * 0.55) + "," + fx(cy + Math.sin(a + 0.2) * (r0 + r1) * 0.55) + " " + fx(cx + Math.cos(a + 0.35) * r1) + "," + fx(cy + Math.sin(a + 0.35) * r1)); } });
    sc.layers.far.g.innerHTML = mountains(X0, X1, 760, 200, 98, "#3A1410") + hills(X0, X1, 780, 30, 99, "#2A0E0A", 1300, 400);
    var cracks = "", r = V.makeRand(100);
    for (i = 0; i < 40; i++) { var x = X0 + r() * (X1 - X0), y = 840 + r() * 300; cracks += '<path d="' + roughLine(x, y, x + (r() - 0.5) * 200, y + (r() - 0.3) * 120, Math.round(x), 8) + '" fill="none" stroke="#FF6A2A" stroke-width="4" opacity=".8"/>'; }
    sc.layers.mid.g.innerHTML = hills(X0, X1, 820, 40, 101, "#4A1A12", 1300, 300) + place(SETPIECES.grave(), sc.Ww * 1.2, 860, 0.7);
    sc.layers.near.g.innerHTML = place(SETPIECES.boulder(), sc.Ww * -0.2, 900, 0.7) + place(SETPIECES.rock(), sc.Ww * 1.4, 900, 0.8);
    sc.layers.ground.g.innerHTML = hills(X0, X1, G - 40, 10, 102, "#2A0E0A", 1300, 200) + cracks + groundDetail(X0, X1, G - 20, G + 220, 103, "#4A1A12", "#FF6A2A", null, 40);
    sc.layers.front.g.innerHTML = edgeProps(sc, SETPIECES.boulder(), SETPIECES.grave(), 1.4);
    sc.weather("ash", { count: 30 });
    sc.isHot = true; sc.isDark = true;
  };
  LOCATIONS.cosmos = function (sc) {
    var X0 = sc.x0, X1 = sc.x1, G = sc.G;
    var sky = gradient(sc, "sky", [[0, "#05030F"], [0.6, "#0E0A2A"], [1, "#1C1440"]]);
    var neb = gradient(sc, "sky", [[0, "#6A3FB8"], [1, "#6A3FB8"]], false, { cx: 0.5, cy: 0.5, r: 0.5 });
    sc.layers.sky.g.innerHTML = skyRect(sc, "sky", sky) + El(sc.Ww * 0.3, 300, 500, 220, "#6A3FB8", ' opacity=".25"') + El(sc.Ww * 1.1, 200, 400, 180, "#2A8FC9", ' opacity=".2"') + stars(X0, X1, -400, 800, 160, 111) + C(sc.Ww * 0.8, 320, 140, "#E8A47A") + C(sc.Ww * 0.8, 320, 140, "none", ' stroke="#2A1A12" stroke-width="6"') + El(sc.Ww * 0.8, 320, 230, 40, "none", ' stroke="#F6DFA0" stroke-width="12" transform="rotate(-18 ' + fx(sc.Ww * 0.8) + ' 320)" opacity=".9"');
    void neb;
    sc.weather("stars", { count: 60 });
    sc.layers.far.g.innerHTML = hills(X0, X1, 760, 60, 112, "#2A2250", 1300, 500);
    sc.layers.mid.g.innerHTML = hills(X0, X1, 820, 40, 113, "#3A3068", 1300, 300);
    sc.layers.near.g.innerHTML = place(SETPIECES.boulder(), sc.Ww * 1.3, 900, 0.7) + place(SETPIECES.rock(), sc.Ww * -0.2, 900, 0.8);
    sc.layers.ground.g.innerHTML = hills(X0, X1, G - 40, 10, 114, "#4A4080", 1300, 200) + dabs(X0, X1, G - 20, G + 200, 50, "#2A2250", 115, 100, 14, 0.5) + groundDetail(X0, X1, G - 20, G + 220, 116, "#6A60A0", "#2A2250", null, 40);
    sc.layers.front.g.innerHTML = edgeProps(sc, SETPIECES.boulder(), SETPIECES.rock(), 1.4);
    sc.isDark = true;
  };
  LOCATIONS.forest = function (sc) {
    var X0 = sc.x0, X1 = sc.x1, G = sc.G;
    var sky = gradient(sc, "sky", [[0, "#5FA8D6"], [0.6, "#BFE0B0"], [1, "#E8EFC8"]]);
    sc.layers.sky.g.innerHTML = skyRect(sc, "sky", sky) + sunSvg(sc.Ww * 0.25, 220, 80, "#FFF4C8", true);
    var far = "";
    for (var i = -3; i < 12; i++) far += place(SETPIECES.tree(), sc.Ww * 0.05 + i * 260 + (i % 2) * 70, 720, 0.75);
    sc.layers.far.g.innerHTML = hills(X0, X1, 700, 40, 121, "#4E8A3A", 1300, 500) + far;
    var mid = "";
    for (i = -2; i < 8; i++) mid += place(SETPIECES.tree(), sc.Ww * 0.12 + i * 420 + (i % 3) * 60, 810, 1.0);
    sc.layers.mid.g.innerHTML = hills(X0, X1, 780, 30, 122, "#5B9A3C", 1300, 300) + mid;
    sc.layers.near.g.innerHTML = hills(X0, X1, 850, 20, 123, "#6DB24F", 1300, 220) + place(SETPIECES.bush(), sc.Ww * 1.2, 880, 0.7) + place(SETPIECES.mushroom(), sc.Ww * -0.2, 890, 0.6) + place(SETPIECES.log(), sc.Ww * 1.5, 890, 0.6);
    sc.layers.ground.g.innerHTML = hills(X0, X1, G - 40, 10, 124, "#7FB04A", 1300, 200) + dabs(X0, X1, G - 20, G + 180, 60, "#4E8A3A", 125, 110, 10, 0.3) + groundDetail(X0, X1, G - 20, G + 220, 126, "#8E867A", null, "#4E8A3A", 60);
    sc.layers.far.g.innerHTML += haze(sc, "far", 700, 200, "#E8EFC8", 0.5);
    sc.layers.front.g.innerHTML = tufts(X0, X1, G + 160, 24, 127, "#2F6B3A", 70) + place(SETPIECES.tree(), sc.Ww * -0.1, G + 300, 1.6);
    sc.weather("leaves", { count: 10 });
  };
  LOCATIONS.stage = function (sc, o) {
    var X0 = sc.x0, X1 = sc.x1, G = sc.G;
    var col = (o && o.color) || "#F3D9A6";
    sc.layers.sky.g.innerHTML = skyRect(sc, "sky", gradient(sc, "sky", [[0, shade(col, 0.2)], [1, shade(col, -0.12)]])) + dabs(X0, X1, -300, 900, 50, shade(col, -0.25), 131, 200, 60, 0.18);
    sc.layers.far.g.innerHTML = ""; sc.layers.mid.g.innerHTML = ""; sc.layers.near.g.innerHTML = "";
    sc.layers.ground.g.innerHTML = hills(X0, X1, G - 40, 10, 132, shade(col, -0.3), 1300, 200) + dabs(X0, X1, G - 20, G + 200, 50, shade(col, -0.45), 133, 120, 12, 0.25) + groundDetail(X0, X1, G - 20, G + 220, 134, shade(col, -0.4), shade(col, -0.5), null, 30);
    sc.layers.front.g.innerHTML = "";
  };
  var LOC_ALIASES = { "stone-age": "cave", "ice-age": "tundra", snow: "tundra", arctic: "tundra", grassland: "savanna", plains: "savanna", africa: "savanna", egypt: "desert", sahara: "desert", dunes: "desert", pyramids: "desert", river: "nile", riverbank: "nile", rome: "roman-forum", forum: "roman-forum", roman: "roman-forum", greece: "greek-agora", athens: "greek-agora", greek: "greek-agora", agora: "greek-agora", medieval: "medieval-village", village: "medieval-village", castle: "medieval-village", "middle-ages": "medieval-village", city: "modern-city", modern: "modern-city", street: "modern-city", today: "modern-city", future: "future-city", "sci-fi": "future-city", "far-future": "future-city", "red-giant": "dying-sun", "end-of-time": "dying-sun", apocalypse: "dying-sun", space: "cosmos", stars: "cosmos", universe: "cosmos", galaxy: "cosmos", woods: "forest", jungle: "forest", blank: "stage", plain: "stage", backdrop: "stage" };
  function locName(n) { n = str(n).toLowerCase().trim(); if (LOCATIONS[n]) return n; return LOC_ALIASES[n] || "savanna"; }
  S.LOCATIONS = LOCATIONS;
  S.locationNames = Object.keys(LOCATIONS);
  function drawLocation(sc, name, opts) {
    try { LOCATIONS[name](sc, opts || {}); } catch (e) { V.error("doodle-world location " + name + ": " + (e && e.message)); try { LOCATIONS.stage(sc, {}); } catch (e2) {} }
    return name;
  }

  // ───────────────────────── screen-space overlays: headlines, callouts, indicators, counters, captions ─────────────────────────
  function clampBox(card, x, y, W, H, mx, my) {
    try {
      var cw = card.offsetWidth, ch = card.offsetHeight;
      var px = clamp(x * W, cw / 2 + W * mx, Math.max(cw / 2 + W * mx, W - cw / 2 - W * mx));
      var py = clamp(y * H, ch / 2 + H * my, Math.max(ch / 2 + H * my, H - ch / 2 - H * my));
      card.style.left = fx(px) + "px"; card.style.top = fx(py) + "px";
      return { x: px, y: py, w: cw, h: ch };
    } catch (e) { return { x: x * W, y: y * H, w: 0, h: 0 }; }
  }
  var HCOL = { yellow: "#FFD400", white: "#FFFFFF", red: "#FF3B30", orange: "#FF8A1F", blue: "#5BE2FF", green: "#8BC34A" };
  /** Chunky thumbnail-style headline (caps, black outline). opts: { x, y, pos, color, size, until, rot, kicker, maxWidth, maxLines } */
  SP.headline = function (text, at, opts) {
    opts = opts || {};
    var sc = this, tl = V.timeline();
    at = clampT(at == null ? 0 : at);
    var card = el("div.dw-headline", { parent: this.overlay });
    var hs = clamp(Math.min(this.W, this.H) / Math.min(V.width, V.height), 0.5, 1);
    if (hs < 0.999) card.style.setProperty("--hsz", fx(hs));
    var size = opts.size || "lg";
    card.classList.add("dw-h-" + size);
    var col = HCOL[str(opts.color).toLowerCase()] || opts.color || "#FFD400";
    card.style.setProperty("--hc", col);
    if (opts.kicker) el("div.dw-kicker", { parent: card, text: plain(opts.kicker) });
    var tx = el("div.dw-htext", { parent: card });
    tx.appendChild(S.rich(text));
    var pos = opts.pos || "top";
    var x = num(opts.x, 0.5), y = opts.y != null ? num(opts.y, 0.2) : pos === "center" ? 0.45 : pos === "bottom" ? (this.portrait ? 0.8 : 0.82) : (this.portrait ? 0.17 : 0.16);
    card.style.maxWidth = num(opts.maxWidth, this.portrait ? 0.9 : this.square ? 0.86 : 0.78) * this.W + "px";
    V.fit(tx, { maxLines: num(opts.maxLines, 2), min: u(34) });
    clampBox(card, x, y, this.W, this.H, 0.03, 0.03);
    var rot = num(opts.rot, (S.hash(text) % 2 ? -1 : 1) * (1 + (S.hash(text) % 3)));
    tl.fromTo(card, { scale: 0, rotate: rot - 18, opacity: 0 }, { scale: 1, rotate: rot, opacity: 1 }, { at: at, dur: 0.45, ease: EASE.pop });
    if (opts.until != null && opts.until < V.duration - 0.2) tl.to(card, { scale: 0, rotate: rot + 12, opacity: 0 }, { at: clampT(opts.until), dur: 0.3, ease: "inBack" });
    card._at = at;
    return card;
  };
  /** Small label + hand-drawn arrow to a target (actor, {x,y} world, or {sx,sy} screen fractions). */
  SP.callout = function (text, target, at, opts) {
    opts = opts || {};
    var sc = this, W = this.W, H = this.H;
    at = clampT(at == null ? 0 : at);
    var until = opts.until != null ? num(opts.until, 1e9) : 1e9;
    var lab = el("div.dw-callout", { parent: this.overlay });
    if (opts.color) lab.style.setProperty("--cc", opts.color);
    var tx = el("div", { parent: lab }); tx.appendChild(S.rich(text));
    lab.style.maxWidth = (this.portrait ? 0.5 : 0.3) * W + "px";
    V.fit(tx, { maxLines: 2, min: u(20) });
    var side = opts.side || "auto";
    var arrow = svgEl("path", { fill: "none", stroke: opts.color || INK, "stroke-width": u(7), "stroke-linecap": "round", "stroke-linejoin": "round" }, this.osvg);
    var head = svgEl("path", { fill: "none", stroke: opts.color || INK, "stroke-width": u(7), "stroke-linecap": "round", "stroke-linejoin": "round" }, this.osvg);
    var seed = S.hash(text) % 100;
    var fixed = opts.x != null ? { x: num(opts.x, 0.5), y: num(opts.y, 0.3) } : null;
    lab.style.display = "none";
    this.onFrame(function (t) {
      var lt = t - at;
      if (lt < 0 || t > until + 0.3) { lab.style.display = "none"; arrow.style.display = "none"; head.style.display = "none"; return; }
      lab.style.display = ""; arrow.style.display = ""; head.style.display = "";
      var p = EASE.pop(clamp(lt / 0.35, 0, 1)) * (t > until ? 1 - sm((t - until) / 0.3) : 1);
      // target point in screen px
      var tp;
      if (target && target.anchor) { var an = target.anchor[opts.anchor || "head"] || target.anchor.head; tp = sc.toScreen(an.x, an.y); }
      else if (target && target.sx != null) tp = { x: target.sx * W, y: target.sy * H };
      else if (target && target.x != null) tp = sc.toScreen(target.x, target.y);
      else tp = { x: W / 2, y: H / 2 };
      var lw = lab.offsetWidth, lh = lab.offsetHeight;
      var lx, ly;
      if (fixed) { lx = fixed.x * W; ly = fixed.y * H; }
      else {
        var dir = side === "left" ? -1 : side === "right" ? 1 : tp.x > W * 0.5 ? -1 : 1;
        lx = tp.x + dir * (u(240) + lw / 2); ly = tp.y - u(170) - lh / 2;
      }
      lx = clamp(lx, lw / 2 + W * 0.03, W - lw / 2 - W * 0.03); ly = clamp(ly, lh / 2 + H * 0.04, H - lh / 2 - H * 0.04);
      lab.style.left = fx(lx - lw / 2) + "px"; lab.style.top = fx(ly - lh / 2) + "px";
      lab.style.transform = "scale(" + fx(p) + ") rotate(" + fx((1 - p) * -10 + (seed % 2 ? -2 : 2)) + "deg)";
      // arrow from the label edge toward the target, slightly curved, hand-drawn
      var ax = lx + clamp(tp.x - lx, -lw / 2, lw / 2) * 0.6, ay = ly + (tp.y > ly ? lh / 2 : -lh / 2);
      var ex = tp.x, ey = tp.y;
      var vx = ex - ax, vy = ey - ay, len = Math.sqrt(vx * vx + vy * vy) || 1;
      var gap = u(26);
      ex -= (vx / len) * gap; ey -= (vy / len) * gap;
      var mx = (ax + ex) / 2 - vy / len * u(40) * (seed % 2 ? -1 : 1), my = (ay + ey) / 2 + vx / len * u(40) * (seed % 2 ? -1 : 1);
      var draw = sm(clamp((lt - 0.1) / 0.5, 0, 1));
      var qx = lerp(ax, mx, draw), qy = lerp(ay, my, draw), fxp = lerp(ax, ex, draw), fyp = lerp(ay, ey, draw);
      // de Casteljau truncation of the quad curve
      var bx = lerp(lerp(ax, mx, draw), lerp(mx, ex, draw), draw), by = lerp(lerp(ay, my, draw), lerp(my, ey, draw), draw);
      arrow.setAttribute("d", "M" + fx(ax) + "," + fx(ay) + " Q" + fx(qx) + "," + fx(qy) + " " + fx(bx) + "," + fx(by));
      arrow.setAttribute("opacity", fx(p));
      void fxp; void fyp;
      if (draw > 0.9) {
        var tx2 = lerp(mx, ex, draw), ty2 = lerp(my, ey, draw);
        var dx2 = bx - tx2, dy2 = by - ty2, dl = Math.sqrt(dx2 * dx2 + dy2 * dy2) || 1; dx2 /= dl; dy2 /= dl;
        var hs = u(26);
        head.setAttribute("d", "M" + fx(bx - dx2 * hs - dy2 * hs * 0.7) + "," + fx(by - dy2 * hs + dx2 * hs * 0.7) + " L" + fx(bx) + "," + fx(by) + " L" + fx(bx - dx2 * hs + dy2 * hs * 0.7) + "," + fx(by - dy2 * hs - dx2 * hs * 0.7));
        head.setAttribute("opacity", fx(p));
      } else head.setAttribute("opacity", 0);
    });
    return lab;
  };
  /** Indicators: thermometer (hot|cold), sun, snowflake, steam, clock. opts: { x, y, level, label, until, size } */
  SP.indicator = function (kind, at, opts) {
    opts = opts || {};
    var sc = this, W = this.W, H = this.H;
    kind = str(kind || "hot").toLowerCase();
    at = clampT(at == null ? 0 : at);
    var until = opts.until != null ? num(opts.until, 1e9) : 1e9;
    var box = el("div.dw-indicator", { parent: this.overlay });
    var size = u(num(opts.size, this.portrait ? 200 : 230));
    var x = num(opts.x, this.portrait ? 0.84 : 0.9), y = num(opts.y, this.portrait ? 0.3 : 0.34);
    var svg = svgEl("svg", { viewBox: "-100 -140 200 280", width: size, height: size * 1.4 });
    box.appendChild(svg);
    var hot = kind === "hot" || kind === "thermometer-hot" || kind === "thermometer";
    var cold = kind === "cold" || kind === "thermometer-cold";
    var frame = null;
    if (hot || cold) {
      var col = hot ? "#FF3B30" : "#4FB0F0";
      svg.innerHTML = '<rect x="-28" y="-120" width="56" height="200" rx="28" fill="#FFFFFF"' + stAttr(7) + '/><circle cx="0" cy="92" r="42" fill="#FFFFFF"' + stAttr(7) + '/><path d="M-10,-100 L10,-100 M-10,-70 L14,-70 M-10,-40 L10,-40 M-10,-10 L14,-10 M-10,20 L10,20 M-10,50 L14,50" stroke="' + INK + '" stroke-width="4" stroke-linecap="round"/>';
      var merc = svgEl("rect", { x: -13, y: 60, width: 26, height: 20, rx: 13, fill: col }, svg);
      var bulb = svgEl("circle", { cx: 0, cy: 92, r: 30, fill: col }, svg);
      var txt = svgEl("text", { x: 0, y: -150, "text-anchor": "middle", "font-family": FONT_HEAD, "font-size": 44, fill: col, stroke: INK, "stroke-width": 5, "paint-order": "stroke fill" }, svg);
      txt.textContent = opts.label != null ? str(opts.label) : hot ? "HOT" : "COLD";
      var level = clamp(num(opts.level, hot ? 0.95 : 0.1), 0, 1);
      frame = function (t, lt, p) {
        var lv = (hot ? 0.1 + 0.85 * sm(clamp(lt / 1.4, 0, 1)) * level : Math.max(0.03, 0.9 - 0.85 * sm(clamp(lt / 1.4, 0, 1)) * (1 - level)));
        var top = 70 - lv * 180;
        merc.setAttribute("y", fx(top)); merc.setAttribute("height", fx(80 - top + 20));
        var jit = hot && lt > 1.4 ? noise(t * 25, 61) * 2 * level : cold && lt > 1.2 ? Math.sin(t * 50) * 1.5 : 0;
        svg.style.transform = "rotate(" + fx(jit) + "deg)";
        void bulb;
      };
    } else if (kind === "sun") {
      svg.setAttribute("viewBox", "-140 -140 280 280");
      var rays = svgEl("g", null, svg), d = "";
      for (var i = 0; i < 12; i++) { var a = (i / 12) * PI * 2; d += "M" + fx(Math.cos(a) * 70) + "," + fx(Math.sin(a) * 70) + " L" + fx(Math.cos(a) * (100 + (i % 2) * 16)) + "," + fx(Math.sin(a) * (100 + (i % 2) * 16)) + " "; }
      svgEl("path", { d: d, stroke: "#FF8A1F", "stroke-width": 10, "stroke-linecap": "round" }, rays);
      svgEl("circle", { cx: 0, cy: 0, r: 56, fill: "#FFD400", stroke: INK, "stroke-width": 7 }, svg);
      svgEl("path", { d: "M-22,-6 C-18,-14 -10,-14 -6,-6 M6,-6 C10,-14 18,-14 22,-6 M-18,14 C-8,26 8,26 18,14", fill: "none", stroke: INK, "stroke-width": 5, "stroke-linecap": "round" }, svg);
      var waves = [svgEl("path", { fill: "none", stroke: "#FF8A1F", "stroke-width": 6, "stroke-linecap": "round", opacity: 0.8 }, svg), svgEl("path", { fill: "none", stroke: "#FF8A1F", "stroke-width": 6, "stroke-linecap": "round", opacity: 0.8 }, svg)];
      frame = function (t, lt) {
        rays.setAttribute("transform", "rotate(" + fx(t * 20) + ") scale(" + fx(1 + Math.sin(t * 3) * 0.06) + ")");
        for (var j = 0; j < 2; j++) { var ph = ((t * 0.8 + j * 0.5) % 1), yy = 130 - ph * 60, xx = -40 + j * 80; waves[j].setAttribute("d", "M" + xx + "," + fx(yy + 30) + " q8,-10 0,-20 q-8,-10 0,-20 q8,-10 0,-20"); waves[j].setAttribute("opacity", fx((1 - ph) * 0.8)); }
      };
    } else if (kind === "snowflake" || kind === "snow") {
      svg.setAttribute("viewBox", "-140 -140 280 280");
      var fl = svgEl("g", null, svg), d2 = "";
      for (i = 0; i < 6; i++) { var a2 = (i / 6) * PI * 2, cx1 = Math.cos(a2), sy1 = Math.sin(a2); d2 += "M0,0 L" + fx(cx1 * 90) + "," + fx(sy1 * 90) + " M" + fx(cx1 * 55) + "," + fx(sy1 * 55) + " L" + fx(Math.cos(a2 + 0.5) * 78) + "," + fx(Math.sin(a2 + 0.5) * 78) + " M" + fx(cx1 * 55) + "," + fx(sy1 * 55) + " L" + fx(Math.cos(a2 - 0.5) * 78) + "," + fx(Math.sin(a2 - 0.5) * 78) + " "; }
      svgEl("path", { d: d2, stroke: INK, "stroke-width": 13, "stroke-linecap": "round" }, fl);
      svgEl("path", { d: d2, stroke: "#9FD8F0", "stroke-width": 7, "stroke-linecap": "round" }, fl);
      frame = function (t) { fl.setAttribute("transform", "rotate(" + fx(t * 25) + ")"); };
    } else if (kind === "steam") {
      svg.setAttribute("viewBox", "-100 -160 200 200");
      var ws = [];
      for (i = 0; i < 3; i++) ws.push(svgEl("path", { fill: "none", stroke: "#FFFFFF", "stroke-width": 9, "stroke-linecap": "round" }, svg));
      frame = function (t) { for (var j = 0; j < 3; j++) { var ph = ((t * 0.7 + j * 0.33) % 1), yy = 20 - ph * 150, xx = -50 + j * 50; ws[j].setAttribute("d", "M" + xx + "," + fx(yy + 40) + " q14,-14 0,-28 q-14,-14 0,-28 q14,-14 0,-28"); ws[j].setAttribute("opacity", fx((1 - ph) * 0.9)); } };
    } else { // clock
      svg.setAttribute("viewBox", "-120 -120 240 240");
      svg.innerHTML = '<circle cx="0" cy="0" r="100" fill="#FFFFFF"' + stAttr(8) + '/><path d="M0,-86 L0,-72 M86,0 L72,0 M0,86 L0,72 M-86,0 L-72,0" stroke="' + INK + '" stroke-width="6" stroke-linecap="round"/>';
      var hh = svgEl("path", { d: "M0,0 L0,-50", stroke: INK, "stroke-width": 10, "stroke-linecap": "round" }, svg);
      var mh = svgEl("path", { d: "M0,0 L0,-74", stroke: "#FF3B30", "stroke-width": 7, "stroke-linecap": "round" }, svg);
      var spd = num(opts.speed, 1);
      frame = function (t) { mh.setAttribute("transform", "rotate(" + fx(t * 360 * spd) + ")"); hh.setAttribute("transform", "rotate(" + fx(t * 30 * spd) + ")"); };
    }
    if (opts.label != null && !(hot || cold)) { var cap = el("div.dw-indlabel", { parent: box, text: str(opts.label) }); }
    box.style.display = "none";
    this.onFrame(function (t) {
      var lt = t - at;
      if (lt < 0 || t > until + 0.3) { box.style.display = "none"; return; }
      box.style.display = "";
      var p = EASE.pop(clamp(lt / 0.4, 0, 1)) * (t > until ? 1 - sm((t - until) / 0.3) : 1);
      var bw = box.offsetWidth, bh = box.offsetHeight;
      var px = clamp(x * W, bw / 2 + W * 0.03, W - bw / 2 - W * 0.03), py = clamp(y * H, bh / 2 + H * 0.04, H - bh / 2 - H * 0.04);
      box.style.left = fx(px - bw / 2) + "px"; box.style.top = fx(py - bh / 2) + "px";
      box.style.transform = "scale(" + fx(p) + ")";
      if (frame) frame(t, lt, p);
    });
    return box;
  };
  function fmtYear(v, fmt) {
    v = Math.round(v);
    if (fmt === "bc") return (v < 0 ? V.format(-v, 0) + " BC" : v === 0 ? "1 AD" : V.format(v, 0) + " AD");
    if (fmt === "ago") return V.format(Math.abs(v), 0) + " YEARS AGO";
    if (fmt === "plain") return V.format(v, 0);
    return V.format(v, 0);
  }
  /** Big "YEAR 5,000,000,000" counter. opts: { from, to, at, dur, x, y, label="YEAR", format: "plain"|"bc"|"ago", hold, until, log } */
  SP.yearCounter = function (opts) {
    opts = opts || {};
    var sc = this, W = this.W, H = this.H;
    var from = num(opts.from, 0), to = num(opts.to, 1000000), at = clampT(opts.at == null ? 0.3 : opts.at), dur = Math.max(0.2, num(opts.dur, Math.max(2, D() * 0.6)));
    var until = opts.until != null ? num(opts.until, 1e9) : 1e9;
    var fmt = str(opts.format || "plain").toLowerCase();
    var box = el("div.dw-year", { parent: this.overlay });
    if (opts.label !== "" && fmt !== "ago") el("div.dw-ylabel", { parent: box, text: str(opts.label == null ? "YEAR" : opts.label) });
    var numEl = el("div.dw-ynum", { parent: box, text: fmtYear(from, fmt) });
    var x = num(opts.x, 0.5), y = num(opts.y, this.portrait ? 0.14 : 0.14);
    box.style.maxWidth = (this.portrait ? 0.92 : 0.8) * W + "px";
    var useLog = opts.log != null ? !!opts.log : Math.abs(to) > Math.abs(from) * 50 + 1000;
    var stops = arr(opts.stops).map(function (s) { return { t: clampT(num(s.at, 0)), v: num(s.value, to) }; });
    ord(stops);
    box.style.display = "none";
    var lastTxt = "";
    this.onFrame(function (t) {
      if (t < at - 0.3 || t > until + 0.3) { box.style.display = "none"; return; }
      box.style.display = "";
      var p = EASE.pop(clamp((t - (at - 0.3)) / 0.4, 0, 1)) * (t > until ? 1 - sm((t - until) / 0.3) : 1);
      var v;
      if (stops.length) {
        v = from; var prevT = at, prevV = from;
        for (var i = 0; i < stops.length; i++) { var s = stops[i]; if (t >= s.t) { prevT = s.t; prevV = s.v; v = s.v; } else { var q = sm(clamp((t - prevT) / Math.max(0.6, Math.min(s.t - prevT, 1.4)), 0, 1)); v = lerp(prevV, s.v, q); break; } }
      } else {
        var pr = clamp((t - at) / dur, 0, 1);
        var e = V.ease.inOutSine(pr);
        v = useLog && from >= 0 && to > 0 ? Math.exp(lerp(Math.log(Math.max(1, from)), Math.log(to), e)) : lerp(from, to, e);
        if (useLog && pr >= 1) v = to;
      }
      var txt = fmtYear(v, fmt);
      if (txt !== lastTxt) { numEl.textContent = txt; lastTxt = txt; }
      var bw = box.offsetWidth, bh = box.offsetHeight;
      var px = clamp(x * W, bw / 2 + W * 0.03, W - bw / 2 - W * 0.03), py = clamp(y * H, bh / 2 + H * 0.04, H - bh / 2 - H * 0.04);
      box.style.left = fx(px - bw / 2) + "px"; box.style.top = fx(py - bh / 2) + "px";
      var moving = stops.length ? false : t > at && t < at + dur;
      box.style.transform = "scale(" + fx(p * (moving ? 1 + Math.abs(noise(t * 20, 71)) * 0.02 : 1)) + ") rotate(" + fx((1 - p) * -8) + "deg)";
    });
    return box;
  };
  /** Lower-third kinetic captions from V.words (fallback / custom). */
  SP.captions = function (opts) {
    opts = opts || {};
    var sc = this;
    var toks = words().length ? words().map(function (w) { return { w: w.word, s: w.start, e: w.end }; }) : null;
    if (!toks) {
      var txt = plain(opts.text || V.narration || "").split(/\s+/).filter(Boolean).slice(0, 400);
      var Dd = V.duration, n = Math.max(1, txt.length);
      toks = txt.map(function (w, i) { return { w: w, s: 0.3 + ((Dd - 0.6) * i) / n, e: 0.3 + ((Dd - 0.6) * (i + 0.9)) / n }; });
    }
    if (!toks.length) return null;
    var per = opts.chunk || (sc.portrait ? 4 : 6), chunks = [];
    for (var i = 0; i < toks.length; i += per) {
      var end = Math.min(toks.length, i + per);
      for (var q = i; q < end; q++) if (/[.!?,;:]$/.test(toks[q].w) && q > i) { end = q + 1; break; }
      chunks.push(toks.slice(i, end));
      i = end - per;
    }
    var bar = el("div.dw-caps", { parent: sc.overlay });
    if (opts.top) bar.classList.add("dw-caps-top");
    var line = el("div.dw-capline", { parent: bar });
    var built = chunks.map(function (ch) {
      var d = el("div.dw-capchunk", { parent: line });
      var spans = ch.map(function (tk) { var s = el("span", { parent: d, text: tk.w + " " }); return { el: s, s: tk.s }; });
      V.fit(d, { maxLines: 2, min: u(26) });
      d.style.display = "none";
      return { el: d, s: ch[0].s, e: ch[ch.length - 1].e, spans: spans };
    });
    var cur = -1;
    sc.onFrame(function (t) {
      var idx = -1;
      for (var k = 0; k < built.length; k++) if (t >= built[k].s - 0.1) idx = k;
      if (idx >= 0 && t > built[idx].e + 1.2 && idx === built.length - 1) idx = -1;
      if (idx !== cur) { built.forEach(function (b, k) { b.el.style.display = k === idx ? "" : "none"; }); cur = idx; }
      if (idx >= 0) {
        var b = built[idx], p = EASE.pop(clamp((t - b.s + 0.1) / 0.3, 0, 1));
        b.el.style.transform = "translateY(" + fx((1 - p) * u(30)) + "px) scale(" + fx(0.9 + 0.1 * p) + ")";
        b.el.style.opacity = fx(clamp(p * 2, 0, 1));
        for (var q2 = 0; q2 < b.spans.length; q2++) {
          var on = t >= b.spans[q2].s - 0.04, nx = q2 + 1 < b.spans.length ? b.spans[q2 + 1].s : b.e;
          b.spans[q2].el.className = on ? (t < nx ? "dw-now" : "dw-said") : "";
        }
      }
    });
    return bar;
  };

  // ───────────────────────── doodled diagrams (screen-space paper card) ─────────────────────────
  var DIAGRAMS = {
    "house-cooling": function (d) { // thick-walled house with a wind catcher tower; air flows in and out
      return [
        { d: "M10,86 L10,40 L30,40 L30,14 L46,14 L46,40 L60,26 L90,26 L90,86Z", w: 2 },
        { d: "M22,86 L22,52 L40,52 L40,86", w: 1.6 }, { d: "M66,86 L66,60 L82,60 L82,86", w: 1.6 },
        { d: "M30,22 L46,22 M30,30 L46,30", w: 1.2 }, { d: "M6,88 L94,88", w: 2 },
        { d: "M64,44 C66,38 70,38 72,44 C74,50 70,52 68,48", w: 1.2 },
      ];
    },
    pyramid: function () { return [{ d: "M6,88 L50,10 L94,88Z", w: 2 }, { d: "M20,88 L50,36 L80,88", w: 1.2 }, { d: "M50,88 L50,56 M50,56 L72,56 M50,70 L30,70", w: 1.6 }, { d: "M60,52 L80,52 L80,60 L60,60Z", w: 1.4 }, { d: "M4,90 L96,90", w: 2 }]; },
    hut: function () { return [{ d: "M14,86 L14,50 L50,16 L86,50 L86,86Z", w: 2 }, { d: "M40,86 L40,62 C40,54 60,54 60,62 L60,86", w: 1.6 }, { d: "M26,50 L50,30 L74,50", w: 1.2 }, { d: "M50,16 L50,6", w: 1.6 }, { d: "M6,88 L94,88", w: 2 }]; },
    well: function () { return [{ d: "M30,40 L30,88 M70,40 L70,88", w: 2 }, { d: "M24,40 L76,40 M26,24 L74,24 M30,24 L30,40 M70,24 L70,40", w: 1.6 }, { d: "M50,24 L50,60", w: 1.2 }, { d: "M44,60 L56,60 L54,70 L46,70Z", w: 1.4 }, { d: "M30,78 C40,74 60,74 70,78", w: 1.2 }, { d: "M6,88 L94,88", w: 2 }]; },
    boat: function () { return [{ d: "M8,60 C20,76 80,76 92,60 L84,50 L16,50Z", w: 2 }, { d: "M50,50 L50,12", w: 1.8 }, { d: "M50,14 L80,44 L50,44Z", w: 1.6 }, { d: "M4,70 q10,-6 20,0 q10,6 20,0 q10,-6 20,0 q10,6 20,0 q10,-6 12,0", w: 1.4 }]; },
    firepit: function () { return [{ d: "M20,80 C30,70 70,70 80,80 C70,88 30,88 20,80Z", w: 2 }, { d: "M30,78 L40,60 L46,70 L50,46 L56,68 L62,58 L70,78", w: 1.8 }, { d: "M46,40 C48,34 52,34 54,40 M40,30 C42,24 46,24 48,30", w: 1.2 }, { d: "M6,88 L94,88", w: 2 }]; },
    body: function () { return [{ d: "M50,10 C58,10 62,16 62,22 C62,30 56,34 50,34 C44,34 38,30 38,22 C38,16 42,10 50,10Z", w: 2 }, { d: "M40,36 L34,60 L36,88 M60,36 L66,60 L64,88", w: 1.8 }, { d: "M40,36 L60,36 M38,42 L24,64 M62,42 L76,64", w: 1.8 }, { d: "M36,60 L64,60", w: 1.2 }]; },
    tree: function () { return [{ d: "M46,88 L46,52 L54,52 L54,88", w: 2 }, { d: "M50,52 C26,52 20,24 42,16 C50,4 70,8 72,22 C86,28 80,52 50,52Z", w: 2 }, { d: "M46,88 C36,90 30,94 24,96 M54,88 C64,90 70,94 76,96", w: 1.4 }, { d: "M6,88 L94,88", w: 2 }]; },
    generic: function () { return [{ d: "M12,20 L88,20 L88,80 L12,80Z", w: 2 }]; },
  };
  S.diagramKinds = Object.keys(DIAGRAMS);
  /** opts: { x, y, w, h (0-1 of frame), at, title, labels:[{text, x, y, word?, at?}], arrows:[{from:[x,y], to:[x,y], label?, color?, at?}], flow: true } */
  SP.diagram = function (kind, opts) {
    opts = opts || {};
    var sc = this, W = this.W, H = this.H;
    var spec = DIAGRAMS[str(kind).toLowerCase()] || DIAGRAMS.generic;
    var at = clampT(opts.at == null ? 0.2 : opts.at);
    var bw = num(opts.w, this.portrait ? 0.86 : this.square ? 0.7 : 0.5) * W, bh = num(opts.h, this.portrait ? 0.42 : this.square ? 0.56 : 0.66) * H;
    var cx = num(opts.x, this.portrait ? 0.5 : this.square ? 0.5 : 0.62) * W, cy = num(opts.y, this.portrait ? 0.42 : 0.5) * H;
    var card = el("div.dw-paper", { parent: this.overlay });
    card.style.left = fx(cx - bw / 2) + "px"; card.style.top = fx(cy - bh / 2) + "px";
    card.style.width = fx(bw) + "px"; card.style.height = fx(bh) + "px";
    var pu = paperUrl();
    if (pu) card.style.backgroundImage = "url(" + pu + ")";
    if (opts.title) { var ttl = el("div.dw-ptitle", { parent: card }); ttl.appendChild(S.rich(opts.title)); V.fit(ttl, { maxLines: 1, min: u(22) }); }
    var pad = u(28), top = opts.title ? u(70) : pad;
    var dw = bw - pad * 2, dh = bh - top - pad;
    var svg = svgEl("svg", { viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid meet", style: "position:absolute;left:" + fx(pad) + "px;top:" + fx(top) + "px;width:" + fx(dw) + "px;height:" + fx(dh) + "px;overflow:visible" });
    card.appendChild(svg);
    // actual drawn box in px (meet-scaled)
    var sq = Math.min(dw, dh), ox = pad + (dw - sq) / 2, oy = top + (dh - sq) / 2;
    var strokes = spec(opts).map(function (s, i) {
      var p = svgEl("path", { d: s.d, fill: "none", stroke: INK, "stroke-width": s.w, "stroke-linecap": "round", "stroke-linejoin": "round", "vector-effect": "non-scaling-stroke" }, svg);
      p.setAttribute("stroke-width", s.w * (sq / 100) * 0.55);
      p.removeAttribute("vector-effect");
      var len = 0; try { len = p.getTotalLength(); } catch (e) { len = 300; }
      return { el: p, len: len, i: i };
    });
    var tl = V.timeline();
    tl.fromTo(card, { scale: 0.7, opacity: 0, rotate: -6 }, { scale: 1, opacity: 1, rotate: num(opts.rot, -1.5) }, { at: at, dur: 0.5, ease: EASE.pop });
    var drawDur = 0.9, perStroke = drawDur / Math.max(1, strokes.length);
    var arrows = arr(opts.arrows).slice(0, 8).map(function (a, i) {
      var col = a.color || "#E04E6B";
      var pth = svgEl("path", { fill: "none", stroke: col, "stroke-width": 1.4 * (sq / 100), "stroke-linecap": "round", "stroke-linejoin": "round" }, svg);
      var hd = svgEl("path", { fill: "none", stroke: col, "stroke-width": 1.4 * (sq / 100), "stroke-linecap": "round", "stroke-linejoin": "round" }, svg);
      var dots = [];
      if (opts.flow !== false) for (var k = 0; k < 3; k++) dots.push(svgEl("circle", { r: 1.6, fill: col }, svg));
      var f = arr(a.from), tt = arr(a.to);
      var ax = num(f[0], 0.2) * 100, ay = num(f[1], 0.5) * 100, ex = num(tt[0], 0.8) * 100, ey = num(tt[1], 0.5) * 100;
      var mx = (ax + ex) / 2 - (ey - ay) * 0.25, my = (ay + ey) / 2 + (ex - ax) * 0.25;
      if (a.curve != null) { mx = (ax + ex) / 2 - (ey - ay) * num(a.curve, 0.25); my = (ay + ey) / 2 + (ex - ax) * num(a.curve, 0.25); }
      var t0 = a.at != null ? clampT(a.at) : a.word ? syncAt(a.word, 0, at + drawDur + 0.5 + i * 0.6, 0.1) : at + drawDur + 0.4 + i * 0.6;
      var lab = null;
      if (a.label) { lab = el("div.dw-dlabel", { parent: card }); lab.style.setProperty("--cc", col); lab.appendChild(S.rich(a.label)); V.fit(lab, { maxLines: 1, min: u(16) }); lab.style.left = fx(ox + (mx / 100) * sq) + "px"; lab.style.top = fx(oy + (my / 100) * sq) + "px"; }
      return { p: pth, h: hd, dots: dots, ax: ax, ay: ay, mx: mx, my: my, ex: ex, ey: ey, t0: t0, lab: lab };
    });
    var labels = arr(opts.labels).slice(0, 8).map(function (l, i) {
      var lab = el("div.dw-dlabel.dw-dlabel-plain", { parent: card });
      lab.appendChild(S.rich(l.text || ""));
      V.fit(lab, { maxLines: 2, min: u(16) });
      lab.style.left = fx(ox + num(l.x, 0.5) * sq) + "px"; lab.style.top = fx(oy + num(l.y, 0.5) * sq) + "px";
      var t0 = l.at != null ? clampT(l.at) : l.word ? syncAt(l.word, 0, at + drawDur + 0.3 + i * 0.5, 0.1) : at + drawDur + 0.3 + i * 0.5;
      return { el: lab, t0: t0 };
    });
    this.onFrame(function (t) {
      var lt = t - at;
      for (var i = 0; i < strokes.length; i++) {
        var s = strokes[i], p = clamp((lt - i * perStroke) / (perStroke * 1.6), 0, 1);
        s.el.setAttribute("stroke-dasharray", s.len + " " + s.len);
        s.el.setAttribute("stroke-dashoffset", fx(s.len * (1 - sm(p))));
      }
      arrows.forEach(function (a) {
        var q = clamp((t - a.t0) / 0.6, 0, 1), e = sm(q);
        var bx = lerp(lerp(a.ax, a.mx, e), lerp(a.mx, a.ex, e), e), by = lerp(lerp(a.ay, a.my, e), lerp(a.my, a.ey, e), e);
        var qx = lerp(a.ax, a.mx, e), qy = lerp(a.ay, a.my, e);
        a.p.setAttribute("d", "M" + fx(a.ax) + "," + fx(a.ay) + " Q" + fx(qx) + "," + fx(qy) + " " + fx(bx) + "," + fx(by));
        a.p.setAttribute("opacity", q > 0 ? 1 : 0);
        if (q > 0.95) {
          var tx2 = lerp(a.mx, a.ex, e), ty2 = lerp(a.my, a.ey, e), dx = bx - tx2, dy = by - ty2, dl = Math.sqrt(dx * dx + dy * dy) || 1; dx /= dl; dy /= dl;
          a.h.setAttribute("d", "M" + fx(bx - dx * 6 - dy * 4) + "," + fx(by - dy * 6 + dx * 4) + " L" + fx(bx) + "," + fx(by) + " L" + fx(bx - dx * 6 + dy * 4) + "," + fx(by - dy * 6 - dx * 4));
          a.h.setAttribute("opacity", 1);
        } else a.h.setAttribute("opacity", 0);
        for (var k = 0; k < a.dots.length; k++) {
          var ph = ((t * 0.5 + k / a.dots.length) % 1), on = q >= 1;
          var px2 = lerp(lerp(a.ax, a.mx, ph), lerp(a.mx, a.ex, ph), ph), py2 = lerp(lerp(a.ay, a.my, ph), lerp(a.my, a.ey, ph), ph);
          a.dots[k].setAttribute("cx", fx(px2)); a.dots[k].setAttribute("cy", fx(py2)); a.dots[k].setAttribute("opacity", on ? fx(Math.sin(ph * PI)) : 0);
        }
        if (a.lab) { var lp = EASE.pop(clamp((t - a.t0 - 0.3) / 0.35, 0, 1)); a.lab.style.transform = "translate(-50%,-50%) scale(" + fx(lp) + ")"; a.lab.style.opacity = lp > 0 ? 1 : 0; }
      });
      labels.forEach(function (l) { var lp = EASE.pop(clamp((t - l.t0) / 0.35, 0, 1)); l.el.style.transform = "translate(-50%,-50%) scale(" + fx(lp) + ") rotate(-1deg)"; l.el.style.opacity = lp > 0 ? 1 : 0; });
    });
    return card;
  };

  // ───────────────────────── high-level helpers ─────────────────────────
  /** Make the actor lip-sync the narration between from/to (phrases rest in pauses). */
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
      if (b - a > 0.3) { var t = a, k = 0; while (t < b - 0.2) { var e2 = Math.min(b, t + 1.6 + ((k * 7) % 5) * 0.25); actor.say(t, e2); t = e2 + 0.28; k++; } }
    }
    return actor;
  }
  S.narrate = narrate;
  function ensureScene(loc, opts) { if (!current) new Scene(V.root(), Object.assign({ location: loc || "savanna" }, opts || {})); return current; }
  /** Dialogue: [{ speaker: index|name, text, expression?, pose?, mark? }] → timing windows; bubbles + listener reactions. */
  function dialogue(sc, actors, lines, opts) {
    opts = opts || {};
    var win = lineWindows(lines.map(function (l) { return str(l.text); }), opts);
    lines.forEach(function (l, i) {
      var who = l.speaker, a = null;
      if (typeof who === "number") a = actors[clamp(Math.round(who), 0, actors.length - 1)];
      else if (who && who.say) a = who;
      else if (who != null) { var nm = castId(who, 0); for (var q = 0; q < actors.length; q++) if (actors[q].id === nm) a = actors[q]; }
      if (!a) a = actors[i % actors.length];
      var w = win[i], nx = win[i + 1] ? win[i + 1].start : 1e9;
      sc.bubble(a, l.text, w.start, w.end, { kind: l.kind, hold: clamp(nx - w.end - 0.45, 0, 0.3) });
      if (l.expression) a.expression(l.expression, w.start - 0.1);
      var sitting = a._sitting;
      a.pose(l.pose || (sitting ? "explain" : i % 2 ? "explain" : "talk"), w.start - 0.15, 0.4);
      a.pose(sitting ? "sit" : "idle", w.end + 0.1, 0.6);
      if (l.mark) a.mark(l.mark, w.start + 0.1, Math.min(2, w.end - w.start + 0.4));
      actors.forEach(function (o) {
        if (o === a) return;
        o.lookAt(a, w.start - 0.2);
        if (!o._sitting && i % 2 === 0 && w.end - w.start > 1.2) o.pose("nod", w.start + 0.4, 0.3).pose("idle", w.start + 1.6, 0.4);
        if (l.reaction) o.expression(l.reaction, w.start + 0.3);
      });
      a.lookAt(actors.length > 1 ? actors[(actors.indexOf(a) + 1) % actors.length] : "camera", w.start - 0.2);
    });
    return win;
  }
  S.dialogue = function (actors, lines, opts) { return dialogue(ensureScene(), actors, lines, opts); };
  /** Screen-space impact burst (fractions of the frame). */
  SP.sburst = function (sx, sy, at, opts) {
    opts = opts || {};
    var sc = this, W = this.W, H = this.H, n = clamp(Math.round(num(opts.count, 16)), 4, 40), r = u(num(opts.r, 220));
    var gb = g(this.osvg, { class: "dw-sburst" }), lines = [];
    for (var i = 0; i < n; i++) lines.push(svgEl("path", { stroke: opts.color || INK, "stroke-width": u(num(opts.width, 9)), "stroke-linecap": "round" }, gb));
    at = clampT(at);
    var seed = Math.round(sx * 100 + sy * 300);
    this.onFrame(function (t) {
      var lt = t - at;
      if (lt < 0 || lt > 0.7) { gb.style.display = "none"; return; }
      gb.style.display = "";
      var p = lt / 0.7, grow = EASE.pop(clamp(p * 2, 0, 1)), fade = 1 - sm((p - 0.5) * 2);
      for (var j = 0; j < n; j++) {
        var a = (j / n) * PI * 2 + hash01(seed + j) * 0.3, r0 = r * (0.5 + hash01(seed + j * 3) * 0.3) * grow, r1 = r * (0.95 + hash01(seed + j * 5) * 0.4) * grow;
        lines[j].setAttribute("d", "M" + fx(sx * W + Math.cos(a) * r0) + "," + fx(sy * H + Math.sin(a) * r0) + " L" + fx(sx * W + Math.cos(a) * r1) + "," + fx(sy * H + Math.sin(a) * r1));
        lines[j].setAttribute("opacity", fx(fade));
      }
    });
    return gb;
  };
  var ACTIVITY = { hunt: { pose: "point", prop: "spear" }, hunting: { pose: "point", prop: "spear" }, fish: { pose: "sit", prop: "stick" }, fishing: { pose: "sit", prop: "stick" }, cook: { pose: "stir", prop: "stick" }, cooking: { pose: "stir", prop: "stick" }, farm: { pose: "dig", prop: "stick" }, farming: { pose: "dig", prop: "stick" }, build: { pose: "work", prop: "hammer" }, building: { pose: "work", prop: "hammer" }, chop: { pose: "work", prop: "axe" }, write: { pose: "hold", prop: "scroll" }, read: { pose: "hold", prop: "book" }, scroll: { pose: "hold", prop: "phone" }, phone: { pose: "hold", prop: "phone" }, text: { pose: "hold", prop: "phone" }, type: { pose: "sit", prop: "laptop" }, drink: { pose: "eat", prop: "cup" }, trade: { pose: "present", prop: "coins" }, guard: { pose: "hands-hips", prop: "spear" }, fight: { pose: "point", prop: "sword" }, pray: { pose: "kneel" }, rest: { pose: "sit" }, nap: { pose: "sleep" }, carry: { pose: "carry", prop: "basket" }, fan: { pose: "fan", prop: "fan" }, torch: { pose: "hold-up", prop: "torch" }, light: { pose: "hold-up", prop: "torch" }, gather: { pose: "dig", prop: "basket" }, forage: { pose: "dig", prop: "basket" }, eat: { pose: "eat", prop: "meat" }, feast: { pose: "eat", prop: "meat" }, water: { pose: "carry", prop: "jug" }, "fetch-water": { pose: "carry", prop: "jug" }, sweat: { pose: "fan", prop: "fan" }, freeze: { pose: "shiver" }, wait: { pose: "look-around" }, watch: { pose: "look-around" }, celebrate: { pose: "cheer" }, party: { pose: "dance" } };
  function activityOf(name) { var k = str(name).toLowerCase().trim(); if (ACTIVITY[k]) return ACTIVITY[k]; return { pose: poseName(k) }; }
  function heroX(sc, side) { if (sc.portrait) return sc.Ww / 2; return sc.Ww * (side === "right" ? (sc.square ? 0.68 : 0.7) : sc.square ? 0.32 : 0.3); }
  function applyTime(sc, time) {
    time = str(time || "day").toLowerCase();
    if (time === "night") { if (!sc.isDark) sc.tint("#1A2A5A", 0.5, 0, 0.01); if (!sc.fires.length) { var f = sc.fire(sc.Ww * 0.5, sc.G + 6, 0.9); sc.lightWash(f.x, f.y - 100, 800, "#FFB347", 0.4); } if (!sc.isDark) sc.weather("stars", { count: 40 }); }
    else if (time === "dusk" || time === "sunset") sc.tint("#FF7A3A", 0.25, 0, 0.01);
    else if (time === "dawn") sc.tint("#FFB8A0", 0.18, 0, 0.01);
  }
  function castList(names, n, fallback) {
    var out = arr(names).map(function (x) { return typeof x === "string" ? x : x && x.name; }).filter(Boolean).slice(0, n);
    var i = 0;
    while (out.length < Math.min(n, (fallback || CAST_IDS).length)) { var c = (fallback || CAST_IDS)[i++]; if (out.indexOf(c) < 0) out.push(c); if (i > 10) break; }
    return out;
  }
  var ERA_ICONS = {
    cave: '<path d="M10,90 C10,40 40,14 50,14 C60,14 90,40 90,90Z" fill="#8A5A33"' + stAttr(4) + '/><path d="M36,90 C36,60 64,60 64,90Z" fill="#2A1A10"/>',
    pyramid: '<path d="M6,88 L50,14 L94,88Z" fill="#E2B56B"' + stAttr(4) + '/><path d="M50,14 L64,88 L94,88Z" fill="#C8984E"' + stAttr(4) + '/>',
    column: '<path d="M30,88 L36,22 L64,22 L70,88Z" fill="#F1E8D2"' + stAttr(4) + '/><path d="M24,22 L76,22 L76,10 L24,10Z M20,88 L80,88 L80,96 L20,96Z" fill="#E6DCC0"' + stAttr(4) + '/>',
    castle: '<path d="M14,90 L14,34 L26,34 L26,44 L40,44 L40,34 L60,34 L60,44 L74,44 L74,34 L86,34 L86,90Z" fill="#C9BFA6"' + stAttr(4) + '/><path d="M42,90 L42,66 C42,58 58,58 58,66 L58,90Z" fill="#3A2416"/>',
    house: '<path d="M14,90 L14,50 L50,16 L86,50 L86,90Z" fill="#E8DCC0"' + stAttr(4) + '/><path d="M8,50 L50,12 L92,50" fill="none"' + stAttr(5) + '/><path d="M40,90 L40,64 L60,64 L60,90Z" fill="#3A2416"/>',
    city: '<path d="M10,90 L10,40 L34,40 L34,90Z M38,90 L38,18 L62,18 L62,90Z M66,90 L66,52 L90,52 L90,90Z" fill="#9FB0C4"' + stAttr(4) + '/><path d="M16,50 L28,50 M16,64 L28,64 M44,30 L56,30 M44,44 L56,44 M44,58 L56,58 M72,62 L84,62 M72,76 L84,76" stroke="#FFF2B0" stroke-width="5"/>',
    rocket: '<path d="M50,8 C70,30 70,60 62,80 L38,80 C30,60 30,30 50,8Z" fill="#C9D6E2"' + stAttr(4) + '/><circle cx="50" cy="40" r="9" fill="#5BE2FF"' + stAttr(3) + '/><path d="M38,70 L22,88 L38,84Z M62,70 L78,88 L62,84Z" fill="#E04E6B"' + stAttr(3) + '/><path d="M42,82 C46,96 54,96 58,82Z" fill="#FF9A1F"/>',
    sun: '<circle cx="50" cy="50" r="30" fill="#FF6A2A"' + stAttr(4) + '/><path d="M50,8 L50,16 M50,84 L50,92 M8,50 L16,50 M84,50 L92,50 M20,20 L26,26 M80,20 L74,26 M20,80 L26,74 M80,80 L74,74" stroke="#FF9A1F" stroke-width="5" stroke-linecap="round"/>',
    star: '<path d="M50,8 L62,36 L92,38 L68,58 L76,88 L50,72 L24,88 L32,58 L8,38 L38,36Z" fill="#FFD400"' + stAttr(4) + '/>',
    skull: '<path d="M50,10 C24,10 16,30 18,48 C20,62 30,66 32,74 L32,90 L68,90 L68,74 C70,66 80,62 82,48 C84,30 76,10 50,10Z" fill="#F4ECD8"' + stAttr(4) + '/><circle cx="38" cy="46" r="9" fill="' + INK + '"/><circle cx="62" cy="46" r="9" fill="' + INK + '"/><path d="M44,72 L44,84 M50,72 L50,84 M56,72 L56,84" stroke="' + INK + '" stroke-width="3"/>',
    mammoth: '<path d="M16,84 L16,50 C16,24 84,24 84,50 L84,84 L70,84 L70,64 L30,64 L30,84Z" fill="#8A5A33"' + stAttr(4) + '/><circle cx="86" cy="48" r="14" fill="#8A5A33"' + stAttr(3) + '/><path d="M92,56 C100,70 96,84 88,90" fill="none"' + stAttr(5) + '/>',
    wheel: '<circle cx="50" cy="50" r="36" fill="#C9995A"' + stAttr(5) + '/><circle cx="50" cy="50" r="8" fill="#6B4A2A"' + stAttr(3) + '/><path d="M50,14 L50,86 M14,50 L86,50 M24,24 L76,76 M76,24 L24,76" stroke="' + INK + '" stroke-width="4"/>',
    fire: '<path d="M50,10 C62,30 76,40 74,62 C72,80 60,90 50,90 C40,90 28,80 26,62 C24,44 40,34 38,22 C44,30 50,34 50,10Z" fill="#FF6A1A"' + stAttr(4) + '/><path d="M50,46 C56,56 60,62 58,72 C56,80 44,80 42,72 C40,64 46,56 50,46Z" fill="#FFE05A"/>',
  };
  var ERA_ICON_ALIASES = { stoneage: "cave", "stone-age": "cave", caveman: "cave", egypt: "pyramid", egyptian: "pyramid", pyramids: "pyramid", rome: "column", roman: "column", greek: "column", greece: "column", temple: "column", medieval: "castle", "middle-ages": "castle", knight: "castle", village: "house", farm: "house", modern: "city", today: "city", now: "city", future: "rocket", space: "rocket", "far-future": "sun", "end": "sun", "dying-sun": "sun", death: "skull", extinct: "skull", "ice-age": "mammoth", invention: "wheel", discovery: "fire" };
  function eraIcon(n) { n = str(n).toLowerCase().trim(); if (ERA_ICONS[n]) return ERA_ICONS[n]; return ERA_ICONS[ERA_ICON_ALIASES[n]] || ERA_ICONS.star; }
  S.eraIcon = function (n, size) { return '<svg viewBox="0 0 100 100" width="' + fx(size || 48) + '" height="' + fx(size || 48) + '" style="display:block;overflow:visible">' + eraIcon(n) + "</svg>"; };
  S.eraIconNames = Object.keys(ERA_ICONS);

  // ───────────────────────── templates ─────────────────────────
  var T = {};
  T["daily-life"] = function (root, p) {
    var sc = new Scene(root, { location: p.location || "savanna", era: p.era });
    var chars = arr(p.characters).filter(Boolean).slice(0, 3);
    if (!chars.length) chars = [{ name: "og", activity: "work" }];
    var n = chars.length;
    var xs = n === 1 ? [heroX(sc, p.side === "right" ? "right" : "left")] : sc.slots(n, sc.portrait ? 0.62 : n === 2 ? 0.44 : 0.6);
    arr(p.setpieces).filter(Boolean).slice(0, 3).forEach(function (name, i) {
      var x = n === 1 ? sc.Ww * (sc.portrait ? 0.5 + (i - 1) * 0.42 : xs[0] < sc.Ww / 2 ? 0.66 + i * 0.16 : 0.34 - i * 0.16) : sc.Ww / 2 + (i - 1) * sc.Ww * (sc.portrait ? 0.4 : 0.3);
      var sp = sc.setpiece(name, { x: x, y: sc.G + 10, scale: n === 1 ? 1 : 0.85 });
      if (sp && sp.g && n === 1 && i === 0) sc._mainSet = sp;
    });
    if (p.animal) { var an = sc.animal(p.animal, { x: sc.Ww * (sc.portrait ? 0.82 : 0.86), facing: "left", scale: 0.95 }); if (D() > 5) an.moveTo(sc.Ww * (sc.portrait ? 0.78 : 0.8), D() * 0.3, 1.6); }
    var actors = chars.map(function (c, i) {
      var act = activityOf(c.activity || "work");
      var a = sc.character(c.name || CAST_IDS[i], { x: xs[i], index: i, facing: n === 1 ? (xs[0] < sc.Ww / 2 ? "right" : "left") : i < n / 2 ? "right" : "left", outfit: c.outfit || p.era, expression: c.expression || "neutral", pose: act.pose });
      var prop = c.prop || act.prop;
      if (prop) a.hold(prop, 0, null, { size: 1 });
      if (act.pose === "sit") a._sitting = true;
      return a;
    });
    narrate(actors[0]);
    applyTime(sc, p.time);
    var tKey = tAt(p.keyword || S.autoKey(p.headline), 0.4);
    if (p.headline) {
      sc.headline(p.headline, tKey, { pos: "top", color: p.headlineColor || "yellow", size: sc.portrait ? "lg" : "lg", kicker: p.kicker, x: n === 1 && !sc.portrait ? (xs[0] < sc.Ww / 2 ? 0.66 : 0.34) : 0.5, y: sc.portrait ? 0.14 : n === 1 ? 0.3 : 0.16 });
      actors[0].lookAt("up", tKey - 0.1).lookAt("camera", tKey + 1.6);
    }
    var rx = p.reaction || {};
    if (rx.mark || rx.expression) {
      var who = actors[clamp(Math.round(num(rx.character, 0)), 0, n - 1)];
      var tR = rx.word ? syncAt(rx.word, 0, D() * 0.65, 0.15) : clampT(Math.max(tKey + 1.2, D() * 0.6));
      if (rx.expression) who.expression(rx.expression, tR, 0.12);
      if (rx.mark) who.mark(rx.mark, tR + 0.05, 1.8);
      if (rx.pose) who.pose(rx.pose, tR, 0.3).pose(activityOf(chars[actors.indexOf(who)].activity || "work").pose, Math.min(D() - 0.3, tR + 2.2), 0.5);
      who.lookAt("camera", tR);
    }
    actors[0].beats(p.beats || [], { start: D() * 0.45, step: D() * 0.18 });
    var cam = sc.cam;
    cam.set({ zoom: 1.04 });
    cam.to({ zoom: sc.portrait ? 1.1 : 1.14, x: sc.Ww / 2 + (actors[0].x0 - sc.Ww / 2) * 0.3 }, 0.1, Math.max(2, D() * 0.9), "inOutSine");
  };

  T["what-if-time"] = function (root, p) {
    var sc = new Scene(root, { location: p.location || "savanna", era: p.era });
    var a = sc.character(p.character || "og", { x: heroX(sc, "left"), facing: "right", expression: p.expression || "neutral", pose: "look-around" });
    narrate(a);
    var ms = arr(p.milestones).filter(Boolean).slice(0, 5);
    var times = S.syncTimes(ms.map(function (m) { return m.word || S.autoKey(m.headline); }), { start: Math.min(1.2, D() * 0.2), end: D() * 0.82, lead: 0.15 });
    var stops = ms.map(function (m, i) { return { at: times[i], value: num(m.year, NaN) }; }).filter(function (s) { return isFinite(s.value); });
    var from = num(p.from, 0), to = num(p.to, stops.length ? stops[stops.length - 1].value : 1000000);
    sc.yearCounter({ from: from, to: to, at: Math.min(0.6, D() * 0.1), dur: Math.max(2, D() * 0.72), stops: stops.length ? stops : null, format: p.format || "plain", label: p.label, x: 0.5, y: sc.portrait ? 0.12 : 0.13 });
    var EXS = ["thinking", "shocked", "scared", "deadpan", "sad"], MKS = ["?", "!", "?!", "...", "sweat"];
    ms.forEach(function (m, i) {
      var t = times[i], nx = i < ms.length - 1 ? times[i + 1] - 0.25 : 1e9;
      if (m.headline) sc.headline(m.headline, t, { pos: "top", x: sc.portrait ? 0.5 : 0.66, y: sc.portrait ? 0.3 : 0.34, size: "md", color: i % 2 ? "white" : "yellow", until: nx });
      var ch = str(m.change || "none").toLowerCase();
      if (ch === "night") { sc.tint("#1A2A5A", 0.55, t, 1.2); sc.weather("stars", { count: 40, at: t }); }
      else if (ch === "snow" || ch === "ice") { sc.tint("#9FB6D0", 0.4, t, 1.2); sc.weather("snow", { count: 60, at: t }); sc.indicator("cold", t + 0.3, { label: m.label || "COLD", x: sc.portrait ? 0.84 : 0.9, y: sc.portrait ? 0.46 : sc.square ? 0.64 : 0.5 }); }
      else if (ch === "heat" || ch === "fire") { sc.tint("#FF5A1A", 0.35, t, 1.2); sc.indicator("hot", t + 0.3, { label: m.label || "HOT", x: sc.portrait ? 0.84 : 0.9, y: sc.portrait ? 0.46 : sc.square ? 0.64 : 0.5 }); sc.weather("embers", { count: 20, at: t }); }
      else if (ch === "ash" || ch === "dust") { sc.tint("#3A2A2A", 0.5, t, 1.2); sc.weather("ash", { count: 40, at: t }); }
      else if (ch === "flood" || ch === "water") {
        var wat = svgEl("rect", { x: sc.x0, y: sc.bot, width: sc.x1 - sc.x0, height: 600, fill: "#3C8CC9", opacity: 0.75 }, sc.layers.front.g);
        sc.anims.push(function (tt) { var q = sm(clamp((tt - t) / 2.2, 0, 1)); wat.setAttribute("y", fx(sc.bot - q * (sc.bot - sc.G + 140) + Math.sin(tt * 2) * 8)); });
      }
      else if (ch === "stars" || ch === "dark") { sc.tint("#05030F", 0.7, t, 1.5); sc.weather("stars", { count: 80, at: t }); }
      else if (ch === "rain" || ch === "storm") { sc.tint("#2A3A5A", 0.4, t, 1.2); sc.weather("rain", { count: 80, at: t }); }
      a.expression(m.expression || EXS[i % EXS.length], t + 0.1, 0.15).mark(m.mark || MKS[i % MKS.length], t + 0.2, 1.6);
      a.pose(i === ms.length - 1 ? "shrug" : i % 2 ? "point-up" : "look-around", t + 0.05, 0.35);
      a.lookAt("up", t).lookAt("camera", t + 1.4);
    });
    var cam = sc.cam;
    cam.set({ zoom: 1.02, y: 520 });
    cam.to({ zoom: 1.1, x: sc.Ww / 2 + (a.x0 - sc.Ww / 2) * 0.35, y: 500 }, 0.2, Math.max(2, D() * 0.9), "inOutSine");
  };

  T["survival-hack"] = function (root, p) {
    var sc = new Scene(root, { location: p.location || "desert", era: p.era });
    var act = activityOf(p.activity || "hold");
    var hx = sc.portrait ? sc.Ww * 0.42 : sc.Ww * (sc.square ? 0.36 : 0.38);
    var a = sc.character(p.character || "og", { x: hx, facing: "right", outfit: p.outfit || p.era, expression: p.expression || (p.indicator === "cold" ? "cold" : "hot"), pose: act.pose });
    var prop = p.prop || act.prop;
    if (prop) a.hold(prop, 0.2, null, { size: 1.05 });
    narrate(a);
    var sp = null;
    if (p.setpiece) sp = sc.setpiece(p.setpiece, { x: sc.portrait ? sc.Ww * 0.78 : sc.Ww * 0.64, y: sc.G + 10, scale: 0.9, at: 0.15 });
    var tT = tAt(p.keyword || S.autoKey(p.title), 0.18);
    if (p.title) sc.headline(p.title, tT, { pos: "top", color: p.headlineColor || "yellow", size: sc.portrait ? "md" : "md", kicker: p.kicker, x: 0.5, y: sc.portrait ? 0.1 : 0.12 });
    var ind = str(p.indicator || "hot").toLowerCase();
    if (ind !== "none") sc.indicator(ind, Math.min(0.5, tT), { label: p.temperature || (ind === "cold" ? "COLD" : "HOT"), x: sc.portrait ? 0.86 : 0.91, y: sc.portrait ? 0.3 : 0.42, level: 0.95 });
    var cos = arr(p.callouts).filter(function (c) { return c && c.text; }).slice(0, 5);
    var times = S.syncTimes(cos.map(function (c) { return c.word || S.autoKey(c.text); }), { start: Math.max(0.9, tT + 0.6), end: D() * 0.8, lead: 0.15 });
    cos.forEach(function (c, i) {
      var tg = str(c.target || "prop").toLowerCase(), target;
      target = (function (tg) {
        if (tg === "head" || tg === "face") return { get anchor() { return a.anchor; } };
        if (tg === "prop" || tg === "hand") return { get anchor() { return a.anchor && { head: a.anchor.handR }; } };
        if (tg === "body" || tg === "chest") return { get anchor() { return a.anchor && { head: { x: a.anchor.feet.x, y: a.anchor.feet.y - 150 * a.scale } }; } };
        if (tg === "feet" || tg === "ground") return { get anchor() { return a.anchor && { head: { x: a.anchor.feet.x + 40 * a.scale, y: a.anchor.feet.y } }; } };
        if (tg === "setpiece" && sp) return { x: sp.x, y: sp.y - 160 * sp.scale };
        if (tg === "left") return { x: a.x0 - 260, y: sc.G - 120 };
        if (tg === "right") return { x: a.x0 + 260, y: sc.G - 120 };
        if (tg === "sky" || tg === "sun") return { sx: 0.75, sy: 0.12 };
        return { get anchor() { return a.anchor; } };
      })(tg);
      var t = times[i], nx = i < cos.length - 1 ? times[i + 1] + 0.9 : 1e9;
      var side = tg === "left" ? "left" : tg === "right" || tg === "setpiece" ? "right" : (i % 2 ? "right" : "left");
      sc.callout(c.text, target, t, { side: sc.portrait ? (i % 2 ? "right" : "left") : side, until: Math.min(nx, D() + 1), color: c.color });
      a.pose(i % 2 ? "explain" : tg === "setpiece" ? "point" : "hold-up", t - 0.1, 0.35);
      a.pose(act.pose, Math.min(D() - 0.3, t + 1.4), 0.5);
    });
    var tEnd = times.length ? Math.min(D() - 0.8, times[times.length - 1] + 1.6) : D() * 0.8;
    if (p.result !== "none") { a.expression(p.result === "worse" ? "scared" : "happy", tEnd, 0.2).mark(p.result === "worse" ? "sweat" : "idea", tEnd + 0.1, 1.6); a.pose("cheer", tEnd, 0.3).pose(act.pose, Math.min(D() - 0.2, tEnd + 1.6), 0.5); }
    var cam = sc.cam;
    cam.set({ zoom: 1.04 });
    cam.to({ zoom: 1.12, x: sc.Ww / 2 + (a.x0 - sc.Ww / 2) * 0.25 }, 0.2, Math.max(2, D() * 0.85), "inOutSine");
  };

  T["versus-then-now"] = function (root, p) {
    var W = V.width, H = V.height, vert = V.isPortrait;
    root.classList.add("dw-root");
    var L = p.left || {}, Rr = p.right || {};
    var tA = tAt(L.word || S.autoKey(L.label || "then"), 0.12), tB = tAt(Rr.word || S.autoKey(Rr.label || "now"), 0.42, tA + 0.4);
    var halves = [], scenes = [];
    [L, Rr].forEach(function (side, i) {
      var half = el("div.dw-half", { parent: root });
      if (vert) { half.style.top = i ? "50%" : "0"; half.style.height = "50%"; half.style.width = "100%"; }
      else { half.style.left = i ? "50%" : "0"; half.style.width = "50%"; half.style.height = "100%"; }
      halves.push(half);
      var sc = new Scene(half, { location: side.location || (i ? "modern-city" : "cave"), era: side.era, W: vert ? W : W / 2, H: vert ? H / 2 : H, charScale: vert ? 1.0 : 1.25 });
      var act = activityOf(side.activity || (i ? "phone" : "hunt"));
      var a = sc.character(side.character || (i ? "og" : "og"), { x: sc.Ww * 0.5, facing: i ? "left" : "right", outfit: side.outfit || side.era, expression: side.expression || (i ? "deadpan" : "happy"), pose: act.pose });
      var prop = side.prop || act.prop;
      if (prop) a.hold(prop, 0, null, { size: 1 });
      if (side.animal) sc.animal(side.animal, { x: sc.Ww * (i ? 0.2 : 0.8), facing: i ? "right" : "left", scale: 0.8 });
      var t0 = i ? tB : tA;
      sc.headline(side.label || (i ? "NOW" : "THEN"), t0, { pos: "top", x: 0.5, y: vert ? 0.2 : 0.14, size: "md", color: i ? "yellow" : "white" });
      if (side.caption) sc.headline(side.caption, t0 + 0.5, { pos: "bottom", x: 0.5, y: vert ? 0.74 : 0.76, size: "sm", color: "white", maxWidth: 0.9 });
      narrate(a, t0 - 0.1, i ? D() : tB - 0.2);
      a.pose("present", t0 - 0.1, 0.4).pose(act.pose, t0 + 1.4, 0.5);
      if (side.mark) a.mark(side.mark, t0 + 0.6, 1.6);
      sc.cam.set({ zoom: 1.06 });
      sc.cam.to({ zoom: 1.14 }, t0, Math.max(1.5, D() * 0.6), "inOutSine");
      scenes.push(sc);
    });
    // reveal right half with a wipe, divider + VS badge in a top overlay
    var tl = V.timeline();
    tl.fromTo(halves[1], { scale: 0.94, opacity: 0.6 }, { scale: 1, opacity: 1 }, { at: tB - 0.3, dur: 0.4, ease: EASE.pop });
    var ov = el("div.dw-overlay.dw-topov", { parent: root });
    var div = svgEl("svg", { class: "dw-osvg", width: W, height: H, viewBox: "0 0 " + W + " " + H }, ov);
    var dline = svgEl("path", { d: vert ? roughLine(0, H / 2, W, H / 2, 5, u(6)) : roughLine(W / 2, 0, W / 2, H, 5, u(6)), fill: "none", stroke: INK, "stroke-width": u(14), "stroke-linecap": "round" }, div);
    tl.fromTo(dline, { opacity: 0 }, { opacity: 1 }, { at: tB - 0.3, dur: 0.2 });
    var vs = el("div.dw-vs", { parent: ov, text: p.vs || "VS" });
    if (vert) vs.style.left = "22%";
    tl.fromTo(vs, { scale: 0, rotate: -30, opacity: 0 }, { scale: 1, rotate: -8, opacity: 1 }, { at: tB - 0.1, dur: 0.45, ease: EASE.pop });
    if (p.headline) { var tH = tAt(p.keyword || S.autoKey(p.headline), 0.8, tB + 0.5); var hl = el("div.dw-headline.dw-h-md", { parent: ov }); hl.style.setProperty("--hc", "#FFD400"); var ht = el("div.dw-htext", { parent: hl }); ht.appendChild(S.rich(p.headline)); hl.style.maxWidth = W * 0.8 + "px"; V.fit(ht, { maxLines: 2, min: u(26) }); clampBox(hl, vert ? 0.62 : 0.5, vert ? 0.5 : 0.9, W, H, 0.04, 0.04); tl.fromTo(hl, { scale: 0, rotate: -14, opacity: 0 }, { scale: 1, rotate: 2, opacity: 1 }, { at: tH, dur: 0.45, ease: EASE.pop }); }
    current = scenes[1];
  };

  T["group-gathering"] = function (root, p) {
    var loc = p.location || "cave";
    var sc = new Scene(root, { location: loc, era: p.era, noFire: true });
    var names = castList(p.characters, 5, ["og", "ug", "nia", "pip", "elder"]);
    if (names.length < 2) names.push(names[0] === "og" ? "ug" : "og");
    var n = names.length;
    var cx = sc.Ww / 2, cy = sc.G + 4;
    var centre = str(p.centre || p.center || "fire").toLowerCase();
    if (centre === "fire") { var f = sc.fire(cx, cy, sc.portrait ? 0.8 : 0.95); sc.lightWash(cx, cy - 120, 1000, "#FFB347", sc.isDark ? 0.6 : 0.2); sc.floorPool(cx, cy, 760, "#FFB347", sc.isDark ? 0.5 : 0.2); }
    else if (centre !== "none") sc.setpiece(centre, { x: cx, y: cy, scale: 0.9 });
    applyTime(sc, p.time);
    var R0 = sc.Ww * (sc.portrait ? 0.42 : sc.square ? 0.38 : 0.33), Rd = sc.portrait ? 110 : 80;
    var actors = [];
    for (var i = 0; i < n; i++) {
      var ang = n === 1 ? PI : PI * (0.92 + (1.16 * i) / Math.max(1, n - 1));
      // around the back of the fire: left (ang≈PI) ... right (ang≈2PI); depth from sin
      var x = cx + Math.cos(ang) * R0, depth = Math.sin(ang); // depth: 0 at sides, -1 behind
      var y = cy + depth * Rd;
      var scl = 0.68 + (depth + 1) * 0.12;
      var sit = n >= 3 && (i % 2 === 1);
      var a = sc.character(names[i], { x: x, y: y, index: i, scale: scl, facing: x < cx ? "right" : "left", outfit: p.era, expression: i === 0 ? "happy" : ["neutral", "deadpan", "thinking", "happy", "tired"][i % 5], pose: sit ? "sit" : "idle" });
      a._sitting = sit;
      actors.push(a);
    }
    // depth sort: higher y drawn last
    actors.slice().sort(function (a, b) { return a.y0 - b.y0; }).forEach(function (a) { sc.actorLayer.appendChild(a.root); });
    var lines = arr(p.lines).filter(function (l) { return l && l.text; }).slice(0, 8);
    if (lines.length) {
      var win = dialogue(sc, actors, lines.map(function (l, i) { return { speaker: l.speaker != null ? l.speaker : i % n, text: l.text, expression: l.expression, pose: l.pose, mark: l.mark }; }), { start: 0.6 });
      win.forEach(function (w, i) {
        var who = lines[i].speaker != null ? actors[clamp(Math.round(num(lines[i].speaker, i % n)), 0, n - 1)] : actors[i % n];
        sc.cam.to({ x: cx + (who.x0 - cx) * 0.3, zoom: sc.portrait ? 1.04 : 1.1 }, w.start - 0.3, 0.7, "inOutCubic");
      });
    } else {
      narrate(actors[0]);
      actors[0].pose("explain", 0.3, 0.4);
      actors.slice(1).forEach(function (o, i) { o.lookAt(actors[0], 0.2); o.pose("nod", 1 + i * 0.7, 0.3).pose(o._sitting ? "sit" : "idle", 2.2 + i * 0.7, 0.4); });
    }
    if (p.headline) sc.headline(p.headline, tAt(p.keyword || S.autoKey(p.headline), 0.3), { pos: "top", x: 0.5, y: sc.portrait ? 0.12 : 0.14, size: "md", color: "yellow" });
    sc.cam.set({ zoom: 1.0, y: 520 });
    sc.cam.to({ zoom: sc.portrait ? 1.04 : 1.08, y: 500 }, 0.1, 1.6, "inOutSine");
  };

  T["journey-trek"] = function (root, p) {
    var segs = Math.max(2, Math.ceil(D() / 3));
    var sc = new Scene(root, { location: p.location || "savanna", era: p.era, span: Math.min(8, segs) });
    var names = castList(p.characters, 3, ["og", "nia"]);
    var startX = sc.Ww * 0.36, dist = Math.min(sc.x1 - sc.Ww - 300, Math.max(600, D() * 170));
    var actors = names.map(function (nm, i) {
      var a = sc.character(nm, { x: startX - i * 300, index: i, facing: "right", outfit: p.era, expression: i ? ["tired", "neutral"][i % 2] : "happy" });
      a.moveTo(startX - i * 300 + dist, 0.15 + i * 0.1, D() - 0.6, { gait: p.pace === "run" ? "run" : "walk", ease: "linear" });
      if (i === 0 && p.prop) a.hold(p.prop, 0, null, { size: 0.95 });
      else if (i > 0) a.hold(["basket", "stick", "jug"][i % 3], 0, null, { size: 0.9 });
      return a;
    });
    if (p.animal) { var an = sc.animal(p.animal, { x: startX - names.length * 300 - 80, facing: "right", scale: 0.9 }); an.moveTo(startX - names.length * 300 - 80 + dist, 0.3, D() - 0.6, { gait: "walk", ease: "linear" }); }
    narrate(actors[0]);
    // route on the ground with flags at milestones
    var ms = arr(p.milestones).filter(Boolean).slice(0, 5);
    var route = svgEl("path", { d: roughLine(startX - 100, sc.G + 60, startX + dist + 200, sc.G + 60, 9, 14), fill: "none", stroke: INK, "stroke-width": 8, "stroke-dasharray": "26 22", "stroke-linecap": "round", opacity: 0.55 }, sc.layers.ground.g);
    void route;
    var times = S.syncTimes(ms.map(function (m) { return m.word || S.autoKey(m.label); }), { start: 0.9, end: D() * 0.85, lead: 0.1 });
    ms.forEach(function (m, i) {
      var sx = startX + (dist * (i + 1)) / (ms.length + 0.3) + 160;
      sc.setpiece("signpost", { x: sx, y: sc.G + 4, scale: 0.75, text: m.label || "", at: Math.max(0, times[i] - 0.5) });
      actors[0].pose("point", times[i], 0.3).pose("walk", times[i] + 1.1, 0.4);
      actors[0].lookAt({ x: sx, y: sc.G - 180 }, times[i] - 0.2).lookAt("camera", times[i] + 1.1);
      if (m.mark) actors[0].mark(m.mark, times[i] + 0.2, 1.4);
    });
    if (p.headline) sc.headline(p.headline, 0.3, { pos: "top", x: 0.5, y: sc.portrait ? 0.1 : 0.12, size: "md", color: "white", kicker: p.kicker, until: p.until === "end" ? null : Math.max(2, D() * 0.45) });
    if (p.reaction) { var tR = syncAt(p.reactionWord, 0, D() * 0.7, 0.15); actors[0].expression(p.reaction, tR, 0.15).mark(p.reactionMark || "!", tR + 0.1, 1.6); }
    sc.cam.follow(actors[0], 0, D() + 1, { zoom: sc.portrait ? 1.0 : 1.1, lead: sc.Ww * (sc.portrait ? 0.08 : 0.12) });
  };

  T["headline-thumb"] = function (root, p) {
    var sc = new Scene(root, { location: p.location || "savanna", era: p.era });
    var side = p.side === "right" ? "right" : "left";
    var hx = sc.portrait ? sc.Ww * 0.5 : sc.Ww * (side === "left" ? 0.22 : 0.78);
    var a = sc.character(p.character || "og", { x: hx, facing: sc.portrait ? "right" : side === "left" ? "right" : "left", scale: sc.portrait ? 0.95 : 1.05, outfit: p.outfit || p.era, expression: p.setup || "neutral", pose: p.setupPose || "look-around" });
    if (p.animal) sc.animal(p.animal, { x: sc.portrait ? sc.Ww * 0.82 : sc.Ww * (side === "left" ? 0.86 : 0.14), facing: side === "left" ? "left" : "right", scale: 0.9 });
    if (p.setpiece) sc.setpiece(p.setpiece, { x: sc.portrait ? sc.Ww * 0.2 : sc.Ww * (side === "left" ? 0.6 : 0.4), y: sc.G + 10, scale: 0.85 });
    var tK = tAt(p.keyword || S.autoKey(p.headline), 0.35);
    narrate(a, 0, tK - 0.25); narrate(a, tK + 1.2, D());
    var hxs = sc.portrait ? 0.5 : side === "left" ? 0.68 : 0.32, hys = sc.portrait ? 0.3 : sc.square ? 0.26 : 0.4;
    sc.headline(p.headline || "WHAT?!", tK, { x: hxs, y: hys, size: sc.portrait ? "xl" : "xl", color: p.color || "yellow", kicker: p.kicker, maxWidth: sc.portrait ? 0.92 : 0.6 });
    sc.sburst(hxs, hys, tK, { r: sc.portrait ? 300 : 360, count: 18 });
    var react = str(p.reaction || "shocked").toLowerCase();
    var map = { shocked: { pose: "panic", expr: "shocked", mark: "?!" }, scared: { pose: "cower", expr: "scared", mark: "sweat" }, happy: { pose: "cheer", expr: "excited", mark: "!" }, deadpan: { pose: "cross-arms", expr: "deadpan", mark: "..." }, confused: { pose: "shrug", expr: "confused", mark: "?" }, angry: { pose: "hands-hips", expr: "angry", mark: "anger" }, hot: { pose: "fan", expr: "hot", mark: "sweat" }, cold: { pose: "shiver", expr: "cold", mark: "!" }, idea: { pose: "point-up", expr: "excited", mark: "idea" }, hungry: { pose: "hold", expr: "hungry", mark: "drool" } }[react] || { pose: "panic", expr: "shocked", mark: "?!" };
    a.expression(map.expr, tK + 0.05, 0.12).pose(map.pose, tK + 0.02, 0.25).mark(map.mark, tK + 0.2, 1.8);
    a.lookAt("up", tK - 0.2).lookAt("camera", tK + 1.5);
    a.pose(p.setupPose || "idle", Math.min(D() - 0.3, tK + 2.6), 0.6);
    var cam = sc.cam;
    cam.set({ zoom: 1.02 });
    cam.to({ actor: a, zoom: sc.portrait ? 1.12 : 1.22, focusY: 230 }, 0.2, Math.max(0.6, tK - 0.5), "inOutSine");
    cam.to({ zoom: 1.0, x: sc.Ww / 2, y: 500 }, tK - 0.05, 0.25, EASE.pop);
    cam.shake(tK + 0.05, 16, 0.5);
    cam.to({ zoom: 1.06, x: sc.Ww / 2 + (a.x0 - sc.Ww / 2) * 0.3 }, tK + 1.5, Math.max(1, D() - tK - 1.6), "inOutSine");
  };

  T["mini-diagram"] = function (root, p) {
    var sc = new Scene(root, { location: p.location || "desert", era: p.era });
    var hx = sc.portrait ? sc.Ww * 0.5 : sc.Ww * (sc.square ? 0.16 : 0.17);
    var a = sc.character(p.character || "elder", { x: hx, facing: "right", scale: sc.portrait ? 0.62 : 0.72, outfit: p.outfit || p.era, expression: p.expression || "happy" });
    narrate(a);
    var tD = Math.min(0.5, D() * 0.1);
    var labels = arr(p.labels).filter(function (l) { return l && l.text; }).slice(0, 6), arrows = arr(p.arrows).filter(Boolean).slice(0, 6);
    var card = sc.diagram(p.kind || "house-cooling", { title: p.title, labels: labels, arrows: arrows, at: tD, flow: p.flow !== false, x: sc.portrait ? 0.5 : sc.square ? 0.58 : 0.62, y: sc.portrait ? 0.36 : 0.48, w: sc.portrait ? 0.88 : sc.square ? 0.64 : 0.52, h: sc.portrait ? 0.46 : sc.square ? 0.6 : 0.7 });
    void card;
    a.pose("point-up", tD + 0.2, 0.4).lookAt("up", tD + 0.2);
    var keys = labels.map(function (l) { return l.word || S.autoKey(l.text); }).concat(arrows.map(function (ar) { return ar.word || S.autoKey(ar.label); }));
    var times = S.syncTimes(keys, { start: tD + 1.2, end: D() * 0.8 });
    times.forEach(function (t, i) { a.pose(i % 2 ? "explain" : "point-up", t - 0.1, 0.35); });
    a.pose("present", Math.min(D() - 0.5, (times[times.length - 1] || tD) + 1.4), 0.5).lookAt("camera", Math.min(D() - 0.5, (times[times.length - 1] || tD) + 1.4));
    if (p.mark) a.mark(p.mark, Math.min(D() - 0.8, (times[times.length - 1] || tD) + 1.5), 1.5);
    sc.cam.set({ zoom: 1.02 });
    sc.cam.to({ zoom: 1.06 }, 0.2, Math.max(2, D() * 0.9), "inOutSine");
  };

  T["list-of-ways"] = function (root, p) {
    var sc = new Scene(root, { location: p.location || "nile", era: p.era });
    var hx = sc.portrait ? sc.Ww * 0.5 : sc.Ww * (sc.square ? 0.3 : 0.3);
    var a = sc.character(p.character || "nia", { x: hx, facing: "right", outfit: p.outfit || p.era, expression: p.expression || "happy" });
    narrate(a);
    var items = arr(p.items).filter(function (it) { return it && it.text; }).slice(0, 6);
    if (!items.length) items = [{ text: "Idea" }];
    var tT = Math.min(0.4, D() * 0.08);
    if (p.title) sc.headline(p.title, tT, { pos: "top", x: 0.5, y: sc.portrait ? 0.09 : 0.11, size: "sm", color: "white", kicker: p.kicker });
    var times = S.syncTimes(items.map(function (it) { return it.word || S.autoKey(it.text); }), { start: Math.max(0.8, tT + 0.5), end: D() * 0.8, lead: 0.15 });
    var tl = V.timeline();
    var cardX = sc.portrait ? 0.5 : sc.square ? 0.68 : 0.68, cardY = sc.portrait ? 0.27 : sc.square ? 0.3 : 0.36;
    items.forEach(function (it, i) {
      var t = times[i], nx = i < items.length - 1 ? times[i + 1] : 1e9;
      var card = el("div.dw-listcard", { parent: sc.overlay });
      el("div.dw-listnum", { parent: card, text: String(i + 1) });
      var tx = el("div.dw-listtext", { parent: card }); tx.appendChild(S.rich(it.text));
      card.style.maxWidth = (sc.portrait ? 0.86 : sc.square ? 0.6 : 0.5) * sc.W + "px";
      V.fit(tx, { maxLines: 2, min: u(26) });
      clampBox(card, cardX, cardY, sc.W, sc.H, 0.04, 0.04);
      var rot = i % 2 ? 1.5 : -1.5;
      tl.fromTo(card, { scale: 0, rotate: rot - 16, opacity: 0 }, { scale: 1, rotate: rot, opacity: 1 }, { at: t, dur: 0.45, ease: EASE.pop });
      if (nx < 1e8) tl.to(card, { scale: 0, rotate: rot + 10, opacity: 0 }, { at: nx - 0.3, dur: 0.25, ease: "inBack" });
      var act = activityOf(it.activity || it.pose || ["point-up", "explain", "hold-up", "present", "think", "cheer"][i % 6]);
      a.pose(act.pose, t - 0.05, 0.35);
      var prop = it.prop || act.prop;
      if (prop) a.hold(prop, t, nx < 1e8 ? nx - 0.3 : null, { size: 1 });
      if (it.mark) a.mark(it.mark, t + 0.3, 1.4);
      if (it.expression) a.expression(it.expression, t);
      a.lookAt("camera", t);
      sc.cam.to({ zoom: 1.1 + (i % 2) * 0.03, x: sc.Ww / 2 + (a.x0 - sc.Ww / 2) * 0.3 }, t - 0.1, 0.4, "outCubic");
    });
    // progress dots
    var dots = el("div.dw-dots", { parent: sc.overlay });
    var dEls = items.map(function () { return el("span", { parent: dots }); });
    sc.onFrame(function (t) { var idx = -1; for (var i = 0; i < times.length; i++) if (t >= times[i]) idx = i; dEls.forEach(function (d, i) { d.className = i === idx ? "on" : i < idx ? "done" : ""; }); });
    sc.cam.set({ zoom: 1.04 });
  };

  T["reaction-close-up"] = function (root, p) {
    var sc = new Scene(root, { location: p.location || "savanna", era: p.era });
    var a = sc.character(p.character || "og", { x: sc.Ww * 0.5, facing: "right", outfit: p.outfit || p.era, expression: p.setup || "neutral", pose: "idle" });
    var tR = tAt(p.word || S.autoKey(p.headline), 0.45);
    narrate(a, 0, tR - 0.25); narrate(a, tR + 1.4, D());
    var Z = sc.portrait ? 2.0 : sc.square ? 2.3 : 2.4;
    var fy = 240;
    var cam = sc.cam;
    cam.set({ actor: a, zoom: Z * 0.92, focusY: fy, dx: sc.portrait ? 0 : -40 });
    cam.to({ actor: a, zoom: Z, focusY: fy, dx: sc.portrait ? 0 : -40 }, 0.1, Math.max(0.6, tR - 0.3), "inOutSine");
    var react = str(p.reaction || "shocked").toLowerCase();
    var map = { shocked: { expr: "shocked", mark: "?!", pose: "panic" }, scared: { expr: "scared", mark: "sweat", pose: "cower" }, deadpan: { expr: "deadpan", mark: "...", pose: "idle" }, confused: { expr: "confused", mark: "?", pose: "think" }, happy: { expr: "excited", mark: "!", pose: "cheer" }, angry: { expr: "angry", mark: "anger", pose: "hands-hips" }, hot: { expr: "hot", mark: "sweat", pose: "fan" }, cold: { expr: "cold", mark: "!", pose: "shiver" }, sad: { expr: "sad", mark: "...", pose: "sad" }, hungry: { expr: "hungry", mark: "drool", pose: "hold" }, idea: { expr: "excited", mark: "idea", pose: "point-up" }, smug: { expr: "smug", mark: "music", pose: "cross-arms" } }[react] || { expr: "shocked", mark: "?!", pose: "panic" };
    a.expression(map.expr, tR + 0.03, 0.1).mark(map.mark, tR + 0.15, 2.2).pose(map.pose, tR + 0.02, 0.25);
    a.lookAt("camera", 0);
    cam.to({ actor: a, zoom: Z * 1.18, focusY: fy, dx: sc.portrait ? 0 : -40 }, tR, 0.12, EASE.pop);
    cam.shake(tR + 0.05, 14, 0.45);
    cam.to({ actor: a, zoom: Z * 1.05, focusY: fy, dx: sc.portrait ? 0 : -40 }, tR + 0.6, Math.max(0.8, D() - tR - 0.8), "inOutSine");
    if (p.headline) sc.headline(p.headline, tR + 0.1, { pos: sc.portrait ? "bottom" : "bottom", x: 0.5, y: sc.portrait ? 0.82 : 0.84, size: sc.portrait ? "lg" : "lg", color: p.color || "yellow", kicker: p.kicker });
    if (p.setup === "sleepy" || p.setupMark) a.mark(p.setupMark || "zzz", 0.2, Math.max(0.5, tR - 0.4));
  };

  T["timeline-eras"] = function (root, p) {
    var eras = arr(p.eras).filter(function (e) { return e && (e.label || e.icon); }).slice(0, 7);
    if (eras.length < 2) eras = [{ label: "Stone Age", icon: "cave", year: -50000 }, { label: "Today", icon: "city", year: 2025 }];
    var gap = 560;
    var sc = new Scene(root, { location: p.location || "savanna", era: p.era, span: (eras.length * gap) / 1000 * 1.7 + 1.2, color: p.color });
    var x0 = sc.portrait ? sc.Ww * 0.5 : sc.Ww * 0.36;
    var a = sc.character(p.character || "og", { x: x0 - 260, facing: "right", outfit: p.era, expression: "happy" });
    var times = S.syncTimes(eras.map(function (e) { return e.word || S.autoKey(e.label); }), { start: 0.6, end: D() * 0.82, lead: 0.1 });
    // road
    svgEl("path", { d: roughLine(x0 - 600, sc.G + 50, x0 + eras.length * gap + 400, sc.G + 50, 13, 10), fill: "none", stroke: INK, "stroke-width": 10, "stroke-linecap": "round", opacity: 0.6 }, sc.layers.ground.g);
    var years = eras.map(function (e) { return num(e.year, NaN); });
    var hasYears = years.every(function (y) { return isFinite(y); });
    if (hasYears) sc.yearCounter({ from: years[0], to: years[years.length - 1], at: times[0], stops: eras.map(function (e, i) { return { at: times[i], value: years[i] }; }), format: p.format || (years[0] < 0 ? "bc" : "plain"), label: p.label, x: 0.5, y: sc.portrait ? 0.1 : 0.12 });
    var prevX = x0 - 260, prevT = 0.1;
    eras.forEach(function (e, i) {
      var ex = x0 + i * gap, t = times[i];
      var post = g(sc.propLayer, { class: "dw-erapost" });
      post.innerHTML = '<path d="M0,0 L0,-230"' + stAttr(12) + '/><path d="M0,0 L0,-230" stroke="#8A5A33" stroke-width="7"/>' +
        '<g transform="translate(0,-330)"><path d="' + roughRect(-120, -70, 240, 150, 17 + i, 4) + '" fill="#F6EBC8"' + stAttr() + '/><g transform="translate(-45,-62) scale(0.9)">' + eraIcon(e.icon || e.label) + '</g><text x="0" y="60" text-anchor="middle" font-family="' + FONT_HAND + '" font-weight="700" font-size="34" fill="' + INK + '">' + esc(str(e.label || "")).slice(0, 18) + "</text></g>";
      post.setAttribute("transform", "translate(" + fx(ex) + "," + fx(sc.G + 4) + ")");
      (function (pg, t0) { sc.anims.push(function (tt) { var q = EASE.pop(clamp((tt - (t0 - 0.5)) / 0.45, 0, 1)); pg.style.display = q > 0 && sc.onScreen(ex, sc.G - 300, 80) ? "" : "none"; pg.setAttribute("transform", "translate(" + fx(ex) + "," + fx(sc.G + 4) + ") scale(" + fx(q) + ")"); }); })(post, t);
      var arrive = Math.max(prevT + 0.4, t - 0.05), walkStart = Math.max(prevT + 0.05, arrive - Math.max(0.6, Math.abs(ex - 130 - prevX) / 280));
      a.moveTo(ex - 130, walkStart, arrive - walkStart, { gait: arrive - walkStart < 0.9 ? "run" : "walk" });
      a.pose(i === eras.length - 1 ? "cheer" : "point-up", arrive, 0.3).pose("idle", arrive + 0.9, 0.4);
      a.lookAt({ x: ex, y: sc.G - 300 }, arrive - 0.2).lookAt("camera", arrive + 1);
      if (e.expression) a.expression(e.expression, arrive);
      if (e.mark) a.mark(e.mark, arrive + 0.2, 1.4);
      prevX = ex - 130; prevT = arrive + 0.6;
    });
    narrate(a);
    sc.cam.follow(a, 0, D() + 1, { zoom: sc.portrait ? 1.0 : 1.08, lead: sc.Ww * (sc.portrait ? 0.1 : 0.14) });
    if (p.title) sc.headline(p.title, 0.2, { pos: "top", x: 0.5, y: sc.portrait ? 0.2 : 0.24, size: "sm", color: "white", until: Math.max(1.5, times[0] - 0.2) });
  };

  // ───────────────────────── public API ─────────────────────────
  S.scene = function (location, opts) {
    opts = opts || {};
    if (typeof location === "object" && location) { opts = location; location = opts.location; }
    opts.location = location || opts.location || "savanna";
    return new Scene(opts.root || V.root(), opts);
  };
  S.character = function (name, opts) { return ensureScene().character(name, opts); };
  S.animal = function (kind, opts) { return ensureScene().animal(kind, opts); };
  S.setpiece = function (name, opts) { return ensureScene().setpiece(name, opts); };
  S.prop = function (name, opts) { return ensureScene().prop(name, opts); };
  S.fire = function (x, y, scale, opts) { return ensureScene().fire(x, y, scale, opts); };
  S.headline = function (text, at, opts) { return ensureScene().headline(text, at, opts); };
  S.callout = function (text, target, at, opts) { return ensureScene().callout(text, target, at, opts); };
  S.indicator = function (kind, at, opts) { return ensureScene().indicator(kind, at, opts); };
  S.yearCounter = function (opts) { return ensureScene().yearCounter(opts); };
  S.bubble = function (actor, text, from, to, opts) { return ensureScene().bubble(actor, text, from, to, opts); };
  S.thought = function (actor, text, from, to, opts) { opts = opts || {}; opts.kind = "thought"; opts.talk = false; return ensureScene().bubble(actor, text, from, to, opts); };
  S.mark = function (owner, kind, at, dur) { return ensureScene().mark(owner, kind, at, dur); };
  S.weather = function (kind, opts) { return ensureScene().weather(kind, opts); };
  S.tint = function (color, opacity, at, dur) { return ensureScene().tint(color, opacity, at, dur); };
  S.burst = function (x, y, at, opts) { return ensureScene().burst(x, y, at, opts); };
  S.sburst = function (sx, sy, at, opts) { return ensureScene().sburst(sx, sy, at, opts); };
  S.diagram = function (kind, opts) { return ensureScene().diagram(kind, opts); };
  S.captions = function (opts) { return ensureScene().captions(opts); };
  S.camera = function () { return ensureScene().cam; };
  S.currentScene = function () { return current; };
  S.cast = CAST_IDS.slice();
  S.outfits = Object.keys(OUTFITS);
  S.locations = Object.keys(LOCATIONS);
  S.poses = Object.keys(POSES);
  S.expressions = Object.keys(EXPR);
  S.activities = Object.keys(ACTIVITY);
  S.doodleTemplates = T;
  S.templateIds = Object.keys(T);

  S.render = function (id, root, props) {
    var fn = T[id];
    if (!fn) throw new Error("Unknown template: " + id);
    root = root || V.root();
    try {
      fn(root, props || {});
    } catch (e) {
      V.error("doodle-world template " + id + ": " + (e && e.message));
      try { V.reset(); } catch (e2) {}
      current = null;
      S.fallback(root, V.narration);
    }
    return root;
  };

  /** Fallback: narrator doodle talking on the savanna beside kinetic captions. Never throws. */
  S.fallback = function (root, narration) {
    try {
      root = root || V.root();
      root.innerHTML = "";
      root.className = "";
      root.removeAttribute("style");
      current = null;
      var sc = new Scene(root, { location: "savanna" });
      var x = sc.portrait ? sc.Ww / 2 : sc.Ww * 0.28;
      var a = sc.character("og", { x: x, facing: "right", expression: "happy" });
      narrate(a);
      a.pose("wave", 0.1, 0.3).pose("explain", 1.2, 0.5).pose("idle", Math.min(D() - 0.3, 3.4), 0.5);
      if (D() > 4) a.pose("point-viewer", Math.min(D() - 0.8, D() * 0.6), 0.4).pose("idle", Math.min(D() - 0.3, D() * 0.6 + 1.4), 0.5);
      var bar = sc.captions({ text: narration, top: sc.portrait });
      if (bar) bar.classList.add(sc.portrait ? "dw-caps-portrait" : "dw-caps-side");
      sc.cam.set({ zoom: 1.04 });
      sc.cam.to({ zoom: 1.1, x: sc.Ww / 2 + (a.x0 - sc.Ww / 2) * 0.3 }, 0, Math.max(1, D()), "inOutSine");
      return root;
    } catch (e) {
      V.error("doodle-world fallback: " + (e && e.message));
      try {
        V.reset();
        root.innerHTML = "";
        var t = el("div", { parent: root, style: { position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center", padding: "8%", fontSize: u(64) + "px", fontWeight: "800", textAlign: "center", color: INK, background: "#F3D9A6", fontFamily: "system-ui, sans-serif" } });
        t.textContent = str(narration || V.narration).split(/\s+/).slice(0, 12).join(" ");
      } catch (e2) {}
    }
  };
})();
