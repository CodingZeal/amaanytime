import type { EditQuestionById, UpdateQuestionInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

type FormQuestion = NonNullable<EditQuestionById['question']>

interface QuestionFormProps {
  question?: EditQuestionById['question']
  onSave: (data: UpdateQuestionInput, id?: FormQuestion['id']) => void
  error: RWGqlError
  loading: boolean
}

const QuestionForm = (props: QuestionFormProps) => {
  const onSubmit = (data: FormQuestion) => {
    props.onSave(data, props?.question?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormQuestion> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="question"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Question
        </Label>

        <TextField
          name="question"
          defaultValue={props.question?.question}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="question" className="rw-field-error" />

        <Label
          name="answer"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Answer
        </Label>

        <TextField
          name="answer"
          defaultValue={props.question?.answer}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="answer" className="rw-field-error" />

        <Label
          name="order"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Order
        </Label>

        <NumberField
          name="order"
          defaultValue={props.question?.order}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="order" className="rw-field-error" />

        <Label
          name="pinned"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Pinned
        </Label>

        <CheckboxField
          name="pinned"
          defaultChecked={props.question?.pinned}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="pinned" className="rw-field-error" />

        <Label
          name="notGoingToAnswer"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Not going to answer
        </Label>

        <CheckboxField
          name="notGoingToAnswer"
          defaultChecked={props.question?.notGoingToAnswer}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="notGoingToAnswer" className="rw-field-error" />

        <Label
          name="flag"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Flag
        </Label>

        <CheckboxField
          name="flag"
          defaultChecked={props.question?.flag}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="flag" className="rw-field-error" />

        <Label
          name="archive"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Archive
        </Label>

        <CheckboxField
          name="archive"
          defaultChecked={props.question?.archive}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="archive" className="rw-field-error" />

        <Label
          name="parentQuestionId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Parent question id
        </Label>

        <NumberField
          name="parentQuestionId"
          defaultValue={props.question?.parentQuestionId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="parentQuestionId" className="rw-field-error" />

        <Label
          name="askedByUserId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Asked by user id
        </Label>

        <TextField
          name="askedByUserId"
          defaultValue={props.question?.askedByUserId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="askedByUserId" className="rw-field-error" />

        <Label
          name="askedOfUserId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Answered by user id
        </Label>

        <TextField
          name="askedOfUserId"
          defaultValue={props.question?.askedOfUserId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="askedOfUserId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default QuestionForm
