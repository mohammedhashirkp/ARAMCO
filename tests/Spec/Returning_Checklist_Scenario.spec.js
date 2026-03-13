const { test, expect } = require("@playwright/test");
const LoginPage = require("../Pages/LoginPage");
const Returning_Checklist_Scenario = require("../Pages/Returning_Checklist_Scenario");

test("Returning Check list Scenario Test case end to end Validation.", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const returning_Checklist_Scenario = new Returning_Checklist_Scenario(page);

  // Open URL
  await loginPage.goto("http://4.213.96.168:5713/");

  // Server Config
  await loginPage.configureServer("52.140.56.11");
  // Login as Admin
  await loginPage.login("Automation", "Automation2026");

  //Navigate to Checklist
  await returning_Checklist_Scenario.navigateToChecklist();

  //Navigate Further to Create AssignCheklist
  await returning_Checklist_Scenario.navigateToGroup();

  // Create the Assignment and Submit
  await returning_Checklist_Scenario.createAssignment(expect);

  // Logout from Shift Supervisor
  await loginPage.logout();

  // log in as Automation Field Operator

  // Server Config
  await loginPage.configureServer("52.140.56.11");
  // Login as Admin
  await loginPage.login("AutomationFieldOperator", "Automation2026");

  //get the latest ID created
  await returning_Checklist_Scenario.GetLatestchecklistID();

  //checklist should be clicked
  await returning_Checklist_Scenario.ChecklistSelection();

  //Click on findings and its Functionality
  await returning_Checklist_Scenario.FindingsOption();
  await page.pause();
});
