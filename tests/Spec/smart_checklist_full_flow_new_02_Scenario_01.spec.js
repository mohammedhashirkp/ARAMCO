const { test, expect } = require("@playwright/test");
const LoginPage = require("../Pages/LoginPage");
const GroupPage = require("../Pages/Shift_Supervisor_Scenario");

test("Complete Login & Group Flow", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const groupPage = new GroupPage(page);

  // Open URL
  await loginPage.goto("http://4.213.96.168:5713/");

  // Server Config
  await loginPage.configureServer("52.140.56.11");

  // Login as Admin
  await loginPage.login("Automation", "Automation2026");

  // Navigate & Create Assignment
  await groupPage.navigateToChecklist();
  await loginPage.logout();

  // Login as Field Operator
  await loginPage.configureServer("52.140.56.11");
  await loginPage.login("AutomationFieldOperator", "Automation2026");
  await loginPage.logout();

  // Login as Admin
  await loginPage.login("Automation", "Automation2026");
  await groupPage.navigateToChecklist();
  await groupPage.navigateToGroup();
  //----------------------------thi this completed---------------------------------

   await groupPage.createAssignment();

  // Verify Data
  await groupPage.verifyAssignment(expect);

  // Logout
  await loginPage.logout();
});
