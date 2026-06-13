import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import backupImage from "../assets/moment-3.jpg";

const timelineEvents = [
  {
    id: 1,
    title: "The Bride's Portrait",
    subtitle: "A quiet moment before the storm of joy",
    description: "In the soft light of the morning, time slows down. The lace, the scent of jasmine, and the silent reflection of a woman preparing for the biggest walk of her life.",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=600",
    time: "08:00 AM",
  },
  {
    id: 2,
    title: "The Ethereal Proposal",
    subtitle: "When two paths choose one destination",
    description: "Against the backdrop of the rising sun, a question whispered in trembling breath, answered with tears and a forever embrace.",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600",
    time: "Sunset, Paris",
  },
  {
    id: 3,
    title: "The Festive Engagement",
    subtitle: "Rhythms of promise and celebration",
    description: "Surrounded by family and standard heirs, rings are exchanged under a canopy of warm lights. Laughter echoes as two families become one.",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600",
    time: "One Month Later",
  },
  {
    id: 4,
    title: "The Sacred Vows",
    subtitle: "Under the witness of infinity",
    description: "The exchange of garlands, the sacred fire, or the church aisle. Words spoken that echo across lifetimes. The sealing of eternity.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600",
    time: "The Wedding Day",
  },
  {
    id: 5,
    title: "The Grand Reception",
    subtitle: "Dancing under a canopy of stars",
    description: "The champagne toasts, the first dance, and a celebration that carries long into the velvet night. The beginning of forever.",
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=600",
    time: "Midnight Celebration",
  },
];

export default function LoveStories() {
  const containerRef = useRef(null);
  const [eventImages, setEventImages] = useState(
    timelineEvents.reduce((acc, event) => ({ ...acc, [event.id]: event.image }), {})
  );
  
  // Custom scroll linking for the vertical line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section 
      id="love-stories" 
      ref={containerRef} 
      className="py-24 bg-[#0B0B0B] relative z-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="font-sans text-[10px] tracking-[0.3em] text-[#D6B37A] font-semibold uppercase block mb-3">
            Scroll Storytelling
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#F8F5F0] tracking-wide uppercase">
            Love Stories <span className="text-gold-gradient italic font-light">Timeline</span>
          </h2>
          <div className="h-[1px] w-24 bg-[#D6B37A]/30 mx-auto mt-6" />
        </div>

        {/* The Timeline Layout */}
        <div className="relative">
          
          {/* Vertical central line (Desktop) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-[#D6B37A]/10 hidden md:block">
            <motion.div 
              style={{ scaleY: pathLength, originY: 0 }}
              className="absolute inset-0 w-full bg-gradient-to-b from-[#D6B37A] via-[#E5CFA8] to-[#D6B37A]"
            />
          </div>

          {/* Timeline Cards Container */}
          <div className="flex flex-col gap-16 md:gap-28">
            {timelineEvents.map((event, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={event.id}
                  className="flex flex-col md:flex-row items-center justify-between w-full relative"
                >
                  {/* Left Side (Image for even, Text for odd) */}
                  <div className={`w-full md:w-[45%] ${isEven ? "md:order-1" : "md:order-3"} text-left`}>
                    {isEven ? (
                      // Image wrapper with reveal effect
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative aspect-4/3 rounded-lg overflow-hidden border border-[#D6B37A]/15 shadow-2xl group"
                      >
                        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                          <img
                            src={eventImages[event.id]}
                            alt={event.title}
                            className="w-full h-full object-cover"
                            onError={() => {
                              setEventImages((prev) => ({
                                ...prev,
                                [event.id]: backupImage,
                              }));
                            }}
                          />
                        </div>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                      </motion.div>
                    ) : (
                      // Text block
                      <motion.div 
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="p-6 md:p-8 rounded-lg bg-[#070707] border border-[#D6B37A]/10 text-left"
                      >
                        <span className="font-sans text-[10px] tracking-widest text-[#D6B37A] font-semibold block mb-2">
                          {event.time}
                        </span>
                        <h3 className="font-serif text-2xl text-[#F8F5F0] tracking-wide uppercase mb-1">
                          {event.title}
                        </h3>
                        <h4 className="font-serif text-xs text-[#D6B37A]/80 italic mb-4">
                          {event.subtitle}
                        </h4>
                        <p className="font-sans text-xs md:text-sm text-[#F8F5F0]/60 leading-relaxed font-light">
                          {event.description}
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* Center Dot (Desktop Only) */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center h-10 w-10 md:order-2">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="h-4 w-4 rounded-full bg-[#0B0B0B] border-2 border-[#D6B37A] relative"
                    >
                      <div className="absolute inset-0.5 rounded-full bg-[#D6B37A] animate-ping opacity-30" />
                    </motion.div>
                  </div>

                  {/* Right Side (Text for even, Image for odd) */}
                  <div className={`w-full md:w-[45%] ${isEven ? "md:order-3" : "md:order-1"} text-left mt-6 md:mt-0`}>
                    {!isEven ? (
                      // Image block
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative aspect-4/3 rounded-lg overflow-hidden border border-[#D6B37A]/15 shadow-2xl group"
                      >
                        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                          <img
                            src={eventImages[event.id]}
                            alt={event.title}
                            className="w-full h-full object-cover"
                            onError={() => {
                              setEventImages((prev) => ({
                                ...prev,
                                [event.id]: backupImage,
                              }));
                            }}
                          />
                        </div>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                      </motion.div>
                    ) : (
                      // Text block
                      <motion.div 
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="p-6 md:p-8 rounded-lg bg-[#070707] border border-[#D6B37A]/10 text-left"
                      >
                        <span className="font-sans text-[10px] tracking-widest text-[#D6B37A] font-semibold block mb-2">
                          {event.time}
                        </span>
                        <h3 className="font-serif text-2xl text-[#F8F5F0] tracking-wide uppercase mb-1">
                          {event.title}
                        </h3>
                        <h4 className="font-serif text-xs text-[#D6B37A]/80 italic mb-4">
                          {event.subtitle}
                        </h4>
                        <p className="font-sans text-xs md:text-sm text-[#F8F5F0]/60 leading-relaxed font-light">
                          {event.description}
                        </p>
                      </motion.div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
