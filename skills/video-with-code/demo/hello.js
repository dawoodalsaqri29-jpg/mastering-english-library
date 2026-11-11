// The first scene. It proves the whole chain works: code in, MP4 out.
const box = V.el('div', { parent: root });
box.style.cssText = 'position:absolute;inset:0;background:#101010;display:flex;align-items:center;justify-content:center';

const title = V.el('div', { parent: box, text: 'Made with code' });
title.style.cssText = `color:#fff;font:700 ${V.s(120)}px Arial,sans-serif`;

const bar = V.el('div', { parent: box });
bar.style.cssText = `position:absolute;left:0;bottom:0;height:${V.s(24)}px;width:100%;background:#ff5a1f;transform-origin:left`;

const tl = V.timeline();
tl.fromTo(title, { opacity: 0, y: V.s(60) }, { opacity: 1, y: 0 }, { at: 0.2, dur: 0.7, ease: 'outCubic' });
tl.fromTo(bar, { scaleX: 0 }, { scaleX: 1 }, { at: 0, dur: V.duration, ease: 'linear' });
