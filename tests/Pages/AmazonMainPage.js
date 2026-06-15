const { expect } = require("@playwright/test");
const  testData  = require("../../testData/testData.json");

class AmazonMainPage {
    constructor(page) {
        this.page = page;

  
        // ========== LOCATORS ==========

        //Login Method Locators
        this.Account_Lists = page.locator('xpath=//*[@id="nav-link-accountList"]/a/span');
        this.Email = page.locator('#ap_email_login');
        this.Continue = page.locator('xpath=//*[@id="continue"]');
        this.Password = page.locator('xpath=//*[@id="ap_password"]');
        this.signin = page.locator('xpath=//*[@id="auth-signin-button"]');

        //verifyLogin Locators  
        this.ManageProfiles = page.locator('xpath=//*[@id="selectProfileModalId"]/div/div/div[2]/button');
        this.ProfileName = page.getByText("Mohammed Hashir Kp");
        this.CloseWindow = page.locator('xpath=//*[@id="a-popover-1"]/div/div[1]/button');

        //AddtoCart Locators
        this.Searchbar = page.locator('xpath=/html[1]/body[1]/div[1]/header[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[2]/div[1]/input[1]');
        this.Click_Search = page.locator('xpath=/html[1]/body[1]/div[1]/header[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[3]/div[1]/span[1]/input[1]');
        this.Samsung_Link = page.locator('xpath=/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/span[1]/div[1]/div[2]/div[1]/div[1]/span[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]/h2[1]/span[1]');
        this.Add_to_Cart = page.locator('xpath=//*[@id="a-autoid-3-announce"]');
        this.Go_to_Cart = page.locator('xpath=//*[@id="ewc-compact-actions-container"]/div/div[2]/span/span/a');
        this.ShoppingCartText = page.locator('#sc-active-items-header');
        this.ProceedtoBuyText = page.locator('[name="proceedToRetailCheckout"]');
        this.HomePage = page.locator('xpath=/html[1]/body[1]/div[1]/header[1]/div[1]/div[1]/div[1]/div[1]/a[1]');


        //Delivery Adress Change Locators
        this.DeliveryTab = page.locator('xpath=/html[1]/body[1]/div[1]/header[1]/div[1]/div[1]/div[1]/div[2]/span[1]/a[1]/div[1]');
        this.ChnageAddress_Soorya_Haseenas = page.locator('xpath=//*[@id="GLUXAddressList"]/li[1]/span/span/span/input');
        //this.DeliveryLocation = page.locator('#glow-ingress-line2');
        this.Enter_Pincode = page.locator('xpath=//*[@id="GLUXZipUpdateInput"]');
        this.Apply = page.locator('xpath=//*[@id="GLUXZipUpdate"]');

        //Locators for Empty Cart
        this.Cart = page.locator('xpath=//*[@id="nav-cart-count-container"]/span[2]');
        this.NoItemsText = page.locator('.sc-your-amazon-cart-is-empty');


        //Locators for Change Language.
        this.Lang_Hover = page.locator('xpath=//*[@id="icp-nav-flyout"]/a/span/span[2]/div');
        this.Malayalam = page.locator('xpath=/html[1]/body[1]/div[1]/header[1]/div[1]/div[3]/div[23]/div[2]/ul[1]/li[7]/a[1]/span[1]/span[1]');
        this.Lang_Mal_Hover = page.locator('xpath=//*[@id="icp-nav-flyout"]/a/span/span[2]/div');
        this.English = page.locator('xpath=//*[@id="nav-flyout-icp"]/div[2]/ul/li[1]/a/span/span[1]');


        //Search for movie
        this.MXPlayer = page.locator('xpath=//*[@id="nav-xshop"]/ul/li[3]/div/a');
        this.SearchIcon = page.locator('xpath=//*[@id="desktop_search_icon"]/a/img');
        this.FillValueSearch = page.locator('xpath=//*[@id="appContainer"]/div/div/div[1]/div/div/input');
        this.ClickonMovie = page.locator('xpath=//*[@id="infiniteScrollV3"]/div[1]/div/div[1]/a/div/img');
        this.Amazon = page.locator('xpath=//*[@id="appContainer"]/nav/div[3]/div[2]/a/div/div[1]/img');



        //Quantity Check Method Locators
        this.AddtoCartLap = page.locator('xpath=//*[@id="a-autoid-5-announce"]');
        this.AddQuantity = page.locator('xpath=//*[@id="sc-active-0b31b7e9-4baf-466d-a531-ff048ec18be9"]/div[4]/div/div[3]/div[1]/span[1]/span[1]/fieldset/div[2]/div/button[2]/span');
        this.decQuantity = page.locator('xpath=//*[@id="sc-active-6859dbb4-55a0-4651-b64e-651dd860d13f"]/div[4]/div/div[3]/div[1]/span[1]/span[1]/fieldset/div[2]/div/button[1]/span');


        //Fresh Navigation Locators
        this.Fresh = page.getByRole('link', { name: 'Fresh' }).first();
        this.Skip = page.getByRole('button', { name: 'Close' }).first();
        this.past_Purchases = page.getByRole('link', { name: 'Past Purchases' });
        this.Deals = page.getByRole('link', { name: 'Deals' }).nth(1);
        this.Atta = page.getByRole('link', { name: 'Atta, rice & grains' });
        this.Dal = page.getByRole('link', { name: 'Dal & pulses' });
        this.Oil = page.getByRole('link', { name: 'Oil & ghee', exact: true });
        this.Tea = page.getByRole('link', { name: 'Tea & coffee' });
        this.chips = page.getByRole('link', { name: 'Chips & biscuits' });
        this.Bath = page.getByRole('link', { name: 'Bath & body' });
        this.Makeup = page.getByRole('link', { name: 'Make up & cosmetics' });
        this.Laundry = page.getByRole('link', { name: 'Laundry detergents' });
        this.Baby = page.getByRole('link', { name: 'Baby care' });
        this.Pet = page.getByRole('link', { name: 'Pet care' });


        //Locators or Kaspersky Add to Cart
        this.SearchBar = page.getByRole('searchbox', { name: 'Search Amazon.in' });
        this.SelectSoftware = page.getByLabel('Select the department you');
        this.Search = page.getByRole('button', { name: 'Go', exact: true });
        this.KsCheckbox = page.getByRole('link', { name: 'Apply the filter Kaspersky to' });
        this.MSCheckbox = page.getByRole('link', { name: 'Apply the filter Microsoft' });
        this.AddToCartSoftware = page.getByRole('Button', { name: 'Add to Cart' }).first();
        this.GotoCart = page.getByRole('link', { name: 'Go to Cart' });
        this.DeleteKasperskyProduct = page.getByRole('button', { name: 'Delete Kaspersky | Premium -' }).first();



    }

