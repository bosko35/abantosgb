"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Route } from "next";

type Sinif = "az" | "tehlikeli" | "cok";

// Dakika / çalışan / ay — İş Güvenliği Uzmanlarının ve İşyeri Hekimi ve Diğer Sağlık Personelinin
// Görev, Yetki, Sorumluluk ve Eğitimleri Hakkında Yönetmelikler (asgari süreler)
const UZMAN_DK: Record<Sinif, number> = { az: 10, tehlikeli: 20, cok: 40 };
const HEKIM_DK: Record<Sinif, number> = { az: 5, tehlikeli: 10, cok: 15 };
// Tam zamanlı görevlendirme eşiği (çalışan sayısı)
const UZMAN_TAM: Record<Sinif, number> = { az: 1000, tehlikeli: 500, cok: 250 };
const HEKIM_TAM: Record<Sinif, number> = { az: 2000, tehlikeli: 1000, cok: 750 };

const SINIF_ADI: Record<Sinif, string> = {
  az: "Az tehlikeli",
  tehlikeli: "Tehlikeli",
  cok: "Çok tehlikeli",
};

function dspDk(sinif: Sinif, n: number): number | null {
  if (sinif !== "cok" || n < 10) return null;
  if (n < 50) return 10;
  if (n < 250) return 15;
  return 20;
}

function saat(dk: number) {
  return Math.round((dk / 60) * 10) / 10;
}

function fmt(n: number) {
  return new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 1 }).format(n);
}

