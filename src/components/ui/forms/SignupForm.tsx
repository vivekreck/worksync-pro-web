import React, { useState } from 'react'
import { SignupCredentials, SignupErrors } from '@/types/forms/auth.ts'
import {
  EmailField,
  PasswordField,
  ConfirmPasswordField,
  TextField,
  TermsCheckbox,
} from '@/components/ui/fields'
import { PrimaryButton } from '@/components/ui/Button'

interface SignupFormProps {
  onSubmit: (credentials: SignupCredentials) => void
  loading?: boolean
  error?: string
}

export const SignupForm: React.FC<SignupFormProps> = ({ onSubmit, loading = false }) => {
  const [formData, setFormData] = useState<SignupCredentials>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  })

  const [errors, setErrors] = useState<SignupErrors>({})

  const validateForm = (): boolean => {
    const newErrors: SignupErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'You must accept the terms and conditions'
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
    (field: keyof SignupCredentials) => (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <h1 className="text-white text-xl font-medium">Sign up to your account</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextField
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleFieldChange('firstName')}
          error={errors.firstName}
          disabled={loading}
        />

        <TextField
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleFieldChange('lastName')}
          error={errors.lastName}
          disabled={loading}
        />
      </div>

      <EmailField
        value={formData.email}
        onChange={handleFieldChange('email')}
        error={errors.email}
        disabled={loading}
        placeholder="Enter your email address"
      />

      <PasswordField
        value={formData.password}
        onChange={handleFieldChange('password')}
        error={errors.password}
        disabled={loading}
        placeholder="Create Password"
        showStrength
      />

      <ConfirmPasswordField
        value={formData.confirmPassword}
        onChange={handleFieldChange('confirmPassword')}
        error={errors.confirmPassword}
        disabled={loading}
      />

      <TermsCheckbox
        checked={formData.acceptTerms}
        onChange={handleFieldChange('acceptTerms')}
        error={errors.acceptTerms}
        disabled={loading}
      />

      <PrimaryButton type="submit" fullWidth disabled={loading} size="sm">
        Sing Up
      </PrimaryButton>
    </form>
  )
}
