import { expect, test } from '@playwright/test';

test('filler', async ({ page }) => {
	await page.goto('/');
	await expect(true).toBeTruthy();
});
