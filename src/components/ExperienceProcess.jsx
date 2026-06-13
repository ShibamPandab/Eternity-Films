import React from "react";
import { motion } from "framer-motion";
import { PhoneCall, Compass, Camera, Film, Gift } from "lucide-react";

const processSteps = [
  {
    id: 1,
    num: "01",
    title: "Discovery Call",
    subtitle: "Understanding your story",
    icon: PhoneCall,
    description: "We connect over coffee or video call to align with your aesthetic vision, timeline, and the unique emotional textures of your relationship.",
  },
  {
    id: 2,
    num: "02",
    title: "Artistic Direction",
    subtitle: "Crafting the visual script",
    icon: Compass,
    description: "We develop customized mood boards, map out lighting schemes for each location, and advise on styling to ensure cinematic synergy.",
  },
  {
    id: 3,
    num: "03",
    title: "The Cinematic Shoot",
    subtitle: "Quiet, unscripted documentation",
    icon: Camera,
    description: "Equipped with state-of-the-art cinematic cameras and prime lenses, we capture raw, unscripted moments without disrupting the flow of your day.",
  },
  {
    id: 4,
    num: "04",
    title: "The Editing Suite",
    subtitle: "Stitching eternity together",
    icon: Film,
    description: "Each frame is hand-graded in a signature color palette, with licensed acoustic/cinematic music chosen to elevate the narrative structure.",
  },
  {
    id: 5,
    num: "05",
    title: "The Grand Delivery",
    subtitle: "An heirloom for generations",
    icon: Gift,
    description: "Receive your film through a private online cinema screening portal and a custom gold-gilded physical linen box with custom prints.",
  },
];

export default function ExperienceProcess() {
  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1.5, ease: "easeInOut", delay: 0.2 },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: i * 0.15 },
    }),
  };

  return (
    <section id="process" className="py-24 bg-[#070707] border-t border-[#D6B37A]/15 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="font-sans text-[10px] tracking-[0.3em] text-[#D6B37A] font-semibold uppercase block mb-3">
            The Journey
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#F8F5F0] tracking-wide uppercase">
            Experience <span className="text-gold-gradient italic font-light">Process</span>
          </h2>
          <div className="h-[1px] w-24 bg-[#D6B37A]/30 mx-auto mt-6" />
        </div>

        {/* Process Steps Layout */}
        <div className="relative">
          
          {/* Horizontal progress line (Desktop) */}
          <div className="absolute top-[45px] left-[10%] right-[10%] h-[1px] bg-[#D6B37A]/10 hidden lg:block z-0">
            <motion.div 
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#D6B37A] to-[#E5CFA8] origin-left w-full"
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.id}
                  custom={idx}
                  variants={stepVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left group"
                >
                  {/* Step Icon and Number Circle */}
                  <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#0B0B0B] border border-[#D6B37A]/20 group-hover:border-[#D6B37A]/80 transition-colors duration-500 shadow-xl group-hover:shadow-[0_0_20px_rgba(214,179,122,0.15)] shrink-0">
                    <Icon size={24} className="text-[#D6B37A] group-hover:scale-110 transition-transform duration-300" />
                    
                    {/* Small number bubble */}
                    <span className="absolute top-0 right-0 h-6 w-6 rounded-full bg-[#D6B37A] text-[#0B0B0B] font-sans text-[10px] font-bold flex items-center justify-center shadow-md">
                      {step.num}
                    </span>
                  </div>

                  {/* Step Info */}
                  <h3 className="font-serif text-lg text-[#F8F5F0] tracking-wide uppercase mb-1 group-hover:text-[#D6B37A] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <h4 className="font-serif text-[10px] tracking-widest text-[#D6B37A] uppercase font-light mb-3">
                    {step.subtitle}
                  </h4>
                  <p className="font-sans text-[11px] md:text-xs text-[#F8F5F0]/50 leading-relaxed font-light">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
