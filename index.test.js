const puppeteer = require("puppeteer");
const { clickElement, getText } = require("./lib/command.js");
let page;

describe("GoToTheCinema", () => {
  beforeEach(async () => {
    page = await browser.newPage();
  });

  afterEach(() => {
    page.close();
  });

  test("BookTicket", async () => {
    await page.goto("https://qamid.tmweb.ru/client/index.php");
 //   expect(await page.url()).toBe("https://qamid.tmweb.ru/client/index.php");
    // Click text=23:45
    const firstLink = await page.$$('[class="movie-seances__time-block"]');
    await firstLink[1].click();
    //await page.click('[data-seance-id="139"]');
    //await page.waitForSelector("Начало сеанса: 23:45");
    await page.$$("div:nth-child(6) > span").first().click();
    // Click text=Забронировать
    await page.$("text=Забронировать").click();
    // Click text=Получить код бронирования
    await page.locator("text=Получить код бронирования").click();

    const title = await page.$eval("h2", (link) => link.textContent);
    console.log(title);
    expect(title).toEqual("Электронный билет");
  });
});
