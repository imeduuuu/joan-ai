import { chromium } from 'playwright';

const EXEC = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const URL = 'http://localhost:3000';

async function revealAll(page) {
  // Scroll through the page so every whileInView reveal (once:true) fires.
  await page.evaluate(async () => {
    const step = window.innerHeight * 0.6;
    const max = document.body.scrollHeight;
    for (let y = 0; y <= max; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 220));
    }
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 400));
  });
}

async function shoot(name, { width, height }) {
  const browser = await chromium.launch({ executablePath: EXEC });
  const page = await browser.newPage({ viewport: { width, height } });
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1200); // hero intro + font swap
  const hero = `/tmp/shots/${name}-hero.png`;
  await page.screenshot({ path: hero });
  await revealAll(page);
  await page.waitForTimeout(600);
  const full = `/tmp/shots/${name}-full.png`;
  await page.screenshot({ path: full, fullPage: true });
  await browser.close();
  console.log(`${name}: ${hero} | ${full}`);
}

await shoot('desktop', { width: 1440, height: 900 });
await shoot('mobile', { width: 390, height: 844 });
console.log('done');
