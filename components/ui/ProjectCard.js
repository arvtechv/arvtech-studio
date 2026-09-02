"use client";

import { useTranslation } from "@/i18n/useTranslation";

export default function ProjectCard({ project, onContactClick }) {
  const { t } = useTranslation();

  return (
    <div
      className="project-card"
      style={{
        border: "1px solid #E2E8F0",
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: "0 4px 18px rgba(15,23,42,0.04)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Visual banner */}
      <div
        style={{
          height: 140,
          background: project.imageBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          color: "#FFFFFF",
        }}
      >
        <span style={{ fontSize: 44 }}>{project.icon}</span>
        <span
          style={{
            fontFamily: "'Orbitron',sans-serif",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: 3,
            background: "rgba(255,255,255,0.25)",
            padding: "4px 10px",
            borderRadius: 4,
            backdropFilter: "blur(4px)",
          }}
        >
          {project.categoryLabel}
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3
          style={{
            fontFamily: "'Orbitron',sans-serif",
            fontWeight: 700,
            fontSize: 17,
            color: "#0F172A",
            marginBottom: 8,
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontFamily: "'Rajdhani',sans-serif",
            fontSize: 15,
            color: "#475569",
            lineHeight: 1.6,
            marginBottom: 20,
            flex: 1,
          }}
        >
          {project.desc}
        </p>

        {/* Tech Stack Pills */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
          {project.tech.map((tItem) => (
            <span
              key={tItem}
              style={{
                background: "#F1F5F9",
                color: "#334155",
                fontSize: 11,
                fontWeight: 600,
                padding: "3px 10px",
                borderRadius: 4,
                fontFamily: "'Rajdhani',sans-serif",
              }}
            >
              {tItem}
            </span>
          ))}
        </div>

        <button
          className="cta-btn"
          onClick={onContactClick}
          style={{
            background: "#F8FAFC",
            border: "1px solid #CBD5E1",
            color: "#0066FF",
            padding: "10px 16px",
            borderRadius: 6,
            fontFamily: "'Orbitron',sans-serif",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 2,
            cursor: "pointer",
            textAlign: "center",
          }}
        >
          {t("projects.viewDetails")}
        </button>
      </div>
    </div>
  );
}
