import { useEffect } from 'react'

import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import { AuthFormWrapper, AuthHeader } from 'src/components/Forms'
import { ActionButton } from 'src/components/Forms/ActionButton'
import { TextInput } from 'src/components/Forms/TextInputs/TextInputs'
import { useDevice } from 'src/hooks/useDevice'
import { AuthLayout } from 'src/layouts'

const ForgotPasswordPage = () => {
  const { isAuthenticated, forgotPassword } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const onSubmit = async (data) => {
    const response = await forgotPassword(data.email)

    if (response.error) {
      toast.error(response.error)
    } else {
      toast.success(
        'A link to reset your password was sent to ' + response.email
      )
      navigate(routes.login())
    }
  }

  const { isIPad, isMobile } = useDevice()
  return (
    <>
      <AuthLayout>
        <MetaTags title="Forgot Password" />
        <div className="hidden lg:block"></div>
        {isMobile || isIPad ? (
          <MobileForgotPasswordForm onSubmit={onSubmit} isIPad={isIPad} />
        ) : (
          <DesktopForgotPasswordForm onSubmit={onSubmit} />
        )}
      </AuthLayout>
    </>
  )
}

const MobileForgotPasswordForm = ({
  onSubmit,
  isIPad,
}: {
  onSubmit: (data: unknown) => void
  isIPad
}) => (
  <div
    className={`flex flex-col items-center justify-center ${
      isIPad
        ? 'w-[80%] translate-y-[100px] justify-self-center'
        : 'translate-y-[-35px]'
    }`}
  >
    <AuthHeader>Forgot Password</AuthHeader>
    <AuthFormWrapper handleSubmit={onSubmit}>
      <TextInput name="email" label="email" focus />
      <ActionButton
        type="submit"
        style={{
          marginTop: 20,
        }}
      >
        Submit
      </ActionButton>
    </AuthFormWrapper>
  </div>
)

const DesktopForgotPasswordForm = ({
  onSubmit,
}: {
  onSubmit: (data: unknown) => void
}) => (
  <div>
    <AuthFormWrapper handleSubmit={onSubmit}>
      <AuthHeader>Forgot Password</AuthHeader>
      <TextInput
        focus
        name="email"
        label="Email"
        labelProps={{
          className: 'text-sm',
        }}
      />
      <div className="flex max-w-[500px] items-center justify-between py-3">
        <ActionButton data-testid="login-submit-button" type="submit">
          Submit
        </ActionButton>
      </div>
    </AuthFormWrapper>
  </div>
)

export default ForgotPasswordPage
