import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/[0.06] px-8 lg:px-16 py-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-8">
        {/* Logo */}
        <span className="font-[family-name:var(--font-cormorant)] text-xl font-light tracking-[0.25em] text-[#f5f5f0]">
          LUX<span className="text-[#c9a84c]">DETAIL</span>
        </span>

        {/* Socials */}
        <div className="flex items-center gap-6">
          <a
            href="https://instagram.com/luxdetail.cuu"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-dm-sans)] text-[11px] tracking-[0.2em] uppercase text-white/30 hover:text-[#c9a84c] transition-colors duration-300"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/526144697984"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-dm-sans)] text-[11px] tracking-[0.2em] uppercase text-white/30 hover:text-[#c9a84c] transition-colors duration-300"
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/[0.06] mb-8" />

      {/* Bottom row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <nav className="flex gap-8">
          {[
            { href: "#servicios", label: "Servicios" },
            { href: "#galeria", label: "Galería" },
            { href: "#contacto", label: "Contacto" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-[family-name:var(--font-dm-sans)] text-[11px] tracking-[0.2em] uppercase text-white/30 hover:text-[#c9a84c] transition-colors duration-300"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <p className="font-[family-name:var(--font-dm-sans)] text-[11px] text-white/20 tracking-wide">
          © 2025 Lux Detail. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
