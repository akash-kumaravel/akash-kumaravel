import React, { SVGProps } from 'react';
import { Sparkles } from 'lucide-react';

// Figma SVG
const FigmaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 54 80" fill="none">
    <path d="M13.3333 80.0002C20.6933 80.0002 26.6667 74.0268 26.6667 66.6668V53.3335H13.3333C5.97333 53.3335 0 59.3068 0 66.6668C0 74.0268 5.97333 80.0002 13.3333 80.0002Z" fill="#0ACF83" />
    <path d="M0 39.9998C0 32.6398 5.97333 26.6665 13.3333 26.6665H26.6667V53.3332H13.3333C5.97333 53.3332 0 47.3598 0 39.9998Z" fill="#A259FF" />
    <path d="M0 13.3333C0 5.97333 5.97333 0 13.3333 0H26.6667V26.6667H13.3333C5.97333 26.6667 0 20.6933 0 13.3333Z" fill="#F24E1E" />
    <path d="M26.6667 0H40.0001C47.3601 0 53.3334 5.97333 53.3334 13.3333C53.3334 20.6933 47.3601 26.6667 40.0001 26.6667H26.6667V0Z" fill="#FF7262" />
    <path d="M53.3334 39.9998C53.3334 47.3598 47.3601 53.3332 40.0001 53.3332C32.6401 53.3332 26.6667 47.3598 26.6667 39.9998C26.6667 32.6398 32.6401 26.6665 40.0001 26.6665C47.3601 26.6665 53.3334 32.6398 53.3334 39.9998Z" fill="#1ABCFE" />
  </svg>
);

// Adobe Photoshop SVG
const PhotoshopIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 250" fill="none">
    <rect width="256" height="250" rx="48" fill="#001E36" />
    <path d="M68.5 70H112C128.5 70 142 81 142 98.5C142 116 128.5 127 112 127H93.5V180H68.5V70ZM93.5 107.5H109.5C114.5 107.5 119 104 119 98.5C119 93 114.5 89.5 109.5 89.5H93.5V107.5Z" fill="#31A8FF" />
    <path d="M149.5 161.5C154.5 166.5 163 170.5 174 170.5C184 170.5 189 166 189 160.5C189 154 183.5 151.5 173 147.5C155 141 146 133 146 119C146 103.5 159 92.5 178 92.5C189.5 92.5 198.5 95.5 204.5 100.5L197 117C192 113 185.5 110.5 177 110.5C169 110.5 164 114 164 118.5C164 123.5 168.5 125.5 179 129.5C197.5 136 207 144 207 159C207 175.5 193.5 188.5 172.5 188.5C159 188.5 148 184 141 176.5L149.5 161.5Z" fill="#31A8FF" />
  </svg>
);

// Adobe Illustrator SVG
const IllustratorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 250" fill="none">
    <rect width="256" height="250" rx="48" fill="#330000" />
    <path d="M85 70H112L144 180H121L114 154H83L76 180H53L85 70ZM108 134L98.5 97.5L89 134H108Z" fill="#FF9A00" />
    <path d="M165 74.5C165 67.5 171 62 178.5 62C186 62 192 67.5 192 74.5C192 81.5 186 87 178.5 87C171 87 165 81.5 165 74.5ZM166.5 101H190.5V180H166.5V101Z" fill="#FF9A00" />
  </svg>
);

// CorelDRAW SVG
const CorelDrawIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" fill="none">
    <rect width="256" height="256" rx="48" fill="#1C7F33" />
    <path d="M128 44C81.6 44 44 81.6 44 128C44 174.4 81.6 212 128 212C174.4 212 212 174.4 212 128C212 81.6 174.4 44 128 44ZM128 62C158 62 182 82.5 187 110C178 98 163 90 146 90C120 90 99 110 99 135C99 155 112 171 130 178C129.3 178 128.7 178 128 178C100.4 178 78 155.6 78 128C78 91.5 100.5 62 128 62Z" fill="#8CE859" />
    <circle cx="166" cy="148" r="24" fill="#FFFFFF" opacity="0.9" />
    <circle cx="166" cy="148" r="14" fill="#1C7F33" />
  </svg>
);

// Sketch SVG
const SketchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 238" fill="none">
    <path d="M64 0L0 76.5L128 238L256 76.5L192 0H64Z" fill="#FDB300" />
    <path d="M64 0L128 76.5H0L64 0Z" fill="#EA6C00" />
    <path d="M192 0L256 76.5H128L192 0Z" fill="#EA6C00" />
    <path d="M64 0L128 76.5L192 0H64Z" fill="#FDAD00" />
    <path d="M0 76.5L128 238V76.5H0Z" fill="#FDD231" />
    <path d="M256 76.5L128 238V76.5H256Z" fill="#FD9000" />
  </svg>
);

