import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function Preloader({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const containerVariants = {
    exit: {
      y: "-100%",
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 1.2,
        delay: 0.2,
      },
    },
  };

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.8,
        ease: "easeInOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8 + i * 0.1,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  return (
    <motion.div
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#070707]"
      variants={containerVariants}
      exit="exit"
    >
      <div className="flex flex-col items-center justify-center">
        {/* Animated Gold Brand Mark */}
        <div className="relative mb-6 flex h-24 w-24 items-center justify-center">
          <svg
            width="80"
            height="80"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Elegant Golden Circle */}
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              stroke="#D6B37A"
              strokeWidth="1.5"
              variants={lineVariants}
              initial="hidden"
              animate="visible"
            />
            {/* Elegant E Logo Mark */}
            <motion.path
              d="M40 38H60M40 50H55M40 62H60M40 38V62"
              stroke="#D6B37A"
              strokeWidth="2"
              strokeLinecap="round"
              variants={lineVariants}
              initial="hidden"
              animate="visible"
            />
          </svg>
        </div>

        {/* Brand Name with letter-spacing */}
        <div className="overflow-hidden">
          <motion.h1
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="font-serif text-3xl md:text-4xl tracking-[0.4em] text-[#D6B37A] uppercase text-center"
          >
            ETERNITY
          </motion.h1>
        </div>

        {/* Tagline */}
        <div className="overflow-hidden mt-2">
          <motion.p
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="font-sans text-[10px] md:text-xs tracking-[0.3em] text-[#F8F5F0]/60 uppercase text-center"
          >
            Some Moments Deserve Forever
          </motion.p>
        </div>

        {/* Cinematic progress line */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-[#D6B37A]/10 overflow-hidden">
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
            className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-[#D6B37A] to-transparent"
          />
        </div>
      </div>
    </motion.div>
  );
}
