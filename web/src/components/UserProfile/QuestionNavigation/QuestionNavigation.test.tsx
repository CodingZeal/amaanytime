import userEvent from '@testing-library/user-event'

import { render, screen, waitFor } from '@redwoodjs/testing/web'

import { QuestionNavigation } from './QuestionNavigation'

const renderComponent = (props = {}) =>
  render(<QuestionNavigation {...props} />)

describe('UserQuestions', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<QuestionNavigation currentTab={''} onTabChange={() => {}} />)
    }).not.toThrow()
  })

  describe('When a tab is clicked', () => {
    it('returns correct tab names', async () => {
      const onTabChange = jest.fn()
      renderComponent({ currentTab: '', onTabChange: onTabChange })

      await waitFor(() =>
        userEvent.click(screen.getByText('Answered Questions'))
      )
      expect(onTabChange).toBeCalledWith('answered')

      await waitFor(() =>
        userEvent.click(screen.getByText('Unanswered Questions'))
      )
      expect(onTabChange).toBeCalledWith('unanswered')

      await waitFor(() =>
        userEvent.click(screen.getByText(`Questions They've Asked`))
      )
      expect(onTabChange).toBeCalledWith('asked')
    })
  })
})
