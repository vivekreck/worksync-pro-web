import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Components
import { LandingPage } from '@/pages/marketing'
import { NotFoundPage } from '@/pages/errors'

// Create router
const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '*', // Catch-all route for 404
    element: <NotFoundPage />,
  },
])

export const AppRouter = () => {
  return <RouterProvider router={router} />
}
