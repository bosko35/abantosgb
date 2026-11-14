import type { ServicePageData } from "./index";

const data: ServicePageData = {
  slug: "abant-osgb-gerede",
  title: "Abant OSGB Gerede: Deri İhtisas OSB ve Gerede'de İSG Hizmeti",
  hero: {
    subtitle: "Abant OSGB · Gerede",
    tagline:
      "Gerede Deri İhtisas OSB'deki tabakhanelerden ilçe merkezindeki işletmelere kadar iş güvenliği uzmanı, işyeri hekimi ve diğer sağlık personeli hizmeti.",
    primaryCta: { label: "Teklif Al", href: "/iletisim" },
    secondaryCta: { label: "Yasal Süreyi Hesapla", href: "/hesaplama" },
  },
  highlights: [
    { label: "Bölge", value: "Gerede merkez ve Gerede Deri İhtisas OSB" },
    { label: "Öne çıkan sektör", value: "Deri işleme ve deri kimyasalları" },
    { label: "Tehlike sınıfı", value: "Deri işleme çoğunlukla çok tehlikeli sınıfta" },
    { label: "Görevlendirme", value: "İSG-KATİP üzerinden resmî sözleşme" },
  ],
  toc: [
    "Gerede'de Neleri Kapsıyoruz?",
    "Nasıl Çalışıyoruz?",
    "Teslim Ettiğimiz Dokümanlar",
    "Gerede'deki Sektörler",
    "Sık Sorulan Sorular",
    "İlgili Sayfalar",
  ],
  scope: {
    intro:
      "Gerede, Deri İhtisas OSB ile Türkiye'nin önemli deri işleme merkezlerinden biridir. Tabakhanelerde kimyasal maruziyet, ıslak zemin, döner dolap (fıçı) ve presler, atık su ve depolama alanları gibi sektöre özgü riskler öne çıkar. Ekibimiz deri sektöründe iş sağlığı ve güvenliği üzerine saha ve akademik deneyime sahiptir; risk değerlendirmesini bu sektörün gerçek çalışma koşullarına göre hazırlarız.",
    bullets: [
      "Tabakhane ve deri işleme için Fine-Kinney ya da L tipi matrisle risk değerlendirmesi",
      "Kimyasal envanteri ve güvenlik bilgi formlarının (SDS) takibi",
      "Kimyasal depolama, dökülme ve acil durum senaryolarına göre acil durum eylem planı",
      "Döner dolap, pres, tıraş ve kurutma makineleri için güvenli çalışma talimatları",
      "Çok tehlikeli sınıfa uygun işe başlama ve tekrar eğitimleri",
      "İşyeri hekimi ile sağlık gözetimi; solunum ve cilt maruziyeti takibi",
      "Ortam ölçümleri ve tetkikler için çözüm ortağı koordinasyonu",
    ],
  },
  process: [
    { step: 1, title: "Keşif", desc: "Proses akışı, kimyasal listesi ve çalışan sayısı yerinde incelenir." },
    { step: 2, title: "Sözleşme", desc: "Uzman, hekim ve gerekiyorsa DSP görevlendirmesi İSG-KATİP'te yapılır." },
    { step: 3, title: "Risk değerlendirmesi", desc: "Bölüm bölüm tehlikeler, kontrol önlemleri ve sorumlular belirlenir." },
    { step: 4, title: "Düzenli ziyaret", desc: "Gerede ziyaretleri aylık rotaya bağlanır; günler işverenle önceden belirlenir." },
    { step: 5, title: "Takip", desc: "Tespitler, DÖF'ler ve eğitim kayıtları düzenli güncellenir." },
  ],
  deliverables: [
    "Risk değerlendirmesi raporu",
    "Acil durum eylem planı (kimyasal senaryolar dahil)",
    "Kimyasal envanteri ve SDS takip listesi",
    "Eğitim katılım kayıtları",
    "Sağlık gözetimi kayıtları",
    "Tespit ve öneri defteri kayıtları",
  ],
  sectors: [
    "Tabakhaneler ve deri işleme tesisleri",
    "Deri kimyasalları depoları ve uygulama laboratuvarları",
    "OSB içindeki atık su ve yardımcı tesisler",
    "Gerede merkezdeki üretim, gıda ve hizmet işletmeleri",
    "Yol üstü dinlenme ve akaryakıt tesisleri",
  ],
  faq: [
    {
      q: "Gerede Deri İhtisas OSB'deki işletmelere hizmet veriyor musunuz?",
      a: "Evet. Deri İhtisas OSB'deki tabakhanelere ve deri kimyasalları işletmelerine iş güvenliği uzmanı, işyeri hekimi ve diğer sağlık personeli hizmeti veriyoruz.",
    },
    {
      q: "Tabakhaneler hangi tehlike sınıfında?",
      a: "Derinin tabaklanması ve işlenmesi faaliyetleri çoğunlukla çok tehlikeli sınıftadır. Kesin sınıf, işyerinizin SGK'daki NACE koduna göre belirlenir; görüşmede birlikte kontrol ederiz.",
    },
    {
      q: "Gerede'deki işyerime ne sıklıkla geliyorsunuz?",
      a: "Ziyaret süresi, tehlike sınıfı ve çalışan sayısına göre yasal asgari sürelerden hesaplanır. Gerede'deki işyerleri aylık rotamızdadır; ziyaret günleri işverenle önceden kararlaştırılır.",
    },
    {
      q: "Çok tehlikeli sınıftaki işyerimde diğer sağlık personeli zorunlu mu?",
      a: "Çok tehlikeli sınıfta 10 ve üzeri çalışanı olan işyerlerinde diğer sağlık personeli görevlendirmesi zorunludur; tam süreli işyeri hekimi görevlendirilen işyerleri bu zorunluluğun dışındadır. Görevlendirmeyi uzman ve hekimle aynı sözleşmede yaparız.",
    },
  ],
  related: [
    { title: "Bolu Abant OSGB: Merkez ve İlçeler", href: "/hizmetler/bolu-abant-osgb" },
    { title: "Bolu Risk Analizi", href: "/hizmetler/risk-analizi-bolu" },
    { title: "Bolu İşyeri Hekimliği", href: "/hizmetler/isyeri-hekimligi-bolu" },
    { title: "Çözüm Ortağı Hizmetleri (ölçüm, tetkik)", href: "/hizmetler/cozum-ortagi-hizmetleri" },
  ],
  cta: {
    banner: "Gerede'deki işyeriniz için teklif alın.",
    primary: { label: "Teklif Al", href: "/iletisim" },
    secondary: { label: "0532 337 38 14", href: "tel:05323373814" },
  },
  seo: {
    title: "Abant OSGB Gerede: Deri İhtisas OSB İş Güvenliği ve İşyeri Hekimi",
    description:
      "Abant OSGB, Gerede ve Gerede Deri İhtisas OSB'deki tabakhane ve işletmelere iş güvenliği uzmanı, işyeri hekimi, risk değerlendirmesi ve İSG eğitimi hizmeti verir.",
    keywords: ["Abant OSGB Gerede", "Gerede'de OSGB", "Gerede iş güvenliği", "Gerede işyeri hekimi", "Gerede Deri OSB", "tabakhane iş güvenliği", "Abant OSGB"],
  },
};

export default data;
