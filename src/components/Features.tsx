import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { featuresData } from "../constants/featuresData";

const features = Object.values(featuresData);

const getColorClass = (color: string) => {
  switch (color) {
    case 'brand-violet': return 'text-brand-violet';
    case 'brand-cyan': return 'text-brand-cyan';
    case 'brand-blue': return 'text-brand-blue';
    default: return 'text-brand-violet';
  }
};

const getBgClass = (color: string) => {
  switch (color) {
    case 'brand-violet': return 'bg-brand-violet/20';
    case 'brand-cyan': return 'bg-brand-cyan/20';
    case 'brand-blue': return 'bg-brand-blue/20';
    default: return 'bg-brand-violet/20';
  }
};

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
            Services
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
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Link key={i} to={`/features/${feature.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group glass p-8 rounded-[32px] hover:shadow-2xl hover:shadow-brand-violet/10 hover:border-brand-violet/30 transition-all duration-300 relative overflow-hidden cursor-pointer h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 text-left">
                    <h3 className="text-[10px] font-bold text-brand-violet uppercase tracking-widest mb-6 opacity-60 group-hover:opacity-100 transition-opacity">Service 0{i+1}</h3>
                    <div className={`w-14 h-14 rounded-2xl ${getBgClass(feature.color)} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${getColorClass(feature.color)}`} />
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-brand-violet transition-colors">{feature.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-700 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
