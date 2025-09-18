"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { Route } from "next";

type HazardClass = "Az" | "Tehlikeli" | "Çok";
type Sector =
  | "Gıda"
  | "Metal/imalat"
  | "İnşaat/şantiye"
  | "Lojistik/depoculuk"
  | "Eğitim/ofis"
  | "Otomotiv"
  | "Mobilya/orman ürünleri"
  | "Tekstil"
  | "Enerji"
  | "Sağlık/lab"
  | "Plastik-kauçuk"
  | "Kimya/boya"
  | "Cam/seramik"
  | "Depolama/soğuk zincir";

type Employees = "1-9" | "10-49" | "50-249" | "250+";
type Maturity = "Zayıf" | "Orta" | "İyi";

type FormValues = {
  hazardClass?: HazardClass;
  sector?: Sector;
  chemical?: "Evet" | "Hayır";
  machine?: "Evet" | "Hayır";
  heightConfined?: "Evet" | "Hayır";
  employees?: Employees;
  incidents?: "Evet" | "Hayır";
  maturity?: Maturity;
};

type Result = {
  percent: number;
  level: "Düşük" | "Orta" | "Önemli" | "Yüksek";
  description: string;
};

const KEY = "abantosgb-riskpro-v1";

const riskSectors = new Set<
  Extract<Sector, "İnşaat/şantiye" | "Metal/imalat" | "Enerji" | "Kimya/boya" | "Plastik-kauçuk" | "Cam/seramik">
>(["İnşaat/şantiye", "Metal/imalat", "Enerji", "Kimya/boya", "Plastik-kauçuk", "Cam/seramik"]);

const sectorOptions: Sector[] = [
  "Gıda",
  "Metal/imalat",
  "İnşaat/şantiye",
  "Lojistik/depoculuk",
  "Eğitim/ofis",
  "Otomotiv",
  "Mobilya/orman ürünleri",
  "Tekstil",
  "Enerji",
  "Sağlık/lab",
  "Plastik-kauçuk",
  "Kimya/boya",
  "Cam/seramik",
  "Depolama/soğuk zincir",
];

function calc(values: FormValues): Result | null {
  const {
    hazardClass,
    sector,
    chemical,
    machine,
    heightConfined,
    employees,
    incidents,
    maturity,
  } = values;

  if (!hazardClass || !sector || !chemical || !machine || !heightConfined || !employees || !incidents || !maturity) {
    return null;
  }

  // Likelihood
  let L = maturity === "Zayıf" ? 5 : maturity === "Orta" ? 3 : 2;
  if (incidents === "Evet") L = Math.min(5, L + 1);

  // Severity
  let S = 2;
  if (chemical === "Evet") S++;
  if (machine === "Evet") S++;
  if (heightConfined === "Evet") S++;
  S = Math.min(5, S);

  // Exposure
  let E: number = employees === "1-9" ? 1 : employees === "10-49" ? 2 : employees === "50-249" ? 3 : 4;
  if (riskSectors.has(sector as any)) E = Math.min(5, E + 1);

  const classMul = hazardClass === "Az" ? 1 : hazardClass === "Tehlikeli" ? 1.3 : 1.6;
  const base = L * S * E; // 1..125
  const percent = Math.min(Math.round((base * classMul) / 1.25), 100);

  let level: Result["level"] = "Düşük";
  if (percent >= 71) level = "Yüksek";
  else if (percent >= 41) level = "Önemli";
  else if (percent >= 21) level = "Orta";

  const description =
    level === "Düşük"
      ? "Mevcut kontrolleri sürdürün. Eğitim yenilemeleri planlı."
      : level === "Orta"
      ? "Risk Analizi + hedefli eğitim."
      : level === "Önemli"
      ? "Risk Analizi, Acil Durum Planı ve mühendislik/idarî kontroller."
      : "Derhal önlem alın; çalışma durdurma/izolasyon değerlendirilmelidir.";

  return { percent, level, description };
}

