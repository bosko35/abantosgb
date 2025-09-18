import SectionHeader from "./SectionHeader";

type FAQ = { question: string; answer: string };
type Service = {
  id: number;
  title: string;
  description: string;
  bullets: string[];
  faq: FAQ[];
  linkText: string;
  linkUrl: string;
};

const services: Service[] = [
  {
    id: 1,
    title: "Risk Analizi ve İş Yeri Tehlike Değerlendirmesi",
    description:
      "Saha ve süreç odaklı kapsamlı değerlendirme ile iş kazası ve meslek hastalıklarını önlemek için riskleri belirleriz. Fiziksel, kimyasal, biyolojik ve ergonomik risk faktörlerini analiz ederek mevzuata uygun raporlar hazırlarız. Önleyici ve düzeltici aksiyonlarla işverenin 6331 sayılı kanuna uyumunu sağlarız.",
    bullets: [
      "Tehlike tanımlama ve risk puanlama",
      "Aksiyon planı ve sorumlu atama",
      "Yıllık periyodik güncelleme",
    ],
    faq: [
      {
        question: "Risk analizi kaç yılda bir yenilenir?",
        answer:
          "Tehlike sınıfına göre 2, 4 veya 6 yılda bir yenilenir.",
      },
      {
        question: "Risk analizi Bolu’da hangi sektörlere uygulanıyor?",
        answer:
          "Gıda, inşaat, metal, lojistik ve eğitim gibi tüm sektörlerde uygulanır.",
      },
    ],
    linkText: "Risk Analizi Detayları",
    linkUrl: "/hizmetler/risk-analizi-bolu",
  },
  {
    id: 2,
    title: "İş Güvenliği Uygulamaları ve Mevzuat Uyum Hizmeti",
    description:
      "Mevzuata uygun, ölçülebilir ve sürdürülebilir güvenlik uygulamaları ile iş yerlerinde koruyucu sistemler kurarız. Acil durum planları, kişisel koruyucu donanım yönetimi ve periyodik denetimlerle işverenlerin yasal uyumunu destekleriz.",
    bullets: [
      "Acil durum planı hazırlığı",
      "KKD (kişisel koruyucu donanım) yönetimi",
      "Periyodik kontrol ve denetimler",
    ],
    faq: [
      {
        question: "İş güvenliği hizmetleri neden zorunludur?",
        answer:
          "6331 sayılı kanun işverenlere çalışanların güvenliğini sağlama yükümlülüğü getirir.",
      },
      {
        question:
          "Bolu’da iş güvenliği denetimlerinde neler kontrol edilir?",
        answer:
          "Risk analizleri, eğitim kayıtları, acil durum planı ve KKD kullanımı denetlenir.",
      },
    ],
    linkText: "İş Güvenliği Hizmeti Detayları",
    linkUrl: "/hizmetler/is-guvenligi-bolu",
  },
  {
    id: 3,
    title: "İş Sağlığı ve Güvenliği Eğitimleri (Online & Yerinde)",
    description:
      "Online ve yüz yüze eğitimlerle çalışanların iş güvenliği bilincini artırır, kurum içinde kalıcı bir güvenlik kültürü oluştururuz. Eğitimlerimiz mevzuata uygun, anlaşılır ve pratik örneklerle desteklenir.",
    bullets: [
      "Temel İSG eğitimi",
      "Yangın ve acil durum eğitimi",
      "Yüksekte çalışma ve ilk yardım eğitimleri",
    ],
    faq: [
      {
        question: "Eğitimler online yapılabilir mi?",
        answer:
          "Evet, Temel İSG dahil birçok eğitim online yapılabilir ve katılım kayıtları tutulur.",
      },
      {
        question: "Eğitimler hangi sıklıkta tekrar edilir?",
        answer:
          "Tehlike sınıfına göre yılda en az bir kez tekrarlanması gerekir.",
      },
    ],
    linkText: "Eğitim Hizmetleri Detayları",
    linkUrl: "/hizmetler/isg-egitimleri-bolu",
  },
];

export default function ServicesShowcase() {
  return (
    <section id="hizmetler" className="relative py-16 md:py-20 scroll-mt-28 md:scroll-mt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Hizmetlerimiz"
          subtitle="Metinlere uygun, yalın ve anlaşılır kartlar"
        />

        <div className="mt-8 grid items-stretch gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.id}
              className="group flex h-full flex-col rounded-2xl border border-white/40 bg-white/80 p-6 backdrop-blur-md shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(0,0,0,0.35)]"
            >
              {/* Header + Description (fixed min height on md+ for alignment) */}
              <div className="md:min-h-[240px] lg:min-h-[220px]">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-gradient text-white text-xs font-semibold shadow">
                    {s.id}
                  </span>
                  <h3 className="text-base md:text-lg font-semibold text-brand-navy leading-snug">
                    {s.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="mt-3 text-sm text-brand-text/80 leading-relaxed">
                  {s.description}
                </p>
              </div>

              {/* Bullets */}
              <ul className="mt-4 space-y-2">
                {s.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-brand-text/80">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-green/80" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* FAQ (accordion) */}
              <div className="mt-3 space-y-2">
                {s.faq.map((f, i) => (
                  <details
                    key={i}
                    className="rounded-lg border border-brand-navy/10 bg-white/60 p-3 open:bg-white/80"
                  >
                    <summary className="cursor-pointer text-sm font-medium text-brand-navy/90">
                      {f.question}
                    </summary>
                    <p className="mt-2 text-sm text-brand-text/70">{f.answer}</p>
                  </details>
                ))}
              </div>

              {/* Bottom area pinned to card bottom */}
              <div className="mt-auto">
                <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-brand-navy/10 to-transparent" />
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <a href={s.linkUrl} className="btn-outline w-full justify-center text-sm">
                    {s.linkText}
                  </a>
                  <a href="/iletisim" className="btn-primary btn-cta w-full justify-center text-sm">
                    Hizmet Talebi
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
