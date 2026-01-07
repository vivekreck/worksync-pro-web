import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// features
import { DesktopMockup } from './DesktopMockup'
import { MobileMockup } from './MobileMockup'
import { LinkButton, Heading } from '@/shared/components/ui/marketing'

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-60px)] flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
    >
      {/* Left content */}
      <div className="w-full lg:w-1/2 relative z-10 text-center lg:text-left flex items-center justify-center lg:justify-start mt-10 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heading
            variant="hero"
            title="Teams sync, collaborate & deliver — Instantly."
            subtitle="The modern workspace platform that empowers teams to work together seamlessly. Boost productivity by 40% with our intelligent collaboration tools."
          />

          <div className="mt-8 md:mt-10 lg:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center lg:justify-start">
            <LinkButton to="/signup">Get Started</LinkButton>
            <Link
              to="#demo"
              className="text-sm md:text-base font-semibold text-gray-300 hover:text-white transition"
            >
              See Demo →
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Right visual */}
      <div className="w-full lg:w-1/2 flex justify-center relative isolate mt-8 lg:mt-0">
        {/* Desktop mockup - hidden on mobile + tab, visible from lg up */}
        <div className="hidden lg:block">
          <DesktopMockup />
        </div>

        {/* Mobile mockup positioning */}
        <div className="absolute md:-right-10 xl:-right-10 bottom-[-20px] md:bottom-[-30px] lg:bottom-[-40px] w-[180px] sm:w-[200px] md:w-[220px] lg:w-[250px] isolate">
          <div className="hidden lg:block 2xl:hidden">
            <MobileMockup size="medium" />
          </div>
          <div className="hidden 2xl:block">
            <MobileMockup size="large" />
          </div>
        </div>

        {/* Mobile-only: Show only mobile mockup centered */}
        <div className="md:hidden flex justify-center items-center">
          <div className="w-[280px] sm:w-[320px]">
            <MobileMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
