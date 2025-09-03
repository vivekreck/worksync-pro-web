import React, { forwardRef } from 'react'
import { Lock } from 'lucide-react'
import { Input } from './Input'

interface ConfirmPasswordFieldProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  disabled?: boolean
  placeholder?: string
}

export const ConfirmPasswordField = forwardRef<HTMLInputElement, ConfirmPasswordFieldProps>(
  (
    { value, onChange, error, disabled = false, placeholder = 'Confirm your password', ...props },
    ref
  ) => {
    return (
      <Input
        ref={ref}
        type="password"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={error}
        disabled={disabled}
        leftIcon={<Lock className="w-4 h-4" />}
        required
        {...props}
      />
    )
  }
)

ConfirmPasswordField.displayName = 'ConfirmPasswordField'

export default ConfirmPasswordField
