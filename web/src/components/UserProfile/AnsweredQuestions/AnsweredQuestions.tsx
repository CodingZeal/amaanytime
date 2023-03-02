import { formatRelativeDate } from 'src/utils/DateHelpers'

import { Avatar } from '../../Avatar/Avatar'

const AnsweredQuestions = ({ questions }) => {
  return (
    <>
      {questions.map((question) => {
        if (question.answer) {
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
                      <time dateTime={question.updatedOn}>
                        {formatRelativeDate(question.updatedOn)}
                      </time>
                    </p>
                  </div>
                  <h3 className="mt-4 font-condensed text-3xl leading-10 md:mr-10 lg:text-4xl">
                    {question.question}
                  </h3>
                </div>
              </div>

              <div className="my-4 lg:ml-[86px]">{question.answer}</div>
            </div>
          )
        }
      })}
    </>
  )
}

export { AnsweredQuestions }
