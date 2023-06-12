Feature: User Delete data

  Scenario: Delete data employee
    When Click PIM
    And Search name
    And Click action delete
    Then Successfully delete data
