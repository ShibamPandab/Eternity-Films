import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock } from "lucide-react";

// Local image imports to ensure offline stability
import moment1 from "../assets/moment-1.jpg";
import moment2 from "../assets/moment-2.jpg";
import moment3 from "../assets/moment-3.jpg";
import moment4 from "../assets/moment-4.jpg";
import moment5 from "../assets/moment-5.jpg";
import moment6 from "../assets/moment-6.jpg";

const showcaseFilms = [
  {
    id: 1,
    title: "The Grand Regal",
    location: "Jaipur Palace, India",
    duration: "6 Min 20 Sec",
    image: moment1,
    description: "A royal celebration spanning three days, filled with ancient heritage, regal colors, and cinematic grandeur.",
  },
  {
    id: 2,
    title: "Velvet Whispers",
    location: "Swiss Alps, Switzerland",
    duration: "4 Min 15 Sec",
    image: moment2,
    description: "An intimate ceremony in the snow-capped peak of Zermatt, capturing the sheer warmth of their love against freezing elements.",
  },
  {
    id: 3,
    title: "Symphony of Dunes",
    location: "Jaisalmer, India",
    duration: "5 Min 10 Sec",
    image: moment5,
    description: "A nomadic-themed sunset promise, surrounded by candles, sand dunes, and the raw folk rhythms of Rajasthan.",
  },
  {
    id: 4,
    title: "Coastal Harmony",
    location: "Amalfi Coast, Italy",
    duration: "5 Min 35 Sec",
    image: moment6,
    description: "A cliffside editorial ceremony reflecting ocean hues, vintage yachts, and a romantic Vespa ride through history.",
  },
  {
    id: 5,
    title: "The Eternal Vows",
    location: "Udaipur Palace, India",
    duration: "4 Min 12 Sec",
    image: moment4,
    description: "Traditional Palace luxury combined with custom sound design and hand-graded color legacy frames.",
  },
  {
    id: 6,
    title: "Whispered Promises",
    location: "Cappadocia, Turkey",
    duration: "3 Min 50 Sec",
    image: moment3,
    description: "Ethereal hot air balloon proposal landscape merged with raw close-up human emotions.",
  },
];

export default function WeddingFilmsShowcase() {
  return (
    <section id="showcase" className="py-24 bg-[#070707] border-t border-[#D6B37A]/15 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-sans text-[10px] tracking-[0.3em] text-[#D6B37A] font-semibold uppercase block mb-3">
              Studio Folio
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#F8F5F0] tracking-wide uppercase">
              Wedding Films <span className="text-gold-gradient italic font-light">Showcase</span>
            </h2>
          </div>
          <p className="font-sans text-xs md:text-sm text-[#F8F5F0]/50 max-w-sm tracking-wide leading-relaxed">
            Curated spreads of our cinematic projects. Rebuilt in a luxury 2×3 editorial portfolio grid for seamless viewing.
          </p>
        </div>

        {/* 2x3 Editorial Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseFilms.map((film, idx) => (
            <motion.div
              key={film.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="flex flex-col h-full bg-[#0B0B0B] border border-[#D6B37A]/15 rounded-xl overflow-hidden shadow-xl transition-all duration-350 hover:shadow-[0_15px_35px_rgba(214,179,122,0.1)] group"
            >
              {/* Card Image Cover (Equal aspect ratios) */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black shrink-0">
                {/* Local image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${film.image})` }}
                />
                {/* Soft editorial overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
                
                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#F8F5F0]/15 font-sans text-[9px] text-[#F8F5F0]/80 uppercase">
                  <Clock size={10} className="text-[#D6B37A]" />
                  <span>{film.duration}</span>
                </div>
              </div>

              {/* Card Details Body */}
              <div className="p-6 flex flex-col justify-between flex-1 text-left">
                <div>
                  {/* Location stat */}
                  <div className="flex items-center gap-1 text-[#D6B37A] font-sans text-[9px] tracking-wider uppercase mb-2">
                    <MapPin size={10} />
                    <span>{film.location}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg md:text-xl text-[#F8F5F0] tracking-wide uppercase mb-3 group-hover:text-[#D6B37A] transition-colors duration-300">
                    {film.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-[11px] md:text-xs text-[#F8F5F0]/50 leading-relaxed font-light mb-6">
                    {film.description}
                  </p>
                </div>

                {/* Explore Story link */}
                <div className="flex items-center gap-2 text-[#D6B37A] font-sans text-[10px] tracking-widest uppercase font-semibold group-hover:text-[#E5CFA8] transition-colors duration-300 mt-auto">
                  <span>Explore Story</span>
                  <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
