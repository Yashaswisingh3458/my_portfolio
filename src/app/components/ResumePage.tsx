import { motion, useMotionValue, useTransform } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Briefcase, GraduationCap, Award, Code, Sparkles, Download } from 'lucide-react';
import { useEffect } from 'react';

export function ResumePage() {
  const navigate = useNavigate();
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

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

  const experiences = [
    {
      title: 'Cybersecurity Virtual Intern',
      company: 'Cisco',
      period: 'June - August 2024',
      achievements: [
        'Completed cybersecurity and networking specializations',
        'Created secure campus network simulations',
        'Implemented access-control improvements',
        'Gained hands-on experience with network security protocols',
      ],
    },
  ];

  const skills = {
    'Programming Languages': ['C++', 'Java', 'Python', 'JavaScript'],
    'Web Development': ['MERN Stack', 'MongoDB', 'Express', 'React', 'Node.js', 'HTML', 'CSS'],
    'Data Structures & Algorithms': ['DSA', 'Problem Solving', 'LeetCode', 'Competitive Programming'],
    'Cybersecurity': ['Honeypots', 'Linux', 'Network Defense', 'Cisco Packet Tracer'],
    'Tools & Technologies': ['Git/GitHub', 'MySQL', 'Linux', 'Cisco Packet Tracer'],
  };

  return (
    <div className="min-h-screen p-4 md:p-8 perspective-1000">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto"
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
          <div className="flex items-center gap-4">
            <motion.a
              href="/Yashaswi_singh_resume.pdf"
              download="Yashaswi_Singh_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 hover:from-emerald-600/30 hover:to-teal-600/30 border border-emerald-500/30 rounded-xl transition-all backdrop-blur-sm font-mono text-sm font-bold text-emerald-300 shadow-lg shadow-emerald-500/10"
            >
              <Download size={18} />
              Download Resume
            </motion.a>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-sm font-bold text-gray-100 font-mono px-4 py-2 bg-slate-700/70 rounded-lg border-2 border-violet-400/30"
            >
              ~/RESUME
            </motion.span>
          </div>
        </div>

        {/* Main Content */}
        <motion.div
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* Left Column - Profile & Skills */}
          <div className="space-y-6">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              className="relative bg-gradient-to-br from-slate-800/95 via-indigo-900/60 to-slate-800/95 backdrop-blur-xl rounded-2xl border-2 border-violet-400/40 p-6 shadow-2xl shadow-violet-500/30 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/50"
                >
                  <Code size={40} className="text-white" />
                </motion.div>
                
                <h2 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent text-center mb-2">
                  Yashaswi Singh
                </h2>
                <p className="text-center font-bold text-gray-100 font-mono text-sm mb-4">
                  Computer Science & Engineering (Cyber Security)
                </p>
                
                <div className="space-y-2 text-sm font-bold text-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>Available for opportunities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles size={12} className="text-violet-400" />
                    <span className="font-bold">200+ LeetCode Problems Solved</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="font-bold">CGPA: 9.08/10</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              className="relative bg-gradient-to-br from-slate-800/95 via-indigo-900/60 to-slate-800/95 backdrop-blur-xl rounded-2xl border-2 border-violet-400/40 p-6 shadow-2xl shadow-violet-500/30 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="text-violet-400" size={24} />
                  <h3 className="text-xl bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent font-bold">
                    Skills
                  </h3>
                </div>

                <div className="space-y-4">
                  {Object.entries(skills).map(([category, items], idx) => (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                    >
                      <p className="text-xs font-bold text-violet-300 font-mono uppercase mb-2">
                        {category}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {items.map((skill) => (
                          <motion.span
                            key={skill}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="px-3 py-1 bg-gradient-to-r from-violet-600/30 to-indigo-600/30 border-2 border-violet-400/50 rounded-lg text-xs font-bold text-gray-100 font-mono cursor-pointer hover:border-violet-400/70 transition-colors shadow-lg shadow-violet-500/20"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Experience & Education */}
          <div className="lg:col-span-2 space-y-6">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.01, rotateY: -5 }}
              className="relative bg-gradient-to-br from-slate-900/80 via-purple-900/40 to-slate-900/80 backdrop-blur-xl rounded-2xl border border-violet-500/30 p-8 shadow-2xl shadow-violet-500/20 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl shadow-lg shadow-violet-500/50">
                    <Briefcase size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent font-bold">
                    Experience
                  </h3>
                </div>

                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                      className="relative pl-6 border-l-2 border-violet-500/30 hover:border-violet-500/60 transition-colors"
                    >
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 shadow-lg shadow-violet-500/50" />
                      
                      <h4 className="text-xl text-violet-400 font-mono mb-1">
                        {exp.title}
                      </h4>
                      <p className="font-bold text-gray-100 font-mono text-sm mb-1">
                        {exp.company}
                      </p>
                      <p className="font-bold text-gray-200 font-mono text-xs mb-3">
                        {exp.period}
                      </p>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 + idx * 0.05 }}
                            className="flex gap-3 font-bold text-gray-100 text-sm group/item"
                          >
                            <span className="text-violet-400 group-hover/item:text-indigo-400 transition-colors">
                              ▹
                            </span>
                            <span className="group-hover/item:text-gray-100 transition-colors">
                              {achievement}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.01, rotateY: -5 }}
              className="relative bg-gradient-to-br from-slate-900/80 via-purple-900/40 to-slate-900/80 backdrop-blur-xl rounded-2xl border border-violet-500/30 p-8 shadow-2xl shadow-violet-500/20 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl shadow-lg shadow-indigo-500/50">
                    <GraduationCap size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent font-bold">
                    Education
                  </h3>
                </div>

                <div className="pl-6 border-l-2 border-violet-500/30">
                  <h4 className="text-xl font-bold text-violet-300 font-mono mb-1">
                    B.Tech in Computer Science & Engineering (Cyber Security)
                  </h4>
                  <p className="font-bold text-gray-100 font-mono text-sm mb-1">
                    Bennett University
                  </p>
                  <p className="font-bold text-gray-200 font-mono text-xs mb-3">
                    2023 - 2027
                  </p>
                  <p className="font-bold text-gray-100 text-sm mb-2">
                    CGPA: 9.08/10
                  </p>
                  <div className="mt-4 space-y-2">
                    <h5 className="font-bold text-violet-400 text-sm mb-2">Previous Education:</h5>
                    <p className="font-bold text-gray-300 text-sm">Mercy Memorial School — Class 12 (2023): 90%</p>
                    <p className="font-bold text-gray-300 text-sm">Class 10 (2021): 92%</p>
                  </div>
                </div>
              </div>
            </motion.div>
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
