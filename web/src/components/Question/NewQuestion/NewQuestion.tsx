import type { CreateQuestionInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QuestionModal } from 'src/components/Question/QuestionModal'

const CREATE_QUESTION_MUTATION = gql`
  mutation CreateQuestionMutation($input: CreateQuestionInput!) {
    createQuestion(input: $input) {
      id
    }
  }
`

const NewQuestion = () => {
  const [createQuestion, { loading, error }] = useMutation(
    CREATE_QUESTION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Question created')
        navigate(routes.questions())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateQuestionInput) => {
    createQuestion({ variables: { input } })
  }

  return (
    <div className="my-10">
      <QuestionModal onSave={onSave} loading={loading} error={error} />
    </div>
  )
}

export default NewQuestion
