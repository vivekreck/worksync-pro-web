import { LoginCredentials, SignupCredentials, ApiResponse } from '@/features/auth/types'
import { User } from '@/shared/types/user'

class AuthService {
  private baseUrl = import.meta.env.REACT_APP_API_URL || 'http://localhost:3001/api'

  async login(credentials: LoginCredentials): Promise<ApiResponse<{ user: User; token: string }>> {
    try {
      const response = await fetch(`${this.baseUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      })

      const data = await response.json()

      if (!response.ok) {
        return {
          success: false,
          error: data.message || 'Login failed',
        }
      }

      return {
        success: true,
        data: data,
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Network error',
      }
    }
  }

  async signup(
    credentials: SignupCredentials
  ): Promise<ApiResponse<{ user: User; message: string }>> {
    try {
      const response = await fetch(`${this.baseUrl}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      })

      const data = await response.json()

      if (!response.ok) {
        return {
          success: false,
          error: data.message || 'Signup failed',
        }
      }

      return {
        success: true,
        data: data,
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Network error',
      }
    }
  }

  async socialLogin(
    provider: 'google' | 'facebook' | 'github'
  ): Promise<ApiResponse<{ user: User; token: string }>> {
    try {
      // In a real app, this would redirect to OAuth provider
      // For demo purposes, we'll simulate the flow
      const response = await fetch(`${this.baseUrl}/auth/${provider}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await response.json()

      if (!response.ok) {
        return {
          success: false,
          error: data.message || `${provider} login failed`,
        }
      }

      return {
        success: true,
        data: data,
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Network error',
      }
    }
  }

  async verifyToken(token: string): Promise<ApiResponse<User>> {
    try {
      const response = await fetch(`${this.baseUrl}/auth/verify`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })

      const data = await response.json()

      if (!response.ok) {
        return {
          success: false,
          error: data.message || 'Token verification failed',
        }
      }

      return {
        success: true,
        data: data.user,
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Network error',
      }
    }
  }
}

export const authService = new AuthService()
