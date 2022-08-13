module.exports = {
  clickElement: async function (page, selector) {
    try {
      await page.waitForSelector(selector);
      await page.click(selector);
    } catch (error) {
      `Selector is not clickable: ${selector}`;
    }
  },

  clickElementFromMassive: async function (page, selector, num) {
    try {
      await page.waitForSelector(selector);
      await (await page.$$(selector))[num].click();
    } catch (error) {
      `Selector is not clickable: ${selector}`;
    }
  },

  getText: async function (page, selector) {
    try {
      await page.waitForSelector(selector);
      return await page.$eval(selector, (link) => link.textContent);
    } catch (error) {
      thrownewError(`Text is not available for selector:${selector}`);
    }
  },
};
