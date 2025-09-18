import type { Metadata } from 'next'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import './globals.css'
// Inter font is imported globally via app/globals.css

export const metadata: Metadata = {
  title: 'Abant OSGB –İş Sağlığı ve Güvenliğinde Güvenceniz',
  description: 'Kurumsal ve yenilikçi OSGB çözümleri: Risk analizi, iş güvenliği, eğitimler ve danışmanlık. Abant OSGB ile güvendesiniz.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`bg-brand-gray text-brand-text`}>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
