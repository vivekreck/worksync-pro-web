import React, { useState, forwardRef } from 'react'
import { Eye, EyeOff, Lock } from 'lucide-react'
import { Input } from './Input'

interface PasswordFieldProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  disabled?: boolean
  placeholder?: string
  showStrength?: boolean
}

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  (
    {
      value,
      onChange,
      error,
      disabled = false,
      placeholder = 'Enter your password',
      showStrength = false,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false)

    const getPasswordStrength = (
      password: string
    ): { score: number; label: string; color: string } => {
      if (!password) return { score: 0, label: '', color: '' }

      let score = 0
      if (password.length >= 8) score++
      if (/[a-z]/.test(password)) score++
      if (/[A-Z]/.test(password)) score++
      if (/\d/.test(password)) score++
      if (/[^A-Za-z0-9]/.test(password)) score++

      const labels = ['', 'Very Weak', 'Weak', 'Fair', 'Good', 'Strong']
      const colors = [
        '',
        'bg-red-500',
        'bg-red-400',
        'bg-yellow-500',
        'bg-blue-500',
        'bg-green-500',
      ]

      return {
        score,
        label: labels[score],
        color: colors[score],
      }
    }

    const passwordStrength = showStrength ? getPasswordStrength(value) : null

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword)
    }

    return (
      <div className="space-y-2">
        <Input
          ref={ref}
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          error={error}
          disabled={disabled}
          leftIcon={<Lock className="w-4 h-4" />}
          rightIcon={
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="hover:text-gray-600 focus:outline-none"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          }
          required
          {...props}
        />

        {showStrength && value && passwordStrength && (
          <div className="space-y-2">
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map(level => (
                <div
                  key={level}
                  className={`h-1 flex-1 rounded ${
                    level <= passwordStrength.score ? passwordStrength.color : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-gray-600">
              Password strength: <span className="font-medium">{passwordStrength.label}</span>
            </p>
          </div>
        )}
      </div>
    )
  }
)

PasswordField.displayName = 'PasswordField'
