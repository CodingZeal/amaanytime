import userEvent from '@testing-library/user-event'

import { render, screen, waitFor } from '@redwoodjs/testing/web'

import { LoginForm } from './LoginForm'

jest.mock('src/hooks/useDevice', () => ({
  useDevice: jest
    .fn()
    .mockImplementationOnce(() => ({ isMobile: true }))
    .mockImplementation(() => ({ isDesktop: true })),
}))

const mockfn = jest.fn()

describe('LoginForm', () => {
  it('displays mobile', async () => {
    render(<LoginForm handleLogin={mockfn} />)
    const login = screen.getByRole('form')
    expect(login).not.toHaveTextContent('Log In')
  })

  it('displays desktop', async () => {
    render(<LoginForm handleLogin={mockfn} />)
    const login = screen.getByRole('form')
    expect(login).toHaveTextContent('Log In')
  })

  it('renders successfully', () => {
    expect(() => {
      render(<LoginForm handleLogin={mockfn} />)
    }).not.toThrow()
  })

  it('submits then calls onSave', async () => {
    render(<LoginForm handleLogin={mockfn} />)

    expect(mockfn.mock.calls.length).toBe(0)
    const usernameInput = screen.getByLabelText('username')
    await waitFor(() => userEvent.type(usernameInput, 'supersecret'))

    const passwordInput = screen.getByLabelText('password')
    await waitFor(() => userEvent.type(passwordInput, 'halloween'))

    const login = screen.getByRole('button')
    await waitFor(() => userEvent.click(login))
    expect(mockfn.mock.calls.length).toBe(1)
  })
})
