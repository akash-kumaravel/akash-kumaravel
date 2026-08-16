import { ReactNode, useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';

interface ScrollRevealCardProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollRevealCard({
  children,
  className = '',
}: ScrollRevealCardProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  });

  const scale = useSpring(
    useTransform(scrollYProgress, [0, 1], [0.82, 1]),
    {
      stiffness: 100,
      damping: 25,
      mass: 0.5,
    },
  );

  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], [140, 0]),
    {
      stiffness: 100,
      damping: 25,
      mass: 0.5,
    },
  );

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [14, 0]),
    {
      stiffness: 100,
      damping: 25,
      mass: 0.5,
    },
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.35, 1],
    [0.25, 0.75, 1],
  );

  return (
    <section
      ref={sectionRef}
      className="w-full flex justify-center px-4 py-8 sm:py-12 overflow-visible"
      style={{ perspective: '1200px' }}
    >
      <motion.div
        style={{
          scale,
          y,
          rotateX,
          opacity,
          transformPerspective: 1200,
        }}
        className={`w-full max-w-5xl origin-bottom will-change-transform ${className}`}
      >
        {children}
      </motion.div>
    </section>
  );
}
