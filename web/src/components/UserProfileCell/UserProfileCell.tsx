import { useState } from 'react'

import type { FindUserById } from 'types/graphql'

import { CellFailureProps, CellSuccessProps, MetaTags } from '@redwoodjs/web'

import { UserProfile } from 'src/components/UserProfile/UserProfile'

import { AnsweredQuestions } from '../UserProfile/AnsweredQuestions/AnsweredQuestions'
import { QuestionNavigation } from '../UserProfile/QuestionNavigation/QuestionNavigation'
import { UnansweredQuestions } from '../UserProfile/UnansweredQuestions/UnansweredQuestions'
import { UserQuestions } from '../UserProfile/UserQuestions/UserQuestions'

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
        id
        question
        askedOn
        askedBy {
          username
          name
          avatar
        }
      }
      questionsAnswered {
        id
        question
        answer
        askedOn
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

const QuestionDisplay = ({ tab, user }) => {
  switch (tab) {
    case 'answered':
      return <AnsweredQuestions questions={user.questionsAnswered || []} />
    case 'unanswered':
      return <UnansweredQuestions questions={user.questionsAnswered || []} />
    default:
      return <UserQuestions questions={user.questionsAsked || []} />
  }
}

export const Success = ({ user }: CellSuccessProps<FindUserById>) => {
  const [currentTab, setCurrentTab] = useState('')

  return (
    <div>
      <MetaTags title={`${user.name || user.email} | User`} />
      <UserProfile user={user} />
      <QuestionNavigation currentTab={currentTab} onTabChange={setCurrentTab} />
      <QuestionDisplay tab={currentTab} user={user} />
    </div>
  )
}
