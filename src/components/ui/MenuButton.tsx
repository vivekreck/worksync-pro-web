import { motion, AnimatePresence } from 'framer-motion'
import { X, MoreVertical } from 'lucide-react'

interface MenuButtonProps {
  isOpen: boolean
  onToggle: () => void
}

export const MenuButton = ({ isOpen, onToggle }: MenuButtonProps) => {
  return (
    <div className="md:hidden">
      <motion.button
        className="p-3 rounded-lg bg-transparent  transition-colors"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        onClick={onToggle}
        whileTap={{ scale: 0.95 }}
      >
        <div className="w-4 h-4 relative">
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className="absolute inset-0 text-white"
              >
                <X className="w-4 h-4" />
              </motion.div>
            ) : (
              <motion.div
                key="dots"
                initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className="absolute inset-0 text-white"
              >
                <MoreVertical className="w-4 h-4" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.button>
    </div>
  )
}
