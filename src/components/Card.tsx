import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`rounded-2xl bg-white shadow-card transition-all duration-300 ${
        hover
          ? 'hover:shadow-card-hover hover:-translate-y-1'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
