import Container from '../components/Container'
import Counter from '../components/Counter'

const stats = [
  { end: 20, suffix: '+', label: 'Anos de Experiência' },
  { end: 1000, suffix: '+', label: 'Processos Concluídos' },
  { end: 98, suffix: '%', label: 'Satisfação dos Clientes' },
  { end: 500, suffix: '+', label: 'Clientes Atendidos' },
]

export default function Statistics() {
  return (
    <section
      className="py-16 md:py-20 gradient-navy"
      aria-label="Estatísticas do escritório"
    >
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <Counter
              key={stat.label}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
