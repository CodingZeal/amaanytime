import { render } from '@redwoodjs/testing/web'

import { UploadField } from './UploadField'

describe('UploadField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UploadField name={undefined} value={undefined} />)
    }).not.toThrow()
  })
})
