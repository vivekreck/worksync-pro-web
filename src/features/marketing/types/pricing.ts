export interface PricingFeature {
  id: string
  name: string
  available: boolean
}

export interface PricingPlan {
  id: string
  name: string
  price: number
  period: string
  description: string
  features: PricingFeature[]
  isPopular?: boolean
  buttonText: string
  buttonVariant: 'primary' | 'secondary'
  maxUsers: number | string
  storage: string
  projects: number | string
  apiCalls: string
}
