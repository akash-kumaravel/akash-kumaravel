import React, { useState, ChangeEvent, FormEvent } from "react";
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Loader2, 
  CheckCircle2, 
  AlertCircle 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Footer from "../components/Footer";
import { assetPath } from "../data/portfolioData";
import { sendContactEmail } from "../lib/email";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await sendContactEmail(form);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err: any) {
      console.error("EmailJS error:", err);
      setError("Failed to send message automatically. Please email akashuxui@gmail.com directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white font-inter text-[#1A1A1A] pt-24 sm:pt-28 flex flex-col justify-between">
      
      <section className="px-6 sm:px-8 py-16 sm:py-24 relative overflow-hidden flex-1">
        {/* Background Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-[0.03] select-none text-[18vw] font-black whitespace-nowrap overflow-hidden">
          GET IN TOUCH GET IN TOUCH
        </div>

        <div className="max-w-[1300px] mx-auto z-10 relative">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">
            
            {/* Left Column: Typography & Contact Details */}
            <div className="flex-1">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1A1A1A] mb-8 font-sk-modernist"
              >
                LET'S <br/>
                <span className="text-[#007AFF]">TALK.</span>
              </motion.h1>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-4">
                Ready to Create Something Amazing Together?
              </h2>

              <p className="text-[#555] text-base sm:text-lg font-normal leading-relaxed mb-10 max-w-xl">
                As a passionate UI/UX designer, I love turning ideas into intuitive, user-friendly experiences. Let's collaborate to bring your vision to life.
              </p>

              <div className="flex flex-col gap-5">
                <a 
                  href="mailto:akashuxui@gmail.com" 
                  className="flex items-center gap-4 text-base sm:text-lg font-semibold text-[#1A1A1A] hover:text-[#007AFF] transition-colors group"
                >
                  <span className="p-3.5 bg-black text-white rounded-full group-hover:bg-[#007AFF] group-hover:scale-105 transition-all">
                    <Mail size={22} />
                  </span>
                  <span>akashuxui@gmail.com</span>
                </a>

                <a 
                  href="tel:+916369957006" 
                  className="flex items-center gap-4 text-base sm:text-lg font-semibold text-[#1A1A1A] hover:text-[#007AFF] transition-colors group"
                >
                  <span className="p-3.5 bg-black text-white rounded-full group-hover:bg-[#007AFF] group-hover:scale-105 transition-all">
                    <Phone size={22} />
                  </span>
                  <span>+91 63699 57006</span>
                </a>

                <div className="flex items-center gap-4 text-base sm:text-lg font-semibold text-[#555] pt-2">
                  <span className="p-3.5 bg-[#FAF9F6] border border-black/5 text-[#1A1A1A] rounded-full">
                    <MapPin size={22} />
                  </span>
                  <span>Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            {/* Right Column: Clean, Elegant Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex-1 w-full p-8 md:p-12 rounded-[40px] bg-[#F9FAFB] border border-black/5 shadow-2xl shadow-black/5"
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="text-[#1A1A1A] text-sm font-bold uppercase tracking-widest">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Akash Kumaravel"
                      className="w-full h-14 px-6 rounded-2xl text-base text-[#1A1A1A] bg-white border border-black/10 outline-none focus:border-[#007AFF] focus:ring-4 focus:ring-[#007AFF]/10 transition-all placeholder:text-gray-400"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label className="text-[#1A1A1A] text-sm font-bold uppercase tracking-widest">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="akashuxui@gmail.com"
                      className="w-full h-14 px-6 rounded-2xl text-base text-[#1A1A1A] bg-white border border-black/10 outline-none focus:border-[#007AFF] focus:ring-4 focus:ring-[#007AFF]/10 transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-[#1A1A1A] text-sm font-bold uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Hello Akash, I have an opportunity..."
                    className="w-full p-6 rounded-2xl text-base text-[#1A1A1A] bg-white border border-black/10 outline-none focus:border-[#007AFF] focus:ring-4 focus:ring-[#007AFF]/10 transition-all resize-none placeholder:text-gray-400"
                  />
                </div>

                {/* Error Notice */}
                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Success Notice */}
                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>Thank you! Your message has been sent successfully.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={submitting}
                  className={`w-full py-5 rounded-2xl text-base font-bold transition-all flex items-center justify-center gap-3 ${
                    submitted
                      ? "bg-emerald-600 text-white"
                      : "bg-[#1A1A1A] text-white hover:bg-black disabled:opacity-60"
                  }`}
                >
                  {submitting ? (
                    <>
                      <span>Sending Message...</span>
                      <Loader2 size={20} className="animate-spin" />
                    </>
                  ) : submitted ? (
                    <>
                      <CheckCircle2 size={20} />
                      <span>Message Sent</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight size={20} />
                    </>
                  )}
                </motion.button>

              </form>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer videoSrc={assetPath("anime3.webm")} />
    </main>
  );
}
