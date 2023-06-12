Feature: User update data employee

  Scenario: Update employee
    Given Click PIM
    When Search name
    When Click action edit
    When Input form employee with new data
    When Click Save
    Then Data is successfully updated
