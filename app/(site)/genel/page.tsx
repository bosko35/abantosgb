import type { Metadata } from 'next'
import { Globe, Instagram, MapPin, ArrowUpRight, Phone, Mail } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'

const pageUrl = 'https://abantosgb.com/genel'

export const metadata: Metadata = {
  title: 'Genel Bağlantılar | Abant OSGB',
  description: 'Abant OSGB dijital kanalları, iletişim bilgileri ve Google Harita bağlantısı tek sayfada.',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'Abant OSGB Genel Bağlantılar',
    description: 'Bolu merkezli OSGB hizmeti veren Abant OSGB’nin resmi iletişim bilgileri, sosyal medya hesapları ve konumu.',
    url: pageUrl,
    siteName: 'Abant OSGB',
    locale: 'tr_TR',
  },
  keywords: ['Abant OSGB', 'Abant OSGB iletişim', 'Bolu OSGB', 'Abant OSGB adres', 'Abant OSGB telefon'],
}

type Resource = {
  title: string
  description: string
  href: string
  action: string
  icon: LucideIcon
  address?: string
}

const resources: Resource[] = [
  {
    title: 'İnternet Sitesi',
    description: 'Abant OSGB’nin tüm hizmetlerini ve içeriklerini keşfetmek için ana web sitemizi ziyaret edin.',
    href: 'https://abantosgb.com',
    action: 'Web sitesini aç',
    icon: Globe,
  },
  {
    title: 'Instagram Hesabı',
    description: 'Güncel duyuruları, etkinlikleri ve sahadan kareleri Instagram hesabımızda takip edin.',
    href: 'https://www.instagram.com/abantosgb',
    action: 'Instagram’a git',
    icon: Instagram,
  },
  {
    title: 'Adres Bilgisi',
    description: 'Aktaş Mah. Taşhancılar Cd. No:31 B/22 Merkez/Bolu adresimize harita üzerinden navigasyon alın veya konum detaylarını görüntüleyin.',
    href: 'https://maps.google.com/?q=Akta%C5%9F+Mah.+Ta%C5%9Fhanc%C4%B1lar+Cd.+No:31+B%2F22+Merkez%2FBolu',
    action: 'Haritada aç',
    icon: MapPin,
    address: 'Aktaş Mah. Taşhancılar Cd. No:31 B/22 Merkez/Bolu',
  },
]

export default function GenelPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 md:pt-36">
        <section className="relative py-12 md:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(217,164,65,0.08),transparent_55%)]" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Abant OSGB Genel Bağlantılar"
              subtitle="Dijital kanallarımıza hızlıca ulaşın."
              className="mb-6 md:mb-10"
            />
            <div className="mb-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <article className="space-y-4 text-base text-brand-text/80">
                <p>
                  Abant OSGB, Bolu ve çevre illerde iş sağlığı ve güvenliğini güçlendirmek için
                  sahaya inen bir ekip. “Abant OSGB iletişim”, “Bolu OSGB adres” ya da “Abant OSGB telefon”
                  aramalarında gördüğünüz tüm bilgiler bu sayfada güncel tutulur; böylece tek kaynaktan
                  resmi bağlantılarımıza ulaşabilirsiniz.
                </p>
                <p>
                  Yerinde risk analizi, iş güvenliği uzmanı görevlendirmesi, işyeri hekimi koordinasyonu ve
                  İSG eğitimleri ihtiyaçlarınızda Bolu merkezli çözüm ortağı olarak çalışıyoruz. Online kanallarımız,
                  Google Business Profile kaydımız ve harita linkimiz aynı marka kimliğini ve iletişim bilgilerini taşır.
                </p>
                <ul className="list-disc space-y-2 pl-5 text-sm md:text-base">
                  <li>Resmî unvan: Abant Ortak Sağlık Güvenlik Birimi (Abant OSGB)</li>
                  <li>Hizmet Bölgesi: Bolu merkez, ilçeler ve komşu illerde organize sanayi bölgeleri</li>
                  <li>Uzmanlıklar: Risk analizi, iş güvenliği uzmanı, İSG eğitimleri, saha denetimleri</li>
                </ul>
              </article>
              <div className="rounded-2xl border border-brand-navy/10 bg-white/90 p-6 shadow-soft">
                <h3 className="text-lg font-semibold text-brand-navy">Abant OSGB İletişim Kartı</h3>
                <p className="mt-2 text-sm text-brand-text/70">
                  Google aramalarında yer alan NAP (Name-Address-Phone) bilgilerimizin doğrulanmış hali.
                </p>
                <dl className="mt-5 space-y-4 text-sm text-brand-text/90">
                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 h-4 w-4 text-brand-navy" />
                    <div>
                      <dt className="text-xs uppercase tracking-wide text-brand-text/60">Telefon</dt>
                      <dd className="mt-1 flex flex-col font-semibold text-brand-navy">
                        <a href="tel:05323373814" className="hover:underline">0532 337 38 14</a>
                        <a href="tel:05428017857" className="hover:underline">0542 801 78 57</a>
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 h-4 w-4 text-brand-navy" />
                    <div>
                      <dt className="text-xs uppercase tracking-wide text-brand-text/60">E-posta</dt>
                      <dd className="mt-1 font-semibold text-brand-navy">
                        <a href="mailto:info@abantosgb.com" className="hover:underline">info@abantosgb.com</a>
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-4 w-4 text-brand-navy" />
                    <div>
                      <dt className="text-xs uppercase tracking-wide text-brand-text/60">Adres</dt>
                      <dd className="mt-1 font-semibold text-brand-navy">
                        Aktaş Mah. Taşhancılar Cd. No:31 B/22 Merkez/Bolu
                      </dd>
                    </div>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-brand-text/60">Harita & GBP</dt>
                    <dd className="mt-1 font-semibold text-brand-navy">
                      <a
                        href="https://maps.google.com/?q=Akta%C5%9F+Mah.+Ta%C5%9Fhanc%C4%B1lar+Cd.+No:31+B/22+Merkez/Bolu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        Google Business Profile üzerinde görüntüle
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="grid gap-4 md:gap-6 md:grid-cols-3">
              {resources.map((resource) => {
                const Icon = resource.icon
                return (
                  <a
                    key={resource.title}
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-2xl border border-brand-navy/10 bg-white/90 shadow-soft transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 via-transparent to-brand-navy/5 opacity-0 transition-opacity duration-200 group-hover:opacity-100" aria-hidden />
                    <div className="relative flex h-full flex-col gap-4 p-5 md:p-6">
                      <span className="icon-bubble inline-flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-brand-navy/10 bg-white text-brand-navy">
                        <Icon className="h-5 w-5 md:h-6 md:w-6" />
                      </span>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-brand-navy">{resource.title}</h3>
                        <p className="text-sm text-brand-text/70">
                          {resource.description}
                        </p>
                        {resource.address && (
                          <p className="text-sm font-medium text-brand-navy/90">
                            {resource.address}
                          </p>
                        )}
                      </div>
                      <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-brand-navy/80 transition-colors duration-200 group-hover:text-brand-navy">
                        {resource.action}
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
