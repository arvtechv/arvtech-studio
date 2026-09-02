"use client";

import { useTranslation } from "@/i18n/useTranslation";

export default function CtaBand() {
  const { t } = useTranslation();

  return (
    <section
      style={{
        padding: "70px 5%",
        position: "relative",
        zIndex: 2,
        textAlign: "center",
        background: "linear-gradient(135deg, #FFF5F0 0%, #FFF0EB 100%)",
        borderTop: "1px solid rgba(255, 85, 0, 0.15)",
        borderBottom: "1px solid rgba(255, 85, 0, 0.15)",
      }}
    >
      <p
        style={{
          fontFamily: "'Orbitron',sans-serif",
          fontSize: "clamp(10px, 1.5vw, 12px)",
          letterSpacing: 6,
          color: "#64748B",
          marginBottom: 16,
          fontWeight: 700,
        }}
      >
        {t("cta.subtitle")}
      </p>
      <h2
        style={{
          fontFamily: "'Orbitron',sans-serif",
          fontWeight: 900,
          fontSize: "clamp(24px, 4vw, 48px)",
          letterSpacing: "0.06em",
        }}
      >
        <span style={{ color: "#0F172A" }}>{t("cta.title")} </span>
        <span style={{ color: "#FF5500" }}>{t("cta.highlight")}</span>
      </h2>
      <p
        style={{
          fontFamily: "'Rajdhani',sans-serif",
          fontSize: "clamp(15px, 1.8vw, 18px)",
          marginTop: 12,
          color: "#475569",
          fontWeight: 600,
        }}
      >
        {t("cta.subtitle2") || t("cta.subtitle")}
      </p>
    </section>
  );
}
