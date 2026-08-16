import { useState, useEffect, MouseEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ModalType } from '../types';
import { FOOTER_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenModal?: (type: ModalType | 'works' | any) => void;
  activePage?: 'home' | 'resume' | 'philosophy' | 'stories' | 'services' | 'works' | 'collectibles' | 'mysterybox' | 'moments' | string;
  onNavigateHome?: () => void;
}

export default function Navbar({ onOpenModal, activePage = 'home', onNavigateHome }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  const handleHomeClick = (e: MouseEvent) => {
    e.preventDefault();
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      if (location.pathname !== '/') {
        navigate('/');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleModalClick = (type: string) => {
    if (onOpenModal) {
      onOpenModal(type);
    } else {
      if (type === 'works') {
        if (location.pathname === '/') {
          const el = document.getElementById('works') || document.getElementById('projects');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
          navigate('/#projects');
        }
      } else if (type === 'resume') {
        window.open(FOOTER_DATA.resume, '_blank', 'noopener,noreferrer');
      } else if (type === 'stories') {
        navigate('/about');
      } else if (type === 'philosophy') {
        navigate('/design-philosophy');
      } else if (type === 'services' || type === 'contact') {
        navigate('/contact');
      }
    }
  };

  const isResumeActive = activePage === 'resume' || location.pathname === '/resume';
  const isPhilosophyActive = activePage === 'philosophy' || location.pathname === '/design-philosophy' || location.pathname === '/philosophy';
  const isStoriesActive = activePage === 'stories' || location.pathname === '/about';
  const isContactActive = activePage === 'services' || activePage === 'contact' || location.pathname === '/contact';

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center w-full px-4 pt-3 transition-all duration-300">
      <div className="w-full max-w-[1150px] bg-white/85 backdrop-blur-md border border-white/20 rounded-full shadow-[0_4px_25px_rgba(0,0,0,0.15)] px-4 py-2.5 flex items-center justify-between transition-all duration-300">
        
        {/* Left Social & Home Pill Links */}
        <div className="flex items-center gap-3">
          {/* Home Icon Pill */}
          <a
            href="#"
            onClick={handleHomeClick}
            className="flex items-center justify-center w-10 h-10 bg-black hover:bg-gray-800 rounded-full transition-transform duration-200 hover:scale-105 active:scale-95 shadow-sm"
            title="Home"
            aria-label="Home"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="m19.773 19.474 1.67-10a3 3 0 0 0-.27-1.71 2.926 2.926 0 0 0-1.16-1.28l-6.47-4a3 3 0 0 0-3.15 0l-6.48 4a3 3 0 0 0-1.12 1.29 3 3 0 0 0-.23 1.7l1.67 10a3 3 0 0 0 2.93 2.49H10V15a2 2 0 1 1 4 0v6.964h2.773a3.21 3.21 0 0 0 2-.7 3 3 0 0 0 1-1.79Z"
                fill="#FFFFFF"
              />
            </svg>
          </a>

          {/* LinkedIn Link */}
          <a
            href={FOOTER_DATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 bg-gray-50 hover:bg-gray-100 border border-gray-200/60 rounded-full transition-all duration-200 hover:scale-105"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
              <path
                d="M18.511 18.51h-3.16v-4.95c0-1.18-.022-2.7-1.645-2.7-1.646 0-1.898 1.287-1.898 2.614v5.036H8.647V8.33h3.034v1.392h.043a3.326 3.326 0 0 1 2.994-1.645c3.204 0 3.794 2.108 3.794 4.85l-.001 5.584ZM5.081 6.94a1.834 1.834 0 1 1-.001-3.67 1.834 1.834 0 0 1 0 3.67Zm1.58 11.57H3.497V8.33H6.66v10.18ZM20.087.336H1.908A1.557 1.557 0 0 0 .334 1.873v18.254c.01.86.715 1.549 1.574 1.54h18.179a1.561 1.561 0 0 0 1.58-1.54V1.871a1.561 1.561 0 0 0-1.58-1.538"
                fill="#202020"
              />
            </svg>
          </a>

          {/* X / Twitter Link */}
          <a
            href={FOOTER_DATA.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 bg-gray-50 hover:bg-gray-100 border border-gray-200/60 rounded-full transition-all duration-200 hover:scale-105"
            title="X (Twitter)"
            aria-label="X (Twitter)"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12ZM9.95 12.6 5 18h2l3.818-4.242L14 18h4l-.75-1-4.182-5.575L18 6h-2l-3.797 4.271L9 6H5l.75 1 4.2 5.6Zm1.55.4L7 7h1.5L16 17h-1.5l-3-4Z"
                fill="#202020"
              />
            </svg>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5">
          <a
            href={FOOTER_DATA.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-[14px] font-sk-modernist font-bold rounded-full transition-all duration-200 text-gray-800 hover:text-black hover:bg-gray-100/80"
          >
            Resumé
          </a>

          <button
            onClick={() => handleModalClick('stories')}
            className={`px-4 py-2 text-[14px] font-sk-modernist font-bold rounded-full transition-all duration-200 ${
              isStoriesActive
                ? 'bg-[#141414] text-white shadow-sm'
                : 'text-gray-800 hover:text-black hover:bg-gray-100/80'
            }`}
          >
            Life &amp; Stories
          </button>

          <button
            onClick={() => handleModalClick('philosophy')}
            className={`px-4 py-2 text-[14px] font-sk-modernist font-bold rounded-full transition-all duration-200 ${
              isPhilosophyActive
                ? 'bg-[#141414] text-white shadow-sm'
                : 'text-gray-800 hover:text-black hover:bg-gray-100/80'
            }`}
          >
            Design Philosophy
          </button>

          <button
            onClick={() => handleModalClick('services')}
            className={`px-5 py-2 text-[14px] font-sk-modernist font-bold text-white bg-[#007AFF] hover:bg-[#0062D6] rounded-full shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-95 ml-1 ${
              isContactActive ? 'ring-2 ring-offset-2 ring-[#007AFF] bg-[#0062D6]' : ''
            }`}
          >
            Hire me
          </button>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col justify-center items-center w-10 h-10 bg-gray-100 rounded-full gap-1 p-2 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            <span
              className={`w-4 h-[2px] bg-gray-800 rounded transition-transform duration-200 ${
                mobileMenuOpen ? 'rotate-45 translate-y-[3px]' : ''
              }`}
            />
            <span
              className={`w-4 h-[2px] bg-gray-800 rounded transition-opacity duration-200 ${
                mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`w-4 h-[2px] bg-gray-800 rounded transition-transform duration-200 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-[3px]' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-4 right-4 bg-white/95 backdrop-blur-lg border border-gray-200/80 rounded-2xl p-4 shadow-2xl flex flex-col gap-2 pointer-events-auto md:hidden"
          >
            <a
              href={FOOTER_DATA.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-left px-4 py-3 font-sk-modernist font-bold rounded-xl transition-colors text-gray-800 hover:bg-gray-100 block"
            >
              Resumé
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleModalClick('stories');
              }}
              className={`w-full text-left px-4 py-3 font-sk-modernist font-bold rounded-xl transition-colors ${
                isStoriesActive ? 'bg-[#141414] text-white' : 'text-gray-800 hover:bg-gray-100'
              }`}
            >
              Life &amp; Stories
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleModalClick('philosophy');
              }}
              className={`w-full text-left px-4 py-3 font-sk-modernist font-bold rounded-xl transition-colors ${
                isPhilosophyActive ? 'bg-[#141414] text-white' : 'text-gray-800 hover:bg-gray-100'
              }`}
            >
              Design Philosophy
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleModalClick('services');
              }}
              className="w-full text-center px-4 py-3 font-sk-modernist font-bold text-white bg-[#007AFF] hover:bg-[#0062D6] rounded-xl shadow transition-colors mt-1"
            >
              Hire me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
