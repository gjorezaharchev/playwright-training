import { test, expect } from '@playwright/test';
test.describe("Test Suite for Authentication tests", ()=>{

test('test', async ({ page }) => {
  //await page.locator('body').click();
  await page.goto('https://demoqa.com/text-box');
  await page.getByPlaceholder('Full Name').focus();
  await page.getByPlaceholder('Full Name').click();
  await page.getByPlaceholder('Full Name').fill('Gjore');
 
});

test('test2', async ({ page }) => {
    //await page.locator('body').click();
    await page.goto('https://demoqa.com/checkbox');
    await page.getByLabel('Toggle').focus();
    await page.getByLabel('Toggle').click();
    
   
  });


  test('test3', async ({ page }) => {
    await page.goto('https://demoqa.com/select-menu');

    await page.locator('#withOptGroup div').filter({ hasText: 'Select Option' }).nth(1).click();
    //await page.locator('#withOptGroup svg').click();
    // await page.locator('#react-select-2-input').press('ArrowDown');
    // await page.locator('#react-select-2-input').press('ArrowDown');
    await page.getByText('Group 1, option 1').click();
    await page.getByText('Group 1, option 1', { exact: true }).click();
    // await page.locator('#selectOne div').filter({ hasText: 'Select Title' }).nth(1).click();
    // await page.getByText('Dr.', { exact: true }).click();
    // await page.locator('#oldSelectMenu').selectOption('9');
    // await page.locator('#oldSelectMenu').press('ArrowDown');
    // await page.locator('#oldSelectMenu').press('ArrowDown');
    // await page.getByText('Select MenuSelect ValueGroup').click();
    // await page.locator('body').press('ArrowDown');
    // await page.locator('body').press('ArrowDown');
    // await page.locator('body').press('ArrowDown');
    // await page.locator('body').press('ArrowDown');
    // await page.locator('body').press('ArrowDown');
    // await page.locator('body').press('ArrowDown');
    // await page.locator('body').press('ArrowDown');
    // await page.locator('div').filter({ hasText: /^Select\.\.\.$/ }).nth(2).click();
    // await page.locator('#react-select-4-option-1').click();
    // await page.locator('#react-select-4-option-2').click();
    // await page.locator('.css-xb97g8 > .css-19bqh2r').first().click();
    // await page.locator('#react-select-4-option-1').click();
    // await page.locator('#cars').selectOption('opel');
    // await page.locator('#cars').selectOption(['saab', 'opel']);
    // await page.locator('#cars').selectOption(['volvo', 'saab', 'opel']);
  });

  test('test4', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form');
    await page.getByText('Male', { exact: true }).click();
  });

  test('test5', async ({ page }) => {
    await page.goto('https://demoqa.com/text-box');
    await page.getByTestId('userName').fill('Gjore');
    
  });

  test('test', async ({ page }) => {
    //await page.locator('body').click();
    await page.goto('/');
    //await page.locator('[data-test="username"]').click();
    await page.getByTestId('username').fill('standard_user');
    //await page.locator('[data-test="username"]').press('Tab');
    await page.getByTestId('password').fill('secret_sauce');
    await page.getByTestId('login-button').click();
  
    // await expect.soft(page.locator('[data-test="title"]')).toContainText('Productes ');
    // await expect.soft(page.locator('[data-test="title"]')).toContainText('Prod uctes ');
    await expect(page.locator('[data-test="title"]')).toContainText('Productes ');
    await expect(page.locator('[data-test="title"]')).toContainText('Prod uctes ');
    await expect(page.locator('[data-test="title"]')).toBeVisible();
    await expect(page.getByText('Swag Labs')).toBeVisible();
    
  });

});