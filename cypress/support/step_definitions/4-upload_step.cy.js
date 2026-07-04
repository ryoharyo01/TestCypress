import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import 'cypress-file-upload';
const imageFile = 'sample.jpg'

beforeEach(function () {
  cy.login();
});

When('Upload photo employee', () => {
  cy.get('.orangehrm-edit-employee-image').click();
  cy.wait(3000);

  cy.get('.employee-image-wrapper > .employee-image').click();

  cy.fixture(imageFile).then((fileContent) => {
    cy.get('input[type="file"]').attachFile(
      { fileContent, fileName: imageFile, mimeType: 'image/jpg' },
      { subjectType: 'input' }

    );
  });
  cy.wait(5000);
  });

When('Click save photo', () => {
cy.get('.oxd-button').click();
});

Then('Succesfully upload photo', () => {
  cy.get('.oxd-toast').should('be.visible');
});
