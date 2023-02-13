import { render } from '@redwoodjs/testing/web'

import { Loading, Empty, Failure, Success } from './UserProfileCell'
import { standard } from './UserProfileCell.mock'

describe('UserProfileCell', () => {
  it('renders Loading successfully', () => {
    expect(() => {
      render(<Loading />)
    }).not.toThrow()
  })

  it('renders Empty successfully', async () => {
    expect(() => {
      render(<Empty />)
    }).not.toThrow()
  })

  it('renders Failure successfully', async () => {
    expect(() => {
      render(<Failure error={new Error('Oh no')} />)
    }).not.toThrow()
  })

  it('renders Success successfully', async () => {
    expect(() => {
      render(<Success user={standard().user} />)
    }).not.toThrow()
  })
})
