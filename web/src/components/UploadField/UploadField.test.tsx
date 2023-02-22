import { render } from '@redwoodjs/testing/web'

import { UploadField } from './UploadField'

describe('UploadField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <UploadField
          user={{
            cover: '',
          }}
        />
      )
    }).not.toThrow()
  })
})