export default function HomeRiskPro() {
  const [values, setValues] = useState<FormValues>({});
  const [result, setResult] = useState<Result | null>(null);
  const canCalc = useMemo(() => calc(values) !== null, [values]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        setValues(saved.values ?? {});
        setResult(saved.result ?? null);
      }
    } catch {}
  }, []);

  const onCalc = () => {
    const r = calc(values);
    if (!r) return;
    setResult(r);
    try {
      localStorage.setItem(KEY, JSON.stringify({ values, result: r }));
    } catch {}
  };

  const onReset = () => {
    setValues({});
    setResult(null);
    try {
      localStorage.removeItem(KEY);
    } catch {}
  };

  const actions: string[] = [];
  if (values.chemical === "Evet") actions.push("Kimyasal risk değerlendirmesi, SDS ve eğitim");
  if (values.machine === "Evet") actions.push("Makine koruma, enerji kesme/LOTO, periyodik kontroller");
  if (values.heightConfined === "Evet") actions.push("Yüksekte çalışma eğitimi, kurtarma planı ve izinli çalışma");
  if (values.maturity === "Zayıf") actions.push("Prosedür/Eğitim/KKD disiplini iyileştirme");

  const secondary: { href: Route; label: string } = result && (result.level === "Düşük" || result.level === "Orta")
    ? { href: "/hizmetler/isg-egitimleri-bolu" as Route, label: "Eğitim Planı Oluştur" }
    : { href: "/hizmetler/is-guvenligi-bolu" as Route, label: "Mevzuat Uyum Desteği" };

  return (
    <section className="relative py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white ring-1 ring-black/5 shadow-sm p-6 relative">
          {/* Print button */}
          <button
            type="button"
            onClick={() => window.print()}
            className="absolute right-4 top-4 text-slate-500 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 print:hidden"
            aria-label="Yazdır / PDF"
            title="Yazdır / PDF"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v8H6z"/></svg>
          </button>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Hızlı Risk Skoru</h2>
          <p className="mt-1 text-sm text-slate-500">Bu araç genel bir ön değerlendirmedir; mevzuat uyumu için sahada çalışma gerekir.</p>

          {/* Form */}
          <form className="mt-6 grid md:grid-cols-2 gap-4 print:hidden" onSubmit={(e) => { e.preventDefault(); onCalc(); }}>
            {/* 1 Tehlike sınıfı */}
            <fieldset className="rounded-xl border border-slate-200 p-4">
              <legend className="font-medium text-slate-900">Tehlike sınıfı</legend>
              <p className="text-sm text-slate-500">Az / Tehlikeli / Çok</p>
              <div className="mt-2 flex gap-4">
                {["Az","Tehlikeli","Çok"].map((v) => (
                  <label key={v} className="inline-flex items-center gap-2">
                    <input type="radio" name="hazardClass" required checked={values.hazardClass===v}
                      onChange={() => setValues((s)=>({...s, hazardClass: v as HazardClass}))}
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-400" />
                    <span>{v}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* 2 Sektör */}
            <div className="rounded-xl border border-slate-200 p-4">
              <label htmlFor="sector" className="font-medium text-slate-900">Sektör</label>
              <p className="text-sm text-slate-500">Faaliyet alanınızı seçin</p>
              <select id="sector" required value={values.sector ?? ""}
                onChange={(e)=> setValues((s)=>({...s, sector: e.target.value as Sector}))}
                className="mt-2 w-full rounded-md border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-400">
                <option value="" disabled>Seçiniz</option>
                {sectorOptions.map((s)=> <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            {/* 3 Kimyasal */}
            <fieldset className="rounded-xl border border-slate-200 p-4">
              <legend className="font-medium text-slate-900">Kimyasal/madde maruziyeti</legend>
              <p className="text-sm text-slate-500">Evet/Hayır</p>
              <div className="mt-2 flex gap-4">
                {["Evet","Hayır"].map((v)=>(
                  <label key={v} className="inline-flex items-center gap-2">
                    <input type="radio" name="chemical" required checked={values.chemical===v as any}
                      onChange={()=> setValues((s)=>({...s, chemical: v as any}))}
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-400" />
                    <span>{v}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* 4 Makine/elektrik */}
            <fieldset className="rounded-xl border border-slate-200 p-4">
              <legend className="font-medium text-slate-900">Hareketli makine/elektrik riski</legend>
              <p className="text-sm text-slate-500">Evet/Hayır</p>
              <div className="mt-2 flex gap-4">
                {["Evet","Hayır"].map((v)=>(
                  <label key={v} className="inline-flex items-center gap-2">
                    <input type="radio" name="machine" required checked={values.machine===v as any}
                      onChange={()=> setValues((s)=>({...s, machine: v as any}))}
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-400" />
                    <span>{v}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* 5 Yüksekte/kapalı alan */}
            <fieldset className="rounded-xl border border-slate-200 p-4">
              <legend className="font-medium text-slate-900">Yüksekte çalışma veya kapalı alan</legend>
              <p className="text-sm text-slate-500">Evet/Hayır</p>
              <div className="mt-2 flex gap-4">
                {["Evet","Hayır"].map((v)=>(
                  <label key={v} className="inline-flex items-center gap-2">
                    <input type="radio" name="heightConfined" required checked={values.heightConfined===v as any}
                      onChange={()=> setValues((s)=>({...s, heightConfined: v as any}))}
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-400" />
                    <span>{v}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* 6 Çalışan sayısı */}
            <div className="rounded-xl border border-slate-200 p-4">
              <label htmlFor="emp" className="font-medium text-slate-900">Çalışan sayısı</label>
              <p className="text-sm text-slate-500">Aralığı seçin</p>
              <select id="emp" required value={values.employees ?? ""}
                onChange={(e)=> setValues((s)=>({...s, employees: e.target.value as Employees}))}
                className="mt-2 w-full rounded-md border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-400">
                <option value="" disabled>Seçiniz</option>
                {(["1-9","10-49","50-249","250+"] as Employees[]).map((o)=> <option key={o} value={o}>{o}</option>)}
              </select>
            </div>

            {/* 7 Son 12 ay olay */}
            <fieldset className="rounded-xl border border-slate-200 p-4">
              <legend className="font-medium text-slate-900">Son 12 ayda iş kazası veya ramak kala</legend>
              <p className="text-sm text-slate-500">Evet/Hayır</p>
              <div className="mt-2 flex gap-4">
                {["Evet","Hayır"].map((v)=>(
                  <label key={v} className="inline-flex items-center gap-2">
                    <input type="radio" name="incidents" required checked={values.incidents===v as any}
                      onChange={()=> setValues((s)=>({...s, incidents: v as any}))}
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-400" />
                    <span>{v}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* 8 Kontrol olgunluğu */}
            <fieldset className="rounded-xl border border-slate-200 p-4">
              <legend className="font-medium text-slate-900">Kontrol olgunluğu</legend>
              <p className="text-sm text-slate-500">Prosedür, eğitim, KKD disiplini</p>
              <div className="mt-2 flex gap-4">
                {["Zayıf","Orta","İyi"].map((v)=>(
                  <label key={v} className="inline-flex items-center gap-2">
                    <input type="radio" name="maturity" required checked={values.maturity===v as any}
                      onChange={()=> setValues((s)=>({...s, maturity: v as any}))}
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-400" />
                    <span>{v}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="md:col-span-2 mt-2 flex gap-3">
              <button type="submit" disabled={!canCalc}
                className={`inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-400 ${
                  canCalc ? "bg-emerald-600 text-white hover:bg-emerald-700" : "bg-slate-200 text-slate-500 cursor-not-allowed"
                }`}>
                Skoru Hesapla
              </button>
              <button type="button" onClick={onReset}
                className="inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold border border-slate-300 text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-400">
                Sıfırla
              </button>
            </div>
          </form>

          {/* Result */}
          <div aria-live="polite" className="mt-6">
            {result && (
              <div className="animate-[fadeIn_.4s_ease]">
                {/* Progress band */}
                <div className="mb-3">
                  <div className="h-3 w-full rounded-full bg-slate-200 overflow-hidden" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={result.percent}>
                    <div className="h-full bg-gradient-to-r from-emerald-500 via-yellow-400 to-red-500" style={{ width: `${result.percent}%` }} />
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="text-sm font-medium text-slate-700">Skor: %{result.percent}</div>
                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${
                      result.level === "Düşük" ? "bg-emerald-50 text-emerald-700 ring-emerald-200" :
                      result.level === "Orta" ? "bg-amber-50 text-amber-700 ring-amber-200" :
                      result.level === "Önemli" ? "bg-orange-50 text-orange-700 ring-orange-200" :
                      "bg-red-50 text-red-700 ring-red-200"
                    }`}>
                      {result.level}
                    </span>
                  </div>
                </div>

                <p className="text-slate-700">{result.description}</p>

                {actions.length > 0 && (
                  <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                    {actions.map((a,i)=> <li key={i}>{a}</li>)}
                  </ul>
                )}

                <div className="mt-4 flex flex-wrap gap-3 print:hidden">
                  <Link href="/hizmetler/risk-analizi-bolu" rel="internal" className="inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400">
                    Risk Analizi Talep Et
                  </Link>
                  <Link href={secondary.href} rel="internal" className="inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold border border-slate-300 text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-400">
                    {secondary.label}
                  </Link>
                </div>

                <p className="mt-3 text-xs text-slate-500">Bu araç genel bir ön değerlendirmedir; mevzuat uyumu için sahada çalışma gerekir.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Tailwind keyframes for subtle fade */
// @ts-ignore - this is only to hint the animation name, Tailwind handles it if configured with arbitrary values
const _k = `
@keyframes fadeIn { from { opacity: 0; transform: translateY(4px);} to { opacity:1; transform: translateY(0);} }
`;
