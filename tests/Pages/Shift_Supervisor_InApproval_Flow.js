class Shift_Supervisor_InApproval_Flow {
  constructor(page) {
    this.page = page;

    this.SendForApproval = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[5]/button[5]/svg',
    );
    //click on the dropdown
    this.dropdown = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[7]/div/div[1]/div[1]/select',
    );
    //Add Comments in the dialog box
    this.CommentBox = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[7]/div/div[1]/div[2]/textarea',
    );
    //click on Send for Approval Button
    this.SendforApprovalButton = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[7]/div/div[2]/button[2]',
    );
  }

  async SelecttheChecklistID() {
    while (true) {
      const rows = this.page
        .locator("table tbody tr")
        .filter({ hasText: "Supervisor" })
        .filter({ hasText: "In Review" });

      const count = await rows.count();

      if (count > 0) {
        const latestRow = rows.last();

        // ✅ store checklist ID
        this.checklistID = await latestRow.locator("td").nth(1).innerText();

        console.log("Selected Checklist:", this.checklistID);

        await latestRow.locator("td").nth(1).click();

        break;
      }

      const nextButton = this.page.getByRole("button", { name: ">" });

      if (await nextButton.isDisabled()) throw new Error("Checklist not found");

      await nextButton.click();
      await this.page.waitForLoadState("networkidle");
    }
  }

  async DropdownFunctionality(expect) {
    await expect(this.dropdown).toBeVisible();
    await this.page.dropdown.click();
    await this.dropdown.selectOption("Automation  Operation foreman");
    await this.CommentBox.click();

    await commentBox.fill("Approved by Supervisor");
    await SendforApprovalButton.click();
  }

  async JavascriptPopupSolve() {
    await this.SendforReview.click();
    this.page.once("dialog", async (dialog) => {
      await dialog.accept();
    });
  }

  async validateChecklistStatus(expectedStatus) {
    while (true) {
      // ✅ find row using stored checklist ID
      const row = this.page
        .locator("table tbody tr")
        .filter({ hasText: this.checklistID });

      if ((await row.count()) > 0) {
        // ✅ validate status column
        await expect(
          row.locator("td").nth(4), // status column
        ).toHaveText(expectedStatus);

        console.log("Status validated successfully");
        break;
      }

      const nextButton = this.page.getByRole("button", { name: ">" });

      if (await nextButton.isDisabled())
        throw new Error("Checklist not found on dashboard");

      await nextButton.click();
      await this.page.waitForLoadState("networkidle");
    }
  }
}

module.exports = Shift_Supervisor_InApproval_Flow;
