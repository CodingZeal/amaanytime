import { render, screen } from '@redwoodjs/testing/web'

import { AuthLayout } from './AuthLayout'

const children = 'Test Children'

describe('ProfileLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AuthLayout>{children}</AuthLayout>)
    }).not.toThrow()

    expect(screen.getByText(children)).toBeInTheDocument()
  })
})
