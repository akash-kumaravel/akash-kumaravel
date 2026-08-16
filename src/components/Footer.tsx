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
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path
        d="M8.75 4.375C8.75 4.25897 8.79609 4.14769 8.87814 4.06564C8.96019 3.98359 9.07147 3.9375 9.1875 3.9375H12.6875C12.8035 3.9375 12.9148 3.98359 12.9969 4.06564C13.0789 4.14769 13.125 4.25897 13.125 4.375C13.125 4.49103 13.0789 4.60231 12.9969 4.68436C12.9148 4.76641 12.8035 4.8125 12.6875 4.8125H9.1875C9.07147 4.8125 8.96019 4.76641 8.87814 4.68436C8.79609 4.60231 8.75 4.49103 8.75 4.375ZM7.4375 8.64062C7.4375 9.24979 7.19551 9.83401 6.76476 10.2648C6.33401 10.6955 5.74979 10.9375 5.14062 10.9375H1.75C1.63397 10.9375 1.52269 10.8914 1.44064 10.8094C1.35859 10.7273 1.3125 10.616 1.3125 10.5V3.5C1.3125 3.38397 1.35859 3.27269 1.44064 3.19064C1.52269 3.10859 1.63397 3.0625 1.75 3.0625H4.92188C5.34031 3.06295 5.74887 3.1897 6.09408 3.42617C6.43929 3.66264 6.70508 3.99782 6.85665 4.38784C7.00823 4.77786 7.03853 5.20455 6.9436 5.61208C6.84867 6.01961 6.63293 6.38898 6.32461 6.67188C6.66419 6.87615 6.94514 7.16481 7.14015 7.50979C7.33516 7.85477 7.43759 8.24434 7.4375 8.64062ZM2.1875 6.34375H4.92188C5.24096 6.34375 5.54698 6.21699 5.77261 5.99136C5.99824 5.76573 6.125 5.45971 6.125 5.14062C6.125 4.82154 5.99824 4.51552 5.77261 4.28989C5.54698 4.06426 5.24096 3.9375 4.92188 3.9375H2.1875V6.34375ZM6.5625 8.64062C6.5625 8.4539 6.52572 8.26901 6.45427 8.0965C6.38281 7.92399 6.27808 7.76724 6.14604 7.63521C6.01401 7.50317 5.85726 7.39844 5.68475 7.32698C5.51224 7.25553 5.32735 7.21875 5.14062 7.21875H2.1875V10.0625H5.14062C5.32735 10.0625 5.51224 10.0257 5.68475 9.95427C5.85726 9.88281 6.01401 9.77808 6.14604 9.64604C6.27808 9.51401 6.38281 9.35726 6.45427 9.18475C6.52572 9.01224 6.5625 8.82735 6.5625 8.64062ZM13.5625 8.3125C13.5625 8.42853 13.5164 8.53981 13.4344 8.62186C13.3523 8.70391 13.241 8.75 13.125 8.75H9.24219C9.32455 9.06923 9.49541 9.35871 9.73509 9.58509C9.97477 9.81146 10.2735 9.96553 10.5969 10.0295C10.9204 10.0935 11.2553 10.0649 11.5631 9.94688C11.871 9.82887 12.1392 9.6263 12.337 9.3625C12.4147 9.27782 12.5684 9.20008 12.6253 9.19198C12.6822 9.18388 12.7401 9.18706 12.7958 9.20136C12.8515 9.21565 12.9038 9.24077 12.9497 9.27527C12.9957 9.30978 13.0344 9.353 13.0637 9.40247C13.0929 9.45195 13.1121 9.50669 13.1202 9.5636C13.1283 9.6205 13.1252 9.67844 13.1109 9.73411C13.0966 9.78978 13.0715 9.84208 13.037 9.88805C12.6628 10.3865 12.1235 10.7356 11.5155 10.8729C10.9076 11.0101 10.2706 10.9266 9.71857 10.6372C9.16657 10.3477 8.73556 9.87134 8.50265 9.29321C8.26975 8.71509 8.25016 8.07295 8.44738 7.4817C8.6446 6.89045 9.04576 6.38867 9.5791 6.06613C10.1124 5.74359 10.7431 5.62135 11.3583 5.72127C11.9736 5.82119 12.5331 6.13676 12.937 6.61152C13.3408 7.08627 13.5625 7.68922 13.5625 8.3125ZM12.6328 7.875C12.5364 7.49857 12.3175 7.16492 12.0106 6.92666C11.7036 6.68839 11.3261 6.55907 10.9375 6.55907C10.5489 6.55907 10.1714 6.68839 9.86445 6.92666C9.55749 7.16492 9.33857 7.49857 9.24219 7.875H12.6328Z"
        fill="currentColor"
      />
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
            href="https://www.behance.net/akashuxui"
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
