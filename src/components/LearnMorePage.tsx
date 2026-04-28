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
import OptimizedVideo from "./OptimizedVideo";

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
              transition={{ duration: 1, delay: 0.2 }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/20 to-brand-cyan/20 blur-[60px] lg:blur-[100px] rounded-full" />
              <div className="relative z-10 glass rounded-[2rem] lg:rounded-[2.5rem] p-2 lg:p-3 overflow-hidden shadow-2xl mx-auto max-w-2xl lg:max-w-none">
                <div className="relative overflow-hidden rounded-[1.5rem] lg:rounded-[2rem] bg-slate-900 aspect-video lg:aspect-auto min-h-[200px]">
                  <OptimizedVideo 
                    src="https://files.catbox.moe/ejaup8.mp4" 
                    poster="https://files.catbox.moe/iqgdtg.png"
                    controls
                    autoPlay={true}
                    loop={false}
                    className="w-full h-full lg:h-auto block relative z-0 object-cover lg:object-contain"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 mix-blend-overlay z-10 pointer-events-none" />
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
                <h2 className="text-4xl font-bold mb-8">Empowering Growth through <span className="gradient-text">Practical AI</span></h2>
                <div className="space-y-6 text-slate-600 leading-relaxed">
                  <p>
                    Nexasphere AI Labs Private Limited is an innovative technology company focused on delivering next-generation Artificial Intelligence solutions that help organizations accelerate growth, improve efficiency, and stay competitive. We specialize in designing and deploying intelligent systems that transform traditional business operations into smart, data-driven ecosystems.
                  </p>
                  <p>
                    Our core expertise lies in building AI-enabled websites and digital platforms integrated with advanced conversational chatbots powered by Retrieval-Augmented Generation (RAG) technology. We also develop autonomous AI Agents for business automation, helping organizations streamline repetitive tasks and optimize workflows.
                  </p>
                  <p>
                    In the field of Machine Learning and Deep Learning, we provide powerful predictive analytics for forecasting, demand planning, and customer behavior analysis. Beyond solutions, we are committed to building future-ready talent through expert-led training programs in GenAI, Data Science, and Python for corporate and academic institutions.
                  </p>
                  <p className="font-medium text-slate-900">
                    At Nexasphere AI Labs, we believe AI should be practical, scalable, and result-oriented. Our mission is to empower businesses with intelligent technologies that create measurable impact and long-term value.
                  </p>
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
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
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

          {/* Founding Leadership */}
          <div className="mb-32">
             <div className="text-center mb-16">
                <div className="sec-tag gold">Our Leadership</div>
                <h2 className="text-4xl font-bold">Guided by <span className="gradient-text">Expertise</span></h2>
             </div>
             <div className="glass p-8 md:p-12 rounded-[3rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-violet/5 blur-3xl -z-10" />
                <div className="grid md:grid-cols-3 gap-12 items-center">
                   <div className="md:col-span-1">
                      <div className="aspect-square bg-slate-100 rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-inner">
                         <img 
                          src="https://media.licdn.com/dms/image/v2/D4D03AQHM4O1G78X9iQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1685540852936?e=1778716800&v=beta&t=D2Cv9mBCGBS2RtmsxemXj3XBzf-21YE24vhhWS8jycY" 
                          alt="Bhavesh Mathur" 
                          className="w-full h-full object-cover transition-all duration-500"
                         />
                      </div>
                   </div>
                   <div className="md:col-span-2">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-3xl font-bold text-slate-900">Bhavesh Mathur</h3>
                        <a 
                          href="https://www.linkedin.com/in/bhavesh-mathur-879360168/" 
                          target="_blank" 
                          rel="noreferrer"
                          className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                        >
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </a>
                      </div>
                      <div className="text-brand-violet font-bold text-sm uppercase tracking-widest mb-6">Founder & Lead Architect</div>
                      <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                        Bhavesh is an AI Consultant & Trainer with a deep commitment to bridge the gap between theoretical AI research and production-grade implementation. Under his leadership, Nexasphere specializes in high-impact AI transformation and workforce upskilling.
                      </p>
                      <div className="flex flex-wrap gap-3">
                         {[
                           "Microsoft Certified: Azure AI Engineer Associate (AI 102)",
                           "Generative AI",
                           "Agentic AI",
                           "Machine Learning",
                           "Deep Learning"
                         ].map(skill => (
                           <span key={skill} className="px-4 py-2 bg-white border border-slate-100 rounded-full text-xs font-medium text-slate-600 shadow-sm">
                             {skill}
                           </span>
                         ))}
                      </div>
                   </div>
                </div>
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
                        <div className="text-5xl font-display font-bold text-slate-400 shrink-0 leading-none">{step.num}</div>
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
              Join over 100 leaders leverage Nexasphere AI Labs for smarter operations. Book a free opportunity assessment today.
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
