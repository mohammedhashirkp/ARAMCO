const { test, expect } = require("@playwright/test");
const AmazonMainPage = require("../Pages/AmazonMainPage");

import dotenv from 'dotenv';

dotenv.config();

test("Test Environment Variables ", async ({ page }) => {
    const amazonmainpage = new AmazonMainPage(page);

    await page.goto(process.env.URL_Amazon);
    await amazonmainpage.ENVSignin();
    await page.pause();

}); 
