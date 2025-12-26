import { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Terminal, Sparkles, Zap, Code2, Database, Cpu } from 'lucide-react';

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
    { text: 'DSA in mind, execution in code', delay: 60 },
    { text: 'that transform ideas into reality.', delay: 60 },
    { text: 'What sets me apart?', delay: 80 },
    { text: 'I think in systems, architect in code, and build for scale.', delay: 50 },
    { text: 'Ready to explore my work?', delay: 80 },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX - innerWidth / 2);
      mouseY.set(clientY - innerHeight / 2);
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
          setCurrentMessageIndex(currentMessageIndex + 1);
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
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-violet-600/30 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
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
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Icon size={60} className="text-violet-500/20" />
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* 3D Holographic Card */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="relative"
        >
          {/* Holographic Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-transparent to-indigo-600/20 rounded-3xl blur-2xl" />
          
          <div className="relative bg-gradient-to-br from-slate-800/95 via-indigo-900/60 to-slate-800/95 backdrop-blur-xl rounded-3xl border-2 border-violet-400/40 p-12 shadow-2xl shadow-violet-500/30">
            {/* Animated Corner Accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-violet-400 rounded-tl-3xl" />
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-violet-400 rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-violet-400 rounded-bl-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-violet-400 rounded-br-3xl" />

            {/* AI Avatar */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.2 }}
              className="mb-8 inline-block"
            >
              <div className="relative">
                {/* Rotating Rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-32 h-32 border-2 border-violet-500/30 rounded-full" />
                </motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-40 h-40 border-2 border-indigo-500/20 rounded-full border-dashed" />
                </motion.div>

                {/* Core */}
                <div className="relative w-24 h-24 mx-auto">
                  <motion.div
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(139, 92, 246, 0.5)',
                        '0 0 60px rgba(139, 92, 246, 0.8)',
                        '0 0 20px rgba(139, 92, 246, 0.5)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-full h-full bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl flex items-center justify-center"
                  >
                    <Terminal size={48} className="text-white" />
                  </motion.div>
                  
                  {/* Sparkles */}
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      style={{
                        top: '50%',
                        left: '50%',
                      }}
                      animate={{
                        x: [0, (i % 2 ? 30 : -30)],
                        y: [0, (i > 1 ? 30 : -30)],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    >
                      <Sparkles size={16} className="text-violet-400" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Message Display */}
            <div className="min-h-[250px] flex flex-col items-center justify-center">
              {currentMessageIndex < messages.length && (
                <motion.div
                  key={currentMessageIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <motion.p
                    className="text-3xl md:text-5xl bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent font-bold"
                    style={{
                      textShadow: '0 0 40px rgba(139, 92, 246, 0.5)',
                    }}
                  >
                    {displayedText}
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="inline-block w-1 h-10 md:h-14 bg-violet-400 ml-2 shadow-lg shadow-violet-400/50"
                    />
                  </motion.p>
                </motion.div>
              )}

              {/* CTA Button */}
              {showCTA && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="mt-12"
                >
                  <motion.button
                    onClick={() => navigate('/terminal')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-16 py-6 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl font-mono text-xl overflow-hidden shadow-2xl shadow-violet-500/50"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative flex items-center gap-3 text-white">
                      <Terminal className="group-hover:rotate-12 transition-transform duration-300" />
                      Access Terminal
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </span>
                    
                    {/* Button Glow */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        boxShadow: '0 0 60px rgba(139, 92, 246, 0.8)',
                      }}
                    />
                  </motion.button>
                </motion.div>
              )}
            </div>

            {/* Progress Indicator */}
            {currentMessageIndex < messages.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-12 flex items-center justify-center gap-2"
              >
                {messages.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      index <= currentMessageIndex
                        ? 'w-10 bg-gradient-to-r from-violet-500 to-indigo-500'
                        : 'w-3 bg-gray-700'
                    }`}
                    animate={
                      index === currentMessageIndex
                        ? { boxShadow: '0 0 10px rgba(139, 92, 246, 0.8)' }
                        : {}
                    }
                  />
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Ambient Light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/3 bg-gradient-to-t from-violet-600/20 to-transparent blur-3xl" />
    </div>
  );
}
