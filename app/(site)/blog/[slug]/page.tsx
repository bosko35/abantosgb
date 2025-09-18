import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { blogPostsBySlug, blogPosts, type BlogPost, type ContentBlock } from "../../data/blog/posts";
import { CheckCircle2 } from "lucide-react";

type Props = { params: { slug: string } };

function slugify(input: string) {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function estimateReadTime(post: BlogPost) {
  const text = [post.title, post.excerpt, ...(post.sections?.flatMap(s => [s.h2, ...(s.bullets ?? [])]) ?? [])].join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(2, Math.round(words / 200));
  return `${minutes} dk okuma`;
}

export function generateMetadata({ params }: Props) {
  const data = blogPostsBySlug[params.slug];
  if (!data) return { title: "Yazı Bulunamadı" };
  const title = data.metaTitle || data.title;
  const description = data.metaDescription;
  return {
    title,
    description,
    keywords: data.keywords,
    alternates: { canonical: `https://alanadiniz.com/blog/${data.slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      images: data.heroImage ? [{ url: data.heroImage }] : undefined,
      url: `/blog/${data.slug}`,
    },
  } as const;
}

export default function Page({ params }: Props) {
  const post = blogPostsBySlug[params.slug];
  if (!post) return notFound();

  const subtitle = post.subtitle ?? post.excerpt;
  const readTime = post.readTime ?? estimateReadTime(post);
  const updatedISO = post.updatedAt ?? new Date().toISOString();
  const updatedHuman = new Intl.DateTimeFormat("tr-TR", { dateStyle: "long" }).format(new Date(updatedISO));

  const toc = (post.blocks && post.blocks.length > 0)
    ? post.blocks
        .filter((b) => b.type === "h2" || b.type === "h3")
        .map((b) => ({ id: slugify((b as any).text), text: (b as any).text }))
    : post.sections.map((s) => ({ id: slugify(s.h2), text: s.h2 }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: post.heroImage,
    dateModified: updatedISO,
    keywords: post.keywords.join(", "),
    author: { "@type": "Organization", name: "Abant OSGB" },
  } as const;

  const mergedStructured = post.structuredData
    ? { ...schema, ...post.structuredData }
    : schema;

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.locale === post.locale).slice(0, 3);

  return (
    <>
      <Navbar />
      <section className="pt-28 md:pt-36 pb-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="text-sm text-slate-600">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:underline">Anasayfa</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="hover:underline">Blog</Link></li>
              <li>/</li>
              <li aria-current="page" className="text-slate-900 font-medium">{post.title}</li>
            </ol>
          </nav>

          {/* Hero */}
          <header className="mt-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="inline-flex items-center rounded-full px-2 py-0.5 ring-1 ring-inset ring-emerald-200 bg-emerald-50 text-emerald-700">Sektörel İSG</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">{post.title}</h1>
            {subtitle && <p className="mt-2 text-slate-600 max-w-3xl">{subtitle}</p>}

            {post.heroImage && (
              <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-black/5">
                {/* Using next/image for optimization */}
                <Image src={post.heroImage} alt={`${post.title} görseli`} width={1280} height={720} className="w-full h-auto object-cover" />
              </div>
            )}
          </header>

          {/* Two column layout */}
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_20rem]">
            {/* Content */}
            <article className="prose prose-slate lg:prose-lg max-w-none">
              {(post.blocks && post.blocks.length > 0) ? (
                <>
                  {post.blocks.map((blk, i) => {
                    switch (blk.type) {
                      case "lead":
                        return (
                          <div key={i} className="text-lg md:text-xl text-slate-700" dangerouslySetInnerHTML={{ __html: blk.html }} />
                        );
                      case "image":
                        return (
                          <figure key={i} className="mt-6">
                            <Image src={blk.src} alt={blk.alt} width={1280} height={720} className="w-full h-auto rounded-2xl ring-1 ring-black/5 object-cover" />
                            {blk.caption && <figcaption className="mt-2 text-sm text-slate-500">{blk.caption}</figcaption>}
                          </figure>
                        );
                      case "h2":
                        return (
                          <h2 key={i} id={slugify(blk.text)} className="text-2xl font-semibold mt-10 scroll-mt-28 md:scroll-mt-36">{blk.text}</h2>
                        );
                      case "h3":
                        return (
                          <h3 key={i} id={slugify(blk.text)} className="text-xl font-semibold mt-6 scroll-mt-28 md:scroll-mt-36">{blk.text}</h3>
                        );
                      case "list":
                        return blk.style === "ol" ? (
                          <ol key={i}>
                            {blk.items.map((it, idx) => <li key={idx}>{it}</li>)}
                          </ol>
                        ) : (
                          <ul key={i}>
                            {blk.items.map((it, idx) => <li key={idx}>{it}</li>)}
                          </ul>
                        );
                      case "checklist":
                        return (
                          <ul key={i} className="list-none p-0 space-y-2">
                            {blk.items.map((it, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600" aria-hidden />
                                <span>{it}</span>
                              </li>
                            ))}
                          </ul>
                        );
                      case "paragraph":
                        return (
                          <div key={i} dangerouslySetInnerHTML={{ __html: blk.html }} />
                        );
                      case "faq":
                        return (
                          <section key={i}>
                            <h2 id="sss" className="text-2xl font-semibold mt-10">Sık Sorulan Sorular</h2>
                            <div className="mt-4 space-y-4">
                              {blk.items.map((f, fi) => (
                                <div key={fi} className="rounded-xl border border-slate-200 p-4">
                                  <h3 className="text-base md:text-lg font-semibold text-slate-900">{f.q}</h3>
                                  <p className="mt-1 text-slate-700">{f.a}</p>
                                </div>
                              ))}
                            </div>
                          </section>
                        );
                      case "callout": {
                        const styles = blk.variant === "info"
                          ? "bg-emerald-50 ring-emerald-100"
                          : blk.variant === "warning"
                          ? "bg-amber-50 ring-amber-100"
                          : blk.variant === "success"
                          ? "bg-green-50 ring-green-100"
                          : "bg-slate-50 ring-slate-200";
                        return (
                          <div key={i} className={`mt-4 rounded-2xl ring-1 p-4 ${styles}`}>
                            {blk.title && <h4 className="text-sm font-semibold text-slate-900">{blk.title}</h4>}
                            <p className="text-sm text-slate-700">{blk.text}</p>
                          </div>
                        );
                      }
                      case "cta-inline": {
                        const patchedText = "Sorularınız için bize yazın ya da arayın.";
                        const patchedHref = "/iletisim";
                        const patchedLabel = "İletişime Geç";
                        return (
                          <div key={i} className="mt-6 rounded-2xl bg-white ring-1 ring-black/5 p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                            <p className="text-sm text-slate-700">{patchedText}</p>
                            <Link href={patchedHref} className="inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400">{patchedLabel}</Link>
                          </div>
                        );
                      }
                      default:
                        return null;
                    }
                  })}
                </>
              ) : (
                <>
                  {post.sections.map((sec) => (
                    <section key={sec.h2}>
                      <h2 id={slugify(sec.h2)} className="text-2xl font-semibold mt-10 scroll-mt-28 md:scroll-mt-36">{sec.h2}</h2>
                      {sec.bullets && (
                        <ul>
                          {sec.bullets.map((b, i) => <li key={i}>{b}</li>)}
                        </ul>
                      )}
                    </section>
                  ))}
                </>
              )}

              {false && ((post.internalLinks?.length ?? 0) > 0) && (
                <section />
              )}

              {/* FAQ (skip if provided within blocks) */}
              {(!post.blocks || !post.blocks.some((b: ContentBlock) => b.type === "faq")) && post.faq && post.faq.length > 0 && (
                <section>
                  <h2 id="sss" className="text-2xl font-semibold mt-10">Sık Sorulan Sorular</h2>
                  <div className="mt-4 space-y-4">
                    {post.faq.map((f, i) => (
                      <div key={i} className="rounded-xl border border-slate-200 p-4">
                        <h3 className="text-base md:text-lg font-semibold text-slate-900">{f.q}</h3>
                        <p className="mt-1 text-slate-700">{f.a}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </article>

            {/* Aside widgets */}
            <aside className="lg:sticky lg:top-24 space-y-6 h-max">
              {/* TOC only */}
              <div className="rounded-2xl bg-white ring-1 ring-black/5 shadow-md p-5">
                <h4 className="text-sm font-semibold text-slate-900">İçindekiler</h4>
                <ul className="mt-3 space-y-2 text-sm">
                  {toc.map((t) => (
                    <li key={t.id}>
                      <a href={`#${t.id}`} className="text-slate-700 hover:text-emerald-700">{t.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          {/* CTA band removed by rules */}

          {/* Related posts */}
          {related.length > 0 && (
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-slate-900">Benzer Yazılar</h3>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((r) => (
                  <Link key={r.slug} href={`/blog/${r.slug}`} className="group block rounded-2xl bg-white ring-1 ring-black/5 shadow-md hover:shadow-lg transition-all duration-200 p-5">
                    <h4 className="text-base font-semibold text-slate-900 group-hover:text-emerald-700">{r.title}</h4>
                    <p className="mt-1 text-sm text-slate-600">{r.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: JSON.stringify(mergedStructured) }}
          />
        </div>
      </section>
    </>
  );
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}
