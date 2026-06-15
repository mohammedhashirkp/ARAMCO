const { test, expect } = require("@playwright/test");
const AmazonMainPage = require("../Pages/AmazonMainPage");


test.only("Validate Sign in / Login and Delivery Address Change", async ({ page }) => {

    const amazonmainpage = new AmazonMainPage(page);

    // go to amazon website
    await page.goto("https://www.amazon.in/");

    //Method for Sign in to Amazon
    await amazonmainpage.Signin();
    await page.pause();

    //Method to verify the Login
    await amazonmainpage.VerifyLogin();
    await page.pause();

    //Method for Address Change for Delivery
    await amazonmainpage.ChangeDeliveryAddress();
    await page.pause();


});



test("Validate Add to Cart is Working Fine", async ({ page }) => {

    const amazonmainpage = new AmazonMainPage(page);

    // go to amazon website
    await page.goto("https://www.amazon.in/");

    await amazonmainpage.Signin();

    //Method for AddtoCart
    await amazonmainpage.AddtoCart();
    // await page.pause();

    await amazonmainpage.EmptyCart();
    // await page.pause();

    await amazonmainpage.ChangeLanguage();
    await page.pause();

    await amazonmainpage.SearchMovie();
    await page.pause();





});

test("Check Add to Cart Quantity works fine", async ({ page }) => {

    const amazonmainpage = new AmazonMainPage(page);

    // go to amazon website
    await page.goto("https://www.amazon.in/");

    await amazonmainpage.Signin();

    await amazonmainpage.QuantityAddtoCart();
    await page.pause();


});

test("Check the Navigation Works for Fresh Tab", async ({ page }) => {

    const amazonmainpage = new AmazonMainPage(page);

    // go to amazon website
    await page.goto("https://www.amazon.in/");

    //Method for Sign in to Amazon
    await amazonmainpage.Signin();
    await page.pause();

    await amazonmainpage.FreshNavigation();
    await page.pause();



});

test('Add Kaspersky for windows in Add to Cart', async ({ page }) => {

    const amazonmainpage = new AmazonMainPage(page);

    // go to amazon website
    await page.goto("https://www.amazon.in/");

    
    //Method for Sign in to Amazon
    await amazonmainpage.Signin();
    await page.pause();

    await amazonmainpage.KasperskyAddToCart();



});
