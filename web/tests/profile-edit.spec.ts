import { test, expect } from '@playwright/test'

import { LoginPageModel } from './poms/LoginPagePom'

const MOCK_PROFILE = {
  name: 'snap',
  username: 'crackle',
  pronouns: 'cereal',
}

const MOCK_USER_EMAIL = 'snap@crackle.com'

test.describe('edit profile', () => {
  let loginPage: LoginPageModel

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPageModel(page)
    await loginPage.loginBasicUser(MOCK_USER_EMAIL)
    await page.goto('/profile', { waitUntil: 'domcontentloaded' })
    await page.waitForSelector('#edit-profile')
  })

  test.afterEach(async () => {
    await loginPage.reset()
  })

  test('should save profile changes', async ({ page }) => {
    const nameInput = page.locator('input[name="name"]')
    const usernameInput = page.locator('input[name="username"]')
    const pronounsInput = page.locator('input[name="pronouns"]')
    const saveButton = page.locator('text=UPDATE PROFILE')

    await nameInput.click()
    await nameInput.fill(MOCK_PROFILE.name)

    await usernameInput.click()
    await usernameInput.fill(MOCK_PROFILE.username)

    await pronounsInput.click()
    await pronounsInput.fill(MOCK_PROFILE.pronouns)

    await saveButton.click()
    await page.waitForURL('/profile', { waitUntil: 'domcontentloaded' })
    expect(await nameInput.inputValue()).toEqual(MOCK_PROFILE.name)
    expect(await usernameInput.inputValue()).toEqual(MOCK_PROFILE.username)
    expect(await pronounsInput.inputValue()).toEqual(MOCK_PROFILE.pronouns)
  })

  test('should update profile name in navigation', async ({ page }) => {
    const profileLink = page.getByRole('link', { name: MOCK_USER_EMAIL })
    expect(profileLink)

    const nameInput = page.locator('input[name="name"]')
    await nameInput.click()
    await nameInput.fill(MOCK_PROFILE.name)

    const saveButton = page.getByRole('button', { name: 'UPDATE PROFILE' })
    await saveButton.click()

    const profileLinkWithNewName = page.getByRole('link', {
      name: MOCK_PROFILE.name,
    })
    expect(profileLinkWithNewName)

    const usernameInput = page.locator('input[name="username"]')
    await usernameInput.click()
    await usernameInput.fill(MOCK_PROFILE.username)
    await saveButton.click()

    const profileLinkWithNewNickName = page.getByRole('link', {
      name: MOCK_PROFILE.username,
    })
    expect(profileLinkWithNewNickName)
  })
})
