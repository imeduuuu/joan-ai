import { chromium } from 'playwright';

const EXEC = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const URL = 'http://localhost:3000';

const targets = [
  ['01-hero', 'header#top'],
  ['02-problema', '#problema'],
  ['03-solucion', '#solucion'],
  ['04-flujo', '#flujo'],
  ['05-instagram', '#instagram'],
  ['06-resultados', '#resultados'],
  ['07-stack', 'section:has-text("Bajo el capó")'],
  ['08-testimonial', 'section:has-text("llevamos meses")'],
  ['09-contacto', '#contacto'],
];

const browser = await chromium.launch({ executablePath: EXEC });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(URL, { waitUntil: 'networkidle' });

// Trigger every whileInView reveal (once:true) by scrolling through.
await page.evaluate(async () => {
  const step = window.innerHeight * 0.5;
  for (let y = 0; y <= document.body.scrollHeight; y += step) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 200));
  }
  window.scrollTo(0, 0);
  await new Promise((r) => setTimeout(r, 400));
});

for (const [name, sel] of targets) {
  const el = page.locator(sel).first();
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  const path = `/tmp/shots/sec-${name}.png`;
  await el.screenshot({ path });
  console.log(path);
}

await browser.close();
console.log('done');
