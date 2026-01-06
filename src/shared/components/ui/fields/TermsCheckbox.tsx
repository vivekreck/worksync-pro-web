// features/auth/components/fields/TermsCheckbox.tsx
import React, { forwardRef } from 'react'
import { Checkbox } from './Checkbox'

interface TermsCheckboxProps {
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  disabled?: boolean
}

export const TermsCheckbox = forwardRef<HTMLInputElement, TermsCheckboxProps>(
  ({ checked, onChange, error, disabled = false, ...props }, ref) => {
    return (
      <Checkbox
        ref={ref}
        checked={checked}
        onChange={onChange}
        error={error}
        disabled={disabled}
        {...props}
      >
        I agree to the{' '}
        <a
          href="/terms"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Terms of Service
        </a>{' '}
        and{' '}
        <a
          href="/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Privacy Policy
        </a>
      </Checkbox>
    )
  }
)

TermsCheckbox.displayName = 'TermsCheckbox'
