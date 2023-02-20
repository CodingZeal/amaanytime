import userEvent from '@testing-library/user-event'

import { render, screen, waitFor } from '@redwoodjs/testing/web'

import { SignUpForm } from './SignUpForm'

jest.mock('src/hooks/useDevice', () => ({
  useDevice: jest
    .fn()
    .mockImplementationOnce(() => ({ isMobile: true }))
    .mockImplementation(() => ({ isDesktop: true })),
}))

const mockSave = jest.fn()

describe('SignUpForm', () => {
  it('displays mobile', async () => {
    render(<SignUpForm handleSignUp={mockSave} />)
    const signup = screen.getByRole('form')
    expect(signup).not.toHaveTextContent('Sign Up')
  })

  it('displays desktop', async () => {
    render(<SignUpForm handleSignUp={mockSave} />)
    const signup = screen.getByRole('form')
    expect(signup).toHaveTextContent('Sign Up')
  })

  it('renders successfully', () => {
    expect(() => {
      render(<SignUpForm handleSignUp={mockSave} />)
    }).not.toThrow()
  })

  it('submits then calls onSave', async () => {
    render(<SignUpForm handleSignUp={mockSave} />)

    expect(mockSave.mock.calls.length).toBe(0)
    const usernameInput = screen.getByLabelText('Username')
    await waitFor(() => userEvent.type(usernameInput, 'supersecret'))

    const passwordInput = screen.getByLabelText('Password')
    await waitFor(() => userEvent.type(passwordInput, 'halloween'))

    const confirmPasswordInput = screen.getByLabelText('Repeat password')
    await waitFor(() => userEvent.type(confirmPasswordInput, 'halloween'))

    const signup = screen.getByRole('button')
    await waitFor(() => userEvent.click(signup))
    expect(mockSave.mock.calls.length).toBe(1)
  })
})
