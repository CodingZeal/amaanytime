import { useAuth } from '@redwoodjs/auth'
import { Form } from '@redwoodjs/forms'
import { Link, routes, navigate } from '@redwoodjs/router'
import { toast } from '@redwoodjs/web/toast'

import BackgroundClip from 'src/assets/bg-clip.png'
import { useDevice } from 'src/hooks/useDevice'

import { ActionButton } from './ActionButton'
import { ForgotPasswordInput, TextInput } from './TextInputs'

export const LoginForms = () => {
  const { isIPad, isMobile } = useDevice()
  const { logIn } = useAuth()

  const handleSubmit = async (data: Record<string, unknown>) => {
    try {
      const { id, error } = await logIn({ ...data })

      if (error === 'User not Verified') {
        navigate(routes.verificationReset({ email: data.email as string }))
        return
      }

      if (error) {
        toast.error(error)
        return
      }

      if (id) {
        toast.success('Welcome back!')
        return
      }

      throw new Error('Something unexpected occured')
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message)
      }
      console.error(err)
    }
  }

  if (isMobile || isIPad) {
    return <MobileLoginForm handleSubmit={handleSubmit} />
  }

  return (
    <>
      <div></div>
      <DesktopLoginForm handleSubmit={handleSubmit} />
    </>
  )
}

const MobileLoginForm = ({
  handleSubmit,
}: {
  handleSubmit: (data: unknown) => void
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
      <div
        style={{
          transform: isIPad ? 'translateY(40px)' : 'translateY(40px)',
          background: `url(${BackgroundClip})`,
          padding: 8,
          margin: 0,
          lineHeight: 0.8,
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
        }}
        className="font-condensed text-[72px] uppercase"
      >
        Sign In
      </div>
      <Form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid black',
          padding: isIPad ? '40px' : '60px 1rem 1rem 0.6rem',
          marginBottom: 5,
          gap: isIPad ? '1.6em' : '',
        }}
        className="w-5/6"
      >
        <TextInput name="username" label="username" />
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
      </Form>
    </div>
  )
}

const DesktopLoginForm = ({
  handleSubmit,
}: {
  handleSubmit: (data: unknown) => void
}) => (
  <>
    <Form
      onSubmit={handleSubmit}
      className="flex w-5/6 translate-y-[-50px] flex-col gap-4 md:gap-6"
    >
      <div className="font-condensed text-[110px] uppercase md:leading-10">
        Sign In
      </div>
      <TextInput name="username" label="username" />
      <ForgotPasswordInput name="password" label="password" type="password" />
      <div className="flex max-w-[500px] items-center justify-between py-3">
        <DontHaveAccount />
        <ActionButton data-testid="login-submit-button" type="submit">
          Log In
        </ActionButton>
      </div>
    </Form>
  </>
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
