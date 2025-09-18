"use client"
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'

export default function MissionVision() {
  return (
    <section id="misyon-vizyon" className="relative py-16 md:py-24 bg-white overflow-hidden scroll-mt-28 md:scroll-mt-32">
      {/* Ambient background lights */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-gradient blur-3xl opacity-30" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-navy-gradient blur-3xl opacity-30" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Misyon & Vizyon" subtitle="Ciddiyet ve güveni altın vurgularla pekiştiriyoruz" />
        <div className="grid items-stretch gap-6 md:grid-cols-2">
          {/* Mission card */}
          <Reveal className="group relative h-full" delay={0}>
            <div className="relative h-full rounded-2xl p-[1px] bg-gradient-to-br from-brand-gold/40 via-white/20 to-brand-navy/40">
              <div className="relative h-full rounded-2xl border border-white/40 bg-white/80 p-8 shadow-soft backdrop-blur-md">
                <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(120%_120%_at_0%_0%,rgba(217,164,65,0.15),transparent_60%)]" aria-hidden />
                <div className="relative flex items-start gap-4">
                  <div className="mt-1 text-brand-navy icon-bubble" aria-hidden>
                    {/* Scales icon */}
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3v18"/><path d="M7 3h10"/><path d="M3 7h6l-3 7-3-7z"/><path d="M15 7h6l-3 7-3-7z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-6 px-2 items-center justify-center rounded-full bg-brand-navy/10 text-brand-navy text-[11px] font-semibold">Misyon</span>
                    </div>
                    <h3 className="mt-2 text-xl font-semibold text-brand-navy">Misyonumuz</h3>
                    <div className="mt-2 h-0.5 w-16 bg-brand-gold" />
                    <p className="mt-3 text-brand-text/70 leading-relaxed">
                      Abant OSGB olarak misyonumuz; Bolu ve çevresindeki işletmeler için iş sağlığı ve güvenliği hizmetlerini bütüncül bir yaklaşımla sunmaktır. Çalışan sağlığını korumak, iş kazalarını önlemek ve 6331 sayılı kanuna tam uyum sağlamak için risk analizi, acil durum planı, iş güvenliği danışmanlığı ve İSG eğitimleri alanında ölçülebilir ve sürdürülebilir çözümler üretiyoruz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Vision card */}
          <Reveal className="group relative h-full" delay={120}>
            <div className="relative h-full rounded-2xl p-[1px] bg-gradient-to-br from-brand-gold/40 via-white/20 to-brand-navy/40">
              <div className="relative h-full rounded-2xl border border-white/40 bg-white/80 p-8 shadow-soft backdrop-blur-md">
                <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(120%_120%_at_100%_0%,rgba(27,58,87,0.18),transparent_60%)]" aria-hidden />
                <div className="relative flex items-start gap-4">
                  <div className="mt-1 text-brand-navy icon-bubble" aria-hidden>
                    {/* Compass icon */}
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><polygon points="16 8 12 14 8 16 10 12 16 8"/>
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-6 px-2 items-center justify-center rounded-full bg-brand-navy/10 text-brand-navy text-[11px] font-semibold">Vizyon</span>
                    </div>
                    <h3 className="mt-2 text-xl font-semibold text-brand-navy">Vizyonumuz</h3>
                    <div className="mt-2 h-0.5 w-16 bg-brand-gold" />
                    <p className="mt-3 text-brand-text/70 leading-relaxed">
                      Abant OSGB’nin vizyonu; Bolu’da iş sağlığı ve güvenliği alanında yenilikçi uygulamalarla fark yaratarak bölgenin en güvenilir OSGB firması olmaktır. Hedefimiz, tüm sektörlerde riskleri en aza indiren iş güvenliği çözümleri sunmak, işverenlerin mevzuata uyumunu kolaylaştırmak ve çalışanlar için kalıcı bir güvenlik kültürü oluşturmaktır.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
