import type { Metadata } from 'next'
import Script from 'next/script'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import './globals.css'
// Inter font is imported globally via app/globals.css

const siteUrl = 'https://abantosgb.com'
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${siteUrl}#organization`,
  name: 'Abant OSGB',
  legalName: 'Abant Ortak Sağlık Güvenlik Birimi',
  url: siteUrl,
  description:
    'Bolu ve çevresinde risk analizi, iş güvenliği uzmanlığı, İSG eğitimleri ve danışmanlık sunan Abant OSGB.',
  image: `${siteUrl}/brand/logo-horizontal.png`,
  logo: `${siteUrl}/brand/logo-mark.png`,
  email: 'info@abantosgb.com',
  telephone: ['+905323373814', '+905428017857'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Aktaş Mah. Taşhancılar Cd. No:31 B/22',
    addressLocality: 'Bolu',
    addressRegion: 'Bolu',
    postalCode: '14100',
    addressCountry: 'TR',
  },
  sameAs: [
    'https://www.instagram.com/abantosgb',
    'https://maps.google.com/?q=Akta%C5%9F+Mah.+Ta%C5%9Fhanc%C4%B1lar+Cd.+No:31+B/22+Merkez/Bolu',
  ],
  areaServed: ['Bolu', 'Düzce', 'Zonguldak', 'Sakarya'],
  priceRange: '$$',
  hasMap: 'https://maps.google.com/?q=Akta%C5%9F+Mah.+Ta%C5%9Fhanc%C4%B1lar+Cd.+No:31+B/22+Merkez/Bolu',
} as const

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Abant OSGB – İş Sağlığı ve Güvenliğinde Güvenceniz',
    template: '%s | Abant OSGB',
  },
  description:
    'Abant OSGB, Bolu ve çevresinde risk analizi, iş güvenliği uzmanı hizmetleri, İSG eğitimleri ve danışmanlık sunar. Yerinde keşif, mevzuata uygun doküman yönetimi ve kapsamlı saha desteği.',
  keywords: [
    'Abant OSGB',
    'Bolu OSGB',
    'iş sağlığı ve güvenliği',
    'risk analizi Bolu',
    'İSG eğitimleri',
    'iş güvenliği uzmanı',
  ],
  category: 'professional services',
  applicationName: 'Abant OSGB',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: siteUrl,
    siteName: 'Abant OSGB',
    title: 'Abant OSGB – İş Sağlığı ve Güvenliğinde Güvenceniz',
    description:
      'Risk analizi, iş güvenliği uzmanlığı ve İSG eğitimlerinde Bolu merkezli profesyonel hizmetler.',
    images: [
      {
        url: `${siteUrl}/brand/logo-horizontal.png`,
        width: 1200,
        height: 630,
        alt: 'Abant OSGB',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abant OSGB – İş Sağlığı ve Güvenliğinde Güvenceniz',
    description: 'Bolu ve çevresinde OSGB çözümleri, risk analizi ve eğitim hizmetleri.',
    images: [`${siteUrl}/brand/logo-horizontal.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/brand/logo-mark.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="bg-brand-gray text-brand-text">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
