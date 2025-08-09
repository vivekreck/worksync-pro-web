import { BrowserRouter, Routes, Route } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md mx-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to WorkSync Pro 🚀</h1>
        <p className="text-gray-600">Advanced collaborative workspace platform</p>
      </div>
    </div>
  )
}

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
