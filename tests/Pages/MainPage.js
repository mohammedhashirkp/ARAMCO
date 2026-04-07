const { expect } = require("@playwright/test");
class MainPage {
  constructor(page) {
    this.page = page;

    // ========== LOCATORS ==========

    this.CloseMark = page.locator("xpath=/html/body/div[5]/div/span");
    this.TravelButton = page.locator(
      'xpath=//*[@id="container"]/div/div[1]/div/div/div/div/div/div/div/div/div/div[1]/div/div/div[1]/div/div[1]/div/div/div/div/div/div/div/div/div[2]/a/div[1]/div/img',
    );
    this.FlipkartButton = page.locator(
      'xpath=//*[@id="container"]/div/div[1]/div/div/div/div/div/div/div/div/div/div[1]/div/div/div/div/div[1]/div/div/div/div/div/div/div/div/div[1]/a/div[2]/div/img',
    );
    // All three Buttons Flight, Hotels and Buses in travel Page
    this.FlightsButton = page.locator(
      'xpath=//*[@id="slot-list-container"]/div/div[2]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div/div/a/div/picture/img',
    );
    this.HotelsButton = page.locator(
      'xpath=//*[@id="slot-list-container"]/div/div[2]/div/div/div/div/div/div/div/div/div/div/div[2]/div/div/div/a/div/picture/img',
    );
    this.BusesButton = page.locator(
      'xpath=//*[@id="slot-list-container"]/div/div[2]/div/div/div/div/div/div/div/div/div/div/div[3]/div/div/div/a/div/picture/img',
    );

    // Check the Navigation and Verify it for the Home Page

    this.ForYouButton = page.locator(
      'xpath=//*[@id="container"]/div/div[1]/div/div/div/div/div/div/div/div/div/div[1]/div/div/div[3]/div/div/div/div/div/div/div/div[1]/div/div/div/a/div/div/div[2]',
    );
    this.FashionButton = page.locator(
      'xpath=//*[@id="container"]/div/div[1]/div/div/div/div/div/div/div/div/div/div[1]/div/div/div[3]/div/div/div/div/div/div/div/div[2]/div/div/div/a/div/div/div[2]',
    );
    this.MobilesButton = page.locator(
      'xpath=//*[@id="container"]/div/div[1]/div/div/div/div/div/div/div/div/div/div[1]/div/div/div[3]/div/div/div/div/div/div/div/div[3]/div/div/div/a/div/div/div[2]',
    );
    this.BeutyButton = page.locator(
      'xpath=//*[@id="container"]/div/div[1]/div/div/div/div/div/div/div/div/div/div[1]/div/div/div[3]/div/div/div/div/div/div/div/div[4]/div/div/div/a/div/div/div[2]',
    );
    this.ElectronicsButton = page.locator(
      'xpath=//*[@id="container"]/div/div[1]/div/div/div/div/div/div/div/div/div/div[1]/div/div/div[3]/div/div/div/div/div/div/div/div[5]/div/div/div/a/div/div/div[2]',
    );
    this.HomeButton = page.locator(
      'xpath=//*[@id="container"]/div/div[1]/div/div/div/div/div/div/div/div/div/div[1]/div/div/div[3]/div/div/div/div/div/div/div/div[6]/div/div/div/a/div/div/div[2]',
    );
    this.AppliancesButton = page.locator(
      'xpath=//*[@id="container"]/div/div[1]/div/div/div/div/div/div/div/div/div/div[1]/div/div/div[3]/div/div/div/div/div/div/div/div[7]/div/div/div/a/div/div/div[2]',
    );
    this.ToysBabyButton = page.locator(
      'xpath=//*[@id="container"]/div/div[1]/div/div/div/div/div/div/div/div/div/div[1]/div/div/div[3]/div/div/div/div/div/div/div/div[8]/div/div/div/a/div/div/div[2]',
    );
    this.FoodandHealthButton = page.locator(
      'xpath=//*[@id="container"]/div/div[1]/div/div/div/div/div/div/div/div/div/div[1]/div/div/div[3]/div/div/div/div/div/div/div/div[9]/div/div/div/a/div/div/div[2]',
    );
    this.AutoAccessoriesButton = page.locator(
      'xpath=//*[@id="container"]/div/div[1]/div/div/div/div/div/div/div/div/div/div[1]/div/div/div[3]/div/div/div/div/div/div/div/div[10]/div/div/div/a/div/div/div[2]',
    );
    this.twoWheelersButton = page.locator(
      'xpath=//*[@id="container"]/div/div[1]/div/div/div/div/div/div/div/div/div/div[1]/div/div/div[3]/div/div/div/div/div/div/div/div[11]/div/div/div/a/div/div/div[2]',
    );
    this.SportsButton = page.locator(
      'xpath=//*[@id="container"]/div/div[1]/div/div/div/div/div/div/div/div/div/div[1]/div/div/div[3]/div/div/div/div/div/div/div/div[12]/div/div/div/a/div/div/div[2]',
    );
    this.BooksButton = page.locator(
      'xpath=//*[@id="container"]/div/div[1]/div/div/div/div/div/div/div/div/div/div[1]/div/div/div[3]/div/div/div/div/div/div/div/div[13]/div/div/div/a/div/div/div[2]',
    );
    this.FurnitureButton = page.locator('xpath=//*[@id="container"]/div/div[1]/div/div/div/div/div/div/div/div/div/div[1]/div/div/div[3]/div/div/div/div/div/div/div/div[14]/div/div/div/a/div/div/div[2]');
  }

  // ========== ACTIONS ==========

  // Functionto close the first Popup Window.
  async CloseWindow() {
    await this.CloseMark.click();
  }

  async TravelAllButtonsinHomePage() {
    await this.TravelButton.click();
    await expect(this.page).toHaveURL(/travel/);
    await expect(this.page.getByText("Welcome to travel")).toBeVisible();
    await this.FlipkartButton.click();
    await expect(this.page.getByText("Select delivery location")).toBeVisible();
    await this.TravelButton.click();
  }

  async GotoButtonsinTravelPage() {
    await this.FlightsButton.click();
    await expect(
      this.page.getByText("Any worldwide city or airport").first(),
    ).toBeVisible();
    await this.page.goBack({ waitUntil: "networkidle" });
    await expect(this.page.getByText("Welcome to travel")).toBeVisible();
    await this.HotelsButton.click();
    await expect(this.page).toHaveURL(
      "https://www.flipkart.com/msite-hotels-bus-store?BU=Travel",
    );
    await this.page.goBack({ waitUntil: "networkidle" });
    await this.BusesButton.click();
    await expect(this.page).toHaveURL(
      "https://www.flipkart.com/msite-bus-store?BU=Travel",
    );
    await this.page.goBack({ waitUntil: "networkidle" });
    await this.FlipkartButton.click();
  }

  async NavigateHomePageButtons() {
    await this.ForYouButton.click();
    await this.MobilesButton.click();
    await this.FashionButton.click();
    await this.BeutyButton.click();
    await this.ElectronicsButton.click();
    await this.HomeButton.click();
    await this.AppliancesButton.click();
    await this.ToysBabyButton.click();
    await this.FoodandHealthButton.click();
    await this.AutoAccessoriesButton.click();
    await this.twoWheelersButton.click();
    await this.SportsButton.click();
    await this.BooksButton.click();
    await this.FurnitureButton.click();
  }
}

module.exports = MainPage;