    // ========== ACTIONS ==========

    //Function for Logging in to Amazon Account
    async Signin() {

        await this.Account_Lists.click();
        await this.Email.fill(testData.username);
        await this.Continue.click();
        await this.Password.fill(testData.password);
        await this.signin.click();

    }
    // this method is used in Enviranment_Test using dotenv setup.
    async ENVSignin() {
        await this.Account_Lists.click();
        await this.Email.fill(process.env.USERNAME_Amazon);
        await this.Continue.click();
        await this.Password.fill(process.env.PASSWORD_Amazon);
        await this.signin.click();

    }

    //Function to Verify login is successful.
    async VerifyLogin() {

        await this.Account_Lists.hover();
        await this.ManageProfiles.click();
        await expect(this.ProfileName).toBeVisible();
        await this.CloseWindow.click();

    }

    async AddtoCart() {

        await this.Searchbar.fill('Samsung s24 ultra 5g mobile');
        await this.Click_Search.click();
        await this.Add_to_Cart.click();
        await this.Go_to_Cart.click();
        await expect(this.ShoppingCartText).toHaveText('Shopping Cart');
        await expect(this.ProceedtoBuyText).toBeVisible();
        await this.HomePage.click();

    }

    async ChangeDeliveryAddress() {

        await this.DeliveryTab.click();
        await this.Enter_Pincode.fill('670102');
        await this.Apply.click();
        await this.page.waitForTimeout(5000);
        await this.DeliveryTab.click();
        await this.Enter_Pincode.fill('670649');
        await this.Apply.click();

    }


    async EmptyCart() {

        await this.Cart.click();
        await this.page.getByText('Delete').click();
        await this.HomePage.click();
        await this.Cart.click();

        await expect(this.NoItemsText).toContainText('Your Amazon Cart is empty');
    }


    async ChangeLanguage() {

        await this.Lang_Hover.hover();
        await this.Malayalam.click();
        await this.Lang_Mal_Hover.hover();
        await this.English.click();


    }

    async SearchMovie() {

        await this.MXPlayer.click();
        await this.SearchIcon.click();
        await this.FillValueSearch.fill('The Best Thing');
        await this.FillValueSearch.press('Enter');
        await this.ClickonMovie.click();
        await this.Amazon.click();

    }


    async QuantityAddtoCart() {

        await this.Searchbar.fill('Laptop');
        await this.Click_Search.click();
        await this.AddtoCartLap.click();
        await this.Go_to_Cart.click();
        await this.AddQuantity.click();
        await this.AddQuantity.click();
        await this.decQuantity.click();
        await this.decQuantity.click();


    }

    async FreshNavigation() {

        await this.Fresh.click();
        //await this.Skip.click();
        await this.past_Purchases.click();
        await this.Deals.click();
        await this.Atta.click();
        await this.Dal.click();
        await this.Oil.click();
        await this.Tea.click();
        await this.chips.click();
        await this.Bath.click();
        await this.Makeup.click();
        await this.Laundry.click();
        await this.Baby.click();
        await this.Pet.click();
        await this.HomePage.click();

    }

    async KasperskyAddToCart() {

        await this.SelectSoftware.selectOption('search-alias=software');
        await this.SearchBar.fill('Kaspersky');
        await this.Search.click();
        await this.KsCheckbox.click();
        await this.MSCheckbox.click();
        await this.AddToCartSoftware.click();
        await this.GotoCart.click();
        await this.DeleteKasperskyProduct.click();
        await this.HomePage.click();

    }

}
module.exports = AmazonMainPage;