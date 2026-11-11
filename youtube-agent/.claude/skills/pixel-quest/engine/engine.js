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
/* Pixel Quest — animation engine for Scene.
 * The video plays out as an original 16-bit style video game: a low-res canvas
 * (≈320×180 logical pixels, integer-scaled with image-rendering:pixelated), a limited
 * palette, sprites defined as compact pixel maps, tile maps, parallax layers, dithering
 * and a hand-made bitmap font. Every frame is redrawn from scratch as a pure function of t.
 */
(function () {
  "use strict";
  var V = window.V;
  var S = window.SceneStyle;
  if (!V || !S) return;
  try {
    S.init({ id: "pixel-quest", kind: "minimal", enter: "pop", drift: 0, series: ["#f8d040", "#4cc04a", "#e83c4c", "#3a6ad8", "#a050e0", "#2ab0a8"] });
  } catch (e) {}

  // ───────────────────────── palette ─────────────────────────
  var C = {
    ink: "#140f26", night: "#1d1838", navy: "#232c66", navy2: "#2f3f8f", blue: "#3a6ad8", sky: "#5fa8f0", skyL: "#a8dcf8",
    white: "#f4f4e8", grey3: "#c4c6d6", grey2: "#8b8fa8", grey1: "#5a5d78", grey0: "#35364d",
    greenD: "#1e6b3a", green: "#3fa64a", greenL: "#8fd85a", lime: "#c8f06a",
    brownD: "#4a2c22", brown: "#7a4a2c", tan: "#c08850", sand: "#e8c27a", sandL: "#f4dca0",
    redD: "#8a1f2e", red: "#e83c4c", pink: "#f07890", orange: "#f08a2a", yellow: "#f8d040", gold: "#c88a20", cream: "#fff2b0",
    purpleD: "#3a2160", purple: "#7a3cb8", violet: "#b88af0", tealD: "#145a5a", teal: "#2ab0a8", aqua: "#7af0e0",
    skin: "#f6c9a0", skinS: "#d8956c", skinD: "#a8643c",
  };
  var RGB = {};
  function rgb(h) {
    var r = RGB[h];
    if (r) return r;
    var s = h.charAt(0) === "#" ? h.slice(1) : h;
    if (s.length === 3) s = s[0] + s[0] + s[1] + s[1] + s[2] + s[2];
    var n = parseInt(s, 16) || 0;
    return (RGB[h] = [(n >> 16) & 255, (n >> 8) & 255, n & 255]);
  }
  function mix(a, b, p) {
    var x = rgb(a), y = rgb(b);
    var r = Math.round(x[0] + (y[0] - x[0]) * p), g = Math.round(x[1] + (y[1] - x[1]) * p), bb = Math.round(x[2] + (y[2] - x[2]) * p);
    return "#" + ((1 << 24) | (r << 16) | (g << 8) | bb).toString(16).slice(1);
  }

  // ───────────────────────── math / time helpers ─────────────────────────
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function lerp(a, b, p) { return a + (b - a) * p; }
  function prog(t, a, b) { return b > a ? clamp((t - a) / (b - a), 0, 1) : t >= b ? 1 : 0; }
  function outCubic(p) { return 1 - Math.pow(1 - p, 3); }
  function inOut(p) { return p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2; }
  function outBack(p) { var c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(p - 1, 3) + c1 * Math.pow(p - 1, 2); }
  function outBounce(p) {
    var n1 = 7.5625, d1 = 2.75;
    if (p < 1 / d1) return n1 * p * p;
    if (p < 2 / d1) return n1 * (p -= 1.5 / d1) * p + 0.75;
    if (p < 2.5 / d1) return n1 * (p -= 2.25 / d1) * p + 0.9375;
    return n1 * (p -= 2.625 / d1) * p + 0.984375;
  }
  function hash(n) { var x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); }
  function hashS(s) { s = String(s == null ? "" : s); var h = 2166136261; for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function rng(seed) { var a = (seed >>> 0) || 1; return function () { a |= 0; a = (a + 0x6d2b79f5) | 0; var t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  function str(v) { return v == null ? "" : String(v); }
  function arr(v) { return Array.isArray(v) ? v : v == null ? [] : [v]; }
  function D() { return Math.max(0.5, V.duration || 5); }
  function lastT() { return Math.max(0.05, D() - 0.05); }
  function R(v) { return Math.round(v); }
  /** step a value to whole pixels per frame-ish quantum: stepped animation (retro feel) */
  function stepT(t, fps) { return Math.floor(t * fps) / fps; }

  // ───────────────────────── canvases & pixel buffers ─────────────────────────
  function canvas(w, h) {
    var c = document.createElement("canvas");
    c.width = Math.max(1, w | 0);
    c.height = Math.max(1, h | 0);
    var g = c.getContext("2d");
    g.imageSmoothingEnabled = false;
    return c;
  }
  function ctx(c) { var g = c.getContext("2d"); g.imageSmoothingEnabled = false; return g; }

  /** Indexed-ish pixel buffer: each cell holds a hex colour string or null. */
  function Buf(w, h) { this.w = w; this.h = h; this.d = new Array(w * h); for (var i = 0; i < this.d.length; i++) this.d[i] = null; }
  Buf.prototype.get = function (x, y) { return x < 0 || y < 0 || x >= this.w || y >= this.h ? null : this.d[y * this.w + x]; };
  Buf.prototype.set = function (x, y, c) { x |= 0; y |= 0; if (x < 0 || y < 0 || x >= this.w || y >= this.h) return; this.d[y * this.w + x] = c; };
  Buf.prototype.rect = function (x, y, w, h, c) { for (var j = 0; j < h; j++) for (var i = 0; i < w; i++) this.set(x + i, y + j, c); return this; };
  Buf.prototype.ellipse = function (cx, cy, rx, ry, c, fn) {
    for (var y = Math.floor(cy - ry - 1); y <= Math.ceil(cy + ry + 1); y++)
      for (var x = Math.floor(cx - rx - 1); x <= Math.ceil(cx + rx + 1); x++) {
        var dx = (x + 0.5 - cx) / rx, dy = (y + 0.5 - cy) / ry;
        if (dx * dx + dy * dy <= 1) this.set(x, y, fn ? fn(x, y, dx, dy) : c);
      }
    return this;
  };
  Buf.prototype.line = function (x0, y0, x1, y1, c, bw, bh) {
    bw = bw || 1; bh = bh || bw;
    x0 = R(x0); y0 = R(y0); x1 = R(x1); y1 = R(y1);
    var dx = Math.abs(x1 - x0), sx = x0 < x1 ? 1 : -1, dy = -Math.abs(y1 - y0), sy = y0 < y1 ? 1 : -1, err = dx + dy;
    for (var guard = 0; guard < 400; guard++) {
      this.rect(x0 - ((bw - 1) >> 1), y0 - ((bh - 1) >> 1), bw, bh, c);
      if (x0 === x1 && y0 === y1) break;
      var e2 = 2 * err;
      if (e2 >= dy) { err += dy; x0 += sx; }
      if (e2 <= dx) { err += dx; y0 += sy; }
    }
    return this;
  };
  /** Paint a string map (rows) with a char→colour map. '.' and ' ' are transparent. */
  Buf.prototype.map = function (rows, cmap, ox, oy, flip) {
    for (var j = 0; j < rows.length; j++) {
      var row = rows[j];
      for (var i = 0; i < row.length; i++) {
        var ch = row.charAt(i);
        if (ch === "." || ch === " ") continue;
        var col = cmap[ch];
        if (col === undefined) col = C.ink;
        if (col === null) continue;
        this.set((ox || 0) + (flip ? row.length - 1 - i : i), (oy || 0) + j, col);
      }
    }
    return this;
  };
  /** Add an outline (4-neighbour) around every opaque pixel. */
  Buf.prototype.outline = function (col, diag) {
    var w = this.w, h = this.h, src = this.d.slice();
    for (var y = 0; y < h; y++)
      for (var x = 0; x < w; x++) {
        if (src[y * w + x]) continue;
        var hit = false;
        for (var k = 0; k < (diag ? 8 : 4) && !hit; k++) {
          var nx = x + [1, -1, 0, 0, 1, 1, -1, -1][k], ny = y + [0, 0, 1, -1, 1, -1, 1, -1][k];
          if (nx >= 0 && ny >= 0 && nx < w && ny < h && src[ny * w + nx]) hit = true;
        }
        if (hit) this.d[y * w + x] = col;
      }
    return this;
  };
  /** Shade pixels: callback(x,y,colour) → new colour (or same). */
  Buf.prototype.each = function (fn) { for (var y = 0; y < this.h; y++) for (var x = 0; x < this.w; x++) { var c = this.d[y * this.w + x]; if (c) this.d[y * this.w + x] = fn(x, y, c); } return this; };
  Buf.prototype.canvas = function () {
    var c = canvas(this.w, this.h), g = ctx(c), img = g.createImageData(this.w, this.h), p = img.data;
    for (var i = 0; i < this.d.length; i++) {
      var col = this.d[i];
      if (!col) continue;
      var v = rgb(col);
      p[i * 4] = v[0]; p[i * 4 + 1] = v[1]; p[i * 4 + 2] = v[2]; p[i * 4 + 3] = 255;
    }
    g.putImageData(img, 0, 0);
    return c;
  };
  function mapCanvas(rows, cmap, outlineCol, pad) {
    pad = pad == null ? (outlineCol ? 1 : 0) : pad;
    var w = 0;
    for (var i = 0; i < rows.length; i++) w = Math.max(w, rows[i].length);
    var b = new Buf(w + pad * 2, rows.length + pad * 2);
    b.map(rows, cmap, pad, pad);
    if (outlineCol) b.outline(outlineCol);
    return b.canvas();
  }
  /** Solid-colour silhouette of a canvas (hit flash, shadows). */
  var SIL = typeof WeakMap !== "undefined" ? new WeakMap() : null;
  function silhouette(c, col) {
    var m = SIL && SIL.get(c);
    if (m && m[col]) return m[col];
    var o = canvas(c.width, c.height), g = ctx(o);
    g.drawImage(c, 0, 0);
    g.globalCompositeOperation = "source-in";
    g.fillStyle = col;
    g.fillRect(0, 0, o.width, o.height);
    if (SIL) { if (!m) { m = {}; SIL.set(c, m); } m[col] = o; }
    return o;
  }

  // ───────────────────────── ordered dithering ─────────────────────────
  var BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
  var PATS = {};
  /** Pattern that paints `col` on (level 0..16)/16 of the pixels, Bayer 4×4. */
  function ditherPat(g, col, level) {
    level = clamp(Math.round(level), 0, 16);
    var key = col + "|" + level;
    if (PATS[key]) return PATS[key];
    var c = canvas(4, 4), cg = ctx(c);
    cg.fillStyle = col;
    for (var i = 0; i < 16; i++) if (BAYER[i] < level) cg.fillRect(i % 4, (i / 4) | 0, 1, 1);
    return (PATS[key] = g.createPattern(c, "repeat"));
  }
  /** Fill a rect with colour at dithered coverage a (0..1). Pattern is anchored to the canvas grid. */
  function dfill(g, x, y, w, h, col, a) {
    if (a <= 0.03 || w <= 0 || h <= 0) return;
    if (a >= 0.97) { g.fillStyle = col; g.fillRect(x, y, w, h); return; }
    g.fillStyle = ditherPat(g, col, a * 16);
    g.fillRect(x, y, w, h);
  }
  /** Vertical banded gradient with dithered transitions (classic 16-bit sky). */
  function dgrad(g, x, y, w, h, cols, bandsPer) {
    var n = cols.length;
    if (n === 1) { g.fillStyle = cols[0]; g.fillRect(x, y, w, h); return; }
    var LV = [0, 0, 0, 0.25, 0.5, 0.75];
    var seg = h / (n - 1);
    for (var i = 0; i < n - 1; i++) {
      var y0 = y + R(seg * i), y1 = y + R(seg * (i + 1));
      var bh = (y1 - y0) / LV.length;
      for (var b = 0; b < LV.length; b++) {
        var by0 = y0 + R(bh * b), by1 = y0 + R(bh * (b + 1));
        g.fillStyle = cols[i];
        g.fillRect(x, by0, w, by1 - by0);
        dfill(g, x, by0, w, by1 - by0, cols[i + 1], LV[b]);
      }
    }
  }
  /** Solid translucent fill (smooth darkening / light) — used for big overlays instead of dithering. */
  function afill(g, x, y, w, h, col, a) {
    if (a <= 0.005 || w <= 0 || h <= 0) return;
    var o = g.globalAlpha; g.globalAlpha = Math.min(1, a); g.fillStyle = col; g.fillRect(x, y, w, h); g.globalAlpha = o;
  }

  // ───────────────────────── bitmap font (original 5×7 + descenders) ─────────────────────────
  var GL = {
    A: [".###.", "#...#", "#...#", "#####", "#...#", "#...#", "#...#"],
    B: ["####.", "#...#", "#...#", "####.", "#...#", "#...#", "####."],
    C: [".###.", "#...#", "#....", "#....", "#....", "#...#", ".###."],
    D: ["####.", "#...#", "#...#", "#...#", "#...#", "#...#", "####."],
    E: ["#####", "#....", "#....", "####.", "#....", "#....", "#####"],
    F: ["#####", "#....", "#....", "####.", "#....", "#....", "#...."],
    G: [".###.", "#...#", "#....", "#.###", "#...#", "#...#", ".####"],
    H: ["#...#", "#...#", "#...#", "#####", "#...#", "#...#", "#...#"],
    I: ["###", ".#.", ".#.", ".#.", ".#.", ".#.", "###"],
    J: ["..###", "...#.", "...#.", "...#.", "#..#.", "#..#.", ".##.."],
    K: ["#...#", "#..#.", "#.#..", "##...", "#.#..", "#..#.", "#...#"],
    L: ["#....", "#....", "#....", "#....", "#....", "#....", "#####"],
    M: ["#...#", "##.##", "#.#.#", "#.#.#", "#...#", "#...#", "#...#"],
    N: ["#...#", "##..#", "##..#", "#.#.#", "#..##", "#..##", "#...#"],
    O: [".###.", "#...#", "#...#", "#...#", "#...#", "#...#", ".###."],
    P: ["####.", "#...#", "#...#", "####.", "#....", "#....", "#...."],
    Q: [".###.", "#...#", "#...#", "#...#", "#.#.#", "#..#.", ".##.#"],
    R: ["####.", "#...#", "#...#", "####.", "#.#..", "#..#.", "#...#"],
    S: [".###.", "#...#", "#....", ".###.", "....#", "#...#", ".###."],
    T: ["#####", "..#..", "..#..", "..#..", "..#..", "..#..", "..#.."],
    U: ["#...#", "#...#", "#...#", "#...#", "#...#", "#...#", ".###."],
    V: ["#...#", "#...#", "#...#", "#...#", "#...#", ".#.#.", "..#.."],
    W: ["#...#", "#...#", "#...#", "#.#.#", "#.#.#", "##.##", "#...#"],
    X: ["#...#", "#...#", ".#.#.", "..#..", ".#.#.", "#...#", "#...#"],
    Y: ["#...#", "#...#", ".#.#.", "..#..", "..#..", "..#..", "..#.."],
    Z: ["#####", "....#", "...#.", "..#..", ".#...", "#....", "#####"],
    a: [".....", ".....", ".###.", "....#", ".####", "#...#", ".####"],
    b: ["#....", "#....", "####.", "#...#", "#...#", "#...#", "####."],
    c: ["....", "....", ".###", "#...", "#...", "#...", ".###"],
    d: ["....#", "....#", ".####", "#...#", "#...#", "#...#", ".####"],
    e: [".....", ".....", ".###.", "#...#", "#####", "#....", ".###."],
    f: ["..##", ".#..", ".#..", "###.", ".#..", ".#..", ".#.."],
    g: [".....", ".....", ".####", "#...#", "#...#", "#...#", ".####", "....#", ".###."],
    h: ["#....", "#....", "####.", "#...#", "#...#", "#...#", "#...#"],
    i: ["#", ".", "#", "#", "#", "#", "#"],
    j: ["..#", "...", ".##", "..#", "..#", "..#", "..#", "#.#", ".#."],
    k: ["#...", "#...", "#..#", "#.#.", "##..", "#.#.", "#..#"],
    l: ["#.", "#.", "#.", "#.", "#.", "#.", ".#"],
    m: [".....", ".....", "####.", "#.#.#", "#.#.#", "#.#.#", "#.#.#"],
    n: [".....", ".....", "####.", "#...#", "#...#", "#...#", "#...#"],
    o: [".....", ".....", ".###.", "#...#", "#...#", "#...#", ".###."],
    p: [".....", ".....", "####.", "#...#", "#...#", "#...#", "####.", "#....", "#...."],
    q: [".....", ".....", ".####", "#...#", "#...#", "#...#", ".####", "....#", "....#"],
    r: ["....", "....", "#.##", "##..", "#...", "#...", "#..."],
    s: [".....", ".....", ".####", "#....", ".###.", "....#", "####."],
    t: [".#..", ".#..", "###.", ".#..", ".#..", ".#..", "..##"],
    u: [".....", ".....", "#...#", "#...#", "#...#", "#...#", ".####"],
    v: [".....", ".....", "#...#", "#...#", "#...#", ".#.#.", "..#.."],
    w: [".....", ".....", "#...#", "#...#", "#.#.#", "#.#.#", ".#.#."],
    x: [".....", ".....", "#...#", ".#.#.", "..#..", ".#.#.", "#...#"],
    y: [".....", ".....", "#...#", "#...#", "#...#", "#...#", ".####", "....#", ".###."],
    z: [".....", ".....", "#####", "...#.", "..#..", ".#...", "#####"],
    "0": [".###.", "#...#", "#..##", "#.#.#", "##..#", "#...#", ".###."],
    "1": [".#.", "##.", ".#.", ".#.", ".#.", ".#.", "###"],
    "2": [".###.", "#...#", "....#", "...#.", "..#..", ".#...", "#####"],
    "3": [".###.", "#...#", "....#", "..##.", "....#", "#...#", ".###."],
    "4": ["...#.", "..##.", ".#.#.", "#..#.", "#####", "...#.", "...#."],
    "5": ["#####", "#....", "####.", "....#", "....#", "#...#", ".###."],
    "6": ["..##.", ".#...", "#....", "####.", "#...#", "#...#", ".###."],
    "7": ["#####", "....#", "...#.", "..#..", ".#...", ".#...", ".#..."],
    "8": [".###.", "#...#", "#...#", ".###.", "#...#", "#...#", ".###."],
    "9": [".###.", "#...#", "#...#", ".####", "....#", "...#.", ".##.."],
    ".": [".", ".", ".", ".", ".", ".", "#"],
    ",": ["..", "..", "..", "..", "..", "..", ".#", "#."],
    "!": ["#", "#", "#", "#", "#", ".", "#"],
    "?": [".###.", "#...#", "....#", "...#.", "..#..", ".....", "..#.."],
    ":": [".", ".", "#", ".", ".", ".", "#"],
    ";": ["..", "..", ".#", "..", "..", "..", ".#", "#."],
    "'": ["#", "#", ".", ".", ".", ".", "."],
    '"': ["#.#", "#.#", "...", "...", "...", "...", "..."],
    "-": ["....", "....", "....", "####", "....", "....", "...."],
    "+": [".....", "..#..", "..#..", "#####", "..#..", "..#..", "....."],
    "=": ["....", "....", "####", "....", "####", "....", "...."],
    "/": ["....#", "...#.", "...#.", "..#..", ".#...", ".#...", "#...."],
    "\\": ["#....", ".#...", ".#...", "..#..", "...#.", "...#.", "....#"],
    "(": [".#", "#.", "#.", "#.", "#.", "#.", ".#"],
    ")": ["#.", ".#", ".#", ".#", ".#", ".#", "#."],
    "[": ["##", "#.", "#.", "#.", "#.", "#.", "##"],
    "]": ["##", ".#", ".#", ".#", ".#", ".#", "##"],
    "%": ["##..#", "##.#.", "...#.", "..#..", ".#...", ".#.##", "#..##"],
    $: ["..#..", ".####", "#.#..", ".###.", "..#.#", "####.", "..#.."],
    "&": [".##..", "#..#.", "#.#..", ".#...", "#.#.#", "#..#.", ".##.#"],
    "#": [".#.#.", "#####", ".#.#.", ".#.#.", "#####", ".#.#.", "....."],
    "*": [".....", "#.#.#", ".###.", "#####", ".###.", "#.#.#", "....."],
    "<": ["...#", "..#.", ".#..", "#...", ".#..", "..#.", "...#"],
    ">": ["#...", ".#..", "..#.", "...#", "..#.", ".#..", "#..."],
    _: [".....", ".....", ".....", ".....", ".....", ".....", ".....", "#####"],
    "@": [".###.", "#...#", "#.###", "#.#.#", "#.##.", "#....", ".####"],
    "^": ["..#..", ".#.#.", "#...#", ".....", ".....", ".....", "....."],
    "|": ["#", "#", "#", "#", "#", "#", "#"],
    "~": [".....", ".....", ".#..#", "#.##.", ".....", ".....", "....."],
    "♥": [".....", ".##.##", "######", "######", ".####.", "..##..", "......"],
    "★": ["..#..", "..#..", "#####", ".###.", ".#.#.", "#...#", "....."],
    "▶": ["#...", "##..", "###.", "####", "###.", "##..", "#..."],
    "▼": [".....", ".....", "#####", ".###.", "..#..", ".....", "....."],
    "→": [".....", "...#.", "....#", "#####", "....#", "...#.", "....."],
    "×": [".....", ".....", "#...#", ".#.#.", "..#..", ".#.#.", "#...#"],
  };
  var FONT = { lh: 11, cap: 7, map: {}, list: [], atlasW: 0 };
  (function buildFont() {
    var x = 0;
    for (var ch in GL) {
      if (!Object.prototype.hasOwnProperty.call(GL, ch)) continue;
      var rows = GL[ch], w = 0;
      for (var i = 0; i < rows.length; i++) w = Math.max(w, rows[i].length);
      FONT.map[ch] = { x: x, w: w, rows: rows };
      FONT.list.push(ch);
      x += w + 1;
    }
    FONT.map[" "] = { x: -1, w: 3, rows: [] };
    FONT.atlasW = x;
  })();
  var ATLAS = {};
  function atlas(col) {
    if (ATLAS[col]) return ATLAS[col];
    var c = canvas(FONT.atlasW, 9), g = ctx(c);
    g.fillStyle = col;
    for (var k = 0; k < FONT.list.length; k++) {
      var gl = FONT.map[FONT.list[k]];
      for (var j = 0; j < gl.rows.length; j++)
        for (var i = 0; i < gl.rows[j].length; i++) if (gl.rows[j].charAt(i) === "#") g.fillRect(gl.x + i, j, 1, 1);
    }
    return (ATLAS[col] = c);
  }
  var SUBST = { "‘": "'", "’": "'", "“": '"', "”": '"', "–": "-", "—": "-", "…": "...", " ": " ", "•": "*", "♥": "♥", "❤": "♥", "⭐": "★", "·": "*", "™": "", "®": "", "©": "(c)", "€": "E", "£": "L", "°": "'" };
  /** Normalise text to glyphs the bitmap font has. */
  function clean(s) {
    s = str(s).replace(/[*_]{1,2}([^*_]+)[*_]{1,2}/g, "$1").replace(/\s+/g, " ").trim();
    var out = "";
    for (var i = 0; i < s.length; i++) {
      var ch = s.charAt(i);
      if (FONT.map[ch]) { out += ch; continue; }
      if (SUBST[ch] !== undefined) { out += SUBST[ch]; continue; }
      var base = "";
      try { base = ch.normalize("NFD").replace(/[̀-ͯ]/g, ""); } catch (e) {}
      if (base && FONT.map[base]) { out += base; continue; }
      var code = ch.charCodeAt(0);
      if (code >= 0xd800 && code <= 0xdbff) { i++; continue; } // emoji / astral: drop
      out += "?";
    }
    return out;
  }
  function charW(ch) { var gl = FONT.map[ch]; return gl ? gl.w + 1 : 4; }
  function measure(s, scale) { s = str(s); var w = 0; for (var i = 0; i < s.length; i++) w += charW(s.charAt(i)); return Math.max(0, w - 1) * (scale || 1); }
  /** Greedy word wrap (long words are hard-broken). Returns array of lines. */
  function wrap(s, maxW, scale) {
    scale = scale || 1;
    var words = clean(s).split(" "), lines = [], cur = "";
    for (var i = 0; i < words.length; i++) {
      var w = words[i];
      if (!w) continue;
      while (measure(w, scale) > maxW && w.length > 1) {
        var cut = w.length - 1;
        while (cut > 1 && measure(w.slice(0, cut) + "-", scale) > maxW) cut--;
        if (cur) { lines.push(cur); cur = ""; }
        lines.push(w.slice(0, cut) + "-");
        w = w.slice(cut);
      }
      var cand = cur ? cur + " " + w : w;
      if (measure(cand, scale) <= maxW) cur = cand;
      else { if (cur) lines.push(cur); cur = w; }
    }
    if (cur) lines.push(cur);
    return lines;
  }
  /**
   * Draw text. o: { color, scale, shadow (colour), outline (colour), align: left|center|right, n (max chars), wave (t), valign }
   * x,y = top-left of the cap height (or centre/right per align). Returns drawn width.
   */
  function text(g, s, x, y, o) {
    o = o || {};
    s = str(s);
    var sc = o.scale || 1, w = measure(s, sc);
    if (o.align === "center") x -= Math.floor(w / 2);
    else if (o.align === "right") x -= w;
    x = R(x); y = R(y);
    var n = o.n == null ? s.length : Math.max(0, Math.min(s.length, Math.floor(o.n)));
    var dy, dx;
    if (o.outline) {
      var oc = atlas(o.outline);
      if (o.shadow) {
        var sa = atlas(o.shadow);
        for (dy = 0; dy <= 2; dy++) for (dx = 0; dx <= 2; dx++) glyphs(g, sa, s, n, x + dx * sc, y + dy * sc, sc, o.wave);
      }
      for (dy = -1; dy <= 1; dy++) for (dx = -1; dx <= 1; dx++) if (dx || dy) glyphs(g, oc, s, n, x + dx * sc, y + dy * sc, sc, o.wave);
    } else if (o.shadow) glyphs(g, atlas(o.shadow), s, n, x + sc, y + sc, sc, o.wave);
    glyphs(g, atlas(o.color || C.white), s, n, x, y, sc, o.wave);
    if (o.top) glyphsBand(g, s, n, x, y, sc, o.wave, o.top, o.topRows || 3);
    return w;
  }
  function glyphs(g, at, s, n, x, y, sc, wave) {
    var cx = x;
    for (var i = 0; i < n; i++) {
      var ch = s.charAt(i), gl = FONT.map[ch];
      if (!gl) { cx += 4 * sc; continue; }
      if (gl.x >= 0) {
        var oy = wave != null ? R(Math.sin(wave * 6 - i * 0.55) * 1.5) * sc : 0;
        g.drawImage(at, gl.x, 0, gl.w, 9, cx, y + oy, gl.w * sc, 9 * sc);
      }
      cx += (gl.w + 1) * sc;
    }
  }
  /** Overpaint the top rows of glyphs with a second colour (two-tone logo text). */
  function glyphsBand(g, s, n, x, y, sc, wave, col, rows) {
    var at = atlas(col), cx = x;
    for (var i = 0; i < n; i++) {
      var ch = s.charAt(i), gl = FONT.map[ch];
      if (!gl) { cx += 4 * sc; continue; }
      if (gl.x >= 0) {
        var oy = wave != null ? R(Math.sin(wave * 6 - i * 0.55) * 1.5) * sc : 0;
        g.drawImage(at, gl.x, 0, gl.w, rows, cx, y + oy, gl.w * sc, rows * sc);
      }
      cx += (gl.w + 1) * sc;
    }
  }
  /** Largest integer scale (≤ max) at which `s` fits in maxW (wrapping allowed up to maxLines). */
  function fitScale(s, maxW, maxLines, maxScale, maxH) {
    for (var sc = maxScale || 3; sc > 1; sc--) {
      var ls = wrap(s, maxW, sc);
      if (ls.length <= (maxLines || 2) && (!maxH || ls.length * FONT.lh * sc <= maxH)) return sc;
    }
    return 1;
  }

  // ═════════════════════════ SPRITES ═════════════════════════
  // Light-from-top-left sphere shading with Bayer dithering between 3 tones.
  function bayer(x, y) { return (BAYER[(y & 3) * 4 + (x & 3)] + 0.5) / 16; }
  function shade3(dark, mid, light, bias) {
    bias = bias || 0;
    return function (x, y, dx, dy) {
      var v = -dx * 0.55 - dy * 0.75 + bias + (bayer(x, y) - 0.5) * 0.45;
      return v > 0.42 ? light : v < -0.28 ? dark : mid;
    };
  }

  // ───────────── cast: head maps (facing right) ─────────────
  var HEADS = {
    kit: [
      "..h..h..h.....",
      ".hhhhhhhhhh...",
      "hhhhhhhhhhhhh.",
      "hhhhhhhhhhhhhh",
      "AAaaaaaaaaaaaa",
      "A.Hhsssssssss.",
      "..Hssssessess.",
      "..Hssssessess.",
      "..HSsssssssrs.",
      "...Sssssmsss..",
      "....SSsssss...",
      "......SSSS....",
    ],
    vex: [
      "hh..h.........",
      ".hhhhhh.h.....",
      "hhhhhhhhhhh...",
      ".hhhhhhhhhhhh.",
      "hhhhhhhhhhhhhh",
      ".HhhhhhhhhhhhH",
      "..HhssshhsshH.",
      "..Hssssessesh.",
      "..HSssssssssr.",
      "...Sssssmmss..",
      "....SSsssss...",
      "......SSSS....",
    ],
    mo: [
      "..............",
      "....kkkkkk....",
      "..kkkkkkkkkk..",
      ".kkkkkkkykkkk.",
      "KKKKKKKKKKKKKK",
      "..hhsssssssss.",
      "..hssssessess.",
      "..hssssessess.",
      "..hSssssssssrs",
      "...Ssshhhhhs..",
      "....SSssmss...",
      "......SSSS....",
    ],
    orla: [
      "..k.............",
      "..kk............",
      "...kkK..........",
      "....kkK.........",
      "....kkkK........",
      "...kkkkkK.......",
      "...kkkykkK......",
      "..kkkyyykkK.....",
      "..kkkkykkkkK....",
      "kkkkkkkkkkkkkkK.",
      ".KKKKKKKKKKKKKKK",
      "...wwssssssss...",
      "...wsssesseSs...",
      "...wSssssssss...",
      "...wwwwwwwwwww..",
      "....wwwwwmwwww..",
      "....wWwwwwwwWw..",
      ".....wWwwwwWw...",
      "......wwWww.....",
      ".......wWw......",
    ],
  };
  var CAST = {
    kit: { name: "KIT", kind: "human", head: "kit", portraitBg: "#3a6ad8",
      cols: { h: "#d8682a", H: "#9a4020", s: C.skin, S: C.skinS, e: C.ink, m: C.skinS, r: "#f39a8a", a: C.yellow, A: C.gold, f: "#e83c4c", c: "#2f8ae0", C: "#1f4f9a", x: "#5a3420", y: C.yellow, p: "#3a3050", P: "#251e38", b: "#8a5430", B: "#4a2c22" } },
    vex: { name: "VEX", kind: "human", head: "vex", cape: true, portraitBg: "#8a1f2e",
      cols: { h: "#3a2a5a", H: "#22183a", s: "#eec4a4", S: "#c8906c", e: C.ink, m: "#c8906c", r: "#e89090", a: "#e83c4c", A: "#8a1f2e", f: "#e83c4c", c: "#45455a", C: "#2a2a38", x: C.ink, y: C.grey3, p: "#2a2a38", P: "#1a1a24", b: "#6a2034", B: "#3a1020" } },
    mo: { name: "MO", kind: "human", head: "mo", wide: true, portraitBg: "#1e6b3a",
      cols: { h: "#7a4a2c", H: "#4a2c22", s: C.skin, S: C.skinS, e: C.ink, m: C.skinS, r: "#f39a8a", k: "#3fa64a", K: "#1e6b3a", y: C.yellow, f: C.white, c: "#d89a50", C: "#9a6430", x: "#5a3420", p: "#4a4a6a", P: "#30304a", b: "#5a3420", B: "#3a2016" } },
    orla: { name: "SAGE ORLA", kind: "wizard", head: "orla", portraitBg: "#3a2160",
      cols: { k: "#7a44c8", K: "#3f2470", y: C.yellow, w: C.white, W: "#b0b0c8", s: C.skin, S: C.skinS, e: C.ink, m: "#b0b0c8", c: "#7a44c8", C: "#3f2470", t: "#9a6430", T: "#5a3420", o: C.aqua, b: "#4a2c22" } },
    bolt: { name: "BOLT", kind: "robot", portraitBg: "#145a5a",
      cols: { g: "#d4d6e2", G: "#9a9eb6", D: "#5a5d78", n: "#1d1838", c: C.aqua, r: "#e83c4c", y: C.yellow, o: C.orange } },
  };
  var CAST_IDS = ["kit", "orla", "bolt", "vex", "mo"];
  function castId(id) { id = str(id).toLowerCase(); return CAST[id] ? id : "kit"; }

  var POSES = {
    idle0: { bob: 0, bh: [8, 20], fh: [15, 20], bf: [10, 27], ff: [14, 27] },
    idle1: { bob: 1, bh: [8, 21], fh: [15, 21], bf: [10, 27], ff: [14, 27] },
    walk0: { bob: 0, bh: [15, 20], fh: [9, 20], bf: [7, 27], ff: [17, 27] },
    walk1: { bob: -1, bh: [11, 19], fh: [13, 19], bf: [11, 27], ff: [14, 25] },
    walk2: { bob: 0, bh: [8, 20], fh: [17, 19], bf: [17, 27], ff: [8, 27] },
    walk3: { bob: -1, bh: [12, 19], fh: [12, 19], bf: [13, 25], ff: [11, 27] },
    run0: { bob: 0, lean: 1, bh: [16, 17], fh: [8, 19], bf: [5, 26], ff: [19, 27] },
    run1: { bob: -2, lean: 1, bh: [13, 18], fh: [13, 18], bf: [9, 23], ff: [15, 27] },
    run2: { bob: 0, lean: 1, bh: [8, 19], fh: [19, 16], bf: [19, 27], ff: [6, 26] },
    run3: { bob: -2, lean: 1, bh: [12, 18], fh: [14, 18], bf: [15, 27], ff: [10, 23] },
    jump: { bob: -1, bh: [6, 11], fh: [18, 9], bf: [9, 25], ff: [16, 24] },
    cheer0: { bob: 0, bh: [7, 8], fh: [17, 8], bf: [9, 27], ff: [15, 27], eyes: "closed", mouth: "open" },
    cheer1: { bob: -1, bh: [6, 10], fh: [18, 9], bf: [9, 26], ff: [15, 26], eyes: "closed", mouth: "open" },
    hurt: { bob: 0, lean: -1, bh: [5, 13], fh: [20, 12], bf: [8, 27], ff: [15, 27], eyes: "closed", mouth: "open", sweat: true },
    attack: { bob: 0, lean: 1, bh: [8, 20], fh: [20, 16], bf: [7, 27], ff: [17, 27], weapon: true },
    talk: { bob: 0, bh: [8, 20], fh: [18, 17], bf: [10, 27], ff: [14, 27] },
    point: { bob: 0, bh: [8, 20], fh: [21, 14], bf: [10, 27], ff: [14, 27] },
    think: { bob: 0, bh: [8, 20], fh: [16, 13], bf: [10, 27], ff: [14, 27], eyes: "closed" },
  };
  var POSE_NAMES = Object.keys(POSES);

  function faceCols(cols, map, ox, oy, b, eyes, mouth) {
    // eyes: open | closed ; mouth: closed | open
    for (var j = 0; j < map.length; j++)
      for (var i = 0; i < map[j].length; i++) {
        var ch = map[j].charAt(i), x = ox + i, y = oy + j;
        if (ch === "e" && eyes === "closed") {
          var below = j + 1 < map.length ? map[j + 1].charAt(i) : ".";
          if (below === "e") b.set(x, y, cols.s);
        } else if (ch === "m") {
          if (mouth === "open") { b.set(x, y, "#5a1020"); b.set(x, y + 1, "#8a2030"); }
          else b.set(x, y, cols.m || cols.S);
        }
      }
  }

  var TORSO = [".ffffff.", "Cccccccc", "Cccccccc", "CCcccccc", "xxxxxyxx", "Cccccccc", ".CCcccc."];
  var TORSO_W = [".ffffffff.", "Cccccccccc", "Cccccccccc", "CCcccccccc", "CCcccccccc", "xxxxxxyxxx", ".CCcccccc."];

  function humanFrame(id, poseName, eyes, mouth) {
    var ch = CAST[id], cols = ch.cols, P = POSES[poseName] || POSES.idle0;
    eyes = P.eyes || eyes || "open";
    mouth = P.mouth || mouth || "closed";
    var b = new Buf(26, 30), ox = 1, oy = 1; // 1px margin for outline
    var bob = P.bob || 0, lean = P.lean || 0;
    var shB = [ox + 9 + lean, oy + 16 + bob], shF = [ox + 14 + lean, oy + 16 + bob];
    var hipB = [ox + 10, oy + 21 + Math.max(0, bob)], hipF = [ox + 13, oy + 21 + Math.max(0, bob)];
    function P2(p) { return [ox + p[0] + (p[1] < 22 ? lean : 0), oy + p[1] + (p[1] < 22 ? bob : 0)]; }
    var bh = P2(P.bh), fh = P2(P.fh), bf = [ox + P.bf[0], oy + P.bf[1]], ff = [ox + P.ff[0], oy + P.ff[1]];
    function arm(sh, hand, sleeve, skin) {
      var mx = R(lerp(sh[0], hand[0], 0.55)), my = R(lerp(sh[1], hand[1], 0.55));
      b.line(sh[0], sh[1], mx, my, sleeve, 2);
      b.line(mx, my, hand[0], hand[1], skin, 2);
    }
    function leg(hip, foot, pant, boot) {
      b.line(hip[0], hip[1], foot[0], foot[1] - 2, pant, 2);
      b.rect(foot[0] - 1, foot[1] - 1, 4, 2, boot);
    }
    // cape (behind everything)
    if (ch.cape) {
      var flut = poseName.indexOf("run") === 0 || poseName === "jump" ? 3 : poseName.indexOf("walk") === 0 ? 1 + (poseName.charCodeAt(4) & 1) : 0;
      for (var cy = 0; cy < 10; cy++) {
        var cw = 3 + ((cy * (2 + flut)) / 6) | 0;
        b.rect(ox + 9 + lean - cw + 1 - (cy > 6 ? flut : 0), oy + 15 + bob + cy, cw + 1, 1, cy > 7 ? cols.A : cols.a);
      }
    }
    arm(shB, bh, cols.C, cols.S);
    leg(hipB, bf, cols.P, cols.B);
    b.map(ch.wide ? TORSO_W : TORSO, cols, ox + (ch.wide ? 7 : 8) + lean, oy + 15 + bob);
    leg(hipF, ff, cols.p, cols.b);
    var hm = HEADS[ch.head];
    b.map(hm, cols, ox + 5 + lean, oy + 3 + bob);
    faceCols(cols, hm, ox + 5 + lean, oy + 3 + bob, b, eyes, mouth);
    // front arm with a shaded seam against the torso
    var before = b.d.slice();
    arm(shF, fh, cols.c, cols.s);
    for (var y = 0; y < b.h; y++) for (var x = 0; x < b.w; x++) {
      var k = y * b.w + x;
      if (b.d[k] !== before[k] && (b.d[k] === cols.c || b.d[k] === cols.s)) {
        [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(function (d) {
          var nk = (y + d[1]) * b.w + x + d[0];
          if (x + d[0] < 0 || x + d[0] >= b.w || y + d[1] < 0 || y + d[1] >= b.h) return;
          if (b.d[nk] === before[nk] && b.d[nk] === cols.c) b.d[nk] = cols.C;
        });
      }
    }
    if (P.weapon) {
      b.rect(fh[0] + 1, fh[1] - 2, 1, 5, C.yellow);
      b.rect(fh[0] + 2, fh[1], 8, 1, C.white);
      b.rect(fh[0] + 2, fh[1] + 1, 7, 1, C.grey2);
    }
    b.outline(C.ink);
    if (P.sweat) { b.set(ox + 20, oy + 3, C.skyL); b.set(ox + 20, oy + 4, C.sky); b.set(ox + 21, oy + 4, C.skyL); }
    return b.canvas();
  }

  function wizardFrame(poseName, eyes, mouth) {
    var ch = CAST.orla, cols = ch.cols, P = POSES[poseName] || POSES.idle0;
    eyes = P.eyes || eyes || "open";
    mouth = P.mouth || mouth || "closed";
    var b = new Buf(28, 44), ox = 2, oy = 7;
    var bob = Math.max(-1, Math.min(1, P.bob || 0)), lean = P.lean || 0;
    var walking = /walk|run/.test(poseName), ph = walking ? +poseName.charAt(poseName.length - 1) : 0;
    // feet peeking under robe
    if (walking) { b.rect(ox + 6 + (ph & 2 ? 0 : 5), oy + 35, 4, 1, cols.b); b.rect(ox + 11 - (ph & 2 ? 0 : 5) + 5, oy + 35, 3, 1, cols.b); }
    else b.rect(ox + 8, oy + 35, 8, 1, cols.b);
    // staff hand
    var hand = poseName === "cheer0" || poseName === "cheer1" || poseName === "jump" ? [19, 10] : poseName === "attack" || poseName === "point" ? [21, 18] : poseName === "talk" ? [19, 17] : [18, 22];
    hand = [ox + hand[0] + lean, oy + hand[1] + bob];
    var tilt = poseName === "attack" || poseName === "point" ? 4 : 0;
    // staff (behind robe edge, in front of back arm)
    b.line(hand[0] - tilt, hand[1] - 12, hand[0] + R(tilt * 0.8), hand[1] + 13, cols.t, 1);
    b.line(hand[0] + 1 - tilt, hand[1] - 12, hand[0] + 1 + R(tilt * 0.8), hand[1] + 13, cols.T, 1);
    b.ellipse(hand[0] - tilt + 1, hand[1] - 14, 2.6, 2.6, cols.o, function (x, y, dx, dy) { return dx < -0.1 && dy < -0.1 ? C.white : cols.o; });
    // robe: trapezoid
    for (var y = 0; y < 20; y++) {
      var half = 4 + R(y * 0.36), cx = ox + 12 + (y < 10 ? lean : 0);
      var sway = walking ? ((ph & 1 ? 1 : -1) * (y > 15 ? 1 : 0)) : 0;
      for (var x = -half; x < half; x++) {
        var col = x < -half + 2 ? cols.K : cols.k;
        if (y === 19 || y === 18) col = y === 19 ? cols.y : x < -half + 2 ? cols.K : cols.k;
        if (x === 0 || x === -1) col = y > 4 && y < 18 ? (x === 0 ? C.gold : cols.y) : col;
        b.set(cx + x + sway, oy + 15 + bob + y, col);
      }
    }
    // sleeves
    var shF = [ox + 15 + lean, oy + 18 + bob];
    b.line(shF[0], shF[1], hand[0] - 1, hand[1], cols.k, 3);
    b.rect(hand[0] - 1, hand[1] - 1, 2, 3, cols.s);
    var hm = HEADS.orla;
    b.map(hm, cols, ox + 3 + lean, oy + 1 + bob);
    faceCols(cols, hm, ox + 3 + lean, oy + 1 + bob, b, eyes, mouth);
    b.outline(C.ink);
    if (P.sweat) { b.set(ox + 20, oy + 12, C.skyL); b.set(ox + 20, oy + 13, C.sky); }
    if (poseName === "attack" || poseName === "cheer0") { b.set(hand[0] - tilt + 1, hand[1] - 19, C.white); b.set(hand[0] - tilt + 5, hand[1] - 15, C.cream); b.set(hand[0] - tilt - 3, hand[1] - 16, C.cream); }
    return b.canvas();
  }

  function robotFrame(poseName, eyes, mouth, phase) {
    var cols = CAST.bolt.cols, b = new Buf(26, 28), ox = 2, oy = 1;
    var P = POSES[poseName] || POSES.idle0;
    eyes = P.eyes || eyes || "open";
    mouth = P.mouth || mouth || "closed";
    var lean = P.lean || 0;
    var by = 5 + (P.bob || 0);
    // jet flame
    var fl = (phase || 0) & 1 ? 5 : 3;
    if (/walk|run|jump/.test(poseName)) fl += 2;
    for (var i = 0; i < fl; i++) { var w = Math.max(1, 3 - ((i * 3) / fl) | 0); b.rect(ox + 11 - (w >> 1) + 0, oy + by + 13 + i, w + 1, 1, i < 2 ? C.cream : i < fl - 1 ? C.yellow : C.orange); }
    b.rect(ox + 9, oy + by + 12, 5, 2, cols.D);
    // arms
    var up = /cheer|jump/.test(poseName), fwd = /attack|point|talk/.test(poseName), hurt = poseName === "hurt";
    var la = up ? [ox + 2, oy + by - 3] : hurt ? [ox + 1, oy + by + 1] : [ox + 2, oy + by + 9];
    var ra = up ? [ox + 21, oy + by - 3] : fwd ? [ox + 23, oy + by + 5] : hurt ? [ox + 22, oy + by] : [ox + 20, oy + by + 9];
    b.line(ox + 5, oy + by + 6, la[0], la[1], cols.D, 2);
    b.rect(la[0] - 1, la[1] - 1, 3, 3, cols.G);
    // body
    var bx = ox + 4 + lean;
    b.rect(bx + 1, oy + by, 14, 12, cols.g);
    b.rect(bx, oy + by + 1, 16, 10, cols.g);
    b.rect(bx, oy + by + 8, 16, 3, cols.G);
    b.rect(bx + 1, oy + by + 11, 14, 1, cols.D);
    b.rect(bx + 2, oy + by + 1, 4, 1, C.white);
    // screen
    b.rect(bx + 4, oy + by + 2, 11, 6, cols.n);
    if (eyes === "closed") { b.rect(bx + 6, oy + by + 4, 2, 1, cols.c); b.rect(bx + 11, oy + by + 4, 2, 1, cols.c); }
    else if (hurt) { b.set(bx + 6, oy + by + 3, C.red); b.set(bx + 7, oy + by + 4, C.red); b.set(bx + 6, oy + by + 5, C.red); b.set(bx + 7, oy + by + 3, C.red); b.set(bx + 6, oy + by + 4, C.red); b.set(bx + 12, oy + by + 3, C.red); b.set(bx + 11, oy + by + 4, C.red); b.set(bx + 12, oy + by + 5, C.red); b.set(bx + 11, oy + by + 3, C.red); }
    else { b.rect(bx + 6, oy + by + 3, 2, 2, cols.c); b.rect(bx + 11, oy + by + 3, 2, 2, cols.c); }
    if (mouth === "open") b.rect(bx + 8, oy + by + 6, 3, 1, cols.c);
    else b.rect(bx + 9, oy + by + 6, 1, 1, "#2a6a78");
    // antenna
    b.rect(bx + 8, oy + by - 3, 1, 3, cols.D);
    b.rect(bx + 7, oy + by - 5, 3, 2, (phase || 0) & 2 ? cols.r : C.yellow);
    // front arm
    b.line(bx + 14, oy + by + 6, ra[0], ra[1], cols.G, 2);
    b.rect(ra[0] - 1, ra[1] - 1, 3, 3, cols.g);
    b.outline(C.ink);
    if (fwd && poseName === "attack") { b.set(ra[0] + 2, ra[1], C.aqua); b.set(ra[0] + 3, ra[1] - 1, C.white); b.set(ra[0] + 3, ra[1] + 1, C.aqua); }
    return b.canvas();
  }

  var FRAMES = {};
  /** Get a cast frame canvas (facing right). pose: idle0.. eyes open|closed, mouth closed|open, phase for robot flicker */
  function castFrame(id, pose, eyes, mouth, phase) {
    id = castId(id);
    var kind = CAST[id].kind;
    var key = id + "|" + pose + "|" + (eyes || "") + "|" + (mouth || "") + "|" + (kind === "robot" ? (phase || 0) & 3 : 0);
    if (FRAMES[key]) return FRAMES[key];
    var c = kind === "human" ? humanFrame(id, pose, eyes, mouth) : kind === "wizard" ? wizardFrame(pose, eyes, mouth) : robotFrame(pose, eyes, mouth, phase);
    return (FRAMES[key] = c);
  }

  /** Portrait (bust) 16×16 buffer → canvas, scaled 2× by the dialog. */
  var PORTRAITS = {};
  function portrait(id, mouthOpen, blink) {
    id = castId(id);
    var key = id + "|" + (mouthOpen ? 1 : 0) + (blink ? 1 : 0);
    if (PORTRAITS[key]) return PORTRAITS[key];
    var ch = CAST[id], cols = ch.cols, b = new Buf(18, 18);
    if (ch.kind === "robot") {
      var r = robotFrame(mouthOpen ? "talk" : "idle0", blink ? "closed" : "open", mouthOpen ? "open" : "closed", 2);
      var c0 = canvas(18, 18), g0 = ctx(c0);
      g0.drawImage(r, -3, 0);
      return (PORTRAITS[key] = c0);
    }
    if (ch.kind === "wizard") {
      var hm = HEADS.orla;
      b.rect(2, 16, 14, 2, cols.k);
      b.map(hm.slice(4), cols, 1, 0);
      faceCols(cols, hm.slice(4), 1, 0, b, blink ? "closed" : "open", mouthOpen ? "open" : "closed");
    } else {
      b.rect(3, 13, 12, 5, cols.c);
      b.rect(2, 14, 1, 4, cols.C);
      b.rect(5, 13, 8, 1, cols.f);
      var hm2 = HEADS[ch.head];
      b.map(hm2, cols, 2, 2);
      faceCols(cols, hm2, 2, 2, b, blink ? "closed" : "open", mouthOpen ? "open" : "closed");
    }
    b.outline(C.ink);
    return (PORTRAITS[key] = b.canvas());
  }

  // ───────────── enemies (procedural, 2–3 frames each) ─────────────
  var ENEMY_TINTS = {
    green: ["#1f6b30", "#4cc04a", "#c8f06a"], red: ["#8a1f2e", "#e83c4c", "#f8a0a0"], blue: ["#1f3a8a", "#3a8ae8", "#a8dcf8"],
    purple: ["#3a2160", "#8a4cd0", "#d0a8f8"], orange: ["#8a4010", "#f08a2a", "#ffd090"],
  };
  var ENEMIES = {};
  function enemyFrame(type, f, tint) {
    var key = type + "|" + f + "|" + (tint || "");
    if (ENEMIES[key]) return ENEMIES[key];
    var b, T;
    if (type === "bat") {
      T = ENEMY_TINTS[tint || "purple"];
      b = new Buf(22, 14);
      var wy = f ? 11 : 1;
      b.line(10, 6, 2, wy, T[1], 2); b.line(12, 6, 19, wy, T[1], 2);
      b.line(10, 7, 4, wy + (f ? -1 : 2), T[0], 2); b.line(12, 7, 17, wy + (f ? -1 : 2), T[0], 2);
      b.ellipse(11, 7, 3.6, 3.6, null, shade3(T[0], T[1], T[2]));
      b.set(9, 3, T[1]); b.set(13, 3, T[1]);
      b.set(10, 6, "#ffe040"); b.set(12, 6, "#ffe040");
      b.set(10, 9, C.white); b.set(12, 9, C.white);
    } else if (type === "spike") {
      T = ENEMY_TINTS[tint || "blue"];
      b = new Buf(18, 18);
      for (var k = 0; k < 8; k++) {
        var an = (k / 8) * Math.PI * 2 + (f ? Math.PI / 8 : 0);
        b.line(9 + Math.cos(an) * 4, 9 + Math.sin(an) * 4, 9 + Math.cos(an) * 7.5, 9 + Math.sin(an) * 7.5, C.grey3, 1);
      }
      b.ellipse(9, 9, 5, 5, null, shade3(T[0], T[1], T[2]));
      b.rect(7, 8, 1, 2, C.ink); b.rect(11, 8, 1, 2, C.ink);
      b.set(6, 7, C.ink); b.set(12, 7, C.ink);
    } else if (type === "ghost") {
      b = new Buf(16, 17);
      var gc = ["#9a9ac0", "#dcdcf0", C.white];
      b.ellipse(8, 7, 6, 6, null, shade3(gc[0], gc[1], gc[2]));
      b.rect(2, 7, 12, 6, gc[1]); b.rect(2, 7, 2, 6, gc[0]);
      for (var i = 0; i < 12; i++) if (((i + (f ? 2 : 0)) % 4) < 2) b.set(2 + i, 13, i < 2 ? gc[0] : gc[1]);
      b.rect(5, 6, 2, 3, C.ink); b.rect(10, 6, 2, 3, C.ink);
      b.rect(7, 10, 2, 2, "#5a3a6a");
    } else if (type === "bugbot") {
      T = ENEMY_TINTS[tint || "red"];
      b = new Buf(20, 14);
      for (var l = 0; l < 3; l++) { var lx = 6 + l * 4, d = (l + f) % 2 ? 1 : -1; b.line(lx, 9, lx + d, 12, C.ink, 1); }
      b.ellipse(9, 7, 6.5, 4.5, null, shade3(T[0], T[1], T[2]));
      b.rect(9, 3, 1, 8, C.ink);
      b.ellipse(16, 8, 2.6, 2.6, C.grey1);
      b.set(17, 7, C.yellow);
      b.line(16, 5, 18, 2, C.grey1, 1); b.set(18, 1, C.red);
    } else {
      // slime
      T = ENEMY_TINTS[tint || "green"];
      b = new Buf(18, 15);
      var rx = f === 1 ? 8 : f === 2 ? 6 : 7, ry = f === 1 ? 5 : f === 2 ? 7 : 6;
      b.ellipse(9, 14 - ry + 0.5, rx, ry, null, shade3(T[0], T[1], T[2], 0.05));
      for (var x = 0; x < 18; x++) for (var y = 14; y < 15; y++) b.set(x, y, null);
      var ey = 14 - ry + 1;
      b.rect(6, ey + 1, 2, 2, C.white); b.rect(11, ey + 1, 2, 2, C.white);
      b.set(7, ey + 2, C.ink); b.set(12, ey + 2, C.ink);
      b.rect(8, ey + 4, 3, 1, T[0]);
    }
    b.outline(C.ink);
    return (ENEMIES[key] = b.canvas());
  }
  var ENEMY_TYPES = ["slime", "bat", "spike", "ghost", "bugbot"];

  // ───────────── bosses ─────────────
  var BOSSES = {};
  function bossFrame(type, f) {
    var key = type + "|" + f;
    if (BOSSES[key]) return BOSSES[key];
    var b;
    if (type === "golem") {
      b = new Buf(56, 52);
      var st = ["#4a3e3a", "#8a7a6a", "#c4b49a"], moss = ["#1e6b3a", "#4cc04a"];
      var armY = f ? 22 : 26;
      // arms + fists
      b.rect(3, armY, 8, 14, st[0]); b.ellipse(7, armY + 17, 6, 5, null, shade3(st[0], st[1], st[2]));
      b.rect(45, armY - 2, 8, 14, st[1]); b.ellipse(49, armY + 15, 6, 5, null, shade3(st[0], st[1], st[2]));
      // legs
      b.rect(16, 42, 9, 9, st[0]); b.rect(31, 42, 9, 9, st[1]);
      // torso & head
      b.ellipse(28, 30, 18, 14, null, shade3(st[0], st[1], st[2]));
      b.ellipse(28, 12, 11, 9, null, shade3(st[0], st[1], st[2], 0.1));
      // cracks
      b.line(20, 28, 25, 34, st[0], 1); b.line(25, 34, 23, 39, st[0], 1); b.line(36, 24, 33, 30, st[0], 1);
      // moss
      for (var i = 0; i < 22; i++) if (hash(i * 3.1) > 0.35) b.set(17 + i, 6 + R(hash(i) * 2), moss[i % 2]);
      for (var j = 0; j < 30; j++) if (hash(j * 7.7) > 0.5) b.set(12 + j, 17 + R(hash(j * 2.2) * 2), moss[j % 2]);
      // glowing eyes
      b.rect(21, 11, 5, 2, f ? C.cream : C.yellow); b.rect(31, 11, 5, 2, f ? C.cream : C.yellow);
      b.rect(22, 14, 13, 1, st[0]);
      // core gem
      b.ellipse(28, 30, 4, 4, null, shade3("#145a5a", C.teal, C.aqua));
    } else if (type === "eye") {
      b = new Buf(52, 54);
      // tentacles
      for (var k = 0; k < 5; k++) {
        var tx = 10 + k * 8;
        for (var s = 0; s < 18; s++) {
          var wx = R(Math.sin(s * 0.5 + k + (f ? 1.6 : 0)) * 2.5);
          var w = s < 10 ? 3 : 2;
          b.rect(tx + wx, 34 + s, w, 1, s % 4 === 0 ? "#3a2160" : "#7a3cb8");
        }
      }
      b.ellipse(26, 22, 19, 19, null, shade3("#a8a0c0", "#ecebf4", C.white, 0.15));
      // veins
      b.line(10, 18, 15, 21, "#e86070", 1); b.line(15, 21, 14, 26, "#e86070", 1); b.line(40, 30, 36, 33, "#e86070", 1); b.line(36, 33, 37, 37, "#e86070", 1);
      var ix = f ? 30 : 28;
      b.ellipse(ix, 22, 9, 9, null, shade3("#8a1f2e", "#e83c4c", "#f8a050"));
      b.ellipse(ix, 22, 4.5, 6, C.ink);
      b.rect(ix - 4, 16, 2, 2, C.white);
      // lids (angry)
      b.line(8, 9, 22, 4, "#3a2160", 2); b.line(30, 4, 44, 9, "#3a2160", 2);
    } else {
      // blob king
      b = new Buf(58, 46);
      var rx = f ? 25 : 23, ry = f ? 15 : 17;
      b.ellipse(29, 45 - ry, rx, ry, null, shade3("#3a2160", "#8a4cd0", "#d0a8f8", 0.05));
      for (var x = 0; x < 58; x++) b.set(x, 45, null);
      var top = 45 - ry * 2;
      // crown
      var cy = top - 7;
      b.rect(19, cy + 4, 21, 5, C.yellow); b.rect(19, cy + 7, 21, 2, C.gold);
      [19, 26, 33, 39].forEach(function (px, n) { b.rect(px, cy, 2, 4, C.yellow); b.set(px, cy - 1, n % 2 ? C.red : C.aqua); });
      b.set(29, cy + 5, C.red); b.set(24, cy + 5, C.aqua); b.set(34, cy + 5, C.aqua);
      // eyes
      var ey = top + 9;
      b.ellipse(21, ey, 4.5, 5, C.white); b.ellipse(37, ey, 4.5, 5, C.white);
      b.rect(22, ey - 1, 3, 4, C.ink); b.rect(38, ey - 1, 3, 4, C.ink);
      b.line(15, ey - 7, 25, ey - 3, C.ink, 2); b.line(43, ey - 7, 33, ey - 3, C.ink, 2);
      // mouth with teeth
      var my = ey + 9;
      b.rect(20, my, 19, 5, "#2a0a20"); b.rect(21, my + 5, 17, 1, "#2a0a20");
      for (var tq = 0; tq < 5; tq++) { b.rect(21 + tq * 4, my, 2, 2, C.white); b.set(23 + tq * 4, my + 4, C.white); }
      b.rect(26, my + 3, 6, 2, "#c83c70");
    }
    b.outline(C.ink);
    return (BOSSES[key] = b.canvas());
  }
  var BOSS_TYPES = ["blob", "golem", "eye"];

  // ───────────── items / icons ─────────────
  var IP = { y: C.yellow, Y: C.gold, l: C.cream, w: C.white, g: "#a8acc0", G: C.grey1, k: C.ink, r: C.red, R: C.redD, p: C.pink, b: C.blue, B: "#1f3a8a", c: "#5ae0f0", C: "#1f8ab0", n: "#4cc04a", N: "#1f6b30", u: "#a050e0", U: "#5a2490", t: "#d8a060", T: "#8a5430", o: C.orange };
  var ITEMS = {
    gem: ["..lllccc..", ".lwllcccC.", "llllccccCC", "cccccCCCCC", ".ccccCCCC.", "..cccCCC..", "...ccCC...", "....cC...."],
    heart: [".rr...rr.", "rwrr.rrrR", "rwrrrrrrR", "rrrrrrrrR", ".rrrrrrR.", "..rrrrR..", "...rrR...", "....R...."],
    star: ["....y....", "...yly...", "...yly...", "yyyylyyyY", ".yyllyyY.", "..yyyyY..", ".yyyYyyY.", ".yY...yY.", "yY.....YY"],
    key: [".yyy......", "yl.yy.....", "y...yyyyyy", "y..yYYYYYY", ".yyy...Y.Y", "........Y."],
    scroll: [".tttttttt.", "tTwwwwwwTt", ".twkkkkwt.", ".twwwwwwt.", ".twkkkwwt.", ".twwwwwwt.", "tTwwwwwwTt", ".tttttttt."],
    potion: ["..TTTT..", "...ww...", "...ww...", "..wppw..", ".wrrrrw.", "wrlrrrrw", "wrlrrrRw", "wrrrrRRw", ".wRRRRw."],
    book: ["BBBBBBBB.", "BbbbbbbbB", "BbyyyybbB", "BbbbbbbbB", "BbbyybbbB", "BbbbbbbbB", "Bwwwwwwww", ".BBBBBBBB"],
    sword: [".......lw", "......lwg", ".....lwg.", "....lwg..", ".y.lwg...", "..ywg....", "..yy.....", ".T..y....", "T........"],
    shield: ["gggggggg", "gbbbbBBg", "gbbyyBBg", "gbyyyyBg", "gbbyyBBg", ".gbbBBg.", ".gbbBBg.", "..gbBg..", "...gg..."],
    bulb: ["..yyyy..", ".yllyyy.", "yllyyyyY", "ylyyyyyY", "yyyyyyYY", ".yyyyYY.", "..yYYY..", "..gggg..", "..GGGG..", "...gg..."],
    trophy: [".yyyyyyyy.", "yylyyyyYYy", "y.lyyyyY.y", ".ylyyyyYY.", "..yyyyYY..", "...yyYY...", "....yY....", "...yyYY...", "..TTTTTT.."],
    chest: [".TTTTTTTT.", "TttttttttT", "TttttttttT", "yyyyYyyyyy", "TtttyYtttT", "TttttttttT", "TttttttttT", "TTTTTTTTTT"],
    crystal: ["....u.....", "...lu.....", "...luU....", "..lluUU...", "..luuuU.u.", "u.luuuUluU", "uUluuuUuuU", ".uluuuUuU."],
    clock: ["..gggg..", ".gwwwwg.", "gwwkwwwg", "gwwkwwwg", "gwwkkkwg", "gwwwwwwg", ".gwwwwg.", "..gggg.."],
    bag: ["...tt...", "..TttT..", "...tt...", ".tttttt.", "ttttyttt", "tttyyytT", "ttttyttT", ".ttttTT."],
    gear: ["...gg...", ".g.gg.g.", "..gggg..", "ggg..ggg", "ggg..ggG", "..gggG..", ".g.gG.G.", "...GG..."],
    flag: ["gr......", "grrrrr..", "grrrrrrr", "grrrrR..", "g.......", "g.......", "g.......", "GG......"],
    bomb: ["......y.", ".....T.o", "...kkT..", "..kkkkk.", ".kwkkkkk", ".kwkkkkk", ".kkkkkkk", "..kkkkk."],
    leaf: ["......nn", "....nnnN", "..nnlnNN", ".nnlnnN.", ".nlnnNN.", "nlnNN...", "TNN.....", "T......."],
    zap: ["....yyy", "...yyY.", "..yyY..", ".yyyyyy", "...yyY.", "..yyY..", ".yY....", "yY....."],
    chip: [".g.g.g.", "GGGGGGG", "GkkkkkG", "GkcckkG", "GkkkkkG", "GGGGGGG", ".g.g.g."],
    map: ["tttttttt", "tnnwwttt", "tnwwwtnt", "twwrwnnt", "tnwwwwnt", "ttnnwwtt", "tttttttt"],
  };
  var ITEM_NAMES = ["coin"].concat(Object.keys(ITEMS));
  var ICONS = {};
  function itemIcon(name, frame) {
    name = ITEMS[name] || name === "coin" ? name : "star";
    var key = name + "|" + (frame || 0);
    if (ICONS[key]) return ICONS[key];
    var c;
    if (name === "coin") {
      var f = (frame || 0) % 4, rx = [4.5, 3, 1.2, 3][f];
      var b = new Buf(12, 12);
      b.ellipse(6, 6, rx, 5, null, shade3(C.gold, C.yellow, C.cream));
      if (f !== 2) b.rect(6, 3, 1, 6, f === 0 ? C.gold : C.yellow);
      b.outline(C.ink);
      c = b.canvas();
    } else c = mapCanvas(ITEMS[name], IP, C.ink);
    return (ICONS[key] = c);
  }

  // ═════════════════════════ WORLDS (tilesets, parallax, ambience) ═════════════════════════
  var SW = 256; // parallax strip width (seamless)
  var TAU = Math.PI * 2;
  function per(x, k, ph) { return Math.sin((x / SW) * TAU * k + (ph || 0)); }
  function dith(x, y, p) { return bayer(x, y) < p; }

  function stripBuf(h) { return new Buf(SW, h); }
  /** draw at x and x±SW so sprites crossing the seam wrap */
  function wrapEllipse(b, cx, cy, rx, ry, c, fn) { b.ellipse(cx, cy, rx, ry, c, fn); b.ellipse(cx - SW, cy, rx, ry, c, fn); b.ellipse(cx + SW, cy, rx, ry, c, fn); }
  function wrapRect(b, x, y, w, h, c) { b.rect(x, y, w, h, c); b.rect(x - SW, y, w, h, c); b.rect(x + SW, y, w, h, c); }

  var WORLD_DEFS = {
    grassland: {
      label: "GREEN HILLS", sky: ["#3f7fe0", "#5a9cec", "#86c0f6", "#bfe6fc"], hud: "#1e6b3a",
      far: function (h) {
        var b = stripBuf(h);
        for (var x = 0; x < SW; x++) {
          var m = 0.55 + 0.25 * per(x, 2, 0.3) + 0.14 * per(x, 5, 1.1) + 0.06 * per(x, 11, 2);
          var top = R(h - m * h * 0.95), slope = per(x + 1, 2, 0.3) * 0.25 + per(x + 1, 5, 1.1) * 0.14 - (0.25 * per(x, 2, 0.3) + 0.14 * per(x, 5, 1.1));
          for (var y = Math.max(0, top); y < h; y++) {
            var c = slope > 0 ? "#6a8ad0" : "#7f9fe0";
            if (y - top < 4 && top < h * 0.42) c = slope > 0 ? "#c8d8f4" : C.white;
            if (y > h - 10 && dith(x, y, (y - (h - 10)) / 12)) c = "#8fb0e8";
            b.set(x, y, c);
          }
        }
        return b;
      },
      farH: 0.42, farPar: 0.12,
      mid: function (h, r) {
        var b = stripBuf(h);
        for (var x = 0; x < SW; x++) {
          var top = R(h * 0.45 + 6 * per(x, 3, 0.5) + 4 * per(x, 7, 2));
          for (var y = top; y < h; y++) b.set(x, y, y - top < 2 ? "#4cc04a" : dith(x, y, (y - top) / (h - top) * 0.7) ? "#1e6b3a" : "#2e8a3e");
        }
        for (var i = 0; i < 9; i++) {
          var tx = R(i * (SW / 9) + r() * 14), ty = R(h * 0.45 + 6 * per(tx, 3, 0.5) + 4 * per(tx, 7, 2));
          wrapRect(b, tx - 1, ty - 7, 3, 9, "#6a3c22");
          wrapEllipse(b, tx + 0.5, ty - 11, 7 + r() * 2, 6, null, shade3("#1e6b3a", "#3fa64a", "#8fd85a"));
        }
        b.outline("#174a28");
        return b;
      },
      midH: 0.3, midPar: 0.35,
      ground: function (b, r) {
        for (var x = 0; x < SW; x++) {
          var blade = hash(x * 1.7) > 0.6 ? 1 : 0;
          for (var y = 0; y < b.h; y++) {
            var c;
            if (y < 1 - blade) continue;
            if (y < 2) c = "#8fd85a";
            else if (y < 5) c = dith(x, y, 0.2) ? "#3fa64a" : "#4cc04a";
            else if (y < 7) c = dith(x, y, y === 5 ? 0.6 : 0.25) ? "#3fa64a" : "#8a5430";
            else c = dith(x, y, 0.12 + 0.3 * prog(y, 10, 60)) ? "#6a3c22" : "#8a5430";
            b.set(x, y, c);
          }
        }
        for (var s = 0; s < 40; s++) { var sx = R(r() * SW), sy = 9 + R(r() * (b.h - 12)); b.rect(sx, sy, 3, 2, "#a87048"); b.set(sx, sy, "#c89060"); b.rect(sx, sy + 2, 3, 1, "#4a2c22"); }
      },
      plat: ["#8fd85a", "#4cc04a", "#8a5430", "#4a2c22"],
      deco: ["flower", "flower", "bush", "fence", "sign", "flower2"],
      amb: "pollen", clouds: true,
    },
    cave: {
      label: "CRYSTAL CAVE", sky: ["#0d0818", "#170f28", "#22163a"], hud: "#3a2160", dark: true,
      far: function (h) {
        var b = stripBuf(h);
        for (var x = 0; x < SW; x++) {
          var top = R(h * (0.35 + 0.2 * per(x, 3, 1) + 0.1 * per(x, 8, 0.2)));
          for (var y = top; y < h; y++) b.set(x, y, dith(x, y, 0.3) ? "#241a38" : "#2c2042");
        }
        return b;
      },
      farH: 0.5, farPar: 0.15,
      ceil: function (h, r) {
        var b = stripBuf(h);
        for (var x = 0; x < SW; x++) {
          var d = R(h * (0.25 + 0.12 * per(x, 4, 0.7) + 0.08 * per(x, 9, 2)));
          for (var y = 0; y < d; y++) b.set(x, y, y > d - 2 ? "#4a3a68" : "#2c2042");
        }
        for (var i = 0; i < 14; i++) {
          var sx = R(r() * SW), len = 8 + R(r() * h * 0.5), base = R(h * (0.25 + 0.12 * per(sx, 4, 0.7) + 0.08 * per(sx, 9, 2)));
          for (var y2 = 0; y2 < len; y2++) { var w = Math.max(1, R(4 * (1 - y2 / len))); wrapRect(b, sx - (w >> 1), base + y2 - 2, w, 1, y2 % 5 === 0 ? "#4a3a68" : "#3a2c54"); }
        }
        return b;
      },
      mid: function (h, r) {
        var b = stripBuf(h);
        for (var x = 0; x < SW; x++) {
          var top = R(h * 0.5 + 8 * per(x, 4, 0.1) + 5 * per(x, 9, 1.3));
          for (var y = top; y < h; y++) b.set(x, y, y - top < 1 ? "#5a4a80" : dith(x, y, 0.4) ? "#2c2042" : "#3a2c54");
        }
        for (var i = 0; i < 10; i++) {
          var cx = R(r() * SW), cy = R(h * 0.5 + 8 * per(cx, 4, 0.1) + 5 * per(cx, 9, 1.3)) + 2, ch = 6 + R(r() * 10), col = r() > 0.5 ? ["#1f8ab0", "#5ae0f0", "#d8fcff"] : ["#5a2490", "#a050e0", "#e8c8ff"];
          for (var y3 = 0; y3 < ch; y3++) { var w3 = Math.max(1, R(3 * (y3 / ch)) + 1); wrapRect(b, cx - (w3 >> 1), cy - ch + y3, w3, 1, y3 < 2 ? col[2] : col[1]); wrapRect(b, cx - (w3 >> 1), cy - ch + y3, 1, 1, col[0]); }
        }
        return b;
      },
      midH: 0.32, midPar: 0.4,
      ground: function (b, r) {
        for (var x = 0; x < SW; x++) {
          var bump = hash(Math.floor(x / 5) * 3.3) > 0.5 ? 1 : 0;
          for (var y = bump; y < b.h; y++) {
            var c = y < 1 + bump ? "#8a7ab0" : y < 4 ? (dith(x, y, 0.3) ? "#5a4a80" : "#6a5a92") : y < 6 ? "#3a2c54" : y < 7 ? (dith(x, y, 0.5) ? "#2c2042" : "#3a2c54") : dith(x, y, prog(y, 14, 60) * 0.5) ? "#1e1530" : "#2c2042";
            b.set(x, y, c);
          }
        }
        for (var s = 0; s < 26; s++) { var sx = R(r() * SW), sy = 7 + R(r() * (b.h - 10)); b.rect(sx, sy, 4, 3, "#3a2c54"); b.rect(sx, sy, 4, 1, "#5a4a80"); }
        for (var k = 0; k < 10; k++) { var gx = R(r() * SW), gy = 8 + R(r() * (b.h - 10)); b.set(gx, gy, "#5ae0f0"); b.set(gx + 1, gy + 1, "#1f8ab0"); }
      },
      plat: ["#8a7ab0", "#5a4a80", "#3a2c54", "#1e1530"],
      deco: ["crystal", "crystal2", "rock", "mushglow", "torch"],
      amb: "drip",
    },
    city: {
      label: "NEON CITY", sky: ["#241a58", "#4a2a7a", "#a04a80", "#e8785a", "#f8b868"], hud: "#4a2a7a", sun: true,
      far: function (h, r) {
        var b = stripBuf(h), x = 0;
        while (x < SW) {
          var w = 10 + R(r() * 18), bh = R(h * (0.35 + r() * 0.6));
          if (x + w > SW) w = SW - x;
          b.rect(x, h - bh, w, bh, "#3a2a68");
          if (r() > 0.6) b.rect(x + R(w / 2), h - bh - 5, 1, 5, "#3a2a68");
          for (var wy = h - bh + 3; wy < h - 2; wy += 4) for (var wx = x + 2; wx < x + w - 2; wx += 3) if (r() > 0.7) b.set(wx, wy, r() > 0.3 ? "#f8d878" : "#ffb070");
          x += w + (r() > 0.7 ? 2 : 0);
        }
        return b;
      },
      farH: 0.52, farPar: 0.12,
      mid: function (h, r) {
        var b = stripBuf(h), x = 4;
        while (x < SW - 8) {
          var w = 22 + R(r() * 22), bh = R(h * (0.45 + r() * 0.5));
          if (x + w > SW - 2) w = SW - 2 - x;
          b.rect(x, h - bh, w, bh, "#22183e");
          b.rect(x, h - bh, w, 1, "#4a3a78");
          b.rect(x + w - 2, h - bh, 2, bh, "#1a1230");
          for (var wy = h - bh + 4; wy < h - 4; wy += 6) for (var wx = x + 3; wx < x + w - 4; wx += 5) { var lit = r() > 0.45; b.rect(wx, wy, 3, 3, lit ? "#f8d878" : "#2e2450"); if (lit) b.set(wx, wy, "#fff2b0"); }
          if (r() > 0.5) { var sc = [C.pink, C.aqua, C.lime][R(r() * 2)]; b.rect(x + 3, h - bh + 2, Math.min(12, w - 6), 2, sc); }
          if (r() > 0.4) { b.rect(x + 4, h - bh - 6, 6, 6, "#2e2450"); b.rect(x + 5, h - bh - 8, 4, 2, "#2e2450"); }
          x += w + 4 + R(r() * 6);
        }
        return b;
      },
      midH: 0.42, midPar: 0.35,
      ground: function (b) {
        for (var x = 0; x < SW; x++)
          for (var y = 0; y < b.h; y++) {
            var c;
            if (y === 0) c = "#d4d4e4";
            else if (y < 6) c = x % 16 === 0 ? "#6a6a88" : dith(x, y, 0.15) ? "#8a8aa8" : "#a8a8c4";
            else if (y < 8) c = y === 6 ? "#5a5a78" : "#3a3a50";
            else if (y > 16 && y < 19 && x % 32 < 16) c = "#f8d040";
            else c = dith(x, y, 0.25) ? "#24242e" : "#2e2e3c";
            b.set(x, y, c);
          }
      },
      plat: ["#d4d4e4", "#8a8aa8", "#4a4a68", "#24242e"],
      deco: ["lamp", "bin", "hydrant", "bench", "lamp", "planter"],
      amb: "windows",
    },
    castle: {
      label: "MOON CASTLE", sky: ["#0a0a24", "#141440", "#24245e", "#33336e"], hud: "#5a1a2a", stars: true, moon: true,
      far: function (h, r) {
        var b = stripBuf(h), base = "#262650";
        function tower(x, w, th) {
          b.rect(x, h - th, w, th, base);
          for (var i = 0; i < w; i += 3) b.rect(x + i, h - th - 2, 2, 2, base);
          var roof = R(w * 0.9);
          for (var j = 0; j < roof; j++) b.rect(x + R(j / 2), h - th - 2 - j, Math.max(1, w - j), 1, "#341e4e");
          for (var k = 0; k < 3; k++) if (r() > 0.3) b.rect(x + R(w / 2) - 1, h - th + 5 + k * 8, 2, 3, "#f8c040");
        }
        b.rect(0, R(h * 0.65), SW, h, base);
        for (var i = 0; i < SW; i += 4) b.rect(i, R(h * 0.65) - 2, 2, 2, base);
        tower(20, 14, R(h * 0.7)); tower(60, 18, R(h * 0.95)); tower(110, 12, R(h * 0.6)); tower(150, 20, R(h * 0.85)); tower(205, 14, R(h * 0.72));
        return b;
      },
      farH: 0.55, farPar: 0.1,
      mid: function (h) {
        var b = stripBuf(h), top = R(h * 0.35);
        for (var x = 0; x < SW; x++)
          for (var y = top; y < h; y++) {
            var row = Math.floor((y - top) / 6), bx = (x + (row % 2) * 8) % 16;
            var c = (y - top) % 6 === 0 || bx === 0 ? "#2e2e50" : dith(x, y, 0.2) ? "#3e3e66" : "#46467a";
            b.set(x, y, c);
          }
        for (var i = 0; i < SW; i += 12) b.rect(i, top - 5, 7, 5, "#46467a");
        for (var j = 6; j < SW; j += 64) { b.rect(j, top + 2, 10, 20, "#8a1f2e"); b.rect(j, top + 2, 2, 20, "#5a1020"); b.rect(j + 3, top + 7, 4, 4, C.yellow); for (var q = 0; q < 10; q += 2) b.set(j + q, top + 22, "#8a1f2e"); }
        return b;
      },
      midH: 0.34, midPar: 0.4,
      ground: function (b) {
        for (var x = 0; x < SW; x++)
          for (var y = 0; y < b.h; y++) {
            var c;
            if (y === 0) c = "#b4b4d4";
            else if (y < 5) c = x % 24 === 0 ? "#4a4a70" : dith(x, y, 0.2) ? "#7a7aa0" : "#8a8ab0";
            else { var row = Math.floor((y - 5) / 6), bx = (x + (row % 2) * 10) % 20; c = (y - 5) % 6 === 0 || bx === 0 ? "#26263e" : dith(x, y, 0.15 + prog(y, 6, 50) * 0.4) ? "#3a3a5a" : "#4a4a70"; }
            b.set(x, y, c);
          }
      },
      plat: ["#b4b4d4", "#8a8ab0", "#4a4a70", "#26263e"],
      deco: ["torch", "banner", "barrel", "torch", "statue"],
      amb: "embers",
    },
    space: {
      label: "ORBIT STATION", sky: ["#04040c", "#08081c", "#10102e"], hud: "#145a5a", stars: true, planet: true,
      far: function (h, r) {
        var b = stripBuf(h);
        for (var x = 0; x < SW; x += 64) {
          var mh = R(h * (0.3 + r() * 0.4));
          b.rect(x + 8, h - mh, 30, mh, "#1a1a36");
          b.rect(x + 14, h - mh - 8, 18, 8, "#1a1a36");
          b.rect(x + 22, h - mh - 20, 1, 12, "#2a2a4a");
          for (var k = 0; k < 4; k++) b.rect(x + 11 + k * 7, h - mh + 4, 4, 2, "#3a8ac0");
          b.rect(x + 38, h - mh + 6, 26, 2, "#22223e");
          b.rect(x + 50, h - mh + 2, 2, 10, "#22223e");
        }
        return b;
      },
      farH: 0.5, farPar: 0.08,
      mid: function (h) {
        var b = stripBuf(h), top = R(h * 0.3);
        b.rect(0, top, SW, 2, "#4a4a72"); b.rect(0, h - 3, SW, 3, "#4a4a72");
        for (var x = 0; x < SW; x += 16) { b.line(x, top + 2, x + 16, h - 3, "#34345a", 1); b.line(x + 16, top + 2, x, h - 3, "#34345a", 1); b.rect(x, top, 2, h - top, "#4a4a72"); }
        return b;
      },
      midH: 0.26, midPar: 0.3,
      ground: function (b) {
        for (var x = 0; x < SW; x++)
          for (var y = 0; y < b.h; y++) {
            var c;
            if (y === 0) c = "#e4e6f0";
            else if (y < 4) c = x % 32 === 0 ? "#5a5d78" : "#a8acc4";
            else if (y < 7) c = ((x + y) >> 2) % 2 ? "#f8d040" : C.ink;
            else { var px = x % 32, py = (y - 7) % 20; c = px === 0 || py === 0 ? "#22233a" : px === 1 || py === 1 ? "#5a5d78" : dith(x, y, 0.15) ? "#35364d" : "#3e4058"; if ((px === 4 || px === 28) && (py === 4 || py === 16)) c = "#8b8fa8"; }
            b.set(x, y, c);
          }
      },
      plat: ["#e4e6f0", "#a8acc4", "#5a5d78", "#22233a"],
      deco: ["console", "crate", "antenna", "console", "pod"],
      amb: "space",
    },
    underwater: {
      label: "CORAL DEEP", sky: ["#4ac8e0", "#2a9ac8", "#1a6aa8", "#10467e"], hud: "#145a7a", rays: true,
      far: function (h) {
        var b = stripBuf(h);
        for (var x = 0; x < SW; x++) {
          var top = R(h * (0.4 + 0.25 * per(x, 3, 2) + 0.1 * per(x, 7, 0.4)));
          for (var y = top; y < h; y++) b.set(x, y, dith(x, y, 0.3) ? "#14527e" : "#1a5e8c");
        }
        return b;
      },
      farH: 0.45, farPar: 0.12,
      mid: function (h, r) {
        var b = stripBuf(h);
        for (var x = 0; x < SW; x++) {
          var top = R(h * 0.62 + 5 * per(x, 5, 0.3) + 3 * per(x, 11, 1));
          for (var y = top; y < h; y++) b.set(x, y, y - top < 1 ? "#3a8ab0" : dith(x, y, 0.35) ? "#145a7a" : "#1a6a8c");
        }
        for (var i = 0; i < 8; i++) {
          var cx = R(r() * SW), cy = R(h * 0.62 + 5 * per(cx, 5, 0.3)), col = r() > 0.5 ? "#e86a8a" : "#f08a4a";
          for (var k = 0; k < 4; k++) { var a = -Math.PI / 2 + (k - 1.5) * 0.45; b.line(cx, cy, cx + R(Math.cos(a) * 9), cy + R(Math.sin(a) * 11), col, 2); }
        }
        return b;
      },
      midH: 0.3, midPar: 0.35,
      ground: function (b, r) {
        for (var x = 0; x < SW; x++)
          for (var y = 0; y < b.h; y++) {
            var c;
            if (y === 0) c = "#f8e4b0";
            else if (y < 5) c = (y === 2 && (x % 12) < 5) || (y === 4 && ((x + 6) % 12) < 5) ? "#c8a060" : "#e8c27a";
            else c = dith(x, y, 0.15 + prog(y, 5, 50) * 0.45) ? "#a88048" : "#c8a060";
            b.set(x, y, c);
          }
        for (var s = 0; s < 18; s++) { var sx = R(r() * SW), sy = 7 + R(r() * (b.h - 10)); b.rect(sx, sy, 3, 2, "#f4dca0"); b.set(sx + 1, sy, C.white); }
      },
      plat: ["#f8e4b0", "#e8c27a", "#a88048", "#6a4a28"],
      deco: ["coral", "weed", "starfish", "weed", "shell", "coral2"],
      amb: "bubbles",
    },
  };
  var WORLD_IDS = Object.keys(WORLD_DEFS);
  function worldId(id) { id = str(id).toLowerCase().replace(/[^a-z]/g, ""); var alias = { grass: "grassland", forest: "grassland", hills: "grassland", field: "grassland", mine: "cave", dungeon: "cave", town: "city", street: "city", castle: "castle", kingdom: "castle", station: "space", spacestation: "space", ocean: "underwater", sea: "underwater", water: "underwater" }; id = alias[id] || id; return WORLD_DEFS[id] ? id : "grassland"; }

  // ───────────── decorations ─────────────
  var DECO = {};
  function decoSprite(name) {
    if (DECO[name]) return DECO[name];
    var b;
    switch (name) {
      case "flower": b = new Buf(5, 8); b.rect(2, 3, 1, 5, "#1e6b3a"); b.set(1, 6, "#3fa64a"); b.rect(1, 0, 3, 3, C.pink); b.set(2, 1, C.yellow); break;
      case "flower2": b = new Buf(5, 7); b.rect(2, 3, 1, 4, "#1e6b3a"); b.set(3, 5, "#3fa64a"); b.rect(1, 0, 3, 3, C.white); b.set(2, 1, C.yellow); break;
      case "bush": b = new Buf(20, 11); b.ellipse(6, 7, 6, 5, null, shade3("#1e6b3a", "#3fa64a", "#8fd85a")); b.ellipse(13, 6, 7, 6, null, shade3("#1e6b3a", "#3fa64a", "#8fd85a")); for (var i = 0; i < 20; i++) b.set(i, 10, null); b.set(12, 3, C.red); b.set(7, 5, C.red); break;
      case "fence": b = new Buf(26, 12); [1, 12, 23].forEach(function (x) { b.rect(x, 1, 2, 11, "#c89060"); b.set(x, 0, "#c89060"); }); b.rect(0, 3, 26, 2, "#a87048"); b.rect(0, 8, 26, 2, "#a87048"); break;
      case "sign": b = new Buf(13, 15); b.rect(5, 6, 2, 9, "#8a5430"); b.rect(0, 0, 13, 7, "#c89060"); b.rect(0, 6, 13, 1, "#8a5430"); b.rect(2, 2, 7, 1, "#6a3c22"); b.rect(2, 4, 5, 1, "#6a3c22"); break;
      case "crystal": case "crystal2":
        var cc = name === "crystal" ? ["#1f8ab0", "#5ae0f0", "#d8fcff"] : ["#5a2490", "#a050e0", "#e8c8ff"]; b = new Buf(13, 14);
        [[6, 13, 3, 13], [2, 13, 2, 7], [10, 13, 2, 9]].forEach(function (s) { for (var y = 0; y < s[3]; y++) { var w = Math.max(1, R(s[2] * Math.min(1, (y + 1) / 4))); b.rect(s[0] - (w >> 1), s[1] - s[3] + y + 1, w, 1, y < 2 ? cc[2] : cc[1]); b.set(s[0] - (w >> 1), s[1] - s[3] + y + 1, cc[0]); } }); break;
      case "rock": b = new Buf(14, 8); b.ellipse(7, 7, 7, 6, null, shade3("#2c2042", "#4a3a68", "#7a6a9a")); for (var r2 = 0; r2 < 14; r2++) b.set(r2, 7, null); break;
      case "mushglow": b = new Buf(9, 9); b.rect(4, 4, 2, 5, "#d8d0e8"); b.ellipse(4.5, 3, 4.5, 3, null, shade3("#1f8ab0", "#5ae0f0", "#d8fcff")); for (var m = 0; m < 9; m++) b.set(m, 4, m % 3 ? null : "#1f8ab0"); break;
      case "torch": b = new Buf(6, 12); b.rect(2, 4, 2, 8, "#8a5430"); b.rect(1, 3, 4, 2, C.grey2); break;
      case "banner": b = new Buf(10, 22); b.rect(0, 0, 10, 2, C.grey2); b.rect(1, 2, 8, 17, "#a82838"); b.rect(1, 2, 2, 17, "#6a1020"); b.rect(4, 7, 3, 3, C.yellow); b.set(5, 6, C.yellow); for (var q = 1; q < 9; q += 2) b.set(q, 19, "#a82838"); break;
      case "barrel": b = new Buf(12, 13); b.ellipse(6, 6.5, 6, 6.5, null, shade3("#4a2c22", "#8a5430", "#c89060")); b.rect(0, 3, 12, 1, C.grey1); b.rect(0, 9, 12, 1, C.grey1); for (var z = 0; z < 12; z++) b.set(z, 12, null); break;
      case "statue": b = new Buf(12, 24); b.rect(1, 18, 10, 6, "#6a6a90"); b.rect(0, 18, 12, 1, "#9a9ac0"); b.ellipse(6, 12, 3.5, 6, null, shade3("#4a4a70", "#7a7aa0", "#a0a0c4")); b.ellipse(6, 4, 3, 3, null, shade3("#4a4a70", "#7a7aa0", "#a0a0c4")); break;
      case "lamp": b = new Buf(10, 38); b.rect(4, 6, 2, 32, "#3a3a50"); b.rect(3, 34, 4, 4, "#3a3a50"); b.rect(2, 2, 6, 4, "#3a3a50"); b.rect(3, 3, 4, 3, C.cream); b.rect(1, 1, 8, 1, "#3a3a50"); break;
      case "bin": b = new Buf(9, 11); b.rect(1, 2, 7, 9, "#4a8a5a"); b.rect(0, 1, 9, 2, "#3a6a48"); b.rect(2, 4, 1, 6, "#3a6a48"); b.rect(5, 4, 1, 6, "#3a6a48"); break;
      case "hydrant": b = new Buf(8, 10); b.rect(2, 2, 4, 8, C.red); b.rect(1, 4, 6, 2, C.red); b.rect(2, 1, 4, 1, C.redD); b.rect(2, 2, 1, 8, C.redD); break;
      case "bench": b = new Buf(20, 9); b.rect(0, 0, 20, 2, "#8a5430"); b.rect(0, 4, 20, 2, "#a87048"); b.rect(2, 6, 2, 3, "#3a3a50"); b.rect(16, 6, 2, 3, "#3a3a50"); break;
      case "planter": b = new Buf(14, 20); b.rect(2, 14, 10, 6, "#6a6a88"); b.rect(6, 6, 2, 8, "#6a3c22"); b.ellipse(7, 6, 6, 5, null, shade3("#1e6b3a", "#3fa64a", "#8fd85a")); break;
      case "console": b = new Buf(16, 16); b.rect(1, 4, 14, 12, "#5a5d78"); b.rect(0, 2, 16, 3, "#8b8fa8"); b.rect(3, 6, 10, 5, "#10102e"); b.rect(4, 7, 6, 1, C.aqua); b.rect(4, 9, 4, 1, C.lime); break;
      case "crate": b = new Buf(14, 13); b.rect(0, 0, 14, 13, "#8b8fa8"); b.rect(1, 1, 12, 11, "#5a5d78"); b.line(1, 1, 12, 11, "#8b8fa8", 1); b.rect(5, 5, 4, 3, C.yellow); break;
      case "antenna": b = new Buf(12, 30); b.rect(5, 8, 2, 22, "#5a5d78"); b.ellipse(6, 6, 6, 3, null, shade3("#5a5d78", "#a8acc4", C.white)); b.rect(5, 0, 2, 4, "#5a5d78"); break;
      case "pod": b = new Buf(12, 16); b.rect(1, 10, 10, 6, "#5a5d78"); b.ellipse(6, 8, 5, 6, null, shade3("#1f8ab0", "#5ae0f0", "#d8fcff")); b.rect(5, 6, 2, 6, "#3fa64a"); b.rect(3, 7, 2, 2, "#8fd85a"); break;
      case "coral": case "coral2":
        var col = name === "coral" ? ["#a83858", "#e86a8a", "#ffb0c4"] : ["#b05020", "#f08a4a", "#ffc890"]; b = new Buf(16, 16);
        b.line(8, 15, 8, 4, col[1], 2); b.line(8, 9, 3, 3, col[1], 2); b.line(8, 8, 13, 2, col[1], 2); b.line(3, 6, 1, 1, col[1], 1); b.set(3, 3, col[2]); b.set(13, 2, col[2]); b.set(8, 4, col[2]); break;
      case "starfish": b = new Buf(9, 8); b.rect(3, 2, 3, 4, C.orange); b.rect(0, 3, 9, 1, C.orange); b.rect(4, 0, 1, 2, C.orange); b.set(2, 6, C.orange); b.set(6, 6, C.orange); b.set(1, 7, C.orange); b.set(7, 7, C.orange); b.set(4, 3, C.cream); break;
      case "shell": b = new Buf(9, 6); b.ellipse(4.5, 5, 4.5, 5, null, shade3("#c8a080", "#f4d4c0", C.white)); for (var s2 = 0; s2 < 9; s2 += 2) b.set(s2, 3, "#c8a080"); for (var s3 = 0; s3 < 9; s3++) b.set(s3, 5, null); break;
      default: b = new Buf(4, 4); b.rect(0, 0, 4, 4, C.grey2);
    }
    if (name !== "torch" && name !== "weed") b.outline(C.ink);
    return (DECO[name] = b.canvas());
  }

  // ───────────── world instance (pre-rendered for this frame size) ─────────────
  var WCACHE = {};
  function buildWorld(id, W, H) {
    id = worldId(id);
    var key = id + "|" + W + "x" + H;
    if (WCACHE[key]) return WCACHE[key];
    var def = WORLD_DEFS[id], r = rng(hashS(id) + 7);
    var w = { id: id, def: def, W: W, H: H };
    // sky
    var sky = canvas(W, H), sg = ctx(sky);
    dgrad(sg, 0, 0, W, H, def.sky, 4);
    if (def.stars) {
      var sr = rng(99);
      for (var i = 0; i < (W * H) / 90; i++) { var x = R(sr() * W), y = R(sr() * H * 0.8); sg.fillStyle = sr() > 0.85 ? C.white : sr() > 0.5 ? "#8a8ac0" : "#5a5a90"; sg.fillRect(x, y, 1, 1); }
    }
    if (def.sun) {
      var sb = new Buf(40, 40); sb.ellipse(20, 20, 18, 18, null, function (x, y) { return y > 24 && (y % 3 === 0) ? null : bayer(x, y) < (y - 4) / 40 ? "#f8a058" : "#ffd890"; });
      sg.drawImage(sb.canvas(), R(W * 0.62), R(H * 0.3));
    }
    if (def.moon) {
      var mb = new Buf(26, 26); mb.ellipse(13, 13, 12, 12, null, shade3("#b8b8d0", "#e8e8f4", C.white, 0.2)); mb.ellipse(9, 10, 2.5, 2.5, "#c8c8dc"); mb.ellipse(16, 16, 3, 2.5, "#c8c8dc"); mb.ellipse(17, 7, 1.5, 1.5, "#c8c8dc");
      sg.drawImage(mb.canvas(), R(W * 0.72), R(H * 0.1) + 6);
    }
    if (def.planet) {
      var pr = Math.max(14, R(Math.min(W, H) * 0.16)), pb = new Buf(pr * 4, pr * 2 + 8);
      pb.ellipse(pr * 2, pr + 4, pr, pr, null, function (x, y, dx, dy) { var band = Math.floor((dy + 1) * 5) % 2; var v = -dx * 0.6 - dy * 0.4 + (bayer(x, y) - 0.5) * 0.4; return v < -0.45 ? "#3a2a6a" : band ? (v > 0.3 ? "#f8b8a0" : "#e07a6a") : v > 0.3 ? "#ffd0a0" : "#f0a070"; });
      for (var a = 0; a < 360; a += 1) { var rx = Math.cos((a * Math.PI) / 180) * pr * 1.8, ry = Math.sin((a * Math.PI) / 180) * pr * 0.35; if (ry < 0 && Math.abs(rx) < pr * 0.95) continue; pb.set(R(pr * 2 + rx), R(pr + 4 + ry), ry > 0 ? "#c8c8e8" : "#8a8ab8"); }
      sg.drawImage(pb.canvas(), R(W * 0.55), R(H * 0.08));
    }
    w.sky = sky;
    // parallax strips
    var unit = Math.min(W, H);
    w.farH = R(unit * def.farH);
    w.far = def.far(w.farH, r).canvas();
    if (def.ceil) { w.ceilH = R(unit * 0.35); w.ceil = def.ceil(w.ceilH, r).canvas(); }
    w.midH = R(unit * def.midH);
    w.mid = def.mid(w.midH, r).canvas();
    // ground strip
    var gh = Math.max(24, H);
    var gb = new Buf(SW, gh);
    def.ground(gb, r);
    w.ground = gb.canvas();
    // platform strip
    var pc = def.plat, pbuf = new Buf(SW, 10);
    for (var px = 0; px < SW; px++) for (var py = 0; py < 10; py++) pbuf.set(px, py, py === 0 ? pc[0] : py < 4 ? pc[1] : py < 9 ? (px % 16 === 0 ? pc[3] : pc[2]) : pc[3]);
    w.plat = pbuf.canvas();
    // clouds
    if (def.clouds) {
      w.clouds = [];
      for (var k = 0; k < 3; k++) {
        var cb = new Buf(40, 16), cr = rng(50 + k);
        for (var q = 0; q < 5; q++) cb.ellipse(8 + q * 6 + cr() * 3, 9 - (q % 2) * 2 - cr() * 2, 6 + cr() * 3, 5, null, function (x, y, dx, dy) { return dy > 0.35 && bayer(x, y) < 0.6 ? "#c4dcf4" : C.white; });
        for (var cx = 0; cx < 40; cx++) cb.set(cx, 15, null);
        w.clouds.push(cb.canvas());
      }
    }
    // vignette for dark worlds
    if (def.dark) {
      var vg = canvas(W, H), vgg = ctx(vg), vimg = vgg.createImageData(W, H);
      for (var vy = 0; vy < H; vy++) for (var vx = 0; vx < W; vx++) {
        var dx = (vx - W / 2) / (W / 2), dy = (vy - H / 2) / (H / 2), d = Math.sqrt(dx * dx * 0.8 + dy * dy * 0.9);
        var lvl = Math.floor(clamp((d - 0.55) * 1.5, 0, 0.75) * 4) / 4, k4 = (vy * W + vx) * 4;
        vimg.data[k4] = 6; vimg.data[k4 + 1] = 4; vimg.data[k4 + 2] = 12; vimg.data[k4 + 3] = R(lvl * 255);
      }
      vgg.putImageData(vimg, 0, 0);
      w.vignette = vg;
    }
    return (WCACHE[key] = w);
  }

  /** Draw the background layers (sky → far → ceiling → mid). */
  function drawBack(g, w, camX, groundY, t) {
    var W = w.W, H = w.H, def = w.def;
    g.drawImage(w.sky, 0, 0);
    if (def.stars) {
      for (var i = 0; i < 18; i++) {
        var on = hash(i * 13 + Math.floor(t * 3 + i)) > 0.5;
        if (!on) continue;
        var x = R(hash(i * 7.1) * W), y = R(hash(i * 3.3) * H * 0.6);
        g.fillStyle = C.white; g.fillRect(x, y, 1, 1);
        if (hash(i * 9.9) > 0.6) { g.fillStyle = "#9a9ad0"; g.fillRect(x - 1, y, 3, 1); g.fillRect(x, y - 1, 1, 3); g.fillStyle = C.white; g.fillRect(x, y, 1, 1); }
      }
    }
    if (w.clouds) {
      for (var c = 0; c < 4; c++) {
        var cw = w.clouds[c % 3], span = W + 60;
        var cx = ((hash(c * 5.5) * span - camX * 0.05 - t * (3 + c)) % span + span) % span - 50;
        g.drawImage(cw, R(cx), R(H * 0.06 + hash(c * 2.7) * H * 0.22));
      }
    }
    tileX(g, w.far, camX * def.farPar, groundY - w.farH - R(w.midH * 0.35), W);
    if (w.ceil) tileX(g, w.ceil, camX * 0.25, 0, W);
    if (def.rays) drawRays(g, w, t);
    if (w.id === "underwater") drawKelp(g, w, camX, groundY, t, 0.22, "#10507a", 0);
    tileX(g, w.mid, camX * def.midPar, groundY - w.midH + 2, W);
    if (w.id === "underwater") drawKelp(g, w, camX, groundY, t, 0.5, "#1f7a5a", 1);
  }
  function tileX(g, img, off, y, W) {
    var x = -(((R(off) % SW) + SW) % SW);
    for (; x < W; x += SW) g.drawImage(img, x, R(y));
  }
  function drawRays(g, w, t) {
    for (var i = 0; i < 4; i++) {
      var x0 = R(((i * 0.29 + 0.1) * w.W + Math.sin(t * 0.4 + i) * 10));
      for (var y = 0; y < w.H * 0.75; y += 2) {
        var a = 0.22 * (1 - y / (w.H * 0.75));
        dfill(g, x0 + R(y * 0.35), y, 10 + R(y * 0.12), 2, "#bff4ff", a);
      }
    }
  }
  function drawKelp(g, w, camX, groundY, t, par, col, seed) {
    var spacing = 46;
    var off = camX * par;
    var first = Math.floor(off / spacing) - 1;
    for (var k = first; k < first + w.W / spacing + 3; k++) {
      var bx = k * spacing + R(hash(k * 3.1 + seed) * 20) - off;
      var hgt = R(w.H * (0.25 + hash(k * 1.3 + seed) * 0.3));
      for (var y = 0; y < hgt; y += 1) {
        var sway = R(Math.sin(t * 1.4 + k + y * 0.08) * (y / hgt) * 5);
        g.fillStyle = col; g.fillRect(R(bx + sway), groundY - y, 2, 1);
        if (y % 7 === 3) g.fillRect(R(bx + sway) + (y % 14 === 3 ? 2 : -2), groundY - y, 2, 1);
      }
    }
  }
  /** Ground: tiled strip from groundY to bottom. */
  function drawGround(g, w, camX, groundY, gaps) {
    var x0 = -(((R(camX) % SW) + SW) % SW);
    for (var x = x0; x < w.W; x += SW) g.drawImage(w.ground, 0, 0, SW, w.H - groundY + 1, x, groundY - 1, SW, w.H - groundY + 1);
    if (gaps) for (var i = 0; i < gaps.length; i++) {
      var gx = R(gaps[i][0] - camX), gw = gaps[i][1];
      if (gx > w.W || gx + gw < 0) continue;
      g.fillStyle = "#06040c"; g.fillRect(gx, groundY - 1, gw, w.H - groundY + 1);
      g.fillStyle = C.ink; g.fillRect(gx - 1, groundY - 1, 1, w.H); g.fillRect(gx + gw, groundY - 1, 1, w.H);
    }
  }
  function drawPlatform(g, w, sx, y, pw) {
    sx = R(sx); y = R(y); pw = R(pw);
    g.fillStyle = C.ink; g.fillRect(sx - 1, y - 1, pw + 2, 12);
    g.drawImage(w.plat, 0, 0, Math.min(SW, pw), 10, sx, y, Math.min(SW, pw), 10);
    if (pw > SW) g.drawImage(w.plat, 0, 0, pw - SW, 10, sx + SW, y, pw - SW, 10);
  }
  /** Animated deco + ambient particles (in front of mid layer, behind actors). */
  function drawDeco(g, w, camX, groundY, t, list) {
    for (var i = 0; i < list.length; i++) {
      var d = list[i], img = decoSprite(d.n);
      var x = R(d.x - camX);
      if (x < -40 || x > w.W + 40) continue;
      if (d.n === "weed") { drawWeed(g, x, groundY, t, d.x); continue; }
      g.drawImage(img, x, groundY - img.height + (d.n === "starfish" || d.n === "shell" ? 1 : 0));
      if (d.n === "torch") drawFlame(g, x + 3, groundY - img.height - 1, t, d.x);
      if (d.n === "console" && Math.floor(t * 3 + d.x) % 2) { g.fillStyle = C.red; g.fillRect(x + 12, groundY - img.height + 3, 1, 1); }
      if (d.n === "antenna") { if (Math.floor(t * 2 + d.x) % 2) { g.fillStyle = C.red; g.fillRect(x + 5, groundY - img.height, 2, 2); } }
      if (d.n === "lamp") afill(g, x - 3, groundY - img.height + 6, 16, img.height - 6, C.cream, 0.12);
    }
  }
  function drawFlame(g, x, y, t, seed) {
    var f = Math.floor(t * 10 + seed) % 3;
    var h = [5, 6, 4][f];
    g.fillStyle = C.orange; g.fillRect(x - 2, y - h + 2, 4, h - 1);
    g.fillStyle = C.yellow; g.fillRect(x - 1, y - h + 1 + (f === 1 ? 0 : 1), 2, h - 2);
    g.fillStyle = C.cream; g.fillRect(x - 1 + (f & 1), y - 2, 1, 2);
    afill(g, x - 5, y - 8, 10, 10, C.yellow, 0.12); afill(g, x - 3, y - 6, 6, 6, C.yellow, 0.12);
  }
  function drawWeed(g, x, groundY, t, seed) {
    var hgt = 12 + R(hash(seed) * 10);
    for (var y = 0; y < hgt; y++) {
      var sway = R(Math.sin(t * 2 + seed + y * 0.25) * (y / hgt) * 3);
      g.fillStyle = y % 4 === 0 ? "#1f6b30" : "#3fa64a";
      g.fillRect(x + sway, groundY - y - 1, 2, 1);
    }
  }
  function drawAmbient(g, w, camX, groundY, t, back) {
    var W = w.W, H = w.H, amb = w.def.amb, i, x, y, p;
    if (amb === "pollen") {
      for (i = 0; i < 14; i++) { p = (t * 0.07 + hash(i)) % 1; x = R((((hash(i * 3) * W * 1.4 - camX * 0.8 + Math.sin(t + i) * 10) % W) + W) % W); y = R(groundY - 8 - p * groundY * 0.7); g.fillStyle = i % 3 ? C.cream : C.white; g.fillRect(x, y, 1, 1); }
    } else if (amb === "drip") {
      for (i = 0; i < 6; i++) { p = (t * 0.6 + hash(i * 1.7)) % 1; x = R((((hash(i * 5) * W * 1.2 - camX * 0.6) % W) + W) % W); y = R((w.ceilH || 20) * 0.5 + p * (groundY - (w.ceilH || 20) * 0.5)); g.fillStyle = "#7ad0f0"; g.fillRect(x, y, 1, 2); }
      for (i = 0; i < 10; i++) { x = R((((hash(i * 9) * W - camX * 0.3 + t * 4) % W) + W) % W); y = R(H * 0.2 + hash(i * 4) * H * 0.6 + Math.sin(t * 0.7 + i) * 4); g.fillStyle = "#6a5a92"; g.fillRect(x, y, 1, 1); }
    } else if (amb === "embers") {
      for (i = 0; i < 12; i++) { p = (t * 0.18 + hash(i * 2.3)) % 1; x = R((((hash(i * 11) * W * 1.3 - camX * 0.7 + Math.sin(t * 2 + i) * 6) % W) + W) % W); y = R(groundY - p * groundY * 0.8); g.fillStyle = p > 0.6 ? C.orange : C.yellow; g.fillRect(x, y, 1, 1); }
    } else if (amb === "space") {
      for (i = 0; i < 12; i++) { x = R((((hash(i * 7) * W - camX * 0.5 - t * (10 + i * 2)) % W) + W) % W); y = R(hash(i * 2.9) * groundY * 0.8); g.fillStyle = i % 3 ? "#8a8ac0" : C.white; g.fillRect(x, y, i % 4 === 0 ? 3 : 1, 1); }
    } else if (amb === "bubbles") {
      for (i = 0; i < 12; i++) {
        p = (t * (0.08 + hash(i) * 0.06) + hash(i * 4.1)) % 1;
        x = R((((hash(i * 6) * W * 1.2 - camX * 0.7 + Math.sin(t * 2 + i) * 3) % W) + W) % W);
        y = R(groundY - p * groundY);
        var s = i % 3 === 0 ? 3 : 2;
        g.fillStyle = "#bff4ff"; g.fillRect(x, y, s, 1); g.fillRect(x, y + s, s, 1); g.fillRect(x - 1, y + 1, 1, s - 1); g.fillRect(x + s, y + 1, 1, s - 1);
        g.fillStyle = C.white; g.fillRect(x, y + 1, 1, 1);
      }
    } else if (amb === "windows") {
      for (i = 0; i < 6; i++) { if (hash(i + Math.floor(t * 0.8)) > 0.5) continue; x = R((((hash(i * 8) * W - camX * 0.35) % W) + W) % W); y = R(groundY - w.midH * (0.2 + hash(i * 3) * 0.5)); g.fillStyle = "#fff2b0"; g.fillRect(x, y, 2, 2); }
    }
  }
  function decoList(w, from, to, seed, dens) {
    var r = rng(seed || 5), list = [], x = from + 10 + r() * 30, names = w.def.deco;
    while (x < to) { list.push({ x: R(x), n: names[Math.floor(r() * names.length)] }); x += (28 + r() * 60) / (dens || 1); }
    return list;
  }

  // ═════════════════════════ TEXT ↔ VOICE SYNC ═════════════════════════
  function norm(w) { return str(w).toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ""); }
  /** Wrap cleaned text into lines with char offsets: [{s, e, text}] (e exclusive). */
  function wrapOff(txt, maxW, scale) {
    scale = scale || 1;
    var lines = [], i = 0, n = txt.length;
    while (i < n) {
      while (i < n && txt.charAt(i) === " ") i++;
      if (i >= n) break;
      var j = i, lastSpace = -1, w = 0;
      while (j < n) {
        var cw = charW(txt.charAt(j)) * scale;
        if (w + cw - scale > maxW && j > i) break;
        if (txt.charAt(j) === " ") lastSpace = j;
        w += cw; j++;
      }
      if (j < n && lastSpace > i) j = lastSpace;
      lines.push({ s: i, e: j, text: txt.slice(i, j) });
      i = j;
    }
    return lines;
  }
  /**
   * Typewriter timing for `txt` between t0 and t1. Tries to align the text's words with V.words
   * (so each word appears as it is spoken); otherwise reveals at an even pace.
   * Returns { n(t) → visible chars, speaking(t) → bool, end }.
   */
  function textClock(txt, t0, t1, opts) {
    opts = opts || {};
    var toks = [], re = /\S+/g, m;
    while ((m = re.exec(txt))) toks.push({ s: m.index, e: m.index + m[0].length, w: norm(m[0]) });
    var W = V.words || [], times = null;
    if (W.length && toks.length && opts.sync !== false) {
      // find best starting index near t0
      var best = -1, bestScore = 0;
      for (var k = 0; k < W.length; k++) {
        if (W[k].start < t0 - 1.5) continue;
        if (W[k].start > (t1 || t0 + 30) + 0.5) break;
        if (norm(W[k].word) !== toks[0].w) continue;
        var sc = 0;
        for (var q = 0; q < Math.min(6, toks.length) && k + q < W.length; q++) if (norm(W[k + q].word) === toks[q].w) sc++;
        if (sc > bestScore) { bestScore = sc; best = k; }
        if (sc >= Math.min(4, toks.length)) break;
      }
      if (best >= 0 && bestScore >= Math.min(2, toks.length)) {
        times = [];
        var wi = best;
        for (var ti = 0; ti < toks.length; ti++) {
          var found = -1;
          for (var look = wi; look < Math.min(W.length, wi + 4); look++) if (norm(W[look].word) === toks[ti].w) { found = look; break; }
          if (found >= 0) { times.push([W[found].start, W[found].end]); wi = found + 1; }
          else times.push(null);
        }
        // fill gaps
        for (var a = 0; a < times.length; a++) if (!times[a]) {
          var prev = a > 0 ? times[a - 1][1] : t0, b = a + 1;
          while (b < times.length && !times[b]) b++;
          var next = b < times.length ? times[b][0] : prev + 0.3 * (b - a);
          for (var c2 = a; c2 < b; c2++) { var f0 = (c2 - a) / (b - a), f1 = (c2 - a + 1) / (b - a); times[c2] = [lerp(prev, next, f0), lerp(prev, next, f1)]; }
          a = b - 1;
        }
      }
    }
    var total = txt.length;
    if (!times) {
      var span = Math.max(0.3, (t1 || t0 + total / 24) - t0);
      var cps = clamp(total / (span * 0.85), 14, 60);
      return {
        n: function (t) { return t < t0 ? 0 : Math.min(total, (t - t0) * cps); },
        speaking: function (t) { return t >= t0 && (t - t0) * cps < total; },
        end: t0 + total / cps,
        synced: false,
      };
    }
    return {
      n: function (t) {
        if (t < times[0][0] - 0.05) return 0;
        var lo = 0, hi = toks.length - 1, idx = -1;
        while (lo <= hi) { var mid = (lo + hi) >> 1; if (times[mid][0] - 0.05 <= t) { idx = mid; lo = mid + 1; } else hi = mid - 1; }
        if (idx < 0) return 0;
        var tk = toks[idx], tm = times[idx], d = Math.max(0.08, Math.min(tm[1] - tm[0], 0.35));
        var p = clamp((t - tm[0] + 0.05) / d, 0, 1);
        return tk.s + (tk.e - tk.s) * p + (p >= 1 ? 1 : 0);
      },
      speaking: function (t) {
        for (var i = 0; i < times.length; i++) { if (times[i][0] > t) return false; if (t <= times[i][1] + 0.02) return true; }
        return false;
      },
      end: times[times.length - 1][1],
      synced: true,
    };
  }
  /** Ordered key times for a list of labels/keywords (uses S.syncTimes when available). */
  function keyTimes(keys, opts) {
    try { if (S.syncTimes) return S.syncTimes(keys, opts || {}); } catch (e) {}
    var n = keys.length, out = [];
    for (var i = 0; i < n; i++) out.push(0.4 + ((D() * 0.7) * i) / Math.max(1, n));
    return out;
  }
  function autoKey(s) { try { return S.autoKey ? S.autoKey(s) : null; } catch (e) { return null; } }
  function wordAt(t) {
    var W = V.words || [];
    for (var i = 0; i < W.length; i++) { if (W[i].start > t) return false; if (t <= W[i].end + 0.03) return true; }
    return false;
  }

  // ═════════════════════════ UI PRIMITIVES ═════════════════════════
  var WIN = {
    blue: { fill: ["#2c3c9c", "#1c2470", "#141a50"], b1: C.white, b2: "#8a9ad8" },
    dark: { fill: ["#24203e", "#18142e", "#100c20"], b1: C.grey3, b2: C.grey1 },
    red: { fill: ["#9a2a3c", "#6a1a2a", "#4a1020"], b1: C.white, b2: "#e88a9a" },
    green: { fill: ["#2a7a4a", "#1c5a36", "#124026"], b1: C.white, b2: "#8ad8a0" },
    paper: { fill: ["#f4e4b8", "#e8d0a0", "#dcc090"], b1: "#6a4a28", b2: "#a87a48", ink: true },
    gold: { fill: ["#5a3c10", "#3e2808", "#2a1a04"], b1: C.yellow, b2: C.gold },
  };
  /** RPG window. open 0..1 animates height from the centre. */
  function drawWin(g, x, y, w, h, o) {
    o = o || {};
    var st = WIN[o.style] || WIN.blue, open = o.open == null ? 1 : o.open;
    if (open <= 0) return;
    if (open < 1) { var nh = Math.max(4, R(h * open)); y += R((h - nh) / 2); h = nh; }
    x = R(x); y = R(y); w = R(w); h = R(h);
    if (o.shadow !== false) dfill(g, x + 3, y + 3, w, h, C.ink, 0.5);
    g.fillStyle = C.ink;
    g.fillRect(x + 1, y, w - 2, h); g.fillRect(x, y + 1, w, h - 2);
    g.fillStyle = st.b1;
    g.fillRect(x + 2, y + 1, w - 4, h - 2); g.fillRect(x + 1, y + 2, w - 2, h - 4);
    g.fillStyle = st.b2;
    g.fillRect(x + 2, y + 2, w - 4, h - 4);
    dgrad(g, x + 3, y + 3, w - 6, h - 6, st.fill, 2);
    // corner rivets
    g.fillStyle = st.b2;
    if (w > 20 && h > 16 && !st.ink) { g.fillRect(x + 4, y + 4, 1, 1); g.fillRect(x + w - 5, y + 4, 1, 1); g.fillRect(x + 4, y + h - 5, 1, 1); g.fillRect(x + w - 5, y + h - 5, 1, 1); }
  }
  function winInk(style) { return WIN[style] && WIN[style].ink ? "#3a2410" : C.white; }
  function winShadow(style) { return WIN[style] && WIN[style].ink ? "#d8b880" : C.ink; }

  function blink(t, rate) { return Math.floor(t * (rate || 2)) % 2 === 0; }

  // ═════════════════════════ GAME (scene graph) ═════════════════════════
  function makeScreen(root) {
    var Wp = Math.max(16, V.width || 1920), Hp = Math.max(16, V.height || 1080);
    var k = Math.max(1, Math.round(Math.min(Wp, Hp) / 180));
    var W = Math.ceil(Wp / k), H = Math.ceil(Hp / k);
    var c = canvas(W, H);
    c.className = "pq-canvas";
    c.style.width = W * k + "px";
    c.style.height = H * k + "px";
    root.classList.add("pq-root");
    root.appendChild(c);
    var scan = document.createElement("div");
    scan.className = "pq-scan";
    scan.style.backgroundSize = "100% " + k + "px";
    if (k >= 3) root.appendChild(scan);
    return { c: c, g: ctx(c), W: W, H: H, k: k };
  }

  function Game(root, o) {
    o = o || {};
    var self = this;
    root = root || V.root();
    var sc = makeScreen(root);
    this.root = root; this.canvas = sc.c; this.ctx = sc.g; this.W = sc.W; this.H = sc.H; this.k = sc.k;
    this.portrait = this.H > this.W * 1.15; this.square = !this.portrait && this.W < this.H * 1.15; this.landscape = !this.portrait && !this.square;
    this.worldId = worldId(o.world);
    this.world = buildWorld(this.worldId, this.W, this.H);
    this.groundY = o.groundY != null ? R(o.groundY) : R(this.H * (this.portrait ? 0.62 : 0.8));
    this.length = o.length || this.W;
    this.bg = o.background !== false;
    this.bgColor = o.bgColor || null;
    this.ents = []; this.ui = []; this.shakes = []; this.flashes = []; this.scoreEv = []; this.heartEv = []; this.platforms = []; this.gaps = [];
    this.actors = {};
    this.decoOn = o.deco !== false;
    this.deco = this.decoOn ? decoList(this.world, -40, this.length + this.W + 40, hashS(this.worldId) + (o.seed || 0), o.decoDensity) : [];
    this.camFn = null;
    this.intro = o.intro || "iris";
    this.baseScore = o.score != null ? o.score : 0;
    this.hearts = o.hearts != null ? o.hearts : 3;
    this.maxHearts = o.maxHearts || 3;
    this.hudOpts = null;
    this.toasts = [];
    this.frameFns = [];
    V.onFrame(function (t) { self.frame(t); });
  }
  var G = Game.prototype;
  G.cam = function (t) { return this.camFn ? this.camFn(t) : 0; };
  G.follow = function (actor, o) {
    o = o || {};
    var self = this, lead = o.lead != null ? o.lead : 0.38, min = o.min != null ? o.min : 0, max = o.max != null ? o.max : Math.max(0, this.length - this.W);
    this.camFn = function (t) { return R(clamp(actor.xAt(t) - self.W * lead, min, max)); };
    return this;
  };
  G.camera = function (keys) { // [[t, x], ...] eased
    keys = keys.slice().sort(function (a, b) { return a[0] - b[0]; });
    this.camFn = function (t) {
      if (!keys.length) return 0;
      if (t <= keys[0][0]) return keys[0][1];
      for (var i = 1; i < keys.length; i++) if (t < keys[i][0]) return R(lerp(keys[i - 1][1], keys[i][1], inOut(prog(t, keys[i - 1][0], keys[i][0]))));
      return keys[keys.length - 1][1];
    };
    return this;
  };
  G.add = function (e) { this.ents.push(e); return e; };
  G.ovl = function (e) { this.ui.push(e); return e; };
  G.draw = function (fn, z) { return this.add({ z: z == null ? 5 : z, draw: fn }); };
  G.overlay = function (fn, z) { var e = { z: z == null ? 50 : z, draw: fn }; this.ui.push(e); return e; };
  G.platform = function (x, y, w) { var p = { x: x, y: y, w: w }; this.platforms.push(p); return p; };
  G.gap = function (x, w) { this.gaps.push([x, w]); return this; };
  G.shake = function (at, power, dur) { this.shakes.push({ t: at, p: power == null ? 3 : power, d: dur || 0.35 }); return this; };
  G.flash = function (at, color, dur) { this.flashes.push({ t: at, c: color || C.white, d: dur || 0.25 }); return this; };
  G.score = function (at, value) { this.scoreEv.push({ t: at, v: value == null ? 100 : value }); return this; };
  G.loseHeart = function (at) { this.heartEv.push({ t: at, v: -1 }); return this; };
  G.gainHeart = function (at) { this.heartEv.push({ t: at, v: 1 }); return this; };
  G.scoreAt = function (t) {
    var s = this.baseScore;
    for (var i = 0; i < this.scoreEv.length; i++) { var e = this.scoreEv[i]; if (t > e.t) s += e.v * Math.min(1, (t - e.t) / 0.4); }
    return Math.max(0, Math.round(s / 10) * 10);
  };
  G.heartsAt = function (t) { var h = this.hearts; for (var i = 0; i < this.heartEv.length; i++) if (t >= this.heartEv[i].t) h += this.heartEv[i].v; return clamp(h, 0, this.maxHearts); };
  G.shakeAt = function (t) {
    var x = 0, y = 0;
    for (var i = 0; i < this.shakes.length; i++) {
      var s = this.shakes[i], p = (t - s.t) / s.d;
      if (p < 0 || p > 1) continue;
      var a = s.p * (1 - p);
      x += Math.sin((t - s.t) * 97 + i) * a; y += Math.cos((t - s.t) * 83 + i * 2) * a;
    }
    return [R(x), R(y)];
  };
  G.hud = function (o) { this.hudOpts = o || {}; return this; };

  G.frame = function (t) {
    var g = this.ctx, W = this.W, H = this.H;
    g.setTransform(1, 0, 0, 1, 0, 0);
    g.globalAlpha = 1;
    g.globalCompositeOperation = "source-over";
    g.imageSmoothingEnabled = false;
    var cam = this.cam(t), sh = this.shakeAt(t);
    g.fillStyle = this.bgColor || C.ink;
    g.fillRect(0, 0, W, H);
    g.save();
    g.translate(sh[0], sh[1]);
    if (this.bg) {
      drawBack(g, this.world, cam, this.groundY, t);
      drawAmbient(g, this.world, cam, this.groundY, t, true);
      if (this.decoOn) drawDeco(g, this.world, cam, this.groundY, t, this.deco);
      for (var p = 0; p < this.platforms.length; p++) { var pl = this.platforms[p]; drawPlatform(g, this.world, pl.x - cam, pl.y, pl.w); }
      if (this.groundY < H) drawGround(g, this.world, cam, this.groundY, this.gaps);
    }
    var ents = this.ents.slice().sort(function (a, b) { return (a.z || 0) - (b.z || 0); });
    for (var i = 0; i < ents.length; i++) { try { ents[i].draw(g, t, cam); } catch (e) { V.error("pixel-quest draw: " + (e && e.message)); } }
    if (this.world.vignette && this.bg) g.drawImage(this.world.vignette, 0, 0);
    g.restore();
    if (this.hudOpts) this.drawHud(g, t);
    this.drawToasts(g, t);
    var ui = this.ui.slice().sort(function (a, b) { return (a.z || 0) - (b.z || 0); });
    for (var u = 0; u < ui.length; u++) { try { ui[u].draw(g, t, cam); } catch (e2) { V.error("pixel-quest ui: " + (e2 && e2.message)); } }
    for (var f = 0; f < this.flashes.length; f++) { var fl = this.flashes[f], fp = (t - fl.t) / fl.d; if (fp >= 0 && fp < 1) afill(g, 0, 0, W, H, fl.c, 0.75 * (1 - fp)); }
    this.drawIntro(g, t);
  };
  G.drawIntro = function (g, t) {
    var W = this.W, H = this.H, p;
    if (this.intro === "iris") {
      p = prog(t, 0, 0.5);
      if (p >= 1) return;
      var r = outCubic(p) * Math.sqrt(W * W + H * H) * 0.55, cx = W / 2, cy = H * 0.55;
      g.fillStyle = C.ink;
      for (var y = 0; y < H; y++) {
        var dy = y + 0.5 - cy, hw = r * r - dy * dy;
        if (hw <= 0) { g.fillRect(0, y, W, 1); continue; }
        hw = Math.sqrt(hw);
        g.fillRect(0, y, Math.max(0, R(cx - hw)), 1); g.fillRect(R(cx + hw), y, W, 1);
      }
    } else if (this.intro === "dither") {
      p = prog(t, 0, 0.6);
      if (p < 1) dfill(g, 0, 0, W, H, C.ink, 1 - Math.floor(p * 5) / 5);
    } else if (this.intro === "wipe") {
      p = prog(t, 0, 0.45);
      if (p >= 1) return;
      var cells = 12, cw = Math.ceil(W / cells);
      g.fillStyle = C.ink;
      for (var i = 0; i < cells; i++) { var q = clamp(p * 2 - (i / cells), 0, 1); g.fillRect(i * cw, 0, R(cw * (1 - q)), H); }
    }
  };

  // ───────────── HUD ─────────────
  var HEART_S = null, HEART_E = null;
  function heartIcons() {
    if (HEART_S) return;
    var m = [".rr.rr.", "rlrrrrR", "rrrrrrR", ".rrrrR.", "..rrR..", "...R..."];
    HEART_S = mapCanvas(m, { r: C.red, R: C.redD, l: C.white }, C.ink);
    HEART_E = mapCanvas(m, { r: C.grey0, R: C.grey0, l: C.grey1 }, C.ink);
  }
  function pad6(n) { var s = String(Math.max(0, Math.round(n))); while (s.length < 6) s = "0" + s; return s; }
  G.drawHud = function (g, t) {
    heartIcons();
    var o = this.hudOpts, W = this.W, k = this.portrait || W < 240;
    var barH = 13;
    dfill(g, 0, 0, W, barH, C.ink, 0.75);
    g.fillStyle = C.ink; g.fillRect(0, barH, W, 1);
    // hearts
    var hearts = this.heartsAt(t), max = this.maxHearts;
    for (var i = 0; i < max; i++) {
      var pulse = i === hearts - 1 && hearts === 1 && blink(t, 4) ? 1 : 0;
      g.drawImage(i < hearts ? HEART_S : HEART_E, 3 + i * 9, 3 - pulse);
    }
    // score
    var sc = this.scoreAt(t);
    var coin = itemIcon("coin", Math.floor(t * 8) % 4);
    var sx = W - 3 - measure("000000");
    text(g, pad6(sc), sx, 3, { color: C.white, shadow: C.ink });
    g.drawImage(coin, sx - 13, 1);
    // level name
    var name = clean(o.level || this.world.def.label).toUpperCase();
    var left = 4 + max * 9 + 4, right = sx - 16, avail = right - left;
    if (measure(name) <= avail) text(g, name, R((left + right) / 2), 3, { color: C.yellow, shadow: C.ink, align: "center" });
    else {
      // second row under the bar
      dfill(g, 0, barH + 1, W, 11, C.ink, 0.6);
      var nm = name; while (measure(nm) > W - 8 && nm.length > 3) nm = nm.slice(0, -1);
      text(g, nm, R(W / 2), barH + 3, { color: C.yellow, shadow: C.ink, align: "center" });
      barH += 11;
    }
    // XP bar = narration progress
    if (o.xp !== false) {
      var xp = clamp(t / lastT(), 0, 1), bx = 3, bw = W - 6, by = barH + 2;
      g.fillStyle = C.ink; g.fillRect(bx, by, bw, 4);
      g.fillStyle = "#24203e"; g.fillRect(bx + 1, by + 1, bw - 2, 2);
      var fw = R((bw - 2) * xp);
      g.fillStyle = "#4cc04a"; g.fillRect(bx + 1, by + 1, fw, 2);
      g.fillStyle = C.lime; g.fillRect(bx + 1, by + 1, fw, 1);
      if (fw > 2 && blink(t, 6)) { g.fillStyle = C.white; g.fillRect(bx + fw - 1, by + 1, 2, 2); }
      text(g, "XP", bx + 1, by + 6, { color: C.lime, shadow: C.ink });
    }
    this.hudBottom = barH + 6;
  };

  // ───────────── toasts ("ITEM GET!") ─────────────
  G.toast = function (label, at, o) { o = o || {}; this.toasts.push({ label: clean(label), t: at, icon: o.icon || null, title: o.title || null, dur: o.dur || null, style: o.style || "blue", pos: o.pos || "top", until: o.until }); return this; };
  G.drawToasts = function (g, t) {
    if (!this.toasts.length) return;
    var list = this.toasts.slice().sort(function (a, b) { return a.t - b.t; });
    var cur = null, next = null;
    for (var i = 0; i < list.length; i++) if (list[i].t <= t) { cur = list[i]; next = list[i + 1] || null; }
    if (!cur) return;
    var end = cur.dur ? cur.t + cur.dur : next ? next.t : Math.max(cur.t + 3, lastT() + 1);
    if (cur.until != null) end = Math.min(end, cur.until);
    if (t > end) return;
    var W = this.W, maxW = W - 24, iconW = cur.icon ? 16 : 0;
    var sc = measure(cur.label, 2) + iconW + 16 <= maxW ? 2 : 1;
    var lines = sc === 2 ? [cur.label] : wrap(cur.label, maxW - iconW - 12, 1).slice(0, 2);
    var tw = 0; for (var l = 0; l < lines.length; l++) tw = Math.max(tw, measure(lines[l], sc));
    var bw = Math.min(W - 8, tw + iconW + 16), bh = Math.max(lines.length * FONT.lh * sc + 10, 24);
    var top = cur.pos === "bottom" ? this.H - bh - 8 : (this.hudOpts ? this.hudBottom || 24 : 4) + 4;
    var pIn = outBack(prog(t, cur.t, cur.t + 0.25)), pOut = prog(t, end - 0.2, end);
    var y = cur.pos === "bottom" ? R(lerp(this.H + 4, top, pIn) + pOut * (bh + 12)) : R(lerp(-bh - 4, top, pIn) - pOut * (bh + top + 4));
    var x = R((W - bw) / 2);
    drawWin(g, x, y, bw, bh, { style: cur.style });
    if (cur.title) {
      var tw2 = measure(cur.title) + 8;
      drawWin(g, x + 6, y - 7, tw2, 13, { style: "gold", shadow: false });
      text(g, cur.title, x + 10, y - 4, { color: C.yellow });
    }
    if (cur.icon) { var ic = itemIcon(cur.icon, Math.floor(t * 8)); g.drawImage(ic, x + 6, R(y + bh / 2 - ic.height / 2)); }
    var ty = R(y + (bh - lines.length * FONT.lh * sc) / 2 + sc);
    for (var j = 0; j < lines.length; j++) text(g, lines[j], x + 8 + iconW, ty + j * FONT.lh * sc, { color: C.white, scale: sc, shadow: C.ink });
  };

  // ───────────── particles & popups (world coordinates) ─────────────
  G.burst = function (x, y, at, o) {
    o = o || {};
    var n = o.n || 14, life = o.life || 0.7, cols = o.colors || [C.yellow, C.white, C.orange], spd = o.speed || 60, grav = o.gravity == null ? 160 : o.gravity, size = o.size || 2, seed = hashS(x + ":" + y + ":" + at), screen = !!o.screen;
    var ps = [];
    for (var i = 0; i < n; i++) {
      var a = hash(seed + i * 1.37) * TAU, s = spd * (0.35 + hash(seed + i * 2.71) * 0.65);
      ps.push({ vx: Math.cos(a) * s, vy: Math.sin(a) * s - spd * (o.up || 0.5), c: cols[i % cols.length], l: life * (0.6 + hash(seed + i * 0.77) * 0.4) });
    }
    var add = screen ? this.overlay.bind(this) : null;
    var ent = { z: o.z || 30, draw: function (g, t, cam) {
      var dt = t - at;
      if (dt < 0 || dt > life) return;
      for (var i = 0; i < ps.length; i++) {
        var p = ps[i];
        if (dt > p.l) continue;
        var px = R(x + p.vx * dt - (screen ? 0 : cam)), py = R(y + p.vy * dt + 0.5 * grav * dt * dt), s = Math.max(1, Math.ceil(size * (1 - dt / p.l)));
        g.fillStyle = p.c; g.fillRect(px, py, s, s);
      }
    } };
    if (add) { this.ui.push(ent); return ent; }
    return this.add(ent);
  };
  G.sparkle = function (x, y, at, o) {
    o = o || {};
    var dur = o.dur || 0.5, col = o.color || C.white;
    return (o.screen ? this.ovl : this.add).call(this, { z: o.z || (o.screen ? 58 : 31), draw: function (g, t, cam) {
      var p = (t - at) / dur;
      if (p < 0 || p > 1) return;
      var r = R(2 + p * 6), px = R(x - (o.screen ? 0 : cam)), py = R(y);
      g.fillStyle = col;
      g.fillRect(px - r, py, r * 2 + 1, 1); g.fillRect(px, py - r, 1, r * 2 + 1);
      if (p < 0.5) { g.fillStyle = C.yellow; g.fillRect(px - 1, py - 1, 3, 3); g.fillStyle = col; g.fillRect(px, py, 1, 1); }
    } });
  };
  G.popup = function (s, x, y, at, o) {
    o = o || {};
    var dur = o.dur || 0.9, col = o.color || C.yellow, s2 = clean(s), sc = o.scale || 1;
    return (o.screen ? this.ovl : this.add).call(this, { z: o.z || (o.screen ? 59 : 40), draw: function (g, t, cam) {
      var p = (t - at) / dur;
      if (p < 0 || p > 1) return;
      if (p > 0.75 && blink(t, 16)) return;
      var yy = y - outCubic(Math.min(1, p * 1.6)) * (o.rise == null ? 14 : o.rise);
      text(g, s2, x - (o.screen ? 0 : cam), yy, { color: col, align: "center", outline: C.ink, scale: sc });
    } });
  };
  /** Big pixel explosion (rings of squares + debris + flash + shake). */
  G.explode = function (x, y, at, o) {
    o = o || {};
    var big = o.big ? 2 : 1;
    this.burst(x, y, at, { n: 26 * big, speed: 90 * big, life: 0.9, colors: [C.white, C.yellow, C.orange, C.red], size: 3, up: 0.3, gravity: 120 });
    this.burst(x, y, at + 0.08, { n: 14 * big, speed: 50 * big, life: 0.7, colors: [C.grey3, C.grey2], size: 2, gravity: 40 });
    this.add({ z: 32, draw: function (g, t, cam) {
      var p = (t - at) / 0.4;
      if (p < 0 || p > 1) return;
      var r = R((6 + p * 20) * big), cx = R(x - cam), cy = R(y);
      g.fillStyle = p < 0.4 ? C.white : C.yellow;
      for (var a = 0; a < 16; a++) { var an = (a / 16) * TAU; g.fillRect(cx + R(Math.cos(an) * r) - 1, cy + R(Math.sin(an) * r) - 1, 3, 3); }
      if (p < 0.3) { g.fillStyle = C.white; g.fillRect(cx - 5 * big, cy - 5 * big, 10 * big, 10 * big); }
    } });
    this.shake(at, o.big ? 5 : 3, 0.4);
    if (o.flash !== false) this.flash(at, C.white, 0.18);
    return this;
  };

  // ───────────── actors ─────────────
  var FOOT = { human: 29, wizard: 43, robot: 28 };
  function Actor(game, id, o) {
    o = o || {};
    this.game = game; this.id = castId(id); this.kind = CAST[this.id].kind;
    this.x0 = o.x != null ? o.x : 40; this.y0 = o.y != null ? o.y : game.groundY; this.f0 = o.face || 1;
    this.z = o.z != null ? o.z : 20; this.scale = o.scale || 1; this.shadow = o.shadow !== false;
    this.moves = []; this.jumps = []; this.poses = []; this.faces = []; this.talks = []; this.vis = []; this.hurts = [];
    this.resolved = false;
    this.speed = o.speed || 55;
    var self = this;
    game.add({ z: this.z, actor: this, draw: function (g, t, cam) { self.draw(g, t, cam); } });
  }
  var A = Actor.prototype;
  A.walkTo = function (x, at, dur) { this.moves.push({ t0: at, x1: x, dur: dur, mode: "walk" }); this.resolved = false; return this; };
  A.runTo = function (x, at, dur) { this.moves.push({ t0: at, x1: x, dur: dur, mode: "run" }); this.resolved = false; return this; };
  A.jump = function (at, o) { o = o || {}; var j = { t0: at, dur: o.dur || 0.55, h: o.h == null ? 20 : o.h, to: o.to, dx: o.dx || 0 }; this.jumps.push(j); if (j.dx) this.moves.push({ t0: at, x1: null, dx: j.dx, dur: j.dur, mode: "jump" }); this.resolved = false; return this; };
  A.pose = function (name, at, dur) { this.poses.push({ n: name, t0: at, t1: at + (dur == null ? 1e9 : dur) }); return this; };
  A.cheer = function (at, dur) { return this.pose("cheer", at, dur == null ? 1.2 : dur); };
  A.face = function (dir, at) { this.faces.push({ t: at || 0, d: dir < 0 ? -1 : 1 }); this.faces.sort(function (a, b) { return a.t - b.t; }); return this; };
  A.hurt = function (at, o) { o = o || {}; this.hurts.push({ t0: at, t1: at + (o.dur || 0.7), kb: o.knock == null ? 10 : o.knock }); return this; };
  A.talk = function (t0, t1, speakFn) { this.talks.push({ t0: t0, t1: t1, fn: speakFn || null }); return this; };
  A.show = function (at) { this.vis.push({ t: at, v: true }); this.vis.sort(function (a, b) { return a.t - b.t; }); return this; };
  A.hide = function (at) { this.vis.push({ t: at, v: false }); this.vis.sort(function (a, b) { return a.t - b.t; }); return this; };
  A.resolve = function () {
    if (this.resolved) return;
    this.moves.sort(function (a, b) { return a.t0 - b.t0; });
    var cur = this.x0;
    for (var i = 0; i < this.moves.length; i++) {
      var m = this.moves[i];
      m.xs = cur;
      if (m.x1 == null) m.x1 = cur + (m.dx || 0);
      if (m.dur == null) m.dur = Math.max(0.15, Math.abs(m.x1 - cur) / (m.mode === "run" ? this.speed * 1.9 : this.speed));
      m.t1 = m.t0 + m.dur;
      cur = m.x1;
    }
    this.jumps.sort(function (a, b) { return a.t0 - b.t0; });
    this.poses.sort(function (a, b) { return a.t0 - b.t0; });
    this.resolved = true;
  };
  A.moveAt = function (t) { this.resolve(); for (var i = this.moves.length - 1; i >= 0; i--) { var m = this.moves[i]; if (t >= m.t0 && t < m.t1) return m; } return null; };
  A.xAt = function (t) {
    this.resolve();
    var x = this.x0;
    for (var i = 0; i < this.moves.length; i++) {
      var m = this.moves[i];
      if (t < m.t0) break;
      if (t >= m.t1) { x = m.x1; continue; }
      var p = (t - m.t0) / m.dur;
      x = lerp(m.xs, m.x1, m.mode === "jump" ? p : p);
      break;
    }
    for (var h = 0; h < this.hurts.length; h++) { var hu = this.hurts[h]; if (t >= hu.t0) x -= this.faceAt(hu.t0) * hu.kb * outCubic(prog(t, hu.t0, hu.t0 + 0.3)); }
    return x;
  };
  A.floorAt = function (t) {
    this.resolve();
    var f = this.y0;
    for (var i = 0; i < this.jumps.length; i++) { var j = this.jumps[i]; if (t >= j.t0 + j.dur) f = j.to != null ? j.to : f; else break; }
    return f;
  };
  A.jumpAt = function (t) { this.resolve(); for (var i = 0; i < this.jumps.length; i++) { var j = this.jumps[i]; if (t >= j.t0 && t < j.t0 + j.dur) return j; } return null; };
  A.yAt = function (t) {
    var j = this.jumpAt(t);
    if (!j) return this.floorAt(t);
    var from = this.floorAt(j.t0 - 1e-4), to = j.to != null ? j.to : from, p = (t - j.t0) / j.dur;
    return lerp(from, to, p) - 4 * (j.h + Math.max(0, from - to) * 0.5) * p * (1 - p);
  };
  A.faceAt = function (t) {
    var m = this.moveAt(t);
    if (m && m.x1 !== m.xs && m.mode !== "jump") return m.x1 > m.xs ? 1 : -1;
    var d = this.f0;
    for (var i = 0; i < this.faces.length; i++) if (this.faces[i].t <= t) d = this.faces[i].d;
    return d;
  };
  A.visibleAt = function (t) { var v = true; for (var i = 0; i < this.vis.length; i++) if (this.vis[i].t <= t) v = this.vis[i].v; if (this.vis.length && this.vis[0].v && t < this.vis[0].t) v = false; return v; };
  A.speakingAt = function (t) {
    for (var i = 0; i < this.talks.length; i++) { var k = this.talks[i]; if (t >= k.t0 && t <= k.t1) return k.fn ? k.fn(t) : wordAt(t); }
    return false;
  };
  A.stateAt = function (t) {
    for (var h = 0; h < this.hurts.length; h++) if (t >= this.hurts[h].t0 && t < this.hurts[h].t1) return { pose: "hurt", hurt: t - this.hurts[h].t0 };
    var j = this.jumpAt(t);
    if (j) return { pose: "jump" };
    var m = this.moveAt(t);
    if (m && m.mode !== "jump") {
      var dist = Math.abs(this.xAt(t) - m.xs), step = m.mode === "run" ? 7 : 5;
      return { pose: (m.mode === "run" ? "run" : "walk") + (Math.floor(dist / step) % 4) };
    }
    var pz = null;
    for (var i = 0; i < this.poses.length; i++) if (t >= this.poses[i].t0 && t < this.poses[i].t1) pz = this.poses[i];
    if (pz) {
      if (pz.n === "cheer") return { pose: "cheer" + (Math.floor((t - pz.t0) * 5) % 2), hop: true, t0: pz.t0 };
      if (pz.n === "idle") return { pose: "idle" + (Math.floor(t * 2) % 2) };
      return { pose: POSES[pz.n] ? pz.n : "idle0" };
    }
    if (this.speakingAt(t) || this.talks.some(function (k) { return t >= k.t0 && t <= k.t1; })) return { pose: Math.floor(t * 1.5) % 3 === 1 ? "talk" : "idle0" };
    return { pose: "idle" + (Math.floor(t * 2 + this.x0 * 0.01) % 2) };
  };
  A.spriteAt = function (t) {
    var st = this.stateAt(t);
    var seed = hashS(this.id) % 100;
    var bl = ((t + seed * 0.037) % 3.3) < 0.13;
    var mouth = st.pose.indexOf("cheer") === 0 || st.pose === "hurt" ? "open" : this.speakingAt(t) && Math.floor(t * 9) % 2 === 0 ? "open" : "closed";
    return { img: castFrame(this.id, st.pose, bl ? "closed" : "open", mouth, Math.floor(t * 10)), st: st };
  };
  A.draw = function (g, t, cam) {
    if (!this.visibleAt(t)) return;
    var sp = this.spriteAt(t), img = sp.img, sc = this.scale;
    var x = this.xAt(t), y = this.yAt(t), floor = this.floorAt(t), face = this.faceAt(t);
    if (sp.st.hop) y -= R(Math.abs(Math.sin((t - sp.st.t0) * 5 * Math.PI)) * 6);
    if (this.kind === "robot") y -= 3 + R(Math.sin(t * 3 + this.x0) * 1.5);
    var w = img.width * sc, h = img.height * sc;
    var sx = R(x - cam - w / 2), sy = R(y - FOOT[this.kind] * sc);
    if (this.shadow) {
      var j = this.jumpAt(t), lift = clamp((floor - y) / 40, 0, 0.7);
      var shw = R((this.kind === "robot" ? 10 : 12) * sc * (1 - lift)), shy = R(j ? lerp(this.floorAt(j.t0 - 1e-4), j.to != null ? j.to : floor, (t - j.t0) / j.dur) : floor);
      dfill(g, R(x - cam - shw / 2), shy - 1, shw, 2, C.ink, 0.55);
    }
    var hurt = sp.st.pose === "hurt" && Math.floor(sp.st.hurt * 16) % 2 === 0;
    var src = hurt ? silhouette(img, C.white) : img;
    if (face < 0) { g.save(); g.translate(sx + w, sy); g.scale(-1, 1); g.drawImage(src, 0, 0, w, h); g.restore(); }
    else g.drawImage(src, sx, sy, w, h);
  };
  G.actor = function (id, o) { var a = new Actor(this, id, o); this.actors[a.id] = this.actors[a.id] || a; return a; };

  // ───────────── items ─────────────
  /** Collectible: floats (bobbing, sparkling) until `at`, then pops with "+N" and a label toast. */
  G.item = function (icon, o) {
    o = o || {};
    var self = this, at = o.at == null ? 1e9 : o.at, appear = o.appear == null ? -1 : o.appear, x = o.x || 0, y = o.y == null ? this.groundY - 10 : o.y;
    var val = o.value == null ? 100 : o.value, label = o.label ? clean(o.label) : "";
    if (at < 1e8) {
      this.score(at, val);
      this.burst(x, y, at, { n: 12, colors: [C.yellow, C.white, C.cream], speed: 55, life: 0.5, gravity: 60 });
      this.sparkle(x, y, at, { dur: 0.4 });
      this.popup(o.pop || "+" + val, x, y - 8, at, { color: C.yellow });
      if (label && o.toast !== false) this.toast(label, at, { icon: icon, title: o.title || "ITEM GET!" });
    }
    return this.add({ z: o.z || 15, draw: function (g, t, cam) {
      if (t < appear) return;
      var ap = appear >= 0 ? outBack(prog(t, appear, appear + 0.3)) : 1;
      var img = itemIcon(icon, Math.floor(t * 8));
      var sx = R(x - cam - img.width / 2), sy = R(y - img.height / 2 + Math.sin(t * 4 + x) * 1.5);
      if (t >= at) {
        var p = (t - at) / 0.35;
        if (p > 1) return;
        sy -= R(outCubic(p) * 14);
        if (blink(t, 20)) return;
      }
      if (ap < 1 && blink(t, 20)) { g.drawImage(silhouette(img, C.white), sx, sy); return; }
      g.drawImage(img, sx, sy);
      if (o.labelTag && label && t < at) tag(g, label, sx + img.width / 2, sy - 3, "blue");
      if (Math.floor(t * 3 + x) % 4 === 0) { g.fillStyle = C.white; g.fillRect(sx + img.width - 2, sy + 1, 1, 1); }
    } });
  };
  /** small label tag (centered at x, bottom at y) */
  function tag(g, s, x, y, style) {
    var w = measure(s) + 8, h = 13;
    drawWin(g, R(x - w / 2), y - h, w, h, { style: style || "blue", shadow: false });
    text(g, s, R(x - w / 2) + 4, y - h + 3, { color: winInk(style) });
  }

  // ───────────── enemies & boss ─────────────
  G.enemy = function (type, o) {
    o = o || {};
    type = ENEMY_TYPES.indexOf(type) >= 0 ? type : "slime";
    var self = this, x0 = o.x || 0, y0 = o.y == null ? this.groundY : o.y, appear = o.appear == null ? -1 : o.appear, def = o.defeat == null ? 1e9 : o.defeat;
    var label = o.label ? clean(o.label) : "", tint = o.tint || null, range = o.patrol == null ? 10 : o.patrol;
    var fly = type === "bat" || type === "ghost";
    if (def < 1e8) {
      this.burst(x0, y0 - 8, def, { n: 18, colors: [C.white, C.grey3, ENEMY_TINTS[tint || "green"] ? ENEMY_TINTS[tint || "green"][1] : C.lime], speed: 70, life: 0.6 });
      this.popup(o.pop || "+" + (o.value || 200), x0, y0 - 22, def, { color: C.white });
      this.score(def, o.value || 200);
      this.shake(def, 2, 0.2);
    }
    var ent = { z: o.z || 18, x: function (t) { return x0 + Math.sin(Math.min(t, def) * 1.6 + x0) * range; }, draw: function (g, t, cam) {
      if (t < appear) return;
      var dead = t >= def;
      if (dead && t > def + 0.2) return;
      var f = Math.floor(t * (type === "bat" ? 8 : 5)) % (type === "slime" ? 3 : 2);
      var img = enemyFrame(type, f, tint);
      var x = ent.x(t), yy = fly ? y0 - 22 + Math.sin(t * 3 + x0) * 4 : y0;
      var pIn = appear >= 0 ? prog(t, appear, appear + 0.25) : 1;
      var sx = R(x - cam - img.width / 2), sy = R(yy - img.height + 1 + (1 - pIn) * 10);
      if (dead) { var sq = 1 - (t - def) / 0.2; g.drawImage(silhouette(img, C.white), sx, R(sy + img.height * (1 - sq)), img.width, Math.max(1, R(img.height * sq))); return; }
      var dir = Math.cos(t * 1.6 + x0) >= 0 ? 1 : -1;
      if (range && dir < 0) { g.save(); g.translate(sx + img.width, sy); g.scale(-1, 1); g.drawImage(img, 0, 0); g.restore(); }
      else g.drawImage(img, sx, sy);
      if (!fly) dfill(g, sx + 2, R(y0) - 1, img.width - 4, 2, C.ink, 0.4);
      if (label && o.labelTag !== false) tag(g, label, R(x - cam), sy - 2, "red");
    } };
    return this.add(ent);
  };

  // ───────────── dialogue box ─────────────
  /**
   * lines: [{ who, text, at, end }] (who = cast id or null for narrator). Shows the speaking
   * line's portrait + name and types the text in sync with the voice. Long lines page.
   * o: { y, h, style, portrait:false }
   */
  G.dialog = function (lines, o) {
    o = o || {};
    var self = this, W = this.W, H = this.H;
    var bh = o.h || (this.portrait ? 74 : 56), by = o.y != null ? o.y : H - bh - 4, bx = 4, bw = W - 8;
    var showPortrait = o.portrait !== false;
    var prepared = lines.map(function (ln, i) {
      var who = ln.who && CAST[str(ln.who).toLowerCase()] ? str(ln.who).toLowerCase() : null;
      var txt = clean(ln.text);
      var px = showPortrait && who ? 40 : 0;
      var tw = bw - 14 - px;
      var maxLines = Math.max(1, Math.floor((bh - 12) / FONT.lh));
      var ls = wrapOff(txt, tw, 1);
      var pages = [];
      for (var k = 0; k < ls.length; k += maxLines) pages.push(ls.slice(k, k + maxLines));
      if (!pages.length) pages.push([]);
      var at = ln.at == null ? 0.3 : ln.at, end = ln.end == null ? lastT() : ln.end;
      var clock = textClock(txt, at, end, { sync: ln.sync });
      var actor = who && self.actors[who];
      if (actor) actor.talk(at, end, clock.speaking);
      return { who: who, name: ln.name ? clean(ln.name).toUpperCase() : who ? CAST[who].name : "", txt: txt, pages: pages, at: at, end: end, clock: clock, px: px, tw: tw };
    });
    var ent = { z: o.z || 60, box: { x: bx, y: by, w: bw, h: bh }, draw: function (g, t) {
      var cur = null;
      for (var i = 0; i < prepared.length; i++) if (t >= prepared[i].at - 0.25 && t <= prepared[i].end) cur = prepared[i];
      if (!cur) return;
      var first = prepared[0] === cur, open = first && o.pop !== false ? outBack(prog(t, cur.at - 0.25, cur.at)) : 1;
      drawWin(g, bx, by, bw, bh, { style: o.style || "blue", open: open });
      if (open < 1) return;
      var n = cur.clock.n(t);
      // current page = last page whose first char has started
      var page = cur.pages[0];
      for (var p = 0; p < cur.pages.length; p++) if (cur.pages[p].length && n >= cur.pages[p][0].s) page = cur.pages[p];
      var tx = bx + 8 + cur.px, ty = by + 7;
      for (var l = 0; l < page.length; l++) {
        var ln = page[l], vis = clamp(n - ln.s, 0, ln.e - ln.s);
        text(g, ln.text, tx, ty + l * FONT.lh, { color: winInk(o.style), shadow: winShadow(o.style), n: vis });
      }
      var pageDone = page.length && n >= page[page.length - 1].e - 0.5;
      if (pageDone && blink(t, 3)) text(g, "▼", bx + bw - 12, by + bh - 10, { color: C.yellow });
      if (cur.px) {
        var pimg = portrait(cur.who, cur.clock.speaking(t) && Math.floor(t * 9) % 2 === 0, ((t + 0.7) % 3.1) < 0.13);
        var pxx = bx + 6, pyy = by + R((bh - 36) / 2);
        g.fillStyle = C.ink; g.fillRect(pxx - 1, pyy - 1, 38, 38);
        g.fillStyle = C.white; g.fillRect(pxx, pyy, 36, 36);
        dgrad(g, pxx + 1, pyy + 1, 34, 34, [CAST[cur.who].portraitBg, mix(CAST[cur.who].portraitBg, C.ink, 0.5)], 2);
        g.drawImage(pimg, pxx + 0, pyy + 0, 36, 36);
      }
      if (cur.name) {
        var nw = measure(cur.name) + 10;
        drawWin(g, bx + 4, by - 9, nw, 13, { style: "gold", shadow: false });
        text(g, cur.name, bx + 9, by - 6, { color: C.yellow });
      }
    } };
    this.ui.push(ent);
    return ent;
  };

  /** Narration box: the whole voiceover, paged and typed word-by-word (used by fallback and S.say). */
  G.narrate = function (o) {
    o = o || {};
    var txt = clean(o.text != null ? o.text : V.narration || (V.words || []).map(function (w) { return w.word; }).join(" "));
    return this.dialog([{ who: o.who === undefined ? "orla" : o.who, text: txt, at: o.at != null ? o.at : 0.15, end: o.end != null ? o.end : lastT() + 0.05, name: o.name }], o);
  };

  // ═════════════════════════ TEMPLATE HELPERS ═════════════════════════
  function up(s) { return clean(s).toUpperCase(); }
  /** Big centred multi-line text block. Returns {h, sc, lines}. */
  function layoutBig(s, maxW, maxLines, maxScale, maxH) {
    var sc = fitScale(s, maxW, maxLines, maxScale, maxH);
    var lines = wrap(s, maxW, sc);
    if (lines.length > maxLines) { lines = lines.slice(0, maxLines); lines[maxLines - 1] = lines[maxLines - 1].replace(/.{0,3}$/, "..."); }
    return { sc: sc, lines: lines, h: lines.length * FONT.lh * sc - 2 * sc };
  }
  function drawBig(g, L, cx, y, o) {
    o = o || {};
    for (var i = 0; i < L.lines.length; i++) {
      var yy = y + i * FONT.lh * L.sc + (o.dy ? o.dy(i) : 0);
      text(g, L.lines[i], cx, yy, { scale: L.sc, color: o.color || C.yellow, outline: o.outline === undefined ? C.ink : o.outline, shadow: o.shadow, align: o.align || "center", top: o.top, topRows: o.topRows, wave: o.wave });
    }
  }
  G.banner = function (s, at, o) {
    o = o || {};
    var self = this, L = layoutBig(up(s), this.W - 20, 2, o.scale || 3, this.H * 0.4), dur = o.dur || 1e9;
    this.overlay(function (g, t) {
      if (t < at || t > at + dur) return;
      var p = outBack(prog(t, at, at + 0.35));
      var y = o.y != null ? o.y : R(self.H * 0.32 - L.h / 2);
      y = R(lerp(-L.h - 10, y, p));
      drawBig(g, L, R(self.W / 2), y, { color: o.color || C.yellow, top: o.top || C.cream, topRows: 3, shadow: o.shadow || "#5a1020", wave: t > at + 0.4 ? t : null });
    }, o.z || 70);
    return this;
  };
  G.label = function (s, x, y, o) {
    o = o || {};
    var s2 = clean(s), at = o.at || 0;
    return this.overlay(function (g, t) { if (t < at || (o.until != null && t > o.until)) return; text(g, s2, x, y, { color: o.color || C.white, scale: o.scale || 1, outline: o.outline === undefined ? C.ink : o.outline, align: o.align, shadow: o.shadow }); }, o.z || 55);
  };
  G.window = function (x, y, w, h, o) {
    o = o || {};
    var at = o.at || 0;
    var e = this.overlay(function (g, t) {
      if (t < at || (o.until != null && t > o.until)) return;
      drawWin(g, x, y, w, h, { style: o.style, open: outBack(prog(t, at, at + 0.25)) });
      if (prog(t, at, at + 0.25) < 1) return;
      if (o.title) { var tw = measure(up(o.title)) + 10; drawWin(g, x + 6, y - 7, tw, 13, { style: "gold", shadow: false }); text(g, up(o.title), x + 11, y - 4, { color: C.yellow }); }
      if (o.text) { var ls = wrap(o.text, w - 14, 1); for (var i = 0; i < ls.length && (i + 1) * FONT.lh < h - 6; i++) text(g, ls[i], x + 7, y + 7 + i * FONT.lh, { color: winInk(o.style), shadow: winShadow(o.style) }); }
      if (o.draw) o.draw(g, t, x, y, w, h);
    }, o.z || 52);
    return e;
  };
  function pickHero(p) { return castId(p && (p.hero || p.player) || "kit"); }
  function lineKey(s) { var w = clean(s).split(" ").filter(function (x) { return norm(x).length > 0; }); return w.slice(0, 2).join(" ") || null; }

  var T = {};

  // ───────────── title-screen ─────────────
  T["title-screen"] = function (root, p) {
    var g = new Game(root, { world: p.world || "grassland", intro: "dither", length: 4000, groundY: 0 });
    var W = g.W, H = g.H;
    g.groundY = R(H * (g.portrait ? 0.7 : 0.82));
    var tp = V.find(str(p.prompt || "start").split(" ").pop()) ;
    tp = tp != null ? clamp(tp, 1.4, lastT() - 0.3) : Math.max(1.6, D() - 1.0);
    if (tp > lastT() - 0.2) tp = Math.max(0.8, lastT() - 0.35);
    var speed = 30;
    g.camFn = function (t) { return R(Math.min(t, tp) * speed); };
    var hero = g.actor(pickHero(p), { x: R(W * (g.portrait ? 0.42 : 0.38)), z: 22 });
    var buddy = g.actor(p.companion ? castId(p.companion) : "bolt", { x: R(W * (g.portrait ? 0.42 : 0.38)) - 26, z: 21 });
    hero.walkTo(hero.x0 + tp * speed, 0, tp); buddy.walkTo(buddy.x0 + tp * speed, 0, tp);
    hero.jump(tp, { h: 16, dur: 0.45 }); hero.cheer(tp + 0.45, 3); buddy.cheer(tp + 0.2, 3);
    var title = up(p.title || "PIXEL QUEST");
    var L = layoutBig(title, W - 24, g.portrait ? 3 : 2, g.portrait ? 3 : 4, H * 0.36);
    var top = R(g.portrait ? H * 0.12 : H * 0.1);
    g.overlay(function (gg, t) {
      for (var i = 0; i < L.lines.length; i++) {
        var a = 0.15 + i * 0.12, pp = outBounce(prog(t, a, a + 0.8));
        var yy = R(lerp(-60 * L.sc, top + i * FONT.lh * L.sc, pp));
        text(gg, L.lines[i], R(W / 2), yy, { scale: L.sc, color: C.orange, top: C.yellow, topRows: 4, outline: C.ink, shadow: "#5a1020", align: "center", wave: t > 1.2 ? t * 0.6 : null });
      }
      // glints
      if (t > 1.1) {
        var k = Math.floor(t * 1.6), ph = (t * 1.6) % 1;
        var li = k % L.lines.length, lw = measure(L.lines[li], L.sc);
        var gx = R(W / 2 - lw / 2 + hash(k * 3.7) * lw), gy = top + li * FONT.lh * L.sc + R(hash(k * 1.3) * 5 * L.sc);
        var r = R(Math.sin(ph * Math.PI) * 5);
        if (r > 0) { gg.fillStyle = C.white; gg.fillRect(gx - r, gy, r * 2 + 1, 1); gg.fillRect(gx, gy - r, 1, r * 2 + 1); }
      }
    }, 40);
    var subY = top + L.h + 6 * L.sc;
    if (p.subtitle) {
      var sub = clean(p.subtitle), sl = wrap(sub, W - 40, 1).slice(0, 2), sw = 0;
      sl.forEach(function (s) { sw = Math.max(sw, measure(s)); });
      g.overlay(function (gg, t) {
        var pp = prog(t, 0.9, 1.15);
        if (pp <= 0) return;
        var bw = sw + 20, bh = sl.length * FONT.lh + 8, bx = R(W / 2 - bw / 2);
        drawWin(gg, bx, subY, bw, bh, { style: "red", open: outBack(pp) });
        if (pp < 1) return;
        sl.forEach(function (s, i) { text(gg, s, R(W / 2), subY + 5 + i * FONT.lh, { align: "center", color: C.white, shadow: C.ink }); });
      }, 41);
    }
    var prompt = up(p.prompt || "PRESS START");
    g.overlay(function (gg, t) {
      if (t < 1.3) return;
      var pressed = t >= tp;
      if (!blink(t, pressed ? 10 : 1.6)) return;
      var py = R(g.groundY + (H - g.groundY) * (g.portrait ? 0.42 : 0.5) - 4);
      var pw = measure(prompt) + 14;
      dfill(gg, R(W / 2 - pw / 2), py - 4, pw, 15, C.ink, 0.6);
      text(gg, (pressed ? "" : "") + prompt, R(W / 2), py, { align: "center", color: pressed ? C.yellow : C.white, outline: C.ink });
    }, 42);
    if (p.footer) g.label(clean(p.footer), R(W / 2), H - 12, { align: "center", color: C.grey3, at: 1.0 });
    g.flash(tp, C.white, 0.3);
    g.burst(hero.x0 + tp * speed, g.groundY - 30, tp, { n: 20, colors: [C.yellow, C.white, C.pink, C.aqua], speed: 80, life: 0.9 });
    return g;
  };

  // ───────────── level-walk ─────────────
  T["level-walk"] = function (root, p) {
    var items = arr(p.items).slice(0, 6).filter(Boolean);
    var g = new Game(root, { world: p.world || "grassland", intro: "iris", length: 6000 });
    var W = g.W, H = g.H;
    g.groundY = R(H * (g.portrait ? 0.66 : 0.8));
    g.hud({ level: p.level || g.world.def.label });
    var n = items.length;
    var ts = keyTimes(items.map(function (it) { return it.keyword || autoKey(it.label); }), { start: 0.7, end: D() * 0.74, lead: 0.05, minGap: 0.45 });
    var startX = 30, spacing = clamp(W * 0.42, 70, 130), X = [];
    var path = [[0, startX]];
    var hero = g.actor(pickHero(p), { x: startX });
    var buddy = p.companion ? g.actor(castId(p.companion), { x: startX - 24, z: 19 }) : null;
    var prevT = 0, prevX = startX;
    for (var i = 0; i < n; i++) {
      var ti = Math.max(ts[i], prevT + 0.3), want = prevX + (i === 0 ? Math.min(spacing, 40 + ti * 60) : spacing);
      var dt = ti - prevT, maxV = 125;
      if ((want - prevX) / dt > maxV) want = prevX + maxV * dt;
      want = Math.max(want, prevX + 24);
      var v = (want - prevX) / dt, mode = v > 70 ? "run" : "walk";
      var walkStart = v < 45 ? ti - (want - prevX) / 55 : prevT;
      if (walkStart > prevT) path.push([walkStart, prevX]);
      if (mode === "run") hero.runTo(want, walkStart, ti - walkStart); else hero.walkTo(want, walkStart, ti - walkStart);
      path.push([ti, want]);
      X.push(want); prevT = ti; prevX = want;
    }
    function tAtX(x) {
      for (var k = 1; k < path.length; k++) if (x <= path[k][1] && x >= path[k - 1][1] && path[k][1] > path[k - 1][1]) return lerp(path[k - 1][0], path[k][0], (x - path[k - 1][1]) / (path[k][1] - path[k - 1][1]));
      return null;
    }
    var platY = g.groundY - 30;
    items.forEach(function (it, k) {
      var icon = ITEM_NAMES.indexOf(it.icon) >= 0 ? it.icon : ["star", "gem", "key", "book", "potion", "crystal"][k % 6];
      var t0 = ts[k] != null ? Math.max(ts[k], 0) : 0, x = X[k];
      var segT = k === 0 ? t0 : t0 - (k > 0 ? Math.max(ts[k - 1], 0) : 0);
      var onPlat = k % 2 === 1 && segT > 1.3;
      var tUp = onPlat ? tAtX(x - 34) : null, tDown = onPlat ? tAtX(x + 16) : null;
      if (onPlat && tUp != null && tDown != null && tUp > (k > 0 ? X[k - 1] : 0) && tDown - tUp > 0.6) {
        g.platform(x - 26, platY, 52);
        hero.jump(tUp, { to: platY, dur: 0.42, h: 8 });
        hero.jump(tDown, { to: g.groundY, dur: 0.42, h: 6 });
        g.item(icon, { x: x, y: platY - 9, at: t0, label: it.label, value: 100 });
      } else {
        hero.jump(t0 - 0.27, { dur: 0.54, h: 18 });
        g.item(icon, { x: x, y: g.groundY - 34, at: t0, label: it.label, value: 100 });
      }
    });
    // an enemy to stomp in the longest gap
    var bestGap = -1, gapLen = 0;
    for (var q = 1; q < n; q++) if (ts[q] - ts[q - 1] > gapLen) { gapLen = ts[q] - ts[q - 1]; bestGap = q; }
    if (bestGap > 0 && gapLen > 1.8) {
      var tm = (ts[bestGap] + ts[bestGap - 1]) / 2, ex = null;
      for (var k2 = 1; k2 < path.length; k2++) if (tm >= path[k2 - 1][0] && tm <= path[k2][0]) ex = lerp(path[k2 - 1][1], path[k2][1], (tm - path[k2 - 1][0]) / Math.max(0.01, path[k2][0] - path[k2 - 1][0]));
      if (ex != null && ex - X[bestGap - 1] > 30 && X[bestGap] - ex > 30) { hero.jump(tm - 0.3, { dur: 0.5, h: 16 }); g.enemy(p.enemy || "slime", { x: ex, defeat: tm + 0.1, patrol: 0 }); }
    }
    // goal flag
    var goalX = prevX + Math.min(90, spacing), tGoal = Math.min(lastT() - 0.8, prevT + (goalX - prevX) / 55);
    if (tGoal > prevT + 0.4) hero.walkTo(goalX, prevT + 0.15, tGoal - prevT - 0.15); else { goalX = prevX + 20; tGoal = prevT + 0.4; hero.walkTo(goalX, prevT + 0.05, 0.35); }
    hero.cheer(tGoal + 0.1, 5);
    if (buddy) { buddy.walkTo(goalX - 26, 0.2, tGoal - 0.2); buddy.cheer(tGoal + 0.2, 5); }
    var flagX = goalX + 16;
    g.draw(function (gg, t, cam) {
      var x = R(flagX - cam), y = g.groundY;
      gg.fillStyle = C.ink; gg.fillRect(x - 1, y - 49, 3, 49);
      gg.fillStyle = C.grey3; gg.fillRect(x, y - 48, 1, 48);
      gg.fillStyle = C.yellow; gg.fillRect(x - 2, y - 52, 5, 4);
      var raised = t >= tGoal ? outCubic(prog(t, tGoal, tGoal + 0.6)) : 0;
      var fy = R(y - 14 - raised * 30), wave = Math.floor(t * 6) % 2;
      gg.fillStyle = C.ink; gg.fillRect(x + 1, fy - 1, 14, 10);
      gg.fillStyle = C.red; gg.fillRect(x + 1, fy, 12 + wave, 8);
      gg.fillStyle = C.white; gg.fillRect(x + 5, fy + 2, 4, 4);
    }, 12);
    g.follow(hero, { lead: g.portrait ? 0.3 : 0.32, max: 1e9 });
    g.toasts.forEach(function (to) { to.until = tGoal + 0.15; });
    g.banner(p.goal || "STAGE CLEAR!", tGoal + 0.2, { scale: g.portrait ? 2 : 3, y: R(g.groundY * 0.42) });
    var under = H - g.groundY;
    if (under >= 50 && n) {
      g.overlay(function (gg, t) {
        var got = []; for (var i = 0; i < n; i++) if (t >= ts[i]) got.push(i);
        var lx = 8, lw = W - 16, ly = g.groundY + 14, rows = Math.max(1, Math.min(n, Math.floor((under - 34) / 13)));
        var lh = rows * 13 + 12;
        drawWin(gg, lx, ly, lw, lh, { style: "dark" });
        drawWin(gg, lx + 6, ly - 7, measure("LOOT") + 10, 13, { style: "gold", shadow: false }); text(gg, "LOOT", lx + 11, ly - 4, { color: C.yellow });
        got.slice(-rows).forEach(function (k, r) {
          var it = items[k], ic = ITEM_NAMES.indexOf(it.icon) >= 0 ? it.icon : ["star", "gem", "key", "book", "potion", "crystal"][k % 6];
          var yy = ly + 7 + r * 13, pop = prog(t, ts[k], ts[k] + 0.3);
          gg.drawImage(itemIcon(ic, 0), lx + 6, yy - 2);
          var lb = clean(it.label); while (measure(lb) > lw - 30 && lb.length > 3) lb = lb.slice(0, -1);
          text(gg, lb, lx + 22, yy, { color: pop < 1 && blink(t, 12) ? C.yellow : C.white, n: pop * 40 + 1 });
        });
      }, 45);
    }
    for (var f = 0; f < 3; f++) g.burst(flagX + (f - 1) * 40, g.groundY - 70 - f * 8, tGoal + 0.3 + f * 0.25, { n: 22, colors: [[C.pink, C.white], [C.aqua, C.white], [C.yellow, C.white]][f], speed: 70, gravity: 40, life: 1.1 });
    return g;
  };

  // ───────────── dialogue ─────────────
  T.dialogue = function (root, p) {
    var lines = arr(p.lines).filter(function (l) { return l && l.text; }).slice(0, 10);
    if (!lines.length) lines = [{ speaker: "orla", text: V.narration || "..." }];
    var g = new Game(root, { world: p.world || "grassland", intro: "none", decoDensity: 0.7 });
    var W = g.W, H = g.H, boxH = g.portrait ? 76 : 56, boxY = H - boxH - 5;
    g.groundY = g.portrait ? R(boxY - 30) : boxY - 8;
    var who = [];
    lines.forEach(function (l) { var id = castId(l.speaker || l.who); if (who.indexOf(id) < 0) who.push(id); });
    if (who.length === 1 && who[0] !== "kit") who.unshift("kit");
    who = who.slice(0, 3);
    var sc = 2, pos = who.length === 1 ? [0.5] : who.length === 2 ? [0.28, 0.72] : [0.2, 0.5, 0.8];
    if (g.portrait && who.length === 3) sc = 1;
    var actors = {};
    who.forEach(function (id, i) { actors[id] = g.actor(id, { x: R(W * pos[i]), face: pos[i] < 0.5 ? 1 : -1, scale: sc, z: 20 + i }); });
    g.camFn = function () { return 0; };
    var times = keyTimes(lines.map(function (l) { return lineKey(l.text); }), { start: 0.25, end: D() * 0.85, lead: 0.12, minGap: 0.8 });
    var dl = lines.map(function (l, i) {
      var id = castId(l.speaker || l.who);
      var at = times[i], end = i + 1 < lines.length ? times[i + 1] - 0.08 : lastT() + 0.05;
      if (/!/.test(l.text) && actors[id]) actors[id].cheer(at, 0.6);
      return { who: id, text: l.text, at: at, end: end };
    });
    g.dialog(dl, { y: boxY, h: boxH });
    return g;
  };

  // ───────────── boss-battle ─────────────
  T["boss-battle"] = function (root, p) {
    var moves = arr(p.moves).filter(Boolean).slice(0, 4);
    if (!moves.length) moves = [{ name: "ATTACK" }];
    var g = new Game(root, { world: p.world || "castle", intro: "wipe" });
    var W = g.W, H = g.H, n = moves.length;
    var menuH = n * 12 + 12, menuY = H - menuH - 5;
    g.groundY = menuY - 6;
    var heroX = R(W * (g.portrait ? 0.24 : 0.22)), bossX = R(W * (g.portrait ? 0.7 : 0.72));
    var hero = g.actor(pickHero(p), { x: heroX, z: 24 });
    var type = BOSS_TYPES.indexOf(p.bossType) >= 0 ? p.bossType : "blob";
    var ts = keyTimes(moves.map(function (m) { return m.keyword || autoKey(m.name); }), { start: 1.3, end: D() * 0.7, lead: 0.1, minGap: 0.9 });
    var hpSteps = moves.map(function (m, i) { return { t: ts[i] + 0.1, hp: 1 - (i + 1) / n }; });
    var tDie = Math.min(lastT() - 1.2, ts[n - 1] + 0.7), tVictory = tDie + 0.5;
    if (tDie < ts[n - 1] + 0.2) { tDie = ts[n - 1] + 0.2; tVictory = tDie + 0.3; }
    var palettes = [[C.orange, C.yellow, C.white], [C.aqua, C.white, "#5ae0f0"], [C.lime, C.yellow, C.white], [C.pink, C.violet, C.white]];
    var counter = null;
    moves.forEach(function (m, i) {
      var t = ts[i];
      hero.runTo(bossX - 34, t - 0.22, 0.2);
      hero.pose("attack", t - 0.02, 0.32);
      hero.jump(t + 0.3, { dx: -(bossX - 34 - heroX), dur: 0.42, h: 12 });
      g.burst(bossX - 6, g.groundY - 20, t + 0.06, { n: 18, colors: palettes[i % 4], speed: 75, life: 0.55 });
      g.sparkle(bossX - 10, g.groundY - 22, t + 0.04, { dur: 0.35 });
      g.shake(t + 0.06, 3, 0.3);
      g.popup("-" + Math.round(100 / n * (m.power || 1)), bossX + 4, g.groundY - 50, t + 0.08, { color: C.white, scale: 2, rise: 18 });
      g.score(t + 0.1, 250);
      if (i === 0 && n > 1 && ts[1] - ts[0] > 2.2) counter = (ts[0] + ts[1]) / 2 + 0.2;
    });
    if (counter != null) { hero.hurt(counter + 0.15, { knock: 8, dur: 0.6 }); g.loseHeart(counter + 0.15); g.shake(counter + 0.15, 4, 0.35); g.flash(counter + 0.15, C.red, 0.2); g.popup("OUCH!", heroX, g.groundY - 40, counter + 0.15, { color: C.red }); }
    hero.cheer(tVictory, 6);
    function hpAt(t) { var hp = 1; for (var i = 0; i < hpSteps.length; i++) if (t >= hpSteps[i].t) hp = lerp(i > 0 ? hpSteps[i - 1].hp : 1, hpSteps[i].hp, outCubic(prog(t, hpSteps[i].t, hpSteps[i].t + 0.45))); return hp; }
    // boss
    g.add({ z: 18, draw: function (gg, t, cam) {
      if (t > tDie + 0.15) return;
      var img = bossFrame(type, Math.floor(t * 3) % 2);
      var enter = outBounce(prog(t, 0.15, 0.85));
      var x = bossX, y = g.groundY;
      if (counter != null) { var lp = prog(t, counter - 0.1, counter + 0.15), back = prog(t, counter + 0.3, counter + 0.6); x -= R(Math.sin(lp * Math.PI * 0.5) * (bossX - heroX - 40) * (1 - back)); }
      var bob = type === "eye" ? R(Math.sin(t * 2) * 3) - 10 : 0;
      var sx = R(x - img.width / 2), sy = R(lerp(-img.height - 20, y - img.height + 1 + bob, enter));
      var hit = false;
      for (var i = 0; i < ts.length; i++) if (t >= ts[i] + 0.05 && t < ts[i] + 0.35) hit = Math.floor((t - ts[i]) * 20) % 2 === 0;
      if (t > tDie - 0.7) { sx += R(Math.sin(t * 60) * 2); hit = Math.floor(t * 14) % 2 === 0; }
      if (type !== "eye") dfill(gg, sx + 6, y - 2, img.width - 12, 3, C.ink, 0.5);
      gg.drawImage(hit ? silhouette(img, C.white) : img, sx, sy);
    } });
    g.shake(0.8, 4, 0.4);
    g.burst(bossX, g.groundY - 2, 0.8, { n: 16, colors: [C.grey3, C.grey2], speed: 60, life: 0.5, up: 0.2 });
    g.explode(bossX, g.groundY - 24, tDie, { big: true });
    g.explode(bossX - 16, g.groundY - 36, tDie + 0.18, {});
    g.explode(bossX + 14, g.groundY - 14, tDie + 0.32, {});
    g.score(tDie, 1000);
    // boss name + HP bar
    var bossName = up(p.boss || "THE BIG PROBLEM");
    g.overlay(function (gg, t) {
      if (t < 0.4 || t > tVictory + 0.1) return;
      var nar = g.portrait || W < 240, bw = nar ? W - 12 : Math.min(W - 70, 200), bx = W - bw - 6, by = nar ? 38 : 6;
      var nm = bossName; while (measure(nm) > bw - 16 && nm.length > 4) nm = nm.slice(0, -1);
      drawWin(gg, bx, by, bw, 27, { style: "dark", open: outBack(prog(t, 0.4, 0.65)) });
      if (t < 0.65) return;
      text(gg, nm, bx + 8, by + 5, { color: C.pink });
      var hp = hpAt(t), barW = bw - 16;
      gg.fillStyle = C.ink; gg.fillRect(bx + 7, by + 16, barW + 2, 6);
      gg.fillStyle = "#3a1020"; gg.fillRect(bx + 8, by + 17, barW, 4);
      var fw = R(barW * hp), col = hp > 0.5 ? C.lime : hp > 0.25 ? C.yellow : C.red;
      gg.fillStyle = col; gg.fillRect(bx + 8, by + 17, fw, 4);
      gg.fillStyle = C.white; gg.fillRect(bx + 8, by + 17, fw, 1);
    }, 50);
    // hero hp
    g.overlay(function (gg, t) {
      heartIcons();
      var hearts = g.heartsAt(t);
      drawWin(gg, 6, 6, 52, 27, { style: "dark" });
      text(gg, CAST[hero.id].name.split(" ").pop(), 13, 10, { color: C.aqua });
      for (var i = 0; i < 3; i++) gg.drawImage(i < hearts ? HEART_S : HEART_E, 12 + i * 10, 20);
    }, 50);
    // battle menu
    var narrow = g.portrait || W < 240;
    var menuW = narrow ? W - 12 : R(W * 0.62);
    g.overlay(function (gg, t) {
      drawWin(gg, 6, menuY, menuW, menuH, { style: "blue" });
      var sel = -1;
      for (var i = 0; i < n; i++) if (t >= ts[i] - 0.6) sel = i;
      for (var k = 0; k < n; k++) {
        var done = t >= ts[k] + 0.1, nm = up(moves[k].name || "ATTACK");
        while (measure(nm) > menuW - 70 && nm.length > 4) nm = nm.slice(0, -1);
        var yy = menuY + 7 + k * 12;
        var active = k === sel && t < ts[k] + 0.5;
        if (active) { dfill(gg, 9, yy - 2, menuW - 6, 11, C.yellow, 0.25); if (blink(t, 4)) text(gg, "▶", 11, yy, { color: C.yellow }); }
        text(gg, nm, 20, yy, { color: done && !active ? C.grey2 : active ? C.yellow : C.white, shadow: C.ink });
        var mp = clean(moves[k].cost || (k + 1) * 4 + " MP");
        text(gg, mp, menuW - 2, yy, { color: done ? C.grey1 : C.aqua, align: "right" });
      }
    }, 51);
    if (!narrow) {
      g.overlay(function (gg, t) {
        var x = 12 + menuW, w = W - x - 6;
        drawWin(gg, x, menuY, w, menuH, { style: "dark" });
        text(gg, "TURN", x + 7, menuY + 7, { color: C.grey3 });
        var turn = 1; for (var i = 0; i < n; i++) if (t >= ts[i]) turn = i + 2;
        text(gg, String(Math.min(turn, n)), x + w - 8, menuY + 7, { color: C.yellow, align: "right", scale: 2 });
      }, 51);
    }
    g.banner("BOSS BATTLE!", 0.05, { dur: 1.0, scale: 2, y: R(H * 0.3) });
    g.banner(p.victory || "VICTORY!", tVictory, { scale: g.portrait ? 2 : 3, y: R(Math.max(42, g.groundY * 0.4)) });
    return g;
  };

  // ───────────── inventory ─────────────
  T.inventory = function (root, p) {
    var items = arr(p.items).filter(Boolean).slice(0, 9);
    if (!items.length) items = [{ name: "Nothing yet", icon: "chest" }];
    var g = new Game(root, { world: p.world || "cave", intro: "wipe", deco: true });
    var W = g.W, H = g.H, n = items.length;
    g.groundY = R(H * 0.85);
    g.camFn = function (t) { return R(t * 6); };
    g.draw(function (gg) { dfill(gg, 0, 0, W, H, C.ink, 0.55); }, 1);
    var ts = keyTimes(items.map(function (it) { return it.keyword || autoKey(it.name); }), { start: 0.6, end: D() * 0.8, lead: 0.15, minGap: 0.5 });
    var cols = g.portrait ? 3 : W < 240 ? (n <= 4 ? 4 : 5) : n <= 4 ? 2 : 3, slot = !g.portrait && W < 240 ? 24 : 30, gap = !g.portrait && W < 240 ? 4 : 5;
    var rows = Math.ceil(n / cols);
    var outer = { x: 6, y: 14, w: W - 12, h: H - 20 };
    var gridW = cols * slot + (cols - 1) * gap, gridH = rows * slot + (rows - 1) * gap;
    var gx, gy, det;
    if (g.portrait) { gx = R((W - gridW) / 2); gy = outer.y + 14; det = { x: outer.x + 6, y: gy + gridH + 12, w: outer.w - 12, h: outer.y + outer.h - (gy + gridH + 12) - 6 }; }
    else if (W < 240) { gx = outer.x + 10; gy = outer.y + 14; det = { x: outer.x + 6, y: gy + gridH + 8, w: outer.w - 12, h: outer.y + outer.h - (gy + gridH + 8) - 6 }; gx = R((W - gridW) / 2); }
    else { gy = outer.y + 16; det = { x: R(W * 0.42), y: outer.y + 12, w: outer.x + outer.w - R(W * 0.42) - 8, h: outer.h - 20 }; gx = R(outer.x + (det.x - outer.x - gridW) / 2); }
    var inv = g.portrait || W < 240 ? null : g.actor(pickHero(p), { x: R(outer.x + (det.x - outer.x) / 2), y: outer.y + outer.h - 8, z: 70, shadow: false });
    if (inv) { g.ents.pop(); g.ui.push({ z: 53, draw: function (gg, t) { inv.draw(gg, t, 0); } }); items.forEach(function (it, k) { inv.cheer(ts[k], 0.5); }); }
    var title = up(p.title || "INVENTORY");
    g.overlay(function (gg, t) {
      drawWin(gg, outer.x, outer.y, outer.w, outer.h, { style: "blue", open: outBack(prog(t, 0, 0.3)) });
      if (t < 0.3) return;
      var tw = measure(title) + 10; drawWin(gg, outer.x + 8, outer.y - 7, tw, 13, { style: "gold", shadow: false }); text(gg, title, outer.x + 13, outer.y - 4, { color: C.yellow });
      var sel = -1; for (var i = 0; i < n; i++) if (t >= ts[i]) sel = i;
      for (var k = 0; k < cols * rows; k++) {
        var cx = gx + (k % cols) * (slot + gap), cy = gy + Math.floor(k / cols) * (slot + gap);
        gg.fillStyle = C.ink; gg.fillRect(cx, cy, slot, slot);
        gg.fillStyle = "#101440"; gg.fillRect(cx + 1, cy + 1, slot - 2, slot - 2);
        gg.fillStyle = "#2a3478"; gg.fillRect(cx + 1, cy + slot - 2, slot - 2, 1); gg.fillRect(cx + slot - 2, cy + 1, 1, slot - 2);
        if (k >= n || t < ts[k]) continue;
        var it = items[k], icon = ITEM_NAMES.indexOf(it.icon) >= 0 ? it.icon : ["potion", "sword", "shield", "key", "book", "gem", "scroll", "bag", "map"][k % 9];
        var img = itemIcon(icon, Math.floor(t * 8));
        var pop = prog(t, ts[k], ts[k] + 0.25), s = pop < 1 ? (blink(t, 20) ? 2 : 1) : 2;
        var iw = img.width * s, ih = img.height * s;
        if (s === 1) gg.drawImage(silhouette(img, C.white), R(cx + (slot - iw) / 2), R(cy + (slot - ih) / 2));
        else gg.drawImage(img, R(cx + (slot - iw) / 2), R(cy + (slot - ih) / 2), iw, ih);
        if (it.qty != null) text(gg, "x" + clean(it.qty), cx + slot - 2, cy + slot - 9, { align: "right", color: C.white, outline: C.ink });
      }
      if (sel >= 0) {
        var sx = gx + (sel % cols) * (slot + gap), sy = gy + Math.floor(sel / cols) * (slot + gap);
        var bl = blink(t, 3);
        gg.fillStyle = bl ? C.yellow : C.white;
        gg.fillRect(sx - 2, sy - 2, slot + 4, 2); gg.fillRect(sx - 2, sy + slot, slot + 4, 2); gg.fillRect(sx - 2, sy, 2, slot); gg.fillRect(sx + slot, sy, 2, slot);
        var hx = sx - 9 + (Math.floor(t * 4) % 2), hy = sy + slot / 2 - 4;
        text(gg, "▶", hx, hy, { color: C.white, outline: C.ink });
      }
      // detail panel
      drawWin(gg, det.x, det.y, det.w, det.h, { style: "dark", shadow: false });
      if (sel < 0) { if (blink(t, 1.5)) text(gg, "SELECT ITEM", det.x + det.w / 2, det.y + det.h / 2 - 4, { align: "center", color: C.grey3 }); return; }
      var it2 = items[sel], name = clean(it2.name), icon2 = ITEM_NAMES.indexOf(it2.icon) >= 0 ? it2.icon : ["potion", "sword", "shield", "key", "book", "gem", "scroll", "bag", "map"][sel % 9];
      var big = itemIcon(icon2, Math.floor(t * 8)), bs = det.h > 60 ? 3 : 2;
      var ix = det.x + 8, iy = det.y + 8;
      gg.drawImage(big, ix, iy + R(Math.sin(t * 3) * 1), big.width * bs, big.height * bs);
      var nx = ix + big.width * bs + 8, nw = det.x + det.w - nx - 8;
      var nL = layoutBig(name, nw, 2, 2, 30);
      for (var l = 0; l < nL.lines.length; l++) text(gg, nL.lines[l], nx, iy + 2 + l * FONT.lh * nL.sc, { scale: nL.sc, color: C.yellow, shadow: C.ink });
      var dy = Math.max(iy + big.height * bs + 6, iy + nL.h + 8);
      if (it2.description) {
        var dl = wrap(it2.description, det.w - 16, 1), maxL = Math.max(1, Math.floor((det.y + det.h - 6 - dy) / FONT.lh));
        var nchars = (t - ts[sel] - 0.1) * 70;
        for (var d = 0; d < Math.min(maxL, dl.length); d++) { text(gg, dl[d], det.x + 8, dy + d * FONT.lh, { color: C.white, n: nchars, shadow: C.ink }); nchars -= dl[d].length + 1; if (nchars <= 0) break; }
      }
    }, 50);
    items.forEach(function (it, k) { g.score(ts[k], 50); });
    return g;
  };

  // ───────────── world-map ─────────────
  T["world-map"] = function (root, p) {
    var nodes = arr(p.nodes).filter(Boolean).slice(0, 7);
    if (nodes.length < 2) nodes = nodes.concat([{ label: "START" }, { label: "GOAL" }]).slice(0, Math.max(2, nodes.length));
    var g = new Game(root, { world: "grassland", intro: "iris", background: false, deco: false });
    var W = g.W, H = g.H, n = nodes.length, cell = 8;
    var gw = Math.ceil(W / cell), gh = Math.ceil(H / cell);
    // node positions (zig-zag)
    var mTop = 26, mBot = g.portrait ? 60 : 44, mX = 22;
    var P = [];
    for (var i = 0; i < n; i++) {
      var f = n === 1 ? 0.5 : i / (n - 1);
      if (g.portrait) P.push([R(W * (i % 2 ? 0.7 : 0.3) + (i === 0 || i === n - 1 ? 0 : 0)), R(lerp(mTop + 14, H - mBot - 14, f))]);
      else P.push([R(lerp(mX + 10, W - mX - 10, f)), R(lerp(mTop, H - mBot, 0.5) + (i % 2 ? 1 : -1) * (H - mTop - mBot) * 0.28)]);
    }
    function dSeg(x, y) {
      var best = 1e9;
      for (var k = 0; k < n - 1; k++) {
        var ax = P[k][0], ay = P[k][1], bx = P[k + 1][0], by = P[k + 1][1], vx = bx - ax, vy = by - ay, l2 = vx * vx + vy * vy || 1, u = clamp(((x - ax) * vx + (y - ay) * vy) / l2, 0, 1);
        var dx = x - (ax + u * vx), dy = y - (ay + u * vy); best = Math.min(best, Math.sqrt(dx * dx + dy * dy));
      }
      return best;
    }
    var seed = hashS(p.title || "map");
    function noise(x, y) { var s = 0, a = 1, tot = 0; for (var o = 0; o < 3; o++) { var fx = x / (6 / (o + 1)), fy = y / (6 / (o + 1)), ix = Math.floor(fx), iy = Math.floor(fy), tx = fx - ix, ty = fy - iy; var v00 = hash(ix * 17 + iy * 131 + seed % 1000 + o * 7), v10 = hash(ix * 17 + 17 + iy * 131 + seed % 1000 + o * 7), v01 = hash(ix * 17 + (iy + 1) * 131 + seed % 1000 + o * 7), v11 = hash((ix + 1) * 17 + (iy + 1) * 131 + seed % 1000 + o * 7); tx = tx * tx * (3 - 2 * tx); ty = ty * ty * (3 - 2 * ty); s += a * lerp(lerp(v00, v10, tx), lerp(v01, v11, tx), ty); tot += a; a *= 0.5; } return s / tot; }
    var mapC = canvas(W, H), mg = ctx(mapC), terr = [];
    for (var y = 0; y < gh; y++) for (var x = 0; x < gw; x++) {
      var cx = x * cell + 4, cy = y * cell + 4, d = dSeg(cx, cy);
      var h = noise(x, y) * 0.9 + clamp(1 - d / 40, 0, 1) * 0.5 - 0.15;
      var edge = Math.min(cx, cy, W - cx, H - cy);
      if (edge < 14) h -= 0.25 * (1 - edge / 14);
      var tt = h < 0.28 ? "deep" : h < 0.38 ? "water" : h < 0.43 ? "sand" : h < 0.62 ? "grass" : h < 0.75 ? "forest" : "mount";
      terr.push(tt);
      var px = x * cell, py = y * cell;
      var colA = { deep: "#1f3a8a", water: "#3a6ad8", sand: "#e8c27a", grass: "#4cc04a", forest: "#2e8a3e", mount: "#8a7a6a" }[tt];
      mg.fillStyle = colA; mg.fillRect(px, py, cell, cell);
      if (tt === "grass") { dfill(mg, px, py, cell, cell, "#3fa64a", 0.25); if (hash(x * 3 + y * 7) > 0.8) { mg.fillStyle = "#8fd85a"; mg.fillRect(px + 2, py + 3, 1, 2); mg.fillRect(px + 5, py + 2, 1, 2); } }
      if (tt === "forest") { mg.fillStyle = "#1e6b3a"; mg.fillRect(px + 1, py + 1, 6, 5); mg.fillStyle = "#4cc04a"; mg.fillRect(px + 2, py + 1, 3, 2); mg.fillStyle = "#6a3c22"; mg.fillRect(px + 3, py + 6, 2, 2); }
      if (tt === "mount") { mg.fillStyle = "#4cc04a"; mg.fillRect(px, py, cell, cell); for (var q = 0; q < 7; q++) { var hw = (q + 2) >> 1; mg.fillStyle = "#3a2e26"; mg.fillRect(px + 4 - hw - 1, py + q, hw * 2 + 2, 1); mg.fillStyle = "#a89478"; mg.fillRect(px + 4 - hw, py + q, hw, 1); mg.fillStyle = "#6a5a4a"; mg.fillRect(px + 4, py + q, hw, 1); } mg.fillStyle = C.white; mg.fillRect(px + 3, py, 2, 2); mg.fillRect(px + 2, py + 2, 1, 1); }
      if (tt === "sand") dfill(mg, px, py, cell, cell, "#c8a060", 0.2);
      if (tt === "deep") dfill(mg, px, py, cell, cell, "#14286a", 0.4);
    }
    // coastline outline
    for (var y2 = 0; y2 < gh; y2++) for (var x2 = 0; x2 < gw; x2++) {
      var land = terr[y2 * gw + x2] !== "deep" && terr[y2 * gw + x2] !== "water";
      if (!land) continue;
      [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(function (dd) {
        var nx = x2 + dd[0], ny = y2 + dd[1];
        if (nx < 0 || ny < 0 || nx >= gw || ny >= gh) return;
        var t2 = terr[ny * gw + nx];
        if (t2 === "deep" || t2 === "water") { mg.fillStyle = "#f4f4e8"; if (dd[0]) mg.fillRect(x2 * cell + (dd[0] > 0 ? cell : -1), y2 * cell, 1, cell); else mg.fillRect(x2 * cell, y2 * cell + (dd[1] > 0 ? cell : -1), cell, 1); }
      });
    }
    var ts = keyTimes(nodes.map(function (nd) { return nd.keyword || autoKey(nd.label); }), { start: 0.5, end: D() * 0.82, lead: 0.1, minGap: 0.6 });
    var hero = { x: P[0][0], y: P[0][1] };
    function segPt(k, u) { return [lerp(P[k][0], P[k + 1][0], u), lerp(P[k][1], P[k + 1][1], u)]; }
    function heroAt(t) {
      for (var k = n - 1; k >= 1; k--) {
        var arrive = ts[k], leave = Math.max(ts[k - 1] + 0.2, arrive - 1.1);
        if (t >= arrive) return { p: P[k], k: k, moving: false };
        if (t >= leave) return { p: segPt(k - 1, inOut(prog(t, leave, arrive))), k: k - 1, moving: true, u: prog(t, leave, arrive), dir: P[k][0] >= P[k - 1][0] ? 1 : -1 };
      }
      return { p: P[0], k: 0, moving: false };
    }
    g.draw(function (gg, t) {
      gg.drawImage(mapC, 0, 0);
      // water sparkle
      for (var s = 0; s < 14; s++) { var wx = R(hash(s * 4.4) * W), wy = R(hash(s * 9.1) * H); var ti = terr[Math.floor(wy / cell) * gw + Math.floor(wx / cell)]; if ((ti === "water" || ti === "deep") && Math.floor(t * 2 + s) % 3 === 0) { gg.fillStyle = "#a8dcf8"; gg.fillRect(wx, wy, 3, 1); } }
      // paths
      var hp = heroAt(t);
      for (var k = 0; k < n - 1; k++) {
        var reveal = k < hp.k ? 1 : k === hp.k && hp.moving ? hp.u : 0, len = Math.hypot(P[k + 1][0] - P[k][0], P[k + 1][1] - P[k][1]), steps = Math.floor(len / 5);
        for (var j = 1; j < steps; j++) { var u = j / steps; var pt = segPt(k, u); gg.fillStyle = C.ink; gg.fillRect(R(pt[0]) - 1, R(pt[1]) - 1, 4, 4); gg.fillStyle = u <= reveal ? C.yellow : "#c8a060"; gg.fillRect(R(pt[0]), R(pt[1]), 2, 2); }
      }
      // nodes
      var placed = [[R(hp.p[0]) - 10, R(hp.p[1]) - 30, 20, 30]];
      for (var m = 0; m < n; m++) {
        var vis = t >= ts[m], cur = vis && (m === n - 1 || t < ts[m + 1] - 1.1);
        var nx = P[m][0], ny = P[m][1];
        gg.fillStyle = C.ink; gg.fillRect(nx - 6, ny - 4, 12, 9); gg.fillRect(nx - 5, ny - 5, 10, 11);
        gg.fillStyle = vis ? (cur && blink(t, 3) ? C.white : C.yellow) : C.grey2; gg.fillRect(nx - 5, ny - 4, 10, 8);
        gg.fillStyle = vis ? C.gold : C.grey1; gg.fillRect(nx - 5, ny + 2, 10, 2);
        text(gg, String(m + 1), nx, ny - 3, { align: "center", color: vis ? "#5a1020" : C.ink });
        if (vis && !cur) {
          var lb = up(nodes[m].label); while (measure(lb) > (g.portrait ? 70 : Math.min(90, W / n + 10)) && lb.length > 3) lb = lb.slice(0, -1);
          var ly = (g.portrait ? ny - 4 : m % 2 ? ny + 9 : ny - 19);
          var lx = g.portrait ? (m % 2 ? nx - 10 - measure(lb) : nx + 10) : nx - measure(lb) / 2;
          lx = clamp(lx, 3, W - 3 - measure(lb));
          var rect = [R(lx) - 2, ly - 2, measure(lb) + 4, 11], ok = !(rect[1] < 24 && rect[0] < measure(title) + 24);
          placed.forEach(function (q) { if (rect[0] < q[0] + q[2] && q[0] < rect[0] + rect[2] && rect[1] < q[1] + q[3] && q[1] < rect[1] + rect[3]) ok = false; });
          if (ok) { placed.push(rect); afill(gg, rect[0], rect[1], rect[2], rect[3], C.ink, 0.6); text(gg, lb, R(lx), ly, { color: C.white }); }
        }
      }
      // hero token
      var img = castFrame("kit", hp.moving ? "walk" + (Math.floor(t * 8) % 4) : t > lastT() - 0.9 ? "cheer" + (Math.floor(t * 5) % 2) : "idle" + (Math.floor(t * 2) % 2), "open", "closed");
      var hx = R(hp.p[0] - img.width / 2), hy = R(hp.p[1] - 26 - (hp.moving ? Math.abs(Math.sin(t * 12)) * 2 : 0));
      if (hp.moving && hp.dir < 0) { gg.save(); gg.translate(hx + img.width, hy); gg.scale(-1, 1); gg.drawImage(img, 0, 0); gg.restore(); } else gg.drawImage(img, hx, hy);
      // cloud shadows
      for (var c = 0; c < 3; c++) { var cxx = R(((hash(c * 3) * W + t * (6 + c * 2)) % (W + 80)) - 40), cyy = R(hash(c * 7) * H * 0.8); afill(gg, cxx, cyy, 34, 8, C.ink, 0.18); afill(gg, cxx + 5, cyy - 4, 22, 4, C.ink, 0.18); afill(gg, cxx + 4, cyy + 8, 24, 3, C.ink, 0.18); }
    }, 1);
    var title = up(p.title || "WORLD MAP");
    g.overlay(function (gg, t) {
      var tw = measure(title) + 12;
      drawWin(gg, 6, 5, tw, 15, { style: "gold" });
      text(gg, title, 12, 9, { color: C.yellow });
      var hp = heroAt(t), k = hp.moving ? hp.k + 1 : hp.k;
      if (t < ts[0] - 0.2) return;
      var nar = g.portrait || W < 240, nd = nodes[Math.min(n - 1, k)], bh = nar ? 44 : 32, by = H - bh - 5;
      drawWin(gg, 6, by, W - 12, bh, { style: "blue" });
      var head = "STAGE " + (Math.min(n - 1, k) + 1), lbl = up(nd.label);
      text(gg, head, 13, by + 6, { color: C.aqua });
      var L = layoutBig(lbl, W - 30 - (nar ? 0 : measure(head) + 8), 1, 2, 18);
      if (nar) text(gg, L.lines[0], 13, by + 17, { color: C.yellow, scale: L.sc, shadow: C.ink });
      else text(gg, L.lines[0], 13 + measure(head) + 8, by + 6 - (L.sc - 1) * 3, { color: C.yellow, scale: L.sc, shadow: C.ink });
      if (nd.sublabel) { var sl = wrap(nd.sublabel, W - 30, 1)[0] || ""; text(gg, sl, 13, by + bh - 13, { color: C.white }); }
    }, 50);
    nodes.forEach(function (nd, i) { g.sparkle(P[i][0], P[i][1] - 6, ts[i], { dur: 0.5, screen: true }); g.burst(P[i][0], P[i][1] - 4, ts[i], { n: 10, speed: 40, life: 0.5, screen: true, colors: [C.yellow, C.white] }); });
    return g;
  };

  // ───────────── level-up ─────────────
  T["level-up"] = function (root, p) {
    var stats = arr(p.stats).filter(Boolean).slice(0, 6);
    if (!stats.length) stats = [{ label: "SKILL", from: 1, to: 2 }];
    var g = new Game(root, { world: p.world || "grassland", intro: "dither" });
    var W = g.W, H = g.H, n = stats.length;
    g.groundY = R(H * (g.portrait ? 0.48 : 0.86));
    g.camFn = function () { return 0; };
    var lvl = p.level != null ? Math.max(1, Math.round(+p.level) || 2) : 2;
    var heroX = g.portrait ? R(W / 2) : R(W * 0.22);
    var hero = g.actor(pickHero(p), { x: heroX, scale: 2, z: 25 });
    var ts = keyTimes(stats.map(function (s) { return s.keyword || autoKey(s.label); }), { start: 1.2, end: D() * 0.8, lead: 0.1, minGap: 0.45 });
    hero.cheer(0.4, 1.4);
    ts.forEach(function (t0) { hero.cheer(t0, 0.5); });
    hero.cheer(Math.min(lastT() - 1.0, ts[n - 1] + 0.8), 9);
    g.draw(function (gg, t) {
      afill(gg, 0, 0, W, H, C.ink, 0.45);
      // light pillar
      var pw = 26 + R(Math.sin(t * 6) * 2), px = heroX - pw / 2;
      afill(gg, R(px - 8), 0, pw + 16, g.groundY, C.yellow, 0.16);
      afill(gg, R(px), 0, pw, g.groundY, C.cream, 0.3);
      afill(gg, R(px + 6), 0, pw - 12, g.groundY, C.white, 0.45);
      // rising rings
      for (var r = 0; r < 3; r++) {
        var q = ((t * 0.7 + r / 3) % 1), ry = R(g.groundY - q * g.groundY * 0.9), rw = R(30 + Math.sin(q * Math.PI) * 10);
        gg.fillStyle = q < 0.7 ? C.yellow : C.cream; gg.fillRect(heroX - (rw >> 1), ry, rw, 1); gg.fillRect(heroX - (rw >> 1) + 3, ry - 1, rw - 6, 1);
      }
      for (var s = 0; s < 14; s++) { var q2 = (t * 0.5 + hash(s)) % 1; gg.fillStyle = s % 2 ? C.white : C.yellow; gg.fillRect(R(heroX + (hash(s * 3) - 0.5) * 60), R(g.groundY - q2 * g.groundY), 1, 2); }
    }, 10);
    var title = up(p.title || "LEVEL UP!");
    var TL = layoutBig(title, W - 20, 2, g.portrait ? 3 : 3, 50);
    g.overlay(function (gg, t) {
      var pp = outBounce(prog(t, 0.2, 0.9));
      var y = R(lerp(-40, g.portrait ? 12 : 8, pp));
      drawBig(gg, TL, R(g.portrait ? W / 2 : W * 0.5), y, { color: C.yellow, top: C.cream, topRows: 3, shadow: "#5a1020", wave: t > 1 ? t : null });
      var lvTxt = "LV " + (t < 0.9 ? lvl - 1 : lvl);
      var ly = y + TL.h + 6;
      text(gg, lvTxt, R(g.portrait ? W / 2 : W * 0.5), ly, { align: "center", color: t < 0.9 ? C.white : blink(t, 4) && t < 1.6 ? C.white : C.lime, scale: 2, outline: C.ink });
    }, 45);
    // stats window
    var bx, by, bw, bh, rowH = 13;
    bh = n * rowH + 14;
    if (g.portrait) { bx = 8; bw = W - 16; by = g.groundY + 18; }
    else { bx = R(W * 0.42); bw = W - bx - 8; by = R(Math.max(48, (H - bh) / 2 + 14)); }
    var maxTo = 1; stats.forEach(function (s) { maxTo = Math.max(maxTo, Math.abs(+s.to || 0), Math.abs(+s.from || 0)); });
    g.overlay(function (gg, t) {
      var op = prog(t, 0.8, 1.05);
      drawWin(gg, bx, by, bw, bh, { style: "blue", open: outBack(op) });
      if (op < 1) return;
      for (var i = 0; i < n; i++) {
        var s = stats[i], yy = by + 8 + i * rowH, from = +s.from || 0, to = +s.to || 0;
        var pp = prog(t, ts[i], ts[i] + 0.6), val = lerp(from, to, outCubic(pp));
        var active = t >= ts[i] && t < ts[i] + 0.8;
        if (active) dfill(gg, bx + 4, yy - 2, bw - 8, 11, C.yellow, 0.22);
        var lab = up(s.label), labW = R(bw * 0.42);
        while (measure(lab) > labW && lab.length > 3) lab = lab.slice(0, -1);
        text(gg, lab, bx + 8, yy, { color: t >= ts[i] ? C.white : C.grey2 });
        var barX = bx + 10 + labW, barW = bw - labW - 50;
        if (barW > 16) {
          gg.fillStyle = C.ink; gg.fillRect(barX, yy + 1, barW, 5);
          gg.fillStyle = C.grey0; gg.fillRect(barX + 1, yy + 2, barW - 2, 3);
          gg.fillStyle = C.aqua; gg.fillRect(barX + 1, yy + 2, R((barW - 2) * clamp(from / maxTo, 0, 1)), 3);
          var gw2 = R((barW - 2) * clamp(val / maxTo, 0, 1));
          if (pp > 0) { gg.fillStyle = C.lime; gg.fillRect(barX + 1 + R((barW - 2) * clamp(from / maxTo, 0, 1)), yy + 2, Math.max(0, gw2 - R((barW - 2) * clamp(from / maxTo, 0, 1))), 3); }
        }
        var num = s.suffix ? V.format(val, s.decimals || 0) + clean(s.suffix) : V.format(val, s.decimals || 0);
        text(gg, num, bx + bw - 8, yy, { align: "right", color: pp > 0 ? (pp < 1 ? C.yellow : C.lime) : C.white });
      }
    }, 46);
    stats.forEach(function (s, i) {
      var d = (+s.to || 0) - (+s.from || 0);
      g.popup((d >= 0 ? "+" : "") + V.format(d, s.decimals || 0), bx + bw - 20, by + 8 + i * rowH, ts[i] + 0.1, { color: C.lime, screen: true, rise: 10 });
      g.sparkle(bx + bw - 14, by + 10 + i * rowH, ts[i] + 0.05, { screen: true });
    });
    if (p.unlock) g.toast(p.unlock, Math.min(lastT() - 0.9, ts[n - 1] + 0.9), { title: "NEW SKILL!", icon: "star", style: "green", pos: g.portrait ? "top" : "bottom" });
    g.flash(0.2, C.white, 0.3);
    return g;
  };

  // ───────────── choice-menu ─────────────
  T["choice-menu"] = function (root, p) {
    var opts = arr(p.options).filter(Boolean).slice(0, 5);
    if (!opts.length) opts = [{ label: "YES" }, { label: "NO" }];
    var n = opts.length;
    var g = new Game(root, { world: p.world || "grassland", intro: "none" });
    var W = g.W, H = g.H;
    var boxH = g.portrait ? 64 : 46, boxY = H - boxH - 5;
    var menuW = 0; opts.forEach(function (o) { menuW = Math.max(menuW, measure(up(o.label))); });
    menuW = Math.min(g.portrait ? W - 12 : R(W * 0.55), menuW + 30);
    var menuH = n * 13 + 12, menuX = W - menuW - 6, menuY = boxY - menuH - 6;
    g.groundY = g.portrait ? menuY - 8 : boxY - 6;
    var chosen = p.chosen != null && p.chosen >= 0 && p.chosen < n ? p.chosen | 0 : -1;
    var asker = castId(p.asker || "orla"), hero = pickHero(p);
    var ha = g.actor(hero, { x: R(W * (g.portrait ? 0.32 : 0.14)), face: 1, scale: g.portrait ? 2 : 1 });
    var aa = asker !== hero ? g.actor(asker, { x: R(W * (g.portrait ? 0.7 : 0.32)), face: -1, scale: g.portrait ? 2 : 1 }) : null;
    var qClock = textClock(clean(p.question || "Which path will you choose?"), 0.25, D() * 0.4);
    var tq = Math.max(0.9, Math.min(qClock.end + 0.2, D() * 0.35));
    var ts = keyTimes(opts.map(function (o) { return o.keyword || autoKey(o.label); }), { start: tq, end: D() * 0.75, lead: 0.15, minGap: 0.6 });
    for (var i = 0; i < n; i++) ts[i] = Math.max(ts[i], tq + i * 0.3);
    var tChoose = chosen >= 0 ? Math.min(lastT() - 0.7, Math.max(ts[n - 1] + 0.9, (function () { var f = V.find(autoKey(opts[chosen].label) || "", ts[n - 1] + 0.1); return f != null ? f : D() * 0.85; })())) : 1e9;
    var lines = [{ who: asker, text: p.question || "Which path will you choose?", at: 0.25, end: ts[0] - 0.05 }];
    opts.forEach(function (o, i) { lines.push({ who: asker, text: up(o.label) + (o.detail ? ": " + clean(o.detail) : ""), at: ts[i], end: i + 1 < n ? ts[i + 1] - 0.05 : chosen >= 0 ? tChoose - 0.05 : lastT() + 0.05, sync: false }); });
    if (chosen >= 0) lines.push({ who: hero, text: p.verdict || ("I choose " + clean(opts[chosen].label) + "!"), at: tChoose, end: lastT() + 0.05 });
    g.dialog(lines, { y: boxY, h: boxH });
    if (aa) aa.talk(0.25, ts[n - 1] + 2);
    if (chosen >= 0) { ha.cheer(tChoose + 0.1, 5); g.flash(tChoose, C.white, 0.2); g.burst(menuX + menuW / 2, menuY + 6 + chosen * 13, tChoose, { n: 18, screen: true, speed: 60, colors: [C.yellow, C.white, C.lime] }); }
    var title = p.title ? up(p.title) : null;
    g.overlay(function (gg, t) {
      if (title) { var tw = measure(title) + 12; drawWin(gg, 6, 5, tw, 15, { style: "gold" }); text(gg, title, 12, 9, { color: C.yellow }); }
      var op = prog(t, tq - 0.3, tq);
      if (op <= 0) return;
      drawWin(gg, menuX, menuY, menuW, menuH, { style: "blue", open: outBack(op) });
      if (op < 1) return;
      var sel = 0; for (var i = 0; i < n; i++) if (t >= ts[i] - 0.1) sel = i;
      if (t >= tChoose) sel = chosen;
      for (var k = 0; k < n; k++) {
        var yy = menuY + 7 + k * 13, lab = up(opts[k].label);
        while (measure(lab) > menuW - 26 && lab.length > 3) lab = lab.slice(0, -1);
        var isChosen = t >= tChoose && k === chosen;
        if (k === sel) dfill(gg, menuX + 4, yy - 2, menuW - 8, 12, isChosen ? C.lime : C.yellow, isChosen && blink(t, 8) ? 0.5 : 0.22);
        text(gg, lab, menuX + 16, yy, { color: isChosen ? C.lime : k === sel ? C.yellow : C.white, shadow: C.ink });
        if (k === sel) text(gg, "▶", menuX + 6 + (Math.floor(t * 4) % 2), yy, { color: C.white });
      }
    }, 55);
    return g;
  };

  // ───────────── quest-log ─────────────
  T["quest-log"] = function (root, p) {
    var qs = arr(p.quests).filter(Boolean).slice(0, 6);
    if (!qs.length) qs = [{ title: "Begin the adventure" }];
    var n = qs.length;
    var g = new Game(root, { world: p.world || "grassland", intro: "wipe", length: 6000 });
    var W = g.W, H = g.H;
    var stripH = g.portrait ? 70 : 44;
    g.groundY = H - 10;
    var hero = g.actor(pickHero(p), { x: 40 });
    hero.walkTo(40 + D() * 40, 0, D());
    hero.moves[0].mode = "walk";
    g.camFn = function (t) { return R(t * 40); };
    var ts = keyTimes(qs.map(function (q) { return q.keyword || autoKey(q.title); }), { start: 0.8, end: D() * 0.8, lead: 0.1, minGap: 0.6 });
    ts.forEach(function (t0) { hero.jump(t0 + 0.25, { h: 14, dur: 0.45 }); g.burst(40 + (t0 + 0.5) * 40, g.groundY - 30, t0 + 0.5, { n: 10, colors: [C.yellow, C.white] }); g.score(t0 + 0.3, 50); });
    var wx = 6, wy = 18, ww = W - 12, wh = H - stripH - wy - 6;
    var rowH = Math.max(14, Math.min(g.portrait ? 34 : 26, Math.floor((wh - 14) / n)));
    var title = up(p.title || "QUEST LOG");
    g.overlay(function (gg, t) {
      drawWin(gg, wx, wy, ww, wh, { style: "paper", open: outBack(prog(t, 0.05, 0.35)) });
      if (t < 0.35) return;
      var tw = measure(title) + 12; drawWin(gg, wx + 8, wy - 8, tw, 14, { style: "red", shadow: false }); text(gg, title, wx + 14, wy - 5, { color: C.white });
      var cur = -1; for (var i = 0; i < n; i++) if (t >= ts[i] - 0.3) cur = i;
      for (var k = 0; k < n; k++) {
        var q = qs[k], yy = wy + 9 + k * rowH, done = t >= ts[k] + 0.3;
        var reward = clean(q.reward || "+" + (k + 1) * 50 + " XP");
        var rw = measure(reward);
        var txtW = ww - 34 - rw - 8;
        var ls = wrap(q.title, txtW, 1).slice(0, rowH >= 22 ? 2 : 1);
        if (k === cur && t < ts[k] + 1.2) dfill(gg, wx + 4, yy - 3, ww - 8, rowH - 1, "#c8a060", 0.4);
        // checkbox
        gg.fillStyle = "#6a4a28"; gg.fillRect(wx + 10, yy - 1, 9, 9);
        gg.fillStyle = "#f4e4b8"; gg.fillRect(wx + 11, yy, 7, 7);
        if (done) {
          var cp = prog(t, ts[k] + 0.3, ts[k] + 0.45);
          gg.fillStyle = "#1e8a3a";
          var pts = [[0, 3], [1, 4], [2, 5], [3, 4], [4, 3], [5, 2], [6, 1], [7, 0]];
          for (var c = 0; c < Math.ceil(pts.length * cp); c++) gg.fillRect(wx + 11 + pts[c][0], yy + 1 + pts[c][1], 2, 2);
        }
        for (var l = 0; l < ls.length; l++) text(gg, ls[l], wx + 25, yy + l * FONT.lh, { color: done ? "#1e6b3a" : "#3a2410" });
        text(gg, reward, wx + ww - 9, yy, { align: "right", color: done ? "#a07010" : "#a08a6a" });
        if (k === cur && t < ts[k] + 0.3 && blink(t, 4)) text(gg, "▶", wx + 2, yy, { color: "#a82838" });
        if (done && t < ts[k] + 1.3) {
          var sp = outBack(prog(t, ts[k] + 0.3, ts[k] + 0.5)), stamp = "CLEAR!", sw = measure(stamp, 1) + 8;
          var sx = wx + ww - rw - sw - 16;
          if (sp > 0) { gg.fillStyle = "#c82838"; gg.fillRect(sx, yy - 3, sw, 13); gg.fillStyle = "#f4e4b8"; gg.fillRect(sx + 1, yy - 2, sw - 2, 11); text(gg, stamp, sx + 4, yy, { color: "#c82838" }); }
        }
      }
    }, 50);
    g.hud({ level: "", xp: false });
    g.hudOpts = null;
    return g;
  };

  // ───────────── game-over ─────────────
  T["game-over"] = function (root, p) {
    var ms = arr(p.mistakes).filter(Boolean).slice(0, 5);
    if (!ms.length) ms = [{ label: "Skipping the basics" }];
    var n = ms.length;
    var g = new Game(root, { world: p.world || "cave", intro: "iris", length: 6000, hearts: n, maxHearts: Math.max(3, n) });
    var W = g.W, H = g.H;
    g.groundY = R(H * (g.portrait ? 0.62 : 0.8));
    g.hud({ level: p.level || "DANGER ZONE" });
    var tEnd = D() * 0.55;
    var ts = keyTimes(ms.map(function (m) { return m.keyword || autoKey(m.label); }), { start: 0.9, end: tEnd, lead: 0.05, minGap: 0.7 });
    var tGO = Math.min(lastT() - 1.6, Math.max(ts[n - 1] + 0.7, D() * 0.55));
    tGO = Math.max(tGO, ts[n - 1] + 0.3);
    var tCont = Math.min(lastT() - 1.0, tGO + 1.1), tYes = Math.min(lastT() - 0.55, tCont + Math.max(0.6, Math.min(1.6, (lastT() - tCont) * 0.4)));
    var speed = 34, x0 = 40;
    var hero = g.actor(pickHero(p), { x: x0 });
    function hx(t) { return x0 + t * speed; }
    // walk with pauses for hits (hurt knockback handled by actor)
    hero.walkTo(hx(tGO), 0, tGO);
    var types = ["slime", "bat", "spike", "ghost", "bugbot"], tints = ["green", "purple", "blue", null, "red"];
    ms.forEach(function (m, i) {
      var t0 = ts[i], ex = hx(t0) + 14 - i * 10 + (i + 1) * 10;
      hero.hurt(t0, { knock: 10, dur: 0.6 });
      g.loseHeart(t0);
      g.shake(t0, 4, 0.3);
      g.flash(t0, C.red, 0.15);
      g.popup("OUCH!", hx(t0), g.groundY - 36, t0, { color: C.red });
      g.enemy(types[i % 5], { x: ex, appear: Math.max(0, t0 - 1.3), patrol: 4, tint: tints[i % 5], labelTag: false });
      g.toast(m.label, t0, { title: "MISTAKE " + (i + 1), style: "red", dur: Math.min(1.8, (i + 1 < n ? ts[i + 1] : tGO) - t0) });
    });
    hero.hurt(tGO - 0.05, { knock: 0, dur: 0.5 });
    hero.hide(tGO + 0.45);
    g.burst(hx(tGO), g.groundY - 14, tGO + 0.45, { n: 16, colors: [C.white, C.red, C.pink], speed: 50 });
    // respawn
    hero.show(tYes + 0.35);
    hero.cheer(tYes + 0.4, 5);
    g.sparkle(hx(tGO), g.groundY - 16, tYes + 0.35, { dur: 0.5 });
    g.heartEv.push({ t: tYes + 0.35, v: g.maxHearts });
    g.overlay(function (gg, t) {
      if (t < tGO) return;
      var dark = t < tYes + 0.2 ? prog(t, tGO, tGO + 0.6) * 0.85 : 0.85 * (1 - prog(t, tYes + 0.2, tYes + 0.5));
      afill(gg, 0, 0, W, H, C.ink, dark);
      if (t < tYes + 0.3) {
        var L = layoutBig("GAME OVER", W - 20, 1, g.portrait ? 3 : 4, 60);
        var y = R(lerp(-40, H * 0.26, outBounce(prog(t, tGO + 0.3, tGO + 1.0))));
        drawBig(gg, L, R(W / 2), y, { color: C.red, top: C.pink, topRows: 3, shadow: "#3a0a14" });
        if (t >= tCont) {
          var cy = R(H * 0.52);
          var cnt = Math.max(1, 9 - Math.floor((t - tCont) * 3));
          text(gg, "CONTINUE?  " + (t >= tYes ? "" : cnt), R(W / 2), cy, { align: "center", color: C.white, outline: C.ink });
          var yes = t >= tYes;
          text(gg, (yes ? "▶ " : "  ") + "YES", R(W / 2) - 24, cy + 16, { color: yes ? (blink(t, 10) ? C.yellow : C.white) : C.white, outline: C.ink, align: "center" });
          text(gg, (yes ? "  " : "▶ ") + "NO", R(W / 2) + 26, cy + 16, { color: C.grey2, outline: C.ink, align: "center" });
        }
      }
    }, 60);
    if (p.lesson) {
      var ll = wrap(p.lesson, W - 40, 1).slice(0, 4), bh = ll.length * FONT.lh + 12;
      g.overlay(function (gg, t) {
        var op = prog(t, tYes + 0.45, tYes + 0.7);
        if (op <= 0) return;
        var by = g.portrait ? g.groundY + 14 : R(H * 0.18) + 10;
        drawWin(gg, 10, by, W - 20, bh, { style: "green", open: outBack(op) });
        if (op < 1) return;
        drawWin(gg, 16, by - 7, measure("TIP") + 10, 13, { style: "gold", shadow: false }); text(gg, "TIP", 21, by - 4, { color: C.yellow });
        var nch = (t - tYes - 0.7) * 50;
        ll.forEach(function (l, i) { text(gg, l, 18, by + 7 + i * FONT.lh, { color: C.white, shadow: C.ink, n: nch }); nch -= l.length + 1; });
      }, 61);
    }
    g.follow(hero, { lead: 0.3, max: 1e9 });
    return g;
  };

  // ───────────── pixel-chart ─────────────
  T["pixel-chart"] = function (root, p) {
    var bars = arr(p.bars).filter(Boolean).slice(0, 6);
    if (!bars.length) bars = [{ label: "A", value: 1 }];
    var n = bars.length;
    var g = new Game(root, { world: p.world || "grassland", intro: "iris", deco: false });
    var W = g.W, H = g.H;
    g.groundY = R(H * (g.portrait ? 0.78 : 0.82));
    g.camFn = function () { return 0; };
    var title = clean(p.title || ""), unit = clean(p.unit || "");
    var TL = title ? layoutBig(up(title), W - 24, 2, 2, 30) : null;
    var plotTop = (TL ? TL.h + 22 : 16) + 12;
    var maxV = 0; bars.forEach(function (b) { maxV = Math.max(maxV, Math.abs(+b.value || 0)); }); maxV = maxV || 1;
    var bh = 8, maxBlocks = Math.max(3, Math.floor((g.groundY - plotTop - 12) / bh));
    var slotW = Math.floor((W - 16) / n), bw = Math.max(8, Math.floor(Math.min(34, slotW - 8) / 8) * 8);
    var ts = keyTimes(bars.map(function (b) { return b.keyword || autoKey(b.label); }), { start: 0.5, end: D() * 0.7, lead: 0.1, minGap: 0.35 });
    var hi = p.highlight != null && p.highlight >= 0 && p.highlight < n ? p.highlight | 0 : (function () { var m = 0; for (var i = 1; i < n; i++) if (+bars[i].value > +bars[m].value) m = i; return m; })();
    var cols = [[C.red, "#f8a0a0", C.redD], [C.blue, C.sky, "#1f3a8a"], ["#3fa64a", C.greenL, C.greenD], [C.yellow, C.cream, C.gold], [C.purple, C.violet, C.purpleD], [C.teal, C.aqua, C.tealD]];
    var B = bars.map(function (b, i) {
      var v = +b.value || 0, blocks = Math.max(1, Math.round((Math.abs(v) / maxV) * maxBlocks));
      return { v: v, blocks: blocks, x: R(8 + slotW * i + (slotW - bw) / 2), t: ts[i], c: cols[i % cols.length], label: clean(b.label) };
    });
    var blk = {};
    function blockImg(c) {
      var key = c[0] + bw;
      if (blk[key]) return blk[key];
      var cv = canvas(bw, bh), cg = ctx(cv);
      for (var q = 0; q < bw; q += 8) {
        cg.fillStyle = C.ink; cg.fillRect(q, 0, 8, 8);
        cg.fillStyle = c[0]; cg.fillRect(q + 1, 1, 6, 6);
        cg.fillStyle = c[1]; cg.fillRect(q + 1, 1, 6, 1); cg.fillRect(q + 1, 1, 1, 6);
        cg.fillStyle = c[2]; cg.fillRect(q + 2, 6, 5, 1); cg.fillRect(q + 6, 2, 1, 5);
        cg.fillStyle = C.white; cg.fillRect(q + 2, 2, 1, 1);
      }
      return (blk[key] = cv);
    }
    var tJump = Math.min(lastT() - 1.0, ts[n - 1] + B[n - 1].blocks * 0.045 + 0.6);
    var tLand = B.map(function (b) { return b.t + b.blocks * 0.045 + 0.3; });
    g.draw(function (gg, t) {
      for (var i = 0; i < n; i++) {
        var b = B[i], img = blockImg(b.c);
        for (var j = 0; j < b.blocks; j++) {
          var tj = b.t + j * 0.045, final = g.groundY - (j + 1) * bh;
          if (t < tj) break;
          var pp = clamp((t - tj) / 0.28, 0, 1), y = R(lerp(-bh - 4, final, pp * pp));
          if (pp >= 1 && t - tj < 0.4) y += R(Math.sin((t - tj - 0.28) * 40) * 1.2 * (1 - (t - tj - 0.28) / 0.12));
          gg.drawImage(img, b.x, Math.min(final, y));
        }
        if (t >= b.t) {
          var topY = g.groundY - b.blocks * bh;
          var cnt = b.v * outCubic(prog(t, b.t, tLand[i]));
          var lab = V.format(cnt, Math.abs(b.v) < 10 && b.v % 1 ? 1 : 0) + unit;
          var sc = measure(lab, 2) <= slotW - 2 && bw >= 20 ? 2 : 1;
          var lift = i === hi && t > tJump + 0.3 ? 30 : 0;
          text(gg, lab, b.x + bw / 2, topY - 10 - (sc - 1) * 8 - lift, { align: "center", color: i === hi && t > tLand[n - 1] ? C.yellow : C.white, outline: C.ink, scale: sc });
        }
        // label under bar
        var ll = wrap(b.label, slotW - 2, 1).slice(0, 2);
        for (var l = 0; l < ll.length; l++) text(gg, ll[l], b.x + bw / 2, g.groundY + 4 + l * FONT.lh, { align: "center", color: C.white, outline: C.ink });
      }
    }, 10);
    if (TL) g.overlay(function (gg, t) { var pp = outBack(prog(t, 0.1, 0.4)); drawWin(gg, 8, 6, W - 16, TL.h + 12, { style: "blue", open: pp }); if (pp >= 1) drawBig(gg, TL, R(W / 2), 12, { color: C.yellow, outline: null, shadow: C.ink }); }, 50);
    // hero hops onto the highlight bar
    var hb = B[hi];
    var hero = g.actor(pickHero(p), { x: hb.x - 16, z: 30 });
    hero.walkTo(hb.x - 16, 0, 0.1);
    var topY = g.groundY - hb.blocks * bh;
    hero.jump(tJump, { to: topY, dx: 16 + bw / 2, dur: 0.6, h: 14 });
    hero.cheer(tJump + 0.6, 6);
    g.burst(hb.x + bw / 2, topY - 20, tJump + 0.6, { n: 20, colors: [C.yellow, C.white, C.pink], speed: 70 });
    g.draw(function (gg, t) {
      if (t < tJump + 0.6) return;
      var x = hb.x + bw - 4, y = topY;
      var rp = outCubic(prog(t, tJump + 0.6, tJump + 1.0));
      gg.fillStyle = C.ink; gg.fillRect(x - 1, y - R(20 * rp) - 1, 3, R(20 * rp) + 1);
      gg.fillStyle = C.grey3; gg.fillRect(x, y - R(20 * rp), 1, R(20 * rp));
      if (rp > 0.9) { gg.fillStyle = C.red; gg.fillRect(x + 1, y - 20, 9 + (Math.floor(t * 6) % 2), 6); gg.fillStyle = C.white; gg.fillRect(x + 4, y - 18, 2, 2); }
    }, 31);
    return g;
  };

  // ───────────── high-scores ─────────────
  T["high-scores"] = function (root, p) {
    var es = arr(p.entries).filter(Boolean).slice(0, 8);
    if (!es.length) es = [{ name: "PLAYER", score: 1000 }];
    var n = es.length;
    var g = new Game(root, { world: "space", intro: "dither", deco: false, background: false, bgColor: "#06061a" });
    var W = g.W, H = g.H;
    g.groundY = H + 40;
    g.camFn = function (t) { return R(t * 20); };
    var ts = keyTimes(es.map(function (e) { return e.keyword || autoKey(e.name); }), { start: 0.6, end: D() * 0.75, lead: 0.1, minGap: 0.35 });
    var title = up(p.title || "HIGH SCORES"), unit = clean(p.unit || "");
    var TL = layoutBig(title, W - 20, 2, g.portrait ? 2 : 3, 40);
    g.draw(function (gg, t) {
      for (var i = 0; i < 90; i++) { var sp = 6 + (i % 3) * 14, x = R(((hash(i * 1.3) * W - t * sp) % W + W) % W), y = R(hash(i * 7.7) * H); gg.fillStyle = i % 3 === 2 ? C.white : i % 3 ? "#8a8ac0" : "#4a4a80"; gg.fillRect(x, y, i % 3 === 2 && i % 2 ? 2 : 1, 1); }
    }, 0);
    var rainbow = [C.red, C.orange, C.yellow, C.lime, C.aqua, C.violet, C.pink];
    var top = TL.h + 26, rowH = Math.min(18, Math.floor((H - top - 30) / n));
    var ranks = ["1ST", "2ND", "3RD", "4TH", "5TH", "6TH", "7TH", "8TH"];
    var crown = mapCanvas([".y..y..y.", ".yy.yy.yy", ".yyyyyyy.", ".yryyyry.", ".yyyyyyy."], { y: C.yellow, r: C.red }, C.ink);
    g.overlay(function (gg, t) {
      var ci = Math.floor(t * 8);
      for (var i = 0; i < TL.lines.length; i++) {
        var line = TL.lines[i], w = measure(line, TL.sc), x = R(W / 2 - w / 2);
        for (var c = 0; c < line.length; c++) { var ch = line.charAt(c); text(gg, ch, x, 10 + i * FONT.lh * TL.sc, { scale: TL.sc, color: rainbow[(ci + c) % rainbow.length], outline: C.ink }); x += charW(ch) * TL.sc; }
      }
      var cw = Math.min(W - 16, 260), cx = R((W - cw) / 2);
      for (var k = 0; k < n; k++) {
        if (t < ts[k]) continue;
        var e = es[k], yy = top + k * rowH;
        var slide = outCubic(prog(t, ts[k], ts[k] + 0.3)), off = R((1 - slide) * W);
        var col = k === 0 ? (blink(t, 3) ? C.yellow : C.white) : [C.white, C.aqua, C.lime, C.pink, C.violet, C.orange, C.grey3][(k - 1) % 7];
        var nm = up(e.name);
        var scoreStr = V.format((+e.score || 0) * outCubic(prog(t, ts[k], ts[k] + 0.7)), 0) + (unit ? " " + unit : "");
        var nameMax = cw - 34 - measure(scoreStr) - 10;
        while (measure(nm) > nameMax && nm.length > 3) nm = nm.slice(0, -1);
        text(gg, ranks[k], cx + off, yy, { color: col, outline: C.ink });
        text(gg, nm, cx + 30 + off, yy, { color: col, outline: C.ink });
        var dotsFrom = cx + 34 + measure(nm) + off, dotsTo = cx + cw - measure(scoreStr) - 6 + off;
        gg.fillStyle = C.grey1; for (var d = dotsFrom; d < dotsTo; d += 4) gg.fillRect(R(d), yy + 6, 1, 1);
        text(gg, scoreStr, cx + cw + off, yy, { color: col, outline: C.ink, align: "right" });
        if (k === 0 && slide >= 1) gg.drawImage(crown, cx - 14, yy - 2);
      }
      if (t > ts[n - 1] + 0.6 && blink(t, 1.5)) text(gg, clean(p.footer || "PRESS START"), R(W / 2), H - 16, { align: "center", color: C.white, outline: C.ink });
    }, 50);
    es.forEach(function (e, i) { g.sparkle(R((W - Math.min(W - 16, 260)) / 2) + Math.min(W - 16, 260) - 4, top + i * rowH + 3, ts[i] + 0.7, { screen: true }); });
    return g;
  };

  // ═════════════════════════ ENTRY POINTS & PUBLIC API ═════════════════════════
  var TPL_IDS = Object.keys(T);
  function resetRoot(root) {
    root = root || V.root();
    root.innerHTML = "";
    root.className = "";
    root.removeAttribute("style");
    return root;
  }
  S.render = function (id, root, props) {
    var fn = T[id];
    if (!fn) throw new Error("Unknown template: " + id);
    root = resetRoot(root);
    try {
      return fn(root, props || {});
    } catch (e) {
      V.error("pixel-quest template " + id + ": " + (e && e.message));
      try { V.reset(); } catch (e2) {}
      return S.fallback(root, V.narration);
    }
  };
  S.fallback = function (root, narration) {
    try {
      root = resetRoot(root);
      var txt = clean(narration != null ? narration : V.narration || "");
      var wid = WORLD_IDS[hashS(txt) % WORLD_IDS.length];
      var g = new Game(root, { world: wid, intro: "iris", length: 8000 });
      var W = g.W, H = g.H, boxH = g.portrait ? 76 : 52, boxY = H - boxH - 5;
      g.groundY = g.portrait ? R(H * 0.6) : boxY - 8;
      g.hud({ level: g.world.def.label });
      var hero = g.actor("kit", { x: 40 });
      var buddy = g.actor("bolt", { x: 16, z: 19 });
      var sp = 36;
      hero.walkTo(40 + D() * sp, 0, D()); buddy.walkTo(16 + D() * sp, 0, D());
      g.follow(hero, { lead: 0.35, max: 1e9 });
      // collect a coin on every ~6th word (or every 1.4 s)
      var Wd = V.words || [], times = [];
      if (Wd.length) { for (var i = 4; i < Wd.length; i += 6) times.push(Wd[i].start); }
      else for (var t0 = 1; t0 < D() - 0.5; t0 += 1.4) times.push(t0);
      times.slice(0, 40).forEach(function (t, k) {
        var x = 40 + t * sp;
        hero.jump(t - 0.25, { h: 16, dur: 0.5 });
        g.item(k % 5 === 4 ? "gem" : "coin", { x: x, y: g.groundY - 32, at: t, value: k % 5 === 4 ? 500 : 100, toast: false });
      });
      if (txt) g.narrate({ text: txt, who: "orla", y: boxY, h: boxH, at: 0.1 });
      return g;
    } catch (e) {
      V.error("pixel-quest fallback: " + (e && e.message));
      try {
        root = root || V.root();
        root.innerHTML = "";
        var c = canvas(320, 180), g2 = ctx(c);
        c.className = "pq-canvas";
        c.style.width = "100%"; c.style.height = "100%";
        root.appendChild(c);
        g2.fillStyle = C.navy; g2.fillRect(0, 0, 320, 180);
        var ls = wrap(narration || V.narration || "", 300, 1).slice(0, 12);
        ls.forEach(function (l, i) { text(g2, l, 10, 10 + i * 11, { color: C.white }); });
      } catch (e2) {}
    }
  };

  /** Custom-mode API. */
  S.game = function (root, opts) { root = root || V.root(); return new Game(root, opts || {}); };
  S.cast = CAST_IDS.slice();
  S.worlds = WORLD_IDS.slice();
  S.items = ITEM_NAMES.slice();
  S.enemies = ENEMY_TYPES.slice();
  S.bosses = BOSS_TYPES.slice();
  S.poses = POSE_NAMES.slice();
  S.palette = C;
  S.sprite = function (name, o) {
    o = o || {};
    name = str(name);
    if (CAST[name]) return castFrame(name, o.pose || "idle0", o.eyes, o.mouth, o.phase);
    if (ITEM_NAMES.indexOf(name) >= 0) return itemIcon(name, o.frame || 0);
    if (ENEMY_TYPES.indexOf(name) >= 0) return enemyFrame(name, o.frame || 0, o.tint);
    if (BOSS_TYPES.indexOf(name) >= 0) return bossFrame(name, o.frame || 0);
    return decoSprite(name);
  };
  S.portrait = function (id, o) { o = o || {}; return portrait(id, o.talking, o.blink); };
  S.pixel = {
    text: text, measure: measure, wrap: function (s, w, sc) { return wrap(s, w, sc); }, clean: clean, lineHeight: FONT.lh,
    window: drawWin, dither: dfill, gradient: dgrad, map: mapCanvas, silhouette: silhouette, canvas: canvas,
    textClock: textClock, keyTimes: keyTimes, blink: blink,
  };
  S.templateIds = TPL_IDS;
  // expose a few internals for templates written in custom mode
  S.pq = { T: T, Game: Game, Actor: Actor };
})();
