import type { FindAnsweredQuestions } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { FeedBlock } from '../FeedBlock'

export const QUERY = gql`
  query FindAnsweredQuestions {
    questionsWithAnswers {
      id
      question
      answer
      order
      pinned
      askedOn
      updatedOn
      notGoingToAnswer
      flag
      archive
      parentQuestionId
      askedByUserId
      answeredByUserId
      askedBy {
        username
        name
        avatar
      }
      answeredBy {
        username
        name
        avatar
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  questionsWithAnswers,
}: CellSuccessProps<FindAnsweredQuestions>) => {
  return (
    <>
      {questionsWithAnswers?.map((questionsWithAnswers) => {
        return (
          <FeedBlock
            key={questionsWithAnswers.id}
            question={questionsWithAnswers}
          />
        )
      })}
    </>
  )
}
