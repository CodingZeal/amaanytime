import { render, screen } from '@redwoodjs/testing/web'

import { AnsweredQuestions } from './AnsweredQuestions'

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
      answer: 'dwightshrute',
      updatedOn: '2022-12-29T18:09:40.569Z',
      askedBy: {
        username: 'mike',
        name: 'Michael Scott',
        avatar: '',
      },
    },
  ],
}

describe('AnsweredQuestions', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <AnsweredQuestions
          questions={mockprops.questionsAnswered}
          className={undefined}
        />
      )
    }).not.toThrow()
  })

  it('renders the question', () => {
    render(
      <AnsweredQuestions
        questions={mockprops.questionsAnswered}
        className={undefined}
      />
    )

    expect(screen.getByText('Dwight Shrute?')).toBeInTheDocument()
  })
})
