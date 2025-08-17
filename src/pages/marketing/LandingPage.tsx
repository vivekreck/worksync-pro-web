import { HeroSection, AnimatedBackground } from '@/components/features/marketing'
import { PlatformOverview } from '@/components/features/marketing/PlatformOverview'

export const LandingPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[hsl(var(--color-background))]">
      <AnimatedBackground />

      <div className="relative z-10">
        <HeroSection />
        <PlatformOverview />
      </div>
    </div>
  )
}
