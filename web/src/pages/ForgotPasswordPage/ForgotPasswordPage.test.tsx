import { render, screen } from '@redwoodjs/testing/web'

import ForgotPasswordPage from './ForgotPasswordPage'

jest.mock('src/hooks/useDevice', () => ({
  useDevice: jest
    .fn()
    .mockImplementationOnce(() => ({ isMobile: true }))
    .mockImplementation(() => ({ isDesktop: true })),
}))

describe('ForgotPasswordPage', () => {
  it('displays mobile', async () => {
    render(<ForgotPasswordPage />)
    const login = screen.getByRole('form')
    expect(login).not.toHaveTextContent('Forgot Password')
  })

  it('displays desktop', async () => {
    render(<ForgotPasswordPage />)
    const login = screen.getByRole('form')
    expect(login).toHaveTextContent('Forgot Password')
  })

  it('renders successfully', () => {
    expect(() => {
      render(<ForgotPasswordPage />)
    }).not.toThrow()
  })
})
