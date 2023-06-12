Feature: Upload Photo

  Scenario: Upload Photo Profil Employee
  Given Click PIM
  When Search name
  When Click action edit
  When Upload photo employee
  When Click save photo
  Then Succesfully upload photo
