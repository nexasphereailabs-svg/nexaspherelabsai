import { motion } from "motion/react";
import { UserPlus, Settings2, Rocket } from "lucide-react";

const steps = [
  {
    icon: <UserPlus className="w-8 h-8" />,
    title: "Create Account",
    text: "Sign up in seconds and get immediate access to our neural processing dashboard.",
  },
  {
    icon: <Settings2 className="w-8 h-8" />,
    title: "Configure Agent",
    text: "Define your goals, upload your datasets, and fine-tune your custom AI parameters.",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Launch & Scale",
    text: "Deploy your solution to production and watch Nexasphere optimize your performance.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-brand-cyan font-bold text-xs tracking-widest uppercase mb-4">Process</p>
          <h2 className="text-4xl font-extrabold mb-4 tracking-tight">How it works</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-slate-200 to-transparent -translate-y-1/2 z-0" />
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              className="flex-1 text-center relative z-10"
            >
              <div className="mb-8 relative inline-block">
                <div className="w-20 h-20 rounded-[2rem] bg-white border border-slate-200 flex items-center justify-center text-brand-cyan shadow-sm mb-4 mx-auto backdrop-blur-xl">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-cyan text-white text-sm font-bold flex items-center justify-center shadow-lg">
                  0{i + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
