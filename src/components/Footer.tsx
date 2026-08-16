import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Globe, Mail, Linkedin, Phone } from "lucide-react";
import { FOOTER_DATA, assetPath } from "../data/portfolioData";

export function FooterLogo() {
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

export function BehanceIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M344.1,233.6c-28.9,0-32.9,28.8-32.9,28.8h61.4S373,233.6,344.1,233.6Z" fill="currentColor"/>
      <path d="M204.8,262.4H150.4v50h51.7c7.8-.2,22.4-2.4,22.4-24.3C224.5,262.1,204.8,262.4,204.8,262.4Z" fill="currentColor"/>
      <path d="M256,32C132.3,32,32,132.3,32,256S132.3,480,256,480,480,379.7,480,256,379.7,32,256,32Zm47.2,137.6h77.1v23H303.2v-23Zm-39,120.8c0,57-59.4,55.2-59.4,55.2H107.6v-187h97.2c29.6,0,52.9,16.3,52.9,49.8S229.2,244,229.2,244C266.8,244,264.2,290.4,264.2,290.4Zm144.2-3.1H311.5c0,34.7,32.9,32.5,32.9,32.5c31.1,0,30-20.1,30-20.1h32.9c0,53.4-64,49.7-64,49.7c-76.7,0-71.8-71.5-71.8-71.5s-.1-71.8,71.8-71.8C419,206.2,408.4,287.3,408.4,287.3Z" fill="currentColor"/>
      <path d="M218,211.3c0-19.4-13.2-19.4-13.2-19.4H150.4v41.7h51C210.2,233.6,218,230.7,218,211.3Z" fill="currentColor"/>
    </svg>
  );
}

export function SocialBtn({
  icon: Icon,
  href = "#",
  dark = true,
  iconSize = 24,
  btnSize = 48,
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

interface FooterProps {
  videoSrc?: string;
}

export default function Footer({ videoSrc = assetPath("anime.webm") }: FooterProps) {
  return (
    <footer className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12">
      <div className="w-full flex justify-center p-0 mb-6">
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="max-h-48 md:max-h-64 object-contain pointer-events-none p-0 m-0 block"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full bg-black text-white px-6 sm:px-12 py-8 sm:py-10 rounded-[32px] sm:rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-8"
      >
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <Link to="/" className="inline-block transition-transform hover:scale-105">
            <FooterLogo />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm font-bold uppercase tracking-widest text-white/90">
          <Link to="/" className="hover:text-[#007AFF] transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-[#007AFF] transition-colors">
            About
          </Link>
          <a
            href={FOOTER_DATA.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#007AFF] transition-colors"
          >
            Resumé
          </a>
          <Link to="/design-philosophy" className="hover:text-[#007AFF] transition-colors">
            Philosophy
          </Link>
          <Link to="/contact" className="hover:text-[#007AFF] transition-colors">
            Contact
          </Link>
        </div>

        {/* Social Buttons */}
        <div className="flex items-center gap-3">
          <SocialBtn
            icon={BehanceIcon}
            href={FOOTER_DATA.behance}
            isCustom
            dark={false}
            btnSize={44}
            iconSize={22}
          />
          <SocialBtn
            icon={Mail}
            href={`mailto:${FOOTER_DATA.email}`}
            dark={false}
            btnSize={44}
            iconSize={22}
          />
          <SocialBtn
            icon={Linkedin}
            href={FOOTER_DATA.linkedin}
            dark={false}
            btnSize={44}
            iconSize={22}
          />
          <SocialBtn
            icon={Phone}
            href="tel:+916369957006"
            dark={false}
            btnSize={44}
            iconSize={22}
          />
        </div>
      </motion.div>
    </footer>
  );
}
