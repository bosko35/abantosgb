import Link from "next/link";
import type { Route } from "next";
import { HardHat, Truck, UtensilsCrossed, ArrowRight } from "lucide-react";

type BlogSlug = "insaatta-isg" | "lojistikte-isg" | "gida-sektorunde-isg";

type Card = {
  id: string;
  slug: BlogSlug;
  title: string;
  excerpt: string;
  icon: "hard-hat" | "truck" | "utensils-crossed";
  ctaLabel: string;
  a11y: { ariaLabel: string };
  seoTag?: string;
};

const cards: Card[] = [
  {
    id: "insaat",
    slug: "insaatta-isg",
    title: "İnşaatta İSG",
    excerpt: "Yüksekte çalışma, iskele güvenliği, KKD ve düşme önleyici sistemler.",
    icon: "hard-hat",
    ctaLabel: "Detaylı Oku",
    a11y: { ariaLabel: "İnşaatta İSG yazısına git" },
    seoTag: "insaat-isg-card",
  },
  {
    id: "lojistik",
    slug: "lojistikte-isg",
    title: "Lojistikte İSG",
    excerpt: "Depo düzeni, forklift operasyonları, elle taşıma ve ergonomi.",
    icon: "truck",
    ctaLabel: "Detaylı Oku",
    a11y: { ariaLabel: "Lojistikte İSG yazısına git" },
    seoTag: "lojistik-isg-card",
  },
  {
    id: "gida",
    slug: "gida-sektorunde-isg",
    title: "Gıda Sektöründe İSG",
    excerpt: "Hijyen standartları, kimyasal temizlik maddeleri ve çalışan sağlığı.",
    icon: "utensils-crossed",
    ctaLabel: "Detaylı Oku",
    a11y: { ariaLabel: "Gıda Sektöründe İSG yazısına git" },
    seoTag: "gida-isg-card",
  },
];

const hrefMap = {
  "insaatta-isg": "/blog/insaatta-isg",
  "lojistikte-isg": "/blog/lojistikte-isg",
  "gida-sektorunde-isg": "/blog/gida-sektorunde-isg",
} as const;

function Icon({ name }: { name: Card["icon"] }) {
  const common = "h-6 w-6 text-emerald-600";
  switch (name) {
    case "hard-hat":
      return <HardHat className={common} aria-hidden />;
    case "truck":
      return <Truck className={common} aria-hidden />;
    case "utensils-crossed":
      return <UtensilsCrossed className={common} aria-hidden />;
  }
}

export default function SectorInsights() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Sektörel İSG Bilgilendirmeleri",
    itemListElement: [
      { "@type": "ListItem", position: 1, url: "/blog/insaatta-isg" },
      { "@type": "ListItem", position: 2, url: "/blog/lojistikte-isg" },
      { "@type": "ListItem", position: 3, url: "/blog/gida-sektorunde-isg" },
    ],
  } as const;

  return (
    <section id="sector-insights" aria-label="Sektörel bilgilendirme kartları" className="py-16 md:py-24 scroll-mt-28 md:scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Sektörel Bilgilendirmeler</h2>
          <p className="mt-2 text-sm text-slate-500">Sektöre özel İSG gereklilikleri, riskler ve pratik önlemler.</p>
        </header>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <Link
              href={hrefMap[c.slug] as Route}
              key={c.id}
              aria-label={c.a11y.ariaLabel}
              className="group block rounded-2xl bg-white ring-1 ring-black/5 shadow-md hover:shadow-lg transition-all duration-200 p-6 hover:scale-[1.01]"
            >
              <div className="flex items-start gap-3">
                <div className="shrink-0 rounded-xl bg-emerald-50 p-3 ring-1 ring-emerald-100">
                  <Icon name={c.icon} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{c.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{c.excerpt}</p>
                </div>
              </div>
              <div className="mt-4 inline-flex items-center text-sm font-medium text-emerald-700 group-hover:text-emerald-800">
                {c.ctaLabel}
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <p className="text-sm text-slate-600">
            Daha fazlası için blogumuza göz atın.
            <Link href="/blog" className="ml-3 inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400">
              Blogu Gör
            </Link>
          </p>
        </div>

        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </div>
    </section>
  );
}
