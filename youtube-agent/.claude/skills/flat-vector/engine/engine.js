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
/* Scene engine: flat-vector — "Flat Vector Explainer".
 * Rich flat-vector illustration with constant fluid motion: illustrated worlds, round bird
 * mascots, planets, cells, shape morphs, elastic pops, particle streams, zooms through scales.
 * Everything is procedural SVG, a pure function of time (see engines/README.md).
 */
(function () {
  "use strict";
  var V = window.V;
  var S = window.SceneStyle;
  if (!V || !S) return;
  var NS = "http://www.w3.org/2000/svg";
  var U = V.unit;
  var W = V.width / U, H = V.height / U; // design units: the short side is 1080
  var D = V.duration;
  var PI = Math.PI, TAU = PI * 2;

  // ───────────────────────── palette ─────────────────────────
  var P = {
    ink: "#1E1745", night: "#140E36", deep: "#2A1C6E", violet: "#7B5CFF", lilac: "#B39CFF",
    pink: "#FF5FA2", rose: "#FF8FB8", coral: "#FF6B6B", orange: "#FF9F43", sun: "#FFD43B",
    cream: "#FFF3DC", mint: "#3DDC97", green: "#28B76B", leaf: "#6BD66B", teal: "#16C2C0",
    aqua: "#7FE7F2", sky: "#4DA8FF", blue: "#3B6CFF", navy: "#24306E", white: "#FFFFFF",
    brown: "#9A5B3C", sand: "#F4C98B", grey: "#A7A3C9", red: "#F04452", gold: "#FFC12E",
  };
  var SERIES = [P.coral, P.sky, P.mint, P.sun, P.violet, P.pink, P.orange, P.teal];
  S.init({ id: "flat-vector", kind: "minimal", enter: "pop", titleReveal: "mask", drift: 0, series: SERIES });
  S.palette = P;

  // ───────────────────────── tiny utils ─────────────────────────
  function str(v) { return v == null ? "" : String(v); }
  function arr(v) { return Array.isArray(v) ? v : v == null ? [] : [v]; }
  function num(v, d) { v = Number(v); return isFinite(v) ? v : d; }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function lerp(a, b, p) { return a + (b - a) * p; }
  function sstep(a, b, x) { var p = clamp((x - a) / (b - a || 1e-6), 0, 1); return p * p * (3 - 2 * p); }
  function f2(n) { return Math.round(n * 100) / 100; }
  function hash01(n) { var x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); }
  function lastT() { return Math.max(0.05, D - 0.05); }
  function ct(t) { return clamp(t, 0, Math.max(0.05, D - 0.3)); }
  var E = {
    outCubic: function (p) { return 1 - Math.pow(1 - p, 3); },
    inCubic: function (p) { return p * p * p; },
    inOut: function (p) { return p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2; },
    inOutSine: function (p) { return -(Math.cos(PI * p) - 1) / 2; },
    outBack: function (p) { var c1 = 1.9, c3 = c1 + 1; return 1 + c3 * Math.pow(p - 1, 3) + c1 * Math.pow(p - 1, 2); },
    // springy elastic with soft overshoot (friendlier than outElastic)
    pop: function (p) { if (p <= 0) return 0; if (p >= 1) return 1; return 1 - Math.cos(p * PI * 2.6) * Math.exp(-6.2 * p); },
    outExpo: function (p) { return p >= 1 ? 1 : 1 - Math.pow(2, -10 * p); },
    outQuad: function (p) { return 1 - (1 - p) * (1 - p); },
    bounce: function (x) {
      var n1 = 7.5625, d1 = 2.75;
      if (x < 1 / d1) return n1 * x * x;
      if (x < 2 / d1) return n1 * (x -= 1.5 / d1) * x + 0.75;
      if (x < 2.5 / d1) return n1 * (x -= 2.25 / d1) * x + 0.9375;
      return n1 * (x -= 2.625 / d1) * x + 0.984375;
    },
    linear: function (p) { return p; },
  };
  function ease(name) { return typeof name === "function" ? name : E[name] || (V.ease && V.ease[name]) || E.outCubic; }
  S.fvEase = E;

  // colours
  function hexRgb(c) {
    c = str(c).trim();
    if (P[c]) c = P[c];
    var m = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(c);
    if (!m) {
      var mm = /rgba?\(([^)]+)\)/.exec(c);
      if (mm) { var p = mm[1].split(",").map(Number); return [p[0] | 0, p[1] | 0, p[2] | 0]; }
      return [123, 92, 255];
    }
    var h = m[1];
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  }
  function rgbHex(r) {
    return "#" + r.map(function (v) { v = clamp(Math.round(v), 0, 255); return (v < 16 ? "0" : "") + v.toString(16); }).join("");
  }
  function mix(a, b, p) { var x = hexRgb(a), y = hexRgb(b); return rgbHex([lerp(x[0], y[0], p), lerp(x[1], y[1], p), lerp(x[2], y[2], p)]); }
  function rgbHsl(r) {
    var R = r[0] / 255, G = r[1] / 255, B = r[2] / 255, mx = Math.max(R, G, B), mn = Math.min(R, G, B), h = 0, s2 = 0, l = (mx + mn) / 2;
    if (mx !== mn) {
      var d = mx - mn;
      s2 = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn);
      h = mx === R ? (G - B) / d + (G < B ? 6 : 0) : mx === G ? (B - R) / d + 2 : (R - G) / d + 4;
      h *= 60;
    }
    return [h, s2, l];
  }
  function hslHex(h, s2, l) {
    h = ((h % 360) + 360) % 360;
    function f(n) { var k = (n + h / 30) % 12, a = s2 * Math.min(l, 1 - l); return l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1)); }
    return rgbHex([f(0) * 255, f(8) * 255, f(4) * 255]);
  }
  /** Painterly shadow: darker, a touch more saturated, hue drifting warm for yellows/oranges and cool (violet) otherwise. */
  function shade(c, p) {
    var hsl = rgbHsl(hexRgb(c)), h = hsl[0], s2 = hsl[1], l = hsl[2];
    if (s2 < 0.12) return mix(c, "#1A1240", p);
    var target = h >= 25 && h <= 95 ? 8 : h > 95 && h <= 200 ? 215 : h > 200 && h <= 290 ? 268 : 330;
    var dh = target - h; if (dh > 180) dh -= 360; if (dh < -180) dh += 360;
    return hslHex(h + dh * Math.min(1, p * 0.55), Math.min(1, s2 + p * 0.12), l * (1 - p * 0.72));
  }
  function tint(c, p) { return mix(c, "#FFFBF0", p); }    // highlights lean warm
  function col(c, d) { if (c == null || c === "") return d; c = str(c).trim(); return P[c] || (/^#|^rgb/.test(c) ? c : d); }
  function rgba(c, a) { var r = hexRgb(c); return "rgba(" + r[0] + "," + r[1] + "," + r[2] + "," + a + ")"; }
  S.mix = mix; S.shade = shade; S.tint = tint; S.colorOf = function (c, d) { return col(c, d || P.violet); };

  // ───────────────────────── SVG helpers ─────────────────────────
  function sv(tag, attrs, parent) {
    var e = document.createElementNS(NS, tag);
    if (attrs) for (var k in attrs) if (attrs[k] != null) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  S.svgEl = sv;
  var uid = 0;
  function nid(p) { return "fv" + (p || "") + ++uid; }

  // current scene context (defs, gradients cache, registry)
  var CUR = null;
  var gradCache = {};
  function defs() { return CUR ? CUR.defs : null; }
  /** Diagonal lit gradient for a flat colour: lighter top-left → base → slightly deeper bottom-right. */
  function grad(c, strength) {
    strength = strength == null ? 1 : strength;
    var key = "g" + c + strength;
    if (gradCache[key]) return "url(#" + gradCache[key] + ")";
    var d = defs();
    if (!d) return c;
    var id = nid("g");
    var g = sv("linearGradient", { id: id, x1: "0", y1: "0", x2: "0.9", y2: "1" }, d);
    sv("stop", { offset: "0", "stop-color": tint(c, 0.22 * strength) }, g);
    sv("stop", { offset: "0.55", "stop-color": c }, g);
    sv("stop", { offset: "1", "stop-color": shade(c, 0.14 * strength) }, g);
    gradCache[key] = id;
    return "url(#" + id + ")";
  }
  function vgrad(stops, key) {
    key = "v" + (key || stops.join("|"));
    if (gradCache[key]) return "url(#" + gradCache[key] + ")";
    var d = defs();
    if (!d) return stops[0];
    var id = nid("v");
    var g = sv("linearGradient", { id: id, x1: "0", y1: "0", x2: "0", y2: "1" }, d);
    stops.forEach(function (s, i) { sv("stop", { offset: f2(i / Math.max(1, stops.length - 1)), "stop-color": s }, g); });
    gradCache[key] = id;
    return "url(#" + id + ")";
  }
  /** Soft radial glow: colour at centre with alpha a → transparent. */
  function glow(c, a) {
    a = a == null ? 0.6 : a;
    var key = "r" + c + a;
    if (gradCache[key]) return "url(#" + gradCache[key] + ")";
    var d = defs();
    if (!d) return "none";
    var id = nid("r");
    var g = sv("radialGradient", { id: id }, d);
    sv("stop", { offset: "0", "stop-color": c, "stop-opacity": a }, g);
    sv("stop", { offset: "0.45", "stop-color": c, "stop-opacity": a * 0.45 }, g);
    sv("stop", { offset: "1", "stop-color": c, "stop-opacity": 0 }, g);
    gradCache[key] = id;
    return "url(#" + id + ")";
  }
  function longShadowFill(a) {
    var key = "ls" + a;
    if (gradCache[key]) return "url(#" + gradCache[key] + ")";
    var d = defs();
    if (!d) return "none";
    var id = nid("ls");
    var g = sv("linearGradient", { id: id, x1: "0", y1: "0", x2: "1", y2: "0" }, d);
    sv("stop", { offset: "0", "stop-color": "#1A1240", "stop-opacity": a }, g);
    sv("stop", { offset: "1", "stop-color": "#1A1240", "stop-opacity": 0 }, g);
    gradCache[key] = id;
    return "url(#" + id + ")";
  }
  function clipCircle(r, cx, cy) {
    var d = defs();
    var id = nid("c");
    var cp = sv("clipPath", { id: id }, d);
    sv("circle", { cx: cx || 0, cy: cy || 0, r: r }, cp);
    return "url(#" + id + ")";
  }
  function clipPathD(dstr) {
    var id = nid("c");
    var cp = sv("clipPath", { id: id }, defs());
    sv("path", { d: dstr }, cp);
    return "url(#" + id + ")";
  }
  S.fvGrad = grad; S.fvGlow = glow;

  /** Shaded flat "orb": deep base, lit offset disc (crescent shadow bottom-right), rim light and specular. */
  function orb(parent, r, c, opts) {
    opts = opts || {};
    var g = sv("g", null, parent);
    sv("circle", { r: r, fill: shade(c, 0.3) }, g);
    sv("circle", { cx: -r * 0.09, cy: -r * 0.1, r: r * 0.87, fill: grad(c) }, g);
    if (opts.rim !== false) {
      var a0 = 3.55, a1 = 4.45, rr = r * 0.74;
      sv("path", { d: "M" + f2(Math.cos(a0) * rr) + " " + f2(Math.sin(a0) * rr) + " A" + rr + " " + rr + " 0 0 1 " + f2(Math.cos(a1) * rr) + " " + f2(Math.sin(a1) * rr), fill: "none", stroke: tint(c, 0.75), "stroke-width": r * 0.07, "stroke-linecap": "round", opacity: 0.55 }, g);
      sv("ellipse", { cx: -r * 0.2, cy: -r * 0.62, rx: r * 0.07, ry: r * 0.045, fill: "#fff", opacity: 0.6, transform: "rotate(-30 " + (-r * 0.2) + " " + (-r * 0.62) + ")" }, g);
    }
    return g;
  }
  /** Long flat shadow (45°) behind a round object of radius r. */
  function longShadow(parent, r, len, a) {
    return sv("rect", { x: 0, y: -r, width: len || r * 4, height: r * 2, fill: longShadowFill(a == null ? 0.22 : a), transform: "rotate(40)" }, parent);
  }
  function groundShadow(parent, rx, y, a) {
    return sv("ellipse", { cx: 0, cy: y, rx: rx, ry: rx * 0.16, fill: "#1A1240", opacity: a == null ? 0.18 : a }, parent);
  }
  S.fvOrb = orb;

  // smooth closed path through points (Catmull-Rom → cubic Bézier)
  function smoothClosed(pts, tension) {
    var n = pts.length;
    if (n < 3) return "";
    var k = (tension == null ? 1 : tension) / 6;
    var s = "M" + f2(pts[0][0]) + " " + f2(pts[0][1]);
    for (var i = 0; i < n; i++) {
      var p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
      s += "C" + f2(p1[0] + (p2[0] - p0[0]) * k) + " " + f2(p1[1] + (p2[1] - p0[1]) * k) + " " +
        f2(p2[0] - (p3[0] - p1[0]) * k) + " " + f2(p2[1] - (p3[1] - p1[1]) * k) + " " + f2(p2[0]) + " " + f2(p2[1]);
    }
    return s + "Z";
  }
  function smoothOpen(pts) {
    var n = pts.length;
    if (n < 2) return "";
    var s = "M" + f2(pts[0][0]) + " " + f2(pts[0][1]);
    for (var i = 0; i < n - 1; i++) {
      var p0 = pts[Math.max(0, i - 1)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(n - 1, i + 2)];
      s += "C" + f2(p1[0] + (p2[0] - p0[0]) / 6) + " " + f2(p1[1] + (p2[1] - p0[1]) / 6) + " " +
        f2(p2[0] - (p3[0] - p1[0]) / 6) + " " + f2(p2[1] - (p3[1] - p1[1]) / 6) + " " + f2(p2[0]) + " " + f2(p2[1]);
    }
    return s;
  }
  function blobPts(r, n, seed, amt, t, speed) {
    var pts = [];
    for (var i = 0; i < n; i++) {
      var a = (i / n) * TAU;
      var w = 1 + amt * (Math.sin(a * 2 + seed + (t || 0) * (speed || 1)) * 0.6 + Math.sin(a * 3 - seed * 1.7 + (t || 0) * 1.3 * (speed || 1)) * 0.4);
      pts.push([Math.cos(a) * r * w, Math.sin(a) * r * w]);
    }
    return pts;
  }
  S.smoothPath = smoothClosed; S.smoothOpen = smoothOpen;

  // ───────────────────────── frame registry ─────────────────────────
  // All motion of the engine goes through one onFrame per scene: actors + updaters, pure in t.
  function newRegistry() {
    var reg = { actors: [], fns: [] };
    V.onFrame(function (t) {
      for (var i = 0; i < reg.fns.length; i++) {
        try { reg.fns[i](t); } catch (e) { reg.fns.splice(i--, 1); V.error("flat-vector frame: " + (e && e.message)); }
      }
      for (var j = 0; j < reg.actors.length; j++) reg.actors[j]._update(t);
    });
    return reg;
  }
  function onT(fn) { if (CUR) CUR.reg.fns.push(fn); else V.onFrame(fn); }
  S.onT = onT;

  // ───────────────────────── actors ─────────────────────────
  /**
   * An Actor wraps an SVG <g> (or HTML element) and composes: base position/scale/rotation,
   * keyframed moves, an entrance (pop/rise/drop/grow/fade/spin), an exit, float/bob, spin and pulse.
   */
  function Actor(node, html) {
    this.node = node; this.html = !!html;
    this.x = 0; this.y = 0; this.s = 1; this.r = 0; this.o = 1;
    this._moves = []; this._in = null; this._out = null; this._fl = null; this._spin = 0; this._pulse = null; this._hooks = [];
    this._vis = true; this._last = "";
    if (CUR) CUR.reg.actors.push(this);
  }
  var AP = Actor.prototype;
  AP.at = function (x, y) { this.x = x; this.y = y; return this; };
  AP.size = function (s) { this.s = s; return this; };
  AP.scale = AP.size;
  AP.rot = function (r) { this.r = r; return this; };
  AP.alpha = function (o) { this.o = o; return this; };
  /** Entrance at time t: kind pop|rise|drop|grow|fade|spin|slide-left|slide-right. */
  AP.enter = function (t, kind, dur) {
    this._in = { t: ct(num(t, 0)), k: kind || "pop", d: dur || (kind === "fade" ? 0.6 : kind === "drop" ? 0.9 : 0.85) };
    return this;
  };
  AP.pop = function (t, dur) { return this.enter(t, "pop", dur); };
  AP.exit = function (t, kind, dur) { this._out = { t: num(t, D), k: kind || "shrink", d: dur || 0.45 }; return this; };
  /** Gentle float: amp (design units), period (s), rotation amp (deg). */
  AP.float = function (amp, period, rotAmp, phase) {
    this._fl = { a: amp == null ? 10 : amp, p: period || 3.4, r: rotAmp == null ? 2 : rotAmp, ph: phase == null ? hash01(this._moves.length + uid) * 6 : phase };
    return this;
  };
  AP.spin = function (degPerSec) { this._spin = degPerSec; return this; };
  AP.pulse = function (amt, period) { this._pulse = { a: amt || 0.04, p: period || 1.6 }; return this; };
  /** Keyframed move at t: props {x,y,s,r,o}, dur, ease. */
  AP.to = function (t, props, dur, ez) {
    this._moves.push({ t: num(t, 0), p: props, d: dur == null ? 0.8 : dur, e: ease(ez || "inOut") });
    this._moves.sort(function (a, b) { return a.t - b.t; });
    return this;
  };
  AP.hook = function (fn) { this._hooks.push(fn); return this; };
  AP.state = function (t) {
    var st = { x: this.x, y: this.y, s: this.s, r: this.r, o: this.o };
    for (var i = 0; i < this._moves.length; i++) {
      var m = this._moves[i];
      if (t < m.t) break;
      var p = m.d > 0 ? m.e(clamp((t - m.t) / m.d, 0, 1)) : 1;
      for (var k in m.p) if (st[k] != null) st[k] = lerp(st[k], m.p[k], p);
    }
    var sc = 1, dx = 0, dy = 0, dr = 0, op = 1;
    var e = this._in;
    if (e) {
      var q = clamp((t - e.t) / e.d, 0, 1);
      if (t < e.t) op = 0;
      else if (e.k === "pop") { sc *= E.pop(q); op *= clamp(q * 5, 0, 1); dr += (1 - E.outCubic(q)) * -14; }
      else if (e.k === "grow") { sc *= E.outBack(q); op *= clamp(q * 4, 0, 1); }
      else if (e.k === "rise") { dy += (1 - E.outBack(q)) * 120; op *= clamp(q * 3, 0, 1); }
      else if (e.k === "drop") { dy -= (1 - E.bounce(q)) * 420; op *= clamp(q * 6, 0, 1); }
      else if (e.k === "slide-left") { dx -= (1 - E.outBack(q)) * 260; op *= clamp(q * 3, 0, 1); }
      else if (e.k === "slide-right") { dx += (1 - E.outBack(q)) * 260; op *= clamp(q * 3, 0, 1); }
      else if (e.k === "spin") { sc *= E.pop(q); dr += (1 - E.outCubic(q)) * -200; op *= clamp(q * 5, 0, 1); }
      else op *= E.outCubic(q);
    }
    var x = this._out;
    if (x && t >= x.t) {
      var q2 = clamp((t - x.t) / x.d, 0, 1);
      if (x.k === "fade") op *= 1 - q2;
      else { sc *= 1 - E.inCubic(q2) * 0.999; op *= 1 - sstep(0.6, 1, q2); }
    }
    var f = this._fl;
    if (f) {
      dy += Math.sin((t / f.p) * TAU + f.ph) * f.a;
      dx += Math.sin((t / (f.p * 1.7)) * TAU + f.ph * 1.3) * f.a * 0.35;
      dr += Math.sin((t / (f.p * 1.25)) * TAU + f.ph * 0.7) * f.r;
    }
    if (this._spin) dr += this._spin * t;
    if (this._pulse) sc *= 1 + Math.sin((t / this._pulse.p) * TAU) * this._pulse.a;
    return { x: st.x + dx, y: st.y + dy, s: st.s * sc, r: st.r + dr, o: st.o * op };
  };
  AP._update = function (t) {
    var s = this.state(t);
    var vis = s.o > 0.004 && Math.abs(s.s) > 0.002;
    if (vis !== this._vis) { this.node.style.visibility = vis ? "" : "hidden"; this._vis = vis; }
    if (vis) {
      var tr;
      if (this.html) tr = "translate(" + f2(s.x * U) + "px," + f2(s.y * U) + "px) rotate(" + f2(s.r) + "deg) scale(" + (Math.round(s.s * 10000) / 10000) + ") translate(-50%,-50%)";
      else tr = "translate(" + f2(s.x) + " " + f2(s.y) + ") rotate(" + f2(s.r) + ") scale(" + (Math.round(s.s * 10000) / 10000) + ")";
      if (tr !== this._last) {
        if (this.html) this.node.style.transform = tr; else this.node.setAttribute("transform", tr);
        this._last = tr;
      }
      var op = Math.round(clamp(s.o, 0, 1) * 1000) / 1000;
      if (op !== this._lo) { this.node.style.opacity = op; this._lo = op; }
    }
    for (var i = 0; i < this._hooks.length; i++) this._hooks[i](t, s);
  };
  S.Actor = Actor;
  S.actor = function (node, html) { return new Actor(node, html); };

  // ───────────────────────── particles & bursts ─────────────────────────
  /**
   * Ambient particles. kind: dust | stars | bubbles | sparks | snow | cells | confetti.
   * opts: { count, color(s), area:{x,y,w,h}, speed, size, dir (deg, drift direction), parent }
   */
  function particles(ctx, opts) {
    opts = opts || {};
    var kind = opts.kind || "dust";
    var n = Math.min(90, Math.max(0, Math.round(num(opts.count, kind === "stars" ? 40 : 26))));
    var a = opts.area || { x: 0, y: 0, w: W, h: H };
    var rnd = V.makeRand(num(opts.seed, 7) + n * 13 + (kind.length * 7));
    var colors = arr(opts.colors || opts.color || (kind === "bubbles" ? ["#FFFFFF"] : kind === "confetti" ? SERIES : ["#FFF6DA", "#BFF6FF", "#FFD1EC"]));
    colors = colors.map(function (c) { return col(c, "#fff"); });
    var g = sv("g", { class: "fv-particles", opacity: opts.opacity == null ? 1 : opts.opacity }, opts.parent || ctx.fx);
    var dir = (num(opts.dir, kind === "bubbles" ? -90 : kind === "snow" ? 90 : -70) * PI) / 180;
    var sp = num(opts.speed, kind === "sparks" ? 140 : 28);
    var base = num(opts.size, kind === "bubbles" ? 9 : kind === "cells" ? 16 : 3.2);
    var items = [];
    for (var i = 0; i < n; i++) {
      var sz = base * (0.45 + rnd() * 0.9);
      var c = colors[Math.floor(rnd() * colors.length)];
      var e;
      if (kind === "bubbles") e = sv("circle", { r: sz, fill: rgba(c, 0.12), stroke: rgba(c, 0.55), "stroke-width": Math.max(1.2, sz * 0.16) }, g);
      else if (kind === "cells") e = sv("ellipse", { rx: sz, ry: sz * 0.78, fill: c, opacity: 0.55 }, g);
      else if (kind === "confetti") e = sv("rect", { x: -sz, y: -sz * 0.5, width: sz * 2, height: sz, rx: sz * 0.3, fill: c }, g);
      else if (kind === "stars" && rnd() < 0.18) e = sv("path", { d: sparkleD(sz * 2.4), fill: c }, g);
      else e = sv("circle", { r: sz, fill: c, opacity: kind === "dust" ? 0.75 : 1 }, g);
      items.push({ e: e, x: rnd() * a.w, y: rnd() * a.h, sp: sp * (0.5 + rnd()), ph: rnd() * TAU, tw: 0.6 + rnd() * 1.6, sz: sz });
    }
    var spread = num(opts.spread, 18);
    onT(function (t) {
      for (var i = 0; i < items.length; i++) {
        var p = items[i];
        var x = p.x + Math.cos(dir) * p.sp * t + Math.sin(t * 0.7 + p.ph) * spread;
        var y = p.y + Math.sin(dir) * p.sp * t + Math.cos(t * 0.5 + p.ph) * spread * 0.5;
        x = a.x + ((x % a.w) + a.w) % a.w;
        y = a.y + ((y % a.h) + a.h) % a.h;
        var s = kind === "stars" ? 0.55 + 0.45 * Math.sin(t * p.tw * 2 + p.ph) : 1;
        var r = kind === "confetti" ? (t * 160 * p.tw + p.ph * 50) % 360 : 0;
        p.e.setAttribute("transform", "translate(" + f2(x) + " " + f2(y) + ")" + (r ? " rotate(" + f2(r) + ")" : "") + (s !== 1 ? " scale(" + f2(s) + ")" : ""));
      }
    });
    return g;
  }
  function sparkleD(r) {
    var k = r * 0.22;
    return "M0 " + -r + " Q" + k + " " + -k + " " + r + " 0 Q" + k + " " + k + " 0 " + r + " Q" + -k + " " + k + " " + -r + " 0 Q" + -k + " " + -k + " 0 " + -r + "Z";
  }
  S.sparkleD = sparkleD;

  /** Radial burst of sparkles / dots at (x,y) at time t0. opts: { color(s), count, radius, size, parent, dur } */
  function burst(ctx, x, y, t0, opts) {
    opts = opts || {};
    var n = Math.min(24, num(opts.count, 12));
    var R = num(opts.radius, 150), sz = num(opts.size, 12), dur = num(opts.dur, 0.85);
    var colors = arr(opts.colors || opts.color || [P.sun, P.pink, P.aqua, P.mint, "#fff"]).map(function (c) { return col(c, P.sun); });
    var g = sv("g", { transform: "translate(" + f2(x) + " " + f2(y) + ")", "pointer-events": "none" }, opts.parent || ctx.fx);
    var ring = sv("circle", { r: R * 0.5, fill: "none", stroke: colors[0], "stroke-width": sz * 0.6, opacity: 0 }, g);
    var bits = [];
    for (var i = 0; i < n; i++) {
      var a = (i / n) * TAU + hash01(i + x) * 0.4;
      var e = i % 3 === 0 ? sv("path", { d: sparkleD(sz * 1.5), fill: colors[i % colors.length] }, g) : sv("circle", { r: sz * (0.5 + hash01(i * 3 + y) * 0.5), fill: colors[i % colors.length] }, g);
      bits.push({ e: e, a: a, d: R * (0.75 + hash01(i * 7 + 1) * 0.5) });
    }
    g.style.visibility = "hidden";
    var vis = false;
    t0 = ct(t0);
    onT(function (t) {
      var q = (t - t0) / dur;
      var on = q >= 0 && q <= 1;
      if (on !== vis) { g.style.visibility = on ? "" : "hidden"; vis = on; }
      if (!on) return;
      var d = E.outCubic(q);
      ring.setAttribute("r", f2(R * (0.2 + d * 0.9)));
      ring.setAttribute("opacity", f2((1 - q) * 0.7));
      ring.setAttribute("stroke-width", f2(sz * 0.7 * (1 - q) + 0.5));
      for (var i = 0; i < bits.length; i++) {
        var b = bits[i];
        b.e.setAttribute("transform", "translate(" + f2(Math.cos(b.a) * b.d * d) + " " + f2(Math.sin(b.a) * b.d * d) + ") scale(" + f2(Math.max(0.01, 1 - q * q)) + ")");
      }
    });
    return g;
  }
  S.particles = function (ctx, opts) { return particles(ctx || CUR, opts); };
  S.burst = function (ctx, x, y, t0, opts) { return burst(ctx || CUR, x, y, t0, opts); };

  // ───────────────────────── scene, camera, layers ─────────────────────────
  function Camera() { this.x = W / 2; this.y = H / 2; this.z = 1; this._moves = []; this.breathe = 0.014; this.push = 0.035; this._layers = []; }
  Camera.prototype.to = function (t, props, dur, ez) {
    this._moves.push({ t: num(t, 0), p: props, d: dur == null ? 1.2 : dur, e: ease(ez || "inOut") });
    this._moves.sort(function (a, b) { return a.t - b.t; });
    return this;
  };
  Camera.prototype.state = function (t) {
    var st = { x: this.x, y: this.y, z: this.z };
    for (var i = 0; i < this._moves.length; i++) {
      var m = this._moves[i];
      if (t < m.t) break;
      var p = m.d > 0 ? m.e(clamp((t - m.t) / m.d, 0, 1)) : 1;
      // zoom interpolates in log space so scale changes feel even
      if (m.p.z != null) st.z = Math.exp(lerp(Math.log(st.z), Math.log(Math.max(1e-4, m.p.z)), p));
      if (m.p.x != null) st.x = lerp(st.x, m.p.x, p);
      if (m.p.y != null) st.y = lerp(st.y, m.p.y, p);
    }
    st.z *= (1 + this.push * V.progress(t, 0, D, "inOutSine")) * (1 + this.breathe * Math.sin(t * 0.42));
    st.x += Math.sin(t * 0.23) * 6;
    st.y += Math.cos(t * 0.19) * 5;
    return st;
  };
  Camera.prototype.apply = function (t) {
    var c = this.state(t);
    for (var i = 0; i < this._layers.length; i++) {
      var L = this._layers[i];
      var d = L.depth;
      var z = 1 + (c.z - 1) * d;
      var x = W / 2 + (c.x - W / 2) * d, y = H / 2 + (c.y - H / 2) * d;
      var tr = "translate(" + f2(W / 2) + " " + f2(H / 2) + ") scale(" + (Math.round(z * 100000) / 100000) + ") translate(" + f2(-x) + " " + f2(-y) + ")";
      if (tr !== L.last) { L.g.setAttribute("transform", tr); L.last = tr; }
    }
  };

  /**
   * Create a flat-vector scene in root. Returns ctx:
   * { root, svg, defs, bg, far, mid, world, front, fx, ui, cam, W, H, cx, cy, portrait, square, reg }
   * opts: { world: "space"|"sky"|"dusk"|"micro"|"body"|"ocean"|"studio"|"night"|"none", tone? }
   */
  S.scene = function (root, opts) {
    opts = opts || {};
    root = root || V.root();
    root.innerHTML = "";
    root.classList.add("fv-root");
    gradCache = {};
    var ctx = { root: root, W: W, H: H, cx: W / 2, cy: H / 2, portrait: V.isPortrait, square: V.isSquare, landscape: V.isLandscape };
    CUR = ctx;
    ctx.reg = newRegistry();
    var svg = sv("svg", { class: "fv-svg", viewBox: "0 0 " + f2(W) + " " + f2(H), preserveAspectRatio: "xMidYMid slice", width: V.width, height: V.height }, root);
    ctx.svg = svg;
    ctx.defs = sv("defs", null, svg);
    ctx.cam = new Camera();
    ctx.bg = sv("g", { class: "fv-bg" }, svg);
    function layer(depth, name) {
      var g = sv("g", { class: "fv-" + name }, svg);
      ctx.cam._layers.push({ g: g, depth: depth, last: "" });
      return g;
    }
    ctx.layer = layer;
    ctx.far = layer(0.25, "far");
    ctx.mid = layer(0.6, "mid");
    ctx.world = layer(1, "world");
    ctx.front = layer(1.15, "front");
    ctx.fx = layer(1.05, "fx");
    ctx.ui = V.el("div.fv-ui", { parent: root });
    ctx.world_ = opts.world || "space";
    root.classList.add("fv-w-" + ctx.world_);
    onT(function (t) { ctx.cam.apply(t); });
    drawWorld(ctx, ctx.world_, opts);
    // safe area (design units)
    var mx = W * (V.isPortrait ? 0.08 : 0.07), myT = H * (V.isPortrait ? 0.07 : 0.085), myB = H * (V.isPortrait ? 0.15 : 0.085);
    ctx.safe = { x: mx, y: myT, w: W - 2 * mx, h: H - myT - myB, r: W - mx, b: H - myB };
    return ctx;
  };
  S.ctx = function () { return CUR; };

  // ───────────────────────── worlds ─────────────────────────
  var WORLD_TONE = { space: "dark", sky: "light", dusk: "dark", micro: "dark", body: "dark", ocean: "dark", studio: "dark", night: "dark", meadow: "light", none: "dark" };
  function rect(parent, fill, extra) {
    var m = Math.max(W, H);
    return sv("rect", { x: -m, y: -m, width: W + 2 * m, height: H + 2 * m, fill: fill }, parent);
  }
  function cloudD(w) {
    var h = w * 0.36;
    return "M" + f2(-w / 2) + " " + f2(h / 2) + " Q" + f2(-w / 2) + " " + f2(h * 0.02) + " " + f2(-w * 0.3) + " " + f2(h * 0.05) +
      " Q" + f2(-w * 0.26) + " " + f2(-h * 0.62) + " " + f2(-w * 0.04) + " " + f2(-h * 0.42) +
      " Q" + f2(w * 0.12) + " " + f2(-h * 0.98) + " " + f2(w * 0.3) + " " + f2(-h * 0.3) +
      " Q" + f2(w / 2) + " " + f2(-h * 0.28) + " " + f2(w / 2) + " " + f2(h / 2) + " Z";
  }
  S.cloudD = cloudD;
  function hillPts(y0, amp, seed, n, w0, w1) {
    var pts = [];
    for (var i = 0; i <= n; i++) {
      var x = lerp(w0, w1, i / n);
      pts.push([x, y0 - amp * (0.55 + 0.45 * Math.sin(i * 1.3 + seed) * Math.cos(i * 0.7 + seed * 2))]);
    }
    return pts;
  }
  function hill(parent, y0, amp, seed, c, opts) {
    opts = opts || {};
    var ext = Math.max(W, H) * 0.6;
    var pts = hillPts(y0, amp, seed, opts.n || 6, -ext, W + ext);
    var d = smoothOpen(pts) + " L" + f2(W + ext) + " " + f2(H + ext) + " L" + f2(-ext) + " " + f2(H + ext) + " Z";
    var g = sv("g", null, parent);
    sv("path", { d: d, fill: vgrad([tint(c, 0.12), c, shade(c, 0.18)], "hill" + c) }, g);
    if (opts.rim !== false) sv("path", { d: smoothOpen(pts), fill: "none", stroke: tint(c, 0.45), "stroke-width": 6, opacity: 0.6, transform: "translate(0 5)" }, g);
    g.pts = pts;
    return g;
  }
  function hillY(pts, x) {
    for (var i = 0; i < pts.length - 1; i++) if (x >= pts[i][0] && x <= pts[i + 1][0]) {
      var p = (x - pts[i][0]) / (pts[i + 1][0] - pts[i][0]);
      return lerp(pts[i][1], pts[i + 1][1], (1 - Math.cos(p * PI)) / 2);
    }
    return pts[0][1];
  }
  function drawWorld(ctx, name, opts) {
    var M = Math.max(W, H);
    var rnd = V.makeRand(V.seed * 3 + name.length);
    var horizon = opts.horizon != null ? opts.horizon : H * (V.isPortrait ? 0.74 : 0.76);
    ctx.horizon = horizon;
    ctx.tone = WORLD_TONE[name] || "dark";
    if (name === "none") return;
    if (name === "space" || name === "night") {
      rect(ctx.bg, vgrad(name === "night" ? ["#0D1240", "#232C78", "#4C3E9E", "#7B4FA8"] : ["#0F0A2C", "#1E1452", "#33196E", "#4A1E78"], name));
      var neb = [[P.pink, 0.26, 0.82, 0.18], [P.teal, 0.2, 0.12, 0.7], [P.violet, 0.34, 0.45, 0.42]];
      neb.forEach(function (n, i) {
        var c = sv("circle", { r: M * 0.48, fill: glow(n[0], n[1]) }, ctx.far);
        onT(function (t) { c.setAttribute("cx", f2(W * n[2] + Math.sin(t * 0.11 + i * 2) * 60)); c.setAttribute("cy", f2(H * n[3] + Math.cos(t * 0.09 + i) * 40)); });
      });
      particles(ctx, { kind: "stars", count: name === "night" ? 34 : 64, parent: ctx.far, speed: 4, size: 2.6, spread: 4, area: { x: -W * 0.3, y: -H * 0.3, w: W * 1.6, h: H * (name === "night" ? 0.9 : 1.6) }, colors: ["#FFFFFF", "#FFF2C4", "#BDF3FF", "#FFC6E6"] });
      if (name === "night") {
        var moon = sv("g", { transform: "translate(" + f2(W * 0.8) + " " + f2(H * 0.18) + ")" }, ctx.far);
        sv("circle", { r: 190, fill: glow("#FFF3C9", 0.35) }, moon);
        orb(moon, 62, "#FFF0C2");
        sv("circle", { cx: 18, cy: 14, r: 10, fill: shade("#FFF0C2", 0.12) }, moon);
        sv("circle", { cx: -20, cy: -8, r: 6, fill: shade("#FFF0C2", 0.12) }, moon);
        skyline(ctx.mid, horizon + 40, "#2A2470", rnd, 0.9, true);
        skyline(ctx.mid, horizon + 120, "#1B1650", rnd, 1.25, true);
      }
      particles(ctx, { kind: "dust", count: 18, parent: ctx.fx, speed: 10, size: 2.4, colors: ["#FFFFFF", "#CFF8FF"], opacity: 0.6 });
    } else if (name === "sky" || name === "meadow") {
      rect(ctx.bg, vgrad(["#2E9BF0", "#6CC6FF", "#B5E6FF", "#FFF0CF"], "sky"));
      var sunXY = opts.sunLow ? [W * (V.isPortrait ? 0.62 : 0.58), horizon - 150] : [W * (V.isPortrait ? 0.74 : 0.82), H * 0.2];
      var sun = sv("g", { transform: "translate(" + f2(sunXY[0]) + " " + f2(sunXY[1]) + ")" }, ctx.far);
      sv("circle", { r: 300, fill: glow("#FFF3B0", 0.55) }, sun);
      var rays = sv("g", null, sun);
      for (var i = 0; i < 12; i++) sv("path", { d: "M0 -110 L18 -175 L-18 -175Z", fill: "#FFF4C2", opacity: 0.45, transform: "rotate(" + i * 30 + ")" }, rays);
      orb(sun, 84, P.sun);
      onT(function (t) { rays.setAttribute("transform", "rotate(" + f2(t * 6) + ")"); });
      for (var c = 0; c < 4; c++) (function (c) {
        var w = 220 + rnd() * 160, y = H * (0.08 + rnd() * 0.32), x0 = rnd() * W, sp = 10 + rnd() * 14;
        var cg = sv("g", null, ctx.far);
        sv("path", { d: cloudD(w), fill: "#9ED7F7", opacity: 0.55, transform: "translate(10 14)" }, cg);
        sv("path", { d: cloudD(w), fill: "#FFFFFF" }, cg);
        sv("path", { d: cloudD(w * 0.7), fill: "#EAF7FF", transform: "translate(" + f2(w * 0.08) + " " + f2(w * 0.08) + ")" }, cg);
        onT(function (t) {
          var span = W + w * 2 + 400;
          var x = ((x0 + t * sp) % span + span) % span - w - 200;
          cg.setAttribute("transform", "translate(" + f2(x) + " " + f2(y) + ")");
        });
      })(c);
      var h1 = hill(ctx.far, horizon - 70, 120, 1.3, "#8FD9B0", { n: 5 });
      var h2 = hill(ctx.mid, horizon + 10, 90, 4.1, "#4CC383", { n: 6 });
      ctx.ground = hill(ctx.mid, horizon + 120, 50, 2.2, "#2FA866", { n: 7 });
      ctx.groundY = function (x) { return hillY(ctx.ground.pts, x); };
      // trees dotted on the far hills
      for (var k = 0; k < 7; k++) {
        var tx = (k + 0.3 + rnd() * 0.4) * (W / 7);
        var ty = hillY(h2.pts, tx);
        var ta = illus("tree", { parent: ctx.mid, seed: k, color: k % 2 ? "#2E9E5B" : "#41B86C" });
        ta.at(tx, ty - 6).size(0.42 + rnd() * 0.25).float(0, 3 + rnd() * 2, 2.5);
      }
      void h1;
      particles(ctx, { kind: "dust", count: 14, parent: ctx.fx, speed: 12, size: 3, colors: ["#FFFFFF", "#FFF4C8"], opacity: 0.7 });
    } else if (name === "dusk") {
      rect(ctx.bg, vgrad(["#24186A", "#5E2D8F", "#C24E8E", "#FF8A6B", "#FFC27A"], "dusk"));
      var ds = sv("g", { transform: "translate(" + f2(W * 0.5) + " " + f2(horizon - 40) + ")" }, ctx.far);
      sv("circle", { r: 420, fill: glow("#FFD38A", 0.5) }, ds);
      sv("circle", { r: 150, fill: vgrad(["#FFE9A8", "#FFB36B", "#FF7A6B"], "dsun") }, ds);
      particles(ctx, { kind: "stars", count: 26, parent: ctx.far, speed: 2, size: 2.2, spread: 3, area: { x: 0, y: 0, w: W, h: H * 0.35 }, colors: ["#FFFFFF", "#FFE0F0"] });
      var m1 = hill(ctx.far, horizon - 40, 220, 0.4, "#7A3E9C", { n: 5, rim: false });
      var m2 = hill(ctx.mid, horizon + 40, 150, 2.9, "#4B2A86", { n: 6, rim: false });
      ctx.ground = hill(ctx.mid, horizon + 140, 60, 1.1, "#2E1B63", { n: 7, rim: false });
      ctx.groundY = function (x) { return hillY(ctx.ground.pts, x); };
      void m1; void m2;
      particles(ctx, { kind: "dust", count: 16, parent: ctx.fx, speed: 8, size: 2.6, colors: ["#FFE3A3", "#FFC2E0"], opacity: 0.8 });
    } else if (name === "micro" || name === "body") {
      var mic = name === "micro";
      rect(ctx.bg, vgrad(mic ? ["#0B4F68", "#0E7C8C", "#16A69E", "#3CCBA8"] : ["#5E1240", "#9E2452", "#D9445E", "#FF7A7A"], name));
      sv("circle", { cx: W * 0.5, cy: H * 0.45, r: M * 0.55, fill: glow(mic ? "#9CFFE6" : "#FFC2A8", 0.32) }, ctx.far);
      // big soft out-of-focus cells in the distance
      for (var b = 0; b < 7; b++) {
        var bx = rnd() * W, by = rnd() * H, br = 60 + rnd() * 110;
        var cell = sv("g", null, ctx.far);
        if (mic) {
          sv("circle", { r: br, fill: rgba("#B8FFF0", 0.1), stroke: rgba("#C9FFF4", 0.25), "stroke-width": 6 }, cell);
          sv("circle", { cx: br * 0.15, cy: -br * 0.1, r: br * 0.32, fill: rgba("#CFFFF6", 0.16) }, cell);
        } else {
          sv("ellipse", { rx: br, ry: br * 0.8, fill: rgba("#FF5A6E", 0.45) }, cell);
          sv("ellipse", { rx: br * 0.5, ry: br * 0.36, fill: rgba("#B71C45", 0.35) }, cell);
        }
        (function (cell, bx, by, k) {
          onT(function (t) { cell.setAttribute("transform", "translate(" + f2(bx + Math.sin(t * 0.3 + k) * 40) + " " + f2(by + Math.cos(t * 0.25 + k * 2) * 30) + ") rotate(" + f2(t * 6 + k * 40) + ")"); });
        })(cell, bx, by, b);
      }
      particles(ctx, { kind: mic ? "bubbles" : "cells", count: mic ? 22 : 14, parent: ctx.mid, speed: mic ? 22 : 18, dir: mic ? -80 : -10, size: mic ? 8 : 20, colors: mic ? ["#E6FFFB"] : ["#FF5A6E", "#E8344F"] });
      particles(ctx, { kind: "dust", count: 26, parent: ctx.fx, speed: 9, size: 2.4, colors: mic ? ["#E8FFF9", "#B2FFF0"] : ["#FFE0E0", "#FFD3B0"], opacity: 0.7 });
    } else if (name === "ocean") {
      rect(ctx.bg, vgrad(["#1CC6E0", "#0E8CC4", "#14509A", "#141E5A"], "ocean"));
      var rays2 = sv("g", { opacity: 0.5 }, ctx.far);
      for (var r2 = 0; r2 < 6; r2++) {
        var rx = W * (0.05 + r2 * 0.19);
        sv("path", { d: "M" + f2(rx) + " -50 L" + f2(rx + 90) + " -50 L" + f2(rx + 320) + " " + f2(H * 1.1) + " L" + f2(rx + 130) + " " + f2(H * 1.1) + "Z", fill: rgba("#E6FBFF", 0.13) }, rays2);
      }
      onT(function (t) { rays2.setAttribute("transform", "translate(" + f2(Math.sin(t * 0.4) * 40) + " 0)"); rays2.setAttribute("opacity", f2(0.42 + 0.12 * Math.sin(t * 0.9))); });
      ctx.ground = hill(ctx.mid, H * 0.94, 50, 3.3, "#E9C98F", { n: 6 });
      particles(ctx, { kind: "bubbles", count: 24, parent: ctx.mid, speed: 34, size: 8, colors: ["#E6FBFF"] });
      particles(ctx, { kind: "dust", count: 20, parent: ctx.fx, speed: 6, size: 2.2, colors: ["#D8FBFF"], opacity: 0.6 });
    } else {
      // studio: deep indigo with slowly turning concentric rings — for data and big numbers
      rect(ctx.bg, vgrad(["#241A66", "#3A2A92", "#5233A8"], "studio"));
      sv("circle", { cx: W * 0.5, cy: H * 0.5, r: M * 0.62, fill: glow("#8E6CFF", 0.42) }, ctx.far);
      sv("circle", { cx: W * 0.1, cy: H * 0.9, r: M * 0.4, fill: glow(P.pink, 0.22) }, ctx.far);
      sv("circle", { cx: W * 0.92, cy: H * 0.08, r: M * 0.4, fill: glow(P.teal, 0.2) }, ctx.far);
      var rings = sv("g", { transform: "translate(" + f2(W / 2) + " " + f2(H / 2) + ")" }, ctx.far);
      for (var q = 1; q <= 5; q++) sv("circle", { r: q * M * 0.13, fill: "none", stroke: "#FFFFFF", "stroke-opacity": 0.06, "stroke-width": 3, "stroke-dasharray": q % 2 ? "2 26" : "60 30" }, rings);
      onT(function (t) { rings.setAttribute("transform", "translate(" + f2(W / 2) + " " + f2(H / 2) + ") rotate(" + f2(t * 3) + ")"); });
      particles(ctx, { kind: "stars", count: 30, parent: ctx.far, speed: 6, size: 2.4, colors: ["#FFFFFF", "#FFE8A8", "#BFF6FF"] });
      particles(ctx, { kind: "dust", count: 14, parent: ctx.fx, speed: 10, size: 2.4, colors: ["#FFFFFF"], opacity: 0.5 });
    }
  }
  function skyline(parent, baseY, c, rnd, scale, lit) {
    var g = sv("g", null, parent);
    var x = -200, k = 0;
    while (x < W + 200 && k < 40) {
      var bw = (60 + rnd() * 70) * scale, bh = (120 + rnd() * 240) * scale;
      sv("rect", { x: f2(x), y: f2(baseY - bh), width: f2(bw), height: f2(bh + 400), fill: c, rx: 4 }, g);
      if (rnd() < 0.3) sv("rect", { x: f2(x + bw * 0.4), y: f2(baseY - bh - 40 * scale), width: f2(6 * scale), height: f2(40 * scale), fill: c }, g);
      if (lit) for (var wy = baseY - bh + 18 * scale; wy < baseY - 10; wy += 30 * scale) for (var wx = x + 12 * scale; wx < x + bw - 16 * scale; wx += 24 * scale) {
        if (rnd() < 0.32) sv("rect", { x: f2(wx), y: f2(wy), width: f2(10 * scale), height: f2(14 * scale), fill: rnd() < 0.7 ? "#FFD97A" : "#9FE8FF", opacity: 0.9, rx: 2 }, g);
      }
      x += bw + 6 * scale; k++;
    }
    return g;
  }
  S.worlds = Object.keys(WORLD_TONE);
  S.drawWorld = function (ctx, name, opts) { drawWorld(ctx, name, opts || {}); };

  // ───────────────────────── friendly type ─────────────────────────
  function richInto(node, text, emColor) {
    str(text).split(/(\*[^*]+\*)/g).forEach(function (p) {
      if (!p) return;
      if (p.length > 2 && p[0] === "*" && p[p.length - 1] === "*") V.el("span.fv-em", { parent: node, text: p.slice(1, -1), style: emColor ? { color: emColor } : null });
      else node.appendChild(document.createTextNode(p));
    });
  }
  /**
   * Big friendly headline at (x,y) (design units, centre anchor). Words pop in one by one.
   * opts: { at, size (du, default 96), maxWidth (du), maxLines, color, shadow, em (emphasis colour), stagger, align, weight }
   * Returns an Actor (move it with .to()).
   */
  function say(ctx, text, opts) {
    opts = opts || {};
    ctx = ctx || CUR;
    var size = num(opts.size, 96);
    var maxW = num(opts.maxWidth, ctx.safe.w);
    var node = V.el("div.fv-say", { parent: ctx.ui, style: { width: f2(maxW * U) + "px", fontSize: f2(size * U) + "px", textAlign: opts.align || "center" } });
    if (opts.color) node.style.color = opts.color;
    node.style.setProperty("--fv-ts", opts.shadow || (ctx.tone === "light" ? "#1F5FA8" : "#1A1240"));
    richInto(node, text, opts.em);
    V.fit(node, { maxLines: opts.maxLines || 3, min: size * U * 0.4 });
    var words = S.splitWords(node);
    var a = new Actor(node, true).at(num(opts.x, ctx.cx), num(opts.y, ctx.cy));
    var at = ct(num(opts.at, 0.2)), stg = num(opts.stagger, 0.075);
    var times = words.map(function (w, i) { return at + i * stg; });
    if (opts.sync) {
      var after = Math.max(0, at - 0.3);
      times = words.map(function (w, i) {
        var f = V.find(w.textContent, after);
        if (f != null && f < at + 6) { after = f + 0.01; return Math.max(at, f - 0.12); }
        return at + i * stg;
      });
    }
    a.hook(function (t) {
      for (var i = 0; i < words.length; i++) {
        var q = clamp((t - times[i]) / 0.7, 0, 1);
        var w = words[i];
        var s = E.pop(q);
        var key = q <= 0 ? "h" : q >= 1 ? "d" : "";
        if (key && w._k === key) continue;
        w._k = key;
        w.style.opacity = q <= 0 ? 0 : clamp(q * 5, 0, 1);
        w.style.transform = q >= 1 ? "" : "translateY(" + f2((1 - E.outCubic(q)) * 0.35 * size * U) + "px) scale(" + f2(Math.max(0, s)) + ") rotate(" + f2((1 - E.outCubic(q)) * -8) + "deg)";
      }
    });
    a.words = words; a.times = times;
    return a;
  }
  /**
   * Rounded label pill. opts: { x, y, at, color (dot/accent), size (du, 40), maxWidth, tone: "light"|"solid", enter }
   */
  function tag(ctx, text, opts) {
    opts = opts || {};
    ctx = ctx || CUR;
    var size = num(opts.size, 40);
    var c = col(opts.color, P.coral);
    var node = V.el("div.fv-tag" + (opts.tone === "solid" ? ".fv-solid" : ""), { parent: ctx.ui, style: { fontSize: f2(size * U) + "px", maxWidth: f2(num(opts.maxWidth, Math.min(ctx.safe.w, 760)) * U) + "px" } });
    node.style.setProperty("--fv-c", c);
    node.style.setProperty("--fv-cs", shade(c, 0.35));
    if (opts.tone !== "solid") V.el("i.fv-dot", { parent: node });
    var span = V.el("span", { parent: node });
    richInto(span, text);
    V.fit(node, { maxLines: opts.maxLines || 2, min: size * U * 0.5 });
    var a = new Actor(node, true).at(num(opts.x, ctx.cx), num(opts.y, ctx.cy));
    if (opts.at != null) a.enter(opts.at, opts.enter || "pop", 0.8);
    if (opts.float !== false) a.float(5, 3.2 + hash01(uid) * 1.4, 1.2);
    return a;
  }
  /** Big counting number. opts: { value, from, prefix, suffix, decimals, at, dur, size, x, y, color } */
  function bigNumber(ctx, opts) {
    ctx = ctx || CUR;
    var size = num(opts.size, 260);
    var node = V.el("div.fv-num", { parent: ctx.ui, style: { fontSize: f2(size * U) + "px" } });
    if (opts.color) node.style.setProperty("--fv-c", col(opts.color, P.sun));
    var value = num(opts.value, 0), from = num(opts.from, 0), dec = Math.max(0, Math.min(3, num(opts.decimals, Math.abs(value) < 10 && value % 1 ? 1 : 0)));
    var pre = str(opts.prefix), suf = str(opts.suffix);
    node.textContent = pre + V.format(value, dec) + suf;
    node.style.maxWidth = f2(ctx.safe.w * U) + "px";
    V.fit(node, { maxLines: 1, min: size * U * 0.25 });
    var at = ct(num(opts.at, 0.3)), dur = num(opts.dur, Math.min(2.2, Math.max(0.6, D * 0.4)));
    dur = Math.max(0.35, Math.min(dur, D - at - 0.45));
    var a = new Actor(node, true).at(num(opts.x, ctx.cx), num(opts.y, ctx.cy)).enter(at, "pop", 0.9);
    var lastTxt = "";
    a.hook(function (t) {
      var p = E.outExpo(clamp((t - at) / dur, 0, 1));
      var txt = pre + V.format(lerp(from, value, p), dec) + suf;
      if (txt !== lastTxt) { node.textContent = txt; lastTxt = txt; }
    });
    return a;
  }
  S.say = function (ctx, text, opts) { return say(ctx || CUR, text, opts); };
  S.tag = function (ctx, text, opts) { return tag(ctx || CUR, text, opts); };
  S.bigNumber = function (ctx, opts) { return bigNumber(ctx || CUR, opts || {}); };

  /** Curved dotted connector that draws itself between two points. opts: { at, dur, color, bend, width, parent, dash } */
  function connector(ctx, x1, y1, x2, y2, opts) {
    opts = opts || {};
    var bend = num(opts.bend, 0.2);
    var mx = (x1 + x2) / 2 - (y2 - y1) * bend, my = (y1 + y2) / 2 + (x2 - x1) * bend;
    var d = "M" + f2(x1) + " " + f2(y1) + " Q" + f2(mx) + " " + f2(my) + " " + f2(x2) + " " + f2(y2);
    var c = col(opts.color, "#FFFFFF");
    var p = sv("path", { d: d, fill: "none", stroke: c, "stroke-width": num(opts.width, 8), "stroke-linecap": "round", opacity: num(opts.opacity, 0.85) }, opts.parent || ctx.world);
    var len = Math.hypot(x2 - mx, y2 - my) + Math.hypot(mx - x1, my - y1);
    var at = ct(num(opts.at, 0.5)), dur = num(opts.dur, 0.7);
    var dash = opts.dash !== false;
    onT(function (t) {
      var q = E.inOut(clamp((t - at) / dur, 0, 1));
      if (dash) {
        p.setAttribute("stroke-dasharray", "0.1 " + f2(num(opts.width, 8) * 2.4));
        p.setAttribute("stroke-dashoffset", f2(-t * 30));
        p.style.clipPath = "none";
        p.setAttribute("opacity", f2(num(opts.opacity, 0.85) * (q > 0 ? 1 : 0)));
        p.setAttribute("d", "M" + f2(x1) + " " + f2(y1) + " Q" + f2(lerp(x1, mx, q)) + " " + f2(lerp(y1, my, q)) + " " + f2(lerp(lerp(x1, mx, q), lerp(mx, x2, q), q)) + " " + f2(lerp(lerp(y1, my, q), lerp(my, y2, q), q)));
      } else {
        p.setAttribute("stroke-dasharray", f2(len * 1.1));
        p.setAttribute("stroke-dashoffset", f2(len * 1.1 * (1 - q)));
      }
    });
    return { path: p, mid: [mx, my], d: d, point: function (q) { return [lerp(lerp(x1, mx, q), lerp(mx, x2, q), q), lerp(lerp(y1, my, q), lerp(my, y2, q), q)]; } };
  }
  S.connector = function (ctx, x1, y1, x2, y2, opts) { return connector(ctx || CUR, x1, y1, x2, y2, opts); };

  // ───────────────────────── illustration kit ─────────────────────────
  // Every illustration is drawn centred on (0,0) at a nominal 200 du diameter (radius 100).
  function crescentD(r, k, cx, cy) {
    // region of circle (cx,cy,r) not covered by the same circle shifted by (-k,-k)
    cx = cx || 0; cy = cy || 0;
    var dd = k * Math.SQRT2, h = Math.sqrt(Math.max(0, r * r - (dd / 2) * (dd / 2)));
    var mx = cx - k / 2, my = cy - k / 2, ux = 1 / Math.SQRT2, uy = -1 / Math.SQRT2;
    var p1 = [mx + h * ux, my + h * uy], p2 = [mx - h * ux, my - h * uy];
    function span(c, a, b) { var a1 = Math.atan2(a[1] - c[1], a[0] - c[0]), a2 = Math.atan2(b[1] - c[1], b[0] - c[0]); var s = a2 - a1; while (s < 0) s += TAU; return s; }
    var big1 = span([cx, cy], p1, p2) > PI ? 1 : 0;
    var big2 = TAU - span([cx - k, cy - k], p1, p2) > PI ? 1 : 0;
    return "M" + f2(p1[0]) + " " + f2(p1[1]) + " A" + r + " " + r + " 0 " + big1 + " 1 " + f2(p2[0]) + " " + f2(p2[1]) +
      " A" + r + " " + r + " 0 " + big2 + " 0 " + f2(p1[0]) + " " + f2(p1[1]) + "Z";
  }
  function rimArc(g, r, c, w, op) {
    var a0 = 3.5, a1 = 4.5, rr = r * 0.8;
    return sv("path", { d: "M" + f2(Math.cos(a0) * rr) + " " + f2(Math.sin(a0) * rr) + " A" + f2(rr) + " " + f2(rr) + " 0 0 1 " + f2(Math.cos(a1) * rr) + " " + f2(Math.sin(a1) * rr), fill: "none", stroke: c || "#fff", "stroke-width": w || r * 0.07, "stroke-linecap": "round", opacity: op == null ? 0.5 : op }, g);
  }
  /** Flat-shaded sphere: lit gradient disc + crescent core shadow + rim light + specular. opts.inner(g) paints surface detail (clipped). */
  function ball(parent, r, c, opts) {
    opts = opts || {};
    var g = sv("g", null, parent);
    sv("circle", { r: r, fill: grad(c) }, g);
    if (opts.inner) { var ig = sv("g", { "clip-path": clipCircle(r) }, g); opts.inner(ig); }
    sv("path", { d: crescentD(r, r * (opts.k || 0.42)), fill: shade(c, 0.5), opacity: opts.shadeOp == null ? 0.42 : opts.shadeOp }, g);
    if (opts.rim !== false) rimArc(g, r, tint(c, 0.8), r * 0.075, 0.55);
    if (opts.spec !== false) sv("ellipse", { cx: -r * 0.36, cy: -r * 0.5, rx: r * 0.11, ry: r * 0.065, fill: "#fff", opacity: 0.55, transform: "rotate(-38 " + f2(-r * 0.36) + " " + f2(-r * 0.5) + ")" }, g);
    return g;
  }
  S.ball = function (parent, r, c, opts) { return ball(parent, r, col(c, P.violet), opts); };
  function capsuleD(w, h) {
    var r = h / 2;
    return "M" + f2(-w / 2 + r) + " " + f2(-r) + " H" + f2(w / 2 - r) + " A" + r + " " + r + " 0 0 1 " + f2(w / 2 - r) + " " + r + " H" + f2(-w / 2 + r) + " A" + r + " " + r + " 0 0 1 " + f2(-w / 2 + r) + " " + f2(-r) + "Z";
  }
  function heartD(s) {
    var pts = [];
    for (var i = 0; i < 64; i++) {
      var t = (i / 64) * TAU;
      pts.push([16 * Math.pow(Math.sin(t), 3) * s, -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * s - 2 * s]);
    }
    return smoothClosed(pts);
  }
  function starD(r1, r2, n, rot) {
    var s = "";
    for (var i = 0; i < n * 2; i++) {
      var a = (i / (n * 2)) * TAU - PI / 2 + (rot || 0), r = i % 2 ? r2 : r1;
      s += (i ? "L" : "M") + f2(Math.cos(a) * r) + " " + f2(Math.sin(a) * r);
    }
    return s + "Z";
  }
  function blastD(r1, r2, n, seed) {
    var pts = [];
    for (var i = 0; i < n * 2; i++) {
      var a = (i / (n * 2)) * TAU, r = (i % 2 ? r2 : r1) * (0.85 + hash01(i + seed) * 0.3);
      pts.push((i ? "L" : "M") + f2(Math.cos(a) * r) + " " + f2(Math.sin(a) * r));
    }
    return pts.join("") + "Z";
  }
  S.heartD = heartD; S.starD = starD;

  var ILL = {};
  var ALIAS = {
    globe: "earth", world: "earth", "planet-earth": "earth", ringed: "saturn", saturn: "saturn", jupiter: "gasgiant", mars: "mars",
    sunshine: "sun", "the-sun": "sun", spiral: "galaxy", "milky-way": "galaxy", hole: "blackhole", "black-hole": "blackhole",
    germ: "bacteria", microbe: "bacteria", bacterium: "bacteria", covid: "virus", gene: "dna", genes: "dna", helix: "dna",
    water: "drop", droplet: "drop", rain: "drop", fire: "flame", heat: "flame", energy: "bolt", lightning: "bolt", electricity: "bolt", power: "bolt",
    idea: "bulb", lightbulb: "bulb", light: "bulb", time: "clock", watch: "clock", money: "cash", dollar: "coin", bitcoin: "coin", coins: "coin",
    industry: "factory", pollution: "factory", explosion: "blast", boom: "blast", bang: "blast", "big-bang": "blast",
    human: "body", person: "body", anatomy: "body", mind: "brain", love: "heart", organ: "heart", plant: "sprout", seed: "sprout", growth: "sprout",
    forest: "tree", nature: "tree", town: "city", skyline: "city", building: "city", home: "house", space: "rocket", launch: "rocket", ship: "rocket",
    computer: "laptop", tech: "laptop", internet: "laptop", ai: "chip", cpu: "chip", robot: "chip", settings: "gear", machine: "gear", engine: "gear",
    mountains: "mountain", weather: "cloud", ocean: "wave", sea: "wave", waves: "wave", animal: "fish", knowledge: "book", learn: "book", education: "book",
    medicine: "pill", drug: "pill", health: "heart", magnet: "magnet", trophy: "trophy", award: "trophy", win: "trophy", cell: "cell", cells: "cell",
  };
  /** Register a custom illustration: S.defineIllus(name, function (g, o) { draw into g centred at 0,0, radius ~100 }). */
  S.defineIllus = function (name, fn) { ILL[str(name).toLowerCase()] = fn; };

  /**
   * Create an illustration actor. name: see S.illusNames. opts: { parent, x, y, size (du diameter, default 200),
   * color, color2, shadow: "glow"|"long"|"ground"|"none", seed, face, label, ...per-illustration options }
   */
  function illus(name, opts) {
    opts = opts || {};
    var ctx = CUR;
    var key = str(name).toLowerCase().trim().replace(/\s+/g, "-");
    if (!ILL[key] && ALIAS[key]) key = ALIAS[key];
    if (!ILL[key] && /s$/.test(key) && ILL[key.slice(0, -1)]) key = key.slice(0, -1);
    var outer = sv("g", { class: "fv-illus fv-" + key }, opts.parent || (ctx ? ctx.world : null));
    var sh = opts.shadow || (ctx && ctx.tone === "light" ? "ground" : "glow");
    var shadowG = sv("g", null, outer);
    var art = sv("g", null, outer);
    var o = {};
    for (var k in opts) o[k] = opts[k];
    o.seed = num(opts.seed, hash01(uid) * 100);
    var info = {};
    try {
      if (ILL[key]) info = ILL[key](art, o) || {};
      else info = ILL._icon(art, o, key) || {};
    } catch (e) {
      V.error("illus " + key + ": " + (e && e.message));
      art.innerHTML = "";
      info = ILL._icon(art, o, key) || {};
    }
    var r = info.r || 100;
    if (sh === "glow") sv("circle", { r: r * 1.5, fill: glow(info.glow || "#FFFFFF", 0.16) }, shadowG);
    else if (sh === "long") longShadow(shadowG, r * 0.92, r * 4, 0.2);
    else if (sh === "ground") groundShadow(shadowG, r * 0.85, info.ground != null ? info.ground : r * 1.02, 0.2);
    var a = new Actor(outer);
    a.s = num(opts.size, 200) / 200;
    if (opts.x != null || opts.y != null) a.at(num(opts.x, W / 2), num(opts.y, H / 2));
    a.art = art; a.name = key; a.r = 0; a.info = info;
    a.radius = function () { return r * a.s; };
    return a;
  }
  S.illus = function (name, opts) { return illus(name, opts); };

  // generic: colour orb badge with a shared line icon (any unknown name still looks on-style)
  ILL._icon = function (g, o, key) {
    var c = col(o.color, SERIES[Math.floor(hash01(str(key).length * 3.7) * SERIES.length)]);
    ball(g, 100, c);
    var ic = S.icon(key || "sparkles", { size: 110, color: "#FFFFFF", stroke: 2.2 });
    var wrap = sv("g", { transform: "translate(-55 -55)" }, g);
    ic.setAttribute("width", 110); ic.setAttribute("height", 110);
    wrap.appendChild(ic);
    return { r: 100, glow: c };
  };

  ILL.planet = function (g, o) {
    var c = col(o.color, P.violet), c2 = col(o.color2, tint(c, 0.35));
    var rnd = V.makeRand(Math.floor(o.seed * 1000) + 3);
    sv("circle", { r: 130, fill: glow(c2, 0.5) }, g);
    var ring = o.ring != null ? !!o.ring : false;
    var tilt = -16;
    if (ring) {
      var rb = sv("g", { transform: "rotate(" + tilt + ")" }, g);
      sv("ellipse", { rx: 175, ry: 44, fill: "none", stroke: shade(c2, 0.25), "stroke-width": 20 }, rb);
      sv("ellipse", { rx: 150, ry: 36, fill: "none", stroke: shade(c2, 0.1), "stroke-width": 9, opacity: 0.8 }, rb);
    }
    var spots = [];
    ball(g, 100, c, {
      inner: function (ig) {
        for (var i = 0; i < 4; i++) {
          var y = -70 + i * 45 + rnd() * 12;
          sv("path", { d: "M-120 " + f2(y) + " Q0 " + f2(y + 18) + " 120 " + f2(y) + " L120 " + f2(y + 14 + rnd() * 10) + " Q0 " + f2(y + 30) + " -120 " + f2(y + 14) + "Z", fill: i % 2 ? tint(c, 0.28) : shade(c, 0.14), opacity: 0.85 }, ig);
        }
        var sg = sv("g", null, ig);
        for (var j = 0; j < 3; j++) {
          var e = sv("ellipse", { cx: 0, cy: -40 + rnd() * 90, rx: 12 + rnd() * 16, ry: 7 + rnd() * 6, fill: j ? shade(c, 0.22) : tint(c2, 0.4), opacity: 0.85 }, sg);
          spots.push({ e: e, x: rnd() * 280, sp: 14 + rnd() * 10 });
        }
      },
    });
    if (ring) {
      var rf = sv("g", { transform: "rotate(" + tilt + ")" }, g);
      sv("path", { d: "M175 0 A175 44 0 0 1 -175 0", fill: "none", stroke: tint(c2, 0.15), "stroke-width": 20, "stroke-linecap": "butt" }, rf);
      sv("path", { d: "M150 0 A150 36 0 0 1 -150 0", fill: "none", stroke: tint(c2, 0.45), "stroke-width": 9 }, rf);
    }
    onT(function (t) {
      for (var i = 0; i < spots.length; i++) { var s = spots[i]; var x = ((s.x + t * s.sp) % 280) - 140; s.e.setAttribute("cx", f2(x)); s.e.setAttribute("rx", f2(Math.max(2, (1 - Math.abs(x) / 140) * 26))); }
    });
    return { r: ring ? 120 : 100, glow: c };
  };
  ILL.saturn = function (g, o) { o.ring = true; o.color = o.color || "#F7B955"; o.color2 = o.color2 || "#FFE3A3"; return ILL.planet(g, o); };
  ILL.gasgiant = function (g, o) { o.color = o.color || "#F08A5D"; o.color2 = o.color2 || "#FFD0A8"; return ILL.planet(g, o); };
  ILL.mars = function (g, o) { o.color = o.color || "#F06A4A"; o.color2 = o.color2 || "#FFB08A"; return ILL.planet(g, o); };

  function continents(g, c, w) {
    var shapes = [
      [[-150, -40], [-110, -70], [-70, -55], [-60, -10], [-90, 20], [-80, 60], [-110, 70], [-130, 30], [-160, 0]],
      [[-20, -80], [30, -90], [60, -60], [40, -30], [55, 10], [30, 50], [0, 30], [-10, -10], [-30, -40]],
      [[90, 10], [130, 0], [150, 40], [120, 70], [95, 55]],
      [[-40, 70], [-10, 60], [10, 85], [-25, 95]],
    ];
    shapes.forEach(function (s) {
      sv("path", { d: smoothClosed(s.map(function (p) { return [p[0] + w, p[1]]; })), fill: c }, g);
      sv("path", { d: smoothClosed(s.map(function (p) { return [p[0] * 0.8 + w - 4, p[1] * 0.75 - 6]; })), fill: tint(c, 0.25), opacity: 0.8 }, g);
    });
  }
  ILL.earth = function (g, o) {
    var sea = col(o.color, "#2F86F6"), land = col(o.color2, "#3FCB7C");
    sv("circle", { r: 132, fill: glow("#8FE3FF", 0.6) }, g);
    var slide, clouds;
    ball(g, 100, sea, {
      inner: function (ig) {
        slide = sv("g", null, ig);
        continents(slide, land, 0); continents(slide, land, 340);
        clouds = sv("g", { opacity: 0.85 }, ig);
        [[-120, -60, 70], [40, 20, 90], [-60, 50, 60], [220, -30, 80], [300, 60, 60]].forEach(function (c) {
          [0, 360].forEach(function (off) {
            sv("ellipse", { cx: c[0] + off + c[2] * 0.3, cy: c[1] + 6, rx: c[2] * 0.3, ry: 9, fill: "#fff" }, clouds);
            sv("ellipse", { cx: c[0] + off + c[2] * 0.55, cy: c[1], rx: c[2] * 0.22, ry: 12, fill: "#fff" }, clouds);
            sv("ellipse", { cx: c[0] + off + c[2] * 0.78, cy: c[1] + 7, rx: c[2] * 0.2, ry: 8, fill: "#fff" }, clouds);
          });
        });
      }, k: 0.38,
    });
    var sp = num(o.spin, 18);
    onT(function (t) {
      slide.setAttribute("transform", "translate(" + f2(-((t * sp) % 340)) + " 0)");
      clouds.setAttribute("transform", "translate(" + f2(-((t * sp * 1.5) % 360)) + " 0)");
    });
    return { r: 100, glow: "#7FD8FF" };
  };
  ILL.moon = function (g, o) {
    var c = col(o.color, "#D4CFF0");
    ball(g, 100, c, {
      inner: function (ig) {
        [[-30, -30, 22], [35, 10, 16], [-10, 45, 13], [50, -45, 10], [-58, 20, 9]].forEach(function (k) {
          sv("circle", { cx: k[0], cy: k[1], r: k[2], fill: shade(c, 0.18) }, ig);
          sv("circle", { cx: k[0] - k[2] * 0.15, cy: k[1] - k[2] * 0.2, r: k[2] * 0.8, fill: shade(c, 0.1) }, ig);
        });
      },
    });
    return { r: 100, glow: c };
  };
  ILL.sun = function (g, o) {
    var c = col(o.color, P.sun);
    sv("circle", { r: 250, fill: glow("#FFB938", 0.42) }, g);
    var corona = sv("circle", { r: 150, fill: glow("#FFE27A", 0.75) }, g);
    var rays = sv("g", null, g);
    for (var i = 0; i < 12; i++) {
      var rg = sv("g", { transform: "rotate(" + i * 30 + ")" }, rays);
      sv("path", { d: "M-20 -104 Q-12 -150 0 " + (i % 2 ? -168 : -186) + " Q12 -150 20 -104Z", fill: i % 2 ? "#FFB12E" : "#FFD23F" }, rg);
    }
    var flick = sv("g", null, g);
    for (i = 0; i < 6; i++) sv("path", { d: sparkleD(14), fill: "#FFF6C9", transform: "rotate(" + (i * 60 + 15) + ") translate(0 -205)" }, flick);
    ball(g, 104, c, { k: 0.34, shadeOp: 0.3 });
    sv("circle", { r: 104, fill: "none", stroke: "#FFF3B8", "stroke-width": 7, opacity: 0.7 }, g);
    var face = null;
    if (o.face) face = cuteFace(g, 0, 8, 1.1, "#7A3B12");
    onT(function (t) {
      rays.setAttribute("transform", "rotate(" + f2(t * 10) + ") scale(" + f2(1 + 0.05 * Math.sin(t * 3)) + ")");
      corona.setAttribute("r", f2(150 + 10 * Math.sin(t * 2.2)));
      flick.setAttribute("transform", "rotate(" + f2(-t * 6) + ")");
      [].forEach.call(flick.childNodes, function (n, i) { n.setAttribute("opacity", f2(Math.max(0, Math.sin(t * 2.5 + i * 1.3)))); });
      if (face) face.blink(t);
    });
    return { r: 115, glow: "#FFE07A" };
  };
  /** Simple cute face (dot eyes, smile, blush) for objects; returns { blink(t) }. */
  function cuteFace(g, x, y, s, ink) {
    var f = sv("g", { transform: "translate(" + x + " " + y + ") scale(" + s + ")" }, g);
    var eyes = [];
    [-26, 26].forEach(function (ex) {
      var e = sv("g", { transform: "translate(" + ex + " -8)" }, f);
      sv("ellipse", { rx: 8, ry: 11, fill: ink || P.ink }, e);
      sv("circle", { cx: -2.5, cy: -4, r: 3, fill: "#fff" }, e);
      eyes.push(e);
    });
    sv("path", { d: "M-12 12 Q0 24 12 12", fill: "none", stroke: ink || P.ink, "stroke-width": 5, "stroke-linecap": "round" }, f);
    sv("ellipse", { cx: -42, cy: 10, rx: 11, ry: 7, fill: "#FF6F91", opacity: 0.45 }, f);
    sv("ellipse", { cx: 42, cy: 10, rx: 11, ry: 7, fill: "#FF6F91", opacity: 0.45 }, f);
    var seed = uid;
    return {
      g: f,
      blink: function (t) {
        var b = blinkAmt(t, seed);
        eyes.forEach(function (e, i) { e.setAttribute("transform", "translate(" + (i ? 26 : -26) + " -8) scale(1 " + f2(Math.max(0.1, 1 - b)) + ")"); });
      },
    };
  }
  function blinkAmt(t, seed) {
    var per = 3.1 + hash01(seed) * 1.6;
    var ph = (t + hash01(seed * 7) * per) % per;
    var b = ph < 0.16 ? Math.sin((ph / 0.16) * PI) : 0;
    // occasional double blink
    var ph2 = (t + 1.3 + hash01(seed * 3) * 9) % 9.5;
    if (ph2 < 0.14) b = Math.max(b, Math.sin((ph2 / 0.14) * PI));
    return b;
  }
  S.cuteFace = cuteFace;
  ILL.star = function (g, o) {
    var c = col(o.color, P.sun);
    sv("circle", { r: 150, fill: glow(c, 0.55) }, g);
    var sp = sv("g", null, g);
    sv("path", { d: sparkleD(110), fill: shade(c, 0.2), transform: "translate(6 8)" }, sp);
    sv("path", { d: sparkleD(110), fill: grad(c) }, sp);
    sv("path", { d: sparkleD(48), fill: "#FFFDF0", opacity: 0.85 }, sp);
    onT(function (t) { sp.setAttribute("transform", "rotate(" + f2(Math.sin(t * 0.8) * 10) + ") scale(" + f2(1 + 0.08 * Math.sin(t * 2.4)) + ")"); });
    return { r: 90, glow: c };
  };
  ILL.galaxy = function (g, o) {
    var c1 = col(o.color, P.pink), c2 = col(o.color2, P.aqua);
    var rnd = V.makeRand(Math.floor(o.seed * 100) + 17);
    sv("ellipse", { rx: 210, ry: 120, fill: glow(c1, 0.32), transform: "rotate(-18)" }, g);
    var tilt = sv("g", { transform: "rotate(-18) scale(1 0.56)" }, g);
    var spin = sv("g", null, tilt);
    for (var ag = 0; ag < 2; ag++) {
      var ap = [];
      for (var k = 0; k <= 30; k++) { var qa = k / 30, aa = ag * PI + qa * 3.4, ra = 14 + qa * 190; ap.push([Math.cos(aa) * ra, Math.sin(aa) * ra]); }
      sv("path", { d: smoothOpen(ap), fill: "none", stroke: mix(c1, c2, 0.4), "stroke-width": 46, "stroke-linecap": "round", opacity: 0.22 }, spin);
      sv("path", { d: smoothOpen(ap), fill: "none", stroke: tint(c1, 0.5), "stroke-width": 16, "stroke-linecap": "round", opacity: 0.25 }, spin);
    }
    for (var arm = 0; arm < 2; arm++) {
      for (var i = 0; i < 70; i++) {
        var q = i / 70;
        var a = arm * PI + q * 3.4 + (rnd() - 0.5) * 0.35;
        var r = 14 + q * 190 + (rnd() - 0.5) * 22;
        var cc = rnd() < 0.15 ? "#FFFFFF" : mix(c1, c2, clamp(q + (rnd() - 0.5) * 0.4, 0, 1));
        sv("circle", { cx: f2(Math.cos(a) * r), cy: f2(Math.sin(a) * r), r: f2((1 - q) * 7 + 3 + rnd() * 3), fill: cc, opacity: f2(0.55 + rnd() * 0.45) }, spin);
      }
    }
    sv("circle", { r: 70, fill: glow("#FFF3D0", 0.95) }, g);
    sv("circle", { r: 22, fill: "#FFF8E8" }, g);
    onT(function (t) { spin.setAttribute("transform", "rotate(" + f2(t * num(o.spin, 9)) + ")"); });
    return { r: 150, glow: c1 };
  };
  ILL.blackhole = function (g, o) {
    var c = col(o.color, P.orange);
    sv("circle", { r: 200, fill: glow(c, 0.35) }, g);
    var back = sv("g", { transform: "rotate(-12)" }, g);
    sv("path", { d: "M-190 0 A190 46 0 0 1 190 0", fill: "none", stroke: c, "stroke-width": 26, opacity: 0.85 }, back);
    sv("path", { d: "M-150 0 A150 34 0 0 1 150 0", fill: "none", stroke: "#FFE08A", "stroke-width": 10 }, back);
    sv("circle", { r: 84, fill: "none", stroke: "#FFD27A", "stroke-width": 10, opacity: 0.9 }, g);
    sv("circle", { r: 78, fill: "#0A0620" }, g);
    var front = sv("g", { transform: "rotate(-12)" }, g);
    sv("path", { d: "M190 0 A190 46 0 0 1 -190 0", fill: "none", stroke: tint(c, 0.15), "stroke-width": 26 }, front);
    sv("path", { d: "M150 0 A150 34 0 0 1 -150 0", fill: "none", stroke: "#FFF0B8", "stroke-width": 10 }, front);
    var sw = sv("g", null, g);
    for (var i = 0; i < 10; i++) sv("circle", { r: 4, fill: "#FFF3C2", cx: 0, cy: 0 }, sw);
    onT(function (t) {
      [].forEach.call(sw.childNodes, function (d, i) {
        var a = t * 2.2 + i * 0.63;
        d.setAttribute("cx", f2(Math.cos(a) * (130 + (i % 3) * 25)));
        d.setAttribute("cy", f2(Math.sin(a) * (34 + (i % 3) * 6) * (Math.sin(a) > 0 ? 1 : 1)));
        d.setAttribute("opacity", Math.sin(a) > 0 ? "1" : "0.3");
      });
      sw.setAttribute("transform", "rotate(-12)");
    });
    return { r: 120, glow: c };
  };

  // micro world
  ILL.cell = function (g, o) {
    var c = col(o.color, "#FF8DB8"), cn = col(o.color2, P.violet);
    var seed = o.seed;
    var mem = sv("path", { fill: rgba(c, 0.45), stroke: tint(c, 0.25), "stroke-width": 9 }, g);
    var cyto = sv("path", { fill: grad(tint(c, 0.15)) }, g);
    var inner = sv("g", null, g);
    // organelles
    [[-50, 40, 0.8, 30], [48, 46, -0.4, -20], [40, -55, 0.3, 60]].forEach(function (m, i) {
      var mg = sv("g", { transform: "translate(" + m[0] + " " + m[1] + ") rotate(" + m[3] + ")" }, inner);
      sv("path", { d: capsuleD(48, 24), fill: P.orange }, mg);
      sv("path", { d: "M-16 0 Q-10 -8 -4 0 T8 0 T18 0", fill: "none", stroke: "#FFE2B8", "stroke-width": 3.5, "stroke-linecap": "round" }, mg);
      void i;
    });
    sv("path", { d: "M-70 -20 Q-60 -40 -40 -36 Q-30 -60 -10 -62", fill: "none", stroke: tint(c, 0.55), "stroke-width": 6, "stroke-linecap": "round", opacity: 0.8 }, inner);
    for (var i = 0; i < 6; i++) sv("circle", { cx: f2(Math.cos(i * 1.7 + seed) * 64), cy: f2(Math.sin(i * 1.7 + seed) * 58), r: 5 + (i % 3) * 2, fill: i % 2 ? P.mint : P.sun, opacity: 0.9 }, inner);
    var nuc = sv("g", { transform: "translate(-6 -6)" }, inner);
    ball(nuc, 36, cn, { k: 0.4 });
    sv("circle", { cx: 8, cy: 6, r: 11, fill: shade(cn, 0.35) }, nuc);
    onT(function (t) {
      var pts = blobPts(100, 12, seed, 0.06, t, 0.9);
      mem.setAttribute("d", smoothClosed(pts));
      cyto.setAttribute("d", smoothClosed(pts.map(function (p) { return [p[0] * 0.9 - 3, p[1] * 0.9 - 4]; })));
      inner.setAttribute("transform", "rotate(" + f2(Math.sin(t * 0.4 + seed) * 8) + ")");
    });
    return { r: 104, glow: c };
  };
  ILL.bacteria = function (g, o) {
    var c = col(o.color, "#7BD65A");
    var fl = [];
    for (var i = 0; i < 3; i++) fl.push(sv("path", { fill: "none", stroke: shade(c, 0.25), "stroke-width": 6, "stroke-linecap": "round" }, g));
    sv("path", { d: capsuleD(220, 104), fill: shade(c, 0.3) }, g);
    sv("path", { d: capsuleD(206, 88), fill: grad(c), transform: "translate(-3 -5)" }, g);
    sv("path", { d: capsuleD(150, 14), fill: tint(c, 0.5), opacity: 0.6, transform: "translate(-10 -30)" }, g);
    for (i = 0; i < 7; i++) sv("ellipse", { cx: -70 + i * 22, cy: f2(Math.sin(i * 2.1) * 18 + 6), rx: 7, ry: 5, fill: shade(c, 0.25), opacity: 0.6 }, g);
    var face = o.face ? cuteFace(g, 40, 0, 0.8) : null;
    onT(function (t) {
      for (var i = 0; i < fl.length; i++) {
        var pts = [];
        for (var k = 0; k <= 8; k++) { var x = -105 - k * 13; pts.push([x, (i - 1) * 22 + Math.sin(k * 0.9 - t * 9 + i) * (k * 2.2)]); }
        fl[i].setAttribute("d", smoothOpen(pts));
      }
      if (face) face.blink(t);
    });
    return { r: 110, glow: c };
  };
  ILL.virus = function (g, o) {
    var c = col(o.color, "#FF5E7E");
    var sp = sv("g", null, g);
    for (var i = 0; i < 14; i++) {
      var a = (i / 14) * 360;
      var s = sv("g", { transform: "rotate(" + a + ")" }, sp);
      sv("rect", { x: -5, y: -132, width: 10, height: 44, rx: 5, fill: shade(c, 0.25) }, s);
      sv("circle", { cy: -134, r: 13, fill: i % 2 ? P.sun : tint(c, 0.3) }, s);
    }
    ball(g, 96, c, {
      inner: function (ig) {
        for (var k = 0; k < 9; k++) sv("circle", { cx: f2(Math.cos(k * 2.4) * 55), cy: f2(Math.sin(k * 2.4) * 55), r: 10, fill: shade(c, 0.2), opacity: 0.7 }, ig);
      },
    });
    var face = o.face ? cuteFace(g, 0, 6, 1, P.ink) : null;
    onT(function (t) { sp.setAttribute("transform", "rotate(" + f2(t * 14) + ")"); if (face) face.blink(t); });
    return { r: 130, glow: c };
  };
  ILL.dna = function (g, o) {
    var c1 = col(o.color, P.pink), c2 = col(o.color2, P.aqua);
    var rcol = [P.sun, P.mint, P.orange, P.lilac];
    var rungs = [];
    for (var i = 0; i < 13; i++) rungs.push(sv("line", { "stroke-width": 9, "stroke-linecap": "round", stroke: rcol[i % 4] }, g));
    var s1 = sv("path", { fill: "none", stroke: c1, "stroke-width": 16, "stroke-linecap": "round" }, g);
    var s2 = sv("path", { fill: "none", stroke: c2, "stroke-width": 16, "stroke-linecap": "round" }, g);
    var h1 = sv("path", { fill: "none", stroke: "#fff", "stroke-width": 4, "stroke-linecap": "round", opacity: 0.45 }, g);
    onT(function (t) {
      var a = [], b = [];
      for (var k = 0; k <= 24; k++) {
        var y = -150 + k * 12.5, ph = y * 0.028 + t * 1.6;
        a.push([Math.sin(ph) * 58, y]); b.push([-Math.sin(ph) * 58, y]);
      }
      s1.setAttribute("d", smoothOpen(a)); s2.setAttribute("d", smoothOpen(b));
      h1.setAttribute("d", smoothOpen(a.map(function (p) { return [p[0] - 3, p[1]]; })));
      for (var i = 0; i < rungs.length; i++) {
        var y2 = -138 + i * 23, ph2 = y2 * 0.028 + t * 1.6, x = Math.sin(ph2) * 52;
        rungs[i].setAttribute("x1", f2(x)); rungs[i].setAttribute("x2", f2(-x));
        rungs[i].setAttribute("y1", f2(y2)); rungs[i].setAttribute("y2", f2(y2));
        rungs[i].setAttribute("opacity", f2(0.55 + 0.45 * Math.abs(Math.cos(ph2))));
      }
    });
    return { r: 110, glow: c1 };
  };
  ILL.molecule = function (g, o) {
    var c = col(o.color, P.coral), c2 = col(o.color2, P.sky);
    var n = clamp(Math.round(num(o.atoms, 4)), 2, 6);
    var spin = sv("g", null, g);
    var pos = [];
    for (var i = 0; i < n; i++) { var a = (i / n) * TAU - PI / 2; pos.push([Math.cos(a) * 92, Math.sin(a) * 92]); }
    pos.forEach(function (p) {
      sv("line", { x1: 0, y1: 0, x2: p[0], y2: p[1], stroke: "#EDE8FF", "stroke-width": 18, "stroke-linecap": "round" }, spin);
      sv("line", { x1: 0, y1: 0, x2: p[0], y2: p[1], stroke: "#B9B1E8", "stroke-width": 7, "stroke-linecap": "round", transform: "translate(2 3)" }, spin);
    });
    var outer = [];
    pos.forEach(function (p, i) { var bg = sv("g", { transform: "translate(" + f2(p[0]) + " " + f2(p[1]) + ")" }, spin); ball(bg, 34, i % 2 ? c2 : "#F3F0FF"); outer.push(bg); });
    ball(spin, 56, c);
    onT(function (t) {
      spin.setAttribute("transform", "rotate(" + f2(Math.sin(t * 0.6) * 25 + t * 8) + ")");
      for (var i = 0; i < outer.length; i++) outer[i].setAttribute("transform", "translate(" + f2(pos[i][0] * (1 + 0.04 * Math.sin(t * 5 + i))) + " " + f2(pos[i][1] * (1 + 0.04 * Math.sin(t * 5 + i))) + ") rotate(" + f2(-(Math.sin(t * 0.6) * 25 + t * 8)) + ")");
    });
    return { r: 120, glow: c };
  };
  ILL.atom = function (g, o) {
    var c = col(o.color, P.aqua);
    sv("circle", { r: 150, fill: glow(c, 0.3) }, g);
    var orbits = [], els = [];
    for (var i = 0; i < 3; i++) {
      var og = sv("g", { transform: "rotate(" + i * 60 + ")" }, g);
      sv("ellipse", { rx: 150, ry: 50, fill: "none", stroke: c, "stroke-width": 7, opacity: 0.75 }, og);
      var e = sv("g", null, og);
      sv("circle", { r: 26, fill: glow(c, 0.7) }, e);
      sv("circle", { r: 12, fill: "#FFFFFF" }, e);
      orbits.push(og); els.push(e);
    }
    var nuc = sv("g", null, g);
    [[0, 0, P.coral], [-20, -12, P.sky], [18, -14, P.coral], [-14, 18, P.coral], [16, 16, P.sky], [0, -26, P.sky], [2, 24, P.sky]].forEach(function (k) {
      var b = sv("g", { transform: "translate(" + k[0] + " " + k[1] + ")" }, nuc); ball(b, 19, k[2], { rim: false });
    });
    onT(function (t) {
      for (var i = 0; i < 3; i++) { var a = t * (2.2 + i * 0.4) + i * 2; els[i].setAttribute("transform", "translate(" + f2(Math.cos(a) * 150) + " " + f2(Math.sin(a) * 50) + ")"); }
      nuc.setAttribute("transform", "scale(" + f2(1 + 0.04 * Math.sin(t * 6)) + ")");
    });
    return { r: 130, glow: c };
  };
  ILL.neuron = function (g, o) {
    var c = col(o.color, P.violet), sig = col(o.color2, P.sun);
    var dend = sv("g", null, g);
    for (var i = 0; i < 6; i++) {
      var a = PI * 0.55 + (i / 5) * PI * 0.9 + 0.1;
      var x1 = Math.cos(a) * 60, y1 = Math.sin(a) * 60, x2 = Math.cos(a) * 130, y2 = Math.sin(a) * 130;
      sv("path", { d: "M0 0 Q" + f2(x1 * 1.2) + " " + f2(y1 * 0.9) + " " + f2(x2) + " " + f2(y2), fill: "none", stroke: c, "stroke-width": 16, "stroke-linecap": "round" }, dend);
      sv("path", { d: "M" + f2(x2) + " " + f2(y2) + " l" + f2(Math.cos(a + 0.6) * 34) + " " + f2(Math.sin(a + 0.6) * 34) + " M" + f2(x2) + " " + f2(y2) + " l" + f2(Math.cos(a - 0.6) * 34) + " " + f2(Math.sin(a - 0.6) * 34), fill: "none", stroke: c, "stroke-width": 9, "stroke-linecap": "round" }, dend);
    }
    var ax = "M40 0 Q130 -30 240 10";
    sv("path", { d: ax, fill: "none", stroke: c, "stroke-width": 14, "stroke-linecap": "round" }, g);
    for (i = 0; i < 4; i++) {
      var q = 0.2 + i * 0.2, px = lerp(lerp(40, 130, q), lerp(130, 240, q), q), py = lerp(lerp(0, -30, q), lerp(-30, 10, q), q);
      sv("rect", { x: -18, y: -13, width: 36, height: 26, rx: 13, fill: tint(c, 0.45), transform: "translate(" + f2(px) + " " + f2(py) + ") rotate(" + f2(lerp(-15, 18, q)) + ")" }, g);
    }
    [[240, 10, -0.5], [240, 10, 0.4], [240, 10, 1.1]].forEach(function (k) {
      sv("path", { d: "M" + k[0] + " " + k[1] + " l" + f2(Math.cos(k[2]) * 44) + " " + f2(Math.sin(k[2]) * 44), stroke: c, "stroke-width": 9, "stroke-linecap": "round" }, g);
      sv("circle", { cx: f2(k[0] + Math.cos(k[2]) * 48), cy: f2(k[1] + Math.sin(k[2]) * 48), r: 10, fill: tint(c, 0.3) }, g);
    });
    ball(g, 62, c);
    sv("circle", { cx: -4, cy: -2, r: 20, fill: shade(c, 0.3) }, g);
    var pulse = sv("g", null, g);
    sv("circle", { r: 30, fill: glow(sig, 0.9) }, pulse);
    sv("circle", { r: 9, fill: "#FFFDF0" }, pulse);
    onT(function (t) {
      var q = (t * 0.7) % 1;
      var px = lerp(lerp(40, 130, q), lerp(130, 240, q), q), py = lerp(lerp(0, -30, q), lerp(-30, 10, q), q);
      pulse.setAttribute("transform", "translate(" + f2(px) + " " + f2(py) + ")");
      pulse.setAttribute("opacity", f2(Math.sin(q * PI)));
    });
    return { r: 120, glow: c };
  };

  // body & life
  ILL.body = function (g, o) {
    var c = col(o.color, "#8FB6FF");
    var hl = str(o.highlight).toLowerCase();
    var sk = sv("g", { transform: "translate(0 10) scale(0.92)" }, g);
    var bodyD = "M-40 -112 Q-92 -110 -100 -60 L-122 40 Q-126 58 -108 60 Q-96 60 -92 44 L-76 -20 L-70 40 L-70 196 Q-70 214 -50 214 Q-32 214 -30 196 L-18 90 L18 90 L30 196 Q32 214 50 214 Q70 214 70 196 L70 40 L76 -20 L92 44 Q96 60 108 60 Q126 58 122 40 L100 -60 Q92 -110 40 -112 Z";
    sv("path", { d: bodyD, fill: shade(c, 0.25), transform: "translate(6 8)", opacity: 0.6 }, sk);
    sv("path", { d: bodyD, fill: grad(c) }, sk);
    sv("circle", { cx: 6, cy: -160, r: 50, fill: shade(c, 0.25), opacity: 0.6 }, sk);
    sv("circle", { cy: -166, r: 50, fill: grad(c) }, sk);
    rimArc(sv("g", { transform: "translate(0 -166)" }, sk), 50, "#fff", 5, 0.5);
    var organs = {};
    // brain
    var br = sv("g", { transform: "translate(0 -176)" }, sk);
    sv("path", { d: smoothClosed(blobPts(30, 10, 2, 0.08).map(function (p) { return [p[0] * 1.2, p[1] * 0.85]; })), fill: "#FF8FB8" }, br);
    sv("path", { d: "M-20 -6 q6 -8 12 0 t12 0 t12 0 M-18 8 q6 -8 12 0 t12 0 t10 0", fill: "none", stroke: "#E0558A", "stroke-width": 3, "stroke-linecap": "round" }, br);
    organs.brain = br;
    var lu = sv("g", { transform: "translate(0 -40)" }, sk);
    sv("path", { d: "M-8 -40 Q-50 -46 -54 10 Q-56 44 -24 40 Q-8 38 -8 10Z", fill: "#FFA7B9" }, lu);
    sv("path", { d: "M8 -40 Q50 -46 54 10 Q56 44 24 40 Q8 38 8 10Z", fill: "#FFA7B9" }, lu);
    organs.lungs = lu;
    var ht = sv("g", { transform: "translate(14 -36) scale(0.85)" }, sk);
    sv("path", { d: heartD(1.7), fill: P.red }, ht);
    sv("path", { d: heartD(0.9), fill: "#FF8A8F", transform: "translate(-6 -6)", opacity: 0.7 }, ht);
    organs.heart = ht;
    var st = sv("g", { transform: "translate(-10 34)" }, sk);
    sv("path", { d: "M-30 -10 Q-34 -34 -6 -30 Q30 -26 30 4 Q28 30 0 28 Q-20 26 -30 -10Z", fill: P.orange }, st);
    organs.stomach = st;
    var gut = sv("g", { transform: "translate(0 76)" }, sk);
    sv("path", { d: "M-34 -8 q10 -14 20 0 t20 0 t20 0 M-30 10 q10 -14 20 0 t20 0 t20 0", fill: "none", stroke: "#F7B26A", "stroke-width": 9, "stroke-linecap": "round" }, gut);
    organs.gut = gut; organs.intestines = gut;
    var key = organs[hl] ? hl : null;
    var halo = null;
    if (key) {
      var host = organs[key];
      halo = sv("circle", { r: 70, fill: glow(P.sun, 0.8) }, host);
      host.insertBefore(halo, host.firstChild);
      Object.keys(organs).forEach(function (k) { if (organs[k] !== host) organs[k].setAttribute("opacity", "0.55"); });
    }
    onT(function (t) {
      var beat = Math.pow(Math.max(0, Math.sin(t * 7)), 6);
      ht.setAttribute("transform", "translate(14 -36) scale(" + f2(0.85 + beat * 0.12) + ")");
      lu.setAttribute("transform", "translate(0 -40) scale(" + f2(1 + 0.04 * Math.sin(t * 1.8)) + ")");
      if (halo) halo.setAttribute("r", f2(62 + 12 * Math.sin(t * 4)));
    });
    return { r: 110, ground: 210, glow: c };
  };
  ILL.brain = function (g, o) {
    var c = col(o.color, "#FF8FB8");
    var pts = []; for (var i = 0; i < 28; i++) { var a = (i / 28) * TAU; var r = 100 * (1 + 0.05 * Math.sin(a * 9)); pts.push([Math.cos(a) * r * 1.18, Math.sin(a) * r * 0.9 - (Math.sin(a) > 0 ? 0 : 6)]); }
    var d = smoothClosed(pts);
    sv("path", { d: d, fill: shade(c, 0.3) }, g);
    sv("path", { d: d, fill: grad(c), transform: "translate(-5 -7) scale(0.95)" }, g);
    sv("path", { d: "M0 -84 Q-10 -40 4 0 Q-8 40 2 84", fill: "none", stroke: shade(c, 0.32), "stroke-width": 7, "stroke-linecap": "round" }, g);
    var folds = "M-90 -20 q16 -26 34 -8 t30 -6 M-80 30 q20 -18 40 0 t26 4 M-60 -60 q20 10 30 -10 M30 -60 q14 18 36 2 M20 -10 q20 -20 40 0 t30 -2 M24 40 q20 -16 40 4 t24 -2 M-40 66 q16 -10 28 4 M20 74 q16 -12 30 2";
    sv("path", { d: folds, fill: "none", stroke: shade(c, 0.25), "stroke-width": 6, "stroke-linecap": "round" }, g);
    sv("path", { d: folds, fill: "none", stroke: tint(c, 0.5), "stroke-width": 3, "stroke-linecap": "round", transform: "translate(-2 -4)", opacity: 0.7 }, g);
    var sparks = sv("g", null, g);
    for (i = 0; i < 4; i++) sv("path", { d: sparkleD(16), fill: P.sun, transform: "translate(" + [-70, 60, -20, 90][i] + " " + [-80, -76, 92, 30][i] + ")" }, sparks);
    onT(function (t) { [].forEach.call(sparks.childNodes, function (s, i) { s.setAttribute("opacity", f2(Math.max(0, Math.sin(t * 3 + i * 1.7)))); }); });
    return { r: 110, glow: c };
  };
  ILL.heart = function (g, o) {
    var c = col(o.color, P.red);
    var hg = sv("g", null, g);
    sv("path", { d: heartD(6.4), fill: shade(c, 0.3) }, hg);
    sv("path", { d: heartD(6), fill: grad(c), transform: "translate(-4 -6)" }, hg);
    sv("path", { d: "M-62 -58 Q-80 -40 -76 -14", fill: "none", stroke: "#FFFFFF", "stroke-width": 12, "stroke-linecap": "round", opacity: 0.55 }, hg);
    onT(function (t) { var b = Math.pow(Math.max(0, Math.sin(t * 6)), 8); hg.setAttribute("transform", "scale(" + f2(1 + b * 0.1) + ")"); });
    return { r: 100, glow: c };
  };
  ILL.tree = function (g, o) {
    var c = col(o.color, "#3DBA6A");
    var sway = sv("g", null, g);
    sv("path", { d: "M-14 100 Q-10 40 -6 0 L6 0 Q10 40 14 100Z", fill: "#8A5232" }, g);
    sv("path", { d: "M2 30 Q20 10 34 0", fill: "none", stroke: "#8A5232", "stroke-width": 8, "stroke-linecap": "round" }, g);
    [[0, -40, 62], [-40, -6, 46], [42, -10, 48], [0, -86, 44]].forEach(function (k, i) {
      sv("circle", { cx: k[0] + 4, cy: k[1] + 6, r: k[2], fill: shade(c, 0.25) }, sway);
    });
    [[0, -40, 62], [-40, -6, 46], [42, -10, 48], [0, -86, 44]].forEach(function (k, i) {
      sv("circle", { cx: k[0] - 3, cy: k[1] - 4, r: k[2] * 0.92, fill: i % 2 ? c : tint(c, 0.1) }, sway);
    });
    [[-14, -98, 14], [-52, -18, 10], [-20, -60, 10]].forEach(function (k) { sv("circle", { cx: k[0], cy: k[1], r: k[2], fill: tint(c, 0.45), opacity: 0.8 }, sway); });
    if (o.fruit) [[-30, -30], [26, -54], [30, 2], [-8, -6]].forEach(function (k) { sv("circle", { cx: k[0], cy: k[1], r: 9, fill: P.coral }, sway); });
    var sd = o.seed;
    onT(function (t) { sway.setAttribute("transform", "rotate(" + f2(Math.sin(t * 1.3 + sd) * 2.5) + " 0 90)"); });
    return { r: 80, ground: 100, glow: c };
  };
  ILL.sprout = function (g, o) {
    var c = col(o.color, "#5CCB5F");
    sv("path", { d: "M-70 60 L70 60 L54 130 L-54 130Z", fill: "#E07A4F" }, g);
    sv("rect", { x: -80, y: 46, width: 160, height: 26, rx: 8, fill: "#F09468" }, g);
    sv("ellipse", { cx: 0, cy: 50, rx: 66, ry: 8, fill: "#6B3B26" }, g);
    var st = sv("g", null, g);
    sv("path", { d: "M0 50 Q-6 0 4 -60", fill: "none", stroke: shade(c, 0.2), "stroke-width": 9, "stroke-linecap": "round" }, st);
    var l1 = sv("path", { d: "M4 -30 Q40 -80 96 -60 Q60 -10 4 -30Z", fill: c }, st);
    var l2 = sv("path", { d: "M2 -2 Q-36 -50 -92 -30 Q-56 18 2 -2Z", fill: tint(c, 0.15) }, st);
    sv("path", { d: "M8 -32 Q50 -56 84 -58", fill: "none", stroke: tint(c, 0.5), "stroke-width": 4, "stroke-linecap": "round" }, st);
    var tip = sv("g", { transform: "translate(4 -66)" }, st);
    sv("path", { d: "M0 0 Q14 -26 0 -46 Q-14 -26 0 0Z", fill: tint(c, 0.25) }, tip);
    onT(function (t) {
      st.setAttribute("transform", "rotate(" + f2(Math.sin(t * 1.4) * 3) + " 0 50)");
      l1.setAttribute("transform", "rotate(" + f2(Math.sin(t * 2 + 1) * 4) + " 4 -30)");
      l2.setAttribute("transform", "rotate(" + f2(Math.sin(t * 2) * -4) + " 2 -2)");
    });
    return { r: 100, ground: 132, glow: c };
  };
  ILL.flower = function (g, o) {
    var c = col(o.color, P.pink);
    sv("path", { d: "M0 40 Q-8 90 0 130", fill: "none", stroke: "#3FAF5E", "stroke-width": 10, "stroke-linecap": "round" }, g);
    sv("path", { d: "M-2 96 Q-50 70 -60 92 Q-34 112 -2 100Z", fill: "#4CC36A" }, g);
    var head = sv("g", null, g);
    for (var i = 0; i < 7; i++) sv("ellipse", { cx: 0, cy: -52, rx: 30, ry: 50, fill: i % 2 ? c : tint(c, 0.2), transform: "rotate(" + (i * 360) / 7 + ")" }, head);
    var ctr = sv("g", null, head); ball(ctr, 36, P.sun);
    onT(function (t) { head.setAttribute("transform", "rotate(" + f2(Math.sin(t * 1.2) * 8) + ")"); });
    return { r: 100, ground: 132, glow: c };
  };
  ILL.fish = function (g, o) {
    var c = col(o.color, P.orange);
    var body = sv("g", null, g);
    var tail = sv("path", { d: "M70 0 L140 -50 Q126 0 140 50Z", fill: shade(c, 0.1) }, body);
    sv("ellipse", { rx: 100, ry: 64, fill: grad(c) }, body);
    sv("path", { d: "M-10 -60 Q20 -100 50 -54Z", fill: shade(c, 0.1) }, body);
    sv("path", { d: "M10 -58 Q-10 0 10 58 M40 -50 Q22 0 40 50", fill: "none", stroke: tint(c, 0.4), "stroke-width": 8, "stroke-linecap": "round", opacity: 0.7 }, body);
    var eye = sv("g", { transform: "translate(-52 -14)" }, body);
    sv("circle", { r: 16, fill: "#fff" }, eye); sv("circle", { cx: -3, r: 9, fill: P.ink }, eye); sv("circle", { cx: -6, cy: -4, r: 3, fill: "#fff" }, eye);
    sv("path", { d: "M-96 14 Q-84 22 -76 14", fill: "none", stroke: P.ink, "stroke-width": 4, "stroke-linecap": "round" }, body);
    onT(function (t) { tail.setAttribute("transform", "rotate(" + f2(Math.sin(t * 8) * 14) + " 70 0)"); body.setAttribute("transform", "rotate(" + f2(Math.sin(t * 2) * 4) + ")"); });
    return { r: 100, glow: c };
  };

  // human world
  ILL.city = function (g, o) {
    var rnd = V.makeRand(Math.floor(o.seed * 10) + 9);
    var cols = [col(o.color, P.violet), P.sky, P.coral, P.teal, P.lilac, P.orange];
    var x = -200, i = 0;
    var spec = [[60, 200], [52, 150], [70, 260], [48, 120], [64, 220], [54, 170], [58, 140]];
    sv("rect", { x: -214, y: 92, width: 428, height: 18, rx: 9, fill: "#5A4FB0", opacity: 0.5 }, g);
    spec.forEach(function (s) {
      var c = cols[i % cols.length], h = s[1] * 0.8, w = s[0];
      var b = sv("g", { transform: "translate(" + x + " " + (100 - h) + ")" }, g);
      sv("rect", { width: w, height: h, rx: 6, fill: grad(c) }, b);
      sv("rect", { x: w * 0.62, width: w * 0.38, height: h, rx: 6, fill: shade(c, 0.3), opacity: 0.45 }, b);
      sv("rect", { x: 4, y: 3, width: w - 8, height: 6, rx: 3, fill: tint(c, 0.5), opacity: 0.8 }, b);
      for (var wy = 18; wy < h - 14; wy += 22) for (var wx = 8; wx < w - 12; wx += 16) sv("rect", { x: wx, y: wy, width: 8, height: 12, rx: 2, fill: rnd() < 0.45 ? "#FFE58A" : tint(c, 0.6), opacity: 0.95 }, b);
      if (i === 2) { sv("rect", { x: w / 2 - 3, y: -40, width: 6, height: 40, fill: shade(c, 0.2) }, b); sv("circle", { cx: w / 2, cy: -42, r: 6, fill: P.red }, b); }
      x += w + 4; i++;
    });
    return { r: 110, ground: 100, glow: "#9F8CFF" };
  };
  ILL.house = function (g, o) {
    var c = col(o.color, "#FFB86B");
    var smoke = sv("g", null, g);
    sv("rect", { x: 40, y: -110, width: 30, height: 60, fill: "#B0554A" }, g);
    sv("path", { d: "M-100 -20 L0 -110 L100 -20 L100 100 L-100 100Z", fill: grad(c) }, g);
    sv("path", { d: "M0 -110 L100 -20 L100 100 L0 100Z", fill: shade(c, 0.2), opacity: 0.25 }, g);
    sv("path", { d: "M-120 -14 L0 -124 L120 -14", fill: "none", stroke: P.coral, "stroke-width": 24, "stroke-linecap": "round", "stroke-linejoin": "round" }, g);
    sv("rect", { x: -22, y: 30, width: 44, height: 70, rx: 22, fill: "#7A4A3A" }, g);
    sv("rect", { x: -78, y: 0, width: 40, height: 40, rx: 6, fill: "#BDEBFF", stroke: "#fff", "stroke-width": 5 }, g);
    sv("rect", { x: 38, y: 0, width: 40, height: 40, rx: 6, fill: "#FFE58A", stroke: "#fff", "stroke-width": 5 }, g);
    var puffs = [];
    for (var i = 0; i < 4; i++) puffs.push(sv("circle", { r: 12, fill: "#F2F0FF" }, smoke));
    onT(function (t) { puffs.forEach(function (p, i) { var q = (t * 0.45 + i / 4) % 1; p.setAttribute("cx", f2(55 + Math.sin(q * 6 + i) * 10 + q * 30)); p.setAttribute("cy", f2(-118 - q * 120)); p.setAttribute("r", f2(10 + q * 22)); p.setAttribute("opacity", f2((1 - q) * 0.9)); }); });
    return { r: 105, ground: 100, glow: c };
  };
  ILL.rocket = function (g, o) {
    var c = col(o.color, P.coral);
    var fl = sv("g", null, g);
    var f1 = sv("path", { fill: "#FFB347" }, fl), f2p = sv("path", { fill: "#FFF0A0" }, fl);
    sv("path", { d: "M-40 40 L-78 96 L-78 120 L-34 96Z", fill: shade(c, 0.1) }, g);
    sv("path", { d: "M40 40 L78 96 L78 120 L34 96Z", fill: shade(c, 0.25) }, g);
    var bodyD = "M0 -150 Q58 -100 50 30 L42 96 L-42 96 L-50 30 Q-58 -100 0 -150Z";
    sv("path", { d: bodyD, fill: grad("#F4F1FF") }, g);
    sv("path", { d: "M0 -150 Q58 -100 50 30 L42 96 L8 96 Q34 0 0 -150Z", fill: "#C9C2EE", opacity: 0.7 }, g);
    sv("path", { d: "M0 -150 Q34 -126 44 -84 L-44 -84 Q-34 -126 0 -150Z", fill: c }, g);
    sv("rect", { x: -6, y: 60, width: 12, height: 50, rx: 6, fill: shade(c, 0.1) }, g);
    sv("circle", { cy: -24, r: 30, fill: "#fff" }, g);
    sv("circle", { cy: -24, r: 22, fill: grad(P.sky) }, g);
    sv("path", { d: "M-12 -36 Q-4 -42 6 -38", fill: "none", stroke: "#fff", "stroke-width": 5, "stroke-linecap": "round" }, g);
    sv("path", { d: "M-24 -110 Q-30 -40 -24 40", fill: "none", stroke: "#fff", "stroke-width": 8, "stroke-linecap": "round", opacity: 0.8 }, g);
    var on = o.flame !== false;
    onT(function (t) {
      if (!on) { fl.style.display = "none"; return; }
      var k = 1 + 0.18 * Math.sin(t * 31) + 0.1 * Math.sin(t * 17);
      f1.setAttribute("d", "M-32 96 Q-30 " + f2(150 * k) + " 0 " + f2(200 * k) + " Q30 " + f2(150 * k) + " 32 96Z");
      f2p.setAttribute("d", "M-16 96 Q-14 " + f2(130 * k) + " 0 " + f2(160 * k) + " Q14 " + f2(130 * k) + " 16 96Z");
    });
    return { r: 110, glow: "#FFC27A" };
  };
  ILL.satellite = function (g, o) {
    var c = col(o.color, P.gold);
    var rot = sv("g", null, g);
    [-1, 1].forEach(function (s) {
      var p = sv("g", { transform: "translate(" + s * 110 + " 0)" }, rot);
      sv("rect", { x: -70, y: -34, width: 140, height: 68, rx: 6, fill: grad("#3B6CFF") }, p);
      for (var i = 1; i < 4; i++) sv("line", { x1: -70 + i * 35, y1: -34, x2: -70 + i * 35, y2: 34, stroke: "#9DB8FF", "stroke-width": 3 }, p);
      sv("line", { x1: -70, y1: 0, x2: 70, y2: 0, stroke: "#9DB8FF", "stroke-width": 3 }, p);
      sv("rect", { x: s > 0 ? -82 : 70, y: -5, width: 12, height: 10, fill: "#C9C2EE" }, p);
    });
    sv("rect", { x: -40, y: -46, width: 80, height: 92, rx: 12, fill: grad(c) }, rot);
    sv("rect", { x: 8, y: -46, width: 32, height: 92, rx: 10, fill: shade(c, 0.3), opacity: 0.45 }, rot);
    sv("path", { d: "M-30 -46 L0 -96 L30 -46", fill: "none", stroke: "#E8E4FF", "stroke-width": 6 }, rot);
    sv("ellipse", { cx: 0, cy: -100, rx: 34, ry: 12, fill: "#F4F1FF" }, rot);
    var bl = sv("circle", { cx: 0, cy: -112, r: 7, fill: P.red }, rot);
    onT(function (t) { rot.setAttribute("transform", "rotate(" + f2(Math.sin(t * 0.5) * 12) + ")"); bl.setAttribute("opacity", (t * 1.5) % 1 < 0.5 ? "1" : "0.25"); });
    return { r: 120, glow: "#9DB8FF" };
  };
  ILL.coin = function (g, o) {
    var c = col(o.color, P.gold);
    var flip = sv("g", null, g);
    sv("circle", { r: 100, fill: shade(c, 0.3) }, flip);
    sv("circle", { r: 92, cx: -4, cy: -6, fill: grad(c) }, flip);
    sv("circle", { r: 70, cx: -4, cy: -6, fill: "none", stroke: shade(c, 0.2), "stroke-width": 8 }, flip);
    sv("text", { x: -4, y: 30, "text-anchor": "middle", "font-size": 104, "font-weight": 900, fill: shade(c, 0.28), "font-family": "Inter, 'Noto Sans', sans-serif" }, flip).textContent = str(o.symbol || "$").slice(0, 2);
    rimArc(flip, 92, "#FFF6C9", 8, 0.7);
    onT(function (t) { flip.setAttribute("transform", "scale(" + f2(0.25 + 0.75 * Math.abs(Math.cos(t * 1.4))) + " 1)"); });
    return { r: 100, glow: c };
  };
  ILL.cash = function (g, o) {
    var c = col(o.color, "#4CC37A");
    for (var i = 2; i >= 0; i--) {
      var b = sv("g", { transform: "translate(" + (i * 10 - 10) + " " + (i * 18 - 30) + ") rotate(" + (i * 5 - 6) + ")" }, g);
      sv("rect", { x: -120, y: -60, width: 240, height: 120, rx: 14, fill: shade(c, 0.2) }, b);
      sv("rect", { x: -114, y: -56, width: 228, height: 110, rx: 10, fill: grad(c) }, b);
      sv("rect", { x: -98, y: -42, width: 196, height: 82, rx: 30, fill: "none", stroke: tint(c, 0.45), "stroke-width": 5 }, b);
      sv("circle", { r: 30, fill: tint(c, 0.35) }, b);
      sv("text", { y: 18, "text-anchor": "middle", "font-size": 50, "font-weight": 900, fill: shade(c, 0.35), "font-family": "Inter, sans-serif" }, b).textContent = str(o.symbol || "$").slice(0, 2);
    }
    var cg = sv("g", { transform: "translate(90 70)" }, g); ball(cg, 40, P.gold);
    return { r: 120, glow: c };
  };
  ILL.factory = function (g, o) {
    var c = col(o.color, "#8E7CFF");
    var puffs = [];
    var smoke = sv("g", null, g);
    [[-64, -150], [-10, -120]].forEach(function (k, i) {
      sv("rect", { x: k[0], y: k[1], width: 34, height: 150, fill: i ? "#B0A8E0" : "#C7C1EE" }, g);
      sv("rect", { x: k[0], y: k[1] + 20, width: 34, height: 12, fill: P.coral }, g);
      for (var j = 0; j < 4; j++) puffs.push({ e: sv("circle", { fill: "#EDEAFF" }, smoke), x: k[0] + 17, y: k[1], ph: j / 4 + i * 0.13 });
    });
    sv("path", { d: "M-120 100 L-120 -10 L-70 -50 L-70 -10 L-20 -50 L-20 -10 L30 -50 L30 -10 L80 -50 L80 -10 L120 -10 L120 100Z", fill: grad(c) }, g);
    sv("path", { d: "M-70 -50 L-70 -10 L-120 -10Z M-20 -50 L-20 -10 L-70 -10Z M30 -50 L30 -10 L-20 -10Z M80 -50 L80 -10 L30 -10Z", fill: tint(c, 0.3) }, g);
    for (var w = 0; w < 4; w++) sv("rect", { x: -100 + w * 52, y: 20, width: 34, height: 30, rx: 5, fill: "#FFE58A" }, g);
    sv("rect", { x: -18, y: 64, width: 36, height: 36, rx: 4, fill: shade(c, 0.35) }, g);
    var gear = sv("path", { d: gearD(22, 8), fill: "#FFFFFF", opacity: 0.85, transform: "translate(84 50)" }, g);
    onT(function (t) {
      puffs.forEach(function (p) { var q = (t * 0.35 + p.ph) % 1; p.e.setAttribute("cx", f2(p.x + q * 60 + Math.sin(q * 7) * 8)); p.e.setAttribute("cy", f2(p.y - 10 - q * 150)); p.e.setAttribute("r", f2(10 + q * 34)); p.e.setAttribute("opacity", f2((1 - q) * 0.85)); });
      gear.setAttribute("transform", "translate(84 50) rotate(" + f2(t * 60) + ")");
    });
    return { r: 120, ground: 100, glow: c };
  };
  function gearD(r, teeth) {
    var pts = [];
    for (var i = 0; i < teeth * 4; i++) { var a = (i / (teeth * 4)) * TAU; var rr = i % 4 < 2 ? r : r * 0.78; pts.push((i ? "L" : "M") + f2(Math.cos(a) * rr) + " " + f2(Math.sin(a) * rr)); }
    return pts.join("") + "Z M" + f2(r * 0.32) + " 0 A" + f2(r * 0.32) + " " + f2(r * 0.32) + " 0 1 0 " + f2(-r * 0.32) + " 0 A" + f2(r * 0.32) + " " + f2(r * 0.32) + " 0 1 0 " + f2(r * 0.32) + " 0Z";
  }
  ILL.gear = function (g, o) {
    var c = col(o.color, P.sky);
    var a = sv("g", null, g);
    sv("path", { d: gearD(100, 10), fill: shade(c, 0.3), "fill-rule": "evenodd", transform: "translate(5 7)" }, a);
    sv("path", { d: gearD(100, 10), fill: grad(c), "fill-rule": "evenodd" }, a);
    var b = sv("g", { transform: "translate(92 70)" }, g);
    var bi = sv("g", null, b);
    sv("path", { d: gearD(48, 8), fill: grad(P.orange), "fill-rule": "evenodd" }, bi);
    onT(function (t) { a.setAttribute("transform", "rotate(" + f2(t * 24) + ")"); bi.setAttribute("transform", "rotate(" + f2(-t * 48 + 11) + ")"); });
    return { r: 110, glow: c };
  };
  ILL.clock = function (g, o) {
    var c = col(o.color, P.coral);
    [-1, 1].forEach(function (s) { var b = sv("g", { transform: "translate(" + s * 62 + " -88) rotate(" + s * 30 + ")" }, g); ball(b, 26, P.sun, { rim: false }); });
    sv("circle", { r: 104, fill: shade(c, 0.3) }, g);
    sv("circle", { r: 98, cx: -3, cy: -4, fill: grad(c) }, g);
    sv("circle", { r: 78, fill: "#FFF8EC" }, g);
    for (var i = 0; i < 12; i++) sv("rect", { x: -3, y: -72, width: 6, height: i % 3 ? 10 : 18, rx: 3, fill: i % 3 ? "#C9C2EE" : P.ink, transform: "rotate(" + i * 30 + ")" }, g);
    var hh = sv("rect", { x: -6, y: -42, width: 12, height: 50, rx: 6, fill: P.ink }, g);
    var mh = sv("rect", { x: -4, y: -62, width: 8, height: 70, rx: 4, fill: P.violet }, g);
    sv("circle", { r: 9, fill: P.coral }, g);
    rimArc(g, 98, "#fff", 8, 0.5);
    var sp = num(o.speed, 1);
    onT(function (t) { mh.setAttribute("transform", "rotate(" + f2(t * 120 * sp) + ")"); hh.setAttribute("transform", "rotate(" + f2(t * 10 * sp + 120) + ")"); });
    return { r: 106, glow: c };
  };
  ILL.blast = function (g, o) {
    var c = col(o.color, P.orange);
    var l1 = sv("path", { d: blastD(150, 96, 11, 1), fill: P.red }, g);
    var l2 = sv("path", { d: blastD(118, 74, 10, 5), fill: c }, g);
    var l3 = sv("path", { d: blastD(80, 50, 9, 9), fill: P.sun }, g);
    sv("circle", { r: 40, fill: "#FFF8D6" }, g);
    var sparks = sv("g", null, g);
    for (var i = 0; i < 8; i++) sv("path", { d: sparkleD(18), fill: i % 2 ? P.sun : "#fff" }, sparks);
    onT(function (t) {
      l1.setAttribute("transform", "rotate(" + f2(t * 12) + ") scale(" + f2(1 + 0.06 * Math.sin(t * 9)) + ")");
      l2.setAttribute("transform", "rotate(" + f2(-t * 16) + ") scale(" + f2(1 + 0.07 * Math.sin(t * 11 + 1)) + ")");
      l3.setAttribute("transform", "rotate(" + f2(t * 20) + ") scale(" + f2(1 + 0.08 * Math.sin(t * 13 + 2)) + ")");
      [].forEach.call(sparks.childNodes, function (s, i) { var q = (t * 0.8 + i / 8) % 1, a = i * 0.785 + 0.3; s.setAttribute("transform", "translate(" + f2(Math.cos(a) * (120 + q * 90)) + " " + f2(Math.sin(a) * (120 + q * 90)) + ") scale(" + f2(1 - q) + ")"); });
    });
    return { r: 130, glow: c };
  };
  ILL.bolt = function (g, o) {
    var c = col(o.color, P.sun);
    sv("circle", { r: 150, fill: glow(c, 0.5) }, g);
    var d = "M20 -130 L-70 20 L-6 20 L-30 130 L72 -30 L8 -30 L40 -130Z";
    sv("path", { d: d, fill: shade(c, 0.35), transform: "translate(8 10)" }, g);
    var b = sv("path", { d: d, fill: grad(c) }, g);
    sv("path", { d: "M18 -116 L-52 10", stroke: "#FFFBE0", "stroke-width": 8, "stroke-linecap": "round", opacity: 0.8 }, g);
    onT(function (t) { b.setAttribute("opacity", f2(0.85 + 0.15 * Math.sin(t * 20))); });
    return { r: 110, glow: c };
  };
  ILL.bulb = function (g, o) {
    var c = col(o.color, P.sun);
    var gl = sv("circle", { cy: -30, r: 170, fill: glow(c, 0.55) }, g);
    var rays = sv("g", { transform: "translate(0 -30)" }, g);
    for (var i = 0; i < 9; i++) sv("rect", { x: -6, y: -140, width: 12, height: 32, rx: 6, fill: c, transform: "rotate(" + (-80 + i * 20) + ")" }, rays);
    sv("path", { d: "M-40 50 Q-40 20 -62 -6 A80 80 0 1 1 62 -6 Q40 20 40 50Z", fill: grad(c) }, g);
    sv("path", { d: "M-44 -60 A56 56 0 0 1 0 -88", fill: "none", stroke: "#fff", "stroke-width": 12, "stroke-linecap": "round", opacity: 0.7 }, g);
    sv("path", { d: "M-14 40 L-14 0 L0 -20 L14 0 L14 40", fill: "none", stroke: "#FF9A3C", "stroke-width": 6, "stroke-linejoin": "round" }, g);
    sv("rect", { x: -42, y: 50, width: 84, height: 24, rx: 8, fill: "#B9B1E8" }, g);
    sv("rect", { x: -38, y: 74, width: 76, height: 22, rx: 8, fill: "#8C84C8" }, g);
    sv("rect", { x: -20, y: 96, width: 40, height: 14, rx: 7, fill: "#6B63A8" }, g);
    onT(function (t) { var k = 1 + 0.06 * Math.sin(t * 4); rays.setAttribute("transform", "translate(0 -30) scale(" + f2(k) + ")"); gl.setAttribute("opacity", f2(0.8 + 0.2 * Math.sin(t * 4))); });
    return { r: 105, glow: c };
  };
  ILL.cloud = function (g, o) {
    var c = col(o.color, "#FFFFFF");
    sv("path", { d: cloudD(260), fill: shade(c, 0.22), transform: "translate(8 12)" }, g);
    sv("path", { d: cloudD(260), fill: grad(c) }, g);
    sv("path", { d: cloudD(150), fill: tint(c, 0.6), opacity: 0.6, transform: "translate(-20 -6)" }, g);
    if (o.rain) {
      var rg = sv("g", null, g), drops = [];
      for (var i = 0; i < 6; i++) drops.push(sv("path", { d: "M0 0 Q-8 14 0 20 Q8 14 0 0Z", fill: P.sky }, rg));
      onT(function (t) { drops.forEach(function (d, i) { var q = (t * 1.2 + i * 0.37) % 1; d.setAttribute("transform", "translate(" + (-80 + i * 32) + " " + f2(60 + q * 110) + ")"); d.setAttribute("opacity", f2(1 - q)); }); });
    }
    return { r: 120, glow: "#E6F4FF" };
  };
  ILL.mountain = function (g, o) {
    var c = col(o.color, "#7B68D8");
    sv("path", { d: "M-150 100 L-50 -40 L20 50 L60 0 L160 100Z", fill: shade(c, 0.15) }, g);
    sv("path", { d: "M-120 100 L0 -120 L120 100Z", fill: grad(c) }, g);
    sv("path", { d: "M0 -120 L120 100 L20 100Z", fill: shade(c, 0.3), opacity: 0.5 }, g);
    sv("path", { d: "M0 -120 L-34 -58 L-16 -66 L0 -50 L16 -66 L34 -58Z", fill: "#FFFFFF" }, g);
    return { r: 120, ground: 100, glow: c };
  };
  ILL.drop = function (g, o) {
    var c = col(o.color, P.sky);
    var d = "M0 -120 Q70 -30 72 26 A72 72 0 0 1 -72 26 Q-70 -30 0 -120Z";
    sv("path", { d: d, fill: shade(c, 0.3), transform: "translate(6 8)" }, g);
    sv("path", { d: d, fill: grad(c) }, g);
    sv("path", { d: "M-34 -10 Q-46 20 -36 50", fill: "none", stroke: "#fff", "stroke-width": 12, "stroke-linecap": "round", opacity: 0.7 }, g);
    if (o.face) cuteFace(g, 0, 40, 0.9);
    return { r: 100, glow: c };
  };
  ILL.flame = function (g, o) {
    var c = col(o.color, P.orange);
    sv("circle", { r: 150, fill: glow(c, 0.45) }, g);
    var a = sv("path", { fill: P.red }, g), b = sv("path", { fill: c }, g), cc = sv("path", { fill: P.sun }, g);
    function fd(s, t, ph) {
      var w = Math.sin(t * 7 + ph) * 12 * s;
      return "M0 " + f2(100 * s) + " C" + f2(-90 * s) + " " + f2(100 * s) + " " + f2(-100 * s) + " " + f2(10 * s) + " " + f2(-40 * s) + " " + f2(-50 * s) + " C" + f2(-30 * s + w) + " " + f2(-90 * s) + " " + f2(w) + " " + f2(-120 * s) + " " + f2(w * 1.6) + " " + f2(-150 * s) + " C" + f2(40 * s + w) + " " + f2(-100 * s) + " " + f2(100 * s) + " " + f2(-40 * s) + " " + f2(80 * s) + " " + f2(30 * s) + " C" + f2(70 * s) + " " + f2(90 * s) + " " + f2(40 * s) + " " + f2(100 * s) + " 0 " + f2(100 * s) + "Z";
    }
    onT(function (t) { a.setAttribute("d", fd(1, t, 0)); b.setAttribute("d", fd(0.72, t, 1.5)); cc.setAttribute("d", fd(0.42, t, 3)); b.setAttribute("transform", "translate(0 " + 26 + ")"); cc.setAttribute("transform", "translate(0 52)"); });
    return { r: 100, glow: c };
  };
  ILL.book = function (g, o) {
    var c = col(o.color, P.violet);
    sv("path", { d: "M-150 -70 Q-70 -100 0 -70 Q70 -100 150 -70 L150 90 Q70 64 0 90 Q-70 64 -150 90Z", fill: shade(c, 0.1) }, g);
    sv("path", { d: "M-138 -80 Q-66 -104 0 -76 L0 76 Q-66 52 -138 74Z", fill: "#FFF9EE" }, g);
    sv("path", { d: "M138 -80 Q66 -104 0 -76 L0 76 Q66 52 138 74Z", fill: "#F0EAFF" }, g);
    for (var i = 0; i < 5; i++) {
      sv("path", { d: "M-118 " + (-50 + i * 24) + " Q-66 " + (-66 + i * 24) + " -20 " + (-50 + i * 24), fill: "none", stroke: "#CFC6F0", "stroke-width": 6, "stroke-linecap": "round" }, g);
      sv("path", { d: "M20 " + (-50 + i * 24) + " Q66 " + (-66 + i * 24) + " 118 " + (-50 + i * 24), fill: "none", stroke: "#CFC6F0", "stroke-width": 6, "stroke-linecap": "round" }, g);
    }
    var sp = sv("g", null, g);
    sv("path", { d: sparkleD(20), fill: P.sun, transform: "translate(-60 -120)" }, sp);
    sv("path", { d: sparkleD(14), fill: P.aqua, transform: "translate(70 -126)" }, sp);
    onT(function (t) { sp.setAttribute("opacity", f2(0.5 + 0.5 * Math.sin(t * 3))); });
    return { r: 130, glow: c };
  };
  ILL.laptop = function (g, o) {
    var c = col(o.color, P.violet);
    sv("rect", { x: -130, y: -110, width: 260, height: 170, rx: 14, fill: grad("#3A3470") }, g);
    var sc = sv("rect", { x: -114, y: -96, width: 228, height: 140, rx: 6, fill: vgrad([tint(c, 0.2), shade(c, 0.2)], "lap" + c) }, g);
    void sc;
    var bars = [];
    for (var i = 0; i < 4; i++) bars.push(sv("rect", { x: -80 + i * 44, width: 28, rx: 6, fill: [P.sun, P.mint, P.pink, P.aqua][i] }, g));
    sv("path", { d: "M-160 60 L160 60 L140 90 L-140 90Z", fill: "#C9C2EE" }, g);
    sv("rect", { x: -30, y: 62, width: 60, height: 8, rx: 4, fill: "#A59BD8" }, g);
    onT(function (t) { bars.forEach(function (b, i) { var h = 30 + 40 * (0.5 + 0.5 * Math.sin(t * 2 + i * 1.3)); b.setAttribute("y", f2(30 - h)); b.setAttribute("height", f2(h)); }); });
    return { r: 120, glow: c };
  };
  ILL.chip = function (g, o) {
    var c = col(o.color, P.teal);
    sv("rect", { x: -100, y: -100, width: 200, height: 200, rx: 26, fill: glow(c, 0.5), transform: "scale(1.5)" }, g);
    for (var i = 0; i < 5; i++) ["", "r"].forEach(function () { });
    for (i = 0; i < 5; i++) {
      var p = -64 + i * 32;
      sv("rect", { x: p - 6, y: -126, width: 12, height: 30, rx: 4, fill: "#C9C2EE" }, g); sv("rect", { x: p - 6, y: 96, width: 12, height: 30, rx: 4, fill: "#C9C2EE" }, g);
      sv("rect", { x: -126, y: p - 6, width: 30, height: 12, rx: 4, fill: "#C9C2EE" }, g); sv("rect", { x: 96, y: p - 6, width: 30, height: 12, rx: 4, fill: "#C9C2EE" }, g);
    }
    sv("rect", { x: -100, y: -100, width: 200, height: 200, rx: 22, fill: grad("#3A3470") }, g);
    var core = sv("rect", { x: -56, y: -56, width: 112, height: 112, rx: 14, fill: grad(c) }, g);
    sv("path", { d: "M-30 -20 L0 -40 L30 -20 L30 20 L0 40 L-30 20Z", fill: "none", stroke: "#fff", "stroke-width": 7, "stroke-linejoin": "round", opacity: 0.85 }, g);
    onT(function (t) { core.setAttribute("opacity", f2(0.8 + 0.2 * Math.sin(t * 5))); });
    return { r: 120, glow: c };
  };
  ILL.pill = function (g, o) {
    var c = col(o.color, P.coral);
    var r = sv("g", { transform: "rotate(-35)" }, g);
    sv("path", { d: capsuleD(230, 100), fill: shade(c, 0.3), transform: "translate(5 7)" }, r);
    sv("path", { d: "M-65 -50 H0 V50 H-65 A50 50 0 0 1 -65 -50Z", fill: grad(c) }, r);
    sv("path", { d: "M0 -50 H65 A50 50 0 0 1 65 50 H0Z", fill: grad("#F4F1FF") }, r);
    sv("path", { d: "M-80 -30 H60", stroke: "#fff", "stroke-width": 10, "stroke-linecap": "round", opacity: 0.6 }, r);
    return { r: 110, glow: c };
  };
  ILL.wave = function (g, o) {
    var c = col(o.color, P.sky);
    var w1 = sv("path", { fill: shade(c, 0.1) }, g), w2 = sv("path", { fill: c }, g), w3 = sv("path", { fill: tint(c, 0.4) }, g);
    onT(function (t) {
      [w1, w2, w3].forEach(function (w, k) {
        var pts = [];
        for (var i = 0; i <= 10; i++) pts.push([-170 + i * 34, -30 + k * 40 + Math.sin(i * 0.9 + t * 2.4 + k) * 18]);
        w.setAttribute("d", smoothOpen(pts) + " L170 110 L-170 110Z");
      });
    });
    sv("rect", { x: -172, y: 100, width: 344, height: 20, fill: "none" }, g);
    return { r: 120, glow: c };
  };
  ILL.magnet = function (g, o) {
    var c = col(o.color, P.red);
    sv("path", { d: "M-90 -20 A90 90 0 0 0 90 -20 L90 -110 L40 -110 L40 -20 A40 40 0 0 1 -40 -20 L-40 -110 L-90 -110Z", fill: grad(c), transform: "rotate(180)" }, g);
    sv("rect", { x: -90, y: 70, width: 50, height: 40, fill: "#E8E4FF" }, g);
    sv("rect", { x: 40, y: 70, width: 50, height: 40, fill: "#E8E4FF" }, g);
    var arcs = sv("g", null, g);
    for (var i = 0; i < 3; i++) sv("path", { d: "M-64 " + (126 + i * 20) + " Q0 " + (170 + i * 26) + " 64 " + (126 + i * 20), fill: "none", stroke: P.aqua, "stroke-width": 6, "stroke-linecap": "round" }, arcs);
    onT(function (t) { [].forEach.call(arcs.childNodes, function (a, i) { a.setAttribute("opacity", f2(Math.max(0, Math.sin(t * 4 - i)))); }); });
    return { r: 110, glow: c };
  };
  ILL.trophy = function (g, o) {
    var c = col(o.color, P.gold);
    sv("path", { d: "M-70 -100 L70 -100 Q76 10 0 40 Q-76 10 -70 -100Z", fill: grad(c) }, g);
    sv("path", { d: "M-70 -80 Q-120 -80 -110 -40 Q-100 -10 -60 -6 M70 -80 Q120 -80 110 -40 Q100 -10 60 -6", fill: "none", stroke: shade(c, 0.1), "stroke-width": 14, "stroke-linecap": "round" }, g);
    sv("rect", { x: -14, y: 36, width: 28, height: 40, fill: shade(c, 0.2) }, g);
    sv("rect", { x: -60, y: 74, width: 120, height: 32, rx: 8, fill: P.violet }, g);
    sv("path", { d: starD(30, 13, 5), fill: "#FFF7D6", transform: "translate(0 -46)" }, g);
    sv("path", { d: "M-46 -86 Q-50 -40 -30 -10", fill: "none", stroke: "#FFF7D6", "stroke-width": 10, "stroke-linecap": "round", opacity: 0.6 }, g);
    return { r: 110, ground: 106, glow: c };
  };
  ILL.people = function (g, o) {
    var cols = [P.coral, P.sky, P.mint, P.sun, P.violet];
    [[-90, 20, 0.8], [90, 20, 0.8], [0, 0, 1]].forEach(function (k, i) {
      var p = sv("g", { transform: "translate(" + k[0] + " " + k[1] + ") scale(" + k[2] + ")" }, g);
      var c = cols[(i + Math.floor(o.seed)) % cols.length];
      sv("path", { d: "M-60 100 Q-60 10 0 10 Q60 10 60 100Z", fill: grad(c) }, p);
      sv("circle", { cy: -40, r: 44, fill: grad("#FFD7B5") }, p);
      sv("path", { d: "M-44 -44 Q-40 -96 10 -86 Q50 -80 44 -40 Q20 -66 -44 -44Z", fill: ["#3A2A5A", "#7A4A2A", "#F2C14E"][i] }, p);
    });
    return { r: 120, ground: 100, glow: P.lilac };
  };
  S.illusNames = function () { return Object.keys(ILL).filter(function (k) { return k[0] !== "_"; }); };

  // ───────────────────────── recurring cast: round bird mascots ─────────────────────────
  var CAST = {
    pip: { name: "Pip", color: "#FFC93C", belly: "#FFF1BF", beak: "#FF8A3D", cheek: "#FF7A8A", eye: [34, -20, 21], kind: "bird", feature: "tuft" },
    nova: { name: "Nova", color: "#19BFC0", belly: "#C7F7EF", beak: "#FF6F61", cheek: "#FF8FB8", eye: [36, -22, 22], kind: "bird", feature: "crest" },
    momo: { name: "Momo", color: "#8B6CFF", belly: "#E2D8FF", beak: "#FFC93C", cheek: "#FF8FB8", eye: [38, -24, 25], kind: "owl", feature: "ears" },
    zib: { name: "Zib", color: "#3DDC97", belly: "#C9FBE3", beak: null, cheek: "#FF8FB8", eye: [30, -26, 19], kind: "blob", feature: "antenna" },
  };
  S.cast = Object.keys(CAST);
  function castOf(name) { var k = str(name).toLowerCase().trim(); return CAST[k] ? k : "pip"; }

  function talkAmount(t) {
    var w = V.words;
    if (!w || !w.length) return 0;
    // binary search would be nicer; scenes have few hundred words at most
    for (var i = 0; i < w.length; i++) {
      var a = w[i];
      if (t < a.start - 0.03) break;
      if (t <= a.end + 0.02) {
        var q = (t - a.start) / Math.max(0.08, a.end - a.start);
        return clamp(0.35 + 0.65 * Math.abs(Math.sin(q * PI * Math.max(1, Math.round((a.end - a.start) / 0.16)))), 0, 1);
      }
    }
    return 0;
  }
  S.talkAmount = talkAmount;

  /**
   * A mascot creature actor (radius ~100 du at size 200). name: pip | nova | momo | zib.
   * opts: { parent, x, y, size, color (override body), talk: true|false|[from,to], look: [x,y], mood }
   * Methods: .feel(expr, t) (neutral|happy|wow|think|sad|excited), .look(dx,dy,t), .wave(t, dur), .hop(t, n), .talk(on)
   */
  function creature(name, opts) {
    opts = opts || {};
    var ctx = CUR;
    var key = castOf(name);
    var C = {};
    for (var k in CAST[key]) C[k] = CAST[key][k];
    if (opts.color) { C.color = col(opts.color, C.color); C.belly = tint(C.color, 0.7); }
    var outer = sv("g", { class: "fv-creature fv-" + key }, opts.parent || (ctx ? ctx.world : null));
    if (opts.shadow !== false) groundShadow(outer, 78, 112, ctx && ctx.tone === "light" ? 0.2 : 0.3);
    var hopG = sv("g", null, outer);
    var body = sv("g", null, hopG);
    var c = C.color, seed = uid + 3;
    // back features
    var wingL, wingR, antenna = null, antBall = null, blobPath = null, bellyPath = null;
    if (C.feature === "crest") {
      var cr = sv("g", { transform: "translate(0 -92)" }, body);
      [[-22, -18, P.pink], [0, -26, P.coral], [22, -16, P.orange]].forEach(function (f) { sv("ellipse", { cx: f[0] * 0.6, cy: -26, rx: 12, ry: 34, fill: f[2], transform: "rotate(" + f[1] * -1.2 + " 0 10)" }, cr); });
      sv("path", { d: "M70 60 Q140 70 150 30 Q120 40 96 34Z", fill: shade(c, 0.2) }, body);
      sv("path", { d: "M74 74 Q140 96 160 64 Q126 66 100 54Z", fill: shade(c, 0.32) }, body);
    }
    if (C.feature === "ears") {
      sv("path", { d: "M-84 -44 L-80 -126 L-30 -86Z", fill: shade(c, 0.15) }, body);
      sv("path", { d: "M84 -44 L80 -126 L30 -86Z", fill: shade(c, 0.25) }, body);
      sv("path", { d: "M-76 -60 L-74 -108 L-46 -84Z", fill: tint(c, 0.45) }, body);
      sv("path", { d: "M76 -60 L74 -108 L46 -84Z", fill: tint(c, 0.35) }, body);
    }
    if (C.feature === "antenna") {
      antenna = sv("path", { fill: "none", stroke: shade(c, 0.2), "stroke-width": 7, "stroke-linecap": "round" }, body);
      antBall = sv("g", null, body);
      sv("circle", { r: 26, fill: glow(P.sun, 0.8) }, antBall);
      ball(antBall, 13, P.sun, { rim: false });
    }
    // feet
    if (C.kind !== "blob") {
      [-1, 1].forEach(function (s) {
        var ft = sv("g", { transform: "translate(" + s * 30 + " 96)" }, body);
        sv("path", { d: "M-20 8 Q-22 -6 0 -8 Q22 -6 20 8 Q10 4 6 10 Q0 4 -6 10 Q-10 4 -20 8Z", fill: C.beak || P.orange }, ft);
      });
    }
    // wings (behind body edge)
    function wing(s) {
      var wg = sv("g", { transform: "translate(" + s * 86 + " 18)" }, body);
      var inner = sv("g", null, wg);
      sv("path", { d: "M0 -34 Q" + s * 46 + " -10 " + s * 30 + " 36 Q" + s * 6 + " 30 0 10Z", fill: shade(c, C.kind === "blob" ? 0.05 : 0.18) }, inner);
      return inner;
    }
    if (C.kind === "blob") {
      wingL = wing(-1); wingR = wing(1);
      blobPath = sv("path", { fill: grad(c) }, body);
      bellyPath = sv("path", { fill: C.belly, opacity: 0.75 }, body);
    } else {
      wingL = wing(-1); wingR = wing(1);
      ball(body, 100, c, { inner: function (ig) { sv("ellipse", { cx: 0, cy: 58, rx: 70, ry: 58, fill: C.belly }, ig); if (C.kind === "owl") for (var i = 0; i < 5; i++) sv("path", { d: "M" + (-36 + i * 18) + " " + (40 + (i % 2) * 14) + " l7 7 l7 -7", fill: "none", stroke: shade(C.belly, 0.25), "stroke-width": 4, "stroke-linecap": "round" }, ig); }, k: 0.36, shadeOp: 0.35 });
    }
    if (C.feature === "tuft") {
      sv("path", { d: "M-4 -96 Q-30 -150 6 -150 Q-10 -134 8 -100Z", fill: shade(c, 0.12) }, body);
      sv("path", { d: "M6 -98 Q20 -140 46 -126 Q22 -120 20 -96Z", fill: c }, body);
    }
    // face
    var face = sv("g", null, body);
    var ex = C.eye[0], ey = C.eye[1], er = C.eye[2];
    if (C.kind === "owl") [-1, 1].forEach(function (s) { sv("circle", { cx: s * ex, cy: ey, r: er * 1.55, fill: tint(c, 0.55) }, face); });
    var eyes = [], pupils = [], happy = [], brows = [];
    [-1, 1].forEach(function (s) {
      var eg = sv("g", { transform: "translate(" + s * ex + " " + ey + ")" }, face);
      var open = sv("g", null, eg);
      sv("ellipse", { rx: er, ry: er * 1.12, fill: "#FFFFFF" }, open);
      var pg = sv("g", null, open);
      sv("circle", { r: er * 0.6, fill: P.ink }, pg);
      sv("circle", { cx: -er * 0.22, cy: -er * 0.26, r: er * 0.22, fill: "#FFFFFF" }, pg);
      sv("circle", { cx: er * 0.2, cy: er * 0.22, r: er * 0.09, fill: "#FFFFFF", opacity: 0.8 }, pg);
      if (key === "nova") sv("path", { d: "M" + s * er * 0.7 + " " + -er * 0.9 + " l" + s * 10 + " -10", stroke: P.ink, "stroke-width": 4, "stroke-linecap": "round" }, eg);
      var hp = sv("path", { d: "M" + -er * 0.7 + " " + er * 0.25 + " Q0 " + -er * 0.75 + " " + er * 0.7 + " " + er * 0.25, fill: "none", stroke: P.ink, "stroke-width": 7, "stroke-linecap": "round" }, eg);
      hp.style.display = "none";
      var br = sv("path", { d: "M" + -er * 0.7 + " 0 Q0 -8 " + er * 0.7 + " 0", fill: "none", stroke: shade(c, 0.55), "stroke-width": 6.5, "stroke-linecap": "round" }, eg);
      br.style.display = "none";
      eyes.push({ g: eg, open: open, s: s }); pupils.push(pg); happy.push(hp); brows.push(br);
    });
    [-1, 1].forEach(function (s) { sv("ellipse", { cx: s * (ex + er * 1.25), cy: ey + er * 1.7, rx: 13, ry: 8, fill: C.cheek, opacity: 0.55 }, face); });
    // beak / mouth
    var mouthG = sv("g", { transform: "translate(0 " + (ey + er * 1.55) + ")" }, face);
    var mouthIn = sv("ellipse", { cx: 0, cy: 10, rx: 12, ry: 12, fill: "#7A1F3D" }, mouthG);
    var lower = null, upper = null, smile = null;
    if (C.beak) {
      lower = sv("path", { d: key === "nova" ? "M-11 6 Q0 8 11 6 L0 30Z" : "M-12 6 Q0 8 12 6 L0 22Z", fill: shade(C.beak, 0.15) }, mouthG);
      upper = sv("path", { d: key === "nova" ? "M-17 -4 Q0 -14 17 -4 Q4 16 0 26 Q-4 16 -17 -4Z" : key === "momo" ? "M-11 -2 Q0 -10 11 -2 L0 16Z" : "M-17 -2 Q0 -12 17 -2 Q6 10 0 16 Q-6 10 -17 -2Z", fill: C.beak }, mouthG);
      sv("path", { d: "M-8 -4 Q0 -8 6 -5", fill: "none", stroke: "#fff", "stroke-width": 3, "stroke-linecap": "round", opacity: 0.7 }, mouthG);
    } else {
      smile = sv("path", { d: "M-16 2 Q0 18 16 2", fill: "none", stroke: P.ink, "stroke-width": 6, "stroke-linecap": "round" }, mouthG);
    }

    var a = new Actor(outer);
    a.s = num(opts.size, 200) / 200;
    if (opts.x != null || opts.y != null) a.at(num(opts.x, W / 2), num(opts.y, H / 2));
    var feels = [{ t: -1, e: str(opts.mood || "neutral") }];
    var looks = [{ t: -1, x: opts.look ? num(opts.look[0], 0) : 0, y: opts.look ? num(opts.look[1], 0) : 0 }];
    var waves = [], hops = [];
    var talk = opts.talk == null ? true : opts.talk;
    a.feel = function (e, t) { feels.push({ t: num(t, 0), e: str(e) }); feels.sort(function (x, y) { return x.t - y.t; }); return a; };
    a.look = function (x, y, t) { looks.push({ t: num(t, 0), x: num(x, 0), y: num(y, 0) }); looks.sort(function (p, q) { return p.t - q.t; }); return a; };
    a.wave = function (t, dur) { waves.push({ t: num(t, 0), d: num(dur, 1.6) }); return a; };
    a.hop = function (t, n) { hops.push({ t: num(t, 0), n: Math.max(1, num(n, 1)) }); return a; };
    a.talk = function (v) { talk = v; return a; };
    a.key = key; a.info = { r: 100 };
    a.radius = function () { return 100 * a.s; };
    var lastE = "";
    a.hook(function (t) {
      var fe = feels[0], i;
      for (i = 0; i < feels.length; i++) if (feels[i].t <= t) fe = feels[i];
      var e = fe.e;
      var since = t - fe.t;
      var lk = looks[0], lkPrev = looks[0];
      for (i = 0; i < looks.length; i++) if (looks[i].t <= t) { lkPrev = lk; lk = looks[i]; }
      var lq = E.inOut(clamp((t - lk.t) / 0.35, 0, 1));
      var lx = lerp(lkPrev.x, lk.x, lq), ly = lerp(lkPrev.y, lk.y, lq);
      // talking
      var m = 0;
      if (talk === true) m = talkAmount(t);
      else if (Array.isArray(talk) && t >= talk[0] && t <= talk[1]) m = talkAmount(t);
      if (e === "wow") m = Math.max(m, 0.75);
      // squash & bob
      var bob = Math.sin(t * 3.1 + seed) * 0.022 + m * 0.025;
      var pop = since >= 0 && since < 0.5 ? Math.sin((since / 0.5) * PI) * Math.exp(-since * 4) * 0.12 : 0;
      var hy = 0;
      for (i = 0; i < hops.length; i++) {
        var h = hops[i], hq = (t - h.t) / (0.42 * h.n);
        if (hq >= 0 && hq <= 1) hy = -Math.abs(Math.sin(hq * PI * h.n)) * 60;
      }
      if (e === "excited") hy = Math.min(hy, -Math.abs(Math.sin(t * 7)) * 34);
      var tilt = e === "think" ? 7 : e === "sad" ? -4 : Math.sin(t * 1.3 + seed) * 2.5;
      var sy = 1 + bob + pop - (e === "sad" ? 0.03 : 0), sx = 1 - bob * 0.8 + pop * 0.4;
      body.setAttribute("transform", "translate(0 " + f2(100 * (1 - sy)) + ") rotate(" + f2(tilt) + " 0 100) scale(" + f2(sx) + " " + f2(sy) + ")");
      hopG.setAttribute("transform", "translate(0 " + f2(hy) + ")");
      // eyes
      var bl = blinkAmt(t, seed);
      var isHappy = e === "happy" || e === "excited";
      var eyeS = e === "wow" ? 1.16 : 1, pupS = e === "wow" ? 0.72 : e === "sad" ? 0.95 : 1;
      var px = lx * er * 0.32 + (e === "think" ? er * 0.3 : 0), py = ly * er * 0.32 + (e === "think" ? -er * 0.38 : e === "sad" ? er * 0.3 : 0);
      for (i = 0; i < 2; i++) {
        var ee = eyes[i];
        if (e !== lastE) {
          ee.open.style.display = isHappy ? "none" : "";
          happy[i].style.display = isHappy ? "" : "none";
          brows[i].style.display = e === "wow" || e === "think" || e === "sad" ? "" : "none";
        }
        ee.open.setAttribute("transform", "scale(" + f2(eyeS) + " " + f2(eyeS * Math.max(0.08, 1 - bl) * (e === "sad" ? 0.86 : 1)) + ")");
        pupils[i].setAttribute("transform", "translate(" + f2(px) + " " + f2(py) + ") scale(" + f2(pupS) + ")");
        var s = ee.s;
        if (e === "wow") brows[i].setAttribute("transform", "translate(0 " + f2(-er * 1.75) + ")");
        else if (e === "think") brows[i].setAttribute("transform", "translate(0 " + f2(-er * (s > 0 ? 1.7 : 1.35)) + ") rotate(" + (s > 0 ? -8 : 6) + ")");
        else if (e === "sad") brows[i].setAttribute("transform", "translate(0 " + f2(-er * 1.4) + ") rotate(" + f2(s * -16) + ")");
      }
      lastE = e;
      // mouth
      mouthIn.setAttribute("transform", "scale(" + f2(0.4 + m * 0.6) + " " + f2(Math.max(0.01, m)) + ")");
      if (lower) lower.setAttribute("transform", "translate(0 " + f2(m * 14) + ")");
      if (smile) smile.setAttribute("opacity", m > 0.2 ? "0" : "1");
      // wings: idle flutter, waving, excited flapping
      var wv = 0;
      for (i = 0; i < waves.length; i++) { var wq = (t - waves[i].t) / waves[i].d; if (wq >= 0 && wq <= 1) wv = Math.sin(wq * PI); }
      var flap = Math.sin(t * 2.2 + seed) * 6 + (e === "excited" || e === "wow" ? Math.sin(t * 22) * 18 : 0);
      wingL.setAttribute("transform", "rotate(" + f2(flap) + ")");
      wingR.setAttribute("transform", "rotate(" + f2(-flap - wv * (70 + 20 * Math.sin(t * 14))) + ")");
      if (antenna) {
        var ax = Math.sin(t * 2.4 + seed) * 18, ay = -150 + Math.cos(t * 3.1) * 6;
        antenna.setAttribute("d", "M0 -88 Q" + f2(ax * 0.2) + " -130 " + f2(ax) + " " + f2(ay));
        antBall.setAttribute("transform", "translate(" + f2(ax) + " " + f2(ay) + ") scale(" + f2(1 + 0.12 * Math.sin(t * 5)) + ")");
      }
      if (blobPath) {
        var pts = blobPts(100, 10, seed * 0.37, 0.045, t, 1.6).map(function (p) { return [p[0], p[1] * (p[1] > 0 ? 0.92 : 1)]; });
        blobPath.setAttribute("d", smoothClosed(pts));
        bellyPath.setAttribute("d", smoothClosed(pts.map(function (p) { return [p[0] * 0.62, p[1] * 0.5 + 42]; })));
      }
    });
    return a;
  }
  S.creature = function (name, opts) { return creature(name, opts); };

  /** Cheap mini creature for crowds (no per-frame face animation). Returns a <g>. */
  function mini(parent, c, kindIdx) {
    var g = sv("g", null, parent);
    sv("circle", { r: 40, fill: grad(c) }, g);
    sv("path", { d: crescentD(40, 16), fill: shade(c, 0.5), opacity: 0.35 }, g);
    sv("ellipse", { cy: 22, rx: 26, ry: 16, fill: tint(c, 0.6), opacity: 0.8 }, g);
    if (kindIdx % 3 === 1) sv("path", { d: "M-6 -38 Q-12 -58 6 -56 Q-2 -50 4 -40Z", fill: shade(c, 0.15) }, g);
    if (kindIdx % 3 === 2) { sv("path", { d: "M-34 -16 L-32 -48 L-14 -34Z", fill: shade(c, 0.15) }, g); sv("path", { d: "M34 -16 L32 -48 L14 -34Z", fill: shade(c, 0.15) }, g); }
    sv("circle", { cx: -13, cy: -6, r: 9, fill: "#fff" }, g); sv("circle", { cx: 13, cy: -6, r: 9, fill: "#fff" }, g);
    sv("circle", { cx: -12, cy: -5, r: 5.5, fill: P.ink }, g); sv("circle", { cx: 14, cy: -5, r: 5.5, fill: P.ink }, g);
    sv("path", { d: "M-7 6 L7 6 L0 15Z", fill: P.orange }, g);
    return g;
  }
  S.mini = function (parent, color, kind) { return mini(parent, col(color, P.sun), kind || 0); };

  // ───────────────────────── shape morphing ─────────────────────────
  var MN = 120;
  function resample(pts, n) {
    var L = [0], i;
    for (i = 1; i <= pts.length; i++) { var a = pts[i - 1], b = pts[i % pts.length]; L.push(L[i - 1] + Math.hypot(b[0] - a[0], b[1] - a[1])); }
    var total = L[L.length - 1], out = [], j = 0;
    for (i = 0; i < n; i++) {
      var d = (i / n) * total;
      while (j < pts.length - 1 && L[j + 1] < d) j++;
      var p0 = pts[j], p1 = pts[(j + 1) % pts.length], seg = L[j + 1] - L[j] || 1, q = (d - L[j]) / seg;
      out.push([lerp(p0[0], p1[0], q), lerp(p0[1], p1[1], q)]);
    }
    return out;
  }
  function polar(fn, n) { var p = []; n = n || 360; for (var i = 0; i < n; i++) { var a = (i / n) * TAU - PI / 2; var r = fn(a); p.push([Math.cos(a) * r, Math.sin(a) * r]); } return p; }
  function poly(v) { var p = []; for (var i = 0; i < v.length; i++) { var a = v[i], b = v[(i + 1) % v.length]; for (var k = 0; k < 20; k++) p.push([lerp(a[0], b[0], k / 20), lerp(a[1], b[1], k / 20)]); } return p; }
  function param(fx, fy, n) { var p = []; n = n || 360; for (var i = 0; i < n; i++) { var t = (i / n) * TAU; p.push([fx(t), fy(t)]); } return p; }
  // union of primitive shapes as a star-shaped polar outline around the origin
  function unionPolar(prims) {
    return polar(function (a) {
      var dx = Math.cos(a), dy = Math.sin(a), best = 0;
      prims.forEach(function (s) {
        var t = null;
        if (s.c) { // circle/ellipse {c:[x,y], rx, ry}
          var ox = -s.c[0] / s.rx, oy = -s.c[1] / s.ry, ux = dx / s.rx, uy = dy / s.ry;
          var A = ux * ux + uy * uy, B = 2 * (ox * ux + oy * uy), Cc = ox * ox + oy * oy - 1, disc = B * B - 4 * A * Cc;
          if (disc >= 0) t = (-B + Math.sqrt(disc)) / (2 * A);
        } else if (s.box) { // axis aligned [x0,y0,x1,y1]
          var b = s.box, tmin = -1e9, tmax = 1e9;
          [[dx, b[0], b[2]], [dy, b[1], b[3]]].forEach(function (k) {
            if (Math.abs(k[0]) < 1e-9) { if (0 < k[1] || 0 > k[2]) { tmin = 1; tmax = 0; } }
            else { var t1 = k[1] / k[0], t2 = k[2] / k[0]; tmin = Math.max(tmin, Math.min(t1, t2)); tmax = Math.min(tmax, Math.max(t1, t2)); }
          });
          if (tmax >= tmin && tmax > 0) t = tmax;
        }
        if (t != null && t > best) best = t;
      });
      return best || 1;
    });
  }
  var SHAPES = {
    circle: function () { return polar(function () { return 100; }); },
    blob: function () { return polar(function (a) { return 100 * (1 + 0.1 * Math.sin(3 * a + 1) + 0.06 * Math.sin(5 * a + 2)); }); },
    star: function () { var v = []; for (var i = 0; i < 10; i++) { var a = (i / 10) * TAU - PI / 2, r = i % 2 ? 46 : 112; v.push([Math.cos(a) * r, Math.sin(a) * r + 8]); } return poly(v); },
    sparkle: function () { var v = []; for (var i = 0; i < 8; i++) { var a = (i / 8) * TAU - PI / 2, r = i % 2 ? 30 : 115; v.push([Math.cos(a) * r, Math.sin(a) * r]); } return poly(v); },
    heart: function () { return param(function (t) { return 16 * Math.pow(Math.sin(t), 3) * 6.4; }, function (t) { return -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * 6.4 - 12; }); },
    drop: function () { return param(function (t) { return 82 * Math.sin(t) * Math.pow(Math.sin(t / 2), 1.2); }, function (t) { return -112 * Math.cos(t) + 10; }); },
    leaf: function () { return param(function (t) { return 62 * Math.sin(t) * (1 - 0.15 * Math.cos(t)); }, function (t) { return -112 * Math.cos(t); }); },
    cloud: function () { return unionPolar([{ c: [-60, 20], rx: 52, ry: 52 }, { c: [0, -18], rx: 66, ry: 66 }, { c: [62, 14], rx: 54, ry: 54 }, { c: [0, 36], rx: 112, ry: 40 }]); },
    hexagon: function () { var v = []; for (var i = 0; i < 6; i++) { var a = (i / 6) * TAU - PI / 2; v.push([Math.cos(a) * 108, Math.sin(a) * 108]); } return poly(v); },
    triangle: function () { return poly([[0, -110], [108, 80], [-108, 80]]); },
    square: function () { return poly([[-92, -92], [92, -92], [92, 92], [-92, 92]]); },
    bolt: function () { return poly([[20, -130], [-70, 20], [-6, 20], [-30, 130], [72, -30], [8, -30], [40, -130]]); },
    moon: function () {
      var p = [], i;
      for (i = 0; i <= 90; i++) { var a = lerp(-2.2, 2.2, i / 90); p.push([Math.cos(a) * 105 - 0, Math.sin(a) * 105]); }
      for (i = 0; i <= 90; i++) { var b = lerp(2.0, -2.0, i / 90); p.push([Math.cos(b) * 88 + 52, Math.sin(b) * 92]); }
      return p.map(function (q) { return [q[1] * 0.9 - 0, -q[0] * 1 + 0]; }).map(function (q) { return [q[1], q[0]]; });
    },
    flower: function () { return polar(function (a) { return 58 + 52 * Math.pow(Math.abs(Math.cos(2.5 * (a + PI / 2))), 0.7); }); },
    gear: function () { return polar(function (a) { return 84 + 22 * clamp(Math.sin(8 * a) * 3, -1, 1); }); },
    house: function () { return poly([[0, -112], [104, -10], [80, -10], [80, 100], [-80, 100], [-80, -10], [-104, -10]]); },
    arrow: function () { return poly([[-100, -32], [20, -32], [20, -80], [110, 0], [20, 80], [20, 32], [-100, 32]]); },
    person: function () { return unionPolar([{ c: [0, -62], rx: 40, ry: 40 }, { c: [0, 60], rx: 70, ry: 62 }, { box: [-70, 30, 70, 110] }]); },
    tree: function () { return unionPolar([{ c: [0, -40], rx: 70, ry: 70 }, { c: [-50, 0], rx: 46, ry: 46 }, { c: [50, 0], rx: 46, ry: 46 }, { box: [-16, 0, 16, 115] }]); },
    bulb: function () { return unionPolar([{ c: [0, -26], rx: 78, ry: 78 }, { box: [-36, 30, 36, 112] }]); },
    planet: function () { return unionPolar([{ c: [0, 0], rx: 78, ry: 78 }, { c: [0, 0], rx: 128, ry: 24 }]); },
    rocket: function () { return unionPolar([{ c: [0, -10], rx: 46, ry: 112 }, { box: [-78, 40, 78, 92] }]); },
    brain: function () { return polar(function (a) { var r = 92 * (1 + 0.05 * Math.sin(a * 9)); return r / Math.sqrt(Math.pow(Math.cos(a) / 1.18, 2) + Math.pow(Math.sin(a) / 0.9, 2)); }); },
    virus: function () { return polar(function (a) { return 84 + 26 * Math.pow(Math.max(0, Math.cos(a * 10)), 8); }); },
    cell: function () { return polar(function (a) { return 100 * (1 + 0.08 * Math.sin(2 * a + 1.3) + 0.05 * Math.sin(4 * a)); }); },
    shield: function () { return param(function (t) { var s = Math.sin(t); return 96 * s * (s > 0 ? 1 : 1) * (1 - 0.25 * Math.max(0, Math.cos(t))); }, function (t) { var c = Math.cos(t); return c > 0 ? -100 * c * 0.9 : -110 * c * 1.0 + 0 * c; }); },
    crown: function () { return poly([[-100, 80], [-100, -60], [-50, 0], [0, -90], [50, 0], [100, -60], [100, 80]]); },
    fish: function () { return unionPolar([{ c: [-20, 0], rx: 90, ry: 56 }, { box: [60, -12, 118, 12] }, { c: [110, 0], rx: 12, ry: 56 }]); },
  };
  var shapeCache = {};
  function shapePts(name) {
    var k = SHAPES[name] ? name : "blob";
    if (!shapeCache[k]) {
      var p = resample(SHAPES[k](), MN);
      // normalise winding (clockwise in screen space) and start at the top-most point
      var area = 0; for (var i = 0; i < p.length; i++) { var a = p[i], b = p[(i + 1) % p.length]; area += a[0] * b[1] - b[0] * a[1]; }
      if (area < 0) p.reverse();
      var top = 0; for (i = 1; i < p.length; i++) if (Math.atan2(p[i][0], -p[i][1]) * Math.atan2(p[i][0], -p[i][1]) < Math.atan2(p[top][0], -p[top][1]) * Math.atan2(p[top][0], -p[top][1])) top = i;
      shapeCache[k] = p.slice(top).concat(p.slice(0, top));
    }
    return shapeCache[k];
  }
  // best rotation of B's start index to match A (minimise travel)
  function align(A, B) {
    var best = 0, bestD = Infinity, n = A.length;
    for (var o = 0; o < n; o += 2) {
      var d = 0;
      for (var i = 0; i < n; i += 4) { var p = A[i], q = B[(i + o) % n]; d += (p[0] - q[0]) * (p[0] - q[0]) + (p[1] - q[1]) * (p[1] - q[1]); }
      if (d < bestD) { bestD = d; best = o; }
    }
    return B.slice(best).concat(B.slice(0, best));
  }
  S.shapes = Object.keys(SHAPES);
  S.shapePath = function (name, scale) { var s = scale || 1; return smoothClosed(shapePts(name).map(function (p) { return [p[0] * s, p[1] * s]; }), 0.9); };

  /**
   * Morphing shape actor. steps: [{ shape, color, at }] (at = seconds). opts: { parent, x, y, size, dur, face, shadow }
   * The silhouette interpolates point-by-point (matched counts, aligned start), colour blends, with squash on arrival.
   */
  function morph(steps, opts) {
    opts = opts || {};
    var ctx = CUR;
    steps = arr(steps).map(function (s, i) { return { shape: str(s.shape || s), color: col(s.color, SERIES[i % SERIES.length]), at: num(s.at, i * 1.2) }; });
    if (!steps.length) steps = [{ shape: "circle", color: P.violet, at: 0 }];
    var pts = [shapePts(steps[0].shape)];
    for (var i = 1; i < steps.length; i++) pts.push(align(pts[i - 1], shapePts(steps[i].shape)));
    var outer0 = sv("g", { class: "fv-morph" }, opts.parent || ctx.world);
    var gid = nid("mg");
    var mgr = sv("radialGradient", { id: gid }, ctx.defs);
    var gs0 = sv("stop", { offset: "0", "stop-opacity": 0.42, "stop-color": steps[0].color }, mgr);
    var gs1 = sv("stop", { offset: "0.5", "stop-opacity": 0.16, "stop-color": steps[0].color }, mgr);
    sv("stop", { offset: "1", "stop-opacity": 0, "stop-color": "#FFFFFF" }, mgr);
    var gl = sv("circle", { r: 210, fill: "url(#" + gid + ")" }, outer0);
    var outer = sv("g", null, outer0);
    var shadowP = sv("path", { fill: "#1A1240", opacity: 0.22, transform: "translate(14 20)" }, outer);
    var baseP = sv("path", null, outer);
    var lightP = sv("path", null, outer);
    var rimP = sv("path", { fill: "none", stroke: "#FFFFFF", "stroke-width": 5, opacity: 0.35, "stroke-linecap": "round", "stroke-dasharray": "60 900", transform: "scale(0.86)" }, outer);
    var face = opts.face ? cuteFace(outer, 0, 6, 1) : null;
    var dur = num(opts.dur, 0.75);
    var a = new Actor(outer0);
    a.s = num(opts.size, 300) / 200;
    a.at(num(opts.x, W / 2), num(opts.y, H / 2));
    a.steps = steps;
    a.hook(function (t) {
      var k = 0;
      for (var i = 1; i < steps.length; i++) if (t >= steps[i].at) k = i;
      var q = k > 0 ? clamp((t - steps[k].at) / dur, 0, 1) : 1;
      var e = E.inOut(q);
      var A = pts[Math.max(0, k - 1)], B = pts[k];
      var mid = Math.sin(q * PI);
      var cur = [];
      for (var j = 0; j < MN; j++) {
        // a little swirl while morphing makes it feel liquid rather than linear
        var x = lerp(A[j][0], B[j][0], e), y = lerp(A[j][1], B[j][1], e);
        var ang = mid * 0.25, ca = Math.cos(ang), sa = Math.sin(ang);
        var wob = 1 + mid * 0.06 * Math.sin(j * 0.31 + t * 6);
        cur.push([(x * ca - y * sa) * wob, (x * sa + y * ca) * wob]);
      }
      var d = smoothClosed(cur, 0.9);
      var c = k > 0 ? mix(steps[k - 1].color, steps[k].color, e) : steps[0].color;
      shadowP.setAttribute("d", d);
      baseP.setAttribute("d", d); baseP.setAttribute("fill", shade(c, 0.32));
      lightP.setAttribute("d", d); lightP.setAttribute("fill", c);
      lightP.setAttribute("transform", "translate(-7 -9) scale(0.9)");
      rimP.setAttribute("d", d);
      var sq = k > 0 ? Math.sin(clamp((t - steps[k].at - dur * 0.7) / 0.5, 0, 1) * PI) * Math.exp(-clamp((t - steps[k].at - dur * 0.7) / 0.5, 0, 1) * 2) * 0.1 : 0;
      outer.setAttribute("transform", "scale(" + f2(1 + sq) + " " + f2(1 - sq * 0.7) + ")");
      if (face) { face.blink(t); face.g.setAttribute("transform", "translate(0 6) scale(" + f2(1 - mid * 0.3) + ")"); }
      gs0.setAttribute("stop-color", c); gs1.setAttribute("stop-color", c);
    });
    return a;
  }
  S.morph = function (steps, opts) { return morph(steps, opts); };

  // ───────────────────────── zoom through scales ─────────────────────────
  /**
   * Nested worlds the camera dives through. levels: [{ illus, label, world, color, note }] (outermost first).
   * opts: { times: [transition start per level boundary], dur, K (scale step), parent, onLevel(i, g) }
   * Each next world opens as a liquid portal inside the previous hero while the camera keeps zooming.
   */
  var LEVEL_BG = {
    space: ["#0F0A2C", "#2A1A68", "#4A1E78"], sky: ["#2E9BF0", "#7CCFFF", "#FFF0CF"], dusk: ["#24186A", "#C24E8E", "#FFC27A"],
    micro: ["#0B4F68", "#16A69E", "#3CCBA8"], body: ["#5E1240", "#C93B63", "#FF7A7A"], ocean: ["#1CC6E0", "#0E8CC4", "#141E5A"],
    studio: ["#241A66", "#3A2A92", "#5233A8"], night: ["#0D1240", "#2B3480", "#5A4FB0"],
  };
  function zoomThrough(ctx, levels, opts) {
    opts = opts || {};
    ctx = ctx || CUR;
    var n = levels.length;
    var K = num(opts.K, 7);
    var M = Math.max(W, H), Rp = Math.hypot(W, H) / 2 + 30;
    var dur = num(opts.dur, 1.6);
    var times = opts.times || levels.slice(1).map(function (l, i) { return 0.8 + i * 2; });
    var holder = sv("g", { class: "fv-zoom" }, opts.parent || ctx.svg);
    if (!opts.parent) ctx.svg.insertBefore(holder, ctx.front);
    var lv = levels.map(function (L, i) {
      var g = sv("g", null, holder);
      var inner = sv("g", null, g);
      var clipId = nid("zc");
      var cp = sv("clipPath", { id: clipId }, ctx.defs);
      var cpath = sv("path", { d: "" }, cp);
      if (i > 0) inner.setAttribute("clip-path", "url(#" + clipId + ")");
      var world = L.world || ["space", "space", "sky", "sky", "micro"][Math.min(4, i)];
      var stops = LEVEL_BG[world] || LEVEL_BG.space;
      sv("rect", { x: -M, y: -M, width: M * 2, height: M * 2, fill: vgrad(stops, "zl" + world) }, inner);
      sv("circle", { r: M * 0.7, fill: glow(world === "sky" ? "#FFF6D0" : world === "micro" ? "#9CFFE6" : "#9E7BFF", 0.35) }, inner);
      var rnd = V.makeRand(i * 31 + 5);
      var deco = sv("g", null, inner);
      for (var k = 0; k < (world === "space" || world === "night" ? 36 : 14); k++) {
        var dx = (rnd() - 0.5) * W, dy = (rnd() - 0.5) * H;
        if (world === "space" || world === "night") sv("circle", { cx: f2(dx), cy: f2(dy), r: f2(1.5 + rnd() * 2.8), fill: rnd() < 0.7 ? "#FFFFFF" : "#BDF3FF", opacity: f2(0.4 + rnd() * 0.6) }, deco);
        else if (world === "sky") { if (k < 5) sv("path", { d: cloudD(140 + rnd() * 120), fill: "#FFFFFF", opacity: 0.9, transform: "translate(" + f2(dx) + " " + f2(dy * 0.8 - H * 0.1) + ")" }, deco); }
        else sv("circle", { cx: f2(dx), cy: f2(dy), r: f2(8 + rnd() * 26), fill: "none", stroke: "#E8FFFB", "stroke-opacity": 0.3, "stroke-width": 4 }, deco);
      }
      var heroSize = Math.min(W, H) * num(L.size, 0.52);
      var hero = illus(L.illus || "planet", { parent: inner, size: heroSize, color: L.color, shadow: "glow", seed: i * 7 + 1 });
      hero.at(0, 0).float(8, 4, 1.5);
      CUR.reg.actors.splice(CUR.reg.actors.indexOf(hero), 1); // updated manually below (not via the camera layers)
      if (typeof opts.onLevel === "function") { try { opts.onLevel(i, inner, hero); } catch (e) { V.error("zoom onLevel: " + e.message); } }
      return { g: g, inner: inner, cpath: cpath, hero: hero, f: L.focus ? [num(L.focus[0], 0) * heroSize / 200, num(L.focus[1], 0) * heroSize / 200] : [0, 0] };
    });
    function zAt(t) { var z = 0; for (var i = 0; i < times.length && i < n - 1; i++) z += E.inOut(clamp((t - times[i]) / dur, 0, 1)); return z; }
    var api = { levels: lv, z: zAt, holder: holder };
    onT(function (t) {
      var z = zAt(t);
      var L = Math.min(n - 1, Math.floor(z + 1e-6)), fr = z - L;
      if (L === n - 1) fr = 0;
      var sL = Math.pow(K, fr), a = [lv[L].f[0] * E.inOutSine(fr), lv[L].f[1] * E.inOutSine(fr)];
      var org = [], sc = [];
      org[L] = [W / 2 - sL * a[0], H / 2 - sL * a[1]]; sc[L] = sL;
      for (var j = L + 1; j < n; j++) { sc[j] = sc[j - 1] / K; org[j] = [org[j - 1][0] + sc[j - 1] * lv[j - 1].f[0], org[j - 1][1] + sc[j - 1] * lv[j - 1].f[1]]; }
      for (j = L - 1; j >= 0; j--) { sc[j] = sc[j + 1] * K; org[j] = [org[j + 1][0] - sc[j] * lv[j].f[0], org[j + 1][1] - sc[j] * lv[j].f[1]]; }
      var open = sstep(0.42, 0.98, fr);
      for (j = 0; j < n; j++) {
        var vis = j === L || (j === L + 1 && open > 0.001);
        var o = lv[j];
        if (o._vis !== vis) { o.g.style.display = vis ? "" : "none"; o._vis = vis; }
        if (!vis) continue;
        o.g.setAttribute("transform", "translate(" + f2(org[j][0]) + " " + f2(org[j][1]) + ") scale(" + (Math.round(sc[j] * 1e5) / 1e5) + ")");
        o.hero._update(t);
        if (j === L + 1) {
          // liquid portal: wobbly blob radius in child units
          var r = Rp * K * open * open + 1;
          var pts = blobPts(r, 14, j * 1.7, 0.08 * (1 - open), t, 3);
          o.cpath.setAttribute("d", smoothClosed(pts));
        } else if (j > 0) o.cpath.setAttribute("d", "M" + -M * 4 + " " + -M * 4 + "H" + M * 4 + "V" + M * 4 + "H" + -M * 4 + "Z");
      }
    });
    return api;
  }
  S.zoomThrough = function (ctx, levels, opts) { return zoomThrough(ctx || CUR, arr(levels), opts); };

  // ───────────────────────── templates ─────────────────────────
  var MICRO = { cell: 1, bacteria: 1, virus: 1, dna: 1, molecule: 1, atom: 1, neuron: 1 };
  var COSMIC = { galaxy: 1, sun: 1, star: 1, planet: 1, earth: 1, moon: 1, blackhole: 1, saturn: 1, gasgiant: 1, mars: 1, satellite: 1, rocket: 1 };
  var BODY = { body: 1, heart: 1, brain: 1, pill: 1 };
  function resolveIllus(name) {
    var k = str(name).toLowerCase().trim().replace(/\s+/g, "-");
    return ILL[k] ? k : ALIAS[k] || k;
  }
  function worldFor(name, d) {
    var k = resolveIllus(name);
    if (COSMIC[k]) return "space";
    if (MICRO[k]) return "micro";
    if (BODY[k]) return "body";
    if (k === "fish" || k === "wave" || k === "drop") return "ocean";
    if (k === "city" || k === "house" || k === "tree" || k === "sprout" || k === "flower" || k === "mountain" || k === "people" || k === "factory" || k === "cloud") return "sky";
    return d || "studio";
  }
  S.worldFor = worldFor;
  function times(labels, opts) {
    return S.syncTimes(labels.map(function (l) { return l == null ? null : S.autoKey(S.plain(l)); }), opts || {});
  }
  function shortSide() { return Math.min(W, H); }

  var T = {};

  // 1 ── title-landscape: illustrated parallax world with a big friendly title
  T["title-landscape"] = function (ctx, p) {
    var cam = ctx.cam;
    cam.z = 1.16; cam.y = H * 0.56;
    cam.to(0, { z: 1, y: H / 2 }, Math.min(2.6, D * 0.55), "inOut");
    var sf = ctx.safe;
    var ty = V.isPortrait ? H * 0.27 : H * 0.3;
    var ks = times([p.kicker || null, p.title, p.subtitle || null], { start: 0.25 });
    if (p.kicker) tag(ctx, p.kicker, { x: W / 2, y: ty - (V.isPortrait ? 190 : 150), at: ks[0], color: P.pink, size: 34 });
    var title = say(ctx, p.title, { x: W / 2, y: ty, at: Math.max(0.2, ks[1] - 0.1), size: V.isPortrait ? 112 : 124, maxWidth: sf.w * (V.isLandscape ? 0.82 : 1), maxLines: 3, em: P.sun });
    title.float(6, 4.2, 0.6);
    if (p.subtitle) say(ctx, p.subtitle, { x: W / 2, y: ty + (V.isPortrait ? 230 : 190), at: ks[2], size: 46, maxWidth: sf.w * 0.8, maxLines: 2, stagger: 0.04 });
    var gy = ctx.groundY ? function (x) { return ctx.groundY(x); } : function () { return H * 0.86; };
    var cx = V.isPortrait ? W * 0.3 : W * 0.2;
    var cr = creature(p.creature || "pip", { parent: ctx.mid, size: V.isPortrait ? 260 : 240, mood: "happy", look: [0.6, -0.4] });
    var cy = (ctx.world_ === "space" || ctx.world_ === "micro" || ctx.world_ === "ocean") ? H * 0.74 : gy(cx) - 112 * (cr.s);
    cr.at(cx, cy).enter(0.5, "drop");
    cr.wave(1.4, 1.8).feel("excited", ks[1] + 0.3).feel("happy", ks[1] + 1.6).hop(Math.min(D - 1, 3.4), 2);
    if (ctx.world_ === "space" || ctx.world_ === "micro" || ctx.world_ === "ocean") cr.float(14, 3.6, 3);
    var hero = p.hero || (ctx.world_ === "space" ? "saturn" : ctx.world_ === "micro" ? "cell" : ctx.world_ === "ocean" ? "fish" : ctx.world_ === "night" ? "rocket" : "house");
    var hx = V.isPortrait ? W * 0.7 : W * 0.8;
    var hs = V.isPortrait ? 300 : 270;
    var hz = illus(hero, { parent: ctx.mid, size: hs, seed: 2 });
    var floating = ctx.world_ === "space" || ctx.world_ === "micro" || ctx.world_ === "ocean" || COSMIC[hz.name] || MICRO[hz.name];
    var hy = floating ? H * (V.isPortrait ? 0.7 : 0.66) : gy(hx) - (hz.info.ground != null ? hz.info.ground : 100) * hz.s;
    hz.at(hx, hy).enter(0.8, "pop", 1.1);
    if (floating) hz.float(16, 4.6, 3);
    // little extras to keep the world alive
    if (ctx.world_ === "sky" || ctx.world_ === "meadow") {
      for (var i = 0; i < 3; i++) {
        var fx = W * (0.38 + i * 0.12), fl = illus(i === 1 ? "tree" : "flower", { parent: ctx.mid, size: i === 1 ? 170 : 90, seed: i + 4, color: i === 1 ? "#2FAE62" : [P.pink, P.sun, P.coral][i] });
        fl.at(fx, gy(fx) - (fl.info.ground || 100) * fl.s + 6).enter(1 + i * 0.15, "grow");
      }
    } else {
      illus(ctx.world_ === "micro" ? "bacteria" : ctx.world_ === "ocean" ? "fish" : "moon", { parent: ctx.far, size: 110, seed: 9, color: ctx.world_ === "ocean" ? P.sun : null }).at(W * 0.12, H * 0.2).enter(1.2, "pop").float(12, 5, 6);
      illus(ctx.world_ === "micro" ? "virus" : ctx.world_ === "ocean" ? "fish" : "planet", { parent: ctx.far, size: 80, seed: 3, color: P.pink }).at(W * 0.9, H * 0.16).enter(1.4, "pop").float(10, 4, 4);
    }
    burst(ctx, W / 2, ty, ks[1] + 0.25, { radius: 320, count: 16, size: 14, parent: ctx.front });
  };

  // 2 ── cosmic-zoom: dive from the cosmos to the microscopic through liquid portals
  T["cosmic-zoom"] = function (ctx, p) {
    var levels = arr(p.levels).slice(0, 6);
    if (levels.length < 2) levels = [{ illus: "galaxy", label: "Galaxy" }, { illus: "earth", label: "Earth" }];
    var labels = levels.map(function (l) { return l.label; });
    var tt = times(labels, { start: 0.2, end: D - 1.4, minGap: 1.05 });
    var dur = clamp((D - 0.8) / levels.length * 0.8, 0.9, 1.8);
    var starts = tt.slice(1).map(function (t, i) { return Math.max(0.35 + i * 0.4, t - dur * 0.85); });
    for (var i = 1; i < starts.length; i++) starts[i] = Math.max(starts[i], starts[i - 1] + dur * 0.92);
    var Ls = levels.map(function (l) { return { illus: l.illus, label: l.label, world: l.world || worldFor(l.illus, "space"), color: l.color, size: l.size, focus: l.focus }; });
    var z = zoomThrough(ctx, Ls, { times: starts, dur: dur, K: 7 });
    ctx.cam.push = 0.02;
    var ly = V.isPortrait ? H * 0.8 : H * 0.84;
    levels.forEach(function (l, i) {
      var tIn = i === 0 ? Math.max(0.3, tt[0]) : starts[i - 1] + dur * 0.8;
      var tOut = i < starts.length ? starts[i] + dur * 0.25 : D + 1;
      var tg = tag(ctx, l.label, { x: W / 2, y: ly, at: tIn, size: 50, color: SERIES[i % SERIES.length] });
      tg.exit(tOut, "shrink", 0.35);
      if (l.note) {
        var nt = tag(ctx, l.note, { x: W / 2, y: ly + 78, at: tIn + 0.15, size: 30, tone: "solid", color: shade(SERIES[i % SERIES.length], 0.2) });
        nt.exit(tOut, "shrink", 0.3);
      }
    });
    if (p.title) {
      var tl = say(ctx, p.title, { x: W / 2, y: V.isPortrait ? H * 0.16 : H * 0.15, at: 0.15, size: V.isPortrait ? 84 : 90, maxLines: 2, em: P.sun });
      tl.exit(starts[0] + 0.1, "shrink", 0.4);
    }
    // depth streaks while diving
    var streaks = sv("g", { opacity: 0 }, ctx.front);
    var rnd = V.makeRand(11);
    var sl = [];
    for (var s = 0; s < 26; s++) { var a = rnd() * TAU; sl.push({ e: sv("line", { stroke: "#FFFFFF", "stroke-width": 3 + rnd() * 3, "stroke-linecap": "round" }, streaks), a: a, r: rnd(), sp: 0.6 + rnd() }); }
    onT(function (t) {
      var v = 0;
      for (var i = 0; i < starts.length; i++) v = Math.max(v, Math.sin(clamp((t - starts[i]) / dur, 0, 1) * PI));
      streaks.setAttribute("opacity", f2(v * v * 0.32));
      if (v <= 0.001) return;
      var M = Math.hypot(W, H) / 2;
      for (var k = 0; k < sl.length; k++) {
        var q = (sl[k].r + t * sl[k].sp) % 1, r0 = 80 + q * M, r1 = r0 + 40 + q * 200 * v;
        sl[k].e.setAttribute("x1", f2(W / 2 + Math.cos(sl[k].a) * r0)); sl[k].e.setAttribute("y1", f2(H / 2 + Math.sin(sl[k].a) * r0));
        sl[k].e.setAttribute("x2", f2(W / 2 + Math.cos(sl[k].a) * r1)); sl[k].e.setAttribute("y2", f2(H / 2 + Math.sin(sl[k].a) * r1));
      }
    });
  };

  // 3 ── micro-world: cells / microbes / molecules floating and interacting
  T["micro-world"] = function (ctx, p) {
    var subs = arr(p.subjects).slice(0, 4);
    if (!subs.length) subs = [{ illus: "cell", label: "Cell" }];
    var n = subs.length;
    var titleY = V.isPortrait ? H * 0.12 : H * 0.13;
    if (p.title) say(ctx, p.title, { x: W / 2, y: titleY, at: 0.15, size: V.isPortrait ? 80 : 84, maxLines: 2, em: P.sun }).float(5, 4, 0.5);
    var top = p.title ? titleY + 120 : H * 0.12, bot = ctx.safe.b - 60;
    var pos = [];
    var cyM = (top + bot) / 2;
    if (n === 1) pos = [[W / 2, cyM]];
    else if (V.isPortrait) {
      if (n === 2) pos = [[W / 2, lerp(top, bot, 0.25)], [W / 2, lerp(top, bot, 0.75)]];
      else if (n === 3) pos = [[W * 0.3, lerp(top, bot, 0.2)], [W * 0.7, lerp(top, bot, 0.5)], [W * 0.32, lerp(top, bot, 0.82)]];
      else pos = [[W * 0.3, lerp(top, bot, 0.2)], [W * 0.7, lerp(top, bot, 0.4)], [W * 0.3, lerp(top, bot, 0.62)], [W * 0.7, lerp(top, bot, 0.84)]];
    } else {
      for (var i = 0; i < n; i++) pos.push([W * (0.5 + (i - (n - 1) / 2) * (V.isSquare ? 0.8 / n : 0.74 / n) * (n === 2 ? 1.25 : 1)), cyM + (n >= 3 ? (i % 2 ? 40 : -40) : 0)]);
    }
    var sz = Math.min((bot - top) * (V.isPortrait ? (n === 1 ? 0.55 : 0.32) : 0.62), (W * (V.isSquare ? 0.82 : 0.8)) / Math.max(1, n) * 0.78, 470);
    if (n === 1) sz = Math.min(sz * 1.1, shortSide() * 0.5);
    var labelT = times(subs.map(function (s) { return s.label; }), { start: 0.4 });
    // ambient swarm in the mid-ground
    var kinds = subs.map(function (s) { return resolveIllus(s.illus); }).filter(function (k) { return MICRO[k]; });
    if (!kinds.length) kinds = ["cell"];
    for (var b = 0; b < 7; b++) {
      var sw = illus(kinds[b % kinds.length], { parent: ctx.far, size: 70 + (b % 3) * 26, seed: b * 3 + 1, shadow: "none" });
      var sx = W * hash01(b * 5 + 1), sy = H * (0.1 + 0.8 * hash01(b * 9 + 2));
      sw.at(sx, sy).alpha(0.4).float(30, 5 + b, 20).spin(b % 2 ? 8 : -6);
      sw.to(0, { x: sx + (hash01(b) - 0.5) * 500 }, D, "linear");
    }
    var acts = subs.map(function (s, i) {
      var a = illus(s.illus, { size: sz, seed: i * 5 + 2, color: s.color, face: !!p.faces });
      a.at(pos[i][0], pos[i][1]).enter(labelT[i] - 0.05, "pop", 1).float(12, 3.5 + i * 0.4, 4);
      if (s.label) tag(ctx, s.label, { x: pos[i][0], y: pos[i][1] + sz * 0.5 * (a.info.r / 100) + 46, at: labelT[i] + 0.15, size: V.isPortrait ? 40 : 38, color: SERIES[(i + 2) % SERIES.length] });
      return a;
    });
    var ev = p.event;
    if (ev && n >= 2) {
      var fi = clamp(Math.round(num(ev.from, 0)), 0, n - 1), ti = clamp(Math.round(num(ev.to, 1)), 0, n - 1);
      if (fi === ti) ti = (fi + 1) % n;
      var te = V.find(S.autoKey(ev.verb || "") || "", labelT[n - 1]);
      te = te != null ? te - 0.3 : Math.min(D - 1.4, labelT[n - 1] + 1.1);
      te = ct(Math.max(te, labelT[n - 1] + 0.5));
      var A = acts[fi], B = acts[ti];
      var dx = pos[ti][0] - pos[fi][0], dy = pos[ti][1] - pos[fi][1], dist = Math.hypot(dx, dy) || 1;
      var reach = (A.radius() + B.radius()) * 0.72;
      A.to(te, { x: pos[ti][0] - (dx / dist) * reach, y: pos[ti][1] - (dy / dist) * reach }, 0.7, "inCubic");
      A.to(te + 0.75, { x: pos[ti][0] - (dx / dist) * reach * 1.25, y: pos[ti][1] - (dy / dist) * reach * 1.25 }, 0.9, "outBack");
      B.to(te + 0.68, { s: B.s * 1.14 }, 0.12, "outCubic").to(te + 0.82, { s: B.s }, 0.7, "pop");
      burst(ctx, pos[ti][0] - (dx / dist) * reach * 0.45, pos[ti][1] - (dy / dist) * reach * 0.45, te + 0.68, { radius: 200, count: 16, parent: ctx.front });
      if (ev.verb) tag(ctx, ev.verb, { x: W / 2, y: V.isPortrait ? ctx.safe.b - 10 : ctx.safe.b - 20, at: te + 0.7, size: 46, tone: "solid", color: P.coral }).float(4, 3, 1);
    }
  };

  // 4 ── creature-explains: a mascot reacts beside an illustrated concept
  T["creature-explains"] = function (ctx, p) {
    var pts = arr(p.points).slice(0, 4);
    var sf = ctx.safe;
    var L = {};
    if (V.isPortrait) L = { ty: H * 0.12, ix: W * 0.5, iy: H * (p.title ? 0.36 : 0.32), is: 470, cx: W * 0.2, cy: H * 0.8, cs: 240, tx: W * 0.6, ty0: H * 0.6, tw: W * 0.62, dy: 112 };
    else if (V.isSquare) L = { ty: H * 0.12, ix: W * 0.6, iy: H * 0.43, is: 380, cx: W * 0.19, cy: H * 0.62, cs: 250, tx: W * 0.6, ty0: H * 0.72, tw: W * 0.66, dy: 92 };
    else L = { ty: H * 0.14, ix: W * 0.5, iy: H * 0.52, is: 470, cx: W * 0.17, cy: H * 0.64, cs: 300, tx: W * 0.8, ty0: H * 0.4, tw: W * 0.3, dy: 120 };
    if (!pts.length) { L.ix = V.isLandscape ? W * 0.6 : L.ix; L.is *= 1.12; }
    var all = [p.title || null].concat(pts);
    var tt = times(all, { start: 0.3 });
    if (p.title) say(ctx, p.title, { x: W / 2, y: L.ty, at: 0.15, size: V.isPortrait ? 82 : 86, maxLines: 2, maxWidth: sf.w, em: P.sun }).float(5, 4.4, 0.5);
    var hero = illus(p.illus || "bulb", { size: L.is, seed: 3, color: p.color });
    hero.at(L.ix, L.iy).enter(Math.max(0.35, tt[0] + 0.2), "pop", 1.1).float(14, 4.2, 3);
    // decorative orbiting sparkles round the concept
    var orb = sv("g", null, ctx.world);
    var sps = [];
    for (var i = 0; i < 5; i++) sps.push(sv("path", { d: sparkleD(14 + (i % 2) * 8), fill: [P.sun, P.aqua, P.pink, "#fff", P.mint][i] }, orb));
    var r0 = L.is * 0.62;
    onT(function (t) {
      var vis = t > tt[0] + 0.5 ? 1 : 0;
      orb.setAttribute("opacity", vis);
      for (var k = 0; k < sps.length; k++) { var a = t * 0.6 + (k / sps.length) * TAU; sps[k].setAttribute("transform", "translate(" + f2(L.ix + Math.cos(a) * r0) + " " + f2(L.iy + Math.sin(a) * r0 * 0.55) + ") scale(" + f2(0.6 + 0.4 * Math.sin(t * 3 + k)) + ")"); }
    });
    var cr = creature(p.creature || "pip", { size: L.cs, mood: p.mood || "neutral", look: [1, -0.3] });
    cr.at(L.cx, L.cy).enter(0.2, "drop").wave(0.9, 1.4);
    var moods = ["wow", "happy", "think", "excited"];
    pts.forEach(function (s, i) {
      var y = L.ty0 + i * L.dy;
      if (!V.isLandscape) y = L.ty0 + i * L.dy;
      var x = V.isLandscape ? L.tx : V.isPortrait ? W / 2 + 70 : L.tx;
      tag(ctx, s, { x: x, y: y, at: tt[i + 1], size: V.isPortrait ? 40 : 36, maxWidth: L.tw, color: SERIES[i % SERIES.length] });
      cr.feel(moods[i % moods.length], tt[i + 1]);
      cr.look(V.isLandscape ? 1 : 0.8, V.isLandscape ? -0.4 + i * 0.3 : 0.5, tt[i + 1] - 0.1);
      burst(ctx, hero.x + (i % 2 ? 1 : -1) * L.is * 0.4, hero.y - L.is * 0.3, tt[i + 1], { radius: 90, count: 8, size: 9, parent: ctx.front });
    });
    if (V.isPortrait) { /* tags centred to the right of the creature */ }
    cr.feel("happy", Math.min(D - 0.8, (tt[tt.length - 1] || 1) + 1.6));
  };

  // 5 ── morph-sequence: one shape liquid-morphs into the next on key words
  T["morph-sequence"] = function (ctx, p) {
    var steps = arr(p.steps).slice(0, 6);
    if (steps.length < 2) steps = [{ shape: "circle", label: "Idea" }, { shape: "star", label: "Spark" }];
    var tt = times(steps.map(function (s) { return s.label; }), { start: 0.3, minGap: 0.8 });
    var dur = 0.7;
    var size = shortSide() * (V.isPortrait ? 0.56 : 0.46);
    var my = V.isPortrait ? H * 0.42 : H * 0.44;
    if (p.title) say(ctx, p.title, { x: W / 2, y: V.isPortrait ? H * 0.12 : H * 0.12, at: 0.1, size: V.isPortrait ? 78 : 80, maxLines: 2, em: P.sun });
    // ripples behind
    var rip = sv("g", null, ctx.world);
    var rings = [];
    for (var i = 0; i < 3; i++) rings.push(sv("circle", { cx: W / 2, cy: my, r: 10, fill: "none", stroke: "#FFFFFF", "stroke-width": 6 }, rip));
    var ms = steps.map(function (s, i) { return { shape: s.shape, color: col(s.color, SERIES[i % SERIES.length]), at: i === 0 ? 0 : tt[i] - dur * 0.5 }; });
    var m = morph(ms, { x: W / 2, y: my, size: size, dur: dur, face: !!p.face });
    m.enter(Math.max(0.1, tt[0] - 0.3), "pop", 1).float(10, 3.8, 3);
    onT(function (t) {
      var last = -10;
      for (var k = 1; k < ms.length; k++) if (t >= ms[k].at) last = ms[k].at;
      for (var j = 0; j < rings.length; j++) {
        var q = (t - last - j * 0.12) / 1.1;
        var on = q >= 0 && q <= 1;
        rings[j].setAttribute("opacity", on ? f2((1 - q) * 0.5) : "0");
        if (on) rings[j].setAttribute("r", f2(size * 0.45 + q * size * 0.7));
      }
    });
    var ly = my + size * 0.62 + (V.isPortrait ? 110 : 80);
    steps.forEach(function (s, i) {
      var tIn = i === 0 ? Math.max(0.2, tt[0]) : tt[i] - 0.05;
      var lab = say(ctx, s.label || "", { x: W / 2, y: ly, at: tIn, size: V.isPortrait ? 92 : 84, maxLines: 2, maxWidth: ctx.safe.w * 0.9, em: P.sun, stagger: 0.05 });
      if (i < steps.length - 1) lab.exit(tt[i + 1] - 0.3, "shrink", 0.3);
      if (i > 0) burst(ctx, W / 2, my, tt[i] + dur * 0.25, { radius: size * 0.75, count: 18, size: 14, colors: [ms[i].color, "#FFFFFF", P.sun], parent: ctx.front });
    });
    // satellites that orbit and get flung outward on each morph
    var sat = [];
    for (var s2 = 0; s2 < 6; s2++) sat.push(sv("circle", { r: 9 + (s2 % 3) * 4, fill: SERIES[s2 % SERIES.length] }, ctx.world));
    onT(function (t) {
      var kick = 0;
      for (var k = 1; k < ms.length; k++) { var q = (t - ms[k].at) / 0.9; if (q >= 0 && q <= 1) kick = Math.max(kick, Math.sin(q * PI)); }
      for (var j = 0; j < sat.length; j++) {
        var a = t * (0.7 + j * 0.05) + (j / sat.length) * TAU, r = size * (0.68 + 0.25 * kick + 0.05 * Math.sin(t * 2 + j));
        sat[j].setAttribute("cx", f2(W / 2 + Math.cos(a) * r)); sat[j].setAttribute("cy", f2(my + Math.sin(a) * r * 0.7));
      }
    });
  };

  // 6 ── scale-compare: objects of very different sizes, camera zooms out to fit each
  T["scale-compare"] = function (ctx, p) {
    var items = arr(p.items).slice(0, 5).map(function (it) { return { illus: it.illus, label: it.label, note: it.note, v: Math.max(1e-9, Math.abs(num(it.value, 1))), color: it.color }; });
    if (items.length < 2) items = [{ illus: "moon", label: "Moon", v: 1 }, { illus: "earth", label: "Earth", v: 3.7 }];
    items.sort(function (a, b) { return a.v - b.v; });
    var minV = items[0].v;
    var ratioCap = 2e4;
    var vis = items.map(function (it) { return Math.min(ratioCap, it.v / minV); });
    var base = 160;
    var tt = times([p.title || null].concat(items.map(function (i) { return i.label; })), { start: 0.3, minGap: 0.7 });
    var baseY = 0;
    var x = 0;
    var placed = items.map(function (it, i) {
      var d = base * vis[i];
      if (i > 0) x += placed_prev_w(i) * 0.5 + d * 0.5 + d * 0.12 + 30;
      var cx = x;
      var a = illus(it.illus, { size: d, seed: i * 3 + 1, color: it.color, shadow: "glow" });
      var rr = (a.info.r || 100) / 100;
      a.at(cx, baseY - d * 0.5 * rr).enter(tt[i + 1] - 0.05, "pop", 0.9);
      a.float(d * 0.02, 4 + i * 0.5, 2);
      // label inside the world so it scales with its object
      var lg = sv("g", { transform: "translate(" + f2(cx) + " " + f2(baseY + d * 0.08 + 24 * vis[i] / vis[i]) + ")" }, ctx.world);
      var fs = d * 0.16;
      var lab = it.label || "";
      var wTxt = Math.max(fs * 2.4, lab.length * fs * 0.6) + fs * 1.2;
      var lgi = sv("g", null, lg);
      sv("rect", { x: -wTxt / 2, y: 0, width: wTxt, height: fs * 1.55, rx: fs * 0.77, fill: "#FFFFFF" }, lgi);
      sv("rect", { x: -wTxt / 2, y: fs * 1.55 - fs * 0.16, width: wTxt, height: fs * 0.16, rx: fs * 0.08, fill: "#1A1240", opacity: 0.12 }, lgi);
      var tx = sv("text", { x: 0, y: fs * 1.1, "text-anchor": "middle", "font-size": f2(fs), "font-weight": 800, fill: P.ink, class: "fv-svgtext" }, lgi);
      tx.textContent = lab;
      if (it.note) { var nt = sv("text", { x: 0, y: fs * 2.55, "text-anchor": "middle", "font-size": f2(fs * 0.62), "font-weight": 700, fill: "#FFFFFF", class: "fv-svgtext", opacity: 0.85 }, lgi); nt.textContent = it.note; }
      var la = new Actor(lgi).enter(tt[i + 1] + 0.15, "pop", 0.8);
      void la;
      it.d = d; it.x = cx; it.a = a;
      return it;
    });
    function placed_prev_w(i) { return base * vis[i - 1]; }
    // ground line under everything
    var x0 = placed[0].x - placed[0].d, x1 = placed[placed.length - 1].x + placed[placed.length - 1].d;
    sv("line", { x1: f2(x0), y1: 0, x2: f2(x1), y2: 0, stroke: "#FFFFFF", "stroke-width": base * 0.03, opacity: 0.0 }, ctx.world);
    // camera: frame item i together with its smaller neighbour
    var cam = ctx.cam;
    cam.push = 0; cam.breathe = 0.01;
    function frame(i) {
      var it = placed[i], prev = placed[Math.max(0, i - 1)];
      var left = prev.x - prev.d * 0.6, right = it.x + it.d * 0.78;
      var hgt = it.d * 1.25 + it.d * 0.5;
      var z = Math.min((W * 0.86) / Math.max(1, right - left), (H * 0.72) / hgt);
      if (i === 0) z = Math.min(z, (H * 0.42) / it.d);
      return { x: (left + right) / 2, y: -it.d * 0.45 + (p.title && i === 0 ? -it.d * 0.15 : 0), z: z };
    }
    var f0 = frame(0);
    cam.x = f0.x; cam.y = f0.y; cam.z = f0.z;
    for (var i = 1; i < placed.length; i++) { var fi = frame(i); cam.to(Math.min(tt[i + 1] - 0.6, D - 1.1), fi, 0.95, "inOut"); }
    var fAll = { x: (placed[0].x + placed[placed.length - 1].x) / 2, y: -placed[placed.length - 1].d * 0.45, z: 0 };
    var span = placed[placed.length - 1].x + placed[placed.length - 1].d * 0.6 - (placed[0].x - placed[0].d);
    fAll.z = Math.min((W * 0.86) / span, (H * 0.68) / (placed[placed.length - 1].d * 1.6));
    var lastT2 = tt[tt.length - 1] + 1.2;
    if (lastT2 < D - 0.8 && placed.length > 2) cam.to(lastT2, fAll, 1.2, "inOut");
    if (p.title) say(ctx, p.title, { x: W / 2, y: V.isPortrait ? H * 0.12 : H * 0.12, at: 0.1, size: V.isPortrait ? 78 : 80, maxLines: 2, em: P.sun }).float(4, 4, 0.4);
    if (vis[vis.length - 1] >= ratioCap) tag(ctx, "not to scale", { x: W / 2, y: ctx.safe.b, at: 0.5, size: 26, tone: "solid", color: P.violet, float: false });
  };

  // 7 ── population-grid: a crowd of mini creatures, a fraction lights up
  T["population-grid"] = function (ctx, p) {
    var total = Math.max(1, num(p.total, 100)), hl = clamp(num(p.highlight, 25), 0, total);
    var cells = Math.round(clamp(total, 4, 100));
    var hc = Math.round((hl / total) * cells);
    if (hl > 0 && hc === 0) hc = 1;
    var cols, rows;
    var gx0, gy0, gw, gh, nx, ny, numSize;
    var sf = ctx.safe;
    var ratio = V.isLandscape ? 1.5 : V.isPortrait ? 0.75 : 1.2;
    cols = Math.max(2, Math.round(Math.sqrt(cells * ratio)));
    rows = Math.ceil(cells / cols);
    if (V.isLandscape) { gx0 = sf.x + sf.w * 0.02; gw = sf.w * 0.56; gy0 = sf.y + 20; gh = sf.h - 20; nx = sf.x + sf.w * 0.8; ny = H * 0.42; numSize = 220; }
    else if (V.isPortrait) { gx0 = sf.x; gw = sf.w; gy0 = H * 0.36; gh = sf.b - gy0; nx = W / 2; ny = H * 0.17; numSize = 230; }
    else { gx0 = sf.x + sf.w * 0.05; gw = sf.w * 0.9; gy0 = H * 0.36; gh = sf.b - gy0; nx = W / 2; ny = H * 0.15; numSize = 170; }
    var cell = Math.min(gw / cols, gh / rows);
    var ox = gx0 + (gw - cell * cols) / 2, oy = gy0 + (gh - cell * rows) / 2;
    var c0 = col(p.color, "#9D93D8"), c1 = col(p.highlightColor, P.sun);
    var tt = times([p.title || null, p.label], { start: 0.3 });
    var tH = Math.max(tt[1] - 0.1, Math.min(D * 0.5, 2.2));
    var g = sv("g", null, ctx.world);
    // which cells highlight: spread through the crowd deterministically
    var order = []; for (var i = 0; i < cells; i++) order.push(i);
    var rnd = V.makeRand(cells * 7 + hc);
    for (i = order.length - 1; i > 0; i--) { var j = Math.floor(rnd() * (i + 1)); var tmp = order[i]; order[i] = order[j]; order[j] = tmp; }
    var hiSet = {}; order.slice(0, hc).forEach(function (k) { hiSet[k] = 1; });
    var items = [];
    var sc = (cell * 0.84) / 90;
    for (i = 0; i < cells; i++) {
      var r = Math.floor(i / cols), c = i % cols;
      var x = ox + (c + 0.5) * cell, y = oy + (r + 0.5) * cell;
      var wrap = sv("g", null, g);
      var m = mini(wrap, i % 5 === 0 ? tint(c0, 0.15) : c0, i);
      var hi = null;
      if (hiSet[i]) { hi = mini(wrap, c1, i); hi.setAttribute("opacity", "0"); }
      items.push({ g: wrap, m: m, hi: hi, x: x, y: y, d: (r + c) / (rows + cols), ph: hash01(i) * 6 });
    }
    var tIn = 0.2, spanIn = Math.min(1.2, D * 0.22);
    onT(function (t) {
      var hq = clamp((t - tH) / 0.5, 0, 1);
      for (var i = 0; i < items.length; i++) {
        var it = items[i];
        var q = clamp((t - tIn - it.d * spanIn) / 0.6, 0, 1);
        var s = E.pop(q) * sc;
        var by = Math.sin(t * 3 + it.ph) * cell * 0.03;
        if (it.hi) {
          var hop = hq > 0 ? -Math.abs(Math.sin((t - tH) * 6 + it.ph * 0.3)) * cell * 0.18 * (t - tH < 2.2 ? 1 : 0.35) : 0;
          by += hop;
          it.hi.setAttribute("opacity", f2(hq));
          s *= 1 + 0.12 * hq;
        }
        it.g.setAttribute("transform", "translate(" + f2(it.x) + " " + f2(it.y + by) + ") scale(" + f2(Math.max(0.001, s)) + ")");
        if (!it.hi) it.g.setAttribute("opacity", f2(1 - 0.45 * hq));
      }
    });
    var pct = (hl / total) * 100;
    var disp = p.display ? str(p.display) : null;
    if (disp) {
      say(ctx, disp, { x: nx, y: ny, at: tH, size: numSize * 0.75, maxLines: 1, maxWidth: V.isLandscape ? sf.w * 0.38 : sf.w, em: c1, color: c1 });
    } else {
      bigNumber(ctx, { value: pct, suffix: "%", decimals: pct % 1 && pct < 10 ? 1 : 0, at: tH, x: nx, y: ny, size: numSize, color: c1 });
    }
    var lab = say(ctx, p.label || "", { x: nx, y: ny + numSize * 0.62 + 34, at: tH + 0.2, size: V.isLandscape ? 48 : 46, maxLines: 3, maxWidth: V.isLandscape ? sf.w * 0.36 : sf.w * 0.9, stagger: 0.04 });
    lab.float(3, 4, 0.3);
    if (p.title) say(ctx, p.title, { x: V.isLandscape ? nx : W / 2, y: V.isLandscape ? H * 0.16 : (V.isPortrait ? H * 0.06 : H * 0.05) + 6, at: 0.1, size: V.isLandscape ? 56 : 48, maxLines: 2, maxWidth: V.isLandscape ? sf.w * 0.38 : sf.w });
    if (total > 100) tag(ctx, "each = " + V.format(total / cells, total / cells < 10 ? 1 : 0), { x: V.isLandscape ? nx : W / 2, y: V.isLandscape ? ny + numSize + 150 : gy0 - 26, at: tH + 0.5, size: 26, tone: "solid", color: P.violet });
    burst(ctx, nx, ny, tH + 0.1, { radius: 220, count: 14, parent: ctx.front });
  };

  // 8 ── timeline-orbit: events as planets around an orbit; a comet visits each in turn
  T["timeline-orbit"] = function (ctx, p) {
    var evs = arr(p.events).slice(0, 6);
    if (evs.length < 2) evs = [{ year: "1900", label: "Start" }, { year: "2000", label: "Now" }];
    var n = evs.length;
    var cx = W / 2, cy = V.isPortrait ? H * 0.5 : H * 0.54;
    var rx = V.isPortrait ? W * 0.34 : V.isSquare ? W * 0.36 : W * 0.33;
    var ry = V.isPortrait ? H * 0.27 : V.isSquare ? H * 0.28 : H * 0.29;
    if (p.title) { say(ctx, p.title, { x: W / 2, y: V.isPortrait ? H * 0.09 : H * 0.1, at: 0.1, size: V.isPortrait ? 74 : 72, maxLines: 2, em: P.sun }).float(4, 4, 0.4); cy += V.isPortrait ? 40 : 46; ry *= 0.88; }
    var labTop = ctx.safe.y + (p.title ? (V.isPortrait ? 200 : 150) : 40);
    var tt = times(evs.map(function (e) { return e.label; }), { start: 0.6, minGap: 0.6 });
    var orbit = sv("g", null, ctx.world);
    sv("ellipse", { cx: cx, cy: cy, rx: rx, ry: ry, fill: "none", stroke: "#FFFFFF", "stroke-width": 26, opacity: 0.06 }, orbit);
    var dashed = sv("ellipse", { cx: cx, cy: cy, rx: rx, ry: ry, fill: "none", stroke: "#FFFFFF", "stroke-width": 5, "stroke-dasharray": "2 22", "stroke-linecap": "round", opacity: 0.55 }, orbit);
    var lit = sv("path", { fill: "none", stroke: P.sun, "stroke-width": 8, "stroke-linecap": "round", opacity: 0.9 }, orbit);
    var center = illus(p.center || "sun", { size: Math.min(rx, ry) * 0.7, seed: 1 });
    center.at(cx, cy).enter(0.1, "pop").float(6, 5, 1);
    var a0 = -PI * 0.92;
    var angs = evs.map(function (e, i) { return a0 + (i / n) * TAU * (n > 4 ? 1 : 0.85); });
    function pt(a) { return [cx + Math.cos(a) * rx, cy + Math.sin(a) * ry]; }
    var pal = [P.coral, P.sky, P.mint, P.pink, P.orange, P.violet];
    evs.forEach(function (e, i) {
      var q = pt(angs[i]);
      var a = illus(e.illus || "planet", { size: shortSide() * (n > 4 ? 0.13 : 0.15), seed: i * 4 + 2, color: e.illus ? null : pal[i % pal.length], shadow: "glow" });
      a.at(q[0], q[1]).enter(tt[i] - 0.05, "pop", 0.9).float(6, 3 + i * 0.3, 4);
      var out = [Math.cos(angs[i]), Math.sin(angs[i])];
      var lx = q[0] + out[0] * (V.isPortrait ? 40 : 120), ly = q[1] + out[1] * 110 + (out[1] > 0 ? 40 : -30);
      lx = clamp(lx, ctx.safe.x + 170, ctx.safe.r - 170);
      ly = clamp(ly, labTop, ctx.safe.b - 60);
      if (e.year) tag(ctx, e.year, { x: lx, y: ly - 32, at: tt[i] + 0.05, size: 38, tone: "solid", color: pal[i % pal.length], float: false });
      tag(ctx, e.label, { x: lx, y: ly + 32, at: tt[i] + 0.18, size: 30, maxWidth: V.isPortrait ? 400 : 420, color: pal[i % pal.length] });
      burst(ctx, q[0], q[1], tt[i] + 0.05, { radius: 110, count: 10, size: 9, parent: ctx.front });
    });
    // comet that travels the orbit, arriving at each event on time
    var comet = sv("g", null, ctx.front);
    var tail = [];
    for (var k = 0; k < 10; k++) tail.push(sv("circle", { r: 14 - k, fill: k < 3 ? "#FFFFFF" : P.sun, opacity: f2(1 - k / 10) }, comet));
    sv("circle", { r: 34, fill: glow(P.sun, 0.8) }, comet);
    function angAt(t) {
      if (t <= tt[0]) return angs[0] - 0.9 * (1 - E.outCubic(clamp(t / Math.max(0.1, tt[0]), 0, 1)));
      for (var i = 0; i < n - 1; i++) if (t < tt[i + 1]) return lerp(angs[i], angs[i + 1], E.inOut(clamp((t - tt[i]) / Math.max(0.1, tt[i + 1] - tt[i]), 0, 1)));
      return angs[n - 1] + (t - tt[n - 1]) * 0.25;
    }
    onT(function (t) {
      for (var k = 0; k < tail.length; k++) { var q = pt(angAt(t - k * 0.03)); tail[k].setAttribute("cx", f2(q[0])); tail[k].setAttribute("cy", f2(q[1])); }
      var a1 = angAt(t), aS = angs[0] - 0.9;
      var steps = 40, d = "";
      for (var s = 0; s <= steps; s++) { var q2 = pt(lerp(aS, a1, s / steps)); d += (s ? "L" : "M") + f2(q2[0]) + " " + f2(q2[1]); }
      lit.setAttribute("d", d);
      dashed.setAttribute("stroke-dashoffset", f2(-t * 20));
    });
  };

  // 9 ── cause-effect: illustrated chain reaction
  T["cause-effect"] = function (ctx, p) {
    var steps = arr(p.steps).slice(0, 5);
    if (steps.length < 2) steps = [{ illus: "sun", label: "Heat" }, { illus: "drop", label: "Rain" }];
    var n = steps.length;
    var sf = ctx.safe;
    var top = p.title ? (V.isPortrait ? H * 0.17 : H * 0.25) : sf.y + 40;
    if (p.title) say(ctx, p.title, { x: W / 2, y: V.isPortrait ? H * 0.09 : H * 0.12, at: 0.1, size: V.isPortrait ? 74 : 76, maxLines: 2, em: P.sun }).float(4, 4, 0.4);
    var pos = [];
    var size;
    if (V.isPortrait) {
      size = Math.min(300, (sf.b - top) / n * 0.62);
      for (var i = 0; i < n; i++) pos.push([W * (i % 2 ? 0.66 : 0.34), lerp(top + size * 0.55, sf.b - size * 0.75, n === 1 ? 0.5 : i / (n - 1))]);
    } else {
      size = Math.min(V.isSquare ? 250 : 300, (sf.w / n) * 0.66);
      for (i = 0; i < n; i++) pos.push([lerp(sf.x + size * 0.6, sf.r - size * 0.6, i / (n - 1)), (top + sf.b) / 2 - 10 + (i % 2 ? 50 : -50)]);
    }
    var tt = times(steps.map(function (s) { return s.label; }), { start: 0.4, minGap: 0.7 });
    var acts = steps.map(function (s, i) {
      var a = illus(s.illus, { size: size, seed: i * 2 + 1, color: s.color });
      a.at(pos[i][0], pos[i][1]).enter(tt[i] - 0.05, i ? "spin" : "pop", 0.9).float(8, 3.2 + i * 0.3, 3);
      // shake on hit
      a.hook(function (t) { void t; });
      var lx = pos[i][0] + (V.isPortrait ? (i % 2 ? -1 : 1) * (size * 0.5 + 170) : 0);
      var ly = pos[i][1] + (V.isPortrait ? 0 : size * 0.5 * (a.info.r / 100) + 58);
      tag(ctx, s.label, { x: lx, y: ly, at: tt[i] + 0.12, size: V.isPortrait ? 40 : 34, maxWidth: V.isPortrait ? 360 : Math.max(260, sf.w / n), color: SERIES[i % SERIES.length] });
      return a;
    });
    for (i = 0; i < n - 1; i++) (function (i) {
      var A = pos[i], B = pos[i + 1];
      var ang = Math.atan2(B[1] - A[1], B[0] - A[0]);
      var ra = size * 0.55, rb = size * 0.58;
      var x1 = A[0] + Math.cos(ang) * ra, y1 = A[1] + Math.sin(ang) * ra, x2 = B[0] - Math.cos(ang) * rb, y2 = B[1] - Math.sin(ang) * rb;
      var t0 = tt[i + 1] - 0.75;
      var cn = connector(ctx, x1, y1, x2, y2, { at: t0, dur: 0.6, bend: i % 2 ? 0.25 : -0.25, width: 10, color: "#FFFFFF", opacity: 0.8 });
      // arrow head
      var hd = sv("path", { d: "M0 0 L-26 -16 L-20 0 L-26 16Z", fill: "#FFFFFF" }, ctx.world);
      var endAng = Math.atan2(y2 - cn.mid[1], x2 - cn.mid[0]) * 180 / PI;
      // energy ball travelling the connector
      var ball2 = sv("g", null, ctx.front);
      sv("circle", { r: 40, fill: glow(P.sun, 0.9) }, ball2);
      sv("circle", { r: 13, fill: "#FFFBE6" }, ball2);
      onT(function (t) {
        var q = clamp((t - t0) / 0.6, 0, 1);
        hd.setAttribute("opacity", q >= 1 ? "1" : "0");
        hd.setAttribute("transform", "translate(" + f2(x2) + " " + f2(y2) + ") rotate(" + f2(endAng) + ") scale(" + f2(q >= 1 ? E.pop(clamp((t - t0 - 0.6) / 0.4, 0, 1)) : 0) + ")");
        var on = q > 0 && q < 1;
        ball2.style.visibility = on ? "" : "hidden";
        if (on) { var pp = cn.point(E.inOut(q)); ball2.setAttribute("transform", "translate(" + f2(pp[0]) + " " + f2(pp[1]) + ") scale(" + f2(0.8 + 0.4 * Math.sin(q * PI)) + ")"); }
      });
      // previous item gives a jolt as the energy leaves; next pops (its entrance) and bursts
      acts[i].to(t0, { r: -10 }, 0.15, "outCubic").to(t0 + 0.15, { r: 0 }, 0.6, "pop");
      burst(ctx, B[0], B[1], tt[i + 1] + 0.05, { radius: size * 0.7, count: 14, size: 11, parent: ctx.front });
    })(i);
  };

  // 10 ── big-number-world: a giant counting number in front of an illustrated world
  T["big-number-world"] = function (ctx, p) {
    var tt = times([p.label], { start: 0.3 });
    var hero = p.illus || "earth";
    var hs = shortSide() * (V.isPortrait ? 0.62 : 0.58);
    var hx = W / 2, hy = V.isPortrait ? H * 0.36 : H * 0.42;
    var h = illus(hero, { size: hs, seed: 5 });
    h.at(hx, hy).enter(0.05, "grow", 1.1).float(10, 5, 2);
    // orbiting ring of small things
    var ring = sv("g", null, ctx.world);
    var orbs = [];
    var kinds = ["coin", "star", "moon", "planet", "bolt", "heart"];
    var dk = arr(p.orbiters).length ? arr(p.orbiters) : [kinds[Math.floor(hash01(str(hero).length) * 3)]];
    for (var i = 0; i < 6; i++) {
      var o = illus(dk[i % dk.length], { parent: ring, size: hs * 0.14, seed: i + 10, shadow: "none", color: SERIES[i % SERIES.length] });
      CUR.reg.actors.splice(CUR.reg.actors.indexOf(o), 1);
      orbs.push(o);
    }
    var rx = hs * 0.82, ry = hs * 0.24;
    onT(function (t) {
      var q = E.outCubic(clamp((t - 0.4) / 1.2, 0, 1));
      for (var i = 0; i < orbs.length; i++) {
        var a = t * 0.5 + (i / orbs.length) * TAU;
        var x = hx + Math.cos(a) * rx * q, y = hy + Math.sin(a) * ry * q;
        var front = Math.sin(a) > 0;
        var o = orbs[i];
        o.x = x; o.y = y; o.s = (hs * 0.14 / 200) * (front ? 1.1 : 0.75) * q;
        o._update(t);
        o.node.style.opacity = front ? 1 : 0.55;
        if (o._front !== front) { (front ? ctx.front : ring).appendChild(o.node); o._front = front; }
      }
    });
    var ny = V.isPortrait ? H * 0.64 : H * 0.7;
    if (V.isLandscape) ny = H * 0.66;
    var numSize = V.isPortrait ? 250 : 230;
    bigNumber(ctx, { value: p.value, prefix: p.prefix, suffix: p.suffix, decimals: p.decimals, at: Math.max(0.3, tt[0] - 0.9), x: W / 2, y: ny, size: numSize, color: p.color });
    say(ctx, p.label || "", { x: W / 2, y: ny + numSize * 0.55 + 46, at: tt[0], size: V.isPortrait ? 56 : 52, maxLines: 2, maxWidth: ctx.safe.w * 0.86, em: P.sun, stagger: 0.05 });
    burst(ctx, W / 2, ny, Math.max(0.3, tt[0] - 0.9) + 1.4, { radius: 360, count: 18, size: 14, parent: ctx.front });
    particles(ctx, { kind: "sparks", count: 18, parent: ctx.mid, area: { x: hx - hs, y: hy - hs, w: hs * 2, h: hs * 2 }, speed: 30, size: 3.4, colors: [P.sun, "#FFFFFF", P.aqua] });
  };

  // 11 ── split-worlds: two contrasting illustrated worlds with a liquid divider
  T["split-worlds"] = function (ctx, p) {
    var sides = [p.left || {}, p.right || {}];
    var port = V.isPortrait;
    var tt = times([sides[0].title, sides[1].title], { start: 0.3, minGap: 0.8 });
    // Each side gets its own complete world, clipped by an animated wavy divider.
    var clipIds = [], clipPaths = [], sideG = [];
    sides.forEach(function (s, i) {
      var id = nid("sp");
      var cp = sv("clipPath", { id: id }, ctx.defs);
      clipPaths.push(sv("path", null, cp));
      clipIds.push(id);
      var g = sv("g", { "clip-path": "url(#" + id + ")" }, ctx.svg);
      ctx.svg.insertBefore(g, ctx.front);
      sideG.push(g);
    });
    var saved = { bg: ctx.bg, far: ctx.far, mid: ctx.mid, ground: ctx.ground, groundY: ctx.groundY, tone: ctx.tone };
    var tones = [];
    sides.forEach(function (s, i) {
      var shift = port ? (i ? 0 : -H * 0.24) : (i ? W / 4 : -W / 4);
      var shiftG = sv("g", { transform: port ? "translate(0 " + f2(shift) + ")" : "translate(" + f2(shift) + " 0)" }, sideG[i]);
      ctx.bg = sv("g", null, shiftG);
      ctx.far = sv("g", null, shiftG); ctx.cam._layers.push({ g: ctx.far, depth: 0.3, last: "" });
      ctx.mid = sv("g", null, shiftG); ctx.cam._layers.push({ g: ctx.mid, depth: 0.6, last: "" });
      var wn = s.world || worldFor(s.illus, i ? "dusk" : "sky");
      ctx.groundY = null;
      drawWorld(ctx, wn, {});
      tones.push(ctx.tone);
      var sideMid = sv("g", null, sideG[i]); ctx.cam._layers.push({ g: sideMid, depth: 1, last: "" });
      s._g = sideMid;
      s._ground = ctx.groundY ? (function (gy, sh) { return function (x) { return port ? gy(x) + sh : gy(x - sh); }; })(ctx.groundY, shift) : null;
    });
    ctx.bg = saved.bg; ctx.far = saved.far; ctx.mid = saved.mid; ctx.tone = saved.tone; ctx.groundY = saved.groundY;
    var centers = port ? [[W / 2, H * 0.3], [W / 2, H * 0.8]] : [[W * 0.25, H * 0.5], [W * 0.75, H * 0.5]];
    var hs = port ? Math.min(W * 0.46, H * 0.2) : Math.min(W * 0.24, H * 0.42);
    sides.forEach(function (s, i) {
      var c = centers[i];
      var a = illus(s.illus || (i ? "factory" : "tree"), { parent: s._g, size: hs, seed: i * 6 + 2 });
      var floating = !s._ground || COSMIC[a.name] || MICRO[a.name];
      var gy = s._ground ? s._ground(c[0]) - (a.info.ground != null ? a.info.ground : 100) * a.s : c[1];
      a.at(c[0], port && i ? c[1] : floating ? c[1] + (port ? 20 : 30) : Math.min(gy, c[1] + hs * 0.5)).enter(tt[i] - 0.1, "pop", 1).float(floating ? 12 : 0, 4 + i, floating ? 3 : 1.5);
      var ty = port ? (i ? H / 2 + 175 : H * 0.09) : H * 0.17;
      if (s.title) say(ctx, s.title, { x: c[0], y: ty, at: tt[i], size: port ? 64 : 70, maxLines: 2, maxWidth: port ? W * 0.8 : W * 0.4, em: P.sun, shadow: tones[i] === "light" ? "#1F5FA8" : "#1A1240" });
      arr(s.points).slice(0, 2).forEach(function (pt, k) {
        var py = port ? c[1] + hs * 0.55 + 46 + k * 80 : H * 0.76 + k * 84;
        tag(ctx, pt, { x: c[0], y: py, at: tt[i] + 0.35 + k * 0.3, size: port ? 34 : 34, maxWidth: port ? W * 0.8 : W * 0.4, color: SERIES[(i * 2 + k) % SERIES.length] });
      });
    });
    // animated wavy divider
    var line = sv("path", { fill: "none", stroke: "#FFFFFF", "stroke-width": 14, "stroke-linecap": "round" }, ctx.front);
    var line2 = sv("path", { fill: "none", stroke: "#1A1240", "stroke-width": 14, opacity: 0.18, transform: port ? "translate(0 10)" : "translate(10 0)" }, ctx.front);
    ctx.front.insertBefore(line2, line);
    var ext = Math.max(W, H);
    onT(function (t) {
      var open = E.outCubic(clamp(t / 0.9, 0, 1));
      var pts = [], i;
      for (i = 0; i <= 12; i++) {
        var q = i / 12;
        var w = Math.sin(q * 7 + t * 2.2) * 22 + Math.sin(q * 3 - t * 1.4) * 14;
        pts.push(port ? [lerp(-60, W + 60, q), H / 2 + w] : [W / 2 + w, lerp(-60, H + 60, q)]);
      }
      var dd = smoothOpen(pts);
      line.setAttribute("d", dd); line2.setAttribute("d", dd);
      var off = (1 - open) * (port ? H : W) * 0.5;
      // side A region (left/top) and side B region (right/bottom)
      var a = port ? dd + " L" + (W + ext) + " " + (-ext) + " L" + (-ext) + " " + (-ext) + "Z" : dd + " L" + (-ext) + " " + (H + ext) + " L" + (-ext) + " " + (-ext) + "Z";
      var b = port ? dd + " L" + (W + ext) + " " + (H + ext) + " L" + (-ext) + " " + (H + ext) + "Z" : dd + " L" + (W + ext) + " " + (H + ext) + " L" + (W + ext) + " " + (-ext) + "Z";
      clipPaths[0].setAttribute("d", a); clipPaths[1].setAttribute("d", b);
      clipPaths[0].setAttribute("transform", port ? "translate(0 " + f2(-off) + ")" : "translate(" + f2(-off) + " 0)");
      clipPaths[1].setAttribute("transform", port ? "translate(0 " + f2(off) + ")" : "translate(" + f2(off) + " 0)");
      line.setAttribute("opacity", f2(open)); line2.setAttribute("opacity", f2(open * 0.18));
    });
    var vs = sv("g", null, ctx.front);
    sv("circle", { r: 74, fill: "#1A1240", opacity: 0.25, cx: 6, cy: 8 }, vs);
    sv("circle", { r: 74, fill: grad(P.coral) }, vs);
    sv("circle", { r: 74, fill: "none", stroke: "#FFFFFF", "stroke-width": 10 }, vs);
    var vt = sv("text", { y: 18, "text-anchor": "middle", "font-size": 52, "font-weight": 900, fill: "#FFFFFF", class: "fv-svgtext" }, vs);
    vt.textContent = str(p.vs || "VS").slice(0, 4);
    new Actor(vs).at(W / 2, H / 2).enter(0.6, "spin", 1).pulse(0.04, 1.4);
  };

  // 12 ── pillar-chart: glowing pillars rising from an illustrated stage
  T["pillar-chart"] = function (ctx, p) {
    var bars = arr(p.bars).slice(0, 6);
    if (!bars.length) bars = [{ label: "A", value: 3 }, { label: "B", value: 7 }];
    var n = bars.length;
    var sf = ctx.safe;
    var maxV = Math.max.apply(null, bars.map(function (b) { return Math.abs(num(b.value, 0)); })) || 1;
    var top = p.title ? sf.y + (V.isPortrait ? 210 : 170) : sf.y + 70;
    if (p.title) say(ctx, p.title, { x: W / 2, y: sf.y + (V.isPortrait ? 80 : 60), at: 0.1, size: V.isPortrait ? 74 : 76, maxLines: 2, em: P.sun }).float(4, 4, 0.4);
    var baseY = sf.b - (V.isPortrait ? 120 : 90);
    var slot = sf.w / n;
    var bw = Math.min(slot * 0.56, 190);
    var maxH = baseY - top - 150;
    var tt = times(bars.map(function (b) { return b.label; }), { start: 0.4, minGap: 0.3 });
    // stage platform
    sv("ellipse", { cx: W / 2, cy: baseY + 26, rx: sf.w * 0.56, ry: 46, fill: "#1A1240", opacity: 0.25 }, ctx.world);
    sv("rect", { x: sf.x - 30, y: baseY, width: sf.w + 60, height: 26, rx: 13, fill: grad("#7E66E8") }, ctx.world);
    bars.forEach(function (b, i) {
      var v = num(b.value, 0), hgt = Math.max(24, (Math.abs(v) / maxV) * maxH);
      var c = col(b.color, SERIES[i % SERIES.length]);
      var x = sf.x + slot * (i + 0.5);
      var t0 = tt[i] - 0.1, grow = 0.9;
      var g = sv("g", { transform: "translate(" + f2(x) + " " + f2(baseY) + ")" }, ctx.world);
      var halo = sv("ellipse", { cx: 0, cy: 0, rx: bw * 1.1, ry: bw * 0.5, fill: glow(c, 0.55) }, g);
      var pill = sv("g", null, g);
      var body = sv("rect", { x: -bw / 2, width: bw, rx: bw / 2, fill: vgrad([tint(c, 0.35), c, shade(c, 0.25)], "pill" + c) }, pill);
      var side = sv("rect", { x: bw * 0.12, width: bw * 0.38, rx: bw * 0.19, fill: shade(c, 0.3), opacity: 0.35 }, pill);
      var shine = sv("rect", { x: -bw * 0.32, width: bw * 0.14, rx: bw * 0.07, fill: "#FFFFFF", opacity: 0.5 }, pill);
      var rider = b.illus ? illus(b.illus, { parent: g, size: bw * 0.95, seed: i + 3, shadow: "none" }) : null;
      if (rider) CUR.reg.actors.splice(CUR.reg.actors.indexOf(rider), 1);
      var mg = null;
      if (!rider) { mg = sv("g", null, g); mini(mg, tint(c, 0.15), i); }
      var vt = sv("text", { "text-anchor": "middle", "font-size": f2(Math.min(64, bw * 0.42)), "font-weight": 900, fill: "#FFFFFF", class: "fv-svgtext fv-svgstick" }, g);
      var dec = Math.max(0, Math.min(2, num(p.decimals, v % 1 ? 1 : 0)));
      onT(function (t) {
        var q = clamp((t - t0) / grow, 0, 1), e = E.pop(q), h = Math.max(0.1, hgt * e);
        var vis = q > 0;
        g.style.visibility = vis ? "" : "hidden";
        if (!vis) return;
        body.setAttribute("y", f2(-h)); body.setAttribute("height", f2(h + bw * 0.1));
        side.setAttribute("y", f2(-h + bw * 0.12)); side.setAttribute("height", f2(Math.max(0, h - bw * 0.2)));
        shine.setAttribute("y", f2(-h + bw * 0.22)); shine.setAttribute("height", f2(Math.max(0, h * 0.6 - bw * 0.2)));
        halo.setAttribute("opacity", f2(0.6 + 0.4 * Math.sin(t * 2 + i)));
        var ry = -h - bw * 0.5 + Math.sin(t * 3 + i) * 6;
        if (rider) { rider.x = 0; rider.y = ry - bw * 0.1; rider.s = (bw * 0.95 / 200) * Math.min(1, q * 2); rider._update(t); }
        if (mg) mg.setAttribute("transform", "translate(0 " + f2(ry) + ") scale(" + f2((bw / 95) * Math.min(1, q * 2)) + ")");
        vt.setAttribute("y", f2(ry - bw * 0.62));
        vt.textContent = str(p.prefix) + V.format(lerp(0, v, E.outCubic(q)), dec) + str(p.unit || p.suffix);
      });
      tag(ctx, b.label, { x: x, y: baseY + 70, at: t0 + 0.2, size: V.isPortrait ? 30 : 32, maxWidth: Math.max(160, slot * 0.98), color: c, float: false });
    });
  };

  S.templateIds = Object.keys(T);

  /** Render a template into root. */
  S.render = function (id, root, props) {
    var fn = T[id];
    if (!fn) throw new Error("Unknown template: " + id);
    props = props || {};
    var world = props.world || props.setting || DEFAULT_WORLD[id] || "space";
    if (world === "meadow") world = "sky";
    if (id === "big-number-world" && !props.world) world = worldFor(props.illus || "earth", "studio");
    var ctx = S.scene(root, { world: world, sunLow: id === "title-landscape" });
    fn(ctx, props);
    return ctx;
  };
  var DEFAULT_WORLD = {
    "title-landscape": "sky", "cosmic-zoom": "none", "micro-world": "micro", "creature-explains": "sky", "morph-sequence": "studio",
    "scale-compare": "space", "population-grid": "studio", "timeline-orbit": "space", "cause-effect": "dusk", "big-number-world": "space",
    "split-worlds": "none", "pillar-chart": "studio",
  };

  // ───────────────────────── fallback: floating illustrated scene + friendly captions ─────────────────────────
  var FB_THEMES = [
    [/\b(cell|cells|bacteri|virus|dna|gene|molecul|protein|atom|microb|germ)/i, "micro", "cell", "zib"],
    [/\b(ocean|sea|fish|whale|water|river|coral|wave)/i, "ocean", "fish", "nova"],
    [/\b(brain|body|heart|blood|muscle|organ|health|doctor|sleep)/i, "body", "brain", "momo"],
    [/\b(money|dollar|price|econom|market|invest|bank|cost|tax|pay)/i, "studio", "coin", "pip"],
    [/\b(city|cities|house|build|people|country|farm|tree|forest|plant|nature)/i, "sky", "city", "pip"],
    [/\b(computer|ai|robot|internet|software|chip|data|phone|tech)/i, "studio", "chip", "nova"],
  ];
  function captionPhrases(words, narration) {
    var toks = [];
    if (words && words.length) toks = words.map(function (w) { return { w: str(w.word), s: num(w.start, 0), e: num(w.end, num(w.start, 0) + 0.3) }; });
    else {
      var ws = str(narration).split(/\s+/).filter(Boolean).slice(0, 600);
      var a = 0.35, b = Math.max(a + 0.5, D - 0.4), step = ws.length ? (b - a) / ws.length : 0;
      toks = ws.map(function (w, i) { return { w: w, s: a + i * step, e: a + (i + 0.9) * step }; });
    }
    var phrases = [], cur = [];
    toks.forEach(function (tk, i) {
      cur.push(tk);
      var len = cur.reduce(function (n, x) { return n + x.w.length + 1; }, 0);
      if (cur.length >= 4 || len > 26 || /[.,!?;:]$/.test(tk.w) || i === toks.length - 1) { phrases.push(cur); cur = []; }
    });
    if (phrases.length > 240) {
      // extremely long narration: merge so the DOM stays tiny (only one phrase is ever shown)
      var k = Math.ceil(phrases.length / 240), merged = [];
      for (var i = 0; i < phrases.length; i += k) merged.push([].concat.apply([], phrases.slice(i, i + k)));
      phrases = merged;
    }
    return phrases;
  }
  var STOPW = { the: 1, and: 1, that: 1, this: 1, with: 1, from: 1, have: 1, there: 1, their: 1, which: 1, about: 1, would: 1, could: 1, every: 1, these: 1, those: 1, because: 1, nobody: 1 };
  S.fallback = function (root, narration) {
    try {
      root = root || V.root();
      try { V.reset(); } catch (e0) {}
      root.innerHTML = "";
      root.removeAttribute("style");
      var text = str(narration != null ? narration : V.narration);
      var th = ["space", "planet", "pip"];
      for (var i = 0; i < FB_THEMES.length; i++) if (FB_THEMES[i][0].test(text)) { th = FB_THEMES[i].slice(1); break; }
      var ctx = S.scene(root, { world: th[0] });
      var port = V.isPortrait, sq = V.isSquare;
      var hx = port ? W * 0.5 : sq ? W * 0.68 : W * 0.72, hy = port ? H * 0.3 : sq ? H * 0.32 : H * 0.36;
      var hs = port ? 480 : sq ? 360 : 400;
      var hero = illus(th[1], { size: hs, seed: 4, color: th[1] === "planet" ? P.violet : null, ring: true });
      hero.at(hx, hy).enter(0.1, "pop", 1.1).float(16, 5, 3);
      illus(th[0] === "micro" ? "bacteria" : th[0] === "ocean" ? "fish" : "moon", { size: 110, seed: 2, color: th[0] === "ocean" ? P.sun : null }).at(port ? W * 0.18 : W * 0.12, port ? H * 0.12 : H * 0.18).enter(0.4, "pop").float(12, 4.5, 6);
      illus(th[0] === "micro" ? "virus" : th[0] === "ocean" ? "fish" : "planet", { size: 80, seed: 6, color: P.pink }).at(port ? W * 0.85 : W * 0.42, port ? H * 0.5 : H * 0.14).enter(0.6, "pop").float(10, 3.6, 4);
      var cr = creature(th[2], { size: port ? 230 : 220, look: [0.8, -0.3] });
      cr.at(port ? W * 0.18 : sq ? W * 0.16 : W * 0.12, port ? H * 0.83 : H * 0.8).enter(0.2, "drop").float(8, 3.4, 2).wave(1, 1.4);
      cr.feel("happy", Math.max(0.1, D * 0.55)).feel("neutral", Math.max(0.2, D * 0.8));
      // captions
      var phrases = captionPhrases(V.words, text);
      var capX = port ? W * 0.5 : sq ? W * 0.56 : W * 0.4, capY = port ? H * 0.62 : sq ? H * 0.66 : H * 0.62;
      var capW = port ? ctx.safe.w : sq ? W * 0.7 : W * 0.6;
      var cap = V.el("div.fv-caption", { parent: ctx.ui, style: { width: f2(capW * U) + "px" } });
      var capA = new Actor(cap, true).at(capX, capY);
      var shown = -2, spans = [];
      capA.hook(function (t) {
        var idx = -1;
        for (var i = 0; i < phrases.length; i++) if (t >= phrases[i][0].s - 0.12) idx = i; else break;
        if (idx !== shown) {
          shown = idx;
          cap.innerHTML = "";
          spans = [];
          if (idx >= 0) {
            var ph = phrases[idx];
            var len = ph.reduce(function (n, x) { return n + x.w.length + 1; }, 0);
            cap.style.fontSize = f2(clamp(118 - len * 1.9, port ? 60 : 54, port ? 112 : 104) * U) + "px";
            ph.forEach(function (tk, j) {
              var clean = tk.w.replace(/[^\p{L}\p{N}]+/gu, "");
              var key = clean.length >= 6 && !STOPW[clean.toLowerCase()];
              var sp = V.el("span.fv-w" + (key ? ".fv-key" : ""), { parent: cap, text: tk.w });
              if (j < ph.length - 1) cap.appendChild(document.createTextNode(" "));
              spans.push({ e: sp, s: tk.s });
            });
          }
        }
        for (var k = 0; k < spans.length; k++) {
          var q = clamp((t - spans[k].s + 0.1) / 0.45, 0, 1);
          spans[k].e.style.opacity = q <= 0 ? 0 : clamp(q * 4, 0, 1);
          spans[k].e.style.transform = q >= 1 ? "" : "translateY(" + f2((1 - E.outCubic(q)) * 30 * U) + "px) scale(" + f2(Math.max(0, E.pop(q))) + ")";
        }
      });
      capA.float(4, 4, 0.4);
      return ctx;
    } catch (e) {
      V.error("fallback: " + (e && e.message));
      try {
        root.innerHTML = "";
        var box = V.el("div", { parent: root, style: { position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center", padding: "8%", background: "linear-gradient(#1E1452,#4A1E78)", color: "#fff", fontFamily: "Inter, 'Noto Sans', system-ui, sans-serif", fontWeight: "900", fontSize: f2(64 * U) + "px", textAlign: "center", overflowWrap: "anywhere" } });
        box.textContent = str(narration || V.narration).split(/\s+/).slice(0, 12).join(" ");
      } catch (e2) {}
    }
  };

  // Templates throw → record, reset, fall back (the boot script does the same; this is belt and braces).
  var renderImpl = S.render;
  S.render = function (id, root, props) {
    if (!T[id]) throw new Error("Unknown template: " + id);
    try { return renderImpl(id, root, props); }
    catch (e) {
      V.error("[flat-vector] template " + id + ": " + (e && e.message));
      S.fallback(root, V.narration);
      return null;
    }
  };

  // Shared S.stage() (used by generic custom code) paints a flat-vector studio backdrop.
  S.init({
    background: function (bg) {
      try {
        var svg = sv("svg", { viewBox: "0 0 " + f2(W) + " " + f2(H), preserveAspectRatio: "xMidYMid slice", width: "100%", height: "100%", style: "position:absolute;inset:0" }, bg);
        var d = sv("defs", null, svg);
        var mini = { defs: d, bg: sv("g", null, svg), far: sv("g", null, svg), mid: sv("g", null, svg), world: sv("g", null, svg), front: sv("g", null, svg), fx: sv("g", null, svg), cam: { _layers: [] }, reg: null };
        var prev = CUR, prevCache = gradCache;
        CUR = mini; gradCache = {};
        mini.reg = newRegistry();
        drawWorld(mini, "studio", {});
        CUR = prev; gradCache = prevCache;
      } catch (e) { V.error("flat-vector background: " + e.message); }
    },
  });

  /** Convenience: gentle float on any actor. */
  S.float = function (actor, amp, period, rotAmp) { return actor && actor.float ? actor.float(amp, period, rotAmp) : actor; };
  /** Resolve the time a phrase is spoken (minus lead), or a fallback fraction of the scene. */
  S.when = function (phrase, frac, after) {
    var f = V.find(str(phrase), after || 0);
    return ct(f != null ? f - 0.15 : D * (frac == null ? 0.5 : frac));
  };
  S.engine = "flat-vector";
})();
