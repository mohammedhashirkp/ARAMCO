const { test, expect } = require("@playwright/test");
const LoginPage = require("../Pages/LoginPage");
const AutomationFieldOperation_Add_Finding_Flow = require("../Pages/AutomationFieldOperation_Add_Finding_Flow");

test("Automation Field Operation Add Finding Flow Working or not ? ", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const AutomationFieldOperationAddFinding =
    new AutomationFieldOperation_Add_Finding_Flow(page);

  // Open URL
  await loginPage.goto("http://4.213.96.168:5713/");

  // Server Config
  await loginPage.configureServer("52.140.56.11");
  // Login as Admin
  await loginPage.login("AutomationFieldOperator", "Automation2026");

  // Wait until DOM is fully loaded--------------------------------------------------
  await page.waitForLoadState("domcontentloaded");

  // click refresh to load data
  await page.getByRole("button", { name: "Refresh" }).click();
  //---------------------------------------------------------------------------------

  // get rows matching Automation Field Operator
  const filteredRows = page.locator("table tbody tr", {
    hasText:  /Automation\s*Field\s*Operator/i,
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
  // Uplod Button and adding image.
  await AutomationFieldOperationAddFinding.UploadFunctionality();

  //UploadingPhoto
  await AutomationFieldOperationAddFinding.UploadBtnPhotoFunction();

  //Uploading Vidoe
  await AutomationFieldOperationAddFinding.UploadVideoFunction();

  //Aploading Audio File

  await AutomationFieldOperationAddFinding.AudioUplaodFunctionality();

  //Functionality related to New findings.
  await AutomationFieldOperationAddFinding.NewFindingsFunctionality();

  // Findings Photo Upload
  await AutomationFieldOperationAddFinding.UploadBtnPhotoFunctionFindings();

  //Findings Video Uplaod
  await AutomationFieldOperationAddFinding.UploadBtnVideoFunctionFindings();

  // signature

  await AutomationFieldOperationAddFinding.addSignature();

  await AutomationFieldOperationAddFinding.NextStepFunctions();

  await page.pause();

  //-------------------------------test this block-----------------Till this all working_good------------------

  //check the same ID Status is correct or not
  const row = page.locator("table tbody tr", {
    has: page.locator("td", { hasText: latestIdnew }),
  });

   await expect(row.locator("td").nth(15)).toHaveText(
    "Assigned with findings",
  );
  //await expect(row).toContainText("Assigned with findings");

  //Go to the Same ID

  const IDrow = page.locator("table tbody tr", {
    has: page.locator("td", { hasText: latestIdnew }),
  });

  IDrow.click();

  //click on send for review
  await AutomationFieldOperationAddFinding.FinalReviewButtn();

  //find the same IDand check the status Colomn
  const SameID = page.locator("table tbody tr", {
    has: page.locator("td", { hasText: latestIdnew }),
  });

  await expect(SameID.locator("td").nth(15)).toHaveText(
    "In Review with findings",
  );

  await page.pause();

  //logout the User
  await loginPage.logout();
});
