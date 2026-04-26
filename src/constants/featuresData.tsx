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
  image: string;
  strategicApproach: {
    title: string;
    problemContext: string;
    methodology: string;
    principles: string[];
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
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000",
    strategicApproach: {
      title: "Goal-Oriented Orchestration",
      problemContext: "Many organizations struggle with complex workflows that require multiple handoffs and constant human intervention, leading to bottlenecks and operational fatigue.",
      methodology: "We deploy autonomous agents that don't just follow scripts but understand high-level objectives. Our approach involves setting guardrails and defining success metrics within a secure environment.",
      principles: [
        "Recursive Problem Solving",
        "Tool-Integrated Execution",
        "Autonomous Decision Logic",
        "Human-in-the-loop Safeguards"
      ]
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
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    strategicApproach: {
      title: "Context-Aware Engagement",
      problemContext: "Static chatbots often fail to meet user expectations, leading to frustration when the bot cannot handle nuances or personality.",
      methodology: "Our framework prioritizes conversational flow and personality design, ensuring the AI represents your brand voice while maintaining accuracy through grounding.",
      principles: [
        "Intent Recognition Accuracy",
        "Seamless Human Handoff",
        "Multilingual Adaptability",
        "Personality Consistency"
      ]
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
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
    strategicApproach: {
      title: "Grounded Knowledge Architecture",
      problemContext: "AI models often hallucinate or provide outdated information when queried about domain-specific or internal private datasets.",
      methodology: "We build advanced indexing pipelines that convert your documents into searchable mathematical vectors, allowing the AI to source information from your truth.",
      principles: [
        "Source-Grounded Accuracy",
        "Vector-Based Semantic Search",
        "Real-Time Document Ingestion",
        "Traceable Citations"
      ]
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
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=1000",
    strategicApproach: {
      title: "Insight-Driven Intelligence",
      problemContext: "Organizations are often data-rich but insight-poor, struggling to transform massive datasets into strategic direction.",
      methodology: "Our approach integrates diverse data streams into a unified analytic layer, applying predictive modeling to surface opportunities before they become obvious.",
      principles: [
        "Multi-Stream Data Synthesis",
        "Predictive Modeling Accuracy",
        "Automated Trend Discovery",
        "Stakeholder-Focused Delivery"
      ]
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
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    strategicApproach: {
      title: "Predictive Resilience",
      problemContext: "Supply chain and financial volatility can lead to reactive decision-making that erodes margins and creates instability.",
      methodology: "We combine internal time-series data with external market signals to build robust ensemble models that anticipate shifts rather than reacting to them.",
      principles: [
        "Multi-Factor Sensitivity",
        "Ensemble Model Stability",
        "External Signal Integration",
        "Confidence Interval Clarity"
      ]
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
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000",
    strategicApproach: {
      title: "Automated Visual Oversight",
      problemContext: "Manual inspection processes are often slow, subjective, and prone to fatigue, leading to quality inconsistencies.",
      methodology: "We develop custom edge-computing models that process visual feeds in real-time, identifying anomalies and objects with pixel-perfect precision.",
      principles: [
        "Real-Time Edge Processing",
        "Environmental Resilience",
        "High-Precision Detection",
        "Scalable Visual Monitoring"
      ]
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
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000",
    strategicApproach: {
      title: "Semantic Signal Extraction",
      problemContext: "Vast amounts of unstructured text in emails and documents remain unanalyzed, hiding patterns in customer sentiment and operational risks.",
      methodology: "Our NLP pipelines ingest massive volumes of text to categorize, summarize, and extract actionable insights, turning words into structured intelligence.",
      principles: [
        "Entity Relationship Mapping",
        "Sentiment Depth Analysis",
        "Automated Data Masking",
        "Cross-Lingual Processing"
      ]
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
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1000",
    strategicApproach: {
      title: "Proprietary Algorithm Design",
      problemContext: "Generic SaaS solutions often fail to capture the specific nuances of your proprietary operational data.",
      methodology: "We design custom neural architectures and ensemble methods that are trained exclusively on your data, ensuring a unique competitive advantage.",
      principles: [
        "Model Lifecycle Governance",
        "Fairness & Bias Auditing",
        "Scalable Inference Pipelines",
        "Adaptive Learning Layers"
      ]
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
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000",
    strategicApproach: {
      title: "Skills Gap Elimination",
      problemContext: "Theoretical knowledge often fails to translate into production-grade systems in the hands of traditional engineering teams.",
      methodology: "Our pedagogy focuses on 'Learning by Deployment' — move beyond notebooks to building production-ready architectures and secure pipelines.",
      principles: [
        "Hands-On Lab Pedagogy",
        "Industrial Stack Tooling",
        "Project-Based Assesstment",
        "C-Suite Literacy Mapping"
      ]
    },
    faq: [
      { q: "Are certifications recognized?", a: "Yes, our certificates are recognized by our enterprise network and verify practical, demonstrated skills." },
      { q: "Can training be customized?", a: "Yes, for corporate programs we use your stack (AWS/Azure/GCP) and ideally your data for labs." }
    ],
    color: "brand-blue",
    layoutStyle: 'split'
  },
};
