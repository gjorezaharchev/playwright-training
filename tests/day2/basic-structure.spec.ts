import { test, expect } from '@playwright/test';
test.describe("Test Suite for Authentication tests", ()=>{

test('test some x', async ({ page }) => {
  //await page.locator('body').click();      
  await page.goto('/');
  //await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  //await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // await expect.soft(page.locator('[data-test="title"]')).toContainText('Productes ');
  // await expect.soft(page.locator('[data-test="title"]')).toContainText('Prod uctes ');
  await expect(page.locator('[data-test="title"]')).toContainText('Productes ');
  await expect(page.locator('[data-test="title"]')).toContainText('Prod uctes ');
  await expect(page.locator('[data-test="title"]')).toBeVisible();
  await expect(page.getByText('Swag Labs')).toBeVisible();
  
});

test('test fail', async ({ page }) => {
    //await page.locator('body').click();
    await page.goto('/');
    //await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user1');
    //await page.locator('[data-test="username"]').press('Tab');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
  
    await expect(page.locator('[data-test="title"]')).toBeVisible();
    // await expect(page.getByText('Swag Labs')).toBeVisible();
    // await expect(page.locator('[data-test="title"]')).toContainText('Products');
  });


  test('testxx', async ({ page }) => {
    //await page.locator('body').click();
    await page.goto('/');
    //await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    //await page.locator('[data-test="username"]').press('Tab');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
  
    // await expect.soft(page.locator('[data-test="title"]')).toContainText('Productes ');
    // await expect.soft(page.locator('[data-test="title"]')).toContainText('Prod uctes ');
    await expect(page.locator('[data-test="title"]')).toContainText('Productes ');
    await expect(page.locator('[data-test="title"]')).toContainText('Prod uctes ');
    await expect(page.locator('[data-test="title"]')).toBeVisible();
    await expect(page.getByText('Swag Labs')).toBeVisible();
    
  });

});