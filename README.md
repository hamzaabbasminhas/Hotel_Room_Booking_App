# Powerus Assignment

# Overview
This repository contains automated tests for PowerUs's Recruiting Bible platform, ensuring seamless signup for partners. The tests are designed with a focus on scalability, simplicity, and clean code practices.


## prerequisites
- [nodejs](https://nodejs.org/en/)
- npm
- Chrome browser

## Installation

To run the example tests locally, follow these steps:

1. Clone the repository to your local machine.
2. Install Cypress and other dependencies by running the following command:

 ```shell
npm install
```

## Running the Tests

To execute the test, you can use the following commands:

- Run all tests:

```shell
npm run test:e2e
```

- Run all tests on the chrome browser:

```shell
npm run test:chrome
```

- Run all the tests in headed mode:

```shell
npm run test:headed
```

## Structure
- cypress/integration/e2e/specs: Contains test suites.
- cypress/integration/e2e/pageObjects/: Page object classes for encapsulating page-specific actions and elements.
- cypress/fixtures/data.json: Test data.
- cypress/reports: Contains Mocha Awseome reports after execution
- cypress/videos: Contains Video recording of the test

## Configuration

The Cypress configuration files include the following:

- `cypress.config.ts`:

- Contains environment variables and configuration options for the tests.
- The `basUrl` variable specifies the base URL of the web application under test.
- Additional configuration options for Cypress.

## Test Scenario
- Automated steps for booking hotel app by premium and economy customers.

## Key Features
- Clean Code: Readable and maintainable code structure.
- Scalability: Functions and classes designed for reuse across multiple tests.
- TypeScript Integration: Strong typing with TypeScript for better code quality and error handling.
- Custom Commands: Extending Cypress with custom commands for common actions.
- API Interception: Using cy.intercept to manage network requests for reliability.

## TypeScript Setup
- TypeScript is configured to enhance code quality and reliability.
- Refer to tsconfig.json for TypeScript compiler options.

## Reporting

The Mochawesome reporter generates stylish HTML reports. After running the tests, the reports can be found in the `cypress/reports/mochawesome-report` directory. Open the HTML report in any web browser to view the detailed test results.

## Dependencies
The example tests utilize the following dependencies, listed in the package.json file:
 
- Cypress: End-to-end testing framework.
- Faker: For generating random test data.
- TypeScript: Language implementation.
- Mocha: JavaScript test framework used by Cypress.
- Mochawesome: Reporter for generating stylish HTML reports.
- Mochawesome-merge: Tool for merging multiple Mochawesome reports.

## TODO (Improvements):
- check on BrowserStack if solution runs on Windows and Linux Machines, since I tested only on Mac and docker.
- Using docker images for execution of tests


