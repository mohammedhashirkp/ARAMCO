const { test, expect } = require("@playwright/test");
const LoginPage = require("../Pages/LoginPage");
const AutomationFieldOperator = require("../Pages/AutomationFieldOperator");

test("Automation Field Operator Flow is working or Not ? ", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const AutomationFieldoperator = new AutomationFieldOperator(page);

  // Open URL
  await loginPage.goto("http://4.213.96.168:5713/");

  // Server Config
  await loginPage.configureServer("52.140.56.11");
  // Login as Admin
  await loginPage.login("AutomationFieldOperator", "Automation2026");
  

  // get rows matching Automation Field Operator
  const filteredRows = page.locator("table tbody tr", {
  hasText: /Automation\s*Field\s*Operator/i,
  has: page.getByRole("button", { name: "View" }),
});

  // ensure at least one exists
  await expect(filteredRows.first()).toBeVisible();

  // latest matching row (top row)
  const latestRow = filteredRows.first();
  // get ID text
  const latestId = await latestRow.locator("td").nth(1).innerText();
  // remove newline + extra value
   const latestIdnew = latestId.split("\n")[0].trim();

  console.log("Latest ID:", latestIdnew);

  // click ID
  await latestRow.locator("td").nth(1).click();

  //Do the Submit review Functionlity
  await AutomationFieldoperator.SubmitFunctionalities();

  //Go Back to old page.
  await page.goBack();

  //Re-Locate SAME Row Using ID
  await page.waitForSelector("table tbody tr");

  const rowById = page.locator("table tbody tr", {
    has: page.locator("td", { hasText: latestIdnew }),
  });

  // console.log(await page.locator("table tbody").innerText());
  await expect(rowById).toBeVisible();

  //check the Status is In Review.
  const statusCell = rowById.locator("td").nth(15);

  await expect(statusCell).toHaveText("In Review");
});
