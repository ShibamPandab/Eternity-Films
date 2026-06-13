import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "When we saw our film, we cried, we laughed, and then we watched it four more times. They didn't just capture how the wedding looked—they captured how it felt. It's the single best investment we made.",
    couple: "Priya & Dev",
    location: "Udaipur Palace, India",
    date: "December 12, 2025",
    image: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=800",
  },
  {
    id: 2,
    quote: "Raghav and Ananya are wizards. They blended into our celebration like family guests, capturing raw, intimate glances and subtle tears that we didn't even notice ourselves. A visual masterpiece.",
    couple: "Sophia & Marcus",
    location: "Lake Como, Italy",
    date: "September 24, 2025",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800",
  },
  {
    id: 3,
    quote: "Every single person we shared our highlight reel with asked if it was a movie trailer. The cinematic slow-motion cuts, the bespoke music curation, and the sound design are of elite caliber.",
    couple: "Meera & Kabir",
    location: "Jaisalmer, India",
    date: "November 18, 2025",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800",
  },
];

export default function ClientReactions() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const activeTestimonial = testimonials[currentIdx];

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-[#0B0B0B] border-t border-[#D6B37A]/15 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-sans text-[10px] tracking-[0.3em] text-[#D6B37A] font-semibold uppercase block mb-3">
              Editorial Feature
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#F8F5F0] tracking-wide uppercase">
              Love Letters & <span className="text-gold-gradient italic font-light">Legacies</span>
            </h2>
          </div>
          <p className="font-sans text-xs md:text-sm text-[#F8F5F0]/50 max-w-sm tracking-wide leading-relaxed">
            Curated spreads of our couples' stories, printed in our annual luxury wedding chronicle.
          </p>
        </div>

        {/* Luxury Magazine Layout (Editorial Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch bg-[#070707] border border-[#D6B37A]/15 p-6 md:p-16 relative shadow-2xl overflow-hidden rounded-lg">
          
          {/* Subtle Decorative Editorial Watermark */}
          <div className="absolute right-4 top-4 font-serif text-[70px] md:text-[120px] text-[#D6B37A]/3 select-none pointer-events-none uppercase font-bold leading-none tracking-tighter">
            ETERNITY
          </div>

          {/* Left Column: Premium Couple Portrait (Magazine Image Spread) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-[3/4] max-w-sm md:max-w-none group">
              {/* Outer Editorial Border Offset */}
              <div className="absolute -inset-3 border border-[#D6B37A]/25 rounded transition-transform duration-500 group-hover:scale-[1.02] pointer-events-none" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="w-full h-full rounded overflow-hidden border border-[#D6B37A]/20 shadow-2xl relative bg-black"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"
                    style={{ backgroundImage: `url(${activeTestimonial.image})` }}
                  />
                  {/* Delicate gold-overlay gradient filter */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              {/* Magazine Page Info overlay */}
              <div className="absolute bottom-4 left-4 z-10 text-left font-serif text-[10px] tracking-[0.25em] text-[#D6B37A] uppercase select-none">
                Volume VII • Page {activeTestimonial.id * 12 + 4}
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Interview / Review */}
          <div className="lg:col-span-7 flex flex-col justify-between text-left py-4 relative z-10">
            <div className="relative">
              {/* Magazine Quotation Mark */}
              <Quote className="text-[#D6B37A]/10 h-24 w-24 absolute -top-10 -left-6 z-0" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10"
                >
                  {/* Dropcap Quote for Magazine look */}
                  <div className="font-serif text-xl md:text-3xl text-[#F8F5F0] leading-relaxed italic mb-8 pt-4">
                    "{activeTestimonial.quote}"
                  </div>

                  {/* Couple Stats */}
                  <div className="mt-8 pt-6 border-t border-[#D6B37A]/15 grid grid-cols-2 sm:grid-cols-3 gap-6 font-sans">
                    <div>
                      <span className="font-serif text-[10px] tracking-widest text-[#D6B37A] uppercase block mb-1">The Couple</span>
                      <h3 className="font-serif text-lg text-[#F8F5F0] tracking-wide uppercase">
                        {activeTestimonial.couple}
                      </h3>
                    </div>
                    <div>
                      <span className="font-serif text-[10px] tracking-widest text-[#D6B37A] uppercase block mb-1">The Setting</span>
                      <p className="font-sans text-xs text-[#F8F5F0]/70 font-light mt-1 uppercase tracking-wider">
                        {activeTestimonial.location}
                      </p>
                    </div>
                    <div>
                      <span className="font-serif text-[10px] tracking-widest text-[#D6B37A] uppercase block mb-1">Wedding Date</span>
                      <p className="font-sans text-xs text-[#F8F5F0]/70 font-light mt-1 uppercase tracking-wider">
                        {activeTestimonial.date}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Navigation (Magazine Spread Flip) */}
            <div className="flex items-center justify-between mt-12 lg:mt-0 pt-8 border-t border-[#D6B37A]/10">
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePrev}
                  className="h-10 w-10 rounded-full border border-[#D6B37A]/35 text-[#D6B37A] hover:text-[#0B0B0B] hover:bg-[#D6B37A] hover:border-[#D6B37A] flex items-center justify-center transition-all duration-300 cursor-pointer"
                  aria-label="Previous spread"
                >
                  <ChevronLeft size={18} />
                </button>
                <span className="font-sans text-[10px] tracking-widest text-[#F8F5F0]/40 uppercase">
                  Spread {currentIdx + 1} / {testimonials.length}
                </span>
                <button
                  onClick={handleNext}
                  className="h-10 w-10 rounded-full border border-[#D6B37A]/35 text-[#D6B37A] hover:text-[#0B0B0B] hover:bg-[#D6B37A] hover:border-[#D6B37A] flex items-center justify-center transition-all duration-300 cursor-pointer"
                  aria-label="Next spread"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
              
              <div className="hidden sm:block font-serif text-[11px] tracking-wider text-[#D6B37A]/60 italic font-semibold">
                ETERNITY WEDDING CHRONICLE
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
