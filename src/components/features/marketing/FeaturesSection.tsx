import React, { useState, useEffect, useRef } from 'react'
import { Zap, Users, Clipboard, Shield, TrendingUp } from 'lucide-react'

interface Feature {
  id: string
  title: string
  description: string
  icon: (color: string) => React.ReactNode
  highlightTitle: string
}

export const FeaturesSection = () => {
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

  const [activeFeatureIndex, setActiveFeatureIndex] = useState<number>(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()

  // Create multiple copies for seamless scrolling
  const extendedFeatures = [...features, ...features, ...features]
  const ITEM_HEIGHT = 160
  const VISIBLE_ITEMS = 3
  const CONTAINER_HEIGHT = VISIBLE_ITEMS * ITEM_HEIGHT - 25
  const MIDDLE_INDEX = Math.floor(VISIBLE_ITEMS / 2)

  // Function to get centered scroll position for an index
  const getCenteredScrollPosition = (index: number) => {
    return (index + features.length) * ITEM_HEIGHT - MIDDLE_INDEX * ITEM_HEIGHT
  }

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

  // Initialize scroll position on mount to center the first feature
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = getCenteredScrollPosition(0)
    }
  }, [])

  const handleFeatureClick = (index: number) => {
    setActiveFeatureIndex(index)

    // Scroll to center the clicked feature
    if (scrollContainerRef.current) {
      const targetScroll = getCenteredScrollPosition(index)
      scrollContainerRef.current.scrollTop = targetScroll
    }
  }

  const getActiveFeature = () => {
    return features[activeFeatureIndex]
  }

  return (
    <div className="min-h-screen px-10 py-20 lg:px-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-white">Everything Your Team Needs</h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Powerful features designed for modern teams who need to stay synchronized across projects,
          tasks, and communications.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-15 items-start">
          <div
            ref={scrollContainerRef}
            className="overflow-hidden relative mt-9"
            style={{
              height: `${CONTAINER_HEIGHT}px`,
              maskImage:
                'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
            }}
          >
            <div className="flex flex-col gap-5">
              {extendedFeatures.map((feature, index) => {
                const originalIndex = index % features.length
                const isActive = originalIndex === activeFeatureIndex

                return (
                  <div
                    key={`${feature.id}-${index}`}
                    className={`rounded-2xl p-8 shadow-lg border transition-all duration-500 ease-out cursor-pointer flex items-start gap-5 ${
                      isActive
                        ? 'border-[3px] border-transparent [border-image:linear-gradient(to_right,transparent,#3B82F6,transparent)_1]'
                        : 'border-[3px] border-transparent [border-image:linear-gradient(to_right,transparent,#ffffff,transparent)_1]'
                    }`}
                    style={{ height: `${ITEM_HEIGHT - 20}px` }}
                    onClick={() => handleFeatureClick(originalIndex)}
                  >
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      {feature.icon(isActive ? 'text-[#3B82F6]' : 'text-white')}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-semibold text-white mb-2 leading-tight`}>
                        {feature.title}
                      </h3>
                      <p className={`text-base text-white leading-relaxed font-normal`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="rounded-3xl p-20 flex items-center justify-center h-full sticky top-0 min-h-[400px] lg:min-h-[calc(100vh-200px)] transition-all duration-500 border-2 ml-5">
            <div className="text-center">
              <h2
                className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight transition-all duration-500 transform"
                dangerouslySetInnerHTML={{
                  __html: getActiveFeature()?.highlightTitle.replace(/\n/g, '<br>') || '',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
