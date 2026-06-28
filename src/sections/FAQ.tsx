import { useState } from 'react'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import Accordion from '../components/Accordion'

const faqItems = [
  {
    id: '1',
    question: 'Como funciona a primeira consulta?',
    answer:
      'A primeira consulta é o momento em que você nos apresenta seu caso. Realizamos uma análise preliminar, esclarecemos suas dúvidas sobre o procedimento e apresentamos as possíveis estratégias jurídicas. A consulta pode ser presencial ou online, conforme sua preferência.',
  },
  {
    id: '2',
    question: 'Quais documentos devo levar na primeira consulta?',
    answer:
      'Recomendamos trazer documentos pessoais (RG e CPF), comprovante de residência, e todos os documentos relacionados ao caso, como contratos, notificações, comprovantes, fotos, e-mails ou qualquer outro material que possa ajudar na análise da sua situação.',
  },
  {
    id: '3',
    question: 'O atendimento é online?',
    answer:
      'Sim! Oferecemos atendimento presencial em nosso escritório na Av. Paulista, e também atendimento online por videoconferência para sua comodidade. Ambos os formatos têm o mesmo padrão de qualidade e profissionalismo.',
  },
  {
    id: '4',
    question: 'Quanto tempo dura um processo judicial?',
    answer:
      'O prazo de um processo varia conforme a complexidade do caso, a vara judicial e o tipo de ação. Alguns processos podem ser resolvidos em poucos meses, enquanto outros podem levar anos. Durante a consulta, daremos uma estimativa mais precisa baseada no seu caso específico.',
  },
  {
    id: '5',
    question: 'Como solicitar um orçamento?',
    answer:
      'Você pode solicitar um orçamento pelo formulário de contato do nosso site, pelo WhatsApp ou por telefone. Agendamos uma conversa inicial para entender seu caso e apresentamos uma proposta transparente sem compromisso.',
  },
  {
    id: '6',
    question: 'Vocês atendem causas de todo o Brasil?',
    answer:
      'Nosso escritório está sediado em São Paulo, mas atuamos em causas em todo o território nacional, com vasta experiência em tribunais superiores em Brasília. Temos parceiros em diversos estados para garantir atendimento local quando necessário.',
  },
  {
    id: '7',
    question: 'Como é feita a comunicação com o cliente?',
    answer:
      'Mantemos uma comunicação transparente e constante. Você receberá atualizações regulares sobre o andamento do seu processo por e-mail, WhatsApp ou telefone. Também disponibilizamos um canal direto com o advogado responsável pelo seu caso.',
  },
  {
    id: '8',
    question: 'Quais formas de pagamento são aceitas?',
    answer:
      'Aceitamos pagamentos por boleto bancário, transferência, PIX e cartões de crédito e débito. Trabalhamos com condições especiais e parcelamento para adequar às suas necessidades. Tudo é tratado com total transparência desde o primeiro contato.',
  },
]

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null)

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section
      id="faq"
      className="py-20 md:py-28 bg-gray-50"
      aria-label="Perguntas frequentes"
    >
      <Container>
        <SectionTitle
          subtitle="FAQ"
          title="Perguntas Frequentes"
          description="Tire suas principais dúvidas sobre nossos serviços e processos."
        />
        <div className="max-w-3xl mx-auto">
          <Accordion items={faqItems} openId={openId} onToggle={handleToggle} />
        </div>
      </Container>
    </section>
  )
}
