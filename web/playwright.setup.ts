import { chromium } from '@playwright/test'

import { BASE_URL } from './playwright.config'

async function globalSetup() {
  const browser = await chromium.launch()
  const adminLogin = await browser.newPage()
  await adminLogin.goto(`${BASE_URL}/login`)

  const usernameInput = adminLogin.getByLabel('username')
  await usernameInput.click()
  await usernameInput.fill('admin')

  const passwordInput = adminLogin.getByLabel('password')
  await passwordInput.click()
  await passwordInput.fill('password')

  await adminLogin.getByRole('button', { name: 'Login' }).click()
  await adminLogin.waitForURL(BASE_URL, { waitUntil: 'domcontentloaded' })

  await adminLogin
    .context()
    .storageState({ path: 'web/tests/storage/adminUser-pw.json' })

  const userLogin = await browser.newPage()
  await userLogin.goto(`${BASE_URL}/login`)

  await userLogin.locator('input[name="username"]').click()
  await userLogin.locator('input[name="username"]').fill('user')
  await userLogin.locator('input[name="password"]').click()
  await userLogin.locator('input[name="password"]').fill('password')
  await userLogin.getByRole('button', { name: 'Login' }).click()
  await userLogin.waitForURL(BASE_URL, { waitUntil: 'domcontentloaded' })

  await userLogin
    .context()
    .storageState({ path: 'web/tests/storage/basicUser-pw.json' })

  await browser.close()
}

export default globalSetup
