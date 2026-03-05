class Shift_Supervisor_InApproval_Flow {
  constructor(page) {
    this.page = page;

    this.SendForApproval = page.getByRole("button", {
      name: "Send for Approval",
    });
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

  this.SearchInputBar = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[5]/div[1]/div[1]/div[1]/input',
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

        //store checklist ID
        this.checklistID = await latestRow.locator("td").nth(1).innerText();

        console.log("Selected Checklist:", this.checklistID);

        await latestRow.locator("td").nth(1).click();

        return this.checklistID; // ✅ RETURN ID
      }

      const nextButton = this.page.getByRole("button", { name: ">" });

      if (await nextButton.isDisabled()) throw new Error("Checklist not found");

      await nextButton.click();
      await this.page.waitForLoadState("networkidle");
    }
  }

//--------------------------------------------------------------------
  async clickSendForApproval() {
   await this.page.waitForTimeout(4000);
    // ✅ Click Send For Approval and wait popup/dialog load
    await Promise.all([
      this.page.getByRole("heading", { name: /Send for Approval/i }).waitFor(),
      this.SendForApproval.click(),
    ]);
  }
  //---------------------------------------------------------
  async DropdownFunctionality(expect) {
    await this.page.waitForTimeout(2000);
    await this.page.waitForLoadState("networkidle");

    // wait dialog visible
    await expect(this.dropdown).toBeVisible();

    // wait dropdown attached & enabled
    await this.dropdown.waitFor({ state: "visible" });

    // get options count
    const options = await this.dropdown.locator("option").count();

    console.log("Dropdown options count:", options);

    // handle empty dropdown case
    if (options <= 1) {
      throw new Error("No Foreman available in dropdown");
    }

    // select second option
    await this.dropdown.selectOption({ index: 1 });

    // fill comments
    await this.CommentBox.fill("Approved by Supervisor");

    // click submit
    await Promise.all([
      this.page.waitForLoadState("networkidle"),
      this.SendforApprovalButton.click(),
    ]);
  }

  //------------------------------------------------------------
  async JavascriptPopupSolve() {
    this.page.once("dialog", async (dialog) => {
      await dialog.accept();
    });
  }
  //----------------------------------------------------------------------
  
  async searchChecklistforValidation(checklistID,expect) {

  await this.SearchInputBar.waitFor({ state: "visible" });

  const rawValue = checklistID;

  const checklistIDNew = rawValue.split('\n')[0].trim();

  await this.SearchInputBar.fill(checklistIDNew);

  // press Enter if search triggers on Enter
  await this.SearchInputBar.press("Enter");

   // Wait table to refresh
  await this.page.waitForLoadState("networkidle");

  //Filter by Checklist ID and Status
  const row = this.page
    .locator("table tbody tr")
    .filter({ hasText: checklistIDNew })
    .filter({ hasText: "In Approval" });

  await row.first().waitFor({ state: "visible" });

  // Get 15th column status
  const statusCell = row.first().locator("td").nth(15);

  // Assertion
  await expect(statusCell).toHaveText("In Approval");
}
}

module.exports = Shift_Supervisor_InApproval_Flow;
