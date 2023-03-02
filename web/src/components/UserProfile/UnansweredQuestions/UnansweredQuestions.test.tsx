import { render, screen } from '@redwoodjs/testing/web'

import { UnansweredQuestions } from './UnansweredQuestions'

const mockprops = {
  id: '42',
  name: 'Harry',
  email: 'harry.potter@wizard.com',
  username: 'potters',
  nickname: 'Scar',
  active: true,
  admin: true,
  pronouns: 'he',
  updatedAt: '',
  createdAt: '',
  questionsAsked: [
    {
      question: 'Dwight Shrute?',
    },
  ],
  questionsAnswered: [
    {
      id: 10,
      question: 'Dwight Shrute?',
      answer: null,
      askedOn: '2022-12-28T18:09:40.569Z',
      updatedOn: '2022-12-29T18:09:40.569Z',
      askedBy: {
        username: 'mike',
        name: 'Michael Scott',
        avatar: '',
      },
    },
  ],
}

describe('UnansweredQuestions', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UnansweredQuestions questions={mockprops.questionsAnswered} />)
    }).not.toThrow()
  })

  it('renders the unanswered question', () => {
    render(<UnansweredQuestions questions={mockprops.questionsAnswered} />)

    expect(screen.getByText('Dwight Shrute?')).toBeInTheDocument()
  })
})
