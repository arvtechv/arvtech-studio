"use client";

import { useTranslation } from "@/i18n/useTranslation";

export default function ValueCard({ valueItem }) {
  const { t } = useTranslation();

  return (
    <div
      className="value-card"
      style={{
        border: "1px solid #E2E8F0",
        borderRadius: 10,
        padding: "32px 24px",
        textAlign: "center",
        boxShadow: "0 4px 15px rgba(15,23,42,0.03)",
      }}
    >
      <div style={{ fontSize: 36, marginBottom: 14 }}>{valueItem.icon}</div>
      <h4
        style={{
          fontFamily: "'Orbitron',sans-serif",
          fontWeight: 700,
          fontSize: 14,
          letterSpacing: 3,
          color: "#0066FF",
          marginBottom: 8,
        }}
      >
        {t(valueItem.labelKey)}
      </h4>
      <p
        style={{
          fontFamily: "'Rajdhani',sans-serif",
          fontSize: 15,
          color: "#475569",
          lineHeight: 1.6,
        }}
      >
        {t(valueItem.descKey)}
      </p>
    </div>
  );
}
