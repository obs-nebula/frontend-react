import puppeteer from 'puppeteer';

describe('App.js', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      slowMo: 100 // We need this to make the test work.
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
  });

  it('Should click in the button', async () => {
    await page.reload();
    await page.waitForSelector('.App');
    await page.click('#btn');

    page.on('console', async msg => {
      for (let i = 0; i < msg.args().length; ++i) {
        let result = await msg.args()[i].jsonValue();
        result = JSON.stringify(result, null, 2);
        console.log(`${i}: ${result}`);
      }
    });
    
    const paragraphHandle = await page.waitForSelector('.result');
    const text = await paragraphHandle.evaluate(ph => ph.innerText);
    expect(text).toBe('Welcome to the project');
  });

  afterAll(() => browser.close());
});