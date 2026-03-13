const { expect } = require("@playwright/test");
class Returning_Checklist_Scenario {
  constructor(page) {
    this.page = page;

    // ========== LOCATORS ==========
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

    this.Checklist1 = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[2]/div[2]/div/div[3]/div[3]/table/tbody/tr[1]/td[4]/select',
    );

    this.Checklist2 = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[2]/div[2]/div/div[3]/div[3]/table/tbody/tr[2]/td[4]/select',
    );

     this.AddNewFinding = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[7]/div/div[3]/div[1]/button',
    );
  this.DescriptionArea = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[7]/div/div[2]/div[2]/div/div[1]/textarea',
    );

    

    //-------------------------------------End of Shift Supervidor-----------------------------------------
  }

  // ========== ACTIONS ==========

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
    await this.dropdown.selectOption("AutomationFieldOperator");
    await this.saveButton.click();
  }
  //-------------------------------------End of Shift Supervisor-----------------------------------------

  async GetLatestchecklistID() {
    // get rows matching Automation Field Operator
    const filteredRows = this.page.locator("table tbody tr", {
      hasText: /Automation\s*Field\s*Operator/i,
      has: this.page.getByRole("button", { name: "View" }),
    });

    // ensure at least one exists
    await expect(filteredRows.first()).toBeVisible();

    // latest matching row (top row)
    const latestRow = filteredRows.first();
    // get ID text
    const latestId = await latestRow.locator("td").nth(1).innerText();
    // remove newline + extra value
    const latestIdnew = latestId.split("\n")[0].trim();

    console.log("Latest ID:", latestIdnew);

    // click ID
    await latestRow.locator("td").nth(1).click();
  }

async ChecklistSelection() {
  await this.Checklist1.click();
  await this.page.keyboard.press("ArrowDown"); // move to second option
  await this.page.keyboard.press("Enter");

  await this.Checklist2.click();
  await this.page.keyboard.press("ArrowDown"); 
  await this.page.keyboard.press("Enter");
}

async FindingsOption(){

await this.page.locator('svg.lucide-alert-triangle').first().click({ force: true });
await this.AddNewFinding.click();
await this.DescriptionArea.click();
}
}

module.exports = Returning_Checklist_Scenario;
