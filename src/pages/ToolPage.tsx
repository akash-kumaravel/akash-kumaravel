import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { TOOLS, TOOL_LIST } from "../data/tools";
import SequelboxMock from "../components/SequelboxMock";

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1A1A1A]">{children}</h2>
    </div>
  );
}

export default function ToolPage() {
  const { slug } = useParams();
  const tool = slug ? TOOLS[slug] : undefined;
  if (!tool) return <Navigate to="/404" replace />;

  const others = TOOL_LIST.filter((t) => t.slug !== tool.slug && t.image).slice(0, 4);
  const btn = "inline-flex items-center gap-2 text-sm font-semibold rounded-xl px-5 py-3 transition-all";

  return (
    <main className="min-h-screen bg-white font-inter text-[#1A1A1A] px-6 sm:px-8 pt-8 sm:pt-12 pb-20">
      <div className="max-w-[1000px] mx-auto">
        <Link to="/#tools" className="inline-flex items-center gap-2 text-sm font-medium text-[#666] hover:text-black">
          <ArrowLeft size={15} /> Back
        </Link>

        {/* Hero: text left, small image right */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mt-8 grid md:grid-cols-[1fr_340px] gap-10 items-center pb-12 border-b border-black/10"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#007AFF]">{tool.kind}</p>
            <h1 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight leading-[1.08]">{tool.title}</h1>
            <p className="mt-4 text-lg text-[#555] leading-relaxed">{tool.tagline}</p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href={tool.cta.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg border-[1.5px] border-[#1A1A1A] px-8 py-3 text-xs font-medium tracking-wide text-[#1A1A1A] transition-colors hover:bg-[#1A1A1A] hover:text-white">
                {tool.kind === "Figma plugin" ? "INSTALL" : tool.cta.label}
              </a>
              {tool.secondary &&
                (tool.secondary.internal ? (
                  <Link to={tool.secondary.href} className={`${btn} border border-black/15 hover:border-black`}>
                    {tool.secondary.label}
                  </Link>
                ) : (
                  <a href={tool.secondary.href} target="_blank" rel="noopener noreferrer" className={`${btn} border border-black/15 hover:border-black`}>
                    {tool.secondary.label} <ArrowUpRight size={15} />
                  </a>
                ))}
            </div>
            {tool.stat && (
              <p className="mt-5 text-sm text-[#666]">
                <strong className="text-xl text-[#1A1A1A] mr-1.5">{tool.stat.value}</strong>
                {tool.stat.label}
              </p>
            )}
          </div>

          {tool.image ? (
            <div className="w-full max-w-[340px] mx-auto md:mx-0 aspect-square rounded-2xl overflow-hidden border border-black/10 bg-[#F4F4F2]">
              <img src={tool.image} alt={`${tool.title} cover`} className="w-full h-full object-contain" />
            </div>
          ) : (
            <div className="w-full max-w-[340px] mx-auto md:mx-0">
              <SequelboxMock />
            </div>
          )}
        </motion.section>

        {/* Details */}
        <section className="pt-12 grid md:grid-cols-[1fr_280px] gap-12">
          <div>
            <Heading>What it does</Heading>
            <ul className="space-y-3">
              {tool.features.map((f) => (
                <li key={f} className="flex gap-3 text-base sm:text-lg text-[#444]">
                  <span className="mt-1 w-5 h-5 shrink-0 rounded-full bg-[#007AFF]/10 text-[#007AFF] flex items-center justify-center">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            {tool.why && (
              <div className="mt-10">
                <Heading>Why I built it</Heading>
                <p className="text-base sm:text-lg text-[#444] leading-relaxed">{tool.why}</p>
              </div>
            )}
          </div>

          <aside className="rounded-2xl border border-black/10 p-5 h-fit text-sm">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#888]">Details</p>
            <div className="mt-4 space-y-4">
              <div>
                <p className="text-[#888]">Type</p>
                <p className="font-semibold mt-0.5">{tool.kind}</p>
              </div>
              <div>
                <p className="text-[#888]">Role</p>
                <p className="font-semibold mt-0.5">Design &amp; build</p>
              </div>
              <div>
                <p className="text-[#888] mb-1.5">Tags</p>
                <div className="flex flex-wrap gap-1.5">
                  {tool.tags.map((t) => (
                    <span key={t} className="text-xs font-medium bg-black/[0.05] rounded-full px-2.5 py-1">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </section>

        {/* More tools */}
        {others.length > 0 && (
          <section className="pt-16">
            <Heading>More tools</Heading>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {others.map((o) => (
                <Link key={o.slug} to={`/tool/${o.slug}`} className="group block">
                  <div className="aspect-square rounded-2xl overflow-hidden border border-black/10 bg-[#F4F4F2]">
                    <img src={o.image} alt="" loading="lazy" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <p className="mt-2 text-sm font-semibold leading-tight group-hover:text-[#007AFF] transition-colors">{o.title}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
