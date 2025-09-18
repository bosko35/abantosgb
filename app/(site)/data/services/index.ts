export type CTA = { label: string; href: string };
export type ServicePageData = {
  slug: string;
  title: string;
  hero?: {
    subtitle?: string;
    tagline?: string;
    primaryCta?: CTA;
    secondaryCta?: CTA;
  };
  highlights?: { label: string; value: string }[];
  toc?: string[];
  scope?: { intro?: string; bullets?: string[] };
  process?: { step: number; title: string; desc: string }[];
  deliverables?: string[];
  sectors?: string[];
  faq?: { q: string; a: string }[];
  gallery?: { label: string; file: string }[];
  related?: { title: string; href: string }[];
  cta?: { banner?: string; primary?: CTA; secondary?: CTA };
  seo?: { title: string; description: string; keywords?: string[] };
};

import riskAnaliziBolu from "./risk-analizi-bolu";
import isGuvenligiBolu from "./is-guvenligi-bolu";
import isgEgitimleriBolu from "./isg-egitimleri-bolu";

export const servicesBySlug: Record<string, ServicePageData> = {
  [riskAnaliziBolu.slug]: riskAnaliziBolu,
  [isGuvenligiBolu.slug]: isGuvenligiBolu,
  [isgEgitimleriBolu.slug]: isgEgitimleriBolu,
};

export const allServices: ServicePageData[] = Object.values(servicesBySlug);

export type { ServicePageData as ServicePageDataType };
