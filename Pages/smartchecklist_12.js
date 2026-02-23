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
  }

  // ========== ACTIONS ==========

  async AutomationUserFunctions() {
    await this.ChecklistClick.click();
    await this.OperationsClick.click();
    await this.CDUClick.click();
    await this.RoundChecklistoptionClick.click();
    await this.OutsidereadingOptionClick.click();
  }
}

module.exports = smartchecklist_12;
