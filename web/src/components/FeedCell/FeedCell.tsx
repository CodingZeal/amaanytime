import type { FindQuestions } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import FeedBlock from '../FeedBlock/FeedBlock'

export const QUERY = gql`
  query AllQuestionsQuery {
    questions {
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
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ questions }: CellSuccessProps<FindQuestions>) => {
  return questions?.map((question) => (
    <FeedBlock key={question.id} question={question} />
  ))
}
