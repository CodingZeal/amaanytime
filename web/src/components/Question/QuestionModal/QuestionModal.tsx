import type { EditQuestionById, UpdateQuestionInput } from 'types/graphql'

import { useAuth } from '@redwoodjs/auth'
import { Form, FormError } from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

import { Avatar } from 'src/components/Avatar/Avatar'
import { ActionButton, TextInput } from 'src/components/Forms'

type FormQuestion = NonNullable<EditQuestionById['question']>

interface QuestionModalProps {
  question?: EditQuestionById['question']
  onSave: (data: UpdateQuestionInput, id?: FormQuestion['id']) => void
  error: RWGqlError
  loading: boolean
}

const QuestionModal = (props: QuestionModalProps) => {
  const { currentUser } = useAuth()
  const onSubmit = (data: FormQuestion) => {
    props.onSave(data, props?.question?.id)
  }

  return (
    <div className="mx-auto w-screen max-w-[1000px] bg-blanc p-1">
      <Form<FormQuestion>
        onSubmit={onSubmit}
        className="border-2  py-10 px-8"
        error={props.error}
      >
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
        <div className=" relative flex items-center justify-end">
          <button className="font-slab text-sm underline">CLOSE</button>
        </div>
        <div className="mb-2 flex flex-row items-center font-sans">
          <Avatar user={currentUser} className="mr-2 h-[32px] w-[32px]" />
          <p className="mr-2">Question for</p>
          <p className="mr-2 font-bold">{currentUser?.name}</p>
          <p className="mr-2">@{currentUser?.username}</p>
        </div>

        <TextInput
          name="question"
          placeholder="My question..."
          className="mb-0 pb-20"
          required
        />
        {/* <Label
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
        <FieldError name="askedByUserId" className="rw-field-error" /> */}
        {/* <Label
          name="answeredByUserId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Answered by user id
        </Label>
        <TextField
          name="answeredByUserId"
          defaultValue={props.question?.answeredByUserId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="answeredByUserId" className="rw-field-error" /> */}
        <div className="flex max-w-[1000px] items-center justify-end">
          <button className="mx-8 font-slab text-sm">CANCEL</button>
          <ActionButton
            loading={props.loading}
            type="submit"
            style={{
              marginTop: 20,
              width: 140,
              fontSize: 12,
            }}
          >
            ASK QUESTION
          </ActionButton>
        </div>
      </Form>
    </div>
  )
}

export { QuestionModal }
