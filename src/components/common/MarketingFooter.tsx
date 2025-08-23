import { MapPin, Globe } from 'lucide-react'

export const MarketingFooter = () => {
  return (
    <div className="border-t backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6 text-slate-400 text-sm">
            <span>&copy; 2025 WorkSync Pro. All rights reserved.</span>
            <span className="hidden md:block">•</span>
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              Made with passion globally
            </span>
          </div>
          <div className="flex items-center space-x-6 text-slate-400 text-sm">
            <button className="hover:text-white transition-colors duration-200">
              Accessibility
            </button>
            <button className="hover:text-white transition-colors duration-200">
              Cookie Settings
            </button>
            <div className="flex items-center">
              <Globe className="w-4 h-4 mr-1" />
              English
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
