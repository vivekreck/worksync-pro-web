import { useState } from 'react'
import { AuthLayout } from '@/components/layout'
import { SignupForm } from '@/components/ui/forms'

import { SignupCredentials } from '@/types'
import { useAuth } from '@/hooks/auth'
import { useNavigate } from 'react-router-dom'

export const SignupFeature = () => {
  const navigate = useNavigate()
  const { signup } = useAuth()
  const [loading, setLoading] = useState(false)

  const handleSignup = async (credentials: SignupCredentials) => {
    try {
      setLoading(true)
      await signup(credentials)
      navigate('/verify-email')
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout>
      <div className="space-y-6">
        <SignupForm onSubmit={handleSignup} loading={loading} />
      </div>
    </AuthLayout>
  )
}
