import { test, expect } from '@playwright/test';

test.describe('Performance and Error checks', () => {
  test('should not have console errors on home page', async ({ page }) => {
    const errors: string[] = [];
    
    page.on('pageerror', (exception) => {
      errors.push(exception.message);
    });

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto('/');
    
    // Allow time for dynamic content/images to load
    await page.waitForLoadState('networkidle');

    // Currently we expect 0 errors, but if third-party scripts fail it might log.
    // For now we assert there are no application errors.
    expect(errors.length).toBe(0);
  });
});
