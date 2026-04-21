import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyLexPaul from '@/components/WhyLexPaul'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyLexPaul />
      <HowItWorks />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  )
}
