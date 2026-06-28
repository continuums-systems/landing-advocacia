import Card from './Card'
import { FiLinkedin } from 'react-icons/fi'

interface Attorney {
  name: string
  specialty: string
  bio: string
  image: string
}

interface AttorneyCardProps {
  attorney: Attorney
}

export default function AttorneyCard({ attorney }: AttorneyCardProps) {
  return (
    <Card className="p-6 text-center">
      <div className="mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full bg-gray-100">
        <img
          src={attorney.image}
          alt={`Foto do advogado ${attorney.name}`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <h3 className="font-heading text-xl font-bold text-navy">{attorney.name}</h3>
      <span className="inline-block mt-1 text-sm font-medium text-gold">
        {attorney.specialty}
      </span>
      <p className="mt-3 text-sm text-gray-600 leading-relaxed">{attorney.bio}</p>
      <a
        href="#"
        className="inline-flex items-center gap-1.5 mt-4 text-sm text-navy hover:text-gold transition-colors"
        aria-label={`LinkedIn de ${attorney.name}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiLinkedin className="text-lg" />
        LinkedIn
      </a>
    </Card>
  )
}
