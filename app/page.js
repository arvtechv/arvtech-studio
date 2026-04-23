"use client"

import { useState, useEffect, useRef } from "react";
import { useTranslation } from "@/i18n/useTranslation";


const NAV_LINKS = ["Home", "Services", "About", "Values", "Contact"];

const SERVICES = [
  { icon: "🎮", titleKey: "services.games.title", descKey: "services.games.desc", tag: "GAMES" },
  { icon: "📱", titleKey: "services.apps.title", descKey: "services.apps.desc", tag: "APPS" },
  { icon: "⚙️", titleKey: "services.automation.title", descKey: "services.automation.desc", tag: "AUTOMATION" },
  { icon: "🌐", titleKey: "services.web.title", descKey: "services.web.desc", tag: "WEB" },
];

const VALUES = [
  { icon: "🚀", labelKey: "values.innovation.label", descKey: "values.innovation.desc" },
  { icon: "💎", labelKey: "values.quality.label", descKey: "values.quality.desc" },
  { icon: "🔥", labelKey: "values.passion.label", descKey: "values.passion.desc" },
  { icon: "🛡️", labelKey: "values.reliability.label", descKey: "values.reliability.desc" },
];

const COLORS = [
  { hex: "#FF4D00", label: "PRIMARY" },
  { hex: "#FF8A00", label: "ACCENT" },
  { hex: "#E6E666", label: "LIGHT" },
  { hex: "#1A1A1A", label: "DARK" },
  { hex: "#0D1117", label: "BG" },
];

// Particle system component
function Particles() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: -Math.random() * 0.6 - 0.2,
      opacity: Math.random() * 0.6 + 0.2,
      color: Math.random() > 0.5 ? "#FF4D00" : "#FF8A00",
    }));
    let animId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
        if (p.x < -10 || p.x > canvas.width + 10) { p.x = Math.random() * canvas.width; }
      });
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(animate);
    };
    animate();
    const handleResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener("resize", handleResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", handleResize); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 0 }} />;
}

// Animated A Logo SVG
function LogoMark({ size = 80, glow = true }) {
  return (
    <img src="/logo.png" alt="ARVTECH" style={{ width: 74, height: 56 }} />
  );
}

// Radar circle background
function RadarBg() {
  return (
    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 500, height: 500, pointerEvents: "none" }}>
      {[1,2,3,4].map(i => (
        <div key={i} style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: i * 110, height: i * 110,
          border: "1px solid rgba(255,77,0,0.15)",
          borderRadius: "50%",
          animation: `pulse ${2 + i * 0.5}s ease-in-out infinite`,
        }} />
      ))}
      {/* crosshairs */}
      <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: 1, background: "rgba(255,77,0,0.1)", transform: "translateY(-50%)" }} />
      <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 1, background: "rgba(255,77,0,0.1)", transform: "translateX(-50%)" }} />
    </div>
  );
}

