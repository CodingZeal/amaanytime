import { useEffect } from 'react'

import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import { LoginForm } from 'src/components/Forms'
import { AuthLayout } from 'src/layouts'

export default function LoginPage() {
  const { isAuthenticated, logIn } = useAuth()

  const handleLogin = async (data: Record<string, unknown>) => {
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

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  return (
    <AuthLayout>
      <MetaTags title="Log In" />
      <div className="hidden lg:block"></div>
      <LoginForm handleLogin={handleLogin} />
    </AuthLayout>
  )
}
