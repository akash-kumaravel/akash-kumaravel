import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import ProjectDetail from "./pages/ProjectDetail.tsx";
import LegalLinkPage from "./pages/LegalLinkPage.tsx";
import CollectiblesPage from "./pages/CollectiblesPage.tsx";
import FlintPage from "./pages/FlintPage.tsx";
import DesignPhilosophyPage from "./pages/DesignPhilosophyPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import Navbar from "./components/Navbar.tsx";
import { RESUME_PDF_URL } from "./data/portfolioData.ts";

function ResumeRedirect() {
  useEffect(() => {
    window.location.replace(RESUME_PDF_URL);
  }, []);
  return (
    <div className="min-h-screen bg-white flex items-center justify-center font-inter text-gray-500">
      Opening Resumé...
    </div>
  );
}

function NavigationWrapper() {
  const location = useLocation();
  if (
    location.pathname === '/project/legal-link' ||
    location.pathname === '/project/spark' ||
    location.pathname === '/project/collectibles' ||
    location.pathname === '/project/flint'
  ) {
    return null;
  }
  return <Navbar />;
}

function ScrollToHashAndTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        const timer = setTimeout(() => {
          const reElement = document.getElementById(id);
          if (reElement) {
            reElement.scrollIntoView({ behavior: "smooth" });
          }
        }, 150);
        return () => clearTimeout(timer);
      }
    } else {
      // Force instant jump to the top of the page immediately on navigation
      const html = document.documentElement;
      const originalScrollBehavior = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      try {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      } catch {
        window.scrollTo(0, 0);
      }
      
      const timer = setTimeout(() => {
        html.style.scrollBehavior = originalScrollBehavior;
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHashAndTop />
      <NavigationWrapper />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<ResumeRedirect />} />
        <Route path="/design-philosophy" element={<DesignPhilosophyPage />} />
        <Route path="/philosophy" element={<DesignPhilosophyPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Home />} />
        <Route path="/project/legal-link" element={<LegalLinkPage />} />
        <Route path="/project/flint" element={<FlintPage />} />
        <Route path="/project/spark" element={<CollectiblesPage />} />
        <Route path="/project/collectibles" element={<CollectiblesPage />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