function ContactForm({ t }) {
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', service: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {[
        { id: "name", label: t("contact.name"), placeholder: t("contact.namePlaceholder"), type: "text" },
        { id: "email", label: t("contact.email"), placeholder: t("contact.emailPlaceholder"), type: "email" },
        { id: "service", label: t("contact.service"), placeholder: t("contact.servicePlaceholder"), type: "text" },
      ].map((f) => (
        <div key={f.id} style={{ marginBottom: 24 }}>
          <label style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 10, letterSpacing: 4, color: "#FF4D00", display: "block", marginBottom: 8 }}>{f.label}</label>
          <input 
            type={f.type} 
            name={f.id}
            placeholder={f.placeholder} 
            value={formData[f.id]}
            onChange={handleChange}
            style={{
              width: "100%", background: "rgba(255,77,0,0.05)",
              border: "1px solid rgba(255,77,0,0.3)", borderRadius: 4,
              padding: "14px 18px", color: "#fff",
              fontFamily: "'Rajdhani',sans-serif", fontSize: 15,
              outline: "none",
            }} 
            onFocus={e => e.target.style.borderColor = "#FF4D00"}
            onBlur={e => e.target.style.borderColor = "rgba(255,77,0,0.3)"} 
          />
        </div>
      ))}

      <div style={{ marginBottom: 32 }}>
        <label style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 10, letterSpacing: 4, color: "#FF4D00", display: "block", marginBottom: 8 }}>{t("contact.message")}</label>
        <textarea 
          name="message"
          placeholder={t("contact.messagePlaceholder")} 
          value={formData.message}
          onChange={handleChange}
          rows={5} 
          style={{
            width: "100%", background: "rgba(255,77,0,0.05)",
            border: "1px solid rgba(255,77,0,0.3)", borderRadius: 4,
            padding: "14px 18px", color: "#fff",
            fontFamily: "'Rajdhani',sans-serif", fontSize: 15,
            outline: "none", resize: "vertical",
          }} 
          onFocus={e => e.target.style.borderColor = "#FF4D00"}
          onBlur={e => e.target.style.borderColor = "rgba(255,77,0,0.3)"} 
        />
      </div>

      {status === 'success' && (
        <div style={{ padding: 16, marginBottom: 16, background: "rgba(76,175,80,0.2)", border: "1px solid #4CAF50", borderRadius: 4, color: "#4CAF50", fontFamily: "'Rajdhani',sans-serif", fontSize: 14 }}>
          ✅ {t("contact.successMessage") || "¡Mensaje enviado correctamente!"}
        </div>
      )}

      {status === 'error' && (
        <div style={{ padding: 16, marginBottom: 16, background: "rgba(244,67,54,0.2)", border: "1px solid #F44336", borderRadius: 4, color: "#F44336", fontFamily: "'Rajdhani',sans-serif", fontSize: 14 }}>
          ❌ {t("contact.errorMessage") || "Error al enviar. Intenta de nuevo."}
        </div>
      )}

      <button 
        className="cta-btn" 
        onClick={handleSubmit}
        disabled={loading}
        style={{
          width: "100%", background: loading ? "rgba(255,77,0,0.5)" : "linear-gradient(135deg,#FF4D00,#FF8A00)",
          border: "none", color: "#fff", padding: "18px",
          fontFamily: "'Orbitron',sans-serif", fontSize: 13, fontWeight: 700,
          letterSpacing: 4, borderRadius: 4, cursor: loading ? "not-allowed" : "pointer",
          boxShadow: "0 0 30px rgba(255,77,0,0.4)", animation: "borderGlow 3s infinite",
          opacity: loading ? 0.7 : 1,
        }}
      >
        {loading ? "ENVIANDO..." : t("contact.send")}
      </button>
    </>
  );
}


