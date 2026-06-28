import type { ReactNode } from 'react'
import Card from './Card'

interface PracticeCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function PracticeCard({ icon, title, description }: PracticeCardProps) {
  return (
    <Card className="p-6 md:p-8 group">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl gradient-gold text-navy text-2xl">
        {icon}
      </div>
      <h3 className="font-heading text-xl font-bold text-navy mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
    </Card>
  )
}
