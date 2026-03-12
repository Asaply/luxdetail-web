"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Instagram, MessageCircle } from "lucide-react";

const services = [
  "Lavado Detallado Exterior",
  "Pulido y Corrección de Pintura",
  "Ceramic Coating",
  "Detailing Interior",
  "Protección de Pintura (PPF)",
  "Ozono y Desinfección",
  "Otro",
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola Lux Detail! Mi nombre es ${form.name}. Teléfono: ${form.phone}. Servicio de interés: ${form.service}. ${form.message}`;
    window.open(`https://wa.me/526144697984?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contacto" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left: Info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
              Contáctanos
            </p>
            <h2 className="font-display text-5xl lg:text-6xl font-light text-off-white mb-8 leading-tight">
              Agenda tu <em className="text-gold not-italic">cita</em>
            </h2>
            <p className="font-body text-white/50 leading-relaxed mb-12 text-base">
              Escríbenos por WhatsApp o llena el formulario y nos ponemos en contacto contigo a la brevedad.
            </p>

            <div className="space-y-6 mb-12">
              <a
                href="https://wa.me/526144697984"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-gold transition-colors duration-300">
                  <MessageCircle className="w-4 h-4 text-white/40 group-hover:text-gold transition-colors duration-300" />
                </div>
                <span className="font-body text-sm text-white/50 group-hover:text-white transition-colors duration-300">
                  +52 614 469 7984
                </span>
              </a>

              <a
                href="https://instagram.com/luxdetail.cuu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-gold transition-colors duration-300">
                  <Instagram className="w-4 h-4 text-white/40 group-hover:text-gold transition-colors duration-300" />
                </div>
                <span className="font-body text-sm text-white/50 group-hover:text-white transition-colors duration-300">
                  @luxdetail.cuu
                </span>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white/40" />
                </div>
                <span className="font-body text-sm text-white/50">
                  Chihuahua, Chihuahua, México
                </span>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/526144697984"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-body text-sm tracking-widest uppercase px-8 py-4 bg-gold text-black hover:bg-gold-light transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              Escribir por WhatsApp
            </a>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="font-body text-xs tracking-widest uppercase text-white/30 block mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre completo"
                  className="w-full bg-transparent border border-white/10 focus:border-gold px-4 py-4 font-body text-sm text-white placeholder-white/20 outline-none transition-colors duration-300"
                />
              </div>

              <div>
                <label className="font-body text-xs tracking-widest uppercase text-white/30 block mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="+52 614 000 0000"
                  className="w-full bg-transparent border border-white/10 focus:border-gold px-4 py-4 font-body text-sm text-white placeholder-white/20 outline-none transition-colors duration-300"
                />
              </div>

              <div>
                <label className="font-body text-xs tracking-widest uppercase text-white/30 block mb-2">
                  Servicio
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-white/10 focus:border-gold px-4 py-4 font-body text-sm text-white/70 outline-none transition-colors duration-300 appearance-none cursor-pointer"
                >
                  <option value="" disabled>Selecciona un servicio</option>
                  {services.map((s) => (
                    <option key={s} value={s} className="bg-black">{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-body text-xs tracking-widest uppercase text-white/30 block mb-2">
                  Mensaje (opcional)
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Cuéntanos sobre tu vehículo..."
                  className="w-full bg-transparent border border-white/10 focus:border-gold px-4 py-4 font-body text-sm text-white placeholder-white/20 outline-none transition-colors duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full font-body text-sm tracking-widest uppercase px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300"
              >
                Enviar por WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
