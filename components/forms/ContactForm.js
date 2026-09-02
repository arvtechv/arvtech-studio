"use client";

import { useState } from "react";
import { useTranslation } from "@/i18n/useTranslation";
import { executeSendContactMessage } from "@/application/useCases/sendContactMessage";

export default function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", service: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

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
      setStatus("success");
      setFormData({ name: "", email: "", service: "", message: "" });
      setTimeout(() => setStatus(""), 4000);
    } catch (error) {
      console.error("ContactForm submission error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        borderRadius: 12,
        padding: "36px 32px",
        boxShadow: "0 10px 30px -5px rgba(0, 102, 255, 0.08)",
      }}
    >
      {[
        { id: "name", label: t("contact.name"), placeholder: t("contact.namePlaceholder"), type: "text" },
        { id: "email", label: t("contact.email"), placeholder: t("contact.emailPlaceholder"), type: "email" },
        { id: "service", label: t("contact.service"), placeholder: t("contact.servicePlaceholder"), type: "text" },
      ].map((f) => (
        <div key={f.id} style={{ marginBottom: 20 }}>
          <label
            style={{
              fontFamily: "'Orbitron',sans-serif",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: 3,
              color: "#0066FF",
              display: "block",
              marginBottom: 6,
            }}
          >
            {f.label}
          </label>
          <input
            type={f.type}
            name={f.id}
            placeholder={f.placeholder}
            value={formData[f.id]}
            onChange={handleChange}
            style={{
              width: "100%",
              background: "#F8FAFC",
              border: "1px solid #CBD5E1",
              borderRadius: 6,
              padding: "12px 16px",
              color: "#0F172A",
              fontFamily: "'Rajdhani',sans-serif",
              fontSize: 15,
              fontWeight: 500,
              outline: "none",
              transition: "border-color 0.2s, box-shadow 0.2s",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "#0066FF";
              e.target.style.boxShadow = "0 0 0 3px rgba(0,102,255,0.12)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#CBD5E1";
              e.target.style.boxShadow = "none";
            }}
          />
        </div>
      ))}

      <div style={{ marginBottom: 28 }}>
        <label
          style={{
            fontFamily: "'Orbitron',sans-serif",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: 3,
            color: "#0066FF",
            display: "block",
            marginBottom: 6,
          }}
        >
          {t("contact.message")}
        </label>
        <textarea
          name="message"
          placeholder={t("contact.messagePlaceholder")}
          value={formData.message}
          onChange={handleChange}
          rows={4}
          style={{
            width: "100%",
            background: "#F8FAFC",
            border: "1px solid #CBD5E1",
            borderRadius: 6,
            padding: "12px 16px",
            color: "#0F172A",
            fontFamily: "'Rajdhani',sans-serif",
            fontSize: 15,
            fontWeight: 500,
            outline: "none",
            resize: "vertical",
            transition: "border-color 0.2s, box-shadow 0.2s",
          }}
          onFocus={(e) => {
            e.target.style.borderColor = "#0066FF";
            e.target.style.boxShadow = "0 0 0 3px rgba(0,102,255,0.12)";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "#CBD5E1";
            e.target.style.boxShadow = "none";
          }}
        />
      </div>

      {status === "success" && (
        <div
          style={{
            padding: 14,
            marginBottom: 20,
            background: "#F0FDF4",
            border: "1px solid #86EFAC",
            borderRadius: 6,
            color: "#166534",
            fontFamily: "'Rajdhani',sans-serif",
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          ✅ {t("contact.successMessage") || "¡Mensaje enviado correctamente!"}
        </div>
      )}

      {status === "error" && (
        <div
          style={{
            padding: 14,
            marginBottom: 20,
            background: "#FEF2F2",
            border: "1px solid #FCA5A5",
            borderRadius: 6,
            color: "#991B1B",
            fontFamily: "'Rajdhani',sans-serif",
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          ❌ {t("contact.errorMessage") || "Error al enviar. Intenta de nuevo."}
        </div>
      )}

      <button
        className="cta-btn"
        onClick={handleSubmit}
        disabled={loading}
        style={{
          width: "100%",
          background: loading
            ? "#CBD5E1"
            : "linear-gradient(135deg, #0052FF 0%, #00C8FF 100%)",
          border: "none",
          color: "#FFFFFF",
          padding: "16px",
          fontFamily: "'Orbitron',sans-serif",
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
    </div>
  );
}
