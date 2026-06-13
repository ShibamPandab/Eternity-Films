import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Volume2, VolumeX, Music } from "lucide-react";

const memories = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=400",
    caption: "The Laughter",
    size: "w-44 h-56 md:w-56 md:h-72",
    position: "top-[10%] left-[8%] md:top-[12%] md:left-[12%]",
    delay: 0.2,
    rotate: -6,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
    caption: "The Anticipation",
    size: "w-40 h-40 md:w-48 md:h-48",
    position: "top-[45%] left-[2%] md:top-[40%] md:left-[5%]",
    delay: 0.5,
    rotate: 4,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=400",
    caption: "The Ring",
    size: "w-48 h-36 md:w-64 md:h-48",
    position: "bottom-[8%] left-[12%] md:bottom-[10%] md:left-[15%]",
    delay: 0.8,
    rotate: -4,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1549417229-aa67d3263c09?q=80&w=400",
    caption: "The Celebration",
    size: "w-40 h-56 md:w-52 md:h-72",
    position: "top-[8%] right-[8%] md:top-[15%] md:right-[12%]",
    delay: 0.4,
    rotate: 5,
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1519225495810-7512c696505a?q=80&w=400",
    caption: "The Waltz",
    size: "w-48 h-36 md:w-60 md:h-44",
    position: "top-[48%] right-[2%] md:top-[42%] md:right-[5%]",
    delay: 0.7,
    rotate: -5,
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1507504038482-7621c43f2c0a?q=80&w=400",
    caption: "The Walk",
    size: "w-44 h-56 md:w-56 md:h-72",
    position: "bottom-[5%] right-[10%] md:bottom-[8%] md:right-[15%]",
    delay: 0.9,
    rotate: 3,
  },
];

export default function MemoryWall({ isAudioPlaying, setIsAudioPlaying }) {
  const containerRef = useRef(null);
  const audioRef = useRef(null);

  // Toggle local state and invoke parent callback if exists
  const toggleAudio = () => {
    const nextState = !isAudioPlaying;
    setIsAudioPlaying(nextState);

    if (audioRef.current) {
      if (nextState) {
        audioRef.current.play().catch((err) => console.log("Audio play error:", err));
      } else {
        audioRef.current.pause();
      }
    }
  };

  useEffect(() => {
    // Keep internal audio synced with global prop
    if (audioRef.current) {
      if (isAudioPlaying) {
        audioRef.current.play().catch((err) => console.log("Audio play error:", err));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isAudioPlaying]);

  return (
    <section
      id="memory-wall"
      ref={containerRef}
      className="relative min-h-[130vh] bg-[#070707] py-32 flex flex-col justify-between items-center overflow-hidden border-t border-[#D6B37A]/15 z-20"
    >
      {/* Hidden audio element playing a soft ambient cinematic soundtrack */}
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
        loop
      />

      {/* Floating Audio controller */}
      <div className="absolute top-12 right-6 md:right-12 z-30 pointer-events-auto">
        <button
          onClick={toggleAudio}
          className="flex items-center gap-3 bg-glass border border-[#D6B37A]/40 hover:border-[#D6B37A] px-5 py-2.5 rounded-full text-xs tracking-wider uppercase font-semibold text-[#D6B37A] transition-all duration-300 shadow-xl cursor-pointer"
        >
          {isAudioPlaying ? (
            <>
              {/* Simple audio bar animations */}
              <div className="flex items-end gap-0.5 h-3.5 w-4 overflow-hidden">
                <span className="w-[2px] bg-[#D6B37A] animate-[pulse_0.8s_infinite] h-full" style={{ animationDelay: "0.1s" }} />
                <span className="w-[2px] bg-[#D6B37A] animate-[pulse_0.6s_infinite] h-2/3" style={{ animationDelay: "0.3s" }} />
                <span className="w-[2px] bg-[#D6B37A] animate-[pulse_1s_infinite] h-4/5" style={{ animationDelay: "0.2s" }} />
                <span className="w-[2px] bg-[#D6B37A] animate-[pulse_0.7s_infinite] h-1/2" style={{ animationDelay: "0.4s" }} />
              </div>
              <span>Ambient On</span>
            </>
          ) : (
            <>
              <VolumeX size={14} />
              <span>Ambient Off</span>
            </>
          )}
        </button>
      </div>

      {/* Section Header */}
      <div className="text-center z-10 max-w-xl px-6 pointer-events-none">
        <span className="font-sans text-[10px] tracking-[0.3em] text-[#D6B37A] font-semibold uppercase block mb-3">
          Immersive Space
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-[#F8F5F0] tracking-wide uppercase leading-tight mb-4">
          The Memory <span className="text-gold-gradient italic font-light">Wall</span>
        </h2>
        <p className="font-sans text-xs text-[#F8F5F0]/50 leading-relaxed font-light">
          Scroll slowly. Let the background melody play. Watch as fragments of forgotten emotions fade in from the black void, coming alive in the glow of champagne gold.
        </p>
      </div>

      {/* Scattered Memories container */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
        {memories.map((memory) => (
          <motion.div
            key={memory.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.8, ease: "easeOut", delay: memory.delay }}
            className={`absolute ${memory.position} ${memory.size} bg-[#0B0B0B] p-2 md:p-3 border border-[#D6B37A]/15 rounded shadow-2xl flex flex-col items-center justify-between pointer-events-auto cursor-pointer`}
            style={{ rotate: `${memory.rotate}deg` }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 10, borderColor: "rgba(214,179,122,0.6)" }}
          >
            {/* Memory picture */}
            <div
              className="w-full h-[85%] bg-cover bg-center rounded"
              style={{ backgroundImage: `url(${memory.url})` }}
            />
            {/* Memory description */}
            <span className="font-serif text-[10px] md:text-xs text-[#D6B37A] tracking-wider italic mt-2">
              {memory.caption}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Footer Quote in Memory Wall */}
      <div className="z-10 text-center pointer-events-none">
        <span className="font-serif text-lg md:text-xl text-[#F8F5F0]/40 italic tracking-widest block">
          “Because some moments deserve forever.”
        </span>
      </div>
    </section>
  );
}
