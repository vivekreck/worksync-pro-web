import { ReactNode } from 'react'

interface AuthLayoutProps {
  children: ReactNode
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="border backdrop-blur-sm rounded-3xl p-8 shadow-2xl">{children}</div>
      </div>
    </div>
  )
}
