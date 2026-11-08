import { ShieldCheck, MapPin, Stethoscope, GraduationCap } from 'lucide-react'

const items = [
  {
    icon: ShieldCheck,
    title: 'Bakanlık yetkili OSGB',
    text: 'Yetki Belgesi OSGB-5019 · 31.10.2025',
  },
  {
    icon: Stethoscope,
    title: 'İşyeri hekimi ve iş güvenliği uzmanı',
    text: 'İSG-KATİP üzerinden resmî görevlendirme',
  },
  {
    icon: MapPin,
    title: 'Bolu merkezli saha ekibi',
    text: 'Merkez, Gerede, Mengen, Yeniçağa ve çevre ilçeler',
  },
  {
    icon: GraduationCap,
    title: 'Akademik altyapı',
    text: 'Üniversite ve Ar-Ge projeleriyle güncel mevzuat takibi',
  },
]

export default function TrustStrip() {
  return (
    <section aria-label="Güven unsurları" className="relative mt-10 md:mt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="flex items-start gap-3 rounded-xl border border-brand-navy/10 bg-white/80 px-4 py-3 shadow-soft backdrop-blur-md"
            >
              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-navy/5 text-brand-navy">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span>
                <span className="block text-sm font-semibold text-brand-navy">{title}</span>
                <span className="block text-xs text-brand-text/70">{text}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
