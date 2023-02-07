import { routes } from '@redwoodjs/router'
import { mockCurrentUser, render, screen } from '@redwoodjs/testing/web'

import { AvatarMenu } from './AvatarMenu'

describe('Navigation', () => {
  const mock = jest.fn()

  it('renders navigation component', () => {
    mockCurrentUser({ id: 'foobar' })

    render(<AvatarMenu isOpen={mock} toggleOpen={mock} />)
    expect(screen.getByTestId('avatarNav')).toBeInTheDocument()
  })

  it('renders navigation component', () => {
    mockCurrentUser({ id: 'foobar' })
    render(<AvatarMenu isOpen={mock} toggleOpen={mock} />)
    const profile = screen.getByText('Edit Profile')
    const email = screen.getByText('Edit Email')
    const password = screen.getByText('Edit Password')
    const logout = screen.getByText('LOG OUT')

    expect(profile).toBeVisible()
    expect(profile).toHaveAttribute('href', routes.profile())
    expect(email).toBeVisible()
    expect(email).toHaveAttribute('href', routes.editEmail())
    expect(password).toBeVisible()
    expect(password).toHaveAttribute('href', routes.editPassword())
    expect(logout).toBeVisible()
  })
})
