import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const siteUrl = 'https://abantosgb.com'

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni',
  description:
    'Abant Ortak Sağlık ve Güvenlik Birimi Ltd. Şti. tarafından 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında hazırlanan aydınlatma metni ve çerez bilgilendirmesi.',
  alternates: { canonical: `${siteUrl}/kvkk` },
  robots: { index: true, follow: true },
}

export default function KvkkPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 md:pt-40 pb-16">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-brand-text/90 leading-relaxed">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-navy">Kişisel Verilerin Korunması — Aydınlatma Metni</h1>
          <p className="mt-3 text-sm text-brand-text/60">6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) 10. madde kapsamında hazırlanmıştır.</p>

          <h2 className="mt-10 text-xl font-semibold text-brand-navy">1. Veri sorumlusu</h2>
          <p className="mt-2">
            Abant Ortak Sağlık ve Güvenlik Birimi Limited Şirketi (&quot;Abant OSGB&quot;), Aktaş Mah. Taşhancılar Cd. No:31 B/22
            Merkez/Bolu adresinde faaliyet gösteren veri sorumlusudur. İletişim: <a href="mailto:info@abantosgb.com" className="underline">info@abantosgb.com</a>, 0532 337 38 14.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-brand-navy">2. Hangi verileri, hangi amaçla işliyoruz?</h2>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>
              <strong>İletişim formu:</strong> ad, soyad, telefon, e-posta, firma adı, çalışan sayısı ve mesaj içeriği; talebinize dönüş
              yapmak, teklif hazırlamak ve hizmet planlaması için işlenir.
            </li>
            <li>
              <strong>Telefon ve WhatsApp görüşmeleri:</strong> iletişim bilgileriniz ve görüşme içeriği; hizmet talebinizin karşılanması için işlenir.
            </li>
            <li>
              <strong>Site kullanım verileri (çerezler):</strong> sayfa görüntüleme, cihaz ve tarayıcı bilgileri gibi anonimleştirilmiş kullanım verileri;
              sitenin performansını ölçmek ve kullanım deneyimini iyileştirmek için Microsoft Clarity ve Vercel Analytics araçlarıyla işlenir.
              Bu araçlar sizi kimliğinizle tanımlamaz.
            </li>
          </ul>

          <h2 className="mt-8 text-xl font-semibold text-brand-navy">3. Hukuki sebep</h2>
          <p className="mt-2">
            Verileriniz KVKK 5. maddesi uyarınca; bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması, veri sorumlusunun meşru menfaati ve
            talep ettiğiniz hizmete ilişkin iletişimin sağlanması hukuki sebeplerine dayanılarak işlenir. Çerezlerle toplanan ölçüm verileri için açık rızanız esas alınır.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-brand-navy">4. Aktarım</h2>
          <p className="mt-2">
            İletişim formu verileri e-posta altyapısı üzerinden tarafımıza iletilir; site ölçüm verileri Microsoft ve Vercel sunucularında işlenir.
            Verileriniz yasal zorunluluklar dışında üçüncü kişilerle paylaşılmaz, pazarlama amacıyla satılmaz.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-brand-navy">5. Saklama süresi</h2>
          <p className="mt-2">
            Teklif aşamasında kalan talepler en fazla 2 yıl; hizmet sözleşmesine dönüşen talepler ilgili mevzuatın (6331 sayılı İş Sağlığı ve Güvenliği Kanunu,
            Türk Ticaret Kanunu, Vergi Usul Kanunu) öngördüğü süreler boyunca saklanır.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-brand-navy">6. Haklarınız</h2>
          <p className="mt-2">KVKK 11. maddesi kapsamında;</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
            <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
            <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
            <li>Aktarıldığı üçüncü kişileri bilme,</li>
            <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme,</li>
            <li>Silinmesini veya yok edilmesini isteme,</li>
            <li>İşlemenin kanuna aykırı olması sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
          </ul>
          <p className="mt-2">
            haklarına sahipsiniz. Başvurularınızı <a href="mailto:info@abantosgb.com" className="underline">info@abantosgb.com</a> adresine veya
            yukarıdaki posta adresine yazılı olarak iletebilirsiniz. Başvurular en geç 30 gün içinde yanıtlanır.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-brand-navy">7. Çerezler</h2>
          <p className="mt-2">
            Sitemiz zorunlu çerezler dışında yalnızca anonim ölçüm çerezleri kullanır. Tarayıcınızın ayarlarından çerezleri dilediğiniz zaman silebilir veya engelleyebilirsiniz;
            bu durumda site işlevleri etkilenmez.
          </p>

          <p className="mt-10 text-sm text-brand-text/60">Son güncelleme: Kasım 2026</p>
        </article>
      </main>
      <Footer />
    </>
  )
}
