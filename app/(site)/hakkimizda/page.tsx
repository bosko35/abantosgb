import type { Metadata } from 'next'
import Link from 'next/link'
import { ShieldCheck, GraduationCap, FlaskConical, MapPin, Handshake, FileCheck2, ChevronRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const siteUrl = 'https://abantosgb.com'
const pageUrl = `${siteUrl}/hakkimizda`

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description:
    "Abant OSGB: Bolu merkezli, Bakanlık yetkili (OSGB-5019) ortak sağlık ve güvenlik birimi. Akademik altyapı, Ar-Ge iş birlikleri ve deri sektörü deneyimiyle iş sağlığı ve güvenliği hizmeti.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Hakkımızda | Abant OSGB',
    description: 'Bolu merkezli, Bakanlık yetkili OSGB. Akademik altyapı ve saha deneyimi.',
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
    { '@type': 'ListItem', position: 2, name: 'Hakkımızda', item: pageUrl },
  ],
} as const

const facts = [
  { icon: ShieldCheck, label: 'Yetki Belgesi', value: 'OSGB-5019 · 31.10.2025', note: 'T.C. Çalışma ve Sosyal Güvenlik Bakanlığı' },
  { icon: FileCheck2, label: 'Ticari Unvan', value: 'Abant Ortak Sağlık ve Güvenlik Birimi Ltd. Şti.', note: 'Bolu Ticaret Sicili, kuruluş 2025' },
  { icon: MapPin, label: 'Merkez', value: 'Aktaş Mah. Taşhancılar Cd. No:31 B/22, Merkez / Bolu', note: 'Hizmet bölgesi: Bolu ve ilçeleri' },
  { icon: GraduationCap, label: 'Akademik Altyapı', value: 'Üniversite öğretim kadrosu + doktora düzeyi İSG araştırması', note: 'Mevzuat ve literatür takibi güncel' },
]

const principles = [
  {
    icon: Handshake,
    title: 'Şeffaf hizmet ayrımı',
    text:
      'İşyeri hekimliği, iş güvenliği uzmanlığı, diğer sağlık personeli, risk değerlendirmesi, acil durum planı ve eğitimler kendi ekibimizle; ölçüm, periyodik kontrol, laboratuvar tetkiki ve patlamadan korunma dokümanı akredite çözüm ortaklarımızla. Hangi işi kimin yaptığını yazılı olarak belirtiriz.',
  },
  {
    icon: FlaskConical,
    title: 'Ar-Ge ile beslenen saha pratiği',
    text:
      'Üniversite ile ortak araştırma projelerinde (endüstriyel ortamlarda solunum koruyucu etkinliği, kimyasal maruziyet) yer alıyoruz. Sahada gördüğümüz sorunları araştırmaya, araştırma sonuçlarını sahaya taşıyoruz.',
  },
  {
    icon: ShieldCheck,
    title: 'Deri ve kimya sektöründe derinlik',
    text:
      'Gerede Deri Organize Sanayi Bölgesi başta olmak üzere tabakhane ve deri kimyasalları tesislerinde risk değerlendirmesi, acil durum planı ve kimyasal güvenlik (SDS yönetimi) deneyimimiz var. Çok tehlikeli sınıf işyerlerinin ihtiyaçlarını biliyoruz.',
  },
]

export default function HakkimizdaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 md:pt-36 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
          <nav aria-label="Sayfa konumu" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm font-medium text-brand-text/70">
              <li>
                <Link href="/" className="text-brand-navy transition-colors hover:text-brand-gold">www.abantosgb.com</Link>
              </li>
              <li aria-hidden><ChevronRight className="h-4 w-4 text-brand-text/50" /></li>
              <li className="font-semibold text-brand-navy">Hakkımızda</li>
            </ol>
          </nav>

          <header className="max-w-3xl">
            <p className="text-sm font-medium text-emerald-600">Abant OSGB</p>
            <h1 className="mt-1 text-3xl md:text-5xl font-bold text-brand-navy">Bolu'da sahaya inen, mevzuatı izleyen bir ekip</h1>
            <p className="mt-4 text-lg text-brand-text/75 leading-relaxed">
              Abant OSGB, Bolu merkezli ve Bakanlık yetkili bir ortak sağlık ve güvenlik birimidir. İşletmelerin 6331 sayılı Kanun
              kapsamındaki yükümlülüklerini yerine getirmesi için işyeri hekimi ve iş güvenliği uzmanı görevlendirir, risk
              değerlendirmesi, acil durum planı ve çalışan eğitimlerini yürütür. Kurucu kadromuz üniversitede ders veren ve iş
              güvenliği alanında doktora düzeyinde araştırma yapan İSG profesyonellerinden oluşur.
            </p>
          </header>

          {/* Künye */}
          <section aria-label="Künye" className="mt-12 grid gap-4 sm:grid-cols-2">
            {facts.map(({ icon: Icon, label, value, note }) => (
              <div key={label} className="flex items-start gap-4 rounded-2xl border border-brand-navy/10 bg-white/80 p-5 shadow-soft backdrop-blur-md">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-navy">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-brand-text/60">{label}</div>
                  <div className="mt-1 font-semibold text-brand-navy">{value}</div>
                  <div className="mt-0.5 text-sm text-brand-text/65">{note}</div>
                </div>
              </div>
            ))}
          </section>

          {/* İlkeler */}
          <section className="mt-14">
            <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy">Bizi farklı kılan üç ilke</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {principles.map(({ icon: Icon, title, text }) => (
                <article key={title} className="rounded-2xl border border-white/40 bg-white/80 p-6 shadow-soft backdrop-blur-md">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gradient text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-brand-navy">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-text/75">{text}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Nasıl çalışıyoruz */}
          <section className="mt-14 rounded-2xl bg-brand-navy p-8 text-white md:p-10">
            <h2 className="text-2xl md:text-3xl font-semibold">Bir işletmeyle nasıl çalışıyoruz?</h2>
            <ol className="mt-6 grid gap-6 md:grid-cols-4">
              {[
                ['Keşif', 'Tehlike sınıfı, çalışan sayısı ve mevcut dokümanlar incelenir; yasal süreler hesaplanır.'],
                ['Sözleşme ve İSG-KATİP', 'Hekim ve uzman görevlendirmesi Bakanlık sistemi üzerinden yapılır.'],
                ['Saha', 'Risk değerlendirmesi, acil durum planı, eğitimler ve sağlık gözetimi planlanıp uygulanır.'],
                ['Takip', 'Aylık ziyaretler, yenileme takvimi, denetim hazırlığı ve raporlama sürer.'],
              ].map(([t, d], i) => (
                <li key={t} className="rounded-xl bg-white/5 p-5 ring-1 ring-white/10">
                  <div className="text-xs font-semibold text-brand-gold">Adım {i + 1}</div>
                  <div className="mt-1 font-semibold">{t}</div>
                  <p className="mt-2 text-sm text-white/75">{d}</p>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/iletisim" className="btn-primary btn-cta">Hizmet Talebi</Link>
              <Link href="/hesaplama" className="inline-flex items-center justify-center rounded-md border border-white/30 px-5 py-3 text-white hover:bg-white/10">
                Yasal süreyi hesapla
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
