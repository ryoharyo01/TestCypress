import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('Click PIM', () => {
  cy.get(':nth-child(2) > .oxd-main-menu-item').click();
});

When('Search name', () => {
  cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').clear().type('Robert Davis');
  cy.wait(1000);
  cy.get('.oxd-form-actions > .oxd-button--secondary').click({ force: true });
});

When('Click action delete', () => {
    cy.get('.oxd-table-cell-actions > :nth-child(1)').click();
    cy.get('.oxd-button--label-danger').click();
    cy.wait(2000);
});

Then('Successfully delete data', () => {
    cy.get('.oxd-text--toast-title').should('be.visible')
});
