import React, { useState, useEffect } from 'react'
type ScaleName = 'sm' | 'md' | 'lg'

import {
  Search,
  Bell,
  Menu,
  Plus,
  Users,
  MessageSquare,
  FolderOpen,
  BarChart3,
  Calendar,
  FileText,
  Video,
  Clock,
  CheckSquare,
  Zap,
  Target,
  Home,
  X,
  ChevronRight,
  MoreHorizontal,
  Phone,
  Send,
} from 'lucide-react'

export const MobileMockup = ({ scale = 'sm' }: { scale?: ScaleName }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('dashboard')

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const currentTheme = {
    primary: 'bg-green-500/20 hover:bg-green-500/30 border-green-400/30',
    primarySolid: 'bg-green-600/80 hover:bg-green-700/80',
    primaryText: 'text-green-300',
    gradient: 'from-green-400/30 to-emerald-500/30',
    banner: 'from-emerald-500/20 to-green-500/20',
    accent: 'bg-green-500/20 border-green-400/30',
    dot: 'bg-green-400',
  }

  const scaleClasses = {
    sm: { container: 'max-w-xs', height: 'h-[400px]' },
    md: { container: 'max-w-sm', height: 'h-[600px]' },
    lg: { container: 'max-w-md', height: 'h-[700px]' },
  }

  const s = scaleClasses[scale]

  // Glassmorphism classes
  const glassClasses = {
    panel: `backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl`,
    card: `backdrop-blur-md bg-white/5 border border-white/10`,
    header: `backdrop-blur-lg bg-black/20 border-b border-white/10`,
    overlay: `backdrop-blur-lg bg-black/30`,
    sidebar: `backdrop-blur-xl bg-black/40 border-r border-white/20`,
    button: `backdrop-blur-md ${currentTheme.primary} border`,
    banner: `backdrop-blur-lg bg-gradient-to-r ${currentTheme.banner} border border-white/20`,
    input: `backdrop-blur-sm bg-white/10 border border-white/20`,
    fab: `backdrop-blur-lg bg-gradient-to-r ${currentTheme.gradient} border border-white/30`,
    nav: `backdrop-blur-xl bg-black/30 border-t border-white/10`,
  }

  const AnimatedPanel = ({
    children,
    delay = 0,
    className = '',
  }: {
    children: React.ReactNode
    delay?: number
    className?: string
  }) => (
    <div
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )

  const bottomNavItems = [
    { id: 'dashboard', icon: Home, label: 'Home' },
    { id: 'projects', icon: FolderOpen, label: 'Projects' },
    { id: 'tasks', icon: CheckSquare, label: 'Tasks' },
    { id: 'chat', icon: MessageSquare, label: 'Chat' },
    { id: 'profile', icon: Users, label: 'Team' },
  ]

  return (
    <div className={`${s.container} mx-auto bg-[hsl(var(--color-background))]/70 backdrop-blur-md`}>
      {/* Mobile Phone Frame */}
      <AnimatedPanel className="perspective-1000">
        <div
          className={`${glassClasses.panel} rounded-3xl transform rotate-y-2 hover:rotate-y-0 transition-transform duration-700 overflow-hidden relative`}
        >
          {/* Phone Notch */}
          <div className="bg-black/50 h-6 rounded-b-2xl mx-auto w-32 flex items-center justify-center backdrop-blur-sm">
            <div className="w-12 h-1 bg-white/30 rounded-full"></div>
          </div>

          {/* Status Bar */}
          <div className="bg-black/20 backdrop-blur-lg px-6 py-2 flex items-center justify-between text-white/90 text-sm">
            <span className="font-medium">9:41</span>
            <div className="flex items-center gap-1">
              <div className="flex gap-1">
                <div className="w-1 h-3 bg-white/80 rounded-full"></div>
                <div className="w-1 h-3 bg-white/80 rounded-full"></div>
                <div className="w-1 h-3 bg-white/30 rounded-full"></div>
                <div className="w-1 h-3 bg-white/30 rounded-full"></div>
              </div>
              <span className="text-xs ml-1">85%</span>
            </div>
          </div>

          {/* Header */}
          <AnimatedPanel delay={400}>
            <div className={`${glassClasses.header} px-4 py-4`}>
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors backdrop-blur-sm"
                >
                  <Menu className="w-6 h-6 text-white/90" />
                </button>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-6 h-6 bg-gradient-to-r ${currentTheme.gradient} rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20`}
                  >
                    <Zap className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-white/90 font-semibold text-lg">WorkSync</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-white/10 rounded-lg transition-colors relative backdrop-blur-sm">
                    <Bell className="w-5 h-5 text-white/70" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full border border-white/30"></div>
                  </button>
                  <button className="p-2 hover:bg-white/10 rounded-lg transition-colors backdrop-blur-sm">
                    <Search className="w-5 h-5 text-white/70" />
                  </button>
                </div>
              </div>
            </div>
          </AnimatedPanel>

          {/* Main Content */}
          <div className={`bg-transparent ${s.height} overflow-y-auto`}>
            {/* Live Collaboration Status */}
            <AnimatedPanel delay={600}>
              <div className="px-4 py-3">
                <div className={`${glassClasses.banner} rounded-xl p-3`}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white/90 font-medium text-sm">Live Session Active</div>
                      <div className="text-white/70 text-xs">4 team members online</div>
                    </div>
                    <button className="bg-white/20 border border-white/30 p-2 rounded-lg backdrop-blur-sm hover:bg-white/30 transition-colors">
                      <Video className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedPanel>

            {/* Quick Stats */}
            <AnimatedPanel delay={800}>
              <div className="px-4 py-2">
                <div className="grid grid-cols-2 gap-3">
                  <div className={`${glassClasses.card} rounded-xl p-4`}>
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-green-400" />
                      <span className="text-white/90 text-sm font-medium">Completed</span>
                    </div>
                    <div className="text-2xl font-bold text-green-400">23</div>
                    <div className="text-white/60 text-xs">tasks this week</div>
                  </div>
                  <div className={`${glassClasses.card} rounded-xl p-4`}>
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-orange-400" />
                      <span className="text-white/90 text-sm font-medium">In Progress</span>
                    </div>
                    <div className="text-2xl font-bold text-orange-400">8</div>
                    <div className="text-white/60 text-xs">active tasks</div>
                  </div>
                </div>
              </div>
            </AnimatedPanel>

            {/* Recent Projects */}
            <AnimatedPanel delay={1000}>
              <div className="px-4 py-2">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white/90 font-semibold">Recent Projects</h3>
                  <button className={`${currentTheme.primaryText} text-sm`}>See all</button>
                </div>
                <div className="space-y-3">
                  <div className={`${glassClasses.card} rounded-xl p-4`}>
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 bg-gradient-to-r ${currentTheme.gradient} rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20`}
                      >
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white/90 font-medium">Mobile App Redesign</div>
                        <div className="text-white/60 text-sm">Updated 2 hours ago</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex -space-x-1">
                          <div className="w-6 h-6 bg-green-400/80 rounded-full border-2 border-white/20 backdrop-blur-sm"></div>
                          <div className="w-6 h-6 bg-blue-400/80 rounded-full border-2 border-white/20 backdrop-blur-sm"></div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-white/60" />
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-white/60">Progress</span>
                        <span className="text-green-400 font-medium">75%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2 backdrop-blur-sm">
                        <div
                          className="bg-green-400 h-2 rounded-full"
                          style={{ width: '75%' }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className={`${glassClasses.card} rounded-xl p-4`}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-500/60 to-red-600/60 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20">
                        <BarChart3 className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white/90 font-medium">Q4 Analytics Dashboard</div>
                        <div className="text-white/60 text-sm">Updated 5 hours ago</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex -space-x-1">
                          <div className="w-6 h-6 bg-purple-400/80 rounded-full border-2 border-white/20 backdrop-blur-sm"></div>
                          <div className="w-6 h-6 bg-pink-400/80 rounded-full border-2 border-white/20 backdrop-blur-sm"></div>
                          <div className="w-6 h-6 bg-white/20 rounded-full border-2 border-white/20 flex items-center justify-center text-white/80 text-xs backdrop-blur-sm">
                            +2
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-white/60" />
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-white/60">Progress</span>
                        <span className="text-orange-400 font-medium">45%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2 backdrop-blur-sm">
                        <div
                          className="bg-orange-400 h-2 rounded-full"
                          style={{ width: '45%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedPanel>

            {/* Urgent Tasks */}
            <AnimatedPanel delay={1200}>
              <div className="px-4 py-2">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white/90 font-semibold">Urgent Tasks</h3>
                  <button className="text-red-400 text-sm">View all</button>
                </div>
                <div className="space-y-2">
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <div className="flex-1">
                        <div className="text-white/90 text-sm font-medium">
                          Fix authentication bug
                        </div>
                        <div className="text-red-300 text-xs">Due in 2 hours</div>
                      </div>
                      <button className="p-1 hover:bg-white/10 rounded backdrop-blur-sm">
                        <MoreHorizontal className="w-4 h-4 text-white/60" />
                      </button>
                    </div>
                  </div>
                  <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-3 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <div className="flex-1">
                        <div className="text-white/90 text-sm font-medium">
                          Review API documentation
                        </div>
                        <div className="text-orange-300 text-xs">Due tomorrow</div>
                      </div>
                      <button className="p-1 hover:bg-white/10 rounded backdrop-blur-sm">
                        <MoreHorizontal className="w-4 h-4 text-white/60" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedPanel>

            {/* Team Chat Preview */}
            <AnimatedPanel delay={1400}>
              <div className="px-4 py-2 pb-20">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white/90 font-semibold">Team Chat</h3>
                  <button className={`${currentTheme.primaryText} text-sm`}>Open chat</button>
                </div>
                <div className={`${glassClasses.card} rounded-xl p-3`}>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-400/60 to-pink-500/60 rounded-full flex items-center justify-center text-white text-xs font-bold backdrop-blur-sm border border-white/20">
                        SC
                      </div>
                      <div className="flex-1">
                        <div className="bg-white/10 rounded-lg px-3 py-2 backdrop-blur-sm border border-white/20">
                          <div className="text-white/90 text-sm">
                            Just pushed the WebSocket updates! 🚀
                          </div>
                        </div>
                        <div className="text-white/60 text-xs mt-1">Sarah, 2 min ago</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-8 h-8 bg-gradient-to-r ${currentTheme.gradient} rounded-full flex items-center justify-center text-white text-xs font-bold backdrop-blur-sm border border-white/20`}
                      >
                        AK
                      </div>
                      <div className="flex-1">
                        <div className={`${glassClasses.button} rounded-lg px-3 py-2`}>
                          <div className="text-white/90 text-sm">Awesome! Testing now</div>
                        </div>
                        <div className="text-white/60 text-xs mt-1">Alex, 1 min ago</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-white/10">
                    <div className={`flex-1 ${glassClasses.input} rounded-lg px-3 py-2`}>
                      <input
                        type="text"
                        placeholder="Type a message..."
                        className="bg-transparent text-white/90 text-sm w-full outline-none placeholder-white/50"
                      />
                    </div>
                    <button className={`${glassClasses.button} p-2 rounded-lg`}>
                      <Send className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedPanel>
          </div>

          {/* Bottom Navigation */}
          <AnimatedPanel delay={1600}>
            <div className={`${glassClasses.nav} px-2 py-2`}>
              <div className="flex items-center justify-around">
                {bottomNavItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex flex-col items-center p-2 rounded-lg transition-all backdrop-blur-sm ${
                      activeTab === item.id
                        ? `${currentTheme.accent} text-white border`
                        : 'text-white/60 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="text-xs mt-1 font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </AnimatedPanel>

          {/* Floating Action Button */}
          <AnimatedPanel delay={1800}>
            <div className="absolute bottom-20 right-6">
              <button
                className={`w-12 h-12 ${glassClasses.fab} rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow`}
              >
                <Plus className="w-6 h-6 text-white" />
              </button>
            </div>
          </AnimatedPanel>

          {/* Quick Action Buttons */}
          <AnimatedPanel delay={2000}>
            <div className="absolute top-32 right-4 space-y-2">
              <button className="w-10 h-10 bg-green-600/80 backdrop-blur-lg border border-white/20 rounded-full shadow-lg flex items-center justify-center hover:bg-green-700/80 transition-colors">
                <Phone className="w-5 h-5 text-white" />
              </button>
              <button
                className={`w-10 h-10 ${currentTheme.primarySolid} backdrop-blur-lg border border-white/20 rounded-full shadow-lg flex items-center justify-center transition-colors`}
              >
                <Video className="w-5 h-5 text-white" />
              </button>
            </div>
          </AnimatedPanel>

          {/* Sidebar Overlay */}
          {sidebarOpen && (
            <div className="absolute inset-0 z-50">
              <div
                className={`absolute inset-0 ${glassClasses.overlay}`}
                onClick={() => setSidebarOpen(false)}
              ></div>
              <div
                className={`absolute left-0 top-0 bottom-0 w-64 ${glassClasses.sidebar} p-4 shadow-2xl`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 bg-gradient-to-r ${currentTheme.gradient} rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20`}
                    >
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/90 font-semibold">WorkSync Pro</span>
                  </div>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="p-1 hover:bg-white/10 rounded backdrop-blur-sm"
                  >
                    <X className="w-5 h-5 text-white/70" />
                  </button>
                </div>

                <nav className="space-y-2">
                  {[
                    { name: 'Dashboard', icon: Home },
                    { name: 'Projects', icon: FolderOpen },
                    { name: 'Tasks', icon: CheckSquare },
                    { name: 'Calendar', icon: Calendar },
                    { name: 'Documents', icon: FileText },
                    { name: 'Analytics', icon: BarChart3 },
                    { name: 'Team', icon: Users },
                  ].map(item => (
                    <div
                      key={item.name}
                      className="flex items-center gap-3 p-3 rounded-lg text-white/70 hover:bg-white/10 hover:text-white cursor-pointer transition-all backdrop-blur-sm"
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </div>
                  ))}
                </nav>

                <div className="mt-8">
                  <div className="text-xs text-white/50 uppercase tracking-wide mb-3">
                    Quick Actions
                  </div>
                  <div className="space-y-2">
                    <button
                      className={`w-full flex items-center gap-3 p-3 ${glassClasses.button} rounded-lg text-white transition-colors`}
                    >
                      <Plus className="w-5 h-5" />
                      <span className="font-medium">New Task</span>
                    </button>
                    <button className="w-full flex items-center gap-3 p-3 bg-green-600/80 backdrop-blur-md border border-green-400/30 rounded-lg text-white hover:bg-green-700/80 transition-colors">
                      <Video className="w-5 h-5" />
                      <span className="font-medium">Start Meeting</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </AnimatedPanel>
    </div>
  )
}
