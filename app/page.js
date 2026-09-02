"use client";

import { useEffect } from "react";
import Particles from "@/components/layout/Particles";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutSection from "@/components/sections/AboutSection";
import CtaBand from "@/components/sections/CtaBand";
import ContactSection from "@/components/sections/ContactSection";

export default function ArvtechStudioPage() {
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const el = document.getElementById(hash);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 70;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        fontFamily: "'Rajdhani', 'Orbitron', sans-serif",
        background: "#FAFAFC",
        color: "#0F172A",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Rajdhani:wght@400;500;600;700&display=swap');
        @keyframes pulse { 0%, 100% { opacity: 0.3; transform: translate(-50%,-50%) scale(1); } 50% { opacity: 0.7; transform: translate(-50%,-50%) scale(1.03); } }
        @keyframes rotateSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .service-card { transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease; background: #FFFFFF; }
        .service-card:hover { transform: translateY(-6px) !important; box-shadow: 0 20px 40px -10px rgba(0, 102, 255, 0.15) !important; border-color: rgba(0, 102, 255, 0.4) !important; }
        .project-card { transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease; background: #FFFFFF; }
        .project-card:hover { transform: translateY(-6px) !important; box-shadow: 0 20px 40px -10px rgba(0, 102, 255, 0.12) !important; border-color: #0066FF !important; }
        .value-card { transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease; background: #FFFFFF; }
        .value-card:hover { transform: translateY(-4px); border-color: #0066FF !important; box-shadow: 0 12px 30px rgba(0, 102, 255, 0.12) !important; }
        .cta-btn { transition: all 0.3s ease; cursor: pointer; }
        .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(0, 102, 255, 0.35) !important; }
        .category-tab { transition: all 0.25s ease; cursor: pointer; }
        .category-tab:hover { border-color: #0066FF !important; color: #0066FF !important; }
        .hero-grid { display: grid; grid-template-columns: 1fr; gap: 48px; align-items: center; max-width: 1200px; margin: 0 auto; padding: 100px 0 40px 0; text-align: center; }
        @media (min-width: 992px) { .hero-grid { grid-template-columns: 1.1fr 0.9fr; text-align: left; padding: 130px 0 70px 0; } }
        .metrics-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 40px; }
        @media (min-width: 576px) { .metrics-grid { display: grid; grid-template-columns: repeat(4, 1fr); } }
      `}</style>

      <Particles />
      <HeroSection onServicesClick={() => scrollTo("services")} onProjectsClick={() => scrollTo("projects")} />
      <ServicesSection />
      <ProjectsSection onContactClick={() => scrollTo("contact")} />
      <AboutSection />
      <CtaBand />
      <ContactSection />
      <Footer />
    </div>
  );
}
