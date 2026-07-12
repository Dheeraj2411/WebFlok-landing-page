import { test, expect } from '@playwright/test';

test.describe('Quote Flow', () => {
  test('should navigate to quote page and display form', async ({ page }) => {
    // Navigate to home page
    await page.goto('/');

    // Verify home page loaded
    await expect(page).toHaveTitle(/WEBFLOK/);

    // Navigate to quote page directly (or by clicking CTA)
    await page.goto('/quote');
    
    // Verify we are on quote page
    await expect(page.getByRole('heading', { name: /Get a Quote/i })).toBeVisible();

    // Verify form sections are present
    await expect(page.getByText(/Basic Information/i)).toBeVisible();
    await expect(page.getByRole('heading', { name: /Project Type/i })).toBeVisible();
    
    // Fill out basic information
    await page.getByPlaceholder('Enter your full name').fill('John Doe');
    await page.getByPlaceholder('your.email@example.com').fill('john@example.com');
    
    // Assert the submit button is present
    const submitBtn = page.getByRole('button', { name: /Get My Quote/i });
    await expect(submitBtn).toBeVisible();
  });
});
