import { render } from '@redwoodjs/testing/web'

import { UserQuestions } from './UserQuestions'

describe('UserQuestions', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserQuestions questions={[]} className={undefined} />)
    }).not.toThrow()
  })
})
