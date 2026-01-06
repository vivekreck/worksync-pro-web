import React from 'react'

import {
  Search,
  Bell,
  Plus,
  ArrowRight,
  Users,
  MessageSquare,
  FolderOpen,
  BarChart3,
  Calendar,
  FileText,
  Clock,
  CheckSquare,
  Zap,
  Target,
  Activity,
} from 'lucide-react'
import { SlideAnimation } from '@/shared/components/SlideAnimation'

export const DesktopMockup = () => {
  const currentTheme = {
    primary:
      'bg-[hsl(var(--color-accent)/0.2)] hover:bg-[hsl(var(--color-accent)/0.3)] border-[hsl(var(--color-accent)/0.3)]',
    primaryText: 'text-[hsl(var(--color-accent))]',
    gradient: 'from-[hsl(var(--color-accent)/0.3)] to-[hsl(var(--color-accent)/0.5)]',
    banner: 'from-[hsl(var(--color-accent)/0.2)] to-[hsl(var(--color-accent)/0.3)]',
    accent: 'bg-[hsl(var(--color-accent)/0.2)] border-[hsl(var(--color-accent)/0.3)]',
    border: 'border-[hsl(var(--color-accent)/0.4)]',
    dot: 'bg-[hsl(var(--color-accent))]',
    glass: 'bg-[hsl(var(--color-accent)/0.1)]',
  }

  const scaleClass = {
    container: 'max-w-3xl text-xs',
    height: 'h-[180px]',
    padding: 'p-1',
    gap: 'gap-1',
    iconSize: 'w-2 h-2',
    avatarSize: 'w-2 h-2',
    spacing: 'space-y-0',
    bottomHeight: 'max-h-52',
  }

  // Glassmorphism classes using global variables
  const glassClasses = {
    panel: `backdrop-blur-xl bg-[hsl(var(--color-card)/0.5)] border border-[hsl(var(--color-border)/0.5)] shadow-[var(--shadow-lg)]`,
    innerPanel: `backdrop-blur-lg bg-[hsl(var(--color-card)/0.5)] border border-[hsl(var(--color-border)/0.5)]`,
    card: `backdrop-blur-md bg-[hsl(var(--color-card)/0.5)] border border-[hsl(var(--color-border)/0.5)]`,
    header: `backdrop-blur-lg bg-[hsl(var(--color-background)/0.8)] border-b border-[hsl(var(--color-border)/0.5)]`,
    active: `backdrop-blur-md ${currentTheme.accent} border`,
    button: `backdrop-blur-md ${currentTheme.primary} border`,
    banner: `backdrop-blur-lg bg-gradient-to-r ${currentTheme.banner} border border-[hsl(var(--color-border)/0.8)]`,
  }

  const AnimatedPanel = ({
    children,
    delay = 0,
    className = '',
  }: {
    children: React.ReactNode
    delay: number
    className?: string
  }) => (
    <div
      className={`transition-all duration-1000 ease-out transform opacity-100 translate-y-0 blur-0 ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )

  return (
    <div
      className={`${scaleClass.container} mx-auto bg-[hsl(var(--color-background)/0.7)] backdrop-blur-md`}
    >
      {/* Background with gradient */}
      <div className="relative transform hover:scale-105 transition-transform duration-700">
        <div className="absolute inset-0 rounded-lg"></div>

        <div
          className={`${glassClasses.panel} rounded-lg transform rotate-x-2 hover:rotate-x-0 transition-transform duration-700 relative`}
        >
          {/* Browser Header */}
          <div
            className={`flex items-center justify-between ${glassClasses.header} px-3 py-2 rounded-t-lg`}
          >
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 bg-red-400/80 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-400/80 rounded-full"></div>
                <div className="w-2 h-2 bg-green-400/80 rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-[hsl(var(--color-muted-foreground))]">
              <ArrowRight className={scaleClass.iconSize} />
              <div
                className={`${scaleClass.container.includes('text-xs') ? 'text-xs' : 'text-sm'} font-medium hidden sm:block`}
              >
                WorkSync Pro - Where Teams Sync, Work Flows
              </div>
            </div>
          </div>

          {/* Main Interface */}
          <SlideAnimation direction="up" delay={0.1} duration={1}>
            <div className={`${scaleClass.padding} rounded-b-lg`}>
              <div className={`grid grid-cols-12 ${scaleClass.gap} ${scaleClass.height}`}>
                {/* Sidebar */}
                <AnimatedPanel delay={400} className="col-span-4 lg:col-span-3">
                  <div
                    className={`${glassClasses.innerPanel} h-full rounded-lg p-3 shadow-[var(--shadow-lg)]`}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div
                        className={`w-6 h-6 bg-gradient-to-r ${currentTheme.gradient} rounded-lg flex items-center justify-center backdrop-blur-sm`}
                      >
                        <Zap className="w-3 h-3 text-[hsl(var(--color-primary))]" />
                      </div>
                      <span className="text-[hsl(var(--color-foreground))] font-semibold text-sm hidden lg:block">
                        WorkSync Pro
                      </span>
                    </div>

                    <nav className={scaleClass.spacing}>
                      {[
                        { name: 'Dashboard', icon: BarChart3, active: true },
                        { name: 'Projects', icon: FolderOpen },
                        { name: 'Tasks', icon: CheckSquare },
                        { name: 'Calendar', icon: Calendar },
                        { name: 'Documents', icon: FileText },
                        { name: 'Chat', icon: MessageSquare },
                      ].map(item => (
                        <div
                          key={item.name}
                          className={`flex items-center gap-2 p-1.5 rounded-lg transition-all cursor-pointer ${
                            item.active
                              ? `${glassClasses.active} text-[hsl(var(--color-primary))] shadow-[var(--shadow-md)]`
                              : 'text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-muted)/0.5)] hover:text-[hsl(var(--color-foreground))]'
                          }`}
                        >
                          <item.icon className={scaleClass.iconSize} />
                          <span className="text-xs font-medium hidden lg:block">{item.name}</span>
                        </div>
                      ))}
                    </nav>

                    <div className="mt-4 invisible">
                      <div className="text-xs text-[hsl(var(--color-muted-foreground))] uppercase tracking-wide mb-2">
                        Recent
                      </div>
                      <div className={scaleClass.spacing}>
                        <div className="flex items-center gap-2 p-1.5 rounded-lg text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-muted)/0.5)] cursor-pointer">
                          <div className={`w-1.5 h-1.5 ${currentTheme.dot} rounded-full`}></div>
                          <span className="text-xs">Mobile App</span>
                        </div>
                        <div className="flex items-center gap-2 p-1.5 rounded-lg text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-muted)/0.5)] cursor-pointer">
                          <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                          <span className="text-xs">API Integration</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 invisible">
                      <div className="text-xs text-[hsl(var(--color-muted-foreground))] uppercase tracking-wide mb-2 hidden lg:block">
                        Team
                      </div>
                      <div className="flex -space-x-1.5 justify-center lg:justify-start">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className={`${scaleClass.avatarSize} bg-gradient-to-r from-purple-400/80 to-pink-400/80 rounded-full border-2 border-[hsl(var(--color-border)/0.8)] flex items-center justify-center text-[hsl(var(--color-primary))] text-xs font-medium backdrop-blur-sm`}
                          >
                            {String.fromCharCode(65 + i)}
                          </div>
                        ))}
                        <div
                          className={`${scaleClass.avatarSize} bg-[hsl(var(--color-muted)/0.5)] rounded-full border-2 border-[hsl(var(--color-border)/0.8)] flex items-center justify-center text-[hsl(var(--color-muted-foreground))] text-xs backdrop-blur-sm`}
                        >
                          +2
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedPanel>

                {/* Main Content */}
                <AnimatedPanel delay={600} className="col-span-8 lg:col-span-9">
                  <div
                    className={`${glassClasses.innerPanel} h-full rounded-lg shadow-[var(--shadow-lg)]`}
                  >
                    {/* Header */}
                    <div
                      className={`flex items-center justify-between p-3 ${glassClasses.header} rounded-t-lg`}
                    >
                      <div className="flex items-center gap-3">
                        <h1 className="text-[hsl(var(--color-foreground))] text-sm lg:text-lg font-bold">
                          Dashboard
                        </h1>
                        <div className="flex items-center gap-1.5 bg-[hsl(var(--color-accent)/0.2)] border border-[hsl(var(--color-accent)/0.3)] px-2 py-1 rounded-full backdrop-blur-sm">
                          <div className="w-1.5 h-1.5 bg-[hsl(var(--color-accent))] rounded-full"></div>
                          <span className="text-[hsl(var(--color-accent))] text-xs font-medium hidden sm:block">
                            5 online
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-1.5 hover:bg-[hsl(var(--color-muted)/0.5)] rounded-lg transition-colors backdrop-blur-sm">
                          <Search
                            className={`${scaleClass.iconSize} text-[hsl(var(--color-muted-foreground))]`}
                          />
                        </button>
                        <button className="p-1.5 hover:bg-[hsl(var(--color-muted)/0.5)] rounded-lg transition-colors relative backdrop-blur-sm">
                          <Bell
                            className={`${scaleClass.iconSize} text-[hsl(var(--color-muted-foreground))]`}
                          />
                          <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-400 rounded-full"></div>
                        </button>
                        <button
                          className={`flex items-center gap-1.5 ${glassClasses.button} px-2 py-1.5 rounded-lg transition-colors`}
                        >
                          <Plus className="w-3 h-3 text-[hsl(var(--color-primary))]" />
                          <span className="text-[hsl(var(--color-primary))] text-xs font-medium hidden sm:block">
                            New
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className={`p-3 overflow-y-auto ${scaleClass.bottomHeight}`}>
                      {/* Real-time Collaboration Banner */}
                      <div className={`${glassClasses.banner} rounded-lg p-3 mb-4`}>
                        <div className="flex items-center gap-2">
                          <Users
                            className={`${scaleClass.iconSize} text-[hsl(var(--color-primary))]`}
                          />
                          <div>
                            <div className="text-[hsl(var(--color-primary))] font-medium text-xs">
                              Live Collaboration
                            </div>
                            <div className="text-[hsl(var(--color-muted-foreground))] text-xs hidden sm:block">
                              3 members editing
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Task Board Preview */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                        <div className={`${glassClasses.card} rounded-lg p-3`}>
                          <div className="flex items-center gap-2 mb-2">
                            <Clock className="w-3 h-3 text-yellow-400" />
                            <span className="text-[hsl(var(--color-foreground))] font-medium text-xs">
                              To Do
                            </span>
                            <span className="bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 px-1.5 py-0.5 rounded-full text-xs font-bold backdrop-blur-sm">
                              3
                            </span>
                          </div>
                          <div className="space-y-1.5">
                            <div
                              className={`${glassClasses.card} p-2 rounded border-l-2 border-yellow-400/60 cursor-pointer hover:bg-[hsl(var(--color-muted)/0.5)] transition-colors`}
                            >
                              <div className="text-[hsl(var(--color-foreground))] text-xs font-medium">
                                Setup auth system
                              </div>
                              <div className="text-[hsl(var(--color-muted-foreground))] text-xs mt-1">
                                Due: Tomorrow
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className={`${glassClasses.card} rounded-lg p-3`}>
                          <div className="flex items-center gap-2 mb-2">
                            <Activity className={`w-3 h-3 ${currentTheme.primaryText}`} />
                            <span className="text-[hsl(var(--color-foreground))] font-medium text-xs">
                              In Progress
                            </span>
                            <span className="bg-blue-400/20 border border-blue-400/40 text-blue-300 px-1.5 py-0.5 rounded-full text-xs font-bold backdrop-blur-sm">
                              2
                            </span>
                          </div>
                          <div className="space-y-1.5">
                            <div
                              className={`${glassClasses.card} p-2 rounded border-l-2 ${currentTheme.border} cursor-pointer hover:bg-[hsl(var(--color-muted)/0.5)] transition-colors`}
                            >
                              <div className="text-[hsl(var(--color-foreground))] text-xs font-medium">
                                Real-time engine
                              </div>
                              <div className="text-[hsl(var(--color-muted-foreground))] text-xs mt-1">
                                Sarah • 60%
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className={`${glassClasses.card} rounded-lg p-3`}>
                          <div className="flex items-center gap-2 mb-2">
                            <Target className="w-3 h-3 text-green-400" />
                            <span className="text-[hsl(var(--color-foreground))] font-medium text-xs">
                              Done
                            </span>
                            <span className="bg-green-400/20 border border-green-400/40 text-green-300 px-1.5 py-0.5 rounded-full text-xs font-bold backdrop-blur-sm">
                              5
                            </span>
                          </div>
                          <div className="space-y-1.5">
                            <div
                              className={`${glassClasses.card} p-2 rounded border-l-2 border-green-400/60 cursor-pointer hover:bg-[hsl(var(--color-muted)/0.5)] transition-colors`}
                            >
                              <div className="text-[hsl(var(--color-foreground))] text-xs font-medium">
                                Project setup
                              </div>
                              <div className="text-[hsl(var(--color-muted-foreground))] text-xs mt-1">
                                2 days ago
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Recent Activity */}
                      <div className={`${glassClasses.card} rounded-lg p-3`}>
                        <div className="flex items-center gap-2 mb-3">
                          <Activity className={`w-4 h-4 ${currentTheme.primaryText}`} />
                          <span className="text-[hsl(var(--color-foreground))] font-medium text-xs">
                            Recent Activity
                          </span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 p-1.5 hover:bg-[hsl(var(--color-muted)/0.5)] rounded transition-colors">
                            <div
                              className={`w-6 h-6 bg-gradient-to-r ${currentTheme.gradient} rounded-full flex items-center justify-center text-[hsl(var(--color-primary))] text-xs font-bold backdrop-blur-sm border border-[hsl(var(--color-border)/0.8)]`}
                            >
                              SC
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-[hsl(var(--color-foreground))] text-xs truncate">
                                Sarah updated collaboration engine
                              </div>
                              <div className="text-[hsl(var(--color-muted-foreground))] text-xs">
                                2 min ago
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 p-1.5 hover:bg-[hsl(var(--color-muted)/0.5)] rounded transition-colors">
                            <div className="w-6 h-6 bg-gradient-to-r from-green-400/60 to-blue-500/60 rounded-full flex items-center justify-center text-[hsl(var(--color-primary))] text-xs font-bold backdrop-blur-sm border border-[hsl(var(--color-border)/0.8)]">
                              AK
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-[hsl(var(--color-foreground))] text-xs truncate">
                                Alex completed TypeScript config
                              </div>
                              <div className="text-[hsl(var(--color-muted-foreground))] text-xs">
                                1 hour ago
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedPanel>
              </div>

              {/* Bottom Panels */}
              <div
                className={`grid grid-cols-1 sm:grid-cols-3 ${scaleClass.gap} mt-4 flex items-end `}
              >
                <AnimatedPanel
                  delay={800}
                  className="bg-[hsl(var(--color-background))] backdrop-blur-md"
                >
                  <div
                    className={`${glassClasses.card} rounded-lg p-3 shadow-[var(--shadow-lg)] hover:shadow-[var(--shadow-lg)] transition-shadow `}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <BarChart3 className={`${scaleClass.iconSize} ${currentTheme.primaryText}`} />
                      <span className="text-[hsl(var(--color-foreground))] font-medium text-xs">
                        Analytics
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[hsl(var(--color-muted-foreground))] text-xs">
                          Completed
                        </span>
                        <span className="text-green-400 font-bold text-xs">23/31</span>
                      </div>
                      <div className="w-full bg-[hsl(var(--color-muted)/0.5)] rounded-full h-1.5 backdrop-blur-sm">
                        <div
                          className="bg-green-400 h-1.5 rounded-full"
                          style={{ width: '74%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </AnimatedPanel>

                <AnimatedPanel
                  delay={1000}
                  className="bg-[hsl(var(--color-background))] backdrop-blur-md"
                >
                  <div
                    className={`${glassClasses.card} rounded-lg p-3 shadow-[var(--shadow-lg)] hover:shadow-[var(--shadow-lg)] transition-shadow`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <MessageSquare className={`${scaleClass.iconSize} text-green-400`} />
                      <span className="text-[hsl(var(--color-primary))] font-medium text-xs">
                        Team Chat
                      </span>
                    </div>
                    <div className="space-y-1.5">
                      <div className={`${glassClasses.card} p-2 rounded text-xs`}>
                        <div className="text-purple-300 font-medium">Sarah: </div>
                        <div className="text-[hsl(var(--color-foreground)/0.8)]">
                          Just pushed WebSocket!
                        </div>
                      </div>
                      <div className={`${glassClasses.card} p-2 rounded text-xs`}>
                        <div className={`${currentTheme.primaryText} font-medium`}>Alex: </div>
                        <div className="text-[hsl(var(--color-foreground)/0.8)]">
                          Testing now 🚀
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedPanel>

                <AnimatedPanel
                  delay={1200}
                  className="bg-[hsl(var(--color-background))] backdrop-blur-md"
                >
                  <div
                    className={`${glassClasses.card} rounded-lg p-3 shadow-[var(--shadow-lg)] hover:shadow-[var(--shadow-lg)] transition-shadow`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className={`${scaleClass.iconSize} ${currentTheme.primaryText}`} />
                      <span className="text-[hsl(var(--color-foreground))] font-medium text-xs">
                        Deadlines
                      </span>
                    </div>
                    <div className="space-y-1.5">
                      <div
                        className={`flex items-center justify-between ${glassClasses.card} p-2 rounded`}
                      >
                        <span className="text-[hsl(var(--color-foreground)/0.8)] text-xs">
                          Sprint Review
                        </span>
                        <span className="text-orange-400 text-xs">Tomorrow</span>
                      </div>
                      <div
                        className={`flex items-center justify-between ${glassClasses.card} p-2 rounded`}
                      >
                        <span className="text-[hsl(var(--color-foreground)/0.8)] text-xs">
                          Beta Release
                        </span>
                        <span className="text-red-400 text-xs">Dec 25</span>
                      </div>
                    </div>
                  </div>
                </AnimatedPanel>
              </div>
            </div>
          </SlideAnimation>
        </div>
      </div>
    </div>
  )
}
