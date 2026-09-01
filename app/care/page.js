"use client"

import { Chakra_Petch, Inter } from "next/font/google";

const display = Chakra_Petch({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});
const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

// TODO: reemplaza estos datos con los tuyos
const WHATSAPP_NUMBER = "5214811541605"; // formato: 52 + 10 dígitos, sin espacios
const WHATSAPP_MSG = encodeURIComponent(
  "Hola, vi ArvTech Care y quiero pedir información."
);
const FACEBOOK_URL = "https://facebook.com/arvtechcare";
const CIUDAD = "Ciudad Valles"; // ej. "Ciudad Valles y alrededores"

const SERVICIOS = [
  {
    icono: "🔧",
    titulo: "Mantenimiento y ensamble",
    texto: "Armado, limpieza y mantenimiento preventivo de equipos de cómputo y electrónicos.",
  },
  {
    icono: "📷",
    titulo: "Instalación de cámaras",
    texto: "Cámaras de seguridad para casa o negocio, configuradas y listas para monitorear desde tu celular.",
  },
  {
    icono: "📱",
    titulo: "Reparación de celulares",
    texto: "Pantallas, baterías, puertos de carga y fallas comunes, con diagnóstico antes de cobrar.",
  },
  {
    icono: "🛠️",
    titulo: "Soporte técnico general",
    texto: "Ese problema técnico que nadie más te resuelve. Si tiene cable o pantalla, probablemente podemos verlo.",
  },
];

const PASOS = [
  {
    n: "01",
    titulo: "Diagnóstico",
    texto: "Revisamos tu equipo y te decimos exactamente qué tiene.",
  },
  {
    n: "02",
    titulo: "Cotización",
    texto: "Conoces el costo antes de que toquemos una sola pieza.",
  },
  {
    n: "03",
    titulo: "Reparación",
    texto: "Trabajamos con cuidado y piezas de calidad comprobada.",
  },
  {
    n: "04",
    titulo: "Entrega",
    texto: "Te devolvemos el equipo probado y funcionando frente a ti.",
  },
];

