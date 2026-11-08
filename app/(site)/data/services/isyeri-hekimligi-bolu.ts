import type { ServicePageData } from "./index";

const data: ServicePageData = {
  slug: "isyeri-hekimligi-bolu",
  title: "Bolu İşyeri Hekimliği ve Sağlık Gözetimi",
  hero: {
    subtitle: "Abant OSGB",
    tagline:
      "İşyeri hekimi görevlendirmesi, işe giriş ve periyodik muayeneler, sağlık gözetimi kayıtları ve meslek hastalığı takibi — Bolu ve ilçelerinde kendi hekim kadromuzla.",
    primaryCta: { label: "Hekim Görevlendirmesi İçin Teklif Al", href: "/iletisim" },
    secondaryCta: { label: "Yasal Süreyi Hesapla", href: "/hesaplama" },
  },
  highlights: [
    { label: "Yasal Dayanak", value: "6331 sayılı Kanun, md. 6 ve 15" },
    { label: "Görevlendirme", value: "İSG-KATİP üzerinden resmî atama" },
    { label: "Süre", value: "Tehlike sınıfına göre 5 / 10 / 15 dk ÷ çalışan ÷ ay" },
    { label: "Bölge", value: "Bolu merkez ve ilçeleri" },
  ],
  toc: [
    "Neleri Kapsıyoruz?",
    "Nasıl Çalışıyoruz?",
    "Teslim Ettiğimiz Dokümanlar",
    "Sektörel Uyarlamalar",
    "Sık Sorulan Sorular",
    "İlgili Hizmetler",
  ],
  scope: {
    intro:
      "İşyeri hekimimiz işyerinizde çalışanların sağlık gözetimini yürütür; muayene, rapor ve takip süreçleri İSG-KATİP sözleşmesine bağlı yasal süreler içinde planlanır. Laboratuvar ve görüntüleme tetkikleri akredite çözüm ortaklarımız aracılığıyla düzenlenir.",
    bullets: [
      "İşe giriş muayenesi ve Ek-2 işe giriş / periyodik muayene formu",
      "Periyodik sağlık muayeneleri (tehlike sınıfına göre 1 / 3 / 5 yılda bir)",
      "Gece çalışması, yüksekte çalışma, ağır ve tehlikeli iş uygunluk değerlendirmeleri",
      "Meslek hastalığı şüphesi takibi ve sevk süreci",
      "İş kazası sonrası sağlık değerlendirmesi ve işe dönüş muayenesi",
      "Revir ve ilk yardım malzemesi danışmanlığı",
      "Hijyen, ergonomi ve sağlık konulu çalışan eğitimleri",
      "Tetkiklerin (akciğer grafisi, odyometri, SFT, kan-idrar) çözüm ortağıyla koordinasyonu",
    ],
  },
  process: [
    { step: 1, title: "Tehlike sınıfı ve çalışan sayısı", desc: "NACE koduna göre sınıf belirlenir; aylık yasal hekim süresi hesaplanır." },
    { step: 2, title: "İSG-KATİP sözleşmesi", desc: "Hekim görevlendirmesi Bakanlık sistemi üzerinden e-imza ile yapılır." },
    { step: 3, title: "Sağlık gözetimi planı", desc: "Çalışan listesi üzerinden muayene ve tetkik takvimi çıkarılır." },
    { step: 4, title: "Saha ziyaretleri", desc: "Muayeneler işyerinde yapılır, bulgular sağlık dosyasına işlenir." },
    { step: 5, title: "Raporlama ve takip", desc: "Yıllık değerlendirme raporu, eksik muayene ve tetkik hatırlatmaları." },
  ],
  deliverables: [
    "Ek-2 işe giriş ve periyodik muayene formları",
    "Çalışan sağlık dosyaları (gizlilik ilkelerine uygun)",
    "Yıllık çalışma planı ve yıllık değerlendirme raporu",
    "Tetkik takvimi ve sonuç takip listesi",
    "Meslek hastalığı / iş kazası bildirim desteği",
  ],
  sectors: [
    "Deri ve deri kimyasalları",
    "Metal ve beyaz eşya yan sanayi",
    "Gıda üretimi ve catering",
    "Elektrik dağıtım ve yapım işleri",
    "Eğitim kurumları ve yurtlar",
    "Lojistik ve depolama",
    "Madencilik",
  ],
  faq: [
    {
      q: "İşyeri hekimi ayda kaç saat gelmeli?",
      a: "Çalışan başına aylık en az az tehlikeli sınıfta 5 dakika, tehlikeli sınıfta 10 dakika, çok tehlikeli sınıfta 15 dakikadır. Örneğin 40 çalışanlı tehlikeli sınıf bir işyeri için ayda en az 400 dakika, yani yaklaşık 6,5 saat. Hesaplama sayfamızdan kendi değerinizi görebilirsiniz.",
    },
    {
      q: "Periyodik muayene ne sıklıkla yapılır?",
      a: "Az tehlikeli sınıfta en geç 5 yılda, tehlikeli sınıfta 3 yılda, çok tehlikeli sınıfta yılda bir. İşyeri hekimi gerekli gördüğünde bu süreler kısaltılır.",
    },
    {
      q: "Tahlil ve röntgen gibi tetkikleri siz mi yapıyorsunuz?",
      a: "Hayır. OSGB yetki belgesi kapsamı işyeri hekimliği hizmetidir; laboratuvar ve görüntüleme tetkikleri akredite çözüm ortaklarımız tarafından yapılır ve ayrıca faturalandırılır. Biz planlamayı, koordinasyonu ve sonuçların sağlık gözetimine işlenmesini üstleniriz.",
    },
    {
      q: "Diğer sağlık personeli (DSP) zorunlu mu?",
      a: "Çok tehlikeli sınıfta 10 ve üzeri çalışanı olan işyerlerinde zorunludur; süre çalışan sayısına göre değişir. Diğer sınıflarda zorunlu değildir. Durumunuza özel bilgiyi hesaplama sayfasında veya görüşmede netleştiririz.",
    },
  ],
  related: [
    { title: "Yasal Süre Hesaplama", href: "/hesaplama" },
    { title: "Çözüm Ortağı Hizmetleri (tetkik, ölçüm, periyodik kontrol)", href: "/hizmetler/cozum-ortagi-hizmetleri" },
    { title: "Risk Analizi", href: "/hizmetler/risk-analizi-bolu" },
  ],
  cta: {
    banner: "İşyeri hekimi ihtiyacınızı birlikte netleştirelim.",
    primary: { label: "Teklif Al", href: "/iletisim" },
    secondary: { label: "Telefon", href: "tel:05323373814" },
  },
  seo: {
    title: "Bolu İşyeri Hekimliği ve Sağlık Gözetimi",
    description:
      "Abant OSGB Bolu'da işyeri hekimi görevlendirmesi, işe giriş ve periyodik muayene, sağlık gözetimi ve meslek hastalığı takibi sunar. Yasal süreler ve İSG-KATİP sözleşmesi için teklif alın.",
    keywords: ["Bolu işyeri hekimi", "işyeri hekimliği Bolu", "işe giriş muayenesi Bolu", "sağlık gözetimi", "Abant OSGB"],
  },
};

export default data;
