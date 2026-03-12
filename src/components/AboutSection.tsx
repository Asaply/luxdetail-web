"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const values = [
  { label: "01", title: "Productos Premium", desc: "Marcas reconocidas mundialmente." },
  { label: "02", title: "Equipo Certificado", desc: "Técnicos entrenados en las técnicas más avanzadas." },
  { label: "03", title: "Resultados Garantizados", desc: "Comprometidos con resultados excepcionales." },
  { label: "04", title: "Atención Personalizada", desc: "Cada vehículo recibe un trato único." },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="nosotros" className="bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh]">
        {/* Left — text */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="flex flex-col justify-center px-8 lg:px-16 py-24"
        >
          <p className="font-[family-name:var(--font-dm-sans)] text-[11px] tracking-[0.4em] uppercase text-[#c9a84c] mb-6">
            ¿Por qué Lux Detail?
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,4.5vw,4rem)] font-light text-[#f5f5f0] leading-[1.1] mb-14">
            Precisión que se ve.<br />
            <em className="text-[#c9a84c] not-italic">Calidad que se siente.</em>
          </h2>

          {/* Value props with dividers — Nothing specs style */}
          <div className="space-y-0">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                className="flex gap-6 py-5 border-t border-white/[0.07] last:border-b"
              >
                <span className="font-[family-name:var(--font-dm-sans)] text-[10px] text-[#c9a84c] tracking-widest w-6 shrink-0 mt-1">
                  {v.label}
                </span>
                <div>
                  <h4 className="font-[family-name:var(--font-cormorant)] text-xl font-light text-[#f5f5f0] mb-1">
                    {v.title}
                  </h4>
                  <p className="font-[family-name:var(--font-dm-sans)] text-xs font-light text-white/40 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative min-h-[60vh] lg:min-h-full overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1000&q=85"
            alt="Detailing profesional"
            fill
            unoptimized
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </div>
    </section>
  );
}
