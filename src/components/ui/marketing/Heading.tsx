interface HeroHeadingProps {
  variant: 'hero' | 'section'
  title: string
  subtitle?: string
  className?: string
}

export const Heading = ({ variant, title, subtitle, className = '' }: HeroHeadingProps) => {
  const content = {
    title: title,
    subtitle: subtitle || '',
  }

  if (variant === 'hero') {
    return (
      <div className={`text-center lg:text-left ${className}`}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-8xl font-semibold tracking-tight leading-tight text-[hsl(var(--color-foreground))]">
          {content.title}
        </h1>
        <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl text-[hsl(var(--color-muted-foreground))] max-w-2xl mx-auto lg:mx-0">
          {content.subtitle.split('. ')[0]}
          <span className="hidden sm:inline">
            <br />
          </span>
          <span className="sm:hidden"> </span>
          {content.subtitle.split('. ')[1]}
        </p>
      </div>
    )
  }

  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-4xl font-bold mb-4 text-[hsl(var(--color-foreground))]">
        {content.title}
      </h2>
      <p className="text-xl text-[hsl(var(--color-foreground)/0.7)] max-w-3xl mx-auto">
        {content.subtitle}
      </p>
    </div>
  )
}
