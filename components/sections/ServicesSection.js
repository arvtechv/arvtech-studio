"use client";

import ServiceCard from "@/components/ui/ServiceCard";
import { SERVICES_DATA } from "@/domain/constants/servicesData";
import { useTranslation } from "@/i18n/useTranslation";

export default function ServicesSection() {
  const { t } = useTranslation();

  return (
    <section id="services" style={{ padding: "90px 5%", position: "relative", zIndex: 2 }}>
      <div style={{ textAlign: "center", marginBottom: 54 }}>
        <span
          style={{
            fontFamily: "'Orbitron',sans-serif",
            fontSize: 11,
            letterSpacing: 6,
            color: "#FF5500",
            fontWeight: 700,
          }}
        >
          {t("services.subtitle")}
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
          {t("services.title")}
        </h2>
        <p
          style={{
            fontFamily: "'Rajdhani',sans-serif",
            fontSize: "clamp(15px, 1.8vw, 17px)",
            color: "#64748B",
            marginTop: 8,
          }}
        >
          {t("services.desc")}
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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {SERVICES_DATA.map((s, i) => (
          <ServiceCard key={i} service={s} />
        ))}
      </div>
    </section>
  );
}
