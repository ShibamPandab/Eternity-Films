import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, MapPin, Calendar, Clock, Volume2, VolumeX } from "lucide-react";

const framerMotion = motion;

const featuredFilms = [
  {
    id: 1,
    title: "The Eternal Vows",
    couple: "Devika & Kanishk",
    location: "Udaipur Palace, India",
    date: "December 2025",
    duration: "4 min 12 sec",
    image: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=800",
    video: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c05d543d199d19983416049e29a33dec&profile_id=165",
    quote: "They didn't just document our wedding; they bottled up the very scent of our joy.",
  },
  {
    id: 2,
    title: "Serenade by the Lake",
    couple: "Alessandro & Beatrice",
    location: "Lake Como, Italy",
    date: "September 2025",
    duration: "5 min 45 sec",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800",
    video: "https://player.vimeo.com/external/498428800.sd.mp4?s=34a81e3a1f11bd3d82a1768407cd2ef059ff9b86&profile_id=165",
    quote: "A masterpiece. Seeing our film feels like watching a high-end cinematic editorial.",
  },
  {
    id: 3,
    title: "Whispers of the Wind",
    couple: "Sarah & Jonathan",
    location: "Cappadocia, Turkey",
    date: "October 2025",
    duration: "3 min 50 sec",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800",
    video: "https://player.vimeo.com/external/416390197.sd.mp4?s=9db20579e2a22542a229a1b199e51ebcd72c4ad3&profile_id=165",
    quote: "Every frame is poetry. The light, the music, the laughter—everything is captured perfectly.",
  },
  {
    id: 4,
    title: "Ocean of Love",
    couple: "Elena & Marcus",
    location: "Maldives",
    date: "November 2025",
    duration: "4 min 30 sec",
    image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=800",
    video: "https://player.vimeo.com/external/384761655.sd.mp4?s=be240cda29837dfa81177651a2dc666c1f1ec7df&profile_id=165",
    quote: "The aerial sequences and intimate emotions were merged beautifully. Simply stunning.",
  },
];

