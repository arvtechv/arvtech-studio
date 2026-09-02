"use client";

import { Chakra_Petch, Inter } from "next/font/google";
import Footer from "@/components/layout/Footer";
import { CARE_CONFIG, CARE_SERVICIOS, CARE_PASOS } from "@/domain/constants/careData";

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

export default function CarePage() {
  return (
    <>
      <main className={`${display.variable} ${body.variable} care`}>
        <section className="hero">
          <div className="hero-text">
            <p className="eyebrow">ARVTECH CARE</p>
            <h1>Cuidamos lo que ya tienes.</h1>
            <p className="sub">
              Mantenimiento, instalación de cámaras y reparación de celulares
              en {CARE_CONFIG.ciudad}. Diagnóstico claro, sin sorpresas en el precio.
            </p>
            <div className="cta-row">
              <a
                className="btn-primary"
                href={`https://wa.me/${CARE_CONFIG.whatsappNumber}?text=${CARE_CONFIG.whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Escríbenos por WhatsApp
              </a>
              <a className="btn-ghost" href={CARE_CONFIG.facebookUrl} target="_blank" rel="noopener noreferrer">
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
            {CARE_SERVICIOS.map((s) => (
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
            {CARE_PASOS.map((p) => (
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
            href={`https://wa.me/${CARE_CONFIG.whatsappNumber}?text=${CARE_CONFIG.whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contactar ahora
          </a>
        </section>

        <style jsx>{`
          .care {
            --bg: #FAFAFC;
            --surface: #FFFFFF;
            --border: #E2E8F0;
            --ink: #0F172A;
            --muted: #475569;
            --accent: #FF5500;
            --accent-text: #FF5500;
            --accent-ink: #FFFFFF;
            --accent-2: #0284C7;
            background: var(--bg);
            color: var(--ink);
            font-family: var(--font-body), sans-serif;
            padding: 80px 6vw 6rem;
            min-height: 100vh;
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
            font-weight: 700;
          }
          .hero {
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            gap: 4rem;
            align-items: center;
            padding: 3rem 0 4rem;
          }
          .hero h1 {
            font-size: clamp(2.2rem, 4vw, 3.4rem);
            line-height: 1.1;
            color: #0F172A;
          }
          .sub {
            color: var(--muted);
            font-size: 1.05rem;
            line-height: 1.6;
            max-width: 44ch;
            margin: 1.25rem 0 2rem;
          }
          .cta-row {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
          }
          .btn-primary {
            background: linear-gradient(135deg, #FF5500 0%, #FF8800 100%);
            color: #FFFFFF;
            font-weight: 700;
            padding: 0.9rem 1.6rem;
            border-radius: 6px;
            text-decoration: none;
            font-size: 0.95rem;
            box-shadow: 0 4px 14px rgba(255, 85, 0, 0.25);
            transition: transform 0.2s, box-shadow 0.2s;
          }
          .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(255, 85, 0, 0.35);
          }
          .btn-primary.large {
            font-size: 1.05rem;
            padding: 1.05rem 2rem;
          }
          .btn-ghost {
            border: 1px solid #CBD5E1;
            background: #FFFFFF;
            color: #0F172A;
            font-weight: 600;
            padding: 0.9rem 1.6rem;
            border-radius: 6px;
            text-decoration: none;
            font-size: 0.95rem;
            transition: border-color 0.2s, color 0.2s;
          }
          .btn-ghost:hover {
            border-color: #FF5500;
            color: #FF5500;
          }
          .ticket {
            position: relative;
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 1.75rem 1.75rem 2.25rem;
            max-width: 380px;
            justify-self: end;
            box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
          }
          .ticket-head {
            display: flex;
            justify-content: space-between;
            font-family: var(--font-display), sans-serif;
            font-size: 0.85rem;
            letter-spacing: 0.08em;
            font-weight: 700;
            color: var(--muted);
            border-bottom: 1px dashed var(--border);
            padding-bottom: 0.9rem;
            margin-bottom: 0.9rem;
          }
          .folio {
            color: var(--accent-2);
            font-weight: 700;
          }
          .ticket-row {
            display: flex;
            justify-content: space-between;
            font-size: 0.9rem;
            padding: 0.45rem 0;
            color: var(--muted);
          }
          .ticket-row span:last-child {
            color: var(--ink);
            text-align: right;
            font-weight: 600;
          }
          .stamp {
            color: var(--accent-2) !important;
            font-family: var(--font-display), sans-serif;
            letter-spacing: 0.06em;
            font-weight: 700;
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
            font-weight: 700;
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
            border-radius: 10px;
            padding: 1.75rem 1.5rem;
            box-shadow: 0 4px 15px rgba(15,23,42,0.03);
            transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
          }
          .card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 30px rgba(255, 85, 0, 0.1);
            border-color: rgba(255, 85, 0, 0.3);
          }
          .card .icon {
            font-size: 1.8rem;
          }
          .card h3 {
            font-size: 1.05rem;
            margin: 0.9rem 0 0.5rem;
            color: var(--ink);
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
            background: var(--surface);
            border: 1px solid var(--border);
            border-left: 4px solid var(--accent);
            border-radius: 8px;
            padding: 1.25rem 1.1rem;
            box-shadow: 0 2px 10px rgba(15,23,42,0.02);
          }
          .paso-n {
            font-family: var(--font-display), sans-serif;
            color: var(--accent-text);
            font-size: 1.4rem;
            font-weight: 700;
          }
          .paso h3 {
            font-size: 1rem;
            margin: 0.5rem 0 0.4rem;
            color: var(--ink);
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
            color: var(--ink);
          }
          .cta-final p {
            color: var(--muted);
            margin: 1rem 0 2rem;
          }
          @media (max-width: 860px) {
            .hero {
              grid-template-columns: 1fr;
              padding-top: 2rem;
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
      <Footer />
    </>
  );
}