import { useState, useCallback, useMemo } from 'react'

interface PricingFeature {
  id: string
  name: string
  available: boolean
}

interface PricingPlan {
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

const CheckIcon = ({ available }: { available: boolean }) => (
  <div
    className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
      available ? 'bg-green-400' : 'bg-gray-600'
    }`}
  >
    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  </div>
)

const FeatureList = ({ features }: { features: PricingFeature[] }) => (
  <ul className="space-y-3">
    {features.map(feature => (
      <li
        key={feature.id}
        className={`flex items-center gap-3 text-sm ${
          feature.available ? 'text-gray-200' : 'text-gray-500'
        }`}
      >
        <CheckIcon available={feature.available} />
        <span className={feature.available ? '' : 'line-through'}>{feature.name}</span>
      </li>
    ))}
  </ul>
)

const PricingCard = ({
  plan,
  selectedPlan,
  isAnnual,
  onSelect,
}: {
  plan: PricingPlan
  selectedPlan: string | null
  isAnnual: boolean
  onSelect: (planId: string) => void
}) => {
  const displayPrice = isAnnual && plan.price > 0 ? Math.round(plan.price * 10) : plan.price

  return (
    <div
      className={`
        relative backdrop-blur-md rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
        ${plan.isPopular ? 'border-green-400/30 border scale-105 shadow-xl shadow-green-400/30' : 'border-green-400/30 border'}
        ${selectedPlan === plan.id ? 'ring-1 ring-green-400/30 bg-green-300/10' : ''}
      `}
    >
      {plan.isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-white px-3 py-1 rounded-full text-sm font-semibold bg-green-500">
          Most Popular
        </div>
      )}
      <div className="absolute -top-3 right-5 z-10">
        {isAnnual && plan.price > 0 && (
          <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg mt-1">
            Save 17%
          </div>
        )}
      </div>

      <div className="relative">
        <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>

        <div className="mb-4">
          <span className="text-4xl font-bold text-white">${displayPrice}</span>
          <span className="text-gray-400 text-lg">{plan.period}</span>
          {isAnnual && plan.price > 0 && (
            <div className="text-sm text-gray-500 line-through">
              ${plan.price}
              {plan.period}
            </div>
          )}
        </div>

        <p className="text-gray-300 mb-6 text-sm leading-relaxed">{plan.description}</p>

        <div className="grid grid-cols-2 gap-4 mb-6 text-xs">
          <div className="bg-gray-700/50 p-2 rounded">
            <div className="text-gray-400">Users</div>
            <div className="font-semibold text-white">{plan.maxUsers}</div>
          </div>
          <div className="bg-gray-700/50 p-2 rounded">
            <div className="text-gray-400">Storage</div>
            <div className="font-semibold text-white">{plan.storage}</div>
          </div>
          <div className="bg-gray-700/50 p-2 rounded">
            <div className="text-gray-400">Projects</div>
            <div className="font-semibold text-white">{plan.projects}</div>
          </div>
          <div className="bg-gray-700/50 p-2 rounded">
            <div className="text-gray-400">API Calls</div>
            <div className="font-semibold text-white">{plan.apiCalls}</div>
          </div>
        </div>

        <button
          onClick={() => onSelect(plan.id)}
          className={`
            w-full py-4 px-6 rounded-xl font-semibold text-sm transition-all duration-300 mb-8 transform hover:scale-105
            ${
              plan.buttonVariant === 'primary'
                ? 'bg-green-500/30 text-white shadow-lg hover:shadow-xl'
                : 'bg-gray-700 hover:bg-gray-600 text-white border border-gray-600 hover:border-gray-500'
            }
          `}
        >
          {plan.buttonText}
        </button>

        <div>
          <h4 className="text-xs text-gray-400 uppercase tracking-wider mb-4 text-center font-semibold">
            Features & Capabilities
          </h4>
          <FeatureList features={plan.features} />
        </div>
      </div>
    </div>
  )
}
export function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [isAnnual, setIsAnnual] = useState(false)

  const handlePlanSelection = useCallback(
    (planId: string) => {
      setSelectedPlan(planId)
      console.log(`Plan selected: ${planId}, Annual: ${isAnnual}`)
    },
    [isAnnual]
  )

  const pricingPlans: PricingPlan[] = useMemo(
    () => [
      {
        id: 'starter',
        name: 'Starter',
        price: 0,
        period: '/month',
        description: 'Perfect for small teams getting started',
        maxUsers: 5,
        storage: '5GB',
        projects: 3,
        apiCalls: '1K/month',
        features: [
          { id: 'basic-kanban', name: 'Basic Kanban Boards', available: true },
          { id: 'file-storage', name: 'File Storage & Sharing', available: true },
          { id: 'task-management', name: 'Task Management', available: true },
          { id: 'team-chat', name: 'Team Chat', available: true },
          { id: 'advanced-analytics', name: 'Advanced Analytics', available: false },
          { id: 'custom-workflows', name: 'Custom Workflows', available: false },
        ],
        buttonText: 'Start Free',
        buttonVariant: 'secondary',
      },
      {
        id: 'professional',
        name: 'Professional',
        price: 29,
        period: '/user/month',
        description: 'Advanced features for growing teams',
        maxUsers: 50,
        storage: '100GB',
        projects: 'unlimited',
        apiCalls: '10K/month',
        features: [
          { id: 'everything-starter', name: 'Everything in Starter', available: true },
          { id: 'real-time-collab', name: 'Real-time Collaboration', available: true },
          { id: 'advanced-analytics', name: 'Advanced Analytics', available: true },
          { id: 'custom-workflows', name: 'Custom Workflows', available: true },
          { id: 'integrations', name: '50+ Integrations', available: true },
          { id: 'priority-support', name: 'Priority Support', available: true },
        ],
        isPopular: true,
        buttonText: 'Start Trial',
        buttonVariant: 'primary',
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        price: 99,
        period: '/user/month',
        description: 'Enterprise-grade security and scalability',
        maxUsers: 'unlimited',
        storage: '1TB+',
        projects: 'unlimited',
        apiCalls: 'Unlimited',
        features: [
          { id: 'everything-pro', name: 'Everything in Professional', available: true },
          { id: 'sso', name: 'Advanced SSO & SAML', available: true },
          { id: 'audit-logs', name: 'Audit Logs', available: true },
          { id: 'dedicated-support', name: 'Dedicated Support', available: true },
          { id: 'custom-integration', name: 'Custom Integrations', available: true },
          { id: 'sla', name: '99.9% SLA', available: true },
        ],
        buttonText: 'Contact Sales',
        buttonVariant: 'secondary',
      },
    ],
    []
  )

  return (
    <section className="min-h-screen p-8 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Scale Your Team's Collaboration</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the perfect plan for your team's needs. From startups to enterprise.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
              isAnnual ? 'bg-blue-500' : 'bg-gray-600'
            }`}
          >
            <div
              className={`absolute w-5 h-5 bg-white rounded-full top-1 transition-transform duration-300 ${
                isAnnual ? 'translate-x-8' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`text-sm ${isAnnual ? 'text-white' : 'text-gray-400'}`}>Annual</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map(plan => (
            <PricingCard
              key={plan.id}
              plan={plan}
              selectedPlan={selectedPlan}
              isAnnual={isAnnual}
              onSelect={handlePlanSelection}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
