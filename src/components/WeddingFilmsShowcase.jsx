import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MapPin, Clock } from "lucide-react";

const showcaseFilms = [
  {
    id: 1,
    title: "The Grand Regal",
    location: "Jaipur Palace, India",
    duration: "6 Min 20 Sec",
    image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=800",
    description: "A royal celebration spanning three days, filled with ancient heritage, regal colors, and cinematic grandeur.",
  },
  {
    id: 2,
    title: "Velvet Whispers",
    location: "Swiss Alps, Switzerland",
    duration: "4 Min 15 Sec",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800",
    description: "An intimate ceremony in the snow-capped peak of Zermatt, capturing the sheer warmth of their love against freezing elements.",
  },
  {
    id: 3,
    title: "Symphony of Dunes",
    location: "Jaisalmer, India",
    duration: "5 Min 10 Sec",
    image: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=800",
    description: "A nomadic-themed sunset promise, surrounded by candles, sand dunes, and the raw folk rhythms of Rajasthan.",
  },
  {
    id: 4,
    title: "Coastal Harmony",
    location: "Amalfi Coast, Italy",
    duration: "5 Min 35 Sec",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800",
    description: "A cliffside editorial ceremony reflecting ocean hues, vintage yachts, and a romantic Vespa ride through history.",
  },
];

export default function WeddingFilmsShowcase() {
  const scrollRef = useRef(null);
  const trackRef = useRef(null);
  const [scrollAmount, setScrollAmount] = useState(0);

  // Track vertical scroll relative to the parent wrapper
  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  useEffect(() => {
    const calculateScroll = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        // Translate the track exactly the distance to show all slides plus a small margin
        const amount = Math.max(0, trackWidth - viewportWidth + 64);
        setScrollAmount(amount);
      }
    };

    // Calculate after rendering has finished
    const timer = setTimeout(calculateScroll, 100);
    
    window.addEventListener("resize", calculateScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculateScroll);
    };
  }, []);

  // Map scroll progress to horizontal translation (from 0 to -scrollAmount)
  const xTranslate = useTransform(scrollYProgress, [0, 1], [0, -scrollAmount]);

  return (
    <div ref={scrollRef} className="relative h-[300vh] bg-[#070707] z-20">
      {/* Sticky container that stays pinned in viewport for the full scroll height */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center py-6">
        
        {/* Pinned Title Block */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mb-8 flex justify-between items-end">
          <div>
            <span className="font-sans text-[10px] tracking-[0.3em] text-[#D6B37A] font-semibold uppercase block mb-2">
              Cinema Chronicle
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#F8F5F0] tracking-wide uppercase">
              Wedding Films <span className="text-gold-gradient italic font-light">Showcase</span>
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[10px] text-[#D6B37A] tracking-widest uppercase font-semibold">
            <span>Scroll to explore stories</span>
            <ArrowRight size={12} className="animate-[bounce_1.5s_infinite]" />
          </div>
        </div>

        {/* Horizontal Moving Row */}
        <div className="relative w-full flex items-center pl-6 md:pl-12">
          <motion.div
            ref={trackRef}
            style={{ x: xTranslate }}
            className="flex gap-8 pr-24 w-max"
          >
            {showcaseFilms.map((film) => (
              <div
                key={film.id}
                className="w-[85vw] sm:w-[460px] md:w-[520px] h-[55vh] md:h-[60vh] bg-[#0B0B0B] border border-[#D6B37A]/15 rounded-xl overflow-hidden flex flex-col justify-between p-6 relative group shadow-2xl shrink-0"
              >
                {/* Background Image overlay */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${film.image})` }}
                />
                
                {/* Dark vignettes */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 pointer-events-none" />
                
                {/* Card header statistics */}
                <div className="relative z-10 flex justify-between items-center">
                  <div className="flex items-center gap-1.5 bg-black/55 backdrop-blur-md px-3 py-1 rounded-full border border-[#F8F5F0]/10 font-sans text-[9px] text-[#F8F5F0]/80 uppercase">
                    <MapPin size={10} className="text-[#D6B37A]" />
                    <span>{film.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-black/55 backdrop-blur-md px-3 py-1 rounded-full border border-[#F8F5F0]/10 font-sans text-[9px] text-[#F8F5F0]/80 uppercase">
                    <Clock size={10} className="text-[#D6B37A]" />
                    <span>{film.duration}</span>
                  </div>
                </div>

                {/* Card bottom details */}
                <div className="relative z-10 text-left pt-20">
                  <h3 className="font-serif text-xl md:text-2xl text-[#F8F5F0] tracking-wide uppercase mb-2 group-hover:text-[#D6B37A] transition-colors duration-300">
                    {film.title}
                  </h3>
                  <p className="font-sans text-[11px] md:text-xs text-[#F8F5F0]/70 leading-relaxed font-light line-clamp-3">
                    {film.description}
                  </p>
                  
                  {/* Subtle link trigger */}
                  <div className="mt-4 flex items-center gap-2 text-[#D6B37A] font-sans text-[10px] tracking-widest uppercase font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Explore Story</span>
                    <ArrowRight size={10} />
                  </div>
                </div>
              </div>
            ))}

            {/* Final "Book Consultation" Slide */}
            <div className="w-[80vw] sm:w-[400px] h-[55vh] md:h-[60vh] bg-gradient-to-b from-[#0F0F0F] to-[#070707] border border-[#D6B37A]/30 rounded-xl flex flex-col justify-center items-center p-8 shrink-0 text-center relative group">
              <div className="absolute inset-0 border border-[#D6B37A]/0 group-hover:border-[#D6B37A]/30 transition-all duration-500 rounded-xl" />
              <div className="h-16 w-16 rounded-full border border-[#D6B37A]/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <span className="font-serif text-xl text-[#D6B37A]">E</span>
              </div>
              <h3 className="font-serif text-2xl text-[#F8F5F0] uppercase tracking-wider mb-2">
                Your Love Story Next
              </h3>
              <p className="font-sans text-xs text-[#F8F5F0]/50 max-w-xs leading-relaxed mb-6 font-light">
                Let us shape your fleeting moments into a gorgeous cinematic legacy.
              </p>
              <button
                onClick={() => {
                  const element = document.querySelector("#book");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="px-6 py-2.5 bg-[#D6B37A] text-[#0B0B0B] font-sans text-[10px] tracking-widest font-semibold uppercase rounded-full hover:bg-[#E5CFA8] transition-colors duration-300 cursor-pointer"
              >
                Inquire Today
              </button>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
