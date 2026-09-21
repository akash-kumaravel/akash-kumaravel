import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useMotionValue } from "motion/react";
import { useNavigate } from "react-router-dom";

interface CardItem {
  id: number;
  src: string;
  alt: string;
}

// 7 unique cards extracted from the authentic portfolio showcase
const BASE_CARDS: CardItem[] = [
  { id: 1, src: "/assets/hero/card-1.png", alt: "Dark laptop mockup on stand" },
  { id: 2, src: "/assets/hero/card-2.png", alt: "Hand holding smartphone with gradient wallpaper" },
  { id: 3, src: "/assets/hero/card-3.png", alt: "Laptop on dark silk fabric" },
  { id: 4, src: "/assets/hero/card-4.png", alt: "Hand holding mobile device in studio lighting" },
  { id: 5, src: "/assets/hero/card-5.png", alt: "Two hands holding phone showing navigation map" },
  { id: 6, src: "/assets/hero/card-6.png", alt: "Hand holding mobile finance portfolio screen" },
  { id: 7, src: "/assets/hero/card-7.png", alt: "Curated digital interface exploration" },
];

// Repeat to 14 cards for the complete 360-degree cylindrical ribbon
const FULL_CAROUSEL: CardItem[] = [...BASE_CARDS, ...BASE_CARDS];

