Feature: The site should be available.
  In order to use the site
  As a user
  I need to have access to the login page

  Scenario: The login page exists.
    Given I am an anonymous user
    When I am at "/user"
    Then I should see "Username"
