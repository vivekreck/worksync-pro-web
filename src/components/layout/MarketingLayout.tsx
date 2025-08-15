import { Outlet } from 'react-router-dom'
import { MarketingNavbar } from '@/components/common/MarketingNavbar'
import { MarketingFooter } from '@/components/common/MarketingFooter'

export const MarketingLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MarketingNavbar />

      <main className="flex-1 pt-16">
        <Outlet />
      </main>

      <MarketingFooter />
    </div>
  )
}
