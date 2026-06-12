import { ParticleCanvas } from "./components/ParticleCanvas";
import { NavBar } from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { ContactSection } from "./components/ContactSection";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#060b14",
        fontFamily: "'Inter', sans-serif",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @media print {
          canvas, nav { display: none !important; }
          body { background: #060b14 !important; color: #dde4ed !important; }
          section { page-break-inside: avoid; }
          * { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
        }
      `}</style>
      <ParticleCanvas />
      <NavBar />
      <main style={{ position: "relative", zIndex: 1 }}>
        <HeroSection />
        <div style={{ borderTop: "1px solid rgba(0,212,255,0.06)" }} />
        <AboutSection />
        <div style={{ borderTop: "1px solid rgba(0,212,255,0.06)" }} />
        <ExperienceSection />
        <div style={{ borderTop: "1px solid rgba(0,212,255,0.06)" }} />
        <ProjectsSection />
        <div style={{ borderTop: "1px solid rgba(0,212,255,0.06)" }} />
        <SkillsSection />
        <div style={{ borderTop: "1px solid rgba(0,212,255,0.06)" }} />
        <ContactSection />
      </main>
    </div>
  );
}
