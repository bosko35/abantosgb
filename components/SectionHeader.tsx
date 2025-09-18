type Props = {
  title: string
  subtitle?: string
}

export default function SectionHeader({ title, subtitle }: Props) {
  return (
    <div className="mx-auto max-w-2xl text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-brand-navy gold-underline inline-block">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-brand-text/70">{subtitle}</p>
      )}
    </div>
  )
}

