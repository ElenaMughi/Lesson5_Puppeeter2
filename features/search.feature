Feature: Take A Ticket
Scenario: Booking a ticket
Given user is on "https://qamid.tmweb.ru/client/index.php"
When user take a ticket 1 day, 5 row 4 sit
Then user seen "Электронный билет"