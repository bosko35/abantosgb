import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ServicesShowcase from '@/components/ServicesShowcase'
import MissionVision from '@/components/MissionVision'
import SectorInsights from '@/components/SectorInsights'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesShowcase />
        <MissionVision />
        <SectorInsights />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
