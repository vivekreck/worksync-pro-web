import { Heading, PricingCard } from '@/shared/components/ui/marketing'
import { useState, useCallback } from 'react'
import { PricingPlan } from '@/features/marketing/types'

const pricingPlans: PricingPlan[] = [
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
]

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

  return (
    <section id="pricing" className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Heading
            variant="section"
            title="Scale Your Team's Collaboration"
            subtitle="Choose the perfect plan for your team's needs. From startups to enterprise."
          />
        </div>

        <div className="flex items-center justify-center gap-4 mb-12">
          <span
            className={`text-sm ${!isAnnual ? 'text-[hsl(var(--color-foreground))]' : 'text-[hsl(var(--color-muted-foreground)/0.7)]'}`}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
              isAnnual
                ? 'bg-[hsl(var(--color-accent)/0.7)]'
                : 'bg-[hsl(var(--color-muted-foreground)/0.7)]'
            }`}
          >
            <div
              className={`absolute w-5 h-5 bg-[hsl(var(--color-foreground))] rounded-full top-1 transition-transform duration-300 ${
                isAnnual ? 'translate-x-8' : 'translate-x-1'
              }`}
            />
          </button>
          <span
            className={`text-sm ${isAnnual ? 'text-[hsl(var(--color-foreground))]' : 'text-[hsl(var(--color-muted-foreground)/0.7)]'}`}
          >
            Annual
          </span>
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
