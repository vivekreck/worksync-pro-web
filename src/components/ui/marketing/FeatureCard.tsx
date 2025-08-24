import { FeatureCardProps } from '@/types/entities/feature'

export const FeatureCard = ({
  feature,
  index,
  isActive,
  handleFeatureClick,
  ITEM_HEIGHT,
  originalIndex,
}: FeatureCardProps) => {
  const { id, title, icon, description } = feature
  return (
    <div
      key={`${id}-${index}`}
      className={`rounded-2xl p-8 shadow-lg border transition-all duration-500 ease-out cursor-pointer flex items-start gap-5 ${
        isActive
          ? 'border-[3px] border-transparent [border-image:linear-gradient(to_right,transparent,hsl(var(--color-accent)),transparent)_1]'
          : 'border-[3px] border-transparent [border-image:linear-gradient(to_right,transparent,hsl(var(--color-foreground)),transparent)_1]'
      }`}
      style={{ height: `${ITEM_HEIGHT - 20}px` }}
      onClick={() => handleFeatureClick(originalIndex)}
    >
      <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
        {icon(isActive ? 'text-[hsl(var(--color-accent))]' : 'text-[hsl(var(--color-foreground))]')}
      </div>
      <div className="flex-1">
        <h3
          className={`text-xl font-semibold text-[hsl(var(--color-foreground))] mb-2 leading-tight`}
        >
          {title}
        </h3>
        <p className={`text-base text-[hsl(var(--color-foreground))] leading-relaxed font-normal`}>
          {description}
        </p>
      </div>
    </div>
  )
}
