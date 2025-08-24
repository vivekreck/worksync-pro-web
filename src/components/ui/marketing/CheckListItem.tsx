import { CheckCircle } from 'lucide-react'

interface CheckListItemProps {
  title: string
  available?: boolean
  textColor?: string
}

export const CheckListItem = ({
  title,
  available = true,
  textColor = 'text-[hsl(var(--color-foreground))]/80',
}: CheckListItemProps) => {
  return (
    <div
      className={`flex items-center text-sm',
        ${available ? textColor : 'text-[hsl(var(--color-muted-foreground))]'}`}
    >
      <CheckCircle
        className={`w-4 h-4 mr-2 flex-shrink-0', ${available ? 'text-green-500' : 'text-[hsl(var(--color-muted-foreground))]'}`}
      />
      <span className={available ? '' : 'line-through'}>{title}</span>
    </div>
  )
}
