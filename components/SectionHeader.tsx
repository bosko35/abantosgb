type Props = {
  title: string
  subtitle?: string
  className?: string
}

export default function SectionHeader({ title, subtitle, className }: Props) {
  const containerClasses = `mx-auto max-w-2xl text-center ${className ?? 'mb-10'}`

  return (
    <div className={containerClasses}>
      <h2 className="text-3xl md:text-4xl font-semibold text-brand-navy gold-underline inline-block">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-brand-text/70">{subtitle}</p>
      )}
    </div>
  )
}
