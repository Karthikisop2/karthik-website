const RESUME_URL = "https://drive.google.com/file/d/YOUR_FILE_ID/view";

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ zIndex: 1 }}
    >
      <div className="max-w-3xl mx-auto">
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.8rem",
            color: "#00d4ff",
            letterSpacing: "0.18em",
            marginBottom: "1.25rem",
            textTransform: "uppercase",
          }}
        >
          &gt; Data Engineer
        </p>

        <h1
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2.8rem, 7vw, 5rem)",
            lineHeight: 1.1,
            color: "#dde4ed",
            marginBottom: "1rem",
            letterSpacing: "-0.01em",
          }}
        >
          Karthik Muthu
        </h1>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            color: "#7a8fa8",
            lineHeight: 1.7,
            marginBottom: "0.5rem",
          }}
        >
          Building distributed data systems that process millions of events in real time.
        </p>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            color: "#7a8fa8",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
          }}
        >
          Kafka · Flink · Spark · BigQuery · GCP
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9rem",
              fontWeight: 600,
              background: "#00d4ff",
              color: "#060b14",
              padding: "0.7rem 1.8rem",
              borderRadius: "7px",
              textDecoration: "none",
              letterSpacing: "0.04em",
            }}
            className="hover:opacity-90 transition-opacity duration-200"
          >
            View Resume ↗
          </a>
          <button
            onClick={() => scrollTo("contact")}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9rem",
              fontWeight: 600,
              background: "transparent",
              color: "#00d4ff",
              padding: "0.7rem 1.8rem",
              borderRadius: "7px",
              border: "1.5px solid rgba(0,212,255,0.5)",
              cursor: "pointer",
              letterSpacing: "0.04em",
            }}
            className="hover:border-[#00d4ff] hover:bg-[rgba(0,212,255,0.06)] transition-all duration-200"
          >
            Get in Touch
          </button>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        style={{ animation: "bounce 2s infinite" }}
      >
        <button
          onClick={() => scrollTo("about")}
          style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(0,212,255,0.4)" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </button>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </section>
  );
}
