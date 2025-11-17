export type ContentBlock =
  | { type: "lead"; html: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; style: "ul" | "ol"; items: string[] }
  | { type: "checklist"; items: string[] }
  | { type: "paragraph"; html: string }
  | { type: "faq"; items: { q: string; a: string }[] }
  | { type: "callout"; variant: "info" | "warning" | "success" | "neutral"; title?: string; text: string }
  | { type: "cta-inline"; text: string; button: { label: string; href: string } };

export type BlogPost = {
  slug: string;
  locale: string;
  title: string;
  subtitle?: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  excerpt: string;
  keywords: string[];
  sections: { h2: string; bullets?: string[]; h3?: string }[];
  internalLinks?: { label: string; href: string }[];
  faq?: { q: string; a: string }[];
  structuredData?: Record<string, any>;
  updatedAt?: string; // optional override
  readTime?: string; // optional override
  blocks?: ContentBlock[]; // optional rich blocks
};

const raw = {
  posts: [
    {
      slug: "insaatta-isg",
      locale: "tr",
      title: "İnşaatta İş Sağlığı ve Güvenliği: Temel Riskler ve Önlemler",
      subtitle: "Yüksekte çalışma, iskele güvenliği, düşme önleyici sistemler ve şantiye disiplinleri.",
      metaTitle: "İnşaatta İSG: Yüksekte Çalışma, İskele Güvenliği, Düşme Önleme",
      metaDescription:
        "İnşaat sahalarında İSG: yüksekte çalışma, iskele güvenliği, LOTO, KKD disiplini ve acil durum planları. Uygulanabilir kontrol önlemleri ve pratik kontrol listeleri.",
      heroImage: "/images/blog/insaat-isg.jpg",
      readTime: "7 dk",
      updatedAt: "2025-09-15",
      excerpt:
        "Yüksekte çalışma ve iskele güvenliği başta olmak üzere, şantiye sahalarında öne çıkan İSG riskleri ve uygulanabilir önlemler.",
      keywords: ["inşaat isg", "yüksekte çalışma", "iskele kontrolü", "şantiye güvenliği", "kkd"],
      sections: [
        { h2: "Öne Çıkan Riskler", bullets: ["Düşme ve devrilme", "Malzeme düşmesi", "Elektrik ve enerji kaynakları", "Gürültü ve toz maruziyeti"] },
        { h2: "Zorunlu Kontroller", bullets: ["İskele periyodik kontrolü", "Merdiven/Platform uygunluğu", "Enerji kesme/LOTO prosedürleri"] },
        { h2: "Uygulama Önerileri", bullets: ["Kısa toolbox eğitimleri", "KKD disiplin takibi", "Yüksekte çalışma izin sistemi"] },
      ],
      blocks: [
        { type: "lead", html: "<p>İnşaat projelerinde en sık görülen ciddi kazalar düşme kaynaklıdır. Bu yazı, sahada hızlıca uygulanabilir İSG önlemlerini ve kontrol adımlarını özetler.</p>" },
        { type: "image", src: "/images/blog/insaat-isg-hero2.jpg", alt: "İskele ve yüksekte çalışma önlemleri", caption: "Yüksekte çalışmada toplu koruma önlemleri önceliklidir." },
        { type: "h2", text: "Başlıca Riskler" },
        { type: "list", style: "ul", items: [
          "Yüksekte çalışma ve düşme",
          "İskele, platform ve merdiven uygunsuzlukları",
          "Elektrik kaynakları ve enerji izolasyonu (LOTO)",
          "Malzeme düşmesi ve çarpma",
          "Toz, gürültü ve titreşim maruziyeti",
        ] },
        { type: "h2", text: "Kontrol Hiyerarşisi ve Uygulanabilir Önlemler" },
        { type: "list", style: "ol", items: [
          "Mühendislik kontrolleri: Korkuluk, ağ, platform ve güvenli erişim yolları.",
          "İdari kontroller: Çalışma izinleri, görev tanımları, vardiya planı.",
          "LOTO: Elektrik ve enerji kaynaklarının izole edilmesi ve etiketlenmesi.",
          "KKD: Tam vücut kemeri, düşüş durdurucu, baret, eldiven, gözlük.",
          "Periyodik kontroller: İskele, kaldırma ekipmanı ve el aletleri kayıtları.",
        ] },
        { type: "h3", text: "Saha İçin Hızlı Kontrol Listesi" },
        { type: "checklist", items: [
          "İskele sertifikalı mı ve son kontrol tarihi görünür mü?",
          "Yüksekte çalışma izin formu imzalı mı?",
          "LOTO kilit/etiketleri kayıtlı mı?",
          "Düşmeye karşı toplu koruma mevcut mu?",
          "KKD uygunluğu ve kullanım disiplini gözlemlendi mi?",
        ] },
        { type: "h2", text: "Eğitim ve Dokümantasyon" },
        { type: "paragraph", html: "<p>Kısa <strong>toolbox</strong> eğitimleri ve işe özel talimatlar, davranışsal güvenliği güçlendirir. İskele kurulumu, yüksekte çalışma, LOTO ve acil durum konuları yıllık plana dahil edilmelidir.</p>" },
        { type: "faq", items: [
          { q: "İskele kontrol periyodu nedir?", a: "Kurulum/yer değişikliği sonrası ve periyodik olarak yetkili kişilerce yapılmalıdır." },
          { q: "Yüksekte çalışmada minimum koruma nedir?", a: "Öncelik toplu korumadır; mümkün değilse kişisel düşüş durdurma sistemleri kullanılmalıdır." },
        ] },
        { type: "callout", variant: "info", title: "İpucu", text: "Şantiyede ‘son 5 dakika’ kuralı ile işe başlamadan önce hızlı risk gözden geçirmesi yapın." },
        { type: "cta-inline", text: "İnşaat sahası için kapsamlı risk analizi ve eğitim planı çıkarmamızı ister misiniz?", button: { label: "Teklif Al", href: "/teklif" } },
      ],
      internalLinks: [
        { label: "Risk Analizi Hizmeti", href: "/hizmetler/risk-analizi" },
        { label: "Eğitim Programları", href: "/hizmetler/egitimler" },
      ],
      faq: [
        { q: "Kişisel düşüş durdurma ne zaman zorunlu?", a: "Toplu korumanın mümkün olmadığı yüksekte çalışmalarda kullanılmalıdır." },
        { q: "LOTO ne sağlar?", a: "Enerji kaynaklarının izole edilmesini ve yetkisiz yeniden enerjilendirmeyi engeller." },
      ],
      structuredData: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: "İnşaatta İş Sağlığı ve Güvenliği",
        mainEntityOfPage: "/blog/insaatta-isg",
        about: ["İnşaat İSG", "Yüksekte çalışma", "İskele güvenliği"],
      },
    },
    {
      slug: "lojistikte-isg",
      locale: "tr",
      title: "Lojistik ve Depolamada İSG: Forklift, Ergonomi ve Depo Düzeni",
      subtitle: "Araç–yaya trafiği, istif güvenliği, forklift operasyonları ve ergonomi odaklı pratik önlemler.",
      metaTitle: "Lojistikte İSG: Depo Güvenliği, Forklift Operasyonları, Ergonomi",
      metaDescription:
        "Lojistik ve depolamada iş güvenliği: forklift güvenliği, araç–yaya ayrımı, raf/istif güvenliği, elle taşıma ve ergonomi, 5S düzeni ve günlük kontrol listeleri.",
      heroImage: "/images/blog/lojistik-isg.jpg",
      readTime: "7 dk",
      updatedAt: "2025-09-15",
      excerpt: "Forklift operasyonları ve depo trafiğinde çarpışma risklerini azaltacak pratik uygulamalar.",
      keywords: ["lojistik isg", "depo güvenliği", "forklift güvenliği", "ergonomi", "raf sistemleri", "elle taşıma"],
      sections: [
        { h2: "Kritik Riskler", bullets: ["Araç-yaya etkileşimi", "Devrilme ve istif çökmesi", "Elle taşıma ve MSD"] },
        { h2: "Kontrol Önlemleri", bullets: ["Ayrık yaya yolları", "Hız limitleri ve sensörler", "Operatör sertifikasyonu"] },
        { h2: "İyileştirme Adımları", bullets: ["5S ile depo düzeni", "Günlük forklift kontrol listesi", "Ergonomi eğitimi"] },
      ],
      blocks: [
        { type: "lead", html: "<p>Lojistik tesislerinde kazaların büyük kısmı <strong>araç–yaya etkileşimi</strong>, <strong>forklift devrilmeleri</strong> ve <strong>uygunsuz istif</strong> kaynaklıdır. Bu yazı, depo operasyonlarında hemen uygulanabilecek İSG kontrollerini özetler.</p>" },
        { type: "image", src: "/images/blog/lojistik-isg-hero2.jpg", alt: "Depoda forklift ve yaya yollarının ayrıldığı güvenli düzen", caption: "Net işaretlemeler ve ayrılmış yaya yolları, araç–yaya çarpışma riskini azaltır." },
        { type: "h2", text: "Kritik Riskler" },
        { type: "list", style: "ul", items: [
          "Forklift devrilmesi ve çarpışmalar",
          "Araç–yaya temas noktaları",
          "Uygunsuz istif ve raf çökmesi",
          "Elle taşıma ve kas-iskelet sistemi (MSD) riskleri",
          "Dar koridor, görüş kısıtları ve kör noktalar",
        ] },
        { type: "h2", text: "Kontrol Hiyerarşisi ve Temel Önlemler" },
        { type: "list", style: "ol", items: [
          "Mühendislik kontrolleri: Araç ve yaya yollarını fiziksel bariyerle ayırın; kör noktalara ayna ve uyarı lambası ekleyin.",
          "İdari kontroller: Trafik planı, hız limitleri, tek yön akış, şerit ve kavşak kuralları.",
          "Ekipman güvenliği: Forkliftlerde günlük pre-operasyon kontrol listesi; ikaz sistemi ve geri vites alarmı.",
          "İstif güvenliği: Raf kapasite etiketleri, palet bütünlüğü, üst seviye istif kuralları.",
          "Ergonomi: Elle taşıma limitleri, kaldırma–taşıma yardımcıları, rotasyon ve mikro molalar.",
        ] },
        { type: "h3", text: "5S ile Depo Düzeni (Örnek Uygulama Adımları)" },
        { type: "list", style: "ul", items: [
          "Seiri (Ayıklama): Kullanılmayan malzemeleri sahadan kaldırın.",
          "Seiton (Düzen): Raf/zemin etiketleme, renk kodlu şeritler ve ok yönlendirmeleri.",
          "Seiso (Temizlik): Günlük temizlik planı; dökülme-kayma risklerini azaltın.",
          "Seiketsu (Standartlaştırma): Görsel standartlar (shadow board, sınır çizgileri).",
          "Shitsuke (Disiplin): Periyodik iç denetim ve puanlama tabloları.",
        ] },
        { type: "h2", text: "Günlük Kontrol Listesi (Sahaya Asılabilir)" },
        { type: "checklist", items: [
          "Yaya yolları ve bariyerler sağlam ve boş mu?",
          "Uyarı levhaları, hız limitleri ve aynalar görünür mü?",
          "Forklift pre-check (fren, direksiyon, lastik, ikazlar) tamam mı?",
          "Raflarda kapasite etiketleri ve hasar kontrolü yapıldı mı?",
          "Dökülme–kayma alanları temizlendi mi? Acil çıkışlar açık mı?",
        ] },
        { type: "h2", text: "Eğitim, Sertifikasyon ve Dokümantasyon" },
        { type: "paragraph", html: "<p>Forklift operatörleri eğitimli ve belgelendirilmeli, sürüş alanı simülasyonları ve pratik sınavlar dokümante edilmelidir. Tüm kaza/ramak kala kayıtları <strong>trend analizine</strong> girdi sağlayacak şekilde toplanmalıdır.</p>" },
        { type: "faq", items: [
          { q: "Yaya güvenliği nasıl garanti altına alınır?", a: "Ayrılmış yaya yolları, bariyerler, geçiş noktalarında aydınlatma ve görsel–işitsel uyarılarla temas noktaları azaltılmalıdır." },
          { q: "Forklift günlük kontrolleri neleri içerir?", a: "Fren, direksiyon, lastik, çatallar, zincirler, hidrolik, ikaz ve aydınlatma sistemi; sızıntı ve ses kontrolü." },
        ] },
        { type: "callout", variant: "warning", title: "Kör Nokta Uyarısı", text: "Raf başları ve kapı çıkışlarında hız düşürme, korna ve dur–bak–dinle kuralını zorunlu hale getirin." },
        { type: "cta-inline", text: "Depo operasyonlarınız için risk analizi + trafik planı + 5S kurulumunu birlikte yapalım.", button: { label: "Teklif Al", href: "/teklif" } },
      ],
      internalLinks: [
        { label: "Periyodik Kontroller", href: "/hizmetler/periyodik-kontroller" },
        { label: "Ergonomi Eğitimi", href: "/hizmetler/egitimler#ergonomi" },
        { label: "Risk Analizi Hizmeti", href: "/hizmetler/risk-analizi" },
      ],
      faq: [
        { q: "Raf sistemleri için periyodik kontrol şart mı?", a: "Üretici talimatlarına ve kullanım yoğunluğuna göre periyodik kontroller yapılmalı; hasarlı elemanlar derhal servis dışı bırakılmalıdır." },
        { q: "Elle taşıma limitlerini nasıl belirlerim?", a: "Ağırlık, yükün kavranabilirliği, taşıma mesafesi ve çalışma yüksekliği dikkate alınmalı; mümkün olan her yerde mekanik yardımcılar kullanılmalıdır." },
      ],
      structuredData: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: "Lojistik ve Depolamada İSG",
        mainEntityOfPage: "/blog/lojistikte-isg",
        about: ["Lojistik İSG", "Depo güvenliği", "Forklift"],
      },
    },
    {
      slug: "gida-sektorunde-isg",
      locale: "tr",
      title: "Gıda Sektöründe İSG ve Hijyen: Kimyasal Maruziyet ve HACCP",
      subtitle: "Hijyen standartları, temizlik kimyasalları, biyolojik riskler ve çalışan sağlığı.",
      metaTitle: "Gıda Sektöründe İSG: Hijyen, Kimyasal Temizlik, HACCP",
      metaDescription:
        "Gıda üretiminde iş güvenliği: hijyen prosedürleri, temizlik kimyasalları, biyolojik riskler, HACCP ve çalışan sağlığına yönelik pratik önlemler.",
      heroImage: "/images/blog/gida-isg.jpg",
      readTime: "6 dk",
      updatedAt: "2025-09-15",
      excerpt: "HACCP çerçevesinde hijyen, temizlik kimyasalları ve çalışan sağlığına odaklanan İSG pratikleri.",
      keywords: ["gıda isg", "hijyen", "haccp", "kimyasal maruziyet", "biyolojik risk", "gıda güvenliği"],
      sections: [
        { h2: "Önemli Başlıklar", bullets: ["HACCP ve kritik kontrol noktaları", "Temizlik kimyasalları SDS", "Biyolojik riskler ve PPE"] },
        { h2: "Zorunlu Uygulamalar", bullets: ["Hijyen bariyerleri", "El yıkama istasyonları", "Soğuk zincir izlenebilirliği"] },
        { h2: "Eğitim & Denetim", bullets: ["Hijyen eğitimi", "Kimyasal etiketleme", "İç tetkikler"] },
      ],
      blocks: [
        { type: "lead", html: "<p>Gıda sektöründe iş sağlığı ve güvenliği yalnızca çalışanları değil, aynı zamanda tüketicilerin güvenliğini de doğrudan etkiler. <strong>Hijyen, kimyasal temizlik ve HACCP standartları</strong> bu nedenle kritik öneme sahiptir.</p>" },
        { type: "image", src: "/images/blog/gida-isg-hero2.jpg", alt: "Hijyen kuralları ile gıda üretimi yapan çalışan", caption: "Koruyucu ekipman ve hijyen bariyerleri gıda üretiminde temel gerekliliklerdir." },
        { type: "h2", text: "Başlıca Riskler" },
        { type: "list", style: "ul", items: [
          "Biyolojik riskler (bakteri, virüs, küf)",
          "Kimyasal maruziyet (temizlik maddeleri, dezenfektanlar)",
          "Alerjen kontrolü eksiklikleri",
          "Soğuk zincir kırılması ve bozulma riski",
          "Kesici-delici alet kaynaklı yaralanmalar",
        ] },
        { type: "h2", text: "HACCP ve İSG Entegrasyonu" },
        { type: "list", style: "ol", items: [
          "Kritik kontrol noktalarında (CCP) çalışan güvenliği ve hijyen prosedürlerini birleştirin.",
          "Üretim hattında el yıkama istasyonlarını zorunlu hale getirin.",
          "Alerjen ve kimyasal etiketlemeyi standartlaştırın.",
          "Soğuk zincir takibini dijital kayıtlarla yapın.",
          "HACCP planlarına KKD ve eğitim modülleri ekleyin.",
        ] },
        { type: "h2", text: "Hijyen ve KKD Uygulamaları" },
        { type: "checklist", items: [
          "Saç bonesi, maske, eldiven ve önlük kullanılıyor mu?",
          "Çalışma alanına girişte el yıkama/dezenfeksiyon zorunlu mu?",
          "Kimyasal temizlik sırasında gözlük ve eldiven kullanımı var mı?",
          "Üretim alanına sokulmaması gereken kişisel eşyalar kontrol ediliyor mu?",
          "Soğuk odalarda sıcaklık sürekli kayıt altına alınıyor mu?",
        ] },
        { type: "h2", text: "Eğitim ve İç Denetimler" },
        { type: "paragraph", html: "<p>Hijyen, kimyasal güvenlik ve acil durum konuları yıllık eğitim planlarına dahil edilmelidir. Ayrıca <strong>iç tetkikler</strong> ve sürpriz denetimler, uygulamaların sürekliliğini sağlamada etkilidir.</p>" },
        { type: "faq", items: [
          { q: "HACCP İSG ile nasıl entegre edilir?", a: "Çalışan sağlığı prosedürleri HACCP kritik kontrol noktalarıyla birleştirilmeli ve eğitimlerle pekiştirilmelidir." },
          { q: "Kimyasal temizlikte en temel gereklilik nedir?", a: "SDS dokümanlarının erişilebilir olması, uygun depolama ve kişisel koruyucu donanım kullanımı." },
        ] },
        { type: "callout", variant: "info", title: "İpucu", text: "Gıda üretim alanına girerken ‘temiz alan protokolü’ uygulayın: bone + maske + eldiven + el yıkama." },
        { type: "cta-inline", text: "Gıda tesisiniz için hijyen ve İSG odaklı kapsamlı risk analizi ve eğitim planı çıkarmamızı ister misiniz?", button: { label: "Teklif Al", href: "/teklif" } },
      ],
      internalLinks: [
        { label: "Kimyasal Risk Değerlendirmesi", href: "/hizmetler/kimyasal-risk" },
        { label: "Eğitim Planı", href: "/hizmetler/egitimler" },
        { label: "Risk Analizi Hizmeti", href: "/hizmetler/risk-analizi" },
      ],
      faq: [
        { q: "Temizlik kimyasallarının depolanmasında en önemli kural nedir?", a: "Gıda ürünlerinden ayrı, etiketli ve havalandırmalı bir alanda saklanmalıdır." },
        { q: "Soğuk zincir kırılırsa ne yapılmalı?", a: "Kayıt altına alınmalı, ürün izolasyona alınmalı ve kalite güvence ekibi değerlendirmelidir." },
      ],
      structuredData: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: "Gıda Sektöründe İSG ve Hijyen",
        mainEntityOfPage: "/blog/gida-sektorunde-isg",
        about: ["Gıda İSG", "HACCP", "Hijyen"],
      },
    },
  ],
} as const;

export const blogPosts = raw.posts as unknown as BlogPost[];
export const blogPostsBySlug: Record<string, BlogPost> = Object.fromEntries(
  blogPosts.map((p) => [p.slug, p])
);
