import React from 'react';

interface ProcessStep {
  id: string;
  title: string;
  type: 'text' | 'pill';
  leftPercent: number;
  widthPercent?: number;
  textColor: string;
  gradient?: string;
}

const steps: ProcessStep[] = [
  {
    id: 'research',
    title: 'Research',
    type: 'text',
    leftPercent: 0,
    textColor: 'text-[#8B3A2B]',
  },
  {
    id: 'idea-explorations',
    title: 'Idea explorations',
    type: 'text',
    leftPercent: 6,
    textColor: 'text-[#8B3A2B]',
  },
  {
    id: 'stakeholder-feedback',
    title: 'Stakeholder feedback',
    type: 'pill',
    leftPercent: 10,
    widthPercent: 31,
    textColor: 'text-[#8A1E2D]',
    gradient: 'linear-gradient(90deg, #FFD8DC 0%, #FFE8EA 55%, rgba(255, 246, 247, 0.2) 100%)',
  },
  {
    id: 'usability-testing',
    title: 'Usability testing',
    type: 'pill',
    leftPercent: 17,
    widthPercent: 13,
    textColor: 'text-[#8A1E2D]',
    gradient: 'linear-gradient(90deg, #FFD5DA 0%, #FFE6E9 60%, rgba(255, 243, 245, 0.2) 100%)',
  },
  {
    id: 'prototyping',
    title: 'Prototyping',
    type: 'pill',
    leftPercent: 21,
    widthPercent: 22,
    textColor: 'text-[#59259E]',
    gradient: 'linear-gradient(90deg, #EBE0FF 0%, #F3EDFF 60%, rgba(250, 247, 255, 0.2) 100%)',
  },
  {
    id: 'development',
    title: 'Development',
    type: 'pill',
    leftPercent: 37,
    widthPercent: 50,
    textColor: 'text-[#59259E]',
    gradient: 'linear-gradient(90deg, #EBE0FF 0%, #F3EDFF 65%, rgba(250, 247, 255, 0.2) 100%)',
  },
  {
    id: 'launch-in-phases',
    title: 'Launch in phases',
    type: 'pill',
    leftPercent: 80,
    widthPercent: 20,
    textColor: 'text-[#3B5B12]',
    gradient: 'linear-gradient(90deg, #E5FAAD 0%, #EEFDC2 60%, rgba(246, 254, 223, 0.2) 100%)',
  },
  {
    id: 'measuring-success-metrics',
    title: 'Measuring success metrics',
    type: 'pill',
    leftPercent: 81,
    widthPercent: 19,
    textColor: 'text-[#1E367B]',
    gradient: 'linear-gradient(90deg, #D9E8FF 0%, #E6F0FF 60%, rgba(243, 248, 255, 0.2) 100%)',
  },
];

export default function DesignProcessTimeline() {
  return (
    <div className="w-full overflow-x-auto py-1 select-none">
      <div className="min-w-[650px] w-full flex flex-col font-sans relative px-1">
        {/* Step Rows */}
        <div className="flex flex-col gap-2.5 sm:gap-3 relative">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative w-full h-8 flex items-center border-b border-slate-200/60"
            >
              {step.type === 'text' ? (
                <div
                  className="absolute top-0 bottom-0 flex items-center px-1.5 bg-white"
                  style={{ left: `${step.leftPercent}%` }}
                >
                  <span
                    className={`font-sans font-medium text-[13px] sm:text-[14px] tracking-tight ${step.textColor}`}
                  >
                    {step.title}
                  </span>
                </div>
              ) : (
                <div
                  className="absolute top-1/2 -translate-y-1/2 h-7 sm:h-8 rounded-[8px] flex items-center px-2.5 sm:px-3 transition-all"
                  style={{
                    left: `${step.leftPercent}%`,
                    width: `${step.widthPercent}%`,
                    background: step.gradient,
                  }}
                >
                  <span
                    className={`font-sans font-medium text-[12px] sm:text-[13px] tracking-tight whitespace-nowrap overflow-hidden text-ellipsis ${step.textColor}`}
                  >
                    {step.title}
                  </span>
                </div>
              )}
            </div>
          ))}

          {/* Bottom baseline */}
          <div className="w-full border-b border-slate-200/60 -mt-1" />
        </div>

        {/* Footer label */}
        <div className="w-full flex justify-center mt-5 sm:mt-6">
          <span className="font-sans font-medium text-[14px] sm:text-[16px] text-[#3B4256] tracking-tight">
            8 months (not to scale)
          </span>
        </div>
      </div>
    </div>
  );
}
