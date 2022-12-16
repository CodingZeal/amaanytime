import { render } from '@redwoodjs/testing/web'

import TermsAndConditionsPage from './TermsAndConditionsPage'

describe('TermsAndConditionsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TermsAndConditionsPage />)
    }).not.toThrow()
  })
})
