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

   // get rows matching Automation Field Operator
  const filteredRows = page.locator("table tbody tr", {
  hasText: "Automation Field Operator",
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

  




});