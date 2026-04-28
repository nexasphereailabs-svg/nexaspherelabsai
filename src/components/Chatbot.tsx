import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, ChevronRight, RefreshCw, Bot } from 'lucide-react';

interface ChatMessage {
  id: string;
  type: 'bot' | 'user';
  text: string;
  options?: { text: string; action: string }[];
}

const CHAT_RULES: Record<string, { text: string; options?: { text: string; action: string }[] }> = {
  start: {
    text: "Hello! Welcome to Nexasphere AI Labs. I'm your assistant. What would you like to explore?",
    options: [
      { text: "AI Services & Solutions", action: "services_hub" },
      { text: "Technical Training", action: "technical-training" },
      { text: "About Founder", action: "founder" },
      { text: "Follow Us", action: "socials" },
      { text: "Contact Us", action: "contact" }
    ]
  },
  socials: {
    text: "Connect with us on our official social media channels for the latest AI insights and updates:",
    options: [
      { text: "X (Twitter)", action: "go_x" },
      { text: "Instagram", action: "go_insta" },
      { text: "LinkedIn", action: "go_linkedin_page" },
      { text: "Back to Main", action: "start" }
    ]
  },
  services_hub: {
    text: "We offer 9 core AI specializations. Choose a category to learn more:",
    options: [
      { text: "Agents & Chatbots", action: "cat_agents" },
      { text: "Analytics & NLP", action: "cat_analytics" },
      { text: "Vision & ML", action: "cat_vision" },
      { text: "Technical Training", action: "technical-training" },
      { text: "Back to Main", action: "start" }
    ]
  },
  cat_agents: {
    text: "Intelligent interaction and automation:",
    options: [
      { text: "Autonomous AI Agents", action: "ai-agents" },
      { text: "Intelligent Chatbots", action: "intelligent-chatbots" },
      { text: "RAG Systems", action: "rag-systems" },
      { text: "View All", action: "services_hub" }
    ]
  },
  cat_analytics: {
    text: "Data intelligence and language processing:",
    options: [
      { text: "Data Analysis", action: "data-analysis" },
      { text: "Forecasting & Prediction", action: "forecasting" },
      { text: "Text & NLP Analytics", action: "text-analysis" },
      { text: "View All", action: "services_hub" }
    ]
  },
  cat_vision: {
    text: "Advanced visual and custom algorithms:",
    options: [
      { text: "Computer Vision", action: "computer-vision" },
      { text: "Custom Machine Learning", action: "machine-learning" },
      { text: "View All", action: "services_hub" }
    ]
  },
  "ai-agents": {
    text: "AI Agents function as digital workers, automating end-to-end complex workflows with autonomous decision-making and tool integration.",
    options: [{ text: "Interested? Book a Call", action: "contact" }, { text: "Other Services", action: "services_hub" }]
  },
  "intelligent-chatbots": {
    text: "Our chatbots use high-level NLU to resolve Tier 1 queries instantly with brand-consistent personality and 95%+ accuracy.",
    options: [{ text: "Interested? Book a Call", action: "contact" }, { text: "Other Services", action: "services_hub" }]
  },
  "rag-systems": {
    text: "RAG (Retrieval-Augmented Generation) connects LLMs to your private documentation, providing accurate, citable, and secure responses.",
    options: [{ text: "Interested? Book a Call", action: "contact" }, { text: "Other Services", action: "services_hub" }]
  },
  "data-analysis": {
    text: "We sift through terabytes of data to find actionable insights using deep statistical modeling and automated reporting layers.",
    options: [{ text: "Interested? Book a Call", action: "contact" }, { text: "Other Services", action: "services_hub" }]
  },
  "forecasting": {
    text: "Predict demand and inventory shifts with proprietary time-series models that help you act before market movements occur.",
    options: [{ text: "Interested? Book a Call", action: "contact" }, { text: "Other Services", action: "services_hub" }]
  },
  "computer-vision": {
    text: "Superhuman visual oversight for manufacturing defect detection, retail tracking, and medical image analysis at edge-speed.",
    options: [{ text: "Interested? Book a Call", action: "contact" }, { text: "Other Services", action: "services_hub" }]
  },
  "text-analysis": {
    text: "Extract hidden signals, sentiment, and key entities from massive volumes of unstructured text like emails and legal contracts.",
    options: [{ text: "Interested? Book a Call", action: "contact" }, { text: "Other Services", action: "services_hub" }]
  },
  "machine-learning": {
    text: "Custom-built neural architectures trained exclusively on your data for proprietary fraud detection or recommendation engines.",
    options: [{ text: "Interested? Book a Call", action: "contact" }, { text: "Other Services", action: "services_hub" }]
  },
  "technical-training": {
    text: "High-impact pedagogy for corporates and universities, covering Python, GenAI, and production ML deployment through hands-on labs.",
    options: [
      { text: "Book Training Session", action: "contact" },
      { text: "Other Services", action: "services_hub" },
      { text: "Back to Main", action: "start" }
    ]
  },
  founder: {
    text: "Bhavesh Mathur is an AI Consultant & Trainer and a Microsoft Certified Azure AI Engineer. He specializes in high-impact AI transformation.",
    options: [
      { text: "Founder's LinkedIn", action: "go_linkedin" },
      { text: "Back to Main", action: "start" }
    ]
  },
  contact: {
    text: "Book a free assessment or email info@nexasphereailabs.com. Would you like to view our contact form?",
    options: [
      { text: "Yes, go to Contact", action: "go_contact" },
      { text: "Back to Main", action: "start" }
    ]
  }
};

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      handleBotResponse("start");
    }
    scrollToBottom();
  }, [isOpen, messages]);

  const handleBotResponse = (action: string) => {
    setIsTyping(true);
    
    // Simulate thinking
    setTimeout(() => {
      const rule = CHAT_RULES[action] || CHAT_RULES.start;
      const botMsg: ChatMessage = {
        id: Date.now().toString(),
        type: 'bot',
        text: rule.text,
        options: rule.options
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleOptionClick = (option: { text: string; action: string }) => {
    if (option.action === 'go_x') {
      window.open('https://x.com/nexasphereai', '_blank');
      return;
    }

    if (option.action === 'go_insta') {
      window.open('https://www.instagram.com/nexasphereailabs/', '_blank');
      return;
    }

    if (option.action === 'go_linkedin_page') {
      window.open('https://www.linkedin.com/in/nexasphere-ai-labs-59b719406/', '_blank');
      return;
    }

    if (option.action === 'go_contact') {
      window.location.href = '/#contact-form';
      setIsOpen(false);
      return;
    }

    if (option.action === 'go_linkedin') {
      window.open('https://www.linkedin.com/in/bhavesh-mathur-879360168/', '_blank');
      return;
    }

    const userMsg: ChatMessage = {
      id: Date.now().toString() + "-user",
      type: 'user',
      text: option.text
    };
    setMessages(prev => [...prev, userMsg]);
    handleBotResponse(option.action);
  };

  const resetChat = () => {
    setMessages([]);
    handleBotResponse("start");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 w-[90vw] sm:w-[380px] h-[500px] bg-white rounded-[2rem] shadow-2xl border border-slate-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-slate-900 p-6 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-violet rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold">Nexasphere Assistant</div>
                  <div className="text-[10px] text-brand-violet font-bold tracking-widest uppercase">Online</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={resetChat}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  title="Reset Chat"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/50">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed ${
                    msg.type === 'user' 
                      ? 'bg-brand-violet text-white rounded-tr-none shadow-lg' 
                      : 'bg-white text-slate-700 rounded-tl-none border border-slate-100 shadow-sm'
                  }`}>
                    {msg.text}
                    
                    {msg.type === 'bot' && msg.options && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {msg.options.map((opt, i) => (
                          <button
                            key={i}
                            onClick={() => handleOptionClick(opt)}
                            className="px-3 py-1.5 bg-slate-50 hover:bg-brand-violet/5 border border-slate-200 hover:border-brand-violet text-slate-600 hover:text-brand-violet text-xs font-medium rounded-full transition-all flex items-center gap-2"
                          >
                            {opt.text}
                            <ChevronRight className="w-3 h-3" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-none p-4 shadow-sm">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Footer */}
            <div className="p-2 bg-white border-t border-slate-100" />
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
      >
        {isOpen ? <Bot className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-brand-violet rounded-full border-2 border-white animate-pulse" />
      </button>
    </div>
  );
};
