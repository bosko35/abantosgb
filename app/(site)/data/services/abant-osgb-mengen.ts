import type { ServicePageData } from "./index";

const data: ServicePageData = {
  slug: "abant-osgb-mengen",
  title: "Abant OSGB Mengen: İş Güvenliği Uzmanı ve İşyeri Hekimi",
  hero: {
    subtitle: "Abant OSGB · Mengen",
    tagline:
      "Mengen'deki maden, orman ürünleri, yapı ve gıda işletmelerine iş güvenliği uzmanı, işyeri hekimi ve diğer sağlık personeli hizmeti.",
    primaryCta: { label: "Teklif Al", href: "/iletisim" },
    secondaryCta: { label: "Yasal Süreyi Hesapla", href: "/hesaplama" },
  },
  highlights: [
    { label: "Bölge", value: "Mengen merkez ve köyleri" },
    { label: "Öne çıkan sektörler", value: "Madencilik, orman ürünleri, yapı" },
    { label: "Tehlike sınıfı", value: "Madencilik çok tehlikeli sınıfta" },
    { label: "Görevlendirme", value: "İSG-KATİP üzerinden resmî sözleşme" },
  ],
  toc: [
    "Mengen'de Neleri Kapsıyoruz?",
    "Nasıl Çalışıyoruz?",
    "Teslim Ettiğimiz Dokümanlar",
    "Mengen'deki Sektörler",
    "Sık Sorulan Sorular",
    "İlgili Sayfalar",
  ],
  scope: {
    intro:
      "Mengen'de madencilik, orman ürünleri ve yapı işleri öne çıkar. Bu işlerin çoğu çok tehlikeli sınıftadır; hem uzman ve hekim süreleri hem de eğitim ve sağlık gözetimi yükümlülükleri daha yüksektir. Hizmeti bu sınıfın gerekliliklerine göre planlarız.",
    bullets: [
      "Çok tehlikeli sınıfa uygun risk değerlendirmesi ve acil durum eylem planı",
      "Maden işyerlerinde yeraltı ve yerüstü çalışmalarına özgü riskler",
      "Orman ürünleri ve kesim işlerinde makine, devrilme ve yangın riskleri",
      "Yapı işlerinde yüksekte çalışma ve iskele kontrolleri",
      "İşe başlama ve tekrar İSG eğitimleri",
      "İşyeri hekimi ile sağlık gözetimi; diğer sağlık personeli görevlendirmesi",
    ],
  },
  process: [
    { step: 1, title: "Keşif", desc: "İşyerinin faaliyeti, tehlike sınıfı ve çalışan sayısı belirlenir." },
    { step: 2, title: "Sözleşme", desc: "Uzman, hekim ve DSP görevlendirmesi İSG-KATİP'te yapılır." },
    { step: 3, title: "Risk değerlendirmesi", desc: "Saha koşullarına göre tehlikeler ve önlemler belirlenir." },
    { step: 4, title: "Düzenli ziyaret", desc: "Mengen ziyaretleri aylık rotaya bağlanır." },
    { step: 5, title: "Takip", desc: "Tespitler, DÖF'ler ve eğitim kayıtları düzenli güncellenir." },
  ],
  deliverables: [
    "Risk değerlendirmesi raporu",
    "Acil durum eylem planı",
    "Yıllık çalışma planı ve değerlendirme raporu",
    "Eğitim katılım kayıtları",
    "Sağlık gözetimi kayıtları",
  ],
  sectors: [
    "Madencilik (yeraltı ve yerüstü)",
    "Orman ürünleri ve kereste",
    "Yapı ve altyapı işleri",
    "Gıda üretimi ve yeme-içme işletmeleri",
  ],
  faq: [
    {
      q: "Mengen'deki maden işyerlerine hizmet veriyor musunuz?",
      a: "Evet. Mengen'deki maden ve diğer çok tehlikeli sınıftaki işyerlerine iş güvenliği uzmanı, işyeri hekimi ve diğer sağlık personeli hizmeti veriyoruz. Teklifi işyerinin çalışan sayısı ve vardiya düzenine göre hazırlarız.",
    },
    {
      q: "Çok tehlikeli sınıfta hangi görevlendirmeler gerekiyor?",
      a: "Çok tehlikeli sınıfta iş güvenliği uzmanının A sınıfı belgeye sahip olması gerekir. 10 ve üzeri çalışanı olan işyerlerinde, tam süreli işyeri hekimi yoksa diğer sağlık personeli de görevlendirilir. Gerekli süreleri hesaplama sayfamızda görebilirsiniz.",
    },
    {
      q: "Mengen'e ne sıklıkla geliyorsunuz?",
      a: "Ziyaret süreleri tehlike sınıfı ve çalışan sayısına göre yasal asgari sürelerden hesaplanır. Mengen'deki işyerleri aylık rotamızdadır; günler işverenle önceden belirlenir.",
    },
  ],
  related: [
    { title: "Bolu Abant OSGB: Merkez ve İlçeler", href: "/hizmetler/bolu-abant-osgb" },
    { title: "Bolu Risk Analizi", href: "/hizmetler/risk-analizi-bolu" },
    { title: "Bolu İşyeri Hekimliği", href: "/hizmetler/isyeri-hekimligi-bolu" },
  ],
  cta: {
    banner: "Mengen'deki işyeriniz için teklif alın.",
    primary: { label: "Teklif Al", href: "/iletisim" },
    secondary: { label: "0532 337 38 14", href: "tel:05323373814" },
  },
  seo: {
    title: "Abant OSGB Mengen: İş Güvenliği Uzmanı ve İşyeri Hekimi",
    description:
      "Abant OSGB, Mengen'deki maden, orman ürünleri ve yapı işletmelerine iş güvenliği uzmanı, işyeri hekimi, risk değerlendirmesi ve İSG eğitimi hizmeti verir.",
    keywords: ["Abant OSGB Mengen", "Mengen'de OSGB", "Mengen iş güvenliği", "Mengen işyeri hekimi", "maden iş güvenliği Bolu", "Abant OSGB"],
  },
};

export default data;
