"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const rows = [
  // Full width
  [{ src: "/images/hero-wash.jpg", alt: "Lavado profesional", full: true }],
  // Two halves
  [
    { src: "/images/challenger.jpg", alt: "Dodge Challenger", full: false },
    { src: "/images/porsche.jpg", alt: "Porsche 911 GT3", full: false },
  ],
  // Full width
  [{ src: "/images/raptor.jpg", alt: "Ford Raptor R", full: true }],
  // Two halves
  [
    { src: "/images/audi.jpg", alt: "Audi", full: false },
    { src: "/images/gmc.jpg", alt: "GMC Denali", full: false },
  ],
];

export default function GallerySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="galeria" className="bg-[#0a0a0a]">
      {/* Header */}
      <div className="px-8 lg:px-16 pt-24 pb-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-[family-name:var(--font-dm-sans)] text-[11px] tracking-[0.4em] uppercase text-[#c9a84c] mb-4">
            Nuestro trabajo
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,5vw,4.5rem)] font-light text-[#f5f5f0]">
              Galería
            </h2>
            <a
              href="https://instagram.com/luxdetail.cuu"
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-dm-sans)] text-[11px] tracking-[0.2em] uppercase text-[#c9a84c] hover:text-[#e2c47a] transition-colors duration-300 pb-1 border-b border-[#c9a84c]/30 hover:border-[#e2c47a] shrink-0"
            >
              @luxdetail.cuu →
            </a>
          </div>
        </motion.div>
      </div>

      {/* Gallery rows — Nothing style */}
      <div className="flex flex-col gap-[1px]">
        {rows.map((row, rowIdx) => (
          <div key={rowIdx} className="flex gap-[1px]">
            {row.map((img, imgIdx) => (
              <motion.div
                key={imgIdx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: imgIdx * 0.1, duration: 0.8 }}
                className="group relative overflow-hidden flex-1"
                style={{ aspectRatio: img.full ? "21/7" : "4/3" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-center justify-center">
                  <p className="font-[family-name:var(--font-dm-sans)] text-[11px] tracking-[0.3em] uppercase text-[#c9a84c] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    @luxdetail.cuu
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
