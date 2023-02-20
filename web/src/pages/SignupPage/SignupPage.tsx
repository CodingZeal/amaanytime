import { useEffect } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { SignUpForm } from 'src/components/Forms'
import { AuthLayout } from 'src/layouts/Auth/AuthLayout'

export default function SignUpPage() {
  const { signUp } = useAuth()

  const { isAuthenticated } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const handleSignUp = async (data: Record<string, unknown>) => {
    try {
      const { id, error } = await signUp({ ...data })

      if (error === 'User not Verified') {
        navigate(routes.verificationReset({ email: data.email as string }))
        return
      }

      if (error) {
        toast.error(error)
        return
      }

      if (id) {
        toast.success(
          'Account created!\nCheck your email for a verification link.'
        )
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

  return (
    <AuthLayout>
      <MetaTags title="Sign Up" />
      <div className="hidden lg:block"></div>
      <SignUpForm handleSignUp={handleSignUp} />
    </AuthLayout>
  )
}
