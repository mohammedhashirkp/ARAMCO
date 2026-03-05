const { expect } = require("@playwright/test");
class AutomationFieldOperation_Add_Finding_Flow {
  constructor(page) {
    this.page = page;

    this.UploadBtn = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[2]/div[2]/div/div[3]/div[4]/div/div/div/button[1]/span',
    );
    this.UploadBtnPhoto = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[2]/div[2]/div/div[3]/div[4]/div/div[2]/div/button[2]/span',
    );
    this.PhotoNextbtn = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[2]/div[2]/div/div[3]/div[4]/div/div[3]/div/div/button[1]/div[2]/div[2]',
    );

    this.VideoBtn = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[2]/div[2]/div/div[3]/div[4]/div/div[2]/div/button[3]/span',
    );

    this.VideoBtnNext = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[2]/div[2]/div/div[3]/div[4]/div/div[3]/div/div/button[1]/div[2]/div[2]',
    );

    this.AudioBtn = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[2]/div[2]/div/div[3]/div[4]/div/div[2]/div/button[4]/span',
    );

    this.AudioBtnNext = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[2]/div[2]/div/div[3]/div[4]/div/div[3]/div/div/button[1]/div[2]/div[2]',
    );

    // this.NewFindings = page.locator(
    //   'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[3]/div[1]/div[1]/button]',
    // );

    this.ClickonDropdownSeverity = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[3]/div[1]/div[2]/div/div/div[1]/div[1]/select[1]',
    );

    this.AudioBtnNext = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[2]/div[2]/div/div[3]/div[4]/div/div[3]/div/div/button[1]/div[2]/div[2]',
    );
    this.OpenFindingdDropdown = page.locator(
      'xpath= //*[@id="root"]/div/div/div/main/div/div[2]/div[3]/div[1]/div[2]/div/div/div[1]/div[1]/select[2]',
    );

    this.TextAreaNewFindings = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[3]/div[1]/div[2]/div/div/textarea',
    );

    this.RaisedBy = page.locator(
      'xpath= //*[@id="root"]/div/div/div/main/div/div[2]/div[3]/div[1]/div[2]/div/div/div[2]/div[3]/input',
    );

    this.ImageuploadFindins = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[3]/div[1]/div[2]/div/div/div[3]/button[1]/span',
    );

    this.ImageuploadFindinsNext = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[3]/div[1]/div[2]/div/div/div[4]/div/div/button[1]',
    );

    this.VideouploadFindins = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[3]/div[1]/div[2]/div/div/div[3]/button[2]/span',
    );

    this.VideouploadFindinsNext = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[3]/div[1]/div[2]/div/div/div[5]/div/div/button[1]/div[2]/div[2]',
    );
 this.SignatureClick = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[3]/div[1]/div[2]/div/div/div[3]/button[4]/span',
    );

