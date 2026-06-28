import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import { useInView } from '../hooks/useInView'
import { FiUserCheck, FiShield, FiAward, FiZap, FiCompass, FiStar } from 'react-icons/fi'

const features = [
  {
    icon: FiUserCheck,
    title: 'Atendimento Personalizado',
    text: 'Cada cliente recebe atenção exclusiva e um plano de ação jurídico sob medida.',
  },
  {
    icon: FiShield,
    title: 'Transparência',
    text: 'Acompanhamento detalhado do andamento processual com comunicação clara e constante.',
  },
  {
    icon: FiAward,
    title: 'Ética Profissional',
    text: 'Atuação pautada no mais rigoroso código de ética da Ordem dos Advogados do Brasil.',
  },
  {
    icon: FiZap,
    title: 'Atendimento Ágil',
    text: 'Respostas rápidas e eficientes, respeitando o tempo e a urgência de cada caso.',
  },
  {
    icon: FiCompass,
    title: 'Estratégias Personalizadas',
    text: 'Análise aprofundada de cada caso para definir a melhor estratégia jurídica.',
  },
  {
    icon: FiStar,
    title: 'Equipe Especializada',
    text: 'Advogados altamente capacitados e em constante atualização nas respectivas áreas.',
  },
]

export default function WhyChooseUs() {
  const { ref, inView } = useInView({ threshold: 0.1, once: true })

  return (
    <section className="py-20 md:py-28 bg-white" aria-label="Por que nos escolher">
      <Container>
        <SectionTitle
          subtitle="Diferenciais"
          title="Por que escolher a Silva & Associados?"
          description="Nossos diferenciais fazem toda a diferença na qualidade do serviço jurídico que oferecemos."
        />
        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-gray-100 p-6 md:p-8 hover:border-gold/30 hover:shadow-card-hover transition-all duration-300"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold-dark text-xl">
                <item.icon />
              </div>
              <h3 className="font-heading text-lg font-bold text-navy mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
