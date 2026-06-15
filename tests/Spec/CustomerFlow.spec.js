
const { test, expect } = require("@playwright/test");
const CustomerPage = require("../Pages/CustomerPage");

test('Customer flow', async ({page}) => {
test.setTimeout(210000);
const customer = new CustomerPage(page);

await customer.login();

await customer.startNewApplication();

// Upload attachment
await customer.uploadAttachment(
'./SampleFile/W-9.docx'
);


await customer.PageMandetoryFields();

 // Cancel scenario
await customer.cancelUploadAttachment();

//Add Installation Scenario
await customer.AddInastallation();

//Measure Configuration Scenario
await customer.MeasureConfig();

//Accept Agreement
 await customer.acceptAgreement();

 //Signature
 await customer.drawSignature();

 //Submit Application
await customer.ConfirmAndSubmitFunction();

});