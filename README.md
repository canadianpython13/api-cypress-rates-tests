> ❗️ DO NOT clone the repo until step below named `Clone project`

# boc

A test project for Kablamo that tests an API which returns exchange rates according to parameters specified in the request.


## Installation

### Create project folder and package.json

This project will require installation of Cypress in a project folder of your choice. As a pre-requisite, you will need node.js and npm. 

### Install npm and node.js

The versions for this project are below:

```bash
  npm versions 9.x.x
  node.js 18.x and above
```

Verify the version you have using 
```bash 
node -v
npm -v
```
If you do not have them installed, you can use the installer located here https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

### Finally, install Cypress!

Proceed to install Cypress by running this directly:
```bash
npm install cypress
```
To verify all has been installed properly, run 
```bash
npx cypress open
```
#### ...And one plugin
You will also need to install [cypress-plugin-api](https://github.com/filiphric/cypress-plugin-api): 

```bash
npm i cypress-plugin-api
```
then import the plugin into the cypress/support/e2e.js file
```bash 
import 'cypress-plugin-api'
```

### Clone project

After you have completed the above steps, ensure that you clone the project into your selected project folder

```bash
git clone https://github.com/canadianpython13/boc.git
```

## Install dependencies 

```
cd boc
npm i
```

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
