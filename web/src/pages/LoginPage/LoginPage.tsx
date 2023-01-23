import { useEffect } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'

import { LoginForms } from 'src/components/Forms'
import { LoginLayout } from 'src/layouts/Login/LoginLayout'

export default function LoginPage() {
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  return (
    <LoginLayout>
      <LoginForms />
    </LoginLayout>
  )
}
