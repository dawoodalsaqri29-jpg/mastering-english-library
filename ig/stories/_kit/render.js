const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' }).catch(() => chromium.launch());
  const p = await b.newPage({ viewport: { width: 1200, height: 2000 }, deviceScaleFactor: 1 });
  await p.goto('file://' + __dirname + '/stories.html');
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(400);
  for (let i = 1; i <= 7; i++) {
    const el = await p.$('#s' + i);
    await el.screenshot({ path: `out/story-${i}.png` });
  }
  await b.close();
})();
