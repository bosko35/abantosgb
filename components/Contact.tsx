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
            <div className="space-y-4 p-5 text-sm text-brand-text/70">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-brand-navy">Adres</div>
                <p className="mt-1 text-base text-brand-navy">Aktaş Mah. Taşhancılar Cd. No:31 B/22 Merkez/Bolu</p>
                <p className="mt-0.5 text-xs">Randevu ile ziyaret edebilirsiniz.</p>
                <a
                  href="https://maps.google.com/?cid=7477624985782710532"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-brand-navy underline-offset-2 hover:underline"
                >
                  Yol tarifi al →
                </a>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-brand-navy">Telefon</div>
                  <a href="tel:05323373814" className="mt-1 inline-block text-base text-brand-navy hover:underline">0532 337 38 14</a>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-brand-navy">E-posta</div>
                  <a href="mailto:info@abantosgb.com" className="mt-1 inline-block text-base text-brand-navy hover:underline">info@abantosgb.com</a>
                </div>
              </div>
            </div>
            <div className="aspect-[16/9] md:aspect-[16/8] bg-brand-navy/5">
              <iframe
                title="Harita"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=40.7293945,31.6101212&z=17&output=embed"
              />
            </div>
          </div>
          {/* Form */}
          <div className="rounded-2xl border border-white/20 glass p-6 md:p-8">
            <form
              action="https://formsubmit.co/info@abantosgb.com"
              method="POST"
              className="grid grid-cols-1 gap-4"
            >
              <input type="hidden" name="_subject" value="Abant OSGB teklif talebi" />
              <input type="hidden" name="_captcha" value="false" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-brand-navy">Ad Soyad <span className="text-brand-gold">*</span></label>
                  <input name="name" required autoComplete="name" className="w-full rounded-md border border-brand-navy/20 bg-white/80 px-3 py-2 outline-none focus:border-brand-navy" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-brand-navy">Telefon <span className="text-brand-gold">*</span></label>
                  <input type="tel" name="phone" required autoComplete="tel" placeholder="05xx xxx xx xx" className="w-full rounded-md border border-brand-navy/20 bg-white/80 px-3 py-2 outline-none focus:border-brand-navy" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-brand-navy">Firma adı <span className="text-xs font-normal text-brand-text/50">(isteğe bağlı)</span></label>
                  <input name="company" autoComplete="organization" className="w-full rounded-md border border-brand-navy/20 bg-white/80 px-3 py-2 outline-none focus:border-brand-navy" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-brand-navy">Çalışan sayısı <span className="text-xs font-normal text-brand-text/50">(isteğe bağlı)</span></label>
                  <select name="employees" defaultValue="" className="w-full rounded-md border border-brand-navy/20 bg-white/80 px-3 py-2 outline-none focus:border-brand-navy">
                    <option value="" disabled>Seçiniz</option>
                    <option>1-9</option>
                    <option>10-49</option>
                    <option>50-249</option>
                    <option>250 ve üzeri</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-brand-navy">Kısa mesaj <span className="text-xs font-normal text-brand-text/50">(isteğe bağlı)</span></label>
                <textarea name="message" rows={3} placeholder="Faaliyet alanınız ve ihtiyacınız (risk analizi, uzman/hekim, eğitim vb.)" className="w-full rounded-md border border-brand-navy/20 bg-white/80 px-3 py-2 outline-none focus:border-brand-navy" />
              </div>
              <details className="text-sm">
                <summary className="cursor-pointer text-brand-navy/80 hover:text-brand-navy">E-posta ile de dönüş istiyorum</summary>
                <div className="mt-2">
                  <label className="mb-1 block text-sm font-medium text-brand-navy">E-posta</label>
                  <input type="email" name="email" autoComplete="email" className="w-full rounded-md border border-brand-navy/20 bg-white/80 px-3 py-2 outline-none focus:border-brand-navy" />
                </div>
              </details>
              <label className="flex items-start gap-2 text-xs text-brand-text/70">
                <input type="checkbox" name="kvkk" required className="mt-0.5 h-4 w-4" />
                <span>
                  Paylaştığım bilgilerin talebime dönüş yapılması amacıyla işlenmesini kabul ediyorum.{' '}
                  <a href="/kvkk" className="underline hover:text-brand-navy">Aydınlatma metni</a>
                </span>
              </label>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <button type="submit" className="btn-primary">Teklif Al</button>
                <span className="text-xs text-brand-text/60">1 iş günü içinde dönüş yaparız.</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
