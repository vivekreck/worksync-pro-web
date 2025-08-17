import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// features
import { DesktopMockup } from './DesktopMockup'
import { MobileMockup } from './MobileMockup'
import { AnimatedBackground } from './AnimatedBackground'

export function HeroSection() {
  return (
    <section className="h-[calc(100vh-60px)] relative overflow-hidden bg-[hsl(var(--color-background))] flex items-center justify-between px-16">
      {/* Background circles */}
      <AnimatedBackground />

      {/* Left content */}
      <div className="w-1/2 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl xl:text-8xl font-semibold tracking-tight">
            Teams sync, collaborate & deliver — in real time.
          </h1>
          <p className="mt-6 text-lg xl:text-2xl text-gray-400">
            The modern workspace platform that empowers teams to work together seamlessly. <br />
            Boost productivity by 40% with our intelligent collaboration tools.
          </p>
          <div className="mt-12 flex gap-6 items-center">
            <Link
              to="/signup"
              className="relative inline-block px-6 py-2 text-lg font-medium transition-colors duration-300 bg-white/25 backdrop-blur-md rounded-xl border border-white/25"
            >
              Get Started
            </Link>
            <Link
              to="#demo"
              className="text-base font-semibold text-gray-300 hover:text-white transition"
            >
              See Demo →
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Right visual */}
      <div className="w-1/2 flex justify-center relative isolate">
        <DesktopMockup />

        <div className="absolute right-10 bottom-[-40px] w-[250px] isolate">
          <MobileMockup />
        </div>
      </div>
    </section>
  )
}
