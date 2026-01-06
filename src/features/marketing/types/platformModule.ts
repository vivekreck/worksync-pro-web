import { ReactNode } from 'react'

export interface PlatformModule {
  id: string
  title: string
  description: string
  icon: ReactNode
  features: string[]
  borderColor: string
}
