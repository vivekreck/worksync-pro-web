import { Outlet } from 'react-router-dom'
import { MarketingHeader } from '@/shared/components/layout'

export const MarketingLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MarketingHeader />

      <main className="flex-1 pt-16">
        <Outlet />
      </main>
    </div>
  )
}
