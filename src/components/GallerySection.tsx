"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Instagram } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=600&q=80",
    alt: "Detailing exterior",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80",
    alt: "Auto de lujo",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1635776063043-ab23460ffcf5?w=600&q=80",
    alt: "Pulido de pintura",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
    alt: "Auto deportivo",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=600&q=80",
    alt: "Interior limpio",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80",
    alt: "Ceramic coating",
    tall: true,
  },
];

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="galeria" className="py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4">
            Nuestro trabajo
          </p>
          <h2 className="font-display text-5xl lg:text-7xl font-light text-off-white">
            Galería
          </h2>
          <div className="w-24 h-px bg-gold mt-8" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className={`group relative overflow-hidden ${img.tall ? "row-span-2" : ""}`}
              style={{ aspectRatio: img.tall ? undefined : "4/3", height: img.tall ? "auto" : undefined }}
            >
              <div className={img.tall ? "h-full min-h-[400px]" : "aspect-[4/3]"}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <div className="text-center">
                  <Instagram className="w-6 h-6 text-gold mx-auto mb-3" />
                  <p className="font-body text-xs tracking-widest uppercase text-white/80">
                    @luxdetail.cuu
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com/luxdetail.cuu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-body text-sm tracking-widest uppercase text-gold border border-gold/30 px-8 py-4 hover:border-gold hover:bg-gold hover:text-black transition-all duration-300"
          >
            <Instagram className="w-4 h-4" />
            Ver más en Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
