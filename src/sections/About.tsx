import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import { useInView } from '../hooks/useInView'
import { FiShield, FiHeart, FiTarget, FiUsers } from 'react-icons/fi'

const values = [
  {
    icon: FiShield,
    title: 'Ética',
    text: 'Atuamos com rigor ético em cada caso, garantindo transparência total com nossos clientes.',
  },
  {
    icon: FiHeart,
    title: 'Atendimento Humanizado',
    text: 'Tratamos cada cliente com respeito, empatia e atenção individual às suas necessidades.',
  },
  {
    icon: FiTarget,
    title: 'Excelência',
    text: 'Buscamos a melhor solução jurídica com estudo aprofundado e estratégias personalizadas.',
  },
  {
    icon: FiUsers,
    title: 'Compromisso',
    text: 'Dedicamos total empenho à defesa dos interesses dos nossos clientes em todas as esferas.',
  },
]

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, once: true })

  return (
    <section id="about" className="py-20 md:py-28 bg-white" aria-label="Sobre o escritório">
      <Container>
        <SectionTitle
          subtitle="Sobre Nós"
          title="Mais de 20 anos de história e dedicação"
          description="Conheça nossa trajetória, missão e os valores que nos guiam na busca pela justiça."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb90b4af7?w=600&q=80"
                alt="Equipe do escritório Silva e Associados em reunião"
                className="w-full h-80 md:h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-navy text-white rounded-2xl p-6 shadow-lg hidden md:block">
              <span className="text-3xl font-heading font-bold text-gold">+20</span>
              <span className="block text-sm text-gray-300">anos de experiência</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
              Nossa História
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Fundado em 2005 pelo Dr. Carlos Silva, o escritório Silva & Associados
                nasceu da visão de oferecer um atendimento jurídico diferenciado, que
                combina conhecimento técnico de ponta com um tratamento humanizado.
              </p>
              <p>
                Ao longo de duas décadas, construímos uma sólida reputação baseada na
                ética, transparência e resultados consistentes. Já atendemos mais de
                500 clientes, entre pessoas físicas e jurídicas, em todo o estado de
                São Paulo.
              </p>
              <p>
                Nossa equipe é composta por advogados especializados, que atuam de
                forma integrada para oferecer soluções completas e personalizadas para
                cada caso.
              </p>
            </div>
          </motion.div>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl bg-gray-50 p-6 text-center hover:bg-gold/5 transition-colors"
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg gradient-gold text-navy">
                <item.icon className="text-xl" />
              </div>
              <h4 className="font-heading font-bold text-navy mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
