import { render } from '@redwoodjs/testing/web'

import DisclaimersPage from './DisclaimersPage'

describe('DisclaimersPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DisclaimersPage />)
    }).not.toThrow()
  })
})
