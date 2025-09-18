import SectionHeader from './SectionHeader'

export default function Contact() {
  return (
    <section id="iletisim" className="relative py-16 md:py-24 scroll-mt-28 md:scroll-mt-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(27,58,87,0.06),transparent_40%)]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="İletişim" subtitle="Size hızlıca ulaşalım" />
        <div className="grid gap-6 md:grid-cols-2">
          {/* Map + photo */}
          <div className="overflow-hidden rounded-2xl border border-brand-navy/10 bg-white shadow-soft">
            <div className="aspect-[16/10]">
              <iframe
                title="Harita"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Bolu&output=embed"
              />
            </div>
            <div className="space-y-4 p-4 text-sm text-brand-text/70">
              <p>Ofis: Bolu, Türkiye — Randevu ile ziyaret edebilirsiniz.</p>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-brand-navy">Telefon</div>
                <div className="mt-1 flex flex-col gap-1 text-base text-brand-navy">
                  <a href="tel:05379104049" className="hover:underline">0537 910 40 49</a>
                  <a href="tel:05428017857" className="hover:underline">0542 801 78 57</a>
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-brand-navy">E-posta</div>
                <a href="mailto:info@abantosgb.com" className="mt-1 inline-block text-base text-brand-navy hover:underline">
                  info@abantosgb.com
                </a>
              </div>
            </div>
          </div>
          {/* Form */}
          <div className="rounded-2xl border border-white/20 glass p-6 md:p-8">
            <form
              action="https://formsubmit.co/info@abantosgb.com"
              method="POST"
              className="grid grid-cols-1 gap-4"
            >
              <input type="hidden" name="_subject" value="Abant OSGB iletişim formu" />
              <input type="hidden" name="_captcha" value="false" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-brand-navy">Ad</label>
                  <input name="name" required className="w-full rounded-md border border-brand-navy/20 bg-white/80 px-3 py-2 outline-none focus:border-brand-navy" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-brand-navy">Soyad</label>
                  <input name="surname" required className="w-full rounded-md border border-brand-navy/20 bg-white/80 px-3 py-2 outline-none focus:border-brand-navy" />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-brand-navy">E-posta</label>
                <input type="email" name="email" required className="w-full rounded-md border border-brand-navy/20 bg-white/80 px-3 py-2 outline-none focus:border-brand-navy" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-brand-navy">Mesaj</label>
                <textarea name="message" rows={5} className="w-full rounded-md border border-brand-navy/20 bg-white/80 px-3 py-2 outline-none focus:border-brand-navy" />
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <button type="submit" className="btn-primary">Gönder</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
