import { Outlet } from 'react-router-dom'
import { MarketingFooter, MarketingHeader } from '@/components/common'

export const MarketingLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MarketingHeader />

      <main className="flex-1 pt-16">
        <Outlet />
      </main>

      <MarketingFooter />
    </div>
  )
}
