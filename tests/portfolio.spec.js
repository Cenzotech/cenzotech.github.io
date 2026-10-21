import { expect, test } from '@playwright/test';

test('presents the core portfolio story and real experience', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Software should');
  await expect(page.getByText('System Developer I')).toBeVisible();
  await expect(page.getByText('Admissions & enrollment systems')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Let’s make useful software.' })).toBeVisible();
});

test('opens, filters, and closes the command palette from the keyboard', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true })));
  const palette = page.getByRole('dialog');
  await expect(palette).toBeVisible();
  await palette.getByRole('textbox').fill('contact');
  await expect(palette.getByRole('button', { name: /CONTACT/ })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(palette).toBeHidden();
  await expect(page.getByRole('button', { name: 'Open navigation command palette' })).toBeFocused();
});

test('updates the active tab when navigating', async ({ page }) => {
  await page.goto('/');
  const aboutTab = page.getByRole('button', { name: 'ABOUT.md' });
  const workTab = page.getByRole('button', { name: 'WORK.ts' });

  await expect(aboutTab).toHaveAttribute('aria-current', 'page');
  await workTab.click();
  await expect(workTab).toHaveAttribute('aria-current', 'page');
  await expect(aboutTab).not.toHaveAttribute('aria-current', 'page');
});

test('updates the active tab while scrolling through sections', async ({ page }) => {
  await page.goto('/');

  await page.evaluate(() => window.scrollTo({ top: document.getElementById('about').offsetHeight * 0.2, behavior: 'instant' }));
  await expect(page.getByRole('button', { name: 'ABOUT.md' })).toHaveAttribute('aria-current', 'page');

  await page.evaluate(() => window.scrollTo({ top: document.getElementById('work-details').offsetTop, behavior: 'instant' }));
  await expect(page.getByRole('button', { name: 'WORK.ts' })).toHaveAttribute('aria-current', 'page');

  await page.evaluate(() => window.scrollTo({ top: document.getElementById('about-details').offsetTop, behavior: 'instant' }));
  await expect(page.getByRole('button', { name: 'ABOUT.md' })).toHaveAttribute('aria-current', 'page');

  await page.evaluate(() => window.scrollTo({ top: document.getElementById('contact').offsetTop, behavior: 'instant' }));
  await expect(page.getByRole('button', { name: 'CONTACT.sh' })).toHaveAttribute('aria-current', 'page');
});

test('keeps mobile content inside the viewport', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const dimensions = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));
  expect(dimensions.scrollWidth).toBe(dimensions.clientWidth);
  await expect(page.getByRole('button', { name: 'EXPERIENCE.json' })).toBeVisible();
  await expect(page.getByText('Requirements start with listening, not assumptions.')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Download résumé' })).toHaveAttribute('href', '/resume.pdf');
});
