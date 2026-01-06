import React, { createContext, useContext, useEffect, ReactNode } from 'react'
import { AuthState } from '@/features/auth/types'
import { useAuth } from '@/features/auth/hooks'
import { authService } from '@/features/auth/services/authService'

interface AuthContextType extends AuthState {
  login: (credentials: any) => Promise<any>
  signup: (credentials: any) => Promise<any>
  socialLogin: (provider: 'google' | 'facebook' | 'github') => Promise<any>
  logout: () => void
  clearError: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const auth = useAuth()

  useEffect(() => {
    // Check for stored token on app load
    const token = localStorage.getItem('auth_token')
    if (token) {
      authService
        .verifyToken(token)
        .then(response => {
          if (response.success && response.data) {
            // Set user data without triggering login flow
          } else {
            localStorage.removeItem('auth_token')
          }
        })
        .catch(() => {
          localStorage.removeItem('auth_token')
        })
    }
  }, [])

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider')
  }
  return context
}
