class LoginPage {
  constructor(page) {
    this.page = page;

    // ========== LOCATORS ==========
    this.serverSettingsBtn = page.getByRole("button", { name: "Server Settings" });
    this.serverInput = page.locator('//*[@id="root"]/div/div/div[2]/div/div[2]/div[2]/div[1]/input');
    this.serverSaveBtn = page.locator('//*[@id="root"]/div/div/div[2]/div/div[2]/div[3]/button[1]');

    this.usernameInput = page.locator('//*[@id="root"]/div/div/div/div[2]/form/div[1]/input');
    this.passwordInput = page.locator('//*[@id="root"]/div/div/div/div[2]/form/div[2]/input');
    this.loginBtn = page.locator('//*[@id="root"]/div/div/div/div[2]/form/button');

    this.profileIcon = page.locator("//div[@class='w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center shadow-md ring-1 ring-slate-700']");
    this.logoutBtn = page.locator('//*[@id="root"]/div/div/div/header/div/div[3]/div[3]/div/button');
  }

  // ========== ACTIONS ==========

  async goto(url) {
    await this.page.goto(url);
  }

  async configureServer(ip) {
    await this.serverSettingsBtn.click();
    await this.serverInput.fill(ip);
    await this.serverSaveBtn.click();
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
  }

  async logout() {
    await this.profileIcon.click();
    await this.logoutBtn.click();
  }
}

module.exports = LoginPage;