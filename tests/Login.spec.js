
const { test, expect } = require('@playwright/test');

test('Verify successful login', async ({ page }) => {

  // Step 1: Open Login page
  await page.goto('https://qainterview.netlify.app/');

  // Step 2: Enter registered username
 await page.locator('#username').fill('AmirulFaiz');

// Step 3: Enter password
await page.locator('#password').fill('Quantios@77!');

// Step 4: Click Login
await page.getByRole('button', { name: 'Login' }).click();

//step 5: Verify that the user is redirected to the dashboard page
await expect(page.getByRole('heading', { name: 'Stock Market Dashboard' })).toBeVisible();

await page.waitForTimeout(10000);
});