import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import Button from "./ui/Button";

const navLinks = [
  { name: "Home", href: "/#home", id: "home" },
  { name: "Features", href: "/#features", id: "features" },
  { name: "About", href: "/#about", id: "about" },
  { name: "Contact", href: "/#contact", id: "contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (!isHomePage) return;

    if (!location.hash || location.hash === "#") {
      setActiveSection("home");
    } else {
      setActiveSection(location.hash.replace("#", ""));
    }
  }, [location, isHomePage]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);

    if (!isHomePage) return;

    if (latest < 120) {
      setActiveSection("home");
      return;
    }

    const sections = ["features", "about", "how-it-works", "contact"];
    const scrollPosition = latest + 200;
    let currentSection = "home";

    for (const section of sections) {
      const element = document.getElementById(section);
      if (!element) continue;

      const offsetTop = element.offsetTop;
      const height = element.offsetHeight;

      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
        currentSection = section;
        break;
      }
    }

    setActiveSection((previous) => (previous !== currentSection ? currentSection : previous));
  });

  const isActive = (linkId: string) => {
    if (!isHomePage) return false;
    return activeSection === linkId;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" onClick={() => setActiveSection("home")} className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-gradient-to-br from-brand-violet to-brand-cyan rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full" />
          </div>
          <span className="text-xl font-display font-bold tracking-tight text-slate-900">
            Nexasphere<span className="text-brand-violet">AI</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={link.href}
                onClick={() => {
                  setActiveSection(link.id);
                  setIsMobileMenuOpen(false);
                  if (link.id === "home") window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`text-sm font-bold transition-colors duration-300 relative py-1 ${
                  isActive(link.id) ? "text-brand-violet" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {link.name}
                {isActive(link.id) && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-violet to-brand-cyan rounded-full"
                  />
                )}
              </Link>
            </motion.div>
          ))}

          <Link to="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
            <Button variant="secondary" size="sm" className="rounded-full px-5 bg-slate-900 text-white hover:bg-slate-800">
              Get Started
            </Button>
          </Link>
        </div>

        <button className="md:hidden text-slate-900 p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden glass border-t border-slate-200 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium ${isActive(link.id) ? "text-brand-violet" : "text-slate-700"}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="secondary" className="w-full mt-2 rounded-full bg-slate-900 text-white">
                  Get Started
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
