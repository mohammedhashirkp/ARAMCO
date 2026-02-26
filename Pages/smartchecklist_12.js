class smartchecklist_12 {
  constructor(page) {
    this.page = page;

    // ========== LOCATORS ==========
    this.ChecklistClick = page.locator(
      '//*[@id="root"]/div/div/aside/nav/div/button/div/span',
    );
    this.OperationsClick = page.locator(
      '//*[@id="root"]/div/div/aside/nav/div/div/div[1]/button/span',
    );
    this.CDUClick = page.locator(
      '//*[@id="root"]/div/div/aside/nav/div/div/div[1]/div/div[1]/button/span',
    );

    this.RoundChecklistoptionClick = page.locator(
      '//*[@id="root"]/div/div/aside/nav/div/div/div[1]/div/div[1]/div/div[3]/button/span',
    );

    this.OutsidereadingOptionClick = page.locator(
      '//*[@id="root"]/div/div/aside/nav/div/div/div[1]/div/div[1]/div/div[3]/div/button[2]/span[2]',
    );

    this.ClickonOPS_CDU_0057 = page.locator(
      '//*[@id="root"]/div/div/div/main/div/div[5]/div[2]/table/tbody/tr[7]/td[2]/div[1]',
    );

    this.ClickonReportFinding = page.locator(
      '//*[@id="root"]/div/div/div/main/div/div[2]/div[2]/div[2]/div/div[3]/div[2]/table/tbody/tr[1]/td[2]/button/svg/path[1]',
    );

    this.ClickonDropdown = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[2]/div[2]/div[2]/div/div[3]/div/select',
    );

    this.CreateNewFindngs = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[2]/div[2]/div[2]/div/div[4]/div[1]/button',
    );

    this.DescriptionClick = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[2]/div[2]/div[2]/div/div[4]/div[2]/textarea',
    );

    this.ClickonMedium = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[2]/div[2]/div[2]/div/div[4]/div[3]/div/button[2]',
    );

    this.RaiseFunding = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[2]/div[2]/div[2]/div/div[4]/div[6]/button/svg/path',
    );
    this.SubmitButton = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[5]/button[3]',
    );

    this.TableSearch = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[5]/div[1]/div[1]/div[1]/input',
    );

    this.send_for_Approval = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[5]/div[2]/table/tbody/tr[1]/td[2]/div[1]',
    );

    this.send = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[5]/button[4]',
    );

    this.Select_foreman_Option = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[7]/div/div[1]/div[1]/select',
    );

    // enter the description for this window
    let DesVar2 = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[7]/div/div[1]/div[2]/textarea',
    );

    // click on send for Approval.
    this.SendApproval = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[7]/div/div[2]/button[2]',
    );

    this.Search = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[5]/div[1]/div[1]/div[1]/input',
    );
    this.SCHButton = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[5]/div[2]/table/tbody/tr[2]/td[2]/div[1]',
    );

    // Select status in approval IDs and lets do this scenario.
    this.Btn1 = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[5]/div[2]/table/tbody/tr[5]/td[2]/div[1]',
    );

    // Click on the button Approve and close
    this.ApprvandClose = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[5]/button[2]',
    );

    this.AutoMFunctSearchBar = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[5]/div[1]/div[1]/div[1]/input',
    );

    this.NewBttn = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[5]/div[2]/table/tbody/tr[1]/td[2]/div[1]',
    );

    // click on settings
    this.Settings = page.locator(
      'xpath=//*[@id="root"]/div/div/aside/nav/a[4]/span',
    );

    //click on Dashboard
    this.Dashboard = page.locator(
      'xpath=//*[@id="root"]/div/div/aside/nav/a[1]/span',
    );

    // Click on findings

    this.Findings = page.locator(
      'xpath=//*[@id="root"]/div/div/aside/nav/a[3]/span',
    );

    // click on Chcklist
    this.Checklist = page.locator(
      'xpath=//*[@id="root"]/div/div/aside/nav/div/button/div/span',
    );
  }

  // ========== ACTIONS ==========

  async AutomationUserFunctions() {
    await this.ChecklistClick.click();
    await this.OperationsClick.click();
    await this.CDUClick.click();
    await this.RoundChecklistoptionClick.click();
    await this.OutsidereadingOptionClick.click();
  }

  async ReportFindingSteps() {
    await this.ClickonOPS_CDU_0057.click();
    await this.ClickonReportFinding.click();
    await this.ClickonDropdown.click();
    await this.page.keyboard.press("ArrowDown");
    await this.page.keyboard.press("Enter");
  }

  async NewFindingsWindow() {
    await this.DescriptionClick.click();
    await this.DescriptionClick.fill("Hello");
    await this.ClickonMedium.click();
    await this.RaiseFunding.click();
    await this.SubmitButton.click();
  }

  async ShiftSupervisorFunctions() {
    await this.TableSearch.hover();
    await this.TableSearch.fill("OPS-CDU-3.2-0053");
    await this.TableSearch.press("Enter");
    await this.send_for_Approval.click();
    await this.send.click();
    await this.Select_foreman_Option.click();

    // Lets select the option
    await this.page.keyboard.press("ArrowDown");
    await this.page.keyboard.press("Enter");

    await this.DesVar2.fill("Testin/Approval");
    await this.SendApproval.click();

    //javascript dialog box click ok
    await this.page.once("dialog", async (dialog) => {
      await this.dialog.accept(); // Clicks OK
    });
  }

  //Foreman Functionalities Method.
  async AutomationOperationFormanFunctionalities() {
    await this.Search.fill("ops-cdu-3.2-0001");
    await this.locator.press("Enter");
    await this.SCHButton.click();
    await this.Btn1.click();
    await this.ApprvandClose.click();

    //close the popup by clicking ok
    await this.page.once("dialog", async (dialog) => {
      await this.dialog.accept(); // Clicks OK
    });
  }

  async AutomtionOperatorUserFunctionality() {
    await this.AutoMFunctSearchBar.fill("ops-cdu-3.2-0001");
    await this.AutoMFunctSearchBar.press("Enter");
    await this.NewBttn.click();
  }

  async SettngsDashboardFunctionsLastSection() {
    await this.Settings.click();
    await this.Dashboard.click();
    await this.Findings.clcik();
    await this.Dashboard.click();
    await this.Settings.click();
    await this.Checklist.click();
    await this.Dashboard.click();
    await this.Dashboard.click();
  }
}

module.exports = smartchecklist_12;
