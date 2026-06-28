import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import PracticeAreas from './sections/PracticeAreas'
import WhyChooseUs from './sections/WhyChooseUs'
import Statistics from './sections/Statistics'
import Attorneys from './sections/Attorneys'
import Testimonials from './sections/Testimonials'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'
import { JsonLd } from './utils/seo'

export default function App() {
  return (
    <>
      <Helmet>
        <html lang="pt-BR" />
        <title>
          Advocacia Silva & Associados | Especialistas em Direito Civil,
          Trabalhista e Empresarial
        </title>
        <meta
          name="description"
          content="Escritório de advocacia especializado em soluções jurídicas com atendimento personalizado, ética e excelência."
        />
        <meta property="og:title" content="Advocacia Silva & Associados | Especialistas em Direito Civil, Trabalhista e Empresarial" />
        <meta
          property="og:description"
          content="Escritório de advocacia especializado em soluções jurídicas com atendimento personalizado, ética e excelência."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://advocaciasilvaassociados.com.br" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Advocacia Silva & Associados | Especialistas em Direito Civil, Trabalhista e Empresarial" />
        <meta
          name="twitter:description"
          content="Escritório de advocacia especializado em soluções jurídicas com atendimento personalizado, ética e excelência."
        />
        <link rel="canonical" href="https://advocaciasilvaassociados.com.br" />
      </Helmet>
      <JsonLd />
      <Navbar />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <WhyChooseUs />
        <Statistics />
        <Attorneys />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
