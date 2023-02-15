import { useRef } from 'react'

import { Form, FormError, useForm } from '@redwoodjs/forms'

import { ActionButton } from 'src/components/Forms/ActionButton'
import { PasswordInput, TextInput } from 'src/components/Forms/TextInputs'

const EditEmailForm = ({ error, loading, onSave }) => {
  const formMethods = useForm()
  const newEmailRef = useRef()

  newEmailRef.current = formMethods.watch('newEmail', '')

  return (
    <div className=" w-full px-5 md:px-10 lg:pr-[122px] lg:pl-[58px]">
      <h2 className="font-condensed text-5xl text-punch">Edit Email</h2>
      <Form error={error} onSubmit={onSave} formMethods={formMethods}>
        <FormError
          error={error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
        <PasswordInput
          name="password"
          label="Your Password"
          className="my-10"
          required
        />
        <h2 className="mt-10 -mb-10">
          Requires verification via email message
        </h2>
        <TextInput
          name="newEmail"
          label="Your New Email"
          className="my-10"
          required
        />
        <div className="flex max-w-[1000px] justify-end">
          <ActionButton
            loading={loading}
            type="submit"
            style={{
              marginTop: 35,
              width: 192,
            }}
          >
            UPDATE EMAIL
          </ActionButton>
        </div>
      </Form>
    </div>
  )
}

export { EditEmailForm }
