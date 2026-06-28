import { useState, useEffect } from 'react'
import { useInView } from '../hooks/useInView'

interface CounterProps {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
  label: string
}

export default function Counter({
  end,
  suffix = '',
  prefix = '',
  duration = 2000,
  label,
}: CounterProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ threshold: 0.5 })

  useEffect(() => {
    if (!inView) {
      setCount(0)
      return
    }

    let startTime: number | null = null
    let animationId: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))

      if (progress < 1) {
        animationId = requestAnimationFrame(animate)
      }
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [inView, end, duration])

  return (
    <div ref={ref} className="text-center">
      <span className="block font-heading text-4xl md:text-5xl font-bold text-gold">
        {prefix}
        {count}
        {suffix}
      </span>
      <span className="block mt-2 text-sm font-medium text-gray-600 uppercase tracking-wider">
        {label}
      </span>
    </div>
  )
}
