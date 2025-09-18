import SectionHeader from './SectionHeader'
import Reveal from './Reveal'

export default function Trainings() {
  return (
    <section id="egitimler" className="relative py-16 md:py-24 overflow-hidden">
      {/* Soft ambient background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-gradient blur-3xl opacity-20" />
        <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-navy-gradient blur-3xl opacity-25" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Eğitimler" subtitle="Online ve yerinde, ihtiyaçlarınıza uygun yeni nesil eğitim deneyimi" />

        <div className="grid gap-6 md:grid-cols-2">
          {/* Online */}
          <Reveal className="group relative h-full" delay={0}>
            {/* Gradient border wrapper */}
            <div className="relative h-full rounded-2xl p-[1px] bg-gradient-to-br from-brand-gold/40 via-white/20 to-brand-navy/40 transition-transform duration-200 group-hover:-translate-y-1">
              <div className="relative h-full rounded-2xl border border-white/40 bg-white/85 p-7 md:p-8 shadow-soft backdrop-blur-md overflow-hidden">
                {/* Floating sheen */}
                <div className="pointer-events-none absolute -top-20 -left-10 h-56 w-56 rounded-full bg-brand-gradient opacity-25 blur-2xl group-hover:opacity-40 transition-opacity" aria-hidden />
                {/* Decorative lines */}
                <div className="pointer-events-none absolute right-4 top-4 text-brand-navy/20" aria-hidden>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="12" rx="2"/>
                    <path d="M2 20h20"/>
                  </svg>
                </div>

                <div className="relative flex items-start gap-4">
                  <div className="mt-1 text-brand-navy icon-bubble" aria-hidden>
                    {/* Laptop icon */}
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="12" rx="2"/>
                      <path d="M2 20h20"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-semibold text-brand-navy">Online Eğitimler</h3>
                      <span className="ml-1 inline-flex items-center rounded-full bg-brand-navy/10 px-2 py-0.5 text-[11px] font-medium text-brand-navy">Uzaktan</span>
                      <span className="inline-flex items-center rounded-full bg-brand-gold/15 px-2 py-0.5 text-[11px] font-medium text-brand-navy/90">Esnek Zamanlı</span>
                    </div>
                    <p className="mt-3 text-brand-text/70 leading-relaxed">
                      Esnek zamanlı, etkileşimli ve ölçülebilir içeriklerle çalışanlarınız her yerden katılabilir. Sertifika ve raporlama desteği.
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                      <a href="/iletisim" className="btn-details">Detaylı Bilgi</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* On-site */}
          <Reveal className="group relative h-full" delay={120}>
            <div className="relative h-full rounded-2xl p-[1px] bg-gradient-to-br from-brand-navy/40 via-white/20 to-brand-gold/40 transition-transform duration-200 group-hover:-translate-y-1">
              <div className="relative h-full rounded-2xl border border-white/40 bg-white/85 p-7 md:p-8 shadow-soft backdrop-blur-md overflow-hidden">
                {/* Floating sheen */}
                <div className="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-navy-gradient opacity-25 blur-2xl group-hover:opacity-40 transition-opacity" aria-hidden />
                {/* Decorative lines */}
                <div className="pointer-events-none absolute right-4 top-4 text-brand-navy/20" aria-hidden>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="18" rx="1"/>
                    <rect x="14" y="7" width="7" height="14" rx="1"/>
                  </svg>
                </div>

                <div className="relative flex items-start gap-4">
                  <div className="mt-1 text-brand-navy icon-bubble" aria-hidden>
                    {/* Building icon */}
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="18" rx="1"/>
                      <rect x="14" y="7" width="7" height="14" rx="1"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-semibold text-brand-navy">Yerinde Eğitimler</h3>
                      <span className="ml-1 inline-flex items-center rounded-full bg-brand-navy/10 px-2 py-0.5 text-[11px] font-medium text-brand-navy">Sahada</span>
                      <span className="inline-flex items-center rounded-full bg-brand-gold/15 px-2 py-0.5 text-[11px] font-medium text-brand-navy/90">Uygulamalı</span>
                    </div>
                    <p className="mt-3 text-brand-text/70 leading-relaxed">
                      Saha koşullarına uygun, uygulamalı ve ölçülebilir eğitimlerle kurum içi güvenlik kültürünü güçlendiriyoruz. Eğitim sonrası değerlendirme ve raporlama içerir.
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                      <a href="/iletisim" className="btn-details">Detaylı Bilgi</a>
                    </div>
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
