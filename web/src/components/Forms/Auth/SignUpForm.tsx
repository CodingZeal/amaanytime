import { Link, routes } from '@redwoodjs/router'

import { ActionButton, TextInput, PasswordInput } from 'src/components/Forms'
import { useDevice } from 'src/hooks/useDevice'

import { AuthFormWrapper } from './AuthFormWrapper'
import { AuthHeader } from './AuthHeaders'

export const SignUpForm = ({
  handleSignUp,
}: {
  handleSignUp: (data: unknown) => void
}) => {
  const { isIPad, isMobile } = useDevice()
  return (
    <>
      {isMobile || isIPad ? (
        <MobileSignUpForm handleSignUp={handleSignUp} />
      ) : (
        <DesktopSignUpForm handleSignUp={handleSignUp} />
      )}
    </>
  )
}

const MobileSignUpForm = ({
  handleSignUp,
}: {
  handleSignUp: (data: unknown) => void
}) => {
  const { isIPad } = useDevice()
  return (
    <div
      className={`flex flex-col items-center justify-center ${
        isIPad
          ? 'w-[80%] translate-y-[100px] justify-self-center'
          : 'translate-y-[-35px]'
      }`}
    >
      <AuthHeader>Sign Up</AuthHeader>
      <AuthFormWrapper handleSubmit={handleSignUp}>
        <TextInput name="username" label="Username" focus />
        <PasswordInput name="password" label="Password" />
        <PasswordInput name="repeat" label="Repeat password" />
        <ActionButton
          type="submit"
          style={{
            marginTop: 20,
          }}
        >
          Sign up
        </ActionButton>
        <AlreadyHaveAccount />
      </AuthFormWrapper>
    </div>
  )
}

const DesktopSignUpForm = ({
  handleSignUp,
}: {
  handleSignUp: (data: unknown) => void
}) => (
  <div>
    <AuthFormWrapper handleSubmit={handleSignUp}>
      <AuthHeader>Sign Up</AuthHeader>
      <TextInput
        focus
        name="username"
        label="Username"
        labelProps={{
          className: 'text-sm',
        }}
      />
      <PasswordInput
        name="password"
        label="Password"
        labelProps={{
          className: 'text-sm',
        }}
      />
      <PasswordInput
        name="repeat"
        label="Repeat password"
        labelProps={{
          className: 'text-sm',
        }}
      />
      <div className="flex max-w-[500px] items-center justify-between py-3">
        <AlreadyHaveAccount />
        <ActionButton data-testid="login-submit-button" type="submit">
          Sign Up
        </ActionButton>
      </div>
    </AuthFormWrapper>
  </div>
)

const AlreadyHaveAccount = () => (
  <div className="text-center text-sm">
    Already have an account?{' '}
    <Link className="ml-1 font-bold underline" to={routes.login()}>
      Log In
    </Link>
  </div>
)