export default function ArvtechStudio() {
  const { lang, t, changeLang, mounted } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  const NAV_LINKS = ["home", "services", "about", "values", "contact"];


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
    setActiveSection(id);
  };

  return (
    <div style={{ fontFamily: "'Rajdhani', 'Orbitron', sans-serif", background: "#0D1117", color: "#fff", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0D1117; }
        ::-webkit-scrollbar-thumb { background: #FF4D00; border-radius: 2px; }
        @keyframes pulse { 0%,100%{opacity:0.3;transform:translate(-50%,-50%) scale(1)} 50%{opacity:0.7;transform:translate(-50%,-50%) scale(1.03)} }
        @keyframes floatUp { 0%{transform:translateY(30px);opacity:0} 100%{transform:translateY(0);opacity:1} }
        @keyframes glowPulse { 0%,100%{text-shadow:0 0 20px #FF4D00aa} 50%{text-shadow:0 0 40px #FF8A00,0 0 80px #FF4D00aa} }
        @keyframes rotateSlow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes fadeIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes borderGlow { 0%,100%{box-shadow:0 0 5px #FF4D00} 50%{box-shadow:0 0 20px #FF4D00,0 0 40px #FF8A0066} }
        .nav-link { cursor:pointer; transition: color 0.2s; letter-spacing:2px; font-size:13px; font-weight:600; }
        .nav-link:hover { color:#FF8A00 !important; }
        .service-card { transition: transform 0.3s, box-shadow 0.3s; }
        .service-card:hover { transform:translateY(-8px) !important; box-shadow:0 20px 60px rgba(255,77,0,0.25) !important; }
        .value-card { transition: transform 0.3s, border-color 0.3s; }
        .value-card:hover { transform:scale(1.05); border-color:#FF4D00 !important; }
        .cta-btn { transition: all 0.3s; cursor:pointer; }
        .cta-btn:hover { background:linear-gradient(135deg,#FF8A00,#FF4D00) !important; box-shadow:0 0 30px #FF4D00aa !important; transform:translateY(-2px); }
        .color-swatch { transition: transform 0.2s; cursor:default; }
        .color-swatch:hover { transform:scale(1.1); }
        .social-icon { transition: color 0.2s, transform 0.2s; cursor:pointer; }
        .social-icon:hover { color:#FF8A00 !important; transform:scale(1.2); }
        .section-anim { animation: fadeIn 0.8s ease both; }
      `}</style>

      <Particles />

      {/* ── NAVBAR ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 5%",
        height: 70,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(13,17,23,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,77,0,0.2)" : "none",
        transition: "all 0.4s",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }} onClick={() => scrollTo("home")}>
          <LogoMark size={38} glow />
          <div>
            <div style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 900, fontSize: 16, letterSpacing: 4, color: "#fff" }}>ARVTECH</div>
            <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 9, letterSpacing: 6, color: "#FF4D00", marginTop: -2 }}>STUDIO</div>
          </div>
        </div>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="desktop-nav">
          {NAV_LINKS.map(l => (
          <span key={l} className="nav-link" onClick={() => scrollTo(l)}
            style={{ color: activeSection === l ? "#FF4D00" : "rgba(255,255,255,0.75)", fontFamily: "'Orbitron',sans-serif" }}>
            {t(`nav.${l}`).toUpperCase()}
          </span>
          ))}

              {/* SELECTOR DE IDIOMA */}
          <select onChange={(e) => changeLang(e.target.value)} value={lang}
            style={{
              background: "rgba(255,77,0,0.1)",
              border: "1px solid rgba(255,77,0,0.3)",
              color: "#FF4D00",
              padding: "8px 12px",
              borderRadius: 4,
              fontFamily: "'Orbitron',sans-serif",
              cursor: "pointer",
              fontSize: 11,
              fontWeight: 700
            }}>
            <option value="es">🇪🇸 ES</option>
            <option value="en">🇺🇸 EN</option>
          </select>

          <button className="cta-btn" onClick={() => scrollTo("Contact")} style={{
            background: "linear-gradient(135deg,#FF4D00,#FF8A00)", border: "none",
            color: "#fff", padding: "10px 24px", borderRadius: 4,
            fontFamily: "'Orbitron',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 2,
            cursor: "pointer"
          }}>{t("hero.btnContact").toUpperCase()}</button>
        </div>

        {/* Hamburger */}
        <div style={{ display: "none", flexDirection: "column", gap: 5, cursor: "pointer" }} id="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}>
          {[0,1,2].map(i => <div key={i} style={{ width: 24, height: 2, background: menuOpen && i===1 ? "transparent" : "#FF4D00" }} />)}
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: 70, left: 0, right: 0, zIndex: 99,
          background: "rgba(13,17,23,0.98)", backdropFilter: "blur(20px)",
          padding: "24px 5%", display: "flex", flexDirection: "column", gap: 20,
          borderBottom: "1px solid rgba(255,77,0,0.3)"
        }}>
          {NAV_LINKS.map(l => (
            <span key={l} className="nav-link" onClick={() => scrollTo(l)}
              style={{ color: "#fff", fontFamily: "'Orbitron',sans-serif", fontSize: 14, letterSpacing: 3 }}>
              {t(`nav.${l}`).toUpperCase()}
            </span>
          ))}
        </div>
      )}

      {/* ── HERO ── */}
      <section id="home" style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 5%", paddingTop: 100 }}>
        <RadarBg />

        {/* Orange glow circle behind logo */}
        <div style={{
          position: "absolute", width: 320, height: 320, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,77,0,0.15) 0%, transparent 70%)",
          top: "50%", left: "50%", transform: "translate(-50%,-60%)", pointerEvents: "none"
        }} />

        <div style={{ position: "relative", zIndex: 2, animation: "floatUp 1s ease both" }}>
          <LogoMark size={160} glow />
        </div>

        <h1 style={{
          fontFamily: "'Orbitron',sans-serif", fontWeight: 900,
          fontSize: "clamp(40px,8vw,96px)", letterSpacing: "0.12em",
          background: "linear-gradient(180deg,#ffffff 40%,rgba(255,255,255,0.5) 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          marginTop: 24, lineHeight: 1, position: "relative", zIndex: 2,
          animation: "floatUp 1s 0.2s ease both",
        }}>
          ARVTECH
        </h1>

        <div style={{
          fontFamily: "'Orbitron',sans-serif", fontSize: "clamp(14px,2.5vw,22px)",
          letterSpacing: "0.5em", color: "#FF4D00",
          display: "flex", alignItems: "center", gap: 12, marginTop: 4,
          animation: "floatUp 1s 0.35s ease both", position: "relative", zIndex: 2,
        }}>
          <span style={{ display: "block", width: 40, height: 1, background: "linear-gradient(to right,transparent,#FF4D00)" }} />
          STUDIO
          <span style={{ display: "block", width: 40, height: 1, background: "linear-gradient(to left,transparent,#FF4D00)" }} />
        </div>

        <p style={{
          fontFamily: "'Rajdhani',sans-serif", fontWeight: 400,
          fontSize: "clamp(13px,1.5vw,16px)", letterSpacing: "0.35em",
          color: "rgba(255,255,255,0.55)", marginTop: 20,
          animation: "floatUp 1s 0.5s ease both", position: "relative", zIndex: 2,
        }}>
          {t("hero.tagline")}
        </p>

        <p style={{
          fontFamily: "'Rajdhani',sans-serif", fontWeight: 300,
          fontSize: "clamp(15px,1.8vw,20px)", color: "rgba(255,255,255,0.7)",
          maxWidth: 600, marginTop: 32, lineHeight: 1.8,
          animation: "floatUp 1s 0.65s ease both", position: "relative", zIndex: 2,
        }}>
          {t("hero.description")}
        </p>

        <div style={{ display: "flex", gap: 16, marginTop: 48, flexWrap: "wrap", justifyContent: "center", position: "relative", zIndex: 2, animation: "floatUp 1s 0.8s ease both" }}>
          <button className="cta-btn" onClick={() => scrollTo("Services")} style={{
            background: "linear-gradient(135deg,#FF4D00,#FF8A00)",
            border: "none", color: "#fff", padding: "16px 40px",
            fontFamily: "'Orbitron',sans-serif", fontSize: 12, fontWeight: 700,
            letterSpacing: 3, borderRadius: 4, cursor: "pointer",
            boxShadow: "0 0 20px rgba(255,77,0,0.4)",
          }}>{t("hero.btnServices")}</button>
          <button className="cta-btn" onClick={() => scrollTo("Contact")} style={{
            background: "transparent",
            border: "1px solid rgba(255,77,0,0.6)", color: "#FF4D00", padding: "16px 40px",
            fontFamily: "'Orbitron',sans-serif", fontSize: 12, fontWeight: 700,
            letterSpacing: 3, borderRadius: 4, cursor: "pointer",
          }}>{t("hero.btnContact")}</button>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, animation: "pulse 2s infinite", zIndex: 2 }}>
          <span style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 9, letterSpacing: 3, color: "rgba(255,255,255,0.3)" }}>{t("hero.scroll") || "SCROLL"}</span>
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom,#FF4D00,transparent)" }} />
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding: "100px 5%", position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 11, letterSpacing: 6, color: "#FF4D00" }}>{t("services.subtitle")}</span>
          <h2 style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 900, fontSize: "clamp(28px,4vw,52px)", letterSpacing: "0.05em", marginTop: 12, background: "linear-gradient(180deg,#fff 60%,rgba(255,255,255,0.5))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            {t("services.title")}
          </h2>
          <div style={{ width: 60, height: 2, background: "linear-gradient(to right,transparent,#FF4D00,transparent)", margin: "20px auto 0" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 24, maxWidth: 1200, margin: "0 auto" }}>
          {SERVICES.map((s, i) => (
            <div key={i} className="service-card section-anim" style={{
              background: "linear-gradient(145deg,rgba(255,77,0,0.05),rgba(13,17,23,0.8))",
              border: "1px solid rgba(255,77,0,0.2)",
              borderRadius: 8, padding: "36px 28px",
              position: "relative", overflow: "hidden",
              animationDelay: `${i * 0.1}s`,
            }}>
              <div style={{ position: "absolute", top: 0, right: 0, fontFamily: "'Orbitron',sans-serif", fontSize: 9, letterSpacing: 3, color: "rgba(255,77,0,0.2)", padding: "8px 12px", background: "rgba(255,77,0,0.05)", borderBottomLeftRadius: 8 }}>{s.tag}</div>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: "linear-gradient(to right,transparent,#FF4D00,transparent)", opacity: 0.4 }} />
              <div style={{ fontSize: 36, marginBottom: 20 }}>{s.icon}</div>
              <h3 style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 700, fontSize: 16, letterSpacing: 3, color: "#FF8A00", marginBottom: 12 }}>{t(s.titleKey)}</h3>
              <p style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 15, color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>{t(s.descKey)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: "100px 5%", position: "relative", zIndex: 2, background: "rgba(255,77,0,0.03)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          {/* Text */}
          <div>
            <span style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 11, letterSpacing: 6, color: "#FF4D00" }}>{t("about.subtitle")}</span>
            <h2 style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 900, fontSize: "clamp(24px,3.5vw,44px)", letterSpacing: "0.05em", marginTop: 12, lineHeight: 1.2, background: "linear-gradient(180deg,#fff 60%,rgba(255,255,255,0.5))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {t("about.title").split(" ").map((word, idx) => (
                <span key={`about-title-${idx}`}>{idx === 1 ? <><br/>{word}</> : word}</span>
              ))}
            </h2>
            <div style={{ width: 40, height: 2, background: "#FF4D00", margin: "24px 0" }} />
            <p style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 17, color: "rgba(255,255,255,0.7)", lineHeight: 1.9, marginBottom: 20 }}>
              {t("about.p1")}
            </p>
            <p style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 17, color: "rgba(255,255,255,0.7)", lineHeight: 1.9 }}>
              {t("about.p2")}
            </p>
            <div style={{ marginTop: 40, display: "flex", gap: 16 }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 32, fontWeight: 900, color: "#FF4D00", animation: "glowPulse 3s infinite" }}>4+</div>
                <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 12, letterSpacing: 3, color: "rgba(255,255,255,0.5)" }}>{t("about.services")}</div>
              </div>
              <div style={{ width: 1, background: "rgba(255,77,0,0.3)" }} />
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 32, fontWeight: 900, color: "#FF4D00", animation: "glowPulse 3s 0.5s infinite" }}>∞</div>
                <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 12, letterSpacing: 3, color: "rgba(255,255,255,0.5)" }}>{t("about.passion")}</div>
              </div>
              <div style={{ width: 1, background: "rgba(255,77,0,0.3)" }} />
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 32, fontWeight: 900, color: "#FF4D00", animation: "glowPulse 3s 1s infinite" }}>100%</div>
                <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 12, letterSpacing: 3, color: "rgba(255,255,255,0.5)" }}>{t("about.quality")}</div>
              </div>
            </div>
          </div>

          {/* Logo showcase */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24, position: "relative" }}>
            <div style={{ position: "relative", width: 280, height: 280, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ position: "absolute", inset: 0, border: "1px solid rgba(255,77,0,0.2)", borderRadius: "50%", animation: "rotateSlow 20s linear infinite" }}>
                <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 6, height: 6, background: "#FF4D00", borderRadius: "50%", marginTop: -3 }} />
              </div>
              <div style={{ position: "absolute", inset: 20, border: "1px solid rgba(255,77,0,0.15)", borderRadius: "50%", animation: "rotateSlow 15s linear infinite reverse" }} />
              <LogoMark size={160} glow />
            </div>
            {/* Color palette */}
            <div>
              <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 10, letterSpacing: 4, color: "rgba(255,255,255,0.4)", textAlign: "center", marginBottom: 16 }}>COLOR PALETTE</div>
              <div style={{ display: "flex", gap: 8 }}>
                {COLORS.map(c => (
                  <div key={c.hex} className="color-swatch" style={{ textAlign: "center" }}>
                    <div style={{ width: 44, height: 44, background: c.hex, borderRadius: 4, border: "1px solid rgba(255,255,255,0.1)" }} />
                    <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 9, color: "rgba(255,255,255,0.4)", marginTop: 4, letterSpacing: 1 }}>{c.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section id="values" style={{ padding: "100px 5%", position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 11, letterSpacing: 6, color: "#FF4D00" }}>
            {t("values.subtitle")}
            </span>
          <h2 style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 900, fontSize: "clamp(28px,4vw,52px)", letterSpacing: "0.05em", marginTop: 12, background: "linear-gradient(180deg,#fff 60%,rgba(255,255,255,0.5))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            {t("values.title")}
          </h2>
          <div style={{ width: 60, height: 2, background: "linear-gradient(to right,transparent,#FF4D00,transparent)", margin: "20px auto 0" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 24, maxWidth: 1000, margin: "0 auto" }}>
          {VALUES.map((v, i) => (
            <div key={i} className="value-card" style={{
              border: "1px solid rgba(255,77,0,0.2)", borderRadius: 8,
              padding: "40px 24px", textAlign: "center",
              background: "linear-gradient(145deg,rgba(255,77,0,0.04),transparent)",
              animationDelay: `${i*0.15}s`,
            }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>{v.icon}</div>
              <h3 style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: 4, color: "#FF8A00", marginBottom: 12 }}>{t(v.labelKey)}</h3>
              <p style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>{t(v.descKey)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section style={{ padding: "80px 5%", position: "relative", zIndex: 2, textAlign: "center", background: "linear-gradient(135deg,rgba(255,77,0,0.08),rgba(255,138,0,0.05))", borderTop: "1px solid rgba(255,77,0,0.2)", borderBottom: "1px solid rgba(255,77,0,0.2)" }}>
        <p style={{ fontFamily: "'Orbitron',sans-serif", fontSize: "clamp(10px,1.5vw,13px)", letterSpacing: 8, color: "rgba(255,255,255,0.4)", marginBottom: 24 }}>{t("cta.subtitle")}</p>
        <h2 style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 900, fontSize: "clamp(24px,4vw,56px)", letterSpacing: "0.08em" }}>
          <span style={{ color: "#fff" }}>{t("cta.title")} </span>
          <span style={{ color: "#FF4D00", animation: "glowPulse 3s infinite" }}>{t("cta.highlight")}</span>
        </h2>
        <p style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: "clamp(14px,1.8vw,18px)", marginTop: 16, color: "rgba(255,255,255,0.55)", letterSpacing: 2 }}>
          {t("cta.subtitle2") || t("cta.subtitle")}
        </p>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "100px 5%", position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 11, letterSpacing: 6, color: "#FF4D00" }}>{t("contact.subtitle")}</span>
          <h2 style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 900, fontSize: "clamp(28px,4vw,52px)", letterSpacing: "0.05em", marginTop: 12, background: "linear-gradient(180deg,#fff 60%,rgba(255,255,255,0.5))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            {t("contact.title")}
          </h2>
          <div style={{ width: 60, height: 2, background: "linear-gradient(to right,transparent,#FF4D00,transparent)", margin: "20px auto 0" }} />
        </div>

<div style={{ maxWidth: 600, margin: "0 auto" }}>
  <ContactForm t={t} />
</div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: "1px solid rgba(255,77,0,0.2)", padding: "48px 5%", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 32 }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <LogoMark size={40} glow />
            <div>
              <div style={{ fontFamily: "'Orbitron',sans-serif", fontWeight: 900, fontSize: 16, letterSpacing: 4 }}>ARVTECH</div>
              <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 8, letterSpacing: 6, color: "#FF4D00" }}>STUDIO</div>
            </div>
          </div>

          {/* Nav */}
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap", justifyContent: "center" }}>
          {NAV_LINKS.map(l => (
            <span key={l} className="nav-link" onClick={() => scrollTo(l)}
              style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Orbitron',sans-serif", fontSize: 10, letterSpacing: 3 }}>
              {t(`nav.${l}`).toUpperCase()}
            </span>
          ))}
          </div>

          {/* Socials */}
          <div style={{ display: "flex", gap: 24, fontSize: 20 }}>
{["🌐","🐦","📸","▶️"].map((icon) => (
  <span key={icon} className="social-icon" style={{ color: "rgba(255,255,255,0.5)", fontSize: 20 }}>{icon}</span>
))}
          </div>

          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 11, letterSpacing: 3, color: "#FF4D00", marginBottom: 8 }}>ARVTECH.STUDIO</div>
            <div style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.25)", letterSpacing: 2 }}>
              © {new Date().getFullYear()} ARVTECH STUDIO. {t("footer.rights")}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
