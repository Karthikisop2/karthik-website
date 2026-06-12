import { ExternalLink, Database, TrendingUp, Layers, Zap, Clock, Table, Cpu, ShieldCheck, BarChart3, GitMerge, Timer } from "lucide-react";

interface USP {
  icon: React.ReactNode;
  text: string;
}

interface Project {
  title: string;
  description: string;
  usps: USP[];
  tags: string[];
  image: string;
  imageAlt: string;
  github: string;
}

const projects: Project[] = [
  {
    title: "Cinema Audience Time-Series Forecasting",
    description:
      "End-to-end data pipeline and forecasting system integrating 1.6M+ POS records from 800+ theaters. Predicts audience attendance using lag and rolling-window time-series features with gradient-boosted models.",
    usps: [
      { icon: <Database size={16} />, text: "1.6M POS records across 800+ theaters" },
      { icon: <TrendingUp size={16} />, text: "Lag & rolling-window feature engineering" },
      { icon: <Layers size={16} />, text: "XGBoost + LightGBM ensemble" },
      { icon: <Zap size={16} />, text: "Optimized preprocessing cut training time" },
    ],
    tags: ["Python", "XGBoost", "LightGBM", "Pandas", "NumPy"],
    image:
      "https://images.unsplash.com/photo-1688678004647-945d5aaf91c1?w=600&h=340&fit=crop&auto=format",
    imageAlt: "Cinema theater — audience forecasting project",
    github: "https://github.com/karthikisop2",
  },
  {
    title: "Automated Parking Management Data Platform",
    description:
      "Batch processing data platform with cron-based job scheduling for daily reminders and monthly aggregated usage reports. Normalized schema across 4+ tables supports 1,000+ user records with full transactional consistency.",
    usps: [
      { icon: <Clock size={16} />, text: "Cron-based batch pipeline scheduling" },
      { icon: <Table size={16} />, text: "4+ normalized tables, 1,000+ users" },
      { icon: <Cpu size={16} />, text: "Redis + Celery async task queue" },
      { icon: <ShieldCheck size={16} />, text: "Data validation & integrity constraints" },
    ],
    tags: ["Python", "Flask", "SQLite", "Redis", "Celery"],
    image:
      "https://images.unsplash.com/photo-1772385850004-3037a20f9c2b?w=600&h=340&fit=crop&auto=format",
    imageAlt: "Parking garage with digital display — management platform",
    github: "https://github.com/karthikisop2",
  },
  {
    title: "Transaction Feature Computation Engine",
    description:
      "PySpark-based batch feature engineering system computing 50+ behavioral and historical features from raw transaction data, producing versioned model-ready datasets for fraud detection pipelines.",
    usps: [
      { icon: <BarChart3 size={16} />, text: "50+ behavioral & historical features" },
      { icon: <Timer size={16} />, text: "Multi-horizon rolling-window aggregations" },
      { icon: <GitMerge size={16} />, text: "Automated feature drift detection" },
      { icon: <Database size={16} />, text: "Versioned model-ready dataset outputs" },
    ],
    tags: ["Python", "PySpark", "BigQuery", "GCS", "Airflow"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop&auto=format",
    imageAlt: "Data analytics dashboard — feature computation engine",
    github: "https://github.com/karthikisop2",
  },
];

function PillTag({ label }: { label: string }) {
  return (
    <span
      style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: "0.72rem",
        fontWeight: 600,
        color: "#00d4ff",
        background: "rgba(0,212,255,0.1)",
        border: "1px solid rgba(0,212,255,0.25)",
        borderRadius: "999px",
        padding: "0.2rem 0.65rem",
        letterSpacing: "0.04em",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-28 px-6" style={{ zIndex: 1 }}>
      <div className="max-w-5xl mx-auto">
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.75rem",
            color: "#00d4ff",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
          }}
        >
          Projects
        </p>
        <h2
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2rem, 4vw, 2.8rem)",
            color: "#dde4ed",
            marginBottom: "2.5rem",
          }}
        >
          What I've built.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              style={{
                background: "rgba(11,18,32,0.85)",
                border: "1px solid rgba(0,212,255,0.1)",
                borderRadius: 14,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
              className="hover:border-[rgba(0,212,255,0.3)] transition-colors duration-300 group"
            >
              {/* Featured image */}
              <div style={{ position: "relative", overflow: "hidden", height: 180, background: "#0a1020" }}>
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.55 }}
                  className="group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(6,11,20,0.05), rgba(6,11,20,0.65))" }} />
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    position: "absolute",
                    top: "0.75rem",
                    right: "0.75rem",
                    background: "rgba(6,11,20,0.8)",
                    border: "1px solid rgba(0,212,255,0.2)",
                    borderRadius: 8,
                    width: 32,
                    height: 32,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#00d4ff",
                    backdropFilter: "blur(6px)",
                  }}
                  className="hover:bg-[rgba(0,212,255,0.15)] transition-colors duration-200"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>

              <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#dde4ed", lineHeight: 1.3 }}>
                  {p.title}
                </h3>

                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.825rem", color: "#7a8fa8", lineHeight: 1.75 }}>
                  {p.description}
                </p>

                {/* USPs in 2-column icon grid */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem 0.75rem" }}>
                  {p.usps.map((u, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: "0.45rem" }}>
                      <span style={{ color: "#00d4ff", flexShrink: 0, marginTop: "0.05rem" }}>{u.icon}</span>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "#8ea4be", lineHeight: 1.4 }}>{u.text}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: "auto", paddingTop: "0.75rem", borderTop: "1px solid rgba(0,212,255,0.08)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <PillTag key={t} label={t} />
                    ))}
                  </div>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", fontWeight: 600, color: "#00d4ff", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.3rem" }}
                    className="hover:opacity-70 transition-opacity duration-200"
                  >
                    GitHub <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
