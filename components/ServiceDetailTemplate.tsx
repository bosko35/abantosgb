"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { Route } from "next";

type CTA = { label: string; href: string };
type Data = {
  title: string;
  hero?: {
    subtitle?: string;
    tagline?: string;
    primaryCta?: CTA;
    secondaryCta?: CTA;
  };
  highlights?: { label: string; value: string }[];
  toc?: string[]; // section ids
  scope?: { intro?: string; bullets?: string[] };
  process?: { step: number; title: string; desc: string }[];
  deliverables?: string[];
  sectors?: string[];
  faq?: { q: string; a: string }[];
  gallery?: { label: string; file: string }[];
  related?: { title: string; href: string }[];
  cta?: { banner?: string; primary?: CTA; secondary?: CTA };
};

// Section labels and ids to keep design consistent
const SECTION_LABELS: Record<string, string> = {
  scope: "Neleri Kapsıyoruz?",
  process: "Nasıl Çalışıyoruz?",
  deliverables: "Teslim Ettiğimiz Dokümanlar",
  sectors: "Sektörel Uyarlamalar",
  faq: "Sık Sorulan Sorular",
  gallery: "Örnek Rapor ve Şablonlar",
  related: "İlişkili Hizmetler",
};

// Decorative helmet svg used in hero
const HelmetSVG = ({ className = "w-24 h-24" }: { className?: string }) => (
  <svg viewBox="0 0 128 128" className={className} aria-hidden="true">
    <defs>
      <radialGradient id="halo" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="#fef9c3" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#34d399" stopOpacity="0.1" />
      </radialGradient>
      <linearGradient id="cap" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#fde047" />
        <stop offset="100%" stopColor="#facc15" />
      </linearGradient>
    </defs>
    <circle cx="64" cy="64" r="62" fill="url(#halo)" />
    <g transform="translate(0,6)">
      <path d="M20 74c0-27 21-46 44-46s44 19 44 46" fill="url(#cap)" />
      <path d="M62 28h4v28h-4z" fill="#f59e0b" opacity=".6" />
      <path d="M12 76c0 6 6 10 12 10h80c6 0 12-4 12-10H12z" fill="#facc15" />
      <rect x="18" y="76" width="92" height="6" fill="#eab308" opacity=".55" />
    </g>
  </svg>
);

const isInternalHref = (href: string) => href.startsWith("/") && !href.startsWith("//");

type SmartLinkProps = {
  href: string;
  className?: string;
  ariaLabel?: string;
  rel?: string;
  children: React.ReactNode;
};

function SmartLink({ href, className, ariaLabel, rel, children }: SmartLinkProps) {
  if (isInternalHref(href)) {
    return (
      <Link href={href as Route} className={className} aria-label={ariaLabel} rel={rel}>
        {children}
      </Link>
    );
  }

  const isHttp = /^https?:/i.test(href);
  const resolvedRel = rel ?? (isHttp ? "noopener noreferrer" : undefined);

  return (
    <a
      href={href}
      className={className}
      aria-label={ariaLabel}
      rel={resolvedRel}
      target={isHttp ? "_blank" : undefined}
    >
      {children}
    </a>
  );
}

