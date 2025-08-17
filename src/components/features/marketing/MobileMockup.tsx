import React, { useState, useEffect } from 'react'
import { SlideAnimation } from '@/components/shared'

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
  Phone,
  Send,
} from 'lucide-react'

export function MobileMockup({
  size = 'medium',
}: {
  size?: 'small' | 'medium' | 'large' | 'xlarge'
}) {
  const [isVisible, setIsVisible] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('dashboard')
  const currentSize = size
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  // Scale presets - easily switch between different sizes
  const scalePresets = {
    small: {
      container: 'max-w-48', // 192px
      height: 'h-60', // 240px
      iconXs: 'w-2 h-2',
      iconSm: 'w-3 h-3',
      iconMd: 'w-4 h-4',
      iconLg: 'w-5 h-5',
      avatarXs: 'w-3 h-3',
      avatarSm: 'w-4 h-4',
      avatarMd: 'w-5 h-5',
      avatarLg: 'w-6 h-6',
      textXs: 'text-xs',
      textSm: 'text-xs',
      textBase: 'text-sm',
      textLg: 'text-sm',
      p1: 'p-1',
      p2: 'p-1',
      p3: 'p-2',
      px2: 'px-2',
      px3: 'px-2',
      py1: 'py-1',
      py2: 'py-1',
      gap1: 'gap-1',
      gap2: 'gap-1',
      gap3: 'gap-2',
      mb1: 'mb-1',
      mb2: 'mb-1',
      mt2: 'mt-1',
      mt4: 'mt-2',
      notch: 'h-3 w-16',
      fab: 'w-6 h-6',
      quickAction: 'w-5 h-5',
      sidebar: 'w-40',
    },
    medium: {
      container: 'max-w-72', // 288px
      height: 'h-[340px]', // 320px
      iconXs: 'w-3 h-3',
      iconSm: 'w-4 h-4',
      iconMd: 'w-5 h-5',
      iconLg: 'w-6 h-6',
      avatarXs: 'w-4 h-4',
      avatarSm: 'w-5 h-5',
      avatarMd: 'w-6 h-6',
      avatarLg: 'w-8 h-8',
      textXs: 'text-xs',
      textSm: 'text-sm',
      textBase: 'text-sm',
      textLg: 'text-base',
      p1: 'p-1',
      p2: 'p-2',
      p3: 'p-3',
      px2: 'px-2',
      px3: 'px-3',
      py1: 'py-1',
      py2: 'py-2',
      gap1: 'gap-1',
      gap2: 'gap-2',
      gap3: 'gap-3',
      mb1: 'mb-1',
      mb2: 'mb-2',
      mt2: 'mt-2',
      mt4: 'mt-4',
      notch: 'h-4 w-20',
      fab: 'w-8 h-8',
      quickAction: 'w-7 h-7',
      sidebar: 'w-48',
    },
    large: {
      container: 'max-w-sm', // 384px
      height: 'h-96', // 384px
      iconXs: 'w-4 h-4',
      iconSm: 'w-5 h-5',
      iconMd: 'w-6 h-6',
      iconLg: 'w-7 h-7',
      avatarXs: 'w-5 h-5',
      avatarSm: 'w-6 h-6',
      avatarMd: 'w-8 h-8',
      avatarLg: 'w-10 h-10',
      textXs: 'text-xs',
      textSm: 'text-sm',
      textBase: 'text-base',
      textLg: 'text-lg',
      p1: 'p-1',
      p2: 'p-2',
      p3: 'p-3',
      px2: 'px-3',
      px3: 'px-4',
      py1: 'py-1',
      py2: 'py-2',
      gap1: 'gap-2',
      gap2: 'gap-3',
      gap3: 'gap-4',
      mb1: 'mb-2',
      mb2: 'mb-3',
      mt2: 'mt-3',
      mt4: 'mt-4',
      notch: 'h-5 w-24',
      fab: 'w-10 h-10',
      quickAction: 'w-8 h-8',
      sidebar: 'w-56',
    },
    xlarge: {
      container: 'max-w-md', // 448px
      height: 'h-[500px]',
      iconXs: 'w-4 h-4',
      iconSm: 'w-5 h-5',
      iconMd: 'w-6 h-6',
      iconLg: 'w-8 h-8',
      avatarXs: 'w-6 h-6',
      avatarSm: 'w-7 h-7',
      avatarMd: 'w-9 h-9',
      avatarLg: 'w-12 h-12',
      textXs: 'text-sm',
      textSm: 'text-base',
      textBase: 'text-lg',
      textLg: 'text-xl',
      p1: 'p-2',
      p2: 'p-3',
      p3: 'p-4',
      px2: 'px-4',
      px3: 'px-5',
      py1: 'py-2',
      py2: 'py-3',
      gap1: 'gap-2',
      gap2: 'gap-3',
      gap3: 'gap-4',
      mb1: 'mb-2',
      mb2: 'mb-3',
      mt2: 'mt-3',
      mt4: 'mt-6',
      notch: 'h-6 w-28',
      fab: 'w-12 h-12',
      quickAction: 'w-10 h-10',
      sidebar: 'w-64',
    },
  }

  const scale = scalePresets[currentSize] || scalePresets.medium

  const currentTheme = {
    primary: 'bg-green-500/20 hover:bg-green-500/30 border-green-400/30',
    primarySolid: 'bg-green-600/80 hover:bg-green-700/80',
    primaryText: 'text-green-300',
    gradient: 'from-green-400/30 to-emerald-500/30',
    banner: 'from-emerald-500/20 to-green-500/20',
    accent: 'bg-green-500/20 border-green-400/30',
  }

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
    <div
      className={`${scale.container} mx-auto bg-[hsl(var(--color-background))]/70 backdrop-blur-md`}
    >
      {/* Mobile Phone Frame */}
      <AnimatedPanel className="perspective-1000">
        <div
          className={`${glassClasses.panel} rounded-2xl transform hover:scale-105 transition-transform duration-700 overflow-hidden relative`}
        >
          {/* Phone Notch */}
          <div
            className={`bg-black/50 ${scale.notch} rounded-b-2xl mx-auto flex items-center justify-center backdrop-blur-sm`}
          >
            <div className="w-6 h-1 bg-white/30 rounded-full"></div>
          </div>

          {/* Status Bar */}
          <div
            className={`bg-black/20 backdrop-blur-lg ${scale.px3} ${scale.py1} flex items-center justify-between text-white/90 ${scale.textXs}`}
          >
            <span className="font-medium">9:41</span>
            <div className="flex items-center gap-1">
              <div className="flex gap-1">
                <div className="w-1 h-2 bg-white/80 rounded-full"></div>
                <div className="w-1 h-2 bg-white/80 rounded-full"></div>
                <div className="w-1 h-2 bg-white/30 rounded-full"></div>
                <div className="w-1 h-2 bg-white/30 rounded-full"></div>
              </div>
              <span className="text-xs ml-1">85%</span>
            </div>
          </div>

          {/* Header */}
          <SlideAnimation direction="up" delay={0.1} duration={1}>
            <AnimatedPanel delay={400}>
              <div className={`${glassClasses.header} ${scale.px3} ${scale.py2}`}>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className={`${scale.p2} hover:bg-white/10 rounded-lg transition-colors backdrop-blur-sm`}
                  >
                    <Menu className={`${scale.iconSm} text-white/90`} />
                  </button>
                  <div className={`flex items-center ${scale.gap2}`}>
                    <div
                      className={`${scale.avatarSm} bg-gradient-to-r ${currentTheme.gradient} rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20`}
                    >
                      <Zap className={`${scale.iconXs} text-white`} />
                    </div>
                    <span className={`text-white/90 font-semibold ${scale.textBase}`}>
                      WorkSync
                    </span>
                  </div>
                  <div className={`flex items-center ${scale.gap2}`}>
                    <button
                      className={`${scale.p2} hover:bg-white/10 rounded-lg transition-colors relative backdrop-blur-sm`}
                    >
                      <Bell className={`${scale.iconXs} text-white/70`} />
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-400 rounded-full border border-white/30"></div>
                    </button>
                    <button
                      className={`${scale.p2} hover:bg-white/10 rounded-lg transition-colors backdrop-blur-sm`}
                    >
                      <Search className={`${scale.iconXs} text-white/70`} />
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedPanel>
          </SlideAnimation>

          {/* Main Content */}
          <SlideAnimation direction="up" delay={0.1} duration={1}>
            <div className={`bg-transparent ${scale.height} overflow-y-auto`}>
              <AnimatedPanel delay={600}>
                <div className={`${scale.p3} py-2`}>
                  <div className={`${glassClasses.banner} rounded-xl ${scale.p3}`}>
                    <div className={`flex items-center ${scale.gap2}`}>
                      <div
                        className={`${scale.avatarMd} bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30`}
                      >
                        <Users className={`${scale.iconXs} text-white`} />
                      </div>
                      <div className="flex-1">
                        <div className={`text-white/90 font-medium ${scale.textXs}`}>
                          Live Session Active
                        </div>
                        <div className="text-white/70 text-xs">4 team members online</div>
                      </div>
                      <button
                        className={`bg-white/20 border border-white/30 ${scale.p2} rounded-lg backdrop-blur-sm hover:bg-white/30 transition-colors`}
                      >
                        <Video className={`${scale.iconXs} text-white`} />
                      </button>
                    </div>
                  </div>
                </div>
              </AnimatedPanel>

              <AnimatedPanel delay={800}>
                <div className={`${scale.p3} py-2`}>
                  <div className={`grid grid-cols-2 ${scale.gap2}`}>
                    <div className={`${glassClasses.card} rounded-xl ${scale.p3}`}>
                      <div className={`flex items-center ${scale.gap2} ${scale.mb1}`}>
                        <Target className={`${scale.iconXs} text-green-400`} />
                        <span className={`text-white/90 ${scale.textXs} font-medium`}>
                          Completed
                        </span>
                      </div>
                      <div className={`${scale.textLg} font-bold text-green-400`}>23</div>
                      <div className="text-white/60 text-xs">tasks this week</div>
                    </div>
                    <div className={`${glassClasses.card} rounded-xl ${scale.p3}`}>
                      <div className={`flex items-center ${scale.gap2} ${scale.mb1}`}>
                        <Clock className={`${scale.iconXs} text-orange-400`} />
                        <span className={`text-white/90 ${scale.textXs} font-medium`}>
                          In Progress
                        </span>
                      </div>
                      <div className={`${scale.textLg} font-bold text-orange-400`}>8</div>
                      <div className="text-white/60 text-xs">active tasks</div>
                    </div>
                  </div>
                </div>
              </AnimatedPanel>

              <AnimatedPanel delay={1000}>
                <div className={`${scale.p3} py-2`}>
                  <div className={`flex items-center justify-between ${scale.mb2}`}>
                    <h3 className={`text-white/90 font-semibold ${scale.textSm}`}>
                      Recent Projects
                    </h3>
                    <button className={`${currentTheme.primaryText} ${scale.textXs}`}>
                      See all
                    </button>
                  </div>
                  <div className="space-y-2">
                    <div className={`${glassClasses.card} rounded-xl ${scale.p3}`}>
                      <div className={`flex items-center ${scale.gap2}`}>
                        <div
                          className={`${scale.avatarLg} bg-gradient-to-r ${currentTheme.gradient} rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20`}
                        >
                          <FileText className={`${scale.iconSm} text-white`} />
                        </div>
                        <div className="flex-1">
                          <div className={`text-white/90 font-medium ${scale.textXs}`}>
                            Mobile App Redesign
                          </div>
                          <div className={`text-white/60 ${scale.textXs}`}>Updated 2 hours ago</div>
                        </div>
                        <div className={`flex items-center ${scale.gap2}`}>
                          <div className="flex -space-x-1">
                            <div
                              className={`${scale.avatarSm} bg-green-400/80 rounded-full border border-white/20 backdrop-blur-sm`}
                            ></div>
                            <div
                              className={`${scale.avatarSm} bg-blue-400/80 rounded-full border border-white/20 backdrop-blur-sm`}
                            ></div>
                          </div>
                          <ChevronRight className={`${scale.iconXs} text-white/60`} />
                        </div>
                      </div>
                      <div className={scale.mt2}>
                        <div
                          className={`flex items-center justify-between ${scale.textXs} ${scale.mb1}`}
                        >
                          <span className="text-white/60">Progress</span>
                          <span className="text-green-400 font-medium">75%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-1 backdrop-blur-sm">
                          <div
                            className="bg-green-400 h-1 rounded-full"
                            style={{ width: '75%' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedPanel>

              <AnimatedPanel delay={1400}>
                <div className={`${scale.p3} py-2 pb-14`}>
                  <div className={`flex items-center justify-between ${scale.mb2}`}>
                    <h3 className={`text-white/90 font-semibold ${scale.textSm}`}>Team Chat</h3>
                    <button className={`${currentTheme.primaryText} ${scale.textXs}`}>
                      Open chat
                    </button>
                  </div>
                  <div className={`${glassClasses.card} rounded-xl ${scale.p3}`}>
                    <div className="space-y-2">
                      <div className={`flex items-start ${scale.gap2}`}>
                        <div
                          className={`${scale.avatarMd} bg-gradient-to-r from-purple-400/60 to-pink-500/60 rounded-full flex items-center justify-center text-white text-xs font-bold backdrop-blur-sm border border-white/20`}
                        >
                          SC
                        </div>
                        <div className="flex-1">
                          <div
                            className={`bg-white/10 rounded-lg ${scale.px2} ${scale.py1} backdrop-blur-sm border border-white/20`}
                          >
                            <div className={`text-white/90 ${scale.textXs}`}>
                              Just pushed updates! 🚀
                            </div>
                          </div>
                          <div className="text-white/60 text-xs mt-1">Sarah, 2 min ago</div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`flex items-center ${scale.gap2} ${scale.mt2} pt-2 border-t border-white/10`}
                    >
                      <div
                        className={`flex-1 ${glassClasses.input} rounded-lg ${scale.px2} ${scale.py1}`}
                      >
                        <input
                          type="text"
                          placeholder="Type a message..."
                          className={`bg-transparent text-white/90 ${scale.textXs} w-full outline-none placeholder-white/50`}
                        />
                      </div>
                      <button className={`${glassClasses.button} ${scale.p2} rounded-lg`}>
                        <Send className={`${scale.iconXs} text-white`} />
                      </button>
                    </div>
                  </div>
                </div>
              </AnimatedPanel>
            </div>
          </SlideAnimation>

          <SlideAnimation direction="up" delay={0.1} duration={1}>
            <AnimatedPanel delay={1600}>
              <div className={`${glassClasses.nav} px-2 py-1`}>
                <div className="flex items-center justify-around">
                  {bottomNavItems.map(item => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`flex flex-col items-center ${scale.p1} rounded-lg transition-all backdrop-blur-sm ${
                        activeTab === item.id
                          ? `${currentTheme.accent} text-white border`
                          : 'text-white/60 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <item.icon className={scale.iconXs} />
                      <span className="text-xs mt-1 font-medium">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </AnimatedPanel>
          </SlideAnimation>

          <AnimatedPanel delay={1800}>
            <div className="absolute bottom-14 right-3">
              <button
                className={`${scale.fab} ${glassClasses.fab} rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow`}
              >
                <Plus className={`${scale.iconSm} text-white`} />
              </button>
            </div>
          </AnimatedPanel>

          <AnimatedPanel delay={2000}>
            <div className="absolute top-24 right-2 space-y-1">
              <button
                className={`${scale.quickAction} bg-green-600/80 backdrop-blur-lg border border-white/20 rounded-full shadow-lg flex items-center justify-center hover:bg-green-700/80 transition-colors`}
              >
                <Phone className={`${scale.iconXs} text-white`} />
              </button>
              <button
                className={`${scale.quickAction} ${currentTheme.primarySolid} backdrop-blur-lg border border-white/20 rounded-full shadow-lg flex items-center justify-center transition-colors`}
              >
                <Video className={`${scale.iconXs} text-white`} />
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
                className={`absolute left-0 top-0 bottom-0 ${scale.sidebar} ${glassClasses.sidebar} ${scale.p3} shadow-2xl`}
              >
                <div className={`flex items-center justify-between ${scale.mb2}`}>
                  <div className={`flex items-center ${scale.gap2}`}>
                    <div
                      className={`${scale.avatarMd} bg-gradient-to-r ${currentTheme.gradient} rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20`}
                    >
                      <Zap className={`${scale.iconSm} text-white`} />
                    </div>
                    <span className={`text-white/90 font-semibold ${scale.textSm}`}>
                      WorkSync Pro
                    </span>
                  </div>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className={`p-1 hover:bg-white/10 rounded backdrop-blur-sm`}
                  >
                    <X className={`${scale.iconSm} text-white/70`} />
                  </button>
                </div>

                <nav className="space-y-1">
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
                      className={`flex items-center ${scale.gap2} ${scale.p3} rounded-lg text-white/70 hover:bg-white/10 hover:text-white cursor-pointer transition-all backdrop-blur-sm`}
                    >
                      <item.icon className={scale.iconSm} />
                      <span className={`font-medium ${scale.textSm}`}>{item.name}</span>
                    </div>
                  ))}
                </nav>

                <div className={scale.mt4}>
                  <div className={`text-xs text-white/50 uppercase tracking-wide ${scale.mb2}`}>
                    Quick Actions
                  </div>
                  <div className="space-y-1">
                    <button
                      className={`w-full flex items-center ${scale.gap2} ${scale.p3} ${glassClasses.button} rounded-lg text-white transition-colors`}
                    >
                      <Plus className={scale.iconSm} />
                      <span className={`font-medium ${scale.textSm}`}>New Task</span>
                    </button>
                    <button
                      className={`w-full flex items-center ${scale.gap2} ${scale.p3} bg-green-600/80 backdrop-blur-md border border-green-400/30 rounded-lg text-white hover:bg-green-700/80 transition-colors`}
                    >
                      <Video className={scale.iconSm} />
                      <span className={`font-medium ${scale.textSm}`}>Start Meeting</span>
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
