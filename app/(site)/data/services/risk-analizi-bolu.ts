import type { ServicePageData } from "./index";

const data: ServicePageData = {
  slug: "risk-analizi-bolu",
  title: "Abant OSGB Bolu İş Sağlığı ve Güvenliği Risk Analizi Hizmeti",
  hero: {
    subtitle: "Abant OSGB",
    tagline:
      "Abant OSGB olarak Bolu iş sağlığı ve güvenliği risk analizlerinde fiziksel, kimyasal, biyolojik ve ergonomik tehlikeleri mevzuata uygun aksiyon planlarıyla yönetiyoruz.",
    primaryCta: { label: "Hızlı Keşif Talebi", href: "/iletisim#kesif" },
  },
  highlights: [
    { label: "Yasal Dayanak", value: "6331 sayılı kanun" },
    { label: "Teslim Süresi", value: "3–7 iş günü" },
    { label: "Kapsam", value: "Saha keşfi + rapor + aksiyon planı" },
    { label: "Bölge", value: "Bolu ve ilçeleri" },
  ],
  toc: [
    "Neleri Kapsıyoruz?",
    "Nasıl Çalışıyoruz?",
    "Teslim Ettiğimiz Dokümanlar",
    "Sektörel Uyarlamalar",
    "Sık Sorulan Sorular",
    "Örnek Rapor ve Şablonlar",
  ],
  scope: {
    intro:
      "Saha ve süreç odaklı değerlendirme ile tehlikeleri tanımlar, olasılık–şiddet metodolojisiyle risk puanları hesaplarız.",
    bullets: [
      "Fiziksel, kimyasal, biyolojik, ergonomik risk analizi",
      "Fotoğraflı bulgular ve önceliklendirme",
      "Düzeltici/önleyici aksiyon planı ve sorumlu ataması",
    ],
  },
  process: [
    { step: 1, title: "Keşif & Ön Görüşme", desc: "İşletme bilgileri, mevcut doküman taraması, servis planı." },
    { step: 2, title: "Saha İncelemesi", desc: "Proses ve ekipman bazında tehlike tespiti, ölçüm ihtiyaçları." },
    { step: 3, title: "Değerlendirme & Rapor", desc: "Risk puanlama, önceliklendirme ve raporun teslimi." },
    { step: 4, title: "Aksiyon Planı", desc: "Sorumlu & tarih atamalarıyla izlenebilir plan." },
    { step: 5, title: "Takip", desc: "Periyodik güncelleme ve denetim hazırlığı." },
  ],
  deliverables: [
    "Risk Analizi Raporu (PDF)",
    "Aksiyon Planı (XLS/CSV)",
    "Risk Envanteri (CSV)",
    "Fotoğraflı Bulgular",
    "Denetim Öncesi Kontrol Listesi",
  ],
  sectors: [
    "Gıda ve tarım işleme",
    "Metal/imalat",
    "İnşaat ve şantiye",
    "Lojistik/depoculuk",
    "Eğitim/ofis",
  ],
  faq: [
    {
      q: "Risk analizi kaç yılda bir yenilenir?",
      a: "Tehlike sınıfına göre çok tehlikeli: 2 yıl, tehlikeli: 4 yıl, az tehlikeli: 6 yıl; proses/değişiklik halinde hemen güncellenir.",
    },
    {
      q: "Denetimde hangi dokümanlar kontrol edilir?",
      a: "Risk raporu, eylem planı, eğitim kayıtları, acil durum planı, KKD zimmetleri, periyodik kontrol tutanakları.",
    },
  ],
  gallery: [
    { label: "Örnek Risk Raporu", file: "/docs/ornek-risk-raporu.pdf" },
    { label: "Aksiyon Planı Şablonu", file: "/docs/aksiyon-plani.xlsx" },
  ],
  cta: {
    banner: "Bolu’da ücretsiz keşif planlayalım.",
    primary: { label: "Teklif Al", href: "/teklif" },
    secondary: { label: "Telefon", href: "tel:+90XXXXXXXXXX" },
  },
  seo: {
    title: "Abant OSGB Bolu İş Sağlığı ve Güvenliği Risk Analizi",
    description:
      "Abant OSGB, Bolu'da iş sağlığı ve güvenliği risk analizi, eylem planı ve denetim hazırlığı sunar. Saha keşfi, fotoğraflı bulgular ve önceliklendirme için iletişime geçin.",
    keywords: [
      "Bolu risk analizi",
      "Bolu OSGB",
      "iş sağlığı ve güvenliği Bolu",
      "tehlike değerlendirmesi",
    ],
  },
};

export default data;
