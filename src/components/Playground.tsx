import React from "react";
import { motion } from "motion/react";

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

function IPadFrame({ src }: { src: string; key?: React.Key }) {
  return (
    <div className="w-full bg-[#FAFAFA] rounded-[32px] overflow-hidden p-6 sm:p-10 flex items-center justify-center transition-all duration-500 hover:bg-[#F0F0F0] group border border-black/[0.03]">
      <div className="relative w-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-transform duration-500 group-hover:scale-[1.02]" style={{ maxWidth: 340 }}>
        <div
          className="relative bg-[#0B0B0B] rounded-[24px] p-[6%] overflow-hidden border-[6px] border-[#1A1A1A]"
          style={{ aspectRatio: "4/3" }}
        >
          <div className="w-full h-full bg-white rounded-sm overflow-hidden relative">
            <img src={src} alt="Graphic design" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
          </div>
        </div>
        <div className="absolute right-[2.5%] top-1/2 -translate-y-1/2 w-1 h-3 rounded-full bg-[#333]" />
      </div>
    </div>
  );
}

function MacBookFrame({ src }: { src: string; key?: React.Key }) {
  return (
    <div className="w-full bg-[#FAFAFA] rounded-[32px] overflow-hidden p-6 sm:p-10 flex items-center justify-center transition-all duration-500 hover:bg-[#F0F0F0] group border border-black/[0.03]">
      <div className="relative w-full" style={{ maxWidth: 420 }}>
        <div className="bg-[#2D2D2D] rounded-t-2xl overflow-hidden p-[2%] pb-0 shadow-[0_30px_60px_rgba(0,0,0,0.15)] transition-transform duration-500 group-hover:scale-[1.02]">
          <div className="bg-[#0B0B0B] rounded-t-xl overflow-hidden border-[4px] border-[#0B0B0B] relative">
            <div className="h-4 bg-[#0B0B0B] flex items-center justify-center relative">
               <div className="w-1.5 h-1.5 rounded-full bg-white/10"/>
            </div>
            <div className="relative aspect-[16/10] bg-white overflow-hidden">
              <img src={src} alt="Design" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
        <div className="flex justify-center -mt-px relative z-10">
          <div className="w-[105%] h-3 bg-[#1A1A1A] rounded-b-2xl shadow-lg relative border-t border-white/5">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-black/40 rounded-b-md"/>
          </div>
        </div>
      </div>
    </div>
  );
}

function SurfaceFrame({ src }: { src: string; key?: React.Key }) {
  return (
    <div className="w-full bg-[#FAFAFA] rounded-[32px] overflow-hidden p-6 sm:p-10 flex items-center justify-center transition-all duration-500 hover:bg-[#F0F0F0] group border border-black/[0.03]">
      <div className="relative w-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-transform duration-500 group-hover:scale-[1.02]" style={{ maxWidth: 440 }}>
        <div className="p-1.5 bg-[#1A1A1A] rounded-xl overflow-hidden border border-white/10">
          <img src={src} alt="Design" className="w-full h-auto object-contain rounded-lg" />
        </div>
      </div>
    </div>
  );
}

type PlaygroundItem =
  | { type: "ipad" | "macbook"; src: string }
  | { type: "surface"; src: string };

const col1: PlaygroundItem[] = [
  { type: "ipad", src: "https://api.builder.io/api/v1/image/assets/TEMP/b0227f0c339ae310afbc606e2c3d150f41eebd03?width=602" },
  { type: "ipad", src: "https://api.builder.io/api/v1/image/assets/TEMP/9e951b13758bb55052fea91e9884d002fe9c1616?width=602" },
  { type: "macbook", src: "https://api.builder.io/api/v1/image/assets/TEMP/823272b6718cb6db84e5272b253baa719ac58f0d?width=602" },
];

const col2: PlaygroundItem[] = [
  { type: "ipad", src: "https://api.builder.io/api/v1/image/assets/TEMP/4a45f2966c8b8b8b7a17c6c87319b694049150a0?width=602" },
  { type: "macbook", src: "https://api.builder.io/api/v1/image/assets/TEMP/696ee30333f232c02d902d0908b20d0de0706dfa?width=602" },
  { type: "ipad", src: "https://api.builder.io/api/v1/image/assets/TEMP/2070a2bb374466069e9de417076f2d4b779a7fc3?width=602" },
  { type: "macbook", src: "https://api.builder.io/api/v1/image/assets/TEMP/0674df98c67e9104d24d6fe3623867c666f24faa?width=602" },
];

const col3: PlaygroundItem[] = [
  { type: "ipad", src: "https://api.builder.io/api/v1/image/assets/TEMP/1f9425a00035286f4aaff13085c03b9d09f85cd7?width=602" },
  { type: "ipad", src: "https://api.builder.io/api/v1/image/assets/TEMP/f1e35871b36f481b5d8cd72c6f2b791e0159bb53?width=602" },
  { type: "macbook", src: "https://api.builder.io/api/v1/image/assets/TEMP/5eeb6ff4f8caf91f9cfb87d827f2a1de8dde895b?width=602" },
  { type: "surface", src: "https://api.builder.io/api/v1/image/assets/TEMP/e6dc9f5e93b03a05b2be772d4319144f7dd7e66c?width=626" },
];

function renderItem(item: PlaygroundItem, i: number) {
  if (item.type === "ipad") return <IPadFrame key={i} src={item.src} />;
  if (item.type === "macbook") return <MacBookFrame key={i} src={item.src} />;
  return <SurfaceFrame key={i} src={item.src} />;
}

export default function Playground() {
  return (
    <section className="px-8 py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <SectionMotion>
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.div 
             initial={{ width: 0 }}
             whileInView={{ width: 80 }}
             transition={{ duration: 0.8 }}
             className="h-1 bg-[#31EE33] mb-8" 
          />
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight mb-4">
            PLAYGROUND
          </h2>
          <p className="text-[#555] text-lg sm:text-xl font-normal leading-relaxed">
            A curated collection of experimental visual designs, device interactions, and digital artifact explorations.
          </p>
        </div>
      </SectionMotion>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col gap-8 lg:translate-y-48">
          {col1.map((item, i) => (
             <SectionMotion key={`col1-${i}`} delay={i * 0.1}>
               {renderItem(item, i)}
             </SectionMotion>
          ))}
        </div>
        <div className="flex flex-col gap-8">
          {col2.map((item, i) => (
             <SectionMotion key={`col2-${i}`} delay={i * 0.1}>
               {renderItem(item, i)}
             </SectionMotion>
          ))}
        </div>
        <div className="flex flex-col gap-8 lg:translate-y-24">
          {col3.map((item, i) => (
             <SectionMotion key={`col3-${i}`} delay={i * 0.1}>
               {renderItem(item, i)}
             </SectionMotion>
          ))}
        </div>
      </div>
    </section>
  );
}
