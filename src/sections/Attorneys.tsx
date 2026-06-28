import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import AttorneyCard from '../components/AttorneyCard'

const attorneys = [
  {
    name: 'Dr. Carlos Silva',
    specialty: 'Direito Civil e Empresarial',
    bio: 'Sócio-fundador com mais de 25 anos de experiência. Mestre em Direito Civil pela USP. Referência em soluções empresariais complexas.',
    image: 'https://picsum.photos/seed/advogado1/200/200',
  },
  {
    name: 'Dra. Amanda Oliveira',
    specialty: 'Direito Trabalhista',
    bio: 'Especialista em Direito do Trabalho com vasta experiência em ações coletivas e acordos sindicais. Doutora pela PUC-SP.',
    image: 'https://picsum.photos/seed/advogado2/200/200',
  },
  {
    name: 'Dr. Rafael Costa',
    specialty: 'Direito Tributário',
    bio: 'Advogado tributarista com expertise em planejamento tributário e contencioso fiscal. Ex-auditor da Receita Federal.',
    image: 'https://picsum.photos/seed/advogado3/200/200',
  },
  {
    name: 'Dra. Juliana Santos',
    specialty: 'Direito da Família',
    bio: 'Advogada com atuação humanizada em Direito de Família e Sucessões. Mediadora certificada e referência em divórcios consensuais.',
    image: 'https://picsum.photos/seed/advogado4/200/200',
  },
]

export default function Attorneys() {
  return (
    <section id="attorneys" className="py-20 md:py-28 bg-gray-50" aria-label="Advogados">
      <Container>
        <SectionTitle
          subtitle="Nossa Equipe"
          title="Conheça nossos advogados"
          description="Profissionais altamente qualificados e dedicados à defesa dos seus direitos."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {attorneys.map((attorney) => (
            <AttorneyCard key={attorney.name} attorney={attorney} />
          ))}
        </div>
      </Container>
    </section>
  )
}
