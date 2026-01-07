import { InputHTMLAttributes, ReactNode, forwardRef } from 'react'
import { Check } from 'lucide-react'
import { cn } from '@/shared/utils/helpers/cn'

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: ReactNode
  error?: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, className, children, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative flex items-center">
            <input ref={ref} type="checkbox" className="sr-only" {...props} />
            <div
              className={cn(
                'w-5 h-5 border-2 rounded flex items-center justify-center transition-all duration-200',
                'group-hover:border-blue-400',
                props.checked ? 'bg-blue-600 border-blue-600' : 'border-gray-300 bg-white',
                error && 'border-red-300',
                className
              )}
            >
              {props.checked && <Check className="w-3 h-3 text-white" />}
            </div>
          </div>

          <div className="flex-1 text-sm text-gray-700 leading-5">{children || label}</div>
        </label>

        {error && <span className="text-sm text-red-600 ml-8">{error}</span>}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'
