import { useRef } from 'react'

import { Form, FormError, useForm } from '@redwoodjs/forms'

import { ActionButton } from 'src/components/Forms/ActionButton'
import { PasswordInput } from 'src/components/Forms/TextInputs'

const EditPasswordForm = ({ error, loading, onSave }) => {
  const formMethods = useForm()
  const newPasswordRef = useRef()

  newPasswordRef.current = formMethods.watch('newPassword', '')
  return (
    <div className="mx-auto w-full px-5 md:px-10 lg:pr-[122px] lg:pl-[58px]">
      <h2 className="font-condensed text-5xl text-punch">Edit Password</h2>
      <Form
        onSubmit={onSave}
        error={error}
        formMethods={formMethods}
        className="my-10"
      >
        <FormError
          error={error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
        <PasswordInput
          name="existingPassword"
          label="Your Existing Password"
          required
        />
        <div className="my-10">
          <PasswordInput name="newPassword" label="New Password" required />
        </div>
        <PasswordInput
          name="confirmPassword"
          label="Confirm New Password"
          required
        />
        <div className="flex max-w-[1000px] justify-end">
          <ActionButton
            loading={loading}
            type="submit"
            style={{
              marginTop: 35,
              width: 225,
            }}
          >
            UPDATE PASSWORD
          </ActionButton>
        </div>
      </Form>
    </div>
  )
}

export { EditPasswordForm }
