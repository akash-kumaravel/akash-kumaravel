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

      {/* Animated 4-Column Mobile Screens Showcase */}
      <section className="w-full max-w-[1140px] mx-auto px-6 md:px-12 py-12 flex flex-col gap-8 border-t border-gray-100">
        {/* Outer Animated Container */}
        <div className="relative w-full h-[620px] sm:h-[680px] bg-[#FAF9FE] border border-blue-100 rounded-3xl p-4 sm:p-6 overflow-hidden shadow-2xs">
          {/* Top and Bottom Gradient Fades */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#FAF9FE] via-[#FAF9FE]/80 to-transparent z-20" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FAF9FE] via-[#FAF9FE]/80 to-transparent z-20" />

          {/* Grid with 4 Vertical Animated Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 h-full items-start overflow-hidden">
            
            {/* COLUMN 1: Scrolls UPWARDS */}
            <div className="overflow-hidden h-full relative">
              <motion.div
                animate={{ y: ['0%', '-50%'] }}
                transition={{
                  ease: 'linear',
                  duration: 22,
                  repeat: Infinity,
                }}
                className="flex flex-col gap-6"
              >
                {[
                  // 1. AI Lawyer Assistant
                  {
                    title: 'AI Lawyer Chat',
                    category: '24/7 AI Guidance',
                    render: () => (
                      <div className="bg-[#0A192F] text-white p-3.5 h-full flex flex-col justify-between font-sans">
                        <div className="flex items-center justify-between text-[10px] text-blue-200">
                          <span>9:41</span>
                          <span className="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full text-[9px] font-bold flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5 text-blue-400" /> AI ONLINE
                          </span>
                        </div>
                        <div className="my-1">
                          <p className="text-[9px] uppercase text-blue-300 tracking-wider">Ask AI Lawyer</p>
                          <p className="text-xs font-bold font-sans mt-0.5 text-white flex items-center gap-1">
                            “Is a non-compete valid in CA?”
                          </p>
                        </div>
                        <div className="bg-blue-900/40 border border-blue-500/30 p-2 rounded-xl text-[9px] text-blue-100 leading-relaxed">
                          <span className="font-bold text-blue-300">AI Lawyer:</span> Under Cal. Bus. &amp; Prof. Code § 16600, non-compete agreements are generally void.
                        </div>
                        <div className="bg-blue-600 text-white rounded-xl p-2 text-center font-bold text-[10px] shadow-sm">
                          Book Attorney Consultation
                        </div>
                      </div>
                    )
                  },
                  // 2. Book Senior Advocate
                  {
                    title: 'Book Lawyer',
                    category: '1-Tap Consultation',
                    render: () => (
                      <div className="bg-[#121212] text-white p-3.5 h-full flex flex-col justify-between font-sans">
                        <div className="flex items-center justify-between text-[10px] text-gray-400">
                          <span>9:41</span>
                          <span className="text-emerald-400 font-bold text-[9px] flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> Available
                          </span>
                        </div>
                        <div className="my-auto bg-gray-900 border border-gray-800 rounded-2xl p-3 flex flex-col gap-2 text-center">
                          <div className="w-10 h-10 rounded-full bg-[#007AFF] text-white flex items-center justify-center mx-auto font-bold text-sm shadow-md">
                            SJ
                          </div>
                          <div>
                            <p className="text-xs font-black text-white">Adv. Sarah Jenkins</p>
                            <p className="text-[9px] text-blue-400 mt-0.5">Corporate &amp; IP Attorney</p>
                          </div>
                          <div className="bg-blue-950 border border-blue-800 text-blue-200 text-[8px] py-1 px-2 rounded-lg font-bold">
                            Today @ 4:00 PM • $150 / hr
                          </div>
                        </div>
                        <div className="bg-white/10 rounded-xl p-2 text-[9px] text-gray-300 text-center font-semibold">
                          Confirm Slot &amp; Pay
                        </div>
                      </div>
                    )
                  },
                  // 3. Legal Categories
                  {
                    title: 'Practice Areas',
                    category: 'Legal Specialties',
                    render: () => (
                      <div className="bg-white text-gray-900 p-3.5 h-full flex flex-col justify-between font-sans">
                        <div className="flex items-center justify-between text-[10px] text-gray-400">
                          <span>9:41</span>
                          <span className="text-[#007AFF] font-bold text-[9px]">Specialties</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 my-auto text-[10px]">
                          <div className="bg-blue-50 border border-blue-200 rounded-xl p-2 text-center">
                            <ShieldCheck className="w-5 h-5 text-[#007AFF] mx-auto mb-1" />
                            <p className="font-bold">Corporate</p>
                          </div>
                          <div className="bg-purple-50 border border-purple-200 rounded-xl p-2 text-center">
                            <Zap className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                            <p className="font-bold">IP &amp; Patents</p>
                          </div>
                          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-2 text-center">
                            <Tag className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                            <p className="font-bold">Real Estate</p>
                          </div>
                          <div className="bg-amber-50 border border-amber-200 rounded-xl p-2 text-center">
                            <Users className="w-5 h-5 text-amber-600 mx-auto mb-1" />
                            <p className="font-bold">Family Law</p>
                          </div>
                        </div>
                        <div className="bg-[#007AFF] text-white py-1.5 rounded-xl text-center text-[10px] font-bold">
                          View All 24 Specializations
                        </div>
                      </div>
                    )
                  }
                ].concat([
                  {
                    title: 'AI Lawyer Chat',
                    category: '24/7 AI Guidance',
                    render: () => (
                      <div className="bg-[#0A192F] text-white p-3.5 h-full flex flex-col justify-between font-sans">
                        <div className="flex items-center justify-between text-[10px] text-blue-200">
                          <span>9:41</span>
                          <span className="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full text-[9px] font-bold flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5 text-blue-400" /> AI ONLINE
                          </span>
                        </div>
                        <div className="my-1">
                          <p className="text-[9px] uppercase text-blue-300 tracking-wider">Ask AI Lawyer</p>
                          <p className="text-xs font-bold font-sans mt-0.5 text-white flex items-center gap-1">
                            “Is a non-compete valid in CA?”
                          </p>
                        </div>
                        <div className="bg-blue-900/40 border border-blue-500/30 p-2 rounded-xl text-[9px] text-blue-100 leading-relaxed">
                          <span className="font-bold text-blue-300">AI Lawyer:</span> Under Cal. Bus. &amp; Prof. Code § 16600, non-compete agreements are generally void.
                        </div>
                        <div className="bg-blue-600 text-white rounded-xl p-2 text-center font-bold text-[10px] shadow-sm">
                          Book Attorney Consultation
                        </div>
                      </div>
                    )
                  },
                  {
                    title: 'Book Lawyer',
                    category: '1-Tap Consultation',
                    render: () => (
                      <div className="bg-[#121212] text-white p-3.5 h-full flex flex-col justify-between font-sans">
                        <div className="flex items-center justify-between text-[10px] text-gray-400">
                          <span>9:41</span>
                          <span className="text-emerald-400 font-bold text-[9px] flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> Available
                          </span>
                        </div>
                        <div className="my-auto bg-gray-900 border border-gray-800 rounded-2xl p-3 flex flex-col gap-2 text-center">
                          <div className="w-10 h-10 rounded-full bg-[#007AFF] text-white flex items-center justify-center mx-auto font-bold text-sm shadow-md">
                            SJ
                          </div>
                          <div>
                            <p className="text-xs font-black text-white">Adv. Sarah Jenkins</p>
                            <p className="text-[9px] text-blue-400 mt-0.5">Corporate &amp; IP Attorney</p>
                          </div>
                          <div className="bg-blue-950 border border-blue-800 text-blue-200 text-[8px] py-1 px-2 rounded-lg font-bold">
                            Today @ 4:00 PM • $150 / hr
                          </div>
                        </div>
                        <div className="bg-white/10 rounded-xl p-2 text-[9px] text-gray-300 text-center font-semibold">
                          Confirm Slot &amp; Pay
                        </div>
                      </div>
                    )
                  },
                  {
                    title: 'Practice Areas',
                    category: 'Legal Specialties',
                    render: () => (
                      <div className="bg-white text-gray-900 p-3.5 h-full flex flex-col justify-between font-sans">
                        <div className="flex items-center justify-between text-[10px] text-gray-400">
                          <span>9:41</span>
                          <span className="text-[#007AFF] font-bold text-[9px]">Specialties</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 my-auto text-[10px]">
                          <div className="bg-blue-50 border border-blue-200 rounded-xl p-2 text-center">
                            <ShieldCheck className="w-5 h-5 text-[#007AFF] mx-auto mb-1" />
                            <p className="font-bold">Corporate</p>
                          </div>
                          <div className="bg-purple-50 border border-purple-200 rounded-xl p-2 text-center">
                            <Zap className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                            <p className="font-bold">IP &amp; Patents</p>
                          </div>
                          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-2 text-center">
                            <Tag className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                            <p className="font-bold">Real Estate</p>
                          </div>
                          <div className="bg-amber-50 border border-amber-200 rounded-xl p-2 text-center">
                            <Users className="w-5 h-5 text-amber-600 mx-auto mb-1" />
                            <p className="font-bold">Family Law</p>
                          </div>
                        </div>
                        <div className="bg-[#007AFF] text-white py-1.5 rounded-xl text-center text-[10px] font-bold">
                          View All 24 Specializations
                        </div>
                      </div>
                    )
                  }
                ]).map((screen, idx) => (
                  <div key={`col1-${idx}`} className="flex flex-col items-center gap-2 group">
                    <div className="w-[190px] sm:w-[210px] h-[370px] sm:h-[410px] rounded-[30px] sm:rounded-[34px] bg-black border-[3px] border-gray-800 shadow-xl overflow-hidden relative flex flex-col justify-between p-1.5 shrink-0 transition-transform duration-300 group-hover:scale-[1.02]">
                      <div className="w-14 h-3 bg-black rounded-full mx-auto mt-0.5 z-30" />
                      <div className="w-full h-full rounded-[24px] sm:rounded-[28px] overflow-hidden flex flex-col relative my-1">
                        {screen.render()}
                      </div>
                      <div className="w-16 h-1 bg-white/40 rounded-full mx-auto mb-1 z-30" />
                    </div>
                    <div className="text-center">
                      <p className="font-sans font-bold text-xs text-gray-900">{screen.title}</p>
                      <p className="font-sans text-[10px] text-[#007AFF] font-semibold">{screen.category}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* COLUMN 2: Scrolls DOWNWARDS */}
            <div className="overflow-hidden h-full relative">
              <motion.div
                animate={{ y: ['-50%', '0%'] }}
                transition={{
                  ease: 'linear',
                  duration: 25,
                  repeat: Infinity,
                }}
                className="flex flex-col gap-6"
              >
                {[
                  // 4. Bar Certified Verification
                  {
                    title: 'Bar Verified Lawyer',
                    category: 'Verified Credentials',
                    render: () => (
                      <div className="bg-[#FAF9FE] text-gray-900 p-3.5 h-full flex flex-col justify-between font-sans">
                        <div className="flex items-center justify-between text-[10px] text-gray-400">
                          <span>9:41</span>
                          <span className="text-emerald-600 font-bold text-[9px] flex items-center gap-1">
                            <ShieldCheck className="w-3 h-3 text-emerald-600" /> Bar Council
                          </span>
                        </div>
                        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-3 flex flex-col gap-1.5 text-center">
                          <ShieldCheck className="w-8 h-8 text-emerald-600 mx-auto" />
                          <p className="text-xs font-bold text-emerald-950">Licensed Practitioner</p>
                          <p className="text-[8px] text-emerald-700 leading-tight">
                            Bar License #NY-88219 • 14+ Years Experience • 98% Success Rate
                          </p>
                        </div>
                        <div className="bg-white p-2 rounded-xl border border-gray-200 text-[8px] text-gray-600 text-center font-medium">
                          100% Confidential &amp; Attorney-Client Privileged
                        </div>
                      </div>
                    )
                  },
                  // 5. Voice AI Legal Counsel
                  {
                    title: 'Voice AI Counsel',
                    category: 'Voice Assistance',
                    render: () => (
                      <div className="bg-[#0B132B] text-white p-3.5 h-full flex flex-col justify-between items-center text-center font-sans">
                        <div className="w-full flex items-center justify-between text-[10px] text-blue-200">
                          <span>9:41</span>
                          <span className="text-blue-300 font-bold text-[9px] flex items-center gap-1">
                            <Mic className="w-3 h-3" /> Voice AI
                          </span>
                        </div>
                        <div className="my-auto flex flex-col items-center gap-2">
                          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#007AFF] to-blue-400 p-0.5 shadow-lg flex items-center justify-center animate-pulse">
                            <div className="w-full h-full bg-[#0B132B] rounded-full flex items-center justify-center">
                              <Mic className="w-6 h-6 text-blue-400" />
                            </div>
                          </div>
                          <p className="text-[10px] font-bold text-white max-w-[140px] leading-tight">
                            “Summarize liability terms in Section 4”
                          </p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-2 w-full text-[8px] text-blue-200">
                          Analysis completed • 0 High-Risk Flags
                        </div>
                      </div>
                    )
                  },
                  // 6. Transparent Legal Retainers
                  {
                    title: 'Retainer & Vault',
                    category: 'Transparent Fees',
                    render: () => (
                      <div className="bg-white text-gray-900 p-3.5 h-full flex flex-col justify-between font-sans">
                        <div className="flex items-center justify-between text-[10px] text-gray-400">
                          <span>9:41</span>
                          <span className="text-[#007AFF] font-bold text-[9px]">Legal Retainer</span>
                        </div>
                        <div className="bg-blue-50 border border-dashed border-blue-300 rounded-xl p-2.5 flex flex-col gap-1">
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-xs text-[#007AFF]">Startup Retainer</span>
                            <span className="text-[8px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-bold">ACTIVE</span>
                          </div>
                          <p className="text-[9px] text-gray-600">Includes 5 monthly contract reviews &amp; filings</p>
                        </div>
                        <div className="bg-gray-50 border border-gray-100 rounded-xl p-2 text-[9px] flex justify-between items-center">
                          <span className="font-medium text-gray-700">Remaining Balance</span>
                          <span className="font-bold text-emerald-600">$1,200.00</span>
                        </div>
                      </div>
                    )
                  }
                ].concat([
                  {
                    title: 'Bar Verified Lawyer',
                    category: 'Verified Credentials',
                    render: () => (
                      <div className="bg-[#FAF9FE] text-gray-900 p-3.5 h-full flex flex-col justify-between font-sans">
                        <div className="flex items-center justify-between text-[10px] text-gray-400">
                          <span>9:41</span>
                          <span className="text-emerald-600 font-bold text-[9px] flex items-center gap-1">
                            <ShieldCheck className="w-3 h-3 text-emerald-600" /> Bar Council
                          </span>
                        </div>
                        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-3 flex flex-col gap-1.5 text-center">
                          <ShieldCheck className="w-8 h-8 text-emerald-600 mx-auto" />
                          <p className="text-xs font-bold text-emerald-950">Licensed Practitioner</p>
                          <p className="text-[8px] text-emerald-700 leading-tight">
                            Bar License #NY-88219 • 14+ Years Experience • 98% Success Rate
                          </p>
                        </div>
                        <div className="bg-white p-2 rounded-xl border border-gray-200 text-[8px] text-gray-600 text-center font-medium">
                          100% Confidential &amp; Attorney-Client Privileged
                        </div>
                      </div>
                    )
                  },
                  {
                    title: 'Voice AI Counsel',
                    category: 'Voice Assistance',
                    render: () => (
                      <div className="bg-[#0B132B] text-white p-3.5 h-full flex flex-col justify-between items-center text-center font-sans">
                        <div className="w-full flex items-center justify-between text-[10px] text-blue-200">
                          <span>9:41</span>
                          <span className="text-blue-300 font-bold text-[9px] flex items-center gap-1">
                            <Mic className="w-3 h-3" /> Voice AI
                          </span>
                        </div>
                        <div className="my-auto flex flex-col items-center gap-2">
                          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#007AFF] to-blue-400 p-0.5 shadow-lg flex items-center justify-center animate-pulse">
                            <div className="w-full h-full bg-[#0B132B] rounded-full flex items-center justify-center">
                              <Mic className="w-6 h-6 text-blue-400" />
                            </div>
                          </div>
                          <p className="text-[10px] font-bold text-white max-w-[140px] leading-tight">
                            “Summarize liability terms in Section 4”
                          </p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-2 w-full text-[8px] text-blue-200">
                          Analysis completed • 0 High-Risk Flags
                        </div>
                      </div>
                    )
                  },
                  {
                    title: 'Retainer & Vault',
                    category: 'Transparent Fees',
                    render: () => (
                      <div className="bg-white text-gray-900 p-3.5 h-full flex flex-col justify-between font-sans">
                        <div className="flex items-center justify-between text-[10px] text-gray-400">
                          <span>9:41</span>
                          <span className="text-[#007AFF] font-bold text-[9px]">Legal Retainer</span>
                        </div>
                        <div className="bg-blue-50 border border-dashed border-blue-300 rounded-xl p-2.5 flex flex-col gap-1">
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-xs text-[#007AFF]">Startup Retainer</span>
                            <span className="text-[8px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-bold">ACTIVE</span>
                          </div>
                          <p className="text-[9px] text-gray-600">Includes 5 monthly contract reviews &amp; filings</p>
                        </div>
                        <div className="bg-gray-50 border border-gray-100 rounded-xl p-2 text-[9px] flex justify-between items-center">
                          <span className="font-medium text-gray-700">Remaining Balance</span>
                          <span className="font-bold text-emerald-600">$1,200.00</span>
                        </div>
                      </div>
                    )
                  }
                ]).map((screen, idx) => (
                  <div key={`col2-${idx}`} className="flex flex-col items-center gap-2 group">
                    <div className="w-[190px] sm:w-[210px] h-[370px] sm:h-[410px] rounded-[30px] sm:rounded-[34px] bg-black border-[3px] border-gray-800 shadow-xl overflow-hidden relative flex flex-col justify-between p-1.5 shrink-0 transition-transform duration-300 group-hover:scale-[1.02]">
                      <div className="w-14 h-3 bg-black rounded-full mx-auto mt-0.5 z-30" />
                      <div className="w-full h-full rounded-[24px] sm:rounded-[28px] overflow-hidden flex flex-col relative my-1">
                        {screen.render()}
                      </div>
                      <div className="w-16 h-1 bg-white/40 rounded-full mx-auto mb-1 z-30" />
                    </div>
                    <div className="text-center">
                      <p className="font-sans font-bold text-xs text-gray-900">{screen.title}</p>
                      <p className="font-sans text-[10px] text-[#007AFF] font-semibold">{screen.category}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* COLUMN 3: Scrolls UPWARDS */}
            <div className="overflow-hidden h-full relative">
              <motion.div
                animate={{ y: ['0%', '-50%'] }}
                transition={{
                  ease: 'linear',
                  duration: 20,
                  repeat: Infinity,
                }}
                className="flex flex-col gap-6"
              >
                {[
                  // 7. Video Consultation
                  {
                    title: '1-on-1 HD Video',
                    category: 'Live Strategy Session',
                    render: () => (
                      <div className="bg-white text-gray-900 p-3.5 h-full flex flex-col justify-between font-sans">
                        <div className="flex items-center justify-between text-[10px] text-gray-400">
                          <span>9:41</span>
                          <span className="text-emerald-600 font-bold text-[9px] flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" /> HD Video Active
                          </span>
                        </div>
                        <div className="bg-blue-900 text-white rounded-xl p-2.5 flex flex-col gap-1 my-auto shadow-sm">
                          <div className="flex justify-between items-center text-[10px]">
                            <span className="font-bold">Consultation Room</span>
                            <span className="text-emerald-400 font-bold text-[8px] bg-emerald-950 px-1.5 py-0.5 rounded">00:24:12</span>
                          </div>
                          <p className="text-[9px] text-blue-200 mt-0.5">Adv. Sarah Jenkins in call</p>
                        </div>
                        <div className="bg-gray-50 border border-gray-100 rounded-xl p-2 text-[9px] flex justify-between items-center">
                          <span className="font-bold text-gray-700">Mute / Video / Screen Share</span>
                          <div className="w-3 h-3 bg-red-500 rounded-full" />
                        </div>
                      </div>
                    )
                  },
                  // 8. Real-time Case Tracker
                  {
                    title: 'Case Status Tracker',
                    category: 'Filing & Hearing',
                    render: () => (
                      <div className="bg-slate-900 text-white p-3.5 h-full flex flex-col justify-between items-center text-center font-sans">
                        <div className="w-full flex items-center justify-between text-[10px] text-slate-300">
                          <span>9:41</span>
                          <span className="font-bold text-[9px]">Case #2026-88</span>
                        </div>
                        <div className="my-auto flex flex-col items-center gap-1">
                          <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
                            <Clock className="w-6 h-6" />
                          </div>
                          <p className="text-xs font-bold text-white mt-1">Court Hearing Scheduled</p>
                          <p className="text-[8px] text-slate-300">Aug 24, 2026 • District Court Dept 4</p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-2 w-full text-[8px] text-slate-200">
                          Attorney Brief Submitted
                        </div>
                      </div>
                    )
                  },
                  // 9. Enterprise Legal Suite
                  {
                    title: 'Corporate Legal Workspace',
                    category: 'Team Workspace',
                    render: () => (
                      <div className="bg-[#FAF9FE] text-gray-900 p-3.5 h-full flex flex-col justify-between font-sans">
                        <div className="flex items-center justify-between text-[10px] text-gray-400">
                          <span>9:41</span>
                          <span className="text-[#007AFF] font-bold text-[9px] flex items-center gap-1">
                            <Users className="w-3 h-3" /> Legal Team
                          </span>
                        </div>
                        <div className="bg-white p-2.5 rounded-xl border border-blue-100 shadow-2xs flex flex-col gap-1.5 text-[10px]">
                          <div className="flex justify-between font-bold">
                            <span>Series A Legal Review</span>
                            <span className="text-[#007AFF]">3 Lawyers</span>
                          </div>
                          <div className="flex items-center gap-1 text-[8px] text-gray-500">
                            <span className="w-4 h-4 rounded-full bg-blue-100 text-[#007AFF] font-bold flex items-center justify-center">S</span>
                            <span>Sarah reviewed Term Sheet</span>
                          </div>
                          <div className="flex items-center gap-1 text-[8px] text-gray-500">
                            <span className="w-4 h-4 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center">M</span>
                            <span>Michael approved Cap Table</span>
                          </div>
                        </div>
                        <div className="bg-[#007AFF] text-white py-1.5 rounded-xl text-center text-[10px] font-bold">
                          Export Compliance Binder
                        </div>
                      </div>
                    )
                  }
                ].concat([
                  {
                    title: '1-on-1 HD Video',
                    category: 'Live Strategy Session',
                    render: () => (
                      <div className="bg-white text-gray-900 p-3.5 h-full flex flex-col justify-between font-sans">
                        <div className="flex items-center justify-between text-[10px] text-gray-400">
                          <span>9:41</span>
                          <span className="text-emerald-600 font-bold text-[9px] flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" /> HD Video Active
                          </span>
                        </div>
                        <div className="bg-blue-900 text-white rounded-xl p-2.5 flex flex-col gap-1 my-auto shadow-sm">
                          <div className="flex justify-between items-center text-[10px]">
                            <span className="font-bold">Consultation Room</span>
                            <span className="text-emerald-400 font-bold text-[8px] bg-emerald-950 px-1.5 py-0.5 rounded">00:24:12</span>
                          </div>
                          <p className="text-[9px] text-blue-200 mt-0.5">Adv. Sarah Jenkins in call</p>
                        </div>
                        <div className="bg-gray-50 border border-gray-100 rounded-xl p-2 text-[9px] flex justify-between items-center">
                          <span className="font-bold text-gray-700">Mute / Video / Screen Share</span>
                          <div className="w-3 h-3 bg-red-500 rounded-full" />
                        </div>
                      </div>
                    )
                  },
                  {
                    title: 'Case Status Tracker',
                    category: 'Filing & Hearing',
                    render: () => (
                      <div className="bg-slate-900 text-white p-3.5 h-full flex flex-col justify-between items-center text-center font-sans">
                        <div className="w-full flex items-center justify-between text-[10px] text-slate-300">
                          <span>9:41</span>
                          <span className="font-bold text-[9px]">Case #2026-88</span>
                        </div>
                        <div className="my-auto flex flex-col items-center gap-1">
                          <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
                            <Clock className="w-6 h-6" />
                          </div>
                          <p className="text-xs font-bold text-white mt-1">Court Hearing Scheduled</p>
                          <p className="text-[8px] text-slate-300">Aug 24, 2026 • District Court Dept 4</p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-2 w-full text-[8px] text-slate-200">
                          Attorney Brief Submitted
                        </div>
                      </div>
                    )
                  },
                  {
                    title: 'Corporate Legal Workspace',
                    category: 'Team Workspace',
                    render: () => (
                      <div className="bg-[#FAF9FE] text-gray-900 p-3.5 h-full flex flex-col justify-between font-sans">
                        <div className="flex items-center justify-between text-[10px] text-gray-400">
                          <span>9:41</span>
                          <span className="text-[#007AFF] font-bold text-[9px] flex items-center gap-1">
                            <Users className="w-3 h-3" /> Legal Team
                          </span>
                        </div>
                        <div className="bg-white p-2.5 rounded-xl border border-blue-100 shadow-2xs flex flex-col gap-1.5 text-[10px]">
                          <div className="flex justify-between font-bold">
                            <span>Series A Legal Review</span>
                            <span className="text-[#007AFF]">3 Lawyers</span>
                          </div>
                          <div className="flex items-center gap-1 text-[8px] text-gray-500">
                            <span className="w-4 h-4 rounded-full bg-blue-100 text-[#007AFF] font-bold flex items-center justify-center">S</span>
                            <span>Sarah reviewed Term Sheet</span>
                          </div>
                          <div className="flex items-center gap-1 text-[8px] text-gray-500">
                            <span className="w-4 h-4 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center">M</span>
                            <span>Michael approved Cap Table</span>
                          </div>
                        </div>
                        <div className="bg-[#007AFF] text-white py-1.5 rounded-xl text-center text-[10px] font-bold">
                          Export Compliance Binder
                        </div>
                      </div>
                    )
                  }
                ]).map((screen, idx) => (
                  <div key={`col3-${idx}`} className="flex flex-col items-center gap-2 group">
                    <div className="w-[190px] sm:w-[210px] h-[370px] sm:h-[410px] rounded-[30px] sm:rounded-[34px] bg-black border-[3px] border-gray-800 shadow-xl overflow-hidden relative flex flex-col justify-between p-1.5 shrink-0 transition-transform duration-300 group-hover:scale-[1.02]">
                      <div className="w-14 h-3 bg-black rounded-full mx-auto mt-0.5 z-30" />
                      <div className="w-full h-full rounded-[24px] sm:rounded-[28px] overflow-hidden flex flex-col relative my-1">
                        {screen.render()}
                      </div>
                      <div className="w-16 h-1 bg-white/40 rounded-full mx-auto mb-1 z-30" />
                    </div>
                    <div className="text-center">
                      <p className="font-sans font-bold text-xs text-gray-900">{screen.title}</p>
                      <p className="font-sans text-[10px] text-[#007AFF] font-semibold">{screen.category}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* COLUMN 4: Scrolls DOWNWARDS */}
            <div className="overflow-hidden h-full relative">
              <motion.div
                animate={{ y: ['-50%', '0%'] }}
                transition={{
                  ease: 'linear',
                  duration: 24,
                  repeat: Infinity,
                }}
                className="flex flex-col gap-6"
              >
                {[
                  // 10. Encrypted Document Vault
                  {
                    title: 'Encrypted Legal Vault',
                    category: 'AES-256 Security',
                    render: () => (
                      <div className="bg-white text-gray-900 p-3.5 h-full flex flex-col justify-between font-sans">
                        <div className="flex items-center justify-between text-[10px] text-gray-400">
                          <span>9:41</span>
                          <span className="text-[#007AFF] font-bold text-[9px] flex items-center gap-1">
                            <ShieldCheck className="w-3 h-3 text-blue-600" /> Vault
                          </span>
                        </div>
                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-2.5 flex flex-col gap-1 text-[10px]">
                          <p className="font-bold text-gray-900">Signed NDA &amp; Power of Attorney</p>
                          <p className="text-[8px] text-gray-500">2 Documents • Encrypted &amp; Watermarked</p>
                          <button className="mt-1 bg-[#007AFF] text-white text-[9px] font-bold py-1 rounded-lg">
                            Download Verified Copy
                          </button>
                        </div>
                        <div className="bg-gray-50 border border-gray-100 rounded-xl p-2 text-[9px] flex justify-between items-center text-gray-600">
                          <span>Storage Used</span>
                          <span className="font-bold text-gray-900">4.2 MB / 1 GB</span>
                        </div>
                      </div>
                    )
                  },
                  // 11. Client Rating & Reviews
                  {
                    title: 'Lawyer Rating',
                    category: 'Client Reviews',
                    render: () => (
                      <div className="bg-[#FAF9FE] text-gray-900 p-3.5 h-full flex flex-col justify-between items-center text-center font-sans">
                        <div className="w-full flex items-center justify-between text-[10px] text-gray-400">
                          <span>9:41</span>
                          <span className="text-[#007AFF] font-bold text-[9px]">Feedback</span>
                        </div>
                        <div className="my-auto flex flex-col items-center gap-1.5">
                          <div className="flex gap-1 text-amber-400">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star key={s} className="w-4 h-4 fill-amber-400" />
                            ))}
                          </div>
                          <p className="text-xs font-bold text-gray-900 mt-1">Rate Your Legal Advice</p>
                          <p className="text-[8px] text-gray-500">“Clear explanations &amp; fast contract turnaround!”</p>
                        </div>
                        <div className="bg-[#007AFF] text-white rounded-xl p-1.5 w-full text-[9px] font-bold">
                          Submit Verified Review
                        </div>
                      </div>
                    )
                  },
                  // 12. AI Contract Risk Analyzer
                  {
                    title: 'AI Contract Risk Scan',
                    category: 'Risk Intelligence',
                    render: () => (
                      <div className="bg-gray-900 text-white p-3.5 h-full flex flex-col justify-between font-sans">
                        <div className="flex items-center justify-between text-[10px] text-gray-400">
                          <span>9:41</span>
                          <span className="text-blue-400 font-bold text-[9px] flex items-center gap-1">
                            <Sparkles className="w-3 h-3" /> AI Scan
                          </span>
                        </div>
                        <div className="bg-gray-800 border border-gray-700 rounded-xl p-2.5 text-[9px] flex flex-col gap-1">
                          <p className="font-bold text-blue-300">Liability Clause Flagged</p>
                          <p className="text-[8px] text-gray-300">Section 8.2 unlimited indemnity clause detected.</p>
                          <button className="mt-1 bg-blue-600 text-white font-bold py-1 rounded-md text-[8px]">
                            Generate Standard Counter-Clause
                          </button>
                        </div>
                        <div className="bg-white/10 rounded-xl p-2 text-[8px] text-gray-300 text-center">
                          Automated Legal Guardrails
                        </div>
                      </div>
                    )
                  }
                ].concat([
                  {
                    title: 'Encrypted Legal Vault',
                    category: 'AES-256 Security',
                    render: () => (
                      <div className="bg-white text-gray-900 p-3.5 h-full flex flex-col justify-between font-sans">
                        <div className="flex items-center justify-between text-[10px] text-gray-400">
                          <span>9:41</span>
                          <span className="text-[#007AFF] font-bold text-[9px] flex items-center gap-1">
                            <ShieldCheck className="w-3 h-3 text-blue-600" /> Vault
                          </span>
                        </div>
                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-2.5 flex flex-col gap-1 text-[10px]">
                          <p className="font-bold text-gray-900">Signed NDA &amp; Power of Attorney</p>
                          <p className="text-[8px] text-gray-500">2 Documents • Encrypted &amp; Watermarked</p>
                          <button className="mt-1 bg-[#007AFF] text-white text-[9px] font-bold py-1 rounded-lg">
                            Download Verified Copy
                          </button>
                        </div>
                        <div className="bg-gray-50 border border-gray-100 rounded-xl p-2 text-[9px] flex justify-between items-center text-gray-600">
                          <span>Storage Used</span>
                          <span className="font-bold text-gray-900">4.2 MB / 1 GB</span>
                        </div>
                      </div>
                    )
                  },
                  {
                    title: 'Lawyer Rating',
                    category: 'Client Reviews',
                    render: () => (
                      <div className="bg-[#FAF9FE] text-gray-900 p-3.5 h-full flex flex-col justify-between items-center text-center font-sans">
                        <div className="w-full flex items-center justify-between text-[10px] text-gray-400">
                          <span>9:41</span>
                          <span className="text-[#007AFF] font-bold text-[9px]">Feedback</span>
                        </div>
                        <div className="my-auto flex flex-col items-center gap-1.5">
                          <div className="flex gap-1 text-amber-400">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star key={s} className="w-4 h-4 fill-amber-400" />
                            ))}
                          </div>
                          <p className="text-xs font-bold text-gray-900 mt-1">Rate Your Legal Advice</p>
                          <p className="text-[8px] text-gray-500">“Clear explanations &amp; fast contract turnaround!”</p>
                        </div>
                        <div className="bg-[#007AFF] text-white rounded-xl p-1.5 w-full text-[9px] font-bold">
                          Submit Verified Review
                        </div>
                      </div>
                    )
                  },
                  {
                    title: 'AI Contract Risk Scan',
                    category: 'Risk Intelligence',
                    render: () => (
                      <div className="bg-gray-900 text-white p-3.5 h-full flex flex-col justify-between font-sans">
                        <div className="flex items-center justify-between text-[10px] text-gray-400">
                          <span>9:41</span>
                          <span className="text-blue-400 font-bold text-[9px] flex items-center gap-1">
                            <Sparkles className="w-3 h-3" /> AI Scan
                          </span>
                        </div>
                        <div className="bg-gray-800 border border-gray-700 rounded-xl p-2.5 text-[9px] flex flex-col gap-1">
                          <p className="font-bold text-blue-300">Liability Clause Flagged</p>
                          <p className="text-[8px] text-gray-300">Section 8.2 unlimited indemnity clause detected.</p>
                          <button className="mt-1 bg-blue-600 text-white font-bold py-1 rounded-md text-[8px]">
                            Generate Standard Counter-Clause
                          </button>
                        </div>
                        <div className="bg-white/10 rounded-xl p-2 text-[8px] text-gray-300 text-center">
                          Automated Legal Guardrails
                        </div>
                      </div>
                    )
                  }
                ]).map((screen, idx) => (
                  <div key={`col4-${idx}`} className="flex flex-col items-center gap-2 group">
                    <div className="w-[190px] sm:w-[210px] h-[370px] sm:h-[410px] rounded-[30px] sm:rounded-[34px] bg-black border-[3px] border-gray-800 shadow-xl overflow-hidden relative flex flex-col justify-between p-1.5 shrink-0 transition-transform duration-300 group-hover:scale-[1.02]">
                      <div className="w-14 h-3 bg-black rounded-full mx-auto mt-0.5 z-30" />
                      <div className="w-full h-full rounded-[24px] sm:rounded-[28px] overflow-hidden flex flex-col relative my-1">
                        {screen.render()}
                      </div>
                      <div className="w-16 h-1 bg-white/40 rounded-full mx-auto mb-1 z-30" />
                    </div>
                    <div className="text-center">
                      <p className="font-sans font-bold text-xs text-gray-900">{screen.title}</p>
                      <p className="font-sans text-[10px] text-[#007AFF] font-semibold">{screen.category}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* What's Next */}
      <section className="w-full max-w-[1140px] mx-auto px-6 md:px-12 py-8 flex flex-col gap-8">
        <h2 className="font-sans font-bold text-[36px] md:text-[48px] text-[#333333]">
          What's next?
        </h2>

        <div className="flex flex-col gap-6">
          {[
            [
              'https://framerusercontent.com/images/TPFSvwbvrL5yp5qiER490NY5Qc.png',
              "What's Next Step 1",
            ],
            [
              'https://framerusercontent.com/images/ZfRh3VxyePayPNoU6qjhbbjpE.png',
              "What's Next Step 2",
            ],
            [
              'https://framerusercontent.com/images/PnofTM2wygMEnrxFQi2uVHjmgo.png',
              "What's Next Step 3",
            ],
          ].map(([src, alt]) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full rounded-3xl overflow-hidden border border-gray-200 shadow-sm"
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Ending Navigation */}
      <section className="w-full max-w-[1140px] mx-auto px-6 md:px-12 py-16 flex flex-col items-center text-center gap-8 border-t border-gray-100 mt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-[128px] md:w-[203px] h-[142px] md:h-[225px]"
        >
          <img
            src="https://framerusercontent.com/images/hw60ocT0kDeKlgo7uHn85ZLQU.png"
            alt="End Illustration"
            className="w-full h-full object-contain"
          />
        </motion.div>

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
