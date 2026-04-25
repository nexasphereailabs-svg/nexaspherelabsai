import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X } from "lucide-react";
<<<<<<< HEAD
=======
import { Link, useLocation } from "react-router-dom";
>>>>>>> e3d7982 (changes made)
import Button from "./ui/Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
<<<<<<< HEAD
=======
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (isHomePage && !location.hash) {
      setActiveSection("home");
    } else if (isHomePage && location.hash) {
      setActiveSection(location.hash.replace("#", ""));
    }
  }, [location, isHomePage]);
>>>>>>> e3d7982 (changes made)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
    
<<<<<<< HEAD
=======
    if (!isHomePage) return;

>>>>>>> e3d7982 (changes made)
    if (latest < 100) {
      setActiveSection("home");
      return;
    }
    
    // Detect active section
    const sections = ["features", "about", "how-it-works", "contact"];
<<<<<<< HEAD
    const scrollPosition = latest + 150;

=======
    const scrollPosition = latest + 200; // Increased offset for better detection

    let currentSection = activeSection;
>>>>>>> e3d7982 (changes made)
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
<<<<<<< HEAD
          setActiveSection(section);
=======
          currentSection = section;
>>>>>>> e3d7982 (changes made)
          break;
        }
      }
    }
<<<<<<< HEAD
  });

  const navLinks = [
    { name: "Home", href: "#", id: "home" },
    { name: "Features", href: "#features", id: "features" },
    { name: "About", href: "#about", id: "about" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

=======
    
    if (currentSection !== activeSection) {
      setActiveSection(currentSection);
    }
  });

  const navLinks = [
    { name: "Home", href: "/", id: "home" },
    { name: "Services", href: "/#features", id: "features" },
    { name: "About", href: "/#about", id: "about" },
    { name: "Contact", href: "/#contact", id: "contact" },
  ];

  const isActive = (linkId: string) => {
    if (!isHomePage) return false;
    return activeSection === linkId;
  };

>>>>>>> e3d7982 (changes made)
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
<<<<<<< HEAD
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-brand-violet to-brand-cyan rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full" />
          </div>
          <span className="text-xl font-display font-bold tracking-tight text-slate-900">
            Nexasphere<span className="text-brand-violet">AI</span>
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`text-sm font-bold transition-all relative py-1 ${
                activeSection === link.id ? "text-brand-violet" : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.div 
                  layoutId="nav-pill"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-violet to-brand-cyan rounded-full"
                />
              )}
            </motion.a>
          ))}
          <Button variant="secondary" size="sm" className="rounded-full px-5 bg-slate-900 text-white hover:bg-slate-800">
            Get Started
          </Button>
=======
        <Link to="/">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setActiveSection("home")}
          >
            <img src="https://files.catbox.moe/n96mwl.png" alt="NexasphereAI Logo" className="w-8 h-8 object-contain" />
            <span className="text-xl font-display font-bold tracking-tight text-slate-900">
              Nexasphere<span className="text-brand-violet">AI</span>
            </span>
          </motion.div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={link.href}
                onClick={() => {
                  setActiveSection(link.id);
                  if (link.id === "home") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
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
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
          <Link to="/#contact-form">
            <Button variant="secondary" size="sm" className="rounded-full px-5 bg-slate-900 text-white hover:bg-slate-800">
              Get Started
            </Button>
          </Link>
>>>>>>> e3d7982 (changes made)
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-900 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
<<<<<<< HEAD
            className="md:hidden glass border-t border-slate-200"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-slate-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="secondary" className="w-full mt-2 rounded-full bg-slate-900 text-white">
                Get Started
              </Button>
=======
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden glass border-t border-slate-200 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-lg font-medium ${isActive(link.id) ? "text-brand-violet" : "text-slate-700"}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/#contact-form" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="secondary" className="w-full mt-2 rounded-full bg-slate-900 text-white">
                  Get Started
                </Button>
              </Link>
>>>>>>> e3d7982 (changes made)
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
