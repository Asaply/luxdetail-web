"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Zap, Shield, Car, Layers, Wind } from "lucide-react";

const services = [
  {
    icon: Car,
    name: "Lavado Detallado Exterior",
    description: "Limpieza profunda de carrocería, llantas y vidrios con productos de grado profesional.",
    price: "Desde $800 MXN",
  },
  {
    icon: Sparkles,
    name: "Pulido y Corrección de Pintura",
    description: "Eliminación de rayones, swirls y oxidación para recuperar el brillo original.",
    price: "Cotizar",
  },
  {
    icon: Shield,
    name: "Ceramic Coating",
    description: "Protección hidrofóbica de larga duración que mantiene tu auto impecable.",
    price: "Cotizar",
  },
  {
    icon: Layers,
    name: "Detailing Interior",
    description: "Limpieza profunda de tapicería, tablero, alfombras y todas las superficies.",
    price: "Desde $1,200 MXN",
  },
  {
    icon: Zap,
    name: "Protección de Pintura (PPF)",
    description: "Film invisible que protege tu pintura de piedras, rayaduras y elementos externos.",
    price: "Cotizar",
  },
  {
    icon: Wind,
    name: "Ozono y Desinfección",
    description: "Eliminación de olores, bacterias y gérmenes con tecnología de ozono.",
    price: "Desde $500 MXN",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
      className="group relative border border-white/10 p-8 hover:border-gold/50 transition-all duration-500 bg-white/[0.02] hover:bg-white/[0.05] cursor-default"
    >
      {/* Gold corner accent */}
      <div className="absolute top-0 left-0 w-8 h-px bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-0 left-0 w-px h-8 bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="mb-6">
        <Icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
      </div>

      <h3 className="font-display text-2xl font-light text-off-white mb-3 group-hover:text-gold transition-colors duration-300">
        {service.name}
      </h3>
      <p className="font-body text-sm text-white/50 leading-relaxed mb-6">
        {service.description}
      </p>
      <div className="flex items-center justify-between">
        <span className="font-body text-xs tracking-widest uppercase text-gold/70">
          {service.price}
        </span>
        <a
          href="https://wa.me/526144697984"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-xs tracking-widest uppercase text-white/30 hover:text-gold transition-colors duration-300"
        >
          Reservar →
        </a>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
            Lo que ofrecemos
          </p>
          <h2 className="font-display text-5xl lg:text-7xl font-light text-off-white">
            Nuestros Servicios
          </h2>
          <div className="w-24 h-px bg-gold mt-8" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {services.map((service, i) => (
            <div key={service.name} className="bg-dark">
              <ServiceCard service={service} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
