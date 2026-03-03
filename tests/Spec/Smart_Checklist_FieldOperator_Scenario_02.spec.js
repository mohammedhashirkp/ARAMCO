const { test, expect } = require("@playwright/test");
const LoginPage = require("../Pages/LoginPage");
const SmartChecklistFieldOperatorPage = require("../Pages/SmartChecklistFieldOperatorPage");

test("Testing the Smart_Checklist_FieldOperator_Scenario_02 End to End Working Or Not ? ", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const smartChecklistFieldOperatorPage = new SmartChecklistFieldOperatorPage(
    page,
  );

  // Open URL
  await loginPage.goto("http://4.213.96.168:5713/");

  // Server Config
  await loginPage.configureServer("52.140.56.11");

  // Login as Admin
  await loginPage.login("AutomationFieldOperator", "Automation2026");

  // Select the latest record created by me
  // Wait for table to load
  await expect(page.locator("tbody tr").first()).toBeVisible();
  // Get all rows
  const rows = page.locator("tbody tr");
  // Filter rows where Operator column contains 'Automation Field Operator'
  const targetRow = page
    .locator("table tbody tr")
    .filter({
      has: page.locator("td").nth(3).filter({
        hasText: "Supervisor",
      }),
    })
    .first();

  await expect(targetRow).toBeVisible();
  await targetRow.getByRole("button", { name: "View" }).click();

  //Submit and Click ok
  await smartChecklistFieldOperatorPage.SubmitLatestChecklistID();

  //Verify Checklist Details
  await smartChecklistFieldOperatorPage.verifyChecklistDetails();

  // Logout
  await loginPage.logout();
});
