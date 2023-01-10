import type {
  DeleteQuestionMutationVariables,
  FindQuestionById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag, timeTag } from 'src/lib/formatters'

const DELETE_QUESTION_MUTATION = gql`
  mutation DeleteQuestionMutation($id: Int!) {
    deleteQuestion(id: $id) {
      id
    }
  }
`

interface Props {
  question: NonNullable<FindQuestionById['question']>
}

const Question = ({ question }: Props) => {
  const [deleteQuestion] = useMutation(DELETE_QUESTION_MUTATION, {
    onCompleted: () => {
      toast.success('Question deleted')
      navigate(routes.questions())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteQuestionMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete question ' + id + '?')) {
      deleteQuestion({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Question {question.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{question.id}</td>
            </tr>
            <tr>
              <th>Question</th>
              <td>{question.question}</td>
            </tr>
            <tr>
              <th>Answer</th>
              <td>{question.answer}</td>
            </tr>
            <tr>
              <th>Order</th>
              <td>{question.order}</td>
            </tr>
            <tr>
              <th>Pinned</th>
              <td>{checkboxInputTag(question.pinned)}</td>
            </tr>
            <tr>
              <th>Asked on</th>
              <td>{timeTag(question.askedOn)}</td>
            </tr>
            <tr>
              <th>Updated on</th>
              <td>{timeTag(question.updatedOn)}</td>
            </tr>
            <tr>
              <th>Not going to answer</th>
              <td>{checkboxInputTag(question.notGoingToAnswer)}</td>
            </tr>
            <tr>
              <th>Flag</th>
              <td>{checkboxInputTag(question.flag)}</td>
            </tr>
            <tr>
              <th>Archive</th>
              <td>{checkboxInputTag(question.archive)}</td>
            </tr>
            <tr>
              <th>Parent question id</th>
              <td>{question.parentQuestionId}</td>
            </tr>
            <tr>
              <th>Asked by user id</th>
              <td>{question.askedByUserId}</td>
            </tr>
            <tr>
              <th>Answered by user id</th>
              <td>{question.answeredByUserId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editQuestion({ id: question.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(question.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Question
