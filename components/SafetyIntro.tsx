"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface SafetyIntroProps {
  helmetSrc?: string;
  altText?: string;
  variant?: "full" | "inline"; // full: with gray section background; inline: content only
  className?: string; // extra classes for wrapper
  optimize?: boolean; // use Next/Image optimizer (default true)
  sizePx?: number; // explicit rendered size in px (default 144)
}

const SafetyIntro: React.FC<SafetyIntroProps> = ({
  helmetSrc = "/img/helmet.png",
  altText = "Baret ikon",
  variant = "full",
  className = "",
  optimize = true,
  sizePx = 144,
}) => {
  // timings
  const dropDuration = 0.9; // seconds
  const bounceDelay = dropDuration; // start bounce after landing
  const textDelay = dropDuration + 0.5; // 0.5s after helmet settles

  const Wrapper: React.ElementType = variant === "full" ? "section" : "div";
  const wrapperClasses =
    variant === "full"
      ? "w-full bg-gray-50"
      : "w-full bg-transparent";

  return (
    <Wrapper className={`${wrapperClasses} ${className}`.trim()}>
      <div className="mx-auto flex min-h-[380px] max-w-5xl flex-col items-center justify-center px-6 py-16 text-center">
        {/* Falling helmet */}
        <motion.div
          initial={{ y: -160, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            y: { duration: dropDuration, ease: [0.16, 1, 0.3, 1] },
            opacity: { duration: 0.3, ease: "easeOut" },
          }}
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 0.96, 1] }}
            transition={{ delay: bounceDelay, duration: 0.35, ease: "easeOut" }}
          >
            {/* PNG helmet icon */}
            <div className="relative bg-transparent" style={{ width: sizePx, height: sizePx }}>
              <Image
                src={helmetSrc}
                alt={altText}
                width={sizePx}
                height={sizePx}
                quality={100}
                unoptimized={!optimize}
                className="object-contain select-none drop-shadow-[0_6px_18px_rgba(0,0,0,0.15)]"
                priority
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: textDelay, duration: 0.6, ease: "easeOut" }}
          className="mt-6 text-center text-2xl font-extrabold text-gray-800 sm:text-3xl md:mt-8 md:text-5xl"
        >
          İş Sağlığı ve Güvenliğinde Güvenceniz
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: textDelay + 0.15, duration: 0.45, ease: "easeOut" }}
          className="mt-3 max-w-2xl text-center text-sm sm:text-base text-gray-600"
        >
          Kurumsal ve yenilikçi yaklaşımımızla risk analizi, iş güvenliği danışmanlığı ve kapsamlı eğitim çözümleri sunuyoruz.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: textDelay + 0.3, duration: 0.4 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="/iletisim" className="btn-primary btn-cta">Hizmet Talebi</a>
          <a href="#hizmetler" className="btn-outline">Hizmetlerimizi Keşfedin</a>
        </motion.div>
      </div>
    </Wrapper>
  );
};

export default SafetyIntro;
