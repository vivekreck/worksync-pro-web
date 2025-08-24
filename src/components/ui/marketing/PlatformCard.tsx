import { PlatformModule } from '@/types'
import { Dispatch, SetStateAction } from 'react'
import { CheckListItem } from './CheckListItem'

interface PlatformCardProps {
  hoveredModule: string | null
  module: PlatformModule
  setHoveredModule: Dispatch<SetStateAction<string | null>>
}

export const PlatformCard = ({ hoveredModule, module, setHoveredModule }: PlatformCardProps) => {
  return (
    <div
      className={`backdrop-blur-md relative p-6 rounded-tl-[50px] rounded-br-[50px] border-2 transition-all duration-300 cursor-pointer group`}
      style={{
        borderColor: hoveredModule === module.id ? module.borderColor : '#374151',
      }}
      onMouseEnter={() => setHoveredModule(module.id)}
      onMouseLeave={() => setHoveredModule(null)}
    >
      <div className="flex justify-between align-middle">
        <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
        <div className={`inline-flex p-3 rounded-xl mb-4 text-[hsl(var(--color-foreground))]`}>
          {module.icon}
        </div>
      </div>

      <p className="text-[hsl(var(--color-foreground))]/80 mb-4 line-clamp-2">
        {module.description}
      </p>

      <div className="space-y-2 mb-6">
        {module.features.map((feature: string, idx: number) => (
          <CheckListItem key={idx} title={feature} />
        ))}
      </div>

      <div
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10  transition-opacity duration-300`}
      />
    </div>
  )
}
