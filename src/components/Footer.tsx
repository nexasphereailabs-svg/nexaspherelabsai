
import { Cpu, Twitter, Github, Linkedin } from "lucide-react";

import { Twitter, Github, Linkedin } from "lucide-react";


export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200 mt-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-slate-500 uppercase tracking-widest font-bold">
          <div className="flex items-center gap-3">

            <div className="w-8 h-8 bg-gradient-to-br from-brand-violet to-brand-cyan rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full" />
            </div>
            <span className="text-slate-900">© 2026 Nexasphere AI Labs Inc.</span>
          </div>

          <div className="flex gap-10">
            <a href="#" className="hover:text-brand-violet transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-violet transition-colors">Security</a>
            <a href="#" className="hover:text-brand-violet transition-colors">Terms</a>
            <a href="#" className="hover:text-brand-violet transition-colors">Status</a>
          </div>


            <img src="https://files.catbox.moe/n96mwl.png" alt="NexasphereAI Logo" className="w-8 h-8 object-contain" />
            <span className="text-slate-900">© 2026 Nexasphere AI Labs Inc.</span>
          </div>


          <div className="flex gap-4">
            {[Twitter, Github, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-brand-violet hover:border-brand-violet/50 transition-all">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
