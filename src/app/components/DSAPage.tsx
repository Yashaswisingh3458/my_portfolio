import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Trophy, Flame, TrendingUp, Code, Cpu, Zap } from 'lucide-react';

export function DSAPage() {
  const navigate = useNavigate();

  const stats = [
    { label: 'Problems Solved', value: '200+', icon: Code, color: 'from-emerald-500 to-teal-500', glow: 'emerald' },
    { label: 'LeetCode Profile', value: 'Active', icon: Trophy, color: 'from-yellow-500 to-orange-500', glow: 'yellow' },
    { label: 'Focus Areas', value: 'DP, Graphs', icon: Flame, color: 'from-red-500 to-pink-500', glow: 'red' },
    { label: 'Competitive Programming', value: 'Active', icon: TrendingUp, color: 'from-violet-500 to-purple-500', glow: 'violet' },
  ];

  const recentSolves = [
    {
      problem: 'Dynamic Programming Problems',
      difficulty: 'Medium-Hard',
      approach: 'DP Patterns: Knapsack, LIS, LCS, Edit Distance',
      time: 'Optimized',
      space: 'Optimized',
      category: 'DP',
    },
    {
      problem: 'Graph Algorithms',
      difficulty: 'Medium-Hard',
      approach: 'BFS, DFS, Shortest Path, Topological Sort',
      time: 'O(V+E)',
      space: 'O(V+E)',
      category: 'Graph',
    },
    {
      problem: 'STL & Data Structures',
      difficulty: 'Medium',
      approach: 'Maps, Sets, Priority Queues, Custom Comparators',
      time: 'Efficient',
      space: 'Efficient',
      category: 'STL',
    },
    {
      problem: 'Recursion & Backtracking',
      difficulty: 'Medium',
      approach: 'Recursive Patterns, Memoization, Pruning',
      time: 'Optimized',
      space: 'Optimized',
      category: 'Recursion',
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
            ~/DSA
          </motion.span>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{
                delay: index * 0.1,
                type: 'spring',
                stiffness: 200,
                damping: 20,
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="relative bg-gradient-to-br from-slate-800/95 via-indigo-900/60 to-slate-800/95 backdrop-blur-xl rounded-2xl border-2 border-violet-400/40 p-6 overflow-hidden shadow-2xl shadow-violet-500/30 text-center">
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />
                
                {/* Icon */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className={`inline-block p-4 bg-gradient-to-br ${stat.color} rounded-xl mb-4 shadow-lg shadow-${stat.glow}-500/50`}
                >
                  <stat.icon size={32} className="text-white" />
                </motion.div>

                {/* Value */}
                <motion.p
                  className={`text-4xl font-mono bg-gradient-to-r ${stat.color} bg-clip-text text-transparent font-bold mb-2`}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {stat.value}
                </motion.p>

                {/* Label */}
                <p className="font-bold text-gray-100 font-mono text-sm">{stat.label}</p>

                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-${stat.glow}-500/20 to-transparent`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Solves */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative bg-gradient-to-br from-slate-800/95 via-indigo-900/60 to-slate-800/95 backdrop-blur-xl rounded-2xl border-2 border-violet-400/40 overflow-hidden shadow-2xl shadow-violet-500/30"
          >
            <div className="p-6 border-b border-violet-500/20">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl shadow-lg shadow-emerald-500/50">
                  <Cpu size={24} className="text-white" />
                </div>
                <h2 className="text-2xl bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent font-bold">
                  Recent Solves
                </h2>
              </div>
            </div>

            <div className="p-6 space-y-4 max-h-[600px] overflow-y-auto custom-scrollbar">
              {recentSolves.map((solve, index) => (
                <motion.div
                  key={solve.problem}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="p-4 bg-slate-700/70 rounded-xl border-2 border-violet-400/30 hover:border-violet-400/50 transition-all group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-50 font-mono mb-2 group-hover:text-violet-200 transition-colors">
                        {solve.problem}
                      </h3>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className={`px-3 py-1 rounded-lg text-xs font-mono ${
                            solve.difficulty === 'Easy'
                              ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/30'
                              : solve.difficulty === 'Medium'
                              ? 'bg-yellow-600/20 text-yellow-400 border border-yellow-500/30'
                              : 'bg-red-600/20 text-red-400 border border-red-500/30'
                          }`}
                        >
                          {solve.difficulty}
                        </span>
                        <span className="px-3 py-1 bg-violet-600/20 border border-violet-500/30 rounded-lg text-xs text-violet-400 font-mono">
                          {solve.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="font-bold text-indigo-300 text-sm font-mono mb-3">
                    {solve.approach}
                  </p>

                  <div className="flex gap-4 text-xs font-mono">
                    <div className="flex items-center gap-2 font-bold text-gray-100">
                      <Zap size={12} className="text-yellow-500" />
                      <span>Time: <span className="text-gray-200">{solve.time}</span></span>
                    </div>
                    <div className="flex items-center gap-2 font-bold text-gray-100">
                      <Cpu size={12} className="text-blue-500" />
                      <span>Space: <span className="text-gray-200">{solve.space}</span></span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Approach & Platforms */}
          <div className="space-y-8">
            {/* Problem-Solving Approach */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative bg-gradient-to-br from-slate-800/95 via-indigo-900/60 to-slate-800/95 backdrop-blur-xl rounded-2xl border-2 border-violet-400/40 overflow-hidden shadow-2xl shadow-violet-500/30"
            >
              <div className="p-6 border-b border-violet-500/20">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl shadow-lg shadow-violet-500/50">
                    <Code size={24} className="text-white" />
                  </div>
                  <h2 className="text-2xl bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent font-bold">
                    My Approach
                  </h2>
                </div>
              </div>

              <div className="p-6 space-y-4">
                {[
                  { title: 'Understand', desc: 'Analyze problem constraints and edge cases' },
                  { title: 'Pattern Match', desc: 'Identify algorithmic patterns and data structures' },
                  { title: 'Optimize', desc: 'Start with brute force, optimize to optimal solution' },
                  { title: 'Validate', desc: 'Test with multiple test cases including edge scenarios' },
                ].map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex gap-4 p-4 bg-slate-700/70 rounded-xl border-2 border-violet-400/30 hover:border-violet-400/50 transition-all group"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white font-mono font-bold shadow-lg shadow-violet-500/50 group-hover:scale-110 transition-transform">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-violet-200 font-mono mb-1 group-hover:text-indigo-200 transition-colors">
                        {step.title}
                      </h3>
                      <p className="font-bold text-gray-100 text-sm">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Platforms */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="relative bg-gradient-to-br from-slate-900/80 via-purple-900/40 to-slate-900/80 backdrop-blur-xl rounded-2xl border border-violet-500/30 p-6 shadow-2xl shadow-violet-500/20"
            >
              <h3 className="text-lg font-bold text-gray-100 font-mono mb-4">Competitive Platforms</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'LeetCode', rank: '200+ Problems' },
                  { name: 'Profile', rank: 'leetcode.com/u/yashaswi555/' },
                  { name: 'Focus', rank: 'DP, Graphs, STL' },
                  { name: 'Status', rank: 'Active Solver' },
                ].map((platform, index) => (
                  <motion.a
                    key={platform.name}
                    href="#"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 bg-gradient-to-br from-violet-600/10 to-indigo-600/10 hover:from-violet-600/20 hover:to-indigo-600/20 border border-violet-500/30 hover:border-violet-500/50 rounded-xl transition-all text-center group"
                  >
                    <p className="font-bold text-violet-300 font-mono mb-1 group-hover:text-indigo-300 transition-colors">
                      {platform.name}
                    </p>
                    <p className="font-bold text-gray-100 text-sm font-mono">{platform.rank}</p>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(139, 92, 246, 0.1);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.5);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.7);
        }
      `}</style>
    </div>
  );
}
