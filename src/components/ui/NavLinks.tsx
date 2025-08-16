import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

interface NavItem {
  label: string
  href: string
}

interface NavLinksProps {
  onClick?: () => void
  navItems: NavItem[]
}

export const NavLinks = ({ onClick, navItems }: NavLinksProps) => {
  const [active, setActive] = useState<string>('')
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    let path = location.pathname === '/' ? location.hash : location.pathname

    if (!path) path = '#home'
    setActive(path)
  }, [location])

  const handleClick = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    if (href.startsWith('#')) {
      navigate('/' + href)
      // document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(href)
    }

    setActive(href)
    onClick?.()
  }

  return (
    <ul className="flex flex-col gap-4 md:flex-row md:gap-12">
      {navItems.map(item => (
        <li key={item.label} className="relative group">
          <Link
            to={item.href}
            onClick={handleClick(item.href)}
            className={`relative inline-block px-6 py-2 text-lg font-medium transition-colors duration-300
              ${active === item.href ? 'text-white opacity-100' : 'text-[#E2E2E2] opacity-60 hover:opacity-100'}
              ${
                !item?.href?.startsWith('#') &&
                'bg-white/25 backdrop-blur-md rounded-2xl border border-white/25'
              }`}
          >
            {item.label}

            <span
              className={`absolute top-16 left-1/2 -translate-x-1/2 h-[2px] w-[120%] 
                bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent origin-center
                transition-transform duration-500 ease-in-out
                ${active === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
            />
          </Link>
        </li>
      ))}
    </ul>
  )
}
