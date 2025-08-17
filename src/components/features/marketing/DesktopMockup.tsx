import React from 'react'
type ScaleName = 'sm' | 'md' | 'lg'

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

export const DesktopMockup = ({ scale = 'sm' }: { scale?: ScaleName }) => {
  const currentTheme = {
    primary: 'bg-green-500/20 hover:bg-green-500/30 border-green-400/30',
    primaryText: 'text-green-300',
    gradient: 'from-green-400/30 to-emerald-500/30',
    banner: 'from-emerald-500/20 to-green-500/20',
    accent: 'bg-green-500/20 border-green-400/30',
    border: 'border-green-400/40',
    dot: 'bg-green-400',
    glass: 'bg-green-900/10',
  }

  const scaleClasses = {
    sm: {
      container: 'max-w-3xl text-xs',
      height: 'h-[280px]',
      padding: 'p-3',
      gap: 'gap-3',
      iconSize: 'w-3 h-3',
      avatarSize: 'w-5 h-5',
      spacing: 'space-y-1',
      bottomHeight: 'max-h-48',
    },
    md: {
      container: 'max-w-5xl text-sm',
      height: 'h-[350px]',
      padding: 'p-4',
      gap: 'gap-4',
      iconSize: 'w-4 h-4',
      avatarSize: 'w-6 h-6',
      spacing: 'space-y-2',
      bottomHeight: 'max-h-64',
    },
    lg: {
      container: 'max-w-7xl text-base',
      height: 'h-[500px]',
      padding: 'p-6',
      gap: 'gap-6',
      iconSize: 'w-5 h-5',
      avatarSize: 'w-8 h-8',
      spacing: 'space-y-3',
      bottomHeight: 'max-h-96',
    },
  }

  const s = scaleClasses[scale]

  // Glassmorphism classes
  const glassClasses = {
    panel: `backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl`,
    innerPanel: `backdrop-blur-lg bg-white/5 border border-white/10`,
    card: `backdrop-blur-md bg-white/5 border border-white/10`,
    header: `backdrop-blur-lg bg-black/20 border-b border-white/10`,
    active: `backdrop-blur-md ${currentTheme.accent} border`,
    button: `backdrop-blur-md ${currentTheme.primary} border`,
    banner: `backdrop-blur-lg bg-gradient-to-r ${currentTheme.banner} border border-white/20`,
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
    <div className={`${s.container} mx-auto bg-[hsl(var(--color-background))]/70 backdrop-blur-md`}>
      {/* Background with gradient */}
      <div className="relative">
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
            <div className="flex items-center gap-3 text-white/70">
              <ArrowRight className={s.iconSize} />
              <div
                className={`${s.container.includes('text-xs') ? 'text-xs' : 'text-sm'} font-medium hidden sm:block`}
              >
                WorkSync Pro - Where Teams Sync, Work Flows
              </div>
            </div>
          </div>

          {/* Main Interface */}
          <div className={`${s.padding} rounded-b-lg`}>
            <div className={`grid grid-cols-12 ${s.gap} ${s.height}`}>
              {/* Sidebar */}
              <AnimatedPanel delay={400} className="col-span-4 lg:col-span-3">
                <div className={`${glassClasses.innerPanel} h-full rounded-lg p-3 shadow-xl`}>
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className={`w-6 h-6 bg-gradient-to-r ${currentTheme.gradient} rounded-lg flex items-center justify-center backdrop-blur-sm`}
                    >
                      <Zap className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-white/90 font-semibold text-sm hidden lg:block">
                      WorkSync Pro
                    </span>
                  </div>

                  <nav className={s.spacing}>
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
                            ? `${glassClasses.active} text-white shadow-lg`
                            : 'text-white/70 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <item.icon className={s.iconSize} />
                        <span className="text-xs font-medium hidden lg:block">{item.name}</span>
                      </div>
                    ))}
                  </nav>

                  <div className="mt-4 invisible">
                    <div className="text-xs text-white/50 uppercase tracking-wide mb-2">Recent</div>
                    <div className={s.spacing}>
                      <div className="flex items-center gap-2 p-1.5 rounded-lg text-white/70 hover:bg-white/10 cursor-pointer">
                        <div className={`w-1.5 h-1.5 ${currentTheme.dot} rounded-full`}></div>
                        <span className="text-xs">Mobile App</span>
                      </div>
                      <div className="flex items-center gap-2 p-1.5 rounded-lg text-white/70 hover:bg-white/10 cursor-pointer">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                        <span className="text-xs">API Integration</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 invisible">
                    <div className="text-xs text-white/50 uppercase tracking-wide mb-2 hidden lg:block">
                      Team
                    </div>
                    <div className="flex -space-x-1.5 justify-center lg:justify-start">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className={`${s.avatarSize} bg-gradient-to-r from-purple-400/80 to-pink-400/80 rounded-full border-2 border-white/20 flex items-center justify-center text-white text-xs font-medium backdrop-blur-sm`}
                        >
                          {String.fromCharCode(65 + i)}
                        </div>
                      ))}
                      <div
                        className={`${s.avatarSize} bg-white/10 rounded-full border-2 border-white/20 flex items-center justify-center text-white/60 text-xs backdrop-blur-sm`}
                      >
                        +2
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedPanel>

              {/* Main Content */}
              <AnimatedPanel delay={600} className="col-span-8 lg:col-span-9">
                <div className={`${glassClasses.innerPanel} h-full rounded-lg shadow-xl`}>
                  {/* Header */}
                  <div
                    className={`flex items-center justify-between p-3 ${glassClasses.header} rounded-t-lg`}
                  >
                    <div className="flex items-center gap-3">
                      <h1 className="text-white/90 text-sm lg:text-lg font-bold">Dashboard</h1>
                      <div className="flex items-center gap-1.5 bg-green-500/20 border border-green-400/30 px-2 py-1 rounded-full backdrop-blur-sm">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        <span className="text-green-300 text-xs font-medium hidden sm:block">
                          5 online
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 hover:bg-white/10 rounded-lg transition-colors backdrop-blur-sm">
                        <Search className={`${s.iconSize} text-white/60`} />
                      </button>
                      <button className="p-1.5 hover:bg-white/10 rounded-lg transition-colors relative backdrop-blur-sm">
                        <Bell className={`${s.iconSize} text-white/60`} />
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-400 rounded-full"></div>
                      </button>
                      <button
                        className={`flex items-center gap-1.5 ${glassClasses.button} px-2 py-1.5 rounded-lg transition-colors`}
                      >
                        <Plus className="w-3 h-3 text-white" />
                        <span className="text-white text-xs font-medium hidden sm:block">New</span>
                      </button>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className={`p-3 overflow-y-auto ${s.bottomHeight}`}>
                    {/* Real-time Collaboration Banner */}
                    <div className={`${glassClasses.banner} rounded-lg p-3 mb-4`}>
                      <div className="flex items-center gap-2">
                        <Users className={`${s.iconSize} text-white`} />
                        <div>
                          <div className="text-white font-medium text-xs">Live Collaboration</div>
                          <div className="text-white/70 text-xs hidden sm:block">
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
                          <span className="text-white/90 font-medium text-xs">To Do</span>
                          <span className="bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 px-1.5 py-0.5 rounded-full text-xs font-bold backdrop-blur-sm">
                            3
                          </span>
                        </div>
                        <div className="space-y-1.5">
                          <div
                            className={`${glassClasses.card} p-2 rounded border-l-2 border-yellow-400/60 cursor-pointer hover:bg-white/10 transition-colors`}
                          >
                            <div className="text-white/90 text-xs font-medium">
                              Setup auth system
                            </div>
                            <div className="text-white/60 text-xs mt-1">Due: Tomorrow</div>
                          </div>
                        </div>
                      </div>

                      <div className={`${glassClasses.card} rounded-lg p-3`}>
                        <div className="flex items-center gap-2 mb-2">
                          <Activity className={`w-3 h-3 ${currentTheme.primaryText}`} />
                          <span className="text-white/90 font-medium text-xs">In Progress</span>
                          <span className="bg-blue-400/20 border border-blue-400/40 text-blue-300 px-1.5 py-0.5 rounded-full text-xs font-bold backdrop-blur-sm">
                            2
                          </span>
                        </div>
                        <div className="space-y-1.5">
                          <div
                            className={`${glassClasses.card} p-2 rounded border-l-2 ${currentTheme.border} cursor-pointer hover:bg-white/10 transition-colors`}
                          >
                            <div className="text-white/90 text-xs font-medium">
                              Real-time engine
                            </div>
                            <div className="text-white/60 text-xs mt-1">Sarah • 60%</div>
                          </div>
                        </div>
                      </div>

                      <div className={`${glassClasses.card} rounded-lg p-3`}>
                        <div className="flex items-center gap-2 mb-2">
                          <Target className="w-3 h-3 text-green-400" />
                          <span className="text-white/90 font-medium text-xs">Done</span>
                          <span className="bg-green-400/20 border border-green-400/40 text-green-300 px-1.5 py-0.5 rounded-full text-xs font-bold backdrop-blur-sm">
                            5
                          </span>
                        </div>
                        <div className="space-y-1.5">
                          <div
                            className={`${glassClasses.card} p-2 rounded border-l-2 border-green-400/60 cursor-pointer hover:bg-white/10 transition-colors`}
                          >
                            <div className="text-white/90 text-xs font-medium">Project setup</div>
                            <div className="text-white/60 text-xs mt-1">2 days ago</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Recent Activity */}
                    <div className={`${glassClasses.card} rounded-lg p-3`}>
                      <div className="flex items-center gap-2 mb-3">
                        <Activity className={`w-4 h-4 ${currentTheme.primaryText}`} />
                        <span className="text-white/90 font-medium text-xs">Recent Activity</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 p-1.5 hover:bg-white/10 rounded transition-colors">
                          <div
                            className={`w-6 h-6 bg-gradient-to-r ${currentTheme.gradient} rounded-full flex items-center justify-center text-white text-xs font-bold backdrop-blur-sm border border-white/20`}
                          >
                            SC
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-white/90 text-xs truncate">
                              Sarah updated collaboration engine
                            </div>
                            <div className="text-white/60 text-xs">2 min ago</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 p-1.5 hover:bg-white/10 rounded transition-colors">
                          <div className="w-6 h-6 bg-gradient-to-r from-green-400/60 to-blue-500/60 rounded-full flex items-center justify-center text-white text-xs font-bold backdrop-blur-sm border border-white/20">
                            AK
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-white/90 text-xs truncate">
                              Alex completed TypeScript config
                            </div>
                            <div className="text-white/60 text-xs">1 hour ago</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedPanel>
            </div>

            {/* Bottom Panels */}
            <div className={`grid grid-cols-1 sm:grid-cols-3 ${s.gap} mt-4`}>
              <AnimatedPanel delay={800}>
                <div
                  className={`${glassClasses.card} rounded-lg p-3 shadow-xl hover:shadow-2xl transition-shadow`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <BarChart3 className={`${s.iconSize} ${currentTheme.primaryText}`} />
                    <span className="text-white/90 font-medium text-xs">Analytics</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-white/70 text-xs">Completed</span>
                      <span className="text-green-400 font-bold text-xs">23/31</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5 backdrop-blur-sm">
                      <div
                        className="bg-green-400 h-1.5 rounded-full"
                        style={{ width: '74%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </AnimatedPanel>

              <AnimatedPanel delay={1000}>
                <div
                  className={`${glassClasses.card} rounded-lg p-3 shadow-xl hover:shadow-2xl transition-shadow`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <MessageSquare className={`${s.iconSize} text-green-400`} />
                    <span className="text-white font-medium text-xs">Team Chat</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className={`${glassClasses.card} p-2 rounded text-xs`}>
                      <div className="text-purple-300 font-medium">Sarah: </div>
                      <div className="text-white/80">Just pushed WebSocket!</div>
                    </div>
                    <div className={`${glassClasses.card} p-2 rounded text-xs`}>
                      <div className={`${currentTheme.primaryText} font-medium`}>Alex: </div>
                      <div className="text-white/80">Testing now 🚀</div>
                    </div>
                  </div>
                </div>
              </AnimatedPanel>

              <AnimatedPanel delay={1200}>
                <div
                  className={`${glassClasses.card} rounded-lg p-3 shadow-xl hover:shadow-2xl transition-shadow`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className={`${s.iconSize} ${currentTheme.primaryText}`} />
                    <span className="text-white/90 font-medium text-xs">Deadlines</span>
                  </div>
                  <div className="space-y-1.5">
                    <div
                      className={`flex items-center justify-between ${glassClasses.card} p-2 rounded`}
                    >
                      <span className="text-white/80 text-xs">Sprint Review</span>
                      <span className="text-orange-400 text-xs">Tomorrow</span>
                    </div>
                    <div
                      className={`flex items-center justify-between ${glassClasses.card} p-2 rounded`}
                    >
                      <span className="text-white/80 text-xs">Beta Release</span>
                      <span className="text-red-400 text-xs">Dec 25</span>
                    </div>
                  </div>
                </div>
              </AnimatedPanel>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
