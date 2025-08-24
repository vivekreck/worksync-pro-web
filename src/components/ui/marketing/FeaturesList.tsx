import { FeatureCard } from '@/components/ui/marketing'
import { useState, useEffect, useRef } from 'react'
import { Zap, Users, Clipboard, Shield, TrendingUp } from 'lucide-react'

import { Feature } from '@/types'

const features: Feature[] = [
  {
    id: 'performance',
    title: 'Lightning Fast Performance',
    description: 'Instant loading and seamless interactions',
    icon: color => <Zap className={`w-6 h-6 ${color}`} />,
    highlightTitle: 'Lightning Fast\nPerformance',
  },
  {
    id: 'collaboration',
    title: 'Real-time Collaboration',
    description: 'Live editing, presence tracking, conflict free',
    icon: color => <Users className={`w-6 h-6 ${color}`} />,
    highlightTitle: 'Real-time\nCollaboration',
  },
  {
    id: 'project',
    title: 'Advanced Project Management',
    description: 'Kanban boards, task assignments, progress',
    icon: color => <Clipboard className={`w-6 h-6 ${color}`} />,
    highlightTitle: 'Advanced Project\nManagement',
  },
  {
    id: 'security',
    title: 'Enterprise Security',
    description: 'Bank-level encryption and role-based access',
    icon: color => <Shield className={`w-6 h-6 ${color}`} />,
    highlightTitle: 'Enterprise\nSecurity',
  },
  {
    id: 'insights',
    title: 'AI-Powered Insights',
    description: 'Predictive analytics and smart dashboards',
    icon: color => <TrendingUp className={`w-6 h-6 ${color}`} />,
    highlightTitle: 'AI-Powered\nInsights',
  },
]

interface FeaturesListProps {
  handleHighlightTitle: (highlightTitle: string) => void
}

export const FeaturesList = ({ handleHighlightTitle }: FeaturesListProps) => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState<number>(0)

  const extendedFeatures = [...features, ...features, ...features]
  const animationRef = useRef<number>()
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const ITEM_HEIGHT = 160
  const VISIBLE_ITEMS = 3
  const CONTAINER_HEIGHT = VISIBLE_ITEMS * ITEM_HEIGHT - 25
  const MIDDLE_INDEX = Math.floor(VISIBLE_ITEMS / 2)

  // Function to get centered scroll position for an index
  const getCenteredScrollPosition = (index: number) => {
    return (index + features.length) * ITEM_HEIGHT - MIDDLE_INDEX * ITEM_HEIGHT
  }

  // Initialize scroll position on mount to center the first feature
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = getCenteredScrollPosition(0)
    }
  }, [])

  // Auto-scroll functionality
  useEffect(() => {
    // Calculate current and target positions to keep active feature centered
    let currentPosition = getCenteredScrollPosition(activeFeatureIndex)
    let nextIndex = (activeFeatureIndex + 1) % features.length
    let targetPosition

    // Handle wraparound case - when going from last to first feature
    if (activeFeatureIndex === features.length - 1 && nextIndex === 0) {
      // Continue scrolling down to the next copy of the first feature
      targetPosition =
        (activeFeatureIndex + features.length + 1) * ITEM_HEIGHT - MIDDLE_INDEX * ITEM_HEIGHT
    } else {
      targetPosition = getCenteredScrollPosition(nextIndex)
    }

    const startTime = Date.now()
    const duration = 3000

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Smooth easing function
      const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)
      const easedProgress = easeInOut(progress)

      const currentScroll = currentPosition + (targetPosition - currentPosition) * easedProgress

      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = currentScroll
      }

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      } else {
        setActiveFeatureIndex(nextIndex)

        // If we just wrapped around, instantly reset scroll position to maintain seamless loop
        if (activeFeatureIndex === features.length - 1 && nextIndex === 0) {
          setTimeout(() => {
            if (scrollContainerRef.current) {
              scrollContainerRef.current.scrollTop = getCenteredScrollPosition(0)
            }
          }, 50)
        }
      }
    }

    const timeout = setTimeout(() => {
      animationRef.current = requestAnimationFrame(animate)
    }, 1000)

    return () => {
      clearTimeout(timeout)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [activeFeatureIndex, features.length])

  // Call handleHighlightTitle whenever activeFeatureIndex changes
  useEffect(() => {
    const activeFeature = features[activeFeatureIndex]
    handleHighlightTitle(activeFeature.highlightTitle)
  }, [activeFeatureIndex, handleHighlightTitle])

  const handleFeatureClick = (index: number) => {
    setActiveFeatureIndex(index)

    // Scroll to center the clicked feature
    if (scrollContainerRef.current) {
      const targetScroll = getCenteredScrollPosition(index)
      scrollContainerRef.current.scrollTop = targetScroll
    }
  }

  return (
    <div
      ref={scrollContainerRef}
      className="overflow-hidden relative mt-9"
      style={{
        height: `${CONTAINER_HEIGHT}px`,
        maskImage:
          'linear-gradient(to bottom, transparent 0%, hsl(var(--color-background)) 20%, hsl(var(--color-background)) 80%, transparent 100%)',
      }}
    >
      <div className="flex flex-col gap-5">
        {extendedFeatures.map((feature, index) => {
          const originalIndex = index % features.length
          const isActive = originalIndex === activeFeatureIndex

          return (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
              isActive={isActive}
              handleFeatureClick={handleFeatureClick}
              ITEM_HEIGHT={ITEM_HEIGHT}
              originalIndex={originalIndex}
            />
          )
        })}
      </div>
    </div>
  )
}
