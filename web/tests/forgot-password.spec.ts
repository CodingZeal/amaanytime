import { test, expect } from '@playwright/test'

test.describe('forgot password', () => {
  test('should fill out forgot password input', async ({ page }) => {
    await page.goto('/')
    await page.getByText('Login').click()
    await page.waitForURL('/login')

    await page.getByText('Forgot Password?').click()
    await page.waitForURL('/forgot-password')

    const usernameInput = page.locator('input[name=username]')
    await usernameInput.click()
    await usernameInput.fill('admin')

    await page.getByTestId('forgot-password-submit').click()
    await page.waitForURL('/login')

    const toastMessage = page.getByText(
      'A link to reset your password was sent to admin@example.com'
    )
    expect(toastMessage)
  })
})
