"use client";

import ContactForm from "@/components/forms/ContactForm";
import { useTranslation } from "@/i18n/useTranslation";

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" style={{ padding: "90px 5%", position: "relative", zIndex: 2 }}>
      <div style={{ textAlign: "center", marginBottom: 54 }}>
        <span
          style={{
            fontFamily: "'Orbitron',sans-serif",
            fontSize: 11,
            letterSpacing: 6,
            color: "#0066FF",
            fontWeight: 700,
          }}
        >
          {t("contact.subtitle")}
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
          {t("contact.title")}
        </h2>
        <div
          style={{
            width: 50,
            height: 3,
            background: "#0066FF",
            margin: "18px auto 0",
            borderRadius: 2,
          }}
        />
      </div>

      <div style={{ maxWidth: 620, margin: "0 auto" }}>
        <ContactForm />
      </div>
    </section>
  );
}
