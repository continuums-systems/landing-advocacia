import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import PracticeCard from '../components/PracticeCard'
import {
  FiFileText,
  FiBriefcase,
  FiTrendingUp,
  FiDollarSign,
  FiHome,
  FiHeart,
  FiClock,
  FiUserCheck,
} from 'react-icons/fi'

const practices = [
  {
    icon: <FiFileText />,
    title: 'Direito Civil',
    description:
      'Atuamos em ações de indenização, contratos, responsabilidade civil, direito de família, sucessões e demais questões do Direito Civil com excelência e dedicação.',
  },
  {
    icon: <FiBriefcase />,
    title: 'Direito Trabalhista',
    description:
      'Defendemos os direitos de trabalhadores e empregadores em ações trabalhistas, acordos coletivos, rescisões contratuais e auditoria trabalhista.',
  },
  {
    icon: <FiTrendingUp />,
    title: 'Direito Empresarial',
    description:
      'Consultoria e contencioso empresarial, incluindo contratos societários, fusões e aquisições, recuperação judicial e governança corporativa.',
  },
  {
    icon: <FiDollarSign />,
    title: 'Direito Tributário',
    description:
      'Planejamento tributário, defesa em processos administrativos e judiciais, consultoria fiscal e recuperação de créditos tributários.',
  },
  {
    icon: <FiHome />,
    title: 'Direito Imobiliário',
    description:
      'Assessoria em compra e venda de imóveis, contratos de locação, usucapião, incorporação imobiliária e regularização de propriedades.',
  },
  {
    icon: <FiHeart />,
    title: 'Direito da Família',
    description:
      'Atuação em divórcios, guarda de filhos, pensão alimentícia, inventários e partilha de bens com sensibilidade e discrição.',
  },
  {
    icon: <FiClock />,
    title: 'Direito Previdenciário',
    description:
      'Aposentadorias, pensões, Benefício de Prestação Continuada (BPC/LOAS), revisões e planejamento previdenciário.',
  },
  {
    icon: <FiUserCheck />,
    title: 'Direito do Consumidor',
    description:
      'Proteção dos direitos do consumidor em relações de consumo, ações contra instituições financeiras, planos de saúde e fornecedores.',
  },
]

export default function PracticeAreas() {
  return (
    <section
      id="practice-areas"
      className="py-20 md:py-28 bg-gray-50"
      aria-label="Áreas de atuação"
    >
      <Container>
        <SectionTitle
          subtitle="Áreas de Atuação"
          title="Soluções jurídicas completas"
          description="Atendemos nas principais áreas do Direito com equipe especializada e dedicada."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {practices.map((practice) => (
            <PracticeCard key={practice.title} {...practice} />
          ))}
        </div>
      </Container>
    </section>
  )
}
