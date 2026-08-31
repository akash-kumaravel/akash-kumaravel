import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Paintbrush, Compass, Cpu, Palette, Heart, Award, ShieldCheck, Sparkles, Smile, Feather, Layers, Car } from "lucide-react";
import Integrations2 from "../components/ui/Integrations2";
import Footer from "../components/Footer";
import { assetPath } from "../data/portfolioData";

// Animation wrapper
function SectionMotion({ children, delay = 0 }: { children: React.ReactNode; delay?: number; key?: React.Key }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const skills = [
    { 
      name: "UI/UX & Product Design", 
      description: "End-to-end product design lifecycle: user persona synthesis, wireframing, journey mapping, scalable design systems, interactive Figma prototypes, and iterative usability testing.", 
      icon: Compass 
    },
    { 
      name: "Design Systems & Visual Hierarchy", 
      description: "Atomic component libraries, tokenized UI systems, typography hierarchy, responsive layout grids, and WCAG AA accessibility compliance built for enterprise scale.", 
      icon: Palette 
    },
    { 
      name: "User Research & Usability Testing", 
      description: "Qualitative & quantitative user research, cognitive walkthroughs, information architecture, heuristic evaluation, and converting feedback into high-impact UX improvements.", 
      icon: Cpu 
    },
    { 
      name: "Interactive Prototyping & Handoff", 
      description: "High-fidelity micro-interactions, motion specifications, and seamless developer handoff translating complex UX workflows into production-ready React & Tailwind CSS structures.", 
      icon: Paintbrush 
    },
  ];

  const milestones = [
    {
      year: "2025 - Current",
      title: "Feather Softwares",
      role: "UI UX Designer",
      desc: "Leading UI/UX, product, and graphic design for B2B clients covering brand identity, website design, and mobile app interfaces, with a focus on translating business requirements into polished, user-centered digital products.",
      logoSrc: assetPath("feathersoftwareslogo.webp"),
      logoAlt: "Feather Softwares logo",
      logoFit: "object-contain",
      logoColor: "text-[#007AFF]",
      logoBg: "bg-[#007AFF]/10 border-[#007AFF]/20"
    },
    {
      year: "2024 - 2025",
      title: "Memo Infotech",
      role: "UI UX Designer / Graphic Designer",
      desc: "UI/UX and graphic design for mobile app and SaaS products, from wireframes to final visuals while also driving brand and marketing design (email campaigns, logos) to strengthen the company's market presence.",
      logoSrc: assetPath("memo.svg"),
      logoAlt: "Memo Infotech logo",
      logoFit: "object-contain",
      logoColor: "text-[#007AFF]",
      logoBg: "bg-black/[0.04] border-black/10"
    },
    {
      year: "2022 - 2023",
      title: "Hyundai Motor",
      role: "Trainee",
      desc: "Worked on diagnostic tools, internal software interfaces, and automotive workflows, focusing on user research, visual documentation, and usability feedback to enhance efficiency and user experience.",
      logoSrc: assetPath("hyundai-motor-company-2.svg"),
      logoAlt: "Hyundai Motor company logo",
      logoFit: "object-contain",
      logoColor: "text-[#007AFF]",
      logoBg: "bg-black/[0.04] border-black/10"
    },
  ];

  return (
    <main className="min-h-screen bg-white font-inter text-[#1A1A1A]">
      
      {/* Hero Section */}
      <section className="px-8 pt-20 sm:pt-24 pb-16 relative overflow-hidden bg-[#FAF9F6]">
        {/* Abstract background grid */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <SectionMotion>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Profile Image Column */}
              <div className="lg:col-span-4">
<div className="relative">
                  <div className="w-full aspect-[4/5] rounded-[32px] overflow-hidden bg-black shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-black/5 relative z-10">
                    <img 
                      src={assetPath("akash kumaravel.png")}
                      alt="Akash Kumaravel" 
                      className="w-full h-full object-cover transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between border-b border-black/5 pb-4 px-2">
                  <span className="text-xs font-bold text-[#666] uppercase tracking-wider">Located In:</span>
                  <span className="text-sm font-semibold text-[#1A1A1A]">Nagercoil, Tamil Nadu, India</span>
                </div>
                <div className="mt-3 flex items-center justify-between border-b border-black/5 pb-4 px-2">
                  <span className="text-xs font-bold text-[#666] uppercase tracking-wider">Expertise:</span>
                  <span className="text-sm font-semibold text-[#007AFF] bg-[#1A1A1A] px-3 py-1 rounded-md">UI/UX + Graphic Design</span>
                </div>
              </div>

              {/* Text Description Column */}
              <div className="lg:col-span-8">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-[#1A1A1A] mb-8">
                  I'm <span className="text-[#007AFF] underline decoration-wavy decoration-[#1A1A1A]/10 underline-offset-8">Akash</span>, a UI/UX Designer crafting thoughtful digital experiences.
                </h1>
                
                <p className="text-lg sm:text-xl font-normal text-[#555] leading-relaxed mb-6">
                  I design clean, user-friendly interfaces for products, apps, and digital experiences that are easy to understand and a pleasure to use.
                </p>

                <p className="text-base text-[#555] leading-relaxed mb-10 font-normal">
                  I focus on user flows, visual hierarchy, interaction design, and product thinking to build interfaces that are functional, elegant, and meaningful. My work blends design clarity with real-world usability so every screen feels intuitive and purposeful.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2.5 bg-[#1A1A1A] hover:bg-black text-white px-8 py-4 rounded-xl text-base font-semibold transition-all hover:translate-y-[-2px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] group"
                  >
                    Hire Me
                    <ArrowRight size={18} className="text-[#007AFF] group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/#products" 
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-neutral-50 text-[#1A1A1A] rounded-xl text-base font-semibold transition-all border border-black/10 hover:translate-y-[-2px]"
                  >
                    View Portfolios
                  </Link>
                </div>
              </div>
            </div>
          </SectionMotion>
        </div>
      </section>

      {/* Core Philosophies (The Bento Grid) */}
      <section className="px-8 py-24 sm:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <SectionMotion>
            <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
              <span className="text-xs font-semibold tracking-widest text-[#007AFF] bg-[#1A1A1A] px-3.5 py-1.5 rounded-full uppercase mb-4">RULES OF ENGAGEMENT</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1A1A] mb-4">My Design DNA</h2>
              <p className="text-base text-[#555] font-normal leading-relaxed">Three rigid, foundational rules that direct every visual concept, typography layout, and frontend system I build.</p>
            </div>
          </SectionMotion>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <SectionMotion delay={0.1}>
              <div className="bg-[#FAF9F6] p-8 sm:p-10 rounded-[24px] border border-black/[0.03] h-full flex flex-col justify-between hover:border-black/10 transition-colors duration-300">
                <div>
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-8 border border-black/5 text-[#007AFF]">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 text-[#1A1A1A]">Architectural Honesty</h3>
                  <p className="text-[#555] leading-relaxed font-normal text-sm sm:text-base">
                    No fake telemetry, no synthetic status counters, and no artificial margin clutter. If a UI element doesn't carry genuine, useful function for the human user, it simply doesn't belong in the design.
                  </p>
                </div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#999] pt-8 border-t border-black/5 mt-8">RULE 01 / FORM FOLLOWING UTILITY</div>
              </div>
            </SectionMotion>

            {/* Card 2 */}
            <SectionMotion delay={0.2}>
              <div className="bg-[#FAF9F6] p-8 sm:p-10 rounded-[24px] border border-black/[0.03] h-full flex flex-col justify-between hover:border-black/10 transition-colors duration-300">
                <div>
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-8 border border-black/5 text-[#007AFF]">
                    <Award size={24} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 text-[#1A1A1A]">Typographic Dominance</h3>
                  <p className="text-[#555] leading-relaxed font-normal text-sm sm:text-base">
                    Fonts are not merely text; they are elements of sculpture. By selecting high-contrast pairings like Space Grotesk against fine Inter, visual hierarchies are organized logically before layout embellishments.
                  </p>
                </div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#999] pt-8 border-t border-black/5 mt-8">RULE 02 / TYPCRAFT OVER EMBELLISHMENT</div>
              </div>
            </SectionMotion>

            {/* Card 3 */}
            <SectionMotion delay={0.3}>
              <div className="bg-[#FAF9F6] p-8 sm:p-10 rounded-[24px] border border-black/[0.03] h-full flex flex-col justify-between hover:border-black/10 transition-colors duration-300">
                <div>
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-8 border border-black/5 text-[#007AFF]">
                    <Heart size={24} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 text-[#1A1A1A]">Seamless Interaction</h3>
                  <p className="text-[#555] leading-relaxed font-normal text-sm sm:text-base">
                    Buttons need tactile physics, transitions require micro-feedback, and loaders must feel engaging. Every user click should be met with smooth, satisfying responsiveness that elevates digital confidence.
                  </p>
                </div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#999] pt-8 border-t border-black/5 mt-8">RULE 03 / EMOTIONALLY TACTILE INFRASTRUCTURE</div>
              </div>
            </SectionMotion>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="px-8 py-24 sm:py-32 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <SectionMotion>
            <div className="text-center mb-20">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#606060] bg-[#FAF9F6] border border-black/5 px-3.5 py-1.5 rounded-full mb-4 inline-block">Career Milestones</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1A1A]">Experience</h2>
            </div>
          </SectionMotion>

          <div className="space-y-6">
            {milestones.map((m, index) => (
              <SectionMotion key={index} delay={index * 0.1}>
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 bg-[#FAF9F6] border border-black/5 rounded-2xl p-5 sm:p-6 hover:border-black/10 transition-all duration-300 hover:shadow-sm">
                  {/* Company Logo on Left */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shrink-0 bg-white border border-black/5 shadow-xs overflow-hidden p-2">
                    {m.logoSrc ? (
                      <img
                        src={m.logoSrc}
                        alt={m.logoAlt || m.title}
                        className={`w-full h-full ${m.logoFit || "object-cover"}`}
                      />
                    ) : (
                      <m.logoIcon size={24} className="text-[#007AFF] stroke-[2.2]" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-2">
                      <div className="flex flex-wrap items-baseline gap-2">
                        <h3 className="text-lg sm:text-xl font-bold text-[#1A1A1A]">{m.title}</h3>
                        <span className="text-sm font-semibold text-[#007AFF]">— {m.role}</span>
                      </div>
                      {/* Year badge */}
                      <span className="inline-block text-[#007AFF] bg-[#1A1A1A] font-mono px-3 py-1 text-xs font-semibold rounded-md self-start sm:self-auto shrink-0">
                        {m.year}
                      </span>
                    </div>
                    <p className="text-[#555] leading-relaxed font-normal text-sm sm:text-base">{m.desc}</p>
                  </div>
                </div>
              </SectionMotion>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Integrations Ecosystem Section */}
      <section className="px-8 py-20 bg-[#FAF9F6] border-t border-black/5">
        <div className="max-w-[1200px] mx-auto">
          <SectionMotion>
            <Integrations2 />
          </SectionMotion>
        </div>
      </section>

      <Footer videoSrc={assetPath("anime2.webm")} />
    </main>
  );
}
