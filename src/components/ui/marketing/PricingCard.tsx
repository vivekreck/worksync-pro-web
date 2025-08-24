import { PricingPlan } from '@/types'
import { CheckListItem } from './CheckListItem'

const PlanLimit = ({ title, content }: { title: string; content: string }) => {
  return (
    <div className="bg-[hsl(var(--color-muted))]/20 p-2 rounded">
      <div className="text-[hsl(var(--color-muted-foreground))]">{title}</div>
      <div className="font-semibold">{content}</div>
    </div>
  )
}

export const PricingCard = ({
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
        ${plan.isPopular ? 'border scale-105' : 'border-[hsl(var(--color-border))] border'}
        ${selectedPlan === plan.id ? 'ring-1 ring-[hsl(var(--color-ring))] ' : ''}
      `}
    >
      {plan.isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-[hsl(var(--color-accent)/0.3)] to-[hsl(var(--color-accent)/0.7)]">
          Most Popular
        </div>
      )}
      <div className="absolute -top-3 right-5 z-10">
        {isAnnual && plan.price > 0 && (
          <div className="bg-gradient-to-r from-[hsl(var(--color-accent-second)/0.7)] to-[hsl(var(--color-accent-second)/0.7)] px-3 py-1 rounded-full text-xs font-semibold shadow-lg mt-1">
            Save 17%
          </div>
        )}
      </div>

      <div className="relative">
        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>

        <div className="mb-4">
          <span className="text-4xl font-bold">${displayPrice}</span>
          <span className="text-[hsl(var(--color-muted-foreground))] text-lg">{plan.period}</span>
          {isAnnual && plan.price > 0 && (
            <div className="text-sm text-[hsl(var(--color-muted))] line-through">
              ${plan.price}
              {plan.period}
            </div>
          )}
        </div>

        <p className="text-[hsl(var(--color-muted-foreground))] mb-6 text-sm leading-relaxed">
          {plan.description}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6 text-xs">
          <PlanLimit title="Users" content={String(plan.maxUsers)} />
          <PlanLimit title="Storage" content={String(plan.storage)} />
          <PlanLimit title="Projects" content={String(plan.projects)} />
          <PlanLimit title="API Calls" content={String(plan.apiCalls)} />
        </div>

        <button
          onClick={() => onSelect(plan.id)}
          className={`
            w-full py-4 px-6 rounded-xl font-semibold text-sm transition-all duration-300 mb-8 transform hover:scale-105
            ${
              plan.buttonVariant === 'primary'
                ? 'bg-gradient-to-r from-[hsl(var(--color-accent-second)/0.3)] to-[hsl(var(--color-accent-second)/0.7)] shadow-lg hover:shadow-xl'
                : 'bg-gradient-to-r from-[hsl(var(--color-foreground)/0.3)] to-[hsl(var(--color-foreground)/0.6)]'
            }
          `}
        >
          {plan.buttonText}
        </button>

        <div>
          <h4 className="text-xs text-[hsl(var(--color-muted-foreground))] uppercase tracking-wider mb-4 text-center font-semibold">
            Features & Capabilities
          </h4>
          <ul className="space-y-3">
            {plan?.features?.map(feature => (
              <CheckListItem title={feature.name} available={feature.available} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
