"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-black/95 backdrop-blur-sm border-b border-white/[0.06]" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 lg:px-12 h-16">
          {/* Logo */}
          <Link href="/" className="font-[family-name:var(--font-cormorant)] text-xl font-light tracking-[0.25em] text-[#f5f5f0]">
            LUX<span className="text-[#c9a84c]">DETAIL</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-[family-name:var(--font-dm-sans)] text-[11px] font-light tracking-[0.2em] uppercase text-white/50 hover:text-[#c9a84c] transition-colors duration-300"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-6">
            <a
              href="https://wa.me/526144697984"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 font-[family-name:var(--font-dm-sans)] text-[11px] font-light tracking-[0.2em] uppercase text-[#c9a84c] hover:text-[#e2c47a] transition-colors duration-300"
            >
              Reservar <span>→</span>
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col justify-center gap-[5px] w-6 h-6"
              aria-label="Menu"
            >
              <span className={`block w-full h-px bg-white transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-full h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block w-full h-px bg-white transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black flex flex-col justify-center px-10"
          >
            <nav className="flex flex-col gap-8">
              {navLinks.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-[family-name:var(--font-cormorant)] text-5xl font-light text-[#f5f5f0] hover:text-[#c9a84c] transition-colors duration-300"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                href="https://wa.me/526144697984"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 font-[family-name:var(--font-dm-sans)] text-sm tracking-widest uppercase text-[#c9a84c]"
              >
                Reservar →
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
