class smartchecklist_operation_foreman {
  constructor(page) {
    this.page = page;

    // ========== LOCATORS ==========

    // Click on the particular ID which is OPS-CDU-3.2-0030
    this.IdClick0030 = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[5]/div[2]/table/tbody/tr[3]/td[2]/div[1]',
    );

    //Click on Approve and Close from the selectedID OPS-CDU-3.2-0030
    this.ApproveandCloseButton = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[5]/button[2]',
    );

    this.ClosedStatus = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[1]/div[2]/div[1]/table[1]/tbody/tr[6]/td[2]/div/span',
    );
  }

  //------------------Actions------------------------------

  async ForemanFunctionality() {
    await this.IdClick0030.click();
    await this.ApproveandCloseButton.click();
    //javascript dialog box click ok
    await this.page.once("dialog", async (dialog) => {
      await this.dialog.accept(); // Clicks OK
    });
    await this.IdClick0030.click();
    //Assert that the Closed Status is updated or not.
    await expect(ClosedStatus).toHaveText("Closed");
  }
}
module.exports = smartchecklist_operation_foreman;
