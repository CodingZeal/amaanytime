import { render } from '@redwoodjs/testing/web'

import { UploadField } from './UploadField'

const mockUser = {
  name: 'First Name Last Name',
  cover: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
}

describe('UploadField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UploadField name="cover" user={mockUser} type="cover" />)
    }).not.toThrow()
  })
})
