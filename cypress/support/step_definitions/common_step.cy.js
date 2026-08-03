import { Given, When } from 'cypress-cucumber-preprocessor/steps';

Given('Click PIM', () => {
  cy.login();
  cy.wait(3000);
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
  cy.get('.oxd-table-cell-actions > :nth-child(2)').click({ force: true });
});
