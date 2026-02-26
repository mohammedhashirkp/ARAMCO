const { test, expect } = require("@playwright/test");
const LoginPage = require("../Pages/LoginPage");
const smartchecklist_12 = require("../Pages/smartchecklist_12");

test("Validate the Automation User Basic Login and  Logout is Working? ", async ({
  page,
}) => {
  const loginpage = new LoginPage(page);
  // Open URL
  await loginpage.goto("http://4.213.96.168:5713/");

  // Server Configuration
  await loginpage.configureServer("52.140.56.11");

  // Login as Automation User
  await loginpage.login("Automation", "Automation2026");

  // Now logout from Automation User
  await loginpage.logout();
});
//------------------------- 1 st part Completed log out from Automation User ----------------------------------//
test("Validate the Automation Field Operator Basic Login and  Logout is Working? ", async ({
  page,
}) => {
  const loginpage = new LoginPage(page);
  // Open URL
  await loginpage.goto("http://4.213.96.168:5713/");
  // Server Configuration
  await loginpage.configureServer("52.140.56.11");

  // Login as Automation Field Operator User
  await loginpage.login("AutomationFieldOperator", "Automation2026");

  // Now logout from Automation Field Operator User
  await loginpage.logout();
});
//----------------------2 nd part completed log out from Automation Field Operator User------------------//
test("Validate the Shift Supervisor User with chceklist,Operations,CDU Functions is Working? ", async ({
  page,
}) => {
  const loginpage = new LoginPage(page);
  const SmartChecklist123 = new smartchecklist_12(page);
  // Open URL
  await loginpage.goto("http://4.213.96.168:5713/");
  // Server Configuration
  await loginpage.configureServer("52.140.56.11");

  // Login as Automation User
  await loginpage.login("Automation", "Automation2026");

  // Do the Functionalities from Shift Supervisor like--- chceklist,Operations,CDu etc.
  await SmartChecklist123.AutomationUserFunctions();

  // Now logout from Automation User
  await loginpage.logout();
});
//------------------------3rd Part Completed Log out from Shift Supervisor User---------------------------//
test("Validate the Field Operator User with Report Findins Functions is Working as Expeced or Not? ", async ({
  page,
}) => {
  const loginPages = new LoginPage(page);
  const SmartChecklist123 = new smartchecklist_12(page);
  // Open URL
  await loginPages.goto("http://4.213.96.168:5713/");
  // Server Configuration
  await loginPages.configureServer("52.140.56.11");

  // Login as  Field Operator User
  await loginPages.login("AutomationFieldOperator", "Automation2026");

  // need to fix the errors for two methods below----$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  //click on the OPS-CDU-3.2-0057 ID and do the other functionalities like report finding etc.
  await SmartChecklist123.ReportFindingSteps();

  //create New Findings Functionalities.
  await SmartChecklist123.NewFindingsWindow();

  //-----------------$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ need to fix between this codes.

  // Now logout from Automation User
  await loginPages.logout();

  //-------------------4th Session Completed coding need to fix issue here---------------------------------------------
});

test("Validate the Shift SupervisorUser is Working as Expeced or Not? ", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  // Open URL
  await loginPage.goto("http://4.213.96.168:5713/");

  // Server Configuration
  await loginPage.configureServer("52.140.56.11");

  // Login as Automation User
  await loginPage.login("Automation", "Automation2026");

  // Now logout from Automation User
  await loginPage.logout();
});
//=================================5th session completed==============================================================
test("Validate the Automation Operator Foreman is Working as Expeced or Not? ", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  // Open URL
  await loginPage.goto("http://4.213.96.168:5713/");

  // Server Configuration
  await loginPage.configureServer("52.140.56.11");

  // Login as Automation User
  await loginPage.login("AutomationOperationForeman", "Automation2026");

  // Now logout from Automation User
  await loginPage.logout();
});
//--------------------------------6th Session Completed---------------------------------------------------------

test("Validate the Shift Supervisor is Working as Expeced or Not? ", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const SmartChecklist123 = new smartchecklist_12(page);
  // Open URL
  await loginPage.goto("http://4.213.96.168:5713/");

  // Server Configuration
  await loginPage.configureServer("52.140.56.11");

  // Login as Automation User
  await loginPage.login("Automation", "Automation2026");

  //Shift Supervisor Functioanlities in this Method.
  await SmartChecklist123.ShiftSupervisorFunctions();


  //------------------$$$$$$$$$$$$$$$$$$$$$$$$$$ Here Small 3 to 5 lines code is missing i Guess need to do Final Review over here
  //to confirm its complete or no---$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4

 // Now logout from Shift Supervisor User
  await loginPage.logout();
});
//----------------------------------------------------------7th completed------------------------------------------

test("Validate the Automation Operator Foreman with Functionalities  is Working..!!!! ", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const SmartChecklist123 = new smartchecklist_12(page);
  // Open URL
  await loginPage.goto("http://4.213.96.168:5713/");

  // Server Configuration
  await loginPage.configureServer("52.140.56.11");

  // Login as Automation User
  await loginPage.login("AutomationOperationForeman", "Automation2026");

  //Automation Operator foreman Functioanlities
  await SmartChecklist123.AutomationOperationFormanFunctionalities();

  //&&&&&&&&&&&&&&&&& Need to Add 3 Scenarios Here and then this Block Is completed----$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

  // automation  Operator Foremen Log out Function
  await loginPage.logout();

});
//--------------------------------------------8th completed------------------------------------------------------------
test("Validate the Automation Field Operator User with other Final functions is Working or Not? ", async ({
  page,
}) => {
  const loginPages = new LoginPage(page);
  const SmartChecklist123 = new smartchecklist_12(page);
  // Open URL
  await loginPages.goto("http://4.213.96.168:5713/");
  // Server Configuration
  await loginPages.configureServer("52.140.56.11");

  // Login as  Field Operator User
  await loginPages.login("AutomationFieldOperator", "Automation2026");

  // Check the Other Functionalities last sessionof the Scenario 3---------
  await SmartChecklist123.SettngsDashboardFunctionsLastSection();

  //Final Logout for Automation Field Operator
  await loginPages.logout();

});
//---------------------------------Completed Last Session Scenario ------------------------------------------