// Balsamiq Icon - Official logomark PNG
const BalsamiqIcon = (props: SVGProps<SVGSVGElement>) => (
  <img 
    {...(props as any)}
    src="https://balsamiq.com/assets/brand/logomark.png"
    alt="Balsamiq"
    style={{ width: '60%', height: '60%', objectFit: 'contain' }}
  />
);

// Adobe InDesign SVG
const InDesignIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 250" fill="none">
    <rect width="256" height="250" rx="48" fill="#49021F" />
    <path d="M68.5 74.5C68.5 67.5 74.5 62 82 62C89.5 62 95.5 67.5 95.5 74.5C95.5 81.5 89.5 87 82 87C74.5 87 68.5 81.5 68.5 74.5ZM70 101H94V180H70V101Z" fill="#FF3366" />
    <path d="M168 70H192V180H169V163.5C163.5 174.5 152 182.5 137.5 182.5C114 182.5 99 162.5 99 140.5C99 118 114.5 98.5 138 98.5C152 98.5 163 106 168 116.5V70ZM145.5 119C132 119 123.5 129 123.5 140.5C123.5 152 132 162 145.5 162C159 162 168 152 168 140.5C168 129 159 119 145.5 119Z" fill="#FF3366" />
  </svg>
);

// Adobe After Effects SVG
const AfterEffectsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 250" fill="none">
    <rect width="256" height="250" rx="48" fill="#00005B" />
    <path d="M72 70H99L131 180H108L101 154H70L63 180H40L72 70ZM95 134L85.5 97.5L76 134H95Z" fill="#9999FF" />
    <path d="M152 144C152 161 163 167 175.5 167C186.5 167 194 163 199.5 158L209 173C201.5 180.5 189 185 173 185C146 185 128 167 128 142C128 117.5 146 99 171.5 99C198.5 99 211 119 211 141C211 143.5 210.5 144 210.5 144H152ZM188.5 128C188 117.5 181 113.5 171.5 113.5C161 113.5 153.5 119.5 152 128H188.5Z" fill="#9999FF" />
  </svg>
);

// Framer SVG
const FramerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" fill="none">
    <rect width="256" height="256" rx="48" fill="#0055FF" />
    <path d="M56 48H200V120H128L200 192H128V208L56 136V48Z" fill="#FFFFFF" />
    <path d="M128 120H56L128 48V120Z" fill="#E6E6E6" opacity="0.4" />
  </svg>
);

// Hugging Face SVG
const HuggingFaceIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" fill="none">
    <rect width="256" height="256" rx="48" fill="#FFD21E" />
    <circle cx="128" cy="116" r="62" fill="#FFE066" stroke="#E6A800" strokeWidth="4" />
    {/* Eyes */}
    <path d="M102 104C102 96 112 96 112 104" stroke="#2B2B2B" strokeWidth="5.5" strokeLinecap="round" />
    <path d="M144 104C144 96 154 96 154 104" stroke="#2B2B2B" strokeWidth="5.5" strokeLinecap="round" />
    {/* Cheeks */}
    <circle cx="96" cy="120" r="9" fill="#FF8383" opacity="0.75" />
    <circle cx="160" cy="120" r="9" fill="#FF8383" opacity="0.75" />
    {/* Mouth */}
    <path d="M114 124C114 138 142 138 142 124" fill="#D73A49" stroke="#2B2B2B" strokeWidth="4" strokeLinecap="round" />
    {/* Open Hugging Hands */}
    <path d="M64 140C52 148 46 166 56 178C66 188 84 186 96 174L108 158C96 158 76 154 64 140Z" fill="#FFE066" stroke="#E6A800" strokeWidth="4" />
    <path d="M192 140C204 148 210 166 200 178C190 188 172 186 160 174L148 158C160 158 180 154 192 140Z" fill="#FFE066" stroke="#E6A800" strokeWidth="4" />
  </svg>
);

