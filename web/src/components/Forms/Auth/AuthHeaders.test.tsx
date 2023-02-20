import { render, screen } from '@redwoodjs/testing/web'

import { AuthHeader } from './AuthHeaders'

const children = 'Test Children'

describe('AuthHeaders', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AuthHeader>{children}</AuthHeader>)
    }).not.toThrow()
    expect(screen.getByText(children)).toBeInTheDocument()
  })
})
