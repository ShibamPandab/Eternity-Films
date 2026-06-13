import React from "react";
import { motion } from "framer-motion";
import { Heart, MessageCircle } from "lucide-react";

const Instagram = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const instagramPhotos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=600",
    likes: "1,420",
    comments: "84",
    aspect: "aspect-[3/4]",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600",
    likes: "982",
    comments: "42",
    aspect: "aspect-square",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=600",
    likes: "2,150",
    comments: "135",
    aspect: "aspect-[3/4]",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600",
    likes: "1,120",
    comments: "67",
    aspect: "aspect-square",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1507504038482-7621c43f2c0a?q=80&w=600",
    likes: "3,110",
    comments: "192",
    aspect: "aspect-[4/3]",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600",
    likes: "1,740",
    comments: "102",
    aspect: "aspect-[3/4]",
  },
];

export default function InstagramWall() {
  return (
    <section className="py-24 bg-[#070707] border-t border-[#D6B37A]/15 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-sans text-[10px] tracking-[0.3em] text-[#D6B37A] font-semibold uppercase block mb-3">
              Social Canvas
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#F8F5F0] tracking-wide uppercase">
              Instagram <span className="text-gold-gradient italic font-light">Wall</span>
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-[#D6B37A] hover:text-[#E5CFA8] tracking-widest uppercase font-semibold transition-colors duration-300 self-start md:self-end"
          >
            <Instagram size={14} />
            <span>@eternityfilms</span>
          </a>
        </div>

        {/* Pinterest Masonry Grid using CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {instagramPhotos.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.1 }}
              className={`relative ${photo.aspect} rounded-xl overflow-hidden group border border-[#D6B37A]/10 bg-[#0B0B0B] break-inside-avoid shadow-lg cursor-pointer mb-6`}
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${photo.url})` }}
              />

              {/* Gold overlay vignette */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/10 via-[#0B0B0B]/30 to-[#D6B37A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

              {/* Icons / Interactivity overlay */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-4 text-[#0B0B0B] font-sans text-xs font-semibold">
                    <span className="flex items-center gap-1">
                      <Heart size={14} className="fill-current" />
                      {photo.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle size={14} className="fill-current" />
                      {photo.comments}
                    </span>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-[#0B0B0B] text-[#D6B37A] flex items-center justify-center shadow-lg">
                    <Instagram size={14} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
