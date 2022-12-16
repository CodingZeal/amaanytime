import { render } from '@redwoodjs/testing/web'

import WaitingListPage from './WaitingListPage'

describe('WaitingListPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WaitingListPage />)
    }).not.toThrow()
  })
})
