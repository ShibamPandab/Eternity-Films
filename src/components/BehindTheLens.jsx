import React from "react";
import { motion } from "framer-motion";

export default function BehindTheLens() {
  return (
    <section id="about" className="py-24 bg-[#0B0B0B] border-t border-[#D6B37A]/15 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Images in Editorial Grid */}
          <div className="lg:col-span-6 relative">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] w-4/5 rounded-lg overflow-hidden border border-[#D6B37A]/20 shadow-2xl"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=800')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>

            {/* Offset Image (Decorative and Editorial) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="absolute right-0 bottom-[-40px] w-1/2 aspect-square rounded-lg overflow-hidden border border-[#D6B37A]/30 shadow-2xl z-10 hidden sm:block"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=600')" }}
              />
            </motion.div>
          </div>

          {/* Right Side: Editorial Text */}
          <div className="lg:col-span-6 text-left flex flex-col justify-center">
            <span className="font-sans text-[10px] tracking-[0.3em] text-[#D6B37A] font-semibold uppercase block mb-3">
              The Founders
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#F8F5F0] tracking-wide uppercase leading-tight mb-6">
              Behind The <span className="text-gold-gradient italic font-light">Lens</span>
            </h2>
            
            <p className="font-serif text-lg text-[#D6B37A] italic mb-6">
              "We don't script. We don't stage. We preserve raw human spirit."
            </p>

            <div className="font-sans text-xs md:text-sm text-[#F8F5F0]/70 leading-relaxed space-y-6 font-light">
              <p>
                We are Raghav & Ananya, a husband-and-wife filmmaking duo. For over a decade, we have traveled the globe, capturing the grand architectures of royalty and the quiet whispers of intimate vow exchanges. 
              </p>
              <p>
                Our philosophy is simple: we believe that luxury is not about massive setups, but about the depth of feeling. The father's quiet tear sliding onto his lapel, the silent holding of hands, the explosive laughter during the toasts—these are the details that deserve to live forever.
              </p>
              <p>
                By blending high-end fashion editorial photography with documentary film-style cinematography, we create visual heirlooms that look like feature films, and feel like home.
              </p>
            </div>

            {/* Signature & Founders details */}
            <div className="mt-8 flex items-center justify-between border-t border-[#D6B37A]/20 pt-6">
              <div>
                <h4 className="font-serif text-[#F8F5F0] tracking-wider uppercase text-sm">Raghav & Ananya</h4>
                <p className="font-sans text-[9px] tracking-widest text-[#D6B37A] uppercase mt-1">Lead Cinematographer & Director</p>
              </div>
              <div className="font-serif text-[#D6B37A] text-2xl italic tracking-wide select-none">
                Raghav & Ananya
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-[#D6B37A]/10 text-center sm:text-left">
              <div>
                <span className="font-serif text-2xl md:text-3xl text-[#D6B37A] block">12+</span>
                <span className="font-sans text-[8px] tracking-widest text-[#F8F5F0]/40 uppercase block mt-1">Years of Cinema</span>
              </div>
              <div>
                <span className="font-serif text-2xl md:text-3xl text-[#D6B37A] block">150+</span>
                <span className="font-sans text-[8px] tracking-widest text-[#F8F5F0]/40 uppercase block mt-1">Legacies Made</span>
              </div>
              <div>
                <span className="font-serif text-2xl md:text-3xl text-[#D6B37A] block">14+</span>
                <span className="font-sans text-[8px] tracking-widest text-[#F8F5F0]/40 uppercase block mt-1">Countries Explored</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
