import userEvent from '@testing-library/user-event'

import { render, screen, waitFor } from '@redwoodjs/testing/web'

import { EditEmailForm } from './EditEmailForm'

describe('EditPasswordForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditEmailForm onSave={undefined} />)
    }).not.toThrow()
  })

  it('renders a working form', () => {
    render(<EditEmailForm onSave={undefined} />)
    const password = screen.getByLabelText('Your Password')
    const newEmail = screen.getByLabelText('Your New Email')

    expect(password).toBeInTheDocument()
    expect(password).toBeVisible()

    expect(newEmail).toBeInTheDocument()
    expect(newEmail).toBeVisible()
  })

  it('requires all fields', async () => {
    const mockSave = jest.fn()
    render(<EditEmailForm onSave={mockSave} />)
    const save = screen.getByRole('button')
    await waitFor(() => userEvent.click(save))

    expect(screen.getByText('Your Password is required!')).toBeVisible()
    expect(screen.getByText('Your New Email is required!')).toBeVisible()

    expect(mockSave.mock.calls.length).toBe(0)
  })

  it('submits then calls onSave', async () => {
    const mockSave = jest.fn()
    render(<EditEmailForm onSave={mockSave} />)

    expect(mockSave.mock.calls.length).toBe(0)

    const passwordInput = screen.getByLabelText('Your Password')
    await waitFor(() => userEvent.type(passwordInput, 'supersecret'))

    const newPasswordInput = screen.getByLabelText('Your New Email')
    await waitFor(() => userEvent.type(newPasswordInput, 'foobar@example.com'))

    const save = screen.getByRole('button')
    await waitFor(() => userEvent.click(save))
    expect(mockSave.mock.calls.length).toBe(1)
  })
})
