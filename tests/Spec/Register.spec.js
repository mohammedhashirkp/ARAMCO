import { test } from '@playwright/test';
import { faker } from '@faker-js/faker';
import  dayjs from 'dayjs';
import { RegisterPage } from '../pages/RegisterPage';

test('Register user using Faker data', async ({ page }) => {

    const registerPage = new RegisterPage(page);

    const UserData = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email()
    };

    //Getting todays date using dayjs library.
    const today = dayjs().format('YYYY-MM-DD');

    console.log(today);



    await registerPage.navigate();

    await registerPage.FakerFunction(UserData);

    await registerPage.clickSubmit();
});