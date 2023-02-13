import type { FindUserById } from 'types/graphql'

import { CellFailureProps, CellSuccessProps, MetaTags } from '@redwoodjs/web'

import { UserProfile } from 'src/components/UserProfile/UserProfile'

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
      }
      questionsAnswered {
        question
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
  return (
    <>
      <MetaTags title={`${user.name || user.email} | User`} />
      <UserProfile user={user} />
    </>
  )
}
