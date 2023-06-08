# boc

A test project for Kablamo that tests an API which returns exchange rates according to parameters specified in the request.


## Installation

This project will require installation of Cypress in a project folder of your choice. As a pre-requisite, you will need node.js and npm. The versions for this project are below:

```bash
  npm versions 9.x.x
  node.js 18.x and above
```
You may follow the installation instructions at: https://docs.cypress.io/guides/getting-started/installing-cypress

You will also need to install [cypress-plugin-api](https://github.com/filiphric/cypress-plugin-api): 


```bash
npm i cypress-plugin-api
```
then import the plugin into the cypress/support/e2e.js file
    

## Running Tests

To run the test, ensure that you are in your project folder, then run:

```bash
  npm run html-report
```
This will run the test in headed mode in Chrome as configured. this can be changed in the package.json to run in headless mode, and change the default browser.

## Some Observations

- Calculating the average of decimal numbers required a conversion of rates to whole numbers in order to maintain accuracy of calculation


## Optimizations

Some additional steps if time permitted:

* parameterize url: exchange code, observation units (weeks, months, years), unit value
* Create fixtures to be able to reuse same test case with different values for exchange code, description, exchange label (CAD/AUD, CAD/EUR, etc.)
* Assertions for verifying correct format for date and rate
* Negative scenarios such as out of range/invalid month requests, invalid exchange codes in request, invalid observation units (hours, days)
