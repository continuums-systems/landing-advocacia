import Card from './Card'
import { HiStar } from 'react-icons/hi'

interface Testimonial {
  name: string
  city: string
  rating: number
  text: string
  image: string
}

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="p-6 md:p-8">
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }, (_, i) => (
          <HiStar
            key={i}
            className={`text-lg ${
              i < testimonial.rating ? 'text-gold' : 'text-gray-200'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-600 leading-relaxed mb-6 italic">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shrink-0">
          <img
            src={testimonial.image}
            alt={`Foto de ${testimonial.name}`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <span className="block font-semibold text-navy text-sm">
            {testimonial.name}
          </span>
          <span className="block text-xs text-gray-500">{testimonial.city}</span>
        </div>
      </div>
    </Card>
  )
}
