import { LoginFeature } from '@/features/auth/components'
import { AnimatedBackground } from '@/features/marketing/components'

export const LoginPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[hsl(var(--color-background))] ">
      <AnimatedBackground />

      <div className="relative z-10 ">
        <LoginFeature />
      </div>
    </div>
  )
}
