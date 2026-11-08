import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: { absolute: "İletişim | Abant OSGB Bolu" },
  description:
    "Abant OSGB Bolu iletişim: Aktaş Mah. Taşhancılar Cd. No:31 B/22 Merkez/Bolu, 0532 337 38 14, info@abantosgb.com. Teklif ve bilgi için formu doldurun, 1 iş günü içinde dönüş yapalım.",
  alternates: { canonical: "https://abantosgb.com/iletisim" },
  openGraph: {
    title: "İletişim | Abant OSGB Bolu",
    description: "Bolu'da iş sağlığı ve güvenliği için teklif ve bilgi: adres, telefon, WhatsApp ve form.",
    url: "https://abantosgb.com/iletisim",
    siteName: "Abant OSGB",
    locale: "tr_TR",
  },
};
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function IletisimPage() {
  return (
    <>
      <Navbar />
      {/* Offset for fixed navbar */}
      <div className="pt-28 md:pt-36">
        {/* Reuse the existing contact section as a full page */}
        <Contact />
      </div>
      <Footer />
    </>
  );
}