// Visual Studio Code (VS Code) SVG - Official from Wikimedia Commons
const VsCodeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0" maskType="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
      <path fillRule="evenodd" clipRule="evenodd" d="M70.9119 99.3171C72.4869 99.9307 74.2828 99.8914 75.8725 99.1264L96.4608 89.2197C98.6242 88.1787 100 85.9892 100 83.5872V16.4133C100 14.0113 98.6243 11.8218 96.4609 10.7808L75.8725 0.873756C73.7862 -0.130129 71.3446 0.11576 69.5135 1.44695C69.252 1.63711 69.0028 1.84943 68.769 2.08341L29.3551 38.0415L12.1872 25.0096C10.589 23.7965 8.35363 23.8959 6.86933 25.2461L1.36303 30.2549C-0.452552 31.9064 -0.454633 34.7627 1.35853 36.417L16.2471 50.0001L1.35853 63.5832C-0.454633 65.2374 -0.452552 68.0938 1.36303 69.7453L6.86933 74.7541C8.35363 76.1043 10.589 76.2037 12.1872 74.9905L29.3551 61.9587L68.769 97.9167C69.3925 98.5406 70.1246 99.0104 70.9119 99.3171ZM75.0152 27.2989L45.1091 50.0001L75.0152 72.7012V27.2989Z" fill="white"/>
    </mask>
    <g mask="url(#mask0)">
      <path d="M96.4614 10.7962L75.8569 0.875542C73.4719 -0.272773 70.6217 0.211611 68.75 2.08333L1.29858 63.5832C-0.515693 65.2373 -0.513607 68.0937 1.30308 69.7452L6.81272 74.754C8.29793 76.1042 10.5347 76.2036 12.1338 74.9905L93.3609 13.3699C96.086 11.3026 100 13.2462 100 16.6667V16.4275C100 14.0265 98.6246 11.8378 96.4614 10.7962Z" fill="#0065A9"/>
      <path d="M96.4614 89.2038L75.8569 99.1245C73.4719 100.273 70.6217 99.7884 68.75 97.9167L1.29858 36.4169C-0.515693 34.7627 -0.513607 31.9063 1.30308 30.2548L6.81272 25.246C8.29793 23.8958 10.5347 23.7964 12.1338 25.0095L93.3609 86.6301C96.086 88.6974 100 86.7538 100 83.3334V83.5726C100 85.9735 98.6246 88.1622 96.4614 89.2038Z" fill="#007ACC"/>
      <path d="M75.8578 99.1263C73.4721 100.274 70.6219 99.7885 68.75 97.9166C71.0564 100.223 75 98.5895 75 95.3278V4.67213C75 1.41039 71.0564 -0.223106 68.75 2.08329C70.6219 0.211402 73.4721 -0.273666 75.8578 0.873633L96.4587 10.7807C98.6234 11.8217 100 14.0112 100 16.4132V83.5871C100 85.9891 98.6234 88.1786 96.4586 89.2196L75.8578 99.1263Z" fill="#1F9CF0"/>
      <g style={{mixBlendMode: 'overlay'}} opacity={0.25}>
        <path fillRule="evenodd" clipRule="evenodd" d="M70.8511 99.3171C72.4261 99.9306 74.2221 99.8913 75.8117 99.1264L96.4 89.2197C98.5634 88.1787 99.9392 85.9892 99.9392 83.5871V16.4133C99.9392 14.0112 98.5635 11.8217 96.4001 10.7807L75.8117 0.873695C73.7255 -0.13019 71.2838 0.115699 69.4527 1.44688C69.1912 1.63705 68.942 1.84937 68.7082 2.08335L29.2943 38.0414L12.1264 25.0096C10.5283 23.7964 8.29285 23.8959 6.80855 25.246L1.30225 30.2548C-0.513334 31.9064 -0.515415 34.7627 1.29775 36.4169L16.1863 50L1.29775 63.5832C-0.515415 65.2374 -0.513334 68.0937 1.30225 69.7452L6.80855 74.754C8.29285 76.1042 10.5283 76.2036 12.1264 74.9905L29.2943 61.9586L68.7082 97.9167C69.3317 98.5405 70.0638 99.0104 70.8511 99.3171ZM74.9544 27.2989L45.0483 50L74.9544 72.7012V27.2989Z" fill="url(#paint0_linear)"/>
      </g>
    </g>
    <defs>
      <linearGradient id="paint0_linear" x1="49.9392" y1="0.257812" x2="49.9392" y2="99.7423" gradientUnits="userSpaceOnUse">
        <stop stopColor="white"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
      </linearGradient>
    </defs>
  </svg>
);

// Artificial Intelligence (AI) SVG
const AiSparkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" fill="none">
    <defs>
      <linearGradient id="ai_grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7928CA" />
        <stop offset="50%" stopColor="#FF0080" />
        <stop offset="100%" stopColor="#0070F3" />
      </linearGradient>
    </defs>
    <rect width="256" height="256" rx="48" fill="url(#ai_grad)" />
    <path d="M128 48C132 88 144 100 184 104C144 108 132 120 128 160C124 120 112 108 72 104C112 100 124 88 128 48Z" fill="#FFFFFF" />
    <path d="M184 148C186 168 192 174 212 176C192 178 186 184 184 204C182 184 176 178 156 176C176 174 182 168 184 148Z" fill="#FFFFFF" opacity="0.9" />
    <path d="M72 160C73.5 174 78 178.5 92 180C78 181.5 73.5 186 72 200C70.5 186 66 181.5 52 180C66 178.5 70.5 174 72 160Z" fill="#FFFFFF" opacity="0.8" />
  </svg>
);

