import { InputHTMLAttributes, ReactNode, forwardRef } from 'react'
import { cn } from '@/shared/utils/helpers/cn'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  helperText?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  fullWidth?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { error, helperText, leftIcon, rightIcon, fullWidth = true, className, required, ...props },
    ref
  ) => {
    console.log(required)
    return (
      <div className={cn('flex flex-col gap-1', fullWidth && 'w-full')}>
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            className={cn(
              'w-full bg-white/10 border rounded-3xl px-3 py-2.5 text-white placeholder-white/60',
              'focus:outline-none focus:bg-white/15 transition-colors duration-200',
              leftIcon && 'pl-9',
              rightIcon && 'pr-9',
              error
                ? 'border-red-500 focus:border-red-500'
                : 'border-white/20 focus:border-cyan-400',
              className
            )}
            {...props}
          />

          {rightIcon && (
            <div className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400">
              {rightIcon}
            </div>
          )}
        </div>

        {error && <span className="text-sm text-red-500">{error}</span>}

        {!error && helperText && <span className="text-sm text-gray-500">{helperText}</span>}
      </div>
    )
  }
)

Input.displayName = 'Input'
