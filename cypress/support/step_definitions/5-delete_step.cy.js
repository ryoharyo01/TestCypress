import { When, Then } from 'cypress-cucumber-preprocessor/steps';

When('Click action delete', () => {
    cy.get('.oxd-table-cell-actions > :nth-child(1)').click();
    cy.get('.oxd-button--label-danger').click();
    cy.wait(2000);
});

Then('Successfully delete data', () => {
    cy.get('.oxd-text--toast-title').should('be.visible')
});
