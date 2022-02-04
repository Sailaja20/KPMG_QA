
# QA code task (technical role)

The application consists of two projects - UI (React SPA) and API (ASP.Net Core). //- Verified

## What we have
A boilerplate code for both frontend and backend has been provided.

### UI:

The application has 4 pages and each page has instructions on what should be implemented:
- home page - Verified
- factorial - a user should be able to calculate *n!*  //- Verified
- fibonacci - a user should be able to calculate *Fib(n)*  //-Verified
- random square - a user should be able to calculate *rand(0, n)^2*  //- Verified

### API:

REST endpoints that are used in the UI have been implemented. //-checked 


## What you need to do

### UI:
- Implement missing features
    > Please start the application (see instructions below) and explore it to understand what needs to be implemented. 
   // Lot of things missed here - No page title, No click button, No input button, Success message and error message
   // Navigation, Text box validations, Form creation, click functionality so on
   // Also created sample html pages to write test cases
- Implement the test suite to cover the UI. Preferred framework is `CodeceptJs` but open to use any frameworks.
//I used webdriverIO framework with mocha,chai and written test cases under UI/tests

### API:

- Make sure the application logic is working correctly and feel free to refactor or change the code to make it work as desired.
// Small correction I did and tried in another workplace it worked fine. 
- Implement the test suite to cover the API. Preferred framework is `NUnit`. 
// I installed Nunit but some reason it's not working in visual studio code. I never worked on Nunit so I analysed it how can I write code using that tool.

## This code task is to test a candidate's ability to (non exhaustive list):
- code
- write automated tests (unit, integration, end-to-end as required)
- use git
- decide on testing strategy
- pay attention to details
- own and improve the code as required


## Before start

- Install dotnet SDK: https://dotnet.microsoft.com/download - Installed
- Install Yarn package manager: https://classic.yarnpkg.com/en/docs/install - Installed

- NB: Current app has been tested with:
    - node: v10.16.0 - I am already having Node v12.22.9 so I did not degreaded. I assuming it is compartible with v12.22.9.
    - yarn: 1.22.4 - Installed
    - dotnet: 3.1.202 - Installed
    - npm: 6.9.0 - Installed

## Start

- `yarn start` - this will start ui (port 3000) and api  (port 3001) - Done


## How to submit

Clone the repo and make the changes. Push the changes to your github and share the link to the repository with us. Make sure the repository is publicly accessible. - Done

Note: Please do not fork the repository or submit a pull request to this project.
