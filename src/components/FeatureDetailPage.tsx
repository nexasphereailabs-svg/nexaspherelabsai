import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { 
  ArrowLeft,
  ChevronRight,
  CheckCircle2,
  Quote,
  HelpCircle,
  BarChart,
  ArrowRight
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { featuresData } from "../constants/featuresData";

export default function FeatureDetailPage() {
  const { slug: urlSlug } = useParams<{ slug: string }>();
  
  // Case-insensitive lookup for robustness
  const feature = urlSlug 
    ? Object.values(featuresData).find(f => f.slug.toLowerCase() === urlSlug.toLowerCase()) 
    : null;

  if (!feature) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h2 className="text-4xl font-display font-bold mb-4">Service Not Found</h2>
            <p className="text-slate-500 mb-8 max-w-md mx-auto">The AI service you're looking for might have been moved, renamed, or is currently undergoing maintenance.</p>
            <Link to="/" className="gradient-btn px-8 py-3 rounded-full font-bold inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Dashboard
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  const Icon = feature.icon;

  // Helper for color mapping to avoid dynamic class purging
  const getIconColor = (color: string) => {
    switch (color) {
      case 'brand-violet': return 'text-brand-violet';
      case 'brand-cyan': return 'text-brand-cyan';
      case 'brand-blue': return 'text-brand-blue';
      default: return 'text-brand-violet';
    }
  };

  const getIconBg = (color: string) => {
    switch (color) {
      case 'brand-violet': return 'bg-brand-violet/10';
      case 'brand-cyan': return 'bg-brand-cyan/10';
      case 'brand-blue': return 'bg-brand-blue/10';
      default: return 'bg-brand-violet/10';
    }
  };

  const renderHero = () => {
    switch (feature.layoutStyle) {
      case 'centered':
        return (
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex justify-center mb-8"
            >
              <div className={`w-16 h-16 ${getIconBg(feature.color)} rounded-2xl flex items-center justify-center`}>
                <Icon className={`w-8 h-8 ${getIconColor(feature.color)}`} />
              </div>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight"
            >
              {feature.heroHeadline}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              {feature.heroSubheadline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative rounded-[40px] overflow-hidden shadow-2xl border border-white/20"
            >
              <img src={feature.image} alt={feature.title} className="w-full aspect-video object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent" />
            </motion.div>
          </div>
        );
      case 'reverse':
        return (
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative order-2 lg:order-1"
            >
              <div className={`absolute -inset-4 ${getIconBg(feature.color)} rounded-[40px] blur-2xl -z-10`} />
              <img src={feature.image} alt={feature.title} className="w-full rounded-[32px] shadow-2xl object-cover aspect-[4/3]" />
              <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl hidden md:block">
                <div className={`text-2xl font-bold ${getIconColor(feature.color)}`}>{feature.stats[0]?.value}</div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">{feature.stats[0]?.label}</div>
              </div>
            </motion.div>
            <div className="order-1 lg:order-2">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`text-xs font-bold ${getIconColor(feature.color)} tracking-[0.2em] uppercase mb-4 block`}
              >
                {feature.heroBadge}
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-display font-bold mb-8 leading-tight"
              >
                {feature.heroHeadline}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-slate-600 mb-10 leading-relaxed"
              >
                {feature.heroSubheadline}
              </motion.p>
              <div className="flex gap-4">
                {feature.stats.slice(1, 4).map((stat, i) => (
                  <div key={i} className="glass px-6 py-4 rounded-2xl">
                    <div className="text-xl font-bold">{stat.value}</div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'grid':
        return (
          <div className="space-y-16">
            <div className="max-w-3xl">
              <motion.span 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className={`text-sm font-bold ${getIconColor(feature.color)} uppercase tracking-widest mb-6 block`}
              >
                {feature.heroBadge}
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-display font-bold mb-8"
              >
                {feature.heroHeadline}
              </motion.h1>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="lg:col-span-2 relative rounded-[48px] overflow-hidden group"
              >
                <img src={feature.image} alt={feature.title} className="w-full h-full object-cover min-h-[400px] transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 text-white max-w-md">
                   <p className="text-xl font-medium leading-relaxed">{feature.heroSubheadline}</p>
                </div>
              </motion.div>
              <div className="grid grid-cols-1 gap-6">
                {feature.stats.map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + (i * 0.1) }}
                    className="glass p-8 rounded-[32px] flex flex-col justify-center"
                  >
                    <div className={`text-3xl font-display font-bold ${getIconColor(feature.color)} mb-2`}>{stat.value}</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'split':
      default:
        return (
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 ${getIconBg(feature.color)} rounded-xl flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${getIconColor(feature.color)}`} />
                </div>
                <span className={`text-sm font-bold tracking-widest ${getIconColor(feature.color)} uppercase`}>
                  {feature.heroBadge}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-8">
                {feature.heroHeadline}
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
                {feature.heroSubheadline}
              </p>
 
               <div className="grid grid-cols-2 gap-4">
                {feature.stats.slice(0, 2).map((stat, i) => (
                  <div key={i} className="glass p-6 rounded-2xl">
                    <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
 
             <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className={`absolute -inset-4 ${getIconBg(feature.color)} rounded-[48px] blur-3xl -z-10 opacity-30`} />
              <img src={feature.image} alt={feature.title} className="w-full rounded-[40px] shadow-2xl object-cover aspect-square sm:aspect-video lg:aspect-[4/5]" />
              {feature.stats[2] && (
                <div className="absolute -bottom-8 -left-8 glass p-8 rounded-3xl hidden md:block max-w-[240px]">
                  <div className={`text-4xl font-display font-bold ${getIconColor(feature.color)} mb-2`}>{feature.stats[2].value}</div>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">{feature.stats[2].label} baseline improvement across enterprise clients.</p>
                </div>
              )}
            </motion.div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-brand-violet/20 overflow-x-hidden">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <section className="container mx-auto px-6 mb-20">
          <Link 
            to="/#features" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-violet transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium uppercase tracking-widest">Back to Services</span>
          </Link>

          {renderHero()}
        </section>

        {/* Long Description */}
        <section className="container mx-auto px-6 mb-20">
          <div className="glass p-12 rounded-[48px] border-slate-200">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold mb-8">Service Overview</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {feature.longDescription}
              </p>
              <div className="grid md:grid-cols-2 gap-12 mt-12 pt-12 border-t border-slate-100">
                <div>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-violet" /> Key Benefits
                  </h3>
                  <ul className="space-y-4">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600">
                        <ChevronRight className="w-4 h-4 mt-1 text-brand-violet shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <BarChart className="w-5 h-5 text-brand-violet" /> Core Use Cases
                  </h3>
                  <ul className="space-y-4">
                    {feature.useCases.map((useCase, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600">
                        <ChevronRight className="w-4 h-4 mt-1 text-brand-violet shrink-0" />
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="container mx-auto px-6 mb-20">
          <div className="relative">
            <div className="absolute inset-0 bg-brand-violet/5 rounded-[48px] -rotate-1" />
            <div className="relative glass p-12 rounded-[48px] border-slate-200">
              <div className="mb-12">
                <span className="text-xs font-bold text-brand-violet uppercase tracking-widest px-3 py-1 bg-brand-violet/10 rounded-full">
                  Featured Case Study
                </span>
                <h2 className="text-3xl font-display font-bold mt-6">
                  Real Results at {feature.caseStudy.company}
                </h2>
              </div>

              <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">The Problem</h4>
                    <p className="text-slate-600 leading-relaxed">{feature.caseStudy.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">The Solution</h4>
                    <p className="text-slate-600 leading-relaxed">{feature.caseStudy.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-4">Results Architecture</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {feature.caseStudy.results.map((result, i) => (
                        <div key={i} className="bg-white p-4 rounded-xl border border-slate-100 flex items-center gap-3">
                          <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center shrink-0">
                            <span className="text-green-600 text-xs">✓</span>
                          </div>
                          <span className="text-sm font-medium text-slate-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-violet/20 blur-3xl" />
                  <Quote className="w-10 h-10 text-brand-violet mb-8 opacity-50" />
                  <p className="text-lg italic font-display leading-relaxed relative z-10 mb-8">
                    "{feature.caseStudy.quote}"
                  </p>
                  <div className="relative z-10">
                    <div className="text-brand-violet font-bold">{feature.caseStudy.author}</div>
                    <div className="text-xs text-slate-400 uppercase tracking-widest">Verified Client Reflection</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-6 mb-20 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold flex items-center justify-center gap-3">
              <HelpCircle className="w-8 h-8 text-brand-violet" /> Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {feature.faq.map((item, i) => (
              <details key={i} className="group glass rounded-2xl border-slate-200 open:border-brand-violet/30 transition-all duration-300">
                <summary className="p-6 cursor-pointer flex items-center justify-between list-none">
                  <span className="font-bold text-slate-900 group-open:text-brand-violet transition-colors">
                    {item.q}
                  </span>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6">
          <div className="bg-slate-900 rounded-[48px] p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-brand-violet/20 to-transparent opacity-50" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                Ready to Deploy?
              </h2>
              <p className="text-slate-400 mb-10 text-lg">
                Tell us about your project and we'll show you how Nexasphere {feature.title} can transform your operations in 48 hours.
              </p>
              <Link
                to="/#contact"
                className="gradient-btn px-10 py-5 rounded-full font-bold inline-flex items-center gap-3 hover:scale-105 transition-transform shadow-xl shadow-brand-violet/20"
              >
                Start Your {feature.title} Project <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
