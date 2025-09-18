import HeroRightSlider from './HeroRightSlider'
import SafetyIntro from './SafetyIntro'

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-36">
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-8 items-stretch px-4 sm:px-6 lg:px-8">
        {/* Left: SafetyIntro replaces previous text block */}
        <div className="relative overflow-hidden rounded-2xl p-0 bg-white/80 backdrop-blur-md border border-white/40 shadow-soft">
          <div className="absolute inset-0 pointer-events-none opacity-40" aria-hidden>
            <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-brand-gradient blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-navy-gradient blur-3xl" />
          </div>
          <div className="relative">
            <SafetyIntro
              variant="inline"
              className="[&>div]:py-12"
              optimize={false} // use original PNG to avoid re-encode artifacts
              sizePx={160}
            />
          </div>
        </div>
        {/* Right: Visual slider remains */}
        <HeroRightSlider />
      </div>
    </section>
  )
}
