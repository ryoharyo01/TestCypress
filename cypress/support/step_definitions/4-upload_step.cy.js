import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import 'cypress-file-upload';
const imageFile = 'sample.jpg'

Given('User clicks PIM', () => {
  cy.get(':nth-child(2) > .oxd-main-menu-item').click();
});

When('Search name', () => {
  cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').clear().type('Robert Davis');
  cy.wait(1000);
  cy.get('.oxd-form-actions > .oxd-button--secondary').click({ force: true });
  cy.wait(2000);
});

When('Click action edit', () => {
    cy.wait(2000);
  cy.get('.oxd-table-cell-actions > :nth-child(2)').click({ multiple: true });
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
