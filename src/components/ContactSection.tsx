"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

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
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola! Soy ${form.name}. Tel: ${form.phone}. Servicio: ${form.service}. ${form.message}`;
    window.open(`https://wa.me/526144697984?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contacto" className="bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* Left */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center px-8 lg:px-16 py-24 border-b lg:border-b-0 lg:border-r border-white/[0.07]"
        >
          <p className="font-[family-name:var(--font-dm-sans)] text-[11px] tracking-[0.4em] uppercase text-[#c9a84c] mb-6">
            Contáctanos
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.5rem,4.5vw,4rem)] font-light text-[#f5f5f0] leading-tight mb-14">
            Agenda tu <em className="text-[#c9a84c] not-italic">cita</em>
          </h2>

          <div className="space-y-0">
            {[
              { label: "WhatsApp", value: "+52 614 469 7984", href: "https://wa.me/526144697984" },
              { label: "Instagram", value: "@luxdetail.cuu", href: "https://instagram.com/luxdetail.cuu" },
              { label: "Ubicación", value: "Chihuahua, Chihuahua, México", href: null },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between py-5 border-t border-white/[0.07] last:border-b">
                <span className="font-[family-name:var(--font-dm-sans)] text-[11px] tracking-[0.2em] uppercase text-white/30">
                  {item.label}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-[family-name:var(--font-dm-sans)] text-sm font-light text-[#f5f5f0] hover:text-[#c9a84c] transition-colors duration-300"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="font-[family-name:var(--font-dm-sans)] text-sm font-light text-[#f5f5f0]">
                    {item.value}
                  </span>
                )}
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/526144697984"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex items-center gap-3 font-[family-name:var(--font-dm-sans)] text-[11px] tracking-[0.2em] uppercase bg-[#c9a84c] text-black px-8 py-4 hover:bg-[#e2c47a] transition-colors duration-300 self-start"
          >
            Escribir por WhatsApp →
          </a>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex flex-col justify-center px-8 lg:px-16 py-24"
        >
          <form onSubmit={onSubmit} className="space-y-8">
            {[
              { name: "name", label: "Nombre", type: "text", placeholder: "Tu nombre" },
              { name: "phone", label: "Teléfono", type: "tel", placeholder: "+52 614 000 0000" },
            ].map((field) => (
              <div key={field.name} className="border-b border-white/[0.12] pb-3 focus-within:border-[#c9a84c] transition-colors duration-300">
                <label className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.3em] uppercase text-white/30 block mb-3">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name as keyof typeof form]}
                  onChange={onChange}
                  required
                  placeholder={field.placeholder}
                  className="w-full bg-transparent font-[family-name:var(--font-dm-sans)] text-sm font-light text-[#f5f5f0] placeholder-white/20 outline-none"
                />
              </div>
            ))}

            <div className="border-b border-white/[0.12] pb-3 focus-within:border-[#c9a84c] transition-colors duration-300">
              <label className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.3em] uppercase text-white/30 block mb-3">
                Servicio
              </label>
              <select
                name="service"
                value={form.service}
                onChange={onChange}
                required
                className="w-full bg-transparent font-[family-name:var(--font-dm-sans)] text-sm font-light text-[#f5f5f0] outline-none appearance-none cursor-pointer"
              >
                <option value="" disabled className="bg-black">Selecciona un servicio</option>
                {services.map((s) => (
                  <option key={s} value={s} className="bg-black">{s}</option>
                ))}
              </select>
            </div>

            <div className="border-b border-white/[0.12] pb-3 focus-within:border-[#c9a84c] transition-colors duration-300">
              <label className="font-[family-name:var(--font-dm-sans)] text-[10px] tracking-[0.3em] uppercase text-white/30 block mb-3">
                Mensaje
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                rows={3}
                placeholder="Cuéntanos sobre tu vehículo..."
                className="w-full bg-transparent font-[family-name:var(--font-dm-sans)] text-sm font-light text-[#f5f5f0] placeholder-white/20 outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="font-[family-name:var(--font-dm-sans)] text-[11px] tracking-[0.2em] uppercase border border-[#c9a84c] text-[#c9a84c] px-8 py-4 hover:bg-[#c9a84c] hover:text-black transition-all duration-300 w-full"
            >
              Enviar por WhatsApp →
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
