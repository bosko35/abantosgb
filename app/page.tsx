import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ServicesShowcase from '@/components/ServicesShowcase'
import TrustStrip from '@/components/TrustStrip'
import SureHesaplayici from '@/components/SureHesaplayici'
import SectionHeader from '@/components/SectionHeader'
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
        <TrustStrip />
        <ServicesShowcase />
        <section id="hesaplama" className="relative py-16 md:py-20 scroll-mt-28 md:scroll-mt-32">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Ayda kaç saat uzman ve hekim gerekiyor?"
              subtitle="Tehlike sınıfı ve çalışan sayısını girin, yasal asgari süreleri anında görün."
            />
            <SureHesaplayici compact />
          </div>
        </section>
        <MissionVision />
        <SectorInsights />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
