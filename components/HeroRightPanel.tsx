"use client"
import { HardHat, Stethoscope, Building2, GraduationCap, ShieldCheck, ClipboardList } from 'lucide-react'

const items = [
  { icon: HardHat, label: 'İşçi Güvenliği' },
  { icon: Stethoscope, label: 'Sağlık' },
  { icon: Building2, label: 'Tesis' },
  { icon: GraduationCap, label: 'Eğitim' },
  { icon: ShieldCheck, label: 'Uygunluk' },
  { icon: ClipboardList, label: 'Risk Analizi' },
]

// Animation library removed to avoid Next.js client-boundary export issue.

export default function HeroRightPanel() {
  return (
    <div className="relative rounded-2xl overflow-hidden min-h-[320px] bg-[#17324a] ring-1 ring-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.55)]">
      {/* Static grid background with soft edge fade */}
      <div className="absolute inset-0 bg-grid opacity-25 mask-fade" aria-hidden />

      {/* Subtle vignette & edge lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_100%_at_0%_0%,rgba(255,255,255,0.08),transparent_60%)]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_100%_100%,rgba(0,0,0,0.28),transparent_60%)]" aria-hidden />

      {/* Soft radial light leaks */}
      <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-brand-gradient blur-3xl opacity-50" aria-hidden />
      <div className="absolute -bottom-28 -right-28 h-72 w-72 rounded-full bg-navy-gradient blur-3xl opacity-60" aria-hidden />

      {/* Content */}
      <div className="relative z-10 h-full w-full p-6 md:p-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {items.map(({ icon: Icon, label }, idx) => (
          <div
            key={idx}
            className="group flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-[2px] py-6 min-h-28 text-center transition-all duration-200 hover:bg-white/[0.08] hover:border-white/20 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.45)] hover:translate-y-[-1px]"
          >
            <span className="icon-bubble mb-2">
              <Icon className="h-8 w-8 text-white/90 transition-all group-hover:text-white group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]" />
            </span>
            <span className="text-[11px] sm:text-xs font-medium text-white/85 tracking-wide">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
