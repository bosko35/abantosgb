import type { ServicePageData } from "./index";

const data: ServicePageData = {
  slug: "cozum-ortagi-hizmetleri",
  title: "Çözüm Ortağı Hizmetleri: Sağlık Taraması, Ölçüm, Periyodik Kontrol, PKD",
  hero: {
    subtitle: "Akredite çözüm ortaklarımızla",
    tagline:
      "OSGB yetki belgesi kapsamı dışında kalan ama işyerinizin ihtiyaç duyduğu teknik hizmetleri, yetkili ve akredite çözüm ortaklarımızla planlar, koordine eder ve sonuçlarını risk değerlendirmenize işleriz. Bu hizmetler çözüm ortağı tarafından verilir ve ayrıca faturalandırılır.",
    primaryCta: { label: "Teklif Al", href: "/iletisim" },
  },
  highlights: [
    { label: "Kim yapar?", value: "Yetkili / akredite çözüm ortağı" },
    { label: "Bizim rolümüz", value: "Planlama, koordinasyon, RD entegrasyonu" },
    { label: "Faturalama", value: "Çözüm ortağı tarafından ayrıca" },
    { label: "Şeffaflık", value: "Hangi işi kimin yaptığı yazılı olarak belirtilir" },
  ],
  toc: [
    "Neleri Kapsıyoruz?",
    "Nasıl Çalışıyoruz?",
    "Teslim Edilen Dokümanlar",
    "Sektörel Uyarlamalar",
    "Sık Sorulan Sorular",
    "İlgili Hizmetler",
  ],
  scope: {
    intro:
      "Aşağıdaki hizmetler Abant OSGB'nin kendi yetki kapsamında değildir; mevzuatın aradığı yetki ve akreditasyona sahip çözüm ortaklarımız tarafından yapılır. Abant OSGB ihtiyacı belirler, uygun ortağı yönlendirir, saha gününü planlar ve sonuçları İSG dokümantasyonunuza entegre eder.",
    bullets: [
      "Mobil sağlık taraması: akciğer grafisi, odyometri (işitme), solunum fonksiyon testi, kan ve idrar tetkikleri, göz taraması",
      "Ortam ölçümleri: gürültü, aydınlatma, termal konfor, toz, kimyasal maruziyet (VOC vb.), titreşim",
      "Periyodik kontroller: kaldırma araçları (vinç, forklift, caraskal), basınçlı kaplar (kompresör, kazan, hidrofor), elektrik ve topraklama tesisatı, paratoner, yangın tesisatı",
      "Patlamadan Korunma Dokümanı (PKD): toz ve gaz patlama riski olan tesisler için bölge sınıflandırması ve doküman hazırlığı",
      "Kimyasal yönetimi desteği: SDS (güvenlik bilgi formu) temini ve kimyasal envanteri",
      "Yangın ve tahliye tatbikatı organizasyonu, ilk yardım ve yüksekte çalışma sertifika eğitimleri",
    ],
  },
  process: [
    { step: 1, title: "İhtiyaç analizi", desc: "Risk değerlendirmesi ve mevzuat gerekliliklerine göre hangi ölçüm, kontrol ve tetkiklerin gerektiği belirlenir." },
    { step: 2, title: "Çözüm ortağı seçimi", desc: "İşin niteliğine uygun yetki ve akreditasyona sahip ortak yönlendirilir; teklif doğrudan ortaktan alınır." },
    { step: 3, title: "Saha planlaması", desc: "Üretimi aksatmayacak gün ve saat planlanır; mobil sağlık aracı veya ölçüm ekibi işyerine gelir." },
    { step: 4, title: "Sonuçların entegrasyonu", desc: "Rapor ve sertifikalar risk değerlendirmesine, sağlık gözetimine ve yıllık çalışma planına işlenir." },
    { step: 5, title: "Takvim takibi", desc: "Periyodik kontrol ve ölçüm yenileme tarihleri takip edilir, hatırlatma yapılır." },
  ],
  deliverables: [
    "Çözüm ortağı raporu / sertifikası (ölçüm raporu, periyodik kontrol raporu, PKD, tetkik sonuçları)",
    "Sonuçların işlendiği güncel risk değerlendirmesi",
    "Sağlık gözetimi kayıtlarına işlenmiş tetkik sonuçları",
    "Yenileme takvimi",
  ],
  sectors: [
    "Deri ve deri kimyasalları (PKD, kimyasal maruziyet)",
    "Ahşap ve mobilya (toz patlaması, PKD)",
    "Metal ve imalat (gürültü, kaldırma araçları, basınçlı kaplar)",
    "Gıda ve un/yem (toz, hijyen, soğuk zincir)",
    "Elektrik dağıtım ve yapım işleri (topraklama, yüksekte çalışma)",
    "Lojistik ve depolama (forklift, raf sistemleri)",
  ],
  faq: [
    {
      q: "Neden bu hizmetleri kendiniz vermiyorsunuz?",
      a: "OSGB yetki belgesi işyeri hekimliği, iş güvenliği uzmanlığı ve diğer sağlık personeli hizmetlerini kapsar. Ölçüm, periyodik kontrol, laboratuvar tetkiki ve PKD için ayrı yetki ve akreditasyon gerekir. Bu işleri kendi hizmetimiz gibi göstermek yerine açıkça çözüm ortağıyla yapıyoruz; denetimde de bu ayrım sizi korur.",
    },
    {
      q: "Ödemeyi kime yapıyorum?",
      a: "Çözüm ortağı hizmetinin faturası doğrudan ilgili firma tarafından kesilir. Abant OSGB'nin faturası yalnızca kendi hizmetlerini (hekim, uzman, DSP, risk değerlendirmesi, ADEP, eğitim) kapsar.",
    },
    {
      q: "Periyodik kontroller ne sıklıkla yapılmalı?",
      a: "İş Ekipmanlarının Kullanımında Sağlık ve Güvenlik Şartları Yönetmeliği'ne göre genel kural yılda bir; ekipman türüne ve üretici talimatına göre süre değişebilir. Ekipman listenize göre takvimi birlikte çıkarırız.",
    },
    {
      q: "Patlamadan Korunma Dokümanı kimler için zorunlu?",
      a: "Patlayıcı ortam oluşma ihtimali bulunan işyerleri için zorunludur: yanıcı toz (ahşap, un, yem, deri tozu), yanıcı gaz veya buhar (çözücüler, boya, LPG) bulunan tesisler. Risk değerlendirmesi aşamasında ihtiyacı belirleriz.",
    },
  ],
  related: [
    { title: "İşyeri Hekimliği ve Sağlık Gözetimi", href: "/hizmetler/isyeri-hekimligi-bolu" },
    { title: "Risk Analizi", href: "/hizmetler/risk-analizi-bolu" },
    { title: "İş Güvenliği Uygulamaları", href: "/hizmetler/is-guvenligi-bolu" },
  ],
  cta: {
    banner: "Hangi ölçüm ve kontrollerin gerektiğini ücretsiz belirleyelim.",
    primary: { label: "İletişime Geç", href: "/iletisim" },
    secondary: { label: "Telefon", href: "tel:05323373814" },
  },
  seo: {
    title: "Bolu Ortam Ölçümü, Periyodik Kontrol, Mobil Sağlık Taraması ve PKD",
    description:
      "Abant OSGB, Bolu'da mobil sağlık taraması, ortam ölçümleri, periyodik kontroller ve Patlamadan Korunma Dokümanı ihtiyaçlarını akredite çözüm ortaklarıyla planlar ve koordine eder.",
    keywords: ["Bolu ortam ölçümü", "periyodik kontrol Bolu", "mobil sağlık taraması Bolu", "patlamadan korunma dokümanı", "Abant OSGB"],
  },
};

export default data;
