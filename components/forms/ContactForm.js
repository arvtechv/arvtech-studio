"use client";

import { useState } from "react";
import { useTranslation } from "@/i18n/useTranslation";
import { executeSendContactMessage } from "@/application/useCases/sendContactMessage";
import { SERVICES_DATA } from "@/domain/constants/servicesData";

const inputBase = {
  width: "100%",
  background: "#F8FAFC",
  border: "1px solid #CBD5E1",
  borderRadius: 6,
  padding: "12px 16px",
  color: "#0F172A",
  fontFamily: "var(--font-rajdhani), sans-serif",
  fontSize: 15,
  fontWeight: 500,
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

const labelBase = {
  fontFamily: "var(--font-orbitron), sans-serif",
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: 3,
  color: "#0066FF",
  display: "block",
  marginBottom: 6,
};

function handleFocus(e) {
  e.target.style.borderColor = "#0066FF";
  e.target.style.boxShadow = "0 0 0 3px rgba(0,102,255,0.12)";
}

function handleBlur(e) {
  e.target.style.borderColor = "#CBD5E1";
  e.target.style.boxShadow = "none";
}

export default function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", service: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const showStatus = (type, message) => {
    setStatus(type);
    setStatusMessage(message);
    setTimeout(() => {
      setStatus("");
      setStatusMessage("");
    }, 6000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await executeSendContactMessage(formData);
      setFormData({ name: "", email: "", service: "", message: "" });
      showStatus("success", t("contact.successMessage"));
    } catch (error) {
      console.error("ContactForm submission error:", error);
      showStatus("error", t("contact.errorMessage"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        borderRadius: 12,
        padding: "36px 32px",
        boxShadow: "0 10px 30px -5px rgba(0, 102, 255, 0.08)",
      }}
    >
      <div style={{ marginBottom: 20 }}>
        <label htmlFor="name" style={labelBase}>
          {t("contact.name")}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder={t("contact.namePlaceholder")}
          value={formData.name}
          onChange={handleChange}
          required
          autoComplete="name"
          style={inputBase}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>

      <div style={{ marginBottom: 20 }}>
        <label htmlFor="email" style={labelBase}>
          {t("contact.email")}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder={t("contact.emailPlaceholder")}
          value={formData.email}
          onChange={handleChange}
          required
          autoComplete="email"
          style={inputBase}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>

      <div style={{ marginBottom: 20 }}>
        <label htmlFor="service" style={labelBase}>
          {t("contact.service")}
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          style={inputBase}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          <option value="" disabled hidden>
            {t("contact.servicePlaceholder")}
          </option>
          {SERVICES_DATA.map((s) => (
            <option key={s.titleKey} value={t(s.titleKey)}>
              {t(s.titleKey)}
            </option>
          ))}
          <option value="Otro / Otro servicio">
            {t("contact.other")}
          </option>
        </select>
      </div>

      <div style={{ marginBottom: 28 }}>
        <label htmlFor="message" style={labelBase}>
          {t("contact.message")}
        </label>
        <textarea
          id="message"
          name="message"
          placeholder={t("contact.messagePlaceholder")}
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
          style={{ ...inputBase, resize: "vertical" }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>

      {status && (
        <div
          role="status"
          aria-live="polite"
          style={{
            padding: 14,
            marginBottom: 20,
            background: status === "success" ? "#F0FDF4" : "#FEF2F2",
            border: `1px solid ${status === "success" ? "#86EFAC" : "#FCA5A5"}`,
            borderRadius: 6,
            color: status === "success" ? "#166534" : "#991B1B",
            fontFamily: "var(--font-rajdhani), sans-serif",
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          {status === "success" ? "✅" : "❌"} {statusMessage}
        </div>
      )}

      <button
        type="submit"
        className="cta-btn"
        disabled={loading}
        style={{
          width: "100%",
          background: loading
            ? "#CBD5E1"
            : "linear-gradient(135deg, #0052FF 0%, #00C8FF 100%)",
          border: "none",
          color: "#FFFFFF",
          padding: "16px",
          fontFamily: "var(--font-orbitron), sans-serif",
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: 3,
          borderRadius: 6,
          cursor: loading ? "not-allowed" : "pointer",
          boxShadow: "0 6px 20px rgba(0, 102, 255, 0.28)",
        }}
      >
        {loading ? "ENVIANDO..." : t("contact.send").toUpperCase()}
      </button>
    </form>
  );
}