import React, { useState } from 'react'
import { Users, MessageSquare, BarChart3, FileText, Target } from 'lucide-react'
import { Heading, PlatformCard } from '@/shared/components/ui/marketing'

interface PlatformModule {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  borderColor: string
}

const moduleListOne: PlatformModule[] = [
  {
    id: 'collaboration',
    title: 'Collaboration Hub',
    description:
      'Real-time collaboration with live editing, presence indicators, and seamless team coordination',
    icon: <Users />,
    features: [
      'Live document editing',
      'Presence indicators',
      'Comment & mention system',
      'Conflict resolution',
    ],
    borderColor: '#3B82F6',
  },
  {
    id: 'project-management',
    title: 'Project Management',
    description:
      'Intelligent project planning with Kanban boards, Gantt charts, and automated workflows',
    icon: <Target />,
    features: ['Kanban & Gantt views', 'Task dependencies', 'Sprint planning', 'Progress tracking'],
    borderColor: '#8B5CF6',
  },
  {
    id: 'communication',
    title: 'Communication Center',
    description: 'Integrated chat, video calls, and notification system to keep teams connected',
    icon: <MessageSquare />,
    features: ['Team messaging', 'Video conferencing', 'Screen sharing', 'Smart notifications'],
    borderColor: '#10B981',
  },
]

const moduleListTwo: PlatformModule[] = [
  {
    id: 'analytics',
    title: 'Analytics & Insights',
    description:
      'AI-powered analytics with performance metrics, productivity insights, and custom reports',
    icon: <BarChart3 />,
    features: [
      'Performance dashboards',
      'Time tracking',
      'Custom reports',
      'Productivity insights',
    ],
    borderColor: '#F97316',
  },
  {
    id: 'file-management',
    title: 'File Management',
    description:
      'Centralized file storage with version control, collaborative editing, and seamless integrations',
    icon: <FileText />,
    features: ['Cloud storage', 'Version control', 'File collaboration', 'External integrations'],
    borderColor: '#06B6D4',
  },
]

export const PlatformOverview = () => {
  const [hoveredModule, setHoveredModule] = useState<string | null>(null)

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Heading
            variant="section"
            title="One Platform, Complete Workflow"
            subtitle="Everything your team needs to collaborate, manage projects, and deliver results — all
            integrated seamlessly in one powerful platform."
          />
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {moduleListOne.map(module => (
            <div key={module.id} className="w-full max-w-sm">
              <PlatformCard
                key={module.id}
                hoveredModule={hoveredModule}
                module={module}
                setHoveredModule={setHoveredModule}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {moduleListTwo.map(module => (
            <div key={module.id} className="w-full max-w-sm">
              <PlatformCard
                hoveredModule={hoveredModule}
                module={module}
                setHoveredModule={setHoveredModule}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PlatformOverview
