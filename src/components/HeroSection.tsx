"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-wash.jpg"
          alt="Lux Detail hero"
          fill
          priority
          unoptimized
          className="object-cover object-center scale-[1.02]"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.12] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content — bottom-left like Nothing */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-8 lg:px-16">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="font-[family-name:var(--font-dm-sans)] text-[11px] tracking-[0.4em] uppercase text-[#c9a84c] mb-5"
          >
            Chihuahua, México
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.9 }}
            className="font-[family-name:var(--font-cormorant)] text-[clamp(3rem,7vw,6rem)] font-light leading-[1.05] text-[#f5f5f0] mb-5"
          >
            El lujo está<br />
            <em className="text-[#c9a84c] not-italic">en los detalles.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-[family-name:var(--font-dm-sans)] text-sm font-light text-white/50 mb-10 tracking-wider"
          >
            Detailing profesional en Chihuahua
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#servicios"
              className="font-[family-name:var(--font-dm-sans)] text-[11px] tracking-[0.2em] uppercase inline-flex items-center justify-center gap-2 bg-[#c9a84c] text-black px-8 py-4 hover:bg-[#e2c47a] transition-colors duration-300"
            >
              Ver Servicios
            </Link>
            <a
              href="https://wa.me/526144697984"
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-dm-sans)] text-[11px] tracking-[0.2em] uppercase inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300"
            >
              Reservar Ahora →
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 right-12 z-10 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.3em] uppercase text-white/20 rotate-90 mb-4">scroll</span>
      </motion.div>
    </section>
  );
}
