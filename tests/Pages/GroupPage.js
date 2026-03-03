class GroupPage {
  constructor(page) {
    this.page = page;

    // LOCATORS
    this.ChecklistButton = page.locator(
      '//*[@id="root"]/div/div/aside/nav/div/button/div/span',
    );
    this.OperationMenu = page.locator(
      '//*[@id="root"]/div/div/aside/nav/div/div/div[1]/button/span',
    );
    this.subGroupButton = page.locator(
      '//*[@id="root"]/div/div/aside/nav/div/div/div[1]/div/div[1]/button/span',
    );
    this.NextOptButton = page.locator(
      '//*[@id="root"]/div/div/aside/nav/div/div/div[1]/div/div[1]/div/div[3]/button/span',
    );
    this.NextButton = page.locator(
      '//*[@id="root"]/div/div/aside/nav/div/div/div[1]/div/div[1]/div/div[3]/div/button[2]/span[2]',
    );

    this.createButton = page.locator(
      '//*[@id="root"]/div/div/div/main/div/div[2]/button',
    );

    this.dropdown = page.locator(
      '//*[@id="root"]/div/div/div/main/div/div[3]/div/div[2]/div/select',
    );
    this.saveButton = page.locator(
      '//*[@id="root"]/div/div/div/main/div/div[3]/div/div[3]/button[2]',
    );

    this.nameCell = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[5]/div[2]/table/tbody/tr[1]/td[4]',
    );
    this.adminCell = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[5]/div[2]/table/tbody/tr[1]/td[5]',
    );
    this.statusCell = page.locator(
      "xpath=/html/body/div/div/div/div/main/div/div[5]/div[2]/table/tbody/tr[1]/td[16]/span",
      
    );
  }

  // ACTIONS
  async navigateToChecklist() {
    await this.ChecklistButton.click();
  }

  
  async navigateToGroup() {
  
    await this.OperationMenu.click();
    await this.subGroupButton.click();
    
  }

  async createAssignment() {
    await this.NextOptButton.click();
    await this.NextButton.click();
     await this.createButton.click();
    await this.dropdown.click();
    await this.page.keyboard.press("ArrowDown");
    await this.page.keyboard.press("Enter");
    await this.saveButton.click();
  }

  async verifyAssignment(expect) {
    await expect(this.nameCell).toHaveText("AutomationFieldOperator");
    await expect(this.adminCell).toHaveText("Automation");
    await expect(this.statusCell).toHaveText("Assigned");
  }
}

module.exports = GroupPage;
