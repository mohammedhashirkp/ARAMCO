import { expect } from '@playwright/test';

export class RegisterPage {

    constructor(page) {
        this.page = page;

        this.firstName = page.locator('#firstName');
        this.lastName = page.locator('#lastName');
        this.email = page.locator('#userEmail');
        this.submitBtn = page.locator('#submit');
    }

    async navigate() {
        await this.page.goto('https://demoqa.com/automation-practice-form');


    }

    async FakerFunction(UserData) {
        await this.firstName.fill(UserData.firstName);
        await this.lastName.fill(UserData.lastName);
        await this.email.fill(UserData.email);

    }

    async clickSubmit() {
        await this.submitBtn.click();
    }
}