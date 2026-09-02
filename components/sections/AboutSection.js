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
                color: "#FF5500",
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
                background: "#FF5500",
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
                    color: "#FF5500",
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
                    color: "#FF5500",
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

          {/* Logo Showcase Box */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "relative",
                width: 280,
                height: 280,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#FFFFFF",
                borderRadius: "50%",
                boxShadow: "0 20px 40px rgba(15,23,42,0.06)",
                border: "1px solid #E2E8F0",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: -10,
                  border: "1px dashed rgba(255,85,0,0.3)",
                  borderRadius: "50%",
                  animation: "rotateSlow 25s linear infinite",
                }}
              />
              <LogoMark />
            </div>
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
                color: "#FF5500",
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
