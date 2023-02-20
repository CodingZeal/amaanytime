import { Link, routes } from '@redwoodjs/router'

import {
  ActionButton,
  ForgotPasswordInput,
  TextInput,
} from 'src/components/Forms'
import { useDevice } from 'src/hooks/useDevice'

import { AuthFormWrapper } from './AuthFormWrapper'
import { AuthHeader } from './AuthHeaders'

export const LoginForm = ({
  handleLogin,
}: {
  handleLogin: (data: unknown) => void
}) => {
  const { isIPad, isMobile } = useDevice()

  return (
    <>
      {isMobile || isIPad ? (
        <MobileLoginForm handleLogin={handleLogin} />
      ) : (
        <DesktopLoginForm handleLogin={handleLogin} />
      )}
    </>
  )
}

const MobileLoginForm = ({
  handleLogin,
}: {
  handleLogin: (data: unknown) => void
}) => {
  const { isIPad } = useDevice()
  return (
    <div
      className={`flex flex-col items-center justify-center ${
        isIPad
          ? 'w-[80%] translate-y-[50px] justify-self-center'
          : 'translate-y-[-35px]'
      }`}
    >
      <AuthHeader>Log In</AuthHeader>
      <AuthFormWrapper handleSubmit={handleLogin}>
        <TextInput name="username" label="username" focus />
        <ForgotPasswordInput name="password" label="password" />
        <ActionButton
          type="submit"
          style={{
            marginTop: 20,
          }}
        >
          Log in
        </ActionButton>
        <DontHaveAccount />
      </AuthFormWrapper>
    </div>
  )
}

const DesktopLoginForm = ({
  handleLogin,
}: {
  handleLogin: (data: unknown) => void
}) => (
  <div>
    <AuthFormWrapper handleSubmit={handleLogin}>
      <AuthHeader>Log In</AuthHeader>
      <TextInput name="username" label="username" />
      <ForgotPasswordInput name="password" label="password" type="password" />
      <div className="flex max-w-[500px] items-center justify-between py-3">
        <DontHaveAccount />
        <ActionButton data-testid="login-submit-button" type="submit">
          Log In
        </ActionButton>
      </div>
    </AuthFormWrapper>
  </div>
)

const DontHaveAccount = () => (
  <div className="text-center text-sm">
    Don&apos;t have an account?{' '}
    <Link
      data-testid="login-signup-button"
      className="ml-1 font-bold underline"
      to={routes.signup()}
    >
      Sign up
    </Link>
  </div>
)