export default function CarePage() {
  return (
    <main className={`${display.variable} ${body.variable} care`}>
      <section className="hero">
        <div className="hero-text">
          <p className="eyebrow">ARVTECH CARE</p>
          <h1>Cuidamos lo que ya tienes.</h1>
          <p className="sub">
            Mantenimiento, instalación de cámaras y reparación de celulares
            en {CIUDAD}. Diagnóstico claro, sin sorpresas en el precio.
          </p>
          <div className="cta-row">
            <a
              className="btn-primary"
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Escríbenos por WhatsApp
            </a>
            <a className="btn-ghost" href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
              Ver en Facebook
            </a>
          </div>
        </div>

        <div className="ticket" aria-hidden="true">
          <div className="ticket-head">
            <span>ORDEN DE SERVICIO</span>
            <span className="folio">#0142</span>
          </div>
          <div className="ticket-row">
            <span>Servicio</span>
            <span>Instalación de cámaras</span>
          </div>
          <div className="ticket-row">
            <span>Equipo</span>
            <span>Kit 4 cámaras + DVR</span>
          </div>
          <div className="ticket-row">
            <span>Estado</span>
            <span className="stamp">LISTO</span>
          </div>
          <div className="ticket-punch" />
        </div>
      </section>

      <section className="servicios">
        <p className="section-label">Qué hacemos</p>
        <div className="grid">
          {SERVICIOS.map((s) => (
            <div className="card" key={s.titulo}>
              <span className="icon">{s.icono}</span>
              <h3>{s.titulo}</h3>
              <p>{s.texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="proceso">
        <p className="section-label">Cómo trabajamos</p>
        <div className="pasos">
          {PASOS.map((p) => (
            <div className="paso" key={p.n}>
              <span className="paso-n">{p.n}</span>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-final">
        <h2>¿Tu equipo necesita atención?</h2>
        <p>Mándanos fotos o cuéntanos qué pasa, te respondemos directo por WhatsApp.</p>
        <a
          className="btn-primary large"
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Contactar ahora
        </a>
      </section>

      <style jsx>{`
        .care {
          --bg: #f6f5f2;
          --surface: #ffffff;
          --border: #e3e1da;
          --ink: #17191b;
          --muted: #63676c;
          --accent: #ff7a29;
          --accent-text: #b8500f;
          --accent-ink: #2a0f00;
          --accent-2: #0d8f81;
          background: var(--bg);
          color: var(--ink);
          font-family: var(--font-body), sans-serif;
          padding: 0 6vw 6rem;
        }
        h1,
        h2,
        h3 {
          font-family: var(--font-display), sans-serif;
          margin: 0;
          letter-spacing: 0.01em;
        }
        .eyebrow {
          font-family: var(--font-display), sans-serif;
          color: var(--accent-text);
          font-size: 0.85rem;
          letter-spacing: 0.18em;
          margin: 0 0 1rem;
        }
        .hero {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: center;
          padding: 7rem 0 5rem;
        }
        .hero h1 {
          font-size: clamp(2.2rem, 4vw, 3.4rem);
          line-height: 1.05;
        }
        .sub {
          color: var(--muted);
          font-size: 1.05rem;
          line-height: 1.6;
          max-width: 40ch;
          margin: 1.25rem 0 2rem;
        }
        .cta-row {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .btn-primary {
          background: var(--accent);
          color: var(--accent-ink);
          font-weight: 600;
          padding: 0.9rem 1.6rem;
          border-radius: 4px;
          text-decoration: none;
          font-size: 0.95rem;
        }
        .btn-primary.large {
          font-size: 1.05rem;
          padding: 1.05rem 2rem;
        }
        .btn-ghost {
          border: 1px solid var(--border);
          color: var(--ink);
          padding: 0.9rem 1.6rem;
          border-radius: 4px;
          text-decoration: none;
          font-size: 0.95rem;
        }
        .ticket {
          position: relative;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 1.5rem 1.5rem 2rem;
          max-width: 360px;
          justify-self: end;
        }
        .ticket-head {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-display), sans-serif;
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          color: var(--muted);
          border-bottom: 1px dashed var(--border);
          padding-bottom: 0.9rem;
          margin-bottom: 0.9rem;
        }
        .folio {
          color: var(--accent-2);
        }
        .ticket-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          padding: 0.4rem 0;
          color: var(--muted);
        }
        .ticket-row span:last-child {
          color: var(--ink);
          text-align: right;
        }
        .stamp {
          color: var(--accent-2) !important;
          font-family: var(--font-display), sans-serif;
          letter-spacing: 0.06em;
        }
        .ticket-punch {
          position: absolute;
          bottom: -10px;
          left: 24px;
          right: 24px;
          height: 20px;
          background: repeating-linear-gradient(
            90deg,
            var(--bg) 0 8px,
            transparent 8px 16px
          );
        }
        .section-label {
          font-family: var(--font-display), sans-serif;
          color: var(--accent-text);
          font-size: 0.85rem;
          letter-spacing: 0.16em;
          margin: 0 0 2rem;
        }
        .servicios,
        .proceso {
          padding: 4rem 0;
          border-top: 1px solid var(--border);
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
        }
        .card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 1.75rem 1.5rem;
        }
        .card .icon {
          font-size: 1.6rem;
        }
        .card h3 {
          font-size: 1.05rem;
          margin: 0.9rem 0 0.5rem;
        }
        .card p {
          color: var(--muted);
          font-size: 0.9rem;
          line-height: 1.55;
          margin: 0;
        }
        .pasos {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        .paso {
          border-left: 2px solid var(--accent);
          padding-left: 1.1rem;
        }
        .paso-n {
          font-family: var(--font-display), sans-serif;
          color: var(--accent-text);
          font-size: 1.4rem;
        }
        .paso h3 {
          font-size: 1rem;
          margin: 0.5rem 0 0.4rem;
        }
        .paso p {
          color: var(--muted);
          font-size: 0.88rem;
          line-height: 1.5;
          margin: 0;
        }
        .cta-final {
          text-align: center;
          padding: 5rem 0 2rem;
          border-top: 1px solid var(--border);
        }
        .cta-final h2 {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
        }
        .cta-final p {
          color: var(--muted);
          margin: 1rem 0 2rem;
        }
        @media (max-width: 860px) {
          .hero {
            grid-template-columns: 1fr;
            padding-top: 4.5rem;
          }
          .ticket {
            justify-self: start;
            max-width: 100%;
          }
          .pasos {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </main>
  );
}