import { Mail, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-20 relative overflow-hidden bg-brand-navy text-white">
      {/* ambient glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-gradient blur-3xl opacity-20" />
        <div className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-navy-gradient blur-3xl opacity-30" />
      </div>
      {/* top divider */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid items-start gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="col-span-1">
            <h4 className="text-xl font-semibold tracking-tight">Abant OSGB</h4>
            <p className="mt-3 text-sm text-white/80 leading-relaxed">
              Güven, şeffaflık ve uzmanlıkla iş sağlığı ve güvenliği çözümleri.
            </p>
            <div className="mt-5 flex items-center gap-3 text-white/80">
              <a aria-label="LinkedIn" href="#" className="hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a aria-label="Instagram" href="#" className="hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
              <a aria-label="Facebook" href="#" className="hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold">Hizmetler</h4>
            <ul className="mt-4 space-y-2 text-white/80">
              <li><a href="#hizmetler" className="hover:text-white transition-colors">Risk Analizi</a></li>
              <li><a href="#hizmetler" className="hover:text-white transition-colors">İş Güvenliği Danışmanlığı</a></li>
              <li><a href="#egitimler" className="hover:text-white transition-colors">Eğitim Programları</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold">İletişim</h4>
            <ul className="mt-4 space-y-2 text-white/80">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Aktaş Mah. Taşhancılar Cd. No:31 B/22 Merkez/Bolu
              </li>
              {/* Telefon bilgisi kaldırıldı */}
              <li>
                <a href="mailto:info@abantosgb.com" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="h-4 w-4" /> info@abantosgb.com
                </a>
              </li>
            </ul>
          </div>
          {/* Hızlı Linkler sütunu kaldırıldı */}
        </div>
      </div>
      {/* Alt satır (Gizlilik/Şartlar) kaldırıldı */}
    </footer>
  )
}
