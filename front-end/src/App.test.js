/*
 * Copyright Red Hat, Inc, and individual contributors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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