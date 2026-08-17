import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Brain,
  Search,
  Users,
  AlertTriangle,
  Lightbulb,
  Crosshair,
  UserCheck,
  Sparkles,
  ChevronRight,
  Layers,
  FileText,
  Activity,
  Mic,
  CreditCard,
  QrCode,
  Lock,
  CheckCircle,
  BarChart3,
  PieChart,
  BellRing,
  Fingerprint,
  Share2,
  Send,
  Wallet,
  AlertCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ScrollRevealCard from '../components/ScrollRevealCard';
import { ModalType } from '../types';
import { assetPath } from '../data/portfolioData';

interface FlintPageProps {
  onBack?: () => void;
  onNavigateProject?: (projectId: string) => void;
  onOpenModal?: (type: ModalType) => void;
}

export default function FlintPage({
  onBack,
  onNavigateProject,
  onOpenModal,
}: FlintPageProps) {
  const navigate = useNavigate();
  const [activePersona, setActivePersona] = useState<number>(0);

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

  const personas = [
    {
      name: "Aravindh",
      age: 29,
      profession: "Lawyer",
      image: "https://framerusercontent.com/images/urFINBa8xH3y5BHxwBAGAIvVPk.png",
      bio: "Lives in a busy metropolitan city, works full-time in a fast-paced environment, and enjoys using technology to simplify daily tasks.",
      goals: ["Save time on transactions while ensuring security.", "Track monthly expenses efficiently."],
      frustrations: ["Manual processes are time-consuming.", "Unclear transaction histories in existing apps."],
      behavior: ["Balances business and personal finances.", "Seeks innovative solutions to simplify tasks."],
      needs: ["Automated expense tracking.", "A user-friendly app with quick navigation for busy schedules."],
      empathy: {
        feels: ["Frustrated by inefficient money management tools.", "Overwhelmed with juggling work and personal finances.", "Excited when technology simplifies his tasks."],
        think: ["\"I need a smarter way to manage my expenses.\"", "\"Why can't apps be easier to use?\"", "\"If I save time here, I can focus more on work.\""],
        says: ["\"I need to keep track of my expenses better.\"", "\"This app is too complicated to navigate.\"", "\"I prefer quick and seamless payment options.\""],
        does: ["Frequently transfers money through digital wallets.", "Searches for apps with automation features.", "Reviews feedback before downloading apps."]
      }
    },
    {
      name: "Anandha Krishanan",
      age: 26,
      profession: "Entrepreneur",
      image: "https://framerusercontent.com/images/qpFIoQtxUxKMJIiyUp6D5k9nf2U.png",
      bio: "Manages a boutique business with a small team, oversees transactions with suppliers, and values cost-effective tools.",
      goals: ["Streamline personal expense management.", "Perform quick and secure money transfers."],
      frustrations: ["Keep track of business income and expenses effortlessly.", "No automated financial insights in existing apps."],
      behavior: ["Balances business and personal finances.", "Seeks innovative solutions to simplify tasks."],
      needs: ["Integration of invoicing and expense tracking tools.", "Predictive insights for better financial planning."],
      empathy: {
        feels: ["Stressed managing finances and transactions manually.", "Relieved when payments and tracking are streamlined.", "Confident with tools that offer transparency."],
        think: ["\"Managing business finances shouldn't take this long.\"", "\"I need an app that helps me save time and effort.\"", "\"How secure is this platform for my transactions?\""],
        says: ["\"I need a solution that integrates business and personal expenses.\"", "\"It’s hard to find secure apps for small businesses.\"", "\"Time is money—I can’t afford delays.\""],
        does: ["Analyzes spending patterns for his business.", "Explores platforms that consolidate personal and business finances.", "Regularly checks transaction records for accuracy."]
      }
    },
    {
      name: "Vijo",
      age: 24,
      profession: "Freelance Graphic Designer",
      image: "https://framerusercontent.com/images/DHgNZGTc21taUaD2L6nEr4qc0.png",
      bio: "Works on a project basis with inconsistent income. Seeks apps that support her financial independence and flexibility.",
      goals: ["Manage fluctuating income streams effectively.", "Simplify the process of invoicing and budgeting."],
      frustrations: ["Finds it hard to monitor small, frequent transactions.", "Difficulty in keeping track of irregular payments."],
      behavior: ["Relies on voice assistants for day-to-day tasks.", "Actively seeks apps designed with accessibility in mind."],
      needs: ["Real-time fraud alerts and security monitoring.", "Predictive insights for better financial planning."],
      empathy: {
        feels: ["Anxious about inconsistent cash flow.", "Empowered when managing finances on her own terms.", "Frustrated switching between multiple apps."],
        think: ["\"I need one tool for all my financial needs.\"", "\"Tracking income from various projects is a hassle.\"", "\"Why can’t this app handle invoicing too?\""],
        says: ["\"This app should understand freelancers' needs.\"", "\"I don’t have time to juggle multiple tools.\"", "\"A centralized solution would make my life easier.\""],
        does: ["Tracks project-based income regularly.", "Compares apps to find the most comprehensive features.", "Adjusts budgets based on fluctuating earnings."]
      }
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white text-[#1A1A1A] flex flex-col font-sans selection:bg-[#5C019E] selection:text-white"
    >
      <Navbar
        onOpenModal={(type) => onOpenModal?.(type)}
        activePage="flint"
        onNavigateHome={handleBack}
      />

      {/* Hero Section */}
      <section className="w-full pt-20 sm:pt-28 pb-4">
        <ScrollRevealCard className="max-w-[1008px] mx-auto px-4">
          <div className="w-full max-w-[1008px] py-2 mx-auto">
            <div className="w-full max-w-[1008px] bg-[#141414] text-white rounded-[28px] sm:rounded-[40px] md:rounded-[60px] p-5 sm:p-8 md:p-14 flex flex-col items-center justify-center text-center gap-6 sm:gap-8 border border-white/10 relative overflow-hidden shadow-2xl">
              {/* Subtle Ambient Blur */}
              <div className="absolute w-[420px] h-[420px] rounded-full bg-[#5C019E]/25 blur-3xl pointer-events-none" />

              <div className="flex flex-col items-center gap-1 mt-2 z-20">
                <span className="font-sans font-black text-[32px] sm:text-[60px] md:text-[72px] tracking-tight uppercase leading-none text-white drop-shadow-md">
                  FLINT
                </span>

                <h1 className="font-serif italic text-[32px] sm:text-[60px] md:text-[72px] leading-tight tracking-tight text-[#A793F4] drop-shadow-md">
                  Mobile Payment
                </h1>
              </div>

              <div className="w-[150px] sm:w-[220px] md:w-[258px] h-[115px] sm:h-[170px] md:h-[199px] bg-[#5C019E] rounded-[24px] sm:rounded-[32px] md:rounded-[50px] overflow-hidden shadow-lg relative flex items-center justify-center border-2 border-white/20 z-20">
                <video
                  src={assetPath("flint hero.mp4")}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="max-w-[632px] font-sans font-bold text-[15px] sm:text-[18px] md:text-[21px] leading-[1.6] sm:leading-[1.77] text-white/90 z-20">
                Flint is a mobile application designed to provide users with a seamless and secure way to manage finances, make payments, and transfer money.
              </p>
            </div>
          </div>
        </ScrollRevealCard>
      </section>

      {/* Metadata Card */}
      <section className="w-full max-w-[998px] mx-auto px-4 -mt-2 sm:-mt-6 z-10 relative">
        <div className="bg-white border-2 border-[#F2F2F2] rounded-[28px] sm:rounded-[36px] md:rounded-[48px] p-5 sm:p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 shadow-md">
          <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
            <span className="font-sans font-bold text-[11px] sm:text-[13px] tracking-[3px] uppercase text-[#9197A8]">
              Category
            </span>
            <h3 className="font-sans font-bold text-[18px] sm:text-[20px] md:text-[24px] text-[#333333]">
              Fintech &amp; Mobile Payment
            </h3>
          </div>

          <div className="w-full md:w-px h-[1px] md:h-12 bg-gray-200" />

          <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
            <span className="font-sans font-bold text-[11px] sm:text-[13px] tracking-[3px] uppercase text-[#9197A8]">
              My Role
            </span>
            <h3 className="font-sans font-bold text-[18px] sm:text-[20px] md:text-[24px] text-[#333333]">
              UI/UX Designer
            </h3>
          </div>

        </div>
      </section>

      {/* Overview & Project Context */}
      <section className="w-full max-w-[1140px] mx-auto px-6 md:px-12 py-12 flex flex-col gap-16">
        <div className="flex flex-col md:flex-row gap-8 items-start justify-between border-t border-gray-100 pt-12">
          <div className="w-full md:w-1/3">
            <span className="font-sans font-bold text-xs tracking-widest uppercase text-gray-400">
              Project Context
            </span>
            <h2 className="font-sans font-bold text-[32px] md:text-[40px] text-gray-900 mt-2">
              Overview
            </h2>
          </div>

          <div className="w-full md:w-2/3 flex flex-col gap-6 text-gray-600 font-sans text-lg leading-relaxed">
            <p className="text-xl font-normal text-gray-800 leading-relaxed">
              Flint is a mobile application designed to provide users with a{' '}
              <strong className="text-[#5C019E] font-semibold">seamless</strong> and{' '}
              <strong className="text-[#5C019E] font-semibold">secure</strong> way to manage finances, make payments, and transfer money.
            </p>
            <p>
              The goal was to create an affordable, instant, and user-friendly mobile payment solution with modern, clean aesthetics. The design focuses on user-centric principles to ensure an intuitive experience.
            </p>
            <p>
              As the sole UI/UX Designer, I was responsible for the end-to-end design process, from user research to wireframing, prototyping, and high-fidelity design.
            </p>
          </div>
        </div>
      </section>

      {/* High Level Goals */}
      <section className="w-full max-w-[1140px] mx-auto px-6 md:px-12 py-12 flex flex-col gap-10 border-t border-gray-100">
        <div>
          <span className="font-sans font-bold text-xs tracking-widest uppercase text-gray-400">
            Strategic Focus
          </span>
          <h2 className="font-sans font-bold text-[32px] md:text-[40px] text-gray-900 mt-1">
            High Level Goals
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-gradient-to-br from-[#FAF5FF] to-white border border-purple-100 rounded-3xl flex flex-col gap-4 shadow-xs relative overflow-hidden group hover:border-[#5C019E]/40 transition-colors">
            <span className="font-sans font-black text-6xl text-[#5C019E]/20 group-hover:text-[#5C019E]/30 transition-colors">
              01
            </span>
            <h3 className="font-sans font-bold text-2xl text-gray-900">
              Provide a Seamless User Experience
            </h3>
            <p className="font-sans text-gray-600 text-base leading-relaxed">
              Simplify navigation and reduce friction for instant daily transactions, bill payments, and money transfers.
            </p>
          </div>

          <div className="p-8 bg-gradient-to-br from-[#FAF5FF] to-white border border-purple-100 rounded-3xl flex flex-col gap-4 shadow-xs relative overflow-hidden group hover:border-[#5C019E]/40 transition-colors">
            <span className="font-sans font-black text-6xl text-[#5C019E]/20 group-hover:text-[#5C019E]/30 transition-colors">
              02
            </span>
            <h3 className="font-sans font-bold text-2xl text-gray-900">
              Promote Financial Transparency
            </h3>
            <p className="font-sans text-gray-600 text-base leading-relaxed">
              Provide clear, automated spending breakdowns and proactive alerts that empower users to stay in control.
            </p>
          </div>
        </div>
      </section>

      {/* Initial Challenges, Research & Trust */}
      <section className="w-full max-w-[1140px] mx-auto px-6 md:px-12 py-12 flex flex-col gap-12 border-t border-gray-100">
        {/* Challenge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 flex flex-col gap-2">
            <span className="font-sans font-bold text-xs tracking-widest uppercase text-gray-400">
              Core Dilemma
            </span>
            <h3 className="font-sans font-bold text-2xl md:text-3xl text-gray-900">
              Initial Challenges
            </h3>
          </div>
          <div className="lg:col-span-8 bg-[#F9FAFB] border border-gray-200 rounded-3xl p-6 sm:p-8">
            <p className="font-sans text-gray-700 text-lg leading-relaxed">
              We faced a significant challenge: striking the right balance between simplicity and functionality. Users wanted an app packed with features—QR payments, expense categorization, and transaction tracking—yet they also expected an intuitive and seamless experience.
            </p>
            <p className="font-sans text-gray-600 text-base leading-relaxed mt-4">
              The real struggle was ensuring that these features didn’t clutter the interface or overwhelm users. It took multiple iterations, refining every detail to keep the app powerful yet effortless to navigate.
            </p>
          </div>
        </div>

        {/* Research */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 flex flex-col gap-2">
            <span className="font-sans font-bold text-xs tracking-widest uppercase text-gray-400">
              Market Understanding
            </span>
            <h3 className="font-sans font-bold text-2xl md:text-3xl text-gray-900">
              Research &amp; App Immersion
            </h3>
          </div>
          <div className="lg:col-span-8 bg-[#F9FAFB] border border-gray-200 rounded-3xl p-6 sm:p-8">
            <p className="font-sans text-gray-700 text-lg leading-relaxed">
              Designing Flint started with in-depth research to grasp the mobile payment landscape and user expectations. We analyzed popular apps like Google Pay, Paytm, and PhonePe, identifying their strengths and areas for improvement.
            </p>
            <p className="font-sans text-gray-600 text-base leading-relaxed mt-4">
              While these apps offered powerful features, many lacked intuitive workflows and seamless user experiences. To bridge this gap, we conducted surveys and interviews with 50 participants, including students, young professionals, and small business owners. Their feedback highlighted the need for faster transactions, efficient expense tracking, and a design that was both visually appealing and secure.
            </p>
          </div>
        </div>

        {/* Trust Building */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 flex flex-col gap-2">
            <span className="font-sans font-bold text-xs tracking-widest uppercase text-gray-400">
              Design Philosophy
            </span>
            <h3 className="font-sans font-bold text-2xl md:text-3xl text-gray-900">
              Trust Building Strategy
            </h3>
          </div>
          <div className="lg:col-span-8 bg-gradient-to-br from-[#FAF5FF] to-[#F3E8FF]/30 border border-purple-200 rounded-3xl p-6 sm:p-8 flex flex-col gap-6">
            <div>
              <h4 className="font-sans font-bold text-xl text-[#5C019E] mb-2">
                1. Security &amp; Transparency
              </h4>
              <p className="font-sans text-gray-700 text-base leading-relaxed">
                Building trust was at the core of Flint’s design. We integrated robust security features like PIN authentication, masked card details, and secure QR code scanning, safeguarding user data. Real-time notifications and detailed transaction breakdowns kept users informed with clear confidence.
              </p>
            </div>
            <div className="border-t border-purple-200/60 pt-4">
              <h4 className="font-sans font-bold text-xl text-[#5C019E] mb-2">
                2. Visual &amp; Personalization
              </h4>
              <p className="font-sans text-gray-700 text-base leading-relaxed">
                The visual design played a crucial role, utilizing a professional color palette of purple and white representing reliability and innovation. Clean interface consistency and customizable expense categories empowered users to feel in full control of their financial health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Processes */}
      <section className="w-full max-w-[1140px] mx-auto px-6 md:px-12 py-12 flex flex-col gap-10 border-t border-gray-100">
        <div>
          <span className="font-sans font-bold text-xs tracking-widest uppercase text-gray-400">
            Framework
          </span>
          <h2 className="font-sans font-bold text-[32px] md:text-[40px] text-gray-900 mt-1">
            Design Processes
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {[
            {
              step: 'Empathize',
              img: 'https://framerusercontent.com/images/ZXveBzI1XXt4ZaHODTma6hp4ZbI.png',
            },
            {
              step: 'Define',
              img: 'https://framerusercontent.com/images/isGWxQvQ44WLJUs0irBHznciQ7Y.png',
            },
            {
              step: 'Ideate',
              img: 'https://framerusercontent.com/images/7R3PvaYRE9roQFitoi8LIeFuPM.png',
            },
            {
              step: 'Design',
              img: 'https://framerusercontent.com/images/CbhWrxOemOS9A8L96ZDNAvPxE.png',
            },
            {
              step: 'Test',
              img: 'https://framerusercontent.com/images/7xpBQ57Mhw9UzkoobvVlFVDv2gY.png',
            },
          ].map((item, index) => (
            <div
              key={item.step}
              className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col items-center text-center gap-3 shadow-xs hover:border-[#5C019E] hover:shadow-md transition-all group"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-gray-100">
                <img
                  src={item.img}
                  alt={item.step}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="font-sans font-bold text-sm text-gray-400">0{index + 1}</span>
              <span className="font-sans font-bold text-base sm:text-lg text-gray-900">
                {item.step}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Problem Statement & Solutions */}
      <section className="w-full max-w-[1140px] mx-auto px-6 md:px-12 py-12 flex flex-col gap-12 border-t border-gray-100">
        <div>
          <span className="font-sans font-bold text-xs tracking-widest uppercase text-gray-400">
            Pain Points &amp; Interventions
          </span>
          <h2 className="font-sans font-bold text-[32px] md:text-[40px] text-gray-900 mt-1">
            Problem Statement &amp; Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              problem: "Many users struggle to keep track of their daily spending, leading to overspending and poor financial management. Traditional banking apps provide only transaction histories without real-time insights.",
              solution: "Flint offers an AI-powered Financial Health Checkup, which analyzes spending patterns and provides real-time insights. Users receive categorized reports, predictive budgeting tips, and alerts when exceeding budgets."
            },
            {
              problem: "Most digital payment apps require multiple steps to complete a transaction, including selecting a recipient, entering the amount, and confirming payment. This process can be time-consuming.",
              solution: "Flint integrates an AI-powered voice assistant that allows users to make payments through simple voice commands, e.g., 'Send ₹500 to Rahul', instantly opening biometric verification to complete payments."
            },
            {
              problem: "Users often forget to pay their bills on time, leading to late fees, service disruptions, and unnecessary stress. Current apps send reminders, but they are not personalized enough.",
              solution: "Flint’s Smart AI Reminders track due dates for electricity, rent, and other bills. The app predicts upcoming payments based on past transactions and automatically schedules proactive auto-pay options."
            },
            {
              problem: "Adding AI and voice commands increases concerns about privacy and data security, as sensitive financial data is processed.",
              solution: "Flint’s AI assistant is built with privacy-first architecture, ensuring end-to-end data encryption, secure voice recognition, and strict adherence to global security standards."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#FAF9FE] border border-purple-100 rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-2xs">
              <div className="flex flex-col gap-2 border-b border-purple-100 pb-4">
                <div className="flex items-center gap-2 text-rose-600 font-sans font-bold text-xs uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4" /> Problem {idx + 1}
                </div>
                <p className="font-sans text-gray-700 text-base leading-relaxed">
                  {item.problem}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-emerald-600 font-sans font-bold text-xs uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" /> Flint Solution
                </div>
                <p className="font-sans font-medium text-gray-900 text-base leading-relaxed">
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SWOT Analysis */}
      <section className="w-full max-w-[1140px] mx-auto px-6 md:px-12 py-12 flex flex-col gap-10 border-t border-gray-100">
        <div>
          <span className="font-sans font-bold text-xs tracking-widest uppercase text-gray-400">
            Strategic Evaluation
          </span>
          <h2 className="font-sans font-bold text-[32px] md:text-[40px] text-gray-900 mt-1">
            SWOT Analysis
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-8 bg-[#F4FBF7] border border-emerald-200 rounded-3xl flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white font-black text-xl flex items-center justify-center">
              S
            </div>
            <h3 className="font-sans font-bold text-xl text-gray-900">Strengths</h3>
            <ul className="space-y-2 font-sans text-sm text-gray-700 leading-relaxed list-disc list-inside">
              <li><strong>AI-Powered Insights:</strong> Tracks expenses and provides actionable insights.</li>
              <li><strong>Voice Commands:</strong> Hands-free payments and balance checks improve convenience.</li>
              <li><strong>Security:</strong> Biometric authentication and encryption build user trust.</li>
              <li><strong>User-Friendly Design:</strong> Intuitive interface ensures ease of use for all demographics.</li>
            </ul>
          </div>

          <div className="p-8 bg-[#FFF5F5] border border-rose-200 rounded-3xl flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-600 text-white font-black text-xl flex items-center justify-center">
              W
            </div>
            <h3 className="font-sans font-bold text-xl text-gray-900">Weaknesses</h3>
            <ul className="space-y-2 font-sans text-sm text-gray-700 leading-relaxed list-disc list-inside">
              <li><strong>Limited Global Reach:</strong> Currently not optimized for international transactions.</li>
              <li><strong>Dependency on AI:</strong> Heavy reliance on AI may lead to issues if technology fails.</li>
              <li><strong>Learning Voice Commands:</strong> Some users may require time to adapt to voice-enabled features.</li>
            </ul>
          </div>

          <div className="p-8 bg-[#F0F7FF] border border-blue-200 rounded-3xl flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-black text-xl flex items-center justify-center">
              O
            </div>
            <h3 className="font-sans font-bold text-xl text-gray-900">Opportunities</h3>
            <ul className="space-y-2 font-sans text-sm text-gray-700 leading-relaxed list-disc list-inside">
              <li><strong>Expansion to Global Markets:</strong> Adding support for international payments and currency conversions.</li>
              <li><strong>Partnerships:</strong> Collaborating with banks and fintech companies to expand reach and credibility.</li>
            </ul>
          </div>

          <div className="p-8 bg-[#FFFBF0] border border-amber-200 rounded-3xl flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-600 text-white font-black text-xl flex items-center justify-center">
              T
            </div>
            <h3 className="font-sans font-bold text-xl text-gray-900">Threats</h3>
            <ul className="space-y-2 font-sans text-sm text-gray-700 leading-relaxed list-disc list-inside">
              <li><strong>Competition:</strong> Established players like PayPal and PhonePe may introduce similar features.</li>
              <li><strong>User Privacy Concerns:</strong> Mismanagement of sensitive data could erode trust.</li>
              <li><strong>Market Saturation:</strong> Increasing number of fintech apps may reduce differentiation.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="w-full max-w-[1140px] mx-auto px-6 md:px-12 py-12 flex flex-col gap-10 border-t border-gray-100">
        <div>
          <span className="font-sans font-bold text-xs tracking-widest uppercase text-gray-400">
            Demographics
          </span>
          <h2 className="font-sans font-bold text-[32px] md:text-[40px] text-gray-900 mt-1">
            Target Audience
          </h2>
        </div>

        <div className="flex flex-wrap gap-4 items-center justify-center p-8 bg-[#FAF9FE] border border-purple-100 rounded-3xl">
          {[
            'Young Professionals',
            'Families',
            'Elderly Users',
            'Business Owners',
            'Physically Challenged Peoples',
          ].map((tag) => (
            <div
              key={tag}
              className="px-6 py-3.5 bg-white border border-purple-200 rounded-full font-sans font-bold text-base text-[#5C019E] shadow-2xs flex items-center gap-2"
            >
              <Users className="w-4 h-4 text-[#5C019E]" />
              {tag}
            </div>
          ))}
        </div>
      </section>

      {/* User Personas */}
      <section className="w-full max-w-[1140px] mx-auto px-6 md:px-12 py-12 flex flex-col gap-10 border-t border-gray-100">
        <div>
          <span className="font-sans font-bold text-xs tracking-widest uppercase text-gray-400">
            User Archetypes
          </span>
          <h2 className="font-sans font-bold text-[32px] md:text-[40px] text-gray-900 mt-1">
            User Personas
          </h2>
        </div>

        {/* Persona Selector Tabs */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2" style={{ scrollbarWidth: 'none' }}>
          {personas.map((persona, index) => (
            <button
              key={persona.name}
              onClick={() => setActivePersona(index)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full font-sans font-bold text-base transition-all cursor-pointer whitespace-nowrap ${
                activePersona === index
                  ? 'bg-[#5C019E] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <img src={persona.image} alt={persona.name} className="w-7 h-7 rounded-full object-cover" />
              {persona.name} ({persona.profession})
            </button>
          ))}
        </div>

        {/* Active Persona Card */}
        {(() => {
          const p = personas[activePersona];
          return (
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 sm:p-10 flex flex-col gap-8 shadow-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-6 border-b border-gray-100">
                <img src={p.image} alt={p.name} className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border border-purple-200 shadow-md" />
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-sans font-bold text-2xl sm:text-3xl text-gray-900">{p.name}</h3>
                    <span className="px-3 py-1 bg-purple-100 text-[#5C019E] font-bold text-xs rounded-full">
                      Age: {p.age}
                    </span>
                  </div>
                  <span className="font-sans font-bold text-lg text-[#5C019E]">{p.profession}</span>
                  <p className="font-sans text-gray-600 text-base mt-2 max-w-[700px]">{p.bio}</p>
                </div>
              </div>

              {/* Goals, Frustrations, Behavior, Needs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="p-5 bg-purple-50/50 rounded-2xl flex flex-col gap-2">
                  <span className="font-sans font-bold text-xs uppercase tracking-wider text-[#5C019E]">Goals</span>
                  <ul className="space-y-1 font-sans text-sm text-gray-700">
                    {p.goals.map((g, i) => <li key={i}>• {g}</li>)}
                  </ul>
                </div>

                <div className="p-5 bg-rose-50/50 rounded-2xl flex flex-col gap-2">
                  <span className="font-sans font-bold text-xs uppercase tracking-wider text-rose-600">Frustrations</span>
                  <ul className="space-y-1 font-sans text-sm text-gray-700">
                    {p.frustrations.map((f, i) => <li key={i}>• {f}</li>)}
                  </ul>
                </div>

                <div className="p-5 bg-blue-50/50 rounded-2xl flex flex-col gap-2">
                  <span className="font-sans font-bold text-xs uppercase tracking-wider text-blue-600">Behavior</span>
                  <ul className="space-y-1 font-sans text-sm text-gray-700">
                    {p.behavior.map((b, i) => <li key={i}>• {b}</li>)}
                  </ul>
                </div>

                <div className="p-5 bg-emerald-50/50 rounded-2xl flex flex-col gap-2">
                  <span className="font-sans font-bold text-xs uppercase tracking-wider text-emerald-600">Needs</span>
                  <ul className="space-y-1 font-sans text-sm text-gray-700">
                    {p.needs.map((n, i) => <li key={i}>• {n}</li>)}
                  </ul>
                </div>
              </div>

              {/* Empathy Map */}
              <div className="bg-[#FAF9FE] border border-purple-100 rounded-2xl p-6 flex flex-col gap-4">
                <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#5C019E]">
                  Empathy Map
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-gray-200">
                    <span className="font-sans font-bold text-xs text-purple-700 uppercase">Feels</span>
                    <ul className="mt-2 space-y-1 font-sans text-xs text-gray-600">
                      {p.empathy.feels.map((item, i) => <li key={i}>• {item}</li>)}
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-gray-200">
                    <span className="font-sans font-bold text-xs text-purple-700 uppercase">Thinks</span>
                    <ul className="mt-2 space-y-1 font-sans text-xs text-gray-600 italic">
                      {p.empathy.think.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-gray-200">
                    <span className="font-sans font-bold text-xs text-purple-700 uppercase">Says</span>
                    <ul className="mt-2 space-y-1 font-sans text-xs text-gray-600 italic">
                      {p.empathy.says.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-gray-200">
                    <span className="font-sans font-bold text-xs text-purple-700 uppercase">Does</span>
                    <ul className="mt-2 space-y-1 font-sans text-xs text-gray-600">
                      {p.empathy.does.map((item, i) => <li key={i}>• {item}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </section>

      {/* User Journey Mapping */}
      <section className="w-full max-w-[1140px] mx-auto px-6 md:px-12 py-12 flex flex-col gap-10 border-t border-gray-100">
        <div>
          <span className="font-sans font-bold text-xs tracking-widest uppercase text-gray-400">
            User Experience Steps
          </span>
          <h2 className="font-sans font-bold text-[32px] md:text-[40px] text-gray-900 mt-1">
            User Journey Mapping
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              stage: 'Pre-App Discovery',
              actions: 'Realizes they need better control over expenses. Uses spreadsheets or notes to track spending. Feels overwhelmed with multiple banking apps.',
              pain: 'Manual tracking is time-consuming. No insights on spending patterns. Misses bill payments due to lack of reminders.',
              fix: 'AI-driven insights automate expense tracking.',
            },
            {
              stage: 'Current Process',
              actions: 'Uses UPI apps like GPay, PhonePe, or Net Banking. Enters details manually for each transaction. Checks balances across separate apps.',
              pain: 'Switching between multiple apps is frustrating. No AI-driven spending insights. Transactions can be slow.',
              fix: 'Smart assistant helps manage money with voice commands.',
            },
            {
              stage: 'Expense Tracking',
              actions: 'Reviews SMS or bank statements to check expenses. Uses finance apps or manual logs. Tries to categorize expenses manually.',
              pain: 'No automatic categorization of expenses. Hard to identify where money is going. No real-time alerts or AI recommendations.',
              fix: 'One app for payments, tracking, and financial planning.',
            },
            {
              stage: 'Financial Planning',
              actions: 'Sets reminders on mobile for bills. Uses Excel sheets or budgeting apps. Struggles to track & limit overspending.',
              pain: 'Budgeting requires too much effort. No AI-based insights for smarter spending. Forgetfulness leads to penalties.',
              fix: 'Real-time fraud alerts and security monitoring.',
            },
          ].map((step, idx) => (
            <div key={step.stage} className="bg-white border-2 border-gray-200 rounded-3xl p-6 flex flex-col gap-4 shadow-2xs">
              <div className="px-3 py-1 bg-[#5C019E] text-white font-sans font-bold text-xs rounded-full w-fit">
                Stage 0{idx + 1}
              </div>
              <h3 className="font-sans font-bold text-xl text-gray-900">{step.stage}</h3>

              <div className="flex flex-col gap-1 text-xs text-gray-600">
                <span className="font-bold text-gray-800 uppercase tracking-wider">User Actions</span>
                <p>{step.actions}</p>
              </div>

              <div className="flex flex-col gap-1 text-xs text-rose-600 bg-rose-50/60 p-3 rounded-xl border border-rose-100">
                <span className="font-bold uppercase tracking-wider">Pain Points</span>
                <p>{step.pain}</p>
              </div>

              <div className="flex flex-col gap-1 text-xs text-emerald-700 bg-emerald-50/60 p-3 rounded-xl border border-emerald-100 mt-auto">
                <span className="font-bold uppercase tracking-wider">Fix</span>
                <p>{step.fix}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Flint SVG Illustration */}
      <section className="w-full max-w-[1140px] mx-auto px-6 md:px-12 py-12 flex flex-col items-center gap-8 border-t border-gray-100">
        <img
          src={assetPath('flint.svg')}
          alt="Flint App Illustration"
          className="w-full max-w-2xl h-auto rounded-3xl shadow-lg"
        />
      </section>

      {/* Next Project Navigation */}
      <section className="w-full max-w-[1140px] mx-auto px-6 md:px-12 py-16 flex flex-col items-center text-center gap-8 border-t border-gray-100">
        <h2 className="font-sans font-bold text-[32px] md:text-[48px] text-gray-900">
          Explore Other Case Studies
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-2">
          <button
            onClick={() => handleNavigateProject('spark')}
            className="flex items-center gap-3 px-8 py-4 bg-white border border-gray-300 rounded-full shadow-sm hover:border-black transition-all group cursor-pointer"
          >
            <span className="font-sans font-bold text-lg text-gray-900">
              Next project: Spark / Collectibles
            </span>

            <div className="w-8 h-8 rounded-full bg-[#5C019E] text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>

          <button
            onClick={() => handleNavigateProject('legal-link')}
            className="flex items-center gap-3 px-8 py-4 bg-white border border-gray-300 rounded-full shadow-sm hover:border-black transition-all group cursor-pointer"
          >
            <span className="font-sans font-bold text-lg text-gray-900">
              Legal Link
            </span>

            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
