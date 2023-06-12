Feature: Login Page

    Scenario: Login user valid
    When Enter login page
    And Input username
    And Input password
    And Click button login
    Then Successfully login