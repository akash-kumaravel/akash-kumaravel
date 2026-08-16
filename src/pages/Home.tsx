import React, { useState, ChangeEvent, FormEvent } from "react";
import { 
  ArrowRight, 
  Globe, 
  Mail, 
  Linkedin, 
  Phone, 
  ExternalLink,
  Loader2,
  Volume2,
  VolumeX
} from "lucide-react";
import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";

import Footer from "../components/Footer";
import { assetPath } from "../data/portfolioData";
import { sendContactEmail } from "../lib/email";

const MotionLink = motion.create(Link);

// ─── Custom Icons (Brand logos not in Lucide) ──────────────────────────────

function NavLogo() {
  return (
    <svg width="35" height="34" viewBox="0 0 35 34" fill="none">
      <g clipPath="url(#nav-logo)">
        <path d="M2.94141 27.583L7.28741 18.3755L14.5969 21.8685L2.94141 27.583Z" fill="white" />
        <path
          d="M7.62695 17.5495L13.9145 3.8925L15.55 0L18.4125 6.4635L14.8685 14.441L25.4995 20.2175L28.09 27.232L7.62695 17.5495Z"
          fill="#007AFF"
        />
      </g>
      <defs>
        <clipPath id="nav-logo">
          <rect width="34.5" height="33.5" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function FooterLogo() {
  return (
    <svg width="37" height="36" viewBox="0 0 37 36" fill="none">
      <g clipPath="url(#footer-logo)">
        <path d="M3.15479 29.6411L7.81479 19.7471L15.6538 23.5001L3.15479 29.6411Z" fill="white" />
        <path
          d="M8.1792 18.859L14.9222 4.183L16.6772 0L19.7462 6.946L15.9462 15.519L27.3462 21.726L30.1252 29.264L8.1792 18.859Z"
          fill="#007AFF"
        />
      </g>
      <defs>
        <clipPath id="footer-logo">
          <rect width="37" height="36" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function BehanceIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path
        d="M8.75 4.375C8.75 4.25897 8.79609 4.14769 8.87814 4.06564C8.96019 3.98359 9.07147 3.9375 9.1875 3.9375H12.6875C12.8035 3.9375 12.9148 3.98359 12.9969 4.06564C13.0789 4.14769 13.125 4.25897 13.125 4.375C13.125 4.49103 13.0789 4.60231 12.9969 4.68436C12.9148 4.76641 12.8035 4.8125 12.6875 4.8125H9.1875C9.07147 4.8125 8.96019 4.76641 8.87814 4.68436C8.79609 4.60231 8.75 4.49103 8.75 4.375ZM7.4375 8.64062C7.4375 9.24979 7.19551 9.83401 6.76476 10.2648C6.33401 10.6955 5.74979 10.9375 5.14062 10.9375H1.75C1.63397 10.9375 1.52269 10.8914 1.44064 10.8094C1.35859 10.7273 1.3125 10.616 1.3125 10.5V3.5C1.3125 3.38397 1.35859 3.27269 1.44064 3.19064C1.52269 3.10859 1.63397 3.0625 1.75 3.0625H4.92188C5.34031 3.06295 5.74887 3.1897 6.09408 3.42617C6.43929 3.66264 6.70508 3.99782 6.85665 4.38784C7.00823 4.77786 7.03853 5.20455 6.9436 5.61208C6.84867 6.01961 6.63293 6.38898 6.32461 6.67188C6.66419 6.87615 6.94514 7.16481 7.14015 7.50979C7.33516 7.85477 7.43759 8.24434 7.4375 8.64062ZM2.1875 6.34375H4.92188C5.24096 6.34375 5.54698 6.21699 5.77261 5.99136C5.99824 5.76573 6.125 5.45971 6.125 5.14062C6.125 4.82154 5.99824 4.51552 5.77261 4.28989C5.54698 4.06426 5.24096 3.9375 4.92188 3.9375H2.1875V6.34375ZM6.5625 8.64062C6.5625 8.4539 6.52572 8.26901 6.45427 8.0965C6.38281 7.92399 6.27808 7.76724 6.14604 7.63521C6.01401 7.50317 5.85726 7.39844 5.68475 7.32698C5.51224 7.25553 5.32735 7.21875 5.14062 7.21875H2.1875V10.0625H5.14062C5.32735 10.0625 5.51224 10.0257 5.68475 9.95427C5.85726 9.88281 6.01401 9.77808 6.14604 9.64604C6.27808 9.51401 6.38281 9.35726 6.45427 9.18475C6.52572 9.01224 6.5625 8.82735 6.5625 8.64062ZM13.5625 8.3125C13.5625 8.42853 13.5164 8.53981 13.4344 8.62186C13.3523 8.70391 13.241 8.75 13.125 8.75H9.24219C9.32455 9.06923 9.49541 9.35871 9.73509 9.58509C9.97477 9.81146 10.2735 9.96553 10.5969 10.0295C10.9204 10.0935 11.2553 10.0649 11.5631 9.94688C11.871 9.82887 12.1392 9.6263 12.337 9.3625C12.4147 9.27782 12.5684 9.20008 12.6253 9.19198C12.6822 9.18388 12.7401 9.18706 12.7958 9.20136C12.8515 9.21565 12.9038 9.24077 12.9497 9.27527C12.9957 9.30978 13.0344 9.353 13.0637 9.40247C13.0929 9.45195 13.1121 9.50669 13.1202 9.5636C13.1283 9.6205 13.1252 9.67844 13.1109 9.73411C13.0966 9.78978 13.0715 9.84208 13.037 9.88805C12.6628 10.3865 12.1235 10.7356 11.5155 10.8729C10.9076 11.0101 10.2706 10.9266 9.71857 10.6372C9.16657 10.3477 8.73556 9.87134 8.50265 9.29321C8.26975 8.71509 8.25016 8.07295 8.44738 7.4817C8.6446 6.89045 9.04576 6.38867 9.5791 6.06613C10.1124 5.74359 10.7431 5.62135 11.3583 5.72127C11.9736 5.82119 12.5331 6.13676 12.937 6.61152C13.3408 7.08627 13.5625 7.68922 13.5625 8.3125ZM12.6328 7.875C12.5364 7.49857 12.3175 7.16492 12.0106 6.92666C11.7036 6.68839 11.3261 6.55907 10.9375 6.55907C10.5489 6.55907 10.1714 6.68839 9.86445 6.92666C9.55749 7.16492 9.33857 7.49857 9.24219 7.875H12.6328Z"
        fill="currentColor"
      />
    </svg>
  );
}

// ─── Reusable Components ────────────────────────────────────────────────────

function SocialBtn({
  icon: Icon,
  href = "#",
  dark = true,
  iconSize = 14,
  btnSize = 26,
  isCustom = false,
}: {
  icon: any;
  href?: string;
  dark?: boolean;
  iconSize?: number;
  btnSize?: number;
  isCustom?: boolean;
}) {
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative flex items-center justify-center flex-shrink-0 rounded-full transition-colors ${
        dark ? "bg-black text-white hover:bg-black/80" : "bg-white/10 text-white hover:bg-white/20"
      }`}
      style={{ width: btnSize, height: btnSize }}
    >
      <span
        className={`absolute inset-0 rounded-full border ${
          dark ? "border-black/30" : "border-white/30"
        }`}
      />
      {isCustom ? <Icon size={iconSize} /> : <Icon size={iconSize} strokeWidth={2} />}
    </motion.a>
  );
}

// ─── Hero Section ───────────────────────────────────────────────────────────

function HeroSection() {
  const [isMuted, setIsMuted] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const heroVideoSrc = assetPath("hero.mp4");

  return (
    <section id="hero" className="relative bg-black text-white overflow-hidden h-screen min-h-screen w-full flex flex-col justify-end select-none">
      {/* ─── Responsive Full Screen Local Video Background ─────────────────────── */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 bg-black pointer-events-none">
        <video
          src={heroVideoSrc}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105 pointer-events-none"
        />
        {/* Subtle Dark Gradient Overlay for optimal text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30 pointer-events-none z-10" />
      </div>

      {/* ─── Sound Toggle Button (Bottom Right) ────────────────────── */}
      <div className="absolute bottom-10 sm:bottom-16 right-6 sm:right-10 z-30">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="flex items-center gap-2 bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
        >
          {isMuted ? (
            <>
              <VolumeX size={16} className="text-red-400" />
              <span>Sound Off</span>
            </>
          ) : (
            <>
              <Volume2 size={16} className="text-[#31EE33] animate-pulse" />
              <span>Sound On</span>
            </>
          )}
        </button>
      </div>

      {/* ─── Hero Content Overlay (Bottom Left) ───────────────────────────────── */}
      <div className="w-full max-w-[1340px] mx-auto px-6 sm:px-10 pt-28 sm:pt-36 pb-10 sm:pb-16 z-20 flex flex-col justify-end">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] xl:text-[50px] font-bold tracking-tight leading-[1.08] text-white font-sans drop-shadow-md">
            Akash.
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] xl:text-[50px] font-bold tracking-tight leading-[1.08] text-white/70 mb-3 sm:mb-4 font-sans drop-shadow-md">
            UI UX Designer.
          </h2>

          {/* Subtitle Paragraph */}
          <p className="text-white/90 text-xs sm:text-sm md:text-base font-normal leading-relaxed max-w-lg mb-5 sm:mb-6 font-sans drop-shadow-sm">
            Product &amp; Interaction Designer crafting distinct brand identities, pixel-perfect user interfaces, and automated Figma utility systems.
          </p>

          {/* Action Pill Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-[#111827] hover:bg-white/95 font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-full flex items-center gap-2 text-xs sm:text-sm shadow-xl transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              <span>Hire me</span>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm transition-all cursor-pointer"
            >
              About me
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── My Products Section ─────────────────────────────────────────────────────

const products = [
  {
    image: assetPath("cloud bestie.png"),
    category: "CloudBestie",
    title: "CloudBestie - Cloud Locker",
    alt: "CloudBestie",
    slug: "cloud-bestie",
    externalUrl: "https://www.facebook.com",
  },
  {
    image: assetPath("background remover.png"),
    category: "Background Remover",
    title: "BGWrap-Background Remover",
    alt: "OceanCache",
    slug: "bg-wrap",
    externalUrl: "https://www.facebook.com",
  },
  {
    image: assetPath("dpicon.png"),
    category: "Image Generation",
    title: "Dpicon - AI image generation",
    alt: "Dpicon",
    slug: "dpicon",
    externalUrl: "https://dpicon.framer.website/",
  },
];

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <div className="h-[2px] w-12 bg-[#007AFF]" />
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1A1A]">
        {title}
      </h2>
    </div>
  );
}

function MyProductsSection() {
  return (
    <section id="projects" className="border-b border-black/10 px-8 py-20">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader title="Websites" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, idx) => (
            <motion.div 
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <a 
                href={p.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer block"
              >
                <div className="rounded-2xl aspect-square overflow-hidden mb-4 transition-transform duration-500 group-hover:scale-105">
                  <img
                    src={p.image}
                    alt={p.alt}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <p className="text-[#666] text-xs font-semibold uppercase tracking-widest mb-2 px-1">
                  {p.category}
                </p>
                <h3 className="text-[#1A1A1A] text-lg sm:text-xl font-semibold leading-tight px-1 group-hover:text-[#007AFF] transition-colors">
                  {p.title}
                </h3>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Apps Section ────────────────────────────────────────────────────────────

const apps = [
  {
    image: assetPath("flint.png"),
    category: "AI Mobile App",
    title: "Flint – AI-Powered",
    alt: "Flint",
    slug: "flint",
  },
  {
    image: assetPath("spark.png"),
    category: "Dating & Social App",
    title: "Spark – feel the spark",
    alt: "Spark",
    slug: "spark",
  },
  {
    image: assetPath("legal link.png"),
    category: "Legal Tech App",
    title: "Legal Link – A Smart",
    alt: "Legal Tech",
    slug: "legal-link",
  },
];

function AppsSection() {
  return (
    <section className="border-b border-black/10 px-8 py-20">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader title="Apps" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {apps.map((app, idx) => (
            <motion.div 
              key={app.title} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Link 
                to={`/project/${app.slug}`}
                className="group cursor-pointer block text-center"
              >
                <div className="rounded-2xl aspect-square overflow-hidden mb-4 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  <img
                    src={app.image}
                    alt={app.alt}
                    className="w-full h-full object-contain rounded-2xl"
                  />
                </div>
                <p className="text-[#666] text-xs font-semibold uppercase tracking-widest mb-2 px-1 text-center">
                  {app.category}
                </p>
                <h3 className="text-[#1A1A1A] text-lg sm:text-xl font-semibold leading-tight px-1 text-center group-hover:text-[#007AFF] transition-colors">
                  {app.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Figma Plugins Section ───────────────────────────────────────────────────

const plugins = [
  {
    image: assetPath("gray scale plugin.jpg"),
    title: "Grayscale wireframe Conveter",
    alt: "Grayscale wireframe Converter",
    slug: "grayscale-converter",
    externalUrl: "https://www.figma.com/community/plugin/1498582630091227441",
  },
  {
    image: assetPath("Dpicon plugin.jpg"),
    title: "Dpicon - SVG Icons",
    alt: "OceanCache",
    slug: "dpicon-svg",
    externalUrl: "https://www.figma.com/community/plugin/1488603996276952817",
  },
  {
    image: assetPath("BGWRAP plugin.jpg"),
    title: "BGWRAP - Background remover",
    alt: "bgwrap",
    slug: "bgwrap-plugin",
    externalUrl: "https://www.figma.com/community/plugin/1500147712889678037",
  },
];

function FigmaPluginsSection() {
  return (
    <section className="border-b border-black/10 px-8 py-20">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader title="Figma Plugins" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plugins.map((p, idx) => {
            if (p.externalUrl) {
              return (
                <motion.a 
                  href={p.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer block"
                >
                  <div className="rounded-2xl aspect-square overflow-hidden mb-4 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                    <img
                      src={p.image}
                      alt={p.alt}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  <h3 className="text-[#1A1A1A] text-lg sm:text-xl font-semibold leading-tight px-1 group-hover:text-[#007AFF] transition-colors">
                    {p.title}
                  </h3>
                </motion.a>
              );
            }
            return (
              <MotionLink 
                to={`/project/${p.slug}`}
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer block"
              >
                <div className="rounded-2xl aspect-square overflow-hidden mb-4 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  <img
                    src={p.image}
                    alt={p.alt}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-[#1A1A1A] text-lg sm:text-xl font-semibold leading-tight px-1 group-hover:text-[#007AFF] transition-colors">
                  {p.title}
                </h3>
              </MotionLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Graphic Designs Section ─────────────────────────────────────────────────

const graphicDesigns = [
  {
    image: assetPath("memo.png"),
    title: "MEMO",
    alt: "Memo",
    slug: "memo",
  },
  {
    image: assetPath("trumphcard .png"),
    title: "TRUMPHCARD",
    alt: "Trumphcard",
    slug: "trumphcard",
  },
];

const marqueeImages = [
  assetPath("graphic 1.png"),
  assetPath("graphic 2.png"),
  assetPath("graphic 3.png"),
  assetPath("graphic 4.png"),
  assetPath("graphic 5.png"),
];

function GraphicDesignsSection() {
  return (
    <section className="border-b border-black/10 py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 mb-20">
        <SectionHeader title="Graphic Designs" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[600px]">
          {graphicDesigns.map((d, idx) => (
            <MotionLink 
              to={`/project/${d.slug}`} 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center group"
            >
              <div className="overflow-hidden rounded-2xl w-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <img
                  src={d.image}
                  alt={d.alt}
                  className="w-full aspect-[4/3] object-contain rounded-2xl"
                />
              </div>
              <h3 className="text-[#1A1A1A] text-lg sm:text-xl font-semibold text-center mt-4 group-hover:text-[#007AFF] transition-colors">
                {d.title}
              </h3>
            </MotionLink>
          ))}
        </div>
      </div>

      {/* Scrolling marquee */}
      <div className="relative py-10 bg-transparent">
        <div
          className="flex gap-4 animate-marquee"
          style={{ width: "max-content" }}
        >
          {[...marqueeImages, ...marqueeImages, ...marqueeImages].map((src, i) => (
            <div key={i} className="flex-shrink-0 w-[320px] sm:w-[400px] h-[480px] sm:h-[560px] overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105">
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact Section ─────────────────────────────────────────────────────────

function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
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
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: any) {
      console.error("EmailJS error:", err);
      setError("Failed to send message. Please try again or email directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-8 py-24 bg-white relative overflow-hidden">
       {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-[0.03] select-none text-[20vw] font-black whitespace-nowrap overflow-hidden">
        HAVE A PROJECT? HAVE A PROJECT? HAVE A PROJECT?
      </div>

      <div className="max-w-[1400px] mx-auto z-10 relative">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          {/* Left: text */}
          <div className="flex-1">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A1A] mb-8"
            >
              LET'S <br/><span className="text-[#007AFF]">TALK.</span>
            </motion.h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-4">
              Ready to Create Something Amazing Together?
            </h3>
            <p className="text-[#555] text-base sm:text-lg font-normal leading-relaxed mb-8">
              As a passionate UI/UX designer, I love turning ideas into
              intuitive, user-friendly experiences. Let's collaborate to bring your vision to life.
            </p>
            <div className="flex flex-col gap-4">
              <a href="mailto:akashuxui@gmail.com" className="flex items-center gap-3 text-base sm:text-lg font-semibold text-[#1A1A1A] hover:text-[#007AFF] transition-colors">
                <span className="p-3 bg-black text-white rounded-full"><Mail size={24}/></span>
                akashuxui@gmail.com
              </a>
              <a href="tel:+916369957006" className="flex items-center gap-3 text-base sm:text-lg font-semibold text-[#1A1A1A] hover:text-[#007AFF] transition-colors">
                <span className="p-3 bg-black text-white rounded-full"><Phone size={24}/></span>
                +91 63699 57006
              </a>
            </div>
          </div>

          {/* Right: form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full p-8 md:p-12 rounded-[40px] bg-[#F9FAFB] border border-black/5 shadow-2xl shadow-black/5"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    className="w-full h-14 px-6 rounded-2xl text-base text-[#1A1A1A] bg-white border border-black/10 outline-none focus:border-[#007AFF] focus:ring-4 focus:ring-[#007AFF]/10 transition-all"
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
                    className="w-full h-14 px-6 rounded-2xl text-base text-[#1A1A1A] bg-white border border-black/10 outline-none focus:border-[#007AFF] focus:ring-4 focus:ring-[#007AFF]/10 transition-all"
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
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="w-full px-6 py-5 rounded-2xl text-base text-[#1A1A1A] bg-white border border-black/10 outline-none focus:border-[#007AFF] focus:ring-4 focus:ring-[#007AFF]/10 transition-all resize-none"
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm font-medium text-center">{error}</p>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={submitting || submitted}
                className={`w-full h-16 rounded-2xl text-lg font-bold transition-all flex items-center justify-center gap-2 ${
                  submitted
                    ? "bg-[#007AFF] text-white"
                    : "bg-black text-white hover:bg-[#333] disabled:opacity-70"
                }`}
              >
                {submitting ? (
                  <>
                    <span>Sending...</span>
                    <Loader2 size={20} className="animate-spin" />
                  </>
                ) : submitted ? (
                  "Message Sent!"
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
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="bg-[#FFFFFF] font-inter text-[#1A1A1A] selection:bg-[#007AFF] selection:text-white">
      <main>
        <HeroSection />
        <AppsSection />
        <FigmaPluginsSection />
        <MyProductsSection />
        <GraphicDesignsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
