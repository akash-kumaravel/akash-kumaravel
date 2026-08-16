import React from 'react';
import { motion } from 'framer-motion';

interface Persona {
  id: string;
  avatarUrl: string;
  avatarAlt: string;
  bgColor: string;
  bullets: string[];
}

const legalPersonas: Persona[] = [
  {
    id: '1',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    avatarAlt: 'Individual legal seeker',
    bgColor: 'bg-[#FF9500]', // Warm Orange from reference
    bullets: [
      'Individual seeking legal advice',
      'Consults local offline lawyers or friends',
      'Needs instant AI legal clarity and affordable 1-on-1 consultations',
    ],
  },
  {
    id: '2',
    avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
    avatarAlt: 'Startup founder & business owner',
    bgColor: 'bg-[#F2C94C]', // Yellow/Amber from reference
    bullets: [
      'Startup founder & business owner',
      'Frequently handles NDAs, vendor terms & vendor contracts',
      'Uses AI contract risk scans and books specialized advocates on demand',
    ],
  },
  {
    id: '3',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    avatarAlt: 'Enterprise & corporate client',
    bgColor: 'bg-[#80B3B5]', // Soft Teal/Blue-Green from reference
    bullets: [
      'Corporate & enterprise client',
      'Requires bar-verified senior advocates for litigation',
      'Seeks transparent hourly retainers & 1-tap video consultations',
    ],
  },
];

export default function TargetUserCards() {
  return (
    <div className="w-full flex flex-col font-sans">
      {/* Main Container */}
      <div className="w-full bg-[#FAF9FC] border border-gray-200/80 rounded-[20px] sm:rounded-[24px] p-3 sm:p-4 shadow-2xs">
        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {legalPersonas.map((persona) => (
            <motion.div
              key={persona.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-gray-200/90 rounded-[16px] sm:rounded-[20px] p-4 sm:p-5 flex flex-col justify-start shadow-[0_2px_6px_rgba(0,0,0,0.02)]"
            >
              {/* Avatar Section */}
              <div className="w-full flex justify-center mb-3 sm:mb-4">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full ${persona.bgColor} flex items-center justify-center overflow-hidden p-0.5 shadow-inner`}
                  >
                    <img
                      src={persona.avatarUrl}
                      alt={persona.avatarAlt}
                      className="w-full h-full rounded-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="flex flex-col gap-2 text-[#1C1C1E] font-sans font-medium text-[12px] sm:text-[13px] leading-snug tracking-tight">
                {persona.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-gray-900 font-bold text-[13px] leading-none select-none mt-0.5">
                      •
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
