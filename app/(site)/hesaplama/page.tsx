import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SureHesaplayici from '@/components/SureHesaplayici'

const siteUrl = 'https://abantosgb.com'
const pageUrl = `${siteUrl}/hesaplama`

export const metadata: Metadata = {
  title: 'İSG Uzmanı ve İşyeri Hekimi Süre Hesaplama',
  description:
    'Tehlike sınıfı ve çalışan sayısına göre işyerinizde ayda kaç saat iş güvenliği uzmanı, işyeri hekimi ve diğer sağlık personeli görevlendirmeniz gerektiğini hesaplayın.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'İSG Yasal Süre Hesaplama | Abant OSGB',
    description: 'Tehlike sınıfı + çalışan sayısı → aylık asgari uzman ve hekim süresi.',
    url: pageUrl,
    siteName: 'Abant OSGB',
    locale: 'tr_TR',
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Abant OSGB', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Süre Hesaplama', item: pageUrl },
  ],
} as const

export default function HesaplamaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 md:pt-36 pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
          <nav aria-label="Sayfa konumu" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm font-medium text-brand-text/70">
              <li><Link href="/" className="text-brand-navy hover:text-brand-gold">www.abantosgb.com</Link></li>
              <li aria-hidden><ChevronRight className="h-4 w-4 text-brand-text/50" /></li>
              <li className="font-semibold text-brand-navy">Süre Hesaplama</li>
            </ol>
          </nav>

          <header className="max-w-3xl">
            <p className="text-sm font-medium text-emerald-600">Ücretsiz araç</p>
            <h1 className="mt-1 text-3xl md:text-4xl font-bold text-brand-navy">İşyerinize ayda kaç saat uzman ve hekim gerekiyor?</h1>
            <p className="mt-3 text-brand-text/75">
              Tehlike sınıfınızı ve çalışan sayınızı girin; yönetmeliklerdeki asgari aylık süreleri anında görün. Sonuçla birlikte teklif isteyebilirsiniz.
            </p>
          </header>

          <div className="mt-8">
            <SureHesaplayici />
          </div>

          <section className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-brand-navy/10 bg-white/80 p-6">
              <h2 className="text-lg font-semibold text-brand-navy">Süreler nereden geliyor?</h2>
              <ul className="mt-3 space-y-2 text-sm text-brand-text/75">
                <li><strong>İş güvenliği uzmanı:</strong> çalışan başına ayda az tehlikeli 10 dk, tehlikeli 20 dk, çok tehlikeli 40 dk. Tam zamanlı eşiği: 1000 / 500 / 250 çalışan.</li>
                <li><strong>İşyeri hekimi:</strong> çalışan başına ayda 5 / 10 / 15 dk. Tam zamanlı eşiği: 2000 / 1000 / 750 çalışan.</li>
                <li><strong>Diğer sağlık personeli:</strong> çok tehlikeli sınıfta 10-49 çalışan için 10 dk, 50-249 için 15 dk, 250 ve üzeri için 20 dk.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-navy/10 bg-white/80 p-6">
              <h2 className="text-lg font-semibold text-brand-navy">Tehlike sınıfımı nasıl öğrenirim?</h2>
              <p className="mt-3 text-sm text-brand-text/75">
                SGK işyeri sicil numaranızın ilk haneleri NACE faaliyet kodunu gösterir; Bakanlığın İş Sağlığı ve Güvenliğine İlişkin
                İşyeri Tehlike Sınıfları Tebliği'nde bu kodun karşısında sınıf yazar. Birden fazla faaliyet varsa asıl iş esas alınır.
                Sicil numaranızı yazmanız yeterli, sınıfı biz bulup bildirelim.
              </p>
              <Link href="/iletisim" className="btn-outline mt-4 inline-flex">Sınıfımı sorun</Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
