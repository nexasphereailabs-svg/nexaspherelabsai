/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ArrowLeft, 
  Cpu, 
  Globe, 
  Shield, 
  Zap, 
  BarChart, 
  Users, 
  CheckCircle2, 
  Search, 
  MessageSquare, 
  Code2, 
  LineChart, 
  Eye, 
  FileText, 
  GraduationCap,
  Clock,
  Rocket,
  ChevronDown
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Button from "./ui/Button";

export default function LearnMorePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    { label: "Core AI Services", value: "9" },
    { label: "Delivery Pillars", value: "2" },
    { label: "Training Domains", value: "6+" },
    { label: "Hands-On Delivery", value: "100%" }
  ];

  const pillars = [
    {
      title: "AI Technology Solutions",
      icon: Cpu,
      color: "blue",
      desc: "We build custom, production-ready AI systems that automate operations, enhance customer engagement, and improve decision-making.",
      items: [
        "Custom AI Agents",
        "Intelligent Chatbots (WhatsApp, Slack, CRM)",
        "RAG Systems for Knowledge Access",
        "Predictive AI Forecasting",
        "Machine Learning Models",
        "Computer Vision Intelligence"
      ]
    },
    {
      title: "AI Training & Talent",
      icon: GraduationCap,
      color: "violet",
      desc: "We equip corporate teams and academic institutions with practical AI skills that the market demands right now.",
      items: [
        "GenAI & Prompt Engineering",
        "LLMs & RAG Architectures",
        "Data Science & Python",
        "Corporate Upskilling Cohorts",
        "University Curriculum Partnerships",
        "Executive AI Literacy"
      ]
    }
  ];

  const services = [
    { name: "AI Agents", icon: Rocket, desc: "Autonomous agents that reason and execute multi-step tasks 24/7." },
    { name: "Chatbots", icon: MessageSquare, desc: "LLM-powered bots with CRM integration." },
    { name: "RAG Systems", icon: Search, desc: "Retrieval-Augmented Generation grounded in your live data." },
    { name: "Data Analytics", icon: BarChart, desc: "Real-time dashboards and predictive BI ecosystems." },
    { name: "AI Forecasting", icon: LineChart, desc: "Demand and supply chain forecasting with explainability." },
    { name: "Machine Learning", icon: Code2, desc: "End-to-end ML engineering from problem framing to production." },
    { name: "Computer Vision", icon: Eye, desc: "Object detection and visual intelligence from cloud to edge." },
    { name: "Text Analytics", icon: FileText, desc: "Sentiment and intent extraction from millions of records." },
    { name: "Technical Training", icon: GraduationCap, desc: "Certified, hands-on training for institutions and teams." }
  ];

  const process = [
    { num: "01", title: "Discovery", desc: "Understanding the business problem through data audits and feasibility analysis.", time: "Weeks 1-2" },
    { num: "02", title: "Architecture", desc: "Building the secure infrastructure and high-quality data pipelines.", time: "Weeks 2-4" },
    { num: "03", title: "Validation", desc: "Training models and validating against specific business outcomes.", time: "Weeks 3-6" },
    { num: "04", title: "Deployment", desc: "Full integration with existing CRM/ERP systems and CI/CD setup.", time: "Weeks 5-8" },
    { num: "05", title: "Optimization", desc: "Ongoing monitoring, drift detection, and monthly performance reviews.", time: "Continuous" }
  ];

  const faqs = [
    { q: "What exactly does Nexasphere AI Labs do?", a: "We are a dual-mission AI company. We design and deploy production-grade AI solutions (Agents, RAG, Analytics) and provide technical training for organizations and universities." },
    { q: "Our data is messy. Can you still help?", a: "Yes. Data cleaning and standardization are part of our delivery methodology. We audit your sources and build the quality controls needed before any model training begins." },
    { q: "How long until we go live?", a: "Focused deployments typically go from first call to production in 6-8 weeks. Most clients see working prototypes by Week 3." },
    { q: "Is our data safe?", a: "Security is a foundational standard. We implement end-to-end encryption, role-based access, and audit logging. Your data is never used to train third-party systems." }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Back Navigation */}
          <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-violet transition-colors mb-12 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold text-xs uppercase tracking-widest leading-none">Back to Overview</span>
          </Link>

          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/10 text-brand-violet font-bold text-[10px] tracking-widest uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-violet animate-pulse" />
                Nexasphere AI Labs
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-slate-900 mb-8 leading-[1.05]">
                Your Trusted <span className="gradient-text">AI Transformation</span> Partner
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
                We help organizations unlock the power of intelligent automation — building solutions that solve real challenges and upskilling the talent that runs them.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/#contact-form">
                  <Button className="gradient-btn px-8 rounded-full shadow-lg shadow-brand-violet/20 hover:shadow-brand-violet/40 transition-all">Consult Our Team</Button>
                </Link>
                <Link to="/#features">
                  <Button variant="outline" className="px-8 rounded-full border-slate-200">Explore Services</Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-linear-to-br from-brand-violet/20 to-brand-cyan/20 blur-[100px] rounded-full" />
              <div className="glass p-12 rounded-[3rem] relative z-10 aspect-square flex items-center justify-center">
                 <Cpu className="w-48 h-48 text-brand-violet opacity-20 absolute" />
                 <Globe className="w-32 h-32 text-brand-cyan relative z-10" />
                 <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-white rounded-2xl shadow-xl flex items-center justify-center animate-bounce">
                    <Shield className="w-6 h-6 text-brand-blue" />
                 </div>
                 <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-white rounded-2xl shadow-xl flex items-center justify-center animate-pulse">
                    <Zap className="w-6 h-6 text-brand-cyan" />
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 border-y border-slate-200 py-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-display font-bold text-slate-900 mb-1 leading-none">{stat.value}</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* The Story Section */}
          <div className="grid lg:grid-cols-2 gap-24 mb-32 items-center">
             <div className="order-2 lg:order-1">
                <div className="sec-tag blue">Who We Are</div>
                <h2 className="text-4xl font-bold mb-8">AI Should Create <span className="gradient-text">Real Outcomes</span></h2>
                <div className="space-y-6 text-slate-600 leading-relaxed">
                  <p>Nexasphere AI Labs is dedicated to helping organizations unlock the power of Data Science and intelligent automation.</p>
                  <p>In addition to technology services, we are passionate about building future-ready talent — delivering high-impact training programs for corporates and universities.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                   {[
                     { t: "Production Over Pilots", d: "Measured by what runs in production, not what's demoed." },
                     { t: "Business Impact First", d: "Designed backwards from measurable outcomes." },
                     { t: "Scalable by Design", d: "Architectures that grow with your organization." },
                     { t: "People-First AI", d: "Automating for human productivity." }
                   ].map(item => (
                     <div key={item.t} className="flex gap-4">
                        <CheckCircle2 className="w-5 h-5 text-brand-violet shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-sm text-slate-900">{item.t}</h4>
                          <p className="text-xs text-slate-500">{item.d}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
             <div className="order-1 lg:order-2">
                <div className="aspect-video glass rounded-[2.5rem] overflow-hidden relative">
                   <img 
                    src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg" 
                    alt="AI Transformation" 
                    className="w-full h-full object-cover opacity-80"
                   />
                   <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent" />
                </div>
             </div>
          </div>

          {/* Pillars Section */}
          <div className="mb-32">
             <div className="text-center mb-16">
                <div className="sec-tag violet">Two Pillars</div>
                <h2 className="text-4xl font-bold">Integrated Excellence</h2>
             </div>
             <div className="grid md:grid-cols-2 gap-8">
                {pillars.map(pillar => (
                  <div key={pillar.title} className="glass p-10 rounded-[2.5rem] hover:border-brand-violet/30 transition-all group">
                     <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-brand-violet/10`}>
                        <pillar.icon className="w-7 h-7 text-brand-violet" />
                     </div>
                     <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                     <p className="text-slate-600 mb-8 leading-relaxed">{pillar.desc}</p>
                     <ul className="space-y-3">
                        {pillar.items.map(item => (
                          <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                             <div className="w-1.5 h-1.5 rounded-full bg-brand-violet" />
                             {item}
                          </li>
                        ))}
                     </ul>
                  </div>
                ))}
             </div>
          </div>

          {/* All Services Grid */}
          <div className="mb-32">
             <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">9 Core <span className="gradient-text">Services</span></h2>
                <p className="text-slate-500">Every service is engineered for real-world impact.</p>
             </div>
             <div className="grid md:grid-cols-3 gap-6">
                {services.map((svc, i) => (
                  <motion.div
                    key={svc.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="glass p-8 rounded-[32px] hover:translate-y-[-4px] hover:shadow-xl hover:border-brand-violet/30 transition-all cursor-pointer h-full"
                  >
                    <svc.icon className="w-10 h-10 text-brand-cyan mb-6" />
                    <h4 className="text-xl font-bold mb-3 text-slate-900">{svc.name}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{svc.desc}</p>
                  </motion.div>
                ))}
             </div>
          </div>

          {/* Delivery Process */}
          <div className="mb-32">
             <div className="glass p-12 md:p-20 rounded-[3rem]">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
                  <div>
                    <div className="sec-tag blue">Our Process</div>
                    <h2 className="text-4xl font-bold mt-4">Conversation to Production</h2>
                  </div>
                  <p className="text-slate-500 max-w-sm text-sm">A transparent delivery methodology that eliminates guesswork.</p>
                </div>
                <div className="space-y-12">
                   {process.map((step, idx) => (
                     <div key={idx} className="flex gap-8 md:gap-12 pb-12 border-b border-slate-100 last:border-0 relative">
                        <div className="text-5xl font-display font-bold text-slate-200 shrink-0 leading-none">{step.num}</div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                            <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold tracking-widest uppercase leading-none">
                              <Clock className="w-3 h-3" /> {step.time}
                            </div>
                          </div>
                          <p className="text-slate-600 leading-relaxed max-w-2xl">{step.desc}</p>
                          {idx === 0 && <span className="text-[10px] text-brand-violet font-bold uppercase tracking-wider block mt-4">Feasibility Report Included</span>}
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto mb-32">
             <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
             </div>
             <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="glass rounded-2xl overflow-hidden">
                    <button 
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-bold text-slate-900 underline-offset-4">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
             </div>
          </div>

          {/* Final CTA Strip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden shadow-2xl shadow-brand-violet/5"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-violet/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 relative z-10 leading-tight text-slate-900">Start Your AI Transformation</h2>
            <p className="text-slate-600 mb-12 max-w-xl mx-auto relative z-10 text-lg">
              Join over 100 leaders leverage NexasphereAI for smarter operations. Book a free opportunity assessment today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <Link to="/#contact-form">
                <Button size="lg" className="gradient-btn px-12 rounded-full font-bold shadow-xl shadow-brand-violet/20">Book Technical Call</Button>
              </Link>
              <a href="mailto:info@nexasphereailabs.com">
                <Button size="lg" variant="outline" className="px-12 rounded-full border-slate-200 text-slate-900 font-bold bg-white">Email Us</Button>
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
