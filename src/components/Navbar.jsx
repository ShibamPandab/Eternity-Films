import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Play } from "lucide-react";

const navLinks = [
  { name: "Featured Films", href: "#featured" },
  { name: "Love Stories", href: "#love-stories" },
  { name: "Signature Moments", href: "#signature" },
  { name: "The Process", href: "#process" },
  { name: "Memory Wall", href: "#memory-wall" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      setMobileMenuOpen(false);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-4 bg-glass border-b border-[#D6B37A]/20"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Brand Mark */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="relative h-9 w-9 flex items-center justify-center border border-[#D6B37A]/40 rounded-full group-hover:border-[#D6B37A] transition-colors duration-500">
              <span className="font-serif text-sm text-[#D6B37A]">E</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-[0.25em] text-[#F8F5F0] group-hover:text-[#D6B37A] transition-colors duration-500 uppercase">
                Eternity
              </span>
              <span className="font-sans text-[8px] tracking-[0.3em] text-[#F8F5F0]/50 uppercase">
                Films
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative font-sans text-xs tracking-[0.2em] text-[#F8F5F0]/70 hover:text-[#D6B37A] uppercase transition-colors duration-300 group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D6B37A] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Booking CTA Button (Desktop) */}
          <div className="hidden lg:block">
            <a
              href="#book"
              onClick={(e) => handleNavClick(e, "#book")}
              className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden rounded-full border border-[#D6B37A]/50 font-sans text-[11px] tracking-[0.2em] text-[#F8F5F0] uppercase transition-all duration-500 hover:text-[#0B0B0B] hover:border-[#D6B37A] group"
            >
              <span className="absolute inset-0 w-full h-full bg-[#D6B37A] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 -z-10" />
              Book Your Date
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden text-[#F8F5F0] hover:text-[#D6B37A] transition-colors p-2"
            aria-label="Toggle menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#0B0B0B]/95 backdrop-blur-md lg:hidden flex flex-col justify-between p-8"
          >
            {/* Top Bar inside drawer */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 flex items-center justify-center border border-[#D6B37A]/40 rounded-full">
                  <span className="font-serif text-xs text-[#D6B37A]">E</span>
                </div>
                <span className="font-serif text-md tracking-[0.25em] text-[#F8F5F0] uppercase">
                  Eternity
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#F8F5F0] hover:text-[#D6B37A] transition-colors p-2"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col gap-6 items-center my-auto">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-serif text-2xl tracking-[0.1em] text-[#F8F5F0] hover:text-[#D6B37A] transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.5 }}
                href="#book"
                onClick={(e) => handleNavClick(e, "#book")}
                className="mt-6 px-8 py-3 bg-[#D6B37A] hover:bg-[#E5CFA8] text-[#0B0B0B] font-sans text-xs tracking-[0.2em] uppercase rounded-full transition-all duration-300 font-semibold"
              >
                Book Your Date
              </motion.a>
            </div>

            {/* Footer inside drawer */}
            <div className="text-center">
              <p className="font-serif text-sm italic text-[#D6B37A]">
                "Some Moments Deserve Forever."
              </p>
              <p className="font-sans text-[10px] tracking-wider text-[#F8F5F0]/40 mt-2">
                © {new Date().getFullYear()} Eternity Films. All Rights Reserved.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
