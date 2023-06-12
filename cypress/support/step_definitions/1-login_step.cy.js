import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given("Enter login page", () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/')
})

When('Input username', function () {
    cy.get('[name="username"]').type('admin');
  })

When('Input password', () => {
  cy.get('[name="password"]').type('admin123');
})

When('Click button login', () => {
  cy.get('.oxd-button').click();
})

Then('Successfully login', () => {
  cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains("Dashboard")
})