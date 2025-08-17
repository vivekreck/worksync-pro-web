import { Logo, NavLinks } from '../ui'
import { MenuButton } from '../ui'

interface Item {
  label: string
  href: string
  variant?: 'default' | 'danger' | 'primary'
}

interface MarketingNavbarProps {
  isOpen: boolean
  onToggle: () => void
  navItems: Item[]
}

export const MarketingNavbar = ({ isOpen, onToggle, navItems }: MarketingNavbarProps) => {
  return (
    <nav className="container mx-auto flex items-center justify-between md:p-3 lg:px-4 lg:py-1 2xl:p-4">
      <Logo />

      <div className="hidden md:block">
        <NavLinks navItems={navItems} />
      </div>

      <MenuButton isOpen={isOpen} onToggle={onToggle} />
    </nav>
  )
}
