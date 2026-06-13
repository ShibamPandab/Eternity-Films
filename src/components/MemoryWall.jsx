import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Volume2, VolumeX, Music } from "lucide-react";
import backupImage from "../assets/moment-1.jpg";

const memories = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=400",
    caption: "The Laughter",
    size: "w-40 h-52 lg:w-44 lg:h-60",
    delay: 0.2,
    rotate: -6,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
    caption: "The Anticipation",
    size: "w-36 h-36 lg:w-40 lg:h-40",
    delay: 0.5,
    rotate: 4,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=400",
    caption: "The Ring",
    size: "w-44 h-32 lg:w-52 lg:h-36",
    delay: 0.8,
    rotate: -4,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1549417229-aa67d3263c09?q=80&w=400",
    caption: "The Celebration",
    size: "w-40 h-52 lg:w-44 lg:h-60",
    delay: 0.4,
    rotate: 5,
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400",
    caption: "The Waltz",
    size: "w-44 h-32 lg:w-52 lg:h-36",
    delay: 0.7,
    rotate: -5,
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=400",
    caption: "The Walk",
    size: "w-40 h-52 lg:w-44 lg:h-60",
    delay: 0.9,
    rotate: 3,
  },
];

export default function MemoryWall({ isAudioPlaying, setIsAudioPlaying }) {
  const containerRef = useRef(null);
  const audioRef = useRef(null);
  const [memoryUrls, setMemoryUrls] = useState(
    memories.reduce((acc, m) => ({ ...acc, [m.id]: m.url }), {})
  );

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
      className="relative min-h-[120vh] bg-[#070707] py-24 flex flex-col justify-between items-center overflow-hidden border-t border-[#D6B37A]/15 z-20"
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

      <div className="relative w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-12 py-16 px-6 z-20">
        
        {/* Left Constellation Column (Desktop/Tablet) */}
        <div className="hidden md:flex flex-col justify-between items-start h-[75vh] min-h-[550px] lg:h-[80vh] min-h-[640px] w-60 lg:w-72 select-none pointer-events-none">
          {memories.slice(0, 3).map((memory) => {
            const staggerClass = memory.id === 2 ? "self-end mr-6" : "self-start";
            return (
              <motion.div
                key={memory.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 1.6, ease: "easeOut", delay: memory.delay }}
                className={`${staggerClass} ${memory.size} bg-[#0B0B0B] p-2 lg:p-3 border border-[#D6B37A]/15 rounded shadow-2xl flex flex-col items-center justify-between pointer-events-auto cursor-pointer`}
                style={{ rotate: `${memory.rotate}deg` }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 30, borderColor: "rgba(214,179,122,0.6)" }}
              >
                {/* Memory picture */}
                <div className="w-full h-[85%] rounded overflow-hidden relative">
                  <img
                    src={memoryUrls[memory.id]}
                    alt={memory.caption}
                    className="w-full h-full object-cover"
                    onError={() => {
                      setMemoryUrls((prev) => ({
                        ...prev,
                        [memory.id]: backupImage,
                      }));
                    }}
                  />
                </div>
                {/* Memory description */}
                <span className="font-serif text-[10px] md:text-xs text-[#D6B37A] tracking-wider italic mt-2">
                  {memory.caption}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Section Header - Placed in visual center */}
        <div className="text-center z-10 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl px-8 py-10 md:py-14 rounded-2xl bg-[#070707]/30 backdrop-blur-md border border-[#D6B37A]/5 pointer-events-none my-auto transition-all duration-500 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          <span className="font-sans text-[10px] tracking-[0.3em] text-[#D6B37A] font-semibold uppercase block mb-3">
            Immersive Space
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#F8F5F0] tracking-wide uppercase leading-tight mb-4">
            The Memory <span className="text-gold-gradient italic font-light">Wall</span>
          </h2>
          <p className="font-sans text-xs md:text-sm text-[#F8F5F0]/60 leading-relaxed font-light">
            Scroll slowly. Let the background melody play. Watch as fragments of forgotten emotions fade in from the black void, coming alive in the glow of champagne gold.
          </p>
        </div>

        {/* Right Constellation Column (Desktop/Tablet) */}
        <div className="hidden md:flex flex-col justify-between items-end h-[75vh] min-h-[550px] lg:h-[80vh] min-h-[640px] w-60 lg:w-72 select-none pointer-events-none">
          {memories.slice(3, 6).map((memory) => {
            const staggerClass = memory.id === 5 ? "self-start ml-6" : "self-end";
            return (
              <motion.div
                key={memory.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 1.6, ease: "easeOut", delay: memory.delay }}
                className={`${staggerClass} ${memory.size} bg-[#0B0B0B] p-2 lg:p-3 border border-[#D6B37A]/15 rounded shadow-2xl flex flex-col items-center justify-between pointer-events-auto cursor-pointer`}
                style={{ rotate: `${memory.rotate}deg` }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 30, borderColor: "rgba(214,179,122,0.6)" }}
              >
                {/* Memory picture */}
                <div className="w-full h-[85%] rounded overflow-hidden relative">
                  <img
                    src={memoryUrls[memory.id]}
                    alt={memory.caption}
                    className="w-full h-full object-cover"
                    onError={() => {
                      setMemoryUrls((prev) => ({
                        ...prev,
                        [memory.id]: backupImage,
                      }));
                    }}
                  />
                </div>
                {/* Memory description */}
                <span className="font-serif text-[10px] md:text-xs text-[#D6B37A] tracking-wider italic mt-2">
                  {memory.caption}
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Grid Memories container (Mobile) */}
      <div className="grid grid-cols-2 gap-6 w-full mt-12 md:hidden z-10 px-4">
        {memories.map((memory) => (
          <motion.div
            key={memory.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: memory.delay * 0.5 }}
            className="bg-[#0B0B0B] p-2.5 border border-[#D6B37A]/15 rounded-lg shadow-xl flex flex-col items-center justify-between aspect-[3/4]"
          >
            {/* Memory picture */}
            <div className="w-full h-[85%] rounded overflow-hidden relative">
              <img
                src={memoryUrls[memory.id]}
                alt={memory.caption}
                className="w-full h-full object-cover"
                onError={() => {
                  setMemoryUrls((prev) => ({
                    ...prev,
                    [memory.id]: backupImage,
                  }));
                }}
              />
            </div>
            {/* Memory description */}
            <span className="font-serif text-[10px] text-[#D6B37A] tracking-wider italic mt-2">
              {memory.caption}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Footer Quote in Memory Wall */}
      <div className="z-10 text-center pointer-events-none mb-4">
        <span className="font-serif text-lg md:text-xl text-[#F8F5F0]/40 italic tracking-widest block">
          “Because some moments deserve forever.”
        </span>
      </div>
    </section>
  );
}
