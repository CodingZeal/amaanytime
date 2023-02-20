import { render, screen } from '@redwoodjs/testing/web'

import { AuthFormWrapper } from './AuthFormWrapper'

const mockfn = jest.fn()
const children = 'Test Children'

describe('AuthFormWrapper', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <AuthFormWrapper handleSubmit={mockfn}>{children} </AuthFormWrapper>
      )
    }).not.toThrow()
    expect(screen.getByText(children)).toBeInTheDocument()
  })
})
