import { Twitter, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200 mt-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-slate-500 uppercase tracking-widest font-bold">
          <div className="flex items-center gap-3">
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
