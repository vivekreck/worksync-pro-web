import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LoginPage, SignupPage } from '@/features/auth/pages'

// Components
import { MarketingLayout } from '@/shared/components/layout'

// pages
import { LandingPage, PricingPage } from '@/features/marketing/pages'
import { NotFoundPage } from '@/shared/components/errors'

// Create router
const router = createBrowserRouter([
  {
    path: '/',
    element: <MarketingLayout />,
    children: [
      { path: '', element: <LandingPage /> },
      { path: 'pricing', element: <PricingPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignupPage /> },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

export const AppRouter = () => {
  return <RouterProvider router={router} />
}
