import WhatsAppIcon from "./WhatsAppIcon";
import { waLink, CONTACT } from "../config";

export default function About() {
  return (
    <section className="about" id="nosotros">
      <div className="container about-grid">
        <div className="about-copy">
          <span className="eyebrow">Quiénes somos</span>
          <h2 className="about-title">Trabajo técnico serio, sin vueltas</h2>
          <p className="about-text">
            Con más de 40 años de trayectoria, en Coria Refrigeración instalamos
            y reparamos aires acondicionados, heladeras y lavarropas en {CONTACT.zona}.
            Diagnosticamos el problema real, te explicamos qué necesita el equipo
            y hacemos el trabajo con repuestos adecuados y garantía por escrito.
          </p>
          <p className="about-text">
            Nada de esperas eternas ni presupuestos inflados: coordinamos la visita
            por WhatsApp y te confirmamos el costo antes de mover un tornillo.
          </p>

          <div className="about-actions">
            <a
              href={waLink(CONTACT.mensajeConsulta)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              <WhatsAppIcon size={19} />
              Hablar por WhatsApp
            </a>
          </div>
        </div>

        <div className="about-panel">
          <div className="panel-row">
            <span className="panel-label">Zona de cobertura</span>
            <span className="panel-value">{CONTACT.zona}</span>
          </div>
          <div className="panel-row">
            <span className="panel-label">Presupuesto</span>
            <span className="panel-value">Sin cargo, por WhatsApp</span>
          </div>
          <div className="panel-row">
            <span className="panel-label">Garantía</span>
            <span className="panel-value">Por escrito en cada trabajo</span>
          </div>
          <div className="panel-row panel-row-last">
            <span className="panel-label">Experiencia</span>
            <span className="panel-value">+40 años en el rubro</span>
          </div>
        </div>
      </div>

      <style>{`
        .about {
          padding: 96px 0;
          background: white;
          border-top: 1px solid var(--linea);
          border-bottom: 1px solid var(--linea);
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 64px;
          align-items: start;
        }
        .about-title {
          font-size: clamp(1.7rem, 3.2vw, 2.2rem);
          margin: 14px 0 22px;
        }
        .about-text {
          color: #4A5568;
          line-height: 1.7;
          font-size: 1rem;
          margin-bottom: 16px;
          max-width: 520px;
        }
        .about-actions {
          margin-top: 28px;
        }
        .btn-dark {
          background: var(--grafito);
          color: white;
        }
        .btn-dark:hover {
          background: var(--azul-acero);
          transform: translateY(-2px);
        }
        .about-panel {
          background: var(--grafito);
          border-radius: 14px;
          padding: 8px 28px;
        }
        .panel-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 22px 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .panel-row-last {
          border-bottom: none;
        }
        .panel-label {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--azul-hielo);
        }
        .panel-value {
          color: white;
          font-size: 1rem;
          font-weight: 500;
        }
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        @media (max-width: 560px) {
          .about { padding: 64px 0; }
        }
      `}</style>
    </section>
  );
}
