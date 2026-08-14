import WhatsAppIcon from "./WhatsAppIcon";
import { waLink, CONTACT } from "../config";

export default function CTABand() {
  return (
    <section className="ctaband" id="contacto">
      <div className="container ctaband-inner">
        <div>
          <h2 className="ctaband-title">¿Necesitás presupuesto ya?</h2>
          <p className="ctaband-text">Contanos qué equipo tenés y te respondemos por WhatsApp en el momento.</p>
        </div>
        <a
          href={waLink(CONTACT.mensajePresupuesto)}
          target="_blank"
          rel="noopener noreferrer"
          className="ctaband-btn"
        >
          <WhatsAppIcon size={22} />
          Pedir presupuesto por WhatsApp
        </a>
      </div>

      <style>{`
        .ctaband {
          background: linear-gradient(120deg, var(--verde-wpp-dark), var(--verde-wpp));
          padding: 64px 0;
        }
        .ctaband-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
        }
        .ctaband-title {
          color: white;
          font-size: clamp(1.5rem, 3vw, 2rem);
          margin-bottom: 8px;
        }
        .ctaband-text {
          color: rgba(255,255,255,0.9);
          font-size: 1rem;
        }
        .ctaband-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: white;
          color: var(--verde-wpp-dark);
          font-weight: 700;
          padding: 17px 28px;
          border-radius: 999px;
          white-space: nowrap;
          box-shadow: 0 10px 26px rgba(0, 0, 0, 0.18);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .ctaband-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.22);
        }
        @media (max-width: 560px) {
          .ctaband { padding: 48px 0; }
          .ctaband-inner { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </section>
  );
}
