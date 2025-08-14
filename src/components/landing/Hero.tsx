// src/components/landing/Hero.tsx
// import { Button } from '@/components/ui/Button'

export const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Where Teams
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {' '}
              Sync
            </span>
            <br />
            Work Flows
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Advanced collaborative workspace platform that brings your team together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button variant="primary" size="lg">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  )
}
