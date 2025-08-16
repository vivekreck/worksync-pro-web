import darkLogo from '@/assets/images/logos/logo-dark.png'
import lightLogo from '@/assets/images/logos/logo-light.png'
import { Link } from 'react-router-dom'

interface LogoProps {
  theme?: 'dark' | 'light'
}

export const Logo = ({ theme = 'dark' }: LogoProps) => {
  const logoSrc = theme === 'dark' ? darkLogo : lightLogo

  return (
    <Link to="/" className="flex items-center ">
      <img src={logoSrc} alt="WorkSync Pro" className="h-8 w-auto md:h-16" />
    </Link>
  )
}
