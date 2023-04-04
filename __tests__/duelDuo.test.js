const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("draw button should display div", async () => {
    let drawBtn = await driver.findElement(By.xpath('//*[@id="draw"]'));
    await drawBtn.click();
    await driver.wait(until.elementsLocated(By.xpath('//*[@id="choices"]/div[1]')))

  });

});