import React from "react";
import { motion } from "motion/react";

/** An animated, self-contained mock of the Sequelbox editor timeline.
 *  Swap for a real screen recording (<video>) whenever you have one. */
const tracks = [
  { name: "Text", color: "#8B5CF6", clips: [[6, 30], [44, 70]] },
  { name: "Video", color: "#007AFF", clips: [[0, 38], [40, 92]] },
  { name: "Chroma", color: "#22C55E", clips: [[14, 58]] },
  { name: "Audio", color: "#F59E0B", clips: [[0, 100]] },
];
const keyframes = [[1, 12], [1, 30], [1, 62], [2, 24], [2, 48], [0, 20], [0, 56]];

export default function SequelboxMock({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl bg-[#14141A] border border-white/10 overflow-hidden shadow-2xl ${className}`}
      aria-label="Illustration of the Sequelbox video editor timeline"
      role="img"
    >
      {/* window bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 text-[11px] text-white/40 font-medium">Sequelbox · untitled.sqb</span>
        <span className="ml-auto text-[10px] px-2 py-0.5 rounded bg-[#007AFF] text-white font-semibold">Export MP4</span>
      </div>

      {/* preview */}
      <div className="p-4 pb-2">
        <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#312E81] to-[#7C3AED]">
          <motion.div
            className="absolute w-24 h-24 rounded-full bg-[#22C55E]/80 blur-[1px]"
            animate={{ x: ["10%", "260%", "10%"], y: ["40%", "90%", "40%"] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/90 text-2xl sm:text-3xl font-bold tracking-tight">Keyframes</span>
          </div>
        </div>
      </div>

      {/* timeline */}
      <div className="relative px-4 pb-4 pt-2">
        <div className="flex flex-col gap-1.5">
          {tracks.map((t, i) => (
            <div key={t.name} className="flex items-center gap-2">
              <span className="w-12 shrink-0 text-[9px] uppercase tracking-wider text-white/35">{t.name}</span>
              <div className="relative flex-1 h-6 rounded bg-white/[0.04]">
                {t.clips.map(([a, b], j) => (
                  <div
                    key={j}
                    className="absolute top-0.5 bottom-0.5 rounded-[5px]"
                    style={{ left: `${a}%`, width: `${b - a}%`, background: t.color, opacity: 0.85 }}
                  />
                ))}
                {keyframes
                  .filter(([row]) => row === i)
                  .map(([, x], k) => (
                    <span
                      key={k}
                      className="absolute top-1/2 w-2 h-2 bg-white rotate-45 -translate-y-1/2 -translate-x-1/2 rounded-[1px]"
                      style={{ left: `${x}%` }}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
        {/* playhead */}
        <div className="absolute top-2 bottom-4 left-[calc(1rem+3.5rem)] right-4 pointer-events-none">
          <motion.div
            className="absolute top-0 bottom-0 w-px bg-[#FF4D6D]"
            initial={{ left: "0%" }}
            animate={{ left: ["0%", "100%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <span className="absolute -top-1 -left-[3px] w-[7px] h-[7px] rounded-full bg-[#FF4D6D]" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
