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

// Balsamiq SVG
const BalsamiqIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" fill="none">
    <rect width="256" height="256" rx="48" fill="#B32025" />
    <path d="M72 64C64 64 58 70 58 78V178C58 186 64 192 72 192H134C162 192 186 174 186 148C186 132 175 119 161 113C170 106 176 96 176 83C176 60 156 46 130 46H72V64ZM84 68H126C143 68 152 76 152 87C152 98 142 107 124 107H84V68ZM84 125H130C149 125 160 134 160 148C160 162 148 171 128 171H84V125Z" fill="#FFFFFF" />
    <path d="M84 92L140 92M84 148L146 148" stroke="#B32025" strokeWidth="6" strokeLinecap="round" strokeDasharray="4 6" />
  </svg>
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

// Visual Studio Code (VS Code) SVG
const VsCodeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" fill="none">
    <rect width="256" height="256" rx="48" fill="#1E1E1E" />
    <path d="M187.5 32L132.5 83.5L88 50L44 71.5V184.5L88 206L132.5 172.5L187.5 224C193.5 229.5 203 225.5 203 217.5V38.5C203 30.5 193.5 26.5 187.5 32Z" fill="#007ACC" />
    <path d="M187.5 32L132.5 83.5L88 50L44 71.5C39 74 36 79 36 84.5V171.5C36 177 39 182 44 184.5L88 206L132.5 172.5L187.5 224C193.5 229.5 203 225.5 203 217.5V38.5C203 30.5 193.5 26.5 187.5 32Z" fill="#1F8AD2" />
    <path d="M158 128L60 54L44 71.5L132.5 140.5L158 128Z" fill="#0065A9" />
    <path d="M158 128L132.5 115.5L44 184.5L60 202L158 128Z" fill="#007ACC" />
    <path d="M187.5 32L132.5 83.5V172.5L187.5 224C193.5 229.5 203 225.5 203 217.5V38.5C203 30.5 193.5 26.5 187.5 32Z" fill="#007ACC" />
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
