import { useAuth } from '@redwoodjs/auth'
import { CellFailureProps, CellSuccessProps, MetaTags } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { displayName } from 'src/utils/UserHelpers'

import { EditProfile } from '../EditProfile'

export const beforeQuery = (props) => {
  return {
    variables: props,
    fetchPolicy: 'no-cache',
  }
}

export const QUERY = gql`
  query Profile {
    profile {
      id
      email
      name
      nickname
      pronouns
      avatar
      bio
      cover
      location
      website
      username
    }
  }
`
const UPDATE_PROFILE_MUTATION = gql`
  mutation UpdateProfileMutation($input: UpdateProfileInput!) {
    updateProfile(input: $input) {
      id
      email
      name
      nickname
      pronouns
      avatar
      bio
      cover
      location
      website
      username
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ profile }: CellSuccessProps) => {
  const { reauthenticate } = useAuth()

  const [updateProfile] = useMutation(UPDATE_PROFILE_MUTATION, {
    onCompleted: () => {
      reauthenticate()
      toast.success('Profile updated')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })
  const onSave = (input) => {
    updateProfile({ variables: { input } })
  }

  return (
    <>
      <MetaTags title={displayName(profile)} />
      <div>
        <EditProfile onSave={onSave} profile={profile} />
      </div>
    </>
  )
}
