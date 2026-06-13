import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedFilms from "./components/FeaturedFilms";
import LoveStories from "./components/LoveStories";
import SignatureMoments from "./components/SignatureMoments";
import WeddingFilmsShowcase from "./components/WeddingFilmsShowcase";
import BehindTheLens from "./components/BehindTheLens";
import ExperienceProcess from "./components/ExperienceProcess";
import ClientReactions from "./components/ClientReactions";
import InstagramWall from "./components/InstagramWall";
import MemoryWall from "./components/MemoryWall";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [externalActiveVideo, setExternalActiveVideo] = useState(false);

  // Stop background music if a film lightbox or hero trailer is active
  useEffect(() => {
    if (externalActiveVideo) {
      setIsAudioPlaying(false);
    }
  }, [externalActiveVideo]);

  const handleWatchHeroTeaser = () => {
    // Triggers opening of first film lightbox in FeaturedFilms component
    setExternalActiveVideo("hero");
  };

  return (
    <>
      {/* Luxury Cinematic Preloader */}
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Main Website Structure */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="min-h-screen w-full bg-[#0B0B0B] text-[#F8F5F0] font-sans antialiased overflow-x-hidden"
        >
          {/* Header/Navbar */}
          <Navbar />

          {/* Hero Section */}
          <Hero onWatchTeaser={handleWatchHeroTeaser} />

          {/* Curated Netflix Grid */}
          <FeaturedFilms 
            externalActiveVideo={externalActiveVideo} 
            setExternalActiveVideo={setExternalActiveVideo} 
          />

          {/* Timeline Love Story */}
          <LoveStories />

          {/* Editorial Parallax */}
          <SignatureMoments />

          {/* Horizontal Scroll Showcase */}
          <WeddingFilmsShowcase />

          {/* Founder Editorial Story */}
          <BehindTheLens />

          {/* Stage process line */}
          <ExperienceProcess />

          {/* Video Testimonials */}
          <ClientReactions />

          {/* Instagram masonry layout */}
          <InstagramWall />

          {/* Memory Wall with Ambient Audio controls */}
          <MemoryWall 
            isAudioPlaying={isAudioPlaying} 
            setIsAudioPlaying={setIsAudioPlaying} 
          />

          {/* Booking Form Portal */}
          <BookingForm />

          {/* Luxury Footer */}
          <Footer />
        </motion.div>
      )}
    </>
  );
}
