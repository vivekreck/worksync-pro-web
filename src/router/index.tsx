import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Components
import { MarketingLayout } from '@/components/layout'

// pages
import { LandingPage, LoginPage, PricingPage, SignupPage } from '@/pages/marketing'
import { NotFoundPage } from '@/pages/errors'

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
