class Shift_Supervisor_Scenario {
  constructor(page) {
    this.page = page;

    // LOCATORS
    this.ChecklistButton = page.locator(
      '//*[@id="root"]/div/div/aside/nav/div/button/div/span',
    );
    this.OperationMenu = page.locator(
      '//*[@id="root"]/div/div/aside/nav/div/div/div[1]/button/span',
    );
    this.CDUClick = page.locator(
      '//*[@id="root"]/div/div/aside/nav/div/div/div[1]/div/div[1]/button/span',
    );
    this.NextOptButton2_0 = page.locator(
      'xpath=//*[@id="root"]/div/div/aside/nav/div/div/div[1]/div/div[1]/div/div[2]/button/span',
    );
    this.NextButton2_5 = page.locator(
      'xpath=//*[@id="root"]/div/div/aside/nav/div/div/div[1]/div/div[1]/div/div[2]/div/button[5]/span[2]',
    );

    this.AssignChecklistButton = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/button/span',
    );

    this.dropdown = page.locator(
      '//*[@id="root"]/div/div/div/main/div/div[3]/div/div[2]/div/select',
    );
    this.saveButton = page.locator(
      '//*[@id="root"]/div/div/div/main/div/div[3]/div/div[3]/button[2]',
    );

    // this.nameCell = page.locator(
    //   'xpath=//*[@id="root"]/div/div/div/main/div/div[5]/div[2]/table/tbody/tr[1]/td[4]',
    // );
    // this.adminCell = page.locator(
    //   'xpath=//*[@id="root"]/div/div/div/main/div/div[5]/div[2]/table/tbody/tr[1]/td[5]',
    // );
    // this.statusCell = page.locator(
    //   "xpath=/html/body/div/div/div/div/main/div/div[5]/div[2]/table/tbody/tr[1]/td[16]/span",
    // );

    this.IDStatus = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[1]/div[2]/div/table[1]/tbody/tr[6]/td[2]/div/span',
    );

    this.ChecklistName = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[1]/div[2]/div/table[1]/tbody/tr[5]/td[2]/input',
    );

    this.AuditorName = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[1]/div[2]/div/table[2]/tbody/tr[1]/td[2]',
    );

    this.Category = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[1]/div[2]/div/table[2]/tbody/tr[3]/td[2]',
    );
  }

  // ACTIONS
  async navigateToChecklist() {
    await this.ChecklistButton.click();
  }

  async navigateToGroup() {
    await this.OperationMenu.click();
    await this.CDUClick.click();
  }

async createAssignment(expect) {

  await this.NextOptButton2_0.click();
  await this.NextButton2_5.click();
  
  await this.AssignChecklistButton.click();

  await expect(this.dropdown).toBeVisible();
//-----------------

// await this.page.waitForLoadState("networkidle");

// await expect(this.dropdown).toBeVisible();

// const options = await this.dropdown.locator("option").allTextContents();
// console.log(options);

//--------
  
  // wait until option is available
  // await this.dropdown.locator("option[value='AutomationFieldOperator']")
  //   .waitFor({ state: "attached" });

await this.dropdown.selectOption('AutomationFieldOperator');

  await this.saveButton.click();
}

  // async verifyAssignment(expect) {
  //   await expect(this.nameCell).toHaveText("Automation Field Operator");
  //   await expect(this.adminCell).toHaveText("Automation");
  //   await expect(this.statusCell).toHaveText("Assigned");
  // }

  async VerifyIDColumns(expect) {
    await expect(this.IDStatus).toHaveText("Assigned");
    await expect(this.ChecklistName).toHaveValue(/2\.5\s*Post\s*Indicators/i);
    //Match for Automation and Autmation Testing
     await expect(this.AuditorName).toContainText("Automation");
    await expect(this.Category).toHaveText("Operations");
  }
}

module.exports = Shift_Supervisor_Scenario;
