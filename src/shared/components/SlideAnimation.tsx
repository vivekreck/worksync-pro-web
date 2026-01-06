import React from 'react'
import { motion, Variants } from 'framer-motion'

type SlideDirection = 'up' | 'down' | 'left' | 'right'

interface SlideAnimationProps {
  children: React.ReactNode
  direction?: SlideDirection
  duration?: number
  delay?: number
  distance?: number
  className?: string
  once?: boolean
}

const createSlideVariants = (direction: SlideDirection, distance: number): Variants => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, opacity: 0 }
      case 'down':
        return { y: -distance, opacity: 0 }
      case 'left':
        return { x: distance, opacity: 0 }
      case 'right':
        return { x: -distance, opacity: 0 }
      default:
        return { y: distance, opacity: 0 }
    }
  }

  return {
    hidden: getInitialPosition(),
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 120,
      },
    },
  }
}

export const SlideAnimation = ({
  children,
  direction = 'up',
  duration = 0.6,
  delay = 0,
  distance = 100,
  className = '',
  once = true,
}: SlideAnimationProps) => {
  const variants = createSlideVariants(direction, distance)

  const customVariants: Variants = {
    ...variants,
    visible: {
      ...variants.visible,
      transition: {
        duration,
        delay,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.div
      className={className}
      variants={customVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once }}
      whileInView={once ? undefined : 'visible'}
    >
      {children}
    </motion.div>
  )
}
