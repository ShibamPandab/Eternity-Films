import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Local image imports to guarantee offline visibility
import moment1 from "../assets/moment-1.jpg"; // Center large featured image
import moment2 from "../assets/moment-2.jpg"; // Top Left
import moment5 from "../assets/moment-5.jpg"; // Top Center
import moment6 from "../assets/moment-6.jpg"; // Top Right
import moment4 from "../assets/moment-4.jpg"; // Bottom Left
import moment3 from "../assets/moment-3.jpg"; // Bottom Right

export default function SignatureMoments() {
  const containerRef = useRef(null);

  // Scroll tracking of the collage section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Unique parallax speeds for each coordinate to create dimensional separation
  const yTopLeft = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const yTopCenter = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const yTopRight = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  
  const yCenter = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  const yBottomLeft = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const yBottomRight = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section
      ref={containerRef}
      id="signature"
      className="relative min-h-[140vh] bg-[#0B0B0B] py-32 overflow-hidden border-t border-[#D6B37A]/15 z-20 flex flex-col justify-between"
    >
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full text-center z-10 pointer-events-none mb-12">
        <span className="font-sans text-[10px] tracking-[0.3em] text-[#D6B37A] font-semibold uppercase block mb-3">
          Atelier Collection
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-[#F8F5F0] tracking-wide uppercase">
          Signature <span className="text-gold-gradient italic font-light">Moments</span>
        </h2>
        <p className="font-sans text-xs text-[#F8F5F0]/40 max-w-md mx-auto mt-4 leading-relaxed font-light">
          A floating editorial gallery of raw human spirits. Hover to examine closely; scroll to see the layers breathe.
        </p>
      </div>

      {/* Floating Canvas Area */}
      <div className="relative flex-1 w-full max-w-7xl mx-auto min-h-[90vh]">
        
        {/* ===================================================
            TOP LEFT → Floating Image (moment-2)
            =================================================== */}
        <motion.div
          style={{ y: yTopLeft }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-[8%] left-[4%] md:left-[8%] w-[160px] h-[220px] md:w-[220px] md:h-[300px] z-20 group"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.1 }}
            className="w-full h-full rounded border border-[#D6B37A]/15 bg-[#070707] p-2 flex flex-col justify-between shadow-2xl relative"
            whileHover={{ scale: 1.03, borderColor: "rgba(214,179,122,0.6)" }}
          >
            <div
              className="w-full h-[85%] bg-cover bg-center rounded grayscale hover:grayscale-0 transition-all duration-700"
              style={{ backgroundImage: `url(${moment2})` }}
            />
            <span className="font-serif text-[9px] tracking-widest text-[#D6B37A] uppercase text-left mt-2">
              01 • Toscana Waltz
            </span>
          </motion.div>
        </motion.div>

        {/* ===================================================
            TOP CENTER → Floating Image (moment-5)
            =================================================== */}
        <motion.div
          style={{ y: yTopCenter }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="absolute top-[2%] left-1/2 -translate-x-1/2 w-[140px] h-[190px] md:w-[200px] md:h-[260px] z-20 group"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.3 }}
            className="w-full h-full rounded border border-[#D6B37A]/15 bg-[#070707] p-2 flex flex-col justify-between shadow-2xl relative"
            whileHover={{ scale: 1.03, borderColor: "rgba(214,179,122,0.6)" }}
          >
            <div
              className="w-full h-[85%] bg-cover bg-center rounded grayscale hover:grayscale-0 transition-all duration-700"
              style={{ backgroundImage: `url(${moment5})` }}
            />
            <span className="font-serif text-[9px] tracking-widest text-[#D6B37A] uppercase text-left mt-2">
              02 • Jaisalmer Dunes
            </span>
          </motion.div>
        </motion.div>

        {/* ===================================================
            TOP RIGHT → Floating Image (moment-6)
            =================================================== */}
        <motion.div
          style={{ y: yTopRight }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute top-[10%] right-[4%] md:right-[8%] w-[170px] h-[210px] md:w-[240px] md:h-[300px] z-20 group"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.5 }}
            className="w-full h-full rounded border border-[#D6B37A]/15 bg-[#070707] p-2 flex flex-col justify-between shadow-2xl relative"
            whileHover={{ scale: 1.03, borderColor: "rgba(214,179,122,0.6)" }}
          >
            <div
              className="w-full h-[85%] bg-cover bg-center rounded grayscale hover:grayscale-0 transition-all duration-700"
              style={{ backgroundImage: `url(${moment6})` }}
            />
            <span className="font-serif text-[9px] tracking-widest text-[#D6B37A] uppercase text-left mt-2">
              03 • Lake Como Embrace
            </span>
          </motion.div>
        </motion.div>

        {/* ===================================================
            CENTER → Large Featured Wedding Image (moment-1)
            =================================================== */}
        <motion.div
          style={{ y: yCenter }}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[380px] md:max-w-[480px] aspect-[3/4] z-10 group"
        >
          {/* External decorative frame offset */}
          <div className="absolute -inset-4 border border-[#D6B37A]/20 rounded group-hover:scale-[1.01] transition-transform duration-500 pointer-events-none" />
          
          <div className="w-full h-full rounded overflow-hidden border border-[#D6B37A]/30 bg-[#070707] relative p-3 flex flex-col justify-between shadow-[0_0_60px_rgba(0,0,0,0.9)] hover:border-[#D6B37A]/80 transition-colors duration-500">
            {/* Featured Image */}
            <div
              className="w-full h-[90%] bg-cover bg-center rounded"
              style={{ backgroundImage: `url(${moment1})` }}
            />
            
            {/* Caption */}
            <div className="flex justify-between items-center mt-3 font-serif text-[10px] md:text-xs tracking-widest text-[#D6B37A] uppercase select-none">
              <span>Featured Capture</span>
              <span>The Royal Serenade</span>
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            BOTTOM LEFT → Floating Image (moment-4)
            =================================================== */}
        <motion.div
          style={{ y: yBottomLeft }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="absolute bottom-[8%] left-[6%] md:left-[10%] w-[160px] h-[220px] md:w-[220px] md:h-[290px] z-20 group"
        >
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut", delay: 0.2 }}
            className="w-full h-full rounded border border-[#D6B37A]/15 bg-[#070707] p-2 flex flex-col justify-between shadow-2xl relative"
            whileHover={{ scale: 1.03, borderColor: "rgba(214,179,122,0.6)" }}
          >
            <div
              className="w-full h-[85%] bg-cover bg-center rounded grayscale hover:grayscale-0 transition-all duration-700"
              style={{ backgroundImage: `url(${moment4})` }}
            />
            <span className="font-serif text-[9px] tracking-widest text-[#D6B37A] uppercase text-left mt-2">
              04 • The Grand Exit
            </span>
          </motion.div>
        </motion.div>

        {/* ===================================================
            BOTTOM RIGHT → Floating Image (moment-3)
            =================================================== */}
        <motion.div
          style={{ y: yBottomRight }}
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          className="absolute bottom-[5%] right-[6%] md:right-[10%] w-[150px] h-[210px] md:w-[210px] md:h-[280px] z-20 group"
        >
          <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{ repeat: Infinity, duration: 5.8, ease: "easeInOut", delay: 0.4 }}
            className="w-full h-full rounded border border-[#D6B37A]/15 bg-[#070707] p-2 flex flex-col justify-between shadow-2xl relative"
            whileHover={{ scale: 1.03, borderColor: "rgba(214,179,122,0.6)" }}
          >
            <div
              className="w-full h-[85%] bg-cover bg-center rounded grayscale hover:grayscale-0 transition-all duration-700"
              style={{ backgroundImage: `url(${moment3})` }}
            />
            <span className="font-serif text-[9px] tracking-widest text-[#D6B37A] uppercase text-left mt-2">
              05 • Whispered Promises
            </span>
          </motion.div>
        </motion.div>

      </div>

      {/* Decorative footer text */}
      <div className="max-w-7xl mx-auto px-6 w-full text-center z-10 mt-8">
        <span className="font-serif text-[11px] tracking-[0.25em] text-[#D6B37A]/40 uppercase italic font-medium">
          A Symphony of Fleeting Moments, Suspended in Time.
        </span>
      </div>
    </section>
  );
}
