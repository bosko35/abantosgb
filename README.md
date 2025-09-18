# Abant OSGB Kurumsal Site (Next.js + Tailwind)

Kurumsal ve ciddi bir OSGB (Ortak Sağlık Güvenlik Birimi) firması için modern ve yenilikçi bir tek sayfa web sitesi.

## Özellikler
- Next.js App Router + TailwindCSS
- Kurumsal renk paleti ve tipografi (Merriweather Sans + Lato)
- Bölümler: Hero, Hizmet Akışı (timeline/flow), Misyon & Vizyon, Eğitimler, Referanslar, İletişim, Footer
- Hover efektleri, glassmorphism dokunuşları, yumuşak geçişler
- Responsive tasarım, basit slider (CSS marquee) ve sabit menü

## Kurulum
```bash
npm install
npm run dev
```

Tarayıcı: http://localhost:3000

## Tasarım Kuralları
- Renkler: 
  - Lacivert `#1B3A57` (brand-navy)
  - Yeşil `#2E7D32` (brand-green)
  - Altın `#D9A441` (brand-gold)
  - Açık gri `#F8F9FA` (brand-gray)
  - Metin `#212121` (brand-text)
- Fontlar: Başlıklar Merriweather Sans, metin Lato (next/font ile yüklenir)

## Dosya Yapısı
- `app/` sayfa ve layout
- `components/` bölümler ve ortak parçalar
- `public/patterns/` ve `public/logos/` görseller

## Özelleştirme
- Renk ve gölge ayarları: `tailwind.config.ts`
- Global stiller ve yardımcı sınıflar: `app/globals.css`
- Bölüm içerikleri: `components/*`

## Notlar
- Harita iframe’i ve WhatsApp/Tel linkleri örnek amaçlıdır; gerçek bilgilerle güncelleyiniz.
- Logo SVG’leri placeholder’dır; kurum logolarıyla değiştiriniz.
- Form örnek olarak alert gösterir; gerçek backend entegrasyonu ekleyiniz.

