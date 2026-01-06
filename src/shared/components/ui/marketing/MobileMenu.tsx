import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import { useNavigate } from 'react-router-dom'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  menuItems: Array<{
    label: string
    href: string
    icon: React.ReactNode
    variant?: 'default' | 'danger' | 'primary'
  }>
}
export const MobileMenu = ({ isOpen, onClose, menuItems }: MobileMenuProps) => {
  const navigate = useNavigate()
  const getVariantClasses = (variant?: 'default' | 'danger' | 'primary') => {
    switch (variant) {
      case 'danger':
        return 'bg-[#1A0C0C] border border-[#222222] text-white hover:bg-[#2A1313]'
      case 'primary':
        return 'bg-[#0C1A2A] border border-[#222222] text-white hover:bg-[#132A4A]'
      default:
        return 'bg-[#161616] border border-[#222222] text-white hover:bg-[#1f1f1f]'
    }
  }

  const handleClick = (href: string) => {
    if (href.startsWith('#')) {
      navigate('/' + href)
    } else {
      navigate(href)
    }
    onClose?.()
  }

  return (
    <div className="md:hidden">
      <AnimatePresence>
        {isOpen && (
          <>
            {/* backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed top-16 left-0 right-0 bottom-0 z-[80] backdrop-blur-sm bg-[hsl(var(--color-background))]"
              onClick={onClose}
            />

            {/* Main menu */}
            <motion.div
              initial={{ y: '-100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{
                type: 'spring',
                damping: 25,
                stiffness: 300,
                opacity: { duration: 0.2 },
              }}
              className="fixed top-16 left-0 right-0 z-[90]  text-white"
            >
              <div className="px-4 py-4">
                <h2 className="text-xl font-normal text-white">Menu</h2>
              </div>

              <div className="px-4 py-2 space-y-2">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    onClick={() => handleClick(item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.1 + index * 0.05,
                      duration: 0.3,
                      ease: 'easeOut',
                    }}
                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 text-left ${getVariantClasses(item.variant)}
                active:scale-95
              `}
                  >
                    <div className="w-4 h-4 flex items-center justify-center">{item.icon}</div>
                    <span className="font-small">{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
