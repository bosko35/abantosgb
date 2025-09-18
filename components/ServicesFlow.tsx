import SectionHeader from './SectionHeader'

const steps = [
  {
    id: 1,
    title: 'Risk Analizi',
    desc: 'Saha ve süreç odaklı kapsamlı değerlendirme ile riskleri belirler, etkili aksiyonlar planlarız.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M21 21l-4.35-4.35"/>
        <circle cx="11" cy="11" r="7"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'İş Güvenliği',
    desc: 'Mevzuata uygun, ölçülebilir ve sürdürülebilir güvenlik uygulamaları ile koruyucu sistem kurarız.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M2 12h20"/>
        <path d="M6 12v-2a6 6 0 0 1 12 0v2"/>
        <path d="M5 12v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Eğitimler',
    desc: 'Online ve yerinde eğitimlerle kurum içinde kalıcı bir güvenlik kültürü geliştiririz.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M22 10L12 4 2 10l10 6 10-6z"/>
        <path d="M6 12v5c0 .7 3 2 6 2s6-1.3 6-2v-5"/>
      </svg>
    ),
  },
]

export default function ServicesFlow() {
  return (
    <section id="hizmetler" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Hizmet Akışımız" subtitle="Klasik kartlar yerine yalın ve anlaşılır bir süreç" />
        <div className="relative">
          {/* Connector line */}
          <div className="absolute left-1/2 top-0 hidden h-full -translate-x-1/2 md:block" aria-hidden>
            <div className="h-full w-1 rounded bg-gradient-to-b from-brand-green/20 via-brand-gold/20 to-brand-navy/20" />
          </div>
          {/* Steps */}
          <div className="grid items-stretch gap-6 md:grid-cols-3">
            {steps.map((s, idx) => (
              <div key={s.id} className="group relative h-full">
                <div className="relative flex h-full flex-col justify-between rounded-2xl border border-brand-navy/10 bg-white/80 backdrop-blur-md p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(0,0,0,0.35)]">
                  <div className="flex items-start gap-4">
                    <div className="icon-bubble flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-navy/10 text-brand-navy transition-transform duration-200 group-hover:scale-105 group-hover:text-brand-green">
                      {s.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-gradient text-white text-xs font-semibold">
                          {s.id}
                        </span>
                        <h3 className="text-lg font-semibold text-brand-navy">{s.title}</h3>
                      </div>
                      <p className="mt-2 text-sm text-brand-text/70 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                  <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-brand-navy/5 to-transparent" />
                  <div className="mt-3 flex items-center justify-between text-xs text-brand-text/60">
                    <span className="inline-flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-brand-green/70" />
                      Hazırız
                    </span>
                    <a href="/iletisim" className="text-brand-navy/80 hover:text-brand-navy font-medium">Detay</a>
                  </div>
                </div>
                {idx < steps.length - 1 && (
                  <>
                    {/* Mobile vertical connector */}
                    <div className="md:hidden mx-auto my-2 h-10 w-px bg-gradient-to-b from-brand-navy/10 to-brand-gold/10" aria-hidden />
                    {/* Desktop horizontal connector */}
                    <div className="timeline-connector" aria-hidden />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
