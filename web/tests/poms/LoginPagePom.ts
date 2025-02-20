import { expect, Locator, Page } from '@playwright/test'

import { MockUserEntity } from '../entities/user.entity'

export class LoginPageModel {
  readonly page: Page
  readonly usernameInput: Locator
  readonly usernameInputError: Locator
  readonly passwordInput: Locator
  readonly passwordInputError: Locator
  readonly loginButton: Locator
  readonly loginForgotLink: Locator
  loggedInUser: Record<string, unknown>

  constructor(page: Page) {
    this.page = page
    this.usernameInput = page.getByRole('textbox', { name: 'Username' })
    this.passwordInput = page.getByRole('textbox', { name: 'Password' })
    this.loginButton = page.getByRole('button', { name: 'Log In' })
  }

  async goto() {
    await this.page.goto('/login')
    await this.page.waitForLoadState()
  }

  async loginBasicUser(username: string) {
    const user = await MockUserEntity.upsert({
      username,
      email: '',
    })
    await this.goto()
    await this._fillUsername(username)
    await this._fillPassword('password')
    await this._clickLogin()
    await this.page.waitForURL('/')
    this.loggedInUser = user
    return user
  }

  async reset() {
    const logoutButton = this.page.locator('text=Logout')
    expect(logoutButton).toBeVisible()
    await logoutButton.click()
    await MockUserEntity.removeById(this.loggedInUser.id as string)
    await this.page.goto('/')
  }

  async _fillUsername(s: string) {
    await this.usernameInput.click()
    await this.usernameInput.fill(s)
  }
  async _fillPassword(s: string) {
    await this.passwordInput.click()
    await this.passwordInput.fill(s)
  }
  async _clickLogin() {
    await this.loginButton.click()
  }
}
