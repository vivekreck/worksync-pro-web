import React, { useState } from 'react'
import {
  Zap,
  ChevronRight,
  Twitter,
  Linkedin,
  Github,
  Youtube,
  ShieldCheck,
  Clock,
  Headphones,
} from 'lucide-react'

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
      color: 'text-blue-400',
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
      color: 'text-purple-400',
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
    <footer className={`text-white ${className}`}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">WorkSync Pro</span>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              The ultimate collaborative workspace platform where teams sync seamlessly and work
              flows effortlessly. Built for modern teams who demand excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
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
                      className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center group text-left"
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

        {/* Newsletter Subscription */}
        <div className="mt-16 pt-12 border-t border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay in the sync</h3>
              <p className="text-slate-300">
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
                className={`flex-1 px-4 py-3 bg-slate-800 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent text-white placeholder-slate-400 transition-all duration-200 ${
                  emailError
                    ? 'border-red-500 ring-2 ring-red-500'
                    : 'border-slate-700 focus:ring-blue-500'
                }`}
              />
              <button
                onClick={handleSubscribe}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 whitespace-nowrap ${
                  isSubscribed
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                }`}
              >
                {isSubscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {trustIndicators.map((indicator, index) => {
              const IconComponent = indicator.icon
              return (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className={`w-8 h-8 ${indicator.color}`} />
                  </div>
                  <h4 className="font-semibold mb-2">{indicator.title}</h4>
                  <p className="text-slate-400 text-sm">{indicator.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