this.Signaturedraw = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[3]/div[1]/div[2]/div/div/div[4]/div[2]/canvas',
    );
    //*[@id="root"]/div/div/div/main/div/div[2]/div[3]/div[1]/div[2]/div/div/div[4]/div[2]/canvas

    // Audio Button is not clickable so commented thoscodes
    //  this.AudiouploadFindins = page.locator(
    //   'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[3]/div[1]/div[2]/div/div/div[3]/button[3]/span',
    // );

    //      this.AudiouploadFindinsNext = page.locator(
    //   'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[3]/div[1]/div[2]/div/div/div[4]/div/div/button[1]/div[2]/div[2]',
    // );
  }

  async UploadFunctionality() {
    const [fileChooser] = await Promise.all([
      this.page.waitForEvent("filechooser"),
      this.UploadBtn.click(),
    ]);

    await fileChooser.setFiles(
      "C:/Users/HASHIR/Pictures/Screenshots/Configuration Attribute.png",
    );
  }
  async UploadBtnPhotoFunction() {
    const [fileChooser] = await Promise.all([
      this.page.waitForEvent("filechooser"),
      this.UploadBtnPhoto.click(),
      this.PhotoNextbtn.click(),
    ]);

    await fileChooser.setFiles(
      "C:/Users/HASHIR/Pictures/Screenshots/dependency constraint for castrol lube and duke 390 sticker is enabled.png",
    );
  }

  async UploadVideoFunction() {
    const [fileChooser] = await Promise.all([
      this.page.waitForEvent("filechooser"),
      this.VideoBtn.click(),
      this.VideoBtnNext.click(),
    ]);

    await fileChooser.setFiles(
      "C:/Users/HASHIR/Videos/Screen Recordings/Video.Test.mp4",
    );
  }

  async AudioUplaodFunctionality() {
    const [fileChooser] = await Promise.all([
      this.page.waitForEvent("filechooser"),
      this.AudioBtn.click(),
      this.AudioBtnNext.click(),
    ]);

    await fileChooser.setFiles(
      "C:/Users/HASHIR/Music/freesound_community-54321-35890.mp3",
    );
  }

  async NewFindingsFunctionality() {
    this.newFindingBtn = this.page.getByRole("button", { name: "New Finding" });
    await this.newFindingBtn.click();
    await this.ClickonDropdownSeverity.click();
    await this.ClickonDropdownSeverity.waitFor({ state: "visible" });

    // select first option
    await this.ClickonDropdownSeverity.selectOption({ index: 0 });

    await this.OpenFindingdDropdown.click();
    await this.OpenFindingdDropdown.waitFor({ state: "visible" });

    // select first option
    await this.OpenFindingdDropdown.selectOption({ index: 0 });

    // Enter value in Text area of findings Window.
    await this.TextAreaNewFindings.click();
    await this.TextAreaNewFindings.fill("Approved by Supervisor");

    // Verify the Value is correct or not in raised By.
    await expect(this.RaisedBy).toHaveValue("Automation Field Operator");
  }

  async UploadBtnPhotoFunctionFindings() {
    const [fileChooser] = await Promise.all([
      this.page.waitForEvent("filechooser"),
      this.ImageuploadFindins.click(),
      this.ImageuploadFindinsNext.click(),
    ]);

    await fileChooser.setFiles(
      "C:/Users/HASHIR/Pictures/Screenshots/dependency constraint for castrol lube and duke 390 sticker is enabled.png",
    );
  }

  async UploadBtnVideoFunctionFindings() {
    const [fileChooser] = await Promise.all([
      this.page.waitForEvent("filechooser"),
      this.VideouploadFindins.click(),
      this.VideouploadFindinsNext.click(),
    ]);

    await fileChooser.setFiles(
      "C:/Users/HASHIR/Pictures/Screenshots/dependency constraint for castrol lube and duke 390 sticker is enabled.png",
    );
  }

  // Audio button is not clickable so commented the codes

  //     async UploadBtnAudioFunctionFindings() {
  //   const [fileChooser] = await Promise.all([
  //     this.page.waitForEvent("filechooser"),
  //     this.VideouploadFindins.click(),
  //     this.VideouploadFindinsNext.click(),
  //   ]);

  //   await fileChooser.setFiles(
  //     "C:/Users/HASHIR/Pictures/Screenshots/dependency constraint for castrol lube and duke 390 sticker is enabled.png",
  //   );
  // }



  async addSignature() {

  await this.SignatureClick.click();

 const canvas = page.locator('canvas.w-full.h-32');
  await canvas.waitFor({ state: 'visible' });

  const box = await canvas.boundingBox();

  await page.mouse.move(box.x + 10, box.y + 50);
  await page.mouse.down();

  for (let i = 0; i < 200; i += 10) {
    await page.mouse.move(box.x + 10 + i, box.y + 50 + Math.sin(i / 10) * 20);
  }

  await page.mouse.up();

}
}

module.exports = AutomationFieldOperation_Add_Finding_Flow;
