import { HeroSection, AnimatedBackground } from '@/components/features/marketing'
import { PlatformOverview, PricingSection } from '@/components/features/marketing'
import FeaturesSection from '@/components/features/marketing/FeaturesSection'

export const LandingPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[hsl(var(--color-background))]">
      <AnimatedBackground />

      <div className="relative z-10">
        <HeroSection />
        <PlatformOverview />

        <FeaturesSection />

        <div className="hidden md:block">
          <PricingSection />
        </div>
      </div>
    </div>
  )
}
