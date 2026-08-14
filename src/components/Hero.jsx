import WhatsAppIcon from "./WhatsAppIcon";
import { waLink, CONTACT } from "../config";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="container hero-content">
        <span className="eyebrow hero-eyebrow">Instalación · Reparación · Service técnico</span>

        <h1 className="hero-title">
          Frío que funciona,
          <br />
          cuando lo necesitás.
        </h1>

        <p className="hero-subtitle">
          Instalamos y reparamos aires acondicionados, heladeras y lavarropas
          en {CONTACT.zona}. Presupuesto sin cargo, directo por WhatsApp.
        </p>

        <div className="hero-actions">
          <a
            href={waLink(CONTACT.mensajePresupuesto)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <WhatsAppIcon size={20} />
            Pedir presupuesto ahora
          </a>
          <a href="#servicios" className="btn btn-ghost">
            Ver servicios
          </a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-num">+40</span>
            <span className="hero-stat-label">Años de experiencia</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-num">$0</span>
            <span className="hero-stat-label">Costo del presupuesto</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-num">3</span>
            <span className="hero-stat-label">Zonas cubiertas</span>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          overflow: hidden;
          background: linear-gradient(160deg, var(--azul-acero) 0%, var(--azul-acero-dark) 55%, var(--grafito) 100%);
          padding: 120px 0 90px;
        }
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(90, 169, 201, 0.14) 1px, transparent 1px),
            linear-gradient(90deg, rgba(90, 169, 201, 0.14) 1px, transparent 1px);
          background-size: 42px 42px;
          -webkit-mask-image: radial-gradient(ellipse 80% 60% at 60% 20%, black 40%, transparent 90%);
          mask-image: radial-gradient(ellipse 80% 60% at 60% 20%, black 40%, transparent 90%);
        }
        .hero-glow {
          position: absolute;
          top: -120px;
          right: -80px;
          width: 480px;
          height: 480px;
          background: radial-gradient(circle, rgba(90, 169, 201, 0.35) 0%, transparent 70%);
          filter: blur(10px);
        }
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 700px;
        }
        .hero-eyebrow {
          display: block;
          margin-bottom: 22px;
        }
        .hero-title {
          color: white;
          font-size: clamp(2.4rem, 5.2vw, 3.6rem);
          font-weight: 700;
          margin-bottom: 22px;
        }
        .hero-subtitle {
          color: var(--azul-hielo-light);
          font-size: 1.12rem;
          line-height: 1.6;
          max-width: 540px;
          margin-bottom: 36px;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 56px;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 26px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.98rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }
        .btn-primary {
          background: var(--verde-wpp);
          color: white;
          box-shadow: 0 10px 26px rgba(37, 211, 102, 0.35);
        }
        .btn-primary:hover {
          background: var(--verde-wpp-dark);
          transform: translateY(-2px);
        }
        .btn-ghost {
          background: rgba(255,255,255,0.06);
          color: white;
          border: 1px solid rgba(255,255,255,0.25);
        }
        .btn-ghost:hover {
          background: rgba(255,255,255,0.14);
        }
        .hero-stats {
          display: flex;
          align-items: center;
          gap: 28px;
          padding-top: 28px;
          border-top: 1px solid rgba(255,255,255,0.14);
        }
        .hero-stat {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .hero-stat-num {
          font-family: var(--font-mono);
          color: white;
          font-size: 1.3rem;
          font-weight: 600;
        }
        .hero-stat-label {
          color: var(--azul-hielo-light);
          font-size: 0.8rem;
        }
        .hero-stat-divider {
          width: 1px;
          height: 32px;
          background: rgba(255,255,255,0.16);
        }
        @media (max-width: 640px) {
          .hero { padding: 100px 0 70px; }
          .hero-stats { gap: 18px; flex-wrap: wrap; }
          .btn { padding: 14px 20px; font-size: 0.92rem; }
        }
      `}</style>
    </section>
  );
}
