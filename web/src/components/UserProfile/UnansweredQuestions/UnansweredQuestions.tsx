import { Form, InputField } from '@redwoodjs/forms'

import { TextInput } from 'src/components/Forms'
import { ActionButton } from 'src/components/Forms'
import { formatRelativeDate } from 'src/utils/DateHelpers'

import { Avatar } from '../../Avatar/Avatar'

const QuestionDisplay = ({ question, onFormSubmit }) => {
  return (
    <div
      className="flex w-screen flex-col border px-5 py-10 text-base md:px-10 md:text-xl "
      key={question.id}
    >
      <div className="md:flex-col-2 md:flex md:items-start">
        <Avatar
          user={question.askedBy}
          className="mr-5 mb-4 h-[68px] w-[68px]"
        />
        <div className="flex flex-col justify-start md:basis-11/12">
          <div className="flex flex-row items-center font-sans">
            <h3 className="mr-2 font-bold">{question.askedBy.name}</h3>
            <p className="mr-2">@{question.askedBy.username}</p>
            <div
              style={{
                height: '2px',
                width: '2px',
                background: 'black',
                borderRadius: '50%',
              }}
            ></div>
            <p className="mx-2">
              <time dateTime={question.askedOn}>
                {formatRelativeDate(question.askedOn)}
              </time>
            </p>
          </div>
          <h3 className="mt-4 font-condensed text-3xl leading-10 md:mr-10 lg:text-4xl">
            {question.question}
          </h3>
          <Form onSubmit={onFormSubmit}>
            <InputField type="hidden" name="questionId" value={question.id} />
            <TextInput name="Answer" />
            <ActionButton data-testid="login-submit-button" type="submit">
              Answer Question
            </ActionButton>
          </Form>
        </div>
      </div>
    </div>
  )
}

const UnansweredQuestions = ({ questions, onSubmitAnswer }) => {
  const onFormSubmit = (form) => {
    onSubmitAnswer(
      form.Answer,
      questions.find((q) => q.id === Number(form.questionId))
    )
  }

  if (questions.length === 0) {
    return 'No Unanswered Questions'
  } else {
    return (
      <>
        {questions.map((question) => (
          <QuestionDisplay
            key={question}
            question={question}
            onFormSubmit={onFormSubmit}
          />
        ))}
      </>
    )
  }
}

export { UnansweredQuestions }
