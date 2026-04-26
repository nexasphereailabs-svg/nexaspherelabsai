import { motion, AnimatePresence } from "motion/react";
import { Mail, MessageSquare, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";
import React, { useState } from "react";
import Button from "./ui/Button";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyJgCDEbGk4k8Bow8c-RgaUg-KusD2DqtOlREi72G6UAqjc_oC_cHpvN8TJ4jInfbww/exec";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      // Use no-cors mode for Google Apps Script compatibility
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      // With no-cors, we assume success if no error is thrown
      setIsSuccess(true);
      form.reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      console.error("Submission error:", err);
      setError("Failed to send message. Please check your network and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-brand-violet font-bold text-xs tracking-widest uppercase mb-4">Contact us</p>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight text-slate-900">
              Let's build the <span className="gradient-text">future together</span>
            </h2>
            <p className="text-slate-600 text-lg mb-12 max-w-md leading-relaxed">
              Have questions about our neural processing capabilities or custom enterprise solutions? Our team is standing by.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-brand-violet/10 border border-brand-violet/20 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-brand-violet" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-slate-900">Email us</h4>
                  <p className="text-slate-600">info@nexasphereailabs.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6 text-brand-cyan" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-slate-900">Phone Number</h4>
                  <p className="text-slate-600">+91 9990698599</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-slate-900">Global HQ</h4>
                  <p className="text-slate-600">1006/Tower-6, Royal Court, Nemrana ,Rajasthan</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            id="contact-form"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-[40px] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-violet/10 blur-[80px] -z-10" />
            
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-slate-500">Thank you for reaching out. We'll get back to you shortly.</p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  className="space-y-6" 
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 px-1">Full Name</label>
                      <input 
                        id="name"
                        name="name"
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 focus:border-brand-violet outline-none transition-all placeholder:text-slate-400" 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 px-1">Email address</label>
                      <input 
                        id="email"
                        name="email"
                        required
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 focus:border-brand-violet outline-none transition-all placeholder:text-slate-400" 
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 px-1">Subject</label>
                    <input 
                      id="subject"
                      name="subject"
                      required
                      type="text" 
                      placeholder="Enterprise Inquiry"
                      className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 focus:border-brand-violet outline-none transition-all placeholder:text-slate-400" 
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 px-1">Message</label>
                    <textarea 
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 focus:border-brand-violet outline-none transition-all placeholder:text-slate-400 resize-none"
                    />
                  </div>

                  {error && (
                    <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
                      {error}
                    </div>
                  )}

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-5 text-lg font-bold flex items-center justify-center gap-3 bg-slate-900 text-white hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>Processing <Loader2 className="w-5 h-5 animate-spin" /></>
                    ) : (
                      <>Send Message <Send className="w-5 h-5" /></>
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

