const { test, expect } = require("@playwright/test");
const LoginPage = require("../Pages/LoginPage");
const Shift_Supervisor_InApproval_Flow = require("../Pages/Shift_Supervisor_InApproval_Flow");

test("Shift Supervisor In Approval Flow Working or not ? ", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const ShiftSupervisorInApprovalFlow = new Shift_Supervisor_InApproval_Flow(
    page,
  );

  // Open URL
  await loginPage.goto("http://4.213.96.168:5713/");

  // Server Config
  await loginPage.configureServer("52.140.56.11");
  // Login as Admin
  await loginPage.login("Automation", "Automation2026");

  //find out the check listID
  const checklistID =
    await ShiftSupervisorInApprovalFlow.SelecttheChecklistID();

  await ShiftSupervisorInApprovalFlow.clickSendForApproval();

  //Code for Approval window
  await ShiftSupervisorInApprovalFlow.DropdownFunctionality(expect);
  // await page.pause();

  //Here jvascript popup will be Taken Cared.
  await ShiftSupervisorInApprovalFlow.JavascriptPopupSolve();

  console.log("chk value :-" + checklistID);

  // here we validate the checklist for status update.
  await ShiftSupervisorInApprovalFlow.searchChecklistforValidation(
    checklistID,
    expect,
  );

  await loginPage.logout();
});
