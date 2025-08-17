import { motion } from 'framer-motion'

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden mx-auto">
      {/* Top-right glowing circle */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full"
        animate={{
          boxShadow: [
            '0 0 30px rgba(139, 92, 246, 0.6), 0 0 60px rgba(139, 92, 246, 0.4), inset 0 0 30px rgba(139, 92, 246, 0.3)',
            '0 0 50px rgba(139, 92, 246, 0.9), 0 0 100px rgba(139, 92, 246, 0.6), inset 0 0 50px rgba(139, 92, 246, 0.5)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />

      {/* Bottom-left glowing circle */}
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full"
        animate={{
          boxShadow: [
            '0 0 30px rgba(139, 92, 246, 0.6), 0 0 60px rgba(139, 92, 246, 0.4), inset 0 0 30px rgba(139, 92, 246, 0.3)',
            '0 0 50px rgba(139, 92, 246, 0.9), 0 0 100px rgba(139, 92, 246, 0.6), inset 0 0 50px rgba(139, 92, 246, 0.5)',
          ],
        }}
        transition={{
          duration: 2,
          delay: 1,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />

      {/* Middle bouncing circle (keep Tailwind animate) */}
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/10 rounded-full animate-bounce [animation-delay:0.5s]" />
    </div>
  )
}
