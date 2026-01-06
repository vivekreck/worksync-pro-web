import { AnimatedBackground, PricingSection } from '@/features/marketing/components'

export const PricingPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[hsl(var(--color-background))]">
      <AnimatedBackground />

      <div className="relative z-10">
        <PricingSection />
      </div>
    </div>
  )
}
