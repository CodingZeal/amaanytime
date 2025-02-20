import { MetaTags } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { EditPasswordForm } from './EditPasswordForm'

const UPDATE_PASSWORD_MUTATION = gql`
  mutation UpdatePasswordMutation($input: UpdatePasswordInput!) {
    updatePassword(input: $input)
  }
`

const EditPassword = ({ profile }) => {
  const [updatePassword, { error, loading }] = useMutation(
    UPDATE_PASSWORD_MUTATION,
    {
      onCompleted: () => {
        toast.success('Password updated')
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )
  const onSave = (input) => {
    updatePassword({ variables: { input } })
  }

  return (
    <>
      <MetaTags
        title={`${
          profile?.nickname || profile?.name || profile?.email
        } | Edit Password`}
      />
      <div className="rw-segment">
        <div className="rw-segment-main">
          <EditPasswordForm error={error} loading={loading} onSave={onSave} />
        </div>
      </div>
    </>
  )
}

export { EditPassword }
