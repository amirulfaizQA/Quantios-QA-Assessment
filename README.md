# Quantios QA Assessment

## Overview
QA interview assessment covering UI automation using Playwright and REST API testing using Postman.

## Application Under Test
https://qainterview.netlify.app/

## Tools and Technologies
- Playwright
- JavaScript
- Node.js
- Postman
- Visual Studio Code

## Test Scenarios

### UI Automation
- User registration
- Successful user login
- Verify Stock Market Dashboard after login

### API Testing
- POST watchlist_post: Add a stock to the user's watchlist.
- GET watchlist_get: Retrieve the user's watchlist.

## Installation

```bash
npm ci
npx playwright install
```

## Execute Login Test

```bash
npx playwright test tests/Login.spec.js --headed --project=chromium
```

## Playwright Test Report

The HTML test execution report is included in the `playwright-report` folder.

To view the report:

```bash
npx playwright show-report
```

## Postman Collection

Import `Quantios Assessment.postman_collection.json` into Postman and execute the API requests using the appropriate test account.

| API | Expected Status |
|---|---|
| watchlist_post | 201 Created |
| watchlist_get | 200 OK |
