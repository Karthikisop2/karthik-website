import { useState } from "react";

const metrics = [
  { value: "2+", label: "Years Production Experience", sub: "TransUnion · Ford" },
  { value: "35M+", label: "Daily Transaction Events", sub: "Real-time fraud analytics" },
  { value: "5B+", label: "Batch Records Processed", sub: "Historical data ingestion" },
  { value: "~50%", label: "ETL Latency Reduction", sub: "Custom ingestion framework" },
  { value: "2", label: "Cloud Platforms", sub: "GCP · BigQuery" },
];

export function AboutSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="about" className="relative py-28 px-6" style={{ zIndex: 1 }}>
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
          About
        </p>
        <h2
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2rem, 4vw, 2.8rem)",
            color: "#dde4ed",
            marginBottom: "2rem",
          }}
        >
          Building systems that scale.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", color: "#8ea4be", lineHeight: 1.8, gridColumn: "span 1" }}>
            I'm a Data Engineer focused on the full spectrum of data movement — from real-time streaming pipelines
            to multi-billion record batch systems. Currently at TransUnion, I architect the infrastructure that powers
            fraud analytics for millions of daily transactions.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", color: "#8ea4be", lineHeight: 1.8 }}>
            My work sits at the intersection of distributed systems and data reliability. I care deeply about
            building pipelines that don't just process data fast, but do so with validated consistency — from
            ingestion through to downstream consumers.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", color: "#8ea4be", lineHeight: 1.8 }}>
            Outside production pipelines, I've applied data engineering principles to machine learning problems —
            time-series forecasting, feature engineering, and model-ready dataset preparation at scale. I hold
            a CS degree from SASTRA University and a Diploma in Data Science from IIT Madras.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {metrics.map((m, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: "rgba(11,18,32,0.8)",
                border: hovered === i ? "1px solid rgba(0,212,255,0.5)" : "1px solid rgba(0,212,255,0.1)",
                borderRadius: "10px",
                padding: "1.25rem 1rem",
                cursor: "default",
                transition: "all 0.25s ease",
                boxShadow: hovered === i
                  ? "0 0 24px rgba(0,212,255,0.3), 0 0 60px rgba(0,212,255,0.08), inset 0 0 20px rgba(0,212,255,0.04)"
                  : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: 700,
                  fontSize: "2rem",
                  color: hovered === i ? "#00d4ff" : "#5ac8e8",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                  transition: "color 0.25s ease",
                }}
              >
                {m.value}
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "#dde4ed", fontWeight: 500, marginBottom: "0.2rem" }}>
                {m.label}
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "#4e6279" }}>
                {m.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