export default function FeaturedFilms({ externalActiveVideo, setExternalActiveVideo }) {
  const [activeFilm, setActiveFilm] = useState(null);
  const [isMuted, setIsMuted] = useState(false);

  const openLightbox = (film) => {
    setActiveFilm(film);
    if (setExternalActiveVideo) {
      setExternalActiveVideo(true); // Notify parent to mute background music
    }
  };

  const closeLightbox = () => {
    setActiveFilm(null);
    if (setExternalActiveVideo) {
      setExternalActiveVideo(false); // Notify parent to unmute background music
    }
  };

  // Allow clicking Watch Film in hero to open first film
  React.useEffect(() => {
    if (externalActiveVideo === "hero") {
      openLightbox(featuredFilms[0]);
    }
  }, [externalActiveVideo]);

  return (
    <section id="featured" className="py-24 bg-[#0B0B0B] border-t border-[#D6B37A]/15 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-sans text-[10px] tracking-[0.3em] text-[#D6B37A] font-semibold uppercase block mb-3">
              Curated Masterpieces
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#F8F5F0] tracking-wide uppercase leading-tight">
              Featured <span className="text-gold-gradient italic font-light">Films</span>
            </h2>
          </div>
          <p className="font-sans text-xs md:text-sm text-[#F8F5F0]/50 max-w-sm tracking-wide leading-relaxed">
            Netflix-style previews of our recent award-winning visual legacies. Every frame is hand-graded to perfection.
          </p>
        </div>

        {/* Netflix-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredFilms.map((film) => (
            <framerMotion.div
              key={film.id}
              onClick={() => openLightbox(film)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: film.id * 0.1 }}
              className="relative aspect-[9/14] rounded-lg overflow-hidden group cursor-pointer border border-[#D6B37A]/10 bg-[#070707]"
            >
              {/* Image background */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${film.image})` }}
              />

              {/* Black vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/20 group-hover:via-black/45 group-hover:from-black/90 transition-all duration-300" />

              {/* Glowing border hover effect */}
              <div className="absolute inset-0 border border-[#D6B37A]/0 group-hover:border-[#D6B37A]/40 rounded-lg transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(214,179,122,0.25)]" />

              {/* Content overlay */}
              <div className="absolute inset-x-6 bottom-6 flex flex-col justify-end h-1/2 text-left z-10 transition-all duration-300">
                <span className="font-sans text-[9px] tracking-[0.2em] text-[#D6B37A] uppercase mb-2">
                  {film.location}
                </span>
                <h3 className="font-serif text-lg md:text-xl text-[#F8F5F0] tracking-wide mb-1 uppercase group-hover:text-[#D6B37A] transition-colors duration-300">
                  {film.title}
                </h3>
                <p className="font-sans text-[10px] tracking-widest text-[#F8F5F0]/60 uppercase mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {film.couple}
                </p>

                {/* Floating details row */}
                <div className="flex items-center justify-between border-t border-[#F8F5F0]/10 pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="font-sans text-[9px] text-[#F8F5F0]/50 flex items-center gap-1">
                    <Clock size={10} /> {film.duration}
                  </span>
                  <span className="font-sans text-[9px] tracking-[0.1em] text-[#D6B37A] uppercase font-semibold">
                    Watch film
                  </span>
                </div>
              </div>

              {/* Hover Play Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                <div className="h-14 w-14 rounded-full bg-[#D6B37A] flex items-center justify-center text-[#0B0B0B] transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-[0_0_20px_rgba(214,179,122,0.6)]">
                  <Play size={20} className="fill-current stroke-none ml-1" />
                </div>
              </div>
            </framerMotion.div>
          ))}
        </div>
      </div>

      {/* Luxury Lightbox Modal */}
      <AnimatePresence>
        {activeFilm && (
          <framerMotion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          >
            {/* Modal Container */}
            <framerMotion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-6xl aspect-video md:aspect-auto md:min-h-[75vh] bg-[#070707] border border-[#D6B37A]/30 rounded-xl overflow-hidden flex flex-col md:flex-row shadow-[0_0_50px_rgba(0,0,0,0.8)]"
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-50 h-10 w-10 rounded-full border border-[#F8F5F0]/20 bg-black/40 text-[#F8F5F0] hover:text-[#D6B37A] hover:border-[#D6B37A] flex items-center justify-center transition-all duration-300 cursor-pointer"
              >
                <X size={20} />
              </button>

              {/* Film Player Area */}
              <div className="w-full md:w-3/5 bg-black relative flex items-center justify-center overflow-hidden aspect-video md:aspect-auto">
                <video
                  src={activeFilm.video}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover"
                />
                
                {/* Cinema letterboxing */}
                <div className="absolute top-0 left-0 right-0 h-[8%] bg-black/90 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-[8%] bg-black/90 pointer-events-none" />

                {/* Mute button overlay */}
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="absolute bottom-6 left-6 z-20 p-2.5 rounded-full bg-black/60 text-[#F8F5F0] border border-[#F8F5F0]/15 hover:border-[#D6B37A] hover:text-[#D6B37A] transition-colors"
                >
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
              </div>

              {/* Film Metadata / Details Area */}
              <div className="w-full md:w-2/5 p-6 md:p-10 flex flex-col justify-between bg-[#0B0B0B] border-t md:border-t-0 md:border-l border-[#D6B37A]/15 text-left overflow-y-auto">
                <div>
                  <span className="font-sans text-[10px] tracking-[0.25em] text-[#D6B37A] font-semibold uppercase block mb-3">
                    Now Screening
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl text-[#F8F5F0] tracking-wide uppercase mb-2">
                    {activeFilm.title}
                  </h3>
                  <p className="font-serif text-lg text-[#D6B37A]/80 italic mb-6">
                    featuring {activeFilm.couple}
                  </p>

                  {/* Metadata Stats */}
                  <div className="grid grid-cols-2 gap-4 border-t border-b border-[#D6B37A]/15 py-5 mb-6 font-sans text-xs">
                    <div className="flex items-center gap-2 text-[#F8F5F0]/70">
                      <MapPin size={14} className="text-[#D6B37A]" />
                      <span>{activeFilm.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#F8F5F0]/70">
                      <Clock size={14} className="text-[#D6B37A]" />
                      <span>{activeFilm.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#F8F5F0]/70">
                      <Calendar size={14} className="text-[#D6B37A]" />
                      <span>{activeFilm.date}</span>
                    </div>
                  </div>

                  {/* Couple Quote */}
                  <div className="relative pl-6 py-2 border-l border-[#D6B37A] italic text-sm text-[#F8F5F0]/80 font-serif leading-relaxed mb-6">
                    <span className="absolute left-1 top-0 text-3xl font-serif text-[#D6B37A]/30 leading-none">“</span>
                    {activeFilm.quote}
                  </div>
                </div>

                {/* Lightbox booking trigger */}
                <button
                  onClick={() => {
                    closeLightbox();
                    const element = document.querySelector("#book");
                    if (element) {
                      setTimeout(() => {
                        element.scrollIntoView({ behavior: "smooth" });
                      }, 400);
                    }
                  }}
                  className="w-full py-3 bg-transparent hover:bg-[#D6B37A] border border-[#D6B37A] text-[#D6B37A] hover:text-[#0B0B0B] rounded-full font-sans text-[11px] font-semibold tracking-[0.2em] uppercase transition-all duration-300"
                >
                  Request Similar Look
                </button>
              </div>
            </framerMotion.div>
          </framerMotion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
