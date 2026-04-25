/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

<<<<<<< HEAD
=======
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
>>>>>>> e3d7982 (changes made)
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
<<<<<<< HEAD

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
=======
import FeatureDetailPage from "./components/FeatureDetailPage";
import LearnMorePage from "./components/LearnMorePage";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, hash]);

  return null;
}

function HomePage() {
  return (
    <>
>>>>>>> e3d7982 (changes made)
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
<<<<<<< HEAD
    </div>
=======
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features/:slug" element={<FeatureDetailPage />} />
          <Route path="/learn-more" element={<LearnMorePage />} />
        </Routes>
      </div>
    </Router>
>>>>>>> e3d7982 (changes made)
  );
}

