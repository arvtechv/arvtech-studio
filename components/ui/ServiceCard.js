"use client";

import { useTranslation } from "@/i18n/useTranslation";

export default function ServiceCard({ service }) {
  const { t } = useTranslation();

  return (
    <div
      className="service-card"
      style={{
        border: "1px solid #E2E8F0",
        borderRadius: 10,
        padding: "32px 28px",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 4px 15px rgba(15,23,42,0.03)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          fontFamily: "'Orbitron',sans-serif",
          fontSize: 9,
          letterSpacing: 3,
          color: "#0066FF",
          padding: "6px 12px",
          background: "#E0F2FE",
          borderBottomLeftRadius: 8,
          fontWeight: 700,
        }}
      >
        {service.tag}
      </div>
      <div style={{ fontSize: 36, marginBottom: 16 }}>{service.icon}</div>
      <h3
        style={{
          fontFamily: "'Orbitron',sans-serif",
          fontWeight: 700,
          fontSize: 16,
          letterSpacing: 2,
          color: "#0F172A",
          marginBottom: 10,
        }}
      >
        {t(service.titleKey)}
      </h3>
      <p
        style={{
          fontFamily: "'Rajdhani',sans-serif",
          fontSize: 15,
          color: "#475569",
          lineHeight: 1.65,
        }}
      >
        {t(service.descKey)}
      </p>
    </div>
  );
}
