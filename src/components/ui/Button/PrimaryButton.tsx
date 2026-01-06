import React from 'react'

interface PrimaryButtonProps {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  className?: string
}

export const PrimaryButton = ({
  children,
  onClick,
  disabled = false,
  type = 'button',
  size = 'md',
  fullWidth = true,
  className = '',
}: PrimaryButtonProps) => {
  const sizeStyles = {
    sm: 'px-4 py-3 text-sm',
    md: 'px-6 py-4 text-base',
    lg: 'px-8 py-5 text-lg',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-white text-gray-900 
        font-medium
        rounded-full
        transition-all duration-200
        hover:bg-gray-50 hover:shadow-lg
        active:scale-[0.98] active:bg-gray-100
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:shadow-none disabled:active:scale-100
        focus:outline-none focus:ring-white focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-transparent
        ${sizeStyles[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `
        .trim()
        .replace(/\s+/g, ' ')}
    >
      {children}
    </button>
  )
}
