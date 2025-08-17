import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

interface NavItem {
  label: string
  href: string
  variant?: 'default' | 'danger' | 'primary'
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

  // Filter out login/signup items from main nav items
  const mainNavItems = navItems.filter(item => item.href !== '/login' && item.href !== '/signup')

  return (
    <div className="flex flex-row md:items-center md:justify-between w-full">
      {/* Main Navigation Items */}
      <ul className="flex flex-row md:gap-4 lg:gap-10 2xl:gap-12">
        {mainNavItems.map(item => (
          <NavLink key={item.label} item={item} active={active} handleClick={handleClick} />
        ))}
      </ul>

      <ul className="flex flex-row md:ml-20 lg:ml-40 2xl:ml-40 md:gap-4 2xl:gap-12 lg:gap-10">
        <AuthButton
          href="/login"
          label="Log in"
          variant="default"
          active={active}
          handleClick={handleClick}
        />
        <AuthButton
          href="/signup"
          label="Sign up"
          variant="primary"
          active={active}
          handleClick={handleClick}
        />
      </ul>
    </div>
  )
}

const NavLink = ({
  item,
  active,
  handleClick,
}: {
  item: NavItem
  active: string
  handleClick: (href: string) => React.MouseEventHandler<HTMLAnchorElement>
}) => {
  return (
    <li className="relative group">
      <Link
        to={item.href}
        onClick={handleClick(item.href)}
        className={`relative inline-block text-sm px-2 lg:px-4 2xl:px-6 py-2  2xl:text-lg font-medium transition-colors duration-300
              ${active === item.href ? 'text-white opacity-100' : 'text-[#E2E2E2] opacity-60 hover:opacity-100'}
              ${
                item.variant === 'primary' &&
                'bg-white/25 backdrop-blur-md rounded-xl  2xl:rounded-2xl border border-white/25'
              }`}
      >
        {item.label}

        <span
          className={`absolute md:top-10 lg:top-12 2xl:top-16 left-1/2 -translate-x-1/2 h-[2px] 2xl:h-[3px] w-[140%] 
                bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent origin-center
                transition-transform duration-500 ease-in-out
                ${active === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
        />
      </Link>
    </li>
  )
}

const AuthButton = ({
  href,
  label,
  variant,
  active,
  handleClick,
}: {
  href: string
  label: string
  variant: 'default' | 'primary'
  active: string
  handleClick: (href: string) => React.MouseEventHandler<HTMLAnchorElement>
}) => {
  return (
    <li className="relative group">
      <Link
        to={href}
        onClick={handleClick(href)}
        className={`relative inline-block text-sm px-2 lg:px-4 2xl:px-6 py-2  2xl:text-lg font-medium transition-colors duration-300
              ${active === href ? 'text-white opacity-100' : 'text-[#E2E2E2] opacity-80 hover:opacity-100'}
              ${
                variant === 'primary' &&
                'bg-white/25 backdrop-blur-md rounded-xl  2xl:rounded-2xl border border-white/25'
              }`}
      >
        {label}

        <span
          className={`absolute md:top-10 lg:top-12 2xl:top-16 left-1/2 -translate-x-1/2 h-[2px] 2xl:h-[3px] w-[140%] 
                bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent origin-center
                transition-transform duration-500 ease-in-out
                ${active === href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
        />
      </Link>
    </li>
  )
}
