import Container from './Container'
import { useScrollTo } from '../hooks/useScrollTo'
import { FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi'

const menuItems = [
  { label: 'Início', href: 'hero' },
  { label: 'Sobre', href: 'about' },
  { label: 'Áreas de Atuação', href: 'practice-areas' },
  { label: 'Advogados', href: 'attorneys' },
  { label: 'Depoimentos', href: 'testimonials' },
  { label: 'FAQ', href: 'faq' },
  { label: 'Contato', href: 'contact' },
]

const practiceLinks = [
  'Direito Civil',
  'Direito Trabalhista',
  'Direito Empresarial',
  'Direito Tributário',
  'Direito Imobiliário',
  'Direito da Família',
  'Direito Previdenciário',
  'Direito do Consumidor',
]

export default function Footer() {
  const { scrollTo } = useScrollTo()

  return (
    <footer className="bg-navy text-gray-300" role="contentinfo">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <span className="font-heading text-xl font-bold text-white">
              <span className="text-gold">Silva</span> & Associados
            </span>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Excelência jurídica com atendimento humanizado. Mais de 20 anos
              defendendo os direitos dos nossos clientes com ética e compromisso.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-light text-gray-400 hover:bg-gold hover:text-navy transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-light text-gray-400 hover:bg-gold hover:text-navy transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiInstagram />
              </a>
              <a
                href="mailto:contato@advocaciasilva.com.br"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-light text-gray-400 hover:bg-gold hover:text-navy transition-colors"
                aria-label="Enviar e-mail"
              >
                <FiMail />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Menu</h3>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="text-sm text-gray-400 hover:text-gold transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Áreas de Atuação</h3>
            <ul className="space-y-2">
              {practiceLinks.map((item) => (
                <li key={item}>
                  <span className="text-sm text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>(11) 3000-1234</li>
              <li>(11) 9 8888-1234</li>
              <li>contato@advocaciasilva.com.br</li>
              <li>
                Av. Paulista, 1000
                <br />
                Bela Vista, São Paulo - SP
                <br />
                01310-100
              </li>
              <li>Seg a Sex: 9h às 18h</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Silva & Associados. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
