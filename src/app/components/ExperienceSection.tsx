import { useState, useEffect } from "react";

interface Project {
  title: string;
  shortDesc: string;
  highlights: { value: string; label: string }[];
  problem: string;
  approach: string[];
  outcome: string[];
  stack: string[];
}

interface ExperienceEntry {
  id: string;
  company: string;
  companyShort: string;
  companyColor: string;
  role: string;
  dates: string;
  location: string;
  current: boolean;
  projects: Project[];
}

const experiences: ExperienceEntry[] = [
  {
    id: "transunion",
    company: "TransUnion",
    companyShort: "TU",
    companyColor: "#1a5cff",
    role: "Software Developer — Data Engineering & Streaming Infrastructure",
    dates: "Feb 2024 – Present",
    location: "United States",
    current: true,
    projects: [
      {
        title: "Kafka-Flink Fraud Streaming Pipeline",
        shortDesc:
          "Real-time streaming architecture processing 35M+ daily transaction events with sub-second behavioral feature computation for downstream fraud analytics models.",
        highlights: [
          { value: "35M+", label: "Events / Day" },
          { value: "<1s", label: "Feature Latency" },
        ],
        problem:
          "Fraud analytics required real-time behavioral feature computation at scale with sub-second latency across tens of millions of daily transactions. Existing batch workflows couldn't provide the freshness needed for downstream fraud models.",
        approach: [
          "Designed Kafka-Flink architecture to compute low-latency behavioral metrics from live transaction streams.",
          "Engineered real-time feature aggregation across multiple time windows (1min, 5min, 1hr).",
          "Built automated reconciliation services ensuring consistency between streaming and batch layers.",
          "Implemented partitioned BigQuery storage with query optimization for fast analytical access.",
        ],
        outcome: [
          "35M+ transaction events processed in real time daily.",
          "Sub-second feature latency enabling timely fraud signal generation.",
          "Automated validation ensures end-to-end data consistency from ingestion to consumption.",
        ],
        stack: ["Python", "Apache Kafka", "Apache Flink", "BigQuery", "GCS", "Cloud Run", "GCP"],
      },
      {
        title: "Scalable Batch ETL Ingestion Framework",
        shortDesc:
          "High-throughput ETL framework for semi-structured JSON data enabling batch ingestion of 5B+ historical records to support model retraining and reporting pipelines.",
        highlights: [
          { value: "~50%", label: "Latency Reduction" },
          { value: "5B+", label: "Historical Records" },
        ],
        problem:
          "Existing ingestion pipelines were slow and brittle when handling semi-structured JSON at scale, blocking model retraining and historical reporting workflows.",
        approach: [
          "Engineered a configurable ETL ingestion framework for diverse semi-structured JSON schemas.",
          "Built batch ingestion workflows handling 5B+ historical records with schema validation.",
          "Implemented automated data quality checks at ingestion, transformation, and output layers.",
          "Deployed using Cloud Run for scalable, containerized execution.",
        ],
        outcome: [
          "Processing time reduced by approximately 50% via the custom ingestion framework.",
          "5B+ historical records made available for model retraining and reporting.",
          "Automated quality checks reduced downstream data inconsistencies significantly.",
        ],
        stack: ["Python", "PySpark", "Spark", "BigQuery", "GCS", "Cloud Run", "Airflow", "GCP"],
      },
    ],
  },
  {
    id: "ford",
    company: "Ford Motor Company",
    companyShort: "Ford",
    companyColor: "#003e92",
    role: "Data Science Intern",
    dates: "Jun 2023 – Jul 2023",
    location: "Remote",
    current: false,
    projects: [
      {
        title: "Predictive Modeling Feature Pipeline",
        shortDesc:
          "Structured data preprocessing and feature engineering pipeline for large-scale ML datasets, improving downstream model performance by 15–20% through targeted feature selection.",
        highlights: [
          { value: "15–20%", label: "Model Performance Gain" },
        ],
        problem:
          "Raw predictive modeling datasets contained noisy, unstructured features incompatible with downstream ML models, requiring robust preprocessing and feature selection before training.",
        approach: [
          "Built structured data preprocessing pipelines using Python and SQL on GCP.",
          "Performed correlation analysis to identify key feature drivers and remove noise.",
          "Designed feature transformation workflows producing clean, model-ready datasets.",
        ],
        outcome: [
          "15–20% improvement in model performance through targeted feature engineering.",
          "Reusable preprocessing pipeline reduced manual data preparation effort significantly.",
        ],
        stack: ["Python", "SQL", "Pandas", "GCP"],
      },
    ],
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

function ExperienceModal({ project, entry, onClose }: { project: Project; entry: ExperienceEntry; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100]"
      style={{ background: "rgba(4,9,18,0.88)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="fixed inset-0 overflow-y-auto"
        style={{ pointerEvents: "none" }}
        onClick={onClose}
      >
        <div
          className="flex min-h-full items-start justify-center p-6 pt-20"
          style={{ pointerEvents: "none" }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "640px",
              background: "#0b1220",
              border: "1px solid rgba(0,212,255,0.18)",
              borderRadius: 14,
              padding: "2rem",
              pointerEvents: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "none",
                border: "none",
                color: "#4e6279",
                cursor: "pointer",
                fontSize: "1.5rem",
                lineHeight: 1,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#dde4ed")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#4e6279")}
            >
              ×
            </button>

            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#00d4ff", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
              {entry.company} / {entry.dates}
            </div>
            <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#dde4ed", marginBottom: "0.5rem" }}>
              {project.title}
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "#7a8fa8", marginBottom: "1.5rem", lineHeight: 1.7 }}>
              {project.shortDesc}
            </p>

            {project.highlights.length > 0 && (
              <div style={{ marginBottom: "1.5rem" }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "#00d4ff", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                  Highlights
                </div>
                <div className="flex gap-4 flex-wrap">
                  {project.highlights.map((h, i) => (
                    <div key={i} style={{ background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)", borderRadius: 8, padding: "0.6rem 1rem", minWidth: 80 }}>
                      <div style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "1.4rem", color: "#00d4ff" }}>{h.value}</div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "#8ea4be", textTransform: "uppercase", letterSpacing: "0.06em" }}>{h.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div style={{ marginBottom: "1.25rem" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "#00d4ff", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Problem</div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "#8ea4be", lineHeight: 1.75 }}>{project.problem}</p>
            </div>

            <div style={{ marginBottom: "1.25rem" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "#00d4ff", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Approach</div>
              <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                {project.approach.map((a, i) => (
                  <li key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "#8ea4be", lineHeight: 1.75, paddingLeft: "1rem", position: "relative", marginBottom: "0.25rem" }}>
                    <span style={{ position: "absolute", left: 0, color: "#00d4ff" }}>›</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "#00d4ff", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Outcome</div>
              <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                {project.outcome.map((o, i) => (
                  <li key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", color: "#8ea4be", lineHeight: 1.75, paddingLeft: "1rem", position: "relative", marginBottom: "0.25rem" }}>
                    <span style={{ position: "absolute", left: 0, color: "#00d4ff" }}>›</span>
                    {o}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "#00d4ff", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.6rem" }}>Stack</div>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <PillTag key={s} label={s} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  const [selectedId, setSelectedId] = useState(experiences[0].id);
  const [modal, setModal] = useState<{ project: Project; entry: ExperienceEntry } | null>(null);

  const selected = experiences.find((e) => e.id === selectedId)!;

  return (
    <section id="experience" className="relative py-28 px-6" style={{ zIndex: 1 }}>
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
          Experience
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
          Where I've worked.
        </h2>

        <div className="flex flex-col lg:flex-row gap-6" style={{ alignItems: "flex-start" }}>
          {/* Left: company list */}
          <div
            style={{
              width: "100%",
              maxWidth: 300,
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            {experiences.map((exp) => {
              const isActive = exp.id === selectedId;
              return (
                <button
                  key={exp.id}
                  onClick={() => setSelectedId(exp.id)}
                  style={{
                    background: isActive ? "rgba(0,212,255,0.07)" : "rgba(11,18,32,0.6)",
                    border: isActive ? "1px solid rgba(0,212,255,0.35)" : "1px solid rgba(0,212,255,0.08)",
                    borderRadius: 10,
                    padding: "1rem 1rem",
                    cursor: "pointer",
                    textAlign: "left",
                    display: "flex",
                    gap: "0.85rem",
                    alignItems: "flex-start",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.borderColor = "rgba(0,212,255,0.2)"; }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.borderColor = "rgba(0,212,255,0.08)"; }}
                >
                  {/* Company logo */}
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 8,
                      background: exp.companyColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontFamily: "'Rajdhani', sans-serif",
                      fontWeight: 700,
                      fontSize: exp.companyShort.length > 2 ? "0.65rem" : "0.85rem",
                      color: "#fff",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {exp.companyShort}
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.85rem", color: isActive ? "#00d4ff" : "#dde4ed" }}>
                        {exp.company}
                      </span>
                      {exp.current && (
                        <span style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "0.55rem",
                          color: "#00d4ff",
                          background: "rgba(0,212,255,0.12)",
                          border: "1px solid rgba(0,212,255,0.3)",
                          borderRadius: "999px",
                          padding: "0.1rem 0.4rem",
                          letterSpacing: "0.08em",
                          whiteSpace: "nowrap",
                        }}>
                          NOW
                        </span>
                      )}
                    </div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#7a8fa8", marginTop: "0.15rem", lineHeight: 1.4, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {exp.role.length > 32 ? exp.role.slice(0, 32) + "…" : exp.role}
                    </div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "#4e6279", marginTop: "0.3rem" }}>
                      {exp.dates} · {exp.location}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: projects panel */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.65rem",
                color: "#4e6279",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              {selected.projects.length} Notable Project{selected.projects.length !== 1 ? "s" : ""} at {selected.company.toUpperCase()}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selected.projects.map((project, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(11,18,32,0.85)",
                    border: "1px solid rgba(0,212,255,0.1)",
                    borderRadius: 12,
                    padding: "1.25rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                  className="hover:border-[rgba(0,212,255,0.25)] transition-colors duration-300"
                >
                  <div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.62rem", color: "#4e6279", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.35rem" }}>
                      {selected.dates}
                    </div>
                    <h4
                      style={{
                        fontFamily: "'Rajdhani', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.05rem",
                        color: "#dde4ed",
                        lineHeight: 1.3,
                      }}
                    >
                      {project.title}
                    </h4>
                  </div>

                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: "#7a8fa8", lineHeight: 1.7, flex: 1 }}>
                    {project.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 4).map((s) => (
                      <PillTag key={s} label={s} />
                    ))}
                    {project.stack.length > 4 && (
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "#4e6279", alignSelf: "center" }}>
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setModal({ project, entry: selected })}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "#00d4ff",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      padding: 0,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    View Details →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {modal && (
        <ExperienceModal
          project={modal.project}
          entry={modal.entry}
          onClose={() => setModal(null)}
        />
      )}
    </section>
  );
}
