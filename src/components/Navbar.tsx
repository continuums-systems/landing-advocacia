import { useState, useEffect } from 'react'
import { useScrollTo } from '../hooks/useScrollTo'
import { HiMenu, HiX } from 'react-icons/hi'
import Button from './Button'
import Container from './Container'
import { motion, AnimatePresence } from 'framer-motion'

const menuItems = [
  { label: 'Início', href: 'hero' },
  { label: 'Sobre', href: 'about' },
  { label: 'Áreas de Atuação', href: 'practice-areas' },
  { label: 'Advogados', href: 'attorneys' },
  { label: 'Depoimentos', href: 'testimonials' },
  { label: 'FAQ', href: 'faq' },
  { label: 'Contato', href: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollTo } = useScrollTo()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (id: string) => {
    setOpen(false)
    scrollTo(id)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      role="banner"
    >
      <Container>
        <nav className="flex items-center justify-between py-4" aria-label="Navegação principal">
          <button
            onClick={() => handleClick('hero')}
            className="font-heading text-xl md:text-2xl font-bold text-navy cursor-pointer"
            aria-label="Voltar ao início"
          >
            <span className="text-gold">Silva</span> & Associados
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className="text-sm font-medium text-gray-700 hover:text-gold transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <Button size="sm" onClick={() => handleClick('contact')}>
              Agendar Consulta
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-navy cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-4 gap-2" aria-label="Navegação mobile">
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleClick(item.href)}
                  className="text-left px-4 py-3 text-sm font-medium text-gray-700 hover:text-gold hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-2 pb-4">
                <Button
                  size="sm"
                  className="w-full"
                  onClick={() => handleClick('contact')}
                >
                  Agendar Consulta
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
