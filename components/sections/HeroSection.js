"use client";

import RadarBg from "@/components/ui/RadarBg";
import { useTranslation } from "@/i18n/useTranslation";

export default function HeroSection({ onServicesClick, onProjectsClick }) {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        padding: "0 5% 40px 5%",
        background: "linear-gradient(180deg, #FFFFFF 0%, #FAFAFC 100%)",
      }}
    >
      <div className="hero-grid" style={{ width: "100%", position: "relative", zIndex: 2 }}>
        {/* Left Column */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span
            style={{
              fontFamily: "'Orbitron',sans-serif",
              fontSize: 13,
              letterSpacing: 6,
              color: "#0066FF",
              fontWeight: 700,
            }}
          >
            {t("hero.tagline")}
          </span>

          <h1
            style={{
              fontFamily: "'Orbitron',sans-serif",
              fontWeight: 900,
              fontSize: "clamp(32px, 5vw, 56px)",
              letterSpacing: "0.02em",
              lineHeight: 1.12,
              color: "#0F172A",
            }}
          >
            {t("hero.title1")}{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #0052FF 0%, #00C8FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t("hero.title2")}
            </span>
          </h1>

          <p
            style={{
              fontFamily: "'Rajdhani',sans-serif",
              fontWeight: 500,
              fontSize: "clamp(16px, 1.8vw, 19px)",
              color: "#475569",
              lineHeight: 1.6,
              maxWidth: 580,
            }}
          >
            {t("hero.description")}
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 10 }}>
            <button
              className="cta-btn"
              onClick={onServicesClick}
              style={{
                background: "linear-gradient(135deg, #0052FF 0%, #00C8FF 100%)",
                border: "none",
                color: "#FFFFFF",
                padding: "15px 32px",
                fontFamily: "'Orbitron',sans-serif",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 2,
                borderRadius: 6,
                cursor: "pointer",
                boxShadow: "0 6px 20px rgba(0, 102, 255, 0.28)",
              }}
            >
              {t("hero.btnServices")}
            </button>

            <button
              className="cta-btn"
              onClick={onProjectsClick}
              style={{
                background: "#FFFFFF",
                border: "2px solid #0066FF",
                color: "#0066FF",
                padding: "15px 32px",
                fontFamily: "'Orbitron',sans-serif",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 2,
                borderRadius: 6,
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(0,0,0,0.03)",
              }}
            >
              {t("hero.btnProjects")}
            </button>
          </div>

          {/* Metrics Grid */}
          <div className="metrics-grid">
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: 8,
                padding: "16px",
                display: "flex",
                gap: 12,
                alignItems: "center",
                boxShadow: "0 4px 12px rgba(15,23,42,0.03)",
              }}
            >
              <span style={{ fontSize: 24 }}>🚀</span>
              <div>
                <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 18, fontWeight: 900, color: "#0F172A" }}>
                  {t("hero.metrics.projectsCount")}
                </div>
                <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 9, letterSpacing: 2, color: "#0066FF", fontWeight: 700 }}>
                  {t("hero.metrics.projectsLabel")}
                </div>
              </div>
            </div>

            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: 8,
                padding: "16px",
                display: "flex",
                gap: 12,
                alignItems: "center",
                boxShadow: "0 4px 12px rgba(15,23,42,0.03)",
              }}
            >
              <span style={{ fontSize: 24 }}>💻</span>
              <div>
                <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 18, fontWeight: 900, color: "#0F172A" }}>
                  {t("hero.metrics.appsCount")}
                </div>
                <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 9, letterSpacing: 2, color: "#0066FF", fontWeight: 700 }}>
                  {t("hero.metrics.appsLabel")}
                </div>
              </div>
            </div>

            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: 8,
                padding: "16px",
                display: "flex",
                gap: 12,
                alignItems: "center",
                boxShadow: "0 4px 12px rgba(15,23,42,0.03)",
              }}
            >
              <span style={{ fontSize: 24 }}>🤝</span>
              <div>
                <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 18, fontWeight: 900, color: "#0F172A" }}>
                  {t("hero.metrics.clientsCount")}
                </div>
                <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 9, letterSpacing: 2, color: "#0066FF", fontWeight: 700 }}>
                  {t("hero.metrics.clientsLabel")}
                </div>
              </div>
            </div>

            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: 8,
                padding: "16px",
                display: "flex",
                gap: 12,
                alignItems: "center",
                boxShadow: "0 4px 12px rgba(15,23,42,0.03)",
              }}
            >
              <span style={{ fontSize: 24 }}>⚡</span>
              <div>
                <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 13, fontWeight: 900, color: "#0F172A" }}>
                  {t("hero.metrics.innovationLabel")}
                </div>
                <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 11, color: "#64748B" }}>
                  {t("hero.metrics.innovationSub")}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column Illustration */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            minHeight: 350,
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "90%",
              height: "90%",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0,102,255,0.15) 0%, transparent 70%)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              pointerEvents: "none",
            }}
          />
          <RadarBg />
          <img
            src="/imagebody.png"
            alt="Arvtech Studio Showcase"
            style={{
              maxWidth: "105%",
              height: "auto",
              position: "relative",
              zIndex: 2,
              filter: "drop-shadow(0 20px 30px rgba(0,102,255,0.15))",
            }}
          />
        </div>
      </div>
    </section>
  );
}
