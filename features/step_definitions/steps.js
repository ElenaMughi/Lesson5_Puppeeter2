const {
  Given,
  When,
  Then,
  Before,
  setDefaultTimeout,
  After,
} = require("cucumber");
const puppeteer = require("puppeteer");
const { expect } = require("chai");

// setDefaultTimeout(60000);

Before(async function () {
  const browser = await puppeteer.launch({
    headless: false,
    setDefaultTimeout: 60000,
  });
  const page = await browser.newPage();
  this.page = page;
  this.browser = browser;
});

After(async function () {
  this.browser.close();
});

Given("user is on {string}", async function (string) {
  return await this.page.goto(`${string}`);
});

When("user select {int} day", async function (int) {
  this.page.waitForSelector('[class="page-nav__day-week"]');
  await (await this.page.$$('[class="page-nav__day-week"]'))[int].click();
});

When("user take a ticket {int} row {int} sit", async function (int, int2) {
  console.log(int2);
  this.page.waitForSelector('[class="movie-seances__time-block"]');
  await this.page.click('[class="movie-seances__time-block"]');

  this.page.waitForSelector(`div > div:nth-child(${int}) > span`);
  await this.page.click(`div:nth-child(${int}) > span:nth-child(${int2})`);

  this.page.waitForSelector('[class="acceptin-button"]');
  this.page.click('[class="acceptin-button"]');

  this.page.waitForSelector('[class="ticket__check-title"]');
  this.page.waitForSelector('[class="acceptin-button"]');
  this.page.click('[class="acceptin-button"]');
});

Then("user seen {string}", async function (string) {
  console.log(string);
  await this.page.waitForSelector('[class="ticket__check-title"]');
  const title = await this.page.$eval(
    '[class="ticket__check-title"]',
    (link) => link.textContent
  );
  expect(title).contain("Электронный билет");
});
