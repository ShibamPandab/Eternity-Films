import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function Hero({ onWatchTeaser }) {
  const handleScrollToBook = (e) => {
    e.preventDefault();
    const element = document.querySelector("#book");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 3.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#070707] flex items-center justify-center">
      {/* Background Video with Slow Zoom Animation */}
      <div className="absolute inset-0 w-full h-full scale-105 animate-slow-zoom select-none pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          src="https://player.vimeo.com/external/498428800.sd.mp4?s=34a81e3a1f11bd3d82a1768407cd2ef059ff9b86&profile_id=165"
        />
        {/* Fallback image if video fails to load */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center -z-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000')" }}
        />
      </div>

      {/* Cinematic Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/30 to-black/60 pointer-events-none z-10" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Tagline Part 1 */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-[10px] md:text-xs tracking-[0.4em] text-[#D6B37A] font-semibold uppercase mb-4"
          >
            WE DON'T CAPTURE EVENTS.
          </motion.p>

          {/* Cinematic Large Statement */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl sm:text-6xl md:text-8xl tracking-tight text-[#F8F5F0] leading-none mb-6 uppercase"
          >
            WE PRESERVE <br />
            <span className="text-gold-gradient italic font-light">EMOTIONS</span>
          </motion.h1>

          {/* Tagline Part 2 */}
          <motion.p
            variants={itemVariants}
            className="font-serif text-lg md:text-2xl text-[#F8F5F0]/80 italic font-light tracking-widest max-w-xl mb-12"
          >
            Some Moments Deserve Forever.
          </motion.p>

          {/* Luxury CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            {/* CTA 1: Watch Film */}
            <button
              onClick={onWatchTeaser}
              className="flex items-center gap-3 bg-[#D6B37A] hover:bg-[#E5CFA8] text-[#0B0B0B] px-8 py-3.5 rounded-full font-sans text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(214,179,122,0.3)] hover:shadow-[0_0_30px_rgba(214,179,122,0.6)] group"
            >
              <Play size={14} className="fill-current stroke-none" />
              Watch Film
            </button>

            {/* CTA 2: Book Your Date */}
            <a
              href="#book"
              onClick={handleScrollToBook}
              className="px-8 py-3.5 border border-[#F8F5F0]/30 hover:border-[#D6B37A] text-[#F8F5F0] hover:text-[#D6B37A] rounded-full font-sans text-xs font-semibold tracking-[0.2em] uppercase bg-transparent transition-all duration-300"
            >
              Book Your Date
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Cinematic Borders (Letterboxing) */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-[#000] z-20 pointer-events-none opacity-80" />
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#000] z-20 pointer-events-none opacity-80" />

      {/* Scroll Down Mouse Indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 select-none">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 4.5, duration: 1 }}
          className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#F8F5F0]"
        >
          Scroll
        </motion.span>
        <div className="w-[18px] h-[32px] border border-[#F8F5F0]/30 rounded-full flex justify-center p-1">
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-[4px] h-[8px] bg-[#D6B37A] rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
