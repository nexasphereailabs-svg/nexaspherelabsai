import { motion } from "motion/react";
import { 
  Bot, 
  MessagesSquare, 
  Search, 
  BarChart3, 
  TrendingUp, 
  Eye, 
  FileText,
  Brain,
  GraduationCap
} from "lucide-react";

const features = [
  {
    icon: <Bot className="w-6 h-6 text-brand-violet" />,
    iconBg: "bg-brand-violet/20",
    title: "AI Agents",
    description: "Autonomous intelligent agents capable of executing complex workflows and decision-making.",
  },
  {
    icon: <MessagesSquare className="w-6 h-6 text-brand-cyan" />,
    iconBg: "bg-brand-cyan/20",
    title: "Intelligent Chatbots",
    description: "Next-gen conversational AI designed for enterprise support and user engagement.",
  },
  {
    icon: <Search className="w-6 h-6 text-brand-blue" />,
    iconBg: "bg-brand-blue/20",
    title: "RAG Systems",
    description: "Retrieval-Augmented Generation systems for fact-based, domain-specific AI responses.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-brand-violet" />,
    iconBg: "bg-brand-violet/20",
    title: "Data Analysis",
    description: "In-depth processing of complex datasets to uncover hidden patterns and actionable insights.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-brand-cyan" />,
    iconBg: "bg-brand-cyan/20",
    title: "Forecasting",
    description: "Predictive modeling and trend forecasting using state-of-the-art machine learning algorithms.",
  },
  {
    icon: <Eye className="w-6 h-6 text-brand-blue" />,
    iconBg: "bg-brand-blue/20",
    title: "Computer Vision",
    description: "Automated visual intelligence for image recognition, object detection, and spatial analysis.",
  },
  {
    icon: <FileText className="w-6 h-6 text-brand-violet" />,
    iconBg: "bg-brand-violet/20",
    title: "Text Analysis",
    description: "Advanced natural language processing for sentiment analysis, extraction, and semantic understanding.",
  },
  {
    icon: <Brain className="w-6 h-6 text-brand-cyan" />,
    iconBg: "bg-brand-cyan/20",
    title: "Machine Learning",
    description: "Custom ML model development and deployment tailored to specific organizational needs.",
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-brand-blue" />,
    iconBg: "bg-brand-blue/20",
    title: "Technical Training",
    description: "High-impact training programs for corporates and universities in AI, ML, and Data Science.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-violet font-bold text-xs tracking-widest uppercase mb-4"
          >
            Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
          >
            Engineered for <span className="gradient-text">Performance</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group glass p-8 rounded-[32px] hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              <div className="relative z-10 text-left">
                <h3 className="text-xs font-bold text-brand-violet uppercase tracking-widest mb-6">Feature 0{i+1}</h3>
                <div className={`w-12 h-12 rounded-xl ${feature.iconBg} flex items-center justify-center mb-6`}>
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-700 transition-colors">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
