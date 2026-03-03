class SmartChecklistFieldOperatorPage {
  constructor(page) {
    this.page = page;

    // ========================== LOCATORS ====================================

    this.SubmitButton = page.locator(
      '//*[@id="root"]/div/div/div/main/div/div[2]/div[5]/button[3]',
    );

    this.ClickOK = page.getByRole("button", { name: "OK" });
    this.inReviewStatus = this.page.getByText("In Review").first();
    this.automationFieldOperator = this.page
      .getByText("Automation Field Operator")
      .first();

    this.profileIcon = page.locator(
      "//div[@class='w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center shadow-md ring-1 ring-slate-700']",
    );
    this.logoutBtn = page.locator(
      '//*[@id="root"]/div/div/div/header/div/div[3]/div[3]/div/button',
    );
  }

  //------------------------- ACTIONS--------------------------------

  async FindtheLatestChekclistIDCreatedByMe() {}

  async SubmitLatestChecklistID() {
    await this.SubmitButton.click();
    await this.ClickOK.click();
  }

  async verifyChecklistDetails() {
    await expect(this.inReviewStatus).toBeVisible();
    await expect(this.automationFieldOperator).toBeVisible();
  }

  async logout() {
    await this.profileIcon.click();
    await this.logoutBtn.click();
  }
}
module.exports = SmartChecklistFieldOperatorPage;
