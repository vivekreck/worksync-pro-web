import React, { forwardRef } from 'react'
import { User } from 'lucide-react'
import { Input } from './Input'

interface TextFieldProps {
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  disabled?: boolean
  placeholder?: string
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ name, value, onChange, error, disabled = false, placeholder, ...props }, ref) => {
    return (
      <Input
        name={name}
        ref={ref}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={error}
        disabled={disabled}
        leftIcon={<User className="w-4 h-4" />}
        required
        {...props}
      />
    )
  }
)

TextField.displayName = 'TextField'
