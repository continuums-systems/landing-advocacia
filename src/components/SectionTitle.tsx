interface SectionTitleProps {
  subtitle?: string
  title: string
  description?: string
  align?: 'center' | 'left'
  light?: boolean
}

export default function SectionTitle({
  subtitle,
  title,
  description,
  align = 'center',
  light = false,
}: SectionTitleProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === 'center' ? 'text-center' : 'text-left'
      }`}
    >
      {subtitle && (
        <span
          className={`inline-block font-semibold text-sm tracking-widest uppercase mb-3 ${
            light ? 'text-gold-light' : 'text-gold'
          }`}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl mx-auto text-lg leading-relaxed ${
            align === 'center' ? 'mx-auto' : ''
          } ${light ? 'text-gray-300' : 'text-gray-600'}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
