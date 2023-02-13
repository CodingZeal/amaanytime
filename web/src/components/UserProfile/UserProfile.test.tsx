import { standard } from 'web/src/components/UserProfileCell/UserProfileCell.mock'

import { render } from '@redwoodjs/testing/web'

import { UserProfile } from './UserProfile'

describe('UserProfile', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserProfile user={standard().user} />)
    }).not.toThrow()
  })
})
