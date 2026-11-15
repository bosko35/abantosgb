import type { ServicePageData } from "./index";

const data: ServicePageData = {
  slug: "deri-ve-kimya-sektorunde-isg",
  title: "Deri ve Deri Kimyasalları Sektöründe İş Sağlığı ve Güvenliği",
  hero: {
    subtitle: "Abant OSGB · Sektör uzmanlığı",
    tagline:
      "Tabakhaneler, deri işleme tesisleri, deri kimyasalları depoları ve uygulama laboratuvarları için prosese göre risk değerlendirmesi, kimyasal yönetimi ve sağlık gözetimi.",
    primaryCta: { label: "Teklif Al", href: "/iletisim" },
    secondaryCta: { label: "Yasal Süreyi Hesapla", href: "/hesaplama" },
  },
  highlights: [
    { label: "Odak", value: "Tabakhane, kimyasal depo ve laboratuvar" },
    { label: "Bölge", value: "Gerede Deri İhtisas OSB ve Bolu geneli" },
    { label: "Tehlike sınıfı", value: "Deri işleme çoğunlukla çok tehlikeli sınıfta" },
    { label: "Temel mevzuat", value: "6331 sayılı Kanun ve Kimyasal Maddelerle Çalışmalar Yönetmeliği" },
  ],
  toc: [
    "Prosese Göre Başlıca Riskler",
    "Nasıl Çalışıyoruz?",
    "Teslim Ettiğimiz Dokümanlar",
    "Hizmet Verdiğimiz İşletme Türleri",
    "Sık Sorulan Sorular",
    "İlgili Sayfalar",
  ],
  scope: {
    intro:
      "Deri sektöründe riskler bölümden bölüme değişir: ıslak işlemlerde kimyasal ve gaz, kuru işlemlerde makine ve toz, finisajda çözücü, depoda ise uyumsuz kimyasalların bir arada bulunması öne çıkar. Bu nedenle risk değerlendirmesini genel bir şablonla değil, proses akışını bölüm bölüm yürüyerek hazırlıyoruz. Ekibimiz deri sektöründe iş sağlığı ve güvenliği üzerine saha ve akademik deneyime sahiptir.",
    bullets: [
      "Islak işlemler (ıslatma, kireçlik, kıl giderme, pikle, tabaklama): sülfürlü çözeltiler asitle karşılaştığında hidrojen sülfür (H₂S) gazı oluşma riski, aşındırıcı kimyasallar, kaygan ve ıslak zemin",
      "Döner dolaplar (fıçılar): dolum ve boşaltmada sıkışma, kapak açıkken çalışma, kilitleme ve etiketleme (enerji kesme) uygulaması",
      "Kuru işlemler (sıkma, yarma, tıraş, zımpara): kesici ve sıkıştırıcı makine koruyucuları, deri tozu, gürültü",
      "Boyama, yağlama ve finisaj: çözücü buharı, püskürtme kabinlerinde havalandırma ve yangın riski",
      "Atık su arıtma, havuz, kuyu ve tank içi çalışmalar: kapalı alan izin sistemi, gaz ölçümü ve kurtarma planı",
      "Deri kimyasalları depoları: güvenlik bilgi formlarına (SDS) göre uyumsuz kimyasalların ayrı depolanması, dökülme kiti, göz duşu ve acil duş",
      "Uygulama laboratuvarları: çeker ocak, küçük hacimli kimyasal stoku ve laboratuvar çalışma talimatları",
      "Ham deri ile çalışmada biyolojik etkenler ve el ile taşıma kaynaklı kas-iskelet riskleri",
    ],
  },
  process: [
    { step: 1, title: "Proses yürüyüşü", desc: "Ham depodan finisaja kadar her bölüm yerinde gezilir; kullanılan kimyasallar ve makineler listelenir." },
    { step: 2, title: "Kimyasal envanteri", desc: "Her ürünün güvenlik bilgi formu (SDS) toplanır, eksikler tedarikçiden istenir, uyumsuzluk tablosu çıkarılır." },
    { step: 3, title: "Risk değerlendirmesi", desc: "Bölüm bazında Fine-Kinney veya 5×5 matrisle tehlikeler puanlanır; önlemler ve sorumlular yazılır." },
    { step: 4, title: "Acil durum ve eğitim", desc: "Kimyasal dökülme, gaz çıkışı ve yangın senaryolarıyla acil durum planı; çok tehlikeli sınıfa uygun eğitimler." },
    { step: 5, title: "Sağlık gözetimi ve takip", desc: "Maruziyete göre işe giriş ve periyodik muayeneler; ortam ölçümleri için çözüm ortağı koordinasyonu." },
  ],
  deliverables: [
    "Bölüm bazında risk değerlendirmesi raporu",
    "Kimyasal envanteri, SDS takip listesi ve depolama uyumsuzluk tablosu",
    "Kimyasal senaryolu acil durum eylem planı",
    "Döner dolap, tıraş, yarma ve pres için güvenli çalışma talimatları",
    "Kapalı alan çalışma izni formu",
    "Eğitim ve sağlık gözetimi kayıtları",
  ],
  sectors: [
    "Tabakhaneler (ham deriden bitmiş deriye)",
    "Yarı mamul (wet-blue, crust) işleyen tesisler",
    "Deri kimyasalları ithalat, depolama ve dağıtım firmaları",
    "Kimyasal uygulama ve ar-ge laboratuvarları",
    "Deri mamul (ayakkabı, çanta, saraciye) atölyeleri",
    "OSB atık su arıtma ve yardımcı tesisleri",
  ],
  faq: [
    {
      q: "Tabakhanede en sık gözden kaçan risk nedir?",
      a: "Sülfürlü çözeltilerle asitli çözeltilerin karışması sonucu hidrojen sülfür (H₂S) gazı oluşmasıdır. Bu gaz düşük derişimde çürük yumurta kokusu verse de yüksek derişimde koku alma duyusunu körelttiği için fark edilmeyebilir. Atık su kanallarının ayrılması, dolap ve havuz bölümlerinde havalandırma ve gaz ölçümü bu nedenle önemlidir.",
    },
    {
      q: "Kimyasal deposu için ayrı risk değerlendirmesi gerekir mi?",
      a: "Kimyasal Maddelerle Çalışmalarda Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik, işyerinde tehlikeli kimyasal bulunup bulunmadığının tespit edilmesini ve risk değerlendirmesinde bu kimyasalların etkilerinin ele alınmasını ister. Depo, işyerinin risk değerlendirmesinde ayrı bir bölüm olarak, güvenlik bilgi formları ve depolama uyumsuzlukları dikkate alınarak değerlendirilir.",
    },
    {
      q: "Tabakhaneler hangi tehlike sınıfında?",
      a: "Derinin tabaklanması ve işlenmesi faaliyetleri çoğunlukla çok tehlikeli sınıftadır. Deri kimyasalları depoları ve deri mamul atölyeleri farklı sınıfta olabilir. Kesin sınıf, işyerinizin SGK'daki NACE koduna göre belirlenir; görüşmede birlikte kontrol ederiz.",
    },
    {
      q: "Ortam ölçümlerini (toz, gaz, gürültü) siz mi yapıyorsunuz?",
      a: "Hayır. Ölçümler yetkili iş hijyeni laboratuvarları tarafından yapılır. Biz hangi ölçümün nerede gerektiğini risk değerlendirmesine göre belirler, çözüm ortağımızla planlar ve sonuçları önlemlere dönüştürürüz.",
    },
  ],
  related: [
    { title: "Abant OSGB Gerede: Deri İhtisas OSB", href: "/hizmetler/abant-osgb-gerede" },
    { title: "Bolu Risk Analizi", href: "/hizmetler/risk-analizi-bolu" },
    { title: "Bolu İşyeri Hekimliği", href: "/hizmetler/isyeri-hekimligi-bolu" },
    { title: "Çözüm Ortağı Hizmetleri (ölçüm, tetkik)", href: "/hizmetler/cozum-ortagi-hizmetleri" },
  ],
  cta: {
    banner: "Tabakhaneniz veya kimyasal deponuz için sektörü bilen bir ekiple çalışın.",
    primary: { label: "Teklif Al", href: "/iletisim" },
    secondary: { label: "0532 337 38 14", href: "tel:05323373814" },
  },
  seo: {
    title: "Deri ve Kimya Sektöründe İSG: Tabakhane ve Kimyasal Depo",
    description:
      "Tabakhane, deri işleme tesisi ve deri kimyasalları depoları için prosese göre risk değerlendirmesi, SDS ve kimyasal envanteri, H₂S ve kapalı alan önlemleri, sağlık gözetimi. Gerede Deri İhtisas OSB ve Bolu.",
    keywords: ["tabakhane iş güvenliği", "deri sektörü İSG", "deri kimyasalları depo risk değerlendirmesi", "Gerede Deri OSB OSGB", "kimyasal envanteri SDS", "Abant OSGB"],
  },
};

export default data;
