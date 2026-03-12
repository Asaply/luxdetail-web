import Link from "next/link";
import { Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <span className="font-display text-2xl font-light tracking-[0.2em] text-off-white block mb-4">
              LUX<span className="text-gold">DETAIL</span>
            </span>
            <p className="font-body text-xs text-white/30 leading-relaxed tracking-wide">
              Detailing profesional premium<br />en Chihuahua, México.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-body text-xs tracking-widest uppercase text-gold/60 mb-6">
              Navegación
            </p>
            <div className="space-y-3">
              {[
                { href: "#servicios", label: "Servicios" },
                { href: "#galeria", label: "Galería" },
                { href: "#contacto", label: "Contacto" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block font-body text-sm text-white/40 hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="font-body text-xs tracking-widest uppercase text-gold/60 mb-6">
              Redes Sociales
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/luxdetail.cuu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold text-white/40 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/526144697984"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold text-white/40 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/20 tracking-wide">
            © 2025 Lux Detail. Todos los derechos reservados.
          </p>
          <p className="font-body text-xs text-white/20 tracking-wide">
            Chihuahua, Chihuahua, México
          </p>
        </div>
      </div>
    </footer>
  );
}
