import { useState, useEffect } from "react";
import { Download } from "lucide-react";

const RESUME_URL = "https://drive.google.com/file/d/YOUR_FILE_ID/view";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownload = () => {
    window.print();
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      style={{
        background: scrolled ? "rgba(6,11,20,0.92)" : "rgba(6,11,20,0.6)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(0,212,255,0.12)" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className="cursor-pointer select-none"
            style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#00d4ff", letterSpacing: "0.02em" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Karthik Muthu
          </span>
          <span style={{ color: "rgba(0,212,255,0.4)", fontSize: "0.95rem" }}>|</span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "0.875rem", color: "#7a8fa8" }}>
            Data Engineer
          </span>
        </div>

        <div className="flex items-center gap-6">
          {["about", "experience", "projects", "skills", "contact"].map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "#7a8fa8", background: "none", border: "none", cursor: "pointer", textTransform: "capitalize", letterSpacing: "0.03em" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#7a8fa8")}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
          <button
            onClick={handleDownload}
            title="Download as PDF"
            style={{
              background: "transparent",
              border: "1px solid rgba(0,212,255,0.3)",
              borderRadius: "6px",
              color: "#7a8fa8",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              padding: "0.35rem 0.6rem",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#ffffff"; e.currentTarget.style.borderColor = "rgba(0,212,255,0.6)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#7a8fa8"; e.currentTarget.style.borderColor = "rgba(0,212,255,0.3)"; }}
          >
            <Download size={15} />
          </button>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.875rem",
              fontWeight: 600,
              background: "#00d4ff",
              color: "#060b14",
              padding: "0.4rem 1.1rem",
              borderRadius: "6px",
              textDecoration: "none",
              letterSpacing: "0.03em",
            }}
            className="hover:opacity-90 transition-opacity duration-200"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
