import { 
  Bot, 
  MessagesSquare, 
  Search, 
  BarChart3, 
  TrendingUp, 
  Eye, 
  FileText,
  Brain,
  GraduationCap,
  LucideIcon
} from "lucide-react";

export interface FeatureDetail {
  slug: string;
  icon: LucideIcon;
  title: string;
  heroBadge: string;
  heroHeadline: string;
  heroSubheadline: string;
  description: string;
  longDescription: string;
  benefits: string[];
  useCases: string[];
  stats: { label: string; value: string }[];
  image: string;
  caseStudy: {
    company: string;
    problem: string;
    solution: string;
    results: string[];
    quote: string;
    author: string;
  };
  faq: { q: string; a: string }[];
  color: string;
  iconBg: string;
  layoutStyle: 'split' | 'centered' | 'reverse' | 'grid';
}

export const featuresData: Record<string, FeatureDetail> = {
  "ai-agents": {
    slug: "ai-agents",
    icon: Bot,
    iconBg: "bg-brand-violet/20",
    title: "AI Agents",
    heroBadge: "// 2025 · THE YEAR OF THE AI AGENT",
    heroHeadline: "AUTONOMOUS AI AGENTS THAT THINK, PLAN, AND DELIVER.",
    heroSubheadline: "While competitors are still running chatbots, your operations could be powered by goal-oriented AI agents that perceive situations, reason through complexity, and take independent action.",
    description: "Autonomous intelligent agents capable of executing complex workflows and decision-making.",
    longDescription: "Our AI agents are designed to function as digital workers, capable of handling end-to-end processes without constant human supervision. They can integrate with your existing software stack, learn from your specific data, and perform tasks ranging from complex scheduling to technical troubleshooting.",
    benefits: ["24/7 Operational Capability", "Lower Operating Costs", "High Error Accuracy", "Scalable Workforce"],
    useCases: ["Automated Customer Support", "Technical Troubleshooting", "Complex Scheduling", "Internal Process Automation"],
    stats: [
      { label: "Actions Monthly", value: "10M+" },
      { label: "Accuracy", value: "99.7%" },
      { label: "Response Time", value: "< 2s" },
      { label: "Efficiency Gain", value: "340%" }
    ],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000",
    caseStudy: {
      company: "GlobalOps Logistics",
      problem: "Processing 14,000+ supply chain deviation reports monthly, taking 4.5 hours per incident manually.",
      solution: "Multi-agent orchestration system for triage, research, resolution, and communication.",
      results: ["Resolution time: 4.5 hours → 38 minutes", "Escalation rate: 34% → 9%", "$18.4M Annual cost saving"],
      quote: "Nexasphere's agents didn't just speed things up — they fundamentally changed how we operate.",
      author: "VP Operations, GlobalOps Logistics"
    },
    faq: [
      { q: "What is the difference between an AI agent and a chatbot?", a: "A chatbot responds to a single input. An agent receives a goal, creates a plan, and executes actions across multiple tools independently." },
      { q: "How long does deployment take?", a: "A focused POC typically goes live in 30 days; full enterprise rollout in 60-90 days." }
    ],
    color: "brand-violet",
    layoutStyle: 'split'
  },
  "intelligent-chatbots": {
    slug: "intelligent-chatbots",
    icon: MessagesSquare,
    iconBg: "bg-brand-cyan/20",
    title: "Intelligent Chatbots",
    heroBadge: "Est. Conversations That Convert — 2025",
    heroHeadline: "Every unanswered question is a lost customer.",
    heroSubheadline: "Nexasphere's chatbots go beyond simple scripts. Using advanced Natural Language Understanding (NLU), they grasp context, sentiment, and intent.",
    description: "Next-gen conversational AI designed for enterprise support and user engagement.",
    longDescription: "Nexasphere's chatbots go beyond simple scripts. Using advanced Natural Language Understanding (NLU), they grasp context, sentiment, and intent, providing users with a truly human-like interaction experience that resolves issues faster.",
    benefits: ["Zero Wait Times", "Omnichannel Support", "Multilingual Processing", "CRM Integration"],
    useCases: ["E-commerce Sales Assistant", "HR Inquiry Portal", "Multi-language Support", "Banking & Finance Support"],
    stats: [
      { label: "AI Interactions", value: "95%" },
      { label: "ROI Potential", value: "200%+" },
      { label: "Cost Reduction", value: "30%" },
      { label: "Auto-Resolution", value: "80%" }
    ],
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    caseStudy: {
      company: "LuxeRetail Fashion Group",
      problem: "Overwhelmed support team handling routine Tier 1 tickets, leading to high wait times.",
      solution: "RAG-Augmented Hybrid Chatbot integrated with website and WhatsApp.",
      results: ["65% reduction in Tier 1 tickets", "CSAT improved from 3.6 to 4.7/5", "24/7 instant support"],
      quote: "Our Nexasphere chatbot didn't replace our team — it freed them.",
      author: "Head of CX, LuxeRetail"
    },
    faq: [
      { q: "Will customers know they're talking to an AI?", a: "We recommend transparent disclosure, which builds trust. 80% of customers report positive experiences with AI chatbots." },
      { q: "How do you handle questions the bot can't answer?", a: "The bot recognizes when it's out of scope and escalates gracefully to a human agent with full context." }
    ],
    color: "brand-cyan",
    layoutStyle: 'reverse'
  },
  "rag-systems": {
    slug: "rag-systems",
    icon: Search,
    iconBg: "bg-brand-blue/20",
    title: "RAG Systems",
    heroBadge: "01 // ENTERPRISE KNOWLEDGE INFRASTRUCTURE",
    heroHeadline: "GIVE YOUR AI A MEMORY IT CAN TRUST.",
    heroSubheadline: "Stop letting your AI invent answers. Start letting it retrieve the right one — every time — from your verified knowledge.",
    description: "Retrieval-Augmented Generation systems for fact-based, domain-specific AI responses.",
    longDescription: "Retrieval-Augmented Generation (RAG) ensures that your AI doesn't just guess—it knows. By grounding large language models in your enterprise's private data, we eliminate hallucinations and provide strictly factual answers based on your documents.",
    benefits: ["No Hallucinations", "Secure Data Handling", "Up-to-date Knowledge", "Verified Citations"],
    useCases: ["Legal Document Search", "Medical Knowledge Bases", "Corporate Wiki Interaction", "Educational Tutoring"],
    stats: [
      { label: "Accuracy", value: "94%" },
      { label: "Latency", value: "< 800ms" },
      { label: "Docs Supported", value: "10M+" },
      { label: "Hallucination Drop", value: "73%" }
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
    caseStudy: {
      company: "LexAI - Legal Tech",
      problem: "Attorneys spending 3.2 hours per contract review cycles locating relevant precedents.",
      solution: "RAG system indexing 4.2 million legal documents with natural language search.",
      results: ["Research time: 3.2 hours → 22 minutes", "3x attorney throughput", "Hallucination rate < 0.3%"],
      quote: "The system doesn't replace our lawyers — it gives them every piece of relevant information instantly.",
      author: "CTO, LexAI"
    },
    faq: [
      { q: "RAG vs fine-tuning: which is better?", a: "RAG is faster and cheaper for enterprise data that changes frequently. It provides citable, accurate answers without constant retraining." },
      { q: "Is our data secure?", a: "Yes. Your documents are embedded and indexed in isolated infrastructure. No cross-tenant data access." }
    ],
    color: "brand-blue",
    layoutStyle: 'centered'
  },
  "data-analysis": {
    slug: "data-analysis",
    icon: BarChart3,
    iconBg: "bg-brand-violet/20",
    title: "Data Analysis",
    heroBadge: "DATA INTELLIGENCE · REAL-TIME · ENTERPRISE SCALE",
    heroHeadline: "Turn Raw Data Into Revenue-Driving Decisions.",
    heroSubheadline: "We build the AI-powered analytics layer that turns your data chaos into your most competitive advantage.",
    description: "In-depth processing of complex datasets to uncover hidden patterns and actionable insights.",
    longDescription: "Our data analysis engine sifts through terabytes of structured and unstructured data to find the signal in the noise. We transform raw numbers into strategic advantages through deep statistical modeling.",
    benefits: ["Pattern Recognition", "Competitive Intelligence", "Real-time Dashboards", "Automated Reporting"],
    useCases: ["Market Trend Analysis", "User Behavior Tracking", "Financial Portfolio Review", "Supply Chain Analytics"],
    stats: [
      { label: "AI Investment 2025", value: "$252B" },
      { label: "Productivity Gain", value: "26-55%" },
      { label: "ROI per $1", value: "$3.70" },
      { label: "Avg handling time", value: "-40%" }
    ],
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=1000",
    caseStudy: {
      company: "RetailMetrics Co",
      problem: "Merchandising team using 6-week-old Excel reports to make buying decisions.",
      solution: "Real-time AI platform integrating POS, inventory, and supplier systems.",
      results: ["Inventory waste reduced by 40%", "Stockouts reduced by 62%", "$14.2M Annual P&L impact"],
      quote: "We finally know what's happening in our business while we can still do something about it.",
      author: "CMO, RetailMetrics Co"
    },
    faq: [
      { q: "Can we use our existing BI tools?", a: "Yes. We often build the data layer that pushes intelligence into Tableau, Power BI, or Looker." },
      { q: "What if our data is messy?", a: "Messy data is the norm. Data cleaning and automated ETL are built into every Nexasphere engagement." }
    ],
    color: "brand-violet",
    layoutStyle: 'grid'
  },
  "forecasting": {
    slug: "forecasting",
    icon: TrendingUp,
    iconBg: "bg-brand-cyan/20",
    title: "Forecasting",
    heroBadge: "PREDICTIVE INTELLIGENCE · DEMAND · FINANCIAL",
    heroHeadline: "PREDICT TOMORROW'S OUTCOMES WITH TODAY'S DATA.",
    heroSubheadline: "Nexasphere forecasting models eliminate uncertainty with AI predictions your operations teams can actually act on.",
    description: "Predictive modeling and trend forecasting using state-of-the-art machine learning algorithms.",
    longDescription: "Look into the future of your industry. Our forecasting models use time-series analysis and external market indicators to predict demand, inventory needs, and market shifts with unprecedented accuracy.",
    benefits: ["Demand Prediction", "Risk Mitigation", "Inventory Optimization", "Market Shift Alerts"],
    useCases: ["Sales Projection", "Stock Market Prediction", "Weather-impact Analysis", "Resource Capacity Planning"],
    stats: [
      { label: "Accuracy", value: "87%" },
      { label: "Losses Prevented", value: "$180M+" },
      { label: "Deployments", value: "50+" },
      { label: "Inventory Opt.", value: "30%+" }
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    caseStudy: {
      company: "ChainFlow Logistics",
      problem: "Chronic inventory imbalances costing $12M annually in excess carrying costs.",
      solution: "Multi-variate demand forecasting model integrated into WMS.",
      results: ["Inventory carrying costs: -52%", "$10.1M total annual saving", "14x implementation ROI"],
      quote: "The model sense demand before our systems did — we order before stockouts happen.",
      author: "VP Supply Chain, ChainFlow"
    },
    faq: [
      { q: "How accurate will our forecasts be?", a: "Client average is 87% accuracy. We provide a baseline accuracy estimate using your data before rollout." },
      { q: "Can forecasts update automatically?", a: "Yes. Our systems update hourly, daily, or weekly as new live data flows in." }
    ],
    color: "brand-cyan",
    layoutStyle: 'split'
  },
  "computer-vision": {
    slug: "computer-vision",
    icon: Eye,
    iconBg: "bg-brand-blue/20",
    title: "Computer Vision",
    heroBadge: "VISUAL INTELLIGENCE · REAL-TIME · EDGE TO CLOUD",
    heroHeadline: "SEE WHAT HUMANS MISS.",
    heroSubheadline: "Automated visual intelligence for image recognition, object detection, and spatial analysis at superhuman speeds.",
    description: "Automated visual intelligence for image recognition, object detection, and spatial analysis.",
    longDescription: "Teach your software to see. From quality control on manufacturing lines to security monitoring and medical imaging analysis, our computer vision solutions process visual data at superhuman speeds.",
    benefits: ["Object Counting", "Defect Detection", "Facial Recognition", "Thermal Analysis"],
    useCases: ["Retail Layout Optimization", "Health Diagnosis Aid", "Security Surveillance", "Industrial Quality Control"],
    stats: [
      { label: "Detection Rate", value: "99.2%" },
      { label: "Latency", value: "< 35ms" },
      { label: "Images Processed", value: "1B+" },
      { label: "Recalls Prevented", value: "$12M" }
    ],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000",
    caseStudy: {
      company: "PharmaVision",
      problem: "Manual tablet inspection catching only 94.7% of defects, risking expensive recalls.",
      solution: "Custom EfficientDet CV models running at 1,200 tablets/minute.",
      results: ["99.2% Defect detection rate", "Throughput increased by 50%", "$12M estimated prevented recalls"],
      quote: "FDA audits are now flawless. The AI doesn't get tired like human inspectors.",
      author: "Quality Director, PharmaVision"
    },
    faq: [
      { q: "Do we need to provide training images?", a: "Yes, though we can also source synthetic data or use transfer learning to get high accuracy with fewer samples." },
      { q: "Can it work in variable lighting?", a: "Yes. Our models are trained for real-world environmental resilience, not just lab conditions." }
    ],
    color: "brand-blue",
    layoutStyle: 'reverse'
  },
  "text-analysis": {
    slug: "text-analysis",
    icon: FileText,
    iconBg: "bg-brand-violet/20",
    title: "Text Analysis",
    heroBadge: "OXFORD EDITORIAL INTELLIGENCE",
    heroHeadline: "Extract Intelligence from Every Word Your Business Produces.",
    heroSubheadline: "Emails, tickets, reviews, contracts, meeting notes — we find the signals hidden in your unstructured text.",
    description: "Advanced natural language processing for sentiment analysis, extraction, and semantic understanding.",
    longDescription: "Understand the 'why' behind the words. We process emails, reviews, legal documents, and news feeds to extract sentiment, key entities, and summaries, giving you a bird's-eye view of your textual data.",
    benefits: ["Sentiment Scoring", "Entity Extraction", "Auto-Summarization", "Topic Modeling"],
    useCases: ["Customer Feedback Analysis", "Email Classification", "Contract Review Automation", "Social Media Monitoring"],
    stats: [
      { label: "Accuracy", value: "96%" },
      { label: "Languages", value: "50+" },
      { label: "Throughput", value: "10M/hr" },
      { label: "Latency", value: "< 200ms" }
    ],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000",
    caseStudy: {
      company: "InsureQuick UK",
      problem: "Manually sampling only 1% of 2M customer emails, missing 99% of insight.",
      solution: "Real-time text analytics pipeline classifying intent and sentiment across all emails.",
      results: ["8 unseen issue clusters identified in week 1", "Churn reduced by 28%", "£4.2M saved in annual revenue"],
      quote: "InsureQuick found 2 million things their customers were telling them that they'd never heard.",
      author: "Chief Customer Officer, InsureQuick"
    },
    faq: [
      { q: "How is this different from a chatbot?", a: "Chatbots handle one conversation. Text analytics aggregates patterns across millions of documents." },
      { q: "What about GDPR and PII?", a: "Our pipeline includes automated PII redaction and masking before analysis occurs." }
    ],
    color: "brand-violet",
    layoutStyle: 'centered'
  },
  "machine-learning": {
    slug: "machine-learning",
    icon: Brain,
    iconBg: "bg-brand-cyan/20",
    title: "Machine Learning",
    heroBadge: "MACHINE LEARNING AT SCALE",
    heroHeadline: "EVERY PATTERN IN YOUR DATA HAS VALUE.",
    heroSubheadline: "Custom ML model development and deployment tailored to specific organizational needs.",
    description: "Custom ML model development and deployment tailored to specific organizational needs.",
    longDescription: "Build a brain for your business. We develop custom machine learning models that learn from your unique operational data, creating proprietary algorithms that give you a lasting edge over competitors.",
    benefits: ["Custom Algorithms", "Model Lifecycle MGMT", "Edge Deployment", "Continuous Learning"],
    useCases: ["Fraud Detection", "Recommendation Engines", "Predictive Maintenance", "Lead Scoring Models"],
    stats: [
      { label: "Market Size 2025", value: "$37B" },
      { label: "Productivity Boost", value: "40%" },
      { label: "Deployment Time", value: "6-8 wks" },
      { label: "ROI", value: "High" }
    ],
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1000",
    caseStudy: {
      company: "ManufactureIQ",
      problem: "Unplanned equipment downtime costing $11.2M annually in lost production.",
      solution: "Predictive maintenance ML models with 72-hour failure warnings.",
      results: ["Downtime events: 23 → 8", "Maintenance costs reduced 60%", "640% ROI on ML deployment"],
      quote: "The model warned us 3 days before a critical failure occurred — maintenance was scheduled during a shift change.",
      author: "Ops Manager, ManufactureIQ"
    },
    faq: [
      { q: "We don't have a data team. Can we still use ML?", a: "Yes. Our end-to-end service covers everything from data engineering to production monitoring." },
      { q: "How do you prevent model bias?", a: "We run fairness audits and demographic subgroup analysis as part of our core training pipeline." }
    ],
    color: "brand-cyan",
    layoutStyle: 'grid'
  },
  "technical-training": {
    slug: "technical-training",
    icon: GraduationCap,
    iconBg: "bg-brand-blue/20",
    title: "Technical Training",
    heroBadge: "CERTIFIED AI TRAINING PROGRAMS",
    heroHeadline: "Upskill Your Team. Deploy AI Faster. Lead Your Industry.",
    heroSubheadline: "The #1 barrier to enterprise AI adoption is the skills gap — not the technology. Nexasphere training programs close that gap.",
    description: "High-impact training programs for corporates and universities in AI, ML, and Data Science.",
    longDescription: "The AI revolution requires an AI-ready workforce. Our technical experts provide hands-on training that ranges from foundational Python/DS concepts to advanced LLM orchestration and cloud-AI deployment.",
    benefits: ["Custom Curriculum", "Hands-on Labs", "Expert Instructors", "Certification Prep"],
    useCases: ["Corporate Upskilling", "University Labs", "Executive AI Briefings", "Developer Workshops"],
    stats: [
      { label: "Teams Trained", value: "500+" },
      { label: "Avg Rating", value: "4.9/5" },
      { label: "Productivity Lift", value: "40%" },
      { label: "Adoption Rate", value: "85%" }
    ],
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000",
    caseStudy: {
      company: "TechScale UK",
      problem: "Developers understood AI theory but couldn't ship production-grade AI systems.",
      solution: "8-week ML Engineering Practitioner programme with hands-on labs.",
      results: ["4 AI initiatives launched in Q1", "Developer productivity increased 45%", "Internally promoted 3 grads"],
      quote: "They didn't just teach us models — they taught us how to deploy systems that don't break.",
      author: "VP Engineering, TechScale"
    },
    faq: [
      { q: "Are certifications recognized?", a: "Yes, our certificates are recognized by our enterprise network and verify practical, demonstrated skills." },
      { q: "Can training be customized?", a: "Yes, for corporate programs we use your stack (AWS/Azure/GCP) and ideally your data for labs." }
    ],
    color: "brand-blue",
    layoutStyle: 'split'
  },
};
