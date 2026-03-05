class AutomationFieldOperation_Add_Finding_Flow {
  constructor(page) {
    this.page = page;

    this.UploadBtn = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[2]/div[2]/div/div[3]/div[4]/div/div/div/button[1]/span'
    );
 this.UploadBtnPhoto = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[2]/div[2]/div/div[3]/div[4]/div/div[2]/div/button[2]/span'
    );
this.PhotoNextbtn = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[2]/div[2]/div/div[3]/div[4]/div/div[3]/div/div/button[1]/div[2]/div[2]'
    );

    this.VideoBtn = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[2]/div[2]/div/div[3]/div[4]/div/div[2]/div/button[3]/span'
    );

 this.VideoBtnNext = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[2]/div[2]/div/div[3]/div[4]/div/div[3]/div/div/button[1]/div[2]/div[2]'
    );

    this.AudioBtn = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[2]/div[2]/div/div[3]/div[4]/div/div[2]/div/button[4]/span'
    );

    this.AudioBtnNext = page.locator(
      'xpath=//*[@id="root"]/div/div/div/main/div/div[2]/div[2]/div[2]/div/div[3]/div[4]/div/div[3]/div/div/button[1]/div[2]/div[2]'
    );
  }


async UploadFunctionality() {

  const [fileChooser] = await Promise.all([
    this.page.waitForEvent('filechooser'),
    this.UploadBtn.click(),
  ]);

  await fileChooser.setFiles(
    'C:/Users/HASHIR/Pictures/Screenshots/Configuration Attribute.png'
  );
}
async UploadBtnPhotoFunction(){
  const [fileChooser] = await Promise.all([
    this.page.waitForEvent('filechooser'),
    this.UploadBtnPhoto.click(),
     this.PhotoNextbtn.click(),
  ]);

  await fileChooser.setFiles(
    'C:/Users/HASHIR/Pictures/Screenshots/dependency constraint for castrol lube and duke 390 sticker is enabled.png'
  );
}

async UploadVideoFunction(){
  const [fileChooser] = await Promise.all([
    this.page.waitForEvent('filechooser'),
    this.VideoBtn.click(),
     this.VideoBtnNext.click(),
  ]);

  await fileChooser.setFiles(
    'C:/Users/HASHIR/Videos/Screen Recordings/Video.Test.mp4'
  );
}

async AudioUplaodFunctionality() {

  const [fileChooser] = await Promise.all([
    this.page.waitForEvent('filechooser'),
    this.AudioBtn.click(),
    this.AudioBtnNext.click(),
  ]);

  await fileChooser.setFiles(
    'C:/Users/HASHIR/Music/freesound_community-54321-35890.mp3'
  );
}
}

module.exports = AutomationFieldOperation_Add_Finding_Flow;