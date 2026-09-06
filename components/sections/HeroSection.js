"use client";

import RadarBg from "@/components/ui/RadarBg";
import Image from "next/image";
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
              fontFamily: "var(--font-orbitron), sans-serif",
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
              fontFamily: "var(--font-orbitron), sans-serif",
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
              fontFamily: "var(--font-rajdhani), sans-serif",
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
                fontFamily: "var(--font-orbitron), sans-serif",
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
                fontFamily: "var(--font-orbitron), sans-serif",
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
                <div style={{ fontFamily: "var(--font-orbitron), sans-serif", fontSize: 18, fontWeight: 900, color: "#0F172A" }}>
                  {t("hero.metrics.projectsCount")}
                </div>
                <div style={{ fontFamily: "var(--font-orbitron), sans-serif", fontSize: 9, letterSpacing: 2, color: "#0066FF", fontWeight: 700 }}>
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
                <div style={{ fontFamily: "var(--font-orbitron), sans-serif", fontSize: 18, fontWeight: 900, color: "#0F172A" }}>
                  {t("hero.metrics.appsCount")}
                </div>
                <div style={{ fontFamily: "var(--font-orbitron), sans-serif", fontSize: 9, letterSpacing: 2, color: "#0066FF", fontWeight: 700 }}>
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
                <div style={{ fontFamily: "var(--font-orbitron), sans-serif", fontSize: 18, fontWeight: 900, color: "#0F172A" }}>
                  {t("hero.metrics.clientsCount")}
                </div>
                <div style={{ fontFamily: "var(--font-orbitron), sans-serif", fontSize: 9, letterSpacing: 2, color: "#0066FF", fontWeight: 700 }}>
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
                <div style={{ fontFamily: "var(--font-orbitron), sans-serif", fontSize: 13, fontWeight: 900, color: "#0F172A" }}>
                  {t("hero.metrics.innovationLabel")}
                </div>
                <div style={{ fontFamily: "var(--font-rajdhani), sans-serif", fontSize: 11, color: "#64748B" }}>
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
            minHeight: 400,
            perspective: "1000px"
          }}
        >
          {/* Glowing background blob */}
          <div
            style={{
              position: "absolute",
              width: "120%",
              height: "120%",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0,102,255,0.15) 0%, transparent 60%)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
          
          {/* 3D Floating Image Card */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 640,
              aspectRatio: "16/9",
              borderRadius: 16,
              overflow: "hidden",
              zIndex: 2,
              boxShadow: "0 30px 60px -15px rgba(0,102,255,0.3)",
              border: "1px solid rgba(255,255,255,0.6)",
              transform: "rotateY(-8deg) rotateX(4deg)",
              transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.5s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
               e.currentTarget.style.transform = "rotateY(0deg) rotateX(0deg) scale(1.02)";
               e.currentTarget.style.boxShadow = "0 35px 70px -15px rgba(0,102,255,0.4)";
            }}
            onMouseLeave={(e) => {
               e.currentTarget.style.transform = "rotateY(-8deg) rotateX(4deg) scale(1)";
               e.currentTarget.style.boxShadow = "0 30px 60px -15px rgba(0,102,255,0.3)";
            }}
          >
            <Image
              src="/images/hero_main.jpg"
              alt="Arvtech Studio Showcase"
              fill
              priority
              style={{
                objectFit: "cover",
              }}
            />
            {/* Glassmorphism overlay */}
            <div style={{
               position: "absolute",
               bottom: 0,
               left: 0,
               right: 0,
               padding: "20px 24px",
               background: "rgba(15, 23, 42, 0.75)",
               backdropFilter: "blur(12px)",
               borderTop: "1px solid rgba(255,255,255,0.15)",
               display: "flex",
               justifyContent: "space-between",
               alignItems: "center"
            }}>
               <div>
                 <div style={{ fontFamily: "var(--font-orbitron), sans-serif", fontWeight: 800, fontSize: 16, color: "#FFFFFF", letterSpacing: 2 }}>ARVTECH STUDIO</div>
                 <div style={{ fontFamily: "var(--font-rajdhani), sans-serif", fontSize: 14, color: "#94A3B8", fontWeight: 600 }}>Building the future of digital solutions.</div>
               </div>
               <div style={{
                 background: "linear-gradient(135deg, #0052FF 0%, #00C8FF 100%)",
                 width: 40,
                 height: 40,
                 borderRadius: "50%",
                 display: "flex",
                 justifyContent: "center",
                 alignItems: "center",
                 color: "#FFF",
                 fontSize: 20
               }}>
                 ✨
               </div>
            </div>
          </div>
          
          {/* Floating tech badge */}
          <div style={{
             position: "absolute",
             top: "15%",
             right: "0%",
             background: "#FFFFFF",
             padding: "12px 20px",
             borderRadius: 12,
             boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
             zIndex: 3,
             border: "1px solid #E2E8F0",
             display: "flex",
             alignItems: "center",
             gap: 8,
             transform: "translateZ(30px)"
          }}>
             <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#10B981", boxShadow: "0 0 10px #10B981" }} />
             <span style={{ fontFamily: "var(--font-orbitron), sans-serif", fontSize: 11, fontWeight: 800, color: "#0F172A", letterSpacing: 1 }}>
               SYSTEMS ONLINE
             </span>
          </div>
        </div>
      </div>
    </section>
  );
}
