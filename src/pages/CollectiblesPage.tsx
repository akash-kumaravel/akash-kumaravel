import SparkInterfaceShowcase from "../components/SparkInterfaceShowcase";
import DesignProcessTimeline from '../components/DesignProcessTimeline';
import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Building,
  Calendar,
  Sparkles,
  CheckCircle2,
  Trophy,
  Flame,
  Gift,
  Award,
  Repeat,
  Zap,
  Star,
  ShieldCheck,
  Users,
  Crown,
  Layers,
  Search,
  Music,
  Radio,
  MessageCircle,
  Play,
  Heart,
  Share2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ScrollRevealCard from '../components/ScrollRevealCard';
import { ModalType } from '../types';

interface CollectiblesPageProps {
  onBack?: () => void;
  onNavigateProject?: (projectId: string) => void;
  onOpenModal?: (type: ModalType) => void;
}

export default function CollectiblesPage({
  onBack,
  onNavigateProject,
  onOpenModal,
}: CollectiblesPageProps) {
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
        activePage="collectibles"
        onNavigateHome={handleBack}
      />

      {/* Hero Section */}
      <section className="w-full pt-20 sm:pt-28 pb-4">
        <ScrollRevealCard className="max-w-[1008px] mx-auto px-4">
          <div className="w-full max-w-[1008px] py-2 mx-auto">
            <div className="w-full max-w-[1008px] bg-[#141414] text-white rounded-[28px] sm:rounded-[40px] md:rounded-[60px] p-5 sm:p-8 md:p-14 flex flex-col items-center justify-center text-center gap-6 sm:gap-8 border border-white/10 relative overflow-hidden shadow-2xl">
              <div className="flex flex-col items-center gap-1 mt-2 z-20">
                <span className="font-sans font-black text-[32px] sm:text-[60px] md:text-[72px] tracking-tight uppercase leading-none text-white drop-shadow-md">
                  SPARK
                </span>

                <h1 className="font-serif italic text-[32px] sm:text-[60px] md:text-[72px] leading-tight tracking-tight text-[#007AFF] drop-shadow-md">
                  Social &amp; Audio Discovery
                </h1>
              </div>

              <div className="w-[150px] sm:w-[220px] md:w-[258px] h-[115px] sm:h-[170px] md:h-[199px] bg-white rounded-[24px] sm:rounded-[32px] md:rounded-[50px] overflow-hidden shadow-lg relative flex items-center justify-center border-2 border-white/20">
                <video
                  src="/assets/spart hero.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="max-w-[720px] font-sans font-bold text-[15px] sm:text-[18px] md:text-[21px] leading-[1.6] sm:leading-[1.77] text-white/90 z-20">
                Spark is a social platform that combines trending content, personalized music recommendations, and interactive social engagement. Users can explore viral topics, connect with friends through chats, and discover music seamlessly within the app. Spark bridges the gap between content creation, music discovery, and real-time connections in one intuitive platform.
              </p>
            </div>
          </div>
        </ScrollRevealCard>
      </section>

      {/* Metadata */}
      <section className="w-full max-w-[998px] mx-auto px-4 -mt-2 sm:-mt-6 z-10 relative">
        <div className="bg-white border-2 border-[#F2F2F2] rounded-[28px] sm:rounded-[36px] md:rounded-[48px] p-5 sm:p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 shadow-md">
          <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
            <span className="font-sans font-bold text-[11px] sm:text-[13px] tracking-[3px] uppercase text-[#9197A8]">
              Category
            </span>
            <h3 className="font-sans font-bold text-[18px] sm:text-[20px] md:text-[24px] text-[#333333]">
              Social &amp; Audio Engagement
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

      {/* What Did I Do */}
      <section className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 md:px-12 py-10 sm:py-16 flex flex-col gap-6 sm:gap-8">
        <h2 className="font-sans font-bold text-[28px] sm:text-[36px] md:text-[48px] text-[#333333]">
          What did I do?
        </h2>

        <div className="flex flex-wrap gap-2.5 sm:gap-3">
          {[
            'Strategy',
            'User Research',
            'Audio UX Design',
            'Motion Design',
            'High Fidelity Prototype',
            'Design System Building',
            'Execution & QA',
            'Growth Strategy',
          ].map((chip) => (
            <div
              key={chip}
              className="px-4 sm:px-5 py-2 sm:py-2.5 bg-white border border-[#E9E9E9] rounded-full shadow-xs font-sans font-bold text-[15px] sm:text-[18px] md:text-[21px] text-[#3D3C5A]"
            >
              {chip}
            </div>
          ))}
        </div>
      </section>

      {/* Project Timeline */}
      <section className="w-full max-w-[1140px] mx-auto px-6 md:px-12 py-12 flex flex-col gap-6">
        <h2 className="font-sans font-bold text-[36px] md:text-[48px] text-[#333333]">
          Project timeline
        </h2>

        <p className="font-sans font-medium text-[18px] md:text-[20px] text-[#636B82]">
          A rough visual representation of the whole process from inception till measurement
        </p>

        <DesignProcessTimeline />
      </section>

      {/* Prologue */}
      <section className="w-full max-w-[1140px] mx-auto px-6 md:px-12 py-12 flex flex-col gap-8 border-t border-gray-100">
        <span className="font-sans font-bold text-[13px] tracking-[3.5px] uppercase text-[#9197A8]">
          Prologue
        </span>

        <h2 className="font-sans font-bold text-[36px] md:text-[48px] text-[#333333]">
          Content meets music &amp; real-time social connection
        </h2>

        <p className="font-sans font-medium text-[18px] md:text-[20px] text-[#636B82] max-w-[900px] leading-[1.6]">
          Social media consumption and digital audio streaming have surged globally, with users spending hours every day exploring viral trends and discovering new music. However, traditional apps separate social feeds, music streaming, and instant messaging into isolated silos. Spark bridges these worlds by merging trending content feeds, intelligent music discovery, and real-time social chat into a single seamless ecosystem.
        </p>

        <div className="flex flex-col gap-4 mt-4">
          <h2 className="font-sans font-bold text-[32px] md:text-[40px] text-[#333333]">
            How can product unify social &amp; music discovery?
          </h2>

          <p className="font-sans font-medium text-[18px] md:text-[20px] text-[#636B82] max-w-[900px] leading-[1.6]">
            Seeing the rapid growth in short-form content and social music sharing, leadership wanted an innovative platform strategy that unifies viral content, audio streaming, and instant chat. The core high-level objectives were:
          </p>

          <div className="flex flex-wrap gap-3 mt-2">
            {[
              'Trending Content Integration',
              'Personalized Music Recommendations',
              'Interactive Social Engagement',
            ].map((tag) => (
              <div
                key={tag}
                className="px-5 py-2.5 bg-white border border-black/15 rounded-full font-sans font-bold text-[18px] text-black/80 shadow-xs"
              >
                {tag}
              </div>
            ))}
          </div>

          <p className="font-sans italic font-bold text-[20px] text-gray-900 mt-4 p-4 bg-gray-50 border-l-4 border-[#007AFF] rounded-r-xl">
            &quot;How can we seamlessly bridge viral content creation, music discovery, and real-time social chat in one intuitive platform?&quot;
          </p>
        </div>
      </section>

      {/* Ideas */}
      <section className="w-full max-w-[1140px] mx-auto px-6 md:px-12 py-12 flex flex-col gap-8 border-t border-gray-100">
        <h2 className="font-sans font-bold text-[36px] md:text-[48px] text-[#333333]">
          50+ innovative ideas from the team
        </h2>

        <p className="font-sans font-medium text-[18px] md:text-[20px] text-[#636B82] max-w-[900px] leading-[1.6]">
          Since social media and music discovery span diverse user behaviors, we gathered concepts across design, engineering, product, and audio content teams. Key ideas we converged on:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-4">
          {[
            {
              title: 'Audio Sparks',
              text: 'Short 15-second music snippets attached to trending posts that users can save to Spotify or Apple Music directly.',
              className: 'bg-[#FAFBFF] border-gray-200',
            },
            {
              title: 'Interactive Chat Rooms',
              text: 'Real-time group chat rooms synced with live trending topics and shared music listening sessions.',
              className: 'bg-[#FEF9E7] border-amber-200 rotate-2',
            },
            {
              title: 'Personalized Sound Wave',
              text: 'AI-driven music recommendations matching user mood, current viral trends, and friends listening habits.',
              className: 'bg-[#FAFBFF] border-gray-200 -rotate-2',
            },
            {
              title: 'Spark Stories & Beats',
              text: 'Interactive story sharing with synchronized background music tracks and real-time friend reactions.',
              className: 'bg-[#FEF9E7] border-amber-200 rotate-1',
            },
          ].map((idea) => (
            <div
              key={idea.title}
              className={`p-6 border rounded-2xl flex flex-col gap-3 shadow-xs transform hover:rotate-0 transition-transform ${idea.className}`}
            >
              <span className="font-sans font-bold text-lg text-black">
                {idea.title}
              </span>

              <p className="font-sans text-sm text-gray-600 leading-relaxed">
                {idea.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Gamification & Personas */}
      <section className="w-full max-w-[1140px] mx-auto px-6 md:px-12 py-12 flex flex-col gap-8 border-t border-gray-100">
        <h2 className="font-sans font-bold text-[36px] md:text-[48px] text-[#333333]">
          Designing for diverse social &amp; music lovers
        </h2>

        <p className="font-sans font-medium text-[18px] md:text-[20px] text-[#636B82] max-w-[900px] leading-[1.6]">
          Rather than building generic social feeds that overwhelm users with noise, we designed Spark around core social listening and content interaction behaviors to ensure authentic engagement.
        </p>

        <div className="flex flex-col gap-4 mt-6">
          <span className="font-sans font-bold text-[13px] tracking-[3.5px] uppercase text-[#9197A8]">
            Personas based on user research
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: 'Content Creator',
                color: 'bg-red-500',
                border: 'border-red-100',
                items: [
                  'Posts daily viral video clips',
                  'Curates custom music playlists',
                  'Seeks active audience engagement',
                ],
              },
              {
                label: 'Music Explorer',
                color: 'bg-blue-500',
                border: 'border-blue-100',
                items: [
                  'Listens to music while browsing',
                  'Discovers new tracks via friends',
                  'Shares favorite beats in chats',
                ],
              },
              {
                label: 'Casual Browser',
                color: 'bg-gray-700',
                border: 'border-gray-200',
                items: [
                  'Scrolls trending topics passively',
                  'Chats with friends in direct messages',
                  'Enjoys background music recommendations',
                ],
              },
            ].map((persona) => (
              <div
                key={persona.label}
                className={`p-6 bg-white border-2 ${persona.border} rounded-3xl flex flex-col gap-4 shadow-sm`}
              >
                <span className={`px-3 py-1 ${persona.color} text-white font-sans font-bold text-xs rounded-full w-fit`}>
                  {persona.label}
                </span>

                <ul className="list-disc list-inside font-sans text-sm text-gray-700 space-y-2">
                  {persona.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Great Dilemma */}
      <section className="w-full max-w-[1140px] mx-auto px-6 md:px-12 py-12 flex flex-col gap-8 border-t border-gray-100">
        <span className="font-sans font-bold text-[13px] tracking-[3.5px] uppercase text-[#9197A8]">
          Initial challenges
        </span>

        <h2 className="font-sans font-bold text-[36px] md:text-[48px] text-[#333333]">
          The great dilemma
        </h2>

        <p className="font-sans font-medium text-[18px] md:text-[20px] text-[#636B82] max-w-[900px] leading-[1.6]">
          How to unify content browsing, music discovery, and real-time social interaction without cluttering the mobile UI? Aligning cross-functional teams required iterative wireframing and prototype testing.
        </p>

        <div className="p-8 bg-[#FAF0E6] border border-[#E6D0C2] rounded-3xl flex flex-col gap-4">
          <h3 className="font-sans font-bold text-[24px] md:text-[28px] text-gray-900">
            We decided on a unified social-audio hub
          </h3>

          <p className="font-sans text-[16px] md:text-[18px] text-gray-700 leading-relaxed">
            We chose a multi-tier interaction design that keeps social feeds, synchronized music players, and real-time chat rooms accessible with a single swipe, ensuring users never lose their audio flow while interacting.
          </p>
        </div>
      </section>

      {/* Visual Explorations */}
      <section className="w-full max-w-[1140px] mx-auto px-6 md:px-12 py-12 flex flex-col gap-8 border-t border-gray-100">
        <h2 className="font-sans font-bold text-[36px] md:text-[48px] text-[#333333]">
          Visual direction explorations
        </h2>

        <p className="font-sans font-medium text-[18px] md:text-[20px] text-[#636B82] max-w-[900px] leading-[1.6]">
          Visual design focused on energetic dark-mode canvases, vibrant neon accents, and smooth audio wave animations to evoke the feel of a modern social music platform.
        </p>

        <div className="grid grid-cols-1 gap-6 my-4">
          <div className="rounded-3xl overflow-hidden shadow-md border border-gray-200">
            <img
              src={'/assets/' + encodeURIComponent('spark Visual direction.png')}
              alt="Visual direction"
              className="w-full h-[360px] sm:h-[500px] md:h-[620px] object-contain bg-white"
            />
          </div>
        </div>
      </section>

      {/* Flows */}
      <section className="w-full max-w-[1140px] mx-auto px-6 md:px-12 py-12 flex flex-col gap-8 border-t border-gray-100">
        <span className="font-sans font-bold text-[13px] tracking-[3.5px] uppercase text-[#9197A8]">
          Onboarding &amp; Audio Discovery Flow
        </span>

        <h2 className="font-sans font-bold text-[36px] md:text-[48px] text-[#333333]">
          Flows
        </h2>

        <div
          className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar py-4 snap-x snap-mandatory px-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {[
            'spark flow 1.png',
            'spark flow 2.png',
            'spark flow 3.png',
            'spark flow 4.png',
            'spark flow 5.png',
          ].map((src, index) => (

            <div
              key={src}
              className="flex-shrink-0 w-[82vw] max-w-[300px] sm:max-w-[450px] md:max-w-[600px] snap-center rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200 shadow-md"
            >
              <img
                src={src.startsWith('http') ? src : `/assets/${encodeURIComponent(src)}`}
                alt={`Flow step ${index + 1}`}
                className="w-full h-[260px] sm:h-[360px] md:h-[440px] object-contain bg-white"
              />
            </div>
          ))}
        </div>
      </section>


      {/* Scalability */}
      <section className="w-full max-w-[1140px] mx-auto px-6 md:px-12 py-12 flex flex-col gap-6 border-t border-gray-100">
        <span className="font-sans font-bold text-[13px] tracking-[3.5px] uppercase text-[#9197A8]">
          Future prospects
        </span>

        <h2 className="font-sans font-bold text-[36px] md:text-[48px] text-[#333333]">
          Scalability
        </h2>

        <p className="font-sans font-medium text-[18px] md:text-[20px] text-[#636B82] max-w-[800px]">
          I&apos;m a strong advocate for system-level thinking and Spark is designed as a modular framework that easily adapts for video creators, live audio streamers, and community group chats.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-4">
          {[
            {
              src: '/assets/' + encodeURIComponent('sparkfeature 1.png'),
              alt: 'Feature 1',
              title: 'Creator-first growth',
            },
            {
              src: '/assets/' + encodeURIComponent('sparkfeature 2.png'),
              alt: 'Feature 2',
              title: 'Modular expansion',
            },
            {
              src: '/assets/' + encodeURIComponent('sparkfeature 3.png'),
              alt: 'Feature 3',
              title: 'Audience retention',
            },
          ].map(({ src, alt, title }) => (
            <div
              key={src}
              className="rounded-3xl overflow-hidden shadow-md border border-gray-200 bg-white flex flex-col items-center justify-center text-center"
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-[240px] sm:h-[300px] md:h-[340px] object-contain bg-white"
              />
              <div className="px-4 pb-4 pt-2 w-full">
                <h3 className="font-sans font-bold text-[18px] sm:text-[20px] text-[#333333] text-center leading-tight">
                  {title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Impact */}
      <section className="w-full bg-[#EDEFF9] py-16 px-6 md:px-12 my-12">
        <div className="max-w-[1140px] mx-auto flex flex-col gap-10">
          <div>
            <h2 className="font-sans font-bold text-[36px] md:text-[48px] text-[#333333]">
              Impact
            </h2>

            <p className="font-sans font-medium text-[18px] md:text-[20px] text-[#636B82] mt-2">
              Key performance indicators tracking engagement and active community growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              ['Engagement Metric', 'Daily Active Users (DAU) & Time Spent'],
              ['Music Discovery', 'Tracks Saved to Spotify/Apple Music'],
              ['Social Connections', 'Daily Friend Chats & Shared Songs'],
              ['Content Creation', 'Viral Videos & Audio Clips Created'],
              ['Retention', 'Day 7, 15, and 30 Day Retention'],
              ['Viral Growth', 'Organic Referrals & Social Shares'],
            ].map(([label, value], index) => (
              <div
                key={label}
                className="p-6 bg-white rounded-3xl shadow-sm border border-gray-200/80 flex flex-col gap-2"
              >
                <span className="font-sans font-bold text-xs tracking-wider uppercase text-[#9197A8]">
                  {label}
                </span>

                <p
                  className={`font-sans font-bold text-xl ${
                    index === 5 ? 'text-[#007AFF]' : 'text-gray-900'
                  }`}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SparkInterfaceShowcase />

      {/* Ending */}
      <section className="w-full max-w-[1140px] mx-auto px-6 md:px-12 py-16 flex flex-col items-center text-center gap-8 border-t border-gray-100">
        <div className="w-[118px] md:w-[180px] h-[131px] md:h-[200px]">
          <img
            src="https://framerusercontent.com/images/frAf6d9VLtSsqXTmGs9ig1WifN0.png"
            alt="End Mascot"
            className="w-full h-full object-contain"
          />
        </div>

        <h2 className="font-sans font-bold text-[32px] md:text-[48px] text-gray-900">
          Thanks for watching
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
          <button
            onClick={() => handleNavigateProject('legal-link')}
            className="flex items-center gap-3 px-8 py-4 bg-white border border-gray-300 rounded-full shadow-sm hover:border-black transition-all group cursor-pointer"
          >
            <span className="font-sans font-bold text-lg text-gray-900">
              Next project: Legal Link
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
