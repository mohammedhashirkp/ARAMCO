const { test, expect } = require("@playwright/test");
const LoginPage = require("../Pages/LoginPage");
const GroupPage = require("../Pages/GroupPage");

test("End-End Testing For Shift SupervisorFlow", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const groupPage = new GroupPage(page);

  // Open URL
  await loginPage.goto("http://4.213.96.168:5713/");

  // Server Config
  await loginPage.configureServer("52.140.56.11");
  // Login as Admin
  await loginPage.login("Automation", "Automation2026");

  //Navigate to Checklist
  await groupPage.navigateToChecklist();

  //Navigate Further to Create AssignCheklist
  await groupPage.navigateToGroup();

  // Create the Assignment and Submit
  await groupPage.createAssignment(expect);

  // wait for dashboard table data
  await expect(
    page.getByRole("button", { name: "View" }).first(),
  ).toBeVisible();
  const firstRow = page
    .locator("table tbody tr")
    .filter({ has: page.getByRole("button", { name: "View" }) })
    .first();

  // Verify dynamic ID format
  await expect(firstRow.locator("td").nth(1).locator("div").first()).toHaveText(
    /^OPS-CDU-2\.5-\d+$/,
  );

  // Verify the 4 columns
  //verify the other columns in Dashboard
  await expect(firstRow.locator("td").nth(2)).toHaveText(
    "2.5 PostIndicatorsValvePIVChecklist",
  );
  await expect(firstRow.locator("td").nth(3)).toHaveText(
    "AutomationFieldOperator",
  );
  await expect(firstRow.locator("td").nth(4)).toHaveText("Automation");
  await expect(firstRow.locator("td").nth(15)).toHaveText("Assigned");
  //Verify the ID format and other column Values inside the Latest Record ID.
  await firstRow.getByText(/^OPS-CDU-2\.5-\d+$/).click();

  //Call last function to Verify columns from the Latest ID.
  await groupPage.VerifyIDColumns(expect);
});
