"use client";

import LogoMark from "@/components/ui/LogoMark";
import { useTranslation } from "@/i18n/useTranslation";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      style={{
        borderTop: "1px solid #E2E8F0",
        padding: "44px 5%",
        background: "#F1F5F9",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 28,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <LogoMark />
          <div>
            <div
              style={{
                fontFamily: "'Orbitron',sans-serif",
                fontWeight: 900,
                fontSize: 16,
                letterSpacing: 4,
                color: "#0F172A",
              }}
            >
              ARVTECH
            </div>
            <div
              style={{
                fontFamily: "'Orbitron',sans-serif",
                fontSize: 8,
                letterSpacing: 6,
                color: "#FF5500",
                fontWeight: 700,
              }}
            >
              STUDIO
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: "'Orbitron',sans-serif",
              fontSize: 11,
              letterSpacing: 3,
              color: "#FF5500",
              marginBottom: 6,
              fontWeight: 700,
            }}
          >
            ARVTECH.STUDIO
          </div>
          <div
            style={{
              fontFamily: "'Rajdhani',sans-serif",
              fontSize: 13,
              color: "#64748B",
              fontWeight: 500,
            }}
          >
            © {new Date().getFullYear()} ARVTECH STUDIO. {t("footer.rights")}
          </div>
        </div>
      </div>
    </footer>
  );
}
