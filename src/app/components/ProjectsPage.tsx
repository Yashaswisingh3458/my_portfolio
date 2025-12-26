import { motion, useMotionValue, useTransform } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Zap, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ProjectsPage() {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY, currentTarget } = e;
      const target = currentTarget as Window;
      mouseX.set(clientX - target.innerWidth / 2);
      mouseY.set(clientY - target.innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const projects = [
    {
      title: 'MAITRI — Smart India Hackathon Project',
      description:
        'AI-based multimodal astronaut mental health monitoring system (text, voice, emotion, vitals)',
      tech: ['AI/ML', 'Python', 'Real-time Analysis', 'Recommendation Engine'],
      problem: 'Astronauts face mental health challenges in isolated space environments without proper monitoring',
      solution: 'Built AI-based multimodal system analyzing text, voice, emotion, and vitals for real-time mental wellbeing monitoring',
      impact: 'Smart India Hackathon 2025 • Real-time Analysis • Mental Health Monitoring',
      gradient: 'from-violet-600 to-purple-600',
      stats: { year: '2025', type: 'Hackathon', status: 'Active' },
    },
    {
      title: 'DecoyNet — SSH Honeypot',
      description:
        'Production-like honeypot to detect malicious SSH activity and analyze attacker behavior',
      tech: ['Python', 'Linux', 'Network Security', 'Logging', 'Cyber Defense'],
      problem: 'Organizations need to detect and analyze malicious SSH attacks before they reach production systems',
      solution: 'Developed production-like honeypot that logs intrusion patterns and generates insights for cyber defense',
      impact: 'Intrusion Detection • Attack Analysis • Cyber Defense Insights',
      gradient: 'from-indigo-600 to-blue-600',
      stats: { type: 'Security', focus: 'Honeypot', defense: 'Active' },
    },
    {
      title: 'Linux Device Driver for Virus Detection',
      description:
        'Kernel-level LSM-based module to detect low-level firmware-based malicious activity',
      tech: ['C', 'Linux Kernel', 'LSM', 'Device Drivers', 'Firmware Security'],
      problem: 'Low-level firmware-based attacks bypass traditional security measures',
      solution: 'Created kernel-level LSM-based module to detect malicious firmware activity at the device driver level',
      impact: 'Kernel-level Security • Firmware Protection • Low-level Detection',
      gradient: 'from-purple-600 to-pink-600',
      stats: { level: 'Kernel', type: 'LSM', security: 'Hardware' },
    },
    {
      title: 'Tomato — Zomato Clone',
      description:
        'Full-featured food delivery platform clone with restaurant listings, menu browsing, cart management, and order tracking',
      tech: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Node.js', 'Express'],
      problem: 'Learning full-stack development by building a real-world food delivery application',
      solution: 'Created a complete Zomato clone with frontend (HTML/CSS/JS) and MongoDB backend for restaurant data, user management, and order processing',
      impact: 'Full-Stack Learning • Database Design • RESTful API • User Experience',
      gradient: 'from-red-600 to-orange-600',
      stats: { frontend: 'HTML/CSS/JS', backend: 'MongoDB', type: 'Full-Stack' },
    },
  ];

  return (
    <div className="min-h-screen p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <motion.button
            onClick={() => navigate('/terminal')}
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 hover:from-violet-600/30 hover:to-indigo-600/30 border border-violet-500/30 rounded-xl transition-all backdrop-blur-sm font-mono text-sm font-bold text-violet-300 shadow-lg shadow-violet-500/10"
          >
            <ArrowLeft size={18} />
            Back to Terminal
          </motion.button>
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-sm font-bold text-gray-100 font-mono px-4 py-2 bg-slate-700/70 rounded-lg border-2 border-violet-400/30"
          >
            ~/PROJECTS
          </motion.span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              className="relative group perspective-1000"
            >
              {/* Card */}
              <div className="relative bg-gradient-to-br from-slate-800/95 via-indigo-900/60 to-slate-800/95 backdrop-blur-xl rounded-2xl border-2 border-violet-400/40 overflow-hidden shadow-2xl shadow-violet-500/30 transform-gpu"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  animate={hoveredIndex === index ? {
                    background: [
                      `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                      `linear-gradient(135deg, var(--tw-gradient-stops))`,
                      `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                    ]
                  } : {}}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Header with Stats */}
                <div className="relative p-6 border-b border-violet-500/20">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <motion.h3
                        className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent mb-2"
                        animate={hoveredIndex === index ? { scale: [1, 1.02, 1] } : {}}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        {project.title}
                      </motion.h3>
                      <p className="font-bold text-gray-100 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-gradient-to-br from-violet-600/20 to-indigo-600/20 hover:from-violet-600/30 hover:to-indigo-600/30 rounded-xl border border-violet-500/30 transition-colors"
                      >
                        <Github size={20} className="text-violet-400" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 hover:from-indigo-600/30 hover:to-purple-600/30 rounded-xl border border-indigo-500/30 transition-colors"
                      >
                        <ExternalLink size={20} className="text-indigo-400" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Live Stats */}
                  <div className="grid grid-cols-3 gap-3">
                    {Object.entries(project.stats).map(([key, value], idx) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                        className="text-center p-3 bg-slate-700/70 rounded-lg border-2 border-violet-400/30"
                      >
                        <motion.p
                          className={`text-lg font-mono bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent font-bold`}
                          animate={hoveredIndex === index ? {
                            scale: [1, 1.1, 1],
                          } : {}}
                          transition={{ duration: 1, repeat: Infinity, delay: idx * 0.2 }}
                        >
                          {value}
                        </motion.p>
                        <p className="text-xs font-bold text-gray-300 font-mono mt-1 uppercase">
                          {key}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Body - Problem/Solution/Impact */}
                <div className="relative p-6 space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="p-4 bg-red-950/20 border-l-4 border-red-500 rounded-r-lg"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-red-500/20 rounded-lg">
                        <Zap size={16} className="text-red-400" />
                      </div>
                      <div>
                        <p className="text-red-400 font-mono text-sm font-bold mb-1">Problem</p>
                        <p className="font-bold text-gray-100 text-sm">{project.problem}</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="p-4 bg-emerald-950/20 border-l-4 border-emerald-500 rounded-r-lg"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-emerald-500/20 rounded-lg">
                        <TrendingUp size={16} className="text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-emerald-400 font-mono text-sm font-bold mb-1">Solution</p>
                        <p className="font-bold text-gray-100 text-sm">{project.solution}</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="p-4 bg-violet-950/20 border-l-4 border-violet-500 rounded-r-lg"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-violet-500/20 rounded-lg">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                        >
                          ⚡
                        </motion.div>
                      </div>
                      <div>
                        <p className="text-violet-400 font-mono text-sm font-bold mb-1">Impact</p>
                        <p className="font-bold text-gray-100 text-sm">{project.impact}</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Tech Stack */}
                  <div className="pt-4 border-t border-violet-500/20">
                    <p className="text-xs font-bold text-gray-100 font-mono mb-3 uppercase">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + idx * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className={`px-3 py-1.5 bg-gradient-to-r ${project.gradient} bg-opacity-30 border-2 border-violet-400/40 rounded-lg text-xs font-bold text-gray-100 font-mono cursor-pointer shadow-lg transition-all hover:shadow-violet-500/50`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Glow */}
                <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="font-bold text-gray-100 font-mono text-sm mb-4">
            More projects available on{' '}
            <a href="#" className="text-violet-400 hover:text-violet-300 hover:underline transition-colors">
              GitHub
            </a>
          </p>
          <div className="flex items-center justify-center gap-2">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-violet-500"
            />
            <span className="text-xs font-bold text-gray-100">Building the future, one project at a time</span>
          </div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}
