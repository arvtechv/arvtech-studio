"use client";

import { useTranslation } from "@/i18n/useTranslation";
import Image from "next/image";

export default function ServiceCard({ service }) {
  const { t } = useTranslation();

  return (
    <div
      className="service-card"
      style={{
        border: "1px solid #E2E8F0",
        borderRadius: 10,
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 4px 15px rgba(15,23,42,0.03)",
        display: "flex",
        flexDirection: "column",
        background: "#FFFFFF",
      }}
    >
      {/* Optional Header Image */}
      {service.bgImage && (
        <div style={{ position: "relative", width: "100%", height: 160 }}>
          <Image
            src={service.bgImage}
            alt={t(service.titleKey)}
            fill
            style={{ objectFit: "cover" }}
          />
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)",
          }} />
        </div>
      )}

      {/* Tag */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          fontFamily: "var(--font-orbitron), sans-serif",
          fontSize: 9,
          letterSpacing: 3,
          color: service.bgImage ? "#FFFFFF" : "#0066FF",
          padding: "6px 12px",
          background: service.bgImage ? "rgba(0,0,0,0.4)" : "#E0F2FE",
          backdropFilter: service.bgImage ? "blur(4px)" : "none",
          borderBottomLeftRadius: 8,
          fontWeight: 700,
          zIndex: 2,
        }}
      >
        {service.tag}
      </div>

      <div style={{ padding: "32px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 36, marginBottom: 16, marginTop: service.bgImage ? -10 : 0 }}>
          {service.icon}
        </div>
        <h3
          style={{
            fontFamily: "var(--font-orbitron), sans-serif",
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
            fontFamily: "var(--font-rajdhani), sans-serif",
            fontSize: 15,
            color: "#475569",
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          {t(service.descKey)}
        </p>
      </div>
    </div>
  );
}
