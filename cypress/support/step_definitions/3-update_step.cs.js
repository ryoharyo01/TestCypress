import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('Click PIM', () => {
  cy.get(':nth-child(2) > .oxd-main-menu-item').click();
});

When('Search name', () => {
  cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('Robert Davis')
  cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
});

When('Click action edit', () => {
  cy.get('.oxd-table-cell-actions > :nth-child(2)').click()
});

When('Input form employee with new data', () => {
  cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('222222')
  cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('6666666')
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type('2026-02-02')
  cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click({force: true}).wait(800)
  cy.get('.oxd-select-option').eq(83).click().wait(900)
  cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type('1998-10-08')
  cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input').click({force: true})
});

When('Click Save', () => {
  cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
});

Then('Data is successfully updated', () => {
  cy.get('.oxd-toast').should('be.visible');
});
