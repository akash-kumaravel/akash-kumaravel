import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Truck,
  Zap,
  ShieldCheck,
  Sparkles,
  Mic,
  Tag,
  Calendar,
  Star,
  RefreshCw,
  Users,
  CheckCircle2,
  Clock,
  MapPin,
  Search,
  Receipt,
  Heart
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ScrollRevealCard from '../components/ScrollRevealCard';
import TargetUserCards from '../components/TargetUserCards';
import DesignProcessTimeline from '../components/DesignProcessTimeline';
import { ModalType } from '../types';
import { assetPath } from '../data/portfolioData';

interface LegalLinkPageProps {
  onBack?: () => void;
  onNavigateProject?: (projectId: string) => void;
  onOpenModal?: (type: ModalType) => void;
}

export default function LegalLinkPage({
  onBack,
  onNavigateProject,
  onOpenModal,
}: LegalLinkPageProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate('/');
    }
  };

  const handleNavigateProject = (id: string) => {
    if (onNavigateProject) {
      onNavigateProject(id);
    } else {
      navigate(`/project/${id}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white text-[#1A1A1A] flex flex-col font-sans selection:bg-[#007AFF] selection:text-white"
    >
      <Navbar
        onOpenModal={(type) => onOpenModal?.(type)}
        activePage="legallink"
        onNavigateHome={handleBack}
      />

      {/* Hero */}
      <section className="w-full pt-20 sm:pt-28 pb-4">
        <ScrollRevealCard className="max-w-[1008px] mx-auto px-4">
          <div className="w-full max-w-[1008px] mx-auto py-2">
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.92, rotateX: 12 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -8,
                scale: 1.015,
                transition: { duration: 0.3 },
              }}
              className="relative w-full max-w-[1008px] min-h-[520px] bg-[#141414] text-white rounded-[32px] sm:rounded-[48px] md:rounded-[64px] p-6 sm:p-10 md:p-16 flex flex-col items-center justify-center text-center gap-8 overflow-hidden border border-white/10 shadow-2xl"
            >
              {/* Animated background glow */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.35, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute w-[420px] h-[420px] rounded-full bg-blue-600/30 blur-3xl pointer-events-none"
              />

              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.7 }}
                className="relative z-10 flex flex-col items-center gap-1"
              >
                <h1 className="font-serif italic text-[42px] sm:text-[64px] md:text-[80px] leading-none text-blue-400 drop-shadow-md">
                  Legal
                </h1>

                <span className="font-sans font-black text-[42px] sm:text-[64px] md:text-[80px] uppercase leading-none drop-shadow-md tracking-wider">
                  LINK
                </span>
              </motion.div>

              {/* Video */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7, rotate: -6 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ scale: 1.06, rotate: 2 }}
                className="relative z-10 w-[180px] sm:w-[240px] md:w-[280px] h-[135px] sm:h-[180px] md:h-[210px] bg-white rounded-[28px] sm:rounded-[38px] overflow-hidden border-2 border-white/20 shadow-2xl flex items-center justify-center"
              >
                <video
                  src={assetPath("legal link hero.mp4")}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.7 }}
                className="relative z-10 max-w-[720px] font-sans font-bold text-[16px] sm:text-[19px] md:text-[22px] leading-[1.6] text-white/90"
              >
                Legal Link is an all-in-one legal marketplace and AI platform connecting individuals and businesses with verified lawyers, 24/7 AI lawyer consultations, and smart contract analysis.
              </motion.p>

              {/* Floating decorative dots */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 180, 360] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-12 left-10 w-4 h-4 rounded-full bg-[#007AFF] pointer-events-none"
              />

              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -180, -360] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-16 right-12 w-5 h-5 rounded-full bg-blue-400 pointer-events-none"
              />
            </motion.div>
          </div>
        </ScrollRevealCard>
      </section>

      {/* Metadata */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-[965px] mx-auto px-4 -mt-2 sm:-mt-6 z-10"
      >
        <div className="bg-white border border-[#EBEBEB] rounded-[24px] sm:rounded-[28px] md:rounded-[36px] p-5 sm:p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 shadow-md">
          <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
            <span className="font-sans font-bold text-[11px] sm:text-[13px] tracking-[3px] uppercase text-[#9197A8]">
              Category
            </span>
            <h3 className="font-sans font-bold text-[18px] sm:text-[20px] md:text-[24px] text-[#333333]">
              LegalTech &amp; AI Platform
            </h3>
          </div>

          <div className="w-full md:w-px h-[1px] md:h-12 bg-gray-200" />

          <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
            <span className="font-sans font-bold text-[11px] sm:text-[13px] tracking-[3px] uppercase text-[#9197A8]">
              My Role
            </span>
            <h3 className="font-sans font-bold text-[18px] sm:text-[20px] md:text-[24px] text-[#333333]">
              Lead Product Designer
            </h3>
          </div>

        </div>
      </motion.section>

      {/* Case Study Content */}
      <section className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 md:px-12 py-8 flex flex-col gap-12 sm:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-6 items-start justify-between"
        >
          <div className="flex flex-col gap-2 max-w-[500px]">
            <h2 className="font-sans font-bold text-[28px] sm:text-[36px] md:text-[48px] text-[#333333]">
              What?
            </h2>

            <p className="font-sans font-medium text-[16px] sm:text-[18px] md:text-[20px] text-[#636B82] leading-[1.6]">
              Legal Link is an AI-driven legal marketplace connecting individuals, startups, and enterprises with verified lawyers, instant AI lawyer consultations, and automated contract analysis.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-8 sm:gap-12 items-start justify-between border-t border-gray-100 pt-8 sm:pt-12"
        >
          <div className="flex flex-col gap-6 max-w-[480px]">
            <div>
              <h2 className="font-sans font-bold text-[28px] sm:text-[36px] md:text-[48px] text-[#333333]">
                Why?
              </h2>

              <span className="font-sans font-bold text-[11px] sm:text-[13px] tracking-[3px] uppercase text-[#9197A8]">
                Democratizing access to top legal counsel
              </span>
            </div>

            <p className="font-sans font-medium text-[16px] sm:text-[18px] md:text-[20px] text-[#636B82] leading-[1.6]">
              Traditional legal consultations are slow, intimidating, and opaque in pricing. Legal Link streamlines the journey: users get instant 24/7 guidance from an AI Lawyer and can book verified legal experts with a single tap.
            </p>

            <div className="p-5 sm:p-6 bg-gray-50 border border-gray-200/80 rounded-2xl">
              <h4 className="font-sans font-bold text-xs tracking-wider uppercase text-[#9197A8] mb-1">
                Job To Be Done
              </h4>

              <p className="font-sans font-medium text-[15px] sm:text-[16px] md:text-[18px] text-[#333333]">
                Build a trusted digital legal ecosystem that allows users to consult AI legal advisors, schedule 1-on-1 consultations with verified lawyers, and manage legal documents effortlessly.
              </p>
            </div>
          </div>

        </motion.div>

        {/* Target Users */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 border-t border-gray-100 pt-12"
        >
          <h2 className="font-sans font-bold text-[36px] md:text-[48px] text-[#333333]">
            Target users
          </h2>

          <span className="font-sans font-bold text-[13px] tracking-[3.5px] uppercase text-[#9197A8]">
            Primary qualitative research
          </span>

          <TargetUserCards />
        </motion.div>

        {/* Data Insights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-12 items-start justify-between border-t border-gray-100 pt-12"
        >
          <div className="flex flex-col gap-6 max-w-[450px]">
            <h2 className="font-sans font-bold text-[36px] md:text-[48px] text-[#333333]">
              Data insights
            </h2>

            <div className="p-6 bg-gray-50 border border-gray-200/80 rounded-2xl flex flex-col gap-1">
              <span className="font-sans font-bold text-xs tracking-wider uppercase text-[#9197A8]">
                People seeking legal advice annually
              </span>

              <p className="font-sans font-bold text-[32px] md:text-[40px] text-[#333333]">
                ~20 million
              </p>
            </div>

            <div className="p-6 bg-gray-50 border border-gray-200/80 rounded-2xl flex flex-col gap-1">
              <span className="font-sans font-bold text-xs tracking-wider uppercase text-[#9197A8]">
                Users overwhelmed by legal costs &amp; friction
              </span>

              <p className="font-sans font-bold text-[32px] md:text-[40px] text-[#007AFF]">
                ~12 million
              </p>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <h2 className="font-sans font-bold text-[36px] md:text-[48px] text-[#333333]">
              Solutioning
            </h2>

            <span className="font-sans font-bold text-[13px] tracking-[3.5px] uppercase text-[#9197A8]">
              3 key pillars to deliver
            </span>

            <ul className="list-disc list-inside font-sans font-medium text-[18px] md:text-[20px] text-[#636B82] space-y-3 leading-relaxed">
              <li>Instant AI Lawyer Assistance for immediate clarity</li>
              <li>Verified Attorney Discovery &amp; 1-Tap Consultation Booking</li>
              <li>Transparent Legal Fee Structures &amp; AI Contract Risk Analysis</li>
            </ul>
          </div>
        </motion.div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 border-t border-gray-100 pt-12"
        >
          <h2 className="font-sans font-bold text-[36px] md:text-[48px] text-[#333333]">
            Design process timeline
          </h2>

          <p className="font-sans font-medium text-[18px] md:text-[20px] text-[#636B82] max-w-[800px]">
            The whole project took about 8 months from inception till
            shipping. This chart contains all the steps which were instrumental
            to the problems that were being solved.
          </p>

          <DesignProcessTimeline />
        </motion.div>
      </section>

      {/* Key Screens */}
      <section className="w-full max-w-[1140px] mx-auto px-6 md:px-12 py-8 flex flex-col gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <span className="font-sans font-bold text-[13px] tracking-[3.5px] uppercase text-[#9197A8]">
            Key screens
          </span>

          <h2 className="font-sans font-bold text-[36px] md:text-[48px] text-[#333333]">
            Home page
          </h2>

          <div className="w-full rounded-3xl overflow-hidden border border-gray-200 shadow-sm">
            <img
              src={"/assets/" + encodeURIComponent("legallink hero.png")}
              alt="Home Page Screens"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 border-t border-gray-100 pt-12"
        >
          <span className="font-sans font-bold text-[13px] tracking-[3.5px] uppercase text-[#9197A8]">
            Other explorations
          </span>

          <div className="w-full rounded-3xl overflow-hidden border border-gray-200 shadow-sm">
            <img
              src={"/assets/" + encodeURIComponent("legal link exploration page.png")}
              alt="Explorations"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

      </section>

      {/* Happy Flow */}
      <HappyFlowSection />

      {/* Ending Navigation */}
      <section className="w-full max-w-[1140px] mx-auto px-6 md:px-12 py-16 flex flex-col items-center text-center gap-8 border-t border-gray-100 mt-12">
        <h2 className="font-sans font-bold text-[32px] md:text-[48px] text-gray-900">
          Thanks for watching
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
          <button
            onClick={() => handleNavigateProject('flint')}
            className="flex items-center gap-3 px-8 py-4 bg-white border border-gray-300 rounded-full shadow-sm hover:border-black transition-all group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-[#007AFF] text-white flex items-center justify-center rotate-180 group-hover:-translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </div>

            <span className="font-sans font-bold text-lg text-gray-900">
              Previous project
            </span>
          </button>

          <button
            onClick={() => handleNavigateProject('spark')}
            className="flex items-center gap-3 px-8 py-4 bg-white border border-gray-300 rounded-full shadow-sm hover:border-black transition-all group cursor-pointer"
          >
            <span className="font-sans font-bold text-lg text-gray-900">
              Next project
            </span>

            <div className="w-8 h-8 rounded-full bg-[#007AFF] text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}

function HappyFlowSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsMouseDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.8;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const scrollByAmount = (amount: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-[#121212] text-white py-16 px-6 md:px-12 my-12 overflow-hidden">
      <div className="max-w-[1140px] mx-auto flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-sans font-bold text-[36px] md:text-[48px] text-white/90">
              Happy Flow
            </h2>
            <p className="font-sans text-xs text-white/50 uppercase tracking-widest mt-1">
              Drag or swipe horizontally to explore screens
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollByAmount(-450)}
              aria-label="Scroll Left"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition flex items-center justify-center text-white border border-white/10 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollByAmount(450)}
              aria-label="Scroll Right"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition flex items-center justify-center text-white border border-white/10 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar py-4 px-1 select-none active:cursor-grabbing cursor-grab`}
          style={{
            scrollSnapType: isMouseDown ? 'none' : 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <div className="flex-shrink-0 w-[40vw] sm:w-[260px] md:w-[320px] snap-center rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-transform duration-300 hover:scale-[1.01]">
            <img
              src={"/assets/" + encodeURIComponent("legal link 1.png")}
              alt="Happy Flow 1"
              draggable={false}
              className="w-full h-auto object-contain sm:object-cover pointer-events-none"
            />
          </div>

          <div className="flex-shrink-0 w-[80vw] sm:w-[400px] md:w-[550px] snap-center rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-transform duration-300 hover:scale-[1.01]">
            <img
              src={"/assets/" + encodeURIComponent("legal link 2.png")}
              alt="Happy Flow 2"
              draggable={false}
              className="w-full h-auto object-contain sm:object-cover pointer-events-none"
            />
          </div>

          <div className="flex-shrink-0 w-[80vw] sm:w-[400px] md:w-[550px] snap-center rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-transform duration-300 hover:scale-[1.01]">
            <img
              src={"/assets/" + encodeURIComponent("legal link 3.png")}
              alt="Happy Flow 3"
              draggable={false}
              className="w-full h-auto object-contain sm:object-cover pointer-events-none"
            />
          </div>

          <div className="flex-shrink-0 w-[80vw] sm:w-[400px] md:w-[550px] snap-center rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-transform duration-300 hover:scale-[1.01]">
            <img
              src={"/assets/" + encodeURIComponent("legal link 4.png")}
              alt="Happy Flow 4"
              draggable={false}
              className="w-full h-auto object-contain sm:object-cover pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
