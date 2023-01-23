import { useEffect } from 'react'

import { Form, Submit } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import {
  PasswordInput,
  TextInput,
} from 'src/components/Forms/TextInputs/TextInputs'
import { MainLayout } from 'src/layouts/MainLayout'

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const onSubmit = async (data) => {
    const response = await signUp({ ...data })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      toast.success('Welcome!')
    }
  }

  return (
    <MainLayout>
      <MetaTags title="Signup" />
      <main className="">
        <Form onSubmit={onSubmit} className="m-5">
          <h2 className="m-5">Signup</h2>
          <TextInput name="email" label="email" />
          <TextInput name="username" label="username" />
          <PasswordInput name="password" label="password" type="password" />
          <PasswordInput name="repeat" label="repeat" type="password" />
          <div className="m-5 flex items-center justify-between">
            <Submit className="rw-button rw-button-blue">Sign Up</Submit>
            <div>
              <span>Already have an account?</span>{' '}
              <Link to={routes.login()} className="rw-link">
                Log in!
              </Link>
            </div>
          </div>
        </Form>
      </main>
    </MainLayout>
  )
}

export default SignupPage
