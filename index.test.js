const puppeteer = require("puppeteer");
const { clickElement, getText } = require("./lib/command.js");
let page;

describe("Netology page tests", () => {
  beforeEach(() => {
    page = browser.newPage();
  });

  afterEach(() => {
    page.close();
  });

  test("test1", async () => {
    await page.goto("http://qamid.tmweb.ru/client/index.php");

    await page.click('li > [data-seance-id="129"]');
    await expect(page).toHaveURL("http://qamid.tmweb.ru/client/hall.php");

    await page.click("div:nth-child(7) > span:nth-child(1)");

    await page.click('[class="acceptin-button"]');
    await expect(page).toHaveURL("http://qamid.tmweb.ru/client/payment.php");

    await page.click('[class="acceptin-button"]');
    await expect(page).toHaveURL("http://qamid.tmweb.ru/client/ticket.php");

    const title = await page.$eval("h2", (link) => link.textContent);
    console.log(title);
    expect(title).toEqual("Электронный билет");
  });
});
