export interface ValidationError {
  field: string
  message: string
}

export interface ApiResponse<T = any> {
  data?: T
  error?: string
  success: boolean
  message?: string
}
