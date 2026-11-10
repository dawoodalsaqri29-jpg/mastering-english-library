// Turns one scene into one self-contained HTML page: runtime + style + your animation.
//
//   node core/build-scene.mjs --code scenes/001.js --words scenes/001.words.json \
//     --duration 12.4 --narration "Why is the sky blue?" --style styles/my-style --out scenes/001.html
//
// --style is optional. It points at a folder holding engine.css and engine.js.
// --template + --props use a template from that engine. Otherwise --code is the body of
// function scene(V, S, root).
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';

const { values: a } = parseArgs({
  options: {
    code: { type: 'string' },
    template: { type: 'string' },
    props: { type: 'string' },
    words: { type: 'string' },
    narration: { type: 'string', default: '' },
    duration: { type: 'string', default: '5' },
    width: { type: 'string', default: '1920' },
    height: { type: 'string', default: '1080' },
    seed: { type: 'string', default: '1' },
    style: { type: 'string' },
    out: { type: 'string' },
  },
});
if (!a.out || (!a.code && !a.template)) {
  console.error('Need --out and one of --code or --template');
  process.exit(1);
}

const read = (p) => (p && existsSync(p) ? readFileSync(p, 'utf8') : '');
const here = dirname(fileURLToPath(import.meta.url));
const runtime = readFileSync(join(here, 'runtime.js'), 'utf8').replaceAll('__RUNTIME_VERSION__', '1');
const css = a.style ? read(join(a.style, 'engine.css')) : '';
const engine = a.style ? read(join(a.style, 'engine.js')) : '';

// Safe to place inside an inline <script>.
const json = (v) => JSON.stringify(v).replace(/</g, '\\u003c').replace(/>/g, '\\u003e');
const safe = (js) => js.replace(/<\/(script)/gi, '<\\/$1').replace(/<!--/g, '<\\!--');

const input = {
  duration: Number(a.duration),
  width: Number(a.width),
  height: Number(a.height),
  seed: Number(a.seed),
  narration: a.narration,
  words: a.words ? JSON.parse(read(a.words) || '[]') : [],
};
const scene = a.template
  ? { templateId: a.template, props: a.props ? JSON.parse(read(a.props)) : {}, narration: a.narration }
  : { narration: a.narration };

const custom = a.code ? `<script>window.__scene_code = function scene(V, S, root) {\n${safe(read(a.code))}\n};</script>` : '';

const boot = `(function () {
  var cfg = ${json(scene)};
  V.build(function (V, S, root) {
    try {
      if (cfg.templateId) S.render(cfg.templateId, root, cfg.props);
      else window.__scene_code(V, S, root);
      if (S && typeof S.flush === "function") S.flush();
    } catch (e) {
      V.error("[scene] " + (e && e.message ? e.message : String(e)));
      try { V.reset(); } catch (e2) {}
      if (S && S.fallback) S.fallback(root, cfg.narration);
    }
  });
})();`;

writeFileSync(
  a.out,
  `<!doctype html>
<html lang="en" data-seed="${input.seed}" data-duration="${input.duration}" data-width="${input.width}" data-height="${input.height}">
<head>
<meta charset="utf-8">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; img-src data: blob:; font-src data:; media-src data: blob:; connect-src 'none'">
<meta name="viewport" content="width=${input.width}, height=${input.height}, initial-scale=1">
<style>html,body{margin:0;width:100%;height:100%;overflow:hidden;background:#fff}#scene-root{position:absolute;inset:0;overflow:hidden}${css}</style>
<script>window.__SCENE_INPUT__ = ${json(input)};</script>
<script>${safe(runtime)}</script>
<script>window.SceneStyle = window.SceneStyle || {};</script>
<script>${safe(engine)}</script>
</head>
<body>
<div id="scene-root"></div>
${custom}
<script>${safe(boot)}</script>
</body>
</html>
`,
);
console.log(`built ${a.out}`);