// Small helper components
const H2 = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <h2
    id={id}
    className="text-2xl font-bold text-slate-900 mt-10 mb-4 scroll-mt-28 after:block after:h-1 after:w-12 after:bg-emerald-400 after:rounded-full after:mt-2"
  >
    {children}
  </h2>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-6 ${className}`}>{children}</div>
);

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    if (!ids.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids.join(",")]);
  return active;
}

export default function ServiceDetailTemplate({ data }: { data: Data }) {
  const slugify = (s: string) =>
    s
      .toLowerCase()
      .replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ş/g, "s")
      .replace(/ı/g, "i").replace(/i̇/g, "i").replace(/ö/g, "o").replace(/ç/g, "c")
      .replace(/İ/g, "i").replace(/Ğ/g, "g").replace(/Ü/g, "u").replace(/Ş/g, "s").replace(/Ö/g, "o").replace(/Ç/g, "c").replace(/I/g, "i")
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");

  const headerOffset = 96;
  const scrollToId = (id: string) => {
    if (typeof window === "undefined") return;
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const sectionsInUse = useMemo(() => {
    const keys: string[] = [];
    if (data.scope && (data.scope.intro || data.scope.bullets?.length)) keys.push("scope");
    if (data.process?.length) keys.push("process");
    if (data.deliverables?.length) keys.push("deliverables");
    if (data.sectors?.length) keys.push("sectors");
    if (data.faq?.length) keys.push("faq");
    // gallery is intentionally ignored per UX update
    if (data.related?.length) keys.push("related");
    return keys;
  }, [data]);

  // Build ids and labels per section key; prefer provided toc labels if available, in order
  const labelsByKey = sectionsInUse.reduce<Record<string, string>>((acc, key, i) => {
    const provided = data.toc?.[i];
    acc[key] = provided || SECTION_LABELS[key];
    return acc;
  }, {});
  const idsByKey = Object.fromEntries(
    sectionsInUse.map((key) => [key, slugify(labelsByKey[key])])
  ) as Record<string, string>;

  const tocIds = sectionsInUse.map((key) => idsByKey[key]);
  const activeId = useActiveSection(tocIds);

  // Sticky CTA visibility on mobile: show when scrolled past hero
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [showBar, setShowBar] = useState(false);
  useEffect(() => {
    if (!heroRef.current) return;
    const io = new IntersectionObserver(
      (e) => setShowBar(!e[0].isIntersecting),
      { rootMargin: "0px 0px 0px 0px", threshold: 0.1 }
    );
    io.observe(heroRef.current);
    return () => io.disconnect();
  }, []);

  const [pendingId, setPendingId] = useState<string | null>(null);

  useEffect(() => {
    if (!pendingId) return;
    const timer = setTimeout(() => setPendingId(null), 800);
    return () => clearTimeout(timer);
  }, [pendingId]);

  return (
    <div className="bg-slate-50 pt-28 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Hero */}
        <div ref={heroRef} className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm text-emerald-600 font-medium">{data.hero?.subtitle}</p>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mt-2">
              {data.title}
            </h1>
            {data.hero?.tagline && (
              <p className="mt-3 text-slate-600">{data.hero.tagline}</p>
            )}
            <div className="mt-6 flex flex-wrap gap-3">
              {data.hero?.primaryCta && (
                <SmartLink
                  href={data.hero.primaryCta.href}
                  ariaLabel={data.hero.primaryCta.label}
                  rel="internal"
                  className="btn-primary btn-cta"
                >
                  {data.hero.primaryCta.label}
                </SmartLink>
              )}
              {data.hero?.secondaryCta && (
                <SmartLink
                  href={data.hero.secondaryCta.href}
                  ariaLabel={data.hero.secondaryCta.label}
                  rel="internal"
                  className="btn-outline"
                >
                  {data.hero.secondaryCta.label}
                </SmartLink>
              )}
            </div>
          </div>
          <div className="flex md:justify-end">
            <HelmetSVG className="w-40 h-40" />
          </div>
        </div>

        {/* Highlights */}
        {data.highlights?.length ? (
          <div className="grid md:grid-cols-4 gap-4 mt-6">
            {data.highlights.map((h, i) => (
              <Card key={i}>
                <div className="text-sm text-slate-500">{h.label}</div>
                <div className="mt-1 text-xl font-semibold text-slate-900">{h.value}</div>
              </Card>
            ))}
          </div>
        ) : null}

        {/* Main grid */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 mt-10">
          {/* Content */}
          <div className="lg:col-span-8">
            {/* Scope */}
            {sectionsInUse.includes("scope") && (
              <section data-section id={idsByKey.scope}>
                <H2 id={idsByKey.scope}>{labelsByKey.scope}</H2>
                {data.scope?.intro && (
                  <p className="text-slate-600">{data.scope.intro}</p>
                )}
                {data.scope?.bullets?.length ? (
                  <ul className="mt-3 space-y-2">
                    {data.scope.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700">
                        <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            )}

            {/* Process timeline */}
            {sectionsInUse.includes("process") && (
              <section data-section id={idsByKey.process}>
                <H2 id={idsByKey.process}>{labelsByKey.process}</H2>
                <ol className="border-s border-emerald-200 ps-5 space-y-5">
                  {data.process!.map((p) => (
                    <li key={p.step} className="flex items-start gap-3">
                      <span className="shrink-0 mt-1 grid h-7 w-7 place-items-center rounded-full bg-emerald-500 text-white text-sm font-bold">
                        {p.step}
                      </span>
                      <div>
                        <h3 className="font-semibold text-slate-900">{p.title}</h3>
                        <p className="text-slate-600">{p.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {/* Deliverables */}
            {sectionsInUse.includes("deliverables") && (
              <section data-section id={idsByKey.deliverables}>
                <H2 id={idsByKey.deliverables}>{labelsByKey.deliverables}</H2>
                <Card>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {data.deliverables!.map((d, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span aria-hidden className="mt-1">📄</span>
                        <span className="text-slate-700">{d}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </section>
            )}

            {/* Sectors */}
            {sectionsInUse.includes("sectors") && (
              <section data-section id={idsByKey.sectors}>
                <H2 id={idsByKey.sectors}>{labelsByKey.sectors}</H2>
                <ul className="flex flex-wrap gap-2">
                  {Array.from(
                    new Set([
                      ...(data.sectors ?? []),
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
                    ])
                  ).map((s, i) => (
                    <li
                      key={i}
                      className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm hover:bg-slate-50"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* FAQ */}
            {sectionsInUse.includes("faq") && (
              <section data-section id={idsByKey.faq}>
                <H2 id={idsByKey.faq}>{labelsByKey.faq}</H2>
                <div className="space-y-3">
                  {data.faq!.map((f, i) => (
                    <details
                      key={i}
                      className="rounded-2xl bg-white ring-1 ring-black/5 p-4 open:shadow-sm"
                    >
                      <summary className="cursor-pointer font-medium text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded">
                        {f.q}
                      </summary>
                      <p className="mt-2 text-slate-600">{f.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* Gallery intentionally removed per UX update */}

            {/* Related */}
            {sectionsInUse.includes("related") && (
              <section data-section id={idsByKey.related}>
                <H2 id={idsByKey.related}>{labelsByKey.related}</H2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {data.related!.map((r, i) => (
                    <Card key={i}>
                      <SmartLink href={r.href} rel="internal" className="text-emerald-700 hover:underline">
                        {r.title}
                      </SmartLink>
                    </Card>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* TOC */}
          <aside className="mt-10 lg:mt-0 lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <Card>
                <div className="text-sm text-slate-500 mb-2">Bu sayfada</div>
                <nav className="space-y-1">
                  {tocIds.map((id, i) => (
                    <button
                      key={id}
                      onClick={() => {
                        setPendingId(id);
                        scrollToId(id);
                      }}
                      aria-current={activeId === id ? "true" : undefined}
                      className={`w-full text-left rounded px-3 py-2 text-sm transition-colors border-l-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 ${
                        activeId === id || pendingId === id
                          ? "border-emerald-500 bg-emerald-100 text-emerald-800"
                          : "border-transparent hover:bg-slate-50 text-slate-700"
                      }`}
                    >
                      {data.toc?.[i] ?? SECTION_LABELS[sectionsInUse[i]]}
                    </button>
                  ))}
                </nav>
              </Card>
            </div>
          </aside>
        </div>
      </div>

      {/* Sticky CTA */}
      {data.cta?.primary && (
        <>
          {/* Mobile bottom bar */}
          <div
            className={`fixed inset-x-0 bottom-0 z-40 lg:hidden transition-transform ${
              showBar ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-5">
              <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-4 flex items-center justify-between">
                <div className="text-sm text-slate-700 truncate pr-4">{data.cta.banner ?? data.title}</div>
                <SmartLink
                  href={data.cta.primary.href}
                  rel="internal"
                  ariaLabel={data.cta.primary.label}
                  className="btn-primary btn-cta"
                >
                  {data.cta.primary.label}
                </SmartLink>
              </div>
            </div>
          </div>

          {/* Desktop FAB */}
          <div className="hidden lg:block">
            <SmartLink
              href={data.cta.primary.href}
              rel="internal"
              ariaLabel={data.cta.primary.label}
              className="fixed right-6 bottom-6 z-40 inline-flex items-center gap-2 rounded-full bg-emerald-500 text-white px-5 py-3 shadow-lg hover:bg-emerald-600 transition"
            >
              <span>{data.cta.primary.label}</span>
              <span aria-hidden>→</span>
            </SmartLink>
          </div>
        </>
      )}
    </div>
  );
}
