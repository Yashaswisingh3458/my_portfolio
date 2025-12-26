import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Terminal, ChevronRight, Cpu, Activity, HardDrive } from 'lucide-react';

interface CommandHistory {
  command: string;
  output: string;
  type: 'success' | 'error' | 'info';
}

export function TerminalPage() {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: '',
      output: '╔═══════════════════════════════════════════════╗\n║   QUANTUM TERMINAL OS v3.0 - INITIALIZED     ║\n╚═══════════════════════════════════════════════╝\n\nType "help" to display available commands.',
      type: 'info',
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

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

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    if (!trimmedCmd) return;

    const newHistory: CommandHistory = { command: cmd, output: '', type: 'success' };

    switch (trimmedCmd) {
      case 'help':
        newHistory.output = `
╭────────────────────────────────────────────────╮
│  AVAILABLE QUANTUM COMMANDS                    │
├────────────────────────────────────────────────┤
│                                                │
│  ⚡ cd RESUME      → Access professional data  │
│  ⚡ cd PROJECTS    → View project archives     │
│  ⚡ cd DSA         → Algorithm vault access    │
│  ⚡ cd CONTACT     → Communication protocols   │
│  ⚡ clear         → Clear terminal display     │
│  ⚡ exit          → Return to main system     │
│  ⚡ ls            → List directories           │
│  ⚡ whoami        → Display user identity      │
│  ⚡ status        → System status check        │
│                                                │
╰────────────────────────────────────────────────╯`;
        newHistory.type = 'info';
        break;

      case 'cd resume':
        newHistory.output = '🚀 Initializing resume module...\n⚡ Loading professional data...';
        setHistory((prev) => [...prev, newHistory]);
        setTimeout(() => navigate('/resume'), 600);
        return;

      case 'cd projects':
        newHistory.output = '🚀 Accessing project archives...\n⚡ Decrypting portfolio data...';
        setHistory((prev) => [...prev, newHistory]);
        setTimeout(() => navigate('/projects'), 600);
        return;

      case 'cd dsa':
        newHistory.output = '🚀 Opening algorithm vault...\n⚡ Loading DSA protocols...';
        setHistory((prev) => [...prev, newHistory]);
        setTimeout(() => navigate('/dsa'), 600);
        return;

      case 'cd contact':
        newHistory.output = '🚀 Establishing communication channel...\n⚡ Connecting...';
        setHistory((prev) => [...prev, newHistory]);
        setTimeout(() => navigate('/contact'), 600);
        return;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
        newHistory.output = '🚀 Disconnecting from terminal...\n⚡ Returning to main system...';
        setHistory((prev) => [...prev, newHistory]);
        setTimeout(() => navigate('/'), 600);
        return;

      case 'ls':
        newHistory.output = `
📁 RESUME/      Last modified: 2024-12-26
📁 PROJECTS/    Last modified: 2024-12-26
📁 DSA/         Last modified: 2024-12-26
📁 CONTACT/     Last modified: 2024-12-26

Total: 4 directories`;
        newHistory.type = 'info';
        break;

      case 'whoami':
        newHistory.output = 'developer \nRole: software developer \nStatus: Active';
        newHistory.type = 'info';
        break;

      case 'status':
        newHistory.output = `
╭─ SYSTEM STATUS ────────────────╮
│ CPU Usage:     █████░░░░░ 45%  │
│ Memory:        ███░░░░░░░ 32%  │
│ Network:       ████████░░ 87%  │
│ Status:        🟢 OPTIMAL      │
╰────────────────────────────────╯`;
        newHistory.type = 'info';
        break;

      default:
        newHistory.output = `⚠️  Command not found: '${cmd}'\n💡 Type 'help' for available commands.`;
        newHistory.type = 'error';
    }

    setHistory((prev) => [...prev, newHistory]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8 perspective-1000">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="max-w-6xl mx-auto"
      >
        {/* System Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 grid grid-cols-3 gap-4"
        >
          {[
            { icon: Cpu, label: 'CPU', value: '45%', color: 'from-violet-500 to-purple-500' },
            { icon: Activity, label: 'Network', value: '87%', color: 'from-indigo-500 to-blue-500' },
            { icon: HardDrive, label: 'Storage', value: '32%', color: 'from-purple-500 to-pink-500' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-800/95 via-indigo-900/60 to-slate-800/95 backdrop-blur-xl border-2 border-violet-400/40 rounded-xl p-4 shadow-lg shadow-violet-500/30"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 bg-gradient-to-br ${stat.color} rounded-lg`}>
                  <stat.icon size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-gray-200 font-mono">{stat.label}</p>
                  <p className="text-lg font-mono bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          className="relative bg-gradient-to-br from-slate-800/95 via-indigo-900/60 to-slate-800/95 backdrop-blur-2xl rounded-2xl border-2 border-violet-400/40 shadow-2xl shadow-violet-500/30 overflow-hidden"
          whileHover={{ boxShadow: '0 0 60px rgba(139, 92, 246, 0.3)' }}
          transition={{ duration: 0.3 }}
        >
          {/* Holographic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-transparent to-indigo-600/10 pointer-events-none" />
          
          {/* Terminal Header */}
          <div className="relative flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-indigo-600/20 border-b border-violet-500/30">
            <div className="flex gap-2">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50 cursor-pointer"
              />
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50 cursor-pointer"
              />
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50 cursor-pointer"
              />
            </div>
            <div className="flex-1 text-center">
              <motion.span
                className="text-sm bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent font-mono font-semibold"
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                quantum-terminal@system ~ bash
              </motion.span>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <Terminal size={18} className="text-violet-400" />
            </motion.div>
          </div>

          {/* Terminal Content */}
          <div
            className="relative p-8 h-[calc(100vh-250px)] overflow-y-auto font-mono text-sm custom-scrollbar"
            onClick={() => inputRef.current?.focus()}
          >
            {/* Command History */}
            <div className="space-y-4">
              {history.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.command && (
                    <div className="flex items-center gap-3 text-gray-100">
                      <span className="text-violet-400 font-bold">❯</span>
                      <span className="text-indigo-300">{item.command}</span>
                    </div>
                  )}
                  {item.output && (
                    <div
                      className={`mt-2 whitespace-pre-line pl-6 ${
                        item.type === 'error'
                          ? 'text-red-400'
                          : item.type === 'info'
                          ? 'text-emerald-400'
                          : 'text-gray-200'
                      }`}
                    >
                      {item.output}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Current Input Line */}
            <motion.div
              className="flex items-center gap-3 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.span
                className="text-violet-400 flex items-center gap-1"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronRight size={18} />
              </motion.span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent outline-none text-gray-200 caret-violet-400 placeholder-gray-600"
                placeholder="Enter command..."
                autoFocus
              />
            </motion.div>

            <div ref={bottomRef} />
          </div>

          {/* Bottom Glow */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
        </motion.div>

        {/* Help Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-center space-y-2"
        >
          <p className="text-sm font-bold text-gray-200 font-mono">
            💡 Pro Tip: Type <span className="text-violet-400 font-semibold">"help"</span> for available commands
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-green-500"
            />
            <span>System Online</span>
          </div>
        </motion.div>
      </motion.div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(139, 92, 246, 0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.5);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.7);
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}
