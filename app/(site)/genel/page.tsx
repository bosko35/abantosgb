import type { Metadata } from 'next'
import { Globe, Instagram, MapPin, ArrowUpRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'

export const metadata: Metadata = {
  title: 'Genel Bağlantılar | Abant OSGB',
  description: 'Abant OSGB dijital kanallarına hızlı erişim: web sitesi, Instagram hesabı ve harita üzerinden adres bilgileri.',
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
      <main className="pt-28 md:pt-36">
        <section className="relative py-16 md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(217,164,65,0.08),transparent_55%)]" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Abant OSGB Genel Bağlantılar"
              subtitle="Dijital kanallarımıza hızlıca ulaşın."
            />
            <div className="grid gap-6 md:grid-cols-3">
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
                    <div className="relative flex h-full flex-col gap-5 p-6">
                      <span className="icon-bubble inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand-navy/10 bg-white text-brand-navy">
                        <Icon className="h-6 w-6" />
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
