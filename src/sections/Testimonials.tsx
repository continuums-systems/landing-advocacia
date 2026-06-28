import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import TestimonialCard from '../components/TestimonialCard'

const testimonials = [
  {
    name: 'Maria Beatriz Almeida',
    city: 'São Paulo - SP',
    rating: 5,
    text: 'Fui muito bem atendida pela equipe do Dr. Carlos. Resolveram meu caso trabalhista com rapidez e profissionalismo. Recomendo de olhos fechados.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80',
  },
  {
    name: 'João Vitor Martins',
    city: 'Campinas - SP',
    rating: 5,
    text: 'Excelente escritório! Me auxiliaram em uma questão empresarial complexa e o resultado superou minhas expectativas. Equipe muito competente.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
  },
  {
    name: 'Ana Lúcia Fernandes',
    city: 'São Bernardo - SP',
    rating: 5,
    text: 'A Dra. Juliana foi incrível no meu processo de divórcio. Além de profissional exemplar, teve toda a sensibilidade que eu precisava no momento.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
  },
  {
    name: 'Roberto Alves Junior',
    city: 'Santo André - SP',
    rating: 4,
    text: 'Escritório sério e comprometido. Meu caso previdenciário foi tratado com muita atenção e consegui a aposentadoria que buscava. Recomendo.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  },
]

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-white"
      aria-label="Depoimentos"
    >
      <Container>
        <SectionTitle
          subtitle="Depoimentos"
          title="O que nossos clientes dizem"
          description="A satisfação dos nossos clientes é o nosso maior reconhecimento."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  )
}