export default function SureHesaplayici({ compact = false }: { compact?: boolean }) {
  const [sinif, setSinif] = useState<Sinif | "">("");
  const [calisan, setCalisan] = useState<string>("");

  const n = Math.max(0, parseInt(calisan || "0", 10) || 0);

  const sonuc = useMemo(() => {
    if (!sinif || n <= 0) return null;
    const uzmanDk = UZMAN_DK[sinif] * n;
    const hekimDk = HEKIM_DK[sinif] * n;
    const dsp = dspDk(sinif, n);
    const dspDkToplam = dsp ? dsp * n : 0;
    return {
      uzmanSaat: saat(uzmanDk),
      hekimSaat: saat(hekimDk),
      dspSaat: dsp ? saat(dspDkToplam) : null,
      uzmanTam: Math.floor(n / UZMAN_TAM[sinif]),
      hekimTam: Math.floor(n / HEKIM_TAM[sinif]),
      isverenUstlenebilir: sinif === "az" && n < 50,
      sgkDestek: sinif !== "az" ? n < 10 : false,
    };
  }, [sinif, n]);

  return (
    <div className={`rounded-2xl border border-brand-navy/10 bg-white/85 shadow-soft backdrop-blur-md ${compact ? "p-6" : "p-6 md:p-8"}`}>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="sh-sinif" className="mb-1 block text-sm font-medium text-brand-navy">Tehlike sınıfı</label>
          <select
            id="sh-sinif"
            value={sinif}
            onChange={(e) => setSinif(e.target.value as Sinif | "")}
            className="w-full rounded-md border border-brand-navy/20 bg-white px-3 py-2 outline-none focus:border-brand-navy"
          >
            <option value="">Seçiniz</option>
            <option value="az">Az tehlikeli (ofis, mağaza, eğitim, depo vb.)</option>
            <option value="tehlikeli">Tehlikeli (imalat, gıda üretimi, lojistik vb.)</option>
            <option value="cok">Çok tehlikeli (inşaat, metal, kimya, deri, maden vb.)</option>
          </select>
          <p className="mt-1 text-xs text-brand-text/60">
            Sınıfınızı bilmiyorsanız SGK işyeri sicil numaranızdaki NACE koduna bakılır; bize yazın, biz bulalım.
          </p>
        </div>
        <div>
          <label htmlFor="sh-calisan" className="mb-1 block text-sm font-medium text-brand-navy">Çalışan sayısı</label>
          <input
            id="sh-calisan"
            type="number"
            inputMode="numeric"
            min={1}
            max={5000}
            placeholder="ör. 35"
            value={calisan}
            onChange={(e) => setCalisan(e.target.value)}
            className="w-full rounded-md border border-brand-navy/20 bg-white px-3 py-2 outline-none focus:border-brand-navy"
          />
          <p className="mt-1 text-xs text-brand-text/60">Çırak ve stajyerler dahil, aynı SGK sicilindeki toplam çalışan.</p>
        </div>
      </div>

      <div aria-live="polite" className="mt-6">
        {!sonuc ? (
          <p className="text-sm text-brand-text/60">İki alanı doldurunca aylık asgari süreler burada görünür.</p>
        ) : (
          <>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-brand-navy/5 p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-brand-text/60">İş güvenliği uzmanı</div>
                <div className="mt-1 text-2xl font-bold text-brand-navy">{fmt(sonuc.uzmanSaat)} <span className="text-base font-medium">saat / ay</span></div>
                <div className="text-xs text-brand-text/60">{UZMAN_DK[sinif as Sinif]} dk × {n} çalışan</div>
                {sonuc.uzmanTam > 0 && (
                  <div className="mt-2 text-xs font-medium text-amber-700">En az {sonuc.uzmanTam} tam zamanlı uzman gerekir.</div>
                )}
              </div>
              <div className="rounded-xl bg-brand-navy/5 p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-brand-text/60">İşyeri hekimi</div>
                <div className="mt-1 text-2xl font-bold text-brand-navy">{fmt(sonuc.hekimSaat)} <span className="text-base font-medium">saat / ay</span></div>
                <div className="text-xs text-brand-text/60">{HEKIM_DK[sinif as Sinif]} dk × {n} çalışan</div>
                {sonuc.hekimTam > 0 && (
                  <div className="mt-2 text-xs font-medium text-amber-700">En az {sonuc.hekimTam} tam zamanlı hekim gerekir.</div>
                )}
              </div>
              <div className="rounded-xl bg-brand-navy/5 p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-brand-text/60">Diğer sağlık personeli</div>
                {sonuc.dspSaat !== null ? (
                  <>
                    <div className="mt-1 text-2xl font-bold text-brand-navy">{fmt(sonuc.dspSaat)} <span className="text-base font-medium">saat / ay</span></div>
                    <div className="text-xs text-brand-text/60">Çok tehlikeli sınıf, {n} çalışan</div>
                  </>
                ) : (
                  <>
                    <div className="mt-1 text-lg font-semibold text-brand-navy">Zorunlu değil</div>
                    <div className="text-xs text-brand-text/60">Yalnız çok tehlikeli sınıfta 10+ çalışanda zorunlu.</div>
                  </>
                )}
              </div>
            </div>

            <ul className="mt-4 space-y-1 text-sm text-brand-text/75">
              <li>
                Sınıf: <strong>{SINIF_ADI[sinif as Sinif]}</strong>, {n} çalışan. Süreler yönetmelikteki <strong>asgari</strong> değerlerdir; risk durumuna göre artırılabilir.
              </li>
              {sonuc.isverenUstlenebilir && (
                <li>
                  50'den az çalışanlı az tehlikeli işyerlerinde işveren, Bakanlığın eğitimini tamamlayarak iş güvenliği uzmanı ve işyeri hekimi görevini kendisi üstlenebilir (6331 sayılı Kanun md. 6). İşe giriş ve periyodik muayeneler yine hekim tarafından yapılmalıdır.
                </li>
              )}
              {sonuc.sgkDestek && (
                <li>
                  10'dan az çalışanlı tehlikeli ve çok tehlikeli işyerleri için İSG hizmet bedeli SGK tarafından desteklenebilir (6331 sayılı Kanun md. 7); şartları görüşmede netleştiririz.
                </li>
              )}
            </ul>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href={`/iletisim?sinif=${sinif}&calisan=${n}` as Route}
                className="btn-primary btn-cta"
              >
                Bu değerlerle teklif iste
              </Link>
              <Link href="/hizmetler/isyeri-hekimligi-bolu" className="btn-outline">İşyeri hekimliği hakkında</Link>
            </div>
          </>
        )}
      </div>

      <p className="mt-5 text-xs text-brand-text/55">
        Bu araç ön bilgilendirme amaçlıdır; bağlayıcı süreler İSG-KATİP sözleşmesinde, işyerinin güncel tehlike sınıfı ve çalışan sayısına göre belirlenir.
      </p>
    </div>
  );
}
