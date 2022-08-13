const {
  Given,
  When,
  Then,
  Before,
  setDefaultTimeout,
  After,
} = require("cucumber");
const { puppeteer } = require("puppeteer");
const { expect } = require("chai");
let page;

setDefaultTimeout(60000);

Before(async () => {
  page = await browser.newPage();
});

After(() => {
  browser.close();
});

Given("user is on {string}", async function (string) {
  await page.goto(string);
  return "pending";
});
When(
  "user take a ticket {int} day, {int} row {int} sit",
  async function (int, int2, int3) {
    await page.waitForSelector('[class="page-nav__day-week"]');
    await (await page.$$('[class="page-nav__day-week"]'))[int].click();

    await page.waitForSelector('[class="movie-seances__time-block"]');
    await page.click('[class="movie-seances__time-block"]');

    await page.waitForSelector("div:nth-child(6) > span");
    await (await page.$$(`div:nth-child(${int2}) > span`))[int3].click();

    await page.waitForSelector('[class="acceptin-button"]');
    await page.click('[class="acceptin-button"]');

    await page.waitForSelector('[class="ticket__check-title"]');
    await page.waitForSelector('[class="acceptin-button"]');
    await page.click('[class="acceptin-button"]');
    return "pending";
  }
);
Then("user seen {string}", async function (string) {
  await page.waitForSelector('[class="ticket__check-title"]');
  const title = await page.$eval(
    '[class="ticket__check-title"]',
    (link) => link.textContent
  );
  expect(title).toEqual("Электронный билет");
  return "pending";
});
