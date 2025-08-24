import {
  HeroSection,
  AnimatedBackground,
  PlatformOverview,
  PricingSection,
  FeaturesSection,
  FooterSection,
} from '@/components/features/marketing'

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

        <FooterSection />
      </div>
    </div>
  )
}
