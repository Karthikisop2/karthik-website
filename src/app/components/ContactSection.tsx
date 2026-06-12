const RESUME_URL = "https://drive.google.com/file/d/YOUR_FILE_ID/view";
const LINKEDIN_URL = "https://linkedin.com/in/karthik-muthu";
const GITHUB_URL = "https://github.com/karthikisop2";
const EMAIL = "karthikisop2@gmail.com";

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function ResumeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  );
}

const links = [
  { icon: <MailIcon />, label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, color: "#ea4335" },
  { icon: <LinkedInIcon />, label: "LinkedIn", value: "linkedin.com/in/karthik-muthu", href: LINKEDIN_URL, color: "#0a66c2" },
  { icon: <GitHubIcon />, label: "GitHub", value: "github.com/karthikisop2", href: GITHUB_URL, color: "#dde4ed" },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative py-28 px-6 pb-24" style={{ zIndex: 1 }}>
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
          Contact
        </p>
        <h2
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2rem, 4vw, 2.8rem)",
            color: "#dde4ed",
            marginBottom: "0.75rem",
          }}
        >
          Let's connect.
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1rem",
            color: "#7a8fa8",
            lineHeight: 1.7,
            marginBottom: "3rem",
            maxWidth: 500,
          }}
        >
          Open to data engineering roles and interesting data infrastructure problems. Feel free to reach out.
        </p>

        {/* Centered single card */}
        <div className="flex justify-center">
          <div
            style={{
              background: "rgba(11,18,32,0.85)",
              border: "1px solid rgba(0,212,255,0.1)",
              borderRadius: 14,
              padding: "2rem 2.5rem",
              width: "100%",
              maxWidth: 480,
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            <h3
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 700,
                fontSize: "1.3rem",
                color: "#dde4ed",
                textAlign: "center",
                marginBottom: "0.25rem",
              }}
            >
              More ways to find me
            </h3>

            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.9rem",
                  textDecoration: "none",
                  color: l.color,
                  padding: "0.5rem 0",
                  borderBottom: "1px solid rgba(0,212,255,0.05)",
                }}
                className="hover:opacity-75 transition-opacity duration-200"
              >
                {l.icon}
                <div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.9rem" }}>{l.label}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "#4e6279" }}>{l.value}</div>
                </div>
              </a>
            ))}

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.9rem",
                textDecoration: "none",
                color: "#dde4ed",
                background: "rgba(0,212,255,0.08)",
                border: "1px solid rgba(0,212,255,0.2)",
                borderRadius: 8,
                padding: "0.75rem 1rem",
                marginTop: "0.25rem",
              }}
              className="hover:bg-[rgba(0,212,255,0.14)] transition-all duration-200"
            >
              <ResumeIcon />
              <div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.9rem", color: "#00d4ff" }}>View Resume</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "#4e6279" }}>Opens in new tab</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div
        className="max-w-5xl mx-auto mt-20 pt-8 flex items-center justify-between flex-wrap gap-4"
        style={{ borderTop: "1px solid rgba(0,212,255,0.08)" }}
      >
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", color: "#2e4258" }}>
          © {new Date().getFullYear()} Karthik Muthu
        </span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", color: "#2e4258" }}>
          Data Engineer · US Citizen
        </span>
      </div>
    </section>
  );
}
