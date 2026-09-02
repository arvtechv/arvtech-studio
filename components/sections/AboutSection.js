"use client";

import LogoMark from "@/components/ui/LogoMark";
import ValueCard from "@/components/ui/ValueCard";
import { VALUES_DATA } from "@/domain/constants/valuesData";
import { useTranslation } from "@/i18n/useTranslation";

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" style={{ padding: "90px 5%", position: "relative", zIndex: 2 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Main About Block */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 60,
            alignItems: "center",
            marginBottom: 70,
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "'Orbitron',sans-serif",
                fontSize: 11,
                letterSpacing: 6,
                color: "#0066FF",
                fontWeight: 700,
              }}
            >
              {t("about.subtitle")}
            </span>
            <h2
              style={{
                fontFamily: "'Orbitron',sans-serif",
                fontWeight: 900,
                fontSize: "clamp(24px, 3.5vw, 40px)",
                letterSpacing: "0.04em",
                marginTop: 8,
                color: "#0F172A",
                lineHeight: 1.25,
              }}
            >
              {t("about.title")}
            </h2>
            <div
              style={{
                width: 40,
                height: 3,
                background: "#0066FF",
                margin: "20px 0",
                borderRadius: 2,
              }}
            />
            <p
              style={{
                fontFamily: "'Rajdhani',sans-serif",
                fontSize: 17,
                color: "#475569",
                lineHeight: 1.8,
                marginBottom: 16,
              }}
            >
              {t("about.p1")}
            </p>
            <p
              style={{
                fontFamily: "'Rajdhani',sans-serif",
                fontSize: 17,
                color: "#475569",
                lineHeight: 1.8,
              }}
            >
              {t("about.p2")}
            </p>

            <div style={{ marginTop: 36, display: "flex", gap: 32 }}>
              <div>
                <div
                  style={{
                    fontFamily: "'Orbitron',sans-serif",
                    fontSize: 32,
                    fontWeight: 900,
                    color: "#0066FF",
                  }}
                >
                  4+
                </div>
                <div
                  style={{
                    fontFamily: "'Rajdhani',sans-serif",
                    fontSize: 12,
                    letterSpacing: 2,
                    color: "#64748B",
                    fontWeight: 600,
                  }}
                >
                  {t("about.services")}
                </div>
              </div>
              <div style={{ width: 1, background: "#CBD5E1" }} />
              <div>
                <div
                  style={{
                    fontFamily: "'Orbitron',sans-serif",
                    fontSize: 32,
                    fontWeight: 900,
                    color: "#0066FF",
                  }}
                >
                  100%
                </div>
                <div
                  style={{
                    fontFamily: "'Rajdhani',sans-serif",
                    fontSize: 12,
                    letterSpacing: 2,
                    color: "#64748B",
                    fontWeight: 600,
                  }}
                >
                  {t("about.quality")}
                </div>
              </div>
            </div>
          </div>

          {/* Logo Circular Badge */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* Outer rotating dashed ring */}
            <div
              style={{
                position: "absolute",
                width: 320,
                height: 320,
                border: "1.5px dashed rgba(0,200,255,0.4)",
                borderRadius: "50%",
                animation: "rotateSlow 18s linear infinite",
              }}
            />
            {/* Inner counter-rotating ring */}
            <div
              style={{
                position: "absolute",
                width: 295,
                height: 295,
                border: "1px dashed rgba(0,102,255,0.25)",
                borderRadius: "50%",
                animation: "rotateSlow 30s linear infinite reverse",
              }}
            />
            {/* Glow pulse backdrop */}
            <div
              style={{
                position: "absolute",
                width: 260,
                height: 260,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(0,102,255,0.18) 0%, transparent 70%)",
                animation: "pulse 3s ease-in-out infinite",
              }}
            />
            {/* The circular logo image */}
            <img
              src="/logo_circle_blue.png"
              alt="Arvtech Studio"
              style={{
                width: 270,
                height: 270,
                borderRadius: "50%",
                objectFit: "cover",
                boxShadow:
                  "0 0 0 3px rgba(0,200,255,0.5), 0 0 30px rgba(0,102,255,0.35), 0 20px 50px rgba(0,102,255,0.2)",
                position: "relative",
                zIndex: 2,
              }}
            />
          </div>
        </div>

        {/* Integrated Values Block */}
        <div style={{ borderTop: "1px solid #E2E8F0", paddingTop: 60 }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <span
              style={{
                fontFamily: "'Orbitron',sans-serif",
                fontSize: 11,
                letterSpacing: 6,
                color: "#0066FF",
                fontWeight: 700,
              }}
            >
              {t("values.subtitle")}
            </span>
            <h3
              style={{
                fontFamily: "'Orbitron',sans-serif",
                fontWeight: 900,
                fontSize: "clamp(24px, 3.5vw, 36px)",
                letterSpacing: "0.04em",
                marginTop: 8,
                color: "#0F172A",
              }}
            >
              {t("values.title")}
            </h3>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 24,
              maxWidth: 1000,
              margin: "0 auto",
            }}
          >
            {VALUES_DATA.map((v, i) => (
              <ValueCard key={i} valueItem={v} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
