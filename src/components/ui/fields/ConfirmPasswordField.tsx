import React, { forwardRef } from 'react'
import { Lock } from 'lucide-react'
import { Input } from './Input'

interface ConfirmPasswordFieldProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  disabled?: boolean
  placeholder?: string
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

export const ConfirmPasswordField = forwardRef<HTMLInputElement, ConfirmPasswordFieldProps>(
  (
    {
      value,
      onChange,
      error,
      disabled = false,
      placeholder = 'Confirm your password',
      onBlur,
      ...props
    },
    ref
  ) => {
    return (
      <Input
        ref={ref}
        type="password"
        label="Confirm Password"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
        disabled={disabled}
        leftIcon={<Lock className="w-4 h-4" />}
        autoComplete="new-password"
        required
        {...props}
      />
    )
  }
)

ConfirmPasswordField.displayName = 'ConfirmPasswordField'

export default ConfirmPasswordField
