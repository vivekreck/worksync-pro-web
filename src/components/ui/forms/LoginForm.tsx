import React, { useState } from 'react'
import { LoginCredentials } from '@/types/forms/auth'
import { EmailField, PasswordField, Checkbox } from '@/components/ui/fields'
import { PrimaryButton } from '@/components/ui/Button'

interface LoginFormProps {
  onSubmit: (credentials: LoginCredentials) => void
  loading?: boolean
  error?: string | null
}

export const LoginForm = ({ onSubmit, loading = false }: LoginFormProps) => {
  const [formData, setFormData] = useState<LoginCredentials>({
    email: '',
    password: '',
    rememberMe: false,
  })

  const [errors, setErrors] = useState<Partial<LoginCredentials>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<LoginCredentials> = {}

    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit(formData)
    }
  }

  const handleFieldChange =
    (field: keyof LoginCredentials) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
      setFormData(prev => ({ ...prev, [field]: value }))

      // Clear error when user starts typing
      if (errors[field]) {
        setErrors(prev => ({ ...prev, [field]: undefined }))
      }
    }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center mb-10 mt-6">
        <h1 className="text-white text-xl font-medium">Sign in to your account</h1>
      </div>

      <EmailField
        value={formData.email}
        onChange={handleFieldChange('email')}
        error={errors.email}
        disabled={loading}
        placeholder="Email"
      />

      <PasswordField
        value={formData.password}
        onChange={handleFieldChange('password')}
        error={errors.password}
        disabled={loading}
        placeholder="Password"
        showStrength
      />

      <div className="flex items-center justify-between">
        <Checkbox
          checked={formData.rememberMe}
          onChange={handleFieldChange('rememberMe')}
          disabled={loading}
        >
          Remember me
        </Checkbox>

        <a href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800 underline">
          Forgot password?
        </a>
      </div>

      <PrimaryButton type="submit" fullWidth disabled={loading} size="sm">
        Sign In
      </PrimaryButton>
    </form>
  )
}
