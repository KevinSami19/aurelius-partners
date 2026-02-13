import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function GradientMesh() {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-gold/5 blur-[120px]" />
        <div className="absolute -bottom-1/4 -left-1/4 h-[500px] w-[500px] rounded-full bg-royal/5 blur-[120px]" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-gold/5 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 30, -30, 0],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-1/4 -left-1/4 h-[500px] w-[500px] rounded-full bg-royal/5 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, 40, -10, 0],
          y: [0, -20, 40, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/3 blur-[100px]"
      />
    </div>
  );
}
