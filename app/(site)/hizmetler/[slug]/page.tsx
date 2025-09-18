import { notFound } from "next/navigation";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import Navbar from "@/components/Navbar";
import { servicesBySlug, type ServicePageData } from "../../data/services";

type Props = { params: { slug: string } };

export function generateMetadata({ params }: Props) {
  const data = servicesBySlug[params.slug];
  if (!data) return { title: "Hizmet Bulunamadı" };
  return {
    title: data.seo?.title ?? data.title,
    description: data.seo?.description,
    keywords: data.seo?.keywords,
  };
}

export default function Page({ params }: Props) {
  const data: ServicePageData | undefined = servicesBySlug[params.slug];
  if (!data) return notFound();
  return (
    <>
      <Navbar />
      <ServiceDetailTemplate data={data} />
    </>
  );
}

export function generateStaticParams() {
  return Object.keys(servicesBySlug).map((slug) => ({ slug }));
}
