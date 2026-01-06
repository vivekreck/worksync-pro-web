import { useState, useCallback } from 'react'
import { LoginCredentials, SignupCredentials, AuthState } from '@/features/auth/types'
import { authService } from '@/features/auth/services/authService'

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isLoading: false,
    isAuthenticated: false,
    error: null,
  })

  const login = useCallback(async (credentials: LoginCredentials) => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }))

    try {
      const response = await authService.login(credentials)
      if (response.success && response.data) {
        setAuthState(prev => ({
          ...prev,
          user: response?.data?.user || null,
          isAuthenticated: true,
          isLoading: false,
        }))

        // Store token if provided
        if (response.data.token) {
          localStorage.setItem('auth_token', response.data.token)
        }

        return response.data
      } else {
        throw new Error(response.error || 'Login failed')
      }
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : 'Login failed',
        isLoading: false,
      }))
      throw error
    }
  }, [])

  const signup = useCallback(async (credentials: SignupCredentials) => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }))

    try {
      const response = await authService.signup(credentials)
      if (response.success) {
        setAuthState(prev => ({
          ...prev,
          isLoading: false,
        }))
        return response.data
      } else {
        throw new Error(response.error || 'Signup failed')
      }
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : 'Signup failed',
        isLoading: false,
      }))
      throw error
    }
  }, [])

  const socialLogin = useCallback(async (provider: 'google' | 'facebook' | 'github') => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }))

    try {
      const response = await authService.socialLogin(provider)
      if (response.success && response.data) {
        setAuthState(prev => ({
          ...prev,
          user: response?.data?.user || null,
          isAuthenticated: true,
          isLoading: false,
        }))

        if (response.data.token) {
          localStorage.setItem('auth_token', response.data.token)
        }

        return response.data
      } else {
        throw new Error(response.error || `${provider} login failed`)
      }
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : `${provider} login failed`,
        isLoading: false,
      }))
      throw error
    }
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem('auth_token')
    setAuthState({
      user: null,
      isLoading: false,
      isAuthenticated: false,
      error: null,
    })
  }, [])

  const clearError = useCallback(() => {
    setAuthState(prev => ({ ...prev, error: null }))
  }, [])

  return {
    ...authState,
    login,
    signup,
    socialLogin,
    logout,
    clearError,
  }
}
