"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Star, CheckCircle, User } from "lucide-react";
import Image from "next/image";

const values = [
  {
    icon: Star,
    title: "Productos Premium",
    description: "Usamos únicamente productos de marcas reconocidas mundialmente.",
  },
  {
    icon: Award,
    title: "Equipo Certificado",
    description: "Nuestros técnicos están entrenados y certificados en las técnicas más avanzadas.",
  },
  {
    icon: CheckCircle,
    title: "Resultados Garantizados",
    description: "Nos comprometemos con resultados excepcionales en cada servicio.",
  },
  {
    icon: User,
    title: "Atención Personalizada",
    description: "Cada vehículo recibe un trato único adaptado a sus necesidades específicas.",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="relative h-[600px] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=900&q=80"
              alt="Detailing profesional"
              fill
              className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
              unoptimized
            />
            {/* Gold frame accent */}
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b border-r border-gold" />
            <div className="absolute top-0 left-0 w-24 h-24 border-t border-l border-gold" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
              Nuestra propuesta
            </p>
            <h2 className="font-display text-5xl lg:text-6xl font-light text-off-white mb-8 leading-tight">
              ¿Por qué
              <br />
              <em className="text-gold not-italic">Lux Detail?</em>
            </h2>
            <p className="font-body text-white/50 leading-relaxed mb-12 text-base">
              En Lux Detail no solo limpiamos autos — los transformamos. Cada vehículo que llega a nuestras manos recibe el mismo cuidado y precisión que merece un objeto de lujo.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {values.map((val, i) => {
                const Icon = val.icon;
                return (
                  <motion.div
                    key={val.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                    className="flex gap-4"
                  >
                    <div className="shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-display text-xl font-light text-off-white mb-1">
                        {val.title}
                      </h4>
                      <p className="font-body text-xs text-white/40 leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
