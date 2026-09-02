"use client";

import { useState } from "react";
import ProjectCard from "@/components/ui/ProjectCard";
import { PROJECTS_DATA } from "@/domain/constants/projectsData";
import { useTranslation } from "@/i18n/useTranslation";

export default function ProjectsSection({ onContactClick }) {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.categoryKey === activeCategory);

  return (
    <section
      id="projects"
      style={{
        padding: "90px 5%",
        position: "relative",
        zIndex: 2,
        background: "#FFFFFF",
        borderTop: "1px solid #E2E8F0",
        borderBottom: "1px solid #E2E8F0",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <span
          style={{
            fontFamily: "'Orbitron',sans-serif",
            fontSize: 11,
            letterSpacing: 6,
            color: "#FF5500",
            fontWeight: 700,
          }}
        >
          {t("projects.subtitle")}
        </span>
        <h2
          style={{
            fontFamily: "'Orbitron',sans-serif",
            fontWeight: 900,
            fontSize: "clamp(26px, 4vw, 42px)",
            letterSpacing: "0.04em",
            marginTop: 8,
            color: "#0F172A",
          }}
        >
          {t("projects.title")}
        </h2>
        <p
          style={{
            fontFamily: "'Rajdhani',sans-serif",
            fontSize: "clamp(15px, 1.8vw, 17px)",
            color: "#64748B",
            marginTop: 8,
            maxWidth: 640,
            margin: "8px auto 0",
          }}
        >
          {t("projects.desc")}
        </p>
        <div
          style={{
            width: 50,
            height: 3,
            background: "#FF5500",
            margin: "18px auto 0",
            borderRadius: 2,
          }}
        />
      </div>

      {/* Category Filter Pills */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 12,
          flexWrap: "wrap",
          marginBottom: 44,
        }}
      >
        {[
          { key: "all", label: t("projects.categories.all") },
          { key: "games", label: t("projects.categories.games") },
          { key: "web", label: t("projects.categories.web") },
          { key: "mobile", label: t("projects.categories.mobile") },
          { key: "systems", label: t("projects.categories.systems") },
        ].map((cat) => {
          const isSelected = activeCategory === cat.key;
          return (
            <button
              key={cat.key}
              className="category-tab"
              onClick={() => setActiveCategory(cat.key)}
              style={{
                background: isSelected
                  ? "linear-gradient(135deg, #FF5500 0%, #FF8800 100%)"
                  : "#FFFFFF",
                border: isSelected ? "none" : "1px solid #CBD5E1",
                color: isSelected ? "#FFFFFF" : "#475569",
                padding: "8px 20px",
                borderRadius: 20,
                fontFamily: "'Orbitron',sans-serif",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 2,
                boxShadow: isSelected
                  ? "0 4px 14px rgba(255, 85, 0, 0.25)"
                  : "0 2px 6px rgba(0,0,0,0.02)",
              }}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Projects Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 28,
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {filteredProjects.map((p) => (
          <ProjectCard key={p.id} project={p} onContactClick={onContactClick} />
        ))}
      </div>
    </section>
  );
}
