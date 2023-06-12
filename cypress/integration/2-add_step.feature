Feature: User add new data employee

  Scenario: Add new employee
    When Click PIM
    And  Click button add
    And  Input form data employee
    And Click submit
    Then Successfully add employee
