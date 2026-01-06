import { ReactNode } from 'react'

export interface Feature {
  id: string
  title: string
  description: string
  icon: (color: string) => ReactNode
  highlightTitle: string
}

export interface FeatureCardProps {
  feature: Feature
  index: number
  isActive: boolean
  handleFeatureClick: (index: number) => void
  ITEM_HEIGHT: number
  originalIndex: number
}
