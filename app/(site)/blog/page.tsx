import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "../data/blog/posts";

export default function BlogIndex() {
  const posts = blogPosts;
  return (
    <>
      <Navbar />
      <section className="pt-28 md:pt-36 pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Blog</h1>
            <p className="mt-2 text-slate-600">Sektörel İSG yazıları ve pratik rehberler.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group rounded-2xl bg-white ring-1 ring-black/5 shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden">
                {p.heroImage && (
                  <div className="relative aspect-[16/9]">
                    <Image src={p.heroImage} alt={p.title} fill className="object-cover" />
                  </div>
                )}
                <div className="p-5">
                  <span className="inline-flex items-center rounded-full px-2 py-0.5 ring-1 ring-inset ring-emerald-200 bg-emerald-50 text-emerald-700 text-xs">Sektörel İSG</span>
                  <h2 className="mt-2 text-base font-semibold text-slate-900 group-hover:text-emerald-700">{p.title}</h2>
                  <p className="mt-1 text-sm text-slate-600 line-clamp-3">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

