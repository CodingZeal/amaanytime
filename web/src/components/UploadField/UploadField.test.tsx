import { Form } from '@redwoodjs/forms'
import { fireEvent, render, screen, waitFor } from '@redwoodjs/testing/web'

import { UploadField } from './UploadField'

const mockUser = {
  name: 'First Name Last Name',
  cover: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
}

describe('UploadField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <Form>
          <UploadField name="foobar" value={mockUser.cover} user={mockUser} />
        </Form>
      )
    }).not.toThrow()
  })

  describe('when type is default', () => {
    it('displays input', () => {
      render(
        <Form>
          <UploadField name="cover" user={mockUser} />
        </Form>
      )
      expect(screen.getByText('Browse Files')).toBeInTheDocument()
    })

    // it('displays cover image', async () => {
    //   jest.spyOn(global, 'fetch').mockImplementation(
    //     jest.fn(() =>
    //       Promise.resolve({
    //         json: () => Promise.resolve({ url: 'monkey.jpg' }),
    //       })
    //     ) as jest.Mock
    //   )

    //   render(
    //     <Form>
    //       <UploadField
    //         name="cover"
    //         user={mockUser}
    //         type="cover"
    //         value={mockUser.cover}
    //       />
    //     </Form>
    //   )

    //   await waitFor(() => {
    //     fireEvent.drop(screen.getByLabelText(/browse/i), {
    //       dataTransfer: {
    //         files: [new File(['(⌐□_□)'], 'monkey.png', { type: 'image/png' })],
    //         types: ['Files'],
    //       },
    //     })
    //   })

    //   // expect(screen.getByText('Browse Files')).not.toBeInTheDocument()
    //   expect(screen.queryByRole('img')).toBeInTheDocument()
    // })
  })
})
