import { useState, type FormEvent } from 'react'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import Input from '../components/Input'
import Textarea from '../components/Textarea'
import Button from '../components/Button'
import { FiSend, FiPhone, FiMessageCircle, FiMail, FiMapPin, FiClock } from 'react-icons/fi'

interface FormErrors {
  [key: string]: string
}

export default function Contact() {
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (data: FormData): FormErrors => {
    const errs: FormErrors = {}
    const nome = data.get('nome') as string
    const email = data.get('email') as string
    const telefone = data.get('telefone') as string
    const mensagem = data.get('mensagem') as string

    if (!nome || nome.trim().length < 3) errs.nome = 'Nome deve ter pelo menos 3 caracteres'
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = 'Informe um e-mail válido'
    if (!telefone || telefone.trim().length < 10)
      errs.telefone = 'Informe um telefone válido'
    if (!mensagem || mensagem.trim().length < 10)
      errs.mensagem = 'Mensagem deve ter pelo menos 10 caracteres'

    return errs
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const errs = validate(data)

    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setErrors({})
    setSubmitted(true)
    form.reset()
  }

  const contactInfo = [
    { icon: FiPhone, label: 'Telefone', value: '(11) 3000-1234' },
    {
      icon: FiMessageCircle,
      label: 'WhatsApp',
      value: '(11) 9 8888-1234',
      href: 'https://wa.me/5511988881234',
    },
    {
      icon: FiMail,
      label: 'E-mail',
      value: 'contato@advocaciasilva.com.br',
      href: 'mailto:contato@advocaciasilva.com.br',
    },
    { icon: FiMapPin, label: 'Endereço', value: 'Av. Paulista, 1000 - Bela Vista, São Paulo - SP' },
    { icon: FiClock, label: 'Horário', value: 'Seg a Sex: 9h às 18h' },
  ]

  return (
    <section id="contact" className="py-20 md:py-28 bg-white" aria-label="Contato">
      <Container>
        <SectionTitle
          subtitle="Contato"
          title="Entre em contato conosco"
          description="Estamos prontos para atender você. Agende uma consulta ou tire suas dúvidas."
        />
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            {submitted ? (
              <div
                className="rounded-xl bg-green-50 border border-green-200 p-8 text-center"
                role="alert"
              >
                <div className="text-4xl mb-3">&#10003;</div>
                <h3 className="font-heading text-xl font-bold text-green-800 mb-2">
                  Mensagem enviada com sucesso!
                </h3>
                <p className="text-green-700">
                  Entraremos em contato em até 24 horas úteis.
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => setSubmitted(false)}
                >
                  Enviar nova mensagem
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5"
                aria-label="Formulário de contato"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Input
                    label="Nome"
                    name="nome"
                    placeholder="Seu nome completo"
                    required
                    error={errors.nome}
                  />
                  <Input
                    label="E-mail"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    required
                    error={errors.email}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Input
                    label="Telefone"
                    name="telefone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    required
                    error={errors.telefone}
                  />
                  <Input
                    label="Assunto"
                    name="assunto"
                    placeholder="Ex: Consulta Trabalhista"
                  />
                </div>
                <Textarea
                  label="Mensagem"
                  name="mensagem"
                  placeholder="Descreva seu caso ou dúvida..."
                  required
                  error={errors.mensagem}
                />
                <Button type="submit" size="lg" icon={<FiSend />}>
                  Enviar Mensagem
                </Button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-xl bg-gray-50 p-6 space-y-5">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg gradient-gold text-navy text-lg">
                    <item.icon />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      {item.label}
                    </span>
                    {'href' in item && item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-navy hover:text-gold transition-colors font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm text-navy font-medium">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl overflow-hidden h-48 bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197493348882!2d-46.6540!3d-23.5610!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8f0c0c0c1%3A0x0!2zMjPCsDMzJzM5LjYiUyA0NsKwMzknMTQuNCJX!5e0!3m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do escritório Silva & Associados na Av. Paulista"
                aria-label="Mapa mostrando a localização do escritório na Av. Paulista, São Paulo"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
