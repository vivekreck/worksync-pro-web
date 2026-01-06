import { motion } from 'framer-motion'

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Top-right glowing circle */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full"
        animate={{
          boxShadow: [
            '0 0 30px rgba(139, 92, 246, 0.6), 0 0 60px rgba(139, 92, 246, 0.4), inset 0 0 30px rgba(139, 92, 246, 0.3)',
            '0 0 50px rgba(139, 92, 246, 0.9), 0 0 100px rgba(139, 92, 246, 0.6), inset 0 0 50px rgba(139, 92, 246, 0.5)',
          ],
          x: [0, 20, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 4,
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
          x: [0, -25, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 5,
          delay: 1,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />

      {/* Middle floating circles */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full"
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          delay: 0.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-3/4 right-1/3 w-24 h-24 bg-white/5 rounded-full"
        animate={{
          y: [0, 25, 0],
          x: [0, 15, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 4,
          delay: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/8 rounded-full"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 3.5,
          delay: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}