export {
  FigmaIcon,
  PhotoshopIcon,
  IllustratorIcon,
  CorelDrawIcon,
  SketchIcon,
  BalsamiqIcon,
  InDesignIcon,
  AfterEffectsIcon,
  FramerIcon,
  HuggingFaceIcon,
  VsCodeIcon,
  AiSparkIcon,
};

const designTools = [
  { name: 'Figma', category: 'UI/UX & Prototyping', icon: FigmaIcon },
  { name: 'Photoshop', category: 'Raster & Photo Editing', icon: PhotoshopIcon },
  { name: 'Illustrator', category: 'Vector & Identity', icon: IllustratorIcon },
  { name: 'CorelDRAW', category: 'Vector & Print', icon: CorelDrawIcon },
  { name: 'Sketch', category: 'Design Systems', icon: SketchIcon },
  { name: 'Balsamiq', category: 'Rapid Wireframing', icon: BalsamiqIcon },
  { name: 'InDesign', category: 'Editorial & Layouts', icon: InDesignIcon },
  { name: 'After Effects', category: 'Motion & Animation', icon: AfterEffectsIcon },
  { name: 'Framer', category: 'Interactive Web & React', icon: FramerIcon },
  { name: 'Hugging Face', category: 'Open-Source AI & Models', icon: HuggingFaceIcon },
  { name: 'VS Code', category: 'Frontend Development & Logic', icon: VsCodeIcon },
  { name: 'AI Workflows', category: 'Generative & Prompt Systems', icon: AiSparkIcon },
];

export default function Integrations2() {
  const topTools = designTools.slice(0, 5);
  const bottomTools = designTools.slice(5);

  return (
    <div className="w-full py-6">
      <div className="mx-auto max-w-6xl">
        <div className="bg-black/10 border border-black/10 grid grid-flow-row-dense grid-cols-2 gap-px overflow-hidden rounded-3xl sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-4 bg-gray-200 shadow-sm">
          
          {/* Top Tools */}
          {topTools.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white hover:bg-[#FAF9F6] flex h-28 sm:h-32 flex-col items-center justify-center gap-2 transition-all duration-200 ease-out px-3 text-center group cursor-default"
              >
                <Icon className="w-8 h-8 shrink-0 transition-transform duration-300 group-hover:scale-110 drop-shadow-sm" />
                <div>
                  <span className="text-gray-900 text-sm sm:text-base font-semibold block leading-tight">
                    {item.name}
                  </span>
                  <span className="text-gray-400 text-[10px] sm:text-xs font-normal block mt-0.5">
                    {item.category}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Central Hero Block */}
          <div className="bg-[#FAF9F6] relative col-span-2 row-span-2 flex flex-col items-center justify-center overflow-hidden p-6 sm:p-8 text-center shadow-[inset_0_0px_10px_2px_rgba(0,0,0,0.04)] sm:col-span-3 md:col-span-6 lg:col-span-2">
            <div className="bg-[repeating-linear-gradient(135deg,#e5e7eb_0px,#e5e7eb_1px,transparent_1px,transparent_10px)] pointer-events-none absolute inset-0 opacity-60" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#007AFF]/10 text-[#007AFF] text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Tool Mastery
              </span>
              <h3 className="text-[#1A1A1A] max-w-[280px] text-lg sm:text-xl leading-snug font-bold font-serif">
                Crafting interfaces with industry-standard tools
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-2.5 max-w-[260px] mx-auto leading-relaxed">
                From low-fidelity wireframing and motion graphics to code execution, open-source models, and generative workflows.
              </p>
            </div>
          </div>

          {/* Bottom Tools */}
          {bottomTools.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i + 5}
                className="bg-white hover:bg-[#FAF9F6] flex h-28 sm:h-32 flex-col items-center justify-center gap-2 transition-all duration-200 ease-out px-3 text-center group cursor-default"
              >
                <Icon className="w-8 h-8 shrink-0 transition-transform duration-300 group-hover:scale-110 drop-shadow-sm" />
                <div>
                  <span className="text-gray-900 text-sm sm:text-base font-semibold block leading-tight">
                    {item.name}
                  </span>
                  <span className="text-gray-400 text-[10px] sm:text-xs font-normal block mt-0.5">
                    {item.category}
                  </span>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}
