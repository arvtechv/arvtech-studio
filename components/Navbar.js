"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useTranslation } from "@/i18n/useTranslation";

function LogoMark() {
  return (
    <img
      src="/logo.png"
      alt="ARVTECH"
      style={{
        width: 52,
        height: 52,
        objectFit: "contain",
        filter: "drop-shadow(0 0 6px rgba(0,102,255,0.35))",
      }}
    />
  );
}

export default function Navbar() {
  const { lang, t, changeLang } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const NAV_ITEMS = [
    { key: "home", id: "home", href: "/#home" },
    { key: "services", id: "services", href: "/#services" },
    { key: "care", id: "care", isRoute: true, href: "/care" },
    { key: "projects", id: "projects", href: "/#projects" },
    { key: "about", id: "about", href: "/#about" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, item) => {
    setMenuOpen(false);

    if (item.isRoute) {
      if (pathname === item.href) {
        e.preventDefault();
      }
      return;
    }

    const targetId = item.id;

    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(targetId);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top: y, behavior: "smooth" });
      } else {
        window.location.hash = targetId;
      }
    }
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "0 6%",
          height: 76,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled ? "rgba(255, 255, 255, 0.96)" : "rgba(255, 255, 255, 0.88)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(226, 232, 240, 0.9)",
          boxShadow: scrolled ? "0 4px 20px rgba(0, 102, 255, 0.06)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        {/* Brand logo & title */}
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", gap: 14, textDecoration: "none" }}
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <LogoMark />
          <div>
            <div
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontWeight: 900,
                fontSize: 17,
                letterSpacing: 4,
                color: "#0F172A",
                lineHeight: 1.1,
              }}
            >
              ARVTECH
            </div>
            <div
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: 9,
                letterSpacing: 6,
                color: "#0066FF",
                fontWeight: 700,
                marginTop: -1,
              }}
            >
              STUDIO
            </div>
          </div>
        </Link>

        {/* Desktop Links Container */}
        <div
          className="desktop-nav-links"
          style={{ display: "flex", gap: 32, alignItems: "center" }}
        >
          {/* Navigation Links */}
          <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
            {NAV_ITEMS.map((item) => {
              const isActive = item.isRoute ? pathname === "/care" : false;
              return (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: 2,
                    color: isActive ? "#0066FF" : "#334155",
                    padding: "6px 0",
                    transition: "color 0.2s ease, transform 0.2s ease",
                    whiteSpace: "nowrap",
                    display: "inline-block",
                  }}
                  className="nav-link-hover"
                >
                  {t(`nav.${item.key}`).toUpperCase()}
                </a>
              );
            })}
          </div>

          {/* Action Group: Language Switcher & CTA Contact button */}
          <div style={{ display: "flex", gap: 14, alignItems: "center", marginLeft: 8 }}>
            <select
              onChange={(e) => changeLang(e.target.value)}
              value={lang}
              style={{
                background: "#F1F5F9",
                border: "1px solid #CBD5E1",
                color: "#0F172A",
                padding: "7px 12px",
                borderRadius: 6,
                fontFamily: "'Orbitron', sans-serif",
                cursor: "pointer",
                fontSize: 11,
                fontWeight: 700,
                outline: "none",
              }}
            >
              <option value="es">🇪🇸 ES</option>
              <option value="en">🇺🇸 EN</option>
            </select>

            <a
              href="/#contact"
              onClick={(e) => handleNavClick(e, { key: "contact", id: "contact", href: "/#contact" })}
              style={{
                background: "linear-gradient(135deg, #0052FF 0%, #00C8FF 100%)",
                border: "none",
                color: "#FFFFFF",
                padding: "11px 22px",
                borderRadius: 6,
                fontFamily: "'Orbitron', sans-serif",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 2,
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(0, 102, 255, 0.28)",
                whiteSpace: "nowrap",
                textDecoration: "none",
                display: "inline-block",
              }}
              className="cta-header-btn"
            >
              {t("hero.btnContact").toUpperCase()}
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Icon Button */}
        <button
          type="button"
          className="mobile-hamburger-btn"
          aria-label="Abrir menú de navegación"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setMenuOpen((prev) => !prev);
          }}
          style={{
            background: "transparent",
            border: "none",
            flexDirection: "column",
            gap: 5,
            cursor: "pointer",
            padding: "8px 12px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 26,
              height: 3,
              background: "#0066FF",
              borderRadius: 2,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              width: 26,
              height: 3,
              background: "#0066FF",
              borderRadius: 2,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              width: 26,
              height: 3,
              background: "#0066FF",
              borderRadius: 2,
              pointerEvents: "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile Fullscreen Drawer Menu Overlay with fluid transition */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 9999,
          background: "rgba(255, 255, 255, 0.98)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          display: "flex",
          flexDirection: "column",
          padding: "24px 7%",
          boxSizing: "border-box",
          overflowY: "auto",
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? "translateY(0)" : "translateY(-16px)",
          visibility: menuOpen ? "visible" : "hidden",
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease",
        }}
      >
        {/* Header bar inside drawer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 16,
            borderBottom: "1px solid #E2E8F0",
            marginBottom: 20,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <LogoMark />
            <span
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontWeight: 900,
                fontSize: 15,
                color: "#0F172A",
                letterSpacing: 2,
              }}
            >
              ARVTECH <span style={{ color: "#0066FF" }}>STUDIO</span>
            </span>
          </div>

          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setMenuOpen(false)}
            style={{
              background: "#F1F5F9",
              border: "1px solid #CBD5E1",
              borderRadius: "50%",
              width: 36,
              height: 36,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0F172A",
              transition: "transform 0.2s ease, background-color 0.2s ease",
            }}
            className="close-drawer-btn"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Navigation Links List */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={(e) => handleNavClick(e, item)}
              style={{
                textDecoration: "none",
                borderBottom: "1px solid #F1F5F9",
                color: "#0F172A",
                fontFamily: "'Orbitron', sans-serif",
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: 3,
                cursor: "pointer",
                padding: "14px 0",
                textAlign: "left",
                display: "block",
              }}
            >
              {t(`nav.${item.key}`).toUpperCase()}
            </a>
          ))}
        </div>

        {/* Action CTAs */}
        <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 16 }}>
          <a
            href="/#contact"
            onClick={(e) => handleNavClick(e, { key: "contact", id: "contact", href: "/#contact" })}
            style={{
              width: "100%",
              background: "linear-gradient(135deg, #0052FF 0%, #00C8FF 100%)",
              border: "none",
              color: "#FFFFFF",
              padding: "15px",
              borderRadius: 8,
              fontFamily: "'Orbitron', sans-serif",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 3,
              cursor: "pointer",
              boxShadow: "0 6px 20px rgba(0, 102, 255, 0.28)",
              textAlign: "center",
              textDecoration: "none",
              boxSizing: "border-box",
              display: "block",
            }}
          >
            {t("hero.btnContact").toUpperCase()}
          </a>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 8,
            }}
          >
            <span style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 14, color: "#64748B", fontWeight: 600 }}>
              Idioma / Language:
            </span>
            <select
              onChange={(e) => changeLang(e.target.value)}
              value={lang}
              style={{
                background: "#F1F5F9",
                border: "1px solid #CBD5E1",
                color: "#0F172A",
                padding: "8px 14px",
                borderRadius: 6,
                fontFamily: "'Orbitron', sans-serif",
                fontSize: 12,
                fontWeight: 700,
              }}
            >
              <option value="es">🇪🇸 Español</option>
              <option value="en">🇺🇸 English</option>
            </select>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .nav-link-hover:hover {
          color: #0066FF !important;
          transform: translateY(-1px);
        }
        .cta-header-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 102, 255, 0.38) !important;
        }
        .close-drawer-btn:hover {
          background-color: #E2E8F0 !important;
          transform: scale(1.08);
        }
      `}</style>
    </>
  );
}
