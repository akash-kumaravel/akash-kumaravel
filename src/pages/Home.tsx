import React from "react";
import { 
  Globe, 
  Mail, 
  Linkedin, 
  ExternalLink 
} from "lucide-react";
import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";

import { assetPath } from "../data/portfolioData";

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
    <svg width={size} height={size} viewBox="0 0 512 512" fill="none">
      <path d="M344.1,233.6c-28.9,0-32.9,28.8-32.9,28.8h61.4S373,233.6,344.1,233.6Z" fill="currentColor"/>
      <path d="M204.8,262.4H150.4v50h51.7c7.8-.2,22.4-2.4,22.4-24.3C224.5,262.1,204.8,262.4,204.8,262.4Z" fill="currentColor"/>
      <path d="M256,32C132.3,32,32,132.3,32,256S132.3,480,256,480,480,379.7,480,256,379.7,32,256,32Zm47.2,137.6h77.1v23H303.2v-23Zm-39,120.8c0,57-59.4,55.2-59.4,55.2H107.6v-187h97.2c29.6,0,52.9,16.3,52.9,49.8S229.2,244,229.2,244C266.8,244,264.2,290.4,264.2,290.4Zm144.2-3.1H311.5c0,34.7,32.9,32.5,32.9,32.5c31.1,0,30-20.1,30-20.1h32.9c0,53.4-64,49.7-64,49.7c-76.7,0-71.8-71.5-71.8-71.5s-.1-71.8,71.8-71.8C419,206.2,408.4,287.3,408.4,287.3Z" fill="currentColor"/>
      <path d="M218,211.3c0-19.4-13.2-19.4-13.2-19.4H150.4v41.7h51C210.2,233.6,218,230.7,218,211.3Z" fill="currentColor"/>
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



// ─── My Products Section ─────────────────────────────────────────────────────

const products = [
  {
    image: assetPath("background remover.png"),
    category: "Background Remover",
    title: "BGWrap-Background Remover",
    alt: "OceanCache",
    slug: "bg-wrap",
    externalUrl: "https://bgwrap.vercel.app/",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
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
    <section id="works" className="border-b border-black/10 px-6 sm:px-8 pt-8 sm:pt-12 pb-20 sm:pb-24">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader title="Apps" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
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
    image: assetPath("BGWRAP plugin.jpg"),
    title: "BGWRAP - Background remover",
    alt: "bgwrap",
    slug: "bgwrap-plugin",
    externalUrl: "https://www.figma.com/community/plugin/1500147712889678037",
  },
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
];

function FigmaPluginsSection() {
  return (
    <section className="border-b border-black/10 px-8 py-20">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader title="Figma Plugins" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
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

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="bg-[#FFFFFF] font-inter text-[#1A1A1A] selection:bg-[#007AFF] selection:text-white">
      <main>
        <AppsSection />
        <FigmaPluginsSection />
        <MyProductsSection />
        <GraphicDesignsSection />
      </main>
    </div>
  );
}
