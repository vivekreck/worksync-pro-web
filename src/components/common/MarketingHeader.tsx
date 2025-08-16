import React, { useState } from 'react'
import { MobileMenu } from '../ui'
import { MarketingNavbar } from './MarketingNavbar'
import { Home, Star, DollarSign, LogIn, UserPlus } from 'lucide-react'

interface Item {
  label: string
  href: string
  icon?: React.ReactNode
  variant?: 'default' | 'danger'
}

const menuItems: Item[] = [
  { label: 'Home', href: '/', icon: <Home className="w-5 h-5" /> },
  { label: 'Features', href: '/feature', icon: <Star className="w-5 h-5" /> },
  { label: 'Pricing', href: '/pricing', icon: <DollarSign className="w-5 h-5" /> },
  { label: 'Login', href: '/login', icon: <LogIn className="w-5 h-5" /> },
  { label: 'Sign Up', href: '/signup', icon: <UserPlus className="w-5 h-5" /> },
]

const navItems: Item[] = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Login', href: '/login' },
  { label: 'Sign Up', href: '/signup' },
]

export const MarketingHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] border-b h-16 md:h-auto">
      <MarketingNavbar
        isOpen={isMenuOpen}
        onToggle={() => setIsMenuOpen(cur => !cur)}
        navItems={navItems}
      />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} menuItems={menuItems} />
    </header>
  )
}
