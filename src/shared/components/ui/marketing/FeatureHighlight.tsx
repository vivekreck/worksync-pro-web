interface FeatureHighlightProps {
  highlightTitle: string
}

export const FeatureHighlight = ({ highlightTitle }: FeatureHighlightProps) => {
  return (
    <div className="rounded-3xl p-20 flex items-center justify-center h-full sticky top-0 min-h-[400px] lg:min-h-[calc(100vh-200px)] transition-all duration-500 border-2 ml-5  backdrop-blur">
      <div className="text-center">
        <h2
          className="text-4xl lg:text-5xl font-bold text-[hsl(var(--color-foreground))] leading-tight tracking-tight transition-all duration-500 transform"
          dangerouslySetInnerHTML={{
            __html: highlightTitle.replace(/\n/g, '<br>') || '',
          }}
        />
      </div>
    </div>
  )
}
