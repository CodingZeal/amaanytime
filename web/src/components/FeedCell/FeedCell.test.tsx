import { render } from '@redwoodjs/testing/web'

import { Loading, Failure, Success } from './FeedCell'
import { standard } from './FeedCell.mock'

describe('FeedCell', () => {
  it('renders Loading successfully', () => {
    expect(() => {
      render(<Loading />)
    }).not.toThrow()
  })

  it('renders Failure successfully', async () => {
    expect(() => {
      render(<Failure error={new Error('Oh no')} />)
    }).not.toThrow()
  })

  it('renders Success successfully', async () => {
    expect(() => {
      render(<Success questions={standard().questions} />)
    }).not.toThrow()
  })
})
