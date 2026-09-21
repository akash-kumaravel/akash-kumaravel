import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown,
  ArrowUpRight,
  Mail,
  Home,
  Briefcase,
  User,
  BookOpen,
  FileText
} from 'lucide-react';
import { FOOTER_DATA } from '../data/portfolioData';

interface LeftSidebarProps {
  activePage?: string;
  onNavigateHome?: () => void;
}

export default function LeftSidebar({ activePage, onNavigateHome }: LeftSidebarProps) {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always visible near top of screen
      if (currentScrollY <= 20) {
        setIsHeaderVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      const diff = currentScrollY - lastScrollY.current;
      if (Math.abs(diff) > 6) {
        if (diff > 0) {
          // Scrolling down: hide header (unless dropdown is open)
          if (!mobileDrawerOpen) {
            setIsHeaderVisible(false);
          }
        } else {
          // Scrolling up: reveal header
          setIsHeaderVisible(true);
        }
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileDrawerOpen]);

  // Reset on route change
  useEffect(() => {
    setIsHeaderVisible(true);
    setMobileDrawerOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const isAbout = location.pathname === '/about';
  const isPhilosophy = location.pathname === '/design-philosophy' || location.pathname === '/philosophy';
  const isContact = location.pathname === '/contact';

  const handleSectionScroll = (sectionId: string) => {
    setMobileDrawerOpen(false);
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  const navItems = [
    {
      label: 'Works',
      icon: Briefcase,
      action: () => handleSectionScroll('works'),
      isActive: isHome && location.hash === '#works',
    },
    {
      label: 'Stories',
      icon: User,
      action: () => {
        setMobileDrawerOpen(false);
        navigate('/about');
      },
      isActive: isAbout,
    },
    {
      label: 'Philosophy',
      icon: BookOpen,
      action: () => {
        setMobileDrawerOpen(false);
        navigate('/design-philosophy');
      },
      isActive: isPhilosophy,
    },
    {
      label: 'Resumé',
      icon: FileText,
      isExternal: true,
      href: FOOTER_DATA.resume,
    },
  ];

  return (
    <>
      {/* ─── Mobile Floating Header with Down Arrow ───────────────────────────── */}
      <div 
        className={`lg:hidden fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-black/10 px-5 py-3 flex items-center justify-between transition-transform duration-300 ease-in-out ${
          isHeaderVisible || mobileDrawerOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.08) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      >
        <Link 
          to="/" 
          onClick={() => setMobileDrawerOpen(false)}
          className="flex items-center gap-2.5"
        >
          <img 
            src="https://akashuiux.vercel.app/assets/profile.jpg" 
            alt="Akash Kumaravel" 
            className="w-8 h-8 rounded-lg object-cover object-top border border-black/10 shadow-xs" 
            referrerPolicy="no-referrer"
          />
          <div>
            <div className="font-bold text-sm text-[#111111] leading-tight">Akash Kumaravel</div>
            <div className="text-[11px] text-gray-500 font-medium">UI/UX Designer</div>
          </div>
        </Link>

        {/* Down Arrow Toggle Button */}
        <button
          onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-gray-50 active:scale-95 text-gray-900 text-xs font-semibold transition-all border border-black/10 shadow-xs cursor-pointer"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileDrawerOpen}
        >
          <span>Menu</span>
          <ChevronDown 
            size={15} 
            className={`transition-transform duration-300 ease-out text-gray-700 ${mobileDrawerOpen ? 'rotate-180' : ''}`} 
          />
        </button>
      </div>

      {/* ─── Mobile Dropdown Menu (Slides Down from Top) ───────────────────────── */}
      <AnimatePresence>
        {mobileDrawerOpen && (
          <>
            {/* Dark backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileDrawerOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-xs z-50"
            />

            {/* Top Sheet / Dropdown */}
            <motion.div
              initial={{ y: '-100%', opacity: 0.6 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-100%', opacity: 0.6 }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="lg:hidden fixed top-0 left-0 right-0 max-h-[90vh] overflow-y-auto bg-white z-50 border-b border-black/10 shadow-2xl rounded-b-3xl px-5 pt-4 pb-6 flex flex-col gap-4"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.08) 1px, transparent 1px)',
                backgroundSize: '16px 16px',
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-black/10">
                <div className="flex items-center gap-2.5">
                  <img 
                    src="https://akashuiux.vercel.app/assets/profile.jpg" 
                    alt="Akash Kumaravel" 
                    className="w-8 h-8 rounded-lg object-cover object-top border border-black/10 shadow-xs" 
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="font-bold text-sm text-[#111111]">Akash Kumaravel</div>
                    <div className="text-[11px] text-gray-500">UI/UX &amp; Product Designer</div>
                  </div>
                </div>

                <button
                  onClick={() => setMobileDrawerOpen(false)}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white hover:bg-gray-50 active:scale-95 text-gray-800 text-xs font-semibold transition-all border border-black/10 cursor-pointer shadow-xs"
                  aria-label="Close menu"
                >
                  <span>Close</span>
                  <ChevronDown size={15} className="rotate-180 text-gray-700 transition-transform duration-300" />
                </button>
              </div>

              {/* Status */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-black/10 text-xs text-gray-700 self-start shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-medium text-[11px]">Open to new opportunities</span>
              </div>

              {/* Nav Items: Compact 2-Column Grid */}
              <nav className="grid grid-cols-2 gap-2" aria-label="Mobile Navigation">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  if (item.isExternal) {
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileDrawerOpen(false)}
                        className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold text-gray-700 bg-white hover:bg-neutral-50 border border-black/10 transition-colors shadow-2xs"
                      >
                        <span className="flex items-center gap-2 truncate">
                          <Icon size={15} className="text-gray-500 shrink-0" />
                          <span className="truncate">{item.label}</span>
                        </span>
                        <ArrowUpRight size={13} className="text-gray-400 shrink-0" />
                      </a>
                    );
                  }
                  return (
                    <button
                      key={item.label}
                      onClick={item.action}
                      className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all text-left cursor-pointer border shadow-2xs truncate ${
                        item.isActive
                          ? 'bg-[#111111] text-white border-[#111111] shadow-xs'
                          : 'bg-white text-gray-700 hover:bg-neutral-50 border-black/10'
                      }`}
                    >
                      <Icon size={15} className={`shrink-0 ${item.isActive ? 'text-white' : 'text-gray-500'}`} />
                      <span className="truncate">{item.label}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Bottom Actions */}
              <div className="flex flex-col gap-3 pt-3 border-t border-black/10">
                <button
                  onClick={() => {
                    setMobileDrawerOpen(false);
                    navigate('/contact');
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#111111] hover:bg-black text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <Mail size={15} />
                  Hire Me
                </button>

                <div className="flex items-center justify-center gap-4 text-xs text-gray-500 pt-1">
                  <a href={FOOTER_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-black">LinkedIn</a>
                  <span>•</span>
                  <a href={FOOTER_DATA.behance} target="_blank" rel="noopener noreferrer" className="hover:text-black">Behance</a>
                  <span>•</span>
                  <a href={FOOTER_DATA.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-black">X (Twitter)</a>
                </div>

                <div className="flex items-center justify-between text-[11px] text-gray-400 pt-1">
                  <span>Tamil Nadu, India</span>
                  <span>&copy; {new Date().getFullYear()}</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ─── Desktop Left Fixed Container (STRICTLY NON-SCROLLABLE) ─────────── */}
      <aside 
        id="desktop-left-sidebar"
        className="hidden lg:flex fixed top-0 left-0 bottom-0 h-screen max-h-screen w-80 xl:w-[320px] bg-white border-r border-black/10 z-40 flex-col justify-between p-6 xl:p-7 select-none overflow-hidden"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.08) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      >
        {/* Top Block: Identity & Bio */}
        <div className="flex flex-col gap-5">
          {/* Header Identity */}
          <Link 
            to="/" 
            className="group cursor-pointer block"
            onClick={() => {
              if (location.pathname !== '/') {
                navigate('/');
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <div className="flex items-center gap-3">
              <img 
                src="https://akashuiux.vercel.app/assets/profile.jpg" 
                alt="Akash Kumaravel" 
                className="w-10 h-10 rounded-xl object-cover object-top border border-black/10 shadow-xs group-hover:scale-105 transition-transform" 
                referrerPolicy="no-referrer"
              />
              <div>
                <h1 className="text-lg xl:text-xl font-bold tracking-tight text-[#111111] leading-tight">
                  Akash Kumaravel
                </h1>
                <p className="text-xs text-gray-500 font-medium">
                  UI/UX &amp; Product Designer
                </p>
              </div>
            </div>
          </Link>

          {/* Real-time Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-black/10 text-xs text-gray-700 self-start shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium text-[11px]">Open to new opportunities</span>
          </div>

          {/* Compact Bio with Tag Highlights */}
          <div className="space-y-2 text-[13px] leading-relaxed text-[#555555]">
            <p>
              <span className="inline-block px-1.5 py-0.5 bg-[#f0f0f2] text-[#111111] font-medium rounded text-[12px]">3+ years</span> designing digital products &amp; design systems at <span className="inline-block px-1.5 py-0.5 bg-[#f0f0f2] text-[#111111] font-medium rounded text-[12px]">Feather Softwares</span>.
            </p>
            <p className="text-[12.5px] text-[#666666]">
              Previously at <span className="inline-block px-1.5 py-0.5 bg-[#f0f0f2] text-[#111111] font-medium rounded text-[11.5px]">Memo Infotech</span> and <span className="inline-block px-1.5 py-0.5 bg-[#f0f0f2] text-[#111111] font-medium rounded text-[11.5px]">Hyundai Motor</span>.
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-black/5 w-full" />

          {/* Primary Navigation Menu: Compact 2-Column Grid */}
          <nav className="flex flex-col gap-1.5" aria-label="Main Navigation">
            <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 px-1">
              Explore
            </div>
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                if (item.isExternal) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-gray-700 bg-white/90 hover:text-black hover:bg-neutral-50 border border-black/10 transition-all group shadow-2xs"
                    >
                      <span className="flex items-center gap-1.5 truncate">
                        <Icon size={14} className="text-gray-400 group-hover:text-black transition-colors shrink-0" />
                        <span className="truncate">{item.label}</span>
                      </span>
                      <ArrowUpRight size={12} className="text-gray-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                    </a>
                  );
                }
                return (
                  <button
                    key={item.label}
                    onClick={item.action}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all text-left cursor-pointer border shadow-2xs truncate ${
                      item.isActive
                        ? 'bg-[#111111] text-white border-[#111111] shadow-xs'
                        : 'bg-white/90 text-gray-700 hover:text-black hover:bg-neutral-50 border-black/10'
                    }`}
                  >
                    <Icon size={14} className={`shrink-0 ${item.isActive ? 'text-white' : 'text-gray-400'}`} />
                    <span className="truncate">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </nav>
        </div>

        {/* Bottom Panel: Hire CTA, Social Links & Location */}
        <div className="flex flex-col gap-3.5 pt-4 border-t border-black/5">
          <Link
            to="/contact"
            className={`w-full py-2.5 px-4 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
              isContact
                ? 'bg-[#0062D6] text-white'
                : 'bg-[#111111] hover:bg-black text-white shadow-xs hover:scale-[1.01] active:scale-95'
            }`}
          >
            <Mail size={14} />
            Hire Me
          </Link>

          {/* Social Links Row */}
          <div className="flex items-center justify-between px-1 text-xs font-medium text-gray-500">
            <a
              href={FOOTER_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href={FOOTER_DATA.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              Behance
            </a>
            <span>•</span>
            <a
              href={FOOTER_DATA.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              Twitter
            </a>
            <span>•</span>
            <a
              href={`mailto:${FOOTER_DATA.email}`}
              className="hover:text-black transition-colors"
            >
              Email
            </a>
          </div>

          <div className="text-[11px] text-gray-400 flex items-center justify-between px-1">
            <span>Tamil Nadu, India</span>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
        </div>
      </aside>
    </>
  );
}
