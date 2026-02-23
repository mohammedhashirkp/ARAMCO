const { test, expect } = require("@playwright/test");
const LoginPage = require("../Pages/LoginPage");
const smartchecklist_12 = require("../Pages/smartchecklist_12");

test("Validate the End-End Flow for Scenario_3 smartchecklist_12 from Botgauge Scenario is working or not ? ", async ({
  page,
}) => {
  const loginpage = new LoginPage(page);
  const SmartChecklist12 = new smartchecklist_12(page);
  // Open URL
  await loginpage.goto("http://4.213.96.168:5713/");

  // Server Configuration
  await loginpage.configureServer("52.140.56.11");

  // Login as Automation User
  await loginpage.login("Automation", "Automation2026");

  // Now logout from Automation User
  await loginpage.logout();

  //------------------------- 1 st part Completed log out from Automation User ----------------------------------//

  // Server Configuration
  await loginpage.configureServer("52.140.56.11");

  // Login as Automation Field Operator User
  await loginpage.login("AutomationFieldOperator", "Automation2026");

  // Now logout from Automation Field Operator User
  await loginpage.logout();

  //----------------------2 nd part completed log out from Automation Field Operator User------------------//

  // Server Configuration
  await loginpage.configureServer("52.140.56.11");

  // Login as Automation User
  await loginpage.login("Automation", "Automation2026");

  // Do the Functionalities from Shift Supervisor like--- chceklist,Operations,CDu etc.
  await SmartChecklist12.AutomationUserFunctions();

  // Now logout from Automation User
  await loginpage.logout();

  //------------------------3rd Part Completed Log out from Shift Supervisor User---------------------------//
});
git