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
/* Scene engine: stick-figure — "Stick Figure Doodle".
 * Minimal, deadpan hand-drawn stick-figure comics: black wobbly pen lines on off-white paper,
 * one accent colour, hand-lettered text. Rigged stick figures (walk, point, shrug, jump, fall,
 * think, panic, celebrate) talk in sync with V.words; doodles, hand-drawn graphs, labelled
 * arrows, "you are here" markers and scale comparisons draw on stroke by stroke and then hold
 * with a subtle line boil.
 * Pure function of time: everything is built once and updated from a single V.onFrame(t).
 */
(function () {
  "use strict";
  var V = window.V;
  var S = (window.SceneStyle = window.SceneStyle || {});
  var el = V.el;
  var SVGNS = "http://www.w3.org/2000/svg";

  var INK = "#161616", ACC = "#E4572E", MUTED = "#8A8A8A", PAPER = "#FBFBF7", SOFT = "#E6E5DE";
  var FONT = '"Segoe Print", "Bradley Hand", "Comic Sans MS", "Chalkboard SE", "Comic Neue", "Noto Sans", cursive';

  S.init({
    id: "stick-figure",
    kind: "whiteboard",
    enter: "fade",
    titleReveal: "write",
    drift: 0,
    series: [ACC, INK, MUTED, "#3B6EA8", "#4E9A5B", "#C79A2B"],
  });

  // ───────────────────────── utils ─────────────────────────
  var PI = Math.PI, D2R = PI / 180;
  var BOIL = 6; // line-boil frames per second
  function str(v) { return v == null ? "" : String(v); }
  function arr(v) { return Array.isArray(v) ? v : v == null ? [] : [v]; }
  function num(v, d) { v = Number(v); return isFinite(v) ? v : d; }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function lerp(a, b, p) { return a + (b - a) * p; }
  function sm(p) { p = clamp(p, 0, 1); return p * p * (3 - 2 * p); }
  function fx(n) { return Math.round(n * 10) / 10; }
  function hash01(n) { var x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); }
  function hashStr(s) {
    s = str(s);
    var h = 2166136261;
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  /** smooth 1D value noise in [-1, 1] */
  function noise(x, seed) {
    var i = Math.floor(x), f = x - i;
    var a = hash01(i * 1.7 + seed * 13.13), b = hash01((i + 1) * 1.7 + seed * 13.13);
    return (lerp(a, b, f * f * (3 - 2 * f)) - 0.5) * 2;
  }
  function plain(t) { return str(t).replace(/\*([^*]+)\*/g, "$1"); }
  function u(n) { return n * V.unit; }
  function D() { return V.duration; }
  function lastT() { return Math.max(0.05, V.duration - 0.05); }
  function clampT(t) { return clamp(num(t, 0), 0, lastT()); }
  function easeFn(e) {
    if (typeof e === "function") return e;
    if (e && EASE[e]) return EASE[e];
    if (e && V.ease[e]) return V.ease[e];
    return V.ease.inOutCubic;
  }
  var EASE = {
    pose: function (p) { // quick, slight overshoot — a cartoon "snap" into a pose
      p = clamp(p, 0, 1);
      var q = p - 1, s = 1.3;
      return q * q * ((s + 1) * q + s) + 1;
    },
    flop: function (p) { // falling over: accelerate, then a small bounce on the floor
      p = clamp(p, 0, 1);
      if (p < 0.72) { var a = p / 0.72; return a * a; }
      var b = (p - 0.72) / 0.28;
      return 1 - Math.sin(b * PI) * 0.07;
    },
  };
  S.stickEase = EASE;
  function svgEl(tag, attrs, parent) {
    var n = document.createElementNS(SVGNS, tag);
    if (attrs) for (var k in attrs) if (attrs[k] != null) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }
  function g(parent, attrs) { return svgEl("g", attrs, parent); }
  function colorOf(c, dflt) {
    if (!c) return dflt || INK;
    var k = str(c).toLowerCase();
    if (k === "ink" || k === "black") return INK;
    if (k === "accent" || k === "hi" || k === "red" || k === "orange") return ACC;
    if (k === "muted" || k === "grey" || k === "gray") return MUTED;
    if (k === "soft" || k === "paper") return SOFT;
    if (/^#[0-9a-f]{3,8}$/i.test(k) || /^rgba?\(/.test(k)) return c;
    return dflt || INK;
  }
  S.colorOf = colorOf;
  S.ink = { ink: INK, accent: ACC, muted: MUTED, paper: PAPER, soft: SOFT };

  // ───────────────────────── word timing ─────────────────────────
  function words() { return V.words || []; }
  function normW(w) { return str(w).toLowerCase().replace(/[^\p{L}\p{N}']+/gu, ""); }
  /** Time (with lead) of `word` after `after`, else the clamped fallback. */
  function syncAt(word, after, fallback, lead) {
    if (word) {
      var t = V.find(str(word), after || 0);
      if (t != null) return clampT(t - (lead == null ? 0.25 : lead));
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
  S.syncAt = syncAt;
  S.lineWindows = lineWindows;
  S.lines = lineWindows;

  // ───────────────────────── pen geometry ─────────────────────────
  function dist(a, b) { var dx = b[0] - a[0], dy = b[1] - a[1]; return Math.sqrt(dx * dx + dy * dy); }
  function polyLen(p, closed) {
    var L = 0;
    for (var i = 1; i < p.length; i++) L += dist(p[i - 1], p[i]);
    if (closed && p.length > 2) L += dist(p[p.length - 1], p[0]);
    return L;
  }
  /** Subdivide long segments so the wobble has points to bend (corners are kept). */
  function resample(p, step, closed) {
    if (p.length < 2) return p.slice();
    var out = [p[0]];
    var n = p.length + (closed ? 1 : 0);
    for (var i = 1; i < n; i++) {
      var a = p[i - 1], b = p[i % p.length], L = dist(a, b), m = Math.max(1, Math.min(24, Math.round(L / step)));
      for (var k = 1; k <= m; k++) out.push([lerp(a[0], b[0], k / m), lerp(a[1], b[1], k / m)]);
    }
    if (closed) out.pop();
    return out;
  }
  /** Displace points perpendicular to the path with smooth noise (the "hand" in hand-drawn). */
  function wobble(p, seed, amp, wl, closed) {
    var n = p.length;
    if (n < 2 || !(amp > 0)) return p.slice();
    var out = new Array(n), s = 0;
    for (var i = 0; i < n; i++) {
      if (i > 0) s += dist(p[i - 1], p[i]);
      var a = p[i > 0 ? i - 1 : closed ? n - 1 : 0], b = p[i < n - 1 ? i + 1 : closed ? 0 : n - 1];
      var dx = b[0] - a[0], dy = b[1] - a[1], L = Math.sqrt(dx * dx + dy * dy) || 1;
      var o = noise(s / wl + seed * 0.37, seed) * amp;
      if (!closed && (i === 0 || i === n - 1)) o *= 0.6;
      out[i] = [p[i][0] - (dy / L) * o, p[i][1] + (dx / L) * o];
    }
    return out;
  }
  /** Catmull-Rom spline through points → SVG path d. `sharp` keeps straight segments. */
  function dPath(p, closed, sharp) {
    var n = p.length;
    if (!n) return "M0 0";
    var d = "M" + fx(p[0][0]) + " " + fx(p[0][1]);
    if (n === 1) return d + " l0.1 0";
    if (n === 2 || sharp) {
      for (var j = 1; j < n; j++) d += " L" + fx(p[j][0]) + " " + fx(p[j][1]);
      return closed ? d + "Z" : d;
    }
    function P(i) { return closed ? p[(i + n) % n] : p[clamp(i, 0, n - 1)]; }
    var last = closed ? n : n - 1;
    for (var i = 0; i < last; i++) {
      var p0 = P(i - 1), p1 = P(i), p2 = P(i + 1), p3 = P(i + 2);
      d += " C" + fx(p1[0] + (p2[0] - p0[0]) / 6) + " " + fx(p1[1] + (p2[1] - p0[1]) / 6) + " " +
        fx(p2[0] - (p3[0] - p1[0]) / 6) + " " + fx(p2[1] - (p3[1] - p1[1]) / 6) + " " + fx(p2[0]) + " " + fx(p2[1]);
    }
    return closed ? d + "Z" : d;
  }
  // Shape point generators (any coordinate system).
  function ellipsePts(cx, cy, rx, ry, opts) {
    opts = opts || {};
    var a0 = opts.a0 != null ? opts.a0 : -2.1, over = opts.over != null ? opts.over : 0.28;
    var n = opts.n || 28, out = [];
    for (var i = 0; i <= n; i++) {
      var a = a0 + ((PI * 2 + over) * i) / n;
      var k = 1 + (i / n) * (opts.spiral != null ? opts.spiral : 0.03);
      out.push([cx + Math.cos(a) * rx * k, cy + Math.sin(a) * ry * k]);
    }
    return out;
  }
  function ringPts(cx, cy, rx, ry, n) {
    var out = [];
    n = n || 28;
    for (var i = 0; i < n; i++) { var a = (i / n) * PI * 2; out.push([cx + Math.cos(a) * rx, cy + Math.sin(a) * ry]); }
    return out;
  }
  function arcPts(cx, cy, rx, ry, a0, a1, n) {
    var out = [];
    n = n || Math.max(6, Math.round(Math.abs(a1 - a0) / 12));
    for (var i = 0; i <= n; i++) { var a = (a0 + ((a1 - a0) * i) / n) * D2R; out.push([cx + Math.cos(a) * rx, cy + Math.sin(a) * ry]); }
    return out;
  }
  function bezPts(x0, y0, x1, y1, x2, y2, x3, y3, n) {
    var out = [];
    n = n || 14;
    for (var i = 0; i <= n; i++) {
      var t = i / n, m = 1 - t;
      out.push([m * m * m * x0 + 3 * m * m * t * x1 + 3 * m * t * t * x2 + t * t * t * x3, m * m * m * y0 + 3 * m * m * t * y1 + 3 * m * t * t * y2 + t * t * t * y3]);
    }
    return out;
  }
  function quadPts(x0, y0, cx, cy, x1, y1, n) {
    var out = [];
    n = n || 12;
    for (var i = 0; i <= n; i++) {
      var t = i / n, m = 1 - t;
      out.push([m * m * x0 + 2 * m * t * cx + t * t * x1, m * m * y0 + 2 * m * t * cy + t * t * y1]);
    }
    return out;
  }
  /** Scalloped cloud outline (thought bubbles, clouds). */
  function cloudPts(cx, cy, rx, ry, bumps, depth) {
    var out = [], n = Math.max(5, bumps || 9) * 8;
    depth = depth == null ? 0.13 : depth;
    for (var i = 0; i < n; i++) {
      var a = (i / n) * PI * 2;
      var k = 1 + depth * (Math.abs(Math.sin((a * (bumps || 9)) / 2)) - 0.6);
      out.push([cx + Math.cos(a) * rx * k, cy + Math.sin(a) * ry * k]);
    }
    return out;
  }
  function flat(a) { var out = []; for (var i = 0; i + 1 < a.length; i += 2) out.push([a[i], a[i + 1]]); return out; }
  S.pen = { wobble: wobble, path: dPath, ellipse: ellipsePts, ring: ringPts, arc: arcPts, bezier: bezPts, cloud: cloudPts, resample: resample };

  // ───────────────────────── text measuring / layout ─────────────────────────
  var mctx = null;
  function measure(s, size) {
    if (!mctx) { try { mctx = document.createElement("canvas").getContext("2d"); } catch (e) { mctx = null; } }
    if (!mctx) return str(s).length * size * 0.56;
    mctx.font = size.toFixed(2) + "px " + FONT;
    return mctx.measureText(str(s)).width;
  }
  S.measureText = measure;
  function tokenize(text) {
    var out = [];
    var prevEnd = true; // previous part ended in whitespace → next word is not glued to it
    str(text).replace(/\r/g, "").split(/(\*[^*\n]+\*)/g).forEach(function (part) {
      if (!part) return;
      var em = part.length > 2 && part[0] === "*" && part[part.length - 1] === "*";
      if (em) part = part.slice(1, -1);
      var glue = !prevEnd && !/^\s/.test(part);
      part.split(/(\n)/).forEach(function (seg) {
        if (seg === "\n") { out.push({ br: true }); glue = false; return; }
        seg.split(/\s+/).forEach(function (w) { if (w) { out.push({ w: w, em: em, glue: glue && out.length > 0 }); glue = false; } });
      });
      prevEnd = /\s$/.test(part);
    });
    return out;
  }
  function splitLong(tok, size, maxW) {
    var parts = [], cur = "";
    for (var i = 0; i < tok.w.length; i++) {
      var c = tok.w[i];
      if (cur && measure(cur + c + "-", size) > maxW) { parts.push({ w: cur + "-", em: tok.em }); cur = c; }
      else cur += c;
    }
    if (cur) parts.push({ w: cur, em: tok.em });
    return parts;
  }
  function wrap(toks, size, maxW, breakLong) {
    var lines = [], cur = [], curW = 0, sp = measure(" ", size);
    function push() { lines.push({ toks: cur, w: curW }); cur = []; curW = 0; }
    var list = [];
    toks.forEach(function (t) {
      if (!t.br && breakLong && measure(t.w, size) > maxW) list = list.concat(splitLong(t, size, maxW));
      else list.push(t);
    });
    list.forEach(function (t) {
      if (t.br) { push(); return; }
      var w = measure(t.w, size);
      if (cur.length && !t.glue && curW + sp + w > maxW) push();
      curW += (cur.length && !t.glue ? sp : 0) + w;
      cur.push(t);
    });
    if (cur.length) push();
    return lines;
  }
  /** Fit text into maxWidth × maxLines by shrinking (then hyphenating very long words). */
  function layoutText(text, o) {
    var toks = tokenize(text);
    var size = o.size, minSize = o.minSize || Math.max(u(15), o.size * 0.42), maxW = Math.max(u(40), o.maxWidth), maxLines = Math.max(1, o.maxLines || 3);
    var lines = [], ok = false;
    for (var it = 0; it < 40; it++) {
      lines = wrap(toks, size, maxW, false);
      var widest = 0;
      lines.forEach(function (l) { widest = Math.max(widest, l.w); });
      ok = lines.length <= maxLines && widest <= maxW + 0.5;
      if (ok || size <= minSize) break;
      size = Math.max(minSize, size * 0.93);
    }
    if (!ok) {
      lines = wrap(toks, size, maxW, true);
      if (lines.length > maxLines) {
        lines = lines.slice(0, maxLines);
        var L = lines[maxLines - 1];
        L.toks = L.toks.slice();
        while (L.toks.length > 1 && measure(L.toks.map(function (t) { return t.w; }).join(" ") + "…", size) > maxW) L.toks.pop();
        if (L.toks.length) L.toks[L.toks.length - 1] = { w: L.toks[L.toks.length - 1].w + "…", em: L.toks[L.toks.length - 1].em };
        L.w = measure(L.toks.map(function (t) { return t.w; }).join(" "), size);
      }
    }
    var lh = size * (o.lineHeight || 1.22), w = 0;
    lines.forEach(function (l) {
      w = Math.max(w, l.w);
      var runs = [];
      l.toks.forEach(function (t, i) {
        var last = runs[runs.length - 1];
        var gap = i && !t.glue ? " " : "";
        if (last && last.em === t.em) last.t += gap + t.w;
        else runs.push({ t: gap + t.w, em: t.em });
      });
      l.runs = runs;
      l.chars = l.toks.reduce(function (a, t) { return a + t.w.length + 1; }, 0);
    });
    return { size: size, lines: lines, w: w, h: lines.length * lh, lh: lh };
  }
  S.layoutText = layoutText;

  // ───────────────────────── scene ─────────────────────────
  var current = null;
  function Scene(root, opts) {
    opts = opts || {};
    current = this;
    root = root || V.root();
    root.innerHTML = "";
    root.className = "sfd";
    root.removeAttribute("style");
    if (opts.paper && opts.paper !== "plain") root.classList.add("sfd-paper-" + opts.paper);
    this.root = root;
    var W = (this.W = V.width), H = (this.H = V.height);
    this.portrait = V.isPortrait;
    this.square = V.isSquare;
    this.landscape = V.isLandscape;
    this.mx = W * (this.portrait ? 0.08 : 0.07);
    this.my = H * (this.portrait ? 0.06 : 0.08);
    el("div.sfd-paper", { parent: root });
    var svg = (this.svg = svgEl("svg", { class: "sfd-svg", viewBox: "0 0 " + W + " " + H, width: W, height: H }, root));
    this.defs = svgEl("defs", null, svg);
    this.cam = g(svg, { class: "sfd-cam" });
    this.layers = { back: g(this.cam), mid: g(this.cam), figs: g(this.cam), front: g(this.cam) };
    this.hud = this.layers.hud = g(svg, { class: "sfd-hud" });
    this.strokes = [];
    this.pieces = [];
    this.figs = [];
    this.extras = [];
    this.camKeys = [];
    this.camBase = { cx: W / 2, cy: H / 2, z: 1 };
    this.drift = num(opts.drift, 0.02);
    this.cursor = 0.3;
    this.seedN = (num(V.seed, 1) % 997) + 3;
    this.uidN = 0;
    this.pen = u(num(opts.pen, 4.6));
    this.amp = u(2.3);
    this.boilAmp = u(0.85);
    this.lastCam = "";
    var self = this;
    V.onFrame(function (t) { self.frame(t); });
  }
  Scene.prototype.nextSeed = function () { this.seedN += 1; return this.seedN * 1.618 + 0.5; };
  Scene.prototype.uid = function (p) { this.uidN += 1; return "sfd-" + (p || "x") + this.uidN; };
  /** Auto-cursor: the next drawing without `at` starts here. */
  Scene.prototype.take = function (at, dur) {
    var t = at == null ? this.cursor : clampT(at);
    this.cursor = Math.max(this.cursor, t + (dur || 0) + 0.1);
    return t;
  };
  Scene.prototype.frame = function (t) {
    var k = Math.floor(t * BOIL + 1e-6) % 3, i;
    this.t = t;
    this.k = k;
    for (i = 0; i < this.figs.length; i++) this.figs[i].update(t, k);
    for (i = 0; i < this.pieces.length; i++) this.pieces[i].update(t, k);
    for (i = 0; i < this.strokes.length; i++) updStroke(this.strokes[i], t, k);
    for (i = 0; i < this.extras.length; i++) this.extras[i](t, k);
    var c = this.camState(t);
    var tf = "translate(" + fx(this.W / 2) + " " + fx(this.H / 2) + ") scale(" + c.z.toFixed(5) + ") translate(" + (-c.cx).toFixed(2) + " " + (-c.cy).toFixed(2) + ")";
    if (tf !== this.lastCam) { this.cam.setAttribute("transform", tf); this.lastCam = tf; }
  };
  // camera ------------------------------------------------------------
  Scene.prototype.camState = function (t) {
    var st = { cx: this.camBase.cx, cy: this.camBase.cy, z: this.camBase.z };
    for (var i = 0; i < this.camKeys.length; i++) {
      var k = this.camKeys[i];
      if (t <= k.at) break;
      var p = easeFn(k.ease)(clamp((t - k.at) / k.dur, 0, 1));
      st = { cx: lerp(st.cx, k.cx, p), cy: lerp(st.cy, k.cy, p), z: Math.exp(lerp(Math.log(st.z), Math.log(k.z), p)) };
    }
    st.z *= 1 + this.drift * clamp(t / Math.max(1, D()), 0, 1);
    return st;
  };
  /** Move the camera to look at (cx, cy) with zoom z (1 = whole frame). */
  Scene.prototype.camTo = function (o, at, dur, ease) {
    var prev = this.camKeys.length ? this.camKeys[this.camKeys.length - 1] : this.camBase;
    this.camKeys.push({ at: clampT(at), dur: Math.max(0.01, num(dur, 1)), cx: num(o.cx != null ? o.cx : o.x, prev.cx), cy: num(o.cy != null ? o.cy : o.y, prev.cy), z: Math.max(0.0005, num(o.z != null ? o.z : o.zoom, prev.z)), ease: ease || "inOutCubic" });
    this.camKeys.sort(function (a, b) { return a.at - b.at; });
    return this;
  };
  /** Frame a world rect {x,y,w,h} (with margin fraction). */
  Scene.prototype.camFrame = function (r, at, dur, ease, margin) {
    var m = margin == null ? 0.12 : margin;
    var z = Math.min(this.W / (r.w * (1 + m * 2)), this.H / (r.h * (1 + m * 2)));
    return this.camTo({ cx: r.x + r.w / 2, cy: r.y + r.h / 2, z: z }, at, dur, ease);
  };
  Scene.prototype.camSet = function (o) {
    this.camBase = { cx: num(o.cx, this.W / 2), cy: num(o.cy, this.H / 2), z: num(o.z, 1) };
    return this;
  };

  // strokes -------------------------------------------------------------
  function updStroke(s, t, k) {
    var p = s.dur > 0 ? clamp((t - s.t0) / s.dur, 0, 1) : t >= s.t0 ? 1 : 0;
    if (s.el) {
      if (p <= 0) {
        if (s.vis !== 0) { s.el.style.visibility = "hidden"; s.vis = 0; }
      } else {
        if (s.vis !== 1) { s.el.style.visibility = "visible"; s.vis = 1; }
        var pq = Math.round(p * 1000) / 1000;
        if (pq !== s.lp) { s.el.setAttribute("stroke-dasharray", pq >= 1 ? "none" : pq + " 2"); s.lp = pq; }
        var kk = s.d.length > 1 ? k : 0;
        if (kk !== s.lk) { s.el.setAttribute("d", s.d[kk]); s.lk = kk; }
      }
    }
    if (s.fill) {
      var o = clamp((t - s.fill.t) / 0.22, 0, 1) * s.fill.op;
      o = Math.round(o * 100) / 100;
      if (o !== s.fill.lo) { s.fill.el.setAttribute("opacity", o); s.fill.el.style.visibility = o > 0 ? "visible" : "hidden"; s.fill.lo = o; }
    }
  }

  // ───────────────────────── Piece: a movable group of hand-drawn strokes ─────────────────────────
  function Piece(sc, o) {
    o = o || {};
    this.sc = sc;
    this.x = num(o.x, 0);
    this.y = num(o.y, 0);
    this.s = num(o.s, 1) || 1;
    this.rot = num(o.rot, 0);
    this.flip = !!o.flip;
    this.ws = num(o.ws, 1); // stroke-width scale (world)
    this.g = g(o.parent || sc.layers[o.layer || "mid"], o.cls ? { class: o.cls } : null);
    this.keys = [];
    this.ops = [];
    this.follow = null;
    this.from = o.from != null ? o.from : -1;
    this.jit = !!o.jit;
    this.seed = sc.nextSeed();
    this.n = 0;
    this.bb = [Infinity, Infinity, -Infinity, -Infinity];
    this.lt = null;
    this.lo = null;
    this.ld = null;
    sc.pieces.push(this);
  }
  Piece.prototype.state = function (t) {
    var st = { x: this.x, y: this.y, s: this.s, rot: this.rot };
    for (var i = 0; i < this.keys.length; i++) {
      var k = this.keys[i];
      if (t <= k.at) break;
      var p = easeFn(k.ease)(clamp((t - k.at) / k.dur, 0, 1));
      if (k.x != null) st.x = lerp(st.x, k.x, p);
      if (k.y != null) st.y = lerp(st.y, k.y, p);
      if (k.s != null) st.s = lerp(st.s, k.s, p);
      if (k.rot != null) st.rot = lerp(st.rot, k.rot, p);
    }
    if (this.follow) {
      var f = this.follow(t);
      if (f) { st.x = f.x; st.y = f.y; if (f.rot != null) st.rot = f.rot; }
    }
    return st;
  };
  Piece.prototype.to = function (props, at, dur, ease) {
    this.keys.push({ at: clampT(at), dur: Math.max(0.01, num(dur, 0.6)), x: props.x, y: props.y, s: props.s, rot: props.rot, ease: ease || "inOutCubic" });
    this.keys.sort(function (a, b) { return a.at - b.at; });
    return this;
  };
  Piece.prototype.fade = function (to, at, dur) {
    this.ops.push({ at: clampT(at), dur: Math.max(0.01, num(dur, 0.35)), to: to });
    this.ops.sort(function (a, b) { return a.at - b.at; });
    return this;
  };
  Piece.prototype.opacity = function (t) {
    var o = 1;
    for (var i = 0; i < this.ops.length; i++) {
      var k = this.ops[i];
      if (t <= k.at) break;
      o = lerp(o, k.to, sm((t - k.at) / k.dur));
    }
    return Math.round(o * 100) / 100;
  };
  Piece.prototype.update = function (t, k) {
    var st = this.state(t);
    var jx = 0, jy = 0;
    if (this.jit) { jx = (hash01(k * 3.1 + this.seed) - 0.5) * u(1.4); jy = (hash01(k * 5.7 + this.seed) - 0.5) * u(1.4); }
    var tf = "translate(" + fx(st.x + jx) + " " + fx(st.y + jy) + ")" + (st.rot ? " rotate(" + fx(st.rot) + ")" : "") + (st.s !== 1 || this.flip ? " scale(" + (this.flip ? -st.s : st.s).toFixed(4) + " " + st.s.toFixed(4) + ")" : "");
    if (tf !== this.lt) { this.g.setAttribute("transform", tf); this.lt = tf; }
    var o = this.opacity(t);
    var hide = t < this.from || o <= 0.001;
    if (hide !== this.ld) { this.g.style.display = hide ? "none" : ""; this.ld = hide; }
    if (o !== this.lo) { this.g.setAttribute("opacity", o); this.lo = o; }
    if (this.onUpdate) this.onUpdate(t, k);
  };
  /** Add one stroke spec {p, closed, sharp, color, w, fill, amp, hatch} drawn over [t0, t0+dur]. */
  Piece.prototype.add = function (spec, t0, dur, parent) {
    var sc = this.sc, s = this.s, i;
    var pts = spec.p || [];
    for (i = 0; i < pts.length; i++) {
      this.bb[0] = Math.min(this.bb[0], pts[i][0]); this.bb[1] = Math.min(this.bb[1], pts[i][1]);
      this.bb[2] = Math.max(this.bb[2], pts[i][0]); this.bb[3] = Math.max(this.bb[3], pts[i][1]);
    }
    if (pts.length < 1) return null;
    parent = parent || this.g;
    this.n += 1;
    var seed = this.seed * 7.13 + this.n * 3.71;
    var ws = this.ws * num(spec.w, 1);
    var amp = (sc.amp * num(spec.amp, 1) * Math.min(1.6, Math.max(0.5, this.ws))) / s, wl = (u(70) * this.ws) / s;
    var base = amp > 0 ? wobble(resample(pts, (u(22) * this.ws) / s, spec.closed), seed, amp, wl, spec.closed) : pts;
    var st = { t0: t0, dur: Math.max(0, dur), lp: -1, lk: -1, vis: -1, d: [] };
    var boil = spec.boil !== false && amp > 0;
    for (var k = 0; k < (boil ? 3 : 1); k++) st.d.push(dPath(boil ? wobble(base, seed + 31 * (k + 1), (sc.boilAmp * Math.min(1.5, this.ws)) / s, wl * 0.4, spec.closed) : base, spec.closed, spec.sharp));
    if (spec.fill) {
      var fp = spec.fp || base;
      var fe = svgEl("path", { d: dPath(fp, true, spec.sharp), fill: colorOf(spec.fill), stroke: "none", opacity: 0 }, parent);
      fe.style.visibility = "hidden";
      st.fill = { el: fe, t: t0 + dur * 0.85, op: num(spec.fillOpacity, 1), lo: -1 };
    }
    if (spec.hatch) this.hatch(spec, t0 + dur * 0.9, num(spec.hatchDur, Math.max(0.25, dur * 0.8)), parent);
    if (!spec.noStroke) {
      st.el = svgEl("path", { fill: "none", stroke: colorOf(spec.color), "stroke-width": ((sc.pen * ws) / s).toFixed(3), "stroke-linecap": "round", "stroke-linejoin": "round", pathLength: 1, d: st.d[0] }, parent);
      st.el.style.visibility = "hidden";
    }
    sc.strokes.push(st);
    return st;
  };
  /** Scribbled zig-zag hatching clipped to a closed shape. */
  Piece.prototype.hatch = function (spec, t0, dur, parent) {
    var sc = this.sc, s = this.s, pts = spec.p;
    var b = [Infinity, Infinity, -Infinity, -Infinity];
    pts.forEach(function (q) { b[0] = Math.min(b[0], q[0]); b[1] = Math.min(b[1], q[1]); b[2] = Math.max(b[2], q[0]); b[3] = Math.max(b[3], q[1]); });
    var id = sc.uid("clip");
    var cp = svgEl("clipPath", { id: id }, sc.defs);
    svgEl("path", { d: dPath(pts, true, spec.sharp) }, cp);
    var holder = g(parent || this.g, { "clip-path": "url(#" + id + ")" });
    var gap = (num(spec.gap, 15) * this.ws * u(1)) / s;
    var w = b[2] - b[0], h = b[3] - b[1];
    var zz = [], n = Math.ceil((w + h) / gap) + 2;
    for (var i = 0; i < n; i++) {
      var d = i * gap;
      // diagonal lines at 45°, alternating direction (one continuous scribble)
      var a = [b[0] + d - h, b[3]], c = [b[0] + d, b[1]];
      if (i % 2) zz.push(a, c); else zz.push(c, a);
    }
    // keep segments short enough
    var save = this.n, bb = this.bb.slice();
    this.add({ p: zz, sharp: true, color: spec.hatch === true ? spec.color : spec.hatch, w: num(spec.hatchW, 0.55), amp: 0.25, boil: false }, t0, dur, holder);
    this.n = save + 1;
    this.bb = bb;
  };
  /** Draw a list of specs one after another, splitting `dur` by stroke length. Returns {t0,t1}. */
  Piece.prototype.draw = function (specs, at, dur, opts) {
    opts = opts || {};
    var self = this, tot = 0;
    var lens = specs.map(function (sp) { var L = sp.noStroke ? 0 : polyLen(sp.p || [], sp.closed) * self.s; tot += L; return L; });
    if (dur == null) dur = clamp(tot / (u(1700) * (opts.speed || 1) * Math.max(0.6, Math.min(2, this.ws))), 0.35, 2.6);
    var t = at, gapT = specs.length > 1 ? Math.min(0.05, dur * 0.04) : 0;
    var avail = Math.max(0.05, dur - gapT * (specs.length - 1));
    specs.forEach(function (sp, i) {
      var d = tot > 0 ? (avail * lens[i]) / tot : 0;
      self.add(sp, t, d);
      t += d + (lens[i] > 0 ? gapT : 0);
    });
    this.t0 = Math.min(num(this.t0, at), at);
    this.t1 = Math.max(num(this.t1, 0), at + dur);
    if (this.from < 0 || this.from > at) this.from = at;
    return { t0: at, t1: at + dur };
  };
  /** World bbox of what has been drawn (ignores rotation). */
  Piece.prototype.box = function () {
    var b = this.bb, s = this.s;
    if (!isFinite(b[0])) return { x: this.x, y: this.y, w: 0, h: 0, cx: this.x, cy: this.y };
    var x0 = this.flip ? this.x - b[2] * s : this.x + b[0] * s, x1 = this.flip ? this.x - b[0] * s : this.x + b[2] * s;
    var r = { x: x0, y: this.y + b[1] * s, w: x1 - x0, h: (b[3] - b[1]) * s };
    r.cx = r.x + r.w / 2;
    r.cy = r.y + r.h / 2;
    return r;
  };
  function item(piece, t0, t1, extra) {
    var b = piece.box();
    var it = { x: b.x, y: b.y, w: b.w, h: b.h, cx: b.cx, cy: b.cy, t0: t0, t1: t1, end: t1, piece: piece };
    if (extra) for (var k in extra) it[k] = extra[k];
    return it;
  }
  S.Piece = Piece;
  S.Scene = Scene;

  // ───────────────────────── hand-lettered text ─────────────────────────
  /**
   * Text block written on letter by letter (per-line wipe). o: x, y, anchor (center|left|right|top|
   * top-left|top-right|bottom|bottom-left|bottom-right), align, size, maxWidth, maxLines, color, em,
   * at, dur, speed, rot, layer, weight ("bold"), caps, lineHeight, until (fade out).
   */
  function writeText(sc, text, o) {
    o = o || {};
    var raw = str(text);
    if (o.caps) raw = raw.toUpperCase();
    var size = num(o.size, u(54));
    var maxW = num(o.maxWidth, sc.W * 0.8);
    var L = layoutText(raw, { size: size, maxWidth: maxW, maxLines: num(o.maxLines, 3), minSize: o.minSize, lineHeight: o.lineHeight });
    var anchor = str(o.anchor || "center");
    var hx = /left/.test(anchor) ? "left" : /right/.test(anchor) ? "right" : "center";
    var vy = /^top/.test(anchor) ? "top" : /^bottom/.test(anchor) ? "bottom" : "middle";
    var align = o.align || hx;
    var x = num(o.x, sc.W / 2), y = num(o.y, sc.H / 2);
    var left = hx === "left" ? 0 : hx === "right" ? -L.w : -L.w / 2;
    var top = vy === "top" ? 0 : vy === "bottom" ? -L.h : -L.h / 2;
    var chars = 0;
    L.lines.forEach(function (l) { chars += l.chars; });
    var dur = o.dur != null ? o.dur : clamp(chars / (27 * (o.speed || 1)), 0.3, 2.4);
    var at = sc.take(o.at, dur);
    var pc = new Piece(sc, { x: x, y: y, rot: o.rot, layer: o.layer, parent: o.parent, cls: "sfd-text", jit: o.jitter !== false, from: at });
    var id = sc.uid("tclip");
    var cp = svgEl("clipPath", { id: id }, sc.defs);
    var inner = g(pc.g, { "clip-path": "url(#" + id + ")" });
    var color = colorOf(o.color, INK), em = colorOf(o.em || "accent", ACC);
    var rects = [], tcur = at, pad = L.size * 0.35;
    L.lines.forEach(function (l, i) {
      var lx = align === "left" ? left : align === "right" ? left + L.w - l.w : left + (L.w - l.w) / 2;
      var ly = top + i * L.lh;
      var t = svgEl("text", { x: fx(lx), y: fx(ly + L.lh * 0.5 + L.size * 0.34), "font-size": fx(L.size), fill: color }, inner);
      if (o.weight) t.setAttribute("font-weight", o.weight);
      l.runs.forEach(function (r) {
        var ts = svgEl("tspan", r.em ? { fill: em } : null, t);
        ts.textContent = r.t;
      });
      var padT = i === 0 ? pad : 0, padB = i === L.lines.length - 1 ? pad : 0; // lines must not reveal their neighbours
      var rr = svgEl("rect", { x: fx(lx - pad), y: fx(ly - padT), width: 0, height: fx(L.lh + padT + padB) }, cp);
      var ld = chars > 0 ? (dur * l.chars) / chars : dur;
      rects.push({ el: rr, t0: tcur, dur: ld, w: l.w + pad * 2, lw: -1 });
      tcur += ld;
    });
    pc.onUpdate = function (tt) {
      for (var i = 0; i < rects.length; i++) {
        var r = rects[i];
        var p = clamp((tt - r.t0) / Math.max(0.01, r.dur), 0, 1);
        var w = Math.round(r.w * p * 10) / 10;
        if (w !== r.lw) { r.el.setAttribute("width", w); r.lw = w; }
      }
    };
    if (o.until != null) pc.fade(0, o.until, 0.35);
    pc.t0 = at;
    pc.t1 = at + dur;
    var cosr = Math.cos(num(o.rot, 0) * D2R), sinr = Math.sin(num(o.rot, 0) * D2R);
    var bx = x + left, by = y + top, bw = L.w, bh = L.h;
    if (Math.abs(sinr) > 0.5) { // rotated ~90°: swap the box around the anchor
      bw = L.h; bh = L.w; bx = x - bw / 2; by = y - bh / 2;
    }
    var it = { x: bx, y: by, w: bw, h: bh, cx: bx + bw / 2, cy: by + bh / 2, t0: at, t1: at + dur, end: at + dur, piece: pc, size: L.size, lines: L.lines.length, layout: L };
    void cosr;
    return it;
  }

  // ───────────────────────── cast ─────────────────────────
  var CAST = {
    pip: { name: "Pip", look: "tuft", about: "everyman narrator, a single curly hair tuft" },
    ada: { name: "Ada", look: "glasses", about: "the expert: round glasses and a hair bun" },
    hank: { name: "Hank", look: "hat", about: "the skeptic: a black bowler hat" },
    juno: { name: "Juno", look: "ponytail", about: "the curious one: a swinging ponytail" },
    remy: { name: "Remy", look: "beret", about: "the dreamer / ideas person: a tilted beret" },
    anon: { name: "Anon", look: null, about: "featureless extra for crowds and examples" },
  };
  var CAST_IDS = Object.keys(CAST);
  function castId(n) {
    var k = str(n).toLowerCase().trim();
    return CAST[k] ? k : "pip";
  }
  S.CAST = CAST;

  // ───────────────────────── poses ─────────────────────────
  // Angles in degrees measured from straight down; positive = towards the facing direction.
  // a = front arm [upper, fore], b = back arm, la/lb = legs [thigh, shin]. lean/tilt: torso/head.
  // drop: hip lowered by this fraction of height. expr: default face.
  var POSES = {
    stand: { lean: 0, tilt: 0, a: [12, 6], b: [-12, -6], la: [7, 3], lb: [-7, -3], drop: 0, expr: "neutral" },
    talk: { lean: 2, tilt: -2, a: [32, 78], b: [-10, -4], la: [7, 3], lb: [-7, -3], drop: 0, expr: "smile", gesture: 1 },
    explain: { lean: 3, tilt: 0, a: [48, 108], b: [-14, 22], la: [7, 3], lb: [-7, -3], drop: 0, expr: "smile", gesture: 1 },
    point: { lean: 4, tilt: 0, a: [86, 90], b: [-12, -6], la: [8, 3], lb: [-8, -3], drop: 0, expr: "neutral" },
    "point-up": { lean: -2, tilt: -8, a: [148, 168], b: [-12, -6], la: [7, 3], lb: [-7, -3], drop: 0, expr: "smile" },
    "point-down": { lean: 8, tilt: 10, a: [52, 34], b: [-12, -6], la: [7, 3], lb: [-7, -3], drop: 0, expr: "neutral" },
    shrug: { lean: 0, tilt: 12, a: [28, 112], b: [-28, -112], la: [7, 3], lb: [-7, -3], drop: 0, expr: "flat" },
    wave: { lean: -1, tilt: -4, a: [140, 172], b: [-12, -6], la: [7, 3], lb: [-7, -3], drop: 0, expr: "smile", wave: 1 },
    think: { lean: -2, tilt: -12, a: [16, 162], b: [24, 88], la: [7, 3], lb: [-7, -3], drop: 0, expr: "flat" },
    panic: { lean: -4, tilt: -6, a: [152, 118], b: [-152, -118], la: [14, 2], lb: [-14, -2], drop: 0, expr: "scream", shake: 1 },
    celebrate: { lean: -3, tilt: -10, a: [152, 172], b: [-152, -172], la: [9, 3], lb: [-9, -3], drop: 0, expr: "grin" },
    sad: { lean: 14, tilt: 24, a: [3, -2], b: [-3, -6], la: [5, 3], lb: [-5, -3], drop: 0.01, expr: "frown" },
    facepalm: { lean: 7, tilt: 20, a: [24, 168], b: [-6, -3], la: [7, 3], lb: [-7, -3], drop: 0, expr: "frown" },
    hold: { lean: 1, tilt: 4, a: [62, 100], b: [52, 96], la: [7, 3], lb: [-7, -3], drop: 0, expr: "smile" },
    crossed: { lean: -3, tilt: -3, a: [20, 96], b: [14, 88], la: [8, 3], lb: [-8, -3], drop: 0, expr: "flat" },
    smug: { lean: -8, tilt: -8, a: [20, 96], b: [14, 88], la: [10, 3], lb: [-8, -3], drop: 0, expr: "smirk" },
    "mind-blown": { lean: -4, tilt: -6, a: [128, 212], b: [-128, -212], la: [10, 2], lb: [-10, -2], drop: 0, expr: "o" },
    sit: { lean: -6, tilt: 0, a: [36, 58], b: [-24, -30], la: [86, 74], lb: [80, 66], drop: 0.43, expr: "neutral" },
    crouch: { lean: 18, tilt: 4, a: [40, 24], b: [-28, -40], la: [52, -18], lb: [34, -36], drop: 0.11, expr: "neutral" },
    jump: { lean: -4, tilt: -8, a: [150, 160], b: [-140, -150], la: [62, -20], lb: [40, -42], drop: 0, expr: "grin" },
    fallen: { lean: 0, tilt: 0, a: [118, 140], b: [-60, -96], la: [20, 10], lb: [-10, -22], drop: 0, expr: "dizzy" },
    listen: { lean: 4, tilt: 6, a: [10, 4], b: [-10, -4], la: [7, 3], lb: [-7, -3], drop: 0, expr: "neutral" },
    walk: { lean: 4, tilt: 0, a: [12, 6], b: [-12, -6], la: [7, 3], lb: [-7, -3], drop: 0, expr: "smile" },
    run: { lean: 14, tilt: 0, a: [30, 80], b: [-30, 20], la: [7, 3], lb: [-7, -3], drop: 0, expr: "grin" },
    present: { lean: 0, tilt: -4, a: [70, 120], b: [-60, -110], la: [8, 3], lb: [-8, -3], drop: 0, expr: "smile" },
  };
  var POSE_KEYS = ["lean", "tilt", "drop", "gesture", "wave", "shake"];
  S.POSES = POSES;
  function poseOf(n) { return POSES[str(n).toLowerCase()] || POSES.stand; }

  var EXPR = {
    neutral: { mouth: "neutral", eyes: "dot" },
    smile: { mouth: "smile", eyes: "dot" },
    grin: { mouth: "grin", eyes: "happy" },
    frown: { mouth: "frown", eyes: "dot", brows: "sad" },
    flat: { mouth: "flat", eyes: "dot" },
    o: { mouth: "o", eyes: "wide", brows: "up" },
    surprised: { mouth: "o", eyes: "wide", brows: "up" },
    scream: { mouth: "scream", eyes: "wide", brows: "worried" },
    smirk: { mouth: "smirk", eyes: "dot", brows: "smug" },
    worried: { mouth: "wavy", eyes: "dot", brows: "worried" },
    angry: { mouth: "frown", eyes: "dot", brows: "angry" },
    dizzy: { mouth: "wavy", eyes: "x" },
    sleepy: { mouth: "flat", eyes: "closed" },
  };
  S.EXPRESSIONS = EXPR;

  // ───────────────────────── Figure ─────────────────────────
  /**
   * A rigged stick figure. o: x (feet centre), y (ground line), h (height), facing ("right"|"left"|
   * "front"), pose, expr, at (draw-in start), drawDur, layer, ws (stroke scale).
   */
  function Figure(sc, name, o) {
    o = o || {};
    this.sc = sc;
    this.id = castId(name);
    this.cast = CAST[this.id];
    this.x = num(o.x, sc.W / 2);
    this.y = num(o.y, sc.H * 0.85);
    this.h = Math.max(u(40), num(o.h, sc.H * 0.4));
    var f = parseFace(o.facing);
    this.f0 = f.f;
    this.front0 = f.front;
    this.seed = sc.nextSeed();
    this.poseKeys = [];
    this.pose0 = poseOf(o.pose || "stand");
    this.expr0 = EXPR[o.expr] ? o.expr : null;
    this.exprKeys = [];
    this.faceKeys = [];
    this.moves = [];
    this.jumps = [];
    this.falls = [];
    this.talks = [];
    this.outs = [];
    this.drawAt = sc.take(o.at, 0.3);
    this.drawDur = num(o.drawDur, 0.9);
    this.ws = num(o.ws, clamp(this.h / u(430), 0.55, 1.25));
    this.g = g(sc.layers[o.layer || "figs"], { class: "sfd-fig" });
    this.paths = {};
    var self = this;
    ["head", "body", "legA", "legB", "armA", "armB", "acc1", "acc2", "eyes", "mouth", "brows"].forEach(function (k) {
      var fill = k === "eyes" || k === "acc2" ? INK : "none";
      var p = svgEl("path", { fill: fill, stroke: INK, "stroke-width": (sc.pen * self.ws * (k === "eyes" || k === "brows" || k === "mouth" ? 0.75 : 1)).toFixed(2), "stroke-linecap": "round", "stroke-linejoin": "round", pathLength: k === "eyes" || k === "acc2" ? null : 1 }, self.g);
      if (k === "eyes" || k === "acc2") p.setAttribute("stroke-width", (sc.pen * self.ws * 0.35).toFixed(2));
      self.paths[k] = p;
    });
    this.paths.mouth.setAttribute("fill", "none");
    this.cache = { t: -1, r: null };
    this.lc = {};
    sc.figs.push(this);
  }
  function parseFace(v) {
    if (v === -1 || v === "left") return { f: -1, front: false };
    if (v === "front" || v === 0) return { f: 1, front: true };
    return { f: 1, front: false };
  }
  // --- scheduling API (all chainable) ---
  Figure.prototype.pose = function (name, at, dur) {
    this.poseKeys.push({ at: clampT(at), dur: Math.max(0.05, num(dur, 0.35)), pose: poseOf(name), name: str(name) });
    this.poseKeys.sort(function (a, b) { return a.at - b.at; });
    return this;
  };
  Figure.prototype.expr = function (name, at) {
    if (EXPR[name]) { this.exprKeys.push({ at: clampT(at), expr: name }); this.exprKeys.sort(function (a, b) { return a.at - b.at; }); }
    return this;
  };
  Figure.prototype.face = function (dir, at) {
    var f = parseFace(dir);
    this.faceKeys.push({ at: clampT(at), f: f.f, front: f.front });
    this.faceKeys.sort(function (a, b) { return a.at - b.at; });
    return this;
  };
  Figure.prototype.xAt = function (t) {
    var x = this.x;
    for (var i = 0; i < this.moves.length; i++) {
      var m = this.moves[i];
      if (t <= m.t0) break;
      x = lerp(m.x0, m.x1, V.ease.inOutSine(clamp((t - m.t0) / (m.t1 - m.t0), 0, 1)));
    }
    return x;
  };
  /** Walk to x starting at `at` (dur defaults from distance). */
  Figure.prototype.walkTo = function (x, at, dur, opts) {
    at = clampT(at);
    var x0 = this.xAt(at);
    var d = Math.abs(x - x0);
    if (d < 1) return this;
    dur = dur != null ? dur : clamp(d / (this.h * 1.15), 0.5, 4);
    this.moves.push({ t0: at, t1: at + Math.max(0.2, dur), x0: x0, x1: x, run: !!(opts && opts.run) });
    this.moves.sort(function (a, b) { return a.t0 - b.t0; });
    return this;
  };
  Figure.prototype.runTo = function (x, at, dur) { return this.walkTo(x, at, dur != null ? dur : clamp(Math.abs(x - this.xAt(clampT(at))) / (this.h * 2.4), 0.35, 2.5), { run: true }); };
  Figure.prototype.talk = function (t0, t1) { this.talks.push({ t0: num(t0, 0), t1: num(t1, D()) }); return this; };
  Figure.prototype.jump = function (at, height, dur) {
    this.jumps.push({ at: clampT(at), hgt: num(height, this.h * 0.35), dur: num(dur, 0.6) });
    return this;
  };
  Figure.prototype.fall = function (at, dur) { this.falls.push({ at: clampT(at), dur: num(dur, 0.7), up: null }); this.pose("fallen", clampT(at) + 0.05, 0.4); return this; };
  Figure.prototype.getUp = function (at) {
    var f = this.falls[this.falls.length - 1];
    if (f) { f.up = clampT(at); this.pose("stand", f.up, 0.4); }
    return this;
  };
  Figure.prototype.out = function (at, dur) { this.outs.push({ at: clampT(at), dur: num(dur, 0.4) }); return this; };
  Figure.prototype.drawIn = function (at, dur) { this.drawAt = clampT(at); if (dur != null) this.drawDur = dur; return this; };

  // --- evaluation ---
  Figure.prototype.poseAt = function (t) {
    var base = this.pose0, st = {}, i, k;
    st.a = base.a.slice(); st.b = base.b.slice(); st.la = base.la.slice(); st.lb = base.lb.slice();
    POSE_KEYS.forEach(function (n) { st[n] = base[n] || 0; });
    var exprT = -1, expr = this.expr0 || base.expr, name = "stand";
    for (i = 0; i < this.poseKeys.length; i++) {
      k = this.poseKeys[i];
      if (t < k.at) break;
      var p = EASE.pose((t - k.at) / k.dur), P = k.pose;
      for (var j = 0; j < 2; j++) {
        st.a[j] = lerp(st.a[j], P.a[j], p); st.b[j] = lerp(st.b[j], P.b[j], p);
        st.la[j] = lerp(st.la[j], P.la[j], p); st.lb[j] = lerp(st.lb[j], P.lb[j], p);
      }
      POSE_KEYS.forEach(function (n) { st[n] = lerp(st[n], P[n] || 0, Math.min(1, p)); });
      if (p > 0.3) { expr = P.expr; exprT = k.at; name = k.name; }
    }
    for (i = 0; i < this.exprKeys.length; i++) {
      k = this.exprKeys[i];
      if (t < k.at) break;
      if (k.at >= exprT) { expr = k.expr; }
    }
    st.expr = expr;
    st.name = name;
    return st;
  };
  Figure.prototype.faceAt = function (t) {
    var f = { f: this.f0, front: this.front0, at: -1 };
    for (var i = 0; i < this.faceKeys.length; i++) { var k = this.faceKeys[i]; if (t < k.at) break; f = { f: k.f, front: k.front, at: k.at }; }
    for (i = 0; i < this.moves.length; i++) {
      var m = this.moves[i];
      if (t < m.t0 || m.t0 < f.at) continue;
      f = { f: m.x1 >= m.x0 ? 1 : -1, front: t >= m.t1 + 0.5 && this.front0 && m.t0 > f.at ? f.front : false, at: m.t0 };
    }
    return f;
  };
  Figure.prototype.mouthOpen = function (t) {
    for (var i = 0; i < this.talks.length; i++) {
      var w = this.talks[i];
      if (t < w.t0 || t > w.t1) continue;
      var W = words();
      if (!W.length) return Math.abs(Math.sin(t * 11)) * 0.75 * (0.6 + 0.4 * Math.abs(Math.sin(t * 2.3)));
      var j = wordAt(t);
      if (j < 0) return 0;
      var wd = W[j], len = Math.max(0.08, wd.end - wd.start), q = (t - wd.start) / len;
      var syl = Math.max(1, Math.min(4, Math.round(len / 0.2)));
      return Math.abs(Math.sin(q * PI * syl)) * (0.55 + 0.45 * hash01(j * 1.37));
    }
    return 0;
  };
  Figure.prototype.isTalking = function (t) {
    for (var i = 0; i < this.talks.length; i++) if (t >= this.talks[i].t0 && t <= this.talks[i].t1) return true;
    return false;
  };
  /** Full rig at time t (pure; cached per t). */
  Figure.prototype.rig = function (t) {
    if (this.cache.t === t && this.cache.r) return this.cache.r;
    var h = this.h, P = this.poseAt(t), fa = this.faceAt(t), f = fa.f;
    var x = this.xAt(t), y = this.y;
    var lean = P.lean, tilt = P.tilt, drop = P.drop;
    var a = P.a.slice(), b = P.b.slice(), la = P.la.slice(), lb = P.lb.slice();
    var walkW = 0, phase = 0, i, run = false;
    for (i = 0; i < this.moves.length; i++) {
      var m = this.moves[i];
      if (t > m.t0 - 0.05 && t < m.t1 + 0.12) {
        walkW = Math.min(1, Math.min(t - m.t0 + 0.05, m.t1 + 0.12 - t) / 0.12);
        phase = (Math.abs(x - m.x0) / (h * (m.run ? 0.7 : 0.42))) * PI;
        run = m.run;
      }
    }
    if (walkW > 0) {
      var sw = Math.sin(phase), amp = run ? 38 : 26;
      var A = [amp * sw, amp * sw - (run ? 40 : 24) * Math.max(0, Math.cos(phase))];
      var B = [-amp * sw, -amp * sw - (run ? 40 : 24) * Math.max(0, -Math.cos(phase))];
      for (i = 0; i < 2; i++) { la[i] = lerp(la[i], A[i], walkW); lb[i] = lerp(lb[i], B[i], walkW); }
      var arm = run ? 40 : 22;
      a[0] = lerp(a[0], -arm * sw, walkW); a[1] = lerp(a[1], -arm * sw + (run ? 70 : 18), walkW);
      b[0] = lerp(b[0], arm * sw, walkW); b[1] = lerp(b[1], arm * sw + (run ? 70 : 18), walkW);
      lean = lerp(lean, run ? 16 : 5, walkW);
      drop += walkW * 0.018 * Math.abs(Math.cos(phase));
    }
    // jumps: anticipation crouch, airborne arc, landing squash
    var jy = 0;
    for (i = 0; i < this.jumps.length; i++) {
      var J = this.jumps[i];
      if (t > J.at - 0.2 && t < J.at) { var c = Math.sin(((t - J.at + 0.2) / 0.2) * PI * 0.5); drop += 0.07 * c; la[0] += 30 * c; la[1] -= 30 * c; lb[0] += 25 * c; lb[1] -= 30 * c; a[0] -= 20 * c; b[0] -= 20 * c; lean += 10 * c; }
      if (t >= J.at && t <= J.at + J.dur) {
        var q = (t - J.at) / J.dur, wj = Math.sin(q * PI);
        jy = 4 * q * (1 - q) * J.hgt;
        var JP = POSES.jump;
        for (var j2 = 0; j2 < 2; j2++) { a[j2] = lerp(a[j2], JP.a[j2], wj); b[j2] = lerp(b[j2], JP.b[j2], wj); la[j2] = lerp(la[j2], JP.la[j2], wj); lb[j2] = lerp(lb[j2], JP.lb[j2], wj); }
      }
      if (t > J.at + J.dur && t < J.at + J.dur + 0.18) { var s2 = Math.sin(((t - J.at - J.dur) / 0.18) * PI); drop += 0.05 * s2; la[0] += 20 * s2; la[1] -= 20 * s2; lb[0] += 15 * s2; lb[1] -= 20 * s2; }
    }
    // idle breathing + talking head bob + gestures
    var open = this.mouthOpen(t), talking = this.isTalking(t);
    var breathe = Math.sin(t * 1.9 + this.seed) * 0.006;
    tilt += Math.sin(t * 1.3 + this.seed) * 1.5;
    if (talking) {
      tilt += Math.sin(t * 3.3 + this.seed) * 3 + open * 3;
      if (P.gesture > 0.01) { a[0] += P.gesture * 9 * Math.sin(t * 2.6 + this.seed); a[1] += P.gesture * 14 * Math.sin(t * 3.4 + this.seed * 2); }
    }
    if (P.wave > 0.01) a[1] += P.wave * 22 * Math.sin(t * 9);
    var sx = 0;
    if (P.shake > 0.01) { var kk = Math.floor(t * 14); sx = P.shake * (hash01(kk + this.seed) - 0.5) * h * 0.025; }
    // skeleton
    var Lth = h * 0.235, Lsh = h * 0.235, T = h * 0.3, r = h * 0.105, Lu = h * 0.165, Lf = h * 0.16;
    var hip = [x + sx, y - jy - h * (0.47 - drop - breathe)];
    var lr = lean * D2R;
    var neck = [hip[0] + f * Math.sin(lr) * T, hip[1] - Math.cos(lr) * T];
    var hr = (lean + tilt * 0.35) * D2R;
    var head = [neck[0] + f * Math.sin(hr) * (r + h * 0.025), neck[1] - Math.cos(hr) * (r + h * 0.025) - open * h * 0.006];
    var sh = [lerp(hip[0], neck[0], 0.86), lerp(hip[1], neck[1], 0.86)];
    function seg2(o, a1, a2, L1, L2) {
      var e = [o[0] + f * Math.sin(a1 * D2R) * L1, o[1] + Math.cos(a1 * D2R) * L1];
      return [o, e, [e[0] + f * Math.sin(a2 * D2R) * L2, e[1] + Math.cos(a2 * D2R) * L2]];
    }
    var R = {
      t: t, f: f, front: fa.front, h: h, r: r, tilt: tilt + lean * 0.35, lean: lean, expr: P.expr, open: open, talking: talking, pose: P.name,
      hip: hip, neck: neck, head: head,
      armA: seg2(sh, a[0], a[1], Lu, Lf), armB: seg2(sh, b[0], b[1], Lu, Lf),
      legA: seg2(hip, la[0], la[1], Lth, Lsh), legB: seg2(hip, lb[0], lb[1], Lth, Lsh),
      walk: walkW, phase: phase, jy: jy,
    };
    // falling over: rotate everything around the feet
    var rot = 0;
    for (i = 0; i < this.falls.length; i++) {
      var F = this.falls[i];
      if (t >= F.at) {
        var pf = EASE.flop((t - F.at) / F.dur);
        if (F.up != null && t >= F.up) pf = 1 - V.ease.outCubic(clamp((t - F.up) / 0.45, 0, 1));
        rot = -88 * f * pf;
      }
    }
    if (rot) {
      var piv = [x, y], ca = Math.cos(rot * D2R), sa = Math.sin(rot * D2R);
      var rp = function (p) { var dx = p[0] - piv[0], dy = p[1] - piv[1]; return [piv[0] + dx * ca - dy * sa, piv[1] + dx * sa + dy * ca]; };
      ["hip", "neck", "head"].forEach(function (k2) { R[k2] = rp(R[k2]); });
      ["armA", "armB", "legA", "legB"].forEach(function (k2) { R[k2] = R[k2].map(rp); });
      R.tilt += rot * f;
      // keep the body above the floor once lying down
      var minY = -Infinity;
      [R.head[1] + r, R.legA[2][1], R.legB[2][1], R.hip[1]].forEach(function (v) { minY = Math.max(minY, v); });
      var lift = Math.max(0, minY - y);
      if (lift > 0) {
        ["hip", "neck", "head"].forEach(function (k2) { R[k2] = [R[k2][0], R[k2][1] - lift]; });
        ["armA", "armB", "legA", "legB"].forEach(function (k2) { R[k2] = R[k2].map(function (p) { return [p[0], p[1] - lift]; }); });
      }
    }
    R.rot = rot;
    R.top = [R.head[0], R.head[1] - r];
    R.handA = R.armA[2];
    R.handB = R.armB[2];
    this.cache = { t: t, r: R };
    return R;
  };
  /** Head-local point (x forward, y down, in head radii) → world. */
  function hp(R, lx, ly) {
    var a = R.tilt * D2R * R.f, px = R.f * lx * R.r, py = ly * R.r;
    return [R.head[0] + px * Math.cos(a) - py * Math.sin(a), R.head[1] + px * Math.sin(a) + py * Math.cos(a)];
  }
  function hpts(R, list) { return list.map(function (q) { return hp(R, q[0], q[1]); }); }
  function dotD(x, y, r) { return "M" + fx(x - r) + " " + fx(y) + " a" + fx(r) + " " + fx(r) + " 0 1 0 " + fx(r * 2) + " 0 a" + fx(r) + " " + fx(r) + " 0 1 0 " + fx(-r * 2) + " 0"; }
  var MOUTHS = {
    neutral: [[-0.14, 0], [0.14, 0.01]],
    smile: [[-0.22, -0.06], [-0.11, 0.05], [0, 0.09], [0.11, 0.05], [0.22, -0.06]],
    frown: [[-0.2, 0.08], [-0.1, -0.01], [0, -0.04], [0.1, -0.01], [0.2, 0.08]],
    flat: [[-0.19, 0.02], [0.19, 0.02]],
    smirk: [[-0.16, 0.04], [0.04, 0.04], [0.2, -0.07]],
    wavy: [[-0.22, 0.03], [-0.11, -0.03], [0, 0.03], [0.11, -0.03], [0.22, 0.03]],
  };
  Figure.prototype.update = function (t, k) {
    var sc = this.sc, R = this.rig(t), P = this.paths, self = this;
    var vis = t >= this.drawAt;
    var op = 1;
    for (var i = 0; i < this.outs.length; i++) if (t > this.outs[i].at) op = Math.min(op, 1 - sm((t - this.outs[i].at) / this.outs[i].dur));
    if (op <= 0.001) vis = false;
    if (vis !== this.lc.vis) { this.g.style.display = vis ? "" : "none"; this.lc.vis = vis; }
    if (!vis) return;
    op = Math.round(op * 100) / 100;
    if (op !== this.lc.op) { this.g.setAttribute("opacity", op); this.lc.op = op; }
    var amp = sc.amp * 0.55 * this.ws, wl = u(40) * this.ws, seed = this.seed;
    function line(pts, sd, closed) {
      var q = wobble(resample(pts, u(18) * self.ws, closed), seed + sd, amp, wl, closed);
      q = wobble(q, seed + sd + 50 * (k + 1), sc.boilAmp * 0.8 * self.ws, wl * 0.5, closed);
      return dPath(q, closed);
    }
    var pr = clamp((t - this.drawAt) / this.drawDur, 0, 1);
    function part(a, b) { return clamp((pr - a) / (b - a), 0, 1); }
    function set(key, d, p) {
      var el2 = P[key];
      var c = self.lc[key] || (self.lc[key] = {});
      if (d !== c.d) { el2.setAttribute("d", d); c.d = d; }
      if (p != null) {
        var pq = Math.round(p * 1000) / 1000;
        if (pq !== c.p) { el2.setAttribute("stroke-dasharray", pq >= 1 ? "none" : pq <= 0 ? "0 2" : pq + " 2"); el2.style.visibility = pq <= 0 ? "hidden" : "visible"; c.p = pq; }
      }
    }
    set("head", line(ellipsePts(R.head[0], R.head[1], R.r, R.r, { n: 22, a0: -2.2 + R.f * 0.4, over: 0.32 }), 1, false), part(0, 0.3));
    set("body", line([R.hip, R.neck], 2), part(0.25, 0.42));
    set("legA", line(R.legA, 3), part(0.4, 0.58));
    set("legB", line(R.legB, 4), part(0.48, 0.66));
    set("armA", line(R.armA, 5), part(0.62, 0.8));
    set("armB", line(R.armB, 6), part(0.68, 0.86));
    var fp = part(0.84, 1);
    var E = EXPR[R.expr] || EXPR.neutral;
    // eyes (with blinks)
    var front = R.front, er = R.r * 0.085;
    var eyes = front ? [[-0.32, -0.12], [0.32, -0.12]] : [[0.1, -0.14], [0.52, -0.14]];
    var blink = ((t + hash01(this.seed) * 3.1) % 3.7) < 0.12;
    var ed = "";
    var ek = E.eyes;
    if (blink && ek !== "x") ek = "closed";
    eyes.forEach(function (e) {
      var c = hp(R, e[0], e[1]);
      if (ek === "x") { var s = R.r * 0.11; ed += "M" + fx(c[0] - s) + " " + fx(c[1] - s) + "L" + fx(c[0] + s) + " " + fx(c[1] + s) + "M" + fx(c[0] + s) + " " + fx(c[1] - s) + "L" + fx(c[0] - s) + " " + fx(c[1] + s); }
      else if (ek === "closed" || ek === "happy") { var a1 = hp(R, e[0] - 0.1, e[1] + (ek === "happy" ? 0.03 : 0)), a2 = hp(R, e[0], e[1] - (ek === "happy" ? 0.07 : 0)), a3 = hp(R, e[0] + 0.1, e[1] + (ek === "happy" ? 0.03 : 0)); ed += "M" + fx(a1[0]) + " " + fx(a1[1]) + "Q" + fx(a2[0]) + " " + fx(a2[1]) + " " + fx(a3[0]) + " " + fx(a3[1]); }
      else ed += dotD(c[0], c[1], ek === "wide" ? er * 1.45 : er);
    });
    var ec = this.lc.eyes || (this.lc.eyes = {});
    if (ed !== ec.d) { P.eyes.setAttribute("d", ed); P.eyes.setAttribute("fill", ek === "x" || ek === "closed" || ek === "happy" ? "none" : INK); P.eyes.setAttribute("stroke-width", (sc.pen * this.ws * (ek === "x" || ek === "closed" || ek === "happy" ? 0.6 : 0.3)).toFixed(2)); ec.d = ed; }
    var ev = fp > 0;
    if (ev !== ec.v) { P.eyes.style.visibility = ev ? "visible" : "hidden"; ec.v = ev; }
    // mouth
    var mc = front ? [0, 0.42] : [0.36, 0.4], md;
    var open = R.open;
    if ((open > 0.12 && E.mouth !== "scream") || E.mouth === "scream" || E.mouth === "o" || E.mouth === "grin") {
      var ry = E.mouth === "scream" ? 0.2 + open * 0.06 : E.mouth === "o" && open < 0.12 ? 0.09 : 0.035 + open * 0.15;
      var rx = E.mouth === "scream" ? 0.13 : E.mouth === "o" && open < 0.12 ? 0.09 : 0.12;
      if (E.mouth === "grin" && open < 0.12) md = dPath(hpts(R, [[mc[0] - 0.22, mc[1] - 0.05], [mc[0] - 0.1, mc[1] + 0.12], [mc[0] + 0.1, mc[1] + 0.12], [mc[0] + 0.22, mc[1] - 0.05]]), true);
      else md = dPath(hpts(R, ringPts(mc[0], mc[1] + ry * 0.4, rx, ry, 12)), true);
      P.mouth.setAttribute("fill", INK);
    } else {
      md = dPath(hpts(R, (MOUTHS[E.mouth] || MOUTHS.neutral).map(function (q) { return [mc[0] + q[0], mc[1] + q[1]]; })), false);
      P.mouth.setAttribute("fill", "none");
    }
    set("mouth", md, fp);
    // brows
    var bd = "";
    if (E.brows) {
      eyes.forEach(function (e, i2) {
        var inner = front ? (i2 === 0 ? 1 : -1) : i2 === 0 ? -1 : 1; // which end is towards the nose
        var lift = E.brows === "up" ? -0.36 : -0.3, sl = 0;
        if (E.brows === "worried" || E.brows === "sad") sl = -0.09 * inner;
        if (E.brows === "angry") sl = 0.1 * inner;
        if (E.brows === "smug") sl = i2 === 1 ? -0.08 : 0.04;
        var b1 = hp(R, e[0] - 0.14, e[1] + lift - sl), b2 = hp(R, e[0] + 0.14, e[1] + lift + sl);
        bd += "M" + fx(b1[0]) + " " + fx(b1[1]) + "L" + fx(b2[0]) + " " + fx(b2[1]);
      });
    }
    set("brows", bd || "M0 0", bd ? fp : 0);
    // accessories
    var acc = this.accessory(R, t);
    set("acc1", acc.line ? dPath(acc.line, false) : "M0 0", acc.line ? part(0.86, 1) : 0);
    var a2 = this.lc.acc2 || (this.lc.acc2 = {});
    var ad = acc.fill ? dPath(acc.fill, true) : "M0 0";
    if (ad !== a2.d) { P.acc2.setAttribute("d", ad); a2.d = ad; }
    var av = !!acc.fill && pr >= 0.9;
    if (av !== a2.v) { P.acc2.style.visibility = av ? "visible" : "hidden"; a2.v = av; }
  };
  Figure.prototype.accessory = function (R, t) {
    var look = this.cast.look, out = {};
    if (look === "tuft") {
      out.line = hpts(R, [[-0.05, -0.98], [-0.12, -1.32], [0.12, -1.5], [0.28, -1.32], [0.1, -1.18]]);
    } else if (look === "glasses") {
      var e = R.front ? [[-0.32, -0.12], [0.32, -0.12]] : [[0.1, -0.14], [0.52, -0.14]];
      var gl = [];
      e.forEach(function (c, i) {
        var ring = ringPts(c[0], c[1], 0.19, 0.17, 12);
        ring.push(ring[0]);
        if (i === 1) gl.push([c[0] - 0.19, c[1]]);
        gl = gl.concat(ring);
      });
      if (!R.front) gl.push([e[0][0] - 0.19, e[0][1]], [-0.55, -0.24]);
      out.line = hpts(R, gl);
      var bun = R.front ? [0, -1.18] : [-0.78, -0.78];
      out.fill = hpts(R, ringPts(bun[0], bun[1], 0.3, 0.27, 12));
    } else if (look === "hat") {
      out.line = hpts(R, [[-1.3, -0.52], [-0.4, -0.6], [0.5, -0.6], [1.35, -0.5]]);
      out.fill = hpts(R, [[-0.92, -0.6]].concat(arcPts(0, -0.62, 0.92, 0.95, 180, 360, 12)).concat([[0.92, -0.6]]));
    } else if (look === "ponytail") {
      var sway = Math.sin(t * 2.1 + this.seed) * 0.12 + Math.sin(R.phase) * R.walk * 0.25 + (R.jy > 0 ? -0.35 : 0);
      var root = R.front ? [0.72, -0.62] : [-0.86, -0.55];
      var dir = R.front ? 1 : -1;
      out.fill = hpts(R, [
        [root[0], root[1] - 0.2], [root[0] + dir * 0.55, root[1] - 0.25], [root[0] + dir * (0.75 + sway * 0.3), root[1] + 0.3],
        [root[0] + dir * (0.6 + sway), root[1] + 1.05], [root[0] + dir * (0.42 + sway * 0.6), root[1] + 0.45], [root[0] + dir * 0.1, root[1] + 0.12],
      ]);
      out.line = hpts(R, [[root[0] - dir * 0.05, root[1] - 0.12], [root[0] + dir * 0.18, root[1] + 0.12]]);
    } else if (look === "beret") {
      out.fill = hpts(R, [[-1.02, -0.5], [-0.9, -0.92], [-0.3, -1.18], [0.45, -1.16], [1.05, -0.86], [1.12, -0.62], [0.4, -0.72], [-0.4, -0.66]]);
      out.line = hpts(R, [[0.05, -1.14], [0.1, -1.4], [0.22, -1.42]]);
    }
    return out;
  };
  // geometry getters for placing things around the figure
  Figure.prototype.head = function (t) { var R = this.rig(clampT(t == null ? 0 : t)); return { x: R.head[0], y: R.head[1], r: R.r, top: R.head[1] - R.r * (this.cast.look === "hat" || this.cast.look === "tuft" || this.cast.look === "beret" ? 1.55 : 1) }; };
  Figure.prototype.hand = function (t, which) { var R = this.rig(clampT(t == null ? 0 : t)); var p = which === "b" ? R.handB : R.handA; return { x: p[0], y: p[1] }; };
  Figure.prototype.facing = function (t) { return this.faceAt(clampT(t == null ? 0 : t)).f; };
  Figure.prototype.box = function (t) {
    var R = this.rig(clampT(t == null ? 0 : t)), h = this.h;
    return { x: R.hip[0] - h * 0.3, y: this.y - h * 1.05, w: h * 0.6, h: h * 1.05, cx: R.hip[0], cy: this.y - h * 0.5 };
  };
  /** Attach a piece (doodle item) to the hand from time `at`. */
  Figure.prototype.hold = function (it, which, dx, dy) {
    var self = this, pc = it && it.piece ? it.piece : it;
    if (!pc) return this;
    var ox = pc.box ? pc.x - pc.box().cx : 0, oy = pc.box ? pc.y - pc.box().cy : 0;
    pc.follow = function (t) {
      var R = self.rig(t), hnd = which === "b" ? R.handB : R.handA;
      return { x: hnd[0] + ox + num(dx, 0) * R.f, y: hnd[1] + oy + num(dy, 0) };
    };
    return this;
  };
  /** Pop a reaction mark next to the head: sweat, exclaim, question, idea, heart, sparkle, anger, dizzy, zzz, motion. */
  Figure.prototype.mark = function (kind, at, dur) {
    return markOn(this.sc, this, kind, clampT(at), num(dur, 1.6));
  };
  S.Figure = Figure;

  function markOn(sc, fig, kind, at, dur) {
    kind = str(kind).toLowerCase();
    var r0 = fig.h * 0.105;
    var s = r0 / 40; // marks are drawn in a ±40 box ≈ head radius
    var pc = new Piece(sc, { x: 0, y: 0, s: s, layer: "front", ws: fig.ws * 0.85, from: at });
    var specs = [], col = INK, offs = [0, -2.1], spin = 0, anim = "pop";
    if (kind === "sweat") {
      [[-50, -30, 1], [-62, 8, 0.8], [-38, 30, 0.65]].forEach(function (d) {
        var k = d[2];
        specs.push({ p: [[d[0], d[1] - 14 * k], [d[0] + 7 * k, d[1]], [d[0] + 5 * k, d[1] + 7 * k], [d[0], d[1] + 9 * k], [d[0] - 5 * k, d[1] + 7 * k], [d[0] - 7 * k, d[1]]], closed: true, w: 0.7, fill: SOFT, amp: 0.3 });
      });
      offs = [0, 0]; anim = "drip";
    } else if (kind === "exclaim" || kind === "!") {
      specs.push({ p: [[0, -38], [2, 8]], w: 1.4, color: ACC }, { p: ellipsePts(1, 26, 3.5, 3.5, { n: 10 }), w: 1.2, color: ACC, fill: ACC });
      offs = [0.3, -2.35];
    } else if (kind === "question" || kind === "?") {
      specs.push({ p: [[-16, -22], [-12, -36], [4, -40], [18, -30], [14, -14], [2, -4], [0, 10]], w: 1.2 }, { p: ellipsePts(0, 26, 3.5, 3.5, { n: 10 }), w: 1.1, fill: INK });
      offs = [0.2, -2.35];
    } else if (kind === "idea") {
      DOODLES.lightbulb().forEach(function (q) { specs.push(scaleSpec(q, 0.75, -37, -45, true)); });
      offs = [0.4, -2.5];
    } else if (kind === "heart" || kind === "love") {
      DOODLES.heart().forEach(function (q) { specs.push(scaleSpec(q, 0.55, -27, -27, true)); });
      offs = [1.4, -1.6];
    } else if (kind === "sparkle" || kind === "celebrate") {
      for (var i = 0; i < 8; i++) {
        var a = (i / 8) * PI * 2 - PI / 2;
        specs.push({ p: [[Math.cos(a) * 60, Math.sin(a) * 60], [Math.cos(a) * 80, Math.sin(a) * 80]], w: 0.9, color: i % 2 ? INK : ACC });
      }
      offs = [0, 0];
    } else if (kind === "anger") {
      specs.push({ p: [[-12, -4], [-4, -4], [-4, -12]], w: 1, color: ACC, sharp: true }, { p: [[4, -12], [4, -4], [12, -4]], w: 1, color: ACC, sharp: true }, { p: [[-12, 4], [-4, 4], [-4, 12]], w: 1, color: ACC, sharp: true }, { p: [[4, 12], [4, 4], [12, 4]], w: 1, color: ACC, sharp: true });
      offs = [1.1, -1.1];
    } else if (kind === "dizzy") {
      var sp = [];
      for (var j = 0; j <= 40; j++) { var aa = (j / 40) * PI * 4; sp.push([Math.cos(aa) * (6 + j * 0.55), Math.sin(aa) * (3 + j * 0.25)]); }
      specs.push({ p: sp, w: 0.8 });
      offs = [0, -1.7]; spin = 1;
    } else if (kind === "zzz") {
      specs.push({ p: [[-10, -10], [2, -10], [-10, 2], [2, 2]], sharp: true, w: 0.8 }, { p: [[10, -30], [26, -30], [10, -14], [26, -14]], sharp: true, w: 1 });
      offs = [1.2, -1.6];
    } else if (kind === "motion") {
      [[-40, -20], [-50, 10], [-42, 40]].forEach(function (d) { specs.push({ p: [[d[0], d[1]], [d[0] - 40, d[1]]], w: 0.8 }); });
      offs = [-0.9, 2.6];
    } else {
      return null;
    }
    var D0 = pc.draw(specs, at, 0.3);
    var follow = function (t) {
      var R = fig.rig(t), hx = R.head[0] + offs[0] * R.r * R.f, hy = R.head[1] + offs[1] * R.r;
      if (kind === "motion") { hx = R.hip[0] + offs[0] * R.r * R.f; hy = R.hip[1] - offs[1] * R.r * 0.2; }
      if (anim === "drip") hy += ((t - at) * 0.9 % 1) * R.r * 0.5;
      return { x: hx, y: hy, rot: spin ? (t - at) * 220 : null };
    };
    pc.follow = follow;
    if (kind === "motion") pc.flip = fig.facing(at) > 0 ? false : true;
    pc.to({ s: s * 0.3 }, at - 0.02, 0.01).to({ s: s }, at, 0.3, "outBack");
    pc.fade(0, at + dur, 0.3);
    void D0;
    return pc;
  }
  function scaleSpec(q, k, ox, oy, accent) {
    var o = {};
    for (var key in q) o[key] = q[key];
    o.p = q.p.map(function (p) { return [p[0] * k + ox, p[1] * k + oy]; });
    if (q.fp) o.fp = q.fp.map(function (p) { return [p[0] * k + ox, p[1] * k + oy]; });
    if (accent && q.hi) o.color = ACC;
    if (q.fill === "hi") o.fill = accent ? ACC : null;
    return o;
  }

  // ───────────────────────── doodle library (100 × 100 box, y down) ─────────────────────────
  // Spec fields: p (points), closed, sharp, w (weight ×), fill ("ink" | "hi" | "soft"), hi (accent
  // stroke when the doodle is drawn with accent: true), color ("muted"), fp (exact fill outline).
  function sp(p, o) { var s = { p: p }; if (o) for (var k in o) s[k] = o[k]; return s; }
  function Ln(x1, y1, x2, y2, o) { return sp([[x1, y1], [x2, y2]], o); }
  function Pl(a, o) { return sp(flat(a), o); }
  function Pg(a, o) { var s = sp(flat(a), o); s.closed = true; return s; }
  function El(cx, cy, rx, ry, o) { var s = sp(ellipsePts(cx, cy, rx, ry, { n: 24 }), o); s.fp = ringPts(cx, cy, rx, ry, 24); return s; }
  function Ci(cx, cy, r, o) { return El(cx, cy, r, r, o); }
  function Ar(cx, cy, rx, ry, a0, a1, o) { return sp(arcPts(cx, cy, rx, ry, a0, a1), o); }
  function Dot(cx, cy, r, o) { var s = El(cx, cy, r, r, o || {}); s.fill = s.fill || "ink"; s.w = s.w || 0.5; s.amp = 0.2; return s; }
  function rotPts(p, cx, cy, deg) {
    var a = deg * D2R, c = Math.cos(a), s = Math.sin(a);
    return p.map(function (q) { var dx = q[0] - cx, dy = q[1] - cy; return [cx + dx * c - dy * s, cy + dx * s + dy * c]; });
  }
  function personSpecs(x, y, k, o) {
    o = o || {};
    return [
      Ci(x, y - 76 * k, 10 * k, o),
      Ln(x, y - 66 * k, x, y - 32 * k, o),
      Pl([x, y - 56 * k, x - 14 * k, y - 40 * k], o),
      Pl([x, y - 56 * k, x + 14 * k, y - 40 * k], o),
      Pl([x, y - 32 * k, x - 11 * k, y], o),
      Pl([x, y - 32 * k, x + 11 * k, y], o),
    ];
  }
  function dollar(cx, cy, k, o) {
    return [
      sp(flat([11, -12, 5, -17, -5, -17, -11, -11, -8, -4, 0, 0, 8, 4, 11, 11, 5, 17, -5, 17, -11, 12]).map(function (q) { return [cx + q[0] * k, cy + q[1] * k]; }), o),
      Ln(cx, cy - 24 * k, cx, cy + 24 * k, o),
    ];
  }

  var DOODLES = {
    lightbulb: function () {
      var bulb = [[41, 72], [38, 63], [32.3, 55.7]].concat(arcPts(50, 38, 25, 25, 135, 405, 22)).concat([[62, 63], [59, 72]]);
      return [sp(bulb), Ln(40, 77, 60, 77), Ln(41, 83, 59, 83), Pl([44, 89, 50, 94, 56, 89]),
        Pl([44, 64, 45, 47, 50, 54, 55, 47, 56, 64], { hi: true, w: 0.8 }),
        Ln(50, 1, 50, 7, { hi: true }), Ln(15, 13, 20, 18, { hi: true }), Ln(85, 13, 80, 18, { hi: true }), Ln(6, 38, 13, 38, { hi: true }), Ln(94, 38, 87, 38, { hi: true })];
    },
    question: function () { return [Pl([28, 32, 32, 18, 48, 10, 66, 16, 72, 32, 62, 46, 50, 54, 50, 68], { w: 1.6 }), Dot(50, 84, 5)]; },
    exclamation: function () { return [Ln(50, 10, 50, 64, { w: 1.8 }), Dot(50, 83, 5.5)]; },
    coin: function () { return [El(50, 50, 40, 40, { fill: "soft" }), El(50, 50, 31, 31, { w: 0.6 })].concat(dollar(50, 50, 1, { hi: true })); },
    money: function () { return [Pg([8, 26, 92, 26, 92, 74, 8, 74], { fill: "soft" }), El(50, 50, 15, 19, { w: 0.7 }), Ci(20, 38, 4, { w: 0.6 }), Ci(80, 62, 4, { w: 0.6 })].concat(dollar(50, 50, 0.6, { hi: true })); },
    clock: function () { return [Ci(50, 50, 40), Ln(50, 13, 50, 18), Ln(87, 50, 82, 50), Ln(50, 87, 50, 82), Ln(13, 50, 18, 50), Pl([50, 25, 50, 50, 67, 58], { w: 1.2, hi: true }), Dot(50, 50, 2.5)]; },
    globe: function () {
      return [Ci(50, 50, 40), Pg([30, 22, 44, 18, 50, 28, 42, 40, 46, 52, 36, 58, 26, 46, 20, 34], { fill: "soft", w: 0.8 }), Pg([58, 46, 70, 40, 82, 50, 76, 66, 64, 78, 58, 64], { fill: "soft", w: 0.8 }), Ar(50, 50, 40, 12, 10, 170, { w: 0.5, color: "muted" })];
    },
    sun: function () {
      var out = [Ci(50, 50, 20, { fill: "hi", hi: true })];
      for (var i = 0; i < 10; i++) { var a = (i / 10) * PI * 2; out.push(Ln(50 + Math.cos(a) * 29, 50 + Math.sin(a) * 29, 50 + Math.cos(a) * 43, 50 + Math.sin(a) * 43, { hi: true })); }
      return out;
    },
    moon: function () {
      var outer = arcPts(50, 50, 38, 38, 300, 60, 16).filter(function () { return true; });
      outer = arcPts(50, 50, 38, 38, -60, -300, 18);
      var inner = arcPts(66, 50, 30, 30, 100, 260, 12);
      return [sp(outer.concat(inner), { closed: true, fill: "soft" }), Dot(30, 40, 2.5, { w: 0.4 }), Ci(38, 64, 4, { w: 0.5 })];
    },
    star: function () {
      var p = [];
      for (var i = 0; i < 10; i++) { var a = -PI / 2 + (i / 10) * PI * 2, r = i % 2 ? 19 : 44; p.push([50 + Math.cos(a) * r, 54 + Math.sin(a) * r]); }
      return [sp(p, { closed: true, sharp: true, fill: "hi", hi: true })];
    },
    cloud: function () { return [sp(cloudPts(50, 56, 42, 24, 8, 0.16), { closed: true })]; },
    rain: function () { return [sp(cloudPts(50, 38, 40, 22, 8, 0.16), { closed: true }), Ln(30, 68, 25, 80, { w: 0.8 }), Ln(48, 70, 43, 84, { w: 0.8 }), Ln(66, 68, 61, 80, { w: 0.8 }), Ln(40, 88, 37, 95, { w: 0.8 })]; },
    house: function () { return [Pg([22, 50, 78, 50, 78, 92, 22, 92]), Pl([12, 54, 50, 16, 88, 54], { sharp: true }), Pg([42, 92, 42, 68, 58, 68, 58, 92]), Pg([27, 58, 37, 58, 37, 68, 27, 68], { w: 0.7 }), Pl([64, 31, 64, 20, 72, 20, 72, 39], { sharp: true })]; },
    building: function () {
      var out = [Pg([28, 10, 72, 10, 72, 96, 28, 96]), Ln(50, 10, 50, 1)];
      for (var y = 20; y <= 84; y += 13) for (var x = 37; x <= 63; x += 13) out.push(Ln(x - 3, y, x + 3, y, { w: 0.7, amp: 0.4 }));
      return out;
    },
    tree: function () { return [Ln(45, 95, 47, 60), Ln(57, 95, 55, 60), sp(cloudPts(50, 38, 36, 28, 7, 0.17), { closed: true, fill: "soft" })]; },
    mountain: function () { return [Pl([2, 92, 32, 30, 46, 52, 62, 18, 98, 92]), Ln(2, 92, 98, 92), Pl([54.5, 34, 58, 40, 62, 34, 66, 40, 69.8, 34], { sharp: true, w: 0.7 })]; },
    rocket: function () {
      return [Pg([50, 4, 63, 22, 64, 66, 36, 66, 37, 22]), Ci(50, 32, 7, { w: 0.8 }), Pl([37, 48, 23, 72, 36, 66]), Pl([63, 48, 77, 72, 64, 66]),
        Pg([42, 70, 50, 95, 58, 70, 54, 76, 50, 70, 46, 76], { hi: true, fill: "hi", sharp: true })];
    },
    phone: function () { return [Pg([32, 6, 68, 6, 68, 94, 32, 94]), Pg([36, 16, 64, 16, 64, 78, 36, 78], { w: 0.6 }), Dot(50, 86, 3)]; },
    laptop: function () { return [Pg([20, 18, 80, 18, 80, 62, 20, 62]), Pg([26, 24, 74, 24, 74, 56, 26, 56], { w: 0.6 }), Pg([20, 62, 80, 62, 94, 78, 6, 78]), Ln(42, 70, 58, 70, { w: 0.6 })]; },
    book: function () {
      return [Pl([50, 30, 32, 22, 10, 26, 10, 80, 32, 76, 50, 84]), Pl([50, 30, 68, 22, 90, 26, 90, 80, 68, 76, 50, 84]), Ln(50, 30, 50, 84),
        Ln(18, 38, 40, 40, { w: 0.5 }), Ln(18, 50, 40, 52, { w: 0.5 }), Ln(18, 62, 36, 64, { w: 0.5 }), Ln(60, 40, 82, 38, { w: 0.5 }), Ln(60, 52, 82, 50, { w: 0.5 })];
    },
    heart: function () {
      var p = [];
      for (var i = 0; i < 40; i++) {
        var t = (i / 40) * PI * 2, s3 = Math.sin(t);
        p.push([50 + 16 * s3 * s3 * s3 * 2.7, 46 - (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * 2.7]);
      }
      return [sp(p, { closed: true, fill: "hi", hi: true })];
    },
    atom: function () {
      var out = [];
      [0, 60, 120].forEach(function (a) { out.push(sp(rotPts(ellipsePts(50, 50, 44, 15, { n: 26 }), 50, 50, a), { w: 0.85 })); });
      out.push(Dot(50, 50, 6.5, { fill: "hi", hi: true }));
      return out;
    },
    gear: function () {
      var p = [];
      for (var j = 0; j < 8; j++) {
        var a = j * 45;
        [[a - 13, 31], [a - 8, 42], [a + 8, 42], [a + 13, 31]].forEach(function (q) { p.push([50 + Math.cos(q[0] * D2R) * q[1], 50 + Math.sin(q[0] * D2R) * q[1]]); });
      }
      return [sp(p, { closed: true, sharp: true }), Ci(50, 50, 12)];
    },
    chart: function () { return [Pl([12, 6, 12, 90, 94, 90], { sharp: true }), Pl([18, 78, 34, 60, 48, 68, 64, 40, 84, 18], { hi: true, w: 1.2, sharp: true }), Pl([72, 19, 85, 17, 83, 31], { hi: true, sharp: true, w: 1.2 })]; },
    "chart-down": function () { return [Pl([12, 6, 12, 90, 94, 90], { sharp: true }), Pl([18, 20, 34, 38, 48, 30, 64, 58, 84, 78], { hi: true, w: 1.2, sharp: true }), Pl([71, 79, 85, 80, 84, 66], { hi: true, sharp: true, w: 1.2 })]; },
    "chart-pie": function () {
      var wedge = [[50, 50]].concat(arcPts(50, 50, 40, 40, -90, 20, 10));
      return [Ci(50, 50, 40), sp(wedge, { closed: true, fill: "hi", hi: true, w: 0.9 }), Ln(50, 50, 22, 78, { w: 0.8 })];
    },
    arrow: function () { return [Ln(8, 50, 88, 50, { w: 1.3 }), Pl([70, 32, 90, 50, 70, 68], { sharp: true, w: 1.3 })]; },
    flag: function () { return [Ln(26, 6, 26, 96, { w: 1.2 }), Pg([26, 10, 48, 4, 66, 14, 88, 9, 88, 44, 66, 49, 48, 38, 26, 44], { fill: "hi", hi: true })]; },
    coffee: function () { return [Pg([22, 36, 72, 36, 68, 88, 26, 88]), Ar(73, 56, 12, 14, -80, 100), Pl([36, 28, 32, 20, 38, 12, 34, 4], { w: 0.7 }), Pl([54, 28, 50, 20, 56, 12, 52, 4], { w: 0.7 })]; },
    box: function () { return [Pg([12, 40, 64, 40, 64, 92, 12, 92]), Pg([12, 40, 34, 20, 86, 20, 64, 40]), Pg([64, 40, 86, 20, 86, 72, 64, 92]), Ln(38, 40, 60, 20, { w: 0.6 })]; },
    ball: function () { return [Ci(50, 50, 40), Pl([22, 22, 40, 40, 42, 60, 26, 80], { w: 0.7 }), Pl([78, 22, 60, 40, 58, 60, 74, 80], { w: 0.7 })]; },
    car: function () {
      return [Pl([18, 72, 6, 72, 6, 56, 22, 51, 32, 33, 66, 33, 78, 51, 94, 56, 94, 72, 82, 72]), Ln(38, 72, 62, 72), Ci(28, 73, 10), Ci(72, 73, 10),
        Pg([36, 39, 48, 39, 48, 50, 30, 50], { w: 0.7 }), Pg([54, 39, 64, 39, 71, 50, 54, 50], { w: 0.7 })];
    },
    ant: function () {
      return [El(22, 60, 13, 10), El(44, 58, 8, 7), Ci(64, 52, 9), Pl([67, 44, 72, 32, 80, 27], { w: 0.7 }), Pl([61, 44, 62, 31, 69, 24], { w: 0.7 }),
        Pl([40, 63, 31, 73, 25, 84], { w: 0.7 }), Pl([44, 64, 44, 76, 40, 86], { w: 0.7 }), Pl([48, 63, 56, 73, 61, 84], { w: 0.7 }), Dot(67, 50, 1.6)];
    },
    cat: function () {
      return [El(44, 72, 24, 21), Ci(64, 40, 16), Pl([52, 32, 54, 18, 62, 26], { sharp: true }), Pl([68, 25, 76, 17, 78, 32], { sharp: true }),
        Pl([22, 82, 10, 72, 12, 54, 20, 48]), Dot(59, 38, 1.8), Dot(70, 38, 1.8), Ln(73, 46, 88, 42, { w: 0.5 }), Ln(73, 48, 88, 50, { w: 0.5 })];
    },
    fish: function () { return [Pg([12, 50, 30, 34, 56, 32, 74, 44, 74, 56, 56, 68, 30, 66]), Pg([74, 50, 92, 34, 90, 66], { sharp: true }), Dot(28, 46, 2.2), Ar(42, 50, 6, 12, -60, 60, { w: 0.6 })]; },
    whale: function () {
      return [Pg([6, 60, 10, 42, 34, 31, 62, 34, 80, 50, 88, 44, 97, 34, 93, 55, 97, 72, 86, 62, 78, 66, 56, 78, 22, 78]), Dot(22, 52, 2.2), Pl([8, 62, 30, 66], { w: 0.7 }),
        Pl([31, 29, 29, 17, 22, 9], { w: 0.7, color: "muted" }), Pl([31, 29, 35, 15, 41, 8], { w: 0.7, color: "muted" })];
    },
    cell: function () { return [El(50, 50, 44, 34), El(55, 47, 14, 12, { fill: "soft" }), Dot(30, 40, 2), Dot(34, 66, 2.5), Dot(72, 66, 2), Ln(22, 55, 30, 58, { w: 0.5 }), Ln(68, 28, 76, 32, { w: 0.5 })]; },
    virus: function () {
      var out = [Ci(50, 50, 26)];
      for (var i = 0; i < 8; i++) { var a = (i / 8) * PI * 2; out.push(Ln(50 + Math.cos(a) * 27, 50 + Math.sin(a) * 27, 50 + Math.cos(a) * 38, 50 + Math.sin(a) * 38, { w: 0.8 }), Dot(50 + Math.cos(a) * 41, 50 + Math.sin(a) * 41, 3.2)); }
      out.push(Dot(44, 44, 3), Dot(58, 56, 2.5));
      return out;
    },
    galaxy: function () {
      var arms = [];
      [0, PI].forEach(function (off) {
        var p = [];
        for (var a = 0; a <= 3 * PI; a += 0.25) { var r = 4 + a * 4.4; p.push([50 + Math.cos(a + off) * r, 50 + Math.sin(a + off) * r * 0.62]); }
        arms.push(sp(p, { w: 0.9 }));
      });
      return arms.concat([Dot(50, 50, 4.5, { fill: "hi", hi: true }), Dot(14, 22, 1.4), Dot(86, 78, 1.4), Dot(82, 18, 1.2), Dot(18, 82, 1.2), Dot(70, 30, 1)]);
    },
    planet: function () { return [Ci(50, 50, 25, { fill: "soft" }), sp(rotPts(ellipsePts(50, 52, 47, 11, { n: 26 }), 50, 52, -14), { w: 0.9 })]; },
    bomb: function () { return [Ci(44, 58, 30, { fill: "ink" }), Pl([62, 34, 70, 24, 80, 22, 84, 14]), Ln(86, 10, 92, 4, { hi: true }), Ln(88, 14, 97, 14, { hi: true }), Ln(84, 8, 84, 1, { hi: true })]; },
    cake: function () { return [Pg([16, 52, 84, 52, 84, 90, 16, 90]), Pl([16, 66, 30, 72, 44, 66, 58, 72, 72, 66, 84, 70], { w: 0.7 }), Pg([46, 30, 54, 30, 54, 52, 46, 52]), Pg([50, 10, 56, 22, 50, 28, 44, 22], { fill: "hi", hi: true })]; },
    chair: function () { return [Pl([30, 8, 30, 94]), Pl([30, 56, 72, 56, 72, 94]), Ln(30, 26, 46, 26, { w: 0.6 }), Ln(30, 40, 46, 40, { w: 0.6 })]; },
    door: function () { return [Pg([26, 6, 74, 6, 74, 96, 26, 96]), Dot(66, 54, 3)]; },
    ladder: function () { var out = [Ln(30, 4, 26, 96), Ln(70, 4, 74, 96)]; for (var y = 14; y < 96; y += 14) out.push(Ln(29, y, 71, y, { w: 0.8 })); return out; },
    key: function () { return [Ci(25, 50, 15), Ln(40, 50, 92, 50), Pl([76, 50, 76, 63], { w: 0.9 }), Pl([86, 50, 86, 60], { w: 0.9 })]; },
    magnifier: function () { return [Ci(42, 42, 28), Ar(42, 42, 20, 20, 200, 250, { w: 0.6 }), Ln(62, 62, 90, 90, { w: 2.2 })]; },
    rock: function () { return [Pg([8, 82, 16, 58, 34, 42, 58, 38, 80, 50, 92, 80], { fill: "soft" }), Ln(40, 56, 50, 62, { w: 0.5 })]; },
    trophy: function () { return [Pg([28, 12, 72, 12, 68, 44, 50, 58, 32, 44]), Ar(27, 27, 11, 11, 90, 270), Ar(73, 27, 11, 11, -90, 90), Ln(50, 58, 50, 76), Pg([34, 76, 66, 76, 70, 90, 30, 90], { fill: "hi", hi: true })]; },
    brain: function () {
      return [sp(cloudPts(50, 50, 42, 33, 9, 0.12), { closed: true, fill: "soft" }), Pl([50, 20, 46, 38, 54, 58, 50, 82], { w: 0.7 }),
        Pl([20, 46, 30, 40, 36, 52], { w: 0.6 }), Pl([64, 38, 72, 48, 80, 42], { w: 0.6 }), Pl([28, 66, 38, 62], { w: 0.6 }), Pl([62, 66, 72, 70], { w: 0.6 })];
    },
    dna: function () {
      var a = [], b = [], out = [];
      for (var y = 6; y <= 94; y += 4) { a.push([50 + 22 * Math.sin(y * 0.1), y]); b.push([50 - 22 * Math.sin(y * 0.1), y]); }
      out.push(sp(a), sp(b, { hi: true }));
      for (y = 12; y <= 90; y += 10) out.push(Ln(50 + 22 * Math.sin(y * 0.1), y, 50 - 22 * Math.sin(y * 0.1), y, { w: 0.5 }));
      return out;
    },
    apple: function () { return [Pg([50, 28, 64, 20, 82, 28, 88, 50, 78, 80, 62, 92, 50, 86, 38, 92, 22, 80, 12, 50, 18, 28, 36, 20], { fill: "hi", hi: true }), Pl([50, 28, 52, 14, 56, 8]), Pg([54, 16, 66, 6, 74, 10, 64, 18], { w: 0.7 })]; },
    fire: function () { return [Pg([50, 4, 62, 30, 74, 24, 82, 52, 72, 84, 50, 95, 28, 84, 18, 56, 30, 38, 38, 46, 40, 24], { fill: "hi", hi: true }), Pg([50, 56, 58, 70, 54, 86, 46, 86, 42, 72], { w: 0.6 })]; },
    lightning: function () { return [Pg([56, 4, 22, 54, 46, 54, 36, 96, 78, 40, 54, 40, 66, 4], { sharp: true, fill: "hi", hi: true })]; },
    eye: function () { return [Pl([6, 50, 28, 31, 50, 25, 72, 31, 94, 50]), Pl([6, 50, 28, 67, 50, 74, 72, 67, 94, 50]), Ci(50, 49, 16), Dot(50, 49, 7)]; },
    person: function () { return personSpecs(50, 96, 1.1); },
    crowd: function () { return personSpecs(24, 92, 0.72).concat(personSpecs(50, 96, 0.82)).concat(personSpecs(76, 92, 0.72)); },
    warning: function () { return [Pg([50, 8, 94, 88, 6, 88]), Ln(50, 34, 50, 62, { w: 1.4, hi: true }), Dot(50, 75, 3.5)]; },
    calendar: function () {
      var out = [Pg([12, 18, 88, 18, 88, 90, 12, 90]), Ln(12, 34, 88, 34), Ln(30, 10, 30, 25, { w: 1.1 }), Ln(70, 10, 70, 25, { w: 1.1 })];
      for (var r = 0; r < 3; r++) for (var c = 0; c < 4; c++) out.push(Ln(22 + c * 18, 48 + r * 15, 28 + c * 18, 48 + r * 15, { w: 0.6, amp: 0.4 }));
      out.push(Ci(61, 63, 9, { hi: true, w: 0.9 }));
      return out;
    },
    battery: function () { return [Pg([8, 30, 84, 30, 84, 70, 8, 70]), Pg([84, 42, 92, 42, 92, 58, 84, 58]), Pg([14, 36, 30, 36, 30, 64, 14, 64], { fill: "hi", w: 0.6 }), Pg([34, 36, 50, 36, 50, 64, 34, 64], { fill: "hi", w: 0.6 })]; },
    robot: function () {
      return [Pg([28, 22, 72, 22, 72, 56, 28, 56]), Ln(50, 22, 50, 10), Dot(50, 8, 3, { fill: "hi" }), Ci(40, 36, 5), Ci(60, 36, 5), Pl([38, 48, 62, 48], { w: 0.8 }),
        Pg([34, 60, 66, 60, 66, 92, 34, 92]), Ln(34, 66, 20, 82), Ln(66, 66, 80, 82)];
    },
    pizza: function () { return [Pl([10, 22, 30, 12, 50, 9, 70, 12, 90, 22], { w: 1.3 }), Pl([10, 22, 50, 94, 90, 22]), Ci(42, 34, 6, { fill: "hi" }), Ci(61, 42, 6, { fill: "hi" }), Ci(50, 62, 5, { fill: "hi" })]; },
    dinosaur: function () {
      return [Pg([4, 74, 20, 70, 30, 74, 32, 90, 38, 90, 40, 76, 58, 74, 60, 90, 66, 90, 66, 72, 72, 70, 74, 56, 78, 40, 80, 24, 86, 22, 90, 16, 82, 12, 74, 18, 70, 36, 62, 48, 44, 46, 22, 52]), Dot(84, 16, 1.4)];
    },
    plane: function () {
      return [Pg([6, 52, 20, 44, 84, 44, 96, 50, 84, 58, 20, 58]), Pg([44, 52, 34, 80, 46, 80, 62, 52]), Pg([16, 46, 8, 26, 18, 26, 30, 44]),
        Dot(70, 49, 1.6), Dot(62, 49, 1.6), Dot(54, 49, 1.6), Dot(46, 49, 1.6)];
    },
    pencil: function () { return [Pg([8, 40, 72, 40, 72, 60, 8, 60]), Pl([72, 40, 92, 50, 72, 60], { sharp: true }), Ln(18, 40, 18, 60, { w: 0.7 }), Dot(90, 50, 2)]; },
    hourglass: function () { return [Ln(24, 8, 76, 8), Ln(24, 92, 76, 92), Pl([28, 8, 28, 20, 46, 48, 28, 80, 28, 92]), Pl([72, 8, 72, 20, 54, 48, 72, 80, 72, 92]), Pg([36, 86, 64, 86, 50, 70], { fill: "hi", w: 0.5 })]; },
    "money-bag": function () { return [Pg([40, 24, 30, 40, 16, 64, 20, 88, 80, 88, 84, 64, 70, 40, 60, 24], { fill: "soft" }), Pl([36, 18, 50, 26, 64, 18], { w: 0.9 })].concat(dollar(50, 62, 0.7, { hi: true })); },
    target: function () { return [Ci(50, 50, 40), Ci(50, 50, 26), Ci(50, 50, 11, { fill: "hi", hi: true }), Ln(50, 50, 88, 12, { w: 1.1 }), Pl([81, 8, 88, 12, 92, 4], { w: 0.8 })]; },
    ufo: function () { return [El(50, 56, 42, 12), Ar(50, 50, 20, 18, 180, 360), Ln(36, 68, 22, 96, { color: "muted", w: 0.7 }), Ln(64, 68, 78, 96, { color: "muted", w: 0.7 }), Dot(30, 57, 2.5, { fill: "hi" }), Dot(50, 61, 2.5, { fill: "hi" }), Dot(70, 57, 2.5, { fill: "hi" })]; },
    document: function () { return [Pg([22, 6, 66, 6, 80, 20, 80, 94, 22, 94]), Pl([66, 6, 66, 20, 80, 20], { w: 0.7 }), Ln(32, 34, 70, 34, { w: 0.6 }), Ln(32, 48, 70, 48, { w: 0.6 }), Ln(32, 62, 70, 62, { w: 0.6 }), Ln(32, 76, 56, 76, { w: 0.6 })]; },
    scale: function () {
      return [Ln(50, 12, 50, 88), Ln(30, 90, 70, 90), Ln(12, 24, 88, 30), Pl([14, 24, 6, 52], { w: 0.6 }), Pl([14, 24, 24, 52], { w: 0.6 }), Ar(15, 52, 11, 7, 0, 180), Pl([86, 30, 78, 58], { w: 0.6 }), Pl([86, 30, 96, 58], { w: 0.6 }), Ar(87, 58, 11, 7, 0, 180)];
    },
    dog: function () {
      return [Pg([20, 48, 66, 48, 70, 70, 64, 70, 62, 88, 56, 88, 56, 72, 32, 72, 30, 88, 24, 88, 24, 70, 18, 64]), Pl([20, 50, 8, 40], { w: 0.9 }),
        Pg([62, 50, 64, 32, 78, 26, 92, 34, 90, 42, 76, 44, 72, 52]), Pl([70, 30, 66, 44], { w: 0.8 }), Dot(80, 32, 1.6), Dot(91, 37, 2)];
    },
    tooth: function () { return [Pg([22, 20, 40, 14, 50, 20, 60, 14, 78, 20, 80, 44, 70, 88, 60, 90, 54, 64, 46, 64, 40, 90, 30, 88, 20, 44])]; },
  };
  var DOODLE_ALIAS = {
    idea: "lightbulb", bulb: "lightbulb", light: "lightbulb", "?": "question", "!": "exclamation", cash: "money", dollar: "coin", price: "coin", time: "clock", watch: "clock",
    earth: "globe", world: "globe", planet_earth: "globe", star: "star", weather: "rain", home: "house", city: "building", skyscraper: "building", office: "building",
    nature: "tree", plant: "tree", forest: "tree", hill: "mountain", space: "rocket", launch: "rocket", mobile: "phone", computer: "laptop", pc: "laptop", read: "book",
    learn: "book", love: "heart", science: "atom", physics: "atom", settings: "gear", machine: "gear", growth: "chart", graph: "chart", decline: "chart-down", pie: "chart-pie",
    next: "arrow", goal: "flag", cup: "coffee", tea: "coffee", package: "box", parcel: "box", toy: "ball", vehicle: "car", insect: "ant", bug: "ant", kitten: "cat", ocean: "whale",
    biology: "cell", germ: "virus", bacteria: "cell", universe: "galaxy", saturn: "planet", danger: "bomb", explosion: "bomb", birthday: "cake", seat: "chair", exit: "door",
    climb: "ladder", unlock: "key", search: "magnifier", stone: "rock", winner: "trophy", award: "trophy", mind: "brain", think: "brain", gene: "dna", genes: "dna", fruit: "apple",
    flame: "fire", energy: "lightning", power: "lightning", electricity: "lightning", see: "eye", human: "person", man: "person", woman: "person", people: "crowd", team: "crowd",
    alert: "warning", date: "calendar", schedule: "calendar", charge: "battery", ai: "robot", food: "pizza", dino: "dinosaur", flight: "plane", airplane: "plane", travel: "plane",
    write: "pencil", wait: "hourglass", savings: "money-bag", wealth: "money-bag", aim: "target", alien: "ufo", paper: "document", file: "document", law: "scale", justice: "scale",
    puppy: "dog", pet: "dog", dentist: "tooth",
  };
  var DOODLE_NAMES = Object.keys(DOODLES);
  function doodleKey(name) {
    var k = str(name).toLowerCase().trim().replace(/\s+/g, "-");
    if (DOODLES[k]) return k;
    if (DOODLE_ALIAS[k] && DOODLES[DOODLE_ALIAS[k]]) return DOODLE_ALIAS[k];
    if (k.slice(-1) === "s" && DOODLES[k.slice(0, -1)]) return k.slice(0, -1);
    return null;
  }
  /** Best doodle for a phrase (first word that names a doodle), else null. */
  function pickDoodle(text) {
    var ws = plain(text).toLowerCase().split(/[^a-z0-9?!-]+/);
    for (var i = 0; i < ws.length; i++) { var k = doodleKey(ws[i]); if (k) return k; }
    return null;
  }
  S.doodles = DOODLE_NAMES.slice();
  S.hasDoodle = function (n) { return !!doodleKey(n); };
  S.pickDoodle = pickDoodle;

  /**
   * Draw a library doodle centred at (x, y). o: size (box px), at, dur, speed, accent (accent colour
   * for its highlight strokes/fills), color (outline colour), rot, flip, layer, ws (line weight ×).
   */
  function drawDoodle(sc, name, o) {
    o = o || {};
    var key = doodleKey(name) || pickDoodle(name) || "question";
    var size = Math.max(u(8), num(o.size, u(220)));
    var s = size / 100;
    var accent = !!o.accent;
    var ink = colorOf(o.color, INK);
    var pc = new Piece(sc, { x: num(o.x, sc.W / 2), y: num(o.y, sc.H / 2), s: s, rot: o.rot, flip: o.flip, layer: o.layer, ws: num(o.ws, clamp(size / u(260), 0.55, 1.15)) });
    var specs = DOODLES[key]().map(function (q) {
      var c = {};
      for (var k in q) c[k] = q[k];
      c.p = q.p.map(function (p) { return [p[0] - 50, p[1] - 50]; });
      if (q.fp) c.fp = q.fp.map(function (p) { return [p[0] - 50, p[1] - 50]; });
      c.color = q.hi && accent ? ACC : q.color === "muted" ? MUTED : ink;
      if (q.fill === "hi") c.fill = accent ? ACC : SOFT;
      else if (q.fill === "ink") c.fill = q.hi && accent ? ACC : ink;
      else if (q.fill === "soft") c.fill = SOFT;
      return c;
    });
    var dur = o.dur;
    if (dur == null) {
      var L = 0;
      specs.forEach(function (q) { L += polyLen(q.p, q.closed) * s; });
      dur = clamp(L / (u(1500) * (o.speed || 1)), 0.45, 2.4);
    }
    var at = sc.take(o.at, dur);
    var r = pc.draw(specs, at, dur);
    return item(pc, r.t0, r.t1, { name: key });
  }

  // ───────────────────────── annotations ─────────────────────────
  function isBox(o) { return o && o.w != null && o.h != null; }
  function ptOf(o) {
    if (!o) return { x: 0, y: 0 };
    if (isBox(o)) return { x: o.cx != null ? o.cx : o.x + o.w / 2, y: o.cy != null ? o.cy : o.y + o.h / 2 };
    return { x: num(o.x, 0), y: num(o.y, 0) };
  }
  /** Point on the edge of box `b` towards point p (plus pad). Points pass through. */
  function edgeToward(b, p, pad) {
    var c = ptOf(b);
    if (!isBox(b)) return c;
    var dx = p.x - c.x, dy = p.y - c.y;
    if (Math.abs(dx) < 1e-6 && Math.abs(dy) < 1e-6) return c;
    var tx = Math.abs(dx) > 1e-6 ? b.w / 2 / Math.abs(dx) : Infinity, ty = Math.abs(dy) > 1e-6 ? b.h / 2 / Math.abs(dy) : Infinity;
    var t = Math.min(tx, ty), L = Math.sqrt(dx * dx + dy * dy);
    var k = Math.min(1, t + (pad || 0) / L);
    return { x: c.x + dx * k, y: c.y + dy * k };
  }
  /** Hand-drawn arrow from → to (items or points). o: at, dur, color, w, bend (−1…1), head, pad, layer. */
  function drawArrow(sc, from, to, o) {
    o = o || {};
    var pad = num(o.pad, u(16));
    var pT = ptOf(to), pF = ptOf(from);
    var a = edgeToward(from, pT, pad), b = edgeToward(to, pF, pad);
    var dx = b.x - a.x, dy = b.y - a.y, L = Math.sqrt(dx * dx + dy * dy) || 1;
    var bend = num(o.bend, 0.18);
    var cx = (a.x + b.x) / 2 - (dy / L) * L * bend, cy = (a.y + b.y) / 2 + (dx / L) * L * bend;
    var shaft = quadPts(a.x, a.y, cx, cy, b.x, b.y, 14);
    var ex = b.x - cx, ey = b.y - cy, el2 = Math.sqrt(ex * ex + ey * ey) || 1;
    ex /= el2; ey /= el2;
    var hl = Math.min(L * 0.4, u(26) * num(o.w, 1));
    var ang = 0.5;
    function rot(x, y, a2) { return [x * Math.cos(a2) - y * Math.sin(a2), x * Math.sin(a2) + y * Math.cos(a2)]; }
    var h1 = rot(-ex * hl, -ey * hl, ang), h2 = rot(-ex * hl, -ey * hl, -ang);
    var color = colorOf(o.color, INK);
    var specs = [{ p: shaft, color: color, w: num(o.w, 1) }];
    if (o.head !== false) specs.push({ p: [[b.x + h1[0], b.y + h1[1]], [b.x, b.y], [b.x + h2[0], b.y + h2[1]]], sharp: true, color: color, w: num(o.w, 1), amp: 0.4 });
    var dur = num(o.dur, clamp(L / u(1400), 0.3, 1));
    var at = sc.take(o.at, dur);
    var pc = new Piece(sc, { layer: o.layer || "front" });
    var r = pc.draw(specs, at, dur);
    if (o.until != null) pc.fade(0, o.until, 0.3);
    return item(pc, r.t0, r.t1, { from: a, to: b });
  }
  /** Scribbled ellipse around an item. o: at, dur, color (default accent), pad, loops. */
  function circleAround(sc, target, o) {
    o = o || {};
    var pad = num(o.pad, u(18)), c = ptOf(target);
    var rx = (isBox(target) ? target.w / 2 : u(40)) + pad * 1.4, ry = (isBox(target) ? target.h / 2 : u(40)) + pad;
    var p = ellipsePts(c.x, c.y, rx, ry, { n: 30, a0: -2.3, over: num(o.loops, 1) > 1 ? PI * 2 + 0.3 : 0.5, spiral: 0.07 });
    var dur = num(o.dur, 0.6), at = sc.take(o.at, dur);
    var pc = new Piece(sc, { layer: "front" });
    var r = pc.draw([{ p: p, color: colorOf(o.color, ACC), w: num(o.w, 1.05) }], at, dur);
    if (o.until != null) pc.fade(0, o.until, 0.3);
    return item(pc, r.t0, r.t1);
  }
  function underline(sc, target, o) {
    o = o || {};
    var b = isBox(target) ? target : { x: target.x - u(60), y: target.y, w: u(120), h: 0 };
    var y = b.y + b.h + num(o.gap, u(8)), x0 = b.x - u(6), x1 = b.x + b.w + u(6);
    var specs = [{ p: [[x0, y], [(x0 + x1) / 2, y + u(5)], [x1, y - u(4)]], color: colorOf(o.color, ACC), w: num(o.w, 1.1) }];
    if (o.double) specs.push({ p: [[x0 + u(14), y + u(13)], [x1 - u(10), y + u(9)]], color: colorOf(o.color, ACC), w: num(o.w, 1.1) * 0.85 });
    var dur = num(o.dur, 0.4), at = sc.take(o.at, dur);
    var pc = new Piece(sc, { layer: "front" });
    var r = pc.draw(specs, at, dur);
    return item(pc, r.t0, r.t1);
  }
  function crossOut(sc, target, o) {
    o = o || {};
    var b = isBox(target) ? target : { x: target.x - u(40), y: target.y - u(40), w: u(80), h: u(80) };
    var p = u(10);
    var specs = o.strike ? [{ p: [[b.x - p, b.y + b.h * 0.55], [b.x + b.w + p, b.y + b.h * 0.45]], color: colorOf(o.color, ACC), w: 1.2 }]
      : [{ p: [[b.x - p, b.y - p], [b.x + b.w + p, b.y + b.h + p]], color: colorOf(o.color, ACC), w: 1.2 }, { p: [[b.x + b.w + p, b.y - p], [b.x - p, b.y + b.h + p]], color: colorOf(o.color, ACC), w: 1.2 }];
    var dur = num(o.dur, 0.45), at = sc.take(o.at, dur);
    var pc = new Piece(sc, { layer: "front" });
    var r = pc.draw(specs, at, dur);
    return item(pc, r.t0, r.t1);
  }
  function roughRect(x, y, w, h, ov) {
    ov = ov == null ? u(7) : ov;
    return [
      { p: [[x - ov, y], [x + w + ov * 0.4, y + u(1.5)]] },
      { p: [[x + w, y - ov * 0.4], [x + w - u(1.5), y + h + ov]] },
      { p: [[x + w + ov * 0.5, y + h], [x - ov * 0.4, y + h - u(1.5)]] },
      { p: [[x, y + h + ov * 0.3], [x + u(1.5), y - ov * 0.6]] },
    ];
  }
  function boxAround(sc, target, o) {
    o = o || {};
    var pad = num(o.pad, u(16)), b = target;
    var specs = roughRect(b.x - pad, b.y - pad, b.w + pad * 2, b.h + pad * 2).map(function (q) { q.color = colorOf(o.color, INK); q.w = num(o.w, 1); return q; });
    var dur = num(o.dur, 0.6), at = sc.take(o.at, dur);
    var pc = new Piece(sc, { layer: o.layer || "back" });
    var r = pc.draw(specs, at, dur);
    return item(pc, r.t0, r.t1);
  }
  /** A comic panel border. */
  function panel(sc, x, y, w, h, o) {
    o = o || {};
    var dur = num(o.dur, 0.55), at = sc.take(o.at, dur);
    var pc = new Piece(sc, { layer: "back" });
    var r = pc.draw(roughRect(x, y, w, h, u(6)).map(function (q) { q.w = num(o.w, 1.05); return q; }), at, dur);
    return item(pc, r.t0, r.t1, { x: x, y: y, w: w, h: h, cx: x + w / 2, cy: y + h / 2 });
  }
  /** Short scribbled ground line under a figure / object. */
  function ground(sc, x0, x1, y, o) {
    o = o || {};
    var at = sc.take(o.at, 0.3);
    var pc = new Piece(sc, { layer: "back" });
    var r = pc.draw([{ p: [[x0, y], [x1, y + u(2)]], color: colorOf(o.color, INK), w: num(o.w, 0.7) }], at, num(o.dur, 0.35));
    return item(pc, r.t0, r.t1);
  }
  /** Filled accent dot + label + arrow: the classic "you are here". */
  function youAreHere(sc, x, y, o) {
    o = o || {};
    var at = sc.take(o.at, 1);
    var pc = new Piece(sc, { layer: "front" });
    var R = num(o.r, u(11));
    pc.draw([{ p: ellipsePts(x, y, R, R, { n: 14 }), fp: ringPts(x, y, R, R, 14), fill: ACC, color: ACC, w: 0.8 }], at, 0.25);
    var dx = num(o.dx, x > sc.W * 0.6 ? -1 : 1), dy = num(o.dy, y < sc.H * 0.35 ? 1 : -1);
    var tx = clamp(x + dx * u(150), sc.mx + u(120), sc.W - sc.mx - u(120)), ty = clamp(y + dy * u(110), sc.my + u(30), sc.H - sc.my - u(30));
    var txt = writeText(sc, o.text || "YOU ARE HERE", { x: tx, y: ty, size: num(o.size, u(36)), maxWidth: num(o.maxWidth, u(300)), maxLines: 2, color: o.color || "ink", at: at + 0.2 });
    var ar = drawArrow(sc, txt, { x: x, y: y }, { at: txt.t1 - 0.1, pad: u(14), bend: dx * dy > 0 ? 0.2 : -0.2, color: o.color || "ink" });
    return { x: x, y: y, t0: at, t1: ar.t1, text: txt, arrow: ar };
  }
  /** Text with an arrow pointing to `target` (point or item). o: x, y (text centre) + writeText opts. */
  function labelTo(sc, text, target, o) {
    o = o || {};
    var txt = writeText(sc, text, o);
    var ar = drawArrow(sc, txt, target, { at: txt.t1 - 0.05, color: o.arrowColor || o.color, bend: o.bend, pad: o.pad, w: 0.9 });
    return { text: txt, arrow: ar, t0: txt.t0, t1: ar.t1, x: txt.x, y: txt.y, w: txt.w, h: txt.h, cx: txt.cx, cy: txt.cy };
  }

  // ───────────────────────── speech & thought ─────────────────────────
  /**
   * Floating speech text with a short tail line to the speaker's head (webcomic style), or a
   * hand-drawn bubble (o.style = "bubble"). o: x, y (text centre), maxWidth, size, at, until, color.
   */
  function sayText(sc, fig, text, o) {
    o = o || {};
    var at = clampT(o.at != null ? o.at : sc.cursor);
    var hd = fig.head(at + 0.3);
    var f = fig.facing(at + 0.3);
    var size = num(o.size, u(44));
    var maxW = num(o.maxWidth, Math.min(sc.W * 0.4, u(620)));
    var x = num(o.x, hd.x + f * fig.h * 0.3), y = num(o.y, hd.top - fig.h * 0.32);
    var L = layoutText(str(text), { size: size, maxWidth: maxW, maxLines: num(o.maxLines, 4) });
    // keep inside the frame
    x = clamp(x, sc.mx + L.w / 2, sc.W - sc.mx - L.w / 2);
    y = clamp(y, sc.my + L.h / 2, sc.H - sc.my - L.h / 2);
    var txt = writeText(sc, text, { x: x, y: y, size: size, maxWidth: maxW, maxLines: num(o.maxLines, 4), at: at, until: o.until, color: o.color, align: o.align || "center", dur: o.dur });
    var bub = o.style === "bubble";
    var pc = new Piece(sc, { layer: bub ? "back" : "front" });
    var head = { x: hd.x, y: hd.y };
    var box = { x: txt.x - (bub ? u(26) : u(6)), y: txt.y - (bub ? u(18) : u(4)), w: txt.w + (bub ? u(52) : u(12)), h: txt.h + (bub ? u(36) : u(8)) };
    box.cx = box.x + box.w / 2; box.cy = box.y + box.h / 2;
    // head below the text: the tail drops straight from the text's underside (no crossing lines)
    var s0 = !bub && head.y > box.y + box.h + u(20) ? { x: clamp(head.x, box.x + u(14), box.x + box.w - u(14)), y: box.y + box.h + u(6) } : edgeToward(box, head, u(10));
    var dx = head.x - s0.x, dy = head.y - s0.y, L2 = Math.sqrt(dx * dx + dy * dy) || 1;
    var stop = Math.min(L2 * 0.75, Math.max(L2 - hd.r * 1.9, L2 * 0.3));
    var e = { x: s0.x + (dx / L2) * stop, y: s0.y + (dy / L2) * stop };
    var specs = [];
    if (bub) {
      var cx = box.cx, cy = box.cy, rx = box.w / 2 * 1.08, ry = box.h / 2 * 1.15;
      specs.push({ p: ellipsePts(cx, cy, rx, ry, { n: 32, over: 0.2 }), w: 0.95, fill: PAPER, fp: ringPts(cx, cy, rx, ry, 32) });
      var b0 = edgeToward({ x: cx - rx, y: cy - ry, w: rx * 2, h: ry * 2, cx: cx, cy: cy }, head, -u(4));
      specs.push({ p: [[b0.x - u(14), b0.y], [e.x, e.y], [b0.x + u(14), b0.y]], sharp: true, w: 0.9 });
    } else {
      var mid = { x: (s0.x + e.x) / 2 + (dy / L2) * u(8), y: (s0.y + e.y) / 2 - (dx / L2) * u(8) };
      specs.push({ p: [[s0.x, s0.y], [mid.x, mid.y], [e.x, e.y]], w: 0.85 });
    }
    var r = pc.draw(specs, Math.max(0, at - 0.12), bub ? 0.35 : 0.22);
    if (o.until != null) pc.fade(0, o.until, 0.35);
    txt.tail = item(pc, r.t0, r.t1);
    return txt;
  }
  /**
   * Thought cloud that grows out of a figure's head and frames rect {x,y,w,h}.
   * o: at, dur, text (written inside), size. Returns { x,y,w,h (inner box), t1, cloud }.
   */
  function thoughtCloud(sc, fig, rect, o) {
    o = o || {};
    var at = sc.take(o.at, 1);
    var hd = fig.head(at);
    var cx = rect.x + rect.w / 2, cy = rect.y + rect.h / 2, rx = rect.w / 2, ry = rect.h / 2;
    // trailing bubbles from head to cloud edge
    var edge = edgeToward({ x: cx - rx, y: cy - ry, w: rx * 2, h: ry * 2, cx: cx, cy: cy }, { x: hd.x, y: hd.y }, -ry * 0.12);
    var trail = new Piece(sc, { layer: "front" });
    var specsT = [];
    [0.28, 0.52, 0.76].forEach(function (k, i) {
      var px = lerp(hd.x, edge.x, k), py = lerp(hd.top - u(10), edge.y, k), r = u(9 + i * 7) * clamp(fig.h / u(400), 0.6, 1.4);
      specsT.push({ p: ellipsePts(px, py, r, r * 0.85, { n: 14 }), w: 0.8, fill: PAPER, fp: ringPts(px, py, r, r * 0.85, 14) });
    });
    var rT = trail.draw(specsT, at, 0.45);
    // cloud grows from the trail end
    var pc = new Piece(sc, { x: cx, y: cy, layer: "back" });
    var cp = cloudPts(0, 0, rx, ry, Math.max(8, Math.round((rx + ry) / u(55))), 0.1);
    var t0 = rT.t1 - 0.05;
    pc.draw([{ p: cp, closed: true, w: 0.95, fill: PAPER, amp: 0.6 }], t0, 0.5);
    pc.x = cx; pc.y = cy;
    var ex = edge.x, ey = edge.y;
    pc.to({ x: ex, y: ey, s: 0.12 }, t0 - 0.02, 0.01).to({ x: cx, y: cy, s: 1 }, t0, 0.55, "outBack");
    var inner = { x: cx - rx * 0.72, y: cy - ry * 0.66, w: rx * 1.44, h: ry * 1.32 };
    inner.cx = cx; inner.cy = cy;
    inner.t0 = at; inner.t1 = t0 + 0.55; inner.cloud = pc; inner.trail = trail;
    if (o.until != null) { pc.fade(0, o.until, 0.4); trail.fade(0, o.until, 0.4); }
    return inner;
  }

  // ───────────────────────── hand-drawn graph ─────────────────────────
  /**
   * o: x, y, w, h (whole graph box incl. labels), type ("line" | "bar"), values, labels, xLabel,
   * yLabel, highlight (index), annotations [{index, text, at}], at (axes), dataAt, dataDur, accent.
   * Returns { pts: [{x,y}], ox, oy, pw, ph, t1 }.
   */
  function drawGraph(sc, o) {
    o = o || {};
    var vals = arr(o.values).map(function (v) { return num(v, 0); }).slice(0, 12);
    if (vals.length < 2) vals = [1, 2, 3, 5];
    var n = vals.length, type = o.type === "bar" ? "bar" : "line";
    var labels = arr(o.labels).map(str);
    var fs = num(o.size, u(34));
    var x = o.x, y = o.y, w = o.w, h = o.h;
    var hasCat = labels.some(Boolean);
    var padL = o.yLabel ? fs * 1.9 : u(16), padB = (hasCat ? fs * 2.5 : u(10)) + (o.xLabel ? fs * 1.7 : 0), padT = num(o.padTop, fs * 2.6);
    var ox = x + padL, oy = y + h - padB, pw = Math.max(u(80), w - padL - u(30)), ph = Math.max(u(80), h - padB - padT);
    var at = sc.take(o.at, 0.8);
    var axes = new Piece(sc, { layer: "mid" });
    var aw = u(22);
    axes.draw([
      { p: [[ox, oy - ph - u(14)], [ox, oy], [ox + pw + u(14), oy]], sharp: true, w: 1.05 },
      { p: [[ox - aw * 0.45, oy - ph - u(14) + aw * 0.8], [ox, oy - ph - u(16)], [ox + aw * 0.45, oy - ph - u(14) + aw * 0.8]], sharp: true, w: 1, amp: 0.4 },
      { p: [[ox + pw + u(14) - aw * 0.8, oy - aw * 0.45], [ox + pw + u(16), oy], [ox + pw + u(14) - aw * 0.8, oy + aw * 0.45]], sharp: true, w: 1, amp: 0.4 },
    ], at, 0.75);
    var tl = at + 0.6;
    if (o.yLabel) writeText(sc, o.yLabel, { x: x + fs * 0.75, y: oy - ph / 2, rot: -90, size: fs, minSize: fs * 0.5, maxWidth: ph * 1.05, maxLines: 1, at: tl, caps: o.caps });
    if (o.xLabel) writeText(sc, o.xLabel, { x: ox + pw / 2, y: y + h - fs * 0.7, size: fs, maxWidth: pw, maxLines: 1, at: tl + 0.2, caps: o.caps });
    var vmax = Math.max.apply(null, vals), vmin = Math.min(0, Math.min.apply(null, vals));
    if (vmax <= vmin) vmax = vmin + 1;
    var pts = vals.map(function (v, i) {
      var px = type === "bar" ? ox + (pw * (i + 0.5)) / n : ox + pw * (0.05 + (0.9 * i) / (n - 1));
      return { x: px, y: oy - ph * 0.92 * ((v - vmin) / (vmax - vmin)), v: v };
    });
    var dAt = o.dataAt != null ? clampT(o.dataAt) : tl + 0.5;
    var dDur = num(o.dataDur, clamp(n * 0.28, 0.8, 2.4));
    var data = new Piece(sc, { layer: "mid" });
    var hi = o.highlight != null ? num(o.highlight, -1) : -1;
    if (type === "line") {
      data.draw([{ p: pts.map(function (q) { return [q.x, q.y]; }), w: 1.3, color: o.accent ? ACC : INK }], dAt, dDur);
      if (hi >= 0 && hi < n) { var hpnt = pts[hi]; new Piece(sc, { layer: "front" }).draw([{ p: ellipsePts(hpnt.x, hpnt.y, u(9), u(9), { n: 12 }), fp: ringPts(hpnt.x, hpnt.y, u(9), u(9), 12), fill: ACC, color: ACC, w: 0.7 }], dAt + dDur * (hi / Math.max(1, n - 1)), 0.2); }
    } else {
      var bw = (pw / n) * 0.56;
      pts.forEach(function (q, i) {
        var t0 = dAt + (dDur * i) / n, bh = oy - q.y;
        var bp = new Piece(sc, { layer: "mid" });
        var rect = [[q.x - bw / 2, oy], [q.x - bw / 2, q.y], [q.x + bw / 2, q.y], [q.x + bw / 2, oy]];
        bp.draw([{ p: rect, w: 1, sharp: false, hatch: i === hi ? ACC : MUTED, hatchW: i === hi ? 0.75 : 0.5, gap: i === hi ? 11 : 15, closed: false }], t0, Math.max(0.3, dDur / n));
        void bh;
      });
    }
    if (hasCat) {
      labels.slice(0, n).forEach(function (lb, i) {
        if (!lb) return;
        writeText(sc, lb, { x: pts[i].x, y: oy + fs * 0.95, anchor: "top", size: fs * 0.82, maxWidth: Math.max(u(60), (pw / n) * 0.96), maxLines: 2, at: dAt + (dDur * i) / n, dur: 0.3 });
      });
    }
    var t1 = dAt + dDur;
    // annotations: text above the point + arrow down to it
    var placedA = [];
    arr(o.annotations).slice(0, 3).forEach(function (an, j) {
      if (!an || !an.text) return;
      var i = clamp(Math.round(num(an.index, n - 1)), 0, n - 1);
      var P = pts[i];
      var tAt = an.at != null ? clampT(an.at) : t1 + 0.2 + j * 0.8;
      var right = P.x < ox + pw * 0.5;
      var aw2 = Math.min(pw * 0.5, u(420));
      var tx = clamp(P.x + (right ? 1 : -1) * aw2 * 0.45, ox + aw2 / 2, ox + pw - aw2 / 2 + u(20));
      var ty = Math.max(y + fs * 0.9, P.y - Math.max(u(110), ph * 0.28));
      if (P.y - ty < u(60)) ty = Math.min(oy - fs, P.y + u(120));
      var LA = layoutText(an.text, { size: fs * 0.95, maxWidth: aw2, maxLines: 2 });
      placedA.forEach(function (q) {
        if (Math.abs(q.x - tx) < (q.w + LA.w) / 2 + u(10) && Math.abs(q.y - ty) < (q.h + LA.h) / 2 + u(8)) ty = q.y + (q.h + LA.h) / 2 + u(10);
      });
      if (Math.abs(ty - P.y) < LA.h / 2 + u(16)) ty = P.y + (ty < P.y ? -1 : 1) * (LA.h / 2 + u(30));
      ty = clamp(ty, y + LA.h / 2, oy - LA.h / 2 - u(6));
      placedA.push({ x: tx, y: ty, w: LA.w, h: LA.h });
      var lab = writeText(sc, an.text, { x: tx, y: ty, size: fs * 0.95, maxWidth: aw2, maxLines: 2, at: tAt });
      drawArrow(sc, lab, { x: P.x, y: P.y + (type === "bar" ? -u(6) : 0) }, { at: lab.t1 - 0.05, pad: u(12), bend: right ? -0.25 : 0.25, w: 0.9 });
      t1 = Math.max(t1, lab.t1 + 0.4);
    });
    return { pts: pts, ox: ox, oy: oy, pw: pw, ph: ph, t1: t1, x: x, y: y, w: w, h: h, cx: x + w / 2, cy: y + h / 2 };
  }

  // ───────────────────────── template helpers ─────────────────────────
  var T = {};
  function ensureScene(root) { return current || new Scene(root || V.root()); }
  function keyOf(text, kw) { return kw ? str(kw) : S.autoKey(plain(text)); }
  function heading(sc, text, o) {
    o = o || {};
    if (!text) return null;
    var size = num(o.size, sc.portrait ? u(66) : u(62));
    var it = writeText(sc, text, { x: num(o.x, sc.W / 2), y: num(o.y, sc.my + size * 0.75), anchor: o.anchor || "center", size: size, maxWidth: num(o.maxWidth, sc.W - sc.mx * 2), maxLines: num(o.maxLines, 2), at: num(o.at, 0.15), layer: o.layer });
    if (o.underline !== false) underline(sc, it, { at: it.t1, dur: 0.35, color: "accent", gap: u(4) });
    return it;
  }
  var MOODS = {
    neutral: { pose: "talk" }, explain: { pose: "explain" }, excited: { pose: "celebrate", mark: "exclaim", expr: "grin" },
    confused: { pose: "shrug", mark: "question" }, annoyed: { pose: "crossed", mark: "anger", expr: "angry" },
    panic: { pose: "panic", mark: "sweat" }, smug: { pose: "smug" }, sad: { pose: "sad" }, thinking: { pose: "think" },
    pointing: { pose: "point" }, celebrate: { pose: "celebrate", mark: "sparkle", jump: true }, surprised: { pose: "mind-blown", mark: "exclaim", expr: "surprised" },
  };
  function act(fig, name, at) {
    name = str(name || "stand").toLowerCase();
    if (name === "jump") { fig.jump(at + 0.15); return; }
    if (name === "fall" || name === "fallen") { fig.fall(at + 0.1); return; }
    fig.pose(POSES[name] ? name : "stand", at);
    if (name === "panic") fig.mark("sweat", at + 0.2, 2);
    if (name === "celebrate") fig.mark("sparkle", at + 0.2, 1.2);
    if (name === "think") fig.mark("question", at + 0.4, 1.4);
    if (name === "mind-blown") fig.mark("exclaim", at + 0.2, 1.4);
  }
  var POSE_ACTIONS = ["stand", "talk", "explain", "point", "point-up", "shrug", "wave", "think", "panic", "celebrate", "sad", "facepalm", "hold", "crossed", "smug", "mind-blown", "sit", "jump", "fall"];
  function noteAngles(sc) { return sc.portrait ? [-150, -30, 180, 0] : sc.square ? [-50, -135, 25, 160] : [-32, 18, -90, 60]; }

  // ── figure-explains ── a cast member next to one big doodle with notes
  T["figure-explains"] = function (root, p) {
    var sc = new Scene(root);
    var W = sc.W, H = sc.H, P = sc.portrait, Q = sc.square;
    var head = heading(sc, p.title, { at: 0.15 });
    var top = head ? head.y + head.h + u(30) : sc.my;
    var name = p.doodle || pickDoodle(p.label) || "lightbulb";
    var tKey = syncAt(keyOf(p.label, p.keyword || doodleKey(name)), 0.3, Math.min(1.6, D() * 0.25), 0.55);
    tKey = Math.max(tKey, head ? head.t1 : 0.6);
    var size = P ? W * 0.5 : Q ? H * 0.34 : Math.min(H * 0.42, W * 0.3);
    var dx = P ? W * 0.5 : W * (Q ? 0.64 : 0.6), dy = P ? top + size * 0.62 : Math.max(top + size * 0.55, H * (Q ? 0.44 : 0.46));
    var fh = P ? H * 0.27 : Q ? H * 0.42 : H * (head ? 0.46 : 0.52);
    var fx0 = P ? W * 0.3 : W * (Q ? 0.19 : 0.19), gy = H * (P ? 0.93 : 0.9);
    var fig = new Figure(sc, p.character || "pip", { x: fx0, y: gy, h: fh, facing: P ? "front" : "right", at: 0.1 });
    ground(sc, fx0 - fh * 0.3, fx0 + fh * 0.32, gy + u(2), { at: 0.15 });
    fig.talk(0.2, D());
    fig.pose("wave", 0.6, 0.3).pose("talk", 1.3, 0.4);
    var doodle = drawDoodle(sc, name, { x: dx, y: dy, size: size, at: tKey, accent: true });
    fig.face("right", tKey - 0.2).pose(P ? "point-up" : "point", tKey - 0.15, 0.3).pose(p.pose || "explain", doodle.t1 + 1.2, 0.4);
    var lab = null;
    if (p.label) lab = writeText(sc, p.label, { x: dx, y: doodle.y + doodle.h + u(48), size: u(48), maxWidth: P ? W * 0.84 : Q ? W * 0.56 : W * 0.5, maxLines: 2, at: doodle.t1 + 0.05 });
    var notes = arr(p.notes).filter(Boolean).slice(0, 3);
    var angs = noteAngles(sc);
    var times = S.syncTimes(notes.map(function (n) { return keyOf(n); }), { start: (lab ? lab.t1 : doodle.t1) + 0.3, lead: 0.35 });
    notes.forEach(function (n, i) {
      var a = angs[i] * D2R, R = size * 0.5 + (P ? u(150) : u(190));
      var nw = P ? W * 0.36 : Q ? W * 0.3 : W * 0.22;
      var nx = clamp(dx + Math.cos(a) * R * (P ? 1 : 1.25), sc.mx + nw / 2, W - sc.mx - nw / 2);
      var ny = clamp(dy + Math.sin(a) * R, top + u(40), H - sc.my - u(40));
      if (P && Math.abs(Math.sin(a)) < 0.3) ny = dy + size * 0.18;
      var anchor = { x: dx + Math.cos(a) * size * 0.3, y: dy + Math.sin(a) * size * 0.3 };
      labelTo(sc, n, anchor, { x: nx, y: ny, size: u(36), maxWidth: nw, maxLines: 3, at: Math.max(times[i], doodle.t1 + 0.2), color: "ink", bend: i % 2 ? 0.2 : -0.2 });
    });
    if (p.says) {
      var hd = fig.head(1);
      sayText(sc, fig, p.says, P ? { x: W * 0.68, y: hd.y - fh * 0.15, maxWidth: W * 0.5, size: u(40), at: 0.9 } : { x: fx0 + fh * 0.25, y: hd.top - u(70), maxWidth: Math.min(W * 0.32, u(520)), size: u(40), at: 0.9 });
    }
    if (p.endPose) act(fig, p.endPose, Math.max(doodle.t1 + 1.5, D() - 1.6));
  };

  // ── conversation ── two figures, webcomic-style floating dialogue
  T.conversation = function (root, p) {
    var sc = new Scene(root);
    var W = sc.W, H = sc.H, P = sc.portrait, Q = sc.square;
    var names = [p.left || "pip", p.right || (p.left === "ada" ? "hank" : "ada")];
    var xs = P ? [W * 0.27, W * 0.73] : Q ? [W * 0.26, W * 0.74] : [W * 0.27, W * 0.73];
    var fh = P ? H * 0.28 : Q ? H * 0.4 : H * 0.44, gy = H * (P ? 0.93 : 0.91);
    var A = new Figure(sc, names[0], { x: xs[0], y: gy, h: fh, facing: "right", at: 0.1 });
    var B = new Figure(sc, names[1], { x: xs[1], y: gy, h: fh, facing: "left", at: 0.3 });
    ground(sc, sc.mx, W - sc.mx, gy + u(2), { at: 0.05, dur: 0.5 });
    var lines = arr(p.lines).filter(function (l) { return l && l.text; }).slice(0, 8);
    if (!lines.length) lines = [{ speaker: "left", text: "So... what now?" }, { speaker: "right", text: "No idea." }];
    var win = lineWindows(lines.map(function (l) { return l.text; }), { start: 0.6 });
    var lastOf = { left: null, right: null };
    var figs = { left: A, right: B };
    if (p.title) heading(sc, p.title, { at: 0.1, size: u(52) });
    var topY = p.title ? sc.my + u(110) : sc.my;
    lines.forEach(function (l, i) {
      var side = l.speaker === "right" || l.speaker === 1 || l.speaker === names[1] ? "right" : "left";
      if (names[0] === names[1]) side = i % 2 ? "right" : "left";
      var fig = figs[side], other = figs[side === "left" ? "right" : "left"], w = win[i];
      fig.talk(w.start, w.end);
      var mood = MOODS[l.mood] || MOODS.neutral;
      if (mood.jump) fig.jump(w.start + 0.25, fh * 0.25);
      else fig.pose(mood.pose, w.start - 0.1);
      if (mood.mark) fig.mark(mood.mark, w.start + 0.2, Math.min(1.8, w.end - w.start + 0.5));
      if (mood.expr) fig.expr(mood.expr, w.start);
      other.pose(l.reaction && POSES[l.reaction] ? l.reaction : "listen", w.start + 0.15);
      if (l.reaction === "panic") other.mark("sweat", w.start + 0.3, 1.5);
      var maxW = P ? W * 0.56 : Q ? W * 0.44 : W * 0.38;
      var size = P ? u(46) : u(46);
      var LT = layoutText(l.text, { size: size, maxWidth: maxW, maxLines: 4 });
      var headTop = gy - fh * 1.08;
      var tx, ty;
      if (P) {
        // left speaker's slot sits higher; right speaker's just above the heads
        tx = side === "left" ? sc.mx + LT.w / 2 : W - sc.mx - LT.w / 2;
        ty = side === "left" ? Math.max(topY + LT.h / 2 + u(20), headTop - H * 0.25 - LT.h / 2) : headTop - u(110) - LT.h / 2;
      } else {
        tx = xs[side === "left" ? 0 : 1] + (side === "left" ? 1 : -1) * W * 0.04;
        ty = Math.max(topY + LT.h / 2 + u(10), headTop - u(120) - LT.h / 2);
      }
      if (lastOf[side]) lastOf[side].piece.fade(0, w.start - 0.15, 0.25), lastOf[side].tail.piece.fade(0, w.start - 0.15, 0.25);
      lastOf[side] = sayText(sc, fig, l.text, { x: tx, y: ty, maxWidth: maxW, size: size, maxLines: 4, at: w.start - 0.1, align: P ? (side === "left" ? "left" : "right") : "center" });
    });
    if (p.endPose) { var last = win[win.length - 1]; act(A, p.endPose, last.end + 0.3); act(B, p.endPose, last.end + 0.4); }
  };

  // ── hand-drawn-graph ──
  T["hand-drawn-graph"] = function (root, p) {
    var sc = new Scene(root);
    var W = sc.W, H = sc.H, P = sc.portrait, Q = sc.square;
    var head = heading(sc, p.title, { at: 0.15 });
    var top = head ? head.y + head.h + u(24) : sc.my;
    var hasFig = !!p.character;
    var capH = p.caption ? u(80) : 0;
    var box;
    if (P) box = { x: sc.mx, y: top, w: W - sc.mx * 2, h: H * 0.52 };
    else if (Q) box = { x: sc.mx, y: top, w: W - sc.mx * 2, h: H * (hasFig ? 0.66 : 0.86) - top - capH * (hasFig ? 0 : 0.5) };
    else box = { x: sc.mx, y: top, w: W * (hasFig ? 0.7 : 0.86), h: H - top - sc.my - capH };
    var dataAt = syncAt(p.keyword, 0.3, Math.max(1.2, (head ? head.t1 : 0) + 0.9), 0.4);
    var anns = arr(p.annotations).slice(0, 3).map(function (a) { return { index: a.index, text: a.text, at: syncAt(keyOf(a.text, a.keyword), dataAt, null, 0.35) }; });
    // keep annotations after the data
    var dDur = clamp(arr(p.values).length * 0.3, 0.9, 2.4);
    anns.forEach(function (a, i) { if (a.at == null || isNaN(a.at) || a.at < dataAt + dDur) a.at = dataAt + dDur + 0.3 + i * 0.9; });
    var gr = drawGraph(sc, { x: box.x, y: box.y, w: box.w, h: box.h, type: p.type, values: p.values, labels: p.labels, xLabel: p.xLabel, yLabel: p.yLabel, highlight: p.highlight, annotations: anns, at: (head ? head.t1 : 0.2) + 0.05, dataAt: dataAt, dataDur: dDur, size: P ? u(32) : u(34), caps: true });
    var fig = null;
    if (hasFig) {
      var fh = P ? H * 0.25 : Q ? H * 0.25 : H * 0.44, gy = P ? H * 0.93 : H * 0.94, fx0 = P ? W * 0.24 : Q ? W * 0.18 : W * 0.87;
      fig = new Figure(sc, p.character, { x: fx0, y: gy, h: fh, facing: P || Q ? "right" : "left", at: 0.3 });
      ground(sc, fx0 - fh * 0.3, fx0 + fh * 0.3, gy + u(2), { at: 0.35 });
      fig.talk(0.3, D());
      fig.pose("talk", 1.2).pose(P || Q ? "point-up" : "point", dataAt - 0.1).pose("explain", dataAt + dDur + 0.6);
      if (p.endPose) act(fig, p.endPose, Math.max(gr.t1 + 0.3, D() - 1.5));
    }
    if (p.caption) {
      var cy = P ? H * 0.72 : Q && hasFig ? H * 0.83 : H - sc.my - u(20);
      var cx = P ? W * 0.62 : Q && hasFig ? W * 0.62 : box.x + box.w / 2;
      writeText(sc, p.caption, { x: cx, y: cy, size: u(36), maxWidth: P ? W * 0.66 : Q && hasFig ? W * 0.62 : box.w * 0.9, maxLines: P ? 3 : 2, at: Math.min(D() - 1.4, gr.t1 + 0.2), color: "muted" });
    }
  };

  // ── labelled-diagram ──
  var WHERE = { top: [0, -0.36], "top-right": [0.3, -0.3], right: [0.38, 0], "bottom-right": [0.3, 0.3], bottom: [0, 0.38], "bottom-left": [-0.3, 0.3], left: [-0.38, 0], "top-left": [-0.3, -0.3], center: [0.02, 0.02] };
  var WHERE_ORDER = ["top-right", "bottom-left", "top-left", "bottom-right", "right", "left"];
  T["labelled-diagram"] = function (root, p) {
    var sc = new Scene(root);
    var W = sc.W, H = sc.H, P = sc.portrait, Q = sc.square;
    var head = heading(sc, p.title, { at: 0.15 });
    var top = head ? head.y + head.h + u(20) : sc.my;
    var name = p.doodle || "globe";
    var labels = arr(p.labels).filter(function (l) { return l && l.text; }).slice(0, 6);
    var bottomLim = H - sc.my - (p.caption ? u(70) : 0);
    var size = P ? W * 0.6 : Q ? H * 0.42 : Math.min(H * 0.6, W * 0.36);
    var fs = P ? u(38) : Q ? u(34) : u(38), gapY = u(18);
    var lw = P ? (W - sc.mx * 2) * 0.48 : Math.max(u(170), (W - size) / 2 - sc.mx - u(24));
    // 1. resolve each label's anchor + group
    var specs = labels.map(function (l, i) {
      var wh = WHERE[l.where] ? l.where : WHERE_ORDER[i % WHERE_ORDER.length];
      var off = WHERE[wh];
      var dir = wh === "center" ? [0.7, -0.7] : [off[0], off[1]];
      var L = layoutText(l.text, { size: fs, maxWidth: lw, maxLines: 3 });
      return { l: l, i: i, off: off, dir: dir, h: L.h, wh: wh };
    });
    // clear-cut sides first, then ambiguous anchors (centre / straight up, down, left, right) go
    // to whichever group currently has fewer labels so columns stay balanced
    var cnt = { r: 0, l: 0, lo: 0, up: 0 };
    specs.forEach(function (q) {
      if (Math.abs(q.dir[0]) > 0.01 && q.wh !== "center") { q.right = q.dir[0] > 0; cnt[q.right ? "r" : "l"]++; }
      if (Math.abs(q.dir[1]) > 0.01 && q.wh !== "center") { q.lower = q.dir[1] > 0; cnt[q.lower ? "lo" : "up"]++; }
    });
    specs.forEach(function (q) {
      if (q.right == null) { q.right = cnt.r <= cnt.l; cnt[q.right ? "r" : "l"]++; }
      if (q.lower == null) { q.lower = cnt.lo < cnt.up; cnt[q.lower ? "lo" : "up"]++; }
    });
    var cx = W / 2, cy;
    if (P) {
      // portrait: labels in two columns above and below the doodle
      var stackH = function (lw2, right) { var hsum = 0; specs.forEach(function (q) { if (q.lower === lw2 && q.right === right) hsum += q.h + gapY; }); return hsum; };
      var topH = Math.max(stackH(false, false), stackH(false, true));
      var botH = Math.max(stackH(true, false), stackH(true, true));
      size = Math.min(size, bottomLim - top - topH - botH - u(80));
      size = Math.max(size, W * 0.34);
      cy = top + topH + u(40) + size / 2;
      [false, true].forEach(function (lower) {
        [false, true].forEach(function (right) {
          var y = lower ? cy + size / 2 + u(40) : cy - size / 2 - u(40);
          specs.filter(function (q) { return q.lower === lower && q.right === right; }).forEach(function (q) {
            q.y = lower ? y + q.h / 2 : y - q.h / 2;
            y += (lower ? 1 : -1) * (q.h + gapY);
            q.x = right ? W - sc.mx - lw / 2 : sc.mx + lw / 2;
          });
        });
      });
    } else {
      cy = clamp(Math.max(top + size * 0.55, H * 0.55), top + size / 2, bottomLim - size / 2);
      [false, true].forEach(function (right) {
        var col = specs.filter(function (q) { return q.right === right; });
        col.forEach(function (q) { q.x = right ? W - sc.mx - lw / 2 : sc.mx + lw / 2; q.y = cy + q.off[1] * size * 1.5; });
        col.sort(function (a, b) { return a.y - b.y; });
        for (var k = 1; k < col.length; k++) col[k].y = Math.max(col[k].y, col[k - 1].y + (col[k - 1].h + col[k].h) / 2 + gapY);
        var over = col.length ? col[col.length - 1].y + col[col.length - 1].h / 2 - bottomLim : 0;
        if (over > 0) col.forEach(function (q) { q.y -= over; });
        var under = col.length ? top - (col[0].y - col[0].h / 2) : 0;
        if (under > 0) col.forEach(function (q) { q.y += under; });
      });
    }
    var dAt = syncAt(p.keyword || doodleKey(name), 0.2, (head ? head.t1 : 0.2) + 0.1, 0.5);
    var dd = drawDoodle(sc, name, { x: cx, y: cy, size: size, at: dAt, accent: !!p.accent });
    var times = S.syncTimes(labels.map(function (l) { return keyOf(l.text, l.keyword); }), { start: dd.t1 + 0.2, lead: 0.35 });
    specs.forEach(function (q) {
      var anchor = { x: cx + q.off[0] * size, y: cy + q.off[1] * size };
      labelTo(sc, q.l.text, anchor, { x: q.x, y: q.y, size: fs, maxWidth: lw, maxLines: 3, at: Math.max(times[q.i], dd.t1 + 0.1), bend: q.right ? 0.2 : -0.2 });
    });
    if (p.youAreHere) {
      var wh2 = WHERE[p.herePosition] ? p.herePosition : "bottom-right";
      var o2 = WHERE[wh2];
      var tHere = syncAt("here", 0.3, Math.max(dd.t1 + 0.5, D() - 2.2), 0.4);
      youAreHere(sc, cx + o2[0] * size * 0.8, cy + o2[1] * size * 0.8, { text: p.youAreHere === true ? "YOU ARE HERE" : str(p.youAreHere), at: tHere, dx: o2[0] >= 0 ? 1 : -1, dy: o2[1] > 0 ? 1 : -1 });
    }
    if (p.caption) writeText(sc, p.caption, { x: W / 2, y: H - sc.my - u(10), size: u(36), maxWidth: W * 0.84, maxLines: 2, color: "muted", at: Math.min(D() - 1.2, dd.t1 + 2) });
  };

  // ── scale-comparison ── tiny → huge, the camera keeps zooming out
  T["scale-comparison"] = function (root, p) {
    var sc = new Scene(root, { drift: 0 });
    var W = sc.W, H = sc.H, P = sc.portrait;
    var items = arr(p.items).filter(function (it) { return it && (it.doodle || it.label); }).slice(0, 6);
    if (items.length < 2) items = [{ doodle: "ant", label: "ant" }, { doodle: "person", label: "you" }, { doodle: "mountain", label: "mountain" }];
    var n = items.length;
    var ratio = clamp(num(p.ratio, 3), 1.8, 4.5);
    var G = H * (P ? 0.66 : 0.72);
    var h0 = H * (P ? 0.2 : 0.34);
    var hs = [], xs = [], x = W * 0.42;
    for (var i = 0; i < n; i++) {
      hs.push(h0 * Math.pow(ratio, i));
      if (i === 0) xs.push(x);
      else xs.push(xs[i - 1] + hs[i - 1] * 0.55 + hs[i] * 0.62);
    }
    var title = p.title ? writeText(sc, p.title, { x: W / 2, y: sc.my + u(40), size: u(56), maxWidth: W - sc.mx * 2, maxLines: 2, at: 0.15, layer: "hud" }) : null;
    var keys = items.map(function (it) { return it.keyword || keyOf(it.label) || doodleKey(it.doodle); });
    var times = S.syncTimes(keys, { start: 0.4, end: Math.max(1, D() - 2.6), lead: 0.7, minGap: 1.1 });
    var fig = null;
    if (p.character) {
      var fh = hs[0] * 0.95;
      fig = new Figure(sc, p.character, { x: xs[0] - hs[0] * 0.75, y: G, h: fh, facing: "right", at: 0.2, ws: fh / u(430) });
      fig.talk(0.3, times.length > 1 ? times[1] : D());
      fig.pose("point", times[0] + 0.4);
    }
    var lastT = 0;
    items.forEach(function (it, i) {
      var h = hs[i], t0 = times[i];
      var ws = h / u(330);
      // camera: frame previous + current item
      var lo = i > 0 ? xs[i - 1] - hs[i - 1] * 0.6 : xs[0] - h * (fig ? 1.3 : 0.9);
      var hi = xs[i] + h * 0.62;
      var extra = p.title ? 0.22 : 0;
      var rect = { x: lo, y: G - h * (1.32 + extra), w: hi - lo, h: h * (1.72 + extra) };
      if (P) { rect.y = G - h * (1.5 + extra); rect.h = h * (2.1 + extra); }
      if (i === 0) sc.camSet({ cx: rect.x + rect.w / 2, cy: rect.y + rect.h / 2, z: Math.min(W / (rect.w * 1.25), H / (rect.h * 1.3)) });
      else sc.camFrame(rect, t0 - 0.35, 1.1, "inOutCubic", 0.14);
      var d = drawDoodle(sc, it.doodle || pickDoodle(it.label) || "rock", { x: xs[i], y: G - h * 0.5, size: h, at: t0 + (i ? 0.55 : 0.1), ws: ws, accent: i === n - 1 });
      // ground under it
      var gp = new Piece(sc, { layer: "back", ws: ws });
      gp.draw([{ p: [[xs[i] - h * 0.62, G + u(2) * ws], [xs[i] + h * 0.62, G]], w: 0.7 }], d.t0, 0.3);
      if (it.label) writeText(sc, it.label, { x: xs[i], y: G + h * 0.13, size: h * 0.12, minSize: h * 0.06, maxWidth: h * 1.15, maxLines: 2, at: d.t1, jitter: false });
      if (it.note && i > 0) writeText(sc, it.note, { x: xs[i], y: G - h * 1.12, size: h * 0.085, minSize: h * 0.05, maxWidth: h * 1.3, maxLines: 2, at: d.t1 + 0.2, color: "accent", jitter: false });
      lastT = d.t1 + 0.6;
    });
    // final pull-back to everything
    var tEnd = Math.max(lastT + 0.2, D() - 2.2);
    if (tEnd < D() - 0.6 && n > 2) {
      // everything (labels included) fits the band between the HUD title and caption
      var ax0 = xs[0] - hs[0] * 1.2, ax1 = xs[n - 1] + hs[n - 1] * 0.7, ay0 = G - hs[n - 1] * 1.2, ay1 = G + hs[n - 1] * 0.42;
      var bandTop = p.title ? sc.my + u(110) : sc.my, bandBot = p.caption ? H - sc.my - u(110) : H - sc.my;
      var zf = Math.min((W * 0.88) / (ax1 - ax0), (bandBot - bandTop) / (ay1 - ay0));
      sc.camTo({ cx: (ax0 + ax1) / 2, cy: (ay0 + ay1) / 2 - ((bandTop + bandBot) / 2 - H / 2) / zf, z: zf }, tEnd, 1.2, "inOutCubic");
    }
    if (p.caption) writeText(sc, p.caption, { x: W / 2, y: H - sc.my - u(30), size: u(46), maxWidth: W - sc.mx * 2, maxLines: 2, at: Math.min(D() - 1, tEnd + 0.6), layer: "hud" });
    void title;
  };

  // ── what-if ── 2–4 comic panels
  T["what-if"] = function (root, p) {
    var sc = new Scene(root);
    var W = sc.W, H = sc.H, P = sc.portrait, Q = sc.square;
    var panels = arr(p.panels).filter(Boolean).slice(0, 4);
    if (!panels.length) panels = [{ caption: "What if...", pose: "think" }, { caption: "...it worked?", pose: "celebrate" }];
    var n = panels.length;
    var head = heading(sc, p.title, { at: 0.1 });
    var top = head ? head.y + head.h + u(26) : sc.my;
    var bottom = H - sc.my - (p.punchline ? u(P ? 120 : 90) : 0);
    var gap = u(26), rects = [];
    var cols = P ? 1 : Q && n > 2 ? 2 : n, rows = Math.ceil(n / cols);
    var pw = (W - sc.mx * 2 - gap * (cols - 1)) / cols, ph = (bottom - top - gap * (rows - 1)) / rows;
    for (var i = 0; i < n; i++) {
      var c = i % cols, r = Math.floor(i / cols);
      var inRow = Math.min(cols, n - r * cols), shift = ((cols - inRow) * (pw + gap)) / 2; // centre a short last row
      rects.push({ x: sc.mx + shift + c * (pw + gap), y: top + r * (ph + gap), w: pw, h: ph });
    }
    var win = lineWindows(panels.map(function (q) { return q.caption || q.says || ""; }), { start: (head ? head.t1 : 0.2) + 0.1 });
    panels.forEach(function (q, i) {
      var R = rects[i], w = win[i], t0 = Math.max(0.05, w.start - 0.45);
      panel(sc, R.x, R.y, R.w, R.h, { at: t0, dur: 0.4 });
      var capSize = P ? u(36) : u(32);
      var cap = q.caption ? writeText(sc, q.caption, { x: R.x + u(18), y: R.y + u(14), anchor: "top-left", align: "left", size: capSize, maxWidth: R.w - u(36), maxLines: 2, at: t0 + 0.3 }) : null;
      var capB = cap ? cap.y + cap.h + u(8) : R.y + u(10);
      var hasD = !!q.doodle, says = !!q.says;
      var pose = str(q.pose || "talk").toLowerCase();
      var falls = pose === "fall" || pose === "fallen";
      var gy = R.y + R.h - u(16);
      var fh = Math.min((gy - capB) * (says && !P ? 0.62 : 0.84), R.w * (hasD ? 0.62 : 0.75));
      if (falls) fh = Math.min(fh, R.w * (hasD ? 0.42 : 0.6));
      // x slots inside the panel: figure / doodle / speech
      var fxr, dxr, sxr;
      if (P) { fxr = 0.2; dxr = says ? 0.47 : 0.66; sxr = hasD ? 0.77 : 0.62; }
      else { fxr = hasD ? 0.3 : 0.5; dxr = 0.72; sxr = 0.5; }
      if (falls) { dxr = 0.2; fxr = hasD ? 0.36 : 0.3; } // falls backwards to the right: keep room
      var fxp = R.x + R.w * fxr;
      var fig = new Figure(sc, q.character || p.character || "pip", { x: fxp, y: gy, h: Math.max(u(60), fh), facing: falls ? "left" : hasD ? "right" : P ? "right" : "front", at: t0 + 0.35, drawDur: 0.6 });
      fig.talk(w.start, w.end);
      ground(sc, R.x + u(10), R.x + R.w - u(10), gy + u(2), { at: t0 + 0.3, dur: 0.25 });
      if (hasD) {
        var ds = Math.min(R.w * (P ? 0.26 : 0.34), (gy - capB) * (P ? 0.8 : 0.55));
        drawDoodle(sc, q.doodle, { x: R.x + R.w * dxr, y: gy - ds * 0.55, size: ds, at: w.start + 0.2, accent: true });
      }
      if (pose === "walk") { fig.x = fxp - R.w * 0.12; fig.walkTo(fxp + R.w * 0.05, w.start, 1.4); }
      else act(fig, pose, w.start + 0.35);
      if (says) {
        var hd = fig.head(w.start + 0.5);
        var swr = P ? (hasD ? 0.4 : 0.6) : 0.86;
        sayText(sc, fig, q.says, { x: R.x + R.w * sxr, y: P ? Math.max(capB + u(40), hd.y) : Math.max(capB + u(30), hd.top - u(50)), maxWidth: R.w * swr, size: P ? u(32) : u(28), maxLines: 3, at: w.start + 0.4 });
      }
    });
    if (p.punchline) {
      var last = win[n - 1];
      var pt = writeText(sc, p.punchline, { x: W / 2, y: bottom + (H - sc.my - bottom) / 2 + u(10), size: u(46), maxWidth: W - sc.mx * 2, maxLines: 2, at: Math.min(D() - 1.2, last.end + 0.2) });
      underline(sc, pt, { at: pt.t1 });
    }
  };

  // ── list-with-doodles ──
  T["list-with-doodles"] = function (root, p) {
    var sc = new Scene(root);
    var W = sc.W, H = sc.H, P = sc.portrait, Q = sc.square;
    var hasFig = p.character !== "none";
    var head = heading(sc, p.title, { at: 0.15, x: P || !hasFig ? W / 2 : sc.mx, anchor: P || !hasFig ? "center" : "left", maxWidth: P || !hasFig ? W - sc.mx * 2 : W * 0.66 });
    var top = head ? head.y + head.h + u(40) : sc.my + u(20);
    var items = arr(p.items).filter(function (it) { return it && it.text; }).slice(0, 5);
    if (!items.length) items = [{ text: "Item one" }, { text: "Item two" }];
    var n = items.length;
    var listW = P || !hasFig ? W - sc.mx * 2 : W * (Q ? 0.64 : 0.64);
    var bottom = P && hasFig ? H * 0.68 : H - sc.my;
    var rowH = Math.min(u(190), (bottom - top) / n);
    var icon = Math.min(rowH * 0.78, u(120));
    var times = S.syncTimes(items.map(function (it) { return keyOf(it.text, it.keyword); }), { start: (head ? head.t1 : 0.3) + 0.2, lead: 0.4 });
    var fig = null;
    if (hasFig) {
      var fh = P ? H * 0.24 : Q ? H * 0.42 : H * 0.5, gy = H * (P ? 0.94 : 0.9), fxp = P ? W * 0.5 : W * (Q ? 0.84 : 0.84);
      fig = new Figure(sc, p.character || "pip", { x: fxp, y: gy, h: fh, facing: P ? "front" : "left", at: 0.2 });
      ground(sc, fxp - fh * 0.3, fxp + fh * 0.3, gy + u(2), { at: 0.25 });
      fig.talk(0.3, D()).pose("talk", 1);
    }
    items.forEach(function (it, i) {
      var y = top + rowH * (i + 0.5), t0 = times[i];
      var x0 = sc.mx + (P || !hasFig ? 0 : 0);
      var mk;
      if (it.doodle) mk = drawDoodle(sc, it.doodle, { x: x0 + icon / 2, y: y, size: icon, at: t0, accent: false, dur: 0.6 });
      else if (p.style === "checks") {
        var bp = new Piece(sc, { layer: "mid" });
        var bs = icon * 0.5;
        var rr = bp.draw(roughRect(x0 + icon / 2 - bs / 2, y - bs / 2, bs, bs, u(4)), t0, 0.35);
        mk = item(bp, rr.t0, rr.t1);
      } else mk = writeText(sc, (i + 1) + ".", { x: x0 + icon / 2, y: y, size: Math.min(u(64), rowH * 0.5), at: t0, dur: 0.2, color: "accent" });
      var tx = writeText(sc, it.text, { x: x0 + icon + u(28), y: y, anchor: "left", align: "left", size: Math.min(u(50), rowH * 0.36), maxWidth: listW - icon - u(28), maxLines: 2, at: mk.t1 + 0.02 });
      if (p.style === "checks" && !it.crossed) {
        var cp2 = new Piece(sc, { layer: "front" });
        var bs2 = icon * 0.5, cx2 = x0 + icon / 2;
        cp2.draw([{ p: [[cx2 - bs2 * 0.35, y], [cx2 - bs2 * 0.05, y + bs2 * 0.35], [cx2 + bs2 * 0.55, y - bs2 * 0.6]], sharp: true, color: ACC, w: 1.3 }], tx.t1 + 0.05, 0.3);
      }
      if (it.crossed) crossOut(sc, tx, { at: tx.t1 + 0.25, strike: true });
      if (fig) {
        if (i === 0) fig.pose(P ? "explain" : "point", t0 - 0.1);
        else fig.pose(i % 2 ? "explain" : "talk", t0 - 0.1);
      }
    });
    if (fig && p.endPose) act(fig, p.endPose, Math.max(times[n - 1] + 1.4, D() - 1.6));
  };

  // ── thought-experiment ──
  T["thought-experiment"] = function (root, p) {
    var sc = new Scene(root);
    var W = sc.W, H = sc.H, P = sc.portrait, Q = sc.square;
    var fh = P ? H * 0.28 : Q ? H * 0.38 : H * 0.48, gy = H * (P ? 0.93 : 0.91), fxp = P ? W * 0.26 : W * (Q ? 0.17 : 0.17);
    var fig = new Figure(sc, p.character || "remy", { x: fxp, y: gy, h: fh, facing: P ? "right" : "right", at: 0.1 });
    ground(sc, fxp - fh * 0.3, fxp + fh * 0.3, gy + u(2), { at: 0.15 });
    fig.pose("think", 0.7, 0.4);
    fig.talk(0.2, D());
    var rect = P ? { x: sc.mx * 0.7, y: sc.my, w: W - sc.mx * 1.4, h: H * 0.46 } : Q ? { x: W * 0.3, y: sc.my * 0.7, w: W * 0.66, h: H * 0.56 } : { x: W * 0.33, y: sc.my * 0.6, w: W * 0.62, h: H * 0.62 };
    var tCloud = syncAt(p.keyword || "imagine", 0.2, 0.7, 0.4);
    var cl = thoughtCloud(sc, fig, rect, { at: tCloud });
    var inner = cl;
    var prem = p.premise ? writeText(sc, p.premise, { x: inner.cx, y: inner.y + u(10), anchor: "top", size: P ? u(44) : u(42), maxWidth: inner.w, maxLines: 3, at: cl.t1 }) : null;
    var dTop = prem ? prem.y + prem.h + u(16) : inner.y;
    var ds = arr(p.doodles).filter(Boolean).slice(0, 3);
    var nD = ds.length;
    if (nD) {
      var avail = inner.y + inner.h - dTop;
      var dsz = Math.min(avail * 0.92, (inner.w / nD) * 0.78);
      var dts = S.syncTimes(ds.map(function (d) { return d; }), { start: (prem ? prem.t1 : cl.t1) + 0.1, lead: 0.5 });
      ds.forEach(function (d, i) {
        drawDoodle(sc, d, { x: inner.x + (inner.w * (i + 0.5)) / nD, y: dTop + avail / 2, size: dsz, at: Math.max(dts[i], (prem ? prem.t1 : cl.t1) + 0.05), accent: i === nD - 1 });
      });
    }
    var qt = null;
    if (p.question) {
      var qAt = syncAt(keyOf(p.question, p.questionKeyword), cl.t1, Math.max(cl.t1 + 2, D() - 2.6), 0.3);
      var qx = P ? W * 0.62 : W * (Q ? 0.62 : 0.64), qy = P ? H * 0.62 : H * (Q ? 0.8 : 0.83);
      qt = writeText(sc, p.question, { x: qx, y: qy, size: P ? u(48) : u(50), maxWidth: P ? W * 0.68 : W * (Q ? 0.62 : 0.56), maxLines: 3, at: qAt });
      fig.pose("talk", qAt - 0.2);
    }
    var react = str(p.reaction || "mind-blown").toLowerCase();
    var tR = qt ? qt.t1 + 0.5 : Math.max(cl.t1 + 2.5, D() - 1.8);
    if (tR < D() - 0.3) act(fig, react, tR);
  };

  // ── title-card ──
  T["title-card"] = function (root, p) {
    var sc = new Scene(root);
    var W = sc.W, H = sc.H, P = sc.portrait, Q = sc.square;
    var hasFig = p.character !== "none";
    var tx = P || !hasFig ? W / 2 : W * (Q ? 0.42 : 0.42), ty = P ? H * 0.3 : H * (Q ? 0.34 : 0.38);
    var tw = P || !hasFig ? W - sc.mx * 2 : W * (Q ? 0.7 : 0.66);
    var kick = p.kicker ? writeText(sc, p.kicker, { x: tx, y: ty - u(P ? 150 : 130), size: u(38), maxWidth: tw, maxLines: 1, color: "muted", at: 0.15, caps: true }) : null;
    var title = writeText(sc, p.title || "Untitled", { x: tx, y: ty, size: P ? u(100) : u(104), maxWidth: tw, maxLines: 3, at: kick ? kick.t1 : 0.25 });
    if (kick) kick.piece.y = Math.min(kick.piece.y, title.y - u(50)), kick.piece.x = tx;
    underline(sc, title, { at: title.t1 + 0.05, double: true });
    var sub = p.subtitle ? writeText(sc, p.subtitle, { x: tx, y: title.y + title.h + u(70), size: u(46), maxWidth: tw, maxLines: 2, at: title.t1 + 0.35, color: "ink" }) : null;
    var fig = null;
    if (hasFig) {
      var fh = P ? H * 0.28 : Q ? H * 0.36 : H * 0.5, gy = H * (P ? 0.93 : 0.9), fxp = P ? W * 0.5 : W * (Q ? 0.82 : 0.84);
      fig = new Figure(sc, p.character || "pip", { x: fxp, y: gy, h: fh, facing: P ? "front" : "left", at: 0.2 });
      ground(sc, fxp - fh * 0.3, fxp + fh * 0.3, gy + u(2), { at: 0.25 });
      fig.talk(0.3, D());
      act(fig, p.pose || "point-up", title.t0 + 0.2);
      fig.pose("talk", Math.max(title.t1 + 1.5, D() * 0.6));
    }
    var ds = arr(p.doodles).filter(Boolean).slice(0, 3);
    var spots = P ? [[0.2, 0.7], [0.8, 0.7], [0.5, 0.56]] : Q ? [[0.16, 0.8], [0.42, 0.84], [0.16, 0.12]] : [[0.12, 0.8], [0.34, 0.84], [0.56, 0.8]];
    var ds0 = (sub ? sub.t1 : title.t1) + 0.3;
    ds.forEach(function (d, i) {
      var s0 = spots[i];
      drawDoodle(sc, d, { x: W * s0[0], y: H * s0[1], size: P ? u(150) : u(130), at: ds0 + i * 0.5, rot: (i % 2 ? 1 : -1) * 8, accent: i === 0 });
    });
  };

  // ── timeline-squiggle ──
  T["timeline-squiggle"] = function (root, p) {
    var sc = new Scene(root);
    var W = sc.W, H = sc.H, P = sc.portrait;
    var head = heading(sc, p.title, { at: 0.1 });
    var top = head ? head.y + head.h + u(20) : sc.my;
    var evs = arr(p.events).filter(function (e) { return e && (e.label || e.date); }).slice(0, 6);
    if (!evs.length) evs = [{ date: "Then", label: "it began" }, { date: "Now", label: "here we are" }];
    var n = evs.length;
    var times = S.syncTimes(evs.map(function (e) { return e.keyword || keyOf(e.date) || keyOf(e.label); }), { start: (head ? head.t1 : 0.3) + 0.5, lead: 0.35, minGap: 0.9 });
    var line = new Piece(sc, { layer: "mid" });
    var lineAt = (head ? head.t1 : 0.2) + 0.05;
    var pts = [], i, k;
    if (!P) {
      var ly = H * 0.56, x0 = sc.mx, x1 = W - sc.mx;
      var endPad = p.youAreHere ? Math.min(u(260), (x1 - x0) / (n + 1.6)) : 0;
      var slot = (x1 - x0 - endPad) / n;
      var loopX = n > 1 ? x0 + slot * 1 : -1;
      for (k = 0; k <= 60; k++) {
        var xx = lerp(x0, x1, k / 60);
        pts.push([xx, ly + Math.sin(k * 0.55) * u(7)]);
        if (loopX > 0 && Math.abs(xx - loopX) < (x1 - x0) / 120) {
          for (var a = 0; a <= 12; a++) { var ang = PI / 2 - (a / 12) * PI * 2; pts.push([xx + Math.cos(ang) * u(18), ly - u(18) + Math.sin(ang) * u(18)]); }
        }
      }
      line.draw([{ p: pts, w: 1.15 }, { p: [[x1 - u(24), ly - u(14)], [x1 + u(4), ly], [x1 - u(24), ly + u(14)]], sharp: true, w: 1.1 }], lineAt, 1.1);
      var fig = null;
      if (p.character !== "none") {
        var fh = Math.min(H * 0.2, slot * 1.1);
        fig = new Figure(sc, p.character || "pip", { x: x0 + u(10), y: ly - u(3), h: fh, facing: "right", at: lineAt + 0.2 });
        fig.talk(0.3, D());
      }
      evs.forEach(function (e, j) {
        var cx = x0 + slot * (j + 0.5), t0 = times[j];
        var tick = new Piece(sc, { layer: "mid" });
        tick.draw([{ p: [[cx, ly - u(14)], [cx, ly + u(14)]], w: 1.1, color: j === n - 1 ? ACC : INK }], t0, 0.2);
        if (e.doodle) drawDoodle(sc, e.doodle, { x: cx, y: Math.max(top + slot * 0.25, ly - H * 0.2 - u(20) - Math.min(slot * 0.6, H * 0.14) / 2), size: Math.min(slot * 0.6, H * 0.14, u(150)), at: t0 + 0.1, accent: j === n - 1 });
        var dt = e.date ? writeText(sc, e.date, { x: cx, y: ly + u(52), size: u(42), maxWidth: slot * 0.92, maxLines: 1, at: t0 + 0.05, color: j === n - 1 ? "accent" : "ink" }) : null;
        if (e.label) writeText(sc, e.label, { x: cx, y: (dt ? dt.y + dt.h : ly + u(30)) + u(14), anchor: "top", size: u(32), maxWidth: slot * 0.92, maxLines: 3, at: (dt ? dt.t1 : t0) + 0.05 });
        if (fig) fig.walkTo(cx - fh * 0.38, Math.max(lineAt + 0.6, t0 - 0.9), 0.8);
      });
      if (fig) act(fig, p.endPose || "point", times[n - 1] + 0.2);
      if (p.youAreHere) youAreHere(sc, x1 - endPad * 0.45, ly, { text: p.youAreHere === true ? "YOU ARE HERE" : str(p.youAreHere), at: Math.min(D() - 1.2, times[n - 1] + 1.3), dx: -0.3, dy: -1.1, size: u(32), maxWidth: endPad * 1.1 });
    } else {
      var lx = W * 0.2, y0 = top + u(30), y1 = H - sc.my - u(30);
      var slotY = (y1 - y0) / n;
      for (k = 0; k <= 60; k++) pts.push([lx + Math.sin(k * 0.55) * u(7), lerp(y0, y1, k / 60)]);
      line.draw([{ p: pts, w: 1.15 }, { p: [[lx - u(14), y1 - u(24)], [lx, y1 + u(4)], [lx + u(14), y1 - u(24)]], sharp: true, w: 1.1 }], lineAt, 1.1);
      var marker = new Piece(sc, { layer: "front", x: lx, y: y0 });
      marker.draw([{ p: ellipsePts(0, 0, u(13), u(13), { n: 14 }), fp: ringPts(0, 0, u(13), u(13), 14), fill: ACC, color: ACC, w: 0.8 }], lineAt + 0.6, 0.25);
      evs.forEach(function (e, j) {
        var cy = y0 + slotY * (j + 0.5), t0 = times[j];
        var tick = new Piece(sc, { layer: "mid" });
        tick.draw([{ p: [[lx - u(14), cy], [lx + u(14), cy]], w: 1.1 }], t0, 0.2);
        marker.to({ y: cy }, t0 - 0.5, 0.6, "inOutCubic");
        var dsz = Math.min(slotY * 0.62, u(130));
        var hasD = !!e.doodle;
        if (hasD) drawDoodle(sc, e.doodle, { x: W - sc.mx - dsz / 2, y: cy, size: dsz, at: t0 + 0.1, accent: j === n - 1 });
        var tw = W - sc.mx - (lx + u(50)) - (hasD ? dsz + u(20) : 0);
        var dt = e.date ? writeText(sc, e.date, { x: lx + u(50), y: cy - u(26), anchor: "left", align: "left", size: u(44), maxWidth: tw, maxLines: 1, at: t0 + 0.05, color: j === n - 1 ? "accent" : "ink" }) : null;
        if (e.label) writeText(sc, e.label, { x: lx + u(50), y: (dt ? dt.y + dt.h : cy - u(20)) + u(4), anchor: "top-left", align: "left", size: u(34), maxWidth: tw, maxLines: 2, at: (dt ? dt.t1 : t0) + 0.05 });
      });
      if (p.youAreHere) writeText(sc, p.youAreHere === true ? "YOU ARE HERE" : str(p.youAreHere), { x: lx + u(50), y: y1 + u(4), anchor: "left", align: "left", size: u(32), maxWidth: W * 0.6, maxLines: 1, color: "accent", at: Math.min(D() - 1, times[n - 1] + 1.2) });
    }
  };

  // ── versus ──
  T.versus = function (root, p) {
    var sc = new Scene(root);
    var W = sc.W, H = sc.H, P = sc.portrait, Q = sc.square;
    var sides = [p.left || { label: "This" }, p.right || { label: "That" }];
    var keys = [keyOf(sides[0].label, sides[0].keyword), keyOf(sides[1].label, sides[1].keyword)];
    var t0s = S.syncTimes(keys, { start: 0.3, lead: 0.4, minGap: 1 });
    var heads = [], figs = [];
    sides.forEach(function (sd, i) {
      var t0 = t0s[i];
      var cxs = P ? W / 2 : W * (i ? 0.75 : 0.25);
      var oy = P ? (i ? H * 0.5 : 0) : 0;
      var hh = P ? H * 0.5 : H;
      var hy = P ? oy + hh * 0.13 : H * 0.13;
      var lab = writeText(sc, sd.label || (i ? "B" : "A"), { x: cxs, y: hy, size: P ? u(64) : u(66), maxWidth: P ? W * 0.8 : W * 0.4, maxLines: 1, at: t0 });
      heads.push(lab);
      var hasF = !!sd.character;
      var dsz = P ? Math.min(hh * 0.34, W * 0.36) : Q ? H * 0.24 : Math.min(H * 0.3, W * 0.2);
      var dyc = P ? oy + hh * 0.38 : H * 0.38;
      var dxc = hasF ? cxs + (P ? W * 0.16 : (i ? 1 : -1) * -W * 0.06) : cxs;
      if (sd.doodle) drawDoodle(sc, sd.doodle, { x: dxc, y: dyc, size: dsz, at: lab.t1 + 0.05, accent: false });
      if (hasF) {
        var fh = P ? hh * 0.42 : Q ? H * 0.32 : H * 0.36;
        var fxp = P ? cxs - W * 0.24 : cxs + (i ? 1 : -1) * W * (Q ? 0.13 : 0.12);
        var gy = dyc + dsz * 0.5 + u(10);
        if (!sd.doodle) fxp = cxs;
        var f = new Figure(sc, sd.character, { x: fxp, y: gy, h: fh, facing: P ? "right" : i ? "left" : "right", at: t0 + 0.1 });
        if (!P && sd.doodle) f.face(i ? "left" : "right", 0);
        ground(sc, fxp - fh * 0.3, fxp + fh * 0.3, gy + u(2), { at: t0 + 0.1 });
        f.talk(t0, t0 + 2.5);
        figs.push(f);
      } else figs.push(null);
      var pts = arr(sd.points).filter(Boolean).slice(0, 3);
      var py0 = P ? dyc + dsz * 0.5 + u(40) : dyc + dsz * 0.5 + u(60);
      var pw = P ? W * 0.84 : W * 0.4;
      var pEnd = P ? (i ? H - sc.my - (p.verdict ? u(110) : u(10)) : H * 0.5 - u(70)) : H * (p.verdict ? 0.82 : 0.88);
      var avail = Math.max(u(60), pEnd - py0);
      var ps = Math.min(u(38), avail / Math.max(1, pts.length) / 1.35);
      var pt = S.syncTimes(pts.map(function (x) { return keyOf(x); }), { start: lab.t1 + 0.8, lead: 0.35 });
      pts.forEach(function (x, j) {
        writeText(sc, "- " + x, { x: cxs, y: py0 + (avail / Math.max(1, pts.length)) * (j + 0.5), size: ps, maxWidth: pw, maxLines: 2, at: Math.max(pt[j], lab.t1 + 0.4 + j * 0.3) });
      });
    });
    // the VS + divider
    var vsAt = Math.min(t0s[1] - 0.3, t0s[0] + 1);
    var vsX = W / 2, vsY = P ? H * 0.5 : H * 0.42;
    var vs = writeText(sc, "VS", { x: vsX, y: vsY, size: u(88), color: "accent", at: Math.max(0.2, vsAt), weight: "bold" });
    var div = new Piece(sc, { layer: "back" });
    if (P) div.draw([{ p: [[sc.mx, vsY], [vsX - u(90), vsY + u(4)]], w: 0.8 }, { p: [[vsX + u(90), vsY - u(2)], [W - sc.mx, vsY]], w: 0.8 }], vs.t0, 0.5);
    else div.draw([{ p: [[vsX, sc.my], [vsX - u(3), vsY - u(70)]], w: 0.8 }, { p: [[vsX + u(2), vsY + u(70)], [vsX, H * 0.84]], w: 0.8 }], vs.t0, 0.5);
    var win = p.winner === "left" ? 0 : p.winner === "right" ? 1 : -1;
    var vAt = p.verdict ? syncAt(keyOf(p.verdict, p.verdictKeyword), Math.max(t0s[1], 0), Math.max(t0s[1] + 2.5, D() - 2.4), 0.3) : Math.max(t0s[1] + 2.5, D() - 2);
    if (p.verdict) {
      var vt = writeText(sc, p.verdict, { x: W / 2, y: P ? H - sc.my - u(10) : H - sc.my - u(14), size: u(46), maxWidth: W - sc.mx * 2, maxLines: 2, at: vAt });
      vAt = vt.t0;
    }
    if (win >= 0 && vAt < D() - 0.4) {
      circleAround(sc, heads[win], { at: vAt + 0.3 });
      if (figs[win]) act(figs[win], "celebrate", vAt + 0.3);
      if (figs[1 - win]) act(figs[1 - win], "sad", vAt + 0.4);
    }
  };

  // ───────────────────────── public API ─────────────────────────
  function sceneFor() { return ensureScene(); }
  S.paper = function (root, opts) { return new Scene(root || V.root(), opts); };
  S.scene = S.paper;
  S.currentScene = function () { return current; };
  S.figure = function (name, o) {
    o = o || {};
    var sc = sceneFor();
    if (o.size != null && o.h == null) o.h = o.size;
    return new Figure(sc, name, o);
  };
  Figure.prototype.say = function (text, o) { return sayText(this.sc, this, text, o); };
  Figure.prototype.think = function (rect, o) { return thoughtCloud(this.sc, this, rect, o); };
  S.doodle = function (name, o) { return drawDoodle(sceneFor(), name, o); };
  S.write = function (text, o) { return writeText(sceneFor(), text, o); };
  S.say = function (fig, text, o) { return sayText(sceneFor(), fig, text, o); };
  S.think = function (fig, rect, o) { return thoughtCloud(sceneFor(), fig, rect, o); };
  S.arrow = function (from, to, o) { return drawArrow(sceneFor(), from, to, o); };
  S.label = function (text, target, o) { return labelTo(sceneFor(), text, target, o); };
  S.circle = function (target, o) { return circleAround(sceneFor(), target, o); };
  S.underline = function (target, o) { return underline(sceneFor(), target, o); };
  S.cross = function (target, o) { return crossOut(sceneFor(), target, o); };
  S.box = function (target, o) { return boxAround(sceneFor(), target, o); };
  S.panel = function (x, y, w, h, o) { return panel(sceneFor(), x, y, w, h, o); };
  S.ground = function (x0, x1, y, o) { return ground(sceneFor(), x0, x1, y, o); };
  S.youAreHere = function (x, y, o) { return youAreHere(sceneFor(), x, y, o); };
  S.graph = function (o) { return drawGraph(sceneFor(), o); };
  S.line = function (x1, y1, x2, y2, o) { return S.scribble([[x1, y1], [x2, y2]], o); };
  S.scribble = function (points, o) {
    o = o || {};
    var sc = sceneFor();
    var pts = arr(points).map(function (q) { return Array.isArray(q) ? [num(q[0], 0), num(q[1], 0)] : [num(q && q.x, 0), num(q && q.y, 0)]; });
    var dur = num(o.dur, clamp(polyLen(pts, o.closed) / u(1500), 0.25, 2)), at = sc.take(o.at, dur);
    var pc = new Piece(sc, { layer: o.layer || "mid" });
    var r = pc.draw([{ p: pts, closed: !!o.closed, sharp: !!o.sharp, color: colorOf(o.color, INK), w: num(o.width, 1), fill: o.fill ? colorOf(o.fill) : null, hatch: o.hatch ? colorOf(o.hatch) : null, amp: o.wobble != null ? o.wobble : 1 }], at, dur);
    if (o.until != null) pc.fade(0, o.until, 0.3);
    return item(pc, r.t0, r.t1);
  };
  S.cameraTo = function (o, at, dur, ease) { var sc = sceneFor(); sc.camTo(o || {}, at == null ? 0 : at, dur, ease); return sc; };
  S.frameRect = function (rect, at, dur, ease, margin) { var sc = sceneFor(); sc.camFrame(rect, at == null ? 0 : at, dur, ease, margin); return sc; };
  S.cursor = function () { return sceneFor().cursor; };
  S.wait = function (s) { var sc = sceneFor(); sc.cursor += num(s, 0.5); return sc.cursor; };
  S.cast = CAST_IDS.slice();
  S.poses = Object.keys(POSES);
  S.expressions = Object.keys(EXPR);
  S.marks = ["sweat", "exclaim", "question", "idea", "heart", "sparkle", "anger", "dizzy", "zzz", "motion"];
  S.stickTemplates = T;
  S.templateIds = Object.keys(T);

  // ───────────────────────── render / fallback ─────────────────────────
  S.render = function (id, root, props) {
    var fn = T[id];
    if (!fn) throw new Error("Unknown template: " + id);
    root = root || V.root();
    try {
      fn(root, props || {});
    } catch (e) {
      V.error("stick-figure template " + id + ": " + (e && e.message));
      try { V.reset(); } catch (e2) {}
      current = null;
      S.fallback(root, V.narration);
    }
    return root;
  };

  function chunkNarration(text) {
    var ws = str(text).replace(/\s+/g, " ").trim().split(" ").filter(Boolean);
    if (!ws.length) return [];
    var maxChunks = Math.max(1, Math.floor(D() / 1.7));
    var per = Math.max(7, Math.ceil(ws.length / maxChunks));
    var out = [], cur = [];
    for (var i = 0; i < ws.length && out.length < maxChunks; i++) {
      cur.push(ws[i]);
      var end = /[.!?;:]$/.test(ws[i]) && cur.length >= 4;
      if (cur.length >= per || end) { out.push({ text: cur.join(" "), i0: i - cur.length + 1, n: cur.length }); cur = []; }
    }
    if (cur.length && out.length < maxChunks) {
      var lastC = out[out.length - 1];
      if (lastC && cur.length < 4) { lastC.text += " " + cur.join(" "); lastC.n += cur.length; }
      else out.push({ text: cur.join(" "), i0: ws.length - cur.length, n: cur.length });
    }
    return out;
  }
  /** Fallback: Pip talks to camera while the narration is hand-lettered beside them. Never throws. */
  S.fallback = function (root, narration) {
    try {
      root = root || V.root();
      try { V.reset(); } catch (e0) {}
      current = null;
      var sc = new Scene(root);
      var W = sc.W, H = sc.H, P = sc.portrait;
      var fh = P ? H * 0.3 : H * 0.52, gy = H * (P ? 0.92 : 0.9), fxp = P ? W * 0.5 : W * 0.2;
      var fig = new Figure(sc, "pip", { x: fxp, y: gy, h: fh, facing: P ? "front" : "right", at: 0.05 });
      ground(sc, fxp - fh * 0.3, fxp + fh * 0.3, gy + u(2), { at: 0.1 });
      fig.talk(0.2, D()).pose("wave", 0.4).pose("talk", 1.2);
      var chunks = chunkNarration(narration != null ? narration : V.narration);
      var Wd = words(), n = chunks.length;
      var tx = P ? W / 2 : W * 0.62, ty = P ? H * 0.3 : H * 0.44, tw = P ? W - sc.mx * 2 : W * 0.6;
      var prev = null;
      chunks.forEach(function (c, i) {
        var t0 = Wd.length > c.i0 ? Wd[c.i0].start - 0.15 : 0.3 + ((D() - 0.8) * i) / n;
        t0 = Math.max(0.2, Math.min(t0, D() - 0.6));
        if (prev) prev.piece.fade(0, t0 - 0.05, 0.2);
        prev = writeText(sc, c.text, { x: tx, y: ty, size: P ? u(60) : u(62), maxWidth: tw, maxLines: P ? 5 : 4, at: t0, dur: clamp(c.text.length / 30, 0.3, 1.6) });
        if (i % 3 === 1) fig.pose(i % 2 ? "explain" : "talk", t0);
      });
      if (!n) { fig.pose("shrug", 1); fig.mark("question", 1.2, 2); }
      return root;
    } catch (e) {
      try { V.error("stick-figure fallback: " + (e && e.message)); } catch (e1) {}
      try {
        try { V.reset(); } catch (e3) {}
        root.innerHTML = "";
        var t = el("div", { parent: root, style: { position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center", padding: "8%", fontSize: u(60) + "px", textAlign: "center", color: INK, background: PAPER, fontFamily: FONT } });
        t.textContent = str(narration || V.narration).split(/\s+/).slice(0, 14).join(" ");
      } catch (e2) {}
    }
    return root;
  };
})();
