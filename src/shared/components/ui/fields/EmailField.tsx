import React, { forwardRef } from 'react'
import { Mail } from 'lucide-react'
import { Input } from './Input'

interface EmailFieldProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  disabled?: boolean
  placeholder?: string
}

export const EmailField = forwardRef<HTMLInputElement, EmailFieldProps>(
  (
    {
      value,
      onChange,
      error,
      disabled = false,
      placeholder = 'Enter your email address',
      ...props
    },
    ref
  ) => {
    return (
      <Input
        ref={ref}
        type="email"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={error}
        disabled={disabled}
        leftIcon={<Mail className="w-4 h-4" />}
        required
        {...props}
      />
    )
  }
)

EmailField.displayName = 'EmailField'
