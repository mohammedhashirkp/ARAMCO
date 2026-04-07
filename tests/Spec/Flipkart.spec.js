const { test, expect } = require("@playwright/test");
const MainPage = require("../Pages/MainPage");

test("Flipkart Login and Top buttons are working Fine or Not ", async ({
  page,
}) => {
  const mainpage = new MainPage(page);
  //Go toFlipkart andclose the FirstPopup
  await page.goto("https://www.flipkart.com/");
  await mainpage.CloseWindow();

  //await page.pause();
  //travel to Travel button verify and comeback t flipkart and verify
  await mainpage.TravelAllButtonsinHomePage();

  //await page.pause();
  // aTravel all 3 buttonsinTravelpage and Verify landing and comeback to Home page Flipkart.
  await mainpage.GotoButtonsinTravelPage();

  await page.pause();

  //Check Homepage Navigations are working as per expectation.
  await mainpage.NavigateHomePageButtons();

  await page.pause();
});