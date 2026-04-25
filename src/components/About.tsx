import { motion } from "motion/react";
import { Cpu, GraduationCap, Briefcase, Rocket, BrainCircuit, Globe } from "lucide-react";

export default function About() {
  const coreValues = [
    { 
      icon: <BrainCircuit className="w-6 h-6" />, 
      title: "AI Excellence", 
      desc: "Specialized in custom AI Agents, Chatbots, and advanced RAG systems." 
    },
    { 
      icon: <GraduationCap className="w-6 h-6" />, 
      title: "Talent Development", 
      desc: "High-impact AI/ML and Data Science training for corporates and universities." 
    },
    { 
      icon: <Briefcase className="w-6 h-6" />, 
      title: "Business Impact", 
      desc: "Solving real-world challenges through intelligent automation." 
    },
    { 
      icon: <Globe className="w-6 h-6" />, 
      title: "Global Reach", 
      desc: "Enabling digital transformation for future-ready organizations worldwide." 
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-violet/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[120px] -ml-64 -mb-64" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-brand-violet font-bold text-xs tracking-widest uppercase mb-4">About Nexasphere</p>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-8 leading-[1.1] tracking-tighter text-slate-900">
              Unlocking the <br />
              <span className="gradient-text">Future of Intelligence.</span>
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                <strong className="text-slate-900">Nexasphere AI Labs Private Limited</strong> is a forward-thinking technology company dedicated to helping organizations unlock the power of Artificial Intelligence, Data Science, and intelligent automation.
              </p>
              <p>
                We prioritize technical excellence and real-world business understanding to deliver measurable outcomes, from modernizing business systems to upskilling the global workforce.
              </p>
            </div>
            
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-full">
                <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">AI Innovation</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-full">
                <div className="w-2 h-2 rounded-full bg-brand-violet animate-pulse" />
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Data Excellence</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[40px] hover:shadow-xl transition-shadow duration-500 h-full flex flex-col justify-center"
          >
            <h3 className="text-2xl font-extrabold text-slate-900 mb-6 tracking-tight">Technical Core Expertise</h3>
            <p className="text-slate-500 mb-8 leading-relaxed text-center lg:text-left">
              We specialize in building innovative AI solutions that solve real business challenges. Our core architecture includes:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {["Custom AI Agents", "Intelligent Chatbots", "RAG Systems", "Domain Copilots"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-violet" />
                  <span className="text-sm font-bold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[40px] relative overflow-hidden group border-2 border-brand-violet/20 flex flex-col justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/5 to-brand-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <GraduationCap className="text-brand-violet w-8 h-8" />
                <h4 className="text-xl font-extrabold text-slate-900 tracking-tight">Empowering Future Talent</h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Developing future-ready talent through high-impact training programs in AI, Machine Learning, Generative AI, and Analytics for universities and corporate institutions.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-slate-900 text-white rounded-full">Python</span>
                <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-slate-900 text-white rounded-full">MLOps</span>
                <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-slate-900 text-white rounded-full">GenAI</span>
                <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-slate-900 text-white rounded-full">Analytics</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {coreValues.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-[32px] group hover:shadow-2xl hover:shadow-brand-violet/10 hover:border-brand-violet/30 transition-all duration-300 text-center sm:text-left relative overflow-hidden h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 mx-auto sm:mx-0 rounded-2xl bg-brand-violet/10 flex items-center justify-center mb-6 text-brand-violet group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-lg font-bold mb-2 text-slate-900 group-hover:text-brand-violet transition-colors duration-300 tracking-tight">{value.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed group-hover:text-slate-700 transition-colors duration-300 uppercase font-medium tracking-wide">{value.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 pt-12 border-t border-slate-100/50 text-center"
        >
          <p className="text-slate-400 italic text-sm max-w-2xl mx-auto">
            "At Nexasphere AI Labs, we combine technical excellence and innovation to deliver measurable outcomes. We are your trusted transformation partner."
          </p>
        </motion.div>
      </div>
    </section>
  );
}