export default function Hero3DSection() {
  const navigate = useNavigate();

  // Carousel geometry constants from the original Framer component
  const repetitionCount = 14;
  const itemWidth = 640;
  const itemHeight = 580;
  const gap = 10;
  const cameraZ = -470;
  const perspective = 650;

  // Exact cylinder radius formula: (itemWidth + gap) / (2 * Math.sin(Math.PI / repetitionCount))
  const angleStep = 360 / repetitionCount; // 25.7142857 degrees
  const halfAngleRad = (angleStep / 2) * (Math.PI / 180);
  const radius = (itemWidth + gap) / (2 * Math.sin(halfAngleRad)); // 1460.54px

  // Initial rotation angle: setting to -3 * angleStep aligns card 4 center, cards 2 & 3 left, cards 5 & 6 right
  const INITIAL_ROTATION = -3 * angleStep; // -77.142857 deg
  const rotateY = useMotionValue(INITIAL_ROTATION);

  const isAutoRotating = true;
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // Responsive scale factor so the 3D cylinder scales cleanly on all viewports
  const [scale, setScale] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);

  // Avatar resolution (connected directly to https://akashuiux.vercel.app/assets/akash.png)
  const [avatarIndex, setAvatarIndex] = useState<number>(0);

  const AVATAR_CANDIDATES = [
    "https://akashuiux.vercel.app/assets/akash.png",
    "/assets/akash.png",
    "/assets/hero/avatar.png",
  ];

  const currentAvatarSrc = AVATAR_CANDIDATES[avatarIndex] || "https://akashuiux.vercel.app/assets/akash.png";

  const handleAvatarError = () => {
    if (avatarIndex < AVATAR_CANDIDATES.length - 1) {
      setAvatarIndex((prev) => prev + 1);
    }
  };

  // Drag interaction refs
  const isDraggingRef = useRef<boolean>(false);
  const dragStartXRef = useRef<number>(0);
  const lastXRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const velocityRef = useRef<number>(0);
  const startRotationRef = useRef<number>(0);
  const momentumRafRef = useRef<number | null>(null);
  const autoRotateRafRef = useRef<number | null>(null);

  // Calculate responsive scale based on container dimensions
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      // Fit cylinder proportionately inside hero viewport
      const availW = Math.min(w, 1800) - 30;
      const availH = Math.min(h, 900) * 0.72;
      const scaleW = availW / 1400;
      const scaleH = availH / 580;
      const s = Math.min(scaleW, scaleH, 1);
      setScale(Math.max(s, 0.46));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Continuous auto-rotation loop (smooth 60fps GPU loop without React re-render overhead)
  useEffect(() => {
    let lastTimestamp = performance.now();

    const loop = (timestamp: number) => {
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (isAutoRotating && !isDraggingRef.current && momentumRafRef.current === null) {
        // rotationSpeed: 5 degrees per second, rotating smoothly
        const degreesPerMs = 5 / 1000;
        rotateY.set(rotateY.get() + delta * degreesPerMs);
      }

      autoRotateRafRef.current = requestAnimationFrame(loop);
    };

    autoRotateRafRef.current = requestAnimationFrame(loop);
    return () => {
      if (autoRotateRafRef.current) cancelAnimationFrame(autoRotateRafRef.current);
    };
  }, [isAutoRotating, rotateY]);

  // Pointer drag scrubbing with inertia
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    setIsDragging(true);

    if (momentumRafRef.current !== null) {
      cancelAnimationFrame(momentumRafRef.current);
      momentumRafRef.current = null;
    }

    dragStartXRef.current = e.clientX;
    lastXRef.current = e.clientX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;
    startRotationRef.current = rotateY.get();

    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;

    const now = performance.now();
    const dt = now - lastTimeRef.current;
    const dx = e.clientX - lastXRef.current;

    if (dt > 0) {
      velocityRef.current = dx / dt;
    }
    lastXRef.current = e.clientX;
    lastTimeRef.current = now;

    const totalDx = e.clientX - dragStartXRef.current;
    // Framer matching drag sensitivity (0.35)
    rotateY.set(startRotationRef.current - totalDx * 0.35);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);

    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }

    // Inertial momentum release
    const velocity = velocityRef.current;
    if (Math.abs(velocity) > 0.05) {
      let currentVelocity = velocity * 180;

      const inertiaStep = () => {
        if (Math.abs(currentVelocity) > 0.1 && !isDraggingRef.current) {
          rotateY.set(rotateY.get() - currentVelocity * 0.016);
          currentVelocity *= 0.95;
          momentumRafRef.current = requestAnimationFrame(inertiaStep);
        } else {
          momentumRafRef.current = null;
        }
      };

      momentumRafRef.current = requestAnimationFrame(inertiaStep);
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-[760px] md:h-[840px] lg:h-[870px] bg-[#0A0908] text-white overflow-hidden flex flex-col justify-end select-text"
      style={{ backgroundColor: "#0A0908" }}
    >

      {/* ─── Hero Body Area (Carousel, Avatar & Foreground Content) ──────── */}
      <div className="relative w-full flex-1 flex flex-col items-center justify-end overflow-hidden">
        {/* ─── 1. 3D Cylindrical Carousel (Layered in Background) ───────── */}
        <div
          ref={containerRef}
          className={`absolute top-[-20px] md:top-[-45px] left-1/2 -translate-x-1/2 w-full max-w-[1800px] h-[580px] md:h-[640px] z-0 overflow-visible pointer-events-auto ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          style={{
            maskImage:
              "linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%)",
          }}
        >
          {/* Inner container with center-fade mask so cards softly fade behind designer portrait */}
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              perspective: `${perspective}px`,
              transformStyle: "preserve-3d",
              maskImage:
                "linear-gradient(270deg, black 0%, black 28%, transparent 50.7%, black 72%, black 100%)",
              WebkitMaskImage:
                "linear-gradient(270deg, black 0%, black 28%, transparent 50.7%, black 72%, black 100%)",
            }}
          >
            {/* Rotating 3D Cylinder Track - powered by GPU MotionValue */}
            <motion.div
              style={{
                position: "relative",
                width: `${itemWidth}px`,
                height: `${itemHeight}px`,
                transformStyle: "preserve-3d",
                rotateY,
                z: cameraZ,
                scale,
                willChange: "transform",
              }}
            >
              {FULL_CAROUSEL.map((card, index) => {
                const cardAngle = index * angleStep;

                return (
                  <div
                    key={`carousel-card-${index}`}
                    style={{
                      position: "absolute",
                      width: `${itemWidth}px`,
                      height: `${itemHeight}px`,
                      left: "50%",
                      top: "50%",
                      transform: `translate(-50%, -50%) rotateY(${cardAngle}deg) translateZ(-${radius}px)`,
                      transformStyle: "preserve-3d",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    {/* Mockup Card Frame */}
                    <div className="w-full h-full rounded-[23px] overflow-hidden border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.92)] bg-[#141414]">
                      <img
                        src={card.src}
                        alt={card.alt}
                        className="w-full h-full object-cover select-none pointer-events-none"
                        draggable={false}
                        loading="eager"
                        decoding="async"
                      />
                      {/* Subtle glass sheen */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.06] via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* ─── 2. Center Designer Avatar Cutout (In Front of Carousel) ─── */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none flex justify-center items-start"
          style={{
            width: "min(568px, 94vw)",
            height: "741px",
            aspectRatio: "0.766532",
            maskImage: "linear-gradient(#000 64%, transparent 98%)",
            WebkitMaskImage: "linear-gradient(#000 64%, transparent 98%)",
          }}
        >
          <img
            src={currentAvatarSrc}
            onError={handleAvatarError}
            alt="Akash - Product & UX Designer"
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain object-top select-none drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)] transition-all duration-300"
          />
        </div>

        {/* ─── 3. Foreground Content (Overlapping Centered Torso) ──────── */}
        <div className="relative z-20 w-full max-w-[580px] px-5 sm:px-6 pb-6 sm:pb-8 mx-auto flex flex-col items-center gap-4 text-left pointer-events-auto select-text">
          {/* Title block: Subtitle & Main Headline */}
          <div className="w-full flex flex-col items-start gap-1.5 text-left select-text">
            <span className="font-mono text-[11px] sm:text-[12px] text-[#C8AB7C] font-semibold tracking-[0.08em] uppercase select-text">
              HI, I’M AKASH
            </span>

            <h1 className="font-serif text-[48px] sm:text-[54px] md:text-[58px] font-normal leading-[1.0] tracking-[-0.04em] text-white drop-shadow-xl select-text">
              Product &amp;<br />
              UX Designer
            </h1>
          </div>

          {/* Subtitle row: Start a project button & Serif Quote with Signature */}
          <div className="w-full flex flex-row justify-between items-start pt-1 gap-4 select-text">
            {/* Left: Start a project button */}
            <button
              onClick={() => navigate("/contact")}
              className="group flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full border border-white bg-white text-black text-[13px] sm:text-[14px] font-medium hover:bg-[#EFEFEF] transition-all duration-200 cursor-pointer shadow-lg hover:scale-[1.02] active:scale-95 flex-shrink-0"
            >
              <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowRight size={12} className="-rotate-45" />
              </span>
              <span className="font-sans font-medium tracking-tight">Start a project</span>
            </button>

            {/* Right: Editorial Quote + Handwritten Signature */}
            <div className="w-[52%] sm:w-[46%] flex flex-col items-start gap-1 select-text">
              <p className="font-serif text-[15px] sm:text-[17px] md:text-[18px] text-white/80 leading-[1.18] tracking-[-0.03em] select-text">
                “I help founders who cares about their user to{" "}
                <strong className="text-white font-semibold underline underline-offset-4 decoration-white/40">
                  design thoughtful and impactful apps
                </strong>
                , not just another slop”
              </p>

              {/* Signature */}
              <div className="h-[44px] -mt-0.5 flex items-center gap-1.5 select-text" title="Akash Kumaravel">
                <span className="font-['Caveat',cursive] text-[32px] sm:text-[36px] font-semibold text-white/90 italic tracking-wider leading-none select-text drop-shadow">
                  Akash
                </span>
                <svg
                  className="w-14 h-3 text-white/60 -ml-1 mt-2.5"
                  viewBox="0 0 60 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M2 4 C 18 11, 36 2, 56 6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
