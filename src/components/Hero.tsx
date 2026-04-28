import { useState } from "react";
import { motion } from "motion/react";
import { ChevronRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "./ui/Button";

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-violet-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-50px] right-[-50px] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px] animate-pulse delay-700" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 bg-violet-500/10 border border-violet-400/20 rounded-full text-xs font-semibold text-brand-violet mb-6 uppercase tracking-widest"
          >
            Next-Gen Intelligence
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold leading-[0.9] tracking-tighter mb-6 text-slate-900">
            Unlock the <br />
            <span className="gradient-text">Power of Nexasphere</span>
          </h1>
          
          <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
            Build, automate, and scale with intelligent solutions designed for the future of enterprise operations.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/learn-more">
              <Button size="lg" className="flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-800 transition-colors">
                Learn More  <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 glass rounded-[40px] p-3 overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-violet/20 to-brand-cyan/20 opacity-30 group-hover:opacity-50 transition-opacity z-10 pointer-events-none" />
            <div className="relative overflow-hidden rounded-[30px] bg-slate-900 min-h-[300px]">
              {/* Video Loading Visual */}
              {!isVideoLoaded && (
                <div className="absolute inset-0 z-30 flex items-center justify-center bg-slate-900">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 rounded-full border-2 border-brand-violet/20 border-t-brand-violet animate-spin" />
                    <span className="text-slate-400 text-[10px] font-bold tracking-[0.2em] uppercase">Loading</span>
                  </div>
                </div>
              )}
              
              <video 
                src="https://files.catbox.moe/g752jk.mp4" 
                poster="https://files.catbox.moe/iqgdtg.png"
                autoPlay 
                loop 
                muted 
                playsInline 
                onLoadedData={() => setIsVideoLoaded(true)}
                className={`w-full h-auto block relative z-0 transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
              />
              <div className="absolute inset-0 bg-slate-900/10 mix-blend-overlay z-10 pointer-events-none" />
            </div>
          </div>
          
          {/* Enhanced Glow Effect */}
          <div className="absolute -inset-4 bg-brand-violet/20 blur-3xl opacity-50 -z-10 animate-pulse" />
          
          {/* Decorative floating card */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 glass-dark p-6 rounded-3xl z-30 hidden lg:block shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded bg-brand-violet/20 flex items-center justify-center">
                <Cpu className="w-4 h-4 text-brand-violet" />
              </div>
              <span className="text-[10px] font-bold text-brand-violet uppercase tracking-widest">Neural Link Active</span>
            </div>
            <div className="h-1 w-32 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                animate={{ width: ["10%", "90%", "40%"] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="h-full bg-brand-violet" 
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Cpu(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  );
}
