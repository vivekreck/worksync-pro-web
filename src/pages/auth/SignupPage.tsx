import { SignupFeature } from '@/components/features/auth'
import { AnimatedBackground } from '@/components/features/marketing'

export const SignupPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[hsl(var(--color-background))]">
      <AnimatedBackground />

      <div className="relative z-10">
        <SignupFeature />
      </div>
    </div>
  )
}
