import React from "react";
import { Heart } from "lucide-react";

const Instagram = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Facebook = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Youtube = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
  </svg>
);

export default function Footer() {
  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#070707] border-t border-[#D6B37A]/15 py-16 relative z-20 text-left">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Info (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <a href="#" onClick={handleScrollTop} className="flex items-center gap-3 w-fit group">
              <div className="h-9 w-9 flex items-center justify-center border border-[#D6B37A]/40 rounded-full group-hover:border-[#D6B37A] transition-colors duration-500">
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
            
            <p className="font-serif text-md text-[#D6B37A] italic mt-2">
              "Some Moments Deserve Forever."
            </p>
            
            <p className="font-sans text-xs text-[#F8F5F0]/50 leading-relaxed font-light mt-2 max-w-sm">
              We preserve visual legacies for discerning couples worldwide. Blending documentary realism with editorial high-fashion aesthetics.
            </p>
          </div>

          {/* Quicklinks (2 Columns) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-serif text-xs text-[#D6B37A] uppercase tracking-wider mb-2 font-semibold">Studio Links</h4>
            <a href="#featured" onClick={(e) => handleNavClick(e, "#featured")} className="font-sans text-xs text-[#F8F5F0]/60 hover:text-[#D6B37A] transition-colors duration-300 w-fit">Featured Films</a>
            <a href="#love-stories" onClick={(e) => handleNavClick(e, "#love-stories")} className="font-sans text-xs text-[#F8F5F0]/60 hover:text-[#D6B37A] transition-colors duration-300 w-fit">Love Stories</a>
            <a href="#signature" onClick={(e) => handleNavClick(e, "#signature")} className="font-sans text-xs text-[#F8F5F0]/60 hover:text-[#D6B37A] transition-colors duration-300 w-fit">Signature Moments</a>
            <a href="#process" onClick={(e) => handleNavClick(e, "#process")} className="font-sans text-xs text-[#F8F5F0]/60 hover:text-[#D6B37A] transition-colors duration-300 w-fit">The Experience</a>
            <a href="#book" onClick={(e) => handleNavClick(e, "#book")} className="font-sans text-xs text-[#F8F5F0]/60 hover:text-[#D6B37A] transition-colors duration-300 w-fit">Reserve Date</a>
          </div>

          {/* Social Handles (2 Columns) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-serif text-xs text-[#D6B37A] uppercase tracking-wider mb-2 font-semibold">Channels</h4>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="font-sans text-xs text-[#F8F5F0]/60 hover:text-[#D6B37A] transition-colors duration-300 flex items-center gap-2 w-fit">
              <Instagram size={12} /> <span>Instagram</span>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="font-sans text-xs text-[#F8F5F0]/60 hover:text-[#D6B37A] transition-colors duration-300 flex items-center gap-2 w-fit">
              <Youtube size={12} /> <span>Youtube</span>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="font-sans text-xs text-[#F8F5F0]/60 hover:text-[#D6B37A] transition-colors duration-300 flex items-center gap-2 w-fit">
              <Facebook size={12} /> <span>Facebook</span>
            </a>
          </div>

          {/* Studio Contact Info (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h4 className="font-serif text-xs text-[#D6B37A] uppercase tracking-wider mb-2 font-semibold">The Atelier</h4>
            <p className="font-sans text-xs text-[#F8F5F0]/60 leading-relaxed font-light">
              Eternity Films Studio,<br />
              Atelier Suite 40B, Taj Colonnade,<br />
              Udaipur, Rajasthan, 313001
            </p>
            <p className="font-sans text-xs text-[#F8F5F0]/60 mt-2">
              <span className="text-[#D6B37A] font-semibold">Inquiries:</span> commissions@eternityfilms.com<br />
              <span className="text-[#D6B37A] font-semibold">Phone:</span> +91 98765 43210
            </p>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="pt-8 border-t border-[#D6B37A]/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="font-sans text-[10px] tracking-wider text-[#F8F5F0]/40">
            © {new Date().getFullYear()} ETERNITY FILMS. All Rights Reserved. Private commission portfolios available upon request.
          </p>
          <p className="font-sans text-[10px] tracking-wider text-[#F8F5F0]/40 flex items-center gap-1">
            <span>Crafted with</span>
            <Heart size={10} className="text-[#D6B37A] fill-current" />
            <span>for the dreamers.</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
