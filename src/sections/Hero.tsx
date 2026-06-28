import { motion } from 'framer-motion'
import Container from '../components/Container'
import Button from '../components/Button'
import { useScrollTo } from '../hooks/useScrollTo'
import { FiArrowRight, FiMessageCircle } from 'react-icons/fi'

export default function Hero() {
  const { scrollTo } = useScrollTo()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-white"
      aria-label="Seção principal"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-gold/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-navy/5 to-transparent" />
      </div>

      <Container className="relative z-10 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block font-semibold text-sm tracking-widest uppercase text-gold mb-4">
              Advocacia de Excelência
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-navy">
              Defendendo seus direitos com{' '}
              <span className="text-gradient-gold">excelência</span>,
              ética e compromisso.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              Há mais de 20 anos, oferecemos soluções jurídicas completas com
              atendimento personalizado. Nossa equipe de advogados altamente
              especializados atua nas mais diversas áreas do Direito, sempre com
              transparência e dedicação.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                icon={<FiArrowRight />}
                onClick={() => scrollTo('contact')}
              >
                Agendar Consulta
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={<FiMessageCircle />}
                onClick={() => window.open('https://wa.me/5511988881234', '_blank')}
              >
                Fale pelo WhatsApp
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="w-96 h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://picsum.photos/seed/hero-main/600/700"
                  alt="Advogado em seu escritório atendendo cliente"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-40 h-40 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                <img
                  src="https://picsum.photos/seed/hero-team/200/200"
                  alt="Equipe de advogados reunidos"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-xl gradient-gold flex items-center justify-center shadow-gold">
                <span className="text-navy font-heading font-bold text-sm text-center leading-tight">
                  20+
                  <br />
                  Anos
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
