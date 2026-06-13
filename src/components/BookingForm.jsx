import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, DollarSign, Send, CheckCircle } from "lucide-react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    partnerName: "",
    email: "",
    date: "",
    location: "",
    eventType: "cinematic-wedding-film",
    budget: "3L-5L",
    details: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="book" className="py-24 bg-[#0B0B0B] border-t border-[#D6B37A]/15 relative z-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative">
        
        {/* Decorative corner borders inside container */}
        <div className="absolute top-0 left-0 h-6 w-6 border-t-2 border-l-2 border-[#D6B37A]/30" />
        <div className="absolute top-0 right-0 h-6 w-6 border-t-2 border-r-2 border-[#D6B37A]/30" />
        <div className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-[#D6B37A]/30" />
        <div className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-[#D6B37A]/30" />

        <div className="p-8 md:p-12 border border-[#D6B37A]/15 rounded bg-[#070707] text-left shadow-2xl">
          
          {/* Header */}
          <div className="text-center mb-12">
            <span className="font-sans text-[10px] tracking-[0.3em] text-[#D6B37A] font-semibold uppercase block mb-3">
              Reserve Your Legacy
            </span>
            <h2 className="font-serif text-2xl md:text-4xl text-[#F8F5F0] tracking-wide uppercase">
              Book Your <span className="text-gold-gradient italic font-light">Date</span>
            </h2>
            <p className="font-sans text-xs text-[#F8F5F0]/50 max-w-md mx-auto mt-3 leading-relaxed font-light">
              We accept a limited number of commissions each year to dedicate our full creative focus to every film. Inquire to reserve your date.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {/* Inputs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Your Name */}
                  <div className="flex flex-col">
                    <label className="font-serif text-xs text-[#D6B37A] uppercase tracking-wider mb-2">Your Full Name *</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ananya Sen"
                      className="bg-[#0B0B0B] border border-[#D6B37A]/20 focus:border-[#D6B37A] outline-none px-4 py-3 rounded text-sm text-[#F8F5F0] placeholder-[#F8F5F0]/20 transition-all duration-300 font-sans"
                    />
                  </div>

                  {/* Partner's Name */}
                  <div className="flex flex-col">
                    <label className="font-serif text-xs text-[#D6B37A] uppercase tracking-wider mb-2">Partner's Full Name</label>
                    <input
                      type="text"
                      name="partnerName"
                      value={formData.partnerName}
                      onChange={handleChange}
                      placeholder="e.g. Raghav Mehta"
                      className="bg-[#0B0B0B] border border-[#D6B37A]/20 focus:border-[#D6B37A] outline-none px-4 py-3 rounded text-sm text-[#F8F5F0] placeholder-[#F8F5F0]/20 transition-all duration-300 font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="flex flex-col">
                    <label className="font-serif text-xs text-[#D6B37A] uppercase tracking-wider mb-2">Email Address *</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. ananya@domain.com"
                      className="bg-[#0B0B0B] border border-[#D6B37A]/20 focus:border-[#D6B37A] outline-none px-4 py-3 rounded text-sm text-[#F8F5F0] placeholder-[#F8F5F0]/20 transition-all duration-300 font-sans"
                    />
                  </div>

                  {/* Wedding Date */}
                  <div className="flex flex-col">
                    <label className="font-serif text-xs text-[#D6B37A] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Calendar size={12} /> Wedding Date *
                    </label>
                    <input
                      required
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="bg-[#0B0B0B] border border-[#D6B37A]/20 focus:border-[#D6B37A] outline-none px-4 py-3 rounded text-sm text-[#F8F5F0] transition-all duration-300 font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Wedding Location */}
                  <div className="flex flex-col">
                    <label className="font-serif text-xs text-[#D6B37A] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <MapPin size={12} /> Venue & Location *
                    </label>
                    <input
                      required
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. City Palace, Udaipur"
                      className="bg-[#0B0B0B] border border-[#D6B37A]/20 focus:border-[#D6B37A] outline-none px-4 py-3 rounded text-sm text-[#F8F5F0] placeholder-[#F8F5F0]/20 transition-all duration-300 font-sans"
                    />
                  </div>

                  {/* Commission Type */}
                  <div className="flex flex-col">
                    <label className="font-serif text-xs text-[#D6B37A] uppercase tracking-wider mb-2">Commission Type</label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="bg-[#0B0B0B] border border-[#D6B37A]/20 focus:border-[#D6B37A] outline-none px-4 py-3 rounded text-sm text-[#F8F5F0] transition-all duration-300 font-sans cursor-pointer"
                    >
                      <option value="cinematic-wedding-film">Cinematic Wedding Film</option>
                      <option value="editorial-photography">Editorial Wedding Photography</option>
                      <option value="full-media-suite">Full Media Suite (Film + Photo)</option>
                      <option value="elopement-package">Pre-Wedding / Elopement Legacy</option>
                    </select>
                  </div>
                </div>

                {/* Expected Budget */}
                <div className="flex flex-col">
                  <label className="font-serif text-xs text-[#D6B37A] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <DollarSign size={12} /> Expected Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="bg-[#0B0B0B] border border-[#D6B37A]/20 focus:border-[#D6B37A] outline-none px-4 py-3 rounded text-sm text-[#F8F5F0] transition-all duration-300 font-sans cursor-pointer"
                  >
                    <option value="2L-3L">₹2,00,000 - ₹3,00,000</option>
                    <option value="3L-5L">₹3,00,000 - ₹5,00,000</option>
                    <option value="5L+">₹5,00,000+ (Elite Custom Directives)</option>
                  </select>
                </div>

                {/* Additional Details */}
                <div className="flex flex-col">
                  <label className="font-serif text-xs text-[#D6B37A] uppercase tracking-wider mb-2">Tell Us Your Love Story</label>
                  <textarea
                    name="details"
                    rows="4"
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Tell us details about the vibe you want, how you met, or any special moments you are planning..."
                    className="bg-[#0B0B0B] border border-[#D6B37A]/20 focus:border-[#D6B37A] outline-none px-4 py-3 rounded text-sm text-[#F8F5F0] placeholder-[#F8F5F0]/20 transition-all duration-300 font-sans resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#D6B37A] hover:bg-[#E5CFA8] disabled:bg-[#D6B37A]/50 text-[#0B0B0B] font-sans font-semibold text-xs tracking-[0.25em] uppercase py-4 rounded shadow-xl hover:shadow-[0_0_30px_rgba(214,179,122,0.4)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <div className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={12} />
                      <span>Send Commission Inquiry</span>
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-12 flex flex-col items-center justify-center"
              >
                <div className="h-16 w-16 rounded-full border border-[#D6B37A] flex items-center justify-center text-[#D6B37A] mb-6 animate-pulse">
                  <CheckCircle size={32} />
                </div>
                <h3 className="font-serif text-2xl text-[#F8F5F0] uppercase tracking-wide mb-3">
                  Inquiry Received
                </h3>
                <p className="font-sans text-xs text-[#F8F5F0]/60 max-w-sm leading-relaxed mb-6 font-light">
                  Thank you, <span className="text-[#D6B37A] font-semibold">{formData.name}</span>. We will review your wedding date details (<span className="text-[#D6B37A]">{formData.date}</span>) and contact you within 24 hours to schedule a Discovery Call.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 border border-[#D6B37A] hover:bg-[#D6B37A] hover:text-[#0B0B0B] text-[#D6B37A] font-sans text-[10px] tracking-widest uppercase rounded transition-colors duration-300"
                >
                  Submit Another Request
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
