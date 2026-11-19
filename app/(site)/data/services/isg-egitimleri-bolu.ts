import type { ServicePageData } from "./index";

const data: ServicePageData = {
  slug: "isg-egitimleri-bolu",
  title: "Bolu İSG Eğitimi: İşe Başlama, Temel ve Tekrar Eğitimleri",
  hero: {
    subtitle: "Abant OSGB",
    tagline:
      "Bolu Merkez ve ilçelerdeki işyerlerine, 2 Nisan 2026 tarihli yeni eğitim yönetmeliğine uygun işe başlama, temel ve tekrar İSG eğitimleri. Eğitimleri işyerinizde, uzman ve hekim kadromuzla veriyoruz.",
    primaryCta: { label: "Teklif Al", href: "/iletisim" },
    secondaryCta: { label: "Hemen Arayın", href: "tel:05323373814" },
  },
  highlights: [
    { label: "Yöntem", value: "İşyerinde yüz yüze + uzaktan / karma" },
    { label: "Mevzuat", value: "2 Nisan 2026 tarihli eğitim yönetmeliği" },
    { label: "Belgelendirme", value: "Sınav, katılım kaydı ve sertifika" },
    { label: "Bölge", value: "Bolu Merkez, Gerede, Mudurnu, Mengen, Göynük, Yeniçağa ve diğer ilçeler" },
  ],
  toc: [
    "Eğitim Başlıkları",
    "Nasıl İşliyoruz?",
    "Belgelendirme",
    "Sektörel Uyarlamalar",
    "Sık Sorulan Sorular",
  ],
  scope: {
    intro:
      "Bolu'daki işyerlerine, tehlike sınıfına ve çalışma koşullarına uygun İSG eğitim programı hazırlarız. Eğitimleri işyerinizde, kendi makine ve çalışma alanlarınız üzerinden veririz; böylece çalışan anlatılanı kendi işinde görür. Sınav ve katılım kayıtlarını tutar, yenileme tarihlerini sizin yerinize takip ederiz.",
    bullets: [
      "İşe başlama eğitimi: işe başlamadan önce, en az 2 saat, yüz yüze ve uygulamalı",
      "Temel İSG eğitimi: az tehlikeli en az 8, tehlikeli en az 12, çok tehlikeli en az 16 saat; işe girişten sonra en geç 3 ay içinde",
      "Tekrar eğitimi: tüm tehlike sınıflarında en az 8 saat (çok tehlikeli yılda bir, tehlikeli iki yılda bir, az tehlikeli üç yılda bir)",
      "İş kazası, meslek hastalığı ve altı aydan uzun işten uzak kalma sonrası ek eğitimler",
      "Yangın, tahliye ve acil durum ekiplerinin eğitimi ve tatbikatı",
      "Kimyasal, makine, forklift ve yüksekte çalışma gibi işe özgü risk eğitimleri",
      "İlk yardım ve mesleki eğitimler (çözüm ortağı ile)",
    ],
  },
  process: [
    { step: 1, title: "İhtiyaç Analizi", desc: "Sektör, tehlike sınıfı ve çalışan profiline göre eğitim planı çıkarılır." },
    { step: 2, title: "Planlama", desc: "Online/yerinde takvim, içerik ve sınav yapısı belirlenir." },
    { step: 3, title: "Uygulama", desc: "Eğitimler gerçekleştirilir; katılım/sınav kayıtları tutulur." },
    { step: 4, title: "Belgelendirme", desc: "Sertifikalar verilir; yenileme tarihleri için hatırlatmalar planlanır." },
  ],
  deliverables: [
    "Eğitim içerik sunumları",
    "Katılım listeleri ve sınav tutanakları",
    "Sertifikalar",
    "Yenileme takvimi",
  ],
  sectors: [
    "Gıda ve tarım işleme",
    "Metal/imalat",
    "İnşaat ve şantiye",
    "Lojistik/depoculuk",
    "Eğitim/ofis",
    "Otomotiv ve yedek parça",
    "Mobilya ve orman ürünleri",
    "Tekstil ve konfeksiyon",
    "Enerji (üretim/dağıtım)",
    "Sağlık ve laboratuvar",
    "Plastik ve kauçuk",
    "Kimya ve boya",
    "Cam/seramik",
    "Depolama & soğuk zincir",
    "Deri işleme ve tabakhaneler",
    "Akaryakıt istasyonları ve dinlenme tesisleri",
    "Otel, konaklama ve yeme-içme",
  ],
  faq: [
    { q: "Eğitimler online yapılabilir mi?", a: "Genel, sağlık ve teknik konular her tehlike sınıfında uzaktan veya karma yöntemle verilebilir. İşe ve işyerine özgü riskler konusu tehlikeli ve çok tehlikeli sınıfta yüz yüze verilir; işe başlama eğitimi ise her zaman yüz yüze ve uygulamalıdır (2 Nisan 2026 tarihli yönetmelik). Uzaktan eğitim sistemi giriş-çıkış, tamamlama ve sınav sonuçlarını kayıt altına alır." },
    { q: "Eğitimler hangi sıklıkta tekrar edilir?", a: "Çok tehlikeli sınıfta yılda bir, tehlikeli sınıfta iki yılda bir, az tehlikeli sınıfta üç yılda bir tekrarlanır; tekrar eğitimi en az 8 saattir. Temel eğitim ise sınıfa göre en az 8 / 12 / 16 saattir ve işe girişten sonra en geç 3 ay içinde tamamlanır. Altı aydan uzun işten uzak kalma, iş kazası veya meslek hastalığı sonrasında ayrıca eğitim verilir." },
    { q: "Bolu'nun ilçelerinde yerinde eğitim veriyor musunuz?", a: "Evet. Bolu Merkez'in yanı sıra Gerede, Mudurnu, Mengen, Göynük, Yeniçağa, Dörtdivan, Seben ve Kıbrıscık'taki işyerlerinde eğitimleri yerinde veriyoruz. Eğitim günü, vardiya düzeninize göre belirlenir." },
    { q: "Eğitim sonunda sınav yapılıyor mu, belge veriliyor mu?", a: "Evet. Temel eğitim sonunda 100 puan üzerinden sınav yapılır; başarı için en az 60 puan gerekir. Başarılı çalışana eğitim belgesi verilir, katılım listesi ve sınav kayıtları işyeri dosyasında saklanır." },
    { q: "Eski yönetmeliğe göre aldığımız eğitimler geçerli mi?", a: "2013 yönetmeliği döneminde verilmiş ve belgelenmiş eğitimler geçerliliğini korur. Bir sonraki tekrar eğitimi yeni yönetmeliğin süre ve yöntem kurallarına göre planlanır." },
    { q: "Eğitimleri kim veriyor?", a: "Eğitimleri iş güvenliği uzmanlarımız ve işyeri hekimlerimiz veriyor. İlk yardım gibi ayrı yetki gerektiren eğitimleri çözüm ortaklarımızla düzenliyoruz." },
  ],
  related: [
    { title: "Bolu'daki OSGB hizmetlerimiz (ana sayfa)", href: "/" },
    { title: "Bolu Abant OSGB: Merkez ve İlçeler", href: "/hizmetler/bolu-abant-osgb" },
    { title: "Yeni İSG Eğitim Yönetmeliği 2026 (blog)", href: "/blog/yeni-isg-egitim-yonetmeligi-2026" },
    { title: "Bolu Risk Analizi", href: "/hizmetler/risk-analizi-bolu" },
    { title: "Bolu İşyeri Hekimliği", href: "/hizmetler/isyeri-hekimligi-bolu" },
  ],
  cta: {
    banner: "Ekibiniz için hızlı eğitim planlayalım.",
    primary: { label: "Teklif Al", href: "/iletisim" },
    secondary: { label: "Telefon", href: "tel:05323373814" },
  },
  seo: {
    title: "Bolu İSG Eğitimi: İşe Başlama, Temel ve Tekrar Eğitimleri",
    description:
      "Bolu'da İSG eğitimi: işe başlama, temel ve tekrar eğitimleri 2026 yönetmeliğine uygun, işyerinizde yüz yüze. Gerede, Mudurnu, Mengen, Göynük ve Yeniçağa dahil. Sınav, belge ve yenileme takibi.",
    keywords: ["Bolu İSG eğitimi", "Bolu iş güvenliği eğitimi", "temel İSG eğitimi Bolu", "işe başlama eğitimi", "tekrar eğitimi", "Abant OSGB"],
  },
};

export default data;
