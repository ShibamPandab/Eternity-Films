import React from "react";
import { motion } from "framer-motion";

// Import local image assets to ensure they load locally without requiring external APIs
import moment1 from "../assets/moment-1.jpg";
import moment2 from "../assets/moment-2.jpg";
import moment3 from "../assets/moment-3.jpg"; // Intended hero image for "Whispered Promises"
import moment4 from "../assets/moment-4.jpg";
import moment5 from "../assets/moment-5.jpg";
import moment6 from "../assets/moment-6.jpg";

const moments = [
  {
    id: 1,
    title: "The Royal Serenade",
    subtitle: "Jaipur Palace, India",
    image: moment1,
    span: "md:col-span-8 aspect-[16/10]",
    caption: "Vows spoken in the court of kings.",
  },
  {
    id: 2,
    title: "The Starlight Waltz",
    subtitle: "Toscana, Italy",
    image: moment2,
    span: "md:col-span-4 aspect-[3/4]",
    caption: "Dancing under a canopy of stars.",
  },
  {
    id: 3,
    title: "Whispered Promises",
    subtitle: "Cappadocia, Turkey",
    image: moment3,
    span: "md:col-span-4 aspect-[3/4]",
    caption: "A silhouette written in the Cappadocia sky.",
  },
  {
    id: 4,
    title: "The Grand Exit",
    subtitle: "Udaipur, India",
    image: moment4,
    span: "md:col-span-8 aspect-[16/10]",
    caption: "Sparklers lighting the path to forever.",
  },
  {
    id: 5,
    title: "Symphony of Dunes",
    subtitle: "Jaisalmer, India",
    image: moment5,
    span: "md:col-span-6 aspect-square md:aspect-[4/3]",
    caption: "Golden vows in the heart of the desert dunes.",
  },
  {
    id: 6,
    title: "The Pure Embrace",
    subtitle: "Lake Como, Italy",
    image: moment6,
    span: "md:col-span-6 aspect-square md:aspect-[4/3]",
    caption: "An intimate promise sealed beside quiet waters.",
  },
];

export default function SignatureMoments() {
  return (
    <section id="signature" className="py-24 bg-[#0B0B0B] border-t border-[#D6B37A]/15 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-sans text-[10px] tracking-[0.3em] text-[#D6B37A] font-semibold uppercase block mb-3">
              Editorial Canvas
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#F8F5F0] tracking-wide uppercase">
              Signature <span className="text-gold-gradient italic font-light">Moments</span>
            </h2>
          </div>
          <p className="font-sans text-xs md:text-sm text-[#F8F5F0]/50 max-w-sm tracking-wide leading-relaxed">
            A premium editorial masonry layout of our finest captures. Every heirloom moment is loaded locally with zero external network dependencies.
          </p>
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {moments.map((moment, idx) => (
            <motion.div
              key={moment.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.1 }}
              className={`relative ${moment.span} rounded-lg overflow-hidden group border border-[#D6B37A]/10 bg-[#070707] shadow-xl`}
            >
              {/* Local Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${moment.image})` }}
              />

              {/* Gold Tint Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/20 group-hover:via-black/45 group-hover:from-black/95 transition-all duration-300 pointer-events-none" />

              {/* Glowing Outline Hover Effect */}
              <div className="absolute inset-0 border border-[#D6B37A]/0 group-hover:border-[#D6B37A]/40 rounded-lg transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(214,179,122,0.2)] pointer-events-none" />

              {/* Text Content Overlay */}
              <div className="absolute inset-x-6 bottom-6 flex flex-col justify-end text-left z-10">
                <span className="font-sans text-[8px] tracking-[0.2em] text-[#D6B37A] uppercase mb-1">
                  {moment.subtitle}
                </span>
                
                <h3 className="font-serif text-lg md:text-xl text-[#F8F5F0] tracking-wide uppercase mb-1 group-hover:text-[#D6B37A] transition-colors duration-300">
                  {moment.title}
                </h3>
                
                {/* Caption showing on hover */}
                <p className="font-sans text-[10px] text-[#F8F5F0]/60 leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto overflow-hidden mt-1">
                  {moment.caption}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
