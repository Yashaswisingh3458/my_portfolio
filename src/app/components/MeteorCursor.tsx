import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

interface Trail {
  id: number;
  x: number;
  y: number;
  opacity: number;
}

export function MeteorCursor() {
  const [trails, setTrails] = useState<Trail[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    let trailId = 0;
    let lastX = 0;
    let lastY = 0;

    const mouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
      cursorX.set(clientX);
      cursorY.set(clientY);

      // Create trail only if mouse moved significantly
      const distance = Math.sqrt(
        Math.pow(clientX - lastX, 2) + Math.pow(clientY - lastY, 2)
      );

      if (distance > 10) {
        setTrails((prev) => [
          ...prev.slice(-20),
          {
            id: trailId++,
            x: clientX,
            y: clientY,
            opacity: 1,
          },
        ]);
        lastX = clientX;
        lastY = clientY;
      }
    };

    window.addEventListener('mousemove', mouseMove);

    // Fade out trails
    const interval = setInterval(() => {
      setTrails((prev) =>
        prev
          .map((trail) => ({
            ...trail,
            opacity: trail.opacity - 0.05,
          }))
          .filter((trail) => trail.opacity > 0)
      );
    }, 50);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      clearInterval(interval);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Meteor Trails */}
      {trails.map((trail, index) => (
        <motion.div
          key={trail.id}
          className="fixed pointer-events-none z-50"
          style={{
            left: trail.x,
            top: trail.y,
            opacity: trail.opacity,
          }}
          initial={{ scale: 1 }}
          animate={{ scale: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{
              width: `${12 - index * 0.4}px`,
              height: `${12 - index * 0.4}px`,
              background: `radial-gradient(circle, rgba(139, 92, 246, ${
                trail.opacity
              }) 0%, rgba(99, 102, 241, ${trail.opacity * 0.5}) 50%, transparent 100%)`,
              boxShadow: `0 0 ${10 + index}px rgba(139, 92, 246, ${
                trail.opacity * 0.8
              })`,
              borderRadius: '50%',
            }}
          />
        </motion.div>
      ))}

      {/* Main Meteor Cursor */}
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          {/* Core */}
          <div className="absolute w-4 h-4 bg-gradient-to-br from-violet-400 to-indigo-600 rounded-full blur-sm" />
          <div className="absolute w-3 h-3 bg-white rounded-full" />
          
          {/* Glow */}
          <div className="absolute -inset-2 bg-violet-500/30 rounded-full blur-md" />
          <div className="absolute -inset-4 bg-indigo-500/20 rounded-full blur-xl" />
        </div>
      </motion.div>

      {/* Cursor Ring */}
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-violet-400/50 rounded-full"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>
    </>
  );
}
