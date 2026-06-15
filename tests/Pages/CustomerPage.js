import { expect } from '@playwright/test';

export class CustomerPage {

    constructor(page) {
        this.page = page;

        // Login
        this.loginLink = page.getByRole('link', { name: 'Log In' }).nth(1);
        this.username = page.locator('[name="j_id0:j_id5:j_id6:signinform:username"]');
        this.password = page.locator('[name="j_id0:j_id5:j_id6:signinform:password"]');
        this.signInBtn = page.getByRole('link', { name: 'Log In' });

        // Application
        this.newApplication = page.getByRole('link', { name: 'New Application' });
        this.startApplication = page.getByRole('link', {
            name: 'Click or Tap here to start a Prescriptive Application'
        });

        // Agreements
        this.terms = page.locator('xpath=//*[@id="pg:frm:AgreeChk"]');
        this.eula = page.locator('xpath=//*[@id="termsConditions"]');
        this.Agrement = page.locator('xpath=//*[@id="eula-agreement"]/u');
        

        // Signature
        this.signature = page.locator('#pg\\:frm\\:j_id800\\:j_id801\\:signaturePad_signature');


        //Attachment
        // this.File1 = page.locator('xpath=//*[@id="fileUpld_1"]');

        // Installation Locators.
        this.AddInstallationAddress = page.locator('xpath=//*[@id="addNewAddress"]');
        this.Accountnumber = page.locator('xpath=//*[@id="pg:idform:AccountNumberVerificationTxt"]');
        this.LookupAccountNumber = page.locator('xpath=//*[@id="addSelectedAddressBtn"]');
        this.TotalProjectCost = page.locator('xpath=//*[@id="pg:idform:TotPremProjCostEdModel1"]');
        this.SaveButton = page.locator('xpath=//*[@id="addAddressBtn"]');
        this.Save = page.locator('xpath=//*[@id="AddressAddEditDiv"]/div[12]/div/div/table/tbody/tr[2]/td[7]/a');

        //Measure Selection

        this.AgricultureMeasure = page.locator('xpath=//*[@id="pg:frm:theRepeat:0:j_id499"]/div/strong');
        this.Compressor = page.locator('xpath=//*[@id="Lighting"]/div/div[1]/div/strong');
        this.Apply = page.locator('xpath=//*[@id="row0EMeasureTableContainer"]/div[7]/a');
        this.SubmittedAnnual = page.locator('xpath=//*[@id="pg:measureLineItemForm:j_id1107:0:j_id1112:0:j_id1122"]');
        this.Quantity = page.locator('xpath=//*[@id="pg:measureLineItemForm:j_id1107:0:j_id1112:1:j_id1122"]');
        this.SubmittedSCPeak = page.locator('xpath=//*[@id="pg:measureLineItemForm:j_id1107:0:j_id1112:2:j_id1122"]');
        this.SubmittedIncentive = page.locator('xpath=//*[@id="pg:measureLineItemForm:j_id1107:0:j_id1112:3:j_id1120"]');
        this.SaveandClose = page.locator('xpath=//*[@id="configsave"]');

        //Mandatory Fields
        this.IDonotSeeCheckbox = page.locator('xpath=//*[@id="ContractorNotFoundChk"]');
        this.projecttype = page.locator('xpath=//*[@id="pg:frm:projectTypePeFe"]/tbody/tr[1]/td/label');
        this.YesorNo = page.locator('xpath=//*[@id="pg:frm:j_id293"]/div[1]/div/div[2]/div/fieldset/table/tbody/tr/td[1]/label');
        this.TypeOfProject = page.locator('xpath=//*[@id="pg:frm:programTypeRadio"]/tbody/tr[1]/td/label');

        //confirm and Submit
        this.ConfirmandSubmit =page.locator('xpath=//*[@id="btnConfirmAndSubmit2"]');
    }

    async login() {

        await this.page.goto('https://cr101--uat.sandbox.my.salesforce-sites.com/PECO');

        await this.loginLink.click();

        await this.username.fill('arzad.ariff+customer@clearesult.com');

        await this.password.fill('Clr@2026');

        await this.signInBtn.click();

    }

    async startNewApplication() {

        await this.newApplication.click();

        await this.startApplication.click();

    }

//---------------------------


//-----------------------------





    async uploadAttachment(filePath) {

        const popupPromise = this.page.waitForEvent('popup').catch(() => null);

        await this.page.getByRole('link', {
            name: 'Upload Attachment'
        }).click();

      //  await this.page.pause();

        const uploadPage = await popupPromise || this.page;


        // Select options
        await uploadPage.getByRole('button', { name: 'Select options' }).first().click();

        await uploadPage.getByRole('checkbox', { name: 'W-9' }).first().check();

        await uploadPage.getByRole('checkbox', { name: 'Cost Estimate' }).check();

        await uploadPage.getByRole('checkbox', { name: 'Spec Sheet' }).check();

      //  await this.page.pause();

        await uploadPage.locator('#fileUpld_1').setInputFiles('SampleFile/W-9.docx');

      //  await this.page.pause();

        // Upload
        await uploadPage.getByRole('link', { name: 'Upload Files' }).click();

        // Wait for upload completion
        await this.page.waitForTimeout(13000);

     //   await this.page.pause();

    }

    // Cancel upload scenario
    async cancelUploadAttachment() {

        const [uploadPage] = await Promise.all([

            this.page.waitForEvent('popup'),

            this.page.getByRole('link', { name: 'Upload Attachment' }).click()

        ]);

        await uploadPage.locator('#btnCancel').click();

        await uploadPage.close();

    }

    async acceptAgreement() {

        await this.terms.click();

        await this.Agrement.click();

        await this.eula.click();

    }



    async drawSignature() {

        await this.signature.hover();

        await this.page.mouse.down();

        await this.page.mouse.move(400, 400);

        await this.page.mouse.move(450, 450);

        await this.page.mouse.up();
    }

    async AddInastallation(){

        await this.AddInstallationAddress.click();
        await this.Accountnumber.fill('4879731154');
        await this.LookupAccountNumber.click();
        await this.page.waitForTimeout(5000);
        await this.TotalProjectCost.fill('1000');
        await this.page.selectOption('select#pg\\:idform\\:BuildingTypeEdModel', { label: 'Office' });
        await this.SaveButton.click();
        await this.page.waitForTimeout(5000);
        await this.Save.click();

        // await this.page.pause();
        
    }

    async MeasureConfig(){
        await this.AgricultureMeasure.click();
        await this.page.waitForTimeout(5000);
        await this.Compressor.click();
        await this.page.waitForTimeout(5000);
        await this.Apply.click();
        await this.SubmittedAnnual.fill('1500');
        await this.Quantity.fill('10');
        await this.SubmittedSCPeak.fill('500');
        await this.SubmittedIncentive.fill('250');
        await this.SaveandClose.click();
        await this.page.waitForTimeout(8000);
    }

    async PageMandetoryFields(){

        await this.IDonotSeeCheckbox.click();
        await this.projecttype.click();
        await this.YesorNo.click();
        await this.TypeOfProject.click();

    }

    async ConfirmAndSubmitFunction (){

        this.ConfirmandSubmit.click();

    }


}
module.exports = CustomerPage;