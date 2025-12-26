import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Github, Linkedin, Twitter, Send, MapPin, Clock, CheckCircle, Code } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:yashaswisingh545@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Update status
    setTimeout(() => {
      setStatus('sent');
      setTimeout(() => {
        setStatus('idle');
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }, 500);
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Yashaswisingh3458', color: 'from-gray-600 to-gray-800', hoverColor: 'from-gray-500 to-gray-700', username: 'Yashaswisingh3458', target: '_blank' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/yashaswisingh5', color: 'from-blue-600 to-blue-800', hoverColor: 'from-blue-500 to-blue-700', username: 'yashaswisingh5', target: '_blank' },
    { icon: Twitter, label: 'Twitter', href: 'https://x.com/yashi3458', color: 'from-sky-600 to-sky-800', hoverColor: 'from-sky-500 to-sky-700', username: '@yashi3458', target: '_blank' },
    { icon: Code, label: 'LeetCode', href: 'https://leetcode.com/u/yashaswi555/', color: 'from-orange-600 to-orange-800', hoverColor: 'from-orange-500 to-orange-700', username: 'yashaswi555', target: '_blank' },
  ];

  return (
    <div className="min-h-screen p-4 md:p-8">
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
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 hover:from-violet-600/30 hover:to-indigo-600/30 border border-violet-500/30 rounded-xl transition-all backdrop-blur-sm font-mono text-sm text-violet-400 shadow-lg shadow-violet-500/10"
          >
            <ArrowLeft size={18} />
            Back to Terminal
          </motion.button>
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-sm font-bold text-gray-100 font-mono px-4 py-2 bg-slate-700/70 rounded-lg border-2 border-violet-400/30"
          >
            ~/CONTACT
          </motion.span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 relative bg-gradient-to-br from-slate-800/95 via-indigo-900/60 to-slate-800/95 backdrop-blur-xl rounded-2xl border-2 border-violet-400/40 overflow-hidden shadow-2xl shadow-violet-500/30"
          >
            <div className="p-6 border-b border-violet-500/20">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl shadow-lg shadow-violet-500/50">
                  <Mail size={24} className="text-white" />
                </div>
                <h2 className="text-2xl bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent font-bold">
                  Send Message
                </h2>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm font-bold text-gray-100 font-mono mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-700/70 border-2 border-violet-400/40 rounded-xl text-gray-100 font-mono focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/50 transition-colors placeholder-gray-400"
                    placeholder="John Doe"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <label className="block text-sm font-bold text-gray-100 font-mono mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-700/70 border-2 border-violet-400/40 rounded-xl text-gray-100 font-mono focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/50 transition-colors placeholder-gray-400"
                    placeholder="john@example.com"
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-bold text-gray-300 font-mono mb-2">
                  Message *
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-violet-500/30 rounded-xl text-gray-200 font-mono focus:outline-none focus:border-violet-500 transition-colors resize-none placeholder-gray-600 custom-scrollbar"
                  placeholder="Your message here..."
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={status !== 'idle'}
                whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                whileTap={{ scale: status === 'idle' ? 0.98 : 1 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 disabled:from-gray-600 disabled:to-gray-700 rounded-xl text-white font-mono transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 disabled:shadow-none overflow-hidden group relative"
              >
                {status === 'idle' && (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </>
                )}
                {status === 'sending' && (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    >
                      <Send size={20} />
                    </motion.div>
                    <span>Sending...</span>
                  </>
                )}
                {status === 'sent' && (
                  <>
                    <CheckCircle size={20} />
                    <span>Message Sent!</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative bg-gradient-to-br from-slate-800/95 via-indigo-900/60 to-slate-800/95 backdrop-blur-xl rounded-2xl border-2 border-violet-400/40 overflow-hidden shadow-2xl shadow-violet-500/30"
            >
              <div className="p-6 border-b border-violet-500/20">
                <h3 className="text-xl bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent font-bold">
                  Connect
                </h3>
              </div>
              <div className="p-6 space-y-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.target || '_self'}
                    rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center gap-4 p-4 bg-gradient-to-r ${link.color} hover:${link.hoverColor} rounded-xl transition-all group shadow-lg`}
                  >
                    <div className="p-2 bg-white/10 rounded-lg">
                      <link.icon size={20} className="text-white group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-mono text-sm font-bold">{link.label}</p>
                      <p className="text-white/70 text-xs font-mono">{link.username}</p>
                    </div>
                  </motion.a>
                ))}

                {/* Email */}
                <motion.a
                  href="mailto:yashaswisingh545@gmail.com"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 rounded-xl transition-all group shadow-lg"
                >
                  <div className="p-2 bg-white/10 rounded-lg">
                    <Mail size={20} className="text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-mono text-sm font-bold">Email</p>
                    <p className="text-white/70 text-xs font-mono">yashaswisingh545@gmail.com</p>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative bg-gradient-to-br from-slate-800/95 via-indigo-900/60 to-slate-800/95 backdrop-blur-xl rounded-2xl border-2 border-violet-400/40 overflow-hidden shadow-2xl shadow-violet-500/30"
            >
              <div className="p-6 border-b border-violet-500/20">
                <h3 className="text-xl bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent font-bold">
                  Quick Info
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <div className="p-2 bg-violet-600/20 rounded-lg">
                    <MapPin size={18} className="text-violet-400" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-100 font-mono text-sm">Location</p>
                    <p className="text-gray-100 font-mono mt-1">Greater noida</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className="flex items-start gap-3"
                >
                  <div className="p-2 bg-emerald-600/20 rounded-lg">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <CheckCircle size={18} className="text-emerald-400" />
                    </motion.div>
                  </div>
                  <div>
                    <p className="font-bold text-gray-100 font-mono text-sm">Status</p>
                    <p className="text-emerald-400 font-mono mt-1 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Available for opportunities
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <div className="p-2 bg-indigo-600/20 rounded-lg">
                    <Clock size={18} className="text-indigo-400" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-100 font-mono text-sm">Response Time</p>
                    <p className="text-gray-100 font-mono mt-1">Within 24 hours</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <style>{`
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
