import { FeatureHighlight, FeaturesList, Heading } from '@/shared/components/ui/marketing'
import { useState } from 'react'

export const FeaturesSection = () => {
  const [highlightTitle, SetHighlightTitle] = useState('')
  const handleHighlightTitle = (highlightTitle: string) => {
    SetHighlightTitle(highlightTitle)
  }

  return (
    <div className="min-h-screen px-10 py-20 lg:px-10">
      <div className="text-center mb-12">
        <Heading
          variant="section"
          title="Everything Your Team Needs"
          subtitle="All-in-one platform for projects, tasks, and communication — everything your team needs to stay in sync without juggling multiple tools."
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-15 items-start  backdrop-blur">
          <FeaturesList handleHighlightTitle={handleHighlightTitle} />
          <FeatureHighlight highlightTitle={highlightTitle || ''} />
        </div>
      </div>
    </div>
  )
}
