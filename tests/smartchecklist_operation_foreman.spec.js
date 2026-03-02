const { test, expect } = require("@playwright/test");
const LoginPage = require("../Pages/LoginPage");
const smartchecklist_operation_foreman = require("../Pages/smartchecklist_operation_foreman");

test("Testing the smartchecklist_operation_foreman Working Or Not ? ", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const smartchecklist_operationforeman = new smartchecklist_operation_foreman(page);

  // Open URL
  await loginPage.goto("http://4.213.96.168:5713/");

  // Server Configuration
  await loginPage.configureServer("52.140.56.11");

  // Login as Automation User
  await loginPage.login("AutomationOperationForeman", "Automation2026");

  // do the Functionalities for Foreman
  await smartchecklist_operationforeman.ForemanFunctionality();

  //logout from the site.
  await loginPage.logout();
});
