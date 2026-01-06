import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface LinkButtonProps {
  to: string
  children?: ReactNode
}

export const LinkButton = ({ to = '', children }: LinkButtonProps) => {
  return (
    <Link
      to={to}
      className="relative inline-block w-full sm:w-auto px-6 py-3 md:px-6 md:py-2 text-base md:text-lg font-medium transition-colors duration-300 
      bg-gradient-to-r from-[hsl(var(--color-accent)/0.3)] to-[hsl(var(--color-accent)/0.7)] 
      backdrop-blur-md rounded-xl text-center hover:opacity-80"
    >
      {children}
    </Link>
  )
}
