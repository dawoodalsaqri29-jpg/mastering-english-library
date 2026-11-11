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
/* Scene engine: whiteboard-hand — "Whiteboard Animation".
 * A realistic hand holding a marker draws every stroke on a whiteboard in real time:
 * doodles are stroke paths revealed at hand speed, colour is scribbled in afterwards,
 * text is hand-lettered glyph by glyph with a single-stroke handwriting font, and the
 * camera pans along a large board. Pure function of time: all state derives from t.
 */
(function () {
  "use strict";
  var V = window.V;
  var S = window.SceneStyle;
  if (!V || !S) return;
  var el = V.el;
  var NS = "http://www.w3.org/2000/svg";

  var INK = {
    black: "#1E2026",
    blue: "#2458C6",
    red: "#D63B32",
    green: "#22914B",
    orange: "#EE8A1F",
    yellow: "#F2C230",
    purple: "#6E4BC4",
    brown: "#8A5632",
    grey: "#8E949C",
    pink: "#E2639A",
    teal: "#159A9C",
    sky: "#58A9E8",
  };
  S.init({
    id: "whiteboard-hand",
    kind: "whiteboard",
    enter: "write",
    titleReveal: "write",
    drift: 0,
    series: [INK.blue, INK.red, INK.green, INK.orange, INK.purple, INK.teal],
  });
  S.ink = INK;

  function u(n) { return n * V.unit; }
  function str(v) { return v == null ? "" : String(v); }
  function arr(v) { return Array.isArray(v) ? v : v == null ? [] : [v]; }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function num(v, d) { v = Number(v); return isFinite(v) ? v : d; }
  function lerp(a, b, p) { return a + (b - a) * p; }
  function inOutSine(p) { return -(Math.cos(Math.PI * p) - 1) / 2; }
  function inOutCubic(p) { return p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2; }
  function outCubic(p) { return 1 - Math.pow(1 - p, 3); }
  function colorOf(c, d) {
    if (!c) return d || INK.black;
    c = String(c);
    if (INK[c]) return INK[c];
    if (c === "accent") return INK.blue;
    if (/^#[0-9a-f]{3,8}$/i.test(c) || /^rgba?\(/i.test(c)) return c;
    return d || INK.black;
  }
  S.colorOf = colorOf;
  // light marker tint used for colour washes
  function tint(hex, amt) {
    var m = /^#([0-9a-f]{6})$/i.exec(hex);
    if (!m) return hex;
    var n = parseInt(m[1], 16), r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
    r = Math.round(r + (255 - r) * amt); g = Math.round(g + (255 - g) * amt); b = Math.round(b + (255 - b) * amt);
    return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
  }

  // smooth 2D value noise in [-1, 1]
  function hn(a, b, seed) {
    var n = Math.sin(a * 127.1 + b * 311.7 + seed * 74.7) * 43758.5453;
    return (n - Math.floor(n)) * 2 - 1;
  }
  function noise2(x, y, seed) {
    var xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
    var sx = xf * xf * (3 - 2 * xf), sy = yf * yf * (3 - 2 * yf);
    var a = hn(xi, yi, seed), b = hn(xi + 1, yi, seed), c = hn(xi, yi + 1, seed), d = hn(xi + 1, yi + 1, seed);
    return a + (b - a) * sx + (c - a) * sy + (a - b - c + d) * sx * sy;
  }
  S.noise = noise2;

  // ───────────────────────── SVG path parsing ─────────────────────────
  // parsePath(d) → [subpath], subpath = [{t:"M"|"L"|"C"|"Q", ...points}] (absolute).
  function arcToCubics(x1, y1, rx, ry, phi, fa, fs, x2, y2) {
    var out = [];
    if (rx === 0 || ry === 0) return [[x1, y1, x2, y2, x2, y2]];
    var sinp = Math.sin((phi * Math.PI) / 180), cosp = Math.cos((phi * Math.PI) / 180);
    var dx = (x1 - x2) / 2, dy = (y1 - y2) / 2;
    var x1p = cosp * dx + sinp * dy, y1p = -sinp * dx + cosp * dy;
    rx = Math.abs(rx); ry = Math.abs(ry);
    var lam = (x1p * x1p) / (rx * rx) + (y1p * y1p) / (ry * ry);
    if (lam > 1) { rx *= Math.sqrt(lam); ry *= Math.sqrt(lam); }
    var sign = fa === fs ? -1 : 1;
    var num1 = rx * rx * ry * ry - rx * rx * y1p * y1p - ry * ry * x1p * x1p;
    var den = rx * rx * y1p * y1p + ry * ry * x1p * x1p;
    var coef = sign * Math.sqrt(Math.max(0, num1 / den));
    var cxp = (coef * rx * y1p) / ry, cyp = (-coef * ry * x1p) / rx;
    var cx = cosp * cxp - sinp * cyp + (x1 + x2) / 2, cy = sinp * cxp + cosp * cyp + (y1 + y2) / 2;
    function ang(ux, uy, vx, vy) {
      var a = Math.atan2(ux * vy - uy * vx, ux * vx + uy * vy);
      return a;
    }
    var th1 = ang(1, 0, (x1p - cxp) / rx, (y1p - cyp) / ry);
    var dth = ang((x1p - cxp) / rx, (y1p - cyp) / ry, (-x1p - cxp) / rx, (-y1p - cyp) / ry);
    if (!fs && dth > 0) dth -= 2 * Math.PI;
    if (fs && dth < 0) dth += 2 * Math.PI;
    var segs = Math.max(1, Math.ceil(Math.abs(dth) / (Math.PI / 2)));
    var d = dth / segs;
    var t = (4 / 3) * Math.tan(d / 4);
    for (var i = 0; i < segs; i++) {
      var a1 = th1 + i * d, a2 = a1 + d;
      var c1 = Math.cos(a1), s1 = Math.sin(a1), c2 = Math.cos(a2), s2 = Math.sin(a2);
      var p = [
        [c1 - t * s1, s1 + t * c1],
        [c2 + t * s2, s2 - t * c2],
        [c2, s2],
      ];
      var o = [];
      for (var j = 0; j < 3; j++) {
        var px = p[j][0] * rx, py = p[j][1] * ry;
        o.push(cosp * px - sinp * py + cx, sinp * px + cosp * py + cy);
      }
      out.push(o);
    }
    return out;
  }

  function parsePath(d) {
    var toks = String(d || "").match(/[a-df-zA-DF-Z]|[-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?/g) || [];
    var i = 0, cmd = "", cx = 0, cy = 0, sx = 0, sy = 0, pcx = null, pcy = null, prev = "";
    var subs = [], cur = null;
    function isCmd(tk) { return /^[a-zA-Z]$/.test(tk); }
    function n() { var v = parseFloat(toks[i++]); return isFinite(v) ? v : 0; }
    function start(x, y) { cur = [{ t: "M", x: x, y: y }]; subs.push(cur); sx = x; sy = y; }
    var guard = 0;
    while (i < toks.length && guard++ < 100000) {
      if (isCmd(toks[i])) cmd = toks[i++];
      else if (!cmd) { i++; continue; }
      var C = cmd.toUpperCase(), rel = cmd !== C;
      if (C === "Z") {
        if (cur) { var l0 = cur[0]; if (Math.abs(cx - l0.x) > 0.01 || Math.abs(cy - l0.y) > 0.01) cur.push({ t: "L", x: l0.x, y: l0.y }); cur.closed = true; }
        cx = sx; cy = sy; cmd = ""; prev = "Z"; pcx = null; continue;
      }
      if (i >= toks.length || isCmd(toks[i])) { cmd = ""; continue; }
      var ox = rel ? cx : 0, oy = rel ? cy : 0, x, y;
      if (C === "M") {
        x = n() + ox; y = n() + oy; start(x, y); cx = x; cy = y;
        cmd = rel ? "l" : "L"; prev = "M"; pcx = null; continue;
      }
      if (!cur) start(cx, cy);
      if (C === "L") { x = n() + ox; y = n() + oy; cur.push({ t: "L", x: x, y: y }); pcx = null; }
      else if (C === "H") { x = n() + ox; y = cy; cur.push({ t: "L", x: x, y: y }); pcx = null; }
      else if (C === "V") { x = cx; y = n() + oy; cur.push({ t: "L", x: x, y: y }); pcx = null; }
      else if (C === "C" || C === "S") {
        var x1, y1;
        if (C === "C") { x1 = n() + ox; y1 = n() + oy; }
        else if (pcx != null && (prev === "C" || prev === "S")) { x1 = 2 * cx - pcx; y1 = 2 * cy - pcy; }
        else { x1 = cx; y1 = cy; }
        var x2 = n() + ox, y2 = n() + oy;
        x = n() + ox; y = n() + oy;
        cur.push({ t: "C", x1: x1, y1: y1, x2: x2, y2: y2, x: x, y: y });
        pcx = x2; pcy = y2;
      } else if (C === "Q" || C === "T") {
        var qx, qy;
        if (C === "Q") { qx = n() + ox; qy = n() + oy; }
        else if (pcx != null && (prev === "Q" || prev === "T")) { qx = 2 * cx - pcx; qy = 2 * cy - pcy; }
        else { qx = cx; qy = cy; }
        x = n() + ox; y = n() + oy;
        cur.push({ t: "Q", x1: qx, y1: qy, x: x, y: y });
        pcx = qx; pcy = qy;
      } else if (C === "A") {
        var rx = n(), ry = n(), rot = n(), fa = n() ? 1 : 0, fs = n() ? 1 : 0;
        x = n() + ox; y = n() + oy;
        var cs = arcToCubics(cx, cy, rx, ry, rot, fa, fs, x, y);
        for (var k = 0; k < cs.length; k++) cur.push({ t: "C", x1: cs[k][0], y1: cs[k][1], x2: cs[k][2], y2: cs[k][3], x: cs[k][4], y: cs[k][5] });
        pcx = null;
      } else { i++; continue; }
      cx = x; cy = y; prev = C;
    }
    return subs.filter(function (s) { return s.length > 1; });
  }
  S.parsePath = parsePath;

  function eachPoint(sub, fn) {
    for (var i = 0; i < sub.length; i++) {
      var s = sub[i];
      if (s.x1 != null) { var a = fn(s.x1, s.y1); s.x1 = a[0]; s.y1 = a[1]; }
      if (s.x2 != null) { var b = fn(s.x2, s.y2); s.x2 = b[0]; s.y2 = b[1]; }
      var c = fn(s.x, s.y); s.x = c[0]; s.y = c[1];
    }
  }
  function cloneSubs(subs) {
    return subs.map(function (sub) {
      var c = sub.map(function (s) { var o = {}; for (var k in s) o[k] = s[k]; return o; });
      c.closed = sub.closed;
      return c;
    });
  }
  function subToD(sub) {
    var d = "";
    for (var i = 0; i < sub.length; i++) {
      var s = sub[i];
      if (s.t === "M") d += "M" + s.x.toFixed(1) + " " + s.y.toFixed(1);
      else if (s.t === "L") d += "L" + s.x.toFixed(1) + " " + s.y.toFixed(1);
      else if (s.t === "Q") d += "Q" + s.x1.toFixed(1) + " " + s.y1.toFixed(1) + " " + s.x.toFixed(1) + " " + s.y.toFixed(1);
      else d += "C" + s.x1.toFixed(1) + " " + s.y1.toFixed(1) + " " + s.x2.toFixed(1) + " " + s.y2.toFixed(1) + " " + s.x.toFixed(1) + " " + s.y.toFixed(1);
    }
    if (sub.closed) d += "Z";
    return d;
  }
  function subsToD(subs) { return subs.map(subToD).join(""); }
  function subsBBox(subs) {
    var x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    subs.forEach(function (sub) {
      sub.forEach(function (s) {
        // end points only (control points overshoot curves)
        if (s.x < x0) x0 = s.x; if (s.x > x1) x1 = s.x;
        if (s.y < y0) y0 = s.y; if (s.y > y1) y1 = s.y;
        if (s.t === "C" || s.t === "Q") {
          var mx = s.t === "C" ? (s.x1 + s.x2) / 2 : s.x1, my = s.t === "C" ? (s.y1 + s.y2) / 2 : s.y1;
          // pull the control midpoint ~75% towards the curve
          if (mx < x0) x0 = lerp(x0, mx, 0.75); if (mx > x1) x1 = lerp(x1, mx, 0.75);
          if (my < y0) y0 = lerp(y0, my, 0.75); if (my > y1) y1 = lerp(y1, my, 0.75);
        }
      });
    });
    if (!isFinite(x0)) return { x: 0, y: 0, w: 0, h: 0 };
    return { x: x0, y: y0, w: x1 - x0, h: y1 - y0 };
  }
  // Hand-made wobble: straight lines get a slight bow, every point is displaced by smooth
  // noise of its position (shared points stay joined). amp is in the subpath's own units.
  function wobble(subs, amp, seed, freq) {
    freq = freq || 0.06;
    var out = subs.map(function (sub) {
      var res = [];
      var px = 0, py = 0;
      for (var i = 0; i < sub.length; i++) {
        var s = sub[i];
        if (s.t === "L") {
          var dx = s.x - px, dy = s.y - py, L = Math.sqrt(dx * dx + dy * dy);
          if (L > 18 / Math.max(0.3, freq / 0.06)) {
            var bow = noise2(px * 0.031 + s.x * 0.017, py * 0.029 + s.y * 0.013, seed + 9) * amp * 0.9;
            res.push({ t: "Q", x1: (px + s.x) / 2 - (dy / L) * bow, y1: (py + s.y) / 2 + (dx / L) * bow, x: s.x, y: s.y });
          } else res.push({ t: "L", x: s.x, y: s.y });
        } else {
          var o = {};
          for (var k in s) o[k] = s[k];
          res.push(o);
        }
        px = s.x; py = s.y;
      }
      res.closed = sub.closed;
      return res;
    });
    out.forEach(function (sub) {
      eachPoint(sub, function (x, y) {
        return [x + noise2(x * freq, y * freq, seed) * amp, y + noise2(x * freq + 41.3, y * freq + 17.9, seed) * amp];
      });
    });
    return out;
  }
  S.wobble = function (d, amp, seed) { return subsToD(wobble(parsePath(d), amp == null ? 1.2 : amp, seed || 1)); };

  // ───────────────────────── single-stroke handwriting font ─────────────────────────
  // Glyphs in a box where caps run y=0 (top) → y=100 (baseline); x-height top y=45,
  // descenders to y≈136. [advance, path]. Each subpath is one pen stroke, in writing order.
  var GLYPHS = {
    A: [80, "M5 100 L39 0 L41 0 L75 100 M17 66 L63 66"],
    B: [76, "M10 100 L10 0 M10 0 C44 -2 62 7 62 25 C62 41 46 49 12 49 M12 49 C52 47 70 58 70 74 C70 92 52 101 10 100"],
    C: [78, "M72 18 C63 5 51 0 40 0 C17 0 4 24 4 50 C4 77 18 100 41 100 C55 100 66 93 73 81"],
    D: [80, "M10 100 L10 0 M10 0 C54 0 75 24 75 50 C75 78 55 100 10 100"],
    E: [70, "M64 0 L10 0 L10 100 L66 100 M10 50 L54 50"],
    F: [66, "M64 0 L10 0 L10 100 M10 50 L52 50"],
    G: [82, "M72 18 C63 5 51 0 40 0 C17 0 4 24 4 50 C4 77 18 100 41 100 C61 100 75 88 75 64 L75 56 L46 56"],
    H: [80, "M10 0 L10 100 M70 0 L70 100 M10 50 L70 50"],
    I: [52, "M26 0 L26 100 M8 0 L44 0 M8 100 L44 100"],
    J: [66, "M60 0 L60 68 C60 90 48 100 33 100 C18 100 8 90 5 76"],
    K: [74, "M10 0 L10 100 M66 0 L12 58 M30 40 L70 100"],
    L: [64, "M10 0 L10 100 L60 100"],
    M: [92, "M8 100 L14 0 L46 72 L78 0 L84 100"],
    N: [80, "M10 100 L10 0 L70 100 L70 0"],
    O: [88, "M44 0 C18 0 4 24 4 50 C4 78 20 100 44 100 C68 100 84 78 84 50 C84 22 68 0 44 0 Z"],
    P: [70, "M10 100 L10 0 M10 0 C48 -2 66 10 66 28 C66 46 48 56 12 55"],
    Q: [88, "M44 0 C18 0 4 24 4 50 C4 78 20 100 44 100 C68 100 84 78 84 50 C84 22 68 0 44 0 Z M52 72 L84 106"],
    R: [74, "M10 100 L10 0 M10 0 C48 -2 66 10 66 28 C66 46 48 54 12 54 M34 54 L70 100"],
    S: [74, "M66 14 C58 4 48 0 36 0 C18 0 8 11 8 25 C8 41 22 46 38 50 C56 54 70 61 70 76 C70 92 56 100 38 100 C24 100 10 94 4 82"],
    T: [78, "M4 0 L74 0 M39 0 L39 100"],
    U: [80, "M8 0 L8 64 C8 88 22 100 40 100 C58 100 72 88 72 64 L72 0"],
    V: [78, "M4 0 L39 100 L74 0"],
    W: [98, "M4 0 L25 100 L49 28 L73 100 L94 0"],
    X: [76, "M6 0 L70 100 M70 0 L6 100"],
    Y: [76, "M4 0 L38 50 L72 0 M38 50 L38 100"],
    Z: [76, "M8 0 L70 0 L6 100 L72 100"],
    a: [68, "M60 56 C55 48 47 45 38 45 C20 45 8 59 8 74 C8 90 20 100 34 100 C48 100 58 90 60 74 M60 45 L60 100"],
    b: [72, "M10 0 L10 100 M10 74 C12 55 24 45 38 45 C54 45 66 58 66 73 C66 89 54 100 38 100 C24 100 12 91 10 80"],
    c: [64, "M60 56 C54 48 46 45 38 45 C20 45 8 58 8 73 C8 89 20 100 38 100 C48 100 56 96 61 88"],
    d: [70, "M58 74 C56 56 46 45 32 45 C16 45 6 58 6 73 C6 89 18 100 32 100 C46 100 56 90 58 74 M58 0 L58 100"],
    e: [66, "M9 72 L60 72 C60 55 50 45 35 45 C18 45 7 58 7 73 C7 89 19 100 36 100 C47 100 55 95 60 88"],
    f: [50, "M50 6 C46 2 42 0 36 0 C25 0 19 8 19 22 L19 100 M4 48 L44 48"],
    g: [70, "M60 74 C58 56 48 45 34 45 C18 45 8 58 8 72 C8 88 19 98 33 98 C47 98 58 88 60 74 M60 45 L60 112 C60 128 50 136 35 136 C24 136 14 131 9 123"],
    h: [70, "M10 0 L10 100 M10 70 C12 54 24 45 38 45 C52 45 62 54 62 68 L62 100"],
    i: [26, "M13 45 L13 100 M13 23 L13 25"],
    j: [36, "M27 45 L27 116 C27 130 20 136 11 136 C6 136 2 134 -2 130 M27 23 L27 25"],
    k: [62, "M10 0 L10 100 M54 45 L10 80 M26 68 L58 100"],
    l: [30, "M13 0 L13 86 C13 95 17 100 25 100"],
    m: [96, "M10 45 L10 100 M10 66 C12 52 20 45 30 45 C42 45 48 53 48 66 L48 100 M48 66 C50 52 58 45 68 45 C80 45 86 53 86 66 L86 100"],
    n: [70, "M10 45 L10 100 M10 68 C12 53 23 45 36 45 C51 45 60 54 60 68 L60 100"],
    o: [70, "M35 45 C18 45 7 58 7 73 C7 89 18 100 35 100 C52 100 63 89 63 73 C63 57 52 45 35 45 Z"],
    p: [72, "M10 45 L10 136 M10 70 C12 54 24 45 38 45 C54 45 66 58 66 73 C66 89 54 100 38 100 C24 100 12 92 10 78"],
    q: [70, "M58 74 C56 56 46 45 32 45 C16 45 6 58 6 73 C6 89 18 100 32 100 C46 100 56 90 58 74 M58 45 L58 136"],
    r: [52, "M10 45 L10 100 M10 70 C14 54 24 45 36 45 C42 45 46 47 50 50"],
    s: [62, "M54 52 C49 47 42 45 34 45 C21 45 12 51 12 60 C12 70 22 72 33 74 C46 76 56 80 56 89 C56 96 47 100 34 100 C24 100 15 97 9 91"],
    t: [52, "M23 14 L23 88 C23 96 28 100 36 100 C41 100 45 98 49 95 M6 47 L45 47"],
    u: [70, "M10 45 L10 76 C10 92 20 100 34 100 C48 100 58 92 60 78 M60 45 L60 100"],
    v: [62, "M5 45 L31 100 L57 45"],
    w: [84, "M4 45 L22 100 L42 58 L62 100 L80 45"],
    x: [62, "M8 45 L54 100 M54 45 L8 100"],
    y: [64, "M5 45 L33 100 M60 45 L33 100 L22 124 C18 132 13 136 5 136"],
    z: [62, "M8 45 L54 45 L8 100 L56 100"],
    "0": [76, "M38 0 C16 0 6 26 6 50 C6 76 16 100 38 100 C60 100 70 76 70 50 C70 24 60 0 38 0 Z"],
    "1": [56, "M14 18 L38 0 L38 100"],
    "2": [74, "M8 22 C12 8 24 0 38 0 C54 0 66 10 66 26 C66 44 50 58 8 100 L70 100"],
    "3": [72, "M10 14 C18 4 28 0 38 0 C54 0 64 10 64 24 C64 38 52 47 32 47 C56 47 68 58 68 73 C68 90 54 100 36 100 C24 100 12 95 6 85"],
    "4": [74, "M52 100 L52 0 L4 70 L72 70"],
    "5": [72, "M64 0 L18 0 L12 44 C20 38 30 36 38 36 C56 36 68 50 68 68 C68 88 54 100 36 100 C24 100 12 94 6 84"],
    "6": [74, "M60 8 C54 3 46 0 38 0 C18 0 8 26 8 56 C8 84 20 100 38 100 C56 100 68 88 68 70 C68 52 56 41 39 41 C24 41 12 50 9 62"],
    "7": [72, "M6 0 L70 0 L30 100"],
    "8": [74, "M38 47 C22 47 12 38 12 24 C12 10 23 0 38 0 C53 0 64 10 64 24 C64 38 54 47 38 47 C20 47 8 59 8 74 C8 89 21 100 38 100 C55 100 68 89 68 74 C68 59 56 47 38 47 Z"],
    "9": [72, "M66 40 C62 54 52 60 38 60 C20 60 8 48 8 31 C8 13 21 0 38 0 C56 0 66 14 66 36 L66 56 C66 82 56 100 34 100 C24 100 16 96 10 90"],
    ".": [22, "M10 98 L10 100"],
    ",": [22, "M11 94 L11 98 C11 106 8 112 3 117"],
    "!": [26, "M13 0 L13 70 M13 98 L13 100"],
    "?": [66, "M8 20 C10 7 22 0 35 0 C51 0 61 10 61 24 C61 40 45 46 35 56 L35 72 M35 98 L35 100"],
    ":": [22, "M10 50 L10 52 M10 98 L10 100"],
    ";": [22, "M11 50 L11 52 M11 94 L11 98 C11 106 8 112 3 117"],
    "'": [20, "M10 0 L8 24"],
    '"': [32, "M9 0 L7 24 M23 0 L21 24"],
    "“": [56, "M22 2 C10 8 6 18 7 26 C8 33 15 35 19 31 C23 27 20 20 13 21 M46 2 C34 8 30 18 31 26 C32 33 39 35 43 31 C47 27 44 20 37 21"],
    "”": [56, "M10 33 C22 27 26 17 25 9 C24 2 17 0 13 4 C9 8 12 15 19 14 M34 33 C46 27 50 17 49 9 C48 2 41 0 37 4 C33 8 36 15 43 14"],
    "-": [50, "M8 66 L42 66"],
    "+": [66, "M8 64 L58 64 M33 39 L33 89"],
    "=": [62, "M8 54 L54 54 M8 76 L54 76"],
    "%": [76, "M62 0 L10 100 M18 4 C9 4 4 12 4 22 C4 32 9 40 18 40 C27 40 32 32 32 22 C32 12 27 4 18 4 Z M56 60 C47 60 42 68 42 78 C42 88 47 96 56 96 C65 96 70 88 70 78 C70 68 65 60 56 60 Z"],
    $: [70, "M62 18 C56 8 46 4 36 4 C20 4 10 13 10 26 C10 40 24 45 38 49 C54 53 66 60 66 74 C66 88 54 96 36 96 C22 96 12 90 6 80 M37 -8 L37 108"],
    "&": [74, "M64 100 L18 40 C12 32 10 26 10 20 C10 8 18 0 30 0 C42 0 50 8 50 18 C50 32 34 40 22 50 C12 58 6 66 6 76 C6 90 18 100 32 100 C46 100 58 90 66 72"],
    "(": [36, "M30 -4 C14 18 8 40 8 54 C8 70 14 92 30 112"],
    ")": [36, "M6 -4 C22 18 28 40 28 54 C28 70 22 92 6 112"],
    "[": [36, "M28 -4 L12 -4 L12 112 L28 112"],
    "]": [36, "M8 -4 L24 -4 L24 112 L8 112"],
    "/": [54, "M48 -2 L6 104"],
    "\\": [54, "M6 -2 L48 104"],
    "#": [68, "M24 10 L16 96 M50 10 L42 96 M6 36 L62 36 M4 70 L60 70"],
    "@": [92, "M58 54 C54 42 46 36 38 36 C26 36 20 46 20 58 C20 70 28 76 37 76 C48 76 56 66 58 54 L60 40 L58 72 C58 80 64 84 70 82 C80 78 86 66 86 54 C86 26 66 6 44 6 C20 6 4 26 4 52 C4 78 22 98 46 98 C56 98 64 96 72 92"],
    "*": [56, "M28 18 L28 58 M10 28 L46 48 M46 28 L10 48"],
    _: [62, "M4 104 L58 104"],
    "<": [62, "M54 40 L8 64 L54 88"],
    ">": [62, "M8 40 L54 64 L8 88"],
    "°": [34, "M16 0 C9 0 4 5 4 12 C4 19 9 24 16 24 C23 24 28 19 28 12 C28 5 23 0 16 0 Z"],
    "£": [70, "M58 10 C54 4 48 0 40 0 C26 0 20 10 20 24 L20 70 C20 86 14 96 6 100 L64 100 M6 52 L46 52"],
    "€": [76, "M70 14 C62 4 52 0 44 0 C24 0 12 22 12 50 C12 78 24 100 44 100 C54 100 64 94 70 84 M2 40 L46 40 M2 60 L46 60"],
    "¥": [76, "M4 0 L38 50 L72 0 M38 50 L38 100 M14 58 L62 58 M14 76 L62 76"],
    "₹": [70, "M8 0 L64 0 M8 24 L64 24 M10 0 C48 0 52 22 50 30 C46 46 30 50 10 50 L56 100"],
    "×": [56, "M10 46 L46 86 M46 46 L10 86"],
    "÷": [62, "M8 66 L54 66 M31 44 L31 46 M31 86 L31 88"],
    "~": [62, "M6 70 C14 58 22 56 31 64 C40 72 48 70 56 58"],
    "^": [50, "M8 30 L25 6 L42 30"],
    "|": [26, "M13 -4 L13 112"],
  };
  var ALIAS = { "’": "'", "‘": "'", "`": "'", "–": "-", "—": "-", "−": "-", "·": ".", "•": "." };
  var GLYPH_CACHE = {};
  function glyph(ch) {
    if (GLYPH_CACHE[ch] !== undefined) return GLYPH_CACHE[ch];
    var c = ALIAS[ch] || ch;
    var g = GLYPHS[c];
    var accent = null;
    if (!g) {
      // strip diacritics (é → e) and keep a small accent stroke
      var base = c.normalize ? c.normalize("NFD") : c;
      if (base.length > 1 && GLYPHS[base[0]]) {
        g = GLYPHS[base[0]];
        var mark = base.charCodeAt(1);
        var up = /[a-z]/.test(base[0]) ? 30 : -14;
        var mid = g[0] / 2;
        if (mark === 0x301) accent = "M" + (mid - 4) + " " + (up + 4) + " L" + (mid + 8) + " " + (up - 10);
        else if (mark === 0x300) accent = "M" + (mid + 4) + " " + (up + 4) + " L" + (mid - 8) + " " + (up - 10);
        else if (mark === 0x308) accent = "M" + (mid - 10) + " " + up + " L" + (mid - 10) + " " + (up + 2) + " M" + (mid + 10) + " " + up + " L" + (mid + 10) + " " + (up + 2);
        else if (mark === 0x302) accent = "M" + (mid - 12) + " " + (up + 4) + " L" + mid + " " + (up - 8) + " L" + (mid + 12) + " " + (up + 4);
        else if (mark === 0x303) accent = "M" + (mid - 14) + " " + (up + 2) + " C" + (mid - 6) + " " + (up - 8) + " " + (mid + 4) + " " + (up + 8) + " " + (mid + 14) + " " + (up - 4);
        else if (mark === 0x327) accent = "M" + mid + " 100 C" + (mid + 8) + " 106 " + (mid + 6) + " 114 " + (mid - 4) + " 116";
        else if (mark === 0x30A) accent = "M" + mid + " " + (up - 8) + " C" + (mid - 6) + " " + (up - 8) + " " + (mid - 6) + " " + (up + 4) + " " + mid + " " + (up + 4) + " C" + (mid + 6) + " " + (up + 4) + " " + (mid + 6) + " " + (up - 8) + " " + mid + " " + (up - 8);
      } else if (c === "ß") g = [70, "M10 100 L10 24 C10 8 20 0 34 0 C48 0 56 10 56 22 C56 34 46 40 34 42 C54 44 64 56 64 72 C64 90 52 100 36 100 C30 100 26 99 22 97"];
      else if (c === "…") g = [62, "M10 98 L10 100 M30 98 L30 100 M50 98 L50 100"];
    }
    var res = g ? { w: g[0], subs: parsePath(g[1] + (accent ? " " + accent : "")) } : null;
    GLYPH_CACHE[ch] = res;
    return res;
  }
  S.hasGlyph = function (ch) { return ch === " " || !!glyph(ch); };
  // ───────────────────────── the hand ─────────────────────────
  // Illustrated right hand holding a marker. Drawn in a local frame where the marker lies
  // along +x with the nib tip at (0,0); the whole group is rotated ~40° on screen so the
  // pen points up-left and the forearm leaves the frame bottom-right.
  var SKIN = {
    light: { base: "#F6D2B4", hi: "#FCE6D3", mid: "#EBB894", shade: "#D49470", deep: "#B27054", line: "#9A5C44", nail: "#F8E1D8", nailEdge: "#DDB3A3" },
    medium: { base: "#E5B48C", hi: "#F2CDAE", mid: "#D69F76", shade: "#BF825B", deep: "#9C6142", line: "#7E4A33", nail: "#F1D5C6", nailEdge: "#CFA390" },
    tan: { base: "#C98E61", hi: "#DDA97F", mid: "#B97E52", shade: "#A0663F", deep: "#7F4D2E", line: "#64391F", nail: "#E6C3AD", nailEdge: "#B98C73" },
    brown: { base: "#9B6440", hi: "#B57D57", mid: "#8A5636", shade: "#71432A", deep: "#56311E", line: "#3F2416", nail: "#D9B4A0", nailEdge: "#A57E69" },
    dark: { base: "#6E4430", hi: "#875740", mid: "#603A28", shade: "#4D2E1F", deep: "#3A2116", line: "#2A1810", nail: "#C9A291", nailEdge: "#93705F" },
  };
  function handMarkup(P, tone, sleeve, ink) {
    var k = SKIN[tone] || SKIN.light;
    sleeve = sleeve || "#34405A";
    ink = ink || "#1F2329";
    var o = 'stroke="' + k.line + '" stroke-width="1.6" stroke-opacity="0.55" stroke-linejoin="round"';
    var crease = 'fill="none" stroke="' + k.deep + '" stroke-width="1.4" stroke-opacity="0.55" stroke-linecap="round"';
    var s = "";
    s += "<defs>";
    s += '<linearGradient id="' + P + 'barrel" x1="0" y1="-15" x2="0" y2="15" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FFFFFF"/><stop offset="0.35" stop-color="#EEF0F3"/><stop offset="0.75" stop-color="#C9CED6"/><stop offset="1" stop-color="#9AA1AC"/></linearGradient>';
    s += '<linearGradient id="' + P + 'collar" x1="0" y1="-13" x2="0" y2="13" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#E9ECEF"/><stop offset="0.5" stop-color="#B9BFC7"/><stop offset="1" stop-color="#7E8691"/></linearGradient>';
    s += '<linearGradient id="' + P + 'cap" x1="0" y1="-16" x2="0" y2="16" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FFFFFF" stop-opacity="0.35"/><stop offset="0.45" stop-color="#FFFFFF" stop-opacity="0"/><stop offset="1" stop-color="#000000" stop-opacity="0.35"/></linearGradient>';
    s += '<linearGradient id="' + P + 'dors" x1="210" y1="-110" x2="330" y2="90" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="' + k.hi + '"/><stop offset="0.45" stop-color="' + k.base + '"/><stop offset="1" stop-color="' + k.shade + '"/></linearGradient>';
    s += '<linearGradient id="' + P + 'idx" x1="0" y1="-40" x2="0" y2="6" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="' + k.hi + '"/><stop offset="0.55" stop-color="' + k.base + '"/><stop offset="1" stop-color="' + k.shade + '"/></linearGradient>';
    s += '<linearGradient id="' + P + 'thb" x1="0" y1="0" x2="0" y2="80" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="' + k.hi + '"/><stop offset="0.4" stop-color="' + k.base + '"/><stop offset="1" stop-color="' + k.shade + '"/></linearGradient>';
    s += '<linearGradient id="' + P + 'curl" x1="0" y1="-130" x2="0" y2="-30" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="' + k.mid + '"/><stop offset="0.6" stop-color="' + k.base + '"/><stop offset="1" stop-color="' + k.shade + '"/></linearGradient>';
    s += '<linearGradient id="' + P + 'arm" x1="560" y1="-60" x2="480" y2="200" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="' + k.hi + '"/><stop offset="0.5" stop-color="' + k.base + '"/><stop offset="1" stop-color="' + k.shade + '"/></linearGradient>';
    s += '<linearGradient id="' + P + 'slv" x1="900" y1="60" x2="840" y2="300" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FFFFFF" stop-opacity="0.22"/><stop offset="0.5" stop-color="#FFFFFF" stop-opacity="0"/><stop offset="1" stop-color="#000000" stop-opacity="0.28"/></linearGradient>';
    s += "</defs>";
    // soft contact shadow (offset silhouettes, no blur filter → cheap)
    s += '<g class="wb-hshadow" fill="#2a2018">';
    var sil = "M66 -8 C66 -24 90 -26 120 -30 L200 -44 L230 -104 C262 -132 300 -104 330 -86 L1520 280 L1468 450 L300 96 C250 76 180 56 120 42 C98 38 90 26 92 12 Z";
    s += '<path d="' + sil + '" opacity="0.07" transform="translate(10 16)"/>';
    s += '<path d="' + sil + '" opacity="0.06" transform="translate(18 28)"/>';
    s += "</g>";
    // eraser (shown instead of the marker while erasing)
    s += '<g class="wb-heraser" style="display:none">';
    s += '<rect x="-34" y="-58" width="150" height="60" rx="10" fill="#3F4A5C" transform="rotate(-40)"/>';
    s += '<rect x="-34" y="-8" width="150" height="20" rx="6" fill="#5B5550" transform="rotate(-40)"/>';
    s += '<rect x="-30" y="-54" width="142" height="10" rx="5" fill="#FFFFFF" opacity="0.18" transform="rotate(-40)"/>';
    s += "</g>";
    // forearm + sleeve
    s += '<path d="M372 -72 C460 -46 900 92 1520 284 L1468 450 C900 266 520 140 352 86 Z" fill="url(#' + P + 'arm)" ' + o + "/>";
    s += '<path d="M690 -6 L1600 296 L1530 520 L616 196 C600 130 640 30 690 -6 Z" fill="' + sleeve + '"/>';
    s += '<path d="M690 -6 L1600 296 L1530 520 L616 196 C600 130 640 30 690 -6 Z" fill="url(#' + P + 'slv)"/>';
    s += '<path d="M690 -6 C640 30 600 130 616 196" fill="none" stroke="#000" stroke-opacity="0.35" stroke-width="5"/>';
    s += '<path d="M730 8 C684 44 652 130 662 210" fill="none" stroke="#000" stroke-opacity="0.18" stroke-width="3"/>';
    // curled fingers (pinky, ring, middle) peeking out ahead of the knuckles
    s += '<path d="M262 -120 C240 -128 214 -128 206 -118 C198 -106 210 -96 232 -96 L258 -92 Z" fill="url(#' + P + 'curl)" ' + o + "/>";
    s += '<path d="M244 -104 C214 -110 182 -106 172 -94 C162 -80 176 -68 204 -68 L240 -68 Z" fill="url(#' + P + 'curl)" ' + o + "/>";
    s += '<path d="M226 -76 C190 -82 154 -76 144 -62 C134 -46 150 -34 180 -34 L224 -36 Z" fill="url(#' + P + 'curl)" ' + o + "/>";
    s += '<path d="M182 -98 Q176 -86 186 -74 M156 -66 Q150 -54 160 -42 M214 -118 Q210 -110 216 -100" ' + crease + "/>";
    // back of the hand
    s += '<path d="M188 -16 C196 -48 214 -84 238 -112 C268 -130 304 -112 334 -88 C372 -64 392 -52 404 -40 C420 0 418 50 404 76 C370 96 330 100 296 92 C252 74 214 40 188 -16 Z" fill="url(#' + P + 'dors)" ' + o + "/>";
    // knuckle highlights + tendons
    s += '<ellipse cx="206" cy="-38" rx="10" ry="7" fill="' + k.hi + '" opacity="0.7"/>';
    s += '<ellipse cx="222" cy="-70" rx="10" ry="7" fill="' + k.hi + '" opacity="0.6"/>';
    s += '<ellipse cx="240" cy="-100" rx="9" ry="6" fill="' + k.hi + '" opacity="0.55"/>';
    s += '<path d="M216 -40 Q290 -10 372 6 M232 -70 Q300 -46 380 -22 M250 -100 Q310 -76 388 -46" fill="none" stroke="' + k.shade + '" stroke-width="5" stroke-opacity="0.18" stroke-linecap="round"/>';
    s += '<path d="M214 14 L318 14" stroke="#3a2010" stroke-width="30" stroke-linecap="round" opacity="0.07" transform="translate(2 14)"/>';
    s += '<path d="M214 14 L318 14" stroke="#3a2010" stroke-width="18" stroke-linecap="round" opacity="0.09" transform="translate(2 12)"/>';
    // marker
    s += '<g class="wb-hmarker">';
    s += '<path d="M0.6 -2.4 C-0.9 -1 -0.9 1 0.6 2.4 L15 6.6 L15 -6.6 Z" fill="' + ink + '"/>';
    s += '<path d="M15 -7.6 L34 -13.6 L34 13.6 L15 7.6 Z" fill="url(#' + P + 'collar)"/>';
    s += '<rect x="34" y="-15" width="12" height="30" fill="' + ink + '"/><rect x="34" y="-15" width="12" height="30" fill="url(#' + P + 'cap)"/>';
    s += '<rect x="46" y="-15" width="246" height="30" rx="2" fill="url(#' + P + 'barrel)"/>';
    s += '<rect x="292" y="-16" width="30" height="32" rx="7" fill="' + ink + '"/><rect x="292" y="-16" width="30" height="32" rx="7" fill="url(#' + P + 'cap)"/>';
    s += '<path d="M50 -9.5 L286 -9.5" stroke="#FFFFFF" stroke-width="3" stroke-opacity="0.8" stroke-linecap="round"/>';
    s += "</g>";
    // thumb
    s += '<path d="M106 14 C106 4 116 1 130 3 L170 10 C196 16 222 34 246 52 C270 62 300 60 330 50 L352 92 C320 108 290 112 270 106 C240 98 216 88 196 76 L170 56 C150 46 136 44 128 42 C114 40 106 30 106 14 Z" fill="url(#' + P + 'thb)"/>';
    s += '<path d="M246 52 C222 34 196 16 170 10 L130 3 C116 1 106 4 106 14 C106 30 114 40 128 42 C136 44 150 46 170 56 L196 76 C216 88 240 98 270 106 C300 112 330 102 352 88" fill="none" ' + o + '/>';
    s += '<path d="M112 14 C112 8 118 6 126 7 L140 9 C143 15 142 23 138 28 L124 28 C116 27 112 22 112 14 Z" fill="' + k.nail + '" stroke="' + k.nailEdge + '" stroke-width="1.4"/>';
    s += '<path d="M115 12 Q124 10 136 12" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-opacity="0.6" stroke-linecap="round"/>';
    s += '<path d="M172 14 Q182 30 172 50 M180 18 Q188 30 180 46" ' + crease + "/>";
    s += '<path d="M210 70 Q250 84 300 96" fill="none" stroke="' + k.deep + '" stroke-width="2" stroke-opacity="0.3" stroke-linecap="round"/>';
    // index finger (lies on top of the marker)
    s += '<path d="M82 -10 C82 -22 92 -26 104 -25 L150 -30 C168 -32 190 -46 212 -60 C228 -52 230 -26 218 -14 C196 -6 172 0 152 2 L108 6 C92 7 82 2 82 -10 Z" fill="url(#' + P + 'idx)" ' + o + "/>";
    s += '<path d="M88 -11 C88 -19 95 -22 104 -22 L116 -21 C119 -16 119 -5 116 -1 L104 0 C95 0 88 -2 88 -11 Z" fill="' + k.nail + '" stroke="' + k.nailEdge + '" stroke-width="1.4"/>';
    s += '<path d="M92 -16 Q102 -19 113 -18" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-opacity="0.65" stroke-linecap="round"/>';
    s += '<path d="M130 -27 Q135 -13 130 2 M162 -33 Q170 -16 163 0 M169 -36 Q177 -18 170 -1" ' + crease + "/>";
    s += '<path d="M120 -24 L150 -28" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-opacity="0.25" stroke-linecap="round"/>';
    return s;
  }

  // ───────────────────────── doodle library ─────────────────────────
  // Each doodle lives in a 100×100 box. s = outline strokes (each subpath = one pen stroke,
  // in drawing order). f = colour fills scribbled in afterwards: [shape, colour], where shape
  // is a closed path or the index of a closed stroke subpath. ink = outline colour override.
  function f1(n) { return Math.round(n * 10) / 10; }
  function pt(cx, cy, rx, ry, a) { var r = (a * Math.PI) / 180; return f1(cx + Math.cos(r) * rx) + " " + f1(cy + Math.sin(r) * ry); }
  // hand-drawn ellipse: one stroke starting at a0 with a small overshoot past the start
  function circ(cx, cy, rx, ry, a0, over) {
    ry = ry == null ? rx : ry; a0 = a0 == null ? -120 : a0; over = over == null ? 16 : over;
    var A = " A" + rx + " " + ry + " 0 0 1 ";
    return "M" + pt(cx, cy, rx, ry, a0) + A + pt(cx, cy, rx, ry, a0 + 120) + A + pt(cx, cy, rx, ry, a0 + 240) + A + pt(cx, cy, rx, ry, a0 + 360) + (over ? A + pt(cx, cy, rx, ry, a0 + 360 + over) : "");
  }
  // closed ellipse (for fills)
  function ell(cx, cy, rx, ry) {
    ry = ry == null ? rx : ry;
    var A = " A" + rx + " " + ry + " 0 0 1 ";
    return "M" + pt(cx, cy, rx, ry, 0) + A + pt(cx, cy, rx, ry, 180) + A + pt(cx, cy, rx, ry, 360) + "Z";
  }
  function rrect(x, y, w, h, r) {
    return "M" + (x + r) + " " + y + " L" + (x + w - r) + " " + y + " Q" + (x + w) + " " + y + " " + (x + w) + " " + (y + r) + " L" + (x + w) + " " + (y + h - r) + " Q" + (x + w) + " " + (y + h) + " " + (x + w - r) + " " + (y + h) + " L" + (x + r) + " " + (y + h) + " Q" + x + " " + (y + h) + " " + x + " " + (y + h - r) + " L" + x + " " + (y + r) + " Q" + x + " " + y + " " + (x + r) + " " + y + " Z";
  }
  function box(x, y, w, h) { return "M" + x + " " + y + " L" + (x + w) + " " + y + " L" + (x + w) + " " + (y + h) + " L" + x + " " + (y + h) + " Z"; }
  function rays(cx, cy, r0, r1, n, a0) {
    var s = "";
    for (var i = 0; i < n; i++) { var a = (a0 || 0) + (360 / n) * i; s += "M" + pt(cx, cy, r0, r0, a) + " L" + pt(cx, cy, r1, r1, a) + " "; }
    return s;
  }
  function gear(cx, cy, r, teeth, depth) {
    var s = "", n = teeth * 4;
    for (var i = 0; i <= n; i++) {
      var k = i % 4, a = (360 / n) * i - 90 - 360 / n / 2;
      var rr = k === 1 || k === 2 ? r + depth : r;
      s += (i === 0 ? "M" : " L") + pt(cx, cy, rr, rr, a);
    }
    return s + " Z";
  }
  // rotated ellipse (orbit) as a closed cubic path
  function orbit(cx, cy, rx, ry, rot) {
    var s = "", n = 24, c = Math.cos((rot * Math.PI) / 180), sn = Math.sin((rot * Math.PI) / 180);
    for (var i = 0; i <= n; i++) {
      var a = (i / n) * Math.PI * 2, x = Math.cos(a) * rx, y = Math.sin(a) * ry;
      s += (i ? " L" : "M") + f1(cx + x * c - y * sn) + " " + f1(cy + x * sn + y * c);
    }
    return s;
  }
  function dollar(cx, cy, s) {
    function P(x, y) { return f1(cx + x * s) + " " + f1(cy + y * s); }
    return "M" + P(6, -8) + " C" + P(3, -12) + " " + P(-7, -12) + " " + P(-7, -5) + " C" + P(-7, 1) + " " + P(7, 0) + " " + P(7, 7) + " C" + P(7, 13) + " " + P(-4, 14) + " " + P(-8, 9) + " M" + P(0, -16) + " L" + P(0, 17);
  }

  // stick figures: joint sets in a 100-box (head centre h, neck n, hip p, elbows/hands, knees/feet)
  var POSES = {
    stand: { h: [50, 14], n: [50, 25], p: [50, 60], le: [41, 43], lh: [37, 60], re: [59, 43], rh: [63, 60], lk: [45, 78], lf: [41, 96], rk: [55, 78], rf: [59, 96], m: "smile" },
    wave: { h: [50, 14], n: [50, 25], p: [50, 60], le: [41, 43], lh: [37, 60], re: [64, 30], rh: [70, 10], lk: [45, 78], lf: [41, 96], rk: [55, 78], rf: [59, 96], m: "grin" },
    walk: { h: [52, 14], n: [51, 25], p: [50, 60], le: [58, 42], lh: [64, 56], re: [44, 42], rh: [38, 55], lk: [58, 77], lf: [64, 95], rk: [45, 78], rf: [35, 93], m: "smile" },
    run: { h: [58, 15], n: [55, 26], p: [47, 58], le: [66, 36], lh: [75, 27], re: [44, 41], rh: [34, 47], lk: [62, 72], lf: [56, 90], rk: [40, 76], rf: [24, 84], m: "open" },
    cheer: { h: [50, 16], n: [50, 27], p: [50, 61], le: [36, 22], lh: [30, 6], re: [64, 22], rh: [70, 6], lk: [44, 79], lf: [38, 96], rk: [56, 79], rf: [62, 96], m: "grin" },
    think: { h: [50, 14], n: [50, 25], p: [50, 60], le: [42, 44], lh: [55, 46], re: [64, 42], rh: [56, 27], lk: [45, 78], lf: [42, 96], rk: [55, 78], rf: [58, 96], m: "flat" },
    point: { h: [46, 14], n: [46, 25], p: [46, 60], le: [38, 43], lh: [34, 60], re: [64, 32], rh: [84, 26], lk: [41, 78], lf: [37, 96], rk: [51, 78], rf: [55, 96], m: "smile" },
    sit: { h: [40, 20], n: [40, 31], p: [40, 63], le: [46, 46], lh: [58, 52], re: [36, 47], rh: [44, 58], lk: [62, 63], lf: [62, 93], rk: [60, 66], rf: [58, 93], m: "smile", extra: "M26 66 L58 66 M30 66 L30 95 M54 66 L54 95 M26 66 L26 36" },
    sad: { h: [50, 18], n: [50, 29], p: [50, 62], le: [45, 45], lh: [43, 63], re: [55, 45], rh: [57, 63], lk: [47, 80], lf: [45, 96], rk: [53, 80], rf: [55, 96], m: "frown" },
    shrug: { h: [50, 16], n: [50, 27], p: [50, 61], le: [34, 40], lh: [27, 28], re: [66, 40], rh: [73, 28], lk: [45, 79], lf: [41, 96], rk: [55, 79], rf: [59, 96], m: "flat" },
    jump: { h: [50, 10], n: [50, 21], p: [50, 54], le: [36, 18], lh: [32, 4], re: [64, 18], rh: [68, 4], lk: [38, 68], lf: [42, 84], rk: [62, 68], rf: [58, 84], m: "grin" },
    worried: { h: [50, 14], n: [50, 25], p: [50, 60], le: [43, 40], lh: [47, 26], re: [57, 40], rh: [53, 26], lk: [45, 78], lf: [41, 96], rk: [55, 78], rf: [59, 96], m: "open" },
  };
  function seg(a, b, c) { return "M" + a[0] + " " + a[1] + " L" + b[0] + " " + b[1] + (c ? " L" + c[0] + " " + c[1] : ""); }
  function stickPaths(P) {
    var h = P.h, r = 10, s = [];
    s.push(circ(h[0], h[1], r, r, -100, 12));
    s.push(seg(P.n, P.p));
    s.push(seg(P.n, P.le, P.lh));
    s.push(seg(P.n, P.re, P.rh));
    s.push(seg(P.p, P.lk, P.lf));
    s.push(seg(P.p, P.rk, P.rf));
    var ex = h[0], ey = h[1];
    s.push("M" + (ex - 4) + " " + (ey - 2) + " L" + (ex - 4) + " " + (ey - 0.6) + " M" + (ex + 4) + " " + (ey - 2) + " L" + (ex + 4) + " " + (ey - 0.6));
    var m = P.m;
    if (m === "smile") s.push("M" + (ex - 4.5) + " " + (ey + 3) + " Q" + ex + " " + (ey + 7) + " " + (ex + 4.5) + " " + (ey + 3));
    else if (m === "grin") s.push("M" + (ex - 5) + " " + (ey + 2.5) + " Q" + ex + " " + (ey + 9) + " " + (ex + 5) + " " + (ey + 2.5) + " Z");
    else if (m === "frown") s.push("M" + (ex - 4) + " " + (ey + 6) + " Q" + ex + " " + (ey + 2.5) + " " + (ex + 4) + " " + (ey + 6));
    else if (m === "open") s.push(circ(ex, ey + 5, 2.4, 2.8, -90, 0));
    else s.push("M" + (ex - 3.5) + " " + (ey + 5) + " L" + (ex + 3.5) + " " + (ey + 5));
    if (P.extra) s.push(P.extra);
    return s.join(" ");
  }
  // sketch portrait (head & shoulders)
  function facePaths(o) {
    var s = [];
    var hair = o.hair || "short", mouth = o.mouth || "smile";
    s.push("M50 12 C32 12 23 28 24 47 C25 66 36 80 50 80 C64 80 75 66 76 47 C77 28 68 12 50 12 Z");
    if (hair === "short") s.push("M24 42 C20 22 34 7 52 8 C70 9 81 22 76 42 C72 32 66 27 58 25 C50 30 36 32 24 42 Z");
    else if (hair === "long") s.push("M26 40 C24 20 36 8 52 8 C68 8 80 20 76 42 C80 60 82 80 88 92 M26 40 C24 60 20 80 12 92 M28 34 C40 32 52 24 58 16 C62 24 70 30 76 32");
    else if (hair === "curly") s.push("M24 40 C14 34 20 20 28 22 C26 10 40 6 46 12 C50 4 64 6 66 14 C74 10 84 20 78 28 C86 32 82 44 76 42 C70 34 60 30 50 32 C40 30 30 34 24 40 Z");
    else if (hair === "bun") s.push("M25 40 C22 22 34 10 50 10 C66 10 78 22 75 40 C68 30 60 26 50 26 C40 26 32 30 25 40 Z M42 10 C38 0 62 0 58 10");
    if (o.glasses) s.push(circ(39, 47, 8, 7, -90, 6) + " " + circ(61, 47, 8, 7, -90, 6) + " M47 47 L53 47");
    s.push("M36 47 L36 50 M64 47 L64 50");
    s.push(o.brows === "up" ? "M31 38 Q36 34 41 37 M59 37 Q64 34 69 38" : o.brows === "angry" ? "M31 37 L41 41 M59 41 L69 37" : "M31 40 Q36 37 41 39 M59 39 Q64 37 69 40");
    s.push("M50 50 L47 60 L52 61");
    if (mouth === "smile") s.push("M39 66 C44 72 56 72 61 66");
    else if (mouth === "frown") s.push("M40 71 C45 66 55 66 60 71");
    else if (mouth === "open") s.push(circ(50, 69, 5, 6, -90, 0));
    else s.push("M41 69 C46 67 54 70 59 68");
    s.push("M24 46 C17 44 17 57 25 59 M76 46 C83 44 83 57 75 59");
    s.push("M43 80 L43 88 M57 80 L57 88 M14 100 C16 92 28 87 43 88 L50 94 L57 88 C72 87 84 92 86 100");
    return s.join(" ");
  }
  function faceFills(o) {
    var f = [["M50 12 C32 12 23 28 24 47 C25 66 36 80 50 80 C64 80 75 66 76 47 C77 28 68 12 50 12 Z", "skin"], ["M14 100 C16 92 28 87 43 88 L50 94 L57 88 C72 87 84 92 86 100 Z", o.shirt || "blue"]];
    if (o.hair === "short") f.push([1, "hair"]);
    if (o.hair === "curly") f.push([1, "hair"]);
    if (o.hair === "bun") f.push(["M25 40 C22 22 34 10 50 10 C66 10 78 22 75 40 C68 30 60 26 50 26 C40 26 32 30 25 40 Z", "hair"]);
    if (o.hair === "long") f.push(["M26 40 C24 20 36 8 52 8 C68 8 80 20 76 42 C80 60 82 80 88 92 L76 80 C78 66 77 54 76 42 C70 30 62 24 58 16 C52 24 40 32 28 34 C25 50 24 70 12 92 Z", "hair"]);
    return f;
  }

  var DOODLES = {
    lightbulb: {
      s: "M39 66 C39 56 27 50 27 36 C27 22 37 13 50 13 C63 13 73 22 73 36 C73 50 61 56 61 66 M39 66 L61 66 M45 64 L45 48 L48 43 L50 48 L52 43 L55 48 L55 64 M40 74 L60 74 M41 82 L59 82 M45 89 C47 95 53 95 55 89 M50 1 L50 -6 M21 13 L15 7 M79 13 L85 7 M13 37 L5 37 M87 37 L95 37",
      f: [["M39 66 C39 56 27 50 27 36 C27 22 37 13 50 13 C63 13 73 22 73 36 C73 50 61 56 61 66 Z", "yellow"], ["M39 66 L61 66 L59 89 L41 89 Z", "grey"]],
    },
    brain: {
      s: "M30 70 C18 70 12 60 15 50 C8 44 10 30 20 27 C21 16 33 11 42 15 C47 8 60 8 65 15 C76 12 86 20 85 31 C93 36 93 50 86 56 C88 66 80 74 70 72 C66 79 56 81 50 76 C44 81 34 78 30 70 Z M42 15 C40 22 44 28 50 28 M65 15 C62 22 66 28 72 30 M20 27 C26 28 30 34 28 40 M15 50 C22 50 26 46 30 48 M86 56 C80 54 76 48 78 42 M50 76 C50 68 46 62 40 62 M70 72 C68 64 62 60 56 62 M50 28 C50 36 56 42 62 42 M36 40 C40 46 38 52 44 54 M56 76 C58 84 60 88 64 92",
      f: [[0, "pink"]],
    },
    coins: {
      s: circ(40, 40, 24, 8, 180, 10) + " M16 40 L16 76 M64 40 L64 76 M16 76 C16 87 64 87 64 76 M16 52 C16 63 64 63 64 52 M16 64 C16 75 64 75 64 64 " + circ(76, 62, 18, 18, -110, 10) + " " + dollar(76, 62, 0.85),
      f: [["M16 40 C16 51 64 51 64 40 L64 76 C64 87 16 87 16 76 Z", "orange"], [ell(40, 40, 24, 8), "yellow"], [ell(76, 62, 18, 18), "yellow"]],
    },
    money: {
      s: "M14 24 L96 20 L97 28 M93 66 L97 66 L97 28 M6 32 L90 28 L92 76 L8 80 Z M15 39 L83 36 L84 69 L16 72 Z " + circ(49, 54, 13, 13, -100, 8) + " " + dollar(49, 54, 0.8),
      f: [[2, "green"], ["M14 24 L96 20 L97 66 L93 66 L90 28 L14 32 Z", "green"]],
    },
    "money-bag": {
      s: "M38 30 C20 44 14 60 16 72 C18 86 30 92 50 92 C70 92 82 86 84 72 C86 60 80 44 62 30 Z M36 22 L64 22 L60 30 L40 30 Z M40 22 C34 12 42 6 50 13 C58 6 66 12 60 22 " + dollar(50, 64, 1.2),
      f: [[0, "#C99A58"], [1, "brown"]],
    },
    piggybank: {
      s: "M24 44 C26 30 40 22 56 22 C74 22 88 34 88 50 C88 62 80 70 68 73 L68 86 L60 86 L58 76 L42 76 L40 86 L32 86 L31 72 C26 68 23 62 22 56 M24 44 C16 42 10 45 10 51 C10 57 15 60 22 56 M15 50 L15 51.5 M18.5 50 L18.5 51.5 M38 26 L42 12 L52 23 M38 40 L38 42.5 M54 28 L68 30 M88 48 C96 44 98 52 92 54 C88 55 90 48 96 46",
      f: [["M24 44 C26 30 40 22 56 22 C74 22 88 34 88 50 C88 62 80 70 68 73 L68 86 L60 86 L58 76 L42 76 L40 86 L32 86 L31 72 C26 68 23 62 22 56 C15 60 10 57 10 51 C10 45 16 42 24 44 Z", "pink"]],
    },
    house: {
      s: "M12 47 L50 14 L88 47 M22 40 L22 90 L78 90 L78 40 M42 90 L42 64 L58 64 L58 90 M28 52 L38 52 L38 62 L28 62 Z M33 52 L33 62 M62 52 L72 52 L72 62 L62 62 Z M67 52 L67 62 M66 30 L66 17 L75 17 L75 38 M70 11 C66 7 74 4 70 -1",
      f: [["M22 40 L50 16 L78 40 L78 90 L22 90 Z", "#F6D78B"], ["M12 47 L50 14 L88 47 L80 47 L50 22 L20 47 Z", "red"], ["M42 90 L42 64 L58 64 L58 90 Z", "brown"], [box(28, 52, 10, 10), "sky"], [box(62, 52, 10, 10), "sky"]],
    },
    globe: {
      s: circ(50, 50, 40, 40, -100, 12) + " M50 10 C30 30 30 70 50 90 M50 10 C70 30 70 70 50 90 M10 50 L90 50 M16 30 C38 36 62 36 84 30 M16 70 C38 64 62 64 84 70",
      f: [[ell(50, 50, 40, 40), "sky"], ["M28 20 C36 16 46 20 46 28 C46 36 36 36 34 44 C32 52 24 54 20 48 C14 40 18 26 28 20 Z", "green"], ["M58 46 C66 42 78 46 80 56 C82 68 72 80 62 78 C56 76 60 66 56 60 C52 54 52 48 58 46 Z", "green"], ["M62 16 C70 14 78 20 76 26 C72 30 64 28 62 16 Z", "green"]],
    },
    clock: {
      s: circ(50, 52, 38, 38, -100, 12) + " M50 18 L50 24 M84 52 L78 52 M50 86 L50 80 M16 52 L22 52 M50 52 L50 30 M50 52 L66 60 M50 52 L50 52.5 M24 16 C18 8 28 2 34 10 M76 16 C82 8 72 2 66 10 M30 86 L24 94 M70 86 L76 94",
      f: [[ell(50, 52, 38, 38), "#FBE3B0"], ["M24 16 C18 8 28 2 34 10 Z", "red"], ["M76 16 C82 8 72 2 66 10 Z", "red"]],
    },
    rocket: {
      s: "M50 4 C64 16 70 34 68 62 L32 62 C30 34 36 16 50 4 Z " + circ(50, 32, 8, 8, -100, 10) + " M33 48 L18 64 L20 76 L33 66 M67 48 L82 64 L80 76 L67 66 M38 62 L40 70 L60 70 L62 62 M42 73 C40 82 46 88 50 96 C54 88 60 82 58 73 M38 18 L62 18",
      f: [[0, "#E9EDF2"], ["M33 48 L18 64 L20 76 L33 66 Z", "red"], ["M67 48 L82 64 L80 76 L67 66 Z", "red"], [ell(50, 32, 8, 8), "sky"], ["M42 73 C40 82 46 88 50 96 C54 88 60 82 58 73 Z", "orange"], ["M50 4 C56 9 60 13 62 18 L38 18 C40 13 44 9 50 4 Z", "red"]],
    },
    heart: {
      s: "M50 86 C30 70 10 56 10 36 C10 22 20 14 31 14 C40 14 46 20 50 28 C54 20 60 14 69 14 C80 14 90 22 90 36 C90 56 70 70 50 86 Z M22 32 C22 26 26 22 31 22",
      f: [[0, "red"]],
    },
    gears: {
      s: gear(38, 40, 24, 9, 7) + " " + circ(38, 40, 9, 9, -90, 8) + " " + gear(74, 72, 15, 7, 6) + " " + circ(74, 72, 5, 5, -90, 8),
      f: [[0, "grey"], [2, "orange"]],
    },
    "chart-up": {
      s: "M12 6 L12 90 L94 90 M22 90 L22 72 L32 72 L32 90 M42 90 L42 62 L52 62 L52 90 M62 90 L62 50 L72 50 L72 90 M18 56 L36 40 L50 46 L80 14 M68 14 L81 13 L80 26",
      f: [[box(22, 72, 10, 18), "green"], [box(42, 62, 10, 28), "green"], [box(62, 50, 10, 40), "green"]],
    },
    "chart-down": {
      s: "M12 6 L12 90 L94 90 M22 90 L22 46 L32 46 L32 90 M42 90 L42 58 L52 58 L52 90 M62 90 L62 72 L72 72 L72 90 M18 16 L40 34 L54 28 L82 62 M82 49 L83 63 L70 63",
      f: [[box(22, 46, 10, 44), "red"], [box(42, 58, 10, 32), "red"], [box(62, 72, 10, 18), "red"]],
    },
    "chart-pie": {
      s: circ(50, 50, 40, 40, -90, 10) + " M50 50 L50 10 M50 50 L88 62 M50 50 L22 79",
      f: [["M50 50 L50 10 A40 40 0 0 1 88 62 Z", "blue"], ["M50 50 L88 62 A40 40 0 0 1 22 79 Z", "orange"], ["M50 50 L22 79 A40 40 0 0 1 50 10 Z", "green"]],
    },
    magnifier: {
      s: circ(40, 40, 26, 26, -110, 14) + " M25 33 C27 25 33 21 40 21 M59 59 L65 65 M62 66 L82 88 C86 92 92 87 88 83 L68 62",
      f: [[ell(40, 40, 26, 26), "sky"], ["M62 66 L82 88 C86 92 92 87 88 83 L68 62 Z", "brown"]],
    },
    phone: {
      s: rrect(28, 6, 44, 88, 8) + " M33 16 L67 16 L67 78 L33 78 Z M46 86 L54 86 M45 11 L55 11 M38 26 L54 26 M38 34 L60 34 M38 42 L50 42",
      f: [[0, "#4A5160"], [1, "sky"]],
    },
    laptop: {
      s: "M20 16 L80 16 L80 62 L20 62 Z M25 21 L75 21 L75 57 L25 57 Z M20 62 L6 80 L94 80 L80 62 M6 80 L7 85 L93 85 L94 80 M42 72 L58 72 M32 30 L52 30 M32 38 L64 38 M32 46 L48 46",
      f: [[0, "#4A5160"], [1, "sky"], ["M20 62 L6 80 L94 80 L80 62 Z", "grey"]],
    },
    book: {
      s: "M50 24 C40 16 22 16 8 20 L8 80 C22 76 40 76 50 84 C60 76 78 76 92 80 L92 20 C78 16 60 16 50 24 Z M50 24 L50 84 M16 32 C26 30 34 30 42 33 M16 42 C26 40 34 40 42 43 M16 52 C26 50 34 50 42 53 M58 33 C66 30 74 30 84 32 M58 43 C66 40 74 40 84 42 M58 53 C66 50 74 50 84 52",
      f: [[0, "#F8E7C2"], ["M8 80 C22 76 40 76 50 84 C60 76 78 76 92 80 L92 86 C78 82 60 82 50 90 C40 82 22 82 8 86 Z", "blue"]],
    },
    trophy: {
      s: "M30 10 L70 10 L70 32 C70 50 60 58 50 58 C40 58 30 50 30 32 Z M30 16 C14 16 14 38 32 40 M70 16 C86 16 86 38 68 40 M46 58 L44 72 L56 72 L54 58 M32 72 L68 72 L68 88 L32 88 Z M50 20 L53 28 L61 28 L55 33 L57 41 L50 36 L43 41 L45 33 L39 28 L47 28 Z",
      f: [[0, "yellow"], [4, "brown"], ["M46 58 L44 72 L56 72 L54 58 Z", "orange"]],
    },
    target: {
      s: circ(46, 54, 38, 38, -100, 10) + " " + circ(46, 54, 25, 25, -100, 10) + " " + circ(46, 54, 12, 12, -100, 10) + " M46 54 L84 16 M84 16 L84 5 M84 16 L95 16 M78 14 L80 4 M86 22 L96 20",
      f: [[ell(46, 54, 38, 38), "red"], [ell(46, 54, 25, 25), "#FFFFFF"], [ell(46, 54, 12, 12), "red"]],
    },
    mountain: {
      s: "M2 88 L36 28 L52 54 L66 36 L98 88 Z M27 44 L36 28 L45 43 L40 47 L36 42 L31 48 Z M60 44 L66 36 L72 45 L68 47 L66 44 L63 47 M66 36 L66 18 L78 22 L66 26",
      f: [[0, "#8796AB"], [1, "#FFFFFF"], ["M66 18 L78 22 L66 26 Z", "red"]],
    },
    tree: {
      s: "M45 92 L46 62 M56 92 L54 62 M36 93 L64 93 M46 62 C30 66 18 56 22 44 C12 36 20 20 34 22 C38 10 58 8 64 20 C78 16 88 30 80 40 C88 50 78 64 64 60 C60 66 52 66 54 62 M50 74 L42 64 M52 78 L60 66",
      f: [["M46 62 C30 66 18 56 22 44 C12 36 20 20 34 22 C38 10 58 8 64 20 C78 16 88 30 80 40 C88 50 78 64 64 60 C60 66 52 66 46 62 Z", "green"], ["M45 92 L46 62 L54 62 L56 92 Z", "brown"]],
    },
    sun: {
      s: circ(50, 50, 22, 22, -100, 12) + " " + rays(50, 50, 30, 42, 12, -90) + " M42 46 L42 47.5 M58 46 L58 47.5 M42 55 C46 59 54 59 58 55",
      f: [[ell(50, 50, 22, 22), "yellow"]],
    },
    cloud: {
      s: "M24 70 C12 70 6 62 8 54 C10 46 18 42 26 44 C26 32 36 24 48 26 C56 18 72 20 76 32 C88 30 96 40 92 52 C96 60 90 70 80 70 Z",
      f: [[0, "#CFE6F7"]],
    },
    "cloud-rain": {
      s: "M24 60 C12 60 6 52 8 44 C10 36 18 32 26 34 C26 22 36 14 48 16 C56 8 72 10 76 22 C88 20 96 30 92 42 C96 50 90 60 80 60 Z M30 68 L25 80 M48 68 L43 80 M66 68 L61 80 M39 82 L35 92 M57 82 L53 92",
      f: [[0, "#B9C6D6"]], ink: null,
    },
    car: {
      s: "M18 66 L8 66 L8 54 C8 49 12 47 18 46 L28 44 L38 30 C40 27 44 26 48 26 L68 26 C72 26 75 28 77 31 L86 44 C92 46 94 50 94 56 L94 66 L83 66 M63 66 L37 66 " + circ(27, 67, 9, 9, -90, 10) + " " + circ(73, 67, 9, 9, -90, 10) + " M42 32 L56 32 L56 44 L34 44 Z M62 32 L71 32 L78 44 L62 44 Z M58 48 L58 60 M88 51 L94 51",
      f: [["M8 66 L8 54 C8 49 12 47 18 46 L28 44 L38 30 C40 27 44 26 48 26 L68 26 C72 26 75 28 77 31 L86 44 C92 46 94 50 94 56 L94 66 Z", "red"], ["M42 32 L56 32 L56 44 L34 44 Z", "sky"], ["M62 32 L71 32 L78 44 L62 44 Z", "sky"], [ell(27, 67, 9, 9), "#3A3F48"], [ell(73, 67, 9, 9), "#3A3F48"]],
    },
    factory: {
      s: "M4 90 L96 90 M8 90 L8 52 L28 40 L28 52 L48 40 L48 52 L68 40 L68 90 M74 90 L74 18 L86 18 L86 90 M16 64 L24 64 L24 74 L16 74 Z M34 64 L42 64 L42 74 L34 74 Z M52 64 L60 64 L60 74 L52 74 Z M80 12 C74 8 78 0 86 3 C92 -2 100 4 96 9",
      f: [["M8 90 L8 52 L28 40 L28 52 L48 40 L48 52 L68 40 L68 90 Z", "#C8B79A"], [box(74, 18, 12, 72), "red"], ["M80 12 C74 8 78 0 86 3 C92 -2 100 4 96 9 Z", "#C5CCD6"]],
    },
    "thought-bubble": {
      s: "M30 64 C14 64 8 50 16 42 C8 30 22 18 34 22 C38 10 58 8 64 18 C76 12 92 22 86 36 C96 44 88 62 74 60 C70 70 52 72 46 64 C42 68 34 68 30 64 Z " + circ(26, 78, 5, 5, -90, 8) + " " + circ(16, 90, 3, 3, -90, 8),
      f: [],
    },
    "speech-bubble": {
      s: "M14 20 C14 14 18 10 24 10 L80 10 C86 10 90 14 90 20 L90 56 C90 62 86 66 80 66 L42 66 L26 84 L30 66 L24 66 C18 66 14 62 14 56 Z",
      f: [],
    },
    star: { s: "M50 8 L61 36 L92 38 L68 58 L76 90 L50 72 L24 90 L32 58 L8 38 L39 36 Z", f: [[0, "yellow"]] },
    check: { s: "M16 52 L40 78 L86 20", f: [], ink: "green", weight: 1.8 },
    cross: { s: "M22 22 L78 78 M78 22 L22 78", f: [], ink: "red", weight: 1.8 },
    warning: { s: "M50 10 L92 86 L8 86 Z M50 36 L50 62 M50 74 L50 76", f: [["M50 10 L92 86 L8 86 Z", "yellow"]] },
    "question-mark": { s: "M30 30 C30 16 40 8 52 8 C66 8 74 18 74 30 C74 44 56 48 52 60 L52 70 M52 86 L52 88", f: [], ink: "purple", weight: 1.8 },
    "exclamation": { s: "M50 8 L50 66 M50 86 L50 88", f: [], ink: "red", weight: 2 },
    battery: {
      s: rrect(8, 30, 76, 40, 6) + " M84 42 L91 42 L91 58 L84 58 M20 38 L20 62 M30 38 L30 62 M40 38 L40 62 M50 38 L50 62",
      f: [[box(13, 35, 42, 30), "green"]],
    },
    shield: { s: "M50 8 C62 16 74 18 86 18 C86 52 74 76 50 92 C26 76 14 52 14 18 C26 18 38 16 50 8 Z M34 50 L46 62 L68 36", f: [[0, "blue"]] },
    key: { s: circ(26, 50, 16, 16, -60, 10) + " " + circ(26, 50, 5, 5, -60, 8) + " M42 50 L92 50 M78 50 L78 62 M88 50 L88 60 M68 50 L68 58", f: [[ell(26, 50, 16, 16), "yellow"]] },
    lock: { s: "M32 44 L32 30 C32 18 40 10 50 10 C60 10 68 18 68 30 L68 44 M22 44 L78 44 L78 90 L22 90 Z " + circ(50, 62, 5, 5, -90, 8) + " M50 67 L50 78", f: [[box(22, 44, 56, 46), "orange"]] },
    gift: {
      s: "M14 40 L86 40 L86 54 L14 54 Z M20 54 L20 92 L80 92 L80 54 M50 40 L50 92 M50 40 C40 24 26 28 32 36 C36 42 50 40 50 40 C60 24 74 28 68 36 C64 42 50 40 50 40",
      f: [[box(14, 40, 72, 14), "red"], [box(20, 54, 60, 38), "red"], [box(45, 40, 10, 52), "yellow"]],
    },
    calendar: {
      s: "M12 20 L88 20 L88 90 L12 90 Z M12 36 L88 36 M30 12 L30 26 M70 12 L70 26 M22 48 L30 48 M38 48 L46 48 M54 48 L62 48 M70 48 L78 48 M22 62 L30 62 M38 62 L46 62 M70 62 L78 62 M22 76 L30 76 M38 76 L46 76 M54 76 L62 76 " + circ(58, 62, 9, 8, -120, 14),
      f: [[box(12, 20, 76, 16), "red"]],
    },
    "map-pin": { s: "M50 92 C38 72 22 58 22 38 C22 22 34 10 50 10 C66 10 78 22 78 38 C78 58 62 72 50 92 Z " + circ(50, 38, 11, 11, -90, 8), f: [[0, "red"], [ell(50, 38, 11, 11), "#FFFFFF"]] },
    handshake: {
      s: "M2 38 L24 32 L30 60 L6 66 M98 38 L76 32 L70 60 L94 66 M24 36 C34 30 44 30 52 34 L74 36 M30 58 C36 64 44 68 52 68 C60 68 66 64 72 58 M36 40 C42 36 50 38 54 44 C56 48 52 50 48 48 L40 44 M48 48 C52 50 60 52 62 50 M44 54 C50 56 58 58 64 54 M48 60 C54 62 60 62 66 58",
      f: [["M2 38 L24 32 L30 60 L6 66 Z", "blue"], ["M98 38 L76 32 L70 60 L94 66 Z", "grey"], ["M24 36 C34 30 44 30 52 34 L74 36 L72 58 C66 64 60 68 52 68 C44 68 36 64 30 58 Z", "skin"]],
    },
    plant: {
      s: "M30 60 L70 60 L64 92 L36 92 Z M26 52 L74 52 L74 60 L26 60 Z M50 52 C50 40 48 30 50 18 M50 36 C38 36 30 28 30 18 C42 18 50 26 50 36 M50 28 C60 28 70 20 70 10 C58 10 50 18 50 28",
      f: [["M30 60 L70 60 L64 92 L36 92 Z", "orange"], [box(26, 52, 48, 8), "brown"], ["M50 36 C38 36 30 28 30 18 C42 18 50 26 50 36 Z", "green"], ["M50 28 C60 28 70 20 70 10 C58 10 50 18 50 28 Z", "green"]],
    },
    hourglass: {
      s: "M24 8 L76 8 M24 92 L76 92 M30 8 C30 34 46 42 46 50 C46 58 30 66 30 92 M70 8 C70 34 54 42 54 50 C54 58 70 66 70 92 M50 54 L50 70",
      f: [["M36 26 L64 26 C60 38 52 44 50 48 C48 44 40 38 36 26 Z", "yellow"], ["M32 90 C34 78 44 72 50 70 C56 72 66 78 68 90 Z", "yellow"]],
    },
    flag: { s: "M22 94 L22 6 M22 10 C40 2 54 18 78 10 L78 46 C54 54 40 38 22 46", f: [["M22 10 C40 2 54 18 78 10 L78 46 C54 54 40 38 22 46 Z", "red"]] },
    megaphone: {
      s: "M14 40 L30 40 L70 16 L70 80 L30 58 L14 58 Z M34 58 L40 76 L48 74 L44 62 M78 36 C84 42 84 56 78 62 M86 28 C96 40 96 58 86 70",
      f: [["M30 40 L70 16 L70 80 L30 58 Z", "red"], [box(14, 40, 16, 18), "grey"]],
    },
    envelope: { s: "M10 24 L90 24 L90 76 L10 76 Z M10 24 L50 54 L90 24", f: [[0, "#F8E7C2"]] },
    atom: {
      s: orbit(50, 50, 42, 15, 0) + " " + orbit(50, 50, 42, 15, 60) + " " + orbit(50, 50, 42, 15, -60) + " " + circ(50, 50, 6, 6, -90, 6),
      f: [[ell(50, 50, 6, 6), "red"]], ink: "blue",
    },
    document: {
      s: "M22 6 L64 6 L80 22 L80 94 L22 94 Z M64 6 L64 22 L80 22 M32 34 L70 34 M32 44 L70 44 M32 54 L70 54 M32 64 L58 64 M32 78 C38 72 42 84 48 76",
      f: [[0, "#F2F5F9"]],
    },
    puzzle: {
      s: "M20 30 L40 30 C38 20 44 14 50 14 C56 14 62 20 60 30 L80 30 L80 50 C90 48 96 54 96 60 C96 66 90 72 80 70 L80 90 L20 90 L20 70 C30 72 36 66 36 60 C36 54 30 48 20 50 Z",
      f: [[0, "purple"]],
    },
    scale: {
      s: "M50 16 L50 86 M32 90 L68 90 M50 86 L40 90 M50 86 L60 90 M14 26 L86 26 " + circ(50, 13, 4, 4, -90, 8) + " M16 26 L6 54 M16 26 L26 54 M4 54 C6 64 26 64 28 54 Z M84 26 L74 54 M84 26 L94 54 M72 54 C74 64 94 64 96 54 Z",
      f: [["M4 54 C6 64 26 64 28 54 Z", "yellow"], ["M72 54 C74 64 94 64 96 54 Z", "yellow"]],
    },
    pencil: {
      s: "M12 88 L20 64 L70 14 L86 30 L36 80 Z M20 64 L36 80 M62 22 L78 38 M12 88 L17 73 L27 83 Z",
      f: [["M20 64 L70 14 L86 30 L36 80 Z", "yellow"], ["M62 22 L70 14 L86 30 L78 38 Z", "pink"], ["M12 88 L17 73 L27 83 Z", "#3A3F48"]],
    },
    coffee: {
      s: "M20 34 L72 34 L68 84 C68 89 64 92 60 92 L32 92 C28 92 24 89 24 84 Z M71 44 C86 42 88 64 69 66 M36 26 C32 20 40 16 36 8 M50 26 C46 20 54 16 50 8 M64 26 C60 20 68 16 64 8",
      f: [["M20 34 L72 34 L68 84 C68 89 64 92 60 92 L32 92 C28 92 24 89 24 84 Z", "orange"]],
    },
    airplane: {
      s: "M8 52 C8 46 20 44 30 44 L78 44 C88 44 96 48 96 52 C96 56 88 60 78 60 L30 60 C20 60 8 58 8 52 Z M46 44 L32 16 L42 16 L62 44 M46 60 L32 88 L42 88 L62 60 M18 46 L10 28 L18 28 L28 44 M80 48 L86 48 M66 48 L70 48 M56 48 L60 48",
      f: [[0, "#E9EDF2"], ["M46 44 L32 16 L42 16 L62 44 Z", "blue"], ["M46 60 L32 88 L42 88 L62 60 Z", "blue"], ["M18 46 L10 28 L18 28 L28 44 Z", "red"]],
    },
    team: {
      s: circ(50, 30, 11, 11, -90, 8) + " M30 70 C30 54 40 46 50 46 C60 46 70 54 70 70 " + circ(22, 40, 9, 9, -90, 8) + " M6 74 C6 62 13 55 22 55 C27 55 31 57 34 60 " + circ(78, 40, 9, 9, -90, 8) + " M94 74 C94 62 87 55 78 55 C73 55 69 57 66 60",
      f: [["M30 70 C30 54 40 46 50 46 C60 46 70 54 70 70 Z", "blue"], ["M6 74 C6 62 13 55 22 55 C27 55 31 57 34 60 L32 74 Z", "orange"], ["M94 74 C94 62 87 55 78 55 C73 55 69 57 66 60 L68 74 Z", "green"]],
    },
    cart: {
      s: "M4 16 L16 16 L28 66 L82 66 M22 30 L92 30 L84 56 L26 56 " + circ(34, 80, 6, 6, -90, 8) + " " + circ(74, 80, 6, 6, -90, 8) + " M44 30 L44 56 M62 30 L62 56",
      f: [["M22 30 L92 30 L84 56 L26 56 Z", "#CFE6F7"]],
    },
    eye: { s: "M6 50 C26 24 74 24 94 50 C74 76 26 76 6 50 Z " + circ(50, 50, 15, 15, -90, 8) + " " + circ(50, 50, 6, 6, -90, 6) + " M44 44 L45 43", f: [[ell(50, 50, 15, 15), "blue"], [ell(50, 50, 6, 6), "#1E2026"]] },
    "water-drop": { s: "M50 8 C62 30 76 44 76 62 C76 78 64 90 50 90 C36 90 24 78 24 62 C24 44 38 30 50 8 Z M36 62 C36 72 42 78 50 78", f: [[0, "sky"]] },
    fire: {
      s: "M50 92 C30 92 20 78 22 62 C24 48 36 42 34 24 C46 32 52 40 52 52 C56 46 58 40 56 32 C70 44 80 58 78 70 C76 84 66 92 50 92 Z M50 90 C42 90 38 84 38 76 C38 68 46 64 46 56 C56 62 62 70 62 78 C62 86 56 90 50 90",
      f: [[0, "orange"], ["M50 90 C42 90 38 84 38 76 C38 68 46 64 46 56 C56 62 62 70 62 78 C62 86 56 90 50 90 Z", "yellow"]],
    },
    lightning: { s: "M58 6 L24 54 L46 54 L40 94 L78 40 L54 40 Z", f: [[0, "yellow"]] },
    "graduation-cap": {
      s: "M6 38 L50 20 L94 38 L50 56 Z M24 46 L24 66 C36 76 64 76 76 66 L76 46 M94 38 L94 62 M90 62 L94 70 L98 62 Z",
      f: [["M6 38 L50 20 L94 38 L50 56 Z", "#3A3F48"], ["M24 46 L50 56 L76 46 L76 66 C64 76 36 76 24 66 Z", "#3A3F48"]],
    },
    dna: {
      s: "M30 4 C30 20 70 30 70 46 C70 62 30 72 30 96 M70 4 C70 20 30 30 30 46 C30 62 70 72 70 96 M38 14 L62 14 M44 26 L56 26 M38 62 L62 62 M44 74 L56 74 M40 86 L60 86 M42 38 L58 38",
      f: [], ink: "blue",
    },
    "thumbs-up": {
      s: "M14 46 L32 46 L32 90 L14 90 Z M32 50 C42 46 48 38 50 26 C51 16 60 14 63 20 C66 28 63 38 58 46 L80 46 C87 46 89 53 84 57 C89 59 89 66 83 68 C88 70 86 77 80 78 C84 80 82 88 76 88 L46 88 C40 88 36 86 32 84",
      f: [[box(14, 46, 18, 44), "blue"], ["M32 50 C42 46 48 38 50 26 C51 16 60 14 63 20 C66 28 63 38 58 46 L80 46 C87 46 89 53 84 57 C89 59 89 66 83 68 C88 70 86 77 80 78 C84 80 82 88 76 88 L46 88 C40 88 36 86 32 84 Z", "skin"]],
    },
    robot: {
      s: rrect(26, 20, 48, 36, 6) + " M50 20 L50 10 " + circ(50, 8, 3.5, 3.5, -90, 8) + " " + circ(40, 36, 5, 5, -90, 6) + " " + circ(60, 36, 5, 5, -90, 6) + " M40 47 L60 47 M42 47 L42 50 M50 47 L50 50 M58 47 L58 50 M22 32 L26 32 L26 44 L22 44 M78 32 L74 32 L74 44 L78 44 " + rrect(30, 60, 40, 30, 4) + " M30 66 L16 80 M70 66 L84 80 M42 72 L58 72",
      f: [[0, "#C9D3DF"], [rrect(30, 60, 40, 30, 4), "sky"], [ell(40, 36, 5, 5), "red"], [ell(60, 36, 5, 5), "red"]],
    },
    crown: { s: "M14 74 L10 30 L32 50 L50 20 L68 50 L90 30 L86 74 Z M14 74 L86 74 L86 84 L14 84 Z", f: [[0, "yellow"], [box(14, 74, 72, 10), "orange"]] },
    city: {
      s: "M4 92 L96 92 M8 92 L8 50 L24 50 L24 30 L40 30 L40 92 M40 62 L52 62 L52 18 L70 18 L70 92 M70 46 L86 46 L86 92 M14 58 L18 58 M14 70 L18 70 M30 38 L34 38 M30 50 L34 50 M30 62 L34 62 M58 28 L64 28 M58 40 L64 40 M58 52 L64 52 M58 64 L64 64 M76 56 L80 56 M76 68 L80 68",
      f: [["M8 92 L8 50 L24 50 L24 30 L40 30 L40 92 Z", "#9DB2C9"], [box(52, 18, 18, 74), "#7E95AF"], [box(40, 62, 12, 30), "#B8C7D8"], [box(70, 46, 16, 46), "#B8C7D8"]],
    },
    truck: {
      s: "M6 28 L60 28 L60 72 L6 72 Z M60 42 L78 42 L92 56 L92 72 L60 72 M66 46 L76 46 L84 56 L66 56 Z " + circ(24, 74, 8, 8, -90, 8) + " " + circ(76, 74, 8, 8, -90, 8),
      f: [[box(6, 28, 54, 44), "orange"], ["M60 42 L78 42 L92 56 L92 72 L60 72 Z", "blue"], [ell(24, 74, 8, 8), "#3A3F48"], [ell(76, 74, 8, 8), "#3A3F48"]],
    },
    umbrella: {
      s: "M8 50 C8 26 28 10 50 10 C72 10 92 26 92 50 C86 44 76 44 71 50 C66 44 56 44 50 50 C44 44 34 44 29 50 C24 44 14 44 8 50 Z M50 50 L50 82 C50 90 40 90 40 82 M50 10 L50 6",
      f: [[0, "red"]],
    },
    wifi: { s: "M14 40 C34 20 66 20 86 40 M26 52 C40 38 60 38 74 52 M38 64 C46 56 54 56 62 64 M50 76 L50 77", f: [], ink: "blue", weight: 1.5 },
    "arrow-right": { s: "M8 60 C30 32 60 32 86 48 M72 46 L87 49 L80 35", f: [], ink: "blue", weight: 1.4 },
    "arrow-up": { s: "M50 92 L50 12 M34 28 L50 10 L66 28", f: [], ink: "green", weight: 1.4 },
    "arrow-down": { s: "M50 8 L50 88 M34 72 L50 90 L66 72", f: [], ink: "red", weight: 1.4 },
    "light-switch": { s: rrect(30, 10, 40, 80, 6) + " " + rrect(42, 30, 16, 40, 3) + " M42 44 L58 44", f: [[rrect(42, 30, 16, 40, 3), "yellow"]] },
    seedling: { s: "M10 90 L90 90 M50 90 C50 74 52 62 50 50 M50 64 C38 64 28 56 28 44 C40 44 50 52 50 64 M50 56 C62 56 72 46 72 34 C60 34 50 44 50 56", f: [["M50 64 C38 64 28 56 28 44 C40 44 50 52 50 64 Z", "green"], ["M50 56 C62 56 72 46 72 34 C60 34 50 44 50 56 Z", "green"], ["M10 90 C20 84 80 84 90 90 Z", "brown"]] },
  };
  // stick figures + portraits generated from poses
  Object.keys(POSES).forEach(function (k) { DOODLES["stick-" + k] = { s: stickPaths(POSES[k]), f: [], stick: true }; });
  [
    ["face-happy", { hair: "short", mouth: "smile", shirt: "blue" }],
    ["face-sad", { hair: "short", mouth: "frown", brows: "up", shirt: "grey" }],
    ["face-surprised", { hair: "curly", mouth: "open", brows: "up", shirt: "green" }],
    ["face-worried", { hair: "short", mouth: "flat", brows: "up", shirt: "orange" }],
    ["face-angry", { hair: "short", mouth: "frown", brows: "angry", shirt: "red" }],
    ["face-woman", { hair: "long", mouth: "smile", shirt: "purple" }],
    ["face-woman-bun", { hair: "bun", mouth: "smile", shirt: "teal", glasses: true }],
    ["face-man", { hair: "short", mouth: "smile", shirt: "blue" }],
    ["face-professor", { hair: "bald", mouth: "smile", shirt: "brown", glasses: true }],
  ].forEach(function (d) { DOODLES[d[0]] = { s: facePaths(d[1]), f: faceFills(d[1]), face: true }; });

  var DOODLE_ALIAS = {
    idea: "lightbulb", bulb: "lightbulb", light: "lightbulb", "light-bulb": "lightbulb", mind: "brain", think: "brain", coin: "coins", cash: "money", dollar: "money", "dollar-bill": "money", banknote: "money", bag: "money-bag", "piggy-bank": "piggybank", piggy: "piggybank", savings: "piggybank", home: "house", earth: "globe", world: "globe", time: "clock", watch: "clock", launch: "rocket", startup: "rocket", love: "heart", gear: "gears", settings: "gears", cog: "gears", growth: "chart-up", "chart": "chart-up", graph: "chart-up", decline: "chart-down", pie: "chart-pie", search: "magnifier", "magnifying-glass": "magnifier", smartphone: "phone", mobile: "phone", computer: "laptop", notebook: "book", award: "trophy", win: "trophy", goal: "target", bullseye: "target", mountains: "mountain", nature: "tree", weather: "cloud", rain: "cloud-rain", auto: "car", industry: "factory", thought: "thought-bubble", speech: "speech-bubble", bubble: "speech-bubble", tick: "check", yes: "check", no: "cross", x: "cross", wrong: "cross", danger: "warning", alert: "warning", question: "question-mark", energy: "lightning", power: "battery", security: "shield", protect: "shield", unlock: "key", secure: "lock", present: "gift", date: "calendar", location: "map-pin", pin: "map-pin", place: "map-pin", deal: "handshake", partnership: "handshake", grow: "plant", wait: "hourglass", announce: "megaphone", mail: "envelope", email: "envelope", letter: "envelope", science: "atom", physics: "atom", paper: "document", file: "document", report: "document", solution: "puzzle", justice: "scale", law: "scale", balance: "scale", write: "pencil", coffee: "coffee", plane: "airplane", travel: "airplane", people: "team", group: "team", shopping: "cart", see: "eye", vision: "eye", water: "water-drop", flame: "fire", education: "graduation-cap", school: "graduation-cap", genetics: "dna", like: "thumbs-up", good: "thumbs-up", ai: "robot", bot: "robot", king: "crown", best: "crown", town: "city", delivery: "truck", insurance: "umbrella", internet: "wifi", arrow: "arrow-right", sprout: "seedling", person: "stick-stand", man: "face-man", woman: "face-woman", happy: "face-happy", sad: "face-sad", surprised: "face-surprised", worried: "face-worried", angry: "face-angry", teacher: "face-professor", expert: "face-professor", "stick-figure": "stick-stand", stick: "stick-stand", walk: "stick-walk", run: "stick-run", celebrate: "stick-cheer", wave: "stick-wave",
  };
  function doodleName(name) {
    var n = str(name).toLowerCase().trim().replace(/[\s_]+/g, "-");
    if (DOODLES[n]) return n;
    if (DOODLE_ALIAS[n]) return DOODLE_ALIAS[n];
    var m = n.replace(/s$/, "");
    if (DOODLES[m]) return m;
    if (DOODLE_ALIAS[m]) return DOODLE_ALIAS[m];
    return null;
  }
  S.doodles = Object.keys(DOODLES);
  S.poses = Object.keys(POSES);
  S.hasDoodle = function (name) { return !!doodleName(name); };

  // keyword → doodle, used by the fallback and S.pickDoodle(text)
  var KEYWORDS = [
    [/\b(idea|ideas|insight|creative|creativity|invent\w*|innovat\w*|think\w*|imagin\w*)\b/, "lightbulb"],
    [/\b(brain|mind|memory|learn\w*|psycholog\w*|neuro\w*|intelligen\w*|smart)\b/, "brain"],
    [/\b(money|dollars?|cash|pay\w*|salary|income|cost\w*|price\w*|profit\w*|revenue|budget|cheap|expensive|wealth\w*|rich|financ\w*)\b/, "money"],
    [/\b(coins?|bitcoin|crypto\w*|currency)\b/, "coins"],
    [/\b(sav\w*|piggy|retire\w*|pension)\b/, "piggybank"],
    [/\b(invest\w*|grow\w*|growth|increase\w*|rise|rising|up|gain\w*|compound\w*|interest)\b/, "chart-up"],
    [/\b(decline\w*|drop\w*|fall\w*|loss|losses|crash\w*|decrease\w*|down)\b/, "chart-down"],
    [/\b(house|home|homes|rent\w*|mortgage|real estate|property)\b/, "house"],
    [/\b(world|global\w*|earth|planet|countr\w*|international)\b/, "globe"],
    [/\b(time|hours?|minutes?|seconds?|clock|daily|schedule\w*|late|early|years?)\b/, "clock"],
    [/\b(launch\w*|rocket|space|startup\w*|fast|speed|accelerat\w*)\b/, "rocket"],
    [/\b(love|heart|health\w*|care|caring|relationship\w*|feel\w*|emotion\w*)\b/, "heart"],
    [/\b(process\w*|system\w*|machine\w*|engine\w*|work\w*|mechanis\w*|automat\w*)\b/, "gears"],
    [/\b(search\w*|research\w*|find\w*|investigat\w*|detail\w*|analy\w*|look\w*)\b/, "magnifier"],
    [/\b(phone\w*|app|apps|mobile|smartphone\w*|call\w*)\b/, "phone"],
    [/\b(computer\w*|laptop\w*|software|online|internet|digital|code|coding|tech\w*|website\w*)\b/, "laptop"],
    [/\b(ai|robot\w*|artificial|algorithm\w*|automation)\b/, "robot"],
    [/\b(book\w*|read\w*|stud\w*|story|stories|histor\w*|knowledge)\b/, "book"],
    [/\b(school\w*|educat\w*|universit\w*|college|graduat\w*|teach\w*|student\w*)\b/, "graduation-cap"],
    [/\b(win\w*|success\w*|champion\w*|award\w*|best|victory|achiev\w*)\b/, "trophy"],
    [/\b(goal\w*|target\w*|aim\w*|focus\w*|purpose)\b/, "target"],
    [/\b(mountain\w*|climb\w*|challenge\w*|obstacle\w*|peak)\b/, "mountain"],
    [/\b(tree\w*|forest\w*|nature|environment\w*|green)\b/, "tree"],
    [/\b(sun|solar|light|day|summer|bright|energy)\b/, "sun"],
    [/\b(cloud\w*|weather|sky|storage)\b/, "cloud"],
    [/\b(rain\w*|storm\w*|water)\b/, "cloud-rain"],
    [/\b(car|cars|drive|driv\w*|traffic|road\w*|vehicle\w*)\b/, "car"],
    [/\b(factor\w*|industr\w*|manufactur\w*|pollution|production|produce\w*)\b/, "factory"],
    [/\b(city|cities|urban|town\w*)\b/, "city"],
    [/\b(question\w*|why|how|what|unknown|mystery|curious)\b/, "question-mark"],
    [/\b(danger\w*|warning\w*|risk\w*|careful|threat\w*|problem\w*)\b/, "warning"],
    [/\b(batter\w*|charg\w*|electric\w*|power)\b/, "battery"],
    [/\b(protect\w*|safe\w*|secur\w*|defen\w*|insur\w*)\b/, "shield"],
    [/\b(key|keys|unlock\w*|secret\w*|access)\b/, "key"],
    [/\b(lock\w*|privacy|password\w*)\b/, "lock"],
    [/\b(gift\w*|present\w*|bonus|free|reward\w*)\b/, "gift"],
    [/\b(calendar|date|dates|week\w*|month\w*|deadline\w*|plan\w*)\b/, "calendar"],
    [/\b(location\w*|map\w*|place\w*|where|city|travel\w*|destination\w*)\b/, "map-pin"],
    [/\b(deal\w*|agree\w*|partner\w*|trust\w*|team\w*|together|collaborat\w*)\b/, "handshake"],
    [/\b(people|person|customer\w*|users?|audience|everyone|community|society)\b/, "team"],
    [/\b(happy|smile\w*|joy\w*|fun)\b/, "face-happy"],
    [/\b(sad|stress\w*|depress\w*|tired|lonely|worr\w*|anxi\w*)\b/, "face-sad"],
    [/\b(fire\w*|hot|heat|burn\w*)\b/, "fire"],
    [/\b(fast|quick\w*|lightning|electric\w*|instant\w*)\b/, "lightning"],
    [/\b(shop\w*|buy\w*|sell\w*|store\w*|retail|ecommerce|market\w*)\b/, "cart"],
    [/\b(mail|email\w*|message\w*|letter\w*|inbox)\b/, "envelope"],
    [/\b(science|scien\w*|atom\w*|physic\w*|chemi\w*|experiment\w*)\b/, "atom"],
    [/\b(dna|gene\w*|biolog\w*|evolution)\b/, "dna"],
    [/\b(law\w*|legal|justice|fair\w*|balance\w*)\b/, "scale"],
    [/\b(writ\w*|draw\w*|design\w*|sketch\w*)\b/, "pencil"],
    [/\b(coffee|morning|break|energy drink)\b/, "coffee"],
    [/\b(fly|flight\w*|plane\w*|airport\w*|trip\w*)\b/, "airplane"],
    [/\b(see|eye\w*|vision|watch\w*|view\w*)\b/, "eye"],
    [/\b(king\w*|queen\w*|leader\w*|rule\w*|power\w*)\b/, "crown"],
    [/\b(ship\w*|deliver\w*|truck\w*|logistic\w*|transport\w*)\b/, "truck"],
    [/\b(wifi|connect\w*|network\w*|signal\w*)\b/, "wifi"],
    [/\b(wait\w*|patien\w*|hourglass|countdown)\b/, "hourglass"],
    [/\b(announc\w*|market\w*|advertis\w*|promot\w*|tell\w*|news)\b/, "megaphone"],
    [/\b(document\w*|paper\w*|contract\w*|report\w*|file\w*)\b/, "document"],
    [/\b(solv\w*|solution\w*|puzzle\w*|piece\w*|fit\w*)\b/, "puzzle"],
    [/\b(plant\w*|seed\w*|garden\w*|food|farm\w*)\b/, "plant"],
    [/\b(star\w*|famous|special|quality|excellent)\b/, "star"],
    [/\b(yes|correct|right|done|complete\w*)\b/, "check"],
    [/\b(no|wrong|mistake\w*|fail\w*|myth\w*|false)\b/, "cross"],
    [/\b(good|like\w*|approv\w*|great)\b/, "thumbs-up"],
  ];
  function pickDoodle(text, avoid) {
    var t = " " + str(text).toLowerCase() + " ";
    var best = null, bestPos = Infinity;
    for (var i = 0; i < KEYWORDS.length; i++) {
      var m = KEYWORDS[i][0].exec(t);
      if (m && m.index < bestPos && !(avoid && avoid.indexOf(KEYWORDS[i][1]) >= 0)) { best = KEYWORDS[i][1]; bestPos = m.index; }
    }
    return best;
  }
  S.pickDoodle = function (text) { return pickDoodle(text) || "lightbulb"; };

  // ───────────────────────── the board ─────────────────────────
  var B = null; // current board
  var UID = 0;
  function fillColor(c) {
    if (c === "skin") return "#F7D3B7";
    if (c === "hair") return "#6B4428";
    if (c === "sky") return "#A9D3F2";
    return colorOf(c, "#F2C230");
  }
  function noiseTexture() {
    try {
      var c = document.createElement("canvas");
      c.width = c.height = 192;
      var g = c.getContext("2d");
      var rnd = V.makeRand(97);
      var img = g.createImageData(192, 192);
      for (var i = 0; i < img.data.length; i += 4) {
        var v = 120 + rnd() * 70;
        img.data[i] = v; img.data[i + 1] = v; img.data[i + 2] = v - 6;
        img.data[i + 3] = rnd() < 0.5 ? 10 : 0;
      }
      g.putImageData(img, 0, 0);
      return c.toDataURL("image/png");
    } catch (e) { return ""; }
  }

  /**
   * S.board(root, opts) — create the whiteboard. opts: { hand: "light"|"medium"|"tan"|"brown"|"dark",
   * sleeve: css colour, paper: "white"|"cream"|"grid", handScale: 1, drift: 0 }
   * Returns the board; subsequent S.doodle / S.write / … calls draw on it.
   */
  S.board = function (root, opts) {
    opts = opts || {};
    root = root || V.root();
    var W = V.width, H = V.height;
    root.classList.add("pack-whiteboard-hand", "kind-whiteboard", "wbh");
    if (opts.paper) root.classList.add("wbh-paper-" + opts.paper);
    var paper = el("div.wbh-paper", { parent: root });
    var tex = noiseTexture();
    if (tex) el("div.wbh-grain", { parent: paper, style: { backgroundImage: "url(" + tex + ")", backgroundSize: u(192) + "px " + u(192) + "px" } });
    el("div.wbh-shine", { parent: paper });
    var svg = el("svg.wbh-svg", { parent: root });
    svg.setAttribute("viewBox", "0 0 " + W + " " + H);
    svg.setAttribute("width", W);
    svg.setAttribute("height", H);
    var defs = el("defs", { parent: svg });
    var world = el("g.wbh-world", { parent: svg });
    var layer = el("g.wbh-layer", { parent: world });
    var handWrap = el("g.wbh-hand", { parent: svg, style: { display: "none" } });
    var hand = el("g", { parent: handWrap });
    var P = "wbh" + UID++ + "_";
    var tone = opts.hand || S.handTone || "light";
    hand.innerHTML = handMarkup(P, tone, opts.sleeve);
    var b = {
      root: root, svg: svg, defs: defs, world: world, layer: layer, handWrap: handWrap, hand: hand,
      marker: hand.querySelector(".wbh-hmarker") || hand.querySelector(".wb-hmarker"),
      eraser: hand.querySelector(".wb-heraser"),
      shadow: hand.querySelector(".wb-hshadow"),
      W: W, H: H, strokes: [], pen: [], slots: [], moves: [], movers: [], erases: [], items: [],
      cursor: 0.3, seed: V.seed || 1, handScale: num(opts.handScale, 1) * V.unit * 1.15,
      drift: num(opts.drift, 0), lastCam: "", lastHand: "", dirty: true,
    };
    B = b;
    S.currentBoard = b;
    V.onFrame(function (t) { frame(b, t); });
    return b;
  };
  function board() { return B || S.board(V.root()); }

  // ── time slots: one hand → strokes never overlap ──
  function reserve(b, at, dur) {
    var D = V.duration, END = Math.max(0.35, D - 0.45);
    at = clamp(at, 0, Math.max(0, END - 0.3));
    dur = Math.max(0.12, dur);
    var t = at;
    for (var i = 0; i < b.slots.length; i++) {
      var s = b.slots[i];
      if (t + dur <= s.t0 - 0.03) break;
      if (t < s.t1 + 0.03) t = s.t1 + 0.03;
    }
    var free = true;
    if (t > at + 3 || t > END - 0.2) { t = at; free = false; } // cannot fit: draw without the hand
    var late = t - at;
    if (late > 0.05) dur = Math.max(dur * 0.45, dur - late * 0.8); // running behind the voice: draw faster
    if (t + dur > END) dur = Math.max(0.15, END - t);
    if (free) {
      var slot = { t0: t, t1: t + dur };
      var k = 0;
      while (k < b.slots.length && b.slots[k].t0 < slot.t0) k++;
      b.slots.splice(k, 0, slot);
    }
    b.cursor = Math.max(b.cursor, t + dur);
    return { t0: t, t1: t + dur, dur: dur, hand: free };
  }
  function startOf(b, opts) {
    if (opts && opts.at != null && isFinite(opts.at)) return Math.max(0, +opts.at);
    return b.cursor + (opts && opts.gap != null ? +opts.gap : 0.15);
  }

  // ── strokes ──
  function mkPath(parent, d, color, width, extra) {
    var p = document.createElementNS(NS, "path");
    p.setAttribute("d", d);
    p.setAttribute("fill", "none");
    p.setAttribute("stroke", color);
    p.setAttribute("stroke-width", f1(width));
    p.setAttribute("stroke-linecap", "round");
    p.setAttribute("stroke-linejoin", "round");
    if (extra) for (var k in extra) p.setAttribute(k, extra[k]);
    parent.appendChild(p);
    return p;
  }
  // register a path to be revealed between t0..t1 (pen follows unless opts.noHand)
  function addStroke(b, path, t0, t1, opts) {
    opts = opts || {};
    var len = 0;
    try { len = path.getTotalLength(); } catch (e) { len = 0; }
    if (!(len > 0)) len = 1;
    path.setAttribute("stroke-dasharray", f1(len + 1) + " " + f1(len + 4));
    path.style.visibility = "hidden";
    var st = { el: path, len: len, t0: t0, t1: Math.max(t1, t0 + 0.02), last: -1, ghost: opts.ghost || null, lin: !!opts.linear };
    if (st.ghost) { st.ghost.setAttribute("stroke-dasharray", f1(len + 1) + " " + f1(len + 4)); st.ghost.style.visibility = "hidden"; }
    b.strokes.push(st);
    b.dirty = true;
    if (opts.hand !== false) {
      var p0 = null, p1 = null;
      try { p0 = path.getPointAtLength(0); p1 = path.getPointAtLength(len); } catch (e) {}
      if (p0 && p1) {
        b.pen.push({
          t0: st.t0, t1: st.t1, tool: opts.tool || "pen", a: { x: p0.x, y: p0.y }, z: { x: p1.x, y: p1.y },
          point: opts.point || function (p) { var q = path.getPointAtLength(len * p); return { x: q.x, y: q.y }; },
          ease: st.lin ? null : strokeEase, off: opts.off || null,
        });
      }
    }
    return st;
  }
  function strokeEase(p) { return 0.55 * p + 0.45 * inOutSine(p); }
  // spread strokes [{el,len,gap}] over [t0, t0+dur] proportionally to length
  function schedule(b, list, t0, dur, opts) {
    var L = 0, G = 0;
    list.forEach(function (s) { L += s.len; G += s.gap || 0; });
    var gapScale = G > dur * 0.4 ? (dur * 0.4) / G : 1;
    var drawT = dur - G * gapScale;
    var t = t0;
    list.forEach(function (s, i) {
      if (i > 0) t += (s.gap || 0) * gapScale;
      var d = Math.max(0.015, (drawT * s.len) / Math.max(1, L));
      addStroke(b, s.el, t, t + d, { hand: opts.hand, ghost: s.ghost, tool: opts.tool, point: s.point, linear: s.linear });
      t += d;
    });
    return t;
  }
  function measure(path) { try { return path.getTotalLength() || 1; } catch (e) { return 1; } }

  // colour fill: zigzag marker scribble clipped to the shape, drawn after the outline
  function scribbleFill(b, parent, shapeD, color, bb, opts) {
    var id = "wbhc" + UID++;
    var cp = el("clipPath", { parent: b.defs, id: id });
    var sp = document.createElementNS(NS, "path");
    sp.setAttribute("d", shapeD);
    cp.appendChild(sp);
    var sw = opts.spacing;
    var ang = -0.62; // scribble direction
    var ca = Math.cos(ang), sa = Math.sin(ang);
    var cx = bb.x + bb.w / 2, cy = bb.y + bb.h / 2;
    var R = Math.sqrt(bb.w * bb.w + bb.h * bb.h) / 2 + sw;
    var d = "", n = Math.max(2, Math.ceil((2 * R) / sw));
    var rnd = V.makeRand((opts.seed || 1) * 31 + 7);
    var pts = [];
    for (var i = 0; i <= n; i++) {
      var off = -R + i * sw;
      // local line along direction (ca, sa), offset perpendicular
      var half = Math.sqrt(Math.max(0, R * R - off * off)) + sw * 0.5;
      var j1 = (rnd() - 0.5) * sw * 0.6, j2 = (rnd() - 0.5) * sw * 0.6;
      var ax = cx + -sa * off + ca * (-half + j1), ay = cy + ca * off + sa * (-half + j1);
      var bx = cx + -sa * off + ca * (half + j2), by = cy + ca * off + sa * (half + j2);
      if (i % 2) pts.push([bx, by], [ax, ay]);
      else pts.push([ax, ay], [bx, by]);
    }
    // trim zig lines to the bbox (keeps the scribble length — and its time — honest)
    var x0 = bb.x - sw, y0 = bb.y - sw, x1 = bb.x + bb.w + sw, y1 = bb.y + bb.h + sw;
    pts = pts.map(function (p) { return [clamp(p[0], x0, x1), clamp(p[1], y0, y1)]; });
    d = "M" + f1(pts[0][0]) + " " + f1(pts[0][1]);
    for (i = 1; i < pts.length; i++) d += "L" + f1(pts[i][0]) + " " + f1(pts[i][1]);
    var g = el("g", { parent: parent, "clip-path": "url(#" + id + ")" });
    var p = mkPath(g, d, color, sw * 1.75, { opacity: opts.opacity != null ? opts.opacity : 0.92 });
    // the hand sweeps diagonally across the shape with a scribbling wiggle (not every zig)
    var A = { x: bb.x + bb.w * 0.15, y: bb.y + bb.h * 0.2 }, Z = { x: bb.x + bb.w * 0.85, y: bb.y + bb.h * 0.85 };
    var wig = Math.min(bb.w, bb.h) * 0.22;
    var waves = Math.max(2, Math.round(n / 3));
    return {
      el: p, len: measure(p), gap: 0.06, linear: true,
      point: function (q) {
        var w = Math.sin(q * Math.PI * 2 * waves) * wig;
        return { x: lerp(A.x, Z.x, q) + w * 0.6, y: lerp(A.y, Z.y, q) - w * 0.8 };
      },
    };
  }

  // ── items ──
  function mkItem(b, g, bb, t0, t1, extra) {
    var it = { g: g, x: bb.x, y: bb.y, w: bb.w, h: bb.h, cx: bb.x + bb.w / 2, cy: bb.y + bb.h / 2, t0: t0, t1: t1, end: t1 };
    if (extra) for (var k in extra) it[k] = extra[k];
    b.items.push(it);
    return it;
  }
  function rectOf(target) {
    if (!target) return { x: 0, y: 0, w: 0, h: 0 };
    if (target.w != null) return { x: target.x, y: target.y, w: target.w, h: target.h };
    return { x: target.x || 0, y: target.y || 0, w: 0, h: 0 };
  }
  function strokeW(size) { return clamp(size * 0.024, u(3.2), u(9)); }

  /**
   * S.doodle(name, { x, y, size, at, dur, color, ink, fill, rot, flip, weight, fillDur })
   * Draws a library doodle centred at (x, y) on the board, size = box width in px.
   */
  S.doodle = function (name, opts) {
    opts = opts || {};
    var b = board();
    var key = doodleName(name);
    if (!key) key = pickDoodle(name) || "star";
    var D = DOODLES[key];
    var size = num(opts.size, u(260));
    var sc = size / 100;
    var x = num(opts.x, b.W / 2), y = num(opts.y, b.H / 2);
    var rot = (num(opts.rot, 0) * Math.PI) / 180, flip = opts.flip ? -1 : 1;
    var cr = Math.cos(rot), sr = Math.sin(rot);
    var seed = (S.hash(key) % 997) + b.items.length * 13 + (b.seed % 101);
    var subs = wobble(cloneSubs(parsePath(D.s)), num(opts.wobble, 1.1), seed, 0.07);
    function T(px, py) { var lx = (px - 50) * sc * flip, ly = (py - 50) * sc; return [x + lx * cr - ly * sr, y + lx * sr + ly * cr]; }
    subs.forEach(function (sub) { eachPoint(sub, T); });
    var bb = subsBBox(subs);
    var ink = colorOf(opts.ink || D.ink || "black");
    var sw = strokeW(size) * num(D.weight, 1) * num(opts.weight, 1);
    var g = el("g.wbh-item.wbh-doodle", { parent: b.layer });
    var fillG = el("g", { parent: g });
    var lineG = el("g", { parent: g });
    var strokes = subs.map(function (sub, i) {
      var p = mkPath(lineG, subToD(sub), ink, sw);
      return { el: p, len: measure(p), gap: i ? 0.07 : 0 };
    });
    var fills = [];
    if (opts.fill !== false && D.f && D.f.length) {
      var base = parsePath(D.s);
      D.f.forEach(function (f, i) {
        var shapeSubs = typeof f[0] === "number" ? (base[f[0]] ? [base[f[0]]] : []) : parsePath(f[0]);
        if (!shapeSubs.length) return;
        shapeSubs = wobble(cloneSubs(shapeSubs), num(opts.wobble, 1.1), seed, 0.07);
        shapeSubs.forEach(function (sub) { eachPoint(sub, T); sub.closed = true; });
        var col = i === 0 && opts.color ? fillColor(opts.color) : fillColor(f[1]);
        var sbb = subsBBox(shapeSubs);
        if (sbb.w < 1 || sbb.h < 1) return;
        fills.push(scribbleFill(b, fillG, subsToD(shapeSubs), col, sbb, { spacing: clamp(size * 0.04, u(5), u(18)), seed: seed + i }));
      });
    }
    var t0 = startOf(b, opts);
    var L = 0;
    strokes.forEach(function (s) { L += s.len; });
    var natural = clamp(L / (u(1400) * num(opts.speed, 1)) + strokes.length * 0.04, 0.5, 3.2);
    var dur = opts.dur != null ? Math.max(0.3, +opts.dur) : natural;
    var fillDur = fills.length ? (opts.fillDur != null ? +opts.fillDur : clamp(0.2 + fills.length * 0.17, 0.35, 1.0)) : 0;
    if (opts.dur != null && fills.length && opts.fillDur == null) { fillDur = Math.min(fillDur, dur * 0.35); dur = dur - fillDur; }
    var slot = reserve(b, t0, dur + fillDur);
    var outDur = slot.dur * (dur / (dur + fillDur || 1));
    schedule(b, strokes, slot.t0, outDur, { hand: slot.hand });
    if (fills.length) schedule(b, fills, slot.t0 + outDur + 0.05, Math.max(0.15, slot.dur - outDur - 0.05), { hand: slot.hand });
    return mkItem(b, g, bb, slot.t0, slot.t1, { name: key, size: size, ink: ink });
  };
  S.figure = function (pose, opts) {
    var p = str(pose).toLowerCase().replace(/^stick-/, "");
    return S.doodle("stick-" + (POSES[p] ? p : "stand"), opts);
  };

  // ── handwriting ──
  function wordsOf(text) {
    // "*emphasis*" words are coloured; returns [{w, em, br}]
    var out = [];
    str(text).replace(/\r/g, "").split(/(\n)/).forEach(function (part) {
      if (part === "\n") { out.push({ br: true }); return; }
      var em = false;
      part.split(/\s+/).forEach(function (w) {
        if (!w) return;
        var s0 = /^[^\w*]*\*/.test(w), s1 = /\*[^\w*]*$/.test(w) && (!s0 || (w.match(/\*/g) || []).length > 1);
        var clean = w.replace(/\*/g, "");
        if (s0) em = true;
        if (clean) out.push({ w: clean, em: em });
        if (s1) em = false;
      });
    });
    return out;
  }
  function charAdv(ch) {
    if (ch === " ") return 34;
    var g = glyph(ch);
    if (g) return g.w + 8;
    return /[　-鿿가-힯]/.test(ch) ? 112 : 78;
  }
  function wordWidth(w, sc) { var s = 0; for (var i = 0; i < w.length; i++) s += charAdv(w[i]); return s * sc; }
  function splitLong(words, sc, maxW) {
    var out = [];
    words.forEach(function (wd) {
      if (wd.br || wordWidth(wd.w, sc) <= maxW) { out.push(wd); return; }
      var cur = "", cw = 0;
      for (var i = 0; i < wd.w.length; i++) {
        var a = charAdv(wd.w[i]) * sc;
        if (cur && cw + a > maxW * 0.97) { out.push({ w: cur, em: wd.em }); cur = ""; cw = 0; }
        cur += wd.w[i]; cw += a;
      }
      if (cur) out.push({ w: cur, em: wd.em });
    });
    return out;
  }
  function layoutText(words, size, maxW) {
    var sc = size / 100, space = 34 * sc, lines = [], cur = [], cw = 0, maxWord = 0;
    words.forEach(function (wd) {
      if (wd.br) { lines.push({ words: cur, w: cw }); cur = []; cw = 0; return; }
      var ww = wordWidth(wd.w, sc);
      maxWord = Math.max(maxWord, ww);
      if (cur.length && cw + space + ww > maxW) { lines.push({ words: cur, w: cw }); cur = []; cw = 0; }
      cw += (cur.length ? space : 0) + ww;
      cur.push({ w: wd.w, em: wd.em, width: ww });
    });
    if (cur.length || !lines.length) lines.push({ words: cur, w: cw });
    return { lines: lines, maxWord: maxWord };
  }
  /**
   * S.write(text, { x, y, size, maxWidth, maxLines, align, anchor, color, em, at, dur, speed, lineHeight })
   * Hand-letters text. (x, y) is the centre of the text block (anchor "center", default),
   * or its top-left corner (anchor "top-left") / left-middle (anchor "left").
   */
  S.write = function (text, opts) {
    opts = opts || {};
    var b = board();
    var words = wordsOf(text);
    var size = num(opts.size, u(64));
    var maxW = num(opts.maxWidth, b.W * 0.8);
    var maxLines = Math.max(1, num(opts.maxLines, 3));
    var minSize = num(opts.minSize, u(20));
    var size0 = size, lay, guard = 0;
    while (guard++ < 40) {
      lay = layoutText(words, size, maxW);
      var over = lay.lines.length > maxLines, wide = lay.maxWord > maxW;
      if (!over && !wide) break;
      if (size <= minSize || (!over && size <= size0 * 0.6)) break;
      size *= 0.93;
    }
    if (lay.maxWord > maxW) { words = splitLong(words, size / 100, maxW); lay = layoutText(words, size, maxW); }
    var sc = size / 100, lh = size * num(opts.lineHeight, 1.6);
    var blockW = 0;
    lay.lines.forEach(function (l) { blockW = Math.max(blockW, l.w); });
    var blockH = size + (lay.lines.length - 1) * lh;
    var anchor = opts.anchor || "center";
    var align = opts.align || (anchor === "center" || anchor === "top" || anchor === "bottom" ? "center" : anchor === "right" ? "right" : "left");
    var x = num(opts.x, b.W / 2), y = num(opts.y, b.H / 2);
    var left = anchor === "center" || anchor === "top" || anchor === "bottom" ? x - blockW / 2 : anchor === "right" ? x - blockW : x;
    var top = anchor === "center" || anchor === "left" || anchor === "right" ? y - blockH / 2 : anchor === "bottom" ? y - blockH : y;
    var color = colorOf(opts.color, INK.black), emCol = colorOf(opts.em, INK.red);
    var sw = clamp(size * num(opts.weight, 0.1), u(2.6), u(12));
    var g = el("g.wbh-item.wbh-text", { parent: b.layer });
    var strokes = [];
    var rnd = V.makeRand(S.hash(str(text)) % 100000 + 3);
    var ci = 0;
    lay.lines.forEach(function (line, li) {
      var lx = align === "center" ? left + (blockW - line.w) / 2 : align === "right" ? left + blockW - line.w : left;
      var by = top + li * lh; // cap top of this line
      line.words.forEach(function (wd, wi) {
        var col = wd.em ? emCol : color;
        for (var k = 0; k < wd.w.length; k++) {
          var ch = wd.w[k], gl = glyph(ch), adv = charAdv(ch) * sc;
          ci++;
          if (gl) {
            var jr = (rnd() - 0.5) * 0.06, js = 1 + (rnd() - 0.5) * 0.07, jy = (rnd() - 0.5) * 4;
            var subs = wobble(cloneSubs(gl.subs), 1.6, ci * 7 + 3, 0.09);
            var ox = lx, oy = by;
            subs.forEach(function (sub) {
              eachPoint(sub, function (px, py) {
                var qx = px * js, qy = (py - 50) * js + 50 + jy;
                var rx = qx * Math.cos(jr) - (qy - 50) * Math.sin(jr), ry = qx * Math.sin(jr) + (qy - 50) * Math.cos(jr) + 50;
                rx += (100 - ry) * 0.07; // slight forward slant
                return [ox + rx * sc, oy + ry * sc];
              });
            });
            subs.forEach(function (sub, si) {
              var p = mkPath(g, subToD(sub), col, sw);
              strokes.push({ el: p, len: Math.max(measure(p), size * 0.08), gap: si ? 0.035 : k ? 0.05 : wi ? 0.11 : li ? 0.18 : 0 });
            });
          } else {
            // unsupported script: marker-style system text, revealed as the hand sweeps across it
            var te = el("text", { parent: g, x: f1(lx + adv * 0.04), y: f1(by + size * 0.98), fill: col, "font-size": f1(size * 1.12), "font-family": '"Segoe Print","Comic Sans MS","Noto Sans",sans-serif', "font-weight": "700", text: ch });
            var hp = mkPath(g, "M" + f1(lx) + " " + f1(by + size * 0.5) + " L" + f1(lx + adv * 0.9) + " " + f1(by + size * 0.6), col, 0.01, { opacity: 0 });
            strokes.push({ el: hp, len: size * 1.6, gap: k ? 0.05 : wi ? 0.11 : 0, textEl: te });
          }
          lx += adv;
        }
        lx += 34 * sc;
      });
    });
    var L = 0;
    strokes.forEach(function (s) { L += s.len; });
    var natural = clamp(L / (u(1700) * num(opts.speed, 1)) + strokes.length * 0.012, 0.3, 10);
    var t0 = startOf(b, opts);
    var slot = reserve(b, t0, opts.dur != null ? Math.max(0.25, +opts.dur) : natural);
    schedule(b, strokes, slot.t0, slot.dur, { hand: slot.hand });
    // non-glyph text elements fade in with their sweep
    strokes.forEach(function (s) {
      if (!s.textEl) return;
      var st = b.strokes[b.strokes.length - 1];
      for (var i = b.strokes.length - 1; i >= 0; i--) if (b.strokes[i].el === s.el) { st = b.strokes[i]; break; }
      b.movers.push({ fn: (function (te, a, z) { return function (t) { var o = clamp((t - a) / Math.max(0.05, z - a), 0, 1); te.style.opacity = o; }; })(s.textEl, st.t0, st.t1) });
    });
    return mkItem(b, g, { x: left, y: top - size * 0.1, w: blockW, h: blockH + size * 0.3 }, slot.t0, slot.t1, { size: size, lines: lay.lines.length });
  };
  S.measureText = function (text, size) {
    var lay = layoutText(wordsOf(text), size || u(64), 1e9);
    return lay.lines[0] ? lay.lines[0].w : 0;
  };

  // ── marker marks: lines, arrows, emphasis ──
  function drawD(b, d, opts, defColor, defW) {
    var g = el("g.wbh-item.wbh-mark", { parent: b.layer });
    var subs = parsePath(d);
    var col = colorOf(opts.color, defColor);
    var w = num(opts.width, defW);
    var strokes = subs.map(function (sub, i) {
      var p = mkPath(g, subToD(sub), col, w);
      return { el: p, len: measure(p), gap: i ? 0.06 : 0 };
    });
    var L = 0;
    strokes.forEach(function (s) { L += s.len; });
    var t0 = startOf(b, opts);
    var slot = reserve(b, t0, opts.dur != null ? Math.max(0.15, +opts.dur) : clamp(L / (u(1300) * num(opts.speed, 1)) + strokes.length * 0.05, 0.25, 2.5));
    schedule(b, strokes, slot.t0, slot.dur, { hand: slot.hand });
    return mkItem(b, g, subsBBox(subs), slot.t0, slot.t1);
  }
  /** S.path(d, opts) — draw any SVG path (board coordinates) with the hand. opts: { at, dur, color, width, wobble } */
  S.path = function (d, opts) {
    opts = opts || {};
    var b = board();
    var dd = opts.wobble === 0 ? d : subsToD(wobble(parsePath(d), num(opts.wobble, u(2.2)), b.items.length + 5, 0.012 / V.unit));
    return drawD(b, dd, opts, INK.black, u(5));
  };
  S.line = function (x1, y1, x2, y2, opts) { return S.path("M" + x1 + " " + y1 + " L" + x2 + " " + y2, opts); };
  function edgePoint(r, tx, ty, pad) {
    if (!r.w && !r.h) return { x: r.x, y: r.y };
    var cx = r.x + r.w / 2, cy = r.y + r.h / 2, dx = tx - cx, dy = ty - cy;
    var hw = r.w / 2 + pad, hh = r.h / 2 + pad;
    var s = Math.min(Math.abs(dx) > 1e-6 ? hw / Math.abs(dx) : 1e9, Math.abs(dy) > 1e-6 ? hh / Math.abs(dy) : 1e9);
    s = Math.min(s, 1);
    return { x: cx + dx * s, y: cy + dy * s };
  }
  /**
   * S.arrow(from, to, opts) — hand-drawn arrow between two items/points ({x,y} or an item).
   * opts: { at, dur, color, bend (-1..1, default 0.2), head: true, width, pad }
   * (The shared signature S.arrow(tl, svg, x1, y1, x2, y2, at, opts) still works.)
   */
  var sharedArrow = S.arrow;
  S.arrow = function (from, to, opts) {
    if (from && typeof from.fromTo === "function" && sharedArrow) return sharedArrow.apply(S, arguments);
    opts = opts || {};
    var b = board();
    var ra = rectOf(from), rb = rectOf(to);
    var ca = { x: ra.x + ra.w / 2, y: ra.y + ra.h / 2 }, cb = { x: rb.x + rb.w / 2, y: rb.y + rb.h / 2 };
    var pad = num(opts.pad, u(18));
    var a = edgePoint(ra, cb.x, cb.y, pad), z = edgePoint(rb, ca.x, ca.y, pad);
    var dx = z.x - a.x, dy = z.y - a.y, L = Math.sqrt(dx * dx + dy * dy) || 1;
    var bend = num(opts.bend, 0.2);
    var mx = (a.x + z.x) / 2 - (dy / L) * L * bend * 0.5, my = (a.y + z.y) / 2 + (dx / L) * L * bend * 0.5;
    var d = "M" + f1(a.x) + " " + f1(a.y) + " Q" + f1(mx) + " " + f1(my) + " " + f1(z.x) + " " + f1(z.y);
    if (opts.head !== false) {
      var tx = z.x - mx, ty = z.y - my, tl = Math.sqrt(tx * tx + ty * ty) || 1;
      tx /= tl; ty /= tl;
      var hl = clamp(L * 0.16, u(16), u(38));
      var h1 = { x: z.x - tx * hl - ty * hl * 0.6, y: z.y - ty * hl + tx * hl * 0.6 };
      var h2 = { x: z.x - tx * hl + ty * hl * 0.6, y: z.y - ty * hl - tx * hl * 0.6 };
      d += " M" + f1(h1.x) + " " + f1(h1.y) + " L" + f1(z.x) + " " + f1(z.y) + " L" + f1(h2.x) + " " + f1(h2.y);
    }
    return drawD(b, d, opts, INK.black, num(opts.width, u(5)));
  };
  /** S.circle(target, opts) — scribbled ellipse around an item/rect. opts: { at, dur, color (red), pad } */
  S.circle = function (target, opts) {
    opts = opts || {};
    var b = board(), r = rectOf(target), pad = num(opts.pad, u(22));
    var rnd = V.makeRand(b.items.length * 17 + 11);
    var cx = r.x + r.w / 2, cy = r.y + r.h / 2, rx = r.w / 2 + pad * 1.4, ry = r.h / 2 + pad;
    var pts = [], a0 = -Math.PI * 0.75, n = 30;
    for (var i = 0; i <= n + 4; i++) {
      var a = a0 + (i / n) * Math.PI * 2, k = 1 + (rnd() - 0.5) * 0.05 + (i / n) * 0.07;
      pts.push([cx + Math.cos(a) * rx * k, cy + Math.sin(a) * ry * k]);
    }
    var d = "M" + f1(pts[0][0]) + " " + f1(pts[0][1]);
    for (i = 1; i < pts.length - 1; i++) d += " Q" + f1(pts[i][0]) + " " + f1(pts[i][1]) + " " + f1((pts[i][0] + pts[i + 1][0]) / 2) + " " + f1((pts[i][1] + pts[i + 1][1]) / 2);
    return drawD(b, d, opts, INK.red, num(opts.width, u(5.5)));
  };
  /** S.underline(target, opts) — marker underline below an item (opts.double for two lines). */
  S.underline = function (target, opts) {
    opts = opts || {};
    var b = board(), r = rectOf(target);
    var y = r.y + r.h + num(opts.pad, u(4)), x0 = r.x - u(8), x1 = r.x + r.w + u(10);
    var d = "M" + f1(x0) + " " + f1(y) + " Q" + f1((x0 + x1) / 2) + " " + f1(y + u(9)) + " " + f1(x1) + " " + f1(y - u(4));
    if (opts.double) d += " M" + f1(x0 + u(20)) + " " + f1(y + u(16)) + " Q" + f1((x0 + x1) / 2) + " " + f1(y + u(22)) + " " + f1(x1 - u(14)) + " " + f1(y + u(12));
    return drawD(b, d, opts, INK.red, num(opts.width, u(6)));
  };
  /** S.box(target, opts) — sketchy rectangle around an item. */
  S.box = function (target, opts) {
    opts = opts || {};
    var b = board(), r = rectOf(target), p = num(opts.pad, u(20));
    var x0 = r.x - p, y0 = r.y - p, x1 = r.x + r.w + p, y1 = r.y + r.h + p, o = u(8);
    var d = "M" + f1(x0 - o) + " " + f1(y0 + u(2)) + " L" + f1(x1 + o * 0.5) + " " + f1(y0 - u(2)) + " L" + f1(x1 + u(3)) + " " + f1(y1 + o * 0.6) + " L" + f1(x0 + u(2)) + " " + f1(y1 + u(3)) + " L" + f1(x0 - u(2)) + " " + f1(y0 - o);
    return drawD(b, S.wobble(d, u(3), b.items.length), opts, colorOf(opts.color, INK.blue), num(opts.width, u(5)));
  };
  /** S.fill(d, color, opts) — scribble colour into any closed path (board coordinates). */
  S.fill = function (d, color, opts) {
    opts = opts || {};
    var b = board();
    var subs = parsePath(d);
    var bb = subsBBox(subs);
    var g = el("g.wbh-item.wbh-fillonly", { parent: b.layer });
    if (opts.behind !== false && b.layer.firstChild !== g) b.layer.insertBefore(g, b.layer.firstChild);
    var f = scribbleFill(b, g, d, fillColor(color || "yellow"), bb, { spacing: num(opts.spacing, clamp(Math.min(bb.w, bb.h) * 0.08, u(5), u(16))), seed: b.items.length + 3, opacity: opts.opacity });
    var t0 = startOf(b, opts);
    var slot = reserve(b, t0, opts.dur != null ? +opts.dur : clamp(0.25 + Math.sqrt(bb.w * bb.h) / u(700), 0.3, 1.2));
    schedule(b, [f], slot.t0, slot.dur, { hand: slot.hand });
    return mkItem(b, g, bb, slot.t0, slot.t1);
  };

  // ── camera ──
  /** S.panTo(x, y, { zoom, at, dur, ease }) — move the camera so board point (x, y) is centred. */
  S.panTo = function (x, y, opts) {
    opts = opts || {};
    var b = board();
    var at = opts.at != null ? +opts.at : b.cursor + 0.1;
    var dur = num(opts.dur, 1.1);
    b.moves.push({ t0: at, t1: at + dur, x: num(x, b.W / 2), y: num(y, b.H / 2), z: num(opts.zoom, 1), ease: opts.ease === "linear" ? function (p) { return p; } : inOutCubic });
    b.moves.sort(function (m1, m2) { return m1.t0 - m2.t0; });
    if (opts.at == null) b.cursor = Math.max(b.cursor, at + dur * 0.85);
    return { t0: at, t1: at + dur };
  };
  /** S.view(rect, opts) — fit a board rect {x,y,w,h} (or an item) into the frame. */
  S.view = function (rect, opts) {
    opts = opts || {};
    var b = board(), r = rectOf(rect), pad = num(opts.pad, 0.12);
    var z = Math.min(b.W / (r.w * (1 + pad * 2) || 1), b.H / (r.h * (1 + pad * 2) || 1));
    var o = {}; for (var k in opts) o[k] = opts[k];
    o.zoom = clamp(num(opts.zoom, z), 0.15, 3);
    return S.panTo(r.x + r.w / 2, r.y + r.h / 2, o);
  };
  function camAt(b, t) {
    var c = { x: b.W / 2, y: b.H / 2, z: 1 };
    for (var i = 0; i < b.moves.length; i++) {
      var m = b.moves[i];
      if (t <= m.t0) break;
      var p = t >= m.t1 ? 1 : m.ease((t - m.t0) / Math.max(0.01, m.t1 - m.t0));
      c = { x: lerp(c.x, m.x, p), y: lerp(c.y, m.y, p), z: Math.exp(lerp(Math.log(c.z), Math.log(m.z), p)) };
    }
    if (b.drift) c.z *= 1 + b.drift * inOutSine(clamp(t / Math.max(1, V.duration), 0, 1));
    return c;
  }
  S.camera = function (t) { return camAt(board(), t == null ? V.time() : t); };

  // ── erase ──
  /**
   * S.erase({ at, dur, area }) — the hand wipes the board clean with an eraser. Everything drawn
   * before the erase disappears (a faint ghost remains, like a real whiteboard); later drawings
   * land on a fresh layer. area: board rect (default: the camera view at that moment).
   */
  S.erase = function (opts) {
    opts = opts || {};
    var b = board();
    var t0 = startOf(b, opts);
    var cam = camAt(b, t0);
    var area = opts.area ? rectOf(opts.area) : { x: cam.x - b.W / 2 / cam.z, y: cam.y - b.H / 2 / cam.z, w: b.W / cam.z, h: b.H / cam.z };
    var slot = reserve(b, t0, num(opts.dur, 1.3));
    var id = "wbhm" + UID++;
    var big = Math.max(area.w, area.h) * 4;
    var mask = el("mask", { parent: b.defs, id: id, maskUnits: "userSpaceOnUse", x: f1(area.x - big), y: f1(area.y - big), width: f1(area.w + big * 2), height: f1(area.h + big * 2) });
    el("rect", { parent: mask, x: f1(area.x - big), y: f1(area.y - big), width: f1(area.w + big * 2), height: f1(area.h + big * 2), fill: "#fff" });
    var ew = Math.max(area.w, area.h) * 0.2;
    var rows = Math.max(3, Math.ceil(area.h / (ew * 0.62)));
    var d = "";
    for (var i = 0; i <= rows; i++) {
      var yy = area.y + (area.h * i) / rows;
      var xa = area.x - ew * 0.3, xb = area.x + area.w + ew * 0.3;
      d += (i ? " L" : "M") + f1(i % 2 ? xb : xa) + " " + f1(yy) + " L" + f1(i % 2 ? xa : xb) + " " + f1(yy + (area.h / rows) * 0.35);
    }
    var ep = mkPath(mask, d, "#0a0a0a", ew);
    var layer = b.layer;
    addStroke(b, ep, slot.t0, slot.t1, { hand: slot.hand, tool: "eraser", linear: true });
    b.erases.push({ layer: layer, id: id, t0: slot.t0, t1: slot.t1, state: -1 });
    b.layer = el("g.wbh-layer", { parent: b.world });
    b.cursor = Math.max(b.cursor, slot.t1);
    return { t0: slot.t0, t1: slot.t1, end: slot.t1 };
  };

  /**
   * S.dragIn(name, { x, y, size, at, dur, from }) — the hand slides in a finished (coloured)
   * doodle from off-board and lets go. from: "right" | "left" | "bottom" (default "right").
   */
  S.dragIn = function (name, opts) {
    opts = opts || {};
    var b = board();
    var o = {}; for (var k in opts) o[k] = opts[k];
    o.at = V.duration + 100; // build without scheduling
    var keep = b.cursor, keepSlots = b.slots.slice(), sN = b.strokes.length, pN = b.pen.length;
    var it = S.doodle(name, o);
    // make it fully drawn: drop its strokes from the reveal + pen lists
    b.strokes.splice(sN).forEach(function (s) { s.el.removeAttribute("stroke-dasharray"); s.el.style.visibility = ""; });
    b.pen.splice(pN);
    b.slots = keepSlots; b.cursor = keep;
    b.items.pop();
    var t0 = startOf(b, opts);
    var slot = reserve(b, t0, num(opts.dur, 0.9));
    var cam = camAt(b, slot.t0);
    var from = opts.from || "right";
    var dx = from === "left" ? -(it.x + it.w - (cam.x - b.W / 2 / cam.z)) - u(60) : from === "bottom" ? 0 : cam.x + b.W / 2 / cam.z - it.x + u(80);
    var dy = from === "bottom" ? cam.y + b.H / 2 / cam.z - it.y + u(80) : u(30);
    var g = it.g;
    g.setAttribute("transform", "translate(" + f1(dx) + " " + f1(dy) + ")");
    var anchor = { x: it.x + it.w * 0.78, y: it.y + it.h * 0.82 };
    function off(t) { var p = inOutCubic(clamp((t - slot.t0) / slot.dur, 0, 1)); return { x: dx * (1 - p), y: dy * (1 - p) }; }
    b.movers.push({ fn: function (t) { var q = off(t); g.style.visibility = t < slot.t0 - 0.6 ? "hidden" : ""; g.setAttribute("transform", "translate(" + f1(q.x) + " " + f1(q.y) + ")"); } });
    if (slot.hand) b.pen.push({ t0: slot.t0, t1: slot.t1, tool: "pen", a: { x: anchor.x + dx, y: anchor.y + dy }, z: anchor, point: function (p) { var e = inOutCubic(p); return { x: anchor.x + dx * (1 - e), y: anchor.y + dy * (1 - e) }; }, ease: null });
    return mkItem(b, g, { x: it.x, y: it.y, w: it.w, h: it.h }, slot.t0, slot.t1, { name: it.name });
  };

  /** S.wait(seconds) — advance the auto-cursor (next drawing without `at` starts later). */
  S.wait = function (sec) { var b = board(); b.cursor += num(sec, 0.5); return b.cursor; };
  S.cursor = function () { return board().cursor; };
  S.setCursor = function (t) { var b = board(); b.cursor = Math.max(0, num(t, b.cursor)); return b.cursor; };

  // ── per-frame ──
  function frame(b, t) {
    // camera
    var c = camAt(b, t);
    var tr = "translate(" + f1(b.W / 2 - c.x * c.z) + " " + f1(b.H / 2 - c.y * c.z) + ") scale(" + c.z.toFixed(5) + ")";
    if (tr !== b.lastCam) { b.world.setAttribute("transform", tr); b.lastCam = tr; }
    // stroke reveals
    var ss = b.strokes;
    for (var i = 0; i < ss.length; i++) {
      var s = ss[i];
      var p = t <= s.t0 ? 0 : t >= s.t1 ? 1 : (t - s.t0) / (s.t1 - s.t0);
      if (!s.lin && p > 0 && p < 1) p = strokeEase(p);
      var q = p <= 0 ? 0 : p >= 1 ? 1 : Math.round(p * 2000) / 2000;
      if (q === s.last) continue;
      s.last = q;
      var vis = q > 0 ? "" : "hidden";
      var off = f1(s.len * (1 - q));
      s.el.style.visibility = vis;
      s.el.setAttribute("stroke-dashoffset", off);
      if (s.ghost) { s.ghost.style.visibility = vis; s.ghost.setAttribute("stroke-dashoffset", off); }
    }
    // erases
    for (i = 0; i < b.erases.length; i++) {
      var e = b.erases[i];
      var st = t < e.t0 ? 0 : t < e.t1 ? 1 : 2;
      if (st === e.state) continue;
      e.state = st;
      if (st === 1) { e.layer.setAttribute("mask", "url(#" + e.id + ")"); e.layer.style.opacity = ""; }
      else if (st === 2) { e.layer.removeAttribute("mask"); e.layer.style.opacity = "0.035"; }
      else { e.layer.removeAttribute("mask"); e.layer.style.opacity = ""; }
    }
    for (i = 0; i < b.movers.length; i++) b.movers[i].fn(t);
    hand(b, t, c);
  }
  function toScreen(b, c, w) { return { x: (w.x - c.x) * c.z + b.W / 2, y: (w.y - c.y) * c.z + b.H / 2 }; }
  var ENTER = 0.55, GAP = 1.25;
  function handState(b, t, c) {
    var P = b.pen;
    if (!P.length) return null;
    var lo = 0, hi = P.length - 1, idx = -1;
    while (lo <= hi) { var m = (lo + hi) >> 1; if (P[m].t0 <= t) { idx = m; lo = m + 1; } else hi = m - 1; }
    if (idx >= 0 && t <= P[idx].t1) {
      var s = P[idx], p = (t - s.t0) / Math.max(1e-4, s.t1 - s.t0);
      if (s.ease) p = s.ease(p);
      var w = s.point(clamp(p, 0, 1));
      return { s: toScreen(b, c, w), lift: 0, tool: s.tool, drawing: true };
    }
    var a = idx >= 0 ? P[idx] : null, nb = idx + 1 < P.length ? P[idx + 1] : null;
    if (a && nb && nb.t0 - a.t1 <= GAP) {
      var g = nb.t0 - a.t1, q = inOutSine(clamp((t - a.t1) / Math.max(1e-4, g), 0, 1));
      var A = toScreen(b, c, a.z), Z = toScreen(b, c, nb.a);
      var dist = Math.sqrt((Z.x - A.x) * (Z.x - A.x) + (Z.y - A.y) * (Z.y - A.y));
      var lift = Math.sin(Math.PI * q) * clamp(0.25 + dist / u(260), 0, 1);
      return { s: { x: lerp(A.x, Z.x, q), y: lerp(A.y, Z.y, q) }, lift: lift, tool: q < 0.5 ? a.tool : nb.tool };
    }
    if (a && t < a.t1 + ENTER) {
      var A2 = toScreen(b, c, a.z), q2 = inOutSine((t - a.t1) / ENTER);
      var O = offscreen(b, A2);
      return { s: { x: lerp(A2.x, O.x, q2), y: lerp(A2.y, O.y, q2) }, lift: Math.min(1, q2 * 3), tool: a.tool };
    }
    if (nb && t > nb.t0 - ENTER) {
      var Z2 = toScreen(b, c, nb.a), q3 = inOutSine((t - (nb.t0 - ENTER)) / ENTER);
      var O2 = offscreen(b, Z2);
      return { s: { x: lerp(O2.x, Z2.x, q3), y: lerp(O2.y, Z2.y, q3) }, lift: Math.min(1, (1 - q3) * 3), tool: nb.tool };
    }
    return null;
  }
  function offscreen(b, p) { return { x: Math.min(b.W * 1.25, p.x + b.W * 0.22 + u(140)), y: b.H + u(70) }; }
  function hand(b, t, c) {
    var h = handState(b, t, c);
    var key;
    if (!h) {
      key = "none";
      if (key !== b.lastHand) { b.handWrap.style.display = "none"; b.lastHand = key; }
      return;
    }
    var lift = h.lift || 0;
    var sx = h.s.x + u(9) * lift, sy = h.s.y - u(20) * lift;
    var rot = 34 + (sx / b.W) * 9 - (sy / b.H) * 5 + Math.sin(t * 1.3) * 1.2 + (h.drawing ? Math.sin(t * 7.3) * 0.5 : 0);
    if (h.tool === "eraser") rot -= 6;
    var sc = b.handScale * (1 + 0.045 * lift);
    var tr = "translate(" + f1(sx) + " " + f1(sy) + ") rotate(" + rot.toFixed(2) + ") scale(" + sc.toFixed(4) + ")";
    key = tr + h.tool + lift.toFixed(2);
    if (key === b.lastHand) return;
    b.lastHand = key;
    b.handWrap.style.display = "";
    b.hand.setAttribute("transform", tr);
    if (b.shadow) b.shadow.setAttribute("transform", "translate(" + f1(6 + 18 * lift) + " " + f1(10 + 26 * lift) + ")");
    if (b.marker) b.marker.style.display = h.tool === "eraser" ? "none" : "";
    if (b.eraser) b.eraser.style.display = h.tool === "eraser" ? "" : "none";
  }

  // ───────────────────────── templates ─────────────────────────
  function L() {
    var W = V.width, H = V.height;
    return { W: W, H: H, P: V.isPortrait, Q: V.isSquare, mx: W * (V.isPortrait ? 0.08 : 0.07), my: H * (V.isPortrait ? 0.07 : 0.08) };
  }
  // start times for an ordered list of sync keys, leading the word so the drawing lands on it
  function times(keys, opts) {
    opts = opts || {};
    return S.syncTimes(keys.map(function (k) { return k ? str(k) : null; }), { start: opts.start != null ? opts.start : 0.25, lead: opts.lead != null ? opts.lead : 0.3, minGap: opts.minGap != null ? opts.minGap : 0.5, end: opts.end });
  }
  function key(explicit, text) { return explicit || S.autoKey(text) || null; }
  function lim(a, n) { return arr(a).slice(0, n); }
  function slotDur(ts, i, natural, minD) {
    var next = i + 1 < ts.length ? ts[i + 1] : V.duration - 0.4;
    return clamp(next - ts[i] - 0.12, minD || 0.4, natural);
  }
  function dname(d, fallbackText) { return (d && doodleName(d)) || pickDoodle(fallbackText) || "star"; }

  var T = {};

  // big doodle + handwritten label
  T["draw-concept"] = function (p) {
    var o = L();
    var label = str(p.label), cap = str(p.caption);
    var ts = times([key(p.keyword, label), key(p.labelKeyword, label), cap ? key(null, cap) : null]);
    var size = o.P ? o.W * 0.66 : o.Q ? o.H * 0.5 : Math.min(o.H * 0.56, o.W * 0.36);
    var cy = o.P ? o.H * 0.38 : o.H * (cap ? 0.4 : 0.43);
    var dd = S.doodle(dname(p.doodle, label + " " + cap), { x: o.W / 2, y: cy, size: size, at: Math.max(0.15, ts[0] - 0.7), dur: slotDur(ts, 0, 3.2, 1.0) * 0.95, color: p.color });
    var ly = o.P ? o.H * 0.66 : cy + size * 0.5 + u(cap ? 70 : 90);
    var lab = S.write(label, { x: o.W / 2, y: ly - u(o.P ? 46 : 42), anchor: "top", size: u(o.P ? 92 : 84), maxWidth: o.W * 0.84, maxLines: 2, at: Math.max(ts[1], dd.t1 + 0.05) });
    var last = lab;
    if (cap) last = S.write(cap, { x: o.W / 2, y: lab.y + lab.h + u(o.P ? 70 : 48), size: u(o.P ? 54 : 46), maxWidth: o.W * 0.8, maxLines: 2, color: "blue", at: Math.max(ts[2], lab.t1 + 0.1) });
    var emph = p.emphasis || "underline";
    if (emph === "underline") S.underline(lab, { at: last.t1 + 0.2, double: true });
    else if (emph === "circle") S.circle(dd, { at: last.t1 + 0.2 });
    lim(p.accents, 2).forEach(function (a, i) {
      var side = i ? 1 : -1;
      S.doodle(dname(a, "star"), { x: o.W / 2 + side * (size * 0.5 + u(o.P ? 70 : 120)), y: cy - size * 0.28 + i * size * 0.4, size: u(o.P ? 110 : 130), rot: side * 12 });
    });
  };

  // centre idea with branches drawn one by one
  T["mind-map"] = function (p) {
    var o = L();
    var br = lim(p.branches, 6);
    var n = Math.max(1, br.length);
    var ts = times([key(p.keyword, p.center)].concat(br.map(function (b) { return key(b.keyword, b.label); })));
    var cx = o.W / 2, cy = o.H / 2;
    var cw = o.P ? o.W * 0.5 : o.Q ? o.W * 0.34 : o.W * 0.24;
    var ctr = S.write(str(p.center), { x: cx, y: cy, size: u(o.P ? 70 : 64), maxWidth: cw, maxLines: 3, at: ts[0], color: "black" });
    var ring = S.circle(ctr, { at: ctr.t1 + 0.05, color: "blue", pad: u(26), dur: 0.7 });
    var Rx = o.P ? o.W * 0.33 : o.Q ? o.W * 0.37 : o.W * 0.34;
    var Ry = o.P ? o.H * 0.3 : o.Q ? o.H * 0.34 : o.H * 0.3;
    var ds = o.P ? u(150) : o.Q ? u(120) : u(150);
    br.forEach(function (b, i) {
      var a = n % 2 === 0 ? -90 + (360 / n) * (i + 0.5) : -90 + (360 / n) * i;
      if (n === 2) a = i ? 0 : 180;
      var r = (a * Math.PI) / 180;
      var bx = cx + Math.cos(r) * Rx, by = cy + Math.sin(r) * Ry * (o.P ? 1 : 0.92);
      var labelBelow = Math.sin(r) > -0.35 || !o.P;
      var dy = by - (labelBelow ? u(26) : -u(20));
      var t = Math.max(ts[i + 1], ring.t1 + 0.05);
      var colr = S.color(i);
      var nodeRect = { x: bx - ds / 2, y: dy - ds / 2, w: ds, h: ds };
      var ln = S.arrow({ x: ring.x, y: ring.y, w: ring.w, h: ring.h }, nodeRect, { at: t, head: false, bend: i % 2 ? 0.25 : -0.25, color: colr, width: u(6), pad: u(4), dur: 0.45 });
      var dd = S.doodle(dname(b.doodle, b.label), { x: bx, y: dy, size: ds, at: ln.t1 + 0.02, dur: clamp(slotDur(ts, i + 1, 1.8, 0.7) - 0.9, 0.6, 1.6) });
      S.write(str(b.label), { x: bx, y: labelBelow ? dy + ds * 0.5 + u(12) : dy - ds * 0.5 - u(12), anchor: labelBelow ? "top" : "bottom", size: u(o.P ? 50 : 48), maxWidth: o.P ? o.W * 0.36 : o.W * 0.2, maxLines: 2, color: colr, at: dd.t1 + 0.02 });
    });
  };

  // doodles connected by arrows
  T["process-flow"] = function (p) {
    var o = L();
    var steps = lim(p.steps, 5);
    var n = Math.max(1, steps.length);
    var title = str(p.title);
    var keys = (title ? [key(null, title)] : []).concat(steps.map(function (s) { return key(s.keyword, s.label); }));
    var ts = times(keys);
    var off = title ? 1 : 0;
    var top = o.my;
    if (title) {
      var tt = S.write(title, { x: o.W / 2, y: o.my + u(46), size: u(o.P ? 74 : 66), maxWidth: o.W * 0.84, maxLines: 2, at: ts[0] });
      S.underline(tt, { at: tt.t1 + 0.05, color: "blue", dur: 0.35 });
      top = tt.y + tt.h + u(40);
    }
    var column = o.P || (o.Q && n > 3);
    var prev = null;
    steps.forEach(function (s, i) {
      var x, y, size, lx, ly, lopt;
      if (!column) {
        var cw = (o.W - o.mx * 2) / n;
        size = Math.min(cw * 0.7, (o.H - top - o.my) * 0.5);
        x = o.mx + cw * (i + 0.5);
        y = top + (o.H - top - o.my) * 0.42 + (n > 2 && i % 2 ? size * 0.12 : 0);
        lopt = { x: x, y: y + size * 0.5 + u(24), size: u(n > 4 ? 40 : 50), maxWidth: cw * 0.94, maxLines: 3, anchor: "top" };
      } else {
        var rh = (o.H - top - o.my) / n;
        size = Math.min(rh * 0.78, o.W * 0.3);
        x = o.mx + size * 0.6 + (i % 2 ? o.W * 0.06 : 0);
        y = top + rh * (i + 0.5);
        lopt = { x: x + size * 0.62 + u(20), y: y, size: u(48), maxWidth: o.W - (x + size * 0.62 + u(20)) - o.mx, maxLines: 3, anchor: "left", align: "left" };
      }
      var t = ts[i + off];
      var a = null;
      var rect = { x: x - size / 2, y: y - size / 2, w: size, h: size };
      if (prev) a = S.arrow(prev, rect, { at: t, bend: column ? (i % 2 ? -0.35 : 0.35) : (i % 2 ? 0.3 : -0.3), color: "black", dur: 0.45, pad: u(14) });
      var dd = S.doodle(dname(s.doodle, s.label), { x: x, y: y, size: size, at: a ? a.t1 + 0.02 : t, dur: clamp(slotDur(ts, i + off, 2.2, 0.8) - 0.9, 0.6, 2.2) });
      lopt.at = dd.t1 + 0.02;
      lopt.color = i === n - 1 ? "red" : "black";
      S.write((p.numbered ? i + 1 + ". " : "") + str(s.label), lopt);
      prev = rect;
    });
  };

  // title + rows of doodle + handwritten text (+ check marks)
  T["list-with-doodles"] = function (p) {
    var o = L();
    var items = lim(p.items, 5);
    var n = Math.max(1, items.length);
    var title = str(p.title);
    var ts = times([title ? key(null, title) : null].concat(items.map(function (it) { return key(it.keyword, it.text); })));
    var tt = S.write(title || " ", { x: o.mx + u(10), y: o.my + u(o.P ? 70 : 40), size: u(o.P ? 82 : 72), maxWidth: o.W - o.mx * 2, maxLines: 2, anchor: "top-left", align: "left", at: ts[0] });
    S.underline(tt, { at: tt.t1 + 0.04, color: "red", dur: 0.35 });
    var top = tt.y + tt.h + u(o.P ? 80 : 46), bottom = o.H - o.my * (o.P ? 1.6 : 1);
    var rh = (bottom - top) / n;
    var ds = Math.min(rh * 0.8, u(o.P ? 170 : 130));
    items.forEach(function (it, i) {
      var y = top + rh * (i + 0.5);
      var x = o.mx + ds * 0.55 + u(10);
      var t = ts[i + 1];
      var dd = S.doodle(dname(it.doodle, it.text), { x: x, y: y, size: ds, at: t, dur: clamp(slotDur(ts, i + 1, 1.6, 0.6) * 0.5, 0.5, 1.4) });
      var tx = x + ds * 0.62 + u(26);
      var w = S.write(str(it.text), { x: tx, y: y, size: u(o.P ? 58 : 56), maxWidth: o.W - tx - o.mx - (p.check ? u(90) : 0), maxLines: 2, anchor: "left", align: "left", at: dd.t1 + 0.02, color: it.color || "black" });
      if (p.check) S.doodle("check", { x: w.x + w.w + u(56), y: y, size: u(70), at: w.t1 + 0.05, dur: 0.3 });
    });
  };

  // two sides: before / after
  T["before-after"] = function (p) {
    var o = L();
    var A = p.before || {}, Bf = p.after || {};
    var ta = str(p.beforeTitle || "Before"), tb = str(p.afterTitle || "After");
    var ts = times([key(A.keyword, A.label), key(Bf.keyword, Bf.label)], { minGap: 1 });
    var div;
    if (o.P) div = S.line(o.W * 0.12, o.H * 0.5, o.W * 0.88, o.H * 0.5, { at: 0.15, dur: 0.45, color: "grey", width: u(4) });
    else div = S.line(o.W * 0.5, o.H * 0.12, o.W * 0.5, o.H * 0.88, { at: 0.15, dur: 0.45, color: "grey", width: u(4) });
    function side(s, title, i, t, nextT) {
      var cx = o.P ? o.W / 2 : o.W * (i ? 0.75 : 0.25);
      var top = o.P ? (i ? o.H * 0.53 : o.my) : o.my + u(10);
      var hh = o.P ? o.H * 0.42 : o.H - o.my * 2;
      var head = S.write(title, { x: cx, y: top + u(44), size: u(o.P ? 64 : 60), maxWidth: o.W * (o.P ? 0.8 : 0.4), maxLines: 1, color: i ? "green" : "red", at: Math.max(div.t1 + 0.02, t - 0.6) });
      S.underline(head, { at: head.t1 + 0.02, color: i ? "green" : "red", dur: 0.25 });
      var size = o.P ? Math.min(hh * 0.5, o.W * 0.42) : Math.min(hh * 0.46, o.W * 0.3);
      var dy = top + u(90) + size * 0.55 + (o.P ? 0 : u(10));
      var dd = S.doodle(dname(s.doodle, s.label), { x: cx, y: dy, size: size, at: head.t1 + 0.3, dur: clamp(nextT - head.t1 - 1.2, 0.8, 2.4), color: s.color });
      var lab = S.write(str(s.label), { x: cx, y: dy + size * 0.5 + u(24), anchor: "top", size: u(o.P ? 52 : 50), maxWidth: o.W * (o.P ? 0.8 : 0.4), maxLines: 2, at: dd.t1 + 0.03 });
      if (s.note) S.write(str(s.note), { x: cx, y: lab.y + lab.h + u(30), size: u(36), maxWidth: o.W * (o.P ? 0.8 : 0.38), maxLines: 2, color: "blue", at: lab.t1 + 0.05 });
      return { dd: dd, lab: lab };
    }
    var s1 = side(A, ta, 0, ts[0], ts[1]);
    var s2 = side(Bf, tb, 1, Math.max(ts[1], s1.lab.t1 + 0.3), V.duration - 0.6);
    if (p.mark !== false) {
      S.doodle("cross", { x: s1.dd.x + s1.dd.w * 0.95, y: s1.dd.y + u(20), size: u(80), at: s2.lab.t1 + 0.15, dur: 0.35 });
      S.doodle("check", { x: s2.dd.x + s2.dd.w * 0.95, y: s2.dd.y + u(20), size: u(90), at: s2.lab.t1 + 0.55, dur: 0.35 });
    }
  };

  // stick figures acting out a mini story on a shared ground line
  T["stick-figure-story"] = function (p) {
    var o = L();
    var beats = lim(p.beats, 4);
    var n = Math.max(1, beats.length);
    var title = str(p.title);
    var ts = times([title ? key(null, title) : null].concat(beats.map(function (b) { return key(b.keyword, b.say || b.prop || b.pose); })));
    var top = o.my;
    if (title) {
      var tt = S.write(title, { x: o.W / 2, y: o.my + u(40), size: u(o.P ? 70 : 60), maxWidth: o.W * 0.84, maxLines: 2, at: ts[0] });
      top = tt.y + tt.h + u(20);
    }
    var rows = o.P && n > 2 ? 2 : 1;
    var perRow = Math.ceil(n / rows);
    var rowH = (o.H - top - o.my) / rows;
    var grounds = [];
    for (var r = 0; r < rows; r++) {
      var gy = top + rowH * (r + 0.86);
      grounds.push(gy);
      S.path("M" + f1(o.mx * 0.6) + " " + f1(gy) + " L" + f1(o.W - o.mx * 0.6) + " " + f1(gy + u(6)), { at: Math.max(0.1, (title ? ts[0] + 0.8 : 0.1) + r * 0.05), dur: 0.5, color: "grey", width: u(4), wobble: u(3) });
    }
    beats.forEach(function (b, i) {
      var r = Math.floor(i / perRow), c = i % perRow, cnt = Math.min(perRow, n - r * perRow);
      var cw = (o.W - o.mx * 2) / cnt;
      var fh = Math.min(rowH * (b.say ? 0.5 : 0.62), cw * 0.95);
      var fx = o.mx + cw * (c + 0.5) - (b.say ? cw * 0.12 : 0) - (b.prop ? cw * 0.1 : 0);
      var gy = grounds[r];
      var t = ts[i + (title ? 1 : 0)];
      var fig = S.figure(b.pose || "stand", { x: fx, y: gy - fh * 0.5 + fh * 0.02, size: fh, at: t, dur: clamp(slotDur(ts, i + (title ? 1 : 0), 1.6, 0.7) * 0.45, 0.6, 1.4), flip: !!b.flip });
      var last = fig;
      if (b.prop) {
        var ps = Math.min(fh * 0.5, cw * 0.32);
        last = S.doodle(dname(b.prop, b.prop), { x: fx + fh * 0.36 + ps * 0.45, y: gy - ps * 0.55, size: ps, at: fig.t1 + 0.03, dur: 0.9 });
      }
      if (b.say) {
        var bw = Math.min(cw * 0.88, o.W * 0.42), bh = Math.min(rowH * 0.36, bw * 0.62);
        var bx = clamp(fx + fh * 0.18 + bw * 0.32, o.mx + bw / 2, o.W - o.mx - bw / 2), byy = gy - fh - bh * 0.62;
        var bub = S.doodle("speech-bubble", { x: bx, y: byy, size: bw, at: last.t1 + 0.05, dur: 0.55, fill: false, weight: 0.8 });
        // the bubble art is 100 wide x ~75 tall; squash into bh via text box only
        S.write(str(b.say), { x: bx, y: byy - bw * 0.12, size: Math.min(u(o.P ? 44 : 40), bw * 0.1), minSize: bw * 0.05, maxWidth: bw * 0.64, maxLines: 2, at: bub.t1 + 0.02, color: S.color(i) });
      }
    });
  };

  // a quote written out by hand
  T["handwritten-quote"] = function (p) {
    var o = L();
    var q = str(p.quote), author = str(p.author);
    var hasD = !!p.doodle;
    var qx = o.W / 2, qy = o.H * (o.P ? 0.42 : 0.44);
    var marks = S.write("“", { x: o.mx + u(70), y: o.my + u(90), size: u(230), at: 0.1, color: "red", dur: 0.4, weight: 0.06 });
    var qd = clamp(V.duration * 0.62, 1.5, 14);
    var qt = S.write(q, { x: qx, y: qy, size: u(o.P ? 74 : 72), maxWidth: o.W * (o.P ? 0.82 : 0.74), maxLines: o.P ? 7 : 5, at: marks.t1 + 0.1, dur: Math.min(qd, Math.max(1.2, q.length * 0.06)) });
    var last = qt;
    if (author) last = S.write("— " + author, { x: o.W - o.mx, y: qt.y + qt.h + u(70), size: u(48), anchor: "right", maxWidth: o.W * 0.5, maxLines: 1, color: "blue", at: qt.t1 + 0.15 });
    if (author) { last.g && 0; }
    if (hasD) S.doodle(dname(p.doodle, q), { x: o.P ? o.W / 2 : o.mx + u(130), y: o.P ? o.H * 0.84 : o.H - o.my - u(110), size: u(o.P ? 220 : 190), at: last.t1 + 0.15, dur: 1.2 });
    S.underline(qt, { at: (hasD ? last.t1 + 1.4 : last.t1 + 0.2), color: "red", double: false });
  };

  // a huge hand-lettered number
  T["big-number"] = function (p) {
    var o = L();
    var val = str(p.value), label = str(p.label);
    var ts = times([key(p.keyword, val.replace(/[^\w.]/g, "")), key(p.labelKeyword, label)], { minGap: 0.6 });
    var hasD = !!p.doodle;
    var side = hasD && !o.P;
    var nx = side ? o.W * 0.38 : o.W / 2, ny = o.H * (o.P ? 0.36 : 0.4);
    var num1 = S.write(val, { x: nx, y: ny, size: u(o.P ? 230 : 250), maxWidth: side ? o.W * 0.5 : o.W * 0.84, maxLines: 1, color: p.color || "red", at: ts[0], weight: 0.07, speed: 0.8 });
    var lab = S.write(label, { x: nx, y: num1.y + num1.h + u(40), anchor: "top", size: u(o.P ? 64 : 56), maxWidth: side ? o.W * 0.5 : o.W * 0.84, maxLines: 2, at: Math.max(ts[1], num1.t1 + 0.1) });
    S.underline(num1, { at: lab.t1 + 0.1, double: true, color: "blue" });
    if (hasD) S.doodle(dname(p.doodle, label), { x: side ? o.W * 0.78 : o.W / 2, y: side ? o.H * 0.48 : o.H * 0.76, size: side ? Math.min(o.H * 0.5, o.W * 0.3) : o.W * 0.42, at: lab.t1 + 0.6, dur: 1.4 });
  };

  // camera travels along a big board, drawing a stop at each place
  T["pan-board"] = function (p) {
    var o = L();
    var stops = lim(p.stops, 6);
    var n = Math.max(1, stops.length);
    var title = str(p.title);
    var ts = times([title ? key(null, title) : null].concat(stops.map(function (s) { return key(s.keyword, s.label); })), { minGap: 1.2 });
    var off = title ? 1 : 0;
    var pos = [];
    for (var i = 0; i < n; i++) {
      if (o.P) pos.push({ x: o.W / 2 + (i % 2 ? 1 : -1) * o.W * 0.14, y: o.H * 0.48 + i * o.H * 0.62 });
      else pos.push({ x: o.W / 2 + i * o.W * 0.78, y: o.H * 0.52 + (i % 2 ? -1 : 1) * o.H * 0.1 });
    }
    var size = o.P ? o.W * 0.56 : Math.min(o.H * 0.48, o.W * 0.32);
    if (title) {
      var tt = S.write(title, { x: pos[0].x, y: o.my + u(46), size: u(o.P ? 70 : 62), maxWidth: o.W * 0.84, maxLines: 1, at: ts[0] });
      S.underline(tt, { at: tt.t1 + 0.04, color: "blue", dur: 0.3 });
    }
    var prev = null, lastEnd = 0;
    stops.forEach(function (s, i) {
      var c = pos[i];
      var t = ts[i + off];
      var rect = { x: c.x - size / 2, y: c.y - size / 2 - u(30), w: size, h: size };
      var startT = t;
      if (i > 0) {
        var pt0 = Math.max(lastEnd + 0.15, t - 1.1);
        S.panTo(c.x, c.y, { at: pt0, dur: 1.0 });
        var a = S.arrow(prev, rect, { at: pt0 + 0.05, dur: 0.85, bend: i % 2 ? 0.25 : -0.25, color: "blue", width: u(6), pad: u(30) });
        startT = Math.max(t, a.t1 + 0.02);
      }
      var dd = S.doodle(dname(s.doodle, s.label), { x: c.x, y: c.y - u(30), size: size, at: startT, dur: clamp(slotDur(ts, i + off, 2.4, 0.9) - 1.0, 0.8, 2.4) });
      var lab = S.write(str(s.label), { x: c.x, y: c.y - u(30) + size * 0.5 + u(28), anchor: "top", size: u(o.P ? 60 : 54), maxWidth: o.W * 0.7, maxLines: 2, at: dd.t1 + 0.02 });
      lastEnd = lab.t1;
      prev = o.P ? { x: Math.min(rect.x, lab.x), y: rect.y, w: Math.max(rect.x + rect.w, lab.x + lab.w) - Math.min(rect.x, lab.x), h: lab.y + lab.h - rect.y } : rect;
    });
    // final pull-back to show the whole journey
    if (n > 1 && lastEnd < V.duration - 1.5) {
      var x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
      pos.forEach(function (c) { x0 = Math.min(x0, c.x - size * 0.6); x1 = Math.max(x1, c.x + size * 0.6); y0 = Math.min(y0, c.y - size * 0.7); y1 = Math.max(y1, c.y + size * 0.75); });
      S.view({ x: x0, y: y0, w: x1 - x0, h: y1 - y0 }, { at: lastEnd + 0.3, dur: Math.min(1.4, V.duration - lastEnd - 0.4), pad: 0.04 });
    }
  };

  // hand-drawn bar / line chart
  T["simple-chart"] = function (p) {
    var o = L();
    var data = lim(p.data, 6).map(function (d) { return { label: str(d.label), value: num(d.value, 0) }; });
    var n = Math.max(1, data.length);
    var title = str(p.title);
    var ts = times([title ? key(null, title) : null].concat(data.map(function (d) { return key(null, d.label); })), { minGap: 0.35 });
    var off = title ? 1 : 0;
    var top = o.my;
    if (title) {
      var tt = S.write(title, { x: o.W / 2, y: o.my + u(44), size: u(o.P ? 68 : 60), maxWidth: o.W * 0.84, maxLines: 2, at: ts[0] });
      top = tt.y + tt.h + u(40);
    }
    var ax0 = o.mx + u(30), ax1 = o.W - o.mx, ay0 = top + u(60), ay1 = o.H - o.my - u(90);
    if (o.P) { ay0 = top + u(80); ay1 = top + (o.H - top) * 0.72; }
    var axes = S.path("M" + f1(ax0) + " " + f1(ay0 - u(20)) + " L" + f1(ax0) + " " + f1(ay1) + " L" + f1(ax1) + " " + f1(ay1), { at: title ? Math.max(0.2, ts[0] + 0.6) : 0.2, dur: 0.7, width: u(5) });
    var maxV = 0;
    data.forEach(function (d) { maxV = Math.max(maxV, d.value); });
    if (!(maxV > 0)) maxV = 1;
    var cw = (ax1 - ax0) / n;
    var fmt = function (v) { return str(p.prefix || "") + V.format(v, Math.abs(v) < 10 && v % 1 ? 1 : 0) + str(p.suffix || ""); };
    var line = p.kind === "line";
    var prevPt = null;
    var hi = p.highlight != null ? num(p.highlight, -1) : -1;
    var lastItem = axes;
    data.forEach(function (d, i) {
      var x = ax0 + cw * (i + 0.5), h = ((ay1 - ay0) * Math.max(0, d.value)) / maxV;
      var t = Math.max(ts[i + off], axes.t1 + 0.05);
      var col = hi === i ? "red" : S.color(i % 3 === 0 ? 0 : i % 3 === 1 ? 2 : 3);
      var bw = Math.min(cw * 0.56, u(170));
      var it;
      if (!line) {
        var r = "M" + f1(x - bw / 2) + " " + f1(ay1) + " L" + f1(x - bw / 2) + " " + f1(ay1 - h) + " L" + f1(x + bw / 2) + " " + f1(ay1 - h) + " L" + f1(x + bw / 2) + " " + f1(ay1);
        it = S.path(r, { at: t, dur: 0.45, width: u(5) });
        S.fill("M" + f1(x - bw / 2) + " " + f1(ay1) + " L" + f1(x - bw / 2) + " " + f1(ay1 - h) + " L" + f1(x + bw / 2) + " " + f1(ay1 - h) + " L" + f1(x + bw / 2) + " " + f1(ay1) + " Z", col, { at: it.t1 + 0.02, dur: 0.4 });
      } else {
        var ptc = { x: x, y: ay1 - h };
        if (prevPt) it = S.path("M" + f1(prevPt.x) + " " + f1(prevPt.y) + " L" + f1(ptc.x) + " " + f1(ptc.y), { at: t, dur: 0.4, color: "blue", width: u(6) });
        it = S.circle({ x: ptc.x, y: ptc.y, w: 0, h: 0 }, { pad: u(9), at: it ? it.t1 + 0.01 : t, dur: 0.25, color: hi === i ? "red" : "blue", width: u(5) });
        prevPt = ptc;
      }
      var vt = S.write(fmt(d.value), { x: x, y: ay1 - h - u(40), size: u(o.P ? 40 : 40), maxWidth: cw * 0.96, maxLines: 1, color: hi === i ? "red" : "black", at: Math.max(it.t1 + 0.02, t + 0.3) });
      S.write(d.label, { x: x, y: ay1 + u(46), size: u(o.P ? 34 : 36), maxWidth: cw * 0.96, maxLines: 2, color: "grey", at: vt.t1 + 0.02 });
      lastItem = vt;
      if (hi === i) S.circle({ x: x - bw / 2, y: ay1 - h - u(70), w: bw, h: h + u(70) }, { at: V.duration - 1.2, dur: 0.6 });
    });
  };

  // big hand-lettered title with decorations (chapter openers, section breaks)
  T["title-board"] = function (p) {
    var o = L();
    var title = str(p.title), sub = str(p.subtitle);
    var ts = times([key(p.keyword, title), sub ? key(null, sub) : null]);
    var dl = lim(p.doodles, 3);
    var cy = o.H * (dl.length && o.P ? 0.4 : 0.44);
    var tt = S.write(title, { x: o.W / 2, y: cy, size: u(o.P ? 120 : 120), maxWidth: o.W * 0.84, maxLines: 3, at: Math.max(0.15, ts[0] - 0.2), weight: 0.08 });
    var ul = S.underline(tt, { at: tt.t1 + 0.05, double: true, color: p.color || "red" });
    var last = ul;
    if (sub) last = S.write(sub, { x: o.W / 2, y: tt.y + tt.h + u(o.P ? 110 : 90), size: u(o.P ? 58 : 54), maxWidth: o.W * 0.8, maxLines: 2, color: "blue", at: Math.max(ts[1], ul.t1 + 0.05) });
    var spots = o.P ? [[0.5, 0.78, 0.36], [0.18, 0.13, 0.2], [0.82, 0.13, 0.2]] : [[0.13, 0.22, 0.17], [0.87, 0.24, 0.17], [0.86, 0.8, 0.15]];
    dl.forEach(function (d, i) {
      var s = spots[i];
      var sz = (o.P ? o.W : Math.min(o.W, o.H * 1.4)) * s[2];
      S.doodle(dname(d, d), { x: o.W * s[0], y: o.H * s[1], size: sz, at: last.t1 + 0.1, rot: i === 1 ? 10 : i ? -6 : 0 });
    });
  };

  // hand-drawn timeline with dated events
  T["timeline"] = function (p) {
    var o = L();
    var ev = lim(p.events, 5);
    var n = Math.max(1, ev.length);
    var title = str(p.title);
    var ts = times([title ? key(null, title) : null].concat(ev.map(function (e) { return key(e.keyword, e.date || e.label); })), { minGap: 0.6 });
    var off = title ? 1 : 0;
    var top = o.my;
    if (title) {
      var tt = S.write(title, { x: o.W / 2, y: o.my + u(46), size: u(o.P ? 70 : 62), maxWidth: o.W * 0.84, maxLines: 2, at: ts[0] });
      top = tt.y + tt.h + u(30);
    }
    var first = title ? ts[0] + 0.9 : 0.15;
    if (!o.P) {
      var ly = top + (o.H - top - o.my) * 0.48;
      var x0 = o.mx, x1 = o.W - o.mx;
      var tl = S.arrow({ x: x0, y: ly }, { x: x1, y: ly }, { at: first, dur: 0.6, bend: 0, pad: 0, width: u(6) });
      var cw = (x1 - x0 - u(60)) / n;
      ev.forEach(function (e, i) {
        var x = x0 + cw * (i + 0.5), up = i % 2 === 0;
        var t = Math.max(ts[i + off], tl.t1 + 0.05);
        var tick = S.line(x, ly - u(18), x, ly + u(18), { at: t, dur: 0.15, width: u(6) });
        var dt = S.write(str(e.date), { x: x, y: up ? ly - u(60) : ly + u(64), size: u(48), maxWidth: cw * 0.95, maxLines: 1, color: "red", at: tick.t1 + 0.02 });
        var ds = Math.min(cw * 0.5, (o.H - top - o.my) * 0.2);
        var dd = e.doodle ? S.doodle(dname(e.doodle, e.label), { x: x, y: up ? ly - u(110) - ds * 0.5 : ly + u(110) + ds * 0.5, size: ds, at: dt.t1 + 0.02, dur: 0.9 }) : null;
        var lyy = up ? (dd ? dd.y - u(10) : ly - u(100)) : (dd ? dd.y + dd.h + u(10) : ly + u(104));
        S.write(str(e.label), { x: x, y: lyy, anchor: up ? "bottom" : "top", size: u(36), maxWidth: cw * 0.95, maxLines: 2, at: (dd || dt).t1 + 0.02 });
      });
    } else {
      var lx = o.mx + u(60), y0 = top + u(30), y1 = o.H - o.my;
      var tl2 = S.arrow({ x: lx, y: y0 }, { x: lx, y: y1 }, { at: first, dur: 0.6, bend: 0, pad: 0, width: u(6) });
      var rh = (y1 - y0 - u(60)) / n;
      ev.forEach(function (e, i) {
        var y = y0 + rh * (i + 0.5);
        var t = Math.max(ts[i + off], tl2.t1 + 0.05);
        var tick = S.line(lx - u(18), y, lx + u(18), y, { at: t, dur: 0.15, width: u(6) });
        var dt = S.write(str(e.date), { x: lx + u(50), y: y - u(34), size: u(50), anchor: "left", align: "left", maxWidth: o.W * 0.5, maxLines: 1, color: "red", at: tick.t1 + 0.02 });
        var ds = Math.min(rh * 0.7, u(150));
        var dd = e.doodle ? S.doodle(dname(e.doodle, e.label), { x: o.W - o.mx - ds * 0.5, y: y, size: ds, at: dt.t1 + 0.02, dur: 0.9 }) : null;
        S.write(str(e.label), { x: lx + u(50), y: y + u(34), size: u(40), anchor: "left", align: "left", maxWidth: o.W - lx - u(50) - o.mx - (dd ? ds + u(20) : 0), maxLines: 2, at: (dd || dt).t1 + 0.02 });
      });
    }
  };

  S.templateIds = Object.keys(T);

  // ───────────────────────── fallback: key words + a related doodle ─────────────────────────
  var STOPW = { the: 1, a: 1, an: 1, and: 1, or: 1, but: 1, of: 1, to: 1, in: 1, on: 1, for: 1, with: 1, is: 1, are: 1, was: 1, were: 1, be: 1, been: 1, it: 1, its: 1, "it's": 1, that: 1, this: 1, these: 1, those: 1, by: 1, as: 1, at: 1, from: 1, your: 1, you: 1, we: 1, our: 1, their: 1, they: 1, them: 1, he: 1, she: 1, his: 1, her: 1, i: 1, me: 1, my: 1, so: 1, if: 1, then: 1, than: 1, there: 1, here: 1, just: 1, very: 1, can: 1, could: 1, will: 1, would: 1, should: 1, do: 1, does: 1, did: 1, have: 1, has: 1, had: 1, not: 1, no: 0, all: 1, any: 1, some: 1, what: 1, which: 1, who: 1, when: 1, where: 1, how: 1, why: 1, about: 1, into: 1, over: 1, also: 1, more: 1, most: 1, much: 1, many: 1, every: 1, each: 1, thing: 1, things: 1, really: 1, get: 1, got: 1, like: 1, one: 0, nobody: 1, tells: 1, takes: 1, just: 1, us: 1 };
  function tokensOf(narration) {
    if (V.words && V.words.length) return V.words.map(function (w) { return { w: str(w.word), t: w.start, e: w.end }; });
    var ws = str(narration).split(/\s+/).filter(Boolean).slice(0, 4000);
    var D = V.duration, n = Math.max(1, ws.length);
    return ws.map(function (w, i) { return { w: w, t: 0.3 + ((D - 0.9) * i) / n, e: 0.3 + ((D - 0.9) * (i + 0.8)) / n }; });
  }
  S.fallback = function (root, narration) {
    try {
      root = root || V.root();
      root.innerHTML = "";
      root.className = "";
      root.removeAttribute("style");
      B = null;
      var b = S.board(root);
      var o = L();
      var toks = tokensOf(narration != null ? narration : V.narration);
      var D = V.duration;
      if (!toks.length) {
        S.doodle("lightbulb", { x: o.W / 2, y: o.H * 0.46, size: Math.min(o.W, o.H) * 0.5, at: 0.2, dur: Math.max(0.6, Math.min(2.5, D * 0.5)) });
        return b;
      }
      // sentences → pages
      var sents = [], cur = [];
      toks.forEach(function (tk) {
        cur.push(tk);
        if (/[.!?;:]["')\]]*$/.test(tk.w) && cur.length >= 3) { sents.push(cur); cur = []; }
        else if (cur.length >= 18) { sents.push(cur); cur = []; }
      });
      if (cur.length) sents.push(cur);
      var maxPages = Math.max(1, Math.floor(D / 3.2));
      var per = Math.ceil(sents.length / maxPages);
      var pages = [];
      for (var i = 0; i < sents.length; i += per) pages.push([].concat.apply([], sents.slice(i, i + per)));
      var used = [];
      pages.forEach(function (pg, pi) {
        var t0 = pi === 0 ? 0.15 : Math.max(pg[0].t - 0.3, 0.2);
        var tEnd = pi + 1 < pages.length ? pages[pi + 1][0].t - 0.3 : D - 0.3;
        if (tEnd - t0 < 0.8) return;
        var kw = pg.filter(function (tk) { var c = tk.w.toLowerCase().replace(/[^\p{L}\p{N}'%$]+/gu, ""); return c && !STOPW[c] && (c.length > 2 || /\d/.test(c)); });
        if (kw.length > 5) {
          // keep the longest / numeric words, in spoken order
          var ranked = kw.slice().sort(function (a, c) { return (/\d/.test(c.w) ? 9 : c.w.length) - (/\d/.test(a.w) ? 9 : a.w.length); }).slice(0, 5);
          kw = kw.filter(function (tk) { return ranked.indexOf(tk) >= 0; });
        }
        if (!kw.length) kw = pg.slice(0, 3);
        var text = kw.map(function (tk) { return tk.w.replace(/[.,;:!?"()\[\]]+$/g, "").replace(/^["'(\[]+/, ""); }).join(" ");
        var ptext = pg.map(function (tk) { return tk.w; }).join(" ");
        var dn = pickDoodle(ptext, used) || pickDoodle(ptext) || ["lightbulb", "star", "target", "rocket"][pi % 4];
        used.push(dn);
        var area = { x: 0, y: 0 };
        if (pi > 0) {
          if (pi % 2 === 1) {
            area = { x: pi * o.W * 1.2, y: 0 };
            S.panTo(area.x + o.W / 2, o.H / 2, { at: t0, dur: 0.8 });
            t0 += 0.85;
          } else {
            var er = S.erase({ at: t0, dur: 0.9 });
            area = { x: (pi - 1) * o.W * 1.2, y: 0 };
            t0 = er.t1 + 0.05;
          }
        }
        var span = Math.max(0.6, tEnd - t0);
        var ddur = clamp(span * 0.35, 0.5, 2.2);
        var dsz = o.P ? o.W * 0.56 : o.Q ? o.H * 0.42 : o.H * 0.5;
        var dpos = o.P || o.Q ? { x: area.x + o.W / 2, y: o.H * (o.P ? 0.36 : 0.34) } : { x: area.x + o.W * 0.28, y: o.H * 0.5 };
        var dd = S.doodle(dn, { x: dpos.x, y: dpos.y, size: dsz, at: t0, dur: ddur });
        var tpos = o.P || o.Q ? { x: area.x + o.W / 2, y: o.H * (o.P ? 0.68 : 0.74), w: o.W * 0.84 } : { x: area.x + o.W * 0.68, y: o.H * 0.5, w: o.W * 0.5 };
        var lastT = kw[kw.length - 1].e || kw[kw.length - 1].t;
        var wt = Math.max(dd.t1 + 0.05, kw[0].t - 0.3);
        var wdur = clamp(lastT - wt + 0.2, 0.5, Math.max(0.5, tEnd - wt - 0.4));
        var w = S.write(text, { x: tpos.x, y: tpos.y, size: u(o.P ? 80 : 74), maxWidth: tpos.w, maxLines: o.P ? 4 : 3, at: wt, dur: wdur });
        if (w.t1 < tEnd - 0.8) S.underline(w, { at: w.t1 + 0.1, dur: 0.35 });
      });
      return b;
    } catch (e) {
      V.error("fallback: " + (e && e.message));
      try {
        root.innerHTML = "";
        var t = el("div", { parent: root, style: { position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center", padding: "8%", fontSize: u(64) + "px", fontWeight: "700", textAlign: "center", color: "#1E2026", background: "#FBFBF8", fontFamily: '"Segoe Print","Comic Sans MS",sans-serif' } });
        t.textContent = str(narration || V.narration).split(/\s+/).slice(0, 12).join(" ");
      } catch (e2) {}
    }
  };

  /** Render a template into root. Unknown id throws (the caller falls back). */
  S.render = function (id, root, props) {
    var fn = T[id];
    if (!fn) throw new Error("Unknown template: " + id);
    root = root || V.root();
    B = null;
    S.board(root, { hand: props && props.hand });
    fn(props || {});
    return root;
  };
})();
