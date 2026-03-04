const { test, expect } = require("@playwright/test");
const LoginPage = require("../Pages/LoginPage");
const AutomationFieldOperation_Add_Finding_Flow = require("../Pages/AutomationFieldOperation_Add_Finding_Flow");



test("Automation Field Operation Add Finding Flow Working or not ? ", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const AutomationFieldOperationAddFinding = new AutomationFieldOperation_Add_Finding_Flow(page);

   // Open URL
  await loginPage.goto("http://4.213.96.168:5713/");

  // Server Config
  await loginPage.configureServer("52.140.56.11");
  // Login as Admin
  await loginPage.login("AutomationFieldOperator", "Automation2026");

  await page.pause();



});