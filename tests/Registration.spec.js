const { test, expect } = require('@playwright/test');

test('Verify Registration', async ({ page }) => {
 // Step 1: Open QA Interview website
  await page.goto('https://qainterview.netlify.app/');

  // Step 2: Click Create new user to register a new user
  await page.getByText('Create new user').click();

  // Step 3: Verify heading of registration page
    await expect(page.getByRole('heading', { name: 'Create new user' })).toBeVisible();

    //Step 4: Fill in the registration form with valid credentials
    await page.getByLabel('Username').fill('AmirulFaiz')
    await page.getByLabel('Password').fill('Quantios@77!');

    //Step 5: Verify that the Create Account button is enabled
    await expect(page.locator('#registerBtn')).toBeEnabled();

    //Step 6: Click Create Account button
    await page.locator('#registerBtn').click();

    await page.waitForTimeout(10000);
});