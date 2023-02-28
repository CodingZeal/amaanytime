import { useState } from 'react'

import type { FindUserById } from 'types/graphql'

import { CellFailureProps, CellSuccessProps, MetaTags } from '@redwoodjs/web'

import { UserProfile } from 'src/components/UserProfile/UserProfile'

import { AnsweredQuestions } from '../AnsweredQuestions/AnsweredQuestions'

export const QUERY = gql`
  query FindUserById($id: String!) {
    user: user(id: $id) {
      id
      email
      username
      name
      nickname
      pronouns
      avatar
      bio
      cover
      location
      website
      questionsAsked {
        question
        askedOn
      }
      questionsAnswered {
        id
        question
        answer
        updatedOn
        askedBy {
          username
          name
          avatar
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>User not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ user }: CellSuccessProps<FindUserById>) => {
  const [answeredQuestion, setAnsweredQuestion] = useState([])

  useState(() => {
    setAnsweredQuestion(user.questionsAnswered)
  })
  return (
    <>
      <MetaTags title={`${user.name || user.email} | User`} />
      <UserProfile user={user} />
      <AnsweredQuestions questions={answeredQuestion || []} />
    </>
  )
}
