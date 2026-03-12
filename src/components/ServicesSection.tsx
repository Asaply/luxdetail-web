"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const services = [
  {
    name: "Lavado Detallado Exterior",
    description: "Limpieza profunda de carrocería, llantas y vidrios.",
    price: "Desde $800 MXN",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=900&q=80",
  },
  {
    name: "Pulido y Corrección de Pintura",
    description: "Elimina rayones, swirls y oxidación.",
    price: "Cotizar",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=900&q=80",
  },
  {
    name: "Ceramic Coating",
    description: "Protección hidrofóbica de larga duración.",
    price: "Cotizar",
    image: "https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=900&q=80",
  },
  {
    name: "Detailing Interior",
    description: "Tapicería, tablero, alfombras y superficies.",
    price: "Desde $1,200 MXN",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=900&q=80",
  },
  {
    name: "Protección de Pintura (PPF)",
    description: "Film invisible contra piedras y rayaduras.",
    price: "Cotizar",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=900&q=80",
  },
  {
    name: "Ozono y Desinfección",
    description: "Elimina olores y bacterias con tecnología de ozono.",
    price: "Desde $500 MXN",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.a
      ref={ref}
      href="https://wa.me/526144697984"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: (index % 2) * 0.1, duration: 0.7, ease: "easeOut" }}
      className="group relative overflow-hidden block"
      style={{ aspectRatio: "4/3" }}
    >
      {/* Image */}
      <Image
        src={service.image}
        alt={service.name}
        fill
        unoptimized
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Base overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {/* Gold bottom border on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c9a84c] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      {/* Text */}
      <div className="absolute bottom-0 left-0 right-0 p-7">
        <p className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.3em] uppercase text-[#c9a84c] mb-2">
          {service.price}
        </p>
        <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-[#f5f5f0] leading-tight mb-2 group-hover:text-[#c9a84c] transition-colors duration-300">
          {service.name}
        </h3>
        <p className="font-[family-name:var(--font-dm-sans)] text-xs font-light text-white/50 leading-relaxed">
          {service.description}
        </p>
        <p className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.2em] uppercase text-white/30 mt-4 group-hover:text-[#c9a84c] transition-colors duration-300">
          Reservar →
        </p>
      </div>
    </motion.a>
  );
}

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="servicios" className="bg-[#0a0a0a]">
      {/* Section header */}
      <div className="px-8 lg:px-16 pt-24 pb-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-[family-name:var(--font-dm-sans)] text-[11px] tracking-[0.4em] uppercase text-[#c9a84c] mb-4">
            Lo que ofrecemos
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,5vw,4.5rem)] font-light text-[#f5f5f0]">
            Nuestros Servicios
          </h2>
        </motion.div>
      </div>

      {/* 2-col grid — no gap, like Nothing */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/[0.04]">
        {services.map((s, i) => (
          <div key={s.name} className="bg-[#0a0a0a]">
            <ServiceCard service={s} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
