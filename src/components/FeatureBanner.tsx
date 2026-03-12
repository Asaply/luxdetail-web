"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function FeatureBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative w-full overflow-hidden" style={{ aspectRatio: "21/9", minHeight: "50vh" }}>
      <Image
        src="/images/porsche.jpg"
        alt="Ceramic Coating"
        fill
        unoptimized
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-8"
      >
        <p className="font-[family-name:var(--font-dm-sans)] text-[11px] tracking-[0.4em] uppercase text-[#c9a84c] mb-5">
          Protección máxima
        </p>
        <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,6vw,5.5rem)] font-light text-[#f5f5f0] leading-[1.05] mb-5">
          Ceramic Coating
        </h2>
        <p className="font-[family-name:var(--font-dm-sans)] text-sm font-light text-white/50 mb-10 max-w-md">
          La capa de protección definitiva para tu vehículo. Brillo, durabilidad e hidrofobicidad incomparables.
        </p>
        <a
          href="https://wa.me/526144697984"
          target="_blank"
          rel="noopener noreferrer"
          className="font-[family-name:var(--font-dm-sans)] text-[11px] tracking-[0.2em] uppercase border border-[#c9a84c] text-[#c9a84c] px-8 py-4 hover:bg-[#c9a84c] hover:text-black transition-all duration-300"
        >
          Cotizar Ahora →
        </a>
      </motion.div>
    </section>
  );
}
