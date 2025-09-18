"use client"
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const links = [
  { href: '#hizmetler', label: 'Hizmetler' },
  { href: '#misyon-vizyon', label: 'Misyon & Vizyon' },
  { href: '#sector-insights', label: 'Blog' },
  { href: '#iletisim', label: 'İletişim' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  const resolveHref = (href: string) => {
    if (href.startsWith('#')) {
      return isHome ? href : `/${href}`
    }
    return href
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-xl bg-white/80 backdrop-blur-md border border-white/30 shadow-soft px-4 py-3">
          {/* Brand: logo mark + text */}
          <a href="/" className="flex items-center">
            <span className="relative h-14 w-44 md:h-20 md:w-60 overflow-hidden rounded-lg ring-1 ring-black/5">
              <Image
                src="/brand/logo-horizontal.png"
                alt="Abant OSGB Logo"
                fill
                sizes="(max-width: 768px) 176px, 240px"
                priority
                className="object-contain"
              />
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={resolveHref(l.href)} className="text-sm text-brand-text/80 hover:text-brand-text transition-colors">
                {l.label}
              </a>
            ))}
            <a href={resolveHref('#iletisim')} className="btn-primary btn-cta whitespace-nowrap">Hizmet Talebi</a>
          </div>
          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-brand-navy/20 text-brand-navy"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menüyü Aç/Kapat"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="" aria-hidden>
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden mt-2 rounded-xl bg-white/90 backdrop-blur-md border border-white/30 shadow-soft py-3 px-4">
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <a key={l.href} href={resolveHref(l.href)} className="py-2 text-brand-text/80 hover:text-brand-text" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              ))}
              <a href={resolveHref('#iletisim')} onClick={() => setOpen(false)} className="btn-primary btn-cta">Hizmet Talebi</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
