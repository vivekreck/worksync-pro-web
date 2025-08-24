import React, { useState } from 'react'
import {
  ChevronRight,
  Twitter,
  Linkedin,
  Github,
  Youtube,
  ShieldCheck,
  Clock,
  Headphones,
} from 'lucide-react'
import { Logo } from '@/components/ui'
import { Link } from 'react-router-dom'

interface LinkItem {
  label: string
  href: string
}

interface FooterSectionData {
  title: string
  color: string
  links: LinkItem[]
}

export const FooterSection = ({ className = '' }) => {
  const [email, setEmail] = useState<string>('')
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false)
  const [emailError, setEmailError] = useState<boolean>(false)

  const footerSections: FooterSectionData[] = [
    {
      title: 'Product',
      color: 'text-[hsl(var(--color-accent))]',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Integrations', href: '#integrations' },
        { label: 'API Docs', href: '#api' },
        { label: "What's New", href: '#changelog' },
        { label: 'Roadmap', href: '#roadmap' },
      ],
    },
    {
      title: 'Resources',
      color: 'text-[hsl(var(--color-accent))]',
      links: [
        { label: 'Documentation', href: '#docs' },
        { label: 'Tutorials', href: '#tutorials' },
        { label: 'Blog', href: '#blog' },
        { label: 'Community', href: '#community' },
        { label: 'Help Center', href: '#support' },
        { label: 'System Status', href: '#status' },
      ],
    },
    {
      title: 'Company',
      color: 'text-green-400',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Careers', href: '#careers' },
        { label: 'Press Kit', href: '#press' },
        { label: 'Partners', href: '#partners' },
        { label: 'Privacy Policy', href: '#privacy' },
        { label: 'Terms of Service', href: '#terms' },
      ],
    },
  ]

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ]

  const trustIndicators = [
    {
      icon: ShieldCheck,
      title: 'Enterprise Security',
      description: 'SOC 2 compliant with end-to-end encryption',
      color: 'text-green-400',
    },
    {
      icon: Clock,
      title: '99.9% Uptime',
      description: 'Reliable infrastructure you can count on',
      color: 'text-blue-400',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Expert help whenever you need it',
      color: 'text-purple-400',
    },
  ]

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!email || !emailRegex.test(email)) {
      setEmailError(true)
      setTimeout(() => setEmailError(false), 2000)
      return
    }

    setIsSubscribed(true)
    setEmail('')
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubscribe()
    }
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className={`${className}`}>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay in the sync</h3>
              <p className="text-[hsl(var(--color-foreground))]/80">
                Get the latest updates, tips, and exclusive content delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter your email address"
                className={`flex-1 px-4 py-3 bg-[hsl(var(--color-background)/0.7)] border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent placeholder-[hsl(var(--color-muted-foreground)/0.7)] transition-all duration-200 ${
                  emailError
                    ? 'border-[hsl(var(--color-error))] ring-1 ring-[hsl(var(--color-error))]'
                    : 'border-[hsl(var(--color-border))] focus:ring-[hsl(var(--color-border))]'
                }`}
              />
              <button
                onClick={handleSubscribe}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 whitespace-nowrap ${
                  isSubscribed
                    ? 'bg-gradient-to-r from-[hsl(var(--color-accent-second)/0.3)] to-[hsl(var(--color-accent-second)/0.7)]'
                    : 'bg-gradient-to-r from-[hsl(var(--color-accent)/0.3)] to-[hsl(var(--color-accent)/0.7)]'
                }`}
              >
                {isSubscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-[hsl(var(--color-border))]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {trustIndicators.map((indicator, index) => {
              const IconComponent = indicator.icon
              return (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-none rounded-full flex items-center justify-center mb-4">
                    <IconComponent className={`w-8 h-8 ${indicator.color}`} />
                  </div>
                  <h4 className="font-semibold mb-2">{indicator.title}</h4>
                  <p className="text-[hsl(var(--color-muted-foreground))] text-sm">
                    {indicator.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-16 border-t border-[hsl(var(--color-border))] pt-16">
          <div className="lg:col-span-1">
            <div className="mb-5 -ml-8 -mt-2">
              <Logo />
            </div>
            <p className="text-[hsl(var(--color-foreground)/0.8)] mb-6 leading-relaxed">
              The ultimate collaborative workspace platform where teams sync seamlessly and work
              flows effortlessly. Built for modern teams who demand excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <Link
                    key={index}
                    to={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 hover:text-[hsl(var(--color-accent))] rounded-lg flex items-center justify-center transition-colors duration-200"
                  >
                    <IconComponent className="w-5 h-5" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 className={`text-lg font-semibold mb-6 ${section.color}`}>{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))] transition-colors duration-200 flex items-center group text-left"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
