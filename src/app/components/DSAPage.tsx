import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Trophy, Flame, TrendingUp, Code, Cpu, Zap } from 'lucide-react';

export function DSAPage() {
  const navigate = useNavigate();

  const stats = [
    {
      label: 'DSA Problems Solved',
      value: '300+',
      icon: Code,
      color: 'from-emerald-500 to-teal-500',
      glow: 'emerald',
    },
    {
      label: 'LeetCode Practice',
      value: 'Consistent',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
      glow: 'yellow',
    },
    {
      label: 'Core Focus Areas',
      value: 'DP • Graphs • STL',
      icon: Flame,
      color: 'from-red-500 to-pink-500',
      glow: 'red',
    },
    {
      label: 'Competitive Coding',
      value: 'Regular Contests',
      icon: TrendingUp,
      color: 'from-violet-500 to-purple-500',
      glow: 'violet',
    },
  ];

  const recentSolves = [
    {
      problem: 'Dynamic Programming Problems',
      difficulty: 'Medium-Hard',
      approach: 'Knapsack, LIS, LCS, Edit Distance',
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
      approach: 'Maps, Sets, PQ, Custom Comparators',
      time: 'Efficient',
      space: 'Efficient',
      category: 'STL',
    },
    {
      problem: 'Recursion & Backtracking',
      difficulty: 'Medium',
      approach: 'Memoization, Pruning',
      time: 'Optimized',
      space: 'Optimized',
      category: 'Recursion',
    },
  ];

  return (
    <div className="min-h-screen p-4 md:p-8">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <motion.button
            onClick={() => navigate('/terminal')}
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 border border-violet-500/30 rounded-xl font-mono text-sm font-bold text-violet-300"
          >
            <ArrowLeft size={18} />
            Back to Terminal
          </motion.button>
          <span className="text-sm font-bold text-gray-100 font-mono px-4 py-2 bg-slate-700/70 rounded-lg border border-violet-400/30">
            ~/DSA
          </span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-gradient-to-br from-slate-800/95 to-slate-900/90 rounded-2xl border border-violet-400/40 p-6 text-center shadow-xl"
            >
              <div className={`p-4 bg-gradient-to-br ${stat.color} rounded-xl inline-block mb-4`}>
                <stat.icon size={28} className="text-white" />
              </div>
              <p className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </p>
              <p className="text-sm font-mono text-gray-200 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Recent Solves */}
          <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/90 rounded-2xl border border-violet-400/40 shadow-xl">
            <div className="p-6 border-b border-violet-500/20">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                Recent Solves
              </h2>
            </div>
            <div className="p-6 space-y-4">
              {recentSolves.map((s) => (
                <div key={s.problem} className="p-4 bg-slate-700/70 rounded-xl border border-violet-400/30">
                  <h3 className="font-bold text-gray-100 font-mono mb-2">{s.problem}</h3>
                  <p className="text-sm text-indigo-300 font-mono mb-2">{s.approach}</p>
                  <div className="flex gap-4 text-xs text-gray-200 font-mono">
                    <span>Time: {s.time}</span>
                    <span>Space: {s.space}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Platforms */}
          <div className="bg-gradient-to-br from-slate-900/80 to-purple-900/40 rounded-2xl border border-violet-500/30 p-6 shadow-xl">
            <h3 className="text-lg font-bold text-gray-100 font-mono mb-4">Competitive Platforms</h3>

            <div className="grid grid-cols-1 gap-4">
              <div className="p-4 bg-slate-700/70 rounded-xl border border-violet-400/30 text-center">
                <p className="font-bold text-violet-300 font-mono">LeetCode</p>
                <p className="text-gray-100 text-sm">300+ Problems Solved</p>
              </div>

              <a
                href="https://leetcode.com/u/yashaswi555/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gradient-to-br from-yellow-600/20 to-orange-600/20 rounded-xl border border-yellow-500/40 text-center font-mono font-bold text-yellow-300 hover:scale-105 transition"
              >
                Open LeetCode
              </a>

              <div className="p-4 bg-slate-700/70 rounded-xl border border-violet-400/30 text-center">
                <p className="font-bold text-violet-300 font-mono">CodeChef</p>
                <p className="text-gray-100 text-sm">Rating: 1550</p>
              </div>

              <a
                href="https://www.codechef.com/users/yashi_3458"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-xl border border-blue-500/40 text-center font-mono font-bold text-blue-300 hover:scale-105 transition"
              >
                Open CodeChef
              </a>
            </div>
            <div className="mt-6 p-6 bg-gradient-to-br from-slate-800/80 via-indigo-900/40 to-slate-800/80
                rounded-xl border border-violet-400/30
                shadow-xl shadow-violet-500/20">

              <h4 className="text-lg font-bold font-mono text-violet-300 mb-3">
                Problem-Solving Mindset
              </h4>

              <p className="text-sm font-mono text-gray-100 leading-relaxed">
                I believe strong problem-solving comes from debugging deeply, not guessing.
              I spend time understanding why solutions fail, tracing edge cases, and fixing
              logic step by step until the approach becomes clear.
              </p>
              <p className="mt-3 text-sm font-mono text-indigo-300">
                Growth mindset: break problems → debug thoroughly → optimize → learn.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
