import React, { useState } from 'react'
import { Users, MessageSquare, BarChart3, FileText, CheckCircle, Target } from 'lucide-react'

interface PlatformModule {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  color: string
  borderColor: string
}

interface CardProps {
  hoveredModule: string | null
  module: PlatformModule
  setHoveredModule: React.Dispatch<React.SetStateAction<string | null>>
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
    color: 'from-blue-500 to-blue-600',
    borderColor: '#3B82F6',
  },
  {
    id: 'project-management',
    title: 'Project Management',
    description:
      'Intelligent project planning with Kanban boards, Gantt charts, and automated workflows',
    icon: <Target />,
    features: ['Kanban & Gantt views', 'Task dependencies', 'Sprint planning', 'Progress tracking'],
    color: 'from-purple-500 to-purple-600',
    borderColor: '#8B5CF6',
  },
  {
    id: 'communication',
    title: 'Communication Center',
    description: 'Integrated chat, video calls, and notification system to keep teams connected',
    icon: <MessageSquare />,
    features: ['Team messaging', 'Video conferencing', 'Screen sharing', 'Smart notifications'],
    color: 'from-green-500 to-green-600',
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
    color: 'from-orange-500 to-orange-600',
    borderColor: '#F97316',
  },
  {
    id: 'file-management',
    title: 'File Management',
    description:
      'Centralized file storage with version control, collaborative editing, and seamless integrations',
    icon: <FileText />,
    features: ['Cloud storage', 'Version control', 'File collaboration', 'External integrations'],
    color: 'from-cyan-500 to-cyan-600',
    borderColor: '#06B6D4',
  },
]

const Card = ({ hoveredModule, module, setHoveredModule }: CardProps) => {
  return (
    <div
      className={`backdrop-blur-md relative p-6 rounded-tl-[50px] rounded-br-[50px] border-2 transition-all duration-300 cursor-pointer group ${hoveredModule === module.id ? 'shadow-xl' : 'shadow-md hover:shadow-lg'}`}
      style={{
        borderColor: hoveredModule === module.id ? module.borderColor : '#374151',
      }}
      onMouseEnter={() => setHoveredModule(module.id)}
      onMouseLeave={() => setHoveredModule(null)}
    >
      <div className="flex justify-between align-middle">
        <h3 className="text-xl font-semibold text-white mb-2">{module.title}</h3>
        <div className={`inline-flex p-3 rounded-xl mb-4 text-white`}>{module.icon}</div>
      </div>

      <p className="text-white/80 mb-4 line-clamp-2">{module.description}</p>

      <div className="space-y-2 mb-6">
        {module.features.map((feature: string, idx: number) => (
          <div key={idx} className="flex items-center text-sm text-white/80">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <div
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10  transition-opacity duration-300`}
      />
    </div>
  )
}

export const PlatformOverview = () => {
  const [hoveredModule, setHoveredModule] = useState<string | null>(null)

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">One Platform, Complete Workflow</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Everything your team needs to collaborate, manage projects, and deliver results — all
            integrated seamlessly in one powerful platform.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {moduleListOne.map(module => (
            <div key={module.id} className="w-full max-w-sm">
              <Card
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
              <Card
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
