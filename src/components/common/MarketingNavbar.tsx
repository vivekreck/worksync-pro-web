import React from 'react'
import { Logo, NavLinks } from '../ui'
import { MenuButton } from '../ui'

interface Item {
  label: string
  href: string
  icon?: React.ReactNode
  variant?: 'default' | 'danger'
}

interface MarketingNavbarProps {
  isOpen: boolean
  onToggle: () => void
  navItems: Item[]
}

export const MarketingNavbar = ({ isOpen, onToggle, navItems }: MarketingNavbarProps) => {
  return (
    <nav className="container mx-auto flex items-center justify-between p-4">
      <Logo />

      <div className="hidden md:block">
        <NavLinks navItems={navItems} />
      </div>

      <MenuButton isOpen={isOpen} onToggle={onToggle} />
    </nav>
  )
}
