interface Skill {
  name: string;
  icon: string;
  type: "img" | "text";
  color?: string;
  textColor?: string;
}

interface SkillCategory {
  label: string;
  skills: Skill[];
}

const DEV = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const categories: SkillCategory[] = [
  {
    label: "Languages",
    skills: [
      { name: "Python", icon: `${DEV}/python/python-original.svg`, type: "img" },
      { name: "SQL", icon: `${DEV}/postgresql/postgresql-original.svg`, type: "img" },
      { name: "Java", icon: `${DEV}/java/java-original.svg`, type: "img" },
    ],
  },
  {
    label: "Data Processing",
    skills: [
      { name: "Apache Spark", icon: `${DEV}/apachespark/apachespark-original.svg`, type: "img" },
      { name: "PySpark", icon: `${DEV}/python/python-original.svg`, type: "img" },
      { name: "Apache Kafka", icon: `${DEV}/apachekafka/apachekafka-original.svg`, type: "img" },
      { name: "Apache Flink", icon: "", type: "text", color: "#e5072a22", textColor: "#e5072a" },
    ],
  },
  {
    label: "ETL & Orchestration",
    skills: [
      { name: "Airflow", icon: `${DEV}/apacheairflow/apacheairflow-original.svg`, type: "img" },
      { name: "dbt", icon: "", type: "text", color: "#ff694a22", textColor: "#ff694a" },
      { name: "Batch Pipelines", icon: "", type: "text", color: "rgba(0,212,255,0.12)", textColor: "#00d4ff" },
    ],
  },
  {
    label: "Cloud & Storage",
    skills: [
      { name: "GCP", icon: `${DEV}/googlecloud/googlecloud-original.svg`, type: "img" },
      { name: "BigQuery", icon: "", type: "text", color: "#4285f422", textColor: "#4285f4" },
      { name: "Cloud Run", icon: "", type: "text", color: "#34a85322", textColor: "#34a853" },
      { name: "GCS", icon: "", type: "text", color: "#fbbc0522", textColor: "#fbbc05" },
    ],
  },
  {
    label: "Databases",
    skills: [
      { name: "BigQuery", icon: "", type: "text", color: "#4285f422", textColor: "#4285f4" },
      { name: "SQLite", icon: `${DEV}/sqlite/sqlite-original.svg`, type: "img" },
      { name: "Relational DB", icon: "", type: "text", color: "rgba(0,212,255,0.12)", textColor: "#00d4ff" },
    ],
  },
  {
    label: "DevOps & Deployment",
    skills: [
      { name: "Docker", icon: `${DEV}/docker/docker-original.svg`, type: "img" },
      { name: "Kubernetes", icon: `${DEV}/kubernetes/kubernetes-original.svg`, type: "img" },
      { name: "CI/CD", icon: `${DEV}/github/github-original.svg`, type: "img" },
    ],
  },
];

function SkillIcon({ skill }: { skill: Skill }) {
  if (skill.type === "img") {
    return (
      <img
        src={skill.icon}
        alt={skill.name}
        style={{ width: 26, height: 26, objectFit: "contain", flexShrink: 0 }}
        onError={(e) => {
          const img = e.currentTarget;
          img.style.display = "none";
          const sib = img.nextElementSibling as HTMLElement | null;
          if (sib) sib.style.display = "flex";
        }}
      />
    );
  }
  const abbrev = skill.name.replace(/[^A-Z0-9]/gi, "").slice(0, 3).toUpperCase();
  return (
    <div
      style={{
        width: 26,
        height: 26,
        borderRadius: 5,
        background: skill.color ?? "rgba(0,212,255,0.12)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.5rem",
        fontWeight: 700,
        color: skill.textColor ?? "#00d4ff",
        flexShrink: 0,
        letterSpacing: "0.02em",
      }}
    >
      {abbrev}
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-28 px-6" style={{ zIndex: 1 }}>
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
          Skills
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
          Tools of the trade.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.label}
              style={{
                background: "rgba(11,18,32,0.8)",
                border: "1px solid rgba(0,212,255,0.1)",
                borderRadius: 12,
                padding: "1.25rem",
              }}
              className="hover:border-[rgba(0,212,255,0.25)] transition-colors duration-300"
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                  color: "#00d4ff",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                {cat.label}
              </div>
              <div className="flex flex-col gap-3">
                {cat.skills.map((skill) => (
                  <div key={skill.name} style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                    <SkillIcon skill={skill} />
                    {/* invisible fallback for img onError */}
                    <div
                      style={{
                        display: "none",
                        width: 26,
                        height: 26,
                        borderRadius: 5,
                        background: "rgba(0,212,255,0.1)",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.5rem",
                        fontWeight: 700,
                        color: "#00d4ff",
                        flexShrink: 0,
                        position: "absolute",
                      }}
                    />
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "#8ea4be" }}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
