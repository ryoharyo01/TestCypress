import { When, Then } from 'cypress-cucumber-preprocessor/steps';

When('Click button add', () => {
  cy.get('.orangehrm-header-container > .oxd-button').click();
});

When('Input form data employee', () => {
  cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Robert');
  cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('Davis');
  cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Chaniago');
  cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('112192');
});
When('Click submit', () => {
  cy.get('.oxd-button--secondary').click();
  cy.wait(3000);
});

Then('Successfully add employee', () => {
  cy.get('.oxd-text--toast-title').should('be.visible');
});
