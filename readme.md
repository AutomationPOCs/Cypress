## Cypress

This repository contains the test suite built with Cypress. The test suite includes automated tests to ensure the functionality and quality of the project.


## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for testing purposes.
To run the tests, you need to have the following software installed:

- Node.js - Version 10 or higher

Navigate to the project directory. To execute the test suite, run the following command.

- `npm run test`

### Configuration

Before running the tests, you may need to configure certain settings. This could include specifying the URL of the application being tested, setting up test data, or modifying test environment variables. You can go to `cypress.config.js` to change env details.

Running the Tests

To execute the test suite, run the following command:

- cypress/E2E: Contains the test files that define the individual test cases.
- cypress/support: Contains support files such as custom commands and utility functions used by the tests.
- cypress/pages: Contains all the pages
- cypress/report: Contains HTML report generated after running tests