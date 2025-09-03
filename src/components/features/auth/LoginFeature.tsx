import { useState } from 'react'
import { AuthLayout } from '@/components/layout'
import { LoginForm } from '@/components/ui/forms'

import { LoginCredentials } from '@/types'
import { useAuth } from '@/hooks/auth'
import { useNavigate } from 'react-router-dom'

export const LoginFeature = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [loading, setLoading] = useState(false)

  const handleLogin = async (credentials: LoginCredentials) => {
    try {
      setLoading(true)
      await login(credentials)
      navigate('/dashboard')
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout>
      <div className="space-y-6">
        <LoginForm onSubmit={handleLogin} loading={loading} />
      </div>
    </AuthLayout>
  )
}
