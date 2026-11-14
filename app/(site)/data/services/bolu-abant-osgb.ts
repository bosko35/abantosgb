import type { ServicePageData } from "./index";

const data: ServicePageData = {
  slug: "bolu-abant-osgb",
  title: "Bolu Abant OSGB: Merkez ve İlçelerde İş Sağlığı ve Güvenliği",
  hero: {
    subtitle: "Abant OSGB · Yetki Belgesi OSGB-5019",
    tagline:
      "Bolu Merkez, Gerede, Mudurnu, Mengen, Göynük, Yeniçağa, Dörtdivan, Seben ve Kıbrıscık'taki işyerlerine iş güvenliği uzmanı, işyeri hekimi ve diğer sağlık personeli hizmeti veriyoruz.",
    primaryCta: { label: "Teklif Al", href: "/iletisim" },
    secondaryCta: { label: "Yasal Süreyi Hesapla", href: "/hesaplama" },
  },
  highlights: [
    { label: "Yetki", value: "Çalışma ve Sosyal Güvenlik Bakanlığı, OSGB-5019" },
    { label: "Ofis", value: "Aktaş Mah. Taşhancılar Cd. No:31 B/22, Bolu Merkez" },
    { label: "Hizmet bölgesi", value: "Bolu Merkez ve 8 ilçe" },
    { label: "Görevlendirme", value: "İSG-KATİP üzerinden resmî sözleşme" },
  ],
  toc: [
    "Bolu'da Neleri Kapsıyoruz?",
    "İlçelerde Nasıl Çalışıyoruz?",
    "Teslim Ettiğimiz Dokümanlar",
    "Hizmet Verdiğimiz İlçeler",
    "Sık Sorulan Sorular",
    "İlçe Sayfaları ve İlgili Hizmetler",
  ],
  scope: {
    intro:
      "Abant OSGB, Bolu'da kurulu ve Bakanlık yetki belgesine sahip bir ortak sağlık ve güvenlik birimidir. 6331 sayılı İş Sağlığı ve Güvenliği Kanunu kapsamında işverenin hizmet satın alma yükümlülüğünü; uzman, hekim ve diğer sağlık personeli görevlendirmesiyle tek sözleşmede karşılarız. Hizmet bölgemiz Bolu ili ile sınırlıdır; böylece ziyaretleri düzenli ve zamanında planlayabiliyoruz.",
    bullets: [
      "İş güvenliği uzmanı görevlendirmesi (A, B ve C sınıfı)",
      "İşyeri hekimi görevlendirmesi ve sağlık gözetimi",
      "Diğer sağlık personeli (DSP) görevlendirmesi",
      "Risk değerlendirmesi ve acil durum eylem planı",
      "İşe başlama ve tekrar İSG eğitimleri",
      "Ölçüm, tetkik ve periyodik kontroller için çözüm ortağı koordinasyonu",
    ],
  },
  process: [
    { step: 1, title: "Ön görüşme ve keşif", desc: "NACE koduna göre tehlike sınıfı ve çalışan sayısı netleşir; yasal aylık süreler hesaplanır." },
    { step: 2, title: "İSG-KATİP sözleşmesi", desc: "Uzman, hekim ve gerekiyorsa DSP görevlendirmesi Bakanlık sistemi üzerinden yapılır." },
    { step: 3, title: "İlçe rotası", desc: "İlçelerdeki işyerleri aylık ziyaret rotasına eklenir; ziyaret günleri işverenle önceden kararlaştırılır." },
    { step: 4, title: "Saha çalışması", desc: "Risk değerlendirmesi, eğitimler, muayeneler ve tespitler işyerinde yapılır." },
    { step: 5, title: "Kayıt ve takip", desc: "Tespit ve öneri defteri, DÖF ve eğitim kayıtları düzenli tutulur; eksikler hatırlatılır." },
  ],
  deliverables: [
    "Risk değerlendirmesi raporu",
    "Acil durum eylem planı",
    "Yıllık çalışma planı ve yıllık değerlendirme raporu",
    "Eğitim katılım kayıtları ve sertifikalar",
    "İşe giriş ve periyodik muayene formları",
    "Tespit ve öneri defteri kayıtları",
  ],
  sectors: [
    "Bolu Merkez: sanayi, gıda, hizmet ve eğitim kurumları",
    "Gerede: Deri İhtisas OSB, tabakhaneler ve deri kimyasalları",
    "Mudurnu: orman ürünleri, gıda ve turizm işletmeleri",
    "Mengen: madencilik, orman ürünleri ve yapı işleri",
    "Göynük: tarım, orman ve küçük üretim işletmeleri",
    "Yeniçağa ve Dörtdivan: yol üstü tesisler, gıda ve hizmet işletmeleri",
    "Seben ve Kıbrıscık: tarım, hayvancılık ve yerel işletmeler",
  ],
  faq: [
    {
      q: "Bolu'nun ilçelerindeki işyerlerine de hizmet veriyor musunuz?",
      a: "Evet. Bolu Merkez'in yanı sıra Gerede, Mudurnu, Mengen, Göynük, Yeniçağa, Dörtdivan, Seben ve Kıbrıscık'taki işyerlerine hizmet veriyoruz. İlçelerdeki ziyaretler aylık rota ile planlanır ve yasal süreler eksiksiz karşılanır.",
    },
    {
      q: "Bolu dışındaki illere hizmet veriyor musunuz?",
      a: "Hayır. OSGB hizmetini Bolu ili sınırları içinde veriyoruz. Böylece uzman ve hekim ziyaretlerini düzenli, zamanında ve yerinde yapabiliyoruz.",
    },
    {
      q: "OSGB'den hizmet almak zorunlu mu?",
      a: "6331 sayılı Kanun'a göre işveren, iş güvenliği uzmanı ve işyeri hekimi görevlendirmekle yükümlüdür. Bu görevi kendi personeliyle karşılayamayan işyerleri hizmeti Bakanlık yetkili bir OSGB'den satın alır.",
    },
    {
      q: "Ayda kaç saat uzman ve hekim hizmeti almam gerekiyor?",
      a: "Süre tehlike sınıfına ve çalışan sayısına göre değişir. Hesaplama sayfamızda tehlike sınıfınızı ve çalışan sayınızı girerek yasal asgari süreleri görebilirsiniz.",
    },
    {
      q: "Teklif almak için ne gerekiyor?",
      a: "İşyerinizin unvanı, adresi, NACE kodu (ya da faaliyet konusu) ve çalışan sayısı yeterli. 0532 337 38 14 numarasından veya iletişim formundan bize ulaşabilirsiniz.",
    },
  ],
  related: [
    { title: "Abant OSGB Gerede: Deri İhtisas OSB", href: "/hizmetler/abant-osgb-gerede" },
    { title: "Abant OSGB Mudurnu", href: "/hizmetler/abant-osgb-mudurnu" },
    { title: "Abant OSGB Mengen", href: "/hizmetler/abant-osgb-mengen" },
    { title: "Bolu İşyeri Hekimliği", href: "/hizmetler/isyeri-hekimligi-bolu" },
    { title: "Bolu Risk Analizi", href: "/hizmetler/risk-analizi-bolu" },
    { title: "Yasal Süre Hesaplama", href: "/hesaplama" },
  ],
  cta: {
    banner: "Bolu'daki işyeriniz için uzman ve hekim ihtiyacını birlikte netleştirelim.",
    primary: { label: "Teklif Al", href: "/iletisim" },
    secondary: { label: "0532 337 38 14", href: "tel:05323373814" },
  },
  seo: {
    title: "Bolu Abant OSGB: İş Güvenliği Uzmanı ve İşyeri Hekimi (Merkez ve İlçeler)",
    description:
      "Abant OSGB, Bolu'da Bakanlık yetkili (OSGB-5019) ortak sağlık ve güvenlik birimidir. Bolu Merkez, Gerede, Mudurnu, Mengen ve diğer ilçelerde iş güvenliği uzmanı, işyeri hekimi ve DSP hizmeti.",
    keywords: ["Bolu Abant OSGB", "Bolu'da OSGB", "Bolu iş güvenliği uzmanı", "Bolu işyeri hekimi", "Gerede'de OSGB", "Mudurnu'da OSGB", "Mengen'de OSGB", "Abant OSGB"],
  },
};

export default data;
