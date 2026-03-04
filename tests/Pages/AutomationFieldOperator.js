class AutomationFieldOperator {
  constructor(page) {
    this.page = page;

    this.SendforReview = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[5]/button[3]'
    );
  }

  async SubmitFunctionalities() {
  await this.SendforReview.click();
    this.page.once('dialog', async (dialog) => {
      await dialog.accept();
    });
  }
}

module.exports = AutomationFieldOperator;