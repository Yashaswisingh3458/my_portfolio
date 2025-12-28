import { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Terminal, Sparkles, Zap, Code2, Database, Cpu, SkipForward } from 'lucide-react';

export function HomePage() {
  const navigate = useNavigate();
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [showCTA, setShowCTA] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const messages = [
    { text: 'System initializing...', delay: 100 },
    { text: 'Welcome to my digital universe.', delay: 80 },
    { text: 'I am Yashaswi singh', delay: 60 },
    { text: 'Solving logic, shipping code, repeating daily!', delay: 60 },
    // { text: 'DSA in mind, execution in code', delay: 60 },
    { text: 'transforming my ideas into reality.', delay: 60 },
    { text: 'What sets me apart?', delay: 80 },
    { text: 'I think in systems, architect in code, and build for scale keeing security as priority.', delay: 50 },
    { text: 'Ready to explore my work?', delay: 80 },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX - innerWidth / 2);
      mouseY.set(e.clientY - innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (currentMessageIndex >= messages.length) {
      setShowCTA(true);
      return;
    }

    const currentMessage = messages[currentMessageIndex];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex <= currentMessage.text.length) {
        setDisplayedText(currentMessage.text.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentMessageIndex((prev) => prev + 1);
          setDisplayedText('');
        }, 800);
      }
    }, currentMessage.delay);

    return () => clearInterval(typingInterval);
  }, [currentMessageIndex]);

  const floatingIcons = [
    { Icon: Code2, delay: 0, duration: 20, x: '10%', y: '20%' },
    { Icon: Database, delay: 2, duration: 25, x: '80%', y: '15%' },
    { Icon: Cpu, delay: 4, duration: 22, x: '15%', y: '75%' },
    { Icon: Zap, delay: 1, duration: 18, x: '85%', y: '70%' },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-1000">

      {/* Dynamic Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-violet-600/30 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-indigo-600/30 to-transparent rounded-full blur-3xl"
        />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, duration, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: x, top: y }}
          animate={{ y: [0, -30, 0], rotate: [0, 360], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Icon size={60} className="text-violet-500/20" />
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-transparent to-indigo-600/20 rounded-3xl blur-2xl" />

          <div className="relative bg-gradient-to-br from-slate-800/95 via-indigo-900/60 to-slate-800/95 backdrop-blur-xl rounded-3xl border-2 border-violet-400/40 p-12 shadow-2xl shadow-violet-500/30">

            {/* Avatar */}
            <div className="relative w-24 h-24 mx-auto mb-10">
              <div className="w-full h-full bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
                <Terminal size={48} className="text-white" />
              </div>
            </div>

            {/* Message Display */}
            <div className="min-h-[250px] flex flex-col items-center justify-center">
              {currentMessageIndex < messages.length && (
                <motion.p className="text-3xl md:text-5xl bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent font-bold">
                  {displayedText}
                  <span className="inline-block w-1 h-10 bg-violet-400 ml-2 animate-pulse" />
                </motion.p>
              )}

              {/* CTA */}
              {showCTA && (
                <motion.button
                  onClick={() => navigate('/terminal')}
                  className="mt-12 px-16 py-6 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl font-mono text-xl text-white shadow-2xl"
                >
                  <Terminal className="inline mr-3" />
                  Access Terminal
                </motion.button>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ✅ Skip Intro Button */}
      {!showCTA && (
        <motion.button
          onClick={() => navigate('/terminal')}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50
                     flex items-center gap-2
                     px-4 py-2
                     rounded-full
                     bg-black/50 backdrop-blur-md
                     border border-violet-500/30
                     text-violet-300 text-xs font-mono
                     shadow-md shadow-violet-500/20
                     hover:bg-violet-600/20 hover:text-white
                     transition-all"
        >
          <SkipForward size={14} />
          Skip Intro and enter terminal
        </motion.button>
      )}

      {/* Bottom Ambient Light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/3 bg-gradient-to-t from-violet-600/20 to-transparent blur-3xl" />
    </div>
  );
}
